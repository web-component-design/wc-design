import { QuarkElement, customElement, property } from 'quarkc';
import style from './index.less';
@customElement({ tag: 'wc-selectVirtually', style })
export default class WcSelectVirtually extends QuarkElement {
	@property()
	title: string;
	render() {
		return (
			<div>
				<h1>{this.title}</h1> 选择器-虚拟列表
			</div>
		);
	}
}
