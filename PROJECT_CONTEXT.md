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
2. `Scope Showcase / 摄影服务范围展示`
3. `Activity Diversity / 活动多样性`
4. `Four Seasons / 四季自然手记`
5. `Approach / 拍摄方式`
6. `Services / 服务内容`
7. `About / 关于我`
8. `Contact / 联系合作`

当前网站没有独立的 `Selected Works / 首页精选作品` 模块。当前代码中导航 `Work` 和局部 eyebrow `Selected Works` 对应的是 `Activity Diversity / 活动多样性` 内容证明入口，不代表需要新增一个独立的 Selected Works 模块。不要新增 `Selected Works` 模块，不要创建 `selected-works` 图片目录。

## Current Project Status / 当前项目状态

当前网站名称：`Seasonal Field Notes`。

当前网站类型：儿童户外研学摄影作品集网站。

当前网站定位：专注儿童户外研学、自然探索、四季活动纪实摄影。

当前整体风格：干净、克制、自然、纪实、高级、照片优先。

当前主要视觉系统：暖白 + 深森林绿。

当前页面模块：

- `Hero` 首页主视觉
- `Scope Showcase / 摄影服务范围展示`
- `Activity Diversity / 活动多样性`
- `Four Seasons / 四季自然手记`
- `Approach / 拍摄方式`
- `Services / 服务内容`
- `About / 关于我`
- `Contact / 联系合作`

当前网站没有独立的 `Selected Works / 首页精选作品` 模块。不要新增 `Selected Works` 模块，不要创建 `selected-works` 图片目录。若页面中出现 `Work`、`Selected Works` 字样，应理解为当前 Activity Diversity 入口的导航或标签文案；模块边界以当前代码为准。

当前已实现的关键交互：

- `Scope Showcase / 摄影服务范围展示` 模块位于 Hero 后，当前是 scroll-driven sticky narrative 动画模块，不再是四排自动横向轮播小图。
- `Scope Showcase` 中心文字先入场，8 张活动现场图片从中心附近依次向外发散；第 9 个承接内容是现有 `Activity Diversity / 活动多样性` 模块本身。
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

**弹窗图片排列规则：**
1. 弹窗内部瀑布流图片统一按照“从左到右、从上到下”依次排列，遵循实际文件夹中的图片顺序。
2. 前台仅显示实际文件夹中存在的图片数量，不使用固定数量或硬编码数组。
3. 保留现有瀑布流列数和间距规则，不改变当前布局。
4. 保留 hover、zoom、custom cursor 和 modal 相关交互逻辑。

四季模块是网站的品牌叙事入口，不是普通分类列表。它承担的是从季节、自然、儿童行动和成长经验进入作品集的主线叙事。

## Scope Showcase 模块说明

`Scope Showcase / 摄影服务范围展示` 是 Hero 后的第二屏模块。

模块目的：用于快速展示摄影服务覆盖范围的广度，让用户感受到拍摄场景不止于户外研学，也包括自然探索、活动纪实、机构内容、人物状态和真实发生的现场。

模块边界：

1. 该模块不是作品分类入口。
2. 该模块不打开弹窗。
3. 该模块不替代 `Four Seasons / 四季自然手记`。
4. 该模块不替代 `Activity Diversity / 活动多样性`。
5. 该模块不新增 `Selected Works`。
6. 该模块不创建 `selected-works` 图片目录。

当前结构以代码为准：

1. 当前 `Scope Showcase` 已替换为 `scroll-driven sticky narrative` 动画模块，不再是四排自动横向轮播。
2. 外层为高 section，内层 `.scope-narrative-sticky` 使用 `position: sticky` 定格在视口内。
3. 模块进入视口后，中心文字 `Scope of Stories / 我所记录的活动现场` 先入场。
4. 8 张活动现场图片从中心文字附近依次向外发散，不是同时出现。
5. 每张图片随滚动进度改变 `opacity`、`scale`、`translate` 和轻微 `rotate`。
6. 第 9 个承接内容不是独立图片，而是现有 `Activity Diversity / 活动多样性` 模块本身。
7. `Activity Diversity` 会从中心出现，并逐渐放大至全屏，作为 `Scope Showcase` 的最终承接。
8. `Scope Showcase` 图片只使用 `data-cursor="hover"`，不使用 `data-cursor="arrow"` 或 `data-cursor="zoom"`。
9. `Scope Showcase` 图片只是视觉叙事素材，不打开弹窗，不替代 `Activity Diversity`。
10. 移动端或 `prefers-reduced-motion: reduce` 下应降级为静态标题 + 图片网格，`Activity Diversity` 正常显示。

当前前 8 张发散图片：

- `hiking / 徒步`
- `stream-trekking / 溯溪`
- `skiing / 滑雪`
- `rice-harvesting / 割稻谷`
- `lotus-root-digging / 挖莲藕`
- `camping / 露营`
- `insect-watching / 观虫`
- `tea-picking / 采茶叶`

可扩展类目：

- `bee-observation / 蜜蜂`
- `desert-hiking / 沙漠徒步`
- `rime-watching / 看雾凇`
- `cycling / 骑行`

图片目录仍为 `assets/images/scope/`。不要新增 `scope-09` 图片，不要把 `Activity Diversity` 截成图片，不要把 `Activity Diversity` 复制一份放进 Scope。

历史实现说明：

1. 旧版 `Scope Showcase` 曾使用四排自动横向轮播小图展示服务范围。
2. 该四排 marquee 方案已经被当前 sticky narrative 方案替换。
3. 后续不要再把文档中的四排轮播描述当作当前实现依据；若需要恢复旧方案，必须由用户明确确认。

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

**弹窗图片排列规则：**
1. 弹窗内部瀑布流图片统一按照“从左到右、从上到下”依次排列，遵循实际文件夹中的图片顺序。
2. 弹窗前台只显示实际文件夹中存在的图片数量，不使用固定数量或硬编码数组。
3. 保留现有瀑布流列数和间距规则，不改变当前布局。
4. 保留 hover、zoom、custom cursor 和 modal 相关交互逻辑。

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

### 圆角系统

当前圆角策略不是“全站小圆角”，而是按场景分层使用。

```css
--radius-none: 0px;
--radius-image: 2px;
--radius-card: 10px;
--radius-panel: 16px;
--radius-scope-card: 18px;
--radius-pill: 999px;
```

使用规则：

1. 大型摄影图保持直角或极轻圆角，适用于 Hero 大图、Four Seasons 大图、Activity Diversity 大图、About 大图，范围为 `0px - 2px`。
2. 四季和活动入口卡片使用中等克制圆角，范围为 `8px - 12px`，不要超过 `14px`。
3. `Scope Showcase / 摄影服务范围展示` 这类小图叙事素材允许使用较大圆角，范围为 `16px - 22px`，当前发散图片以代码中的 `--radius-panel` / 具体样式为准。
4. Modal 弹窗使用中等圆角，范围为 `16px - 18px`，不要超过 `20px`。
5. 标签和小按钮可以使用胶囊圆角，使用 `--radius-pill: 999px`。
6. 不要把所有图片统一改成大圆角。
7. 不要给 Hero 大图加大圆角。
8. 大圆角只允许用于 `Scope Showcase` 这类轻内容小图叙事素材或经用户确认的视觉承接过渡。
9. 圆角调整不能让网站变成 SaaS 官网或 App 风。

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

## Global Texture / Grain Layer / 全局纸张颗粒层

当前网站允许使用一层极轻微的动态纸张颗粒 / 胶片颗粒质感层，用于增强摄影书、纸张、胶片和自然影像的统一质感。

使用规则：

1. 颗粒层必须非常轻，不应让用户第一眼注意到“噪点动画”。
2. 颗粒层不得影响照片清晰度、照片色彩判断和文字可读性。
3. 推荐透明度范围为 `0.025 - 0.055`；当前用户要求增强噪点密度、增加细碎粉末感并略微提高透明度，实际值暂定为 `--grain-opacity: 0.105`。
4. 颗粒层必须使用 `pointer-events: none`，不能阻挡任何点击、hover、滚动或 custom cursor 状态。
5. 颗粒层层级可以覆盖普通页面内容，但必须低于 modal、image preview 和 custom cursor。
6. 颗粒层不得盖住或污染 modal 图片预览；如影响照片观感，优先降低 opacity 到 `0.025`。
7. `prefers-reduced-motion: reduce` 下必须关闭动态，只保留静态极低透明颗粒或关闭。
8. 移动端 / 触摸设备可降级为静态颗粒或关闭，避免掉帧。
9. 不要使用强噪点、故障感、电视雪花感、电影特效感或明显闪烁。
10. 不要使用大型 PNG / JPG 纹理文件，不要引入外部依赖、canvas、WebGL 或 npm 包。
11. 该层只是全局质感滤镜，不是新模块，不应改变页面布局、模块顺序、文案、图片路径或任何交互逻辑。

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

1. 当前网站不再使用衬线字体，整体切换为现代无衬线品牌字体系统。
2. 中文主字体为 `MiSans`，英文主字体为 `Outfit`。
3. 正文、标题、导航和标签均使用无衬线字体，不使用 `serif` fallback。
4. 字重不要过粗，标题不要营销化。
5. 通过留白、行距、图片比例和层级建立高级感，不依赖衬线字体、超大字号或粗字重。

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

## Typography System / 字体系统

当前确认字体：

- 中文主字体：`MiSans`
- 英文主字体：`Outfit`

字体加载方式：

1. `MiSans` 通过本地 self-host 的 `woff2` 文件加载。
2. `MiSans` 字体文件预期放在：
   - `assets/fonts/MiSans-Regular.woff2`
   - `assets/fonts/MiSans-Medium.woff2`
   - `assets/fonts/MiSans-Semibold.woff2`
3. `Outfit` 通过 Google Fonts 加载。
4. `Noto Sans SC`、`PingFang SC`、`Microsoft YaHei`、`Inter`、`system-ui`、`sans-serif` 作为备用字体。
5. 备用字体用于防止字体加载失败导致页面版式异常，不代表主视觉字体改变。

字体风格定位：

1. 当前网站不再使用衬线体。
2. 不使用 `Playfair Display`。
3. 不使用 `Cormorant Garamond`。
4. 不使用 `Georgia`。
5. 不使用真实 `serif` fallback。
6. 网站字体系统从“摄影杂志衬线感”调整为“现代儿童户外摄影品牌感”。
7. 中文使用 `MiSans`，保证现代、干净、品牌化。
8. 英文使用 `Outfit`，保证几何、现代、清晰和轻微亲和力。
9. 字体整体不能卡通化，不能幼稚化。
10. 不使用儿童手写体、卡通字体、强装饰字体。
11. 高级感来自字体克制、留白、图片比例和动效节奏，而不是衬线字体。
12. 当前 CSS 中若保留 `--serif` 变量名，只能作为兼容旧选择器的变量名；其内容必须仍然是无衬线字体栈。

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
├── scope/
│   ├── hiking.jpg
│   ├── stream-trekking.jpg
│   ├── skiing.jpg
│   ├── rice-harvesting.jpg
│   ├── lotus-root-digging.jpg
│   ├── camping.jpg
│   ├── insect-watching.jpg
│   └── tea-picking.jpg
│
│   可后续扩展：
│   ├── bee-observation.jpg
│   ├── desert-hiking.jpg
│   ├── rime-watching.jpg
│   └── cycling.jpg
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
- Scope Showcase 发散图片：`assets/images/scope/` 下使用对应活动现场 slug，例如 `hiking.jpg` / `stream-trekking.jpg` / `skiing.jpg` / `rice-harvesting.jpg` / `lotus-root-digging.jpg` / `camping.jpg` / `insect-watching.jpg` / `tea-picking.jpg`
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

## Current Project Summary / 当前项目总结

项目名称：`Seasonal Field Notes`。

项目类型：儿童户外研学摄影作品集网站。

项目定位：专注儿童户外研学、自然探索、四季活动纪实摄影。

核心内容：通过四季自然活动和多样化活动类型，展示孩子在自然中的探索、行动、观察、协作与成长。

当前活动内容包括但不限于：

- `Hiking / 徒步`
- `Skiing / 滑雪`
- `Insect Watching / 观虫`
- `Stream Trekking / 溯溪`
- `Tea Picking / 采茶`
- `Cycling / 骑行`
- `Lotus Root Digging / 挖藕`
- `Rice Harvesting / 收稻谷`

活动类型是可扩展的。当前 8 个活动只是 `initial activity set / 初始活动集合`，不是永久固定列表。

整体风格：

- 暖白 + 深森林绿
- 干净
- 克制
- 自然
- 纪实
- 高级
- 照片优先
- 小字号
- 大留白
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
- 不要高饱和四季色块
- 不要让 UI 抢照片

以当前代码为准：当前项目已经存在一套小范围 `data-text-sequence` / `data-text-step` 顺序文字滚动归位动效，只作用于模块级文字；它不是此前被回退的大范围 Hero / 图片 / bottom nav 动效方案。旧文档或历史讨论中若出现 `data-text-parallax`，应理解为旧称，当前实现以代码中的 `data-text-sequence` / `data-text-step` 为准。

## Current Page Modules / 当前页面模块

当前页面模块包括：

1. `Hero` 首页主视觉
2. `Scope Showcase / 摄影服务范围展示`
3. `Activity Diversity / 活动多样性`
4. `Four Seasons / 四季自然手记`
5. `Approach / 拍摄方式`
6. `Services / 服务内容`
7. `About / 关于我`
8. `Contact / 联系合作`

当前网站没有独立的 `Selected Works / 首页精选作品` 模块。不要新增 `Selected Works` 模块，不要创建 `selected-works` 图片目录。当前代码中的导航 `Work` 和局部 `Selected Works` eyebrow 只对应 `Activity Diversity / 活动多样性` 入口，不代表新增模块需求。

## Confirmed Design System / 已确认设计规范

### 色彩系统

主色系统：

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

使用规则：

1. 全站以暖白和深森林绿为主。
2. 四季色只允许作为小圆点、细线、hover 细节、轻量标签使用。
3. 四季色不得作为大面积背景色。
4. 不使用高饱和颜色。
5. 不使用霓虹色、强渐变或重装饰色块。
6. 不使用大面积深色背景，除非用户明确要求并单独确认。

### 圆角系统

当前圆角策略按场景分层使用，不做全站统一大圆角。

```css
--radius-none: 0px;
--radius-image: 2px;
--radius-card: 10px;
--radius-panel: 16px;
--radius-scope-card: 18px;
--radius-pill: 999px;
```

使用规则：

1. 大型摄影图保持直角或极轻圆角，适用于 Hero 大图、Four Seasons 大图、Activity Diversity 大图、About 大图，范围为 `0px - 2px`。
2. Four Seasons 和 Activity Diversity 入口卡片使用中等克制圆角，范围为 `8px - 12px`，不要超过 `14px`。
3. Scope Showcase 这类小图叙事素材允许使用较大圆角，范围为 `16px - 22px`，当前发散图片以代码中的 `--radius-panel` / 具体样式为准。
4. Modal 弹窗使用中等圆角，范围为 `16px - 18px`，不要超过 `20px`。
5. 标签和小按钮可以使用胶囊圆角，使用 `--radius-pill: 999px`。
6. 不要把所有图片统一改成大圆角，不要给 Hero 大图加大圆角。
7. 大圆角只允许用于 Scope Showcase 这类轻内容小图叙事素材或经用户确认的视觉承接过渡。
8. 圆角调整不能让网站变成 SaaS 官网或 App 风。

### 字体与字号

1. 整体字号偏小，追求现代儿童户外摄影品牌感和摄影作品集的克制气质。
2. 正文基础字号约 `14px`。
3. 卡片正文约 `13px`。
4. 标签 / caption / 导航约 `10px - 12px`。
5. 区块标题约 `24px - 38px`。
6. Hero 标题可以较大，但必须轻、克制。
7. 中文正文不要低于 `13px`。
8. 移动端正文保持可读性。
9. 不依赖衬线字体、粗字重和超大营销标题建立层级，而是通过无衬线字体克制使用、留白、行距、图片比例和排版节奏建立高级感。

### 布局与留白

1. 页面保留充分留白。
2. 图片是主角，文字只做辅助。
3. 模块之间有呼吸感。
4. 不做拥挤的信息流。
5. 不做网盘相册式堆图。
6. 不过度使用厚重边框和阴影。
7. 桌面端保持摄影杂志感。
8. 移动端自然堆叠，不让文字拥挤。

## Confirmed Interaction System / 已确认交互系统

### Four Seasons / 四季自然手记

1. `Four Seasons` 是网站主叙事入口。
2. 包含 `Spring / Summer / Autumn / Winter`。
3. 点击季节入口打开对应季节 modal。
4. modal 内部显示该季节的瀑布流照片。
5. `Four Seasons` 模块支持左右切换。
6. `Four Seasons` 模块支持鼠标拖动切换。
7. 拖动切换动画应与点击箭头切换动画一致。
8. 不允许拖动到阈值后瞬移换图。
9. 拖动时当前图片应自然移动，后一张图片自然进入中心。
10. 未达到阈值时图片自然回弹。
11. `Four Seasons` 可拖动区域使用 `data-cursor="drag"`。
12. 以当前代码为准：当前四季大图高度为 `600px`，左右滑动切换为 transform 位移动画，不使用透明度叠化换图。

### Activity Diversity / 活动多样性

1. `Activity Diversity` 是内容证明入口。
2. 当前初始活动类型包括 `Hiking` / `Skiing` / `Insect Watching` / `Stream Trekking` / `Tea Picking` / `Cycling` / `Lotus Root Digging` / `Rice Harvesting`。
3. 点击活动卡片打开对应活动 modal。
4. modal 内部显示该活动类型的瀑布流照片。
5. 活动类型未来可以新增、删除或替换。
6. 新增活动必须复用现有 activity card 和 modal gallery 组件。
7. 不要为每个新活动单独写重复 HTML。
8. 不要让活动模块替代四季主叙事。
9. 以当前代码为准：页面可见的活动大图堆叠由 `workPanels` 控制，活动图库数据在 `script.js` 的 `workCollections` 中维护。

### Modal / 弹窗

1. `Four Seasons` 和 `Activity Diversity` 共用统一 modal 视觉语言。
2. 弹窗背景使用半透明遮罩。
3. 弹窗可使用轻微 `backdrop blur`。
4. modal 面板使用暖白半透明背景。
5. 弹窗内部可滚动。
6. 打开 modal 时背景页面应锁定滚动。
7. 支持关闭按钮、点击遮罩、`Esc` 关闭。
8. 不影响页面 smooth scroll 或 custom cursor。
9. modal 内部图片不参与全局滚动视差。

### Image Preview / 图片放大预览

1. modal 内部瀑布流图片 hover 时启用 `zoom` cursor。
2. 点击 modal 内部图片打开图片放大预览。
3. 放大预览不关闭当前 modal。
4. 放大图片居中显示，并保持原始比例。
5. 点击预览图片、点击遮罩、按 `Esc` 可关闭预览。
6. 预览打开时 cursor 使用 `close-preview` 状态。
7. `close-preview` icon 为减号。
8. `Esc` 优先级：如果图片预览打开，`Esc` 先关闭图片预览；如果预览未打开，`Esc` 再关闭 modal。

### Sequential Text Scroll Motion / 顺序文字滚动归位

1. 以当前代码为准：当前项目已有小范围顺序文字滚动归位动效。
2. 当前 HTML 使用 `data-text-sequence` 标记模块级文字容器，使用 `data-text-step` 标记需要参与顺序动效的文字元素。
3. 只允许作用于模块级文字，例如 Hero 主标题 / 副文案、模块标题、模块说明、About 正文和 Contact 说明。
4. 不作用于导航、按钮、modal 内部、image preview、custom cursor、footer 小字和 `data-cursor` 交互元素内部。
5. 当前实现不是随机 parallax，而是按 DOM 顺序从上到下依次轻微归位；上方文字先稳定，下方文字稍晚跟上。
6. 当前位移强度以 `script.js` 为准：`soft: 14px`、`medium: 24px`、`strong/title: 38px`、`kicker: 16px`、`heading: 28px`、`body: 18px`、`copy: 22px`，最大不超过 `42px`。
7. 当前 stagger 以 `script.js` 为准：`textSequenceStepDelay = 0.14`、`textSequenceMaxDelay = 0.36`、`textSequenceDuration = 0.62`，初始 opacity 为 `0.8`。
8. 当前触发区间以代码为准：模块顶部约进入视口 `85%` 开始，到约 `42%` 基本完成。
9. 当前实现使用 `IntersectionObserver`、`requestAnimationFrame`、`translate3d` 和 CSS 变量 `--text-sequence-y` / `--text-sequence-opacity`。
10. `prefers-reduced-motion: reduce` 或非桌面精细指针设备下禁用。
11. 后续如继续调整文字动效，必须先输出计划，确认后再执行；不要擅自扩展成图片视差、Hero logo 动效或 bottom nav reveal。

## Custom Cursor Specification / 自定义鼠标指针规范

### 总体原则

1. custom cursor 是高级交互层，不能抢照片。
2. cursor 必须克制、高级、轻。
3. 不能做成科技感、游戏感、霓虹感。
4. 必须 `pointer-events: none`。
5. 只在桌面鼠标设备启用。
6. 移动端和平板触摸设备禁用。
7. `prefers-reduced-motion: reduce` 时禁用或降低动画。
8. 状态切换必须自然、丝滑，不允许闪白、跳变、残影。

### DOM 分层

cursor 应分为：

- `cursor-core`：默认半透明深绿色实心小圆
- `cursor-glass`：带 icon 状态下的半透明毛玻璃圆
- `cursor-icon`：不同状态 icon

三者必须独立，不要用一个元素同时承担圆、玻璃和 icon。

当前 DOM 结构以代码为准：

```html
<div class="custom-cursor is-hidden" aria-hidden="true">
  <div class="cursor-glass"></div>
  <div class="cursor-core"></div>
  <div class="cursor-icon cursor-icon-arrow"></div>
  <div class="cursor-icon cursor-icon-zoom"></div>
  <div class="cursor-icon cursor-icon-drag"></div>
  <div class="cursor-icon cursor-icon-close-preview"></div>
</div>
```

### default 状态

1. 默认状态只显示一个半透明深绿色实心小圆。
2. 小圆颜色为深森林绿 90% - 95% 透明度。
3. 推荐 `rgba(23, 33, 27, 0.9)` 或 `rgba(23, 33, 27, 0.95)`。
4. 小圆尺寸约 `13px`。
5. 小圆带非常细微阴影。
6. 无 glass circle。
7. 无 icon。

### hover 状态

用于普通链接、按钮、普通可点击文字。

1. 不显示 glass circle。
2. 不显示 icon。
3. 只让默认实心小圆轻微放大。
4. 小圆阴影轻微增强。
5. 动效克制、自然。

### 带 icon 状态

包括：

- `arrow`
- `zoom`
- `drag`
- `close-preview`

规则：

1. 默认实心小圆必须消失。
2. 显示边缘清晰的半透明 glass circle。
3. glass circle 内部使用 `backdrop-filter` 产生背景模糊。
4. 不使用 `filter: blur()` 模糊圆本身。
5. glass circle 不要外侧线框。
6. 不要 `border` / `outline` / `stroke`。
7. 保留轻微自然阴影。
8. icon 使用深森林绿，不使用白色。
9. icon 尺寸需要清晰，约 `22px - 24px`。
10. glass circle 大小保持克制，不随意放大。
11. icon 居中显示。
12. icon 切换不闪白、不残影。

### 各状态 icon

`arrow`：

- 用于可点击打开弹窗的图片卡片。
- icon 为右上箭头。

`zoom`：

- 用于 modal 内部可点击放大查看的图片。
- icon 必须是斜 45 度双向箭头。
- 不使用四方向 expand icon。
- 不使用放大镜 icon。

`drag`：

- 用于 `Four Seasons` 可左右拖动区域。
- icon 为水平双向箭头。
- 按住左右拖动时，icon 可根据方向轻微左右偏移。

`close-preview`：

- 用于图片放大预览状态。
- icon 为减号。
- 表示点击可关闭放大预览。

### data-cursor 对应关系

- 普通 `a` / `button` / nav link：`data-cursor="hover"`
- `Four Seasons` 季节入口：`data-cursor="arrow"`
- `Activity Diversity` 活动入口：`data-cursor="arrow"`
- `Four Seasons` 可左右拖动区域：`data-cursor="drag"`
- modal 内部 gallery 图片：`data-cursor="zoom"`
- image preview 预览层 / 预览图 / 遮罩：`data-cursor="close-preview"`

## Image Resource Structure / 图片资源结构

当前推荐结构：

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
├── scope/
│   ├── hiking.jpg
│   ├── stream-trekking.jpg
│   ├── skiing.jpg
│   ├── rice-harvesting.jpg
│   ├── lotus-root-digging.jpg
│   ├── camping.jpg
│   ├── insect-watching.jpg
│   └── tea-picking.jpg
│
│   可后续扩展：
│   ├── bee-observation.jpg
│   ├── desert-hiking.jpg
│   ├── rime-watching.jpg
│   └── cycling.jpg
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

规则：

1. 不要创建 `selected-works` 文件夹。
2. 图片文件名全部小写。
3. 使用英文和连字符。
4. 不使用中文、空格和特殊符号。
5. 后续替换图片时，优先同名覆盖，不随意改路径。
6. 活动模块可扩展，新活动使用 `activity-slug` 命名。
7. 例如新增 `camping`：
   - `assets/images/activities/camping-cover.jpg`
   - `assets/images/galleries/activities/camping/camping-01.jpg`
8. `scope` 目录只用于 `Scope Showcase / 摄影服务范围展示`，不与四季封面、活动封面或弹窗图库混用。

**弹窗图库图片排列与显示补充说明：**
1. 四季弹窗和活动弹窗的图库均严格按照实际文件夹中的图片数量进行展示，不使用固定数量或硬编码数组。
2. 弹窗图库图片排列顺序为“从左到右、从上到下”依次排列，保持与文件夹实际顺序一致。

## Current Implementation Addendum / 当前实现补充

本章节记录截至当前代码的实际实现状态。若本章节与旧章节、历史描述或旧命名存在不一致，以当前代码为准。

### Hero / 首页第一屏

1. Hero 当前是全屏摄影封面形式，`section.hero.hero-cover` 使用 `100vh` / `100svh` 高度。
2. Hero 主图继续使用 `assets/images/hero/hero.jpg`，图片路径和资源结构不变。
3. Hero 图片通过当前 `figure.hero-image` 结构铺满首屏，`img` 使用 `object-fit: cover` 和 `object-position: center center`。
4. Hero 上方有克制的暗色渐变遮罩 `.hero-overlay`，目的是保证文字、导航和底部箭头可读，不做重滤镜、暗角或商业海报感。
5. Hero 文字信息居中排布，整体保持摄影作品集气质，不做营销化大标题。
6. Hero 底部中间有一个简洁向下箭头按钮 `.hero-scroll-indicator`，点击后滚动到 `#scope`。
7. 箭头可有轻微上下浮动；`prefers-reduced-motion: reduce` 或触摸设备下关闭动画。
8. 不要恢复此前被否定的 Hero logo 滚动缩小归位方案。

### Scope Showcase / 摄影服务范围展示 当前状态

1. `Scope Showcase` 当前位于 Hero 后，是页面第二屏。
2. 模块标题为 `Scope of Stories / 我所记录的活动现场`。
3. 模块用途是展示摄影服务覆盖场景的广度，不是作品分类入口，不打开弹窗，不替代 `Four Seasons` 和 `Activity Diversity`。
4. 模块内容包括户外研学、自然探索、活动纪实、机构内容、人物状态和真实发生的现场。
5. 当前结构是 `section.scope-narrative#scope[data-scope-narrative]` + `.scope-narrative-sticky` + `.scope-burst-layer`。
6. `.scope-narrative` 提供长滚动距离，`.scope-narrative-sticky` 定格在一屏内，JS 将滚动距离转换为动画 progress。
7. 中心文字先出现；8 张 `.scope-burst-card` 图片随后从中心附近依次向外发散。
8. 发散图片随滚动进度改变 `opacity`、`scale`、`translate` 和轻微 `rotate`。
9. 第 9 个承接内容不是单独图片，而是现有 `Activity Diversity / 活动多样性` 模块本身。
10. `Activity Diversity` 通过 `.activity-reveal-stage[data-activity-reveal]` 从中心出现并逐渐放大至全屏，作为 Scope 动画终点。
11. 当前实现中 `.activity-reveal-stage` 在动画完成后会进入 `is-native` / `is-revealed` 状态，释放 `overflow`、`transform` 和 `pointer-events`，让真实 Activity work stack 接管滚动和交互。
12. 当前小图卡片只使用 `data-cursor="hover"`，不得使用 `data-cursor="arrow"` 或 `data-cursor="zoom"`。
13. `prefers-reduced-motion: reduce`、触摸设备或窄屏下，Scope 降级为静态标题 + 图片网格，Activity Diversity 正常显示。
14. 图片目录为 `assets/images/scope/`，该目录只服务于 scope 模块，不与 Activity 弹窗图库混用。

### About / 关于我 当前状态

1. `About / 关于我` 模块保持左图右文结构。
2. 左侧为关于图片，右侧为个人介绍文字。
3. 该模块不跟随其他模块标题说明的居中布局。

### Header / 顶部导航滚动状态

1. 顶部导航 `.site-header` 当前为 fixed。
2. 在 Hero 顶部初始状态下，导航背景透明度为 `0`，blur 为 `0px`，文字使用暖白色以压在图片上。
3. 向下滚动时，JS 通过 CSS 变量逐步恢复当前半透明暖白背景、边线、阴影和 `backdrop-filter` blur。
4. 当前恢复值以代码为准：背景约 `rgba(247, 245, 239, 0.62)`，blur 约 `22px`。
5. 当 `Activity Diversity` 的 `.work-stack` sticky 图片区域吸顶并覆盖视口时，导航应再次进入与 Hero 类似的沉浸式透明状态，压在图片上方。
6. 移动端打开导航菜单时，导航背景恢复为近似不透明暖白，以保证菜单可读。
7. 不要改变导航尺寸、链接内容、模块锚点和基础布局。

### Activity Diversity / Work Stack 当前状态

1. `Activity Diversity` 当前由 `section.work-stack-section#work` 承担，是内容证明入口，不是独立 `Selected Works` 模块。
2. `.work-stack` 当前为 sticky 全屏图片堆叠区域，`height: 100vh / 100svh`，图片切换由页面滚动进度驱动。
3. 当前可见的大图面板只有 4 个：`hiking`、`stream`、`tea`、`lotus`；完整活动图库数据仍在 `script.js` 的 `workCollections` 中维护。
4. 页面可见的 `Selected Works` 只是该区域的 eyebrow / label，不代表新增模块。
5. 当前 work stack 右侧只保留竖向进度条 `.work-stack-progress`；此前上下箭头按钮已从 HTML 中移除。
6. 进度条当前放置在整张图片画面的右侧，右侧间隙较小；以当前 CSS 的 `.work-stack-controls { right: 24px; }` 为准。
7. 不要重新加回 work stack 的上下箭头控制，除非用户明确要求。
8. `Activity Diversity` 当前同时承担 Scope Showcase 第 9 阶段的真实承接模块；它不是 Scope 中的一张静态图，也不是复制模块。
9. Activity 内部原有交互原则上必须保持不变：活动卡片点击打开 modal、modal 内瀑布流图片、图片 hover zoom cursor、图片点击放大预览、Esc 关闭逻辑、custom cursor 状态和 work stack 滚动进度逻辑。

### Known Issues / 已知问题

1. `Scope Showcase` 与 `Activity Diversity` 的第 9 阶段承接仍属于复杂滚动叙事交互，后续若出现滚动异常，应优先检查承接外壳是否仍在影响 Activity 的真实文档流。
2. 重点风险是 `Activity Diversity` 长期处在带 `transform`、`position: sticky`、`overflow: hidden` 或 `pointer-events: none` 的父级容器中，导致 work stack 内部滚动、面板切换或点击交互异常。
3. `Scope Narrative` 的预留高度必须只服务于动画进度，不应制造无意义空白或让用户误以为页面被锁定。
4. 若后续修复 Activity 滚动异常，不能通过 `wheel preventDefault`、`body overflow hidden`、全局滚动锁或外部滚动库强行解决。

## Next Fix Direction / 下一步修复方向

后续修复 `Scope Showcase` 与 `Activity Diversity` 承接时，必须遵循以下原则：

1. 不要重写 `Activity Diversity` 内部结构。
2. 不要复制 `Activity Diversity`。
3. 不要把 `Activity Diversity` 做成静态图片。
4. 不要破坏 `Activity Diversity` 的 modal、image preview、custom cursor 和 work stack 数据。
5. 修复方向应该优先考虑：Scope Showcase 动画完成后释放 `Activity Diversity`。
6. 避免 `Activity Diversity` 长期被包裹在 `transform` / `sticky` / `overflow: hidden` 的容器里。
7. `Activity Diversity` 最终应回到正常文档流。
8. `Activity Diversity` 的 sticky work stack 应继续根据自己的 section scroll progress 运行。
9. `Scope Narrative` 的预留高度不能制造无意义空白。
10. 如果需要做视觉承接，可以只在 `Scope Showcase` 末尾使用一个视觉过渡层，完成后让真正的 `Activity Diversity` 独立出现。
11. 后续修复必须先输出实现计划，不要直接执行代码。

### Global Image Preview / 全局图片放大预览

1. 图片放大预览层 `.image-preview` 是全局共享层，适用于 `Four Seasons` 和 `Activity Diversity` 任意 modal 内的图库图片。
2. 打开预览前，当前 JS 会先对点击图片进行预加载 / `decode()`，再写入预览图片，减少小图点击时背景抖动。
3. 预览背景 `.image-preview-backdrop` 当前不是简单黑色透明度变化，而是渐进式暗色遮罩 + `backdrop-filter: blur(12px) saturate(0.94)`。
4. 预览图片 `.image-preview-img` 当前使用轻微透明度和 `translateY(12px) scale(0.975)` 到自然归位的动效。
5. 关闭预览时，不立即清空图片 `src`；当前 JS 会等待约 `340ms` 过渡结束后再清理，保证图片消失流畅自然。
6. 预览层必须保持在当前 modal 上方，不关闭原 modal，不跳转页面。
7. 点击预览图片、点击遮罩、按 `Esc` 都可以关闭预览；若预览打开，`Esc` 优先关闭预览，再考虑关闭 modal。
8. 预览层、遮罩、预览图片使用 `data-cursor="close-preview"`，cursor icon 为减号。

### Modal / Gallery 当前状态

1. `work-modal` 和 `season-modal` 仍使用统一视觉语言：深森林绿半透明遮罩、轻微 backdrop blur、暖白半透明面板。
2. modal 打开时 `body.modal-open` 锁定背景滚动。
3. modal 内图库图片通过 JS 渲染，使用 `data-preview-image` 和 `data-cursor="zoom"`。
4. modal 内部图片 hover 使用 zoom cursor；点击图片只打开全局 image preview，不关闭 modal。
5. modal 内文字和图片不参与顺序文字动效。

### Modal Gallery Rules / 弹窗图库规则

1. `Four Seasons` 和 `Activity Diversity` 弹窗内的图片根据实际文件夹中存在的图片数量显示。
2. 不使用固定数量或硬编码数组限制前台展示。
3. 图片排列顺序为从左到右、从上到下。
4. 保留现有瀑布流列数和间距。
5. 保留 hover、zoom、custom cursor、modal 和 image preview 逻辑。
6. `Four Seasons` 和 `Activity Diversity` 共用统一 modal / gallery 交互原则；不要为单一模块另写一套独立弹窗逻辑，除非用户明确要求。

### Current Code Authority / 当前代码优先原则

1. 若历史文档仍出现 `data-text-parallax`、旧位移上限或旧 Hero 描述，以当前代码中的 `data-text-sequence` / `data-text-step`、当前 CSS 和当前 JS 为准。
2. 若旧文档提到 Activity Diversity 上下箭头，以当前 HTML 为准：work stack 当前只保留进度条，不保留上下箭头按钮。
3. 若旧文档提到 Hero opening 大结构被回退，以当前代码为准：当前已确认的 Hero 是全屏摄影封面形式，但仍禁止恢复 Hero logo 缩放归位、全局图片视差和 bottom nav reveal。
4. 若旧文档提到 Scope Showcase 四排自动横向轮播，以当前代码为准：当前实现是 scroll-driven sticky narrative + 8 张图片发散 + Activity Diversity 真实模块承接。

## Creative Override Mode / 创意突破模式

`PROJECT_CONTEXT.md` 默认用于保护当前已确认的设计系统、模块边界、图片结构和交互规则。

当用户明确说明“不要被 md 限制”“允许突破常规”“进入 Creative Override Mode”或类似指令时，可以进行更大胆的高级交互探索。

Creative Override Mode 可以临时突破保守动效限制，例如：

1. `sticky narrative`
2. 模块转场
3. 滚动叙事
4. 强视觉承接
5. 复杂但可解释、可回退的交互动效

但 Creative Override Mode 仍然不能破坏：

1. `Four Seasons` modal
2. `Activity Diversity` modal
3. image preview
4. custom cursor
5. 图片资源结构
6. 不新增 `Selected Works`
7. 不创建 `selected-works` 文件夹
8. 不擅自删除或重写已确认模块

Creative Override Mode 下必须先输出实现计划，等待用户确认后再执行代码。所有大改必须可回退，并且完成后必须更新或注明对 `PROJECT_CONTEXT.md` 的影响。

## Reverted / Rejected Changes / 已回退或不再使用的方案

此前尝试过一次较大范围的交互动效层优化，包括：

1. Hero logo 滚动缩小归位。
2. 全局图片与文字 parallax。
3. bottom nav reveal 底部导航出现。
4. 全局 `data-parallax` 标记。
5. 未确认的 Hero opening 大结构调整。
6. 普通随机文字漂浮 / 随机 parallax。
7. 强 AOS reveal 式文字入场动画。
8. Activity Diversity 的上下箭头控制按钮。

这些效果已经回退，因为结果不满意。

当前明确要求：

1. 不要重新加入 Hero logo 滚动缩小归位。
2. 不要重新加入 bottom nav reveal。
3. 不要一次性加入全局图片 + 文字 + Hero + footer 的大范围滚动动效。
4. 不要重新加入全局图片视差。
5. 不要重新加入全局 `data-parallax` 标记。
6. 不要擅自恢复已回退的滚动视差方案。
7. 后续如果要加入动效，必须一步一步来。
8. 不要重新加入 Activity Diversity 的上下箭头控制按钮，除非用户明确要求。
9. 不要将顺序文字归位改成随机漂浮、随机速度差或普通全局 parallax。
10. 不要引入新的全站 smooth scroll / Lenis / 惯性滚动库，除非用户单独确认。
11. 以当前代码为准：当前保留的是小范围 `data-text-sequence` / `data-text-step` 顺序文字归位，不是已回退的大范围方案。
12. 不要把 `Scope Showcase` 改成 Park 网站风格；当前已确认方向是克制的 sticky narrative + 图片发散 + Activity Diversity 承接，不是 Park 风格，也不是普通四排横向流动。
13. 不要把 `Scope Showcase` 改成新的主分类入口。

## Deferred Ideas / 暂缓想法

以下想法可以作为未来讨论方向，但当前没有执行，后续不得擅自加入：

1. 新增或调整活动类型。
2. 替换真实摄影图片。
3. 调整联系方式与个人简介真实文案。
4. 进一步细化移动端 Hero 构图或导航可读性。
5. 对顺序文字归位动效继续微调，但必须先输出计划并等待确认。
6. 对全局 image preview 的模糊强度、关闭时长继续微调，但必须只影响预览层。

## Future Improvement Direction / 后续改进方向

后续改进必须一步一步进行，不能一次性修改太多。

当前代码已经包含小范围顺序文字滚动归位。未来如果继续优化这部分，只能在现有基础上做小范围调整，并必须先输出实现计划，等待确认后再执行。

顺序文字归位相关约束：

1. 只对模块级文字做克制的顺序归位动效。
2. 不把文字做成随机漂浮或普通全局 parallax。
3. 不动 Hero logo。
4. 不新增图片视差。
5. 不新增 bottom nav。
6. 不修改 custom cursor。
7. 不修改 modal。
8. 不修改 `Four Seasons`。
9. 不修改 `Activity Diversity`。
10. 先输出实现计划，确认后再执行。
11. 文字位移必须克制，以当前代码为准，最大不超过 `42px`。
12. modal、image preview、nav、按钮、小标签等区域不参与文字视差。
13. `prefers-reduced-motion` 下禁用或降低动效。

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
19. 如果用户只要求做文档总结，不要修改代码。
20. 如果用户要求新增动效，必须先输出实现计划，不要直接执行。
21. 修改某个模块时，只改该模块，不影响其他模块。
22. 如果不确定某个改动会不会影响视觉，先保守处理。
23. 完成后必须输出修改报告，说明改了哪些文件、哪些内容、是否影响现有功能。
24. 修改 `Scope Showcase` 时，不要影响 `Four Seasons`、`Activity Diversity`、modal、image preview、custom cursor 或已有图片目录。
