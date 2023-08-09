import { QuarkElement, customElement, property, state } from 'quarkc';
import '../icon/index.tsx';
import style from './index.less';
import { MessageOptions, TMessageThemeList } from './type.js';
import classNames from 'classnames';
@customElement({ tag: 'wc-message', style })
class WcMessage extends QuarkElement implements MessageOptions {
	@property()
	theme?: TMessageThemeList = 'info';

	@property()
	content: string;

	@property()
	zIndex?: number = 1001;

	@property()
	closeBtn?: string | boolean = true;

	prevIconElement() {
		const { closeBtn, theme } = this;
		// 渲染图标
		if (closeBtn === true) {
			let iconName = '';
			let iconClassWrap = '';
			switch (theme) {
				case 'info':
					iconName = 'info-circle-filled';
					break;
				case 'loading':
					iconName = 'loading';
					iconClassWrap += 'wd-icon-loading';
					break;
				case 'question':
					iconName = 'help-circle-filled';
					break;
				case 'success':
					iconName = 'check-circle-filled';
					break;
				case 'warning':
					iconName = 'error-circle-filled';
					break;
				case 'error':
				default:
					iconName = 'error-circle-filled';
					break;
			}
			return (
				<wc-icon
					iconName={iconName}
					size="large"
					color="currentColor"
					iconClassWrap={iconClassWrap}
					class="wd-icon"
				/>
			);
		}
		// 渲染文字
		if (typeof closeBtn === 'string' && closeBtn.length > 0) {
			return closeBtn;
		}
		// 不做任何渲染
		return null;
	}

	closeIconElement() {
		return this.closeBtn ? (
			<wc-icon
				class="wd-icon"
				iconName="close"
				onClick={(e: MouseEvent) => {
					// console.dir(this);
					this.$emit('on-close-btn-click', e);
					// this.onCloseBtnClick(e);
				}}
			/>
		) : null;
	}
	render() {
		const { content, zIndex, closeBtn, theme } = this;
		const messageClassNameWrap = classNames('wd-message', `wd-is-${theme}`, {
			'wd-is-closable': closeBtn
		});
		return (
			<div
				class="wd-message__list"
				style={`top: 32px; left: 50%; transform: translateX(-50%); z-index: ${zIndex};`}
			>
				<div class={messageClassNameWrap} style="opacity: 1; margin-top: 0px;">
					{this.prevIconElement()}
					{content}
					<span class="wd-message__close">{this.closeIconElement()}</span>
				</div>
			</div>
		);
	}
}
let rootDom: HTMLElement | null = null;
let mountMessageElement: HTMLElement | null = null;

let timer: number | null = null;

export const mountMessage = (opt: MessageOptions) => {
	// 如果message 清理掉，重新生成
	if (mountMessageElement !== null) {
		clear();
	}

	const { duration = 3000, attach } = opt;
	mountMessageElement = document.createElement('wc-message') as HTMLElement &
		MessageOptions;
	// mountMessageElement.onclick = (e) => {
	// 	console.dir(WcMessage);
	// };
	// 循环赋值到组件
	for (const property in opt) {
		mountMessageElement[property] = opt[property];
	}

	rootDom = attach ? document.querySelector(attach) : document.body;
	rootDom.appendChild(mountMessageElement);
	if (duration !== 0) {
		timer = setTimeout(() => {
			clear();
		}, duration);
	}
	return mountMessageElement;
};

/**
 * 清除提示信息
 */
export const clear = () => {
	clearTimeout(timer);
	timer = null;
	// 移除dom
	rootDom.removeChild(mountMessageElement);
};

const messageOpt: Record<
	MessageOptions['theme'],
	(opt: MessageOptions) => HTMLElement
> = {
	info: (opt: MessageOptions) => mountMessage({ ...opt, theme: 'info' }),
	success: (opt: MessageOptions) => mountMessage({ ...opt, theme: 'success' }),
	warning: (opt: MessageOptions) => mountMessage({ ...opt, theme: 'warning' }),
	error: (opt: MessageOptions) => mountMessage({ ...opt, theme: 'error' }),
	question: (opt: MessageOptions) =>
		mountMessage({ ...opt, theme: 'question' }),
	loading: (opt: MessageOptions) => mountMessage({ ...opt, theme: 'loading' })
};

export default messageOpt;

// export default WcMessage;
