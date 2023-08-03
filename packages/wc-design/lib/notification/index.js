import {
	_ as t,
	p as e,
	i as n,
	c as r,
	a as o,
	H as c,
	b as i,
	N as u,
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
			c = t(n);
		if (r) {
			var i = t(this).constructor;
			o = Reflect.construct(c, arguments, i);
		} else o = c.apply(this, arguments);
		return e(this, o);
	};
}
var l = (function (t) {
	n(i, c);
	var e = f(i);
	function i() {
		return r(this, i), e.apply(this, arguments);
	}
	return (
		o(i, [
			{
				key: 'render',
				value: function () {
					return c.h('div', null, c.h('h1', null, this.title), ' 消息通知');
				}
			}
		]),
		i
	);
})();
i([u()], l.prototype, 'title', void 0);
var s = (l = i([a({ tag: 'wc-notification', style: '' })], l));
export { s as default };
