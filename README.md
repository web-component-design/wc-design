## 介绍
wc-desion(web component design) 是一个服务于web端的下一代UI组件库，它是一个基于 [quarkc](https://quarkc.hellobike.com/#/)  的 [web component](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_components) 组件库，可适用于任意前端框架甚至可以在无框架情况下运行

## 设计原则
- 此项目遵循 [TDesign](https://tdesign.tencent.com/)设计体系
- 可以理解为 TDesign 的 web component 版本

## 如何使用
```
npm i wc-design
```
## 使用产物
```
import "wc-design/lib/button";

<wc-button title="按钮" />;
```

## 开发要求
### node
 node >= 16
### 包管理工具
pnpm

## 启动项目
- clone 项目
- 进入根目录，执行 `pnpm i` 即可
- 完成后继续在项目根目录执行 `pnpm run docs:dev`，开发文档能启动成功即可


## 开发流程
- 新增功能 或者 改bug，需要在dev分支上切新分支开发
- 完成开发后提交 merge request
- 进行代码合并

