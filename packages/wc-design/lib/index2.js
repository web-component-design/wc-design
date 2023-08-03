'undefined' != typeof globalThis
	? globalThis
	: 'undefined' != typeof window
	? window
	: 'undefined' != typeof global
	? global
	: 'undefined' != typeof self && self;
function e(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
		? e.default
		: e;
}
var t = function (e, t) {
	if (!(e instanceof t))
		throw new TypeError('Cannot call a class as a function');
};
function n(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		(r.enumerable = r.enumerable || !1),
			(r.configurable = !0),
			'value' in r && (r.writable = !0),
			Object.defineProperty(e, r.key, r);
	}
}
var r = function (e, t, r) {
	return t && n(e.prototype, t), r && n(e, r), e;
};
function o(e, t) {
	return (
		(i = o =
			Object.setPrototypeOf ||
			function (e, t) {
				return (e.__proto__ = t), e;
			}),
		o(e, t)
	);
}
var i = o,
	u = i;
var l = function (e, t) {
	if ('function' != typeof t && null !== t)
		throw new TypeError('Super expression must either be null or a function');
	(e.prototype = Object.create(t && t.prototype, {
		constructor: { value: e, writable: !0, configurable: !0 }
	})),
		t && u(e, t);
};
function c(e) {
	return (
		(c =
			'function' == typeof Symbol && 'symbol' === f(Symbol.iterator)
				? function (e) {
						return f(e);
				  }
				: function (e) {
						return e &&
							'function' == typeof Symbol &&
							e.constructor === Symbol &&
							e !== Symbol.prototype
							? 'symbol'
							: f(e);
				  }),
		c(e)
	);
}
function s(e) {
	return (
		(p = s =
			'function' == typeof Symbol && 'symbol' === c(Symbol.iterator)
				? function (e) {
						return c(e);
				  }
				: function (e) {
						return e &&
							'function' == typeof Symbol &&
							e.constructor === Symbol &&
							e !== Symbol.prototype
							? 'symbol'
							: c(e);
				  }),
		s(e)
	);
}
var p = s,
	f = p;
var a = p,
	d = function (e) {
		if (void 0 === e)
			throw new ReferenceError(
				"this hasn't been initialised - super() hasn't been called"
			);
		return e;
	};
var y = function (e, t) {
	return !t || ('object' !== a(t) && 'function' != typeof t) ? d(e) : t;
};
function h(e) {
	return (
		(v = h =
			Object.setPrototypeOf
				? Object.getPrototypeOf
				: function (e) {
						return e.__proto__ || Object.getPrototypeOf(e);
				  }),
		h(e)
	);
}
var v = h,
	_ = v;
function x(e, t, n, r) {
	var o,
		i = arguments.length,
		u =
			i < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
	if (
		'object' === ('undefined' == typeof Reflect ? 'undefined' : f(Reflect)) &&
		'function' == typeof Reflect.decorate
	)
		u = Reflect.decorate(e, t, n, r);
	else
		for (var l = e.length - 1; l >= 0; l--)
			(o = e[l]) && (u = (i < 3 ? o(u) : i > 3 ? o(t, n, u) : o(t, n)) || u);
	return i > 3 && u && Object.defineProperty(t, n, u), u;
}
Object.create;
Object.create;
'function' == typeof SuppressedError && SuppressedError;
var m = { exports: {} },
	b = { exports: {} };
!(function (e) {
	function t(n) {
		return (
			(e.exports = t =
				Object.setPrototypeOf
					? Object.getPrototypeOf.bind()
					: function (e) {
							return e.__proto__ || Object.getPrototypeOf(e);
					  }),
			(e.exports.__esModule = !0),
			(e.exports.default = e.exports),
			t(n)
		);
	}
	(e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(b);
var g = e(b.exports),
	w = { exports: {} };
!(function (e) {
	function t(n, r) {
		return (
			(e.exports = t =
				Object.setPrototypeOf
					? Object.setPrototypeOf.bind()
					: function (e, t) {
							return (e.__proto__ = t), e;
					  }),
			(e.exports.__esModule = !0),
			(e.exports.default = e.exports),
			t(n, r)
		);
	}
	(e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(w);
var k,
	S = { exports: {} };
((k = S).exports = function (e) {
	return -1 !== Function.toString.call(e).indexOf('[native code]');
}),
	(k.exports.__esModule = !0),
	(k.exports.default = k.exports);
var E = { exports: {} },
	O = { exports: {} };
!(function (e) {
	(e.exports = function () {
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
		} catch (e) {
			return !1;
		}
	}),
		(e.exports.__esModule = !0),
		(e.exports.default = e.exports);
})(O);
!(function (e) {
	var t = w.exports,
		n = O.exports;
	function r(o, i, u) {
		return (
			n()
				? ((e.exports = r = Reflect.construct.bind()),
				  (e.exports.__esModule = !0),
				  (e.exports.default = e.exports))
				: ((e.exports = r =
						function (e, n, r) {
							var o = [null];
							o.push.apply(o, n);
							var i = new (Function.bind.apply(e, o))();
							return r && t(i, r.prototype), i;
						}),
				  (e.exports.__esModule = !0),
				  (e.exports.default = e.exports)),
			r.apply(null, arguments)
		);
	}
	(e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(E);
!(function (e) {
	var t = b.exports,
		n = w.exports,
		r = S.exports,
		o = E.exports;
	function i(u) {
		var l = 'function' == typeof Map ? new Map() : void 0;
		return (
			(e.exports = i =
				function (e) {
					if (null === e || !r(e)) return e;
					if ('function' != typeof e)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					if (void 0 !== l) {
						if (l.has(e)) return l.get(e);
						l.set(e, i);
					}
					function i() {
						return o(e, arguments, t(this).constructor);
					}
					return (
						(i.prototype = Object.create(e.prototype, {
							constructor: {
								value: i,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						})),
						n(i, e)
					);
				}),
			(e.exports.__esModule = !0),
			(e.exports.default = e.exports),
			i(u)
		);
	}
	(e.exports = i), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(m);
var M = e(m.exports),
	P = { exports: {} };
!(function (e) {
	(e.exports = function (e) {
		if (void 0 === e)
			throw new ReferenceError(
				"this hasn't been initialised - super() hasn't been called"
			);
		return e;
	}),
		(e.exports.__esModule = !0),
		(e.exports.default = e.exports);
})(P);
var j = e(P.exports),
	D = { exports: {} };
!(function (e) {
	var t = w.exports;
	(e.exports = function (e, n) {
		if ('function' != typeof n && null !== n)
			throw new TypeError('Super expression must either be null or a function');
		(e.prototype = Object.create(n && n.prototype, {
			constructor: { value: e, writable: !0, configurable: !0 }
		})),
			Object.defineProperty(e, 'prototype', { writable: !1 }),
			n && t(e, n);
	}),
		(e.exports.__esModule = !0),
		(e.exports.default = e.exports);
})(D);
var C = e(D.exports),
	T = { exports: {} },
	A = { exports: {} };
!(function (e) {
	function t(n) {
		return (
			(e.exports = t =
				'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
					? function (e) {
							return typeof e;
					  }
					: function (e) {
							return e &&
								'function' == typeof Symbol &&
								e.constructor === Symbol &&
								e !== Symbol.prototype
								? 'symbol'
								: typeof e;
					  }),
			(e.exports.__esModule = !0),
			(e.exports.default = e.exports),
			t(n)
		);
	}
	(e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(A);
!(function (e) {
	var t = A.exports.default,
		n = P.exports;
	(e.exports = function (e, r) {
		if (r && ('object' === t(r) || 'function' == typeof r)) return r;
		if (void 0 !== r)
			throw new TypeError(
				'Derived constructors may only return object or undefined'
			);
		return n(e);
	}),
		(e.exports.__esModule = !0),
		(e.exports.default = e.exports);
})(T);
var R = e(T.exports),
	L = { exports: {} };
!(function (e) {
	(e.exports = function (e, t) {
		if (!(e instanceof t))
			throw new TypeError('Cannot call a class as a function');
	}),
		(e.exports.__esModule = !0),
		(e.exports.default = e.exports);
})(L);
var N = e(L.exports),
	B = { exports: {} },
	U = { exports: {} },
	H = { exports: {} };
!(function (e) {
	var t = A.exports.default;
	(e.exports = function (e, n) {
		if ('object' !== t(e) || null === e) return e;
		var r = e[Symbol.toPrimitive];
		if (void 0 !== r) {
			var o = r.call(e, n || 'default');
			if ('object' !== t(o)) return o;
			throw new TypeError('@@toPrimitive must return a primitive value.');
		}
		return ('string' === n ? String : Number)(e);
	}),
		(e.exports.__esModule = !0),
		(e.exports.default = e.exports);
})(H);
!(function (e) {
	var t = A.exports.default,
		n = H.exports;
	(e.exports = function (e) {
		var r = n(e, 'string');
		return 'symbol' === t(r) ? r : String(r);
	}),
		(e.exports.__esModule = !0),
		(e.exports.default = e.exports);
})(U);
!(function (e) {
	var t = U.exports;
	function n(e, n) {
		for (var r = 0; r < n.length; r++) {
			var o = n[r];
			(o.enumerable = o.enumerable || !1),
				(o.configurable = !0),
				'value' in o && (o.writable = !0),
				Object.defineProperty(e, t(o.key), o);
		}
	}
	(e.exports = function (e, t, r) {
		return (
			t && n(e.prototype, t),
			r && n(e, r),
			Object.defineProperty(e, 'prototype', { writable: !1 }),
			e
		);
	}),
		(e.exports.__esModule = !0),
		(e.exports.default = e.exports);
})(B);
var F = e(B.exports),
	$ = { exports: {} };
!(function (e) {
	var t = U.exports;
	(e.exports = function (e, n, r) {
		return (
			(n = t(n)) in e
				? Object.defineProperty(e, n, {
						value: r,
						enumerable: !0,
						configurable: !0,
						writable: !0
				  })
				: (e[n] = r),
			e
		);
	}),
		(e.exports.__esModule = !0),
		(e.exports.default = e.exports);
})($);
var I = e($.exports);
function W(e) {
	var t = (function () {
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
		} catch (e) {
			return !1;
		}
	})();
	return function () {
		var n,
			r = g(e);
		if (t) {
			var o = g(this).constructor;
			n = Reflect.construct(r, arguments, o);
		} else n = r.apply(this, arguments);
		return R(this, n);
	};
}
var z = {},
	V = [],
	q = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function G(e) {
	var t = e.parentNode;
	t && t.removeChild(e);
}
function J(e) {
	return 'function' == typeof e;
}
var K = V.slice,
	Q = {
		_catchError: function (e, t, n, r) {
			for (var o, i, u; (t = t._parent); )
				if ((o = t._component) && !o._processingException)
					try {
						if (
							((i = o.constructor) &&
								null != i.getDerivedStateFromError &&
								(Object.assign(o, i.getDerivedStateFromError(e)),
								(u = o._dirty)),
							null != o.componentDidCatch &&
								(o.componentDidCatch(e, r || {}), (u = o._dirty)),
							u)
						)
							return (o._pendingError = o);
					} catch (t) {
						e = t;
					}
			throw e;
		}
	},
	X = 0;
function Y(e, t, n) {
	var r,
		o,
		i,
		u = {};
	for (i in t)
		'key' == i ? (r = t[i]) : 'ref' == i ? (o = t[i]) : (u[i] = t[i]);
	if (
		(arguments.length > 2 &&
			(u.children = arguments.length > 3 ? K.call(arguments, 2) : n),
		'function' == typeof e && null != e.defaultProps)
	)
		for (i in e.defaultProps) void 0 === u[i] && (u[i] = e.defaultProps[i]);
	return Z(e, u, r, o, null);
}
function Z(e, t, n, r, o) {
	var i = {
		type: e,
		props: t,
		key: n,
		ref: r,
		_children: null,
		_parent: null,
		_depth: 0,
		_dom: null,
		_nextDom: void 0,
		_component: null,
		_hydrating: null,
		constructor: void 0,
		_original: null == o ? ++X : o
	};
	return null == o && null != Q.vnode && Q.vnode(i), i;
}
function ee(e) {
	return e.children;
}
function te(e) {
	(this.props = e), (this._dirty = !1);
}
function ne(e, t) {
	if (null == t)
		return e._parent ? ne(e._parent, e._parent._children.indexOf(e) + 1) : null;
	for (var n; t < e._children.length; t++)
		if (null != (n = e._children[t]) && null != n._dom) return n._dom;
	return 'function' == typeof e.type ? ne(e) : null;
}
function re(e, t, n, r, o, i, u) {
	var l,
		c,
		s,
		p,
		f,
		a,
		d,
		y = (r && r._children) || V,
		h = y.length;
	for (n._children = [], l = 0; l < t.length; l++)
		if (
			null !=
			(p =
				null == (p = t[l]) || 'boolean' == typeof p || 'function' == typeof p
					? (n._children[l] = null)
					: 'string' == typeof p || 'number' == typeof p || 'bigint' == typeof p
					? (n._children[l] = Z(null, p, null, null, p))
					: Array.isArray(p)
					? (n._children[l] = Z(ee, { children: p }, null, null, null))
					: p._depth > 0
					? (n._children[l] = Z(
							p.type,
							p.props,
							p.key,
							p.ref ? p.ref : null,
							p._original
					  ))
					: (n._children[l] = p))
		) {
			if (
				((p._parent = n),
				(p._depth = n._depth + 1),
				null === (s = y[l]) || (s && p.key == s.key && p.type === s.type))
			)
				y[l] = void 0;
			else
				for (c = 0; c < h; c++) {
					if ((s = y[c]) && p.key == s.key && p.type === s.type) {
						y[c] = void 0;
						break;
					}
					s = null;
				}
			fe(e, p, (s = s || z), o, i, u),
				(f = p._dom),
				(c = p.ref) &&
					s.ref != c &&
					(d || (d = []),
					s.ref && d.push(s.ref, null, p),
					d.push(c, p._component || f, p)),
				null != f
					? (null == a && (a = f),
					  'function' == typeof p.type && p._children === s._children
							? (p._nextDom = u = oe(p, u, e))
							: (u = ie(e, p, s, y, f, u)),
					  'function' == typeof n.type && (n._nextDom = u))
					: u && s._dom == u && u.parentNode != e && (u = ne(s));
		}
	for (n._dom = a, l = h; l--; )
		null != y[l] &&
			('function' == typeof n.type &&
				null != y[l]._dom &&
				y[l]._dom == n._nextDom &&
				(n._nextDom = ue(r).nextSibling),
			de(y[l], y[l]));
	if (d) for (l = 0; l < d.length; l++) ae(d[l], d[++l], d[++l]);
}
function oe(e, t, n) {
	for (var r = e._children, o = 0; r && o < r.length; o++) {
		var i = r[o];
		i &&
			((i._parent = e),
			(t =
				'function' == typeof i.type ? oe(i, t, n) : ie(n, i, i, r, i._dom, t)));
	}
	return t;
}
function ie(e, t, n, r, o, i) {
	var u;
	if (void 0 !== t._nextDom) (u = t._nextDom), (t._nextDom = void 0);
	else if (null == n || o != i || null == o.parentNode)
		e: if (null == i || i.parentNode !== e) e.appendChild(o), (u = null);
		else {
			for (var l = i, c = 0; (l = l.nextSibling) && c < r.length; c += 1)
				if (l == o) break e;
			e.insertBefore(o, i), (u = i);
		}
	return void 0 !== u ? u : o.nextSibling;
}
function ue(e) {
	if (null == e.type || 'string' == typeof e.type) return e._dom;
	if (e._children)
		for (var t = e._children.length - 1; t >= 0; t--) {
			var n = e._children[t];
			if (n) {
				var r = ue(n);
				if (r) return r;
			}
		}
	return null;
}
function le(e, t, n) {
	'-' === t[0]
		? e.setProperty(t, null == n ? '' : n)
		: null == n
		? (e[t] = '')
		: 'number' != typeof n || q.test(t)
		? (e[t] = n)
		: (e[t] = n + 'px');
}
function ce(e, t, n, r, o) {
	var i;
	e: if ('style' === t)
		if ('string' == typeof n) e.style.cssText = n;
		else {
			if (('string' == typeof r && (e.style.cssText = r = ''), r))
				for (t in r) (n && t in n) || le(e.style, t, '');
			if (n) for (t in n) (r && n[t] === r[t]) || le(e.style, t, n[t]);
		}
	else if ('o' === t[0] && 'n' === t[1])
		if (
			((i = t !== (t = t.replace(/Capture$/, ''))),
			(t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
			e._listeners || (e._listeners = {}),
			(e._listeners[t + i] = n),
			n)
		) {
			if (!r) {
				var u = i ? pe : se;
				e.addEventListener(t, u, i);
			}
		} else {
			var l = i ? pe : se;
			e.removeEventListener(t, l, i);
		}
	else if ('dangerouslySetInnerHTML' !== t) {
		if (o) t = t.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
		else if (
			'width' !== t &&
			'height' !== t &&
			'href' !== t &&
			'list' !== t &&
			'form' !== t &&
			'tabIndex' !== t &&
			'download' !== t &&
			t in e
		)
			try {
				e[t] = null == n ? '' : n;
				break e;
			} catch (e) {}
		'function' == typeof n ||
			(null == n || (!1 === n && -1 == t.indexOf('-'))
				? e.removeAttribute(t)
				: e.setAttribute(t, n));
	}
}
function se(e) {
	return this._listeners[e.type + !1](Q.event ? Q.event(e) : e);
}
function pe(e) {
	return this._listeners[e.type + !0](Q.event ? Q.event(e) : e);
}
function fe(e, t, n, r, o, i) {
	var u,
		l = t.type;
	if (void 0 !== t.constructor) return null;
	(u = Q._diff) && u(t);
	try {
		e: if ('function' == typeof l) {
			var c,
				s,
				p,
				f = t.props;
			if (n._component)
				p = (c = t._component = n._component)._processingException =
					c._pendingError;
			else {
				if (
					'prototype' in l &&
					l.prototype.render &&
					'development' === process.env.NODE_ENV
				)
					throw new Error('Class component in render method is not supported.');
				(t._component = c = new te(f)),
					(c.constructor = l),
					(c.render = ye),
					(c.props = f),
					(s = c._dirty = !0);
			}
			if ((c.props, (c._vnode = t), s));
			else if (t._original === n._original) {
				(t._dom = n._dom),
					(t._children = n._children),
					t._children.forEach(function (e) {
						e && (e._parent = t);
					});
				break e;
			}
			(c.props = f), (c._parentDom = e);
			var a = Q._render,
				d = 0;
			do {
				(c._dirty = !1), a && a(t), (u = c.render(c.props));
			} while (c._dirty && ++d < 25);
			var y =
				null != u && u.type === ee && null == u.key ? u.props.children : u;
			re(e, Array.isArray(y) ? y : [y], t, n, r, o, i),
				(c.base = t._dom),
				p && (c._pendingError = c._processingException = null);
		} else
			null == o && t._original === n._original
				? ((t._children = n._children), (t._dom = n._dom))
				: (t._dom = (function (e, t, n, r, o) {
						var i = n.props,
							u = t.props,
							l = t.type,
							c = 0;
						if (('svg' === l && (r = !0), null != o))
							for (; c < o.length; c++) {
								var s = o[c];
								if (
									s &&
									'setAttribute' in s == !!l &&
									(l ? s.localName === l : 3 === s.nodeType)
								) {
									(e = s), (o[c] = null);
									break;
								}
							}
						if (null == e) {
							if (null === l) return document.createTextNode(u);
							(e = r
								? document.createElementNS('http://www.w3.org/2000/svg', l)
								: document.createElement(l, u.is && u)),
								(o = null);
						}
						if (null === l) i !== u && (e.data = u);
						else {
							o = o && K.call(e.childNodes);
							var p = (i = n.props || z).dangerouslySetInnerHTML,
								f = u.dangerouslySetInnerHTML;
							if (null != o)
								for (i = {}, c = 0; c < e.attributes.length; c++)
									i[e.attributes[c].name] = e.attributes[c].value;
							if (
								((f || p) &&
									((f &&
										((p && f.__html == p.__html) ||
											f.__html === e.innerHTML)) ||
										(e.innerHTML = (f && f.__html) || '')),
								(function (e, t, n, r) {
									var o;
									for (o in n)
										'children' === o ||
											'key' === o ||
											o in t ||
											ce(e, o, null, n[o], r);
									for (o in t)
										'children' !== o &&
											'key' !== o &&
											'value' !== o &&
											'checked' !== o &&
											n[o] !== t[o] &&
											ce(e, o, t[o], n[o], r);
								})(e, u, i, r),
								f)
							)
								t._children = [];
							else if (
								((c = t.props.children),
								re(
									e,
									Array.isArray(c) ? c : [c],
									t,
									n,
									r && 'foreignObject' !== l,
									o,
									o ? o[0] : n._children && ne(n, 0)
								),
								null != o)
							)
								for (c = o.length; c--; ) null != o[c] && G(o[c]);
							'value' in u &&
								void 0 !== (c = u.value) &&
								(c !== e.value ||
									('progress' === l && !c) ||
									('option' === l && c !== i.value)) &&
								ce(e, 'value', c, i.value, !1),
								'checked' in u &&
									void 0 !== (c = u.checked) &&
									c !== e.checked &&
									ce(e, 'checked', c, i.checked, !1);
						}
						return e;
				  })(n._dom, t, n, r, o));
		(u = Q.diffed) && u(t);
	} catch (e) {
		(t._original = null),
			null != o && ((t._dom = i), (o[o.indexOf(i)] = null)),
			Q._catchError(e, t, n);
	}
}
function ae(e, t, n) {
	try {
		'function' == typeof e ? e(t) : (e.current = t);
	} catch (e) {
		Q._catchError(e, n);
	}
}
function de(e, t, n) {
	var r;
	if (
		(Q.unmount && Q.unmount(e),
		(r = e.ref) && ((r.current && r.current !== e._dom) || ae(r, null, t)),
		null != (r = e._component) &&
			((r.base = r._parentDom = null), (e._component = void 0)),
		(r = e._children))
	)
		for (var o = 0; o < r.length; o++)
			r[o] && de(r[o], t, n || 'function' != typeof e.type);
	n || null == e._dom || G(e._dom), (e._parent = e._dom = e._nextDom = void 0);
}
function ye(e) {
	return this.constructor(e);
}
te.prototype.render = ee;
var he = (function () {
		function e() {
			N(this, e), I(this, 'map', new Map());
		}
		return (
			F(e, [
				{
					key: 'get',
					value: function (e, t) {
						var n = this.map.get(e);
						if (n) return t ? n.get(t) : n;
					}
				},
				{
					key: 'set',
					value: function (e, t, n) {
						var r,
							o = this.map.get(e);
						o || ((o = new Map()), this.map.set(e, o)),
							null === (r = o) || void 0 === r || r.set(t, n);
					}
				},
				{
					key: 'forEach',
					value: function (e) {
						this.map.forEach(function (t, n) {
							t.forEach(function (t, r) {
								e(t, n, r);
							});
						});
					}
				},
				{
					key: 'delete',
					value: function (e) {
						this.map.delete(e);
					}
				},
				{
					key: 'deleteAll',
					value: function () {
						var e = this;
						this.map.forEach(function (t, n) {
							e.map.delete(n);
						});
					}
				}
			]),
			e
		);
	})(),
	ve = F(function e() {
		var t = this;
		N(this, e),
			I(this, 'eventMap', new he()),
			I(this, 'bindListener', function (e, n, r) {
				if (e && n && r) {
					var o = t.eventMap.get(e, n);
					o || ((o = new Set()), t.eventMap.set(e, n, o)),
						o.has(r) || (o.add(r), e.addEventListener(n, r, !0));
				}
			}),
			I(this, 'removeAllListener', function () {
				t.eventMap.forEach(function (e, t, n) {
					e.forEach(function (e) {
						t.removeEventListener(n, e, !0);
					});
				}),
					t.eventMap.deleteAll();
			});
	});
var _e = ee;
~location.href.indexOf('localhost') &&
	console.info(
		'%cquarkc@'.concat('1.0.39'),
		'color: white;background:#9f57f8;font-weight:bold;font-size:10px;padding:2px 6px;border-radius: 5px',
		'Running in dev mode.'
	);
var xe = function (e) {
		return !(e || !1 === e || 0 === e);
	},
	me = {
		observed: !0,
		type: String,
		converter: function (e, t) {
			var n = e;
			switch (t) {
				case Number:
					n = xe(e) ? e : Number(e);
					break;
				case Boolean:
					n = !([null, 'false', !1, void 0].indexOf(e) > -1);
			}
			return n;
		}
	},
	be = function () {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
		return function (t, n) {
			return t.constructor.createProperty(n, e);
		};
	},
	ge = new he(),
	we = new he();
function ke(e) {
	var t = 'string' == typeof e ? { tag: e } : e,
		n = t.tag,
		r = t.style,
		o = void 0 === r ? '' : r;
	return function (e) {
		var t = (function (t) {
			C(r, t);
			var n = W(r);
			function r() {
				var e;
				N(this, r);
				var t = (e = n.call(this)).attachShadow({ mode: 'open' });
				if (t)
					if ('function' == typeof CSSStyleSheet && t.adoptedStyleSheets) {
						var i = new CSSStyleSheet();
						i.replaceSync(o), (t.adoptedStyleSheets = [i]);
					} else {
						var u = document.createElement('style');
						(u.innerHTML = o), t.append(u);
					}
				var l = we.get(Object.getPrototypeOf(e.constructor));
				return (
					l &&
						l.forEach(function (t, n) {
							Object.defineProperty(j(e), n, t(e[n]));
						}),
					e
				);
			}
			return (
				F(r, null, [
					{
						key: 'observedAttributes',
						get: function () {
							var t = [],
								n = ge.get(e);
							return (
								n &&
									n.forEach(function (e, n) {
										e.observed && t.push(n);
									}),
								t
							);
						}
					},
					{
						key: 'isBooleanProperty',
						value: function (t) {
							var n = !1,
								r = ge.get(e);
							return (
								r &&
									r.forEach(function (e, r) {
										if (e.type === Boolean && t === r) return (n = !0);
									}),
								n
							);
						}
					}
				]),
				r
			);
		})(e);
		customElements.get(n) || customElements.define(n, t);
	};
}
var Se = (function (e) {
	C(n, e);
	var t = W(n);
	function n() {
		var e;
		return (
			N(this, n),
			(e = t.apply(this, arguments)),
			I(j(e), 'eventController', new ve()),
			I(j(e), 'rootPatch', function (t) {
				e.shadowRoot &&
					(function (e, t) {
						Q._root && Q._root(e, t);
						var n = t._children;
						(e = t._children = Y(ee, null, [e])),
							fe(
								t,
								e,
								n || z,
								void 0 !== t.ownerSVGElement,
								n ? null : t.firstChild ? K.call(t.childNodes) : null,
								n ? n._dom : t.firstChild
							);
					})(t, e.shadowRoot);
			}),
			I(j(e), '$on', function (t, n, r) {
				return e.eventController.bindListener(r || j(e), t, n);
			}),
			e
		);
	}
	return (
		F(
			n,
			[
				{
					key: '_render',
					value: function () {
						var e = this.render();
						e && this.rootPatch(e);
					}
				},
				{
					key: '_updateProperty',
					value: function () {
						var e = this;
						this.constructor.observedAttributes.forEach(function (t) {
							e[t] = e[t];
						});
					}
				},
				{
					key: '_updateBooleanProperty',
					value: function (e) {
						this.constructor.isBooleanProperty(e) &&
							(this[e] || (this[e] = this[e]));
					}
				},
				{
					key: '$emit',
					value: function (e, t) {
						return this.dispatchEvent(
							new CustomEvent(e, Object.assign({ bubbles: !0 }, t))
						);
					}
				},
				{ key: 'componentDidMount', value: function () {} },
				{ key: 'componentWillUnmount', value: function () {} },
				{
					key: 'shouldComponentUpdate',
					value: function (e, t, n) {
						return t !== n;
					}
				},
				{ key: 'componentDidUpdate', value: function (e, t, n) {} },
				{
					key: 'render',
					value: function () {
						return '';
					}
				},
				{
					key: 'connectedCallback',
					value: function () {
						this._updateProperty(),
							this._render(),
							J(this.componentDidMount) && this.componentDidMount();
					}
				},
				{
					key: 'attributeChangedCallback',
					value: function (e, t, n) {
						var r = this[e] || n;
						(J(this.shouldComponentUpdate) &&
							!this.shouldComponentUpdate(e, t, r)) ||
							(this._render(),
							J(this.componentDidUpdate) && this.componentDidUpdate(e, t, r),
							n !== t && this._updateBooleanProperty(e));
					}
				},
				{
					key: 'disconnectedCallback',
					value: function () {
						J(this.componentWillUnmount) && this.componentWillUnmount(),
							this.eventController.removeAllListener(),
							this.rootPatch(null);
					}
				}
			],
			[
				{
					key: 'getPropertyDescriptor',
					value: function (e, t) {
						return function (n) {
							return {
								get: function () {
									var r = this.getAttribute(e);
									return xe(n) || !xe(r) || (t.type === Boolean && '' === r)
										? (J(t.converter) && (r = t.converter(r, t.type)), r)
										: n;
								},
								set: function (n) {
									var r = n;
									J(t.converter) && (r = t.converter(n, t.type)),
										r
											? 'boolean' == typeof r
												? this.setAttribute(e, '')
												: this.setAttribute(e, r)
											: this.removeAttribute(e);
								},
								configurable: !0,
								enumerable: !0
							};
						};
					}
				},
				{
					key: 'getStateDescriptor',
					value: function (e) {
						return function (t) {
							var n = t;
							return {
								get: function () {
									return n;
								},
								set: function (t) {
									var r = n;
									(n = t),
										this._render(),
										J(this.componentDidUpdate) &&
											this.componentDidUpdate(e, r, t);
								},
								configurable: !0,
								enumerable: !0
							};
						};
					}
				},
				{
					key: 'createProperty',
					value: function (e, t) {
						var n = Object.assign({}, me, t),
							r = t.attribute || e;
						ge.set(this, r, n),
							we.set(this, e, this.getPropertyDescriptor(r, n));
					}
				},
				{
					key: 'createState',
					value: function (e) {
						we.set(this, e, this.getStateDescriptor(e));
					}
				}
			]
		),
		n
	);
})(M(HTMLElement));
I(Se, 'h', Y), I(Se, 'Fragment', _e);
export { ke as B, Se as H, be as N, _, r as a, x as b, t as c, l as i, y as p };
