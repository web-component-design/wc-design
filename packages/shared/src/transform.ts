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
