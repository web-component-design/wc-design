import { QuarkElement, customElement, property } from 'quarkc';
import { TIconSize, iconSizeTypeObject } from 'shared/src/tupes';
import classNames from 'classnames';
import style from './index.less';
import { TIconName } from './types';
import { showIconElement } from './constants';
@customElement({ tag: 'wc-icon', style })
export default class WcIcon extends QuarkElement {
	@property({
		attribute: 'icon-name'
	})
	iconName: TIconName;

	@property()
	size: TIconSize;

	@property()
	iconClassWrap = '';

	@property()
	color = 'black';
	handleClick = (e: MouseEvent) => {
		this.$emit('onClick', e);
	};

	render() {
		const { iconClassWrap, size, iconName, color } = this;
		const style = Number.isNaN(Number.parseInt(size))
			? ''
			: `font-size: ${size}`;

		return (
			<div
				onClick={(e: MouseEvent) => this.handleClick(e)}
				dangerouslySetInnerHTML={{
					__html: showIconElement(iconName, color)
				}}
				class={classNames('wd-icon', iconSizeTypeObject[size], iconClassWrap)}
				style={style}
			></div>
		);
	}
}
