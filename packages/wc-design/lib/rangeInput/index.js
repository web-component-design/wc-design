import {
	_ as t,
	p as e,
	i as r,
	c as n,
	a as u,
	H as o,
	b as c,
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
		var u,
			o = t(r);
		if (n) {
			var c = t(this).constructor;
			u = Reflect.construct(o, arguments, c);
		} else u = o.apply(this, arguments);
		return e(this, u);
	};
}
var l = (function (t) {
	r(c, o);
	var e = f(c);
	function c() {
		return n(this, c), e.apply(this, arguments);
	}
	return (
		u(c, [
			{
				key: 'render',
				value: function () {
					return o.h('div', null, o.h('h1', null, this.title), ' 范围输入框');
				}
			}
		]),
		c
	);
})();
c([a()], l.prototype, 'title', void 0);
var s = (l = c([i({ tag: 'wc-rangeInput', style: '' })], l));
export { s as default };
