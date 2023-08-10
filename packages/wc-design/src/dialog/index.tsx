import { QuarkElement, customElement, property } from 'quarkc';
import style from './index.less';
@customElement({ tag: 'wd-dialog', style })
export default class WdDialog extends QuarkElement {
	@property()
	title: string;
	render() {
		return (
			<div>
				<h1>{this.title}</h1> 对话框
			</div>
		);
	}
}
