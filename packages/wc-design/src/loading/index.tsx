import { Fragment, QuarkElement, customElement, property, state } from 'quarkc';
import { LoadingProps } from './type';
import '../icon/index.tsx';
import { TSize, sizeTypeList, sizeTypeObject } from 'shared/src/types';
import { humpToLine } from 'shared/src/transform';
import style from './index.less';
import classNames from 'classnames';

@customElement({ tag: 'wd-loading', style })
export default class WdLoading extends QuarkElement implements LoadingProps {
	@property()
	attach?: string;

	@property()
	text?: string | HTMLElement;

	@property({
		attribute: 'icon-name'
	})
	iconName?: string = 'loading';

	@property({
		type: Boolean,
		attribute: 'full-screen'
	})
	fullScreen?: boolean = false;

	@property({ type: Boolean })
	loading?: boolean = false;

	@property({
		type: Boolean,
		attribute: 'show-overlay'
	})
	showOverlay?: boolean = false;

	@property()
	size?: TSize;

	@property()
	zIndex?: number = 3000;

	@property({
		type: Boolean,
		attribute: 'inherit-color'
	})
	inheritColor?: boolean = false;

	@property({
		type: Number
	})
	delay?: number = 0;

	@state()
	isShow = false;

	componentDidMount(): void {
		this.delayRun();
	}

	/**
	 * 延迟执行函数
	 */
	delayRun = () => {
		if (this.delay > 0) {
			setTimeout(() => {
				this.isShow = true;
			}, this.delay);
		} else {
			this.isShow = true;
		}
	};

	/**
	 *
	 * @returns css style
	 */
	styles = () => {
		const { zIndex, size } = this;
		const styles: Record<string, string | number> = {};
		if (zIndex !== null) {
			styles.zIndex = zIndex;
		}
		if (!sizeTypeList.includes(size)) {
			styles['font-size'] = size;
		}
		return styles;
	};

	/**
	 *
	 * @returns 基本class
	 */
	baseClass = () => {
		const { localName, inheritColor } = this;
		return classNames(localName, `${localName}--center`, {
			[`${localName}--inherit-color`]: inheritColor
		});
	};

	/**
	 *
	 * @returns 全屏class
	 */
	fullScreenClasses = () => {
		const { localName } = this;
		return classNames(`${localName}__fullscreen`, `${localName}__overlay`);
	};

	/**
	 *
	 * @returns loading右侧文字
	 */
	loadingTextElement = () => {
		const { localName, text } = this;
		return (
			text && (
				<div
					class={`${localName}__text`}
					dangerouslySetInnerHTML={{ __html: text }}
				></div>
			)
		);
	};

	/**
	 *
	 * @returns loading核心渲染区域
	 */
	loadingElement() {
		const { fullScreen, localName, showOverlay, iconName } = this;
		return this.isShow ? (
			<div
				class={classNames(
					this.baseClass(),
					{
						[`${localName}__overlay`]: showOverlay
					},
					fullScreen && this.fullScreenClasses(),
					sizeTypeObject[this.size],
					{
						[`${localName}--full`]: this.innerHTML
					}
				)}
				style={this.styles()}
			>
				<wd-icon
					iconClassWrap="wd-icon-loading"
					iconName={iconName}
					color="currentColor"
				/>
				{this.loadingTextElement()}
			</div>
		) : null;
	}

	loadingWrapElement = () => {
		return this.innerHTML.length > 0 ? (
			<div class="wd-loading__parent">
				{this.loadingElement()} <slot />
			</div>
		) : (
			this.loadingElement()
		);
	};

	render() {
		console.dir(this.loading);

		return this.loading ? this.loadingWrapElement() : <Fragment />;
	}
}
let mountLoadingElement: HTMLElement | null = null;
const mountLoading = (opt: LoadingProps) => {
	loading.clear();
	mountLoadingElement = document.createElement('wd-loading');
	for (const property in opt) {
		mountLoadingElement.setAttribute(humpToLine(property), opt[property]);
		mountLoadingElement.setAttribute('delay', '0');
	}
	document.body.appendChild(mountLoadingElement);
};

export const loading = {
	service: mountLoading,
	clear: () => {
		if (mountLoadingElement) {
			document.body.removeChild(mountLoadingElement);
			mountLoadingElement = null;
		}
	}
};
