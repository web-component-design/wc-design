import {
	_ as t,
	p as e,
	i as r,
	c as n,
	a as u,
	H as c,
	b as o,
	N as i,
	B as a
} from '../index2.js';
function l(r) {
	var n = (function () {
		if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
		if (Reflect.construct.sham) return !1;
		if ('function' == typeof Proxy) return !0;
		try {
			return (
				Boolean.prototype.valueOf.call(
					Reflect.construct(Boolean, [], function () {})
				),
				!0
			);
		} catch (t) {
			return !1;
		}
	})();
	return function () {
		var u,
			c = t(r);
		if (n) {
			var o = t(this).constructor;
			u = Reflect.construct(c, arguments, o);
		} else u = c.apply(this, arguments);
		return e(this, u);
	};
}
var f = (function (t) {
	r(o, c);
	var e = l(o);
	function o() {
		return n(this, o), e.apply(this, arguments);
	}
	return (
		u(o, [
			{
				key: 'render',
				value: function () {
					return c.h(
						'div',
						null,
						c.h('h1', null, this.title),
						' 选择器-虚拟列表'
					);
				}
			}
		]),
		o
	);
})();
o([i()], f.prototype, 'title', void 0);
var s = (f = o([a({ tag: 'wc-selectVirtually', style: '' })], f));
export { s as default };
