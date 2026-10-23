# Color Database

原生 HTML、CSS、JavaScript 配色浏览工具。内置 201 组 2–10 色方案，无第三方依赖、构建步骤或后端。

在线访问：[Color Database](https://xiasheng32.github.io/colorDatabase/page/) · 公开仓库：[xiasheng32/colorDatabase](https://github.com/xiasheng32/colorDatabase)

## 文件结构

```text
colorDatabase/
├── README.md          # 使用说明
└── page/
    ├── index.html     # 页面结构与内置图标符号
    ├── style.css      # 布局、主题、系统字体与切换动画
    ├── script.js      # 配色数据、筛选、收藏、复制与 SVG 图表
    └── icon.svg       # 调色盘图标与网站图标
```

## 打开页面

直接双击 `page/index.html` 即可离线使用，保留同目录下的另外三个文件。

也可以在 `colorDatabase/` 目录运行以下命令，通过本地 HTTP 访问；此方式需要 Python 3：

```sh
python3 -m http.server 8765 --bind 127.0.0.1 --directory page
```

随后打开 [http://127.0.0.1:8765/](http://127.0.0.1:8765/)。

## 部署与更新

GitHub Pages 使用 **Deploy from a branch**，发布源为 `main` 分支的 `/ (root)`。推送后由 GitHub 自动构建并发布，页面入口位于 `page/`，无需添加仓库工作流文件。

修改完成后，在 `colorDatabase/` 目录提交并推送：

```sh
git add page README.md
git commit -m "Update Color Database"
git push origin main
```

## 使用方式

- 搜索编号、名称或 HEX 色值，并按颜色数量筛选；点击爱心收藏，通过“收藏”查看已保存的方案。
- 点击方案打开预览。四张 SVG 图表采用 2×2 布局，每张画布比例为 4:3；固定示例数据只更换颜色，便于比较。
- 预览采用紧凑、自适应布局，便于一屏查看四图和色值；点击小色块复制单色，“复制全部”复制整组。自动复制受限时，会提供可选择的文本供手动复制。
- 顶部胶囊控件切换中文／英文、浅色／深色；图表标题保留英文。界面统一使用系统默认字体，切换带过渡动画，并适配系统减少动态效果设置。
- 收藏、语言和外观选择保存在浏览器的 `localStorage` 中。未指定外观时跟随系统主题；浏览器禁止存储时仍可在当前页面使用。

存储按浏览器和访问来源区分。直接打开文件与通过 HTTP 访问可能使用独立的设置和收藏，不会自动同步。

## 数据说明

方案保留原始编号，因此编号不一定连续。第 123 组的 `#T3ABCF` 是无效色值，页面会明确提示并使用灰色占位；复制时保留原文。
