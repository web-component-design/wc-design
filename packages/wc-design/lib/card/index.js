import {
	_ as t,
	p as r,
	i as e,
	c as n,
	a as c,
	H as o,
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
		var c,
			o = t(e);
		if (n) {
			var u = t(this).constructor;
			c = Reflect.construct(o, arguments, u);
		} else c = o.apply(this, arguments);
		return r(this, c);
	};
}
var l = (function (t) {
	e(u, o);
	var r = f(u);
	function u() {
		return n(this, u), r.apply(this, arguments);
	}
	return (
		c(u, [
			{
				key: 'render',
				value: function () {
					return o.h('div', null, o.h('h1', null, this.title), ' 卡片');
				}
			}
		]),
		u
	);
})();
u([a()], l.prototype, 'title', void 0);
var s = (l = u([i({ tag: 'wc-card', style: '' })], l));
export { s as default };
