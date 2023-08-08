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
	color = 'black';
	handleClick = (e: PointerEvent) => {
		console.log(this.size);
		this.$emit('onClick', e);
	};

	shouldComponentUpdate(propName, oldValue, newValue) {
		console.log(propName, oldValue, newValue);

		if (propName === 'xxx') {
			// 阻止更新
			return false;
		}
		return true;
	}

	render() {
		const style = Number.isNaN(Number.parseInt(this.size))
			? ''
			: `font-size: ${this.size}`;

		return (
			<div
				onClick={(e: PointerEvent) => this.handleClick(e)}
				dangerouslySetInnerHTML={{
					__html: showIconElement(this.iconName, this.color)
				}}
				class={classNames('wd-icon', iconSizeTypeObject[this.size])}
				style={style}
			></div>
		);
	}
}
