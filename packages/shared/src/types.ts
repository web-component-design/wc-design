export const sizeTypeList = ['small', 'medium', 'large'] as const;

export const sizeTypeObject = {
	small: 'wd-size-s',
	medium: 'wd-size-m',
	large: 'wd-size-l',
	null: ''
} as const;
/**
 * 尺寸大小
 */
export type TSize = (typeof sizeTypeList)[number];

export const themeList = [
	'default',
	'primary',
	'danger',
	'warning',
	'success'
] as const;

export type TTheme = (typeof themeList)[number];

export type TLabelTarget = '_self' | '_blank' | '_parent' | '_top';
