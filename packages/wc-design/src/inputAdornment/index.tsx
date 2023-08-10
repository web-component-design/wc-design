import { QuarkElement, customElement, property } from 'quarkc';
import style from './index.less';
@customElement({ tag: 'wd-inputAdornment', style })
export default class WdInputAdornment extends QuarkElement {
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
