import { QuarkElement, customElement, property } from 'quarkc';
import style from './index.less';
@customElement({ tag: 'wd-transfer', style })
export default class WdTransfer extends QuarkElement {
	@property()
	title: string;
	render() {
		return (
			<div>
				<h1>{this.title}</h1> 穿梭框
			</div>
		);
	}
}
