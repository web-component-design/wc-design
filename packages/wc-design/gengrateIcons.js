/* eslint-disable @typescript-eslint/no-var-requires */
const { readdirSync, readFileSync, writeFile, writeFileSync } = require('fs');
const { resolve } = require('path');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const iconPath = resolve(__dirname, './src/icon/svg');
const comps = readdirSync(iconPath, { withFileTypes: true }).map(
	({ name }) => ({
		name: name.substring(0, name.lastIndexOf('.')),
		filename: name
	})
);

let template = `import { TIconName } from './types';
export const iconTemplate = {`;
let templateType = 'export type TIconName =';
let iconArray = [];
comps.forEach(({ name, filename }) => {
	const sourceFile = readFileSync(`${iconPath}/${filename}`)
		.toString()
		.replace('width="16"', 'width="1em"')
		.replace('height="16"', 'height="1em"')
		.replace(/fill="black"/g, 'fill="${currentColor}"');
	const coreTemp = 'return `' + sourceFile + '`';
	template += `
  ${name.includes('-') ? `'${name}'` : name}(currentColor: string) {
    ${coreTemp};
  },`;
	templateType += ` 
  | "${name}"`;
	iconArray.push(name);
});
template += `
};
export default iconTemplate;

export const showIconElement = (iconName: TIconName, currentColor: string) => {
	if (iconTemplate[iconName]) {
		return iconTemplate[iconName](currentColor);
	}
	return null;
};
`;
writeFileSync(resolve(iconPath, '..', 'constants.ts'), template);
writeFileSync(resolve(iconPath, '..', 'types.d.ts'), templateType + ';');
writeFileSync(
	resolve(__dirname, '..', 'example/docs/components/icon/constants.ts'),
	`export const iconArray = ${JSON.stringify(iconArray, 2, null)}`
);

console.log('icons 生成完成 ✅');
