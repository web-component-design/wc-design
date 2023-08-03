import { resolve } from 'path';

// 基础
export const basis = {
	title: '基础',
	tags: [
		{
			text: 'Button',
			desc: '按钮',
			type: 'button'
		},
		{
			text: 'Icon',
			desc: '图标',
			type: 'icon'
		},
		{
			text: 'Link',
			desc: '链接',
			type: 'link'
		}
	]
} as const;

// 布局
export const layout = {
	title: '布局',
	tags: [
		{
			text: 'Divider',
			desc: '分割线',
			type: 'divider'
		},
		{
			text: 'Grid',
			desc: '删格',
			type: 'grid'
		},
		{
			text: 'Layout',
			desc: '布局',
			type: 'layout'
		},
		{
			text: 'Space',
			desc: '间距',
			type: 'space'
		}
	]
} as const;
// 导航
export const navigation = {
	title: '导航',
	tags: [
		{
			text: 'Affix',
			desc: '固钉',
			type: 'affix'
		},
		{
			text: 'Anchor',
			desc: '锚点',
			type: 'anchor'
		},
		{
			text: 'BackTop',
			desc: '回到顶部',
			type: 'backTop'
		},
		{
			text: 'Breadcrumb',
			desc: '面包屑',
			type: 'breadcrumb'
		},
		{
			text: 'Dropdown',
			desc: '下拉菜单',
			type: 'dropdown'
		},
		{
			text: 'Menu',
			desc: '导航菜单',
			type: 'menu'
		},
		{
			text: 'Papination',
			desc: '分页',
			type: 'papination'
		},
		{
			text: 'Steps',
			desc: '步骤条',
			type: 'steps'
		},
		{
			text: 'StickyTool',
			desc: '侧边栏',
			type: 'stickyTool'
		},
		{
			text: 'Tabs',
			desc: '选项卡',
			type: 'tabs'
		}
	]
} as const;

// 数据录入
export const dataEntry = {
	title: '数据录入',
	tags: [
		{
			text: 'Cascader',
			desc: '级联选择',
			type: 'cascader'
		},
		{
			text: 'Checkbox',
			desc: '多选框',
			type: 'checkbox'
		},
		{
			text: 'ColorPicker',
			desc: '颜色选择器',
			type: 'colorPicker'
		},
		{
			text: 'DatePicker',
			desc: '日期选择器',
			type: 'datePicker'
		},
		{
			text: 'Form',
			desc: '表单',
			type: 'form'
		},
		{
			text: 'Input',
			desc: '输入框',
			type: 'input'
		},
		{
			text: 'InputAdornment',
			desc: '输入框装饰器',
			type: 'inputAdornment'
		},
		{
			text: 'InputNumber',
			desc: '数字输入框',
			type: 'inputNumber'
		},
		{
			text: 'Radio',
			desc: '单选框',
			type: 'radio'
		},
		{
			text: 'RangeInput',
			desc: '范围输入框',
			type: 'rangeInput'
		},
		{
			text: 'Select',
			desc: '选择器',
			type: 'select'
		},
		{
			text: 'SelectVirtually',
			desc: '选择器-虚拟列表',
			type: 'selectVirtually'
		},
		{
			text: 'SelectInput',
			desc: '筛选器输入框',
			type: 'selectInput'
		},
		{
			text: 'Slider',
			desc: '滑块',
			type: 'slider'
		},
		{
			text: 'Switch',
			desc: '开关',
			type: 'switch'
		},
		{
			text: 'Textarea',
			desc: '多行文本框',
			type: 'textarea'
		},
		{
			text: 'Transfer',
			desc: '穿梭框',
			type: 'transfer'
		},
		{
			text: 'TimePicker',
			desc: '时间选择器',
			type: 'timePicker'
		},
		{
			text: 'TreeSelect',
			desc: '树选择',
			type: 'treeSelect'
		},
		{
			text: 'Upload',
			desc: '上传',
			type: 'upload'
		}
	]
} as const;

// 数据展示
export const dataShow = {
	title: '数据展示',
	tags: [
		{
			text: 'Avatar',
			desc: '头像',
			type: 'Avatar'
		},
		{
			text: 'Badge',
			desc: '徽标',
			type: 'badge'
		},
		{
			text: 'Calendar',
			desc: '日历',
			type: 'calendar'
		},
		{
			text: 'Card',
			desc: '卡片',
			type: 'card'
		},
		{
			text: 'Collapse',
			desc: '折叠面板',
			type: 'collapse'
		},
		{
			text: 'Comment',
			desc: '评论',
			type: 'comment'
		},
		{
			text: 'Image',
			desc: '图片',
			type: 'image'
		},
		{
			text: 'ImageViewer',
			desc: '图片预览',
			type: 'imageViewer'
		},
		{
			text: 'List',
			desc: '列表',
			type: 'list'
		},
		{
			text: 'Loading',
			desc: '加载',
			type: 'loading'
		},
		{
			text: 'Progress',
			desc: '加载',
			type: 'progress'
		},
		{
			text: 'Skeleton',
			desc: '骨架屏',
			type: 'skeleton'
		},
		{
			text: 'Swiper',
			desc: '轮播',
			type: 'swiper'
		},
		{
			text: 'Table',
			desc: '表格',
			type: 'table'
		},
		{
			text: 'Tag',
			desc: '标签',
			type: 'tag'
		},
		{
			text: 'Timeline',
			desc: '时间线',
			type: 'timeline'
		},
		{
			text: 'Tooltip',
			desc: '文字提示',
			type: 'tooltip'
		},
		{
			text: 'Tree',
			desc: '树',
			type: 'tree'
		},
		{
			text: 'Watermark',
			desc: '水印',
			type: 'watermark'
		},
		{
			text: 'Rate',
			desc: '评分',
			type: 'rate'
		}
	]
} as const;
// 消息提醒
export const messageRemind = {
	title: '消息提醒',
	tags: [
		{
			text: 'Alert',
			desc: '警告',
			type: 'alert'
		},
		{
			text: 'Dialog',
			desc: '对话框',
			type: 'dialog'
		},
		{
			text: 'Drawer',
			desc: '抽屉',
			type: 'drawer'
		},
		{
			text: 'Guide',
			desc: '引导',
			type: 'guide'
		},
		{
			text: 'Message',
			desc: '全局提示',
			type: 'message'
		},
		{
			text: 'Notification',
			desc: '消息通知',
			type: 'notification'
		},
		{
			text: 'Popconfirm',
			desc: '气泡确认框',
			type: 'popconfirm'
		},
		{
			text: 'InputNumber',
			desc: '数字输入框',
			type: 'inputNumber'
		},
		{
			text: 'Popup',
			desc: '弹出层',
			type: 'popup'
		}
	]
} as const;
export const sideWrapperList = [
	basis,
	layout,
	navigation,
	dataEntry,
	dataShow,
	messageRemind
] as const;
export type TsideWrapperList = typeof sideWrapperList;
export type TMenuTagType = TsideWrapperList[number]['tags'][number];
console.log(__dirname, process.cwd());

export const componentDir = resolve(__dirname, './docs/components');
export const sourceComponentDir = resolve(__dirname, '../wc-design/src');
