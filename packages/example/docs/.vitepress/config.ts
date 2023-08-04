import { readdirSync } from 'fs';
import { resolve } from 'path';
import { DefaultTheme, defineConfig } from 'vitepress';
import { TMenuTagType, componentDir, sideWrapperList } from '../../constants';
// import '../../scripts/batch';

const nav: DefaultTheme.NavItem[] = [
	{ text: '首页', link: '/' },
	{
		text: '组件',
		link: '/components/button/doc.zh-CN.html'
	},
	{
		text: '源码贡献',
		link: '/contributing'
	}
];
const sidebar: DefaultTheme.SidebarItem[] = [
	{
		text: '开始',
		items: [
			{
				text: '快速开始',
				link: '/getting-started'
			},
			{
				text: '最佳实践',
				link: '/quick-start'
			},
			{
				text: '更新日志',
				link: '/changelog'
			},
			{ text: '组件概览', link: '/overview' },
			{
				text: '源码贡献',
				link: '/contributing'
			}
		]
	},
	{
		text: '全局配置',
		items: [
			{ text: '全局特性配置', link: '/global-configuration' },
			{ text: '自定义主题', link: '/custom-theme' },
			{ text: '暗黑模式', link: '/dark-mode' }
		]
	},
	...sideWrapperList.map(({ title, tags }) => ({
		text: title,
		items: tags.map(({ text, desc, type }: TMenuTagType) => ({
			text: `${text}  -  ${desc}`,
			link: `/components/${type}/doc.zh-CN`
		}))
	}))
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
	vite: {
		clearScreen: false
	},
	base: process.env.NODE_ENV === 'production' ? '/wc-design/' : '/',
	lang: 'zh-CN',
	cleanUrls: false,
	title: 'wc-design',
	titleTemplate: '下一代前端组件库',
	lastUpdated: true,
	themeConfig: {
		logo: '/mt01.jpg',
		// https://vitepress.dev/reference/default-theme-config
		nav,
		sidebar,
		outline: {
			level: [2, 6],
			label: '目录'
		},
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/Tyf2345/wc-design' }
		],
		search: {
			provider: 'local'
		},
		footer: {
			message: 'wc-design组件库'
		},
		editLink: {
			text: '在github上编辑',
			pattern:
				'https://github.com/Tyf2345/wc-design/tree/main/packages/example/docs/:path'
		}
	}
});
