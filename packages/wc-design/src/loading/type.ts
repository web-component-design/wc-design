import { TSize } from 'shared/src/types';

export interface LoadingOptions {
	/**
	 * 指定弹框挂载的父节点。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body'
	 * @default 'body'
	 */
	attach?: string;

	/** 延迟显示加载效果的时间，用于防止请求速度过快引起的加载闪烁，单位：毫秒 */
	delay?: number;

	/**
	 * 是否全屏
	 */
	fullScreen?: boolean;

	/**
	 * 是否处于加载状态
	 */
	loading?: boolean;

	/**
	 * 是否需要遮罩层
	 */
	showOverlay?: boolean;

	/**
	 * 尺寸大小 small/medium/large
	 */
	size?: TSize;

	/**
	 * 提示文案支持字符串和dom标签
	 */
	text?: string | HTMLElement;

	/**
	 * 是否继承父元素颜色
	 */
	inheritColor?: boolean;

	/**
	 * 图标。默认loading
	 * @default loading
	 */
	iconName?: string;

	/**
	 * 消息层级
	 * @default 3000
	 */
	zIndex?: number;
}
