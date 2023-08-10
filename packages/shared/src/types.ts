const small = 'small';
const medium = 'medium';
const large = 'large';

export const sizeTypeList = [small, medium, large] as const;

export const sizeTypeObject = {
	small: 'wd-size-s',
	medium: 'wd-size-m',
	large: 'wd-size-l',
	null: ''
} as const;
/**
 * 图标尺寸
 */
export type TSize = typeof small | typeof medium | typeof large;
