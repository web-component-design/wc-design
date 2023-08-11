import { QuarkElement, customElement, property } from 'quarkc';
import { TSize, sizeTypeObject } from 'shared/src/types';
import classNames from 'classnames';
import style from './index.less';
import { IconProps, TIconName } from './types';
import { showIconElement } from './constants';
@customElement({ tag: 'wd-icon', style })
export default class WdIcon extends QuarkElement implements IconProps {
	@property({
		attribute: 'icon-name'
	})
	iconName: TIconName;

	@property()
	size: TSize;

	@property({
		attribute: 'icon-class-wrap'
	})
	iconClassWrap = '';

	@property()
	color = 'currentColor';

	handleClick = (e: MouseEvent) => {
		this.$emit('click', e);
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
