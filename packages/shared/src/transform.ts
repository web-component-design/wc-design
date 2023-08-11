/**
 * 转换工具函数
 */

/**
 *
 * @param str 小驼峰字符串
 * @returns 小驼峰转下划线
 */
export const humpToLine = (str: string) =>
	str.replace(/([A-Z])/g, '-$1').toLowerCase();

export const commonSizeClassName = () => {
	return {
		small: `wd-size-s`,
		medium: `wd-size-m`,
		large: `wd-size-l`,
		default: '',
		xs: `wd-size-xs`,
		xl: `wd-size-xl`,
		block: `wd-size-full-width`
	};
};

export const commonStatusClassName = () => {
	return {
		loading: `wd-is-loading`,
		loadMore: `wd-is-load-more`,
		disabled: `wd-is-disabled`,
		focused: `wd-is-focused`,
		success: `wd-is-success`,
		error: `wd-is-error`,
		warning: `wd-is-warning`,
		selected: `wd-is-selected`,
		active: `wd-is-active`,
		checked: `wd-is-checked`,
		current: `wd-is-current`,
		hidden: `wd-is-hidden`,
		visible: `wd-is-visible`,
		expanded: `wd-is-expanded`,
		indeterminate: `wd-is-indeterminate`
	};
};
