const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const seasonCards = Array.from(document.querySelectorAll("[data-season-target]"));
const seasonCarousel = document.querySelector("[data-season-carousel]");
const seasonPrev = document.querySelector("[data-season-prev]");
const seasonNext = document.querySelector("[data-season-next]");
const seasonProgress = document.querySelector("[data-season-progress]");
const workStack = document.querySelector("[data-work-stack]");
const workPanels = Array.from(document.querySelectorAll("[data-work-panel]"));
const workPrev = document.querySelector("[data-work-prev]");
const workNext = document.querySelector("[data-work-next]");
const workProgress = document.querySelector("[data-work-progress]");
const workModal = document.querySelector("[data-work-modal]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalDescription = document.querySelector("[data-modal-description]");
const modalGallery = document.querySelector("[data-modal-gallery]");
const modalClose = document.querySelector("[data-modal-close]");
const seasonModal = document.querySelector("[data-season-modal]");
const seasonModalEn = document.querySelector("[data-season-modal-en]");
const seasonModalTitle = document.querySelector("[data-season-modal-title]");
const seasonModalDescription = document.querySelector("[data-season-modal-description]");
const seasonModalTags = document.querySelector("[data-season-modal-tags]");
const seasonModalGallery = document.querySelector("[data-season-modal-gallery]");
const seasonModalClose = document.querySelector("[data-season-modal-close]");
const masonryRhythms = ["is-landscape", "is-portrait", "is-square", "is-portrait", "is-landscape", "is-square"];
const heroScrollIndicator = document.querySelector("[data-hero-scroll]");

const customCursor = document.querySelector(".custom-cursor");
const imagePreview = document.querySelector("[data-image-preview]");
const imagePreviewImg = document.querySelector("[data-image-preview-img]");
const imagePreviewCloseTargets = document.querySelectorAll("[data-image-preview-close]");
const cursorStates = ["is-hover", "is-arrow", "is-zoom", "is-drag", "is-close-preview"];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const supportsCustomCursor =
  customCursor &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
  !prefersReducedMotion;
const supportsTextSequence =
  window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
  !prefersReducedMotion;
const textSequenceOffsets = {
  soft: 14,
  medium: 24,
  strong: 38,
  kicker: 16,
  title: 38,
  heading: 28,
  body: 18,
  copy: 22
};
const textSequenceInitialOpacity = 0.8;
const textSequenceStepDelay = 0.14;
const textSequenceMaxDelay = 0.36;
const textSequenceDuration = 0.62;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function easeOutCubic(value) {
  return 1 - Math.pow(1 - value, 3);
}

function setupCursorTargets() {
  document.querySelectorAll("a, button, [role='button'], .button, .work-panel-button").forEach((element) => {
    if (!element.dataset.cursor) {
      element.dataset.cursor = "hover";
    }
  });

  seasonCards.forEach((card) => {
    card.dataset.cursor = "arrow";
  });

  workPanels.forEach((panel) => {
    panel.dataset.cursor = "arrow";
  });
}

function initCustomCursor() {
  if (!supportsCustomCursor) {
    return;
  }

  setupCursorTargets();
  document.body.classList.add("custom-cursor-enabled");

  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let currentX = targetX;
  let currentY = targetY;
  let isVisible = false;
  let cursorDragStartX = 0;
  let cursorDragPointerId = null;
  const cursorSize = 84;

  const setCursorState = (state) => {
    customCursor.classList.remove(...cursorStates);

    if (state === "hover" || state === "arrow" || state === "zoom" || state === "drag" || state === "close-preview") {
      customCursor.classList.add(`is-${state}`);
    }
  };

  const syncCursorState = (element) => {
    const dragRegion = element?.closest?.("[data-season-carousel][data-cursor='drag']");
    const target = dragRegion && !element?.closest?.(".season-entry-controls") ? dragRegion : element?.closest?.("[data-cursor]");
    setCursorState(target?.dataset.cursor || "");
  };

  const resetCursorDragState = () => {
    cursorDragPointerId = null;
    customCursor.classList.remove("is-dragging", "is-drag-left", "is-drag-right");
  };

  const showCursor = () => {
    if (isVisible) {
      return;
    }

    isVisible = true;
    customCursor.classList.remove("is-hidden");
  };

  const hideCursor = () => {
    isVisible = false;
    customCursor.classList.add("is-hidden");
    setCursorState("");
    resetCursorDragState();
  };

  const renderCursor = () => {
    currentX += (targetX - currentX) * 0.18;
    currentY += (targetY - currentY) * 0.18;
    customCursor.style.transform = `translate3d(${currentX - cursorSize / 2}px, ${currentY - cursorSize / 2}px, 0)`;
    window.requestAnimationFrame(renderCursor);
  };

  document.addEventListener(
    "pointermove",
    (event) => {
      if (event.pointerType && event.pointerType !== "mouse") {
        hideCursor();
        return;
      }

      targetX = event.clientX;
      targetY = event.clientY;

      if (cursorDragPointerId === event.pointerId) {
        const deltaX = event.clientX - cursorDragStartX;
        customCursor.classList.toggle("is-drag-left", deltaX < -2);
        customCursor.classList.toggle("is-drag-right", deltaX > 2);
      }

      showCursor();
    },
    { passive: true }
  );

  document.addEventListener("pointerdown", (event) => {
    if (event.pointerType && event.pointerType !== "mouse") {
      return;
    }

    const dragRegion = event.target.closest?.("[data-cursor='drag']");
    if (!dragRegion || event.target.closest?.(".season-entry-controls")) {
      return;
    }

    cursorDragStartX = event.clientX;
    cursorDragPointerId = event.pointerId;
    customCursor.classList.add("is-dragging");
    customCursor.classList.remove("is-drag-left", "is-drag-right");
  });

  document.addEventListener("pointerup", resetCursorDragState);
  document.addEventListener("pointercancel", resetCursorDragState);

  document.addEventListener("pointerover", (event) => {
    syncCursorState(event.target);
  });

  document.addEventListener("pointerout", (event) => {
    const currentTarget = event.target.closest?.("[data-cursor]");
    const nextTarget = event.relatedTarget?.closest?.("[data-cursor]");

    if (currentTarget === nextTarget) {
      return;
    }

    syncCursorState(event.relatedTarget);
  });

  document.addEventListener("mouseleave", hideCursor);
  window.addEventListener("blur", hideCursor);
  window.requestAnimationFrame(renderCursor);
}

initCustomCursor();

function getTextSequenceOffset(element) {
  const type = element.dataset.textStepType;

  if (type === "title") {
    return textSequenceOffsets.title;
  }

  if (type === "heading") {
    return textSequenceOffsets.heading;
  }

  if (type === "body") {
    return textSequenceOffsets.body;
  }

  if (element.classList.contains("eyebrow")) {
    return textSequenceOffsets.kicker;
  }

  if (element.matches("h1, h2")) {
    return textSequenceOffsets.strong;
  }

  if (element.matches("h3, h4")) {
    return textSequenceOffsets.medium;
  }

  return textSequenceOffsets.copy;
}

function initTextSequence() {
  if (!supportsTextSequence) {
    return;
  }

  const excludedSelector =
    ".site-header, .work-modal, .season-modal, .image-preview, .custom-cursor, [data-cursor], .site-footer";

  const textSequences = Array.from(document.querySelectorAll("[data-text-sequence]"))
    .filter((sequence) => !sequence.closest(excludedSelector))
    .map((sequence) => {
      const steps = Array.from(sequence.querySelectorAll("[data-text-step]"))
        .filter((step) => !step.closest(excludedSelector) && step.closest("[data-text-sequence]") === sequence)
        .map((element) => {
          const offset = getTextSequenceOffset(element);
          element.style.setProperty("--text-sequence-y", `${offset}px`);
          element.style.setProperty("--text-sequence-opacity", textSequenceInitialOpacity);

          return {
            element,
            offset,
            currentY: offset,
            targetY: offset,
            currentOpacity: textSequenceInitialOpacity,
            targetOpacity: textSequenceInitialOpacity
          };
        });

      return { element: sequence, steps };
    })
    .filter((sequence) => sequence.steps.length);

  if (!textSequences.length) {
    return;
  }

  const visibleSequences = new Set();
  let isTicking = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const sequence = textSequences.find((candidate) => candidate.element === entry.target);

        if (!sequence) {
          return;
        }

        if (entry.isIntersecting) {
          visibleSequences.add(sequence);
        } else {
          visibleSequences.delete(sequence);
        }
      });
      requestTextSequenceUpdate();
    },
    { rootMargin: "22% 0px", threshold: 0 }
  );

  textSequences.forEach((sequence) => observer.observe(sequence.element));

  function updateTextSequence() {
    isTicking = false;

    if (!visibleSequences.size) {
      return;
    }

    const viewportHeight = window.innerHeight || 1;
    const progressStart = viewportHeight * 0.85;
    const progressEnd = viewportHeight * 0.42;
    let shouldContinue = false;

    visibleSequences.forEach((sequence) => {
      const rect = sequence.element.getBoundingClientRect();
      const moduleProgress = clamp((progressStart - rect.top) / (progressStart - progressEnd), 0, 1);

      sequence.steps.forEach((step, index) => {
        const localStart = Math.min(index * textSequenceStepDelay, textSequenceMaxDelay);
        const localProgress = clamp((moduleProgress - localStart) / textSequenceDuration, 0, 1);
        const eased = easeOutCubic(localProgress);
        step.targetY = step.offset * (1 - eased);
        step.targetOpacity = textSequenceInitialOpacity + (1 - textSequenceInitialOpacity) * eased;
        step.currentY += (step.targetY - step.currentY) * 0.18;
        step.currentOpacity += (step.targetOpacity - step.currentOpacity) * 0.18;

        if (Math.abs(step.targetY - step.currentY) > 0.04 || Math.abs(step.targetOpacity - step.currentOpacity) > 0.002) {
          shouldContinue = true;
        }

        step.element.style.setProperty("--text-sequence-y", `${step.currentY.toFixed(2)}px`);
        step.element.style.setProperty("--text-sequence-opacity", step.currentOpacity.toFixed(3));
      });
    });

    if (shouldContinue) {
      requestTextSequenceUpdate();
    }
  }

  function requestTextSequenceUpdate() {
    if (isTicking) {
      return;
    }

    isTicking = true;
    window.requestAnimationFrame(updateTextSequence);
  }

  window.addEventListener("scroll", requestTextSequenceUpdate, { passive: true });
  window.addEventListener("resize", requestTextSequenceUpdate);
  requestTextSequenceUpdate();
}

initTextSequence();

const workCollections = {
  // Activity gallery images are grouped by activity folder for easy replacement.
  hiking: {
    title: "Hiking / Forest Trail",
    description: "围绕徒步活动的完整节奏，适合放一整组从出发到返程的连续照片。",
    items: [
      { src: "assets/images/galleries/activities/hiking/hiking-01.jpg", alt: "山野徒步中的儿童研学纪实摄影", note: "Arrival / Warm-up" },
      { src: "assets/images/galleries/activities/hiking/hiking-02.jpg", alt: "孩子观察昆虫与植物细节", note: "Observation / Pause" },
      { src: "assets/images/galleries/activities/hiking/hiking-03.jpg", alt: "溪流溯溪活动中的儿童户外摄影", note: "Trail Turn / Movement" },
      { src: "assets/images/galleries/activities/hiking/hiking-04.jpg", alt: "山野徒步中的儿童研学纪实摄影", note: "Forest Light / Formation" },
      { src: "assets/images/galleries/activities/hiking/hiking-05.jpg", alt: "孩子观察昆虫与植物细节", note: "Hands / Texture" },
      { src: "assets/images/galleries/activities/hiking/hiking-06.jpg", alt: "溪流溯溪活动中的儿童户外摄影", note: "Return / Distance" }
    ]
  },
  stream: {
    title: "Stream Trekking",
    description: "适合放更多脚下、石面、水流和伙伴互动的照片，一组一排四列的瀑布流更像现场观察笔记。",
    items: [
      { src: "assets/images/galleries/activities/stream-trekking/stream-trekking-01.jpg", alt: "溪流溯溪活动中的儿童户外摄影", note: "Entry / Waterline" },
      { src: "assets/images/galleries/activities/stream-trekking/stream-trekking-02.jpg", alt: "山野徒步中的儿童研学纪实摄影", note: "Crossing / Balance" },
      { src: "assets/images/galleries/activities/stream-trekking/stream-trekking-03.jpg", alt: "冬季雪地研学活动摄影", note: "Rest / Wet Shoes" },
      { src: "assets/images/galleries/activities/stream-trekking/stream-trekking-04.jpg", alt: "溪流溯溪活动中的儿童户外摄影", note: "Stone / Route Choice" },
      { src: "assets/images/galleries/activities/stream-trekking/stream-trekking-05.jpg", alt: "孩子在茶田中采茶", note: "Group / Movement" },
      { src: "assets/images/galleries/activities/stream-trekking/stream-trekking-06.jpg", alt: "秋季田野收获活动纪实", note: "Detail / Surface" }
    ]
  },
  tea: {
    title: "Tea Picking",
    description: "春季系列可以在这里放完整采茶专题，包含坡地、手部细节、茶篓和人与环境的距离变化。",
    items: [
      { src: "assets/images/galleries/activities/tea-picking/tea-picking-01.jpg", alt: "孩子在茶田中采茶", note: "Slope / Rows" },
      { src: "assets/images/galleries/activities/tea-picking/tea-picking-02.jpg", alt: "春季茶田与新叶中的儿童研学活动", note: "Spring Light / Green" },
      { src: "assets/images/galleries/activities/tea-picking/tea-picking-03.jpg", alt: "孩子观察昆虫与植物细节", note: "Leaves / Fingers" },
      { src: "assets/images/galleries/activities/tea-picking/tea-picking-04.jpg", alt: "孩子在茶田中采茶", note: "Basket / Pace" },
      { src: "assets/images/galleries/activities/tea-picking/tea-picking-05.jpg", alt: "山野徒步中的儿童研学纪实摄影", note: "Group / Pause" },
      { src: "assets/images/galleries/activities/tea-picking/tea-picking-06.jpg", alt: "春季茶田与新叶中的儿童研学活动", note: "Mist / End Frame" }
    ]
  },
  harvest: {
    title: "Rice Harvesting",
    description: "秋季活动更适合用偏密的图像节奏呈现身体参与感，点击后可以继续替换成你自己的整组收割与田野照片。",
    items: [
      { src: "assets/images/galleries/activities/rice-harvesting/rice-harvesting-01.jpg", alt: "秋季田野收获活动纪实", note: "Field / Wide Shot" },
      { src: "assets/images/galleries/activities/rice-harvesting/rice-harvesting-02.jpg", alt: "秋季稻田、莲藕和泥土里的研学活动", note: "Mud / Texture" },
      { src: "assets/images/galleries/activities/rice-harvesting/rice-harvesting-03.jpg", alt: "秋季田野收获活动纪实", note: "Tools / Hands" },
      { src: "assets/images/galleries/activities/rice-harvesting/rice-harvesting-04.jpg", alt: "孩子在茶田中采茶", note: "Carrying / Weight" },
      { src: "assets/images/galleries/activities/rice-harvesting/rice-harvesting-05.jpg", alt: "秋季稻田、莲藕和泥土里的研学活动", note: "Harvest / Group" },
      { src: "assets/images/galleries/activities/rice-harvesting/rice-harvesting-06.jpg", alt: "山野徒步中的儿童研学纪实摄影", note: "End / Quiet Frame" }
    ]
  },
  skiing: {
    title: "Skiing / Snow Camp",
    description: "冬季主题适合呈现大场景和安静细节，从抵达雪场、穿戴装备到滑行后的休息。",
    items: [
      { src: "assets/images/galleries/activities/skiing/skiing-01.jpg", alt: "冬季雪地滑雪研学活动摄影", note: "Snowfield / Wide" },
      { src: "assets/images/galleries/activities/skiing/skiing-02.jpg", alt: "冬季雪地研学活动摄影", note: "Gear / Preparation" },
      { src: "assets/images/galleries/activities/skiing/skiing-03.jpg", alt: "冬季雪地滑雪研学活动摄影", note: "Glide / Breath" },
      { src: "assets/images/galleries/activities/skiing/skiing-04.jpg", alt: "山野徒步中的儿童研学纪实摄影", note: "Trail / Quiet" },
      { src: "assets/images/galleries/activities/skiing/skiing-05.jpg", alt: "冬季雪地研学活动摄影", note: "Rest / Cold Air" },
      { src: "assets/images/galleries/activities/skiing/skiing-06.jpg", alt: "冬季雪地滑雪研学活动摄影", note: "End / Mountain Line" }
    ]
  },
  insects: {
    title: "Insect Watching",
    description: "适合放低机位、手部动作、植物细节和孩子观察时的神情，让画面更接近自然笔记。",
    items: [
      { src: "assets/images/galleries/activities/insect-watching/insect-watching-01.jpg", alt: "孩子观察昆虫与植物细节", note: "Look Close / Leaf" },
      { src: "assets/images/galleries/activities/insect-watching/insect-watching-02.jpg", alt: "春季茶田与新叶中的儿童研学活动", note: "New Growth / Field" },
      { src: "assets/images/galleries/activities/insect-watching/insect-watching-03.jpg", alt: "孩子观察昆虫与植物细节", note: "Hands / Care" },
      { src: "assets/images/galleries/activities/insect-watching/insect-watching-04.jpg", alt: "山野徒步中的儿童研学纪实摄影", note: "Pause / Group" },
      { src: "assets/images/galleries/activities/insect-watching/insect-watching-05.jpg", alt: "春季茶田与新叶中的儿童研学活动", note: "Light / Small Path" },
      { src: "assets/images/galleries/activities/insect-watching/insect-watching-06.jpg", alt: "孩子观察昆虫与植物细节", note: "Record / Attention" }
    ]
  },
  cycling: {
    title: "Cycling / Forest Ride",
    description: "骑行主题强调速度、路线和队伍关系，适合混合横图、细节图与运动中的瞬间。",
    items: [
      { src: "assets/images/galleries/activities/cycling/cycling-01.jpg", alt: "夏季骑行和森林活动摄影", note: "Start / Wheels" },
      { src: "assets/images/galleries/activities/cycling/cycling-02.jpg", alt: "溪流溯溪活动中的儿童户外摄影", note: "Route / Summer" },
      { src: "assets/images/galleries/activities/cycling/cycling-03.jpg", alt: "夏季骑行和森林活动摄影", note: "Forest / Speed" },
      { src: "assets/images/galleries/activities/cycling/cycling-04.jpg", alt: "山野徒步中的儿童研学纪实摄影", note: "Stop / Talk" },
      { src: "assets/images/galleries/activities/cycling/cycling-05.jpg", alt: "溪流溯溪活动中的儿童户外摄影", note: "Water / Break" },
      { src: "assets/images/galleries/activities/cycling/cycling-06.jpg", alt: "夏季骑行和森林活动摄影", note: "Return / Line" }
    ]
  },
  lotus: {
    title: "Lotus Root Digging",
    description: "挖藕主题更适合用泥土质感和协作关系做叙事，画面可以更沉静、更有身体经验。",
    items: [
      { src: "assets/images/galleries/activities/lotus-root-digging/lotus-root-digging-01.jpg", alt: "孩子在泥土中挖藕和田野研学", note: "Mud / Entry" },
      { src: "assets/images/galleries/activities/lotus-root-digging/lotus-root-digging-02.jpg", alt: "秋季田野收获活动纪实", note: "Tools / Hands" },
      { src: "assets/images/galleries/activities/lotus-root-digging/lotus-root-digging-03.jpg", alt: "孩子在泥土中挖藕和田野研学", note: "Search / Team" },
      { src: "assets/images/galleries/activities/lotus-root-digging/lotus-root-digging-04.jpg", alt: "孩子在茶田中采茶", note: "Carry / Weight" },
      { src: "assets/images/galleries/activities/lotus-root-digging/lotus-root-digging-05.jpg", alt: "秋季田野收获活动纪实", note: "Harvest / Detail" },
      { src: "assets/images/galleries/activities/lotus-root-digging/lotus-root-digging-06.jpg", alt: "孩子在泥土中挖藕和田野研学", note: "Clean Up / End" }
    ]
  }
};

const seasonCollections = {
  // Season gallery images are grouped by season folder for easy replacement.
  spring: {
    en: "SPRING",
    title: "春季自然手记",
    description: "茶田、昆虫、新叶与第一次远足。",
    tags: ["Tea Picking", "Insect Watching", "Hiking"],
    items: [
      "assets/images/galleries/seasons/spring/spring-01.jpg",
      "assets/images/galleries/seasons/spring/spring-02.jpg",
      "assets/images/galleries/seasons/spring/spring-03.jpg",
      "assets/images/galleries/seasons/spring/spring-04.jpg",
      "assets/images/galleries/seasons/spring/spring-05.jpg",
      "assets/images/galleries/seasons/spring/spring-06.jpg"
    ]
  },
  summer: {
    en: "SUMMER",
    title: "夏季自然手记",
    description: "溪流、骑行、湿透的鞋和山野奔跑。",
    tags: ["Stream Trekking", "Cycling", "Forest Activities"],
    items: [
      "assets/images/galleries/seasons/summer/summer-01.jpg",
      "assets/images/galleries/seasons/summer/summer-02.jpg",
      "assets/images/galleries/seasons/summer/summer-03.jpg",
      "assets/images/galleries/seasons/summer/summer-04.jpg",
      "assets/images/galleries/seasons/summer/summer-05.jpg",
      "assets/images/galleries/seasons/summer/summer-06.jpg"
    ]
  },
  autumn: {
    en: "AUTUMN",
    title: "秋季自然手记",
    description: "稻田、莲藕、泥土与丰收的身体经验。",
    tags: ["Rice Harvesting", "Lotus Root Digging", "Field Study"],
    items: [
      "assets/images/galleries/seasons/autumn/autumn-01.jpg",
      "assets/images/galleries/seasons/autumn/autumn-02.jpg",
      "assets/images/galleries/seasons/autumn/autumn-03.jpg",
      "assets/images/galleries/seasons/autumn/autumn-04.jpg",
      "assets/images/galleries/seasons/autumn/autumn-05.jpg",
      "assets/images/galleries/seasons/autumn/autumn-06.jpg"
    ]
  },
  winter: {
    en: "WINTER",
    title: "冬季自然手记",
    description: "雪地、呼吸、滑行与安静的山径。",
    tags: ["Skiing", "Winter Hiking", "Snow Camp"],
    items: [
      "assets/images/galleries/seasons/winter/winter-01.jpg",
      "assets/images/galleries/seasons/winter/winter-02.jpg",
      "assets/images/galleries/seasons/winter/winter-03.jpg",
      "assets/images/galleries/seasons/winter/winter-04.jpg",
      "assets/images/galleries/seasons/winter/winter-05.jpg",
      "assets/images/galleries/seasons/winter/winter-06.jpg"
    ]
  }
};

function handleMissingImage(image) {
  image.classList.add("is-missing");
  image.alt = "";
  image.setAttribute("aria-hidden", "true");
  image.removeAttribute("src");
}

function attachImageFallbacks(scope = document) {
  scope.querySelectorAll("img").forEach((image) => {
    if (image.complete && image.naturalWidth === 0) {
      handleMissingImage(image);
    }

    image.addEventListener("error", () => {
      handleMissingImage(image);
    });
  });
}

function updateHeaderState() {
  if (header) {
    const workStackViewport = workStack?.querySelector(".work-stack");
    const workStackRect = workStackViewport?.getBoundingClientRect();
    const isWorkStackImmersive =
      workStackRect && workStackRect.top <= 1 && workStackRect.bottom > (header.offsetHeight || 0);
    const scrollProgress = isWorkStackImmersive ? 0 : clamp(window.scrollY / 160, 0, 1);

    header.classList.toggle("is-scrolled", scrollProgress > 0.55);
    header.style.setProperty("--header-bg-opacity", (0.62 * scrollProgress).toFixed(3));
    header.style.setProperty("--header-border-opacity", (0.7 * scrollProgress).toFixed(3));
    header.style.setProperty("--header-shadow-opacity", scrollProgress.toFixed(3));
    header.style.setProperty("--header-blur", `${(22 * scrollProgress).toFixed(2)}px`);
  }
}

window.addEventListener("scroll", updateHeaderState, { passive: true });
updateHeaderState();

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

heroScrollIndicator?.addEventListener("click", () => {
  document.querySelector("#seasons")?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    if (navToggle) {
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
});

// If a local image is missing, keep the layout intact and reveal the CSS placeholder.
attachImageFallbacks();

function renderWorkCollection(key) {
  const collection = workCollections[key];

  if (!collection || !modalGallery || !modalTitle || !modalDescription) {
    return;
  }

  modalTitle.textContent = collection.title;
  modalDescription.textContent = collection.description;
  modalGallery.innerHTML = collection.items
    .map(
      (item, index) => `
        <article class="work-masonry-item ${masonryRhythms[index % masonryRhythms.length]}">
          <figure class="image-frame">
            <img src="${item.src}" alt="${item.alt}" data-cursor="zoom" data-preview-image />
          </figure>
        </article>
      `
    )
    .join("");

  attachImageFallbacks(modalGallery);
}

function openWorkModal(key) {
  if (!workModal) {
    return;
  }

  renderWorkCollection(key);
  workModal.classList.add("is-open");
  workModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalClose?.focus();
}

function closeWorkModal() {
  if (!workModal) {
    return;
  }

  workModal.classList.remove("is-open");
  workModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function renderSeasonCollection(key) {
  const collection = seasonCollections[key];

  if (
    !collection ||
    !seasonModalEn ||
    !seasonModalTitle ||
    !seasonModalDescription ||
    !seasonModalTags ||
    !seasonModalGallery
  ) {
    return;
  }

  seasonModalEn.textContent = collection.en;
  seasonModalTitle.textContent = collection.title;
  seasonModalDescription.textContent = collection.description;
  seasonModalTags.innerHTML = collection.tags.map((tag) => `<span>${tag}</span>`).join("");
  seasonModalGallery.innerHTML = collection.items
    .map(
      (src, index) => `
        <article class="season-masonry-item ${masonryRhythms[index % masonryRhythms.length]}">
          <figure class="image-frame">
            <img src="${src}" alt="${collection.title}精选照片 ${index + 1}" data-cursor="zoom" data-preview-image />
          </figure>
        </article>
      `
    )
    .join("");

  attachImageFallbacks(seasonModalGallery);
}

function openSeasonModal(key) {
  if (!seasonModal) {
    return;
  }

  renderSeasonCollection(key);
  seasonModal.classList.add("is-open");
  seasonModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  seasonModalClose?.focus();
}

function closeSeasonModal() {
  if (!seasonModal) {
    return;
  }

  seasonModal.classList.remove("is-open");
  seasonModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function openImagePreview(image) {
  if (!imagePreview || !imagePreviewImg || !image?.src) {
    return;
  }

  imagePreviewImg.classList.remove("is-missing");
  imagePreviewImg.removeAttribute("aria-hidden");
  imagePreviewImg.src = image.src;
  imagePreviewImg.alt = image.alt || "";
  imagePreview.classList.add("is-open");
  imagePreview.setAttribute("aria-hidden", "false");
}

function closeImagePreview() {
  if (!imagePreview || !imagePreviewImg || !imagePreview.classList.contains("is-open")) {
    return false;
  }

  imagePreview.classList.remove("is-open");
  imagePreview.setAttribute("aria-hidden", "true");
  imagePreviewImg.removeAttribute("src");
  imagePreviewImg.alt = "";
  return true;
}

function getWrappedIndex(index, length) {
  return (index + length) % length;
}

let currentSeasonIndex = 0;
let seasonAutoTimer = null;
let seasonProgressFrame = null;
let seasonCycleStarted = 0;
const seasonCycleDuration = 8000;
let seasonSuppressClick = false;
const seasonDragState = {
  pointerId: null,
  isPointerDown: false,
  isDragging: false,
  startX: 0,
  startY: 0,
  dragX: 0
};

function updateSeasonProgress(timestamp) {
  if (!seasonProgress) {
    return;
  }

  seasonProgress.style.setProperty("--season-count", seasonCards.length);
  seasonProgress.style.setProperty("--season-index", currentSeasonIndex);
}

function restartSeasonAutoPlay() {
  window.clearInterval(seasonAutoTimer);

  if (seasonProgressFrame) {
    window.cancelAnimationFrame(seasonProgressFrame);
  }

  if (seasonProgress) {
    updateSeasonProgress();
    seasonCycleStarted = 0;
  }

  seasonAutoTimer = window.setInterval(() => {
    showSeasonEntry(currentSeasonIndex + 1, false);
  }, seasonCycleDuration);
}

function showSeasonEntry(index, shouldRestartAuto = true) {
  if (!seasonCards.length) {
    return;
  }

  currentSeasonIndex = getWrappedIndex(index, seasonCards.length);
  const prevIndex = getWrappedIndex(currentSeasonIndex - 1, seasonCards.length);
  const nextIndex = getWrappedIndex(currentSeasonIndex + 1, seasonCards.length);

  seasonCards.forEach((card, cardIndex) => {
    card.classList.toggle("is-active", cardIndex === currentSeasonIndex);
    card.classList.toggle("is-prev", cardIndex === prevIndex);
    card.classList.toggle("is-next", cardIndex === nextIndex);
  });

  updateSeasonProgress();

  if (shouldRestartAuto) {
    restartSeasonAutoPlay();
  }
}

function setSeasonDragOffset(offset) {
  if (!seasonCarousel) {
    return;
  }

  seasonCarousel.style.setProperty("--season-drag-x", `${offset}px`);
}

function resetSeasonDragState() {
  seasonDragState.pointerId = null;
  seasonDragState.isPointerDown = false;
  seasonDragState.isDragging = false;
  seasonDragState.startX = 0;
  seasonDragState.startY = 0;
  seasonDragState.dragX = 0;
}

function getSeasonReleaseOffset(targetIndex, dragX) {
  const activeCard = seasonCards[currentSeasonIndex];
  const targetCard = seasonCards[targetIndex];

  if (!activeCard || !targetCard) {
    return dragX;
  }

  const activeRect = activeCard.getBoundingClientRect();
  const targetRect = targetCard.getBoundingClientRect();
  const activeCenter = activeRect.left + activeRect.width / 2;
  const targetCenter = targetRect.left + targetRect.width / 2;

  return targetCenter - activeCenter + dragX;
}

function finishSeasonDrag() {
  if (!seasonCarousel || !seasonDragState.isPointerDown) {
    return;
  }

  const wasDragging = seasonDragState.isDragging;
  const dragX = seasonDragState.dragX;
  const threshold = Math.max(72, Math.min(150, seasonCarousel.offsetWidth * 0.14));

  if (wasDragging) {
    const direction = dragX < -threshold ? 1 : dragX > threshold ? -1 : 0;

    if (direction) {
      const releaseOffset = getSeasonReleaseOffset(getWrappedIndex(currentSeasonIndex + direction, seasonCards.length), dragX);
      setSeasonDragOffset(releaseOffset);
      showSeasonEntry(currentSeasonIndex + direction);
    } else {
      restartSeasonAutoPlay();
    }

    window.requestAnimationFrame(() => {
      seasonCarousel.classList.remove("is-dragging");
      setSeasonDragOffset(0);
    });
  }

  resetSeasonDragState();
}

if (seasonCards.length) {
  seasonCards.forEach((card, index) => {
    card.addEventListener("click", (event) => {
      if (seasonSuppressClick) {
        event.preventDefault();
        seasonSuppressClick = false;
        return;
      }

      if (index === currentSeasonIndex) {
        openSeasonModal(card.dataset.seasonTarget);
        return;
      }

      showSeasonEntry(index);
    });
  });

  seasonPrev?.addEventListener("click", () => showSeasonEntry(currentSeasonIndex - 1));
  seasonNext?.addEventListener("click", () => showSeasonEntry(currentSeasonIndex + 1));
  seasonCarousel?.addEventListener("dragstart", (event) => event.preventDefault());

  seasonCarousel?.addEventListener("pointerdown", (event) => {
    if (event.button > 0 || event.target.closest(".season-entry-controls")) {
      return;
    }

    seasonDragState.pointerId = event.pointerId;
    seasonDragState.isPointerDown = true;
    seasonDragState.isDragging = false;
    seasonDragState.startX = event.clientX;
    seasonDragState.startY = event.clientY;
    seasonDragState.dragX = 0;
  });

  window.addEventListener("pointermove", (event) => {
    if (!seasonDragState.isPointerDown || event.pointerId !== seasonDragState.pointerId) {
      return;
    }

    const deltaX = event.clientX - seasonDragState.startX;
    const deltaY = event.clientY - seasonDragState.startY;

    if (!seasonDragState.isDragging) {
      if (Math.abs(deltaX) < 8 || Math.abs(deltaX) < Math.abs(deltaY) * 1.15) {
        return;
      }

      seasonDragState.isDragging = true;
      seasonSuppressClick = true;
      window.clearInterval(seasonAutoTimer);
      seasonCarousel.classList.add("is-dragging");
    }

    event.preventDefault();
    seasonDragState.dragX = Math.max(-seasonCarousel.offsetWidth * 0.42, Math.min(seasonCarousel.offsetWidth * 0.42, deltaX));
    setSeasonDragOffset(seasonDragState.dragX);
  });

  window.addEventListener("pointerup", (event) => {
    if (event.pointerId !== seasonDragState.pointerId) {
      return;
    }

    finishSeasonDrag();
    window.setTimeout(() => {
      seasonSuppressClick = false;
    }, 80);
  });

  window.addEventListener("pointercancel", () => {
    seasonCarousel.classList.remove("is-dragging");
    setSeasonDragOffset(0);
    restartSeasonAutoPlay();
    resetSeasonDragState();
  });

  showSeasonEntry(0);
}

let currentWorkIndex = 0;
let workScrollTicking = false;

function updateWorkProgress(index) {
  if (!workStack || !workProgress) {
    return;
  }

  workStack.style.setProperty("--work-index", index);
}

function showWorkPanel(index) {
  if (!workPanels.length) {
    return;
  }

  const nextIndex = getWrappedIndex(index, workPanels.length);
  if (nextIndex === currentWorkIndex) {
    return;
  }

  workPanels.forEach((panel) => panel.classList.remove("was-active"));
  workPanels[currentWorkIndex].classList.remove("is-active");
  workPanels[currentWorkIndex].classList.add("was-active");
  workPanels[nextIndex].classList.add("is-active");
  currentWorkIndex = nextIndex;
  updateWorkProgress(currentWorkIndex);
}

function advanceWorkPanel(direction = 1) {
  showWorkPanel(currentWorkIndex + direction);
}

function updateWorkPanelFromScroll() {
  workScrollTicking = false;

  if (!workStack || !workPanels.length) {
    return;
  }

  const section = workStack;
  const stackViewport = workStack.querySelector(".work-stack") || workStack;
  const rect = section.getBoundingClientRect();
  const stackHeight = stackViewport.offsetHeight;
  const scrollRange = Math.max(1, section.offsetHeight - stackHeight);
  const progress = Math.min(Math.max(-rect.top / scrollRange, 0), 1);
  const nextIndex = Math.round(progress * (workPanels.length - 1));

  showWorkPanel(nextIndex);
}

function requestWorkPanelUpdate() {
  if (workScrollTicking) {
    return;
  }

  workScrollTicking = true;
  window.requestAnimationFrame(updateWorkPanelFromScroll);
}

function scrollToWorkPanel(index) {
  if (!workStack || !workPanels.length) {
    return;
  }

  const stackViewport = workStack.querySelector(".work-stack") || workStack;
  const nextIndex = getWrappedIndex(index, workPanels.length);
  const scrollRange = Math.max(1, workStack.offsetHeight - stackViewport.offsetHeight);
  const progress = workPanels.length > 1 ? nextIndex / (workPanels.length - 1) : 0;
  const targetTop = window.scrollY + workStack.getBoundingClientRect().top + scrollRange * progress;

  window.scrollTo({
    top: targetTop,
    behavior: "smooth"
  });
}

if (workStack && workPanels.length) {
  workStack.style.setProperty("--work-panel-count", workPanels.length);
  updateWorkProgress(currentWorkIndex);
  window.addEventListener("scroll", requestWorkPanelUpdate, { passive: true });
  window.addEventListener("resize", requestWorkPanelUpdate);
  requestWorkPanelUpdate();
}

workPrev?.addEventListener("click", () => scrollToWorkPanel(currentWorkIndex - 1));
workNext?.addEventListener("click", () => scrollToWorkPanel(currentWorkIndex + 1));

workPanels.forEach((panel) => {
  panel.addEventListener("click", () => {
    if (!panel.classList.contains("is-active")) {
      return;
    }

    openWorkModal(panel.dataset.workKey);
  });

  panel.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    if (panel.classList.contains("is-active")) {
      openWorkModal(panel.dataset.workKey);
    }
  });
});

modalClose?.addEventListener("click", closeWorkModal);
seasonModalClose?.addEventListener("click", closeSeasonModal);

workModal?.addEventListener("click", (event) => {
  if (event.target === workModal) {
    closeWorkModal();
  }
});

seasonModal?.addEventListener("click", (event) => {
  if (event.target === seasonModal) {
    closeSeasonModal();
  }
});

modalGallery?.addEventListener("click", (event) => {
  const image = event.target.closest("[data-preview-image]");
  if (image) {
    openImagePreview(image);
  }
});

seasonModalGallery?.addEventListener("click", (event) => {
  const image = event.target.closest("[data-preview-image]");
  if (image) {
    openImagePreview(image);
  }
});

imagePreviewCloseTargets.forEach((target) => {
  target.addEventListener("click", closeImagePreview);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (closeImagePreview()) {
      return;
    }

    closeWorkModal();
    closeSeasonModal();
  }
});
