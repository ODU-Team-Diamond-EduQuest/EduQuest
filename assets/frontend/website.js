function $l(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function zm(i) {
  if (Object.prototype.hasOwnProperty.call(i, "__esModule")) return i;
  var c = i.default;
  if (typeof c == "function") {
    var o = function r() {
      var s = !1;
      try {
        s = this instanceof r;
      } catch {
      }
      return s ? Reflect.construct(c, arguments, this.constructor) : c.apply(this, arguments);
    };
    o.prototype = c.prototype;
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
var Es = { exports: {} }, ue = {};
var Eh;
function h1() {
  if (Eh) return ue;
  Eh = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), v = /* @__PURE__ */ Symbol.for("react.consumer"), h = /* @__PURE__ */ Symbol.for("react.context"), T = /* @__PURE__ */ Symbol.for("react.forward_ref"), _ = /* @__PURE__ */ Symbol.for("react.suspense"), A = /* @__PURE__ */ Symbol.for("react.memo"), x = /* @__PURE__ */ Symbol.for("react.lazy"), m = /* @__PURE__ */ Symbol.for("react.activity"), z = /* @__PURE__ */ Symbol.for("react.view_transition"), q = Symbol.iterator;
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
  }, M = Object.assign, H = {};
  function D(S, U, $) {
    this.props = S, this.context = U, this.refs = H, this.updater = $ || j;
  }
  D.prototype.isReactComponent = {}, D.prototype.setState = function(S, U) {
    if (typeof S != "object" && typeof S != "function" && S != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, S, U, "setState");
  }, D.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function F() {
  }
  F.prototype = D.prototype;
  function te(S, U, $) {
    this.props = S, this.context = U, this.refs = H, this.updater = $ || j;
  }
  var V = te.prototype = new F();
  V.constructor = te, M(V, D.prototype), V.isPureReactComponent = !0;
  var J = Array.isArray;
  function G() {
  }
  var k = { H: null, A: null, T: null, S: null }, Se = Object.prototype.hasOwnProperty;
  function se(S, U, $) {
    var W = $.ref;
    return {
      $$typeof: i,
      type: S,
      key: U,
      ref: W !== void 0 ? W : null,
      props: $
    };
  }
  function ze(S, U) {
    return se(S.type, U, S.props);
  }
  function Ue(S) {
    return typeof S == "object" && S !== null && S.$$typeof === i;
  }
  function Oe(S) {
    var U = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function($) {
      return U[$];
    });
  }
  var Ie = /\/+/g;
  function De(S, U) {
    return typeof S == "object" && S !== null && S.key != null ? Oe("" + S.key) : U.toString(36);
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
    var be = typeof S;
    (be === "undefined" || be === "boolean") && (S = null);
    var Ee = !1;
    if (S === null) Ee = !0;
    else
      switch (be) {
        case "bigint":
        case "string":
        case "number":
          Ee = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case i:
            case c:
              Ee = !0;
              break;
            case x:
              return Ee = S._init, ee(
                Ee(S._payload),
                U,
                $,
                W,
                ne
              );
          }
      }
    if (Ee)
      return ne = ne(S), Ee = W === "" ? "." + De(S, 0) : W, J(ne) ? ($ = "", Ee != null && ($ = Ee.replace(Ie, "$&/") + "/"), ee(ne, U, $, "", function(el) {
        return el;
      })) : ne != null && (Ue(ne) && (ne = ze(
        ne,
        $ + (ne.key == null || S && S.key === ne.key ? "" : ("" + ne.key).replace(
          Ie,
          "$&/"
        ) + "/") + Ee
      )), U.push(ne)), 1;
    Ee = 0;
    var P = W === "" ? "." : W + ":";
    if (J(S))
      for (var ae = 0; ae < S.length; ae++)
        W = S[ae], be = P + De(W, ae), Ee += ee(
          W,
          U,
          $,
          be,
          ne
        );
    else if (ae = L(S), typeof ae == "function")
      for (S = ae.call(S), ae = 0; !(W = S.next()).done; )
        W = W.value, be = P + De(W, ae++), Ee += ee(
          W,
          U,
          $,
          be,
          ne
        );
    else if (be === "object") {
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
    return Ee;
  }
  function Q(S, U, $) {
    if (S == null) return S;
    var W = [], ne = 0;
    return ee(S, W, "", "", function(be) {
      return U.call($, be, ne++);
    }), W;
  }
  function ye(S) {
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
  var fe = typeof reportError == "function" ? reportError : function(S) {
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
  function Ye(S) {
    var U = k.T, $ = {};
    $.types = U !== null ? U.types : null, k.T = $;
    try {
      var W = S(), ne = k.S;
      ne !== null && ne($, W), typeof W == "object" && W !== null && typeof W.then == "function" && W.then(G, fe);
    } catch (be) {
      fe(be);
    } finally {
      U !== null && $.types !== null && (U.types = $.types), k.T = U;
    }
  }
  function lt(S) {
    var U = k.T;
    if (U !== null) {
      var $ = U.types;
      $ === null ? U.types = [S] : $.indexOf(S) === -1 && $.push(S);
    } else Ye(lt.bind(null, S));
  }
  var Dt = {
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
      if (!Ue(S))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return S;
    }
  };
  return ue.Activity = m, ue.Children = Dt, ue.Component = D, ue.Fragment = o, ue.Profiler = s, ue.PureComponent = te, ue.StrictMode = r, ue.Suspense = _, ue.ViewTransition = z, ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k, ue.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(S) {
      return k.H.useMemoCache(S);
    }
  }, ue.addTransitionType = lt, ue.cache = function(S) {
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
    var W = M({}, S.props), ne = S.key;
    if (U != null)
      for (be in U.key !== void 0 && (ne = "" + U.key), U)
        !Se.call(U, be) || be === "key" || be === "__self" || be === "__source" || be === "ref" && U.ref === void 0 || (W[be] = U[be]);
    var be = arguments.length - 2;
    if (be === 1) W.children = $;
    else if (1 < be) {
      for (var Ee = Array(be), P = 0; P < be; P++)
        Ee[P] = arguments[P + 2];
      W.children = Ee;
    }
    return se(S.type, ne, W);
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
    var W, ne = {}, be = null;
    if (U != null)
      for (W in U.key !== void 0 && (be = "" + U.key), U)
        Se.call(U, W) && W !== "key" && W !== "__self" && W !== "__source" && (ne[W] = U[W]);
    var Ee = arguments.length - 2;
    if (Ee === 1) ne.children = $;
    else if (1 < Ee) {
      for (var P = Array(Ee), ae = 0; ae < Ee; ae++)
        P[ae] = arguments[ae + 2];
      ne.children = P;
    }
    if (S && S.defaultProps)
      for (W in Ee = S.defaultProps, Ee)
        ne[W] === void 0 && (ne[W] = Ee[W]);
    return se(S, be, ne);
  }, ue.createRef = function() {
    return { current: null };
  }, ue.forwardRef = function(S) {
    return { $$typeof: T, render: S };
  }, ue.isValidElement = Ue, ue.lazy = function(S) {
    return {
      $$typeof: x,
      _payload: { _status: -1, _result: S },
      _init: ye
    };
  }, ue.memo = function(S, U) {
    return {
      $$typeof: A,
      type: S,
      compare: U === void 0 ? null : U
    };
  }, ue.startTransition = Ye, ue.unstable_useCacheRefresh = function() {
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
var ph;
function md() {
  return ph || (ph = 1, Es.exports = h1()), Es.exports;
}
var oe = md();
const vt = /* @__PURE__ */ $l(oe);
var ps = { exports: {} }, Ri = {}, Ts = { exports: {} }, Rs = {};
var Th;
function m1() {
  return Th || (Th = 1, (function(i) {
    function c(w, ee) {
      var Q = w.length;
      w.push(ee);
      e: for (; 0 < Q; ) {
        var ye = Q - 1 >>> 1, fe = w[ye];
        if (0 < s(fe, ee))
          w[ye] = ee, w[Q] = fe, Q = ye;
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
        e: for (var ye = 0, fe = w.length, Ye = fe >>> 1; ye < Ye; ) {
          var lt = 2 * (ye + 1) - 1, Dt = w[lt], S = lt + 1, U = w[S];
          if (0 > s(Dt, Q))
            S < fe && 0 > s(U, Dt) ? (w[ye] = U, w[S] = Q, ye = S) : (w[ye] = Dt, w[lt] = Q, ye = lt);
          else if (S < fe && 0 > s(U, Q))
            w[ye] = U, w[S] = Q, ye = S;
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
    var _ = [], A = [], x = 1, m = null, z = 3, q = !1, L = !1, j = !1, M = !1, H = typeof setTimeout == "function" ? setTimeout : null, D = typeof clearTimeout == "function" ? clearTimeout : null, F = typeof setImmediate < "u" ? setImmediate : null;
    function te(w) {
      for (var ee = o(A); ee !== null; ) {
        if (ee.callback === null) r(A);
        else if (ee.startTime <= w)
          r(A), ee.sortIndex = ee.expirationTime, c(_, ee);
        else break;
        ee = o(A);
      }
    }
    function V(w) {
      if (j = !1, te(w), !L)
        if (o(_) !== null)
          L = !0, J || (J = !0, Ue());
        else {
          var ee = o(A);
          ee !== null && De(V, ee.startTime - w);
        }
    }
    var J = !1, G = -1, k = 5, Se = -1;
    function se() {
      return M ? !0 : !(i.unstable_now() - Se < k);
    }
    function ze() {
      if (M = !1, J) {
        var w = i.unstable_now();
        Se = w;
        var ee = !0;
        try {
          e: {
            L = !1, j && (j = !1, D(G), G = -1), q = !0;
            var Q = z;
            try {
              t: {
                for (te(w), m = o(_); m !== null && !(m.expirationTime > w && se()); ) {
                  var ye = m.callback;
                  if (typeof ye == "function") {
                    m.callback = null, z = m.priorityLevel;
                    var fe = ye(
                      m.expirationTime <= w
                    );
                    if (w = i.unstable_now(), typeof fe == "function") {
                      m.callback = fe, te(w), ee = !0;
                      break t;
                    }
                    m === o(_) && r(_), te(w);
                  } else r(_);
                  m = o(_);
                }
                if (m !== null) ee = !0;
                else {
                  var Ye = o(A);
                  Ye !== null && De(
                    V,
                    Ye.startTime - w
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
          ee ? Ue() : J = !1;
        }
      }
    }
    var Ue;
    if (typeof F == "function")
      Ue = function() {
        F(ze);
      };
    else if (typeof MessageChannel < "u") {
      var Oe = new MessageChannel(), Ie = Oe.port2;
      Oe.port1.onmessage = ze, Ue = function() {
        Ie.postMessage(null);
      };
    } else
      Ue = function() {
        H(ze, 0);
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
      M = !0;
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
      var ye = i.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? ye + Q : ye) : Q = ye, w) {
        case 1:
          var fe = -1;
          break;
        case 2:
          fe = 250;
          break;
        case 5:
          fe = 1073741823;
          break;
        case 4:
          fe = 1e4;
          break;
        default:
          fe = 5e3;
      }
      return fe = Q + fe, w = {
        id: x++,
        callback: ee,
        priorityLevel: w,
        startTime: Q,
        expirationTime: fe,
        sortIndex: -1
      }, Q > ye ? (w.sortIndex = Q, c(A, w), o(_) === null && w === o(A) && (j ? (D(G), G = -1) : j = !0, De(V, Q - ye))) : (w.sortIndex = fe, c(_, w), L || q || (L = !0, J || (J = !0, Ue()))), w;
    }, i.unstable_shouldYield = se, i.unstable_wrapCallback = function(w) {
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
  })(Rs)), Rs;
}
var Rh;
function g1() {
  return Rh || (Rh = 1, Ts.exports = m1()), Ts.exports;
}
var Os = { exports: {} }, ct = {};
var Oh;
function S1() {
  if (Oh) return ct;
  Oh = 1;
  var i = md();
  function c(x) {
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
        throw Error(c(522));
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
  return ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, ct.browser = function(x) {
    return { $$typeof: v, _reason: x };
  }, ct.createPortal = function(x, m) {
    var z = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
      throw Error(c(299));
    return T(x, m, null, z);
  }, ct.flushSync = function(x) {
    var m = _.T, z = r.p;
    try {
      if (_.T = null, r.p = 2, x) return x();
    } finally {
      _.T = m, r.p = z, r.d.f();
    }
  }, ct.preconnect = function(x, m) {
    typeof x == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, r.d.C(x, m));
  }, ct.prefetchDNS = function(x) {
    typeof x == "string" && r.d.D(x);
  }, ct.preinit = function(x, m) {
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
  }, ct.preinitModule = function(x, m) {
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
  }, ct.preload = function(x, m) {
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
  }, ct.preloadModule = function(x, m) {
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
  }, ct.requestFormReset = function(x) {
    r.d.r(x);
  }, ct.unstable_batchedUpdates = function(x, m) {
    return x(m);
  }, ct.useFormState = function(x, m, z) {
    return _.H.useFormState(x, m, z);
  }, ct.useFormStatus = function() {
    return _.H.useHostTransitionStatus();
  }, ct.version = "19.3.0", ct;
}
var _h;
function b1() {
  if (_h) return Os.exports;
  _h = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (c) {
        console.error(c);
      }
  }
  return i(), Os.exports = S1(), Os.exports;
}
var Ah;
function E1() {
  if (Ah) return Ri;
  Ah = 1;
  var i = g1(), c = md(), o = b1();
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
        for (var f = !1, d = n.child; d; ) {
          if (d === l) {
            f = !0, l = n, a = u;
            break;
          }
          if (d === a) {
            f = !0, a = n, l = u;
            break;
          }
          d = d.sibling;
        }
        if (!f) {
          for (d = u.child; d; ) {
            if (d === l) {
              f = !0, l = u, a = n;
              break;
            }
            if (d === a) {
              f = !0, a = u, l = n;
              break;
            }
            d = d.sibling;
          }
          if (!f) throw Error(r(189));
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
  function M(e) {
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
  var H = null, D = null;
  function F(e, t, l) {
    return e === l ? !0 : e === t ? (H = e, !0) : !1;
  }
  function te(e, t, l) {
    return e === l ? (D = e, !1) : e === t ? (D !== null && (H = e), !0) : !1;
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
  var G = Object.assign, k = /* @__PURE__ */ Symbol.for("react.element"), Se = /* @__PURE__ */ Symbol.for("react.transitional.element"), se = /* @__PURE__ */ Symbol.for("react.portal"), ze = /* @__PURE__ */ Symbol.for("react.fragment"), Ue = /* @__PURE__ */ Symbol.for("react.strict_mode"), Oe = /* @__PURE__ */ Symbol.for("react.profiler"), Ie = /* @__PURE__ */ Symbol.for("react.consumer"), De = /* @__PURE__ */ Symbol.for("react.context"), w = /* @__PURE__ */ Symbol.for("react.forward_ref"), ee = /* @__PURE__ */ Symbol.for("react.suspense"), Q = /* @__PURE__ */ Symbol.for("react.suspense_list"), ye = /* @__PURE__ */ Symbol.for("react.memo"), fe = /* @__PURE__ */ Symbol.for("react.lazy"), Ye = /* @__PURE__ */ Symbol.for("react.activity"), lt = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), Dt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), S = /* @__PURE__ */ Symbol.for("react.view_transition"), U = /* @__PURE__ */ Symbol.for("react.recoverable"), $ = Symbol.iterator;
  function W(e) {
    return e === null || typeof e != "object" ? null : (e = $ && e[$] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ne = /* @__PURE__ */ Symbol.for("react.client.reference");
  function be(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ne ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ze:
        return "Fragment";
      case Oe:
        return "Profiler";
      case Ue:
        return "StrictMode";
      case ee:
        return "Suspense";
      case Q:
        return "SuspenseList";
      case Ye:
        return "Activity";
      case S:
        return "ViewTransition";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case se:
          return "Portal";
        case De:
          return e.displayName || "Context";
        case Ie:
          return (e._context.displayName || "Context") + ".Consumer";
        case w:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ye:
          return t = e.displayName || null, t !== null ? t : be(e.type) || "Memo";
        case fe:
          t = e._payload, e = e._init;
          try {
            return be(e(t));
          } catch {
          }
      }
    return null;
  }
  var Ee = Array.isArray, P = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ae = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, el = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, vn = [], ea = -1;
  function Mt(e) {
    return { current: e };
  }
  function Pe(e) {
    0 > ea || (e.current = vn[ea], vn[ea] = null, ea--);
  }
  function _e(e, t) {
    ea++, vn[ea] = e.current, e.current = t;
  }
  var jt = Mt(null), ta = Mt(null), dl = Mt(null), La = Mt(null);
  function yn(e, t) {
    switch (_e(dl, t), _e(ta, e), _e(jt, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? zy(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = zy(t), e = Dy(t, e);
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
    Pe(jt), _e(jt, e);
  }
  function Dl() {
    Pe(jt), Pe(ta), Pe(dl);
  }
  function yu(e) {
    var t = e.memoizedState;
    t !== null && (ru._currentValue = t.memoizedState, _e(La, e)), t = jt.current;
    var l = Dy(t, e.type);
    t !== l && (_e(ta, e), _e(jt, l));
  }
  function qa(e) {
    ta.current === e && (Pe(jt), Pe(ta)), La.current === e && (Pe(La), ru._currentValue = el);
  }
  var hu, mu;
  function vl(e) {
    if (hu === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        hu = t && t[1] || "", mu = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + hu + e + mu;
  }
  var hn = !1;
  function gu(e, t) {
    if (!e || hn) return "";
    hn = !0;
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
      var u = a.DetermineComponentFrameRoot(), f = u[0], d = u[1];
      if (f && d) {
        var y = f.split(`
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
      hn = !1, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? vl(l) : "";
  }
  function qi(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return vl(e.type);
      case 16:
        return vl("Lazy");
      case 13:
        return e.child !== t && t !== null ? vl("Suspense Fallback") : vl("Suspense");
      case 19:
        return vl("SuspenseList");
      case 0:
      case 15:
        return gu(e.type, !1);
      case 11:
        return gu(e.type.render, !1);
      case 1:
        return gu(e.type, !0);
      case 31:
        return vl("Activity");
      case 30:
        return vl("ViewTransition");
      default:
        return "";
    }
  }
  function Yi(e) {
    try {
      var t = "", l = null;
      do
        t += qi(e, l), l = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var mn = Object.prototype.hasOwnProperty, gn = i.unstable_scheduleCallback, Sn = i.unstable_cancelCallback, Wf = i.unstable_shouldYield, ji = i.unstable_requestPaint, yt = i.unstable_now, Gi = i.unstable_getCurrentPriorityLevel, Xi = i.unstable_ImmediatePriority, Su = i.unstable_UserBlockingPriority, bn = i.unstable_NormalPriority, Vi = i.unstable_LowPriority, Qi = i.unstable_IdlePriority, Zi = i.log, Pf = i.unstable_setDisableYieldValue, la = null, ht = null;
  function tl(e) {
    if (typeof Zi == "function" && Pf(e), ht && typeof ht.setStrictMode == "function")
      try {
        ht.setStrictMode(la, e);
      } catch {
      }
  }
  var mt = Math.clz32 ? Math.clz32 : Ji, Ki = Math.log, $f = Math.LN2;
  function Ji(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ki(e) / $f | 0) | 0;
  }
  var En = 256, Ya = 262144, pn = 4194304;
  function Gt(e) {
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
  function Ml(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0, u = e.suspendedLanes, f = e.pingedLanes;
    e = e.warmLanes;
    var d = a & 134217727;
    return d !== 0 ? (a = d & ~u, a !== 0 ? n = Gt(a) : (f &= d, f !== 0 ? n = Gt(f) : l || (l = d & ~e, l !== 0 && (n = Gt(l))))) : (d = a & ~u, d !== 0 ? n = Gt(d) : f !== 0 ? n = Gt(f) : l || (l = a & ~e, l !== 0 && (n = Gt(l)))), n === 0 ? 0 : t !== 0 && t !== n && (t & u) === 0 && (u = n & -n, l = t & -t, u >= l || u === 32 && (l & 4194048) !== 0) ? t : n;
  }
  function aa(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function ki(e, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var a = 31 - mt(l), n = 1 << a;
        t |= e[a], l &= ~n;
      }
    return t;
  }
  function Wi(e, t) {
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
  function Pi() {
    var e = pn;
    return pn <<= 1, (pn & 62914560) === 0 && (pn = 4194304), e;
  }
  function Nl(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function na(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Z(e, t, l, a, n, u) {
    var f = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var d = e.entanglements, y = e.expirationTimes, p = e.hiddenUpdates;
    for (l = f & ~l; 0 < l; ) {
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
    a !== 0 && $i(e, a, 0), u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(f & ~t));
  }
  function $i(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - mt(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 261930;
  }
  function Xt(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var a = 31 - mt(l), n = 1 << a;
      n & t | e[a] & t && (e[a] |= t), l &= ~n;
    }
  }
  function bu(e, t) {
    var l = t & -t;
    return l = (l & 42) !== 0 ? 1 : Tn(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l;
  }
  function Tn(e) {
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
  function Rn(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Eu() {
    var e = ae.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : vh(e.type));
  }
  function pu(e, t) {
    var l = ae.p;
    try {
      return ae.p = e, t();
    } finally {
      ae.p = l;
    }
  }
  var Vt = Math.random().toString(36).slice(2), Ze = "__reactFiber$" + Vt, at = "__reactProps$" + Vt, Bl = "__reactContainer$" + Vt, Tu = "__reactEvents$" + Vt, Ii = "__reactListeners$" + Vt, Fi = "__reactHandles$" + Vt, Ru = "__reactResources$" + Vt, ua = "__reactMarker$" + Vt, ja = "__reactLoad$" + Vt;
  function Ga(e) {
    delete e[Ze], delete e[at], delete e[Ii], delete e[Fi];
  }
  function yl(e) {
    var t;
    if (t = e[Ze]) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[Bl] || l[Ze]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = Jy(e); e !== null; ) {
            if (l = e[Ze]) return l;
            e = Jy(e);
          }
        return t;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function Ul(e) {
    if (e = e[Ze] || e[Bl]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function ia(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function Hl(e) {
    var t = e[Ru];
    return t || (t = e[Ru] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Ve(e) {
    e[ua] = !0;
  }
  function Ou(e) {
    e[ja] = void 0;
  }
  var On = /* @__PURE__ */ new Set(), _u = {};
  function hl(e, t) {
    wl(e, t), wl(e + "Capture", t);
  }
  function wl(e, t) {
    for (_u[e] = t, e = 0; e < t.length; e++)
      On.add(t[e]);
  }
  var er = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Au = {}, Cu = {};
  function tr(e) {
    return mn.call(Cu, e) ? !0 : mn.call(Au, e) ? !1 : er.test(e) ? Cu[e] = !0 : (Au[e] = !0, !1);
  }
  var ge = !1;
  function xu() {
    var e = ge;
    return ge = !1, e;
  }
  function Xa(e, t, l) {
    if (tr(t))
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
  function Va(e, t, l) {
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
  function Qt(e, t, l, a) {
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
  function ot(e) {
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
  function zu(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function lr(e, t, l) {
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
        set: function(f) {
          l = "" + f, u.call(this, f);
        }
      }), Object.defineProperty(e, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(f) {
          l = "" + f;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function _n(e) {
    if (!e._valueTracker) {
      var t = zu(e) ? "checked" : "value";
      e._valueTracker = lr(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Du(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(), a = "";
    return e && (a = zu(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== l ? (t.setValue(e), !0) : !1;
  }
  var ar = /[\n"\\]/g;
  function gt(e) {
    return e.replace(
      ar,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function An(e, t, l, a, n, u, f, d) {
    e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + ot(t)) : e.value !== "" + ot(t) && (e.value = "" + ot(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? f === "number" && e.value == t ? Qa(e, ot(e.value)) : Qa(e, ot(t)) : l != null ? Qa(e, ot(l)) : a != null && e.removeAttribute("value"), n == null && u != null && (e.defaultChecked = !!u), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.name = "" + ot(d) : e.removeAttribute("name");
  }
  function Mu(e, t, l, a, n, u, f, d) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || l != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        _n(e);
        return;
      }
      l = l != null ? "" + ot(l) : "", t = t != null ? "" + ot(t) : l, d || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = d ? e.checked : !!a, e.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f), _n(e);
  }
  function Qa(e, t) {
    e.defaultValue !== "" + t && (e.defaultValue = "" + t);
  }
  function ra(e, t, l, a) {
    if (e = e.options, t) {
      t = {};
      for (var n = 0; n < l.length; n++)
        t["$" + l[n]] = !0;
      for (l = 0; l < e.length; l++)
        n = t.hasOwnProperty("$" + e[l].value), e[l].selected !== n && (e[l].selected = n), n && a && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + ot(l), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === l) {
          e[n].selected = !0, a && (e[n].defaultSelected = !0);
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Nu(e, t, l) {
    if (t != null && (t = "" + ot(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + ot(l) : "";
  }
  function Bu(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(r(92));
        if (Ee(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), t = l;
    }
    l = ot(t), e.defaultValue = l, a = e.textContent, a === l && a !== "" && a !== null && (e.value = a), _n(e);
  }
  function Ll(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var nr = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Uu(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || nr.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function Td(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(r(62));
    if (e = e.style, l != null) {
      for (var a in l)
        !l.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "", ge = !0);
      for (var n in t)
        a = t[n], t.hasOwnProperty(n) && l[n] !== a && (Uu(e, n, a), ge = !0);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && Uu(e, u, t[u]);
  }
  function If(e) {
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
  var qg = /* @__PURE__ */ new Map([
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
  ]), Yg = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ur(e) {
    return Yg.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function ml() {
  }
  var Ff = null;
  function ec(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Cn = null, xn = null;
  function Rd(e) {
    var t = Ul(e);
    if (t && (e = t.stateNode)) {
      var l = e[at] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (An(
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
                var n = a[at] || null;
                if (!n) throw Error(r(90));
                An(
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
              a = l[t], a.form === e.form && Du(a);
          }
          break e;
        case "textarea":
          Nu(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && ra(e, !!l.multiple, t, !1);
      }
    }
  }
  var tc = !1;
  function Od(e, t, l) {
    if (tc) return e(t, l);
    tc = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (tc = !1, (Cn !== null || xn !== null) && (uf(), Cn && (t = Cn, e = xn, xn = Cn = null, Rd(t), e)))
        for (t = 0; t < e.length; t++) Rd(e[t]);
    }
  }
  function Hu(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[at] || null;
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
  var ql = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), lc = !1;
  if (ql)
    try {
      var wu = {};
      Object.defineProperty(wu, "passive", {
        get: function() {
          lc = !0;
        }
      }), window.addEventListener("test", wu, wu), window.removeEventListener("test", wu, wu);
    } catch {
      lc = !1;
    }
  var fa = null, ac = null, ir = null;
  function _d() {
    if (ir) return ir;
    var e, t = ac, l = t.length, a, n = "value" in fa ? fa.value : fa.textContent, u = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++) ;
    var f = l - e;
    for (a = 1; a <= f && t[l - a] === n[u - a]; a++) ;
    return ir = n.slice(e, 1 < a ? 1 - a : void 0);
  }
  function rr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function fr() {
    return !0;
  }
  function Ad() {
    return !1;
  }
  function St(e) {
    function t(l, a, n, u, f) {
      this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = f, this.currentTarget = null;
      for (var d in e)
        e.hasOwnProperty(d) && (l = e[d], this[d] = l ? l(u) : u[d]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? fr : Ad, this.isPropagationStopped = Ad, this;
    }
    return G(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = fr);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = fr);
      },
      persist: function() {
      },
      isPersistent: fr
    }), t;
  }
  var ca = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, cr = St(ca), Lu = G({}, ca, { view: 0, detail: 0 }), jg = St(Lu), nc, uc, qu, or = G({}, Lu, {
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
    getModifierState: rc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== qu && (qu && e.type === "mousemove" ? (nc = e.screenX - qu.screenX, uc = e.screenY - qu.screenY) : uc = nc = 0, qu = e), nc);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : uc;
    }
  }), Cd = St(or), Gg = G({}, or, { dataTransfer: 0 }), Xg = St(Gg), Vg = G({}, Lu, { relatedTarget: 0 }), ic = St(Vg), Qg = G({}, ca, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Zg = St(Qg), Kg = G({}, ca, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Jg = St(Kg), kg = G({}, ca, { data: 0 }), xd = St(kg), Wg = {
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
  }, Pg = {
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
  }, $g = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Ig(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = $g[e]) ? !!t[e] : !1;
  }
  function rc() {
    return Ig;
  }
  var Fg = G({}, Lu, {
    key: function(e) {
      if (e.key) {
        var t = Wg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = rr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Pg[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: rc,
    charCode: function(e) {
      return e.type === "keypress" ? rr(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? rr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), eS = St(Fg), tS = G({}, or, {
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
  }), zd = St(tS), lS = G({}, ca, { submitter: 0 }), aS = St(lS), nS = G({}, Lu, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: rc
  }), uS = St(nS), iS = G({}, ca, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), rS = St(iS), fS = G({}, or, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), cS = St(fS), oS = G({}, ca, {
    newState: 0,
    oldState: 0,
    source: 0
  }), sS = St(oS), dS = [9, 13, 27, 32], fc = ql && "CompositionEvent" in window, Yu = null;
  ql && "documentMode" in document && (Yu = document.documentMode);
  var vS = ql && "TextEvent" in window && !Yu, Dd = ql && (!fc || Yu && 8 < Yu && 11 >= Yu), Md = " ", Nd = !1;
  function Bd(e, t) {
    switch (e) {
      case "keyup":
        return dS.indexOf(t.keyCode) !== -1;
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
  function Ud(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var zn = !1;
  function yS(e, t) {
    switch (e) {
      case "compositionend":
        return Ud(t);
      case "keypress":
        return t.which !== 32 ? null : (Nd = !0, Md);
      case "textInput":
        return e = t.data, e === Md && Nd ? null : e;
      default:
        return null;
    }
  }
  function hS(e, t) {
    if (zn)
      return e === "compositionend" || !fc && Bd(e, t) ? (e = _d(), ir = ac = fa = null, zn = !1, e) : null;
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
        return Dd && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var mS = {
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
  function Hd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!mS[e.type] : t === "textarea";
  }
  function wd(e, t, l, a) {
    Cn ? xn ? xn.push(a) : xn = [a] : Cn = a, t = df(t, "onChange"), 0 < t.length && (l = new cr(
      "onChange",
      "change",
      null,
      l,
      a
    ), e.push({ event: l, listeners: t }));
  }
  var ju = null, Gu = null;
  function gS(e) {
    Ry(e, 0);
  }
  function sr(e) {
    var t = ia(e);
    if (Du(t)) return e;
  }
  function Ld(e, t) {
    if (e === "change") return t;
  }
  var qd = !1;
  if (ql) {
    var cc;
    if (ql) {
      var oc = "oninput" in document;
      if (!oc) {
        var Yd = document.createElement("div");
        Yd.setAttribute("oninput", "return;"), oc = typeof Yd.oninput == "function";
      }
      cc = oc;
    } else cc = !1;
    qd = cc && (!document.documentMode || 9 < document.documentMode);
  }
  function jd() {
    ju && (ju.detachEvent("onpropertychange", Gd), Gu = ju = null);
  }
  function Gd(e) {
    if (e.propertyName === "value" && sr(Gu)) {
      var t = [];
      wd(
        t,
        Gu,
        e,
        ec(e)
      ), Od(gS, t);
    }
  }
  function SS(e, t, l) {
    e === "focusin" ? (jd(), ju = t, Gu = l, ju.attachEvent("onpropertychange", Gd)) : e === "focusout" && jd();
  }
  function bS(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return sr(Gu);
  }
  function ES(e, t) {
    if (e === "click") return sr(t);
  }
  function pS(e, t) {
    if (e === "input" || e === "change")
      return sr(t);
  }
  function TS(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Nt = typeof Object.is == "function" ? Object.is : TS;
  function Xu(e, t) {
    if (Nt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var l = Object.keys(e), a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!mn.call(t, n) || !Nt(e[n], t[n]))
        return !1;
    }
    return !0;
  }
  function sc(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Xd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Vd(e, t) {
    var l = Xd(e);
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
      l = Xd(l);
    }
  }
  function Qd(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Qd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Zd(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = sc(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = sc(e.document);
    }
    return t;
  }
  function dc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var RS = ql && "documentMode" in document && 11 >= document.documentMode, Dn = null, vc = null, Vu = null, yc = !1;
  function Kd(e, t, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    yc || Dn == null || Dn !== sc(a) || (a = Dn, "selectionStart" in a && dc(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Vu && Xu(Vu, a) || (Vu = a, a = df(vc, "onSelect"), 0 < a.length && (t = new cr(
      "onSelect",
      "select",
      null,
      t,
      l
    ), e.push({ event: t, listeners: a }), t.target = Dn)));
  }
  function Za(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
  }
  var Mn = {
    animationend: Za("Animation", "AnimationEnd"),
    animationiteration: Za("Animation", "AnimationIteration"),
    animationstart: Za("Animation", "AnimationStart"),
    transitionrun: Za("Transition", "TransitionRun"),
    transitionstart: Za("Transition", "TransitionStart"),
    transitioncancel: Za("Transition", "TransitionCancel"),
    transitionend: Za("Transition", "TransitionEnd")
  }, hc = {}, Jd = {};
  ql && (Jd = document.createElement("div").style, "AnimationEvent" in window || (delete Mn.animationend.animation, delete Mn.animationiteration.animation, delete Mn.animationstart.animation), "TransitionEvent" in window || delete Mn.transitionend.transition);
  function Ka(e) {
    if (hc[e]) return hc[e];
    if (!Mn[e]) return e;
    var t = Mn[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in Jd)
        return hc[e] = t[l];
    return e;
  }
  var kd = Ka("animationend"), Wd = Ka("animationiteration"), Pd = Ka("animationstart"), OS = Ka("transitionrun"), _S = Ka("transitionstart"), AS = Ka("transitioncancel"), $d = Ka("transitionend"), Id = /* @__PURE__ */ new Map(), mc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  mc.push("scrollEnd");
  function ll(e, t) {
    Id.set(e, t), hl(t, [e]);
  }
  var CS = 0;
  function Yl(e, t) {
    if (e.name != null && e.name !== "auto") return e.name;
    if (t.autoName !== null) return t.autoName;
    e = il.identifierPrefix;
    var l = CS++;
    return e = "_" + e + "t_" + l.toString(32) + "_", t.autoName = e;
  }
  function Fd(e) {
    if (e == null || typeof e == "string")
      return e;
    var t = null, l = $n;
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
  function jl(e, t) {
    return e = Fd(e), t = Fd(t), t == null ? e === "auto" ? null : e : t === "auto" ? null : t;
  }
  var dr = typeof reportError == "function" ? reportError : function(e) {
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
  }, Zt = [], Nn = 0, gc = 0;
  function vr() {
    for (var e = Nn, t = gc = Nn = 0; t < e; ) {
      var l = Zt[t];
      Zt[t++] = null;
      var a = Zt[t];
      Zt[t++] = null;
      var n = Zt[t];
      Zt[t++] = null;
      var u = Zt[t];
      if (Zt[t++] = null, a !== null && n !== null) {
        var f = a.pending;
        f === null ? n.next = n : (n.next = f.next, f.next = n), a.pending = n;
      }
      u !== 0 && ev(l, n, u);
    }
  }
  function yr(e, t, l, a) {
    Zt[Nn++] = e, Zt[Nn++] = t, Zt[Nn++] = l, Zt[Nn++] = a, gc |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function Sc(e, t, l, a) {
    return yr(e, t, l, a), hr(e);
  }
  function Ja(e, t) {
    return yr(e, null, null, t), hr(e);
  }
  function ev(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = e.return; u !== null; )
      u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (n = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, n && t !== null && (n = 31 - mt(l), e = u.hiddenUpdates, a = e[n], a === null ? e[n] = [t] : a.push(t), t.lane = l | 536870912), u) : null;
  }
  function hr(e) {
    if (50 < si)
      throw si = 0, nf = null, Error(r(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Bn = {};
  function xS(e, t, l, a) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ot(e, t, l, a) {
    return new xS(e, t, l, a);
  }
  function bc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Gl(e, t) {
    var l = e.alternate;
    return l === null ? (l = Ot(
      e.tag,
      t,
      e.key,
      e.mode
    ), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 1206910976, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
  }
  function tv(e, t) {
    e.flags &= 1206910978;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function mr(e, t, l, a, n, u) {
    var f = 0;
    if (a = e, typeof a == "function") bc(a) && (f = 1);
    else if (typeof a == "string")
      f = l1(
        e,
        l,
        jt.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (a) {
        case Ye:
          return e = Ot(31, l, t, n), e.elementType = Ye, e.lanes = u, e;
        case ze:
          return ka(l.children, n, u, t);
        case Ue:
          f = 8, n |= 24;
          break;
        case Oe:
          return e = Ot(12, l, t, n | 2), e.elementType = Oe, e.lanes = u, e;
        case ee:
          return e = Ot(13, l, t, n), e.elementType = ee, e.lanes = u, e;
        case Q:
          return e = Ot(19, l, t, n), e.elementType = Q, e.lanes = u, e;
        case lt:
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
                f = 10;
                break e;
              case Ie:
                f = 9;
                break e;
              case w:
                f = 11;
                break e;
              case ye:
                f = 14;
                break e;
              case fe:
                f = 16, a = null;
                break e;
            }
          f = 29, l = Error(
            r(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return t = Ot(f, l, t, n), t.elementType = e, t.type = a, t.lanes = u, t;
  }
  function ka(e, t, l, a) {
    return e = Ot(7, e, a, t), e.lanes = l, e;
  }
  function Ec(e, t, l) {
    return e = Ot(6, e, null, t), e.lanes = l, e;
  }
  function lv(e) {
    var t = Ot(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function pc(e, t, l) {
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
  var av = /* @__PURE__ */ new WeakMap();
  function Kt(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = av.get(e);
      return l !== void 0 ? l : (t = {
        value: e,
        source: t,
        stack: Yi(t)
      }, av.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Yi(t)
    };
  }
  var Un = [], Hn = 0, gr = null, Qu = 0, Jt = [], kt = 0, oa = null, gl = 1, Sl = "";
  function Xl(e, t) {
    Un[Hn++] = Qu, Un[Hn++] = gr, gr = e, Qu = t;
  }
  function nv(e, t, l) {
    Jt[kt++] = gl, Jt[kt++] = Sl, Jt[kt++] = oa, oa = e;
    var a = gl;
    e = Sl;
    var n = 32 - mt(a) - 1;
    a &= ~(1 << n), l += 1;
    var u = 32 - mt(t) + n;
    if (30 < u) {
      var f = n - n % 5;
      u = (a & (1 << f) - 1).toString(32), a >>= f, n -= f, gl = 1 << 32 - mt(t) + n | l << n | a, Sl = u + e;
    } else
      gl = 1 << u | l << n | a, Sl = e;
  }
  function Sr(e) {
    e.return !== null && (Xl(e, 1), nv(e, 1, 0));
  }
  function Tc(e) {
    for (; e === gr; )
      gr = Un[--Hn], Un[Hn] = null, Qu = Un[--Hn], Un[Hn] = null;
    for (; e === oa; )
      oa = Jt[--kt], Jt[kt] = null, Sl = Jt[--kt], Jt[kt] = null, gl = Jt[--kt], Jt[kt] = null;
  }
  function uv(e, t) {
    Jt[kt++] = gl, Jt[kt++] = Sl, Jt[kt++] = oa, gl = t.id, Sl = t.overflow, oa = e;
  }
  var Fe = null, He = null, ce = !1, sa = null, Wt = !1, Rc = Error(r(519));
  function da(e) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Zu(Kt(t, e)), Rc;
  }
  function iv(e) {
    var t = e.stateNode, l = e.type, a = e.memoizedProps;
    switch (t[Ze] = e, t[at] = a, l) {
      case "dialog":
        ve("cancel", t), ve("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        ve("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < vi.length; l++)
          ve(vi[l], t);
        break;
      case "source":
        ve("error", t);
        break;
      case "img":
      case "image":
      case "link":
        ve("error", t), ve("load", t);
        break;
      case "details":
        ve("toggle", t);
        break;
      case "input":
        ve("invalid", t), Mu(
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
        ve("invalid", t);
        break;
      case "textarea":
        ve("invalid", t), Bu(t, a.value, a.defaultValue, a.children);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === !0 || Cy(t.textContent, l) ? (a.popover != null && (ve("beforetoggle", t), ve("toggle", t)), a.onScroll != null && ve("scroll", t), a.onScrollEnd != null && ve("scrollend", t), a.onClick != null && (t.onclick = ml), t = !0) : t = !1, t || da(e, !0);
  }
  function br(e) {
    for (Fe = e.return; Fe; )
      switch (Fe.tag) {
        case 5:
        case 31:
        case 13:
          Wt = !1;
          return;
        case 27:
        case 3:
          Wt = !0;
          return;
        default:
          Fe = Fe.return;
      }
  }
  function wn(e) {
    if (e !== Fe) return !1;
    if (!ce) return br(e), ce = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || es(e.type, e.memoizedProps)), l = !l), l && He && da(e), br(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      He = Ky(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      He = Ky(e);
    } else
      t === 27 ? (t = He, xa(e.type) ? (e = cs, cs = null, He = e) : He = t) : He = Fe ? $t(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Wa() {
    He = Fe = null, ce = !1;
  }
  function Oc() {
    var e = sa;
    return e !== null && (Ct === null ? Ct = e : Ct.push.apply(
      Ct,
      e
    ), sa = null), e;
  }
  function Zu(e) {
    sa === null ? sa = [e] : sa.push(e);
  }
  var _c = Mt(null), Pa = null, Vl = null;
  function va(e, t, l) {
    _e(_c, t._currentValue), t._currentValue = l;
  }
  function Ql(e) {
    e._currentValue = _c.current, Pe(_c);
  }
  function Er(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === l) break;
      e = e.return;
    }
  }
  function Ac(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var f = n.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var d = u;
          u = n;
          for (var y = 0; y < t.length; y++)
            if (d.context === t[y]) {
              u.lanes |= l, d = u.alternate, d !== null && (d.lanes |= l), Er(
                u.return,
                l,
                e
              ), a || (f = null);
              break e;
            }
          u = d.next;
        }
      } else if (n.tag === 18) {
        if (f = n.return, f === null) throw Error(r(341));
        f.lanes |= l, u = f.alternate, u !== null && (u.lanes |= l), Er(f, l, e), f = null;
      } else
        n.tag === 13 && n.memoizedState !== null && n.memoizedState.dehydrated === null ? (n.lanes |= l, f = n.alternate, f !== null && (f.lanes |= l), Er(
          n.return,
          l,
          e
        ), f = n.child, f = f !== null ? f.sibling : null) : f = n.child;
      if (f !== null) f.return = n;
      else
        for (f = n; f !== null; ) {
          if (f === e) {
            f = null;
            break;
          }
          if (n = f.sibling, n !== null) {
            n.return = f.return, f = n;
            break;
          }
          f = f.return;
        }
      n = f;
    }
  }
  function $a(e, t, l, a) {
    e = null;
    for (var n = t, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var f = n.alternate;
        if (f === null) throw Error(r(387));
        if (f = f.memoizedProps, f !== null) {
          var d = n.type;
          Nt(n.pendingProps.value, f.value) || (e !== null ? e.push(d) : e = [d]);
        }
      } else if (n === La.current) {
        if (f = n.alternate, f === null) throw Error(r(387));
        f.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(ru) : e = [ru]);
      }
      n = n.return;
    }
    return e !== null && Ac(
      t,
      e,
      l,
      a
    ), t.flags |= 262144, e !== null;
  }
  function pr(e) {
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
  function Ia(e) {
    Pa = e, Vl = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function nt(e) {
    return rv(Pa, e);
  }
  function Tr(e, t) {
    return Pa === null && Ia(e), rv(e, t);
  }
  function rv(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, Vl === null) {
      if (e === null) throw Error(r(308));
      Vl = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Vl = Vl.next = t;
    return l;
  }
  var zS = typeof AbortController < "u" ? AbortController : function() {
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
  }, DS = i.unstable_scheduleCallback, MS = i.unstable_NormalPriority, Ke = {
    $$typeof: De,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Cc() {
    return {
      controller: new zS(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ku(e) {
    e.refCount--, e.refCount === 0 && DS(MS, function() {
      e.controller.abort();
    });
  }
  function fv(e, t) {
    if ((e.pendingLanes & 4194048) !== 0) {
      var l = e.transitionTypes;
      for (l === null && (l = e.transitionTypes = []), e = 0; e < t.length; e++) {
        var a = t[e];
        l.indexOf(a) === -1 && l.push(a);
      }
    }
  }
  var Ju = null;
  function NS(e) {
    var t = e.transitionTypes;
    return e.transitionTypes = null, t;
  }
  var ku = null, xc = 0, Fa = 0, Ln = null;
  function BS(e, t) {
    if (ku === null) {
      var l = ku = [];
      xc = 0, Fa = Zo(), Ln = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return xc++, t.then(cv, cv), t;
  }
  function cv() {
    if (--xc === 0 && (Ju = null, ku !== null)) {
      Ln !== null && (Ln.status = "fulfilled");
      var e = ku;
      ku = null, Fa = 0, Ln = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function US(e, t) {
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
  var ov = P.S;
  P.S = function(e, t) {
    if (ly = yt(), typeof t == "object" && t !== null && typeof t.then == "function" && BS(e, t), Ju !== null)
      for (var l = tu; l !== null; )
        fv(l, Ju), l = l.next;
    if (l = e.types, l !== null) {
      for (var a = tu; a !== null; )
        fv(a, l), a = a.next;
      if (Fa !== 0) {
        a = Ju, a === null && (a = Ju = []);
        for (var n = 0; n < l.length; n++) {
          var u = l[n];
          a.indexOf(u) === -1 && a.push(u);
        }
      }
    }
    ov !== null && ov(e, t);
  };
  var en = Mt(null);
  function zc() {
    var e = en.current;
    return e !== null ? e : Ne.pooledCache;
  }
  function Rr(e, t) {
    t === null ? _e(en, en.current) : _e(en, t.pool);
  }
  function sv() {
    var e = zc();
    return e === null ? null : { parent: Ke._currentValue, pool: e };
  }
  var qn = Error(r(460)), Dc = Error(r(474)), Or = Error(r(542)), _r = { then: function() {
  } };
  function dv(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function vv(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(ml, ml), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, hv(e), e === void 0 && !("reason" in t) ? Error(r(600)) : e;
      default:
        if (typeof t.status == "string") t.then(ml, ml);
        else {
          if (e = Ne, e !== null && 100 < e.shellSuspendCounter)
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
            throw e = t.reason, hv(e), e;
        }
        throw ln = t, qn;
    }
  }
  function tn(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (ln = l, qn) : l;
    }
  }
  var ln = null;
  function yv() {
    if (ln === null) throw Error(r(459));
    var e = ln;
    return ln = null, e;
  }
  function hv(e) {
    if (e === qn || e === Or)
      throw Error(r(483));
  }
  var Yn = null, Wu = 0;
  function Ar(e) {
    var t = Wu;
    return Wu += 1, Yn === null && (Yn = []), vv(Yn, e, t);
  }
  function ya(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Cr(e, t) {
    throw t.$$typeof === k ? Error(r(525)) : (e = Object.prototype.toString.call(t), Error(
      r(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function mv(e) {
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
      return E = Gl(E, g), E.index = 0, E.sibling = null, E;
    }
    function u(E, g, R) {
      return E.index = R, e ? (R = E.alternate, R !== null ? (R = R.index, R < g ? (E.flags |= 2, g) : R) : (E.flags |= 134217730, g)) : (E.flags |= 1048576, g);
    }
    function f(E) {
      return e && E.alternate === null && (E.flags |= 134217730), E;
    }
    function d(E, g, R, N) {
      return g === null || g.tag !== 6 ? (g = Ec(R, E.mode, N), g.return = E, g) : (g = n(g, R), g.return = E, g);
    }
    function y(E, g, R, N) {
      var X = R.type;
      return X === ze ? (E = C(
        E,
        g,
        R.props.children,
        N,
        R.key
      ), ya(E, R), E) : g !== null && (g.elementType === X || typeof X == "object" && X !== null && X.$$typeof === fe && tn(X) === g.type) ? (g = n(g, R.props), ya(g, R), g.return = E, g) : (g = mr(
        R.type,
        R.key,
        R.props,
        null,
        E.mode,
        N
      ), ya(g, R), g.return = E, g);
    }
    function p(E, g, R, N) {
      return g === null || g.tag !== 4 || g.stateNode.containerInfo !== R.containerInfo || g.stateNode.implementation !== R.implementation ? (g = pc(R, E.mode, N), g.return = E, g) : (g = n(g, R.children || []), g.return = E, g);
    }
    function C(E, g, R, N, X) {
      return g === null || g.tag !== 7 ? (g = ka(
        R,
        E.mode,
        N,
        X
      ), g.return = E, g) : (g = n(g, R), g.return = E, g);
    }
    function B(E, g, R) {
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint")
        return g = Ec(
          "" + g,
          E.mode,
          R
        ), g.return = E, g;
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case Se:
            return R = mr(
              g.type,
              g.key,
              g.props,
              null,
              E.mode,
              R
            ), ya(R, g), R.return = E, R;
          case se:
            return g = pc(
              g,
              E.mode,
              R
            ), g.return = E, g;
          case fe:
            return g = tn(g), B(E, g, R);
        }
        if (Ee(g) || W(g))
          return g = ka(
            g,
            E.mode,
            R,
            null
          ), g.return = E, g;
        if (typeof g.then == "function")
          return B(E, Ar(g), R);
        if (g.$$typeof === De)
          return B(
            E,
            Tr(E, g),
            R
          );
        Cr(E, g);
      }
      return null;
    }
    function b(E, g, R, N) {
      var X = g !== null ? g.key : null;
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return X !== null ? null : d(E, g, "" + R, N);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case Se:
            return R.key === X ? y(E, g, R, N) : null;
          case se:
            return R.key === X ? p(E, g, R, N) : null;
          case fe:
            return R = tn(R), b(E, g, R, N);
        }
        if (Ee(R) || W(R))
          return X !== null ? null : C(E, g, R, N, null);
        if (typeof R.then == "function")
          return b(
            E,
            g,
            Ar(R),
            N
          );
        if (R.$$typeof === De)
          return b(
            E,
            g,
            Tr(E, R),
            N
          );
        Cr(E, R);
      }
      return null;
    }
    function O(E, g, R, N, X) {
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
        return E = E.get(R) || null, d(g, E, "" + N, X);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case Se:
            return E = E.get(
              N.key === null ? R : N.key
            ) || null, y(g, E, N, X);
          case se:
            return E = E.get(
              N.key === null ? R : N.key
            ) || null, p(g, E, N, X);
          case fe:
            return N = tn(N), O(
              E,
              g,
              R,
              N,
              X
            );
        }
        if (Ee(N) || W(N))
          return E = E.get(R) || null, C(g, E, N, X, null);
        if (typeof N.then == "function")
          return O(
            E,
            g,
            R,
            Ar(N),
            X
          );
        if (N.$$typeof === De)
          return O(
            E,
            g,
            R,
            Tr(g, N),
            X
          );
        Cr(g, N);
      }
      return null;
    }
    function Y(E, g, R, N) {
      for (var X = null, me = null, I = g, le = g = 0, We = null; I !== null && le < R.length; le++) {
        I.index > le ? (We = I, I = null) : We = I.sibling;
        var pe = b(
          E,
          I,
          R[le],
          N
        );
        if (pe === null) {
          I === null && (I = We);
          break;
        }
        e && I && pe.alternate === null && t(E, I), g = u(pe, g, le), me === null ? X = pe : me.sibling = pe, me = pe, I = We;
      }
      if (le === R.length)
        return l(E, I), ce && Xl(E, le), X;
      if (I === null) {
        for (; le < R.length; le++)
          I = B(E, R[le], N), I !== null && (g = u(
            I,
            g,
            le
          ), me === null ? X = I : me.sibling = I, me = I);
        return ce && Xl(E, le), X;
      }
      for (I = a(I); le < R.length; le++)
        We = O(
          I,
          E,
          le,
          R[le],
          N
        ), We !== null && (e && (pe = We.alternate, pe !== null && I.delete(pe.key === null ? le : pe.key)), g = u(
          We,
          g,
          le
        ), me === null ? X = We : me.sibling = We, me = We);
      return e && I.forEach(function(Ba) {
        return t(E, Ba);
      }), ce && Xl(E, le), X;
    }
    function K(E, g, R, N) {
      if (R == null) throw Error(r(151));
      for (var X = null, me = null, I = g, le = g = 0, We = null, pe = R.next(); I !== null && !pe.done; le++, pe = R.next()) {
        I.index > le ? (We = I, I = null) : We = I.sibling;
        var Ba = b(E, I, pe.value, N);
        if (Ba === null) {
          I === null && (I = We);
          break;
        }
        e && I && Ba.alternate === null && t(E, I), g = u(Ba, g, le), me === null ? X = Ba : me.sibling = Ba, me = Ba, I = We;
      }
      if (pe.done)
        return l(E, I), ce && Xl(E, le), X;
      if (I === null) {
        for (; !pe.done; le++, pe = R.next())
          pe = B(E, pe.value, N), pe !== null && (g = u(pe, g, le), me === null ? X = pe : me.sibling = pe, me = pe);
        return ce && Xl(E, le), X;
      }
      for (I = a(I); !pe.done; le++, pe = R.next())
        pe = O(I, E, le, pe.value, N), pe !== null && (e && (We = pe.alternate, We !== null && I.delete(
          We.key === null ? le : We.key
        )), g = u(pe, g, le), me === null ? X = pe : me.sibling = pe, me = pe);
      return e && I.forEach(function(y1) {
        return t(E, y1);
      }), ce && Xl(E, le), X;
    }
    function re(E, g, R, N) {
      if (typeof R == "object" && R !== null && R.type === ze && R.key === null && R.props.ref === void 0 && (R = R.props.children), typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case Se:
            e: {
              for (var X = R.key; g !== null; ) {
                if (g.key === X) {
                  if (X = R.type, X === ze) {
                    if (g.tag === 7) {
                      l(
                        E,
                        g.sibling
                      ), N = n(
                        g,
                        R.props.children
                      ), ya(N, R), N.return = E, E = N;
                      break e;
                    }
                  } else if (g.elementType === X || typeof X == "object" && X !== null && X.$$typeof === fe && tn(X) === g.type) {
                    l(
                      E,
                      g.sibling
                    ), N = n(g, R.props), ya(N, R), N.return = E, E = N;
                    break e;
                  }
                  l(E, g);
                  break;
                } else t(E, g);
                g = g.sibling;
              }
              R.type === ze ? (N = ka(
                R.props.children,
                E.mode,
                N,
                R.key
              ), ya(N, R), N.return = E, E = N) : (N = mr(
                R.type,
                R.key,
                R.props,
                null,
                E.mode,
                N
              ), ya(N, R), N.return = E, E = N);
            }
            return f(E);
          case se:
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
              N = pc(R, E.mode, N), N.return = E, E = N;
            }
            return f(E);
          case fe:
            return R = tn(R), re(
              E,
              g,
              R,
              N
            );
        }
        if (Ee(R))
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
          return re(
            E,
            g,
            Ar(R),
            N
          );
        if (R.$$typeof === De)
          return re(
            E,
            g,
            Tr(E, R),
            N
          );
        Cr(E, R);
      }
      return typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint" ? (R = "" + R, g !== null && g.tag === 6 ? (l(E, g.sibling), N = n(g, R), N.return = E, E = N) : (l(E, g), N = Ec(R, E.mode, N), N.return = E, E = N), f(E)) : l(E, g);
    }
    return function(E, g, R, N) {
      try {
        Wu = 0;
        var X = re(
          E,
          g,
          R,
          N
        );
        return Yn = null, X;
      } catch (I) {
        if (I === qn || I === Or) throw I;
        var me = Ot(29, I, null, E.mode);
        return me.lanes = N, me.return = E, me;
      }
    };
  }
  var an = mv(!0), gv = mv(!1), ha = !1;
  function Mc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Nc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function ma(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ga(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (Te & 2) !== 0) {
      var n = a.pending;
      return n === null ? t.next = t : (t.next = n.next, n.next = t), a.pending = t, t = hr(e), ev(e, null, l), t;
    }
    return yr(e, a, t, l), hr(e);
  }
  function Pu(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, Xt(e, l);
    }
  }
  function Bc(e, t) {
    var l = e.updateQueue, a = e.alternate;
    if (a !== null && (a = a.updateQueue, l === a)) {
      var n = null, u = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var f = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          u === null ? n = u = f : u = u.next = f, l = l.next;
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
  var Uc = !1;
  function $u() {
    if (Uc) {
      var e = Ln;
      if (e !== null) throw e;
    }
  }
  function Iu(e, t, l, a) {
    Uc = !1;
    var n = e.updateQueue;
    ha = !1;
    var u = n.firstBaseUpdate, f = n.lastBaseUpdate, d = n.shared.pending;
    if (d !== null) {
      n.shared.pending = null;
      var y = d, p = y.next;
      y.next = null, f === null ? u = p : f.next = p, f = y;
      var C = e.alternate;
      C !== null && (C = C.updateQueue, d = C.lastBaseUpdate, d !== f && (d === null ? C.firstBaseUpdate = p : d.next = p, C.lastBaseUpdate = y));
    }
    if (u !== null) {
      var B = n.baseState;
      f = 0, C = p = y = null, d = u;
      do {
        var b = d.lane & -536870913, O = b !== d.lane;
        if (O ? (he & b) === b : (a & b) === b) {
          b !== 0 && b === Fa && (Uc = !0), C !== null && (C = C.next = {
            lane: 0,
            tag: d.tag,
            payload: d.payload,
            callback: null,
            next: null
          });
          e: {
            var Y = e, K = d;
            b = t;
            var re = l;
            switch (K.tag) {
              case 1:
                if (Y = K.payload, typeof Y == "function") {
                  B = Y.call(re, B, b);
                  break e;
                }
                B = Y;
                break e;
              case 3:
                Y.flags = Y.flags & -65537 | 128;
              case 0:
                if (Y = K.payload, b = typeof Y == "function" ? Y.call(re, B, b) : Y, b == null) break e;
                B = G({}, B, b);
                break e;
              case 2:
                ha = !0;
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
          }, C === null ? (p = C = O, y = B) : C = C.next = O, f |= b;
        if (d = d.next, d === null) {
          if (d = n.shared.pending, d === null)
            break;
          O = d, d = O.next, O.next = null, n.lastBaseUpdate = O, n.shared.pending = null;
        }
      } while (!0);
      C === null && (y = B), n.baseState = y, n.firstBaseUpdate = p, n.lastBaseUpdate = C, u === null && (n.shared.lanes = 0), Oa |= f, e.lanes = f, e.memoizedState = B;
    }
  }
  function Sv(e, t) {
    if (typeof e != "function")
      throw Error(r(191, e));
    e.call(t);
  }
  function bv(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        Sv(l[e], t);
  }
  var Sa = Mt(null), xr = Mt(0);
  function Ev(e, t) {
    e = Wl, _e(xr, e), _e(Sa, t), Wl = e | t.baseLanes;
  }
  function Hc() {
    _e(xr, Wl), _e(Sa, Sa.current);
  }
  function wc() {
    Wl = xr.current, Pe(Sa), Pe(xr);
  }
  var ut = Mt(null), st = null;
  function ba(e) {
    var t = e.alternate;
    _e(it, it.current & 1), _e(ut, e), st === null && (t === null || Sa.current !== null || t.memoizedState !== null) && (st = e);
  }
  function Lc(e) {
    _e(it, it.current), _e(ut, e), st === null && (st = e);
  }
  function pv(e) {
    e.tag === 22 ? (_e(it, it.current), _e(ut, e), st === null && (st = e)) : Ea();
  }
  function Ea() {
    _e(it, it.current), _e(ut, ut.current);
  }
  function Bt(e) {
    Pe(ut), st === e && (st = null), Pe(it);
  }
  var it = Mt(0);
  function Fu(e, t) {
    _e(ut, ut.current), _e(it, t);
  }
  function qc(e) {
    Pe(it), Pe(ut), st === e && (st = null);
  }
  function zr(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || rs(l) || fs(l)))
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
  var Zl = 0, ie = null, Me = null, Je = null, Dr = !1, jn = !1, nn = !1, Mr = 0, ei = 0, Gn = null, HS = 0;
  function je() {
    throw Error(r(321));
  }
  function Yc(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!Nt(e[l], t[l])) return !1;
    return !0;
  }
  function jc(e, t, l, a, n, u) {
    return Zl = u, ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, P.H = e === null || e.memoizedState === null ? n0 : u0, nn = !1, u = l(a, n), nn = !1, jn && (u = Rv(
      t,
      l,
      a,
      n
    )), Tv(e), u;
  }
  function Tv(e) {
    P.H = qr;
    var t = Me !== null && Me.next !== null;
    if (Zl = 0, Je = Me = ie = null, Dr = !1, ei = 0, Gn = null, t) throw Error(r(300));
    e === null || ke || (e = e.dependencies, e !== null && pr(e) && (ke = !0));
  }
  function Rv(e, t, l, a) {
    ie = e;
    var n = 0;
    do {
      if (jn && (Gn = null), ei = 0, jn = !1, 25 <= n) throw Error(r(301));
      if (n += 1, Je = Me = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      P.H = VS, u = t(l, a);
    } while (jn);
    return u;
  }
  function wS() {
    var e = P.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? ti(t) : t, e = e.useState()[0], (Me !== null ? Me.memoizedState : null) !== e && (ie.flags |= 1024), t;
  }
  function Gc() {
    var e = Mr !== 0;
    return Mr = 0, e;
  }
  function Xc(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function Vc(e) {
    if (Dr) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Dr = !1;
    }
    Zl = 0, Je = Me = ie = null, jn = !1, ei = Mr = 0, Gn = null;
  }
  function bt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Je === null ? ie.memoizedState = Je = e : Je = Je.next = e, Je;
  }
  function Qe() {
    if (Me === null) {
      var e = ie.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Me.next;
    var t = Je === null ? ie.memoizedState : Je.next;
    if (t !== null)
      Je = t, Me = e;
    else {
      if (e === null)
        throw ie.alternate === null ? Error(r(467)) : Error(r(310));
      Me = e, e = {
        memoizedState: Me.memoizedState,
        baseState: Me.baseState,
        baseQueue: Me.baseQueue,
        queue: Me.queue,
        next: null
      }, Je === null ? ie.memoizedState = Je = e : Je = Je.next = e;
    }
    return Je;
  }
  function Nr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ti(e) {
    var t = ei;
    return ei += 1, Gn === null && (Gn = []), e = vv(Gn, e, t), t = ie, (Je === null ? t.memoizedState : Je.next) === null && (t = t.alternate, P.H = t === null || t.memoizedState === null ? n0 : u0), e;
  }
  function Br(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ti(e);
      if (e.$$typeof === U) return;
      if (e.$$typeof === De) return nt(e);
    }
    throw Error(r(438, String(e)));
  }
  function Qc(e) {
    var t = null, l = ie.updateQueue;
    if (l !== null && (t = l.memoCache), t == null) {
      var a = ie.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = Nr(), ie.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++)
        l[a] = Dt;
    return t.index++, l;
  }
  function Kl(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ur(e) {
    var t = Qe();
    return Zc(t, Me, e);
  }
  function Zc(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = l;
    var n = e.baseQueue, u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var f = n.next;
        n.next = u.next, u.next = f;
      }
      t.baseQueue = n = u, a.pending = null;
    }
    if (u = e.baseState, n === null) e.memoizedState = u;
    else {
      t = n.next;
      var d = f = null, y = null, p = t, C = !1;
      do {
        var B = p.lane & -536870913;
        if (B !== p.lane ? (he & B) === B : (Zl & B) === B) {
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
            }), B === Fa && (C = !0);
          else if ((Zl & b) === b) {
            p = p.next, b === Fa && (C = !0);
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
            }, y === null ? (d = y = B, f = u) : y = y.next = B, ie.lanes |= b, Oa |= b;
          B = p.action, nn && l(u, B), u = p.hasEagerState ? p.eagerState : l(u, B);
        } else
          b = {
            lane: B,
            revertLane: p.revertLane,
            gesture: p.gesture,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null
          }, y === null ? (d = y = b, f = u) : y = y.next = b, ie.lanes |= B, Oa |= B;
        p = p.next;
      } while (p !== null && p !== t);
      if (y === null ? f = u : y.next = d, !Nt(u, e.memoizedState) && (ke = !0, C && (l = Ln, l !== null)))
        throw l;
      e.memoizedState = u, e.baseState = f, e.baseQueue = y, a.lastRenderedState = u;
    }
    return n === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function Kc(e) {
    var t = Qe(), l = t.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch, n = l.pending, u = t.memoizedState;
    if (n !== null) {
      l.pending = null;
      var f = n = n.next;
      do
        u = e(u, f.action), f = f.next;
      while (f !== n);
      Nt(u, t.memoizedState) || (ke = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), l.lastRenderedState = u;
    }
    return [u, a];
  }
  function Ov(e, t, l) {
    var a = ie, n = Qe(), u = ce;
    if (u) {
      if (l === void 0) throw Error(r(407));
      l = l();
    } else l = t();
    var f = !Nt(
      (Me || n).memoizedState,
      l
    );
    if (f && (n.memoizedState = l, ke = !0), n = n.queue, Wc(Cv.bind(null, a, n, e), [
      e
    ]), e = n.getSnapshot !== t || f || Je !== null && (Je.memoizedState.tag & 1) !== 0, Xn(
      e ? 9 : 8,
      { destroy: void 0 },
      Av.bind(null, a, n, l, t),
      null
    ), e) {
      if (a.flags |= 2048, Ne === null) throw Error(r(349));
      u || (Zl & 127) !== 0 || _v(a, t, l);
    }
    return l;
  }
  function _v(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = ie.updateQueue, t === null ? (t = Nr(), ie.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function Av(e, t, l, a) {
    t.value = l, t.getSnapshot = a, xv(t) && zv(e);
  }
  function Cv(e, t, l) {
    return l(function() {
      xv(t) && zv(e);
    });
  }
  function xv(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !Nt(e, l);
    } catch {
      return !0;
    }
  }
  function zv(e) {
    var t = Ja(e, 2);
    t !== null && xt(t, e, 2);
  }
  function Jc(e) {
    var t = bt();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), nn) {
        tl(!0);
        try {
          l();
        } finally {
          tl(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Kl,
      lastRenderedState: e
    }, t;
  }
  function Dv(e, t, l, a) {
    return e.baseState = l, Zc(
      e,
      Me,
      typeof a == "function" ? a : Kl
    );
  }
  function LS(e, t, l, a, n) {
    if (Lr(e)) throw Error(r(485));
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
        then: function(f) {
          u.listeners.push(f);
        }
      };
      P.T !== null ? l(!0) : u.isTransition = !1, a(u), l = t.pending, l === null ? (u.next = t.pending = u, Mv(t, u)) : (u.next = l.next, t.pending = l.next = u);
    }
  }
  function Mv(e, t) {
    var l = t.action, a = t.payload, n = e.state;
    if (t.isTransition) {
      var u = P.T, f = {};
      f.types = u !== null ? u.types : null, P.T = f;
      try {
        var d = l(n, a), y = P.S;
        y !== null && y(f, d), Nv(e, t, d);
      } catch (p) {
        kc(e, t, p);
      } finally {
        u !== null && f.types !== null && (u.types = f.types), P.T = u;
      }
    } else
      try {
        u = l(n, a), Nv(e, t, u);
      } catch (p) {
        kc(e, t, p);
      }
  }
  function Nv(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(a) {
        Bv(e, t, a);
      },
      function(a) {
        return kc(e, t, a);
      }
    ) : Bv(e, t, l);
  }
  function Bv(e, t, l) {
    t.status = "fulfilled", t.value = l, Uv(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, Mv(e, l)));
  }
  function kc(e, t, l) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = l, Uv(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function Uv(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Hv(e, t) {
    return t;
  }
  function wv(e, t) {
    if (ce) {
      var l = Ne.formState;
      if (l !== null) {
        e: {
          var a = ie;
          if (ce) {
            if (He) {
              t: {
                for (var n = He, u = Wt; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (n = $t(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break t;
                  }
                }
                u = n.data, n = u === "F!" || u === "F" ? n : null;
              }
              if (n) {
                He = $t(
                  n.nextSibling
                ), a = n.data === "F!";
                break e;
              }
            }
            da(a);
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
      lastRenderedReducer: Hv,
      lastRenderedState: t
    }, l.queue = a, l = t0.bind(
      null,
      ie,
      a
    ), a.dispatch = l, a = Jc(!1), u = eo.bind(
      null,
      ie,
      !1,
      a.queue
    ), a = bt(), n = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = n, l = LS.bind(
      null,
      ie,
      n,
      u,
      l
    ), n.dispatch = l, a.memoizedState = e, [t, l, !1];
  }
  function Lv(e) {
    var t = Qe();
    return qv(t, Me, e);
  }
  function qv(e, t, l) {
    if (t = Zc(
      e,
      t,
      Hv
    )[0], e = Ur(Kl)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = ti(t);
      } catch (f) {
        throw f === qn ? Or : f;
      }
    else a = t;
    t = Qe();
    var n = t.queue, u = n.dispatch;
    return l !== t.memoizedState && (ie.flags |= 2048, Xn(
      9,
      { destroy: void 0 },
      qS.bind(null, n, l),
      null
    )), [a, u, e];
  }
  function qS(e, t) {
    e.action = t;
  }
  function Yv(e) {
    var t = Qe(), l = Me;
    if (l !== null)
      return qv(t, l, e);
    Qe(), t = t.memoizedState, l = Qe();
    var a = l.queue.dispatch;
    return l.memoizedState = e, [t, a, !1];
  }
  function Xn(e, t, l, a) {
    return e = { tag: e, create: l, deps: a, inst: t, next: null }, t = ie.updateQueue, t === null && (t = Nr(), ie.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (a = l.next, l.next = e, e.next = a, t.lastEffect = e), e;
  }
  function jv() {
    return Qe().memoizedState;
  }
  function Hr(e, t, l, a) {
    var n = bt();
    ie.flags |= e, n.memoizedState = Xn(
      1 | t,
      { destroy: void 0 },
      l,
      a === void 0 ? null : a
    );
  }
  function wr(e, t, l, a) {
    var n = Qe();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    Me !== null && a !== null && Yc(a, Me.memoizedState.deps) ? n.memoizedState = Xn(t, u, l, a) : (ie.flags |= e, n.memoizedState = Xn(
      1 | t,
      u,
      l,
      a
    ));
  }
  function Gv(e, t) {
    Hr(8390656, 8, e, t);
  }
  function Wc(e, t) {
    wr(2048, 8, e, t);
  }
  function YS(e) {
    ie.flags |= 4;
    var t = ie.updateQueue;
    if (t === null)
      t = Nr(), ie.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e);
    }
  }
  function Xv(e) {
    var t = Qe().memoizedState;
    return YS({ ref: t, nextImpl: e }), function() {
      if ((Te & 2) !== 0) throw Error(r(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Vv(e, t) {
    return wr(4, 2, e, t);
  }
  function Qv(e, t) {
    return wr(4, 4, e, t);
  }
  function Zv(e, t) {
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
  function Kv(e, t, l) {
    l = l != null ? l.concat([e]) : null, wr(4, 4, Zv.bind(null, t, e), l);
  }
  function Pc() {
  }
  function Jv(e, t) {
    var l = Qe();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && Yc(t, a[1]) ? a[0] : (l.memoizedState = [e, t], e);
  }
  function kv(e, t) {
    var l = Qe();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && Yc(t, a[1]))
      return a[0];
    if (a = e(), nn) {
      tl(!0);
      try {
        e();
      } finally {
        tl(!1);
      }
    }
    return l.memoizedState = [a, t], a;
  }
  function $c(e, t, l) {
    return l === void 0 || (Zl & 1073741824) !== 0 && (he & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = ny(), ie.lanes |= e, Oa |= e, l);
  }
  function Wv(e, t, l, a) {
    return Nt(l, t) ? l : Sa.current !== null ? (e = $c(e, l, a), Nt(e, t) || (ke = !0), e) : (Zl & 106) === 0 || (Zl & 1073741824) !== 0 && (he & 261930) === 0 ? (ke = !0, e.memoizedState = l) : (e = ny(), ie.lanes |= e, Oa |= e, t);
  }
  function Pv(e, t, l, a, n) {
    var u = ae.p;
    ae.p = u !== 0 && 8 > u ? u : 8;
    var f = P.T, d = {};
    d.types = f !== null ? f.types : null, P.T = d, eo(e, !1, t, l);
    try {
      var y = n(), p = P.S;
      if (p !== null && p(d, y), y !== null && typeof y == "object" && typeof y.then == "function") {
        var C = US(
          y,
          a
        );
        li(
          e,
          t,
          C,
          Lt(e)
        );
      } else
        li(
          e,
          t,
          a,
          Lt(e)
        );
    } catch (B) {
      li(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: B },
        Lt()
      );
    } finally {
      ae.p = u, f !== null && d.types !== null && (f.types = d.types), P.T = f;
    }
  }
  function jS() {
  }
  function Ic(e, t, l, a) {
    if (e.tag !== 5) throw Error(r(476));
    var n = $v(e).queue;
    Pv(
      e,
      n,
      t,
      el,
      l === null ? jS : function() {
        return Iv(e), l(a);
      }
    );
  }
  function $v(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: el,
      baseState: el,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Kl,
        lastRenderedState: el
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
        lastRenderedReducer: Kl,
        lastRenderedState: l
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Iv(e) {
    var t = $v(e);
    t.next === null && (t = e.alternate.memoizedState), li(
      e,
      t.next.queue,
      {},
      Lt()
    );
  }
  function Fc() {
    return nt(ru);
  }
  function Fv() {
    return Qe().memoizedState;
  }
  function e0() {
    return Qe().memoizedState;
  }
  function GS(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Lt();
          e = ma(l);
          var a = ga(t, e, l);
          a !== null && (xt(a, t, l), Pu(a, t, l)), t = { cache: Cc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function XS(e, t, l) {
    var a = Lt();
    l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Lr(e) ? l0(t, l) : (l = Sc(e, t, l, a), l !== null && (xt(l, e, a), a0(l, t, a)));
  }
  function t0(e, t, l) {
    var a = Lt();
    li(e, t, l, a);
  }
  function li(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Lr(e)) l0(t, n);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var f = t.lastRenderedState, d = u(f, l);
          if (n.hasEagerState = !0, n.eagerState = d, Nt(d, f))
            return yr(e, t, n, 0), Ne === null && vr(), !1;
        } catch {
        }
      if (l = Sc(e, t, n, a), l !== null)
        return xt(l, e, a), a0(l, t, a), !0;
    }
    return !1;
  }
  function eo(e, t, l, a) {
    if (a = {
      lane: 2,
      revertLane: Zo(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Lr(e)) {
      if (t) throw Error(r(479));
    } else
      t = Sc(
        e,
        l,
        a,
        2
      ), t !== null && xt(t, e, 2);
  }
  function Lr(e) {
    var t = e.alternate;
    return e === ie || t !== null && t === ie;
  }
  function l0(e, t) {
    jn = Dr = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function a0(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, Xt(e, l);
    }
  }
  var qr = {
    readContext: nt,
    use: Br,
    useCallback: je,
    useContext: je,
    useEffect: je,
    useImperativeHandle: je,
    useLayoutEffect: je,
    useInsertionEffect: je,
    useMemo: je,
    useReducer: je,
    useRef: je,
    useState: je,
    useDebugValue: je,
    useDeferredValue: je,
    useTransition: je,
    useSyncExternalStore: je,
    useId: je,
    useHostTransitionStatus: je,
    useFormState: je,
    useActionState: je,
    useOptimistic: je,
    useMemoCache: je,
    useCacheRefresh: je,
    useEffectEvent: je
  }, n0 = {
    readContext: nt,
    use: Br,
    useCallback: function(e, t) {
      return bt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: nt,
    useEffect: Gv,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, Hr(
        4194308,
        4,
        Zv.bind(null, t, e),
        l
      );
    },
    useLayoutEffect: function(e, t) {
      return Hr(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Hr(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var l = bt();
      t = t === void 0 ? null : t;
      var a = e();
      if (nn) {
        tl(!0);
        try {
          e();
        } finally {
          tl(!1);
        }
      }
      return l.memoizedState = [a, t], a;
    },
    useReducer: function(e, t, l) {
      var a = bt();
      if (l !== void 0) {
        var n = l(t);
        if (nn) {
          tl(!0);
          try {
            l(t);
          } finally {
            tl(!1);
          }
        }
      } else n = t;
      return a.memoizedState = a.baseState = n, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: n
      }, a.queue = e, e = e.dispatch = XS.bind(
        null,
        ie,
        e
      ), [a.memoizedState, e];
    },
    useRef: function(e) {
      var t = bt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Jc(e);
      var t = e.queue, l = t0.bind(null, ie, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: Pc,
    useDeferredValue: function(e, t) {
      var l = bt();
      return $c(l, e, t);
    },
    useTransition: function() {
      var e = Jc(!1);
      return e = Pv.bind(
        null,
        ie,
        e.queue,
        !0,
        !1
      ), bt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, l) {
      var a = ie, n = bt();
      if (ce) {
        if (l === void 0)
          throw Error(r(407));
        l = l();
      } else {
        if (l = t(), Ne === null)
          throw Error(r(349));
        (he & 127) !== 0 || _v(a, t, l);
      }
      n.memoizedState = l;
      var u = { value: l, getSnapshot: t };
      return n.queue = u, Gv(Cv.bind(null, a, u, e), [
        e
      ]), a.flags |= 2048, Xn(
        9,
        { destroy: void 0 },
        Av.bind(
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
      var e = bt(), t = Ne.identifierPrefix;
      if (ce) {
        var l = Sl, a = gl;
        l = (a & ~(1 << 32 - mt(a) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = Mr++, 0 < l && (t += "H" + l.toString(32)), t += "_";
      } else
        l = HS++, t = "_" + t + "r_" + l.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Fc,
    useFormState: wv,
    useActionState: wv,
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
      return t.queue = l, t = eo.bind(
        null,
        ie,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: Qc,
    useCacheRefresh: function() {
      return bt().memoizedState = GS.bind(
        null,
        ie
      );
    },
    useEffectEvent: function(e) {
      var t = bt(), l = { impl: e };
      return t.memoizedState = l, function() {
        if ((Te & 2) !== 0)
          throw Error(r(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, u0 = {
    readContext: nt,
    use: Br,
    useCallback: Jv,
    useContext: nt,
    useEffect: Wc,
    useImperativeHandle: Kv,
    useInsertionEffect: Vv,
    useLayoutEffect: Qv,
    useMemo: kv,
    useReducer: Ur,
    useRef: jv,
    useState: function() {
      return Ur(Kl);
    },
    useDebugValue: Pc,
    useDeferredValue: function(e, t) {
      var l = Qe();
      return Wv(
        l,
        Me.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Ur(Kl)[0], t = Qe().memoizedState;
      return [
        typeof e == "boolean" ? e : ti(e),
        t
      ];
    },
    useSyncExternalStore: Ov,
    useId: Fv,
    useHostTransitionStatus: Fc,
    useFormState: Lv,
    useActionState: Lv,
    useOptimistic: function(e, t) {
      var l = Qe();
      return Dv(l, Me, e, t);
    },
    useMemoCache: Qc,
    useCacheRefresh: e0,
    useEffectEvent: Xv
  }, VS = {
    readContext: nt,
    use: Br,
    useCallback: Jv,
    useContext: nt,
    useEffect: Wc,
    useImperativeHandle: Kv,
    useInsertionEffect: Vv,
    useLayoutEffect: Qv,
    useMemo: kv,
    useReducer: Kc,
    useRef: jv,
    useState: function() {
      return Kc(Kl);
    },
    useDebugValue: Pc,
    useDeferredValue: function(e, t) {
      var l = Qe();
      return Me === null ? $c(l, e, t) : Wv(
        l,
        Me.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Kc(Kl)[0], t = Qe().memoizedState;
      return [
        typeof e == "boolean" ? e : ti(e),
        t
      ];
    },
    useSyncExternalStore: Ov,
    useId: Fv,
    useHostTransitionStatus: Fc,
    useFormState: Yv,
    useActionState: Yv,
    useOptimistic: function(e, t) {
      var l = Qe();
      return Me !== null ? Dv(l, Me, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: Qc,
    useCacheRefresh: e0,
    useEffectEvent: Xv
  };
  function to(e, t, l, a) {
    t = e.memoizedState, l = l(a, t), l = l == null ? t : G({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var lo = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var a = Lt(), n = ma(a);
      n.payload = t, l != null && (n.callback = l), t = ga(e, n, a), t !== null && (xt(t, e, a), Pu(t, e, a));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var a = Lt(), n = ma(a);
      n.tag = 1, n.payload = t, l != null && (n.callback = l), t = ga(e, n, a), t !== null && (xt(t, e, a), Pu(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = Lt(), a = ma(l);
      a.tag = 2, t != null && (a.callback = t), t = ga(e, a, l), t !== null && (xt(t, e, l), Pu(t, e, l));
    }
  };
  function i0(e, t, l, a, n, u, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, u, f) : t.prototype && t.prototype.isPureReactComponent ? !Xu(l, a) || !Xu(n, u) : !0;
  }
  function r0(e, t, l, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, a), t.state !== e && lo.enqueueReplaceState(t, t.state, null);
  }
  function un(e, t) {
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
  function f0(e) {
    dr(e);
  }
  function c0(e) {
    console.error(e);
  }
  function o0(e) {
    dr(e);
  }
  function Yr(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function s0(e, t, l) {
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
  function ao(e, t, l) {
    return l = ma(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Yr(e, t);
    }, l;
  }
  function d0(e) {
    return e = ma(e), e.tag = 3, e;
  }
  function v0(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      e.payload = function() {
        return n(u);
      }, e.callback = function() {
        s0(t, l, a);
      };
    }
    var f = l.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (e.callback = function() {
      s0(t, l, a), typeof n != "function" && (_a === null ? _a = /* @__PURE__ */ new Set([this]) : _a.add(this));
      var d = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: d !== null ? d : ""
      });
    });
  }
  function QS(e, t, l, a, n) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = l.alternate, t !== null && $a(
        t,
        l,
        n,
        !0
      ), l = ut.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
          case 19:
            return st === null ? rf() : l.alternate === null && Ge === 0 && (Ge = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === _r ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Xo(e, a, n)), !1;
          case 22:
            return l.flags |= 65536, a === _r ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : l.add(a)), Xo(e, a, n)), !1;
        }
        throw Error(r(435, l.tag));
      }
      return Xo(e, a, n), rf(), !1;
    }
    if (ce)
      return t = ut.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, a !== Rc && (e = Error(r(422), { cause: a }), Zu(Kt(e, l)))) : (a !== Rc && (t = Error(r(423), {
        cause: a
      }), Zu(
        Kt(t, l)
      )), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, a = Kt(a, l), n = ao(
        e.stateNode,
        a,
        n
      ), Bc(e, n), Ge !== 4 && (Ge = 2)), !1;
    var u = Error(r(520), { cause: a });
    if (u = Kt(u, l), oi === null ? oi = [u] : oi.push(u), Ge !== 4 && (Ge = 2), t === null) return !0;
    a = Kt(a, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = n & -n, l.lanes |= e, e = ao(l.stateNode, a, e), Bc(l, e), !1;
        case 1:
          if (t = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (_a === null || !_a.has(u))))
            return l.flags |= 65536, n &= -n, l.lanes |= n, n = d0(n), v0(
              n,
              e,
              l,
              a
            ), Bc(l, n), !1;
          break;
        case 22:
          if (l.memoizedState !== null)
            return l.flags |= 65536, !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var no = Error(r(461)), ke = !1;
  function $e(e, t, l, a) {
    t.child = e === null ? gv(t, null, l, a) : an(
      t,
      e.child,
      l,
      a
    );
  }
  function y0(e, t, l, a, n) {
    l = l.render;
    var u = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var d in a)
        d !== "ref" && (f[d] = a[d]);
    } else f = a;
    return Ia(t), a = jc(
      e,
      t,
      l,
      f,
      u,
      n
    ), d = Gc(), e !== null && !ke ? (Xc(e, t, n), Jl(e, t, n)) : (ce && d && Sr(t), t.flags |= 1, $e(e, t, a, n), t.child);
  }
  function h0(e, t, l, a, n) {
    if (e === null) {
      var u = l.type;
      return typeof u == "function" && !bc(u) && u.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = u, m0(
        e,
        t,
        u,
        a,
        n
      )) : (e = mr(
        l.type,
        null,
        a,
        t,
        t.mode,
        n
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !vo(e, n)) {
      var f = u.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Xu, l(f, a) && e.ref === t.ref)
        return Jl(e, t, n);
    }
    return t.flags |= 1, e = Gl(u, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function m0(e, t, l, a, n) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Xu(u, a) && e.ref === t.ref)
        if (ke = !1, t.pendingProps = a = u, vo(e, n))
          (e.flags & 131072) !== 0 && (ke = !0);
        else
          return t.lanes = e.lanes, Jl(e, t, n);
    }
    return uo(
      e,
      t,
      l,
      a,
      n
    );
  }
  function g0(e, t, l, a) {
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
        return S0(
          e,
          t,
          u,
          l,
          a
        );
      }
      if ((l & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Rr(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? Ev(t, u) : Hc(), pv(t);
      else
        return a = t.lanes = 536870912, S0(
          e,
          t,
          u !== null ? u.baseLanes | l : l,
          l,
          a
        );
    } else
      u !== null ? (Rr(t, u.cachePool), Ev(t, u), Ea(), t.memoizedState = null) : (e !== null && Rr(t, null), Hc(), Ea());
    return $e(e, t, n, l), t.child;
  }
  function ai(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function S0(e, t, l, a, n) {
    var u = zc();
    return u = u === null ? null : { parent: Ke._currentValue, pool: u }, t.memoizedState = {
      baseLanes: l,
      cachePool: u
    }, e !== null && Rr(t, null), Hc(), pv(t), e !== null && $a(e, t, a, !0), t.childLanes = n, null;
  }
  function jr(e, t) {
    return t = Gr(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function b0(e, t, l) {
    return an(t, e.child, null, l), e = jr(t, t.pendingProps), e.flags |= 2, Bt(t), t.memoizedState = null, e;
  }
  function ZS(e, t, l) {
    var a = t.pendingProps, n = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (ce) {
        if (a.mode === "hidden")
          return e = jr(t, a), t.lanes = 536870912, e.memoizedState = { baseLanes: 0, cachePool: null }, ai(null, e);
        if (Lc(t), (e = He) ? (e = Zy(
          e,
          Wt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: oa !== null ? { id: gl, overflow: Sl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = lv(e), l.return = t, t.child = l, Fe = t, He = null)) : e = null, e === null) throw da(t);
        return t.lanes = 536870912, null;
      }
      return jr(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var f = u.dehydrated;
      if (Lc(t), n)
        if (t.flags & 256)
          t.flags &= -257, t = b0(
            e,
            t,
            l
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(r(558));
      else if (ke || $a(e, t, l, !1), n = (l & e.childLanes) !== 0, ke || n) {
        if (Sa.current === null) {
          if (a = Ne, a !== null && (f = bu(a, l), f !== 0 && f !== u.retryLane))
            throw u.retryLane = f, Ja(e, f), xt(a, e, f), no;
          rf();
        }
        t = b0(
          e,
          t,
          l
        );
      } else
        e = u.treeContext, He = $t(f.nextSibling), Fe = t, ce = !0, sa = null, Wt = !1, e !== null && uv(t, e), t = jr(t, a), t.flags |= 134221824;
      return t;
    }
    return e = Gl(e.child, {
      mode: a.mode,
      children: a.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Vn(e, t) {
    var l = t.ref;
    if (l === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(r(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function uo(e, t, l, a, n) {
    return Ia(t), l = jc(
      e,
      t,
      l,
      a,
      void 0,
      n
    ), a = Gc(), e !== null && !ke ? (Xc(e, t, n), Jl(e, t, n)) : (ce && a && Sr(t), t.flags |= 1, $e(e, t, l, n), t.child);
  }
  function E0(e, t, l, a, n, u) {
    return Ia(t), t.updateQueue = null, l = Rv(
      t,
      a,
      l,
      n
    ), Tv(e), a = Gc(), e !== null && !ke ? (Xc(e, t, u), Jl(e, t, u)) : (ce && a && Sr(t), t.flags |= 1, $e(e, t, l, u), t.child);
  }
  function p0(e, t, l, a, n) {
    if (Ia(t), t.stateNode === null) {
      var u = Bn, f = l.contextType;
      typeof f == "object" && f !== null && (u = nt(f)), u = new l(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = lo, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, Mc(t), f = l.contextType, u.context = typeof f == "object" && f !== null ? nt(f) : Bn, u.state = t.memoizedState, f = l.getDerivedStateFromProps, typeof f == "function" && (to(
        t,
        l,
        f,
        a
      ), u.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (f = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), f !== u.state && lo.enqueueReplaceState(u, u.state, null), Iu(t, a, u, n), $u(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      u = t.stateNode;
      var d = t.memoizedProps, y = un(l, d);
      u.props = y;
      var p = u.context, C = l.contextType;
      f = Bn, typeof C == "object" && C !== null && (f = nt(C));
      var B = l.getDerivedStateFromProps;
      C = typeof B == "function" || typeof u.getSnapshotBeforeUpdate == "function", d = t.pendingProps !== d, C || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (d || p !== f) && r0(
        t,
        u,
        a,
        f
      ), ha = !1;
      var b = t.memoizedState;
      u.state = b, Iu(t, a, u, n), $u(), p = t.memoizedState, d || b !== p || ha ? (typeof B == "function" && (to(
        t,
        l,
        B,
        a
      ), p = t.memoizedState), (y = ha || i0(
        t,
        l,
        y,
        a,
        b,
        p,
        f
      )) ? (C || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = p), u.props = a, u.state = p, u.context = f, a = y) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      u = t.stateNode, Nc(e, t), f = t.memoizedProps, C = un(l, f), u.props = C, B = t.pendingProps, b = u.context, p = l.contextType, y = Bn, typeof p == "object" && p !== null && (y = nt(p)), d = l.getDerivedStateFromProps, (p = typeof d == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f !== B || b !== y) && r0(
        t,
        u,
        a,
        y
      ), ha = !1, b = t.memoizedState, u.state = b, Iu(t, a, u, n), $u();
      var O = t.memoizedState;
      f !== B || b !== O || ha || e !== null && e.dependencies !== null && pr(e.dependencies) ? (typeof d == "function" && (to(
        t,
        l,
        d,
        a
      ), O = t.memoizedState), (C = ha || i0(
        t,
        l,
        C,
        a,
        b,
        O,
        y
      ) || e !== null && e.dependencies !== null && pr(e.dependencies)) ? (p || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, O, y), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        O,
        y
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && b === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && b === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = O), u.props = a, u.state = O, u.context = y, a = C) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && b === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && b === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return u = a, Vn(e, t), a = (t.flags & 128) !== 0, u || a ? (u = t.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && a ? (t.child = an(
      t,
      e.child,
      null,
      n
    ), t.child = an(
      t,
      null,
      l,
      n
    )) : $e(e, t, l, n), t.memoizedState = u.state, e = t.child) : e = Jl(
      e,
      t,
      n
    ), e;
  }
  function T0(e, t, l, a) {
    return Wa(), t.flags |= 256, $e(e, t, l, a), t.child;
  }
  var io = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ro(e) {
    return { baseLanes: e, cachePool: sv() };
  }
  function fo(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= wt), e;
  }
  function R0(e, t, l) {
    var a = t.pendingProps, n = !1, u = (t.flags & 128) !== 0, f;
    if ((f = u) || (f = e !== null && e.memoizedState === null ? !1 : (it.current & 2) !== 0), f && (n = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (ce) {
        if (n ? ba(t) : Ea(), (e = He) ? (e = Zy(
          e,
          Wt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: oa !== null ? { id: gl, overflow: Sl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = lv(e), l.return = t, t.child = l, Fe = t, He = null)) : e = null, e === null) throw da(t);
        return fs(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      return u = a.children, a = a.fallback, n ? (Ea(), n = t.mode, u = Gr(
        { mode: "hidden", children: u },
        n
      ), a = ka(
        a,
        n,
        l,
        null
      ), u.return = t, a.return = t, u.sibling = a, t.child = u, a = t.child, a.memoizedState = ro(l), a.childLanes = fo(
        e,
        f,
        l
      ), t.memoizedState = io, ai(null, a)) : (ba(t), co(t, u));
    }
    var d = e.memoizedState;
    if (d !== null) {
      var y = d.dehydrated;
      if (y !== null)
        return KS(
          e,
          t,
          u,
          f,
          a,
          y,
          d,
          l
        );
    }
    return n ? (Ea(), n = a.fallback, u = t.mode, d = e.child, y = d.sibling, a = Gl(d, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = d.subtreeFlags & 1206910976, y !== null ? n = Gl(y, n) : (n = ka(
      n,
      u,
      l,
      null
    ), n.flags |= 2), n.return = t, a.return = t, a.sibling = n, t.child = a, ai(null, a), a = t.child, n = e.child.memoizedState, n === null ? n = ro(l) : (u = n.cachePool, u !== null ? (d = Ke._currentValue, u = u.parent !== d ? { parent: d, pool: d } : u) : u = sv(), n = {
      baseLanes: n.baseLanes | l,
      cachePool: u
    }), a.memoizedState = n, a.childLanes = fo(
      e,
      f,
      l
    ), t.memoizedState = io, ai(e.child, a)) : (ba(t), l = e.child, e = l.sibling, l = Gl(l, {
      mode: "visible",
      children: a.children
    }), l.return = t, l.sibling = null, e !== null && (f = t.deletions, f === null ? (t.deletions = [e], t.flags |= 16) : f.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function co(e, t) {
    return t = Gr(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Gr(e, t) {
    return e = Ot(22, e, null, t), e.lanes = 0, e;
  }
  function Xr(e, t, l) {
    return an(t, e.child, null, l), e = co(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function KS(e, t, l, a, n, u, f, d) {
    if (l)
      return t.flags & 256 ? (ba(t), t.flags &= -257, Xr(
        e,
        t,
        d
      )) : t.memoizedState !== null ? (Ea(), t.child = e.child, t.flags |= 128, null) : (Ea(), u = n.fallback, f = t.mode, n = Gr(
        { mode: "visible", children: n.children },
        f
      ), u = ka(
        u,
        f,
        d,
        null
      ), u.flags |= 2, n.return = t, u.return = t, n.sibling = u, t.child = n, an(t, e.child, null, d), n = t.child, n.memoizedState = ro(d), n.childLanes = fo(
        e,
        a,
        d
      ), t.memoizedState = io, ai(null, n));
    if (ba(t), fs(u)) {
      if (a = u.nextSibling && u.nextSibling.dataset, a) var y = a.dgst;
      return a = y, a !== "" && (n = Error(r(419)), n.stack = "", n.digest = a, Zu({ value: n, source: null, stack: null })), Xr(
        e,
        t,
        d
      );
    }
    if (ke || $a(e, t, d, !1), a = (d & e.childLanes) !== 0, ke || a) {
      if (Sa.current !== null)
        return Xr(
          e,
          t,
          d
        );
      if (a = Ne, a !== null && (n = bu(
        a,
        d
      ), n !== 0 && n !== f.retryLane))
        throw f.retryLane = n, Ja(e, n), xt(a, e, n), no;
      return rs(u) || rf(), Xr(
        e,
        t,
        d
      );
    }
    return rs(u) ? (t.flags |= 192, t.child = e.child, null) : (e = f.treeContext, He = $t(u.nextSibling), Fe = t, ce = !0, sa = null, Wt = !1, e !== null && uv(t, e), t = co(
      t,
      n.children
    ), t.flags |= 134221824, t);
  }
  function O0(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), Er(e.return, t, l);
  }
  function _0(e) {
    for (var t = null; e !== null; ) {
      var l = e.alternate;
      l !== null && zr(l) === null && (t = e), e = e.sibling;
    }
    return t;
  }
  function Vr(e, t, l, a, n, u) {
    var f = e.memoizedState;
    f === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: l,
      tailMode: n,
      treeForkCount: u
    } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = a, f.tail = l, f.tailMode = n, f.treeForkCount = u);
  }
  function oo(e) {
    var t = e.child;
    for (e.child = null; t !== null; ) {
      var l = t.sibling;
      t.sibling = e.child, e.child = t, t = l;
    }
  }
  function so(e, t, l) {
    var a = t.pendingProps, n = a.revealOrder, u = a.tail;
    a = a.children;
    var f = it.current;
    if (t.flags & 128)
      return Fu(t, f), null;
    var d = (f & 2) !== 0;
    if (d ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, Fu(t, f), n === "backwards" && e !== null ? (oo(e), $e(e, t, a, l), oo(e)) : $e(e, t, a, l), a = ce ? Qu : 0, !d && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && O0(e, l, t);
        else if (e.tag === 19)
          O0(e, l, t);
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
        l = _0(t.child), l === null ? (n = t.child, t.child = null) : (n = l.sibling, l.sibling = null, oo(t)), Vr(
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
          if (e = n.alternate, e !== null && zr(e) === null) {
            t.child = n;
            break;
          }
          e = n.sibling, n.sibling = l, l = n, n = e;
        }
        Vr(
          t,
          !0,
          l,
          null,
          u,
          a
        );
        break;
      case "together":
        Vr(
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
        l = _0(t.child), l === null ? (n = t.child, t.child = null) : (n = l.sibling, l.sibling = null), Vr(
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
  function A0(e, t, l) {
    var a = t.pendingProps;
    return va(t, t.type, a.value), $e(e, t, a.children, l), t.child;
  }
  function Jl(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), Oa |= t.lanes, (l & t.childLanes) === 0)
      if (e !== null) {
        if ($a(
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
      for (e = t.child, l = Gl(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        e = e.sibling, l = l.sibling = Gl(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function vo(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && pr(e)));
  }
  function JS(e, t, l) {
    switch (t.tag) {
      case 3:
        yn(t, t.stateNode.containerInfo), va(t, Ke, e.memoizedState.cache), Wa();
        break;
      case 27:
      case 5:
        yu(t);
        break;
      case 4:
        yn(t, t.stateNode.containerInfo);
        break;
      case 10:
        va(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Lc(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null) {
          if (a.dehydrated !== null)
            return ba(t), t.flags |= 128, null;
          a = $a(
            e,
            t,
            l,
            !1
          );
          var n = t.child.childLanes;
          return a || (l & n) !== 0 ? R0(e, t, l) : (ba(t), e = Jl(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        }
        ba(t);
        break;
      case 19:
        if (t.flags & 128)
          return so(
            e,
            t,
            l
          );
        if (n = (e.flags & 128) !== 0, a = (l & t.childLanes) !== 0, a || ($a(
          e,
          t,
          l,
          !1
        ), a = (l & t.childLanes) !== 0), n) {
          if (a)
            return so(
              e,
              t,
              l
            );
          t.flags |= 128;
        }
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), Fu(t, it.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, g0(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        va(t, Ke, e.memoizedState.cache);
    }
    return Jl(e, t, l);
  }
  function C0(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        ke = !0;
      else {
        if (!vo(e, l) && (t.flags & 128) === 0)
          return ke = !1, JS(
            e,
            t,
            l
          );
        ke = (e.flags & 131072) !== 0;
      }
    else
      ke = !1, ce && (t.flags & 1048576) !== 0 && nv(t, Qu, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = tn(t.elementType), t.type = e, typeof e == "function")
            bc(e) ? (a = un(e, a), t.tag = 1, t = p0(
              null,
              t,
              e,
              a,
              l
            )) : (t.tag = 0, t = uo(
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
                t.tag = 11, t = y0(
                  null,
                  t,
                  e,
                  a,
                  l
                );
                break e;
              } else if (n === ye) {
                t.tag = 14, t = h0(
                  null,
                  t,
                  e,
                  a,
                  l
                );
                break e;
              } else if (n === De) {
                t.tag = 10, t.type = e, t = A0(
                  null,
                  t,
                  l
                );
                break e;
              }
            }
            throw t = be(e) || e, Error(r(306, t, ""));
          }
        }
        return t;
      case 0:
        return uo(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 1:
        return a = t.type, n = un(
          a,
          t.pendingProps
        ), p0(
          e,
          t,
          a,
          n,
          l
        );
      case 3:
        e: {
          if (yn(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(r(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          n = u.element, Nc(e, t), Iu(t, a, null, l);
          var f = t.memoizedState;
          if (a = f.cache, va(t, Ke, a), a !== u.cache && Ac(
            t,
            [Ke],
            l,
            !0
          ), $u(), a = f.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = T0(
                e,
                t,
                a,
                l
              );
              break e;
            } else if (a !== n) {
              n = Kt(
                Error(r(424)),
                t
              ), Zu(n), t = T0(
                e,
                t,
                a,
                l
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, He = $t(e.firstChild), Fe = t, ce = !0, sa = null, Wt = !0, l = gv(
                t,
                null,
                a,
                l
              ), t.child = l; l; )
                l.flags = l.flags & -3 | 134221824, l = l.sibling;
          else {
            if (Wa(), a === n) {
              t = Jl(
                e,
                t,
                l
              );
              break e;
            }
            $e(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Vn(e, t), e === null ? (l = Iy(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : ce || (t.stateNode = My(
          t.type,
          t.pendingProps,
          dl.current,
          t
        )) : t.memoizedState = Iy(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return yu(t), e === null && ce && (a = t.stateNode = ky(
          t.type,
          t.pendingProps,
          dl.current
        ), Fe = t, Wt = !0, n = He, xa(t.type) ? (cs = n, He = $t(a.firstChild)) : He = n), $e(
          e,
          t,
          t.pendingProps.children,
          l
        ), Vn(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && ce && ((n = a = He) && (a = Gb(
          a,
          t.type,
          t.pendingProps,
          Wt
        ), a !== null ? (t.stateNode = a, Fe = t, He = $t(a.firstChild), Wt = !1, n = !0) : n = !1), n || da(t)), yu(t), n = t.type, u = t.pendingProps, f = e !== null ? e.memoizedProps : null, a = u.children, es(n, u) ? a = null : f !== null && es(n, f) && (t.flags |= 32), t.memoizedState !== null && (n = jc(
          e,
          t,
          wS,
          null,
          null,
          l
        ), ru._currentValue = n), Vn(e, t), $e(e, t, a, l), t.child;
      case 6:
        return e === null && ce && ((e = l = He) && (l = Xb(
          l,
          t.pendingProps,
          Wt
        ), l !== null ? (t.stateNode = l, Fe = t, He = null, e = !0) : e = !1), e || da(t)), null;
      case 13:
        return R0(e, t, l);
      case 4:
        return yn(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = an(
          t,
          null,
          a,
          l
        ) : $e(e, t, a, l), t.child;
      case 11:
        return y0(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 7:
        return a = t.pendingProps, Vn(e, t), $e(e, t, a, l), t.child;
      case 8:
        return $e(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 12:
        return $e(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 10:
        return A0(e, t, l);
      case 9:
        return n = t.type._context, a = t.pendingProps.children, Ia(t), n = nt(n), a = a(n), t.flags |= 1, $e(e, t, a, l), t.child;
      case 14:
        return h0(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 15:
        return m0(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 19:
        return so(e, t, l);
      case 31:
        return ZS(e, t, l);
      case 22:
        return g0(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        return Ia(t), a = nt(Ke), e === null ? (n = zc(), n === null && (n = Ne, u = Cc(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), t.memoizedState = { parent: a, cache: n }, Mc(t), va(t, Ke, n)) : ((e.lanes & l) !== 0 && (Nc(e, t), Iu(t, null, null, l), $u()), n = e.memoizedState, u = t.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), va(t, Ke, a)) : (a = u.cache, va(t, Ke, a), a !== n.cache && Ac(
          t,
          [Ke],
          l,
          !0
        ))), $e(
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
        }), a = t.pendingProps, a.name != null && a.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : ce && Sr(t), e !== null && e.memoizedProps.name !== a.name ? t.flags |= 4194816 : Vn(e, t), $e(e, t, a.children, l), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function kl(e) {
    e.flags |= 4;
  }
  function yo(e, t, l, a, n) {
    var u;
    if ((u = (e.mode & 32) !== 0) && (u = l === null ? lh(t, a) : lh(t, a) && (a.src !== l.src || a.srcSet !== l.srcSet)), u) {
      if (e.flags |= 16777216, (n & 335544128) === n)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (fy()) e.flags |= 8192;
        else
          throw ln = _r, Dc;
    } else e.flags &= -16777217;
  }
  function x0(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !ah(t))
      if (fy()) e.flags |= 8192;
      else
        throw ln = _r, Dc;
  }
  function Qr(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Pi() : 536870912, e.lanes |= t, kn |= t);
  }
  function ni(e, t) {
    if (!ce)
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
  function we(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, l = 0, a = 0;
    if (t)
      for (var n = e.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 1206910976, a |= n.flags & 1206910976, n.return = e, n = n.sibling;
    else
      for (n = e.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = e, n = n.sibling;
    return e.subtreeFlags |= a, e.childLanes = l, t;
  }
  function kS(e, t, l) {
    var a = t.pendingProps;
    switch (Tc(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return we(t), null;
      case 1:
        return we(t), null;
      case 3:
        return l = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Ql(Ke), Dl(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (wn(t) ? kl(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Oc())), we(t), null;
      case 26:
        var n = t.type, u = t.memoizedState;
        return e === null ? (kl(t), u !== null ? (we(t), x0(t, u)) : (we(t), yo(
          t,
          n,
          null,
          a,
          l
        ))) : u ? u !== e.memoizedState ? (kl(t), we(t), x0(t, u)) : (we(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && kl(t), we(t), yo(
          t,
          n,
          e,
          a,
          l
        )), null;
      case 27:
        if (qa(t), l = dl.current, n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && kl(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(r(166));
            return we(t), t.subtreeFlags &= -33554433, null;
          }
          e = jt.current, wn(t) ? iv(t) : (e = ky(n, a, l), t.stateNode = e, kl(t));
        }
        return we(t), t.subtreeFlags &= -33554433, null;
      case 5:
        if (qa(t), n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && kl(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(r(166));
            return we(t), t.subtreeFlags &= -33554433, null;
          }
          if (u = jt.current, wn(t))
            iv(t);
          else {
            var f = hi(
              dl.current
            );
            switch (u) {
              case 1:
                u = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                u = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    u = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    u = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    u = f.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof a.is == "string" ? f.createElement("select", {
                      is: a.is
                    }) : f.createElement("select"), a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
                    break;
                  default:
                    u = typeof a.is == "string" ? f.createElement(n, { is: a.is }) : f.createElement(n);
                }
            }
            u[Ze] = t, u[at] = a;
            e: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                u.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === t) break e;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === t)
                  break e;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            t.stateNode = u;
            e: switch (ft(u, n, a), n) {
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
            a && kl(t);
          }
        }
        return we(t), t.subtreeFlags &= -33554433, yo(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          l
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== a && kl(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(r(166));
          if (e = dl.current, wn(t)) {
            if (e = t.stateNode, l = t.memoizedProps, a = null, n = Fe, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            e[Ze] = t, e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || Cy(e.nodeValue, l)), e || da(t, !0);
          } else
            e = hi(e).createTextNode(
              a
            ), e[Ze] = t, t.stateNode = e;
        }
        return we(t), null;
      case 31:
        if (l = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = wn(t), l !== null) {
            if (e === null) {
              if (!a) throw Error(r(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(557));
              e[Ze] = t;
            } else
              Wa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            we(t), e = !1;
          } else
            l = Oc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
          if (!e)
            return t.flags & 256 ? (Bt(t), t) : (Bt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(r(558));
        }
        return we(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (n = wn(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!n) throw Error(r(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(r(317));
              n[Ze] = t;
            } else
              Wa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            we(t), n = !1;
          } else
            n = Oc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return t.flags & 256 ? (Bt(t), t) : (Bt(t), null);
        }
        return Bt(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = a !== null, e = e !== null && e.memoizedState !== null, l && (a = t.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), Qr(t, t.updateQueue), we(t), null);
      case 4:
        return Dl(), e === null && Wo(t.stateNode.containerInfo), t.flags |= 67108864, we(t), null;
      case 10:
        return Ql(t.type), we(t), null;
      case 19:
        if (qc(t), a = t.memoizedState, a === null) return we(t), null;
        if (n = (t.flags & 128) !== 0, u = a.rendering, u === null)
          if (n) ni(a, !1);
          else {
            if (Ge !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = zr(e), u !== null) {
                  for (t.flags |= 128, ni(a, !1), e = u.updateQueue, t.updateQueue = e, Qr(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    tv(l, e), l = l.sibling;
                  return Fu(
                    t,
                    it.current & 1 | 2
                  ), ce && Xl(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && yt() > lf && (t.flags |= 128, n = !0, ni(a, !1), t.lanes = 4194304);
          }
        else {
          if (!n)
            if (e = zr(u), e !== null) {
              if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, Qr(t, e), ni(a, !0), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !u.alternate && !ce)
                return we(t), null;
            } else
              2 * yt() - a.renderingStartTime > lf && l !== 536870912 && (t.flags |= 128, n = !0, ni(a, !1), t.lanes = 4194304);
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
          return a.rendering = e, a.tail = e.sibling, a.renderingStartTime = yt(), e.sibling = null, u = it.current, u = n ? u & 1 | 2 : u & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !l || ce ? Fu(t, u) : (l = u, _e(ut, t), _e(it, l), st === null && (st = t)), ce && Xl(t, a.treeForkCount), e;
        }
        return we(t), null;
      case 22:
      case 23:
        return Bt(t), wc(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (we(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : we(t), l = t.updateQueue, l !== null && Qr(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== l && (t.flags |= 2048), e !== null && Pe(en), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Ql(Ke), we(t), null;
      case 25:
        return null;
      case 30:
        return t.flags |= 33554432, we(t), null;
    }
    throw Error(r(156, t.tag));
  }
  function WS(e, t) {
    switch (Tc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Ql(Ke), Dl(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return qa(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Bt(t), t.alternate === null)
            throw Error(r(340));
          Wa();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Bt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(r(340));
          Wa();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return qc(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
      case 4:
        return Dl(), null;
      case 10:
        return Ql(t.type), null;
      case 22:
      case 23:
        return Bt(t), wc(), e !== null && Pe(en), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Ql(Ke), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function z0(e, t) {
    switch (Tc(t), t.tag) {
      case 3:
        Ql(Ke), Dl();
        break;
      case 26:
      case 27:
      case 5:
        qa(t);
        break;
      case 4:
        Dl();
        break;
      case 31:
        t.memoizedState !== null && Bt(t);
        break;
      case 13:
        Bt(t);
        break;
      case 19:
        qc(t);
        break;
      case 10:
        Ql(t.type);
        break;
      case 22:
      case 23:
        Bt(t), wc(), e !== null && Pe(en);
        break;
      case 24:
        Ql(Ke);
    }
  }
  function ui(e, t) {
    try {
      var l = t.updateQueue, a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var u = l.create, f = l.inst;
            a = u(), f.destroy = a;
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (d) {
      Ce(t, t.return, d);
    }
  }
  function pa(e, t, l) {
    try {
      var a = t.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            var f = a.inst, d = f.destroy;
            if (d !== void 0) {
              f.destroy = void 0, n = t;
              var y = l, p = d;
              try {
                p();
              } catch (C) {
                Ce(
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
      Ce(t, t.return, C);
    }
  }
  function D0(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        bv(t, l);
      } catch (a) {
        Ce(e, e.return, a);
      }
    }
  }
  function M0(e, t, l) {
    l.props = un(
      e.type,
      e.memoizedProps
    ), l.state = e.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (a) {
      Ce(e, t, a);
    }
  }
  function bl(e, t) {
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
            var n = e.stateNode, u = Yl(e.memoizedProps, n);
            (n.ref === null || n.ref.name !== u) && (n.ref = qy(u)), a = n.ref;
            break;
          case 7:
            if (e.stateNode === null) {
              var f = new qt(e);
              m(
                e.child,
                !1,
                Yb,
                f,
                void 0,
                void 0
              ), e.stateNode = f;
            }
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof l == "function" ? e.refCleanup = l(a) : l.current = a;
      }
    } catch (d) {
      Ce(e, t, d);
    }
  }
  function rt(e, t) {
    var l = e.ref, a = e.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          Ce(e, t, n);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          Ce(e, t, n);
        }
      else l.current = null;
  }
  function Zr(e, t) {
    if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null)
      for (var l = 0; l < t.length; l++)
        Qy(
          e.stateNode,
          t[l]
        );
  }
  function N0(e) {
    for (var t = e.return; t !== null && (mo(t) && Qy(e.stateNode, t.stateNode), !ho(t)); )
      t = t.return;
  }
  function ii(e) {
    for (var t = e.return; t !== null && (mo(t) && jb(e.stateNode, t.stateNode), !ho(t)); )
      t = t.return;
  }
  function ho(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 27;
  }
  function mo(e) {
    return e && e.tag === 7 && e.stateNode !== null;
  }
  function go(e) {
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
      Ce(e, e.return, n);
    }
  }
  function So(e, t, l) {
    try {
      var a = e.stateNode;
      pb(a, e.type, l, t), a[at] = t;
    } catch (n) {
      Ce(e, e.return, n);
    }
  }
  function B0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && xa(e.type) || e.tag === 4;
  }
  function bo(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || B0(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && xa(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Eo(e, t, l, a) {
    var n = e.tag;
    if (n === 5 || n === 6)
      n = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(n, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(n), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = ml)), Zr(e, a), ge = !0;
    else if (n !== 4 && (n === 27 && (Zr(e, a), a = null, xa(e.type) && (l = e.stateNode, t = null)), e = e.child, e !== null))
      for (Eo(
        e,
        t,
        l,
        a
      ), e = e.sibling; e !== null; )
        Eo(
          e,
          t,
          l,
          a
        ), e = e.sibling;
  }
  function Kr(e, t, l, a) {
    var n = e.tag;
    if (n === 5 || n === 6)
      n = e.stateNode, t ? l.insertBefore(n, t) : l.appendChild(n), Zr(e, a), ge = !0;
    else if (n !== 4 && (n === 27 && (Zr(e, a), a = null, xa(e.type) && (l = e.stateNode)), e = e.child, e !== null))
      for (Kr(
        e,
        t,
        l,
        a
      ), e = e.sibling; e !== null; )
        Kr(
          e,
          t,
          l,
          a
        ), e = e.sibling;
  }
  function U0(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var a = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      ft(t, a, l), t[Ze] = e, t[at] = l;
    } catch (u) {
      Ce(e, e.return, u);
    }
  }
  var Jr = !1, Ut = null;
  function H0(e) {
    (e.tag === 30 || (e.subtreeFlags & 33554432) !== 0) && (Jr = !0);
  }
  var El = null;
  function w0() {
    var e = El;
    return El = null, e;
  }
  var _t = 0;
  function Qn(e, t, l, a, n) {
    return _t = 0, L0(
      e.child,
      t,
      l,
      a,
      n
    );
  }
  function L0(e, t, l, a, n) {
    for (var u = !1; e !== null; ) {
      if (e.tag === 5) {
        var f = e.stateNode;
        if (a !== null) {
          var d = as(f);
          a.push(d), d.view && (u = !0);
        } else
          u || as(f).view && (u = !0);
        Jr = !0, wy(
          f,
          _t === 0 ? t : t + "_" + _t,
          l
        ), _t++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && n || L0(
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
  function pl(e, t) {
    for (; e !== null; )
      e.tag === 5 ? Ly(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && t || pl(
        e.child,
        t
      )), e = e.sibling;
  }
  function kr(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if ((e.tag !== 22 || e.memoizedState === null) && (kr(e), e.tag === 30 && (e.flags & 18874368) !== 0 && e.stateNode.paired)) {
          var t = e.memoizedProps;
          if (t.name == null || t.name === "auto")
            throw Error(r(544));
          var l = t.name;
          t = jl(t.default, t.share), t !== "none" && (Qn(
            e,
            l,
            t,
            null,
            !1
          ) || pl(e.child, !1));
        }
        e = e.sibling;
      }
  }
  function po(e, t) {
    if (e.tag === 30) {
      var l = e.stateNode, a = e.memoizedProps, n = Yl(a, l), u = jl(
        a.default,
        l.paired ? a.share : a.enter
      );
      u !== "none" ? Qn(e, n, u, null, !1) ? (kr(e), l.paired || t || In(e, a.onEnter)) : pl(e.child, !1) : kr(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        po(e, t), e = e.sibling;
    else kr(e);
  }
  function To(e) {
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
                  var u = jl(
                    l.default,
                    l.share
                  );
                  if (u !== "none" && (Qn(
                    e,
                    a,
                    u,
                    null,
                    !1
                  ) ? (u = e.stateNode, n.paired = u, u.paired = n, In(e, l.onShare)) : pl(e.child, !1)), t.delete(a), t.size === 0) break;
                }
              }
            }
            To(e);
          }
          e = e.sibling;
        }
    }
  }
  function Ro(e) {
    if (e.tag === 30) {
      var t = e.memoizedProps, l = Yl(t, e.stateNode), a = Ut !== null ? Ut.get(l) : void 0, n = jl(
        t.default,
        a !== void 0 ? t.share : t.exit
      );
      n !== "none" && (Qn(e, l, n, null, !1) ? a !== void 0 ? (n = e.stateNode, a.paired = n, n.paired = a, Ut.delete(l), In(e, t.onShare)) : In(e, t.onExit) : pl(e.child, !1)), Ut !== null && To(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        Ro(e), e = e.sibling;
    else
      Ut !== null && To(e);
  }
  function q0(e) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var t = e.memoizedProps, l = Yl(t, e.stateNode);
        t = jl(t.default, t.update), e.flags &= -5, t !== "none" && Qn(
          e,
          l,
          t,
          e.memoizedState = [],
          !1
        );
      } else
        (e.subtreeFlags & 33554432) !== 0 && q0(e);
      e = e.sibling;
    }
  }
  function Oo(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if (e.tag !== 22 || e.memoizedState === null) {
          if (e.tag === 30 && (e.flags & 18874368) !== 0) {
            var t = e.stateNode;
            t.paired !== null && (t.paired = null, pl(e.child, !1));
          }
          Oo(e);
        }
        e = e.sibling;
      }
  }
  function Wr(e) {
    if (e.tag === 30)
      e.stateNode.paired = null, pl(e.child, !1), Oo(e);
    else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        Wr(e), e = e.sibling;
    else Oo(e);
  }
  function Y0(e) {
    for (e = e.child; e !== null; )
      e.tag === 30 ? pl(e.child, !1) : (e.subtreeFlags & 33554432) !== 0 && Y0(e), e = e.sibling;
  }
  function _o(e, t, l, a, n, u, f) {
    for (var d = !1; t !== null; ) {
      if (t.tag === 5) {
        var y = t.stateNode;
        if (u !== null && _t < u.length) {
          var p = u[_t], C = as(y);
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
        (e.flags & 4) !== 0 && wy(
          y,
          _t === 0 ? l : l + "_" + _t,
          n
        ), d && (e.flags & 4) !== 0 || (El === null && (El = []), El.push(
          y,
          _t === 0 ? a : a + "_" + _t,
          t.memoizedProps
        )), _t++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && f ? e.flags |= t.flags & 32 : _o(
        e,
        t.child,
        l,
        a,
        n,
        u,
        f
      ) && (d = !0));
      t = t.sibling;
    }
    return d;
  }
  function j0(e, t) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var l = e.memoizedProps, a = e.stateNode, n = Yl(l, a), u = jl(l.default, l.update), f;
        f = e.memoizedState, e.memoizedState = null, a = e;
        var d = e.child;
        _t = 0, n = _o(
          a,
          d,
          n,
          n,
          u,
          f,
          !1
        ), (e.flags & 4) !== 0 && n && In(e, l.onUpdate);
      } else
        (e.subtreeFlags & 33554432) !== 0 && j0(e);
      e = e.sibling;
    }
  }
  var et = !1, Re = !1, Tl = !1, Ao = !1, G0 = typeof WeakSet == "function" ? WeakSet : Set, tt = null, Rl = !1, ri = !1, Pr = !1, Co = !1;
  function PS(e, t, l) {
    if (e = e.containerInfo, Io = fu, e = Zd(e), dc(e)) {
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
            var u = n.anchorOffset, f = n.focusNode;
            n = n.focusOffset;
            try {
              a.nodeType, f.nodeType;
            } catch {
              a = null;
              break e;
            }
            var d = 0, y = -1, p = -1, C = 0, B = 0, b = e, O = null;
            t: for (; ; ) {
              for (var Y; b !== a || u !== 0 && b.nodeType !== 3 || (y = d + u), b !== f || n !== 0 && b.nodeType !== 3 || (p = d + n), b.nodeType === 3 && (d += b.nodeValue.length), (Y = b.firstChild) !== null; )
                O = b, b = Y;
              for (; ; ) {
                if (b === e) break t;
                if (O === a && ++C === u && (y = d), O === f && ++B === n && (p = d), (Y = b.nextSibling) !== null) break;
                b = O, O = b.parentNode;
              }
              b = Y;
            }
            a = y === -1 || p === -1 ? null : { start: y, end: p };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Fo = { focusedElem: e, selectionRange: a }, fu = !1, l = (l & 335544064) === l, tt = t, t = l ? 9270 : 1024; tt !== null; ) {
      if (e = tt, l && (a = e.deletions, a !== null))
        for (u = 0; u < a.length; u++)
          l && Ro(a[u]);
      if (e.alternate === null && (e.flags & 2) !== 0)
        l && H0(e), $r(l);
      else {
        if (e.tag === 22) {
          if (a = e.alternate, e.memoizedState !== null) {
            a !== null && a.memoizedState === null && l && Ro(a), $r(l);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            l && H0(e), $r(l);
            continue;
          }
        }
        a = e.child, (e.subtreeFlags & t) !== 0 && a !== null ? (a.return = e, tt = a) : (l && q0(e), $r(l));
      }
    }
    Ut = null;
  }
  function $r(e) {
    for (; tt !== null; ) {
      var t = tt, l = e, a = t.alternate, n = t.flags;
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
              var f = un(
                t.type,
                n
              );
              l = u.getSnapshotBeforeUpdate(
                f,
                a
              ), u.__reactInternalSnapshotBeforeUpdate = l;
            } catch (d) {
              Ce(t, t.return, d);
            }
          }
          break;
        case 3:
          if ((n & 1024) !== 0) {
            if (a = t.stateNode.containerInfo, l = a.nodeType, l === 9)
              is(a);
            else if (l === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  is(a);
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
          l && a !== null && (l = Yl(
            a.memoizedProps,
            a.stateNode
          ), n = t.memoizedProps, n = jl(n.default, n.update), n !== "none" && Qn(
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
        a.return = t.return, tt = a;
        break;
      }
      tt = t.return;
    }
  }
  function X0(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Ol(e, l), a & 4 && ui(5, l);
        break;
      case 1:
        if (Ol(e, l), a & 4)
          if (e = l.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (f) {
              Ce(l, l.return, f);
            }
          else {
            var n = un(
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
            } catch (f) {
              Ce(
                l,
                l.return,
                f
              );
            }
          }
        a & 64 && D0(l), a & 512 && bl(l, l.return);
        break;
      case 3:
        if (Ol(e, l), a & 64 && (e = l.updateQueue, e !== null)) {
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
            bv(e, t);
          } catch (f) {
            Ce(l, l.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && U0(l);
      case 26:
      case 5:
        Ol(e, l), t === null && a & 4 && go(l), a & 512 && bl(l, l.return);
        break;
      case 12:
        Ol(e, l);
        break;
      case 31:
        Ol(e, l), a & 4 && K0(e, l);
        break;
      case 13:
        Ol(e, l), a & 4 && J0(e, l), a & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = fb.bind(
          null,
          l
        ), Vb(e, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || et, !a) {
          var u = t !== null && t.memoizedState !== null || Re;
          t = et, n = Re, et = a, (Re = u) && !n ? (a = 2, (l.subtreeFlags & 8772) !== 0 && (a |= 1), ul(
            e,
            l,
            a
          )) : Ol(e, l), et = t, Re = n;
        }
        break;
      case 30:
        Ol(e, l), a & 512 && bl(l, l.return);
        break;
      case 7:
        a & 512 && bl(l, l.return);
      default:
        Ol(e, l);
    }
  }
  function xo(e, t) {
    for (e = e.child; e !== null; )
      V0(e, t), e = e.sibling;
  }
  function V0(e, t) {
    switch (e.tag) {
      case 5:
      case 26:
        try {
          var l = e.stateNode;
          if (t) {
            var a = l.style;
            typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none";
          } else {
            var n = e.stateNode, u = e.memoizedProps.style, f = u != null && u.hasOwnProperty("display") ? u.display : null;
            n.style.display = f == null || typeof f == "boolean" ? "" : ("" + f).trim();
          }
        } catch (y) {
          Ce(e, e.return, y);
        }
        zo(e, t);
        break;
      case 6:
        try {
          e.stateNode.nodeValue = t ? "" : e.memoizedProps, ge = !0;
        } catch (y) {
          Ce(e, e.return, y);
        }
        break;
      case 18:
        try {
          var d = e.stateNode;
          t ? Hy(d, !0) : Hy(e.stateNode, !1);
        } catch (y) {
          Ce(e, e.return, y);
        }
        break;
      case 22:
      case 23:
        e.memoizedState === null && xo(e, t);
        break;
      default:
        xo(e, t);
    }
  }
  function zo(e, t) {
    if (e.subtreeFlags & 67108864)
      for (e = e.child; e !== null; ) {
        e: {
          var l = e, a = t;
          switch (l.tag) {
            case 4:
              V0(l, a);
              break e;
            case 22:
              l.memoizedState === null && zo(l, a);
              break e;
            default:
              zo(l, a);
          }
        }
        e = e.sibling;
      }
  }
  function Q0(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Q0(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Ga(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Le = null, At = !1;
  function al(e, t, l) {
    for (l = l.child; l !== null; )
      Z0(e, t, l), l = l.sibling;
  }
  function Z0(e, t, l) {
    if (ht && typeof ht.onCommitFiberUnmount == "function")
      try {
        ht.onCommitFiberUnmount(la, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Re || rt(l, t), al(
          e,
          t,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && !Re && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Re || rt(l, t), ii(l);
        var a = Le, n = At;
        xa(l.type) && (Le = l.stateNode, At = !1), al(
          e,
          t,
          l
        ), Wy(
          l.stateNode,
          l.type,
          l.memoizedProps
        ), Le = a, At = n;
        break;
      case 5:
        Re || rt(l, t), ii(l);
      case 6:
        if (l.tag === 6 && ii(l), a = Le, n = At, Le = null, al(
          e,
          t,
          l
        ), Le = a, At = n, Le !== null)
          if (At)
            try {
              (Le.nodeType === 9 ? Le.body : Le.nodeName === "HTML" ? Le.ownerDocument.body : Le).removeChild(l.stateNode), ge = !0;
            } catch (u) {
              Ce(
                l,
                t,
                u
              );
            }
          else
            try {
              Le.removeChild(l.stateNode), ge = !0;
            } catch (u) {
              Ce(
                l,
                t,
                u
              );
            }
        break;
      case 18:
        Le !== null && (At ? (e = Le, Uy(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), cu(e)) : Uy(Le, l.stateNode));
        break;
      case 4:
        a = Le, n = At, Le = l.stateNode.containerInfo, At = !0, al(
          e,
          t,
          l
        ), Le = a, At = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        pa(2, l, t), Re || pa(4, l, t), al(
          e,
          t,
          l
        );
        break;
      case 1:
        Re || (rt(l, t), a = l.stateNode, typeof a.componentWillUnmount == "function" && M0(
          l,
          t,
          a
        )), al(
          e,
          t,
          l
        );
        break;
      case 21:
        al(
          e,
          t,
          l
        );
        break;
      case 22:
        Re = (a = Re) || l.memoizedState !== null, al(
          e,
          t,
          l
        ), Re = a;
        break;
      case 30:
        rt(l, t), al(
          e,
          t,
          l
        );
        break;
      case 7:
        Re || rt(l, t), al(
          e,
          t,
          l
        );
        break;
      default:
        al(
          e,
          t,
          l
        );
    }
  }
  function K0(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        cu(e);
      } catch (l) {
        Ce(t, t.return, l);
      }
    }
  }
  function J0(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        cu(e);
      } catch (l) {
        Ce(t, t.return, l);
      }
  }
  function $S(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new G0()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new G0()), t;
      default:
        throw Error(r(435, e.tag));
    }
  }
  function Ir(e, t) {
    var l = $S(e);
    t.forEach(function(a) {
      if (!l.has(a)) {
        l.add(a);
        var n = cb.bind(null, e, a);
        a.then(n, n);
      }
    });
  }
  function Et(e, t, l) {
    var a = t.deletions;
    if (a !== null)
      for (var n = 0; n < a.length; n++) {
        var u = a[n], f = e, d = t, y = d;
        e: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
              if (xa(y.type)) {
                Le = y.stateNode, At = !1;
                break e;
              }
              break;
            case 5:
              Le = y.stateNode, At = !1;
              break e;
            case 3:
            case 4:
              Le = y.stateNode.containerInfo, At = !0;
              break e;
          }
          y = y.return;
        }
        if (Le === null) throw Error(r(160));
        Z0(f, d, u), Le = null, At = !1, f = u.alternate, f !== null && (f.return = null), u.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        k0(t, e, l), t = t.sibling;
  }
  var nl = null;
  function k0(e, t, l) {
    var a = e.alternate, n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (n & 4 && (a = e.updateQueue, a = a !== null ? a.events : null, a !== null))
          for (var u = 0; u < a.length; u++) {
            var f = a[u];
            f.ref.impl = f.nextImpl;
          }
        Et(t, e, l), pt(e), n & 4 && (pa(3, e, e.return), ui(3, e), pa(5, e, e.return));
        break;
      case 1:
        Et(t, e, l), pt(e), n & 512 && (Re || a === null || rt(a, a.return)), n & 64 && et && (e = e.updateQueue, e !== null && (t = e.callbacks, t !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? t : l.concat(t))));
        break;
      case 26:
        if (u = nl, Et(t, e, l), pt(e), n & 512 && (Re || a === null || rt(a, a.return)), n & 4)
          if (n = a !== null ? a.memoizedState : null, l = e.memoizedState, a === null)
            if (l === null)
              if (e.stateNode === null)
                if (et)
                  e.stateNode = My(
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
                        a = n.getElementsByTagName("title")[0], (!a || a[ua] || a[Ze] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = n.createElement(t), n.head.insertBefore(
                          a,
                          n.querySelector("head > title")
                        )), ft(a, t, l), a[Ze] = e, Ve(a), t = a;
                        break e;
                      case "link":
                        if (u = th(
                          "link",
                          "href",
                          n
                        ).get(t + (l.href || ""))) {
                          for (f = 0; f < u.length; f++)
                            if (a = u[f], a.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && a.getAttribute("rel") === (l.rel == null ? null : l.rel) && a.getAttribute("title") === (l.title == null ? null : l.title) && a.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                              u.splice(f, 1);
                              break t;
                            }
                        }
                        a = n.createElement(t), ft(a, t, l), n.head.appendChild(a);
                        break;
                      case "meta":
                        if (u = th(
                          "meta",
                          "content",
                          n
                        ).get(t + (l.content || ""))) {
                          for (f = 0; f < u.length; f++)
                            if (a = u[f], a.getAttribute("content") === (l.content == null ? null : "" + l.content) && a.getAttribute("name") === (l.name == null ? null : l.name) && a.getAttribute("property") === (l.property == null ? null : l.property) && a.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && a.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                              u.splice(f, 1);
                              break t;
                            }
                        }
                        a = n.createElement(t), ft(a, t, l), n.head.appendChild(a);
                        break;
                      default:
                        throw Error(r(468, t));
                    }
                    a[Ze] = e, Ve(a), t = a;
                  }
                  e.stateNode = t;
                }
              else
                et || vs(u, e.type, e.stateNode);
            else
              e.stateNode = eh(
                u,
                l,
                e.memoizedProps
              );
          else
            n !== l ? (n === null ? (t = a.stateNode, t === null || Re || t.parentNode.removeChild(t)) : n.count--, l === null ? et || vs(u, e.type, e.stateNode) : eh(u, l, e.memoizedProps)) : l === null && e.stateNode !== null && So(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        break;
      case 27:
        Et(t, e, l), pt(e), n & 512 && (Re || a === null || rt(a, a.return)), a !== null && n & 4 && So(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (u = Tl, Tl = !1, Et(t, e, l), Tl = u, pt(e), n & 512 && (Re || a === null || rt(a, a.return)), e.flags & 32) {
          t = e.stateNode;
          try {
            Ll(t, ""), ge = !0;
          } catch (C) {
            Ce(e, e.return, C);
          }
        }
        n & 4 && e.stateNode != null && (t = e.memoizedProps, So(
          e,
          t,
          a !== null ? a.memoizedProps : t
        )), n & 1024 && (Ao = !0);
        break;
      case 6:
        if (Et(t, e, l), pt(e), n & 4) {
          if (e.stateNode === null)
            throw Error(r(162));
          t = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = t, ge = !0;
          } catch (C) {
            Ce(e, e.return, C);
          }
        }
        break;
      case 3:
        if (ge = !1, yf = null, u = nl, nl = mi(t.containerInfo), Et(t, e, l), nl = u, pt(e), n & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            cu(t.containerInfo);
          } catch (C) {
            Ce(e, e.return, C);
          }
        Ao && (Ao = !1, W0(e)), ge = !1;
        break;
      case 4:
        n = Tl, Tl = et, a = xu(), u = nl, nl = mi(
          e.stateNode.containerInfo
        ), Et(t, e, l), pt(e), nl = u, ge && ri && (Pr = !0), ge = a, Tl = n;
        break;
      case 12:
        Et(t, e, l), pt(e);
        break;
      case 31:
        Et(t, e, l), pt(e), n & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Ir(e, t)));
        break;
      case 13:
        Et(t, e, l), pt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (tf = yt()), n & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Ir(e, t)));
        break;
      case 22:
        u = e.memoizedState !== null, f = a !== null && a.memoizedState !== null;
        var d = et, y = Re, p = Tl;
        et = d || u, Tl = p || u, Re = y || f, Et(t, e, l), Re = y, Tl = p, et = d, pt(e), n & 8192 && (t = e.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, !u || a === null || f || et || Re || (t = f || Re, l = et, a = Re, et = u || et, Re = t, Ta(e, 2), et = l, Re = a), !u && Tl || xo(e, u)), n & 4 && (t = e.updateQueue, t !== null && (l = t.retryQueue, l !== null && (t.retryQueue = null, Ir(e, l))));
        break;
      case 19:
        Et(t, e, l), pt(e), n & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Ir(e, t)));
        break;
      case 30:
        n & 512 && (Re || a === null || rt(a, a.return)), n = xu(), u = ri, f = (l & 335544064) === l, d = e.memoizedProps, ri = f && jl(
          d.default,
          d.update
        ) !== "none", Et(t, e, l), pt(e), f && a !== null && ge && (e.flags |= 4), ri = u, ge = n;
        break;
      case 21:
        break;
      case 7:
        n & 512 && (Re || a === null || rt(a, a.return)), a && a.stateNode !== null && (a.stateNode._fragmentFiber = e);
      default:
        Et(t, e, l), pt(e);
    }
  }
  function pt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (B0(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var n = e.return; n !== null; ) {
          if (mo(n)) {
            var u = n.stateNode;
            a === null ? a = [u] : a.push(u);
          }
          if (ho(n)) break;
          n = n.return;
        }
        var f = a;
        if (l == null) throw Error(r(160));
        switch (l.tag) {
          case 27:
            var d = l.stateNode, y = bo(e);
            Kr(
              e,
              y,
              d,
              f
            );
            break;
          case 5:
            var p = l.stateNode;
            l.flags & 32 && (Ll(p, ""), l.flags &= -33);
            var C = bo(e);
            Kr(
              e,
              C,
              p,
              f
            );
            break;
          case 3:
          case 4:
            var B = l.stateNode.containerInfo, b = bo(e);
            Eo(
              e,
              b,
              B,
              f
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (O) {
        Ce(e, e.return, O);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function W0(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        W0(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, fu = !0, t.reset(), fu = !1), e = e.sibling;
      }
  }
  function Zn(e, t) {
    if (t.subtreeFlags & 9270)
      for (t = t.child; t !== null; )
        P0(t, e), t = t.sibling;
    else j0(t);
  }
  function P0(e, t) {
    var l = e.alternate;
    if (l === null) po(e, !1);
    else
      switch (e.tag) {
        case 3:
          if (Co = Rl = !1, w0(), Zn(t, e), !Rl && !Pr) {
            if (e = El, e !== null)
              for (var a = 0; a < e.length; a += 3) {
                l = e[a];
                var n = e[a + 1];
                Ly(l, e[a + 2]), l = l.ownerDocument.documentElement, l !== null && l.animate(
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
            )), Co = !0;
          }
          El = null;
          break;
        case 5:
          Zn(t, e);
          break;
        case 4:
          a = Rl, Rl = !1, Zn(t, e), Rl && (Pr = !0), Rl = a;
          break;
        case 22:
          e.memoizedState === null && (l.memoizedState !== null ? po(e, !1) : Zn(t, e));
          break;
        case 30:
          a = Rl, n = w0(), Rl = !1, Zn(t, e), Rl && (e.flags |= 4);
          var u = e.memoizedProps, f = e.stateNode;
          t = Yl(u, f), f = Yl(l.memoizedProps, f);
          var d = jl(u.default, u.update);
          d === "none" ? t = !1 : (u = l.memoizedState, l.memoizedState = null, l = e.child, _t = 0, t = _o(
            e,
            l,
            t,
            f,
            d,
            u,
            !0
          ), _t !== (u === null ? 0 : u.length) && (e.flags |= 32)), (e.flags & 4) !== 0 && t ? (In(
            e,
            e.memoizedProps.onUpdate
          ), El = n) : n !== null && (n.push.apply(n, El), El = n), Rl = (e.flags & 32) !== 0 ? !0 : a;
          break;
        default:
          Zn(t, e);
      }
  }
  function Ol(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        X0(e, t.alternate, t), t = t.sibling;
  }
  function Ta(e, t) {
    for (e = e.child; e !== null; ) {
      var l = e, a = t;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          pa(4, l, l.return), Ta(
            l,
            a
          );
          break;
        case 1:
          rt(l, l.return);
          var n = l.stateNode;
          typeof n.componentWillUnmount == "function" && M0(
            l,
            l.return,
            n
          ), Ta(
            l,
            a
          );
          break;
        case 27:
          (a & 2) !== 0 && Wy(
            l.stateNode,
            l.type,
            l.memoizedProps
          );
        case 5:
          rt(l, l.return), l.tag !== 5 && l.tag !== 27 || ii(l), Ta(
            l,
            a
          );
          break;
        case 6:
          ii(l);
          break;
        case 26:
          rt(l, l.return), n = l.stateNode, l.memoizedState !== null || n === null || Re || n.parentNode.removeChild(n), Ta(
            l,
            a
          );
          break;
        case 22:
          l.memoizedState === null && Ta(
            l,
            a
          );
          break;
        case 30:
          rt(l, l.return), Ta(
            l,
            a
          );
          break;
        case 7:
          rt(l, l.return);
        default:
          Ta(
            l,
            a
          );
      }
      e = e.sibling;
    }
  }
  function ul(e, t, l) {
    for (l = (t.subtreeFlags & 8772) !== 0 ? l : l & -2, t = t.child; t !== null; ) {
      var a = t.alternate, n = e, u = t, f = u.flags, d = (l & 1) !== 0;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          ul(
            n,
            u,
            l
          ), ui(4, u);
          break;
        case 1:
          if (ul(
            n,
            u,
            l
          ), a = u, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (C) {
              Ce(a, a.return, C);
            }
          if (a = u, n = a.updateQueue, n !== null) {
            var y = a.stateNode;
            try {
              var p = n.shared.hiddenCallbacks;
              if (p !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < p.length; n++)
                  Sv(p[n], y);
            } catch (C) {
              Ce(a, a.return, C);
            }
          }
          d && f & 64 && D0(u), bl(u, u.return);
          break;
        case 27:
          (l & 2) !== 0 && U0(u);
        case 5:
          u.tag !== 5 && u.tag !== 27 || N0(u), ul(
            n,
            u,
            l
          ), d && a === null && f & 4 && go(u), bl(u, u.return);
          break;
        case 6:
          N0(u);
          break;
        case 26:
          y = u.stateNode, u.memoizedState !== null || y === null || et || vs(
            mi(y.ownerDocument),
            u.type,
            y
          ), ul(
            n,
            u,
            l
          ), d && a === null && f & 4 && go(u), bl(u, u.return);
          break;
        case 12:
          ul(
            n,
            u,
            l
          );
          break;
        case 31:
          ul(
            n,
            u,
            l
          ), d && f & 4 && K0(n, u);
          break;
        case 13:
          ul(
            n,
            u,
            l
          ), d && f & 4 && J0(n, u);
          break;
        case 22:
          u.memoizedState === null && ul(
            n,
            u,
            l
          ), bl(u, u.return);
          break;
        case 30:
          ul(
            n,
            u,
            l
          ), bl(u, u.return);
          break;
        case 7:
          bl(u, u.return);
        default:
          ul(
            n,
            u,
            l
          );
      }
      t = t.sibling;
    }
  }
  function Do(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && Ku(l));
  }
  function Mo(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ku(e));
  }
  function Pt(e, t, l, a) {
    var n = (l & 335544064) === l;
    if (t.subtreeFlags & (n ? 10262 : 10256))
      for (t = t.child; t !== null; )
        $0(
          e,
          t,
          l,
          a
        ), t = t.sibling;
    else n && Y0(t);
  }
  function $0(e, t, l, a) {
    var n = (l & 335544064) === l;
    n && t.alternate === null && t.return !== null && t.return.alternate !== null && Wr(t);
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Pt(
          e,
          t,
          l,
          a
        ), u & 2048 && ui(9, t);
        break;
      case 1:
        Pt(
          e,
          t,
          l,
          a
        );
        break;
      case 3:
        Pt(
          e,
          t,
          l,
          a
        ), n && Co && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), u & 2048 && (u = null, t.alternate !== null && (u = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== u && (t.refCount++, u != null && Ku(u)));
        break;
      case 12:
        if (u & 2048) {
          Pt(
            e,
            t,
            l,
            a
          ), u = t.stateNode;
          try {
            var f = t.memoizedProps, d = f.id, y = f.onPostCommit;
            typeof y == "function" && y(
              d,
              t.alternate === null ? "mount" : "update",
              u.passiveEffectDuration,
              -0
            );
          } catch (p) {
            Ce(t, t.return, p);
          }
        } else
          Pt(
            e,
            t,
            l,
            a
          );
        break;
      case 31:
        Pt(
          e,
          t,
          l,
          a
        );
        break;
      case 13:
        Pt(
          e,
          t,
          l,
          a
        );
        break;
      case 23:
        break;
      case 22:
        f = t.stateNode, d = t.alternate, t.memoizedState !== null ? (n && d !== null && d.memoizedState === null && Wr(d), f._visibility & 2 ? Pt(
          e,
          t,
          l,
          a
        ) : fi(
          e,
          t
        )) : (n && d !== null && d.memoizedState !== null && Wr(t), f._visibility & 2 ? Pt(
          e,
          t,
          l,
          a
        ) : (f._visibility |= 2, Kn(
          e,
          t,
          l,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        ))), u & 2048 && Do(d, t);
        break;
      case 24:
        Pt(
          e,
          t,
          l,
          a
        ), u & 2048 && Mo(t.alternate, t);
        break;
      case 30:
        n && (u = t.alternate, u !== null && (pl(u.child, !0), pl(t.child, !0))), Pt(
          e,
          t,
          l,
          a
        );
        break;
      default:
        Pt(
          e,
          t,
          l,
          a
        );
    }
  }
  function Kn(e, t, l, a, n) {
    for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, f = t, d = l, y = a, p = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Kn(
            u,
            f,
            d,
            y,
            n
          ), ui(8, f);
          break;
        case 23:
          break;
        case 22:
          var C = f.stateNode;
          f.memoizedState !== null ? C._visibility & 2 ? Kn(
            u,
            f,
            d,
            y,
            n
          ) : fi(
            u,
            f
          ) : (C._visibility |= 2, Kn(
            u,
            f,
            d,
            y,
            n
          )), n && p & 2048 && Do(
            f.alternate,
            f
          );
          break;
        case 24:
          Kn(
            u,
            f,
            d,
            y,
            n
          ), n && p & 2048 && Mo(f.alternate, f);
          break;
        default:
          Kn(
            u,
            f,
            d,
            y,
            n
          );
      }
      t = t.sibling;
    }
  }
  function fi(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e, a = t, n = a.flags;
        switch (a.tag) {
          case 22:
            fi(l, a), n & 2048 && Do(
              a.alternate,
              a
            );
            break;
          case 24:
            fi(l, a), n & 2048 && Mo(a.alternate, a);
            break;
          default:
            fi(l, a);
        }
        t = t.sibling;
      }
  }
  var rn = 8192;
  function fn(e, t, l) {
    if (e.subtreeFlags & rn)
      for (e = e.child; e !== null; )
        I0(
          e,
          t,
          l
        ), e = e.sibling;
  }
  function I0(e, t, l) {
    switch (e.tag) {
      case 26:
        fn(
          e,
          t,
          l
        ), e.flags & rn && (e.memoizedState !== null ? a1(
          l,
          nl,
          e.memoizedState,
          e.memoizedProps
        ) : (e = e.stateNode, (t & 335544128) === t && uh(l, e)));
        break;
      case 5:
        fn(
          e,
          t,
          l
        ), e.flags & rn && (e = e.stateNode, (t & 335544128) === t && uh(l, e));
        break;
      case 3:
      case 4:
        var a = nl;
        nl = mi(e.stateNode.containerInfo), fn(
          e,
          t,
          l
        ), nl = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = rn, rn = 16777216, fn(
          e,
          t,
          l
        ), rn = a) : fn(
          e,
          t,
          l
        ));
        break;
      case 30:
        if ((e.flags & rn) !== 0 && (a = e.memoizedProps.name, a != null && a !== "auto")) {
          var n = e.stateNode;
          n.paired = null, Ut === null && (Ut = /* @__PURE__ */ new Map()), Ut.set(a, n);
        }
        fn(
          e,
          t,
          l
        );
        break;
      default:
        fn(
          e,
          t,
          l
        );
    }
  }
  function F0(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function ci(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          tt = a, ty(
            a,
            e
          );
        }
      F0(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        ey(e), e = e.sibling;
  }
  function ey(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ci(e), e.flags & 2048 && pa(9, e, e.return);
        break;
      case 3:
        ci(e);
        break;
      case 12:
        ci(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Fr(e)) : ci(e);
        break;
      default:
        ci(e);
    }
  }
  function Fr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          tt = a, ty(
            a,
            e
          );
        }
      F0(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          pa(8, t, t.return), Fr(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, Fr(t));
          break;
        default:
          Fr(t);
      }
      e = e.sibling;
    }
  }
  function ty(e, t) {
    for (; tt !== null; ) {
      var l = tt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          pa(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Ku(l.memoizedState.cache);
      }
      if (a = l.child, a !== null) a.return = l, tt = a;
      else
        e: for (l = e; tt !== null; ) {
          a = tt;
          var n = a.sibling, u = a.return;
          if (Q0(a), a === l) {
            tt = null;
            break e;
          }
          if (n !== null) {
            n.return = u, tt = n;
            break e;
          }
          tt = u;
        }
    }
  }
  var IS = {
    getCacheForType: function(e) {
      var t = nt(Ke), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    },
    cacheSignal: function() {
      return nt(Ke).controller.signal;
    }
  }, FS = typeof WeakMap == "function" ? WeakMap : Map, Te = 0, Ne = null, de = null, he = 0, Ae = 0, Ht = null, Ra = !1, Jn = !1, No = !1, Wl = 0, Ge = 0, Oa = 0, cn = 0, ef = 0, wt = 0, kn = 0, oi = null, Ct = null, Bo = !1, tf = 0, ly = 0, lf = 1 / 0, af = null, _a = null, qe = 0, il = null, on = null, _l = 0, Uo = 0, Ho = null, ay = null, Wn = null, Pn = null, $n = null, si = 0, nf = null;
  function Lt() {
    return (Te & 2) !== 0 && he !== 0 ? he & -he : P.T !== null ? Zo() : Eu();
  }
  function ny() {
    if (wt === 0)
      if ((he & 536870912) === 0 || ce) {
        var e = Ya;
        Ya <<= 1, (Ya & 3932160) === 0 && (Ya = 262144), wt = e;
      } else wt = 536870912;
    return e = ut.current, e !== null && (e.flags |= 32), wt;
  }
  function In(e, t) {
    if (t != null) {
      var l = e.stateNode, a = l.ref;
      a === null && (a = l.ref = qy(
        Yl(e.memoizedProps, l)
      )), Pn === null && (Pn = []), Pn.push(t.bind(null, a));
    }
  }
  function xt(e, t, l) {
    (e === Ne && (Ae === 2 || Ae === 9) || e.cancelPendingCommit !== null) && (Fn(e, 0), Aa(
      e,
      he,
      wt,
      !1
    )), na(e, l), ((Te & 2) === 0 || e !== Ne) && (e === Ne && ((Te & 2) === 0 && (cn |= l), Ge === 4 && Aa(
      e,
      he,
      wt,
      !1
    )), Al(e));
  }
  function uy(e, t, l) {
    if ((Te & 6) !== 0) throw Error(r(327));
    var a = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || aa(e, t), n = a ? lb(e, t) : Lo(e, t, !0), u = a;
    do {
      if (n === 0) {
        Jn && !a && Aa(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, u && !eb(l)) {
          n = Lo(e, t, !1), u = !1;
          continue;
        }
        if (n === 2) {
          if (u = t, e.errorRecoveryDisabledLanes & u)
            var f = 0;
          else
            f = e.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            e: {
              var d = e;
              n = oi;
              var y = d.current.memoizedState.isDehydrated;
              if (y && (Fn(d, f).flags |= 256), f = Lo(
                d,
                f,
                !1
              ), f !== 2 && f !== 6) {
                if (No && !y) {
                  d.errorRecoveryDisabledLanes |= u, cn |= u, n = 4;
                  break e;
                }
                u = Ct, Ct = n, u !== null && (Ct === null ? Ct = u : Ct.push.apply(
                  Ct,
                  u
                ));
              }
              n = f;
            }
            if (u = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          Fn(e, 0), Aa(e, t, 0, !0);
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
              Aa(
                a,
                t,
                wt,
                !Ra
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
          if ((t & 62914560) === t && (n = tf + 300 - yt(), 10 < n)) {
            if (Aa(
              a,
              t,
              wt,
              !Ra
            ), Ml(a, 0, !0) !== 0) break e;
            _l = t, a.timeoutHandle = ls(
              iy.bind(
                null,
                a,
                l,
                Ct,
                af,
                Bo,
                t,
                wt,
                cn,
                kn,
                Ra,
                u,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break e;
          }
          iy(
            a,
            l,
            Ct,
            af,
            Bo,
            t,
            wt,
            cn,
            kn,
            Ra,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Al(e);
  }
  function iy(e, t, l, a, n, u, f, d, y, p, C, B, b, O) {
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
      unsuspend: ml
    }, Ut = null, I0(
      t,
      u,
      B
    ), K && (Y = B, K = e.containerInfo, K = (K.nodeType === 9 ? K : K.ownerDocument).__reactViewTransition, K != null && (Y.count++, Y.waitingForViewTransition = !0, Y = bi.bind(Y), K.finished.then(Y, Y))), Y = (u & 62914560) === u ? tf - yt() : (u & 4194048) === u ? ly - yt() : 0, Y = n1(
      B,
      Y
    ), Y !== null)) {
      _l = u, e.cancelPendingCommit = Y(
        yy.bind(
          null,
          e,
          t,
          u,
          l,
          a,
          n,
          f,
          d,
          y,
          p,
          C,
          B,
          null,
          b,
          O
        )
      ), Aa(e, u, f, !p);
      return;
    }
    yy(
      e,
      t,
      u,
      l,
      a,
      n,
      f,
      d,
      y,
      p,
      C,
      B
    );
  }
  function eb(e) {
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
  function Aa(e, t, l, a) {
    t = ki(e, t), t &= ~ef, t &= ~cn, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var n = t; 0 < n; ) {
      var u = 31 - mt(n), f = 1 << u;
      a[u] = -1, n &= ~f;
    }
    l !== 0 && $i(e, l, t);
  }
  function uf() {
    return (Te & 6) === 0 ? (di(0), !1) : !0;
  }
  function wo() {
    if (de !== null) {
      if (Ae === 0)
        var e = de.return;
      else
        e = de, Vl = Pa = null, Vc(e), Yn = null, Wu = 0, e = de;
      for (; e !== null; )
        z0(e.alternate, e), e = e.return;
      de = null;
    }
  }
  function Fn(e, t) {
    var l = e.timeoutHandle;
    return l !== -1 && (e.timeoutHandle = -1, Ob(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), _l = 0, wo(), Ne = e, de = l = Gl(e.current, null), he = t, Ae = 0, Ht = null, Ra = !1, Jn = aa(e, t), No = !1, kn = wt = ef = cn = Oa = Ge = 0, Ct = oi = null, Bo = !1, Wl = ki(e, t), vr(), l;
  }
  function ry(e, t) {
    ie = null, P.H = qr, t === qn || t === Or ? (t = yv(), Ae = 3) : t === Dc ? (t = yv(), Ae = 4) : Ae = t === no ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Ht = t, de === null && (Ge = 1, Yr(
      e,
      Kt(t, e.current)
    ));
  }
  function fy() {
    var e = ut.current;
    return e === null ? !0 : (he & 4194048) === he ? st === null : (he & 62914560) === he || (he & 536870912) !== 0 ? e === st : !1;
  }
  function cy() {
    var e = P.H;
    return P.H = qr, e === null ? qr : e;
  }
  function oy() {
    var e = P.A;
    return P.A = IS, e;
  }
  function rf() {
    Ge = 4, Ra || (he & 4194048) !== he && ut.current !== null || (Jn = !0), (Oa & 134217727) === 0 && (cn & 134217727) === 0 || Ne === null || Aa(
      Ne,
      he,
      wt,
      !1
    );
  }
  function Lo(e, t, l) {
    var a = Te;
    Te |= 2;
    var n = cy(), u = oy();
    (Ne !== e || he !== t) && (af = null, Fn(e, t)), t = !1;
    var f = Ge;
    e: do
      try {
        if (Ae !== 0 && de !== null) {
          var d = de, y = Ht;
          switch (Ae) {
            case 8:
              wo(), f = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              ut.current === null && (t = !0);
              var p = Ae;
              if (Ae = 0, Ht = null, eu(e, d, y, p), l && Jn) {
                f = 0;
                break e;
              }
              break;
            default:
              p = Ae, Ae = 0, Ht = null, eu(e, d, y, p);
          }
        }
        tb(), f = Ge;
        break;
      } catch (C) {
        ry(e, C);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Vl = Pa = null, Te = a, P.H = n, P.A = u, de === null && (Ne = null, he = 0, vr()), f;
  }
  function tb() {
    for (; de !== null; ) sy(de);
  }
  function lb(e, t) {
    var l = Te;
    Te |= 2;
    var a = cy(), n = oy();
    Ne !== e || he !== t ? (af = null, lf = yt() + 500, Fn(e, t)) : Jn = aa(
      e,
      t
    );
    e: do
      try {
        if (Ae !== 0 && de !== null) {
          t = de;
          var u = Ht;
          t: switch (Ae) {
            case 1:
              Ae = 0, Ht = null, eu(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (dv(u)) {
                Ae = 0, Ht = null, dy(t);
                break;
              }
              t = function() {
                Ae !== 2 && Ae !== 9 || Ne !== e || (Ae = 7), Al(e);
              }, u.then(t, t);
              break e;
            case 3:
              Ae = 7;
              break e;
            case 4:
              Ae = 5;
              break e;
            case 7:
              dv(u) ? (Ae = 0, Ht = null, dy(t)) : (Ae = 0, Ht = null, eu(e, t, u, 7));
              break;
            case 5:
              var f = null;
              switch (de.tag) {
                case 26:
                  f = de.memoizedState;
                case 5:
                case 27:
                  var d = de;
                  if (f ? ah(f) : d.stateNode.complete) {
                    Ae = 0, Ht = null;
                    var y = d.sibling;
                    if (y !== null) de = y;
                    else {
                      var p = d.return;
                      p !== null ? (de = p, ff(p)) : de = null;
                    }
                    break t;
                  }
              }
              Ae = 0, Ht = null, eu(e, t, u, 5);
              break;
            case 6:
              Ae = 0, Ht = null, eu(e, t, u, 6);
              break;
            case 8:
              wo(), Ge = 6;
              break e;
            default:
              throw Error(r(462));
          }
        }
        ab();
        break;
      } catch (C) {
        ry(e, C);
      }
    while (!0);
    return Vl = Pa = null, P.H = a, P.A = n, Te = l, de !== null ? 0 : (Ne = null, he = 0, vr(), Ge);
  }
  function ab() {
    for (; de !== null && !Wf(); )
      sy(de);
  }
  function sy(e) {
    var t = C0(e.alternate, e, Wl);
    e.memoizedProps = e.pendingProps, t === null ? ff(e) : de = t;
  }
  function dy(e) {
    var t = e, l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = E0(
          l,
          t,
          t.pendingProps,
          t.type,
          void 0,
          he
        );
        break;
      case 11:
        t = E0(
          l,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          he
        );
        break;
      case 5:
        Vc(t);
        var a = t;
        a === Fe && (ce ? (br(a), a.tag === 5 && a.stateNode != null && (He = a.stateNode)) : (br(a), ce = !0));
      default:
        z0(l, t), t = de = tv(t, Wl), t = C0(l, t, Wl);
    }
    e.memoizedProps = e.pendingProps, t === null ? ff(e) : de = t;
  }
  function eu(e, t, l, a) {
    Vl = Pa = null, Vc(t), Yn = null, Wu = 0;
    var n = t.return;
    try {
      if (QS(
        e,
        n,
        t,
        l,
        he
      )) {
        Ge = 1, Yr(
          e,
          Kt(l, e.current)
        ), de = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw de = n, u;
      Ge = 1, Yr(
        e,
        Kt(l, e.current)
      ), de = null;
      return;
    }
    t.flags & 32768 ? (ce || a === 1 ? e = !0 : Jn || (he & 536870912) !== 0 ? e = !1 : (Ra = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = ut.current, a !== null && a.tag === 13 && (a.flags |= 16384))), vy(t, e)) : ff(t);
  }
  function ff(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        vy(
          t,
          Ra
        );
        return;
      }
      e = t.return;
      var l = kS(
        t.alternate,
        t,
        Wl
      );
      if (l !== null) {
        de = l;
        return;
      }
      if (t = t.sibling, t !== null) {
        de = t;
        return;
      }
      de = t = e;
    } while (t !== null);
    Ge === 0 && (Ge = 5);
  }
  function vy(e, t) {
    do {
      var l = WS(e.alternate, e);
      if (l !== null) {
        l.flags &= 32767, de = l;
        return;
      }
      if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
        de = e;
        return;
      }
      de = e = l;
    } while (e !== null);
    Ge = 6, de = null;
  }
  function yy(e, t, l, a, n, u, f, d, y, p, C, B) {
    e.cancelPendingCommit = null;
    do
      cf();
    while (qe !== 0);
    if ((Te & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      e === Ne && (de = Ne = null, he = 0), on = t, il = e, _l = l, Ho = n, ay = a, nb(
        e,
        t,
        l,
        f,
        d,
        y,
        B
      );
    }
  }
  function nb(e, t, l, a, n, u, f) {
    var d = t.lanes | t.childLanes;
    if (Uo = d, d |= gc, Z(
      e,
      l,
      d,
      a,
      n,
      u
    ), Pn = null, (l & 335544064) === l ? ($n = NS(e), a = 10262) : ($n = null, a = 10256), (t.subtreeFlags & a) !== 0 || (t.flags & a) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, ob(bn, function() {
      return Go(), null;
    })) : (e.callbackNode = null, e.callbackPriority = 0), Jr = !1, a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
      a = P.T, P.T = null, n = ae.p, ae.p = 2, u = Te, Te |= 4;
      try {
        PS(e, t, l);
      } finally {
        Te = u, ae.p = n, P.T = a;
      }
    }
    qe = 1, Jr ? Wn = Db(
      f,
      e.containerInfo,
      $n,
      qo,
      Yo,
      ib,
      jo,
      Go,
      ub
    ) : (qo(), Yo(), jo());
  }
  function ub(e) {
    if (qe !== 0) {
      var t = il.onRecoverableError;
      t(e, { componentStack: null });
    }
  }
  function ib() {
    qe === 3 && (qe = 0, P0(on, il), qe = 4);
  }
  function qo() {
    if (qe === 1) {
      qe = 0;
      var e = il, t = on, l = _l, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = P.T, P.T = null;
        var n = ae.p;
        ae.p = 2;
        var u = Te;
        Te |= 4;
        try {
          ri = Pr = !1, k0(t, e, l), l = Fo;
          var f = Zd(e.containerInfo), d = l.focusedElem, y = l.selectionRange;
          if (f !== d && d && d.ownerDocument && Qd(
            d.ownerDocument.documentElement,
            d
          )) {
            if (y !== null && dc(d)) {
              var p = y.start, C = y.end;
              if (C === void 0 && (C = p), "selectionStart" in d)
                d.selectionStart = p, d.selectionEnd = Math.min(
                  C,
                  d.value.length
                );
              else {
                var B = d.ownerDocument || document, b = B && B.defaultView || window;
                if (b.getSelection) {
                  var O = b.getSelection(), Y = d.textContent.length, K = Math.min(y.start, Y), re = y.end === void 0 ? K : Math.min(y.end, Y);
                  !O.extend && K > re && (f = re, re = K, K = f);
                  var E = Vd(
                    d,
                    K
                  ), g = Vd(
                    d,
                    re
                  );
                  if (E && g && (O.rangeCount !== 1 || O.anchorNode !== E.node || O.anchorOffset !== E.offset || O.focusNode !== g.node || O.focusOffset !== g.offset)) {
                    var R = B.createRange();
                    R.setStart(E.node, E.offset), O.removeAllRanges(), K > re ? (O.addRange(R), O.extend(g.node, g.offset)) : (R.setEnd(g.node, g.offset), O.addRange(R));
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
          fu = !!Io, Fo = Io = null;
        } finally {
          Te = u, ae.p = n, P.T = a;
        }
      }
      e.current = t, qe = 2;
    }
  }
  function Yo() {
    if (qe === 2) {
      qe = 0;
      var e = il, t = on, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = P.T, P.T = null;
        var a = ae.p;
        ae.p = 2;
        var n = Te;
        Te |= 4;
        try {
          X0(e, t.alternate, t);
        } finally {
          Te = n, ae.p = a, P.T = l;
        }
      }
      qe = 3;
    }
  }
  function jo() {
    if (qe === 4 || qe === 3) {
      qe = 0;
      var e = Wn;
      Wn = null, ji();
      var t = il, l = on, a = _l, n = ay, u = (a & 335544064) === a ? 10262 : 10256;
      if ((l.subtreeFlags & u) !== 0 || (l.flags & u) !== 0 ? qe = 5 : (qe = 0, on = il = null, hy(t, t.pendingLanes)), u = t.pendingLanes, u === 0 && (_a = null), Rn(a), l = l.stateNode, ht && typeof ht.onCommitFiberRoot == "function")
        try {
          ht.onCommitFiberRoot(
            la,
            l,
            void 0,
            (l.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        l = P.T, u = ae.p, ae.p = 2, P.T = null;
        try {
          for (var f = t.onRecoverableError, d = 0; d < n.length; d++) {
            var y = n[d];
            f(y.value, {
              componentStack: y.stack
            });
          }
        } finally {
          P.T = l, ae.p = u;
        }
      }
      if (n = Pn, f = $n, $n = null, n !== null && (Pn = null, f === null && (f = []), e !== null))
        for (y = 0; y < n.length; y++)
          l = (0, n[y])(
            f
          ), l !== void 0 && e.finished.finally(l);
      (_l & 3) !== 0 && cf(), Al(t), u = t.pendingLanes, (a & 261930) !== 0 && (u & 42) !== 0 ? t === nf ? si++ : (si = 0, nf = t) : (si = 0, nf = null), di(0);
    }
  }
  function hy(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Ku(t)));
  }
  function cf() {
    return Wn !== null && (Wn.skipTransition(), Wn = null), qo(), Yo(), jo(), Go();
  }
  function Go() {
    if (qe !== 5) return !1;
    var e = il, t = Uo;
    Uo = 0;
    var l = Rn(_l), a = P.T, n = ae.p;
    try {
      ae.p = 32 > l ? 32 : l, P.T = null, l = Ho, Ho = null;
      var u = il, f = _l;
      if (qe = 0, on = il = null, _l = 0, (Te & 6) !== 0) throw Error(r(331));
      var d = Te;
      if (Te |= 4, ey(u.current), $0(
        u,
        u.current,
        f,
        l
      ), Te = d, di(0, !1), ht && typeof ht.onPostCommitFiberRoot == "function")
        try {
          ht.onPostCommitFiberRoot(la, u);
        } catch {
        }
      return !0;
    } finally {
      ae.p = n, P.T = a, hy(e, t);
    }
  }
  function my(e, t, l) {
    t = Kt(l, t), t = ao(e.stateNode, t, 2), e = ga(e, t, 2), e !== null && (na(e, 2), Al(e));
  }
  function Ce(e, t, l) {
    if (e.tag === 3)
      my(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          my(
            t,
            e,
            l
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (_a === null || !_a.has(a))) {
            e = Kt(l, e), l = d0(2), a = ga(t, l, 2), a !== null && (v0(
              l,
              a,
              t,
              e
            ), na(a, 2), Al(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Xo(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new FS();
      var n = /* @__PURE__ */ new Set();
      a.set(t, n);
    } else
      n = a.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(t, n));
    n.has(l) || (No = !0, n.add(l), e = rb.bind(null, e, t, l), t.then(e, e));
  }
  function rb(e, t, l) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Ne === e && (he & l) === l && ((Ge === 4 || Ge === 3 && (he & 62914560) === he && 300 > yt() - tf) && (Te & 2) === 0 ? Fn(e, 0) : ef |= l, kn === he && (kn = 0)), Al(e);
  }
  function gy(e, t) {
    t === 0 && (t = Pi()), e = Ja(e, t), e !== null && (na(e, t), Al(e));
  }
  function fb(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), gy(e, l);
  }
  function cb(e, t) {
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
    a !== null && a.delete(t), gy(e, l);
  }
  function ob(e, t) {
    return gn(e, t);
  }
  var tu = null, lu = null, Vo = !1, of = !1, Qo = !1, Ca = 0;
  function Al(e) {
    e !== lu && e.next === null && (lu === null ? tu = lu = e : lu = lu.next = e), of = !0, Vo || (Vo = !0, db());
  }
  function di(e, t) {
    if (!Qo && of) {
      Qo = !0;
      do
        for (var l = !1, a = tu; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var f = a.suspendedLanes, d = a.pingedLanes;
              u = (1 << 31 - mt(42 | e) + 1) - 1, u &= n & ~(f & ~d), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (l = !0, py(a, u));
          } else
            u = he, u = Ml(
              a,
              a === Ne ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || aa(a, u) || (l = !0, py(a, u));
          a = a.next;
        }
      while (l);
      Qo = !1;
    }
  }
  function sb() {
    Sy();
  }
  function Sy() {
    of = Vo = !1;
    var e = 0;
    Ca !== 0 && Rb() && (e = Ca);
    for (var t = yt(), l = null, a = tu; a !== null; ) {
      var n = a.next, u = by(a, t);
      u === 0 ? (a.next = null, l === null ? tu = n : l.next = n, n === null && (lu = l)) : (l = a, (e !== 0 || (u & 3) !== 0) && (of = !0)), a = n;
    }
    qe !== 0 && qe !== 5 || di(e), Ca !== 0 && (Ca = 0);
  }
  function by(e, t) {
    for (var l = e.suspendedLanes, a = e.pingedLanes, n = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var f = 31 - mt(u), d = 1 << f, y = n[f];
      y === -1 ? ((d & l) === 0 || (d & a) !== 0) && (n[f] = Wi(d, t)) : y <= t && (e.expiredLanes |= d), u &= ~d;
    }
    if (t = Ne, l = he, l = Ml(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, l === 0 || e === t && (Ae === 2 || Ae === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && Sn(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || aa(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (a !== null && Sn(a), Rn(l)) {
        case 2:
        case 8:
          l = Su;
          break;
        case 32:
          l = bn;
          break;
        case 268435456:
          l = Qi;
          break;
        default:
          l = bn;
      }
      return a = Ey.bind(null, e), l = gn(l, a), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return a !== null && a !== null && Sn(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Ey(e, t) {
    if (qe !== 0 && qe !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (cf() && e.callbackNode !== l)
      return null;
    var a = he;
    return a = Ml(
      e,
      e === Ne ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (uy(e, a, t), by(e, yt()), e.callbackNode != null && e.callbackNode === l ? Ey.bind(null, e) : null);
  }
  function py(e, t) {
    if (cf()) return null;
    uy(e, t, !0);
  }
  function db() {
    _b(function() {
      (Te & 6) !== 0 ? gn(
        Xi,
        sb
      ) : Sy();
    });
  }
  function Zo() {
    if (Ca === 0) {
      var e = Fa;
      e === 0 && (e = En, En <<= 1, (En & 261888) === 0 && (En = 256)), Ca = e;
    }
    return Ca;
  }
  function Ty(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : ur(e);
  }
  function vb(e, t, l, a, n) {
    if (t === "submit" && l && l.stateNode === n) {
      var u = Ty(
        (n[at] || null).action
      ), f = a.submitter;
      f && (t = (t = f[at] || null) ? Ty(t.formAction) : f.getAttribute("formAction"), t !== null && (u = t, f = null));
      var d = new cr(
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
                if (Ca !== 0) {
                  var y = new FormData(n, f);
                  Ic(
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
                typeof u == "function" && (d.preventDefault(), y = new FormData(n, f), Ic(
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
  for (var Ko = 0; Ko < mc.length; Ko++) {
    var Jo = mc[Ko], yb = Jo.toLowerCase(), hb = Jo[0].toUpperCase() + Jo.slice(1);
    ll(
      yb,
      "on" + hb
    );
  }
  ll(kd, "onAnimationEnd"), ll(Wd, "onAnimationIteration"), ll(Pd, "onAnimationStart"), ll("dblclick", "onDoubleClick"), ll("focusin", "onFocus"), ll("focusout", "onBlur"), ll(OS, "onTransitionRun"), ll(_S, "onTransitionStart"), ll(AS, "onTransitionCancel"), ll($d, "onTransitionEnd"), wl("onMouseEnter", ["mouseout", "mouseover"]), wl("onMouseLeave", ["mouseout", "mouseover"]), wl("onPointerEnter", ["pointerout", "pointerover"]), wl("onPointerLeave", ["pointerout", "pointerover"]), hl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), hl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), hl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), hl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), hl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), hl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var vi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), mb = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vi)
  );
  function Ry(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l], n = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var f = a.length - 1; 0 <= f; f--) {
            var d = a[f], y = d.instance, p = d.currentTarget;
            if (d = d.listener, y !== u && n.isPropagationStopped())
              break e;
            u = d, n.currentTarget = p;
            try {
              u(n);
            } catch (C) {
              dr(C);
            }
            n.currentTarget = null, u = y;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (d = a[f], y = d.instance, p = d.currentTarget, d = d.listener, y !== u && n.isPropagationStopped())
              break e;
            u = d, n.currentTarget = p;
            try {
              u(n);
            } catch (C) {
              dr(C);
            }
            n.currentTarget = null, u = y;
          }
      }
    }
  }
  function ve(e, t) {
    var l = t[Tu];
    l === void 0 && (l = t[Tu] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    l.has(a) || (Oy(t, e, 2, !1), l.add(a));
  }
  function ko(e, t, l) {
    var a = 0;
    t && (a |= 4), Oy(
      l,
      e,
      a,
      t
    );
  }
  var sf = "_reactListening" + Math.random().toString(36).slice(2);
  function Wo(e) {
    if (!e[sf]) {
      e[sf] = !0, On.forEach(function(l) {
        l !== "selectionchange" && (mb.has(l) || ko(l, !1, e), ko(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[sf] || (t[sf] = !0, ko("selectionchange", !1, t));
    }
  }
  function Oy(e, t, l, a) {
    switch (vh(t)) {
      case 2:
        var n = f1;
        break;
      case 8:
        n = c1;
        break;
      default:
        n = hs;
    }
    l = n.bind(
      null,
      t,
      l,
      e
    ), n = void 0, !lc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), a ? n !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: n
    }) : e.addEventListener(t, l, !0) : n !== void 0 ? e.addEventListener(t, l, {
      passive: n
    }) : e.addEventListener(t, l, !1);
  }
  function Po(e, t, l, a, n) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (; ; ) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var d = a.stateNode.containerInfo;
          if (d === n) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var y = f.tag;
              if ((y === 3 || y === 4) && f.stateNode.containerInfo === n)
                return;
              f = f.return;
            }
          for (; d !== null; ) {
            if (f = yl(d), f === null) return;
            if (y = f.tag, y === 5 || y === 6 || y === 26 || y === 27) {
              a = u = f;
              continue e;
            }
            d = d.parentNode;
          }
        }
        a = a.return;
      }
    Od(function() {
      var p = u, C = ec(l), B = [];
      e: {
        var b = Id.get(e);
        if (b !== void 0) {
          var O = cr, Y = e;
          switch (e) {
            case "keypress":
              if (rr(l) === 0) break e;
            case "keydown":
            case "keyup":
              O = eS;
              break;
            case "focusin":
              Y = "focus", O = ic;
              break;
            case "focusout":
              Y = "blur", O = ic;
              break;
            case "beforeblur":
            case "afterblur":
              O = ic;
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
              O = Cd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              O = Xg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              O = uS;
              break;
            case kd:
            case Wd:
            case Pd:
              O = Zg;
              break;
            case $d:
              O = rS;
              break;
            case "scroll":
            case "scrollend":
              O = jg;
              break;
            case "wheel":
              O = cS;
              break;
            case "copy":
            case "cut":
            case "paste":
              O = Jg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              O = zd;
              break;
            case "submit":
              O = aS;
              break;
            case "toggle":
            case "beforetoggle":
              O = sS;
          }
          var K = (t & 4) !== 0, re = !K && (e === "scroll" || e === "scrollend"), E = K ? b !== null ? b + "Capture" : null : b;
          K = [];
          for (var g = p, R; g !== null; ) {
            var N = g;
            if (R = N.stateNode, N = N.tag, N !== 5 && N !== 26 && N !== 27 || R === null || E === null || (N = Hu(g, E), N != null && K.push(
              yi(g, N, R)
            )), re) break;
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
          if (O = e === "mouseover" || e === "pointerover", b = e === "mouseout" || e === "pointerout", O && l !== Ff && (Y = l.relatedTarget || l.fromElement) && (yl(Y) || Y[Bl]))
            break e;
          (b || O) && (Y = C.window === C ? C : (O = C.ownerDocument) ? O.defaultView || O.parentWindow : window, b ? (O = l.relatedTarget || l.toElement, b = p, O = O ? yl(O) : null, O !== null && (re = v(O), K = O.tag, O !== re || K !== 5 && K !== 27 && K !== 6) && (O = null)) : (b = null, O = p), b !== O && (K = Cd, N = "onMouseLeave", E = "onMouseEnter", g = "mouse", (e === "pointerout" || e === "pointerover") && (K = zd, N = "onPointerLeave", E = "onPointerEnter", g = "pointer"), re = b == null ? Y : ia(b), R = O == null ? Y : ia(O), Y = new K(
            N,
            g + "leave",
            b,
            l,
            C
          ), Y.target = re, Y.relatedTarget = R, N = null, yl(C) === p && (K = new K(
            E,
            g + "enter",
            O,
            l,
            C
          ), K.target = R, K.relatedTarget = re, N = K), re = N, K = b && O ? J(
            b,
            O,
            gb
          ) : null, b !== null && _y(
            B,
            Y,
            b,
            K,
            !1
          ), O !== null && re !== null && _y(
            B,
            re,
            O,
            K,
            !0
          )));
        }
        e: {
          if (b = p ? ia(p) : window, O = b.nodeName && b.nodeName.toLowerCase(), O === "select" || O === "input" && b.type === "file")
            var X = Ld;
          else if (Hd(b))
            if (qd)
              X = pS;
            else {
              X = bS;
              var me = SS;
            }
          else
            O = b.nodeName, !O || O.toLowerCase() !== "input" || b.type !== "checkbox" && b.type !== "radio" ? p && If(p.elementType) && (X = Ld) : X = ES;
          if (X && (X = X(e, p))) {
            wd(
              B,
              X,
              l,
              C
            );
            break e;
          }
          me && me(e, b, p);
        }
        switch (me = p ? ia(p) : window, e) {
          case "focusin":
            (Hd(me) || me.contentEditable === "true") && (Dn = me, vc = p, Vu = null);
            break;
          case "focusout":
            Vu = vc = Dn = null;
            break;
          case "mousedown":
            yc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            yc = !1, Kd(B, l, C);
            break;
          case "selectionchange":
            if (RS) break;
          case "keydown":
          case "keyup":
            Kd(B, l, C);
        }
        var I;
        if (fc)
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
          zn ? Bd(e, l) && (le = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (le = "onCompositionStart");
        le && (Dd && l.locale !== "ko" && (zn || le !== "onCompositionStart" ? le === "onCompositionEnd" && zn && (I = _d()) : (fa = C, ac = "value" in fa ? fa.value : fa.textContent, zn = !0)), me = df(p, le), 0 < me.length && (le = new xd(
          le,
          e,
          null,
          l,
          C
        ), B.push({ event: le, listeners: me }), I ? le.data = I : (I = Ud(l), I !== null && (le.data = I)))), (I = vS ? yS(e, l) : hS(e, l)) && (le = df(p, "onBeforeInput"), 0 < le.length && (me = new xd(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          C
        ), B.push({
          event: me,
          listeners: le
        }), me.data = I)), vb(
          B,
          e,
          p,
          l,
          C
        );
      }
      Ry(B, t);
    });
  }
  function yi(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    };
  }
  function df(e, t) {
    for (var l = t + "Capture", a = []; e !== null; ) {
      var n = e, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = Hu(e, l), n != null && a.unshift(
        yi(e, n, u)
      ), n = Hu(e, t), n != null && a.push(
        yi(e, n, u)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function gb(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function _y(e, t, l, a, n) {
    for (var u = t._reactName, f = []; l !== null && l !== a; ) {
      var d = l, y = d.alternate, p = d.stateNode;
      if (d = d.tag, y !== null && y === a) break;
      d !== 5 && d !== 26 && d !== 27 || p === null || (y = p, n ? (p = Hu(l, u), p != null && f.unshift(
        yi(l, p, y)
      )) : n || (p = Hu(l, u), p != null && f.push(
        yi(l, p, y)
      ))), l = l.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var Sb = /\r\n?/g, bb = /\u0000|\uFFFD/g;
  function Ay(e) {
    return (typeof e == "string" ? e : "" + e).replace(Sb, `
`).replace(bb, "");
  }
  function Cy(e, t) {
    return t = Ay(t), Ay(e) === t;
  }
  function xe(e, t, l, a, n, u) {
    switch (l) {
      case "children":
        if (typeof a == "string")
          t === "body" || t === "textarea" && a === "" || Ll(e, a);
        else if (typeof a == "number" || typeof a == "bigint")
          t !== "body" && Ll(e, "" + a);
        else return;
        break;
      case "className":
        Va(e, "class", a);
        break;
      case "tabIndex":
        Va(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Va(e, l, a);
        break;
      case "style":
        Td(e, a, u);
        return;
      case "data":
        if (t !== "object") {
          Va(e, "data", a);
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
        a = ur(a), e.setAttribute(l, a);
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
          typeof u == "function" && (l === "formAction" ? (t !== "input" && xe(e, t, "name", n.name, n, null), xe(
            e,
            t,
            "formEncType",
            n.formEncType,
            n,
            null
          ), xe(
            e,
            t,
            "formMethod",
            n.formMethod,
            n,
            null
          ), xe(
            e,
            t,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (xe(e, t, "encType", n.encType, n, null), xe(e, t, "method", n.method, n, null), xe(e, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        a = ur(a), e.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (e.onclick = ml);
        return;
      case "onScroll":
        a != null && ve("scroll", e);
        return;
      case "onScrollEnd":
        a != null && ve("scrollend", e);
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
        l = ur(a), e.setAttributeNS(
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
        ve("beforetoggle", e), ve("toggle", e), Xa(e, "popover", a);
        break;
      case "xlinkActuate":
        Qt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Qt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Qt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Qt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Qt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Qt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Qt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Qt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Qt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Xa(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N")
          l = qg.get(l) || l, Xa(e, l, a);
        else return;
    }
    ge = !0;
  }
  function $o(e, t, l, a, n, u) {
    switch (l) {
      case "style":
        Td(e, a, u);
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
        if (typeof a == "string") Ll(e, a);
        else if (typeof a == "number" || typeof a == "bigint")
          Ll(e, "" + a);
        else return;
        break;
      case "onScroll":
        a != null && ve("scroll", e);
        return;
      case "onScrollEnd":
        a != null && ve("scrollend", e);
        return;
      case "onClick":
        a != null && (e.onclick = ml);
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
        if (!_u.hasOwnProperty(l))
          e: {
            if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), u = l.slice(2, n ? l.length - 7 : void 0), t = e[at] || null, t = t != null ? t[l] : null, typeof t == "function" && e.removeEventListener(u, t, n), typeof a == "function")) {
              typeof t != "function" && t !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(u, a, n);
              break e;
            }
            ge = !0, l in e ? e[l] = a : a === !0 ? e.setAttribute(l, "") : Xa(e, l, a);
          }
        return;
    }
    ge = !0;
  }
  function ft(e, t, l) {
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
        ve("error", e), ve("load", e);
        var a = !1, n = !1, u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var f = l[u];
            if (f != null)
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
                  xe(e, t, u, f, l, null);
              }
          }
        n && xe(e, t, "srcSet", l.srcSet, l, null), a && xe(e, t, "src", l.src, l, null);
        return;
      case "input":
        ve("invalid", e);
        var d = u = f = n = null, y = null, p = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var C = l[a];
            if (C != null)
              switch (a) {
                case "name":
                  n = C;
                  break;
                case "type":
                  f = C;
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
                  xe(e, t, a, C, l, null);
              }
          }
        Mu(
          e,
          u,
          d,
          y,
          p,
          f,
          n,
          !1
        );
        return;
      case "select":
        ve("invalid", e), a = f = u = null;
        for (n in l)
          if (l.hasOwnProperty(n) && (d = l[n], d != null))
            switch (n) {
              case "value":
                u = d;
                break;
              case "defaultValue":
                f = d;
                break;
              case "multiple":
                a = d;
              default:
                xe(e, t, n, d, l, null);
            }
        t = u, l = f, e.multiple = !!a, t != null ? ra(e, !!a, t, !1) : l != null && ra(e, !!a, l, !0);
        return;
      case "textarea":
        ve("invalid", e), u = n = a = null;
        for (f in l)
          if (l.hasOwnProperty(f) && (d = l[f], d != null))
            switch (f) {
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
                xe(e, t, f, d, l, null);
            }
        Bu(e, a, n, u);
        return;
      case "option":
        for (y in l)
          l.hasOwnProperty(y) && (a = l[y], a != null) && (y === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : xe(e, t, y, a, l, null));
        return;
      case "dialog":
        ve("beforetoggle", e), ve("toggle", e), ve("cancel", e), ve("close", e);
        break;
      case "iframe":
      case "object":
        ve("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < vi.length; a++)
          ve(vi[a], e);
        break;
      case "image":
        ve("error", e), ve("load", e);
        break;
      case "details":
        ve("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        ve("error", e), ve("load", e);
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
                xe(e, t, p, a, l, null);
            }
        return;
      default:
        if (If(t)) {
          for (C in l)
            l.hasOwnProperty(C) && (a = l[C], a !== void 0 && $o(
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
      l.hasOwnProperty(d) && (a = l[d], a != null && xe(e, t, d, a, l, null));
  }
  var Eb = {};
  function pb(e, t, l, a) {
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
        var n = null, u = null, f = null, d = null, y = null, p = null, C = null;
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
                a.hasOwnProperty(O) || xe(e, t, O, null, a, B);
            }
        }
        for (var b in a) {
          var O = a[b];
          if (B = l[b], a.hasOwnProperty(b) && (O != null || B != null))
            switch (b) {
              case "type":
                O !== B && (ge = !0), u = O;
                break;
              case "name":
                O !== B && (ge = !0), n = O;
                break;
              case "checked":
                O !== B && (ge = !0), p = O;
                break;
              case "defaultChecked":
                O !== B && (ge = !0), C = O;
                break;
              case "value":
                O !== B && (ge = !0), f = O;
                break;
              case "defaultValue":
                O !== B && (ge = !0), d = O;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null)
                  throw Error(r(137, t));
                break;
              default:
                O !== B && xe(
                  e,
                  t,
                  b,
                  O,
                  a,
                  B
                );
            }
        }
        An(
          e,
          f,
          d,
          y,
          p,
          C,
          u,
          n
        );
        return;
      case "select":
        O = f = d = b = null;
        for (u in l)
          if (y = l[u], l.hasOwnProperty(u) && y != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                O = y;
              default:
                a.hasOwnProperty(u) || xe(
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
                u !== y && (ge = !0), b = u;
                break;
              case "defaultValue":
                u !== y && (ge = !0), d = u;
                break;
              case "multiple":
                u !== y && (ge = !0), f = u;
              default:
                u !== y && xe(
                  e,
                  t,
                  n,
                  u,
                  a,
                  y
                );
            }
        t = d, l = f, a = O, b != null ? ra(e, !!l, b, !1) : !!a != !!l && (t != null ? ra(e, !!l, t, !0) : ra(e, !!l, l ? [] : "", !1));
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
                xe(e, t, d, null, a, n);
            }
        for (f in a)
          if (n = a[f], u = l[f], a.hasOwnProperty(f) && (n != null || u != null))
            switch (f) {
              case "value":
                n !== u && (ge = !0), b = n;
                break;
              case "defaultValue":
                n !== u && (ge = !0), O = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(r(91));
                break;
              default:
                n !== u && xe(e, t, f, n, a, u);
            }
        Nu(e, b, O);
        return;
      case "option":
        for (var Y in l)
          b = l[Y], l.hasOwnProperty(Y) && b != null && !a.hasOwnProperty(Y) && (Y === "selected" ? e.selected = !1 : xe(
            e,
            t,
            Y,
            null,
            a,
            b
          ));
        for (y in a)
          b = a[y], O = l[y], a.hasOwnProperty(y) && b !== O && (b != null || O != null) && (y === "selected" ? (b !== O && (ge = !0), e.selected = b && typeof b != "function" && typeof b != "symbol") : xe(
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
          b = l[K], l.hasOwnProperty(K) && b != null && !a.hasOwnProperty(K) && xe(e, t, K, null, a, b);
        for (p in a)
          if (b = a[p], O = l[p], a.hasOwnProperty(p) && b !== O && (b != null || O != null))
            switch (p) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (b != null)
                  throw Error(r(137, t));
                break;
              default:
                xe(
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
        if (If(t)) {
          for (var re in l)
            b = l[re], l.hasOwnProperty(re) && b !== void 0 && !a.hasOwnProperty(re) && $o(
              e,
              t,
              re,
              void 0,
              a,
              b
            );
          for (C in a)
            b = a[C], O = l[C], !a.hasOwnProperty(C) || b === O || b === void 0 && O === void 0 || $o(
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
      b = l[E], l.hasOwnProperty(E) && b != null && !a.hasOwnProperty(E) && xe(e, t, E, null, a, b);
    for (B in a)
      b = a[B], O = l[B], !a.hasOwnProperty(B) || b === O || b == null && O == null || xe(e, t, B, b, a, O);
  }
  function xy(e) {
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
  function Tb() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
        var n = l[a], u = n.transferSize, f = n.initiatorType, d = n.duration;
        if (u && d && xy(f)) {
          for (f = 0, d = n.responseEnd, a += 1; a < l.length; a++) {
            var y = l[a], p = y.startTime;
            if (p > d) break;
            var C = y.transferSize, B = y.initiatorType;
            C && xy(B) && (y = y.responseEnd, f += C * (y < d ? 1 : (d - p) / (y - p)));
          }
          if (--a, t += 8 * (u + f) / (n.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Io = null, Fo = null;
  function hi(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function zy(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Dy(e, t) {
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
  function My(e, t, l, a) {
    return l = hi(
      l
    ).createElement(e), l[Ze] = a, l[at] = t, ft(l, e, t), Ve(l), l;
  }
  function es(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ts = null;
  function Rb() {
    var e = window.event;
    return e && e.type === "popstate" ? e === ts ? !1 : (ts = e, !0) : (ts = null, !1);
  }
  var ls = typeof setTimeout == "function" ? setTimeout : void 0, Ob = typeof clearTimeout == "function" ? clearTimeout : void 0, Ny = typeof Promise == "function" ? Promise : void 0, By = typeof requestAnimationFrame == "function" ? requestAnimationFrame : ls, _b = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ny < "u" ? function(e) {
    return Ny.resolve(null).then(e).catch(Ab);
  } : ls;
  function Ab(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function xa(e) {
    return e === "head";
  }
  function Uy(e, t) {
    var l = t, a = 0;
    do {
      var n = l.nextSibling;
      if (e.removeChild(l), n && n.nodeType === 8)
        if (l = n.data, l === "/$" || l === "/&") {
          if (a === 0) {
            e.removeChild(n), cu(t);
            return;
          }
          a--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          a++;
        else if (l === "html")
          os(
            e.ownerDocument.documentElement
          );
        else if (l === "head") {
          l = e.ownerDocument.head, os(l);
          for (var u = l.firstChild; u; ) {
            var f = u.nextSibling, d = u.nodeName;
            u[ua] || d === "SCRIPT" || d === "STYLE" || d === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = f;
          }
        } else
          l === "body" && os(e.ownerDocument.body);
      l = n;
    } while (l);
    cu(t);
  }
  function Hy(e, t) {
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
  function wy(e, t, l) {
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
  function Ly(e, t) {
    e = e.style, t = t.style;
    var l = t != null ? t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null : null;
    e.viewTransitionName = l == null || typeof l == "boolean" ? "" : ("" + l).trim(), l = t != null ? t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null : null, e.viewTransitionClass = l == null || typeof l == "boolean" ? "" : ("" + l).trim(), e.display === "inline-block" && (t == null ? e.display = e.margin = "" : (l = t.display, e.display = l == null || typeof l == "boolean" ? "" : l, l = t.margin, l != null ? e.margin = l : (l = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], e.marginTop = l == null || typeof l == "boolean" ? "" : l, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], e.marginBottom = t == null || typeof t == "boolean" ? "" : t)));
  }
  function Cb(e, t, l) {
    return l = l.ownerDocument.defaultView, {
      rect: e,
      abs: t.position === "absolute" || t.position === "fixed",
      clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
      view: 0 <= e.bottom && 0 <= e.right && e.top <= l.innerHeight && e.left <= l.innerWidth
    };
  }
  function as(e) {
    var t = e.getBoundingClientRect(), l = getComputedStyle(e);
    return Cb(t, l, e);
  }
  function xb(e) {
    return e.documentElement.clientHeight;
  }
  function zb(e) {
    this.addEventListener("load", e), this.addEventListener("error", e);
  }
  function Db(e, t, l, a, n, u, f, d, y) {
    var p = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var C = p.startViewTransition({
        update: function() {
          var b = p.defaultView, O = b.navigation && b.navigation.transition, Y = p.fonts.status;
          a();
          var K = [];
          if (Y === "loaded" && (xb(p), p.fonts.status === "loading" && K.push(p.fonts.ready)), Y = K.length, e !== null)
            for (var re = e.suspenseyImages, E = 0, g = 0; g < re.length; g++) {
              var R = re[g];
              if (!R.complete) {
                var N = R.getBoundingClientRect();
                if (0 < N.bottom && 0 < N.right && N.top < b.innerHeight && N.left < b.innerWidth) {
                  if (E += nh(R), E > hf) {
                    K.length = Y;
                    break;
                  }
                  R = new Promise(
                    zb.bind(R)
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
            var Y = b[O], K = Y.effect, re = K.pseudoElement;
            if (re != null && re.startsWith("::view-transition")) {
              B.push(Y), Y = K.getKeyframes();
              for (var E = re = void 0, g = !0, R = 0; R < Y.length; R++) {
                var N = Y[R], X = N.width;
                if (re === void 0) re = X;
                else if (re !== X) {
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
              g && re !== void 0 && E !== void 0 && (K.setKeyframes(Y), g = getComputedStyle(
                K.target,
                K.pseudoElement
              ), g.width !== re || g.height !== E) && (g = Y[0], g.width = re, g.height = E, g = Y[Y.length - 1], g.width = re, g.height = E, K.setKeyframes(Y));
            }
          }
          f();
        },
        function(b) {
          p.__reactViewTransition === C && (p.__reactViewTransition = null);
          try {
            typeof b == "object" && b !== null && b.name === "InvalidStateError" && (b.message === "View transition was skipped because document visibility state is hidden." || b.message === "Skipping view transition because document visibility state has become hidden." || b.message === "Skipping view transition because viewport size changed." || b.message === "Transition was aborted because of invalid state") && (b = null), b !== null && y(b);
          } finally {
            a(), n(), f();
          }
        }
      ), C.finished.finally(function() {
        for (var b = 0; b < B.length; b++)
          B[b].cancel();
        p.__reactViewTransition === C && (p.__reactViewTransition = null), d();
      }), C;
    } catch {
      return a(), n(), f(), null;
    }
  }
  function sn(e, t) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + t + ")";
  }
  sn.prototype.animate = function(e, t) {
    return t = typeof t == "number" ? { duration: t } : G({}, t), t.pseudoElement = this._selector, this._scope.animate(e, t);
  }, sn.prototype.getAnimations = function() {
    for (var e = this._scope, t = this._selector, l = e.getAnimations({ subtree: !0 }), a = [], n = 0; n < l.length; n++) {
      var u = l[n].effect;
      u !== null && u.target === e && u.pseudoElement === t && a.push(l[n]);
    }
    return a;
  }, sn.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function qy(e) {
    return {
      name: e,
      group: new sn("group", e),
      imagePair: new sn("image-pair", e),
      old: new sn("old", e),
      new: new sn("new", e)
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
      if (jy(u, e, t, l) === -1) {
        var f = this, d = t;
        l != null && typeof l != "boolean" && l.once === !0 && (d = function(y) {
          f.removeEventListener(
            e,
            t,
            l
          ), typeof t == "function" ? t.call(this, y) : t.handleEvent(y);
        }), a !== null && (n = f.removeEventListener.bind(
          f,
          e,
          t,
          l
        ), a.addEventListener("abort", n, { once: !0 }), n = a.removeEventListener.bind(a, "abort", n)), a = au(l), u.push({
          type: e,
          listener: t,
          optionsOrUseCapture: l,
          attachedListener: d,
          cleanup: n
        }), m(
          this._fragmentFiber.child,
          !1,
          Mb,
          e,
          d,
          a
        );
      }
      this._eventListeners = u;
    }
  };
  function Mb(e, t, l, a) {
    return M(e).addEventListener(
      t,
      l,
      a
    ), !1;
  }
  qt.prototype.removeEventListener = function(e, t, l) {
    var a = this._eventListeners;
    if (a !== null && (t = jy(
      a,
      e,
      t,
      l
    ), t !== -1)) {
      var n = a[t];
      l = n.attachedListener;
      var u = n.cleanup;
      n = au(n.optionsOrUseCapture), m(
        this._fragmentFiber.child,
        !1,
        Nb,
        e,
        l,
        n
      ), a.splice(t, 1), u !== null && u();
    }
  };
  function Nb(e, t, l, a) {
    return M(e).removeEventListener(
      t,
      l,
      a
    ), !1;
  }
  function au(e) {
    return e != null && typeof e != "boolean" && (e.once === !0 || e.signal instanceof AbortSignal) ? { capture: e.capture, passive: e.passive } : e;
  }
  function Yy(e) {
    return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
  }
  function jy(e, t, l, a) {
    if (e.length === 0) return -1;
    a = Yy(a);
    for (var n = 0; n < e.length; n++) {
      var u = e[n];
      if (u.type === t && u.listener === l && Yy(u.optionsOrUseCapture) === a)
        return n;
    }
    return -1;
  }
  qt.prototype.dispatchEvent = function(e) {
    var t = z(
      this._fragmentFiber
    );
    if (t === null) return !0;
    t = M(t);
    var l = this._eventListeners;
    if (l !== null && 0 < l.length || !e.bubbles) {
      var a = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
      if (l)
        for (var n = 0; n < l.length; n++) {
          var u = l[n];
          a.addEventListener(
            u.type,
            u.attachedListener,
            au(u.optionsOrUseCapture)
          );
        }
      if (t.appendChild(a), e = a.dispatchEvent(e), l)
        for (n = 0; n < l.length; n++)
          u = l[n], a.removeEventListener(
            u.type,
            u.attachedListener,
            au(u.optionsOrUseCapture)
          );
      return t.removeChild(a), e;
    }
    return t.dispatchEvent(e);
  }, qt.prototype.focus = function(e) {
    m(
      this._fragmentFiber.child,
      !0,
      Gy,
      e,
      void 0,
      void 0
    );
  };
  function Gy(e, t) {
    return e.tag === 6 ? !1 : (e = M(e), Qb(e, t));
  }
  qt.prototype.focusLast = function(e) {
    var t = [];
    m(
      this._fragmentFiber.child,
      !0,
      ns,
      t,
      void 0,
      void 0
    );
    for (var l = t.length - 1; 0 <= l && !Gy(t[l], e); l--) ;
  };
  function ns(e, t) {
    return t.push(e), !1;
  }
  qt.prototype.blur = function() {
    var e = z(
      this._fragmentFiber
    );
    e !== null && (e = M(e), e = hi(e).activeElement, e !== null && m(
      this._fragmentFiber.child,
      !1,
      Bb,
      e,
      void 0,
      void 0
    ));
  };
  function Bb(e, t) {
    return e.tag === 6 ? !1 : (e = M(e), e === t || e.contains(t) ? (t.blur(), !0) : !1);
  }
  qt.prototype.observeUsing = function(e) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), m(
      this._fragmentFiber.child,
      !1,
      Ub,
      e,
      void 0,
      void 0
    );
  };
  function Ub(e, t) {
    return e.tag === 6 || (e = M(e), t.observe(e)), !1;
  }
  qt.prototype.unobserveUsing = function(e) {
    var t = this._observers;
    if (t !== null && t.has(e)) {
      t.delete(e), m(
        this._fragmentFiber.child,
        !1,
        Hb,
        e,
        void 0,
        void 0
      );
      for (var l = t = 0; l < rl.length; l++) {
        var a = rl[l];
        a.fragmentInstance === this && a.observer === e ? e.unobserve(a.instance) : rl[t++] = a;
      }
      rl.length = t;
    }
  };
  function Hb(e, t) {
    return e.tag === 6 || (e = M(e), t.unobserve(e)), !1;
  }
  var rl = [], us = !1;
  function wb(e, t, l) {
    rl.push({
      fragmentInstance: e,
      observer: t,
      instance: l
    }), us || (us = !0, Zb(function() {
      us = !1;
      var a = rl;
      rl = [];
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
      Lb,
      e,
      void 0,
      void 0
    ), e;
  };
  function Lb(e, t) {
    if (e.tag === 6) {
      e = e.stateNode;
      var l = e.ownerDocument.createRange();
      l.selectNodeContents(e), t.push.apply(t, l.getClientRects());
    } else
      e = M(e), t.push.apply(t, e.getClientRects());
    return !1;
  }
  qt.prototype.getRootNode = function(e) {
    var t = z(
      this._fragmentFiber
    );
    return t === null ? this : M(t).getRootNode(e);
  }, qt.prototype.compareDocumentPosition = function(e) {
    var t = z(
      this._fragmentFiber
    );
    if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var l = [];
    m(
      this._fragmentFiber.child,
      !1,
      ns,
      l,
      void 0,
      void 0
    );
    var a = M(t);
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
      return l === e ? n = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (l = L(t)[1], l === null ? n = Node.DOCUMENT_POSITION_PRECEDING : (e = M(l).compareDocumentPosition(
        e
      ), n = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), n |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t = M(l[0]), n = M(l[l.length - 1]);
    var u = q(this._fragmentFiber) ? t.parentElement : a;
    if (u == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = u.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, u = u.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var f = t.compareDocumentPosition(e), d = n.compareDocumentPosition(e), y = f & Node.DOCUMENT_POSITION_CONTAINED_BY || d & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return d = a && u && f & Node.DOCUMENT_POSITION_FOLLOWING && d & Node.DOCUMENT_POSITION_PRECEDING, t = a && t === e || u && n === e || y || d ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && t === e || !u && n === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : f, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || qb(
      t,
      this._fragmentFiber,
      l[0],
      l[l.length - 1],
      e
    ) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function qb(e, t, l, a, n) {
    var u = yl(n);
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
    ), u = H, D = H = null, t = u !== null)), t) : !1;
  }
  function Xy(e, t) {
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
      ns,
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
        e = M(a), Xy(e, l);
        return;
      }
      if (a = M(a), a.nodeType !== 9) {
        if (a.nodeType === 11) {
          l = "host" in a ? a.host : null, l !== null && l.scrollIntoView(e);
          return;
        }
        a.scrollIntoView(e);
      }
    }
    for (a = l ? t.length - 1 : 0; a !== (l ? -1 : t.length); ) {
      var n = t[a];
      n.tag === 6 ? (n = M(n), Xy(n, l)) : M(n).scrollIntoView(e), a += l ? -1 : 1;
    }
  };
  function Yb(e, t) {
    return e = M(e), Vy(e, t), !1;
  }
  function Vy(e, t) {
    e.reactFragments == null && (e.reactFragments = /* @__PURE__ */ new Set()), e.reactFragments.add(t);
  }
  function Qy(e, t) {
    var l = t._eventListeners;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a];
        e.addEventListener(
          n.type,
          n.attachedListener,
          au(n.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 && (l = t._observers, l !== null && l.forEach(function(u) {
      for (var f = 0, d = 0; d < rl.length; d++) {
        var y = rl[d];
        (y.fragmentInstance !== t || y.observer !== u || y.instance !== e) && (rl[f++] = y);
      }
      rl.length = f, u.observe(e);
    }), Vy(e, t));
  }
  function jb(e, t) {
    var l = t._eventListeners;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a];
        e.removeEventListener(
          n.type,
          n.attachedListener,
          au(n.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 && (l = t._observers, l !== null && l.forEach(function(u) {
      typeof u.rootMargin == "string" ? wb(
        t,
        u,
        e
      ) : u.unobserve(e);
    }), e.reactFragments != null && e.reactFragments.delete(t));
  }
  function is(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          is(l), Ga(l);
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
  function Gb(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var n = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[ua])
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
      if (e = $t(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Xb(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = $t(e.nextSibling), e === null)) return null;
    return e;
  }
  function Zy(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = $t(e.nextSibling), e === null)) return null;
    return e;
  }
  function rs(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function fs(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Vb(e, t) {
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
  function $t(e) {
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
  var cs = null;
  function Ky(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0)
            return $t(e.nextSibling);
          t--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Jy(e) {
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
  function Qb(e, t) {
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
  function Zb(e) {
    By(function() {
      By(function(t) {
        return e(t);
      });
    });
  }
  function ky(e, t, l) {
    switch (t = hi(l), e) {
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
  function Wy(e, t, l) {
    for (var a in l) {
      var n = l[a];
      l.hasOwnProperty(a) && n != null && xe(e, t, a, null, Eb, n);
    }
    l.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === ml && (e.onclick = null), Ga(e);
  }
  function os(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Ga(e);
  }
  var It = /* @__PURE__ */ new Map(), Py = /* @__PURE__ */ new Set();
  function mi(e) {
    if (typeof e.getRootNode == "function") {
      var t = e.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Pl = ae.d;
  ae.d = {
    f: Kb,
    r: Jb,
    D: kb,
    C: Wb,
    L: Pb,
    m: $b,
    X: Fb,
    S: Ib,
    M: e1
  };
  function Kb() {
    var e = Pl.f(), t = uf();
    return e || t;
  }
  function Jb(e) {
    var t = Ul(e);
    t !== null && t.tag === 5 && t.type === "form" ? Iv(t) : Pl.r(e);
  }
  var nu = typeof document > "u" ? null : document;
  function $y(e, t, l) {
    var a = nu;
    if (a && typeof t == "string" && t) {
      var n = gt(t);
      n = 'link[rel="' + e + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), Py.has(n) || (Py.add(n), e = { rel: e, crossOrigin: l, href: t }, a.querySelector(n) === null && (t = a.createElement("link"), ft(t, "link", e), Ve(t), a.head.appendChild(t)));
    }
  }
  function kb(e) {
    Pl.D(e), $y("dns-prefetch", e, null);
  }
  function Wb(e, t) {
    Pl.C(e, t), $y("preconnect", e, t);
  }
  function Pb(e, t, l) {
    Pl.L(e, t, l);
    var a = nu;
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
          u = uu(e);
          break;
        case "script":
          u = iu(e);
      }
      if (!(It.has(u) || (e = G(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), It.set(u, e), a.querySelector(n) !== null || t === "style" && a.querySelector(gi(u)) || t === "script" && a.querySelector(Si(u))))) {
        var f = a.createElement("link");
        ft(f, "link", e), t === "style" && (f[ja] = !0, f.onload = f.onerror = function() {
          Ou(f);
        }), Ve(f), a.head.appendChild(f);
      }
    }
  }
  function $b(e, t) {
    Pl.m(e, t);
    var l = nu;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + gt(a) + '"][href="' + gt(e) + '"]', u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = iu(e);
      }
      if (!It.has(u) && (e = G({ rel: "modulepreload", href: e }, t), It.set(u, e), l.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Si(u)))
              return;
        }
        a = l.createElement("link"), ft(a, "link", e), Ve(a), l.head.appendChild(a);
      }
    }
  }
  function Ib(e, t, l) {
    Pl.S(e, t, l);
    var a = nu;
    if (a && e) {
      var n = Hl(a).hoistableStyles, u = uu(e);
      t = t || "default";
      var f = n.get(u);
      if (!f) {
        var d = { loading: 0, preload: null };
        if (f = a.querySelector(
          gi(u)
        ))
          d.loading = 5;
        else {
          e = G(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = It.get(u)) && ss(e, l);
          var y = f = a.createElement("link");
          Ve(y), ft(y, "link", e), y._p = new Promise(function(p, C) {
            y.onload = p, y.onerror = C;
          }), y.addEventListener("load", function() {
            d.loading |= 1;
          }), y.addEventListener("error", function() {
            d.loading |= 2;
          }), d.loading |= 4, vf(f, t, a);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: d
        }, n.set(u, f);
      }
    }
  }
  function Fb(e, t) {
    Pl.X(e, t);
    var l = nu;
    if (l && e) {
      var a = Hl(l).hoistableScripts, n = iu(e), u = a.get(n);
      u || (u = l.querySelector(Si(n)), u || (e = G({ src: e, async: !0 }, t), (t = It.get(n)) && ds(e, t), u = l.createElement("script"), Ve(u), ft(u, "link", e), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function e1(e, t) {
    Pl.M(e, t);
    var l = nu;
    if (l && e) {
      var a = Hl(l).hoistableScripts, n = iu(e), u = a.get(n);
      u || (u = l.querySelector(Si(n)), u || (e = G({ src: e, async: !0, type: "module" }, t), (t = It.get(n)) && ds(e, t), u = l.createElement("script"), Ve(u), ft(u, "link", e), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function Iy(e, t, l, a) {
    var n = (n = dl.current) ? mi(n) : null;
    if (!n) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (l = uu(l.href), t = Hl(
          n
        ).hoistableStyles, a = t.get(l), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(l, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = uu(l.href);
          var u = Hl(
            n
          ).hoistableStyles, f = u.get(e);
          if (f || (n = n.ownerDocument || n, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, f), (u = n.querySelector(
            gi(e)
          )) ? u._p || (f.instance = u, f.state.loading = 5) : (u = It.get(e), u || (u = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, It.set(e, u)), t1(
            n,
            e,
            u,
            f.state
          ))), t && a === null)
            throw Error(r(528, ""));
          return f;
        }
        if (t && a !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (l = iu(l), t = Hl(
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
  function uu(e) {
    return 'href="' + gt(e) + '"';
  }
  function gi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Fy(e) {
    return G({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function t1(e, t, l, a) {
    if (t = e.querySelector(
      'link[rel="preload"][as="style"][' + t + "]"
    )) {
      if (t[ja] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      t = e.createElement("link"), t[ja] = !0, t.onload = t.onerror = Ou.bind(null, t), ft(t, "link", l), Ve(t), e.head.appendChild(t);
    a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    });
  }
  function iu(e) {
    return '[src="' + gt(e) + '"]';
  }
  function Si(e) {
    return "script[async]" + e;
  }
  function eh(e, t, l) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + gt(l.href) + '"]'
          );
          if (a)
            return t.instance = a, Ve(a), a;
          var n = G({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), Ve(a), ft(a, "style", n), vf(a, l.precedence, e), t.instance = a;
        case "stylesheet":
          n = uu(l.href);
          var u = e.querySelector(
            gi(n)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, Ve(u), u;
          a = Fy(l), (n = It.get(n)) && ss(a, n), u = (e.ownerDocument || e).createElement("link"), Ve(u);
          var f = u;
          return f._p = new Promise(function(d, y) {
            f.onload = d, f.onerror = y;
          }), ft(u, "link", a), t.state.loading |= 4, vf(u, l.precedence, e), t.instance = u;
        case "script":
          return u = iu(l.src), (n = e.querySelector(
            Si(u)
          )) ? (t.instance = n, Ve(n), n) : (a = l, (n = It.get(u)) && (a = G({}, l), ds(a, n)), e = e.ownerDocument || e, n = e.createElement("script"), Ve(n), ft(n, "link", a), e.head.appendChild(n), t.instance = n);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, vf(a, l.precedence, e));
    return t.instance;
  }
  function vf(e, t, l) {
    for (var a = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, u = n, f = 0; f < a.length; f++) {
      var d = a[f];
      if (d.dataset.precedence === t) u = d;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
  }
  function ss(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function ds(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var yf = null;
  function th(e, t, l) {
    if (yf === null) {
      var a = /* @__PURE__ */ new Map(), n = yf = /* @__PURE__ */ new Map();
      n.set(l, a);
    } else
      n = yf, a = n.get(l), a || (a = /* @__PURE__ */ new Map(), n.set(l, a));
    if (a.has(e)) return a;
    for (a.set(e, null), l = l.getElementsByTagName(e), n = 0; n < l.length; n++) {
      var u = l[n];
      if (!(u[ua] || u[Ze] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = u.getAttribute(t) || "";
        f = e + f;
        var d = a.get(f);
        d ? d.push(u) : a.set(f, [u]);
      }
    }
    return a;
  }
  function vs(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(
      l,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function l1(e, t, l) {
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
  function lh(e, t) {
    return e === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
  }
  function ah(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function nh(e) {
    return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function uh(e, t) {
    typeof t.decode == "function" && (e.imgCount++, t.complete || (e.imgBytes += nh(t), e.suspenseyImages.push(t)), e = u1.bind(e), t.decode().then(e, e));
  }
  function a1(e, t, l, a) {
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var n = uu(a.href), u = t.querySelector(
          gi(n)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = bi.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = u, Ve(u);
          return;
        }
        u = t.ownerDocument || t, a = Fy(a), (n = It.get(n)) && ss(a, n), u = u.createElement("link"), Ve(u);
        var f = u;
        f._p = new Promise(function(d, y) {
          f.onload = d, f.onerror = y;
        }), ft(u, "link", a), l.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = bi.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  var hf = 0;
  function n1(e, t) {
    return e.stylesheets && e.count === 0 && gf(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var a = setTimeout(function() {
        if (e.stylesheets && gf(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && hf === 0 && (hf = 62500 * Tb());
      var n = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && gf(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > hf ? 50 : 800) + t
      );
      return e.unsuspend = l, function() {
        e.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function ih(e) {
    if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
      if (e.stylesheets) gf(e, e.stylesheets);
      else if (e.unsuspend) {
        var t = e.unsuspend;
        e.unsuspend = null, t();
      }
    }
  }
  function bi() {
    this.count--, ih(this);
  }
  function u1() {
    this.imgCount--, ih(this);
  }
  var mf = null;
  function gf(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, mf = /* @__PURE__ */ new Map(), t.forEach(i1, e), mf = null, bi.call(e));
  }
  function i1(e, t) {
    if (!(t.state.loading & 4)) {
      var l = mf.get(e);
      if (l) var a = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), mf.set(e, l);
        for (var n = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < n.length; u++) {
          var f = n[u];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (l.set(f.dataset.precedence, f), a = f);
        }
        a && l.set(null, a);
      }
      n = t.instance, f = n.getAttribute("data-precedence"), u = l.get(f) || a, u === a && l.set(null, n), l.set(f, n), this.count++, a = bi.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), t.state.loading |= 4;
    }
  }
  var ru = {
    $$typeof: De,
    Provider: null,
    Consumer: null,
    _currentValue: el,
    _currentValue2: el,
    _threadCount: 0
  };
  function r1(e, t, l, a, n, u, f, d, y) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Nl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Nl(0), this.hiddenUpdates = Nl(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function rh(e, t, l, a, n, u, f, d, y, p, C, B) {
    return e = new r1(
      e,
      t,
      l,
      f,
      y,
      p,
      C,
      B,
      d
    ), t = 1, u === !0 && (t |= 24), u = Ot(3, null, null, t), e.current = u, u.stateNode = e, t = Cc(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: t
    }, Mc(u), e;
  }
  function fh(e) {
    return e ? (e = Bn, e) : Bn;
  }
  function ch(e, t, l, a, n, u) {
    n = fh(n), a.context === null ? a.context = n : a.pendingContext = n, a = ma(t), a.payload = { element: l }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = ga(e, a, t), l !== null && (xt(l, e, t), Pu(l, e, t));
  }
  function oh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function ys(e, t) {
    oh(e, t), (e = e.alternate) && oh(e, t);
  }
  function sh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ja(e, 67108864);
      t !== null && xt(t, e, 67108864), ys(e, 67108864);
    }
  }
  function dh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Lt();
      t = Tn(t);
      var l = Ja(e, t);
      l !== null && xt(l, e, t), ys(e, t);
    }
  }
  var fu = !0;
  function f1(e, t, l, a) {
    var n = P.T;
    P.T = null;
    var u = ae.p;
    try {
      ae.p = 2, hs(e, t, l, a);
    } finally {
      ae.p = u, P.T = n;
    }
  }
  function c1(e, t, l, a) {
    var n = P.T;
    P.T = null;
    var u = ae.p;
    try {
      ae.p = 8, hs(e, t, l, a);
    } finally {
      ae.p = u, P.T = n;
    }
  }
  function hs(e, t, l, a) {
    if (fu) {
      var n = ms(a);
      if (n === null)
        Po(
          e,
          t,
          a,
          Sf,
          l
        ), yh(e, a);
      else if (s1(
        n,
        e,
        t,
        l,
        a
      ))
        a.stopPropagation();
      else if (yh(e, a), t & 4 && -1 < o1.indexOf(e)) {
        for (; n !== null; ) {
          var u = Ul(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var f = Gt(u.pendingLanes);
                  if (f !== 0) {
                    var d = u;
                    for (d.pendingLanes |= 2, d.entangledLanes |= 2; f; ) {
                      var y = 1 << 31 - mt(f);
                      d.entanglements[1] |= y, f &= ~y;
                    }
                    Al(u), (Te & 6) === 0 && (lf = yt() + 500, di(0));
                  }
                }
                break;
              case 31:
              case 13:
                d = Ja(u, 2), d !== null && xt(d, u, 2), uf(), ys(u, 2);
            }
          if (u = ms(a), u === null && Po(
            e,
            t,
            a,
            Sf,
            l
          ), u === n) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else
        Po(
          e,
          t,
          a,
          null,
          l
        );
    }
  }
  function ms(e) {
    return e = ec(e), gs(e);
  }
  var Sf = null;
  function gs(e) {
    if (Sf = null, e = yl(e), e !== null) {
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
    return Sf = e, null;
  }
  function vh(e) {
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
        switch (Gi()) {
          case Xi:
            return 2;
          case Su:
            return 8;
          case bn:
          case Vi:
            return 32;
          case Qi:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ss = !1, za = null, Da = null, Ma = null, Ei = /* @__PURE__ */ new Map(), pi = /* @__PURE__ */ new Map(), Na = [], o1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function yh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        za = null;
        break;
      case "dragenter":
      case "dragleave":
        Da = null;
        break;
      case "mouseover":
      case "mouseout":
        Ma = null;
        break;
      case "pointerover":
      case "pointerout":
        Ei.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        pi.delete(t.pointerId);
    }
  }
  function Ti(e, t, l, a, n, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [n]
    }, t !== null && (t = Ul(t), t !== null && sh(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), e);
  }
  function s1(e, t, l, a, n) {
    switch (t) {
      case "focusin":
        return za = Ti(
          za,
          e,
          t,
          l,
          a,
          n
        ), !0;
      case "dragenter":
        return Da = Ti(
          Da,
          e,
          t,
          l,
          a,
          n
        ), !0;
      case "mouseover":
        return Ma = Ti(
          Ma,
          e,
          t,
          l,
          a,
          n
        ), !0;
      case "pointerover":
        var u = n.pointerId;
        return Ei.set(
          u,
          Ti(
            Ei.get(u) || null,
            e,
            t,
            l,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return u = n.pointerId, pi.set(
          u,
          Ti(
            pi.get(u) || null,
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
  function hh(e) {
    var t = yl(e.target);
    if (t !== null) {
      var l = v(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = h(l), t !== null) {
            e.blockedOn = t, pu(e.priority, function() {
              dh(l);
            });
            return;
          }
        } else if (t === 31) {
          if (t = T(l), t !== null) {
            e.blockedOn = t, pu(e.priority, function() {
              dh(l);
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
  function bf(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = ms(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(
          l.type,
          l
        );
        Ff = a, l.target.dispatchEvent(a), Ff = null;
      } else
        return t = Ul(l), t !== null && sh(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function mh(e, t, l) {
    bf(e) && l.delete(t);
  }
  function d1() {
    Ss = !1, za !== null && bf(za) && (za = null), Da !== null && bf(Da) && (Da = null), Ma !== null && bf(Ma) && (Ma = null), Ei.forEach(mh), pi.forEach(mh);
  }
  function Ef(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ss || (Ss = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      d1
    )));
  }
  var pf = null;
  function gh(e) {
    pf !== e && (pf = e, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        pf === e && (pf = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], a = e[t + 1], n = e[t + 2];
          if (typeof a != "function") {
            if (gs(a || l) === null)
              continue;
            break;
          }
          var u = Ul(l);
          u !== null && (e.splice(t, 3), t -= 3, Ic(
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
  function cu(e) {
    function t(y) {
      return Ef(y, e);
    }
    za !== null && Ef(za, e), Da !== null && Ef(Da, e), Ma !== null && Ef(Ma, e), Ei.forEach(t), pi.forEach(t);
    for (var l = 0; l < Na.length; l++) {
      var a = Na[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Na.length && (l = Na[0], l.blockedOn === null); )
      hh(l), l.blockedOn === null && Na.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var n = l[a], u = l[a + 1], f = n[at] || null;
        if (typeof u == "function")
          f || gh(l);
        else if (f) {
          var d = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, f = u[at] || null)
              d = f.formAction;
            else if (gs(n) !== null) continue;
          } else d = f.action;
          typeof d == "function" ? l[a + 1] = d : (l.splice(a, 3), a -= 3), gh(l);
        }
      }
  }
  function Sh() {
    function e(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(f) {
            return n = f;
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
  function bs(e) {
    this._internalRoot = e;
  }
  Tf.prototype.render = bs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var l = t.current, a = Lt();
    ch(l, a, e, t, null, null);
  }, Tf.prototype.unmount = bs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      ch(e.current, 2, null, e, null, null), uf(), t[Bl] = null;
    }
  };
  function Tf(e) {
    this._internalRoot = e;
  }
  Tf.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Eu();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Na.length && t !== 0 && t < Na[l].priority; l++) ;
      Na.splice(l, 0, e), l === 0 && hh(e);
    }
  };
  var bh = c.version;
  if (bh !== "19.3.0")
    throw Error(
      r(
        527,
        bh,
        "19.3.0"
      )
    );
  ae.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
    return e = A(t), e = e !== null ? x(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var v1 = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: P,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Rf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Rf.isDisabled && Rf.supportsFiber)
      try {
        la = Rf.inject(
          v1
        ), ht = Rf;
      } catch {
      }
  }
  return Ri.createRoot = function(e, t) {
    if (!s(e)) throw Error(r(299));
    var l = !1, a = "", n = f0, u = c0, f = o0;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = rh(
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
      f,
      Sh
    ), e[Bl] = t.current, Wo(e), new bs(t);
  }, Ri.hydrateRoot = function(e, t, l) {
    if (!s(e)) throw Error(r(299));
    var a = !1, n = "", u = f0, f = c0, d = o0, y = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (f = l.onCaughtError), l.onRecoverableError !== void 0 && (d = l.onRecoverableError), l.formState !== void 0 && (y = l.formState)), t = rh(
      e,
      1,
      !0,
      t,
      l ?? null,
      a,
      n,
      y,
      u,
      f,
      d,
      Sh
    ), t.context = fh(null), l = t.current, a = Lt(), a = Tn(a), n = ma(a), n.callback = null, ga(l, n, a), l = a, t.current.lanes = l, na(t, l), Al(t), e[Bl] = t.current, Wo(e), new Tf(t);
  }, Ri.version = "19.3.0", Ri;
}
var Ch;
function p1() {
  if (Ch) return ps.exports;
  Ch = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (c) {
        console.error(c);
      }
  }
  return i(), ps.exports = E1(), ps.exports;
}
var Dm = p1(), T1 = (i) => i.disabled || Array.isArray(i.accessibilityStates) && i.accessibilityStates.indexOf("disabled") > -1, R1 = {
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
}, Mm = (i) => {
  var c = i.accessibilityRole, o = i.role, r = o || c;
  if (r) {
    var s = R1[r];
    if (s !== null)
      return s || r;
  }
}, O1 = {
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
}, _1 = {}, A1 = function(c) {
  c === void 0 && (c = _1);
  var o = c.role || c.accessibilityRole;
  if (o === "label")
    return "label";
  var r = Mm(c);
  if (r) {
    if (r === "heading") {
      var s = c.accessibilityLevel || c["aria-level"];
      return s != null ? "h" + s : "h1";
    }
    return O1[r];
  }
}, Nm = {
  isDisabled: T1,
  propsToAccessibilityComponent: A1,
  propsToAriaRole: Mm
};
function Ui(i) {
  "@babel/helpers - typeof";
  return Ui = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(c) {
    return typeof c;
  } : function(c) {
    return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c;
  }, Ui(i);
}
function C1(i, c) {
  if (Ui(i) != "object" || !i) return i;
  var o = i[Symbol.toPrimitive];
  if (o !== void 0) {
    var r = o.call(i, c);
    if (Ui(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (c === "string" ? String : Number)(i);
}
function x1(i) {
  var c = C1(i, "string");
  return Ui(c) == "symbol" ? c : c + "";
}
function z1(i, c, o) {
  return (c = x1(c)) in i ? Object.defineProperty(i, c, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : i[c] = o, i;
}
function xh(i, c) {
  var o = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    c && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(i, s).enumerable;
    })), o.push.apply(o, r);
  }
  return o;
}
function wa(i) {
  for (var c = 1; c < arguments.length; c++) {
    var o = arguments[c] != null ? arguments[c] : {};
    c % 2 ? xh(Object(o), !0).forEach(function(r) {
      z1(i, r, o[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : xh(Object(o)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(o, r));
    });
  }
  return i;
}
function du(i, c) {
  if (i == null) return {};
  var o = {};
  for (var r in i) if ({}.hasOwnProperty.call(i, r)) {
    if (c.indexOf(r) !== -1) continue;
    o[r] = i[r];
  }
  return o;
}
var Lf = {
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
}, D1 = ["ms", "Moz", "O", "Webkit"], M1 = (i, c) => i + c.charAt(0).toUpperCase() + c.substring(1);
Object.keys(Lf).forEach((i) => {
  D1.forEach((c) => {
    Lf[M1(c, i)] = Lf[i];
  });
});
var N1 = (i) => i === "currentcolor" || i === "currentColor" || i === "inherit" || i.indexOf("var(") === 0, _s, zh;
function B1() {
  if (zh) return _s;
  zh = 1;
  function i(M) {
    if (typeof M == "number")
      return M >>> 0 === M && M >= 0 && M <= 4294967295 ? M : null;
    if (typeof M != "string")
      return null;
    const H = x();
    let D;
    if (D = H.hex6.exec(M))
      return parseInt(D[1] + "ff", 16) >>> 0;
    const F = j(M);
    return F ?? ((D = H.rgb.exec(M)) ? (m(D[1]) << 24 | // r
    m(D[2]) << 16 | // g
    m(D[3]) << 8 | // b
    255) >>> // a
    0 : (D = H.rgba.exec(M)) ? D[6] !== void 0 ? (m(D[6]) << 24 | // r
    m(D[7]) << 16 | // g
    m(D[8]) << 8 | // b
    q(D[9])) >>> // a
    0 : (m(D[2]) << 24 | // r
    m(D[3]) << 16 | // g
    m(D[4]) << 8 | // b
    q(D[5])) >>> // a
    0 : (D = H.hex3.exec(M)) ? parseInt(
      D[1] + D[1] + // r
      D[2] + D[2] + // g
      D[3] + D[3] + // b
      "ff",
      // a
      16
    ) >>> 0 : (D = H.hex8.exec(M)) ? parseInt(D[1], 16) >>> 0 : (D = H.hex4.exec(M)) ? parseInt(
      D[1] + D[1] + // r
      D[2] + D[2] + // g
      D[3] + D[3] + // b
      D[4] + D[4],
      // a
      16
    ) >>> 0 : (D = H.hsl.exec(M)) ? (o(
      z(D[1]),
      // h
      L(D[2]),
      // s
      L(D[3])
      // l
    ) | 255) >>> // a
    0 : (D = H.hsla.exec(M)) ? D[6] !== void 0 ? (o(
      z(D[6]),
      // h
      L(D[7]),
      // s
      L(D[8])
      // l
    ) | q(D[9])) >>> // a
    0 : (o(
      z(D[2]),
      // h
      L(D[3]),
      // s
      L(D[4])
      // l
    ) | q(D[5])) >>> // a
    0 : (D = H.hwb.exec(M)) ? (r(
      z(D[1]),
      // h
      L(D[2]),
      // w
      L(D[3])
      // b
    ) | 255) >>> // a
    0 : null);
  }
  function c(M, H, D) {
    return D < 0 && (D += 1), D > 1 && (D -= 1), D < 1 / 6 ? M + (H - M) * 6 * D : D < 1 / 2 ? H : D < 2 / 3 ? M + (H - M) * (2 / 3 - D) * 6 : M;
  }
  function o(M, H, D) {
    const F = D < 0.5 ? D * (1 + H) : D + H - D * H, te = 2 * D - F, V = c(te, F, M + 1 / 3), J = c(te, F, M), G = c(te, F, M - 1 / 3);
    return Math.round(V * 255) << 24 | Math.round(J * 255) << 16 | Math.round(G * 255) << 8;
  }
  function r(M, H, D) {
    if (H + D >= 1) {
      const J = Math.round(H * 255 / (H + D));
      return J << 24 | J << 16 | J << 8;
    }
    const F = c(0, 1, M + 1 / 3) * (1 - H - D) + H, te = c(0, 1, M) * (1 - H - D) + H, V = c(0, 1, M - 1 / 3) * (1 - H - D) + H;
    return Math.round(F * 255) << 24 | Math.round(te * 255) << 16 | Math.round(V * 255) << 8;
  }
  const s = "[-+]?\\d*\\.?\\d+", v = s + "%";
  function h(...M) {
    return "\\(\\s*(" + M.join(")\\s*,?\\s*(") + ")\\s*\\)";
  }
  function T(...M) {
    return "\\(\\s*(" + M.slice(0, M.length - 1).join(")\\s*,?\\s*(") + ")\\s*/\\s*(" + M[M.length - 1] + ")\\s*\\)";
  }
  function _(...M) {
    return "\\(\\s*(" + M.join(")\\s*,\\s*(") + ")\\s*\\)";
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
  function m(M) {
    const H = parseInt(M, 10);
    return H < 0 ? 0 : H > 255 ? 255 : H;
  }
  function z(M) {
    return (parseFloat(M) % 360 + 360) % 360 / 360;
  }
  function q(M) {
    const H = parseFloat(M);
    return H < 0 ? 0 : H > 1 ? 255 : Math.round(H * 255);
  }
  function L(M) {
    const H = parseFloat(M);
    return H < 0 ? 0 : H > 100 ? 1 : H / 100;
  }
  function j(M) {
    switch (M) {
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
  return _s = i, _s;
}
var U1 = B1();
const H1 = /* @__PURE__ */ $l(U1);
var w1 = (i) => {
  if (i == null)
    return i;
  var c = H1(i);
  if (c != null)
    return c = (c << 24 | c >>> 8) >>> 0, c;
}, gd = function(c, o) {
  if (o === void 0 && (o = 1), c != null) {
    if (typeof c == "string" && N1(c))
      return c;
    var r = w1(c);
    if (r != null) {
      var s = r >> 16 & 255, v = r >> 8 & 255, h = r & 255, T = (r >> 24 & 255) / 255, _ = (T * o).toFixed(2);
      return "rgba(" + s + "," + v + "," + h + "," + _ + ")";
    }
  }
}, L1 = {
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
function Rt(i, c) {
  var o = i;
  return (c == null || !Lf[c]) && typeof i == "number" ? o = i + "px" : c != null && L1[c] && (o = gd(i)), o;
}
var Il = !!(typeof window < "u" && window.document && window.document.createElement), q1 = {}, Y1 = !Il || window.CSS != null && window.CSS.supports != null && (window.CSS.supports("text-decoration-line", "none") || window.CSS.supports("-webkit-text-decoration-line", "none")), j1 = "monospace,monospace", Dh = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif', G1 = {
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
}, Bm = (i, c) => {
  if (!i)
    return q1;
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
      o[s] = T.replace("System", Dh);
    else if (s === "fontFamily")
      if (T.indexOf("System") > -1) {
        var _ = T.split(/,\s*/);
        _[_.indexOf("System")] = Dh, o[s] = _.join(",");
      } else T === "monospace" ? o[s] = j1 : o[s] = T;
    else if (s === "textDecorationLine")
      Y1 ? o.textDecorationLine = T : o.textDecoration = T;
    else if (s === "writingDirection")
      o.direction = T;
    else {
      var A = Rt(i[s], s), x = G1[s];
      c && s === "inset" ? (i.insetInline == null && (o.left = A, o.right = A), i.insetBlock == null && (o.top = A, o.bottom = A)) : c && s === "margin" ? (i.marginInline == null && (o.marginLeft = A, o.marginRight = A), i.marginBlock == null && (o.marginTop = A, o.marginBottom = A)) : c && s === "padding" ? (i.paddingInline == null && (o.paddingLeft = A, o.paddingRight = A), i.paddingBlock == null && (o.paddingTop = A, o.paddingBottom = A)) : x ? x.forEach((m, z) => {
        i[m] == null && (o[m] = A);
      }) : o[s] = A;
    }
  };
  for (var s in i)
    var v = r();
  return o;
};
function X1(i, c) {
  for (var o = i.length, r = c ^ o, s = 0, v; o >= 4; )
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
var V1 = (i) => X1(i, 1).toString(36), Q1 = /[A-Z]/g, Z1 = /^ms-/, As = {};
function K1(i) {
  return "-" + i.toLowerCase();
}
function J1(i) {
  if (i in As)
    return As[i];
  var c = i.replace(Q1, K1);
  return As[i] = Z1.test(c) ? "-" + c : c;
}
var Of = {}, _f = {}, Af = {}, Mh;
function Um() {
  if (Mh) return Af;
  Mh = 1, Object.defineProperty(Af, "__esModule", {
    value: !0
  }), Af.default = i;
  function i(c) {
    return c.charAt(0).toUpperCase() + c.slice(1);
  }
  return Af;
}
var Nh;
function k1() {
  if (Nh) return _f;
  Nh = 1, Object.defineProperty(_f, "__esModule", {
    value: !0
  }), _f.default = r;
  var i = Um(), c = o(i);
  function o(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function r(s, v, h) {
    var T = s[v];
    if (T && h.hasOwnProperty(v))
      for (var _ = (0, c.default)(v), A = 0; A < T.length; ++A) {
        var x = T[A] + _;
        h[x] || (h[x] = h[v]);
      }
    return h;
  }
  return _f;
}
var Cf = {}, Bh;
function W1() {
  if (Bh) return Cf;
  Bh = 1, Object.defineProperty(Cf, "__esModule", {
    value: !0
  }), Cf.default = i;
  function i(c, o, r, s, v) {
    for (var h = 0, T = c.length; h < T; ++h) {
      var _ = c[h](o, r, s, v);
      if (_)
        return _;
    }
  }
  return Cf;
}
var xf = {}, Uh;
function P1() {
  if (Uh) return xf;
  Uh = 1, Object.defineProperty(xf, "__esModule", {
    value: !0
  }), xf.default = c;
  function i(o, r) {
    o.indexOf(r) === -1 && o.push(r);
  }
  function c(o, r) {
    if (Array.isArray(r))
      for (var s = 0, v = r.length; s < v; ++s)
        i(o, r[s]);
    else
      i(o, r);
  }
  return xf;
}
var zf = {}, Hh;
function $1() {
  if (Hh) return zf;
  Hh = 1, Object.defineProperty(zf, "__esModule", {
    value: !0
  }), zf.default = i;
  function i(c) {
    return c instanceof Object && !Array.isArray(c);
  }
  return zf;
}
var wh;
function I1() {
  if (wh) return Of;
  wh = 1, Object.defineProperty(Of, "__esModule", {
    value: !0
  }), Of.default = A;
  var i = k1(), c = _(i), o = W1(), r = _(o), s = P1(), v = _(s), h = $1(), T = _(h);
  function _(x) {
    return x && x.__esModule ? x : { default: x };
  }
  function A(x) {
    var m = x.prefixMap, z = x.plugins;
    return function q(L) {
      for (var j in L) {
        var M = L[j];
        if ((0, T.default)(M))
          L[j] = q(M);
        else if (Array.isArray(M)) {
          for (var H = [], D = 0, F = M.length; D < F; ++D) {
            var te = (0, r.default)(z, j, M[D], L, m);
            (0, v.default)(H, te || M[D]);
          }
          H.length > 0 && (L[j] = H);
        } else {
          var V = (0, r.default)(z, j, M, L, m);
          V && (L[j] = V), L = (0, c.default)(m, j, L);
        }
      }
      return L;
    };
  }
  return Of;
}
var F1 = I1();
const eE = /* @__PURE__ */ $l(F1);
var Df = {};
function qf(i) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? qf = function(o) {
    return typeof o;
  } : qf = function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, qf(i);
}
function tE(i) {
  return uE(i) || nE(i) || aE(i) || lE();
}
function lE() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function aE(i, c) {
  if (i) {
    if (typeof i == "string") return Qs(i, c);
    var o = Object.prototype.toString.call(i).slice(8, -1);
    if (o === "Object" && i.constructor && (o = i.constructor.name), o === "Map" || o === "Set") return Array.from(o);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return Qs(i, c);
  }
}
function nE(i) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(i)) return Array.from(i);
}
function uE(i) {
  if (Array.isArray(i)) return Qs(i);
}
function Qs(i, c) {
  (c == null || c > i.length) && (c = i.length);
  for (var o = 0, r = new Array(c); o < c; o++)
    r[o] = i[o];
  return r;
}
function Lh(i) {
  return i.filter(function(c, o) {
    return i.lastIndexOf(c) === o;
  });
}
function Hm(i) {
  for (var c = 0, o = arguments.length <= 1 ? 0 : arguments.length - 1; c < o; ++c) {
    var r = c + 1 < 1 || arguments.length <= c + 1 ? void 0 : arguments[c + 1];
    for (var s in r) {
      var v = r[s], h = i[s];
      if (h && v) {
        if (Array.isArray(h)) {
          i[s] = Lh(h.concat(v));
          continue;
        }
        if (Array.isArray(v)) {
          i[s] = Lh([h].concat(tE(v)));
          continue;
        }
        if (qf(v) === "object") {
          i[s] = Hm({}, h, v);
          continue;
        }
      }
      i[s] = v;
    }
  }
  return i;
}
var iE = /-([a-z])/g, rE = /^Ms/g, Cs = {};
function fE(i) {
  return i[1].toUpperCase();
}
function wm(i) {
  if (Cs.hasOwnProperty(i))
    return Cs[i];
  var c = i.replace(iE, fE).replace(rE, "ms");
  return Cs[i] = c, c;
}
var cE = /[A-Z]/g, oE = /^ms-/, xs = {};
function sE(i) {
  return "-" + i.toLowerCase();
}
function Lm(i) {
  if (xs.hasOwnProperty(i))
    return xs[i];
  var c = i.replace(cE, sE);
  return xs[i] = oE.test(c) ? "-" + c : c;
}
const dE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Lm
}, Symbol.toStringTag, { value: "Module" }));
function Jf(i) {
  return Lm(i);
}
function qm(i, c) {
  return Jf(i) + ":" + c;
}
function vE(i) {
  var c = "";
  for (var o in i) {
    var r = i[o];
    typeof r != "string" && typeof r != "number" || (c && (c += ";"), c += qm(o, r));
  }
  return c;
}
var yE = /^(Webkit|Moz|O|ms)/;
function hE(i) {
  return yE.test(i);
}
var mE = /-webkit-|-moz-|-ms-/;
function gE(i) {
  return typeof i == "string" && mE.test(i);
}
var Hi = {
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
}, qh = ["animationIterationCount", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "order"], Yh = ["Webkit", "ms", "Moz", "O"];
function SE(i, c) {
  return i + c.charAt(0).toUpperCase() + c.slice(1);
}
for (var zs = 0, bE = qh.length; zs < bE; ++zs) {
  var jh = qh[zs];
  Hi[jh] = !0;
  for (var Ds = 0, EE = Yh.length; Ds < EE; ++Ds)
    Hi[SE(Yh[Ds], jh)] = !0;
}
for (var pE in Hi)
  Hi[Jf(pE)] = !0;
function TE(i) {
  return Hi.hasOwnProperty(i);
}
var RE = /^(ms|Webkit|Moz|O)/;
function Ym(i) {
  var c = i.replace(RE, "");
  return c.charAt(0).toLowerCase() + c.slice(1);
}
function OE(i) {
  return Ym(wm(i));
}
function _E(i, c) {
  return c.join(";" + Jf(i) + ":");
}
var AE = /(-ms-|-webkit-|-moz-|-o-)/g;
function CE(i) {
  return typeof i == "string" ? i.replace(AE, "") : i;
}
const xE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  assignStyle: Hm,
  camelCaseProperty: wm,
  cssifyDeclaration: qm,
  cssifyObject: vE,
  hyphenateProperty: Jf,
  isPrefixedProperty: hE,
  isPrefixedValue: gE,
  isUnitlessProperty: TE,
  normalizeProperty: OE,
  resolveArrayValue: _E,
  unprefixProperty: Ym,
  unprefixValue: CE
}, Symbol.toStringTag, { value: "Module" })), zE = /* @__PURE__ */ zm(xE);
var Gh;
function DE() {
  if (Gh) return Df;
  Gh = 1, Object.defineProperty(Df, "__esModule", {
    value: !0
  }), Df.default = r;
  var i = zE, c = /cross-fade\(/g, o = ["-webkit-", ""];
  function r(s, v) {
    if (typeof v == "string" && !(0, i.isPrefixedValue)(v) && v.indexOf("cross-fade(") !== -1)
      return o.map(function(h) {
        return v.replace(c, h + "cross-fade(");
      });
  }
  return Df;
}
var ME = DE();
const NE = /* @__PURE__ */ $l(ME);
var Mf = {}, Ms = {}, Xh;
function jm() {
  return Xh || (Xh = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = o;
    var c = /-webkit-|-moz-|-ms-/;
    function o(r) {
      return typeof r == "string" && c.test(r);
    }
  })(Ms)), Ms;
}
var Vh;
function BE() {
  if (Vh) return Mf;
  Vh = 1, Object.defineProperty(Mf, "__esModule", {
    value: !0
  }), Mf.default = s;
  var i = /* @__PURE__ */ jm(), c = o(i);
  function o(v) {
    return v && v.__esModule ? v : { default: v };
  }
  var r = ["-webkit-", ""];
  function s(v, h) {
    if (typeof h == "string" && !(0, c.default)(h) && h.indexOf("image-set(") > -1)
      return r.map(function(T) {
        return h.replace(/image-set\(/g, T + "image-set(");
      });
  }
  return Mf;
}
var UE = BE();
const HE = /* @__PURE__ */ $l(UE);
var Nf = {}, Qh;
function wE() {
  if (Qh) return Nf;
  Qh = 1, Object.defineProperty(Nf, "__esModule", {
    value: !0
  }), Nf.default = c;
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
  function c(o, r, s) {
    if (Object.prototype.hasOwnProperty.call(i, o))
      for (var v = i[o], h = 0, T = v.length; h < T; ++h)
        s[v[h]] = r;
  }
  return Nf;
}
var LE = wE();
const qE = /* @__PURE__ */ $l(LE);
var Bf = {}, Zh;
function YE() {
  if (Zh) return Bf;
  Zh = 1, Object.defineProperty(Bf, "__esModule", {
    value: !0
  }), Bf.default = i;
  function i(c, o) {
    if (c === "position" && o === "sticky")
      return ["-webkit-sticky", "sticky"];
  }
  return Bf;
}
var jE = YE();
const GE = /* @__PURE__ */ $l(jE);
var Uf = {}, Kh;
function XE() {
  if (Kh) return Uf;
  Kh = 1, Object.defineProperty(Uf, "__esModule", {
    value: !0
  }), Uf.default = r;
  var i = ["-webkit-", "-moz-", ""], c = {
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
    if (c.hasOwnProperty(s) && o.hasOwnProperty(v))
      return i.map(function(h) {
        return h + v;
      });
  }
  return Uf;
}
var VE = XE();
const QE = /* @__PURE__ */ $l(VE);
var Hf = {}, Ns = {};
const ZE = /* @__PURE__ */ zm(dE);
var Jh;
function KE() {
  return Jh || (Jh = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = s;
    var c = ZE, o = r(c);
    function r(v) {
      return v && v.__esModule ? v : { default: v };
    }
    function s(v) {
      return (0, o.default)(v);
    }
  })(Ns)), Ns;
}
var kh;
function JE() {
  if (kh) return Hf;
  kh = 1, Object.defineProperty(Hf, "__esModule", {
    value: !0
  }), Hf.default = x;
  var i = /* @__PURE__ */ KE(), c = h(i), o = /* @__PURE__ */ jm(), r = h(o), s = Um(), v = h(s);
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
      var M = q[L], H = [M];
      for (var D in z) {
        var F = (0, c.default)(D);
        if (M.indexOf(F) > -1 && F !== "order")
          for (var te = z[D], V = 0, J = te.length; V < J; ++V)
            H.unshift(M.replace(F, _[te[V]] + F));
      }
      q[L] = H.join(",");
    }
    return q.join(",");
  }
  function x(m, z, q, L) {
    if (typeof z == "string" && T.hasOwnProperty(m)) {
      var j = A(z, L), M = j.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(D) {
        return !/-moz-|-ms-/.test(D);
      }).join(",");
      if (m.indexOf("Webkit") > -1)
        return M;
      var H = j.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(D) {
        return !/-webkit-|-ms-/.test(D);
      }).join(",");
      return m.indexOf("Moz") > -1 ? H : (q["Webkit" + (0, v.default)(m)] = M, q["Moz" + (0, v.default)(m)] = H, j);
    }
  }
  return Hf;
}
var kE = JE();
const WE = /* @__PURE__ */ $l(kE);
var Be = ["Webkit"], PE = ["Moz"], $E = ["Webkit", "Moz"], Xe = ["Webkit", "ms"], IE = ["Webkit", "Moz", "ms"];
const FE = {
  plugins: [NE, HE, qE, GE, QE, WE],
  prefixMap: {
    appearance: IE,
    userSelect: $E,
    textEmphasisPosition: Xe,
    textEmphasis: Xe,
    textEmphasisStyle: Xe,
    textEmphasisColor: Xe,
    boxDecorationBreak: Xe,
    clipPath: Be,
    maskImage: Xe,
    maskMode: Xe,
    maskRepeat: Xe,
    maskPosition: Xe,
    maskClip: Xe,
    maskOrigin: Xe,
    maskSize: Xe,
    maskComposite: Xe,
    mask: Xe,
    maskBorderSource: Xe,
    maskBorderMode: Xe,
    maskBorderSlice: Xe,
    maskBorderWidth: Xe,
    maskBorderOutset: Xe,
    maskBorderRepeat: Xe,
    maskBorder: Xe,
    maskType: Xe,
    textDecorationStyle: Be,
    textDecorationSkip: Be,
    textDecorationLine: Be,
    textDecorationColor: Be,
    filter: Be,
    breakAfter: Be,
    breakBefore: Be,
    breakInside: Be,
    columnCount: Be,
    columnFill: Be,
    columnGap: Be,
    columnRule: Be,
    columnRuleColor: Be,
    columnRuleStyle: Be,
    columnRuleWidth: Be,
    columns: Be,
    columnSpan: Be,
    columnWidth: Be,
    backdropFilter: Be,
    hyphens: Be,
    flowInto: Be,
    flowFrom: Be,
    regionFragment: Be,
    textOrientation: Be,
    tabSize: PE,
    fontKerning: Be,
    textSizeAdjust: Be
  }
};
var ep = eE(FE), tp = ["animationKeyframes"], Wh = /* @__PURE__ */ new Map(), lp = {}, ap = 1, np = 3, up = {
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
}, Zs = "borderTopLeftRadius", Ks = "borderTopRightRadius", Js = "borderBottomLeftRadius", ks = "borderBottomRightRadius", Ws = "borderLeftColor", Ps = "borderLeftStyle", $s = "borderLeftWidth", Is = "borderRightColor", Fs = "borderRightStyle", ed = "borderRightWidth", td = "right", ld = "marginLeft", ad = "marginRight", nd = "paddingLeft", ud = "paddingRight", id = "left", Vf = {
  [Zs]: Ks,
  [Ks]: Zs,
  [Js]: ks,
  [ks]: Js,
  [Ws]: Is,
  [Ps]: Fs,
  [$s]: ed,
  [Is]: Ws,
  [Fs]: Ps,
  [ed]: $s,
  [id]: td,
  [ld]: ad,
  [ad]: ld,
  [nd]: ud,
  [ud]: nd,
  [td]: id
}, Mi = {
  borderStartStartRadius: Zs,
  borderStartEndRadius: Ks,
  borderEndStartRadius: Js,
  borderEndEndRadius: ks,
  borderInlineStartColor: Ws,
  borderInlineStartStyle: Ps,
  borderInlineStartWidth: $s,
  borderInlineEndColor: Is,
  borderInlineEndStyle: Fs,
  borderInlineEndWidth: ed,
  insetInlineEnd: td,
  insetInlineStart: id,
  marginInlineStart: ld,
  marginInlineEnd: ad,
  paddingInlineStart: nd,
  paddingInlineEnd: ud
}, Gm = ["clear", "float", "textAlign"];
function ip(i) {
  var c = {
    $$css: !0
  }, o = [];
  function r(s, v, h) {
    var T = cp(h, v), _ = v + T, A = Wh.get(_), x;
    if (A != null)
      x = A[0], o.push(A[1]);
    else {
      var m = s !== v ? _ : T;
      x = Sd("r", s, m);
      var z = up[s] || np, q = op(x, v, h), L = [q, z];
      o.push(L), Wh.set(_, [x, L]);
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
      var A = Mi[s];
      if (A != null) {
        var x = r(s, A, v), m = r(s, Vf[A], v);
        h = [x, m];
      }
      if (s === "transitionProperty") {
        for (var z = Array.isArray(v) ? v : [v], q = [], L = 0; L < z.length; L++) {
          var j = z[L];
          typeof j == "string" && Mi[j] != null && q.push(L);
        }
        if (q.length > 0) {
          var M = [...z], H = [...z];
          q.forEach((D) => {
            var F = M[D];
            if (typeof F == "string") {
              var te = Mi[F], V = Vf[te];
              M[D] = te, H[D] = V;
              var J = r(s, s, M), G = r(s, s, H);
              h = [J, G];
            }
          });
        }
      }
      h == null ? h = r(s, s, v) : c.$$css$localize = !0, c[s] = h;
    }
  }), [c, o];
}
function rp(i, c) {
  var o = {
    $$css: !0
  }, r = [], s = i.animationKeyframes, v = du(i, tp), h = Sd("css", c, JSON.stringify(i)), T = "." + h, _;
  if (s != null) {
    var A = Xm(s), x = A[0], m = A[1];
    _ = x.join(","), r.push(...m);
  }
  var z = xl(wa(wa({}, v), {}, {
    animationName: _
  }));
  return r.push("" + T + z), o[h] = h, [o, [[r, ap]]];
}
function fp(i, c) {
  var o = i || lp, r = {}, s = {}, v = function() {
    var A = o[h], x = h, m = A;
    if (!Object.prototype.hasOwnProperty.call(o, h) || A == null)
      return "continue";
    Gm.indexOf(h) > -1 && (A === "start" ? m = c ? "right" : "left" : A === "end" && (m = c ? "left" : "right"));
    var z = Mi[h];
    if (z != null && (x = c ? Vf[z] : z), h === "transitionProperty") {
      var q = Array.isArray(A) ? A : [A];
      q.forEach((L, j) => {
        if (typeof L == "string") {
          var M = Mi[L];
          M != null && (q[j] = c ? Vf[M] : M, m = q.join(" "));
        }
      });
    }
    r[x] || (s[x] = m), x === h && (r[x] = !0);
  };
  for (var h in o)
    var T = v();
  return Bm(s, !0);
}
function cp(i, c) {
  var o = Rt(i, c);
  return typeof o != "string" ? JSON.stringify(o || "") : o;
}
function op(i, c, o) {
  var r = [], s = "." + i;
  switch (c) {
    case "animationKeyframes": {
      var v = Xm(o), h = v[0], T = v[1], _ = xl({
        animationName: h.join(",")
      });
      r.push("" + s + _, ...T);
      break;
    }
    // Equivalent to using '::placeholder'
    case "placeholderTextColor": {
      var A = xl({
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
        var m = xl({
          pointerEvents: "none"
        });
        r.push(s + ">* " + m);
      } else if (o === "box-none") {
        x = "none!important";
        var z = xl({
          pointerEvents: "auto"
        });
        r.push(s + ">* " + z);
      } else if (o === "box-only") {
        x = "auto!important";
        var q = xl({
          pointerEvents: "none"
        });
        r.push(s + ">* " + q);
      }
      var L = xl({
        pointerEvents: x
      });
      r.push("" + s + L);
      break;
    }
    // Polyfill for draft spec
    // https://drafts.csswg.org/css-scrollbars-1/
    case "scrollbarWidth": {
      o === "none" && r.push(s + "::-webkit-scrollbar{display:none}");
      var j = xl({
        scrollbarWidth: o
      });
      r.push("" + s + j);
      break;
    }
    default: {
      var M = xl({
        [c]: o
      });
      r.push("" + s + M);
      break;
    }
  }
  return r;
}
function xl(i) {
  var c = ep(Bm(i)), o = Object.keys(c).map((r) => {
    var s = c[r], v = J1(r);
    return Array.isArray(s) ? s.map((h) => v + ":" + h).join(";") : v + ":" + s;
  }).sort().join(";");
  return "{" + o + ";}";
}
function Sd(i, c, o) {
  var r = V1(c + o);
  return i + "-" + r;
}
function sp(i) {
  var c = ["-webkit-", ""], o = Sd("r", "animation", JSON.stringify(i)), r = "{" + Object.keys(i).map((v) => {
    var h = i[v], T = xl(h);
    return "" + v + T;
  }).join("") + "}", s = c.map((v) => "@" + v + "keyframes " + o + r);
  return [o, s];
}
function Xm(i) {
  if (typeof i == "number")
    throw new Error("Invalid CSS keyframes type: " + typeof i);
  var c = [], o = [], r = Array.isArray(i) ? i : [i];
  return r.forEach((s) => {
    if (typeof s == "string")
      c.push(s);
    else {
      var v = sp(s), h = v[0], T = v[1];
      c.push(h), o.push(...T);
    }
  }), [c, o];
}
function Bs(i, c, o) {
  if (Il) {
    var r = c ?? document, s = r.getElementById(i);
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
var dp = Array.prototype.slice;
function Us(i) {
  var c = {}, o = {};
  if (i != null) {
    var r;
    dp.call(i.cssRules).forEach((h, T) => {
      var _ = h.cssText;
      if (_.indexOf("stylesheet-group") > -1)
        r = hp(h), c[r] = {
          start: T,
          rules: [_]
        };
      else {
        var A = $h(_);
        A != null && (o[A] = !0, c[r].rules.push(_));
      }
    });
  }
  function s(h, T, _) {
    var A = Ph(c), x = A.indexOf(T), m = x + 1, z = A[m], q = z != null && c[z].start != null ? c[z].start : h.cssRules.length, L = gp(h, _, q);
    if (L) {
      c[T].start == null && (c[T].start = q);
      for (var j = m; j < A.length; j += 1) {
        var M = A[j], H = c[M].start || 0;
        c[M].start = H + 1;
      }
    }
    return L;
  }
  var v = {
    /**
     * The textContent of the style sheet.
     */
    getTextContent() {
      return Ph(c).map((h) => {
        var T = c[h].rules, _ = T.shift();
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
      if (c[_] == null) {
        var A = vp(_);
        c[_] = {
          start: null,
          rules: [A]
        }, i != null && s(i, _, A);
      }
      var x = $h(h);
      if (x != null && o[x] == null && (o[x] = !0, c[_].rules.push(h), i != null)) {
        var m = s(i, _, h);
        m || c[_].rules.pop();
      }
    }
  };
  return v;
}
function vp(i) {
  return '[stylesheet-group="' + i + '"]{}';
}
var yp = /["']/g;
function hp(i) {
  return Number(i.selectorText.split(yp)[1]);
}
function Ph(i) {
  return Object.keys(i).map(Number).sort((c, o) => c > o ? 1 : -1);
}
var mp = /\s*([,])\s*/g;
function $h(i) {
  var c = i.split("{")[0].trim();
  return c !== "" ? c.replace(mp, "$1") : null;
}
function gp(i, c, o) {
  try {
    return i.insertRule(c, o), !0;
  } catch {
    return !1;
  }
}
var Sp = "react-native-stylesheet", Hs = /* @__PURE__ */ new WeakMap(), fl = [], Ih = [
  // minimal top-level reset
  "html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}",
  "body{margin:0;}",
  // minimal form pseudo-element reset
  "button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}",
  "input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}"
];
function bp(i, c) {
  c === void 0 && (c = Sp);
  var o;
  if (Il) {
    var r = document;
    if (fl.length === 0)
      o = Us(Bs(c)), Ih.forEach((T) => {
        o.insert(T, 0);
      }), Hs.set(r, fl.length), fl.push(o);
    else {
      var s = Hs.get(r);
      if (s == null) {
        var v = fl[0], h = v != null ? v.getTextContent() : "";
        o = Us(Bs(c, r, h)), Hs.set(r, fl.length), fl.push(o);
      } else
        o = fl[s];
    }
  } else
    fl.length === 0 ? (o = Us(Bs(c)), Ih.forEach((T) => {
      o.insert(T, 0);
    }), fl.push(o)) : o = fl[0];
  return {
    getTextContent() {
      return o.getTextContent();
    },
    id: c,
    insert(T, _) {
      fl.forEach((A) => {
        A.insert(T, _);
      });
    }
  };
}
var wf = {}, Fh;
function Ep() {
  if (Fh) return wf;
  Fh = 1, Object.defineProperty(wf, "__esModule", {
    value: !0
  }), wf.localizeStyle = r;
  var i = /* @__PURE__ */ new WeakMap(), c = "$$css$localize";
  function o(s, v) {
    var h = {};
    for (var T in s)
      if (T !== c) {
        var _ = s[T];
        Array.isArray(_) ? h[T] = v ? _[1] : _[0] : h[T] = _;
      }
    return h;
  }
  function r(s, v) {
    if (s[c] != null) {
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
  return wf;
}
var ws, em;
function pp() {
  return em || (em = 1, ws = /* @__PURE__ */ Ep()), ws;
}
var Tp = /* @__PURE__ */ pp(), Rp = {}, Vm = {
  height: 0,
  width: 0
}, Op = (i) => {
  var c = i.shadowColor, o = i.shadowOffset, r = i.shadowOpacity, s = i.shadowRadius, v = o || Vm, h = v.height, T = v.width, _ = Rt(T), A = Rt(h), x = Rt(s || 0), m = gd(c || "black", r);
  if (m != null && _ != null && A != null && x != null)
    return _ + " " + A + " " + x + " " + m;
}, _p = (i) => {
  var c = i.textShadowColor, o = i.textShadowOffset, r = i.textShadowRadius, s = o || Vm, v = s.height, h = s.width, T = r || 0, _ = Rt(h), A = Rt(v), x = Rt(T), m = Rt(c, "textShadowColor");
  if (m && (v !== 0 || h !== 0 || T !== 0) && _ != null && A != null && x != null)
    return _ + " " + A + " " + x + " " + m;
}, Ap = (i) => {
  if (typeof i == "string")
    return i;
  var c = Rt(i.offsetX) || 0, o = Rt(i.offsetY) || 0, r = Rt(i.blurRadius) || 0, s = Rt(i.spreadDistance) || 0, v = gd(i.color) || "black", h = i.inset ? "inset " : "";
  return "" + h + c + " " + o + " " + r + " " + s + " " + v;
}, Cp = (i) => i.map(Ap).join(", "), xp = (i) => {
  var c = Object.keys(i)[0], o = i[c];
  if (c === "matrix" || c === "matrix3d")
    return c + "(" + o.join(",") + ")";
  var r = Rt(o, c);
  return c + "(" + r + ")";
}, zp = (i) => i.map(xp).join(" "), Dp = (i) => i.map((c) => Rt(c)).join(" "), Mp = {
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
}, Np = {
  elevation: !0,
  overlayColor: !0,
  resizeMode: !0,
  tintColor: !0
}, Qm = function(c, o) {
  o === void 0 && (o = {});
  var r = c || Rp, s = {};
  if (o.shadow, r.shadowColor != null || r.shadowOffset != null || r.shadowOpacity != null || r.shadowRadius != null) {
    var v = Op(r);
    v != null && (s.boxShadow = v);
  }
  if (o.textShadow, r.textShadowColor != null || r.textShadowOffset != null || r.textShadowRadius != null) {
    var h = _p(r);
    if (h != null && s.textShadow == null) {
      var T = r.textShadow, _ = T ? T + ", " + h : h;
      s.textShadow = _;
    }
  }
  for (var A in r)
    if (
      // Ignore some React Native styles
      !(Np[A] != null || A === "shadowColor" || A === "shadowOffset" || A === "shadowOpacity" || A === "shadowRadius" || A === "textShadowColor" || A === "textShadowOffset" || A === "textShadowRadius")
    ) {
      var x = r[A], m = Mp[A] || A, z = x;
      if (!(!Object.prototype.hasOwnProperty.call(r, A) || m !== A && r[m] != null))
        if (m === "aspectRatio" && typeof z == "number")
          s[m] = z.toString();
        else if (m === "boxShadow") {
          Array.isArray(z) && (z = Cp(z));
          var q = s.boxShadow;
          s.boxShadow = q ? z + ", " + q : z;
        } else m === "fontVariant" ? (Array.isArray(z) && z.length > 0 && (z = z.join(" ")), s[m] = z) : m === "textAlignVertical" ? r.verticalAlign == null && (s.verticalAlign = z === "center" ? "middle" : z) : m === "transform" ? (Array.isArray(z) && (z = zp(z)), s.transform = z) : m === "transformOrigin" ? (Array.isArray(z) && (z = Dp(z)), s.transformOrigin = z) : s[m] = z;
    }
  return s;
}, Oi = {}, tm;
function Bp() {
  if (tm) return Oi;
  tm = 1, Object.defineProperty(Oi, "__esModule", {
    value: !0
  }), Oi.styleq = void 0;
  var i = /* @__PURE__ */ new WeakMap(), c = "$$css";
  function o(s) {
    var v, h, T;
    return s != null && (v = s.disableCache === !0, h = s.disableMix === !0, T = s.transform), function() {
      for (var A = [], x = "", m = null, z = v ? null : i, q = new Array(arguments.length), L = 0; L < arguments.length; L++)
        q[L] = arguments[L];
      for (; q.length > 0; ) {
        var j = q.pop();
        if (!(j == null || j === !1)) {
          if (Array.isArray(j)) {
            for (var M = 0; M < j.length; M++)
              q.push(j[M]);
            continue;
          }
          var H = T != null ? T(j) : j;
          if (H.$$css) {
            var D = "";
            if (z != null && z.has(H)) {
              var F = z.get(H);
              F != null && (D = F[0], A.push.apply(A, F[1]), z = F[2]);
            } else {
              var te = [];
              for (var V in H) {
                var J = H[V];
                V !== c && (typeof J == "string" || J === null ? A.includes(V) || (A.push(V), z != null && te.push(V), typeof J == "string" && (D += D ? " " + J : J)) : console.error("styleq: ".concat(V, " typeof ").concat(String(J), ' is not "string" or "null".')));
              }
              if (z != null) {
                var G = /* @__PURE__ */ new WeakMap();
                z.set(H, [D, te, G]), z = G;
              }
            }
            D && (x = x ? D + " " + x : D);
          } else if (h)
            m == null && (m = {}), m = Object.assign({}, H, m);
          else {
            var k = null;
            for (var Se in H) {
              var se = H[Se];
              se !== void 0 && (A.includes(Se) || (se != null && (m == null && (m = {}), k == null && (k = {}), k[Se] = se), A.push(Se), z = null));
            }
            k != null && (m = Object.assign(k, m));
          }
        }
      }
      var ze = [x, m];
      return ze;
    };
  }
  var r = o();
  return Oi.styleq = r, r.factory = o, Oi;
}
var Up = /* @__PURE__ */ Bp(), Hp = ["writingDirection"], Zm = /* @__PURE__ */ new WeakMap(), Qf = bp(), Km = {
  shadow: !0,
  textShadow: !0
};
function wp(i, c) {
  c === void 0 && (c = {});
  var o = c, r = o.writingDirection, s = du(o, Hp), v = r === "rtl";
  return Up.styleq.factory({
    transform(h) {
      var T = Zm.get(h);
      return T != null ? Tp.localizeStyle(T, v) : Qm(h, wa(wa({}, Km), s));
    }
  })(i);
}
function Jm(i) {
  i.forEach((c) => {
    var o = c[0], r = c[1];
    Qf != null && o.forEach((s) => {
      Qf.insert(s, r);
    });
  });
}
function Lp(i) {
  var c = ip(Qm(i, Km)), o = c[0], r = c[1];
  return Jm(r), o;
}
function qp(i, c) {
  var o = rp(i, c), r = o[0], s = o[1];
  return Jm(s), r;
}
var km = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}, Yp = Wm({
  x: wa({}, km)
}).x;
function Wm(i) {
  return Object.keys(i).forEach((c) => {
    var o = i[c];
    if (o != null && o.$$css !== !0) {
      var r;
      c.indexOf("$raw") > -1 ? r = qp(o, c.split("$raw")[0]) : r = Lp(o), Zm.set(o, r);
    }
  }), i;
}
function jp(i, c) {
  return [i, c];
}
function Gp() {
  for (var i = arguments.length, c = new Array(i), o = 0; o < i; o++)
    c[o] = arguments[o];
  for (var r = c.flat(1 / 0), s = {}, v = 0; v < r.length; v++) {
    var h = r[v];
    h != null && typeof h == "object" && Object.assign(s, h);
  }
  return s;
}
function Xp() {
  return {
    id: Qf.id,
    textContent: Qf.getTextContent()
  };
}
function Fl(i, c) {
  c === void 0 && (c = {});
  var o = c.writingDirection === "rtl", r = wp(i, c);
  return Array.isArray(r) && r[1] != null && (r[1] = fp(r[1], o)), r;
}
Fl.absoluteFill = Yp;
Fl.absoluteFillObject = km;
Fl.create = Wm;
Fl.compose = jp;
Fl.flatten = Gp;
Fl.getSheet = Xp;
Fl.hairlineWidth = 1;
Il && window.__REACT_DEVTOOLS_GLOBAL_HOOK__ && (window.__REACT_DEVTOOLS_GLOBAL_HOOK__.resolveRNStyle = Fl.flatten);
var vu = Fl, Vp = ["aria-activedescendant", "accessibilityActiveDescendant", "aria-atomic", "accessibilityAtomic", "aria-autocomplete", "accessibilityAutoComplete", "aria-busy", "accessibilityBusy", "aria-checked", "accessibilityChecked", "aria-colcount", "accessibilityColumnCount", "aria-colindex", "accessibilityColumnIndex", "aria-colspan", "accessibilityColumnSpan", "aria-controls", "accessibilityControls", "aria-current", "accessibilityCurrent", "aria-describedby", "accessibilityDescribedBy", "aria-details", "accessibilityDetails", "aria-disabled", "accessibilityDisabled", "aria-errormessage", "accessibilityErrorMessage", "aria-expanded", "accessibilityExpanded", "aria-flowto", "accessibilityFlowTo", "aria-haspopup", "accessibilityHasPopup", "aria-hidden", "accessibilityHidden", "aria-invalid", "accessibilityInvalid", "aria-keyshortcuts", "accessibilityKeyShortcuts", "aria-label", "accessibilityLabel", "aria-labelledby", "accessibilityLabelledBy", "aria-level", "accessibilityLevel", "aria-live", "accessibilityLiveRegion", "aria-modal", "accessibilityModal", "aria-multiline", "accessibilityMultiline", "aria-multiselectable", "accessibilityMultiSelectable", "aria-orientation", "accessibilityOrientation", "aria-owns", "accessibilityOwns", "aria-placeholder", "accessibilityPlaceholder", "aria-posinset", "accessibilityPosInSet", "aria-pressed", "accessibilityPressed", "aria-readonly", "accessibilityReadOnly", "aria-required", "accessibilityRequired", "role", "accessibilityRole", "aria-roledescription", "accessibilityRoleDescription", "aria-rowcount", "accessibilityRowCount", "aria-rowindex", "accessibilityRowIndex", "aria-rowspan", "accessibilityRowSpan", "aria-selected", "accessibilitySelected", "aria-setsize", "accessibilitySetSize", "aria-sort", "accessibilitySort", "aria-valuemax", "accessibilityValueMax", "aria-valuemin", "accessibilityValueMin", "aria-valuenow", "accessibilityValueNow", "aria-valuetext", "accessibilityValueText", "dataSet", "focusable", "id", "nativeID", "pointerEvents", "style", "tabIndex", "testID"], Qp = {}, Zp = Object.prototype.hasOwnProperty, Kp = Array.isArray, Jp = /[A-Z]/g;
function kp(i) {
  return "-" + i.toLowerCase();
}
function Wp(i) {
  return i.replace(Jp, kp);
}
function ou(i) {
  return Kp(i) ? i.join(" ") : i;
}
var Pp = vu.create({
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
}), $p = (i, c, o) => {
  c || (c = Qp);
  var r = c, s = r["aria-activedescendant"], v = r.accessibilityActiveDescendant, h = r["aria-atomic"], T = r.accessibilityAtomic, _ = r["aria-autocomplete"], A = r.accessibilityAutoComplete, x = r["aria-busy"], m = r.accessibilityBusy, z = r["aria-checked"], q = r.accessibilityChecked, L = r["aria-colcount"], j = r.accessibilityColumnCount, M = r["aria-colindex"], H = r.accessibilityColumnIndex, D = r["aria-colspan"], F = r.accessibilityColumnSpan, te = r["aria-controls"], V = r.accessibilityControls, J = r["aria-current"], G = r.accessibilityCurrent, k = r["aria-describedby"], Se = r.accessibilityDescribedBy, se = r["aria-details"], ze = r.accessibilityDetails, Ue = r["aria-disabled"], Oe = r.accessibilityDisabled, Ie = r["aria-errormessage"], De = r.accessibilityErrorMessage, w = r["aria-expanded"], ee = r.accessibilityExpanded, Q = r["aria-flowto"], ye = r.accessibilityFlowTo, fe = r["aria-haspopup"], Ye = r.accessibilityHasPopup, lt = r["aria-hidden"], Dt = r.accessibilityHidden, S = r["aria-invalid"], U = r.accessibilityInvalid, $ = r["aria-keyshortcuts"], W = r.accessibilityKeyShortcuts, ne = r["aria-label"], be = r.accessibilityLabel, Ee = r["aria-labelledby"], P = r.accessibilityLabelledBy, ae = r["aria-level"], el = r.accessibilityLevel, vn = r["aria-live"], ea = r.accessibilityLiveRegion, Mt = r["aria-modal"], Pe = r.accessibilityModal, _e = r["aria-multiline"], jt = r.accessibilityMultiline, ta = r["aria-multiselectable"], dl = r.accessibilityMultiSelectable, La = r["aria-orientation"], yn = r.accessibilityOrientation, Dl = r["aria-owns"], yu = r.accessibilityOwns, qa = r["aria-placeholder"], hu = r.accessibilityPlaceholder, mu = r["aria-posinset"], vl = r.accessibilityPosInSet, hn = r["aria-pressed"], gu = r.accessibilityPressed, qi = r["aria-readonly"], Yi = r.accessibilityReadOnly, mn = r["aria-required"], gn = r.accessibilityRequired;
  r.role, r.accessibilityRole;
  var Sn = r["aria-roledescription"], Wf = r.accessibilityRoleDescription, ji = r["aria-rowcount"], yt = r.accessibilityRowCount, Gi = r["aria-rowindex"], Xi = r.accessibilityRowIndex, Su = r["aria-rowspan"], bn = r.accessibilityRowSpan, Vi = r["aria-selected"], Qi = r.accessibilitySelected, Zi = r["aria-setsize"], Pf = r.accessibilitySetSize, la = r["aria-sort"], ht = r.accessibilitySort, tl = r["aria-valuemax"], mt = r.accessibilityValueMax, Ki = r["aria-valuemin"], $f = r.accessibilityValueMin, Ji = r["aria-valuenow"], En = r.accessibilityValueNow, Ya = r["aria-valuetext"], pn = r.accessibilityValueText, Gt = r.dataSet, Ml = r.focusable, aa = r.id, ki = r.nativeID, Wi = r.pointerEvents, Pi = r.style, Nl = r.tabIndex, na = r.testID, Z = du(r, Vp), $i = Ue || Oe, Xt = Nm.propsToAriaRole(c), bu = s ?? v;
  bu != null && (Z["aria-activedescendant"] = bu);
  var Tn = h != null ? s : T;
  Tn != null && (Z["aria-atomic"] = Tn);
  var Rn = _ ?? A;
  Rn != null && (Z["aria-autocomplete"] = Rn);
  var Eu = x ?? m;
  Eu != null && (Z["aria-busy"] = Eu);
  var pu = z ?? q;
  pu != null && (Z["aria-checked"] = pu);
  var Vt = L ?? j;
  Vt != null && (Z["aria-colcount"] = Vt);
  var Ze = M ?? H;
  Ze != null && (Z["aria-colindex"] = Ze);
  var at = D ?? F;
  at != null && (Z["aria-colspan"] = at);
  var Bl = te ?? V;
  Bl != null && (Z["aria-controls"] = ou(Bl));
  var Tu = J ?? G;
  Tu != null && (Z["aria-current"] = Tu);
  var Ii = k ?? Se;
  Ii != null && (Z["aria-describedby"] = ou(Ii));
  var Fi = se ?? ze;
  Fi != null && (Z["aria-details"] = Fi), $i === !0 && (Z["aria-disabled"] = !0, (i === "button" || i === "form" || i === "input" || i === "select" || i === "textarea") && (Z.disabled = !0));
  var Ru = Ie ?? De;
  Ru != null && (Z["aria-errormessage"] = Ru);
  var ua = w ?? ee;
  ua != null && (Z["aria-expanded"] = ua);
  var ja = Q ?? ye;
  ja != null && (Z["aria-flowto"] = ou(ja));
  var Ga = fe ?? Ye;
  Ga != null && (Z["aria-haspopup"] = Ga);
  var yl = lt ?? Dt;
  yl === !0 && (Z["aria-hidden"] = yl);
  var Ul = S ?? U;
  Ul != null && (Z["aria-invalid"] = Ul);
  var ia = $ ?? W;
  ia != null && (Z["aria-keyshortcuts"] = ou(ia));
  var Hl = ne ?? be;
  Hl != null && (Z["aria-label"] = Hl);
  var Ve = Ee ?? P;
  Ve != null && (Z["aria-labelledby"] = ou(Ve));
  var Ou = ae ?? el;
  Ou != null && (Z["aria-level"] = Ou);
  var On = vn ?? ea;
  On != null && (Z["aria-live"] = On === "none" ? "off" : On);
  var _u = Mt ?? Pe;
  _u != null && (Z["aria-modal"] = _u);
  var hl = _e ?? jt;
  hl != null && (Z["aria-multiline"] = hl);
  var wl = ta ?? dl;
  wl != null && (Z["aria-multiselectable"] = wl);
  var er = La ?? yn;
  er != null && (Z["aria-orientation"] = er);
  var Au = Dl ?? yu;
  Au != null && (Z["aria-owns"] = ou(Au));
  var Cu = qa ?? hu;
  Cu != null && (Z["aria-placeholder"] = Cu);
  var tr = mu ?? vl;
  tr != null && (Z["aria-posinset"] = tr);
  var ge = hn ?? gu;
  ge != null && (Z["aria-pressed"] = ge);
  var xu = qi ?? Yi;
  xu != null && (Z["aria-readonly"] = xu, (i === "input" || i === "select" || i === "textarea") && (Z.readOnly = !0));
  var Xa = mn ?? gn;
  Xa != null && (Z["aria-required"] = Xa, (i === "input" || i === "select" || i === "textarea") && (Z.required = gn)), Xt != null && (Z.role = Xt === "none" ? "presentation" : Xt);
  var Va = Sn ?? Wf;
  Va != null && (Z["aria-roledescription"] = Va);
  var Qt = ji ?? yt;
  Qt != null && (Z["aria-rowcount"] = Qt);
  var ot = Gi ?? Xi;
  ot != null && (Z["aria-rowindex"] = ot);
  var zu = Su ?? bn;
  zu != null && (Z["aria-rowspan"] = zu);
  var lr = Vi ?? Qi;
  lr != null && (Z["aria-selected"] = lr);
  var _n = Zi ?? Pf;
  _n != null && (Z["aria-setsize"] = _n);
  var Du = la ?? ht;
  Du != null && (Z["aria-sort"] = Du);
  var ar = tl ?? mt;
  ar != null && (Z["aria-valuemax"] = ar);
  var gt = Ki ?? $f;
  gt != null && (Z["aria-valuemin"] = gt);
  var An = Ji ?? En;
  An != null && (Z["aria-valuenow"] = An);
  var Mu = Ya ?? pn;
  if (Mu != null && (Z["aria-valuetext"] = Mu), Gt != null) {
    for (var Qa in Gt)
      if (Zp.call(Gt, Qa)) {
        var ra = Wp(Qa), Nu = Gt[Qa];
        Nu != null && (Z["data-" + ra] = Nu);
      }
  }
  Nl === 0 || Nl === "0" || Nl === -1 || Nl === "-1" ? Z.tabIndex = Nl : (Ml === !1 && (Z.tabIndex = "-1"), // These native elements are keyboard focusable by default
  i === "a" || i === "button" || i === "input" || i === "select" || i === "textarea" ? (Ml === !1 || Oe === !0) && (Z.tabIndex = "-1") : /* These roles are made keyboard focusable by default */ Xt === "button" || Xt === "checkbox" || Xt === "link" || Xt === "radio" || Xt === "textbox" || Xt === "switch" ? Ml !== !1 && (Z.tabIndex = "0") : Ml === !0 && (Z.tabIndex = "0"));
  var Bu = vu([Pi, Wi && Pp[Wi]], wa({
    writingDirection: "ltr"
  }, o)), Ll = Bu[0], nr = Bu[1];
  Ll && (Z.className = Ll), nr && (Z.style = nr);
  var Uu = aa ?? ki;
  return Uu != null && (Z.id = Uu), na != null && (Z["data-testid"] = na), Z.type == null && i === "button" && (Z.type = "button"), Z;
}, Ip = /* @__PURE__ */ new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]), lm = /* @__PURE__ */ new Set([
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
]), am = /* @__PURE__ */ new Map();
function Fp(i) {
  var c = am.get(i);
  if (c)
    return c;
  var o = !1;
  if (Intl.Locale)
    try {
      var r = new Intl.Locale(i).maximize().script;
      o = Ip.has(r);
    } catch {
      var s = i.split("-")[0];
      o = lm.has(s);
    }
  else {
    var v = i.split("-")[0];
    o = lm.has(v);
  }
  return am.set(i, o), o;
}
var eT = {
  direction: "ltr",
  locale: "en-US"
}, Pm = /* @__PURE__ */ oe.createContext(eT);
function bd(i) {
  return Fp(i) ? "rtl" : "ltr";
}
function tT(i) {
  var c = i.direction, o = i.locale, r = i.children, s = c || o;
  return s ? /* @__PURE__ */ vt.createElement(Pm.Provider, {
    children: r,
    value: {
      direction: o ? bd(o) : c,
      locale: o
    }
  }) : r;
}
function $m() {
  return oe.useContext(Pm);
}
var Im = (i, c, o) => {
  var r;
  i && i.constructor === String && (r = Nm.propsToAccessibilityComponent(c));
  var s = r || i, v = $p(s, c, o), h = /* @__PURE__ */ vt.createElement(s, v), T = v.dir ? /* @__PURE__ */ vt.createElement(tT, {
    children: h,
    direction: v.dir,
    locale: v.lang
  }) : h;
  return T;
}, rd = (i) => {
  if (i != null) {
    var c = i.nodeType === 1;
    if (c && typeof i.getBoundingClientRect == "function")
      return i.getBoundingClientRect();
  }
}, Ni = {
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
}, lT = ["ms", "Moz", "O", "Webkit"], aT = (i, c) => i + c.charAt(0).toUpperCase() + c.substring(1);
Object.keys(Ni).forEach((i) => {
  lT.forEach((c) => {
    Ni[aT(c, i)] = Ni[i];
  });
});
function nT(i, c, o) {
  var r = c == null || typeof c == "boolean" || c === "";
  return r ? "" : !o && typeof c == "number" && c !== 0 && !(Ni.hasOwnProperty(i) && Ni[i]) ? c + "px" : ("" + c).trim();
}
function uT(i, c) {
  var o = i.style;
  for (var r in c)
    if (c.hasOwnProperty(r)) {
      var s = r.indexOf("--") === 0, v = nT(r, c[r], s);
      r === "float" && (r = "cssFloat"), s ? o.setProperty(r, v) : o[r] = v;
    }
}
var nm = (i) => {
  var c = i.offsetHeight, o = i.offsetWidth, r = i.offsetLeft, s = i.offsetTop;
  for (i = i.offsetParent; i && i.nodeType === 1; )
    r += i.offsetLeft + i.clientLeft - i.scrollLeft, s += i.offsetTop + i.clientTop - i.scrollTop, i = i.offsetParent;
  return s -= window.scrollY, r -= window.scrollX, {
    width: o,
    height: c,
    top: s,
    left: r
  };
}, um = (i, c, o) => {
  var r = c || i && i.parentNode;
  i && r && setTimeout(() => {
    if (i.isConnected && r.isConnected) {
      var s = nm(r), v = nm(i), h = v.height, T = v.left, _ = v.top, A = v.width, x = T - s.left, m = _ - s.top;
      o(x, m, A, h, T, _);
    }
  }, 0);
}, iT = {
  A: !0,
  BODY: !0,
  INPUT: !0,
  SELECT: !0,
  TEXTAREA: !0
}, Yf = {
  blur(i) {
    try {
      i.blur();
    } catch {
    }
  },
  focus(i) {
    try {
      var c = i.nodeName;
      i.getAttribute("tabIndex") == null && i.isContentEditable !== !0 && iT[c] == null && i.setAttribute("tabIndex", "-1"), i.focus();
    } catch {
    }
  },
  measure(i, c) {
    um(i, null, c);
  },
  measureInWindow(i, c) {
    i && setTimeout(() => {
      var o = rd(i), r = o.height, s = o.left, v = o.top, h = o.width;
      c(s, v, h, r);
    }, 0);
  },
  measureLayout(i, c, o, r) {
    um(i, c, r);
  },
  updateView(i, c) {
    for (var o in c)
      if (Object.prototype.hasOwnProperty.call(c, o)) {
        var r = c[o];
        switch (o) {
          case "style": {
            uT(i, r);
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
  configureNextLayoutAnimation(i, c) {
    c();
  },
  // mocks
  setLayoutAnimationEnabledExperimental() {
  }
};
function fd() {
  return fd = Object.assign ? Object.assign.bind() : function(i) {
    for (var c = 1; c < arguments.length; c++) {
      var o = arguments[c];
      for (var r in o) ({}).hasOwnProperty.call(o, r) && (i[r] = o[r]);
    }
    return i;
  }, fd.apply(null, arguments);
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
function rg(i, c) {
  var o = {};
  for (var r in i)
    i.hasOwnProperty(r) && c[r] === !0 && (o[r] = i[r]);
  return o;
}
var Zf = Il ? oe.useLayoutEffect : oe.useEffect, cd = "__reactLayoutHandler", Ls = null;
function rT() {
  return Il && typeof window.ResizeObserver < "u" && Ls == null && (Ls = new window.ResizeObserver(function(i) {
    i.forEach((c) => {
      var o = c.target, r = o[cd];
      typeof r == "function" && Yf.measure(o, (s, v, h, T, _, A) => {
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
          get: () => c.target
        }), r(x);
      });
    });
  })), Ls;
}
function fg(i, c) {
  var o = rT();
  Zf(() => {
    var r = i.current;
    r != null && (r[cd] = c);
  }, [i, c]), Zf(() => {
    var r = i.current;
    return r != null && o != null && (typeof r[cd] == "function" ? o.observe(r) : o.unobserve(r)), () => {
      r != null && o != null && o.unobserve(r);
    };
  }, [i, o]);
}
function fT() {
  for (var i = arguments.length, c = new Array(i), o = 0; o < i; o++)
    c[o] = arguments[o];
  return function(s) {
    c.forEach((v) => {
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
function Ed() {
  for (var i = arguments.length, c = new Array(i), o = 0; o < i; o++)
    c[o] = arguments[o];
  return oe.useMemo(
    () => fT(...c),
    // eslint-disable-next-line
    [...c]
  );
}
var im = typeof Symbol == "function" && typeof /* @__PURE__ */ Symbol() == "symbol" ? /* @__PURE__ */ Symbol() : Object.freeze({});
function od(i) {
  var c = oe.useRef(im);
  return c.current === im && (c.current = i()), c.current;
}
function cg(i) {
  i.pointerEvents, i.style;
  var c = od(() => (o) => {
    o != null && (o.measure = (r) => Yf.measure(o, r), o.measureLayout = (r, s, v) => Yf.measureLayout(o, r, v, s), o.measureInWindow = (r) => Yf.measureInWindow(o, r));
  });
  return c;
}
var rm = () => {
}, cT = {}, oT = [];
function fm(i) {
  return i > 20 ? i % 20 : i;
}
function og(i, c) {
  var o, r = !1, s, v, h = i.changedTouches, T = i.type, _ = i.metaKey === !0, A = i.shiftKey === !0, x = h && h[0].force || 0, m = fm(h && h[0].identifier || 0), z = h && h[0].clientX || i.clientX, q = h && h[0].clientY || i.clientY, L = h && h[0].pageX || i.pageX, j = h && h[0].pageY || i.pageY, M = typeof i.preventDefault == "function" ? i.preventDefault.bind(i) : rm, H = i.timeStamp;
  function D(G) {
    return Array.prototype.slice.call(G).map((k) => ({
      force: k.force,
      identifier: fm(k.identifier),
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
    s = D(h), v = D(i.touches);
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
    s = F, v = T === "mouseup" || T === "dragstart" ? oT : F;
  }
  var te = {
    bubbles: !0,
    cancelable: !0,
    // `currentTarget` is set before dispatch
    currentTarget: null,
    defaultPrevented: i.defaultPrevented,
    dispatchConfig: cT,
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
    persist: rm,
    preventDefault: M,
    stopPropagation() {
      r = !0;
    },
    target: i.target,
    timeStamp: H,
    touchHistory: c.touchHistory
  };
  function V(G) {
    if (o = o || rd(te.currentTarget), o)
      return G - o.left;
  }
  function J(G) {
    if (o = o || rd(te.currentTarget), o)
      return G - o.top;
  }
  return te;
}
var sT = "mousedown", dT = "mousemove", vT = "mouseup", yT = "dragstart", hT = "touchstart", mT = "touchmove", gT = "touchend", ST = "touchcancel", bT = "scroll", ET = "select", pT = "selectionchange";
function sg(i) {
  return i === hT || i === sT;
}
function dg(i) {
  return i === mT || i === dT;
}
function vg(i) {
  return i === gT || i === vT || yg(i);
}
function yg(i) {
  return i === ST || i === yT;
}
function TT(i) {
  return i === bT;
}
function RT(i) {
  return i === ET || i === pT;
}
function OT() {
  var i = window.getSelection(), c = i.toString(), o = i.anchorNode, r = i.focusNode, s = o && o.nodeType === window.Node.TEXT_NODE || r && r.nodeType === window.Node.TEXT_NODE;
  return c.length >= 1 && c !== `
` && s;
}
var hg = "__reactResponderId";
function _T(i) {
  if (i.type === "selectionchange") {
    var c = window.getSelection().anchorNode;
    return cm(c);
  } else {
    var o = i.composedPath != null ? i.composedPath() : cm(i.target);
    return o;
  }
}
function cm(i) {
  for (var c = []; i != null && i !== document.body; )
    c.push(i), i = i.parentNode;
  return c;
}
function AT(i) {
  return i != null ? i[hg] : null;
}
function CT(i, c) {
  i != null && (i[hg] = c);
}
function xT(i) {
  for (var c = [], o = [], r = _T(i), s = 0; s < r.length; s++) {
    var v = r[s], h = AT(v);
    h != null && (c.push(h), o.push(v));
  }
  return {
    idPath: c,
    nodePath: o
  };
}
function zT(i, c) {
  var o = i.length, r = c.length;
  if (
    // If either path is empty
    o === 0 || r === 0 || // If the last elements aren't the same there can't be a common ancestor
    // that is connected to the responder system
    i[o - 1] !== c[r - 1]
  )
    return null;
  var s = i[0], v = 0, h = c[0], T = 0;
  o - r > 0 && (v = o - r, s = i[v], o = r), r - o > 0 && (T = r - o, h = c[T], r = o);
  for (var _ = o; _--; ) {
    if (s === h)
      return s;
    s = i[v++], h = c[T++];
  }
  return null;
}
function DT(i, c) {
  if (!c || c.length === 0)
    return !1;
  for (var o = 0; o < c.length; o++) {
    var r = c[o].target;
    if (r != null && i.contains(r))
      return !0;
  }
  return !1;
}
function MT(i) {
  return i.type === "selectionchange" ? OT() : i.type === "select";
}
function NT(i) {
  var c = i.altKey, o = i.button, r = i.buttons, s = i.ctrlKey, v = i.type, h = v === "touchstart" || v === "touchmove", T = v === "mousedown" && (o === 0 || r === 1), _ = v === "mousemove" && r === 1, A = c === !1 && s === !1;
  return !!(h || T && A || _ && A);
}
var om = 20;
function Ft(i) {
  return i.timeStamp || i.timestamp;
}
function BT(i) {
  return {
    touchActive: !0,
    startPageX: i.pageX,
    startPageY: i.pageY,
    startTimeStamp: Ft(i),
    currentPageX: i.pageX,
    currentPageY: i.pageY,
    currentTimeStamp: Ft(i),
    previousPageX: i.pageX,
    previousPageY: i.pageY,
    previousTimeStamp: Ft(i)
  };
}
function UT(i, c) {
  i.touchActive = !0, i.startPageX = c.pageX, i.startPageY = c.pageY, i.startTimeStamp = Ft(c), i.currentPageX = c.pageX, i.currentPageY = c.pageY, i.currentTimeStamp = Ft(c), i.previousPageX = c.pageX, i.previousPageY = c.pageY, i.previousTimeStamp = Ft(c);
}
function pd(i) {
  var c = i.identifier;
  return c == null && console.error("Touch object is missing identifier."), c;
}
function HT(i, c) {
  var o = pd(i), r = c.touchBank[o];
  r ? UT(r, i) : c.touchBank[o] = BT(i), c.mostRecentTimeStamp = Ft(i);
}
function wT(i, c) {
  var o = c.touchBank[pd(i)];
  o ? (o.touchActive = !0, o.previousPageX = o.currentPageX, o.previousPageY = o.currentPageY, o.previousTimeStamp = o.currentTimeStamp, o.currentPageX = i.pageX, o.currentPageY = i.pageY, o.currentTimeStamp = Ft(i), c.mostRecentTimeStamp = Ft(i)) : console.warn(`Cannot record touch move without a touch start.
`, "Touch Move: " + mg(i) + `
`, "Touch Bank: " + gg(c));
}
function LT(i, c) {
  var o = c.touchBank[pd(i)];
  o ? (o.touchActive = !1, o.previousPageX = o.currentPageX, o.previousPageY = o.currentPageY, o.previousTimeStamp = o.currentTimeStamp, o.currentPageX = i.pageX, o.currentPageY = i.pageY, o.currentTimeStamp = Ft(i), c.mostRecentTimeStamp = Ft(i)) : console.warn(`Cannot record touch end without a touch start.
`, "Touch End: " + mg(i) + `
`, "Touch Bank: " + gg(c));
}
function mg(i) {
  return JSON.stringify({
    identifier: i.identifier,
    pageX: i.pageX,
    pageY: i.pageY,
    timestamp: Ft(i)
  });
}
function gg(i) {
  var c = i.touchBank, o = JSON.stringify(c.slice(0, om));
  return c.length > om && (o += " (original size: " + c.length + ")"), o;
}
class qT {
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
  recordTouchTrack(c, o) {
    var r = this._touchHistory;
    if (dg(c))
      o.changedTouches.forEach((T) => wT(T, r));
    else if (sg(c))
      o.changedTouches.forEach((T) => HT(T, r)), r.numberActiveTouches = o.touches.length, r.numberActiveTouches === 1 && (r.indexOfSingleActiveTouch = o.touches[0].identifier);
    else if (vg(c) && (o.changedTouches.forEach((T) => LT(T, r)), r.numberActiveTouches = o.touches.length, r.numberActiveTouches === 1))
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
var YT = {}, sm = ["onStartShouldSetResponderCapture", "onStartShouldSetResponder", {
  bubbles: !0
}], dm = ["onMoveShouldSetResponderCapture", "onMoveShouldSetResponder", {
  bubbles: !0
}], jT = ["onScrollShouldSetResponderCapture", "onScrollShouldSetResponder", {
  bubbles: !1
}], GT = {
  touchstart: sm,
  mousedown: sm,
  touchmove: dm,
  mousemove: dm,
  scroll: jT
}, sd = {
  id: null,
  idPath: null,
  node: null
}, Kf = /* @__PURE__ */ new Map(), Ua = !1, Cl = 0, zl = {
  id: null,
  node: null,
  idPath: null
}, dd = new qT();
function wi(i) {
  zl = i;
}
function Li(i) {
  var c = Kf.get(i);
  return c ?? YT;
}
function qs(i) {
  var c = i.type, o = i.target;
  if (c === "touchstart" && (Ua = !0), (c === "touchmove" || Cl > 1) && (Ua = !1), // Ignore browser emulated mouse events
  !(c === "mousedown" && Ua || c === "mousemove" && Ua || // Ignore mousemove if a mousedown didn't occur first
  c === "mousemove" && Cl < 1)) {
    if (Ua && c === "mouseup") {
      Cl === 0 && (Ua = !1);
      return;
    }
    var r = sg(c) && NT(i), s = dg(c), v = vg(c), h = TT(c), T = RT(c), _ = og(i, dd);
    (r || s || v) && (i.touches ? Cl = i.touches.length : r ? Cl = 1 : v && (Cl = 0), dd.recordTouchTrack(c, _.nativeEvent));
    var A = xT(i), x = !1, m;
    if (r || s || h && Cl > 0) {
      var z = zl.idPath, q = A.idPath;
      if (z != null && q != null) {
        var L = zT(z, q);
        if (L != null) {
          var j = q.indexOf(L), M = j + (L === zl.id ? 1 : 0);
          A = {
            idPath: q.slice(M),
            nodePath: A.nodePath.slice(M)
          };
        } else
          A = null;
      }
      A != null && (m = XT(A, i, _), m != null && (VT(_, m), x = !0));
    }
    if (zl.id != null && zl.node != null) {
      var H = zl, D = H.id, F = H.node, te = Li(D), V = te.onResponderStart, J = te.onResponderMove, G = te.onResponderEnd, k = te.onResponderRelease, Se = te.onResponderTerminate, se = te.onResponderTerminationRequest;
      if (_.bubbles = !1, _.cancelable = !1, _.currentTarget = F, r)
        V != null && (_.dispatchConfig.registrationName = "onResponderStart", V(_));
      else if (s)
        J != null && (_.dispatchConfig.registrationName = "onResponderMove", J(_));
      else {
        var ze = yg(c) || // native context menu
        c === "contextmenu" || // window blur
        c === "blur" && o === window || // responder (or ancestors) blur
        c === "blur" && o.contains(F) && i.relatedTarget !== F || // native scroll without using a pointer
        h && Cl === 0 || // native scroll on node that is parent of the responder (allow siblings to scroll)
        h && o.contains(F) && o !== F || // native select/selectionchange on node
        T && MT(i), Ue = v && !ze && !DT(F, i.touches);
        if (v && G != null && (_.dispatchConfig.registrationName = "onResponderEnd", G(_)), Ue && (k != null && (_.dispatchConfig.registrationName = "onResponderRelease", k(_)), wi(sd)), ze) {
          var Oe = !0;
          (c === "contextmenu" || c === "scroll" || c === "selectionchange") && (x ? Oe = !1 : se != null && (_.dispatchConfig.registrationName = "onResponderTerminationRequest", se(_) === !1 && (Oe = !1))), Oe && (Se != null && (_.dispatchConfig.registrationName = "onResponderTerminate", Se(_)), wi(sd), Ua = !1, Cl = 0);
        }
      }
    }
  }
}
function XT(i, c, o) {
  var r = GT[c.type];
  if (r != null) {
    for (var s = i.idPath, v = i.nodePath, h = r[0], T = r[1], _ = r[2].bubbles, A = function(J, G, k) {
      var Se = Li(J), se = Se[k];
      if (se != null && (o.currentTarget = G, se(o) === !0)) {
        var ze = s.slice(s.indexOf(J));
        return {
          id: J,
          node: G,
          idPath: ze
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
        var j = s[L], M = v[L], H = A(j, M, T);
        if (H != null)
          return H;
        if (o.isPropagationStopped() === !0)
          return;
      }
    else {
      var D = s[0], F = v[0], te = c.target;
      if (te === F)
        return A(D, F, T);
    }
  }
}
function VT(i, c) {
  var o = zl, r = o.id, s = o.node, v = c.id, h = c.node, T = Li(v), _ = T.onResponderGrant, A = T.onResponderReject;
  if (i.bubbles = !1, i.cancelable = !1, i.currentTarget = h, r == null)
    _ != null && (i.currentTarget = h, i.dispatchConfig.registrationName = "onResponderGrant", _(i)), wi(c);
  else {
    var x = Li(r), m = x.onResponderTerminate, z = x.onResponderTerminationRequest, q = !0;
    z != null && (i.currentTarget = s, i.dispatchConfig.registrationName = "onResponderTerminationRequest", z(i) === !1 && (q = !1)), q ? (m != null && (i.currentTarget = s, i.dispatchConfig.registrationName = "onResponderTerminate", m(i)), _ != null && (i.currentTarget = h, i.dispatchConfig.registrationName = "onResponderGrant", _(i)), wi(c)) : A != null && (i.currentTarget = h, i.dispatchConfig.registrationName = "onResponderReject", A(i));
  }
}
var QT = ["blur", "scroll"], ZT = [
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
function KT() {
  Il && window.__reactResponderSystemActive == null && (window.addEventListener("blur", qs), ZT.forEach((i) => {
    document.addEventListener(i, qs);
  }), QT.forEach((i) => {
    document.addEventListener(i, qs, !0);
  }), window.__reactResponderSystemActive = !0);
}
function JT(i, c, o) {
  CT(c, i), Kf.set(i, o);
}
function vm(i) {
  zl.id === i && kT(), Kf.has(i) && Kf.delete(i);
}
function kT() {
  var i = zl, c = i.id, o = i.node;
  if (c != null && o != null) {
    var r = Li(c), s = r.onResponderTerminate;
    if (s != null) {
      var v = og({}, dd);
      v.currentTarget = o, s(v);
    }
    wi(sd);
  }
  Ua = !1, Cl = 0;
}
function WT() {
  return zl.node;
}
var PT = {}, $T = 0;
function IT(i) {
  var c = oe.useRef(null);
  return c.current == null && (c.current = i()), c.current;
}
function Sg(i, c) {
  c === void 0 && (c = PT);
  var o = IT(() => $T++), r = oe.useRef(!1);
  oe.useEffect(() => (KT(), () => {
    vm(o);
  }), [o]), oe.useEffect(() => {
    var s = c, v = s.onMoveShouldSetResponder, h = s.onMoveShouldSetResponderCapture, T = s.onScrollShouldSetResponder, _ = s.onScrollShouldSetResponderCapture, A = s.onSelectionChangeShouldSetResponder, x = s.onSelectionChangeShouldSetResponderCapture, m = s.onStartShouldSetResponder, z = s.onStartShouldSetResponderCapture, q = v != null || h != null || T != null || _ != null || A != null || x != null || m != null || z != null, L = i.current;
    q ? (JT(o, L, c), r.current = !0) : r.current && (vm(o), r.current = !1);
  }, [c, i, o]), oe.useDebugValue({
    isResponder: i.current === WT()
  }), oe.useDebugValue(c);
}
var vd = /* @__PURE__ */ oe.createContext(!1), FT = ["hrefAttrs", "onLayout", "onMoveShouldSetResponder", "onMoveShouldSetResponderCapture", "onResponderEnd", "onResponderGrant", "onResponderMove", "onResponderReject", "onResponderRelease", "onResponderStart", "onResponderTerminate", "onResponderTerminationRequest", "onScrollShouldSetResponder", "onScrollShouldSetResponderCapture", "onSelectionChangeShouldSetResponder", "onSelectionChangeShouldSetResponderCapture", "onStartShouldSetResponder", "onStartShouldSetResponderCapture"], e2 = Object.assign({}, Fm, eg, tg, lg, ag, ng, ug, ig, {
  href: !0,
  lang: !0,
  onScroll: !0,
  onWheel: !0,
  pointerEvents: !0
}), t2 = (i) => rg(i, e2), bg = /* @__PURE__ */ oe.forwardRef((i, c) => {
  var o = i.hrefAttrs, r = i.onLayout, s = i.onMoveShouldSetResponder, v = i.onMoveShouldSetResponderCapture, h = i.onResponderEnd, T = i.onResponderGrant, _ = i.onResponderMove, A = i.onResponderReject, x = i.onResponderRelease, m = i.onResponderStart, z = i.onResponderTerminate, q = i.onResponderTerminationRequest, L = i.onScrollShouldSetResponder, j = i.onScrollShouldSetResponderCapture, M = i.onSelectionChangeShouldSetResponder, H = i.onSelectionChangeShouldSetResponderCapture, D = i.onStartShouldSetResponder, F = i.onStartShouldSetResponderCapture, te = du(i, FT), V = oe.useContext(vd), J = oe.useRef(null), G = $m(), k = G.direction;
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
    onSelectionChangeShouldSetResponder: M,
    onSelectionChangeShouldSetResponderCapture: H,
    onStartShouldSetResponder: D,
    onStartShouldSetResponderCapture: F
  });
  var Se = "div", se = i.lang != null ? bd(i.lang) : null, ze = i.dir || se, Ue = ze || k, Oe = t2(te);
  if (Oe.dir = ze, Oe.style = [ym.view$raw, V && ym.inline, i.style], i.href != null && (Se = "a", o != null)) {
    var Ie = o.download, De = o.rel, w = o.target;
    Ie != null && (Oe.download = Ie), De != null && (Oe.rel = De), typeof w == "string" && (Oe.target = w.charAt(0) !== "_" ? "_" + w : w);
  }
  var ee = cg(Oe), Q = Ed(J, ee, c);
  return Oe.ref = Q, Im(Se, Oe, {
    writingDirection: Ue
  });
});
bg.displayName = "View";
var ym = vu.create({
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
}), l2 = ["hrefAttrs", "numberOfLines", "onClick", "onLayout", "onPress", "onMoveShouldSetResponder", "onMoveShouldSetResponderCapture", "onResponderEnd", "onResponderGrant", "onResponderMove", "onResponderReject", "onResponderRelease", "onResponderStart", "onResponderTerminate", "onResponderTerminationRequest", "onScrollShouldSetResponder", "onScrollShouldSetResponderCapture", "onSelectionChangeShouldSetResponder", "onSelectionChangeShouldSetResponderCapture", "onStartShouldSetResponder", "onStartShouldSetResponderCapture", "selectable"], a2 = Object.assign({}, Fm, eg, tg, lg, ag, ng, ug, ig, {
  href: !0,
  lang: !0,
  pointerEvents: !0
}), n2 = (i) => rg(i, a2), Eg = /* @__PURE__ */ oe.forwardRef((i, c) => {
  var o = i.hrefAttrs, r = i.numberOfLines, s = i.onClick, v = i.onLayout, h = i.onPress, T = i.onMoveShouldSetResponder, _ = i.onMoveShouldSetResponderCapture, A = i.onResponderEnd, x = i.onResponderGrant, m = i.onResponderMove, z = i.onResponderReject, q = i.onResponderRelease, L = i.onResponderStart, j = i.onResponderTerminate, M = i.onResponderTerminationRequest, H = i.onScrollShouldSetResponder, D = i.onScrollShouldSetResponderCapture, F = i.onSelectionChangeShouldSetResponder, te = i.onSelectionChangeShouldSetResponderCapture, V = i.onStartShouldSetResponder, J = i.onStartShouldSetResponderCapture, G = i.selectable, k = du(i, l2), Se = oe.useContext(vd), se = oe.useRef(null), ze = $m(), Ue = ze.direction;
  fg(se, v), Sg(se, {
    onMoveShouldSetResponder: T,
    onMoveShouldSetResponderCapture: _,
    onResponderEnd: A,
    onResponderGrant: x,
    onResponderMove: m,
    onResponderReject: z,
    onResponderRelease: q,
    onResponderStart: L,
    onResponderTerminate: j,
    onResponderTerminationRequest: M,
    onScrollShouldSetResponder: H,
    onScrollShouldSetResponderCapture: D,
    onSelectionChangeShouldSetResponder: F,
    onSelectionChangeShouldSetResponderCapture: te,
    onStartShouldSetResponder: V,
    onStartShouldSetResponderCapture: J
  });
  var Oe = oe.useCallback((U) => {
    s != null ? s(U) : h != null && (U.stopPropagation(), h(U));
  }, [s, h]), Ie = Se ? "span" : "div", De = i.lang != null ? bd(i.lang) : null, w = i.dir || De, ee = w || Ue, Q = n2(k);
  if (Q.dir = w, Se || (Q.dir = w ?? "auto"), (s || h) && (Q.onClick = Oe), Q.style = [r != null && r > 1 && {
    WebkitLineClamp: r
  }, Se === !0 ? dn.textHasAncestor$raw : dn.text$raw, r === 1 && dn.textOneLine, r != null && r > 1 && dn.textMultiLine, i.style, G === !0 && dn.selectable, G === !1 && dn.notSelectable, h && dn.pressable], i.href != null && (Ie = "a", o != null)) {
    var ye = o.download, fe = o.rel, Ye = o.target;
    ye != null && (Q.download = ye), fe != null && (Q.rel = fe), typeof Ye == "string" && (Q.target = Ye.charAt(0) !== "_" ? "_" + Ye : Ye);
  }
  var lt = cg(Q), Dt = Ed(se, lt, c);
  Q.ref = Dt;
  var S = Im(Ie, Q, {
    writingDirection: ee
  });
  return Se ? S : /* @__PURE__ */ oe.createElement(vd.Provider, {
    value: !0
  }, S);
});
Eg.displayName = "Text";
var hm = {
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
}, dn = vu.create({
  text$raw: hm,
  textHasAncestor$raw: wa(wa({}, hm), {}, {
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
}), mm = "DELAY", ol = "ERROR", gm = "LONG_PRESS_DETECTED", Tt = "NOT_RESPONDER", su = "RESPONDER_ACTIVE_LONG_PRESS_START", kf = "RESPONDER_ACTIVE_PRESS_START", yd = "RESPONDER_INACTIVE_PRESS_START", u2 = "RESPONDER_GRANT", jf = "RESPONDER_RELEASE", pg = "RESPONDER_TERMINATED", Sm = Object.freeze({
  NOT_RESPONDER: {
    DELAY: ol,
    RESPONDER_GRANT: yd,
    RESPONDER_RELEASE: ol,
    RESPONDER_TERMINATED: ol,
    LONG_PRESS_DETECTED: ol
  },
  RESPONDER_INACTIVE_PRESS_START: {
    DELAY: kf,
    RESPONDER_GRANT: ol,
    RESPONDER_RELEASE: Tt,
    RESPONDER_TERMINATED: Tt,
    LONG_PRESS_DETECTED: ol
  },
  RESPONDER_ACTIVE_PRESS_START: {
    DELAY: ol,
    RESPONDER_GRANT: ol,
    RESPONDER_RELEASE: Tt,
    RESPONDER_TERMINATED: Tt,
    LONG_PRESS_DETECTED: su
  },
  RESPONDER_ACTIVE_LONG_PRESS_START: {
    DELAY: ol,
    RESPONDER_GRANT: ol,
    RESPONDER_RELEASE: Tt,
    RESPONDER_TERMINATED: Tt,
    LONG_PRESS_DETECTED: su
  },
  ERROR: {
    DELAY: Tt,
    RESPONDER_GRANT: yd,
    RESPONDER_RELEASE: Tt,
    RESPONDER_TERMINATED: Tt,
    LONG_PRESS_DETECTED: Tt
  }
}), Tg = (i) => i.getAttribute("role"), hd = (i) => i.tagName.toLowerCase(), bm = (i) => i === kf || i === su, Gf = (i) => Tg(i) === "button", Em = (i) => i === yd || i === kf || i === su, i2 = (i) => i === pg || i === jf, pm = (i) => {
  var c = i.key, o = i.target, r = c === " " || c === "Spacebar", s = hd(o) === "button" || Gf(o);
  return c === "Enter" || r && s;
}, r2 = 450, f2 = 50;
class c2 {
  constructor(c) {
    this._eventHandlers = null, this._isPointerTouch = !1, this._longPressDelayTimeout = null, this._longPressDispatched = !1, this._pressDelayTimeout = null, this._pressOutDelayTimeout = null, this._touchState = Tt, this._responderElement = null, this.configure(c);
  }
  configure(c) {
    this._config = c;
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
    var c = (s, v) => {
      s.persist(), this._cancelPressOutDelayTimeout(), this._longPressDispatched = !1, this._selectionTerminated = !1, this._touchState = Tt, this._isPointerTouch = s.nativeEvent.type === "touchstart", this._receiveSignal(u2, s);
      var h = Ys(this._config.delayPressStart, 0, f2);
      v !== !1 && h > 0 ? this._pressDelayTimeout = setTimeout(() => {
        this._receiveSignal(mm, s);
      }, h) : this._receiveSignal(mm, s);
      var T = Ys(this._config.delayLongPress, 10, r2);
      this._longPressDelayTimeout = setTimeout(() => {
        this._handleLongPress(s);
      }, T + h);
    }, o = (s) => {
      this._receiveSignal(jf, s);
    }, r = (s) => {
      var v = this._config.onPress, h = s.target;
      if (this._touchState !== Tt && pm(s)) {
        o(s), document.removeEventListener("keyup", r);
        var T = h.getAttribute("role"), _ = hd(h), A = T === "link" || _ === "a" || _ === "button" || _ === "input" || _ === "select" || _ === "textarea", x = this._responderElement === h;
        v != null && !A && x && v(s), this._responderElement = null;
      }
    };
    return {
      onStartShouldSetResponder: (s) => {
        var v = this._config.disabled;
        return v && Gf(s.currentTarget) && s.stopPropagation(), v == null ? !0 : !v;
      },
      onKeyDown: (s) => {
        var v = this._config.disabled, h = s.key, T = s.target;
        if (!v && pm(s)) {
          this._touchState === Tt && (c(s, !1), this._responderElement = T, document.addEventListener("keyup", r));
          var _ = h === " " || h === "Spacebar", A = Tg(T), x = A === "button" || A === "menuitem";
          _ && x && hd(T) !== "button" && s.preventDefault(), s.stopPropagation();
        }
      },
      onResponderGrant: (s) => c(s),
      onResponderMove: (s) => {
        this._config.onPressMove != null && this._config.onPressMove(s);
        var v = Tm(s);
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
        h ? Gf(s.currentTarget) && s.stopPropagation() : (s.stopPropagation(), this._longPressDispatched || this._selectionTerminated ? s.preventDefault() : T != null && s.altKey === !1 && T(s));
      },
      // If `onLongPress` is provided and a touch pointer is being used, prevent the
      // default context menu from opening.
      onContextMenu: (s) => {
        var v = this._config, h = v.disabled, T = v.onLongPress;
        h ? Gf(s.currentTarget) && s.stopPropagation() : T != null && this._isPointerTouch && !s.defaultPrevented && (s.preventDefault(), s.stopPropagation());
      }
    };
  }
  /**
   * Receives a state machine signal, performs side effects of the transition
   * and stores the new state. Validates the transition as well.
   */
  _receiveSignal(c, o) {
    var r = this._touchState, s = null;
    Sm[r] != null && (s = Sm[r][c]), !(this._touchState === Tt && c === jf) && (s == null || s === ol ? console.error("PressResponder: Invalid signal " + c + " for state " + r + " on responder") : r !== s && (this._performTransitionSideEffects(r, s, c, o), this._touchState = s));
  }
  /**
   * Performs a transition between touchable states and identify any activations
   * or deactivations (and callback invocations).
   */
  _performTransitionSideEffects(c, o, r, s) {
    if (i2(r) && (setTimeout(() => {
      this._isPointerTouch = !1;
    }, 0), this._touchActivatePosition = null, this._cancelLongPressDelayTimeout()), Em(c) && r === gm) {
      var v = this._config.onLongPress;
      v != null && s.nativeEvent.key == null && (v(s), this._longPressDispatched = !0);
    }
    var h = bm(c), T = bm(o);
    if (!h && T ? this._activate(s) : h && !T && this._deactivate(s), Em(c) && r === jf) {
      var _ = this._config, A = _.onLongPress, x = _.onPress;
      if (x != null) {
        var m = A != null && c === su;
        m || !T && !h && (this._activate(s), this._deactivate(s));
      }
    }
    this._cancelPressDelayTimeout();
  }
  _activate(c) {
    var o = this._config, r = o.onPressChange, s = o.onPressStart, v = Tm(c);
    this._touchActivatePosition = {
      pageX: v.pageX,
      pageY: v.pageY
    }, s?.(c), r?.(!0);
  }
  _deactivate(c) {
    var o = this._config, r = o.onPressChange, s = o.onPressEnd;
    function v() {
      s?.(c), r?.(!1);
    }
    var h = Ys(this._config.delayPressEnd);
    h > 0 ? this._pressOutDelayTimeout = setTimeout(() => {
      v();
    }, h) : v();
  }
  _handleLongPress(c) {
    (this._touchState === kf || this._touchState === su) && this._receiveSignal(gm, c);
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
function Ys(i, c, o) {
  return c === void 0 && (c = 0), o === void 0 && (o = 0), Math.max(c, i ?? o);
}
function Tm(i) {
  var c = i.nativeEvent, o = c.changedTouches, r = c.touches;
  return r != null && r.length > 0 ? r[0] : o != null && o.length > 0 ? o[0] : i.nativeEvent;
}
function o2(i, c) {
  var o = oe.useRef(null);
  o.current == null && (o.current = new c2(c));
  var r = o.current;
  return oe.useEffect(() => {
    r.configure(c);
  }, [c, r]), oe.useEffect(() => () => {
    r.reset();
  }, [r]), oe.useDebugValue(c), r.getEventHandlers();
}
var s2 = () => {
};
function d2() {
  var i = !1;
  if (Il)
    try {
      var c = {};
      Object.defineProperty(c, "passive", {
        get() {
          return i = !0, !1;
        }
      }), window.addEventListener("test", null, c), window.removeEventListener("test", null, c);
    } catch {
    }
  return i;
}
var v2 = d2();
function y2(i) {
  return i == null ? !1 : v2 ? i : !!i.capture;
}
function h2() {
  return this.cancelBubble;
}
function m2() {
  return this.defaultPrevented;
}
function g2(i) {
  return i.nativeEvent = i, i.persist = s2, i.isDefaultPrevented = m2, i.isPropagationStopped = h2, i;
}
function dt(i, c, o, r) {
  var s = y2(r), v = (h) => o(g2(h));
  return i.addEventListener(c, v, s), function() {
    i?.removeEventListener(c, v, s);
  };
}
var S2 = () => typeof window < "u" && window.PointerEvent != null, sl = "keyboard", zt = "keyboard", xi, zi, Di = !1, b2 = /* @__PURE__ */ new Set(), Bi = "keyboard", _i = "mouse", js = "touch", E2 = "blur", Rg = "contextmenu", p2 = "focus", T2 = "keydown", Og = "mousedown", _g = "mousemove", Ag = "mouseup", Cg = "pointerdown", xg = "pointermove", zg = "scroll", Dg = "selectionchange", Mg = "touchcancel", Ng = "touchmove", Bg = "touchstart", R2 = "visibilitychange", Rm = {
  passive: !0
}, Yt = {
  capture: !0,
  passive: !0
};
function Ug() {
  (xi != null || zi != null) && (xi != null && (zt = xi, xi = null), zi != null && (sl = zi, zi = null), Ha());
}
function O2() {
  xi = zt, zi = sl, sl = Bi, zt = Bi, Ha(), Di = !1;
}
function _2() {
  Ug();
}
function A2(i) {
  i.metaKey || i.altKey || i.ctrlKey || zt !== Bi && (zt = Bi, sl = Bi, Ha());
}
function C2() {
  document.visibilityState !== "hidden" && Ug();
}
function cl(i) {
  var c = i.type;
  if (S2()) {
    if (c === Cg) {
      sl !== i.pointerType && (zt = i.pointerType, sl = i.pointerType, Ha());
      return;
    }
    if (c === xg) {
      zt !== i.pointerType && (zt = i.pointerType, Ha());
      return;
    }
  } else {
    if (Di || (c === Og && sl !== _i && (zt = _i, sl = _i, Ha()), c === _g && zt !== _i && (zt = _i, Ha())), c === Bg) {
      Di = !0, i.touches && i.touches.length > 1 && (Di = !1), sl !== js && (zt = js, sl = js, Ha());
      return;
    }
    (c === Rg || c === Ag || c === Dg || c === zg || c === Mg || c === Ng) && (Di = !1);
  }
}
Il && (dt(window, E2, O2, Rm), dt(window, p2, _2, Rm), dt(document, T2, A2, Yt), dt(document, R2, C2, Yt), dt(document, Cg, cl, Yt), dt(document, xg, cl, Yt), dt(document, Rg, cl, Yt), dt(document, Og, cl, Yt), dt(document, _g, cl, Yt), dt(document, Ag, cl, Yt), dt(document, Mg, cl, Yt), dt(document, Ng, cl, Yt), dt(document, Bg, cl, Yt), dt(document, Dg, cl, Yt), dt(document, zg, cl, Yt));
function Ha() {
  var i = {
    activeModality: sl,
    modality: zt
  };
  b2.forEach((c) => {
    c(i);
  });
}
function x2() {
  return zt;
}
function Ai(i, c) {
  var o = od(() => /* @__PURE__ */ new Map()), r = od(() => (s, v) => {
    var h = o.get(s);
    h?.(), v == null && (o.delete(s), v = () => {
    });
    var T = dt(s, i, v, c);
    return o.set(s, T), T;
  });
  return Zf(() => () => {
    o.forEach((s) => {
      s();
    }), o.clear();
  }, [o]), r;
}
var z2 = {}, Ci = {
  passive: !0
}, Om = "react-gui:hover:lock", _m = "react-gui:hover:unlock", D2 = () => typeof window < "u" && window.PointerEvent != null;
function Am(i, c, o) {
  var r = document.createEvent("CustomEvent"), s = z2, v = s.bubbles, h = v === void 0 ? !0 : v, T = s.cancelable, _ = T === void 0 ? !0 : T, A = s.detail;
  r.initCustomEvent(c, h, _, A), i.dispatchEvent(r);
}
function Gs(i) {
  var c = i.pointerType;
  return c ?? x2();
}
function M2(i, c) {
  var o = c.contain, r = c.disabled, s = c.onHoverStart, v = c.onHoverChange, h = c.onHoverUpdate, T = c.onHoverEnd, _ = D2(), A = Ai(_ ? "pointermove" : "mousemove", Ci), x = Ai(_ ? "pointerenter" : "mouseenter", Ci), m = Ai(_ ? "pointerleave" : "mouseleave", Ci), z = Ai(Om, Ci), q = Ai(_m, Ci);
  Zf(() => {
    var L = i.current;
    if (L !== null) {
      var j = function(V) {
        T?.(V), v?.(!1), A(L, null), m(L, null);
      }, M = function(V) {
        var J = i.current;
        J != null && Gs(V) !== "touch" && (o && Am(J, _m), j(V));
      }, H = function(V) {
        Gs(V) !== "touch" && h != null && (V.x == null && (V.x = V.clientX), V.y == null && (V.y = V.clientY), h(V));
      }, D = function(V) {
        s?.(V), v?.(!0), h != null && A(L, r ? null : H), m(L, r ? null : M);
      }, F = function(V) {
        var J = i.current;
        if (J != null && Gs(V) !== "touch") {
          o && Am(J, Om), D(V);
          var G = function(se) {
            se.target !== J && j(V);
          }, k = function(se) {
            se.target !== J && D(V);
          };
          z(J, r ? null : G), q(J, r ? null : k);
        }
      };
      x(L, r ? null : F);
    }
  }, [x, A, m, z, q, o, r, s, v, h, T, i]);
}
var N2 = ["children", "delayLongPress", "delayPressIn", "delayPressOut", "disabled", "onBlur", "onContextMenu", "onFocus", "onHoverIn", "onHoverOut", "onKeyDown", "onLongPress", "onPress", "onPressMove", "onPressIn", "onPressOut", "style", "tabIndex", "testOnly_hovered", "testOnly_pressed"];
function B2(i, c) {
  var o = i.children, r = i.delayLongPress, s = i.delayPressIn, v = i.delayPressOut, h = i.disabled, T = i.onBlur, _ = i.onContextMenu, A = i.onFocus, x = i.onHoverIn, m = i.onHoverOut, z = i.onKeyDown, q = i.onLongPress, L = i.onPress, j = i.onPressMove, M = i.onPressIn, H = i.onPressOut, D = i.style, F = i.tabIndex, te = i.testOnly_hovered, V = i.testOnly_pressed, J = du(i, N2), G = Xs(te === !0), k = G[0], Se = G[1], se = Xs(!1), ze = se[0], Ue = se[1], Oe = Xs(V === !0), Ie = Oe[0], De = Oe[1], w = oe.useRef(null), ee = Ed(c, w), Q = oe.useMemo(() => ({
    delayLongPress: r,
    delayPressStart: s,
    delayPressEnd: v,
    disabled: h,
    onLongPress: q,
    onPress: L,
    onPressChange: De,
    onPressStart: M,
    onPressMove: j,
    onPressEnd: H
  }), [r, s, v, h, q, L, M, j, H, De]), ye = o2(w, Q), fe = ye.onContextMenu, Ye = ye.onKeyDown;
  M2(w, {
    contain: !0,
    disabled: h,
    onHoverChange: Se,
    onHoverStart: x,
    onHoverEnd: m
  });
  var lt = {
    hovered: k,
    focused: ze,
    pressed: Ie
  }, Dt = oe.useCallback((ne) => {
    ne.nativeEvent.target === w.current && (Ue(!1), T?.(ne));
  }, [w, Ue, T]), S = oe.useCallback((ne) => {
    ne.nativeEvent.target === w.current && (Ue(!0), A?.(ne));
  }, [w, Ue, A]), U = oe.useCallback((ne) => {
    fe?.(ne), _?.(ne);
  }, [_, fe]), $ = oe.useCallback((ne) => {
    Ye?.(ne), z?.(ne);
  }, [z, Ye]), W;
  return F !== void 0 ? W = F : W = h ? -1 : 0, /* @__PURE__ */ oe.createElement(bg, fd({}, J, ye, {
    "aria-disabled": h,
    onBlur: Dt,
    onContextMenu: U,
    onFocus: S,
    onKeyDown: $,
    ref: ee,
    style: [h ? Cm.disabled : Cm.active, typeof D == "function" ? D(lt) : D],
    tabIndex: W
  }), typeof o == "function" ? o(lt) : o);
}
function Xs(i) {
  var c = oe.useState(!1), o = c[0], r = c[1];
  return [o || i, r];
}
var Cm = vu.create({
  active: {
    cursor: "pointer",
    touchAction: "manipulation"
  },
  disabled: {
    pointerEvents: "box-none"
  }
}), Hg = /* @__PURE__ */ oe.memo(/* @__PURE__ */ oe.forwardRef(B2));
Hg.displayName = "Pressable";
const wg = document.getElementById("website-root"), Xf = (i) => i.textContent.trim().replace(/\s+/g, " "), Lg = wg.querySelector("nav"), xm = [...Lg.querySelectorAll("a")].map((i) => ({
  label: Xf(i),
  id: i.hash.slice(1)
}));
function U2({ children: i, onPress: c, ...o }) {
  return /* @__PURE__ */ vt.createElement(
    Hg,
    {
      accessibilityRole: "button",
      onPress: c,
      ...o,
      style: ({ hovered: r }) => [Vs.button, r && Vs.hovered]
    },
    /* @__PURE__ */ vt.createElement(Eg, { style: Vs.buttonText }, i)
  );
}
function H2() {
  const [i, c] = oe.useState(location.hash.slice(1) || "home");
  return oe.useEffect(() => {
    const o = () => {
      const v = xm.map(({ id: h }) => document.getElementById(h)).filter((h) => h && h.getBoundingClientRect().top <= innerHeight * 0.35);
      c(v.at(-1)?.id || "home");
    }, r = () => c(location.hash.slice(1) || "home");
    return window.addEventListener("scroll", o, { passive: !0 }), window.addEventListener("hashchange", r), () => {
      window.removeEventListener("scroll", o), window.removeEventListener("hashchange", r);
    };
  }, []), /* @__PURE__ */ vt.createElement("div", { className: "nav-container" }, xm.map(({ id: o, label: r }) => /* @__PURE__ */ vt.createElement("a", { key: o, href: `#${o}`, "aria-current": i === o ? "location" : void 0, onClick: () => c(o) }, r)));
}
function w2({ member: i }) {
  const [c, o] = oe.useState(!1), r = `${i.bio.slice(0, 240).replace(/\s+\S*$/, "")}…`;
  return /* @__PURE__ */ vt.createElement(vt.Fragment, null, /* @__PURE__ */ vt.createElement("img", { src: i.image, alt: i.alt, loading: "lazy" }), /* @__PURE__ */ vt.createElement("h3", null, i.name), /* @__PURE__ */ vt.createElement("p", null, i.role), /* @__PURE__ */ vt.createElement("p", { className: "team-bio", id: `${i.id}-bio` }, c ? i.bio : r), /* @__PURE__ */ vt.createElement(U2, { "aria-expanded": c, "aria-controls": `${i.id}-bio`, accessibilityLabel: `${c ? "Show less" : "Read full biography"}: ${i.name}`, onPress: () => o(!c) }, c ? "Show less" : "Read full biography"));
}
const Vs = vu.create({
  button: { paddingVertical: 12, paddingHorizontal: 16, borderWidth: 1, borderColor: "#1f3b5b", borderRadius: 6, backgroundColor: "#fff", alignItems: "center", minHeight: 44 },
  hovered: { backgroundColor: "#e3edf7" },
  buttonText: { color: "#1f3b5b", fontSize: 14, fontWeight: "700" }
});
Dm.createRoot(Lg).render(/* @__PURE__ */ vt.createElement(H2, null));
wg.querySelectorAll(".team-member").forEach((i, c) => {
  const o = {
    id: `member-${c}`,
    name: Xf(i.querySelector("h3")),
    role: Xf(i.querySelector("p")),
    bio: Xf(i.querySelector("p:last-child")),
    image: i.querySelector("img").getAttribute("src"),
    alt: i.querySelector("img").alt
  };
  Dm.createRoot(i).render(/* @__PURE__ */ vt.createElement(w2, { member: o }));
});
