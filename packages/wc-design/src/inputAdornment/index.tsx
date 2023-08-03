import { QuarkElement, customElement, property } from 'quarkc';
import style from './index.less';
@customElement({ tag: 'wc-inputAdornment', style })
export default class WcInputAdornment extends QuarkElement {
	@property()
	title: string;
	render() {
		return (
			<div>
				<h1>{this.title}</h1> 输入框装饰器
			</div>
		);
	}
}
