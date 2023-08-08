const small = 'small';
const medium = 'medium';
const large = 'large';

export const iconSizeTypeObject = {
	small: 'wd-size-s',
	medium: 'wd-size-m',
	large: 'wd-size-l',
	null: 'wd-size-m'
};
/**
 * 图标尺寸
 */
export type TIconSize = typeof small | typeof medium | typeof large;
