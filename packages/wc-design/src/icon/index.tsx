import { QuarkElement, customElement, property } from 'quarkc';
import style from './index.less';
import { TIconName } from './types';
import { showIconElement } from './constants';
@customElement({ tag: 'wc-icon', style })
export default class WcIcon extends QuarkElement {
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
				onClick={this.handleClick}
				dangerouslySetInnerHTML={{
					__html: showIconElement(this.iconName, this.currentColor)
				}}
			></div>
		);
	}
}
