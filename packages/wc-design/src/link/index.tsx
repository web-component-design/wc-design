import { QuarkElement, customElement, property } from 'quarkc';
import style from './index.less';
import { LinkProps } from './type';
import { TIconName } from '@/icon/types';
import { TLabelTarget, TSize, TTheme } from 'shared/src/types';
import {
	commonSizeClassName,
	commonStatusClassName
} from 'shared/src/transform';
import classNames from 'classnames';
import '../icon/index.tsx';
@customElement({ tag: 'wd-link', style })
export default class WdLink extends QuarkElement implements LinkProps {
	@property()
	content?: string | HTMLElement;

	@property({
		type: Boolean
	})
	disabled?: boolean = false;

	@property()
	hover?: 'color' | 'underline' = 'underline';

	@property()
	href?: string;

	@property({
		attribute: 'prefix-icon'
	})
	prefixIcon?: TIconName;

	@property({
		attribute: 'suffix-icon'
	})
	suffixIcon?: TIconName;

	@property()
	size?: TSize = 'medium';

	@property()
	target?: TLabelTarget;

	@property()
	theme?: TTheme = 'default';

	@property({
		type: Boolean
	})
	underline?: boolean = false;

	handleClick = (e: MouseEvent) => {
		if (this.disabled) return;
		this.$emit('click', e);
	};

	render() {
		const { localName, prefixIcon, suffixIcon } = this;

		const linkClass = classNames(
			localName,
			`${localName}--theme-${this.theme}`,
			{
				[commonSizeClassName()[this.size]]: this.size !== 'medium',
				[commonStatusClassName().disabled]: this.disabled,
				[`wd-is-underline`]: this.underline,
				[`${localName}--hover-${this.hover}`]: !this.disabled
			}
		);
		return (
			<a
				class={linkClass}
				href={this.disabled || !this.href ? undefined : this.href}
				target={this.target}
				onClick={this.handleClick}
			>
				{prefixIcon && (
					<wd-icon
						icon-name={prefixIcon}
						icon-class-wrap="wd-link__prefix-icon"
					/>
				)}
				{this.content}
				{suffixIcon && (
					<wd-icon
						icon-name={suffixIcon}
						icon-class-wrap="wd-link__suffix-icon"
					/>
				)}
			</a>
		);
	}
}
