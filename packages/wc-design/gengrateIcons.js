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

let template = `const iconObj = {`;
let templateType = 'export type TIconName =';
comps.forEach(({ name, filename }) => {
	const sourceFile = readFileSync(`${iconPath}/${filename}`)
		.toString()
		.replace('width="16"', 'width="1em"')
		.replace('height="16"', 'height="1em"')
		.replace(/fill="black"/g, 'fill="${currentColor}"');
	const coreTemp = 'return `' + sourceFile + '`';
	template += `
  ${name.includes('-') ? `"${name}"` : name}(currentColor: string) {
    ${coreTemp};
  },`;
	templateType += ` 
  | "${name}"`;
});
template += `
};
export default iconObj;
`;
writeFileSync(resolve(iconPath, '..', 'constants.ts'), template);
writeFileSync(resolve(iconPath, '..', 'types.d.ts'), templateType + ';');
console.log('icons 生成完成 ✅');
