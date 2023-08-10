import { QuarkElement, customElement, property } from 'quarkc';
import style from './index.less';
@customElement({ tag: 'wd-button', style })
export default class WcButton extends QuarkElement {
	@property()
	title: string;
	render() {
		return (
			<button
				type="button"
				class="wd-button wd-button--variant-base wd-button--theme-primary"
			>
				<span class="wd-button__text">{this.title}</span>
			</button>
		);
	}
}
