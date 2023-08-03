import {
	_ as t,
	p as r,
	i as e,
	c as n,
	a as o,
	H as u,
	b as c,
	N as i,
	B as a
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
			u = t(e);
		if (n) {
			var c = t(this).constructor;
			o = Reflect.construct(u, arguments, c);
		} else o = u.apply(this, arguments);
		return r(this, o);
	};
}
var l = (function (t) {
	e(c, u);
	var r = f(c);
	function c() {
		return n(this, c), r.apply(this, arguments);
	}
	return (
		o(c, [
			{
				key: 'render',
				value: function () {
					return u.h('div', null, u.h('h1', null, this.title), ' 删格');
				}
			}
		]),
		c
	);
})();
c([i()], l.prototype, 'title', void 0);
var s = (l = c([a({ tag: 'wc-grid', style: '' })], l));
export { s as default };
