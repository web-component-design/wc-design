import { TIconName } from './types';
export const iconTemplate = {
	'add-circle'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 8.5H4.5V7.5H7.5V4.5H8.5V7.5H11.5V8.5H8.5V11.5H7.5V8.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'add-rectangle'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 11V8.5H5V7.5H7.5V5H8.5V7.5H11V8.5H8.5V11H7.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M3 14C2.44772 14 2 13.5523 2 13V3C2 2.44771 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14ZM3 13L13 13L13 3L3 3L3 13Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	add(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.34998 8.64998V12.5H8.64998V8.64998H12.5V7.34998H8.64998V3.5H7.34998V7.34998H3.5V8.64998H7.34998Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	app(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.25 1.75C9.59315 1.75 8.25 3.09315 8.25 4.75C8.25 6.40685 9.59315 7.75 11.25 7.75C12.9069 7.75 14.25 6.40685 14.25 4.75C14.25 3.09315 12.9069 1.75 11.25 1.75ZM9.25 4.75C9.25 3.64543 10.1454 2.75 11.25 2.75C12.3546 2.75 13.25 3.64543 13.25 4.75C13.25 5.85457 12.3546 6.75 11.25 6.75C10.1454 6.75 9.25 5.85457 9.25 4.75Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M2 3C2 2.44772 2.44772 2 3 2H6.5C7.05228 2 7.5 2.44772 7.5 3V6.5C7.5 7.05228 7.05228 7.5 6.5 7.5H3C2.44772 7.5 2 7.05228 2 6.5V3ZM3 3V6.5H6.5V3H3Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M2 9.5C2 8.94772 2.44772 8.5 3 8.5H6.5C7.05228 8.5 7.5 8.94772 7.5 9.5V13C7.5 13.5523 7.05228 14 6.5 14H3C2.44772 14 2 13.5523 2 13V9.5ZM3 9.5V13H6.5V9.5H3Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M8.5 9.5C8.5 8.94772 8.94772 8.5 9.5 8.5H13C13.5523 8.5 14 8.94772 14 9.5V13C14 13.5523 13.5523 14 13 14H9.5C8.94772 14 8.5 13.5523 8.5 13V9.5ZM9.5 13H13V9.5H9.5V13Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'arrow-down-rectangle'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7458 7.54711L8.5 9.79289L8.5 4.5L7.5 4.5L7.5 9.79289L5.25422 7.54711L4.54711 8.25422L8 11.7071L11.4529 8.25422L10.7458 7.54711Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M3 14C2.44772 14 2 13.5523 2 13V3C2 2.44771 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14ZM3 13L13 13L13 3L3 3L3 13Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'arrow-down'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.50009 2.00014L8.49992 12.0858L12.1462 8.4395L12.8533 9.14661L8.21203 13.7879C8.09488 13.9051 7.90493 13.9051 7.78777 13.7879L3.14648 9.14661L3.85359 8.4395L7.49992 12.0858L7.50009 2.00012L8.50009 2.00014Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'arrow-left'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.91423 8.49963L7.56053 12.1459L6.85342 12.853L2.21213 8.21174C2.09497 8.09458 2.09497 7.90463 2.21213 7.78748L6.85342 3.14619L7.56053 3.8533L3.91419 7.49963L13.9999 7.4998L13.9999 8.4998L3.91423 8.49963Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'arrow-right'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0857 7.50013L8.43938 3.85384L9.14649 3.14673L13.7878 7.78802C13.9049 7.90517 13.9049 8.09512 13.7878 8.21228L9.14649 12.8536L8.43938 12.1465L12.0857 8.50013L2 8.49996L2.00002 7.49996L12.0857 7.50013Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'arrow-triangle-down-filled'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 8.00008H13L8 14.6667L3 8.00008H6V1.33342H10V8.00008Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'arrow-triangle-down'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 8.00008H3L8 14.6667L13 8.00008H10V1.33342H6V8.00008ZM5.66667 9.33342H7.33333V2.66675H8.66667V9.33342H10.3333L8 12.4445L5.66667 9.33342Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'arrow-triangle-up-filled'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 8.00004H13L8 1.33337L3 8.00004H6V14.6667H10V8.00004Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'arrow-triangle-up'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 8.00004V14.6667H10V8.00004H13L8 1.33337L3 8.00004H6ZM5.66667 6.66671L8 3.5556L10.3333 6.66671H8.66667V13.3334H7.33333V6.66671H5.66667Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'arrow-up'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.49988 3.91436L3.85359 7.56065L3.14648 6.85354L7.78777 2.21226C7.90493 2.0951 8.09488 2.0951 8.21204 2.21226L12.8533 6.85354L12.1462 7.56065L8.49988 3.91432L8.49971 14L7.49971 14L7.49988 3.91436Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	attach(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1269 3.85578C11.3379 3.07643 10.0678 3.08032 9.28361 3.86448L2.07405 11.074L1.36694 10.3669L8.57651 3.15737C9.74951 1.98437 11.6495 1.97856 12.8297 3.14436C14.0201 4.32029 14.0259 6.24042 12.8427 7.42361L7.00276 13.2636C6.26721 13.9991 5.07466 13.9991 4.33912 13.2636C3.60357 12.5281 3.60357 11.3355 4.33912 10.6L10.0131 4.92602L10.7202 5.63313L5.04622 11.3071C4.7012 11.6521 4.7012 12.2115 5.04622 12.5565C5.39124 12.9015 5.95063 12.9015 6.29565 12.5565L12.1356 6.7165C12.9266 5.92553 12.9227 4.6419 12.1269 3.85578Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'backtop-rectangle'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.49755 8.19542L5.9441 9.72019L5.2282 9.02199L8.00185 6.29956L10.8007 9.02923L10.087 9.72972L8.50841 8.19011L8.50847 11.9988L7.49761 11.9989L7.49755 8.19542Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M4.49903 5.4989H11.499V4.4989H4.49903V5.4989Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M2.99903 1.9989C2.44674 1.9989 1.99903 2.44662 1.99903 2.9989L1.99902 12.9989C1.99902 13.5512 2.44674 13.9989 2.99902 13.9989L12.999 13.9989C13.5513 13.9989 13.999 13.5512 13.999 12.9989L13.999 2.9989C13.999 2.44662 13.5513 1.9989 12.999 1.9989L2.99903 1.9989ZM12.999 2.9989L12.999 12.9989L2.99902 12.9989L2.99903 2.9989L12.999 2.9989Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	backtop(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99902 2.9989H13.999V1.9989H1.99902V2.9989Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M3.37689 10.2293L7.48663 6.19544L7.48666 14.8438L8.49751 14.8437L8.49748 6.1901L12.6779 10.2672L13.3915 9.56668L8.34115 4.64112C8.14651 4.45129 7.83584 4.45178 7.64181 4.64224L2.661 9.53108L3.37689 10.2293Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	backward(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.242 8.39077C0.991274 8.1906 0.991274 7.80944 1.242 7.60927L6.87938 3.1086C7.20684 2.84717 7.69133 3.08033 7.69133 3.49935L7.69133 7.76543C7.72075 7.71 7.76134 7.65903 7.81309 7.6159L13.1795 3.14379C13.5052 2.8724 13.9996 3.10398 13.9996 3.5279L13.9996 12.4721C13.9996 12.896 13.5052 13.1276 13.1795 12.8562L7.81309 8.38412C7.76134 8.34099 7.72075 8.29002 7.69133 8.23459L7.69133 12.5007C7.69133 12.9197 7.20684 13.1529 6.87937 12.8914L1.242 8.39077ZM6.69133 11.4617L6.69133 4.53833L2.35535 8.00002L6.69133 11.4617ZM12.9996 11.4046L12.9996 4.59544L8.9142 8.00001L12.9996 11.4046Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	barcode(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 2V14H2V2H4ZM14 2V14H12V2H14ZM11 2V14H10V2H11ZM9 2V14H7V2H9ZM6 2V14H5V2H6Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	books(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99902 9.27825L3.99902 12.0782V2.9989H11.999V12.0782L7.99902 9.27825ZM7.99902 10.4989L12.2123 13.4482C12.5437 13.6802 12.999 13.4431 12.999 13.0386V2.9989C12.999 2.44662 12.5513 1.9989 11.999 1.9989H3.99902C3.44674 1.9989 2.99902 2.44662 2.99902 2.9989V13.0386C2.99902 13.4431 3.45437 13.6802 3.78576 13.4482L7.99902 10.4989Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'browse-off'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7732 11.9803L12.1465 13.3535L12.8535 12.6464L3.14969 2.94257L2.44266 3.64972L3.65332 4.86032C2.60522 5.58542 1.72754 6.57559 1.11694 7.76987L1 7.99985L1.11694 8.22983C2.46143 10.8698 5.10156 12.4998 8.00488 12.4998C8.96875 12.4998 9.9043 12.319 10.7732 11.9803ZM9.99121 11.1982C9.35718 11.3957 8.68921 11.4998 8.00488 11.4998C5.5498 11.4998 3.3186 10.1698 2.1106 7.99985C2.66992 6.99502 3.44873 6.17038 4.36743 5.57443L5.45093 6.65799C5.2395 7.05868 5.11987 7.51529 5.11987 7.99985C5.11987 9.59036 6.40918 10.8797 7.99976 10.8797C8.48438 10.8797 8.94092 10.76 9.34155 10.5487L9.99121 11.1982ZM6.21143 7.41855L8.58105 9.78811C8.39795 9.84756 8.20264 9.87973 7.99976 9.87973C6.96143 9.87973 6.11987 9.03805 6.11987 7.99985C6.11987 7.79696 6.15186 7.60159 6.21143 7.41855Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M14.8831 8.22983L15 7.99985L14.8831 7.76987C13.5386 5.13986 10.8984 3.49985 8.00488 3.49985C7.14868 3.49985 6.31519 3.64248 5.53125 3.91116L6.3313 4.71133C6.87012 4.57242 7.4314 4.49985 8.00488 4.49985C10.4502 4.49985 12.6814 5.82986 13.8992 7.99985C13.3894 8.91531 12.696 9.6813 11.8809 10.261L12.5894 10.9693C13.53 10.2635 14.3201 9.33523 14.8831 8.22983Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M10.8796 7.99985C10.8796 8.37375 10.8083 8.73099 10.6787 9.05874L9.86401 8.24399C9.87427 8.16409 9.87964 8.08255 9.87964 7.99985C9.87964 6.96164 9.03784 6.12002 7.99976 6.12002C7.91699 6.12002 7.83545 6.12533 7.75562 6.13571L6.94092 5.32089C7.26855 5.19125 7.62598 5.12002 7.99976 5.12002C9.59033 5.12002 10.8796 6.40939 10.8796 7.99985Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	browse(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8796 7.99988C10.8796 9.59039 9.59033 10.8798 7.99976 10.8798C6.40918 10.8798 5.11987 9.59039 5.11987 7.99988C5.11987 6.40942 6.40918 5.12006 7.99976 5.12006C9.59033 5.12006 10.8796 6.40942 10.8796 7.99988ZM9.87964 7.99988C9.87964 6.96167 9.03784 6.12006 7.99976 6.12006C6.96143 6.12006 6.11987 6.96167 6.11987 7.99988C6.11987 9.03809 6.96143 9.87976 7.99976 9.87976C9.03784 9.87976 9.87964 9.03809 9.87964 7.99988Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M1.11694 8.22986C2.46143 10.8699 5.10156 12.4999 8.00488 12.4999C10.8984 12.4999 13.5386 10.8699 14.8831 8.22986L15 7.99988L14.8831 7.7699C13.5386 5.13989 10.8984 3.49988 8.00488 3.49988C5.10156 3.49988 2.46143 5.13989 1.11694 7.7699L1 7.99988L1.11694 8.22986ZM8.00488 11.4999C5.5498 11.4999 3.3186 10.1699 2.1106 7.99988C3.3186 5.8299 5.5498 4.49988 8.00488 4.49988C10.4502 4.49988 12.6814 5.8299 13.8992 7.99988C12.6909 10.1699 10.4502 11.4999 8.00488 11.4999Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	bulletpoint(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9999 3.00002L4.99988 3L4.99988 4L13.9999 4.00002V3.00002Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M3.49988 3L2.00049 3L2.00049 4L3.49988 4V3Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M4.99988 7.50006L13.9999 7.50009V8.50009L4.99988 8.50006L4.99988 7.50006Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M2.00049 7.50006H3.49988V8.50006H2.00049L2.00049 7.50006Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M4.99988 12L13.9999 12V13L4.99988 13L4.99988 12Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M2.00049 12H3.49988V13H2.00049L2.00049 12Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	calendar(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3H6L6 1.5H5L5 3H3C2.44772 3 2 3.44771 2 4V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V4C14 3.44772 13.5523 3 13 3H11V1.5H10L10 3ZM5 5L6 5L6 4H10L10 5L11 5V4H13V6H3V4H5L5 5ZM3 7H13V13H3L3 7Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	call(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9996 11.0571C14.0094 11.656 13.8406 12.3013 13.4825 12.8172L13.3562 12.9841C13.1203 13.3295 12.7802 13.5823 12.3763 13.7333C12.0957 13.8382 11.92 13.8686 11.467 13.9206C9.51866 14.1028 7.38954 13.1934 5.28719 11.3231C3.8828 10.0711 2.83116 8.50511 2.32479 6.90415C2.11109 6.22714 1.99984 5.57675 1.99984 4.9881C1.99984 4.28226 2.15924 3.67085 2.47982 3.21159C2.78397 2.79386 3.36194 2.44687 4.23086 2.1189C4.65696 1.95807 5.13791 2.10548 5.40072 2.47746L7.06606 4.83489C7.34085 5.22387 7.30316 5.75267 6.97604 6.09879L6.7593 6.32024L6.49703 6.57443C6.43153 6.62982 6.33187 6.76339 6.33187 6.76339C6.30907 7.07011 6.63615 7.70117 7.58846 8.67568L7.87185 8.9415C8.75003 9.75141 8.98642 9.81638 9.25619 9.62851L9.34609 9.55508C9.44154 9.48247 9.69138 9.30859 10.2242 8.94226C10.5298 8.73213 10.9267 8.70843 11.2551 8.88068L11.4976 9.00892C13.1606 9.8967 13.9203 10.431 13.9937 10.9791L13.9996 11.0571ZM12.9997 11.0731C13.001 11.1553 12.8854 11.0287 12.6447 10.8549C12.2936 10.6014 11.7532 10.279 11.0283 9.89197L10.7907 9.7663L10.0027 10.3101C9.98437 10.322 9.97594 10.3268 9.97927 10.323C9.11992 10.9979 8.37978 10.8086 6.88619 9.38735C5.74004 8.21495 5.28626 7.33947 5.33425 6.69456C5.35666 6.34167 5.59986 6.0185 5.8359 5.82509C5.9363 5.72853 6.03513 5.63144 6.12417 5.54118L6.24929 5.41186L4.58401 3.05447C3.88251 3.31925 3.4487 3.57965 3.29391 3.79216C3.10764 4.05918 2.99984 4.47289 2.99984 4.9881C2.99984 5.46852 3.09399 6.01883 3.27834 6.60286C3.72853 8.02618 4.67843 9.44076 5.95223 10.5764C7.86462 12.2776 9.73829 13.0779 11.3635 12.926L11.621 12.8939C11.799 12.8686 11.8995 12.8439 12.0261 12.7966C12.2452 12.7147 12.4181 12.5862 12.5589 12.382C12.8261 12.0557 12.9688 11.6382 12.9954 11.2418L12.9997 11.0731Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'caret-down-small'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 6H5L8 10.5L11 6Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'caret-down'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99958 10.3334L3.99958 5.00002L11.9996 5.00002L7.99958 10.3334ZM7.59958 11.4667C7.79958 11.7334 8.19958 11.7334 8.39958 11.4667L13.3996 4.80002C13.6468 4.4704 13.4116 4.00002 12.9996 4.00002L2.99958 4.00002C2.58756 4.00002 2.35237 4.4704 2.59958 4.80002L7.59958 11.4667Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'caret-left-small'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 5L10.5 11L6 8L10.5 5Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'caret-left'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.66683 7.99976L10.0002 3.99976L10.0002 11.9998L4.66683 7.99976ZM3.5335 7.59976C3.26683 7.79976 3.26683 8.19976 3.5335 8.39976L10.2002 13.3998C10.5298 13.647 11.0002 13.4118 11.0002 12.9998L11.0002 2.99976C11.0002 2.58774 10.5298 2.35255 10.2002 2.59976L3.5335 7.59976Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'caret-right-small'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 5L6 11L10.5 8L6 5Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'caret-right'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3337 7.99999L6.00032 12L6.00033 3.99999L11.3337 7.99999ZM12.467 8.39999C12.7337 8.19999 12.7337 7.79999 12.467 7.59999L5.80033 2.59999C5.47071 2.35278 5.00033 2.58797 5.00033 2.99999L5.00032 13C5.00032 13.412 5.4707 13.6472 5.80032 13.4L12.467 8.39999Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'caret-up-small'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 10.5H5L8 6L11 10.5Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'caret-up'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00042 5.66665L12.0004 11L4.00042 11L8.00042 5.66665ZM8.40042 4.53331C8.20042 4.26665 7.80042 4.26665 7.60042 4.53331L2.60042 11.2C2.35321 11.5296 2.5884 12 3.00042 12L13.0004 12C13.4124 12 13.6476 11.5296 13.4004 11.2L8.40042 4.53331Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	cart(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 3H2.57644L3.96502 11.3315C4.02931 11.7173 4.36307 12 4.75414 12H14V11H4.92356L4.59023 9H13.2239C13.591 9 13.911 8.75016 14 8.39403L14.85 4.99403C14.9762 4.48911 14.5943 4 14.0739 4H3.7569L3.53498 2.66848C3.47069 2.28273 3.13693 2 2.74586 2H1V3ZM13.0677 8H4.42356L3.92356 5H13.8177L13.0677 8Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M4.75 14.5C5.16421 14.5 5.5 14.1642 5.5 13.75C5.5 13.3358 5.16421 13 4.75 13C4.33579 13 4 13.3358 4 13.75C4 14.1642 4.33579 14.5 4.75 14.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M12.813 14.5C13.2272 14.5 13.563 14.1642 13.563 13.75C13.563 13.3358 13.2272 13 12.813 13C12.3987 13 12.063 13.3358 12.063 13.75C12.063 14.1642 12.3987 14.5 12.813 14.5Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'chart-bar'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 2L7.5 14H8.5L8.5 2H7.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M2.5 6V14H3.5L3.5 6H2.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M12.5 14L12.5 10H13.5L13.5 14H12.5Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'chart-bubble'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5.5C9 7.15686 7.65674 8.5 6 8.5C4.34326 8.5 3 7.15686 3 5.5C3 3.84314 4.34326 2.5 6 2.5C7.65674 2.5 9 3.84314 9 5.5ZM8 5.5C8 4.39543 7.10449 3.5 6 3.5C4.89551 3.5 4 4.39543 4 5.5C4 6.60457 4.89551 7.5 6 7.5C7.10449 7.5 8 6.60457 8 5.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M14 10C14 11.3807 12.8806 12.5 11.5 12.5C10.1194 12.5 9 11.3807 9 10C9 8.61929 10.1194 7.5 11.5 7.5C12.8806 7.5 14 8.61929 14 10ZM13 10C13 9.17157 12.3284 8.5 11.5 8.5C10.6716 8.5 10 9.17157 10 10C10 10.8284 10.6716 11.5 11.5 11.5C12.3284 11.5 13 10.8284 13 10Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M5 12C5 12.8284 4.32837 13.5 3.5 13.5C2.67163 13.5 2 12.8284 2 12C2 11.1716 2.67163 10.5 3.5 10.5C4.32837 10.5 5 11.1716 5 12Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M13 4.5C13.5522 4.5 14 4.05229 14 3.5C14 2.94771 13.5522 2.5 13 2.5C12.4478 2.5 12 2.94771 12 3.5C12 4.05229 12.4478 4.5 13 4.5Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'chart-pie'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM13.9795 8.5H7.5V2.02054C4.42023 2.27461 2 4.85467 2 8C2 11.3137 4.68629 14 8 14C11.1453 14 13.7254 11.5798 13.9795 8.5ZM13.9795 7.5C13.739 4.5851 11.4149 2.26101 8.5 2.02054V7.5H13.9795Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	chart(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.49999 12L4.5 7.49994L5.5 7.49994L5.49999 12H4.49999Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M7.5 4.5L7.5 12H8.5L8.5 4.5H7.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M10.5 12L10.5 9L11.5 9L11.5 12H10.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M2 3C2 2.44771 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14C2.44771 14 2 13.5523 2 13V3ZM3 3L3 13L13 13L13 3L3 3Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	chat(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.63795 10.5H13V4H3V11.865L4.63795 10.5ZM2.49205 13.59C2.29666 13.7528 2 13.6138 2 13.3595V4C2 3.44771 2.44772 3 3 3H13C13.5523 3 14 3.44772 14 4V10.5C14 11.0523 13.5523 11.5 13 11.5H5L2.49205 13.59Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'check-circle-filled'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM4.5 8.2065L5.2065 7.5L7 9.293L10.7925 5.5L11.5 6.2075L7 10.707L4.5 8.2065Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'check-circle'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 8.2065L7 10.707L11.5 6.2075L10.7925 5.5L7 9.293L5.2065 7.5L4.5 8.2065Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M4.11101 2.17971C5.26216 1.41054 6.61553 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.38447 14.5895 10.7378 13.8203 11.889C13.0511 13.0401 11.9579 13.9373 10.6788 14.4672C9.3997 14.997 7.99224 15.1356 6.63437 14.8655C5.2765 14.5954 4.02922 13.9287 3.05026 12.9497C2.07129 11.9708 1.4046 10.7235 1.13451 9.36563C0.86441 8.00776 1.00303 6.6003 1.53285 5.32122C2.06266 4.04213 2.95987 2.94888 4.11101 2.17971ZM4.66658 12.9888C5.65328 13.6481 6.81332 14 8 14C9.5913 14 11.1174 13.3679 12.2426 12.2426C13.3679 11.1174 14 9.5913 14 8C14 6.81331 13.6481 5.65327 12.9888 4.66658C12.3295 3.67988 11.3925 2.91085 10.2961 2.45672C9.19975 2.0026 7.99335 1.88378 6.82946 2.11529C5.66558 2.3468 4.59648 2.91824 3.75736 3.75736C2.91825 4.59647 2.3468 5.66557 2.11529 6.82946C1.88378 7.99334 2.0026 9.19974 2.45673 10.2961C2.91085 11.3925 3.67989 12.3295 4.66658 12.9888Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'check-rectangle-filled'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 13C2 13.5523 2.44772 14 3 14L13 14C13.5523 14 14 13.5523 14 13L14 3C14 2.44772 13.5523 2 13 2H3C2.44772 2 2 2.44771 2 3V13ZM6.99997 9.35708L10.7748 5.58229L11.4819 6.28941L6.99999 10.7712L4.51343 8.28491L5.2205 7.57777L6.99997 9.35708Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'check-rectangle'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7748 5.58229L6.99995 9.35708L5.22048 7.57777L4.51341 8.28491L6.99997 10.7712L11.4819 6.28941L10.7748 5.58229Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M3 14C2.44772 14 2 13.5523 2 13V3C2 2.44771 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14ZM3 13L13 13L13 3L3 3L3 13Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	check(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.43348 9.92151L12.6561 3.69885L13.5754 4.61809L6.43348 11.76L1.97412 7.30063L2.89336 6.38139L6.43348 9.92151Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'chevron-down-circle'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7929 6.20707L7.99996 9L5.20704 6.20707L4.49993 6.91418L7.99996 10.4142L11.5 6.91418L10.7929 6.20707Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M1 8C1 4.13401 4.13401 0.999999 8 0.999999C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8ZM2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'chevron-down-rectangle'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7929 6.20711L7.99999 9L5.20711 6.20711L4.5 6.91421L7.99999 10.4142L11.5 6.91421L10.7929 6.20711Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M14 13C14 13.5523 13.5523 14 13 14L3 14C2.44771 14 2 13.5523 2 13L2 3C2 2.44771 2.44772 2 3 2L13 2C13.5523 2 14 2.44772 14 3L14 13ZM13 13L13 3L3 3L3 13L13 13Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'chevron-down'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.54028 6.45964L4.45952 5.54041L7.9999 9.08079L11.5403 5.54041L12.4595 6.45964L7.9999 10.9193L3.54028 6.45964Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'chevron-left-circle'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.79293 10.7929L7 7.99996L9.79293 5.20703L9.08582 4.49993L5.58579 7.99996L9.08582 11.5L9.79293 10.7929Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'chevron-left-double'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0404 4.45952L12.1212 3.54028L7.66155 7.9999L12.1212 12.4595L13.0404 11.5403L9.50003 7.9999L13.0404 4.45952Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M8.04048 4.45952L7.12124 3.54028L2.66162 7.9999L7.12124 12.4595L8.04048 11.5403L4.5001 7.9999L8.04048 4.45952Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'chevron-left-rectangle'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.79289 10.7929L7 7.99999L9.79289 5.20711L9.08579 4.5L5.58579 7.99999L9.08579 11.5L9.79289 10.7929Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M3 14C2.44772 14 2 13.5523 2 13L2 3C2 2.44771 2.44772 2 3 2L13 2C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3ZM3 13H13V3L3 3L3 13Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'chevron-left'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5397 3.53998L10.4589 4.45922L6.91856 7.9996L10.4589 11.54L9.5397 12.4592L5.08008 7.9996L9.5397 3.53998Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'chevron-right-circle'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.20707 5.20711L9 8.00004L6.20707 10.793L6.91418 11.5001L10.4142 8.00004L6.91418 4.5L6.20707 5.20711Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'chevron-right-double'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.95972 11.5405L3.87896 12.4597L8.33858 8.0001L3.87896 3.54048L2.95972 4.45972L6.5001 8.0001L2.95972 11.5405ZM7.95965 11.5405L8.87889 12.4597L13.3385 8.0001L8.87889 3.54048L7.95965 4.45972L11.5 8.0001L7.95965 11.5405Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'chevron-right-rectangle'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.20711 5.20711L9 8.00001L6.20711 10.7929L6.91421 11.5L10.4142 8.00001L6.91421 4.5L6.20711 5.20711Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M13 2C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3C2.44771 14 2 13.5523 2 13L2 3C2 2.44772 2.44772 2 3 2L13 2ZM13 3L3 3L3 13H13V3Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'chevron-right'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.4603 12.4592L5.54106 11.54L9.08144 7.99961L5.54106 4.45923L6.4603 3.53999L10.9199 7.99961L6.4603 12.4592Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'chevron-up-circle'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.20711 9.79293L8.00004 7L10.793 9.79293L11.5001 9.08582L8.00004 5.58579L4.5 9.08582L5.20711 9.79293Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'chevron-up-rectangle'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.20711 9.79289L8.00001 7L10.7929 9.79289L11.5 9.08579L8.00001 5.58579L4.5 9.08579L5.20711 9.79289Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M2 3C2 2.44772 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V3ZM3 3L3 13H13V3H3Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'chevron-up'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4595 9.54074L11.5403 10.46L7.9999 6.91959L4.45952 10.46L3.54028 9.54073L7.9999 5.08112L12.4595 9.54074Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	circle(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.134 15 0.999998 11.866 1 8C1 4.134 4.13401 0.999998 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" fill="${currentColor}" fill-opacity="0.9"/>
</g>
</svg>
`;
	},
	clear(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 4H9V2H7V4ZM10 2V4H13C13.5523 4 14 4.44772 14 5V7C14 7.50427 13.6267 7.92137 13.1414 7.99007L13.8369 12.8586C13.923 13.461 13.4555 14 12.847 14H3.15301C2.54446 14 2.077 13.461 2.16306 12.8586L2.85856 7.99007C2.37326 7.92137 2 7.50427 2 7V5C2 4.44772 2.44772 4 3 4H6V2C6 1.44772 6.44772 1 7 1H9C9.55228 1 10 1.44772 10 2ZM12.1327 7H13V5H9H7H3L3 7H3.8673H12.1327ZM12.1327 8H3.8673L3.15301 13H5V11H6V13H7.5V11H8.5V13H10V11H11V13H12.847L12.1327 8Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'close-circle-filled'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 0.999998 1 4.134 1 8C0.999998 11.866 4.134 15 8 15C11.866 15 15 11.866 15 8ZM5.67091 4.94754L8.00001 7.29075L10.3291 4.94754L11.0384 5.65251L8.70499 8L11.0383 10.3475L10.3291 11.0525L8.00001 8.70925L5.67092 11.0525L4.96168 10.3475L7.29503 8L4.96167 5.65251L5.67091 4.94754Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'close-circle'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.98094 10.3119L7.29289 7.99995L4.98104 5.6881L5.68814 4.98099L8 7.29284L10.3119 4.98099L11.019 5.6881L8.7071 7.99995L11.0191 10.3119L10.3119 11.019L8 8.70706L5.68805 11.019L4.98094 10.3119Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.134 15 0.999998 11.866 1 8C1 4.134 4.13401 0.999998 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'close-rectangle'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.818 10.4748L7.29291 7.99994L4.81812 5.52515L5.52522 4.81804L8.00001 7.29283L10.4749 4.81799L11.182 5.5251L8.70712 7.99994L11.1821 10.4749L10.475 11.182L8.00001 8.70705L5.52511 11.182L4.818 10.4748Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M3 14C2.44772 14 2 13.5523 2 13V3C2 2.44771 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14ZM3 13L13 13L13 3L3 3L3 13Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	close(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00005 8.91923L11.076 11.9951L11.9952 11.0759L8.91929 7.99999L11.9952 4.92409L11.076 4.00485L8.00005 7.08075L4.92412 4.00482L4.00488 4.92406L7.08081 7.99999L4.00488 11.0759L4.92412 11.9952L8.00005 8.91923Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'cloud-download'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.7309 6.26257L4.0185 6.34565C2.89613 6.47654 2 7.45287 2 8.66667C2 9.8761 2.89038 10.848 4 10.9838V11.989C2.32292 11.8501 1 10.4132 1 8.66667C1 6.95238 2.26933 5.54286 3.90267 5.35238C4.31333 3.42857 5.99333 2 8 2C10.0067 2 11.6867 3.42857 12.0973 5.35238C13.7307 5.54286 15 6.95238 15 8.66667C15 10.4132 13.6771 11.8501 12 11.989V10.9838C13.1096 10.848 14 9.8761 14 8.66667C14 7.45287 13.1039 6.47654 11.9815 6.34565L11.2691 6.26257L11.1194 5.56114C10.8032 4.08009 9.51599 3 8 3C6.48401 3 5.19679 4.08009 4.88063 5.56114L4.7309 6.26257Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M9.79665 11.2999L8.50332 12.589L8.50338 7.99696L7.50172 7.99694L7.50165 12.589L6.20828 11.2999L5.5 12.0058L7.6495 14.1482C7.84463 14.3427 8.16031 14.3427 8.35543 14.1482L10.5049 12.0058L9.79665 11.2999Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'cloud-upload'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.7309 6.26257L4.0185 6.34565C2.89613 6.47654 2 7.45287 2 8.66667C2 9.8761 2.89038 10.848 4 10.9838V11.989C2.32292 11.8501 1 10.4132 1 8.66667C1 6.95238 2.26933 5.54286 3.90267 5.35238C4.31333 3.42857 5.99333 2 8 2C10.0067 2 11.6867 3.42857 12.0973 5.35238C13.7307 5.54286 15 6.95238 15 8.66667C15 10.4132 13.6771 11.8501 12 11.989V10.9838C13.1096 10.848 14 9.8761 14 8.66667C14 7.45287 13.1039 6.47654 11.9815 6.34565L11.2691 6.26257L11.1194 5.56114C10.8032 4.08009 9.51599 3 8 3C6.48401 3 5.19679 4.08009 4.88063 5.56114L4.7309 6.26257Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M6.14062 10.7202L7.49824 9.38764L7.53164 14.5069L8.54247 14.5L8.5092 9.39884L9.88196 10.7377L10.5956 10.0372L8.34437 7.84156C8.14972 7.65173 7.83906 7.65223 7.64502 7.84268L5.42472 10.022L6.14062 10.7202Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	cloud(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.7309 7.26147L4.88063 6.56004C5.19679 5.07899 6.48401 3.9989 8 3.9989C9.51599 3.9989 10.8032 5.07899 11.1194 6.56004L11.2691 7.26147L11.9815 7.34455C13.1039 7.47544 14 8.45177 14 9.66557C14 10.9705 12.9634 11.9989 11.7333 11.9989H4.26667C3.03657 11.9989 2 10.9705 2 9.66557C2 8.45177 2.89613 7.47544 4.0185 7.34455L4.7309 7.26147ZM12.0973 6.35128C11.6867 4.42747 10.0067 2.9989 8 2.9989C5.99333 2.9989 4.31333 4.42747 3.90267 6.35128C2.26933 6.54176 1 7.95128 1 9.66557C1 11.5037 2.46533 12.9989 4.26667 12.9989H11.7333C13.5347 12.9989 15 11.5037 15 9.66557C15 7.95128 13.7307 6.54176 12.0973 6.35128Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	code(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.94034 2.55798L6.09333 13.1832L7.05925 13.442L9.90626 2.8168L8.94034 2.55798Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M2.14982 8.00001L5.57495 11.4251L4.86784 12.1323L1.15987 8.42428C0.925551 8.18996 0.925553 7.81006 1.15987 7.57575L4.86784 3.86777L5.57495 4.57488L2.14982 8.00001Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M13.846 8.00001L10.4054 11.4016L11.1085 12.1127L14.8368 8.42668C15.0744 8.19183 15.0744 7.80819 14.8368 7.57333L11.1085 3.88732L10.4054 4.59845L13.846 8.00001Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'control-platform'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.4953 4.24999L8.46882 0.770621C8.17876 0.603152 7.82139 0.603152 7.53132 0.770621L1.50488 4.24999V11.2087C1.50488 11.5437 1.68357 11.8532 1.97363 12.0206L8.00007 15.5L14.0265 12.0206C14.3166 11.8532 14.4953 11.5437 14.4953 11.2087V4.24999ZM7.99907 7.42199L3.00419 4.53826L8.00007 1.65399L12.9954 4.53845L7.99907 7.42199ZM8.50007 8.28866L13.4951 5.4048V11.172L8.50007 14.0554V8.28866ZM7.50007 8.28866V14.0554L2.50407 11.172V5.40422L7.50007 8.28866Z" fill="${currentColor}"/>
</svg>
`;
	},
	creditcard(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 11H6.5V10H3.5V11Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M15 12V4C15 3.44772 14.5523 3 14 3H2C1.44772 3 1 3.44772 1 4V12C1 12.5523 1.44772 13 2 13H14C14.5523 13 15 12.5523 15 12ZM14 4V5.5H2V4H14ZM2 12V6.5H14V12H2Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	dashboard(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M13.8745 4.90662L9.37556 9.40553L8.66845 8.69843L13.1674 4.19951L13.8745 4.90662Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M8.02203 11.052C7.46974 11.052 7.02203 10.6043 7.02203 10.052C7.02203 9.49972 7.46974 9.052 8.02203 9.052C8.57431 9.052 9.02203 9.49972 9.02203 10.052C9.02203 10.6043 8.57431 11.052 8.02203 11.052ZM8.02203 12.052C9.1266 12.052 10.022 11.1566 10.022 10.052C10.022 8.94743 9.1266 8.052 8.02203 8.052C6.91746 8.052 6.02203 8.94743 6.02203 10.052C6.02203 11.1566 6.91746 12.052 8.02203 12.052Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M8 3.5C4.41015 3.5 1.5 6.41015 1.5 10C1.5 11.3817 1.93054 12.6613 2.66478 13.714L1.8446 14.286C0.997092 13.071 0.5 11.5928 0.5 10C0.5 5.85786 3.85786 2.5 8 2.5C9.2547 2.5 10.4388 2.8085 11.4792 3.35421L11.0147 4.23978C10.1142 3.76743 9.08905 3.5 8 3.5ZM14.5 10C14.5 8.91685 14.2355 7.89696 13.7679 6.99999L14.6547 6.53776C15.1948 7.57405 15.5 8.75212 15.5 10C15.5 11.5928 15.0029 13.071 14.1554 14.286L13.3352 13.714C14.0695 12.6613 14.5 11.3817 14.5 10Z" fill="${currentColor}" fill-opacity="0.9"/>
</g>
</svg>
`;
	},
	delete(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 12V6H7V12H6Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M9 6V12H10V6H9Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M10.5 3H14V4H13V14C13 14.5523 12.5523 15 12 15H4C3.44772 15 3 14.5523 3 14V4H2V3H5.5L5.5 1.8C5.5 1.35817 5.85817 1 6.3 1H9.7C10.1418 1 10.5 1.35817 10.5 1.8V3ZM6.5 3H9.5L9.5 2L6.5 2V3ZM4 4V14H12V4H4Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	desktop(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 11H7.5V13H3V14H13V13H8.5V11H13.5C14.0523 11 14.5 10.5523 14.5 10V3C14.5 2.44772 14.0523 2 13.5 2H2.5C1.94771 2 1.5 2.44772 1.5 3V10C1.5 10.5523 1.94772 11 2.5 11ZM2.5 3L13.5 3V10L2.5 10L2.5 3Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'discount-filled'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.98714 5.32938C7.44495 5.78719 7.44495 6.52946 6.98714 6.98728C6.52932 7.4451 5.78705 7.4451 5.32923 6.98728C4.87141 6.52946 4.87141 5.78719 5.32923 5.32938C5.78705 4.87156 6.52932 4.87156 6.98714 5.32938Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M2 7.72999C1.99999 7.99522 2.10535 8.24958 2.29289 8.43713L8.20507 14.3493C8.5956 14.7398 9.22876 14.7398 9.61929 14.3493L14.3493 9.6193C14.7398 9.22877 14.7399 8.59561 14.3493 8.20508L8.43714 2.29289C8.2496 2.10535 7.99524 2 7.73002 2L2.00017 2.00005L2 7.72999ZM7.69424 4.62227C8.54259 5.47061 8.54259 6.84605 7.69424 7.69439C6.8459 8.54273 5.47047 8.54273 4.62212 7.69439C3.77378 6.84605 3.77378 5.47061 4.62212 4.62227C5.47047 3.77393 6.8459 3.77393 7.69424 4.62227Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	discount(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.83885 5.01035C7.0578 4.2293 5.79147 4.2293 5.01042 5.01035C4.22937 5.7914 4.22937 7.05773 5.01042 7.83877C5.79147 8.61982 7.0578 8.61982 7.83885 7.83877C8.6199 7.05773 8.6199 5.7914 7.83885 5.01035ZM7.13174 5.71745C7.52227 6.10798 7.52227 6.74114 7.13174 7.13167C6.74122 7.52219 6.10805 7.52219 5.71753 7.13167C5.32701 6.74114 5.32701 6.10798 5.71753 5.71745C6.10805 5.32693 6.74122 5.32693 7.13174 5.71745Z" fill="${currentColor}" fill-opacity="0.9"/>
    <path d="M2 7.94985L2.00002 2L7.94975 2.0001C8.21497 2.0001 8.46931 2.10546 8.65685 2.29299L14.7903 8.42646C15.1808 8.81698 15.1808 9.45014 14.7903 9.84067L9.84057 14.7904C9.45004 15.1809 8.81688 15.1809 8.42635 14.7904L2.29289 8.65696C2.10536 8.46942 2 8.21507 2 7.94985ZM7.94974 3.0001L3.00002 3.00002L3 7.94985L9.13346 14.0833L14.0832 9.13356L7.94974 3.0001Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
    `;
	},
	download(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.2636 5.81387L8.5 9.57746L8.49998 0.5L7.49998 0.500002L7.5 9.57746L3.73641 5.81387L3.02931 6.52098L7.64645 11.1381C7.84171 11.3334 8.15829 11.3334 8.35355 11.1381L12.9707 6.52098L12.2636 5.81387Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M2 11V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V11H13V13H3V11H2Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'edit-1'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M14.1321 4.95049L10.8888 1.70711L11.5959 1L14.8393 4.24338L14.1321 4.95049Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M5.97196 13.1108L2.359 13.8334C2.14909 13.8754 1.96401 13.6903 2.00599 13.4804L2.72858 9.86742L10.0262 2.56982L13.2696 5.8132L5.97196 13.1108ZM11.8554 5.8132L10.0262 3.98403L3.64979 10.3604L3.19249 12.6469L5.47895 12.1896L11.8554 5.8132Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M15 11H11V12H15V11Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M15 13H8.5V14H15V13Z" fill="${currentColor}" fill-opacity="0.9"/>
</g>
</svg>
`;
	},
	edit(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8819 1.73695L14.1253 4.98033L14.8324 4.27322L11.589 1.02985L10.8819 1.73695Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M2.35217 13.8632L5.96513 13.1406L13.2627 5.84304L10.0194 2.59966L2.72175 9.89727L1.99916 13.5102C1.95717 13.7201 2.14225 13.9052 2.35217 13.8632ZM10.0194 4.01388L11.8485 5.84304L5.47212 12.2194L3.18566 12.6767L3.64295 10.3903L10.0194 4.01388Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	ellipsis(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 9C2.44775 9 2 8.55228 2 8C2 7.44772 2.44775 7 3 7C3.55225 7 4 7.44772 4 8C4 8.55228 3.55225 9 3 9Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M7 8C7 8.55228 7.44775 9 8 9C8.55225 9 9 8.55228 9 8C9 7.44772 8.55225 7 8 7C7.44775 7 7 7.44772 7 8Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M12 8C12 8.55228 12.4478 9 13 9C13.5522 9 14 8.55228 14 8C14 7.44772 13.5522 7 13 7C12.4478 7 12 7.44772 12 8Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	enter(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0001 4V10H4.20718L5.85363 8.35355L5.14652 7.64645L2.64652 10.1464C2.45126 10.3417 2.45126 10.6583 2.64652 10.8536L5.14652 13.3536L5.85363 12.6464L4.20718 11H13.0001C13.5524 11 14.0001 10.5523 14.0001 10V4H13.0001Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'error-circle-filled'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 0.999998 1 4.134 1 8C0.999998 11.866 4.134 15 8 15C11.866 15 15 11.866 15 8ZM8.5 4.0003V9.49999H7.5V4.0003H8.5ZM7.39429 11H8.59429V12.2H7.39429V11Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'error-circle'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 4.00037V9.5H7.5V4.00037H8.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M8.59424 10.5H7.39429V11.7H8.59424V10.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M15 8C15 4.13403 11.866 1 8 1C4.13403 1 1 4.13403 1 8C1 11.866 4.13403 15 8 15C11.866 15 15 11.866 15 8ZM14 8C14 11.3137 11.3137 14 8 14C4.68628 14 2 11.3137 2 8C2 4.68628 4.68628 2 8 2C11.3137 2 14 4.68628 14 8Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	error(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.49975 2H7.49975V11H8.49975V2ZM8.60137 12.8H7.40137V14H8.60137V12.8Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'file-add'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 1C3.44386 1 3 1.44386 3 2V13C3 13.5561 3.44386 14 4 14H8.53613V13H4V2H8V6H12V8.48438H13V5.70711C13 5.44189 12.8946 5.18754 12.7071 5L12.6246 4.91753L12.6236 4.91644L8.91355 1.20645C8.82878 1.12167 8.72835 1.07544 8.62863 1.05804C8.52186 1.01999 8.40841 1 8.29289 1H4ZM11.2929 5H9V2.70711L11.2929 5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M12 15V13H10V12H12V10H13V12H15V13H13V15H12Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'file-copy'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.99995 1.92191C3.99995 1.33727 4.52001 1 4.9953 1H9.36584C9.63437 1 9.89162 1.108 10.0797 1.29969L13.7139 5.00415C13.8972 5.19093 13.9999 5.44209 14.0001 5.70375L14.0046 12.0777C14.0046 12.6624 13.4846 13 13.0093 13H4.99995C4.52472 13 4.00474 12.6628 4.00461 12.0783L3.99995 1.92191ZM4.99999 2L5.00457 12H13.0046L13.0003 6.01275H9.00004V2H4.99999ZM10 2.64645V5.01275H12.3215L10 2.64645Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M2 5.00001V14.0128C2 14.565 2.44772 15.0128 3 15.0128H11V14.0128L3 14.0128V5.00001H2Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'file-excel'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 1.99988V13.9999H8V14.9999H3.49534C3.02005 14.9999 2.5 14.6626 2.5 14.078V1.92179C2.5 1.33715 3.02005 0.999878 3.49534 0.999878H8.86589C9.13442 0.999878 9.39167 1.10788 9.57972 1.29957L13.2138 5.00388C13.3973 5.19083 13.5 5.44229 13.5 5.70419V7.49988H12.5V6.01263H8.50008V1.99988H3.5ZM9.50008 2.64633V5.01263H11.8215L9.50008 2.64633Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M10.3363 9.79198L10.3363 8.95227L9.3363 8.95228L9.33631 9.79198C9.33631 10.05 9.42442 10.3004 9.58607 10.5015L10.7767 11.9832L9.58607 13.4649C9.42442 13.666 9.33631 13.9164 9.33631 14.1744L9.33631 15.0141L10.3363 15.0141L10.3363 14.1744C10.3363 14.1442 10.3466 14.1148 10.3656 14.0913L11.4181 12.7814L12.4707 14.0913C12.4896 14.1148 12.5 14.1442 12.5 14.1744V15.0141H13.5V14.1744C13.5 13.9164 13.4119 13.666 13.2502 13.4649L12.0596 11.9832L13.2502 10.5015C13.4119 10.3004 13.5 10.05 13.5 9.79198V8.95227H12.5V9.79198C12.5 9.82222 12.4896 9.85155 12.4707 9.87512L11.4181 11.185L10.3656 9.87512C10.3466 9.85155 10.3363 9.82222 10.3363 9.79198Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'file-icon'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 2V14H11.2336V15H3.49534C3.02005 15 2.5 14.6627 2.5 14.0781V1.92191C2.5 1.33727 3.02005 1 3.49534 1H8.86589C9.13442 1 9.39167 1.108 9.57972 1.29969L13.2138 5.004C13.3973 5.19096 13.5 5.44241 13.5 5.70431V7.5H12.5V6.01275H8.50008V2H3.5ZM9.50008 5.01275H11.8215L9.50008 2.64645V5.01275Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M4.48145 9H6.48145V9.8H5.88145V12.2H6.48145V13H4.48145V12.2H5.08145V9.8H4.48145V9Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M8.99999 9H7.79246C7.35479 9 6.99999 9.35817 6.99999 9.8V12.2C6.99999 12.6418 7.35479 13 7.79246 13H8.99999V12.2H7.79246V9.8H8.99999V9Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M13.7972 9.8L13.7972 13H13L13 9H14.7434C15.1837 9 15.5406 9.35817 15.5406 9.8V13H14.7434V9.8H13.7972Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M9.5 9.80928L9.5 12.201C9.5 12.6413 9.85693 12.9982 10.2972 12.9982H11.4931C11.9334 12.9982 12.2903 12.6413 12.2903 12.201V9.80928C12.2903 9.36899 11.9334 9.01205 11.4931 9.01205H10.2972C9.85693 9.01205 9.5 9.36899 9.5 9.80928ZM10.2972 12.201L10.2972 9.80928H11.4931V12.201H10.2972Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'file-image'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.57127 1C3.09598 1 2.57593 1.33727 2.57593 1.92191V14.0781C2.57593 14.6627 3.09598 15 3.57127 15H12.5048C12.9801 15 13.5001 14.6627 13.5001 14.0781V5.70431C13.5001 5.44241 13.3974 5.19096 13.214 5.004L9.57985 1.29969C9.3918 1.108 9.13455 1 8.86601 1H3.57127ZM3.57593 11.3636V2H8.57604V6.0092H12.5001V10.2878L10.5759 8.3636L7.57593 11.3636L5.57593 9.3636L3.57593 11.3636ZM3.57593 12.6364L5.57593 10.6364L6.93953 12L4.93953 14H3.57593V12.6364ZM10.5759 9.6364L12.5001 11.5606V14H6.21232L10.5759 9.6364ZM11.8182 5.0092H9.57604V2.72374L11.8182 5.0092Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'file-paste'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 11.5H5V12.5H11V11.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M2.5 1.92191C2.5 1.33727 3.02005 1 3.49534 1L8.7929 1.00007C9.05812 1.00007 9.31246 1.10543 9.5 1.29296L13.2071 5.00007C13.3946 5.18761 13.5 5.44196 13.5 5.70718V14.0782C13.5 14.6628 12.9799 15.0001 12.5047 15.0001L3.49534 15C3.02005 15 2.5 14.6627 2.5 14.0781V1.92191ZM3.5 2V14L12.5 14.0001V6.01283H8.50005V2.00007L3.5 2ZM9.50005 5.01283H11.8056L9.50005 2.70722V5.01283Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'file-pdf'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 14V2H8.50008V6.01275H12.5V7.5H13.5V5.70431C13.5 5.44241 13.3973 5.19096 13.2138 5.004L9.57972 1.29969C9.39167 1.108 9.13442 1 8.86589 1H3.49534C3.02005 1 2.5 1.33727 2.5 1.92191V14.0781C2.5 14.6627 3.02005 15 3.49534 15H12V14H3.5ZM11.8215 5.01275H9.50008V2.64645L11.8215 5.01275Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M8.37695 9H10.2384C10.7216 9 11.1134 9.39175 11.1134 9.875V12.1064C11.1134 12.5897 10.7216 12.9814 10.2384 12.9814H8.37695V9ZM9.12695 9.75V12.2314H10.2384C10.3074 12.2314 10.3634 12.1755 10.3634 12.1064L10.3634 9.875C10.3634 9.80596 10.3074 9.75 10.2384 9.75H9.12695Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M5 9.00593H6.86142C7.34467 9.00593 7.73642 9.39768 7.73642 9.88093V10.9327C7.73642 11.416 7.34467 11.8077 6.86142 11.8077H5.75V12.9977H5V9.00593ZM5.75 11.0577H6.86142C6.93046 11.0577 6.98642 11.0017 6.98642 10.9327V9.88093C6.98642 9.81189 6.93046 9.75593 6.86142 9.75593H5.75V11.0577Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M11.7539 12.9977H12.5039V11.4166H14.1153V10.6666H12.5039V9.75005H14.1153V9.00005H11.7539V12.9977Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'file-powerpoint'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 2V14H8V15H3.49534C3.02005 15 2.5 14.6627 2.5 14.0781V1.92191C2.5 1.33727 3.02005 1 3.49534 1H8.86589C9.13442 1 9.39167 1.108 9.57972 1.29969L13.2138 5.004C13.3973 5.19096 13.5 5.44241 13.5 5.70431V7.5H12.5V6.01275H8.50008V2H3.5ZM9.50008 2.64645V5.01275H11.8215L9.50008 2.64645Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M12.5 8.5H9.5V15H10.5V12.5H12.5C13.0523 12.5 13.5 12.0523 13.5 11.5V9.5C13.5 8.94772 13.0523 8.5 12.5 8.5ZM12.5 11.5H10.5V9.5H12.5V11.5Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'file-unknown'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 2V14H9V15H3.49534C3.02005 15 2.5 14.6627 2.5 14.0781V1.92191C2.5 1.33727 3.02005 1 3.49534 1H8.78616C9.05469 1 9.31194 1.108 9.5 1.29969L13.1341 5.004C13.3175 5.19096 13.4203 5.44241 13.4203 5.70431V7.5H12.4203V6.01275H8.42036V2H3.5ZM9.42036 2.64645V5.01275H11.7418L9.42036 2.64645Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M11.4203 8.42065C10.3495 8.42065 9.42028 9.24178 9.42028 10.3222H10.4203C10.4203 9.85692 10.8368 9.42065 11.4203 9.42065C12.0038 9.42065 12.4203 9.85692 12.4203 10.3222C12.4203 10.6216 12.1402 10.9812 11.7014 11.1477L11.699 11.1487C11.2559 11.3196 10.9203 11.7405 10.9203 12.2599V12.9207H11.9203V12.2599C11.9203 12.1949 11.9616 12.1195 12.0579 12.0821C12.7159 11.8317 13.4203 11.1914 13.4203 10.3222C13.4203 9.24178 12.491 8.42065 11.4203 8.42065Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M11.4202 13.8C11.0888 13.8 10.8202 14.0686 10.8202 14.4C10.8202 14.7314 11.0888 15 11.4202 15C11.7515 15 12.0202 14.7314 12.0202 14.4C12.0202 14.0686 11.7515 13.8 11.4202 13.8Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'file-word'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 2.00006V14.0001H6.5V15.0001H3.49534C3.02005 15.0001 2.5 14.6628 2.5 14.0781V1.92197C2.5 1.33733 3.02005 1.00006 3.49534 1.00006L8.8658 1C9.13433 1 9.39158 1.108 9.57964 1.29969L13.2138 5.004C13.3972 5.19096 13.4999 5.44241 13.4999 5.70431V8H12.4999V6.01275H8.5V2L3.5 2.00006ZM9.5 2.64645V5.01275H11.8215L9.5 2.64645Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M9 14L9 9.5H8L8 14C8 14.5523 8.44772 15 9 15H12.5C13.0523 15 13.5 14.5523 13.5 14V9.5H12.5L12.5 14H11.25L11.25 9.5H10.25L10.25 14H9Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	file(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.49534 1C3.02005 1 2.5 1.33727 2.5 1.92191V14.0781C2.5 14.6627 3.02005 15 3.49534 15L12.5047 15.0001C12.9799 15.0001 13.5 14.6628 13.5 14.0782V5.70718C13.5 5.44196 13.3946 5.18761 13.2071 5.00007L9.5 1.29296C9.31246 1.10543 9.05812 1.00007 8.7929 1.00007L3.49534 1ZM8.50005 2.00007V6.01283H12.5V14.0001L3.5 14V2L8.50005 2.00007ZM9.50005 2.70722L11.8056 5.01283H9.50005V2.70722Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'filter-clear'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.00293 2H10.9975C11.5498 2 11.9975 2.44772 11.9975 3C11.9975 3.27469 11.8845 3.53729 11.685 3.72615L8.00004 7.214V12.75L5.00004 15L4.99904 7.214L1.31537 3.72612C0.945188 3.3756 0.902004 2.80934 1.19622 2.40887L1.27681 2.31243C1.46567 2.11298 1.72825 2 2.00293 2ZM10.9975 3H2.00293L6.00004 6.78486L5.99904 12.999L7.00004 12.249V6.78485L10.9975 3Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M10.7071 10L12.1214 11.4143L13.5357 10L14.2428 10.7071L12.8285 12.1214L14.2426 13.5355L13.5355 14.2426L12.1214 12.8285L10.7073 14.2426L10.0002 13.5355L11.4143 12.1214L10 10.7071L10.7071 10Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	filter(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3C2 2.44772 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3V4.78597L9.75 7.28597V14H6.25V7.28597L2 4.78597V3ZM13 3H3V4.21403L7.25 6.71403V13H8.75V6.71403L13 4.21403V3Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	flag(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 2H13.46C13.7582 2 14 2.24177 14 2.54V9.46C14 9.75823 13.7582 10 13.46 10H4V15H3V10L3 2ZM4 3V9H13V3H4Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
    `;
	},
	'folder-add'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 3C1.5 2.44772 1.94772 2 2.5 2H6.0906L8.16202 3.5H13C13.5523 3.5 14 3.94772 14 4.5V8.5H13V4.5H7.83798L5.76655 3L2.5 3V12H8.5V13H2.5C1.94772 13 1.5 12.5523 1.5 12V3Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M12 15V13H10V12H12V10H13V12H15V13H13V15H12Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'folder-open'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 2.74396H6.42857L8.5 4.39468H13.5V3.39468H8.84972L6.77829 1.74396L2.5 1.74396V2.74396Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M2.5 4.39466C1.94772 4.39466 1.5 4.84237 1.5 5.39466V13C1.5 13.5523 1.94772 14 2.5 14L13.5 14C14.0523 14 14.5 13.5523 14.5 13V7.04537C14.5 6.49309 14.0523 6.04537 13.5 6.04537H8.17486L6.10343 4.39465L2.5 4.39466ZM2.5 5.39466L5.75371 5.39465L7.82514 7.04537H13.5V13L2.5 13V5.39466Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	folder(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 3.5C1.5 2.94771 1.94772 2.5 2.5 2.5H5.42857H5.5906L5.72183 2.59503L7.66202 4H13.5C14.0523 4 14.5 4.44772 14.5 5V13C14.5 13.5523 14.0523 14 13.5 14H2.5C1.94772 14 1.5 13.5523 1.5 13L1.5 3.5ZM5.26655 3.5L2.5 3.5V13H13.5V5H7.5H7.33798L7.20675 4.90497L5.26655 3.5Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	fork(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 2.5C6 2.22386 6.22386 2 6.5 2H9.5C9.77614 2 10 2.22386 10 2.5V5.5C10 5.77614 9.77614 6 9.5 6H8.5V8H11.5C12.0523 8 12.5 8.44772 12.5 9V10H13.5C13.7761 10 14 10.2239 14 10.5V13.5C14 13.7761 13.7761 14 13.5 14H10.5C10.2239 14 10 13.7761 10 13.5V10.5C10 10.2239 10.2239 10 10.5 10H11.5V9H4.5V10H5.5C5.77614 10 6 10.2239 6 10.5V13.5C6 13.7761 5.77614 14 5.5 14H2.5C2.22386 14 2 13.7761 2 13.5V10.5C2 10.2239 2.22386 10 2.5 10H3.5V9C3.5 8.44772 3.94772 8 4.5 8H7.5V6H6.5C6.22386 6 6 5.77614 6 5.5V2.5ZM7 5H9V3H7V5ZM3 11V13H5V11H3ZM11 11V13H13V11H11Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'format-horizontal-align-bottom'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 14L13 2H14L14 14H13Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M10.5 14V6H9.5V14H10.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M3.5 6L3.5 14H2.5V6H3.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M6 14L6 2H7L7 14H6Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'format-horizontal-align-center'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 14L13 2H14L14 14H13Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M10.5 12V4H9.5V12H10.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M3.5 4L3.5 12H2.5V4H3.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M6 14L6 2H7L7 14H6Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'format-horizontal-align-top'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 2L2.5 11H3.5L3.5 2H2.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M9.5 11L9.5 2H10.5L10.5 11H9.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M13 14L13 2H14L14 14H13Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M6 14L6 2H7L7 14H6Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'format-vertical-align-center'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3H14V2H2V3Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M4 6.5H12V5.5H4V6.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M12 13.5H4V12.5H12V13.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M2 10H14V9H2V10Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'format-vertical-align-left'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3H14V2H2V3Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M2 6.5H11V5.5H2V6.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M11 13.5H2V12.5H11V13.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M2 10H14V9H2V10Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'format-vertical-align-right'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3H14V2H2V3ZM5 6.5H14V5.5H5V6.5ZM14 13.5H5V12.5H14V13.5ZM2 10H14V9H2V10Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	forward(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7579 7.60926C15.0086 7.80943 15.0086 8.19058 14.7579 8.39075L9.12049 12.8914C8.79303 13.1529 8.30854 12.9197 8.30854 12.5007L8.30854 8.23459C8.27912 8.29002 8.23853 8.341 8.18678 8.38412L2.82034 12.8562C2.49468 13.1276 2.00024 12.896 2.00024 12.4721L2.00025 3.5279C2.00025 3.10398 2.49468 2.87241 2.82034 3.1438L8.18678 7.61591C8.23853 7.65903 8.27912 7.71 8.30854 7.76544L8.30854 3.49935C8.30854 3.08033 8.79303 2.84717 9.12049 3.1086L14.7579 7.60926ZM9.30854 4.53833L9.30854 11.4617L13.6445 8.00001L9.30854 4.53833ZM3.00025 4.59544L3.00024 11.4046L7.08567 8.00001L3.00025 4.59544Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'fullscreen-exit'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.50004 5.79293V3.00004L7.50004 3.00004V7.00004C7.50004 7.27618 7.27618 7.50004 7.00004 7.50004L3.00004 7.50004L3.00004 6.50004L5.79293 6.50004L2.14648 2.85359L2.85359 2.14648L6.50004 5.79293Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M9.50004 10.2071V13H8.50004V9.00004C8.50004 8.7239 8.7239 8.50004 9.00004 8.50004H13V9.50004H10.2071L13.8536 13.1465L13.1465 13.8536L9.50004 10.2071Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	fullscreen(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 4.20711V7H2.5V3C2.5 2.72386 2.72386 2.5 3 2.5L7 2.5V3.5H4.2071L7.35355 6.64646L6.64645 7.35357L3.5 4.20711Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M12.5 11.7929V9H13.5V13C13.5 13.2761 13.2761 13.5 13 13.5L9 13.5L9 12.5H11.7929L8.64645 9.35353L9.35355 8.64643L12.5 11.7929Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'gender-female'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1.67828C6.067 1.67828 4.5 3.24529 4.5 5.17828C4.5 6.94604 5.81055 8.4077 7.51306 8.64468L7.51311 10.0021H5.51315V11.0021H7.51315L7.51329 14.502L8.51329 14.502L8.51315 11.0021H10.5132V10.0021H8.51311L8.51306 8.64095C10.2028 8.39273 11.5 6.93699 11.5 5.17828C11.5 3.24529 9.933 1.67828 8 1.67828ZM8 2.67828C9.38071 2.67828 10.5 3.79757 10.5 5.17828C10.5 6.559 9.38071 7.67828 8 7.67828C6.61929 7.67828 5.5 6.559 5.5 5.17828C5.5 3.79757 6.61929 2.67828 8 2.67828Z" fill="${currentColor}"/>
</svg>
`;
	},
	'gender-male'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.9997 3.6C12.9997 3.26863 12.7311 3 12.3997 3H8.99975V4L11.3825 4L7.67208 7.7104C6.29899 6.64114 4.31234 6.73766 3.05003 7.99998C1.68319 9.36682 1.68319 11.5829 3.05003 12.9497C4.41686 14.3166 6.63294 14.3166 7.99978 12.9497C9.23096 11.7185 9.35315 9.79831 8.36634 8.43036L11.9997 4.79693V7H12.9997V3.6ZM3.75714 12.2426C2.78082 11.2663 2.78082 9.6834 3.75714 8.70709C4.73345 7.73078 6.31636 7.73078 7.29267 8.70709C8.26898 9.6834 8.26898 11.2663 7.29267 12.2426C6.31636 13.2189 4.73345 13.2189 3.75714 12.2426Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	gift(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 4C3.5 4.5628 3.68597 5.08217 3.99982 5.5H2.5C2.22386 5.5 2 5.72386 2 6V14C2 14.2761 2.22386 14.5 2.5 14.5H13.5C13.7761 14.5 14 14.2761 14 14V6C14 5.72386 13.7761 5.5 13.5 5.5H12.0002C12.314 5.08217 12.5 4.5628 12.5 4C12.5 2.61929 11.3807 1.5 10 1.5C9.1822 1.5 8.45611 1.89267 8 2.49976C7.54388 1.89267 6.8178 1.5 6 1.5C4.61929 1.5 3.5 2.61929 3.5 4ZM11.5 4C11.5 4.82843 10.8284 5.5 10 5.5H8.5V4C8.5 3.17157 9.17157 2.5 10 2.5C10.8284 2.5 11.5 3.17157 11.5 4ZM7.5 6.5V11H8.5V6.5H13V13.5H3V6.5H7.5ZM7.5 5.5H6C5.17157 5.5 4.5 4.82843 4.5 4C4.5 3.17157 5.17157 2.5 6 2.5C6.82843 2.5 7.5 3.17157 7.5 4V5.5Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'heart-filled'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 6.61283C2 3.69894 5.46385 2.17518 7.61184 4.14417L8 4.49999L8.38816 4.14418C10.5362 2.17518 14 3.69893 14 6.61283C14 7.50101 13.6472 8.35282 13.0191 8.98086L8.14571 13.8543C8.06523 13.9348 7.93477 13.9348 7.85429 13.8543L2.98087 8.98086C2.35283 8.35282 2 7.50101 2 6.61283Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	heart(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 5.85656L9.06389 4.88133C10.5705 3.50029 13 4.56904 13 6.61283C13 7.2358 12.7525 7.83325 12.312 8.27375L8 12.5858L3.68798 8.27376C3.24747 7.83325 3 7.2358 3 6.61283C3 4.56904 5.42952 3.50029 6.93611 4.88133L8 5.85656ZM7.61184 4.14417C5.46385 2.17518 2 3.69894 2 6.61283C2 7.50101 2.35283 8.35282 2.98087 8.98086L7.85429 13.8543C7.93477 13.9348 8.06523 13.9348 8.14571 13.8543L13.0191 8.98086C13.6472 8.35282 14 7.50101 14 6.61283C14 3.69893 10.5362 2.17518 8.38816 4.14418L8 4.49999L7.61184 4.14417Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'help-circle-filled'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.9944 8C14.9944 4.13401 11.8604 1 7.99439 1C4.12839 0.999998 0.994386 4.134 0.994385 8C0.994383 11.866 4.12839 15 7.99438 15C11.8604 15 14.9944 11.866 14.9944 8ZM5.80273 6.6315C5.80273 5.42262 6.78535 4.44 7.99424 4.44C9.20312 4.44 10.1857 5.42262 10.1857 6.6315C10.1857 7.60163 9.44315 8.35248 8.70124 8.65455C8.58029 8.70488 8.49428 8.82451 8.49428 8.97008V9.7675H7.49428V8.97008C7.49428 8.41041 7.83313 7.931 8.32065 7.7298L8.3232 7.72875C8.81796 7.52775 9.18574 7.07185 9.18574 6.6315C9.18574 5.9749 8.65084 5.44 7.99424 5.44C7.33764 5.44 6.80273 5.9749 6.80273 6.6315H5.80273ZM7.46697 11.1734C7.46697 10.8823 7.70302 10.6462 7.99419 10.6462C8.28537 10.6462 8.52141 10.8823 8.52141 11.1734C8.52141 11.4646 8.28537 11.7007 7.99419 11.7007C7.70302 11.7007 7.46697 11.4646 7.46697 11.1734Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'help-circle'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.39404 11.6C7.39404 11.2686 7.66267 11 7.99404 11C8.32541 11 8.59404 11.2686 8.59404 11.6C8.59404 11.9314 8.32541 12.2 7.99404 12.2C7.66267 12.2 7.39404 11.9314 7.39404 11.6Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M7.99409 4.0061C6.65645 4.0061 5.56909 5.09346 5.56909 6.4311H6.56909C6.56909 5.64574 7.20873 5.0061 7.99409 5.0061C8.77945 5.0061 9.41909 5.64574 9.41909 6.4311C9.41909 6.96885 8.9746 7.50808 8.39445 7.74376L8.3919 7.74481C7.86235 7.96335 7.49414 8.48413 7.49414 9.0925V10H8.49414V9.0925C8.49414 8.89828 8.60945 8.73731 8.77236 8.66961C9.59969 8.33289 10.4191 7.49869 10.4191 6.4311C10.4191 5.09346 9.33173 4.0061 7.99409 4.0061Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M14.9941 8C14.9941 4.13401 11.8601 1 7.99414 1C4.12815 0.999998 0.994142 4.134 0.994141 8C0.994138 11.866 4.12815 15 7.99414 15C11.8601 15 14.9941 11.866 14.9941 8ZM13.9941 8C13.9941 11.3137 11.3078 14 7.99414 14C4.68043 14 1.99414 11.3137 1.99414 8C1.99414 4.68629 4.68043 2 7.99414 2C11.3079 2 13.9941 4.68629 13.9941 8Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	help(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2.5C6.10262 2.5 4.5 3.94793 4.5 5.8H5.5C5.5 4.56407 6.58881 3.5 8 3.5C9.41119 3.5 10.5 4.56407 10.5 5.8C10.5 6.68407 9.72532 7.55083 8.73987 7.92448L8.73742 7.92542C8.02449 8.20003 7.5 8.86853 7.5 9.68V11H8.5V9.68C8.5 9.32382 8.72935 9.0006 9.09579 8.859C10.3042 8.40029 11.5 7.25137 11.5 5.8C11.5 3.94793 9.89738 2.5 8 2.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M8 12C7.58579 12 7.25 12.3358 7.25 12.75C7.25 13.1642 7.58579 13.5 8 13.5C8.41421 13.5 8.75 13.1642 8.75 12.75C8.75 12.3358 8.41421 12 8 12Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	history(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.90582 2.79339C10.8499 2.79339 13.2095 5.14005 13.2095 8.00171C13.2095 10.8634 10.8499 13.21 7.90581 13.21C5.44426 13.21 3.39128 11.5695 2.78447 9.35914L1.75098 9.52779C2.44243 12.2419 4.93584 14.2517 7.90581 14.2517C11.4103 14.2517 14.2512 11.4535 14.2512 8.00171C14.2512 4.54993 11.4103 1.75171 7.90582 1.75171C5.80622 1.75171 3.9448 2.75613 2.78981 4.30376L2.78981 2.64486H1.75098V5.79135C1.75098 6.0675 1.97483 6.29135 2.25098 6.29135L5.37759 6.29135V5.24683H3.40454C4.33896 3.77685 5.99992 2.79339 7.90582 2.79339Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M6.99951 5.5V8.38893L9.64596 11.0354L10.3531 10.3283L7.99951 7.97471V5.5H6.99951Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	home(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00004 11V12H10V11H6.00004Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M7.64648 1.64646C7.84175 1.4512 8.15833 1.4512 8.35359 1.64646L14.8536 8.14646L14.1465 8.85357L13 7.70712V13.5C13 14.0523 12.5523 14.5 12 14.5H4.00004C3.44775 14.5 3.00004 14.0523 3.00004 13.5V7.70712L1.85359 8.85357L1.14648 8.14646L7.64648 1.64646ZM8.00004 2.70712L4.00004 6.70712V13.5H12V6.70712L8.00004 2.70712Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	hourglass(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99992 7.11557L12 3.79931V2.5H4V3.79932L7.99992 7.11557ZM3 4.26923V2.5C3 1.94771 3.44772 1.5 4 1.5H12C12.5523 1.5 13 1.94772 13 2.5V4.26923L8.49992 8.00002L13 11.7308V13.5C13 14.0523 12.5523 14.5 12 14.5H4C3.44772 14.5 3 14.0523 3 13.5V11.7308L7.49992 8.00002L3 4.26923ZM4 12.2007V13.5H12V12.2007L7.99992 8.88447L4 12.2007Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'image-error'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 13V8H3L3 10.2929L6 7.29289L11.7071 13H13L13 3L8 3V2H13C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14C2.44772 14 2 13.5523 2 13ZM6 8.70711L3 11.7071L3 13L10.2929 13L6 8.70711Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M12 6C12 7.10457 11.1046 8 10 8C8.89543 8 8 7.10457 8 6C8 4.89543 8.89543 4 10 4C11.1046 4 12 4.89543 12 6ZM11 6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6C9 6.55228 9.44772 7 10 7C10.5523 7 11 6.55228 11 6Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M6.28208 5.55923L5.57497 6.26634L4.16076 4.85213L2.74654 6.26634L2.03943 5.55923L3.45365 4.14502L2.03943 2.73081L2.74654 2.0237L4.16076 3.43791L5.57497 2.0237L6.28208 2.73081L4.86786 4.14502L6.28208 5.55923Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	image(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 8C11.1046 8 12 7.10457 12 6C12 4.89543 11.1046 4 10 4C8.89543 4 8 4.89543 8 6C8 7.10457 8.89543 8 10 8ZM10 7C10.5523 7 11 6.55228 11 6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6C9 6.55228 9.44772 7 10 7Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M2 13C2 13.5523 2.44772 14 3 14L13 14C13.5523 14 14 13.5523 14 13L14 3C14 2.44772 13.5523 2 13 2H3C2.44772 2 2 2.44771 2 3V13ZM3 11.7071L6 8.70711L10.2929 13L3 13L3 11.7071ZM3 10.2929L3 3L13 3L13 13H11.7071L6 7.29289L3 10.2929Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'info-circle-filled'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM7.3999 4H8.59985V5.19995H7.3999V4ZM7.50562 6.5H8.50562V11.9998H7.50562V6.5Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'info-circle'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.50562 11.9998V6.5H8.50562V11.9998H7.50562Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M8.59985 4H7.3999V5.19995H8.59985V4Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M1 8C1 11.866 4.13403 15 8 15C11.866 15 15 11.866 15 8C15 4.13403 11.866 1 8 1C4.13403 1 1 4.13403 1 8ZM2 8C2 4.68628 4.68628 2 8 2C11.3137 2 14 4.68628 14 8C14 11.3137 11.3137 14 8 14C4.68628 14 2 11.3137 2 8Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	internet(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.1001 7.9C1.1001 4.08927 4.18928 1.00005 8 1C11.8108 1 14.9001 4.08923 14.9001 7.9V8.1C14.9001 11.9108 11.8109 15 8.0001 15C4.18938 14.9999 1.1001 11.9107 1.1001 8.1V7.9ZM13.8868 8.5H10.8869C10.7905 10.419 10.1384 12.3152 8.93067 13.927C11.6183 13.5012 13.7019 11.2606 13.8868 8.5ZM10.8869 7.5H13.8868C13.7019 4.73941 11.6183 2.4988 8.93067 2.07297C10.1384 3.68475 10.7905 5.58102 10.8869 7.5ZM9.88552 7.5C9.78624 5.72473 9.15773 3.97354 8 2.50303C6.84227 3.97354 6.21376 5.72473 6.11448 7.5H9.88552ZM5.11307 8.5H2.11344C2.29825 11.2605 4.38178 13.5011 7.06931 13.927C5.8616 12.3152 5.20952 10.419 5.11307 8.5ZM5.11307 7.5C5.20952 5.58103 5.86159 3.68478 7.06931 2.07301C4.38177 2.49893 2.29825 4.73949 2.11344 7.5H5.11307ZM9.88552 8.5H6.11448C6.21376 10.2753 6.84227 12.0265 8 13.497C9.15773 12.0265 9.78624 10.2753 9.88552 8.5Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	jump(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.29329 13.7067C2.48075 13.8942 2.73489 13.9996 3 14H13C13.2651 13.9996 13.5193 13.8942 13.7067 13.7067C13.8942 13.5193 13.9996 13.2651 14 13V8.5H13V13H3V3H7.5V2H3C2.73489 2.00036 2.48075 2.10583 2.29329 2.29329C2.10583 2.48075 2.00036 2.73489 2 3V13C2.00036 13.2651 2.10583 13.5193 2.29329 13.7067Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M9 3V2H13.5C13.7761 2 14 2.22386 14 2.5V7H13V3.707L8.707 8L8 7.293L12.293 3H9Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	laptop(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 12C1.94771 12 1.5 11.5523 1.5 11V4C1.5 3.44772 1.94772 3 2.5 3L13.5 3C14.0523 3 14.5 3.44772 14.5 4V11C14.5 11.5523 14.0523 12 13.5 12H2.5ZM2.5 11L13.5 11V4L2.5 4V11Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M15 13H1V14H15V13Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	layers(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0731 4.97791L7.99976 7.50841L1.92641 4.97791C1.51598 4.8069 1.51598 4.20041 1.92641 4.0294L7.99976 1.4989L14.0731 4.0294C14.4835 4.20041 14.4835 4.8069 14.0731 4.97791ZM3.42727 4.50366L7.99976 6.40881L12.5722 4.50366L7.99976 2.5985L3.42727 4.50366Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M1.49902 7.02665V8.25379L8.00001 11.1119L14.499 8.25466V7.02752L8.00001 9.8848L1.49902 7.02665Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M1.49902 10.4194V11.6466L8.00011 14.5048L14.499 11.6475V10.4204L8.00011 13.2776L1.49902 10.4194Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'link-unlink'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 1.99994L6 3.99994L7 3.99994V1.99994H6Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M8.1767 9.59098L5.8786 11.8891C5.39045 12.3772 4.59899 12.3772 4.11084 11.8891C3.62268 11.4009 3.62268 10.6095 4.11084 10.1213L6.40893 7.82321L5.70183 7.11611L3.40373 9.4142C2.52505 10.2929 2.52505 11.7175 3.40373 12.5962C4.28241 13.4749 5.70703 13.4749 6.58571 12.5962L8.88381 10.2981L8.1767 9.59098Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M9.59091 8.17677L10.298 8.88387L12.5961 6.58578C13.4748 5.7071 13.4748 4.28248 12.5961 3.4038C11.7174 2.52512 10.2928 2.52512 9.41414 3.4038L7.11604 5.70189L7.82315 6.409L10.1212 4.1109C10.6094 3.62275 11.4009 3.62275 11.889 4.1109C12.3772 4.59906 12.3772 5.39051 11.889 5.87867L9.59091 8.17677Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M12 8.99988H14V9.99988H12V8.99988Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M2 6.99994H4V5.99994H2V6.99994Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M10 11.9999V13.9999H9L9 11.9999H10Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M11.7322 11.025L13.3536 12.6463L12.6464 13.3534L11.0251 11.7321L11.7322 11.025Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M2.64645 3.35343L4.26777 4.97475L4.97487 4.26765L3.35355 2.64632L2.64645 3.35343Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	link(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.23229 11.8891L8.35361 9.76776L9.06072 10.4749L6.9394 12.5962C5.96309 13.5725 4.38017 13.5725 3.40386 12.5962C2.42755 11.6199 2.42755 10.037 3.40386 9.06066L5.52518 6.93934L6.23229 7.64644L4.11097 9.76776C3.52518 10.3536 3.52518 11.3033 4.11097 11.8891C4.69676 12.4749 5.6465 12.4749 6.23229 11.8891Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M10.4749 9.06066L9.76783 8.35355L11.8891 6.23223C12.4749 5.64644 12.4749 4.6967 11.8891 4.11091C11.3034 3.52512 10.3536 3.52512 9.76782 4.11091L7.6465 6.23223L6.9394 5.52512L9.06072 3.4038C10.037 2.42749 11.6199 2.42749 12.5963 3.4038C13.5726 4.38011 13.5726 5.96303 12.5963 6.93934L10.4749 9.06066Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M9.06087 6.23225L6.23244 9.06068L6.93955 9.76778L9.76798 6.93936L9.06087 6.23225Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	loading(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1.5C4.41038 1.5 1.5 4.41038 1.5 8C1.5 11.5896 4.41038 14.5 8 14.5V12.875C5.30761 12.875 3.125 10.6924 3.125 8C3.125 5.30761 5.30761 3.125 8 3.125C10.6924 3.125 12.875 5.30761 12.875 8H14.5C14.5 4.41038 11.5896 1.5 8 1.5Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	location(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5001 5.99999C10.5001 7.3807 9.3808 8.49999 8.00009 8.49999C6.61938 8.49999 5.50009 7.3807 5.50009 5.99999C5.50009 4.61928 6.61938 3.49999 8.00009 3.49999C9.3808 3.49999 10.5001 4.61928 10.5001 5.99999ZM9.50009 5.99999C9.50009 5.17156 8.82852 4.49999 8.00009 4.49999C7.17166 4.49999 6.50009 5.17156 6.50009 5.99999C6.50009 6.82842 7.17166 7.49999 8.00009 7.49999C8.82852 7.49999 9.50009 6.82842 9.50009 5.99999Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M8.36196 14.4684C8.18821 14.7236 7.81196 14.7236 7.63822 14.4684L3.85557 8.91174C2.50041 6.92103 2.75204 4.24804 4.45488 2.54519C6.41284 0.587231 9.58733 0.58723 11.5453 2.54519C13.2481 4.24804 13.4998 6.92103 12.1446 8.91174L8.36196 14.4684ZM11.318 8.34901C12.4028 6.75536 12.2014 4.61551 10.8382 3.2523C9.27075 1.68486 6.72943 1.68486 5.16199 3.2523C3.79878 4.61551 3.59735 6.75536 4.68221 8.34901L8.00009 13.2229L11.318 8.34901Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'lock-off'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 11V10H10V11H6Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M4.5 6V5C4.5 3.067 6.067 1.5 8 1.5C9.933 1.5 11.5 3.067 11.5 5H10.5C10.5 3.61929 9.38071 2.5 8 2.5C6.61929 2.5 5.5 3.61929 5.5 5V6H13C13.2761 6 13.5 6.22386 13.5 6.5V13.5C13.5 13.7761 13.2761 14 13 14H3C2.72386 14 2.5 13.7761 2.5 13.5V6.5C2.5 6.22386 2.72386 6 3 6H4.5ZM3.5 13H12.5V7H3.5V13Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'lock-on'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9.99999V11H10V9.99999H6Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M4.5 4.99084V5.99998H3C2.72386 5.99998 2.5 6.22384 2.5 6.49998V13.5C2.5 13.7761 2.72386 14 3 14H13C13.2761 14 13.5 13.7761 13.5 13.5V6.49998C13.5 6.22384 13.2761 5.99998 13 5.99998H11.5V4.99084C11.5 3.05785 9.933 1.49084 8 1.49084C6.067 1.49084 4.5 3.05785 4.5 4.99084ZM10.5 5.99998H5.5V4.99084C5.5 3.61013 6.61929 2.49084 8 2.49084C9.38071 2.49084 10.5 3.61013 10.5 4.99084V5.99998ZM3.5 6.99998H12.5V13H3.5V6.99998Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	login(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.47744 7.49999L6.23166 5.25421L6.93877 4.5471L10.0381 7.64644C10.2334 7.8417 10.2334 8.15828 10.0381 8.35355L6.93877 11.4529L6.23166 10.7458L8.47745 8.49999L1 8.49998L1 7.49997L8.47744 7.49999Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M4.00006 5V3H12.0001V13H4.00006V11H3.00006V13.5C3.00006 13.7761 3.22391 14 3.50006 14H12.5001C12.7762 14 13.0001 13.7761 13.0001 13.5V2.5C13.0001 2.22386 12.7762 2 12.5001 2H3.50006C3.22391 2 3.00006 2.22386 3.00006 2.5V5H4.00006Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'logo-android'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.31701 8.37857C5.31701 8.00808 5.61735 7.70773 5.98784 7.70773C6.35833 7.70773 6.65868 8.00808 6.65868 8.37857C6.65868 8.74906 6.35833 9.0494 5.98784 9.0494C5.61735 9.0494 5.31701 8.74906 5.31701 8.37857Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M10.0129 7.70773C9.64236 7.70773 9.34202 8.00808 9.34202 8.37857C9.34202 8.74906 9.64236 9.0494 10.0129 9.0494C10.3833 9.0494 10.6837 8.74906 10.6837 8.37857C10.6837 8.00808 10.3833 7.70773 10.0129 7.70773Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M2.31638 4L3.9958 5.67942C5.11346 4.84654 6.49933 4.35355 8.00035 4.35355C9.50137 4.35355 10.8872 4.84654 12.0049 5.67942L13.6843 4L14.3914 4.70711L12.762 6.33656C13.8933 7.47647 14.618 9.02038 14.7008 10.7327C14.706 10.8418 14.7087 10.9515 14.7087 11.0619V11.7327H1.29199V11.0619C1.29199 10.9515 1.29466 10.8418 1.29993 10.7327C1.38266 9.02038 2.10744 7.47647 3.23872 6.33656L1.60927 4.70711L2.31638 4ZM2.30132 10.7327H13.6994C13.5288 7.73328 11.0425 5.35355 8.00035 5.35355C4.95819 5.35355 2.47185 7.73328 2.30132 10.7327Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'logo-apple-filled'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6858 1C10.7724 1.78958 10.4538 2.58273 9.98364 3.15353C9.51181 3.72324 8.73978 4.1671 7.98282 4.10843C7.88056 3.33311 8.26219 2.52735 8.69865 2.02125C9.18583 1.45099 10.0072 1.02742 10.6858 1Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M13.1277 5.60474C12.9822 5.69544 11.6658 6.51624 11.6822 8.16735C11.7001 10.1607 13.3917 10.8541 13.4878 10.8935C13.4901 10.8945 13.4919 10.8952 13.4919 10.8952C13.491 10.8979 13.4893 10.9033 13.4868 10.9115C13.4444 11.0464 13.1713 11.9167 12.5576 12.8138C11.9956 13.6358 11.413 14.4533 10.494 14.47C10.0522 14.4785 9.75708 14.3508 9.45018 14.218C9.1291 14.0791 8.79514 13.9346 8.26696 13.9346C7.71347 13.9346 7.36398 14.0836 7.02734 14.2271C6.73567 14.3514 6.45365 14.4716 6.05696 14.4873C5.17032 14.521 4.49451 13.5998 3.92782 12.7812C2.76867 11.1063 1.88341 8.04809 3.07299 5.98448C3.66244 4.95912 4.71823 4.30991 5.86367 4.29291C6.35713 4.28421 6.83526 4.47406 7.25372 4.64022C7.57365 4.76725 7.8587 4.88043 8.08903 4.88043C8.29595 4.88043 8.57336 4.77102 8.89682 4.64344C9.40607 4.44259 10.0295 4.19671 10.6716 4.26193C11.1111 4.28002 12.3459 4.43904 13.1385 5.59791C13.1364 5.59931 13.1328 5.60158 13.1277 5.60474Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'logo-apple'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.29006 4.00804C8.39216 4.00804 8.49363 4.00196 8.59399 3.99C9.16299 3.92218 9.69626 3.66534 10.1056 3.25603C10.5149 2.84672 10.7717 2.31345 10.8395 1.74445C10.8515 1.64409 10.8576 1.54262 10.8576 1.44052V1H10.4171C10.315 1 10.2135 1.00608 10.1131 1.01804C9.54414 1.08586 9.01086 1.3427 8.60155 1.75201C8.19224 2.16132 7.9354 2.69459 7.86759 3.26359C7.85565 3.36373 7.84957 3.46497 7.84954 3.56684V4.00804H8.29006ZM9.57917 2.72962C9.3173 2.99149 8.98397 3.16546 8.62502 3.23256C8.69212 2.87361 8.86609 2.54028 9.12796 2.27842C9.38982 2.01655 9.72315 1.84258 10.0821 1.77548C10.015 2.13443 9.84103 2.46776 9.57917 2.72962Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M12.6931 5.08954C12.9171 5.26573 13.133 5.48579 13.3255 5.76088C13.3038 5.77264 13.1447 5.86243 12.9359 6.03364C12.4712 6.41459 11.7606 7.19865 11.7714 8.42318C11.7947 10.547 13.6752 11.2524 13.6985 11.26C13.6952 11.2714 13.6793 11.3244 13.6496 11.4103C13.5986 11.5579 13.5068 11.8027 13.3675 12.1011C13.2101 12.4383 12.992 12.8439 12.7039 13.2548C12.1055 14.1119 11.4839 14.9614 10.5047 14.9765C10.0319 14.9877 9.71618 14.8546 9.38781 14.7161C9.04705 14.5723 8.69261 14.4228 8.13464 14.4228C7.54173 14.4228 7.16869 14.5783 6.80938 14.7281C6.49998 14.857 6.20075 14.9817 5.78009 14.9993C4.83205 15.0296 4.11714 14.0739 3.51102 13.2244C2.27546 11.4799 1.33519 8.30941 2.60183 6.16288C3.23127 5.09341 4.35026 4.41836 5.57028 4.40319C6.09584 4.39025 6.60635 4.58803 7.05329 4.76118C7.39273 4.89268 7.69551 5.00998 7.94037 5.00998C8.15548 5.00998 8.43608 4.90234 8.76801 4.77501C9.29941 4.57115 9.96241 4.31682 10.699 4.37285C11.0542 4.39635 11.9224 4.48359 12.6931 5.08954ZM10.6393 5.27485L10.6304 5.27426C10.2284 5.24369 9.82647 5.34827 9.38919 5.507C9.32293 5.53106 9.22662 5.56773 9.12493 5.60646C8.98504 5.65974 8.83454 5.71706 8.73726 5.75104C8.53876 5.82038 8.24562 5.91396 7.94037 5.91396C7.64946 5.91396 7.37621 5.83645 7.1757 5.76982C7.02455 5.71959 6.85603 5.65429 6.70724 5.59663C6.65817 5.57762 6.61125 5.55943 6.5678 5.5429C6.16487 5.38953 5.86112 5.30028 5.59251 5.30689L5.58152 5.30709C4.6936 5.31813 3.85761 5.81141 3.38037 6.62229C2.89586 7.44337 2.79895 8.5289 3.00766 9.68362C3.21513 10.8314 3.70666 11.9362 4.24784 12.7007C4.55663 13.1335 4.83541 13.5075 5.1276 13.7749C5.41383 14.0368 5.60819 14.0992 5.74752 14.0959C6.00039 14.0845 6.16227 14.0175 6.49116 13.8813L6.53909 13.8615C6.91849 13.7046 7.40861 13.5189 8.13464 13.5189C8.87008 13.5189 9.35948 13.7231 9.72037 13.8752C10.0534 14.0156 10.2133 14.0792 10.4834 14.0728L10.4907 14.0727C10.6923 14.0696 10.8904 13.9891 11.1381 13.7633C11.4046 13.5204 11.6555 13.1772 11.9626 12.7373L11.9638 12.7357C12.2313 12.3543 12.4318 11.9746 12.5733 11.6646C12.4273 11.5619 12.273 11.4401 12.1192 11.297C11.5041 10.7248 10.8824 9.79485 10.8674 8.43311L10.8674 8.4311C10.8572 7.26653 11.3496 6.40488 11.8343 5.84749C11.8825 5.79208 11.9308 5.73937 11.9789 5.68934C11.4696 5.35557 10.9236 5.29366 10.6393 5.27485Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'logo-chrome-filled'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0228 4.43168C14.0438 4.46717 14.0442 4.51119 14.0238 4.54704C14.0034 4.58294 13.9653 4.60507 13.9241 4.60507H8.30612C8.30286 4.60507 8.29955 4.60493 8.2963 4.60461C8.19614 4.59607 8.09649 4.59166 8 4.59166C6.44508 4.59166 5.08772 5.64321 4.69917 7.14885C4.68751 7.19397 4.64973 7.22758 4.60355 7.23387C4.59837 7.23456 4.59313 7.23492 4.58799 7.23492C4.54742 7.23492 4.50932 7.21335 4.48866 7.17754L2.5181 3.76427C2.49447 3.72337 2.49832 3.67218 2.52784 3.63527C3.86532 1.96052 5.85984 1 8 1C9.23664 1 10.4522 1.32694 11.515 1.94551C12.5462 2.54562 13.4134 3.40534 14.0228 4.43168Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M8 10.6167C6.55745 10.6167 5.38388 9.4431 5.38388 8.00048C5.38388 6.55787 6.55745 5.38421 8 5.38421C9.44246 5.38421 10.6159 6.55787 10.6159 8.00048C10.6159 9.44305 9.44246 10.6167 8 10.6167Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M9.03439 11.3252C9.00589 11.2883 8.95806 11.2725 8.91294 11.2849C8.61655 11.3675 8.30942 11.4093 8 11.4093C6.68533 11.4093 5.47367 10.6382 4.91307 9.44484C4.91169 9.4419 4.91018 9.43906 4.90857 9.43621L2.09755 4.56715C2.07708 4.53157 2.03917 4.50977 1.99818 4.50977C1.95696 4.51 1.9184 4.53226 1.8982 4.56816C1.31062 5.61089 1 6.79777 1 8.00048C1 9.68772 1.60866 11.3175 2.71383 12.5896C3.80803 13.849 5.31443 14.6778 6.95565 14.9234C6.96134 14.9243 6.96703 14.9246 6.97268 14.9246C7.01321 14.9246 7.05131 14.903 7.07201 14.8672L9.04307 11.4529C9.06639 11.4125 9.06294 11.362 9.03439 11.3252Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M10.465 5.37081H14.4113C14.4585 5.37081 14.5009 5.39968 14.5181 5.44366C14.8379 6.25811 15 7.11832 15 8.00048C15 9.85642 14.2811 11.605 12.9757 12.9241C11.6714 14.2421 9.93246 14.9793 8.07941 15H8.07812C8.03741 15 7.99968 14.9784 7.97907 14.9432C7.95828 14.9076 7.95814 14.8636 7.97875 14.8279L10.7946 9.95035C10.7962 9.94755 10.7979 9.94484 10.7998 9.94218C11.1981 9.36956 11.4086 8.69815 11.4086 8.00048C11.4086 7.07889 11.0449 6.21487 10.3846 5.56751C10.3514 5.53492 10.3411 5.48534 10.3587 5.44219C10.3763 5.39904 10.4183 5.37081 10.465 5.37081Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'logo-chrome'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.50019 1.93783C7.84824 0.00483471 12.1294 1.15196 14.0624 4.50001C15.9954 7.84806 14.8482 12.1292 11.5002 14.0622C8.15214 15.9952 3.87101 14.8481 1.93801 11.5C0.00501782 8.15196 1.15214 3.87083 4.50019 1.93783ZM13.4542 5.49839L10.452 5.49837C11.5424 6.56769 11.8338 8.26397 11.078 9.66049L11.0792 9.66116L8.59007 13.9724C9.41475 13.8915 10.2358 13.6375 11.0002 13.1962C13.7062 11.6338 14.7349 8.28186 13.4542 5.49839ZM7.43459 13.9738L8.93933 11.3675C8.81644 11.4017 8.6917 11.4293 8.56571 11.4501C8.31959 11.4917 8.07155 11.5064 7.8258 11.4953C6.5146 11.4407 5.38974 10.6647 4.83771 9.55389L2.52418 5.54674C1.76575 7.24342 1.80376 9.26747 2.80404 11C3.81294 12.7475 5.56813 13.7954 7.43459 13.9738ZM5.00019 2.80386C4.22219 3.25304 3.58283 3.85015 3.09715 4.53915L4.58571 7.11742C4.94941 5.71465 6.16124 4.65352 7.64124 4.51397L7.68118 4.51033C7.83386 4.49628 7.98779 4.4922 8.14195 4.49837L12.873 4.49839C11.0969 2.0206 7.69573 1.24759 5.00019 2.80386ZM7.97256 5.49837C7.91118 5.4984 7.85031 5.50065 7.79004 5.50503L7.75173 5.50823C6.97838 5.58575 6.25223 6.02168 5.83395 6.74616C5.14359 7.94189 5.55328 9.47087 6.74901 10.1612C7.20527 10.4246 7.71005 10.5279 8.19824 10.4884C9.47385 10.375 10.4739 9.30347 10.4739 7.99837C10.4739 6.61811 9.35535 5.4991 7.97526 5.49837H7.97256Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'logo-codepen'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.53218 5.5873C1.36714 5.70019 1.29592 5.88732 1.31854 6.06428L1.31854 9.93573C1.29592 10.1127 1.36714 10.2998 1.53218 10.4127L7.71758 14.6433C7.88776 14.7597 8.11195 14.7597 8.28213 14.6433L14.4675 10.4127C14.6286 10.3026 14.7003 10.1217 14.6826 9.94852V6.05151C14.7003 5.87837 14.6286 5.69748 14.4675 5.58731L8.28212 1.35671C8.11194 1.24031 7.88776 1.24031 7.71757 1.35671L1.53218 5.5873ZM2.43442 6.00001L7.57485 2.48413V5.45433L4.60573 7.48511L2.43442 6.00001ZM8.42485 5.45433V2.48413L13.5653 6.00001L11.394 7.48511L8.42485 5.45433ZM3.85291 8.00001L2.16854 9.15206V6.84796L3.85291 8.00001ZM13.8326 6.84696V9.15307L12.1468 8.00001L13.8326 6.84696ZM11.394 8.51492L13.5653 10L8.42485 13.5159V10.5457L11.394 8.51492ZM7.57485 10.5457V13.5159L2.43442 10L4.60573 8.51491L7.57485 10.5457ZM10.6412 8.00001L7.99985 9.80657L5.35855 8.00001L7.99985 6.19345L10.6412 8.00001Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'logo-github-filled'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1C4.13483 1 1 4.21349 1 8.17696C1 11.348 3.0055 14.0381 5.78742 14.9873C6.13683 15.0537 6.25 14.8312 6.25 14.6422V13.3061C4.30283 13.7403 3.89742 12.4592 3.89742 12.4592C3.57892 11.6297 3.11983 11.409 3.11983 11.409C2.48458 10.9634 3.16825 10.973 3.16825 10.973C3.87117 11.0232 4.241 11.7128 4.241 11.7128C4.86517 12.8097 5.87842 12.4927 6.278 12.3091C6.34042 11.8456 6.52183 11.5286 6.7225 11.3498C5.16792 11.1674 3.53342 10.5519 3.53342 7.80256C3.53342 7.01848 3.807 6.37854 4.25442 5.87615C4.18208 5.69493 3.94233 4.96467 4.32267 3.97664C4.32267 3.97664 4.91067 3.78406 6.24825 4.71228C6.8065 4.55319 7.405 4.47365 8 4.47066C8.595 4.47365 9.19408 4.55319 9.7535 4.71228C11.0899 3.78406 11.6768 3.97664 11.6768 3.97664C12.0577 4.96527 11.8179 5.69553 11.7456 5.87615C12.1947 6.37854 12.466 7.01908 12.466 7.80256C12.466 10.5591 10.8286 11.1662 9.26992 11.3438C9.52075 11.5663 9.75 12.0029 9.75 12.6727V14.6422C9.75 14.833 9.862 15.0573 10.2172 14.9867C12.9968 14.0364 15 11.3468 15 8.17696C15 4.21349 11.8658 1 8 1Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'logo-github'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.50039 14.5V12.6941H4.59414C3.87089 12.6941 3.28457 12.1078 3.28455 11.3846C3.28455 11.1308 3.07878 10.925 2.82496 10.925H2.09473V10.075H2.82496C2.88111 10.075 2.93644 10.0785 2.99073 10.0854C3.02585 10.0898 3.06053 10.0957 3.09473 10.1028C3.51724 10.1913 3.86489 10.4834 4.03033 10.8718C4.09742 11.0293 4.13455 11.2026 4.13455 11.3846C4.13456 11.6063 4.29153 11.7913 4.50039 11.8346C4.53066 11.8409 4.56201 11.8441 4.59414 11.8441H5.50039V11.4628C5.50039 11.3371 5.51221 11.2129 5.53515 11.0915C5.57033 10.9053 5.63168 10.7258 5.71663 10.5583C5.39228 10.4479 5.08476 10.3144 4.79775 10.1606L4.77682 10.1493C4.27921 9.88006 3.84399 9.54951 3.49058 9.17236C2.86084 8.5003 2.49093 7.68026 2.49093 6.79514C2.49093 5.95029 2.82795 5.16473 3.40626 4.51055L3.36157 4.29107C3.16545 3.32799 3.36011 2.32645 3.90269 1.50695C4.88369 1.44681 5.84838 1.779 6.58437 2.43038L6.93558 2.74123C7.27093 2.69292 7.61713 2.66764 7.97116 2.66764C8.36121 2.66764 8.74174 2.69833 9.10872 2.75668L9.47732 2.43045C10.2133 1.77907 11.178 1.44688 12.159 1.50701C12.7016 2.32652 12.8962 3.32806 12.7001 4.29114L12.6324 4.6235C13.1516 5.25433 13.4514 5.99837 13.4514 6.79514C13.4514 8.17549 12.5517 9.39757 11.17 10.1469C10.8833 10.3024 10.5759 10.4375 10.2515 10.5494C10.3621 10.7498 10.4379 10.9685 10.4747 11.1962C10.4917 11.3011 10.5004 11.4079 10.5004 11.5156V14.5H5.50039ZM7.07815 3.73101L6.61969 3.79705L5.92162 3.17922C5.51701 2.82113 5.01772 2.59517 4.48997 2.52415C4.2876 3.01671 4.23364 3.56208 4.34146 4.09153L4.48561 4.79943L4.15547 5.17288C3.71402 5.67224 3.49093 6.22919 3.49093 6.79514C3.49093 7.89333 4.38156 9.04753 6.03885 9.61164L7.12962 9.98291L6.60851 11.0106C6.53829 11.149 6.50039 11.3035 6.50039 11.4628V13.5H9.50039V11.5156C9.50039 11.3448 9.45674 11.179 9.37594 11.0325L8.80183 9.99188L9.9253 9.60416C11.5692 9.03682 12.4514 7.88849 12.4514 6.79514C12.4514 6.26048 12.2527 5.73566 11.8603 5.25899L11.5574 4.89099L11.7202 4.0916C11.828 3.56215 11.7741 3.01677 11.5717 2.52422C11.044 2.59524 10.5447 2.82119 10.1401 3.17929L9.41795 3.8184L8.9517 3.74427C8.63682 3.69421 8.3088 3.66764 7.97116 3.66764C7.6647 3.66764 7.36615 3.68953 7.07815 3.73101Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'logo-ie-filled'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5662 9.0391H14.9633C14.9895 8.81289 15 8.58172 15 8.34541C15 7.23681 14.69 6.19698 14.1491 5.30153C14.7086 3.8739 14.6887 2.66224 13.9396 1.93809C13.2273 1.25711 11.3162 1.36766 9.15576 2.28633C8.99595 2.27472 8.8346 2.26875 8.67172 2.26875C5.70638 2.26875 3.21841 4.22822 2.53076 6.86845C3.46096 5.72486 4.43959 4.89573 5.74691 4.29191C5.62804 4.39887 4.93446 5.06098 4.8178 5.17308C1.37033 8.48243 0.283168 12.8054 1.45294 13.9289C2.34213 14.7826 3.95356 14.6384 5.80456 13.7679C6.66526 14.1888 7.63947 14.4262 8.67162 14.4262C11.451 14.4262 13.8065 12.7082 14.6598 10.3157H11.2365C10.7654 11.1501 9.8442 11.718 8.78689 11.718C7.72958 11.718 6.80825 11.1501 6.33721 10.3157C6.12782 9.93872 6.00744 9.50652 6.00744 9.04905V9.0391H11.5662ZM6.01254 7.43574C6.09106 6.09377 7.25309 5.02314 8.67162 5.02314C10.0901 5.02314 11.2522 6.09374 11.3307 7.43574H6.01254ZM13.9086 2.61293C14.3911 3.08112 14.3791 3.9425 13.9664 5.01774C13.2593 3.98258 12.2319 3.16688 11.0191 2.70112C12.3159 2.16718 13.3708 2.09645 13.9086 2.61293ZM2.34533 13.7158C1.72963 13.1245 1.91523 11.8832 2.7084 10.3878C3.20214 11.7182 4.16419 12.835 5.40444 13.5545C4.03109 14.1531 2.907 14.2547 2.34533 13.7158Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'logo-ie'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.34101 7.31389C5.61303 7.00343 5.90178 6.69471 6.20618 6.39031L6.21573 6.38077H9.82136C9.61419 5.57584 8.8835 4.98109 8.01391 4.98109C7.92741 4.98109 7.8423 4.98697 7.75893 4.99836C8.13148 4.70069 8.50405 4.42796 8.87221 4.182C9.99838 4.54437 10.8133 5.60067 10.8133 6.84733V7.31389H5.34101Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M3.74372 14.9996C3.02134 15.0093 2.28332 14.8198 1.73174 14.2683C1.18016 13.7167 0.990659 12.9787 1.00035 12.2563C1.00999 11.538 1.21364 10.757 1.53993 9.97391C1.58589 9.86359 1.63467 9.75234 1.68618 9.64027C1.55291 9.12028 1.48205 8.57528 1.48205 8.01373C1.48205 4.40629 4.40646 1.48188 8.01391 1.48188C8.5755 1.48188 9.12054 1.55276 9.64057 1.68605C9.75254 1.63458 9.86369 1.58585 9.97391 1.53993C10.757 1.21364 11.538 1.00999 12.2563 1.00035C12.9787 0.990659 13.7167 1.18016 14.2683 1.73174C14.8198 2.28332 15.0093 3.02134 14.9996 3.74372C14.99 4.46198 14.7864 5.243 14.4601 6.02609C14.418 6.12698 14.3736 6.22866 14.327 6.33102C14.4697 6.86789 14.5458 7.43193 14.5458 8.01373C14.5458 8.35498 14.5196 8.69041 14.469 9.01805L14.4079 9.41342H6.20646C6.41363 10.2184 7.14431 10.8131 8.01391 10.8131C8.62418 10.8131 9.16601 10.5207 9.50728 10.0663L9.64726 9.87998H14.3144L14.045 10.5261C13.061 12.8857 10.7318 14.5456 8.01391 14.5456C7.43215 14.5456 6.86815 14.4695 6.33132 14.3268C6.22886 14.3736 6.12708 14.418 6.02609 14.4601C5.243 14.7864 4.46198 14.99 3.74372 14.9996ZM5.03857 13.8301C4.08492 13.3413 3.26722 12.6249 2.6572 11.7525C2.76124 11.4064 2.90313 11.0414 3.08047 10.6631C4.02537 12.4189 5.88026 13.6125 8.01391 13.6125C10.0856 13.6125 11.8954 12.4871 12.8637 10.8131H10.1004C9.58841 11.3852 8.84327 11.7462 8.01391 11.7462C6.46787 11.7462 5.21454 10.4929 5.21454 8.94686V8.4803H13.5935C13.6062 8.32653 13.6126 8.17093 13.6126 8.01373C13.6126 5.92145 12.4649 4.09723 10.7648 3.13627C11.1581 2.9676 11.535 2.83943 11.8885 2.75462C12.6994 3.35308 13.367 4.13463 13.8302 5.03826C14.1954 3.88522 14.1504 2.9335 13.6084 2.39156C12.333 1.11613 8.7881 2.59318 5.69064 5.69064C2.59318 8.7881 1.11613 12.333 2.39156 13.6084C2.93355 14.1504 3.88539 14.1954 5.03857 13.8301ZM8.28136 2.42128C8.19273 2.41711 8.10357 2.415 8.01391 2.415C4.92181 2.415 2.41517 4.92164 2.41517 8.01373C2.41517 8.10336 2.41728 8.1925 2.42145 8.28109C3.09224 7.19746 3.97858 6.08307 5.03082 5.03082C6.08316 3.97849 7.19765 3.09209 8.28136 2.42128Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'logo-qq'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.4763 9.77042C13.3516 9.3686 13.1814 8.89989 13.0085 8.45074L12.3787 6.87895C12.3787 6.8603 12.3873 6.55085 12.3873 6.39113C12.3873 3.70171 11.1177 1 7.99644 1C4.87517 1 3.606 3.70171 3.606 6.39022C3.606 6.54994 3.61419 6.85939 3.61464 6.87804L2.98438 8.44983C2.81191 8.89989 2.64172 9.3686 2.51658 9.76951C1.92136 11.6849 2.1143 12.4776 2.26129 12.4953C2.57619 12.5336 3.48996 11.0532 3.48996 11.0532C3.48996 11.9106 3.93137 13.0291 4.88609 13.8369C4.52887 13.947 4.09155 14.1163 3.80987 14.3238C3.55731 14.5108 3.58871 14.701 3.63421 14.7788C3.83444 15.116 7.06629 14.9941 7.99917 14.889C8.93251 14.9941 12.1644 15.1165 12.3641 14.7788C12.4096 14.7019 12.4415 14.5117 12.1885 14.3238C11.9072 14.1163 11.469 13.947 11.1118 13.8369C12.0674 13.0291 12.5079 11.9106 12.5079 11.0532C12.5079 11.0532 13.4181 12.5336 13.7343 12.4953C13.879 12.4785 14.072 11.6858 13.4763 9.77042Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'logo-wechat'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 6.55014C1 4.20298 3.26552 2.30005 6.06021 2.30005C8.58473 2.30005 10.6089 3.85282 10.99 5.88329C10.9678 5.88221 10.9496 5.88122 10.9334 5.88034C10.8834 5.87761 10.8529 5.87594 10.7832 5.87594C8.23432 5.87594 6.16822 7.61153 6.16822 9.75217C6.16822 10.1132 6.22806 10.4623 6.3381 10.7939C6.24606 10.798 6.15351 10.8005 6.06021 10.8005C5.48273 10.8005 4.92529 10.7173 4.40842 10.5675C4.36138 10.553 4.31156 10.5453 4.25971 10.5453C4.16247 10.5453 4.07436 10.5751 3.99119 10.6234L2.88316 11.268C2.85235 11.2861 2.82256 11.2996 2.78579 11.2996C2.69261 11.2996 2.61718 11.2237 2.61718 11.1297C2.61718 11.098 2.62656 11.0663 2.63575 11.0354C2.63873 11.0254 2.64169 11.0154 2.64431 11.0055C2.64974 10.985 2.75058 10.6058 2.83294 10.2961L2.87225 10.1482C2.88214 10.112 2.89013 10.0776 2.89013 10.04C2.89013 9.92547 2.83409 9.82443 2.74839 9.76282C1.68168 8.98377 1 7.83098 1 6.55014ZM3.77516 5.1902C3.77516 5.52312 4.04305 5.79315 4.37368 5.79315C4.70381 5.79315 4.97169 5.52312 4.97169 5.1902C4.97169 4.85715 4.70381 4.58725 4.37368 4.58725C4.04305 4.58725 3.77516 4.85715 3.77516 5.1902ZM7.14872 5.1902C7.14872 5.52312 7.4166 5.79303 7.74698 5.79303C8.07736 5.79303 8.34525 5.52312 8.34525 5.1902C8.34525 4.85715 8.07736 4.58725 7.74698 4.58725C7.4166 4.58725 7.14872 4.85715 7.14872 5.1902Z" fill="${currentColor}" fill-opacity="0.9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 9.7521C15 10.8193 14.432 11.7799 13.5431 12.4293C13.4716 12.4806 13.4249 12.565 13.4249 12.6601C13.4249 12.6914 13.4316 12.7203 13.4397 12.7504C13.5109 13.0173 13.6245 13.4448 13.6298 13.4648C13.632 13.4734 13.6346 13.482 13.6372 13.4908C13.6447 13.5162 13.6525 13.5422 13.6525 13.5685C13.6525 13.6466 13.5896 13.7101 13.5119 13.7101C13.4813 13.7101 13.4564 13.6984 13.4305 13.6837L12.5075 13.1464C12.4381 13.106 12.3645 13.0812 12.2837 13.0812C12.2404 13.0812 12.1988 13.0879 12.1597 13.0999C11.7289 13.2247 11.2642 13.294 10.7831 13.294C8.45434 13.294 6.56624 11.7083 6.56624 9.7521C6.56624 7.79592 8.45434 6.21044 10.7831 6.21044C13.1122 6.21044 15 7.79592 15 9.7521ZM8.85103 8.61884C8.85103 8.91182 9.08683 9.14927 9.37754 9.14927C9.66836 9.14927 9.90404 8.91182 9.90404 8.61884C9.90404 8.32573 9.66836 8.08815 9.37754 8.08815C9.08683 8.08815 8.85103 8.32573 8.85103 8.61884ZM11.6626 8.61884C11.6626 8.91182 11.898 9.14927 12.1888 9.14927C12.4797 9.14927 12.7153 8.91182 12.7153 8.61884C12.7153 8.32573 12.4797 8.08815 12.1888 8.08815C11.898 8.08815 11.6626 8.32573 11.6626 8.61884Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'logo-wecom'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2529 3.95905C11.623 4.34224 11.9247 4.77013 12.149 5.23125C12.4506 5.85106 12.6036 6.50835 12.6036 7.18432C12.6036 7.29806 12.5985 7.41153 12.5897 7.52475C12.5862 7.5206 12.5827 7.51641 12.5792 7.51223C12.5706 7.50189 12.562 7.49158 12.5524 7.48186C12.2833 7.21292 11.8727 7.17569 11.5621 7.36581C11.5626 7.35453 11.5632 7.34324 11.5638 7.33195C11.566 7.2882 11.5682 7.2444 11.5682 7.20068C11.5682 6.66962 11.4476 6.15259 11.2098 5.66365C11.0305 5.2954 10.7886 4.95239 10.4908 4.64429C9.72201 3.84918 8.63902 3.33615 7.44127 3.2C7.22372 3.17527 7.00861 3.16278 6.80201 3.16278C6.6052 3.16278 6.39924 3.17437 6.18993 3.19717C4.98651 3.32791 3.89721 3.83823 3.12244 4.63412C2.82336 4.94144 2.58018 5.28381 2.39959 5.65116C2.15783 6.14332 2.0352 6.66459 2.0352 7.20068C2.0352 7.89133 2.24709 8.57464 2.64767 9.1768C2.81782 9.43274 3.0203 9.67141 3.25099 9.89025C3.33317 9.96818 3.41844 10.0438 3.5077 10.1164C3.56579 10.1638 3.62118 10.2067 3.67669 10.2479C3.78579 10.3273 3.85122 10.4565 3.85122 10.5933C3.85122 10.6427 3.84079 10.6869 3.83036 10.7236C3.80575 10.8179 3.77664 10.9291 3.74766 11.0392C3.7385 11.0741 3.72936 11.1089 3.7204 11.1431C3.70378 11.2064 3.68778 11.2673 3.67347 11.322C3.66198 11.3661 3.65166 11.4053 3.64287 11.4387C3.63737 11.4596 3.63247 11.4783 3.62826 11.4944L3.58885 11.6532C3.58885 11.692 3.61924 11.7235 3.6566 11.7235C3.66793 11.7235 3.68043 11.7188 3.70245 11.7059L3.70361 11.7052L4.76612 11.079C4.77326 11.0748 4.7804 11.0713 4.78753 11.0679C4.79212 11.0656 4.7967 11.0634 4.80129 11.061C4.89145 11.0143 4.98058 10.9899 5.07242 10.9899C5.13115 10.9899 5.18873 10.9987 5.24283 11.0161C5.50907 11.0939 5.78458 11.1509 6.06319 11.188C6.07587 11.1897 6.08855 11.1914 6.10123 11.1932C6.13079 11.1973 6.16036 11.2015 6.18993 11.2047C6.39293 11.2271 6.59876 11.2385 6.80201 11.2385C7.00887 11.2385 7.22385 11.2258 7.44127 11.2011C7.79947 11.1604 8.14609 11.0848 8.47789 10.9794C8.44865 11.2853 8.59574 11.5945 8.87989 11.757C8.92755 11.7842 8.97688 11.806 9.02711 11.8226C8.56277 11.9893 8.07357 12.1065 7.56492 12.1644C7.30641 12.1937 7.04957 12.2086 6.80201 12.2086C6.55908 12.2086 6.31307 12.1952 6.07066 12.1685C5.6979 12.1275 5.34407 12.0622 4.98767 11.9599L3.33162 12.7911C3.32536 12.7955 3.31886 12.7992 3.31232 12.8029C3.30931 12.8046 3.30629 12.8063 3.30329 12.8081C3.30166 12.809 3.29994 12.8097 3.29828 12.8106C3.29784 12.8108 3.2974 12.811 3.29698 12.8113C3.23167 12.8488 3.15709 12.8718 3.07646 12.8718C2.84526 12.8718 2.65733 12.6952 2.6344 12.4702C2.6339 12.4648 2.63318 12.4595 2.63247 12.4541C2.63118 12.4445 2.6299 12.435 2.6299 12.4253C2.6299 12.4164 2.63107 12.4078 2.63225 12.3993C2.63298 12.394 2.6337 12.3887 2.63415 12.3834C2.63443 12.3804 2.63471 12.3775 2.63499 12.3745C2.63643 12.359 2.63786 12.3436 2.6411 12.3287C2.64507 12.3108 2.65148 12.294 2.65792 12.2771C2.65858 12.2753 2.65925 12.2736 2.65991 12.2719L2.83392 10.9028V10.902C2.44841 10.5602 2.02954 10.075 1.77334 9.6897C1.2674 8.92911 1 8.0629 1 7.18432C1 6.50204 1.1556 5.8396 1.46215 5.21554C1.68795 4.75571 1.99102 4.32872 2.36301 3.94643C3.30535 2.97833 4.62238 2.35826 6.07156 2.20087C6.32054 2.17369 6.56617 2.16003 6.80201 2.16003C7.04931 2.16003 7.30589 2.17498 7.56492 2.20434C9.00753 2.36831 10.3172 2.9916 11.2529 3.95905Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M11.3472 9.0505C11.0323 8.73544 11.0323 8.2246 11.3472 7.90955C11.6622 7.59449 12.1731 7.59449 12.4881 7.90955C12.5909 8.01246 12.66 8.13611 12.6958 8.26698C12.7034 8.29519 12.7095 8.32365 12.7141 8.35225C12.7183 8.37814 12.7211 8.40428 12.7227 8.43056C12.8158 8.89632 13.0426 9.34057 13.4038 9.70161C13.4222 9.72002 13.4408 9.73793 13.4596 9.75557C13.4691 9.76214 13.4781 9.76936 13.4866 9.77786C13.4914 9.78275 13.4959 9.78778 13.5 9.79306C13.5615 9.86879 13.557 9.98021 13.4866 10.0507C13.4111 10.126 13.2892 10.126 13.2137 10.0507C13.1884 10.0232 13.1627 9.99592 13.136 9.96939C12.7667 9.60011 12.3105 9.37122 11.833 9.28222C11.8168 9.28054 11.8006 9.27822 11.7843 9.27552C11.7682 9.27281 11.7521 9.26972 11.7362 9.26599C11.5937 9.23314 11.4582 9.16153 11.3472 9.0505Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M14.7637 10.1909C14.4488 9.87587 13.9378 9.87587 13.6228 10.1909C13.5117 10.302 13.4401 10.4373 13.4073 10.5799C13.4037 10.5959 13.4004 10.612 13.3977 10.6281C13.3952 10.6443 13.3927 10.6605 13.391 10.6766C13.302 11.1541 13.0731 11.6105 12.7037 11.9798C12.6772 12.0064 12.65 12.0322 12.6226 12.0572L12.6227 12.0574C12.5472 12.1327 12.5472 12.2548 12.6227 12.3301C12.693 12.4006 12.8045 12.4051 12.8803 12.3438C12.8853 12.3396 12.8905 12.335 12.8955 12.3301C12.9039 12.3217 12.9111 12.3127 12.9178 12.3032C12.9353 12.2845 12.9532 12.2658 12.9716 12.2474C13.3327 11.8864 13.7769 11.6594 14.2428 11.5666C14.269 11.5649 14.2951 11.5621 14.321 11.5577C14.3497 11.5533 14.3781 11.547 14.4063 11.5394C14.5373 11.5036 14.6611 11.4345 14.7637 11.3319C15.0788 11.0168 15.0788 10.506 14.7637 10.1909Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M10.3432 11.4664C10.2726 11.5367 10.2682 11.6481 10.3295 11.7239C10.3336 11.7291 10.3381 11.7342 10.3432 11.7392C10.3515 11.7476 10.3607 11.7548 10.3701 11.7615C10.3889 11.7789 10.4076 11.7971 10.4259 11.8153C10.7869 12.1765 11.0139 12.6207 11.107 13.0865C11.1085 13.1126 11.1114 13.1388 11.1157 13.1648C11.1202 13.1933 11.1263 13.2217 11.1339 13.2499C11.1696 13.3809 11.2387 13.5044 11.3415 13.6074C11.6566 13.9224 12.1674 13.9224 12.4824 13.6074C12.7974 13.2923 12.7974 12.7815 12.4824 12.4664C12.3713 12.3554 12.2358 12.2838 12.0934 12.2509C12.0775 12.2473 12.0614 12.2441 12.0453 12.2414C12.0292 12.2387 12.013 12.2365 11.9965 12.2347C11.5192 12.1458 11.0628 11.9168 10.6936 11.5475C10.667 11.521 10.6411 11.4938 10.6161 11.4662L10.616 11.4664C10.5782 11.4286 10.5289 11.4098 10.4796 11.4098C10.4301 11.4098 10.3808 11.4286 10.3432 11.4664Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M10.4318 10.889C10.4345 10.8727 10.4367 10.8565 10.4385 10.8402C10.5277 10.363 10.7566 9.90652 11.1257 9.53723C11.1524 9.5107 11.1796 9.48481 11.2071 9.45969L11.207 9.45956C11.2823 9.38421 11.2823 9.26211 11.207 9.18676C11.1365 9.1163 11.025 9.11179 10.9494 9.17323C10.9441 9.17748 10.9391 9.18186 10.9342 9.18676C10.9258 9.19526 10.9185 9.20427 10.9119 9.21368C10.8943 9.23261 10.8763 9.25103 10.8579 9.26958C10.497 9.63049 10.0526 9.85744 9.58675 9.95057C9.56074 9.95211 9.53459 9.95495 9.50844 9.9592C9.47985 9.96371 9.45138 9.96989 9.42343 9.97762C9.29244 10.0133 9.16865 10.0823 9.06587 10.1851C8.75068 10.5002 8.75068 11.011 9.06587 11.3262C9.38092 11.6413 9.89176 11.6413 10.2068 11.3262C10.3178 11.215 10.3896 11.0795 10.4224 10.9372C10.426 10.9212 10.4293 10.9051 10.4318 10.889Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'logo-windows-filled'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 2.50403H2.5V7.50403H7.5V2.50403Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M13.5 2.50403H8.5V7.50403H13.5V2.50403Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M8.5 8.50403H13.5V13.504H8.5V8.50403Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M7.5 8.50403H2.5V13.504H7.5V8.50403Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'logo-windows'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V3C2 2.44772 2.44772 2 3 2H13ZM7.5 3H3L3 7.5H7.5V3ZM8.5 13H13V8.5H8.5V13ZM7.5 8.5H3L3 13H7.5V8.5ZM8.5 7.5H13V3H8.5V7.5Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	logout(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 3V5H10V2.5C10 2.22386 9.77614 2 9.5 2H1.5C1.22386 2 1 2.22386 1 2.5V13.5C1 13.7761 1.22386 14 1.5 14H9.5C9.77614 14 10 13.7761 10 13.5V11H9V13H2V3H9Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M11.2316 5.25423L13.4774 7.50001L5.99994 7.49999L5.99994 8.49999L13.4774 8.50001L11.2316 10.7458L11.9387 11.4529L15.038 8.35356C15.2333 8.1583 15.2333 7.84172 15.038 7.64646L11.9387 4.54712L11.2316 5.25423Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	mail(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.49902 3.9989C1.49902 3.44662 1.94674 2.9989 2.49902 2.9989H13.499C14.0513 2.9989 14.499 3.44662 14.499 3.9989V11.9989C14.499 12.5512 14.0513 12.9989 13.499 12.9989H2.49902C1.94674 12.9989 1.49902 12.5512 1.49902 11.9989V3.9989ZM13.0976 3.9989H2.90041L7.99902 7.39798L13.0976 3.9989ZM2.49902 4.93316L2.49902 11.9989H13.499V4.93316L7.99902 8.59983L2.49902 4.93316Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'menu-fold'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99951 3.98621L13.9989 4.00001L14.0001 3.00001L2.00066 2.98621L1.99951 3.98621Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M7.50009 8.50001H13.9995V7.50001H7.50009V8.50001Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M1.99951 12.9862L13.9989 13L14.0001 12L2.00066 11.9862L1.99951 12.9862Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M5.96675 7.59308C6.23342 7.79308 6.23342 8.19308 5.96675 8.39308L2.80009 10.7681C2.47047 11.0153 2.00009 10.7801 2.00009 10.3681L2.00009 5.61808C2.00009 5.20605 2.47047 4.97086 2.80009 5.21808L5.96675 7.59308ZM3.00009 6.61808L3.00009 9.36808L4.83342 7.99308L3.00009 6.61808Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'menu-unfold'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0005 12.0138L2.00115 12L2 13L13.9994 13.0138L14.0005 12.0138Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M8.49997 7.5L2.00058 7.5L2.00058 8.5L8.49997 8.5V7.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M14.0005 3.0138L2.00115 3L2 4L13.9994 4.0138L14.0005 3.0138Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M10.0333 8.40693C9.76663 8.20693 9.76663 7.80693 10.0333 7.60693L13.2 5.23193C13.5296 4.98472 14 5.21991 14 5.63193L14 10.3819C14 10.794 13.5296 11.0291 13.2 10.7819L10.0333 8.40693ZM13 9.38193L13 6.63193L11.1666 8.00693L13 9.38193Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'minus-circle-filled'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM11.5 8.5H4.5V7.5H11.5V8.5Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'minus-circle'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 8.5H11.5V7.5H4.5V8.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'minus-rectangle-filled'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 13C2 13.5523 2.44772 14 3 14L13 14C13.5523 14 14 13.5523 14 13L14 3C14 2.44772 13.5523 2 13 2H3C2.44772 2 2 2.44771 2 3V13ZM11 8.5H5V7.5H11V8.5Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'minus-rectangle'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 8.5H11V7.5H5V8.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M3 14C2.44772 14 2 13.5523 2 13V3C2 2.44771 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14ZM3 13L13 13L13 3L3 3L3 13Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	mirror(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.50024 1H8.50024V15H7.50024V1Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M14.7196 12.4367C14.7504 12.6777 14.6034 12.906 14.3712 12.9777C14.2991 13 14.1963 13 13.9907 13H10.6501C10.5106 13 10.4409 13 10.3834 12.9862C10.2006 12.9423 10.0578 12.7995 10.0139 12.6167C10.0001 12.5592 10.0001 12.4895 10.0001 12.35V5.0008C10.0001 4.47031 10.0001 4.20506 10.041 4.11027C10.1768 3.79537 10.5821 3.70757 10.8361 3.93804C10.9126 4.00742 11.0223 4.24889 11.2418 4.73183L14.5824 12.081C14.6675 12.2682 14.71 12.3618 14.7196 12.4367ZM11.0001 12H13.4471L11.0001 6.61661V12Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M1.62907 12.9777C1.70117 13 1.80398 13 2.00959 13H5.35014C5.48959 13 5.55932 13 5.61686 12.9862C5.79969 12.9423 5.94243 12.7995 5.98633 12.6167C6.00014 12.5592 6.00014 12.4895 6.00014 12.35V5.0008C6.00014 4.47031 6.00014 4.20506 5.95925 4.11027C5.82341 3.79537 5.4181 3.70757 5.16413 3.93804C5.08768 4.00742 4.97792 4.24889 4.7584 4.73183L1.41786 12.081C1.33277 12.2682 1.29023 12.3618 1.28067 12.4367C1.24989 12.6777 1.39688 12.906 1.62907 12.9777ZM5.00014 6.61661V12H2.55315L5.00014 6.61661Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'mobile-vibrate'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 13H9.5V12H6.5V13Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M5 1.5C4.44772 1.5 4 1.94772 4 2.5V14C4 14.5523 4.44772 15 5 15H11C11.5523 15 12 14.5523 12 14V2.5C12 1.94772 11.5523 1.5 11 1.5H5ZM11 2.5V14H5V2.5H11Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M2 4V13H3V4H2Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M13 4V13H14V4H13Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	mobile(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 13H9.5V12H6.5V13Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M3.5 2.5C3.5 1.94772 3.94772 1.5 4.5 1.5H11.5C12.0523 1.5 12.5 1.94772 12.5 2.5V14C12.5 14.5523 12.0523 15 11.5 15H4.5C3.94772 15 3.5 14.5523 3.5 14V2.5ZM4.5 2.5L4.5 14H11.5V2.5H4.5Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'money-circle'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 7.5H8.5V8.5H10.5V9.5H8.5V12H7.5V9.5H5.5V8.5H7.5V7.5H5.5V6.5H6.95969L5.60956 4.81235L6.39043 4.18765L8 6.19961L9.60956 4.18765L10.3904 4.81235L9.04031 6.5H10.5V7.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 0.999998 1 4.134 1 8C0.999998 11.866 4.134 15 8 15C11.866 15 15 11.866 15 8ZM14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	more(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 4C8.55225 4 9 3.55228 9 3C9 2.44772 8.55225 2 8 2C7.44775 2 7 2.44772 7 3C7 3.55228 7.44775 4 8 4Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M8 9C8.55225 9 9 8.55228 9 8C9 7.44772 8.55225 7 8 7C7.44775 7 7 7.44772 7 8C7 8.55228 7.44775 9 8 9Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M9 13C9 13.5523 8.55225 14 8 14C7.44775 14 7 13.5523 7 13C7 12.4477 7.44775 12 8 12C8.55225 12 9 12.4477 9 13Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	move(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 1C4.44772 1 4 1.44772 4 2C4 2.55228 4.44772 3 5 3C5.55228 3 6 2.55228 6 2C6 1.44772 5.55228 1 5 1Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M11 1C10.4477 1 10 1.44772 10 2C10 2.55228 10.4477 3 11 3C11.5523 3 12 2.55228 12 2C12 1.44772 11.5523 1 11 1Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M4 6C4 5.44772 4.44772 5 5 5C5.55228 5 6 5.44772 6 6C6 6.55228 5.55228 7 5 7C4.44772 7 4 6.55228 4 6Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M11 5C10.4477 5 10 5.44772 10 6C10 6.55228 10.4477 7 11 7C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M4 10C4 9.44771 4.44772 9 5 9C5.55228 9 6 9.44771 6 10C6 10.5523 5.55228 11 5 11C4.44772 11 4 10.5523 4 10Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M5 13C4.44772 13 4 13.4477 4 14C4 14.5523 4.44772 15 5 15C5.55228 15 6 14.5523 6 14C6 13.4477 5.55228 13 5 13Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M10 10C10 9.44771 10.4477 9 11 9C11.5523 9 12 9.44771 12 10C12 10.5523 11.5523 11 11 11C10.4477 11 10 10.5523 10 10Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M11 13C10.4477 13 10 13.4477 10 14C10 14.5523 10.4477 15 11 15C11.5523 15 12 14.5523 12 14C12 13.4477 11.5523 13 11 13Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	next(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2H13L13 14H12L12 2Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M10.8512 7.58022C11.1557 7.77724 11.1557 8.22276 10.8512 8.41979L3.77162 13.0007C3.43894 13.216 3 12.9772 3 12.5809V3.41907C3 3.02282 3.43895 2.78402 3.77163 2.99929L10.8512 7.58022ZM4 4.33814L4 11.6619L9.65923 8L4 4.33814Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'notification-filled'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.49993 2.02746V1H7.49993V2.02746C5.24996 2.27619 3.49993 4.18372 3.49993 6.5V11L2.59993 12.2C2.35272 12.5296 2.58791 13 2.99993 13H5.54994C5.78158 14.1411 6.79045 15 7.99993 15C9.20941 15 10.2183 14.1411 10.4499 13H12.9999C13.412 13 13.6471 12.5296 13.3999 12.2L12.4999 11V6.5C12.4999 4.18372 10.7499 2.27619 8.49993 2.02746Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	notification(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.49993 2.02746V1H7.49993V2.02746C5.24996 2.27619 3.49993 4.18372 3.49993 6.5V11L2.59993 12.2C2.35272 12.5296 2.58791 13 2.99993 13H5.54994C5.78158 14.1411 6.79045 15 7.99993 15C9.20941 15 10.2183 14.1411 10.4499 13H12.9999C13.412 13 13.6471 12.5296 13.3999 12.2L12.4999 11V6.5C12.4999 4.18372 10.7499 2.27619 8.49993 2.02746ZM4.49993 11.3333V6.5C4.49993 4.567 6.06693 3 7.99993 3C9.93293 3 11.4999 4.567 11.4999 6.5V11.3333L11.9999 12H3.99993L4.49993 11.3333ZM7.99993 14C7.34682 14 6.7912 13.5826 6.58528 13H9.41458C9.20866 13.5826 8.65304 14 7.99993 14Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'order-adjustment-column'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 8.49999V15H8.5V8.5L13.1566 8.5L11.4651 10.1915L12.1722 10.8986L14.7172 8.35356C14.9125 8.15829 14.9125 7.84171 14.7172 7.64645L12.1722 5.10141L11.4651 5.80852L13.1566 7.5L8.5 7.5V1H7.5V7.49999L2.84586 7.5L4.53734 5.80852L3.83023 5.10141L1.28519 7.64645C1.08993 7.84171 1.08993 8.15829 1.28519 8.35355L3.83023 10.8986L4.53734 10.1915L2.84585 8.5L7.5 8.49999Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'order-ascending'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 13.5L12 3.70712L14.1464 5.85357L14.8535 5.14646L11.9048 2.19768C11.5709 1.8638 11 2.10026 11 2.57244L11 13.5H12Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M9.5 13.5L2 13.5V12.5L9.5 12.5V13.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M2 8.50002L9.5 8.50002V7.50002L2 7.50002V8.50002Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M9.5 3.50002L2 3.50002V2.50002L9.5 2.50002V3.50002Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'order-descending'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 2.5H2V3.5L9.5 3.5V2.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M12 2.5L12 12.2929L14.1464 10.1464L14.8535 10.8536L11.9048 13.8023C11.5709 14.1362 11 13.8998 11 13.4276L11 2.5H12Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M2 7.5H9.5V8.5H2V7.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M9.5 12.5H2V13.5H9.5V12.5Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'page-first'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4053 4.45952L11.486 3.54028L7.02642 7.9999L11.486 12.4595L12.4053 11.5403L8.86489 7.9999L12.4053 4.45952ZM4.79568 4L4.79568 12L6.09568 12L6.09568 4L4.79568 4Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'page-last'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.59473 11.5405L4.51397 12.4597L8.97358 8.00009L4.51397 3.54047L3.59473 4.45971L7.13511 8.00009L3.59473 11.5405ZM11.2046 12L11.2046 3.99999L9.90459 3.99999L9.90459 12H11.2046Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'pause-circle-filled'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM6 5V11H7V5H6ZM10 5.00001H9V11H10V5.00001Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	photo(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8ZM10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10C9.10457 10 10 9.10457 10 8Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M6.05352 2C5.85291 2 5.66557 2.10026 5.55429 2.26718L4.73241 3.5H2.01C1.72834 3.5 1.5 3.72833 1.5 4.01V12.49C1.5 12.7717 1.72833 13 2.01 13H13.99C14.2716 13 14.5 12.7717 14.5 12.49V4.01C14.5 3.72834 14.2717 3.5 13.99 3.5H11.2676L10.4457 2.26718C10.3344 2.10026 10.1471 2 9.94648 2H6.05352ZM6.26759 3H9.73241L10.7324 4.5H13.5V12H2.5V4.5H5.26759L6.26759 3Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'pin-filled'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5179 1.33919C12.2975 1.11875 11.9449 1.10385 11.7067 1.30492L7.66167 4.71867L6.89055 3.94755C6.65623 3.71324 6.27633 3.71324 6.04202 3.94755L3.93734 6.05223C3.70302 6.28655 3.70302 6.66645 3.93734 6.90076L6.16478 9.12821L2.05713 13.2359L2.76424 13.943L6.87189 9.83532L9.09922 12.0626C9.33353 12.297 9.71343 12.297 9.94774 12.0626L12.0524 9.95796C12.2867 9.72364 12.2867 9.34375 12.0524 9.10943L11.2813 8.33831L14.6951 4.29331C14.8961 4.05506 14.8812 3.70252 14.6608 3.48208L12.5179 1.33919Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	pin(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5179 1.33919C12.2975 1.11875 11.9449 1.10385 11.7067 1.30492L7.66167 4.71867L6.89055 3.94755C6.65623 3.71324 6.27633 3.71324 6.04202 3.94755L3.93734 6.05223C3.70302 6.28655 3.70302 6.66645 3.93734 6.90076L6.16478 9.12821L2.05713 13.2359L2.76424 13.943L6.87189 9.83532L9.09922 12.0626C9.33353 12.297 9.71343 12.297 9.94774 12.0626L12.0524 9.95796C12.2867 9.72364 12.2867 9.34375 12.0524 9.10943L11.2813 8.33831L14.6951 4.29331C14.8961 4.05506 14.8812 3.70252 14.6608 3.48208L12.5179 1.33919ZM12.0707 2.30621L13.6938 3.92927L9.92441 8.39563L11.0625 9.53369L9.52348 11.0727L4.92729 6.4765L6.46628 4.9375L7.60435 6.07557L12.0707 2.30621Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'play-circle-filled'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 0.999998 1 4.134 1 8C0.999998 11.866 4.134 15 8 15C11.866 15 15 11.866 15 8ZM10.9844 8.22791L6.51038 10.811C6.33493 10.9123 6.11561 10.7857 6.11561 10.5831L6.11561 5.41691C6.11561 5.21432 6.33493 5.0877 6.51038 5.18899L10.9844 7.77207C11.1599 7.87337 11.1599 8.12661 10.9844 8.22791Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'play-circle-stroke'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M11.55 7.74017C11.75 7.85564 11.75 8.14432 11.55 8.25979L6.45 11.2043C6.25 11.3198 6 11.1754 6 10.9445L6 5.0555C6 4.82456 6.25 4.68022 6.45 4.79569L11.55 7.74017ZM7 6.26793V9.73204L10 7.99998L7 6.26793Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.134 15 0.999998 11.866 1 8C1 4.134 4.13401 0.999998 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" fill="${currentColor}" fill-opacity="0.9"/>
</g>
</svg>
`;
	},
	'play-circle'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M11.55 7.74017C11.75 7.85564 11.75 8.14432 11.55 8.25979L6.45 11.2043C6.25 11.3198 6 11.1754 6 10.9445L6 5.0555C6 4.82456 6.25 4.68022 6.45 4.79569L11.55 7.74017Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.134 15 0.999998 11.866 1 8C1 4.134 4.13401 0.999998 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" fill="${currentColor}" fill-opacity="0.9"/>
</g>
</svg>
`;
	},
	play(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.55 7.74018C11.75 7.85565 11.75 8.14433 11.55 8.2598L6.45 11.2043C6.25 11.3198 6 11.1754 6 10.9445V5.05551C6 4.82457 6.25 4.68024 6.45 4.79571L11.55 7.74018Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	poweroff(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 1V8H8.5V1H7.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M1.5 8.50007C1.5 6.00518 2.90561 3.83859 4.96813 2.74901L5.46865 3.61594C3.70487 4.53193 2.5 6.3753 2.5 8.50008C2.5 11.5376 4.96243 14.0001 8 14.0001C11.0376 14.0001 13.5 11.5376 13.5 8.50008C13.5 6.37522 12.295 4.53179 10.5311 3.61583L11.0317 2.7489C13.0943 3.83844 14.5 6.0051 14.5 8.50008C14.5 12.0899 11.5898 15.0001 8 15.0001C4.41015 15.0001 1.5 12.0899 1.5 8.50007Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'precise-monitor'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M7.5 1.5V5H8.5V1.5H7.5ZM6.23223 5.52513L2.6967 1.98959L1.98959 2.6967L5.52513 6.23223L6.23223 5.52513ZM9.76777 5.52513L13.3033 1.98959L14.0104 2.6967L10.4749 6.23223L9.76777 5.52513ZM9 8C9 8.55229 8.55229 9 8 9C7.62986 9 7.30669 8.7989 7.13378 8.5H1.5V7.5H7.13378C7.30669 7.2011 7.62986 7 8 7C8.55229 7 9 7.44772 9 8ZM5.52513 9.76777L1.98959 13.3033L2.6967 14.0104L6.23223 10.4749L5.52513 9.76777ZM10.4749 9.76777L14.0104 13.3033L13.3033 14.0104L9.76777 10.4749L10.4749 9.76777ZM14.5 7.5H11V8.5H14.5V7.5ZM7.5 14.5V11H8.5V14.5H7.5Z" fill="${currentColor}"/>
</g>
</svg>
`;
	},
	previous(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14H3V2H4L4 14Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M5.14876 8.41978C4.84426 8.22276 4.84426 7.77724 5.14876 7.58021L12.2284 2.99929C12.5611 2.78402 13 3.02282 13 3.41907V12.5809C13 12.9772 12.5611 13.216 12.2284 13.0007L5.14876 8.41978ZM12 11.6619V4.33814L6.34077 8L12 11.6619Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	print(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.99902 1.9989V3.9989H2.99902C2.44288 3.9989 1.99902 4.44276 1.99902 4.9989V9.9989C1.99902 10.555 2.44288 10.9989 2.99902 10.9989H3.99902V13.9989H11.999V10.9989H12.999C13.5552 10.9989 13.999 10.555 13.999 9.9989V4.9989C13.999 4.44276 13.5552 3.9989 12.999 3.9989H11.999V1.9989H3.99902ZM10.999 3.9989H4.99902V2.9989H10.999V3.9989ZM2.99902 4.9989H12.999V9.9989H11.999V7.9989H3.99902V9.9989H2.99902V4.9989ZM4.99902 12.9989V8.9989H10.999V12.9989H4.99902Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	qrcode(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 4H4V6H6V4Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M2.5 2C2.22386 2 2 2.22386 2 2.5V7.5C2 7.77614 2.22386 8 2.5 8H7.5C7.77614 8 8 7.77614 8 7.5V2.5C8 2.22386 7.77614 2 7.5 2H2.5ZM3 3H7V7H3V3Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M10.5 2C10.2239 2 10 2.22386 10 2.5V5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2H10.5ZM11 5V3H13V5H11Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M10 10.5C10 10.2239 10.2239 10 10.5 10H13.5C13.7761 10 14 10.2239 14 10.5V13.5C14 13.7761 13.7761 14 13.5 14H10.5C10.2239 14 10 13.7761 10 13.5V10.5ZM11 13H13V11H11V13Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M2.5 10C2.22386 10 2 10.2239 2 10.5V13.5C2 13.7761 2.22386 14 2.5 14H5.5C5.77614 14 6 13.7761 6 13.5V10.5C6 10.2239 5.77614 10 5.5 10H2.5ZM3 11H5V13H3V11Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M14 7.5L10 7.5V8.5L14 8.5V7.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M8.5 11V14H7.5V11H8.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M8.5 10V9H7.5V10H8.5Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	queue(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 3H13V12H14V3C14 2.44772 13.5523 2 13 2H4V3Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M6.58325 9.41669V12.3334L7.58325 12.3334V9.41669H10.3334V8.41669H7.58325V5.66669H6.58325V8.41669H3.66675V9.41669H6.58325Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M2 13C2 13.5523 2.44772 14 3 14L11 14C11.5523 14 12 13.5523 12 13L12 5C12 4.44772 11.5523 4 11 4H3C2.44772 4 2 4.44772 2 5V13ZM3 5L11 5L11 13L3 13L3 5Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	rectangle(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 14L13 14C13.5523 14 14 13.5523 14 13L14 3C14 2.44772 13.5523 2 13 2H3C2.44772 2 2 2.44771 2 3V13C2 13.5523 2.44772 14 3 14ZM3 13L3 3L13 3L13 13L3 13Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
    `;
	},
	refresh(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00016 2.71134C10.8965 2.71134 13.2534 5.0736 13.2534 7.99868H14.2148C14.2148 4.54763 11.4324 1.75 8.00016 1.75C5.76382 1.75 3.80336 2.93771 2.7087 4.72001L2.7087 2.64252H1.75V5.74894C1.75 6.02508 1.97386 6.24894 2.25 6.24894L5.33676 6.24894V5.28498L3.49045 5.28498C4.40906 3.74211 6.08692 2.71134 8.00016 2.71134Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M1.78554 7.99863H2.74687C2.74687 10.9237 5.10379 13.286 8.00015 13.286C9.91339 13.286 11.5912 12.2553 12.5099 10.7124H10.6632V9.74843H13.75C14.0261 9.74843 14.25 9.97228 14.25 10.2484V13.3548H13.2913V11.2779C12.1966 13.0599 10.2363 14.2474 8.00015 14.2474C4.56792 14.2474 1.78554 11.4497 1.78554 7.99863Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	relativity(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 5.5H2.5C1.94772 5.5 1.5 5.94772 1.5 6.5V13.5C1.5 14.0523 1.94772 14.5 2.5 14.5H9.5C10.0523 14.5 10.5 14.0523 10.5 13.5V10.5H13.5C14.0523 10.5 14.5 10.0523 14.5 9.5V2.5C14.5 1.94772 14.0523 1.5 13.5 1.5H6.5C5.94772 1.5 5.5 1.94772 5.5 2.5V5.5ZM6.5 2.5H13.5V9.5H10.5V6.5C10.5 5.94772 10.0523 5.5 9.5 5.5H6.5V2.5ZM9.5 10.5V13.5H2.5V6.5H5.5V9.5C5.5 10.0523 5.94772 10.5 6.5 10.5H9.5ZM9.5 9.5H6.5V6.5H9.5V9.5Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
    `;
	},
	remove(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 7.34998H12.5V8.64998H3.5V7.34998Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	rollback(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.20718 5.00004L5.85363 3.35359L5.14652 2.64648L2.64652 5.14648C2.45126 5.34175 2.45126 5.65833 2.64652 5.85359L5.14652 8.35359L5.85363 7.64648L4.20718 6.00004H10.0001C11.6569 6.00004 13.0001 7.34318 13.0001 9.00004C13.0001 10.6569 11.6569 12 10.0001 12H5.00008V13H10.0001C12.2092 13 14.0001 11.2092 14.0001 9.00004C14.0001 6.7909 12.2092 5.00004 10.0001 5.00004H4.20718Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	rollfront(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0859 5.00004L10.4394 3.35359L11.1465 2.64648L13.6465 5.14648C13.8418 5.34175 13.8418 5.65833 13.6465 5.85359L11.1465 8.35359L10.4394 7.64648L12.0859 6.00004H6.29297C4.63611 6.00004 3.29297 7.34318 3.29297 9.00004C3.29297 10.6569 4.63611 12 6.29297 12H11.293V13H6.29297C4.08383 13 2.29297 11.2092 2.29297 9.00004C2.29297 6.7909 4.08383 5.00004 6.29297 5.00004H12.0859Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'root-list'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M4.5 5H11.5V6H4.5V5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M9 7.5H4.5V8.5H9V7.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M3 2C2.44772 2 2 2.44771 2 3V13C2 13.5523 2.44771 14 3 14H13C13.5523 14 14 13.5523 14 13V3C14 2.44772 13.5523 2 13 2H3ZM13 3V13H3L3 3H13Z" fill="${currentColor}" fill-opacity="0.9"/>
</g>
</svg>
`;
	},
	rotation(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2H3V8.08296C5.5125 8.50448 7.49552 10.4875 7.91704 13H14V14H3C2.44772 14 2 13.5523 2 13V2ZM6.89998 13C6.5023 11.0409 4.95913 9.4977 3 9.10002V13L6.89998 13Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	round(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 11.5C6.067 11.5 4.5 9.933 4.5 8C4.5 6.067 6.067 4.5 8 4.5C9.933 4.5 11.5 6.067 11.5 8C11.5 9.933 9.933 11.5 8 11.5ZM8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	save(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 2L14 5V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V3C2 2.44772 2.44772 2 3 2H11ZM10 3L6 3V4.5H10V3ZM11 3.41421V5.5H5V3L3 3L3 13H5V8H11V13H13V5.41421L11 3.41421ZM10 13V9H6V13H10Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	scan(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3.5H4V6.5H3V3.5C3 2.94769 3.44775 2.5 4 2.5H12C12.5522 2.5 13 2.94769 13 3.5V6.5H12V3.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M3 9.5H4V12.5H12V9.5H13V12.5C13 13.0523 12.5522 13.5 12 13.5H4C3.44775 13.5 3 13.0523 3 12.5V9.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M14 7.5H2V8.5H14V7.5Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	search(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.51033 10.2186C8.69189 10.8814 7.64943 11.2784 6.51424 11.2784C3.88302 11.2784 1.75 9.14541 1.75 6.51421C1.75 3.88301 3.88302 1.75 6.51424 1.75C9.14545 1.75 11.2785 3.88301 11.2785 6.51421C11.2785 7.64942 10.8814 8.69189 10.2186 9.51034L13.75 13.0417L13.0417 13.75L9.51033 10.2186ZM10.2768 6.51421C10.2768 4.43623 8.59224 2.75168 6.51424 2.75168C4.43623 2.75168 2.75168 4.43623 2.75168 6.51421C2.75168 8.59219 4.43623 10.2767 6.51424 10.2767C8.59224 10.2767 10.2768 8.59219 10.2768 6.51421Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	secured(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.3894 9.92886L10.9644 6.35379L10.2573 5.64669L7.38939 8.51464L5.74265 6.8679L5.03555 7.57501L7.3894 9.92886Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M2.50003 2L2.5 9.00005C2.5 10.4165 3.24315 11.729 4.45772 12.4578L7.99979 14.5831L11.5423 12.4578C12.7569 11.729 13.5 10.4165 13.5 9.00005L13.5001 2H2.50003ZM3.5 9.00005L3.50002 3H12.5001L12.5 9.00005C12.5 10.0652 11.9412 11.0523 11.0278 11.6003L7.99982 13.417L4.97223 11.6003C4.05886 11.0523 3.5 10.0652 3.5 9.00005Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	server(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 5.25H4V4.25H7V5.25Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M1.50024 2.50014C1.50017 2.22394 1.72405 2 2.00024 2H14.0002C14.2763 2 14.5002 2.22377 14.5002 2.49986L14.5012 6.99988C14.5013 7.27608 14.2774 7.50002 14.0012 7.50002H2.00119C1.7251 7.50002 1.50127 7.27624 1.50119 7.00015L1.50024 2.50014ZM2.50106 6.50002H13.5011L13.5004 3H2.50038L2.50106 6.50002Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M4.00011 11.75H7.00011V10.75H4.00011V11.75Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M1.50133 9.00001C1.50133 8.72387 1.72519 8.50001 2.00133 8.50001H14.0013C14.2775 8.50001 14.5013 8.72387 14.5013 9.00001V13.5C14.5013 13.7761 14.2775 14 14.0013 14H2.00133C1.72519 14 1.50133 13.7761 1.50133 13.5V9.00001ZM2.50133 13H13.5013V9.50001H2.50133V13Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	service(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.51604 6.37387C2.73216 3.5341 5.10482 1.29718 7.99995 1.29718C10.8949 1.29718 13.2674 3.5338 13.4838 6.37328C13.4944 6.41375 13.5 6.45622 13.5 6.5V10.5C13.5 10.5506 13.4925 10.5995 13.4785 10.6455C13.2561 12.923 11.3359 14.7028 9 14.7028H8V13.7028H9C10.6587 13.7028 12.048 12.5489 12.4088 11H10.5C10.2239 11 10 10.7761 10 10.5V6.5C10 6.22386 10.2239 6 10.5 6H12.4295C12.0532 3.89498 10.2132 2.29718 7.99995 2.29718C5.78672 2.29718 3.94667 3.89498 3.57038 6H5.5C5.77614 6 6 6.22386 6 6.5V10.5C6 10.7761 5.77614 11 5.5 11H3C2.72386 11 2.5 10.7761 2.5 10.5V6.5C2.5 6.45643 2.50557 6.41416 2.51604 6.37387ZM12.4999 7H11V10H12.5L12.4999 7ZM3.5 7V10H5V7H3.5Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	setting(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0002 8C11.0002 9.65685 9.65702 11 8.00017 11C6.34331 11 5.00017 9.65685 5.00017 8C5.00017 6.34315 6.34331 5 8.00017 5C9.65702 5 11.0002 6.34315 11.0002 8ZM10.0002 8C10.0002 6.89543 9.10474 6 8.00017 6C6.8956 6 6.00017 6.89543 6.00017 8C6.00017 9.10457 6.8956 10 8.00017 10C9.10474 10 10.0002 9.10457 10.0002 8Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M8.00017 1.25L14.0623 4.625V11.375L8.00017 14.75L1.93799 11.375V4.625L8.00017 1.25ZM2.93799 5.2128V10.7872L8.00017 13.6055L13.0623 10.7872V5.2128L8.00017 2.39453L2.93799 5.2128Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	share(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.93164 5.35774C10.355 5.81616 10.9612 6.10324 11.6344 6.10324C12.9142 6.10324 13.9517 5.06575 13.9517 3.78594C13.9517 2.50612 12.9142 1.46863 11.6344 1.46863C10.3546 1.46863 9.3171 2.50612 9.3171 3.78594C9.3171 4.03296 9.35575 4.27096 9.42734 4.49422L6.06804 6.45463C5.64466 5.99613 5.03844 5.709 4.36516 5.709C3.08535 5.709 2.04785 6.74649 2.04785 8.02631C2.04785 9.30612 3.08535 10.3436 4.36516 10.3436C5.03854 10.3436 5.64484 10.0564 6.06822 9.59778L9.4282 11.5557C9.35606 11.7797 9.3171 12.0187 9.3171 12.2667C9.3171 13.5465 10.3546 14.584 11.6344 14.584C12.9142 14.584 13.9517 13.5465 13.9517 12.2667C13.9517 10.9869 12.9142 9.94937 11.6344 9.94937C10.9622 9.94937 10.3568 10.2356 9.93356 10.6928L6.57236 8.73416C6.64386 8.51103 6.68247 8.27318 6.68247 8.02631C6.68247 7.77934 6.64383 7.5414 6.57228 7.31819L9.93164 5.35774ZM11.6344 2.46863C12.3619 2.46863 12.9517 3.05841 12.9517 3.78594C12.9517 4.51346 12.3619 5.10324 11.6344 5.10324C11.1607 5.10324 10.7454 4.85324 10.5133 4.47798C10.5084 4.4681 10.5031 4.45831 10.4974 4.44864C10.4918 4.43887 10.4858 4.42937 10.4795 4.42015C10.376 4.23201 10.3171 4.01585 10.3171 3.78594C10.3171 3.05841 10.9069 2.46863 11.6344 2.46863ZM5.48783 7.33682C5.49239 7.34584 5.49725 7.35478 5.50242 7.36363C5.50761 7.37253 5.51305 7.38122 5.5187 7.38968C5.62306 7.57838 5.68247 7.79541 5.68247 8.02631C5.68247 8.25725 5.62304 8.47431 5.51864 8.66304C5.51295 8.67156 5.50748 8.68031 5.50226 8.68928C5.49717 8.698 5.49239 8.70681 5.48789 8.7157C5.25607 9.09243 4.83995 9.34361 4.36516 9.34361C3.63763 9.34361 3.04785 8.75383 3.04785 8.02631C3.04785 7.29878 3.63763 6.709 4.36516 6.709C4.83991 6.709 5.256 6.96014 5.48783 7.33682ZM10.3171 12.2667C10.3171 12.0491 10.3699 11.8438 10.4633 11.663C10.4779 11.6445 10.4914 11.6247 10.5037 11.6037C10.5154 11.5835 10.5256 11.5628 10.5343 11.5418C10.77 11.1849 11.1747 10.9494 11.6344 10.9494C12.3619 10.9494 12.9517 11.5391 12.9517 12.2667C12.9517 12.9942 12.3619 13.584 11.6344 13.584C10.9069 13.584 10.3171 12.9942 10.3171 12.2667Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	shop(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1C6.61929 1 5.5 2.11929 5.5 3.5V5H3.5C3.22386 5 3 5.22386 3 5.5V14.5C3 14.7761 3.22386 15 3.5 15H12.5C12.7761 15 13 14.7761 13 14.5V5.5C13 5.22386 12.7761 5 12.5 5H10.5V3.5C10.5 2.11929 9.38071 1 8 1ZM9.5 6V8H10.5V6H12V14H4V6H5.5V8H6.5V6H9.5ZM9.5 5H6.5V3.5C6.5 2.67157 7.17157 2 8 2C8.82843 2 9.5 2.67157 9.5 3.5V5Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	slash(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.06689 13.8122L11.0669 1.68787L11.9329 2.18787L4.93292 14.3122L4.06689 13.8122Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	sound(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.99991 11L8.24266 13.5457C8.57592 13.7456 8.99991 13.5056 8.99991 13.1169V2.8831C8.99991 2.49445 8.57592 2.25439 8.24266 2.45435L3.99991 5H2.10473C1.77358 5 1.50504 5.26829 1.50473 5.59944L1.50024 10.3994C1.49993 10.731 1.76865 11 2.10024 11H3.99991ZM4.99991 5.56619L7.99991 3.76619V12.2338L4.99991 10.4338V5.56619ZM3.99991 10H2.50062L2.50435 6H3.99991V10Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M13.515 5.72686C13.194 5.00368 12.7215 4.34191 12.1209 3.78131L12.8032 3.05025C13.4996 3.70026 14.0521 4.47194 14.429 5.32122C14.8059 6.1705 14.9999 7.08075 14.9999 8C14.9999 8.91925 14.8059 9.8295 14.429 10.6788C14.0521 11.5281 13.4996 12.2997 12.8032 12.9497L12.1209 12.2187C12.7215 11.6581 13.194 10.9963 13.515 10.2731C13.8358 9.55017 13.9999 8.77797 13.9999 8C13.9999 7.22203 13.8358 6.44984 13.515 5.72686Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M11.5 8.00027C11.5007 7.12735 11.1403 6.24663 10.4274 5.54638L11.1282 4.83301C12.023 5.71203 12.501 6.84639 12.5 8.00113C12.499 9.15589 12.0191 10.2897 11.1227 11.1675L10.423 10.453C11.1372 9.75363 11.4992 8.87324 11.5 8.00027Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'star-filled'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.59756 1.81764C7.76262 1.48318 8.23955 1.48318 8.40462 1.81764L10.2053 5.46619L14.2317 6.05126C14.6008 6.10489 14.7482 6.55848 14.4811 6.81882L11.5675 9.65881L12.2553 13.6689C12.3184 14.0366 11.9325 14.3169 11.6024 14.1433L8.00109 12.25L4.39976 14.1433C4.06963 14.3169 3.68378 14.0366 3.74683 13.669L4.43463 9.65881L1.52109 6.81882C1.25401 6.55848 1.40139 6.10489 1.77049 6.05126L5.79689 5.46619L7.59756 1.81764Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	star(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.54158 6.3802L8.00145 3.25955L6.46132 6.3802L3.01749 6.88062L5.50947 9.3097L4.9212 12.7396L8.00145 11.1202L11.0817 12.7396L10.4934 9.3097L12.9854 6.88062L9.54158 6.3802ZM14.5328 6.09497C14.7789 6.13072 14.8771 6.43311 14.6991 6.60667L11.5679 9.65882L12.3071 13.9685C12.3491 14.2136 12.0919 14.4005 11.8718 14.2848L8.00145 12.25L4.13111 14.2848C3.91102 14.4005 3.65379 14.2136 3.69582 13.9685L4.43499 9.65882L1.30382 6.60667C1.12576 6.43311 1.22401 6.13072 1.47008 6.09497L5.79726 5.46619L7.73243 1.5451C7.84248 1.32212 8.16043 1.32213 8.27047 1.5451L10.2056 5.46619L14.5328 6.09497Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'stop-circle-1'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.49796 5.49805H10.502V10.5021H5.49796V5.49805Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M8 1C6.61553 1 5.26216 1.41054 4.11101 2.17971C2.95987 2.94888 2.06266 4.04213 1.53285 5.32122C1.00303 6.6003 0.86441 8.00776 1.13451 9.36563C1.4046 10.7235 2.07129 11.9708 3.05026 12.9497C4.02922 13.9287 5.2765 14.5954 6.63437 14.8655C7.99224 15.1356 9.3997 14.997 10.6788 14.4672C11.9579 13.9373 13.0511 13.0401 13.8203 11.889C14.5895 10.7378 15 9.38447 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1ZM8 2C9.18669 2 10.3467 2.35189 11.3334 3.01118C12.3201 3.67047 13.0892 4.60754 13.5433 5.7039C13.9974 6.80026 14.1162 8.00666 13.8847 9.17054C13.6532 10.3344 13.0818 11.4035 12.2426 12.2426C11.4035 13.0818 10.3344 13.6532 9.17054 13.8847C8.00666 14.1162 6.80026 13.9974 5.7039 13.5433C4.60755 13.0892 3.67047 12.3201 3.01119 11.3334C2.3519 10.3467 2 9.18669 2 8C2 6.4087 2.63214 4.88258 3.75736 3.75736C4.88258 2.63214 6.4087 2 8 2Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'stop-circle-filled'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.11101 2.17971C5.26216 1.41054 6.61553 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.38447 14.5895 10.7378 13.8203 11.889C13.0511 13.0401 11.9579 13.9373 10.6788 14.4672C9.3997 14.997 7.99224 15.1356 6.63437 14.8655C5.2765 14.5954 4.02922 13.9287 3.05026 12.9497C2.07129 11.9708 1.4046 10.7235 1.13451 9.36563C0.86441 8.00776 1.00303 6.6003 1.53285 5.32122C2.06266 4.04213 2.95987 2.94888 4.11101 2.17971ZM5.49991 5.49995V10.5001H10.5001V5.49995H5.49991Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'stop-circle'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 5H6V11H7V5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M10 5H9V11H10V5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M4.11101 2.17971C5.26216 1.41054 6.61553 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.38447 14.5895 10.7378 13.8203 11.889C13.0511 13.0401 11.9579 13.9373 10.6788 14.4672C9.3997 14.997 7.99224 15.1356 6.63437 14.8655C5.2765 14.5954 4.02922 13.9287 3.05026 12.9497C2.07129 11.9708 1.4046 10.7235 1.13451 9.36563C0.86441 8.00776 1.00303 6.6003 1.53285 5.32122C2.06266 4.04213 2.95987 2.94888 4.11101 2.17971ZM11.3334 3.01118C10.3467 2.35189 9.18669 2 8 2C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 9.18669 2.3519 10.3467 3.01119 11.3334C3.67047 12.3201 4.60755 13.0892 5.7039 13.5433C6.80026 13.9974 8.00666 14.1162 9.17054 13.8847C10.3344 13.6532 11.4035 13.0818 12.2426 12.2426C13.0818 11.4035 13.6532 10.3344 13.8847 9.17054C14.1162 8.00666 13.9974 6.80026 13.5433 5.7039C13.0892 4.60754 12.3201 3.67047 11.3334 3.01118Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	stop(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 5H6V11H7V5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M10 5H9V11H10V5Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'swap-left'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.20739 8.99975L15.0002 8.99976L15.0002 9.99976L2.07267 9.99975C1.60049 9.99975 1.36402 9.42885 1.69792 9.09497L5.6467 5.14637L6.35379 5.85349L3.20739 8.99975Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'swap-right'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.7931 8.99975L1.00024 8.99976L1.00024 9.99976L13.9278 9.99975C14.4 9.99975 14.6365 9.42884 14.3026 9.09497L10.3538 5.14637L9.6467 5.8535L12.7931 8.99975Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	swap(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.25024 6.00005L13.0082 6.00005L9.16404 2.25121L9.86221 1.53528L14.5334 6.09061C14.8738 6.4225 14.6388 7.00005 14.1634 7.00005L1.25024 7.00005V6.00005Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M14.75 10.0001L3.02026 10.0001L6.83053 13.6005L6.14372 14.3273L1.47454 9.91528C1.1261 9.58601 1.35906 9.00005 1.83855 9.00005L14.75 9.00005V10.0001Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'thumb-down'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 9.771H13.2192C13.8698 9.771 14.3472 9.15961 14.1894 8.52846L12.6894 2.52846C12.5781 2.08329 12.1781 1.771 11.7192 1.771L3 1.771C2.44772 1.771 2 2.21871 2 2.771L2 7.771C2 8.32328 2.44772 8.771 3 8.771L5 8.771L7 13.771H9C9.55229 13.771 10 13.3233 10 12.771V9.771ZM6 8.57841L6 2.771L11.7192 2.771L13.2192 8.771H9L9 12.771H7.67703L6 8.57841ZM5 7.771L3 7.771L3 2.771L5 2.771L5 7.771Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'thumb-up'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 6H13.2192C13.8698 6 14.3472 6.61139 14.1894 7.24254L12.6894 13.2425C12.5781 13.6877 12.1781 14 11.7192 14H3C2.44772 14 2 13.5523 2 13V8C2 7.44772 2.44772 7 3 7H5L7 2H9C9.55228 2 10 2.44772 10 3V6ZM6 7.19258V13H11.7192L13.2192 7H9V3H7.67703L6 7.19258ZM5 8H3V13H5V8Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'time-filled'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM7.5 5H8.5V7.97471L11.3538 10.8285L10.6467 11.5356L7.5 8.38892V5Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	time(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 4V8.38892L10.0002 11L10.7074 10.2929L8.5 7.97471V4H7.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	tips(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1C6.6247 1 5.36829 1.5546 4.46644 2.46644C3.5546 3.36829 3 4.6247 3 6C3 7.37457 3.554 8.63036 4.46498 9.53211C4.77388 9.84935 5.12363 10.1126 5.5 10.3289V12C5.5 12.5523 5.94772 13 6.5 13H9.5C10.0523 13 10.5 12.5523 10.5 12V10.3289C10.8764 10.1126 11.2261 9.84935 11.535 9.5321C12.446 8.63036 13 7.37456 13 6C13 3.23386 10.7661 1 8 1ZM5.17572 3.17138C5.89371 2.44452 6.8964 2 8 2C10.2139 2 12 3.78614 12 6C12 7.1036 11.5555 8.10629 10.8286 8.82428L10.8214 8.83161C10.5255 9.13619 10.173 9.3845 9.77639 9.58279L9.5 9.72098V12H6.5V9.72098L6.22361 9.58279C5.82703 9.3845 5.47452 9.13619 5.17864 8.83161L5.17138 8.82428C4.44452 8.10629 4 7.1036 4 6C4 4.8964 4.44452 3.89371 5.17138 3.17572L5.17572 3.17138Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M5.5 14V15H10.5V14H5.5Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	tools(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.75056 8.24943L10.3118 8.40417C11.3109 8.67963 12.3996 8.42901 13.1581 7.67052C13.8303 6.99831 14.1035 6.06341 13.9654 5.16621L12.909 6.22262C12.3232 6.80839 11.3735 6.80841 10.7877 6.22265L10.3634 5.7984C9.77758 5.21262 9.77757 4.26285 10.3634 3.67705L11.4198 2.62058C10.5226 2.48241 9.58765 2.75565 8.91542 3.42788C8.15697 4.18632 7.90634 5.27494 8.18172 6.27395L8.33641 6.83516L2.53207 12.6395L3.94628 14.0537L9.75056 8.24943ZM12.2439 1.7965C12.5739 1.90785 12.893 2.06333 13.1918 2.26284L11.0705 4.38415C10.8752 4.57942 10.8752 4.89601 11.0705 5.09127L11.4948 5.51552C11.69 5.71077 12.0066 5.71077 12.2019 5.51551L14.3231 3.39423C14.5227 3.69303 14.6781 4.01209 14.7895 4.34211C15.255 5.72209 14.9491 7.29373 13.8652 8.37763C12.8375 9.40526 11.3715 9.73365 10.046 9.3682L4.65339 14.7608C4.26287 15.1513 3.6297 15.1513 3.23918 14.7608L1.82496 13.3466C1.43444 12.9561 1.43444 12.3229 1.82496 11.9324L7.21767 6.53969C6.85233 5.21428 7.18074 3.74834 8.20831 2.72077C9.29223 1.63686 10.8639 1.33087 12.2439 1.7965Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'translate-1'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.33339 1.33337V3.00004H1.33339V4.33337H6.30653C5.9584 5.21602 5.48812 6.03754 4.91647 6.77698C4.54688 6.29884 4.21964 5.78634 3.94041 5.24514L3.63472 4.65269L2.44981 5.26405L2.75549 5.8565C3.11085 6.54523 3.53467 7.19278 4.01796 7.79018C3.41506 8.38424 2.73707 8.90247 1.9995 9.32926L1.42247 9.66315L2.09025 10.8172L2.66728 10.4833C3.48744 10.0087 4.24271 9.4343 4.91641 8.77655C5.59021 9.43444 6.34569 10.009 7.16626 10.4836L7.74334 10.8174L8.41094 9.66328L7.83386 9.32948C7.09618 8.90279 6.41802 8.3845 5.81493 7.79022C6.64084 6.76947 7.29317 5.60227 7.72685 4.33337H8.66672V3.00004H5.66672V1.33337H4.33339ZM11.0001 6.10939L7.11217 14.3171L8.31716 14.8879L9.05352 13.3334H12.9466L13.683 14.8879L14.8879 14.3171L11.0001 6.10939ZM12.315 12H9.6851L11.0001 9.22403L12.315 12Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	translate(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.33325 3.33337C1.33325 2.2288 2.22868 1.33337 3.33325 1.33337H4.66659C5.77115 1.33337 6.66658 2.2288 6.66658 3.33337V7.33337H5.33325V5.66671H2.66659V7.33337H1.33325V3.33337ZM2.66659 4.33337H5.33325V3.33337C5.33325 2.96518 5.03477 2.66671 4.66659 2.66671H3.33325C2.96506 2.66671 2.66659 2.96518 2.66659 3.33337V4.33337ZM7.99992 2.33337H11.9999C13.1045 2.33337 13.9999 3.2288 13.9999 4.33337V6.00004H12.6666V4.33337C12.6666 3.96518 12.3681 3.66671 11.9999 3.66671H7.99992V2.33337ZM11.9999 7.66671V8.66671H14.6666V10H13.9587C13.812 11.1759 13.2826 12.2328 12.4991 13.0423C12.9626 13.2301 13.4693 13.3334 13.9999 13.3334H14.6666V14.6667H13.9999C13.0283 14.6667 12.1176 14.4069 11.3333 13.9532C10.5488 14.407 9.63805 14.6667 8.66658 14.6667H7.99992V13.3334H8.66658C9.19738 13.3334 9.70403 13.23 10.1675 13.0422C9.76569 12.6271 9.43081 12.1471 9.18017 11.6194L8.8941 11.0173L10.0985 10.4451L10.3845 11.0473C10.6145 11.5314 10.9386 11.9618 11.3332 12.3149C11.9946 11.7229 12.4579 10.914 12.6113 10H7.99992V8.66671H10.6666V7.66671H11.9999ZM3.99992 8.66671V12.6667C3.99992 13.0349 4.2984 13.3334 4.66659 13.3334H6.33325V14.6667H4.66659C3.56202 14.6667 2.66659 13.7713 2.66659 12.6667V8.66671H3.99992Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'unfold-less'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.3556 2.12549L8.00004 5.81174L11.6445 2.12549L12.3556 2.82855L8.42672 6.80251C8.19187 7.04006 7.80822 7.04006 7.57337 6.80251L3.64447 2.82855L4.3556 2.12549Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M4.30769 13.8306L8.00003 10.1382L11.6924 13.8306L12.3995 13.1235L8.42429 9.14829C8.18998 8.91397 7.81008 8.91397 7.57577 9.14829L3.60059 13.1235L4.30769 13.8306Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'unfold-more'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6445 6.84005L8.00001 3.1538L4.35559 6.84005L3.64446 6.13699L7.57334 2.16303C7.80819 1.92548 8.19183 1.92548 8.42669 2.16303L12.3556 6.13699L11.6445 6.84005Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M11.6924 9.15791L8.00003 12.8503L4.30769 9.15791L3.60059 9.86502L7.57576 13.8402C7.81008 14.0745 8.18998 14.0745 8.42429 13.8402L12.3995 9.86502L11.6924 9.15791Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	upload(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.73759 6.6778L7.50118 2.91421L7.5012 11.5L8.5012 11.5L8.50118 2.91422L12.2648 6.6778L12.9719 5.97069L8.35473 1.35355C8.15947 1.15829 7.84289 1.15829 7.64762 1.35355L3.03048 5.9707L3.73759 6.6778Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M2 11V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V11H13V13H3V11H2Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	usb(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 6H5.5V5H7.5V6Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M8.5 6H10.5V5H8.5V6Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M4 8V2.5C4 2.22386 4.22386 2 4.5 2H11.5C11.7761 2 12 2.22386 12 2.5V8C12.5523 8 13 8.44772 13 9V14C13 14.5523 12.5523 15 12 15H4C3.44772 15 3 14.5523 3 14V9C3 8.44772 3.44772 8 4 8ZM5 8H11V3H5V8ZM4 9V14H12V9H4Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'user-add'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 8.5C9.933 8.5 11.5 6.933 11.5 5C11.5 3.067 9.933 1.5 8 1.5C6.067 1.5 4.5 3.067 4.5 5C4.5 6.933 6.067 8.5 8 8.5ZM8 7.5C6.61929 7.5 5.5 6.38071 5.5 5C5.5 3.61929 6.61929 2.5 8 2.5C9.38071 2.5 10.5 3.61929 10.5 5C10.5 6.38071 9.38071 7.5 8 7.5Z" fill="${currentColor}"/>
<path d="M11.5 10.9864C10.3864 10.6698 9.21367 10.5 8 10.5C6.0334 10.5 4.17435 10.9457 2.5 11.7398V13.5H9.5V14.5H2C1.72386 14.5 1.5 14.2761 1.5 14V11.7246C1.5 11.3547 1.70302 11.0122 2.03686 10.8528C3.8494 9.98708 5.86651 9.5 8 9.5C9.20942 9.5 10.3814 9.65652 11.5 9.9498V10.9864Z" fill="${currentColor}"/>
<path d="M12.75 13.75V16H13.75V13.75H16V12.75H13.75V10.5H12.75V12.75H10.5V13.75H12.75Z" fill="${currentColor}"/>
</svg>
`;
	},
	'user-avatar'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 10.5C9.24124 10.5 10.4221 10.8126 11.5 11.3795V12.5L12.5 12.5V11.3584C12.5 11.0106 12.3213 10.6842 12.0145 10.5204C10.7893 9.86653 9.43252 9.5 8 9.5C6.56748 9.5 5.21075 9.86653 3.9855 10.5204C3.67873 10.6842 3.5 11.0106 3.5 11.3584V12.5H4.5V11.3795C5.57794 10.8126 6.75876 10.5 8 10.5Z" fill="${currentColor}"/>
<path d="M10.5 6C10.5 7.38071 9.38071 8.5 8 8.5C6.61929 8.5 5.5 7.38071 5.5 6C5.5 4.61929 6.61929 3.5 8 3.5C9.38071 3.5 10.5 4.61929 10.5 6ZM9.5 6C9.5 5.17157 8.82843 4.5 8 4.5C7.17157 4.5 6.5 5.17157 6.5 6C6.5 6.82843 7.17157 7.5 8 7.5C8.82843 7.5 9.5 6.82843 9.5 6Z" fill="${currentColor}"/>
<path d="M2.5 1.5C1.94772 1.5 1.5 1.94772 1.5 2.5V13.5C1.5 14.0523 1.94772 14.5 2.5 14.5H13.5C14.0523 14.5 14.5 14.0523 14.5 13.5V2.5C14.5 1.94772 14.0523 1.5 13.5 1.5H2.5ZM13.5 2.5V13.5H2.5L2.5 2.5H13.5Z" fill="${currentColor}"/>
</svg>
`;
	},
	'user-circle'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M8 9C9.53535 9 10.78 7.75535 10.78 6.22C10.78 4.68465 9.53535 3.44 8 3.44C6.46465 3.44 5.22 4.68465 5.22 6.22C5.22 7.75535 6.46465 9 8 9ZM8 8C7.01693 8 6.22 7.20307 6.22 6.22C6.22 5.23693 7.01693 4.44 8 4.44C8.98307 4.44 9.78 5.23693 9.78 6.22C9.78 7.20307 8.98307 8 8 8Z" fill="${currentColor}"/>
<path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM12.9955 11.3246C11.4748 10.4765 9.78555 10 7.99998 10C6.21441 10 4.52519 10.4765 3.00451 11.3246C2.36991 10.3729 2 9.22966 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.22966 13.6301 10.3729 12.9955 11.3246ZM12.3632 12.1185C11.2693 13.277 9.71909 14 8 14C6.2809 14 4.73066 13.277 3.63675 12.1185C4.9805 11.3976 6.45282 11 7.99998 11C9.54714 11 11.0195 11.3976 12.3632 12.1185Z" fill="${currentColor}"/>
</g>
</svg>
`;
	},
	'user-clear'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 8.5C9.933 8.5 11.5 6.933 11.5 5C11.5 3.067 9.933 1.5 8 1.5C6.067 1.5 4.5 3.067 4.5 5C4.5 6.933 6.067 8.5 8 8.5ZM8 7.5C6.61929 7.5 5.5 6.38071 5.5 5C5.5 3.61929 6.61929 2.5 8 2.5C9.38071 2.5 10.5 3.61929 10.5 5C10.5 6.38071 9.38071 7.5 8 7.5Z" fill="${currentColor}"/>
<path d="M10.5 10.7452C9.69127 10.5844 8.85582 10.5 8 10.5C6.0334 10.5 4.17435 10.9457 2.5 11.7398V13.5H10.5V14.5H2C1.72386 14.5 1.5 14.2761 1.5 14V11.7246C1.5 11.3547 1.70302 11.0122 2.03686 10.8528C3.8494 9.98708 5.86651 9.5 8 9.5C8.85386 9.5 9.68908 9.57802 10.5 9.7271V10.7452Z" fill="${currentColor}"/>
<path d="M11.4038 14.2929L12.9947 12.702L11.4037 11.1109L12.1108 10.4038L13.7018 11.9949L15.2929 10.4038L16 11.1109L14.4089 12.702L15.9999 14.2929L15.2928 15L13.7018 13.4091L12.1109 15L11.4038 14.2929Z" fill="${currentColor}"/>
</svg>
`;
	},
	'user-talk'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3284 7.82844C14.8905 6.26634 14.8905 3.73368 13.3284 2.17158L14.0355 1.46448C15.9881 3.4171 15.9881 6.58292 14.0355 8.53555L13.3284 7.82844Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M11 5C11 6.933 9.433 8.5 7.5 8.5C5.567 8.5 4 6.933 4 5C4 3.067 5.567 1.5 7.5 1.5C9.433 1.5 11 3.067 11 5ZM10 5C10 3.61929 8.88071 2.5 7.5 2.5C6.11929 2.5 5 3.61929 5 5C5 6.38071 6.11929 7.5 7.5 7.5C8.88071 7.5 10 6.38071 10 5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M13.4631 10.8528C13.797 11.0122 14 11.3547 14 11.7246L14 14C14 14.2761 13.7761 14.5 13.5 14.5L1.5 14.5C1.22386 14.5 1 14.2761 1 14V11.7246C1 11.3547 1.20302 11.0122 1.53686 10.8528C3.3494 9.98707 5.36651 9.5 7.5 9.5C9.63349 9.5 11.6506 9.98708 13.4631 10.8528ZM7.5 10.5C5.5334 10.5 3.67434 10.9457 2 11.7398L2 13.5H13V11.7398C11.3257 10.9457 9.4666 10.5 7.5 10.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M11.9142 3.58577C12.6953 4.36682 12.6953 5.63315 11.9142 6.4142L12.6213 7.1213C13.7929 5.94973 13.7929 4.05023 12.6213 2.87866L11.9142 3.58577Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	user(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 5C11.5 6.933 9.933 8.5 8 8.5C6.067 8.5 4.5 6.933 4.5 5C4.5 3.067 6.067 1.5 8 1.5C9.933 1.5 11.5 3.067 11.5 5ZM10.5 5C10.5 3.61929 9.38071 2.5 8 2.5C6.61929 2.5 5.5 3.61929 5.5 5C5.5 6.38071 6.61929 7.5 8 7.5C9.38071 7.5 10.5 6.38071 10.5 5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M13.9631 10.8528C14.297 11.0122 14.5 11.3547 14.5 11.7246V14C14.5 14.2761 14.2761 14.5 14 14.5H2C1.72386 14.5 1.5 14.2761 1.5 14V11.7246C1.5 11.3547 1.70302 11.0122 2.03686 10.8528C3.8494 9.98708 5.86651 9.5 8 9.5C10.1335 9.5 12.1506 9.98708 13.9631 10.8528ZM8 10.5C6.0334 10.5 4.17435 10.9457 2.5 11.7398V13.5H13.5V11.7398C11.8257 10.9457 9.9666 10.5 8 10.5Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'usergroup-add'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2349 12.75V14.5H14.2349V12.75H15.9849V11.75H14.2349V10H13.2349V11.75H11.4849V12.75H13.2349Z" fill="${currentColor}"/>
<path d="M7.46171 1.34645C7.02232 1.12482 6.52575 1 6.00003 1C4.2051 1 2.75003 2.45507 2.75003 4.25C2.75003 6.02947 4.18015 7.47491 5.95373 7.49968V6.49953C4.73246 6.47488 3.75003 5.47717 3.75003 4.25C3.75003 3.00736 4.75739 2 6.00003 2C6.2937 2 6.57424 2.05626 6.83144 2.1586L7.46171 1.34645Z" fill="${currentColor}"/>
<path d="M5.95373 8.22094C4.01922 8.22779 2.18917 8.66419 0.540929 9.43593C0.204537 9.59344 0 9.9372 0 10.3086V12.5C0 12.7761 0.223857 13 0.5 13H2.85709V12H1V10.3252C2.51071 9.62379 4.18421 9.22774 5.95373 9.22095V8.22094Z" fill="${currentColor}"/>
<path d="M13.2499 5.06354C13.2499 6.85846 11.7948 8.31354 9.99992 8.31354C8.20499 8.31354 6.74992 6.85846 6.74992 5.06354C6.74992 3.26861 8.20499 1.81354 9.99992 1.81354C11.7948 1.81354 13.2499 3.26861 13.2499 5.06354ZM12.2499 5.06354C12.2499 3.8209 11.2426 2.81354 9.99992 2.81354C8.75728 2.81354 7.74992 3.8209 7.74992 5.06354C7.74992 6.30618 8.75728 7.31354 9.99992 7.31354C11.2426 7.31354 12.2499 6.30618 12.2499 5.06354Z" fill="${currentColor}"/>
<path d="M12 10.5988C11.35 10.4879 10.6821 10.43 9.99997 10.43C8.21334 10.43 6.52384 10.8269 4.99996 11.5344V13.5H12V14.5H4.49996C4.22382 14.5 3.99996 14.2761 3.99996 14V11.5178C3.99996 11.1464 4.2045 10.8026 4.54089 10.6451C6.20227 9.86723 8.04837 9.43005 9.99997 9.43005C10.6806 9.43005 11.3484 9.48322 12 9.58548V10.5988Z" fill="${currentColor}"/>
</svg>
`;
	},
	'usergroup-clear'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.46171 1.34645C7.02232 1.12482 6.52575 1 6.00003 1C4.2051 1 2.75003 2.45507 2.75003 4.25C2.75003 6.02947 4.18015 7.47491 5.95373 7.49968V6.49953C4.73246 6.47488 3.75003 5.47717 3.75003 4.25C3.75003 3.00736 4.75739 2 6.00003 2C6.2937 2 6.57424 2.05626 6.83144 2.1586L7.46171 1.34645Z" fill="${currentColor}"/>
<path d="M5.95373 8.22094C4.01922 8.22779 2.18917 8.66419 0.540929 9.43593C0.204537 9.59344 0 9.9372 0 10.3086V12.5C0 12.7761 0.223857 13 0.5 13H2.85709V12H1V10.3252C2.51071 9.62379 4.18421 9.22774 5.95373 9.22095V8.22094Z" fill="${currentColor}"/>
<path d="M13.2499 5.06354C13.2499 6.85846 11.7948 8.31354 9.99992 8.31354C8.20499 8.31354 6.74992 6.85846 6.74992 5.06354C6.74992 3.26861 8.20499 1.81354 9.99992 1.81354C11.7948 1.81354 13.2499 3.26861 13.2499 5.06354ZM12.2499 5.06354C12.2499 3.8209 11.2426 2.81354 9.99992 2.81354C8.75728 2.81354 7.74992 3.8209 7.74992 5.06354C7.74992 6.30618 8.75728 7.31354 9.99992 7.31354C11.2426 7.31354 12.2499 6.30618 12.2499 5.06354Z" fill="${currentColor}"/>
<path d="M11 10.4718C10.6704 10.4442 10.3369 10.43 9.99997 10.43C8.21334 10.43 6.52384 10.8269 4.99996 11.5344V13.5H10.5V14.5H4.49996C4.22382 14.5 3.99996 14.2761 3.99996 14V11.5178C3.99996 11.1464 4.2045 10.8026 4.54089 10.6451C6.20227 9.86723 8.04837 9.43005 9.99997 9.43005C10.3366 9.43005 10.6701 9.44305 11 9.46857V10.4718Z" fill="${currentColor}"/>
<path d="M13.1369 12.344L11.6881 13.7929L12.3952 14.5L13.844 13.0512L15.2929 14.5L16 13.7929L14.5512 12.344L16.0001 10.8951L15.293 10.188L13.844 11.6369L12.3951 10.188L11.688 10.8951L13.1369 12.344Z" fill="${currentColor}"/>
</svg>
`;
	},
	usergroup(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00003 1C6.52575 1 7.02232 1.12482 7.46171 1.34645L6.83144 2.1586C6.57424 2.05626 6.2937 2 6.00003 2C4.75739 2 3.75003 3.00736 3.75003 4.25C3.75003 5.47717 4.73246 6.47488 5.95373 6.49953V7.49968C4.18015 7.47491 2.75003 6.02947 2.75003 4.25C2.75003 2.45507 4.2051 1 6.00003 1Z" fill="${currentColor}"/>
<path d="M0.540929 9.43593C2.18917 8.66419 4.01922 8.22779 5.95373 8.22094V9.22095C4.18421 9.22774 2.51071 9.62379 1 10.3252V12H2.85709V13H0.5C0.223857 13 0 12.7761 0 12.5V10.3086C0 9.9372 0.204537 9.59344 0.540929 9.43593Z" fill="${currentColor}"/>
<path d="M9.99992 8.31354C8.20499 8.31354 6.74992 6.85846 6.74992 5.06354C6.74992 3.26861 8.20499 1.81354 9.99992 1.81354C11.7948 1.81354 13.2499 3.26861 13.2499 5.06354C13.2499 6.85846 11.7948 8.31354 9.99992 8.31354ZM9.99992 7.31354C11.2426 7.31354 12.2499 6.30618 12.2499 5.06354C12.2499 3.8209 11.2426 2.81354 9.99992 2.81354C8.75728 2.81354 7.74992 3.8209 7.74992 5.06354C7.74992 6.30618 8.75728 7.31354 9.99992 7.31354Z" fill="${currentColor}"/>
<path d="M16 11.5178C16 11.1464 15.7954 10.8026 15.459 10.6451C13.7977 9.86723 11.9516 9.43005 9.99997 9.43005C8.04837 9.43005 6.20227 9.86723 4.54089 10.6451C4.2045 10.8026 3.99996 11.1464 3.99996 11.5178V14C3.99996 14.2761 4.22382 14.5 4.49996 14.5H15.5C15.7761 14.5 16 14.2761 16 14V11.5178ZM15 11.5344V13.5H4.99996V11.5344C6.52384 10.8269 8.21334 10.43 9.99997 10.43C11.7866 10.43 13.4761 10.8269 15 11.5344Z" fill="${currentColor}"/>
</svg>
`;
	},
	video(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.05 7.74017C11.25 7.85564 11.25 8.14432 11.05 8.25979L5.95 11.2043C5.75 11.3198 5.5 11.1754 5.5 10.9445L5.5 5.0555C5.5 4.82456 5.75 4.68023 5.95 4.7957L11.05 7.74017ZM6.5 6.26794V9.73204L9.5 7.99998L6.5 6.26794Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M2 3C2 2.44772 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V3ZM3 3L3 13H13V3H3Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'view-column'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 2V14H4.5L4.5 2H3.5ZM7.5 14L7.5 2H8.5L8.5 14H7.5ZM11.5 14L11.5 2H12.5L12.5 14H11.5Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'view-list'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 4.5H2V3.5H14V4.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M14 8.5H2V7.5H14V8.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M2 12.5H14V11.5H2V12.5Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'view-module'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 7.5L11 7.5V8.5L4 8.5V7.5Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M10 10L4 10V11H10V10Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M2 3C2 2.44772 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V3ZM3 3L3 5H13V3H3ZM3 6L3 13H13V6H3Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	wallet(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 4.5L13.5 4.5C14.0523 4.5 14.5 4.94772 14.5 5.5V12C14.5 12.5523 14.0523 13 13.5 13H2.5C1.94772 13 1.5 12.5523 1.5 12V3C1.5 2.44771 1.94772 2 2.5 2H10.5C11.0523 2 11.5 2.44771 11.5 3V4.5ZM10.5 3L2.5 3V4.5L10.5 4.5V3ZM13.5 5.5H2.5L2.5 12H13.5V5.5Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	wifi(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.1536 10.7038L10.8516 9.98785C10.0271 9.14905 9.02319 8.68872 7.98486 8.68872C6.95923 8.68872 5.96704 9.13806 5.14819 9.9577L5.84595 10.6735C6.50903 10.0049 7.26538 9.68872 7.98486 9.68872C8.71533 9.68872 9.4834 10.0145 10.1536 10.7038Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M12.1785 8.6272L12.8767 7.91101C11.5029 6.49567 9.77637 5.71283 7.9856 5.71283C6.20728 5.71283 4.49219 6.48474 3.12329 7.88123L3.82153 8.59729C5.02856 7.35767 6.50391 6.71283 7.9856 6.71283C9.479 6.71283 10.9658 7.36804 12.1785 8.6272Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M14.1331 6.62256L14.8315 5.90631C12.9297 3.94031 10.5042 2.8493 7.98584 2.8493C5.47998 2.8493 3.06616 3.92938 1.1687 5.87677L1.86694 6.59296C3.59912 4.80591 5.77148 3.8493 7.98584 3.8493C10.2124 3.8493 12.3962 4.81647 14.1331 6.62256Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M9 12.5C9 13.0523 8.55225 13.5 8 13.5C7.44775 13.5 7 13.0523 7 12.5C7 11.9477 7.44775 11.5 8 11.5C8.55225 11.5 9 11.9477 9 12.5Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'zoom-in'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 7V9H7V7H9V6H7V4H6V6H4V7H6Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M9.51099 10.2181C8.69245 10.8812 7.64973 11.2784 6.51424 11.2784C3.88302 11.2784 1.75 9.14541 1.75 6.51421C1.75 3.88301 3.88302 1.75 6.51424 1.75C9.14545 1.75 11.2785 3.88301 11.2785 6.51421C11.2785 7.64972 10.8812 8.69245 10.2181 9.511L13.7494 13.0423L13.0423 13.7494L9.51099 10.2181ZM10.2785 6.51421C10.2785 4.4353 8.59317 2.75 6.51424 2.75C4.4353 2.75 2.75 4.4353 2.75 6.51421C2.75 8.59312 4.4353 10.2784 6.51424 10.2784C8.59317 10.2784 10.2785 8.59312 10.2785 6.51421Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	},
	'zoom-out'(currentColor: string) {
		return `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 7H4V6H9V7Z" fill="${currentColor}" fill-opacity="0.9"/>
<path d="M9.51099 10.2181C8.69245 10.8812 7.64973 11.2784 6.51424 11.2784C3.88302 11.2784 1.75 9.14541 1.75 6.51421C1.75 3.88301 3.88302 1.75 6.51424 1.75C9.14545 1.75 11.2785 3.88301 11.2785 6.51421C11.2785 7.64972 10.8812 8.69245 10.2181 9.511L13.7494 13.0423L13.0423 13.7494L9.51099 10.2181ZM10.2785 6.51421C10.2785 4.4353 8.59317 2.75 6.51424 2.75C4.4353 2.75 2.75 4.4353 2.75 6.51421C2.75 8.59312 4.4353 10.2784 6.51424 10.2784C8.59317 10.2784 10.2785 8.59312 10.2785 6.51421Z" fill="${currentColor}" fill-opacity="0.9"/>
</svg>
`;
	}
};
export default iconTemplate;

export const showIconElement = (iconName: TIconName, currentColor: string) => {
	if (iconTemplate[iconName]) {
		return iconTemplate[iconName](currentColor);
	}
	return null;
};
