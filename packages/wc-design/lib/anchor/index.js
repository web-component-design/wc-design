import {
	_ as t,
	p as r,
	i as e,
	c as n,
	a as o,
	H as c,
	b as u,
	N as a,
	B as i
} from '../index2.js';
function f(e) {
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
			c = t(e);
		if (n) {
			var u = t(this).constructor;
			o = Reflect.construct(c, arguments, u);
		} else o = c.apply(this, arguments);
		return r(this, o);
	};
}
var l = (function (t) {
	e(u, c);
	var r = f(u);
	function u() {
		return n(this, u), r.apply(this, arguments);
	}
	return (
		o(u, [
			{
				key: 'render',
				value: function () {
					return c.h('div', null, c.h('h1', null, this.title), ' 锚点');
				}
			}
		]),
		u
	);
})();
u([a()], l.prototype, 'title', void 0);
var s = (l = u([i({ tag: 'wc-anchor', style: '' })], l));
export { s as default };
