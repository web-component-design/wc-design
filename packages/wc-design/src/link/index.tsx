import { QuarkElement, customElement, property } from 'quarkc';
import style from './index.less';
@customElement({ tag: 'wc-link', style })
export default class WcLink extends QuarkElement {
	@property()
	title: string;
	render() {
		return (
			<a
				target
				class="wd-link wd-link--theme-primary wd-size-l wd-link--hover-underline"
			>
				链接
			</a>
		);
	}
}
