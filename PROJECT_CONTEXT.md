# PROJECT_CONTEXT.md

## 项目定位

项目名称：`Seasonal Field Notes`

项目类型：儿童户外研学摄影作品集网站。

项目定位：儿童户外研学、自然探索、四季活动纪实摄影作品集。

整体气质：干净、克制、自然、纪实、高级、突出照片本身。

视觉关键词：

- `Clean Editorial Nature Documentary`
- 暖白 + 深森林绿
- 大留白
- 小字号
- 摄影杂志感
- 图片优先
- 低装饰
- 低饱和

这个网站不是课程销售页，不是机构官网，不是影楼展示，也不是儿童乐园风页面。网站核心是以四季自然中的儿童探索、行动与成长为主线，呈现安静、高级、图片优先的摄影杂志式体验。

## 当前网站模块结构

当前网站已有模块如下，后续修改应基于实际代码继续维护，不要凭空新增模块：

1. `Hero` 首页主视觉
2. `Four Seasons / 四季自然手记`
3. `Activity Diversity / 活动多样性`
4. `Approach / 拍摄方式`
5. `Services / 服务内容`
6. `About / 关于我`
7. `Contact / 联系合作`

当前网站没有独立的 `Selected Works / 首页精选作品` 模块。当前代码中导航 `Work` 和局部 eyebrow `Selected Works` 对应的是 `Activity Diversity / 活动多样性` 内容证明入口，不代表需要新增一个独立的 Selected Works 模块。不要新增 `Selected Works` 模块，不要创建 `selected-works` 图片目录。

## Current Project Status / 当前项目状态

当前网站名称：`Seasonal Field Notes`。

当前网站类型：儿童户外研学摄影作品集网站。

当前网站定位：专注儿童户外研学、自然探索、四季活动纪实摄影。

当前整体风格：干净、克制、自然、纪实、高级、照片优先。

当前主要视觉系统：暖白 + 深森林绿。

当前页面模块：

- `Hero` 首页主视觉
- `Four Seasons / 四季自然手记`
- `Activity Diversity / 活动多样性`
- `Approach / 拍摄方式`
- `Services / 服务内容`
- `About / 关于我`
- `Contact / 联系合作`

当前网站没有独立的 `Selected Works / 首页精选作品` 模块。不要新增 `Selected Works` 模块，不要创建 `selected-works` 图片目录。若页面中出现 `Work`、`Selected Works` 字样，应理解为当前 Activity Diversity 入口的导航或标签文案；模块边界以当前代码为准。

当前已实现的关键交互：

- `Four Seasons / 四季自然手记` 模块可通过季节卡片 / 图片进入对应季节弹窗。
- `Activity Diversity / 活动多样性` 模块可通过活动卡片进入对应活动弹窗。
- 四季弹窗和活动弹窗内部使用瀑布流图片展示。
- 弹窗内部图片 hover 时启用 `zoom` cursor。
- 弹窗内部图片点击后可以在当前 modal 上方打开放大预览。
- 图片放大预览状态下，鼠标指针显示减号，提示点击关闭。
- `Four Seasons` 模块具有下方箭头切换、自动轮播进度和鼠标 / 触控拖动切换交互。
- 当前项目包含 `custom cursor` 自定义鼠标指针系统。
- 当前项目使用原生 `scroll-behavior: smooth` 和 Activity Diversity 的滚动进度映射逻辑；如后续讨论 smooth scroll / 阻尼滚动，应以当前代码为准，不要擅自重写滚动逻辑。

## Four Seasons 模块说明

`Four Seasons / 四季自然手记` 是网站的主叙事入口。

包含四个季节：

- `Spring / 春`
- `Summer / 夏`
- `Autumn / 秋`
- `Winter / 冬`

点击每个季节入口会打开弹窗 modal。弹窗背景有半透明遮罩和轻微高斯模糊，弹窗内展示该季节对应的瀑布流图片。

四季模块是网站的品牌叙事入口，不是普通分类列表。它承担的是从季节、自然、儿童行动和成长经验进入作品集的主线叙事。

## Activity Diversity 模块说明

`Activity Diversity / 活动多样性` 是网站的内容证明入口。

当前活动类型是 `initial activity set / 初始活动集合`，包含：

- `Hiking / 徒步`
- `Skiing / 滑雪`
- `Insect Watching / 观虫`
- `Stream Trekking / 溯溪`
- `Tea Picking / 采茶`
- `Cycling / 骑行`
- `Lotus Root Digging / 挖藕`
- `Rice Harvesting / 收稻谷`

点击每个活动类型也会打开弹窗 modal，弹窗内展示该活动对应的瀑布流图片。

活动类型是内容证明入口，不要替代四季叙事。四季仍然是主叙事入口。

未来可以新增、减少、替换活动类型。新增活动时必须遵循以下规则：

1. 遵循现有命名规则、图片目录规则、弹窗结构和视觉规范。
2. 不改变网站整体视觉风格。
3. 不影响 `Four Seasons` 四季模块。
4. 不影响已有活动弹窗。
5. 复用现有 Activity card 与 modal gallery 组件。
6. 不要为每个新活动单独写重复 HTML，应通过统一数据结构扩展。
7. 活动类型只作为内容证明入口，不能替代四季主叙事。

## 视觉规范

### 颜色系统

```css
--background: #F7F5EF;
--text-primary: #17211B;
--text-secondary: #6F756D;
--line: #DDD8CC;
--accent: #263A2E;
--white: #FFFFFF;
```

### 四季辅助色

```css
--spring: #8A9B75;
--summer: #6F9994;
--autumn: #B08A5A;
--winter: #8D99A6;
```

### 设计原则

1. 暖白 + 深森林绿为主。
2. 四季色只允许作为小圆点、细线、hover 细节，不允许大面积使用。
3. 不要使用高饱和颜色。
4. 不要使用儿童乐园风。
5. 不要使用卡通插画。
6. 不要使用小太阳、小彩虹、叶子图标等装饰。
7. 不要做成机构官网。
8. 不要做成 SaaS 官网。
9. 不要让 UI 抢照片本身。

## Web Design System / 网页设计规范

### 设计关键词

整体视觉关键词：

- `Clean Editorial Nature Documentary`
- 干净
- 克制
- 自然
- 纪实
- 高级
- 安静
- 照片优先
- 大留白
- 小字号
- 摄影杂志感
- 低装饰
- 低饱和

禁止方向：

- 不要儿童乐园风
- 不要机构官网风
- 不要 SaaS 官网风
- 不要影楼摄影网站风
- 不要卡通插画
- 不要小太阳、小彩虹、叶子图标等装饰
- 不要高饱和春夏秋冬四色大色块
- 不要让 UI 抢照片

### 色彩系统

当前推荐色彩变量：

```css
--background: #F7F5EF;
--text-primary: #17211B;
--text-secondary: #6F756D;
--line: #DDD8CC;
--accent: #263A2E;
--white: #FFFFFF;
```

四季辅助色：

```css
--spring: #8A9B75;
--summer: #6F9994;
--autumn: #B08A5A;
--winter: #8D99A6;
```

色彩使用规则：

1. 全站以暖白和深森林绿为核心。
2. 暖白用于主背景，保持干净、柔和、自然。
3. 深森林绿用于文字、按钮、重点信息和交互元素。
4. 四季色只允许作为小圆点、细线、hover 细节、轻量标签使用。
5. 四季色不得作为大面积背景色。
6. 不使用高饱和颜色。
7. 不使用强烈渐变和霓虹色。
8. 不使用大面积深色背景，除非用户明确要求并单独确认。

### 字体和字号规范

整体字号偏小，追求高级摄影作品集和杂志目录感。

建议规范：

- 正文基础字号：约 `14px`
- 卡片正文：约 `13px`
- 标签 / caption / 导航：`10px - 12px`
- 区块标题：`24px - 38px`
- Hero 标题：`36px - 60px`，允许更大但必须轻、克制
- 中文正文不要低于 `13px`
- 移动端正文保持可读性，通常不低于 `14px`

字体风格：

1. 英文标题可以使用优雅但不浮夸的 serif。
2. 正文使用干净现代的 sans-serif。
3. 字重不要过粗。
4. 标题不要营销化。
5. 通过留白、行距、图片比例和层级建立高级感，不依赖超大字号或粗字重。

### 留白和布局规范

1. 页面要保留充分留白。
2. 模块之间需要有清晰呼吸感。
3. 图片是主角，文字只做辅助。
4. 不要把图片排得像社媒信息流或网盘相册。
5. 不要过度使用卡片边框、厚阴影和装饰图形。
6. 桌面端保持摄影杂志感。
7. 移动端自然堆叠，不要让文字拥挤。

### 卡片规范

1. `Four Seasons` 和 `Activity Diversity` 卡片应保持统一视觉语言。
2. 卡片以照片为主，文字为辅。
3. 卡片 hover 动效要轻微、克制。
4. 不使用厚重阴影。
5. 不使用大量 icon。
6. 不使用强背景色块。
7. 卡片点击可以打开对应 modal 弹窗。

### Modal 弹窗规范

1. `Four Seasons` 和 `Activity Diversity` 共用同一套 modal 视觉语言。
2. 弹窗背景使用半透明遮罩。
3. 背景可以有轻微高斯模糊 / backdrop blur。
4. modal 面板使用暖白半透明背景。
5. 边框要轻，阴影柔和。
6. 弹窗内部可滚动。
7. 打开弹窗时背景页面应锁定滚动。
8. 支持关闭按钮、点击遮罩、`Esc` 关闭。
9. 图片放大预览打开时，`Esc` 优先关闭图片预览，不直接关闭整个 modal。
10. 弹窗交互要保持连续、自然，不要突兀跳变。

### 瀑布流 Gallery 规范

1. 当前代码中，modal 瀑布流桌面端为 3 列。
2. 当前代码中，平板端为 2 列。
3. 当前代码中，常规移动端为 2 列，窄屏手机端为 1 列；后续如需调整列数，以当前代码和用户明确要求为准。
4. 图片之间保持足够留白。
5. 图片不要加厚重卡片阴影。
6. 图片 hover 可以启用 `zoom` cursor。
7. 图片点击可以打开轻量图片预览。
8. 图片预览保持原始比例，不要拉伸变形。

## 字体与字号规范

整体偏小字号，保持高级摄影作品集风格。

- 正文基础字号约 `14px`。
- 卡片正文约 `13px`。
- 标签、caption、导航约 `10px - 12px`。
- 区块标题约 `24px - 38px`。
- Hero 标题可以较大，但字体要轻、克制，约 `36px - 60px`。
- 中文正文不要低于 `13px`。
- 移动端正文需要保持可读性。

高级感来自留白、行距、图片比例和层级，不来自大字号、粗字重或复杂装饰。

## 弹窗 Modal 规范

四季弹窗和活动弹窗共用同一套 modal 视觉语言。

- overlay 使用半透明深森林绿或深灰绿色遮罩。
- 背景使用 `backdrop-filter: blur(...)`。
- modal panel 使用暖白半透明背景。
- 边框轻，阴影柔和。
- 内部可滚动。
- 打开弹窗时禁止 body 背景滚动。
- 支持关闭按钮、点击遮罩、`Esc` 关闭。
- 动画克制，只允许轻微淡入、上浮，不要夸张。

## 瀑布流 Gallery 规范

- 桌面端 3 列。
- 平板端 2 列。
- 手机端以当前代码为准：常规移动端 2 列，窄屏手机端 1 列。
- 图片之间保留足够留白。
- 不要像社媒信息流。
- 不要厚重阴影。
- 不要复杂说明。
- 图片是主角。

## Custom Cursor System / 自定义鼠标指针规范

### 总体原则

自定义鼠标指针是当前网站的高级交互层，用于增强摄影作品集的精致感，但不能抢照片主体。

原则：

1. cursor 必须克制、高级、轻。
2. cursor 不允许做成科技感、游戏感、霓虹感。
3. cursor 不允许遮挡用户浏览照片。
4. cursor 必须 `pointer-events: none`，不能阻挡点击。
5. cursor 只在桌面鼠标设备启用。
6. 移动端和平板触摸设备禁用 custom cursor。
7. `prefers-reduced-motion: reduce` 时应禁用或降低动画。
8. cursor 状态切换必须自然、丝滑，不允许闪白、跳变、残影。

### Cursor DOM 分层原则

cursor 应该拆成独立图层：

- `cursor-core`：默认实心小圆
- `cursor-glass`：带 icon 状态下的半透明毛玻璃圆
- `cursor-icon`：不同状态下的图标

三者必须分层独立，不要用一个元素同时承担圆、玻璃和图标。

当前推荐结构：

```html
<div class="custom-cursor" aria-hidden="true">
  <div class="cursor-glass"></div>
  <div class="cursor-core"></div>
  <div class="cursor-icon cursor-icon-arrow"></div>
  <div class="cursor-icon cursor-icon-zoom"></div>
  <div class="cursor-icon cursor-icon-drag"></div>
  <div class="cursor-icon cursor-icon-close-preview"></div>
</div>
```

### 默认状态 default

`default` 状态下：

- 只显示一个深森林绿半透明实心小圆。
- 小圆不是纯色，应为 90% - 95% 透明度。
- 推荐颜色：`rgba(23, 33, 27, 0.9)` 或 `rgba(23, 33, 27, 0.95)`。
- 当前代码中小圆尺寸约 `13px`。
- 小圆有非常轻微阴影。
- 不显示 glass circle。
- 不显示 icon。

### hover 状态

`hover` 状态用于普通链接、按钮、普通可点击文字。

`hover` 状态下：

- 不显示 glass circle。
- 不显示 icon。
- 默认实心小圆轻微放大。
- 阴影轻微增强。
- 动效自然、克制。

推荐效果：

- 小圆从 `13px` 视觉放大到约 `17px - 19px`。
- `box-shadow` 稍微增强。
- 不出现半透明玻璃圆。

重要：普通 hover 不允许出现外圈 glass circle。

### 带 icon 状态通用规范

带 icon 状态包括：

- `arrow`
- `zoom`
- `drag`
- `close-preview`

这些状态下：

- 默认实心小圆必须消失。
- 显示边缘清晰的半透明 glass circle。
- glass circle 内部使用 `backdrop-filter` 产生背景模糊。
- 不使用 `filter: blur()` 模糊圆本身。
- glass circle 不要有外侧线框。
- 不要有 `border` / `outline` / `stroke`。
- 如果有明显描边，需要去掉。
- 可以保留轻微自然底部阴影，增强可读性。
- icon 使用深森林绿，不使用白色。
- icon 尺寸需要清晰，约 `22px - 24px`。
- glass circle 大小保持克制，不随意放大。
- icon 居中显示。
- icon 与 glass circle 边缘之间保持合理安全距离。
- 状态切换必须自然，不闪白、不残影。

### glass circle 规范

glass circle 是带 icon 状态下的半透明毛玻璃圆。

视觉要求：

1. 边缘清晰。
2. 半透明。
3. 圆内部产生 backdrop blur 背景模糊。
4. 不要用 `filter: blur()` 模糊圆本身。
5. 不要外侧线框。
6. 不要明显 border。
7. 不要 outline。
8. 不要 stroke。
9. 保留轻微自然阴影即可。

推荐 CSS 思路：

```css
.cursor-glass {
  border: none;
  outline: none;
  background: rgba(247, 245, 239, 0.28);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 8px 22px rgba(23, 33, 27, 0.14);
}
```

当前代码中 glass circle 为 `52px × 52px`，无 border / outline，以当前代码为准。

### icon 规范

1. 所有 cursor icon 使用深森林绿。
2. 推荐颜色：`#17211B` 或 `#263A2E`。
3. 不使用白色 icon。
4. icon 尺寸约 `22px - 24px`，当前代码中为 `23px × 23px`。
5. icon stroke 不要太粗。
6. 推荐使用 SVG / mask，而不是系统特殊字符，避免不同系统显示不一致。
7. icon 切换时通过 opacity / class 控制，不要频繁 `innerHTML` 替换导致闪烁。
8. icon 应该和 glass circle 中心对齐。

不同状态 icon：

`arrow`：

- 用于可点击进入 / 打开弹窗的图片卡片。
- icon 为右上箭头。

`zoom`：

- 用于弹窗内部可放大查看的图片。
- icon 必须是斜 45 度的双向箭头。
- 不要使用四方向 expand icon。
- 不要使用放大镜 icon。

`drag`：

- 用于可左右拖动的 `Four Seasons` 模块。
- icon 为水平双向箭头。
- 鼠标按住左右拖动时，icon 可根据方向轻微左右偏移。

`close-preview`：

- 用于图片放大预览状态。
- icon 为减号。
- 表示点击可关闭放大预览。

### Cursor 状态对应元素

- 普通 `a` / `button` / nav link：`data-cursor="hover"`
- `Four Seasons` 卡片 / 可打开弹窗的季节入口：`data-cursor="arrow"`
- `Activity Diversity` 卡片 / 可打开弹窗的活动入口：`data-cursor="arrow"`
- `Four Seasons` 可左右拖动区域：`data-cursor="drag"`
- Modal 弹窗内部 gallery 图片：`data-cursor="zoom"`
- 图片放大预览层 / 预览图片 / 遮罩：`data-cursor="close-preview"`

### drag 状态规范

`drag` 状态用于 `Four Seasons` 模块中可左右拖动的区域。

drag cursor 视觉：

- 默认小圆消失。
- glass circle 出现。
- icon 为深森林绿水平双向箭头。
- glass circle 无外侧线框。
- icon 尺寸约 `22px - 24px`。

拖动反馈：

- 鼠标按住拖动时添加 `is-dragging`。
- 向左拖动时 icon 轻微左移约 `3px`。
- 向右拖动时 icon 轻微右移约 `3px`。
- 松开后回到中心。
- 动效轻微、克制。
- 不影响真实拖动和点击。

### zoom 状态规范

`zoom` 状态用于弹窗内部可点击放大查看的图片。

zoom cursor 视觉：

- 默认小圆消失。
- glass circle 出现。
- icon 为深森林绿斜 45 度双向箭头。
- 不要使用四方向箭头。
- 不要使用放大镜。
- 点击图片后打开放大预览层。

### close-preview 状态规范

`close-preview` 状态用于图片放大预览层。

视觉：

- 默认小圆消失。
- glass circle 出现。
- icon 为深森林绿减号。
- 表示点击可关闭放大图片。

交互：

- 点击预览图片关闭。
- 点击遮罩关闭。
- 按 `Esc` 关闭。
- 如果预览打开，`Esc` 优先关闭图片预览，不关闭整个 modal。
- 关闭后返回原弹窗瀑布流。

## Four Seasons Interaction / 四季模块交互规范

1. `Four Seasons / 四季自然手记` 模块是网站主叙事入口。
2. 可通过下方箭头切换季节。
3. 可通过鼠标按住拖动切换季节。
4. 拖动切换动画必须和点击箭头切换动画一致。
5. 鼠标拖动时，图片应自然跟随移动。
6. 超过阈值后，当前图片自然加速移出画面，下一张图片自然移动到中间。
7. 不允许拖动到阈值后瞬移换图。
8. 不允许后一张图片突然出现。
9. 拖动只决定方向和触发，真正切换动画应复用点击箭头的动画系统。
10. 未超过阈值时，图片自然回弹。
11. 拖动不应影响点击进入四季弹窗。
12. 拖动区域应使用 `data-cursor="drag"`。
13. 当前代码中拖动阈值和 release offset 逻辑以 `script.js` 为准，后续不要单独写一套粗糙的拖动切换逻辑。

## Image Preview / 图片放大预览规范

1. Modal 内部瀑布流图片 hover 时启用 `zoom` cursor。
2. 点击图片后，在当前 modal 上方打开图片放大预览。
3. 不跳转页面。
4. 不关闭当前季节 / 活动 modal。
5. 放大图片居中显示。
6. 图片保持比例，不拉伸。
7. 点击图片、点击遮罩、按 `Esc` 可关闭预览。
8. 预览打开时，cursor 使用 `close-preview` 状态。
9. `close-preview` icon 为减号。
10. 关闭预览后回到原 modal。
11. `Esc` 优先级：如果图片预览打开，`Esc` 先关闭图片预览；如果没有图片预览，再关闭 modal。

## 推荐图片资源结构

推荐图片目录如下，后续替换真实照片时应优先同名覆盖，不要随意改变路径：

```text
assets/images/
├── hero/
│   └── hero.jpg
│
├── seasons/
│   ├── spring-cover.jpg
│   ├── summer-cover.jpg
│   ├── autumn-cover.jpg
│   └── winter-cover.jpg
│
├── activities/
│   ├── hiking-cover.jpg
│   ├── skiing-cover.jpg
│   ├── insect-watching-cover.jpg
│   ├── stream-trekking-cover.jpg
│   ├── tea-picking-cover.jpg
│   ├── cycling-cover.jpg
│   ├── lotus-root-digging-cover.jpg
│   └── rice-harvesting-cover.jpg
│
├── galleries/
│   ├── seasons/
│   │   ├── spring/
│   │   ├── summer/
│   │   ├── autumn/
│   │   └── winter/
│   │
│   └── activities/
│       ├── hiking/
│       ├── skiing/
│       ├── insect-watching/
│       ├── stream-trekking/
│       ├── tea-picking/
│       ├── cycling/
│       ├── lotus-root-digging/
│       └── rice-harvesting/
│
└── about/
    └── about.jpg
```

### 图片命名规则

- 首页主图：`hero.jpg`
- 四季封面：`spring-cover.jpg` / `summer-cover.jpg` / `autumn-cover.jpg` / `winter-cover.jpg`
- 活动封面：`hiking-cover.jpg` / `skiing-cover.jpg` / `insect-watching-cover.jpg` / `stream-trekking-cover.jpg` / `tea-picking-cover.jpg` / `cycling-cover.jpg` / `lotus-root-digging-cover.jpg` / `rice-harvesting-cover.jpg`
- 四季图库：`spring-01.jpg` / `spring-02.jpg` 等
- 活动图库：`hiking-01.jpg` / `hiking-02.jpg` 等
- 关于我：`about.jpg`

不要创建 `selected-works` 文件夹。图片文件名全部小写，使用英文和连字符，不要使用中文、空格和特殊符号。后续替换图片时，优先同名覆盖，不要随意改路径。

### 图片资源扩展规则

1. 活动模块是可扩展的。
2. 当前 8 个活动只是 `initial activity set / 初始活动集合`。
3. 未来可以新增活动。
4. 新增活动时使用 `activity-slug` 命名。
5. 例如新增 `camping`：
   - `assets/images/activities/camping-cover.jpg`
   - `assets/images/galleries/activities/camping/camping-01.jpg`
6. 图片文件名全部小写，使用英文和连字符。
7. 不使用中文、空格、特殊符号。
8. 替换图片时优先同名覆盖。
9. 当前网站没有独立的 `Selected Works` 模块，所以图片结构中不要创建 `selected-works` 文件夹。

## Codex Working Rules / Codex 工作规则

1. 每次修改前必须先阅读 `PROJECT_CONTEXT.md`。
2. 当前网站原型用户已经满意，不要擅自大改。
3. 不要擅自改变网站整体视觉风格。
4. 不要擅自新增模块。
5. 不要擅自删除模块。
6. 不要新增 `Selected Works` 模块。
7. 不要创建 `selected-works` 图片目录。
8. 不要把网站改成儿童乐园风。
9. 不要把网站改成机构官网风。
10. 不要把网站改成 SaaS 官网风。
11. 不要使用高饱和颜色。
12. 不要加入卡通插画、叶子图标、小太阳、小彩虹等装饰。
13. 不要让 UI 抢照片。
14. 如果用户只要求整理图片资源，不要修改视觉。
15. 如果用户只要求改文案，不要修改样式。
16. 如果用户只要求改样式，不要重写结构。
17. 如果用户只要求修 cursor，不要修改其他模块。
18. 如果用户只要求修 `Four Seasons` 拖动，不要修改 `Activity Diversity`。
19. 修改某个模块时，只改该模块，不影响其他模块。
20. 如果不确定某个改动会不会影响视觉，先保守处理。
21. 完成后必须输出修改报告，说明改了哪些文件、哪些内容、是否影响现有功能。
