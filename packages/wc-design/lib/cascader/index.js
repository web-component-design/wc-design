import {
	_ as t,
	p as e,
	i as r,
	c as n,
	a as c,
	H as o,
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
		var c,
			o = t(r);
		if (n) {
			var u = t(this).constructor;
			c = Reflect.construct(o, arguments, u);
		} else c = o.apply(this, arguments);
		return e(this, c);
	};
}
var s = (function (t) {
	r(u, o);
	var e = f(u);
	function u() {
		return n(this, u), e.apply(this, arguments);
	}
	return (
		c(u, [
			{
				key: 'render',
				value: function () {
					return o.h('div', null, o.h('h1', null, this.title), ' 级联选择');
				}
			}
		]),
		u
	);
})();
u([a()], s.prototype, 'title', void 0);
var l = (s = u([i({ tag: 'wc-cascader', style: '' })], s));
export { l as default };
