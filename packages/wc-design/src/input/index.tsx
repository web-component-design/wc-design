import { QuarkElement, customElement, property } from 'quarkc';
import style from './index.less';
@customElement({ tag: 'wd-input', style })
export default class WdInput extends QuarkElement {
	@property()
	title: string;
	render() {
		return (
			<div>
				<h1>{this.title}</h1> 输入框
			</div>
		);
	}
}
