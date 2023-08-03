import {
	_ as t,
	p as e,
	i as r,
	c as n,
	a as o,
	H as u,
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
		var o,
			u = t(r);
		if (n) {
			var c = t(this).constructor;
			o = Reflect.construct(u, arguments, c);
		} else o = u.apply(this, arguments);
		return e(this, o);
	};
}
var s = (function (t) {
	r(c, u);
	var e = f(c);
	function c() {
		return n(this, c), e.apply(this, arguments);
	}
	return (
		o(c, [
			{
				key: 'render',
				value: function () {
					return u.h('div', null, u.h('h1', null, this.title), ' 选项卡');
				}
			}
		]),
		c
	);
})();
c([a()], s.prototype, 'title', void 0);
var l = (s = c([i({ tag: 'wc-tabs', style: '' })], s));
export { l as default };
