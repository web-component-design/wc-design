import {
	_ as t,
	p as r,
	i as e,
	c as n,
	a as u,
	H as c,
	b as o,
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
		var u,
			c = t(e);
		if (n) {
			var o = t(this).constructor;
			u = Reflect.construct(c, arguments, o);
		} else u = c.apply(this, arguments);
		return r(this, u);
	};
}
var l = (function (t) {
	e(o, c);
	var r = f(o);
	function o() {
		return n(this, o), r.apply(this, arguments);
	}
	return (
		u(o, [
			{
				key: 'render',
				value: function () {
					return c.h('div', null, c.h('h1', null, this.title), ' 面包屑');
				}
			}
		]),
		o
	);
})();
o([a()], l.prototype, 'title', void 0);
var s = (l = o([i({ tag: 'wc-breadcrumb', style: '' })], l));
export { s as default };
