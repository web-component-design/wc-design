import { QuarkElement, customElement, property } from 'quarkc';
import style from './index.less';
@customElement({ tag: 'wd-selectVirtually', style })
export default class WdSelectVirtually extends QuarkElement {
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
