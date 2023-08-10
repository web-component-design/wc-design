import { QuarkElement, customElement, property } from 'quarkc';
import { TSize, sizeTypeObject } from 'shared/src/types';
import classNames from 'classnames';
import style from './index.less';
import { TIconName } from './types';
import { showIconElement } from './constants';
@customElement({ tag: 'wd-icon', style })
export default class WdIcon extends QuarkElement {
	@property({
		attribute: 'icon-name'
	})
	iconName: TIconName;

	@property()
	size: TSize;

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
				class={classNames('wd-icon', sizeTypeObject[size], iconClassWrap)}
				style={style}
			></div>
		);
	}
}
