import { QuarkElement, customElement, property } from 'quarkc';
import style from './index.less';
@customElement({ tag: 'wd-menu', style })
export default class WdMenu extends QuarkElement {
	@property()
	title: string;
	render() {
		return (
			<div>
				<h1>{this.title}</h1> 导航菜单
			</div>
		);
	}
}
