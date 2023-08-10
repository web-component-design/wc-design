import { QuarkElement, customElement, property } from 'quarkc';
import style from './index.less';
@customElement({ tag: 'wd-popup', style })
export default class WdPopup extends QuarkElement {
	@property()
	title: string;
	render() {
		return (
			<div>
				<h1>{this.title}</h1> 弹出层
			</div>
		);
	}
}
