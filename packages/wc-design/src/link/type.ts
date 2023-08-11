import { TIconName } from '@/icon/types';
import { TLabelTarget, TSize, TTheme } from 'shared/src/types';

export interface LinkProps {
	/**
	 * 链接内容
	 */
	content?: string | HTMLElement;

	/**
	 * 禁用链接
	 */
	disabled?: boolean;

	/**
	 * 链接悬浮态样式，有 文本颜色变化、添加下划线等 2 种方法
	 * @default underline
	 */
	hover?: 'color' | 'underline';

	/**
	 * 跳转链接
	 * @default ''
	 */
	href?: string;

	/**
	 * 前置图标
	 */
	prefixIcon?: TIconName;

	/**
	 * 尺寸
	 * @default medium
	 */
	size?: TSize;

	/**
	 * 后置图标
	 */
	suffixIcon?: TIconName;

	/**
	 * 跳转方式，如：当前页面打开、新页面打开等，同 HTML 属性 target 含义相同
	 * @default ''
	 */
	target?: TLabelTarget;

	/**
	 * 组件风格，依次为默认色、品牌色、危险色、警告色、成功色
	 * @default default
	 */
	theme?: TTheme;

	/**
	 * 普通状态是否显示链接下划线
	 */
	underline?: boolean;

	/**
	 * 点击事件，禁用状态不会触发点击事件
	 */
	onClick?: (e: MouseEvent) => void;
}
