function ea(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function Mm(i) {
  if (Object.prototype.hasOwnProperty.call(i, "__esModule")) return i;
  var f = i.default;
  if (typeof f == "function") {
    var o = function r() {
      var s = !1;
      try {
        s = this instanceof r;
      } catch {
      }
      return s ? Reflect.construct(f, arguments, this.constructor) : f.apply(this, arguments);
    };
    o.prototype = f.prototype;
  } else o = {};
  return Object.defineProperty(o, "__esModule", { value: !0 }), Object.keys(i).forEach(function(r) {
    var s = Object.getOwnPropertyDescriptor(i, r);
    Object.defineProperty(o, r, s.get ? s : {
      enumerable: !0,
      get: function() {
        return i[r];
      }
    });
  }), o;
}
var Ts = { exports: {} }, ue = {};
var Th;
function v1() {
  if (Th) return ue;
  Th = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), f = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), v = /* @__PURE__ */ Symbol.for("react.consumer"), h = /* @__PURE__ */ Symbol.for("react.context"), T = /* @__PURE__ */ Symbol.for("react.forward_ref"), _ = /* @__PURE__ */ Symbol.for("react.suspense"), A = /* @__PURE__ */ Symbol.for("react.memo"), x = /* @__PURE__ */ Symbol.for("react.lazy"), m = /* @__PURE__ */ Symbol.for("react.activity"), z = /* @__PURE__ */ Symbol.for("react.view_transition"), q = Symbol.iterator;
  function L(S) {
    return S === null || typeof S != "object" ? null : (S = q && S[q] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  var j = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, D = Object.assign, H = {};
  function M(S, U, $) {
    this.props = S, this.context = U, this.refs = H, this.updater = $ || j;
  }
  M.prototype.isReactComponent = {}, M.prototype.setState = function(S, U) {
    if (typeof S != "object" && typeof S != "function" && S != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, S, U, "setState");
  }, M.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function F() {
  }
  F.prototype = M.prototype;
  function te(S, U, $) {
    this.props = S, this.context = U, this.refs = H, this.updater = $ || j;
  }
  var V = te.prototype = new F();
  V.constructor = te, D(V, M.prototype), V.isPureReactComponent = !0;
  var J = Array.isArray;
  function G() {
  }
  var k = { H: null, A: null, T: null, S: null }, be = Object.prototype.hasOwnProperty;
  function de(S, U, $) {
    var W = $.ref;
    return {
      $$typeof: i,
      type: S,
      key: U,
      ref: W !== void 0 ? W : null,
      props: $
    };
  }
  function Me(S, U) {
    return de(S.type, U, S.props);
  }
  function He(S) {
    return typeof S == "object" && S !== null && S.$$typeof === i;
  }
  function _e(S) {
    var U = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function($) {
      return U[$];
    });
  }
  var Fe = /\/+/g;
  function De(S, U) {
    return typeof S == "object" && S !== null && S.key != null ? _e("" + S.key) : U.toString(36);
  }
  function w(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (typeof S.status == "string" ? S.then(G, G) : (S.status = "pending", S.then(
          function(U) {
            S.status === "pending" && (S.status = "fulfilled", S.value = U);
          },
          function(U) {
            S.status === "pending" && (S.status = "rejected", S.reason = U);
          }
        )), S.status) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function ee(S, U, $, W, ne) {
    var Ee = typeof S;
    (Ee === "undefined" || Ee === "boolean") && (S = null);
    var pe = !1;
    if (S === null) pe = !0;
    else
      switch (Ee) {
        case "bigint":
        case "string":
        case "number":
          pe = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case i:
            case f:
              pe = !0;
              break;
            case x:
              return pe = S._init, ee(
                pe(S._payload),
                U,
                $,
                W,
                ne
              );
          }
      }
    if (pe)
      return ne = ne(S), pe = W === "" ? "." + De(S, 0) : W, J(ne) ? ($ = "", pe != null && ($ = pe.replace(Fe, "$&/") + "/"), ee(ne, U, $, "", function(tl) {
        return tl;
      })) : ne != null && (He(ne) && (ne = Me(
        ne,
        $ + (ne.key == null || S && S.key === ne.key ? "" : ("" + ne.key).replace(
          Fe,
          "$&/"
        ) + "/") + pe
      )), U.push(ne)), 1;
    pe = 0;
    var P = W === "" ? "." : W + ":";
    if (J(S))
      for (var ae = 0; ae < S.length; ae++)
        W = S[ae], Ee = P + De(W, ae), pe += ee(
          W,
          U,
          $,
          Ee,
          ne
        );
    else if (ae = L(S), typeof ae == "function")
      for (S = ae.call(S), ae = 0; !(W = S.next()).done; )
        W = W.value, Ee = P + De(W, ae++), pe += ee(
          W,
          U,
          $,
          Ee,
          ne
        );
    else if (Ee === "object") {
      if (typeof S.then == "function")
        return ee(
          w(S),
          U,
          $,
          W,
          ne
        );
      throw U = String(S), Error(
        "Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return pe;
  }
  function Q(S, U, $) {
    if (S == null) return S;
    var W = [], ne = 0;
    return ee(S, W, "", "", function(Ee) {
      return U.call($, Ee, ne++);
    }), W;
  }
  function he(S) {
    if (S._status === -1) {
      var U = S._result, $ = U();
      $.then(
        function(W) {
          (S._status === 0 || S._status === -1) && (S._status = 1, S._result = W, $.status === void 0 && ($.status = "fulfilled", $.value = W));
        },
        function(W) {
          (S._status === 0 || S._status === -1) && (S._status = 2, S._result = W, $.status === void 0 && ($.status = "rejected", $.reason = W));
        }
      ), S._status === -1 && (S._status = 0, S._result = $);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var ce = typeof reportError == "function" ? reportError : function(S) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var U = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
        error: S
      });
      if (!window.dispatchEvent(U)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", S);
      return;
    }
    console.error(S);
  };
  function je(S) {
    var U = k.T, $ = {};
    $.types = U !== null ? U.types : null, k.T = $;
    try {
      var W = S(), ne = k.S;
      ne !== null && ne($, W), typeof W == "object" && W !== null && typeof W.then == "function" && W.then(G, ce);
    } catch (Ee) {
      ce(Ee);
    } finally {
      U !== null && $.types !== null && (U.types = $.types), k.T = U;
    }
  }
  function at(S) {
    var U = k.T;
    if (U !== null) {
      var $ = U.types;
      $ === null ? U.types = [S] : $.indexOf(S) === -1 && $.push(S);
    } else je(at.bind(null, S));
  }
  var Mt = {
    map: Q,
    forEach: function(S, U, $) {
      Q(
        S,
        function() {
          U.apply(this, arguments);
        },
        $
      );
    },
    count: function(S) {
      var U = 0;
      return Q(S, function() {
        U++;
      }), U;
    },
    toArray: function(S) {
      return Q(S, function(U) {
        return U;
      }) || [];
    },
    only: function(S) {
      if (!He(S))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return S;
    }
  };
  return ue.Activity = m, ue.Children = Mt, ue.Component = M, ue.Fragment = o, ue.Profiler = s, ue.PureComponent = te, ue.StrictMode = r, ue.Suspense = _, ue.ViewTransition = z, ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k, ue.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(S) {
      return k.H.useMemoCache(S);
    }
  }, ue.addTransitionType = at, ue.cache = function(S) {
    return function() {
      return S.apply(null, arguments);
    };
  }, ue.cacheSignal = function() {
    return null;
  }, ue.cloneElement = function(S, U, $) {
    if (S == null)
      throw Error(
        "The argument must be a React element, but you passed " + S + "."
      );
    var W = D({}, S.props), ne = S.key;
    if (U != null)
      for (Ee in U.key !== void 0 && (ne = "" + U.key), U)
        !be.call(U, Ee) || Ee === "key" || Ee === "__self" || Ee === "__source" || Ee === "ref" && U.ref === void 0 || (W[Ee] = U[Ee]);
    var Ee = arguments.length - 2;
    if (Ee === 1) W.children = $;
    else if (1 < Ee) {
      for (var pe = Array(Ee), P = 0; P < Ee; P++)
        pe[P] = arguments[P + 2];
      W.children = pe;
    }
    return de(S.type, ne, W);
  }, ue.createContext = function(S) {
    return S = {
      $$typeof: h,
      _currentValue: S,
      _currentValue2: S,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, S.Provider = S, S.Consumer = {
      $$typeof: v,
      _context: S
    }, S;
  }, ue.createElement = function(S, U, $) {
    var W, ne = {}, Ee = null;
    if (U != null)
      for (W in U.key !== void 0 && (Ee = "" + U.key), U)
        be.call(U, W) && W !== "key" && W !== "__self" && W !== "__source" && (ne[W] = U[W]);
    var pe = arguments.length - 2;
    if (pe === 1) ne.children = $;
    else if (1 < pe) {
      for (var P = Array(pe), ae = 0; ae < pe; ae++)
        P[ae] = arguments[ae + 2];
      ne.children = P;
    }
    if (S && S.defaultProps)
      for (W in pe = S.defaultProps, pe)
        ne[W] === void 0 && (ne[W] = pe[W]);
    return de(S, Ee, ne);
  }, ue.createRef = function() {
    return { current: null };
  }, ue.forwardRef = function(S) {
    return { $$typeof: T, render: S };
  }, ue.isValidElement = He, ue.lazy = function(S) {
    return {
      $$typeof: x,
      _payload: { _status: -1, _result: S },
      _init: he
    };
  }, ue.memo = function(S, U) {
    return {
      $$typeof: A,
      type: S,
      compare: U === void 0 ? null : U
    };
  }, ue.startTransition = je, ue.unstable_useCacheRefresh = function() {
    return k.H.useCacheRefresh();
  }, ue.use = function(S) {
    return k.H.use(S);
  }, ue.useActionState = function(S, U, $) {
    return k.H.useActionState(S, U, $);
  }, ue.useCallback = function(S, U) {
    return k.H.useCallback(S, U);
  }, ue.useContext = function(S) {
    return k.H.useContext(S);
  }, ue.useDebugValue = function() {
  }, ue.useDeferredValue = function(S, U) {
    return k.H.useDeferredValue(S, U);
  }, ue.useEffect = function(S, U) {
    return k.H.useEffect(S, U);
  }, ue.useEffectEvent = function(S) {
    return k.H.useEffectEvent(S);
  }, ue.useId = function() {
    return k.H.useId();
  }, ue.useImperativeHandle = function(S, U, $) {
    return k.H.useImperativeHandle(S, U, $);
  }, ue.useInsertionEffect = function(S, U) {
    return k.H.useInsertionEffect(S, U);
  }, ue.useLayoutEffect = function(S, U) {
    return k.H.useLayoutEffect(S, U);
  }, ue.useMemo = function(S, U) {
    return k.H.useMemo(S, U);
  }, ue.useOptimistic = function(S, U) {
    return k.H.useOptimistic(S, U);
  }, ue.useReducer = function(S, U, $) {
    return k.H.useReducer(S, U, $);
  }, ue.useRef = function(S) {
    return k.H.useRef(S);
  }, ue.useState = function(S) {
    return k.H.useState(S);
  }, ue.useSyncExternalStore = function(S, U, $) {
    return k.H.useSyncExternalStore(
      S,
      U,
      $
    );
  }, ue.useTransition = function() {
    return k.H.useTransition();
  }, ue.version = "19.3.0", ue;
}
var Rh;
function Sd() {
  return Rh || (Rh = 1, Ts.exports = v1()), Ts.exports;
}
var oe = Sd();
const ie = /* @__PURE__ */ ea(oe);
var Rs = { exports: {} }, Ai = {}, Os = { exports: {} }, _s = {};
var Oh;
function y1() {
  return Oh || (Oh = 1, (function(i) {
    function f(w, ee) {
      var Q = w.length;
      w.push(ee);
      e: for (; 0 < Q; ) {
        var he = Q - 1 >>> 1, ce = w[he];
        if (0 < s(ce, ee))
          w[he] = ee, w[Q] = ce, Q = he;
        else break e;
      }
    }
    function o(w) {
      return w.length === 0 ? null : w[0];
    }
    function r(w) {
      if (w.length === 0) return null;
      var ee = w[0], Q = w.pop();
      if (Q !== ee) {
        w[0] = Q;
        e: for (var he = 0, ce = w.length, je = ce >>> 1; he < je; ) {
          var at = 2 * (he + 1) - 1, Mt = w[at], S = at + 1, U = w[S];
          if (0 > s(Mt, Q))
            S < ce && 0 > s(U, Mt) ? (w[he] = U, w[S] = Q, he = S) : (w[he] = Mt, w[at] = Q, he = at);
          else if (S < ce && 0 > s(U, Q))
            w[he] = U, w[S] = Q, he = S;
          else break e;
        }
      }
      return ee;
    }
    function s(w, ee) {
      var Q = w.sortIndex - ee.sortIndex;
      return Q !== 0 ? Q : w.id - ee.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var v = performance;
      i.unstable_now = function() {
        return v.now();
      };
    } else {
      var h = Date, T = h.now();
      i.unstable_now = function() {
        return h.now() - T;
      };
    }
    var _ = [], A = [], x = 1, m = null, z = 3, q = !1, L = !1, j = !1, D = !1, H = typeof setTimeout == "function" ? setTimeout : null, M = typeof clearTimeout == "function" ? clearTimeout : null, F = typeof setImmediate < "u" ? setImmediate : null;
    function te(w) {
      for (var ee = o(A); ee !== null; ) {
        if (ee.callback === null) r(A);
        else if (ee.startTime <= w)
          r(A), ee.sortIndex = ee.expirationTime, f(_, ee);
        else break;
        ee = o(A);
      }
    }
    function V(w) {
      if (j = !1, te(w), !L)
        if (o(_) !== null)
          L = !0, J || (J = !0, He());
        else {
          var ee = o(A);
          ee !== null && De(V, ee.startTime - w);
        }
    }
    var J = !1, G = -1, k = 5, be = -1;
    function de() {
      return D ? !0 : !(i.unstable_now() - be < k);
    }
    function Me() {
      if (D = !1, J) {
        var w = i.unstable_now();
        be = w;
        var ee = !0;
        try {
          e: {
            L = !1, j && (j = !1, M(G), G = -1), q = !0;
            var Q = z;
            try {
              t: {
                for (te(w), m = o(_); m !== null && !(m.expirationTime > w && de()); ) {
                  var he = m.callback;
                  if (typeof he == "function") {
                    m.callback = null, z = m.priorityLevel;
                    var ce = he(
                      m.expirationTime <= w
                    );
                    if (w = i.unstable_now(), typeof ce == "function") {
                      m.callback = ce, te(w), ee = !0;
                      break t;
                    }
                    m === o(_) && r(_), te(w);
                  } else r(_);
                  m = o(_);
                }
                if (m !== null) ee = !0;
                else {
                  var je = o(A);
                  je !== null && De(
                    V,
                    je.startTime - w
                  ), ee = !1;
                }
              }
              break e;
            } finally {
              m = null, z = Q, q = !1;
            }
            ee = void 0;
          }
        } finally {
          ee ? He() : J = !1;
        }
      }
    }
    var He;
    if (typeof F == "function")
      He = function() {
        F(Me);
      };
    else if (typeof MessageChannel < "u") {
      var _e = new MessageChannel(), Fe = _e.port2;
      _e.port1.onmessage = Me, He = function() {
        Fe.postMessage(null);
      };
    } else
      He = function() {
        H(Me, 0);
      };
    function De(w, ee) {
      G = H(function() {
        w(i.unstable_now());
      }, ee);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(w) {
      w.callback = null;
    }, i.unstable_forceFrameRate = function(w) {
      0 > w || 125 < w ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : k = 0 < w ? Math.floor(1e3 / w) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return z;
    }, i.unstable_next = function(w) {
      switch (z) {
        case 1:
        case 2:
        case 3:
          var ee = 3;
          break;
        default:
          ee = z;
      }
      var Q = z;
      z = ee;
      try {
        return w();
      } finally {
        z = Q;
      }
    }, i.unstable_requestPaint = function() {
      D = !0;
    }, i.unstable_runWithPriority = function(w, ee) {
      switch (w) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          w = 3;
      }
      var Q = z;
      z = w;
      try {
        return ee();
      } finally {
        z = Q;
      }
    }, i.unstable_scheduleCallback = function(w, ee, Q) {
      var he = i.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? he + Q : he) : Q = he, w) {
        case 1:
          var ce = -1;
          break;
        case 2:
          ce = 250;
          break;
        case 5:
          ce = 1073741823;
          break;
        case 4:
          ce = 1e4;
          break;
        default:
          ce = 5e3;
      }
      return ce = Q + ce, w = {
        id: x++,
        callback: ee,
        priorityLevel: w,
        startTime: Q,
        expirationTime: ce,
        sortIndex: -1
      }, Q > he ? (w.sortIndex = Q, f(A, w), o(_) === null && w === o(A) && (j ? (M(G), G = -1) : j = !0, De(V, Q - he))) : (w.sortIndex = ce, f(_, w), L || q || (L = !0, J || (J = !0, He()))), w;
    }, i.unstable_shouldYield = de, i.unstable_wrapCallback = function(w) {
      var ee = z;
      return function() {
        var Q = z;
        z = ee;
        try {
          return w.apply(this, arguments);
        } finally {
          z = Q;
        }
      };
    };
  })(_s)), _s;
}
var _h;
function h1() {
  return _h || (_h = 1, Os.exports = y1()), Os.exports;
}
var As = { exports: {} }, ot = {};
var Ah;
function m1() {
  if (Ah) return ot;
  Ah = 1;
  var i = Sd();
  function f(x) {
    var m = "https://react.dev/errors/" + x;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var z = 2; z < arguments.length; z++)
        m += "&args[]=" + encodeURIComponent(arguments[z]);
    }
    return "Minified React error #" + x + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var r = {
    d: {
      f: o,
      r: function() {
        throw Error(f(522));
      },
      D: o,
      C: o,
      L: o,
      m: o,
      X: o,
      S: o,
      M: o
    },
    p: 0,
    findDOMNode: null
  }, s = /* @__PURE__ */ Symbol.for("react.portal"), v = /* @__PURE__ */ Symbol.for("react.recoverable"), h = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function T(x, m, z) {
    var q = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: q == null ? null : q === h ? h : "" + q,
      children: x,
      containerInfo: m,
      implementation: z
    };
  }
  var _ = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function A(x, m) {
    if (x === "font") return "";
    if (typeof m == "string")
      return m === "use-credentials" ? m : "";
  }
  return ot.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, ot.browser = function(x) {
    return { $$typeof: v, _reason: x };
  }, ot.createPortal = function(x, m) {
    var z = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
      throw Error(f(299));
    return T(x, m, null, z);
  }, ot.flushSync = function(x) {
    var m = _.T, z = r.p;
    try {
      if (_.T = null, r.p = 2, x) return x();
    } finally {
      _.T = m, r.p = z, r.d.f();
    }
  }, ot.preconnect = function(x, m) {
    typeof x == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, r.d.C(x, m));
  }, ot.prefetchDNS = function(x) {
    typeof x == "string" && r.d.D(x);
  }, ot.preinit = function(x, m) {
    if (typeof x == "string" && m && typeof m.as == "string") {
      var z = m.as, q = A(z, m.crossOrigin), L = typeof m.integrity == "string" ? m.integrity : void 0, j = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      z === "style" ? r.d.S(
        x,
        typeof m.precedence == "string" ? m.precedence : void 0,
        {
          crossOrigin: q,
          integrity: L,
          fetchPriority: j
        }
      ) : z === "script" && r.d.X(x, {
        crossOrigin: q,
        integrity: L,
        fetchPriority: j,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0
      });
    }
  }, ot.preinitModule = function(x, m) {
    if (typeof x == "string")
      if (typeof m == "object" && m !== null) {
        if (m.as == null || m.as === "script") {
          var z = A(
            m.as,
            m.crossOrigin
          );
          r.d.M(x, {
            crossOrigin: z,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0
          });
        }
      } else m == null && r.d.M(x);
  }, ot.preload = function(x, m) {
    if (typeof x == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
      var z = m.as, q = A(z, m.crossOrigin);
      r.d.L(x, z, {
        crossOrigin: q,
        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0,
        type: typeof m.type == "string" ? m.type : void 0,
        fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
        referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
        imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
        imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
        media: typeof m.media == "string" ? m.media : void 0
      });
    }
  }, ot.preloadModule = function(x, m) {
    if (typeof x == "string")
      if (m) {
        var z = A(m.as, m.crossOrigin);
        r.d.m(x, {
          as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
          crossOrigin: z,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0
        });
      } else r.d.m(x);
  }, ot.requestFormReset = function(x) {
    r.d.r(x);
  }, ot.unstable_batchedUpdates = function(x, m) {
    return x(m);
  }, ot.useFormState = function(x, m, z) {
    return _.H.useFormState(x, m, z);
  }, ot.useFormStatus = function() {
    return _.H.useHostTransitionStatus();
  }, ot.version = "19.3.0", ot;
}
var Ch;
function g1() {
  if (Ch) return As.exports;
  Ch = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (f) {
        console.error(f);
      }
  }
  return i(), As.exports = m1(), As.exports;
}
var xh;
function S1() {
  if (xh) return Ai;
  xh = 1;
  var i = h1(), f = Sd(), o = g1();
  function r(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function v(e) {
    for (var t = e, l = t; l && !l.alternate; )
      t = l, (t.flags & 4098) !== 0 && (e = t.return), l = t.return;
    for (; t.return; ) t = t.return;
    return t.tag === 3 ? e : null;
  }
  function h(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function T(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function _(e) {
    if (v(e) !== e)
      throw Error(r(188));
  }
  function A(e) {
    var t = e.alternate;
    if (!t) {
      if (t = v(e), t === null) throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var l = e, a = t; ; ) {
      var n = l.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (a = n.return, a !== null) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === l) return _(n), e;
          if (u === a) return _(n), t;
          u = u.sibling;
        }
        throw Error(r(188));
      }
      if (l.return !== a.return) l = n, a = u;
      else {
        for (var c = !1, d = n.child; d; ) {
          if (d === l) {
            c = !0, l = n, a = u;
            break;
          }
          if (d === a) {
            c = !0, a = n, l = u;
            break;
          }
          d = d.sibling;
        }
        if (!c) {
          for (d = u.child; d; ) {
            if (d === l) {
              c = !0, l = u, a = n;
              break;
            }
            if (d === a) {
              c = !0, a = u, l = n;
              break;
            }
            d = d.sibling;
          }
          if (!c) throw Error(r(189));
        }
      }
      if (l.alternate !== a) throw Error(r(190));
    }
    if (l.tag !== 3) throw Error(r(188));
    return l.stateNode.current === l ? e : t;
  }
  function x(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = x(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  function m(e, t, l, a, n, u) {
    for (; e !== null; ) {
      if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && l(e, a, n, u) || (e.tag !== 22 || e.memoizedState === null) && (t || e.tag !== 5 && e.tag !== 27) && m(
        e.child,
        t,
        l,
        a,
        n,
        u
      ))
        return !0;
      e = e.sibling;
    }
    return !1;
  }
  function z(e) {
    for (e = e.return; e !== null; ) {
      if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
      e = e.return;
    }
    return null;
  }
  function q(e) {
    var t = !1;
    for (e = e.return; e !== null && (e.tag === 4 && (t = !0), !(e.tag === 3 || e.tag === 5 || e.tag === 27)); )
      e = e.return;
    return t;
  }
  function L(e) {
    var t = [null, null], l = z(e);
    return l === null || j(
      t,
      e,
      l.child,
      { foundSelf: !1 }
    ), t;
  }
  function j(e, t, l, a) {
    for (; l !== null; ) {
      if (l === t) a.foundSelf = !0;
      else if (l.tag === 5 || l.tag === 27 || l.tag === 6) {
        if (a.foundSelf) return e[1] = l, !0;
        e[0] = l;
      } else if ((l.tag !== 22 || l.memoizedState === null) && j(
        e,
        t,
        l.child,
        a
      ))
        return !0;
      l = l.sibling;
    }
    return !1;
  }
  function D(e) {
    switch (e.tag) {
      case 5:
      case 27:
      case 6:
        return e.stateNode;
      case 3:
        return e.stateNode.containerInfo;
      default:
        throw Error(r(559));
    }
  }
  var H = null, M = null;
  function F(e, t, l) {
    return e === l ? !0 : e === t ? (H = e, !0) : !1;
  }
  function te(e, t, l) {
    return e === l ? (M = e, !1) : e === t ? (M !== null && (H = e), !0) : !1;
  }
  function V(e) {
    if (e === null) return null;
    do
      e = e === null ? null : e.return;
    while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
    return e || null;
  }
  function J(e, t, l) {
    for (var a = 0, n = e; n; n = l(n)) a++;
    n = 0;
    for (var u = t; u; u = l(u)) n++;
    for (; 0 < a - n; ) e = l(e), a--;
    for (; 0 < n - a; ) t = l(t), n--;
    for (; a--; ) {
      if (e === t || t !== null && e === t.alternate)
        return e;
      e = l(e), t = l(t);
    }
    return null;
  }
  var G = Object.assign, k = /* @__PURE__ */ Symbol.for("react.element"), be = /* @__PURE__ */ Symbol.for("react.transitional.element"), de = /* @__PURE__ */ Symbol.for("react.portal"), Me = /* @__PURE__ */ Symbol.for("react.fragment"), He = /* @__PURE__ */ Symbol.for("react.strict_mode"), _e = /* @__PURE__ */ Symbol.for("react.profiler"), Fe = /* @__PURE__ */ Symbol.for("react.consumer"), De = /* @__PURE__ */ Symbol.for("react.context"), w = /* @__PURE__ */ Symbol.for("react.forward_ref"), ee = /* @__PURE__ */ Symbol.for("react.suspense"), Q = /* @__PURE__ */ Symbol.for("react.suspense_list"), he = /* @__PURE__ */ Symbol.for("react.memo"), ce = /* @__PURE__ */ Symbol.for("react.lazy"), je = /* @__PURE__ */ Symbol.for("react.activity"), at = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), Mt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), S = /* @__PURE__ */ Symbol.for("react.view_transition"), U = /* @__PURE__ */ Symbol.for("react.recoverable"), $ = Symbol.iterator;
  function W(e) {
    return e === null || typeof e != "object" ? null : (e = $ && e[$] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ne = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ee(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ne ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Me:
        return "Fragment";
      case _e:
        return "Profiler";
      case He:
        return "StrictMode";
      case ee:
        return "Suspense";
      case Q:
        return "SuspenseList";
      case je:
        return "Activity";
      case S:
        return "ViewTransition";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case de:
          return "Portal";
        case De:
          return e.displayName || "Context";
        case Fe:
          return (e._context.displayName || "Context") + ".Consumer";
        case w:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case he:
          return t = e.displayName || null, t !== null ? t : Ee(e.type) || "Memo";
        case ce:
          t = e._payload, e = e._init;
          try {
            return Ee(e(t));
          } catch {
          }
      }
    return null;
  }
  var pe = Array.isArray, P = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ae = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, tl = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, mn = [], aa = -1;
  function Dt(e) {
    return { current: e };
  }
  function $e(e) {
    0 > aa || (e.current = mn[aa], mn[aa] = null, aa--);
  }
  function Ae(e, t) {
    aa++, mn[aa] = e.current, e.current = t;
  }
  var Gt = Dt(null), na = Dt(null), yl = Dt(null), ja = Dt(null);
  function gn(e, t) {
    switch (Ae(yl, t), Ae(na, e), Ae(Gt, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Dy(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Dy(t), e = Ny(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    $e(Gt), Ae(Gt, e);
  }
  function Bl() {
    $e(Gt), $e(na), $e(yl);
  }
  function gu(e) {
    var t = e.memoizedState;
    t !== null && (ou._currentValue = t.memoizedState, Ae(ja, e)), t = Gt.current;
    var l = Ny(t, e.type);
    t !== l && (Ae(na, e), Ae(Gt, l));
  }
  function Ga(e) {
    na.current === e && ($e(Gt), $e(na)), ja.current === e && ($e(ja), ou._currentValue = tl);
  }
  var Su, bu;
  function hl(e) {
    if (Su === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        Su = t && t[1] || "", bu = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Su + e + bu;
  }
  var Sn = !1;
  function Eu(e, t) {
    if (!e || Sn) return "";
    Sn = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var B = function() {
                throw Error();
              };
              if (Object.defineProperty(B.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(B, []);
                } catch (Y) {
                  var b = Y;
                }
                Reflect.construct(e, [], B);
              } else {
                try {
                  B.call();
                } catch (Y) {
                  b = Y;
                }
                B = !1;
                try {
                  var O = Object.getOwnPropertyDescriptor(
                    e.prototype,
                    "props"
                  );
                  Object.defineProperty(e.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), B = !0, new e();
                } finally {
                  B && (O !== void 0 ? Object.defineProperty(e.prototype, "props", O) : delete e.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (Y) {
                b = Y;
              }
              (B = e()) && typeof B.catch == "function" && B.catch(function() {
              });
            }
          } catch (Y) {
            if (Y && b && typeof Y.stack == "string")
              return [Y.stack, b.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n && n.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = a.DetermineComponentFrameRoot(), c = u[0], d = u[1];
      if (c && d) {
        var y = c.split(`
`), p = d.split(`
`);
        for (n = a = 0; a < y.length && !y[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < p.length && !p[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === y.length || n === p.length)
          for (a = y.length - 1, n = p.length - 1; 1 <= a && 0 <= n && y[a] !== p[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (y[a] !== p[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || y[a] !== p[n]) {
                  var C = `
` + y[a].replace(" at new ", " at ");
                  return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), C;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      Sn = !1, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? hl(l) : "";
  }
  function Gi(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return hl(e.type);
      case 16:
        return hl("Lazy");
      case 13:
        return e.child !== t && t !== null ? hl("Suspense Fallback") : hl("Suspense");
      case 19:
        return hl("SuspenseList");
      case 0:
      case 15:
        return Eu(e.type, !1);
      case 11:
        return Eu(e.type.render, !1);
      case 1:
        return Eu(e.type, !0);
      case 31:
        return hl("Activity");
      case 30:
        return hl("ViewTransition");
      default:
        return "";
    }
  }
  function Xi(e) {
    try {
      var t = "", l = null;
      do
        t += Gi(e, l), l = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var bn = Object.prototype.hasOwnProperty, En = i.unstable_scheduleCallback, pn = i.unstable_cancelCallback, $f = i.unstable_shouldYield, Vi = i.unstable_requestPaint, yt = i.unstable_now, Qi = i.unstable_getCurrentPriorityLevel, Zi = i.unstable_ImmediatePriority, pu = i.unstable_UserBlockingPriority, Tn = i.unstable_NormalPriority, Ki = i.unstable_LowPriority, Ji = i.unstable_IdlePriority, ki = i.log, If = i.unstable_setDisableYieldValue, ua = null, ht = null;
  function ll(e) {
    if (typeof ki == "function" && If(e), ht && typeof ht.setStrictMode == "function")
      try {
        ht.setStrictMode(ua, e);
      } catch {
      }
  }
  var mt = Math.clz32 ? Math.clz32 : Pi, Wi = Math.log, Ff = Math.LN2;
  function Pi(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Wi(e) / Ff | 0) | 0;
  }
  var Rn = 256, Xa = 262144, On = 4194304;
  function Xt(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & -e;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Ul(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0, u = e.suspendedLanes, c = e.pingedLanes;
    e = e.warmLanes;
    var d = a & 134217727;
    return d !== 0 ? (a = d & ~u, a !== 0 ? n = Xt(a) : (c &= d, c !== 0 ? n = Xt(c) : l || (l = d & ~e, l !== 0 && (n = Xt(l))))) : (d = a & ~u, d !== 0 ? n = Xt(d) : c !== 0 ? n = Xt(c) : l || (l = a & ~e, l !== 0 && (n = Xt(l)))), n === 0 ? 0 : t !== 0 && t !== n && (t & u) === 0 && (u = n & -n, l = t & -t, u >= l || u === 32 && (l & 4194048) !== 0) ? t : n;
  }
  function ia(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function $i(e, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var a = 31 - mt(l), n = 1 << a;
        t |= e[a], l &= ~n;
      }
    return t;
  }
  function Ii(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Fi() {
    var e = On;
    return On <<= 1, (On & 62914560) === 0 && (On = 4194304), e;
  }
  function Hl(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function ra(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Z(e, t, l, a, n, u) {
    var c = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var d = e.entanglements, y = e.expirationTimes, p = e.hiddenUpdates;
    for (l = c & ~l; 0 < l; ) {
      var C = 31 - mt(l), B = 1 << C;
      d[C] = 0, y[C] = -1;
      var b = p[C];
      if (b !== null)
        for (p[C] = null, C = 0; C < b.length; C++) {
          var O = b[C];
          O !== null && (O.lane &= -536870913);
        }
      l &= ~B;
    }
    a !== 0 && er(e, a, 0), u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(c & ~t));
  }
  function er(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - mt(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 261930;
  }
  function Vt(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var a = 31 - mt(l), n = 1 << a;
      n & t | e[a] & t && (e[a] |= t), l &= ~n;
    }
  }
  function Tu(e, t) {
    var l = t & -t;
    return l = (l & 42) !== 0 ? 1 : _n(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l;
  }
  function _n(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function An(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Ru() {
    var e = ae.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : hh(e.type));
  }
  function Ou(e, t) {
    var l = ae.p;
    try {
      return ae.p = e, t();
    } finally {
      ae.p = l;
    }
  }
  var Qt = Math.random().toString(36).slice(2), Ke = "__reactFiber$" + Qt, nt = "__reactProps$" + Qt, wl = "__reactContainer$" + Qt, _u = "__reactEvents$" + Qt, tr = "__reactListeners$" + Qt, lr = "__reactHandles$" + Qt, Au = "__reactResources$" + Qt, fa = "__reactMarker$" + Qt, Va = "__reactLoad$" + Qt;
  function Qa(e) {
    delete e[Ke], delete e[nt], delete e[tr], delete e[lr];
  }
  function ml(e) {
    var t;
    if (t = e[Ke]) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[wl] || l[Ke]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = Wy(e); e !== null; ) {
            if (l = e[Ke]) return l;
            e = Wy(e);
          }
        return t;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function Ll(e) {
    if (e = e[Ke] || e[wl]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function ca(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function ql(e) {
    var t = e[Au];
    return t || (t = e[Au] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Qe(e) {
    e[fa] = !0;
  }
  function Cu(e) {
    e[Va] = void 0;
  }
  var Cn = /* @__PURE__ */ new Set(), xu = {};
  function gl(e, t) {
    Yl(e, t), Yl(e + "Capture", t);
  }
  function Yl(e, t) {
    for (xu[e] = t, e = 0; e < t.length; e++)
      Cn.add(t[e]);
  }
  var ar = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), zu = {}, Mu = {};
  function nr(e) {
    return bn.call(Mu, e) ? !0 : bn.call(zu, e) ? !1 : ar.test(e) ? Mu[e] = !0 : (zu[e] = !0, !1);
  }
  var Se = !1;
  function Du() {
    var e = Se;
    return Se = !1, e;
  }
  function Za(e, t, l) {
    if (nr(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, l);
      }
  }
  function Ka(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, l);
    }
  }
  function Zt(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, a);
    }
  }
  function st(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Nu(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ur(e, t, l) {
    var a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get, u = a.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(c) {
          l = "" + c, u.call(this, c);
        }
      }), Object.defineProperty(e, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(c) {
          l = "" + c;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function xn(e) {
    if (!e._valueTracker) {
      var t = Nu(e) ? "checked" : "value";
      e._valueTracker = ur(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Bu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(), a = "";
    return e && (a = Nu(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== l ? (t.setValue(e), !0) : !1;
  }
  var ir = /[\n"\\]/g;
  function gt(e) {
    return e.replace(
      ir,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function zn(e, t, l, a, n, u, c, d) {
    e.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.type = c : e.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + st(t)) : e.value !== "" + st(t) && (e.value = "" + st(t)) : c !== "submit" && c !== "reset" || e.removeAttribute("value"), t != null ? c === "number" && e.value == t ? Ja(e, st(e.value)) : Ja(e, st(t)) : l != null ? Ja(e, st(l)) : a != null && e.removeAttribute("value"), n == null && u != null && (e.defaultChecked = !!u), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.name = "" + st(d) : e.removeAttribute("name");
  }
  function Uu(e, t, l, a, n, u, c, d) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || l != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        xn(e);
        return;
      }
      l = l != null ? "" + st(l) : "", t = t != null ? "" + st(t) : l, d || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = d ? e.checked : !!a, e.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.name = c), xn(e);
  }
  function Ja(e, t) {
    e.defaultValue !== "" + t && (e.defaultValue = "" + t);
  }
  function oa(e, t, l, a) {
    if (e = e.options, t) {
      t = {};
      for (var n = 0; n < l.length; n++)
        t["$" + l[n]] = !0;
      for (l = 0; l < e.length; l++)
        n = t.hasOwnProperty("$" + e[l].value), e[l].selected !== n && (e[l].selected = n), n && a && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + st(l), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === l) {
          e[n].selected = !0, a && (e[n].defaultSelected = !0);
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Hu(e, t, l) {
    if (t != null && (t = "" + st(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + st(l) : "";
  }
  function wu(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(r(92));
        if (pe(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), t = l;
    }
    l = st(t), e.defaultValue = l, a = e.textContent, a === l && a !== "" && a !== null && (e.value = a), xn(e);
  }
  function jl(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var rr = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Lu(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || rr.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function Od(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(r(62));
    if (e = e.style, l != null) {
      for (var a in l)
        !l.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "", Se = !0);
      for (var n in t)
        a = t[n], t.hasOwnProperty(n) && l[n] !== a && (Lu(e, n, a), Se = !0);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && Lu(e, u, t[u]);
  }
  function ec(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var wg = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["maskType", "mask-type"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Lg = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function fr(e) {
    return Lg.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Sl() {
  }
  var tc = null;
  function lc(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Mn = null, Dn = null;
  function _d(e) {
    var t = Ll(e);
    if (t && (e = t.stateNode)) {
      var l = e[nt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (zn(
            e,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), t = l.name, l.type === "radio" && t != null) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + gt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < l.length; t++) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var n = a[nt] || null;
                if (!n) throw Error(r(90));
                zn(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (t = 0; t < l.length; t++)
              a = l[t], a.form === e.form && Bu(a);
          }
          break e;
        case "textarea":
          Hu(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && oa(e, !!l.multiple, t, !1);
      }
    }
  }
  var ac = !1;
  function Ad(e, t, l) {
    if (ac) return e(t, l);
    ac = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (ac = !1, (Mn !== null || Dn !== null) && (cf(), Mn && (t = Mn, e = Dn, Dn = Mn = null, _d(t), e)))
        for (t = 0; t < e.length; t++) _d(e[t]);
    }
  }
  function qu(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[nt] || null;
    if (a === null) return null;
    l = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function")
      throw Error(
        r(231, t, typeof l)
      );
    return l;
  }
  var Gl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), nc = !1;
  if (Gl)
    try {
      var Yu = {};
      Object.defineProperty(Yu, "passive", {
        get: function() {
          nc = !0;
        }
      }), window.addEventListener("test", Yu, Yu), window.removeEventListener("test", Yu, Yu);
    } catch {
      nc = !1;
    }
  var sa = null, uc = null, cr = null;
  function Cd() {
    if (cr) return cr;
    var e, t = uc, l = t.length, a, n = "value" in sa ? sa.value : sa.textContent, u = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++) ;
    var c = l - e;
    for (a = 1; a <= c && t[l - a] === n[u - a]; a++) ;
    return cr = n.slice(e, 1 < a ? 1 - a : void 0);
  }
  function or(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function sr() {
    return !0;
  }
  function xd() {
    return !1;
  }
  function St(e) {
    function t(l, a, n, u, c) {
      this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = c, this.currentTarget = null;
      for (var d in e)
        e.hasOwnProperty(d) && (l = e[d], this[d] = l ? l(u) : u[d]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? sr : xd, this.isPropagationStopped = xd, this;
    }
    return G(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = sr);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = sr);
      },
      persist: function() {
      },
      isPersistent: sr
    }), t;
  }
  var da = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, dr = St(da), ju = G({}, da, { view: 0, detail: 0 }), qg = St(ju), ic, rc, Gu, vr = G({}, ju, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: cc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Gu && (Gu && e.type === "mousemove" ? (ic = e.screenX - Gu.screenX, rc = e.screenY - Gu.screenY) : rc = ic = 0, Gu = e), ic);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : rc;
    }
  }), zd = St(vr), Yg = G({}, vr, { dataTransfer: 0 }), jg = St(Yg), Gg = G({}, ju, { relatedTarget: 0 }), fc = St(Gg), Xg = G({}, da, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Vg = St(Xg), Qg = G({}, da, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Zg = St(Qg), Kg = G({}, da, { data: 0 }), Md = St(Kg), Jg = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, kg = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Wg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Pg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Wg[e]) ? !!t[e] : !1;
  }
  function cc() {
    return Pg;
  }
  var $g = G({}, ju, {
    key: function(e) {
      if (e.key) {
        var t = Jg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = or(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? kg[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: cc,
    charCode: function(e) {
      return e.type === "keypress" ? or(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? or(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Ig = St($g), Fg = G({}, vr, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Dd = St(Fg), eS = G({}, da, { submitter: 0 }), tS = St(eS), lS = G({}, ju, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: cc
  }), aS = St(lS), nS = G({}, da, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), uS = St(nS), iS = G({}, vr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), rS = St(iS), fS = G({}, da, {
    newState: 0,
    oldState: 0,
    source: 0
  }), cS = St(fS), oS = [9, 13, 27, 32], oc = Gl && "CompositionEvent" in window, Xu = null;
  Gl && "documentMode" in document && (Xu = document.documentMode);
  var sS = Gl && "TextEvent" in window && !Xu, Nd = Gl && (!oc || Xu && 8 < Xu && 11 >= Xu), Bd = " ", Ud = !1;
  function Hd(e, t) {
    switch (e) {
      case "keyup":
        return oS.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function wd(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Nn = !1;
  function dS(e, t) {
    switch (e) {
      case "compositionend":
        return wd(t);
      case "keypress":
        return t.which !== 32 ? null : (Ud = !0, Bd);
      case "textInput":
        return e = t.data, e === Bd && Ud ? null : e;
      default:
        return null;
    }
  }
  function vS(e, t) {
    if (Nn)
      return e === "compositionend" || !oc && Hd(e, t) ? (e = Cd(), cr = uc = sa = null, Nn = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Nd && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var yS = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Ld(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!yS[e.type] : t === "textarea";
  }
  function qd(e, t, l, a) {
    Mn ? Dn ? Dn.push(a) : Dn = [a] : Mn = a, t = hf(t, "onChange"), 0 < t.length && (l = new dr(
      "onChange",
      "change",
      null,
      l,
      a
    ), e.push({ event: l, listeners: t }));
  }
  var Vu = null, Qu = null;
  function hS(e) {
    _y(e, 0);
  }
  function yr(e) {
    var t = ca(e);
    if (Bu(t)) return e;
  }
  function Yd(e, t) {
    if (e === "change") return t;
  }
  var jd = !1;
  if (Gl) {
    var sc;
    if (Gl) {
      var dc = "oninput" in document;
      if (!dc) {
        var Gd = document.createElement("div");
        Gd.setAttribute("oninput", "return;"), dc = typeof Gd.oninput == "function";
      }
      sc = dc;
    } else sc = !1;
    jd = sc && (!document.documentMode || 9 < document.documentMode);
  }
  function Xd() {
    Vu && (Vu.detachEvent("onpropertychange", Vd), Qu = Vu = null);
  }
  function Vd(e) {
    if (e.propertyName === "value" && yr(Qu)) {
      var t = [];
      qd(
        t,
        Qu,
        e,
        lc(e)
      ), Ad(hS, t);
    }
  }
  function mS(e, t, l) {
    e === "focusin" ? (Xd(), Vu = t, Qu = l, Vu.attachEvent("onpropertychange", Vd)) : e === "focusout" && Xd();
  }
  function gS(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return yr(Qu);
  }
  function SS(e, t) {
    if (e === "click") return yr(t);
  }
  function bS(e, t) {
    if (e === "input" || e === "change")
      return yr(t);
  }
  function ES(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Nt = typeof Object.is == "function" ? Object.is : ES;
  function Zu(e, t) {
    if (Nt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var l = Object.keys(e), a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!bn.call(t, n) || !Nt(e[n], t[n]))
        return !1;
    }
    return !0;
  }
  function vc(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Qd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Zd(e, t) {
    var l = Qd(e);
    e = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (a = e + l.textContent.length, e <= t && a >= t)
          return { node: l, offset: t - e };
        e = a;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Qd(l);
    }
  }
  function Kd(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Kd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Jd(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = vc(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = vc(e.document);
    }
    return t;
  }
  function yc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var pS = Gl && "documentMode" in document && 11 >= document.documentMode, Bn = null, hc = null, Ku = null, mc = !1;
  function kd(e, t, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    mc || Bn == null || Bn !== vc(a) || (a = Bn, "selectionStart" in a && yc(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Ku && Zu(Ku, a) || (Ku = a, a = hf(hc, "onSelect"), 0 < a.length && (t = new dr(
      "onSelect",
      "select",
      null,
      t,
      l
    ), e.push({ event: t, listeners: a }), t.target = Bn)));
  }
  function ka(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
  }
  var Un = {
    animationend: ka("Animation", "AnimationEnd"),
    animationiteration: ka("Animation", "AnimationIteration"),
    animationstart: ka("Animation", "AnimationStart"),
    transitionrun: ka("Transition", "TransitionRun"),
    transitionstart: ka("Transition", "TransitionStart"),
    transitioncancel: ka("Transition", "TransitionCancel"),
    transitionend: ka("Transition", "TransitionEnd")
  }, gc = {}, Wd = {};
  Gl && (Wd = document.createElement("div").style, "AnimationEvent" in window || (delete Un.animationend.animation, delete Un.animationiteration.animation, delete Un.animationstart.animation), "TransitionEvent" in window || delete Un.transitionend.transition);
  function Wa(e) {
    if (gc[e]) return gc[e];
    if (!Un[e]) return e;
    var t = Un[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in Wd)
        return gc[e] = t[l];
    return e;
  }
  var Pd = Wa("animationend"), $d = Wa("animationiteration"), Id = Wa("animationstart"), TS = Wa("transitionrun"), RS = Wa("transitionstart"), OS = Wa("transitioncancel"), Fd = Wa("transitionend"), ev = /* @__PURE__ */ new Map(), Sc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Sc.push("scrollEnd");
  function al(e, t) {
    ev.set(e, t), gl(t, [e]);
  }
  var _S = 0;
  function Xl(e, t) {
    if (e.name != null && e.name !== "auto") return e.name;
    if (t.autoName !== null) return t.autoName;
    e = rl.identifierPrefix;
    var l = _S++;
    return e = "_" + e + "t_" + l.toString(32) + "_", t.autoName = e;
  }
  function tv(e) {
    if (e == null || typeof e == "string")
      return e;
    var t = null, l = eu;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = e[l[a]];
        if (n != null) {
          if (n === "none") return "none";
          t = t == null ? n : t + (" " + n);
        }
      }
    return t ?? e.default;
  }
  function Vl(e, t) {
    return e = tv(e), t = tv(t), t == null ? e === "auto" ? null : e : t === "auto" ? null : t;
  }
  var hr = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, Kt = [], Hn = 0, bc = 0;
  function mr() {
    for (var e = Hn, t = bc = Hn = 0; t < e; ) {
      var l = Kt[t];
      Kt[t++] = null;
      var a = Kt[t];
      Kt[t++] = null;
      var n = Kt[t];
      Kt[t++] = null;
      var u = Kt[t];
      if (Kt[t++] = null, a !== null && n !== null) {
        var c = a.pending;
        c === null ? n.next = n : (n.next = c.next, c.next = n), a.pending = n;
      }
      u !== 0 && lv(l, n, u);
    }
  }
  function gr(e, t, l, a) {
    Kt[Hn++] = e, Kt[Hn++] = t, Kt[Hn++] = l, Kt[Hn++] = a, bc |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function Ec(e, t, l, a) {
    return gr(e, t, l, a), Sr(e);
  }
  function Pa(e, t) {
    return gr(e, null, null, t), Sr(e);
  }
  function lv(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = e.return; u !== null; )
      u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (n = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, n && t !== null && (n = 31 - mt(l), e = u.hiddenUpdates, a = e[n], a === null ? e[n] = [t] : a.push(t), t.lane = l | 536870912), u) : null;
  }
  function Sr(e) {
    if (50 < yi)
      throw yi = 0, ff = null, Error(r(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var wn = {};
  function AS(e, t, l, a) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ot(e, t, l, a) {
    return new AS(e, t, l, a);
  }
  function pc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Ql(e, t) {
    var l = e.alternate;
    return l === null ? (l = Ot(
      e.tag,
      t,
      e.key,
      e.mode
    ), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 1206910976, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
  }
  function av(e, t) {
    e.flags &= 1206910978;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function br(e, t, l, a, n, u) {
    var c = 0;
    if (a = e, typeof a == "function") pc(a) && (c = 1);
    else if (typeof a == "string")
      c = e1(
        e,
        l,
        Gt.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (a) {
        case je:
          return e = Ot(31, l, t, n), e.elementType = je, e.lanes = u, e;
        case Me:
          return $a(l.children, n, u, t);
        case He:
          c = 8, n |= 24;
          break;
        case _e:
          return e = Ot(12, l, t, n | 2), e.elementType = _e, e.lanes = u, e;
        case ee:
          return e = Ot(13, l, t, n), e.elementType = ee, e.lanes = u, e;
        case Q:
          return e = Ot(19, l, t, n), e.elementType = Q, e.lanes = u, e;
        case at:
        case S:
          return e = n | 32, e = Ot(30, l, t, e), e.elementType = S, e.lanes = u, e.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, e;
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case De:
                c = 10;
                break e;
              case Fe:
                c = 9;
                break e;
              case w:
                c = 11;
                break e;
              case he:
                c = 14;
                break e;
              case ce:
                c = 16, a = null;
                break e;
            }
          c = 29, l = Error(
            r(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return t = Ot(c, l, t, n), t.elementType = e, t.type = a, t.lanes = u, t;
  }
  function $a(e, t, l, a) {
    return e = Ot(7, e, a, t), e.lanes = l, e;
  }
  function Tc(e, t, l) {
    return e = Ot(6, e, null, t), e.lanes = l, e;
  }
  function nv(e) {
    var t = Ot(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Rc(e, t, l) {
    return t = Ot(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = l, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var uv = /* @__PURE__ */ new WeakMap();
  function Jt(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = uv.get(e);
      return l !== void 0 ? l : (t = {
        value: e,
        source: t,
        stack: Xi(t)
      }, uv.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Xi(t)
    };
  }
  var Ln = [], qn = 0, Er = null, Ju = 0, kt = [], Wt = 0, va = null, bl = 1, El = "";
  function Zl(e, t) {
    Ln[qn++] = Ju, Ln[qn++] = Er, Er = e, Ju = t;
  }
  function iv(e, t, l) {
    kt[Wt++] = bl, kt[Wt++] = El, kt[Wt++] = va, va = e;
    var a = bl;
    e = El;
    var n = 32 - mt(a) - 1;
    a &= ~(1 << n), l += 1;
    var u = 32 - mt(t) + n;
    if (30 < u) {
      var c = n - n % 5;
      u = (a & (1 << c) - 1).toString(32), a >>= c, n -= c, bl = 1 << 32 - mt(t) + n | l << n | a, El = u + e;
    } else
      bl = 1 << u | l << n | a, El = e;
  }
  function pr(e) {
    e.return !== null && (Zl(e, 1), iv(e, 1, 0));
  }
  function Oc(e) {
    for (; e === Er; )
      Er = Ln[--qn], Ln[qn] = null, Ju = Ln[--qn], Ln[qn] = null;
    for (; e === va; )
      va = kt[--Wt], kt[Wt] = null, El = kt[--Wt], kt[Wt] = null, bl = kt[--Wt], kt[Wt] = null;
  }
  function rv(e, t) {
    kt[Wt++] = bl, kt[Wt++] = El, kt[Wt++] = va, bl = t.id, El = t.overflow, va = e;
  }
  var et = null, we = null, se = !1, ya = null, Pt = !1, _c = Error(r(519));
  function ha(e) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw ku(Jt(t, e)), _c;
  }
  function fv(e) {
    var t = e.stateNode, l = e.type, a = e.memoizedProps;
    switch (t[Ke] = e, t[nt] = a, l) {
      case "dialog":
        ye("cancel", t), ye("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        ye("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < mi.length; l++)
          ye(mi[l], t);
        break;
      case "source":
        ye("error", t);
        break;
      case "img":
      case "image":
      case "link":
        ye("error", t), ye("load", t);
        break;
      case "details":
        ye("toggle", t);
        break;
      case "input":
        ye("invalid", t), Uu(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        ye("invalid", t);
        break;
      case "textarea":
        ye("invalid", t), wu(t, a.value, a.defaultValue, a.children);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === !0 || zy(t.textContent, l) ? (a.popover != null && (ye("beforetoggle", t), ye("toggle", t)), a.onScroll != null && ye("scroll", t), a.onScrollEnd != null && ye("scrollend", t), a.onClick != null && (t.onclick = Sl), t = !0) : t = !1, t || ha(e, !0);
  }
  function Tr(e) {
    for (et = e.return; et; )
      switch (et.tag) {
        case 5:
        case 31:
        case 13:
          Pt = !1;
          return;
        case 27:
        case 3:
          Pt = !0;
          return;
        default:
          et = et.return;
      }
  }
  function Yn(e) {
    if (e !== et) return !1;
    if (!se) return Tr(e), se = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || ls(e.type, e.memoizedProps)), l = !l), l && we && ha(e), Tr(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      we = ky(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      we = ky(e);
    } else
      t === 27 ? (t = we, Da(e.type) ? (e = ss, ss = null, we = e) : we = t) : we = et ? It(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ia() {
    we = et = null, se = !1;
  }
  function Ac() {
    var e = ya;
    return e !== null && (Ct === null ? Ct = e : Ct.push.apply(
      Ct,
      e
    ), ya = null), e;
  }
  function ku(e) {
    ya === null ? ya = [e] : ya.push(e);
  }
  var Cc = Dt(null), Fa = null, Kl = null;
  function ma(e, t, l) {
    Ae(Cc, t._currentValue), t._currentValue = l;
  }
  function Jl(e) {
    e._currentValue = Cc.current, $e(Cc);
  }
  function Rr(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === l) break;
      e = e.return;
    }
  }
  function xc(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var c = n.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var d = u;
          u = n;
          for (var y = 0; y < t.length; y++)
            if (d.context === t[y]) {
              u.lanes |= l, d = u.alternate, d !== null && (d.lanes |= l), Rr(
                u.return,
                l,
                e
              ), a || (c = null);
              break e;
            }
          u = d.next;
        }
      } else if (n.tag === 18) {
        if (c = n.return, c === null) throw Error(r(341));
        c.lanes |= l, u = c.alternate, u !== null && (u.lanes |= l), Rr(c, l, e), c = null;
      } else
        n.tag === 13 && n.memoizedState !== null && n.memoizedState.dehydrated === null ? (n.lanes |= l, c = n.alternate, c !== null && (c.lanes |= l), Rr(
          n.return,
          l,
          e
        ), c = n.child, c = c !== null ? c.sibling : null) : c = n.child;
      if (c !== null) c.return = n;
      else
        for (c = n; c !== null; ) {
          if (c === e) {
            c = null;
            break;
          }
          if (n = c.sibling, n !== null) {
            n.return = c.return, c = n;
            break;
          }
          c = c.return;
        }
      n = c;
    }
  }
  function en(e, t, l, a) {
    e = null;
    for (var n = t, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var c = n.alternate;
        if (c === null) throw Error(r(387));
        if (c = c.memoizedProps, c !== null) {
          var d = n.type;
          Nt(n.pendingProps.value, c.value) || (e !== null ? e.push(d) : e = [d]);
        }
      } else if (n === ja.current) {
        if (c = n.alternate, c === null) throw Error(r(387));
        c.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(ou) : e = [ou]);
      }
      n = n.return;
    }
    return e !== null && xc(
      t,
      e,
      l,
      a
    ), t.flags |= 262144, e !== null;
  }
  function Or(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Nt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function tn(e) {
    Fa = e, Kl = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function ut(e) {
    return cv(Fa, e);
  }
  function _r(e, t) {
    return Fa === null && tn(e), cv(e, t);
  }
  function cv(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, Kl === null) {
      if (e === null) throw Error(r(308));
      Kl = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Kl = Kl.next = t;
    return l;
  }
  var CS = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(l, a) {
        e.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(l) {
        return l();
      });
    };
  }, xS = i.unstable_scheduleCallback, zS = i.unstable_NormalPriority, Je = {
    $$typeof: De,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function zc() {
    return {
      controller: new CS(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Wu(e) {
    e.refCount--, e.refCount === 0 && xS(zS, function() {
      e.controller.abort();
    });
  }
  function ov(e, t) {
    if ((e.pendingLanes & 4194048) !== 0) {
      var l = e.transitionTypes;
      for (l === null && (l = e.transitionTypes = []), e = 0; e < t.length; e++) {
        var a = t[e];
        l.indexOf(a) === -1 && l.push(a);
      }
    }
  }
  var Pu = null;
  function MS(e) {
    var t = e.transitionTypes;
    return e.transitionTypes = null, t;
  }
  var $u = null, Mc = 0, ln = 0, jn = null;
  function DS(e, t) {
    if ($u === null) {
      var l = $u = [];
      Mc = 0, ln = Jo(), jn = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return Mc++, t.then(sv, sv), t;
  }
  function sv() {
    if (--Mc === 0 && (Pu = null, $u !== null)) {
      jn !== null && (jn.status = "fulfilled");
      var e = $u;
      $u = null, ln = 0, jn = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function NS(e, t) {
    var l = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        l.push(n);
      }
    };
    return e.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var n = 0; n < l.length; n++) (0, l[n])(t);
      },
      function(n) {
        for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
          (0, l[n])(void 0);
      }
    ), a;
  }
  var dv = P.S;
  P.S = function(e, t) {
    if (ny = yt(), typeof t == "object" && t !== null && typeof t.then == "function" && DS(e, t), Pu !== null)
      for (var l = nu; l !== null; )
        ov(l, Pu), l = l.next;
    if (l = e.types, l !== null) {
      for (var a = nu; a !== null; )
        ov(a, l), a = a.next;
      if (ln !== 0) {
        a = Pu, a === null && (a = Pu = []);
        for (var n = 0; n < l.length; n++) {
          var u = l[n];
          a.indexOf(u) === -1 && a.push(u);
        }
      }
    }
    dv !== null && dv(e, t);
  };
  var an = Dt(null);
  function Dc() {
    var e = an.current;
    return e !== null ? e : Be.pooledCache;
  }
  function Ar(e, t) {
    t === null ? Ae(an, an.current) : Ae(an, t.pool);
  }
  function vv() {
    var e = Dc();
    return e === null ? null : { parent: Je._currentValue, pool: e };
  }
  var Gn = Error(r(460)), Nc = Error(r(474)), Cr = Error(r(542)), xr = { then: function() {
  } };
  function yv(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function hv(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(Sl, Sl), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, gv(e), e === void 0 && !("reason" in t) ? Error(r(600)) : e;
      default:
        if (typeof t.status == "string") t.then(Sl, Sl);
        else {
          if (e = Be, e !== null && 100 < e.shellSuspendCounter)
            throw Error(r(482));
          e = t, e.status = "pending", e.then(
            function(a) {
              if (t.status === "pending") {
                var n = t;
                n.status = "fulfilled", n.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var n = t;
                n.status = "rejected", n.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, gv(e), e;
        }
        throw un = t, Gn;
    }
  }
  function nn(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (un = l, Gn) : l;
    }
  }
  var un = null;
  function mv() {
    if (un === null) throw Error(r(459));
    var e = un;
    return un = null, e;
  }
  function gv(e) {
    if (e === Gn || e === Cr)
      throw Error(r(483));
  }
  var Xn = null, Iu = 0;
  function zr(e) {
    var t = Iu;
    return Iu += 1, Xn === null && (Xn = []), hv(Xn, e, t);
  }
  function ga(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Mr(e, t) {
    throw t.$$typeof === k ? Error(r(525)) : (e = Object.prototype.toString.call(t), Error(
      r(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Sv(e) {
    function t(E, g) {
      if (e) {
        var R = E.deletions;
        R === null ? (E.deletions = [g], E.flags |= 16) : R.push(g);
      }
    }
    function l(E, g) {
      if (!e) return null;
      for (; g !== null; )
        t(E, g), g = g.sibling;
      return null;
    }
    function a(E) {
      for (var g = /* @__PURE__ */ new Map(); E !== null; )
        E.key === null ? g.set(E.index, E) : g.set(E.key, E), E = E.sibling;
      return g;
    }
    function n(E, g) {
      return E = Ql(E, g), E.index = 0, E.sibling = null, E;
    }
    function u(E, g, R) {
      return E.index = R, e ? (R = E.alternate, R !== null ? (R = R.index, R < g ? (E.flags |= 2, g) : R) : (E.flags |= 134217730, g)) : (E.flags |= 1048576, g);
    }
    function c(E) {
      return e && E.alternate === null && (E.flags |= 134217730), E;
    }
    function d(E, g, R, N) {
      return g === null || g.tag !== 6 ? (g = Tc(R, E.mode, N), g.return = E, g) : (g = n(g, R), g.return = E, g);
    }
    function y(E, g, R, N) {
      var X = R.type;
      return X === Me ? (E = C(
        E,
        g,
        R.props.children,
        N,
        R.key
      ), ga(E, R), E) : g !== null && (g.elementType === X || typeof X == "object" && X !== null && X.$$typeof === ce && nn(X) === g.type) ? (g = n(g, R.props), ga(g, R), g.return = E, g) : (g = br(
        R.type,
        R.key,
        R.props,
        null,
        E.mode,
        N
      ), ga(g, R), g.return = E, g);
    }
    function p(E, g, R, N) {
      return g === null || g.tag !== 4 || g.stateNode.containerInfo !== R.containerInfo || g.stateNode.implementation !== R.implementation ? (g = Rc(R, E.mode, N), g.return = E, g) : (g = n(g, R.children || []), g.return = E, g);
    }
    function C(E, g, R, N, X) {
      return g === null || g.tag !== 7 ? (g = $a(
        R,
        E.mode,
        N,
        X
      ), g.return = E, g) : (g = n(g, R), g.return = E, g);
    }
    function B(E, g, R) {
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint")
        return g = Tc(
          "" + g,
          E.mode,
          R
        ), g.return = E, g;
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case be:
            return R = br(
              g.type,
              g.key,
              g.props,
              null,
              E.mode,
              R
            ), ga(R, g), R.return = E, R;
          case de:
            return g = Rc(
              g,
              E.mode,
              R
            ), g.return = E, g;
          case ce:
            return g = nn(g), B(E, g, R);
        }
        if (pe(g) || W(g))
          return g = $a(
            g,
            E.mode,
            R,
            null
          ), g.return = E, g;
        if (typeof g.then == "function")
          return B(E, zr(g), R);
        if (g.$$typeof === De)
          return B(
            E,
            _r(E, g),
            R
          );
        Mr(E, g);
      }
      return null;
    }
    function b(E, g, R, N) {
      var X = g !== null ? g.key : null;
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return X !== null ? null : d(E, g, "" + R, N);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case be:
            return R.key === X ? y(E, g, R, N) : null;
          case de:
            return R.key === X ? p(E, g, R, N) : null;
          case ce:
            return R = nn(R), b(E, g, R, N);
        }
        if (pe(R) || W(R))
          return X !== null ? null : C(E, g, R, N, null);
        if (typeof R.then == "function")
          return b(
            E,
            g,
            zr(R),
            N
          );
        if (R.$$typeof === De)
          return b(
            E,
            g,
            _r(E, R),
            N
          );
        Mr(E, R);
      }
      return null;
    }
    function O(E, g, R, N, X) {
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
        return E = E.get(R) || null, d(g, E, "" + N, X);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case be:
            return E = E.get(
              N.key === null ? R : N.key
            ) || null, y(g, E, N, X);
          case de:
            return E = E.get(
              N.key === null ? R : N.key
            ) || null, p(g, E, N, X);
          case ce:
            return N = nn(N), O(
              E,
              g,
              R,
              N,
              X
            );
        }
        if (pe(N) || W(N))
          return E = E.get(R) || null, C(g, E, N, X, null);
        if (typeof N.then == "function")
          return O(
            E,
            g,
            R,
            zr(N),
            X
          );
        if (N.$$typeof === De)
          return O(
            E,
            g,
            R,
            _r(g, N),
            X
          );
        Mr(g, N);
      }
      return null;
    }
    function Y(E, g, R, N) {
      for (var X = null, ge = null, I = g, le = g = 0, Pe = null; I !== null && le < R.length; le++) {
        I.index > le ? (Pe = I, I = null) : Pe = I.sibling;
        var Te = b(
          E,
          I,
          R[le],
          N
        );
        if (Te === null) {
          I === null && (I = Pe);
          break;
        }
        e && I && Te.alternate === null && t(E, I), g = u(Te, g, le), ge === null ? X = Te : ge.sibling = Te, ge = Te, I = Pe;
      }
      if (le === R.length)
        return l(E, I), se && Zl(E, le), X;
      if (I === null) {
        for (; le < R.length; le++)
          I = B(E, R[le], N), I !== null && (g = u(
            I,
            g,
            le
          ), ge === null ? X = I : ge.sibling = I, ge = I);
        return se && Zl(E, le), X;
      }
      for (I = a(I); le < R.length; le++)
        Pe = O(
          I,
          E,
          le,
          R[le],
          N
        ), Pe !== null && (e && (Te = Pe.alternate, Te !== null && I.delete(Te.key === null ? le : Te.key)), g = u(
          Pe,
          g,
          le
        ), ge === null ? X = Pe : ge.sibling = Pe, ge = Pe);
      return e && I.forEach(function(wa) {
        return t(E, wa);
      }), se && Zl(E, le), X;
    }
    function K(E, g, R, N) {
      if (R == null) throw Error(r(151));
      for (var X = null, ge = null, I = g, le = g = 0, Pe = null, Te = R.next(); I !== null && !Te.done; le++, Te = R.next()) {
        I.index > le ? (Pe = I, I = null) : Pe = I.sibling;
        var wa = b(E, I, Te.value, N);
        if (wa === null) {
          I === null && (I = Pe);
          break;
        }
        e && I && wa.alternate === null && t(E, I), g = u(wa, g, le), ge === null ? X = wa : ge.sibling = wa, ge = wa, I = Pe;
      }
      if (Te.done)
        return l(E, I), se && Zl(E, le), X;
      if (I === null) {
        for (; !Te.done; le++, Te = R.next())
          Te = B(E, Te.value, N), Te !== null && (g = u(Te, g, le), ge === null ? X = Te : ge.sibling = Te, ge = Te);
        return se && Zl(E, le), X;
      }
      for (I = a(I); !Te.done; le++, Te = R.next())
        Te = O(I, E, le, Te.value, N), Te !== null && (e && (Pe = Te.alternate, Pe !== null && I.delete(
          Pe.key === null ? le : Pe.key
        )), g = u(Te, g, le), ge === null ? X = Te : ge.sibling = Te, ge = Te);
      return e && I.forEach(function(d1) {
        return t(E, d1);
      }), se && Zl(E, le), X;
    }
    function fe(E, g, R, N) {
      if (typeof R == "object" && R !== null && R.type === Me && R.key === null && R.props.ref === void 0 && (R = R.props.children), typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case be:
            e: {
              for (var X = R.key; g !== null; ) {
                if (g.key === X) {
                  if (X = R.type, X === Me) {
                    if (g.tag === 7) {
                      l(
                        E,
                        g.sibling
                      ), N = n(
                        g,
                        R.props.children
                      ), ga(N, R), N.return = E, E = N;
                      break e;
                    }
                  } else if (g.elementType === X || typeof X == "object" && X !== null && X.$$typeof === ce && nn(X) === g.type) {
                    l(
                      E,
                      g.sibling
                    ), N = n(g, R.props), ga(N, R), N.return = E, E = N;
                    break e;
                  }
                  l(E, g);
                  break;
                } else t(E, g);
                g = g.sibling;
              }
              R.type === Me ? (N = $a(
                R.props.children,
                E.mode,
                N,
                R.key
              ), ga(N, R), N.return = E, E = N) : (N = br(
                R.type,
                R.key,
                R.props,
                null,
                E.mode,
                N
              ), ga(N, R), N.return = E, E = N);
            }
            return c(E);
          case de:
            e: {
              for (X = R.key; g !== null; ) {
                if (g.key === X)
                  if (g.tag === 4 && g.stateNode.containerInfo === R.containerInfo && g.stateNode.implementation === R.implementation) {
                    l(
                      E,
                      g.sibling
                    ), N = n(g, R.children || []), N.return = E, E = N;
                    break e;
                  } else {
                    l(E, g);
                    break;
                  }
                else t(E, g);
                g = g.sibling;
              }
              N = Rc(R, E.mode, N), N.return = E, E = N;
            }
            return c(E);
          case ce:
            return R = nn(R), fe(
              E,
              g,
              R,
              N
            );
        }
        if (pe(R))
          return Y(
            E,
            g,
            R,
            N
          );
        if (W(R)) {
          if (X = W(R), typeof X != "function") throw Error(r(150));
          return R = X.call(R), K(
            E,
            g,
            R,
            N
          );
        }
        if (typeof R.then == "function")
          return fe(
            E,
            g,
            zr(R),
            N
          );
        if (R.$$typeof === De)
          return fe(
            E,
            g,
            _r(E, R),
            N
          );
        Mr(E, R);
      }
      return typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint" ? (R = "" + R, g !== null && g.tag === 6 ? (l(E, g.sibling), N = n(g, R), N.return = E, E = N) : (l(E, g), N = Tc(R, E.mode, N), N.return = E, E = N), c(E)) : l(E, g);
    }
    return function(E, g, R, N) {
      try {
        Iu = 0;
        var X = fe(
          E,
          g,
          R,
          N
        );
        return Xn = null, X;
      } catch (I) {
        if (I === Gn || I === Cr) throw I;
        var ge = Ot(29, I, null, E.mode);
        return ge.lanes = N, ge.return = E, ge;
      }
    };
  }
  var rn = Sv(!0), bv = Sv(!1), Sa = !1;
  function Bc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Uc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function ba(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Ea(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (Re & 2) !== 0) {
      var n = a.pending;
      return n === null ? t.next = t : (t.next = n.next, n.next = t), a.pending = t, t = Sr(e), lv(e, null, l), t;
    }
    return gr(e, a, t, l), Sr(e);
  }
  function Fu(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, Vt(e, l);
    }
  }
  function Hc(e, t) {
    var l = e.updateQueue, a = e.alternate;
    if (a !== null && (a = a.updateQueue, l === a)) {
      var n = null, u = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var c = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          u === null ? n = u = c : u = u.next = c, l = l.next;
        } while (l !== null);
        u === null ? n = u = t : u = u.next = t;
      } else n = u = t;
      l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, e.updateQueue = l;
      return;
    }
    e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t;
  }
  var wc = !1;
  function ei() {
    if (wc) {
      var e = jn;
      if (e !== null) throw e;
    }
  }
  function ti(e, t, l, a) {
    wc = !1;
    var n = e.updateQueue;
    Sa = !1;
    var u = n.firstBaseUpdate, c = n.lastBaseUpdate, d = n.shared.pending;
    if (d !== null) {
      n.shared.pending = null;
      var y = d, p = y.next;
      y.next = null, c === null ? u = p : c.next = p, c = y;
      var C = e.alternate;
      C !== null && (C = C.updateQueue, d = C.lastBaseUpdate, d !== c && (d === null ? C.firstBaseUpdate = p : d.next = p, C.lastBaseUpdate = y));
    }
    if (u !== null) {
      var B = n.baseState;
      c = 0, C = p = y = null, d = u;
      do {
        var b = d.lane & -536870913, O = b !== d.lane;
        if (O ? (me & b) === b : (a & b) === b) {
          b !== 0 && b === ln && (wc = !0), C !== null && (C = C.next = {
            lane: 0,
            tag: d.tag,
            payload: d.payload,
            callback: null,
            next: null
          });
          e: {
            var Y = e, K = d;
            b = t;
            var fe = l;
            switch (K.tag) {
              case 1:
                if (Y = K.payload, typeof Y == "function") {
                  B = Y.call(fe, B, b);
                  break e;
                }
                B = Y;
                break e;
              case 3:
                Y.flags = Y.flags & -65537 | 128;
              case 0:
                if (Y = K.payload, b = typeof Y == "function" ? Y.call(fe, B, b) : Y, b == null) break e;
                B = G({}, B, b);
                break e;
              case 2:
                Sa = !0;
            }
          }
          b = d.callback, b !== null && (e.flags |= 64, O && (e.flags |= 8192), O = n.callbacks, O === null ? n.callbacks = [b] : O.push(b));
        } else
          O = {
            lane: b,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null
          }, C === null ? (p = C = O, y = B) : C = C.next = O, c |= b;
        if (d = d.next, d === null) {
          if (d = n.shared.pending, d === null)
            break;
          O = d, d = O.next, O.next = null, n.lastBaseUpdate = O, n.shared.pending = null;
        }
      } while (!0);
      C === null && (y = B), n.baseState = y, n.firstBaseUpdate = p, n.lastBaseUpdate = C, u === null && (n.shared.lanes = 0), Ca |= c, e.lanes = c, e.memoizedState = B;
    }
  }
  function Ev(e, t) {
    if (typeof e != "function")
      throw Error(r(191, e));
    e.call(t);
  }
  function pv(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        Ev(l[e], t);
  }
  var pa = Dt(null), Dr = Dt(0);
  function Tv(e, t) {
    e = Il, Ae(Dr, e), Ae(pa, t), Il = e | t.baseLanes;
  }
  function Lc() {
    Ae(Dr, Il), Ae(pa, pa.current);
  }
  function qc() {
    Il = Dr.current, $e(pa), $e(Dr);
  }
  var it = Dt(null), dt = null;
  function Ta(e) {
    var t = e.alternate;
    Ae(rt, rt.current & 1), Ae(it, e), dt === null && (t === null || pa.current !== null || t.memoizedState !== null) && (dt = e);
  }
  function Yc(e) {
    Ae(rt, rt.current), Ae(it, e), dt === null && (dt = e);
  }
  function Rv(e) {
    e.tag === 22 ? (Ae(rt, rt.current), Ae(it, e), dt === null && (dt = e)) : Ra();
  }
  function Ra() {
    Ae(rt, rt.current), Ae(it, it.current);
  }
  function Bt(e) {
    $e(it), dt === e && (dt = null), $e(rt);
  }
  var rt = Dt(0);
  function li(e, t) {
    Ae(it, it.current), Ae(rt, t);
  }
  function jc(e) {
    $e(rt), $e(it), dt === e && (dt = null);
  }
  function Nr(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || cs(l) || os(l)))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== "independent") {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var kl = 0, re = null, Ne = null, ke = null, Br = !1, Vn = !1, fn = !1, Ur = 0, ai = 0, Qn = null, BS = 0;
  function Ge() {
    throw Error(r(321));
  }
  function Gc(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!Nt(e[l], t[l])) return !1;
    return !0;
  }
  function Xc(e, t, l, a, n, u) {
    return kl = u, re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, P.H = e === null || e.memoizedState === null ? i0 : r0, fn = !1, u = l(a, n), fn = !1, Vn && (u = _v(
      t,
      l,
      a,
      n
    )), Ov(e), u;
  }
  function Ov(e) {
    P.H = Gr;
    var t = Ne !== null && Ne.next !== null;
    if (kl = 0, ke = Ne = re = null, Br = !1, ai = 0, Qn = null, t) throw Error(r(300));
    e === null || We || (e = e.dependencies, e !== null && Or(e) && (We = !0));
  }
  function _v(e, t, l, a) {
    re = e;
    var n = 0;
    do {
      if (Vn && (Qn = null), ai = 0, Vn = !1, 25 <= n) throw Error(r(301));
      if (n += 1, ke = Ne = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      P.H = GS, u = t(l, a);
    } while (Vn);
    return u;
  }
  function US() {
    var e = P.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? ni(t) : t, e = e.useState()[0], (Ne !== null ? Ne.memoizedState : null) !== e && (re.flags |= 1024), t;
  }
  function Vc() {
    var e = Ur !== 0;
    return Ur = 0, e;
  }
  function Qc(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function Zc(e) {
    if (Br) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Br = !1;
    }
    kl = 0, ke = Ne = re = null, Vn = !1, ai = Ur = 0, Qn = null;
  }
  function bt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ke === null ? re.memoizedState = ke = e : ke = ke.next = e, ke;
  }
  function Ze() {
    if (Ne === null) {
      var e = re.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ne.next;
    var t = ke === null ? re.memoizedState : ke.next;
    if (t !== null)
      ke = t, Ne = e;
    else {
      if (e === null)
        throw re.alternate === null ? Error(r(467)) : Error(r(310));
      Ne = e, e = {
        memoizedState: Ne.memoizedState,
        baseState: Ne.baseState,
        baseQueue: Ne.baseQueue,
        queue: Ne.queue,
        next: null
      }, ke === null ? re.memoizedState = ke = e : ke = ke.next = e;
    }
    return ke;
  }
  function Hr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ni(e) {
    var t = ai;
    return ai += 1, Qn === null && (Qn = []), e = hv(Qn, e, t), t = re, (ke === null ? t.memoizedState : ke.next) === null && (t = t.alternate, P.H = t === null || t.memoizedState === null ? i0 : r0), e;
  }
  function wr(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ni(e);
      if (e.$$typeof === U) return;
      if (e.$$typeof === De) return ut(e);
    }
    throw Error(r(438, String(e)));
  }
  function Kc(e) {
    var t = null, l = re.updateQueue;
    if (l !== null && (t = l.memoCache), t == null) {
      var a = re.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = Hr(), re.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++)
        l[a] = Mt;
    return t.index++, l;
  }
  function Wl(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Lr(e) {
    var t = Ze();
    return Jc(t, Ne, e);
  }
  function Jc(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = l;
    var n = e.baseQueue, u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var c = n.next;
        n.next = u.next, u.next = c;
      }
      t.baseQueue = n = u, a.pending = null;
    }
    if (u = e.baseState, n === null) e.memoizedState = u;
    else {
      t = n.next;
      var d = c = null, y = null, p = t, C = !1;
      do {
        var B = p.lane & -536870913;
        if (B !== p.lane ? (me & B) === B : (kl & B) === B) {
          var b = p.revertLane;
          if (b === 0)
            y !== null && (y = y.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }), B === ln && (C = !0);
          else if ((kl & b) === b) {
            p = p.next, b === ln && (C = !0);
            continue;
          } else
            B = {
              lane: 0,
              revertLane: p.revertLane,
              gesture: null,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, y === null ? (d = y = B, c = u) : y = y.next = B, re.lanes |= b, Ca |= b;
          B = p.action, fn && l(u, B), u = p.hasEagerState ? p.eagerState : l(u, B);
        } else
          b = {
            lane: B,
            revertLane: p.revertLane,
            gesture: p.gesture,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null
          }, y === null ? (d = y = b, c = u) : y = y.next = b, re.lanes |= B, Ca |= B;
        p = p.next;
      } while (p !== null && p !== t);
      if (y === null ? c = u : y.next = d, !Nt(u, e.memoizedState) && (We = !0, C && (l = jn, l !== null)))
        throw l;
      e.memoizedState = u, e.baseState = c, e.baseQueue = y, a.lastRenderedState = u;
    }
    return n === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function kc(e) {
    var t = Ze(), l = t.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch, n = l.pending, u = t.memoizedState;
    if (n !== null) {
      l.pending = null;
      var c = n = n.next;
      do
        u = e(u, c.action), c = c.next;
      while (c !== n);
      Nt(u, t.memoizedState) || (We = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), l.lastRenderedState = u;
    }
    return [u, a];
  }
  function Av(e, t, l) {
    var a = re, n = Ze(), u = se;
    if (u) {
      if (l === void 0) throw Error(r(407));
      l = l();
    } else l = t();
    var c = !Nt(
      (Ne || n).memoizedState,
      l
    );
    if (c && (n.memoizedState = l, We = !0), n = n.queue, $c(zv.bind(null, a, n, e), [
      e
    ]), e = n.getSnapshot !== t || c || ke !== null && (ke.memoizedState.tag & 1) !== 0, Zn(
      e ? 9 : 8,
      { destroy: void 0 },
      xv.bind(null, a, n, l, t),
      null
    ), e) {
      if (a.flags |= 2048, Be === null) throw Error(r(349));
      u || (kl & 127) !== 0 || Cv(a, t, l);
    }
    return l;
  }
  function Cv(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = re.updateQueue, t === null ? (t = Hr(), re.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function xv(e, t, l, a) {
    t.value = l, t.getSnapshot = a, Mv(t) && Dv(e);
  }
  function zv(e, t, l) {
    return l(function() {
      Mv(t) && Dv(e);
    });
  }
  function Mv(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !Nt(e, l);
    } catch {
      return !0;
    }
  }
  function Dv(e) {
    var t = Pa(e, 2);
    t !== null && xt(t, e, 2);
  }
  function Wc(e) {
    var t = bt();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), fn) {
        ll(!0);
        try {
          l();
        } finally {
          ll(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Wl,
      lastRenderedState: e
    }, t;
  }
  function Nv(e, t, l, a) {
    return e.baseState = l, Jc(
      e,
      Ne,
      typeof a == "function" ? a : Wl
    );
  }
  function HS(e, t, l, a, n) {
    if (jr(e)) throw Error(r(485));
    if (e = t.action, e !== null) {
      var u = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(c) {
          u.listeners.push(c);
        }
      };
      P.T !== null ? l(!0) : u.isTransition = !1, a(u), l = t.pending, l === null ? (u.next = t.pending = u, Bv(t, u)) : (u.next = l.next, t.pending = l.next = u);
    }
  }
  function Bv(e, t) {
    var l = t.action, a = t.payload, n = e.state;
    if (t.isTransition) {
      var u = P.T, c = {};
      c.types = u !== null ? u.types : null, P.T = c;
      try {
        var d = l(n, a), y = P.S;
        y !== null && y(c, d), Uv(e, t, d);
      } catch (p) {
        Pc(e, t, p);
      } finally {
        u !== null && c.types !== null && (u.types = c.types), P.T = u;
      }
    } else
      try {
        u = l(n, a), Uv(e, t, u);
      } catch (p) {
        Pc(e, t, p);
      }
  }
  function Uv(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(a) {
        Hv(e, t, a);
      },
      function(a) {
        return Pc(e, t, a);
      }
    ) : Hv(e, t, l);
  }
  function Hv(e, t, l) {
    t.status = "fulfilled", t.value = l, wv(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, Bv(e, l)));
  }
  function Pc(e, t, l) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = l, wv(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function wv(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Lv(e, t) {
    return t;
  }
  function qv(e, t) {
    if (se) {
      var l = Be.formState;
      if (l !== null) {
        e: {
          var a = re;
          if (se) {
            if (we) {
              t: {
                for (var n = we, u = Pt; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (n = It(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break t;
                  }
                }
                u = n.data, n = u === "F!" || u === "F" ? n : null;
              }
              if (n) {
                we = It(
                  n.nextSibling
                ), a = n.data === "F!";
                break e;
              }
            }
            ha(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return l = bt(), l.memoizedState = l.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Lv,
      lastRenderedState: t
    }, l.queue = a, l = a0.bind(
      null,
      re,
      a
    ), a.dispatch = l, a = Wc(!1), u = lo.bind(
      null,
      re,
      !1,
      a.queue
    ), a = bt(), n = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = n, l = HS.bind(
      null,
      re,
      n,
      u,
      l
    ), n.dispatch = l, a.memoizedState = e, [t, l, !1];
  }
  function Yv(e) {
    var t = Ze();
    return jv(t, Ne, e);
  }
  function jv(e, t, l) {
    if (t = Jc(
      e,
      t,
      Lv
    )[0], e = Lr(Wl)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = ni(t);
      } catch (c) {
        throw c === Gn ? Cr : c;
      }
    else a = t;
    t = Ze();
    var n = t.queue, u = n.dispatch;
    return l !== t.memoizedState && (re.flags |= 2048, Zn(
      9,
      { destroy: void 0 },
      wS.bind(null, n, l),
      null
    )), [a, u, e];
  }
  function wS(e, t) {
    e.action = t;
  }
  function Gv(e) {
    var t = Ze(), l = Ne;
    if (l !== null)
      return jv(t, l, e);
    Ze(), t = t.memoizedState, l = Ze();
    var a = l.queue.dispatch;
    return l.memoizedState = e, [t, a, !1];
  }
  function Zn(e, t, l, a) {
    return e = { tag: e, create: l, deps: a, inst: t, next: null }, t = re.updateQueue, t === null && (t = Hr(), re.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (a = l.next, l.next = e, e.next = a, t.lastEffect = e), e;
  }
  function Xv() {
    return Ze().memoizedState;
  }
  function qr(e, t, l, a) {
    var n = bt();
    re.flags |= e, n.memoizedState = Zn(
      1 | t,
      { destroy: void 0 },
      l,
      a === void 0 ? null : a
    );
  }
  function Yr(e, t, l, a) {
    var n = Ze();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    Ne !== null && a !== null && Gc(a, Ne.memoizedState.deps) ? n.memoizedState = Zn(t, u, l, a) : (re.flags |= e, n.memoizedState = Zn(
      1 | t,
      u,
      l,
      a
    ));
  }
  function Vv(e, t) {
    qr(8390656, 8, e, t);
  }
  function $c(e, t) {
    Yr(2048, 8, e, t);
  }
  function LS(e) {
    re.flags |= 4;
    var t = re.updateQueue;
    if (t === null)
      t = Hr(), re.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e);
    }
  }
  function Qv(e) {
    var t = Ze().memoizedState;
    return LS({ ref: t, nextImpl: e }), function() {
      if ((Re & 2) !== 0) throw Error(r(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Zv(e, t) {
    return Yr(4, 2, e, t);
  }
  function Kv(e, t) {
    return Yr(4, 4, e, t);
  }
  function Jv(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function() {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function kv(e, t, l) {
    l = l != null ? l.concat([e]) : null, Yr(4, 4, Jv.bind(null, t, e), l);
  }
  function Ic() {
  }
  function Wv(e, t) {
    var l = Ze();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && Gc(t, a[1]) ? a[0] : (l.memoizedState = [e, t], e);
  }
  function Pv(e, t) {
    var l = Ze();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && Gc(t, a[1]))
      return a[0];
    if (a = e(), fn) {
      ll(!0);
      try {
        e();
      } finally {
        ll(!1);
      }
    }
    return l.memoizedState = [a, t], a;
  }
  function Fc(e, t, l) {
    return l === void 0 || (kl & 1073741824) !== 0 && (me & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = iy(), re.lanes |= e, Ca |= e, l);
  }
  function $v(e, t, l, a) {
    return Nt(l, t) ? l : pa.current !== null ? (e = Fc(e, l, a), Nt(e, t) || (We = !0), e) : (kl & 106) === 0 || (kl & 1073741824) !== 0 && (me & 261930) === 0 ? (We = !0, e.memoizedState = l) : (e = iy(), re.lanes |= e, Ca |= e, t);
  }
  function Iv(e, t, l, a, n) {
    var u = ae.p;
    ae.p = u !== 0 && 8 > u ? u : 8;
    var c = P.T, d = {};
    d.types = c !== null ? c.types : null, P.T = d, lo(e, !1, t, l);
    try {
      var y = n(), p = P.S;
      if (p !== null && p(d, y), y !== null && typeof y == "object" && typeof y.then == "function") {
        var C = NS(
          y,
          a
        );
        ui(
          e,
          t,
          C,
          Lt(e)
        );
      } else
        ui(
          e,
          t,
          a,
          Lt(e)
        );
    } catch (B) {
      ui(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: B },
        Lt()
      );
    } finally {
      ae.p = u, c !== null && d.types !== null && (c.types = d.types), P.T = c;
    }
  }
  function qS() {
  }
  function eo(e, t, l, a) {
    if (e.tag !== 5) throw Error(r(476));
    var n = Fv(e).queue;
    Iv(
      e,
      n,
      t,
      tl,
      l === null ? qS : function() {
        return e0(e), l(a);
      }
    );
  }
  function Fv(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: tl,
      baseState: tl,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Wl,
        lastRenderedState: tl
      },
      next: null
    };
    var l = {};
    return t.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Wl,
        lastRenderedState: l
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function e0(e) {
    var t = Fv(e);
    t.next === null && (t = e.alternate.memoizedState), ui(
      e,
      t.next.queue,
      {},
      Lt()
    );
  }
  function to() {
    return ut(ou);
  }
  function t0() {
    return Ze().memoizedState;
  }
  function l0() {
    return Ze().memoizedState;
  }
  function YS(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Lt();
          e = ba(l);
          var a = Ea(t, e, l);
          a !== null && (xt(a, t, l), Fu(a, t, l)), t = { cache: zc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function jS(e, t, l) {
    var a = Lt();
    l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, jr(e) ? n0(t, l) : (l = Ec(e, t, l, a), l !== null && (xt(l, e, a), u0(l, t, a)));
  }
  function a0(e, t, l) {
    var a = Lt();
    ui(e, t, l, a);
  }
  function ui(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (jr(e)) n0(t, n);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var c = t.lastRenderedState, d = u(c, l);
          if (n.hasEagerState = !0, n.eagerState = d, Nt(d, c))
            return gr(e, t, n, 0), Be === null && mr(), !1;
        } catch {
        }
      if (l = Ec(e, t, n, a), l !== null)
        return xt(l, e, a), u0(l, t, a), !0;
    }
    return !1;
  }
  function lo(e, t, l, a) {
    if (a = {
      lane: 2,
      revertLane: Jo(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, jr(e)) {
      if (t) throw Error(r(479));
    } else
      t = Ec(
        e,
        l,
        a,
        2
      ), t !== null && xt(t, e, 2);
  }
  function jr(e) {
    var t = e.alternate;
    return e === re || t !== null && t === re;
  }
  function n0(e, t) {
    Vn = Br = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function u0(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, Vt(e, l);
    }
  }
  var Gr = {
    readContext: ut,
    use: wr,
    useCallback: Ge,
    useContext: Ge,
    useEffect: Ge,
    useImperativeHandle: Ge,
    useLayoutEffect: Ge,
    useInsertionEffect: Ge,
    useMemo: Ge,
    useReducer: Ge,
    useRef: Ge,
    useState: Ge,
    useDebugValue: Ge,
    useDeferredValue: Ge,
    useTransition: Ge,
    useSyncExternalStore: Ge,
    useId: Ge,
    useHostTransitionStatus: Ge,
    useFormState: Ge,
    useActionState: Ge,
    useOptimistic: Ge,
    useMemoCache: Ge,
    useCacheRefresh: Ge,
    useEffectEvent: Ge
  }, i0 = {
    readContext: ut,
    use: wr,
    useCallback: function(e, t) {
      return bt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: ut,
    useEffect: Vv,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, qr(
        4194308,
        4,
        Jv.bind(null, t, e),
        l
      );
    },
    useLayoutEffect: function(e, t) {
      return qr(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      qr(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var l = bt();
      t = t === void 0 ? null : t;
      var a = e();
      if (fn) {
        ll(!0);
        try {
          e();
        } finally {
          ll(!1);
        }
      }
      return l.memoizedState = [a, t], a;
    },
    useReducer: function(e, t, l) {
      var a = bt();
      if (l !== void 0) {
        var n = l(t);
        if (fn) {
          ll(!0);
          try {
            l(t);
          } finally {
            ll(!1);
          }
        }
      } else n = t;
      return a.memoizedState = a.baseState = n, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: n
      }, a.queue = e, e = e.dispatch = jS.bind(
        null,
        re,
        e
      ), [a.memoizedState, e];
    },
    useRef: function(e) {
      var t = bt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Wc(e);
      var t = e.queue, l = a0.bind(null, re, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: Ic,
    useDeferredValue: function(e, t) {
      var l = bt();
      return Fc(l, e, t);
    },
    useTransition: function() {
      var e = Wc(!1);
      return e = Iv.bind(
        null,
        re,
        e.queue,
        !0,
        !1
      ), bt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, l) {
      var a = re, n = bt();
      if (se) {
        if (l === void 0)
          throw Error(r(407));
        l = l();
      } else {
        if (l = t(), Be === null)
          throw Error(r(349));
        (me & 127) !== 0 || Cv(a, t, l);
      }
      n.memoizedState = l;
      var u = { value: l, getSnapshot: t };
      return n.queue = u, Vv(zv.bind(null, a, u, e), [
        e
      ]), a.flags |= 2048, Zn(
        9,
        { destroy: void 0 },
        xv.bind(
          null,
          a,
          u,
          l,
          t
        ),
        null
      ), l;
    },
    useId: function() {
      var e = bt(), t = Be.identifierPrefix;
      if (se) {
        var l = El, a = bl;
        l = (a & ~(1 << 32 - mt(a) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = Ur++, 0 < l && (t += "H" + l.toString(32)), t += "_";
      } else
        l = BS++, t = "_" + t + "r_" + l.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: to,
    useFormState: qv,
    useActionState: qv,
    useOptimistic: function(e) {
      var t = bt();
      t.memoizedState = t.baseState = e;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = l, t = lo.bind(
        null,
        re,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: Kc,
    useCacheRefresh: function() {
      return bt().memoizedState = YS.bind(
        null,
        re
      );
    },
    useEffectEvent: function(e) {
      var t = bt(), l = { impl: e };
      return t.memoizedState = l, function() {
        if ((Re & 2) !== 0)
          throw Error(r(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, r0 = {
    readContext: ut,
    use: wr,
    useCallback: Wv,
    useContext: ut,
    useEffect: $c,
    useImperativeHandle: kv,
    useInsertionEffect: Zv,
    useLayoutEffect: Kv,
    useMemo: Pv,
    useReducer: Lr,
    useRef: Xv,
    useState: function() {
      return Lr(Wl);
    },
    useDebugValue: Ic,
    useDeferredValue: function(e, t) {
      var l = Ze();
      return $v(
        l,
        Ne.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Lr(Wl)[0], t = Ze().memoizedState;
      return [
        typeof e == "boolean" ? e : ni(e),
        t
      ];
    },
    useSyncExternalStore: Av,
    useId: t0,
    useHostTransitionStatus: to,
    useFormState: Yv,
    useActionState: Yv,
    useOptimistic: function(e, t) {
      var l = Ze();
      return Nv(l, Ne, e, t);
    },
    useMemoCache: Kc,
    useCacheRefresh: l0,
    useEffectEvent: Qv
  }, GS = {
    readContext: ut,
    use: wr,
    useCallback: Wv,
    useContext: ut,
    useEffect: $c,
    useImperativeHandle: kv,
    useInsertionEffect: Zv,
    useLayoutEffect: Kv,
    useMemo: Pv,
    useReducer: kc,
    useRef: Xv,
    useState: function() {
      return kc(Wl);
    },
    useDebugValue: Ic,
    useDeferredValue: function(e, t) {
      var l = Ze();
      return Ne === null ? Fc(l, e, t) : $v(
        l,
        Ne.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = kc(Wl)[0], t = Ze().memoizedState;
      return [
        typeof e == "boolean" ? e : ni(e),
        t
      ];
    },
    useSyncExternalStore: Av,
    useId: t0,
    useHostTransitionStatus: to,
    useFormState: Gv,
    useActionState: Gv,
    useOptimistic: function(e, t) {
      var l = Ze();
      return Ne !== null ? Nv(l, Ne, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: Kc,
    useCacheRefresh: l0,
    useEffectEvent: Qv
  };
  function ao(e, t, l, a) {
    t = e.memoizedState, l = l(a, t), l = l == null ? t : G({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var no = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var a = Lt(), n = ba(a);
      n.payload = t, l != null && (n.callback = l), t = Ea(e, n, a), t !== null && (xt(t, e, a), Fu(t, e, a));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var a = Lt(), n = ba(a);
      n.tag = 1, n.payload = t, l != null && (n.callback = l), t = Ea(e, n, a), t !== null && (xt(t, e, a), Fu(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = Lt(), a = ba(l);
      a.tag = 2, t != null && (a.callback = t), t = Ea(e, a, l), t !== null && (xt(t, e, l), Fu(t, e, l));
    }
  };
  function f0(e, t, l, a, n, u, c) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, u, c) : t.prototype && t.prototype.isPureReactComponent ? !Zu(l, a) || !Zu(n, u) : !0;
  }
  function c0(e, t, l, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, a), t.state !== e && no.enqueueReplaceState(t, t.state, null);
  }
  function cn(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var a in t)
        a !== "ref" && (l[a] = t[a]);
    }
    if (e = e.defaultProps) {
      l === t && (l = G({}, l));
      for (var n in e)
        l[n] === void 0 && (l[n] = e[n]);
    }
    return l;
  }
  function o0(e) {
    hr(e);
  }
  function s0(e) {
    console.error(e);
  }
  function d0(e) {
    hr(e);
  }
  function Xr(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function v0(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function uo(e, t, l) {
    return l = ba(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Xr(e, t);
    }, l;
  }
  function y0(e) {
    return e = ba(e), e.tag = 3, e;
  }
  function h0(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      e.payload = function() {
        return n(u);
      }, e.callback = function() {
        v0(t, l, a);
      };
    }
    var c = l.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (e.callback = function() {
      v0(t, l, a), typeof n != "function" && (xa === null ? xa = /* @__PURE__ */ new Set([this]) : xa.add(this));
      var d = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: d !== null ? d : ""
      });
    });
  }
  function XS(e, t, l, a, n) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = l.alternate, t !== null && en(
        t,
        l,
        n,
        !0
      ), l = it.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
          case 19:
            return dt === null ? of() : l.alternate === null && Xe === 0 && (Xe = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === xr ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Qo(e, a, n)), !1;
          case 22:
            return l.flags |= 65536, a === xr ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : l.add(a)), Qo(e, a, n)), !1;
        }
        throw Error(r(435, l.tag));
      }
      return Qo(e, a, n), of(), !1;
    }
    if (se)
      return t = it.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, a !== _c && (e = Error(r(422), { cause: a }), ku(Jt(e, l)))) : (a !== _c && (t = Error(r(423), {
        cause: a
      }), ku(
        Jt(t, l)
      )), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, a = Jt(a, l), n = uo(
        e.stateNode,
        a,
        n
      ), Hc(e, n), Xe !== 4 && (Xe = 2)), !1;
    var u = Error(r(520), { cause: a });
    if (u = Jt(u, l), vi === null ? vi = [u] : vi.push(u), Xe !== 4 && (Xe = 2), t === null) return !0;
    a = Jt(a, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = n & -n, l.lanes |= e, e = uo(l.stateNode, a, e), Hc(l, e), !1;
        case 1:
          if (t = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (xa === null || !xa.has(u))))
            return l.flags |= 65536, n &= -n, l.lanes |= n, n = y0(n), h0(
              n,
              e,
              l,
              a
            ), Hc(l, n), !1;
          break;
        case 22:
          if (l.memoizedState !== null)
            return l.flags |= 65536, !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var io = Error(r(461)), We = !1;
  function Ie(e, t, l, a) {
    t.child = e === null ? bv(t, null, l, a) : rn(
      t,
      e.child,
      l,
      a
    );
  }
  function m0(e, t, l, a, n) {
    l = l.render;
    var u = t.ref;
    if ("ref" in a) {
      var c = {};
      for (var d in a)
        d !== "ref" && (c[d] = a[d]);
    } else c = a;
    return tn(t), a = Xc(
      e,
      t,
      l,
      c,
      u,
      n
    ), d = Vc(), e !== null && !We ? (Qc(e, t, n), Pl(e, t, n)) : (se && d && pr(t), t.flags |= 1, Ie(e, t, a, n), t.child);
  }
  function g0(e, t, l, a, n) {
    if (e === null) {
      var u = l.type;
      return typeof u == "function" && !pc(u) && u.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = u, S0(
        e,
        t,
        u,
        a,
        n
      )) : (e = br(
        l.type,
        null,
        a,
        t,
        t.mode,
        n
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !ho(e, n)) {
      var c = u.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Zu, l(c, a) && e.ref === t.ref)
        return Pl(e, t, n);
    }
    return t.flags |= 1, e = Ql(u, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function S0(e, t, l, a, n) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Zu(u, a) && e.ref === t.ref)
        if (We = !1, t.pendingProps = a = u, ho(e, n))
          (e.flags & 131072) !== 0 && (We = !0);
        else
          return t.lanes = e.lanes, Pl(e, t, n);
    }
    return ro(
      e,
      t,
      l,
      a,
      n
    );
  }
  function b0(e, t, l, a) {
    var n = a.children, u = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | l : l, e !== null) {
          for (a = t.child = e.child, n = 0; a !== null; )
            n = n | a.lanes | a.childLanes, a = a.sibling;
          a = n & ~u;
        } else a = 0, t.child = null;
        return E0(
          e,
          t,
          u,
          l,
          a
        );
      }
      if ((l & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Ar(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? Tv(t, u) : Lc(), Rv(t);
      else
        return a = t.lanes = 536870912, E0(
          e,
          t,
          u !== null ? u.baseLanes | l : l,
          l,
          a
        );
    } else
      u !== null ? (Ar(t, u.cachePool), Tv(t, u), Ra(), t.memoizedState = null) : (e !== null && Ar(t, null), Lc(), Ra());
    return Ie(e, t, n, l), t.child;
  }
  function ii(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function E0(e, t, l, a, n) {
    var u = Dc();
    return u = u === null ? null : { parent: Je._currentValue, pool: u }, t.memoizedState = {
      baseLanes: l,
      cachePool: u
    }, e !== null && Ar(t, null), Lc(), Rv(t), e !== null && en(e, t, a, !0), t.childLanes = n, null;
  }
  function Vr(e, t) {
    return t = Qr(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function p0(e, t, l) {
    return rn(t, e.child, null, l), e = Vr(t, t.pendingProps), e.flags |= 2, Bt(t), t.memoizedState = null, e;
  }
  function VS(e, t, l) {
    var a = t.pendingProps, n = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (se) {
        if (a.mode === "hidden")
          return e = Vr(t, a), t.lanes = 536870912, e.memoizedState = { baseLanes: 0, cachePool: null }, ii(null, e);
        if (Yc(t), (e = we) ? (e = Jy(
          e,
          Pt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: va !== null ? { id: bl, overflow: El } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = nv(e), l.return = t, t.child = l, et = t, we = null)) : e = null, e === null) throw ha(t);
        return t.lanes = 536870912, null;
      }
      return Vr(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var c = u.dehydrated;
      if (Yc(t), n)
        if (t.flags & 256)
          t.flags &= -257, t = p0(
            e,
            t,
            l
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(r(558));
      else if (We || en(e, t, l, !1), n = (l & e.childLanes) !== 0, We || n) {
        if (pa.current === null) {
          if (a = Be, a !== null && (c = Tu(a, l), c !== 0 && c !== u.retryLane))
            throw u.retryLane = c, Pa(e, c), xt(a, e, c), io;
          of();
        }
        t = p0(
          e,
          t,
          l
        );
      } else
        e = u.treeContext, we = It(c.nextSibling), et = t, se = !0, ya = null, Pt = !1, e !== null && rv(t, e), t = Vr(t, a), t.flags |= 134221824;
      return t;
    }
    return e = Ql(e.child, {
      mode: a.mode,
      children: a.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Kn(e, t) {
    var l = t.ref;
    if (l === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(r(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function ro(e, t, l, a, n) {
    return tn(t), l = Xc(
      e,
      t,
      l,
      a,
      void 0,
      n
    ), a = Vc(), e !== null && !We ? (Qc(e, t, n), Pl(e, t, n)) : (se && a && pr(t), t.flags |= 1, Ie(e, t, l, n), t.child);
  }
  function T0(e, t, l, a, n, u) {
    return tn(t), t.updateQueue = null, l = _v(
      t,
      a,
      l,
      n
    ), Ov(e), a = Vc(), e !== null && !We ? (Qc(e, t, u), Pl(e, t, u)) : (se && a && pr(t), t.flags |= 1, Ie(e, t, l, u), t.child);
  }
  function R0(e, t, l, a, n) {
    if (tn(t), t.stateNode === null) {
      var u = wn, c = l.contextType;
      typeof c == "object" && c !== null && (u = ut(c)), u = new l(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = no, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, Bc(t), c = l.contextType, u.context = typeof c == "object" && c !== null ? ut(c) : wn, u.state = t.memoizedState, c = l.getDerivedStateFromProps, typeof c == "function" && (ao(
        t,
        l,
        c,
        a
      ), u.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (c = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), c !== u.state && no.enqueueReplaceState(u, u.state, null), ti(t, a, u, n), ei(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      u = t.stateNode;
      var d = t.memoizedProps, y = cn(l, d);
      u.props = y;
      var p = u.context, C = l.contextType;
      c = wn, typeof C == "object" && C !== null && (c = ut(C));
      var B = l.getDerivedStateFromProps;
      C = typeof B == "function" || typeof u.getSnapshotBeforeUpdate == "function", d = t.pendingProps !== d, C || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (d || p !== c) && c0(
        t,
        u,
        a,
        c
      ), Sa = !1;
      var b = t.memoizedState;
      u.state = b, ti(t, a, u, n), ei(), p = t.memoizedState, d || b !== p || Sa ? (typeof B == "function" && (ao(
        t,
        l,
        B,
        a
      ), p = t.memoizedState), (y = Sa || f0(
        t,
        l,
        y,
        a,
        b,
        p,
        c
      )) ? (C || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = p), u.props = a, u.state = p, u.context = c, a = y) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      u = t.stateNode, Uc(e, t), c = t.memoizedProps, C = cn(l, c), u.props = C, B = t.pendingProps, b = u.context, p = l.contextType, y = wn, typeof p == "object" && p !== null && (y = ut(p)), d = l.getDerivedStateFromProps, (p = typeof d == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c !== B || b !== y) && c0(
        t,
        u,
        a,
        y
      ), Sa = !1, b = t.memoizedState, u.state = b, ti(t, a, u, n), ei();
      var O = t.memoizedState;
      c !== B || b !== O || Sa || e !== null && e.dependencies !== null && Or(e.dependencies) ? (typeof d == "function" && (ao(
        t,
        l,
        d,
        a
      ), O = t.memoizedState), (C = Sa || f0(
        t,
        l,
        C,
        a,
        b,
        O,
        y
      ) || e !== null && e.dependencies !== null && Or(e.dependencies)) ? (p || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, O, y), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        O,
        y
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && b === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && b === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = O), u.props = a, u.state = O, u.context = y, a = C) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && b === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && b === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return u = a, Kn(e, t), a = (t.flags & 128) !== 0, u || a ? (u = t.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && a ? (t.child = rn(
      t,
      e.child,
      null,
      n
    ), t.child = rn(
      t,
      null,
      l,
      n
    )) : Ie(e, t, l, n), t.memoizedState = u.state, e = t.child) : e = Pl(
      e,
      t,
      n
    ), e;
  }
  function O0(e, t, l, a) {
    return Ia(), t.flags |= 256, Ie(e, t, l, a), t.child;
  }
  var fo = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function co(e) {
    return { baseLanes: e, cachePool: vv() };
  }
  function oo(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= wt), e;
  }
  function _0(e, t, l) {
    var a = t.pendingProps, n = !1, u = (t.flags & 128) !== 0, c;
    if ((c = u) || (c = e !== null && e.memoizedState === null ? !1 : (rt.current & 2) !== 0), c && (n = !0, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (se) {
        if (n ? Ta(t) : Ra(), (e = we) ? (e = Jy(
          e,
          Pt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: va !== null ? { id: bl, overflow: El } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = nv(e), l.return = t, t.child = l, et = t, we = null)) : e = null, e === null) throw ha(t);
        return os(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      return u = a.children, a = a.fallback, n ? (Ra(), n = t.mode, u = Qr(
        { mode: "hidden", children: u },
        n
      ), a = $a(
        a,
        n,
        l,
        null
      ), u.return = t, a.return = t, u.sibling = a, t.child = u, a = t.child, a.memoizedState = co(l), a.childLanes = oo(
        e,
        c,
        l
      ), t.memoizedState = fo, ii(null, a)) : (Ta(t), so(t, u));
    }
    var d = e.memoizedState;
    if (d !== null) {
      var y = d.dehydrated;
      if (y !== null)
        return QS(
          e,
          t,
          u,
          c,
          a,
          y,
          d,
          l
        );
    }
    return n ? (Ra(), n = a.fallback, u = t.mode, d = e.child, y = d.sibling, a = Ql(d, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = d.subtreeFlags & 1206910976, y !== null ? n = Ql(y, n) : (n = $a(
      n,
      u,
      l,
      null
    ), n.flags |= 2), n.return = t, a.return = t, a.sibling = n, t.child = a, ii(null, a), a = t.child, n = e.child.memoizedState, n === null ? n = co(l) : (u = n.cachePool, u !== null ? (d = Je._currentValue, u = u.parent !== d ? { parent: d, pool: d } : u) : u = vv(), n = {
      baseLanes: n.baseLanes | l,
      cachePool: u
    }), a.memoizedState = n, a.childLanes = oo(
      e,
      c,
      l
    ), t.memoizedState = fo, ii(e.child, a)) : (Ta(t), l = e.child, e = l.sibling, l = Ql(l, {
      mode: "visible",
      children: a.children
    }), l.return = t, l.sibling = null, e !== null && (c = t.deletions, c === null ? (t.deletions = [e], t.flags |= 16) : c.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function so(e, t) {
    return t = Qr(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Qr(e, t) {
    return e = Ot(22, e, null, t), e.lanes = 0, e;
  }
  function Zr(e, t, l) {
    return rn(t, e.child, null, l), e = so(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function QS(e, t, l, a, n, u, c, d) {
    if (l)
      return t.flags & 256 ? (Ta(t), t.flags &= -257, Zr(
        e,
        t,
        d
      )) : t.memoizedState !== null ? (Ra(), t.child = e.child, t.flags |= 128, null) : (Ra(), u = n.fallback, c = t.mode, n = Qr(
        { mode: "visible", children: n.children },
        c
      ), u = $a(
        u,
        c,
        d,
        null
      ), u.flags |= 2, n.return = t, u.return = t, n.sibling = u, t.child = n, rn(t, e.child, null, d), n = t.child, n.memoizedState = co(d), n.childLanes = oo(
        e,
        a,
        d
      ), t.memoizedState = fo, ii(null, n));
    if (Ta(t), os(u)) {
      if (a = u.nextSibling && u.nextSibling.dataset, a) var y = a.dgst;
      return a = y, a !== "" && (n = Error(r(419)), n.stack = "", n.digest = a, ku({ value: n, source: null, stack: null })), Zr(
        e,
        t,
        d
      );
    }
    if (We || en(e, t, d, !1), a = (d & e.childLanes) !== 0, We || a) {
      if (pa.current !== null)
        return Zr(
          e,
          t,
          d
        );
      if (a = Be, a !== null && (n = Tu(
        a,
        d
      ), n !== 0 && n !== c.retryLane))
        throw c.retryLane = n, Pa(e, n), xt(a, e, n), io;
      return cs(u) || of(), Zr(
        e,
        t,
        d
      );
    }
    return cs(u) ? (t.flags |= 192, t.child = e.child, null) : (e = c.treeContext, we = It(u.nextSibling), et = t, se = !0, ya = null, Pt = !1, e !== null && rv(t, e), t = so(
      t,
      n.children
    ), t.flags |= 134221824, t);
  }
  function A0(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), Rr(e.return, t, l);
  }
  function C0(e) {
    for (var t = null; e !== null; ) {
      var l = e.alternate;
      l !== null && Nr(l) === null && (t = e), e = e.sibling;
    }
    return t;
  }
  function Kr(e, t, l, a, n, u) {
    var c = e.memoizedState;
    c === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: l,
      tailMode: n,
      treeForkCount: u
    } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = a, c.tail = l, c.tailMode = n, c.treeForkCount = u);
  }
  function vo(e) {
    var t = e.child;
    for (e.child = null; t !== null; ) {
      var l = t.sibling;
      t.sibling = e.child, e.child = t, t = l;
    }
  }
  function yo(e, t, l) {
    var a = t.pendingProps, n = a.revealOrder, u = a.tail;
    a = a.children;
    var c = rt.current;
    if (t.flags & 128)
      return li(t, c), null;
    var d = (c & 2) !== 0;
    if (d ? (c = c & 1 | 2, t.flags |= 128) : c &= 1, li(t, c), n === "backwards" && e !== null ? (vo(e), Ie(e, t, a, l), vo(e)) : Ie(e, t, a, l), a = se ? Ju : 0, !d && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && A0(e, l, t);
        else if (e.tag === 19)
          A0(e, l, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (n) {
      case "backwards":
        l = C0(t.child), l === null ? (n = t.child, t.child = null) : (n = l.sibling, l.sibling = null, vo(t)), Kr(
          t,
          !0,
          n,
          null,
          u,
          a
        );
        break;
      case "unstable_legacy-backwards":
        for (l = null, n = t.child, t.child = null; n !== null; ) {
          if (e = n.alternate, e !== null && Nr(e) === null) {
            t.child = n;
            break;
          }
          e = n.sibling, n.sibling = l, l = n, n = e;
        }
        Kr(
          t,
          !0,
          l,
          null,
          u,
          a
        );
        break;
      case "together":
        Kr(
          t,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      case "independent":
        t.memoizedState = null;
        break;
      default:
        l = C0(t.child), l === null ? (n = t.child, t.child = null) : (n = l.sibling, l.sibling = null), Kr(
          t,
          !1,
          n,
          l,
          u,
          a
        );
    }
    return t.child;
  }
  function x0(e, t, l) {
    var a = t.pendingProps;
    return ma(t, t.type, a.value), Ie(e, t, a.children, l), t.child;
  }
  function Pl(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), Ca |= t.lanes, (l & t.childLanes) === 0)
      if (e !== null) {
        if (en(
          e,
          t,
          l,
          !1
        ), (l & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(r(153));
    if (t.child !== null) {
      for (e = t.child, l = Ql(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        e = e.sibling, l = l.sibling = Ql(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function ho(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Or(e)));
  }
  function ZS(e, t, l) {
    switch (t.tag) {
      case 3:
        gn(t, t.stateNode.containerInfo), ma(t, Je, e.memoizedState.cache), Ia();
        break;
      case 27:
      case 5:
        gu(t);
        break;
      case 4:
        gn(t, t.stateNode.containerInfo);
        break;
      case 10:
        ma(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Yc(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null) {
          if (a.dehydrated !== null)
            return Ta(t), t.flags |= 128, null;
          a = en(
            e,
            t,
            l,
            !1
          );
          var n = t.child.childLanes;
          return a || (l & n) !== 0 ? _0(e, t, l) : (Ta(t), e = Pl(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        }
        Ta(t);
        break;
      case 19:
        if (t.flags & 128)
          return yo(
            e,
            t,
            l
          );
        if (n = (e.flags & 128) !== 0, a = (l & t.childLanes) !== 0, a || (en(
          e,
          t,
          l,
          !1
        ), a = (l & t.childLanes) !== 0), n) {
          if (a)
            return yo(
              e,
              t,
              l
            );
          t.flags |= 128;
        }
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), li(t, rt.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, b0(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        ma(t, Je, e.memoizedState.cache);
    }
    return Pl(e, t, l);
  }
  function z0(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        We = !0;
      else {
        if (!ho(e, l) && (t.flags & 128) === 0)
          return We = !1, ZS(
            e,
            t,
            l
          );
        We = (e.flags & 131072) !== 0;
      }
    else
      We = !1, se && (t.flags & 1048576) !== 0 && iv(t, Ju, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = nn(t.elementType), t.type = e, typeof e == "function")
            pc(e) ? (a = cn(e, a), t.tag = 1, t = R0(
              null,
              t,
              e,
              a,
              l
            )) : (t.tag = 0, t = ro(
              null,
              t,
              e,
              a,
              l
            ));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === w) {
                t.tag = 11, t = m0(
                  null,
                  t,
                  e,
                  a,
                  l
                );
                break e;
              } else if (n === he) {
                t.tag = 14, t = g0(
                  null,
                  t,
                  e,
                  a,
                  l
                );
                break e;
              } else if (n === De) {
                t.tag = 10, t.type = e, t = x0(
                  null,
                  t,
                  l
                );
                break e;
              }
            }
            throw t = Ee(e) || e, Error(r(306, t, ""));
          }
        }
        return t;
      case 0:
        return ro(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 1:
        return a = t.type, n = cn(
          a,
          t.pendingProps
        ), R0(
          e,
          t,
          a,
          n,
          l
        );
      case 3:
        e: {
          if (gn(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(r(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          n = u.element, Uc(e, t), ti(t, a, null, l);
          var c = t.memoizedState;
          if (a = c.cache, ma(t, Je, a), a !== u.cache && xc(
            t,
            [Je],
            l,
            !0
          ), ei(), a = c.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: c.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = O0(
                e,
                t,
                a,
                l
              );
              break e;
            } else if (a !== n) {
              n = Jt(
                Error(r(424)),
                t
              ), ku(n), t = O0(
                e,
                t,
                a,
                l
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, we = It(e.firstChild), et = t, se = !0, ya = null, Pt = !0, l = bv(
                t,
                null,
                a,
                l
              ), t.child = l; l; )
                l.flags = l.flags & -3 | 134221824, l = l.sibling;
          else {
            if (Ia(), a === n) {
              t = Pl(
                e,
                t,
                l
              );
              break e;
            }
            Ie(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Kn(e, t), e === null ? (l = eh(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : se || (t.stateNode = By(
          t.type,
          t.pendingProps,
          yl.current,
          t
        )) : t.memoizedState = eh(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return gu(t), e === null && se && (a = t.stateNode = Py(
          t.type,
          t.pendingProps,
          yl.current
        ), et = t, Pt = !0, n = we, Da(t.type) ? (ss = n, we = It(a.firstChild)) : we = n), Ie(
          e,
          t,
          t.pendingProps.children,
          l
        ), Kn(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && se && ((n = a = we) && (a = Yb(
          a,
          t.type,
          t.pendingProps,
          Pt
        ), a !== null ? (t.stateNode = a, et = t, we = It(a.firstChild), Pt = !1, n = !0) : n = !1), n || ha(t)), gu(t), n = t.type, u = t.pendingProps, c = e !== null ? e.memoizedProps : null, a = u.children, ls(n, u) ? a = null : c !== null && ls(n, c) && (t.flags |= 32), t.memoizedState !== null && (n = Xc(
          e,
          t,
          US,
          null,
          null,
          l
        ), ou._currentValue = n), Kn(e, t), Ie(e, t, a, l), t.child;
      case 6:
        return e === null && se && ((e = l = we) && (l = jb(
          l,
          t.pendingProps,
          Pt
        ), l !== null ? (t.stateNode = l, et = t, we = null, e = !0) : e = !1), e || ha(t)), null;
      case 13:
        return _0(e, t, l);
      case 4:
        return gn(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = rn(
          t,
          null,
          a,
          l
        ) : Ie(e, t, a, l), t.child;
      case 11:
        return m0(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 7:
        return a = t.pendingProps, Kn(e, t), Ie(e, t, a, l), t.child;
      case 8:
        return Ie(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 12:
        return Ie(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 10:
        return x0(e, t, l);
      case 9:
        return n = t.type._context, a = t.pendingProps.children, tn(t), n = ut(n), a = a(n), t.flags |= 1, Ie(e, t, a, l), t.child;
      case 14:
        return g0(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 15:
        return S0(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 19:
        return yo(e, t, l);
      case 31:
        return VS(e, t, l);
      case 22:
        return b0(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        return tn(t), a = ut(Je), e === null ? (n = Dc(), n === null && (n = Be, u = zc(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), t.memoizedState = { parent: a, cache: n }, Bc(t), ma(t, Je, n)) : ((e.lanes & l) !== 0 && (Uc(e, t), ti(t, null, null, l), ei()), n = e.memoizedState, u = t.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), ma(t, Je, a)) : (a = u.cache, ma(t, Je, a), a !== n.cache && xc(
          t,
          [Je],
          l,
          !0
        ))), Ie(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 30:
        return t.stateNode === null && (t.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), a = t.pendingProps, a.name != null && a.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : se && pr(t), e !== null && e.memoizedProps.name !== a.name ? t.flags |= 4194816 : Kn(e, t), Ie(e, t, a.children, l), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function $l(e) {
    e.flags |= 4;
  }
  function mo(e, t, l, a, n) {
    var u;
    if ((u = (e.mode & 32) !== 0) && (u = l === null ? nh(t, a) : nh(t, a) && (a.src !== l.src || a.srcSet !== l.srcSet)), u) {
      if (e.flags |= 16777216, (n & 335544128) === n)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (oy()) e.flags |= 8192;
        else
          throw un = xr, Nc;
    } else e.flags &= -16777217;
  }
  function M0(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !uh(t))
      if (oy()) e.flags |= 8192;
      else
        throw un = xr, Nc;
  }
  function Jr(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Fi() : 536870912, e.lanes |= t, $n |= t);
  }
  function ri(e, t) {
    if (!se)
      switch (e.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var l = e.tail, a = null; l !== null; )
            l.alternate !== null && (a = l), l = l.sibling;
          a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
          break;
        default:
          for (t = e.tail, l = null; t !== null; )
            t.alternate !== null && (l = t), t = t.sibling;
          l === null ? e.tail = null : l.sibling = null;
      }
  }
  function Le(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, l = 0, a = 0;
    if (t)
      for (var n = e.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 1206910976, a |= n.flags & 1206910976, n.return = e, n = n.sibling;
    else
      for (n = e.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = e, n = n.sibling;
    return e.subtreeFlags |= a, e.childLanes = l, t;
  }
  function KS(e, t, l) {
    var a = t.pendingProps;
    switch (Oc(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Le(t), null;
      case 1:
        return Le(t), null;
      case 3:
        return l = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Jl(Je), Bl(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Yn(t) ? $l(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ac())), Le(t), null;
      case 26:
        var n = t.type, u = t.memoizedState;
        return e === null ? ($l(t), u !== null ? (Le(t), M0(t, u)) : (Le(t), mo(
          t,
          n,
          null,
          a,
          l
        ))) : u ? u !== e.memoizedState ? ($l(t), Le(t), M0(t, u)) : (Le(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && $l(t), Le(t), mo(
          t,
          n,
          e,
          a,
          l
        )), null;
      case 27:
        if (Ga(t), l = yl.current, n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && $l(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Le(t), t.subtreeFlags &= -33554433, null;
          }
          e = Gt.current, Yn(t) ? fv(t) : (e = Py(n, a, l), t.stateNode = e, $l(t));
        }
        return Le(t), t.subtreeFlags &= -33554433, null;
      case 5:
        if (Ga(t), n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && $l(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Le(t), t.subtreeFlags &= -33554433, null;
          }
          if (u = Gt.current, Yn(t))
            fv(t);
          else {
            var c = Si(
              yl.current
            );
            switch (u) {
              case 1:
                u = c.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                u = c.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    u = c.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    u = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    u = c.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof a.is == "string" ? c.createElement("select", {
                      is: a.is
                    }) : c.createElement("select"), a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
                    break;
                  default:
                    u = typeof a.is == "string" ? c.createElement(n, { is: a.is }) : c.createElement(n);
                }
            }
            u[Ke] = t, u[nt] = a;
            e: for (c = t.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6)
                u.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                c.child.return = c, c = c.child;
                continue;
              }
              if (c === t) break e;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === t)
                  break e;
                c = c.return;
              }
              c.sibling.return = c.return, c = c.sibling;
            }
            t.stateNode = u;
            e: switch (ct(u, n, a), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break e;
              case "img":
                a = !0;
                break e;
              default:
                a = !1;
            }
            a && $l(t);
          }
        }
        return Le(t), t.subtreeFlags &= -33554433, mo(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          l
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== a && $l(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(r(166));
          if (e = yl.current, Yn(t)) {
            if (e = t.stateNode, l = t.memoizedProps, a = null, n = et, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            e[Ke] = t, e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || zy(e.nodeValue, l)), e || ha(t, !0);
          } else
            e = Si(e).createTextNode(
              a
            ), e[Ke] = t, t.stateNode = e;
        }
        return Le(t), null;
      case 31:
        if (l = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = Yn(t), l !== null) {
            if (e === null) {
              if (!a) throw Error(r(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(557));
              e[Ke] = t;
            } else
              Ia(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Le(t), e = !1;
          } else
            l = Ac(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
          if (!e)
            return t.flags & 256 ? (Bt(t), t) : (Bt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Le(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (n = Yn(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!n) throw Error(r(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(r(317));
              n[Ke] = t;
            } else
              Ia(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Le(t), n = !1;
          } else
            n = Ac(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return t.flags & 256 ? (Bt(t), t) : (Bt(t), null);
        }
        return Bt(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = a !== null, e = e !== null && e.memoizedState !== null, l && (a = t.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), Jr(t, t.updateQueue), Le(t), null);
      case 4:
        return Bl(), e === null && $o(t.stateNode.containerInfo), t.flags |= 67108864, Le(t), null;
      case 10:
        return Jl(t.type), Le(t), null;
      case 19:
        if (jc(t), a = t.memoizedState, a === null) return Le(t), null;
        if (n = (t.flags & 128) !== 0, u = a.rendering, u === null)
          if (n) ri(a, !1);
          else {
            if (Xe !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = Nr(e), u !== null) {
                  for (t.flags |= 128, ri(a, !1), e = u.updateQueue, t.updateQueue = e, Jr(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    av(l, e), l = l.sibling;
                  return li(
                    t,
                    rt.current & 1 | 2
                  ), se && Zl(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && yt() > uf && (t.flags |= 128, n = !0, ri(a, !1), t.lanes = 4194304);
          }
        else {
          if (!n)
            if (e = Nr(u), e !== null) {
              if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, Jr(t, e), ri(a, !0), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !u.alternate && !se)
                return Le(t), null;
            } else
              2 * yt() - a.renderingStartTime > uf && l !== 536870912 && (t.flags |= 128, n = !0, ri(a, !1), t.lanes = 4194304);
          a.isBackwards ? (u.sibling = t.child, t.child = u) : (e = a.last, e !== null ? e.sibling = u : t.child = u, a.last = u);
        }
        if (a.tail !== null) {
          e = a.tail;
          e: {
            for (l = e; l !== null; ) {
              if (l.alternate !== null) {
                l = !1;
                break e;
              }
              l = l.sibling;
            }
            l = !0;
          }
          return a.rendering = e, a.tail = e.sibling, a.renderingStartTime = yt(), e.sibling = null, u = rt.current, u = n ? u & 1 | 2 : u & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !l || se ? li(t, u) : (l = u, Ae(it, t), Ae(rt, l), dt === null && (dt = t)), se && Zl(t, a.treeForkCount), e;
        }
        return Le(t), null;
      case 22:
      case 23:
        return Bt(t), qc(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Le(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Le(t), l = t.updateQueue, l !== null && Jr(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== l && (t.flags |= 2048), e !== null && $e(an), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Jl(Je), Le(t), null;
      case 25:
        return null;
      case 30:
        return t.flags |= 33554432, Le(t), null;
    }
    throw Error(r(156, t.tag));
  }
  function JS(e, t) {
    switch (Oc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Jl(Je), Bl(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Ga(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Bt(t), t.alternate === null)
            throw Error(r(340));
          Ia();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Bt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(r(340));
          Ia();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return jc(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
      case 4:
        return Bl(), null;
      case 10:
        return Jl(t.type), null;
      case 22:
      case 23:
        return Bt(t), qc(), e !== null && $e(an), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Jl(Je), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function D0(e, t) {
    switch (Oc(t), t.tag) {
      case 3:
        Jl(Je), Bl();
        break;
      case 26:
      case 27:
      case 5:
        Ga(t);
        break;
      case 4:
        Bl();
        break;
      case 31:
        t.memoizedState !== null && Bt(t);
        break;
      case 13:
        Bt(t);
        break;
      case 19:
        jc(t);
        break;
      case 10:
        Jl(t.type);
        break;
      case 22:
      case 23:
        Bt(t), qc(), e !== null && $e(an);
        break;
      case 24:
        Jl(Je);
    }
  }
  function fi(e, t) {
    try {
      var l = t.updateQueue, a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var u = l.create, c = l.inst;
            a = u(), c.destroy = a;
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (d) {
      xe(t, t.return, d);
    }
  }
  function Oa(e, t, l) {
    try {
      var a = t.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            var c = a.inst, d = c.destroy;
            if (d !== void 0) {
              c.destroy = void 0, n = t;
              var y = l, p = d;
              try {
                p();
              } catch (C) {
                xe(
                  n,
                  y,
                  C
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (C) {
      xe(t, t.return, C);
    }
  }
  function N0(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        pv(t, l);
      } catch (a) {
        xe(e, e.return, a);
      }
    }
  }
  function B0(e, t, l) {
    l.props = cn(
      e.type,
      e.memoizedProps
    ), l.state = e.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (a) {
      xe(e, t, a);
    }
  }
  function pl(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            var n = e.stateNode, u = Xl(e.memoizedProps, n);
            (n.ref === null || n.ref.name !== u) && (n.ref = jy(u)), a = n.ref;
            break;
          case 7:
            if (e.stateNode === null) {
              var c = new qt(e);
              m(
                e.child,
                !1,
                Lb,
                c,
                void 0,
                void 0
              ), e.stateNode = c;
            }
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof l == "function" ? e.refCleanup = l(a) : l.current = a;
      }
    } catch (d) {
      xe(e, t, d);
    }
  }
  function ft(e, t) {
    var l = e.ref, a = e.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          xe(e, t, n);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          xe(e, t, n);
        }
      else l.current = null;
  }
  function kr(e, t) {
    if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null)
      for (var l = 0; l < t.length; l++)
        Ky(
          e.stateNode,
          t[l]
        );
  }
  function U0(e) {
    for (var t = e.return; t !== null && (So(t) && Ky(e.stateNode, t.stateNode), !go(t)); )
      t = t.return;
  }
  function ci(e) {
    for (var t = e.return; t !== null && (So(t) && qb(e.stateNode, t.stateNode), !go(t)); )
      t = t.return;
  }
  function go(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 27;
  }
  function So(e) {
    return e && e.tag === 7 && e.stateNode !== null;
  }
  function bo(e) {
    var t = e.type, l = e.memoizedProps, a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break e;
        case "img":
          l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      xe(e, e.return, n);
    }
  }
  function Eo(e, t, l) {
    try {
      var a = e.stateNode;
      bb(a, e.type, l, t), a[nt] = t;
    } catch (n) {
      xe(e, e.return, n);
    }
  }
  function H0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Da(e.type) || e.tag === 4;
  }
  function po(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || H0(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Da(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function To(e, t, l, a) {
    var n = e.tag;
    if (n === 5 || n === 6)
      n = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(n, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(n), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = Sl)), kr(e, a), Se = !0;
    else if (n !== 4 && (n === 27 && (kr(e, a), a = null, Da(e.type) && (l = e.stateNode, t = null)), e = e.child, e !== null))
      for (To(
        e,
        t,
        l,
        a
      ), e = e.sibling; e !== null; )
        To(
          e,
          t,
          l,
          a
        ), e = e.sibling;
  }
  function Wr(e, t, l, a) {
    var n = e.tag;
    if (n === 5 || n === 6)
      n = e.stateNode, t ? l.insertBefore(n, t) : l.appendChild(n), kr(e, a), Se = !0;
    else if (n !== 4 && (n === 27 && (kr(e, a), a = null, Da(e.type) && (l = e.stateNode)), e = e.child, e !== null))
      for (Wr(
        e,
        t,
        l,
        a
      ), e = e.sibling; e !== null; )
        Wr(
          e,
          t,
          l,
          a
        ), e = e.sibling;
  }
  function w0(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var a = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      ct(t, a, l), t[Ke] = e, t[nt] = l;
    } catch (u) {
      xe(e, e.return, u);
    }
  }
  var Pr = !1, Ut = null;
  function L0(e) {
    (e.tag === 30 || (e.subtreeFlags & 33554432) !== 0) && (Pr = !0);
  }
  var Tl = null;
  function q0() {
    var e = Tl;
    return Tl = null, e;
  }
  var _t = 0;
  function Jn(e, t, l, a, n) {
    return _t = 0, Y0(
      e.child,
      t,
      l,
      a,
      n
    );
  }
  function Y0(e, t, l, a, n) {
    for (var u = !1; e !== null; ) {
      if (e.tag === 5) {
        var c = e.stateNode;
        if (a !== null) {
          var d = us(c);
          a.push(d), d.view && (u = !0);
        } else
          u || us(c).view && (u = !0);
        Pr = !0, qy(
          c,
          _t === 0 ? t : t + "_" + _t,
          l
        ), _t++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && n || Y0(
        e.child,
        t,
        l,
        a,
        n
      ) && (u = !0));
      e = e.sibling;
    }
    return u;
  }
  function Rl(e, t) {
    for (; e !== null; )
      e.tag === 5 ? Yy(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && t || Rl(
        e.child,
        t
      )), e = e.sibling;
  }
  function $r(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if ((e.tag !== 22 || e.memoizedState === null) && ($r(e), e.tag === 30 && (e.flags & 18874368) !== 0 && e.stateNode.paired)) {
          var t = e.memoizedProps;
          if (t.name == null || t.name === "auto")
            throw Error(r(544));
          var l = t.name;
          t = Vl(t.default, t.share), t !== "none" && (Jn(
            e,
            l,
            t,
            null,
            !1
          ) || Rl(e.child, !1));
        }
        e = e.sibling;
      }
  }
  function Ro(e, t) {
    if (e.tag === 30) {
      var l = e.stateNode, a = e.memoizedProps, n = Xl(a, l), u = Vl(
        a.default,
        l.paired ? a.share : a.enter
      );
      u !== "none" ? Jn(e, n, u, null, !1) ? ($r(e), l.paired || t || tu(e, a.onEnter)) : Rl(e.child, !1) : $r(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        Ro(e, t), e = e.sibling;
    else $r(e);
  }
  function Oo(e) {
    if (Ut !== null && Ut.size !== 0) {
      var t = Ut;
      if ((e.subtreeFlags & 18874368) !== 0)
        for (e = e.child; e !== null; ) {
          if (e.tag !== 22 || e.memoizedState === null) {
            if (e.tag === 30 && (e.flags & 18874368) !== 0) {
              var l = e.memoizedProps, a = l.name;
              if (a != null && a !== "auto") {
                var n = t.get(a);
                if (n !== void 0) {
                  var u = Vl(
                    l.default,
                    l.share
                  );
                  if (u !== "none" && (Jn(
                    e,
                    a,
                    u,
                    null,
                    !1
                  ) ? (u = e.stateNode, n.paired = u, u.paired = n, tu(e, l.onShare)) : Rl(e.child, !1)), t.delete(a), t.size === 0) break;
                }
              }
            }
            Oo(e);
          }
          e = e.sibling;
        }
    }
  }
  function _o(e) {
    if (e.tag === 30) {
      var t = e.memoizedProps, l = Xl(t, e.stateNode), a = Ut !== null ? Ut.get(l) : void 0, n = Vl(
        t.default,
        a !== void 0 ? t.share : t.exit
      );
      n !== "none" && (Jn(e, l, n, null, !1) ? a !== void 0 ? (n = e.stateNode, a.paired = n, n.paired = a, Ut.delete(l), tu(e, t.onShare)) : tu(e, t.onExit) : Rl(e.child, !1)), Ut !== null && Oo(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        _o(e), e = e.sibling;
    else
      Ut !== null && Oo(e);
  }
  function j0(e) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var t = e.memoizedProps, l = Xl(t, e.stateNode);
        t = Vl(t.default, t.update), e.flags &= -5, t !== "none" && Jn(
          e,
          l,
          t,
          e.memoizedState = [],
          !1
        );
      } else
        (e.subtreeFlags & 33554432) !== 0 && j0(e);
      e = e.sibling;
    }
  }
  function Ao(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if (e.tag !== 22 || e.memoizedState === null) {
          if (e.tag === 30 && (e.flags & 18874368) !== 0) {
            var t = e.stateNode;
            t.paired !== null && (t.paired = null, Rl(e.child, !1));
          }
          Ao(e);
        }
        e = e.sibling;
      }
  }
  function Ir(e) {
    if (e.tag === 30)
      e.stateNode.paired = null, Rl(e.child, !1), Ao(e);
    else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        Ir(e), e = e.sibling;
    else Ao(e);
  }
  function G0(e) {
    for (e = e.child; e !== null; )
      e.tag === 30 ? Rl(e.child, !1) : (e.subtreeFlags & 33554432) !== 0 && G0(e), e = e.sibling;
  }
  function Co(e, t, l, a, n, u, c) {
    for (var d = !1; t !== null; ) {
      if (t.tag === 5) {
        var y = t.stateNode;
        if (u !== null && _t < u.length) {
          var p = u[_t], C = us(y);
          (p.view || C.view) && (d = !0);
          var B;
          if (B = (e.flags & 4) === 0)
            if (C.clip) B = !0;
            else {
              B = p.rect;
              var b = C.rect;
              B = B.y !== b.y || B.x !== b.x || B.height !== b.height || B.width !== b.width;
            }
          B && (e.flags |= 4), C.abs ? C = !p.abs : (p = p.rect, C = C.rect, C = p.height !== C.height || p.width !== C.width), C && (e.flags |= 32);
        } else e.flags |= 32;
        (e.flags & 4) !== 0 && qy(
          y,
          _t === 0 ? l : l + "_" + _t,
          n
        ), d && (e.flags & 4) !== 0 || (Tl === null && (Tl = []), Tl.push(
          y,
          _t === 0 ? a : a + "_" + _t,
          t.memoizedProps
        )), _t++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && c ? e.flags |= t.flags & 32 : Co(
        e,
        t.child,
        l,
        a,
        n,
        u,
        c
      ) && (d = !0));
      t = t.sibling;
    }
    return d;
  }
  function X0(e, t) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var l = e.memoizedProps, a = e.stateNode, n = Xl(l, a), u = Vl(l.default, l.update), c;
        c = e.memoizedState, e.memoizedState = null, a = e;
        var d = e.child;
        _t = 0, n = Co(
          a,
          d,
          n,
          n,
          u,
          c,
          !1
        ), (e.flags & 4) !== 0 && n && tu(e, l.onUpdate);
      } else
        (e.subtreeFlags & 33554432) !== 0 && X0(e);
      e = e.sibling;
    }
  }
  var tt = !1, Oe = !1, Ol = !1, xo = !1, V0 = typeof WeakSet == "function" ? WeakSet : Set, lt = null, _l = !1, oi = !1, Fr = !1, zo = !1;
  function kS(e, t, l) {
    if (e = e.containerInfo, es = su, e = Jd(e), yc(e)) {
      if ("selectionStart" in e)
        var a = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          a = (a = e.ownerDocument) && a.defaultView || window;
          var n = a.getSelection && a.getSelection();
          if (n && n.rangeCount !== 0) {
            a = n.anchorNode;
            var u = n.anchorOffset, c = n.focusNode;
            n = n.focusOffset;
            try {
              a.nodeType, c.nodeType;
            } catch {
              a = null;
              break e;
            }
            var d = 0, y = -1, p = -1, C = 0, B = 0, b = e, O = null;
            t: for (; ; ) {
              for (var Y; b !== a || u !== 0 && b.nodeType !== 3 || (y = d + u), b !== c || n !== 0 && b.nodeType !== 3 || (p = d + n), b.nodeType === 3 && (d += b.nodeValue.length), (Y = b.firstChild) !== null; )
                O = b, b = Y;
              for (; ; ) {
                if (b === e) break t;
                if (O === a && ++C === u && (y = d), O === c && ++B === n && (p = d), (Y = b.nextSibling) !== null) break;
                b = O, O = b.parentNode;
              }
              b = Y;
            }
            a = y === -1 || p === -1 ? null : { start: y, end: p };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (ts = { focusedElem: e, selectionRange: a }, su = !1, l = (l & 335544064) === l, lt = t, t = l ? 9270 : 1024; lt !== null; ) {
      if (e = lt, l && (a = e.deletions, a !== null))
        for (u = 0; u < a.length; u++)
          l && _o(a[u]);
      if (e.alternate === null && (e.flags & 2) !== 0)
        l && L0(e), ef(l);
      else {
        if (e.tag === 22) {
          if (a = e.alternate, e.memoizedState !== null) {
            a !== null && a.memoizedState === null && l && _o(a), ef(l);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            l && L0(e), ef(l);
            continue;
          }
        }
        a = e.child, (e.subtreeFlags & t) !== 0 && a !== null ? (a.return = e, lt = a) : (l && j0(e), ef(l));
      }
    }
    Ut = null;
  }
  function ef(e) {
    for (; lt !== null; ) {
      var t = lt, l = e, a = t.alternate, n = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((n & 1024) !== 0 && a !== null) {
            l = void 0, n = a.memoizedProps, a = a.memoizedState;
            var u = t.stateNode;
            try {
              var c = cn(
                t.type,
                n
              );
              l = u.getSnapshotBeforeUpdate(
                c,
                a
              ), u.__reactInternalSnapshotBeforeUpdate = l;
            } catch (d) {
              xe(t, t.return, d);
            }
          }
          break;
        case 3:
          if ((n & 1024) !== 0) {
            if (a = t.stateNode.containerInfo, l = a.nodeType, l === 9)
              fs(a);
            else if (l === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  fs(a);
                  break;
                default:
                  a.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          l && a !== null && (l = Xl(
            a.memoizedProps,
            a.stateNode
          ), n = t.memoizedProps, n = Vl(n.default, n.update), n !== "none" && Jn(
            a,
            l,
            n,
            a.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((n & 1024) !== 0) throw Error(r(163));
      }
      if (a = t.sibling, a !== null) {
        a.return = t.return, lt = a;
        break;
      }
      lt = t.return;
    }
  }
  function Q0(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Al(e, l), a & 4 && fi(5, l);
        break;
      case 1:
        if (Al(e, l), a & 4)
          if (e = l.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (c) {
              xe(l, l.return, c);
            }
          else {
            var n = cn(
              l.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                n,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (c) {
              xe(
                l,
                l.return,
                c
              );
            }
          }
        a & 64 && N0(l), a & 512 && pl(l, l.return);
        break;
      case 3:
        if (Al(e, l), a & 64 && (e = l.updateQueue, e !== null)) {
          if (t = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            pv(e, t);
          } catch (c) {
            xe(l, l.return, c);
          }
        }
        break;
      case 27:
        t === null && a & 4 && w0(l);
      case 26:
      case 5:
        Al(e, l), t === null && a & 4 && bo(l), a & 512 && pl(l, l.return);
        break;
      case 12:
        Al(e, l);
        break;
      case 31:
        Al(e, l), a & 4 && k0(e, l);
        break;
      case 13:
        Al(e, l), a & 4 && W0(e, l), a & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = ib.bind(
          null,
          l
        ), Gb(e, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || tt, !a) {
          var u = t !== null && t.memoizedState !== null || Oe;
          t = tt, n = Oe, tt = a, (Oe = u) && !n ? (a = 2, (l.subtreeFlags & 8772) !== 0 && (a |= 1), il(
            e,
            l,
            a
          )) : Al(e, l), tt = t, Oe = n;
        }
        break;
      case 30:
        Al(e, l), a & 512 && pl(l, l.return);
        break;
      case 7:
        a & 512 && pl(l, l.return);
      default:
        Al(e, l);
    }
  }
  function Mo(e, t) {
    for (e = e.child; e !== null; )
      Z0(e, t), e = e.sibling;
  }
  function Z0(e, t) {
    switch (e.tag) {
      case 5:
      case 26:
        try {
          var l = e.stateNode;
          if (t) {
            var a = l.style;
            typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none";
          } else {
            var n = e.stateNode, u = e.memoizedProps.style, c = u != null && u.hasOwnProperty("display") ? u.display : null;
            n.style.display = c == null || typeof c == "boolean" ? "" : ("" + c).trim();
          }
        } catch (y) {
          xe(e, e.return, y);
        }
        Do(e, t);
        break;
      case 6:
        try {
          e.stateNode.nodeValue = t ? "" : e.memoizedProps, Se = !0;
        } catch (y) {
          xe(e, e.return, y);
        }
        break;
      case 18:
        try {
          var d = e.stateNode;
          t ? Ly(d, !0) : Ly(e.stateNode, !1);
        } catch (y) {
          xe(e, e.return, y);
        }
        break;
      case 22:
      case 23:
        e.memoizedState === null && Mo(e, t);
        break;
      default:
        Mo(e, t);
    }
  }
  function Do(e, t) {
    if (e.subtreeFlags & 67108864)
      for (e = e.child; e !== null; ) {
        e: {
          var l = e, a = t;
          switch (l.tag) {
            case 4:
              Z0(l, a);
              break e;
            case 22:
              l.memoizedState === null && Do(l, a);
              break e;
            default:
              Do(l, a);
          }
        }
        e = e.sibling;
      }
  }
  function K0(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, K0(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Qa(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var qe = null, At = !1;
  function nl(e, t, l) {
    for (l = l.child; l !== null; )
      J0(e, t, l), l = l.sibling;
  }
  function J0(e, t, l) {
    if (ht && typeof ht.onCommitFiberUnmount == "function")
      try {
        ht.onCommitFiberUnmount(ua, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Oe || ft(l, t), nl(
          e,
          t,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && !Oe && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Oe || ft(l, t), ci(l);
        var a = qe, n = At;
        Da(l.type) && (qe = l.stateNode, At = !1), nl(
          e,
          t,
          l
        ), $y(
          l.stateNode,
          l.type,
          l.memoizedProps
        ), qe = a, At = n;
        break;
      case 5:
        Oe || ft(l, t), ci(l);
      case 6:
        if (l.tag === 6 && ci(l), a = qe, n = At, qe = null, nl(
          e,
          t,
          l
        ), qe = a, At = n, qe !== null)
          if (At)
            try {
              (qe.nodeType === 9 ? qe.body : qe.nodeName === "HTML" ? qe.ownerDocument.body : qe).removeChild(l.stateNode), Se = !0;
            } catch (u) {
              xe(
                l,
                t,
                u
              );
            }
          else
            try {
              qe.removeChild(l.stateNode), Se = !0;
            } catch (u) {
              xe(
                l,
                t,
                u
              );
            }
        break;
      case 18:
        qe !== null && (At ? (e = qe, wy(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), du(e)) : wy(qe, l.stateNode));
        break;
      case 4:
        a = qe, n = At, qe = l.stateNode.containerInfo, At = !0, nl(
          e,
          t,
          l
        ), qe = a, At = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Oa(2, l, t), Oe || Oa(4, l, t), nl(
          e,
          t,
          l
        );
        break;
      case 1:
        Oe || (ft(l, t), a = l.stateNode, typeof a.componentWillUnmount == "function" && B0(
          l,
          t,
          a
        )), nl(
          e,
          t,
          l
        );
        break;
      case 21:
        nl(
          e,
          t,
          l
        );
        break;
      case 22:
        Oe = (a = Oe) || l.memoizedState !== null, nl(
          e,
          t,
          l
        ), Oe = a;
        break;
      case 30:
        ft(l, t), nl(
          e,
          t,
          l
        );
        break;
      case 7:
        Oe || ft(l, t), nl(
          e,
          t,
          l
        );
        break;
      default:
        nl(
          e,
          t,
          l
        );
    }
  }
  function k0(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        du(e);
      } catch (l) {
        xe(t, t.return, l);
      }
    }
  }
  function W0(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        du(e);
      } catch (l) {
        xe(t, t.return, l);
      }
  }
  function WS(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new V0()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new V0()), t;
      default:
        throw Error(r(435, e.tag));
    }
  }
  function tf(e, t) {
    var l = WS(e);
    t.forEach(function(a) {
      if (!l.has(a)) {
        l.add(a);
        var n = rb.bind(null, e, a);
        a.then(n, n);
      }
    });
  }
  function Et(e, t, l) {
    var a = t.deletions;
    if (a !== null)
      for (var n = 0; n < a.length; n++) {
        var u = a[n], c = e, d = t, y = d;
        e: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
              if (Da(y.type)) {
                qe = y.stateNode, At = !1;
                break e;
              }
              break;
            case 5:
              qe = y.stateNode, At = !1;
              break e;
            case 3:
            case 4:
              qe = y.stateNode.containerInfo, At = !0;
              break e;
          }
          y = y.return;
        }
        if (qe === null) throw Error(r(160));
        J0(c, d, u), qe = null, At = !1, c = u.alternate, c !== null && (c.return = null), u.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        P0(t, e, l), t = t.sibling;
  }
  var ul = null;
  function P0(e, t, l) {
    var a = e.alternate, n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (n & 4 && (a = e.updateQueue, a = a !== null ? a.events : null, a !== null))
          for (var u = 0; u < a.length; u++) {
            var c = a[u];
            c.ref.impl = c.nextImpl;
          }
        Et(t, e, l), pt(e), n & 4 && (Oa(3, e, e.return), fi(3, e), Oa(5, e, e.return));
        break;
      case 1:
        Et(t, e, l), pt(e), n & 512 && (Oe || a === null || ft(a, a.return)), n & 64 && tt && (e = e.updateQueue, e !== null && (t = e.callbacks, t !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? t : l.concat(t))));
        break;
      case 26:
        if (u = ul, Et(t, e, l), pt(e), n & 512 && (Oe || a === null || ft(a, a.return)), n & 4)
          if (n = a !== null ? a.memoizedState : null, l = e.memoizedState, a === null)
            if (l === null)
              if (e.stateNode === null)
                if (tt)
                  e.stateNode = By(
                    e.type,
                    e.memoizedProps,
                    t.containerInfo,
                    e
                  );
                else {
                  e: {
                    t = e.type, l = e.memoizedProps, n = u.ownerDocument || u;
                    t: switch (t) {
                      case "title":
                        a = n.getElementsByTagName("title")[0], (!a || a[fa] || a[Ke] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = n.createElement(t), n.head.insertBefore(
                          a,
                          n.querySelector("head > title")
                        )), ct(a, t, l), a[Ke] = e, Qe(a), t = a;
                        break e;
                      case "link":
                        if (u = ah(
                          "link",
                          "href",
                          n
                        ).get(t + (l.href || ""))) {
                          for (c = 0; c < u.length; c++)
                            if (a = u[c], a.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && a.getAttribute("rel") === (l.rel == null ? null : l.rel) && a.getAttribute("title") === (l.title == null ? null : l.title) && a.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                              u.splice(c, 1);
                              break t;
                            }
                        }
                        a = n.createElement(t), ct(a, t, l), n.head.appendChild(a);
                        break;
                      case "meta":
                        if (u = ah(
                          "meta",
                          "content",
                          n
                        ).get(t + (l.content || ""))) {
                          for (c = 0; c < u.length; c++)
                            if (a = u[c], a.getAttribute("content") === (l.content == null ? null : "" + l.content) && a.getAttribute("name") === (l.name == null ? null : l.name) && a.getAttribute("property") === (l.property == null ? null : l.property) && a.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && a.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                              u.splice(c, 1);
                              break t;
                            }
                        }
                        a = n.createElement(t), ct(a, t, l), n.head.appendChild(a);
                        break;
                      default:
                        throw Error(r(468, t));
                    }
                    a[Ke] = e, Qe(a), t = a;
                  }
                  e.stateNode = t;
                }
              else
                tt || hs(u, e.type, e.stateNode);
            else
              e.stateNode = lh(
                u,
                l,
                e.memoizedProps
              );
          else
            n !== l ? (n === null ? (t = a.stateNode, t === null || Oe || t.parentNode.removeChild(t)) : n.count--, l === null ? tt || hs(u, e.type, e.stateNode) : lh(u, l, e.memoizedProps)) : l === null && e.stateNode !== null && Eo(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        break;
      case 27:
        Et(t, e, l), pt(e), n & 512 && (Oe || a === null || ft(a, a.return)), a !== null && n & 4 && Eo(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (u = Ol, Ol = !1, Et(t, e, l), Ol = u, pt(e), n & 512 && (Oe || a === null || ft(a, a.return)), e.flags & 32) {
          t = e.stateNode;
          try {
            jl(t, ""), Se = !0;
          } catch (C) {
            xe(e, e.return, C);
          }
        }
        n & 4 && e.stateNode != null && (t = e.memoizedProps, Eo(
          e,
          t,
          a !== null ? a.memoizedProps : t
        )), n & 1024 && (xo = !0);
        break;
      case 6:
        if (Et(t, e, l), pt(e), n & 4) {
          if (e.stateNode === null)
            throw Error(r(162));
          t = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = t, Se = !0;
          } catch (C) {
            xe(e, e.return, C);
          }
        }
        break;
      case 3:
        if (Se = !1, gf = null, u = ul, ul = bi(t.containerInfo), Et(t, e, l), ul = u, pt(e), n & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            du(t.containerInfo);
          } catch (C) {
            xe(e, e.return, C);
          }
        xo && (xo = !1, $0(e)), Se = !1;
        break;
      case 4:
        n = Ol, Ol = tt, a = Du(), u = ul, ul = bi(
          e.stateNode.containerInfo
        ), Et(t, e, l), pt(e), ul = u, Se && oi && (Fr = !0), Se = a, Ol = n;
        break;
      case 12:
        Et(t, e, l), pt(e);
        break;
      case 31:
        Et(t, e, l), pt(e), n & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, tf(e, t)));
        break;
      case 13:
        Et(t, e, l), pt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (nf = yt()), n & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, tf(e, t)));
        break;
      case 22:
        u = e.memoizedState !== null, c = a !== null && a.memoizedState !== null;
        var d = tt, y = Oe, p = Ol;
        tt = d || u, Ol = p || u, Oe = y || c, Et(t, e, l), Oe = y, Ol = p, tt = d, pt(e), n & 8192 && (t = e.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, !u || a === null || c || tt || Oe || (t = c || Oe, l = tt, a = Oe, tt = u || tt, Oe = t, _a(e, 2), tt = l, Oe = a), !u && Ol || Mo(e, u)), n & 4 && (t = e.updateQueue, t !== null && (l = t.retryQueue, l !== null && (t.retryQueue = null, tf(e, l))));
        break;
      case 19:
        Et(t, e, l), pt(e), n & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, tf(e, t)));
        break;
      case 30:
        n & 512 && (Oe || a === null || ft(a, a.return)), n = Du(), u = oi, c = (l & 335544064) === l, d = e.memoizedProps, oi = c && Vl(
          d.default,
          d.update
        ) !== "none", Et(t, e, l), pt(e), c && a !== null && Se && (e.flags |= 4), oi = u, Se = n;
        break;
      case 21:
        break;
      case 7:
        n & 512 && (Oe || a === null || ft(a, a.return)), a && a.stateNode !== null && (a.stateNode._fragmentFiber = e);
      default:
        Et(t, e, l), pt(e);
    }
  }
  function pt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (H0(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var n = e.return; n !== null; ) {
          if (So(n)) {
            var u = n.stateNode;
            a === null ? a = [u] : a.push(u);
          }
          if (go(n)) break;
          n = n.return;
        }
        var c = a;
        if (l == null) throw Error(r(160));
        switch (l.tag) {
          case 27:
            var d = l.stateNode, y = po(e);
            Wr(
              e,
              y,
              d,
              c
            );
            break;
          case 5:
            var p = l.stateNode;
            l.flags & 32 && (jl(p, ""), l.flags &= -33);
            var C = po(e);
            Wr(
              e,
              C,
              p,
              c
            );
            break;
          case 3:
          case 4:
            var B = l.stateNode.containerInfo, b = po(e);
            To(
              e,
              b,
              B,
              c
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (O) {
        xe(e, e.return, O);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function $0(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        $0(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, su = !0, t.reset(), su = !1), e = e.sibling;
      }
  }
  function kn(e, t) {
    if (t.subtreeFlags & 9270)
      for (t = t.child; t !== null; )
        I0(t, e), t = t.sibling;
    else X0(t);
  }
  function I0(e, t) {
    var l = e.alternate;
    if (l === null) Ro(e, !1);
    else
      switch (e.tag) {
        case 3:
          if (zo = _l = !1, q0(), kn(t, e), !_l && !Fr) {
            if (e = Tl, e !== null)
              for (var a = 0; a < e.length; a += 3) {
                l = e[a];
                var n = e[a + 1];
                Yy(l, e[a + 2]), l = l.ownerDocument.documentElement, l !== null && l.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + n + ")"
                  }
                );
              }
            e = t.containerInfo, e = e.nodeType === 9 ? e.documentElement : e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "" && (e.style.viewTransitionName = "none", e.animate(
              { opacity: [0, 0], pointerEvents: ["none", "none"] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-group(root)"
              }
            ), e.animate(
              { width: [0, 0], height: [0, 0] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition"
              }
            )), zo = !0;
          }
          Tl = null;
          break;
        case 5:
          kn(t, e);
          break;
        case 4:
          a = _l, _l = !1, kn(t, e), _l && (Fr = !0), _l = a;
          break;
        case 22:
          e.memoizedState === null && (l.memoizedState !== null ? Ro(e, !1) : kn(t, e));
          break;
        case 30:
          a = _l, n = q0(), _l = !1, kn(t, e), _l && (e.flags |= 4);
          var u = e.memoizedProps, c = e.stateNode;
          t = Xl(u, c), c = Xl(l.memoizedProps, c);
          var d = Vl(u.default, u.update);
          d === "none" ? t = !1 : (u = l.memoizedState, l.memoizedState = null, l = e.child, _t = 0, t = Co(
            e,
            l,
            t,
            c,
            d,
            u,
            !0
          ), _t !== (u === null ? 0 : u.length) && (e.flags |= 32)), (e.flags & 4) !== 0 && t ? (tu(
            e,
            e.memoizedProps.onUpdate
          ), Tl = n) : n !== null && (n.push.apply(n, Tl), Tl = n), _l = (e.flags & 32) !== 0 ? !0 : a;
          break;
        default:
          kn(t, e);
      }
  }
  function Al(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Q0(e, t.alternate, t), t = t.sibling;
  }
  function _a(e, t) {
    for (e = e.child; e !== null; ) {
      var l = e, a = t;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Oa(4, l, l.return), _a(
            l,
            a
          );
          break;
        case 1:
          ft(l, l.return);
          var n = l.stateNode;
          typeof n.componentWillUnmount == "function" && B0(
            l,
            l.return,
            n
          ), _a(
            l,
            a
          );
          break;
        case 27:
          (a & 2) !== 0 && $y(
            l.stateNode,
            l.type,
            l.memoizedProps
          );
        case 5:
          ft(l, l.return), l.tag !== 5 && l.tag !== 27 || ci(l), _a(
            l,
            a
          );
          break;
        case 6:
          ci(l);
          break;
        case 26:
          ft(l, l.return), n = l.stateNode, l.memoizedState !== null || n === null || Oe || n.parentNode.removeChild(n), _a(
            l,
            a
          );
          break;
        case 22:
          l.memoizedState === null && _a(
            l,
            a
          );
          break;
        case 30:
          ft(l, l.return), _a(
            l,
            a
          );
          break;
        case 7:
          ft(l, l.return);
        default:
          _a(
            l,
            a
          );
      }
      e = e.sibling;
    }
  }
  function il(e, t, l) {
    for (l = (t.subtreeFlags & 8772) !== 0 ? l : l & -2, t = t.child; t !== null; ) {
      var a = t.alternate, n = e, u = t, c = u.flags, d = (l & 1) !== 0;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          il(
            n,
            u,
            l
          ), fi(4, u);
          break;
        case 1:
          if (il(
            n,
            u,
            l
          ), a = u, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (C) {
              xe(a, a.return, C);
            }
          if (a = u, n = a.updateQueue, n !== null) {
            var y = a.stateNode;
            try {
              var p = n.shared.hiddenCallbacks;
              if (p !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < p.length; n++)
                  Ev(p[n], y);
            } catch (C) {
              xe(a, a.return, C);
            }
          }
          d && c & 64 && N0(u), pl(u, u.return);
          break;
        case 27:
          (l & 2) !== 0 && w0(u);
        case 5:
          u.tag !== 5 && u.tag !== 27 || U0(u), il(
            n,
            u,
            l
          ), d && a === null && c & 4 && bo(u), pl(u, u.return);
          break;
        case 6:
          U0(u);
          break;
        case 26:
          y = u.stateNode, u.memoizedState !== null || y === null || tt || hs(
            bi(y.ownerDocument),
            u.type,
            y
          ), il(
            n,
            u,
            l
          ), d && a === null && c & 4 && bo(u), pl(u, u.return);
          break;
        case 12:
          il(
            n,
            u,
            l
          );
          break;
        case 31:
          il(
            n,
            u,
            l
          ), d && c & 4 && k0(n, u);
          break;
        case 13:
          il(
            n,
            u,
            l
          ), d && c & 4 && W0(n, u);
          break;
        case 22:
          u.memoizedState === null && il(
            n,
            u,
            l
          ), pl(u, u.return);
          break;
        case 30:
          il(
            n,
            u,
            l
          ), pl(u, u.return);
          break;
        case 7:
          pl(u, u.return);
        default:
          il(
            n,
            u,
            l
          );
      }
      t = t.sibling;
    }
  }
  function No(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && Wu(l));
  }
  function Bo(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Wu(e));
  }
  function $t(e, t, l, a) {
    var n = (l & 335544064) === l;
    if (t.subtreeFlags & (n ? 10262 : 10256))
      for (t = t.child; t !== null; )
        F0(
          e,
          t,
          l,
          a
        ), t = t.sibling;
    else n && G0(t);
  }
  function F0(e, t, l, a) {
    var n = (l & 335544064) === l;
    n && t.alternate === null && t.return !== null && t.return.alternate !== null && Ir(t);
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        $t(
          e,
          t,
          l,
          a
        ), u & 2048 && fi(9, t);
        break;
      case 1:
        $t(
          e,
          t,
          l,
          a
        );
        break;
      case 3:
        $t(
          e,
          t,
          l,
          a
        ), n && zo && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), u & 2048 && (u = null, t.alternate !== null && (u = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== u && (t.refCount++, u != null && Wu(u)));
        break;
      case 12:
        if (u & 2048) {
          $t(
            e,
            t,
            l,
            a
          ), u = t.stateNode;
          try {
            var c = t.memoizedProps, d = c.id, y = c.onPostCommit;
            typeof y == "function" && y(
              d,
              t.alternate === null ? "mount" : "update",
              u.passiveEffectDuration,
              -0
            );
          } catch (p) {
            xe(t, t.return, p);
          }
        } else
          $t(
            e,
            t,
            l,
            a
          );
        break;
      case 31:
        $t(
          e,
          t,
          l,
          a
        );
        break;
      case 13:
        $t(
          e,
          t,
          l,
          a
        );
        break;
      case 23:
        break;
      case 22:
        c = t.stateNode, d = t.alternate, t.memoizedState !== null ? (n && d !== null && d.memoizedState === null && Ir(d), c._visibility & 2 ? $t(
          e,
          t,
          l,
          a
        ) : si(
          e,
          t
        )) : (n && d !== null && d.memoizedState !== null && Ir(t), c._visibility & 2 ? $t(
          e,
          t,
          l,
          a
        ) : (c._visibility |= 2, Wn(
          e,
          t,
          l,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        ))), u & 2048 && No(d, t);
        break;
      case 24:
        $t(
          e,
          t,
          l,
          a
        ), u & 2048 && Bo(t.alternate, t);
        break;
      case 30:
        n && (u = t.alternate, u !== null && (Rl(u.child, !0), Rl(t.child, !0))), $t(
          e,
          t,
          l,
          a
        );
        break;
      default:
        $t(
          e,
          t,
          l,
          a
        );
    }
  }
  function Wn(e, t, l, a, n) {
    for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, c = t, d = l, y = a, p = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Wn(
            u,
            c,
            d,
            y,
            n
          ), fi(8, c);
          break;
        case 23:
          break;
        case 22:
          var C = c.stateNode;
          c.memoizedState !== null ? C._visibility & 2 ? Wn(
            u,
            c,
            d,
            y,
            n
          ) : si(
            u,
            c
          ) : (C._visibility |= 2, Wn(
            u,
            c,
            d,
            y,
            n
          )), n && p & 2048 && No(
            c.alternate,
            c
          );
          break;
        case 24:
          Wn(
            u,
            c,
            d,
            y,
            n
          ), n && p & 2048 && Bo(c.alternate, c);
          break;
        default:
          Wn(
            u,
            c,
            d,
            y,
            n
          );
      }
      t = t.sibling;
    }
  }
  function si(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e, a = t, n = a.flags;
        switch (a.tag) {
          case 22:
            si(l, a), n & 2048 && No(
              a.alternate,
              a
            );
            break;
          case 24:
            si(l, a), n & 2048 && Bo(a.alternate, a);
            break;
          default:
            si(l, a);
        }
        t = t.sibling;
      }
  }
  var on = 8192;
  function sn(e, t, l) {
    if (e.subtreeFlags & on)
      for (e = e.child; e !== null; )
        ey(
          e,
          t,
          l
        ), e = e.sibling;
  }
  function ey(e, t, l) {
    switch (e.tag) {
      case 26:
        sn(
          e,
          t,
          l
        ), e.flags & on && (e.memoizedState !== null ? t1(
          l,
          ul,
          e.memoizedState,
          e.memoizedProps
        ) : (e = e.stateNode, (t & 335544128) === t && rh(l, e)));
        break;
      case 5:
        sn(
          e,
          t,
          l
        ), e.flags & on && (e = e.stateNode, (t & 335544128) === t && rh(l, e));
        break;
      case 3:
      case 4:
        var a = ul;
        ul = bi(e.stateNode.containerInfo), sn(
          e,
          t,
          l
        ), ul = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = on, on = 16777216, sn(
          e,
          t,
          l
        ), on = a) : sn(
          e,
          t,
          l
        ));
        break;
      case 30:
        if ((e.flags & on) !== 0 && (a = e.memoizedProps.name, a != null && a !== "auto")) {
          var n = e.stateNode;
          n.paired = null, Ut === null && (Ut = /* @__PURE__ */ new Map()), Ut.set(a, n);
        }
        sn(
          e,
          t,
          l
        );
        break;
      default:
        sn(
          e,
          t,
          l
        );
    }
  }
  function ty(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function di(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          lt = a, ay(
            a,
            e
          );
        }
      ty(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        ly(e), e = e.sibling;
  }
  function ly(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        di(e), e.flags & 2048 && Oa(9, e, e.return);
        break;
      case 3:
        di(e);
        break;
      case 12:
        di(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, lf(e)) : di(e);
        break;
      default:
        di(e);
    }
  }
  function lf(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          lt = a, ay(
            a,
            e
          );
        }
      ty(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Oa(8, t, t.return), lf(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, lf(t));
          break;
        default:
          lf(t);
      }
      e = e.sibling;
    }
  }
  function ay(e, t) {
    for (; lt !== null; ) {
      var l = lt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Oa(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Wu(l.memoizedState.cache);
      }
      if (a = l.child, a !== null) a.return = l, lt = a;
      else
        e: for (l = e; lt !== null; ) {
          a = lt;
          var n = a.sibling, u = a.return;
          if (K0(a), a === l) {
            lt = null;
            break e;
          }
          if (n !== null) {
            n.return = u, lt = n;
            break e;
          }
          lt = u;
        }
    }
  }
  var PS = {
    getCacheForType: function(e) {
      var t = ut(Je), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    },
    cacheSignal: function() {
      return ut(Je).controller.signal;
    }
  }, $S = typeof WeakMap == "function" ? WeakMap : Map, Re = 0, Be = null, ve = null, me = 0, Ce = 0, Ht = null, Aa = !1, Pn = !1, Uo = !1, Il = 0, Xe = 0, Ca = 0, dn = 0, af = 0, wt = 0, $n = 0, vi = null, Ct = null, Ho = !1, nf = 0, ny = 0, uf = 1 / 0, rf = null, xa = null, Ye = 0, rl = null, vn = null, Cl = 0, wo = 0, Lo = null, uy = null, In = null, Fn = null, eu = null, yi = 0, ff = null;
  function Lt() {
    return (Re & 2) !== 0 && me !== 0 ? me & -me : P.T !== null ? Jo() : Ru();
  }
  function iy() {
    if (wt === 0)
      if ((me & 536870912) === 0 || se) {
        var e = Xa;
        Xa <<= 1, (Xa & 3932160) === 0 && (Xa = 262144), wt = e;
      } else wt = 536870912;
    return e = it.current, e !== null && (e.flags |= 32), wt;
  }
  function tu(e, t) {
    if (t != null) {
      var l = e.stateNode, a = l.ref;
      a === null && (a = l.ref = jy(
        Xl(e.memoizedProps, l)
      )), Fn === null && (Fn = []), Fn.push(t.bind(null, a));
    }
  }
  function xt(e, t, l) {
    (e === Be && (Ce === 2 || Ce === 9) || e.cancelPendingCommit !== null) && (lu(e, 0), za(
      e,
      me,
      wt,
      !1
    )), ra(e, l), ((Re & 2) === 0 || e !== Be) && (e === Be && ((Re & 2) === 0 && (dn |= l), Xe === 4 && za(
      e,
      me,
      wt,
      !1
    )), xl(e));
  }
  function ry(e, t, l) {
    if ((Re & 6) !== 0) throw Error(r(327));
    var a = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || ia(e, t), n = a ? eb(e, t) : Yo(e, t, !0), u = a;
    do {
      if (n === 0) {
        Pn && !a && za(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, u && !IS(l)) {
          n = Yo(e, t, !1), u = !1;
          continue;
        }
        if (n === 2) {
          if (u = t, e.errorRecoveryDisabledLanes & u)
            var c = 0;
          else
            c = e.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
          if (c !== 0) {
            t = c;
            e: {
              var d = e;
              n = vi;
              var y = d.current.memoizedState.isDehydrated;
              if (y && (lu(d, c).flags |= 256), c = Yo(
                d,
                c,
                !1
              ), c !== 2 && c !== 6) {
                if (Uo && !y) {
                  d.errorRecoveryDisabledLanes |= u, dn |= u, n = 4;
                  break e;
                }
                u = Ct, Ct = n, u !== null && (Ct === null ? Ct = u : Ct.push.apply(
                  Ct,
                  u
                ));
              }
              n = c;
            }
            if (u = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          lu(e, 0), za(e, t, 0, !0);
          break;
        }
        e: {
          switch (a = e, u = n, u) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t && (t & 62914560) !== t)
                break;
            case 6:
              za(
                a,
                t,
                wt,
                !Aa
              );
              break e;
            case 2:
              Ct = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && (n = nf + 300 - yt(), 10 < n)) {
            if (za(
              a,
              t,
              wt,
              !Aa
            ), Ul(a, 0, !0) !== 0) break e;
            Cl = t, a.timeoutHandle = ns(
              fy.bind(
                null,
                a,
                l,
                Ct,
                rf,
                Ho,
                t,
                wt,
                dn,
                $n,
                Aa,
                u,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break e;
          }
          fy(
            a,
            l,
            Ct,
            rf,
            Ho,
            t,
            wt,
            dn,
            $n,
            Aa,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    xl(e);
  }
  function fy(e, t, l, a, n, u, c, d, y, p, C, B, b, O) {
    e.timeoutHandle = -1;
    var Y = t.subtreeFlags, K = (u & 335544064) === u;
    if (B = null, (K || Y & 8192 || (Y & 16785408) === 16785408) && (B = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Sl
    }, Ut = null, ey(
      t,
      u,
      B
    ), K && (Y = B, K = e.containerInfo, K = (K.nodeType === 9 ? K : K.ownerDocument).__reactViewTransition, K != null && (Y.count++, Y.waitingForViewTransition = !0, Y = Ti.bind(Y), K.finished.then(Y, Y))), Y = (u & 62914560) === u ? nf - yt() : (u & 4194048) === u ? ny - yt() : 0, Y = l1(
      B,
      Y
    ), Y !== null)) {
      Cl = u, e.cancelPendingCommit = Y(
        my.bind(
          null,
          e,
          t,
          u,
          l,
          a,
          n,
          c,
          d,
          y,
          p,
          C,
          B,
          null,
          b,
          O
        )
      ), za(e, u, c, !p);
      return;
    }
    my(
      e,
      t,
      u,
      l,
      a,
      n,
      c,
      d,
      y,
      p,
      C,
      B
    );
  }
  function IS(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var a = 0; a < l.length; a++) {
          var n = l[a], u = n.getSnapshot;
          n = n.value;
          try {
            if (!Nt(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = t.child, t.subtreeFlags & 16384 && l !== null)
        l.return = t, t = l;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function za(e, t, l, a) {
    t = $i(e, t), t &= ~af, t &= ~dn, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var n = t; 0 < n; ) {
      var u = 31 - mt(n), c = 1 << u;
      a[u] = -1, n &= ~c;
    }
    l !== 0 && er(e, l, t);
  }
  function cf() {
    return (Re & 6) === 0 ? (hi(0), !1) : !0;
  }
  function qo() {
    if (ve !== null) {
      if (Ce === 0)
        var e = ve.return;
      else
        e = ve, Kl = Fa = null, Zc(e), Xn = null, Iu = 0, e = ve;
      for (; e !== null; )
        D0(e.alternate, e), e = e.return;
      ve = null;
    }
  }
  function lu(e, t) {
    var l = e.timeoutHandle;
    return l !== -1 && (e.timeoutHandle = -1, Tb(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), Cl = 0, qo(), Be = e, ve = l = Ql(e.current, null), me = t, Ce = 0, Ht = null, Aa = !1, Pn = ia(e, t), Uo = !1, $n = wt = af = dn = Ca = Xe = 0, Ct = vi = null, Ho = !1, Il = $i(e, t), mr(), l;
  }
  function cy(e, t) {
    re = null, P.H = Gr, t === Gn || t === Cr ? (t = mv(), Ce = 3) : t === Nc ? (t = mv(), Ce = 4) : Ce = t === io ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Ht = t, ve === null && (Xe = 1, Xr(
      e,
      Jt(t, e.current)
    ));
  }
  function oy() {
    var e = it.current;
    return e === null ? !0 : (me & 4194048) === me ? dt === null : (me & 62914560) === me || (me & 536870912) !== 0 ? e === dt : !1;
  }
  function sy() {
    var e = P.H;
    return P.H = Gr, e === null ? Gr : e;
  }
  function dy() {
    var e = P.A;
    return P.A = PS, e;
  }
  function of() {
    Xe = 4, Aa || (me & 4194048) !== me && it.current !== null || (Pn = !0), (Ca & 134217727) === 0 && (dn & 134217727) === 0 || Be === null || za(
      Be,
      me,
      wt,
      !1
    );
  }
  function Yo(e, t, l) {
    var a = Re;
    Re |= 2;
    var n = sy(), u = dy();
    (Be !== e || me !== t) && (rf = null, lu(e, t)), t = !1;
    var c = Xe;
    e: do
      try {
        if (Ce !== 0 && ve !== null) {
          var d = ve, y = Ht;
          switch (Ce) {
            case 8:
              qo(), c = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              it.current === null && (t = !0);
              var p = Ce;
              if (Ce = 0, Ht = null, au(e, d, y, p), l && Pn) {
                c = 0;
                break e;
              }
              break;
            default:
              p = Ce, Ce = 0, Ht = null, au(e, d, y, p);
          }
        }
        FS(), c = Xe;
        break;
      } catch (C) {
        cy(e, C);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Kl = Fa = null, Re = a, P.H = n, P.A = u, ve === null && (Be = null, me = 0, mr()), c;
  }
  function FS() {
    for (; ve !== null; ) vy(ve);
  }
  function eb(e, t) {
    var l = Re;
    Re |= 2;
    var a = sy(), n = dy();
    Be !== e || me !== t ? (rf = null, uf = yt() + 500, lu(e, t)) : Pn = ia(
      e,
      t
    );
    e: do
      try {
        if (Ce !== 0 && ve !== null) {
          t = ve;
          var u = Ht;
          t: switch (Ce) {
            case 1:
              Ce = 0, Ht = null, au(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (yv(u)) {
                Ce = 0, Ht = null, yy(t);
                break;
              }
              t = function() {
                Ce !== 2 && Ce !== 9 || Be !== e || (Ce = 7), xl(e);
              }, u.then(t, t);
              break e;
            case 3:
              Ce = 7;
              break e;
            case 4:
              Ce = 5;
              break e;
            case 7:
              yv(u) ? (Ce = 0, Ht = null, yy(t)) : (Ce = 0, Ht = null, au(e, t, u, 7));
              break;
            case 5:
              var c = null;
              switch (ve.tag) {
                case 26:
                  c = ve.memoizedState;
                case 5:
                case 27:
                  var d = ve;
                  if (c ? uh(c) : d.stateNode.complete) {
                    Ce = 0, Ht = null;
                    var y = d.sibling;
                    if (y !== null) ve = y;
                    else {
                      var p = d.return;
                      p !== null ? (ve = p, sf(p)) : ve = null;
                    }
                    break t;
                  }
              }
              Ce = 0, Ht = null, au(e, t, u, 5);
              break;
            case 6:
              Ce = 0, Ht = null, au(e, t, u, 6);
              break;
            case 8:
              qo(), Xe = 6;
              break e;
            default:
              throw Error(r(462));
          }
        }
        tb();
        break;
      } catch (C) {
        cy(e, C);
      }
    while (!0);
    return Kl = Fa = null, P.H = a, P.A = n, Re = l, ve !== null ? 0 : (Be = null, me = 0, mr(), Xe);
  }
  function tb() {
    for (; ve !== null && !$f(); )
      vy(ve);
  }
  function vy(e) {
    var t = z0(e.alternate, e, Il);
    e.memoizedProps = e.pendingProps, t === null ? sf(e) : ve = t;
  }
  function yy(e) {
    var t = e, l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = T0(
          l,
          t,
          t.pendingProps,
          t.type,
          void 0,
          me
        );
        break;
      case 11:
        t = T0(
          l,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          me
        );
        break;
      case 5:
        Zc(t);
        var a = t;
        a === et && (se ? (Tr(a), a.tag === 5 && a.stateNode != null && (we = a.stateNode)) : (Tr(a), se = !0));
      default:
        D0(l, t), t = ve = av(t, Il), t = z0(l, t, Il);
    }
    e.memoizedProps = e.pendingProps, t === null ? sf(e) : ve = t;
  }
  function au(e, t, l, a) {
    Kl = Fa = null, Zc(t), Xn = null, Iu = 0;
    var n = t.return;
    try {
      if (XS(
        e,
        n,
        t,
        l,
        me
      )) {
        Xe = 1, Xr(
          e,
          Jt(l, e.current)
        ), ve = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw ve = n, u;
      Xe = 1, Xr(
        e,
        Jt(l, e.current)
      ), ve = null;
      return;
    }
    t.flags & 32768 ? (se || a === 1 ? e = !0 : Pn || (me & 536870912) !== 0 ? e = !1 : (Aa = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = it.current, a !== null && a.tag === 13 && (a.flags |= 16384))), hy(t, e)) : sf(t);
  }
  function sf(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        hy(
          t,
          Aa
        );
        return;
      }
      e = t.return;
      var l = KS(
        t.alternate,
        t,
        Il
      );
      if (l !== null) {
        ve = l;
        return;
      }
      if (t = t.sibling, t !== null) {
        ve = t;
        return;
      }
      ve = t = e;
    } while (t !== null);
    Xe === 0 && (Xe = 5);
  }
  function hy(e, t) {
    do {
      var l = JS(e.alternate, e);
      if (l !== null) {
        l.flags &= 32767, ve = l;
        return;
      }
      if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
        ve = e;
        return;
      }
      ve = e = l;
    } while (e !== null);
    Xe = 6, ve = null;
  }
  function my(e, t, l, a, n, u, c, d, y, p, C, B) {
    e.cancelPendingCommit = null;
    do
      df();
    while (Ye !== 0);
    if ((Re & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      e === Be && (ve = Be = null, me = 0), vn = t, rl = e, Cl = l, Lo = n, uy = a, lb(
        e,
        t,
        l,
        c,
        d,
        y,
        B
      );
    }
  }
  function lb(e, t, l, a, n, u, c) {
    var d = t.lanes | t.childLanes;
    if (wo = d, d |= bc, Z(
      e,
      l,
      d,
      a,
      n,
      u
    ), Fn = null, (l & 335544064) === l ? (eu = MS(e), a = 10262) : (eu = null, a = 10256), (t.subtreeFlags & a) !== 0 || (t.flags & a) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, fb(Tn, function() {
      return Vo(), null;
    })) : (e.callbackNode = null, e.callbackPriority = 0), Pr = !1, a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
      a = P.T, P.T = null, n = ae.p, ae.p = 2, u = Re, Re |= 4;
      try {
        kS(e, t, l);
      } finally {
        Re = u, ae.p = n, P.T = a;
      }
    }
    Ye = 1, Pr ? In = xb(
      c,
      e.containerInfo,
      eu,
      jo,
      Go,
      nb,
      Xo,
      Vo,
      ab
    ) : (jo(), Go(), Xo());
  }
  function ab(e) {
    if (Ye !== 0) {
      var t = rl.onRecoverableError;
      t(e, { componentStack: null });
    }
  }
  function nb() {
    Ye === 3 && (Ye = 0, I0(vn, rl), Ye = 4);
  }
  function jo() {
    if (Ye === 1) {
      Ye = 0;
      var e = rl, t = vn, l = Cl, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = P.T, P.T = null;
        var n = ae.p;
        ae.p = 2;
        var u = Re;
        Re |= 4;
        try {
          oi = Fr = !1, P0(t, e, l), l = ts;
          var c = Jd(e.containerInfo), d = l.focusedElem, y = l.selectionRange;
          if (c !== d && d && d.ownerDocument && Kd(
            d.ownerDocument.documentElement,
            d
          )) {
            if (y !== null && yc(d)) {
              var p = y.start, C = y.end;
              if (C === void 0 && (C = p), "selectionStart" in d)
                d.selectionStart = p, d.selectionEnd = Math.min(
                  C,
                  d.value.length
                );
              else {
                var B = d.ownerDocument || document, b = B && B.defaultView || window;
                if (b.getSelection) {
                  var O = b.getSelection(), Y = d.textContent.length, K = Math.min(y.start, Y), fe = y.end === void 0 ? K : Math.min(y.end, Y);
                  !O.extend && K > fe && (c = fe, fe = K, K = c);
                  var E = Zd(
                    d,
                    K
                  ), g = Zd(
                    d,
                    fe
                  );
                  if (E && g && (O.rangeCount !== 1 || O.anchorNode !== E.node || O.anchorOffset !== E.offset || O.focusNode !== g.node || O.focusOffset !== g.offset)) {
                    var R = B.createRange();
                    R.setStart(E.node, E.offset), O.removeAllRanges(), K > fe ? (O.addRange(R), O.extend(g.node, g.offset)) : (R.setEnd(g.node, g.offset), O.addRange(R));
                  }
                }
              }
            }
            for (B = [], O = d; O = O.parentNode; )
              O.nodeType === 1 && B.push({
                element: O,
                left: O.scrollLeft,
                top: O.scrollTop
              });
            for (typeof d.focus == "function" && d.focus(), d = 0; d < B.length; d++) {
              var N = B[d];
              N.element.scrollLeft = N.left, N.element.scrollTop = N.top;
            }
          }
          su = !!es, ts = es = null;
        } finally {
          Re = u, ae.p = n, P.T = a;
        }
      }
      e.current = t, Ye = 2;
    }
  }
  function Go() {
    if (Ye === 2) {
      Ye = 0;
      var e = rl, t = vn, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = P.T, P.T = null;
        var a = ae.p;
        ae.p = 2;
        var n = Re;
        Re |= 4;
        try {
          Q0(e, t.alternate, t);
        } finally {
          Re = n, ae.p = a, P.T = l;
        }
      }
      Ye = 3;
    }
  }
  function Xo() {
    if (Ye === 4 || Ye === 3) {
      Ye = 0;
      var e = In;
      In = null, Vi();
      var t = rl, l = vn, a = Cl, n = uy, u = (a & 335544064) === a ? 10262 : 10256;
      if ((l.subtreeFlags & u) !== 0 || (l.flags & u) !== 0 ? Ye = 5 : (Ye = 0, vn = rl = null, gy(t, t.pendingLanes)), u = t.pendingLanes, u === 0 && (xa = null), An(a), l = l.stateNode, ht && typeof ht.onCommitFiberRoot == "function")
        try {
          ht.onCommitFiberRoot(
            ua,
            l,
            void 0,
            (l.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        l = P.T, u = ae.p, ae.p = 2, P.T = null;
        try {
          for (var c = t.onRecoverableError, d = 0; d < n.length; d++) {
            var y = n[d];
            c(y.value, {
              componentStack: y.stack
            });
          }
        } finally {
          P.T = l, ae.p = u;
        }
      }
      if (n = Fn, c = eu, eu = null, n !== null && (Fn = null, c === null && (c = []), e !== null))
        for (y = 0; y < n.length; y++)
          l = (0, n[y])(
            c
          ), l !== void 0 && e.finished.finally(l);
      (Cl & 3) !== 0 && df(), xl(t), u = t.pendingLanes, (a & 261930) !== 0 && (u & 42) !== 0 ? t === ff ? yi++ : (yi = 0, ff = t) : (yi = 0, ff = null), hi(0);
    }
  }
  function gy(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Wu(t)));
  }
  function df() {
    return In !== null && (In.skipTransition(), In = null), jo(), Go(), Xo(), Vo();
  }
  function Vo() {
    if (Ye !== 5) return !1;
    var e = rl, t = wo;
    wo = 0;
    var l = An(Cl), a = P.T, n = ae.p;
    try {
      ae.p = 32 > l ? 32 : l, P.T = null, l = Lo, Lo = null;
      var u = rl, c = Cl;
      if (Ye = 0, vn = rl = null, Cl = 0, (Re & 6) !== 0) throw Error(r(331));
      var d = Re;
      if (Re |= 4, ly(u.current), F0(
        u,
        u.current,
        c,
        l
      ), Re = d, hi(0, !1), ht && typeof ht.onPostCommitFiberRoot == "function")
        try {
          ht.onPostCommitFiberRoot(ua, u);
        } catch {
        }
      return !0;
    } finally {
      ae.p = n, P.T = a, gy(e, t);
    }
  }
  function Sy(e, t, l) {
    t = Jt(l, t), t = uo(e.stateNode, t, 2), e = Ea(e, t, 2), e !== null && (ra(e, 2), xl(e));
  }
  function xe(e, t, l) {
    if (e.tag === 3)
      Sy(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Sy(
            t,
            e,
            l
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (xa === null || !xa.has(a))) {
            e = Jt(l, e), l = y0(2), a = Ea(t, l, 2), a !== null && (h0(
              l,
              a,
              t,
              e
            ), ra(a, 2), xl(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Qo(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new $S();
      var n = /* @__PURE__ */ new Set();
      a.set(t, n);
    } else
      n = a.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(t, n));
    n.has(l) || (Uo = !0, n.add(l), e = ub.bind(null, e, t, l), t.then(e, e));
  }
  function ub(e, t, l) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Be === e && (me & l) === l && ((Xe === 4 || Xe === 3 && (me & 62914560) === me && 300 > yt() - nf) && (Re & 2) === 0 ? lu(e, 0) : af |= l, $n === me && ($n = 0)), xl(e);
  }
  function by(e, t) {
    t === 0 && (t = Fi()), e = Pa(e, t), e !== null && (ra(e, t), xl(e));
  }
  function ib(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), by(e, l);
  }
  function rb(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode, n = e.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    a !== null && a.delete(t), by(e, l);
  }
  function fb(e, t) {
    return En(e, t);
  }
  var nu = null, uu = null, Zo = !1, vf = !1, Ko = !1, Ma = 0;
  function xl(e) {
    e !== uu && e.next === null && (uu === null ? nu = uu = e : uu = uu.next = e), vf = !0, Zo || (Zo = !0, ob());
  }
  function hi(e, t) {
    if (!Ko && vf) {
      Ko = !0;
      do
        for (var l = !1, a = nu; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var c = a.suspendedLanes, d = a.pingedLanes;
              u = (1 << 31 - mt(42 | e) + 1) - 1, u &= n & ~(c & ~d), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (l = !0, Ry(a, u));
          } else
            u = me, u = Ul(
              a,
              a === Be ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || ia(a, u) || (l = !0, Ry(a, u));
          a = a.next;
        }
      while (l);
      Ko = !1;
    }
  }
  function cb() {
    Ey();
  }
  function Ey() {
    vf = Zo = !1;
    var e = 0;
    Ma !== 0 && pb() && (e = Ma);
    for (var t = yt(), l = null, a = nu; a !== null; ) {
      var n = a.next, u = py(a, t);
      u === 0 ? (a.next = null, l === null ? nu = n : l.next = n, n === null && (uu = l)) : (l = a, (e !== 0 || (u & 3) !== 0) && (vf = !0)), a = n;
    }
    Ye !== 0 && Ye !== 5 || hi(e), Ma !== 0 && (Ma = 0);
  }
  function py(e, t) {
    for (var l = e.suspendedLanes, a = e.pingedLanes, n = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var c = 31 - mt(u), d = 1 << c, y = n[c];
      y === -1 ? ((d & l) === 0 || (d & a) !== 0) && (n[c] = Ii(d, t)) : y <= t && (e.expiredLanes |= d), u &= ~d;
    }
    if (t = Be, l = me, l = Ul(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, l === 0 || e === t && (Ce === 2 || Ce === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && pn(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || ia(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (a !== null && pn(a), An(l)) {
        case 2:
        case 8:
          l = pu;
          break;
        case 32:
          l = Tn;
          break;
        case 268435456:
          l = Ji;
          break;
        default:
          l = Tn;
      }
      return a = Ty.bind(null, e), l = En(l, a), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return a !== null && a !== null && pn(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Ty(e, t) {
    if (Ye !== 0 && Ye !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (df() && e.callbackNode !== l)
      return null;
    var a = me;
    return a = Ul(
      e,
      e === Be ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (ry(e, a, t), py(e, yt()), e.callbackNode != null && e.callbackNode === l ? Ty.bind(null, e) : null);
  }
  function Ry(e, t) {
    if (df()) return null;
    ry(e, t, !0);
  }
  function ob() {
    Rb(function() {
      (Re & 6) !== 0 ? En(
        Zi,
        cb
      ) : Ey();
    });
  }
  function Jo() {
    if (Ma === 0) {
      var e = ln;
      e === 0 && (e = Rn, Rn <<= 1, (Rn & 261888) === 0 && (Rn = 256)), Ma = e;
    }
    return Ma;
  }
  function Oy(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : fr(e);
  }
  function sb(e, t, l, a, n) {
    if (t === "submit" && l && l.stateNode === n) {
      var u = Oy(
        (n[nt] || null).action
      ), c = a.submitter;
      c && (t = (t = c[nt] || null) ? Oy(t.formAction) : c.getAttribute("formAction"), t !== null && (u = t, c = null));
      var d = new dr(
        "action",
        "action",
        null,
        a,
        n
      );
      e.push({
        event: d,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Ma !== 0) {
                  var y = new FormData(n, c);
                  eo(
                    l,
                    {
                      pending: !0,
                      data: y,
                      method: n.method,
                      action: u
                    },
                    null,
                    y
                  );
                }
              } else
                typeof u == "function" && (d.preventDefault(), y = new FormData(n, c), eo(
                  l,
                  {
                    pending: !0,
                    data: y,
                    method: n.method,
                    action: u
                  },
                  u,
                  y
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var ko = 0; ko < Sc.length; ko++) {
    var Wo = Sc[ko], db = Wo.toLowerCase(), vb = Wo[0].toUpperCase() + Wo.slice(1);
    al(
      db,
      "on" + vb
    );
  }
  al(Pd, "onAnimationEnd"), al($d, "onAnimationIteration"), al(Id, "onAnimationStart"), al("dblclick", "onDoubleClick"), al("focusin", "onFocus"), al("focusout", "onBlur"), al(TS, "onTransitionRun"), al(RS, "onTransitionStart"), al(OS, "onTransitionCancel"), al(Fd, "onTransitionEnd"), Yl("onMouseEnter", ["mouseout", "mouseover"]), Yl("onMouseLeave", ["mouseout", "mouseover"]), Yl("onPointerEnter", ["pointerout", "pointerover"]), Yl("onPointerLeave", ["pointerout", "pointerover"]), gl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), gl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), gl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), gl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), gl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), gl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var mi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), yb = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mi)
  );
  function _y(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l], n = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var c = a.length - 1; 0 <= c; c--) {
            var d = a[c], y = d.instance, p = d.currentTarget;
            if (d = d.listener, y !== u && n.isPropagationStopped())
              break e;
            u = d, n.currentTarget = p;
            try {
              u(n);
            } catch (C) {
              hr(C);
            }
            n.currentTarget = null, u = y;
          }
        else
          for (c = 0; c < a.length; c++) {
            if (d = a[c], y = d.instance, p = d.currentTarget, d = d.listener, y !== u && n.isPropagationStopped())
              break e;
            u = d, n.currentTarget = p;
            try {
              u(n);
            } catch (C) {
              hr(C);
            }
            n.currentTarget = null, u = y;
          }
      }
    }
  }
  function ye(e, t) {
    var l = t[_u];
    l === void 0 && (l = t[_u] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    l.has(a) || (Ay(t, e, 2, !1), l.add(a));
  }
  function Po(e, t, l) {
    var a = 0;
    t && (a |= 4), Ay(
      l,
      e,
      a,
      t
    );
  }
  var yf = "_reactListening" + Math.random().toString(36).slice(2);
  function $o(e) {
    if (!e[yf]) {
      e[yf] = !0, Cn.forEach(function(l) {
        l !== "selectionchange" && (yb.has(l) || Po(l, !1, e), Po(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[yf] || (t[yf] = !0, Po("selectionchange", !1, t));
    }
  }
  function Ay(e, t, l, a) {
    switch (hh(t)) {
      case 2:
        var n = i1;
        break;
      case 8:
        n = r1;
        break;
      default:
        n = gs;
    }
    l = n.bind(
      null,
      t,
      l,
      e
    ), n = void 0, !nc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), a ? n !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: n
    }) : e.addEventListener(t, l, !0) : n !== void 0 ? e.addEventListener(t, l, {
      passive: n
    }) : e.addEventListener(t, l, !1);
  }
  function Io(e, t, l, a, n) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (; ; ) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var d = a.stateNode.containerInfo;
          if (d === n) break;
          if (c === 4)
            for (c = a.return; c !== null; ) {
              var y = c.tag;
              if ((y === 3 || y === 4) && c.stateNode.containerInfo === n)
                return;
              c = c.return;
            }
          for (; d !== null; ) {
            if (c = ml(d), c === null) return;
            if (y = c.tag, y === 5 || y === 6 || y === 26 || y === 27) {
              a = u = c;
              continue e;
            }
            d = d.parentNode;
          }
        }
        a = a.return;
      }
    Ad(function() {
      var p = u, C = lc(l), B = [];
      e: {
        var b = ev.get(e);
        if (b !== void 0) {
          var O = dr, Y = e;
          switch (e) {
            case "keypress":
              if (or(l) === 0) break e;
            case "keydown":
            case "keyup":
              O = Ig;
              break;
            case "focusin":
              Y = "focus", O = fc;
              break;
            case "focusout":
              Y = "blur", O = fc;
              break;
            case "beforeblur":
            case "afterblur":
              O = fc;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              O = zd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              O = jg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              O = aS;
              break;
            case Pd:
            case $d:
            case Id:
              O = Vg;
              break;
            case Fd:
              O = uS;
              break;
            case "scroll":
            case "scrollend":
              O = qg;
              break;
            case "wheel":
              O = rS;
              break;
            case "copy":
            case "cut":
            case "paste":
              O = Zg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              O = Dd;
              break;
            case "submit":
              O = tS;
              break;
            case "toggle":
            case "beforetoggle":
              O = cS;
          }
          var K = (t & 4) !== 0, fe = !K && (e === "scroll" || e === "scrollend"), E = K ? b !== null ? b + "Capture" : null : b;
          K = [];
          for (var g = p, R; g !== null; ) {
            var N = g;
            if (R = N.stateNode, N = N.tag, N !== 5 && N !== 26 && N !== 27 || R === null || E === null || (N = qu(g, E), N != null && K.push(
              gi(g, N, R)
            )), fe) break;
            g = g.return;
          }
          0 < K.length && (b = new O(
            b,
            Y,
            null,
            l,
            C
          ), B.push({ event: b, listeners: K }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (O = e === "mouseover" || e === "pointerover", b = e === "mouseout" || e === "pointerout", O && l !== tc && (Y = l.relatedTarget || l.fromElement) && (ml(Y) || Y[wl]))
            break e;
          (b || O) && (Y = C.window === C ? C : (O = C.ownerDocument) ? O.defaultView || O.parentWindow : window, b ? (O = l.relatedTarget || l.toElement, b = p, O = O ? ml(O) : null, O !== null && (fe = v(O), K = O.tag, O !== fe || K !== 5 && K !== 27 && K !== 6) && (O = null)) : (b = null, O = p), b !== O && (K = zd, N = "onMouseLeave", E = "onMouseEnter", g = "mouse", (e === "pointerout" || e === "pointerover") && (K = Dd, N = "onPointerLeave", E = "onPointerEnter", g = "pointer"), fe = b == null ? Y : ca(b), R = O == null ? Y : ca(O), Y = new K(
            N,
            g + "leave",
            b,
            l,
            C
          ), Y.target = fe, Y.relatedTarget = R, N = null, ml(C) === p && (K = new K(
            E,
            g + "enter",
            O,
            l,
            C
          ), K.target = R, K.relatedTarget = fe, N = K), fe = N, K = b && O ? J(
            b,
            O,
            hb
          ) : null, b !== null && Cy(
            B,
            Y,
            b,
            K,
            !1
          ), O !== null && fe !== null && Cy(
            B,
            fe,
            O,
            K,
            !0
          )));
        }
        e: {
          if (b = p ? ca(p) : window, O = b.nodeName && b.nodeName.toLowerCase(), O === "select" || O === "input" && b.type === "file")
            var X = Yd;
          else if (Ld(b))
            if (jd)
              X = bS;
            else {
              X = gS;
              var ge = mS;
            }
          else
            O = b.nodeName, !O || O.toLowerCase() !== "input" || b.type !== "checkbox" && b.type !== "radio" ? p && ec(p.elementType) && (X = Yd) : X = SS;
          if (X && (X = X(e, p))) {
            qd(
              B,
              X,
              l,
              C
            );
            break e;
          }
          ge && ge(e, b, p);
        }
        switch (ge = p ? ca(p) : window, e) {
          case "focusin":
            (Ld(ge) || ge.contentEditable === "true") && (Bn = ge, hc = p, Ku = null);
            break;
          case "focusout":
            Ku = hc = Bn = null;
            break;
          case "mousedown":
            mc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            mc = !1, kd(B, l, C);
            break;
          case "selectionchange":
            if (pS) break;
          case "keydown":
          case "keyup":
            kd(B, l, C);
        }
        var I;
        if (oc)
          e: {
            switch (e) {
              case "compositionstart":
                var le = "onCompositionStart";
                break e;
              case "compositionend":
                le = "onCompositionEnd";
                break e;
              case "compositionupdate":
                le = "onCompositionUpdate";
                break e;
            }
            le = void 0;
          }
        else
          Nn ? Hd(e, l) && (le = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (le = "onCompositionStart");
        le && (Nd && l.locale !== "ko" && (Nn || le !== "onCompositionStart" ? le === "onCompositionEnd" && Nn && (I = Cd()) : (sa = C, uc = "value" in sa ? sa.value : sa.textContent, Nn = !0)), ge = hf(p, le), 0 < ge.length && (le = new Md(
          le,
          e,
          null,
          l,
          C
        ), B.push({ event: le, listeners: ge }), I ? le.data = I : (I = wd(l), I !== null && (le.data = I)))), (I = sS ? dS(e, l) : vS(e, l)) && (le = hf(p, "onBeforeInput"), 0 < le.length && (ge = new Md(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          C
        ), B.push({
          event: ge,
          listeners: le
        }), ge.data = I)), sb(
          B,
          e,
          p,
          l,
          C
        );
      }
      _y(B, t);
    });
  }
  function gi(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    };
  }
  function hf(e, t) {
    for (var l = t + "Capture", a = []; e !== null; ) {
      var n = e, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = qu(e, l), n != null && a.unshift(
        gi(e, n, u)
      ), n = qu(e, t), n != null && a.push(
        gi(e, n, u)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function hb(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Cy(e, t, l, a, n) {
    for (var u = t._reactName, c = []; l !== null && l !== a; ) {
      var d = l, y = d.alternate, p = d.stateNode;
      if (d = d.tag, y !== null && y === a) break;
      d !== 5 && d !== 26 && d !== 27 || p === null || (y = p, n ? (p = qu(l, u), p != null && c.unshift(
        gi(l, p, y)
      )) : n || (p = qu(l, u), p != null && c.push(
        gi(l, p, y)
      ))), l = l.return;
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var mb = /\r\n?/g, gb = /\u0000|\uFFFD/g;
  function xy(e) {
    return (typeof e == "string" ? e : "" + e).replace(mb, `
`).replace(gb, "");
  }
  function zy(e, t) {
    return t = xy(t), xy(e) === t;
  }
  function ze(e, t, l, a, n, u) {
    switch (l) {
      case "children":
        if (typeof a == "string")
          t === "body" || t === "textarea" && a === "" || jl(e, a);
        else if (typeof a == "number" || typeof a == "bigint")
          t !== "body" && jl(e, "" + a);
        else return;
        break;
      case "className":
        Ka(e, "class", a);
        break;
      case "tabIndex":
        Ka(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ka(e, l, a);
        break;
      case "style":
        Od(e, a, u);
        return;
      case "data":
        if (t !== "object") {
          Ka(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        a = fr(a), e.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (l === "formAction" ? (t !== "input" && ze(e, t, "name", n.name, n, null), ze(
            e,
            t,
            "formEncType",
            n.formEncType,
            n,
            null
          ), ze(
            e,
            t,
            "formMethod",
            n.formMethod,
            n,
            null
          ), ze(
            e,
            t,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (ze(e, t, "encType", n.encType, n, null), ze(e, t, "method", n.method, n, null), ze(e, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        a = fr(a), e.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (e.onclick = Sl);
        return;
      case "onScroll":
        a != null && ye("scroll", e);
        return;
      case "onScrollEnd":
        a != null && ye("scrollend", e);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(r(60));
            u?.__html !== l && (e.innerHTML = l);
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        l = fr(a), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          l
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, a) : e.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0 ? e.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, a) : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(l, a) : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(l) : e.setAttribute(l, a);
        break;
      case "popover":
        ye("beforetoggle", e), ye("toggle", e), Za(e, "popover", a);
        break;
      case "xlinkActuate":
        Zt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Zt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Zt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Zt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Zt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Zt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Zt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Zt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Zt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Za(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N")
          l = wg.get(l) || l, Za(e, l, a);
        else return;
    }
    Se = !0;
  }
  function Fo(e, t, l, a, n, u) {
    switch (l) {
      case "style":
        Od(e, a, u);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(r(60));
            u?.__html !== l && (e.innerHTML = l);
          }
        }
        break;
      case "children":
        if (typeof a == "string") jl(e, a);
        else if (typeof a == "number" || typeof a == "bigint")
          jl(e, "" + a);
        else return;
        break;
      case "onScroll":
        a != null && ye("scroll", e);
        return;
      case "onScrollEnd":
        a != null && ye("scrollend", e);
        return;
      case "onClick":
        a != null && (e.onclick = Sl);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!xu.hasOwnProperty(l))
          e: {
            if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), u = l.slice(2, n ? l.length - 7 : void 0), t = e[nt] || null, t = t != null ? t[l] : null, typeof t == "function" && e.removeEventListener(u, t, n), typeof a == "function")) {
              typeof t != "function" && t !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(u, a, n);
              break e;
            }
            Se = !0, l in e ? e[l] = a : a === !0 ? e.setAttribute(l, "") : Za(e, l, a);
          }
        return;
    }
    Se = !0;
  }
  function ct(e, t, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ye("error", e), ye("load", e);
        var a = !1, n = !1, u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var c = l[u];
            if (c != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  ze(e, t, u, c, l, null);
              }
          }
        n && ze(e, t, "srcSet", l.srcSet, l, null), a && ze(e, t, "src", l.src, l, null);
        return;
      case "input":
        ye("invalid", e);
        var d = u = c = n = null, y = null, p = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var C = l[a];
            if (C != null)
              switch (a) {
                case "name":
                  n = C;
                  break;
                case "type":
                  c = C;
                  break;
                case "checked":
                  y = C;
                  break;
                case "defaultChecked":
                  p = C;
                  break;
                case "value":
                  u = C;
                  break;
                case "defaultValue":
                  d = C;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (C != null)
                    throw Error(r(137, t));
                  break;
                default:
                  ze(e, t, a, C, l, null);
              }
          }
        Uu(
          e,
          u,
          d,
          y,
          p,
          c,
          n,
          !1
        );
        return;
      case "select":
        ye("invalid", e), a = c = u = null;
        for (n in l)
          if (l.hasOwnProperty(n) && (d = l[n], d != null))
            switch (n) {
              case "value":
                u = d;
                break;
              case "defaultValue":
                c = d;
                break;
              case "multiple":
                a = d;
              default:
                ze(e, t, n, d, l, null);
            }
        t = u, l = c, e.multiple = !!a, t != null ? oa(e, !!a, t, !1) : l != null && oa(e, !!a, l, !0);
        return;
      case "textarea":
        ye("invalid", e), u = n = a = null;
        for (c in l)
          if (l.hasOwnProperty(c) && (d = l[c], d != null))
            switch (c) {
              case "value":
                a = d;
                break;
              case "defaultValue":
                n = d;
                break;
              case "children":
                u = d;
                break;
              case "dangerouslySetInnerHTML":
                if (d != null) throw Error(r(91));
                break;
              default:
                ze(e, t, c, d, l, null);
            }
        wu(e, a, n, u);
        return;
      case "option":
        for (y in l)
          l.hasOwnProperty(y) && (a = l[y], a != null) && (y === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : ze(e, t, y, a, l, null));
        return;
      case "dialog":
        ye("beforetoggle", e), ye("toggle", e), ye("cancel", e), ye("close", e);
        break;
      case "iframe":
      case "object":
        ye("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < mi.length; a++)
          ye(mi[a], e);
        break;
      case "image":
        ye("error", e), ye("load", e);
        break;
      case "details":
        ye("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        ye("error", e), ye("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (p in l)
          if (l.hasOwnProperty(p) && (a = l[p], a != null))
            switch (p) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                ze(e, t, p, a, l, null);
            }
        return;
      default:
        if (ec(t)) {
          for (C in l)
            l.hasOwnProperty(C) && (a = l[C], a !== void 0 && Fo(
              e,
              t,
              C,
              a,
              l,
              void 0
            ));
          return;
        }
    }
    for (d in l)
      l.hasOwnProperty(d) && (a = l[d], a != null && ze(e, t, d, a, l, null));
  }
  var Sb = {};
  function bb(e, t, l, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null, u = null, c = null, d = null, y = null, p = null, C = null;
        for (O in l) {
          var B = l[O];
          if (l.hasOwnProperty(O) && B != null)
            switch (O) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                y = B;
              default:
                a.hasOwnProperty(O) || ze(e, t, O, null, a, B);
            }
        }
        for (var b in a) {
          var O = a[b];
          if (B = l[b], a.hasOwnProperty(b) && (O != null || B != null))
            switch (b) {
              case "type":
                O !== B && (Se = !0), u = O;
                break;
              case "name":
                O !== B && (Se = !0), n = O;
                break;
              case "checked":
                O !== B && (Se = !0), p = O;
                break;
              case "defaultChecked":
                O !== B && (Se = !0), C = O;
                break;
              case "value":
                O !== B && (Se = !0), c = O;
                break;
              case "defaultValue":
                O !== B && (Se = !0), d = O;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null)
                  throw Error(r(137, t));
                break;
              default:
                O !== B && ze(
                  e,
                  t,
                  b,
                  O,
                  a,
                  B
                );
            }
        }
        zn(
          e,
          c,
          d,
          y,
          p,
          C,
          u,
          n
        );
        return;
      case "select":
        O = c = d = b = null;
        for (u in l)
          if (y = l[u], l.hasOwnProperty(u) && y != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                O = y;
              default:
                a.hasOwnProperty(u) || ze(
                  e,
                  t,
                  u,
                  null,
                  a,
                  y
                );
            }
        for (n in a)
          if (u = a[n], y = l[n], a.hasOwnProperty(n) && (u != null || y != null))
            switch (n) {
              case "value":
                u !== y && (Se = !0), b = u;
                break;
              case "defaultValue":
                u !== y && (Se = !0), d = u;
                break;
              case "multiple":
                u !== y && (Se = !0), c = u;
              default:
                u !== y && ze(
                  e,
                  t,
                  n,
                  u,
                  a,
                  y
                );
            }
        t = d, l = c, a = O, b != null ? oa(e, !!l, b, !1) : !!a != !!l && (t != null ? oa(e, !!l, t, !0) : oa(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        O = b = null;
        for (d in l)
          if (n = l[d], l.hasOwnProperty(d) && n != null && !a.hasOwnProperty(d))
            switch (d) {
              case "value":
                break;
              case "children":
                break;
              default:
                ze(e, t, d, null, a, n);
            }
        for (c in a)
          if (n = a[c], u = l[c], a.hasOwnProperty(c) && (n != null || u != null))
            switch (c) {
              case "value":
                n !== u && (Se = !0), b = n;
                break;
              case "defaultValue":
                n !== u && (Se = !0), O = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(r(91));
                break;
              default:
                n !== u && ze(e, t, c, n, a, u);
            }
        Hu(e, b, O);
        return;
      case "option":
        for (var Y in l)
          b = l[Y], l.hasOwnProperty(Y) && b != null && !a.hasOwnProperty(Y) && (Y === "selected" ? e.selected = !1 : ze(
            e,
            t,
            Y,
            null,
            a,
            b
          ));
        for (y in a)
          b = a[y], O = l[y], a.hasOwnProperty(y) && b !== O && (b != null || O != null) && (y === "selected" ? (b !== O && (Se = !0), e.selected = b && typeof b != "function" && typeof b != "symbol") : ze(
            e,
            t,
            y,
            b,
            a,
            O
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var K in l)
          b = l[K], l.hasOwnProperty(K) && b != null && !a.hasOwnProperty(K) && ze(e, t, K, null, a, b);
        for (p in a)
          if (b = a[p], O = l[p], a.hasOwnProperty(p) && b !== O && (b != null || O != null))
            switch (p) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (b != null)
                  throw Error(r(137, t));
                break;
              default:
                ze(
                  e,
                  t,
                  p,
                  b,
                  a,
                  O
                );
            }
        return;
      default:
        if (ec(t)) {
          for (var fe in l)
            b = l[fe], l.hasOwnProperty(fe) && b !== void 0 && !a.hasOwnProperty(fe) && Fo(
              e,
              t,
              fe,
              void 0,
              a,
              b
            );
          for (C in a)
            b = a[C], O = l[C], !a.hasOwnProperty(C) || b === O || b === void 0 && O === void 0 || Fo(
              e,
              t,
              C,
              b,
              a,
              O
            );
          return;
        }
    }
    for (var E in l)
      b = l[E], l.hasOwnProperty(E) && b != null && !a.hasOwnProperty(E) && ze(e, t, E, null, a, b);
    for (B in a)
      b = a[B], O = l[B], !a.hasOwnProperty(B) || b === O || b == null && O == null || ze(e, t, B, b, a, O);
  }
  function My(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Eb() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
        var n = l[a], u = n.transferSize, c = n.initiatorType, d = n.duration;
        if (u && d && My(c)) {
          for (c = 0, d = n.responseEnd, a += 1; a < l.length; a++) {
            var y = l[a], p = y.startTime;
            if (p > d) break;
            var C = y.transferSize, B = y.initiatorType;
            C && My(B) && (y = y.responseEnd, c += C * (y < d ? 1 : (d - p) / (y - p)));
          }
          if (--a, t += 8 * (u + c) / (n.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var es = null, ts = null;
  function Si(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Dy(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ny(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function By(e, t, l, a) {
    return l = Si(
      l
    ).createElement(e), l[Ke] = a, l[nt] = t, ct(l, e, t), Qe(l), l;
  }
  function ls(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var as = null;
  function pb() {
    var e = window.event;
    return e && e.type === "popstate" ? e === as ? !1 : (as = e, !0) : (as = null, !1);
  }
  var ns = typeof setTimeout == "function" ? setTimeout : void 0, Tb = typeof clearTimeout == "function" ? clearTimeout : void 0, Uy = typeof Promise == "function" ? Promise : void 0, Hy = typeof requestAnimationFrame == "function" ? requestAnimationFrame : ns, Rb = typeof queueMicrotask == "function" ? queueMicrotask : typeof Uy < "u" ? function(e) {
    return Uy.resolve(null).then(e).catch(Ob);
  } : ns;
  function Ob(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Da(e) {
    return e === "head";
  }
  function wy(e, t) {
    var l = t, a = 0;
    do {
      var n = l.nextSibling;
      if (e.removeChild(l), n && n.nodeType === 8)
        if (l = n.data, l === "/$" || l === "/&") {
          if (a === 0) {
            e.removeChild(n), du(t);
            return;
          }
          a--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          a++;
        else if (l === "html")
          ds(
            e.ownerDocument.documentElement
          );
        else if (l === "head") {
          l = e.ownerDocument.head, ds(l);
          for (var u = l.firstChild; u; ) {
            var c = u.nextSibling, d = u.nodeName;
            u[fa] || d === "SCRIPT" || d === "STYLE" || d === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = c;
          }
        } else
          l === "body" && ds(e.ownerDocument.body);
      l = n;
    } while (l);
    du(t);
  }
  function Ly(e, t) {
    var l = e;
    e = 0;
    do {
      var a = l.nextSibling;
      if (l.nodeType === 1 ? t ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (t ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), a && a.nodeType === 8)
        if (l = a.data, l === "/$") {
          if (e === 0) break;
          e--;
        } else
          l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || e++;
      l = a;
    } while (l);
  }
  function qy(e, t, l) {
    if (t = CSS.escape(t) !== t ? "r-" + btoa(t).replace(/=/g, "") : t, e.style.viewTransitionName = t, l != null && (e.style.viewTransitionClass = l), l = getComputedStyle(e), l.display === "inline") {
      if (t = e.getClientRects(), t.length === 1) var a = 1;
      else
        for (var n = a = 0; n < t.length; n++) {
          var u = t[n];
          0 < u.width && 0 < u.height && a++;
        }
      a === 1 && (e = e.style, e.display = t.length === 1 ? "inline-block" : "block", e.marginTop = "-" + l.paddingTop, e.marginBottom = "-" + l.paddingBottom);
    }
  }
  function Yy(e, t) {
    e = e.style, t = t.style;
    var l = t != null ? t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null : null;
    e.viewTransitionName = l == null || typeof l == "boolean" ? "" : ("" + l).trim(), l = t != null ? t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null : null, e.viewTransitionClass = l == null || typeof l == "boolean" ? "" : ("" + l).trim(), e.display === "inline-block" && (t == null ? e.display = e.margin = "" : (l = t.display, e.display = l == null || typeof l == "boolean" ? "" : l, l = t.margin, l != null ? e.margin = l : (l = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], e.marginTop = l == null || typeof l == "boolean" ? "" : l, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], e.marginBottom = t == null || typeof t == "boolean" ? "" : t)));
  }
  function _b(e, t, l) {
    return l = l.ownerDocument.defaultView, {
      rect: e,
      abs: t.position === "absolute" || t.position === "fixed",
      clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
      view: 0 <= e.bottom && 0 <= e.right && e.top <= l.innerHeight && e.left <= l.innerWidth
    };
  }
  function us(e) {
    var t = e.getBoundingClientRect(), l = getComputedStyle(e);
    return _b(t, l, e);
  }
  function Ab(e) {
    return e.documentElement.clientHeight;
  }
  function Cb(e) {
    this.addEventListener("load", e), this.addEventListener("error", e);
  }
  function xb(e, t, l, a, n, u, c, d, y) {
    var p = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var C = p.startViewTransition({
        update: function() {
          var b = p.defaultView, O = b.navigation && b.navigation.transition, Y = p.fonts.status;
          a();
          var K = [];
          if (Y === "loaded" && (Ab(p), p.fonts.status === "loading" && K.push(p.fonts.ready)), Y = K.length, e !== null)
            for (var fe = e.suspenseyImages, E = 0, g = 0; g < fe.length; g++) {
              var R = fe[g];
              if (!R.complete) {
                var N = R.getBoundingClientRect();
                if (0 < N.bottom && 0 < N.right && N.top < b.innerHeight && N.left < b.innerWidth) {
                  if (E += ih(R), E > Sf) {
                    K.length = Y;
                    break;
                  }
                  R = new Promise(
                    Cb.bind(R)
                  ), K.push(R);
                }
              }
            }
          if (0 < K.length)
            return b = Promise.race([
              Promise.all(K),
              new Promise(function(X) {
                return setTimeout(X, 500);
              })
            ]).then(n, n), (O ? Promise.allSettled([O.finished, b]) : b).then(u, u);
          if (n(), O)
            return O.finished.then(
              u,
              u
            );
          u();
        },
        types: l
      });
      p.__reactViewTransition = C;
      var B = [];
      return C.ready.then(
        function() {
          for (var b = p.documentElement.getAnimations({
            subtree: !0
          }), O = 0; O < b.length; O++) {
            var Y = b[O], K = Y.effect, fe = K.pseudoElement;
            if (fe != null && fe.startsWith("::view-transition")) {
              B.push(Y), Y = K.getKeyframes();
              for (var E = fe = void 0, g = !0, R = 0; R < Y.length; R++) {
                var N = Y[R], X = N.width;
                if (fe === void 0) fe = X;
                else if (fe !== X) {
                  g = !1;
                  break;
                }
                if (X = N.height, E === void 0) E = X;
                else if (E !== X) {
                  g = !1;
                  break;
                }
                delete N.width, delete N.height, N.transform === "none" && delete N.transform;
              }
              g && fe !== void 0 && E !== void 0 && (K.setKeyframes(Y), g = getComputedStyle(
                K.target,
                K.pseudoElement
              ), g.width !== fe || g.height !== E) && (g = Y[0], g.width = fe, g.height = E, g = Y[Y.length - 1], g.width = fe, g.height = E, K.setKeyframes(Y));
            }
          }
          c();
        },
        function(b) {
          p.__reactViewTransition === C && (p.__reactViewTransition = null);
          try {
            typeof b == "object" && b !== null && b.name === "InvalidStateError" && (b.message === "View transition was skipped because document visibility state is hidden." || b.message === "Skipping view transition because document visibility state has become hidden." || b.message === "Skipping view transition because viewport size changed." || b.message === "Transition was aborted because of invalid state") && (b = null), b !== null && y(b);
          } finally {
            a(), n(), c();
          }
        }
      ), C.finished.finally(function() {
        for (var b = 0; b < B.length; b++)
          B[b].cancel();
        p.__reactViewTransition === C && (p.__reactViewTransition = null), d();
      }), C;
    } catch {
      return a(), n(), c(), null;
    }
  }
  function yn(e, t) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + t + ")";
  }
  yn.prototype.animate = function(e, t) {
    return t = typeof t == "number" ? { duration: t } : G({}, t), t.pseudoElement = this._selector, this._scope.animate(e, t);
  }, yn.prototype.getAnimations = function() {
    for (var e = this._scope, t = this._selector, l = e.getAnimations({ subtree: !0 }), a = [], n = 0; n < l.length; n++) {
      var u = l[n].effect;
      u !== null && u.target === e && u.pseudoElement === t && a.push(l[n]);
    }
    return a;
  }, yn.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function jy(e) {
    return {
      name: e,
      group: new yn("group", e),
      imagePair: new yn("image-pair", e),
      old: new yn("old", e),
      new: new yn("new", e)
    };
  }
  function qt(e) {
    this._fragmentFiber = e, this._observers = this._eventListeners = null;
  }
  qt.prototype.addEventListener = function(e, t, l) {
    var a = null, n = null;
    if (!(l != null && typeof l != "boolean" && (a = l.signal || null, a !== null && a.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var u = this._eventListeners;
      if (Xy(u, e, t, l) === -1) {
        var c = this, d = t;
        l != null && typeof l != "boolean" && l.once === !0 && (d = function(y) {
          c.removeEventListener(
            e,
            t,
            l
          ), typeof t == "function" ? t.call(this, y) : t.handleEvent(y);
        }), a !== null && (n = c.removeEventListener.bind(
          c,
          e,
          t,
          l
        ), a.addEventListener("abort", n, { once: !0 }), n = a.removeEventListener.bind(a, "abort", n)), a = iu(l), u.push({
          type: e,
          listener: t,
          optionsOrUseCapture: l,
          attachedListener: d,
          cleanup: n
        }), m(
          this._fragmentFiber.child,
          !1,
          zb,
          e,
          d,
          a
        );
      }
      this._eventListeners = u;
    }
  };
  function zb(e, t, l, a) {
    return D(e).addEventListener(
      t,
      l,
      a
    ), !1;
  }
  qt.prototype.removeEventListener = function(e, t, l) {
    var a = this._eventListeners;
    if (a !== null && (t = Xy(
      a,
      e,
      t,
      l
    ), t !== -1)) {
      var n = a[t];
      l = n.attachedListener;
      var u = n.cleanup;
      n = iu(n.optionsOrUseCapture), m(
        this._fragmentFiber.child,
        !1,
        Mb,
        e,
        l,
        n
      ), a.splice(t, 1), u !== null && u();
    }
  };
  function Mb(e, t, l, a) {
    return D(e).removeEventListener(
      t,
      l,
      a
    ), !1;
  }
  function iu(e) {
    return e != null && typeof e != "boolean" && (e.once === !0 || e.signal instanceof AbortSignal) ? { capture: e.capture, passive: e.passive } : e;
  }
  function Gy(e) {
    return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
  }
  function Xy(e, t, l, a) {
    if (e.length === 0) return -1;
    a = Gy(a);
    for (var n = 0; n < e.length; n++) {
      var u = e[n];
      if (u.type === t && u.listener === l && Gy(u.optionsOrUseCapture) === a)
        return n;
    }
    return -1;
  }
  qt.prototype.dispatchEvent = function(e) {
    var t = z(
      this._fragmentFiber
    );
    if (t === null) return !0;
    t = D(t);
    var l = this._eventListeners;
    if (l !== null && 0 < l.length || !e.bubbles) {
      var a = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
      if (l)
        for (var n = 0; n < l.length; n++) {
          var u = l[n];
          a.addEventListener(
            u.type,
            u.attachedListener,
            iu(u.optionsOrUseCapture)
          );
        }
      if (t.appendChild(a), e = a.dispatchEvent(e), l)
        for (n = 0; n < l.length; n++)
          u = l[n], a.removeEventListener(
            u.type,
            u.attachedListener,
            iu(u.optionsOrUseCapture)
          );
      return t.removeChild(a), e;
    }
    return t.dispatchEvent(e);
  }, qt.prototype.focus = function(e) {
    m(
      this._fragmentFiber.child,
      !0,
      Vy,
      e,
      void 0,
      void 0
    );
  };
  function Vy(e, t) {
    return e.tag === 6 ? !1 : (e = D(e), Xb(e, t));
  }
  qt.prototype.focusLast = function(e) {
    var t = [];
    m(
      this._fragmentFiber.child,
      !0,
      is,
      t,
      void 0,
      void 0
    );
    for (var l = t.length - 1; 0 <= l && !Vy(t[l], e); l--) ;
  };
  function is(e, t) {
    return t.push(e), !1;
  }
  qt.prototype.blur = function() {
    var e = z(
      this._fragmentFiber
    );
    e !== null && (e = D(e), e = Si(e).activeElement, e !== null && m(
      this._fragmentFiber.child,
      !1,
      Db,
      e,
      void 0,
      void 0
    ));
  };
  function Db(e, t) {
    return e.tag === 6 ? !1 : (e = D(e), e === t || e.contains(t) ? (t.blur(), !0) : !1);
  }
  qt.prototype.observeUsing = function(e) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), m(
      this._fragmentFiber.child,
      !1,
      Nb,
      e,
      void 0,
      void 0
    );
  };
  function Nb(e, t) {
    return e.tag === 6 || (e = D(e), t.observe(e)), !1;
  }
  qt.prototype.unobserveUsing = function(e) {
    var t = this._observers;
    if (t !== null && t.has(e)) {
      t.delete(e), m(
        this._fragmentFiber.child,
        !1,
        Bb,
        e,
        void 0,
        void 0
      );
      for (var l = t = 0; l < fl.length; l++) {
        var a = fl[l];
        a.fragmentInstance === this && a.observer === e ? e.unobserve(a.instance) : fl[t++] = a;
      }
      fl.length = t;
    }
  };
  function Bb(e, t) {
    return e.tag === 6 || (e = D(e), t.unobserve(e)), !1;
  }
  var fl = [], rs = !1;
  function Ub(e, t, l) {
    fl.push({
      fragmentInstance: e,
      observer: t,
      instance: l
    }), rs || (rs = !0, Vb(function() {
      rs = !1;
      var a = fl;
      fl = [];
      for (var n = 0; n < a.length; n++) {
        var u = a[n];
        u.observer.unobserve(u.instance);
      }
    }));
  }
  qt.prototype.getClientRects = function() {
    var e = [];
    return m(
      this._fragmentFiber.child,
      !1,
      Hb,
      e,
      void 0,
      void 0
    ), e;
  };
  function Hb(e, t) {
    if (e.tag === 6) {
      e = e.stateNode;
      var l = e.ownerDocument.createRange();
      l.selectNodeContents(e), t.push.apply(t, l.getClientRects());
    } else
      e = D(e), t.push.apply(t, e.getClientRects());
    return !1;
  }
  qt.prototype.getRootNode = function(e) {
    var t = z(
      this._fragmentFiber
    );
    return t === null ? this : D(t).getRootNode(e);
  }, qt.prototype.compareDocumentPosition = function(e) {
    var t = z(
      this._fragmentFiber
    );
    if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var l = [];
    m(
      this._fragmentFiber.child,
      !1,
      is,
      l,
      void 0,
      void 0
    );
    var a = D(t);
    if (l.length === 0) {
      if (l = a, q(this._fragmentFiber)) {
        e: {
          for (t = this._fragmentFiber.return; t !== null; ) {
            if (t.tag === 4) {
              t = t.stateNode.containerInfo;
              break e;
            }
            if (t.tag === 3 || t.tag === 5 || t.tag === 27)
              break;
            t = t.return;
          }
          t = null;
        }
        t != null && (l = t);
      }
      t = this._fragmentFiber;
      var n = a = l.compareDocumentPosition(e);
      return l === e ? n = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (l = L(t)[1], l === null ? n = Node.DOCUMENT_POSITION_PRECEDING : (e = D(l).compareDocumentPosition(
        e
      ), n = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), n |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t = D(l[0]), n = D(l[l.length - 1]);
    var u = q(this._fragmentFiber) ? t.parentElement : a;
    if (u == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = u.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, u = u.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var c = t.compareDocumentPosition(e), d = n.compareDocumentPosition(e), y = c & Node.DOCUMENT_POSITION_CONTAINED_BY || d & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return d = a && u && c & Node.DOCUMENT_POSITION_FOLLOWING && d & Node.DOCUMENT_POSITION_PRECEDING, t = a && t === e || u && n === e || y || d ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && t === e || !u && n === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : c, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || wb(
      t,
      this._fragmentFiber,
      l[0],
      l[l.length - 1],
      e
    ) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function wb(e, t, l, a, n) {
    var u = ml(n);
    if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (l = !!u)
        e: {
          for (; u !== null; ) {
            if (u.tag === 7 && (u === t || u.alternate === t)) {
              l = !0;
              break e;
            }
            u = u.return;
          }
          l = !1;
        }
      return l;
    }
    if (e & Node.DOCUMENT_POSITION_CONTAINS) {
      if (u === null)
        return u = n.ownerDocument, n === u || n === u.documentElement || n === u.body;
      e: {
        for (u = t, t = z(t); u !== null; ) {
          if (!(u.tag !== 5 && u.tag !== 3 && u.tag !== 27 || u !== t && u.alternate !== t)) {
            u = !0;
            break e;
          }
          u = u.return;
        }
        u = !1;
      }
      return u;
    }
    return e & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!u) && !(t = u === l) && (t = J(
      l,
      u,
      V
    ), t === null ? t = !1 : (m(
      t,
      !0,
      F,
      u,
      l
    ), u = H, H = null, t = u !== null)), t) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!u) && !(t = u === a) && (t = J(
      a,
      u,
      V
    ), t === null ? t = !1 : (m(
      t,
      !0,
      te,
      u,
      a
    ), u = H, M = H = null, t = u !== null)), t) : !1;
  }
  function Qy(e, t) {
    var l = e.ownerDocument.createRange();
    l.selectNodeContents(e), e = l.getBoundingClientRect(), window.scrollTo(
      window.scrollX + e.left,
      t ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight
    );
  }
  qt.prototype.scrollIntoView = function(e) {
    if (typeof e == "object") throw Error(r(566));
    var t = [];
    m(
      this._fragmentFiber.child,
      !1,
      is,
      t,
      void 0,
      void 0
    );
    var l = e !== !1;
    if (t.length === 0) {
      var a = L(
        this._fragmentFiber
      );
      if (a = l ? a[1] || a[0] || z(this._fragmentFiber) : a[0] || a[1], a === null) return;
      if (a.tag === 6) {
        e = D(a), Qy(e, l);
        return;
      }
      if (a = D(a), a.nodeType !== 9) {
        if (a.nodeType === 11) {
          l = "host" in a ? a.host : null, l !== null && l.scrollIntoView(e);
          return;
        }
        a.scrollIntoView(e);
      }
    }
    for (a = l ? t.length - 1 : 0; a !== (l ? -1 : t.length); ) {
      var n = t[a];
      n.tag === 6 ? (n = D(n), Qy(n, l)) : D(n).scrollIntoView(e), a += l ? -1 : 1;
    }
  };
  function Lb(e, t) {
    return e = D(e), Zy(e, t), !1;
  }
  function Zy(e, t) {
    e.reactFragments == null && (e.reactFragments = /* @__PURE__ */ new Set()), e.reactFragments.add(t);
  }
  function Ky(e, t) {
    var l = t._eventListeners;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a];
        e.addEventListener(
          n.type,
          n.attachedListener,
          iu(n.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 && (l = t._observers, l !== null && l.forEach(function(u) {
      for (var c = 0, d = 0; d < fl.length; d++) {
        var y = fl[d];
        (y.fragmentInstance !== t || y.observer !== u || y.instance !== e) && (fl[c++] = y);
      }
      fl.length = c, u.observe(e);
    }), Zy(e, t));
  }
  function qb(e, t) {
    var l = t._eventListeners;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a];
        e.removeEventListener(
          n.type,
          n.attachedListener,
          iu(n.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 && (l = t._observers, l !== null && l.forEach(function(u) {
      typeof u.rootMargin == "string" ? Ub(
        t,
        u,
        e
      ) : u.unobserve(e);
    }), e.reactFragments != null && e.reactFragments.delete(t));
  }
  function fs(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          fs(l), Qa(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function Yb(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var n = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[fa])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (u !== n.rel || e.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || e.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (u = e.getAttribute("src"), (u !== (n.src == null ? null : n.src) || e.getAttribute("type") !== (n.type == null ? null : n.type) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === u)
          return e;
      } else return e;
      if (e = It(e.nextSibling), e === null) break;
    }
    return null;
  }
  function jb(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = It(e.nextSibling), e === null)) return null;
    return e;
  }
  function Jy(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = It(e.nextSibling), e === null)) return null;
    return e;
  }
  function cs(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function os(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Gb(e, t) {
    var l = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || l.readyState !== "loading")
      t();
    else {
      var a = function() {
        t(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), e._reactRetry = a;
    }
  }
  function It(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var ss = null;
  function ky(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0)
            return It(e.nextSibling);
          t--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Wy(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (t === 0) return e;
          t--;
        } else l !== "/$" && l !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Xb(e, t) {
    function l() {
      a = !0;
    }
    if (e.ownerDocument.activeElement === e) return !0;
    var a = !1;
    try {
      e.ownerDocument.addEventListener("focus", l, !0), (e.focus || HTMLElement.prototype.focus).call(e, t);
    } finally {
      e.ownerDocument.removeEventListener("focus", l, !0);
    }
    return a;
  }
  function Vb(e) {
    Hy(function() {
      Hy(function(t) {
        return e(t);
      });
    });
  }
  function Py(e, t, l) {
    switch (t = Si(l), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(r(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(r(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(r(454));
        return e;
      default:
        throw Error(r(451));
    }
  }
  function $y(e, t, l) {
    for (var a in l) {
      var n = l[a];
      l.hasOwnProperty(a) && n != null && ze(e, t, a, null, Sb, n);
    }
    l.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === Sl && (e.onclick = null), Qa(e);
  }
  function ds(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Qa(e);
  }
  var Ft = /* @__PURE__ */ new Map(), Iy = /* @__PURE__ */ new Set();
  function bi(e) {
    if (typeof e.getRootNode == "function") {
      var t = e.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Fl = ae.d;
  ae.d = {
    f: Qb,
    r: Zb,
    D: Kb,
    C: Jb,
    L: kb,
    m: Wb,
    X: $b,
    S: Pb,
    M: Ib
  };
  function Qb() {
    var e = Fl.f(), t = cf();
    return e || t;
  }
  function Zb(e) {
    var t = Ll(e);
    t !== null && t.tag === 5 && t.type === "form" ? e0(t) : Fl.r(e);
  }
  var ru = typeof document > "u" ? null : document;
  function Fy(e, t, l) {
    var a = ru;
    if (a && typeof t == "string" && t) {
      var n = gt(t);
      n = 'link[rel="' + e + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), Iy.has(n) || (Iy.add(n), e = { rel: e, crossOrigin: l, href: t }, a.querySelector(n) === null && (t = a.createElement("link"), ct(t, "link", e), Qe(t), a.head.appendChild(t)));
    }
  }
  function Kb(e) {
    Fl.D(e), Fy("dns-prefetch", e, null);
  }
  function Jb(e, t) {
    Fl.C(e, t), Fy("preconnect", e, t);
  }
  function kb(e, t, l) {
    Fl.L(e, t, l);
    var a = ru;
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + gt(t) + '"]';
      t === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + gt(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + gt(
        l.imageSizes
      ) + '"]')) : n += '[href="' + gt(e) + '"]';
      var u = n;
      switch (t) {
        case "style":
          u = fu(e);
          break;
        case "script":
          u = cu(e);
      }
      if (!(Ft.has(u) || (e = G(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), Ft.set(u, e), a.querySelector(n) !== null || t === "style" && a.querySelector(Ei(u)) || t === "script" && a.querySelector(pi(u))))) {
        var c = a.createElement("link");
        ct(c, "link", e), t === "style" && (c[Va] = !0, c.onload = c.onerror = function() {
          Cu(c);
        }), Qe(c), a.head.appendChild(c);
      }
    }
  }
  function Wb(e, t) {
    Fl.m(e, t);
    var l = ru;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + gt(a) + '"][href="' + gt(e) + '"]', u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = cu(e);
      }
      if (!Ft.has(u) && (e = G({ rel: "modulepreload", href: e }, t), Ft.set(u, e), l.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(pi(u)))
              return;
        }
        a = l.createElement("link"), ct(a, "link", e), Qe(a), l.head.appendChild(a);
      }
    }
  }
  function Pb(e, t, l) {
    Fl.S(e, t, l);
    var a = ru;
    if (a && e) {
      var n = ql(a).hoistableStyles, u = fu(e);
      t = t || "default";
      var c = n.get(u);
      if (!c) {
        var d = { loading: 0, preload: null };
        if (c = a.querySelector(
          Ei(u)
        ))
          d.loading = 5;
        else {
          e = G(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = Ft.get(u)) && vs(e, l);
          var y = c = a.createElement("link");
          Qe(y), ct(y, "link", e), y._p = new Promise(function(p, C) {
            y.onload = p, y.onerror = C;
          }), y.addEventListener("load", function() {
            d.loading |= 1;
          }), y.addEventListener("error", function() {
            d.loading |= 2;
          }), d.loading |= 4, mf(c, t, a);
        }
        c = {
          type: "stylesheet",
          instance: c,
          count: 1,
          state: d
        }, n.set(u, c);
      }
    }
  }
  function $b(e, t) {
    Fl.X(e, t);
    var l = ru;
    if (l && e) {
      var a = ql(l).hoistableScripts, n = cu(e), u = a.get(n);
      u || (u = l.querySelector(pi(n)), u || (e = G({ src: e, async: !0 }, t), (t = Ft.get(n)) && ys(e, t), u = l.createElement("script"), Qe(u), ct(u, "link", e), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function Ib(e, t) {
    Fl.M(e, t);
    var l = ru;
    if (l && e) {
      var a = ql(l).hoistableScripts, n = cu(e), u = a.get(n);
      u || (u = l.querySelector(pi(n)), u || (e = G({ src: e, async: !0, type: "module" }, t), (t = Ft.get(n)) && ys(e, t), u = l.createElement("script"), Qe(u), ct(u, "link", e), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function eh(e, t, l, a) {
    var n = (n = yl.current) ? bi(n) : null;
    if (!n) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (l = fu(l.href), t = ql(
          n
        ).hoistableStyles, a = t.get(l), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(l, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = fu(l.href);
          var u = ql(
            n
          ).hoistableStyles, c = u.get(e);
          if (c || (n = n.ownerDocument || n, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, c), (u = n.querySelector(
            Ei(e)
          )) ? u._p || (c.instance = u, c.state.loading = 5) : (u = Ft.get(e), u || (u = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Ft.set(e, u)), Fb(
            n,
            e,
            u,
            c.state
          ))), t && a === null)
            throw Error(r(528, ""));
          return c;
        }
        if (t && a !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (l = cu(l), t = ql(
          n
        ).hoistableScripts, a = t.get(l), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, t.set(l, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, e));
    }
  }
  function fu(e) {
    return 'href="' + gt(e) + '"';
  }
  function Ei(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function th(e) {
    return G({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Fb(e, t, l, a) {
    if (t = e.querySelector(
      'link[rel="preload"][as="style"][' + t + "]"
    )) {
      if (t[Va] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      t = e.createElement("link"), t[Va] = !0, t.onload = t.onerror = Cu.bind(null, t), ct(t, "link", l), Qe(t), e.head.appendChild(t);
    a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    });
  }
  function cu(e) {
    return '[src="' + gt(e) + '"]';
  }
  function pi(e) {
    return "script[async]" + e;
  }
  function lh(e, t, l) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + gt(l.href) + '"]'
          );
          if (a)
            return t.instance = a, Qe(a), a;
          var n = G({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), Qe(a), ct(a, "style", n), mf(a, l.precedence, e), t.instance = a;
        case "stylesheet":
          n = fu(l.href);
          var u = e.querySelector(
            Ei(n)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, Qe(u), u;
          a = th(l), (n = Ft.get(n)) && vs(a, n), u = (e.ownerDocument || e).createElement("link"), Qe(u);
          var c = u;
          return c._p = new Promise(function(d, y) {
            c.onload = d, c.onerror = y;
          }), ct(u, "link", a), t.state.loading |= 4, mf(u, l.precedence, e), t.instance = u;
        case "script":
          return u = cu(l.src), (n = e.querySelector(
            pi(u)
          )) ? (t.instance = n, Qe(n), n) : (a = l, (n = Ft.get(u)) && (a = G({}, l), ys(a, n)), e = e.ownerDocument || e, n = e.createElement("script"), Qe(n), ct(n, "link", a), e.head.appendChild(n), t.instance = n);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, mf(a, l.precedence, e));
    return t.instance;
  }
  function mf(e, t, l) {
    for (var a = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, u = n, c = 0; c < a.length; c++) {
      var d = a[c];
      if (d.dataset.precedence === t) u = d;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
  }
  function vs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function ys(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var gf = null;
  function ah(e, t, l) {
    if (gf === null) {
      var a = /* @__PURE__ */ new Map(), n = gf = /* @__PURE__ */ new Map();
      n.set(l, a);
    } else
      n = gf, a = n.get(l), a || (a = /* @__PURE__ */ new Map(), n.set(l, a));
    if (a.has(e)) return a;
    for (a.set(e, null), l = l.getElementsByTagName(e), n = 0; n < l.length; n++) {
      var u = l[n];
      if (!(u[fa] || u[Ke] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = u.getAttribute(t) || "";
        c = e + c;
        var d = a.get(c);
        d ? d.push(u) : a.set(c, [u]);
      }
    }
    return a;
  }
  function hs(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(
      l,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function e1(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        return t.rel === "stylesheet" ? (e = t.disabled, typeof t.precedence == "string" && e == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function nh(e, t) {
    return e === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
  }
  function uh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function ih(e) {
    return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function rh(e, t) {
    typeof t.decode == "function" && (e.imgCount++, t.complete || (e.imgBytes += ih(t), e.suspenseyImages.push(t)), e = a1.bind(e), t.decode().then(e, e));
  }
  function t1(e, t, l, a) {
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var n = fu(a.href), u = t.querySelector(
          Ei(n)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Ti.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = u, Qe(u);
          return;
        }
        u = t.ownerDocument || t, a = th(a), (n = Ft.get(n)) && vs(a, n), u = u.createElement("link"), Qe(u);
        var c = u;
        c._p = new Promise(function(d, y) {
          c.onload = d, c.onerror = y;
        }), ct(u, "link", a), l.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = Ti.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  var Sf = 0;
  function l1(e, t) {
    return e.stylesheets && e.count === 0 && Ef(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var a = setTimeout(function() {
        if (e.stylesheets && Ef(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Sf === 0 && (Sf = 62500 * Eb());
      var n = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Ef(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > Sf ? 50 : 800) + t
      );
      return e.unsuspend = l, function() {
        e.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function fh(e) {
    if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
      if (e.stylesheets) Ef(e, e.stylesheets);
      else if (e.unsuspend) {
        var t = e.unsuspend;
        e.unsuspend = null, t();
      }
    }
  }
  function Ti() {
    this.count--, fh(this);
  }
  function a1() {
    this.imgCount--, fh(this);
  }
  var bf = null;
  function Ef(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, bf = /* @__PURE__ */ new Map(), t.forEach(n1, e), bf = null, Ti.call(e));
  }
  function n1(e, t) {
    if (!(t.state.loading & 4)) {
      var l = bf.get(e);
      if (l) var a = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), bf.set(e, l);
        for (var n = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < n.length; u++) {
          var c = n[u];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (l.set(c.dataset.precedence, c), a = c);
        }
        a && l.set(null, a);
      }
      n = t.instance, c = n.getAttribute("data-precedence"), u = l.get(c) || a, u === a && l.set(null, n), l.set(c, n), this.count++, a = Ti.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), t.state.loading |= 4;
    }
  }
  var ou = {
    $$typeof: De,
    Provider: null,
    Consumer: null,
    _currentValue: tl,
    _currentValue2: tl,
    _threadCount: 0
  };
  function u1(e, t, l, a, n, u, c, d, y) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Hl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Hl(0), this.hiddenUpdates = Hl(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function ch(e, t, l, a, n, u, c, d, y, p, C, B) {
    return e = new u1(
      e,
      t,
      l,
      c,
      y,
      p,
      C,
      B,
      d
    ), t = 1, u === !0 && (t |= 24), u = Ot(3, null, null, t), e.current = u, u.stateNode = e, t = zc(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: t
    }, Bc(u), e;
  }
  function oh(e) {
    return e ? (e = wn, e) : wn;
  }
  function sh(e, t, l, a, n, u) {
    n = oh(n), a.context === null ? a.context = n : a.pendingContext = n, a = ba(t), a.payload = { element: l }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = Ea(e, a, t), l !== null && (xt(l, e, t), Fu(l, e, t));
  }
  function dh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function ms(e, t) {
    dh(e, t), (e = e.alternate) && dh(e, t);
  }
  function vh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Pa(e, 67108864);
      t !== null && xt(t, e, 67108864), ms(e, 67108864);
    }
  }
  function yh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Lt();
      t = _n(t);
      var l = Pa(e, t);
      l !== null && xt(l, e, t), ms(e, t);
    }
  }
  var su = !0;
  function i1(e, t, l, a) {
    var n = P.T;
    P.T = null;
    var u = ae.p;
    try {
      ae.p = 2, gs(e, t, l, a);
    } finally {
      ae.p = u, P.T = n;
    }
  }
  function r1(e, t, l, a) {
    var n = P.T;
    P.T = null;
    var u = ae.p;
    try {
      ae.p = 8, gs(e, t, l, a);
    } finally {
      ae.p = u, P.T = n;
    }
  }
  function gs(e, t, l, a) {
    if (su) {
      var n = Ss(a);
      if (n === null)
        Io(
          e,
          t,
          a,
          pf,
          l
        ), mh(e, a);
      else if (c1(
        n,
        e,
        t,
        l,
        a
      ))
        a.stopPropagation();
      else if (mh(e, a), t & 4 && -1 < f1.indexOf(e)) {
        for (; n !== null; ) {
          var u = Ll(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var c = Xt(u.pendingLanes);
                  if (c !== 0) {
                    var d = u;
                    for (d.pendingLanes |= 2, d.entangledLanes |= 2; c; ) {
                      var y = 1 << 31 - mt(c);
                      d.entanglements[1] |= y, c &= ~y;
                    }
                    xl(u), (Re & 6) === 0 && (uf = yt() + 500, hi(0));
                  }
                }
                break;
              case 31:
              case 13:
                d = Pa(u, 2), d !== null && xt(d, u, 2), cf(), ms(u, 2);
            }
          if (u = Ss(a), u === null && Io(
            e,
            t,
            a,
            pf,
            l
          ), u === n) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else
        Io(
          e,
          t,
          a,
          null,
          l
        );
    }
  }
  function Ss(e) {
    return e = lc(e), bs(e);
  }
  var pf = null;
  function bs(e) {
    if (pf = null, e = ml(e), e !== null) {
      var t = v(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (e = h(t), e !== null) return e;
          e = null;
        } else if (l === 31) {
          if (e = T(t), e !== null) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return pf = e, null;
  }
  function hh(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Qi()) {
          case Zi:
            return 2;
          case pu:
            return 8;
          case Tn:
          case Ki:
            return 32;
          case Ji:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Es = !1, Na = null, Ba = null, Ua = null, Ri = /* @__PURE__ */ new Map(), Oi = /* @__PURE__ */ new Map(), Ha = [], f1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function mh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Na = null;
        break;
      case "dragenter":
      case "dragleave":
        Ba = null;
        break;
      case "mouseover":
      case "mouseout":
        Ua = null;
        break;
      case "pointerover":
      case "pointerout":
        Ri.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Oi.delete(t.pointerId);
    }
  }
  function _i(e, t, l, a, n, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [n]
    }, t !== null && (t = Ll(t), t !== null && vh(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), e);
  }
  function c1(e, t, l, a, n) {
    switch (t) {
      case "focusin":
        return Na = _i(
          Na,
          e,
          t,
          l,
          a,
          n
        ), !0;
      case "dragenter":
        return Ba = _i(
          Ba,
          e,
          t,
          l,
          a,
          n
        ), !0;
      case "mouseover":
        return Ua = _i(
          Ua,
          e,
          t,
          l,
          a,
          n
        ), !0;
      case "pointerover":
        var u = n.pointerId;
        return Ri.set(
          u,
          _i(
            Ri.get(u) || null,
            e,
            t,
            l,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return u = n.pointerId, Oi.set(
          u,
          _i(
            Oi.get(u) || null,
            e,
            t,
            l,
            a,
            n
          )
        ), !0;
    }
    return !1;
  }
  function gh(e) {
    var t = ml(e.target);
    if (t !== null) {
      var l = v(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = h(l), t !== null) {
            e.blockedOn = t, Ou(e.priority, function() {
              yh(l);
            });
            return;
          }
        } else if (t === 31) {
          if (t = T(l), t !== null) {
            e.blockedOn = t, Ou(e.priority, function() {
              yh(l);
            });
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Tf(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = Ss(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(
          l.type,
          l
        );
        tc = a, l.target.dispatchEvent(a), tc = null;
      } else
        return t = Ll(l), t !== null && vh(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function Sh(e, t, l) {
    Tf(e) && l.delete(t);
  }
  function o1() {
    Es = !1, Na !== null && Tf(Na) && (Na = null), Ba !== null && Tf(Ba) && (Ba = null), Ua !== null && Tf(Ua) && (Ua = null), Ri.forEach(Sh), Oi.forEach(Sh);
  }
  function Rf(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Es || (Es = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      o1
    )));
  }
  var Of = null;
  function bh(e) {
    Of !== e && (Of = e, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        Of === e && (Of = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], a = e[t + 1], n = e[t + 2];
          if (typeof a != "function") {
            if (bs(a || l) === null)
              continue;
            break;
          }
          var u = Ll(l);
          u !== null && (e.splice(t, 3), t -= 3, eo(
            u,
            {
              pending: !0,
              data: n,
              method: l.method,
              action: a
            },
            a,
            n
          ));
        }
      }
    ));
  }
  function du(e) {
    function t(y) {
      return Rf(y, e);
    }
    Na !== null && Rf(Na, e), Ba !== null && Rf(Ba, e), Ua !== null && Rf(Ua, e), Ri.forEach(t), Oi.forEach(t);
    for (var l = 0; l < Ha.length; l++) {
      var a = Ha[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Ha.length && (l = Ha[0], l.blockedOn === null); )
      gh(l), l.blockedOn === null && Ha.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var n = l[a], u = l[a + 1], c = n[nt] || null;
        if (typeof u == "function")
          c || bh(l);
        else if (c) {
          var d = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, c = u[nt] || null)
              d = c.formAction;
            else if (bs(n) !== null) continue;
          } else d = c.action;
          typeof d == "function" ? l[a + 1] = d : (l.splice(a, 3), a -= 3), bh(l);
        }
      }
  }
  function Eh() {
    function e(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(c) {
            return n = c;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      n !== null && (n(), n = null), a || setTimeout(l, 20);
    }
    function l() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, n = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(l, 100), function() {
        a = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), n !== null && (n(), n = null);
      };
    }
  }
  function ps(e) {
    this._internalRoot = e;
  }
  _f.prototype.render = ps.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var l = t.current, a = Lt();
    sh(l, a, e, t, null, null);
  }, _f.prototype.unmount = ps.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      sh(e.current, 2, null, e, null, null), cf(), t[wl] = null;
    }
  };
  function _f(e) {
    this._internalRoot = e;
  }
  _f.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ru();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Ha.length && t !== 0 && t < Ha[l].priority; l++) ;
      Ha.splice(l, 0, e), l === 0 && gh(e);
    }
  };
  var ph = f.version;
  if (ph !== "19.3.0")
    throw Error(
      r(
        527,
        ph,
        "19.3.0"
      )
    );
  ae.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
    return e = A(t), e = e !== null ? x(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var s1 = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: P,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Af = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Af.isDisabled && Af.supportsFiber)
      try {
        ua = Af.inject(
          s1
        ), ht = Af;
      } catch {
      }
  }
  return Ai.createRoot = function(e, t) {
    if (!s(e)) throw Error(r(299));
    var l = !1, a = "", n = o0, u = s0, c = d0;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = ch(
      e,
      1,
      !1,
      null,
      null,
      l,
      a,
      null,
      n,
      u,
      c,
      Eh
    ), e[wl] = t.current, $o(e), new ps(t);
  }, Ai.hydrateRoot = function(e, t, l) {
    if (!s(e)) throw Error(r(299));
    var a = !1, n = "", u = o0, c = s0, d = d0, y = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (c = l.onCaughtError), l.onRecoverableError !== void 0 && (d = l.onRecoverableError), l.formState !== void 0 && (y = l.formState)), t = ch(
      e,
      1,
      !0,
      t,
      l ?? null,
      a,
      n,
      y,
      u,
      c,
      d,
      Eh
    ), t.context = oh(null), l = t.current, a = Lt(), a = _n(a), n = ba(a), n.callback = null, Ea(l, n, a), l = a, t.current.lanes = l, ra(t, l), xl(t), e[wl] = t.current, $o(e), new _f(t);
  }, Ai.version = "19.3.0", Ai;
}
var zh;
function b1() {
  if (zh) return Rs.exports;
  zh = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (f) {
        console.error(f);
      }
  }
  return i(), Rs.exports = S1(), Rs.exports;
}
var E1 = b1(), p1 = (i) => i.disabled || Array.isArray(i.accessibilityStates) && i.accessibilityStates.indexOf("disabled") > -1, T1 = {
  adjustable: "slider",
  button: "button",
  header: "heading",
  image: "img",
  imagebutton: null,
  keyboardkey: null,
  label: null,
  link: "link",
  none: "presentation",
  search: "search",
  summary: "region",
  text: null
}, Dm = (i) => {
  var f = i.accessibilityRole, o = i.role, r = o || f;
  if (r) {
    var s = T1[r];
    if (s !== null)
      return s || r;
  }
}, R1 = {
  article: "article",
  banner: "header",
  blockquote: "blockquote",
  button: "button",
  code: "code",
  complementary: "aside",
  contentinfo: "footer",
  deletion: "del",
  emphasis: "em",
  figure: "figure",
  insertion: "ins",
  form: "form",
  list: "ul",
  listitem: "li",
  main: "main",
  navigation: "nav",
  paragraph: "p",
  region: "section",
  strong: "strong"
}, O1 = {}, _1 = function(f) {
  f === void 0 && (f = O1);
  var o = f.role || f.accessibilityRole;
  if (o === "label")
    return "label";
  var r = Dm(f);
  if (r) {
    if (r === "heading") {
      var s = f.accessibilityLevel || f["aria-level"];
      return s != null ? "h" + s : "h1";
    }
    return R1[r];
  }
}, Nm = {
  isDisabled: p1,
  propsToAccessibilityComponent: _1,
  propsToAriaRole: Dm
};
function Li(i) {
  "@babel/helpers - typeof";
  return Li = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(f) {
    return typeof f;
  } : function(f) {
    return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f;
  }, Li(i);
}
function A1(i, f) {
  if (Li(i) != "object" || !i) return i;
  var o = i[Symbol.toPrimitive];
  if (o !== void 0) {
    var r = o.call(i, f);
    if (Li(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (f === "string" ? String : Number)(i);
}
function C1(i) {
  var f = A1(i, "string");
  return Li(f) == "symbol" ? f : f + "";
}
function x1(i, f, o) {
  return (f = C1(f)) in i ? Object.defineProperty(i, f, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : i[f] = o, i;
}
function Mh(i, f) {
  var o = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    f && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(i, s).enumerable;
    })), o.push.apply(o, r);
  }
  return o;
}
function Ya(i) {
  for (var f = 1; f < arguments.length; f++) {
    var o = arguments[f] != null ? arguments[f] : {};
    f % 2 ? Mh(Object(o), !0).forEach(function(r) {
      x1(i, r, o[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : Mh(Object(o)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(o, r));
    });
  }
  return i;
}
function hu(i, f) {
  if (i == null) return {};
  var o = {};
  for (var r in i) if ({}.hasOwnProperty.call(i, r)) {
    if (f.indexOf(r) !== -1) continue;
    o[r] = i[r];
  }
  return o;
}
var jf = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  flex: !0,
  flexGrow: !0,
  flexOrder: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  fontWeight: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowGap: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnGap: !0,
  gridColumnStart: !0,
  lineClamp: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  // SVG-related
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0,
  // transform types
  scale: !0,
  scaleX: !0,
  scaleY: !0,
  scaleZ: !0,
  // RN properties
  shadowOpacity: !0
}, z1 = ["ms", "Moz", "O", "Webkit"], M1 = (i, f) => i + f.charAt(0).toUpperCase() + f.substring(1);
Object.keys(jf).forEach((i) => {
  z1.forEach((f) => {
    jf[M1(f, i)] = jf[i];
  });
});
var D1 = (i) => i === "currentcolor" || i === "currentColor" || i === "inherit" || i.indexOf("var(") === 0, Cs, Dh;
function N1() {
  if (Dh) return Cs;
  Dh = 1;
  function i(D) {
    if (typeof D == "number")
      return D >>> 0 === D && D >= 0 && D <= 4294967295 ? D : null;
    if (typeof D != "string")
      return null;
    const H = x();
    let M;
    if (M = H.hex6.exec(D))
      return parseInt(M[1] + "ff", 16) >>> 0;
    const F = j(D);
    return F ?? ((M = H.rgb.exec(D)) ? (m(M[1]) << 24 | // r
    m(M[2]) << 16 | // g
    m(M[3]) << 8 | // b
    255) >>> // a
    0 : (M = H.rgba.exec(D)) ? M[6] !== void 0 ? (m(M[6]) << 24 | // r
    m(M[7]) << 16 | // g
    m(M[8]) << 8 | // b
    q(M[9])) >>> // a
    0 : (m(M[2]) << 24 | // r
    m(M[3]) << 16 | // g
    m(M[4]) << 8 | // b
    q(M[5])) >>> // a
    0 : (M = H.hex3.exec(D)) ? parseInt(
      M[1] + M[1] + // r
      M[2] + M[2] + // g
      M[3] + M[3] + // b
      "ff",
      // a
      16
    ) >>> 0 : (M = H.hex8.exec(D)) ? parseInt(M[1], 16) >>> 0 : (M = H.hex4.exec(D)) ? parseInt(
      M[1] + M[1] + // r
      M[2] + M[2] + // g
      M[3] + M[3] + // b
      M[4] + M[4],
      // a
      16
    ) >>> 0 : (M = H.hsl.exec(D)) ? (o(
      z(M[1]),
      // h
      L(M[2]),
      // s
      L(M[3])
      // l
    ) | 255) >>> // a
    0 : (M = H.hsla.exec(D)) ? M[6] !== void 0 ? (o(
      z(M[6]),
      // h
      L(M[7]),
      // s
      L(M[8])
      // l
    ) | q(M[9])) >>> // a
    0 : (o(
      z(M[2]),
      // h
      L(M[3]),
      // s
      L(M[4])
      // l
    ) | q(M[5])) >>> // a
    0 : (M = H.hwb.exec(D)) ? (r(
      z(M[1]),
      // h
      L(M[2]),
      // w
      L(M[3])
      // b
    ) | 255) >>> // a
    0 : null);
  }
  function f(D, H, M) {
    return M < 0 && (M += 1), M > 1 && (M -= 1), M < 1 / 6 ? D + (H - D) * 6 * M : M < 1 / 2 ? H : M < 2 / 3 ? D + (H - D) * (2 / 3 - M) * 6 : D;
  }
  function o(D, H, M) {
    const F = M < 0.5 ? M * (1 + H) : M + H - M * H, te = 2 * M - F, V = f(te, F, D + 1 / 3), J = f(te, F, D), G = f(te, F, D - 1 / 3);
    return Math.round(V * 255) << 24 | Math.round(J * 255) << 16 | Math.round(G * 255) << 8;
  }
  function r(D, H, M) {
    if (H + M >= 1) {
      const J = Math.round(H * 255 / (H + M));
      return J << 24 | J << 16 | J << 8;
    }
    const F = f(0, 1, D + 1 / 3) * (1 - H - M) + H, te = f(0, 1, D) * (1 - H - M) + H, V = f(0, 1, D - 1 / 3) * (1 - H - M) + H;
    return Math.round(F * 255) << 24 | Math.round(te * 255) << 16 | Math.round(V * 255) << 8;
  }
  const s = "[-+]?\\d*\\.?\\d+", v = s + "%";
  function h(...D) {
    return "\\(\\s*(" + D.join(")\\s*,?\\s*(") + ")\\s*\\)";
  }
  function T(...D) {
    return "\\(\\s*(" + D.slice(0, D.length - 1).join(")\\s*,?\\s*(") + ")\\s*/\\s*(" + D[D.length - 1] + ")\\s*\\)";
  }
  function _(...D) {
    return "\\(\\s*(" + D.join(")\\s*,\\s*(") + ")\\s*\\)";
  }
  let A;
  function x() {
    return A === void 0 && (A = {
      rgb: new RegExp("rgb" + h(s, s, s)),
      rgba: new RegExp(
        "rgba(" + _(s, s, s, s) + "|" + T(s, s, s, s) + ")"
      ),
      hsl: new RegExp("hsl" + h(s, v, v)),
      hsla: new RegExp(
        "hsla(" + _(s, v, v, s) + "|" + T(s, v, v, s) + ")"
      ),
      hwb: new RegExp("hwb" + h(s, v, v)),
      hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex6: /^#([0-9a-fA-F]{6})$/,
      hex8: /^#([0-9a-fA-F]{8})$/
    }), A;
  }
  function m(D) {
    const H = parseInt(D, 10);
    return H < 0 ? 0 : H > 255 ? 255 : H;
  }
  function z(D) {
    return (parseFloat(D) % 360 + 360) % 360 / 360;
  }
  function q(D) {
    const H = parseFloat(D);
    return H < 0 ? 0 : H > 1 ? 255 : Math.round(H * 255);
  }
  function L(D) {
    const H = parseFloat(D);
    return H < 0 ? 0 : H > 100 ? 1 : H / 100;
  }
  function j(D) {
    switch (D) {
      case "transparent":
        return 0;
      // http://www.w3.org/TR/css3-color/#svg-color
      case "aliceblue":
        return 4042850303;
      case "antiquewhite":
        return 4209760255;
      case "aqua":
        return 16777215;
      case "aquamarine":
        return 2147472639;
      case "azure":
        return 4043309055;
      case "beige":
        return 4126530815;
      case "bisque":
        return 4293182719;
      case "black":
        return 255;
      case "blanchedalmond":
        return 4293643775;
      case "blue":
        return 65535;
      case "blueviolet":
        return 2318131967;
      case "brown":
        return 2771004159;
      case "burlywood":
        return 3736635391;
      case "burntsienna":
        return 3934150143;
      case "cadetblue":
        return 1604231423;
      case "chartreuse":
        return 2147418367;
      case "chocolate":
        return 3530104575;
      case "coral":
        return 4286533887;
      case "cornflowerblue":
        return 1687547391;
      case "cornsilk":
        return 4294499583;
      case "crimson":
        return 3692313855;
      case "cyan":
        return 16777215;
      case "darkblue":
        return 35839;
      case "darkcyan":
        return 9145343;
      case "darkgoldenrod":
        return 3095792639;
      case "darkgray":
        return 2846468607;
      case "darkgreen":
        return 6553855;
      case "darkgrey":
        return 2846468607;
      case "darkkhaki":
        return 3182914559;
      case "darkmagenta":
        return 2332068863;
      case "darkolivegreen":
        return 1433087999;
      case "darkorange":
        return 4287365375;
      case "darkorchid":
        return 2570243327;
      case "darkred":
        return 2332033279;
      case "darksalmon":
        return 3918953215;
      case "darkseagreen":
        return 2411499519;
      case "darkslateblue":
        return 1211993087;
      case "darkslategray":
        return 793726975;
      case "darkslategrey":
        return 793726975;
      case "darkturquoise":
        return 13554175;
      case "darkviolet":
        return 2483082239;
      case "deeppink":
        return 4279538687;
      case "deepskyblue":
        return 12582911;
      case "dimgray":
        return 1768516095;
      case "dimgrey":
        return 1768516095;
      case "dodgerblue":
        return 512819199;
      case "firebrick":
        return 2988581631;
      case "floralwhite":
        return 4294635775;
      case "forestgreen":
        return 579543807;
      case "fuchsia":
        return 4278255615;
      case "gainsboro":
        return 3705462015;
      case "ghostwhite":
        return 4177068031;
      case "gold":
        return 4292280575;
      case "goldenrod":
        return 3668254975;
      case "gray":
        return 2155905279;
      case "green":
        return 8388863;
      case "greenyellow":
        return 2919182335;
      case "grey":
        return 2155905279;
      case "honeydew":
        return 4043305215;
      case "hotpink":
        return 4285117695;
      case "indianred":
        return 3445382399;
      case "indigo":
        return 1258324735;
      case "ivory":
        return 4294963455;
      case "khaki":
        return 4041641215;
      case "lavender":
        return 3873897215;
      case "lavenderblush":
        return 4293981695;
      case "lawngreen":
        return 2096890111;
      case "lemonchiffon":
        return 4294626815;
      case "lightblue":
        return 2916673279;
      case "lightcoral":
        return 4034953471;
      case "lightcyan":
        return 3774873599;
      case "lightgoldenrodyellow":
        return 4210742015;
      case "lightgray":
        return 3553874943;
      case "lightgreen":
        return 2431553791;
      case "lightgrey":
        return 3553874943;
      case "lightpink":
        return 4290167295;
      case "lightsalmon":
        return 4288707327;
      case "lightseagreen":
        return 548580095;
      case "lightskyblue":
        return 2278488831;
      case "lightslategray":
        return 2005441023;
      case "lightslategrey":
        return 2005441023;
      case "lightsteelblue":
        return 2965692159;
      case "lightyellow":
        return 4294959359;
      case "lime":
        return 16711935;
      case "limegreen":
        return 852308735;
      case "linen":
        return 4210091775;
      case "magenta":
        return 4278255615;
      case "maroon":
        return 2147483903;
      case "mediumaquamarine":
        return 1724754687;
      case "mediumblue":
        return 52735;
      case "mediumorchid":
        return 3126187007;
      case "mediumpurple":
        return 2473647103;
      case "mediumseagreen":
        return 1018393087;
      case "mediumslateblue":
        return 2070474495;
      case "mediumspringgreen":
        return 16423679;
      case "mediumturquoise":
        return 1221709055;
      case "mediumvioletred":
        return 3340076543;
      case "midnightblue":
        return 421097727;
      case "mintcream":
        return 4127193855;
      case "mistyrose":
        return 4293190143;
      case "moccasin":
        return 4293178879;
      case "navajowhite":
        return 4292783615;
      case "navy":
        return 33023;
      case "oldlace":
        return 4260751103;
      case "olive":
        return 2155872511;
      case "olivedrab":
        return 1804477439;
      case "orange":
        return 4289003775;
      case "orangered":
        return 4282712319;
      case "orchid":
        return 3664828159;
      case "palegoldenrod":
        return 4008225535;
      case "palegreen":
        return 2566625535;
      case "paleturquoise":
        return 2951671551;
      case "palevioletred":
        return 3681588223;
      case "papayawhip":
        return 4293907967;
      case "peachpuff":
        return 4292524543;
      case "peru":
        return 3448061951;
      case "pink":
        return 4290825215;
      case "plum":
        return 3718307327;
      case "powderblue":
        return 2967529215;
      case "purple":
        return 2147516671;
      case "rebeccapurple":
        return 1714657791;
      case "red":
        return 4278190335;
      case "rosybrown":
        return 3163525119;
      case "royalblue":
        return 1097458175;
      case "saddlebrown":
        return 2336560127;
      case "salmon":
        return 4202722047;
      case "sandybrown":
        return 4104413439;
      case "seagreen":
        return 780883967;
      case "seashell":
        return 4294307583;
      case "sienna":
        return 2689740287;
      case "silver":
        return 3233857791;
      case "skyblue":
        return 2278484991;
      case "slateblue":
        return 1784335871;
      case "slategray":
        return 1887473919;
      case "slategrey":
        return 1887473919;
      case "snow":
        return 4294638335;
      case "springgreen":
        return 16744447;
      case "steelblue":
        return 1182971135;
      case "tan":
        return 3535047935;
      case "teal":
        return 8421631;
      case "thistle":
        return 3636451583;
      case "tomato":
        return 4284696575;
      case "turquoise":
        return 1088475391;
      case "violet":
        return 4001558271;
      case "wheat":
        return 4125012991;
      case "white":
        return 4294967295;
      case "whitesmoke":
        return 4126537215;
      case "yellow":
        return 4294902015;
      case "yellowgreen":
        return 2597139199;
    }
    return null;
  }
  return Cs = i, Cs;
}
var B1 = N1();
const U1 = /* @__PURE__ */ ea(B1);
var H1 = (i) => {
  if (i == null)
    return i;
  var f = U1(i);
  if (f != null)
    return f = (f << 24 | f >>> 8) >>> 0, f;
}, bd = function(f, o) {
  if (o === void 0 && (o = 1), f != null) {
    if (typeof f == "string" && D1(f))
      return f;
    var r = H1(f);
    if (r != null) {
      var s = r >> 16 & 255, v = r >> 8 & 255, h = r & 255, T = (r >> 24 & 255) / 255, _ = (T * o).toFixed(2);
      return "rgba(" + s + "," + v + "," + h + "," + _ + ")";
    }
  }
}, w1 = {
  backgroundColor: !0,
  borderColor: !0,
  borderTopColor: !0,
  borderRightColor: !0,
  borderBottomColor: !0,
  borderLeftColor: !0,
  color: !0,
  shadowColor: !0,
  textDecorationColor: !0,
  textShadowColor: !0
};
function Rt(i, f) {
  var o = i;
  return (f == null || !jf[f]) && typeof i == "number" ? o = i + "px" : f != null && w1[f] && (o = bd(i)), o;
}
var ta = !!(typeof window < "u" && window.document && window.document.createElement), L1 = {}, q1 = !ta || window.CSS != null && window.CSS.supports != null && (window.CSS.supports("text-decoration-line", "none") || window.CSS.supports("-webkit-text-decoration-line", "none")), Y1 = "monospace,monospace", Nh = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif', j1 = {
  borderColor: ["borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"],
  borderBlockColor: ["borderTopColor", "borderBottomColor"],
  borderInlineColor: ["borderRightColor", "borderLeftColor"],
  borderRadius: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
  borderStyle: ["borderTopStyle", "borderRightStyle", "borderBottomStyle", "borderLeftStyle"],
  borderBlockStyle: ["borderTopStyle", "borderBottomStyle"],
  borderInlineStyle: ["borderRightStyle", "borderLeftStyle"],
  borderWidth: ["borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth"],
  borderBlockWidth: ["borderTopWidth", "borderBottomWidth"],
  borderInlineWidth: ["borderRightWidth", "borderLeftWidth"],
  insetBlock: ["top", "bottom"],
  insetInline: ["left", "right"],
  marginBlock: ["marginTop", "marginBottom"],
  marginInline: ["marginRight", "marginLeft"],
  paddingBlock: ["paddingTop", "paddingBottom"],
  paddingInline: ["paddingRight", "paddingLeft"],
  overflow: ["overflowX", "overflowY"],
  overscrollBehavior: ["overscrollBehaviorX", "overscrollBehaviorY"],
  borderBlockStartColor: ["borderTopColor"],
  borderBlockStartStyle: ["borderTopStyle"],
  borderBlockStartWidth: ["borderTopWidth"],
  borderBlockEndColor: ["borderBottomColor"],
  borderBlockEndStyle: ["borderBottomStyle"],
  borderBlockEndWidth: ["borderBottomWidth"],
  //borderInlineStartColor: ['borderLeftColor'],
  //borderInlineStartStyle: ['borderLeftStyle'],
  //borderInlineStartWidth: ['borderLeftWidth'],
  //borderInlineEndColor: ['borderRightColor'],
  //borderInlineEndStyle: ['borderRightStyle'],
  //borderInlineEndWidth: ['borderRightWidth'],
  borderEndStartRadius: ["borderBottomLeftRadius"],
  borderEndEndRadius: ["borderBottomRightRadius"],
  borderStartStartRadius: ["borderTopLeftRadius"],
  borderStartEndRadius: ["borderTopRightRadius"],
  insetBlockEnd: ["bottom"],
  insetBlockStart: ["top"],
  //insetInlineEnd: ['right'],
  //insetInlineStart: ['left'],
  marginBlockStart: ["marginTop"],
  marginBlockEnd: ["marginBottom"],
  //marginInlineStart: ['marginLeft'],
  //marginInlineEnd: ['marginRight'],
  paddingBlockStart: ["paddingTop"],
  paddingBlockEnd: ["paddingBottom"]
  //paddingInlineStart: ['marginLeft'],
  //paddingInlineEnd: ['marginRight'],
}, Bm = (i, f) => {
  if (!i)
    return L1;
  var o = {}, r = function() {
    var T = i[s];
    if (
      // Ignore everything with a null value
      T == null
    )
      return "continue";
    if (s === "backgroundClip")
      T === "text" && (o.backgroundClip = T, o.WebkitBackgroundClip = T);
    else if (s === "flex")
      T === -1 ? (o.flexGrow = 0, o.flexShrink = 1, o.flexBasis = "auto") : o.flex = T;
    else if (s === "font")
      o[s] = T.replace("System", Nh);
    else if (s === "fontFamily")
      if (T.indexOf("System") > -1) {
        var _ = T.split(/,\s*/);
        _[_.indexOf("System")] = Nh, o[s] = _.join(",");
      } else T === "monospace" ? o[s] = Y1 : o[s] = T;
    else if (s === "textDecorationLine")
      q1 ? o.textDecorationLine = T : o.textDecoration = T;
    else if (s === "writingDirection")
      o.direction = T;
    else {
      var A = Rt(i[s], s), x = j1[s];
      f && s === "inset" ? (i.insetInline == null && (o.left = A, o.right = A), i.insetBlock == null && (o.top = A, o.bottom = A)) : f && s === "margin" ? (i.marginInline == null && (o.marginLeft = A, o.marginRight = A), i.marginBlock == null && (o.marginTop = A, o.marginBottom = A)) : f && s === "padding" ? (i.paddingInline == null && (o.paddingLeft = A, o.paddingRight = A), i.paddingBlock == null && (o.paddingTop = A, o.paddingBottom = A)) : x ? x.forEach((m, z) => {
        i[m] == null && (o[m] = A);
      }) : o[s] = A;
    }
  };
  for (var s in i)
    var v = r();
  return o;
};
function G1(i, f) {
  for (var o = i.length, r = f ^ o, s = 0, v; o >= 4; )
    v = i.charCodeAt(s) & 255 | (i.charCodeAt(++s) & 255) << 8 | (i.charCodeAt(++s) & 255) << 16 | (i.charCodeAt(++s) & 255) << 24, v = (v & 65535) * 1540483477 + (((v >>> 16) * 1540483477 & 65535) << 16), v ^= v >>> 24, v = (v & 65535) * 1540483477 + (((v >>> 16) * 1540483477 & 65535) << 16), r = (r & 65535) * 1540483477 + (((r >>> 16) * 1540483477 & 65535) << 16) ^ v, o -= 4, ++s;
  switch (o) {
    case 3:
      r ^= (i.charCodeAt(s + 2) & 255) << 16;
    case 2:
      r ^= (i.charCodeAt(s + 1) & 255) << 8;
    case 1:
      r ^= i.charCodeAt(s) & 255, r = (r & 65535) * 1540483477 + (((r >>> 16) * 1540483477 & 65535) << 16);
  }
  return r ^= r >>> 13, r = (r & 65535) * 1540483477 + (((r >>> 16) * 1540483477 & 65535) << 16), r ^= r >>> 15, r >>> 0;
}
var X1 = (i) => G1(i, 1).toString(36), V1 = /[A-Z]/g, Q1 = /^ms-/, xs = {};
function Z1(i) {
  return "-" + i.toLowerCase();
}
function K1(i) {
  if (i in xs)
    return xs[i];
  var f = i.replace(V1, Z1);
  return xs[i] = Q1.test(f) ? "-" + f : f;
}
var Cf = {}, xf = {}, zf = {}, Bh;
function Um() {
  if (Bh) return zf;
  Bh = 1, Object.defineProperty(zf, "__esModule", {
    value: !0
  }), zf.default = i;
  function i(f) {
    return f.charAt(0).toUpperCase() + f.slice(1);
  }
  return zf;
}
var Uh;
function J1() {
  if (Uh) return xf;
  Uh = 1, Object.defineProperty(xf, "__esModule", {
    value: !0
  }), xf.default = r;
  var i = Um(), f = o(i);
  function o(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function r(s, v, h) {
    var T = s[v];
    if (T && h.hasOwnProperty(v))
      for (var _ = (0, f.default)(v), A = 0; A < T.length; ++A) {
        var x = T[A] + _;
        h[x] || (h[x] = h[v]);
      }
    return h;
  }
  return xf;
}
var Mf = {}, Hh;
function k1() {
  if (Hh) return Mf;
  Hh = 1, Object.defineProperty(Mf, "__esModule", {
    value: !0
  }), Mf.default = i;
  function i(f, o, r, s, v) {
    for (var h = 0, T = f.length; h < T; ++h) {
      var _ = f[h](o, r, s, v);
      if (_)
        return _;
    }
  }
  return Mf;
}
var Df = {}, wh;
function W1() {
  if (wh) return Df;
  wh = 1, Object.defineProperty(Df, "__esModule", {
    value: !0
  }), Df.default = f;
  function i(o, r) {
    o.indexOf(r) === -1 && o.push(r);
  }
  function f(o, r) {
    if (Array.isArray(r))
      for (var s = 0, v = r.length; s < v; ++s)
        i(o, r[s]);
    else
      i(o, r);
  }
  return Df;
}
var Nf = {}, Lh;
function P1() {
  if (Lh) return Nf;
  Lh = 1, Object.defineProperty(Nf, "__esModule", {
    value: !0
  }), Nf.default = i;
  function i(f) {
    return f instanceof Object && !Array.isArray(f);
  }
  return Nf;
}
var qh;
function $1() {
  if (qh) return Cf;
  qh = 1, Object.defineProperty(Cf, "__esModule", {
    value: !0
  }), Cf.default = A;
  var i = J1(), f = _(i), o = k1(), r = _(o), s = W1(), v = _(s), h = P1(), T = _(h);
  function _(x) {
    return x && x.__esModule ? x : { default: x };
  }
  function A(x) {
    var m = x.prefixMap, z = x.plugins;
    return function q(L) {
      for (var j in L) {
        var D = L[j];
        if ((0, T.default)(D))
          L[j] = q(D);
        else if (Array.isArray(D)) {
          for (var H = [], M = 0, F = D.length; M < F; ++M) {
            var te = (0, r.default)(z, j, D[M], L, m);
            (0, v.default)(H, te || D[M]);
          }
          H.length > 0 && (L[j] = H);
        } else {
          var V = (0, r.default)(z, j, D, L, m);
          V && (L[j] = V), L = (0, f.default)(m, j, L);
        }
      }
      return L;
    };
  }
  return Cf;
}
var I1 = $1();
const F1 = /* @__PURE__ */ ea(I1);
var Bf = {};
function Gf(i) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Gf = function(o) {
    return typeof o;
  } : Gf = function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, Gf(i);
}
function eE(i) {
  return nE(i) || aE(i) || lE(i) || tE();
}
function tE() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lE(i, f) {
  if (i) {
    if (typeof i == "string") return Ks(i, f);
    var o = Object.prototype.toString.call(i).slice(8, -1);
    if (o === "Object" && i.constructor && (o = i.constructor.name), o === "Map" || o === "Set") return Array.from(o);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return Ks(i, f);
  }
}
function aE(i) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(i)) return Array.from(i);
}
function nE(i) {
  if (Array.isArray(i)) return Ks(i);
}
function Ks(i, f) {
  (f == null || f > i.length) && (f = i.length);
  for (var o = 0, r = new Array(f); o < f; o++)
    r[o] = i[o];
  return r;
}
function Yh(i) {
  return i.filter(function(f, o) {
    return i.lastIndexOf(f) === o;
  });
}
function Hm(i) {
  for (var f = 0, o = arguments.length <= 1 ? 0 : arguments.length - 1; f < o; ++f) {
    var r = f + 1 < 1 || arguments.length <= f + 1 ? void 0 : arguments[f + 1];
    for (var s in r) {
      var v = r[s], h = i[s];
      if (h && v) {
        if (Array.isArray(h)) {
          i[s] = Yh(h.concat(v));
          continue;
        }
        if (Array.isArray(v)) {
          i[s] = Yh([h].concat(eE(v)));
          continue;
        }
        if (Gf(v) === "object") {
          i[s] = Hm({}, h, v);
          continue;
        }
      }
      i[s] = v;
    }
  }
  return i;
}
var uE = /-([a-z])/g, iE = /^Ms/g, zs = {};
function rE(i) {
  return i[1].toUpperCase();
}
function wm(i) {
  if (zs.hasOwnProperty(i))
    return zs[i];
  var f = i.replace(uE, rE).replace(iE, "ms");
  return zs[i] = f, f;
}
var fE = /[A-Z]/g, cE = /^ms-/, Ms = {};
function oE(i) {
  return "-" + i.toLowerCase();
}
function Lm(i) {
  if (Ms.hasOwnProperty(i))
    return Ms[i];
  var f = i.replace(fE, oE);
  return Ms[i] = cE.test(f) ? "-" + f : f;
}
const sE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Lm
}, Symbol.toStringTag, { value: "Module" }));
function Wf(i) {
  return Lm(i);
}
function qm(i, f) {
  return Wf(i) + ":" + f;
}
function dE(i) {
  var f = "";
  for (var o in i) {
    var r = i[o];
    typeof r != "string" && typeof r != "number" || (f && (f += ";"), f += qm(o, r));
  }
  return f;
}
var vE = /^(Webkit|Moz|O|ms)/;
function yE(i) {
  return vE.test(i);
}
var hE = /-webkit-|-moz-|-ms-/;
function mE(i) {
  return typeof i == "string" && hE.test(i);
}
var qi = {
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  fontWeight: !0,
  lineHeight: !0,
  opacity: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  // SVG-related properties
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, jh = ["animationIterationCount", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "order"], Gh = ["Webkit", "ms", "Moz", "O"];
function gE(i, f) {
  return i + f.charAt(0).toUpperCase() + f.slice(1);
}
for (var Ds = 0, SE = jh.length; Ds < SE; ++Ds) {
  var Xh = jh[Ds];
  qi[Xh] = !0;
  for (var Ns = 0, bE = Gh.length; Ns < bE; ++Ns)
    qi[gE(Gh[Ns], Xh)] = !0;
}
for (var EE in qi)
  qi[Wf(EE)] = !0;
function pE(i) {
  return qi.hasOwnProperty(i);
}
var TE = /^(ms|Webkit|Moz|O)/;
function Ym(i) {
  var f = i.replace(TE, "");
  return f.charAt(0).toLowerCase() + f.slice(1);
}
function RE(i) {
  return Ym(wm(i));
}
function OE(i, f) {
  return f.join(";" + Wf(i) + ":");
}
var _E = /(-ms-|-webkit-|-moz-|-o-)/g;
function AE(i) {
  return typeof i == "string" ? i.replace(_E, "") : i;
}
const CE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  assignStyle: Hm,
  camelCaseProperty: wm,
  cssifyDeclaration: qm,
  cssifyObject: dE,
  hyphenateProperty: Wf,
  isPrefixedProperty: yE,
  isPrefixedValue: mE,
  isUnitlessProperty: pE,
  normalizeProperty: RE,
  resolveArrayValue: OE,
  unprefixProperty: Ym,
  unprefixValue: AE
}, Symbol.toStringTag, { value: "Module" })), xE = /* @__PURE__ */ Mm(CE);
var Vh;
function zE() {
  if (Vh) return Bf;
  Vh = 1, Object.defineProperty(Bf, "__esModule", {
    value: !0
  }), Bf.default = r;
  var i = xE, f = /cross-fade\(/g, o = ["-webkit-", ""];
  function r(s, v) {
    if (typeof v == "string" && !(0, i.isPrefixedValue)(v) && v.indexOf("cross-fade(") !== -1)
      return o.map(function(h) {
        return v.replace(f, h + "cross-fade(");
      });
  }
  return Bf;
}
var ME = zE();
const DE = /* @__PURE__ */ ea(ME);
var Uf = {}, Bs = {}, Qh;
function jm() {
  return Qh || (Qh = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = o;
    var f = /-webkit-|-moz-|-ms-/;
    function o(r) {
      return typeof r == "string" && f.test(r);
    }
  })(Bs)), Bs;
}
var Zh;
function NE() {
  if (Zh) return Uf;
  Zh = 1, Object.defineProperty(Uf, "__esModule", {
    value: !0
  }), Uf.default = s;
  var i = /* @__PURE__ */ jm(), f = o(i);
  function o(v) {
    return v && v.__esModule ? v : { default: v };
  }
  var r = ["-webkit-", ""];
  function s(v, h) {
    if (typeof h == "string" && !(0, f.default)(h) && h.indexOf("image-set(") > -1)
      return r.map(function(T) {
        return h.replace(/image-set\(/g, T + "image-set(");
      });
  }
  return Uf;
}
var BE = NE();
const UE = /* @__PURE__ */ ea(BE);
var Hf = {}, Kh;
function HE() {
  if (Kh) return Hf;
  Kh = 1, Object.defineProperty(Hf, "__esModule", {
    value: !0
  }), Hf.default = f;
  var i = {
    marginBlockStart: ["WebkitMarginBefore"],
    marginBlockEnd: ["WebkitMarginAfter"],
    marginInlineStart: ["WebkitMarginStart", "MozMarginStart"],
    marginInlineEnd: ["WebkitMarginEnd", "MozMarginEnd"],
    paddingBlockStart: ["WebkitPaddingBefore"],
    paddingBlockEnd: ["WebkitPaddingAfter"],
    paddingInlineStart: ["WebkitPaddingStart", "MozPaddingStart"],
    paddingInlineEnd: ["WebkitPaddingEnd", "MozPaddingEnd"],
    borderBlockStart: ["WebkitBorderBefore"],
    borderBlockStartColor: ["WebkitBorderBeforeColor"],
    borderBlockStartStyle: ["WebkitBorderBeforeStyle"],
    borderBlockStartWidth: ["WebkitBorderBeforeWidth"],
    borderBlockEnd: ["WebkitBorderAfter"],
    borderBlockEndColor: ["WebkitBorderAfterColor"],
    borderBlockEndStyle: ["WebkitBorderAfterStyle"],
    borderBlockEndWidth: ["WebkitBorderAfterWidth"],
    borderInlineStart: ["WebkitBorderStart", "MozBorderStart"],
    borderInlineStartColor: ["WebkitBorderStartColor", "MozBorderStartColor"],
    borderInlineStartStyle: ["WebkitBorderStartStyle", "MozBorderStartStyle"],
    borderInlineStartWidth: ["WebkitBorderStartWidth", "MozBorderStartWidth"],
    borderInlineEnd: ["WebkitBorderEnd", "MozBorderEnd"],
    borderInlineEndColor: ["WebkitBorderEndColor", "MozBorderEndColor"],
    borderInlineEndStyle: ["WebkitBorderEndStyle", "MozBorderEndStyle"],
    borderInlineEndWidth: ["WebkitBorderEndWidth", "MozBorderEndWidth"]
  };
  function f(o, r, s) {
    if (Object.prototype.hasOwnProperty.call(i, o))
      for (var v = i[o], h = 0, T = v.length; h < T; ++h)
        s[v[h]] = r;
  }
  return Hf;
}
var wE = HE();
const LE = /* @__PURE__ */ ea(wE);
var wf = {}, Jh;
function qE() {
  if (Jh) return wf;
  Jh = 1, Object.defineProperty(wf, "__esModule", {
    value: !0
  }), wf.default = i;
  function i(f, o) {
    if (f === "position" && o === "sticky")
      return ["-webkit-sticky", "sticky"];
  }
  return wf;
}
var YE = qE();
const jE = /* @__PURE__ */ ea(YE);
var Lf = {}, kh;
function GE() {
  if (kh) return Lf;
  kh = 1, Object.defineProperty(Lf, "__esModule", {
    value: !0
  }), Lf.default = r;
  var i = ["-webkit-", "-moz-", ""], f = {
    maxHeight: !0,
    maxWidth: !0,
    width: !0,
    height: !0,
    columnWidth: !0,
    minWidth: !0,
    minHeight: !0
  }, o = {
    "min-content": !0,
    "max-content": !0,
    "fill-available": !0,
    "fit-content": !0,
    "contain-floats": !0
  };
  function r(s, v) {
    if (f.hasOwnProperty(s) && o.hasOwnProperty(v))
      return i.map(function(h) {
        return h + v;
      });
  }
  return Lf;
}
var XE = GE();
const VE = /* @__PURE__ */ ea(XE);
var qf = {}, Us = {};
const QE = /* @__PURE__ */ Mm(sE);
var Wh;
function ZE() {
  return Wh || (Wh = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = s;
    var f = QE, o = r(f);
    function r(v) {
      return v && v.__esModule ? v : { default: v };
    }
    function s(v) {
      return (0, o.default)(v);
    }
  })(Us)), Us;
}
var Ph;
function KE() {
  if (Ph) return qf;
  Ph = 1, Object.defineProperty(qf, "__esModule", {
    value: !0
  }), qf.default = x;
  var i = /* @__PURE__ */ ZE(), f = h(i), o = /* @__PURE__ */ jm(), r = h(o), s = Um(), v = h(s);
  function h(m) {
    return m && m.__esModule ? m : { default: m };
  }
  var T = {
    transition: !0,
    transitionProperty: !0,
    WebkitTransition: !0,
    WebkitTransitionProperty: !0,
    MozTransition: !0,
    MozTransitionProperty: !0
  }, _ = {
    Webkit: "-webkit-",
    Moz: "-moz-",
    ms: "-ms-"
  };
  function A(m, z) {
    if ((0, r.default)(m))
      return m;
    for (var q = m.split(/,(?![^()]*(?:\([^()]*\))?\))/g), L = 0, j = q.length; L < j; ++L) {
      var D = q[L], H = [D];
      for (var M in z) {
        var F = (0, f.default)(M);
        if (D.indexOf(F) > -1 && F !== "order")
          for (var te = z[M], V = 0, J = te.length; V < J; ++V)
            H.unshift(D.replace(F, _[te[V]] + F));
      }
      q[L] = H.join(",");
    }
    return q.join(",");
  }
  function x(m, z, q, L) {
    if (typeof z == "string" && T.hasOwnProperty(m)) {
      var j = A(z, L), D = j.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(M) {
        return !/-moz-|-ms-/.test(M);
      }).join(",");
      if (m.indexOf("Webkit") > -1)
        return D;
      var H = j.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(M) {
        return !/-webkit-|-ms-/.test(M);
      }).join(",");
      return m.indexOf("Moz") > -1 ? H : (q["Webkit" + (0, v.default)(m)] = D, q["Moz" + (0, v.default)(m)] = H, j);
    }
  }
  return qf;
}
var JE = KE();
const kE = /* @__PURE__ */ ea(JE);
var Ue = ["Webkit"], WE = ["Moz"], PE = ["Webkit", "Moz"], Ve = ["Webkit", "ms"], $E = ["Webkit", "Moz", "ms"];
const IE = {
  plugins: [DE, UE, LE, jE, VE, kE],
  prefixMap: {
    appearance: $E,
    userSelect: PE,
    textEmphasisPosition: Ve,
    textEmphasis: Ve,
    textEmphasisStyle: Ve,
    textEmphasisColor: Ve,
    boxDecorationBreak: Ve,
    clipPath: Ue,
    maskImage: Ve,
    maskMode: Ve,
    maskRepeat: Ve,
    maskPosition: Ve,
    maskClip: Ve,
    maskOrigin: Ve,
    maskSize: Ve,
    maskComposite: Ve,
    mask: Ve,
    maskBorderSource: Ve,
    maskBorderMode: Ve,
    maskBorderSlice: Ve,
    maskBorderWidth: Ve,
    maskBorderOutset: Ve,
    maskBorderRepeat: Ve,
    maskBorder: Ve,
    maskType: Ve,
    textDecorationStyle: Ue,
    textDecorationSkip: Ue,
    textDecorationLine: Ue,
    textDecorationColor: Ue,
    filter: Ue,
    breakAfter: Ue,
    breakBefore: Ue,
    breakInside: Ue,
    columnCount: Ue,
    columnFill: Ue,
    columnGap: Ue,
    columnRule: Ue,
    columnRuleColor: Ue,
    columnRuleStyle: Ue,
    columnRuleWidth: Ue,
    columns: Ue,
    columnSpan: Ue,
    columnWidth: Ue,
    backdropFilter: Ue,
    hyphens: Ue,
    flowInto: Ue,
    flowFrom: Ue,
    regionFragment: Ue,
    textOrientation: Ue,
    tabSize: WE,
    fontKerning: Ue,
    textSizeAdjust: Ue
  }
};
var FE = F1(IE), ep = ["animationKeyframes"], $h = /* @__PURE__ */ new Map(), tp = {}, lp = 1, ap = 3, np = {
  borderColor: 2,
  borderRadius: 2,
  borderStyle: 2,
  borderWidth: 2,
  display: 2,
  flex: 2,
  inset: 2,
  margin: 2,
  overflow: 2,
  overscrollBehavior: 2,
  padding: 2,
  insetBlock: 2.1,
  insetInline: 2.1,
  marginInline: 2.1,
  marginBlock: 2.1,
  paddingInline: 2.1,
  paddingBlock: 2.1,
  borderBlockStartColor: 2.2,
  borderBlockStartStyle: 2.2,
  borderBlockStartWidth: 2.2,
  borderBlockEndColor: 2.2,
  borderBlockEndStyle: 2.2,
  borderBlockEndWidth: 2.2,
  borderInlineStartColor: 2.2,
  borderInlineStartStyle: 2.2,
  borderInlineStartWidth: 2.2,
  borderInlineEndColor: 2.2,
  borderInlineEndStyle: 2.2,
  borderInlineEndWidth: 2.2,
  borderEndStartRadius: 2.2,
  borderEndEndRadius: 2.2,
  borderStartStartRadius: 2.2,
  borderStartEndRadius: 2.2,
  insetBlockEnd: 2.2,
  insetBlockStart: 2.2,
  insetInlineEnd: 2.2,
  insetInlineStart: 2.2,
  marginBlockStart: 2.2,
  marginBlockEnd: 2.2,
  marginInlineStart: 2.2,
  marginInlineEnd: 2.2,
  paddingBlockStart: 2.2,
  paddingBlockEnd: 2.2,
  paddingInlineStart: 2.2,
  paddingInlineEnd: 2.2
}, Js = "borderTopLeftRadius", ks = "borderTopRightRadius", Ws = "borderBottomLeftRadius", Ps = "borderBottomRightRadius", $s = "borderLeftColor", Is = "borderLeftStyle", Fs = "borderLeftWidth", ed = "borderRightColor", td = "borderRightStyle", ld = "borderRightWidth", ad = "right", nd = "marginLeft", ud = "marginRight", id = "paddingLeft", rd = "paddingRight", fd = "left", Zf = {
  [Js]: ks,
  [ks]: Js,
  [Ws]: Ps,
  [Ps]: Ws,
  [$s]: ed,
  [Is]: td,
  [Fs]: ld,
  [ed]: $s,
  [td]: Is,
  [ld]: Fs,
  [fd]: ad,
  [nd]: ud,
  [ud]: nd,
  [id]: rd,
  [rd]: id,
  [ad]: fd
}, Ui = {
  borderStartStartRadius: Js,
  borderStartEndRadius: ks,
  borderEndStartRadius: Ws,
  borderEndEndRadius: Ps,
  borderInlineStartColor: $s,
  borderInlineStartStyle: Is,
  borderInlineStartWidth: Fs,
  borderInlineEndColor: ed,
  borderInlineEndStyle: td,
  borderInlineEndWidth: ld,
  insetInlineEnd: ad,
  insetInlineStart: fd,
  marginInlineStart: nd,
  marginInlineEnd: ud,
  paddingInlineStart: id,
  paddingInlineEnd: rd
}, Gm = ["clear", "float", "textAlign"];
function up(i) {
  var f = {
    $$css: !0
  }, o = [];
  function r(s, v, h) {
    var T = fp(h, v), _ = v + T, A = $h.get(_), x;
    if (A != null)
      x = A[0], o.push(A[1]);
    else {
      var m = s !== v ? _ : T;
      x = Ed("r", s, m);
      var z = np[s] || ap, q = cp(x, v, h), L = [q, z];
      o.push(L), $h.set(_, [x, L]);
    }
    return x;
  }
  return Object.keys(i).sort().forEach((s) => {
    var v = i[s];
    if (v != null) {
      var h;
      if (Gm.indexOf(s) > -1) {
        var T = r(s, s, "left"), _ = r(s, s, "right");
        v === "start" ? h = [T, _] : v === "end" && (h = [_, T]);
      }
      var A = Ui[s];
      if (A != null) {
        var x = r(s, A, v), m = r(s, Zf[A], v);
        h = [x, m];
      }
      if (s === "transitionProperty") {
        for (var z = Array.isArray(v) ? v : [v], q = [], L = 0; L < z.length; L++) {
          var j = z[L];
          typeof j == "string" && Ui[j] != null && q.push(L);
        }
        if (q.length > 0) {
          var D = [...z], H = [...z];
          q.forEach((M) => {
            var F = D[M];
            if (typeof F == "string") {
              var te = Ui[F], V = Zf[te];
              D[M] = te, H[M] = V;
              var J = r(s, s, D), G = r(s, s, H);
              h = [J, G];
            }
          });
        }
      }
      h == null ? h = r(s, s, v) : f.$$css$localize = !0, f[s] = h;
    }
  }), [f, o];
}
function ip(i, f) {
  var o = {
    $$css: !0
  }, r = [], s = i.animationKeyframes, v = hu(i, ep), h = Ed("css", f, JSON.stringify(i)), T = "." + h, _;
  if (s != null) {
    var A = Xm(s), x = A[0], m = A[1];
    _ = x.join(","), r.push(...m);
  }
  var z = Ml(Ya(Ya({}, v), {}, {
    animationName: _
  }));
  return r.push("" + T + z), o[h] = h, [o, [[r, lp]]];
}
function rp(i, f) {
  var o = i || tp, r = {}, s = {}, v = function() {
    var A = o[h], x = h, m = A;
    if (!Object.prototype.hasOwnProperty.call(o, h) || A == null)
      return "continue";
    Gm.indexOf(h) > -1 && (A === "start" ? m = f ? "right" : "left" : A === "end" && (m = f ? "left" : "right"));
    var z = Ui[h];
    if (z != null && (x = f ? Zf[z] : z), h === "transitionProperty") {
      var q = Array.isArray(A) ? A : [A];
      q.forEach((L, j) => {
        if (typeof L == "string") {
          var D = Ui[L];
          D != null && (q[j] = f ? Zf[D] : D, m = q.join(" "));
        }
      });
    }
    r[x] || (s[x] = m), x === h && (r[x] = !0);
  };
  for (var h in o)
    var T = v();
  return Bm(s, !0);
}
function fp(i, f) {
  var o = Rt(i, f);
  return typeof o != "string" ? JSON.stringify(o || "") : o;
}
function cp(i, f, o) {
  var r = [], s = "." + i;
  switch (f) {
    case "animationKeyframes": {
      var v = Xm(o), h = v[0], T = v[1], _ = Ml({
        animationName: h.join(",")
      });
      r.push("" + s + _, ...T);
      break;
    }
    // Equivalent to using '::placeholder'
    case "placeholderTextColor": {
      var A = Ml({
        color: o,
        opacity: 1
      });
      r.push(s + "::-webkit-input-placeholder" + A, s + "::-moz-placeholder" + A, s + ":-ms-input-placeholder" + A, s + "::placeholder" + A);
      break;
    }
    // Polyfill for additional 'pointer-events' values
    // See d13f78622b233a0afc0c7a200c0a0792c8ca9e58
    // See https://reactnative.dev/docs/view#pointerevents
    case "pointerEvents": {
      var x = o;
      if (o === "auto")
        x = "auto!important";
      else if (o === "none") {
        x = "none!important";
        var m = Ml({
          pointerEvents: "none"
        });
        r.push(s + ">* " + m);
      } else if (o === "box-none") {
        x = "none!important";
        var z = Ml({
          pointerEvents: "auto"
        });
        r.push(s + ">* " + z);
      } else if (o === "box-only") {
        x = "auto!important";
        var q = Ml({
          pointerEvents: "none"
        });
        r.push(s + ">* " + q);
      }
      var L = Ml({
        pointerEvents: x
      });
      r.push("" + s + L);
      break;
    }
    // Polyfill for draft spec
    // https://drafts.csswg.org/css-scrollbars-1/
    case "scrollbarWidth": {
      o === "none" && r.push(s + "::-webkit-scrollbar{display:none}");
      var j = Ml({
        scrollbarWidth: o
      });
      r.push("" + s + j);
      break;
    }
    default: {
      var D = Ml({
        [f]: o
      });
      r.push("" + s + D);
      break;
    }
  }
  return r;
}
function Ml(i) {
  var f = FE(Bm(i)), o = Object.keys(f).map((r) => {
    var s = f[r], v = K1(r);
    return Array.isArray(s) ? s.map((h) => v + ":" + h).join(";") : v + ":" + s;
  }).sort().join(";");
  return "{" + o + ";}";
}
function Ed(i, f, o) {
  var r = X1(f + o);
  return i + "-" + r;
}
function op(i) {
  var f = ["-webkit-", ""], o = Ed("r", "animation", JSON.stringify(i)), r = "{" + Object.keys(i).map((v) => {
    var h = i[v], T = Ml(h);
    return "" + v + T;
  }).join("") + "}", s = f.map((v) => "@" + v + "keyframes " + o + r);
  return [o, s];
}
function Xm(i) {
  if (typeof i == "number")
    throw new Error("Invalid CSS keyframes type: " + typeof i);
  var f = [], o = [], r = Array.isArray(i) ? i : [i];
  return r.forEach((s) => {
    if (typeof s == "string")
      f.push(s);
    else {
      var v = op(s), h = v[0], T = v[1];
      f.push(h), o.push(...T);
    }
  }), [f, o];
}
function Hs(i, f, o) {
  if (ta) {
    var r = f ?? document, s = r.getElementById(i);
    if (s == null)
      if (s = document.createElement("style"), s.setAttribute("id", i), typeof o == "string" && s.appendChild(document.createTextNode(o)), r instanceof ShadowRoot)
        r.insertBefore(s, r.firstChild);
      else {
        var v = r.head;
        v && v.insertBefore(s, v.firstChild);
      }
    return s.sheet;
  } else
    return null;
}
var sp = Array.prototype.slice;
function ws(i) {
  var f = {}, o = {};
  if (i != null) {
    var r;
    sp.call(i.cssRules).forEach((h, T) => {
      var _ = h.cssText;
      if (_.indexOf("stylesheet-group") > -1)
        r = yp(h), f[r] = {
          start: T,
          rules: [_]
        };
      else {
        var A = Fh(_);
        A != null && (o[A] = !0, f[r].rules.push(_));
      }
    });
  }
  function s(h, T, _) {
    var A = Ih(f), x = A.indexOf(T), m = x + 1, z = A[m], q = z != null && f[z].start != null ? f[z].start : h.cssRules.length, L = mp(h, _, q);
    if (L) {
      f[T].start == null && (f[T].start = q);
      for (var j = m; j < A.length; j += 1) {
        var D = A[j], H = f[D].start || 0;
        f[D].start = H + 1;
      }
    }
    return L;
  }
  var v = {
    /**
     * The textContent of the style sheet.
     */
    getTextContent() {
      return Ih(f).map((h) => {
        var T = f[h].rules, _ = T.shift();
        return T.sort(), T.unshift(_), T.join(`
`);
      }).join(`
`);
    },
    /**
     * Insert a rule into the style sheet
     */
    insert(h, T) {
      var _ = Number(T);
      if (f[_] == null) {
        var A = dp(_);
        f[_] = {
          start: null,
          rules: [A]
        }, i != null && s(i, _, A);
      }
      var x = Fh(h);
      if (x != null && o[x] == null && (o[x] = !0, f[_].rules.push(h), i != null)) {
        var m = s(i, _, h);
        m || f[_].rules.pop();
      }
    }
  };
  return v;
}
function dp(i) {
  return '[stylesheet-group="' + i + '"]{}';
}
var vp = /["']/g;
function yp(i) {
  return Number(i.selectorText.split(vp)[1]);
}
function Ih(i) {
  return Object.keys(i).map(Number).sort((f, o) => f > o ? 1 : -1);
}
var hp = /\s*([,])\s*/g;
function Fh(i) {
  var f = i.split("{")[0].trim();
  return f !== "" ? f.replace(hp, "$1") : null;
}
function mp(i, f, o) {
  try {
    return i.insertRule(f, o), !0;
  } catch {
    return !1;
  }
}
var gp = "react-native-stylesheet", Ls = /* @__PURE__ */ new WeakMap(), cl = [], em = [
  // minimal top-level reset
  "html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}",
  "body{margin:0;}",
  // minimal form pseudo-element reset
  "button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}",
  "input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}"
];
function Sp(i, f) {
  f === void 0 && (f = gp);
  var o;
  if (ta) {
    var r = document;
    if (cl.length === 0)
      o = ws(Hs(f)), em.forEach((T) => {
        o.insert(T, 0);
      }), Ls.set(r, cl.length), cl.push(o);
    else {
      var s = Ls.get(r);
      if (s == null) {
        var v = cl[0], h = v != null ? v.getTextContent() : "";
        o = ws(Hs(f, r, h)), Ls.set(r, cl.length), cl.push(o);
      } else
        o = cl[s];
    }
  } else
    cl.length === 0 ? (o = ws(Hs(f)), em.forEach((T) => {
      o.insert(T, 0);
    }), cl.push(o)) : o = cl[0];
  return {
    getTextContent() {
      return o.getTextContent();
    },
    id: f,
    insert(T, _) {
      cl.forEach((A) => {
        A.insert(T, _);
      });
    }
  };
}
var Yf = {}, tm;
function bp() {
  if (tm) return Yf;
  tm = 1, Object.defineProperty(Yf, "__esModule", {
    value: !0
  }), Yf.localizeStyle = r;
  var i = /* @__PURE__ */ new WeakMap(), f = "$$css$localize";
  function o(s, v) {
    var h = {};
    for (var T in s)
      if (T !== f) {
        var _ = s[T];
        Array.isArray(_) ? h[T] = v ? _[1] : _[0] : h[T] = _;
      }
    return h;
  }
  function r(s, v) {
    if (s[f] != null) {
      var h = v ? 1 : 0;
      if (i.has(s)) {
        var T = i.get(s), _ = T[h];
        return _ == null && (_ = o(s, v), T[h] = _, i.set(s, T)), _;
      }
      var A = o(s, v), x = new Array(2);
      return x[h] = A, i.set(s, x), A;
    }
    return s;
  }
  return Yf;
}
var qs, lm;
function Ep() {
  return lm || (lm = 1, qs = /* @__PURE__ */ bp()), qs;
}
var pp = /* @__PURE__ */ Ep(), Tp = {}, Vm = {
  height: 0,
  width: 0
}, Rp = (i) => {
  var f = i.shadowColor, o = i.shadowOffset, r = i.shadowOpacity, s = i.shadowRadius, v = o || Vm, h = v.height, T = v.width, _ = Rt(T), A = Rt(h), x = Rt(s || 0), m = bd(f || "black", r);
  if (m != null && _ != null && A != null && x != null)
    return _ + " " + A + " " + x + " " + m;
}, Op = (i) => {
  var f = i.textShadowColor, o = i.textShadowOffset, r = i.textShadowRadius, s = o || Vm, v = s.height, h = s.width, T = r || 0, _ = Rt(h), A = Rt(v), x = Rt(T), m = Rt(f, "textShadowColor");
  if (m && (v !== 0 || h !== 0 || T !== 0) && _ != null && A != null && x != null)
    return _ + " " + A + " " + x + " " + m;
}, _p = (i) => {
  if (typeof i == "string")
    return i;
  var f = Rt(i.offsetX) || 0, o = Rt(i.offsetY) || 0, r = Rt(i.blurRadius) || 0, s = Rt(i.spreadDistance) || 0, v = bd(i.color) || "black", h = i.inset ? "inset " : "";
  return "" + h + f + " " + o + " " + r + " " + s + " " + v;
}, Ap = (i) => i.map(_p).join(", "), Cp = (i) => {
  var f = Object.keys(i)[0], o = i[f];
  if (f === "matrix" || f === "matrix3d")
    return f + "(" + o.join(",") + ")";
  var r = Rt(o, f);
  return f + "(" + r + ")";
}, xp = (i) => i.map(Cp).join(" "), zp = (i) => i.map((f) => Rt(f)).join(" "), Mp = {
  borderBottomEndRadius: "borderEndEndRadius",
  borderBottomStartRadius: "borderEndStartRadius",
  borderTopEndRadius: "borderStartEndRadius",
  borderTopStartRadius: "borderStartStartRadius",
  borderEndColor: "borderInlineEndColor",
  borderEndStyle: "borderInlineEndStyle",
  borderEndWidth: "borderInlineEndWidth",
  borderStartColor: "borderInlineStartColor",
  borderStartStyle: "borderInlineStartStyle",
  borderStartWidth: "borderInlineStartWidth",
  end: "insetInlineEnd",
  marginEnd: "marginInlineEnd",
  marginHorizontal: "marginInline",
  marginStart: "marginInlineStart",
  marginVertical: "marginBlock",
  paddingEnd: "paddingInlineEnd",
  paddingHorizontal: "paddingInline",
  paddingStart: "paddingInlineStart",
  paddingVertical: "paddingBlock",
  start: "insetInlineStart"
}, Dp = {
  elevation: !0,
  overlayColor: !0,
  resizeMode: !0,
  tintColor: !0
}, Qm = function(f, o) {
  o === void 0 && (o = {});
  var r = f || Tp, s = {};
  if (o.shadow, r.shadowColor != null || r.shadowOffset != null || r.shadowOpacity != null || r.shadowRadius != null) {
    var v = Rp(r);
    v != null && (s.boxShadow = v);
  }
  if (o.textShadow, r.textShadowColor != null || r.textShadowOffset != null || r.textShadowRadius != null) {
    var h = Op(r);
    if (h != null && s.textShadow == null) {
      var T = r.textShadow, _ = T ? T + ", " + h : h;
      s.textShadow = _;
    }
  }
  for (var A in r)
    if (
      // Ignore some React Native styles
      !(Dp[A] != null || A === "shadowColor" || A === "shadowOffset" || A === "shadowOpacity" || A === "shadowRadius" || A === "textShadowColor" || A === "textShadowOffset" || A === "textShadowRadius")
    ) {
      var x = r[A], m = Mp[A] || A, z = x;
      if (!(!Object.prototype.hasOwnProperty.call(r, A) || m !== A && r[m] != null))
        if (m === "aspectRatio" && typeof z == "number")
          s[m] = z.toString();
        else if (m === "boxShadow") {
          Array.isArray(z) && (z = Ap(z));
          var q = s.boxShadow;
          s.boxShadow = q ? z + ", " + q : z;
        } else m === "fontVariant" ? (Array.isArray(z) && z.length > 0 && (z = z.join(" ")), s[m] = z) : m === "textAlignVertical" ? r.verticalAlign == null && (s.verticalAlign = z === "center" ? "middle" : z) : m === "transform" ? (Array.isArray(z) && (z = xp(z)), s.transform = z) : m === "transformOrigin" ? (Array.isArray(z) && (z = zp(z)), s.transformOrigin = z) : s[m] = z;
    }
  return s;
}, Ci = {}, am;
function Np() {
  if (am) return Ci;
  am = 1, Object.defineProperty(Ci, "__esModule", {
    value: !0
  }), Ci.styleq = void 0;
  var i = /* @__PURE__ */ new WeakMap(), f = "$$css";
  function o(s) {
    var v, h, T;
    return s != null && (v = s.disableCache === !0, h = s.disableMix === !0, T = s.transform), function() {
      for (var A = [], x = "", m = null, z = v ? null : i, q = new Array(arguments.length), L = 0; L < arguments.length; L++)
        q[L] = arguments[L];
      for (; q.length > 0; ) {
        var j = q.pop();
        if (!(j == null || j === !1)) {
          if (Array.isArray(j)) {
            for (var D = 0; D < j.length; D++)
              q.push(j[D]);
            continue;
          }
          var H = T != null ? T(j) : j;
          if (H.$$css) {
            var M = "";
            if (z != null && z.has(H)) {
              var F = z.get(H);
              F != null && (M = F[0], A.push.apply(A, F[1]), z = F[2]);
            } else {
              var te = [];
              for (var V in H) {
                var J = H[V];
                V !== f && (typeof J == "string" || J === null ? A.includes(V) || (A.push(V), z != null && te.push(V), typeof J == "string" && (M += M ? " " + J : J)) : console.error("styleq: ".concat(V, " typeof ").concat(String(J), ' is not "string" or "null".')));
              }
              if (z != null) {
                var G = /* @__PURE__ */ new WeakMap();
                z.set(H, [M, te, G]), z = G;
              }
            }
            M && (x = x ? M + " " + x : M);
          } else if (h)
            m == null && (m = {}), m = Object.assign({}, H, m);
          else {
            var k = null;
            for (var be in H) {
              var de = H[be];
              de !== void 0 && (A.includes(be) || (de != null && (m == null && (m = {}), k == null && (k = {}), k[be] = de), A.push(be), z = null));
            }
            k != null && (m = Object.assign(k, m));
          }
        }
      }
      var Me = [x, m];
      return Me;
    };
  }
  var r = o();
  return Ci.styleq = r, r.factory = o, Ci;
}
var Bp = /* @__PURE__ */ Np(), Up = ["writingDirection"], Zm = /* @__PURE__ */ new WeakMap(), Kf = Sp(), Km = {
  shadow: !0,
  textShadow: !0
};
function Hp(i, f) {
  f === void 0 && (f = {});
  var o = f, r = o.writingDirection, s = hu(o, Up), v = r === "rtl";
  return Bp.styleq.factory({
    transform(h) {
      var T = Zm.get(h);
      return T != null ? pp.localizeStyle(T, v) : Qm(h, Ya(Ya({}, Km), s));
    }
  })(i);
}
function Jm(i) {
  i.forEach((f) => {
    var o = f[0], r = f[1];
    Kf != null && o.forEach((s) => {
      Kf.insert(s, r);
    });
  });
}
function wp(i) {
  var f = up(Qm(i, Km)), o = f[0], r = f[1];
  return Jm(r), o;
}
function Lp(i, f) {
  var o = ip(i, f), r = o[0], s = o[1];
  return Jm(s), r;
}
var km = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}, qp = Wm({
  x: Ya({}, km)
}).x;
function Wm(i) {
  return Object.keys(i).forEach((f) => {
    var o = i[f];
    if (o != null && o.$$css !== !0) {
      var r;
      f.indexOf("$raw") > -1 ? r = Lp(o, f.split("$raw")[0]) : r = wp(o), Zm.set(o, r);
    }
  }), i;
}
function Yp(i, f) {
  return [i, f];
}
function jp() {
  for (var i = arguments.length, f = new Array(i), o = 0; o < i; o++)
    f[o] = arguments[o];
  for (var r = f.flat(1 / 0), s = {}, v = 0; v < r.length; v++) {
    var h = r[v];
    h != null && typeof h == "object" && Object.assign(s, h);
  }
  return s;
}
function Gp() {
  return {
    id: Kf.id,
    textContent: Kf.getTextContent()
  };
}
function la(i, f) {
  f === void 0 && (f = {});
  var o = f.writingDirection === "rtl", r = Hp(i, f);
  return Array.isArray(r) && r[1] != null && (r[1] = rp(r[1], o)), r;
}
la.absoluteFill = qp;
la.absoluteFillObject = km;
la.create = Wm;
la.compose = Yp;
la.flatten = jp;
la.getSheet = Gp;
la.hairlineWidth = 1;
ta && window.__REACT_DEVTOOLS_GLOBAL_HOOK__ && (window.__REACT_DEVTOOLS_GLOBAL_HOOK__.resolveRNStyle = la.flatten);
var mu = la, Xp = ["aria-activedescendant", "accessibilityActiveDescendant", "aria-atomic", "accessibilityAtomic", "aria-autocomplete", "accessibilityAutoComplete", "aria-busy", "accessibilityBusy", "aria-checked", "accessibilityChecked", "aria-colcount", "accessibilityColumnCount", "aria-colindex", "accessibilityColumnIndex", "aria-colspan", "accessibilityColumnSpan", "aria-controls", "accessibilityControls", "aria-current", "accessibilityCurrent", "aria-describedby", "accessibilityDescribedBy", "aria-details", "accessibilityDetails", "aria-disabled", "accessibilityDisabled", "aria-errormessage", "accessibilityErrorMessage", "aria-expanded", "accessibilityExpanded", "aria-flowto", "accessibilityFlowTo", "aria-haspopup", "accessibilityHasPopup", "aria-hidden", "accessibilityHidden", "aria-invalid", "accessibilityInvalid", "aria-keyshortcuts", "accessibilityKeyShortcuts", "aria-label", "accessibilityLabel", "aria-labelledby", "accessibilityLabelledBy", "aria-level", "accessibilityLevel", "aria-live", "accessibilityLiveRegion", "aria-modal", "accessibilityModal", "aria-multiline", "accessibilityMultiline", "aria-multiselectable", "accessibilityMultiSelectable", "aria-orientation", "accessibilityOrientation", "aria-owns", "accessibilityOwns", "aria-placeholder", "accessibilityPlaceholder", "aria-posinset", "accessibilityPosInSet", "aria-pressed", "accessibilityPressed", "aria-readonly", "accessibilityReadOnly", "aria-required", "accessibilityRequired", "role", "accessibilityRole", "aria-roledescription", "accessibilityRoleDescription", "aria-rowcount", "accessibilityRowCount", "aria-rowindex", "accessibilityRowIndex", "aria-rowspan", "accessibilityRowSpan", "aria-selected", "accessibilitySelected", "aria-setsize", "accessibilitySetSize", "aria-sort", "accessibilitySort", "aria-valuemax", "accessibilityValueMax", "aria-valuemin", "accessibilityValueMin", "aria-valuenow", "accessibilityValueNow", "aria-valuetext", "accessibilityValueText", "dataSet", "focusable", "id", "nativeID", "pointerEvents", "style", "tabIndex", "testID"], Vp = {}, Qp = Object.prototype.hasOwnProperty, Zp = Array.isArray, Kp = /[A-Z]/g;
function Jp(i) {
  return "-" + i.toLowerCase();
}
function kp(i) {
  return i.replace(Kp, Jp);
}
function vu(i) {
  return Zp(i) ? i.join(" ") : i;
}
var Wp = mu.create({
  auto: {
    pointerEvents: "auto"
  },
  "box-none": {
    pointerEvents: "box-none"
  },
  "box-only": {
    pointerEvents: "box-only"
  },
  none: {
    pointerEvents: "none"
  }
}), Pp = (i, f, o) => {
  f || (f = Vp);
  var r = f, s = r["aria-activedescendant"], v = r.accessibilityActiveDescendant, h = r["aria-atomic"], T = r.accessibilityAtomic, _ = r["aria-autocomplete"], A = r.accessibilityAutoComplete, x = r["aria-busy"], m = r.accessibilityBusy, z = r["aria-checked"], q = r.accessibilityChecked, L = r["aria-colcount"], j = r.accessibilityColumnCount, D = r["aria-colindex"], H = r.accessibilityColumnIndex, M = r["aria-colspan"], F = r.accessibilityColumnSpan, te = r["aria-controls"], V = r.accessibilityControls, J = r["aria-current"], G = r.accessibilityCurrent, k = r["aria-describedby"], be = r.accessibilityDescribedBy, de = r["aria-details"], Me = r.accessibilityDetails, He = r["aria-disabled"], _e = r.accessibilityDisabled, Fe = r["aria-errormessage"], De = r.accessibilityErrorMessage, w = r["aria-expanded"], ee = r.accessibilityExpanded, Q = r["aria-flowto"], he = r.accessibilityFlowTo, ce = r["aria-haspopup"], je = r.accessibilityHasPopup, at = r["aria-hidden"], Mt = r.accessibilityHidden, S = r["aria-invalid"], U = r.accessibilityInvalid, $ = r["aria-keyshortcuts"], W = r.accessibilityKeyShortcuts, ne = r["aria-label"], Ee = r.accessibilityLabel, pe = r["aria-labelledby"], P = r.accessibilityLabelledBy, ae = r["aria-level"], tl = r.accessibilityLevel, mn = r["aria-live"], aa = r.accessibilityLiveRegion, Dt = r["aria-modal"], $e = r.accessibilityModal, Ae = r["aria-multiline"], Gt = r.accessibilityMultiline, na = r["aria-multiselectable"], yl = r.accessibilityMultiSelectable, ja = r["aria-orientation"], gn = r.accessibilityOrientation, Bl = r["aria-owns"], gu = r.accessibilityOwns, Ga = r["aria-placeholder"], Su = r.accessibilityPlaceholder, bu = r["aria-posinset"], hl = r.accessibilityPosInSet, Sn = r["aria-pressed"], Eu = r.accessibilityPressed, Gi = r["aria-readonly"], Xi = r.accessibilityReadOnly, bn = r["aria-required"], En = r.accessibilityRequired;
  r.role, r.accessibilityRole;
  var pn = r["aria-roledescription"], $f = r.accessibilityRoleDescription, Vi = r["aria-rowcount"], yt = r.accessibilityRowCount, Qi = r["aria-rowindex"], Zi = r.accessibilityRowIndex, pu = r["aria-rowspan"], Tn = r.accessibilityRowSpan, Ki = r["aria-selected"], Ji = r.accessibilitySelected, ki = r["aria-setsize"], If = r.accessibilitySetSize, ua = r["aria-sort"], ht = r.accessibilitySort, ll = r["aria-valuemax"], mt = r.accessibilityValueMax, Wi = r["aria-valuemin"], Ff = r.accessibilityValueMin, Pi = r["aria-valuenow"], Rn = r.accessibilityValueNow, Xa = r["aria-valuetext"], On = r.accessibilityValueText, Xt = r.dataSet, Ul = r.focusable, ia = r.id, $i = r.nativeID, Ii = r.pointerEvents, Fi = r.style, Hl = r.tabIndex, ra = r.testID, Z = hu(r, Xp), er = He || _e, Vt = Nm.propsToAriaRole(f), Tu = s ?? v;
  Tu != null && (Z["aria-activedescendant"] = Tu);
  var _n = h != null ? s : T;
  _n != null && (Z["aria-atomic"] = _n);
  var An = _ ?? A;
  An != null && (Z["aria-autocomplete"] = An);
  var Ru = x ?? m;
  Ru != null && (Z["aria-busy"] = Ru);
  var Ou = z ?? q;
  Ou != null && (Z["aria-checked"] = Ou);
  var Qt = L ?? j;
  Qt != null && (Z["aria-colcount"] = Qt);
  var Ke = D ?? H;
  Ke != null && (Z["aria-colindex"] = Ke);
  var nt = M ?? F;
  nt != null && (Z["aria-colspan"] = nt);
  var wl = te ?? V;
  wl != null && (Z["aria-controls"] = vu(wl));
  var _u = J ?? G;
  _u != null && (Z["aria-current"] = _u);
  var tr = k ?? be;
  tr != null && (Z["aria-describedby"] = vu(tr));
  var lr = de ?? Me;
  lr != null && (Z["aria-details"] = lr), er === !0 && (Z["aria-disabled"] = !0, (i === "button" || i === "form" || i === "input" || i === "select" || i === "textarea") && (Z.disabled = !0));
  var Au = Fe ?? De;
  Au != null && (Z["aria-errormessage"] = Au);
  var fa = w ?? ee;
  fa != null && (Z["aria-expanded"] = fa);
  var Va = Q ?? he;
  Va != null && (Z["aria-flowto"] = vu(Va));
  var Qa = ce ?? je;
  Qa != null && (Z["aria-haspopup"] = Qa);
  var ml = at ?? Mt;
  ml === !0 && (Z["aria-hidden"] = ml);
  var Ll = S ?? U;
  Ll != null && (Z["aria-invalid"] = Ll);
  var ca = $ ?? W;
  ca != null && (Z["aria-keyshortcuts"] = vu(ca));
  var ql = ne ?? Ee;
  ql != null && (Z["aria-label"] = ql);
  var Qe = pe ?? P;
  Qe != null && (Z["aria-labelledby"] = vu(Qe));
  var Cu = ae ?? tl;
  Cu != null && (Z["aria-level"] = Cu);
  var Cn = mn ?? aa;
  Cn != null && (Z["aria-live"] = Cn === "none" ? "off" : Cn);
  var xu = Dt ?? $e;
  xu != null && (Z["aria-modal"] = xu);
  var gl = Ae ?? Gt;
  gl != null && (Z["aria-multiline"] = gl);
  var Yl = na ?? yl;
  Yl != null && (Z["aria-multiselectable"] = Yl);
  var ar = ja ?? gn;
  ar != null && (Z["aria-orientation"] = ar);
  var zu = Bl ?? gu;
  zu != null && (Z["aria-owns"] = vu(zu));
  var Mu = Ga ?? Su;
  Mu != null && (Z["aria-placeholder"] = Mu);
  var nr = bu ?? hl;
  nr != null && (Z["aria-posinset"] = nr);
  var Se = Sn ?? Eu;
  Se != null && (Z["aria-pressed"] = Se);
  var Du = Gi ?? Xi;
  Du != null && (Z["aria-readonly"] = Du, (i === "input" || i === "select" || i === "textarea") && (Z.readOnly = !0));
  var Za = bn ?? En;
  Za != null && (Z["aria-required"] = Za, (i === "input" || i === "select" || i === "textarea") && (Z.required = En)), Vt != null && (Z.role = Vt === "none" ? "presentation" : Vt);
  var Ka = pn ?? $f;
  Ka != null && (Z["aria-roledescription"] = Ka);
  var Zt = Vi ?? yt;
  Zt != null && (Z["aria-rowcount"] = Zt);
  var st = Qi ?? Zi;
  st != null && (Z["aria-rowindex"] = st);
  var Nu = pu ?? Tn;
  Nu != null && (Z["aria-rowspan"] = Nu);
  var ur = Ki ?? Ji;
  ur != null && (Z["aria-selected"] = ur);
  var xn = ki ?? If;
  xn != null && (Z["aria-setsize"] = xn);
  var Bu = ua ?? ht;
  Bu != null && (Z["aria-sort"] = Bu);
  var ir = ll ?? mt;
  ir != null && (Z["aria-valuemax"] = ir);
  var gt = Wi ?? Ff;
  gt != null && (Z["aria-valuemin"] = gt);
  var zn = Pi ?? Rn;
  zn != null && (Z["aria-valuenow"] = zn);
  var Uu = Xa ?? On;
  if (Uu != null && (Z["aria-valuetext"] = Uu), Xt != null) {
    for (var Ja in Xt)
      if (Qp.call(Xt, Ja)) {
        var oa = kp(Ja), Hu = Xt[Ja];
        Hu != null && (Z["data-" + oa] = Hu);
      }
  }
  Hl === 0 || Hl === "0" || Hl === -1 || Hl === "-1" ? Z.tabIndex = Hl : (Ul === !1 && (Z.tabIndex = "-1"), // These native elements are keyboard focusable by default
  i === "a" || i === "button" || i === "input" || i === "select" || i === "textarea" ? (Ul === !1 || _e === !0) && (Z.tabIndex = "-1") : /* These roles are made keyboard focusable by default */ Vt === "button" || Vt === "checkbox" || Vt === "link" || Vt === "radio" || Vt === "textbox" || Vt === "switch" ? Ul !== !1 && (Z.tabIndex = "0") : Ul === !0 && (Z.tabIndex = "0"));
  var wu = mu([Fi, Ii && Wp[Ii]], Ya({
    writingDirection: "ltr"
  }, o)), jl = wu[0], rr = wu[1];
  jl && (Z.className = jl), rr && (Z.style = rr);
  var Lu = ia ?? $i;
  return Lu != null && (Z.id = Lu), ra != null && (Z["data-testid"] = ra), Z.type == null && i === "button" && (Z.type = "button"), Z;
}, $p = /* @__PURE__ */ new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]), nm = /* @__PURE__ */ new Set([
  "ae",
  // Avestan
  "ar",
  // Arabic
  "arc",
  // Aramaic
  "bcc",
  // Southern Balochi
  "bqi",
  // Bakthiari
  "ckb",
  // Sorani
  "dv",
  // Dhivehi
  "fa",
  "far",
  // Persian
  "glk",
  // Gilaki
  "he",
  "iw",
  // Hebrew
  "khw",
  // Khowar
  "ks",
  // Kashmiri
  "ku",
  // Kurdish
  "mzn",
  // Mazanderani
  "nqo",
  // N'Ko
  "pnb",
  // Western Punjabi
  "ps",
  // Pashto
  "sd",
  // Sindhi
  "ug",
  // Uyghur
  "ur",
  // Urdu
  "yi"
  // Yiddish
]), um = /* @__PURE__ */ new Map();
function Ip(i) {
  var f = um.get(i);
  if (f)
    return f;
  var o = !1;
  if (Intl.Locale)
    try {
      var r = new Intl.Locale(i).maximize().script;
      o = $p.has(r);
    } catch {
      var s = i.split("-")[0];
      o = nm.has(s);
    }
  else {
    var v = i.split("-")[0];
    o = nm.has(v);
  }
  return um.set(i, o), o;
}
var Fp = {
  direction: "ltr",
  locale: "en-US"
}, Pm = /* @__PURE__ */ oe.createContext(Fp);
function pd(i) {
  return Ip(i) ? "rtl" : "ltr";
}
function eT(i) {
  var f = i.direction, o = i.locale, r = i.children, s = f || o;
  return s ? /* @__PURE__ */ ie.createElement(Pm.Provider, {
    children: r,
    value: {
      direction: o ? pd(o) : f,
      locale: o
    }
  }) : r;
}
function $m() {
  return oe.useContext(Pm);
}
var Im = (i, f, o) => {
  var r;
  i && i.constructor === String && (r = Nm.propsToAccessibilityComponent(f));
  var s = r || i, v = Pp(s, f, o), h = /* @__PURE__ */ ie.createElement(s, v), T = v.dir ? /* @__PURE__ */ ie.createElement(eT, {
    children: h,
    direction: v.dir,
    locale: v.lang
  }) : h;
  return T;
}, cd = (i) => {
  if (i != null) {
    var f = i.nodeType === 1;
    if (f && typeof i.getBoundingClientRect == "function")
      return i.getBoundingClientRect();
  }
}, Hi = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  flex: !0,
  flexGrow: !0,
  flexOrder: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  fontWeight: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowGap: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnGap: !0,
  gridColumnStart: !0,
  lineClamp: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  // SVG-related
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0,
  // transform types
  scale: !0,
  scaleX: !0,
  scaleY: !0,
  scaleZ: !0,
  // RN properties
  shadowOpacity: !0
}, tT = ["ms", "Moz", "O", "Webkit"], lT = (i, f) => i + f.charAt(0).toUpperCase() + f.substring(1);
Object.keys(Hi).forEach((i) => {
  tT.forEach((f) => {
    Hi[lT(f, i)] = Hi[i];
  });
});
function aT(i, f, o) {
  var r = f == null || typeof f == "boolean" || f === "";
  return r ? "" : !o && typeof f == "number" && f !== 0 && !(Hi.hasOwnProperty(i) && Hi[i]) ? f + "px" : ("" + f).trim();
}
function nT(i, f) {
  var o = i.style;
  for (var r in f)
    if (f.hasOwnProperty(r)) {
      var s = r.indexOf("--") === 0, v = aT(r, f[r], s);
      r === "float" && (r = "cssFloat"), s ? o.setProperty(r, v) : o[r] = v;
    }
}
var im = (i) => {
  var f = i.offsetHeight, o = i.offsetWidth, r = i.offsetLeft, s = i.offsetTop;
  for (i = i.offsetParent; i && i.nodeType === 1; )
    r += i.offsetLeft + i.clientLeft - i.scrollLeft, s += i.offsetTop + i.clientTop - i.scrollTop, i = i.offsetParent;
  return s -= window.scrollY, r -= window.scrollX, {
    width: o,
    height: f,
    top: s,
    left: r
  };
}, rm = (i, f, o) => {
  var r = f || i && i.parentNode;
  i && r && setTimeout(() => {
    if (i.isConnected && r.isConnected) {
      var s = im(r), v = im(i), h = v.height, T = v.left, _ = v.top, A = v.width, x = T - s.left, m = _ - s.top;
      o(x, m, A, h, T, _);
    }
  }, 0);
}, uT = {
  A: !0,
  BODY: !0,
  INPUT: !0,
  SELECT: !0,
  TEXTAREA: !0
}, Xf = {
  blur(i) {
    try {
      i.blur();
    } catch {
    }
  },
  focus(i) {
    try {
      var f = i.nodeName;
      i.getAttribute("tabIndex") == null && i.isContentEditable !== !0 && uT[f] == null && i.setAttribute("tabIndex", "-1"), i.focus();
    } catch {
    }
  },
  measure(i, f) {
    rm(i, null, f);
  },
  measureInWindow(i, f) {
    i && setTimeout(() => {
      var o = cd(i), r = o.height, s = o.left, v = o.top, h = o.width;
      f(s, v, h, r);
    }, 0);
  },
  measureLayout(i, f, o, r) {
    rm(i, f, r);
  },
  updateView(i, f) {
    for (var o in f)
      if (Object.prototype.hasOwnProperty.call(f, o)) {
        var r = f[o];
        switch (o) {
          case "style": {
            nT(i, r);
            break;
          }
          case "class":
          case "className": {
            i.setAttribute("class", r);
            break;
          }
          case "text":
          case "value":
            i.value = r;
            break;
          default:
            i.setAttribute(o, r);
        }
      }
  },
  configureNextLayoutAnimation(i, f) {
    f();
  },
  // mocks
  setLayoutAnimationEnabledExperimental() {
  }
};
function od() {
  return od = Object.assign ? Object.assign.bind() : function(i) {
    for (var f = 1; f < arguments.length; f++) {
      var o = arguments[f];
      for (var r in o) ({}).hasOwnProperty.call(o, r) && (i[r] = o[r]);
    }
    return i;
  }, od.apply(null, arguments);
}
var Fm = {
  children: !0,
  dataSet: !0,
  dir: !0,
  id: !0,
  ref: !0,
  suppressHydrationWarning: !0,
  tabIndex: !0,
  testID: !0,
  // @deprecated
  focusable: !0,
  nativeID: !0
}, eg = {
  "aria-activedescendant": !0,
  "aria-atomic": !0,
  "aria-autocomplete": !0,
  "aria-busy": !0,
  "aria-checked": !0,
  "aria-colcount": !0,
  "aria-colindex": !0,
  "aria-colspan": !0,
  "aria-controls": !0,
  "aria-current": !0,
  "aria-describedby": !0,
  "aria-details": !0,
  "aria-disabled": !0,
  "aria-errormessage": !0,
  "aria-expanded": !0,
  "aria-flowto": !0,
  "aria-haspopup": !0,
  "aria-hidden": !0,
  "aria-invalid": !0,
  "aria-keyshortcuts": !0,
  "aria-label": !0,
  "aria-labelledby": !0,
  "aria-level": !0,
  "aria-live": !0,
  "aria-modal": !0,
  "aria-multiline": !0,
  "aria-multiselectable": !0,
  "aria-orientation": !0,
  "aria-owns": !0,
  "aria-placeholder": !0,
  "aria-posinset": !0,
  "aria-pressed": !0,
  "aria-readonly": !0,
  "aria-required": !0,
  inert: !0,
  role: !0,
  "aria-roledescription": !0,
  "aria-rowcount": !0,
  "aria-rowindex": !0,
  "aria-rowspan": !0,
  "aria-selected": !0,
  "aria-setsize": !0,
  "aria-sort": !0,
  "aria-valuemax": !0,
  "aria-valuemin": !0,
  "aria-valuenow": !0,
  "aria-valuetext": !0,
  // @deprecated
  accessibilityActiveDescendant: !0,
  accessibilityAtomic: !0,
  accessibilityAutoComplete: !0,
  accessibilityBusy: !0,
  accessibilityChecked: !0,
  accessibilityColumnCount: !0,
  accessibilityColumnIndex: !0,
  accessibilityColumnSpan: !0,
  accessibilityControls: !0,
  accessibilityCurrent: !0,
  accessibilityDescribedBy: !0,
  accessibilityDetails: !0,
  accessibilityDisabled: !0,
  accessibilityErrorMessage: !0,
  accessibilityExpanded: !0,
  accessibilityFlowTo: !0,
  accessibilityHasPopup: !0,
  accessibilityHidden: !0,
  accessibilityInvalid: !0,
  accessibilityKeyShortcuts: !0,
  accessibilityLabel: !0,
  accessibilityLabelledBy: !0,
  accessibilityLevel: !0,
  accessibilityLiveRegion: !0,
  accessibilityModal: !0,
  accessibilityMultiline: !0,
  accessibilityMultiSelectable: !0,
  accessibilityOrientation: !0,
  accessibilityOwns: !0,
  accessibilityPlaceholder: !0,
  accessibilityPosInSet: !0,
  accessibilityPressed: !0,
  accessibilityReadOnly: !0,
  accessibilityRequired: !0,
  accessibilityRole: !0,
  accessibilityRoleDescription: !0,
  accessibilityRowCount: !0,
  accessibilityRowIndex: !0,
  accessibilityRowSpan: !0,
  accessibilitySelected: !0,
  accessibilitySetSize: !0,
  accessibilitySort: !0,
  accessibilityValueMax: !0,
  accessibilityValueMin: !0,
  accessibilityValueNow: !0,
  accessibilityValueText: !0
}, tg = {
  onClick: !0,
  onAuxClick: !0,
  onContextMenu: !0,
  onGotPointerCapture: !0,
  onLostPointerCapture: !0,
  onPointerCancel: !0,
  onPointerDown: !0,
  onPointerEnter: !0,
  onPointerMove: !0,
  onPointerLeave: !0,
  onPointerOut: !0,
  onPointerOver: !0,
  onPointerUp: !0
}, lg = {
  onBlur: !0,
  onFocus: !0
}, ag = {
  onKeyDown: !0,
  onKeyDownCapture: !0,
  onKeyUp: !0,
  onKeyUpCapture: !0
}, ng = {
  onMouseDown: !0,
  onMouseEnter: !0,
  onMouseLeave: !0,
  onMouseMove: !0,
  onMouseOver: !0,
  onMouseOut: !0,
  onMouseUp: !0
}, ug = {
  onTouchCancel: !0,
  onTouchCancelCapture: !0,
  onTouchEnd: !0,
  onTouchEndCapture: !0,
  onTouchMove: !0,
  onTouchMoveCapture: !0,
  onTouchStart: !0,
  onTouchStartCapture: !0
}, ig = {
  style: !0
};
function rg(i, f) {
  var o = {};
  for (var r in i)
    i.hasOwnProperty(r) && f[r] === !0 && (o[r] = i[r]);
  return o;
}
var Jf = ta ? oe.useLayoutEffect : oe.useEffect, sd = "__reactLayoutHandler", Ys = null;
function iT() {
  return ta && typeof window.ResizeObserver < "u" && Ys == null && (Ys = new window.ResizeObserver(function(i) {
    i.forEach((f) => {
      var o = f.target, r = o[sd];
      typeof r == "function" && Xf.measure(o, (s, v, h, T, _, A) => {
        var x = {
          // $FlowFixMe
          nativeEvent: {
            layout: {
              x: s,
              y: v,
              width: h,
              height: T,
              left: _,
              top: A
            }
          },
          timeStamp: Date.now()
        };
        Object.defineProperty(x.nativeEvent, "target", {
          enumerable: !0,
          get: () => f.target
        }), r(x);
      });
    });
  })), Ys;
}
function fg(i, f) {
  var o = iT();
  Jf(() => {
    var r = i.current;
    r != null && (r[sd] = f);
  }, [i, f]), Jf(() => {
    var r = i.current;
    return r != null && o != null && (typeof r[sd] == "function" ? o.observe(r) : o.unobserve(r)), () => {
      r != null && o != null && o.unobserve(r);
    };
  }, [i, o]);
}
function rT() {
  for (var i = arguments.length, f = new Array(i), o = 0; o < i; o++)
    f[o] = arguments[o];
  return function(s) {
    f.forEach((v) => {
      if (v != null) {
        if (typeof v == "function") {
          v(s);
          return;
        }
        if (typeof v == "object") {
          v.current = s;
          return;
        }
        console.error("mergeRefs cannot handle Refs of type boolean, number or string, received ref " + String(v));
      }
    });
  };
}
function Td() {
  for (var i = arguments.length, f = new Array(i), o = 0; o < i; o++)
    f[o] = arguments[o];
  return oe.useMemo(
    () => rT(...f),
    // eslint-disable-next-line
    [...f]
  );
}
var fm = typeof Symbol == "function" && typeof /* @__PURE__ */ Symbol() == "symbol" ? /* @__PURE__ */ Symbol() : Object.freeze({});
function dd(i) {
  var f = oe.useRef(fm);
  return f.current === fm && (f.current = i()), f.current;
}
function cg(i) {
  i.pointerEvents, i.style;
  var f = dd(() => (o) => {
    o != null && (o.measure = (r) => Xf.measure(o, r), o.measureLayout = (r, s, v) => Xf.measureLayout(o, r, v, s), o.measureInWindow = (r) => Xf.measureInWindow(o, r));
  });
  return f;
}
var cm = () => {
}, fT = {}, cT = [];
function om(i) {
  return i > 20 ? i % 20 : i;
}
function og(i, f) {
  var o, r = !1, s, v, h = i.changedTouches, T = i.type, _ = i.metaKey === !0, A = i.shiftKey === !0, x = h && h[0].force || 0, m = om(h && h[0].identifier || 0), z = h && h[0].clientX || i.clientX, q = h && h[0].clientY || i.clientY, L = h && h[0].pageX || i.pageX, j = h && h[0].pageY || i.pageY, D = typeof i.preventDefault == "function" ? i.preventDefault.bind(i) : cm, H = i.timeStamp;
  function M(G) {
    return Array.prototype.slice.call(G).map((k) => ({
      force: k.force,
      identifier: om(k.identifier),
      get locationX() {
        return V(k.clientX);
      },
      get locationY() {
        return J(k.clientY);
      },
      pageX: k.pageX,
      pageY: k.pageY,
      target: k.target,
      timestamp: H
    }));
  }
  if (h != null)
    s = M(h), v = M(i.touches);
  else {
    var F = [{
      force: x,
      identifier: m,
      get locationX() {
        return V(z);
      },
      get locationY() {
        return J(q);
      },
      pageX: L,
      pageY: j,
      target: i.target,
      timestamp: H
    }];
    s = F, v = T === "mouseup" || T === "dragstart" ? cT : F;
  }
  var te = {
    bubbles: !0,
    cancelable: !0,
    // `currentTarget` is set before dispatch
    currentTarget: null,
    defaultPrevented: i.defaultPrevented,
    dispatchConfig: fT,
    eventPhase: i.eventPhase,
    isDefaultPrevented() {
      return i.defaultPrevented;
    },
    isPropagationStopped() {
      return r;
    },
    isTrusted: i.isTrusted,
    nativeEvent: {
      altKey: !1,
      ctrlKey: !1,
      metaKey: _,
      shiftKey: A,
      changedTouches: s,
      force: x,
      identifier: m,
      get locationX() {
        return V(z);
      },
      get locationY() {
        return J(q);
      },
      pageX: L,
      pageY: j,
      target: i.target,
      timestamp: H,
      touches: v,
      type: T
    },
    persist: cm,
    preventDefault: D,
    stopPropagation() {
      r = !0;
    },
    target: i.target,
    timeStamp: H,
    touchHistory: f.touchHistory
  };
  function V(G) {
    if (o = o || cd(te.currentTarget), o)
      return G - o.left;
  }
  function J(G) {
    if (o = o || cd(te.currentTarget), o)
      return G - o.top;
  }
  return te;
}
var oT = "mousedown", sT = "mousemove", dT = "mouseup", vT = "dragstart", yT = "touchstart", hT = "touchmove", mT = "touchend", gT = "touchcancel", ST = "scroll", bT = "select", ET = "selectionchange";
function sg(i) {
  return i === yT || i === oT;
}
function dg(i) {
  return i === hT || i === sT;
}
function vg(i) {
  return i === mT || i === dT || yg(i);
}
function yg(i) {
  return i === gT || i === vT;
}
function pT(i) {
  return i === ST;
}
function TT(i) {
  return i === bT || i === ET;
}
function RT() {
  var i = window.getSelection(), f = i.toString(), o = i.anchorNode, r = i.focusNode, s = o && o.nodeType === window.Node.TEXT_NODE || r && r.nodeType === window.Node.TEXT_NODE;
  return f.length >= 1 && f !== `
` && s;
}
var hg = "__reactResponderId";
function OT(i) {
  if (i.type === "selectionchange") {
    var f = window.getSelection().anchorNode;
    return sm(f);
  } else {
    var o = i.composedPath != null ? i.composedPath() : sm(i.target);
    return o;
  }
}
function sm(i) {
  for (var f = []; i != null && i !== document.body; )
    f.push(i), i = i.parentNode;
  return f;
}
function _T(i) {
  return i != null ? i[hg] : null;
}
function AT(i, f) {
  i != null && (i[hg] = f);
}
function CT(i) {
  for (var f = [], o = [], r = OT(i), s = 0; s < r.length; s++) {
    var v = r[s], h = _T(v);
    h != null && (f.push(h), o.push(v));
  }
  return {
    idPath: f,
    nodePath: o
  };
}
function xT(i, f) {
  var o = i.length, r = f.length;
  if (
    // If either path is empty
    o === 0 || r === 0 || // If the last elements aren't the same there can't be a common ancestor
    // that is connected to the responder system
    i[o - 1] !== f[r - 1]
  )
    return null;
  var s = i[0], v = 0, h = f[0], T = 0;
  o - r > 0 && (v = o - r, s = i[v], o = r), r - o > 0 && (T = r - o, h = f[T], r = o);
  for (var _ = o; _--; ) {
    if (s === h)
      return s;
    s = i[v++], h = f[T++];
  }
  return null;
}
function zT(i, f) {
  if (!f || f.length === 0)
    return !1;
  for (var o = 0; o < f.length; o++) {
    var r = f[o].target;
    if (r != null && i.contains(r))
      return !0;
  }
  return !1;
}
function MT(i) {
  return i.type === "selectionchange" ? RT() : i.type === "select";
}
function DT(i) {
  var f = i.altKey, o = i.button, r = i.buttons, s = i.ctrlKey, v = i.type, h = v === "touchstart" || v === "touchmove", T = v === "mousedown" && (o === 0 || r === 1), _ = v === "mousemove" && r === 1, A = f === !1 && s === !1;
  return !!(h || T && A || _ && A);
}
var dm = 20;
function el(i) {
  return i.timeStamp || i.timestamp;
}
function NT(i) {
  return {
    touchActive: !0,
    startPageX: i.pageX,
    startPageY: i.pageY,
    startTimeStamp: el(i),
    currentPageX: i.pageX,
    currentPageY: i.pageY,
    currentTimeStamp: el(i),
    previousPageX: i.pageX,
    previousPageY: i.pageY,
    previousTimeStamp: el(i)
  };
}
function BT(i, f) {
  i.touchActive = !0, i.startPageX = f.pageX, i.startPageY = f.pageY, i.startTimeStamp = el(f), i.currentPageX = f.pageX, i.currentPageY = f.pageY, i.currentTimeStamp = el(f), i.previousPageX = f.pageX, i.previousPageY = f.pageY, i.previousTimeStamp = el(f);
}
function Rd(i) {
  var f = i.identifier;
  return f == null && console.error("Touch object is missing identifier."), f;
}
function UT(i, f) {
  var o = Rd(i), r = f.touchBank[o];
  r ? BT(r, i) : f.touchBank[o] = NT(i), f.mostRecentTimeStamp = el(i);
}
function HT(i, f) {
  var o = f.touchBank[Rd(i)];
  o ? (o.touchActive = !0, o.previousPageX = o.currentPageX, o.previousPageY = o.currentPageY, o.previousTimeStamp = o.currentTimeStamp, o.currentPageX = i.pageX, o.currentPageY = i.pageY, o.currentTimeStamp = el(i), f.mostRecentTimeStamp = el(i)) : console.warn(`Cannot record touch move without a touch start.
`, "Touch Move: " + mg(i) + `
`, "Touch Bank: " + gg(f));
}
function wT(i, f) {
  var o = f.touchBank[Rd(i)];
  o ? (o.touchActive = !1, o.previousPageX = o.currentPageX, o.previousPageY = o.currentPageY, o.previousTimeStamp = o.currentTimeStamp, o.currentPageX = i.pageX, o.currentPageY = i.pageY, o.currentTimeStamp = el(i), f.mostRecentTimeStamp = el(i)) : console.warn(`Cannot record touch end without a touch start.
`, "Touch End: " + mg(i) + `
`, "Touch Bank: " + gg(f));
}
function mg(i) {
  return JSON.stringify({
    identifier: i.identifier,
    pageX: i.pageX,
    pageY: i.pageY,
    timestamp: el(i)
  });
}
function gg(i) {
  var f = i.touchBank, o = JSON.stringify(f.slice(0, dm));
  return f.length > dm && (o += " (original size: " + f.length + ")"), o;
}
class LT {
  constructor() {
    this._touchHistory = {
      touchBank: [],
      //Array<TouchRecord>
      numberActiveTouches: 0,
      // If there is only one active touch, we remember its location. This prevents
      // us having to loop through all of the touches all the time in the most
      // common case.
      indexOfSingleActiveTouch: -1,
      mostRecentTimeStamp: 0
    };
  }
  recordTouchTrack(f, o) {
    var r = this._touchHistory;
    if (dg(f))
      o.changedTouches.forEach((T) => HT(T, r));
    else if (sg(f))
      o.changedTouches.forEach((T) => UT(T, r)), r.numberActiveTouches = o.touches.length, r.numberActiveTouches === 1 && (r.indexOfSingleActiveTouch = o.touches[0].identifier);
    else if (vg(f) && (o.changedTouches.forEach((T) => wT(T, r)), r.numberActiveTouches = o.touches.length, r.numberActiveTouches === 1))
      for (var s = r.touchBank, v = 0; v < s.length; v++) {
        var h = s[v];
        if (h != null && h.touchActive) {
          r.indexOfSingleActiveTouch = v;
          break;
        }
      }
  }
  get touchHistory() {
    return this._touchHistory;
  }
}
var qT = {}, vm = ["onStartShouldSetResponderCapture", "onStartShouldSetResponder", {
  bubbles: !0
}], ym = ["onMoveShouldSetResponderCapture", "onMoveShouldSetResponder", {
  bubbles: !0
}], YT = ["onScrollShouldSetResponderCapture", "onScrollShouldSetResponder", {
  bubbles: !1
}], jT = {
  touchstart: vm,
  mousedown: vm,
  touchmove: ym,
  mousemove: ym,
  scroll: YT
}, vd = {
  id: null,
  idPath: null,
  node: null
}, kf = /* @__PURE__ */ new Map(), La = !1, zl = 0, Dl = {
  id: null,
  node: null,
  idPath: null
}, yd = new LT();
function Yi(i) {
  Dl = i;
}
function ji(i) {
  var f = kf.get(i);
  return f ?? qT;
}
function js(i) {
  var f = i.type, o = i.target;
  if (f === "touchstart" && (La = !0), (f === "touchmove" || zl > 1) && (La = !1), // Ignore browser emulated mouse events
  !(f === "mousedown" && La || f === "mousemove" && La || // Ignore mousemove if a mousedown didn't occur first
  f === "mousemove" && zl < 1)) {
    if (La && f === "mouseup") {
      zl === 0 && (La = !1);
      return;
    }
    var r = sg(f) && DT(i), s = dg(f), v = vg(f), h = pT(f), T = TT(f), _ = og(i, yd);
    (r || s || v) && (i.touches ? zl = i.touches.length : r ? zl = 1 : v && (zl = 0), yd.recordTouchTrack(f, _.nativeEvent));
    var A = CT(i), x = !1, m;
    if (r || s || h && zl > 0) {
      var z = Dl.idPath, q = A.idPath;
      if (z != null && q != null) {
        var L = xT(z, q);
        if (L != null) {
          var j = q.indexOf(L), D = j + (L === Dl.id ? 1 : 0);
          A = {
            idPath: q.slice(D),
            nodePath: A.nodePath.slice(D)
          };
        } else
          A = null;
      }
      A != null && (m = GT(A, i, _), m != null && (XT(_, m), x = !0));
    }
    if (Dl.id != null && Dl.node != null) {
      var H = Dl, M = H.id, F = H.node, te = ji(M), V = te.onResponderStart, J = te.onResponderMove, G = te.onResponderEnd, k = te.onResponderRelease, be = te.onResponderTerminate, de = te.onResponderTerminationRequest;
      if (_.bubbles = !1, _.cancelable = !1, _.currentTarget = F, r)
        V != null && (_.dispatchConfig.registrationName = "onResponderStart", V(_));
      else if (s)
        J != null && (_.dispatchConfig.registrationName = "onResponderMove", J(_));
      else {
        var Me = yg(f) || // native context menu
        f === "contextmenu" || // window blur
        f === "blur" && o === window || // responder (or ancestors) blur
        f === "blur" && o.contains(F) && i.relatedTarget !== F || // native scroll without using a pointer
        h && zl === 0 || // native scroll on node that is parent of the responder (allow siblings to scroll)
        h && o.contains(F) && o !== F || // native select/selectionchange on node
        T && MT(i), He = v && !Me && !zT(F, i.touches);
        if (v && G != null && (_.dispatchConfig.registrationName = "onResponderEnd", G(_)), He && (k != null && (_.dispatchConfig.registrationName = "onResponderRelease", k(_)), Yi(vd)), Me) {
          var _e = !0;
          (f === "contextmenu" || f === "scroll" || f === "selectionchange") && (x ? _e = !1 : de != null && (_.dispatchConfig.registrationName = "onResponderTerminationRequest", de(_) === !1 && (_e = !1))), _e && (be != null && (_.dispatchConfig.registrationName = "onResponderTerminate", be(_)), Yi(vd), La = !1, zl = 0);
        }
      }
    }
  }
}
function GT(i, f, o) {
  var r = jT[f.type];
  if (r != null) {
    for (var s = i.idPath, v = i.nodePath, h = r[0], T = r[1], _ = r[2].bubbles, A = function(J, G, k) {
      var be = ji(J), de = be[k];
      if (de != null && (o.currentTarget = G, de(o) === !0)) {
        var Me = s.slice(s.indexOf(J));
        return {
          id: J,
          node: G,
          idPath: Me
        };
      }
    }, x = s.length - 1; x >= 0; x--) {
      var m = s[x], z = v[x], q = A(m, z, h);
      if (q != null)
        return q;
      if (o.isPropagationStopped() === !0)
        return;
    }
    if (_)
      for (var L = 0; L < s.length; L++) {
        var j = s[L], D = v[L], H = A(j, D, T);
        if (H != null)
          return H;
        if (o.isPropagationStopped() === !0)
          return;
      }
    else {
      var M = s[0], F = v[0], te = f.target;
      if (te === F)
        return A(M, F, T);
    }
  }
}
function XT(i, f) {
  var o = Dl, r = o.id, s = o.node, v = f.id, h = f.node, T = ji(v), _ = T.onResponderGrant, A = T.onResponderReject;
  if (i.bubbles = !1, i.cancelable = !1, i.currentTarget = h, r == null)
    _ != null && (i.currentTarget = h, i.dispatchConfig.registrationName = "onResponderGrant", _(i)), Yi(f);
  else {
    var x = ji(r), m = x.onResponderTerminate, z = x.onResponderTerminationRequest, q = !0;
    z != null && (i.currentTarget = s, i.dispatchConfig.registrationName = "onResponderTerminationRequest", z(i) === !1 && (q = !1)), q ? (m != null && (i.currentTarget = s, i.dispatchConfig.registrationName = "onResponderTerminate", m(i)), _ != null && (i.currentTarget = h, i.dispatchConfig.registrationName = "onResponderGrant", _(i)), Yi(f)) : A != null && (i.currentTarget = h, i.dispatchConfig.registrationName = "onResponderReject", A(i));
  }
}
var VT = ["blur", "scroll"], QT = [
  // mouse
  "mousedown",
  "mousemove",
  "mouseup",
  "dragstart",
  // touch
  "touchstart",
  "touchmove",
  "touchend",
  "touchcancel",
  // other
  "contextmenu",
  "select",
  "selectionchange"
];
function ZT() {
  ta && window.__reactResponderSystemActive == null && (window.addEventListener("blur", js), QT.forEach((i) => {
    document.addEventListener(i, js);
  }), VT.forEach((i) => {
    document.addEventListener(i, js, !0);
  }), window.__reactResponderSystemActive = !0);
}
function KT(i, f, o) {
  AT(f, i), kf.set(i, o);
}
function hm(i) {
  Dl.id === i && JT(), kf.has(i) && kf.delete(i);
}
function JT() {
  var i = Dl, f = i.id, o = i.node;
  if (f != null && o != null) {
    var r = ji(f), s = r.onResponderTerminate;
    if (s != null) {
      var v = og({}, yd);
      v.currentTarget = o, s(v);
    }
    Yi(vd);
  }
  La = !1, zl = 0;
}
function kT() {
  return Dl.node;
}
var WT = {}, PT = 0;
function $T(i) {
  var f = oe.useRef(null);
  return f.current == null && (f.current = i()), f.current;
}
function Sg(i, f) {
  f === void 0 && (f = WT);
  var o = $T(() => PT++), r = oe.useRef(!1);
  oe.useEffect(() => (ZT(), () => {
    hm(o);
  }), [o]), oe.useEffect(() => {
    var s = f, v = s.onMoveShouldSetResponder, h = s.onMoveShouldSetResponderCapture, T = s.onScrollShouldSetResponder, _ = s.onScrollShouldSetResponderCapture, A = s.onSelectionChangeShouldSetResponder, x = s.onSelectionChangeShouldSetResponderCapture, m = s.onStartShouldSetResponder, z = s.onStartShouldSetResponderCapture, q = v != null || h != null || T != null || _ != null || A != null || x != null || m != null || z != null, L = i.current;
    q ? (KT(o, L, f), r.current = !0) : r.current && (hm(o), r.current = !1);
  }, [f, i, o]), oe.useDebugValue({
    isResponder: i.current === kT()
  }), oe.useDebugValue(f);
}
var hd = /* @__PURE__ */ oe.createContext(!1), IT = ["hrefAttrs", "onLayout", "onMoveShouldSetResponder", "onMoveShouldSetResponderCapture", "onResponderEnd", "onResponderGrant", "onResponderMove", "onResponderReject", "onResponderRelease", "onResponderStart", "onResponderTerminate", "onResponderTerminationRequest", "onScrollShouldSetResponder", "onScrollShouldSetResponderCapture", "onSelectionChangeShouldSetResponder", "onSelectionChangeShouldSetResponderCapture", "onStartShouldSetResponder", "onStartShouldSetResponderCapture"], FT = Object.assign({}, Fm, eg, tg, lg, ag, ng, ug, ig, {
  href: !0,
  lang: !0,
  onScroll: !0,
  onWheel: !0,
  pointerEvents: !0
}), e2 = (i) => rg(i, FT), bg = /* @__PURE__ */ oe.forwardRef((i, f) => {
  var o = i.hrefAttrs, r = i.onLayout, s = i.onMoveShouldSetResponder, v = i.onMoveShouldSetResponderCapture, h = i.onResponderEnd, T = i.onResponderGrant, _ = i.onResponderMove, A = i.onResponderReject, x = i.onResponderRelease, m = i.onResponderStart, z = i.onResponderTerminate, q = i.onResponderTerminationRequest, L = i.onScrollShouldSetResponder, j = i.onScrollShouldSetResponderCapture, D = i.onSelectionChangeShouldSetResponder, H = i.onSelectionChangeShouldSetResponderCapture, M = i.onStartShouldSetResponder, F = i.onStartShouldSetResponderCapture, te = hu(i, IT), V = oe.useContext(hd), J = oe.useRef(null), G = $m(), k = G.direction;
  fg(J, r), Sg(J, {
    onMoveShouldSetResponder: s,
    onMoveShouldSetResponderCapture: v,
    onResponderEnd: h,
    onResponderGrant: T,
    onResponderMove: _,
    onResponderReject: A,
    onResponderRelease: x,
    onResponderStart: m,
    onResponderTerminate: z,
    onResponderTerminationRequest: q,
    onScrollShouldSetResponder: L,
    onScrollShouldSetResponderCapture: j,
    onSelectionChangeShouldSetResponder: D,
    onSelectionChangeShouldSetResponderCapture: H,
    onStartShouldSetResponder: M,
    onStartShouldSetResponderCapture: F
  });
  var be = "div", de = i.lang != null ? pd(i.lang) : null, Me = i.dir || de, He = Me || k, _e = e2(te);
  if (_e.dir = Me, _e.style = [mm.view$raw, V && mm.inline, i.style], i.href != null && (be = "a", o != null)) {
    var Fe = o.download, De = o.rel, w = o.target;
    Fe != null && (_e.download = Fe), De != null && (_e.rel = De), typeof w == "string" && (_e.target = w.charAt(0) !== "_" ? "_" + w : w);
  }
  var ee = cg(_e), Q = Td(J, ee, f);
  return _e.ref = Q, Im(be, _e, {
    writingDirection: He
  });
});
bg.displayName = "View";
var mm = mu.create({
  view$raw: {
    alignContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "transparent",
    border: "0 solid black",
    boxSizing: "border-box",
    display: "flex",
    flexBasis: "auto",
    flexDirection: "column",
    flexShrink: 0,
    listStyle: "none",
    margin: 0,
    minHeight: 0,
    minWidth: 0,
    padding: 0,
    position: "relative",
    textDecoration: "none",
    zIndex: 0
  },
  inline: {
    display: "inline-flex"
  }
}), t2 = ["hrefAttrs", "numberOfLines", "onClick", "onLayout", "onPress", "onMoveShouldSetResponder", "onMoveShouldSetResponderCapture", "onResponderEnd", "onResponderGrant", "onResponderMove", "onResponderReject", "onResponderRelease", "onResponderStart", "onResponderTerminate", "onResponderTerminationRequest", "onScrollShouldSetResponder", "onScrollShouldSetResponderCapture", "onSelectionChangeShouldSetResponder", "onSelectionChangeShouldSetResponderCapture", "onStartShouldSetResponder", "onStartShouldSetResponderCapture", "selectable"], l2 = Object.assign({}, Fm, eg, tg, lg, ag, ng, ug, ig, {
  href: !0,
  lang: !0,
  pointerEvents: !0
}), a2 = (i) => rg(i, l2), Eg = /* @__PURE__ */ oe.forwardRef((i, f) => {
  var o = i.hrefAttrs, r = i.numberOfLines, s = i.onClick, v = i.onLayout, h = i.onPress, T = i.onMoveShouldSetResponder, _ = i.onMoveShouldSetResponderCapture, A = i.onResponderEnd, x = i.onResponderGrant, m = i.onResponderMove, z = i.onResponderReject, q = i.onResponderRelease, L = i.onResponderStart, j = i.onResponderTerminate, D = i.onResponderTerminationRequest, H = i.onScrollShouldSetResponder, M = i.onScrollShouldSetResponderCapture, F = i.onSelectionChangeShouldSetResponder, te = i.onSelectionChangeShouldSetResponderCapture, V = i.onStartShouldSetResponder, J = i.onStartShouldSetResponderCapture, G = i.selectable, k = hu(i, t2), be = oe.useContext(hd), de = oe.useRef(null), Me = $m(), He = Me.direction;
  fg(de, v), Sg(de, {
    onMoveShouldSetResponder: T,
    onMoveShouldSetResponderCapture: _,
    onResponderEnd: A,
    onResponderGrant: x,
    onResponderMove: m,
    onResponderReject: z,
    onResponderRelease: q,
    onResponderStart: L,
    onResponderTerminate: j,
    onResponderTerminationRequest: D,
    onScrollShouldSetResponder: H,
    onScrollShouldSetResponderCapture: M,
    onSelectionChangeShouldSetResponder: F,
    onSelectionChangeShouldSetResponderCapture: te,
    onStartShouldSetResponder: V,
    onStartShouldSetResponderCapture: J
  });
  var _e = oe.useCallback((U) => {
    s != null ? s(U) : h != null && (U.stopPropagation(), h(U));
  }, [s, h]), Fe = be ? "span" : "div", De = i.lang != null ? pd(i.lang) : null, w = i.dir || De, ee = w || He, Q = a2(k);
  if (Q.dir = w, be || (Q.dir = w ?? "auto"), (s || h) && (Q.onClick = _e), Q.style = [r != null && r > 1 && {
    WebkitLineClamp: r
  }, be === !0 ? hn.textHasAncestor$raw : hn.text$raw, r === 1 && hn.textOneLine, r != null && r > 1 && hn.textMultiLine, i.style, G === !0 && hn.selectable, G === !1 && hn.notSelectable, h && hn.pressable], i.href != null && (Fe = "a", o != null)) {
    var he = o.download, ce = o.rel, je = o.target;
    he != null && (Q.download = he), ce != null && (Q.rel = ce), typeof je == "string" && (Q.target = je.charAt(0) !== "_" ? "_" + je : je);
  }
  var at = cg(Q), Mt = Td(de, at, f);
  Q.ref = Mt;
  var S = Im(Fe, Q, {
    writingDirection: ee
  });
  return be ? S : /* @__PURE__ */ oe.createElement(hd.Provider, {
    value: !0
  }, S);
});
Eg.displayName = "Text";
var gm = {
  backgroundColor: "transparent",
  border: "0 solid black",
  boxSizing: "border-box",
  color: "black",
  display: "inline",
  font: "14px System",
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative",
  textAlign: "start",
  textDecoration: "none",
  whiteSpace: "pre-wrap",
  wordWrap: "break-word"
}, hn = mu.create({
  text$raw: gm,
  textHasAncestor$raw: Ya(Ya({}, gm), {}, {
    color: "inherit",
    font: "inherit",
    textAlign: "inherit",
    whiteSpace: "inherit"
  }),
  textOneLine: {
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    wordWrap: "normal"
  },
  // See #13
  textMultiLine: {
    display: "-webkit-box",
    maxWidth: "100%",
    overflow: "clip",
    textOverflow: "ellipsis",
    WebkitBoxOrient: "vertical"
  },
  notSelectable: {
    userSelect: "none"
  },
  selectable: {
    userSelect: "text"
  },
  pressable: {
    cursor: "pointer"
  }
}), Sm = "DELAY", sl = "ERROR", bm = "LONG_PRESS_DETECTED", Tt = "NOT_RESPONDER", yu = "RESPONDER_ACTIVE_LONG_PRESS_START", Pf = "RESPONDER_ACTIVE_PRESS_START", md = "RESPONDER_INACTIVE_PRESS_START", n2 = "RESPONDER_GRANT", Vf = "RESPONDER_RELEASE", pg = "RESPONDER_TERMINATED", Em = Object.freeze({
  NOT_RESPONDER: {
    DELAY: sl,
    RESPONDER_GRANT: md,
    RESPONDER_RELEASE: sl,
    RESPONDER_TERMINATED: sl,
    LONG_PRESS_DETECTED: sl
  },
  RESPONDER_INACTIVE_PRESS_START: {
    DELAY: Pf,
    RESPONDER_GRANT: sl,
    RESPONDER_RELEASE: Tt,
    RESPONDER_TERMINATED: Tt,
    LONG_PRESS_DETECTED: sl
  },
  RESPONDER_ACTIVE_PRESS_START: {
    DELAY: sl,
    RESPONDER_GRANT: sl,
    RESPONDER_RELEASE: Tt,
    RESPONDER_TERMINATED: Tt,
    LONG_PRESS_DETECTED: yu
  },
  RESPONDER_ACTIVE_LONG_PRESS_START: {
    DELAY: sl,
    RESPONDER_GRANT: sl,
    RESPONDER_RELEASE: Tt,
    RESPONDER_TERMINATED: Tt,
    LONG_PRESS_DETECTED: yu
  },
  ERROR: {
    DELAY: Tt,
    RESPONDER_GRANT: md,
    RESPONDER_RELEASE: Tt,
    RESPONDER_TERMINATED: Tt,
    LONG_PRESS_DETECTED: Tt
  }
}), Tg = (i) => i.getAttribute("role"), gd = (i) => i.tagName.toLowerCase(), pm = (i) => i === Pf || i === yu, Qf = (i) => Tg(i) === "button", Tm = (i) => i === md || i === Pf || i === yu, u2 = (i) => i === pg || i === Vf, Rm = (i) => {
  var f = i.key, o = i.target, r = f === " " || f === "Spacebar", s = gd(o) === "button" || Qf(o);
  return f === "Enter" || r && s;
}, i2 = 450, r2 = 50;
class f2 {
  constructor(f) {
    this._eventHandlers = null, this._isPointerTouch = !1, this._longPressDelayTimeout = null, this._longPressDispatched = !1, this._pressDelayTimeout = null, this._pressOutDelayTimeout = null, this._touchState = Tt, this._responderElement = null, this.configure(f);
  }
  configure(f) {
    this._config = f;
  }
  /**
   * Resets any pending timers. This should be called on unmount.
   */
  reset() {
    this._cancelLongPressDelayTimeout(), this._cancelPressDelayTimeout(), this._cancelPressOutDelayTimeout();
  }
  /**
   * Returns a set of props to spread into the interactive element.
   */
  getEventHandlers() {
    return this._eventHandlers == null && (this._eventHandlers = this._createEventHandlers()), this._eventHandlers;
  }
  _createEventHandlers() {
    var f = (s, v) => {
      s.persist(), this._cancelPressOutDelayTimeout(), this._longPressDispatched = !1, this._selectionTerminated = !1, this._touchState = Tt, this._isPointerTouch = s.nativeEvent.type === "touchstart", this._receiveSignal(n2, s);
      var h = Gs(this._config.delayPressStart, 0, r2);
      v !== !1 && h > 0 ? this._pressDelayTimeout = setTimeout(() => {
        this._receiveSignal(Sm, s);
      }, h) : this._receiveSignal(Sm, s);
      var T = Gs(this._config.delayLongPress, 10, i2);
      this._longPressDelayTimeout = setTimeout(() => {
        this._handleLongPress(s);
      }, T + h);
    }, o = (s) => {
      this._receiveSignal(Vf, s);
    }, r = (s) => {
      var v = this._config.onPress, h = s.target;
      if (this._touchState !== Tt && Rm(s)) {
        o(s), document.removeEventListener("keyup", r);
        var T = h.getAttribute("role"), _ = gd(h), A = T === "link" || _ === "a" || _ === "button" || _ === "input" || _ === "select" || _ === "textarea", x = this._responderElement === h;
        v != null && !A && x && v(s), this._responderElement = null;
      }
    };
    return {
      onStartShouldSetResponder: (s) => {
        var v = this._config.disabled;
        return v && Qf(s.currentTarget) && s.stopPropagation(), v == null ? !0 : !v;
      },
      onKeyDown: (s) => {
        var v = this._config.disabled, h = s.key, T = s.target;
        if (!v && Rm(s)) {
          this._touchState === Tt && (f(s, !1), this._responderElement = T, document.addEventListener("keyup", r));
          var _ = h === " " || h === "Spacebar", A = Tg(T), x = A === "button" || A === "menuitem";
          _ && x && gd(T) !== "button" && s.preventDefault(), s.stopPropagation();
        }
      },
      onResponderGrant: (s) => f(s),
      onResponderMove: (s) => {
        this._config.onPressMove != null && this._config.onPressMove(s);
        var v = Om(s);
        if (this._touchActivatePosition != null) {
          var h = this._touchActivatePosition.pageX - v.pageX, T = this._touchActivatePosition.pageY - v.pageY;
          Math.hypot(h, T) > 10 && this._cancelLongPressDelayTimeout();
        }
      },
      onResponderRelease: (s) => o(s),
      onResponderTerminate: (s) => {
        s.nativeEvent.type === "selectionchange" && (this._selectionTerminated = !0), this._receiveSignal(pg, s);
      },
      onResponderTerminationRequest: (s) => {
        var v = this._config, h = v.cancelable, T = v.disabled, _ = v.onLongPress;
        return !T && _ != null && this._isPointerTouch && s.nativeEvent.type === "contextmenu" ? !1 : h ?? !0;
      },
      // NOTE: this diverges from react-native in 3 significant ways:
      // * The `onPress` callback is not connected to the responder system (the native
      //  `click` event must be used but is dispatched in many scenarios where no pointers
      //   are on the screen.) Therefore, it's possible for `onPress` to be called without
      //   `onPress{Start,End}` being called first.
      // * The `onPress` callback is only be called on the first ancestor of the native
      //   `click` target that is using the PressResponder.
      // * The event's `nativeEvent` is a `MouseEvent` not a `TouchEvent`.
      onClick: (s) => {
        var v = this._config, h = v.disabled, T = v.onPress;
        h ? Qf(s.currentTarget) && s.stopPropagation() : (s.stopPropagation(), this._longPressDispatched || this._selectionTerminated ? s.preventDefault() : T != null && s.altKey === !1 && T(s));
      },
      // If `onLongPress` is provided and a touch pointer is being used, prevent the
      // default context menu from opening.
      onContextMenu: (s) => {
        var v = this._config, h = v.disabled, T = v.onLongPress;
        h ? Qf(s.currentTarget) && s.stopPropagation() : T != null && this._isPointerTouch && !s.defaultPrevented && (s.preventDefault(), s.stopPropagation());
      }
    };
  }
  /**
   * Receives a state machine signal, performs side effects of the transition
   * and stores the new state. Validates the transition as well.
   */
  _receiveSignal(f, o) {
    var r = this._touchState, s = null;
    Em[r] != null && (s = Em[r][f]), !(this._touchState === Tt && f === Vf) && (s == null || s === sl ? console.error("PressResponder: Invalid signal " + f + " for state " + r + " on responder") : r !== s && (this._performTransitionSideEffects(r, s, f, o), this._touchState = s));
  }
  /**
   * Performs a transition between touchable states and identify any activations
   * or deactivations (and callback invocations).
   */
  _performTransitionSideEffects(f, o, r, s) {
    if (u2(r) && (setTimeout(() => {
      this._isPointerTouch = !1;
    }, 0), this._touchActivatePosition = null, this._cancelLongPressDelayTimeout()), Tm(f) && r === bm) {
      var v = this._config.onLongPress;
      v != null && s.nativeEvent.key == null && (v(s), this._longPressDispatched = !0);
    }
    var h = pm(f), T = pm(o);
    if (!h && T ? this._activate(s) : h && !T && this._deactivate(s), Tm(f) && r === Vf) {
      var _ = this._config, A = _.onLongPress, x = _.onPress;
      if (x != null) {
        var m = A != null && f === yu;
        m || !T && !h && (this._activate(s), this._deactivate(s));
      }
    }
    this._cancelPressDelayTimeout();
  }
  _activate(f) {
    var o = this._config, r = o.onPressChange, s = o.onPressStart, v = Om(f);
    this._touchActivatePosition = {
      pageX: v.pageX,
      pageY: v.pageY
    }, s?.(f), r?.(!0);
  }
  _deactivate(f) {
    var o = this._config, r = o.onPressChange, s = o.onPressEnd;
    function v() {
      s?.(f), r?.(!1);
    }
    var h = Gs(this._config.delayPressEnd);
    h > 0 ? this._pressOutDelayTimeout = setTimeout(() => {
      v();
    }, h) : v();
  }
  _handleLongPress(f) {
    (this._touchState === Pf || this._touchState === yu) && this._receiveSignal(bm, f);
  }
  _cancelLongPressDelayTimeout() {
    this._longPressDelayTimeout != null && (clearTimeout(this._longPressDelayTimeout), this._longPressDelayTimeout = null);
  }
  _cancelPressDelayTimeout() {
    this._pressDelayTimeout != null && (clearTimeout(this._pressDelayTimeout), this._pressDelayTimeout = null);
  }
  _cancelPressOutDelayTimeout() {
    this._pressOutDelayTimeout != null && (clearTimeout(this._pressOutDelayTimeout), this._pressOutDelayTimeout = null);
  }
}
function Gs(i, f, o) {
  return f === void 0 && (f = 0), o === void 0 && (o = 0), Math.max(f, i ?? o);
}
function Om(i) {
  var f = i.nativeEvent, o = f.changedTouches, r = f.touches;
  return r != null && r.length > 0 ? r[0] : o != null && o.length > 0 ? o[0] : i.nativeEvent;
}
function c2(i, f) {
  var o = oe.useRef(null);
  o.current == null && (o.current = new f2(f));
  var r = o.current;
  return oe.useEffect(() => {
    r.configure(f);
  }, [f, r]), oe.useEffect(() => () => {
    r.reset();
  }, [r]), oe.useDebugValue(f), r.getEventHandlers();
}
var o2 = () => {
};
function s2() {
  var i = !1;
  if (ta)
    try {
      var f = {};
      Object.defineProperty(f, "passive", {
        get() {
          return i = !0, !1;
        }
      }), window.addEventListener("test", null, f), window.removeEventListener("test", null, f);
    } catch {
    }
  return i;
}
var d2 = s2();
function v2(i) {
  return i == null ? !1 : d2 ? i : !!i.capture;
}
function y2() {
  return this.cancelBubble;
}
function h2() {
  return this.defaultPrevented;
}
function m2(i) {
  return i.nativeEvent = i, i.persist = o2, i.isDefaultPrevented = h2, i.isPropagationStopped = y2, i;
}
function vt(i, f, o, r) {
  var s = v2(r), v = (h) => o(m2(h));
  return i.addEventListener(f, v, s), function() {
    i?.removeEventListener(f, v, s);
  };
}
var g2 = () => typeof window < "u" && window.PointerEvent != null, vl = "keyboard", zt = "keyboard", Di, Ni, Bi = !1, S2 = /* @__PURE__ */ new Set(), wi = "keyboard", xi = "mouse", Xs = "touch", b2 = "blur", Rg = "contextmenu", E2 = "focus", p2 = "keydown", Og = "mousedown", _g = "mousemove", Ag = "mouseup", Cg = "pointerdown", xg = "pointermove", zg = "scroll", Mg = "selectionchange", Dg = "touchcancel", Ng = "touchmove", Bg = "touchstart", T2 = "visibilitychange", _m = {
  passive: !0
}, Yt = {
  capture: !0,
  passive: !0
};
function Ug() {
  (Di != null || Ni != null) && (Di != null && (zt = Di, Di = null), Ni != null && (vl = Ni, Ni = null), qa());
}
function R2() {
  Di = zt, Ni = vl, vl = wi, zt = wi, qa(), Bi = !1;
}
function O2() {
  Ug();
}
function _2(i) {
  i.metaKey || i.altKey || i.ctrlKey || zt !== wi && (zt = wi, vl = wi, qa());
}
function A2() {
  document.visibilityState !== "hidden" && Ug();
}
function ol(i) {
  var f = i.type;
  if (g2()) {
    if (f === Cg) {
      vl !== i.pointerType && (zt = i.pointerType, vl = i.pointerType, qa());
      return;
    }
    if (f === xg) {
      zt !== i.pointerType && (zt = i.pointerType, qa());
      return;
    }
  } else {
    if (Bi || (f === Og && vl !== xi && (zt = xi, vl = xi, qa()), f === _g && zt !== xi && (zt = xi, qa())), f === Bg) {
      Bi = !0, i.touches && i.touches.length > 1 && (Bi = !1), vl !== Xs && (zt = Xs, vl = Xs, qa());
      return;
    }
    (f === Rg || f === Ag || f === Mg || f === zg || f === Dg || f === Ng) && (Bi = !1);
  }
}
ta && (vt(window, b2, R2, _m), vt(window, E2, O2, _m), vt(document, p2, _2, Yt), vt(document, T2, A2, Yt), vt(document, Cg, ol, Yt), vt(document, xg, ol, Yt), vt(document, Rg, ol, Yt), vt(document, Og, ol, Yt), vt(document, _g, ol, Yt), vt(document, Ag, ol, Yt), vt(document, Dg, ol, Yt), vt(document, Ng, ol, Yt), vt(document, Bg, ol, Yt), vt(document, Mg, ol, Yt), vt(document, zg, ol, Yt));
function qa() {
  var i = {
    activeModality: vl,
    modality: zt
  };
  S2.forEach((f) => {
    f(i);
  });
}
function C2() {
  return zt;
}
function zi(i, f) {
  var o = dd(() => /* @__PURE__ */ new Map()), r = dd(() => (s, v) => {
    var h = o.get(s);
    h?.(), v == null && (o.delete(s), v = () => {
    });
    var T = vt(s, i, v, f);
    return o.set(s, T), T;
  });
  return Jf(() => () => {
    o.forEach((s) => {
      s();
    }), o.clear();
  }, [o]), r;
}
var x2 = {}, Mi = {
  passive: !0
}, Am = "react-gui:hover:lock", Cm = "react-gui:hover:unlock", z2 = () => typeof window < "u" && window.PointerEvent != null;
function xm(i, f, o) {
  var r = document.createEvent("CustomEvent"), s = x2, v = s.bubbles, h = v === void 0 ? !0 : v, T = s.cancelable, _ = T === void 0 ? !0 : T, A = s.detail;
  r.initCustomEvent(f, h, _, A), i.dispatchEvent(r);
}
function Vs(i) {
  var f = i.pointerType;
  return f ?? C2();
}
function M2(i, f) {
  var o = f.contain, r = f.disabled, s = f.onHoverStart, v = f.onHoverChange, h = f.onHoverUpdate, T = f.onHoverEnd, _ = z2(), A = zi(_ ? "pointermove" : "mousemove", Mi), x = zi(_ ? "pointerenter" : "mouseenter", Mi), m = zi(_ ? "pointerleave" : "mouseleave", Mi), z = zi(Am, Mi), q = zi(Cm, Mi);
  Jf(() => {
    var L = i.current;
    if (L !== null) {
      var j = function(V) {
        T?.(V), v?.(!1), A(L, null), m(L, null);
      }, D = function(V) {
        var J = i.current;
        J != null && Vs(V) !== "touch" && (o && xm(J, Cm), j(V));
      }, H = function(V) {
        Vs(V) !== "touch" && h != null && (V.x == null && (V.x = V.clientX), V.y == null && (V.y = V.clientY), h(V));
      }, M = function(V) {
        s?.(V), v?.(!0), h != null && A(L, r ? null : H), m(L, r ? null : D);
      }, F = function(V) {
        var J = i.current;
        if (J != null && Vs(V) !== "touch") {
          o && xm(J, Am), M(V);
          var G = function(de) {
            de.target !== J && j(V);
          }, k = function(de) {
            de.target !== J && M(V);
          };
          z(J, r ? null : G), q(J, r ? null : k);
        }
      };
      x(L, r ? null : F);
    }
  }, [x, A, m, z, q, o, r, s, v, h, T, i]);
}
var D2 = ["children", "delayLongPress", "delayPressIn", "delayPressOut", "disabled", "onBlur", "onContextMenu", "onFocus", "onHoverIn", "onHoverOut", "onKeyDown", "onLongPress", "onPress", "onPressMove", "onPressIn", "onPressOut", "style", "tabIndex", "testOnly_hovered", "testOnly_pressed"];
function N2(i, f) {
  var o = i.children, r = i.delayLongPress, s = i.delayPressIn, v = i.delayPressOut, h = i.disabled, T = i.onBlur, _ = i.onContextMenu, A = i.onFocus, x = i.onHoverIn, m = i.onHoverOut, z = i.onKeyDown, q = i.onLongPress, L = i.onPress, j = i.onPressMove, D = i.onPressIn, H = i.onPressOut, M = i.style, F = i.tabIndex, te = i.testOnly_hovered, V = i.testOnly_pressed, J = hu(i, D2), G = Qs(te === !0), k = G[0], be = G[1], de = Qs(!1), Me = de[0], He = de[1], _e = Qs(V === !0), Fe = _e[0], De = _e[1], w = oe.useRef(null), ee = Td(f, w), Q = oe.useMemo(() => ({
    delayLongPress: r,
    delayPressStart: s,
    delayPressEnd: v,
    disabled: h,
    onLongPress: q,
    onPress: L,
    onPressChange: De,
    onPressStart: D,
    onPressMove: j,
    onPressEnd: H
  }), [r, s, v, h, q, L, D, j, H, De]), he = c2(w, Q), ce = he.onContextMenu, je = he.onKeyDown;
  M2(w, {
    contain: !0,
    disabled: h,
    onHoverChange: be,
    onHoverStart: x,
    onHoverEnd: m
  });
  var at = {
    hovered: k,
    focused: Me,
    pressed: Fe
  }, Mt = oe.useCallback((ne) => {
    ne.nativeEvent.target === w.current && (He(!1), T?.(ne));
  }, [w, He, T]), S = oe.useCallback((ne) => {
    ne.nativeEvent.target === w.current && (He(!0), A?.(ne));
  }, [w, He, A]), U = oe.useCallback((ne) => {
    ce?.(ne), _?.(ne);
  }, [_, ce]), $ = oe.useCallback((ne) => {
    je?.(ne), z?.(ne);
  }, [z, je]), W;
  return F !== void 0 ? W = F : W = h ? -1 : 0, /* @__PURE__ */ oe.createElement(bg, od({}, J, he, {
    "aria-disabled": h,
    onBlur: Mt,
    onContextMenu: U,
    onFocus: S,
    onKeyDown: $,
    ref: ee,
    style: [h ? zm.disabled : zm.active, typeof M == "function" ? M(at) : M],
    tabIndex: W
  }), typeof o == "function" ? o(at) : o);
}
function Qs(i) {
  var f = oe.useState(!1), o = f[0], r = f[1];
  return [o || i, r];
}
var zm = mu.create({
  active: {
    cursor: "pointer",
    touchAction: "manipulation"
  },
  disabled: {
    pointerEvents: "box-none"
  }
}), Hg = /* @__PURE__ */ oe.memo(/* @__PURE__ */ oe.forwardRef(N2));
Hg.displayName = "Pressable";
const dl = document.getElementById("website-root"), jt = (i) => i.textContent.trim().replace(/\s+/g, " "), Nl = {
  title: jt(dl.querySelector("h1")),
  hero: [...dl.querySelectorAll("header p")].map(jt),
  navigation: [...dl.querySelectorAll("nav a")].map((i) => ({ label: jt(i), id: i.hash.slice(1) })),
  sections: ["home", "about"].map((i) => ({ id: i, title: jt(dl.querySelector(`#${i} h2`)), paragraphs: [...dl.querySelectorAll(`#${i} p`)].map(jt) })),
  teamTitle: jt(dl.querySelector("#team h2")),
  teamIntro: jt(dl.querySelector("#team .section-intro")),
  members: [...dl.querySelectorAll(".team-member")].map((i, f) => ({
    id: `member-${f}`,
    name: jt(i.querySelector("h3")),
    role: jt(i.querySelector("p")),
    bio: jt(i.querySelector("p:last-child")),
    image: i.querySelector("img").getAttribute("src"),
    alt: i.querySelector("img").alt
  })),
  resources: ["documents", "presentation"].map((i) => {
    const f = dl.querySelector(`#${i}`), o = f.querySelector("iframe");
    return {
      id: i,
      title: jt(f.querySelector("h2")),
      links: [...f.querySelectorAll("a")].map((r) => ({ label: jt(r), href: r.getAttribute("href"), download: r.hasAttribute("download") })),
      src: o.getAttribute("src"),
      frameTitle: o.title
    };
  }),
  footer: jt(dl.querySelector("footer p"))
};
function B2({ children: i, onPress: f, ...o }) {
  return /* @__PURE__ */ ie.createElement(
    Hg,
    {
      accessibilityRole: "button",
      onPress: f,
      ...o,
      style: ({ hovered: r }) => [Zs.button, r && Zs.hovered]
    },
    /* @__PURE__ */ ie.createElement(Eg, { style: Zs.buttonText }, i)
  );
}
function U2() {
  return /* @__PURE__ */ ie.createElement("header", null, /* @__PURE__ */ ie.createElement("div", { className: "hero-content" }, /* @__PURE__ */ ie.createElement("h1", null, Nl.title), Nl.hero.map((i) => /* @__PURE__ */ ie.createElement("p", { key: i }, i)), /* @__PURE__ */ ie.createElement("a", { href: "#about", className: "hero-button" }, "Learn More")));
}
function H2() {
  const [i, f] = oe.useState(location.hash.slice(1) || "home");
  return oe.useEffect(() => {
    const o = () => {
      const v = Nl.navigation.map(({ id: h }) => document.getElementById(h)).filter((h) => h.getBoundingClientRect().top <= innerHeight * 0.35);
      f(v.at(-1)?.id || "home");
    }, r = () => f(location.hash.slice(1) || "home");
    return window.addEventListener("scroll", o, { passive: !0 }), window.addEventListener("hashchange", r), () => {
      window.removeEventListener("scroll", o), window.removeEventListener("hashchange", r);
    };
  }, []), /* @__PURE__ */ ie.createElement("nav", { "aria-label": "Main navigation" }, /* @__PURE__ */ ie.createElement("div", { className: "nav-container" }, Nl.navigation.map(({ id: o, label: r }) => /* @__PURE__ */ ie.createElement("a", { key: o, href: `#${o}`, "aria-current": i === o ? "location" : void 0, onClick: () => f(o) }, r))));
}
function w2({ section: i }) {
  return /* @__PURE__ */ ie.createElement("section", { id: i.id }, /* @__PURE__ */ ie.createElement("h2", null, i.title), i.paragraphs.map((f) => /* @__PURE__ */ ie.createElement("p", { key: f }, f)));
}
function L2({ member: i }) {
  const [f, o] = oe.useState(!1), r = `${i.bio.slice(0, 240).replace(/\s+\S*$/, "")}…`;
  return /* @__PURE__ */ ie.createElement("article", { className: "team-member" }, /* @__PURE__ */ ie.createElement("img", { src: i.image, alt: i.alt, loading: "lazy" }), /* @__PURE__ */ ie.createElement("h3", null, i.name), /* @__PURE__ */ ie.createElement("p", null, i.role), /* @__PURE__ */ ie.createElement("p", { className: "team-bio", id: `${i.id}-bio` }, f ? i.bio : r), /* @__PURE__ */ ie.createElement(B2, { "aria-expanded": f, "aria-controls": `${i.id}-bio`, accessibilityLabel: `${f ? "Show less" : "Read full biography"}: ${i.name}`, onPress: () => o(!f) }, f ? "Show less" : "Read full biography"));
}
function q2() {
  return /* @__PURE__ */ ie.createElement("section", { id: "team" }, /* @__PURE__ */ ie.createElement("h2", null, Nl.teamTitle), /* @__PURE__ */ ie.createElement("p", { className: "section-intro" }, Nl.teamIntro), /* @__PURE__ */ ie.createElement("div", { className: "team-container" }, Nl.members.map((i) => /* @__PURE__ */ ie.createElement(L2, { key: i.id, member: i }))));
}
function Y2({ resource: i }) {
  return /* @__PURE__ */ ie.createElement("section", { id: i.id }, /* @__PURE__ */ ie.createElement("h2", null, i.title), /* @__PURE__ */ ie.createElement("iframe", { width: "100%", height: "800", title: i.frameTitle, src: i.src, allowFullScreen: i.id === "presentation" }), /* @__PURE__ */ ie.createElement("p", null, i.links.map((f) => /* @__PURE__ */ ie.createElement("a", { key: f.href, href: f.href, target: "_blank", rel: "noopener" }, f.label))));
}
function j2() {
  return oe.useEffect(() => {
    const i = location.hash.slice(1);
    i && document.getElementById(i)?.scrollIntoView();
  }, []), /* @__PURE__ */ ie.createElement(ie.Fragment, null, /* @__PURE__ */ ie.createElement("a", { className: "skip-link", href: "#main-content" }, "Skip to main content"), /* @__PURE__ */ ie.createElement(U2, null), /* @__PURE__ */ ie.createElement(H2, null), /* @__PURE__ */ ie.createElement("main", { id: "main-content", tabIndex: "-1" }, Nl.sections.map((i) => /* @__PURE__ */ ie.createElement(w2, { key: i.id, section: i })), /* @__PURE__ */ ie.createElement(q2, null), Nl.resources.map((i) => /* @__PURE__ */ ie.createElement(Y2, { key: i.id, resource: i }))), /* @__PURE__ */ ie.createElement("footer", null, /* @__PURE__ */ ie.createElement("p", null, Nl.footer)));
}
const Zs = mu.create({
  button: { paddingVertical: 12, paddingHorizontal: 16, borderWidth: 1, borderColor: "#1f3b5b", borderRadius: 6, backgroundColor: "#fff", alignItems: "center", minHeight: 44 },
  hovered: { backgroundColor: "#e3edf7" },
  buttonText: { color: "#1f3b5b", fontSize: 14, fontWeight: "700" }
});
E1.createRoot(dl).render(/* @__PURE__ */ ie.createElement(j2, null));
