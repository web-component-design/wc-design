import {
	_ as t,
	p as e,
	i as n,
	c as r,
	a as o,
	H as u,
	b as c,
	N as i,
	B as a
} from '../index2.js';
function f(n) {
	var r = (function () {
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
			u = t(n);
		if (r) {
			var c = t(this).constructor;
			o = Reflect.construct(u, arguments, c);
		} else o = u.apply(this, arguments);
		return e(this, o);
	};
}
var l = (function (t) {
	n(c, u);
	var e = f(c);
	function c() {
		return r(this, c), e.apply(this, arguments);
	}
	return (
		o(c, [
			{
				key: 'render',
				value: function () {
					return u.h('div', null, u.h('h1', null, this.title), ' 分页');
				}
			}
		]),
		c
	);
})();
c([i()], l.prototype, 'title', void 0);
var s = (l = c([a({ tag: 'wc-papination', style: '' })], l));
export { s as default };
