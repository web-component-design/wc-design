// ../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
	'@babel/helpers - typeof';
	return (
		(_typeof =
			'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
				? function (obj2) {
						return typeof obj2;
				  }
				: function (obj2) {
						return obj2 &&
							'function' == typeof Symbol &&
							obj2.constructor === Symbol &&
							obj2 !== Symbol.prototype
							? 'symbol'
							: typeof obj2;
				  }),
		_typeof(obj)
	);
}

// ../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function _toPrimitive(input, hint) {
	if (_typeof(input) !== 'object' || input === null) return input;
	var prim = input[Symbol.toPrimitive];
	if (prim !== void 0) {
		var res = prim.call(input, hint || 'default');
		if (_typeof(res) !== 'object') return res;
		throw new TypeError('@@toPrimitive must return a primitive value.');
	}
	return (hint === 'string' ? String : Number)(input);
}

// ../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function _toPropertyKey(arg) {
	var key = _toPrimitive(arg, 'string');
	return _typeof(key) === 'symbol' ? key : String(key);
}

// ../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
	key = _toPropertyKey(key);
	if (key in obj) {
		Object.defineProperty(obj, key, {
			value,
			enumerable: true,
			configurable: true,
			writable: true
		});
	} else {
		obj[key] = value;
	}
	return obj;
}

// ../../node_modules/.pnpm/quarkc@1.0.39/node_modules/quarkc/lib/index.js
var t = {};
var n = [];
var r = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function o(e) {
	var t2 = e.parentNode;
	t2 && t2.removeChild(e);
}
function i(e) {
	return 'function' == typeof e;
}
var l = n.slice;
var s = {
	_catchError: function (e, t2, n2, r2) {
		for (var o2, i2, l2; (t2 = t2._parent); )
			if ((o2 = t2._component) && !o2._processingException)
				try {
					if (
						((i2 = o2.constructor) &&
							null != i2.getDerivedStateFromError &&
							(Object.assign(o2, i2.getDerivedStateFromError(e)),
							(l2 = o2._dirty)),
						null != o2.componentDidCatch &&
							(o2.componentDidCatch(e, r2 || {}), (l2 = o2._dirty)),
						l2)
					)
						return (o2._pendingError = o2);
				} catch (t3) {
					e = t3;
				}
		throw e;
	}
};
var c = 0;
function a(e, t2, n2) {
	var r2,
		o2,
		i2,
		s2 = {};
	for (i2 in t2)
		'key' == i2
			? (r2 = t2[i2])
			: 'ref' == i2
			? (o2 = t2[i2])
			: (s2[i2] = t2[i2]);
	if (
		(arguments.length > 2 &&
			(s2.children = arguments.length > 3 ? l.call(arguments, 2) : n2),
		'function' == typeof e && null != e.defaultProps)
	)
		for (i2 in e.defaultProps)
			void 0 === s2[i2] && (s2[i2] = e.defaultProps[i2]);
	return u(e, s2, r2, o2, null);
}
function u(e, t2, n2, r2, o2) {
	var i2 = {
		type: e,
		props: t2,
		key: n2,
		ref: r2,
		_children: null,
		_parent: null,
		_depth: 0,
		_dom: null,
		_nextDom: void 0,
		_component: null,
		_hydrating: null,
		constructor: void 0,
		_original: null == o2 ? ++c : o2
	};
	return null == o2 && null != s.vnode && s.vnode(i2), i2;
}
function d(e) {
	return e.children;
}
function p(e) {
	(this.props = e), (this._dirty = false);
}
function h(e, t2) {
	if (null == t2)
		return e._parent ? h(e._parent, e._parent._children.indexOf(e) + 1) : null;
	for (var n2; t2 < e._children.length; t2++)
		if (null != (n2 = e._children[t2]) && null != n2._dom) return n2._dom;
	return 'function' == typeof e.type ? h(e) : null;
}
function f(e, r2, o2, i2, l2, s2, c2) {
	var a2,
		p2,
		f2,
		y2,
		g2,
		b2,
		E2,
		k2 = (i2 && i2._children) || n,
		D2 = k2.length;
	for (o2._children = [], a2 = 0; a2 < r2.length; a2++)
		if (
			null !=
			(y2 =
				null == (y2 = r2[a2]) ||
				'boolean' == typeof y2 ||
				'function' == typeof y2
					? (o2._children[a2] = null)
					: 'string' == typeof y2 ||
					  'number' == typeof y2 ||
					  'bigint' == typeof y2
					? (o2._children[a2] = u(null, y2, null, null, y2))
					: Array.isArray(y2)
					? (o2._children[a2] = u(d, { children: y2 }, null, null, null))
					: y2._depth > 0
					? (o2._children[a2] = u(
							y2.type,
							y2.props,
							y2.key,
							y2.ref ? y2.ref : null,
							y2._original
					  ))
					: (o2._children[a2] = y2))
		) {
			if (
				((y2._parent = o2),
				(y2._depth = o2._depth + 1),
				null === (f2 = k2[a2]) ||
					(f2 && y2.key == f2.key && y2.type === f2.type))
			)
				k2[a2] = void 0;
			else
				for (p2 = 0; p2 < D2; p2++) {
					if ((f2 = k2[p2]) && y2.key == f2.key && y2.type === f2.type) {
						k2[p2] = void 0;
						break;
					}
					f2 = null;
				}
			x(e, y2, (f2 = f2 || t), l2, s2, c2),
				(g2 = y2._dom),
				(p2 = y2.ref) &&
					f2.ref != p2 &&
					(E2 || (E2 = []),
					f2.ref && E2.push(f2.ref, null, y2),
					E2.push(p2, y2._component || g2, y2)),
				null != g2
					? (null == b2 && (b2 = g2),
					  'function' == typeof y2.type && y2._children === f2._children
							? (y2._nextDom = c2 = _(y2, c2, e))
							: (c2 = m(e, y2, f2, k2, g2, c2)),
					  'function' == typeof o2.type && (o2._nextDom = c2))
					: c2 && f2._dom == c2 && c2.parentNode != e && (c2 = h(f2));
		}
	for (o2._dom = b2, a2 = D2; a2--; )
		null != k2[a2] &&
			('function' == typeof o2.type &&
				null != k2[a2]._dom &&
				k2[a2]._dom == o2._nextDom &&
				(o2._nextDom = v(i2).nextSibling),
			S(k2[a2], k2[a2]));
	if (E2) for (a2 = 0; a2 < E2.length; a2++) w(E2[a2], E2[++a2], E2[++a2]);
}
function _(e, t2, n2) {
	for (var r2 = e._children, o2 = 0; r2 && o2 < r2.length; o2++) {
		var i2 = r2[o2];
		i2 &&
			((i2._parent = e),
			(t2 =
				'function' == typeof i2.type
					? _(i2, t2, n2)
					: m(n2, i2, i2, r2, i2._dom, t2)));
	}
	return t2;
}
function m(e, t2, n2, r2, o2, i2) {
	var l2;
	if (void 0 !== t2._nextDom) (l2 = t2._nextDom), (t2._nextDom = void 0);
	else if (null == n2 || o2 != i2 || null == o2.parentNode)
		e: if (null == i2 || i2.parentNode !== e) e.appendChild(o2), (l2 = null);
		else {
			for (
				var s2 = i2, c2 = 0;
				(s2 = s2.nextSibling) && c2 < r2.length;
				c2 += 1
			)
				if (s2 == o2) break e;
			e.insertBefore(o2, i2), (l2 = i2);
		}
	return (i2 = void 0 !== l2 ? l2 : o2.nextSibling);
}
function v(e) {
	if (null == e.type || 'string' == typeof e.type) return e._dom;
	if (e._children)
		for (var t2 = e._children.length - 1; t2 >= 0; t2--) {
			var n2 = e._children[t2];
			if (n2) {
				var r2 = v(n2);
				if (r2) return r2;
			}
		}
	return null;
}
function y(e, t2, n2) {
	'-' === t2[0]
		? e.setProperty(t2, null == n2 ? '' : n2)
		: null == n2
		? (e[t2] = '')
		: 'number' != typeof n2 || r.test(t2)
		? (e[t2] = n2)
		: (e[t2] = n2 + 'px');
}
function g(e, t2, n2, r2, o2) {
	var i2;
	e: if ('style' === t2)
		if ('string' == typeof n2) e.style.cssText = n2;
		else {
			if (('string' == typeof r2 && (e.style.cssText = r2 = ''), r2))
				for (t2 in r2) (n2 && t2 in n2) || y(e.style, t2, '');
			if (n2)
				for (t2 in n2) (r2 && n2[t2] === r2[t2]) || y(e.style, t2, n2[t2]);
		}
	else if ('o' === t2[0] && 'n' === t2[1])
		if (
			((i2 = t2 !== (t2 = t2.replace(/Capture$/, ''))),
			(t2 = t2.toLowerCase() in e ? t2.toLowerCase().slice(2) : t2.slice(2)),
			e._listeners || (e._listeners = {}),
			(e._listeners[t2 + i2] = n2),
			n2)
		) {
			if (!r2) {
				var l2 = i2 ? E : b;
				e.addEventListener(t2, l2, i2);
			}
		} else {
			var s2 = i2 ? E : b;
			e.removeEventListener(t2, s2, i2);
		}
	else if ('dangerouslySetInnerHTML' !== t2) {
		if (o2) t2 = t2.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
		else if (
			'width' !== t2 &&
			'height' !== t2 &&
			'href' !== t2 &&
			'list' !== t2 &&
			'form' !== t2 &&
			'tabIndex' !== t2 &&
			'download' !== t2 &&
			t2 in e
		)
			try {
				e[t2] = null == n2 ? '' : n2;
				break e;
			} catch (e2) {}
		'function' == typeof n2 ||
			(null == n2 || (false === n2 && -1 == t2.indexOf('-'))
				? e.removeAttribute(t2)
				: e.setAttribute(t2, n2));
	}
}
function b(e) {
	return this._listeners[e.type + false](s.event ? s.event(e) : e);
}
function E(e) {
	return this._listeners[e.type + true](s.event ? s.event(e) : e);
}
function x(e, n2, r2, i2, c2, a2) {
	var u2,
		_2 = n2.type;
	if (void 0 !== n2.constructor) return null;
	(u2 = s._diff) && u2(n2);
	try {
		e: if ('function' == typeof _2) {
			var m2,
				v2,
				y2,
				b2 = n2.props;
			if (r2._component)
				y2 = (m2 = n2._component = r2._component)._processingException =
					m2._pendingError;
			else {
				if ('prototype' in _2 && _2.prototype.render && true)
					throw new Error('Class component in render method is not supported.');
				(n2._component = m2 = new p(b2)),
					(m2.constructor = _2),
					(m2.render = k),
					(m2.props = b2),
					(v2 = m2._dirty = true);
			}
			if ((m2.props, (m2._vnode = n2), v2));
			else if (n2._original === r2._original) {
				(n2._dom = r2._dom),
					(n2._children = r2._children),
					n2._children.forEach((e2) => {
						e2 && (e2._parent = n2);
					});
				break e;
			}
			(m2.props = b2), (m2._parentDom = e);
			var E2 = s._render,
				x2 = 0;
			do {
				(m2._dirty = false), E2 && E2(n2), (u2 = m2.render(m2.props));
			} while (m2._dirty && ++x2 < 25);
			var w2 =
				null != u2 && u2.type === d && null == u2.key ? u2.props.children : u2;
			f(e, Array.isArray(w2) ? w2 : [w2], n2, r2, i2, c2, a2),
				(m2.base = n2._dom),
				y2 && (m2._pendingError = m2._processingException = null);
		} else
			null == c2 && n2._original === r2._original
				? ((n2._children = r2._children), (n2._dom = r2._dom))
				: (n2._dom = (function (e2, n3, r3, i3, s2) {
						var c3 = r3.props,
							a3 = n3.props,
							u3 = n3.type,
							d2 = 0;
						'svg' === u3 && (i3 = true);
						if (null != s2)
							for (; d2 < s2.length; d2++) {
								var p2 = s2[d2];
								if (
									p2 &&
									'setAttribute' in p2 == !!u3 &&
									(u3 ? p2.localName === u3 : 3 === p2.nodeType)
								) {
									(e2 = p2), (s2[d2] = null);
									break;
								}
							}
						if (null == e2) {
							if (null === u3) return document.createTextNode(a3);
							(e2 = i3
								? document.createElementNS('http://www.w3.org/2000/svg', u3)
								: document.createElement(u3, a3.is && a3)),
								(s2 = null);
						}
						if (null === u3) c3 !== a3 && (e2.data = a3);
						else {
							s2 = s2 && l.call(e2.childNodes);
							var _3 = (c3 = r3.props || t).dangerouslySetInnerHTML,
								m3 = a3.dangerouslySetInnerHTML;
							if (null != s2)
								for (c3 = {}, d2 = 0; d2 < e2.attributes.length; d2++)
									c3[e2.attributes[d2].name] = e2.attributes[d2].value;
							if (
								((m3 || _3) &&
									((m3 &&
										((_3 && m3.__html == _3.__html) ||
											m3.__html === e2.innerHTML)) ||
										(e2.innerHTML = (m3 && m3.__html) || '')),
								(function (e3, t2, n4, r4) {
									var o2;
									for (o2 in n4)
										'children' === o2 ||
											'key' === o2 ||
											o2 in t2 ||
											g(e3, o2, null, n4[o2], r4);
									for (o2 in t2)
										'children' !== o2 &&
											'key' !== o2 &&
											'value' !== o2 &&
											'checked' !== o2 &&
											n4[o2] !== t2[o2] &&
											g(e3, o2, t2[o2], n4[o2], r4);
								})(e2, a3, c3, i3),
								m3)
							)
								n3._children = [];
							else if (
								((d2 = n3.props.children),
								f(
									e2,
									Array.isArray(d2) ? d2 : [d2],
									n3,
									r3,
									i3 && 'foreignObject' !== u3,
									s2,
									s2 ? s2[0] : r3._children && h(r3, 0)
								),
								null != s2)
							)
								for (d2 = s2.length; d2--; ) null != s2[d2] && o(s2[d2]);
							'value' in a3 &&
								void 0 !== (d2 = a3.value) &&
								(d2 !== e2.value ||
									('progress' === u3 && !d2) ||
									('option' === u3 && d2 !== c3.value)) &&
								g(e2, 'value', d2, c3.value, false),
								'checked' in a3 &&
									void 0 !== (d2 = a3.checked) &&
									d2 !== e2.checked &&
									g(e2, 'checked', d2, c3.checked, false);
						}
						return e2;
				  })(r2._dom, n2, r2, i2, c2));
		(u2 = s.diffed) && u2(n2);
	} catch (e2) {
		(n2._original = null),
			null != c2 && ((n2._dom = a2), (c2[c2.indexOf(a2)] = null)),
			s._catchError(e2, n2, r2);
	}
}
function w(e, t2, n2) {
	try {
		'function' == typeof e ? e(t2) : (e.current = t2);
	} catch (e2) {
		s._catchError(e2, n2);
	}
}
function S(e, t2, n2) {
	var r2;
	if (
		(s.unmount && s.unmount(e),
		(r2 = e.ref) && ((r2.current && r2.current !== e._dom) || w(r2, null, t2)),
		null != (r2 = e._component) &&
			((r2.base = r2._parentDom = null), (e._component = void 0)),
		(r2 = e._children))
	)
		for (var i2 = 0; i2 < r2.length; i2++)
			r2[i2] && S(r2[i2], t2, n2 || 'function' != typeof e.type);
	n2 || null == e._dom || o(e._dom), (e._parent = e._dom = e._nextDom = void 0);
}
function k(e) {
	return this.constructor(e);
}
p.prototype.render = d;
var D = class {
	constructor() {
		_defineProperty(this, 'map', /* @__PURE__ */ new Map());
	}
	get(e, t2) {
		var n2 = this.map.get(e);
		if (n2) return t2 ? n2.get(t2) : n2;
	}
	set(e, t2, n2) {
		var r2,
			o2 = this.map.get(e);
		o2 || ((o2 = /* @__PURE__ */ new Map()), this.map.set(e, o2)),
			null === (r2 = o2) || void 0 === r2 || r2.set(t2, n2);
	}
	forEach(e) {
		this.map.forEach((t2, n2) => {
			t2.forEach((t3, r2) => {
				e(t3, n2, r2);
			});
		});
	}
	delete(e) {
		this.map.delete(e);
	}
	deleteAll() {
		this.map.forEach((e, t2) => {
			this.map.delete(t2);
		});
	}
};
var C = class {
	constructor() {
		_defineProperty(this, 'eventMap', new D()),
			_defineProperty(this, 'bindListener', (e, t2, n2) => {
				if (e && t2 && n2) {
					var r2 = this.eventMap.get(e, t2);
					r2 ||
						((r2 = /* @__PURE__ */ new Set()), this.eventMap.set(e, t2, r2)),
						r2.has(n2) || (r2.add(n2), e.addEventListener(t2, n2, true));
				}
			}),
			_defineProperty(this, 'removeAllListener', () => {
				this.eventMap.forEach((e, t2, n2) => {
					e.forEach((e2) => {
						t2.removeEventListener(n2, e2, true);
					});
				}),
					this.eventMap.deleteAll();
			});
	}
};
function P() {
	return { current: null };
}
var A = d;
~location.href.indexOf('localhost') &&
	console.info(
		'%cquarkc@'.concat('1.0.39'),
		'color: white;background:#9f57f8;font-weight:bold;font-size:10px;padding:2px 6px;border-radius: 5px',
		'Running in dev mode.'
	);
var L = (e) => !(e || false === e || 0 === e);
var M = {
	observed: true,
	type: String,
	converter: (e, t2) => {
		var n2 = e;
		switch (t2) {
			case Number:
				n2 = L(e) ? e : Number(e);
				break;
			case Boolean:
				n2 = !([null, 'false', false, void 0].indexOf(e) > -1);
		}
		return n2;
	}
};
var N = function () {
	var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
	return (t2, n2) => t2.constructor.createProperty(n2, e);
};
var O = () => (e, t2) => e.constructor.createState(t2);
var T = new D();
var U = new D();
function B(e) {
	var { tag: t2, style: n2 = '' } = 'string' == typeof e ? { tag: e } : e;
	return (e2) => {
		class r2 extends e2 {
			static get observedAttributes() {
				var t3 = [],
					n3 = T.get(e2);
				return (
					n3 &&
						n3.forEach((e3, n4) => {
							e3.observed && t3.push(n4);
						}),
					t3
				);
			}
			static isBooleanProperty(t3) {
				var n3 = false,
					r3 = T.get(e2);
				return (
					r3 &&
						r3.forEach((e3, r4) => {
							if (e3.type === Boolean && t3 === r4) return (n3 = true);
						}),
					n3
				);
			}
			constructor() {
				super();
				var e3 = this.attachShadow({ mode: 'open' });
				if (e3)
					if ('function' == typeof CSSStyleSheet && e3.adoptedStyleSheets) {
						var t3 = new CSSStyleSheet();
						t3.replaceSync(n2), (e3.adoptedStyleSheets = [t3]);
					} else {
						var r3 = document.createElement('style');
						(r3.innerHTML = n2), e3.append(r3);
					}
				var o2 = U.get(Object.getPrototypeOf(this.constructor));
				o2 &&
					o2.forEach((e4, t4) => {
						Object.defineProperty(this, t4, e4(this[t4]));
					});
			}
		}
		customElements.get(t2) || customElements.define(t2, r2);
	};
}
var H = class extends HTMLElement {
	constructor() {
		super(...arguments),
			_defineProperty(this, 'eventController', new C()),
			_defineProperty(this, 'rootPatch', (e) => {
				this.shadowRoot &&
					(function (e2, n2) {
						s._root && s._root(e2, n2);
						var r2 = n2._children;
						(e2 = n2._children = a(d, null, [e2])),
							x(
								n2,
								e2,
								r2 || t,
								void 0 !== n2.ownerSVGElement,
								r2 ? null : n2.firstChild ? l.call(n2.childNodes) : null,
								r2 ? r2._dom : n2.firstChild
							);
					})(e, this.shadowRoot);
			}),
			_defineProperty(this, '$on', (e, t2, n2) =>
				this.eventController.bindListener(n2 || this, e, t2)
			);
	}
	static getPropertyDescriptor(e, t2) {
		return (n2) => ({
			get() {
				var r2 = this.getAttribute(e);
				return L(n2) || !L(r2) || (t2.type === Boolean && '' === r2)
					? (i(t2.converter) && (r2 = t2.converter(r2, t2.type)), r2)
					: n2;
			},
			set(n3) {
				var r2 = n3;
				i(t2.converter) && (r2 = t2.converter(n3, t2.type)),
					r2
						? 'boolean' == typeof r2
							? this.setAttribute(e, '')
							: this.setAttribute(e, r2)
						: this.removeAttribute(e);
			},
			configurable: true,
			enumerable: true
		});
	}
	static getStateDescriptor(e) {
		return (t2) => {
			var n2 = t2;
			return {
				get: () => n2,
				set(t3) {
					var r2 = n2;
					(n2 = t3),
						this._render(),
						i(this.componentDidUpdate) && this.componentDidUpdate(e, r2, t3);
				},
				configurable: true,
				enumerable: true
			};
		};
	}
	static createProperty(e, t2) {
		var n2 = Object.assign({}, M, t2),
			r2 = t2.attribute || e;
		T.set(this, r2, n2), U.set(this, e, this.getPropertyDescriptor(r2, n2));
	}
	static createState(e) {
		U.set(this, e, this.getStateDescriptor(e));
	}
	_render() {
		var e = this.render();
		e && this.rootPatch(e);
	}
	_updateProperty() {
		this.constructor.observedAttributes.forEach((e) => {
			this[e] = this[e];
		});
	}
	_updateBooleanProperty(e) {
		this.constructor.isBooleanProperty(e) && (this[e] || (this[e] = this[e]));
	}
	$emit(e, t2) {
		return this.dispatchEvent(
			new CustomEvent(e, Object.assign({ bubbles: true }, t2))
		);
	}
	componentDidMount() {}
	componentWillUnmount() {}
	shouldComponentUpdate(e, t2, n2) {
		return t2 !== n2;
	}
	componentDidUpdate(e, t2, n2) {}
	render() {
		return '';
	}
	connectedCallback() {
		this._updateProperty(),
			this._render(),
			i(this.componentDidMount) && this.componentDidMount();
	}
	attributeChangedCallback(e, t2, n2) {
		var r2 = this[e] || n2;
		(i(this.shouldComponentUpdate) && !this.shouldComponentUpdate(e, t2, r2)) ||
			(this._render(),
			i(this.componentDidUpdate) && this.componentDidUpdate(e, t2, r2),
			n2 !== t2 && this._updateBooleanProperty(e));
	}
	disconnectedCallback() {
		i(this.componentWillUnmount) && this.componentWillUnmount(),
			this.eventController.removeAllListener(),
			this.rootPatch(null);
	}
};
_defineProperty(H, 'h', a), _defineProperty(H, 'Fragment', A);
export {
	A as Fragment,
	H as QuarkElement,
	P as createRef,
	B as customElement,
	N as property,
	O as state
};
//# sourceMappingURL=quarkc.js.map
