import shell from 'shelljs';
import fs, { readFileSync, readdirSync, writeFileSync } from 'fs-extra';
import {
	sideWrapperList,
	TMenuTagType,
	componentDir,
	sourceComponentDir
} from '../constants';
import { resolve } from 'path';

const sourceTemplate = {
	'index.tsx'({ type, desc, text }: TMenuTagType) {
		return `import { QuarkElement, customElement, property } from "quarkc";
import style from "./index.less";
@customElement({ tag: "wc-${type}", style })
export default class Wc${text} extends QuarkElement {
  @property()
  title: string;
  render() {
    return (
      <div>
        <h1>{this.title}</h1> ${desc}
      </div>
    );
  }
}
`;
	},
	'index.less'({ type, desc, text }: TMenuTagType) {
		return '';
	}
};

const docsTemplate = {
	'demo.vue'({ type, desc, text }: TMenuTagType) {
		return `i<template>
      <div>
          <wc-${type} title="${desc}" />
      </div>
  </template>
  <script lang="ts" setup>
  import 'wc-design/src/${type}/index.tsx';
  </script>
  `;
	},
	'doc.zh-CN.md'({ type, desc, text }: TMenuTagType) {
		return (
			`## ${type} doc \r\n` +
			readFileSync(resolve(__dirname, './template.md')).toString()
		);
	}
};

// 文档初始化
sideWrapperList.forEach((sideWrapper) =>
	sideWrapper.tags.forEach((tag: TMenuTagType) => {
		const typeDir = `${componentDir}/${tag.type}`;
		if (!fs.existsSync(typeDir)) {
			shell.mkdir(typeDir);
			for (const componentName in docsTemplate) {
				fs.writeFileSync(
					`${typeDir}/${componentName}`,
					docsTemplate[componentName](tag),
					'utf-8'
				);
			}
		}
	})
);

// 源码初始化
sideWrapperList.forEach((sideWrapper) =>
	sideWrapper.tags.forEach((tag: TMenuTagType) => {
		const typeDir = `${sourceComponentDir}/${tag.type}`;
		if (!fs.existsSync(typeDir)) {
			shell.mkdir(typeDir);
			for (const componentName in sourceTemplate) {
				fs.writeFileSync(
					`${typeDir}/${componentName}`,
					sourceTemplate[componentName](tag),
					'utf-8'
				);
			}
		}
	})
);

// 源码 src/index添加导出
let sourceStr = '';
readdirSync(sourceComponentDir, { withFileTypes: true })
	.filter((w) => w.isDirectory())
	.forEach((w) => (sourceStr += `export * from "./${w.name}"; \r\n`));
writeFileSync(sourceComponentDir + '/index.ts', sourceStr, 'utf-8');
