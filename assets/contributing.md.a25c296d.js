import{_ as e,o as s,c as t,V as a}from"./chunks/framework.eb1d3ce1.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"contributing.md","filePath":"contributing.md","lastUpdated":1690277742000}'),l={name:"contributing.md"},n=a(`<h2 id="贡献文档" tabindex="-1">贡献文档 <a class="header-anchor" href="#贡献文档" aria-label="Permalink to &quot;贡献文档&quot;">​</a></h2><p>当阅读时遇到明显的错误，开发者可以点击每篇文档右下方的 <code>在github上编辑</code> 按钮，即会打开 Github 的编辑界面。开发者对文档进行编辑后，就可以提交一个 Pull Request。</p><p>如果是较复杂的修改，可以按以下步骤进行操作：</p><p><strong>1. fork &amp; clone</strong></p><p>fork <a href="https://github.com/Tyf2345/wc-design/tree/gh-pages" target="_blank" rel="noreferrer">wc-design</a> 仓库</p><p>clone <a href="https://github.com/Tyf2345/wc-design/tree/gh-pages" target="_blank" rel="noreferrer">wc-design</a>仓库的 <a href="https://github.com/Tyf2345/wc-design/tree/gh-pages" target="_blank" rel="noreferrer">gh-pages</a> 分支至本地：</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git clone -b gh-pages  https://github.com/{your github name}/wc-design.git</span></span></code></pre></div><p><strong>2. 编译预览</strong></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs:dev</span></span></code></pre></div><p><strong>3. 修改对应文档</strong></p><p>文档基于<code>vitepress</code>构建，语法详见 <a href="https://vitepress.dev/" target="_blank" rel="noreferrer">vitepress</a> 官网</p><p>1、修改文档</p><p>进入 <code>docs</code> 文件夹，找到对应的文件(<code>components/组件.md</code>)进行编辑</p><p><strong>4. 提交 Pull Request</strong></p><h2 id="贡献代码" tabindex="-1">贡献代码 <a class="header-anchor" href="#贡献代码" aria-label="Permalink to &quot;贡献代码&quot;">​</a></h2><p><strong>环境准备</strong></p><p>需要安装 Node.js（建议安装 <code>18.16.0</code> 及以上版本）及 <a href="https://pnpm.io/zh/" target="_blank" rel="noreferrer">pnpm</a></p><p>各版本 pnpm 与各版本 Node.js 之间的支持情况见 <a href="https://pnpm.io/zh/installation#%E5%85%BC%E5%AE%B9%E6%80%A7" target="_blank" rel="noreferrer">pnpm 兼容性</a></p><p>首先把 <code>wc-design</code> 仓库 fork 一份到自己的 Github，然后从个人仓库把项目 clone 到本地，项目默认是 <code>master</code> 分支。</p><p>然后运行以下命令：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span></code></pre></div><p>运行完上述命令后，环境已经准备好，此时可以新拉一条分支进行开发；项目的包管理器根据自己的喜好选择使用 <a href="https://docs.npmjs.com/cli/v7/commands/npm-link" target="_blank" rel="noreferrer">npm link</a> 或 <a href="https://yarnpkg.com/cli/link" target="_blank" rel="noreferrer">yarn link</a> 或 <a href="https://pnpm.io/zh/cli/link" target="_blank" rel="noreferrer">pnpm link</a> 。</p><p><strong>代码风格</strong></p><p>JavaScript：遵从 <a href="https://standardjs.com/" target="_blank" rel="noreferrer">JavaScript Standard Style</a>，详情请看根目录的 <code>.eslintrc.json</code>。</p><p>TypeScript：遵从基于 <a href="https://standardjs.com/" target="_blank" rel="noreferrer">JavaScript Standard Style</a> 的变种，详情请看根目录的 .eslintrc.json 和相关包目录下的 tsconfig.json。</p><p>样式：遵循相关包目录下的 <code>.prettierrc.json</code> 风格。</p><p><strong>commit 规范</strong></p><p>在输入 <code>commit message</code> 的时候请务必遵从 <a href="https://commitlint.js.org/#/" target="_blank" rel="noreferrer">commitlint</a> 规范。</p><p><strong>提交 Pull Request</strong></p><p>如果对 PR（Pull Request）不了解，请阅读 <a href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests" target="_blank" rel="noreferrer">《About Pull Requests》</a></p><p>完成开发后，推送到自己的 wc-design 仓库，就可以准备提交 Pull Request 了。</p><p>提交 PR 前请阅读以下注意事项：</p><p>1、保证 pnpm run build 能够编译成功。</p><p>2、保证代码能通过 ESLint 测试。</p><p>3、保证 commit 信息需要遵循 <a href="https://commitlint.js.org/#/" target="_blank" rel="noreferrer">commitlint</a>规范</p><p>4、如果提交到代码非常多或功能复杂，可以把 PR 分成几个 commit 一起提交</p><h2 id="css变量格式" tabindex="-1">css变量格式 <a class="header-anchor" href="#css变量格式" aria-label="Permalink to &quot;css变量格式&quot;">​</a></h2><p><strong>说明</strong></p><p>项目中涉及到的css颜色、边距、圆角统一使用css变量实现</p><p><strong>规则</strong></p><p>例子</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">--text-fff-color-big</span></span></code></pre></div><p>解释</p><p>--[类型]--[色值]--[色值类型]-[尺寸]</p><ul><li>类型 <ul><li>text</li><li>button</li><li>card</li><li>input</li><li>search</li><li>...</li></ul></li><li>色值 <ul><li>16进制色值</li><li>rgba</li><li>渐变</li></ul></li><li>色值类型 <ul><li>color 颜色</li><li>bg_color 背景色</li><li>...</li></ul></li><li>尺寸 <ul><li>medium 大</li><li>small(default) 中</li><li>mini 小</li></ul></li></ul>`,45),r=[n];function p(o,i,c,d,g,h){return s(),t("div",null,r)}const b=e(l,[["render",p]]);export{m as __pageData,b as default};
