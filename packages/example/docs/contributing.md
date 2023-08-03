## 贡献文档

当阅读时遇到明显的错误，开发者可以点击每篇文档右下方的 `在github上编辑` 按钮，即会打开 Github 的编辑界面。开发者对文档进行编辑后，就可以提交一个 Pull Request。

如果是较复杂的修改，可以按以下步骤进行操作：

**1. fork & clone**

fork [wc-design](https://github.com/Tyf2345/wc-design/tree/gh-pages) 仓库

clone [wc-design](https://github.com/Tyf2345/wc-design/tree/gh-pages)仓库的 [gh-pages](https://github.com/Tyf2345/wc-design/tree/gh-pages) 分支至本地：

```md
git clone -b gh-pages https://github.com/{your github name}/wc-design.git
```

**2. 编译预览**

```sh
$ pnpm install
$ pnpm run docs:dev
```

**3. 修改对应文档**

文档基于`vitepress`构建，语法详见 [vitepress](https://vitepress.dev/) 官网

1、修改文档

进入 `docs` 文件夹，找到对应的文件(`components/组件.md`)进行编辑

**4. 提交 Pull Request**

## 贡献代码

**环境准备**

需要安装 Node.js（建议安装 `18.16.0` 及以上版本）及 [pnpm](https://pnpm.io/zh/)

各版本 pnpm 与各版本 Node.js 之间的支持情况见 [pnpm 兼容性](https://pnpm.io/zh/installation#%E5%85%BC%E5%AE%B9%E6%80%A7)

首先把 `wc-design` 仓库 fork 一份到自己的 Github，然后从个人仓库把项目 clone 到本地，项目默认是 `master` 分支。

然后运行以下命令：

```sh
$ pnpm run init
```

运行完上述命令后，环境已经准备好，此时可以新拉一条分支进行开发；项目的包管理器根据自己的喜好选择使用 [npm link](https://docs.npmjs.com/cli/v7/commands/npm-link) 或 [yarn link](https://yarnpkg.com/cli/link) 或 [pnpm link](https://pnpm.io/zh/cli/link) 。

**代码风格**

JavaScript：遵从 [JavaScript Standard Style](https://standardjs.com/)，详情请看根目录的 `.eslintrc.json`。

TypeScript：遵从基于 [JavaScript Standard Style](https://standardjs.com/) 的变种，详情请看根目录的 .eslintrc.json 和相关包目录下的 tsconfig.json。

样式：遵循相关包目录下的 `.prettierrc.json` 风格。

**commit 规范**

在输入 `commit message` 的时候请务必遵从 [commitlint](https://commitlint.js.org/#/) 规范。

**提交 Pull Request**

如果对 PR（Pull Request）不了解，请阅读 [《About Pull Requests》](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)

完成开发后，推送到自己的 wc-design 仓库，就可以准备提交 Pull Request 了。

提交 PR 前请阅读以下注意事项：

1、保证 pnpm run build 能够编译成功。

2、保证代码能通过 ESLint 测试。

3、保证 commit 信息需要遵循 [commitlint](https://commitlint.js.org/#/)规范

4、如果提交到代码非常多或功能复杂，可以把 PR 分成几个 commit 一起提交

## css 变量格式

**说明**

项目中涉及到的 css 颜色、边距、圆角统一使用 css 变量实现

**规则**

例子

```css
--text-fff-color-big
```

解释

--[类型]--[色值]--[色值类型]-[尺寸]

- 类型
  - text
  - button
  - card
  - input
  - search
  - ...
- 色值
  - 16 进制色值
  - rgba
  - 渐变
- 色值类型
  - color 颜色
  - bg_color 背景色
  - ...
- 尺寸
  - medium 大
  - small(default) 中
  - mini 小
