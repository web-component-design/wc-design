import {
	_ as t,
	p as e,
	i as r,
	c as n,
	a as o,
	H as c,
	b as u,
	N as a,
	B as i
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
		var o,
			c = t(r);
		if (n) {
			var u = t(this).constructor;
			o = Reflect.construct(c, arguments, u);
		} else o = c.apply(this, arguments);
		return e(this, o);
	};
}
var f = (function (t) {
	r(u, c);
	var e = l(u);
	function u() {
		return n(this, u), e.apply(this, arguments);
	}
	return (
		o(u, [
			{
				key: 'render',
				value: function () {
					return c.h('div', null, c.h('h1', null, this.title), ' 折叠面板');
				}
			}
		]),
		u
	);
})();
u([a()], f.prototype, 'title', void 0);
var s = (f = u([i({ tag: 'wc-collapse', style: '' })], f));
export { s as default };
