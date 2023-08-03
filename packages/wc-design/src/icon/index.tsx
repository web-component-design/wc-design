import { QuarkElement, customElement, property, Fragment } from 'quarkc';
import style from './index.less';
import { TIconName } from './types';
import iconObj from './constants';
@customElement({ tag: 'wc-icon', style })
export default class WcIcon extends QuarkElement {
	@property()
	title: string;
	@property()
	iconName: TIconName;
	@property({ type: String })
	currentColor = 'black';
	handleClick(e: PointerEvent) {
		this.$emit('onClick', e);
	}
	render() {
		return (
			<div
				class="wd-icon-wrap"
				dangerouslySetInnerHTML={{
					__html: `${iconObj[this.iconName](this.currentColor)}`
				}}
			></div>
		);
	}
}
