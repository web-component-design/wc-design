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
function f(r) {
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
var l = (function (t) {
	r(u, c);
	var e = f(u);
	function u() {
		return n(this, u), e.apply(this, arguments);
	}
	return (
		o(u, [
			{
				key: 'render',
				value: function () {
					return c.h('div', null, c.h('h1', null, this.title), ' 回到顶部');
				}
			}
		]),
		u
	);
})();
u([a()], l.prototype, 'title', void 0);
var s = (l = u([i({ tag: 'wc-backTop', style: '' })], l));
export { s as default };
