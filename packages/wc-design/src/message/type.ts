export interface TdMessageProps {
	/**
	 * 关闭按钮，可以自定义。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string 则直接显示值，如：“关闭”。也可以完全自定义按钮
	 */
	closeBtn?: string | boolean;
	/**
	 * 用于自定义消息弹出内容
	 */
	content?: string | HTMLElement;
	/**
	 * 消息内置计时器，计时到达时会触发 duration-end 事件。单位：毫秒。值为 0 则表示没有计时器。
	 * @default 3000
	 */
	duration?: number;
	/**
	 * 用于自定义消息前面的图标，优先级大于 theme 设定的图标。值为 false 则不显示图标，值为 true 显示 theme 设定图标
	 * @default true
	 */
	icon?: boolean;
	/**
	 * 消息组件风格
	 * @default info
	 */
	theme?: TMessageThemeList;
}

export interface MessageOptions extends TdMessageProps {
	/**
	 * 指定弹框挂载的父节点。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body
	 * @default 'body'
	 */
	attach?: string;
	/**
	 * 类名
	 * @default ''
	 */
	className?: string;

	/**
	 * 类名
	 * @default ''
	 */
	iconSize?: string;

	/**
	 * 消息层级
	 * @default 5000
	 */
	zIndex?: number;
}

export type TMessageThemeList =
	| 'info'
	| 'success'
	| 'warning'
	| 'error'
	| 'question'
	| 'loading';
