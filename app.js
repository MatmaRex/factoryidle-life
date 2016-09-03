! function () {
	/*
	 RequireJS 2.1.8 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
	 Available via the MIT or new BSD license.
	 see: http://github.com/jrburke/requirejs for details
	 */

	/**
	 * @license RequireJS text 2.0.10 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
	 * Available via the MIT or new BSD license.
	 * see: http://github.com/requirejs/text for details
	 */

	/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */

	/*

	 Copyright (C) 2011 by Yehuda Katz

	 Permission is hereby granted, free of charge, to any person obtaining a copy
	 of this software and associated documentation files (the "Software"), to deal
	 in the Software without restriction, including without limitation the rights
	 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 copies of the Software, and to permit persons to whom the Software is
	 furnished to do so, subject to the following conditions:

	 The above copyright notice and this permission notice shall be included in
	 all copies or substantial portions of the Software.

	 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 THE SOFTWARE.

	 */

	/*
	 * base64-arraybuffer
	 * https://github.com/niklasvh/base64-arraybuffer
	 *
	 * Copyright (c) 2012 Niklas von Hertzen
	 * Licensed under the MIT license.
	 */

	/*
	 Factory idle Copyright (c) 2016, Inditel Meedia OÜ All Rights Reserved.
	 */

	function BinaryArrayReader(e) {
		this.buffer = e, this.dataView = new DataView(e), this.offset = 0
	}

	function BinaryArrayWriter() {
		this.totalLength = 0, this.data = []
	}

	function arrayToHumanStr(e) {
		var t = "";
		for (var n = 0; n < e.length; n++) n > 0 && (n == e.length - 1 ? t += " and " : t += ", "), t += e[n];
		return t
	}

	function dateToStr(e, t) {
		if (!e) return "";
		var n = e.getFullYear(),
			r = e.getMonth() + 1,
			i = e.getDate(),
			s = e.getHours(),
			o = e.getMinutes(),
			u = e.getSeconds();
		return t && (n = e.getUTCFullYear(), r = e.getUTCMonth() + 1, i = e.getUTCDate(), s = e.getUTCHours(), o = e.getUTCMinutes(), u = e.getUTCSeconds()), r = (r < 10 ? "0" : "") + r, i = (i < 10 ? "0" : "") + i, s = (s < 10 ? "0" : "") + s, o = (o < 10 ? "0" : "") + o, u = (u < 10 ? "0" : "") + u, n + "." + r + "." + i + " " + s + ":" + o + ":" + u
	}

	function scrollLock(e) {
		var t = $(document).height(),
			n = window.scrollY,
			r = "DOMMouseScroll" == e.type ? -40 * e.originalEvent.detail : e.originalEvent.wheelDelta,
			i = function () {
				return e.stopPropagation(), e.preventDefault(), e.returnValue = false, false
			};
		return 0 > r && 600 > t - n + r ? ($(document).scrollTop(t), i()) : r > 0 && r > n ? ($(document).scrollTop(0), i()) : void 0
	}

	function applySettings() {
		$(document).on("DOMMouseScroll mousewheel", scrollLock)
	}

	function isBrowserSupported() {
		var e = document.createElement("canvas");
		return !!e.getContext && !!e.getContext("2d")
	}
	var requirejs, require, define;
	(function (Z) {
		function H(e) {
			return "[object Function]" === L.call(e)
		}

		function I(e) {
			return "[object Array]" === L.call(e)
		}

		function y(e, t) {
			if (e) {
				var n;
				for (n = 0; n < e.length && (!e[n] || !t(e[n], n, e)); n += 1);
			}
		}

		function M(e, t) {
			if (e) {
				var n;
				for (n = e.length - 1; - 1 < n && (!e[n] || !t(e[n], n, e)); n -= 1);
			}
		}

		function s(e, t) {
			return ga.call(e, t)
		}

		function l(e, t) {
			return s(e, t) && e[t]
		}

		function F(e, t) {
			for (var n in e)
				if (s(e, n) && t(e[n], n)) break
		}

		function Q(e, t, n, r) {
			return t && F(t, function (t, i) {
				if (n || !s(e, i)) r && "string" != typeof t ? (e[i] || (e[i] = {}), Q(e[i], t, n, r)) : e[i] = t
			}), e
		}

		function u(e, t) {
			return function () {
				return t.apply(e, arguments)
			}
		}

		function aa(e) {
			throw e
		}

		function ba(e) {
			if (!e) return e;
			var t = Z;
			return y(e.split("."), function (e) {
				t = t[e]
			}), t
		}

		function A(e, t, n, r) {
			return t = Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e), t.requireType = e, t.requireModules = r, n && (t.originalError = n), t
		}

		function ha(e) {
			function t(e, t, n) {
				var r, i, s, o, u, a, f, c = t && t.split("/");
				r = c;
				var h = N.map,
					p = h && h["*"];
				if (e && "." === e.charAt(0))
					if (t) {
						r = l(N.pkgs, t) ? c = [t] : c.slice(0, c.length - 1), t = e = r.concat(e.split("/"));
						for (r = 0; t[r]; r += 1)
							if (i = t[r], "." === i) t.splice(r, 1), r -= 1;
							else if (".." === i) {
							if (1 === r && (".." === t[2] || ".." === t[0])) break;
							0 < r && (t.splice(r - 1, 2), r -= 2)
						}
						r = l(N.pkgs, t = e[0]), e = e.join("/"), r && e === t + "/" + r.main && (e = t)
					} else 0 === e.indexOf("./") && (e = e.substring(2));
				if (n && h && (c || p)) {
					t = e.split("/");
					for (r = t.length; 0 < r; r -= 1) {
						s = t.slice(0, r).join("/");
						if (c)
							for (i = c.length; 0 < i; i -= 1)
								if (n = l(h, c.slice(0, i).join("/")))
									if (n = l(n, s)) {
										o = n, u = r;
										break
									}
						if (o) break;
						!a && p && l(p, s) && (a = l(p, s), f = r)
					}!o && a && (o = a, u = f), o && (t.splice(0, u, o), e = t.join("/"))
				}
				return e
			}

			function n(e) {
				z && y(document.getElementsByTagName("script"), function (t) {
					if (t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === S.contextName) return t.parentNode.removeChild(t), true
				})
			}

			function r(e) {
				var t = l(N.paths, e);
				if (t && I(t) && 1 < t.length) return n(e), t.shift(), S.require.undef(e), S.require([e]), true
			}

			function i(e) {
				var t, n = e ? e.indexOf("!") : -1;
				return -1 < n && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
			}

			function o(e, n, r, s) {
				var o, u, a = null,
					f = n ? n.name : null,
					c = e,
					h = true,
					p = "";
				return e || (h = false, e = "_@r" + (B += 1)), e = i(e), a = e[0], e = e[1], a && (a = t(a, f, s), u = l(_, a)), e && (a ? p = u && u.normalize ? u.normalize(e, function (e) {
					return t(e, f, s)
				}) : t(e, f, s) : (p = t(e, f, s), e = i(p), a = e[0], p = e[1], r = true, o = S.nameToUrl(p))), r = a && !u && !r ? "_unnormalized" + (q += 1) : "", {
					prefix: a,
					name: p,
					parentMap: n,
					unnormalized: !!r,
					url: o,
					originalName: c,
					isDefine: h,
					id: (a ? a + "!" + p : p) + r
				}
			}

			function a(e) {
				var t = e.id,
					n = l(C, t);
				return n || (n = C[t] = new S.Module(e)), n
			}

			function f(e, t, n) {
				var r = e.id,
					i = l(C, r);
				s(_, r) && (!i || i.defineEmitComplete) ? "defined" === t && n(_[r]) : (i = a(e), i.error && "error" === t) ? n(i.error) : i.on(t, n)
			}

			function c(e, t) {
				var n = e.requireModules,
					r = false;
				t ? t(e) : (y(n, function (t) {
					if (t = l(C, t)) t.error = e, t.events.error && (r = true, t.emit("error", e))
				}), !r) && j.onError(e)
			}

			function h() {
				R.length && (ia.apply(M, [M.length - 1, 0].concat(R)), R = [])
			}

			function p(e) {
				delete C[e], delete k[e]
			}

			function d(e, t, n) {
				var r = e.map.id;
				e.error ? e.emit("error", e.error) : (t[r] = true, y(e.depMaps, function (r, i) {
					var s = r.id,
						o = l(C, s);
					o && !e.depMatched[i] && !n[s] && (l(t, s) ? (e.defineDep(i, _[s]), e.check()) : d(o, t, n))
				}), n[r] = true)
			}

			function v() {
				var e, t, i, s, o = (i = 1e3 * N.waitSeconds) && S.startTime + i < (new Date).getTime(),
					u = [],
					a = [],
					f = false,
					l = true;
				if (!w) {
					w = true, F(k, function (i) {
						e = i.map, t = e.id;
						if (i.enabled && (e.isDefine || a.push(i), !i.error))
							if (!i.inited && o) r(t) ? f = s = true : (u.push(t), n(t));
							else if (!i.inited && i.fetched && e.isDefine && (f = true, !e.prefix)) return l = false
					});
					if (o && u.length) return i = A("timeout", "Load timeout for modules: " + u, null, u), i.contextName = S.contextName, c(i);
					l && y(a, function (e) {
						d(e, {}, {})
					}), (!o || s) && f && (z || da) && !T && (T = setTimeout(function () {
						T = 0, v()
					}, 50)), w = false
				}
			}

			function m(e) {
				s(_, e[0]) || a(o(e[0], null, true)).init(e[1], e[2])
			}

			function g(e) {
				var e = e.currentTarget || e.srcElement,
					t = S.onScriptLoad;
				return e.detachEvent && !W ? e.detachEvent("onreadystatechange", t) : e.removeEventListener("load", t, false), t = S.onScriptError, (!e.detachEvent || W) && e.removeEventListener("error", t, false), {
					node: e,
					id: e && e.getAttribute("data-requiremodule")
				}
			}

			function b() {
				var e;
				for (h(); M.length;) {
					e = M.shift();
					if (null === e[0]) return c(A("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
					m(e)
				}
			}
			var w, E, S, x, T, N = {
					waitSeconds: 7,
					baseUrl: "./",
					paths: {},
					pkgs: {},
					shim: {},
					config: {}
				},
				C = {},
				k = {},
				L = {},
				M = [],
				_ = {},
				D = {},
				B = 1,
				q = 1;
			return x = {
				require: function (e) {
					return e.require ? e.require : e.require = S.makeRequire(e.map)
				},
				exports: function (e) {
					e.usingExports = true;
					if (e.map.isDefine) return e.exports ? e.exports : e.exports = _[e.map.id] = {}
				},
				module: function (e) {
					return e.module ? e.module : e.module = {
						id: e.map.id,
						uri: e.map.url,
						config: function () {
							var t = l(N.pkgs, e.map.id);
							return (t ? l(N.config, e.map.id + "/" + t.main) : l(N.config, e.map.id)) || {}
						},
						exports: _[e.map.id]
					}
				}
			}, E = function (e) {
				this.events = l(L, e.id) || {}, this.map = e, this.shim = l(N.shim, e.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
			}, E.prototype = {
				init: function (e, t, n, r) {
					r = r || {}, this.inited || (this.factory = t, n ? this.on("error", n) : this.events.error && (n = u(this, function (e) {
						this.emit("error", e)
					})), this.depMaps = e && e.slice(0), this.errback = n, this.inited = true, this.ignore = r.ignore, r.enabled || this.enabled ? this.enable() : this.check())
				},
				defineDep: function (e, t) {
					this.depMatched[e] || (this.depMatched[e] = true, this.depCount -= 1, this.depExports[e] = t)
				},
				fetch: function () {
					if (!this.fetched) {
						this.fetched = true, S.startTime = (new Date).getTime();
						var e = this.map;
						if (!this.shim) return e.prefix ? this.callPlugin() : this.load();
						S.makeRequire(this.map, {
							enableBuildCallback: true
						})(this.shim.deps || [], u(this, function () {
							return e.prefix ? this.callPlugin() : this.load()
						}))
					}
				},
				load: function () {
					var e = this.map.url;
					D[e] || (D[e] = true, S.load(this.map.id, e))
				},
				check: function () {
					if (this.enabled && !this.enabling) {
						var e, t, n = this.map.id;
						t = this.depExports;
						var r = this.exports,
							i = this.factory;
						if (this.inited) {
							if (this.error) this.emit("error", this.error);
							else if (!this.defining) {
								this.defining = true;
								if (1 > this.depCount && !this.defined) {
									if (H(i)) {
										if (this.events.error && this.map.isDefine || j.onError !== aa) try {
											r = S.execCb(n, i, t, r)
										} catch (s) {
											e = s
										} else r = S.execCb(n, i, t, r);
										this.map.isDefine && ((t = this.module) && void 0 !== t.exports && t.exports !== this.exports ? r = t.exports : void 0 === r && this.usingExports && (r = this.exports));
										if (e) return e.requireMap = this.map, e.requireModules = this.map.isDefine ? [this.map.id] : null, e.requireType = this.map.isDefine ? "define" : "require", c(this.error = e)
									} else r = i;
									this.exports = r, this.map.isDefine && !this.ignore && (_[n] = r, j.onResourceLoad) && j.onResourceLoad(S, this.map, this.depMaps), p(n), this.defined = true
								}
								this.defining = false, this.defined && !this.defineEmitted && (this.defineEmitted = true, this.emit("defined", this.exports), this.defineEmitComplete = true)
							}
						} else this.fetch()
					}
				},
				callPlugin: function () {
					var e = this.map,
						n = e.id,
						r = o(e.prefix);
					this.depMaps.push(r), f(r, "defined", u(this, function (r) {
						var i, h;
						h = this.map.name;
						var d = this.map.parentMap ? this.map.parentMap.name : null,
							v = S.makeRequire(e.parentMap, {
								enableBuildCallback: true
							});
						if (this.map.unnormalized) {
							if (r.normalize && (h = r.normalize(h, function (e) {
									return t(e, d, true)
								}) || ""), r = o(e.prefix + "!" + h, this.map.parentMap), f(r, "defined", u(this, function (e) {
									this.init([], function () {
										return e
									}, null, {
										enabled: true,
										ignore: true
									})
								})), h = l(C, r.id)) this.depMaps.push(r), this.events.error && h.on("error", u(this, function (e) {
								this.emit("error", e)
							})), h.enable()
						} else i = u(this, function (e) {
							this.init([], function () {
								return e
							}, null, {
								enabled: true
							})
						}), i.error = u(this, function (e) {
							this.inited = true, this.error = e, e.requireModules = [n], F(C, function (e) {
								0 === e.map.id.indexOf(n + "_unnormalized") && p(e.map.id)
							}), c(e)
						}), i.fromText = u(this, function (t, r) {
							var u = e.name,
								f = o(u),
								l = O;
							r && (t = r), l && (O = false), a(f), s(N.config, n) && (N.config[u] = N.config[n]);
							try {
								j.exec(t)
							} catch (h) {
								return c(A("fromtexteval", "fromText eval for " + n + " failed: " + h, h, [n]))
							}
							l && (O = true), this.depMaps.push(f), S.completeLoad(u), v([u], i)
						}), r.load(e.name, v, i, N)
					})), S.enable(r, this), this.pluginMaps[r.id] = r
				},
				enable: function () {
					k[this.map.id] = this, this.enabling = this.enabled = true, y(this.depMaps, u(this, function (e, t) {
						var n, r;
						if ("string" == typeof e) {
							e = o(e, this.map.isDefine ? this.map : this.map.parentMap, false, !this.skipMap), this.depMaps[t] = e;
							if (n = l(x, e.id)) {
								this.depExports[t] = n(this);
								return
							}
							this.depCount += 1, f(e, "defined", u(this, function (e) {
								this.defineDep(t, e), this.check()
							})), this.errback && f(e, "error", u(this, this.errback))
						}
						n = e.id, r = C[n], !s(x, n) && r && !r.enabled && S.enable(e, this)
					})), F(this.pluginMaps, u(this, function (e) {
						var t = l(C, e.id);
						t && !t.enabled && S.enable(e, this)
					})), this.enabling = false, this.check()
				},
				on: function (e, t) {
					var n = this.events[e];
					n || (n = this.events[e] = []), n.push(t)
				},
				emit: function (e, t) {
					y(this.events[e], function (e) {
						e(t)
					}), "error" === e && delete this.events[e]
				}
			}, S = {
				config: N,
				contextName: e,
				registry: C,
				defined: _,
				urlFetched: D,
				defQueue: M,
				Module: E,
				makeModuleMap: o,
				nextTick: j.nextTick,
				onError: c,
				configure: function (e) {
					e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/");
					var t = N.pkgs,
						n = N.shim,
						r = {
							paths: true,
							config: true,
							map: true
						};
					F(e, function (e, t) {
						r[t] ? "map" === t ? (N.map || (N.map = {}), Q(N[t], e, true, true)) : Q(N[t], e, true) : N[t] = e
					}), e.shim && (F(e.shim, function (e, t) {
						I(e) && (e = {
							deps: e
						}), (e.exports || e.init) && !e.exportsFn && (e.exportsFn = S.makeShimExports(e)), n[t] = e
					}), N.shim = n), e.packages && (y(e.packages, function (e) {
						e = "string" == typeof e ? {
							name: e
						} : e, t[e.name] = {
							name: e.name,
							location: e.location || e.name,
							main: (e.main || "main").replace(ja, "").replace(ea, "")
						}
					}), N.pkgs = t), F(C, function (e, t) {
						!e.inited && !e.map.unnormalized && (e.map = o(t))
					}), (e.deps || e.callback) && S.require(e.deps || [], e.callback)
				},
				makeShimExports: function (e) {
					return function () {
						var t;
						return e.init && (t = e.init.apply(Z, arguments)), t || e.exports && ba(e.exports)
					}
				},
				makeRequire: function (n, r) {
					function i(t, u, f) {
						var l, h;
						return r.enableBuildCallback && u && H(u) && (u.__requireJsBuild = true), "string" == typeof t ? H(u) ? c(A("requireargs", "Invalid require call"), f) : n && s(x, t) ? x[t](C[n.id]) : j.get ? j.get(S, t, n, i) : (l = o(t, n, false, true), l = l.id, s(_, l) ? _[l] : c(A("notloaded", 'Module name "' + l + '" has not been loaded yet for context: ' + e + (n ? "" : ". Use require([])")))) : (b(), S.nextTick(function () {
							b(), h = a(o(null, n)), h.skipMap = r.skipMap, h.init(t, u, f, {
								enabled: true
							}), v()
						}), i)
					}
					return r = r || {}, Q(i, {
						isBrowser: z,
						toUrl: function (e) {
							var r, i = e.lastIndexOf("."),
								s = e.split("/")[0];
							return -1 !== i && ("." !== s && ".." !== s || 1 < i) && (r = e.substring(i, e.length), e = e.substring(0, i)), S.nameToUrl(t(e, n && n.id, true), r, true)
						},
						defined: function (e) {
							return s(_, o(e, n, false, true).id)
						},
						specified: function (e) {
							return e = o(e, n, false, true).id, s(_, e) || s(C, e)
						}
					}), n || (i.undef = function (e) {
						h();
						var t = o(e, n, true),
							r = l(C, e);
						delete _[e], delete D[t.url], delete L[e], r && (r.events.defined && (L[e] = r.events), p(e))
					}), i
				},
				enable: function (e) {
					l(C, e.id) && a(e).enable()
				},
				completeLoad: function (e) {
					var t, n, i = l(N.shim, e) || {},
						o = i.exports;
					for (h(); M.length;) {
						n = M.shift();
						if (null === n[0]) {
							n[0] = e;
							if (t) break;
							t = true
						} else n[0] === e && (t = true);
						m(n)
					}
					n = l(C, e);
					if (!t && !s(_, e) && n && !n.inited) {
						if (N.enforceDefine && (!o || !ba(o))) return r(e) ? void 0 : c(A("nodefine", "No define call for " + e, null, [e]));
						m([e, i.deps || [], i.exportsFn])
					}
					v()
				},
				nameToUrl: function (e, t, n) {
					var r, i, s, o, u, a;
					if (j.jsExtRegExp.test(e)) o = e + (t || "");
					else {
						r = N.paths, i = N.pkgs, o = e.split("/");
						for (u = o.length; 0 < u; u -= 1) {
							if (a = o.slice(0, u).join("/"), s = l(i, a), a = l(r, a)) {
								I(a) && (a = a[0]), o.splice(0, u, a);
								break
							}
							if (s) {
								e = e === s.name ? s.location + "/" + s.main : s.location, o.splice(0, u, e);
								break
							}
						}
						o = o.join("/"), o += t || (/\?/.test(o) || n ? "" : ".js"), o = ("/" === o.charAt(0) || o.match(/^[\w\+\.\-]+:/) ? "" : N.baseUrl) + o
					}
					return N.urlArgs ? o + ((-1 === o.indexOf("?") ? "?" : "&") + N.urlArgs) : o
				},
				load: function (e, t) {
					j.load(S, e, t)
				},
				execCb: function (e, t, n, r) {
					return t.apply(r, n)
				},
				onScriptLoad: function (e) {
					if ("load" === e.type || ka.test((e.currentTarget || e.srcElement).readyState)) P = null, e = g(e), S.completeLoad(e.id)
				},
				onScriptError: function (e) {
					var t = g(e);
					if (!r(t.id)) return c(A("scripterror", "Script error for: " + t.id, e, [t.id]))
				}
			}, S.require = S.makeRequire(), S
		}
		var j, w, x, C, J, D, P, K, q, fa, la = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,
			ma = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
			ea = /\.js$/,
			ja = /^\.\//;
		w = Object.prototype;
		var L = w.toString,
			ga = w.hasOwnProperty,
			ia = Array.prototype.splice,
			z = "undefined" != typeof window && !!navigator && !!window.document,
			da = !z && "undefined" != typeof importScripts,
			ka = z && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
			W = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
			E = {},
			t = {},
			R = [],
			O = false;
		if ("undefined" == typeof define) {
			if ("undefined" != typeof requirejs) {
				if (H(requirejs)) return;
				t = requirejs, requirejs = void 0
			}
			"undefined" != typeof require && !H(require) && (t = require, require = void 0), j = requirejs = function (e, t, n, r) {
				var i, s = "_";
				return !I(e) && "string" != typeof e && (i = e, I(t) ? (e = t, t = n, n = r) : e = []), i && i.context && (s = i.context), (r = l(E, s)) || (r = E[s] = j.s.newContext(s)), i && r.configure(i), r.require(e, t, n)
			}, j.config = function (e) {
				return j(e)
			}, j.nextTick = "undefined" != typeof setTimeout ? function (e) {
				setTimeout(e, 4)
			} : function (e) {
				e()
			}, require || (require = j), j.version = "2.1.8", j.jsExtRegExp = /^\/|:|\?|\.js$/, j.isBrowser = z, w = j.s = {
				contexts: E,
				newContext: ha
			}, j({}), y(["toUrl", "undef", "defined", "specified"], function (e) {
				j[e] = function () {
					var t = E._;
					return t.require[e].apply(t, arguments)
				}
			}), z && (x = w.head = document.getElementsByTagName("head")[0], C = document.getElementsByTagName("base")[0]) && (x = w.head = C.parentNode), j.onError = aa, j.createNode = function (e) {
				var t = e.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
				return t.type = e.scriptType || "text/javascript", t.charset = "utf-8", t.async = true, t
			}, j.load = function (e, t, n) {
				var r = e && e.config || {};
				if (z) return r = j.createNode(r, t, n), r.setAttribute("data-requirecontext", e.contextName), r.setAttribute("data-requiremodule", t), r.attachEvent && !(r.attachEvent.toString && 0 > r.attachEvent.toString().indexOf("[native code")) && !W ? (O = true, r.attachEvent("onreadystatechange", e.onScriptLoad)) : (r.addEventListener("load", e.onScriptLoad, false), r.addEventListener("error", e.onScriptError, false)), r.src = n, K = r, C ? x.insertBefore(r, C) : x.appendChild(r), K = null, r;
				if (da) try {
					importScripts(n), e.completeLoad(t)
				} catch (i) {
					e.onError(A("importscripts", "importScripts failed for " + t + " at " + n, i, [t]))
				}
			}, z && M(document.getElementsByTagName("script"), function (e) {
				x || (x = e.parentNode);
				if (J = e.getAttribute("data-main")) return q = J, t.baseUrl || (D = q.split("/"), q = D.pop(), fa = D.length ? D.join("/") + "/" : "./", t.baseUrl = fa), q = q.replace(ea, ""), j.jsExtRegExp.test(q) && (q = J), t.deps = t.deps ? t.deps.concat(q) : [q], true
			}),
			define = function (e, t, n) {
				var r, i;
				"string" != typeof e && (n = t, t = e, e = null), I(t) || (n = t, t = null), !t && H(n) && (t = [], n.length && (n.toString().replace(la, "").replace(ma, function (e, n) {
					t.push(n)
				}), t = (1 === n.length ? ["require"] : ["require", "exports", "module"]).concat(t))), O && ((r = K) || (P && "interactive" === P.readyState || M(document.getElementsByTagName("script"), function (e) {
					if ("interactive" === e.readyState) return P = e
				}), r = P), r && (e || (e = r.getAttribute("data-requiremodule")), i = E[r.getAttribute("data-requirecontext")])), (i ? i.defQueue : R).push([e, t, n])
			},
			define.amd = {
				jQuery: true
			}, j.exec = function (b) {
				return eval(b)
			}, j(t)
		}
	})(this),
	define("requireLib", function () {}),
	define("config/products", [], function () {
		var e = 3;
		return {
			timeTravelTicketValue: e,
			layout: {
				specials: ["researchproduction", "researchproduction2", "extraticks", "extraprofit"],
				bonusTicks: ["bonusticks1", "bonusticks2", "bonusticks3", "bonusticks4", "bonusticks5"],
				timeTravelTickets: ["timetravel1", "timetravel2", "timetravel3", "timetravel4", "timetravel5"]
			},
			items: [{
				id: "bonusticks1",
				idNum: 1,
				name: "80 000 bonus ticks",
				description: "Getting there faster",
				consumable: true,
				strategy: {
					type: "bonusTicks",
					amount: 8e4
				},
				priceStr: {
					local: "1u",
					web: "$2.99",
					kongregate: "25 Kreds"
				}
			}, {
				id: "bonusticks2",
				idNum: 2,
				name: "240 000 bonus ticks",
				description: "+50% more",
				consumable: true,
				strategy: {
					type: "bonusTicks",
					amount: 24e4
				},
				priceStr: {
					local: "2u",
					web: "$5.99",
					kongregate: "50 Kreds"
				}
			}, {
				id: "bonusticks3",
				idNum: 3,
				name: "800 000 bonus ticks",
				description: "+200% more",
				consumable: true,
				strategy: {
					type: "bonusTicks",
					amount: 8e5
				},
				priceStr: {
					local: "3u",
					web: "$9.99",
					kongregate: "110 Kreds"
				}
			}, {
				id: "bonusticks4",
				idNum: 4,
				name: "2 400 000 bonus ticks",
				description: "+350% more",
				consumable: true,
				strategy: {
					type: "bonusTicks",
					amount: 24e5
				},
				priceStr: {
					local: "4u",
					web: "$19.99",
					kongregate: "225 Kreds"
				}
			}, {
				id: "bonusticks5",
				idNum: 5,
				name: "12 000 000 bonus ticks",
				description: "+650% more",
				consumable: true,
				strategy: {
					type: "bonusTicks",
					amount: 12e6
				},
				priceStr: {
					local: "5u",
					web: "$59.99",
					kongregate: "565 Kreds"
				}
			}, {
				id: "bonusticks6",
				idNum: 6,
				name: "40 000 000 bonus ticks",
				description: "+1145% more",
				consumable: true,
				strategy: {
					type: "bonusTicks",
					amount: 4e7
				},
				priceStr: {
					local: "6u",
					web: "$119.99",
					kongregate: "1150 Kreds"
				}
			}, {
				id: "timetravel1",
				idNum: 7,
				name: "1 ticket (" + e + "h)",
				description: "Wow, really?",
				consumable: true,
				strategy: {
					type: "timeTravelTickets",
					amount: 1
				},
				priceStr: {
					local: "1u",
					web: "$2.99",
					kongregate: "25 Kreds"
				}
			}, {
				id: "timetravel2",
				idNum: 8,
				name: "3 tickets  (3x" + e + "h)",
				description: "50% cheaper!",
				consumable: true,
				strategy: {
					type: "timeTravelTickets",
					amount: 3
				},
				priceStr: {
					local: "2u",
					web: "$5.99",
					kongregate: "50 Kreds"
				}
			}, {
				id: "timetravel3",
				idNum: 9,
				name: "8 tickets  (8x" + e + "h)",
				description: "140% cheaper!",
				consumable: true,
				strategy: {
					type: "timeTravelTickets",
					amount: 8
				},
				priceStr: {
					local: "3u",
					web: "$9.99",
					kongregate: "110 Kreds"
				}
			}, {
				id: "timetravel4",
				idNum: 10,
				name: "25 tickets (25x" + e + "h)",
				description: "270% cheaper!",
				consumable: true,
				strategy: {
					type: "timeTravelTickets",
					amount: 25
				},
				priceStr: {
					local: "4u",
					web: "$19.99",
					kongregate: "225 Kreds"
				}
			}, {
				id: "timetravel5",
				idNum: 11,
				name: "100 tickets (100x" + e + "h)",
				description: "400% cheaper!",
				consumable: true,
				strategy: {
					type: "timeTravelTickets",
					amount: 100
				},
				priceStr: {
					local: "5u",
					web: "$59.99",
					kongregate: "565 Kreds"
				}
			}, {
				id: "timetravel6",
				idNum: 12,
				name: "300 tickets (300x" + e + "h)",
				description: "650% cheaper!",
				consumable: true,
				strategy: {
					type: "timeTravelTickets",
					amount: 300
				},
				priceStr: {
					local: "6u",
					web: "$119.99",
					kongregate: "1150 Kreds"
				}
			}, {
				id: "researchproduction",
				idNum: 13,
				name: "Evolved brain",
				description: "3x research points production",
				consumable: false,
				strategy: {
					type: "researchProductionBonus",
					bonus: 3
				},
				priceStr: {
					local: "6u",
					web: "$9.99",
					kongregate: "110 Kreds"
				}
			}, {
				id: "researchproduction2",
				idNum: 14,
				name: "Alien brain",
				description: "4x research points production",
				consumable: false,
				requiresProduct: "researchproduction",
				strategy: {
					type: "researchProductionBonus",
					bonus: 4
				},
				priceStr: {
					local: "6u",
					web: "$9.99",
					kongregate: "110 Kreds"
				}
			}, {
				id: "extraticks",
				idNum: 15,
				name: "Chronobooster",
				description: "+8 extra ticks per second",
				consumable: false,
				strategy: {
					type: "extraTicks",
					bonus: 8
				},
				priceStr: {
					local: "7u",
					web: "$19.99",
					kongregate: "225 Kreds"
				}
			}, {
				id: "extraprofit",
				idNum: 16,
				name: "Tax evasion",
				description: "3x profit!",
				consumable: false,
				requiresProduct: "extraticks",
				strategy: {
					type: "extraProfit",
					bonus: 3
				},
				priceStr: {
					local: "7u",
					web: "$19.99",
					kongregate: "225 Kreds"
				}
			}, {
				id: "starter1",
				idNum: 18,
				name: "Starter pack",
				description: "8 time travel tickets + 300 000 bonus ticks &nbsp; &nbsp; &nbsp;",
				consumable: true,
				special: true,
				strategy: {
					type: "starter",
					timeTravelTickets: 8,
					bonusTicks: 3e5
				},
				priceStr: {
					local: "3u",
					web: "$9.99",
					kongregate: "110 Kreds"
				}
			}, {
				id: "starter2",
				idNum: 17,
				name: "Fun pack",
				description: "3 time travel tickets + 60 000 bonus ticks &nbsp; &nbsp; &nbsp;",
				consumable: true,
				special: true,
				strategy: {
					type: "starter",
					timeTravelTickets: 3,
					bonusTicks: 6e4
				},
				priceStr: {
					local: "2u",
					web: "$5.99",
					kongregate: "50 Kreds"
				}
			}]
		}
	}),
define("config/main/helper/ProductionCostCalculator", [], function () {
		var e = {
				getSumOfProduction: function (e) {
					var t = 0;
					for (var n in e) n != "waste" && !e[n].bonus && (t += e[n].amount);
					return t
				}
			},
			t = function (t, n) {
				this.componentsById = t, this.sourceBuildings = n, this.strategies = {
					buyer: {
						selfCost: function (t, n) {
							var r = t.strategy.interval * t.runningCostPerTick,
								i = e.getSumOfProduction(t.strategy.purchaseResources);
							return r / i + t.strategy.purchaseResources[n].price
						},
						inputCost: function (e, t) {
							return 1
						}
					},
					converter: {
						selfCost: function (t) {
							var n = t.strategy.interval * t.runningCostPerTick,
								r = e.getSumOfProduction(t.strategy.production);
							return n / r
						},
						inputCost: function (t, n) {
							var r = e.getSumOfProduction(t.strategy.production);
							if (!t.strategy.inputResources[n]) throw new Error(t.id + " can't handle resources: " + n);
							return t.strategy.inputResources[n].perOutputResource / r
						}
					},
					seller: {
						selfCost: function (t) {
							var n = t.strategy.interval * t.runningCostPerTick,
								r = e.getSumOfProduction(t.strategy.resources);
							return n / r
						},
						inputCost: function (e, t) {
							return 1
						}
					}
				}
			};
		return t.prototype.calculateCostFor = function (e, t, n) {
			var r = this.componentsById[e],
				i = this.sourceBuildings[e];
			i || (i = []);
			var s = this.strategies[r.strategy.type],
				o = 0,
				u = s.selfCost(r, t);
			if (r.strategy.type == "seller") o += this.calculateCostFor(i[t], t, n), r.strategy.resources[t].bonus && (u = 0);
			else
				for (var a in i) o += this.calculateCostFor(i[a], a, n) * s.inputCost(r, a);
			var f = u + o;
			return n[e + "-" + t] = {
				self: u,
				input: o,
				total: f
			}, f
		}, t
	}),
define("config/main/components", ["./helper/ProductionCostCalculator"], function (e) {
		var t = function (e) {},
			n = function () {
				var t = {};
				for (var n in i.components) {
					var r = i.components[n];
					t[r.id] = r
				}
				var s = new e(t, i.productionTree);
				for (var n in i.components) {
					var r = i.components[n];
					if (r.strategy.type == "seller")
						for (var o in r.strategy.resources) {
							var u = {},
								a = s.calculateCostFor(r.id, o, u);
							a > 0 && (r.strategy.resources[o].sellPrice = Math.ceil(a))
						}
				}
				var f = 20;
				for (var n in i.components) {
					var r = i.components[n];
					if (r.strategy.type == "buyer")
						for (var n in r.strategy.purchaseResources) r.strategy.purchaseResources[n].max = r.strategy.purchaseResources[n].amount * f;
					else if (r.strategy.type == "converter") {
						for (var n in r.strategy.inputResources) r.strategy.inputResources[n].max = r.strategy.inputResources[n].perOutputResource * f;
						for (var n in r.strategy.production) r.strategy.production[n].max = r.strategy.production[n].amount * f
					} else if (r.strategy.type == "seller")
						for (var n in r.strategy.resources) r.strategy.resources[n].max = r.strategy.resources[n].amount * f
				}
			},
			r = function (e, t) {
				return e * Math.pow(1e3, t)
			},
			i = {
				selection: [
					["noComponent", "transportLine", "garbageCollector", "sorterVertical", "sorterHorizontal"],
					["ironBuyer", "ironFoundry", "ironSeller", null, "coalBuyer", "steelFoundry", "steelSeller"],
					["oilBuyer", "gasBuyer", "plasticMaker", "plasticSeller", "siliconBuyer", "electronicsMaker", "electronicsSeller"],
					["explosivesBuyer", "bulletMaker", "gunMaker", "gunSeller"],
					["aluminiumBuyer", "engineMaker", "engineSeller"],
					["tankHullMaker", "tankTurretMaker", "tankAssembler", "tankSeller", "dieselRefinery"],
					["jetFuelRefinery", "rocketHullMaker", "rocketWarheadMaker", "rocketAssembler"],
					["droneMaker", "droneControlRoom", "droneSeller"],
					["metalsLab", "gasAndOilLab", "analystCenter", "qualityLab"],
					["researchCenter", "researchCenter2", "researchCenter3", "researchCenter4"]
				],
				productionTree: {
					ironFoundry: {
						ironOre: "ironBuyer"
					},
					ironSeller: {
						iron: "ironFoundry"
					},
					steelFoundry: {
						iron: "ironFoundry",
						coal: "coalBuyer"
					},
					steelSeller: {
						steel: "steelFoundry"
					},
					plasticMaker: {
						oil: "oilBuyer",
						coal: "coalBuyer",
						gas: "gasBuyer"
					},
					plasticSeller: {
						plastic: "plasticMaker"
					},
					electronicsMaker: {
						silicon: "siliconBuyer",
						plastic: "plasticMaker"
					},
					electronicsSeller: {
						electronics: "electronicsMaker"
					},
					engineMaker: {
						aluminium: "aluminiumBuyer",
						steel: "steelFoundry",
						electronics: "electronicsMaker"
					},
					engineSeller: {
						engine: "engineMaker"
					},
					bulletMaker: {
						steel: "steelFoundry",
						explosives: "explosivesBuyer"
					},
					gunMaker: {
						steel: "steelFoundry",
						bullets: "bulletMaker"
					},
					gunSeller: {
						guns: "gunMaker"
					},
					tankHullMaker: {
						steel: "steelFoundry",
						aluminium: "aluminiumBuyer",
						electronics: "electronicsMaker"
					},
					tankTurretMaker: {
						steel: "steelFoundry",
						guns: "gunMaker"
					},
					tankAssembler: {
						tankHull: "tankHullMaker",
						tankTurret: "tankTurretMaker",
						engine: "engineMaker"
					},
					tankSeller: {
						tank: "tankAssembler",
						diesel: "dieselRefinery",
						rocket: "rocketAssembler"
					},
					dieselRefinery: {
						oil: "oilBuyer"
					},
					rocketHullMaker: {
						aluminium: "aluminiumBuyer",
						engine: "engineMaker"
					},
					rocketWarheadMaker: {
						aluminium: "aluminiumBuyer",
						electronics: "electronicsMaker",
						explosives: "explosivesBuyer"
					},
					rocketAssembler: {
						warhead: "rocketWarheadMaker",
						rocketHull: "rocketHullMaker",
						jetFuel: "jetFuelRefinery"
					},
					droneMaker: {
						aluminium: "aluminiumBuyer",
						plastic: "plasticMaker",
						electronics: "electronicsMaker",
						engine: "engineMaker",
						guns: "gunMaker"
					},
					droneControlRoom: {
						steel: "steelFoundry",
						electronics: "electronicsMaker"
					},
					droneSeller: {
						drone: "droneMaker",
						droneControlRoom: "droneControlRoom",
						jetFuel: "jetFuelRefinery",
						rocket: "rocketAssembler"
					},
					jetFuelRefinery: {
						gas: "gasBuyer"
					}
				},
				components: [{
					id: "transportLine",
					idNum: 1,
					name: "Conveyor",
					width: 1,
					height: 1,
					spriteX: 0,
					spriteY: 0,
					iconX: 1,
					iconY: 0,
					drawStrategy: "track",
					buildByDragging: true,
					canBuildToPartial: true,
					runningCostPerTick: 0,
					price: 10,
					priceRefund: 1,
					strategy: {
						type: "transport",
						queueSize: 2
					}
				}, {
					id: "garbageCollector",
					idNum: 25,
					name: "Garbage",
					description: "Accepts any item and discards it as garbage.",
					width: 1,
					height: 1,
					spriteX: 3,
					spriteY: 2,
					iconX: 2,
					iconY: 3,
					runningCostPerTick: 0,
					requiresResearch: "metalsLab",
					price: 2500,
					priceRefund: .5,
					strategy: {
						type: "garbage",
						max: 15,
						removeAmount: 5,
						interval: 10
					}
				}, {
					id: "sorterVertical",
					idNum: 36,
					name: "Sorter",
					width: 1,
					height: 3,
					spriteX: 6,
					spriteY: 8,
					iconX: 7,
					iconY: 3,
					runningCostPerTick: 2,
					requiresResearch: "sorter",
					price: 4e5,
					priceRefund: 1,
					allowedInputs: {
						"0:1:left": true,
						"0:1:right": true
					},
					allowedOutputs: {
						"0:0": true,
						"0:1": true,
						"0:2": true
					},
					strategy: {
						type: "sorter",
						interval: 1
					}
				}, {
					id: "sorterHorizontal",
					idNum: 37,
					name: "Sorter",
					width: 3,
					height: 1,
					spriteX: 3,
					spriteY: 8,
					iconX: 6,
					iconY: 3,
					runningCostPerTick: 2,
					requiresResearch: "sorter",
					price: 4e5,
					priceRefund: 1,
					allowedInputs: {
						"1:0:top": true,
						"1:0:bottom": true
					},
					allowedOutputs: {
						"0:0": true,
						"1:0": true,
						"2:0": true
					},
					strategy: {
						type: "sorter",
						interval: 1
					}
				}, {
					id: "ironBuyer",
					idNum: 2,
					name: "Iron ore buyer",
					width: 2,
					height: 2,
					spriteX: 4,
					spriteY: 0,
					iconX: 2,
					iconY: 0,
					runningCostPerTick: 0,
					price: 50,
					priceRefund: 1,
					strategy: {
						type: "buyer",
						purchaseResources: {
							ironOre: {
								price: 0,
								amount: 1
							}
						},
						outputResourcesOrder: ["ironOre"],
						interval: 10
					}
				}, {
					id: "ironFoundry",
					idNum: 3,
					name: "Iron foundry",
					width: 4,
					height: 2,
					spriteX: 0,
					spriteY: 0,
					iconX: 3,
					iconY: 0,
					runningCostPerTick: 0,
					price: 150,
					priceRefund: 1,
					requiresResearch: null,
					strategy: {
						type: "converter",
						inputResources: {
							ironOre: {
								perOutputResource: 2
							}
						},
						production: {
							iron: {
								amount: 1
							}
						},
						outputResourcesOrder: ["iron"],
						interval: 10
					}
				}, {
					id: "ironSeller",
					idNum: 4,
					name: "Iron seller",
					width: 1,
					height: 2,
					spriteX: 6,
					spriteY: 0,
					iconX: 4,
					iconY: 0,
					runningCostPerTick: 0,
					price: 100,
					priceRefund: 1,
					requiresResearch: null,
					strategy: {
						type: "seller",
						resources: {
							iron: {
								amount: 2,
								sellPrice: 2.5,
								sellMargin: 0
							}
						},
						interval: 10
					}
				}, {
					id: "coalBuyer",
					idNum: 5,
					name: "Coal buyer",
					width: 2,
					height: 1,
					spriteX: 0,
					spriteY: 2,
					iconX: 5,
					iconY: 0,
					runningCostPerTick: 1,
					price: 1e3,
					priceRefund: 1,
					requiresResearch: "steelComponents",
					strategy: {
						type: "buyer",
						purchaseResources: {
							coal: {
								price: 5,
								amount: 2
							}
						},
						outputResourcesOrder: ["coal"],
						interval: 10
					}
				}, {
					id: "steelFoundry",
					idNum: 6,
					name: "Steel foundry",
					width: 3,
					height: 3,
					spriteX: 0,
					spriteY: 3,
					iconX: 6,
					iconY: 0,
					runningCostPerTick: 4,
					price: 4e3,
					priceRefund: 1,
					requiresResearch: "steelComponents",
					strategy: {
						type: "converter",
						inputResources: {
							iron: {
								perOutputResource: 4
							},
							coal: {
								perOutputResource: 4
							}
						},
						production: {
							steel: {
								amount: 1
							}
						},
						outputResourcesOrder: ["steel"],
						interval: 10
					}
				}, {
					id: "steelSeller",
					idNum: 7,
					name: "Steel seller",
					width: 2,
					height: 2,
					spriteX: 3,
					spriteY: 3,
					iconX: 7,
					iconY: 0,
					runningCostPerTick: 1,
					price: 1500,
					priceRefund: 1,
					requiresResearch: "steelComponents",
					strategy: {
						type: "seller",
						resources: {
							steel: {
								amount: 2,
								sellPrice: 0,
								sellMargin: .6
							}
						},
						interval: 10
					}
				}, {
					id: "oilBuyer",
					idNum: 8,
					name: "Oil buyer",
					width: 1,
					height: 3,
					spriteX: 0,
					spriteY: 6,
					iconX: 8,
					iconY: 0,
					runningCostPerTick: 8,
					price: 4e4,
					priceRefund: 1,
					requiresResearch: "plasticComponents",
					strategy: {
						type: "buyer",
						purchaseResources: {
							oil: {
								price: 200,
								amount: 1
							}
						},
						outputResourcesOrder: ["oil"],
						interval: 10
					}
				}, {
					id: "gasBuyer",
					idNum: 30,
					name: "Gas buyer",
					width: 2,
					height: 1,
					spriteX: 6,
					spriteY: 15,
					iconX: 0,
					iconY: 3,
					runningCostPerTick: 6,
					price: 6e4,
					priceRefund: 1,
					requiresResearch: "plasticComponents",
					strategy: {
						type: "buyer",
						purchaseResources: {
							gas: {
								price: 80,
								amount: 1
							}
						},
						outputResourcesOrder: ["gas"],
						interval: 10
					}
				}, {
					id: "plasticMaker",
					idNum: 9,
					name: "Plastic maker",
					width: 2,
					height: 3,
					spriteX: 1,
					spriteY: 6,
					iconX: 9,
					iconY: 0,
					runningCostPerTick: 20,
					price: 24e4,
					priceRefund: 1,
					requiresResearch: "plasticComponents",
					strategy: {
						type: "converter",
						inputResources: {
							oil: {
								perOutputResource: 4
							},
							coal: {
								perOutputResource: 4
							},
							gas: {
								perOutputResource: 2
							}
						},
						production: {
							plastic: {
								amount: 1
							},
							waste: {
								amount: 1
							}
						},
						productionRemoveResearch: {
							waste: "cleanPlastic"
						},
						outputResourcesOrder: ["plastic", "waste"],
						interval: 10
					}
				}, {
					id: "plasticSeller",
					idNum: 10,
					name: "Plastic seller",
					width: 2,
					height: 2,
					spriteX: 3,
					spriteY: 6,
					iconX: 0,
					iconY: 1,
					runningCostPerTick: 12,
					price: 18e4,
					priceRefund: 1,
					requiresResearch: "plasticComponents",
					strategy: {
						type: "seller",
						resources: {
							plastic: {
								amount: 1,
								sellPrice: 0,
								sellMargin: .6
							}
						},
						interval: 10
					}
				}, {
					id: "siliconBuyer",
					idNum: 11,
					name: "Silicon buyer",
					width: 1,
					height: 2,
					spriteX: 0,
					spriteY: 9,
					iconX: 1,
					iconY: 1,
					runningCostPerTick: 120,
					price: r(50, 2),
					priceRefund: 1,
					requiresResearch: "electronicsComponents",
					strategy: {
						type: "buyer",
						purchaseResources: {
							silicon: {
								price: 400,
								amount: 1
							}
						},
						outputResourcesOrder: ["silicon"],
						interval: 10
					}
				}, {
					id: "electronicsMaker",
					idNum: 12,
					name: "Electronics maker",
					width: 2,
					height: 2,
					spriteX: 1,
					spriteY: 9,
					iconX: 2,
					iconY: 1,
					runningCostPerTick: 300,
					price: r(200, 2),
					priceRefund: 1,
					requiresResearch: "electronicsComponents",
					strategy: {
						type: "converter",
						inputResources: {
							silicon: {
								perOutputResource: 2
							},
							plastic: {
								perOutputResource: 4
							}
						},
						production: {
							electronics: {
								amount: 1
							},
							waste: {
								amount: 1
							}
						},
						productionRemoveResearch: {
							waste: "cleanElectronics"
						},
						outputResourcesOrder: ["electronics", "waste"],
						interval: 10
					}
				}, {
					id: "electronicsSeller",
					idNum: 13,
					name: "Electronics seller",
					width: 2,
					height: 2,
					spriteX: 3,
					spriteY: 9,
					iconX: 3,
					iconY: 1,
					runningCostPerTick: 90,
					price: r(80, 2),
					priceRefund: 1,
					requiresResearch: "electronicsComponents",
					strategy: {
						type: "seller",
						resources: {
							electronics: {
								amount: 1,
								sellPrice: 0,
								sellMargin: 2.1
							}
						},
						interval: 10
					}
				}, {
					id: "explosivesBuyer",
					idNum: 17,
					name: "Explosives buyer",
					width: 2,
					height: 1,
					spriteX: 0,
					spriteY: 13,
					iconX: 7,
					iconY: 1,
					runningCostPerTick: 1900,
					price: r(500, 2),
					priceRefund: 1,
					requiresResearch: "gunComponents",
					strategy: {
						type: "buyer",
						purchaseResources: {
							explosives: {
								price: 900,
								amount: 1
							}
						},
						outputResourcesOrder: ["explosives"],
						interval: 20
					}
				}, {
					id: "bulletMaker",
					idNum: 18,
					name: "Bullet maker",
					width: 1,
					height: 1,
					spriteX: 2,
					spriteY: 2,
					iconX: 8,
					iconY: 1,
					runningCostPerTick: 3900,
					price: r(800, 2),
					priceRefund: 1,
					requiresResearch: "gunComponents",
					strategy: {
						type: "converter",
						inputResources: {
							steel: {
								perOutputResource: 3
							},
							explosives: {
								perOutputResource: 2
							}
						},
						production: {
							bullets: {
								amount: 2
							}
						},
						outputResourcesOrder: ["bullets"],
						interval: 20
					}
				}, {
					id: "gunMaker",
					idNum: 19,
					name: "Gun maker",
					width: 3,
					height: 2,
					spriteX: 0,
					spriteY: 14,
					iconX: 9,
					iconY: 1,
					runningCostPerTick: 5900,
					price: r(1, 3),
					priceRefund: 1,
					requiresResearch: "gunComponents",
					strategy: {
						type: "converter",
						inputResources: {
							steel: {
								perOutputResource: 3
							},
							bullets: {
								perOutputResource: 2
							}
						},
						production: {
							guns: {
								amount: 2
							}
						},
						outputResourcesOrder: ["guns"],
						interval: 20
					}
				}, {
					id: "gunSeller",
					idNum: 20,
					name: "Gun seller",
					width: 2,
					height: 2,
					spriteX: 3,
					spriteY: 14,
					iconX: 0,
					iconY: 2,
					runningCostPerTick: 1100,
					price: r(400, 2),
					priceRefund: 1,
					requiresResearch: "gunComponents",
					strategy: {
						type: "seller",
						resources: {
							guns: {
								amount: 2,
								sellPrice: 0,
								sellMargin: 2.1
							}
						},
						interval: 20
					}
				}, {
					id: "aluminiumBuyer",
					idNum: 14,
					name: "Aluminium buyer",
					width: 2,
					height: 2,
					spriteX: 0,
					spriteY: 11,
					iconX: 4,
					iconY: 1,
					runningCostPerTick: 48e3,
					price: r(3, 3),
					priceRefund: 1,
					requiresResearch: "engineComponents",
					strategy: {
						type: "buyer",
						purchaseResources: {
							aluminium: {
								price: 1400,
								amount: 1
							}
						},
						outputResourcesOrder: ["aluminium"],
						interval: 10
					}
				}, {
					id: "engineMaker",
					idNum: 15,
					name: "Engine maker",
					width: 4,
					height: 3,
					spriteX: 2,
					spriteY: 11,
					iconX: 5,
					iconY: 1,
					runningCostPerTick: 12e4,
					price: r(32, 3),
					priceRefund: 1,
					requiresResearch: "engineComponents",
					strategy: {
						type: "converter",
						inputResources: {
							aluminium: {
								perOutputResource: 4
							},
							steel: {
								perOutputResource: 6
							},
							electronics: {
								perOutputResource: 3
							}
						},
						production: {
							engine: {
								amount: 1
							},
							waste: {
								amount: 1
							}
						},
						productionRemoveResearch: {
							waste: "cleanEngines"
						},
						outputResourcesOrder: ["engine", "waste"],
						interval: 10
					}
				}, {
					id: "engineSeller",
					idNum: 16,
					name: "Engine seller",
					width: 2,
					height: 2,
					spriteX: 6,
					spriteY: 11,
					iconX: 6,
					iconY: 1,
					runningCostPerTick: 8e4,
					price: r(8, 3),
					priceRefund: 1,
					requiresResearch: "engineComponents",
					strategy: {
						type: "seller",
						resources: {
							engine: {
								amount: 1,
								sellPrice: 0,
								sellMargin: 2.1
							}
						},
						interval: 10
					}
				}, {
					id: "tankHullMaker",
					idNum: 21,
					name: "Tank hull maker",
					width: 5,
					height: 3,
					spriteX: 0,
					spriteY: 16,
					iconX: 1,
					iconY: 2,
					runningCostPerTick: 16e5,
					price: r(400, 3),
					priceRefund: 1,
					requiresResearch: "tankComponents",
					strategy: {
						type: "converter",
						inputResources: {
							electronics: {
								perOutputResource: 3
							},
							steel: {
								perOutputResource: 6
							},
							aluminium: {
								perOutputResource: 2
							}
						},
						production: {
							tankHull: {
								amount: 1
							}
						},
						outputResourcesOrder: ["tankHull"],
						interval: 10
					}
				}, {
					id: "tankTurretMaker",
					idNum: 22,
					name: "Tank turret maker",
					width: 3,
					height: 2,
					spriteX: 5,
					spriteY: 16,
					iconX: 2,
					iconY: 2,
					runningCostPerTick: 2e6,
					price: r(800, 3),
					priceRefund: 1,
					requiresResearch: "tankComponents",
					strategy: {
						type: "converter",
						inputResources: {
							guns: {
								perOutputResource: 4
							},
							steel: {
								perOutputResource: 6
							}
						},
						production: {
							tankTurret: {
								amount: 1
							}
						},
						outputResourcesOrder: ["tankTurret"],
						interval: 10
					}
				}, {
					id: "tankAssembler",
					idNum: 23,
					name: "Tank assembly",
					width: 2,
					height: 4,
					spriteX: 8,
					spriteY: 16,
					iconX: 3,
					iconY: 2,
					runningCostPerTick: 18e5,
					price: r(700, 3),
					priceRefund: 1,
					requiresResearch: "tankComponents",
					strategy: {
						type: "converter",
						inputResources: {
							tankHull: {
								perOutputResource: 1
							},
							tankTurret: {
								perOutputResource: 1
							},
							engine: {
								perOutputResource: 1
							}
						},
						production: {
							tank: {
								amount: 1
							}
						},
						outputResourcesOrder: ["tank"],
						interval: 10
					}
				}, {
					id: "tankSeller",
					idNum: 26,
					name: "Tank seller",
					width: 2,
					height: 2,
					spriteX: 5,
					spriteY: 18,
					iconX: 4,
					iconY: 2,
					runningCostPerTick: 24e5,
					price: r(500, 3),
					priceRefund: 1,
					requiresResearch: "tankComponents",
					strategy: {
						type: "seller",
						resources: {
							tank: {
								amount: 1,
								sellPrice: 0,
								sellMargin: 2.1
							},
							diesel: {
								amount: 8,
								sellPrice: 0,
								sellMargin: 2.6,
								bonus: true,
								requiresResearch: "dieselRefinery"
							},
							rocket: {
								amount: 1,
								sellPrice: 0,
								sellMargin: 2.6,
								bonus: true,
								requiresResearch: "rocketComponents"
							}
						},
						interval: 10
					}
				}, {
					id: "dieselRefinery",
					idNum: 32,
					name: "Diesel refinery",
					width: 3,
					height: 2,
					spriteX: 5,
					spriteY: 6,
					iconX: 5,
					iconY: 2,
					runningCostPerTick: 18e6,
					price: r(15, 4),
					priceRefund: 1,
					requiresResearch: "dieselRefinery",
					strategy: {
						type: "converter",
						inputResources: {
							oil: {
								perOutputResource: 96
							}
						},
						production: {
							diesel: {
								amount: 16
							},
							waste: {
								amount: 8
							}
						},
						outputResourcesOrder: ["diesel", "diesel", "waste"],
						interval: 10
					}
				}, {
					id: "jetFuelRefinery",
					idNum: 31,
					name: "Jet fuel refinery",
					width: 2,
					height: 2,
					spriteX: 6,
					spriteY: 13,
					iconX: 1,
					iconY: 3,
					runningCostPerTick: 1e8,
					price: r(35, 4),
					priceRefund: 1,
					requiresResearch: "rocketComponents",
					strategy: {
						type: "converter",
						inputResources: {
							gas: {
								perOutputResource: 24
							}
						},
						production: {
							jetFuel: {
								amount: 8
							},
							waste: {
								amount: 4
							}
						},
						outputResourcesOrder: ["jetFuel", "jetFuel", "waste"],
						interval: 10
					}
				}, {
					id: "rocketHullMaker",
					idNum: 27,
					name: "Rocket hull maker",
					width: 3,
					height: 2,
					spriteX: 0,
					spriteY: 19,
					iconX: 6,
					iconY: 2,
					runningCostPerTick: 15e7,
					price: r(60, 4),
					priceRefund: 1,
					requiresResearch: "rocketComponents",
					strategy: {
						type: "converter",
						inputResources: {
							aluminium: {
								perOutputResource: 8
							},
							engine: {
								perOutputResource: 1
							}
						},
						production: {
							rocketHull: {
								amount: 1,
								max: 3
							}
						},
						outputResourcesOrder: ["rocketHull"],
						interval: 10
					}
				}, {
					id: "rocketWarheadMaker",
					idNum: 28,
					name: "Warhead maker",
					width: 2,
					height: 3,
					spriteX: 3,
					spriteY: 19,
					iconX: 7,
					iconY: 2,
					runningCostPerTick: 12e7,
					price: r(130, 4),
					priceRefund: 1,
					requiresResearch: "rocketComponents",
					strategy: {
						type: "converter",
						inputResources: {
							aluminium: {
								perOutputResource: 4
							},
							electronics: {
								perOutputResource: 3
							},
							explosives: {
								perOutputResource: 8
							}
						},
						production: {
							warhead: {
								amount: 1
							}
						},
						outputResourcesOrder: ["warhead"],
						interval: 10
					}
				}, {
					id: "rocketAssembler",
					idNum: 29,
					name: "Rocket assembly",
					width: 2,
					height: 2,
					spriteX: 5,
					spriteY: 20,
					iconX: 8,
					iconY: 2,
					runningCostPerTick: 19e6,
					price: r(110, 4),
					priceRefund: 1,
					requiresResearch: "rocketComponents",
					strategy: {
						type: "converter",
						inputResources: {
							rocketHull: {
								perOutputResource: 2
							},
							warhead: {
								perOutputResource: 2
							},
							jetFuel: {
								perOutputResource: 8
							}
						},
						production: {
							rocket: {
								amount: 2
							}
						},
						outputResourcesOrder: ["rocket"],
						interval: 10
					}
				}, {
					id: "droneMaker",
					idNum: 41,
					name: "Drone maker",
					width: 2,
					height: 6,
					spriteX: 8,
					spriteY: 9,
					iconX: 5,
					iconY: 4,
					runningCostPerTick: 1e9,
					price: r(6, 5),
					priceRefund: 1,
					requiresResearch: "droneComponents",
					strategy: {
						type: "converter",
						inputResources: {
							aluminium: {
								perOutputResource: 64
							},
							plastic: {
								perOutputResource: 48
							},
							electronics: {
								perOutputResource: 24
							},
							engine: {
								perOutputResource: 8
							},
							guns: {
								perOutputResource: 32
							}
						},
						production: {
							drone: {
								amount: 8
							}
						},
						outputResourcesOrder: ["drone"],
						interval: 20
					}
				}, {
					id: "droneControlRoom",
					idNum: 42,
					name: "Drone control room",
					width: 3,
					height: 5,
					spriteX: 10,
					spriteY: 11,
					iconX: 6,
					iconY: 4,
					runningCostPerTick: 15e8,
					price: r(6, 5),
					priceRefund: 1,
					requiresResearch: "droneComponents",
					strategy: {
						type: "converter",
						inputResources: {
							steel: {
								perOutputResource: 96
							},
							electronics: {
								perOutputResource: 24
							}
						},
						production: {
							droneControlRoom: {
								amount: 4
							}
						},
						outputResourcesOrder: ["droneControlRoom"],
						interval: 20
					}
				}, {
					id: "droneSeller",
					idNum: 43,
					name: "Drone seller",
					width: 2,
					height: 2,
					spriteX: 10,
					spriteY: 16,
					iconX: 7,
					iconY: 4,
					runningCostPerTick: 3e9,
					price: r(4, 5),
					priceRefund: 1,
					requiresResearch: "droneComponents",
					strategy: {
						type: "seller",
						resources: {
							drone: {
								amount: 4,
								sellPrice: 0,
								sellMargin: 1.9
							},
							droneControlRoom: {
								amount: 2,
								sellPrice: 0,
								sellMargin: 1.9
							},
							rocket: {
								amount: 8,
								sellPrice: 0,
								bonus: true,
								sellMargin: 6
							},
							jetFuel: {
								amount: 32,
								sellPrice: 0,
								bonus: true,
								sellMargin: 3
							}
						},
						interval: 20
					}
				}, {
					id: "researchCenter",
					idNum: 33,
					name: "Research center",
					width: 4,
					height: 4,
					spriteX: 5,
					spriteY: 2,
					iconX: 3,
					iconY: 3,
					runningCostPerTick: 4,
					price: 1e3,
					priceRefund: 1,
					requiresResearch: "researchCenter",
					strategy: {
						type: "researchCenter",
						researchProduction: 1,
						resources: {
							report1: {
								max: 4,
								bonus: 2
							}
						},
						interval: 10
					}
				}, {
					id: "metalsLab",
					idNum: 34,
					name: "Metals lab",
					width: 3,
					height: 2,
					spriteX: 7,
					spriteY: 0,
					iconX: 5,
					iconY: 3,
					runningCostPerTick: 8,
					price: 4e4,
					priceRefund: 1,
					requiresResearch: "metalsLab",
					strategy: {
						type: "lab",
						inputResources: {
							iron: {
								perOutputResource: 1,
								max: 25,
								bonus: 4
							},
							steel: {
								perOutputResource: 1,
								max: 25,
								bonus: 6
							},
							aluminium: {
								perOutputResource: 1,
								max: 25,
								bonus: 5
							}
						},
						production: {
							report1: {
								amount: 1,
								max: 25
							}
						},
						outputResourcesOrder: ["report1"],
						interval: 20
					}
				}, {
					id: "gasAndOilLab",
					idNum: 35,
					name: "Gas&Oil lab",
					width: 2,
					height: 3,
					spriteX: 8,
					spriteY: 6,
					iconX: 4,
					iconY: 3,
					runningCostPerTick: 200,
					price: 6e5,
					priceRefund: 1,
					requiresResearch: "gasAndOilLab",
					strategy: {
						type: "lab",
						inputResources: {
							gas: {
								perOutputResource: 1,
								max: 25,
								bonus: 2
							},
							oil: {
								perOutputResource: 1,
								max: 25,
								bonus: 3
							},
							plastic: {
								perOutputResource: 1,
								max: 25,
								bonus: 10
							},
							diesel: {
								perOutputResource: 1,
								max: 3,
								bonus: 8
							},
							jetFuel: {
								perOutputResource: 1,
								max: 3,
								bonus: 8
							}
						},
						production: {
							report2: {
								amount: 1,
								max: 25
							}
						},
						outputResourcesOrder: ["report2"],
						interval: 20
					}
				}, {
					id: "researchCenter2",
					idNum: 38,
					name: "Research center 2",
					width: 4,
					height: 4,
					spriteX: 10,
					spriteY: 0,
					iconX: 2,
					iconY: 4,
					runningCostPerTick: 200,
					price: 6e5,
					priceRefund: 1,
					requiresResearch: "gasAndOilLab",
					applyUpgradesFrom: "researchCenter",
					strategy: {
						type: "researchCenter",
						researchProduction: 4,
						resources: {
							report2: {
								max: 4,
								bonus: 3
							}
						},
						interval: 20
					}
				}, {
					id: "analystCenter",
					idNum: 39,
					name: "Analytics center",
					width: 3,
					height: 3,
					spriteX: 10,
					spriteY: 8,
					iconX: 4,
					iconY: 4,
					runningCostPerTick: 12e3,
					price: r(2, 3),
					priceRefund: 1,
					requiresResearch: "analystCenter",
					strategy: {
						type: "converter",
						inputResources: {
							report1: {
								perOutputResource: 32,
								max: 256,
								bonus: 10
							},
							report2: {
								perOutputResource: 32,
								max: 256,
								bonus: 10
							}
						},
						production: {
							report3: {
								amount: 20,
								max: 100
							},
							waste: {
								amount: 20,
								max: 100
							}
						},
						outputResourcesOrder: ["report3", "waste"],
						interval: 40
					}
				}, {
					id: "researchCenter3",
					idNum: 40,
					name: "Research center 3",
					width: 4,
					height: 4,
					spriteX: 10,
					spriteY: 4,
					iconX: 3,
					iconY: 4,
					runningCostPerTick: 35e3,
					price: r(6, 3),
					priceRefund: 1,
					requiresResearch: "analystCenter",
					applyUpgradesFrom: "researchCenter",
					strategy: {
						type: "researchCenter",
						researchProduction: 20,
						resources: {
							report3: {
								max: 4,
								bonus: 16
							}
						},
						interval: 40
					}
				}, {
					id: "qualityLab",
					idNum: 44,
					name: "Quality lab",
					width: 4,
					height: 2,
					spriteX: 12,
					spriteY: 16,
					iconX: 0,
					iconY: 4,
					runningCostPerTick: r(400, 2),
					price: r(3, 5),
					priceRefund: 1,
					requiresResearch: "qualityCenter",
					strategy: {
						type: "lab",
						inputResources: {
							tank: {
								perOutputResource: 1,
								max: 25,
								bonus: 21
							},
							rocket: {
								perOutputResource: 1,
								max: 25,
								bonus: 16
							},
							engine: {
								perOutputResource: 1,
								max: 25,
								bonus: 10
							},
							guns: {
								perOutputResource: 1,
								max: 3,
								bonus: 6
							},
							drone: {
								perOutputResource: 1,
								max: 3,
								bonus: 24
							}
						},
						production: {
							report4: {
								amount: 1,
								max: 1e3
							}
						},
						outputResourcesOrder: ["report4"],
						interval: 5
					}
				}, {
					id: "researchCenter4",
					idNum: 45,
					name: "Research center 4",
					width: 4,
					height: 4,
					spriteX: 10,
					spriteY: 18,
					iconX: 1,
					iconY: 4,
					runningCostPerTick: r(50, 2),
					price: r(2, 5),
					priceRefund: 1,
					requiresResearch: "qualityCenter",
					applyUpgradesFrom: "researchCenter",
					strategy: {
						type: "researchCenter",
						researchProduction: 100,
						resources: {
							report4: {
								max: 64,
								bonus: 100
							}
						},
						interval: 40
					}
				}]
			};
		return n(), i
	}),
define("config/main/resources", [], function () {
		return [{
			id: "ironOre",
			idNum: 1,
			name: "Iron ore",
			nameShort: "Iron ore",
			spriteX: 0,
			spriteY: 0
		}, {
			id: "iron",
			idNum: 2,
			name: "Iron",
			nameShort: "Iron",
			spriteX: 1,
			spriteY: 0
		}, {
			id: "coal",
			idNum: 3,
			name: "Coal",
			nameShort: "Coal",
			spriteX: 2,
			spriteY: 0
		}, {
			id: "steel",
			idNum: 4,
			name: "Steel",
			nameShort: "Steel",
			spriteX: 3,
			spriteY: 0
		}, {
			id: "oil",
			idNum: 5,
			name: "Oil",
			nameShort: "Oil",
			spriteX: 4,
			spriteY: 0
		}, {
			id: "plastic",
			idNum: 6,
			name: "Plastic",
			nameShort: "Plastic",
			spriteX: 5,
			spriteY: 0
		}, {
			id: "silicon",
			idNum: 7,
			name: "Silicon",
			nameShort: "Silicon",
			spriteX: 6,
			spriteY: 0
		}, {
			id: "electronics",
			idNum: 8,
			name: "Electronics",
			nameShort: "Electronics",
			spriteX: 7,
			spriteY: 0
		}, {
			id: "aluminium",
			idNum: 9,
			name: "Aluminium",
			nameShort: "Alu",
			spriteX: 0,
			spriteY: 1
		}, {
			id: "engine",
			idNum: 10,
			name: "Engine",
			nameShort: "Engine",
			spriteX: 1,
			spriteY: 1
		}, {
			id: "explosives",
			idNum: 11,
			name: "Explosives",
			nameShort: "Explosives",
			spriteX: 2,
			spriteY: 1
		}, {
			id: "bullets",
			idNum: 12,
			name: "Bullets",
			nameShort: "Bullets",
			spriteX: 3,
			spriteY: 1
		}, {
			id: "guns",
			idNum: 13,
			name: "Guns",
			nameShort: "Guns",
			spriteX: 4,
			spriteY: 1
		}, {
			id: "tankHull",
			idNum: 14,
			name: "Tank hull",
			nameShort: "Tank hull",
			spriteX: 5,
			spriteY: 1
		}, {
			id: "tankTurret",
			idNum: 15,
			name: "Tank turret",
			nameShort: "Tank turret",
			spriteX: 6,
			spriteY: 1
		}, {
			id: "tank",
			idNum: 16,
			name: "Tank",
			nameShort: "Tank",
			spriteX: 7,
			spriteY: 1
		}, {
			id: "rocketHull",
			idNum: 17,
			name: "Rocket hull",
			nameShort: "Rocket hull",
			spriteX: 1,
			spriteY: 2
		}, {
			id: "warhead",
			idNum: 18,
			name: "Warhead",
			nameShort: "Warhead",
			spriteX: 2,
			spriteY: 2
		}, {
			id: "rocket",
			idNum: 19,
			name: "Rocket",
			nameShort: "Rocket",
			spriteX: 3,
			spriteY: 2
		}, {
			id: "waste",
			idNum: 20,
			name: "Waste",
			nameShort: "Waste",
			spriteX: 4,
			spriteY: 2
		}, {
			id: "gas",
			idNum: 21,
			name: "Gas",
			nameShort: "Gas",
			spriteX: 6,
			spriteY: 2
		}, {
			id: "jetFuel",
			idNum: 22,
			name: "Jet fuel",
			nameShort: "Jet fuel",
			spriteX: 7,
			spriteY: 2
		}, {
			id: "diesel",
			idNum: 23,
			name: "Diesel",
			nameShort: "Diesel",
			spriteX: 5,
			spriteY: 2
		}, {
			id: "drone",
			idNum: 27,
			name: "Drone",
			nameShort: "Drone",
			spriteX: 4,
			spriteY: 3
		}, {
			id: "droneControlRoom",
			idNum: 28,
			name: "Drone control rooms",
			nameShort: "Drone CR",
			spriteX: 5,
			spriteY: 3
		}, {
			id: "report1",
			idNum: 24,
			name: "Metal report",
			nameShort: "Metal report",
			spriteX: 0,
			spriteY: 3
		}, {
			id: "report2",
			idNum: 25,
			name: "Gas&oil report",
			nameShort: "Gas&oil report",
			spriteX: 1,
			spriteY: 3
		}, {
			id: "report3",
			idNum: 26,
			name: "Big report",
			nameShort: "Big report",
			spriteX: 2,
			spriteY: 3
		}, {
			id: "report4",
			idNum: 29,
			name: "Quality report",
			nameShort: "Quality report",
			spriteX: 3,
			spriteY: 3
		}]
	}),
define("config/main/factories", [], function () {
		var e = [{
			id: "level1",
			idNum: 1,
			name: "Factory",
			tilesX: 68,
			tilesY: 38,
			startX: 8,
			startY: 10,
			price: 100,
			terrains: {
				G: "grass",
				X: "wall",
				".": "road",
				" ": "floor"
			},
			buildableTerrains: {
				floor: true
			},
			terrainMap: "XXXXXXXXXXXX.GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG.GGGGGGGGGG.GGGGGGGGGGX          X.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXG.GXXXXXXXXX.XXXXXXXXXGX          X.X        X         X           XG.GX        .        XGX           .         X         X            G.G         .        XGX           .         X                      G.G       XX.XX      XGX          X.X        X                     XG.GX      XG.GX      XGX          X.X        X                     XG.GXXX XXXXG.GX      XGX          X.X      X XX X                  XG.GX      XXXXX      XGX           .       X    X      X           XG.GX                 XGXXXX    XXXX.X      X    X      X           XG.GX                 XG.............X      X    X      XXXXXXXXXXXXXG.GXXXXXXXXXX  XXX  XXGXXXX    XXXX.X      X    X      X...................................X          X.X      X    X      X.GGGGGGXXXXXXXXXXXXXXX.XX  XXX  XXXX          X.X                  X.GGGGGGX              .           XX          X.XXX   XXXXXXXXX   XX.GGGGGGX             X.X          XX          X......................GGGGGGXX           XX.XX         XX          X.XXX   XXXXXXXXX   XX.GGGGGGGX           XG.GX         XX     X    X.X                  X.GGGGGGXX           XX.XX         XX     X    X.X                  X.GGGGGGX              .           XX     X    X.X            X     X.GGGGGGX             X.X          XX     XXXXXX.X            X     X.GGGGGGXX           XX.XX         XX         XG.X            X     X.GGGGGGGX           XG.GX         XXX         G.             X     X.GGGGGGXX           XX.XX         XGX         G.             X     X.GGGGGGX              .           XGX         G.             X     X.XXXGXXX             X.X          XGX         G.             X     X.X XXX              XX.XX         XGX        XG.X                   .                   XG.GX         XGXXXX  XXXXG.X                   .                   XX.XX         XGGGGGGGGGGGG.XXXXXXXX   XXX   XXX.X                    .           X...................GGGGGGGGGGGGGG.X                    .           XGGGGX  XXXXG.XXXXX................X                    .           XGXXXX     XX.X   XXXX   XXX   XXX.X                    .           XGX          .       X           X.X                  XX.X          XGX          .                    .                   X..X          XGX          .                    .      XXXXXXXX     X.XX          XGX        XX.X      X            .      XGGGGGGX     X.X           XGXXXXXXXXXXG.X      X           X.XXXXXXXGGGGGGXXXXXXX.X           XGGGGGGGGGGGG.XXXXXXXXXXXXXXXXXXXX.GGGGGGGGGGGGGGGGGGGG.XXXXXXXXXXXXX",
			buildMap: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX          XXX        X         X           XXXXX        -        XXX           -         X         X            ---         -        XXX           -         X                      ---       XXXXX      XXX          XXX        X                     XXXXX      XXXXX      XXX          XXX        X                     XXXXXXX XXXXXXXX      XXX          XXX      X XX X                  XXXXX      XXXXX      XXX           -       X    X      X           XXXXX                 XXXXXX    XXXXXX      X    X      X           XXXXX                 XXXXXX----XXXXXX      X    X      XXXXXXXXXXXXXXXXXXXXXXXXXX  XXX  XXXXXXX    XXXXXX      X    X      XXXXXXXXXXXXXXXXXXXXXXXXXX--XXX--XXXX          XXX      X    X      XXXXXXXXXXXXXXXXXXXXXXXXXX  XXX  XXXX          XXX                  XXXXXXXXX              -           XX          XXXXX   XXXXXXXXX   XXXXXXXXXX             XXX          XX          XXXXX---XXXXXXXXX---XXXXXXXXXXX           XXXXX         XX          XXXXX   XXXXXXXXX   XXXXXXXXXXX           XXXXX         XX     X    XXX                  XXXXXXXXXX           XXXXX         XX     X    XXX                  XXXXXXXXX              -           XX     X    XXX            X     XXXXXXXXX             XXX          XX     XXXXXXXX            X     XXXXXXXXXX           XXXXX         XX         XXXX            X     XXXXXXXXXX           XXXXX         XXX         --             X     XXXXXXXXXX           XXXXX         XXX         --             X     XXXXXXXXX              -           XXX         --             X     XXXXXXXXX             XXX          XXX         --             X     XXX XXX              XXXXX         XXX        X-XX                   -                   XXXXX         XXXXXX  XXXX-XX                   -                   XXXXX         XXXXXX-------XXXXXXXXX   XXX   XXXXX                    -           XXXXXX--XXXXXXXXXXXX--------------XX                    -           XXXXXX  XXXXXXXXXXXXXX---XXX---XXXXX                    -           XXXXXX     XXXX   XXXX   XXX   XXXXX                    -           XXX          -       X           XXX                  XXXX          XXX          -                    -                   XXXX          XXX          -                    -      XXXXXXXX     XXXX          XXX        XXXX      X            -      XXXXXXXX     XXX           XXXXXXXXXXXXXXX      X           XXXXXXXXXXXXXXXXXXXXXXXX           XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
			areas: [{
				id: "a2",
				name: "A2",
				idNum: 1,
				price: 1200,
				locations: [{
					x: 0,
					y: 0,
					x2: 11,
					y2: 9
				}]
			}, {
				id: "a4",
				name: "A4",
				idNum: 2,
				price: 25e4,
				locations: [{
					x: 0,
					y: 11,
					x2: 11,
					y2: 27
				}]
			}, {
				id: "a1",
				name: "A1",
				idNum: 3,
				price: 700,
				locations: [{
					x: 0,
					y: 30,
					x2: 11,
					y2: 37
				}]
			}, {
				id: "a5",
				name: "A5",
				idNum: 4,
				price: 26e6,
				locations: [{
					x: 13,
					y: 1,
					x2: 32,
					y2: 14
				}]
			}, {
				id: "a6",
				name: "A6",
				idNum: 5,
				price: 32e6,
				locations: [{
					x: 33,
					y: 1,
					x2: 44,
					y2: 10
				}]
			}, {
				id: "a3",
				name: "A3",
				idNum: 6,
				price: 12e3,
				locations: [{
					x: 13,
					y: 31,
					x2: 32,
					y2: 37
				}, {
					x: 13,
					y: 30,
					x2: 17,
					y2: 30
				}]
			}, {
				id: "a7",
				name: "A7",
				idNum: 7,
				price: 14e7,
				locations: [{
					x: 48,
					y: 1,
					x2: 66,
					y2: 10
				}]
			}, {
				id: "a9",
				name: "A9",
				idNum: 8,
				price: 4e10,
				locations: [{
					x: 34,
					y: 12,
					x2: 53,
					y2: 36
				}, {
					x: 54,
					y: 12,
					x2: 54,
					y2: 32
				}]
			}, {
				id: "a8",
				name: "A8",
				idNum: 9,
				price: 29e8,
				locations: [{
					x: 56,
					y: 12,
					x2: 67,
					y2: 37
				}, {
					x: 55,
					y: 34,
					x2: 55,
					y2: 37
				}]
			}],
			startComponents: [{
				id: "ironBuyer",
				x: 15,
				y: 18
			}, {
				id: "ironFoundry",
				x: 19,
				y: 18
			}, {
				id: "ironSeller",
				x: 25,
				y: 18
			}, {
				id: "transportLine",
				x: 17,
				y: 18
			}, {
				id: "transportLine",
				x: 18,
				y: 18
			}, {
				id: "transportLine",
				x: 23,
				y: 18
			}, {
				id: "transportLine",
				x: 24,
				y: 18
			}],
			transportLineConnections: [{
				fromX: 16,
				fromY: 18,
				toX: 17,
				toY: 18
			}, {
				fromX: 17,
				fromY: 18,
				toX: 18,
				toY: 18
			}, {
				fromX: 18,
				fromY: 18,
				toX: 19,
				toY: 18
			}, {
				fromX: 22,
				fromY: 18,
				toX: 23,
				toY: 18
			}, {
				fromX: 23,
				fromY: 18,
				toX: 24,
				toY: 18
			}, {
				fromX: 24,
				fromY: 18,
				toX: 25,
				toY: 18
			}]
		}, {
			id: "level2",
			idNum: 2,
			name: "Kilofactory",
			tilesX: 50,
			tilesY: 35,
			startX: 12,
			startY: 0,
			price: 1e9,
			terrains: {
				G: "grass",
				X: "wall",
				".": "road",
				" ": "floor"
			},
			buildableTerrains: {
				floor: true
			},
			terrainMap: "GGGGGGGGGGGGGGG.GGGGGGGGGGGGGGGGGGGG.GGGGGGGGGGGGGGXXXXXXXXXXXXGG.GXXXXXXXXXXXXXXXXXXX.XXXXXXXXXXXXGGX          XGG.GX                 X.X          XGGX          XGG.GX                 X.X          XGGX          XGG.GX                 X.X          XGGX          XGG.GX                 X.X          XGGX           GG.G                   .           XGGX          XGG.GX                 X.X          XGGX           GG.G                   .           XGGX          XGG.GX                 X.X          XGGX           GG.G                   .           XGGX          XGG.GX                 X.X          XGGX           GG.G                   .           XGGX          XGG.GX                 X.X          XGGX           GG.G                   .           XGGX          XGG.GX                 X.X          XGGX          XGG.GX                 X.X          XGGX          XGG.GX                 X.X          XGGXXXX    XXXXGG.GXXXXX  X  XXX  X  X.XXXXXXXXXXXXG................GGGGGG  G  GGG  G  G.GGGGGGGGGGGGGGXXXX    XXXXGG.GGGGGGGGGGGGGGGGGGGG.GGGGGGGGGGGGGGX          XGG......................GGGGGGG GGGGGGX          XGG.GGGGGG  G  G.G  G  GGGGGGGG   GGGGGX          XGG.GXXXXX  X  X.X  X  XXXXXGGGG GGGGGGX          XGG.GX         X.X         XGGGGGGGGGGGX          XGG.GX         X.X         XGGGGGGGGGGGX          XGG.GX         X.X         XGGGG GGGGGGX          XGG.GX         X.X         XGGG   GGGGGX          XGG.GX         X.X         XGGGG GGGGGGX          XGG.GX         X.X         XGGGGGGGGGGGX          XGG.GX         X.X         XGGGGGGGGGGGX          XGG.GX        XX.XX        XGGGG GGGGGGX          XGG.GX        XG.GX        XGGG   GGGGGXXXXXXXXXXXXGG.GXXXXXXXXXXG.GXXXXXXXXXXGGGG GGGGGGGGGGGGGGGGGGGG.GGGGGGGGGGGG.GGGGGGGGGGGGGGGGGGGGG",
			buildMap: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX          XXXXXX                 XXX          XXXX          XXXXXX                 XXX          XXXX          XXXXXX                 XXX          XXXX          XXXXXX                 XXX          XXXX           ----                   -           XXXX          X----X                 X-X          XXXX           ----                   -           XXXX          X----X                 X-X          XXXX           ----                   -           XXXX          X----X                 X-X          XXXX           ----                   -           XXXX          X----X                 X-X          XXXX           ----                   -           XXXX          XXXXXX                 XXX          XXXX          XXXXXX                 XXX          XXXX          XXXXXX                 XXX          XXXXXXX    XXXXXXXXXXXXX  X  XXX  X  XXXXXXXXXXXXXXXXXXXX----XXXXXXXXXXXXX  -  XXX  -  XXXXXXXXXXXXXXXXXXXX    XXXXXXXXXXXXX-----XXX-----XXXXXXXXXXXXXXXXX          XXXXXXXXXX-----XXX-----XXXXXXXXX XXXXXXX          XXXXXXXXXX  -  XXX  -  XXXXXXXX   XXXXXX          XXXXXXXXXX  X  XXX  X  XXXXXXXXX XXXXXXX          XXXXXX         XXX         XXXXXXXXXXXXX          XXXXXX         XXX         XXXXXXXXXXXXX          XXXXXX         XXX         XXXXX XXXXXXX          XXXXXX         XXX         XXXX   XXXXXX          XXXXXX         XXX         XXXXX XXXXXXX          XXXXXX         XXX         XXXXXXXXXXXXX          XXXXXX         XXX         XXXXXXXXXXXXX          XXXXXX        XXXXX        XXXXX XXXXXXX          XXXXXX        XXXXX        XXXX   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
			areas: [{
				id: "b3",
				name: "B3",
				idNum: 1,
				price: 12e9,
				locations: [{
					x: 1,
					y: 1,
					x2: 12,
					y2: 18
				}]
			}, {
				id: "b1",
				name: "B1",
				idNum: 2,
				price: 25e8,
				locations: [{
					x: 16,
					y: 22,
					x2: 27,
					y2: 34
				}]
			}, {
				id: "b2",
				name: "B2",
				idNum: 3,
				price: 25e8,
				locations: [{
					x: 29,
					y: 22,
					x2: 39,
					y2: 34
				}]
			}, {
				id: "b5",
				name: "B5",
				idNum: 4,
				price: 8e11,
				locations: [{
					x: 37,
					y: 1,
					x2: 48,
					y2: 18
				}]
			}, {
				id: "b4",
				name: "B4",
				idNum: 5,
				price: 26e10,
				locations: [{
					x: 1,
					y: 20,
					x2: 12,
					y2: 33
				}]
			}]
		}, {
			id: "level3",
			idNum: 3,
			name: "Megafactory",
			tilesX: 68,
			tilesY: 42,
			startX: 10,
			startY: 3,
			price: 5e12,
			terrains: {
				G: "grass",
				X: "wall",
				".": "road",
				" ": "floor"
			},
			buildableTerrains: {
				floor: true
			},
			terrainMap: "GGGGGGGGGGGGGGGGGGGGGGG.GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGXXXXXXXXXXXXXXXXXXXXXX.GXXXXXXXXXXXXXXXXXXGGXXXXXXXXXXXXXXXXXXXXXXGGX                     .G                 XGGX                    XGGX                     .G                  GG                     XGGX                    X.GX                 GG                     XGGX                    X.GX                 GG                     XGGX                    X.GX                 GG                     XGGX                    X.GX                 GG                     XGGX                    X.GX                 GG                     XGGX                    X.GX                 GG                     XGGX                    X.GX                XGGX                    XGGX                    X.GX          XXXXXXXGGXXX                  XGGX                    X.GX          XGGGGGGGGGGX                  XGGX             XXX    X.GX          XGGGGGGGGGGX                  XGGX             X........GX          XGGGGGGGGGGX                  XGGX             X.X    XXXX          XGGGGGGGGGGX                  XGGX             X.X                  XGGGGGGGGGGXXXX   XXX  XXX   XXGGX             X.X                  XGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGX             X.X                  XGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGXXXX   XXXXXXXX.X                  XGG..............................................X                  XGG.GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG.X                  XGG.GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG.X                  XGG.GGXXXXXXXXX   XXX  XXX   XXGGGGGGGGGGGGGGGGG.X                  XGG.GGX                       XGGXXXX   XXXXXGGG.X                  XGG.GGX                       XGGX          XGGG.X                  XGG.GGX                       XGGX          XGGG.X                  XGG.GGX                       XGGX          XGGG.X                  XGG.GGX                       XGGX          XGGG.X                  XGG.GGX                       XGGX          XGGG.X    XXXXXXXXXX    XGG.GGX                       XGGX          XGGG........................GGX                       XGGX          XGGG.X    XXXXXXXXXX    XGG.GGX                       XGGX          XGGG.X                  XGG.GGX                       XGGX          XGGG.X                  XGG.GGX                       XGGX          XGGG.X                  XGG.GGX                       XGGX          XGGG.X                  XGG.GGX                       XGGX          XGGG.X                   GG.GG                        XGGX          XGGG.X                   GG.GG                        XGGX          XGGG.X                  XGG.GGX                       XGGX          XGGG.X                  XGG.GGX                       XGGXXXXXXXXXXXXGGG.X                  XGG.GGXXXXXXXXXXXXXXXXXXXXXXXXXGGGGGGGGGGGGGGGGG.XXXXXXXXXXXXXXXXXXXXGG.GGGGGGGGGGGGGGGGGGGGGGGGGGGG",
			buildMap: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                     --                 XXXX                    XXXX                     --                  --                     XXXX                    XXXX                 --                     XXXX                    XXXX                 --                     XXXX                    XXXX                 --                     XXXX                    XXXX                 --                     XXXX                    XXXX                 --                     XXXX                    XXXX                 --                     XXXX                    XXXX                XXXX                    XXXX                    XXXX          XXXXXXXXXXXX                  XXXX                    XXXX          XXXXXXXXXXXX                  XXXX             XXX    XXXX          XXXXXXXXXXXX                  XXXX             XXX----XXXX          XXXXXXXXXXXX                  XXXX             XXX    XXXX          XXXXXXXXXXXX                  XXXX             XXX                  XXXXXXXXXXXXXXX   XXX  XXX   XXXXX             XXX                  XXXXXXXXXXXXXXX--------------XXXXX             XXX                  XXXXXXXXXXXXXXX---XXX--XXX---XXXXXXXX   XXXXXXXXXX                  XXXXXXXXXXXXXXX---XXX--XXX---XXXXXXXX---XXXXXXXXXX                  XXXXXXXXXXXXXXX---XXX--XXX---XXXXXXXX---XXXXXXXXXX                  XXXXXXXXXXXXXXX--------------XXXXXXXX---XXXXXXXXXX                  XXXXXXXXXXXXXXX   XXX  XXX   XXXXXXXX---XXXXXXXXXX                  XXXXXXX                       XXXXXXX   XXXXXXXXXX                  XXXXXXX                       XXXX          XXXXXX                  XXXXXXX                       XXXX          XXXXXX                  XXXXXXX                       XXXX          XXXXXX                  XXXXXXX                       XXXX          XXXXXX                  XXXXXXX                       XXXX          XXXXXX    XXXXXXXXXX    XXXXXXX                       XXXX          XXXXXX----XXXXXXXXXX----XXXXXXX                       XXXX          XXXXXX    XXXXXXXXXX    XXXXXXX                       XXXX          XXXXXX                  XXXXXXX                       XXXX          XXXXXX                  XXXXXXX                       XXXX          XXXXXX                  XXXXXXX                       XXXX          XXXXXX                  XXXXXXX                       XXXX          XXXXXX                   -----                        XXXX          XXXXXX                   -----                        XXXX          XXXXXX                  XXXXXXX                       XXXX          XXXXXX                  XXXXXXX                       XXXXXXXXXXXXXXXXXXXX                  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
			areas: [{
				id: "c3",
				name: "C3",
				idNum: 1,
				price: 2e12,
				locations: [{
					x: 1,
					y: 1,
					x2: 15,
					y2: 19
				}, {
					x: 16,
					y: 1,
					x2: 22,
					y2: 13
				}]
			}, {
				id: "c2",
				name: "C2",
				idNum: 2,
				price: 15e12,
				locations: [{
					x: 1,
					y: 24,
					x2: 12,
					y2: 40
				}]
			}, {
				id: "c1",
				name: "C1",
				idNum: 3,
				price: 7e12,
				locations: [{
					x: 17,
					y: 31,
					x2: 36,
					y2: 41
				}]
			}, {
				id: "c4",
				name: "C4",
				idNum: 4,
				price: 15e13,
				locations: [{
					x: 42,
					y: 22,
					x2: 66,
					y2: 40
				}]
			}, {
				id: "c5",
				name: "C5",
				idNum: 5,
				price: 6e13,
				locations: [{
					x: 47,
					y: 1,
					x2: 66,
					y2: 16
				}, {
					x: 45,
					y: 1,
					x2: 46,
					y2: 11
				}]
			}]
		}, {
			id: "level4",
			idNum: 4,
			name: "Gigafactory",
			tilesX: 50,
			tilesY: 40,
			startX: 9,
			startY: 8,
			price: 1e15,
			terrains: {
				G: "grass",
				X: "wall",
				".": "road",
				" ": "floor"
			},
			buildableTerrains: {
				floor: true
			},
			terrainMap: "GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXGGGGGXX   X    X    X    X    X    X    X    X   XXGGGXX                                            XXGGX                                              XGGX                                              XGGX                                              XGGXX                                            XXGGX                                              XGGX                                              XGGX                                              XGGX                                              XGGXX                                            XXGGX                                              XGGX                                              XGGX                                              XGGX                                              XGGXX                                            XXGGX                XXX        XXX                XGGX                XGX        XGX                XGGX                XGX        XGX                XGGX                XXX        XXX                XGGXX                                            XXGGX                                              XGGX                                              XGGX                                              XGGX                                              XGGXX                                            XXGGX                                              XGGX                                              XGGX                                              XGGX                                              XGGXX                                            XXGGX                                              XGGX                                              XGGX                                              XGGXX                                            XXGGGXX   X    X    X    X    X    X    X    X   XXGGGGGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG",
			buildMap: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX   X    X    X    X    X    X    X    X   XXXXXXX                                            XXXXX                                              XXXX                                              XXXX                                              XXXXX                                            XXXXX                                              XXXX                                              XXXX                                              XXXX                                              XXXXX                                            XXXXX                                              XXXX                                              XXXX                                              XXXX                                              XXXXX                                            XXXXX                XXX        XXX                XXXX                XXX        XXX                XXXX                XXX        XXX                XXXX                XXX        XXX                XXXXX                                            XXXXX                                              XXXX                                              XXXX                                              XXXX                                              XXXXX                                            XXXXX                                              XXXX                                              XXXX                                              XXXX                                              XXXXX                                            XXXXX                                              XXXX                                              XXXX                                              XXXXX                                            XXXXXXX   X    X    X    X    X    X    X    X   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
			areas: []
		}, {
			id: "level5",
			idNum: 5,
			name: "Terafactory",
			tilesX: 80,
			tilesY: 41,
			startX: 9,
			startY: 8,
			price: 1e18,
			terrains: {
				G: "grass",
				X: "wall",
				".": "road",
				" ": "floor"
			},
			buildableTerrains: {
				floor: true
			},
			terrainMap: "XXXXXXXXXXXXXXXXXXXXXXXXXG.GGGGGGGGGGGGGGGGGGGGGGGGGG.GXXXXXXXXXXXXXXXXXXXXXXXXXX                       XG............................GX                       XX                       XG.GXXXXXXXXXX.XX.XXXXXXXXXXG.GX                       XX                       XG.GX                      XG.GX                       XX                       XG.GX                      XG.GX                       XX                       XG.GX                      XG.GX                       XX                        G.G                        G.G                        XX                       XG.GX                      XG.GX                       XX                       XG.GX                      XG.GX                       XX                       XG.GX                      XG.GX                       XX                       XG.GX                      XG.GX                       XX                       XG.GX                      XG.GX                       XX                       XG.GX                      XG.GX                       XX                       XG.GX                      XG.GX                       XX                       XG.GX                      XG.GX                       XX                       XG.GX                      XG.GX                       XX                        G.G                        G.G                        XX                        G.G                        G.G                        XX                        G.G                        G.G                        XX                        G.G                        G.G                        XX                        G.G                        G.G                        XX                        G.G                        G.G                        XX                        G.G                        G.G                        XX                        G.G                        G.G                        XX                        G.G                        G.G                        XX                       XG.GX                      XG.GX                       XX                       XG.GX                      XG.GX                       XX                       XG.GX                      XG.GX                       XX                       XG.GX                      XG.GX                       XX                       XG.GX                      XG.GX                       XX                       XG.GX                      XG.GX                       XX                       XG.GX                      XG.GX                       XX                       XG.GX                      XG.GX                       XX                       XG.GX                      XG.GX                       XX                        G.G                        G.G                        XX                       XG.GX                      XG.GX                       XX                       XG.GX                      XG.GX                       XX                       XG.GX                      XG.GX                       XX                       XG.GXXXXXXXXXXXXXXXXXXXXXXXXG.GX                       XX                       XG.GGGGGGGGGGGGGGGGGGGGGGGGGG.GX                       XXXXXXXXXXXXXXXXXXXXXXXXXXG.GGGGGGGGGGGGGGGGGGGGGGGGGG.GXXXXXXXXXXXXXXXXXXXXXXXXX",
			buildMap: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                       XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                       XX                       XXXXXXXXXXXXXX-XX-XXXXXXXXXXXXXX                       XX                       XXXXX                      XXXXX                       XX                       XXXXX                      XXXXX                       XX                       XXXXX                      XXXXX                       XX                        ---                        ---                        XX                       XXXXX                      XXXXX                       XX                       XXXXX                      XXXXX                       XX                       XXXXX                      XXXXX                       XX                       XXXXX                      XXXXX                       XX                       XXXXX                      XXXXX                       XX                       XXXXX                      XXXXX                       XX                       XXXXX                      XXXXX                       XX                       XXXXX                      XXXXX                       XX                       XXXXX                      XXXXX                       XX                        ---                        ---                        XX                        ---                        ---                        XX                        ---                        ---                        XX                        ---                        ---                        XX                        ---                        ---                        XX                        ---                        ---                        XX                        ---                        ---                        XX                        ---                        ---                        XX                        ---                        ---                        XX                       XXXXX                      XXXXX                       XX                       XXXXX                      XXXXX                       XX                       XXXXX                      XXXXX                       XX                       XXXXX                      XXXXX                       XX                       XXXXX                      XXXXX                       XX                       XXXXX                      XXXXX                       XX                       XXXXX                      XXXXX                       XX                       XXXXX                      XXXXX                       XX                       XXXXX                      XXXXX                       XX                        ---                        ---                        XX                       XXXXX                      XXXXX                       XX                       XXXXX                      XXXXX                       XX                       XXXXX                      XXXXX                       XX                       XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                       XX                       XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                       XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
			areas: []
		}];
		return e
	}),
define("config/main/research", [], function () {
		var e = function (e, t) {
			return e * Math.pow(1e3, t)
		};
		return [{
			id: "researchCenter",
			idNum: 13,
			name: "Research center",
			iconX: 0,
			iconY: 0,
			description: "Allows researching more technologies",
			price: 900,
			priceIncrease: 1,
			max: 1,
			requiresResearch: ""
		}, {
			id: "chronometer",
			idNum: 1,
			name: "Chronometer",
			iconX: 1,
			iconY: 0,
			description: "Each level gives +1 tick/sec",
			priceResearchPoints: 50,
			priceIncrease: 50,
			max: 10,
			requiresResearch: "researchCenter"
		}, {
			id: "steelComponents",
			idNum: 2,
			name: "Steel components",
			iconX: 2,
			iconY: 0,
			description: "Allows steel production",
			priceResearchPoints: 200,
			priceIncrease: 1,
			max: 1,
			requiresResearch: "researchCenter"
		}, {
			id: "metalsLab",
			idNum: 14,
			name: "Metals lab",
			iconX: 3,
			iconY: 0,
			description: "Allows researching metals",
			priceResearchPoints: 2e3,
			priceIncrease: 1,
			max: 1,
			requiresResearch: "steelComponents"
		}, {
			id: "plasticComponents",
			idNum: 3,
			name: "Plastic components",
			iconX: 4,
			iconY: 0,
			description: "Allows plastic production",
			priceResearchPoints: e(160, 1),
			priceIncrease: 1,
			max: 1,
			requiresResearch: "steelComponents"
		}, {
			id: "sorter",
			idNum: 16,
			name: "Sorter",
			iconX: 5,
			iconY: 0,
			description: "Sorts resources on lines to different paths",
			priceResearchPoints: e(120, 1),
			priceIncrease: 1,
			max: 1,
			requiresResearch: "plasticComponents"
		}, {
			id: "electronicsComponents",
			idNum: 4,
			name: "Electronics components",
			iconX: 6,
			iconY: 0,
			description: "Allows electronics production",
			priceResearchPoints: e(20, 2),
			priceIncrease: 1,
			max: 1,
			requiresResearch: "plasticComponents"
		}, {
			id: "gasAndOilLab",
			idNum: 15,
			name: "Gas&Oil lab",
			iconX: 7,
			iconY: 0,
			description: "Allows researching gas and oil",
			priceResearchPoints: e(300, 1),
			priceIncrease: 1,
			max: 1,
			requiresResearch: "plasticComponents"
		}, {
			id: "gunComponents",
			idNum: 8,
			name: "Gun components",
			iconX: 0,
			iconY: 1,
			description: "Allows guns production",
			priceResearchPoints: e(150, 2),
			priceIncrease: 1,
			max: 1,
			requiresResearch: "electronicsComponents"
		}, {
			id: "cleanPlastic",
			idNum: 5,
			name: "Clean plastic production",
			iconX: 1,
			iconY: 1,
			description: "Plastic production will not produce waste",
			priceResearchPoints: e(15, 2),
			priceIncrease: 1,
			max: 1,
			requiresResearch: "electronicsComponents"
		}, {
			id: "engineComponents",
			idNum: 6,
			name: "Engine components",
			iconX: 2,
			iconY: 1,
			description: "Allows engines production",
			priceResearchPoints: e(2.5, 3),
			priceIncrease: 1,
			max: 1,
			requiresResearch: "gunComponents"
		}, {
			id: "analystCenter",
			idNum: 17,
			name: "Analytics center",
			iconX: 3,
			iconY: 0,
			description: "Provides higher quality research",
			priceResearchPoints: e(250, 2),
			priceIncrease: 1,
			max: 1,
			requiresResearch: "gunComponents"
		}, {
			id: "tankComponents",
			idNum: 9,
			name: "Tank components",
			iconX: 4,
			iconY: 1,
			description: "Allows tanks production",
			priceResearchPoints: e(20, 3),
			priceIncrease: 1,
			max: 1,
			requiresResearch: "engineComponents"
		}, {
			id: "cleanElectronics",
			idNum: 7,
			name: "Clean electronics",
			iconX: 5,
			iconY: 1,
			description: "Electronics production will not produce waste",
			priceResearchPoints: e(700, 2),
			priceIncrease: 1,
			max: 1,
			requiresResearch: "engineComponents"
		}, {
			id: "dieselRefinery",
			idNum: 10,
			name: "Diesel refinery",
			iconX: 5,
			iconY: 1,
			description: "Diesel increases tanks value.",
			priceResearchPoints: e(75, 3),
			priceIncrease: 1,
			max: 1,
			requiresResearch: "tankComponents"
		}, {
			id: "rocketComponents",
			idNum: 11,
			name: "Rocket components",
			iconX: 6,
			iconY: 1,
			description: "Allows producing rockets",
			priceResearchPoints: e(1, 4),
			priceIncrease: 1,
			max: 1,
			requiresResearch: "dieselRefinery"
		}, {
			id: "qualityCenter",
			idNum: 19,
			name: "Quality center",
			iconX: 9,
			iconY: 1,
			description: "Provides higher quality research",
			priceResearchPoints: e(2, 4),
			priceIncrease: 1,
			max: 1,
			requiresResearch: "rocketComponents"
		}, {
			id: "cleanEngines",
			idNum: 12,
			name: "Clean engines",
			iconX: 7,
			iconY: 1,
			description: "Engine makers production will not produce waste",
			priceResearchPoints: e(1, 4),
			priceIncrease: 1,
			max: 1,
			requiresResearch: "rocketComponents"
		}, {
			id: "droneComponents",
			idNum: 18,
			name: "Drone components",
			iconX: 8,
			iconY: 1,
			description: "Allows producing drones",
			priceResearchPoints: e(99, 4),
			priceIncrease: 1,
			max: 1,
			requiresResearch: "rocketComponents"
		}]
	}),
define("config/main/upgrades", [], function () {
		var e = function (e, t) {
			return e * Math.pow(10, t)
		};
		return {
			layout: [{
				name: "Conveyor",
				iconX: 1,
				iconY: 0,
				items: ["packageSize"]
			}, {
				name: "Research center",
				iconX: 3,
				iconY: 3,
				items: ["analystCenterConvertMore", "researchCenterBonus", "researchCenterMaxStock"]
			}, {
				name: "Garbage",
				iconX: 2,
				iconY: 3,
				items: ["garbageRemoveAmount"]
			}, {
				type: "break"
			}, {
				type: "break"
			}, {
				name: "Iron buyer",
				iconX: 2,
				iconY: 0,
				items: ["ironBuyerBuyAmount"]
			}, {
				name: "Coal buyer",
				iconX: 5,
				iconY: 0,
				items: ["coalBuyerRunningCost", "_", "coalBuyerBuyAmount"]
			}, {
				name: "Oil buyer",
				iconX: 8,
				iconY: 0,
				items: ["oilBuyerRunningCost", "_", "oilBuyerBuyAmount"]
			}, {
				name: "Gas buyer",
				iconX: 0,
				iconY: 3,
				items: ["gasBuyerRunningCost", "_", "gasBuyerBuyAmount"]
			}, {
				name: "Silicon buyer",
				iconX: 1,
				iconY: 1,
				items: ["siliconBuyerRunningCost", "_", "siliconBuyerBuyAmount"]
			}, {
				name: "Explosives buyer",
				iconX: 7,
				iconY: 1,
				items: ["explosivesBuyerRunningCost", "_", "explosivesBuyerBuyAmount"]
			}, {
				name: "Aluminium buyer",
				iconX: 4,
				iconY: 1,
				items: ["aluminiumBuyerRunningCost", "_", "aluminiumBuyerBuyAmount"]
			}, {
				type: "break"
			}, {
				type: "break"
			}, {
				name: "Iron foundry",
				iconX: 3,
				iconY: 0,
				items: ["ironFoundryConvertAmount"]
			}, {
				name: "Steel foundry",
				iconX: 6,
				iconY: 0,
				items: ["steelFoundryConvertMoreAmount", "_", "steelFoundryRunningCost", "_", "steelFoundryConvertAmount"]
			}, {
				name: "Plastic maker",
				iconX: 9,
				iconY: 0,
				items: ["plasticMakerConvertMoreAmount", "_", "plasticMakerRunningCost", "_", "plasticMakerConvertAmount"]
			}, {
				name: "Electronics maker",
				iconX: 2,
				iconY: 1,
				items: ["electronicsMakerConvertMoreAmount", "_", "electronicsMakerRunningCost", "_", "electronicsMakerConvertAmount"]
			}, {
				name: "Bullet maker",
				iconX: 8,
				iconY: 1,
				items: ["bulletMakerRunningCost", "_", "bulletMakerConvertAmount"]
			}, {
				name: "Gun maker",
				iconX: 9,
				iconY: 1,
				items: ["gunMakerRunningCost", "_", "gunMakerConvertAmount"]
			}, {
				name: "Engine maker",
				iconX: 5,
				iconY: 1,
				items: ["engineMakerRunningCost", "_", "engineMakerConvertAmount"]
			}, {
				name: "Tank hull maker",
				iconX: 1,
				iconY: 2,
				items: ["tankHullMakerRunningCost", "_", "tankHullMakerConvertAmount"]
			}, {
				name: "Tank turret maker",
				iconX: 2,
				iconY: 2,
				items: ["tankTurretMakerRunningCost", "_", "tankTurretMakerConvertAmount"]
			}, {
				name: "Tank assembler",
				iconX: 3,
				iconY: 2,
				items: ["tankAssemblerRunningCost", "_", "tankAssemblerConvertAmount"]
			}, {
				name: "Diesel refinery",
				iconX: 5,
				iconY: 2,
				items: ["dieselRefineryRunningCost", "_", "dieselRefineryConvertAmount"]
			}, {
				name: "Jet fuel refinery",
				iconX: 1,
				iconY: 3,
				items: ["jetFuelRefineryRunningCost", "_", "jetFuelRefineryConvertAmount"]
			}, {
				name: "Rocket hull maker",
				iconX: 6,
				iconY: 2,
				items: ["rocketHullMakerRunningCost", "_", "rocketHullMakerConvertAmount"]
			}, {
				name: "Rocket warhead maker",
				iconX: 7,
				iconY: 2,
				items: ["rocketWarheadMakerRunningCost", "_", "rocketWarheadMakerConvertAmount"]
			}, {
				name: "Rocket assembler",
				iconX: 8,
				iconY: 2,
				items: ["rocketAssemblerRunningCost", "_", "rocketAssemblerConvertAmount"]
			}, {
				type: "break"
			}, {
				type: "break"
			}, {
				name: "Iron seller",
				iconX: 4,
				iconY: 0,
				items: ["ironSellerSellPrice", "_", "ironSellerSellAmount"]
			}, {
				name: "Steel seller",
				iconX: 7,
				iconY: 0,
				items: ["steelSellerSellPrice", "steelSellerRunningCost", "_", "steelSellerSellAmount"]
			}, {
				name: "Plastic seller",
				iconX: 0,
				iconY: 1,
				items: ["plasticSellerSellPrice", "plasticSellerRunningCost", "_", "plasticSellerSellAmount"]
			}, {
				name: "Electronics seller",
				iconX: 3,
				iconY: 1,
				items: ["electronicsSellerSellPrice", "electronicsSellerRunningCost", "_", "electronicsSellerSellAmount"]
			}, {
				name: "Gun seller",
				iconX: 0,
				iconY: 2,
				items: ["gunSellerSellPrice", "gunSellerRunningCost", "_", "gunSellerSellAmount"]
			}, {
				name: "Engine seller",
				iconX: 6,
				iconY: 1,
				items: ["engineSellerSellPrice", "engineSellerRunningCost", "_", "engineSellerSellAmount"]
			}, {
				name: "Tank seller",
				iconX: 4,
				iconY: 2,
				items: ["tankSellerSellPrice", "tankSellerRunningCost", "_", "tankSellerSellAmount"]
			}],
			upgrades: [{
				id: "packageSize",
				idNum: 66,
				iconX: 1,
				iconY: 0,
				requiresResearch: "engineComponents",
				type: "packageSize",
				refund: .8,
				levels: [{
					price: e(1, 12),
					bonus: 1
				}, {
					price: e(1, 14),
					bonus: 1
				}, {
					price: e(1, 16),
					bonus: 1
				}]
			}, {
				id: "ironBuyerBuyAmount",
				idNum: 1,
				iconX: 0,
				iconY: 0,
				type: "buyer",
				componentId: "ironBuyer",
				refund: .8,
				noRunningCost: true,
				levels: [{
					price: e(8, 2),
					bonus: 1
				}, {
					price: e(8, 3),
					bonus: 2
				}, {
					price: e(8, 4),
					bonus: 4
				}, {
					price: e(5, 5),
					bonus: 4
				}, {
					price: e(12, 9),
					bonus: 12
				}, {
					price: e(1.5, 11),
					bonus: 12
				}, {
					price: e(4, 13),
					bonus: 12
				}, {
					price: e(60, 13),
					bonus: 16
				}, {
					price: e(10, 14),
					bonus: 32
				}]
			}, {
				id: "ironFoundryConvertAmount",
				idNum: 2,
				iconX: 1,
				iconY: 0,
				type: "converter",
				componentId: "ironFoundry",
				refund: .8,
				noRunningCost: true,
				levels: [{
					price: e(8, 2),
					bonus: 1
				}, {
					price: e(8, 4),
					bonus: 2
				}, {
					price: e(8, 5),
					bonus: 2
				}, {
					price: e(7, 9),
					bonus: 6
				}, {
					price: e(2, 11),
					bonus: 6
				}, {
					price: e(6, 13),
					bonus: 6
				}, {
					price: e(60, 13),
					bonus: 24
				}, {
					price: e(20, 14),
					bonus: 48
				}]
			}, {
				id: "ironSellerSellAmount",
				idNum: 3,
				iconX: 2,
				iconY: 0,
				type: "sellerSellAmount",
				componentId: "ironSeller",
				refund: .8,
				noRunningCost: true,
				levels: [{
					price: e(5, 2),
					bonus: 1
				}, {
					price: e(2, 3),
					bonus: 2
				}]
			}, {
				id: "ironSellerSellPrice",
				idNum: 4,
				iconX: 3,
				iconY: 0,
				type: "sellerSellPrice",
				componentId: "ironSeller",
				levels: [{
					price: e(5, 2),
					bonus: .25
				}, {
					price: e(4, 3),
					bonus: .25
				}]
			}, {
				id: "coalBuyerBuyAmount",
				idNum: 5,
				iconX: 0,
				iconY: 0,
				requiresResearch: "steelComponents",
				type: "buyer",
				componentId: "coalBuyer",
				refund: .8,
				levels: [{
					price: e(4, 4),
					bonus: 1
				}, {
					price: e(18, 5),
					bonus: 2
				}, {
					price: e(1, 9),
					bonus: 4
				}, {
					price: e(6, 9),
					bonus: 4
				}, {
					price: e(3, 11),
					bonus: 6
				}, {
					price: e(12.5, 13),
					bonus: 6
				}]
			}, {
				id: "steelFoundryConvertAmount",
				idNum: 7,
				iconX: 1,
				iconY: 0,
				requiresResearch: "steelComponents",
				type: "converter",
				componentId: "steelFoundry",
				refund: .8,
				levels: [{
					price: e(15, 4),
					bonus: 1
				}, {
					price: e(9, 5),
					bonus: 1
				}, {
					price: e(6, 11),
					bonus: 3
				}, {
					price: e(15, 13),
					bonus: 6
				}, {
					price: e(25, 14),
					bonus: 12
				}]
			}, {
				id: "steelFoundryConvertMoreAmount",
				idNum: 64,
				iconX: 1,
				iconY: 0,
				requiresResearch: "engineComponents",
				type: "converterProduceMore",
				componentId: "steelFoundry",
				refund: .8,
				levels: [{
					price: e(4, 11),
					bonus: 1
				}, {
					price: e(90, 13),
					bonus: 2
				}]
			}, {
				id: "steelSellerSellAmount",
				idNum: 9,
				iconX: 2,
				iconY: 0,
				requiresResearch: "steelComponents",
				type: "sellerSellAmount",
				componentId: "steelSeller",
				refund: .8,
				levels: [{
					price: e(5, 4),
					bonus: 1
				}, {
					price: e(3, 5),
					bonus: 1
				}]
			}, {
				id: "coalBuyerRunningCost",
				idNum: 6,
				iconX: 0,
				iconY: 0,
				requiresResearch: "steelComponents",
				type: "runningCost",
				componentId: "coalBuyer",
				levels: [{
					price: e(2, 4),
					bonus: .05
				}, {
					price: e(9, 4),
					bonus: .1
				}]
			}, {
				id: "steelFoundryRunningCost",
				idNum: 8,
				iconX: 4,
				iconY: 0,
				requiresResearch: "steelComponents",
				type: "runningCost",
				componentId: "steelFoundry",
				levels: [{
					price: e(3, 4),
					bonus: .05
				}, {
					price: e(1, 5),
					bonus: .1
				}]
			}, {
				id: "steelSellerRunningCost",
				idNum: 11,
				iconX: 4,
				iconY: 0,
				requiresResearch: "steelComponents",
				type: "runningCost",
				componentId: "steelSeller",
				levels: [{
					price: e(10, 4),
					bonus: .05
				}, {
					price: e(50, 4),
					bonus: .1
				}]
			}, {
				id: "steelSellerSellPrice",
				idNum: 10,
				iconX: 3,
				iconY: 0,
				requiresResearch: "steelComponents",
				type: "sellerSellPrice",
				componentId: "steelSeller",
				levels: [{
					price: e(9, 4),
					bonus: .1
				}, {
					price: e(4, 5),
					bonus: .1
				}]
			}, {
				id: "oilBuyerBuyAmount",
				idNum: 12,
				iconX: 0,
				iconY: 0,
				requiresResearch: "plasticComponents",
				type: "buyer",
				componentId: "oilBuyer",
				refund: .8,
				levels: [{
					price: e(9, 5),
					bonus: 1
				}, {
					price: e(3, 8),
					bonus: 6
				}, {
					price: e(4, 9),
					bonus: 4
				}, {
					price: e(3, 11),
					bonus: 12
				}]
			}, {
				id: "gasBuyerBuyAmount",
				idNum: 14,
				iconX: 0,
				iconY: 0,
				requiresResearch: "plasticComponents",
				type: "buyer",
				componentId: "gasBuyer",
				refund: .8,
				levels: [{
					price: e(1.2, 6),
					bonus: 1
				}, {
					price: e(4, 8),
					bonus: 2
				}, {
					price: e(8, 8),
					bonus: 4
				}, {
					price: e(2, 9),
					bonus: 4
				}, {
					price: e(2, 11),
					bonus: 12
				}]
			}, {
				id: "plasticMakerConvertAmount",
				idNum: 16,
				iconX: 1,
				iconY: 0,
				requiresResearch: "plasticComponents",
				type: "converter",
				componentId: "plasticMaker",
				refund: .8,
				levels: [{
					price: e(12, 6),
					bonus: 1
				}, {
					price: e(5, 9),
					bonus: 1
				}, {
					price: e(6, 11),
					bonus: 3
				}]
			}, {
				id: "plasticMakerConvertMoreAmount",
				idNum: 63,
				iconX: 1,
				iconY: 0,
				requiresResearch: "engineComponents",
				type: "converterProduceMore",
				componentId: "plasticMaker",
				refund: .8,
				levels: [{
					price: e(1, 12),
					bonus: 1
				}]
			}, {
				id: "plasticSellerSellAmount",
				idNum: 18,
				iconX: 2,
				iconY: 0,
				requiresResearch: "plasticComponents",
				type: "sellerSellAmount",
				componentId: "plasticSeller",
				refund: .8,
				levels: [{
					price: e(1.2, 7),
					bonus: 3
				}, {
					price: e(9.5, 9),
					bonus: 2
				}]
			}, {
				id: "oilBuyerRunningCost",
				idNum: 13,
				iconX: 4,
				iconY: 0,
				requiresResearch: "plasticComponents",
				type: "runningCost",
				componentId: "oilBuyer",
				levels: [{
					price: e(6, 5),
					bonus: .05
				}, {
					price: e(5, 8),
					bonus: .05
				}]
			}, {
				id: "gasBuyerRunningCost",
				idNum: 15,
				iconX: 4,
				iconY: 0,
				requiresResearch: "plasticComponents",
				type: "runningCost",
				componentId: "gasBuyer",
				levels: [{
					price: e(4, 5),
					bonus: .05
				}, {
					price: e(1, 8),
					bonus: .1
				}]
			}, {
				id: "plasticMakerRunningCost",
				idNum: 17,
				iconX: 4,
				iconY: 0,
				requiresResearch: "plasticComponents",
				type: "runningCost",
				componentId: "plasticMaker",
				levels: [{
					price: e(9, 5),
					bonus: .05
				}, {
					price: e(6, 8),
					bonus: .1
				}]
			}, {
				id: "plasticSellerRunningCost",
				idNum: 20,
				iconX: 4,
				iconY: 0,
				requiresResearch: "plasticComponents",
				type: "runningCost",
				componentId: "plasticSeller",
				levels: [{
					price: e(7, 5),
					bonus: .05
				}, {
					price: e(3, 8),
					bonus: .05
				}]
			}, {
				id: "plasticSellerSellPrice",
				idNum: 19,
				iconX: 3,
				iconY: 0,
				requiresResearch: "plasticComponents",
				type: "sellerSellPrice",
				componentId: "plasticSeller",
				levels: [{
					price: e(9, 6),
					bonus: .1
				}, {
					price: e(1, 9),
					bonus: .05
				}]
			}, {
				id: "siliconBuyerBuyAmount",
				idNum: 21,
				iconX: 0,
				iconY: 0,
				requiresResearch: "electronicsComponents",
				type: "buyer",
				componentId: "siliconBuyer",
				refund: .8,
				levels: [{
					price: e(8, 8),
					bonus: 1
				}, {
					price: e(1, 9),
					bonus: 1
				}, {
					price: e(5, 11),
					bonus: 3
				}, {
					price: e(3, 13),
					bonus: 6
				}]
			}, {
				id: "electronicsMakerConvertAmount",
				idNum: 23,
				iconX: 1,
				iconY: 0,
				requiresResearch: "electronicsComponents",
				type: "converter",
				componentId: "electronicsMaker",
				refund: .8,
				levels: [{
					price: e(4, 8),
					bonus: 1
				}, {
					price: e(3, 9),
					bonus: 1
				}]
			}, {
				id: "electronicsMakerConvertMoreAmount",
				idNum: 65,
				iconX: 1,
				iconY: 0,
				requiresResearch: "engineComponents",
				type: "converterProduceMore",
				componentId: "electronicsMaker",
				refund: .8,
				levels: [{
					price: e(1.5, 12),
					bonus: 1
				}]
			}, {
				id: "electronicsSellerSellAmount",
				idNum: 25,
				iconX: 2,
				iconY: 0,
				requiresResearch: "electronicsComponents",
				type: "sellerSellAmount",
				componentId: "electronicsSeller",
				refund: .8,
				levels: [{
					price: e(2, 8),
					bonus: 1
				}, {
					price: e(2, 9),
					bonus: 1
				}]
			}, {
				id: "siliconBuyerRunningCost",
				idNum: 22,
				iconX: 4,
				iconY: 0,
				requiresResearch: "electronicsComponents",
				type: "runningCost",
				componentId: "siliconBuyer",
				levels: [{
					price: e(8, 8),
					bonus: .05
				}]
			}, {
				id: "electronicsMakerRunningCost",
				idNum: 24,
				iconX: 4,
				iconY: 0,
				requiresResearch: "electronicsComponents",
				type: "runningCost",
				componentId: "electronicsMaker",
				levels: [{
					price: e(8, 8),
					bonus: .05
				}]
			}, {
				id: "electronicsSellerRunningCost",
				idNum: 26,
				iconX: 4,
				iconY: 0,
				requiresResearch: "electronicsComponents",
				type: "runningCost",
				componentId: "electronicsSeller",
				levels: [{
					price: e(12, 8),
					bonus: .05
				}]
			}, {
				id: "electronicsSellerSellPrice",
				idNum: 27,
				iconX: 3,
				iconY: 0,
				requiresResearch: "electronicsComponents",
				type: "sellerSellPrice",
				componentId: "electronicsSeller",
				levels: [{
					price: e(2, 8),
					bonus: .05
				}, {
					price: e(4, 8),
					bonus: .05
				}, {
					price: e(6, 8),
					bonus: .05
				}, {
					price: e(1, 10),
					bonus: .05
				}]
			}, {
				id: "explosivesBuyerBuyAmount",
				idNum: 35,
				iconX: 0,
				iconY: 0,
				requiresResearch: "gunComponents",
				type: "buyer",
				componentId: "explosivesBuyer",
				refund: .8,
				levels: [{
					price: e(99, 9),
					bonus: 1
				}, {
					price: e(500, 9),
					bonus: 2
				}, {
					price: e(80, 13),
					bonus: 4
				}, {
					price: e(120, 14),
					bonus: 8
				}]
			}, {
				id: "bulletMakerConvertAmount",
				idNum: 37,
				iconX: 1,
				iconY: 0,
				requiresResearch: "gunComponents",
				type: "converter",
				componentId: "bulletMaker",
				refund: .8,
				levels: [{
					price: e(220, 9),
					bonus: 1
				}, {
					price: e(600, 9),
					bonus: 2
				}, {
					price: e(35, 13),
					bonus: 4
				}]
			}, {
				id: "gunMakerConvertAmount",
				idNum: 39,
				iconX: 1,
				iconY: 0,
				requiresResearch: "gunComponents",
				type: "converter",
				componentId: "gunMaker",
				refund: .8,
				levels: [{
					price: e(450, 9),
					bonus: 1
				}, {
					price: e(250, 10),
					bonus: 6
				}, {
					price: e(90, 13),
					bonus: 8
				}]
			}, {
				id: "gunSellerSellAmount",
				idNum: 41,
				iconX: 2,
				iconY: 0,
				requiresResearch: "gunComponents",
				type: "sellerSellAmount",
				componentId: "gunSeller",
				refund: .8,
				levels: [{
					price: e(120, 9),
					bonus: 1
				}]
			}, {
				id: "explosivesBuyerRunningCost",
				idNum: 36,
				iconX: 4,
				iconY: 0,
				requiresResearch: "gunComponents",
				type: "runningCost",
				componentId: "explosivesBuyer",
				levels: [{
					price: e(15, 9),
					bonus: .05
				}]
			}, {
				id: "bulletMakerRunningCost",
				idNum: 38,
				iconX: 4,
				iconY: 0,
				requiresResearch: "gunComponents",
				type: "runningCost",
				componentId: "bulletMaker",
				levels: [{
					price: e(20, 9),
					bonus: .1
				}]
			}, {
				id: "gunMakerRunningCost",
				idNum: 40,
				iconX: 4,
				iconY: 0,
				requiresResearch: "gunComponents",
				type: "runningCost",
				componentId: "gunMaker",
				levels: [{
					price: e(25, 9),
					bonus: .1
				}]
			}, {
				id: "gunSellerRunningCost",
				idNum: 42,
				iconX: 4,
				iconY: 0,
				requiresResearch: "gunComponents",
				type: "runningCost",
				componentId: "gunSeller",
				levels: [{
					price: e(15, 9),
					bonus: .1
				}]
			}, {
				id: "gunSellerSellPrice",
				idNum: 43,
				iconX: 3,
				iconY: 0,
				requiresResearch: "gunComponents",
				type: "sellerSellPrice",
				componentId: "gunSeller",
				levels: [{
					price: e(15, 9),
					bonus: .05
				}]
			}, {
				id: "aluminiumBuyerBuyAmount",
				idNum: 28,
				iconX: 0,
				iconY: 0,
				requiresResearch: "engineComponents",
				type: "buyer",
				componentId: "aluminiumBuyer",
				refund: .8,
				levels: [{
					price: e(300, 9),
					bonus: 1
				}, {
					price: e(600, 9),
					bonus: 2
				}, {
					price: e(150, 10),
					bonus: 4
				}, {
					price: e(1, 14),
					bonus: 24
				}, {
					price: e(60, 14),
					bonus: 32
				}]
			}, {
				id: "engineMakerConvertAmount",
				idNum: 30,
				iconX: 1,
				iconY: 0,
				requiresResearch: "engineComponents",
				type: "converter",
				componentId: "engineMaker",
				refund: .8,
				levels: [{
					price: e(1300, 9),
					bonus: 1
				}, {
					price: e(40, 14),
					bonus: 2
				}]
			}, {
				id: "engineSellerSellAmount",
				idNum: 32,
				iconX: 2,
				iconY: 0,
				requiresResearch: "engineComponents",
				type: "sellerSellAmount",
				componentId: "engineSeller",
				refund: .8,
				levels: [{
					price: e(800, 9),
					bonus: 1
				}]
			}, {
				id: "aluminiumBuyerRunningCost",
				idNum: 29,
				iconX: 4,
				iconY: 0,
				requiresResearch: "engineComponents",
				type: "runningCost",
				componentId: "aluminiumBuyer",
				levels: [{
					price: e(150, 9),
					bonus: .05
				}, {
					price: e(450, 9),
					bonus: .05
				}]
			}, {
				id: "engineMakerRunningCost",
				idNum: 31,
				iconX: 4,
				iconY: 0,
				requiresResearch: "engineComponents",
				type: "runningCost",
				componentId: "engineMaker",
				levels: [{
					price: e(100, 9),
					bonus: .1
				}, {
					price: e(200, 9),
					bonus: .1
				}]
			}, {
				id: "engineSellerRunningCost",
				idNum: 33,
				iconX: 4,
				iconY: 0,
				requiresResearch: "engineComponents",
				type: "runningCost",
				componentId: "engineSeller",
				levels: [{
					price: e(50, 9),
					bonus: .1
				}, {
					price: e(150, 9),
					bonus: .1
				}]
			}, {
				id: "engineSellerSellPrice",
				idNum: 34,
				iconX: 3,
				iconY: 0,
				requiresResearch: "engineComponents",
				type: "sellerSellPrice",
				componentId: "engineSeller",
				levels: [{
					price: e(150, 9),
					bonus: .05
				}, {
					price: e(250, 9),
					bonus: .05
				}, {
					price: e(450, 9),
					bonus: .05
				}]
			}, {
				id: "tankHullMakerConvertAmount",
				idNum: 44,
				iconX: 1,
				iconY: 0,
				requiresResearch: "tankComponents",
				type: "converter",
				componentId: "tankHullMaker",
				refund: .8,
				levels: [{
					price: e(600, 9),
					bonus: 3
				}, {
					price: e(150, 10),
					bonus: 4
				}]
			}, {
				id: "tankTurretMakerConvertAmount",
				idNum: 46,
				iconX: 1,
				iconY: 0,
				requiresResearch: "tankComponents",
				type: "converter",
				componentId: "tankTurretMaker",
				refund: .8,
				levels: [{
					price: e(450, 9),
					bonus: 3
				}, {
					price: e(100, 10),
					bonus: 4
				}]
			}, {
				id: "tankAssemblerConvertAmount",
				idNum: 48,
				iconX: 1,
				iconY: 0,
				requiresResearch: "tankComponents",
				type: "converter",
				componentId: "tankAssembler",
				refund: .8,
				levels: [{
					price: e(300, 9),
					bonus: 1
				}, {
					price: e(200, 10),
					bonus: 2
				}]
			}, {
				id: "tankSellerSellAmount",
				idNum: 50,
				iconX: 2,
				iconY: 0,
				requiresResearch: "tankComponents",
				type: "sellerSellAmount",
				componentId: "tankSeller",
				refund: .8,
				levels: [{
					price: e(400, 9),
					bonus: 3
				}, {
					price: e(620, 10),
					bonus: 4
				}]
			}, {
				id: "tankHullMakerRunningCost",
				idNum: 45,
				iconX: 4,
				iconY: 0,
				requiresResearch: "tankComponents",
				type: "runningCost",
				componentId: "tankHullMaker",
				levels: [{
					price: e(400, 9),
					bonus: .05
				}, {
					price: e(200, 10),
					bonus: .05
				}]
			}, {
				id: "tankTurretMakerRunningCost",
				idNum: 47,
				iconX: 4,
				iconY: 0,
				requiresResearch: "tankComponents",
				type: "runningCost",
				componentId: "tankTurretMaker",
				levels: [{
					price: e(300, 9),
					bonus: .05
				}, {
					price: e(200, 10),
					bonus: .05
				}]
			}, {
				id: "tankAssemblerRunningCost",
				idNum: 49,
				iconX: 4,
				iconY: 0,
				requiresResearch: "tankComponents",
				type: "runningCost",
				componentId: "tankAssembler",
				levels: [{
					price: e(500, 9),
					bonus: .05
				}, {
					price: e(100, 10),
					bonus: .05
				}]
			}, {
				id: "tankSellerRunningCost",
				idNum: 51,
				iconX: 4,
				iconY: 0,
				requiresResearch: "tankComponents",
				type: "runningCost",
				componentId: "tankSeller",
				levels: [{
					price: e(350, 9),
					bonus: .05
				}, {
					price: e(150, 10),
					bonus: .05
				}]
			}, {
				id: "tankSellerSellPrice",
				idNum: 52,
				iconX: 3,
				iconY: 0,
				requiresResearch: "tankComponents",
				type: "sellerSellPrice",
				componentId: "tankSeller",
				levels: [{
					price: e(400, 9),
					bonus: .1
				}, {
					price: e(240, 10),
					bonus: .1
				}]
			}, {
				id: "dieselRefineryConvertAmount",
				idNum: 53,
				iconX: 1,
				iconY: 0,
				requiresResearch: "dieselRefinery",
				type: "converter",
				componentId: "dieselRefinery",
				refund: .8,
				levels: [{
					price: e(700, 9),
					bonus: 1
				}]
			}, {
				id: "dieselRefineryRunningCost",
				idNum: 54,
				iconX: 4,
				iconY: 0,
				requiresResearch: "dieselRefinery",
				type: "runningCost",
				componentId: "dieselRefinery",
				levels: [{
					price: e(900, 9),
					bonus: .05
				}]
			}, {
				id: "jetFuelRefineryConvertAmount",
				idNum: 55,
				iconX: 1,
				iconY: 0,
				requiresResearch: "rocketComponents",
				type: "converter",
				componentId: "jetFuelRefinery",
				refund: .8,
				levels: [{
					price: e(100, 10),
					bonus: 1
				}]
			}, {
				id: "rocketHullMakerConvertAmount",
				idNum: 57,
				iconX: 1,
				iconY: 0,
				requiresResearch: "rocketComponents",
				type: "converter",
				componentId: "rocketHullMaker",
				refund: .8,
				levels: [{
					price: e(150, 10),
					bonus: 1
				}]
			}, {
				id: "rocketWarheadMakerConvertAmount",
				idNum: 59,
				iconX: 1,
				iconY: 0,
				requiresResearch: "rocketComponents",
				type: "converter",
				componentId: "rocketWarheadMaker",
				refund: .8,
				levels: [{
					price: e(200, 10),
					bonus: 1
				}]
			}, {
				id: "rocketAssemblerConvertAmount",
				idNum: 61,
				iconX: 1,
				iconY: 0,
				requiresResearch: "rocketComponents",
				type: "converter",
				componentId: "rocketAssembler",
				refund: .8,
				levels: [{
					price: e(250, 10),
					bonus: 1
				}]
			}, {
				id: "jetFuelRefineryRunningCost",
				idNum: 56,
				iconX: 4,
				iconY: 0,
				requiresResearch: "rocketComponents",
				type: "runningCost",
				componentId: "jetFuelRefinery",
				levels: [{
					price: e(300, 10),
					bonus: .05
				}]
			}, {
				id: "rocketHullMakerRunningCost",
				idNum: 58,
				iconX: 4,
				iconY: 0,
				requiresResearch: "rocketComponents",
				type: "runningCost",
				componentId: "rocketHullMaker",
				levels: [{
					price: e(350, 10),
					bonus: .05
				}]
			}, {
				id: "rocketWarheadMakerRunningCost",
				idNum: 60,
				iconX: 4,
				iconY: 0,
				requiresResearch: "rocketComponents",
				type: "runningCost",
				componentId: "rocketWarheadMaker",
				levels: [{
					price: e(250, 10),
					bonus: .05
				}]
			}, {
				id: "rocketAssemblerRunningCost",
				idNum: 62,
				iconX: 4,
				iconY: 0,
				requiresResearch: "rocketComponents",
				type: "runningCost",
				componentId: "rocketAssembler",
				levels: [{
					price: e(300, 10),
					bonus: .05
				}]
			}, {
				id: "garbageRemoveAmount",
				idNum: 99,
				iconX: 5,
				iconY: 0,
				description: "",
				requiresResearch: "metalsLab",
				type: "garbage",
				componentId: "garbageCollector",
				levels: [{
					price: e(5, 4),
					bonus: 1
				}, {
					price: e(3, 9),
					bonus: 2
				}]
			}, {
				id: "researchCenterBonus",
				idNum: 100,
				iconX: 6,
				iconY: 0,
				description: "researchCenter",
				requiresResearch: "metalsLab",
				type: "researchCenterBonus",
				componentId: "researchCenter",
				levels: [{
					price: e(5, 5),
					bonus: .1
				}, {
					price: e(5, 7),
					bonus: .2
				}, {
					price: e(5, 8),
					bonus: .2
				}, {
					price: e(1.1, 10),
					bonus: .25
				}, {
					price: e(2.8, 10),
					bonus: .25
				}, {
					price: e(1.2, 11),
					bonus: .5
				}, {
					price: e(9.4, 11),
					bonus: .5
				}, {
					price: e(200, 12),
					bonus: 1.5
				}, {
					price: e(100, 13),
					bonus: 1.5
				}, {
					price: e(10, 14),
					bonus: 6
				}]
			}, {
				id: "researchCenterMaxStock",
				idNum: 101,
				iconX: 7,
				iconY: 0,
				description: "Research center max papers",
				requiresResearch: "metalsLab",
				type: "researchCenterMaxStock",
				componentId: "researchCenter",
				levels: [{
					price: e(5, 5),
					bonus: 1
				}, {
					price: e(1, 8),
					bonus: 1
				}, {
					price: e(1, 9),
					bonus: 1
				}, {
					price: e(3, 9),
					bonus: 2
				}, {
					price: e(9, 9),
					bonus: 2
				}, {
					price: e(4, 11),
					bonus: 4
				}, {
					price: e(5, 13),
					bonus: 3
				}, {
					price: e(6, 14),
					bonus: 5
				}]
			}, {
				id: "analystCenterConvertMore",
				idNum: 102,
				iconX: 1,
				iconY: 0,
				requiresResearch: "engineComponents",
				type: "converterProduceMore",
				componentId: "analystCenter",
				refund: .8,
				levels: [{
					price: e(2, 11),
					bonus: 1
				}, {
					price: e(400, 13),
					bonus: 2
				}]
			}]
		}
	}),
define("config/main/achievements", [], function () {
		var e = [{
			id: "makingProfit",
			idNum: 1,
			name: "Making profit!",
			spriteX: 3,
			spriteY: 0,
			bonus: {
				type: "custom",
				description: "Unlocks research"
			},
			tests: [{
				type: "avgMoneyIncome",
				amount: 1.4
			}]
		}, {
			id: "collectingCash",
			idNum: 2,
			name: "Collecting some cash",
			spriteX: 2,
			spriteY: 0,
			bonus: {
				type: "custom",
				description: "Unlocks extras"
			},
			tests: [{
				type: "amountOfMoney",
				amount: 25e3
			}]
		}, {
			id: "gettingSmarter",
			idNum: 3,
			name: "Getting smarter",
			spriteX: 2,
			spriteY: 0,
			bonus: {
				type: "custom",
				description: "Unlocks upgrades"
			},
			tests: [{
				type: "researched",
				researchId: "researchCenter"
			}]
		}];
		for (var t = 1; t <= 20; t++) e.push({
			id: "money" + t,
			idNum: 4 + t,
			name: "Getting money",
			spriteX: 2,
			spriteY: 0,
			requiresAchievement: t > 1 ? "money" + (t - 1) : null,
			bonus: {
				type: "money",
				amount: 250 * Math.pow(10, t)
			},
			tests: [{
				type: "amountOfMoney",
				amount: 1e3 * Math.pow(10, t)
			}]
		});
		return e
	}),
define("config/main/main", ["./components", "./resources", "./factories", "./research", "./upgrades", "./achievements"], function (e, t, n, r, i, s) {
		return {
			id: 0,
			name: "Main idle",
			version: 1,
			startingMoney: 2e3,
			minNegativeMoney: -1e4,
			startingResearchPoints: 0,
			maxBonusTicks: 7200,
			minBonusTicks: 50,
			offlineSlower: 5,
			incentivizedAdBonusTicks: 1e3,
			resources: t,
			components: e.components,
			componentsSelection: e.selection,
			productionTree: e.productionTree,
			factories: n,
			research: r,
			upgrades: i.upgrades,
			upgradesLayout: i.layout,
			achievements: s
		}
	}),
	define("config/Ruleset", [], function () {
		var e = function () {};
		return e.prepareMeta = function (e) {
			e.componentsById = {}, e.componentsByIdNum = [];
			for (var t in e.components) {
				if (e.componentsById[e.components[t].id]) throw new Error("Component with id " + e.components[t].id + " already exists!");
				if (e.componentsByIdNum[e.components[t].idNum]) throw new Error("Component with idNum " + e.components[t].idNum + " already exists!");
				e.componentsById[e.components[t].id] = e.components[t], e.componentsByIdNum[e.components[t].idNum] = e.components[t]
			}
			e.factoriesById = {}, e.factoriesByIdNum = [];
			for (var t in e.factories) {
				if (e.factoriesById[e.factories[t].id]) throw new Error("Factory with id " + e.factories[t].id + " already exists!");
				if (e.factoriesByIdNum[e.factories[t].idNum]) throw new Error("Factory with idNum " + e.factories[t].idNum + " already exists!");
				e.factoriesById[e.factories[t].id] = e.factories[t], e.factoriesByIdNum[e.factories[t].idNum] = e.factories[t];
				var n = e.factories[t];
				n.areasById = {}, n.areasByIdNum = [];
				for (var t in n.areas) {
					if (n.areasById[n.areas[t].id]) throw new Error("Factory " + t + " area with id " + n.areas[t].id + " already exists!");
					if (n.areasByIdNum[n.areas[t].idNum]) throw new Error("Factory " + t + " area with idNum " + n.areas[t].idNum + " already exists!");
					n.areasById[n.areas[t].id] = n.areas[t], n.areasByIdNum[n.areas[t].idNum] = n.areas[t];
					for (var r in n.areas[t].locations) {
						var i = n.areas[t].locations[r];
						i.width = i.x2 - i.x + 1, i.height = i.y2 - i.y + 1
					}
				}
			}
			e.resourcesById = {}, e.resourcesByIdNum = [];
			for (var t in e.resources) {
				if (e.resourcesById[e.resources[t].id]) throw new Error("Resource with id " + e.resources[t].id + " already exists!");
				if (e.resourcesByIdNum[e.resources[t].idNum]) throw new Error("Resource with idNum " + e.resources[t].idNum + " already exists!");
				e.resourcesById[e.resources[t].id] = e.resources[t], e.resourcesByIdNum[e.resources[t].idNum] = e.resources[t]
			}
			e.researchById = {}, e.researchByIdNum = [];
			for (var t in e.research) {
				if (e.researchById[e.research[t].id]) throw new Error("Research with id " + e.research[t].id + " already exists!");
				if (e.researchByIdNum[e.research[t].idNum]) throw new Error("Research with idNum " + e.research[t].idNum + " already exists!");
				e.researchById[e.research[t].id] = e.research[t], e.researchByIdNum[e.research[t].idNum] = e.research[t]
			}
			e.upgradesById = {}, e.upgradesByIdNum = [];
			for (var t in e.upgrades) {
				if (e.upgradesById[e.upgrades[t].id]) throw new Error("Upgrade with id " + e.upgrades[t].id + " already exists!");
				if (e.upgradesByIdNum[e.upgrades[t].idNum]) throw new Error("Upgrade with idNum " + e.upgrades[t].idNum + " already exists!");
				e.upgradesById[e.upgrades[t].id] = e.upgrades[t], e.upgradesByIdNum[e.upgrades[t].idNum] = e.upgrades[t]
			}
			e.achievementsById = {}, e.achievementsByIdNum = [];
			for (var t in e.achievements) {
				if (e.achievementsById[e.achievements[t].id]) throw new Error("Achievement with id " + e.achievements[t].id + " already exists!");
				if (e.achievementsByIdNum[e.achievements[t].idNum]) throw new Error("Achievement with idNum " + e.achievements[t].idNum + " already exists!");
				e.achievementsById[e.achievements[t].id] = e.achievements[t], e.achievementsByIdNum[e.achievements[t].idNum] = e.achievements[t]
			}
			return e
		}, e
	}),
define("config/missions/mission1", [], function () {
		return {
			id: "mission1",
			name: "Challenge 1",
			description: "Distribute iron evenly to iron foundries",
			isMission: true,
			version: 1,
			startingMoney: 1e5,
			startingResearchPoints: 0,
			resources: [{
				id: "ironOre",
				idNum: 1,
				name: "Iron ore",
				nameShort: "Iron ore",
				spriteX: 0,
				spriteY: 0
			}, {
				id: "iron",
				idNum: 2,
				name: "Iron",
				nameShort: "Iron",
				spriteX: 1,
				spriteY: 0
			}],
			componentsSelection: [
				["transportLine", "ironBuyer", "ironFoundry"]
			],
			productionTree: [],
			components: [{
				id: "transportLine",
				idNum: 1,
				name: "Conveyor",
				width: 1,
				height: 1,
				spriteX: 0,
				spriteY: 0,
				iconX: 1,
				iconY: 0,
				drawStrategy: "track",
				buildByDragging: true,
				canBuildToPartial: true,
				runningCostPerTick: 0,
				price: 10,
				priceRefund: 1,
				strategy: {
					type: "transport",
					queueSize: 2
				}
			}, {
				id: "ironBuyer",
				idNum: 2,
				name: "Iron ore buyer",
				width: 2,
				height: 2,
				spriteX: 4,
				spriteY: 0,
				iconX: 2,
				iconY: 0,
				runningCostPerTick: 0,
				price: 50,
				priceRefund: 1,
				strategy: {
					type: "buyer",
					purchaseResources: {
						ironOre: {
							price: 0,
							amount: 1
						}
					},
					outputResourcesOrder: ["ironOre"],
					interval: 10
				}
			}, {
				id: "ironFoundry",
				idNum: 3,
				name: "Iron foundry",
				width: 4,
				height: 2,
				spriteX: 0,
				spriteY: 0,
				iconX: 3,
				iconY: 0,
				runningCostPerTick: 0,
				price: 150,
				priceRefund: 1,
				requiresResearch: null,
				strategy: {
					type: "converter",
					inputResources: {
						ironOre: {
							perOutputResource: 2
						}
					},
					production: {
						iron: {
							amount: 1
						}
					},
					outputResourcesOrder: ["iron"],
					interval: 10
				}
			}],
			factories: [{
				id: "mission",
				idNum: 1,
				name: "Mission",
				tilesX: 15,
				tilesY: 15,
				terrains: {
					G: "grass",
					X: "wall",
					".": "road",
					" ": "floor"
				},
				buildableTerrains: {
					floor: true
				},
				terrainMap: "GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGXX XGGX XXGGGGGX  XGGX  XGGGGGX  XXXX  XGGGGGXX      XXGGGGGX        XGGGGGX        XGGGGGX        XGGGGGX        XGGGGGXXXXXXXXXXGGG...............GGGGGGGGGGGGGGGGGGGGGGGGGGGGGG",
				buildMap: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXX XXXXXXXX  XXXX  XXXXXXX  XXXX  XXXXXXXX      XXXXXXXX        XXXXXXX        XXXXXXX        XXXXXXX        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
				areas: [],
				startComponents: [{
					id: "ironBuyer",
					x: 3,
					y: 4
				}, {
					id: "ironBuyer",
					x: 9,
					y: 4
				}, {
					id: "ironFoundry",
					x: 5,
					y: 7
				}, {
					id: "ironFoundry",
					x: 3,
					y: 9
				}, {
					id: "ironFoundry",
					x: 7,
					y: 9
				}],
				transportLineConnections: []
			}],
			research: [],
			upgrades: [],
			achievements: []
		}
	}),
define("config/missions/mission2", [], function () {
		return {
			id: "mission2",
			name: "Challenge 2",
			description: "Get a lot of money quickly!",
			isMission: true,
			version: 1,
			startingMoney: 1e5,
			startingResearchPoints: 0,
			resources: [{
				id: "ironOre",
				idNum: 1,
				name: "Iron ore",
				nameShort: "Iron ore",
				spriteX: 0,
				spriteY: 0
			}, {
				id: "iron",
				idNum: 2,
				name: "Iron",
				nameShort: "Iron",
				spriteX: 1,
				spriteY: 0
			}],
			componentsSelection: [
				["transportLine", "ironBuyer", "ironFoundry"]
			],
			productionTree: [],
			components: [{
				id: "transportLine",
				idNum: 1,
				name: "Conveyor",
				width: 1,
				height: 1,
				spriteX: 0,
				spriteY: 0,
				iconX: 1,
				iconY: 0,
				drawStrategy: "track",
				buildByDragging: true,
				canBuildToPartial: true,
				runningCostPerTick: 0,
				price: 10,
				priceRefund: 1,
				strategy: {
					type: "transport",
					queueSize: 2
				}
			}, {
				id: "ironBuyer",
				idNum: 2,
				name: "Iron ore buyer",
				width: 2,
				height: 2,
				spriteX: 4,
				spriteY: 0,
				iconX: 2,
				iconY: 0,
				runningCostPerTick: 0,
				price: 50,
				priceRefund: 1,
				strategy: {
					type: "buyer",
					purchaseResources: {
						ironOre: {
							price: 0,
							amount: 1
						}
					},
					outputResourcesOrder: ["ironOre"],
					interval: 10
				}
			}, {
				id: "ironFoundry",
				idNum: 3,
				name: "Iron foundry",
				width: 4,
				height: 2,
				spriteX: 0,
				spriteY: 0,
				iconX: 3,
				iconY: 0,
				runningCostPerTick: 0,
				price: 150,
				priceRefund: 1,
				requiresResearch: null,
				strategy: {
					type: "converter",
					inputResources: {
						ironOre: {
							perOutputResource: 2
						}
					},
					production: {
						iron: {
							amount: 1
						}
					},
					outputResourcesOrder: ["iron"],
					interval: 10
				}
			}],
			factories: [{
				id: "mission",
				idNum: 1,
				name: "Mission",
				tilesX: 15,
				tilesY: 15,
				terrains: {
					G: "grass",
					X: "wall",
					".": "road",
					" ": "floor"
				},
				buildableTerrains: {
					floor: true
				},
				terrainMap: "                                                                                                                                                                                                                                 ",
				buildMap: "                                                                                                                                                                                                                                 ",
				areas: [],
				startComponents: [{
					id: "ironBuyer",
					x: 3,
					y: 4
				}, {
					id: "ironBuyer",
					x: 9,
					y: 4
				}, {
					id: "ironFoundry",
					x: 5,
					y: 7
				}, {
					id: "ironFoundry",
					x: 3,
					y: 9
				}, {
					id: "ironFoundry",
					x: 7,
					y: 9
				}],
				transportLineConnections: []
			}],
			research: [],
			upgrades: [],
			achievements: []
		}
	}),
define("config/Meta", ["./products", "./main/main", "./Ruleset", "./missions/mission1", "./missions/mission2"], function (e, t, n, r, i) {
		var s = {
			main: n.prepareMeta(t),
			missions: {
				mission1: n.prepareMeta(r),
				mission2: n.prepareMeta(i)
			},
			productsLayout: e.layout,
			products: e.items,
			timeTravelTicketValue: e.timeTravelTicketValue
		};
		s.productsById = {}, s.productsByIdNum = [];
		for (var o in s.products) {
			if (s.productsById[s.products[o].id]) throw new Error("Purchase with id " + s.products[o].id + " already exists!");
			if (s.productsByIdNum[s.products[o].idNum]) throw new Error("Purchase with idNum " + s.products[o].idNum + " already exists!");
			s.productsById[s.products[o].id] = s.products[o], s.productsByIdNum[s.products[o].idNum] = s.products[o]
		}
		return s
	}),
	define("config/config", [], function () {
		return {
			userHash: {
				key: "FactoryIdleUserHash"
			},
			imageMap: {
				path: ""
			},
			api: {
				server: {
					url: "http://api.factoryidle.com"
				},
				armorGames: {
					gameKey: ""
				},
				local: {
					storageKey: "FactoryIdleLocal"
				}
			},
			saveManager: {
				cloudSaveIntervalMs: 9e5,
				localSaveIntervalMs: 5e3
			},
			main: {
				warnToStoreUserHashAfterTicks: {
					1e4: true,
					1e5: true,
					1e6: true
				}
			}
		}
	}),
	define("config/event/GlobalUiEvent", [], function () {
		return {
			KEY_PRESS: "KEY_PRESS",
			FOCUS: "FOCUS",
			BLUR: "BLUR",
			SHOW_MAIN_GAME: "SHOW_MAIN_GAME",
			SHOW_MISSIONS: "SHOW_MISSIONS",
			SHOW_MISSION: "SHOW_MISSION"
		}
	}),
	define("config/event/GameUiEvent", [], function () {
		return {
			SHOW_FACTORY: "SHOW_FACTORY",
			SHOW_FACTORIES: "SHOW_FACTORIES",
			SHOW_RESEARCH: "SHOW_RESEARCH",
			SHOW_UPGRADES: "SHOW_UPGRADES",
			SHOW_ACHIEVEMENTS: "SHOW_ACHIEVEMENTS",
			SHOW_HELP: "SHOW_HELP",
			SHOW_STATISTICS: "SHOW_STATISTICS",
			SHOW_PURCHASES: "SHOW_PURCHASES",
			SHOW_SETTINGS: "SHOW_SETTINGS",
			SHOW_TIME_TRAVEL: "SHOW_TIME_TRAVEL"
		}
	}),
	define("config/event/GameEvent", [], function () {
		return {
			GAME_TICK: "GAME_TICK",
			MONEY_UPDATED: "MONEY_UPDATED",
			RESEARCH_POINTS_UPDATED: "RESEARCH_POINTS_UPDATED",
			ACHIEVEMENT_RECEIVED: "ACHIEVEMENT_RECEIVED",
			TOGGLE_TICKS: "TOGGLE_TICKS",
			TICKS_STOPPED: "TICKS_STOPPED",
			TICKS_STARTED: "TICKS_STARTED",
			BONUS_TICKS_UPDATED: "BONUS_TICKS_UPDATED",
			TIME_TRAVEL_TICKETS_UPDATED: "TIME_TRAVEL_TICKETS_UPDATED",
			FOCUS: "FOCUS",
			BLUR: "BLUR",
			RESEARCH_BOUGHT: "RESEARCH_BOUGHT",
			BACKGROUND_MODE_ACTIVATED: "BACKGROUND_MODE_ACTIVATED",
			BACKGROUND_MODE_DISABLED: "BACKGROUND_MODE_DISABLED"
		}
	}),
	define("config/event/FactoryEvent", [], function () {
		return {
			FACTORY_COMPONENTS_CHANGED: "FACTORY_COMPONENTS_CHANGED",
			TILE_TYPE_CHANGED: "TILE_TYPE_CHANGED",
			FACTORY_TICK: "FACTORY_TICK",
			FACTORY_MOUSE_OUT: "FACTORY_MOUSE_OUT",
			FACTORY_MOUSE_MOVE: "FACTORY_MOUSE_MOVE",
			FACTORY_MOUSE_DOWN: "FACTORY_MOUSE_DOWN",
			FACTORY_MOUSE_UP: "FACTORY_MOUSE_UP",
			FACTORY_SCROLL_START: "FACTORY_SCROLL_START",
			FACTORY_SCROLL_END: "FACTORY_SCROLL_END",
			COMPONENT_META_SELECTED: "COMPONENT_META_SELECTED",
			HOVER_COMPONENT_META: "HOVER_COMPONENT_META",
			MAP_TOOL_SELECTED: "MAP_TOOL_SELECTED",
			COMPONENT_SELECTED: "COMPONENT_SELECTED",
			REFRESH_COMPONENT_INFO: "REFRESH_COMPONENT_INFO",
			UPGRADE_BOUGHT: "UPGRADE_BOUGHT",
			OPEN_SCREENSHOT_VIEW: "SHOW_SCREENSHOT_VIEW"
		}
	}),
	define("config/event/ApiEvent", [], function () {
		return {
			INCENTIVIZED_AD_SHOW: "INCENTIVIZED_AD_SHOW",
			INCENTIVIZED_AD_CHECK_STATUS: "INCENTIVIZED_AD_CHECK_STATUS",
			INCENTIVIZED_AD_STATUS: "INCENTIVIZED_AD_STATUS",
			INCENTIVIZED_AD_COMPLETED: "INCENTIVIZED_AD_COMPLETED",
			INCENTIVIZED_AD_ABANDONED: "INCENTIVIZED_AD_ABANDONED"
		}
	}),
	define("game/InputOutputManager", [], function () {
		var e = {
				top: "bottom",
				bottom: "top",
				left: "right",
				right: "left"
			},
			t = function (e, t) {
				this.tile = e, this.changedCallback = t, this.inputsList = [], this.inputsByDirection = {
					top: null,
					right: null,
					bottom: null,
					left: null
				}, this.outputsList = [], this.outputsByDirection = {
					top: null,
					right: null,
					bottom: null,
					left: null
				}, this.reset()
			};
		return t.prototype.reset = function () {
			this.clearInput("top"), this.clearInput("right"), this.clearInput("bottom"), this.clearInput("left"), this.clearOutput("top"), this.clearOutput("right"), this.clearOutput("bottom"), this.clearOutput("left")
		}, t.prototype.setInput = function (t) {
			if (this.inputsByDirection[t]) return;
			this.clearOutput(t);
			var n = this.tile.getTileInDirection(t);
			this.inputsByDirection[t] = n, this._updateInputOutputLists(), n.getInputOutputManager().setOutput(e[t]), this.changedCallback()
		}, t.prototype.setOutput = function (t) {
			if (this.outputsByDirection[t]) return;
			this.clearInput(t);
			var n = this.tile.getTileInDirection(t);
			this.outputsByDirection[t] = n, this._updateInputOutputLists(), n.getInputOutputManager().setInput(e[t]), this.changedCallback()
		}, t.prototype.clearInput = function (t) {
			if (!this.inputsByDirection[t]) return;
			var n = this.inputsByDirection[t];
			this.inputsByDirection[t] = null, n.getInputOutputManager().clearOutput(e[t]), this._updateInputOutputLists(), this.changedCallback()
		}, t.prototype.clearOutput = function (t) {
			if (!this.outputsByDirection[t]) return;
			var n = this.outputsByDirection[t];
			this.outputsByDirection[t] = null, n.getInputOutputManager().clearInput(e[t]), this._updateInputOutputLists(), this.changedCallback()
		}, t.prototype._updateInputOutputLists = function () {
			this.inputsList = [], this.inputsByDirection.top && this.inputsList.push(this.inputsByDirection.top), this.inputsByDirection.right && this.inputsList.push(this.inputsByDirection.right), this.inputsByDirection.bottom && this.inputsList.push(this.inputsByDirection.bottom), this.inputsByDirection.left && this.inputsList.push(this.inputsByDirection.left), this.outputsList = [], this.outputsByDirection.top && this.outputsList.push(this.outputsByDirection.top), this.outputsByDirection.right && this.outputsList.push(this.outputsByDirection.right), this.outputsByDirection.bottom && this.outputsList.push(this.outputsByDirection.bottom), this.outputsByDirection.left && this.outputsList.push(this.outputsByDirection.left)
		}, t.prototype.getInputsList = function () {
			return this.inputsList
		}, t.prototype.getInputsByDirection = function () {
			return this.inputsByDirection
		}, t.prototype.getOutputsList = function () {
			return this.outputsList
		}, t.prototype.getOutputsByDirection = function () {
			return this.outputsByDirection
		}, t.prototype.exportToWriter = function (e) {
			var t = (new BinaryBoolean).writeAll(this.inputsByDirection.top, this.inputsByDirection.right, this.inputsByDirection.bottom, this.inputsByDirection.left, this.outputsByDirection.top, this.outputsByDirection.right, this.outputsByDirection.bottom, this.outputsByDirection.left);
			e.writeBooleanMap(t)
		}, t.prototype.importFromReader = function (e, t) {
			var n = e.readBooleanMap();
			n.readBoolean() && this.setInput("top"), n.readBoolean() && this.setInput("right"), n.readBoolean() && this.setInput("bottom"), n.readBoolean() && this.setInput("left"), n.readBoolean() && this.setOutput("top"), n.readBoolean() && this.setOutput("right"), n.readBoolean() && this.setOutput("bottom"), n.readBoolean() && this.setOutput("left")
		}, t
	}),
define("game/strategy/helper/Package", [], function () {
		var e = [],
			t = function (e, t, n) {
				this.resourceId = e;
				if (!n) throw new Error("Missing argument factory");
				this.meta = n.getGame().getMeta().resourcesById[e], this.offset = Math.round(Math.random() * 4) - 2, this.amount = t
			};
		return t.getNew = function (n, r, i) {
			return e.length > 0 ? e.pop() : new t(n, r, i)
		}, t.free = function (t) {
			e.push(t)
		}, t.prototype.getResourceId = function () {
			return this.resourceId
		}, t.prototype.getResourceIdNum = function () {
			return this.meta.idNum
		}, t.prototype.toString = function () {
			return this.resourceId
		}, t.prototype.getOffset = function () {
			return this.offset
		}, t.prototype.getAmount = function () {
			return this.amount
		}, t.staticExportData = function (e, t) {
			e ? (t.writeUint8(e.getResourceIdNum()), t.writeUint8(e.getAmount())) : t.writeUint8(0)
		}, t.createFromExport = function (e, n, r) {
			var i = n.readUint8();
			if (i == 0) return null;
			var s = r >= 6 ? n.readUint8() : 1,
				o = e.getGame().getMeta().resourcesByIdNum[i];
			return o ? t.getNew(o.id, s, e) : null
		}, t
	}),
define("Game/strategy/helper/ResourceOutput", ["game/strategy/helper/Package"], function (e) {
		var t = function (e, t, n) {
			this.component = e, this.handledResources = t, this.outputResourcesOrder = n, this.reset()
		};
		return t.prototype.reset = function () {
			this.resources = {};
			for (var e = 0; e < this.outputResourcesOrder.length; e++) this.resources[this.outputResourcesOrder[e]] = 0;
			this.outResourceSelectionIndex = 0, this.distributeTileIndex = 0
		}, t.prototype.updateWithDescriptionData = function (e) {
			e.stock || (e.stock = []);
			var t = this.component.getFactory().getGame().getMeta().resourcesById;
			for (var n in this.resources) e.stock.push({
				resourceId: n,
				resourceName: t[n].nameShort,
				amount: this.resources[n],
				max: this.getMax(n)
			})
		}, t.prototype.getMax = function (e) {
			var t = this.component.getMeta();
			return this.handledResources[e].max * this.component.getFactory().getUpgradesManager().getComponentBonuses(t.applyUpgradesFrom ? t.applyUpgradesFrom : t.id).maxStorageBonus
		}, t.getMetaOutputAmount = function (e, t) {
			return 1 + t.getUpgradesManager().getBonuses().packageSizeBonus + t.getUpgradesManager().getComponentBonuses(e.id).packageSizeBonus
		}, t.prototype.getOutputAmount = function () {
			return t.getMetaOutputAmount(this.component.getMeta(), this.component.getFactory())
		}, t.prototype.distribute = function () {
			var t = this.component.getSurroundedOutputTiles();
			for (var n = 0; n < t.length; n++) {
				var r = this._getNextOutputResource();
				if (!r) break;
				var i = t[this.distributeTileIndex];
				this.distributeTileIndex = (this.distributeTileIndex + 1) % t.length;
				var s = i.tile.getComponent().getStrategy().getInputQueue(i.oppositeDirection);
				if (s.getFirst() != null) continue;
				var o = this.getOutputAmount();
				s.setFirst(new e(r, o, this.component.getFactory())), this.resources[r] -= o, this.outResourceSelectionIndex = (this.outResourceSelectionIndex + 1) % this.outputResourcesOrder.length
			}
		}, t.prototype._getNextOutputResource = function () {
			for (var e = 0; e < this.outputResourcesOrder.length; e++) {
				var t = this.outputResourcesOrder[(this.outResourceSelectionIndex + e) % this.outputResourcesOrder.length];
				if (this.resources[t] >= this.getOutputAmount()) return t
			}
			return this.outResourceSelectionIndex = 0, null
		}, t.prototype.addResource = function (e, t) {
			this.resources[e] += t
		}, t.prototype.getResource = function (e) {
			return this.resources[e]
		}, t.prototype.toString = function () {
			var e = "OUT outIndex:" + this.distributeTileIndex + " resIndex:" + this.outResourceSelectionIndex + "<br />";
			for (var t in this.resources) e += t + ": " + this.resources[t] + "<br />";
			return e
		}, t.prototype.exportToWriter = function (e) {
			var t = 0;
			for (var n in this.resources) t++;
			e.writeUint8(t);
			for (var n in this.resources) e.writeUint32(this.resources[n]);
			e.writeUint8(this.outResourceSelectionIndex), e.writeUint8(this.distributeTileIndex)
		}, t.prototype.importFromReader = function (e, t) {
			var n = e.readUint8(),
				r = 0;
			for (var i in this.resources) {
				if (r >= n) break;
				this.resources[i] = e.readUint32(), r++
			}
			this.outResourceSelectionIndex = e.readUint8(), this.distributeTileIndex = e.readUint8()
		}, t
	}),
define("Game/strategy/helper/DelayedAction", [], function () {
		var e = function (e) {
			this.interval = e, this.reset(), this.calculateEfficiencyInterval = 50
		};
		return e.prototype.reset = function () {
			this.timer = 0, this.efficiency = null, this.workingTime = 0, this.totalTime = 0
		}, e.prototype.updateWithDescriptionData = function (e) {
			e.effectivenessStr = this.efficiency !== null ? Math.round(this.efficiency) + "%" : "-"
		}, e.prototype.canStart = function () {
			throw new Error("canStart method should be overwritten")
		}, e.prototype.start = function () {
			throw new Error("start method should be overwritten")
		}, e.prototype.finished = function () {
			throw new Error("finished method should be overwritten")
		}, e.prototype.getEfficiency = function () {
			return this.efficiency
		}, e.prototype.calculate = function (e) {
			this.timer > 0 && (this.timer >= this.interval && (this.finished(e), this.timer = -1), this.timer++), this.timer == 0 && this.canStart() && (this.start(e), this.timer = 1), this.totalTime >= this.calculateEfficiencyInterval && (this.efficiency = Math.round(this.workingTime * 100 / this.totalTime), this.totalTime = 0, this.workingTime = 0), this.totalTime++, this.timer > 0 && this.workingTime++
		}, e.prototype.toString = function () {
			var e = "PRODUCTION<br />";
			return e += "Efficiency: " + (this.efficiency === null ? "..." : this.efficiency + "%") + "<br />", this.timer == 0 ? e += "Idle<br />" : e += this.timer + "/" + this.interval + "<br />", e
		}, e.prototype.exportToWriter = function (e) {
			e.writeUint8(this.timer)
		}, e.prototype.importFromReader = function (e, t) {
			this.timer = e.readUint8()
		}, e
	}),
define("game/strategy/Buyer", ["Game/strategy/helper/ResourceOutput", "Game/strategy/helper/DelayedAction"], function (e, t) {
		var n = function (n, r) {
			this.component = n, this.game = this.component.getFactory().getGame(), this.meta = r, this.outResourcesManager = new e(n, r.purchaseResources, r.outputResourcesOrder), this.producer = new t(this.meta.interval), this.producer.canStart = this.canBuy.bind(this), this.producer.start = this.preparePurchase.bind(this), this.producer.finished = this.finishPurchase.bind(this)
		};
		return n.getMetaBuyPrice = function (e, t, n) {
			return e.strategy.purchaseResources[t].price * n.getGame().getProfitMultiplier()
		}, n.prototype.getBuyPrice = function (e) {
			return n.getMetaBuyPrice(this.component.getMeta(), e, this.component.getFactory())
		}, n.getMetaBuyAmount = function (e, t, n) {
			return e.strategy.purchaseResources[t].amount * n.getUpgradesManager().getComponentBonuses(e.id).buyAmountBonus
		}, n.prototype.getBuyAmount = function (e) {
			return n.getMetaBuyAmount(this.component.getMeta(), e, this.component.getFactory())
		}, n.getMetaDescriptionData = function (t, r, i) {
			var s = t.strategy,
				o = [],
				u = 0,
				a = r.getGame().getMeta().resourcesById,
				f = 0;
			for (var l in s.purchaseResources) {
				var c = n.getMetaBuyAmount(t, l, r);
				u += c * n.getMetaBuyPrice(t, l, r), o.push("<span class='" + l + "'><b>" + n.getMetaBuyAmount(t, l, r) + "</b> " + a[l].name.lcFirst() + "</span>"), f = Math.max(f, c)
			}
			return {
				interval: s.interval,
				purchasePrice: nf(u),
				buyStr: arrayToHumanStr(o),
				noOfOutputs: Math.ceil(f / s.interval / e.getMetaOutputAmount(t, r))
			}
		}, n.prototype.getDescriptionData = function () {
			var e = n.getMetaDescriptionData(this.component.getMeta(), this.component.getFactory(), this);
			return this.producer.updateWithDescriptionData(e), this.outResourcesManager.updateWithDescriptionData(e), e
		}, n.prototype.clearContents = function () {
			this.outResourcesManager.reset(), this.producer.reset()
		}, n.prototype.calculateOutputTick = function (e) {
			this.producer.calculate(e), this.outResourcesManager.distribute()
		}, n.prototype.calculatePurchasePrice = function () {
			var e = 0;
			for (var t in this.meta.purchaseResources) {
				var n = this.meta.purchaseResources[t];
				e += this.getBuyAmount(t) * this.getBuyPrice(t)
			}
			return e
		}, n.prototype.canBuy = function () {
			for (var e in this.meta.purchaseResources)
				if (this.outResourcesManager.getResource(e) + this.getBuyAmount(e) > this.outResourcesManager.getMax(e)) return false;
			return true
		}, n.prototype.preparePurchase = function (e) {
			e.resourceCosts += this.calculatePurchasePrice()
		}, n.prototype.finishPurchase = function (e) {
			for (var t in this.meta.purchaseResources) this.outResourcesManager.addResource(t, this.getBuyAmount(t))
		}, n.prototype.toString = function () {
			var e = "";
			return e += this.outResourcesManager.toString() + "<br />", e += this.producer.toString() + "<br />", e
		}, n.prototype.exportToWriter = function (e) {
			this.outResourcesManager.exportToWriter(e), this.producer.exportToWriter(e)
		}, n.prototype.importFromReader = function (e, t) {
			this.outResourcesManager.importFromReader(e, t), this.producer.importFromReader(e, t)
		}, n
	}),
define("game/strategy/helper/TransportStackingQueue", ["game/strategy/helper/Package"], function (e) {
		var t = function (e, t) {
			this.queue = new Array(e), this.tile = t
		};
		return t.prototype.reset = function () {
			for (var e = 0; e < this.queue.length; e++) this.set(e, undefined)
		}, t.prototype.forward = function () {
			for (var e = this.queue.length - 2; e >= 0; e--) this.queue[e + 1] || (this.queue[e + 1] = this.queue[e], this.queue[e] = undefined)
		}, t.prototype.setFirst = function (e) {
			this.queue[0] = e
		}, t.prototype.unsetFirst = function () {
			this.setFirst(undefined)
		}, t.prototype.setLast = function (e) {
			this.queue[this.queue.length - 1] = e
		}, t.prototype.unsetLast = function () {
			this.setLast(undefined)
		}, t.prototype.getLast = function () {
			return this.queue[this.queue.length - 1]
		}, t.prototype.getFirst = function () {
			return this.queue[0]
		}, t.prototype.getQueue = function () {
			return this.queue
		}, t.prototype.get = function (e) {
			return this.queue[e]
		}, t.prototype.set = function (e, t) {
			this.queue[e] = t ? t : undefined
		}, t.prototype.getLength = function () {
			return this.queue.length
		}, t.prototype.toString = function () {
			return this.queue.join(",")
		}, t.prototype.exportToWriter = function (t) {
			for (var n = 0; n < this.queue.length; n++) e.staticExportData(this.queue[n], t)
		}, t.prototype.importFromReader = function (t, n) {
			for (var r = 0; r < this.queue.length; r++) this.set(r, e.createFromExport(this.tile.getFactory(), t, n))
		}, t.test = function () {
			var e = function (e, t) {
					var r = n.getQueue().join(","),
						i = e.join(",");
					if (r != i) throw new Error("StackQueue test " + t + " failed. Expected " + i + " but got " + r)
				},
				n = new t(3);
			n.setFirst("A"), e(["A", null, null], 1), n.forward(), e([null, "A", null], 2), n.forward(), e([null, null, "A"], 3), n.setFirst("B"), e(["B", null, "A"], 4), n.forward(), e([null, "B", "A"], 5), n.setLast(null), e([null, "B", null], 6), n.forward(), e([null, null, "B"], 7), n.setLast(null), e([null, null, null], 8), n.forward(), e([null, null, null], 9), n.forward(), e([null, null, null], 10)
		}, t
	}),
define("game/strategy/Transport", ["game/strategy/helper/TransportStackingQueue"], function (e) {
		var t = {
				top: "bottom",
				bottom: "top",
				left: "right",
				right: "left"
			},
			n = function (e, t) {
				this.component = e, this.meta = t, this.tile = this.component.getMainTile(), this.reset()
			};
		return n.prototype.clearContents = function () {
			this.updateInputsOutputs()
		}, n.prototype.reset = function () {
			this.inputQueueOffset = 0, this.inputQueuesList = [], this.inputQueues = {}, this.outputQueueOffset = 0, this.outputQueuesList = [], this.outputQueues = {}, this.isBridge = false
		}, n.getMetaDescriptionData = function (e, t, n) {
			var r = e.strategy;
			return {}
		}, n.prototype.getDescriptionData = function () {
			var e = n.getMetaDescriptionData(this.component.getMeta(), this.component.getFactory(), this);
			return e
		}, n.prototype.updateInputsOutputs = function () {
			this.reset();
			var t = this.component.getMainTile(),
				n = t.getInputOutputManager().getInputsByDirection();
			for (var r in n)
				if (n[r]) {
					var i = new e(this.meta.queueSize, this.tile);
					this.inputQueuesList.push(i), this.inputQueues[r] = i
				}
			var s = t.getInputOutputManager().getOutputsByDirection();
			for (var o in s)
				if (s[o]) {
					var i = new e(this.meta.queueSize, this.tile);
					this.outputQueuesList.push(i), this.outputQueues[o] = i
				}
			var u = this.outputQueues.top && this.inputQueues.bottom || this.outputQueues.bottom && this.inputQueues.top,
				a = this.outputQueues.left && this.inputQueues.right || this.outputQueues.right && this.inputQueues.left;
			this.isBridge = u && a
		}, n.prototype.getOutputQueues = function (e) {
			return this.outputQueues
		}, n.prototype.getOutputQueue = function (e) {
			return this.outputQueues[e]
		}, n.prototype.getInputQueues = function (e) {
			return this.inputQueues
		}, n.prototype.getInputQueue = function (e) {
			return this.inputQueues[e]
		}, n.prototype.calculateTransport = function () {
			this.isBridge ? (this.moveInternalInputsToOutputsBridge("top", "bottom"), this.moveInternalInputsToOutputsBridge("left", "right")) : this.moveInternalInputsToOutputs(), this.pullFromOutsideToInputs("top", this.inputQueues.top), this.pullFromOutsideToInputs("right", this.inputQueues.right), this.pullFromOutsideToInputs("bottom", this.inputQueues.bottom), this.pullFromOutsideToInputs("left", this.inputQueues.left)
		}, n.prototype.moveInternalInputsToOutputsBridge = function (e, t) {
			if (this.inputQueues[t]) {
				var n = e;
				e = t, t = n
			}
			var r = this.inputQueues[e],
				i = this.outputQueues[t],
				s = r.getLast();
			s && !i.getFirst() && (i.setFirst(s), r.unsetLast()), r.forward()
		}, n.prototype.moveInternalInputsToOutputs = function () {
			var e = 0;
			for (var t = 0; t < this.inputQueuesList.length; t++) {
				var n = this.inputQueuesList[(this.inputQueueOffset + t) % this.inputQueuesList.length],
					r = n.getLast();
				if (r)
					for (var i = 0; i < this.outputQueuesList.length; i++) {
						var s = (this.outputQueueOffset + i) % this.outputQueuesList.length;
						if (!this.outputQueuesList[s].getFirst()) {
							this.outputQueueOffset = (this.outputQueueOffset + 1) % this.outputQueuesList.length, this.outputQueuesList[s].setFirst(r), n.unsetLast(), e++;
							break
						}
					}
				n.forward()
			}
			this.inputQueueOffset = (this.inputQueueOffset + e) % this.inputQueuesList.length
		}, n.prototype.pullFromOutsideToInputs = function (e, n) {
			if (!n) return;
			var r = this.tile.getTileInDirection(e),
				i = r.getComponent();
			if (i.getMeta().strategy.type == "transport") {
				var s = i.getStrategy().getOutputQueue(t[e]);
				!n.getFirst() && s.getLast() && (n.setFirst(s.getLast()), s.unsetLast()), s.forward()
			}
		}, n.prototype.toString = function () {
			var e = "IN offset:" + this.inputQueueOffset + "<br />";
			for (var t in this.inputQueues) {
				var n = "",
					r = this.inputQueues[t].getQueue();
				for (var i = 0; i < r.length; i++) n += (r[i] ? r[i].getResourceId() : "") + ",";
				e += t + ": " + n + "<br />"
			}
			e += "<br />", e += "OUT offset:" + this.outputQueueOffset + "<br />";
			for (var t in this.outputQueues) {
				var r = this.outputQueues[t].getQueue(),
					n = "";
				for (var i = 0; i < r.length; i++) n += (r[i] ? r[i].getResourceId() : "") + ",";
				e += t + ": " + n + "<br />"
			}
			return e
		}, n.prototype.exportToWriter = function (e) {
			var t = function (t) {
				t && t.exportToWriter(e)
			};
			e.writeUint8(this.inputQueueOffset), e.writeUint8(this.outputQueueOffset), t(this.inputQueues.top), t(this.inputQueues.right), t(this.inputQueues.bottom), t(this.inputQueues.left), t(this.outputQueues.top), t(this.outputQueues.right), t(this.outputQueues.bottom), t(this.outputQueues.left)
		}, n.prototype.importFromReader = function (e, t) {
			var n = function (n) {
				n && n.importFromReader(e, t)
			};
			this.inputQueueOffset = e.readUint8(), this.outputQueueOffset = e.readUint8(), n(this.inputQueues.top), n(this.inputQueues.right), n(this.inputQueues.bottom), n(this.inputQueues.left), n(this.outputQueues.top), n(this.outputQueues.right), n(this.outputQueues.bottom), n(this.outputQueues.left)
		}, n
	}),
define("Game/strategy/helper/ResourceIntake", [], function () {
		var e = function (e, t) {
			this.component = e, this.inputResources = t, this.reset()
		};
		return e.prototype.reset = function () {
			this.resources = {}, this.inputTileIndex = [];
			for (var e in this.inputResources) this.resources[e] = 0, this.inputTileIndex.push({
				resource: e,
				offset: 0
			})
		}, e.prototype.updateWithDescriptionData = function (e) {
			e.stock || (e.stock = []);
			var t = this.component.getFactory().getGame().getMeta().resourcesById;
			for (var n in this.inputResources) {
				var r = this.inputResources[n],
					i = true;
				r.requiresResearch && (i = this.component.getFactory().getGame().getResearchManager().getResearch(r.requiresResearch) > 0), i && e.stock.push({
					resourceId: n,
					resourceName: t[n].nameShort,
					amount: this.resources[n],
					max: this.getMax(n)
				})
			}
		}, e.prototype.getMax = function (e) {
			var t = this.component.getMeta();
			return this.inputResources[e].max * this.component.getFactory().getUpgradesManager().getComponentBonuses(t.applyUpgradesFrom ? t.applyUpgradesFrom : t.id).maxStorageBonus
		}, e.prototype.takeIn = function () {
			var e = this.component.getSurroundedInputTiles();
			for (var t = 0; t < this.inputTileIndex.length; t++) {
				var n = this.inputTileIndex[t].resource,
					r = this.inputTileIndex[t].offset,
					i = r;
				for (var s = 0; s < e.length; s++) {
					if (this.resources[n] >= this.getMax(n)) break;
					var o = e[(r + s) % e.length],
						u = o.tile.getComponent().getStrategy().getOutputQueue(o.direction),
						a = u.getLast();
					a && a.getResourceId() == n && (u.unsetLast(), i = (r + s + 1) % e.length, this.resources[a.getResourceId()] += a.getAmount())
				}
				this.inputTileIndex[t].offset = i
			}
			for (var f = 0; f < e.length; f++) e[f].tile.getComponent().getStrategy().getOutputQueue(e[f].direction).forward()
		}, e.prototype.addResource = function (e, t) {
			this.resources[e] += t
		}, e.prototype.getResource = function (e) {
			return this.resources[e]
		}, e.prototype.toString = function () {
			var e = "IN<br />";
			for (var t in this.inputTileIndex) e += this.inputTileIndex[t].resource + ": " + this.resources[this.inputTileIndex[t].resource] + " (offset:" + this.inputTileIndex[t].offset + " )<br />";
			return e
		}, e.prototype.exportToWriter = function (e) {
			e.writeUint8(this.inputTileIndex.length);
			for (var t = 0; t < this.inputTileIndex.length; t++) e.writeUint32(this.resources[this.inputTileIndex[t].resource]), e.writeUint8(this.inputTileIndex[t].offset)
		}, e.prototype.importFromReader = function (e, t) {
			var n = Math.min(this.inputTileIndex.length, e.readUint8());
			for (var r = 0; r < n; r++) this.resources[this.inputTileIndex[r].resource] = e.readUint32(), this.inputTileIndex[r].offset = e.readUint8()
		}, e
	}),
define("game/strategy/Converter", ["Game/strategy/helper/ResourceIntake", "Game/strategy/helper/ResourceOutput", "Game/strategy/helper/DelayedAction"], function (e, t, n) {
		var r = function (r, i) {
			this.component = r, this.meta = i, this.inResourcesManager = new e(r, i.inputResources, i.production), this.outResourcesManager = new t(r, i.production, i.outputResourcesOrder), this.producer = new n(this.meta.interval), this.producer.canStart = this.canStartProduction.bind(this), this.producer.start = this.startProduction.bind(this), this.producer.finished = this.finishedProduction.bind(this)
		};
		return r.prototype.clearContents = function () {
			this.inResourcesManager.reset(), this.outResourcesManager.reset(), this.producer.reset()
		}, r.getMetaUseAmount = function (e, t, n) {
			return e.strategy.inputResources[t].perOutputResource * n.getUpgradesManager().getComponentBonuses(e.id).convertAmountBonus
		}, r.prototype.getUseAmount = function (e) {
			return r.getMetaUseAmount(this.component.getMeta(), e, this.component.getFactory())
		}, r.getMetaProduceAmount = function (e, t, n) {
			return e.strategy.production[t].amount * n.getUpgradesManager().getComponentBonuses(e.id).convertAmountBonus * n.getUpgradesManager().getComponentBonuses(e.id).convertProduceMoreBonus
		}, r.prototype.getProduceAmount = function (e) {
			return r.getMetaProduceAmount(this.component.getMeta(), e, this.component.getFactory())
		}, r.getMetaDescriptionData = function (e, n, i) {
			var s = e.strategy,
				o = n.getGame().getMeta().resourcesById,
				u = [],
				a = [],
				f = [];
			for (var l in s.inputResources) u.push("<span class='" + l + "'><b>" + r.getMetaUseAmount(e, l, n) + "</b> " + o[l].name.lcFirst() + "</span>");
			var c = 0;
			for (var l in s.production)
				if (r.isProducing(n.getGame(), s, l)) {
					var h = r.getMetaProduceAmount(e, l, n);
					a.push("<span class='" + l + "'><b>" + h + "</b> " + o[l].name.lcFirst() + "</span>"), c = Math.max(c, h)
				}
			return {
				interval: s.interval,
				inputStr: arrayToHumanStr(u),
				outputStr: arrayToHumanStr(a),
				storageStr: arrayToHumanStr(f),
				noOfOutputs: Math.ceil(c / s.interval / t.getMetaOutputAmount(e, n))
			}
		}, r.isProducing = function (e, t, n) {
			return !t.productionRemoveResearch || !t.productionRemoveResearch[n] ? true : !e.getResearchManager().getResearch(t.productionRemoveResearch[n])
		}, r.prototype.getDescriptionData = function () {
			var e = r.getMetaDescriptionData(this.component.getMeta(), this.component.getFactory(), this);
			return this.producer.updateWithDescriptionData(e), this.inResourcesManager.updateWithDescriptionData(e), this.outResourcesManager.updateWithDescriptionData(e), e
		}, r.prototype.calculateInputTick = function () {
			this.inResourcesManager.takeIn()
		}, r.prototype.calculateOutputTick = function () {
			this.producer.calculate(), this.outResourcesManager.distribute()
		}, r.prototype.canStartProduction = function () {
			for (var e in this.meta.inputResources)
				if (this.inResourcesManager.getResource(e) < this.getUseAmount(e)) return false;
			for (var e in this.meta.production)
				if (this.outResourcesManager.getResource(e) + this.getProduceAmount(e) > this.outResourcesManager.getMax(e)) return false;
			return true
		}, r.prototype.startProduction = function () {
			for (var e in this.meta.inputResources) this.inResourcesManager.addResource(e, -this.getUseAmount(e))
		}, r.prototype.finishedProduction = function () {
			for (var e in this.meta.production) r.isProducing(this.component.getFactory().getGame(), this.meta, e) && this.outResourcesManager.addResource(e, this.getProduceAmount(e))
		}, r.prototype.toString = function () {
			var e = this.inResourcesManager.toString() + "<br />";
			return e += this.outResourcesManager.toString() + "<br />", e += this.producer.toString() + "<br />", e
		}, r.prototype.exportToWriter = function (e) {
			this.outResourcesManager.exportToWriter(e), this.inResourcesManager.exportToWriter(e), this.producer.exportToWriter(e)
		}, r.prototype.importFromReader = function (e, t) {
			this.outResourcesManager.importFromReader(e, t), this.inResourcesManager.importFromReader(e, t), this.producer.importFromReader(e, t)
		}, r
	}),
define("game/strategy/Seller", ["Game/strategy/helper/ResourceIntake", "Game/strategy/helper/DelayedAction"], function (e, t) {
		var n = function (n, r) {
			this.component = n, this.meta = r, this.game = this.component.getFactory().getGame(), this.inResourcesManager = new e(n, r.resources), this.producer = new t(this.meta.interval), this.producer.canStart = this.canStartSaleProcess.bind(this), this.producer.start = this.startSale.bind(this), this.producer.finished = this.finishSale.bind(this)
		};
		return n.prototype.clearContents = function () {
			this.inResourcesManager.reset(), this.producer.reset()
		}, n.getMetaSellAmount = function (e, t, n) {
			return e.strategy.resources[t].amount * n.getUpgradesManager().getComponentBonuses(e.id).sellAmountBonus
		}, n.prototype.getSellAmount = function (e) {
			return n.getMetaSellAmount(this.component.getMeta(), e, this.component.getFactory())
		}, n.getMetaSellPrice = function (e, t, n) {
			return e.strategy.resources[t].sellPrice * (1 + e.strategy.resources[t].sellMargin) * n.getUpgradesManager().getComponentBonuses(e.id).sellPriceBonus * n.getGame().getProfitMultiplier()
		}, n.prototype.getSellPrice = function (e) {
			return n.getMetaSellPrice(this.component.getMeta(), e, this.component.getFactory())
		}, n.getMetaDescriptionData = function (e, t, r) {
			var i = e.strategy,
				s = [],
				o = [],
				u = 0,
				a = t.getGame().getMeta().resourcesById;
			for (var f in i.resources) {
				var l = n.getMetaSellAmount(e, f, t) * n.getMetaSellPrice(e, f, t),
					c = n.getMetaSellAmount(e, f, t),
					h = true;
				i.resources[f].requiresResearch && (h = t.getGame().getResearchManager().getResearch(i.resources[f].requiresResearch) > 0), i.resources[f].bonus ? h && o.push("<span class='" + f + "'><b>" + c + "</b> " + a[f].name.lcFirst() + "</span> adds <b class='money'>$" + nf(l) + "</b>") : (u += l, s.push("<span class='" + f + "'><b>" + c + "</b> " + a[f].name.lcFirst() + "</span>"))
			}
			return {
				isSeller: true,
				interval: i.interval,
				sellPrice: nf(u),
				sellStr: arrayToHumanStr(s),
				bonusStr: o.join(", ")
			}
		}, n.prototype.getDescriptionData = function () {
			var e = n.getMetaDescriptionData(this.component.getMeta(), this.component.getFactory(), this);
			return this.producer.updateWithDescriptionData(e), this.inResourcesManager.updateWithDescriptionData(e), e
		}, n.prototype.calculateInputTick = function (e) {
			this.inResourcesManager.takeIn(), this.producer.calculate(e)
		}, n.prototype.canStartSaleProcess = function () {
			for (var e in this.meta.resources)
				if (!this.meta.resources[e].bonus && this.inResourcesManager.getResource(e) < this.getSellAmount(e)) return false;
			return true
		}, n.prototype.startSale = function (e) {}, n.prototype.finishSale = function (e) {
			for (var t in this.meta.resources) {
				var n = this.getSellAmount(t);
				this.inResourcesManager.getResource(t) >= n && (this.inResourcesManager.addResource(t, -n), e.resourceSales += n * this.getSellPrice(t))
			}
		}, n.prototype.toString = function () {
			var e = this.inResourcesManager.toString() + "<br />";
			return e += this.producer.toString() + "<br />", e
		}, n.prototype.exportToWriter = function (e) {
			this.inResourcesManager.exportToWriter(e), this.producer.exportToWriter(e)
		}, n.prototype.importFromReader = function (e, t) {
			this.inResourcesManager.importFromReader(e, t), this.producer.importFromReader(e, t)
		}, n
	}),
define("game/strategy/Garbage", ["Game/strategy/helper/DelayedAction"], function (e) {
		var t = function (t, n) {
			this.component = t, this.meta = n, this.game = this.component.getFactory().getGame(), this.noOfItems = 0, this.inputTileIndex = 0, this.removeAmount = 0, this.producer = new e(this.meta.interval), this.producer.canStart = this.canRemove.bind(this), this.producer.start = this.startRemoval.bind(this), this.producer.finished = this.finishRemoval.bind(this)
		};
		return t.prototype.clearContents = function () {
			this.noOfItems = 0, this.inputTileIndex = 0, this.removeAmount = 0, this.producer.reset()
		}, t.getMetaMax = function (e, t) {
			return e.strategy.max * t.getUpgradesManager().getComponentBonuses(e.id).maxStorageBonus
		}, t.prototype.getMax = function () {
			return t.getMetaMax(this.component.getMeta(), this.component.getFactory())
		}, t.getMetaRemoveAmount = function (e, t) {
			return e.strategy.removeAmount * t.getUpgradesManager().getComponentBonuses(e.id).removeAmountBonus
		}, t.prototype.getRemoveAmount = function () {
			return t.getMetaRemoveAmount(this.component.getMeta(), this.component.getFactory())
		}, t.getMetaDescriptionData = function (e, n, r) {
			var i = e.strategy;
			return {
				interval: i.interval,
				removeAmount: t.getMetaRemoveAmount(e, n),
				max: r ? r.getMax() : t.getMetaMax(e, n)
			}
		}, t.prototype.getDescriptionData = function () {
			var e = t.getMetaDescriptionData(this.component.getMeta(), this.component.getFactory(), this);
			return this.producer.updateWithDescriptionData(e), e.noOfItems = this.noOfItems, e
		}, t.prototype.calculateInputTick = function () {
			this.takeIn(), this.producer.calculate()
		}, t.prototype.takeIn = function () {
			var e = this.component.getSurroundedInputTiles(),
				t = this.inputTileIndex;
			for (var n = 0; n < e.length; n++) {
				var r = e[(this.inputTileIndex + n) % e.length],
					i = r.tile.getComponent().getStrategy().getOutputQueue(r.direction),
					s = i.getLast();
				s && this.noOfItems < this.getMax() && (i.unsetLast(), t = (this.inputTileIndex + n + 1) % e.length, this.noOfItems++), i.forward()
			}
			this.inputTileIndex = t
		}, t.prototype.canRemove = function () {
			return this.noOfItems >= this.getRemoveAmount()
		}, t.prototype.startRemoval = function () {
			this.removeAmount = Math.min(this.noOfItems, this.getRemoveAmount())
		}, t.prototype.finishRemoval = function () {
			this.noOfItems -= this.removeAmount, this.removeAmount = 0
		}, t.prototype.toString = function () {
			var e = "No of items: " + this.noOfItems + "<br />";
			return e += this.producer.toString(), this.removeAmount > 0 && (e += "Removing " + this.removeAmount + " items"), e += "<br />", e
		}, t.prototype.exportToWriter = function (e) {
			e.writeUint32(this.noOfItems), e.writeUint8(this.inputTileIndex), e.writeUint32(this.removeAmount), this.producer.exportToWriter(e)
		}, t.prototype.importFromReader = function (e, t) {
			this.noOfItems = e.readUint32(), this.inputTileIndex = e.readUint8(), this.removeAmount = e.readUint32(), this.producer.importFromReader(e, t)
		}, t
	}),
define("game/strategy/Sorter", ["Game/strategy/helper/ResourceIntake", "Game/strategy/helper/ResourceOutput", "Game/strategy/helper/DelayedAction", "game/strategy/helper/Package"], function (e, t, n, r) {
		var i = function (e, t) {
			this.component = e, this.meta = t, this.inputTileIndex = 0, this.inItem = null, this.inSortingItem = null, this.outItem = null, this.distributeTileIndexes = {
				"default": 0
			}, this.sortingIndex = {};
			for (var r in this.component.getMeta().allowedOutputs) this.sortingIndex[r] = null;
			this.producer = new n(this.meta.interval), this.producer.canStart = this.canStartSorting.bind(this), this.producer.start = this.startSorting.bind(this), this.producer.finished = this.finishedSorting.bind(this)
		};
		return i.prototype.clearContents = function () {
			this.inputTileIndex = 0, this.inItem = null, this.inSortingItem = null, this.outItem = null, this.distributeTileIndexes = {
				"default": 0
			};
			for (var e in this.sortingIndex) this.sortingIndex[e] && (this.distributeTileIndexes[this.sortingIndex[e]] = 0);
			this.producer.reset()
		}, i.getMetaDescriptionData = function (e, t, n) {
			return {}
		}, i.prototype.getDescriptionData = function () {
			var e = i.getMetaDescriptionData(this.component.getMeta(), this.component.getFactory(), this);
			return this.producer.updateWithDescriptionData(e), e
		}, i.prototype.getSortingIndex = function () {
			return this.sortingIndex
		}, i.prototype.setSortingResource = function (e, t, n) {
			this.sortingIndex[e + ":" + t] = n, this.clearContents()
		}, i.prototype.getSortingResource = function (e, t) {
			return this.sortingIndex[e + ":" + t]
		}, i.prototype.calculateInputTick = function () {
			if (this.inItem != null) return;
			var e = this.component.getSurroundedInputTiles(),
				t = this.inputTileIndex;
			for (var n = 0; n < e.length; n++) {
				var r = e[(this.inputTileIndex + n) % e.length],
					i = r.tile.getComponent().getStrategy().getOutputQueue(r.direction),
					s = i.getLast();
				s && !this.inItem && (i.unsetLast(), t = (this.inputTileIndex + n + 1) % e.length, this.inItem = s), i.forward()
			}
			this.inputTileIndex = t
		}, i.prototype.calculateOutputTick = function () {
			this.producer.calculate(), this.moveItemOut()
		}, i.prototype.moveItemOut = function () {
			if (!this.outItem) return;
			var e = this.outItem.getResourceId();
			this.distributeTileIndexes[e] === undefined && (e = "default");
			var t = this.component.getSurroundedOutputTiles();
			for (var n = 0; n < t.length; n++) {
				var r = t[this.distributeTileIndexes[e]];
				this.distributeTileIndexes[e] = (this.distributeTileIndexes[e] + 1) % t.length;
				var i = r.from.getX() - this.component.getX(),
					s = r.from.getY() - this.component.getY(),
					o = this.sortingIndex[i + ":" + s];
				if (o && o != this.outItem.getResourceId() || !o && this.distributeTileIndexes[this.outItem.getResourceId()] !== undefined) continue;
				var u = r.tile.getComponent().getStrategy().getInputQueue(r.oppositeDirection);
				if (u.getFirst() != null) continue;
				u.setFirst(this.outItem), this.outItem = null;
				break
			}
		}, i.prototype.canStartSorting = function () {
			return !this.outItem && this.inItem
		}, i.prototype.startSorting = function () {
			this.inSortingItem = this.inItem, this.inItem = null
		}, i.prototype.finishedSorting = function () {
			this.outItem = this.inSortingItem, this.inSortingItem = null, this.moveItemOut()
		}, i.prototype.toString = function () {
			var e = "";
			e += "Next: " + (this.inItem ? this.inItem.getResourceId() : "-") + "<br />", e += "Sorting: " + (this.inSortingItem ? this.inSortingItem.getResourceId() : "-") + "<br />", e += "Out: " + (this.outItem ? this.outItem.getResourceId() : "-") + "<br />", e += this.producer.toString() + "<br />", e += "Sort rules: <br />";
			for (var t in this.sortingIndex) e += t + ": " + this.sortingIndex[t] + "<br />";
			e += "<br />", e += "Input index: " + this.inputTileIndex + "<br />", e += "Out indexes: <br />";
			for (var t in this.distributeTileIndexes) e += t + ": " + this.distributeTileIndexes[t] + "<br />";
			return e
		}, i.prototype.exportToWriter = function (e) {
			e.writeUint8(this.inputTileIndex), r.staticExportData(this.inItem, e), r.staticExportData(this.inSortingItem, e), r.staticExportData(this.outItem, e), e.writeUint8(this.distributeTileIndexes.default);
			for (var t in this.sortingIndex) {
				var n = this.sortingIndex[t],
					i = 0,
					s = 0;
				n && (i = this.component.getFactory().getGame().getMeta().resourcesById[n].idNum, s = this.distributeTileIndexes[n]), e.writeUint8(i), e.writeUint8(s)
			}
			this.producer.exportToWriter(e)
		}, i.prototype.importFromReader = function (e, t) {
			this.inputTileIndex = e.readUint8(), this.inItem = r.createFromExport(this.component.getFactory(), e, t), this.inSortingItem = r.createFromExport(this.component.getFactory(), e, t), this.outItem = r.createFromExport(this.component.getFactory(), e, t), this.distributeTileIndexes = {}, this.distributeTileIndexes.default = e.readUint8();
			for (var n in this.sortingIndex) {
				var i = e.readUint8();
				this.sortingIndex[n] = i ? this.component.getFactory().getGame().getMeta().resourcesByIdNum[i].id : null, this.distributeTileIndexes[this.sortingIndex[n]] = e.readUint8()
			}
			this.producer.importFromReader(e, t)
		}, i
	}),
define("game/strategy/ResearchCenter", ["Game/strategy/helper/ResourceIntake", "Game/strategy/helper/DelayedAction"], function (e, t) {
		var n = function (n, r) {
			this.component = n, this.meta = r, this.game = this.component.getFactory().getGame(), this.productionBonus = 0, this.inResourcesManager = new e(n, r.resources), this.producer = new t(this.meta.interval), this.producer.canStart = this.canProduce.bind(this), this.producer.start = this.startProduction.bind(this), this.producer.finished = this.finishProduction.bind(this)
		};
		return n.prototype.clearContents = function () {
			this.inResourcesManager.reset(), this.producer.reset()
		}, n.getMetaBonus = function (e, t, n) {
			return e.strategy.resources[t].bonus * n.getUpgradesManager().getComponentBonuses(e.applyUpgradesFrom ? e.applyUpgradesFrom : e.id).researchPaperBonus
		}, n.prototype.getBonus = function (e) {
			return n.getMetaBonus(this.component.getMeta(), e, this.component.getFactory())
		}, n.getResearchProduction = function (e, t) {
			return e.strategy.researchProduction * t.getGame().getResearchProductionMultiplier()
		}, n.prototype.getResearchProduction = function () {
			return n.getResearchProduction(this.component.getMeta(), this.component.getFactory())
		}, n.getMetaDescriptionData = function (e, t, r) {
			var i = e.strategy,
				s = t.getGame().getMeta().resourcesById,
				o = [];
			for (var u in i.resources) o.push("<span class='" + u + "'>" + s[u].name.lcFirst() + ": <b>" + nf(n.getMetaBonus(e, u, t)) + "</b></span> ");
			return {
				interval: i.interval,
				bonusStr: arrayToHumanStr(o),
				productionStr: "<span class='research'><b>" + nf(n.getResearchProduction(e, t)) + "</b> research points </span>"
			}
		}, n.prototype.getDescriptionData = function () {
			var e = n.getMetaDescriptionData(this.component.getMeta(), this.component.getFactory(), this);
			return this.producer.updateWithDescriptionData(e), this.inResourcesManager.updateWithDescriptionData(e), e
		}, n.prototype.calculateInputTick = function (e) {
			this.inResourcesManager.takeIn(), this.producer.calculate(e)
		}, n.prototype.canProduce = function () {
			return true
		}, n.prototype.startProduction = function () {
			var e = 1;
			for (var t in this.meta.resources) e += this.inResourcesManager.getResource(t) * this.getBonus(t), this.inResourcesManager.addResource(t, -this.inResourcesManager.getResource(t));
			this.productionBonus = e
		}, n.prototype.finishProduction = function (e) {
			e.researchProduction += this.getResearchProduction() * this.productionBonus
		}, n.prototype.toString = function () {
			var e = "";
			return e += this.producer.toString(), e += "<br />", e
		}, n.prototype.exportToWriter = function (e) {
			e.writeUint32(this.productionBonus), this.producer.exportToWriter(e)
		}, n.prototype.importFromReader = function (e, t) {
			this.noOfItems = e.readUint32(), this.producer.importFromReader(e, t)
		}, n
	}),
define("game/strategy/Lab", ["Game/strategy/helper/ResourceIntake", "Game/strategy/helper/ResourceOutput", "Game/strategy/helper/DelayedAction"], function (e, t, n) {
		var r = function (r, i) {
			this.component = r, this.meta = i, this.inResourcesManager = new e(r, i.inputResources), this.outResourcesManager = new t(r, i.production, i.outputResourcesOrder), this.productionBonus = 0, this.producer = new n(this.meta.interval), this.producer.canStart = this.canStartProduction.bind(this), this.producer.start = this.startProduction.bind(this), this.producer.finished = this.finishedProduction.bind(this)
		};
		return r.prototype.clearContents = function () {
			this.inResourcesManager.reset(), this.outResourcesManager.reset(), this.producer.reset()
		}, r.getMetaDescriptionData = function (e, t, n) {
			var i = e.strategy,
				s = t.getGame().getMeta().resourcesById,
				o = [],
				u = [],
				a = [],
				f = [],
				l = 0;
			for (var c in i.inputResources) o.push("<span class='" + c + "'><b>" + i.inputResources[c].perOutputResource + "</b> " + s[c].nameShort.lcFirst() + "</span>"), a.push("<span class='" + c + "'>" + s[c].nameShort.lcFirst() + ": <b>" + i.inputResources[c].max + "</b></span>"), f.push("<span class='" + c + "'>" + s[c].nameShort.lcFirst() + ": <b>" + i.inputResources[c].bonus + "</b></span>"), l += i.inputResources[c].bonus;
			for (var c in i.production) r.isProducing(t.getGame(), i, c) && (u.push("<span class='" + c + "'><b>" + i.production[c].amount + "</b> " + s[c].nameShort.lcFirst() + "</span>"), a.push("<span class='" + c + "'>" + s[c].nameShort.lcFirst() + ": <b>" + i.production[c].max + "</b></span>"));
			return {
				interval: i.interval,
				inputStr: arrayToHumanStr(o),
				outputStr: arrayToHumanStr(u),
				storageStr: arrayToHumanStr(a),
				bonusStr: arrayToHumanStr(f),
				maxBonus: l
			}
		}, r.isProducing = function (e, t, n) {
			return !t.productionRemoveResearch || !t.productionRemoveResearch[n] ? true : !e.getResearchManager().getResearch(t.productionRemoveResearch[n])
		}, r.prototype.getDescriptionData = function () {
			var e = r.getMetaDescriptionData(this.component.getMeta(), this.component.getFactory(), this);
			return this.producer.updateWithDescriptionData(e), this.inResourcesManager.updateWithDescriptionData(e), this.outResourcesManager.updateWithDescriptionData(e), e
		}, r.prototype.calculateInputTick = function () {
			this.inResourcesManager.takeIn()
		}, r.prototype.calculateOutputTick = function () {
			this.producer.calculate(), this.outResourcesManager.distribute()
		}, r.prototype.canStartProduction = function () {
			for (var e in this.meta.production)
				if (this.outResourcesManager.getResource(e) + this.meta.production[e].amount > this.outResourcesManager.getMax(e)) return false;
			return true
		}, r.prototype.startProduction = function () {
			var e = 1;
			for (var t in this.meta.inputResources) this.inResourcesManager.getResource(t) >= this.meta.inputResources[t].perOutputResource && (this.inResourcesManager.addResource(t, -this.meta.inputResources[t].perOutputResource), e += this.meta.inputResources[t].bonus);
			this.productionBonus = e
		}, r.prototype.finishedProduction = function () {
			for (var e in this.meta.production) r.isProducing(this.component.getFactory().getGame(), this.meta, e) && this.outResourcesManager.addResource(e, this.meta.production[e].amount * this.productionBonus)
		}, r.prototype.toString = function () {
			var e = this.inResourcesManager.toString() + "<br />";
			return e += this.outResourcesManager.toString() + "<br />", e += this.producer.toString() + "<br />", e
		}, r.prototype.exportToWriter = function (e) {
			e.writeUint32(this.productionBonus), this.outResourcesManager.exportToWriter(e), this.inResourcesManager.exportToWriter(e), this.producer.exportToWriter(e)
		}, r.prototype.importFromReader = function (e, t) {
			this.noOfItems = e.readUint32(), this.outResourcesManager.importFromReader(e, t), this.inResourcesManager.importFromReader(e, t), this.producer.importFromReader(e, t)
		}, r
	}),
define("game/strategy/Factory", ["game/strategy/Buyer", "game/strategy/Transport", "game/strategy/Converter", "game/strategy/Seller", "game/strategy/Garbage", "game/strategy/Sorter", "game/strategy/ResearchCenter", "game/strategy/Lab"], function (e, t, n, r, i, s, o, u) {
		var a = "ComponentStrategyFactory",
			f = {
				buyer: e,
				transport: t,
				converter: n,
				seller: r,
				garbage: i,
				sorter: s,
				researchCenter: o,
				lab: u
			};
		return {
			getStrategyClass: function (e) {
				var t = f[e];
				if (!t) throw new Error("Unknown component strategy " + e);
				return t
			},
			getForComponent: function (e) {
				var t = this.getStrategyClass(e.getMeta().strategy.type);
				return new t(e, e.getMeta().strategy)
			},
			getMetaDescriptionData: function (e, t) {
				var n = this.getStrategyClass(e.strategy.type);
				return n.getMetaDescriptionData(e, t)
			}
		}
	}),
	define("game/Component", ["game/strategy/Factory"], function (e) {
		var t = function (t, n, r, i) {
			this.meta = i, this.factory = t, this.x = n, this.y = r, this.strategy = e.getForComponent(this), this.surroundedInputTiles = [], this.surroundedOutputTiles = []
		};
		return t.getMetaDescriptionData = function (n, r, i) {
			var s = e.getMetaDescriptionData(n, r, i);
			return t._addCommonMetaDescriptionData(s, n, r, i), s
		}, t.prototype.getDescriptionData = function () {
			var e = this.strategy.getDescriptionData();
			return t._addCommonMetaDescriptionData(e, this.meta, this.factory, this.strategy), e
		}, t._addCommonMetaDescriptionData = function (e, n, r, i) {
			e.name = n.name, e["is" + n.strategy.type.ucFirst()] = true, e.description = n.description, e.priceStr = "$" + nf(n.price), n.runningCostPerTick && (e.runningCostStr = "$" + nf(t.getMetaRunningCostPerTick(n, r)) + "/tick")
		}, t.getMetaRunningCostPerTick = function (e, t) {
			return e.runningCostPerTick * t.getUpgradesManager().getComponentBonuses(e.applyUpgradesFrom ? e.applyUpgradesFrom : e.id).runningCostPerTickIncrease * t.getUpgradesManager().getComponentBonuses(e.applyUpgradesFrom ? e.applyUpgradesFrom : e.id).runningCostPerTickBonus * t.getGame().getProfitMultiplier()
		}, t.prototype.getRunningCostPerTick = function () {
			return t.getMetaRunningCostPerTick(this.meta, this.factory)
		}, t.prototype._checkForSurroundedInputsOutputs = function (e, t, n) {
			var r = this.factory.getTile(e, t),
				i = r.getInputOutputManager().getOutputsByDirection()[n];
			i && this.surroundedOutputTiles.push({
				tile: i,
				from: r,
				direction: r.getDirection(i),
				oppositeDirection: i.getDirection(r)
			});
			var s = r.getInputOutputManager().getInputsByDirection()[n];
			s && this.surroundedInputTiles.push({
				tile: s,
				from: r,
				direction: s.getDirection(r),
				oppositeDirection: r.getDirection(s)
			})
		}, t.prototype._updateSurroundedTilesCache = function () {
			this.surroundedInputTiles = [], this.surroundedOutputTiles = [];
			for (var e = this.x; e < this.x + this.meta.width; e++) this._checkForSurroundedInputsOutputs(e, this.y, "top");
			for (var t = this.y; t < this.y + this.meta.height; t++) this._checkForSurroundedInputsOutputs(this.x + this.meta.width - 1, t, "right");
			for (e = this.x + this.meta.width - 1; e >= this.x; e--) this._checkForSurroundedInputsOutputs(e, this.y + this.meta.height - 1, "bottom");
			for (t = this.y + this.meta.height - 1; t >= this.y; t--) this._checkForSurroundedInputsOutputs(this.x, t, "left")
		}, t.prototype.outputsInputsChanged = function () {
			this._updateSurroundedTilesCache(), this.getStrategy().clearContents(), this.getStrategy().updateInputsOutputs && this.getStrategy().updateInputsOutputs()
		}, t.prototype.getSurroundedInputTiles = function () {
			return this.surroundedInputTiles
		}, t.prototype.getSurroundedOutputTiles = function () {
			return this.surroundedOutputTiles
		}, t.prototype.calculateInputTick = function (e) {
			this.meta.runningCostPerTick > 0 && (e.runningCosts += this.getRunningCostPerTick())
		}, t.prototype.getFactory = function () {
			return this.factory
		}, t.prototype.getMeta = function () {
			return this.meta
		}, t.prototype.getStrategy = function () {
			return this.strategy
		}, t.prototype.getX = function () {
			return this.x
		}, t.prototype.getY = function () {
			return this.y
		}, t.prototype.getMainTile = function () {
			return this.factory.getTile(this.x, this.y)
		}, t.prototype.exportToWriter = function (e) {
			this.strategy.exportToWriter(e)
		}, t.prototype.importFromReader = function (e, t) {
			this.strategy.importFromReader(e, t)
		}, t
	}),
define("game/Tile", ["game/InputOutputManager", "game/Component"], function (e, t) {
		var n = {
				top: [0, -1],
				right: [1, 0],
				bottom: [0, 1],
				left: [-1, 0],
				top_right: [1, -1],
				top_left: [-1, -1],
				bottom_right: [1, 1],
				bottom_left: [-1, 1]
			},
			r = {
				"-10": "top",
				"-1": "left",
				1: "right",
				10: "bottom"
			},
			i = {
				top: "bottom",
				bottom: "top",
				left: "right",
				right: "left"
			},
			s = function (t, n, r, i, s) {
				this.id = n * s.getMeta().tilesX + t, this.x = t, this.y = n, this.factory = s, this.setTerrain(i), this.setBuildableType(r), this.component = null, this.inputOutputManager = new e(this, function () {
					this.component && this.component.outputsInputsChanged()
				}.bind(this))
			};
		return s.BUILDABLE_NO = "X", s.BUILDABLE_YES = " ", s.BUILDABLE_PARTIAL = "-", s.prototype.getId = function () {
			return this.id
		}, s.prototype.getIdStr = function () {
			return this.x + ":" + this.y
		}, s.prototype.getX = function () {
			return this.x
		}, s.prototype.getY = function () {
			return this.y
		}, s.prototype.setBuildableType = function (e) {
			e != s.BUILDABLE_YES && e != s.BUILDABLE_PARTIAL && (e = s.BUILDABLE_NO), this.buildableType = e
		}, s.prototype.getBuildableType = function () {
			return this.buildableType
		}, s.prototype.isPossibleToBuildOnType = function (e) {
			return this.buildableType == s.BUILDABLE_YES || e.canBuildToPartial && this.buildableType == s.BUILDABLE_PARTIAL
		}, s.prototype.setTerrain = function (e) {
			e || (e = "grass"), this.terrain = e
		}, s.prototype.getTerrain = function () {
			return this.terrain
		}, s.prototype.getInputOutputManager = function () {
			return this.inputOutputManager
		}, s.prototype.getDirection = function (e) {
			return r[String((e.getY() - this.y) * 10 + (e.getX() - this.x))]
		}, s.prototype.getTileInDirection = function (e) {
			return this.factory.getTile(this.x + n[e][0], this.y + n[e][1])
		}, s.prototype.isMainComponentContainer = function () {
			return this.component ? this.component.getX() == this.x && this.component.getY() == this.y : false
		}, s.prototype.getFactory = function () {
			return this.factory
		}, s.prototype.getComponent = function () {
			return this.component
		}, s.prototype.setComponent = function (e) {
			if (e) {
				var n = new t(this.factory, this.x, this.y, e);
				for (var r = 0; r < e.width; r++)
					for (var i = 0; i < e.height; i++) {
						var s = this.factory.getTile(this.x + r, this.y + i);
						s.component = n
					}
			} else this.component = null;
			this.inputOutputManager.reset()
		}, s.prototype.exportToWriter1 = function (e) {
			this.inputOutputManager.exportToWriter(e)
		}, s.prototype.exportToWriter2 = function (e) {
			this.component.exportToWriter(e)
		}, s.prototype.importFromReader1 = function (e, t) {
			this.inputOutputManager.importFromReader(e, t)
		}, s.prototype.importFromReader2 = function (e, t) {
			this.component.importFromReader(e, t)
		}, s
	}),
define("base/EventManager", [], function () {
		var e = "EventManager",
			t = function (e, t) {
				this.handledEvents = e, this.eventTag = t, this.events = {}
			};
		return t.prototype.addListener = function (e, t, n) {
			this.handledEvents[t] || logger.warning(this.eventTag, "This event manager is not configured to handle event: " + t + ". " + e + " tried to listen for it."), this.events[t] || (this.events[t] = {}), this.events[t][e] = n
		}, t.prototype.removeListener = function (e, t) {
			this.events[t] && this.events[t][e] && delete this.events[t][e]
		}, t.prototype.removeListenerForType = function (e) {
			for (var t in this.events)
				for (var n in this.events[t]) n == e && delete this.events[t][n]
		}, t.prototype.invokeEvent = function (e, t, n, r, i, s) {
			if (this.events[e])
				for (var o in this.events[e]) this.events[e][o] && this.events[e][o](t, n, r, i, s)
		}, t
	}),
	define("game/upgrades/strategy/AbstractUpgrade", [], function () {
		return {
			getNextMultiplier: function () {
				return this.meta.levels[this.amount] ? this.meta.levels[this.amount].bonus : 0
			},
			getTotalMultiplier: function () {
				var e = 0,
					t = null;
				for (var n = 0; n < this.amount; n++) t = this.meta.levels[n], t && (e += t.bonus);
				return e
			},
			getMultiplierStrings: function (e) {
				var t = this.getNextMultiplier(),
					n = 1 + this.getTotalMultiplier(),
					r = 0,
					i = 0;
				t > 0 && (r = (n + t) / n - 1, i = t);
				var s = Math.round(r * 1e4) / 100;
				return e ? {
					total: Math.round((n - 1) * 1e4) / 100 + "%",
					next: "<b>" + s + "%</b>"
				} : {
					total: n + "x",
					next: "<b>" + s + "%</b>"
				}
			}
		}
	}),
	define("game/upgrades/strategy/BuyerUpgrade", ["./AbstractUpgrade"], function (e) {
		var t = function (e, t, n) {
			this.meta = e, this.amount = t, this.factory = n
		};
		return t.prototype.updateMap = function (e) {
			var t = this.getTotalMultiplier();
			e.byComponent[this.meta.componentId].runningCostPerTickIncrease += t, e.byComponent[this.meta.componentId].buyAmountBonus += t, e.byComponent[this.meta.componentId].maxStorageBonus += t
		}, t.prototype.getNextMultiplier = e.getNextMultiplier, t.prototype.getTotalMultiplier = e.getTotalMultiplier, t.prototype.getMultiplierStrings = e.getMultiplierStrings, t.prototype.getTitle = function () {
			return "Amount of resources component buys"
		}, t.prototype.getDescription = function () {
			var e = this.factory.getGame().getMeta().componentsById[this.meta.componentId],
				t = this.getMultiplierStrings();
			return "<b>" + e.name + '</b> buys <span class="green">' + t.next + "</span> more resources.<br />" + (this.meta.noRunningCost ? "" : 'Increases running cost by <b class="red">' + t.next + "</b><br />") + "<br />" + "More production per component, but expenses are proportionally the same. More production per component => more resources to sell.<br />" + "<br />" + '<b>Current total buy resources bonus: </b><b class="green">' + t.total + "</b> "
		}, t
	}),
define("game/upgrades/strategy/ConverterUpgrade", ["./AbstractUpgrade"], function (e) {
		var t = function (e, t, n) {
			this.meta = e, this.amount = t, this.factory = n
		};
		return t.prototype.updateMap = function (e) {
			var t = this.getTotalMultiplier();
			e.byComponent[this.meta.componentId].runningCostPerTickIncrease += t, e.byComponent[this.meta.componentId].convertAmountBonus += t, e.byComponent[this.meta.componentId].maxStorageBonus += t
		}, t.prototype.getNextMultiplier = e.getNextMultiplier, t.prototype.getTotalMultiplier = e.getTotalMultiplier, t.prototype.getMultiplierStrings = e.getMultiplierStrings, t.prototype.getTitle = function () {
			return "Amount of resources used and produced amount"
		}, t.prototype.getDescription = function () {
			var e = this.factory.getGame().getMeta().componentsById[this.meta.componentId],
				t = this.getMultiplierStrings();
			return "<b>" + e.name + '</b> uses and produces <b class="green">' + t.next + "</b> more resources.<br />" + (this.meta.noRunningCost ? "" : 'Increases running cost by <b class="red">' + t.next + "</b><br />") + "<br />" + "More production per component, but expenses are proportionally the same. More production per component => more resources to sell.<br />" + "<br />" + '<b>Current total increase: </b><b class="green">' + t.total + "</b> "
		}, t
	}),
define("game/upgrades/strategy/ConverterProduceMoreUpgrade", ["./AbstractUpgrade"], function (e) {
		var t = function (e, t, n) {
			this.meta = e, this.amount = t, this.factory = n
		};
		return t.prototype.updateMap = function (e) {
			var t = this.getTotalMultiplier();
			e.byComponent[this.meta.componentId].runningCostPerTickIncrease += t, e.byComponent[this.meta.componentId].convertProduceMoreBonus += t, e.byComponent[this.meta.componentId].maxStorageBonus += t
		}, t.prototype.getNextMultiplier = e.getNextMultiplier, t.prototype.getTotalMultiplier = e.getTotalMultiplier, t.prototype.getMultiplierStrings = e.getMultiplierStrings, t.prototype.getTitle = function () {
			return "Amount of resources produced"
		}, t.prototype.getDescription = function () {
			var e = this.factory.getGame().getMeta().componentsById[this.meta.componentId],
				t = this.getMultiplierStrings();
			return "<b>" + e.name + '</b> produces <b class="green">' + t.next + "</b> more resources.<br />" + (this.meta.noRunningCost ? "" : 'Increases running cost by <b class="red">' + t.next + "</b><br />") + "<br />" + "More production per component with less raw materials, but expenses are proportionally the same. More production per component => more resources to sell.<br />" + "<br />" + '<b>Current total increase: </b><b class="green">' + t.total + "</b> "
		}, t
	}),
define("game/upgrades/strategy/GarbageUpgrade", ["./AbstractUpgrade"], function (e) {
		var t = function (e, t, n) {
			this.meta = e, this.amount = t, this.factory = n
		};
		return t.prototype.updateMap = function (e) {
			var t = this.getTotalMultiplier();
			e.byComponent[this.meta.componentId].removeAmountBonus += t, e.byComponent[this.meta.componentId].maxStorageBonus += t
		}, t.prototype.getNextMultiplier = e.getNextMultiplier, t.prototype.getTotalMultiplier = e.getTotalMultiplier, t.prototype.getMultiplierStrings = e.getMultiplierStrings, t.prototype.getTitle = function () {
			return "Amount of resources removed"
		}, t.prototype.getDescription = function () {
			var e = this.factory.getGame().getMeta().componentsById[this.meta.componentId],
				t = this.getMultiplierStrings();
			return e.name + " removes " + t.next + " more items<br />" + "<br />" + '<b>Current total bonus: </b><b class="green">' + t.total + "</b> "
		}, t
	}),
	define("game/upgrades/strategy/PackageSize", ["./AbstractUpgrade"], function (e) {
		var t = function (e, t, n) {
			this.meta = e, this.amount = t, this.factory = n
		};
		return t.prototype.updateMap = function (e) {
			var t = this.getTotalMultiplier();
			this.meta.componentId ? e.byComponent[this.meta.componentId].packageSizeBonus += t : e.packageSizeBonus += t
		}, t.prototype.getNextMultiplier = e.getNextMultiplier, t.prototype.getTotalMultiplier = e.getTotalMultiplier, t.prototype.getMultiplierStrings = e.getMultiplierStrings, t.prototype.getTitle = function () {
			return "Package size"
		}, t.prototype.getDescription = function () {
			var e = null;
			this.meta.componentId && (e = this.factory.getGame().getMeta().componentsById[this.meta.componentId]);
			var t = this.getMultiplierStrings();
			return "<b>" + (e ? e.name + " outputs" : "All components output") + '</b> <span class="green">' + t.next + "</span> more resources into single package.<br />" + "<br />" + "Makes conveyors much more effective, as they transport more resources.<br />" + "<br />" + '<b>Current total bonus: </b><b class="green">' + t.total + "</b> "
		}, t
	}),
define("game/upgrades/strategy/ResearchCenterBonusUpgrade", ["./AbstractUpgrade"], function (e) {
		var t = function (e, t, n) {
			this.meta = e, this.amount = t, this.factory = n
		};
		return t.prototype.updateMap = function (e) {
			var t = this.getTotalMultiplier();
			e.byComponent[this.meta.componentId].runningCostPerTickIncrease += t, e.byComponent[this.meta.componentId].researchPaperBonus += t
		}, t.prototype.getNextMultiplier = e.getNextMultiplier, t.prototype.getTotalMultiplier = e.getTotalMultiplier, t.prototype.getMultiplierStrings = e.getMultiplierStrings, t.prototype.getTitle = function () {
			return "Research paper bonus"
		}, t.prototype.getDescription = function () {
			var e = this.factory.getGame().getMeta().componentsById[this.meta.componentId],
				t = this.getMultiplierStrings();
			return "<b>" + e.name + '</b> research paper bonus increased by <b class="green">' + t.next + "</b><br />" + "<br />" + '<b>Current total increase: </b><b class="green">' + t.total + "</b> "
		}, t
	}),
define("game/upgrades/strategy/ResearchCenterMaxStock", ["./AbstractUpgrade"], function (e) {
		var t = function (e, t, n) {
			this.meta = e, this.amount = t, this.factory = n
		};
		return t.prototype.updateMap = function (e) {
			e.byComponent[this.meta.componentId].maxStorageBonus += this.getTotalMultiplier()
		}, t.prototype.getNextMultiplier = e.getNextMultiplier, t.prototype.getTotalMultiplier = e.getTotalMultiplier, t.prototype.getMultiplierStrings = e.getMultiplierStrings, t.prototype.getTitle = function () {
			return "Max stock size"
		}, t.prototype.getDescription = function () {
			var e = this.factory.getGame().getMeta().componentsById[this.meta.componentId],
				t = this.getMultiplierStrings();
			return "<b>" + e.name + '</b> max stock increased by <b class="green">' + t.next + "</b><br />" + "<br /> " + '<b>Current total increase: </b><b class="green">' + t.total + "</b> "
		}, t
	}),
	define("game/upgrades/strategy/RunningCostUpgrade", ["./AbstractUpgrade"], function (e) {
		var t = function (e, t, n) {
			this.meta = e, this.amount = t, this.factory = n
		};
		return t.prototype.updateMap = function (e) {
			e.byComponent[this.meta.componentId].runningCostPerTickBonus -= this.getTotalMultiplier()
		}, t.prototype.getNextMultiplier = e.getNextMultiplier, t.prototype.getTotalMultiplier = e.getTotalMultiplier, t.prototype.getMultiplierStrings = e.getMultiplierStrings, t.prototype.getTitle = function () {
			return "Reduce running costs"
		}, t.prototype.getDescription = function () {
			var e = this.factory.getGame().getMeta().componentsById[this.meta.componentId],
				t = this.getMultiplierStrings(true);
			return "<b>" + e.name + '</b> running costs are reduced by <b class="green">' + t.next + "</b><br />" + "<br />" + '<b>Current total decrease: </b><b class="green">' + t.total + "</b> "
		}, t
	}),
	define("game/upgrades/strategy/SellerSellAmountUpgrade", ["./AbstractUpgrade"], function (e) {
		var t = function (e, t, n) {
			this.meta = e, this.amount = t, this.factory = n
		};
		return t.prototype.updateMap = function (e) {
			var t = this.getTotalMultiplier();
			e.byComponent[this.meta.componentId].runningCostPerTickIncrease += t, e.byComponent[this.meta.componentId].sellAmountBonus += t, e.byComponent[this.meta.componentId].maxStorageBonus += t
		}, t.prototype.getNextMultiplier = e.getNextMultiplier, t.prototype.getTotalMultiplier = e.getTotalMultiplier, t.prototype.getMultiplierStrings = e.getMultiplierStrings, t.prototype.getTitle = function () {
			return "Amount of resources sold"
		}, t.prototype.getDescription = function () {
			var e = this.factory.getGame().getMeta().componentsById[this.meta.componentId],
				t = this.getMultiplierStrings();
			return "<b>" + e.name + '</b> sells <b class="green">' + t.next + "</b> more resources.<br />" + (this.meta.noRunningCost ? "" : 'Increases running cost by <b class="red">' + t.next + "</b><br />") + "<br />" + "More resources sold per tick in average => more money<br />" + "<br />" + '<b>Current total increase: </b><b class="green">' + t.total + "</b> "
		}, t
	}),
define("game/upgrades/strategy/SellerSellPriceUpgrade", ["./AbstractUpgrade"], function (e) {
		var t = function (e, t, n) {
			this.meta = e, this.amount = t, this.factory = n
		};
		return t.prototype.updateMap = function (e) {
			e.byComponent[this.meta.componentId].sellPriceBonus += this.getTotalMultiplier()
		}, t.prototype.getNextMultiplier = e.getNextMultiplier, t.prototype.getTotalMultiplier = e.getTotalMultiplier, t.prototype.getMultiplierStrings = e.getMultiplierStrings, t.prototype.getTitle = function () {
			return "Resources sale price"
		}, t.prototype.getDescription = function () {
			var e = this.factory.getGame().getMeta().componentsById[this.meta.componentId],
				t = this.getMultiplierStrings();
			return "<b>" + e.name + '</b> sells with <b class="green">' + t.next + "</b> higher price. <br />" + "<br />" + '<b>Current total increase: </b><b class="green">' + t.total + "</b> "
		}, t
	}),
	define("game/upgrades/Factory", ["./strategy/BuyerUpgrade", "./strategy/ConverterUpgrade", "./strategy/ConverterProduceMoreUpgrade", "./strategy/GarbageUpgrade", "./strategy/PackageSize", "./strategy/ResearchCenterBonusUpgrade", "./strategy/ResearchCenterMaxStock", "./strategy/RunningCostUpgrade", "./strategy/SellerSellAmountUpgrade", "./strategy/SellerSellPriceUpgrade"], function (e, t, n, r, i, s, o, u, a, f) {
		var l = {
			buyer: e,
			converter: t,
			converterProduceMore: n,
			garbage: r,
			packageSize: i,
			researchCenterBonus: s,
			researchCenterMaxStock: o,
			runningCost: u,
			sellerSellAmount: a,
			sellerSellPrice: f
		};
		return {
			getStrategyClass: function (e) {
				var t = l[e];
				if (!t) throw new Error("Unknown component strategy " + e);
				return t
			},
			getStrategy: function (e, t, n) {
				var r = this.getStrategyClass(e.type);
				return new r(e, t, n)
			}
		}
	}),
	define("game/UpgradesManager", ["./upgrades/Factory"], function (e) {
		var t = function (e) {
			this.factory = e, this.game = e.getGame(), this.upgrades = {}, this.isChanged = true
		};
		return t.prototype.buildMap = function () {
			var e = {
				packageSizeBonus: 0,
				byComponent: {}
			};
			for (var t in this.factory.getGame().getMeta().componentsById) e.byComponent[t] = {
				runningCostPerTickIncrease: 1,
				runningCostPerTickBonus: 1,
				buyAmountBonus: 1,
				maxStorageBonus: 1,
				packageSizeBonus: 0,
				convertAmountBonus: 1,
				convertProduceMoreBonus: 1,
				removeAmountBonus: 1,
				researchPaperBonus: 1,
				sellAmountBonus: 1,
				sellPriceBonus: 1
			};
			var n = this.game.getMeta().upgrades;
			for (var r in n) this.getStrategy(n[r].id).updateMap(e);
			return e
		}, t.prototype.getBonuses = function () {
			return this.isChanged && (this.bonuses = this.buildMap(), this.isChanged = false), this.bonuses
		}, t.prototype.getComponentBonuses = function (e) {
			var t = this.getBonuses();
			return t.byComponent[e]
		}, t.prototype.setUpgrade = function (e, t) {
			this.upgrades[e] = t, this.isChanged = true
		}, t.prototype.addUpgrade = function (e, t) {
			this.setUpgrade(e, this.getUpgrade(e) + t)
		}, t.prototype.getUpgrade = function (e) {
			return this.upgrades[e] ? this.upgrades[e] : 0
		}, t.prototype.getStrategy = function (t) {
			var n = this.game.getMeta().upgradesById[t];
			return e.getStrategy(n, this.getUpgrade(t), this.factory)
		}, t.prototype.getPrice = function (e, t) {
			t === undefined && (t = this.getUpgrade(e));
			var n = this.game.getMeta().upgradesById[e];
			return n.levels[t] ? n.levels[t].price : 0
		}, t.prototype.getSellPrice = function (e) {
			var t = this.game.getMeta().upgradesById[e];
			return this.getUpgrade(e) <= 0 ? 0 : this.getPrice(e, this.getUpgrade(e) - 1) * t.refund
		}, t.prototype.canPurchase = function (e) {
			return this.couldPurchase(e) ? this.game.getMoney() < this.getPrice(e) ? false : this.isVisible(e) ? true : false : false
		}, t.prototype.couldPurchase = function (e) {
			var t = this.game.getMeta().upgradesById[e];
			return this.getUpgrade(e) >= t.levels.length ? false : true
		}, t.prototype.isVisible = function (e) {
			var t = this.game.getMeta().upgradesById[e];
			return !t.requiresResearch || this.game.getResearchManager().getResearch(t.requiresResearch) > 0 ? true : false
		}, t.prototype.canSell = function (e) {
			if (this.getUpgrade(e) > 0) {
				var t = this.game.getMeta().upgradesById[e];
				return t.refund === undefined || t.refund === null ? false : this.isVisible(e) ? true : false
			}
			return false
		}, t.prototype.exportToWriter = function () {
			var e = 0;
			for (var t in this.upgrades) this.upgrades[t] && e++;
			var n = new BinaryArrayWriter;
			n.writeUint16(e);
			for (var t in this.upgrades) this.upgrades[t] > 0 && (n.writeUint16(this.game.getMeta().upgradesById[t].idNum), n.writeUint16(this.upgrades[t]));
			return n
		}, t.prototype.importFromReader = function (e, t) {
			if (e.getLength() == 0) return;
			this.upgrades = {};
			var n = e.readUint16();
			for (var r = 0; r < n; r++) {
				var i = e.readUint16(),
					s = e.readUint16(),
					o = this.game.getMeta().upgradesByIdNum[i];
				o && (this.upgrades[o.id] = s)
			}
			this.isChanged = true
		}, t
	}),
define("game/AreasManager", [], function () {
		var e = function (e) {
			this.factory = e, this.game = e.getGame(), this.boughtAreas = {}
		};
		return e.prototype.setAreaBought = function (e, t) {
			this.boughtAreas[e] = t
		}, e.prototype.getIsAreaBought = function (e) {
			return !!this.boughtAreas[e]
		}, e.prototype.getPrice = function (e) {
			return this.factory.getMeta().areasById[e]
		}, e.prototype.canPurchase = function (e) {
			return this.game.getMoney() < this.getPrice(e) ? false : true
		}, e.prototype.canBuildAt = function (e, t, n, r) {
			for (var i = 0; i < this.factory.getMeta().areas.length; i++) {
				var s = this.factory.getMeta().areas[i];
				for (var o = 0; o < s.locations.length; o++) {
					var u = s.locations[o],
						a = !(u.x >= e + n || u.x + u.width <= e || u.y >= t + r || u.y + u.height <= t);
					if (a && !this.boughtAreas[s.id]) return false
				}
			}
			return true
		}, e.prototype.exportToWriter = function () {
			var e = 0;
			for (var t in this.boughtAreas) e++;
			var n = new BinaryArrayWriter;
			n.writeUint8(e);
			for (var t in this.boughtAreas) n.writeUint8(this.factory.getMeta().areasById[t].idNum);
			return n
		}, e.prototype.importFromReader = function (e, t) {
			if (e.getLength() == 0) return;
			this.boughtAreas = {};
			var n = e.readUint8();
			for (var r = 0; r < n; r++) {
				var i = e.readUint8();
				this.setAreaBought(this.factory.getMeta().areasByIdNum[i].id, true)
			}
		}, e
	}),
define("game/action/BuyComponentAction", [], function () {
		var e = function (e, t) {
			this.tile = e, this.factory = e.getFactory(), this.componentMeta = t
		};
		return e.possibleToBuy = function (e, t) {
			return !t.requiresResearch || e.getGame().getResearchManager().getResearch(t.requiresResearch) > 0 ? true : false
		}, e.prototype.canBuy = function () {
			return this.factory.isPossibleToBuildOnTypeWithSize(this.tile.getX(), this.tile.getY(), this.componentMeta.width, this.componentMeta.height, this.componentMeta) ? this.componentMeta.price > this.factory.getGame().getMoney() ? false : e.possibleToBuy(this.factory, this.componentMeta) ? this.factory.getAreasManager().canBuildAt(this.tile.getX(), this.tile.getY(), this.componentMeta.width, this.componentMeta.height) ? true : false : false : false
		}, e.prototype.buy = function () {
			this.factory.getGame().addMoney(-this.componentMeta.price), this.buyFree()
		}, e.prototype.buyFree = function () {
			this.tile.setComponent(this.componentMeta), this.factory.getEventManager().invokeEvent(FactoryEvent.FACTORY_COMPONENTS_CHANGED, this.tile)
		}, e
	}),
define("game/action/UpdateComponentInputOutputAction", [], function () {
		var e = function (e, t) {
			this.fromTile = e, this.toTile = t, this.factory = this.fromTile.getFactory()
		};
		return e.prototype.canUpdate = function () {
			if (!this.fromTile.getComponent() || !this.toTile.getComponent() || this.fromTile.getComponent() == this.toTile.getComponent() || !this.fromTile.getDirection(this.toTile)) return false;
			var e = this.fromTile.getComponent().getMeta(),
				t = this.toTile.getComponent().getMeta();
			return e.strategy.type != "transport" && t.strategy.type != "transport" ? false : this._isLinkAllowed(this.fromTile, this.toTile, e.allowedOutputs) ? this._isLinkAllowed(this.toTile, this.fromTile, t.allowedInputs) ? this._detectLoop(this.fromTile, this.toTile) ? false : true : false : false
		}, e.prototype._isLinkAllowed = function (e, t, n) {
			var r = e.getDirection(t),
				i = e.getX() - e.getComponent().getX(),
				s = e.getY() - e.getComponent().getY();
			return !n || n[i + ":" + s] || n[i + ":" + s + ":" + r]
		}, e.prototype._detectLoop = function (e, t) {
			var n = function (t, r) {
				if (t.getComponent().getMeta().strategy.type != "transport") return false;
				if (t.getId() == e.getId() && r > 0) return true;
				var i = t.getInputOutputManager().getOutputsList();
				for (var s = 0; s < i.length; s++)
					if (n(i[s], r + 1)) return true
			};
			return n(t, 0)
		}, e.prototype.update = function () {
			this.fromTile.getInputOutputManager().setOutput(this.fromTile.getDirection(this.toTile)), this.factory.getEventManager().invokeEvent(FactoryEvent.FACTORY_COMPONENTS_CHANGED, this.tile)
		}, e
	}),
define("game/FactorySetup", ["game/action/BuyComponentAction", "game/action/UpdateComponentInputOutputAction"], function (e, t) {
		var n = function (e) {
			this.factory = e, this.factoryMeta = e.getMeta(), this.meta = e.getGame().getMeta()
		};
		return n.prototype.init = function () {
			return this._initComponents(), this._initTransportLines(), this
		}, n.prototype._initComponents = function () {
			if (!this.factoryMeta.startComponents) return;
			for (var t in this.factoryMeta.startComponents) {
				var n = this.factoryMeta.startComponents[t],
					r = this.factory.getTile(n.x, n.y),
					i = new e(r, this.meta.componentsById[n.id]);
				i.buyFree()
			}
			return this
		}, n.prototype._initTransportLines = function () {
			if (!this.factoryMeta.transportLineConnections) return;
			for (var e in this.factoryMeta.transportLineConnections) {
				var n = this.factoryMeta.transportLineConnections[e],
					r = this.factory.getTile(n.fromX, n.fromY),
					i = this.factory.getTile(n.toX, n.toY),
					s = new t(r, i);
				s.canUpdate() && s.update()
			}
			return this
		}, n
	}),
define("game/Factory", ["game/Tile", "base/EventManager", "game/UpgradesManager", "game/AreasManager", "game/FactorySetup"], function (e, t, n, r, i) {
		var s = "Factory",
			o = function (i, o) {
				this.game = o, this.isPaused = false, this.isBought = false, this.meta = i, this.em = new t(FactoryEvent, s), this.upgardesManager = new n(this), this.tiles = [];
				for (var u = 0; u < this.meta.tilesY; u++)
					for (var a = 0; a < this.meta.tilesX; a++) {
						var f = this.meta.terrains[i.terrainMap[u * this.meta.tilesX + a]],
							l = i.buildMap[u * this.meta.tilesX + a];
						this.tiles[u * this.meta.tilesX + a] = new e(a, u, l, f, this)
					}
				this.areasManager = new r(this)
			};
		return o.prototype.reset = function () {
			for (var e = 0; e < this.tiles.length; e++) this.tiles[e].setComponent(null);
			var t = new i(this);
			t.init()
		}, o.prototype.getEventManager = function () {
			return this.em
		}, o.prototype.getUpgradesManager = function () {
			return this.upgardesManager
		}, o.prototype.getAreasManager = function () {
			return this.areasManager
		}, o.prototype.getMeta = function () {
			return this.meta
		}, o.prototype.setIsBought = function (e) {
			this.isBought = e
		}, o.prototype.getIsBought = function () {
			return this.isBought
		}, o.prototype.getGame = function () {
			return this.game
		}, o.prototype.getTiles = function () {
			return this.tiles
		}, o.prototype.getComponents = function () {
			return this.components
		}, o.prototype.getTile = function (e, t) {
			return e < 0 || e >= this.meta.tilesX || t < 0 || t >= this.meta.tilesY ? null : this.tiles[t * this.meta.tilesX + e]
		}, o.prototype.getIsPaused = function () {
			return this.isPaused
		}, o.prototype.setIsPaused = function (e) {
			this.isPaused = e
		}, o.prototype.isOnMap = function (e, t, n, r) {
			return e >= 0 && t >= 0 && e + n <= this.meta.tilesX && t + r <= this.meta.tilesY
		}, o.prototype.isPossibleToBuildOnTypeWithSize = function (e, t, n, r, i) {
			n || (n = 1), r || (r = 1);
			if (!this.isOnMap(e, t, n, r)) return false;
			for (var s = 0; s < n; s++)
				for (var o = 0; o < r; o++) {
					var u = this.getTile(e + s, t + o);
					if (!u || !u.isPossibleToBuildOnType(i) || u.getComponent()) return false
				}
			return true
		}, o.prototype.exportToWriter = function () {
			var e = new BinaryArrayWriter;
			e.writeWriter(this.upgardesManager.exportToWriter()), e.writeWriter(this.areasManager.exportToWriter()), e.writeUint8(this.isPaused ? 1 : 0), e.writeUint8(this.isBought ? 1 : 0), e.writeUint8(this.meta.tilesX), e.writeUint8(this.meta.tilesY);
			var t = [];
			e.writeBooleansArrayFunc(this.tiles, function (e) {
				return e.isMainComponentContainer() ? (t.push(e), true) : false
			});
			for (var n = 0; n < t.length; n++) e.writeUint8(t[n].getComponent().getMeta().idNum);
			for (var n = 0; n < t.length; n++) t[n].exportToWriter1(e);
			for (var n = 0; n < t.length; n++) t[n].exportToWriter2(e);
			return e
		}, o.prototype.importFromReader = function (e, t) {
			this.upgardesManager.importFromReader(e.readReader(), t), this.areasManager.importFromReader(e.readReader(), t), this.isPaused = e.readUint8() ? true : false, this.isBought = e.readUint8() ? true : false;
			var n = e.readUint8(),
				r = e.readUint8();
			for (var i = 0; i < this.tiles.length; i++) this.tiles[i].setComponent(null);
			var s = [];
			e.readBooleanArrayFunc(n * r, function (e, t) {
				t && s.push(this.tiles[Math.floor(e / n) * this.meta.tilesX + e % n])
			}.bind(this));
			for (var i = 0; i < s.length; i++) s[i].setComponent(this.getGame().getMeta().componentsByIdNum[e.readUint8()]);
			for (var i = 0; i < s.length; i++) s[i].importFromReader1(e, t);
			for (var i = 0; i < s.length; i++) s[i].importFromReader2(e, t);
			this.em.invokeEvent(FactoryEvent.FACTORY_COMPONENTS_CHANGED)
		}, o
	}),
define("game/ResearchManager", [], function () {
		var e = function (e) {
			this.game = e, this.research = {}
		};
		return e.prototype.setResearch = function (e, t) {
			this.research[e] || (this.research[e] = 0), this.research[e] = t
		}, e.prototype.addResearch = function (e, t) {
			this.setResearch(e, this.getResearch(e) + t)
		}, e.prototype.getResearch = function (e) {
			return this.research[e] ? this.research[e] : 0
		}, e.prototype.getPrice = function (e) {
			var t = this.game.getMeta().researchById[e],
				n = 0;
			t.price && (n = t.price);
			for (var r = 0, i = this.getResearch(t.id); r < i; r++) n *= t.priceIncrease;
			return n
		}, e.prototype.getPriceResearchPoints = function (e) {
			var t = this.game.getMeta().researchById[e],
				n = 0;
			t.priceResearchPoints && (n = t.priceResearchPoints);
			for (var r = 0, i = this.getResearch(t.id); r < i; r++) n *= t.priceIncrease;
			return n
		}, e.prototype.canPurchase = function (e) {
			return this.couldPurchase(e) ? this.game.getMoney() < this.getPrice(e) ? false : this.game.getResearchPoints() < this.getPriceResearchPoints(e) ? false : this.isVisible(e) ? true : false : false
		}, e.prototype.couldPurchase = function (e) {
			var t = this.game.getMeta().researchById[e];
			return this.getResearch(e) >= t.max ? false : true
		}, e.prototype.isVisible = function (e) {
			var t = this.game.getMeta().researchById[e];
			return !t.requiresResearch || this.getResearch(t.requiresResearch) > 0 ? true : false
		}, e.prototype.exportToWriter = function () {
			var e = new BinaryArrayWriter,
				t = new BinaryArrayWriter;
			return t.writeUint16(this.game.getMeta().researchByIdNum.length), t.writeBooleansArrayFunc(this.game.getMeta().researchByIdNum, function (t) {
				return t && this.research[t.id] > 0 ? (this.research[t.id] > 1 && (e.writeUint16(t.idNum), e.writeUint16(this.research[t.id])), true) : false
			}.bind(this)), t.writeWriter(e), t
		}, e.prototype.importFromReader = function (e, t) {
			if (e.getLength() == 0) return;
			this.research = {};
			var n = e.readUint16();
			e.readBooleanArrayFunc(n, function (e, t) {
				if (t) {
					var n = this.game.getMeta().researchByIdNum[e];
					n && this.setResearch(n.id, 1)
				}
			}.bind(this));
			var r = e.readReader();
			while (r.getOffset() < r.getLength()) {
				var i = r.readUint16(),
					s = r.readUint16(),
					o = this.game.getMeta().researchByIdNum[i];
				o && this.setResearch(o.id, s)
			}
		}, e
	}),
define("game/AchievementsManager", [], function () {
		var e = function (e) {
			this.game = e, this.achievements = {}, this.testers = this.getTesterImplementations(), this.bonuses = this.getBonusImplementations()
		};
		return e.prototype._setAchieved = function (e, t) {
			this.achievements[e] = t
		}, e.prototype.setAchieved = function (e, t) {
			this._setAchieved(e, t), t && this.game.getEventManager().invokeEvent(GameEvent.ACHIEVEMENT_RECEIVED, e)
		}, e.prototype.getAchievement = function (e) {
			return this.achievements[e]
		}, e.prototype.getTester = function (e) {
			return this.testers[e.type].test(e)
		}, e.prototype.isVisible = function (e) {
			var t = this.game.getMeta().achievementsById[e];
			return t.requiresAchievement && !this.getAchievement(t.requiresAchievement) ? false : true
		}, e.prototype.test = function (e) {
			var t = true,
				n;
			for (var r = 0; r < e.tests.length; r++) n = e.tests[r], this.testers[n.type].test(n) || (t = false);
			return t
		}, e.prototype.testAll = function () {
			var e = this.game.getMeta().achievements,
				t;
			for (var n = 0; n < e.length; n++) {
				t = e[n];
				if (this.getAchievement(t.id)) continue;
				this.test(t) && (this.setAchieved(t.id, true), t.bonus && this.bonuses[t.bonus.type].invoke(t.bonus))
			}
		}, e.prototype.getTesterDescriptionText = function (e) {
			var t = this.game.getMeta().achievementsById[e];
			if (!t) return "";
			var n = [];
			for (var r = 0; r < t.tests.length; r++) {
				var i = t.tests[r];
				n.push(this.testers[i.type].getRequirementsInfoText(i))
			}
			return n
		}, e.prototype.getBonusDescriptionText = function (e) {
			var t = this.game.getMeta().achievementsById[e];
			if (!t) return "";
			if (!t.bonus) return;
			return this.bonuses[t.bonus.type].getInfoText(t.bonus)
		}, e.prototype.getTesterImplementations = function () {
			var e = this;
			return {
				amountOfMoney: {
					getRequirementsInfoText: function (e) {
						return 'Have more money than <span class="money">$' + nf(e.amount) + "</span>"
					},
					test: function (t) {
						return e.game.getMoney() > t.amount
					}
				},
				avgMoneyIncome: {
					getRequirementsInfoText: function (e) {
						return 'Have avg income greater than <span class="money">$' + nf(e.amount) + "</span>"
					},
					test: function (t) {
						return e.game.getStatistics().getAvgProfit() > t.amount
					}
				},
				researched: {
					getRequirementsInfoText: function (t) {
						var n = e.game.getMeta().researchById[t.researchId];
						return "Research " + n.name.lcFirst() + ""
					},
					test: function (t) {
						return e.game.getResearchManager().getResearch(t.researchId) > 0
					}
				}
			}
		}, e.prototype.getBonusImplementations = function () {
			var e = this;
			return {
				money: {
					getInfoText: function (e) {
						return '<span class="money">+$' + nf(e.amount) + "</span>"
					},
					invoke: function (t) {
						e.game.addMoney(t.amount)
					}
				},
				custom: {
					getInfoText: function (e) {
						return e.description
					},
					invoke: function (e) {}
				}
			}
		}, e.prototype.exportToWriter = function () {
			var e = new BinaryArrayWriter;
			return e.writeUint16(this.game.getMeta().achievementsByIdNum.length), e.writeBooleansArrayFunc(this.game.getMeta().achievementsByIdNum, function (e) {
				return e && this.getAchievement(e.id)
			}.bind(this)), e
		}, e.prototype.importFromReader = function (e, t) {
			if (e.getLength() == 0) return;
			var n = e.readUint16();
			this.achievements = {}, e.readBooleanArrayFunc(n, function (e, t) {
				if (t) {
					var n = this.game.getMeta().achievementsByIdNum[e];
					n && this._setAchieved(n.id, true)
				}
			}.bind(this))
		}, e
	}),
define("game/calculator/TransportCalculator", [], function () {
		var e = function (e) {
			this.factory = e, this.endTiles = [], this.doneIndex = [], this.queue = [], this.queueChecked = 0
		};
		return e.prototype.calculate = function () {
			this.doneIndex.length = 0, this.queue.length = 0, this.queueChecked = 0;
			for (var e in this.endTiles) this.queue.push(this.endTiles[e]), this.log(this.endTiles[e].getIdStr() + " added to queue as end tile");
			while (this.queue.length > this.queueChecked) this.step(this.queue[this.queueChecked]), this.queueChecked++
		}, e.prototype.log = function (e) {}, e.prototype.step = function (e) {
			if (this.doneIndex[e.getId()]) return;
			var t = e.getInputOutputManager().getOutputsList();
			if (t.length > 1) {
				var n = 0;
				for (var r = 0; r < t.length; r++) this.doneIndex[t[r].getId()] && n++;
				if (t.length != n) {
					this.log(e.getIdStr() + " skipped, not all outputs calculated!");
					return
				}
			}
			this.doneIndex[e.getId()] = true, this.log("Calculate " + e.getIdStr()), e.getComponent().getStrategy().calculateTransport && e.getComponent().getStrategy().calculateTransport();
			var i = e.getInputOutputManager().getInputsList();
			for (var r = 0; r < i.length; r++) this.queue.push(i[r]), this.log(i[r].getIdStr() + " added to queue")
		}, e.prototype.buildCaches = function () {
			this.endTiles = [];
			var e = this.factory.getTiles();
			for (var t in e) {
				if (!e[t].getComponent()) continue;
				(e[t].getInputOutputManager().getOutputsList().length == 0 || e[t].getComponent().getMeta().strategy.type != "transport") && this.endTiles.push(e[t])
			}
		}, e
	}),
define("game/calculator/FactoryCalculator", ["game/calculator/TransportCalculator"], function (e) {
		var t = "FactoryCalculator",
			n = function (t) {
				this.factory = t, this.transportCalculator = new e(this.factory), this.components = [], this.strategies = {}, this.cachesOk = false
			};
		return n.prototype.calculate = function () {
			this.cachesOk || this.buildCaches();
			var e = {
				runningCosts: 0,
				resourceCosts: 0,
				resourceSales: 0,
				researchProduction: 0,
				profit: 0
			};
			if (!this.factory.getIsPaused()) {
				for (var t = 0; t < this.components.length; t++) this.components[t].calculateInputTick(e), this.components[t].getStrategy().calculateInputTick && this.components[t].getStrategy().calculateInputTick(e);
				this.transportCalculator.calculate();
				for (var t = 0; t < this.components.length; t++) this.components[t].getStrategy().calculateOutputTick && this.components[t].getStrategy().calculateOutputTick(e);
				this.factory.getEventManager().invokeEvent(FactoryEvent.FACTORY_TICK, e)
			} else e.isPaused = true;
			return e.profit = e.resourceSales - e.resourceCosts - e.runningCosts, e
		}, n.prototype.buildCaches = function () {
			this.cachesOk = true, this.transportCalculator.buildCaches(), this.components = [];
			var e = this.factory.getTiles();
			for (var t = 0; t < e.length; t++) {
				if (!e[t].isMainComponentContainer()) continue;
				this.components.push(e[t].getComponent())
			}
		}, n.prototype.setup = function () {
			this.factory.getEventManager().addListener(t, FactoryEvent.FACTORY_COMPONENTS_CHANGED, function () {
				this.cachesOk = false
			}.bind(this))
		}, n.prototype.destroy = function () {
			this.factory.getEventManager().removeListenerForType(t)
		}, n
	}),
define("game/calculator/Calculator", ["game/calculator/FactoryCalculator"], function (e) {
		var t = "calculator",
			n = function (t) {
				this.game = t, this.factoryCalculators = {};
				for (var n in this.game.getMeta().factoriesById) this.factoryCalculators[n] = new e(this.game.getFactory(n))
			};
		return n.prototype.init = function () {
			for (var e in this.factoryCalculators) this.factoryCalculators[e].setup();
			return this
		}, n.prototype.destroy = function () {
			for (var e in this.factoryCalculators) this.factoryCalculators[e].destroy()
		}, n.prototype.calculate = function () {
			var e = (new Date).getTime(),
				t = {
					profit: 0,
					researchProduction: 0,
					factory_results: {}
				};
			for (var n in this.factoryCalculators) {
				var r = this.factoryCalculators[n].calculate();
				t.profit += r.profit, t.researchProduction += r.researchProduction, t.factory_results[n] = r
			}
			return this.game.addMoney(t.profit), this.game.addResearchPoints(t.researchProduction), t
		}, n
	}),
define("game/statistics/StatisticsCollector", [], function () {
		var e = "Statistics",
			t = function (e) {
				this.config = e, this.reset()
			};
		return t.prototype.getData = function () {
			return this.data
		}, t.prototype._buildDataStructure = function (e) {
			var t = {
				variables: {},
				sampleCounter: 0
			};
			for (var n = 0; n < this.config.fields.length; n++) t.variables[this.config.fields[n]] = {
				sum: 0,
				values: [],
				sample: null
			};
			return e.child && (t.addToChildCounter = 0, t.child = this._buildDataStructure(e.child)), t
		}, t.prototype.reset = function () {
			this.data = this._buildDataStructure(this.config)
		}, t.prototype.handleInput = function (e) {
			this._handleCollector(this.config, this.data, e)
		}, t.prototype._handleCollector = function (e, t, n) {
			t.sampleCounter++;
			var r = {};
			for (var i = 0; i < e.fields.length; i++) {
				var s = e.fields[i],
					o = t.variables[s];
				o.sum += n[s], o.values.length >= e.max_values_length && (o.sum -= o.values.shift()), o.values.push(n[s]);
				var u = o.sum / o.values.length;
				t.sampleCounter >= e.sample_interval && (o.sample = u), r[s] = u
			}
			t.sampleCounter >= e.sample_interval && (t.sampleCounter = 0), e.child && e.add_to_child_interval && (t.addToChildCounter++, t.addToChildCounter >= e.add_to_child_interval && (t.addToChildCounter = 0, this._handleCollector(e.child, t.child, r)))
		}, t
	}),
define("game/statistics/Statistics", ["game/statistics/StatisticsCollector"], function (e) {
		var t = "Statistics",
			n = function (t) {
				this.game = t, this.gameCollector = new e({
					max_values_length: 80,
					sample_interval: 10,
					fields: ["profit", "researchProduction"]
				}), this.factoryCollectors = {}, this.game.getMeta().factories.map(function (t) {
					this.factoryCollectors[t.id] = new e({
						max_values_length: 80,
						sample_interval: 10,
						fields: ["profit", "researchProduction"]
					})
				}.bind(this))
			};
		return n.prototype.init = function () {
			return this.game.getEventManager().addListener(t, GameEvent.GAME_TICK, function (e) {
				var t = {
					profit: e.profit,
					researchProduction: e.researchProduction
				};
				this.gameCollector.handleInput(t);
				var n = this.game.getMeta().factories;
				for (var r = 0; r < n.length; r++) {
					var i = e.factory_results[n[r].id];
					if (i.isPaused == 1) continue;
					t = {
						profit: i.profit,
						researchProduction: i.researchProduction
					}, this.factoryCollectors[n[r].id].handleInput(t)
				}
			}.bind(this)), this
		}, n.prototype.destroy = function () {
			this.game.getEventManager().removeListenerForType(t)
		}, n.prototype.reset = function () {
			this.gameCollector.reset();
			for (var e in this.factoryCollectors) this.factoryCollectors[e].reset()
		}, n.prototype.getAvgProfit = function () {
			var e = this.gameCollector.getData();
			return e.variables.profit.sample
		}, n.prototype.getAvgResearchPointsProduction = function () {
			var e = this.gameCollector.getData();
			return e.variables.researchProduction.sample
		}, n.prototype.getFactoryAvgProfit = function (e) {
			var t = this.factoryCollectors[e].getData();
			return t.variables.profit.sample
		}, n.prototype.getFactoryAvgResearchPointsProduction = function (e) {
			var t = this.factoryCollectors[e].getData();
			return t.variables.researchProduction.sample
		}, n.prototype.exportToWriter = function () {
			var e = new BinaryArrayWriter;
			return e
		}, n.prototype.importFromReader = function (e, t) {}, n
	}),
define("base/Benchmarker", [], function () {
		var e = function (e) {
			this.name = e, this.timeSpent = 0, this.count = 0, this.weightSum = 0, this.lastStartTime = null, this.firstStartTime = null, this.interval = null, this.intervalValue = 2e3
		};
		return e.prototype.init = function () {
			this.firstStartTime = (new Date).getTime(), this.interval = setInterval(function () {
				var e = (new Date).getTime(),
					t = e - this.firstStartTime;
				logger.info("Bench:" + this.name, "AVG: " + this.timeSpent + "ms / " + t + "ms (Runs: " + this.weightSum + ", Avg run time: " + Math.round(this.timeSpent / this.weightSum * 10) / 10 + "ms) CPU time spent: " + Math.round(this.timeSpent * 100 / t * 100) / 100 + "%"), this.timeSpent = 0, this.count = 0, this.weightSum = 0, this.firstStartTime = (new Date).getTime()
			}.bind(this), this.intervalValue)
		}, e.prototype.destroy = function () {
			this.interval && clearInterval(this.interval)
		}, e.prototype.start = function () {
			this.lastStartTime = (new Date).getTime()
		}, e.prototype.stop = function (e) {
			this.timeSpent += (new Date).getTime() - this.lastStartTime, this.count++, this.weightSum += e
		}, e
	}),
define("game/Ticker", ["../base/Benchmarker"], function (e) {
		var t = "Ticker",
			n = 5,
			r = 15e3,
			i = function (t, n) {
				this.game = t, this.confirmedTimestamp = n, this.ticks = 0, this.bonusTicks = 0, this.timeTravelTickets = 1, this.focused = true, this.isPlaying = false, this.isFastActive = false, this.interval = null, this.noOfTicks = 0, this.purchaseBonusTicks = 0, this.lastSaveTimestamp = null, this.benchmarker = new e(this.game.getMeta().id), this.backgroundModeTimeout = null, this.actualTicksPerSec = {
					ticks: 0,
					second: 0,
					actual: 0
				}
			};
		return i.prototype.init = function () {
			return this.start(), this.game.getEventManager().addListener(t, GameEvent.FOCUS, function () {
				this.disableBackgroundMode()
			}.bind(this)), this.game.getEventManager().addListener(t, GameEvent.BLUR, function () {
				this.startBackgroundModeTimer()
			}.bind(this)), this.game.getEventManager().addListener(t, GameEvent.RESEARCH_BOUGHT, function () {
				this.updateInterval()
			}.bind(this)), logger.info(t, "Ticker initialized for game " + this.game.getMeta().id), this.benchmarker.init(), this
		}, i.prototype.startBackgroundModeTimer = function () {
			this.backgroundModeTimeout && (clearTimeout(this.backgroundModeTimeout), this.backgroundModeTimeout = null), this.backgroundModeTimeout = setTimeout(function () {
				var e = this.focused != 0;
				this.focused = false, e && this.updateInterval(), this.game.getEventManager().invokeEvent(GameEvent.BACKGROUND_MODE_ACTIVATED)
			}.bind(this), r)
		}, i.prototype.disableBackgroundMode = function () {
			this.backgroundModeTimeout && (clearTimeout(this.backgroundModeTimeout), this.backgroundModeTimeout = null);
			var e = this.focused != 1;
			this.focused = true, e && this.updateInterval(), this.game.getEventManager().invokeEvent(GameEvent.BACKGROUND_MODE_DISABLED)
		}, i.prototype.destroy = function () {
			this.stop(), this.game.getEventManager().removeListenerForType(t), this.benchmarker.destroy()
		}, i.prototype.getBonusTicks = function () {
			return this.bonusTicks
		}, i.prototype.addBonusTicks = function (e) {
			this.bonusTicks = Math.round(this.bonusTicks + e), this.game.getEventManager().invokeEvent(GameEvent.BONUS_TICKS_UPDATED)
		}, i.prototype.setBonusTicks = function (e) {
			this.bonusTicks = e, this.game.getEventManager().invokeEvent(GameEvent.BONUS_TICKS_UPDATED)
		}, i.prototype.setPurchaseBonusTicks = function (e) {
			this.purchaseBonusTicks = e, this.updateInterval()
		}, i.prototype.getTimeTravelTickets = function () {
			return this.timeTravelTickets
		}, i.prototype.addTimeTravelTickets = function (e) {
			this.timeTravelTickets = Math.round(this.timeTravelTickets + e), this.game.getEventManager().invokeEvent(GameEvent.TIME_TRAVEL_TICKETS_UPDATED)
		}, i.prototype.setTimeTravelTickets = function (e) {
			this.timeTravelTickets = e, this.game.getEventManager().invokeEvent(GameEvent.TIME_TRAVEL_TICKETS_UPDATED)
		}, i.prototype.getLastSaveTimestamp = function () {
			return this.lastSaveTimestamp
		}, i.prototype.getIsPlaying = function () {
			return this.isPlaying
		}, i.prototype.getIsFastActive = function () {
			return this.isFastActive
		}, i.prototype.getIsFocused = function () {
			return this.focused
		}, i.prototype.getNoOfTicks = function () {
			return this.noOfTicks
		}, i.prototype.addNoOfTicks = function (e) {
			this.noOfTicks += e
		}, i.prototype.getNormalTicksPerSec = function () {
			var e = this.game.getResearchManager().getResearch("chronometer");
			return 4 + e + this.purchaseBonusTicks
		}, i.prototype.getTicksPerSec = function () {
			var e = this.getNormalTicksPerSec();
			return this.isFastActive && (e = 200), e
		}, i.prototype.getActualTicksPerSec = function () {
			return this.actualTicksPerSec.actual
		}, i.prototype.getTickData = function () {
			var e = 1,
				t = this.getTicksPerSec();
			return this.focused || (e = t, t = 1), {
				runs: e,
				ticksPerSec: t
			}
		}, i.prototype.updateInterval = function () {
			this.interval && (clearInterval(this.interval), this.interval = null);
			if (!this.isPlaying) return;
			var e = this.getTickData();
			this.interval = setInterval(function () {
				this.benchmarker.start();
				for (var t = 0; t < e.runs; t++) this.tick();
				this.benchmarker.stop(e.runs)
			}.bind(this), Math.round(1e3 / e.ticksPerSec)), this.game.getEventManager().invokeEvent(GameEvent.TICKS_STARTED)
		}, i.prototype.start = function () {
			this.isPlaying = true, this.updateInterval()
		}, i.prototype.stop = function () {
			this.isPlaying = false, this.isFastActive = false, this.interval && (clearInterval(this.interval), this.interval = null), this.game.getEventManager().invokeEvent(GameEvent.TICKS_STOPPED)
		}, i.prototype.startFast = function () {
			this.bonusTicks > 0 && (this.isPlaying = true, this.isFastActive = true, this.updateInterval())
		}, i.prototype.stopFast = function () {
			this.isFastActive = false, this.updateInterval()
		}, i.prototype.calculateOfflineGains = function () {
			var e = this.game.getMeta();
			if (!this.lastSaveTimestamp || !e.maxBonusTicks) return 0;
			var t = (this.confirmedTimestamp.getConfirmedNow() - this.lastSaveTimestamp) * this.getNormalTicksPerSec(),
				n = Math.round(t / e.offlineSlower),
				r = e.maxBonusTicks * this.getNormalTicksPerSec();
			return n > r && (n = r), n < e.minBonusTicks && (n = 0), n
		}, i.prototype.addOfflineGains = function () {
			var e = this.calculateOfflineGains();
			logger.info(t, "Bonus ticks gained: " + e), this.addBonusTicks(e)
		}, i.prototype.tick = function () {
			var e = this.game.getCalculator().calculate();
			this.game.getEventManager().invokeEvent(GameEvent.GAME_TICK, e), this.noOfTicks++, this.noOfTicks % n === 0 && this.game.getAchievementsManager().testAll(), this.isFastActive && (this.addBonusTicks(-1), this.bonusTicks <= 0 && (this.isFastActive = false, this.updateInterval()));
			var t = Math.round(Date.now() / 1e3);
			this.actualTicksPerSec.ticks++, t != this.actualTicksPerSec.second && (this.actualTicksPerSec.actual = this.actualTicksPerSec.ticks, this.actualTicksPerSec.ticks = 0, this.actualTicksPerSec.second = t)
		}, i.prototype.exportToWriter = function () {
			var e = new BinaryArrayWriter;
			return e.writeUint32(this.bonusTicks), e.writeUint16(this.timeTravelTickets), e.writeUint32(this.noOfTicks), e.writeUint32(this.confirmedTimestamp.getConfirmedNow()), e
		}, i.prototype.importFromReader = function (e, t) {
			this.setBonusTicks(e.readUint32()), t >= 5 && (this.timeTravelTickets = e.readUint16()), this.noOfTicks = e.readUint32(), this.lastSaveTimestamp = e.readUint32()
		}, i
	}),
define("game/Game", ["game/Factory", "base/EventManager", "game/ResearchManager", "game/AchievementsManager", "game/calculator/Calculator", "game/statistics/Statistics", "game/Ticker"], function (e, t, n, r, i, s, o) {
		var u = "Game",
			a = function (a, f) {
				this.meta = a, this.confirmedTimestamp = f, this.money = a.startingMoney, this.researchPoints = a.startingResearchPoints, this.em = new t(GameEvent, u), this.factories = {};
				for (var l in a.factories) {
					var c = a.factories[l];
					this.factories[c.id] = new e(c, this)
				}
				this.researchManager = new n(this), this.achievementsManager = new r(this), this.calculator = new i(this), this.statistics = new s(this), this.ticker = new o(this, this.confirmedTimestamp), this.profitMultiplier = 1, this.researchProductionMultiplier = 1, this.isPremium = false
			};
		return a.prototype.init = function () {
			return this.calculator.init(), this.statistics.init(), this.ticker.init(), this
		}, a.prototype.destroy = function () {
			this.calculator.destroy(), this.statistics.destroy(), this.ticker.destroy()
		}, a.prototype.getMeta = function () {
			return this.meta
		}, a.prototype.getEventManager = function () {
			return this.em
		}, a.prototype.getResearchManager = function () {
			return this.researchManager
		}, a.prototype.getAchievementsManager = function () {
			return this.achievementsManager
		}, a.prototype.getCalculator = function () {
			return this.calculator
		}, a.prototype.getStatistics = function () {
			return this.statistics
		}, a.prototype.getTicker = function () {
			return this.ticker
		}, a.prototype.getFactory = function (e) {
			return this.factories[e]
		}, a.prototype.setProfitMultiplier = function (e) {
			this.profitMultiplier = e
		}, a.prototype.getProfitMultiplier = function () {
			return this.profitMultiplier
		}, a.prototype.setResearchProductionMultiplier = function (e) {
			this.researchProductionMultiplier = e
		}, a.prototype.getResearchProductionMultiplier = function () {
			return this.researchProductionMultiplier
		}, a.prototype.setIsPremium = function (e) {
			this.isPremium = e
		}, a.prototype.getIsPremium = function () {
			return this.isPremium
		}, a.prototype.getMoney = function () {
			return this.money
		}, a.prototype.setMoney = function (e) {
			isNaN(Number(e)) && (e = 0), e < this.meta.minNegativeMoney && (e = this.meta.minNegativeMoney), this.money = e, this.em.invokeEvent(GameEvent.MONEY_UPDATED, this.money)
		}, a.prototype.addMoney = function (e) {
			isNaN(Number(e)) && (e = 0), this.setMoney(this.money + e)
		}, a.prototype.getResearchPoints = function () {
			return this.researchPoints
		}, a.prototype.setResearchPoints = function (e) {
			isNaN(Number(e)) && (e = 0), this.researchPoints = isNaN(e) ? 0 : e, this.em.invokeEvent(GameEvent.RESEARCH_POINTS_UPDATED, this.researchPoints)
		}, a.prototype.addResearchPoints = function (e) {
			isNaN(Number(e)) && (e = 0), this.setResearchPoints(this.researchPoints + e)
		}, a.prototype.exportToWriter = function () {
			var e = new BinaryArrayWriter,
				t = 7;
			e.writeUint16(t), e.writeFloat64(this.money), e.writeFloat64(this.researchPoints), e.writeInt8(this.isPremium ? 1 : 0), e.writeWriter(this.researchManager.exportToWriter()), e.writeWriter(this.achievementsManager.exportToWriter()), e.writeWriter(this.statistics.exportToWriter()), e.writeWriter(this.ticker.exportToWriter()), e.writeUint8(this.meta.factories.length);
			for (var n in this.factories) e.writeUint8(this.factories[n].getMeta().idNum), e.writeWriter(this.factories[n].exportToWriter());
			return e
		}, a.prototype.importFromReader = function (e) {
			var t = e.readUint16();
			this.setMoney(e.readFloat64()), this.setResearchPoints(e.readFloat64()), t >= 7 ? this.setIsPremium(e.readInt8() ? true : false) : this.setIsPremium(false);
			var n = e.readReader();
			this.researchManager.importFromReader(n, t), this.achievementsManager.importFromReader(e.readReader(), t), this.statistics.importFromReader(e.readReader(), t), this.ticker.importFromReader(e.readReader(), t);
			var r = null,
				i = e.readUint8();
			for (var s = 0; s < i; s++) {
				var o = this.meta.factoriesByIdNum[e.readUint8()],
					u = e.readReader();
				o && this.factories[o.id].importFromReader(u, t)
			}
			this.statistics.reset()
		}, a
	}),
define("play/UrlHandler", [], function () {
		var e = function () {
			var e = {},
				t = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (t, n, r) {
					e[n] = r
				});
			return e
		};
		return {
			getUrlVars: function () {
				return e()
			},
			identifySite: function () {
				var t = e();
				return t.kongregate_username && t["ref"] == "kongregate" ? "kongregate" : t["ref"] == "notdoppler" ? "notdoppler" : t["ref"] == "armorgames" ? "armorgames" : t["ref"] == "newgrounds" ? "newgrounds" : t["ref"] == "beta" ? "beta" : String(window.location.href).search("localhost") != -1 || String(window.location.href).search("file") != -1 ? "localhost" : "direct"
			}
		}
	}),
	define("play/SaveManager", ["../config/config", "./UrlHandler"], function (e, t) {
		var n = "SaveManager",
			r = function (r, i, s) {
				this.api = r, this.localStorageKey = s + "|" + i.toString(), this.cloudSaveName = "Main", this.cloudSaveIntervalMs = e.saveManager.cloudSaveIntervalMs, this.localSaveIntervalMs = e.saveManager.localSaveIntervalMs, this.cloudSaveInterval = null, this.localSaveInterval = null;
				var o = t.getUrlVars();
				this.useCloud = o.cloud === "0" || o.cloud === 0 || o.cloud === "false" ? false : true, this.useCloud || logger.info(n, "Cloud save disabled")
			};
		return r.prototype.getCloudSaveInterval = function () {
			return this.cloudSaveIntervalMs
		}, r.prototype.getLocalSaveInterval = function () {
			return this.localSaveIntervalMs
		}, r.prototype.setUpdateGameFromLoadedDataCallback = function (e) {
			return this.updateGameFromLoadedDataCallback = e, this
		}, r.prototype.setGetSaveDataCallback = function (e) {
			return this.saveDataCallback = e, this
		}, r.prototype.init = function (e, t) {
			var r = function () {
				this._startInterval(), logger.info(n, "Initialized"), t()
			}.bind(this);
			return e ? (this.saveAutoCloud(function () {}), this.saveAutoLocal(function () {}), r()) : this.loadAuto(function () {
				r()
			}.bind(this)), this
		}, r.prototype._startInterval = function () {
			this.cloudSaveInterval = setInterval(function () {
				this.saveAutoCloud(function () {
					logger.info(n, "Auto saved to cloud")
				})
			}.bind(this), this.cloudSaveIntervalMs), this.localSaveInterval = setInterval(function () {
				this.saveAutoLocal(function () {
					logger.info(n, "Auto saved to local")
				})
			}.bind(this), this.localSaveIntervalMs)
		}, r.prototype.destroy = function () {
			this.cloudSaveInterval && clearInterval(this.cloudSaveInterval), this.localSaveInterval && clearInterval(this.localSaveInterval)
		}, r.prototype.getSavesInfo = function (e, t) {
			this.api.getSavesInfo(e, t)
		}, r.prototype.saveManual = function (e, t) {
			this._saveCloud(e, t)
		}, r.prototype.saveAuto = function (e) {
			this._saveLocal(this.cloudSaveName, function () {
				this._saveCloud(this.cloudSaveName, e)
			}.bind(this))
		}, r.prototype.saveAutoCloud = function (e) {
			this._saveCloud(this.cloudSaveName, e)
		}, r.prototype.saveAutoLocal = function (e) {
			this._saveLocal(this.cloudSaveName, e)
		}, r.prototype._saveCloud = function (e, t) {
			this.useCloud ? this.api.save(e, this.saveDataCallback(), t) : (logger.info(n, "Cloud save skipped!"), t())
		}, r.prototype._saveLocal = function (e, t) {
			window.localStorage[this.localStorageKey + "|" + e] = JSON.stringify(this.saveDataCallback()), t()
		}, r.prototype.loadManual = function (e, t) {
			this._loadCloud(e, function (e) {
				this.updateGameFromSaveData(e), this.saveAutoCloud(function () {}), t()
			}.bind(this))
		}, r.prototype.loadAuto = function (e) {
			this._loadCloud(this.cloudSaveName, function (t) {
				this._loadLocal(this.cloudSaveName, function (r) {
					var i = null;
					r && t ? r.meta.ver > t.meta.ver ? (logger.info(n, "Preferred local save local ver:" + r.meta.ver + " > cloud ver:" + t.meta.ver), i = r) : (logger.info(n, "Preferred cloud save local ver:" + r.meta.ver + " < cloud ver:" + t.meta.ver), i = t) : r ? i = r : t && (i = t), i && this.updateGameFromSaveData(i), e()
				}.bind(this))
			}.bind(this))
		}, r.prototype.updateGameFromSaveData = function (e) {
			this.updateGameFromLoadedDataCallback(e)
		}, r.prototype._loadCloud = function (e, t) {
			this.api.load(e, t)
		}, r.prototype._loadLocal = function (e, t) {
			var n = null;
			try {
				n = JSON.parse(window.localStorage[this.localStorageKey + "|" + e]), t(n);
				return
			} catch (r) {}
			t(null)
		}, r
	}),
define("play/PurchasesManager", [], function () {
		var e = "PurchasesManager",
			t = function (t) {
				this.play = t, this.game = this.play.getGame(), this.unlocks = {}, this.strategies = {
					bonusTicks: {
						apply: function (t) {
							this.game.getTicker().addBonusTicks(t.amount), this.game.setIsPremium(true), logger.info(e, "Added " + t.amount + " bonus ticks")
						}.bind(this)
					},
					timeTravelTickets: {
						apply: function (t) {
							this.game.getTicker().addTimeTravelTickets(t.amount), this.game.setIsPremium(true), logger.info(e, "Added " + t.amount + " bonus ticks")
						}.bind(this)
					},
					researchProductionBonus: {
						apply: function (t) {
							this.game.setResearchProductionMultiplier(this.game.getResearchProductionMultiplier() * t.bonus), this.game.setIsPremium(true), logger.info(e, "Set research production bonus")
						}.bind(this)
					},
					extraTicks: {
						apply: function (t) {
							this.game.getTicker().setPurchaseBonusTicks(t.bonus), this.game.setIsPremium(true), logger.info(e, "Set extra ticks")
						}.bind(this)
					},
					extraProfit: {
						apply: function (t) {
							this.game.setProfitMultiplier(t.bonus), this.game.setIsPremium(true), logger.info(e, "Set extra money")
						}.bind(this)
					}
				}
			};
		return t.prototype.isVisible = function (e) {
			var t = this.play.getMeta().productsById[e];
			return t.requiresProduct && !this.getIsUnlocked(t.requiresProduct) ? false : t.special ? false : true
		}, t.prototype.getPriceKey = function () {
			return this.play.getApi().getKey()
		}, t.prototype.init = function (e) {
			this.loadPurchases(e)
		}, t.prototype.loadPurchases = function (t) {
			this.play.getApi().loadPurchases(function (n) {
				logger.info(e, "Purchases loaded", n), this.handlePurchases(n), t()
			}.bind(this))
		}, t.prototype.startPurchase = function (e, t) {
			this.play.getApi().purchase(e, function () {
				this.loadPurchases(function () {
					t()
				})
			}.bind(this))
		}, t.prototype.destroy = function () {}, t.prototype.handlePurchases = function (e) {
			this.game.setResearchProductionMultiplier(1), this.game.getTicker().setPurchaseBonusTicks(0), this.game.setProfitMultiplier(1);
			for (var t = 0; t < e.length; t++) this.handlePurchase(e[t])
		}, t.prototype.handlePurchase = function (t) {
			var n = this.play.getMeta().productsById[t.productId];
			if (!n) {
				logger.warning(e, "Unknown product with id " + t.productId, t);
				return
			}
			this.strategies[n.strategy.type] ? (this.strategies[n.strategy.type].apply(n.strategy), logger.info(e, "Applied consumable strategy " + n.strategy.type + " for purchase " + t.productId + ""), n.consumable ? this.play.getSaveManager().saveAuto(function (n) {
				this.play.getApi().setConsumed(t.externalId, function () {
					logger.info(e, "Purchase " + t.externalId + " set to consumed")
				})
			}.bind(this)) : (this.unlocks[t.productId] = true, logger.info(e, "Purchase unlocked " + t.productId + " with external id " + t.externalId))) : logger.error(e, "Invalid consumable strategy " + n.strategy.type + " for purchase " + t.productId + ". Could not handle purchase.")
		}, t.prototype.getIsUnlocked = function (e) {
			return !!this.unlocks[e]
		}, t
	}),
define("play/UserHash", [], function () {
		var e = "UserHash",
			t = function (e) {
				this.storageKey = e, this.hashLength = 40, this.userHash = null
			};
		return t.prototype.init = function () {
			return this.userHash = localStorage[this.storageKey], this.userHash || (this.userHash = this._generateUserHash(this.hashLength)), this.updateUserHash(this.userHash), logger.info(e, "User hash loaded " + this.userHash), this
		}, t.prototype.updateUserHash = function (e) {
			localStorage[this.storageKey] = e
		}, t.prototype.getUserHash = function () {
			return this.userHash
		}, t.prototype.toString = function () {
			return this.userHash
		}, t.prototype._generateUserHash = function (e) {
			var t = "",
				n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
			for (var r = 0; r < e; r++) t += n.charAt(Math.floor(Math.random() * n.length));
			return t
		}, t
	}),
	define("play/api/api/LocalApi", [], function () {
		var e = "Local",
			t = 100,
			n = function (e, t, n) {
				this.userHash = t, this.storageKey = n + "|" + t, this.em = e, this.purchases = [], this.savesMeta = {}, this.saves = {}, this.insentiveInterval = null, this.isShowingAd = false
			};
		return n.prototype.getTimestamp = function (e) {
			e(Math.round(Date.now() / 1e3))
		}, n.prototype._saveToLocalStorage = function () {
			localStorage[this.storageKey] = JSON.stringify({
				purchases: this.purchases,
				savesMeta: this.savesMeta,
				saves: this.saves
			})
		}, n.prototype._loadFromLocalStorage = function () {
			this.purchases = [], this.saves = {}, this.savesMeta = {};
			try {
				var t = JSON.parse(localStorage[this.storageKey]);
				t.purchases && (this.purchases = t.purchases), t.savesMeta && (this.savesMeta = t.savesMeta), t.saves && (this.saves = t.saves)
			} catch (n) {
				logger.warning(e, "Could not load data", n)
			}
		}, n.prototype.init = function (n) {
			var r = this;
			this._loadFromLocalStorage(), this.initializeIncentivizedAds(), logger.info(e, "Init"), setTimeout(function () {
				logger.info(e, "API loaded"), n()
			}, t)
		}, n.prototype.destroy = function () {
			this.insentiveInterval && clearInterval(this.insentiveInterval)
		}, n.prototype.purchase = function (e, n) {
			setTimeout(function () {
				this.purchases.push({
					externalId: String(Math.round(Math.random() * 1e12)),
					productId: e
				}), this._saveToLocalStorage(), n()
			}.bind(this), t)
		}, n.prototype.loadPurchases = function (e) {
			var n = this;
			setTimeout(function () {
				e(n.purchases)
			}.bind(this), t)
		}, n.prototype.setConsumed = function (e, n) {
			var r = this;
			setTimeout(function () {
				var t = [];
				for (var r in this.purchases) this.purchases[r].externalId != e && t.push(this.purchases[r]);
				this.purchases = t, this._saveToLocalStorage(), n(true)
			}.bind(this), t)
		}, n.prototype.submitStatistic = function (e, n, r) {
			this._saveToLocalStorage(), setTimeout(function () {
				r()
			}.bind(this), t)
		}, n.prototype.getSavesInfo = function (e, n) {
			setTimeout(function () {
				n(this.savesMeta)
			}.bind(this), t)
		}, n.prototype.load = function (e, n) {
			setTimeout(function () {
				this.savesMeta[e] ? n({
					meta: this.savesMeta[e],
					data: this.saves[e]
				}) : n(null)
			}.bind(this), t)
		}, n.prototype.save = function (e, n, r) {
			setTimeout(function () {
				this.savesMeta[e] = n.meta, this.saves[e] = n.data, this._saveToLocalStorage(), r(true)
			}.bind(this), t)
		}, n.prototype.initializeIncentivizedAds = function () {
			this.isAvailable = false, this.insentiveInterval = setInterval(function () {
				this.isAvailable = !this.isAvailable, this.em.invokeEvent(ApiEvent.INCENTIVIZED_AD_STATUS, this.isAvailable)
			}.bind(this), 2e3), this.em.addListener(e, ApiEvent.INCENTIVIZED_AD_CHECK_STATUS, function () {
				this.em.invokeEvent(ApiEvent.INCENTIVIZED_AD_STATUS, this.isAvailable)
			}.bind(this)), this.em.addListener(e, ApiEvent.INCENTIVIZED_AD_SHOW, function () {
				this._showIncentivizedAd()
			}.bind(this))
		}, n.prototype._showIncentivizedAd = function () {
			if (this.isShowingAd) return;
			var e = false;
			if (this.isAvailable) {
				this.isShowingAd = true, this.isAvailable = false, this.em.invokeEvent(ApiEvent.INCENTIVIZED_AD_STATUS, this.isAvailable), $("body").append('<div id="LocalApiAdd" style="position:absolute; top:0; left:0; width:100%; height:100%; background-color:red; text-align:center; font-size:50px; padding-top:200px;">This is an add!</div>');
				var t = $("#LocalApiAdd");
				setTimeout(function () {
					this.isShowingAd = false, e ? this.em.invokeEvent(ApiEvent.INCENTIVIZED_AD_ABANDONED) : this.em.invokeEvent(ApiEvent.INCENTIVIZED_AD_COMPLETED), t.remove()
				}.bind(this), 500)
			}
		}, n
	}),
define("play/api/Local", ["./api/LocalApi", "base/EventManager"], function (e, t) {
		var n = "ApiLocal",
			r = function (r, i, s) {
				this.em = new t(ApiEvent, n), this.localApi = new e(this.em, r, i)
			};
		return r.prototype.getEventManager = function () {
			return this.em
		}, r.prototype.getKey = function () {
			return "local"
		}, r.prototype.init = function (e) {
			this.localApi.init(function () {
				e()
			})
		}, r.prototype.destroy = function () {
			this.localApi.destroy()
		}, r.prototype.getTimestamp = function (e) {
			this.localApi.getTimestamp(e)
		}, r.prototype.purchase = function (e, t) {
			this.localApi.purchase(e, t)
		}, r.prototype.loadPurchases = function (e) {
			this.localApi.loadPurchases(e)
		}, r.prototype.setConsumed = function (e, t) {
			this.localApi.setConsumed(e, t)
		}, r.prototype.submitStatistic = function (e, t, n) {
			this.localApi.submitStatistic(e, t, n)
		}, r.prototype.getSavesInfo = function (e, t) {
			this.localApi.getSavesInfo(e, t)
		}, r.prototype.load = function (e, t) {
			this.localApi.load(e, t)
		}, r.prototype.save = function (e, t, n) {
			this.localApi.save(e, t, n)
		}, r.prototype.initializeIncentivizedAds = function (e) {
			return this.localApi.initializeIncentivizedAds(e), true
		}, r
	}),
define("play/api/api/ServerApi", [], function () {
		var e = "ServerApi",
			t = function (e, t, n) {
				this.apiUrl = t, this.userHash = e, this.ref = n
			};
		return t.prototype.init = function (t) {
			logger.info(e, "Init"), t()
		}, t.prototype.getTimestamp = function (e) {
			$.get(this.apiUrl + "/getTimestamp?user_hash=" + this.userHash, function (t) {
				e(t)
			}).fail(function () {
				e(null)
			})
		}, t.prototype.purchase = function (e, t) {
			document.location = this.apiUrl + "/makePurchase?package_id=" + e + "&user_hash=" + this.userHash + "&ref=" + this.ref
		}, t.prototype.loadPurchases = function (t) {
			logger.info(e, "Load items"), $.get(this.apiUrl + "/getPurchases?user_hash=" + this.userHash, function (n) {
				logger.info(e, "Items loaded", n);
				if (n.code != 0) {
					t([]);
					return
				}
				var r = [];
				for (var i in n.data.items) {
					var s = n.data.items[i];
					r.push({
						externalId: s.created,
						productId: s.package_id
					})
				}
				t(r)
			}).fail(function () {
				t([])
			})
		}, t.prototype.setConsumed = function (t, n) {
			logger.info(e, "Set consumed " + t), $.get(this.apiUrl + "/setConsumed?user_hash=" + this.userHash + "&created=" + t, function (t) {
				logger.info(e, "Items consumed", t);
				if (t.code != 0) {
					n(false);
					return
				}
				n(true)
			}).fail(function () {
				n([])
			})
		}, t
	});
	var PlayFab = typeof PlayFab != "undefined" ? PlayFab : {};
	PlayFab.settings || (PlayFab.settings = {
		titleId: null,
		developerSecretKey: null,
		advertisingIdType: null,
		advertisingIdValue: null,
		disableAdvertising: false,
		AD_TYPE_IDFA: "Idfa",
		AD_TYPE_ANDROID_ID: "Android_Id"
	}), PlayFab._internalSettings || (PlayFab._internalSettings = {
		sessionTicket: null,
		sdkVersion: "0.9.160201",
		productionServerUrl: ".playfabapi.com",
		logicServerUrl: null,
		GetServerUrl: function () {
			return "https://" + PlayFab.settings.titleId + PlayFab._internalSettings.productionServerUrl
		},
		GetLogicServerUrl: function () {
			return PlayFab._internalSettings.logicServerUrl
		},
		ExecuteRequest: function (e, t, n, r, i) {
			if (i != null && typeof i != "function") throw "Callback must be null of a function";
			t == null && (t = {});
			var s = new Date,
				o = JSON.stringify(t),
				u = new XMLHttpRequest;
			u.open("POST", e, true), u.setRequestHeader("Content-Type", "application/json"), n != null && u.setRequestHeader(n, r), u.setRequestHeader("X-PlayFabSDK", "JavaScriptSDK-" + PlayFab._internalSettings.sdkVersion), u.onloadend = function () {
				if (i == null) return;
				var e;
				try {
					e = JSON.parse(u.responseText)
				} catch (t) {
					e = {
						code: 503,
						status: "Service Unavailable",
						error: "Connection error",
						errorCode: 2,
						errorMessage: u.responseText
					}
				}
				e.CallBackTimeMS = new Date - s, e.code === 200 ? i(e, null) : i(null, e)
			}, u.onerror = function () {
				if (i == null) return;
				var e;
				try {
					e = JSON.parse(u.responseText)
				} catch (t) {
					e = {
						code: 503,
						status: "Service Unavailable",
						error: "Connection error",
						errorCode: 2,
						errorMessage: u.responseText
					}
				}
				e.CallBackTimeMS = new Date - s, i(null, e)
			}, u.send(o)
		}
	}), PlayFab.ClientApi = {
		GetPhotonAuthenticationToken: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetPhotonAuthenticationToken", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		LoginWithAndroidDeviceID: function (e, t) {
			e.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : e.TitleId;
			if (e.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";
			var n = function (e, n) {
				e != null && e.data.SessionTicket != null && (PlayFab._internalSettings.sessionTicket = e.data.SessionTicket, PlayFab.ClientApi._MultiStepClientLogin(e.data.SettingsForUser.NeedsAttribution)), t != null && typeof t == "function" && t(e, n)
			};
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/LoginWithAndroidDeviceID", e, null, null, n)
		},
		LoginWithCustomID: function (e, t) {
			e.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : e.TitleId;
			if (e.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";
			var n = function (e, n) {
				e != null && e.data.SessionTicket != null && (PlayFab._internalSettings.sessionTicket = e.data.SessionTicket, PlayFab.ClientApi._MultiStepClientLogin(e.data.SettingsForUser.NeedsAttribution)), t != null && typeof t == "function" && t(e, n)
			};
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/LoginWithCustomID", e, null, null, n)
		},
		LoginWithEmailAddress: function (e, t) {
			e.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : e.TitleId;
			if (e.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";
			var n = function (e, n) {
				e != null && e.data.SessionTicket != null && (PlayFab._internalSettings.sessionTicket = e.data.SessionTicket, PlayFab.ClientApi._MultiStepClientLogin(e.data.SettingsForUser.NeedsAttribution)), t != null && typeof t == "function" && t(e, n)
			};
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/LoginWithEmailAddress", e, null, null, n)
		},
		LoginWithFacebook: function (e, t) {
			e.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : e.TitleId;
			if (e.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";
			var n = function (e, n) {
				e != null && e.data.SessionTicket != null && (PlayFab._internalSettings.sessionTicket = e.data.SessionTicket, PlayFab.ClientApi._MultiStepClientLogin(e.data.SettingsForUser.NeedsAttribution)), t != null && typeof t == "function" && t(e, n)
			};
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/LoginWithFacebook", e, null, null, n)
		},
		LoginWithGameCenter: function (e, t) {
			e.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : e.TitleId;
			if (e.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";
			var n = function (e, n) {
				e != null && e.data.SessionTicket != null && (PlayFab._internalSettings.sessionTicket = e.data.SessionTicket, PlayFab.ClientApi._MultiStepClientLogin(e.data.SettingsForUser.NeedsAttribution)), t != null && typeof t == "function" && t(e, n)
			};
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/LoginWithGameCenter", e, null, null, n)
		},
		LoginWithGoogleAccount: function (e, t) {
			e.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : e.TitleId;
			if (e.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";
			var n = function (e, n) {
				e != null && e.data.SessionTicket != null && (PlayFab._internalSettings.sessionTicket = e.data.SessionTicket, PlayFab.ClientApi._MultiStepClientLogin(e.data.SettingsForUser.NeedsAttribution)), t != null && typeof t == "function" && t(e, n)
			};
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/LoginWithGoogleAccount", e, null, null, n)
		},
		LoginWithIOSDeviceID: function (e, t) {
			e.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : e.TitleId;
			if (e.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";
			var n = function (e, n) {
				e != null && e.data.SessionTicket != null && (PlayFab._internalSettings.sessionTicket = e.data.SessionTicket, PlayFab.ClientApi._MultiStepClientLogin(e.data.SettingsForUser.NeedsAttribution)), t != null && typeof t == "function" && t(e, n)
			};
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/LoginWithIOSDeviceID", e, null, null, n)
		},
		LoginWithKongregate: function (e, t) {
			e.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : e.TitleId;
			if (e.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";
			var n = function (e, n) {
				e != null && e.data.SessionTicket != null && (PlayFab._internalSettings.sessionTicket = e.data.SessionTicket, PlayFab.ClientApi._MultiStepClientLogin(e.data.SettingsForUser.NeedsAttribution)), t != null && typeof t == "function" && t(e, n)
			};
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/LoginWithKongregate", e, null, null, n)
		},
		LoginWithPlayFab: function (e, t) {
			e.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : e.TitleId;
			if (e.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";
			var n = function (e, n) {
				e != null && e.data.SessionTicket != null && (PlayFab._internalSettings.sessionTicket = e.data.SessionTicket, PlayFab.ClientApi._MultiStepClientLogin(e.data.SettingsForUser.NeedsAttribution)), t != null && typeof t == "function" && t(e, n)
			};
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/LoginWithPlayFab", e, null, null, n)
		},
		LoginWithPSN: function (e, t) {
			e.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : e.TitleId;
			if (e.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";
			var n = function (e, n) {
				e != null && e.data.SessionTicket != null && (PlayFab._internalSettings.sessionTicket = e.data.SessionTicket, PlayFab.ClientApi._MultiStepClientLogin(e.data.SettingsForUser.NeedsAttribution)), t != null && typeof t == "function" && t(e, n)
			};
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/LoginWithPSN", e, null, null, n)
		},
		LoginWithSteam: function (e, t) {
			e.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : e.TitleId;
			if (e.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";
			var n = function (e, n) {
				e != null && e.data.SessionTicket != null && (PlayFab._internalSettings.sessionTicket = e.data.SessionTicket, PlayFab.ClientApi._MultiStepClientLogin(e.data.SettingsForUser.NeedsAttribution)), t != null && typeof t == "function" && t(e, n)
			};
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/LoginWithSteam", e, null, null, n)
		},
		LoginWithXbox: function (e, t) {
			e.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : e.TitleId;
			if (e.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";
			var n = function (e, n) {
				e != null && e.data.SessionTicket != null && (PlayFab._internalSettings.sessionTicket = e.data.SessionTicket, PlayFab.ClientApi._MultiStepClientLogin(e.data.SettingsForUser.NeedsAttribution)), t != null && typeof t == "function" && t(e, n)
			};
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/LoginWithXbox", e, null, null, n)
		},
		RegisterPlayFabUser: function (e, t) {
			e.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : e.TitleId;
			if (e.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";
			var n = function (e, n) {
				e != null && e.data.SessionTicket != null && (PlayFab._internalSettings.sessionTicket = e.data.SessionTicket, PlayFab.ClientApi._MultiStepClientLogin(e.data.SettingsForUser.NeedsAttribution)), t != null && typeof t == "function" && t(e, n)
			};
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/RegisterPlayFabUser", e, null, null, n)
		},
		AddUsernamePassword: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/AddUsernamePassword", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetAccountInfo: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetAccountInfo", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetPlayFabIDsFromFacebookIDs: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetPlayFabIDsFromFacebookIDs", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetPlayFabIDsFromGameCenterIDs: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetPlayFabIDsFromGameCenterIDs", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetPlayFabIDsFromGoogleIDs: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetPlayFabIDsFromGoogleIDs", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetPlayFabIDsFromKongregateIDs: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetPlayFabIDsFromKongregateIDs", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetPlayFabIDsFromPSNAccountIDs: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetPlayFabIDsFromPSNAccountIDs", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetPlayFabIDsFromSteamIDs: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetPlayFabIDsFromSteamIDs", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetUserCombinedInfo: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetUserCombinedInfo", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		LinkAndroidDeviceID: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/LinkAndroidDeviceID", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		LinkCustomID: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/LinkCustomID", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		LinkFacebookAccount: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/LinkFacebookAccount", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		LinkGameCenterAccount: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/LinkGameCenterAccount", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		LinkGoogleAccount: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/LinkGoogleAccount", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		LinkIOSDeviceID: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/LinkIOSDeviceID", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		LinkKongregate: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/LinkKongregate", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		LinkPSNAccount: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/LinkPSNAccount", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		LinkSteamAccount: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/LinkSteamAccount", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		LinkXboxAccount: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/LinkXboxAccount", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		SendAccountRecoveryEmail: function (e, t) {
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/SendAccountRecoveryEmail", e, null, null, t)
		},
		UnlinkAndroidDeviceID: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/UnlinkAndroidDeviceID", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		UnlinkCustomID: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/UnlinkCustomID", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		UnlinkFacebookAccount: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/UnlinkFacebookAccount", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		UnlinkGameCenterAccount: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/UnlinkGameCenterAccount", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		UnlinkGoogleAccount: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/UnlinkGoogleAccount", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		UnlinkIOSDeviceID: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/UnlinkIOSDeviceID", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		UnlinkKongregate: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/UnlinkKongregate", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		UnlinkPSNAccount: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/UnlinkPSNAccount", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		UnlinkSteamAccount: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/UnlinkSteamAccount", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		UnlinkXboxAccount: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/UnlinkXboxAccount", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		UpdateUserTitleDisplayName: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/UpdateUserTitleDisplayName", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetFriendLeaderboard: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetFriendLeaderboard", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetFriendLeaderboardAroundCurrentUser: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetFriendLeaderboardAroundCurrentUser", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetFriendLeaderboardAroundPlayer: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetFriendLeaderboardAroundPlayer", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetLeaderboard: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetLeaderboard", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetLeaderboardAroundCurrentUser: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetLeaderboardAroundCurrentUser", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetLeaderboardAroundPlayer: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetLeaderboardAroundPlayer", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetUserData: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetUserData", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetUserPublisherData: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetUserPublisherData", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetUserPublisherReadOnlyData: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetUserPublisherReadOnlyData", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetUserReadOnlyData: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetUserReadOnlyData", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetUserStatistics: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetUserStatistics", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		UpdateUserData: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/UpdateUserData", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		UpdateUserPublisherData: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/UpdateUserPublisherData", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		UpdateUserStatistics: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/UpdateUserStatistics", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetCatalogItems: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetCatalogItems", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetStoreItems: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetStoreItems", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetTitleData: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetTitleData", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetTitleNews: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetTitleNews", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		AddUserVirtualCurrency: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/AddUserVirtualCurrency", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		ConfirmPurchase: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/ConfirmPurchase", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		ConsumeItem: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/ConsumeItem", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetCharacterInventory: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetCharacterInventory", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetPurchase: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetPurchase", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetUserInventory: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetUserInventory", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		PayForPurchase: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/PayForPurchase", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		PurchaseItem: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/PurchaseItem", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		RedeemCoupon: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/RedeemCoupon", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		ReportPlayer: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/ReportPlayer", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		StartPurchase: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/StartPurchase", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		SubtractUserVirtualCurrency: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/SubtractUserVirtualCurrency", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		UnlockContainerItem: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/UnlockContainerItem", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		AddFriend: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/AddFriend", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetFriendsList: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetFriendsList", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		RemoveFriend: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/RemoveFriend", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		SetFriendTags: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/SetFriendTags", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		RegisterForIOSPushNotification: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/RegisterForIOSPushNotification", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		RestoreIOSPurchases: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/RestoreIOSPurchases", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		ValidateIOSReceipt: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/ValidateIOSReceipt", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetCurrentGames: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetCurrentGames", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetGameServerRegions: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetGameServerRegions", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		Matchmake: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/Matchmake", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		StartGame: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/StartGame", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		AndroidDevicePushNotificationRegistration: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/AndroidDevicePushNotificationRegistration", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		ValidateGooglePlayPurchase: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/ValidateGooglePlayPurchase", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		LogEvent: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/LogEvent", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		AddSharedGroupMembers: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/AddSharedGroupMembers", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		CreateSharedGroup: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/CreateSharedGroup", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetPublisherData: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetPublisherData", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetSharedGroupData: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetSharedGroupData", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		RemoveSharedGroupMembers: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/RemoveSharedGroupMembers", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		UpdateSharedGroupData: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/UpdateSharedGroupData", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		ConsumePSNEntitlements: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/ConsumePSNEntitlements", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		RefreshPSNAuthToken: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/RefreshPSNAuthToken", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetCloudScriptUrl: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			var n = function (e, n) {
				PlayFab._internalSettings.logicServerUrl = e.data.Url, t != null && typeof t == "function" && t(e, n)
			};
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetCloudScriptUrl", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, n)
		},
		RunCloudScript: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetLogicServerUrl() + "/Client/RunCloudScript", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetContentDownloadUrl: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetContentDownloadUrl", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetAllUsersCharacters: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetAllUsersCharacters", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetCharacterLeaderboard: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetCharacterLeaderboard", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetCharacterStatistics: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetCharacterStatistics", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetLeaderboardAroundCharacter: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetLeaderboardAroundCharacter", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetLeaderboardForUserCharacters: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetLeaderboardForUserCharacters", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GrantCharacterToUser: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GrantCharacterToUser", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		UpdateCharacterStatistics: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/UpdateCharacterStatistics", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetCharacterData: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetCharacterData", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetCharacterReadOnlyData: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetCharacterReadOnlyData", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		UpdateCharacterData: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/UpdateCharacterData", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		ValidateAmazonIAPReceipt: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/ValidateAmazonIAPReceipt", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		AcceptTrade: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/AcceptTrade", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		CancelTrade: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/CancelTrade", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetPlayerTrades: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetPlayerTrades", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		GetTradeStatus: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/GetTradeStatus", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		OpenTrade: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/OpenTrade", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, t)
		},
		AttributeInstall: function (e, t) {
			if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";
			var n = function (e, n) {
				PlayFab.settings.advertisingIdType += "_Successful", t != null && typeof t == "function" && t(e, n)
			};
			PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Client/AttributeInstall", e, "X-Authorization", PlayFab._internalSettings.sessionTicket, n)
		},
		_MultiStepClientLogin: function (e) {
			if (e && !PlayFab.settings.disableAdvertising && PlayFab.settings.advertisingIdType !== null && PlayFab.settings.advertisingIdValue !== null) {
				var t = {};
				if (PlayFab.settings.advertisingIdType === PlayFab.settings.AD_TYPE_IDFA) t.Idfa = PlayFab.settings.advertisingIdValue;
				else {
					if (PlayFab.settings.advertisingIdType !== PlayFab.settings.AD_TYPE_ANDROID_ID) return;
					t.Android_Id = PlayFab.settings.advertisingIdValue
				}
				PlayFab.ClientApi.AttributeInstall(t, null)
			}
		}
	};
	var PlayFabClientSDK = PlayFab.ClientApi;
	define("play/api/lib/playFab/PlayFabClientApi", function () {}),
	define("play/api/api/PlayFabApi", ["../lib/playFab/PlayFabClientApi"], function () {
		var e = "PlayFab",
			t = function (e) {
				PlayFab.settings.titleId = "775A", this.customId = e
			};
		return t.prototype._getMetaVarName = function (e) {
			return e + "-meta"
		}, t.prototype.init = function (t) {
			logger.info(e, "Init"), this.login(t);
			var n = this;
			setInterval(function () {
				n.login()
			}, 432e5)
		}, t.prototype.login = function (t) {
			logger.info(e, "Login");
			var n = {
				CustomId: this.customId,
				CreateAccount: true
			};
			PlayFab.ClientApi.LoginWithCustomID(n, function (n, r) {
				n && n.code == 200 ? (logger.info(e, "Logged in!", [n, r]), t()) : (logger.error(e, "init failed!", [n, r]), t())
			}.bind(this))
		}, t.prototype.load = function (t, n) {
			var r = {
				Keys: [t, this._getMetaVarName(t)]
			};
			PlayFab.ClientApi.GetUserData(r, function (r, i) {
				logger.info(e, "Loaded!", [r, i]);
				if (r && r.code == 200) {
					var s = null;
					try {
						var o = JSON.parse(r.data.Data[this._getMetaVarName(t)].Value);
						s = {
							meta: o,
							data: r.data.Data[t].Value
						}
					} catch (u) {}
					n(s);
					return
				}
				logger.error(e, "load failed!", [r, i]), n(null)
			}.bind(this))
		}, t.prototype.save = function (t, n, r) {
			var i = {
				Data: {}
			};
			i.Data[t] = n.data, i.Data[this._getMetaVarName(t)] = JSON.stringify(n.meta), PlayFab.ClientApi.UpdateUserData(i, function (n, i) {
				n && n.code == 200 ? (logger.info(e, "Saved " + t, [n, i]), r(true)) : (logger.error(e, "Save failed!", [n, i]), r(false))
			}.bind(this))
		}, t.prototype.submitStatistic = function (e, t, n) {
			n()
		}, t.prototype.getSavesInfo = function (t, n) {
			var r = [];
			for (var i in t) r.push(this._getMetaVarName(t[i]));
			var s = {
				Keys: r
			};
			PlayFab.ClientApi.GetUserData(s, function (r, i) {
				if (r && r.code == 200) {
					logger.info(e, "getSavesInfo loaded!", [r, i]);
					var s = {};
					for (var o in t) {
						var u = this._getMetaVarName(t[o]);
						try {
							r.data.Data[u] && r.data.Data[u].Value && (s[t[o]] = JSON.parse(r.data.Data[u].Value))
						} catch (a) {}
					}
					n(s);
					return
				}
				logger.error(e, "getSavesInfo failed!", [r, i]), n({})
			}.bind(this))
		}, t
	}),
define("play/api/Web", ["./api/ServerApi", "./api/PlayFabApi", "base/EventManager"], function (e, t, n) {
		var r = "ApiWeb",
			i = function (i, s, o) {
				this.em = new n(ApiEvent, r), this.serverApi = new e(i, s, o), this.playFabApi = new t(i)
			};
		return i.prototype.getEventManager = function () {
			return this.em
		}, i.prototype.getKey = function () {
			return "web"
		}, i.prototype.getTimestamp = function (e) {
			this.serverApi.getTimestamp(e)
		}, i.prototype.init = function (e) {
			this.playFabApi.init(function () {
				this.serverApi.init(function () {
					e()
				})
			}.bind(this))
		}, i.prototype.destroy = function () {}, i.prototype.purchase = function (e, t) {
			this.serverApi.purchase(e, t)
		}, i.prototype.loadPurchases = function (e) {
			this.serverApi.loadPurchases(e)
		}, i.prototype.setConsumed = function (e, t) {
			this.serverApi.setConsumed(e, t)
		}, i.prototype.submitStatistic = function (e, t, n) {
			n()
		}, i.prototype.getSavesInfo = function (e, t) {
			this.playFabApi.getSavesInfo(e, t)
		}, i.prototype.load = function (e, t) {
			this.playFabApi.load(e, t)
		}, i.prototype.save = function (e, t, n) {
			this.playFabApi.save(e, t, n)
		}, i.prototype.initializeIncentivizedAds = function (e) {
			return false
		}, i.prototype.showIncentivizedAd = function () {
			return false
		}, i
	}),
define("play/api/api/KongregateApi", [], function () {
		var e = "KongregateApi",
			t = function (e) {
				this.em = e, this.kongregate = null
			};
		return t.prototype.init = function (t) {
			var n = this;
			require(["kongregateApi"], function () {
				logger.info(e, "Init"), kongregateAPI.loadAPI(function () {
					logger.info(e, "API loaded"), n.kongregate = kongregateAPI.getAPI(), t()
				})
			})
		}, t.prototype.purchase = function (t, n) {
			if (!this.kongregate) {
				logger.warning(e, "Kongregate API not loaded"), n(false);
				return
			}
			this.kongregate.mtx.purchaseItems([t], function () {
				n(true)
			})
		}, t.prototype.loadPurchases = function (t) {
			logger.info(e, "Load items");
			if (!this.kongregate) {
				logger.warning(e, "Kongregate API not loaded"), t([]);
				return
			}
			this.kongregate.mtx.requestUserItemList(this.kongregate.services.getUsername(), function (n) {
				logger.info(e, "Items loaded", n);
				if (!n || !n.success) {
					t([]);
					return
				}
				var r = [];
				for (var i in n.data) {
					var s = n.data[i];
					r.push({
						externalId: s.id,
						productId: s.identifier
					})
				}
				t(r)
			})
		}, t.prototype.setConsumed = function (t, n) {
			logger.info(e, "Set consumed");
			if (!this.kongregate) {
				logger.warning(e, "Kongregate API not loaded"), n([]);
				return
			}
			this.kongregate.mtx.useItemInstance(t, function (t) {
				logger.info(e, "Items consumed", t);
				if (!t || !t.success) {
					n(false);
					return
				}
				n(true)
			})
		}, t.prototype.submitStatistic = function (t, n, r) {
			if (!this.kongregate) {
				logger.warning(e, "Kongregate API not loaded"), r();
				return
			}
			this.kongregate.stats.submit(t, n), r()
		}, t.prototype.initializeIncentivizedAds = function () {
			var t = this,
				n = null;
			this.kongregate.mtx.addEventListener("adsAvailable", function (e) {
				n = true, t.em.invokeEvent(ApiEvent.INCENTIVIZED_AD_STATUS, n)
			}), this.kongregate.mtx.addEventListener("adsUnavailable", function (e) {
				n = false, t.em.invokeEvent(ApiEvent.INCENTIVIZED_AD_STATUS, n)
			}), this.kongregate.mtx.addEventListener("adOpened", function (e) {}), this.kongregate.mtx.addEventListener("adCompleted", function (e) {
				t.em.invokeEvent(ApiEvent.INCENTIVIZED_AD_COMPLETED)
			}), this.kongregate.mtx.addEventListener("adAbandoned", function (e) {
				t.em.invokeEvent(ApiEvent.INCENTIVIZED_AD_ABANDONED)
			}), this.em.addListener(e, ApiEvent.INCENTIVIZED_AD_CHECK_STATUS, function () {
				this.em.invokeEvent(ApiEvent.INCENTIVIZED_AD_STATUS, n)
			}.bind(this)), this.em.addListener(e, ApiEvent.INCENTIVIZED_AD_SHOW, function () {
				this.kongregate.mtx.showIncentivizedAd()
			}.bind(this)), this.kongregate.mtx.initializeIncentivizedAds()
		}, t
	}),
define("play/api/Kongregate", ["./api/KongregateApi", "./api/PlayFabApi", "./api/ServerApi", "base/EventManager"], function (e, t, n, r) {
		var i = "ApiKongregate",
			s = function (s, o, u) {
				this.em = new r(ApiEvent, i), this.kongregateApi = new e(this.em), this.playFabApi = new t(s), this.serverApi = new n(s, o, u)
			};
		return s.prototype.getEventManager = function () {
			return this.em
		}, s.prototype.getKey = function () {
			return "kongregate"
		}, s.prototype.getTimestamp = function (e) {
			this.serverApi.getTimestamp(e)
		}, s.prototype.init = function (e) {
			this.playFabApi.init(function () {
				this.kongregateApi.init(function () {
					this.serverApi.init(function () {
						e()
					})
				}.bind(this))
			}.bind(this))
		}, s.prototype.destroy = function () {}, s.prototype.purchase = function (e, t) {
			this.kongregateApi.purchase(e, t)
		}, s.prototype.loadPurchases = function (e) {
			this.kongregateApi.loadPurchases(e)
		}, s.prototype.setConsumed = function (e, t) {
			this.kongregateApi.setConsumed(e, t)
		}, s.prototype.submitStatistic = function (e, t, n) {
			this.kongregateApi.submitStatistic(e, t, function () {
				this.playFabApi.submitStatistic(e, t, n)
			}.bind(this))
		}, s.prototype.getSavesInfo = function (e, t) {
			this.playFabApi.getSavesInfo(e, t)
		}, s.prototype.load = function (e, t) {
			this.playFabApi.load(e, t)
		}, s.prototype.save = function (e, t, n) {
			this.playFabApi.save(e, t, n)
		}, s.prototype.initializeIncentivizedAds = function (e) {
			return false
		}, s
	}),
define("play/api/ApiFactory", ["../../config/config", "play/api/Local", "play/api/Web", "play/api/Kongregate"], function (e, t, n, r) {
		var i = "ApiFactory";
		return function (s, o, u) {
			return s == "kongregate" ? (logger.info(i, "Kongregate API loaded"), new r(o, e.api.server.url, s)) : s == "localhost" ? (logger.info(i, "Local API loaded"), new t(o, e.api.local.storageKey, s)) : (logger.info(i, "Web API loaded"), new n(o, e.api.server.url, s))
		}
	}),
	define("play/ConfirmedTimestamp", [], function () {
		var e = "Ts",
			t = function (e) {
				this.serverTs = 0, this.localTs = 0, this.timeDif = 0, this.loaderFunction = e
			};
		return t.prototype.init = function (t) {
			this.loaderFunction(function (n) {
				n && !isNaN(Number(n)) ? this.serverTs = Number(n) : this.serverTs = Math.round(Date.now() / 1e3), this.localTs = Math.round(Date.now() / 1e3), this.timeDif = this.serverTs - this.localTs, logger.info(e, "Loaded " + n + " Used: " + this.serverTs + " Dif: " + this.timeDif), t()
			}.bind(this))
		}, t.prototype.getConfirmedNow = function () {
			return Math.round(Date.now() / 1e3) + this.timeDif
		}, t
	}),
	define("game/action/IncentivizedAdCompletedAction", ["config/Meta"], function (e) {
		var t = "IncentivizedAdCompletedAction",
			n = function (e) {
				this.game = e
			};
		return n.prototype.getMessage = function () {
			return "Show ad for " + e.main.incentivizedAdBonusTicks + " bonus ticks"
		}, n.prototype.complete = function () {
			logger.info(t, "Incentivized ad completed, added " + e.main.incentivizedAdBonusTicks + " bonus ticks"), this.game.getTicker().addBonusTicks(e.main.incentivizedAdBonusTicks)
		}, n
	}),
	define("play/Play", ["config/config", "../config/Meta", "../game/Game", "./SaveManager", "./PurchasesManager", "./UserHash", "./UrlHandler", "./api/ApiFactory", "./ConfirmedTimestamp", "game/action/IncentivizedAdCompletedAction"], function (e, t, n, r, i, s, o, u, a, f) {
		var l = "Play",
			c = function () {
				this.userHash = null, this.api = null, this.saveManager = null, this.purchasesManager = null, this.confirmedTimestamp = null, this.game = null, this.missions = {}
			};
		return c.prototype.getMeta = function () {
			return t
		}, c.prototype.getGame = function () {
			return this.game
		}, c.prototype.getMission = function (e) {
			return this.missions[e]
		}, c.prototype.getSaveManager = function () {
			return this.saveManager
		}, c.prototype.getPurchasesManager = function () {
			return this.purchasesManager
		}, c.prototype.getApi = function () {
			return this.api
		}, c.prototype.getUserHash = function () {
			return this.userHash
		}, c.prototype.isDevMode = function () {
			return o.identifySite() == "localhost"
		}, c.prototype.init = function (r, c) {
			this.userHash = new s(e.userHash.key), this.userHash.init(), this.api = u(o.identifySite(), this.userHash.getUserHash()), this.api.init(function () {
				this.api.getEventManager().addListener(l, ApiEvent.INCENTIVIZED_AD_COMPLETED, function () {
					(new f(this.getGame())).complete()
				}.bind(this)), this.confirmedTimestamp = new a(this.api.getTimestamp.bind(this.api)), this.confirmedTimestamp.init(function () {
					this.game = new n(t.main, this.confirmedTimestamp), this.missions = {};
					for (var e in t.missions) this.missions[e] = new n(t.missions[e]);
					this.saveManager = this._createSaveManager(), this.saveManager.init(r, function () {
						this.purchasesManager = new i(this), this.purchasesManager.init(function () {
							this.game.init(), logger.info(l, "Initialized"), c()
						}.bind(this))
					}.bind(this))
				}.bind(this))
			}.bind(this))
		}, c.prototype._createSaveManager = function () {
			return (new r(this.api, this.userHash, "FactoryIdleSave")).setGetSaveDataCallback(function () {
				return {
					meta: {
						ver: this.game.getTicker().getNoOfTicks(),
						timestamp: Math.round(Date.now() / 1e3),
						date: dateToStr(new Date, true)
					},
					data: Base64ArrayBuffer.encode(this.exportToWriter().getBuffer())
				}
			}.bind(this)).setUpdateGameFromLoadedDataCallback(function (e) {
				logger.info(l, "Game loaded from save");
				try {
					this.importFromReader(new BinaryArrayReader(Base64ArrayBuffer.decode(e.data))), this.game.getTicker().addOfflineGains()
				} catch (t) {
					logger.error(l, "Could not update game from save data", t.message)
				}
			}.bind(this))
		}, c.prototype.destroy = function () {
			this.game.destroy(), this.api.destroy(), this.saveManager.destroy(), this.purchasesManager.destroy();
			for (var e in this.missions) this.missions[e].destroy()
		}, c.prototype.exportToWriter = function () {
			return this.game.exportToWriter()
		}, c.prototype.importFromReader = function (e) {
			this.game.importFromReader(e)
		}, c
	}),
define("base/ImageMap", [], function () {
		var e = "ImageMap",
			t = function (e) {
				this.path = e, this.noOfImages = 0, this.noOfImagesLoaded = 0, this.imagesData = {}, this.images = {}
			};
		return t.prototype.addImages = function (e) {
			for (var t in e) this.imagesData[t] || (this.noOfImages++, this.imagesData[t] = this.path + e[t]);
			return this
		}, t.prototype.loadAll = function (t) {
			logger.info(e, "Start loading " + this.noOfImages + " images");
			var n = this;
			for (var r in this.imagesData) {
				var i = new Image;
				i.onload = function () {
					n.noOfImagesLoaded++, n.noOfImagesLoaded == n.noOfImages && (logger.info(e, "Loaded " + n.noOfImagesLoaded + " images"), t())
				}, i.src = this.imagesData[r] + "?x=" + Math.random(), this.images[r] = i
			}
		}, t.prototype.getImage = function (e) {
			return this.images[e]
		}, t
	}),
	define("text", ["module"], function (e) {
		"use strict";
		var t, n, r, i, s, o = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
			u = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
			a = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
			f = typeof location != "undefined" && location.href,
			l = f && location.protocol && location.protocol.replace(/\:/, ""),
			c = f && location.hostname,
			h = f && (location.port || undefined),
			p = {},
			d = e.config && e.config() || {};
		t = {
			version: "2.0.10",
			strip: function (e) {
				if (e) {
					e = e.replace(u, "");
					var t = e.match(a);
					t && (e = t[1])
				} else e = "";
				return e
			},
			jsEscape: function (e) {
				return e.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
			},
			createXhr: d.createXhr || function () {
				var e, t, n;
				if (typeof XMLHttpRequest != "undefined") return new XMLHttpRequest;
				if (typeof ActiveXObject != "undefined")
					for (t = 0; t < 3; t += 1) {
						n = o[t];
						try {
							e = new ActiveXObject(n)
						} catch (r) {}
						if (e) {
							o = [n];
							break
						}
					}
				return e
			},
			parseName: function (e) {
				var t, n, r, i = false,
					s = e.indexOf("."),
					o = e.indexOf("./") === 0 || e.indexOf("../") === 0;
				return s !== -1 && (!o || s > 1) ? (t = e.substring(0, s), n = e.substring(s + 1, e.length)) : t = e, r = n || t, s = r.indexOf("!"), s !== -1 && (i = r.substring(s + 1) === "strip", r = r.substring(0, s), n ? n = r : t = r), {
					moduleName: t,
					ext: n,
					strip: i
				}
			},
			xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
			useXhr: function (e, n, r, i) {
				var s, o, u, a = t.xdRegExp.exec(e);
				return a ? (s = a[2], o = a[3], o = o.split(":"), u = o[1], o = o[0], (!s || s === n) && (!o || o.toLowerCase() === r.toLowerCase()) && (!u && !o || u === i)) : true
			},
			finishLoad: function (e, n, r, i) {
				r = n ? t.strip(r) : r, d.isBuild && (p[e] = r), i(r)
			},
			load: function (e, n, r, i) {
				if (i.isBuild && !i.inlineText) {
					r();
					return
				}
				d.isBuild = i.isBuild;
				var s = t.parseName(e),
					o = s.moduleName + (s.ext ? "." + s.ext : ""),
					u = n.toUrl(o),
					a = d.useXhr || t.useXhr;
				if (u.indexOf("empty:") === 0) {
					r();
					return
				}!f || a(u, l, c, h) ? t.get(u, function (n) {
					t.finishLoad(e, s.strip, n, r)
				}, function (e) {
					r.error && r.error(e)
				}) : n([o], function (e) {
					t.finishLoad(s.moduleName + "." + s.ext, s.strip, e, r)
				})
			},
			write: function (e, n, r, i) {
				if (p.hasOwnProperty(n)) {
					var s = t.jsEscape(p[n]);
					r.asModule(e + "!" + n, "define(function () { return '" + s + "';});\n")
				}
			},
			writeFile: function (e, n, r, i, s) {
				var o = t.parseName(n),
					u = o.ext ? "." + o.ext : "",
					a = o.moduleName + u,
					f = r.toUrl(o.moduleName + u) + ".js";
				t.load(a, r, function (n) {
					var r = function (e) {
						return i(f, e)
					};
					r.asModule = function (e, t) {
						return i.asModule(e, f, t)
					}, t.write(e, a, r, s)
				}, s)
			}
		};
		if (d.env === "node" || !d.env && typeof process != "undefined" && process.versions && !!process.versions.node && !process.versions["node-webkit"]) n = require.nodeRequire("fs"), t.get = function (e, t, r) {
			try {
				var i = n.readFileSync(e, "utf8");
				i.indexOf("﻿") === 0 && (i = i.substring(1)), t(i)
			} catch (s) {
				r(s)
			}
		};
		else if (d.env === "xhr" || !d.env && t.createXhr()) t.get = function (e, n, r, i) {
			var s = t.createXhr(),
				o;
			s.open("GET", e, true);
			if (i)
				for (o in i) i.hasOwnProperty(o) && s.setRequestHeader(o.toLowerCase(), i[o]);
			d.onXhr && d.onXhr(s, e), s.onreadystatechange = function (t) {
				var i, o;
				s.readyState === 4 && (i = s.status, i > 399 && i < 600 ? (o = new Error(e + " HTTP status: " + i), o.xhr = s, r(o)) : n(s.responseText), d.onXhrComplete && d.onXhrComplete(s, e))
			}, s.send(null)
		};
		else if (d.env === "rhino" || !d.env && typeof Packages != "undefined" && typeof java != "undefined") t.get = function (e, t) {
			var n, r, i = "utf-8",
				s = new java.io.File(e),
				o = java.lang.System.getProperty("line.separator"),
				u = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(s), i)),
				a = "";
			try {
				n = new java.lang.StringBuffer, r = u.readLine(), r && r.length() && r.charAt(0) === 65279 && (r = r.substring(1)), r !== null && n.append(r);
				while ((r = u.readLine()) !== null) n.append(o), n.append(r);
				a = String(n.toString())
			} finally {
				u.close()
			}
			t(a)
		};
		else if (d.env === "xpconnect" || !d.env && typeof Components != "undefined" && Components.classes && Components.interfaces) r = Components.classes, i = Components.interfaces, Components.utils["import"]("resource://gre/modules/FileUtils.jsm"), s = "@mozilla.org/windows-registry-key;1" in r, t.get = function (e, t) {
			var n, o, u, a = {};
			s && (e = e.replace(/\//g, "\\")), u = new FileUtils.File(e);
			try {
				n = r["@mozilla.org/network/file-input-stream;1"].createInstance(i.nsIFileInputStream), n.init(u, 1, 0, false), o = r["@mozilla.org/intl/converter-input-stream;1"].createInstance(i.nsIConverterInputStream), o.init(n, "utf-8", n.available(), i.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER), o.readString(n.available(), a), o.close(), n.close(), t(a.value)
			} catch (f) {
				throw new Error((u && u.path || "") + ": " + f)
			}
		};
		return t
	}),
define("text!template/factories.html", [], function () {
		return '<div class="headerXX">\r\n    You have <span class="money">$<b id="money"></b></span> to spend. Isn\'t that nice.\r\n    Average total income <span class="money">$<b id="income"></b></span>.<br />\r\n    {{#if researchBought}}\r\n    You have <span class="research"><b id="researchPoints"></b></span> research points.\r\n    Avg production <span class="research"><b id="researchIncome"></b></span>\r\n    {{/if}}\r\n</div>\r\n<div class="helpXX">\r\n    <div style="float:right"><span id="ticks"></span> ticks/sec</div>\r\n    Buy more land to create even bigger empire. Go ahead, buy some!\r\n</div>\r\n<div id="factorySelection" class="factories">\r\n    {{#each factories}}\r\n    <div class="factoryButton {{design}}" data-id="{{id}}">\r\n        <div class="name">\r\n            {{name}}\r\n        </div>\r\n        <span class="paused">{{#if isPaused}}&lt;&lt; Paused &gt;&gt;{{else}}&nbsp;{{/if}}</span>\r\n        {{#if isBought}}\r\n\r\n        <div class="productionTitle">Income</div>\r\n        <div class="textLine money" data-id="{{id}}" data-key="income">-</div>\r\n        <div class="productionTitle">Research</div>\r\n        <div class="textLine research" data-id="{{id}}" data-key="researchProduction">-</div>\r\n        <div class="button selectButton" data-id="{{id}}">SELECT</div>\r\n\r\n        {{else}}\r\n\r\n        <div class="productionTitle price">Price</div>\r\n        <div class="textLine money">${{price}}</div>\r\n        <div class="button buyButton" data-id="{{id}}">BUY</div>\r\n\r\n        {{/if}}\r\n\r\n    </div>\r\n    {{/each}}\r\n    <div class="missionsButton" id="missionsButton">\r\n        <div class="name">\r\n            Challenges\r\n        </div>\r\n        <div class="description">\r\n            Test your knowledge with these custom scenarios. May cause brain injury!\r\n        </div>\r\n        <div class="button">PLAY</div>\r\n    </div>\r\n</div>'
	}),
define("text!template/helper/alert.html", [], function () {
		return '<div class="alertBg" id="{{idBg}}"></div>\r\n<div class="alert" id="{{id}}">\r\n    <span class="title">{{title}}</span><br/>\r\n    <span class="message">{{{message}}}</span><br/>\r\n    <span class="button">{{buttonTitle}}</span>\r\n</div>'
	}),
	define("ui/helper/AlertUi", ["text!template/helper/alert.html"], function (e) {
		var t = 0,
			n = function (e, n) {
				this.title = e, this.message = n, this.buttonTitle = "OK", this.id = "alert" + t++, this.idBg = this.id + "Bg"
			};
		return n.prototype.setButtonTitle = function (e) {
			return this.buttonTitle = e, this
		}, n.prototype.setCallback = function (e) {
			return this.callback = e, this
		}, n.prototype.display = function () {
			var t = this;
			return this.container = $("body"), this.container.append(Handlebars.compile(e)({
				id: this.id,
				idBg: this.idBg,
				title: this.title,
				message: this.message,
				buttonTitle: this.buttonTitle
			})), this.element = this.container.find("#" + this.id), this.bg = this.container.find("#" + this.idBg), this.element.find(".button").click(function () {
				t.hide(), t.callback && t.callback()
			}), this.element.css("top", Math.round(($(window).height() - this.element.height()) / 2)), this.element.css("left", Math.round(($(window).width() - this.element.width()) / 2)), this.bg.hide().fadeIn(200), this.element.hide().fadeIn(200), this
		}, n.prototype.hide = function () {
			var e = this;
			this.element && this.element.fadeOut(200, function () {
				e.element.remove()
			}), this.bg && this.bg.fadeOut(200, function () {
				e.bg.remove()
			})
		}, n
	}),
define("game/action/BuyFactoryAction", [], function () {
		var e = function (e, t) {
			this.game = e, this.factoryMeta = this.game.getMeta().factoriesById[t]
		};
		return e.prototype.canBuy = function () {
			return this.game.getMoney() >= this.factoryMeta.price
		}, e.prototype.buy = function () {
			this.game.addMoney(-this.factoryMeta.price);
			var e = this.game.getFactory(this.factoryMeta.id);
			e.reset(), e.setIsBought(true)
		}, e
	}),
	define("ui/FactoriesUi", ["text!template/factories.html", "ui/helper/AlertUi", "game/action/BuyFactoryAction"], function (e, t, n) {
		var r = "factoriesUi",
			i = function (e, t, n) {
				this.globalUiEm = e, this.gameUiEm = t, this.game = n, this.statistics = n.getStatistics()
			};
		return i.prototype.display = function (i) {
			var s = this;
			this.container = i;
			var o = [],
				u = this.game.getMeta().factories;
			for (var a in u) {
				var f = u[a],
					l = this.game.getFactory(f.id);
				o.push({
					id: f.id,
					name: f.name,
					price: nf(f.price),
					isBought: l.getIsBought(),
					isPaused: this.game.getFactory(f.id).getIsPaused()
				})
			}
			this.container.html(Handlebars.compile(e)({
				factories: o,
				researchBought: !!this.game.getResearchManager().getResearch("researchCenter")
			})), this.container.find(".selectButton").click(function (e) {
				var t = $(e.target).attr("data-id");
				s.gameUiEm.invokeEvent(GameUiEvent.SHOW_FACTORY, t)
			}.bind(this)), this.container.find(".buyButton").click(function (e) {
				var r = $(e.target).attr("data-id"),
					i = new n(s.game, r);
				i.canBuy() ? (i.buy(), s.gameUiEm.invokeEvent(GameUiEvent.SHOW_FACTORY, r)) : (new t("", "You don't have enough money to buy this factory!")).display()
			}.bind(this)), s.game.getEventManager().addListener(r, GameEvent.GAME_TICK, function () {
				this.update()
			}.bind(this)), this.update(), $("#missionsButton").click(function () {
				s.globalUiEm.invokeEvent(GlobalUiEvent.SHOW_MISSIONS)
			}), $("#missionsButton").hide()
		}, i.prototype.update = function () {
			var e = this;
			this.container.find("#money").html(nf(this.game.getMoney())), this.container.find("#researchPoints").html(nf(this.game.getResearchPoints()));
			var t = this.statistics.getAvgProfit();
			this.container.find("#income").html(t ? nf(t) : " ? ");
			var r = this.statistics.getAvgResearchPointsProduction();
			this.container.find("#researchIncome").html(r ? nf(r) : " ? "), this.container.find(".factoryButton").each(function () {
				var t = $(this).attr("data-id"),
					r = e.statistics.getFactoryAvgProfit(t);
				$(this).find(".money[data-key='income']").html(r ? nfPlus(r) : " ? ");
				var i = e.statistics.getFactoryAvgResearchPointsProduction(t);
				$(this).find(".research[data-key='researchProduction']").html(i ? nfPlus(i) : " ? "), (new n(e.game, t)).canBuy() ? $(this).find(".buyButton").removeClass("cantBuy").html("BUY") : $(this).find(".buyButton").addClass("cantBuy").html("TOO EXPENSIVE")
			}), this.container.find("#ticks").html(nf(this.game.getTicker().getActualTicksPerSec()))
		}, i.prototype.destroy = function () {
			this.globalUiEm.removeListenerForType(r), this.gameUiEm.removeListenerForType(r), this.game.getEventManager().removeListenerForType(r), this.container.html(""), this.container = null
		}, i
	}),
define("text!template/factory.html", [], function () {
		return '<table class="factoryBox" width="100%" cellspacing="0" cellpadding="0" border="0">\r\n    <tr>\r\n        <td class="overviewArea" valign="top">\r\n            <div class="overviewContainer"></div>\r\n        </td>\r\n        <td class="topArea" valign="top">\r\n            <div class="topContainer">\r\n                <div class="menuContainer"></div>\r\n                <div class="infoContainer"></div>\r\n                <div class="controlsContainer"></div>\r\n            </div>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td class="componentsArea" valign="top">\r\n            <div class="componentsContainer"></div>\r\n            <div class="mapToolsContainer"></div>\r\n            <div class="incentivizedAd"></div>\r\n        </td>\r\n        <td class="mapArea" valign="top">\r\n            <div class="mapContainer"></div>\r\n        </td>\r\n    </tr>\r\n</table>\r\n'
	}),
	define("text!template/factory/menu.html", [], function () {
		return '<div class="menuBox">\r\n    {{#if isMission}}\r\n    <a href="javascript:void(0);" id="missionsButton">Challenges</a>\r\n    <a href="javascript:void(0);" id="mainGameButton">Factories</a>\r\n    {{else}}\r\n    <a href="javascript:void(0);" id="factoriesButton">Factories</a>\r\n    {{/if}}\r\n    {{#if hasStatistics}}\r\n    <a href="javascript:void(0);" id="statisticsButton">Statistics</a>\r\n    {{/if}}\r\n    {{#if hasResearch}}\r\n    <a href="javascript:void(0);" id="researchButton">Research</a>\r\n    {{/if}}\r\n    {{#if hasUpgrades}}\r\n    <a href="javascript:void(0);" id="upgradesButton">Upgrades</a>\r\n    {{/if}}\r\n    {{#if hasAchievements}}\r\n    <a href="javascript:void(0);" id="achievementsButton">Achievements</a>\r\n    {{/if}}\r\n    <a href="javascript:void(0);" id="extraButton">Extra</a>\r\n    <a href="javascript:void(0);" id="timeTravelButton">Time travel</a>\r\n    <a href="javascript:void(0);" id="settingsButton">Settings</a>\r\n    <a href="javascript:void(0);" id="helpButton">Help</a>\r\n</div>'
	}),
define("ui/factory/MenuUi", ["text!template/factory/menu.html"], function (e, t) {
		var n = "factoryMenuUi",
			r = function (e, t, n) {
				this.globalUiEm = e, this.gameUiEm = t, this.factory = n, this.game = n.getGame()
			};
		return r.prototype.display = function (t) {
			var r = this.game.getMeta().isMission;
			this.container = t, this.container.html(Handlebars.compile(e)({
				isMission: r,
				hasResearch: this.game.getMeta().research.length > 0,
				hasUpgrades: this.game.getMeta().upgrades.length > 0,
				hasAchievements: this.game.getMeta().achievements.length > 0,
				hasStatistics: !this.game.getMeta().isMission
			})), this.container.find("#missionsButton").click(function () {
				this.globalUiEm.invokeEvent(GlobalUiEvent.SHOW_MISSIONS)
			}.bind(this)), this.container.find("#mainGameButton").click(function () {
				this.globalUiEm.invokeEvent(GlobalUiEvent.SHOW_MAIN_GAME)
			}.bind(this)), this.container.find("#factoriesButton").click(function () {
				this.gameUiEm.invokeEvent(GameUiEvent.SHOW_FACTORIES)
			}.bind(this)), this.container.find("#researchButton").click(function () {
				this.gameUiEm.invokeEvent(GameUiEvent.SHOW_RESEARCH, this.factory.getMeta().id)
			}.bind(this)), this.container.find("#upgradesButton").click(function () {
				this.gameUiEm.invokeEvent(GameUiEvent.SHOW_UPGRADES, this.factory.getMeta().id)
			}.bind(this)), this.container.find("#achievementsButton").click(function () {
				this.gameUiEm.invokeEvent(GameUiEvent.SHOW_ACHIEVEMENTS, this.factory.getMeta().id)
			}.bind(this)), this.container.find("#helpButton").click(function () {
				this.gameUiEm.invokeEvent(GameUiEvent.SHOW_HELP)
			}.bind(this)), this.container.find("#statisticsButton").click(function () {
				this.gameUiEm.invokeEvent(GameUiEvent.SHOW_STATISTICS)
			}.bind(this)), this.container.find("#extraButton").click(function () {
				this.gameUiEm.invokeEvent(GameUiEvent.SHOW_PURCHASES)
			}.bind(this)), this.container.find("#settingsButton").click(function () {
				this.gameUiEm.invokeEvent(GameUiEvent.SHOW_SETTINGS)
			}.bind(this)), this.container.find("#timeTravelButton").click(function () {
				this.gameUiEm.invokeEvent(GameUiEvent.SHOW_TIME_TRAVEL)
			}.bind(this)), this.game.getEventManager().addListener(n, GameEvent.GAME_TICK, function () {
				this.updateButtons()
			}.bind(this)), this.updateButtons()
		}, r.prototype.updateButtons = function () {
			this.factory.getGame().getAchievementsManager().getAchievement("makingProfit") ? this.container.find("#researchButton").show() : this.container.find("#researchButton").hide(), this.factory.getGame().getAchievementsManager().getAchievement("gettingSmarter") ? this.container.find("#upgradesButton").show() : this.container.find("#upgradesButton").hide(), this.factory.getGame().getAchievementsManager().getAchievement("collectingCash2") ? this.container.find("#statisticsButton").show() : this.container.find("#statisticsButton").hide(), this.factory.getGame().getAchievementsManager().getAchievement("collectingCash") ? (this.container.find("#extraButton").show(), this.container.find("#timeTravelButton").show()) : (this.container.find("#extraButton").hide(), this.container.find("#timeTravelButton").hide())
		}, r.prototype.destroy = function () {
			this.game.getEventManager().removeListenerForType(n), this.gameUiEm.removeListenerForType(n), this.globalUiEm.removeListenerForType(n), this.container.html(""), this.container = null
		}, r
	}),
define("ui/factory/mapLayers/BackgroundLayer", [], function () {
		var e = "LayerBackground",
			t = function (e, t, n) {
				this.imageMap = e, this.factory = t, this.tileSize = n.tileSize, this.tilesX = t.getMeta().tilesX, this.tilesY = t.getMeta().tilesY
			};
		return t.prototype.display = function (t) {
			this.container = t, this.canvas = document.createElement("canvas"), this.canvas.style.position = "absolute", this.canvas.width = this.tilesX * this.tileSize, this.canvas.height = this.tilesY * this.tileSize, t.append(this.canvas), this.sprite = this.imageMap.getImage("terrains"), this.redraw(), this.factory.getEventManager().addListener(e, FactoryEvent.TILE_TYPE_CHANGED, function () {
				this.redraw()
			}.bind(this)), this.shouldDrawBuildableAreas = false, this.factory.getEventManager().addListener(e, FactoryEvent.MAP_TOOL_SELECTED, function (e) {
				this.shouldDrawBuildableAreas = !!e, this.redraw()
			}.bind(this))
		}, t.prototype.getCanvas = function () {
			return this.canvas
		}, t.prototype.redraw = function () {
			var e = this.canvas.getContext("2d");
			e.clearRect(0, 0, this.canvas.width, this.canvas.height);
			var t = {
				"undefined": {
					y: 0,
					tiles: 6
				},
				grass: {
					y: 0,
					tiles: 6
				},
				floor: {
					y: 1,
					tiles: 6
				},
				wall: {
					y: 1,
					tiles: 6
				},
				road: {
					y: 0,
					tiles: 6
				}
			};
			this.drawTerrain(e, t);
			var n = this.factory.getTiles();
			for (var r = 0; r < n.length; r++) {
				var i = n[r];
				i.getTerrain() == "wall" && this.drawTerrainBorders(e, i, 7, 1, {
					grass: true,
					road: true
				}), i.getTerrain() == "floor" && this.drawTerrainBorders(e, i, 7, 1, {
					grass: true,
					road: true
				}), i.getTerrain() == "road" && this.drawRoad(e, i, 2, {
					road: true
				}), i.getTerrain() == "wall" && this.drawTerrainBorders(e, i, 10, 6, {
					floor: true,
					grass: true,
					road: true
				})
			}
			this.shouldDrawBuildableAreas && this.drawBuildableAreas()
		}, t.prototype.drawBuildableAreas = function () {
			var e = {
					" ": "greenSelection",
					"-": "yellowSelection",
					X: "redSelection"
				},
				t = this.canvas.getContext("2d"),
				n = this.factory.getTiles();
			for (var r = 0; r < n.length; r++) {
				var i = n[r],
					s = this.imageMap.getImage(e[i.getBuildableType()]),
					o = i.getX() * this.tileSize,
					u = i.getY() * this.tileSize;
				t.drawImage(s, o, u, this.tileSize, this.tileSize)
			}
		}, t.prototype.drawTerrain = function (e, t) {
			var n = this.factory.getTiles();
			for (var r = 0; r < n.length; r++) {
				var i = n[r],
					s = i.getX() * this.tileSize,
					o = i.getY() * this.tileSize,
					u = t[i.getTerrain()],
					a = Math.floor(u.tiles * Math.random()) * (this.tileSize + 1),
					f = u.y * (this.tileSize + 1);
				e.drawImage(this.sprite, a, f, this.tileSize, this.tileSize, s, o, this.tileSize, this.tileSize)
			}
		}, t.prototype.drawTerrainBorders = function (e, t, n, r, i) {
			var s = !t.getTileInDirection("top") || i[t.getTileInDirection("top").getTerrain()],
				o = !t.getTileInDirection("right") || i[t.getTileInDirection("right").getTerrain()],
				u = !t.getTileInDirection("bottom") || i[t.getTileInDirection("bottom").getTerrain()],
				a = !t.getTileInDirection("left") || i[t.getTileInDirection("left").getTerrain()],
				f = !t.getTileInDirection("top_right") || i[t.getTileInDirection("top_right").getTerrain()],
				l = !t.getTileInDirection("top_left") || i[t.getTileInDirection("top_left").getTerrain()],
				c = !t.getTileInDirection("bottom_right") || i[t.getTileInDirection("bottom_right").getTerrain()],
				h = !t.getTileInDirection("bottom_left") || i[t.getTileInDirection("bottom_left").getTerrain()],
				p = this.tileSize,
				d = p + 1,
				v = t.getX() * this.tileSize,
				m = t.getY() * this.tileSize,
				g = n * d,
				y = (n + 1) * d,
				b = (n + 2) * d,
				w = 11,
				E = 10,
				r = Math.floor(r * Math.random()) * d;
			s && o && e.drawImage(this.sprite, 3 * d + E, b + 0, w, w, v + E, m + 0, w, w), s && a && e.drawImage(this.sprite, 3 * d + 0, b + 0, w, w, v + 0, m + 0, w, w), u && o && e.drawImage(this.sprite, 3 * d + E, b + E, w, w, v + E, m + E, w, w), u && a && e.drawImage(this.sprite, 3 * d + 0, b + E, w, w, v + 0, m + E, w, w), f && !s && !o && e.drawImage(this.sprite, 0 * d + E, b + 0, w, w, v + E, m + 0, w, w), l && !s && !a && e.drawImage(this.sprite, 0 * d + 0, b + 0, w, w, v + 0, m + 0, w, w), c && !u && !o && e.drawImage(this.sprite, 0 * d + E, b + E, w, w, v + E, m + E, w, w), h && !u && !a && e.drawImage(this.sprite, 0 * d + 0, b + E, w, w, v + 0, m + E, w, w);
			var S = a ? E : 0,
				x = o ? E : 0,
				T = s ? E : 0,
				N = u ? E : 0;
			s && e.drawImage(this.sprite, r + 0 + S, g + 0 + 0, p - S - x, w, v + 0 + S, m + 0, p - S - x, w), u && e.drawImage(this.sprite, r + 0 + S, g + 0 + E, p - S - x, w, v + 0 + S, m + E, p - S - x, w), o && e.drawImage(this.sprite, r + E, y + 0 + T, w, p - T - N, v + E, m + 0 + T, w, p - T - N), a && e.drawImage(this.sprite, r + 0, y + 0 + T, w, p - T - N, v + 0, m + 0 + T, w, p - T - N)
		}, t.prototype.drawRoad = function (e, t, n, r) {
			var i = !t.getTileInDirection("top") || r[t.getTileInDirection("top").getTerrain()],
				s = !t.getTileInDirection("right") || r[t.getTileInDirection("right").getTerrain()],
				o = !t.getTileInDirection("bottom") || r[t.getTileInDirection("bottom").getTerrain()],
				u = !t.getTileInDirection("left") || r[t.getTileInDirection("left").getTerrain()],
				a = {
					"0000": [0, 0],
					1e3: [1, 0],
					"0100": [2, 0],
					"0010": [3, 0],
					"0001": [4, 0],
					1010: [0, 1],
					"0101": [0, 2],
					1100: [0, 3],
					"0110": [1, 3],
					"0011": [2, 3],
					1001: [3, 3],
					1111: [4, 4],
					1110: [0, 4],
					"0111": [1, 4],
					1011: [2, 4],
					1101: [3, 4]
				},
				f = a[(i ? "1" : "0") + (s ? "1" : "0") + (o ? "1" : "0") + (u ? "1" : "0")];
			e.drawImage(this.sprite, f[0] * (this.tileSize + 1), (n + f[1]) * (this.tileSize + 1), this.tileSize, this.tileSize, t.getX() * this.tileSize, t.getY() * this.tileSize, this.tileSize, this.tileSize)
		}, t.prototype.destroy = function () {
			this.factory.getEventManager().removeListenerForType(e), this.container.html(""), this.container = null
		}, t
	}),
define("ui/factory/mapLayers/strategy/Default", [], function () {
		var e = function (e, t) {
			this.imageMap = e, this.tileSize = t.tileSize
		};
		return e.prototype.drawComponentLayer = function (e, t) {
			if (!t.isMainComponentContainer()) return;
			var n = t.getComponent().getMeta(),
				r = this.imageMap.getImage("components"),
				i = n.spriteX * (this.tileSize + 1),
				s = n.spriteY * (this.tileSize + 1),
				o = t.getX() * this.tileSize,
				u = t.getY() * this.tileSize,
				a = this.tileSize * n.width,
				f = this.tileSize * n.height;
			e.drawImage(r, i, s, a, f, o, u, a, f)
		}, e
	}),
	define("ui/factory/mapLayers/strategy/Track", [], function () {
		var e = function (e, t) {
			this.imageMap = e, this.tileSize = t.tileSize, this.drawMap = this._getDrawMap()
		};
		return e.prototype.drawComponentLayer = function (e, t) {
			if (!t.isMainComponentContainer()) return;
			var n = t.getComponent().getMeta(),
				r = this._getDrawParameters(t),
				i = this.imageMap.getImage(n.id),
				s = r.n * this.tileSize,
				o = 0,
				u = this.tileSize * n.width,
				a = this.tileSize * n.height,
				f = t.getX() * this.tileSize,
				l = t.getY() * this.tileSize,
				c = this.tileSize * n.width,
				h = this.tileSize * n.height,
				p = r.rotation,
				d = r.flip;
			this._drawImage(e, i, s, o, u, a, f, l, c, h, p, d), e.font = "9px Arial", e.textAlign = "center"
		}, e.prototype._getDrawParameters = function (e) {
			var t = e.getInputOutputManager().getInputsByDirection(),
				n = e.getInputOutputManager().getOutputsByDirection(),
				r = (t.top ? "1" : "0") + (t.right ? "1" : "0") + (t.bottom ? "1" : "0") + (t.left ? "1" : "0"),
				i = (n.top ? "1" : "0") + (n.right ? "1" : "0") + (n.bottom ? "1" : "0") + (n.left ? "1" : "0");
			return this.drawMap[r] && this.drawMap[r][i] ? this.drawMap[r][i] : this.drawMap.error
		}, e.prototype._drawImage = function (e, t, n, r, i, s, o, u, a, f, l, c) {
			e.save();
			var h = l * Math.PI / 180;
			c || (h = 2 * Math.PI - h), e.translate(o + a / 2, u + f / 2), e.rotate(h), c && e.scale(-1, 1), e.drawImage(t, n, r + 1, i, s, -a / 2, -f / 2, a, f), e.restore()
		}, e.prototype._getDrawMap = function () {
			return {
				error: {
					n: 17,
					rotation: 0,
					flip: false
				},
				"0000": {
					"0000": {
						n: 0,
						rotation: 0,
						flip: false
					},
					1e3: {
						n: 1,
						rotation: 0,
						flip: false
					},
					"0100": {
						n: 1,
						rotation: -90,
						flip: false
					},
					"0010": {
						n: 1,
						rotation: 180,
						flip: false
					},
					"0001": {
						n: 1,
						rotation: 90,
						flip: false
					}
				},
				1e3: {
					"0000": {
						n: 2,
						rotation: 0,
						flip: false
					},
					"0100": {
						n: 4,
						rotation: 0,
						flip: false
					},
					"0010": {
						n: 3,
						rotation: 0,
						flip: false
					},
					"0001": {
						n: 4,
						rotation: 0,
						flip: true
					},
					"0110": {
						n: 5,
						rotation: 0,
						flip: true
					},
					"0101": {
						n: 6,
						rotation: 0,
						flip: false
					},
					"0011": {
						n: 5,
						rotation: 0,
						flip: false
					},
					"0111": {
						n: 7,
						rotation: 0,
						flip: false
					}
				},
				"0100": {
					"0000": {
						n: 2,
						rotation: 270,
						flip: false
					},
					1e3: {
						n: 4,
						rotation: 90,
						flip: true
					},
					"0010": {
						n: 4,
						rotation: 270,
						flip: false
					},
					"0001": {
						n: 3,
						rotation: 270,
						flip: false
					},
					1010: {
						n: 6,
						rotation: 270,
						flip: false
					},
					1001: {
						n: 5,
						rotation: 270,
						flip: false
					},
					"0011": {
						n: 5,
						rotation: 90,
						flip: true
					},
					1011: {
						n: 7,
						rotation: 270,
						flip: false
					}
				},
				"0010": {
					"0000": {
						n: 2,
						rotation: 180,
						flip: false
					},
					1e3: {
						n: 3,
						rotation: 180,
						flip: false
					},
					"0100": {
						n: 4,
						rotation: 180,
						flip: true
					},
					"0001": {
						n: 4,
						rotation: 180,
						flip: false
					},
					1100: {
						n: 5,
						rotation: 180,
						flip: false
					},
					1001: {
						n: 5,
						rotation: 180,
						flip: true
					},
					"0101": {
						n: 6,
						rotation: 180,
						flip: false
					},
					1101: {
						n: 7,
						rotation: 180,
						flip: false
					}
				},
				"0001": {
					"0000": {
						n: 2,
						rotation: 90,
						flip: false
					},
					1e3: {
						n: 4,
						rotation: 90,
						flip: false
					},
					"0100": {
						n: 3,
						rotation: 90,
						flip: false
					},
					"0010": {
						n: 4,
						rotation: 270,
						flip: true
					},
					1100: {
						n: 5,
						rotation: 270,
						flip: true
					},
					1010: {
						n: 6,
						rotation: 90,
						flip: false
					},
					"0110": {
						n: 5,
						rotation: 90,
						flip: false
					},
					1110: {
						n: 7,
						rotation: 90,
						flip: false
					}
				},
				1100: {
					"0000": {
						n: 8,
						rotation: 0,
						flip: false
					},
					"0010": {
						n: 10,
						rotation: 0,
						flip: true
					},
					"0001": {
						n: 10,
						rotation: 270,
						flip: false
					},
					"0011": {
						n: 13,
						rotation: 270,
						flip: false
					}
				},
				1010: {
					"0000": {
						n: 9,
						rotation: 0,
						flip: false
					},
					"0100": {
						n: 11,
						rotation: 90,
						flip: false
					},
					"0001": {
						n: 11,
						rotation: 270,
						flip: false
					},
					"0101": {
						n: 12,
						rotation: 90,
						flip: true
					}
				},
				1001: {
					"0000": {
						n: 8,
						rotation: 90,
						flip: false
					},
					"0100": {
						n: 10,
						rotation: 270,
						flip: true
					},
					"0010": {
						n: 10,
						rotation: 0,
						flip: false
					},
					"0110": {
						n: 13,
						rotation: 0,
						flip: false
					}
				},
				"0110": {
					"0000": {
						n: 8,
						rotation: 270,
						flip: false
					},
					1e3: {
						n: 10,
						rotation: 180,
						flip: false
					},
					"0001": {
						n: 10,
						rotation: 90,
						flip: true
					},
					1001: {
						n: 13,
						rotation: 180,
						flip: false
					}
				},
				"0101": {
					"0000": {
						n: 9,
						rotation: 90,
						flip: false
					},
					1e3: {
						n: 11,
						rotation: 180,
						flip: false
					},
					"0010": {
						n: 11,
						rotation: 0,
						flip: false
					},
					1010: {
						n: 12,
						rotation: 0,
						flip: false
					}
				},
				"0011": {
					"0000": {
						n: 8,
						rotation: 180,
						flip: false
					},
					1e3: {
						n: 10,
						rotation: 180,
						flip: true
					},
					"0100": {
						n: 10,
						rotation: 90,
						flip: false
					},
					1100: {
						n: 13,
						rotation: 90,
						flip: false
					}
				},
				1110: {
					"0000": {
						n: 15,
						rotation: 270,
						flip: false
					},
					"0001": {
						n: 14,
						rotation: 270,
						flip: false
					}
				},
				1101: {
					"0000": {
						n: 15,
						rotation: 0,
						flip: false
					},
					"0010": {
						n: 14,
						rotation: 0,
						flip: false
					}
				},
				1011: {
					"0000": {
						n: 15,
						rotation: 90,
						flip: false
					},
					"0100": {
						n: 14,
						rotation: 90,
						flip: false
					}
				},
				"0111": {
					"0000": {
						n: 15,
						rotation: 180,
						flip: false
					},
					1e3: {
						n: 14,
						rotation: 180,
						flip: false
					}
				},
				1111: {
					"0000": {
						n: 16,
						rotation: 0,
						flip: false
					}
				}
			}
		}, e
	}),
define("ui/factory/mapLayers/ComponentLayer", ["ui/factory/mapLayers/strategy/Default", "ui/factory/mapLayers/strategy/Track"], function (e, t) {
		var n = "LayerComponent",
			r = function (n, r, i) {
				this.imageMap = n, this.factory = r, this.game = r.getGame(), this.tileSize = i.tileSize, this.tilesX = r.getMeta().tilesX, this.tilesY = r.getMeta().tilesY, this.canvas = null, this.strategies = {
					"default": new e(this.imageMap, {
						tileSize: this.tileSize
					}),
					track: new t(this.imageMap, {
						tileSize: this.tileSize
					})
				}, this.tilesWithComponentCache = []
			};
		return r.prototype.getCanvas = function () {
			return this.canvas
		}, r.prototype.display = function (e) {
			var t = this;
			this.container = e, this.canvas = document.createElement("canvas"), this.canvas.style.position = "absolute", this.canvas.width = this.tilesX * this.tileSize, this.canvas.height = this.tilesY * this.tileSize, e.append(this.canvas), this.factory.getEventManager().addListener(n, FactoryEvent.FACTORY_COMPONENTS_CHANGED, function () {
				t.buildCache(), t.redraw()
			}), this.factory.getEventManager().addListener(n, FactoryEvent.FACTORY_TICK, function (e) {
				this.game.getTicker().getIsFocused()
			}.bind(this)), t.buildCache(), t.redraw()
		}, r.prototype.buildCache = function () {
			this.tilesWithComponentCache = [];
			var e = this.factory.getTiles();
			for (var t = 0; t < e.length; t++) {
				var n = e[t],
					r = n.getComponent();
				if (!r) continue;
				this.tilesWithComponentCache.push(n)
			}
		}, r.prototype.redraw = function () {
			var e = this,
				t = this.canvas.getContext("2d");
			t.clearRect(0, 0, this.canvas.width, this.canvas.height);
			for (var n = 0; n < this.tilesWithComponentCache.length; n++) {
				var r = this.tilesWithComponentCache[n],
					i = r.getComponent().getMeta().drawStrategy;
				i || (i = "default"), e.strategies[i].drawComponentLayer(t, r)
			}
		}, r.prototype.destroy = function () {
			this.factory.getEventManager().removeListenerForType(n), this.container.html(""), this.container = null, this.canvas = null
		}, r
	}),
define("ui/factory/mapLayers/PackageLayer", [], function () {
		var e = "LayerPackage",
			t = function (e, t, n) {
				this.imageMap = e, this.factory = t, this.game = t.getGame(), this.tileSize = n.tileSize, this.packageSize = 15;
				var r = 5,
					i = this.packageSize / 3;
				this.tilesX = t.getMeta().tilesX, this.tilesY = t.getMeta().tilesY, this.resourcesMeta = this.factory.getGame().getMeta().resourcesById, this.firstPackageLocation = {
					top: {
						top: -this.packageSize + i,
						bottom: -this.tileSize / 2 - i
					},
					bottom: {
						top: this.tileSize / 2 - this.packageSize + i,
						bottom: 0 - i
					},
					right: {
						right: 0 - i,
						left: this.tileSize / 2 - this.packageSize + i
					},
					left: {
						right: -this.tileSize / 2 - i,
						left: -this.packageSize + i
					}
				}, this.movementDirectionCoefficient = {
					top: {
						top: -r,
						bottom: r
					},
					bottom: {
						top: -r,
						bottom: r
					},
					right: {
						right: r,
						left: -r
					},
					left: {
						right: r,
						left: -r
					}
				}, this.canvas = null, this.queuesCache = []
			};
		return t.prototype.getCanvas = function () {
			return this.canvas
		}, t.prototype.display = function (t) {
			var n = this;
			this.container = t, this.canvas = document.createElement("canvas"), this.canvas.style.position = "absolute", this.canvas.width = this.tilesX * this.tileSize, this.canvas.height = this.tilesY * this.tileSize, t.append(this.canvas), this.factory.getEventManager().addListener(e, FactoryEvent.FACTORY_TICK, function () {
				this.game.getTicker().getIsFocused() && this.redraw()
			}.bind(this)), this.factory.getEventManager().addListener(e, FactoryEvent.FACTORY_COMPONENTS_CHANGED, function () {
				this.buildCache(), this.redraw()
			}.bind(this)), n.buildCache(), n.redraw()
		}, t.prototype.buildCache = function () {
			this.queuesCache = [];
			var e = this.factory.getTiles();
			for (var t = 0; t < e.length; t++) {
				var n = e[t],
					r = n.getComponent();
				if (!n.getComponent() || n.getComponent().getMeta().strategy.type != "transport") continue;
				var i = n.getComponent().getStrategy().getInputQueues(),
					s = n.getComponent().getStrategy().getOutputQueues();
				this._addQueueToCache(n, i.top, "top", "bottom"), this._addQueueToCache(n, s.top, "top", "top"), this._addQueueToCache(n, s.left, "left", "left"), this._addQueueToCache(n, i.left, "left", "right"), this._addQueueToCache(n, i.right, "right", "left"), this._addQueueToCache(n, s.right, "right", "right"), this._addQueueToCache(n, s.bottom, "bottom", "bottom"), this._addQueueToCache(n, i.bottom, "bottom", "top")
			}
		}, t.prototype._addQueueToCache = function (e, t, n, r) {
			if (!t) return;
			this.queuesCache.push({
				tile: e,
				queue: t,
				posDir: n,
				moveDir: r
			})
		}, t.prototype.redraw = function () {
			var e = this.canvas.getContext("2d");
			e.clearRect(0, 0, this.canvas.width, this.canvas.height);
			var t;
			for (var n = 0; n < this.queuesCache.length; n++) t = this.queuesCache[n], this.drawQueue(t.tile, t.queue, t.posDir, t.moveDir)
		}, t.prototype.drawQueue = function (e, t, n, r) {
			var i = e.getX() * this.tileSize + this.tileSize / 2,
				s = e.getY() * this.tileSize + this.tileSize / 2,
				o, u, a, f, l;
			for (var c = 0; c < t.getLength(); c++) {
				var h = c;
				if (r == "top" || r == "left") h = t.getLength() - c - 1;
				o = t.get(h);
				if (!o) continue;
				f = this.resourcesMeta[o.getResourceId()].spriteX * (this.packageSize + 1), l = this.resourcesMeta[o.getResourceId()].spriteY * (this.packageSize + 1), n == "left" || n == "right" ? (u = i + this.firstPackageLocation[n][r] + this.movementDirectionCoefficient[n][r] * h + o.getOffset() / 2, a = s - this.packageSize / 2 + o.getOffset()) : (u = i - this.packageSize / 2 + o.getOffset(), a = s + this.firstPackageLocation[n][r] + this.movementDirectionCoefficient[n][r] * h + o.getOffset() / 2), this.canvas.getContext("2d").drawImage(this.imageMap.getImage("resources"), f, l, this.packageSize, this.packageSize, Math.round(u) + 2, Math.round(a) + 2, this.packageSize - 4, this.packageSize - 4)
			}
		}, t.prototype.destroy = function () {
			this.factory.getEventManager().removeListenerForType(e), this.container.html(""), this.container = null, this.canvas = null
		}, t
	}),
define("game/action/SellComponentAction", ["game/Component"], function (e) {
		var t = function (e, t, n) {
			this.tile = e, this.factory = e.getFactory(), this.width = t ? t : 1, this.height = n ? n : 1
		};
		return t.prototype.canSell = function () {
			return true
		}, t.prototype.sell = function () {
			for (var e = 0; e < this.width; e++)
				for (var t = 0; t < this.height; t++) {
					var n = this.factory.getTile(this.tile.getX() + e, this.tile.getY() + t);
					this._sellTile(n)
				}
		}, t.prototype._sellTile = function (e) {
			if (!e.getComponent()) return;
			var t = e.getComponent().getMeta(),
				n = e.getComponent().getX(),
				r = e.getComponent().getY(),
				i = true;
			for (var s in this.factory.getMeta().startComponents) {
				var o = this.factory.getMeta().startComponents[s];
				o.x == n && o.y == r && o.id == t.id && (i = false)
			}
			for (var u = 0; u < t.width; u++)
				for (var a = 0; a < t.height; a++) {
					var f = this.factory.getTile(n + u, r + a);
					f.setComponent(null)
				}
			this.factory.getEventManager().invokeEvent(FactoryEvent.FACTORY_COMPONENTS_CHANGED, e), i && this.factory.getGame().addMoney(t.price * t.priceRefund)
		}, t
	}),
define("game/action/UpdateTileAction", ["game/Tile"], function (e) {
		var t = function (e, t) {
			this.tile = e, this.factory = e.getFactory(), this.toolId = t
		};
		return t.prototype.canUpdate = function () {
			return !!this.toolId
		}, t.prototype.update = function () {
			var t = this.toolId.split("-");
			t[0] == "terrain" ? (this.tile.setTerrain(t[1]), this.tile.getFactory().getMeta().buildableTerrains[t[1]] ? this.tile.setBuildableType(e.BUILDABLE_YES) : this.tile.setBuildableType(e.BUILDABLE_NO)) : t[0] == "buildable" && t[1] == "road" && this.tile.setBuildableType(e.BUILDABLE_PARTIAL), this.factory.getEventManager().invokeEvent(FactoryEvent.TILE_TYPE_CHANGED, this.tile)
		}, t
	}),
	define("text!template/helper/tip.html", [], function () {
		return '<div class="tip" id="{{id}}">\r\n    {{{content}}}\r\n</div>'
	}),
	define("ui/helper/TipUi", ["text!template/helper/tip.html"], function (e) {
		var t = 0,
			n = function (e, t) {
				this.initElement = e, typeof t == "string" ? this.content = t : this.element = t, this.isVisible = false
			};
		return n.prototype.init = function () {
			var n = this;
			if (!this.element) {
				this.id = "tip" + t++;
				var r = $("body");
				r.append(Handlebars.compile(e)({
					id: this.id,
					content: this.content
				})), this.element = r.find("#" + this.id)
			}
			return this.element.css("position", "absolute").hide(), this.mouseMove = function (e) {
				n.updateLocation(e), n.display()
			}, this.mouseOut = function (e) {
				n.hide()
			}, this.initElement.bind("mousemove", this.mouseMove).bind("mouseout", this.mouseOut), this
		}, n.prototype.destroy = function () {
			return this.hide(), this.initElement.unbind("mousemove", this.mouseMove).unbind("mouseout", this.mouseOut), this
		}, n.prototype.display = function () {
			if (this.isVisible) return;
			this.isVisible = true, this.element.fadeIn(200)
		}, n.prototype.updateLocation = function (e) {
			var t = this.element.width(),
				n = this.element.height(),
				r = e.pageX - t / 2,
				i = e.pageY + 15,
				s = $(window).width(),
				o = $(window).height(),
				u = $(window).scrollLeft(),
				a = $(window).scrollTop();
			r - u < 10 && (r = u + 10), r + t - u > s - 20 && (r = s + u - t - 20), i + n - a > o - 20 && (i = e.pageY - n - 20), this.element.css("left", r).css("top", i)
		}, n.prototype.hide = function () {
			if (!this.isVisible) return;
			this.element.finish().fadeOut(200), this.isVisible = false
		}, n
	}),
define("ui/factory/mapLayers/helper/MouseInfoHelper", ["game/action/BuyComponentAction", "ui/helper/TipUi"], function (e, t) {
		var n = function (e, t, n) {
			this.factory = e, this.game = e.getGame(), this.imageMap = t, this.tileSize = n, this.lastTip = null
		};
		return n.prototype.display = function (e) {
			this.container = e
		}, n.prototype.destroy = function () {
			this.container = null
		}, n.prototype.updateMouseInformationModes = function (t, n) {
			if (!n || !t) {
				this.turnOffBuildMode(), this.turnOffCantBuildMode(), this.turnOffNotEnoughMoneyTip();
				return
			}
			var r = this.game.getMeta().componentsById[t],
				i = this.factory.isPossibleToBuildOnTypeWithSize(n.x, n.y, r.width, r.height, r),
				s = this.factory.getAreasManager().canBuildAt(n.x, n.y, r.width, r.height),
				o = !this.factory.isOnMap(n.x, n.y, r.width, r.height),
				u = this.factory.getTile(n.x, n.y),
				a = new e(u, r);
			o ? this.turnOffBuildMode() : this.updateBuildMode(t, n), i && s || o ? a.canBuy() ? (this.turnOffCantBuildMode(), this.turnOffNotEnoughMoneyTip()) : (this.updateCantBuildMode(t, n), this.updateNotEnoughMoneyTip()) : this.updateCantBuildMode(t, n)
		}, n.prototype.updateComponentSelected = function (e) {
			if (!e) {
				this.turnOffComponentSelected();
				return
			}
			var t = e.getMeta();
			if (!this.componentSelectedElement) {
				var n = "blueSelection";
				this.componentSelectedElement = $(this.imageMap.getImage(n)), this.container.append(this.componentSelectedElement)
			}
			this.componentSelectedElement.css("position", "absolute").css("opacity", .5).css("pointer-events", "none").css("left", e.getX() * this.tileSize).css("top", e.getY() * this.tileSize).css("width", this.tileSize * t.width).css("height", this.tileSize * t.height)
		}, n.prototype.turnOffComponentSelected = function () {
			this.componentSelectedElement && (this.componentSelectedElement.remove(), this.componentSelectedElement = null)
		}, n.prototype.updateBuildMode = function (e, t) {
			var n = this.game.getMeta().componentsById[e];
			if (!this.mouseSelectionElement) {
				var r = "yellowSelection";
				this.mouseSelectionElement = $(this.imageMap.getImage(r)), this.container.append(this.mouseSelectionElement)
			}
			this.mouseSelectionElement.css("position", "absolute").css("opacity", .5).css("pointer-events", "none").css("left", t.x * this.tileSize).css("top", t.y * this.tileSize).css("width", this.tileSize * n.width).css("height", this.tileSize * n.height)
		}, n.prototype.turnOffBuildMode = function () {
			this.mouseSelectionElement && (this.mouseSelectionElement.remove(), this.mouseSelectionElement = null)
		}, n.prototype.updateCantBuildMode = function (e, t) {
			var n = this.game.getMeta().componentsById[e];
			this.cantPlaceElement || (this.cantPlaceElement = $(this.imageMap.getImage("cantPlace")), this.container.append(this.cantPlaceElement)), this.cantPlaceElement.css("position", "absolute").css("opacity", .5).css("pointer-events", "none").css("left", t.x * this.tileSize).css("top", t.y * this.tileSize).css("width", this.tileSize * n.width).css("height", this.tileSize * n.height)
		}, n.prototype.turnOffCantBuildMode = function () {
			this.cantPlaceElement && (this.cantPlaceElement.remove(), this.cantPlaceElement = null)
		}, n.prototype.updateNotEnoughMoneyTip = function () {
			this.lastTip || (this.lastTip = (new t(this.container, '<span class="red">You don\'t have enough money!</span>')).init(), $("body").css("cursor", "no-drop"))
		}, n.prototype.turnOffNotEnoughMoneyTip = function () {
			this.lastTip && (this.lastTip.destroy(), this.lastTip = null, $("body").css("cursor", ""))
		}, n
	}),
define("ui/factory/mapLayers/MouseLayer", ["game/action/BuyComponentAction", "game/action/SellComponentAction", "game/action/UpdateComponentInputOutputAction", "game/action/UpdateTileAction", "ui/factory/mapLayers/helper/MouseInfoHelper"], function (e, t, n, r, i) {
		var s = "LayerMouse",
			o = function (e, t, n) {
				this.imageMap = e, this.factory = t, this.game = t.getGame(), this.tileSize = n.tileSize, this.tilesX = t.getMeta().tilesX, this.tilesY = t.getMeta().tilesY, this.selectedComponentMetaId = null, this.selectedMapToolId = null, this.clickedComponent = null, this.mouseInfoHelper = new i(this.factory, e, n.tileSize)
			};
		return o.prototype.display = function (e) {
			this.selectedComponentMetaId = null, this.container = e, this.element = $("<div />").css("position", "absolute").css("width", this.tilesX * this.tileSize).css("height", this.tilesY * this.tileSize), this.container.append(this.element), this._setupNativeMouseEvents(), this._setupMouseListeners(), this.mouseInfoHelper.display(e)
		}, o.prototype._setupMouseListeners = function () {
			var e = null,
				t = null,
				n = null;
			this.factory.getEventManager().addListener(s, FactoryEvent.FACTORY_MOUSE_MOVE, function (n) {
				if (e && e.altKeyDown) this.updateTileMeta(e), this.updateTileMeta(n);
				else if (this.selectedComponentMetaId) {
					this.mouseInfoHelper.updateMouseInformationModes(this.selectedComponentMetaId, n);
					var r = this.game.getMeta().componentsById[this.selectedComponentMetaId];
					if (e)
						if (n.leftMouseDown && !e.shiftKeyDown && r.buildByDragging == 1) this.buyComponent(e), this.buyComponent(n), this.connectComponents(t, n);
						else if (n.leftMouseDown && e.shiftKeyDown || n.rightMouseDown) this.sellComponent(e), this.sellComponent(n)
				} else e && (n.leftMouseDown && e.shiftKeyDown || n.rightMouseDown) && (this.sellComponent(e), this.sellComponent(n));
				t = n
			}.bind(this)), this.factory.getEventManager().addListener(s, FactoryEvent.FACTORY_MOUSE_OUT, function () {
				this.mouseInfoHelper.turnOffBuildMode(), this.mouseInfoHelper.turnOffCantBuildMode(), e = null, t = null
			}.bind(this)), this.factory.getEventManager().addListener(s, FactoryEvent.FACTORY_MOUSE_DOWN, function (t) {
				e = t
			}), this.factory.getEventManager().addListener(s, FactoryEvent.FACTORY_MOUSE_UP, function (t) {
				if (e && e.x == t.x && e.y == t.y) {
					var r = this.factory.getTile(t.x, t.y).getComponent();
					e.altKeyDown ? this.updateTileMeta(t) : this.selectedComponentMetaId ? e.leftMouseDown && !e.shiftKeyDown ? this.buyComponent(e) : (e.leftMouseDown && e.shiftKeyDown || e.rightMouseDown) && this.sellComponent(e) : !this.selectedComponentMetaId && (e.leftMouseDown && e.shiftKeyDown || e.rightMouseDown) ? this.sellComponent(e) : r && (n == r && (r = null), this.factory.getEventManager().invokeEvent(FactoryEvent.COMPONENT_SELECTED, r), n = r)
				}
				e = null
			}.bind(this)), this.factory.getEventManager().addListener(s, FactoryEvent.COMPONENT_META_SELECTED, function (e) {
				this.factory.getEventManager().invokeEvent(FactoryEvent.COMPONENT_SELECTED, null), this.selectedComponentMetaId = e, this.mouseInfoHelper.updateMouseInformationModes(e, t), n = null
			}.bind(this)), this.factory.getEventManager().addListener(s, FactoryEvent.MAP_TOOL_SELECTED, function (e) {
				this.factory.getEventManager().invokeEvent(FactoryEvent.COMPONENT_SELECTED, null), this.selectedMapToolId = e, n = null
			}.bind(this)), this.factory.getEventManager().addListener(s, FactoryEvent.COMPONENT_SELECTED, function (e) {
				this.mouseInfoHelper.updateComponentSelected(e)
			}.bind(this))
		}, o.prototype.updateTileMeta = function (e) {
			var t = new r(this.factory.getTile(e.x, e.y), this.selectedMapToolId);
			t.canUpdate() && t.update()
		}, o.prototype.buyComponent = function (t) {
			var n = new e(this.factory.getTile(t.x, t.y), this.game.getMeta().componentsById[this.selectedComponentMetaId]);
			n.canBuy() && n.buy()
		}, o.prototype.sellComponent = function (e) {
			var n = this.game.getMeta().componentsById[this.selectedComponentMetaId],
				r = new t(this.factory.getTile(e.x, e.y), n ? n.width : 1, n ? n.height : 1);
			r.canSell() && r.sell()
		}, o.prototype.connectComponents = function (e, t) {
			var r = new n(this.factory.getTile(e.x, e.y), this.factory.getTile(t.x, t.y));
			r.canUpdate() && r.update()
		}, o.prototype._setupNativeMouseEvents = function () {
			var e = null,
				t = this;
			this.element.get(0).addEventListener("mouseout", function () {
				t.factory.getEventManager().invokeEvent(FactoryEvent.FACTORY_MOUSE_OUT, e), e = null
			}, false), this.element.get(0).addEventListener("mousemove", function (n) {
				var r = {
					width: 1,
					height: 1
				};
				t.selectedComponentMetaId && (r = t.game.getMeta().componentsById[t.selectedComponentMetaId]);
				var i = t.element.get(0).getBoundingClientRect(),
					s = n.clientX - i.left - t.tileSize * r.width / 2,
					o = n.clientY - i.top - t.tileSize * r.height / 2,
					u = {
						x: Math.round(s / t.tileSize),
						y: Math.round(o / t.tileSize),
						leftMouseDown: n.which == 1,
						rightMouseDown: n.which == 3,
						shiftKeyDown: n.shiftKey,
						altKeyDown: n.altKey
					};
				u.x = Math.min(t.tilesX - r.width, Math.max(0, u.x)), u.y = Math.min(t.tilesY - r.height, Math.max(0, u.y));
				if (!e || e.x != u.x || e.y != u.y) t.factory.getEventManager().invokeEvent(FactoryEvent.FACTORY_MOUSE_MOVE, u), e = u
			}, false), this.element.get(0).addEventListener("mousedown", function (n) {
				t.factory.getEventManager().invokeEvent(FactoryEvent.FACTORY_MOUSE_DOWN, {
					x: e.x,
					y: e.y,
					leftMouseDown: n.which == 1,
					rightMouseDown: n.which == 3,
					shiftKeyDown: n.shiftKey,
					altKeyDown: n.altKey
				})
			}, false), this.element.get(0).addEventListener("mouseup", function () {
				t.factory.getEventManager().invokeEvent(FactoryEvent.FACTORY_MOUSE_UP, e)
			}, false)
		}, o.prototype.destroy = function () {
			this.mouseInfoHelper.destroy(), this.factory.getEventManager().removeListenerForType(s), this.container.html(""), this.container = null
		}, o
	}),
define("game/action/BuyAreaAction", [], function () {
		var e = function (e, t) {
			this.factory = e, this.areaId = t, this.areaMeta = e.getMeta().areasById[t]
		};
		return e.prototype.canBuy = function () {
			return this.areaMeta.price > this.factory.getGame().getMoney() ? false : true
		}, e.prototype.buy = function () {
			this.factory.getGame().addMoney(-this.areaMeta.price), this.factory.getAreasManager().setAreaBought(this.areaId, true)
		}, e
	}),
	define("text!template/helper/confirm.html", [], function () {
		return '<div class="confirmBg" id="{{idBg}}"></div>\r\n<div class="confirm" id="{{id}}">\r\n    <span class="title">{{title}}</span><br/>\r\n    <span class="message">{{{message}}}</span><br/>\r\n    <span class="cancelButton">{{cancelTitle}}</span>\r\n    <span class="okButton">{{okTitle}}</span>\r\n</div>'
	}),
	define("ui/helper/ConfirmUi", ["text!template/helper/confirm.html"], function (e) {
		var t = 0,
			n = function (e, n) {
				this.title = e, this.message = n, this.okTitle = "Ok", this.cancelTitle = "Cancel", this.id = "confirm" + t++, this.idBg = this.id + "Bg"
			};
		return n.prototype.setOkTitle = function (e) {
			return this.okTitle = e, this
		}, n.prototype.setCancelTitle = function (e) {
			return this.cancelTitle = e, this
		}, n.prototype.setOkCallback = function (e) {
			return this.okCallback = e, this
		}, n.prototype.setCancelCallback = function (e) {
			return this.cancelCallback = e, this
		}, n.prototype.display = function () {
			var t = this;
			return this.container = $("body"), this.container.append(Handlebars.compile(e)({
				id: this.id,
				idBg: this.idBg,
				title: this.title,
				message: this.message,
				okTitle: this.okTitle,
				cancelTitle: this.cancelTitle
			})), this.element = this.container.find("#" + this.id), this.bg = this.container.find("#" + this.idBg), this.element.find(".okButton").click(function () {
				t.hide(), t.okCallback && t.okCallback()
			}), this.element.find(".cancelButton").click(function () {
				t.hide(), t.cancelCallback && t.cancelCallback()
			}), this.element.css("top", Math.round(($(window).height() - this.element.height()) / 2)), this.element.css("left", Math.round(($(window).width() - this.element.width()) / 2)), this.bg.hide().fadeIn(200), this.element.hide().fadeIn(200), this
		}, n.prototype.hide = function () {
			var e = this;
			this.element && this.element.fadeOut(200, function () {
				e.element.remove()
			}), this.bg && this.bg.fadeOut(200, function () {
				e.bg.remove()
			})
		}, n
	}),
define("ui/factory/mapLayers/AreasLayer", ["../../../game/action/BuyAreaAction", "ui/helper/ConfirmUi", "ui/helper/AlertUi"], function (e, t, n) {
		var r = "AreasLayer",
			i = function (e, t, n) {
				this.imageMap = e, this.factory = t, this.game = t.getGame(), this.tileSize = n.tileSize, this.tilesX = t.getMeta().tilesX, this.tilesY = t.getMeta().tilesY
			};
		return i.prototype.display = function (e) {
			var t = this;
			this.container = e, this.container.append('<div id="areasLayer" style="position:absolute"></div>'), this.factory.getEventManager().addListener(r, FactoryEvent.FACTORY_COMPONENTS_CHANGED, function () {
				t.redraw()
			}), this.area = this.container.find("#areasLayer"), t.redraw()
		}, i.prototype.redraw = function () {
			this.area.html("");
			var i = this;
			this.factory.getMeta().areas.map(function (e) {
				if (i.factory.getAreasManager().getIsAreaBought(e.id)) return;
				for (var t in e.locations) {
					var n = e.locations[t],
						r = $('<div class="mapBuyArea" data-id="' + e.id + '"></div>').css("left", i.tileSize * n.x).css("top", i.tileSize * n.y).css("width", i.tileSize * n.width).css("height", i.tileSize * n.height),
						s = "";
					t == 0 && (s = $('<div class="mapBuyAreaTitle money">' + e.name + "<br />Buy for <br /><b>" + "$" + nf(e.price) + "</b></div>").css("left", i.tileSize * n.x).css("top", i.tileSize * n.y).css("width", i.tileSize * n.width).css("marginTop", i.tileSize * n.height / 2 - 23)), i.area.append(r).append(s)
				}
			});
			var s = null,
				o = false;
			this.factory.getEventManager().addListener(r, FactoryEvent.FACTORY_SCROLL_START, function () {
				o = true
			}.bind(this)), this.factory.getEventManager().addListener(r, FactoryEvent.FACTORY_SCROLL_END, function () {
				setTimeout(function () {
					o = false
				}, 100)
			}.bind(this)), i.area.find(".mapBuyArea").mouseover(function (e) {
				var t = $(this).attr("data-id");
				s != t && (i.area.find(".mapBuyArea").removeClass("mapBuyAreaOver"), i.area.find(".mapBuyArea[data-id='" + t + "']").addClass("mapBuyAreaOver")), s = t
			}), i.area.find(".mapBuyArea").mouseout(function (e) {
				var t = $(this).attr("data-id");
				i.area.find(".mapBuyArea").removeClass("mapBuyAreaOver"), s = null
			}), i.area.find(".mapBuyArea").click(function (r) {
				if (o) return;
				var s = $(this).attr("data-id"),
					u = i.factory.getMeta().areasById[s],
					a = new e(i.factory, s);
				a.canBuy() ? (new t("", '<center>Are you sure you want to buy this area for <br /><b class="money" style="font-size:1.1em">$' + nf(u.price) + "</b></center>")).setOkTitle("Yes, buy").setCancelTitle("No").setOkCallback(function () {
					var t = new e(i.factory, s);
					t.canBuy() && (t.buy(), i.redraw())
				}).display() : (new n("", "<center>You don't have enough money to buy selected area</center>")).display()
			})
		}, i.prototype.destroy = function () {
			this.factory.getEventManager().removeListenerForType(r), this.container.html(""), this.container = null, this.canvas = null
		}, i
	}),
define("ui/factory/ScreenShotUi", [], function () {
		var e = function (e, t, n, r, i) {
			this.tileSize = t.tileSize, this.tilesX = e.getMeta().tilesX, this.tilesY = e.getMeta().tilesY, this.backgroundCanvas = n, this.componentsCanvas = r, this.packagesCanvas = i
		};
		return e.prototype.open = function () {
			this.canvas = document.createElement("canvas"), this.canvas.width = this.tilesX * this.tileSize, this.canvas.height = this.tilesY * this.tileSize;
			var e = this.canvas.getContext("2d");
			e.drawImage(this.backgroundCanvas, 0, 0), e.drawImage(this.componentsCanvas, 0, 0), e.drawImage(this.packagesCanvas, 0, 0);
			var t = window.open("about:blank", "image from canvas");
			t.document.write("<html><body style='text-align:center; background-color:black; color:orangered; font-weight:bold; '><div style='margin: 0 0 8px 0;'>For sharing copy or save image to disk. Or just make a screenshot, if your monitor is big enough :p</div><img src='" + this.canvas.toDataURL("image/png") + "' alt='from canvas'/>" + "</body>" + "</html>")
		}, e
	}),
define("ui/factory/MapUi", ["ui/factory/mapLayers/BackgroundLayer", "ui/factory/mapLayers/ComponentLayer", "ui/factory/mapLayers/PackageLayer", "ui/factory/mapLayers/MouseLayer", "ui/factory/mapLayers/AreasLayer", "ui/factory/ScreenShotUi"], function (e, t, n, r, i, s) {
		var o = "FactoryMapUi",
			u = function (s, o, u) {
				this.globalUiEm = s, this.imageMap = o, this.factory = u, this.game = u.getGame(), this.tileSize = 21, this.backgroundLayer = new e(this.imageMap, this.factory, {
					tileSize: this.tileSize
				}), this.componentLayer = new t(this.imageMap, this.factory, {
					tileSize: this.tileSize
				}), this.packageLayer = new n(this.imageMap, this.factory, {
					tileSize: this.tileSize
				}), this.mouseLayer = new r(this.imageMap, this.factory, {
					tileSize: this.tileSize
				}), this.areasLayer = new i(this.imageMap, this.factory, {
					tileSize: this.tileSize
				})
			};
		return u.prototype.display = function (e) {
			this.container = e;
			var t = this.container.width(),
				n = this.container.height(),
				r = this.factory.getMeta().tilesX * this.tileSize,
				i = this.factory.getMeta().tilesY * this.tileSize;
			this.overlay = $("<div />").css("overflow", "hidden").css("margin", "0 0 0 0").css("width", Math.min(t, r)).css("height", Math.min(n, i)), this.element = $("<div />").css("position", "relative").css("width", r + "px").css("height", i + "px"), this.overlay.html(this.element), this.container.html(this.overlay), this.setupMapDragging(), this.backgroundLayer.display(this.element), this.componentLayer.display(this.element), this.packageLayer.display(this.element), this.mouseLayer.display(this.element), this.areasLayer.display(this.element), this.globalUiEm.addListener(o, FactoryEvent.OPEN_SCREENSHOT_VIEW, function (e) {
				(new s(this.factory, {
					tileSize: this.tileSize
				}, this.backgroundLayer.getCanvas(), this.componentLayer.getCanvas(), this.packageLayer.getCanvas())).open()
			}.bind(this))
		}, u.prototype.setupMapDragging = function () {
			var e = this,
				t = true;
			this.factory.getEventManager().addListener(o, FactoryEvent.COMPONENT_META_SELECTED, function (e) {
				var n = this.game.getMeta().componentsById[e];
				t = !n || !n.buildByDragging
			}.bind(this)), this.element.get(0).addEventListener("mousedown", function (r) {
				if (r.which != 1 || r.shiftKey || r.altKey || !t) return;
				var i = r.pageX,
					s = r.pageY,
					o = e.element.offset(),
					u = e.overlay.offset(),
					a = function (t) {
						var r = o.left + t.pageX - i,
							u = o.top + t.pageY - s;
						e.element.offset(n(r, u)), e.factory.getEventManager().invokeEvent(FactoryEvent.FACTORY_SCROLL_START)
					},
					f = function (t) {
						$("body").off("mousemove", a).off("mouseleave", f).off("mouseup", f), e.factory.getEventManager().invokeEvent(FactoryEvent.FACTORY_SCROLL_END)
					};
				$("body").on("mouseup", f).on("mouseleave", f).on("mousemove", a)
			});
			var n = function (t, n) {
					var i = r.left,
						s = r.left - e.element.width() + e.overlay.width();
					i < s ? t = i : t < s ? t = s : t > i && (t = i);
					var o = r.top,
						u = r.top - e.element.height() + e.overlay.height();
					return o < u ? n = o : n < u ? n = u : n > o && (n = o), {
						left: t,
						top: n
					}
				},
				r = this.overlay.offset(),
				i = r.left,
				s = r.top;
			this.overlay.width() < e.element.width() && (i = -this.factory.getMeta().startX * this.tileSize + r.left), this.overlay.height() < e.element.height() && (s = -this.factory.getMeta().startY * this.tileSize + r.top), e.element.offset(n(i, s))
		}, u.prototype.destroy = function () {
			this.factory.getEventManager().removeListenerForType(o), this.backgroundLayer.destroy(), this.componentLayer.destroy(), this.packageLayer.destroy(), this.mouseLayer.destroy(), this.areasLayer.destroy(), this.container.html(""), this.container = null
		}, u
	}),
define("text!template/factory/components.html", [], function () {
		return '<div class="componentsBox">\r\n    <div class="title">Components</div>\r\n    <table cellspacing="0" cellpadding="0" border="0">\r\n        {{#each components}}\r\n        <tr>\r\n            {{#each sub}}\r\n            <td>\r\n                <div class="buttonArea">\r\n                    {{#if name}}\r\n                    <div class="button but{{id}} {{#if isNoComponent}}buttonSelected{{/if}}" data-id="{{id}}">\r\n                        <div class="icon" data-id="{{id}}" style="{{style}}"></div>\r\n                    </div>\r\n                    {{/if}}\r\n                </div>\r\n            </td>\r\n            {{/each}}\r\n        </tr>\r\n        {{/each}}\r\n    </table>\r\n    <div style="text-align:center; margin: 10px 0 10px 0;">\r\n        <a href="javascript:void(0);" id="makeScreenShotButton" style="color:white; font-size:0.9em;">Show whole map</a>\r\n    </div>\r\n</div>'
	}),
	define("ui/factory/ComponentsUi", ["text!template/factory/components.html", "../../game/action/BuyComponentAction"], function (e, t) {
		var n = "componentsUi",
			r = function (e, t) {
				this.globalUiEm = e, this.factory = t, this.game = t.getGame(), this.lastSelectedComponentId = null, this.selectedComponentId = null
			};
		return r.prototype.display = function (r) {
			var i = this;
			this.container = r;
			var s = [];
			for (var o = 0; o < this.game.getMeta().componentsSelection.length; o++) {
				s[o] = {
					sub: []
				};
				for (var u = 0; u < this.game.getMeta().componentsSelection[o].length; u++) {
					var a = this.game.getMeta().componentsSelection[o][u],
						f = this.game.getMeta().componentsById[a];
					s[o].sub[u] = {}, f && t.possibleToBuy(this.factory, f) ? s[o].sub[u] = {
						id: f.id,
						name: f.name,
						style: "background-position: -" + f.iconX * 26 + "px -" + f.iconY * 26 + "px"
					} : a == "noComponent" && (s[o].sub[u] = {
						name: "No component",
						style: "background-position: 0px 0px"
					})
				}
			}
			this.container.html(Handlebars.compile(e)({
				components: s
			})), this.factory.getEventManager().addListener(n, FactoryEvent.COMPONENT_META_SELECTED, function (e) {
				i.selectedComponentId != e && (i.lastSelectedComponentId = i.selectedComponentId), i.selectedComponentId = e, i.container.find(".button").removeClass("buttonSelected"), i.container.find(".but" + (e ? e : "")).addClass("buttonSelected")
			}), this.container.find(".button").click(function (e) {
				var t = $(e.target).attr("data-id");
				i.factory.getEventManager().invokeEvent(FactoryEvent.COMPONENT_META_SELECTED, t ? t : null)
			}), this.container.find(".button").mouseenter(function (e) {
				var t = $(e.target).attr("data-id");
				i.factory.getEventManager().invokeEvent(FactoryEvent.HOVER_COMPONENT_META, t ? t : null)
			}), this.container.find(".button").mouseleave(function (e) {
				var t = $(e.target).attr("data-id");
				i.factory.getEventManager().invokeEvent(FactoryEvent.HOVER_COMPONENT_META, null)
			}), this.globalUiEm.addListener(n, GlobalUiEvent.KEY_PRESS, function (e) {
				var t = e.charCode !== undefined ? e.charCode : e.keyCode;
				if (t === 0 || t === 32) i.factory.getEventManager().invokeEvent(FactoryEvent.COMPONENT_META_SELECTED, i.selectedComponentId ? null : i.lastSelectedComponentId), e.preventDefault()
			}), this.container.find("#makeScreenShotButton").click(function () {
				i.globalUiEm.invokeEvent(FactoryEvent.OPEN_SCREENSHOT_VIEW)
			}), this.factory.getEventManager().invokeEvent(FactoryEvent.COMPONENT_META_SELECTED, null)
		}, r.prototype.destroy = function () {
			this.factory.getEventManager().removeListenerForType(n), this.game.getEventManager().removeListenerForType(n), this.globalUiEm.removeListenerForType(n), this.container.html(""), this.container = null
		}, r
	}),
define("text!template/factory/info.html", [], function () {
		return '<div class="componentControls">\r\n\r\n</div>\r\n<div class="componentInfo">\r\n\r\n</div>'
	}),
	define("text!template/factory/infoDetails.html", [], function () {
		return '<div class="componentGraph"></div>\r\n\r\n<div class="componentInfoArea">\r\n    <span class="title">{{component.name}}</span><br/>\r\n    {{#if isMeta}}Price: <b class="money">{{component.priceStr}}</b> &nbsp;&nbsp; {{/if}}\r\n    {{#if component.runningCostStr}}Costs: <b class="money">{{component.runningCostStr}}</b>{{/if}}\r\n    {{#if component.effectivenessStr}}<span class="effectiveness">Efficiency: <b class="effectiveness">{{component.effectivenessStr}}</b></span>{{/if}}\r\n    <br/>\r\n\r\n    <div class="specialInfo">\r\n        {{#if component.description}}<span class="description">{{component.description}}</span>{{/if}}\r\n\r\n        {{#if component.isBuyer}}\r\n        Buys {{{component.buyStr}}} {{#if component.purchasePrice}}for <b class="money">${{component.purchasePrice}}</b>{{/if}} after\r\n        every <b>{{component.interval}}</b> ticks and sends it to conveyors.\r\n        Should have <b>{{component.noOfOutputs}}</b> out conveyor(s).<br/>\r\n        {{/if}}\r\n\r\n        {{#if component.isConverter}}\r\n        After every <b>{{component.interval}}</b> ticks uses {{{component.inputStr}}} to produce\r\n        {{{component.outputStr}}}.\r\n        Should have at least <b>{{component.noOfOutputs}}</b> out conveyor(s). <br/>\r\n        {{/if}}\r\n\r\n        {{#if component.isSeller}}\r\n        Sells {{{component.sellStr}}} for <b class="money">${{component.sellPrice}}</b> after every <b>{{component.interval}}</b> ticks\r\n        {{#if component.bonusStr}}<br/>Bonus: {{{component.bonusStr}}}{{/if}}<br/>\r\n        {{/if}}\r\n\r\n        {{#if component.isGarbage}}\r\n        After every <b>{{component.interval}}</b> ticks removes <b>{{component.removeAmount}}</b> items.<br/>\r\n        {{#if isLocation}}\r\n        Stock <b>{{component.noOfItems}}</b>/{{component.max}} items\r\n        {{/if}}\r\n        {{/if}}\r\n\r\n        {{#if component.isSorter}}\r\n        Takes in any element and sorts them to different outputs.\r\n        {{/if}}\r\n\r\n        {{#if component.isResearchCenter}}\r\n        Produces <span class="research">{{{component.productionStr}}}</span> after every <b>{{component.interval}}</b> ticks. <br/>\r\n        Production bonus of each {{{component.bonusStr}}}<br/>\r\n        {{/if}}\r\n\r\n        {{#if component.isLab}}\r\n        Produces <b>{{{component.outputStr}}}</b> after every <b>{{component.interval}}</b> ticks<br/>\r\n        Production bonus of each {{{component.bonusStr}}}<br/>\r\n        {{/if}}\r\n\r\n        {{#if component.isTransport}}\r\n        Transports items from one component to another. Can take in 1 item/tick.\r\n        {{/if}}\r\n\r\n        {{#if component.stock}}\r\n        <b>Stock</b> {{#each component.stock}}\r\n        <span class="{{resourceId}}">{{resourceName}}: </span><b class="{{resource}}">{{amount}}</b>/{{max}}\r\n        {{/each}}\r\n        {{/if}}\r\n\r\n    </div>\r\n</div>\r\n'
	}),
define("text!template/factory/component/sorter.html", [], function () {
		return '{{#each locations}}\r\n{{name}}\r\n<select data-id="{{id}}">\r\n    {{#each resources}}\r\n    <option value="{{id}}">{{name}}</option>\r\n    {{/each}}\r\n</select><br/>\r\n{{/each}}\r\n'
	}),
	define("game/action/UpdateSorterSortingResource", [], function () {
		var e = function (e, t, n, r) {
			this.component = e, this.factory = e.getFactory(), this.offsetX = t, this.offsetY = n, this.resource = r
		};
		return e.prototype.canUpdate = function () {
			return this.component.getMeta().strategy.type == "sorter"
		}, e.prototype.update = function () {
			this.component.getStrategy().setSortingResource(this.offsetX, this.offsetY, this.resource), this.factory.getEventManager().invokeEvent(FactoryEvent.FACTORY_COMPONENTS_CHANGED, this.tile), this.factory.getEventManager().invokeEvent(FactoryEvent.REFRESH_COMPONENT_INFO)
		}, e
	}),
	define("ui/factory/componentUi/Sorter", ["text!template/factory/component/sorter.html", "game/action/UpdateSorterSortingResource"], function (e, t) {
		var n = function (e) {
			this.component = e, this.strategy = this.component.getStrategy()
		};
		return n.prototype.display = function (n) {
			this.container = n;
			var r = this.component.getFactory().getGame().getMeta().resources,
				i = [];
			i.push({
				id: null,
				name: "all other"
			});
			for (var s = 0; s < r.length; s++) i.push({
				id: r[s].id,
				name: r[s].name
			});
			var o = [],
				u = this.strategy.getSortingIndex();
			for (var s in u) o.push({
				id: s,
				name: s,
				resources: i,
				selected: u[s]
			});
			this.container.html(Handlebars.compile(e)({
				locations: o
			}));
			var a = this;
			this.container.find("select").each(function () {
				var e = $(this).attr("data-id").split(":");
				$(this).val(a.strategy.getSortingResource(e[0], e[1]))
			}).on("change", function () {
				var e = $(this).attr("data-id").split(":"),
					n = $(this).val(),
					r = new t(a.component, e[0], e[1], n);
				r.canUpdate() && r.update()
			})
		}, n.prototype.destroy = function () {}, n
	}),
define("game/misc/productionTree2/ProductionGraphUi", [], function () {
		var e = 25,
			t = 25,
			n = t + 8,
			r = t + 15,
			i = function (e, t) {
				this.rootNode = e, this.imageMap = t, this.positions = {}, this.maxLevel = 0
			};
		return i.prototype.display = function (e) {
			var r = {
				node: this.rootNode,
				width: 0
			};
			this.positions[this.rootNode.getId()] = r, this.calculateWidths(this.rootNode, this.positions), r.y = 0, r.x = r.width / 2 - t / 2, r.sx = 0, this.calculatePositions(this.rootNode, this.positions);
			var i = document.createElement("canvas");
			i.style.position = "absolute", i.width = r.width + t / 2, i.height = (this.maxLevel + 1) * n, this.canvas = i, this.drawElements(this.rootNode, this.positions), e.html(i), e.width(i.width)
		}, i.prototype.calculateWidths = function (e) {
			var t = e.getChildren();
			for (var n in t) {
				var i = t[n];
				this.positions[i.getId()] = {
					node: i,
					width: 0
				}, this.calculateWidths(i, this.positions), this.positions[e.getId()].width += this.positions[i.getId()].width
			}
			this.positions[e.getId()].width || (this.positions[e.getId()].width += r)
		}, i.prototype.calculatePositions = function (e) {
			this.maxLevel = Math.max(this.maxLevel, e.getLevel());
			var r = this.positions[e.getId()],
				i = e.getChildren(),
				s = r.sx;
			for (var o in i) {
				var u = i[o],
					a = this.positions[u.getId()];
				a.y = u.getLevel() * n, a.x = s + a.width / 2 - t / 2, a.sx = s, s += a.width, this.calculatePositions(u, this.positions)
			}
		}, i.prototype.drawComponentIcon = function (n, r, i) {
			var s = this.canvas.getContext("2d"),
				o = n.getComponentMeta();
			s.drawImage(this.imageMap.getImage("componentIcons"), o.iconX * (e + 1), o.iconY * (e + 1), e, e, r, i, t, t)
		}, i.prototype.drawElements = function (e) {
			var n = e.getChildren(),
				r = this.positions[e.getId()];
			for (var i in n) {
				var s = n[i],
					o = this.positions[s.getId()];
				this.drawLine(r.x + t / 2, r.y + t / 2, o.x + t / 2, o.y), this.drawElements(s, this.positions)
			}
			this.drawComponentIcon(e, r.x, r.y), this.writeToNode(r.x + t + 2, r.y + t / 2 + 4, e.amount)
		}, i.prototype.drawLine = function (e, t, n, r) {
			var i = this.canvas.getContext("2d");
			i.beginPath(), i.strokeStyle = "rgb(201,201,201)", i.lineWidth = 1, i.moveTo(e, t), i.lineTo(n, r), i.stroke()
		}, i.prototype.writeToNode = function (e, t, n) {
			var r = this.canvas.getContext("2d");
			r.font = "11px Arial", r.textAlign = "left", r.fillStyle = "#FFFFFF", r.fillText(n, e, t)
		}, i
	}),
define("game/misc/productionTree2/Node", [], function () {
		var e = function (e, t, n) {
			this.id = Math.random(), this.componentMeta = e, this.amount = t, this.level = n, this.parent = null, this.children = {}
		};
		return e.prototype.getId = function () {
			return this.id
		}, e.prototype.setAmount = function (e) {
			this.amount = e
		}, e.prototype.getAmount = function () {
			return this.amount
		}, e.prototype.getComponentMeta = function () {
			return this.componentMeta
		}, e.prototype.getLevel = function () {
			return this.level
		}, e.prototype.getParent = function () {
			return this.parent
		}, e.prototype.setParent = function (e) {
			this.parent = e
		}, e.prototype.getChildren = function () {
			return this.children
		}, e.prototype.hasChildren = function () {
			for (var e in this.children) return true;
			return false
		}, e.prototype.addChild = function (e, t) {
			this.children[e] = t
		}, e.prototype.getRoot = function () {
			return this.parent ? this.parent.getRoot() : this
		}, e.prototype.multiplyAmount = function (e) {
			this.amount *= e;
			for (var t in this.children) this.children[t].multiplyAmount(e)
		}, e.prototype.toGraph = function (e, t) {
			var n = {
				id: this.id,
				label: this.componentMeta.name + "(" + this.amount + ")",
				shape: "box",
				level: this.level
			};
			e.push(n);
			if (this.parent) {
				var r = {
					from: this.parent.getId(),
					to: this.id
				};
				t.push(r)
			}
			for (var i in this.children) this.children[i].toGraph(e, t)
		}, e.prototype.findLeastCommonMultiplier = function (e, t) {
			if (!e || !t) return 0;
			var n = Math.abs(e),
				r = Math.abs(t);
			while (r) {
				var i = r;
				r = n % r, n = i
			}
			return Math.abs(e * t / n)
		}, e
	}),
define("game/misc/productionTree2/ProductionTreeBuilder", ["./Node", "game/strategy/Factory"], function (e, t) {
		var n = function (e) {
			this.factory = e, this.meta = e.getGame().getMeta()
		};
		return n.prototype.buildTree = function (t, n) {
			var r = new e(this.meta.componentsById[t], 1, 0);
			return this._buildTree(r, n), r
		}, n.prototype._buildTree = function (t, n) {
			if (n <= 0) return;
			for (var r in this.meta.productionTree[t.getComponentMeta().id]) {
				var i = this.meta.productionTree[t.getComponentMeta().id][r],
					s = new e(this.meta.componentsById[i], 1, t.getLevel() + 1);
				this._balanceNode(t, s, r), s.setParent(t), t.addChild(r, s), this._buildTree(s, n - 1)
			}
		}, n.prototype._balanceNode = function (e, t, n) {
			var r = this.getConsumption(this.meta.componentsById[e.getComponentMeta().id], n),
				i = this.getProduction(this.meta.componentsById[t.getComponentMeta().id], n),
				s = this.findLeastCommonMultiple(r * e.getAmount(), i),
				o = Math.round(s / r),
				u = Math.round(s / i);
			if (o > e.getAmount()) {
				var a = o / e.getAmount();
				e.getRoot().multiplyAmount(a)
			}
			t.setAmount(u)
		}, n.prototype.findLeastCommonMultiple = function (e, t) {
			if (!e || !t) return 0;
			var n = Math.abs(e),
				r = Math.abs(t);
			while (r) {
				var i = r;
				r = n % r, n = i
			}
			return Math.abs(e * t / n)
		}, n.prototype.getProduction = function (e, n) {
			var r = 0,
				i = t.getStrategyClass(e.strategy.type);
			return e.strategy.type == "buyer" ? r = i.getMetaBuyAmount(e, n, this.factory) : e.strategy.type == "converter" && (r = i.getMetaProduceAmount(e, n, this.factory)), r / e.strategy.interval * 10
		}, n.prototype.getConsumption = function (e, n) {
			var r = 0,
				i = t.getStrategyClass(e.strategy.type);
			return e.strategy.type == "converter" ? r = i.getMetaUseAmount(e, n, this.factory) : e.strategy.type == "seller" && (r = i.getMetaSellAmount(e, n, this.factory)), r / e.strategy.interval * 10
		}, n
	}),
define("game/action/PassTimeAction", [], function () {
		var e = function (e, t) {
			this.game = e, this.seconds = t, this.ticks = this.seconds * this.game.getTicker().getNormalTicksPerSec(), this.profit = this.game.getStatistics().getAvgProfit() * this.ticks, this.researchPoints = this.game.getStatistics().getAvgResearchPointsProduction() * this.ticks
		};
		return e.prototype.getTicks = function () {
			return this.ticks
		}, e.prototype.getProfit = function () {
			return this.profit
		}, e.prototype.getResearchPoints = function () {
			return this.researchPoints
		}, e.prototype.canPassTime = function () {
			return this.game.getTicker().getTimeTravelTickets() > 0
		}, e.prototype.passTime = function () {
			this.game.addMoney(this.profit), this.game.addResearchPoints(this.researchPoints), this.game.getTicker().addNoOfTicks(this.ticks), this.game.getTicker().getTimeTravelTickets() > 0 && this.game.getTicker().addTimeTravelTickets(-1)
		}, e
	}),
	define("ui/factory/InfoUi", ["text!template/factory/info.html", "text!template/factory/infoDetails.html", "game/Component", "ui/factory/componentUi/Sorter", "game/misc/productionTree2/ProductionGraphUi", "game/misc/productionTree2/ProductionTreeBuilder", "game/action/PassTimeAction"], function (e, t, n, r, i, s, o) {
		var u = "componentInfoUi",
			a = function (e, t, n, i) {
				this.factory = e, this.game = e.getGame(), this.statistics = t, this.play = n, this.imageMap = i, this.selectedPosition = null, this.hoveredComponentMetaId = null, this.selectedComponentMetaId = null, this.selectedComponent = null, this.componentStrategies = {
					sorter: r
				}, this.displayedStrategy = null, this.displayedStrategyComponent = null
			};
		return a.prototype.display = function (t) {
			var n = this;
			this.container = t, this.container.html(Handlebars.compile(e)({})), this.infoContainer = this.container.find(".componentInfo"), this.controlsContainer = this.container.find(".componentControls"), this.factory.getEventManager().addListener(u, FactoryEvent.FACTORY_MOUSE_MOVE, function (e) {
				n.selectedPosition = e, n.checkWhatShouldBeDisplayed(false)
			}), this.factory.getEventManager().addListener(u, FactoryEvent.FACTORY_MOUSE_OUT, function (e) {
				n.selectedPosition = null, n.checkWhatShouldBeDisplayed(false)
			}), this.factory.getEventManager().addListener(u, FactoryEvent.FACTORY_TICK, function () {
				n.checkWhatShouldBeDisplayed(true)
			}), this.factory.getEventManager().addListener(u, FactoryEvent.REFRESH_COMPONENT_INFO, function (e) {
				n.checkWhatShouldBeDisplayed(false)
			}), this.factory.getEventManager().addListener(u, FactoryEvent.HOVER_COMPONENT_META, function (e) {
				n.hoveredComponentMetaId = e, n.checkWhatShouldBeDisplayed(false)
			}), this.factory.getEventManager().addListener(u, FactoryEvent.COMPONENT_META_SELECTED, function (e) {
				n.selectedComponentMetaId = e, n.selectedComponent = null, n.checkWhatShouldBeDisplayed(false)
			}), this.factory.getEventManager().addListener(u, FactoryEvent.COMPONENT_SELECTED, function (e) {
				n.selectedComponent = e, n.checkWhatShouldBeDisplayed(false)
			}.bind(this))
		}, a.prototype.checkWhatShouldBeDisplayed = function (e) {
			this.hoveredComponentMetaId ? e || (this.showComponentMetaInfo(this.hoveredComponentMetaId), this.hideComponentStrategy()) : this.selectedComponent ? (this.showComponentInfo(this.selectedComponent), this.showComponentStrategy(this.selectedComponent)) : this.selectedComponentMetaId ? e || (this.showComponentMetaInfo(this.selectedComponentMetaId), this.hideComponentStrategy()) : this.selectedPosition ? (this.showLocationInfo(this.selectedPosition.x, this.selectedPosition.y), this.hideComponentStrategy()) : this.showDefaultInfo()
		}, a.prototype.showComponentInfo = function (e) {
			this.showLocationInfo(e.getX(), e.getY())
		}, a.prototype.showLocationInfo = function (e, n) {
			var r = this.factory.getTile(e, n),
				i = {
					isLocation: true
				};
			i.tile = {
				x: r.getX(),
				y: r.getY(),
				terrain: r.getTerrain(),
				buildableType: r.getBuildableType()
			}, r.getComponent() ? i.component = r.getComponent().getDescriptionData() : i.component = {}, this.infoContainer.html(Handlebars.compile(t)(i))
		}, a.prototype.showComponentStrategy = function (e) {
			if (this.displayedStrategyComponent == e) return;
			var t = this.componentStrategies[e.getMeta().strategy.type];
			t ? (this.displayedStrategyComponent = e, this.displayedStrategy = new t(e), this.displayedStrategy.display(this.controlsContainer), this.controlsContainer.show()) : this.hideComponentStrategy()
		}, a.prototype.hideComponentStrategy = function () {
			this.displayedStrategy && (this.displayedStrategy.destroy(), this.displayedStrategy = null, this.displayedStrategyComponent = null), this.controlsContainer.html("").hide()
		}, a.prototype.showComponentMetaInfo = function (e) {
			var r = this.game.getMeta().componentsById[e],
				o = {
					isMeta: true,
					component: n.getMetaDescriptionData(r, this.factory)
				};
			this.infoContainer.html(Handlebars.compile(t)(o));
			var u = (new s(this.factory)).buildTree(e, 1);
			if (u.hasChildren()) {
				var a = new i(u, this.imageMap),
					f = this.infoContainer.find(".componentGraph");
				a.display(f);
				var l = this.infoContainer.find(".componentInfoArea"),
					c = l.width();
				l.width(c - f.width())
			}
		}, a.prototype.hideInfo = function () {
			this.hideComponentStrategy(), this.infoContainer.html("")
		}, a.prototype.showDefaultInfo = function () {
			if (!this.play.isDevMode()) {
				this.hideInfo();
				return
			}
			this.showIncomesData()
		}, a.prototype.showIncomesData = function () {
			this.hideInfo();
			var e = this.statistics.getFactoryAvgResearchPointsProduction(this.factory.getMeta().id),
				t = e * this.game.getTicker().getTicksPerSec();
			isNaN(t) && (t = 0);
			var n = this.statistics.getFactoryAvgProfit(this.factory.getMeta().id),
				r = n * this.game.getTicker().getTicksPerSec();
			isNaN(r) && (r = 0);
			var i = '<table cellspacing="0" cellpadding="0" border="0">';
			i += "<tr>", i += '<td align="center" width="100"></td>', i += '<td align="center" width="100"><b>15min</b></td>', i += '<td align="center" width="100"><b>1h</b></td>', i += '<td align="center" width="100"><b>24h</b></td>', i += '<td align="center" width="100"><b>1 week</b></td>', i += "<tr>", i += "<tr>", i += '<td align="center" ><b class="research">Research:</b></td>', i += '<td align="center" class="research">' + nf(t * 15 * 60) + "</td>", i += '<td align="center" class="research">' + nf(t * 60 * 60) + "</td>", i += '<td align="center" class="research">' + nf(t * 60 * 60 * 24) + "</td>", i += '<td align="center" class="research">' + nf(t * 60 * 60 * 24 * 7) + "</td>", i += "<tr>", i += "<tr>", i += '<td align="center" ><b class="money">Money</b></td>', i += '<td align="center" class="money">$' + nf(r * 15 * 60) + "</td>", i += '<td align="center" class="money">$' + nf(r * 60 * 60) + "</td>", i += '<td align="center" class="money">$' + nf(r * 60 * 60 * 24) + "</td>", i += '<td align="center" class="money">$' + nf(r * 60 * 60 * 24 * 7) + "</td>", i += "<tr>", i += "<tr>", i += '<td align="center" width="100"></td>', i += '<td align="center" width="100"><a href="javascript:void(0)" class="passTime" style="color:white" data-amount="15">PASS</a></td>', i += '<td align="center" width="100"><a href="javascript:void(0)" class="passTime" style="color:white" data-amount="60">PASS</a></td>', i += '<td align="center" width="100"><a href="javascript:void(0)" class="passTime" style="color:white" data-amount="1440">PASS</a></td>', i += '<td align="center" width="100"><a href="javascript:void(0)" class="passTime" style="color:white" data-amount="10080">PASS</a></td>', i += "<tr>", i += "</table>", this.infoContainer.html(i);
			var s = this;
			this.infoContainer.find(".passTime").click(function (e) {
				var t = $(e.target).attr("data-amount"),
					n = new o(s.game, t * 60);
				n.passTime()
			})
		}, a.prototype.destroy = function () {
			this.factory.getEventManager().removeListenerForType(u), this.container.html(""), this.container = null
		}, a
	}),
define("text!template/factory/controls.html", [], function () {
		return '<div class="controlsBox">\r\n    <a href="javascript:void(0);" id="clearPackages" class="button clearPackagesButton">Clear tracks</a>\r\n    <a href="javascript:void(0);" id="resetFactory" class="button resetFactoryButton">Reset</a>\r\n    <br style="clear:both"/>\r\n    <a href="javascript:void(0);" class="button stopButton" id="stopButton">Pause</a>\r\n    <a href="javascript:void(0);" class="button playButton" id="playButton">Play</a>\r\n    <a href="javascript:void(0);" class="button playFastButton" id="playFastButton">Fast &gt;&gt;</a>\r\n    <a href="javascript:void(0);" class="button playNormalButton" id="playNormalButton">Normal</a>\r\n    <div id="bonusTicks" class="bonusTicks">Bonus ticks: <span></span></div>\r\n</div>\r\n\r\n\r\n'
	}),
	define("game/action/ClearPackagesAction", [], function () {
		var e = function (e) {
			this.factory = e
		};
		return e.prototype.canClear = function () {
			return true
		}, e.prototype.clear = function () {
			var e = this.factory.getTiles();
			for (var t = 0; t < e.length; t++) {
				var n = e[t];
				n.getComponent() && n.getComponent().getStrategy().clearContents()
			}
			this.factory.getEventManager().invokeEvent(FactoryEvent.FACTORY_COMPONENTS_CHANGED, n)
		}, e
	}),
	define("game/action/ResetFactoryAction", ["./SellComponentAction"], function (e) {
		var t = function (e) {
			this.factory = e
		};
		return t.prototype.canReset = function () {
			return true
		}, t.prototype.reset = function () {
			var t = this.factory.getTiles();
			for (var n = 0; n < t.length; n++) {
				var r = new e(t[n], 1, 1);
				r.canSell() && r.sell()
			}
			this.factory.reset()
		}, t
	}),
	define("ui/factory/ControlsUi", ["text!template/factory/controls.html", "game/action/ClearPackagesAction", "game/action/ResetFactoryAction", "ui/helper/ConfirmUi"], function (e, t, n, r) {
		var i = "factoryControlsUi",
			s = function (e) {
				this.factory = e, this.game = e.getGame()
			};
		return s.prototype.updateControlButtons = function () {
			this.game.getTicker().getBonusTicks() ? (this.bonusTicks.show(), this.game.getTicker().getIsFastActive() ? (this.playFastButton.hide(), this.playNormalButton.show()) : (this.playFastButton.show(), this.playNormalButton.hide())) : (this.bonusTicks.hide(), this.playFastButton.hide(), this.playNormalButton.hide()), this.factory.getIsPaused() ? (this.playButton.show(), this.pauseButton.hide()) : (this.playButton.hide(), this.pauseButton.show())
		}, s.prototype.updateBonusTicksValue = function () {
			this.bonusTicks.find("span").html(nf(this.game.getTicker().getBonusTicks())), this.updateControlButtons()
		}, s.prototype.display = function (s) {
			var o = this;
			this.container = s, this.container.html(Handlebars.compile(e)()), this.game.getEventManager().addListener(i, GameEvent.TICKS_STARTED, function () {
				o.updateControlButtons()
			}), this.game.getEventManager().addListener(i, GameEvent.TICKS_STOPPED, function () {
				o.updateControlButtons()
			}), this.pauseButton = this.container.find("#stopButton"), this.playButton = this.container.find("#playButton"), this.playFastButton = this.container.find("#playFastButton"), this.playNormalButton = this.container.find("#playNormalButton"), this.bonusTicks = this.container.find("#bonusTicks"), this.clearPackagesButton = this.container.find("#clearPackages"), this.resetFactoryButton = this.container.find("#resetFactory"), this.updateControlButtons(), this.updateBonusTicksValue(), this.pauseButton.click(function () {
				o.game.getTicker().stopFast(), o.factory.setIsPaused(true), o.updateControlButtons()
			}), this.playButton.click(function () {
				o.game.getTicker().stopFast(), o.factory.setIsPaused(false), o.updateControlButtons()
			}), this.playFastButton.click(function () {
				o.game.getTicker().startFast(), o.factory.setIsPaused(false), o.updateControlButtons()
			}), this.playNormalButton.click(function () {
				o.game.getTicker().stopFast(), o.factory.setIsPaused(false), o.updateControlButtons()
			}), this.clearPackagesButton.click(function () {
				var e = new t(this.factory);
				e.canClear() && e.clear()
			}.bind(this)), this.resetFactoryButton.click(function () {
				(new r("Are you sure?", "This will remove all components from the map")).setOkCallback(function () {
					var e = new n(this.factory);
					e.canReset() && e.reset()
				}.bind(this)).display()
			}.bind(this)), this.game.getEventManager().addListener(i, GameEvent.BONUS_TICKS_UPDATED, function () {
				this.updateBonusTicksValue()
			}.bind(this))
		}, s.prototype.destroy = function () {
			this.game.getEventManager().removeListenerForType(i), this.container.html(""), this.container = null
		}, s
	}),
define("text!template/factory/mapTools.html", [], function () {
		return '<div class="mapToolsBox">\r\n    <div class="location"></div>\r\n    <div class="title">Map tools</div>\r\n    <div class="help">Press ALT to draw</div>\r\n\r\n    <div class="button buttonSelected but" data-id="">Nothing</div>\r\n    {{#each tools}}\r\n    {{#if showBreak}}\r\n    <br style="clear:both"/>\r\n    {{/if}}\r\n    <div class="button but{{id}}" data-id="{{id}}">\r\n        <div class="mapTool {{id}}" data-id="{{id}}">{{name}}</div>\r\n    </div>\r\n    {{/each}}\r\n    <br style="clear:both"/>\r\n    <br/>\r\n\r\n    <div class="title">Map data</div>\r\n    <textArea id="mapData"></textArea><br/>\r\n</div>'
	}),
	define("ui/factory/MapToolsUi", ["text!template/factory/mapTools.html"], function (e) {
		var t = "factoryMapToolsUi",
			n = function (e) {
				this.factory = e, this.game = e.getGame(), this.selectedToolId = null
			};
		return n.prototype.display = function (n) {
			var r = this;
			this.container = n;
			var i = [];
			i.push({
				id: "buildable-road",
				name: "Partial buildable area",
				showBreak: false
			});
			var s = null;
			for (var o in this.factory.getMeta().terrains) {
				var u = this.factory.getMeta().terrains[o];
				i.push({
					id: "terrain-" + u,
					name: u,
					showBreak: false
				}), s = u
			}
			this.container.html(Handlebars.compile(e)({
				tools: i
			})), r.updateMapData(), this.factory.getEventManager().addListener(t, FactoryEvent.FACTORY_MOUSE_MOVE, function (e) {
				r.container.find(".location").html(e.x + ":" + e.y)
			}), this.factory.getEventManager().addListener(t, FactoryEvent.TILE_TYPE_CHANGED, function (e) {
				r.updateMapData()
			}), this.factory.getEventManager().addListener(t, FactoryEvent.MAP_TOOL_SELECTED, function (e) {
				r.selectedToolId = e, r.container.find(".button").removeClass("buttonSelected"), r.container.find(".but" + (e ? e : "")).addClass("buttonSelected")
			}), this.factory.getEventManager().addListener(t, FactoryEvent.COMPONENT_META_SELECTED, function (e) {
				r.factory.getEventManager().invokeEvent(FactoryEvent.MAP_TOOL_SELECTED, null)
			}), this.container.find(".button").click(function (e) {
				var t = $(e.target).attr("data-id");
				r.factory.getEventManager().invokeEvent(FactoryEvent.COMPONENT_META_SELECTED, null), r.factory.getEventManager().invokeEvent(FactoryEvent.MAP_TOOL_SELECTED, t ? t : null)
			})
		}, n.prototype.updateMapData = function () {
			var e = this.factory.getTiles(),
				t = this.factory.getMeta(),
				n = {};
			for (var r in t.terrains) n[t.terrains[r]] = r;
			var i = "terrainMap: '";
			for (var r = 0; r < e.length; r++) i += n[e[r].getTerrain()], (r + 1) % t.tilesX == 0 && r > 0;
			i += "',\r\n", i += "buildMap: '";
			for (var r = 0; r < e.length; r++) i += e[r].getBuildableType(), (r + 1) % t.tilesX == 0 && r > 0;
			i += "',\r\n", this.container.find("#mapData").html(i)
		}, n.prototype.destroy = function () {
			this.factory.getEventManager().removeListenerForType(t), this.container && this.container.html(""), this.container = null
		}, n
	}),
define("text!template/factory/overview.html", [], function () {
		return '<div class="overviewBox">\r\n    <span class="miniText">Money:</span> <span class="money">$<b id="money"></b></span><br/>\r\n    <span class="miniText">Income:</span> <span class="money smallText">$<span id="income"></span></span><span class="smallText">/tick (avg)</span><br/>\r\n    <br/>\r\n    {{#if researchBought}}\r\n    <span class="miniText">Research:</span> <span class="research smallText"><span id="research"></span></span><br/>\r\n    <span class="miniText">Income:</span> <span class="research smallText"><span id="researchIncome"></span></span><span class="smallText">/tick (avg)</span><br/>\r\n    {{/if}}\r\n    <span class="miniText ticks"><span id="ticks"></span> ticks/sec</span><br/>\r\n</div>'
	}),
	define("ui/factory/OverviewUi", ["text!template/factory/overview.html"], function (e) {
		var t = "factoryOverviewUi",
			n = function (e, t) {
				this.factory = e, this.game = e.getGame(), this.statistics = t
			};
		return n.prototype.display = function (n) {
			var r = this;
			this.container = n, this.container.html(Handlebars.compile(e)({
				researchBought: !!this.game.getResearchManager().getResearch("researchCenter")
			})), this.game.getEventManager().addListener(t, GameEvent.GAME_TICK, function () {
				r.update()
			}), this.update()
		}, n.prototype.update = function () {
			$("#money").html(nf(this.game.getMoney())), $("#research").html(nf(this.game.getResearchPoints()));
			var e = this.statistics.getFactoryAvgProfit(this.factory.getMeta().id),
				t = e * this.game.getTicker().getTicksPerSec();
			$("#income").html(nf(e)), $("#incomePerSec").html(nf(t));
			var n = this.statistics.getFactoryAvgResearchPointsProduction(this.factory.getMeta().id);
			$("#researchIncome").html(nf(n)), $("#ticks").html(nf(this.game.getTicker().getActualTicksPerSec()))
		}, n.prototype.destroy = function () {
			this.game.getEventManager().removeListenerForType(t), this.container.html(""), this.container = null
		}, n
	}),
define("text!template/incentivizedAd.html", [], function () {
		return '<div class="incentivizedAdBox">\r\n    <div class="button {{#if isAvailable}}available{{/if}}">\r\n        {{#if isAvailable}}\r\n        {{message}}\r\n        {{else}}\r\n        No ad to show currently\r\n        {{/if}}\r\n    </div>\r\n</div>'
	}),
	define("ui/IncentivizedAdButtonUi", ["text!template/incentivizedAd.html", "ui/helper/AlertUi", "game/action/IncentivizedAdCompletedAction"], function (e, t, n) {
		var r = "IncentivizedAd",
			i = function (e) {
				this.play = e, this.apiEm = e.getApi().getEventManager(), this.isAdAvailable = null, this.designInterval = null
			};
		return i.prototype.display = function (e) {
			this.container = e, this.apiEm.addListener(r, ApiEvent.INCENTIVIZED_AD_STATUS, function (e) {
				this.isAdAvailable = e, this.update()
			}.bind(this)), this.apiEm.addListener(r, ApiEvent.INCENTIVIZED_AD_ABANDONED, function () {
				(new t("Incentivized add", "You left too quickly, watch the ad till the end to get the bonus! :)")).display()
			}.bind(this)), this.apiEm.invokeEvent(ApiEvent.INCENTIVIZED_AD_CHECK_STATUS), this.update()
		}, i.prototype.update = function () {
			if (this.isAdAvailable === null || !this.container) return;
			var t = new n(this.play.getGame());
			this.container.html(Handlebars.compile(e)({
				isAvailable: this.isAdAvailable,
				message: t.getMessage()
			})), this.element = this.container.find(".incentivizedAdBox"), this.element.click(function () {
				this.apiEm.invokeEvent(ApiEvent.INCENTIVIZED_AD_SHOW)
			}.bind(this))
		}, i.prototype.destroy = function () {
			this.container.html(""), this.apiEm.removeListenerForType(r), this.designInterval && clearInterval(this.designInterval)
		}, i
	}),
define("ui/FactoryUi", ["text!template/factory.html", "ui/factory/MenuUi", "ui/factory/MapUi", "ui/factory/ComponentsUi", "ui/factory/InfoUi", "ui/factory/ControlsUi", "ui/factory/MapToolsUi", "ui/factory/OverviewUi", "ui/IncentivizedAdButtonUi"], function (e, t, n, r, i, s, o, u, a) {
		var f = "FactoryUi",
			l = function (e, f, l, c, h) {
				this.globalUiEm = e, this.gameUiEm = f, this.factory = l, this.play = c, this.imageMap = h, this.game = l.getGame(), this.statistics = this.game.getStatistics(), this.menuUi = new t(this.globalUiEm, this.gameUiEm, this.factory), this.mapUi = new n(this.globalUiEm, this.imageMap, this.factory), this.componentsUi = new r(this.globalUiEm, this.factory), this.mapToolsUi = new o(this.factory), this.infoUi = new i(this.factory, this.statistics, this.play, h), this.controlsUi = new s(this.factory), this.overviewUi = new u(this.factory, this.statistics), this.incentivizedAdButtonUi = new a(this.play)
			};
		return l.prototype.display = function (t) {
			this.container = t, this.container.html(Handlebars.compile(e)());
			if (this.game.getIsPremium()) {
				$(".main").addClass("fullScreen");
				var n = this.container.find(".mapContainer");
				n.css("width", $(window).width() - 250), n.css("height", $(window).height() - 150)
			}
			this.menuUi.display(this.container.find(".menuContainer")), this.mapUi.display(this.container.find(".mapContainer")), this.componentsUi.display(this.container.find(".componentsContainer")), this.infoUi.display(this.container.find(".infoContainer")), this.controlsUi.display(this.container.find(".controlsContainer")), this.overviewUi.display(this.container.find(".overviewContainer")), this.play.isDevMode() && this.mapToolsUi.display(this.container.find(".mapToolsContainer")), this.incentivizedAdButtonUi.display(this.container.find(".incentivizedAd"))
		}, l.prototype.destroy = function () {
			this.mapUi.destroy(), this.componentsUi.destroy(), this.infoUi.destroy(), this.controlsUi.destroy(), this.overviewUi.destroy(), this.mapToolsUi.destroy(), this.incentivizedAdButtonUi.destroy(), this.game.getEventManager().removeListenerForType(f), this.container.html(""), this.container = null, $(".main").removeClass("fullScreen")
		}, l
	}),
define("text!template/research.html", [], function () {
		return '<div class="researchBox">\r\n\r\n    <span class="backButton" id="backToReactor">Back to factory</span>\r\n\r\n    <div class="header">\r\n        You have <b id="researchPoints" class="research">????</b> research points and\r\n        <b class="money">$<span id="money"></span></b>. Use it wisely!\r\n        You have researched <b>{{have}} of {{max}}</b> technologies.<br/>\r\n        <span class="miniText">Research applies to every factory.</span>\r\n    </div>\r\n    <br/>\r\n    {{#each research}}\r\n    {{#if changeGroup}}\r\n    <br style="clear:left"/><br/>\r\n    {{/if}}\r\n    <div class="researchItem" data-id="{{id}}">\r\n\r\n        <div class="icon">\r\n            <div class="iconSelf" style="{{iconStyle}}"></div>\r\n        </div>\r\n        <div class="buyButton" data-id="{{id}}">BUY</div>\r\n\r\n        {{name}}\r\n        {{#if showBoughtAndMax}}\r\n        <span class="bought"></span>/{{max}}\r\n        {{/if}}\r\n        &nbsp;&nbsp;&nbsp;&nbsp;\r\n        {{#if price}}\r\n        <span class="priceTitle">Price:</span><span class="money">{{price}}</span>\r\n        {{/if}}\r\n        {{#if priceResearchPoints}}\r\n        <span class="priceTitle">Research:</span><span class="research">{{priceResearchPoints}}</span>\r\n        {{/if}}\r\n        <br/>\r\n\r\n        <div class="description">\r\n            {{description}}\r\n        </div>\r\n\r\n    </div>\r\n    {{/each}}\r\n\r\n</div>\r\n'
	}),
define("game/action/BuyResearch", [], function () {
		var e = function (e, t) {
			this.game = e, this.researchId = t
		};
		return e.prototype.canBuy = function () {
			return this.game.getResearchManager().canPurchase(this.researchId)
		}, e.prototype.buy = function () {
			this.game.addMoney(-this.game.getResearchManager().getPrice(this.researchId)), this.game.addResearchPoints(-this.game.getResearchManager().getPriceResearchPoints(this.researchId)), this.game.getResearchManager().addResearch(this.researchId, 1), this.game.getEventManager().invokeEvent(GameEvent.RESEARCH_BOUGHT, this.researchId)
		}, e
	}),
	define("ui/ResearchUi", ["text!template/research.html", "game/action/BuyResearch"], function (e, t) {
		var n = "researchUi",
			r = function (e, t) {
				this.gameUiEm = e, this.game = t
			};
		return r.prototype.display = function (r) {
			var i = this,
				s = this.game.getResearchManager();
			this.container = r;
			var o = 0,
				u = 0;
			for (var a in this.game.getMeta().research) {
				var f = this.game.getMeta().research[a];
				o += f.max, u += s.getResearch(f.id)
			}
			var l = [];
			for (var a = 0; a < this.game.getMeta().research.length; a++) {
				var c = this.game.getMeta().research[a];
				if (!s.isVisible(c.id)) continue;
				var h = c.max ? i.game.getResearchManager().getResearch(c.id) < c.max : true;
				l.push({
					id: c.id,
					name: c.name,
					description: c.description,
					price: h ? nf(s.getPrice(c.id)) : null,
					priceResearchPoints: h ? nf(s.getPriceResearchPoints(c.id)) : null,
					max: c.max,
					showBoughtAndMax: c.max > 1,
					iconStyle: "background-position: -" + c.iconX * 26 + "px -" + c.iconY * 26 + "px"
				})
			}
			this.container.html(Handlebars.compile(e)({
				research: l,
				max: o,
				have: u
			})), this.container.find(".backButton").click(function (e) {
				this.gameUiEm.invokeEvent(GameUiEvent.SHOW_FACTORY)
			}.bind(this)), $(".researchItem").each(function () {
				var e = $(this).attr("data-id");
				$(this).find(".buyButton").click(function () {
					var n = new t(i.game, e);
					n.canBuy() && (n.buy(), i.refreshView())
				})
			}), this.game.getEventManager().addListener(n, GameEvent.GAME_TICK, function () {
				this.update()
			}.bind(this)), this.update()
		}, r.prototype.refreshView = function () {
			var e = this.container;
			this.destroy(), this.display(e)
		}, r.prototype.update = function () {
			var e = this;
			$("#researchPoints").html(nf(this.game.getResearchPoints())), $("#money").html(nf(this.game.getMoney())), $(".researchItem").each(function () {
				var t = $(this).attr("data-id"),
					n = $(this).find(".bought"),
					r = $(this).find(".buyButton");
				n.html(e.game.getResearchManager().getResearch(t)), e.game.getResearchManager().couldPurchase(t) ? r.show() : r.hide(), e.game.getResearchManager().canPurchase(t) ? r.removeClass("cantBuy") : r.addClass("cantBuy")
			})
		}, r.prototype.destroy = function () {
			this.game.getEventManager().removeListenerForType(n), this.gameUiEm.removeListenerForType(n), this.container.html(""), this.container = null
		}, r
	}),
define("text!template/upgrades.html", [], function () {
		return '<div class="upgradesBox">\r\n\r\n    <span class="backButton" id="backToReactor">Back to factory</span>\r\n\r\n    <div class="header">\r\n        You have <b class="money">$<span id="money"></span></b> to spend. Make it count!<br/>\r\n        <span class="miniText">Upgrades apply only to this area.</span>\r\n    </div>\r\n    <br/>\r\n    {{#each groups}}\r\n    {{#if isBreak}}\r\n    <br style="clear:both"/>\r\n    {{else}}\r\n    <div class="upgradeGroup">\r\n        <div class="head">\r\n            <div class="buildingIcon">\r\n                <div class="buildingIconSelf" style="{{iconStyle}}"></div>\r\n            </div>\r\n            <div class="text">{{name}}</div>\r\n\r\n            {{#each upgrades}}\r\n            {{#if isSeparator}}\r\n            <div style="width:10px; height:10px; float:right;"></div>\r\n            {{else}}\r\n            <div class="upgradeItem upgradeItem_{{action}}" data-id="{{id}}" data-action="{{action}}">\r\n                <div class="upgradeIcon" style="{{iconStyle}}"></div>\r\n\r\n\r\n                <div class="upgradePopup smallText">\r\n\r\n\r\n                    <b>{{title}}</b> {{#if isSell}}(<u>sell</u>){{/if}}<br/>\r\n                    <span>Bought: </span><b class="bought green"></b>{{#if max}}<b class="red">/{{max}}</b>{{/if}}<br/>\r\n\r\n                    {{#if isBuy}}\r\n                    {{#if isMaxed}}\r\n                    <b class="red">Maxed!</b><br/>\r\n                    {{else}}\r\n                    <span class="priceTitle">Buy for:</span><b class="money">${{buyPrice}}</b><br/>\r\n                    {{/if}}\r\n                    <br/>\r\n                    {{{description}}}\r\n                    {{/if}}\r\n\r\n                    {{#if isSell}}\r\n                    {{#if canSell}}\r\n                    <span class="priceTitle">Sell for:</span><b class="money">${{sellPrice}}</b> <span class="miniText">(refunds {{refund}})</span><br/>\r\n                    {{else}}\r\n                    <b class="red">You haven\'t bought any, can\'t sell</b><br/>\r\n                    {{/if}}\r\n                    {{/if}}\r\n\r\n                </div>\r\n            </div>\r\n            {{/if}}\r\n            {{/each}}\r\n\r\n        </div>\r\n\r\n    </div>\r\n    {{/if}}\r\n    {{/each}}\r\n\r\n</div>'
	}),
define("game/action/BuyUpgrade", [], function () {
		var e = function (e, t) {
			this.factory = e, this.game = e.getGame(), this.upgradeId = t
		};
		return e.prototype.canBuy = function () {
			return this.factory.getUpgradesManager().canPurchase(this.upgradeId)
		}, e.prototype.buy = function () {
			this.game.addMoney(-this.factory.getUpgradesManager().getPrice(this.upgradeId)), this.factory.getUpgradesManager().addUpgrade(this.upgradeId, 1), this.factory.getEventManager().invokeEvent(FactoryEvent.UPGRADE_BOUGHT, this.upgradeId)
		}, e
	}),
	define("game/action/SellUpgrade", [], function () {
		var e = function (e, t) {
			this.factory = e, this.game = e.getGame(), this.upgradeId = t
		};
		return e.prototype.canSell = function () {
			return this.factory.getUpgradesManager().canSell(this.upgradeId)
		}, e.prototype.sell = function () {
			this.game.addMoney(this.factory.getUpgradesManager().getSellPrice(this.upgradeId)), this.factory.getUpgradesManager().addUpgrade(this.upgradeId, -1)
		}, e
	}),
	define("ui/UpgradesUi", ["text!template/upgrades.html", "../game/action/BuyUpgrade", "game/action/SellUpgrade", "ui/helper/TipUi"], function (e, t, n, r) {
		var i = "upgradeUi",
			s = function (e, t) {
				this.gameUiEm = e, this.factory = t, this.game = t.getGame()
			};
		return s.prototype.display = function (s) {
			var o = this,
				u = this.factory.getUpgradesManager();
			this.container = s;
			var a = [];
			for (var f = 0; f < this.game.getMeta().upgradesLayout.length; f++) {
				var l = this.game.getMeta().upgradesLayout[f];
				if (l.type == "break") {
					a.push({
						isBreak: true
					});
					continue
				}
				var c = [];
				for (var h = 0; h < l.items.length; h++) {
					if (l.items[h] == "_") {
						c.length > 0 && c.push({
							isSeparator: true
						});
						continue
					}
					var p = this.game.getMeta().upgradesById[l.items[h]];
					p || logger.error("Group item with id " + l.items[h] + " not found!");
					if (!u.isVisible(p.id)) continue;
					var d = u.getStrategy(p.id);
					p.refund && c.push({
						id: p.id,
						action: "sell",
						isSell: true,
						canSell: u.canSell(p.id),
						sellPrice: nf(u.getSellPrice(p.id)),
						refund: p.refund * 100 + "%",
						title: d.getTitle(),
						description: d.getDescription(),
						iconStyle: "background-position: -" + p.iconX * 26 + "px -" + p.iconY * 26 + "px"
					}), c.push({
						id: p.id,
						action: "buy",
						isBuy: true,
						isMaxed: !u.couldPurchase(p.id),
						buyPrice: nf(u.getPrice(p.id)),
						title: d.getTitle(),
						description: d.getDescription(),
						iconStyle: "background-position: -" + p.iconX * 26 + "px -" + p.iconY * 26 + "px"
					})
				}
				c.reverse(), c.length > 0 && a.push({
					name: l.name,
					upgrades: c,
					iconStyle: "background-position: -" + l.iconX * 26 + "px -" + l.iconY * 26 + "px"
				})
			}
			this.container.html(Handlebars.compile(e)({
				groups: a
			})), this.container.find(".backButton").click(function (e) {
				this.gameUiEm.invokeEvent(GameUiEvent.SHOW_FACTORY)
			}.bind(this)), $(".upgradeItem").each(function () {
				var e = $(this).attr("data-id"),
					i = $(this).attr("data-action");
				(new r($(this), $(this).find(".upgradePopup"))).init(), $(this).click(function () {
					var r;
					i == "sell" ? (r = new n(o.factory, e), r.canSell() && (r.sell(), o.refreshView())) : i == "buy" && (r = new t(o.factory, e), r.canBuy() && (r.buy(), o.refreshView()))
				})
			}), this.game.getEventManager().addListener(i, GameEvent.GAME_TICK, function () {
				this.update()
			}.bind(this)), this.update()
		}, s.prototype.refreshView = function () {
			var e = this.container;
			this.destroy(), this.display(e)
		}, s.prototype.update = function () {
			var e = this;
			$("#money").html(nf(this.game.getMoney())), $(".upgradeItem").each(function () {
				var t = $(this).attr("data-id"),
					n = $(this).attr("data-action");
				$(this).find(".upgradeIcon").html(e.factory.getUpgradesManager().getUpgrade(t)), $(this).find(".upgradePopup .bought").html(e.factory.getUpgradesManager().getUpgrade(t)), n == "buy" ? e.factory.getUpgradesManager().couldPurchase(t) ? ($(this).removeClass("upgradeItemMaxed"), e.factory.getUpgradesManager().canPurchase(t) ? $(this).removeClass("upgradeItemCantBuy") : $(this).addClass("upgradeItemCantBuy")) : $(this).addClass("upgradeItemMaxed") : e.factory.getUpgradesManager().canSell(t) ? $(this).removeClass("upgradeItemCantSell") : $(this).addClass("upgradeItemCantSell")
			})
		}, s.prototype.destroy = function () {
			this.game.getEventManager().removeListenerForType(i), this.gameUiEm.removeListenerForType(i), this.container.html(""), this.container = null
		}, s
	}),
define("text!template/achievements.html", [], function () {
		return '<div class="achievementsBox">\r\n\r\n    <span class="backButton" id="backToReactor">Back to factory</span>\r\n\r\n    <br/>\r\n    {{#each achievements}}\r\n    {{#if changeGroup}}\r\n    <br style="clear:left"/><br/>\r\n    {{/if}}\r\n    <div class="item" data-id="{{id}}">\r\n\r\n        <div class="icon {{icon}}" style="float:left;"></div>\r\n        <div class="bonus">{{{bonus}}}</div>\r\n        <div class="name">\r\n            {{name}}\r\n        </div>\r\n        <br/>\r\n\r\n        <div class="requirements">\r\n            {{{requirements}}}\r\n        </div>\r\n\r\n    </div>\r\n    {{/each}}\r\n\r\n</div>'
	}),
	define("ui/AchievementsUi", ["text!template/achievements.html"], function (e) {
		var t = "achievementsUi",
			n = function (e, t) {
				this.gameUiEm = e, this.game = t, this.manager = this.game.getAchievementsManager()
			};
		return n.prototype.display = function (n) {
			var r = this;
			this.container = n;
			var i = [],
				s = this.game.getMeta().achievements;
			for (var o = 0; o < s.length; o++) {
				var u = s[o];
				this.manager.isVisible(u.id) && i.push({
					id: u.id,
					name: u.name,
					requirements: this.manager.getTesterDescriptionText(u.id),
					bonus: this.manager.getBonusDescriptionText(u.id)
				})
			}
			this.container.html(Handlebars.compile(e)({
				achievements: i
			})), this.container.find(".backButton").click(function (e) {
				r.gameUiEm.invokeEvent(GameUiEvent.SHOW_FACTORY)
			}.bind(this)), this.game.getEventManager().addListener(t, GameEvent.ACHIEVEMENT_RECEIVED, function () {
				this.update()
			}.bind(this)), this.update()
		}, n.prototype.update = function () {
			var e = this;
			this.container.find(".item").each(function () {
				var t = $(this).attr("data-id"),
					n = $(this).find(".waiting");
				e.manager.getAchievement(t) ? $(this).addClass("achieved") : $(this).removeClass("achieved")
			})
		}, n.prototype.destroy = function () {
			this.game.getEventManager().removeListenerForType(t), this.gameUiEm.removeListenerForType(t), this.container.html(""), this.container = null
		}, n
	}),
define("text!template/achievementPopup.html", [], function () {
		return '<div class="achievementPopup" id="{{idStr}}">\r\n    <span class="name">{{name}}</span>\r\n    <span class="bonus">{{{bonus}}}</span>\r\n    <br/>\r\n    <span class="requirements">{{{requirement}}}</span>\r\n</div>'
	}),
	define("ui/AchievementPopupUi", ["text!template/achievementPopup.html"], function (e) {
		var t = 0,
			n = 1,
			r = function (e, t) {
				this.game = e, this.achievementId = t, this.id = "achievementPopup" + n++, this.interval = null
			};
		return r.prototype.display = function () {
			var n = this;
			this.container = $("body");
			var r = this.game.getMeta().achievementsById[this.achievementId];
			this.container.append(Handlebars.compile(e)({
				idStr: this.id,
				name: r.name,
				requirement: this.game.getAchievementsManager().getTesterDescriptionText(r.id),
				bonus: this.game.getAchievementsManager().getBonusDescriptionText(r.id)
			})), this.element = this.container.find("#" + this.id).hide(), this.element.click(function () {
				n.hide()
			}), this.interval = setTimeout(function () {
				this.hide()
			}.bind(this), 8e3), this.element.css("left", this.container.width() / 2 - this.element.outerWidth() / 2), this.element.css("top", 150 + t * (this.element.outerHeight() + 10)), this.element.slideDown(400), t++
		}, r.prototype.hide = function () {
			var e = this;
			this.element && this.element.slideUp(400, function () {
				e.element.remove()
			}), clearTimeout(this.interval), t--
		}, r
	}),
define("text!template/help.html", [], function () {
		return '<div id="helpBg"></div>\r\n<div id="help">\r\n    <a href="javascript:void(0);" class="closeButton" style="float:right; display:block;">Close</a>\r\n\r\n    <div class="menu">\r\n        <a href="javascript:void(0);" data-id="gettingStarted">1. Getting started</a>\r\n        <a href="javascript:void(0);" data-id="ironProduction">2. Setting up iron production</a>\r\n        <a href="javascript:void(0);" data-id="labProduction">3. Setting up lab production</a>\r\n        <a href="javascript:void(0);" data-id="plasticProduction">4. Setting up plastic</a>\r\n        <a href="javascript:void(0);" data-id="sorter">5. Setting up sorter</a>\r\n        <a href="javascript:void(0);" data-id="proTips">6. Pro tips</a>\r\n        <a href="javascript:void(0);" data-id="faq">7. Frequent questions</a><br/>\r\n        <br/>\r\n        <a href="javascript:void(0);" data-id="updates">UPDATES</a>\r\n    </div>\r\n\r\n    <div class="section" id="gettingStarted">\r\n        <b class="title">Getting started</b><br/>\r\n        <img src="img/tutorial/start.png" align="left" style="margin: 3px 6px 3px 0;"/>\r\n        * <span style="color:lightblue; text-decoration:underline">Left panel contains components.</span> Click on one and then click on the map to where you would like to place it.<br/><br/>\r\n        * <span style="color:lightblue; text-decoration:underline">Use conveyors</span> to connect components, so they start producing stuff. <br/><br/>\r\n        * <span style="color:lightblue; text-decoration:underline">Make conveyors by click dragging</span> from inside the component to the component you want the conveyor to drop off.<br/><br/>\r\n        * <span style="color:lightblue; text-decoration:underline">Sell components</span> by selecting any component from left panel and right clicking on the map to clear its footprint.<br/><br/>\r\n        * <span style="color:lightblue; text-decoration:underline">Drag the map around</span> and read stats using the cursor "component".<br/>\r\n        <br style="clear:both"/>\r\n        <b class="title">Keys</b><br/>\r\n        * <u>Left click</u> - most actions, buy component etc.<br/>\r\n        * <u>Right click OR SHIFT + left click/drag</u> - Sell components by selecting any component from left panel and right clicking on the map to clear its footprint.\r\n        (You can hold down mouse and move around to clear whole area quickly.)<br/>\r\n        * <u>SPACE</u> - Toggle mouse to last selected component and back<br/>\r\n        <br/>\r\n        <b class="title">What to expect?</b><br/>\r\n        * More challenging game play as time goes on!<br/>\r\n        * Bigger and more complicated factories consisting of complicated product chains.<br/>\r\n        * Joy and happiness when you make a mess! :) <br/>\r\n        <br/>\r\n        <b class="title">Offline progress?</b><br/>\r\n        If game is closed you will get bonus ticks that allow the game to be run really fast.<br/>\r\n        <br/>\r\n    </div>\r\n\r\n\r\n    <div class="section" id="ironProduction">\r\n        <b class="title">Setting up iron production</b><br/>\r\n        <img src="img/tutorial/iron.png" align="left" style="margin: 3px 6px 3px 0;"/><br/>\r\n        In the start you should produce <b class="iron">iron</b> from <b class="ironOre">iron ore</b><br/>\r\n        <br/>\r\n        For a 100% effective layout you need 4 iron buyers, 2 iron foundry and 1 seller. <br/>\r\n        <br/>\r\n        Later as you research more technologies, these relationships change. For each component a chart shows how much of everything you need.<br/>\r\n        <br/>\r\n        Depending on your upgrades, these numbers may be very odd, then use your best judgement to get the best layout :) (Like in other places you don\'t need good judgement :p)<br/>\r\n        <br/>\r\n        Have fun!\r\n        <br style="clear:both"/>\r\n    </div>\r\n\r\n\r\n    <div class="section" id="labProduction">\r\n        <b class="title">Setting up lab production</b><br/>\r\n        <img src="img/tutorial/lab.png" align="left" style="margin: 3px 6px 3px 0;"/>\r\n        Labs give huge bonus to research centers, so use them as many as you can afford if you want to research new more advanced technologies. <br/>\r\n        <br/>\r\n        Luckily for you, setting up a lab can be quite a task. Labs require many different resources to be effective, but at the same time make production chain quite costly.<br/>\r\n        <br style="clear:both"/>\r\n    </div>\r\n\r\n\r\n    <div class="section" id="plasticProduction">\r\n        <b class="title">Setting up plastic production</b><br/>\r\n        <img src="img/tutorial/plastic.png" align="left" style="margin: 3px 6px 3px 0;"/>\r\n        Plastic production is a bit more complicated, as it also produces waste. <br/>\r\n        <br/>\r\n        Resources come out clockwise starting from top left: plastic, waste, plastic, waste and so on. Using this piece of information, you can design your layout.<br/>\r\n        <br/>\r\n        Later sorters will help to organize waste handling, additionally you can research clean production that will remove waste completely after you get electronics.<br/>\r\n        <br style="clear:both"/>\r\n    </div>\r\n\r\n\r\n    <div class="section" id="sorter">\r\n        <b class="title">Sorter</b><br/>\r\n        <img src="img/tutorial/sorter2.png" style="margin: 3px 6px 3px 0;"/><br/>\r\n        <img src="img/tutorial/sorter.png" align="left" style="margin: 3px 6px 3px 0;"/><br/>\r\n        * Sorter is a safe way to sort out waste in your production lines.<br/><br/>\r\n        * Sorter needs to be configured - <b>click on the sorter</b> and set which exit should transport waste (or some other resource)<br/><br/>\r\n    </div>\r\n\r\n\r\n    <div class="section" id="proTips">\r\n        <b class="title">Pro tips</b><br/>\r\n        <img src="img/tutorial/orderWithNumbers.png" align="left" style="margin: 3px 6px 3px 0;"/>\r\n        * Order of outputs/inputs and conveyor crossings is always <b>top -> right -> bottom -> left (clockwise)</b>. This rule works everywhere. <br/><br/>\r\n        * You can construct multiple input/output lines from/to same component. Very useful if component produces more than one resource per tick.<br/><br/>\r\n        * Producing 20 items over 10 ticks means you need two output lines to get 100% efficiency.<br/><br/>\r\n        <br style="clear:both"/>\r\n\r\n        <img src="img/tutorial/split.png" align="right" style="margin: 3px 6px 3px 0;"/>\r\n        * Splitting conveyor path can be used to sort resources, but has limited throughput.<br/><br/>\r\n        * Multiple outputs from same component can also be used for sorting, but may jam if line gets full.<br/><br/>\r\n        * Ultimately you can use sorter component, but it also has its flaws.<br/><br/>\r\n        <br style="clear:both"/>\r\n    </div>\r\n\r\n    <div class="section" id="faq">\r\n        <b class="title">Frequently asked questions</b><br/>\r\n\r\n        <b style="color:lightblue; text-decoration:underline">I found a bug</b><br/>\r\n        * You probably didn\'t :) Think through your setup 3 times, if still seems like a bug, ask forums for a solution.\r\n        Don\'t forget that this game is designed to be more difficult and challenging than an average game in the same category.<br/>\r\n        <br/>\r\n\r\n        <b style="color:lightblue; text-decoration:underline">Why can\'t I get 100% efficiency for a buyer</b><br/>\r\n        Check that you actually transport everything out from buyer. Sometimes one exit conveyor is not enough.<br/>\r\n        <br/>\r\n\r\n        <b style="color:lightblue; text-decoration:underline">Waste & plastic switched order</b><br/>\r\n        * It can happen if one of the lines gets full, therefore all resources would be sent to another output lines. <br/>\r\n        <br/>\r\n\r\n        <b style="color:lightblue; text-decoration:underline">Upgrade is useless.</b><br/>\r\n        Some upgrades may seem useless at some points - just don\'t buy them yet - they will be useful later. It is wise to think which upgrades are good for you and which are not.\r\n        For example sometimes buying 3 upgrades at once would mean you don\'t need to change your layout. But buying one of them would mean you have to redesign a lot. <br/>\r\n        If you bought an upgrade that changes production in a way you don\'t like, just sell it and all good.<br/>\r\n        <br/>\r\n\r\n    </div>\r\n\r\n    <div class="section" id="updates">\r\n        <b class="title">Updates</b><br/>\r\n\r\n        <div style="height:500px; overflow-y:scroll">\r\n\r\n            <b>V1.07</b><br/>\r\n            Quite a huge update that adds a lot of new content to the game!<br/>\r\n            + New very big factory - Terafactory!<br/>\r\n            + A lot more upgrades... like a lot!<br/>\r\n            + New late game production<br/>\r\n            + New research center with new quite fun to setup production cycle.<br/>\r\n            <br/>\r\n            As balancing late game is quite hard because of different ways how you can setup things - what do you think about the balance of new stuff? Is it too easy/too hard?<br/>\r\n            Let me know at Reddit/Kongregate - what do you think!<br/>\r\n            <br/>\r\n            If anyone wants a challenge - fit research center 4 to first map! That should be quite a challenge to do :)<br/>\r\n            <br/>\r\n\r\n            <b>V1.06</b><br/>\r\n            This is a huge balancing update! I have received a lot of feedback that it is an idle game, but still felt a bit too slow. Well now this update makes the game progress a lot faster!\r\n            Depending on your progress, it can be up to 3x faster<br/>\r\n            * Profits of most sellers increased a bit.<br/>\r\n            * Most research is now cheaper to get.<br/>\r\n            * Lots of more upgrades for late game.<br/>\r\n            * 8x more offline bonus ticks.<br/>\r\n            * Bonus tick purchase amounts doubled.<br/>\r\n            * Fixed text/image errors in help pages.<br/>\r\n            * All updates are now shown in the game help section "Updates"<br/>\r\n            * If clicking load game, it will ask for confirmation<br/>\r\n            <br/>\r\n            Premium version for factoryidle.com<br/>\r\n            Acquired with any new purchase after this release or older non consumable purchases<br/>\r\n            * Uses up whole screen.<br/>\r\n            * No adds if you make a purchase at factoryidle.com<br/>\r\n\r\n            <br/>\r\n            <b>V1.05</b><br/>\r\n            * Metals lab and gas&oil lab does not produce waste anymore. Check your builds, as probably you are sending now some stuff to waste.<br/>\r\n            * Late game balancing updates. (diesel sells with much better price, rockets research cheaper.)<br/>\r\n            <br/>\r\n\r\n            <b>V1.04</b><br/>\r\n            * background mode delay changed to 15sec. Previously was 2 minutes.<br/>\r\n            * smaller UI fixes<br/>\r\n            * Safari bugfix<br/>\r\n            * Fixed bug with avg calculation that caused it to overshoot often and then stabilizing a bit later to lower value. Special thanks to Tiogshi who actually debugged and pointed this out!\r\n            Wow!<br/>\r\n            <br/>\r\n\r\n            <b>V1.03</b><br/>\r\n            * If output/input of the component is changed, it clears its contents. This makes output order of items “less random” (though it never was random)<br/>\r\n            * button that opens whole map on new tab for screenshot or just for viewing.<br/>\r\n            * Game tells how many output conveyors element should have. Should make planning easier.<br/>\r\n            * new components and lots of new upgrades. Seriously, lots of upgrades added. New final component is rockets.. really, rockets!<br/>\r\n            <br/>\r\n\r\n            <b>V1.02</b><br/>\r\n            * Max stock of all elements except research related is increased by 4 times. Components store maximum of 20 production cycles worth of items, in most cases 200 ticks.<br/>\r\n            * Sorters are 2x more effective, basically one sorter can handle one fully loaded line. This is experimental, let’s see how it works out. It is still more effective to use splits as they\r\n            use less room.<br/>\r\n            * Cursor component will sell if right clicked.<br/>\r\n            * Increased add watching bonus ticks amount to 1000<br/>\r\n            * When running bonus ticks, it will show actual ticks/sec value. As in many cases UI makes it slower, added ticks per sec value to factories view also for longer “bonus ticks” runs.<br/>\r\n            * Fixed not seeing saved games. It happened because session key expired if game was running more than 24 hours straight and after that cloud save didn’t work + you didn’t see your saves.\r\n            It now automatically refreshes session.<br/>\r\n\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>'
	}),
define("ui/HelpUi", ["text!template/help.html"], function (e) {
		var t = "help",
			n = function (e, t) {
				this.gameUiEm = e, this.game = t, this.isVisible = false
			};
		return n.prototype.init = function () {
			return this.gameUiEm.addListener(t, GameUiEvent.SHOW_HELP, function () {
				this.display()
			}.bind(this)), this
		}, n.prototype.display = function () {
			if (this.isVisible) return;
			$("body").append(Handlebars.compile(e)({}));
			var t = this;
			this.isVisible = true;
			var n = $("#help");
			n.css("left", ($("html").width() - n.outerWidth()) / 2), n.find(".closeButton").click(function () {
				t.hide()
			});
			var r = {};
			n.find(".menu a").each(function () {
				var e = $(this).attr("data-id");
				r[e] = n.find("#" + e), $(this).click(function () {
					for (var t in r) r[t].hide();
					r[e].fadeIn()
				})
			}), $("#gettingStarted").show(), $("#helpBg").click(function () {
				t.hide()
			})
		}, n.prototype.hide = function () {
			this.isVisible = false, $("#help").remove(), $("#helpBg").remove()
		}, n.prototype.destroy = function () {
			this.hide(), this.game.getEventManager().removeListenerForType(t), this.gameUiEm.removeListenerForType(t)
		}, n
	}),
define("text!template/statistics.html", [], function () {
		return '<div class="statisticsBox">\r\n\r\n    <span class="backButton" id="backToReactor">Back to factory</span>\r\n\r\n    Expenses\r\n    <table>\r\n        <tr>\r\n            <td>Component</td>\r\n            <td>Count</td>\r\n            <td>Avg effectiveness</td>\r\n            <td>Running costs</td>\r\n            <td>Purchases</td>\r\n        </tr>\r\n    </table>\r\n\r\n\r\n    Income\r\n    <table>\r\n        <tr>\r\n            <td>Component</td>\r\n            <td>Count</td>\r\n            <td>Avg efficiency</td>\r\n            <td>Sales</td>\r\n        </tr>\r\n    </table>\r\n\r\n    Resources\r\n    <table>\r\n        <tr>\r\n            <td>Resource</td>\r\n            <td>Total produced</td>\r\n        </tr>\r\n    </table>\r\n\r\n    <div class="graph" style="height:900px;"></div>\r\n\r\n</div>'
	}),
	define("game/misc/productionTree/Node", [], function () {
		var e = function (e) {
			this.component = e, this.producers = [], this.consumpers = []
		};
		return e.prototype.getComponent = function () {
			return this.component
		}, e.prototype._addConsumerLink = function (e) {
			this.consumpers.push(e)
		}, e.prototype._addProducerLink = function (e) {
			this.producers.push(e)
		}, e.prototype.toGraph = function (e, t, n, r) {
			if (n[this.component.id]) {
				if (r > n[this.component.id].level) {
					n[this.component.id].level = r;
					for (var i in this.producers) this.producers[i].getProducerNode().toGraph(e, t, n, r + 1)
				}
				return
			}
			var s = {
				id: this.component.id,
				label: this.component.name,
				shape: "box",
				level: r
			};
			n[this.component.id] = s, e.push(s);
			for (var i in this.producers) this.producers[i].toGraph(e, t, n, r + 1), this.producers[i].getProducerNode().toGraph(e, t, n, r + 1)
		}, e
	}),
	define("game/misc/productionTree/Link", [], function () {
		var e = function (e, t, n) {
			if (!e) throw new Error("producer must be set for resource " + n);
			if (!t) throw new Error("consumer must be set for resource " + n);
			this.producerNode = e, this.consumerNode = t, this.resourceId = n, this.producerAmount = null, this.consumerAmount = null, this.calculateStuff(), this.canSupport = Math.round(this.producerAmount / this.consumerAmount * 100) / 100, this.producerNode._addConsumerLink(this), this.consumerNode._addProducerLink(this)
		};
		return e.prototype.calculateStuff = function () {
			var e, t = this.producerNode.getComponent();
			t.strategy.type == "buyer" ? (e = t.strategy.purchaseResources[this.resourceId], this.producerAmount = e.amount / t.strategy.interval) : t.strategy.type == "converter" && (e = t.strategy.production[this.resourceId], this.producerAmount = e.amount / t.strategy.interval);
			var n = this.consumerNode.getComponent();
			n.strategy.type == "converter" ? (e = n.strategy.inputResources[this.resourceId], this.consumerAmount = e.perOutputResource / n.strategy.interval) : n.strategy.type == "seller" && (e = n.strategy.resources[this.resourceId], this.consumerAmount = e.amount / n.strategy.interval)
		}, e.prototype.getProducerNode = function () {
			return this.producerNode
		}, e.prototype.getConsumerNode = function () {
			return this.consumerNode
		}, e.prototype.getResourceId = function () {
			return this.resourceId
		}, e.prototype.getCanSupport = function () {
			return this.canSupport
		}, e.prototype.getProducerAmount = function () {
			return this.producerAmount
		}, e.prototype.getConsumerAmount = function () {
			return this.consumerAmount
		}, e.prototype.toGraph = function (e, t, n, r) {
			t.push({
				from: this.producerNode.getComponent().id,
				to: this.consumerNode.getComponent().id,
				arrows: "to",
				label: Math.round(this.canSupport * 100) / 100
			})
		}, e
	}),
define("game/misc/productionTree/ProductionIndex", ["./Node", "./Link"], function (e, t) {
		var n = function (e) {
			this.meta = e, this.nodes = {}, this.producers = {}, this.consumers = {}, this.endNodes = [], this.validStrategies = {
				buyer: true,
				seller: true,
				converter: true
			}
		};
		return n.prototype.getEndNodes = function () {
			return this.endNodes
		}, n.prototype.getNode = function (e) {
			return this.nodes[e]
		}, n.prototype.build = function () {
			for (var n in this.meta.components) {
				var r = this.meta.components[n];
				if (!this.validStrategies[r.strategy.type]) continue;
				var i = new e(r);
				this.nodes[r.id] = i, this.indexComponent(r), r.strategy.type == "seller" && this.endNodes.push(i)
			}
			for (var s in this.producers)
				for (var o = 0; o < this.producers[s].length; o++) {
					var u = this.producers[s][o];
					if (!this.consumers[s]) continue;
					for (var a = 0; a < this.consumers[s].length; a++) {
						var f = this.consumers[s][a];
						new t(this.nodes[u.componentId], this.nodes[f.componentId], s)
					}
				}
			return this
		}, n.prototype.indexComponent = function (e) {
			var t = e.strategy;
			t.type == "buyer" ? this.addToProducerIndex(e.id, t.purchaseResources) : t.type == "converter" ? (this.addToProducerIndex(e.id, t.production), this.addToConsumersIndex(e.id, t.inputResources)) : t.type == "seller" && this.addToConsumersIndex(e.id, t.resources)
		}, n.prototype.addToProducerIndex = function (e, t) {
			for (var n in t) this.producers[n] || (this.producers[n] = []), this.producers[n].push({
				componentId: e,
				resourceId: n
			})
		}, n.prototype.addToConsumersIndex = function (e, t) {
			for (var n in t) this.consumers[n] || (this.consumers[n] = []), this.consumers[n].push({
				componentId: e,
				resourceId: n
			})
		}, n
	}),
define("ui/StatisticsUi", ["text!template/statistics.html", "config/Meta", "game/misc/productionTree/ProductionIndex", "../game/misc/productionTree2/ProductionGraphUi", "game/misc/productionTree2/ProductionTreeBuilder"], function (e, t, n, r, i) {
		var s = "statisticsUi",
			o = function (e, t, n) {
				this.gameUiEm = e, this.factory = t, this.imageMap = n, this.game = t.getGame(), this.manager = this.game.getAchievementsManager()
			};
		return o.prototype.display = function (t) {
			this.container = t, this.container.html(Handlebars.compile(e)({})), this.container.find(".backButton").click(function (e) {
				this.gameUiEm.invokeEvent(GameUiEvent.SHOW_FACTORY)
			}.bind(this)), this.game.getEventManager().addListener(s, GameEvent.GAME_TICK, function () {
				this.update()
			}.bind(this));
			var n = new r((new i(this.factory)).buildTree("tankSeller", 100), this.imageMap);
			n.display(this.container.find(".graph")), this.update()
		}, o.prototype.update = function () {
			var e = this
		}, o.prototype.destroy = function () {
			this.game.getEventManager().removeListenerForType(s), this.gameUiEm.removeListenerForType(s), this.container.html(""), this.container = null
		}, o
	}),
define("text!template/purchases.html", [], function () {
		return '<div id="purchasesBg"></div>\r\n<div id="purchases">\r\n    <a href="javascript:void(0);" class="closeButton" style="float:right; display:block;">Close</a>\r\n\r\n    <b>Extra</b><br/><br/>\r\n\r\n    I really like making games and have been building them from my free time for a very long time. (Check my games)<br/>\r\n\r\n    But as making games is very time consuming (I have two young children and a full time job at a startup. So if you can\r\n    relate, imagine that :p),\r\n    I highly appreciate any support - would it be ideas, comments, criticism or monetary!<br/>\r\n\r\n    With this game I have good ideas on what features to add and if you like this game, I kindly ask you to show your\r\n    support by making a\r\n    purchase. I don\'t expect these games to pay a salary, but to cover at least some of the time I put into making them.\r\n    :)<br/>\r\n    I really don\'t like monetizing strategies games use nowadays - pay for every freaking move, so most certainly I will\r\n    not follow them.<br/>\r\n    <br/>\r\n    {{#if mainSiteVersion}}\r\n    <b>Any purchase will remove ads and scales game to use whole screen. (Only if played at factoryidle.com)</b><br/>\r\n    {{/if}}\r\n    <br style="clear:both"/>\r\n\r\n\r\n    <div class="specials">\r\n        {{#each specials}}\r\n        <div class="item {{#if isBought}}boughtItem{{/if}}" data-id="{{id}}">\r\n            <div class="name">{{name}}</div>\r\n            <div class="description">{{{description}}}</div>\r\n            <div class="buy">\r\n                {{#if isBought}}\r\n                <span class="bought">Bought</span>\r\n                {{else}}\r\n                <a href="javascript:void(0);" data-purchaseId="{{id}}" class="button">Get it!</a>\r\n                {{/if}}\r\n            </div>\r\n            <div class="price">{{#if isBought}}&nbsp;{{else}}{{priceStr}}{{/if}}</div>\r\n        </div>\r\n        {{/each}}\r\n    </div>\r\n    <br style="clear:both;"/>\r\n\r\n\r\n    <table class="timeTravelTable listTable">\r\n        <tr>\r\n            <td colspan="4" class="title">Time travel</td>\r\n        </tr>\r\n        <tr>\r\n            <td colspan="4" class="description">Each ticket gives you <b>3 hour</b> income and research points. <br/>You can use them any time you like after the purchase.</td>\r\n        </tr>\r\n        {{#each timeTravelTickets}}\r\n        <tr class="item" data-id="{{id}}">\r\n            <td width="150">{{name}}</td>\r\n            <td width="40">{{priceStr}}</td>\r\n            <td class="comment">{{description}}</td>\r\n            <td width="50"><a href="javascript:void(0);" data-purchaseId="{{id}}" class="button">Get it!</a></td>\r\n        </tr>\r\n        {{/each}}\r\n    </table>\r\n\r\n\r\n    <table class="bonusTicksTable listTable">\r\n        <tr>\r\n            <td colspan="4" class="title"><b>Bonus ticks</b></td>\r\n        </tr>\r\n        <tr>\r\n            <td colspan="4" class="description">Makes game ticks run really fast - <b>up to 200ticks/sec</b><br/>(Ticks run fastest if game runs in background mode - not focused)</td>\r\n        </tr>\r\n        {{#each bonusTicks}}\r\n        <tr class="item" data-id="{{id}}">\r\n            <td width="150">{{name}}</td>\r\n            <td width="40">{{priceStr}}</td>\r\n            <td class="comment">{{description}}</td>\r\n            <td width="50"><a href="javascript:void(0);" data-purchaseId="{{id}}" class="button">Get it!</a></td>\r\n        </tr>\r\n        {{/each}}\r\n    </table>\r\n    <br style="clear:both"/>\r\n    <br/>\r\n    <span style="font-size:0.9em; color:gray">* If you have problems with purchases, write to <a href="mailto:factoryidle@inditel.ee" style="color:gray" target="_blank">factoryidle@inditel.ee</a>. Please attach your user key.</span>\r\n</div>'
	}),
define("ui/PurchasesUi", ["text!template/purchases.html", "play/UrlHandler"], function (e, t) {
		var n = "purchases",
			r = function (e, t) {
				this.gameUiEm = e, this.play = t, this.purchasesManager = this.play.getPurchasesManager()
			};
		return r.prototype.init = function () {
			return this.gameUiEm.addListener(n, GameUiEvent.SHOW_PURCHASES, function () {
				this.display()
			}.bind(this)), this
		}, r.prototype.display = function () {
			var n = this,
				r = t.identifySite(),
				i = {
					mainSiteVersion: r == "localhost" || r == "direct"
				},
				s = this.play.getMeta();
			for (var o in s.productsLayout) {
				var u = s.productsLayout[o];
				i[o] = [];
				for (var a in u) {
					var f = s.productsById[u[a]];
					if (!this.purchasesManager.isVisible(f.id)) continue;
					i[o].push({
						isItem: true,
						id: f.id,
						name: f.name,
						description: f.description,
						priceStr: f.priceStr[this.purchasesManager.getPriceKey()],
						isBought: this.purchasesManager.getIsUnlocked(f.id)
					})
				}
			}
			$("body").append(Handlebars.compile(e)(i)), this.bg = $("#purchasesBg"), this.element = $("#purchases"), this.element.css("left", ($("html").width() - this.element.outerWidth()) / 2), this.element.find(".closeButton").click(function () {
				n.hide()
			}), this.element.find(".item").click(function () {
				var e = $(this).attr("data-id");
				n.purchasesManager.getIsUnlocked(e) || n.purchasesManager.startPurchase(e, function () {
					n.hide(), n.display()
				})
			}), this.bg.click(function () {
				n.hide()
			})
		}, r.prototype.hide = function () {
			this.element && this.element.remove(), this.bg && this.bg.remove()
		}, r.prototype.destroy = function () {
			this.hide(), this.gameUiEm.removeListenerForType(n)
		}, r
	}),
define("text!template/settings.html", [], function () {
		return '<div id="settingsBg"></div>\r\n<div id="settings">\r\n    <a href="javascript:void(0);" class="closeButton" style="float:right; display:block;">Close</a>\r\n\r\n    <b class="title">User key</b><br/>\r\n    This is your unique user key. Keep it safe and have a backup!<br/>\r\n    There is no way to restore your game if this key gets lost!<br/>\r\n    <input type="text" class="userHash" id="userHash" value="{{userHash}}" name="userHash" readonly="readonly"/>\r\n    <a href="javascript:void(0)" id="copyToClipboardButton">Click here to copy to clipboard</a> or select user id and\r\n    press CTRL+C (windows) or CMD+C (mac) to copy it.\r\n    <br/>\r\n    <br/>\r\n    <b class="title">Save </b><br/>\r\n    Use manual save if you want to experiment and might need to get your game back to earlier state. Game\r\n    <b>auto saves</b> to your computer every {{localSaveInterval}} and to cloud every {{cloudSaveInterval}}.<br/>\r\n    {{#each saveSlots}}\r\n    <div class="saveSlot">\r\n        <b>{{name}}</b><br/>\r\n        <input type="button" class="saveToSlot" data-id="{{id}}" value="Save"/><br/>\r\n        <br/>\r\n        {{#if hasSave}}\r\n        {{lastSave}}<br/>\r\n        Ticks: <b>{{ticks}}</b><br/>\r\n        <input type="button" class="loadSlot" data-id="{{id}}" value="Load"/>\r\n        {{else}}\r\n        No save exists on <br/> this slot yet\r\n        <br/>\r\n        {{/if}}\r\n    </div>\r\n    {{/each}}\r\n    <br style="clear:both"/>\r\n    {{#if devMode}}\r\n    <b class="title">Load from data</b><br/>\r\n    <input type="text" id="loadData"/><input type="button" id="loadDataButton" value="Load data">\r\n    <br style="clear:both"/>\r\n    {{/if}}\r\n    <br/>\r\n    <b class="title">Switch user key</b><br/>\r\n    If you have existing user key, copy it here and click update. <br/>\r\n    This will reload the page with new account. <br/>\r\n    <br/>\r\n    <input type="text" class="updateUserHash" id="updateUserHash" value="" name="updateUserHash"/>\r\n    <input type="button" name="updateUserHashButton" id="updateUserHashButton" value="Update"/>\r\n    <br/>\r\n    <br/>\r\n    <b class="title">Reset </b><br/>\r\n    <b class="red">Resets the game</b> You have been warned! <br/>\r\n    Notice that:<br/>\r\n    * Manual saves will not be deleted and can be used to restore the game <br/>\r\n    * If you have made purchases, you keep unlocks like faster ticks, but lose consumed items like bonus ticks <br/>\r\n    <br/>\r\n    <input type="button" name="resetGame" id="resetGame" value="Reset whole game - you lose all progress!"/>\r\n\r\n    <div style="float:right">Version 1.07</div>\r\n    <br/>\r\n</div>'
	}),
define("text!template/helper/loading.html", [], function () {
		return '<div class="loadingBg" id="{{idBg}}"></div>\r\n<div class="loading" id="{{id}}">\r\n    <center>\r\n    <img src="img/loader.gif" class="icon"/><br />\r\n    <span class="message">{{{title}}}</span>\r\n    </center>\r\n</div>'
	}),
	define("ui/helper/LoadingUi", ["text!template/helper/loading.html"], function (e) {
		var t = 0,
			n = function (e) {
				this.title = e, this.title = "Loading...", this.id = "loading" + t, t++, this.idBg = this.id + "Bg"
			};
		return n.prototype.setClickCallback = function (e) {
			return this.clickCallback = e, this
		}, n.prototype.display = function () {
			var t = this;
			return this.container = $("body"), this.container.append(Handlebars.compile(e)({
				id: this.id,
				idBg: this.idBg,
				title: this.title
			})), this.element = this.container.find("#" + this.id), this.bg = this.container.find("#" + this.idBg), this.element.css("top", Math.round(($(window).height() - this.element.height()) / 2)), this.element.css("left", Math.round(($(window).width() - this.element.width()) / 2)), this.element.hide().fadeIn(200), this.bg.hide().fadeIn(200), this.clickCallback && this.bg.click(function () {
				t.clickCallback(), t.hide()
			}), this
		}, n.prototype.hide = function () {
			var e = this;
			this.element && this.element.fadeOut(200, function () {
				e.element.remove()
			}), this.bg && this.bg.fadeOut(200, function () {
				e.bg.remove()
			})
		}, n
	}),
define("ui/SettingsUi", ["text!template/settings.html", "ui/helper/LoadingUi", "ui/helper/ConfirmUi"], function (e, t, n) {
		var r = "settingsUi",
			i = function (e, t, n, r, i) {
				this.gameUiEm = e, this.play = t, this.game = n, this.userHash = r, this.saveManager = i, this.isVisible = false
			};
		return i.prototype.init = function () {
			return this.gameUiEm.addListener(r, GameUiEvent.SHOW_SETTINGS, function () {
				this.display()
			}.bind(this)), this
		}, i.prototype.display = function () {
			if (this.isVisible) return;
			var e = false,
				n = (new t).setClickCallback(function () {
					e = true
				}.bind(this)).display();
			this.saveManager.getSavesInfo(["slot1", "slot2", "slot3"], function (t) {
				if (e) return;
				n.hide(), this._display(t)
			}.bind(this))
		}, i.prototype._display = function (t) {
			var r = [];
			for (var i = 1; i <= 3; i++) {
				var s = t["slot" + i];
				r.push({
					id: "slot" + i,
					name: "Slot " + i,
					hasSave: !!s,
					lastSave: s ? dateToStr(new Date(s.timestamp * 1e3), false) : "-",
					ticks: s ? s.ver : "-"
				})
			}
			$("body").append(Handlebars.compile(e)({
				userHash: this.userHash.toString(),
				cloudSaveInterval: Math.ceil(this.saveManager.getCloudSaveInterval() / 6e4) + " minutes",
				localSaveInterval: Math.ceil(this.saveManager.getLocalSaveInterval() / 1e3) + " seconds",
				saveSlots: r,
				devMode: this.play.isDevMode()
			}));
			var o = this;
			this.isVisible = true;
			var u = $("#settings");
			u.css("left", ($("html").width() - u.outerWidth()) / 2), u.find(".closeButton").click(function () {
				o.hide()
			}), u.find("#userHash").click(function () {
				$(this).get(0).setSelectionRange(0, $(this).val().length)
			}), u.find("#updateUserHashButton").click(function () {
				var e = u.find("#updateUserHash").val();
				e && (o.userHash.updateUserHash(e), document.location = document.location)
			}), u.find("#copyToClipboardButton").click(function () {
				$("#userHash").get(0).select();
				try {
					var e = document.execCommand("copy"),
						t = e ? "successful" : "unsuccessful";
					console.log("Copying text command was " + t)
				} catch (n) {
					console.log("Oops, unable to copy")
				}
			}), u.find(".saveToSlot").click(function () {
				var e = $(this).attr("data-id");
				o.saveManager.saveManual(e, function () {
					o.hide()
				})
			}), u.find(".loadSlot").click(function () {
				var e = $(this).attr("data-id");
				(new n("Load game", "Are you sure you want to load game?")).setCancelTitle("Yes, load game").setOkTitle("Nooooo!!!").setCancelCallback(function () {
					o.saveManager.loadManual(e, function () {
						o.hide(), o.gameUiEm.invokeEvent(GameUiEvent.SHOW_FACTORIES)
					})
				}).display()
			}), u.find("#loadDataButton").click(function () {
				var e = u.find("#loadData").val();
				o.saveManager.updateGameFromSaveData({
					data: e
				}), o.hide(), o.gameUiEm.invokeEvent(GameUiEvent.SHOW_FACTORIES)
			}), u.find("#resetGame").click(function () {
				var e = (new n("Reset game", "Are you sure you want to reset the game?")).setCancelTitle("Yes, RESET GAME").setOkTitle("Nooooo!!!").setCancelCallback(function () {
					MainInstance.destroy(), MainInstance.init(true), o.destroy()
				}).display()
			}), $("#settingsBg").click(function () {
				o.hide()
			})
		}, i.prototype.hide = function () {
			this.isVisible = false, $("#settings").remove(), $("#settingsBg").remove()
		}, i.prototype.destroy = function () {
			this.hide(), this.game.getEventManager().removeListenerForType(r), this.gameUiEm.removeListenerForType(r)
		}, i
	}),
define("text!template/timeTravel.html", [], function () {
		return '<div id="timeTravelBg"></div>\r\n<div id="timeTravel">\r\n    <a href="javascript:void(0);" class="closeButton" style="float:right; display:block;">Close</a>\r\n\r\n    <b>Time travel</b><br/>\r\n    <br/>\r\n    Travel quickly through space and time to build your empire faster.<br/>\r\n    Each ticket will give you <b>3 hour</b> income and research points. <br/>\r\n    <br/>\r\n    You have <b class="tickets">{{tickets}}</b> tickets for time travel!<br/>\r\n    <a href="javascript:void(0);" class="getMore">Get more tickets</a><br style="clear:both"/>\r\n    <br/>\r\n\r\n    If you travel now you will pass <b>{{ticks}}</b> ticks and get:<br/>\r\n    <span class="money"><b>${{profit}}</b>  (<b>${{profitPerTick}}</b> per tick)</span><br/>\r\n    <span class="research"><b>{{researchPoints}}</b> research points (<b>{{researchPointsPerTick}}</b> per tick)</span><br/>\r\n    <span class="comment">\r\n        These are your combined avg incomes from all factories.<br/>\r\n        It might be wise to wait until your factories balance <a href="javascript:void(0)" class="refresh">refresh</a>\r\n    </span><br/>\r\n    {{#if hasTickets}}\r\n    <br/>\r\n    <a href="javascript:void(0);" class="travel">Use 1 ticket and travel to the future!</a><br style="clear:both"/>\r\n    {{else}}\r\n    <br/>\r\n    Unfortunately you don\'t have any tickets...\r\n    {{/if}}\r\n\r\n</div>'
	}),
define("ui/TimeTravelUi", ["text!template/timeTravel.html", "game/action/PassTimeAction"], function (e, t) {
		var n = "help",
			r = function (e, t) {
				this.gameUiEm = e, this.play = t, this.game = t.getGame(), this.isVisible = false
			};
		return r.prototype.init = function () {
			return this.gameUiEm.addListener(n, GameUiEvent.SHOW_TIME_TRAVEL, function () {
				this.display()
			}.bind(this)), this
		}, r.prototype.display = function () {
			if (this.isVisible) return;
			var n = new t(this.game, this.play.getMeta().timeTravelTicketValue * 3600);
			$("body").append(Handlebars.compile(e)({
				tickets: this.game.getTicker().getTimeTravelTickets(),
				hasTickets: this.game.getTicker().getTimeTravelTickets() > 0,
				ticks: nf(n.getTicks()),
				profit: nf(n.getProfit()),
				profitPerTick: nf(Math.round(n.getProfit() / n.getTicks())),
				researchPoints: nf(n.getResearchPoints()),
				researchPointsPerTick: nf(Math.round(n.getResearchPoints() / n.getTicks()))
			}));
			var r = this;
			this.isVisible = true;
			var i = $("#timeTravel");
			i.css("left", ($("html").width() - i.outerWidth()) / 2), i.find(".getMore").click(function () {
				this.gameUiEm.invokeEvent(GameUiEvent.SHOW_PURCHASES), this.hide()
			}.bind(this)), i.find(".travel").click(function () {
				n.canPassTime() ? (n.passTime(), r.hide(), r.display()) : alert("You don't have a ticket for time travel!")
			}), i.find(".refresh").click(function () {
				r.hide(), r.display()
			}), i.find(".closeButton").click(function () {
				r.hide()
			}), $("#timeTravelBg").click(function () {
				r.hide()
			})
		}, r.prototype.hide = function () {
			this.isVisible = false, $("#timeTravel").remove(), $("#timeTravelBg").remove()
		}, r.prototype.destroy = function () {
			this.hide(), this.game.getEventManager().removeListenerForType(n), this.gameUiEm.removeListenerForType(n)
		}, r
	}),
define("ui/GameUi", ["base/EventManager", "ui/FactoriesUi", "ui/FactoryUi", "ui/ResearchUi", "ui/UpgradesUi", "ui/AchievementsUi", "ui/AchievementPopupUi", "ui/HelpUi", "ui/StatisticsUi", "ui/PurchasesUi", "ui/SettingsUi", "ui/TimeTravelUi"], function (e, t, n, r, i, s, o, u, a, f, l, c) {
		var h = "GameUi",
			p = function (t, n, r, i) {
				this.globalUiEm = t, this.gameUiEm = new e(GameUiEvent, h), this.play = r, this.game = n, this.imageMap = i, this.focusInterval = null
			};
		return p.prototype.display = function (e) {
			this.game.getMeta().isMission && this.game.init(), this.container = e, this.setupEvents(), this.helpUi = (new u(this.gameUiEm, this.game)).init(), this.purchasesUi = (new f(this.gameUiEm, this.play)).init(), this.settingsUi = (new l(this.gameUiEm, this.play, this.game, this.play.getUserHash(), this.play.getSaveManager())).init(), this.timeTravelUi = (new c(this.gameUiEm, this.play)).init(), this._showUi("factories"), this.game.getMeta().isMission && this.gameUiEm.invokeEvent(GameUiEvent.SHOW_FACTORY, "mission")
		}, p.prototype.setupEvents = function () {
			var e = this,
				t = null;
			this.gameUiEm.addListener(h, GameUiEvent.SHOW_FACTORY, function (e) {
				e ? t = e : e = t, this._showUi("factory", e)
			}.bind(this)), this.gameUiEm.addListener(h, GameUiEvent.SHOW_FACTORIES, function () {
				this._showUi("factories")
			}.bind(this)), this.gameUiEm.addListener(h, GameUiEvent.SHOW_RESEARCH, function () {
				this._showUi("research")
			}.bind(this)), this.gameUiEm.addListener(h, GameUiEvent.SHOW_UPGRADES, function (e) {
				e ? t = e : e = t, this._showUi("upgrades", e)
			}.bind(this)), this.gameUiEm.addListener(h, GameUiEvent.SHOW_ACHIEVEMENTS, function () {
				this._showUi("achievements")
			}.bind(this)), this.gameUiEm.addListener(h, GameUiEvent.SHOW_STATISTICS, function () {
				this._showUi("statistics", t)
			}.bind(this)), this.game.getEventManager().addListener(h, GameEvent.ACHIEVEMENT_RECEIVED, function (e) {
				var t = new o(this.game, e);
				t.display()
			}.bind(this)), this.globalUiEm.addListener(h, GlobalUiEvent.FOCUS, function () {
				this.game.getEventManager().invokeEvent(GameEvent.FOCUS)
			}.bind(this)), this.globalUiEm.addListener(h, GlobalUiEvent.BLUR, function () {
				this.game.getEventManager().invokeEvent(GameEvent.BLUR)
			}.bind(this))
		}, p.prototype._showUi = function (e, o) {
			this._destroyCurrentUi(), e == "factory" ? this.currentUi = new n(this.globalUiEm, this.gameUiEm, this.game.getFactory(o), this.play, this.imageMap) : e == "factories" ? this.currentUi = new t(this.globalUiEm, this.gameUiEm, this.game) : e == "research" ? this.currentUi = new r(this.gameUiEm, this.game) : e == "upgrades" ? this.currentUi = new i(this.gameUiEm, this.game.getFactory(o)) : e == "achievements" ? this.currentUi = new s(this.gameUiEm, this.game) : e == "statistics" && (this.currentUi = new a(this.gameUiEm, this.game.getFactory(o), this.imageMap)), this.currentUi.display(this.container)
		}, p.prototype._destroyCurrentUi = function () {
			this.currentUi && (this.currentUi.destroy(), this.currentUi = null)
		}, p.prototype.destroy = function () {
			this._destroyCurrentUi(), this.helpUi.destroy(), this.purchasesUi.destroy(), this.settingsUi.destroy(), this.timeTravelUi.destroy(), this.game.getMeta().isMission && this.game.destroy(), this.globalUiEm.removeListenerForType(h), this.gameUiEm.removeListenerForType(h), this.game.getEventManager().removeListenerForType(h), this.container = null, this.focusInterval && clearInterval(this.focusInterval)
		}, p
	}),
define("text!template/missions.html", [], function () {
		return '<div id="missionSelection" class="missionSelection">\r\n    <span class="backButton" id="backToReactor">Back to factories</span>\r\n\r\n    <div class="headerXX">\r\n        These are very challenging missions.\r\n    </div>\r\n\r\n    {{#each missions}}\r\n    <div class="missionButton" data-id="{{id}}">\r\n        <div class="name">\r\n            {{name}}\r\n        </div>\r\n    </div>\r\n    {{/each}}\r\n</div>'
	}),
	define("ui/MissionsUi", ["text!template/missions.html"], function (e) {
		var t = "missionsUi",
			n = function (e, t) {
				this.globalUiEm = e, this.missions = t
			};
		return n.prototype.display = function (t) {
			var n = this;
			this.container = t;
			var r = [];
			for (var i in this.missions) {
				var s = this.missions[i];
				r.push({
					id: s.id,
					name: s.name,
					isBought: true
				})
			}
			this.container.html(Handlebars.compile(e)({
				missions: r
			})), this.container.find(".missionButton").click(function (e) {
				var t = $(this).attr("data-id");
				n.globalUiEm.invokeEvent(GlobalUiEvent.SHOW_MISSION, t)
			})
		}, n.prototype.destroy = function () {
			this.globalUiEm.removeListenerForType(t), this.container && this.container.html(""), this.container = null
		}, n
	}),
	define("text!template/runningInBackgroundInfoUi.html", [], function () {
		return '<div class="runningInBackgroundInfoUiBg" id="runningInBackgroundInfoUi"></div>\r\n<div class="runningInBackgroundInfoUi">\r\n    <b>Background mode active</b><br/>\r\n    <br/>\r\n    Don\'t worry, game runs at <b class="green">normal speed</b>, just uses a lot less CPU (power) thanks to not updating some graphical\r\n    elements.<br/>\r\n    <br/>\r\n    <span class="green">Just focus (click) the game to deactivate</span>\r\n</div>'
	}),
	define("ui/RunningInBackgroundInfoUi", ["text!template/runningInBackgroundInfoUi.html"], function (e) {
		var t = "RunningInBackgroundInfoUi",
			n = 15e3,
			r = function (e) {
				this.globalUiEm = e, this.timer = null
			};
		return r.prototype.init = function () {
			this.globalUiEm.addListener(t, GlobalUiEvent.FOCUS, function () {
				this.hide()
			}.bind(this)), this.globalUiEm.addListener(t, GlobalUiEvent.BLUR, function () {
				this.delayedDisplay()
			}.bind(this))
		}, r.prototype.destroy = function () {
			this.globalUiEm.removeListenerForType(t)
		}, r.prototype.delayedDisplay = function () {
			this.timer && clearTimeout(this.timer), this.timer = setTimeout(function () {
				this.display()
			}.bind(this), n)
		}, r.prototype.display = function () {
			this.container = $("body"), this.container.append(Handlebars.compile(e)({})), this.backgroundElement = this.container.find(".runningInBackgroundInfoUiBg"), this.containerElement = this.container.find(".runningInBackgroundInfoUi"), this.containerElement.css("left", this.container.width() / 2 - this.containerElement.outerWidth() / 2).css("top", 150), this.backgroundElement.hide().fadeIn(500), this.containerElement.hide().fadeIn(500)
		}, r.prototype.hide = function () {
			this.timer && clearTimeout(this.timer), this.backgroundElement && (this.backgroundElement.remove(), this.backgroundElement = null), this.containerElement && (this.containerElement.remove(), this.containerElement = null)
		}, r
	}),
define("ui/GoogleAddsUi", ["../play/UrlHandler"], function (e) {
		return function () {
			var t = e.identifySite();
			if (t == "kongregate" || t == "notdoppler" || t == "armorgames" || t == "localhost") return;
			var n = '<div style="float:left; width:728px;height:90px"><ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-2388056053538220" data-ad-slot="2811501890"></ins></div>',
				r = '<div style="float:right;width:300px;height:600px"><ins class="adsbygoogle" style="display:inline-block;width:300px;height:600px" data-ad-client="ca-pub-2388056053538220"data-ad-slot="1334768690"></ins></div>',
				i = '<div style="float:right;width:320px;height:100px"><ins class="adsbygoogle" style="display:inline-block;width:320px;height:100px" data-ad-client="ca-pub-2388056053538220" data-ad-slot="4288235097"></ins></div>',
				s = $("#main");
			s.prepend('<br style="clear:both"/>'), s.prepend(i), s.prepend(n), s.append(r), $("#main").addClass("mainWithAdd"), (adsbygoogle = window.adsbygoogle || []).push({}), (adsbygoogle = window.adsbygoogle || []).push({}), (adsbygoogle = window.adsbygoogle || []).push({})
		}
	}),
define("text!template/intro.html", [], function () {
		return '<div id="introBg"></div>\r\n<div id="intro">\r\n\r\n    <b class="title">FACTORY IDLE</b><br/>\r\n    <br/>\r\n    Welcome to the crazy world of <b style="color:greenyellow">factory idle</b>!\r\n    Your goal here is to build an <b style="color:greenyellow">automated factory</b> with many <b style="color:greenyellow">production chains</b>.\r\n    You start with simple stuff and later produce <b style="color:rgb(150,181,134)">high quality military technology</b>, like tanks and rockets! Seriously, high quality!<br/>\r\n    <br/>\r\n    Path to complicated products is <u style="color:red">not an easy one</u> though, so be warned! There will be great challenges ahead waiting for you!\r\n    Check <b style="color:yellow">help section</b> for good ideas.<br/>\r\n    <br/>\r\n    <b>Disclaimer</b>: This game is <b style="color:red; text-decoration:underline">harder than an average</b> idle game and requires to turn on a <u style="color:orange">brain</u>. If you have more than one, turn them all ON! Overheat warning!<br/>\r\n    <br/>\r\n    <a href="javascript:void(0);" class="closeButton" style="color:white; font-weight:bold; float:right; display:block">Ok, got it and I will not sue anyone!</a>\r\n    <br style="clear:both;"/>\r\n    <span style="color:darkgray; font-size:0.9em">(except factory workers, always sue them for messing up your conveyors!)</span>\r\n\r\n</div>'
	}),
define("ui/IntroUi", ["text!template/intro.html"], function (e) {
		var t = "intro",
			n = function () {
				this.isVisible = false
			};
		return n.prototype.display = function () {
			if (this.isVisible) return;
			$("body").append(Handlebars.compile(e)({}));
			var t = this;
			this.isVisible = true;
			var n = $("#intro");
			n.css("left", ($("html").width() - n.width()) / 2), n.find(".closeButton").click(function () {
				t.hide()
			});
			var r = {};
			n.find(".menu a").each(function () {
				var e = $(this).attr("data-id");
				r[e] = n.find("#" + e), $(this).click(function () {
					for (var t in r) r[t].hide();
					r[e].fadeIn()
				})
			}), $("#gettingStarted").show(), $("#introBg").click(function () {
				t.hide()
			})
		}, n.prototype.hide = function () {
			this.isVisible = false, $("#intro").remove(), $("#introBg").remove()
		}, n.prototype.destroy = function () {
			this.hide(), this.game.getEventManager().removeListenerForType(t), this.gameUiEm.removeListenerForType(t)
		}, n
	}),
define("ui/MainUi", ["config/Meta", "config/config", "base/EventManager", "game/Game", "ui/GameUi", "ui/MissionsUi", "ui/RunningInBackgroundInfoUi", "ui/helper/AlertUi", "ui/GoogleAddsUi", "ui/IntroUi"], function (e, t, n, r, i, s, o, u, a, f) {
		var l = "MainUi",
			c = function (e, t) {
				this.globalUiEm = new n(GlobalUiEvent, l), this.play = e, this.imageMap = t
			};
		return c.prototype.setupFocusChecker = function () {
			var e = document.hasFocus();
			this.focusInterval = setInterval(function () {
				var t = document.hasFocus();
				e != t && (e = t, e ? this.globalUiEm.invokeEvent(GlobalUiEvent.FOCUS) : this.globalUiEm.invokeEvent(GlobalUiEvent.BLUR))
			}.bind(this), 200)
		}, c.prototype.display = function (e) {
			this.container = e, this.runningInBackgroundInfoUi = new o(this.globalUiEm), this.runningInBackgroundInfoUi.init(), this.play.getGame().getTicker().getNoOfTicks() < 1e3 && (new f).display(), this.setupFocusChecker(), this.play.getGame().getIsPremium() ? logger.info(l, "Premium version, skipping loading adds") : a();
			var n = this;
			window.addEventListener("keypress", function (e) {
				n.globalUiEm.invokeEvent(GlobalUiEvent.KEY_PRESS, e)
			}, false), window.addEventListener("beforeunload", function (e) {
				this.play.getSaveManager().saveAuto()
			}.bind(this)), this.globalUiEm.addListener(l, GlobalUiEvent.SHOW_MAIN_GAME, function () {
				this._showUi("mainGame")
			}.bind(this)), this.globalUiEm.addListener(l, GlobalUiEvent.SHOW_MISSIONS, function () {
				this._showUi("missions")
			}.bind(this)), this.globalUiEm.addListener(l, GlobalUiEvent.SHOW_MISSION, function (e) {
				this._showUi("mission", e)
			}.bind(this)), this.play.getGame().getEventManager().addListener(l, GameEvent.GAME_TICK, function () {
				if (t.main.warnToStoreUserHashAfterTicks[this.play.getGame().getTicker().getNoOfTicks()]) {
					var e = "userHashTmpAlert" + Math.round(Math.random() * 1e10),
						n = "border: 1px solid red; background:black; color:red; font-weight:bold; padding: 4px; margin: 3px; width:280px; font-size:0.9em; text-align:center;",
						r = 'You seem to be enjoying the game! Here is a good tip that maybe will save the day once!<br />Make a copy of your user hash. User hash is used to find your save game and purchases if you have any. <br />Your user hash: <br /><input type="text" readonly="readonly" id="' + e + '" name="' + e + '" value="' + this.play.getUserHash().toString() + '" style="' + n + '"/><br /> ' + "If you lose this, there is pretty much no way to restore your game. Play safe and keep a backup!<br />" + "You can find your user hash also in the settings. <br />" + "<br />" + "Ignore this reminder if you already did and have fun!<br />";
					(new u("SAVE USER HASH TO A SAFE PLACE!", r)).display(), $("#" + e).click(function () {
						$(this).get(0).setSelectionRange(0, $(this).val().length)
					})
				}
			}.bind(this)), this._showUi("mainGame")
		}, c.prototype._showUi = function (t, n) {
			this._destroyCurrentUi(), t == "mainGame" ? this.currentUi = new i(this.globalUiEm, this.play.getGame(), this.play, this.imageMap) : t == "missions" ? this.currentUi = new s(this.globalUiEm, e.missions) : t == "mission" && (this.currentUi = new i(this.globalUiEm, this.play.getMission(n), this.play, this.imageMap)), this.currentUi.display(this.container)
		}, c.prototype._destroyCurrentUi = function () {
			this.currentUi && (this.currentUi.destroy(), this.currentUi = null)
		}, c.prototype.destroy = function () {
			this.runningInBackgroundInfoUi.destroy(), this.globalUiEm.removeListenerForType(l), this.play.getGame().getEventManager().removeListenerForType(l), this.container = null
		}, c
	});
	var GameUiEvent, GameEvent, FactoryEvent, GlobalUiEvent, ApiEvent;
	define("Main", ["config/Meta", "config/config", "config/event/GlobalUiEvent", "config/event/GameUiEvent", "config/event/GameEvent", "config/event/FactoryEvent", "config/event/ApiEvent", "play/Play", "base/ImageMap", "ui/MainUi"], function (e, t, n, r, i, s, o, u, a, f) {
		var l = "Main";
		GameEvent = i, FactoryEvent = s, GameUiEvent = r, GlobalUiEvent = n, ApiEvent = o;
		var c = function () {};
		return c.prototype.init = function (e, t) {
			this.imageMap = this._createImageMap(), this.imageMap.loadAll(function () {
				this.play = new u(this.userHash, this.api), this.play.init(e, function () {
					this.play.isDevMode(), this.mainUi = new f(this.play, this.imageMap), this.mainUi.display($("#gameArea")), t && t()
				}.bind(this))
			}.bind(this))
		}, c.prototype._createImageMap = function () {
			return (new a(t.imageMap.path)).addImages({
				yellowSelection: "img/mouse/yellow.png",
				greenSelection: "img/mouse/green.png",
				redSelection: "img/mouse/red.png",
				blueSelection: "img/mouse/selected.png",
				cantPlace: "img/mouse/cantPlace.png",
				terrains: "img/terrains.png",
				components: "img/components.png",
				componentIcons: "img/componentIcons.png",
				transportLine: "img/transportLine.png",
				resources: "img/resources.png"
			})
		}, c.prototype.destroy = function () {
			this.mainUi.destroy(), this.play.destroy()
		}, c
	}), ! function (e, t) {
		"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, true) : function (e) {
			if (!e.document) throw new Error("jQuery requires a window with a document");
			return t(e)
		} : t(e)
	}("undefined" != typeof window ? window : this, function (e, t) {
		function g(e) {
			var t = "length" in e && e.length,
				n = h.type(e);
			return "function" === n || h.isWindow(e) ? false : 1 === e.nodeType && t ? true : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
		}

		function S(e, t, n) {
			if (h.isFunction(t)) return h.grep(e, function (e, r) {
				return !!t.call(e, r, e) !== n
			});
			if (t.nodeType) return h.grep(e, function (e) {
				return e === t !== n
			});
			if ("string" == typeof t) {
				if (E.test(t)) return h.filter(t, e, n);
				t = h.filter(t, e)
			}
			return h.grep(e, function (e) {
				return h.inArray(e, t) >= 0 !== n
			})
		}

		function A(e, t) {
			do e = e[t]; while (e && 1 !== e.nodeType);
			return e
		}

		function _(e) {
			var t = M[e] = {};
			return h.each(e.match(O) || [], function (e, n) {
				t[n] = true
			}), t
		}

		function P() {
			T.addEventListener ? (T.removeEventListener("DOMContentLoaded", H, false), e.removeEventListener("load", H, false)) : (T.detachEvent("onreadystatechange", H), e.detachEvent("onload", H))
		}

		function H() {
			(T.addEventListener || "load" === event.type || "complete" === T.readyState) && (P(), h.ready())
		}

		function q(e, t, n) {
			if (void 0 === n && 1 === e.nodeType) {
				var r = "data-" + t.replace(I, "-$1").toLowerCase();
				if (n = e.getAttribute(r), "string" == typeof n) {
					try {
						n = "true" === n ? true : "false" === n ? false : "null" === n ? null : +n + "" === n ? +n : F.test(n) ? h.parseJSON(n) : n
					} catch (i) {}
					h.data(e, t, n)
				} else n = void 0
			}
			return n
		}

		function R(e) {
			var t;
			for (t in e)
				if (("data" !== t || !h.isEmptyObject(e[t])) && "toJSON" !== t) return false;
			return true
		}

		function U(e, t, r, i) {
			if (h.acceptData(e)) {
				var s, o, u = h.expando,
					a = e.nodeType,
					f = a ? h.cache : e,
					l = a ? e[u] : e[u] && u;
				if (l && f[l] && (i || f[l].data) || void 0 !== r || "string" != typeof t) return l || (l = a ? e[u] = n.pop() || h.guid++ : u), f[l] || (f[l] = a ? {} : {
					toJSON: h.noop
				}), ("object" == typeof t || "function" == typeof t) && (i ? f[l] = h.extend(f[l], t) : f[l].data = h.extend(f[l].data, t)), o = f[l], i || (o.data || (o.data = {}), o = o.data), void 0 !== r && (o[h.camelCase(t)] = r), "string" == typeof t ? (s = o[t], null == s && (s = o[h.camelCase(t)])) : s = o, s
			}
		}

		function z(e, t, n) {
			if (h.acceptData(e)) {
				var r, i, s = e.nodeType,
					o = s ? h.cache : e,
					u = s ? e[h.expando] : h.expando;
				if (o[u]) {
					if (t && (r = n ? o[u] : o[u].data)) {
						h.isArray(t) ? t = t.concat(h.map(t, h.camelCase)) : t in r ? t = [t] : (t = h.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
						while (i--) delete r[t[i]];
						if (n ? !R(r) : !h.isEmptyObject(r)) return
					}(n || (delete o[u].data, R(o[u]))) && (s ? h.cleanData([e], true) : l.deleteExpando || o != o.window ? delete o[u] : o[u] = null)
				}
			}
		}

		function et() {
			return true
		}

		function tt() {
			return false
		}

		function nt() {
			try {
				return T.activeElement
			} catch (e) {}
		}

		function rt(e) {
			var t = it.split("|"),
				n = e.createDocumentFragment();
			if (n.createElement)
				while (t.length) n.createElement(t.pop());
			return n
		}

		function wt(e, t) {
			var n, r, i = 0,
				s = typeof e.getElementsByTagName !== B ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== B ? e.querySelectorAll(t || "*") : void 0;
			if (!s)
				for (s = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || h.nodeName(r, t) ? s.push(r) : h.merge(s, wt(r, t));
			return void 0 === t || t && h.nodeName(e, t) ? h.merge([e], s) : s
		}

		function Et(e) {
			J.test(e.type) && (e.defaultChecked = e.checked)
		}

		function St(e, t) {
			return h.nodeName(e, "table") && h.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
		}

		function xt(e) {
			return e.type = (null !== h.find.attr(e, "type")) + "/" + e.type, e
		}

		function Tt(e) {
			var t = vt.exec(e.type);
			return t ? e.type = t[1] : e.removeAttribute("type"), e
		}

		function Nt(e, t) {
			for (var n, r = 0; null != (n = e[r]); r++) h._data(n, "globalEval", !t || h._data(t[r], "globalEval"))
		}

		function Ct(e, t) {
			if (1 === t.nodeType && h.hasData(e)) {
				var n, r, i, s = h._data(e),
					o = h._data(t, s),
					u = s.events;
				if (u) {
					delete o.handle, o.events = {};
					for (n in u)
						for (r = 0, i = u[n].length; i > r; r++) h.event.add(t, n, u[n][r])
				}
				o.data && (o.data = h.extend({}, o.data))
			}
		}

		function kt(e, t) {
			var n, r, i;
			if (1 === t.nodeType) {
				if (n = t.nodeName.toLowerCase(), !l.noCloneEvent && t[h.expando]) {
					i = h._data(t);
					for (r in i.events) h.removeEvent(t, r, i.handle);
					t.removeAttribute(h.expando)
				}
				"script" === n && t.text !== e.text ? (xt(t).text = e.text, Tt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), l.html5Clone && e.innerHTML && !h.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && J.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
			}
		}

		function Ot(t, n) {
			var r, i = h(n.createElement(t)).appendTo(n.body),
				s = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : h.css(i[0], "display");
			return i.detach(), s
		}

		function Mt(e) {
			var t = T,
				n = At[e];
			return n || (n = Ot(e, t), "none" !== n && n || (Lt = (Lt || h("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Lt[0].contentWindow || Lt[0].contentDocument).document, t.write(), t.close(), n = Ot(e, t), Lt.detach()), At[e] = n), n
		}

		function jt(e, t) {
			return {
				get: function () {
					var n = e();
					if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
				}
			}
		}

		function Vt(e, t) {
			if (t in e) return t;
			var n = t.charAt(0).toUpperCase() + t.slice(1),
				r = t,
				i = Xt.length;
			while (i--)
				if (t = Xt[i] + n, t in e) return t;
			return r
		}

		function $t(e, t) {
			for (var n, r, i, s = [], o = 0, u = e.length; u > o; o++) r = e[o], r.style && (s[o] = h._data(r, "olddisplay"), n = r.style.display, t ? (s[o] || "none" !== n || (r.style.display = ""), "" === r.style.display && V(r) && (s[o] = h._data(r, "olddisplay", Mt(r.nodeName)))) : (i = V(r), (n && "none" !== n || !i) && h._data(r, "olddisplay", i ? n : h.css(r, "display"))));
			for (o = 0; u > o; o++) r = e[o], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? s[o] || "" : "none"));
			return e
		}

		function Jt(e, t, n) {
			var r = Rt.exec(t);
			return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
		}

		function Kt(e, t, n, r, i) {
			for (var s = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > s; s += 2) "margin" === n && (o += h.css(e, n + X[s], true, i)), r ? ("content" === n && (o -= h.css(e, "padding" + X[s], true, i)), "margin" !== n && (o -= h.css(e, "border" + X[s] + "Width", true, i))) : (o += h.css(e, "padding" + X[s], true, i), "padding" !== n && (o += h.css(e, "border" + X[s] + "Width", true, i)));
			return o
		}

		function Qt(e, t, n) {
			var r = true,
				i = "width" === t ? e.offsetWidth : e.offsetHeight,
				s = Pt(e),
				o = l.boxSizing && "border-box" === h.css(e, "boxSizing", false, s);
			if (0 >= i || null == i) {
				if (i = Ht(e, t, s), (0 > i || null == i) && (i = e.style[t]), Dt.test(i)) return i;
				r = o && (l.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
			}
			return i + Kt(e, t, n || (o ? "border" : "content"), r, s) + "px"
		}

		function Gt(e, t, n, r, i) {
			return new Gt.prototype.init(e, t, n, r, i)
		}

		function on() {
			return setTimeout(function () {
				Yt = void 0
			}), Yt = h.now()
		}

		function un(e, t) {
			var n, r = {
					height: e
				},
				i = 0;
			for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = X[i], r["margin" + n] = r["padding" + n] = e;
			return t && (r.opacity = r.width = e), r
		}

		function an(e, t, n) {
			for (var r, i = (sn[t] || []).concat(sn["*"]), s = 0, o = i.length; o > s; s++)
				if (r = i[s].call(n, t, e)) return r
		}

		function fn(e, t, n) {
			var r, i, s, o, u, a, f, c, p = this,
				d = {},
				v = e.style,
				m = e.nodeType && V(e),
				g = h._data(e, "fxshow");
			n.queue || (u = h._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, a = u.empty.fire, u.empty.fire = function () {
				u.unqueued || a()
			}), u.unqueued++, p.always(function () {
				p.always(function () {
					u.unqueued--, h.queue(e, "fx").length || u.empty.fire()
				})
			})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [v.overflow, v.overflowX, v.overflowY], f = h.css(e, "display"), c = "none" === f ? h._data(e, "olddisplay") || Mt(e.nodeName) : f, "inline" === c && "none" === h.css(e, "float") && (l.inlineBlockNeedsLayout && "inline" !== Mt(e.nodeName) ? v.zoom = 1 : v.display = "inline-block")), n.overflow && (v.overflow = "hidden", l.shrinkWrapBlocks() || p.always(function () {
				v.overflow = n.overflow[0], v.overflowX = n.overflow[1], v.overflowY = n.overflow[2]
			}));
			for (r in t)
				if (i = t[r], en.exec(i)) {
					if (delete t[r], s = s || "toggle" === i, i === (m ? "hide" : "show")) {
						if ("show" !== i || !g || void 0 === g[r]) continue;
						m = true
					}
					d[r] = g && g[r] || h.style(e, r)
				} else f = void 0;
			if (h.isEmptyObject(d)) "inline" === ("none" === f ? Mt(e.nodeName) : f) && (v.display = f);
			else {
				g ? "hidden" in g && (m = g.hidden) : g = h._data(e, "fxshow", {}), s && (g.hidden = !m), m ? h(e).show() : p.done(function () {
					h(e).hide()
				}), p.done(function () {
					var t;
					h._removeData(e, "fxshow");
					for (t in d) h.style(e, t, d[t])
				});
				for (r in d) o = an(m ? g[r] : 0, r, p), r in g || (g[r] = o.start, m && (o.end = o.start, o.start = "width" === r || "height" === r ? 1 : 0))
			}
		}

		function ln(e, t) {
			var n, r, i, s, o;
			for (n in e)
				if (r = h.camelCase(n), i = t[r], s = e[n], h.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = h.cssHooks[r], o && "expand" in o) {
					s = o.expand(s), delete e[r];
					for (n in s) n in e || (e[n] = s[n], t[n] = i)
				} else t[r] = i
		}

		function cn(e, t, n) {
			var r, i, s = 0,
				o = rn.length,
				u = h.Deferred().always(function () {
					delete a.elem
				}),
				a = function () {
					if (i) return false;
					for (var t = Yt || on(), n = Math.max(0, f.startTime + f.duration - t), r = n / f.duration || 0, s = 1 - r, o = 0, a = f.tweens.length; a > o; o++) f.tweens[o].run(s);
					return u.notifyWith(e, [f, s, n]), 1 > s && a ? n : (u.resolveWith(e, [f]), false)
				},
				f = u.promise({
					elem: e,
					props: h.extend({}, t),
					opts: h.extend(true, {
						specialEasing: {}
					}, n),
					originalProperties: t,
					originalOptions: n,
					startTime: Yt || on(),
					duration: n.duration,
					tweens: [],
					createTween: function (t, n) {
						var r = h.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
						return f.tweens.push(r), r
					},
					stop: function (t) {
						var n = 0,
							r = t ? f.tweens.length : 0;
						if (i) return this;
						for (i = true; r > n; n++) f.tweens[n].run(1);
						return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
					}
				}),
				l = f.props;
			for (ln(l, f.opts.specialEasing); o > s; s++)
				if (r = rn[s].call(f, e, l, f.opts)) return r;
			return h.map(l, an, f), h.isFunction(f.opts.start) && f.opts.start.call(e, f), h.fx.timer(h.extend(a, {
				elem: e,
				anim: f,
				queue: f.opts.queue
			})), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
		}

		function Fn(e) {
			return function (t, n) {
				"string" != typeof t && (n = t, t = "*");
				var r, i = 0,
					s = t.toLowerCase().match(O) || [];
				if (h.isFunction(n))
					while (r = s[i++]) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
			}
		}

		function In(e, t, n, r) {
			function o(u) {
				var a;
				return i[u] = true, h.each(e[u] || [], function (e, u) {
					var f = u(t, n, r);
					return "string" != typeof f || s || i[f] ? s ? !(a = f) : void 0 : (t.dataTypes.unshift(f), o(f), false)
				}), a
			}
			var i = {},
				s = e === Hn;
			return o(t.dataTypes[0]) || !i["*"] && o("*")
		}

		function qn(e, t) {
			var n, r, i = h.ajaxSettings.flatOptions || {};
			for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
			return n && h.extend(true, e, n), e
		}

		function Rn(e, t, n) {
			var r, i, s, o, u = e.contents,
				a = e.dataTypes;
			while ("*" === a[0]) a.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
			if (i)
				for (o in u)
					if (u[o] && u[o].test(i)) {
						a.unshift(o);
						break
					}
			if (a[0] in n) s = a[0];
			else {
				for (o in n) {
					if (!a[0] || e.converters[o + " " + a[0]]) {
						s = o;
						break
					}
					r || (r = o)
				}
				s = s || r
			}
			return s ? (s !== a[0] && a.unshift(s), n[s]) : void 0
		}

		function Un(e, t, n, r) {
			var i, s, o, u, a, f = {},
				l = e.dataTypes.slice();
			if (l[1])
				for (o in e.converters) f[o.toLowerCase()] = e.converters[o];
			s = l.shift();
			while (s)
				if (e.responseFields[s] && (n[e.responseFields[s]] = t), !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), a = s, s = l.shift())
					if ("*" === s) s = a;
					else if ("*" !== a && a !== s) {
				if (o = f[a + " " + s] || f["* " + s], !o)
					for (i in f)
						if (u = i.split(" "), u[1] === s && (o = f[a + " " + u[0]] || f["* " + u[0]])) {
							o === true ? o = f[i] : f[i] !== true && (s = u[0], l.unshift(u[1]));
							break
						}
				if (o !== true)
					if (o && e["throws"]) t = o(t);
					else try {
						t = o(t)
					} catch (c) {
						return {
							state: "parsererror",
							error: o ? c : "No conversion from " + a + " to " + s
						}
					}
			}
			return {
				state: "success",
				data: t
			}
		}

		function Jn(e, t, n, r) {
			var i;
			if (h.isArray(t)) h.each(t, function (t, i) {
				n || Wn.test(e) ? r(e, i) : Jn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
			});
			else if (n || "object" !== h.type(t)) r(e, t);
			else
				for (i in t) Jn(e + "[" + i + "]", t[i], n, r)
		}

		function Yn() {
			try {
				return new e.XMLHttpRequest
			} catch (t) {}
		}

		function Zn() {
			try {
				return new e.ActiveXObject("Microsoft.XMLHTTP")
			} catch (t) {}
		}

		function ir(e) {
			return h.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : false
		}
		var n = [],
			r = n.slice,
			i = n.concat,
			s = n.push,
			o = n.indexOf,
			u = {},
			a = u.toString,
			f = u.hasOwnProperty,
			l = {},
			c = "1.11.3",
			h = function (e, t) {
				return new h.fn.init(e, t)
			},
			p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
			d = /^-ms-/,
			v = /-([\da-z])/gi,
			m = function (e, t) {
				return t.toUpperCase()
			};
		h.fn = h.prototype = {
			jquery: c,
			constructor: h,
			selector: "",
			length: 0,
			toArray: function () {
				return r.call(this)
			},
			get: function (e) {
				return null != e ? 0 > e ? this[e + this.length] : this[e] : r.call(this)
			},
			pushStack: function (e) {
				var t = h.merge(this.constructor(), e);
				return t.prevObject = this, t.context = this.context, t
			},
			each: function (e, t) {
				return h.each(this, e, t)
			},
			map: function (e) {
				return this.pushStack(h.map(this, function (t, n) {
					return e.call(t, n, t)
				}))
			},
			slice: function () {
				return this.pushStack(r.apply(this, arguments))
			},
			first: function () {
				return this.eq(0)
			},
			last: function () {
				return this.eq(-1)
			},
			eq: function (e) {
				var t = this.length,
					n = +e + (0 > e ? t : 0);
				return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
			},
			end: function () {
				return this.prevObject || this.constructor(null)
			},
			push: s,
			sort: n.sort,
			splice: n.splice
		}, h.extend = h.fn.extend = function () {
			var e, t, n, r, i, s, o = arguments[0] || {},
				u = 1,
				a = arguments.length,
				f = false;
			for ("boolean" == typeof o && (f = o, o = arguments[u] || {}, u++), "object" == typeof o || h.isFunction(o) || (o = {}), u === a && (o = this, u--); a > u; u++)
				if (null != (i = arguments[u]))
					for (r in i) e = o[r], n = i[r], o !== n && (f && n && (h.isPlainObject(n) || (t = h.isArray(n))) ? (t ? (t = false, s = e && h.isArray(e) ? e : []) : s = e && h.isPlainObject(e) ? e : {}, o[r] = h.extend(f, s, n)) : void 0 !== n && (o[r] = n));
			return o
		}, h.extend({
			expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""),
			isReady: true,
			error: function (e) {
				throw new Error(e)
			},
			noop: function () {},
			isFunction: function (e) {
				return "function" === h.type(e)
			},
			isArray: Array.isArray || function (e) {
				return "array" === h.type(e)
			},
			isWindow: function (e) {
				return null != e && e == e.window
			},
			isNumeric: function (e) {
				return !h.isArray(e) && e - parseFloat(e) + 1 >= 0
			},
			isEmptyObject: function (e) {
				var t;
				for (t in e) return false;
				return true
			},
			isPlainObject: function (e) {
				var t;
				if (!e || "object" !== h.type(e) || e.nodeType || h.isWindow(e)) return false;
				try {
					if (e.constructor && !f.call(e, "constructor") && !f.call(e.constructor.prototype, "isPrototypeOf")) return false
				} catch (n) {
					return false
				}
				if (l.ownLast)
					for (t in e) return f.call(e, t);
				for (t in e);
				return void 0 === t || f.call(e, t)
			},
			type: function (e) {
				return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[a.call(e)] || "object" : typeof e
			},
			globalEval: function (t) {
				t && h.trim(t) && (e.execScript || function (t) {
					e.eval.call(e, t)
				})(t)
			},
			camelCase: function (e) {
				return e.replace(d, "ms-").replace(v, m)
			},
			nodeName: function (e, t) {
				return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
			},
			each: function (e, t, n) {
				var r, i = 0,
					s = e.length,
					o = g(e);
				if (n) {
					if (o) {
						for (; s > i; i++)
							if (r = t.apply(e[i], n), r === false) break
					} else
						for (i in e)
							if (r = t.apply(e[i], n), r === false) break
				} else if (o) {
					for (; s > i; i++)
						if (r = t.call(e[i], i, e[i]), r === false) break
				} else
					for (i in e)
						if (r = t.call(e[i], i, e[i]), r === false) break; return e
			},
			trim: function (e) {
				return null == e ? "" : (e + "").replace(p, "")
			},
			makeArray: function (e, t) {
				var n = t || [];
				return null != e && (g(Object(e)) ? h.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
			},
			inArray: function (e, t, n) {
				var r;
				if (t) {
					if (o) return o.call(t, e, n);
					for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
						if (n in t && t[n] === e) return n
				}
				return -1
			},
			merge: function (e, t) {
				var n = +t.length,
					r = 0,
					i = e.length;
				while (n > r) e[i++] = t[r++];
				if (n !== n)
					while (void 0 !== t[r]) e[i++] = t[r++];
				return e.length = i, e
			},
			grep: function (e, t, n) {
				for (var r, i = [], s = 0, o = e.length, u = !n; o > s; s++) r = !t(e[s], s), r !== u && i.push(e[s]);
				return i
			},
			map: function (e, t, n) {
				var r, s = 0,
					o = e.length,
					u = g(e),
					a = [];
				if (u)
					for (; o > s; s++) r = t(e[s], s, n), null != r && a.push(r);
				else
					for (s in e) r = t(e[s], s, n), null != r && a.push(r);
				return i.apply([], a)
			},
			guid: 1,
			proxy: function (e, t) {
				var n, i, s;
				return "string" == typeof t && (s = e[t], t = e, e = s), h.isFunction(e) ? (n = r.call(arguments, 2), i = function () {
					return e.apply(t || this, n.concat(r.call(arguments)))
				}, i.guid = e.guid = e.guid || h.guid++, i) : void 0
			},
			now: function () {
				return +(new Date)
			},
			support: l
		}), h.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
			u["[object " + t + "]"] = t.toLowerCase()
		});
		var y = function (e) {
			function ot(e, t, r, i) {
				var s, u, f, l, c, d, g, y, S, x;
				if ((t ? t.ownerDocument || t : E) !== p && h(t), t = t || p, r = r || [], l = t.nodeType, "string" != typeof e || !e || 1 !== l && 9 !== l && 11 !== l) return r;
				if (!i && v) {
					if (11 !== l && (s = Z.exec(e)))
						if (f = s[1]) {
							if (9 === l) {
								if (u = t.getElementById(f), !u || !u.parentNode) return r;
								if (u.id === f) return r.push(u), r
							} else if (t.ownerDocument && (u = t.ownerDocument.getElementById(f)) && b(t, u) && u.id === f) return r.push(u), r
						} else {
							if (s[2]) return D.apply(r, t.getElementsByTagName(e)), r;
							if ((f = s[3]) && n.getElementsByClassName) return D.apply(r, t.getElementsByClassName(f)), r
						}
					if (n.qsa && (!m || !m.test(e))) {
						if (y = g = w, S = t, x = 1 !== l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
							d = o(e), (g = t.getAttribute("id")) ? y = g.replace(tt, "\\$&") : t.setAttribute("id", y), y = "[id='" + y + "'] ", c = d.length;
							while (c--) d[c] = y + gt(d[c]);
							S = et.test(e) && vt(t.parentNode) || t, x = d.join(",")
						}
						if (x) try {
							return D.apply(r, S.querySelectorAll(x)), r
						} catch (T) {} finally {
							g || t.removeAttribute("id")
						}
					}
				}
				return a(e.replace(z, "$1"), t, r, i)
			}

			function ut() {
				function t(n, i) {
					return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
				}
				var e = [];
				return t
			}

			function at(e) {
				return e[w] = true, e
			}

			function ft(e) {
				var t = p.createElement("div");
				try {
					return !!e(t)
				} catch (n) {
					return false
				} finally {
					t.parentNode && t.parentNode.removeChild(t), t = null
				}
			}

			function lt(e, t) {
				var n = e.split("|"),
					i = e.length;
				while (i--) r.attrHandle[n[i]] = t
			}

			function ct(e, t) {
				var n = t && e,
					r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || L) - (~e.sourceIndex || L);
				if (r) return r;
				if (n)
					while (n = n.nextSibling)
						if (n === t) return -1;
				return e ? 1 : -1
			}

			function ht(e) {
				return function (t) {
					var n = t.nodeName.toLowerCase();
					return "input" === n && t.type === e
				}
			}

			function pt(e) {
				return function (t) {
					var n = t.nodeName.toLowerCase();
					return ("input" === n || "button" === n) && t.type === e
				}
			}

			function dt(e) {
				return at(function (t) {
					return t = +t, at(function (n, r) {
						var i, s = e([], n.length, t),
							o = s.length;
						while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
					})
				})
			}

			function vt(e) {
				return e && "undefined" != typeof e.getElementsByTagName && e
			}

			function mt() {}

			function gt(e) {
				for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
				return r
			}

			function yt(e, t, n) {
				var r = t.dir,
					i = n && "parentNode" === r,
					s = x++;
				return t.first ? function (t, n, s) {
					while (t = t[r])
						if (1 === t.nodeType || i) return e(t, n, s)
				} : function (t, n, o) {
					var u, a, f = [S, s];
					if (o) {
						while (t = t[r])
							if ((1 === t.nodeType || i) && e(t, n, o)) return true
					} else
						while (t = t[r])
							if (1 === t.nodeType || i) {
								if (a = t[w] || (t[w] = {}), (u = a[r]) && u[0] === S && u[1] === s) return f[2] = u[2];
								if (a[r] = f, f[2] = e(t, n, o)) return true
							}
				}
			}

			function bt(e) {
				return e.length > 1 ? function (t, n, r) {
					var i = e.length;
					while (i--)
						if (!e[i](t, n, r)) return false;
					return true
				} : e[0]
			}

			function wt(e, t, n) {
				for (var r = 0, i = t.length; i > r; r++) ot(e, t[r], n);
				return n
			}

			function Et(e, t, n, r, i) {
				for (var s, o = [], u = 0, a = e.length, f = null != t; a > u; u++)(s = e[u]) && (!n || n(s, r, i)) && (o.push(s), f && t.push(u));
				return o
			}

			function St(e, t, n, r, i, s) {
				return r && !r[w] && (r = St(r)), i && !i[w] && (i = St(i, s)), at(function (s, o, u, a) {
					var f, l, c, h = [],
						p = [],
						d = o.length,
						v = s || wt(t || "*", u.nodeType ? [u] : u, []),
						m = !e || !s && t ? v : Et(v, h, e, u, a),
						g = n ? i || (s ? e : d || r) ? [] : o : m;
					if (n && n(m, g, u, a), r) {
						f = Et(g, p), r(f, [], u, a), l = f.length;
						while (l--)(c = f[l]) && (g[p[l]] = !(m[p[l]] = c))
					}
					if (s) {
						if (i || e) {
							if (i) {
								f = [], l = g.length;
								while (l--)(c = g[l]) && f.push(m[l] = c);
								i(null, g = [], f, a)
							}
							l = g.length;
							while (l--)(c = g[l]) && (f = i ? H(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
						}
					} else g = Et(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : D.apply(o, g)
				})
			}

			function xt(e) {
				for (var t, n, i, s = e.length, o = r.relative[e[0].type], u = o || r.relative[" "], a = o ? 1 : 0, l = yt(function (e) {
						return e === t
					}, u, true), c = yt(function (e) {
						return H(t, e) > -1
					}, u, true), h = [function (e, n, r) {
						var i = !o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r));
						return t = null, i
					}]; s > a; a++)
					if (n = r.relative[e[a].type]) h = [yt(bt(h), n)];
					else {
						if (n = r.filter[e[a].type].apply(null, e[a].matches), n[w]) {
							for (i = ++a; s > i; i++)
								if (r.relative[e[i].type]) break;
							return St(a > 1 && bt(h), a > 1 && gt(e.slice(0, a - 1).concat({
								value: " " === e[a - 2].type ? "*" : ""
							})).replace(z, "$1"), n, i > a && xt(e.slice(a, i)), s > i && xt(e = e.slice(i)), s > i && gt(e))
						}
						h.push(n)
					}
				return bt(h)
			}

			function Tt(e, t) {
				var n = t.length > 0,
					i = e.length > 0,
					s = function (s, o, u, a, l) {
						var c, h, d, v = 0,
							m = "0",
							g = s && [],
							y = [],
							b = f,
							w = s || i && r.find.TAG("*", l),
							E = S += null == b ? 1 : Math.random() || .1,
							x = w.length;
						for (l && (f = o !== p && o); m !== x && null != (c = w[m]); m++) {
							if (i && c) {
								h = 0;
								while (d = e[h++])
									if (d(c, o, u)) {
										a.push(c);
										break
									}
								l && (S = E)
							}
							n && ((c = !d && c) && v--, s && g.push(c))
						}
						if (v += m, n && m !== v) {
							h = 0;
							while (d = t[h++]) d(g, y, o, u);
							if (s) {
								if (v > 0)
									while (m--) g[m] || y[m] || (y[m] = M.call(a));
								y = Et(y)
							}
							D.apply(a, y), l && !s && y.length > 0 && v + t.length > 1 && ot.uniqueSort(a)
						}
						return l && (S = E, f = b), g
					};
				return n ? at(s) : s
			}
			var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w = "sizzle" + 1 * new Date,
				E = e.document,
				S = 0,
				x = 0,
				T = ut(),
				N = ut(),
				C = ut(),
				k = function (e, t) {
					return e === t && (c = true), 0
				},
				L = 1 << 31,
				A = {}.hasOwnProperty,
				O = [],
				M = O.pop,
				_ = O.push,
				D = O.push,
				P = O.slice,
				H = function (e, t) {
					for (var n = 0, r = e.length; r > n; n++)
						if (e[n] === t) return n;
					return -1
				},
				B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				j = "[\\x20\\t\\r\\n\\f]",
				F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				I = F.replace("w", "w#"),
				q = "\\[" + j + "*(" + F + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + j + "*\\]",
				R = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
				U = new RegExp(j + "+", "g"),
				z = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
				W = new RegExp("^" + j + "*," + j + "*"),
				X = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
				V = new RegExp("=" + j + "*([^\\]'\"]*?)" + j + "*\\]", "g"),
				$ = new RegExp(R),
				J = new RegExp("^" + I + "$"),
				K = {
					ID: new RegExp("^#(" + F + ")"),
					CLASS: new RegExp("^\\.(" + F + ")"),
					TAG: new RegExp("^(" + F.replace("w", "w*") + ")"),
					ATTR: new RegExp("^" + q),
					PSEUDO: new RegExp("^" + R),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + B + ")$", "i"),
					needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
				},
				Q = /^(?:input|select|textarea|button)$/i,
				G = /^h\d$/i,
				Y = /^[^{]+\{\s*\[native \w/,
				Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				et = /[+~]/,
				tt = /'|\\/g,
				nt = new RegExp("\\\\([\\da-f]{1,6}" + j + "?|(" + j + ")|.)", "ig"),
				rt = function (e, t, n) {
					var r = "0x" + t - 65536;
					return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
				},
				it = function () {
					h()
				};
			try {
				D.apply(O = P.call(E.childNodes), E.childNodes), O[E.childNodes.length].nodeType
			} catch (st) {
				D = {
					apply: O.length ? function (e, t) {
						_.apply(e, P.call(t))
					} : function (e, t) {
						var n = e.length,
							r = 0;
						while (e[n++] = t[r++]);
						e.length = n - 1
					}
				}
			}
			n = ot.support = {}, s = ot.isXML = function (e) {
				var t = e && (e.ownerDocument || e).documentElement;
				return t ? "HTML" !== t.nodeName : false
			}, h = ot.setDocument = function (e) {
				var t, i, o = e ? e.ownerDocument || e : E;
				return o !== p && 9 === o.nodeType && o.documentElement ? (p = o, d = o.documentElement, i = o.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", it, false) : i.attachEvent && i.attachEvent("onunload", it)), v = !s(o), n.attributes = ft(function (e) {
					return e.className = "i", !e.getAttribute("className")
				}), n.getElementsByTagName = ft(function (e) {
					return e.appendChild(o.createComment("")), !e.getElementsByTagName("*").length
				}), n.getElementsByClassName = Y.test(o.getElementsByClassName), n.getById = ft(function (e) {
					return d.appendChild(e).id = w, !o.getElementsByName || !o.getElementsByName(w).length
				}), n.getById ? (r.find.ID = function (e, t) {
					if ("undefined" != typeof t.getElementById && v) {
						var n = t.getElementById(e);
						return n && n.parentNode ? [n] : []
					}
				}, r.filter.ID = function (e) {
					var t = e.replace(nt, rt);
					return function (e) {
						return e.getAttribute("id") === t
					}
				}) : (delete r.find.ID, r.filter.ID = function (e) {
					var t = e.replace(nt, rt);
					return function (e) {
						var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
						return n && n.value === t
					}
				}), r.find.TAG = n.getElementsByTagName ? function (e, t) {
					return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
				} : function (e, t) {
					var n, r = [],
						i = 0,
						s = t.getElementsByTagName(e);
					if ("*" === e) {
						while (n = s[i++]) 1 === n.nodeType && r.push(n);
						return r
					}
					return s
				}, r.find.CLASS = n.getElementsByClassName && function (e, t) {
					return v ? t.getElementsByClassName(e) : void 0
				}, g = [], m = [], (n.qsa = Y.test(o.querySelectorAll)) && (ft(function (e) {
					d.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + j + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + j + "*(?:value|" + B + ")"), e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
				}), ft(function (e) {
					var t = o.createElement("input");
					t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + j + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
				})), (n.matchesSelector = Y.test(y = d.matches || d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ft(function (e) {
					n.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), g.push("!=", R)
				}), m = m.length && new RegExp(m.join("|")), g = g.length && new RegExp(g.join("|")), t = Y.test(d.compareDocumentPosition), b = t || Y.test(d.contains) ? function (e, t) {
					var n = 9 === e.nodeType ? e.documentElement : e,
						r = t && t.parentNode;
					return e === r || !!r && 1 === r.nodeType && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))
				} : function (e, t) {
					if (t)
						while (t = t.parentNode)
							if (t === e) return true;
					return false
				}, k = t ? function (e, t) {
					if (e === t) return c = true, 0;
					var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
					return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === o || e.ownerDocument === E && b(E, e) ? -1 : t === o || t.ownerDocument === E && b(E, t) ? 1 : l ? H(l, e) - H(l, t) : 0 : 4 & r ? -1 : 1)
				} : function (e, t) {
					if (e === t) return c = true, 0;
					var n, r = 0,
						i = e.parentNode,
						s = t.parentNode,
						u = [e],
						a = [t];
					if (!i || !s) return e === o ? -1 : t === o ? 1 : i ? -1 : s ? 1 : l ? H(l, e) - H(l, t) : 0;
					if (i === s) return ct(e, t);
					n = e;
					while (n = n.parentNode) u.unshift(n);
					n = t;
					while (n = n.parentNode) a.unshift(n);
					while (u[r] === a[r]) r++;
					return r ? ct(u[r], a[r]) : u[r] === E ? -1 : a[r] === E ? 1 : 0
				}, o) : p
			}, ot.matches = function (e, t) {
				return ot(e, null, null, t)
			}, ot.matchesSelector = function (e, t) {
				if ((e.ownerDocument || e) !== p && h(e), t = t.replace(V, "='$1']"), !(!n.matchesSelector || !v || g && g.test(t) || m && m.test(t))) try {
					var r = y.call(e, t);
					if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
				} catch (i) {}
				return ot(t, p, null, [e]).length > 0
			}, ot.contains = function (e, t) {
				return (e.ownerDocument || e) !== p && h(e), b(e, t)
			}, ot.attr = function (e, t) {
				(e.ownerDocument || e) !== p && h(e);
				var i = r.attrHandle[t.toLowerCase()],
					s = i && A.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !v) : void 0;
				return void 0 !== s ? s : n.attributes || !v ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
			}, ot.error = function (e) {
				throw new Error("Syntax error, unrecognized expression: " + e)
			}, ot.uniqueSort = function (e) {
				var t, r = [],
					i = 0,
					s = 0;
				if (c = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(k), c) {
					while (t = e[s++]) t === e[s] && (i = r.push(s));
					while (i--) e.splice(r[i], 1)
				}
				return l = null, e
			}, i = ot.getText = function (e) {
				var t, n = "",
					r = 0,
					s = e.nodeType;
				if (s) {
					if (1 === s || 9 === s || 11 === s) {
						if ("string" == typeof e.textContent) return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
					} else if (3 === s || 4 === s) return e.nodeValue
				} else
					while (t = e[r++]) n += i(t);
				return n
			}, r = ot.selectors = {
				cacheLength: 50,
				createPseudo: at,
				match: K,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: true
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: true
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function (e) {
						return e[1] = e[1].replace(nt, rt), e[3] = (e[3] || e[4] || e[5] || "").replace(nt, rt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function (e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ot.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ot.error(e[0]), e
					},
					PSEUDO: function (e) {
						var t, n = !e[6] && e[2];
						return K.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && $.test(n) && (t = o(n, true)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function (e) {
						var t = e.replace(nt, rt).toLowerCase();
						return "*" === e ? function () {
							return true
						} : function (e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function (e) {
						var t = T[e + " "];
						return t || (t = new RegExp("(^|" + j + ")" + e + "(" + j + "|$)")) && T(e, function (e) {
							return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
						})
					},
					ATTR: function (e, t, n) {
						return function (r) {
							var i = ot.attr(r, e);
							return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(U, " ") + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : false) : true
						}
					},
					CHILD: function (e, t, n, r, i) {
						var s = "nth" !== e.slice(0, 3),
							o = "last" !== e.slice(-4),
							u = "of-type" === t;
						return 1 === r && 0 === i ? function (e) {
							return !!e.parentNode
						} : function (t, n, a) {
							var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
								m = t.parentNode,
								g = u && t.nodeName.toLowerCase(),
								y = !a && !u;
							if (m) {
								if (s) {
									while (v) {
										c = t;
										while (c = c[v])
											if (u ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) return false;
										d = v = "only" === e && !d && "nextSibling"
									}
									return true
								}
								if (d = [o ? m.firstChild : m.lastChild], o && y) {
									l = m[w] || (m[w] = {}), f = l[e] || [], p = f[0] === S && f[1], h = f[0] === S && f[2], c = p && m.childNodes[p];
									while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
										if (1 === c.nodeType && ++h && c === t) {
											l[e] = [S, p, h];
											break
										}
								} else if (y && (f = (t[w] || (t[w] = {}))[e]) && f[0] === S) h = f[1];
								else
									while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
										if ((u ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) && ++h && (y && ((c[w] || (c[w] = {}))[e] = [S, h]), c === t)) break; return h -= i, h === r || h % r === 0 && h / r >= 0
							}
						}
					},
					PSEUDO: function (e, t) {
						var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ot.error("unsupported pseudo: " + e);
						return i[w] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? at(function (e, n) {
							var r, s = i(e, t),
								o = s.length;
							while (o--) r = H(e, s[o]), e[r] = !(n[r] = s[o])
						}) : function (e) {
							return i(e, 0, n)
						}) : i
					}
				},
				pseudos: {
					not: at(function (e) {
						var t = [],
							n = [],
							r = u(e.replace(z, "$1"));
						return r[w] ? at(function (e, t, n, i) {
							var s, o = r(e, null, i, []),
								u = e.length;
							while (u--)(s = o[u]) && (e[u] = !(t[u] = s))
						}) : function (e, i, s) {
							return t[0] = e, r(t, null, s, n), t[0] = null, !n.pop()
						}
					}),
					has: at(function (e) {
						return function (t) {
							return ot(e, t).length > 0
						}
					}),
					contains: at(function (e) {
						return e = e.replace(nt, rt),
							function (t) {
								return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
							}
					}),
					lang: at(function (e) {
						return J.test(e || "") || ot.error("unsupported lang: " + e), e = e.replace(nt, rt).toLowerCase(),
							function (t) {
								var n;
								do
									if (n = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
								while ((t = t.parentNode) && 1 === t.nodeType);
								return false
							}
					}),
					target: function (t) {
						var n = e.location && e.location.hash;
						return n && n.slice(1) === t.id
					},
					root: function (e) {
						return e === d
					},
					focus: function (e) {
						return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: function (e) {
						return e.disabled === false
					},
					disabled: function (e) {
						return e.disabled === true
					},
					checked: function (e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected: function (e) {
						return e.parentNode && e.parentNode.selectedIndex, e.selected === true
					},
					empty: function (e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if (e.nodeType < 6) return false;
						return true
					},
					parent: function (e) {
						return !r.pseudos.empty(e)
					},
					header: function (e) {
						return G.test(e.nodeName)
					},
					input: function (e) {
						return Q.test(e.nodeName)
					},
					button: function (e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function (e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
					},
					first: dt(function () {
						return [0]
					}),
					last: dt(function (e, t) {
						return [t - 1]
					}),
					eq: dt(function (e, t, n) {
						return [0 > n ? n + t : n]
					}),
					even: dt(function (e, t) {
						for (var n = 0; t > n; n += 2) e.push(n);
						return e
					}),
					odd: dt(function (e, t) {
						for (var n = 1; t > n; n += 2) e.push(n);
						return e
					}),
					lt: dt(function (e, t, n) {
						for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
						return e
					}),
					gt: dt(function (e, t, n) {
						for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
						return e
					})
				}
			}, r.pseudos.nth = r.pseudos.eq;
			for (t in {
					radio: true,
					checkbox: true,
					file: true,
					password: true,
					image: true
				}) r.pseudos[t] = ht(t);
			for (t in {
					submit: true,
					reset: true
				}) r.pseudos[t] = pt(t);
			return mt.prototype = r.filters = r.pseudos, r.setFilters = new mt, o = ot.tokenize = function (e, t) {
				var n, i, s, o, u, a, f, l = N[e + " "];
				if (l) return t ? 0 : l.slice(0);
				u = e, a = [], f = r.preFilter;
				while (u) {
					(!n || (i = W.exec(u))) && (i && (u = u.slice(i[0].length) || u), a.push(s = [])), n = false, (i = X.exec(u)) && (n = i.shift(), s.push({
						value: n,
						type: i[0].replace(z, " ")
					}), u = u.slice(n.length));
					for (o in r.filter) !(i = K[o].exec(u)) || f[o] && !(i = f[o](i)) || (n = i.shift(), s.push({
						value: n,
						type: o,
						matches: i
					}), u = u.slice(n.length));
					if (!n) break
				}
				return t ? u.length : u ? ot.error(e) : N(e, a).slice(0)
			}, u = ot.compile = function (e, t) {
				var n, r = [],
					i = [],
					s = C[e + " "];
				if (!s) {
					t || (t = o(e)), n = t.length;
					while (n--) s = xt(t[n]), s[w] ? r.push(s) : i.push(s);
					s = C(e, Tt(i, r)), s.selector = e
				}
				return s
			}, a = ot.select = function (e, t, i, s) {
				var a, f, l, c, h, p = "function" == typeof e && e,
					d = !s && o(e = p.selector || e);
				if (i = i || [], 1 === d.length) {
					if (f = d[0] = d[0].slice(0), f.length > 2 && "ID" === (l = f[0]).type && n.getById && 9 === t.nodeType && v && r.relative[f[1].type]) {
						if (t = (r.find.ID(l.matches[0].replace(nt, rt), t) || [])[0], !t) return i;
						p && (t = t.parentNode), e = e.slice(f.shift().value.length)
					}
					a = K.needsContext.test(e) ? 0 : f.length;
					while (a--) {
						if (l = f[a], r.relative[c = l.type]) break;
						if ((h = r.find[c]) && (s = h(l.matches[0].replace(nt, rt), et.test(f[0].type) && vt(t.parentNode) || t))) {
							if (f.splice(a, 1), e = s.length && gt(f), !e) return D.apply(i, s), i;
							break
						}
					}
				}
				return (p || u(e, d))(s, t, !v, i, et.test(e) && vt(t.parentNode) || t), i
			}, n.sortStable = w.split("").sort(k).join("") === w, n.detectDuplicates = !!c, h(), n.sortDetached = ft(function (e) {
				return 1 & e.compareDocumentPosition(p.createElement("div"))
			}), ft(function (e) {
				return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
			}) || lt("type|href|height|width", function (e, t, n) {
				return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
			}), n.attributes && ft(function (e) {
				return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
			}) || lt("value", function (e, t, n) {
				return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
			}), ft(function (e) {
				return null == e.getAttribute("disabled")
			}) || lt(B, function (e, t, n) {
				var r;
				return n ? void 0 : e[t] === true ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
			}), ot
		}(e);
		h.find = y, h.expr = y.selectors, h.expr[":"] = h.expr.pseudos, h.unique = y.uniqueSort, h.text = y.getText, h.isXMLDoc = y.isXML, h.contains = y.contains;
		var b = h.expr.match.needsContext,
			w = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
			E = /^.[^:#\[\.,]*$/;
		h.filter = function (e, t, n) {
			var r = t[0];
			return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? h.find.matchesSelector(r, e) ? [r] : [] : h.find.matches(e, h.grep(t, function (e) {
				return 1 === e.nodeType
			}))
		}, h.fn.extend({
			find: function (e) {
				var t, n = [],
					r = this,
					i = r.length;
				if ("string" != typeof e) return this.pushStack(h(e).filter(function () {
					for (t = 0; i > t; t++)
						if (h.contains(r[t], this)) return true
				}));
				for (t = 0; i > t; t++) h.find(e, r[t], n);
				return n = this.pushStack(i > 1 ? h.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
			},
			filter: function (e) {
				return this.pushStack(S(this, e || [], false))
			},
			not: function (e) {
				return this.pushStack(S(this, e || [], true))
			},
			is: function (e) {
				return !!S(this, "string" == typeof e && b.test(e) ? h(e) : e || [], false).length
			}
		});
		var x, T = e.document,
			N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
			C = h.fn.init = function (e, t) {
				var n, r;
				if (!e) return this;
				if ("string" == typeof e) {
					if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || x).find(e) : this.constructor(t).find(e);
					if (n[1]) {
						if (t = t instanceof h ? t[0] : t, h.merge(this, h.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : T, true)), w.test(n[1]) && h.isPlainObject(t))
							for (n in t) h.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
						return this
					}
					if (r = T.getElementById(n[2]), r && r.parentNode) {
						if (r.id !== n[2]) return x.find(e);
						this.length = 1, this[0] = r
					}
					return this.context = T, this.selector = e, this
				}
				return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : h.isFunction(e) ? "undefined" != typeof x.ready ? x.ready(e) : e(h) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), h.makeArray(e, this))
			};
		C.prototype = h.fn, x = h(T);
		var k = /^(?:parents|prev(?:Until|All))/,
			L = {
				children: true,
				contents: true,
				next: true,
				prev: true
			};
		h.extend({
			dir: function (e, t, n) {
				var r = [],
					i = e[t];
				while (i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !h(i).is(n))) 1 === i.nodeType && r.push(i), i = i[t];
				return r
			},
			sibling: function (e, t) {
				for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
				return n
			}
		}), h.fn.extend({
			has: function (e) {
				var t, n = h(e, this),
					r = n.length;
				return this.filter(function () {
					for (t = 0; r > t; t++)
						if (h.contains(this, n[t])) return true
				})
			},
			closest: function (e, t) {
				for (var n, r = 0, i = this.length, s = [], o = b.test(e) || "string" != typeof e ? h(e, t || this.context) : 0; i > r; r++)
					for (n = this[r]; n && n !== t; n = n.parentNode)
						if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && h.find.matchesSelector(n, e))) {
							s.push(n);
							break
						}
				return this.pushStack(s.length > 1 ? h.unique(s) : s)
			},
			index: function (e) {
				return e ? "string" == typeof e ? h.inArray(this[0], h(e)) : h.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
			},
			add: function (e, t) {
				return this.pushStack(h.unique(h.merge(this.get(), h(e, t))))
			},
			addBack: function (e) {
				return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
			}
		}), h.each({
			parent: function (e) {
				var t = e.parentNode;
				return t && 11 !== t.nodeType ? t : null
			},
			parents: function (e) {
				return h.dir(e, "parentNode")
			},
			parentsUntil: function (e, t, n) {
				return h.dir(e, "parentNode", n)
			},
			next: function (e) {
				return A(e, "nextSibling")
			},
			prev: function (e) {
				return A(e, "previousSibling")
			},
			nextAll: function (e) {
				return h.dir(e, "nextSibling")
			},
			prevAll: function (e) {
				return h.dir(e, "previousSibling")
			},
			nextUntil: function (e, t, n) {
				return h.dir(e, "nextSibling", n)
			},
			prevUntil: function (e, t, n) {
				return h.dir(e, "previousSibling", n)
			},
			siblings: function (e) {
				return h.sibling((e.parentNode || {}).firstChild, e)
			},
			children: function (e) {
				return h.sibling(e.firstChild)
			},
			contents: function (e) {
				return h.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : h.merge([], e.childNodes)
			}
		}, function (e, t) {
			h.fn[e] = function (n, r) {
				var i = h.map(this, t, n);
				return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = h.filter(r, i)), this.length > 1 && (L[e] || (i = h.unique(i)), k.test(e) && (i = i.reverse())), this.pushStack(i)
			}
		});
		var O = /\S+/g,
			M = {};
		h.Callbacks = function (e) {
			e = "string" == typeof e ? M[e] || _(e) : h.extend({}, e);
			var t, n, r, i, s, o, u = [],
				a = !e.once && [],
				f = function (c) {
					for (n = e.memory && c, r = true, s = o || 0, o = 0, i = u.length, t = true; u && i > s; s++)
						if (u[s].apply(c[0], c[1]) === false && e.stopOnFalse) {
							n = false;
							break
						}
					t = false, u && (a ? a.length && f(a.shift()) : n ? u = [] : l.disable())
				},
				l = {
					add: function () {
						if (u) {
							var r = u.length;
							! function s(t) {
								h.each(t, function (t, n) {
									var r = h.type(n);
									"function" === r ? e.unique && l.has(n) || u.push(n) : n && n.length && "string" !== r && s(n)
								})
							}(arguments), t ? i = u.length : n && (o = r, f(n))
						}
						return this
					},
					remove: function () {
						return u && h.each(arguments, function (e, n) {
							var r;
							while ((r = h.inArray(n, u, r)) > -1) u.splice(r, 1), t && (i >= r && i--, s >= r && s--)
						}), this
					},
					has: function (e) {
						return e ? h.inArray(e, u) > -1 : !!u && !!u.length
					},
					empty: function () {
						return u = [], i = 0, this
					},
					disable: function () {
						return u = a = n = void 0, this
					},
					disabled: function () {
						return !u
					},
					lock: function () {
						return a = void 0, n || l.disable(), this
					},
					locked: function () {
						return !a
					},
					fireWith: function (e, n) {
						return !u || r && !a || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? a.push(n) : f(n)), this
					},
					fire: function () {
						return l.fireWith(this, arguments), this
					},
					fired: function () {
						return !!r
					}
				};
			return l
		}, h.extend({
			Deferred: function (e) {
				var t = [
						["resolve", "done", h.Callbacks("once memory"), "resolved"],
						["reject", "fail", h.Callbacks("once memory"), "rejected"],
						["notify", "progress", h.Callbacks("memory")]
					],
					n = "pending",
					r = {
						state: function () {
							return n
						},
						always: function () {
							return i.done(arguments).fail(arguments), this
						},
						then: function () {
							var e = arguments;
							return h.Deferred(function (n) {
								h.each(t, function (t, s) {
									var o = h.isFunction(e[t]) && e[t];
									i[s[1]](function () {
										var e = o && o.apply(this, arguments);
										e && h.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
									})
								}), e = null
							}).promise()
						},
						promise: function (e) {
							return null != e ? h.extend(e, r) : r
						}
					},
					i = {};
				return r.pipe = r.then, h.each(t, function (e, s) {
					var o = s[2],
						u = s[3];
					r[s[1]] = o.add, u && o.add(function () {
						n = u
					}, t[1 ^ e][2].disable, t[2][2].lock), i[s[0]] = function () {
						return i[s[0] + "With"](this === i ? r : this, arguments), this
					}, i[s[0] + "With"] = o.fireWith
				}), r.promise(i), e && e.call(i, i), i
			},
			when: function (e) {
				var t = 0,
					n = r.call(arguments),
					i = n.length,
					s = 1 !== i || e && h.isFunction(e.promise) ? i : 0,
					o = 1 === s ? e : h.Deferred(),
					u = function (e, t, n) {
						return function (i) {
							t[e] = this, n[e] = arguments.length > 1 ? r.call(arguments) : i, n === a ? o.notifyWith(t, n) : --s || o.resolveWith(t, n)
						}
					},
					a, f, l;
				if (i > 1)
					for (a = new Array(i), f = new Array(i), l = new Array(i); i > t; t++) n[t] && h.isFunction(n[t].promise) ? n[t].promise().done(u(t, l, n)).fail(o.reject).progress(u(t, f, a)) : --s;
				return s || o.resolveWith(l, n), o.promise()
			}
		});
		var D;
		h.fn.ready = function (e) {
			return h.ready.promise().done(e), this
		}, h.extend({
			isReady: false,
			readyWait: 1,
			holdReady: function (e) {
				e ? h.readyWait++ : h.ready(true)
			},
			ready: function (e) {
				if (e === true ? !--h.readyWait : !h.isReady) {
					if (!T.body) return setTimeout(h.ready);
					h.isReady = true, e !== true && --h.readyWait > 0 || (D.resolveWith(T, [h]), h.fn.triggerHandler && (h(T).triggerHandler("ready"), h(T).off("ready")))
				}
			}
		}), h.ready.promise = function (t) {
			if (!D)
				if (D = h.Deferred(), "complete" === T.readyState) setTimeout(h.ready);
				else if (T.addEventListener) T.addEventListener("DOMContentLoaded", H, false), e.addEventListener("load", H, false);
			else {
				T.attachEvent("onreadystatechange", H), e.attachEvent("onload", H);
				var n = false;
				try {
					n = null == e.frameElement && T.documentElement
				} catch (r) {}
				n && n.doScroll && ! function i() {
					if (!h.isReady) {
						try {
							n.doScroll("left")
						} catch (e) {
							return setTimeout(i, 50)
						}
						P(), h.ready()
					}
				}()
			}
			return D.promise(t)
		};
		var B = "undefined",
			j;
		for (j in h(l)) break;
		l.ownLast = "0" !== j, l.inlineBlockNeedsLayout = false, h(function () {
				var e, t, n, r;
				n = T.getElementsByTagName("body")[0], n && n.style && (t = T.createElement("div"), r = T.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== B && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
			}),
			function () {
				var e = T.createElement("div");
				if (null == l.deleteExpando) {
					l.deleteExpando = true;
					try {
						delete e.test
					} catch (t) {
						l.deleteExpando = false
					}
				}
				e = null
			}(), h.acceptData = function (e) {
				var t = h.noData[(e.nodeName + " ").toLowerCase()],
					n = +e.nodeType || 1;
				return 1 !== n && 9 !== n ? false : !t || t !== true && e.getAttribute("classid") === t
			};
		var F = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
			I = /([A-Z])/g;
		h.extend({
			cache: {},
			noData: {
				"applet ": true,
				"embed ": true,
				"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
			},
			hasData: function (e) {
				return e = e.nodeType ? h.cache[e[h.expando]] : e[h.expando], !!e && !R(e)
			},
			data: function (e, t, n) {
				return U(e, t, n)
			},
			removeData: function (e, t) {
				return z(e, t)
			},
			_data: function (e, t, n) {
				return U(e, t, n, true)
			},
			_removeData: function (e, t) {
				return z(e, t, true)
			}
		}), h.fn.extend({
			data: function (e, t) {
				var n, r, i, s = this[0],
					o = s && s.attributes;
				if (void 0 === e) {
					if (this.length && (i = h.data(s), 1 === s.nodeType && !h._data(s, "parsedAttrs"))) {
						n = o.length;
						while (n--) o[n] && (r = o[n].name, 0 === r.indexOf("data-") && (r = h.camelCase(r.slice(5)), q(s, r, i[r])));
						h._data(s, "parsedAttrs", true)
					}
					return i
				}
				return "object" == typeof e ? this.each(function () {
					h.data(this, e)
				}) : arguments.length > 1 ? this.each(function () {
					h.data(this, e, t)
				}) : s ? q(s, e, h.data(s, e)) : void 0
			},
			removeData: function (e) {
				return this.each(function () {
					h.removeData(this, e)
				})
			}
		}), h.extend({
			queue: function (e, t, n) {
				var r;
				return e ? (t = (t || "fx") + "queue", r = h._data(e, t), n && (!r || h.isArray(n) ? r = h._data(e, t, h.makeArray(n)) : r.push(n)), r || []) : void 0
			},
			dequeue: function (e, t) {
				t = t || "fx";
				var n = h.queue(e, t),
					r = n.length,
					i = n.shift(),
					s = h._queueHooks(e, t),
					o = function () {
						h.dequeue(e, t)
					};
				"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
			},
			_queueHooks: function (e, t) {
				var n = t + "queueHooks";
				return h._data(e, n) || h._data(e, n, {
					empty: h.Callbacks("once memory").add(function () {
						h._removeData(e, t + "queue"), h._removeData(e, n)
					})
				})
			}
		}), h.fn.extend({
			queue: function (e, t) {
				var n = 2;
				return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? h.queue(this[0], e) : void 0 === t ? this : this.each(function () {
					var n = h.queue(this, e, t);
					h._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && h.dequeue(this, e)
				})
			},
			dequeue: function (e) {
				return this.each(function () {
					h.dequeue(this, e)
				})
			},
			clearQueue: function (e) {
				return this.queue(e || "fx", [])
			},
			promise: function (e, t) {
				var n, r = 1,
					i = h.Deferred(),
					s = this,
					o = this.length,
					u = function () {
						--r || i.resolveWith(s, [s])
					};
				"string" != typeof e && (t = e, e = void 0), e = e || "fx";
				while (o--) n = h._data(s[o], e + "queueHooks"), n && n.empty && (r++, n.empty.add(u));
				return u(), i.promise(t)
			}
		});
		var W = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			X = ["Top", "Right", "Bottom", "Left"],
			V = function (e, t) {
				return e = t || e, "none" === h.css(e, "display") || !h.contains(e.ownerDocument, e)
			},
			$ = h.access = function (e, t, n, r, i, s, o) {
				var u = 0,
					a = e.length,
					f = null == n;
				if ("object" === h.type(n)) {
					i = true;
					for (u in n) h.access(e, t, u, n[u], true, s, o)
				} else if (void 0 !== r && (i = true, h.isFunction(r) || (o = true), f && (o ? (t.call(e, r), t = null) : (f = t, t = function (e, t, n) {
						return f.call(h(e), n)
					})), t))
					for (; a > u; u++) t(e[u], n, o ? r : r.call(e[u], u, t(e[u], n)));
				return i ? e : f ? t.call(e) : a ? t(e[0], n) : s
			},
			J = /^(?:checkbox|radio)$/i;
		! function () {
			var e = T.createElement("input"),
				t = T.createElement("div"),
				n = T.createDocumentFragment();
			if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === t.firstChild.nodeType, l.tbody = !t.getElementsByTagName("tbody").length, l.htmlSerialize = !!t.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== T.createElement("nav").cloneNode(true).outerHTML, e.type = "checkbox", e.checked = true, n.appendChild(e), l.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!t.cloneNode(true).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", l.checkClone = t.cloneNode(true).cloneNode(true).lastChild.checked, l.noCloneEvent = true, t.attachEvent && (t.attachEvent("onclick", function () {
					l.noCloneEvent = false
				}), t.cloneNode(true).click()), null == l.deleteExpando) {
				l.deleteExpando = true;
				try {
					delete t.test
				} catch (r) {
					l.deleteExpando = false
				}
			}
		}(),
		function () {
			var t, n, r = T.createElement("div");
			for (t in {
					submit: true,
					change: true,
					focusin: true
				}) n = "on" + t, (l[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), l[t + "Bubbles"] = r.attributes[n].expando === false);
			r = null
		}();
		var K = /^(?:input|select|textarea)$/i,
			Q = /^key/,
			G = /^(?:mouse|pointer|contextmenu)|click/,
			Y = /^(?:focusinfocus|focusoutblur)$/,
			Z = /^([^.]*)(?:\.(.+)|)$/;
		h.event = {
			global: {},
			add: function (e, t, n, r, i) {
				var s, o, u, a, f, l, c, p, d, v, m, g = h._data(e);
				if (g) {
					n.handler && (a = n, n = a.handler, i = a.selector), n.guid || (n.guid = h.guid++), (o = g.events) || (o = g.events = {}), (l = g.handle) || (l = g.handle = function (e) {
						return typeof h === B || e && h.event.triggered === e.type ? void 0 : h.event.dispatch.apply(l.elem, arguments)
					}, l.elem = e), t = (t || "").match(O) || [""], u = t.length;
					while (u--) s = Z.exec(t[u]) || [], d = m = s[1], v = (s[2] || "").split(".").sort(), d && (f = h.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = h.event.special[d] || {}, c = h.extend({
						type: d,
						origType: m,
						data: r,
						handler: n,
						guid: n.guid,
						selector: i,
						needsContext: i && h.expr.match.needsContext.test(i),
						namespace: v.join(".")
					}, a), (p = o[d]) || (p = o[d] = [], p.delegateCount = 0, f.setup && f.setup.call(e, r, v, l) !== false || (e.addEventListener ? e.addEventListener(d, l, false) : e.attachEvent && e.attachEvent("on" + d, l))), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), h.event.global[d] = true);
					e = null
				}
			},
			remove: function (e, t, n, r, i) {
				var s, o, u, a, f, l, c, p, d, v, m, g = h.hasData(e) && h._data(e);
				if (g && (l = g.events)) {
					t = (t || "").match(O) || [""], f = t.length;
					while (f--)
						if (u = Z.exec(t[f]) || [], d = m = u[1], v = (u[2] || "").split(".").sort(), d) {
							c = h.event.special[d] || {}, d = (r ? c.delegateType : c.bindType) || d, p = l[d] || [], u = u[2] && new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = p.length;
							while (s--) o = p[s], !i && m !== o.origType || n && n.guid !== o.guid || u && !u.test(o.namespace) || r && r !== o.selector && ("**" !== r || !o.selector) || (p.splice(s, 1), o.selector && p.delegateCount--, c.remove && c.remove.call(e, o));
							a && !p.length && (c.teardown && c.teardown.call(e, v, g.handle) !== false || h.removeEvent(e, d, g.handle), delete l[d])
						} else
							for (d in l) h.event.remove(e, d + t[f], n, r, true);
					h.isEmptyObject(l) && (delete g.handle, h._removeData(e, "events"))
				}
			},
			trigger: function (t, n, r, i) {
				var s, o, u, a, l, c, p, d = [r || T],
					v = f.call(t, "type") ? t.type : t,
					m = f.call(t, "namespace") ? t.namespace.split(".") : [];
				if (u = c = r = r || T, 3 !== r.nodeType && 8 !== r.nodeType && !Y.test(v + h.event.triggered) && (v.indexOf(".") >= 0 && (m = v.split("."), v = m.shift(), m.sort()), o = v.indexOf(":") < 0 && "on" + v, t = t[h.expando] ? t : new h.Event(v, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = m.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : h.makeArray(n, [t]), l = h.event.special[v] || {}, i || !l.trigger || l.trigger.apply(r, n) !== false)) {
					if (!i && !l.noBubble && !h.isWindow(r)) {
						for (a = l.delegateType || v, Y.test(a + v) || (u = u.parentNode); u; u = u.parentNode) d.push(u), c = u;
						c === (r.ownerDocument || T) && d.push(c.defaultView || c.parentWindow || e)
					}
					p = 0;
					while ((u = d[p++]) && !t.isPropagationStopped()) t.type = p > 1 ? a : l.bindType || v, s = (h._data(u, "events") || {})[t.type] && h._data(u, "handle"), s && s.apply(u, n), s = o && u[o], s && s.apply && h.acceptData(u) && (t.result = s.apply(u, n), t.result === false && t.preventDefault());
					if (t.type = v, !i && !t.isDefaultPrevented() && (!l._default || l._default.apply(d.pop(), n) === false) && h.acceptData(r) && o && r[v] && !h.isWindow(r)) {
						c = r[o], c && (r[o] = null), h.event.triggered = v;
						try {
							r[v]()
						} catch (g) {}
						h.event.triggered = void 0, c && (r[o] = c)
					}
					return t.result
				}
			},
			dispatch: function (e) {
				e = h.event.fix(e);
				var t, n, i, s, o, u = [],
					a = r.call(arguments),
					f = (h._data(this, "events") || {})[e.type] || [],
					l = h.event.special[e.type] || {};
				if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== false) {
					u = h.event.handlers.call(this, e, f), t = 0;
					while ((s = u[t++]) && !e.isPropagationStopped()) {
						e.currentTarget = s.elem, o = 0;
						while ((i = s.handlers[o++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((h.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, a), void 0 !== n && (e.result = n) === false && (e.preventDefault(), e.stopPropagation()))
					}
					return l.postDispatch && l.postDispatch.call(this, e), e.result
				}
			},
			handlers: function (e, t) {
				var n, r, i, s, o = [],
					u = t.delegateCount,
					a = e.target;
				if (u && a.nodeType && (!e.button || "click" !== e.type))
					for (; a != this; a = a.parentNode || this)
						if (1 === a.nodeType && (a.disabled !== true || "click" !== e.type)) {
							for (i = [], s = 0; u > s; s++) r = t[s], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? h(n, this).index(a) >= 0 : h.find(n, this, null, [a]).length), i[n] && i.push(r);
							i.length && o.push({
								elem: a,
								handlers: i
							})
						}
				return u < t.length && o.push({
					elem: this,
					handlers: t.slice(u)
				}), o
			},
			fix: function (e) {
				if (e[h.expando]) return e;
				var t, n, r, i = e.type,
					s = e,
					o = this.fixHooks[i];
				o || (this.fixHooks[i] = o = G.test(i) ? this.mouseHooks : Q.test(i) ? this.keyHooks : {}), r = o.props ? this.props.concat(o.props) : this.props, e = new h.Event(s), t = r.length;
				while (t--) n = r[t], e[n] = s[n];
				return e.target || (e.target = s.srcElement || T), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, o.filter ? o.filter(e, s) : e
			},
			props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
			fixHooks: {},
			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function (e, t) {
					return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
				}
			},
			mouseHooks: {
				props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function (e, t) {
					var n, r, i, s = t.button,
						o = t.fromElement;
					return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || T, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
				}
			},
			special: {
				load: {
					noBubble: true
				},
				focus: {
					trigger: function () {
						if (this !== nt() && this.focus) try {
							return this.focus(), false
						} catch (e) {}
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function () {
						return this === nt() && this.blur ? (this.blur(), false) : void 0
					},
					delegateType: "focusout"
				},
				click: {
					trigger: function () {
						return h.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), false) : void 0
					},
					_default: function (e) {
						return h.nodeName(e.target, "a")
					}
				},
				beforeunload: {
					postDispatch: function (e) {
						void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
					}
				}
			},
			simulate: function (e, t, n, r) {
				var i = h.extend(new h.Event, n, {
					type: e,
					isSimulated: true,
					originalEvent: {}
				});
				r ? h.event.trigger(i, null, t) : h.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
			}
		}, h.removeEvent = T.removeEventListener ? function (e, t, n) {
			e.removeEventListener && e.removeEventListener(t, n, false)
		} : function (e, t, n) {
			var r = "on" + t;
			e.detachEvent && (typeof e[r] === B && (e[r] = null), e.detachEvent(r, n))
		}, h.Event = function (e, t) {
			return this instanceof h.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === false ? et : tt) : this.type = e, t && h.extend(this, t), this.timeStamp = e && e.timeStamp || h.now(), void(this[h.expando] = true)) : new h.Event(e, t)
		}, h.Event.prototype = {
			isDefaultPrevented: tt,
			isPropagationStopped: tt,
			isImmediatePropagationStopped: tt,
			preventDefault: function () {
				var e = this.originalEvent;
				this.isDefaultPrevented = et, e && (e.preventDefault ? e.preventDefault() : e.returnValue = false)
			},
			stopPropagation: function () {
				var e = this.originalEvent;
				this.isPropagationStopped = et, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = true)
			},
			stopImmediatePropagation: function () {
				var e = this.originalEvent;
				this.isImmediatePropagationStopped = et, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
			}
		}, h.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function (e, t) {
			h.event.special[e] = {
				delegateType: t,
				bindType: t,
				handle: function (e) {
					var n, r = this,
						i = e.relatedTarget,
						s = e.handleObj;
					return (!i || i !== r && !h.contains(r, i)) && (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n
				}
			}
		}), l.submitBubbles || (h.event.special.submit = {
			setup: function () {
				return h.nodeName(this, "form") ? false : void h.event.add(this, "click._submit keypress._submit", function (e) {
					var t = e.target,
						n = h.nodeName(t, "input") || h.nodeName(t, "button") ? t.form : void 0;
					n && !h._data(n, "submitBubbles") && (h.event.add(n, "submit._submit", function (e) {
						e._submit_bubble = true
					}), h._data(n, "submitBubbles", true))
				})
			},
			postDispatch: function (e) {
				e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && h.event.simulate("submit", this.parentNode, e, true))
			},
			teardown: function () {
				return h.nodeName(this, "form") ? false : void h.event.remove(this, "._submit")
			}
		}), l.changeBubbles || (h.event.special.change = {
			setup: function () {
				return K.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (h.event.add(this, "propertychange._change", function (e) {
					"checked" === e.originalEvent.propertyName && (this._just_changed = true)
				}), h.event.add(this, "click._change", function (e) {
					this._just_changed && !e.isTrigger && (this._just_changed = false), h.event.simulate("change", this, e, true)
				})), false) : void h.event.add(this, "beforeactivate._change", function (e) {
					var t = e.target;
					K.test(t.nodeName) && !h._data(t, "changeBubbles") && (h.event.add(t, "change._change", function (e) {
						!this.parentNode || e.isSimulated || e.isTrigger || h.event.simulate("change", this.parentNode, e, true)
					}), h._data(t, "changeBubbles", true))
				})
			},
			handle: function (e) {
				var t = e.target;
				return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
			},
			teardown: function () {
				return h.event.remove(this, "._change"), !K.test(this.nodeName)
			}
		}), l.focusinBubbles || h.each({
			focus: "focusin",
			blur: "focusout"
		}, function (e, t) {
			var n = function (e) {
				h.event.simulate(t, e.target, h.event.fix(e), true)
			};
			h.event.special[t] = {
				setup: function () {
					var r = this.ownerDocument || this,
						i = h._data(r, t);
					i || r.addEventListener(e, n, true), h._data(r, t, (i || 0) + 1)
				},
				teardown: function () {
					var r = this.ownerDocument || this,
						i = h._data(r, t) - 1;
					i ? h._data(r, t, i) : (r.removeEventListener(e, n, true), h._removeData(r, t))
				}
			}
		}), h.fn.extend({
			on: function (e, t, n, r, i) {
				var s, o;
				if ("object" == typeof e) {
					"string" != typeof t && (n = n || t, t = void 0);
					for (s in e) this.on(s, t, n, e[s], i);
					return this
				}
				if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === false) r = tt;
				else if (!r) return this;
				return 1 === i && (o = r, r = function (e) {
					return h().off(e), o.apply(this, arguments)
				}, r.guid = o.guid || (o.guid = h.guid++)), this.each(function () {
					h.event.add(this, e, r, n, t)
				})
			},
			one: function (e, t, n, r) {
				return this.on(e, t, n, r, 1)
			},
			off: function (e, t, n) {
				var r, i;
				if (e && e.preventDefault && e.handleObj) return r = e.handleObj, h(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
				if ("object" == typeof e) {
					for (i in e) this.off(i, t, e[i]);
					return this
				}
				return (t === false || "function" == typeof t) && (n = t, t = void 0), n === false && (n = tt), this.each(function () {
					h.event.remove(this, e, n, t)
				})
			},
			trigger: function (e, t) {
				return this.each(function () {
					h.event.trigger(e, t, this)
				})
			},
			triggerHandler: function (e, t) {
				var n = this[0];
				return n ? h.event.trigger(e, t, n, true) : void 0
			}
		});
		var it = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
			st = / jQuery\d+="(?:null|\d+)"/g,
			ot = new RegExp("<(?:" + it + ")[\\s/>]", "i"),
			ut = /^\s+/,
			at = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
			ft = /<([\w:]+)/,
			lt = /<tbody/i,
			ct = /<|&#?\w+;/,
			ht = /<(?:script|style|link)/i,
			pt = /checked\s*(?:[^=]|=\s*.checked.)/i,
			dt = /^$|\/(?:java|ecma)script/i,
			vt = /^true\/(.*)/,
			mt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
			gt = {
				option: [1, "<select multiple='multiple'>", "</select>"],
				legend: [1, "<fieldset>", "</fieldset>"],
				area: [1, "<map>", "</map>"],
				param: [1, "<object>", "</object>"],
				thead: [1, "<table>", "</table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				_default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
			},
			yt = rt(T),
			bt = yt.appendChild(T.createElement("div"));
		gt.optgroup = gt.option, gt.tbody = gt.tfoot = gt.colgroup = gt.caption = gt.thead, gt.th = gt.td, h.extend({
			clone: function (e, t, n) {
				var r, i, s, o, u, a = h.contains(e.ownerDocument, e);
				if (l.html5Clone || h.isXMLDoc(e) || !ot.test("<" + e.nodeName + ">") ? s = e.cloneNode(true) : (bt.innerHTML = e.outerHTML, bt.removeChild(s = bt.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || h.isXMLDoc(e)))
					for (r = wt(s), u = wt(e), o = 0; null != (i = u[o]); ++o) r[o] && kt(i, r[o]);
				if (t)
					if (n)
						for (u = u || wt(e), r = r || wt(s), o = 0; null != (i = u[o]); o++) Ct(i, r[o]);
					else Ct(e, s);
				return r = wt(s, "script"), r.length > 0 && Nt(r, !a && wt(e, "script")), r = u = i = null, s
			},
			buildFragment: function (e, t, n, r) {
				for (var i, s, o, u, a, f, c, p = e.length, d = rt(t), v = [], m = 0; p > m; m++)
					if (s = e[m], s || 0 === s)
						if ("object" === h.type(s)) h.merge(v, s.nodeType ? [s] : s);
						else if (ct.test(s)) {
					u = u || d.appendChild(t.createElement("div")), a = (ft.exec(s) || ["", ""])[1].toLowerCase(), c = gt[a] || gt._default, u.innerHTML = c[1] + s.replace(at, "<$1></$2>") + c[2], i = c[0];
					while (i--) u = u.lastChild;
					if (!l.leadingWhitespace && ut.test(s) && v.push(t.createTextNode(ut.exec(s)[0])), !l.tbody) {
						s = "table" !== a || lt.test(s) ? "<table>" !== c[1] || lt.test(s) ? 0 : u : u.firstChild, i = s && s.childNodes.length;
						while (i--) h.nodeName(f = s.childNodes[i], "tbody") && !f.childNodes.length && s.removeChild(f)
					}
					h.merge(v, u.childNodes), u.textContent = "";
					while (u.firstChild) u.removeChild(u.firstChild);
					u = d.lastChild
				} else v.push(t.createTextNode(s));
				u && d.removeChild(u), l.appendChecked || h.grep(wt(v, "input"), Et), m = 0;
				while (s = v[m++])
					if ((!r || -1 === h.inArray(s, r)) && (o = h.contains(s.ownerDocument, s), u = wt(d.appendChild(s), "script"), o && Nt(u), n)) {
						i = 0;
						while (s = u[i++]) dt.test(s.type || "") && n.push(s)
					}
				return u = null, d
			},
			cleanData: function (e, t) {
				for (var r, i, s, o, u = 0, a = h.expando, f = h.cache, c = l.deleteExpando, p = h.event.special; null != (r = e[u]); u++)
					if ((t || h.acceptData(r)) && (s = r[a], o = s && f[s])) {
						if (o.events)
							for (i in o.events) p[i] ? h.event.remove(r, i) : h.removeEvent(r, i, o.handle);
						f[s] && (delete f[s], c ? delete r[a] : typeof r.removeAttribute !== B ? r.removeAttribute(a) : r[a] = null, n.push(s))
					}
			}
		}), h.fn.extend({
			text: function (e) {
				return $(this, function (e) {
					return void 0 === e ? h.text(this) : this.empty().append((this[0] && this[0].ownerDocument || T).createTextNode(e))
				}, null, e, arguments.length)
			},
			append: function () {
				return this.domManip(arguments, function (e) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var t = St(this, e);
						t.appendChild(e)
					}
				})
			},
			prepend: function () {
				return this.domManip(arguments, function (e) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var t = St(this, e);
						t.insertBefore(e, t.firstChild)
					}
				})
			},
			before: function () {
				return this.domManip(arguments, function (e) {
					this.parentNode && this.parentNode.insertBefore(e, this)
				})
			},
			after: function () {
				return this.domManip(arguments, function (e) {
					this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
				})
			},
			remove: function (e, t) {
				for (var n, r = e ? h.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || h.cleanData(wt(n)), n.parentNode && (t && h.contains(n.ownerDocument, n) && Nt(wt(n, "script")), n.parentNode.removeChild(n));
				return this
			},
			empty: function () {
				for (var e, t = 0; null != (e = this[t]); t++) {
					1 === e.nodeType && h.cleanData(wt(e, false));
					while (e.firstChild) e.removeChild(e.firstChild);
					e.options && h.nodeName(e, "select") && (e.options.length = 0)
				}
				return this
			},
			clone: function (e, t) {
				return e = null == e ? false : e, t = null == t ? e : t, this.map(function () {
					return h.clone(this, e, t)
				})
			},
			html: function (e) {
				return $(this, function (e) {
					var t = this[0] || {},
						n = 0,
						r = this.length;
					if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(st, "") : void 0;
					if (!("string" != typeof e || ht.test(e) || !l.htmlSerialize && ot.test(e) || !l.leadingWhitespace && ut.test(e) || gt[(ft.exec(e) || ["", ""])[1].toLowerCase()])) {
						e = e.replace(at, "<$1></$2>");
						try {
							for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (h.cleanData(wt(t, false)), t.innerHTML = e);
							t = 0
						} catch (i) {}
					}
					t && this.empty().append(e)
				}, null, e, arguments.length)
			},
			replaceWith: function () {
				var e = arguments[0];
				return this.domManip(arguments, function (t) {
					e = this.parentNode, h.cleanData(wt(this)), e && e.replaceChild(t, this)
				}), e && (e.length || e.nodeType) ? this : this.remove()
			},
			detach: function (e) {
				return this.remove(e, true)
			},
			domManip: function (e, t) {
				e = i.apply([], e);
				var n, r, s, o, u, a, f = 0,
					c = this.length,
					p = this,
					d = c - 1,
					v = e[0],
					m = h.isFunction(v);
				if (m || c > 1 && "string" == typeof v && !l.checkClone && pt.test(v)) return this.each(function (n) {
					var r = p.eq(n);
					m && (e[0] = v.call(this, n, r.html())), r.domManip(e, t)
				});
				if (c && (a = h.buildFragment(e, this[0].ownerDocument, false, this), n = a.firstChild, 1 === a.childNodes.length && (a = n), n)) {
					for (o = h.map(wt(a, "script"), xt), s = o.length; c > f; f++) r = a, f !== d && (r = h.clone(r, true, true), s && h.merge(o, wt(r, "script"))), t.call(this[f], r, f);
					if (s)
						for (u = o[o.length - 1].ownerDocument, h.map(o, Tt), f = 0; s > f; f++) r = o[f], dt.test(r.type || "") && !h._data(r, "globalEval") && h.contains(u, r) && (r.src ? h._evalUrl && h._evalUrl(r.src) : h.globalEval((r.text || r.textContent || r.innerHTML || "").replace(mt, "")));
					a = n = null
				}
				return this
			}
		}), h.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function (e, t) {
			h.fn[e] = function (e) {
				for (var n, r = 0, i = [], o = h(e), u = o.length - 1; u >= r; r++) n = r === u ? this : this.clone(true), h(o[r])[t](n), s.apply(i, n.get());
				return this.pushStack(i)
			}
		});
		var Lt, At = {};
		! function () {
			var e;
			l.shrinkWrapBlocks = function () {
				if (null != e) return e;
				e = false;
				var t, n, r;
				return n = T.getElementsByTagName("body")[0], n && n.style ? (t = T.createElement("div"), r = T.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== B && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(T.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
			}
		}();
		var _t = /^margin/,
			Dt = new RegExp("^(" + W + ")(?!px)[a-z%]+$", "i"),
			Pt, Ht, Bt = /^(top|right|bottom|left)$/;
		e.getComputedStyle ? (Pt = function (t) {
			return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
		}, Ht = function (e, t, n) {
			var r, i, s, o, u = e.style;
			return n = n || Pt(e), o = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== o || h.contains(e.ownerDocument, e) || (o = h.style(e, t)), Dt.test(o) && _t.test(t) && (r = u.width, i = u.minWidth, s = u.maxWidth, u.minWidth = u.maxWidth = u.width = o, o = n.width, u.width = r, u.minWidth = i, u.maxWidth = s)), void 0 === o ? o : o + ""
		}) : T.documentElement.currentStyle && (Pt = function (e) {
			return e.currentStyle
		}, Ht = function (e, t, n) {
			var r, i, s, o, u = e.style;
			return n = n || Pt(e), o = n ? n[t] : void 0, null == o && u && u[t] && (o = u[t]), Dt.test(o) && !Bt.test(t) && (r = u.left, i = e.runtimeStyle, s = i && i.left, s && (i.left = e.currentStyle.left), u.left = "fontSize" === t ? "1em" : o, o = u.pixelLeft + "px", u.left = r, s && (i.left = s)), void 0 === o ? o : o + "" || "auto"
		}), ! function () {
			var t, n, r, i, s, o, u;
			if (t = T.createElement("div"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], n = r && r.style) {
				n.cssText = "float:left;opacity:.5", l.opacity = "0.5" === n.opacity, l.cssFloat = !!n.cssFloat, t.style.backgroundClip = "content-box", t.cloneNode(true).style.backgroundClip = "", l.clearCloneStyle = "content-box" === t.style.backgroundClip, l.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, h.extend(l, {
					reliableHiddenOffsets: function () {
						return null == o && a(), o
					},
					boxSizingReliable: function () {
						return null == s && a(), s
					},
					pixelPosition: function () {
						return null == i && a(), i
					},
					reliableMarginRight: function () {
						return null == u && a(), u
					}
				});

				function a() {
					var t, n, r, a;
					n = T.getElementsByTagName("body")[0], n && n.style && (t = T.createElement("div"), r = T.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", i = s = false, u = true, e.getComputedStyle && (i = "1%" !== (e.getComputedStyle(t, null) || {}).top, s = "4px" === (e.getComputedStyle(t, null) || {
						width: "4px"
					}).width, a = t.appendChild(T.createElement("div")), a.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", a.style.marginRight = a.style.width = "0", t.style.width = "1px", u = !parseFloat((e.getComputedStyle(a, null) || {}).marginRight), t.removeChild(a)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", a = t.getElementsByTagName("td"), a[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = 0 === a[0].offsetHeight, o && (a[0].style.display = "", a[1].style.display = "none", o = 0 === a[0].offsetHeight), n.removeChild(r))
				}
			}
		}(), h.swap = function (e, t, n, r) {
			var i, s, o = {};
			for (s in t) o[s] = e.style[s], e.style[s] = t[s];
			i = n.apply(e, r || []);
			for (s in t) e.style[s] = o[s];
			return i
		};
		var Ft = /alpha\([^)]*\)/i,
			It = /opacity\s*=\s*([^)]*)/,
			qt = /^(none|table(?!-c[ea]).+)/,
			Rt = new RegExp("^(" + W + ")(.*)$", "i"),
			Ut = new RegExp("^([+-])=(" + W + ")", "i"),
			zt = {
				position: "absolute",
				visibility: "hidden",
				display: "block"
			},
			Wt = {
				letterSpacing: "0",
				fontWeight: "400"
			},
			Xt = ["Webkit", "O", "Moz", "ms"];
		h.extend({
			cssHooks: {
				opacity: {
					get: function (e, t) {
						if (t) {
							var n = Ht(e, "opacity");
							return "" === n ? "1" : n
						}
					}
				}
			},
			cssNumber: {
				columnCount: true,
				fillOpacity: true,
				flexGrow: true,
				flexShrink: true,
				fontWeight: true,
				lineHeight: true,
				opacity: true,
				order: true,
				orphans: true,
				widows: true,
				zIndex: true,
				zoom: true
			},
			cssProps: {
				"float": l.cssFloat ? "cssFloat" : "styleFloat"
			},
			style: function (e, t, n, r) {
				if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
					var i, s, o, u = h.camelCase(t),
						a = e.style;
					if (t = h.cssProps[u] || (h.cssProps[u] = Vt(a, u)), o = h.cssHooks[t] || h.cssHooks[u], void 0 === n) return o && "get" in o && void 0 !== (i = o.get(e, false, r)) ? i : a[t];
					if (s = typeof n, "string" === s && (i = Ut.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(h.css(e, t)), s = "number"), null != n && n === n && ("number" !== s || h.cssNumber[u] || (n += "px"), l.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (a[t] = "inherit"), !(o && "set" in o && void 0 === (n = o.set(e, n, r))))) try {
						a[t] = n
					} catch (f) {}
				}
			},
			css: function (e, t, n, r) {
				var i, s, o, u = h.camelCase(t);
				return t = h.cssProps[u] || (h.cssProps[u] = Vt(e.style, u)), o = h.cssHooks[t] || h.cssHooks[u], o && "get" in o && (s = o.get(e, true, n)), void 0 === s && (s = Ht(e, t, r)), "normal" === s && t in Wt && (s = Wt[t]), "" === n || n ? (i = parseFloat(s), n === true || h.isNumeric(i) ? i || 0 : s) : s
			}
		}), h.each(["height", "width"], function (e, t) {
			h.cssHooks[t] = {
				get: function (e, n, r) {
					return n ? qt.test(h.css(e, "display")) && 0 === e.offsetWidth ? h.swap(e, zt, function () {
						return Qt(e, t, r)
					}) : Qt(e, t, r) : void 0
				},
				set: function (e, n, r) {
					var i = r && Pt(e);
					return Jt(e, n, r ? Kt(e, t, r, l.boxSizing && "border-box" === h.css(e, "boxSizing", false, i), i) : 0)
				}
			}
		}), l.opacity || (h.cssHooks.opacity = {
			get: function (e, t) {
				return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
			},
			set: function (e, t) {
				var n = e.style,
					r = e.currentStyle,
					i = h.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
					s = r && r.filter || n.filter || "";
				n.zoom = 1, (t >= 1 || "" === t) && "" === h.trim(s.replace(Ft, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = Ft.test(s) ? s.replace(Ft, i) : s + " " + i)
			}
		}), h.cssHooks.marginRight = jt(l.reliableMarginRight, function (e, t) {
			return t ? h.swap(e, {
				display: "inline-block"
			}, Ht, [e, "marginRight"]) : void 0
		}), h.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function (e, t) {
			h.cssHooks[e + t] = {
				expand: function (n) {
					for (var r = 0, i = {}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + X[r] + t] = s[r] || s[r - 2] || s[0];
					return i
				}
			}, _t.test(e) || (h.cssHooks[e + t].set = Jt)
		}), h.fn.extend({
			css: function (e, t) {
				return $(this, function (e, t, n) {
					var r, i, s = {},
						o = 0;
					if (h.isArray(t)) {
						for (r = Pt(e), i = t.length; i > o; o++) s[t[o]] = h.css(e, t[o], false, r);
						return s
					}
					return void 0 !== n ? h.style(e, t, n) : h.css(e, t)
				}, e, t, arguments.length > 1)
			},
			show: function () {
				return $t(this, true)
			},
			hide: function () {
				return $t(this)
			},
			toggle: function (e) {
				return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
					V(this) ? h(this).show() : h(this).hide()
				})
			}
		}), h.Tween = Gt, Gt.prototype = {
			constructor: Gt,
			init: function (e, t, n, r, i, s) {
				this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (h.cssNumber[n] ? "" : "px")
			},
			cur: function () {
				var e = Gt.propHooks[this.prop];
				return e && e.get ? e.get(this) : Gt.propHooks._default.get(this)
			},
			run: function (e) {
				var t, n = Gt.propHooks[this.prop];
				return this.options.duration ? this.pos = t = h.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Gt.propHooks._default.set(this), this
			}
		}, Gt.prototype.init.prototype = Gt.prototype, Gt.propHooks = {
			_default: {
				get: function (e) {
					var t;
					return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = h.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
				},
				set: function (e) {
					h.fx.step[e.prop] ? h.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[h.cssProps[e.prop]] || h.cssHooks[e.prop]) ? h.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
				}
			}
		}, Gt.propHooks.scrollTop = Gt.propHooks.scrollLeft = {
			set: function (e) {
				e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
			}
		}, h.easing = {
			linear: function (e) {
				return e
			},
			swing: function (e) {
				return .5 - Math.cos(e * Math.PI) / 2
			}
		}, h.fx = Gt.prototype.init, h.fx.step = {};
		var Yt, Zt, en = /^(?:toggle|show|hide)$/,
			tn = new RegExp("^(?:([+-])=|)(" + W + ")([a-z%]*)$", "i"),
			nn = /queueHooks$/,
			rn = [fn],
			sn = {
				"*": [function (e, t) {
					var n = this.createTween(e, t),
						r = n.cur(),
						i = tn.exec(t),
						s = i && i[3] || (h.cssNumber[e] ? "" : "px"),
						o = (h.cssNumber[e] || "px" !== s && +r) && tn.exec(h.css(n.elem, e)),
						u = 1,
						a = 20;
					if (o && o[3] !== s) {
						s = s || o[3], i = i || [], o = +r || 1;
						do u = u || ".5", o /= u, h.style(n.elem, e, o + s); while (u !== (u = n.cur() / r) && 1 !== u && --a)
					}
					return i && (o = n.start = +o || +r || 0, n.unit = s, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]), n
				}]
			};
		h.Animation = h.extend(cn, {
				tweener: function (e, t) {
					h.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
					for (var n, r = 0, i = e.length; i > r; r++) n = e[r], sn[n] = sn[n] || [], sn[n].unshift(t)
				},
				prefilter: function (e, t) {
					t ? rn.unshift(e) : rn.push(e)
				}
			}), h.speed = function (e, t, n) {
				var r = e && "object" == typeof e ? h.extend({}, e) : {
					complete: n || !n && t || h.isFunction(e) && e,
					duration: e,
					easing: n && t || t && !h.isFunction(t) && t
				};
				return r.duration = h.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in h.fx.speeds ? h.fx.speeds[r.duration] : h.fx.speeds._default, (null == r.queue || r.queue === true) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
					h.isFunction(r.old) && r.old.call(this), r.queue && h.dequeue(this, r.queue)
				}, r
			}, h.fn.extend({
				fadeTo: function (e, t, n, r) {
					return this.filter(V).css("opacity", 0).show().end().animate({
						opacity: t
					}, e, n, r)
				},
				animate: function (e, t, n, r) {
					var i = h.isEmptyObject(e),
						s = h.speed(t, n, r),
						o = function () {
							var t = cn(this, h.extend({}, e), s);
							(i || h._data(this, "finish")) && t.stop(true)
						};
					return o.finish = o, i || s.queue === false ? this.each(o) : this.queue(s.queue, o)
				},
				stop: function (e, t, n) {
					var r = function (e) {
						var t = e.stop;
						delete e.stop, t(n)
					};
					return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== false && this.queue(e || "fx", []), this.each(function () {
						var t = true,
							i = null != e && e + "queueHooks",
							s = h.timers,
							o = h._data(this);
						if (i) o[i] && o[i].stop && r(o[i]);
						else
							for (i in o) o[i] && o[i].stop && nn.test(i) && r(o[i]);
						for (i = s.length; i--;) s[i].elem !== this || null != e && s[i].queue !== e || (s[i].anim.stop(n), t = false, s.splice(i, 1));
						(t || !n) && h.dequeue(this, e)
					})
				},
				finish: function (e) {
					return e !== false && (e = e || "fx"), this.each(function () {
						var t, n = h._data(this),
							r = n[e + "queue"],
							i = n[e + "queueHooks"],
							s = h.timers,
							o = r ? r.length : 0;
						for (n.finish = true, h.queue(this, e, []), i && i.stop && i.stop.call(this, true), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(true), s.splice(t, 1));
						for (t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
						delete n.finish
					})
				}
			}), h.each(["toggle", "show", "hide"], function (e, t) {
				var n = h.fn[t];
				h.fn[t] = function (e, r, i) {
					return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(un(t, true), e, r, i)
				}
			}), h.each({
				slideDown: un("show"),
				slideUp: un("hide"),
				slideToggle: un("toggle"),
				fadeIn: {
					opacity: "show"
				},
				fadeOut: {
					opacity: "hide"
				},
				fadeToggle: {
					opacity: "toggle"
				}
			}, function (e, t) {
				h.fn[e] = function (e, n, r) {
					return this.animate(t, e, n, r)
				}
			}), h.timers = [], h.fx.tick = function () {
				var e, t = h.timers,
					n = 0;
				for (Yt = h.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
				t.length || h.fx.stop(), Yt = void 0
			}, h.fx.timer = function (e) {
				h.timers.push(e), e() ? h.fx.start() : h.timers.pop()
			}, h.fx.interval = 13, h.fx.start = function () {
				Zt || (Zt = setInterval(h.fx.tick, h.fx.interval))
			}, h.fx.stop = function () {
				clearInterval(Zt), Zt = null
			}, h.fx.speeds = {
				slow: 600,
				fast: 200,
				_default: 400
			}, h.fn.delay = function (e, t) {
				return e = h.fx ? h.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
					var r = setTimeout(t, e);
					n.stop = function () {
						clearTimeout(r)
					}
				})
			},
			function () {
				var e, t, n, r, i;
				t = T.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], n = T.createElement("select"), i = n.appendChild(T.createElement("option")), e = t.getElementsByTagName("input")[0], r.style.cssText = "top:1px", l.getSetAttribute = "t" !== t.className, l.style = /top/.test(r.getAttribute("style")), l.hrefNormalized = "/a" === r.getAttribute("href"), l.checkOn = !!e.value, l.optSelected = i.selected, l.enctype = !!T.createElement("form").enctype, n.disabled = true, l.optDisabled = !i.disabled, e = T.createElement("input"), e.setAttribute("value", ""), l.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), l.radioValue = "t" === e.value
			}();
		var hn = /\r/g;
		h.fn.extend({
			val: function (e) {
				var t, n, r, i = this[0];
				if (arguments.length) return r = h.isFunction(e), this.each(function (n) {
					var i;
					1 === this.nodeType && (i = r ? e.call(this, n, h(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : h.isArray(i) && (i = h.map(i, function (e) {
						return null == e ? "" : e + ""
					})), t = h.valHooks[this.type] || h.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
				});
				if (i) return t = h.valHooks[i.type] || h.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(hn, "") : null == n ? "" : n)
			}
		}), h.extend({
			valHooks: {
				option: {
					get: function (e) {
						var t = h.find.attr(e, "value");
						return null != t ? t : h.trim(h.text(e))
					}
				},
				select: {
					get: function (e) {
						for (var t, n, r = e.options, i = e.selectedIndex, s = "select-one" === e.type || 0 > i, o = s ? null : [], u = s ? i + 1 : r.length, a = 0 > i ? u : s ? i : 0; u > a; a++)
							if (n = r[a], !(!n.selected && a !== i || (l.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && h.nodeName(n.parentNode, "optgroup"))) {
								if (t = h(n).val(), s) return t;
								o.push(t)
							}
						return o
					},
					set: function (e, t) {
						var n, r, i = e.options,
							s = h.makeArray(t),
							o = i.length;
						while (o--)
							if (r = i[o], h.inArray(h.valHooks.option.get(r), s) >= 0) try {
								r.selected = n = true
							} catch (u) {
								r.scrollHeight
							} else r.selected = false;
						return n || (e.selectedIndex = -1), i
					}
				}
			}
		}), h.each(["radio", "checkbox"], function () {
			h.valHooks[this] = {
				set: function (e, t) {
					return h.isArray(t) ? e.checked = h.inArray(h(e).val(), t) >= 0 : void 0
				}
			}, l.checkOn || (h.valHooks[this].get = function (e) {
				return null === e.getAttribute("value") ? "on" : e.value
			})
		});
		var pn, dn, vn = h.expr.attrHandle,
			mn = /^(?:checked|selected)$/i,
			gn = l.getSetAttribute,
			yn = l.input;
		h.fn.extend({
			attr: function (e, t) {
				return $(this, h.attr, e, t, arguments.length > 1)
			},
			removeAttr: function (e) {
				return this.each(function () {
					h.removeAttr(this, e)
				})
			}
		}), h.extend({
			attr: function (e, t, n) {
				var r, i, s = e.nodeType;
				if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === B ? h.prop(e, t, n) : (1 === s && h.isXMLDoc(e) || (t = t.toLowerCase(), r = h.attrHooks[t] || (h.expr.match.bool.test(t) ? dn : pn)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = h.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void h.removeAttr(e, t))
			},
			removeAttr: function (e, t) {
				var n, r, i = 0,
					s = t && t.match(O);
				if (s && 1 === e.nodeType)
					while (n = s[i++]) r = h.propFix[n] || n, h.expr.match.bool.test(n) ? yn && gn || !mn.test(n) ? e[r] = false : e[h.camelCase("default-" + n)] = e[r] = false : h.attr(e, n, ""), e.removeAttribute(gn ? n : r)
			},
			attrHooks: {
				type: {
					set: function (e, t) {
						if (!l.radioValue && "radio" === t && h.nodeName(e, "input")) {
							var n = e.value;
							return e.setAttribute("type", t), n && (e.value = n), t
						}
					}
				}
			}
		}), dn = {
			set: function (e, t, n) {
				return t === false ? h.removeAttr(e, n) : yn && gn || !mn.test(n) ? e.setAttribute(!gn && h.propFix[n] || n, n) : e[h.camelCase("default-" + n)] = e[n] = true, n
			}
		}, h.each(h.expr.match.bool.source.match(/\w+/g), function (e, t) {
			var n = vn[t] || h.find.attr;
			vn[t] = yn && gn || !mn.test(t) ? function (e, t, r) {
				var i, s;
				return r || (s = vn[t], vn[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, vn[t] = s), i
			} : function (e, t, n) {
				return n ? void 0 : e[h.camelCase("default-" + t)] ? t.toLowerCase() : null
			}
		}), yn && gn || (h.attrHooks.value = {
			set: function (e, t, n) {
				return h.nodeName(e, "input") ? void(e.defaultValue = t) : pn && pn.set(e, t, n)
			}
		}), gn || (pn = {
			set: function (e, t, n) {
				var r = e.getAttributeNode(n);
				return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
			}
		}, vn.id = vn.name = vn.coords = function (e, t, n) {
			var r;
			return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
		}, h.valHooks.button = {
			get: function (e, t) {
				var n = e.getAttributeNode(t);
				return n && n.specified ? n.value : void 0
			},
			set: pn.set
		}, h.attrHooks.contenteditable = {
			set: function (e, t, n) {
				pn.set(e, "" === t ? false : t, n)
			}
		}, h.each(["width", "height"], function (e, t) {
			h.attrHooks[t] = {
				set: function (e, n) {
					return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
				}
			}
		})), l.style || (h.attrHooks.style = {
			get: function (e) {
				return e.style.cssText || void 0
			},
			set: function (e, t) {
				return e.style.cssText = t + ""
			}
		});
		var bn = /^(?:input|select|textarea|button|object)$/i,
			wn = /^(?:a|area)$/i;
		h.fn.extend({
			prop: function (e, t) {
				return $(this, h.prop, e, t, arguments.length > 1)
			},
			removeProp: function (e) {
				return e = h.propFix[e] || e, this.each(function () {
					try {
						this[e] = void 0, delete this[e]
					} catch (t) {}
				})
			}
		}), h.extend({
			propFix: {
				"for": "htmlFor",
				"class": "className"
			},
			prop: function (e, t, n) {
				var r, i, s, o = e.nodeType;
				if (e && 3 !== o && 8 !== o && 2 !== o) return s = 1 !== o || !h.isXMLDoc(e), s && (t = h.propFix[t] || t, i = h.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
			},
			propHooks: {
				tabIndex: {
					get: function (e) {
						var t = h.find.attr(e, "tabindex");
						return t ? parseInt(t, 10) : bn.test(e.nodeName) || wn.test(e.nodeName) && e.href ? 0 : -1
					}
				}
			}
		}), l.hrefNormalized || h.each(["href", "src"], function (e, t) {
			h.propHooks[t] = {
				get: function (e) {
					return e.getAttribute(t, 4)
				}
			}
		}), l.optSelected || (h.propHooks.selected = {
			get: function (e) {
				var t = e.parentNode;
				return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
			}
		}), h.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
			h.propFix[this.toLowerCase()] = this
		}), l.enctype || (h.propFix.enctype = "encoding");
		var En = /[\t\r\n\f]/g;
		h.fn.extend({
			addClass: function (e) {
				var t, n, r, i, s, o, u = 0,
					a = this.length,
					f = "string" == typeof e && e;
				if (h.isFunction(e)) return this.each(function (t) {
					h(this).addClass(e.call(this, t, this.className))
				});
				if (f)
					for (t = (e || "").match(O) || []; a > u; u++)
						if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(En, " ") : " ")) {
							s = 0;
							while (i = t[s++]) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
							o = h.trim(r), n.className !== o && (n.className = o)
						}
				return this
			},
			removeClass: function (e) {
				var t, n, r, i, s, o, u = 0,
					a = this.length,
					f = 0 === arguments.length || "string" == typeof e && e;
				if (h.isFunction(e)) return this.each(function (t) {
					h(this).removeClass(e.call(this, t, this.className))
				});
				if (f)
					for (t = (e || "").match(O) || []; a > u; u++)
						if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(En, " ") : "")) {
							s = 0;
							while (i = t[s++])
								while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
							o = e ? h.trim(r) : "", n.className !== o && (n.className = o)
						}
				return this
			},
			toggleClass: function (e, t) {
				var n = typeof e;
				return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(h.isFunction(e) ? function (n) {
					h(this).toggleClass(e.call(this, n, this.className, t), t)
				} : function () {
					if ("string" === n) {
						var t, r = 0,
							i = h(this),
							s = e.match(O) || [];
						while (t = s[r++]) i.hasClass(t) ? i.removeClass(t) : i.addClass(t)
					} else(n === B || "boolean" === n) && (this.className && h._data(this, "__className__", this.className), this.className = this.className || e === false ? "" : h._data(this, "__className__") || "")
				})
			},
			hasClass: function (e) {
				for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
					if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(En, " ").indexOf(t) >= 0) return true;
				return false
			}
		}), h.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
			h.fn[t] = function (e, n) {
				return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
			}
		}), h.fn.extend({
			hover: function (e, t) {
				return this.mouseenter(e).mouseleave(t || e)
			},
			bind: function (e, t, n) {
				return this.on(e, null, t, n)
			},
			unbind: function (e, t) {
				return this.off(e, null, t)
			},
			delegate: function (e, t, n, r) {
				return this.on(t, e, n, r)
			},
			undelegate: function (e, t, n) {
				return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
			}
		});
		var Sn = h.now(),
			xn = /\?/,
			Tn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
		h.parseJSON = function (t) {
			if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
			var n, r = null,
				i = h.trim(t + "");
			return i && !h.trim(i.replace(Tn, function (e, t, i, s) {
				return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !s - !i, "")
			})) ? Function("return " + i)() : h.error("Invalid JSON: " + t)
		}, h.parseXML = function (t) {
			var n, r;
			if (!t || "string" != typeof t) return null;
			try {
				e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
			} catch (i) {
				n = void 0
			}
			return n && n.documentElement && !n.getElementsByTagName("parsererror").length || h.error("Invalid XML: " + t), n
		};
		var Nn, Cn, kn = /#.*$/,
			Ln = /([?&])_=[^&]*/,
			An = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
			On = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
			Mn = /^(?:GET|HEAD)$/,
			_n = /^\/\//,
			Dn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
			Pn = {},
			Hn = {},
			Bn = "*/".concat("*");
		try {
			Cn = location.href
		} catch (jn) {
			Cn = T.createElement("a"), Cn.href = "", Cn = Cn.href
		}
		Nn = Dn.exec(Cn.toLowerCase()) || [], h.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: Cn,
				type: "GET",
				isLocal: On.test(Nn[1]),
				global: true,
				processData: true,
				async: true,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": Bn,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},
				contents: {
					xml: /xml/,
					html: /html/,
					json: /json/
				},
				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},
				converters: {
					"* text": String,
					"text html": true,
					"text json": h.parseJSON,
					"text xml": h.parseXML
				},
				flatOptions: {
					url: true,
					context: true
				}
			},
			ajaxSetup: function (e, t) {
				return t ? qn(qn(e, h.ajaxSettings), t) : qn(h.ajaxSettings, e)
			},
			ajaxPrefilter: Fn(Pn),
			ajaxTransport: Fn(Hn),
			ajax: function (e, t) {
				function x(e, t, n, r) {
					var f, g, y, w, S, x = t;
					2 !== b && (b = 2, o && clearTimeout(o), a = void 0, s = r || "", E.readyState = e > 0 ? 4 : 0, f = e >= 200 && 300 > e || 304 === e, n && (w = Rn(l, E, n)), w = Un(l, w, E, f), f ? (l.ifModified && (S = E.getResponseHeader("Last-Modified"), S && (h.lastModified[i] = S), S = E.getResponseHeader("etag"), S && (h.etag[i] = S)), 204 === e || "HEAD" === l.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = w.state, g = w.data, y = w.error, f = !y)) : (y = x, (e || !x) && (x = "error", 0 > e && (e = 0))), E.status = e, E.statusText = (t || x) + "", f ? d.resolveWith(c, [g, x, E]) : d.rejectWith(c, [E, x, y]), E.statusCode(m), m = void 0, u && p.trigger(f ? "ajaxSuccess" : "ajaxError", [E, l, f ? g : y]), v.fireWith(c, [E, x]), u && (p.trigger("ajaxComplete", [E, l]), --h.active || h.event.trigger("ajaxStop")))
				}
				"object" == typeof e && (t = e, e = void 0), t = t || {};
				var n, r, i, s, o, u, a, f, l = h.ajaxSetup({}, t),
					c = l.context || l,
					p = l.context && (c.nodeType || c.jquery) ? h(c) : h.event,
					d = h.Deferred(),
					v = h.Callbacks("once memory"),
					m = l.statusCode || {},
					g = {},
					y = {},
					b = 0,
					w = "canceled",
					E = {
						readyState: 0,
						getResponseHeader: function (e) {
							var t;
							if (2 === b) {
								if (!f) {
									f = {};
									while (t = An.exec(s)) f[t[1].toLowerCase()] = t[2]
								}
								t = f[e.toLowerCase()]
							}
							return null == t ? null : t
						},
						getAllResponseHeaders: function () {
							return 2 === b ? s : null
						},
						setRequestHeader: function (e, t) {
							var n = e.toLowerCase();
							return b || (e = y[n] = y[n] || e, g[e] = t), this
						},
						overrideMimeType: function (e) {
							return b || (l.mimeType = e), this
						},
						statusCode: function (e) {
							var t;
							if (e)
								if (2 > b)
									for (t in e) m[t] = [m[t], e[t]];
								else E.always(e[E.status]);
							return this
						},
						abort: function (e) {
							var t = e || w;
							return a && a.abort(t), x(0, t), this
						}
					};
				if (d.promise(E).complete = v.add, E.success = E.done, E.error = E.fail, l.url = ((e || l.url || Cn) + "").replace(kn, "").replace(_n, Nn[1] + "//"), l.type = t.method || t.type || l.method || l.type, l.dataTypes = h.trim(l.dataType || "*").toLowerCase().match(O) || [""], null == l.crossDomain && (n = Dn.exec(l.url.toLowerCase()), l.crossDomain = !(!n || n[1] === Nn[1] && n[2] === Nn[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Nn[3] || ("http:" === Nn[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = h.param(l.data, l.traditional)), In(Pn, l, t, E), 2 === b) return E;
				u = h.event && l.global, u && 0 === h.active++ && h.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Mn.test(l.type), i = l.url, l.hasContent || (l.data && (i = l.url += (xn.test(i) ? "&" : "?") + l.data, delete l.data), l.cache === false && (l.url = Ln.test(i) ? i.replace(Ln, "$1_=" + Sn++) : i + (xn.test(i) ? "&" : "?") + "_=" + Sn++)), l.ifModified && (h.lastModified[i] && E.setRequestHeader("If-Modified-Since", h.lastModified[i]), h.etag[i] && E.setRequestHeader("If-None-Match", h.etag[i])), (l.data && l.hasContent && l.contentType !== false || t.contentType) && E.setRequestHeader("Content-Type", l.contentType), E.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Bn + "; q=0.01" : "") : l.accepts["*"]);
				for (r in l.headers) E.setRequestHeader(r, l.headers[r]);
				if (!l.beforeSend || l.beforeSend.call(c, E, l) !== false && 2 !== b) {
					w = "abort";
					for (r in {
							success: 1,
							error: 1,
							complete: 1
						}) E[r](l[r]);
					if (a = In(Hn, l, t, E)) {
						E.readyState = 1, u && p.trigger("ajaxSend", [E, l]), l.async && l.timeout > 0 && (o = setTimeout(function () {
							E.abort("timeout")
						}, l.timeout));
						try {
							b = 1, a.send(g, x)
						} catch (S) {
							if (!(2 > b)) throw S;
							x(-1, S)
						}
					} else x(-1, "No Transport");
					return E
				}
				return E.abort()
			},
			getJSON: function (e, t, n) {
				return h.get(e, t, n, "json")
			},
			getScript: function (e, t) {
				return h.get(e, void 0, t, "script")
			}
		}), h.each(["get", "post"], function (e, t) {
			h[t] = function (e, n, r, i) {
				return h.isFunction(n) && (i = i || r, r = n, n = void 0), h.ajax({
					url: e,
					type: t,
					dataType: i,
					data: n,
					success: r
				})
			}
		}), h._evalUrl = function (e) {
			return h.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				async: false,
				global: false,
				"throws": true
			})
		}, h.fn.extend({
			wrapAll: function (e) {
				if (h.isFunction(e)) return this.each(function (t) {
					h(this).wrapAll(e.call(this, t))
				});
				if (this[0]) {
					var t = h(e, this[0].ownerDocument).eq(0).clone(true);
					this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
						var e = this;
						while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
						return e
					}).append(this)
				}
				return this
			},
			wrapInner: function (e) {
				return this.each(h.isFunction(e) ? function (t) {
					h(this).wrapInner(e.call(this, t))
				} : function () {
					var t = h(this),
						n = t.contents();
					n.length ? n.wrapAll(e) : t.append(e)
				})
			},
			wrap: function (e) {
				var t = h.isFunction(e);
				return this.each(function (n) {
					h(this).wrapAll(t ? e.call(this, n) : e)
				})
			},
			unwrap: function () {
				return this.parent().each(function () {
					h.nodeName(this, "body") || h(this).replaceWith(this.childNodes)
				}).end()
			}
		}), h.expr.filters.hidden = function (e) {
			return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !l.reliableHiddenOffsets() && "none" === (e.style && e.style.display || h.css(e, "display"))
		}, h.expr.filters.visible = function (e) {
			return !h.expr.filters.hidden(e)
		};
		var zn = /%20/g,
			Wn = /\[\]$/,
			Xn = /\r?\n/g,
			Vn = /^(?:submit|button|image|reset|file)$/i,
			$n = /^(?:input|select|textarea|keygen)/i;
		h.param = function (e, t) {
			var n, r = [],
				i = function (e, t) {
					t = h.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
				};
			if (void 0 === t && (t = h.ajaxSettings && h.ajaxSettings.traditional), h.isArray(e) || e.jquery && !h.isPlainObject(e)) h.each(e, function () {
				i(this.name, this.value)
			});
			else
				for (n in e) Jn(n, e[n], t, i);
			return r.join("&").replace(zn, "+")
		}, h.fn.extend({
			serialize: function () {
				return h.param(this.serializeArray())
			},
			serializeArray: function () {
				return this.map(function () {
					var e = h.prop(this, "elements");
					return e ? h.makeArray(e) : this
				}).filter(function () {
					var e = this.type;
					return this.name && !h(this).is(":disabled") && $n.test(this.nodeName) && !Vn.test(e) && (this.checked || !J.test(e))
				}).map(function (e, t) {
					var n = h(this).val();
					return null == n ? null : h.isArray(n) ? h.map(n, function (e) {
						return {
							name: t.name,
							value: e.replace(Xn, "\r\n")
						}
					}) : {
						name: t.name,
						value: n.replace(Xn, "\r\n")
					}
				}).get()
			}
		}), h.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function () {
			return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Yn() || Zn()
		} : Yn;
		var Kn = 0,
			Qn = {},
			Gn = h.ajaxSettings.xhr();
		e.attachEvent && e.attachEvent("onunload", function () {
			for (var e in Qn) Qn[e](void 0, true)
		}), l.cors = !!Gn && "withCredentials" in Gn, Gn = l.ajax = !!Gn, Gn && h.ajaxTransport(function (e) {
			if (!e.crossDomain || l.cors) {
				var t;
				return {
					send: function (n, r) {
						var i, s = e.xhr(),
							o = ++Kn;
						if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
							for (i in e.xhrFields) s[i] = e.xhrFields[i];
						e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
						for (i in n) void 0 !== n[i] && s.setRequestHeader(i, n[i] + "");
						s.send(e.hasContent && e.data || null), t = function (n, i) {
							var u, a, f;
							if (t && (i || 4 === s.readyState))
								if (delete Qn[o], t = void 0, s.onreadystatechange = h.noop, i) 4 !== s.readyState && s.abort();
								else {
									f = {}, u = s.status, "string" == typeof s.responseText && (f.text = s.responseText);
									try {
										a = s.statusText
									} catch (l) {
										a = ""
									}
									u || !e.isLocal || e.crossDomain ? 1223 === u && (u = 204) : u = f.text ? 200 : 404
								}
							f && r(u, a, f, s.getAllResponseHeaders())
						}, e.async ? 4 === s.readyState ? setTimeout(t) : s.onreadystatechange = Qn[o] = t : t()
					},
					abort: function () {
						t && t(void 0, true)
					}
				}
			}
		}), h.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /(?:java|ecma)script/
			},
			converters: {
				"text script": function (e) {
					return h.globalEval(e), e
				}
			}
		}), h.ajaxPrefilter("script", function (e) {
			void 0 === e.cache && (e.cache = false), e.crossDomain && (e.type = "GET", e.global = false)
		}), h.ajaxTransport("script", function (e) {
			if (e.crossDomain) {
				var t, n = T.head || h("head")[0] || T.documentElement;
				return {
					send: function (r, i) {
						t = T.createElement("script"), t.async = true, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
							(n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
						}, n.insertBefore(t, n.firstChild)
					},
					abort: function () {
						t && t.onload(void 0, true)
					}
				}
			}
		});
		var er = [],
			tr = /(=)\?(?=&|$)|\?\?/;
		h.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function () {
				var e = er.pop() || h.expando + "_" + Sn++;
				return this[e] = true, e
			}
		}), h.ajaxPrefilter("json jsonp", function (t, n, r) {
			var i, s, o, u = t.jsonp !== false && (tr.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tr.test(t.data) && "data");
			return u || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = h.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, u ? t[u] = t[u].replace(tr, "$1" + i) : t.jsonp !== false && (t.url += (xn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
				return o || h.error(i + " was not called"), o[0]
			}, t.dataTypes[0] = "json", s = e[i], e[i] = function () {
				o = arguments
			}, r.always(function () {
				e[i] = s, t[i] && (t.jsonpCallback = n.jsonpCallback, er.push(i)), o && h.isFunction(s) && s(o[0]), o = s = void 0
			}), "script") : void 0
		}), h.parseHTML = function (e, t, n) {
			if (!e || "string" != typeof e) return null;
			"boolean" == typeof t && (n = t, t = false), t = t || T;
			var r = w.exec(e),
				i = !n && [];
			return r ? [t.createElement(r[1])] : (r = h.buildFragment([e], t, i), i && i.length && h(i).remove(), h.merge([], r.childNodes))
		};
		var nr = h.fn.load;
		h.fn.load = function (e, t, n) {
			if ("string" != typeof e && nr) return nr.apply(this, arguments);
			var r, i, s, o = this,
				u = e.indexOf(" ");
			return u >= 0 && (r = h.trim(e.slice(u, e.length)), e = e.slice(0, u)), h.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (s = "POST"), o.length > 0 && h.ajax({
				url: e,
				type: s,
				dataType: "html",
				data: t
			}).done(function (e) {
				i = arguments, o.html(r ? h("<div>").append(h.parseHTML(e)).find(r) : e)
			}).complete(n && function (e, t) {
				o.each(n, i || [e.responseText, t, e])
			}), this
		}, h.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
			h.fn[t] = function (e) {
				return this.on(t, e)
			}
		}), h.expr.filters.animated = function (e) {
			return h.grep(h.timers, function (t) {
				return e === t.elem
			}).length
		};
		var rr = e.document.documentElement;
		h.offset = {
			setOffset: function (e, t, n) {
				var r, i, s, o, u, a, f, l = h.css(e, "position"),
					c = h(e),
					p = {};
				"static" === l && (e.style.position = "relative"), u = c.offset(), s = h.css(e, "top"), a = h.css(e, "left"), f = ("absolute" === l || "fixed" === l) && h.inArray("auto", [s, a]) > -1, f ? (r = c.position(), o = r.top, i = r.left) : (o = parseFloat(s) || 0, i = parseFloat(a) || 0), h.isFunction(t) && (t = t.call(e, n, u)), null != t.top && (p.top = t.top - u.top + o), null != t.left && (p.left = t.left - u.left + i), "using" in t ? t.using.call(e, p) : c.css(p)
			}
		}, h.fn.extend({
			offset: function (e) {
				if (arguments.length) return void 0 === e ? this : this.each(function (t) {
					h.offset.setOffset(this, e, t)
				});
				var t, n, r = {
						top: 0,
						left: 0
					},
					i = this[0],
					s = i && i.ownerDocument;
				if (s) return t = s.documentElement, h.contains(t, i) ? (typeof i.getBoundingClientRect !== B && (r = i.getBoundingClientRect()), n = ir(s), {
					top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
					left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
				}) : r
			},
			position: function () {
				if (this[0]) {
					var e, t, n = {
							top: 0,
							left: 0
						},
						r = this[0];
					return "fixed" === h.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), h.nodeName(e[0], "html") || (n = e.offset()), n.top += h.css(e[0], "borderTopWidth", true), n.left += h.css(e[0], "borderLeftWidth", true)), {
						top: t.top - n.top - h.css(r, "marginTop", true),
						left: t.left - n.left - h.css(r, "marginLeft", true)
					}
				}
			},
			offsetParent: function () {
				return this.map(function () {
					var e = this.offsetParent || rr;
					while (e && !h.nodeName(e, "html") && "static" === h.css(e, "position")) e = e.offsetParent;
					return e || rr
				})
			}
		}), h.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function (e, t) {
			var n = /Y/.test(t);
			h.fn[e] = function (r) {
				return $(this, function (e, r, i) {
					var s = ir(e);
					return void 0 === i ? s ? t in s ? s[t] : s.document.documentElement[r] : e[r] : void(s ? s.scrollTo(n ? h(s).scrollLeft() : i, n ? i : h(s).scrollTop()) : e[r] = i)
				}, e, r, arguments.length, null)
			}
		}), h.each(["top", "left"], function (e, t) {
			h.cssHooks[t] = jt(l.pixelPosition, function (e, n) {
				return n ? (n = Ht(e, t), Dt.test(n) ? h(e).position()[t] + "px" : n) : void 0
			})
		}), h.each({
			Height: "height",
			Width: "width"
		}, function (e, t) {
			h.each({
				padding: "inner" + e,
				content: t,
				"": "outer" + e
			}, function (n, r) {
				h.fn[r] = function (r, i) {
					var s = arguments.length && (n || "boolean" != typeof r),
						o = n || (r === true || i === true ? "margin" : "border");
					return $(this, function (t, n, r) {
						var i;
						return h.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? h.css(t, n, o) : h.style(t, n, r, o)
					}, t, s ? r : void 0, s, null)
				}
			})
		}), h.fn.size = function () {
			return this.length
		}, h.fn.andSelf = h.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
			return h
		});
		var sr = e.jQuery,
			or = e.$;
		return h.noConflict = function (t) {
			return e.$ === h && (e.$ = or), t && e.jQuery === h && (e.jQuery = sr), h
		}, typeof t === B && (e.jQuery = e.$ = h), h
	}),
define("lib/jquery", function () {});
	var getDateTime = function () {
			var e = new Date,
				t = e.getHours(),
				n = e.getMinutes(),
				r = e.getSeconds();
			return t = (t < 10 ? "0" : "") + t, n = (n < 10 ? "0" : "") + n, r = (r < 10 ? "0" : "") + r, t + ":" + n + ":" + r
		},
		output = function (e, t, n, r) {
			var i = [getDateTime(), t, e, n];
			r && i.push(JSON.stringify(r)), console.log(i.join(" | "))
		},
		log = function (e, t, n, r) {
			output(e, t, n, r)
		},
		logger = {
			init: function (e) {
				config = e
			},
			debug: function (e, t, n) {
				log(e, "debug", t, n)
			},
			info: function (e, t, n) {
				log(e, "info", t, n)
			},
			warning: function (e, t, n) {
				log(e, "warning", t, n)
			},
			error: function (e, t, n) {
				log(e, "error", t, n)
			}
		};
	define("base/Logger", function () {});
	var names = {
			6: " million",
			9: " billion",
			12: " trillion",
			15: " quadrillion",
			18: " quintillion",
			21: " sextillion",
			24: " septillion",
			27: " octillion",
			30: " nonillion",
			33: " decillion",
			36: " undecillion",
			39: " duodecillion",
			42: " tredecillion",
			45: " quattuordecillion",
			48: " quindecillion",
			51: " sexdecillion",
			54: " septendecillion",
			57: " octodecillion",
			60: " novemdecillion",
			63: " vigintillion"
		},
		nf = function (e) {
			return numberFormat.format(e)
		},
		nfPlus = function (e) {
			var t = "";
			return e > 0 && (t = "+"), t + numberFormat.format(e)
		},
		numberFormat = {
			format: function (e) {
				if (e == undefined) return "?";
				if (Math.abs(e) < 10) return Math.round(e * 100) / 100;
				if (Math.abs(e) < 1e3) return Math.round(e * 10) / 10;
				if (Math.abs(e) < 1e6) return Number(e).toFixed(0).replace(/\d(?=(\d{3})+$)/g, "$& ");
				e = e.toString().split("e+", 2);
				var t = e[0],
					n = t < 0 ? 2 : 1,
					r = 3 * Math.floor((Number(t).toFixed(0).length - n) / 3),
					i = r + (e[1] ? Number(e[1]) : 0),
					s = i % 3;
				return t *= Math.pow(10, s - r), i -= s, Math.round(t * 100) / 100 + (names[i] ? names[i] : "e" + i)
			},
			test: function () {
				var e = {
					1: "1",
					10: "10",
					10.5: "10.5",
					100: "100",
					100.5: "100.5",
					1e3: "1 000",
					1000.5: "1 001",
					1234.5: "1 235",
					0x69400dfdfc9950000: "121.35 quintillion",
					0x41c808bebddfd40000: "1.21 sextillion",
					1.2134523451212334e22: "12.13 sextillion",
					1.2134523451212333e23: "121.35 sextillion",
					1.2134523451212334e24: "1.21 septillion",
					"121345234512123331233123412134523451212333123312341213452345121112.1": "121.35 vigintillion",
					1.4860535876960295e25: "14.86 septillion",
					9.026470548765505e24: "9.03 septillion",
					4.689829190868461e23: "468.98 sextillion",
					3.836127347506669e23: "383.61 sextillion",
					1.9180636737457225e22: "19.18 sextillion"
				};
				for (var t in e) {
					var n = nf(t);
					n == e[t] ? console.logRow(t + " " + e[t] + " == " + n) : console.error(t + " " + e[t] + " == " + n);
					var r = nf("-" + t);
					r == "-" + e[t] ? console.logRow(t + " -" + e[t] + " == " + r) : console.error(t + " -" + e[t] + " == " + r)
				}
			}
		};
	define("base/NumberFormat", function () {});
	var Handlebars = {};
	(function (e, t) {
		e.VERSION = "1.0.0", e.COMPILER_REVISION = 4, e.REVISION_CHANGES = {
			1: "<= 1.0.rc.2",
			2: "== 1.0.0-rc.3",
			3: "== 1.0.0-rc.4",
			4: ">= 1.0.0"
		}, e.helpers = {}, e.partials = {};
		var n = Object.prototype.toString,
			r = "[object Function]",
			i = "[object Object]";
		e.registerHelper = function (t, r, s) {
			if (n.call(t) === i) {
				if (s || r) throw new e.Exception("Arg not supported with multiple helpers");
				e.Utils.extend(this.helpers, t)
			} else s && (r.not = s), this.helpers[t] = r
		}, e.registerPartial = function (t, r) {
			n.call(t) === i ? e.Utils.extend(this.partials, t) : this.partials[t] = r
		}, e.registerHelper("helperMissing", function (e) {
			if (arguments.length === 2) return t;
			throw new Error("Missing helper: '" + e + "'")
		}), e.registerHelper("blockHelperMissing", function (t, i) {
			var s = i.inverse || function () {},
				o = i.fn,
				u = n.call(t);
			return u === r && (t = t.call(this)), t === true ? o(this) : t === false || t == null ? s(this) : u === "[object Array]" ? t.length > 0 ? e.helpers.each(t, i) : s(this) : o(t)
		}), e.K = function () {}, e.createFrame = Object.create || function (t) {
			e.K.prototype = t;
			var n = new e.K;
			return e.K.prototype = null, n
		}, e.logger = {
			DEBUG: 0,
			INFO: 1,
			WARN: 2,
			ERROR: 3,
			level: 3,
			methodMap: {
				0: "debug",
				1: "info",
				2: "warn",
				3: "error"
			},
			logRow: function (t, n) {
				if (e.logger.level <= t) {
					var r = e.logger.methodMap[t];
					typeof console != "undefined" && console[r] && console[r].call(console, n)
				}
			}
		}, e.logRow = function (t, n) {
			e.logger.logRow(t, n)
		}, e.registerHelper("each", function (t, i) {
			var s = i.fn,
				o = i.inverse,
				u = 0,
				a = "",
				f, l = n.call(t);
			l === r && (t = t.call(this)), i.data && (f = e.createFrame(i.data));
			if (t && typeof t == "object")
				if (t instanceof Array)
					for (var c = t.length; u < c; u++) f && (f.index = u), a += s(t[u], {
						data: f
					});
				else
					for (var h in t) t.hasOwnProperty(h) && (f && (f.key = h), a += s(t[h], {
						data: f
					}), u++);
			return u === 0 && (a = o(this)), a
		}), e.registerHelper("if", function (t, i) {
			var s = n.call(t);
			return s === r && (t = t.call(this)), !t || e.Utils.isEmpty(t) ? i.inverse(this) : i.fn(this)
		}), e.registerHelper("unless", function (t, n) {
			return e.helpers["if"].call(this, t, {
				fn: n.inverse,
				inverse: n.fn
			})
		}), e.registerHelper("with", function (t, i) {
			var s = n.call(t);
			s === r && (t = t.call(this));
			if (!e.Utils.isEmpty(t)) return i.fn(t)
		}), e.registerHelper("log", function (t, n) {
			var r = n.data && n.data.level != null ? parseInt(n.data.level, 10) : 1;
			e.logRow(r, t)
		});
		var s = function () {
			function n() {
				this.yy = {}
			}
			var e = {
					trace: function () {},
					yy: {},
					symbols_: {
						error: 2,
						root: 3,
						program: 4,
						EOF: 5,
						simpleInverse: 6,
						statements: 7,
						statement: 8,
						openInverse: 9,
						closeBlock: 10,
						openBlock: 11,
						mustache: 12,
						partial: 13,
						CONTENT: 14,
						COMMENT: 15,
						OPEN_BLOCK: 16,
						inMustache: 17,
						CLOSE: 18,
						OPEN_INVERSE: 19,
						OPEN_ENDBLOCK: 20,
						path: 21,
						OPEN: 22,
						OPEN_UNESCAPED: 23,
						CLOSE_UNESCAPED: 24,
						OPEN_PARTIAL: 25,
						partialName: 26,
						params: 27,
						hash: 28,
						dataName: 29,
						param: 30,
						STRING: 31,
						INTEGER: 32,
						BOOLEAN: 33,
						hashSegments: 34,
						hashSegment: 35,
						ID: 36,
						EQUALS: 37,
						DATA: 38,
						pathSegments: 39,
						SEP: 40,
						$accept: 0,
						$end: 1
					},
					terminals_: {
						2: "error",
						5: "EOF",
						14: "CONTENT",
						15: "COMMENT",
						16: "OPEN_BLOCK",
						18: "CLOSE",
						19: "OPEN_INVERSE",
						20: "OPEN_ENDBLOCK",
						22: "OPEN",
						23: "OPEN_UNESCAPED",
						24: "CLOSE_UNESCAPED",
						25: "OPEN_PARTIAL",
						31: "STRING",
						32: "INTEGER",
						33: "BOOLEAN",
						36: "ID",
						37: "EQUALS",
						38: "DATA",
						40: "SEP"
					},
					productions_: [0, [3, 2],
						[4, 2],
						[4, 3],
						[4, 2],
						[4, 1],
						[4, 1],
						[4, 0],
						[7, 1],
						[7, 2],
						[8, 3],
						[8, 3],
						[8, 1],
						[8, 1],
						[8, 1],
						[8, 1],
						[11, 3],
						[9, 3],
						[10, 3],
						[12, 3],
						[12, 3],
						[13, 3],
						[13, 4],
						[6, 2],
						[17, 3],
						[17, 2],
						[17, 2],
						[17, 1],
						[17, 1],
						[27, 2],
						[27, 1],
						[30, 1],
						[30, 1],
						[30, 1],
						[30, 1],
						[30, 1],
						[28, 1],
						[34, 2],
						[34, 1],
						[35, 3],
						[35, 3],
						[35, 3],
						[35, 3],
						[35, 3],
						[26, 1],
						[26, 1],
						[26, 1],
						[29, 2],
						[21, 1],
						[39, 3],
						[39, 1]
					],
					performAction: function (t, n, r, i, s, o, u) {
						var a = o.length - 1;
						switch (s) {
						case 1:
							return o[a - 1];
						case 2:
							this.$ = new i.ProgramNode([], o[a]);
							break;
						case 3:
							this.$ = new i.ProgramNode(o[a - 2], o[a]);
							break;
						case 4:
							this.$ = new i.ProgramNode(o[a - 1], []);
							break;
						case 5:
							this.$ = new i.ProgramNode(o[a]);
							break;
						case 6:
							this.$ = new i.ProgramNode([], []);
							break;
						case 7:
							this.$ = new i.ProgramNode([]);
							break;
						case 8:
							this.$ = [o[a]];
							break;
						case 9:
							o[a - 1].push(o[a]), this.$ = o[a - 1];
							break;
						case 10:
							this.$ = new i.BlockNode(o[a - 2], o[a - 1].inverse, o[a - 1], o[a]);
							break;
						case 11:
							this.$ = new i.BlockNode(o[a - 2], o[a - 1], o[a - 1].inverse, o[a]);
							break;
						case 12:
							this.$ = o[a];
							break;
						case 13:
							this.$ = o[a];
							break;
						case 14:
							this.$ = new i.ContentNode(o[a]);
							break;
						case 15:
							this.$ = new i.CommentNode(o[a]);
							break;
						case 16:
							this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1]);
							break;
						case 17:
							this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1]);
							break;
						case 18:
							this.$ = o[a - 1];
							break;
						case 19:
							this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1], o[a - 2][2] === "&");
							break;
						case 20:
							this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1], true);
							break;
						case 21:
							this.$ = new i.PartialNode(o[a - 1]);
							break;
						case 22:
							this.$ = new i.PartialNode(o[a - 2], o[a - 1]);
							break;
						case 23:
							break;
						case 24:
							this.$ = [
								[o[a - 2]].concat(o[a - 1]), o[a]
							];
							break;
						case 25:
							this.$ = [
								[o[a - 1]].concat(o[a]), null
							];
							break;
						case 26:
							this.$ = [
								[o[a - 1]], o[a]
							];
							break;
						case 27:
							this.$ = [
								[o[a]], null
							];
							break;
						case 28:
							this.$ = [
								[o[a]], null
							];
							break;
						case 29:
							o[a - 1].push(o[a]), this.$ = o[a - 1];
							break;
						case 30:
							this.$ = [o[a]];
							break;
						case 31:
							this.$ = o[a];
							break;
						case 32:
							this.$ = new i.StringNode(o[a]);
							break;
						case 33:
							this.$ = new i.IntegerNode(o[a]);
							break;
						case 34:
							this.$ = new i.BooleanNode(o[a]);
							break;
						case 35:
							this.$ = o[a];
							break;
						case 36:
							this.$ = new i.HashNode(o[a]);
							break;
						case 37:
							o[a - 1].push(o[a]), this.$ = o[a - 1];
							break;
						case 38:
							this.$ = [o[a]];
							break;
						case 39:
							this.$ = [o[a - 2], o[a]];
							break;
						case 40:
							this.$ = [o[a - 2], new i.StringNode(o[a])];
							break;
						case 41:
							this.$ = [o[a - 2], new i.IntegerNode(o[a])];
							break;
						case 42:
							this.$ = [o[a - 2], new i.BooleanNode(o[a])];
							break;
						case 43:
							this.$ = [o[a - 2], o[a]];
							break;
						case 44:
							this.$ = new i.PartialNameNode(o[a]);
							break;
						case 45:
							this.$ = new i.PartialNameNode(new i.StringNode(o[a]));
							break;
						case 46:
							this.$ = new i.PartialNameNode(new i.IntegerNode(o[a]));
							break;
						case 47:
							this.$ = new i.DataNode(o[a]);
							break;
						case 48:
							this.$ = new i.IdNode(o[a]);
							break;
						case 49:
							o[a - 2].push({
								part: o[a],
								separator: o[a - 1]
							}), this.$ = o[a - 2];
							break;
						case 50:
							this.$ = [{
								part: o[a]
							}]
						}
					},
					table: [{
						3: 1,
						4: 2,
						5: [2, 7],
						6: 3,
						7: 4,
						8: 6,
						9: 7,
						11: 8,
						12: 9,
						13: 10,
						14: [1, 11],
						15: [1, 12],
						16: [1, 13],
						19: [1, 5],
						22: [1, 14],
						23: [1, 15],
						25: [1, 16]
					}, {
						1: [3]
					}, {
						5: [1, 17]
					}, {
						5: [2, 6],
						7: 18,
						8: 6,
						9: 7,
						11: 8,
						12: 9,
						13: 10,
						14: [1, 11],
						15: [1, 12],
						16: [1, 13],
						19: [1, 19],
						20: [2, 6],
						22: [1, 14],
						23: [1, 15],
						25: [1, 16]
					}, {
						5: [2, 5],
						6: 20,
						8: 21,
						9: 7,
						11: 8,
						12: 9,
						13: 10,
						14: [1, 11],
						15: [1, 12],
						16: [1, 13],
						19: [1, 5],
						20: [2, 5],
						22: [1, 14],
						23: [1, 15],
						25: [1, 16]
					}, {
						17: 23,
						18: [1, 22],
						21: 24,
						29: 25,
						36: [1, 28],
						38: [1, 27],
						39: 26
					}, {
						5: [2, 8],
						14: [2, 8],
						15: [2, 8],
						16: [2, 8],
						19: [2, 8],
						20: [2, 8],
						22: [2, 8],
						23: [2, 8],
						25: [2, 8]
					}, {
						4: 29,
						6: 3,
						7: 4,
						8: 6,
						9: 7,
						11: 8,
						12: 9,
						13: 10,
						14: [1, 11],
						15: [1, 12],
						16: [1, 13],
						19: [1, 5],
						20: [2, 7],
						22: [1, 14],
						23: [1, 15],
						25: [1, 16]
					}, {
						4: 30,
						6: 3,
						7: 4,
						8: 6,
						9: 7,
						11: 8,
						12: 9,
						13: 10,
						14: [1, 11],
						15: [1, 12],
						16: [1, 13],
						19: [1, 5],
						20: [2, 7],
						22: [1, 14],
						23: [1, 15],
						25: [1, 16]
					}, {
						5: [2, 12],
						14: [2, 12],
						15: [2, 12],
						16: [2, 12],
						19: [2, 12],
						20: [2, 12],
						22: [2, 12],
						23: [2, 12],
						25: [2, 12]
					}, {
						5: [2, 13],
						14: [2, 13],
						15: [2, 13],
						16: [2, 13],
						19: [2, 13],
						20: [2, 13],
						22: [2, 13],
						23: [2, 13],
						25: [2, 13]
					}, {
						5: [2, 14],
						14: [2, 14],
						15: [2, 14],
						16: [2, 14],
						19: [2, 14],
						20: [2, 14],
						22: [2, 14],
						23: [2, 14],
						25: [2, 14]
					}, {
						5: [2, 15],
						14: [2, 15],
						15: [2, 15],
						16: [2, 15],
						19: [2, 15],
						20: [2, 15],
						22: [2, 15],
						23: [2, 15],
						25: [2, 15]
					}, {
						17: 31,
						21: 24,
						29: 25,
						36: [1, 28],
						38: [1, 27],
						39: 26
					}, {
						17: 32,
						21: 24,
						29: 25,
						36: [1, 28],
						38: [1, 27],
						39: 26
					}, {
						17: 33,
						21: 24,
						29: 25,
						36: [1, 28],
						38: [1, 27],
						39: 26
					}, {
						21: 35,
						26: 34,
						31: [1, 36],
						32: [1, 37],
						36: [1, 28],
						39: 26
					}, {
						1: [2, 1]
					}, {
						5: [2, 2],
						8: 21,
						9: 7,
						11: 8,
						12: 9,
						13: 10,
						14: [1, 11],
						15: [1, 12],
						16: [1, 13],
						19: [1, 19],
						20: [2, 2],
						22: [1, 14],
						23: [1, 15],
						25: [1, 16]
					}, {
						17: 23,
						21: 24,
						29: 25,
						36: [1, 28],
						38: [1, 27],
						39: 26
					}, {
						5: [2, 4],
						7: 38,
						8: 6,
						9: 7,
						11: 8,
						12: 9,
						13: 10,
						14: [1, 11],
						15: [1, 12],
						16: [1, 13],
						19: [1, 19],
						20: [2, 4],
						22: [1, 14],
						23: [1, 15],
						25: [1, 16]
					}, {
						5: [2, 9],
						14: [2, 9],
						15: [2, 9],
						16: [2, 9],
						19: [2, 9],
						20: [2, 9],
						22: [2, 9],
						23: [2, 9],
						25: [2, 9]
					}, {
						5: [2, 23],
						14: [2, 23],
						15: [2, 23],
						16: [2, 23],
						19: [2, 23],
						20: [2, 23],
						22: [2, 23],
						23: [2, 23],
						25: [2, 23]
					}, {
						18: [1, 39]
					}, {
						18: [2, 27],
						21: 44,
						24: [2, 27],
						27: 40,
						28: 41,
						29: 48,
						30: 42,
						31: [1, 45],
						32: [1, 46],
						33: [1, 47],
						34: 43,
						35: 49,
						36: [1, 50],
						38: [1, 27],
						39: 26
					}, {
						18: [2, 28],
						24: [2, 28]
					}, {
						18: [2, 48],
						24: [2, 48],
						31: [2, 48],
						32: [2, 48],
						33: [2, 48],
						36: [2, 48],
						38: [2, 48],
						40: [1, 51]
					}, {
						21: 52,
						36: [1, 28],
						39: 26
					}, {
						18: [2, 50],
						24: [2, 50],
						31: [2, 50],
						32: [2, 50],
						33: [2, 50],
						36: [2, 50],
						38: [2, 50],
						40: [2, 50]
					}, {
						10: 53,
						20: [1, 54]
					}, {
						10: 55,
						20: [1, 54]
					}, {
						18: [1, 56]
					}, {
						18: [1, 57]
					}, {
						24: [1, 58]
					}, {
						18: [1, 59],
						21: 60,
						36: [1, 28],
						39: 26
					}, {
						18: [2, 44],
						36: [2, 44]
					}, {
						18: [2, 45],
						36: [2, 45]
					}, {
						18: [2, 46],
						36: [2, 46]
					}, {
						5: [2, 3],
						8: 21,
						9: 7,
						11: 8,
						12: 9,
						13: 10,
						14: [1, 11],
						15: [1, 12],
						16: [1, 13],
						19: [1, 19],
						20: [2, 3],
						22: [1, 14],
						23: [1, 15],
						25: [1, 16]
					}, {
						14: [2, 17],
						15: [2, 17],
						16: [2, 17],
						19: [2, 17],
						20: [2, 17],
						22: [2, 17],
						23: [2, 17],
						25: [2, 17]
					}, {
						18: [2, 25],
						21: 44,
						24: [2, 25],
						28: 61,
						29: 48,
						30: 62,
						31: [1, 45],
						32: [1, 46],
						33: [1, 47],
						34: 43,
						35: 49,
						36: [1, 50],
						38: [1, 27],
						39: 26
					}, {
						18: [2, 26],
						24: [2, 26]
					}, {
						18: [2, 30],
						24: [2, 30],
						31: [2, 30],
						32: [2, 30],
						33: [2, 30],
						36: [2, 30],
						38: [2, 30]
					}, {
						18: [2, 36],
						24: [2, 36],
						35: 63,
						36: [1, 64]
					}, {
						18: [2, 31],
						24: [2, 31],
						31: [2, 31],
						32: [2, 31],
						33: [2, 31],
						36: [2, 31],
						38: [2, 31]
					}, {
						18: [2, 32],
						24: [2, 32],
						31: [2, 32],
						32: [2, 32],
						33: [2, 32],
						36: [2, 32],
						38: [2, 32]
					}, {
						18: [2, 33],
						24: [2, 33],
						31: [2, 33],
						32: [2, 33],
						33: [2, 33],
						36: [2, 33],
						38: [2, 33]
					}, {
						18: [2, 34],
						24: [2, 34],
						31: [2, 34],
						32: [2, 34],
						33: [2, 34],
						36: [2, 34],
						38: [2, 34]
					}, {
						18: [2, 35],
						24: [2, 35],
						31: [2, 35],
						32: [2, 35],
						33: [2, 35],
						36: [2, 35],
						38: [2, 35]
					}, {
						18: [2, 38],
						24: [2, 38],
						36: [2, 38]
					}, {
						18: [2, 50],
						24: [2, 50],
						31: [2, 50],
						32: [2, 50],
						33: [2, 50],
						36: [2, 50],
						37: [1, 65],
						38: [2, 50],
						40: [2, 50]
					}, {
						36: [1, 66]
					}, {
						18: [2, 47],
						24: [2, 47],
						31: [2, 47],
						32: [2, 47],
						33: [2, 47],
						36: [2, 47],
						38: [2, 47]
					}, {
						5: [2, 10],
						14: [2, 10],
						15: [2, 10],
						16: [2, 10],
						19: [2, 10],
						20: [2, 10],
						22: [2, 10],
						23: [2, 10],
						25: [2, 10]
					}, {
						21: 67,
						36: [1, 28],
						39: 26
					}, {
						5: [2, 11],
						14: [2, 11],
						15: [2, 11],
						16: [2, 11],
						19: [2, 11],
						20: [2, 11],
						22: [2, 11],
						23: [2, 11],
						25: [2, 11]
					}, {
						14: [2, 16],
						15: [2, 16],
						16: [2, 16],
						19: [2, 16],
						20: [2, 16],
						22: [2, 16],
						23: [2, 16],
						25: [2, 16]
					}, {
						5: [2, 19],
						14: [2, 19],
						15: [2, 19],
						16: [2, 19],
						19: [2, 19],
						20: [2, 19],
						22: [2, 19],
						23: [2, 19],
						25: [2, 19]
					}, {
						5: [2, 20],
						14: [2, 20],
						15: [2, 20],
						16: [2, 20],
						19: [2, 20],
						20: [2, 20],
						22: [2, 20],
						23: [2, 20],
						25: [2, 20]
					}, {
						5: [2, 21],
						14: [2, 21],
						15: [2, 21],
						16: [2, 21],
						19: [2, 21],
						20: [2, 21],
						22: [2, 21],
						23: [2, 21],
						25: [2, 21]
					}, {
						18: [1, 68]
					}, {
						18: [2, 24],
						24: [2, 24]
					}, {
						18: [2, 29],
						24: [2, 29],
						31: [2, 29],
						32: [2, 29],
						33: [2, 29],
						36: [2, 29],
						38: [2, 29]
					}, {
						18: [2, 37],
						24: [2, 37],
						36: [2, 37]
					}, {
						37: [1, 65]
					}, {
						21: 69,
						29: 73,
						31: [1, 70],
						32: [1, 71],
						33: [1, 72],
						36: [1, 28],
						38: [1, 27],
						39: 26
					}, {
						18: [2, 49],
						24: [2, 49],
						31: [2, 49],
						32: [2, 49],
						33: [2, 49],
						36: [2, 49],
						38: [2, 49],
						40: [2, 49]
					}, {
						18: [1, 74]
					}, {
						5: [2, 22],
						14: [2, 22],
						15: [2, 22],
						16: [2, 22],
						19: [2, 22],
						20: [2, 22],
						22: [2, 22],
						23: [2, 22],
						25: [2, 22]
					}, {
						18: [2, 39],
						24: [2, 39],
						36: [2, 39]
					}, {
						18: [2, 40],
						24: [2, 40],
						36: [2, 40]
					}, {
						18: [2, 41],
						24: [2, 41],
						36: [2, 41]
					}, {
						18: [2, 42],
						24: [2, 42],
						36: [2, 42]
					}, {
						18: [2, 43],
						24: [2, 43],
						36: [2, 43]
					}, {
						5: [2, 18],
						14: [2, 18],
						15: [2, 18],
						16: [2, 18],
						19: [2, 18],
						20: [2, 18],
						22: [2, 18],
						23: [2, 18],
						25: [2, 18]
					}],
					defaultActions: {
						17: [2, 1]
					},
					parseError: function (t, n) {
						throw new Error(t)
					},
					parse: function (t) {
						function v(e) {
							r.length = r.length - 2 * e, i.length = i.length - e, s.length = s.length - e
						}

						function m() {
							var e;
							return e = n.lexer.lex() || 1, typeof e != "number" && (e = n.symbols_[e] || e), e
						}
						var n = this,
							r = [0],
							i = [null],
							s = [],
							o = this.table,
							u = "",
							a = 0,
							f = 0,
							l = 0,
							c = 2,
							h = 1;
						this.lexer.setInput(t), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc == "undefined" && (this.lexer.yylloc = {});
						var p = this.lexer.yylloc;
						s.push(p);
						var d = this.lexer.options && this.lexer.options.ranges;
						typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
						var g, y, b, w, E, S, x = {},
							T, N, C, k;
						for (;;) {
							b = r[r.length - 1];
							if (this.defaultActions[b]) w = this.defaultActions[b];
							else {
								if (g === null || typeof g == "undefined") g = m();
								w = o[b] && o[b][g]
							}
							if (typeof w == "undefined" || !w.length || !w[0]) {
								var L = "";
								if (!l) {
									k = [];
									for (T in o[b]) this.terminals_[T] && T > 2 && k.push("'" + this.terminals_[T] + "'");
									this.lexer.showPosition ? L = "Parse error on line " + (a + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + k.join(", ") + ", got '" + (this.terminals_[g] || g) + "'" : L = "Parse error on line " + (a + 1) + ": Unexpected " + (g == 1 ? "end of input" : "'" + (this.terminals_[g] || g) + "'"), this.parseError(L, {
										text: this.lexer.match,
										token: this.terminals_[g] || g,
										line: this.lexer.yylineno,
										loc: p,
										expected: k
									})
								}
							}
							if (w[0] instanceof Array && w.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + b + ", token: " + g);
							switch (w[0]) {
							case 1:
								r.push(g), i.push(this.lexer.yytext), s.push(this.lexer.yylloc), r.push(w[1]), g = null, y ? (g = y, y = null) : (f = this.lexer.yyleng, u = this.lexer.yytext, a = this.lexer.yylineno, p = this.lexer.yylloc, l > 0 && l--);
								break;
							case 2:
								N = this.productions_[w[1]][1], x.$ = i[i.length - N], x._$ = {
									first_line: s[s.length - (N || 1)].first_line,
									last_line: s[s.length - 1].last_line,
									first_column: s[s.length - (N || 1)].first_column,
									last_column: s[s.length - 1].last_column
								}, d && (x._$.range = [s[s.length - (N || 1)].range[0], s[s.length - 1].range[1]]), S = this.performAction.call(x, u, f, a, this.yy, w[1], i, s);
								if (typeof S != "undefined") return S;
								N && (r = r.slice(0, -1 * N * 2), i = i.slice(0, -1 * N), s = s.slice(0, -1 * N)), r.push(this.productions_[w[1]][0]), i.push(x.$), s.push(x._$), C = o[r[r.length - 2]][r[r.length - 1]], r.push(C);
								break;
							case 3:
								return true
							}
						}
						return true
					}
				},
				t = function () {
					var e = {
						EOF: 1,
						parseError: function (t, n) {
							if (!this.yy.parser) throw new Error(t);
							this.yy.parser.parseError(t, n)
						},
						setInput: function (e) {
							return this._input = e, this._more = this._less = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
								first_line: 1,
								first_column: 0,
								last_line: 1,
								last_column: 0
							}, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this
						},
						input: function () {
							var e = this._input[0];
							this.yytext += e, this.yyleng++, this.offset++, this.match += e, this.matched += e;
							var t = e.match(/(?:\r\n?|\n).*/g);
							return t ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e
						},
						unput: function (e) {
							var t = e.length,
								n = e.split(/(?:\r\n?|\n)/g);
							this._input = e + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - t - 1), this.offset -= t;
							var r = this.match.split(/(?:\r\n?|\n)/g);
							this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), n.length - 1 && (this.yylineno -= n.length - 1);
							var i = this.yylloc.range;
							return this.yylloc = {
								first_line: this.yylloc.first_line,
								last_line: this.yylineno + 1,
								first_column: this.yylloc.first_column,
								last_column: n ? (n.length === r.length ? this.yylloc.first_column : 0) + r[r.length - n.length].length - n[0].length : this.yylloc.first_column - t
							}, this.options.ranges && (this.yylloc.range = [i[0], i[0] + this.yyleng - t]), this
						},
						more: function () {
							return this._more = true, this
						},
						less: function (e) {
							this.unput(this.match.slice(e))
						},
						pastInput: function () {
							var e = this.matched.substr(0, this.matched.length - this.match.length);
							return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "")
						},
						upcomingInput: function () {
							var e = this.match;
							return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "")
						},
						showPosition: function () {
							var e = this.pastInput(),
								t = (new Array(e.length + 1)).join("-");
							return e + this.upcomingInput() + "\n" + t + "^"
						},
						next: function () {
							if (this.done) return this.EOF;
							this._input || (this.done = true);
							var e, t, n, r, i, s;
							this._more || (this.yytext = "", this.match = "");
							var o = this._currentRules();
							for (var u = 0; u < o.length; u++) {
								n = this._input.match(this.rules[o[u]]);
								if (n && (!t || n[0].length > t[0].length)) {
									t = n, r = u;
									if (!this.options.flex) break
								}
							}
							if (t) {
								s = t[0].match(/(?:\r\n?|\n).*/g), s && (this.yylineno += s.length), this.yylloc = {
									first_line: this.yylloc.last_line,
									last_line: this.yylineno + 1,
									first_column: this.yylloc.last_column,
									last_column: s ? s[s.length - 1].length - s[s.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
								}, this.yytext += t[0], this.match += t[0], this.matches = t, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._input = this._input.slice(t[0].length), this.matched += t[0], e = this.performAction.call(this, this.yy, this, o[r], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false);
								if (e) return e;
								return
							}
							return this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
								text: "",
								token: null,
								line: this.yylineno
							})
						},
						lex: function () {
							var t = this.next();
							return typeof t != "undefined" ? t : this.lex()
						},
						begin: function (t) {
							this.conditionStack.push(t)
						},
						popState: function () {
							return this.conditionStack.pop()
						},
						_currentRules: function () {
							return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
						},
						topState: function () {
							return this.conditionStack[this.conditionStack.length - 2]
						},
						pushState: function (t) {
							this.begin(t)
						}
					};
					return e.options = {}, e.performAction = function (t, n, r, i) {
						var s = i;
						switch (r) {
						case 0:
							return n.yytext = "\\", 14;
						case 1:
							n.yytext.slice(-1) !== "\\" && this.begin("mu"), n.yytext.slice(-1) === "\\" && (n.yytext = n.yytext.substr(0, n.yyleng - 1), this.begin("emu"));
							if (n.yytext) return 14;
							break;
						case 2:
							return 14;
						case 3:
							return n.yytext.slice(-1) !== "\\" && this.popState(), n.yytext.slice(-1) === "\\" && (n.yytext = n.yytext.substr(0, n.yyleng - 1)), 14;
						case 4:
							return n.yytext = n.yytext.substr(0, n.yyleng - 4), this.popState(), 15;
						case 5:
							return 25;
						case 6:
							return 16;
						case 7:
							return 20;
						case 8:
							return 19;
						case 9:
							return 19;
						case 10:
							return 23;
						case 11:
							return 22;
						case 12:
							this.popState(), this.begin("com");
							break;
						case 13:
							return n.yytext = n.yytext.substr(3, n.yyleng - 5), this.popState(), 15;
						case 14:
							return 22;
						case 15:
							return 37;
						case 16:
							return 36;
						case 17:
							return 36;
						case 18:
							return 40;
						case 19:
							break;
						case 20:
							return this.popState(), 24;
						case 21:
							return this.popState(), 18;
						case 22:
							return n.yytext = n.yytext.substr(1, n.yyleng - 2).replace(/\\"/g, '"'), 31;
						case 23:
							return n.yytext = n.yytext.substr(1, n.yyleng - 2).replace(/\\'/g, "'"), 31;
						case 24:
							return 38;
						case 25:
							return 33;
						case 26:
							return 33;
						case 27:
							return 32;
						case 28:
							return 36;
						case 29:
							return n.yytext = n.yytext.substr(1, n.yyleng - 2), 36;
						case 30:
							return "INVALID";
						case 31:
							return 5
						}
					}, e.rules = [/^(?:\\\\(?=(\{\{)))/, /^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|$)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\{\{>)/, /^(?:\{\{#)/, /^(?:\{\{\/)/, /^(?:\{\{\^)/, /^(?:\{\{\s*else\b)/, /^(?:\{\{\{)/, /^(?:\{\{&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{)/, /^(?:=)/, /^(?:\.(?=[}\/ ]))/, /^(?:\.\.)/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}\}\})/, /^(?:\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=[}\s]))/, /^(?:false(?=[}\s]))/, /^(?:-?[0-9]+(?=[}\s]))/, /^(?:[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.]))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/], e.conditions = {
						mu: {
							rules: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
							inclusive: false
						},
						emu: {
							rules: [3],
							inclusive: false
						},
						com: {
							rules: [4],
							inclusive: false
						},
						INITIAL: {
							rules: [0, 1, 2, 31],
							inclusive: true
						}
					}, e
				}();
			return e.lexer = t, n.prototype = e, e.Parser = n, new n
		}();
		e.Parser = s, e.parse = function (t) {
			return t.constructor === e.AST.ProgramNode ? t : (e.Parser.yy = e.AST, e.Parser.parse(t))
		}, e.AST = {}, e.AST.ProgramNode = function (t, n) {
			this.type = "program", this.statements = t, n && (this.inverse = new e.AST.ProgramNode(n))
		}, e.AST.MustacheNode = function (e, t, n) {
			this.type = "mustache", this.escaped = !n, this.hash = t;
			var r = this.id = e[0],
				i = this.params = e.slice(1),
				s = this.eligibleHelper = r.isSimple;
			this.isHelper = s && (i.length || t)
		}, e.AST.PartialNode = function (e, t) {
			this.type = "partial", this.partialName = e, this.context = t
		}, e.AST.BlockNode = function (t, n, r, i) {
			var s = function (t, n) {
				if (t.original !== n.original) throw new e.Exception(t.original + " doesn't match " + n.original)
			};
			s(t.id, i), this.type = "block", this.mustache = t, this.program = n, this.inverse = r, this.inverse && !this.program && (this.isInverse = true)
		}, e.AST.ContentNode = function (e) {
			this.type = "content", this.string = e
		}, e.AST.HashNode = function (e) {
			this.type = "hash", this.pairs = e
		}, e.AST.IdNode = function (t) {
			this.type = "ID";
			var n = "",
				r = [],
				i = 0;
			for (var s = 0, o = t.length; s < o; s++) {
				var u = t[s].part;
				n += (t[s].separator || "") + u;
				if (u === ".." || u === "." || u === "this") {
					if (r.length > 0) throw new e.Exception("Invalid path: " + n);
					u === ".." ? i++ : this.isScoped = true
				} else r.push(u)
			}
			this.original = n, this.parts = r, this.string = r.join("."), this.depth = i, this.isSimple = t.length === 1 && !this.isScoped && i === 0, this.stringModeValue = this.string
		}, e.AST.PartialNameNode = function (e) {
			this.type = "PARTIAL_NAME", this.name = e.original
		}, e.AST.DataNode = function (e) {
			this.type = "DATA", this.id = e
		}, e.AST.StringNode = function (e) {
			this.type = "STRING", this.original = this.string = this.stringModeValue = e
		}, e.AST.IntegerNode = function (e) {
			this.type = "INTEGER", this.original = this.integer = e, this.stringModeValue = Number(e)
		}, e.AST.BooleanNode = function (e) {
			this.type = "BOOLEAN", this.bool = e, this.stringModeValue = e === "true"
		}, e.AST.CommentNode = function (e) {
			this.type = "comment", this.comment = e
		};
		var o = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
		e.Exception = function (e) {
			var t = Error.prototype.constructor.apply(this, arguments);
			for (var n = 0; n < o.length; n++) this[o[n]] = t[o[n]]
		}, e.Exception.prototype = new Error, e.SafeString = function (e) {
			this.string = e
		}, e.SafeString.prototype.toString = function () {
			return this.string.toString()
		};
		var u = {
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#x27;",
				"`": "&#x60;"
			},
			a = /[&<>"'`]/g,
			f = /[&<>"'`]/,
			l = function (e) {
				return u[e] || "&amp;"
			};
		e.Utils = {
			extend: function (e, t) {
				for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
			},
			escapeExpression: function (t) {
				return t instanceof e.SafeString ? t.toString() : t == null || t === false ? "" : (t = t.toString(), f.test(t) ? t.replace(a, l) : t)
			},
			isEmpty: function (e) {
				return !e && e !== 0 ? true : n.call(e) === "[object Array]" && e.length === 0 ? true : false
			}
		};
		var c = e.Compiler = function () {},
			h = e.JavaScriptCompiler = function () {};
		c.prototype = {
			compiler: c,
			disassemble: function () {
				var e = this.opcodes,
					t, n = [],
					r, i;
				for (var s = 0, o = e.length; s < o; s++) {
					t = e[s];
					if (t.opcode === "DECLARE") n.push("DECLARE " + t.name + "=" + t.value);
					else {
						r = [];
						for (var u = 0; u < t.args.length; u++) i = t.args[u], typeof i == "string" && (i = '"' + i.replace("\n", "\\n") + '"'), r.push(i);
						n.push(t.opcode + " " + r.join(" "))
					}
				}
				return n.join("\n")
			},
			equals: function (e) {
				var t = this.opcodes.length;
				if (e.opcodes.length !== t) return false;
				for (var n = 0; n < t; n++) {
					var r = this.opcodes[n],
						i = e.opcodes[n];
					if (r.opcode !== i.opcode || r.args.length !== i.args.length) return false;
					for (var s = 0; s < r.args.length; s++)
						if (r.args[s] !== i.args[s]) return false
				}
				t = this.children.length;
				if (e.children.length !== t) return false;
				for (n = 0; n < t; n++)
					if (!this.children[n].equals(e.children[n])) return false;
				return true
			},
			guid: 0,
			compile: function (e, t) {
				this.children = [], this.depths = {
					list: []
				}, this.options = t;
				var n = this.options.knownHelpers;
				this.options.knownHelpers = {
					helperMissing: true,
					blockHelperMissing: true,
					each: true,
					"if": true,
					unless: true,
					"with": true,
					logRow: true
				};
				if (n)
					for (var r in n) this.options.knownHelpers[r] = n[r];
				return this.program(e)
			},
			accept: function (e) {
				return this[e.type](e)
			},
			program: function (e) {
				var t = e.statements,
					n;
				this.opcodes = [];
				for (var r = 0, i = t.length; r < i; r++) n = t[r], this[n.type](n);
				return this.isSimple = i === 1, this.depths.list = this.depths.list.sort(function (e, t) {
					return e - t
				}), this
			},
			compileProgram: function (e) {
				var t = (new this.compiler).compile(e, this.options),
					n = this.guid++,
					r;
				this.usePartial = this.usePartial || t.usePartial, this.children[n] = t;
				for (var i = 0, s = t.depths.list.length; i < s; i++) {
					r = t.depths.list[i];
					if (r < 2) continue;
					this.addDepth(r - 1)
				}
				return n
			},
			block: function (e) {
				var t = e.mustache,
					n = e.program,
					r = e.inverse;
				n && (n = this.compileProgram(n)), r && (r = this.compileProgram(r));
				var i = this.classifyMustache(t);
				i === "helper" ? this.helperMustache(t, n, r) : i === "simple" ? (this.simpleMustache(t), this.opcode("pushProgram", n), this.opcode("pushProgram", r), this.opcode("emptyHash"), this.opcode("blockValue")) : (this.ambiguousMustache(t, n, r), this.opcode("pushProgram", n), this.opcode("pushProgram", r), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append")
			},
			hash: function (e) {
				var t = e.pairs,
					n, r;
				this.opcode("pushHash");
				for (var i = 0, s = t.length; i < s; i++) n = t[i], r = n[1], this.options.stringParams ? (r.depth && this.addDepth(r.depth), this.opcode("getContext", r.depth || 0), this.opcode("pushStringParam", r.stringModeValue, r.type)) : this.accept(r), this.opcode("assignToHash", n[0]);
				this.opcode("popHash")
			},
			partial: function (e) {
				var t = e.partialName;
				this.usePartial = true, e.context ? this.ID(e.context) : this.opcode("push", "depth0"), this.opcode("invokePartial", t.name), this.opcode("append")
			},
			content: function (e) {
				this.opcode("appendContent", e.string)
			},
			mustache: function (e) {
				var t = this.options,
					n = this.classifyMustache(e);
				n === "simple" ? this.simpleMustache(e) : n === "helper" ? this.helperMustache(e) : this.ambiguousMustache(e), e.escaped && !t.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
			},
			ambiguousMustache: function (e, t, n) {
				var r = e.id,
					i = r.parts[0],
					s = t != null || n != null;
				this.opcode("getContext", r.depth), this.opcode("pushProgram", t), this.opcode("pushProgram", n), this.opcode("invokeAmbiguous", i, s)
			},
			simpleMustache: function (e) {
				var t = e.id;
				t.type === "DATA" ? this.DATA(t) : t.parts.length ? this.ID(t) : (this.addDepth(t.depth), this.opcode("getContext", t.depth), this.opcode("pushContext")), this.opcode("resolvePossibleLambda")
			},
			helperMustache: function (e, t, n) {
				var r = this.setupFullMustacheParams(e, t, n),
					i = e.id.parts[0];
				if (this.options.knownHelpers[i]) this.opcode("invokeKnownHelper", r.length, i);
				else {
					if (this.options.knownHelpersOnly) throw new Error("You specified knownHelpersOnly, but used the unknown helper " + i);
					this.opcode("invokeHelper", r.length, i)
				}
			},
			ID: function (e) {
				this.addDepth(e.depth), this.opcode("getContext", e.depth);
				var t = e.parts[0];
				t ? this.opcode("lookupOnContext", e.parts[0]) : this.opcode("pushContext");
				for (var n = 1, r = e.parts.length; n < r; n++) this.opcode("lookup", e.parts[n])
			},
			DATA: function (t) {
				this.options.data = true;
				if (t.id.isScoped || t.id.depth) throw new e.Exception("Scoped data references are not supported: " + t.original);
				this.opcode("lookupData");
				var n = t.id.parts;
				for (var r = 0, i = n.length; r < i; r++) this.opcode("lookup", n[r])
			},
			STRING: function (e) {
				this.opcode("pushString", e.string)
			},
			INTEGER: function (e) {
				this.opcode("pushLiteral", e.integer)
			},
			BOOLEAN: function (e) {
				this.opcode("pushLiteral", e.bool)
			},
			comment: function () {},
			opcode: function (e) {
				this.opcodes.push({
					opcode: e,
					args: [].slice.call(arguments, 1)
				})
			},
			declare: function (e, t) {
				this.opcodes.push({
					opcode: "DECLARE",
					name: e,
					value: t
				})
			},
			addDepth: function (e) {
				if (isNaN(e)) throw new Error("EWOT");
				if (e === 0) return;
				this.depths[e] || (this.depths[e] = true, this.depths.list.push(e))
			},
			classifyMustache: function (e) {
				var t = e.isHelper,
					n = e.eligibleHelper,
					r = this.options;
				if (n && !t) {
					var i = e.id.parts[0];
					r.knownHelpers[i] ? t = true : r.knownHelpersOnly && (n = false)
				}
				return t ? "helper" : n ? "ambiguous" : "simple"
			},
			pushParams: function (e) {
				var t = e.length,
					n;
				while (t--) n = e[t], this.options.stringParams ? (n.depth && this.addDepth(n.depth), this.opcode("getContext", n.depth || 0), this.opcode("pushStringParam", n.stringModeValue, n.type)) : this[n.type](n)
			},
			setupMustacheParams: function (e) {
				var t = e.params;
				return this.pushParams(t), e.hash ? this.hash(e.hash) : this.opcode("emptyHash"), t
			},
			setupFullMustacheParams: function (e, t, n) {
				var r = e.params;
				return this.pushParams(r), this.opcode("pushProgram", t), this.opcode("pushProgram", n), e.hash ? this.hash(e.hash) : this.opcode("emptyHash"), r
			}
		};
		var p = function (e) {
			this.value = e
		};
		h.prototype = {
			nameLookup: function (e, t) {
				return /^[0-9]+$/.test(t) ? e + "[" + t + "]" : h.isValidJavaScriptVariableName(t) ? e + "." + t : e + "['" + t + "']"
			},
			appendToBuffer: function (e) {
				return this.environment.isSimple ? "return " + e + ";" : {
					appendToBuffer: true,
					content: e,
					toString: function () {
						return "buffer += " + e + ";"
					}
				}
			},
			initializeBuffer: function () {
				return this.quotedString("")
			},
			namespace: "Handlebars",
			compile: function (t, n, r, i) {
				this.environment = t, this.options = n || {}, e.logRow(e.logger.DEBUG, this.environment.disassemble() + "\n\n"), this.name = this.environment.name, this.isChild = !!r, this.context = r || {
					programs: [],
					environments: [],
					aliases: {}
				}, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.registers = {
					list: []
				}, this.compileStack = [], this.inlineStack = [], this.compileChildren(t, n);
				var s = t.opcodes,
					o;
				this.i = 0;
				for (g = s.length; this.i < g; this.i++) o = s[this.i], o.opcode === "DECLARE" ? this[o.name] = o.value : this[o.opcode].apply(this, o.args);
				return this.createFunctionContext(i)
			},
			nextOpcode: function () {
				var e = this.environment.opcodes;
				return e[this.i + 1]
			},
			eat: function () {
				this.i = this.i + 1
			},
			preamble: function () {
				var e = [];
				if (!this.isChild) {
					var t = this.namespace,
						n = "helpers = this.merge(helpers, " + t + ".helpers);";
					this.environment.usePartial && (n = n + " partials = this.merge(partials, " + t + ".partials);"), this.options.data && (n += " data = data || {};"), e.push(n)
				} else e.push("");
				this.environment.isSimple ? e.push("") : e.push(", buffer = " + this.initializeBuffer()), this.lastContext = 0, this.source = e
			},
			createFunctionContext: function (t) {
				var n = this.stackVars.concat(this.registers.list);
				n.length > 0 && (this.source[1] = this.source[1] + ", " + n.join(", "));
				if (!this.isChild)
					for (var r in this.context.aliases) this.context.aliases.hasOwnProperty(r) && (this.source[1] = this.source[1] + ", " + r + "=" + this.context.aliases[r]);
				this.source[1] && (this.source[1] = "var " + this.source[1].substring(2) + ";"), this.isChild || (this.source[1] += "\n" + this.context.programs.join("\n") + "\n"), this.environment.isSimple || this.source.push("return buffer;");
				var i = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"];
				for (var s = 0, o = this.environment.depths.list.length; s < o; s++) i.push("depth" + this.environment.depths.list[s]);
				var u = this.mergeSource();
				if (!this.isChild) {
					var a = e.COMPILER_REVISION,
						f = e.REVISION_CHANGES[a];
					u = "this.compilerInfo = [" + a + ",'" + f + "'];\n" + u
				}
				if (t) return i.push(u), Function.apply(this, i);
				var l = "function " + (this.name || "") + "(" + i.join(",") + ") {\n  " + u + "}";
				return e.logRow(e.logger.DEBUG, l + "\n\n"), l
			},
			mergeSource: function () {
				var e = "",
					n;
				for (var r = 0, i = this.source.length; r < i; r++) {
					var s = this.source[r];
					s.appendToBuffer ? n ? n = n + "\n    + " + s.content : n = s.content : (n && (e += "buffer += " + n + ";\n  ", n = t), e += s + "\n  ")
				}
				return e
			},
			blockValue: function () {
				this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
				var e = ["depth0"];
				this.setupParams(0, e), this.replaceStack(function (t) {
					return e.splice(1, 0, t), "blockHelperMissing.call(" + e.join(", ") + ")"
				})
			},
			ambiguousBlockValue: function () {
				this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
				var e = ["depth0"];
				this.setupParams(0, e);
				var t = this.topStack();
				e.splice(1, 0, t), e[e.length - 1] = "options", this.source.push("if (!" + this.lastHelper + ") { " + t + " = blockHelperMissing.call(" + e.join(", ") + "); }")
			},
			appendContent: function (e) {
				this.source.push(this.appendToBuffer(this.quotedString(e)))
			},
			append: function () {
				this.flushInline();
				var e = this.popStack();
				this.source.push("if(" + e + " || " + e + " === 0) { " + this.appendToBuffer(e) + " }"), this.environment.isSimple && this.source.push("else { " + this.appendToBuffer("''") + " }")
			},
			appendEscaped: function () {
				this.context.aliases.escapeExpression = "this.escapeExpression", this.source.push(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"))
			},
			getContext: function (e) {
				this.lastContext !== e && (this.lastContext = e)
			},
			lookupOnContext: function (e) {
				this.push(this.nameLookup("depth" + this.lastContext, e, "context"))
			},
			pushContext: function () {
				this.pushStackLiteral("depth" + this.lastContext)
			},
			resolvePossibleLambda: function () {
				this.context.aliases.functionType = '"function"', this.replaceStack(function (e) {
					return "typeof " + e + " === functionType ? " + e + ".apply(depth0) : " + e
				})
			},
			lookup: function (e) {
				this.replaceStack(function (t) {
					return t + " == null || " + t + " === false ? " + t + " : " + this.nameLookup(t, e, "context")
				})
			},
			lookupData: function (e) {
				this.push("data")
			},
			pushStringParam: function (e, t) {
				this.pushStackLiteral("depth" + this.lastContext), this.pushString(t), typeof e == "string" ? this.pushString(e) : this.pushStackLiteral(e)
			},
			emptyHash: function () {
				this.pushStackLiteral("{}"), this.options.stringParams && (this.register("hashTypes", "{}"), this.register("hashContexts", "{}"))
			},
			pushHash: function () {
				this.hash = {
					values: [],
					types: [],
					contexts: []
				}
			},
			popHash: function () {
				var e = this.hash;
				this.hash = t, this.options.stringParams && (this.register("hashContexts", "{" + e.contexts.join(",") + "}"), this.register("hashTypes", "{" + e.types.join(",") + "}")), this.push("{\n    " + e.values.join(",\n    ") + "\n  }")
			},
			pushString: function (e) {
				this.pushStackLiteral(this.quotedString(e))
			},
			push: function (e) {
				return this.inlineStack.push(e), e
			},
			pushLiteral: function (e) {
				this.pushStackLiteral(e)
			},
			pushProgram: function (e) {
				e != null ? this.pushStackLiteral(this.programExpression(e)) : this.pushStackLiteral(null)
			},
			invokeHelper: function (e, t) {
				this.context.aliases.helperMissing = "helpers.helperMissing";
				var n = this.lastHelper = this.setupHelper(e, t, true),
					r = this.nameLookup("depth" + this.lastContext, t, "context");
				this.push(n.name + " || " + r), this.replaceStack(function (e) {
					return e + " ? " + e + ".call(" + n.callParams + ") " + ": helperMissing.call(" + n.helperMissingParams + ")"
				})
			},
			invokeKnownHelper: function (e, t) {
				var n = this.setupHelper(e, t);
				this.push(n.name + ".call(" + n.callParams + ")")
			},
			invokeAmbiguous: function (e, t) {
				this.context.aliases.functionType = '"function"', this.pushStackLiteral("{}");
				var n = this.setupHelper(0, e, t),
					r = this.lastHelper = this.nameLookup("helpers", e, "helper"),
					i = this.nameLookup("depth" + this.lastContext, e, "context"),
					s = this.nextStack();
				this.source.push("if (" + s + " = " + r + ") { " + s + " = " + s + ".call(" + n.callParams + "); }"), this.source.push("else { " + s + " = " + i + "; " + s + " = typeof " + s + " === functionType ? " + s + ".apply(depth0) : " + s + "; }")
			},
			invokePartial: function (e) {
				var t = [this.nameLookup("partials", e, "partial"), "'" + e + "'", this.popStack(), "helpers", "partials"];
				this.options.data && t.push("data"), this.context.aliases.self = "this", this.push("self.invokePartial(" + t.join(", ") + ")")
			},
			assignToHash: function (e) {
				var t = this.popStack(),
					n, r;
				this.options.stringParams && (r = this.popStack(), n = this.popStack());
				var i = this.hash;
				n && i.contexts.push("'" + e + "': " + n), r && i.types.push("'" + e + "': " + r), i.values.push("'" + e + "': (" + t + ")")
			},
			compiler: h,
			compileChildren: function (e, t) {
				var n = e.children,
					r, i;
				for (var s = 0, o = n.length; s < o; s++) {
					r = n[s], i = new this.compiler;
					var u = this.matchExistingProgram(r);
					u == null ? (this.context.programs.push(""), u = this.context.programs.length, r.index = u, r.name = "program" + u, this.context.programs[u] = i.compile(r, t, this.context), this.context.environments[u] = r) : (r.index = u, r.name = "program" + u)
				}
			},
			matchExistingProgram: function (e) {
				for (var t = 0, n = this.context.environments.length; t < n; t++) {
					var r = this.context.environments[t];
					if (r && r.equals(e)) return t
				}
			},
			programExpression: function (e) {
				this.context.aliases.self = "this";
				if (e == null) return "self.noop";
				var t = this.environment.children[e],
					n = t.depths.list,
					r, i = [t.index, t.name, "data"];
				for (var s = 0, o = n.length; s < o; s++) r = n[s], r === 1 ? i.push("depth0") : i.push("depth" + (r - 1));
				return (n.length === 0 ? "self.program(" : "self.programWithDepth(") + i.join(", ") + ")"
			},
			register: function (e, t) {
				this.useRegister(e), this.source.push(e + " = " + t + ";")
			},
			useRegister: function (e) {
				this.registers[e] || (this.registers[e] = true, this.registers.list.push(e))
			},
			pushStackLiteral: function (e) {
				return this.push(new p(e))
			},
			pushStack: function (e) {
				this.flushInline();
				var t = this.incrStack();
				return e && this.source.push(t + " = " + e + ";"), this.compileStack.push(t), t
			},
			replaceStack: function (e) {
				var t = "",
					n = this.isInline(),
					r;
				if (n) {
					var i = this.popStack(true);
					if (i instanceof p) r = i.value;
					else {
						var s = this.stackSlot ? this.topStackName() : this.incrStack();
						t = "(" + this.push(s) + " = " + i + "),", r = this.topStack()
					}
				} else r = this.topStack();
				var o = e.call(this, r);
				return n ? ((this.inlineStack.length || this.compileStack.length) && this.popStack(), this.push("(" + t + o + ")")) : (/^stack/.test(r) || (r = this.nextStack()), this.source.push(r + " = (" + t + o + ");")), r
			},
			nextStack: function () {
				return this.pushStack()
			},
			incrStack: function () {
				return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName()
			},
			topStackName: function () {
				return "stack" + this.stackSlot
			},
			flushInline: function () {
				var e = this.inlineStack;
				if (e.length) {
					this.inlineStack = [];
					for (var t = 0, n = e.length; t < n; t++) {
						var r = e[t];
						r instanceof p ? this.compileStack.push(r) : this.pushStack(r)
					}
				}
			},
			isInline: function () {
				return this.inlineStack.length
			},
			popStack: function (e) {
				var t = this.isInline(),
					n = (t ? this.inlineStack : this.compileStack).pop();
				return !e && n instanceof p ? n.value : (t || this.stackSlot--, n)
			},
			topStack: function (e) {
				var t = this.isInline() ? this.inlineStack : this.compileStack,
					n = t[t.length - 1];
				return !e && n instanceof p ? n.value : n
			},
			quotedString: function (e) {
				return '"' + e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
			},
			setupHelper: function (e, t, n) {
				var r = [];
				this.setupParams(e, r, n);
				var i = this.nameLookup("helpers", t, "helper");
				return {
					params: r,
					name: i,
					callParams: ["depth0"].concat(r).join(", "),
					helperMissingParams: n && ["depth0", this.quotedString(t)].concat(r).join(", ")
				}
			},
			setupParams: function (e, t, n) {
				var r = [],
					i = [],
					s = [],
					o, u, a;
				r.push("hash:" + this.popStack()), u = this.popStack(), a = this.popStack();
				if (a || u) a || (this.context.aliases.self = "this", a = "self.noop"), u || (this.context.aliases.self = "this", u = "self.noop"), r.push("inverse:" + u), r.push("fn:" + a);
				for (var f = 0; f < e; f++) o = this.popStack(), t.push(o), this.options.stringParams && (s.push(this.popStack()), i.push(this.popStack()));
				return this.options.stringParams && (r.push("contexts:[" + i.join(",") + "]"), r.push("types:[" + s.join(",") + "]"), r.push("hashContexts:hashContexts"), r.push("hashTypes:hashTypes")), this.options.data && r.push("data:data"), r = "{" + r.join(",") + "}", n ? (this.register("options", r), t.push("options")) : t.push(r), t.join(", ")
			}
		};
		var d = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),
			v = h.RESERVED_WORDS = {};
		for (var m = 0, g = d.length; m < g; m++) v[d[m]] = true;
		h.isValidJavaScriptVariableName = function (e) {
			return !h.RESERVED_WORDS[e] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(e) ? true : false
		}, e.precompile = function (t, n) {
			if (t == null || typeof t != "string" && t.constructor !== e.AST.ProgramNode) throw new e.Exception("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + t);
			n = n || {}, "data" in n || (n.data = true);
			var r = e.parse(t),
				i = (new c).compile(r, n);
			return (new h).compile(i, n)
		}, e.compile = function (n, r) {
			function s() {
				var i = e.parse(n),
					s = (new c).compile(i, r),
					o = (new h).compile(s, r, t, true);
				return e.template(o)
			}
			if (n == null || typeof n != "string" && n.constructor !== e.AST.ProgramNode) throw new e.Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + n);
			r = r || {}, "data" in r || (r.data = true);
			var i;
			return function (e, t) {
				return i || (i = s()), i.call(this, e, t)
			}
		}, e.VM = {
			template: function (t) {
				var n = {
					escapeExpression: e.Utils.escapeExpression,
					invokePartial: e.VM.invokePartial,
					programs: [],
					program: function (t, n, r) {
						var i = this.programs[t];
						return r ? i = e.VM.program(t, n, r) : i || (i = this.programs[t] = e.VM.program(t, n)), i
					},
					merge: function (t, n) {
						var r = t || n;
						return t && n && (r = {}, e.Utils.extend(r, n), e.Utils.extend(r, t)), r
					},
					programWithDepth: e.VM.programWithDepth,
					noop: e.VM.noop,
					compilerInfo: null
				};
				return function (r, i) {
					i = i || {};
					var s = t.call(n, e, r, i.helpers, i.partials, i.data),
						o = n.compilerInfo || [],
						u = o[0] || 1,
						a = e.COMPILER_REVISION;
					if (u !== a) {
						if (u < a) {
							var f = e.REVISION_CHANGES[a],
								l = e.REVISION_CHANGES[u];
							throw "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + f + ") or downgrade your runtime to an older version (" + l + ")."
						}
						throw "Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + o[1] + ")."
					}
					return s
				}
			},
			programWithDepth: function (e, t, n) {
				var r = Array.prototype.slice.call(arguments, 3),
					i = function (e, i) {
						return i = i || {}, t.apply(this, [e, i.data || n].concat(r))
					};
				return i.program = e, i.depth = r.length, i
			},
			program: function (e, t, n) {
				var r = function (e, r) {
					return r = r || {}, t(e, r.data || n)
				};
				return r.program = e, r.depth = 0, r
			},
			noop: function () {
				return ""
			},
			invokePartial: function (n, r, i, s, o, u) {
				var a = {
					helpers: s,
					partials: o,
					data: u
				};
				if (n === t) throw new e.Exception("The partial " + r + " could not be found");
				if (n instanceof Function) return n(i, a);
				if (!e.compile) throw new e.Exception("The partial " + r + " could not be compiled when running in runtime-only mode");
				return o[r] = e.compile(n, {
					data: u !== t
				}), o[r](i, a)
			}
		}, e.template = e.VM.template
	})(Handlebars),
	define("lib/handlebars", function () {});
	var Base64ArrayBuffer = function () {};
	Base64ArrayBuffer.setup = function () {
		this.chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", this.lookup = new Uint8Array(256);
		for (var e = 0; e < this.chars.length; e++) this.lookup[this.chars.charCodeAt(e)] = e
	}, Base64ArrayBuffer.setup(), Base64ArrayBuffer.encode = function (e) {
		var t = new Uint8Array(e),
			n, r = t.length,
			i = "";
		for (n = 0; n < r; n += 3) i += this.chars[t[n] >> 2], i += this.chars[(t[n] & 3) << 4 | t[n + 1] >> 4], i += this.chars[(t[n + 1] & 15) << 2 | t[n + 2] >> 6], i += this.chars[t[n + 2] & 63];
		return r % 3 === 2 ? i = i.substring(0, i.length - 1) + "=" : r % 3 === 1 && (i = i.substring(0, i.length - 2) + "=="), i
	}, Base64ArrayBuffer.decode = function (e) {
		var t = e.length * .75,
			n = e.length,
			r, i = 0,
			s, o, u, a;
		e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
		var f = new ArrayBuffer(t),
			l = new Uint8Array(f);
		for (r = 0; r < n; r += 4) s = this.lookup[e.charCodeAt(r)], o = this.lookup[e.charCodeAt(r + 1)], u = this.lookup[e.charCodeAt(r + 2)], a = this.lookup[e.charCodeAt(r + 3)], l[i++] = s << 2 | o >> 4, l[i++] = (o & 15) << 4 | u >> 2, l[i++] = (u & 3) << 6 | a & 63;
		return f
	},
	define("lib/bin/Base64ArrayBuffer", function () {}), BinaryArrayReader.prototype._read = function (e, t) {
		var n = this.dataView[t](this.offset);
		return this.offset += e, n
	}, BinaryArrayReader.prototype.readBooleanMap = function () {
		return (new BinaryBoolean(this.readUint8())).reverse()
	}, BinaryArrayReader.prototype.readChar = function () {
		return String.fromCharCode(this.readInt8())
	}, BinaryArrayReader.prototype.readInt8 = function () {
		return this._read(1, "getInt8")
	}, BinaryArrayReader.prototype.readInt16 = function () {
		return this._read(2, "getInt16")
	}, BinaryArrayReader.prototype.readInt32 = function () {
		return this._read(4, "getInt32")
	}, BinaryArrayReader.prototype.readUint8 = function () {
		return this._read(1, "getUint8")
	}, BinaryArrayReader.prototype.readUint16 = function () {
		return this._read(2, "getUint16")
	}, BinaryArrayReader.prototype.readUint32 = function () {
		return this._read(4, "getUint32")
	}, BinaryArrayReader.prototype.readFloat64 = function () {
		return this._read(8, "getFloat64")
	}, BinaryArrayReader.prototype.readReader = function () {
		var e = this.readInt32(),
			t = new ArrayBuffer(e),
			n = new Int8Array(t, 0, e);
		for (var r = 0; r < e; r++) n[r] = this.readInt8();
		return new BinaryArrayReader(t)
	}, BinaryArrayReader.prototype.readBooleanArrayFunc = function (e, t) {
		var n = null;
		for (var r = 0; r < e; r++) r % 8 == 0 && (n = this.readBooleanMap()), t(r, n.readBoolean())
	}, BinaryArrayReader.prototype.getBuffer = function () {
		return this.buffer
	}, BinaryArrayReader.prototype.getLength = function () {
		return this.buffer.byteLength
	}, BinaryArrayReader.prototype.getOffset = function () {
		return this.offset
	},
	define("lib/bin/BinaryArrayReader", function () {}), BinaryArrayWriter.prototype._write = function (e, t, n) {
		return this.data.push({
			length: t,
			value: e,
			method: n
		}), this.totalLength += t, this
	}, BinaryArrayWriter.prototype.writeBooleanMap = function (e) {
		return this.writeUint8(e.getValue())
	}, BinaryArrayWriter.prototype.writeChar = function (e) {
		return this.writeUint8(e.charCodeAt(0))
	}, BinaryArrayWriter.prototype.writeInt8 = function (e) {
		return this._write(e, 1, "setInt8")
	}, BinaryArrayWriter.prototype.writeInt16 = function (e) {
		return this._write(e, 2, "setInt16")
	}, BinaryArrayWriter.prototype.writeInt32 = function (e) {
		return this._write(e, 4, "setInt32")
	}, BinaryArrayWriter.prototype.writeUint8 = function (e) {
		return this._write(e, 1, "setUint8")
	}, BinaryArrayWriter.prototype.writeUint16 = function (e) {
		return this._write(e, 2, "setUint16")
	}, BinaryArrayWriter.prototype.writeUint32 = function (e) {
		return this._write(e, 4, "setUint32")
	}, BinaryArrayWriter.prototype.writeFloat64 = function (e) {
		return this._write(e, 8, "setFloat64")
	}, BinaryArrayWriter.prototype.writeWriter = function (e) {
		if (!e) this.writeInt32(0);
		else {
			this.writeInt32(e.getTotalLength());
			var t = e.getData();
			for (var n = 0; n < t.length; n++) this._write(t[n].value, t[n].length, t[n].method)
		}
		return this
	}, BinaryArrayWriter.prototype.writeBooleansArrayFunc = function (e, t) {
		var n = null;
		for (var r = 0; r < e.length; r++) n == null && (n = new BinaryBoolean), n.writeBoolean(t(e[r]) ? 1 : 0), (r + 1) % 8 == 0 && (this.writeBooleanMap(n), n = null);
		return n && (n.fillZero(), this.writeBooleanMap(n)), this
	}, BinaryArrayWriter.prototype.getData = function () {
		return this.data
	}, BinaryArrayWriter.prototype.getTotalLength = function () {
		return this.totalLength
	}, BinaryArrayWriter.prototype.getBuffer = function () {
		var e = new ArrayBuffer(this.totalLength),
			t = new DataView(e, 0),
			n = 0;
		for (var r = 0; r < this.data.length; r++) {
			var i = this.data[r];
			t[i.method](n, i.value), n += i.length
		}
		return e
	},
	define("lib/bin/BinaryArrayWriter", function () {});
	var BinaryBoolean = function (e) {
		this.buffer = e, this.length = 0
	};
	BinaryBoolean.prototype.writeAll = function (e) {
		for (var t = 0; t < 8; t++) this.writeBoolean(arguments[t]);
		return this
	}, BinaryBoolean.prototype.writeBoolean = function (e) {
		return this.buffer <<= 1, this.buffer |= e ? 1 : 0, this.length++, this
	}, BinaryBoolean.prototype.fillZero = function () {
		var e = this.length;
		for (var t = 0; t < 8 - e; t++) this.writeBoolean(0);
		return this
	}, BinaryBoolean.prototype.readBoolean = function () {
		var e = 1,
			t = this.buffer & e;
		return this.buffer >>= 1, t ? true : false
	}, BinaryBoolean.prototype.getValue = function () {
		return this.buffer
	}, BinaryBoolean.prototype.reverse = function () {
		var e = [];
		for (var t = 0; t < 8; t++) e.push(this.readBoolean());
		for (var t = 0; t < 8; t++) this.writeBoolean(e[t]);
		return this
	}, BinaryBoolean.prototype.toString = function () {
		return this.buffer
	},
	define("lib/bin/BinaryBoolean", function () {});
	var BinaryTest = function () {};
	BinaryTest.test = function () {
		var e = new ArrayBuffer(2),
			t = new DataView(e, 0);
		t.setUint8(0, 97), t.setInt8(1, 255);
		var n = [{
				value: "a",
				writeMethod: "writeChar",
				readMethod: "readChar"
			}, {
				value: 255,
				expectedValue: -1,
				writeMethod: "writeInt8",
				readMethod: "readInt8"
			}, {
				value: -1,
				expectedValue: -1,
				writeMethod: "writeUint8",
				readMethod: "readInt8"
			}, {
				value: 255,
				writeMethod: "writeInt16",
				readMethod: "readInt16"
			}, {
				value: 255,
				writeMethod: "writeInt32",
				readMethod: "readInt32"
			}, {
				value: 255,
				writeMethod: "writeUint8",
				readMethod: "readUint8"
			}, {
				value: -1,
				expectedValue: 255,
				writeMethod: "writeUint8",
				readMethod: "readUint8"
			}, {
				value: 255,
				writeMethod: "writeUint16",
				readMethod: "readUint16"
			}, {
				value: 255,
				writeMethod: "writeUint32",
				readMethod: "readUint32"
			}, {
				value: 1 / 3,
				writeMethod: "writeFloat64",
				readMethod: "readFloat64"
			}, {
				value: 1.12345e250,
				writeMethod: "writeFloat64",
				readMethod: "readFloat64"
			}, {
				value: (new BinaryBoolean).writeAll(0, 1, 0, 1, 0, 1, 0, 1),
				expectedValue: 170,
				writeMethod: "writeBooleanMap",
				readMethod: "readBooleanMap"
			}, {
				value: (new BinaryBoolean).writeAll(1, 0, 1, 0, 1, 0, 1, 0),
				expectedValue: 85,
				writeMethod: "writeBooleanMap",
				readMethod: "readBooleanMap"
			}],
			r = new BinaryArrayWriter;
		for (var i = 0; i < n.length; i++) r[n[i].writeMethod](n[i].value);
		var s = new BinaryArrayWriter;
		s.writeInt16(2055), s.writeUint8(77), r.writeWriter(s);
		var o = 0,
			u = new BinaryArrayReader(r.getBuffer());
		for (var i = 0; i < n.length; i++) {
			var a = u[n[i].readMethod](),
				f = n[i].expectedValue === undefined ? n[i].value : n[i].expectedValue;
			a.toString() == f.toString() ? o++ : console.warn("Test " + i + " error: " + a + "!=" + f + " ")
		}
		var l = u.readReader(),
			c = l.readInt16(),
			h = l.readUint8();
		(c != 2055 || h != 77) && console.warn("Test writeWriter/readReader error: " + c + "," + h + " ");
		var p = (new BinaryBoolean).writeAll(1, 0, 1, 0, 0, 0, 0, 0).reverse(),
			c = p.readBoolean(),
			h = p.readBoolean(),
			d = p.readBoolean();
		(c != 1 || h != 0 || d != 1) && console.warn("Test booleanMap error: " + a + "!=" + true + " ");
		var r = new BinaryArrayWriter,
			v = (new BinaryBoolean).writeBoolean(true).writeBoolean(false).writeBoolean(true).fillZero();
		r.writeBooleanMap(v);
		var u = new BinaryArrayReader(r.getBuffer()),
			m = u.readBooleanMap();
		(m.readBoolean() != 1 || m.readBoolean() != 0 || m.readBoolean() != 1) && console.warn("Test booleanMap 2 error: "), console.log("BinaryTest passes: " + o)
	},
	define("lib/bin/BinaryTest", function () {}),
	define("lib/bin/Binary", ["lib/bin/Base64ArrayBuffer", "lib/bin/BinaryArrayReader", "lib/bin/BinaryArrayWriter", "lib/bin/BinaryBoolean", "lib/bin/BinaryTest"], function () {}), requirejs.config({
		baseUrl: "js",
		urlArgs: "bust=" + (new Date).getTime(),
		packages: [],
		paths: {
			template: "../template",
			text: "lib/text",
			kongregateApi: "https://cdn1.kongregate.com/javascripts/kongregate_api"
		}
	}), String.prototype.lcFirst = function () {
		return this.charAt(0).toLowerCase() + this.slice(1)
	}, String.prototype.ucFirst = function () {
		return this.charAt(0).toUpperCase() + this.slice(1)
	};
	var MainInstance, vis;
	GAME_LOADED = true, window.onerror = oldErrorHandler, require(["Main", "lib/jquery", "base/Logger", "base/NumberFormat", "lib/handlebars", "text", "lib/bin/Binary"], function (e) {
		BinaryTest.test(), isBrowserSupported() ? (MainInstance = new e, MainInstance.init(false, function () {})) : document.getElementById("loadingMessage").innerHTML = "Unfortunately <b class='red'>your browser seems to be old</b> and does not support necessary elements (canvas) for this game to run. Please update your browser!"
	}),
	define("app", function () {});
}();
