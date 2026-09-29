var ly = (y) => {
  throw TypeError(y);
};
var Uh = (y, t, n) => t.has(y) || ly("Cannot " + n);
var Jt = (y, t, n) => (Uh(y, t, "read from private field"), n ? n.call(y) : t.get(y)), qn = (y, t, n) => t.has(y) ? ly("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(y) : t.set(y, n), Ve = (y, t, n, s) => (Uh(y, t, "write to private field"), s ? s.call(y, n) : t.set(y, n), n), Kn = (y, t, n) => (Uh(y, t, "access private method"), n);
var cy = (y, t, n, s) => ({
  set _(r) {
    Ve(y, t, r, n);
  },
  get _() {
    return Jt(y, t, s);
  }
});
function _A(y) {
  return y && y.__esModule && Object.prototype.hasOwnProperty.call(y, "default") ? y.default : y;
}
function Y1(y) {
  if (Object.prototype.hasOwnProperty.call(y, "__esModule")) return y;
  var t = y.default;
  if (typeof t == "function") {
    var n = function s() {
      var r = !1;
      try {
        r = this instanceof s;
      } catch {
      }
      return r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(y).forEach(function(s) {
    var r = Object.getOwnPropertyDescriptor(y, s);
    Object.defineProperty(n, s, r.get ? r : {
      enumerable: !0,
      get: function() {
        return y[s];
      }
    });
  }), n;
}
var Hh = { exports: {} }, dt = {};
var uy;
function wA() {
  if (uy) return dt;
  uy = 1;
  var y = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), n = /* @__PURE__ */ Symbol.for("react.fragment"), s = /* @__PURE__ */ Symbol.for("react.strict_mode"), r = /* @__PURE__ */ Symbol.for("react.profiler"), l = /* @__PURE__ */ Symbol.for("react.consumer"), c = /* @__PURE__ */ Symbol.for("react.context"), u = /* @__PURE__ */ Symbol.for("react.forward_ref"), d = /* @__PURE__ */ Symbol.for("react.suspense"), p = /* @__PURE__ */ Symbol.for("react.memo"), g = /* @__PURE__ */ Symbol.for("react.lazy"), m = /* @__PURE__ */ Symbol.for("react.activity"), v = /* @__PURE__ */ Symbol.for("react.view_transition"), A = Symbol.iterator;
  function S(O) {
    return O === null || typeof O != "object" ? null : (O = A && O[A] || O["@@iterator"], typeof O == "function" ? O : null);
  }
  var E = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, _ = Object.assign, w = {};
  function C(O, Y, at) {
    this.props = O, this.context = Y, this.refs = w, this.updater = at || E;
  }
  C.prototype.isReactComponent = {}, C.prototype.setState = function(O, Y) {
    if (typeof O != "object" && typeof O != "function" && O != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, O, Y, "setState");
  }, C.prototype.forceUpdate = function(O) {
    this.updater.enqueueForceUpdate(this, O, "forceUpdate");
  };
  function M() {
  }
  M.prototype = C.prototype;
  function B(O, Y, at) {
    this.props = O, this.context = Y, this.refs = w, this.updater = at || E;
  }
  var N = B.prototype = new M();
  N.constructor = B, _(N, C.prototype), N.isPureReactComponent = !0;
  var P = Array.isArray;
  function U() {
  }
  var j = { H: null, A: null, T: null, S: null }, q = Object.prototype.hasOwnProperty;
  function $(O, Y, at) {
    var Z = at.ref;
    return {
      $$typeof: y,
      type: O,
      key: Y,
      ref: Z !== void 0 ? Z : null,
      props: at
    };
  }
  function W(O, Y) {
    return $(O.type, Y, O.props);
  }
  function tt(O) {
    return typeof O == "object" && O !== null && O.$$typeof === y;
  }
  function ct(O) {
    var Y = { "=": "=0", ":": "=2" };
    return "$" + O.replace(/[=:]/g, function(at) {
      return Y[at];
    });
  }
  var gt = /\/+/g;
  function vt(O, Y) {
    return typeof O == "object" && O !== null && O.key != null ? ct("" + O.key) : Y.toString(36);
  }
  function H(O) {
    switch (O.status) {
      case "fulfilled":
        return O.value;
      case "rejected":
        throw O.reason;
      default:
        switch (typeof O.status == "string" ? O.then(U, U) : (O.status = "pending", O.then(
          function(Y) {
            O.status === "pending" && (O.status = "fulfilled", O.value = Y);
          },
          function(Y) {
            O.status === "pending" && (O.status = "rejected", O.reason = Y);
          }
        )), O.status) {
          case "fulfilled":
            return O.value;
          case "rejected":
            throw O.reason;
        }
    }
    throw O;
  }
  function X(O, Y, at, Z, Ot) {
    var Nt = typeof O;
    (Nt === "undefined" || Nt === "boolean") && (O = null);
    var Lt = !1;
    if (O === null) Lt = !0;
    else
      switch (Nt) {
        case "bigint":
        case "string":
        case "number":
          Lt = !0;
          break;
        case "object":
          switch (O.$$typeof) {
            case y:
            case t:
              Lt = !0;
              break;
            case g:
              return Lt = O._init, X(
                Lt(O._payload),
                Y,
                at,
                Z,
                Ot
              );
          }
      }
    if (Lt)
      return Ot = Ot(O), Lt = Z === "" ? "." + vt(O, 0) : Z, P(Ot) ? (at = "", Lt != null && (at = Lt.replace(gt, "$&/") + "/"), X(Ot, Y, at, "", function(un) {
        return un;
      })) : Ot != null && (tt(Ot) && (Ot = W(
        Ot,
        at + (Ot.key == null || O && O.key === Ot.key ? "" : ("" + Ot.key).replace(
          gt,
          "$&/"
        ) + "/") + Lt
      )), Y.push(Ot)), 1;
    Lt = 0;
    var st = Z === "" ? "." : Z + ":";
    if (P(O))
      for (var ut = 0; ut < O.length; ut++)
        Z = O[ut], Nt = st + vt(Z, ut), Lt += X(
          Z,
          Y,
          at,
          Nt,
          Ot
        );
    else if (ut = S(O), typeof ut == "function")
      for (O = ut.call(O), ut = 0; !(Z = O.next()).done; )
        Z = Z.value, Nt = st + vt(Z, ut++), Lt += X(
          Z,
          Y,
          at,
          Nt,
          Ot
        );
    else if (Nt === "object") {
      if (typeof O.then == "function")
        return X(
          H(O),
          Y,
          at,
          Z,
          Ot
        );
      throw Y = String(O), Error(
        "Objects are not valid as a React child (found: " + (Y === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : Y) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Lt;
  }
  function nt(O, Y, at) {
    if (O == null) return O;
    var Z = [], Ot = 0;
    return X(O, Z, "", "", function(Nt) {
      return Y.call(at, Nt, Ot++);
    }), Z;
  }
  function mt(O) {
    if (O._status === -1) {
      var Y = O._result, at = Y();
      at.then(
        function(Z) {
          (O._status === 0 || O._status === -1) && (O._status = 1, O._result = Z, at.status === void 0 && (at.status = "fulfilled", at.value = Z));
        },
        function(Z) {
          (O._status === 0 || O._status === -1) && (O._status = 2, O._result = Z, at.status === void 0 && (at.status = "rejected", at.reason = Z));
        }
      ), O._status === -1 && (O._status = 0, O._result = at);
    }
    if (O._status === 1) return O._result.default;
    throw O._result;
  }
  var St = typeof reportError == "function" ? reportError : function(O) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var Y = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof O == "object" && O !== null && typeof O.message == "string" ? String(O.message) : String(O),
        error: O
      });
      if (!window.dispatchEvent(Y)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", O);
      return;
    }
    console.error(O);
  };
  function me(O) {
    var Y = j.T, at = {};
    at.types = Y !== null ? Y.types : null, j.T = at;
    try {
      var Z = O(), Ot = j.S;
      Ot !== null && Ot(at, Z), typeof Z == "object" && Z !== null && typeof Z.then == "function" && Z.then(U, St);
    } catch (Nt) {
      St(Nt);
    } finally {
      Y !== null && at.types !== null && (Y.types = at.types), j.T = Y;
    }
  }
  function Dt(O) {
    var Y = j.T;
    if (Y !== null) {
      var at = Y.types;
      at === null ? Y.types = [O] : at.indexOf(O) === -1 && at.push(O);
    } else me(Dt.bind(null, O));
  }
  var Bt = {
    map: nt,
    forEach: function(O, Y, at) {
      nt(
        O,
        function() {
          Y.apply(this, arguments);
        },
        at
      );
    },
    count: function(O) {
      var Y = 0;
      return nt(O, function() {
        Y++;
      }), Y;
    },
    toArray: function(O) {
      return nt(O, function(Y) {
        return Y;
      }) || [];
    },
    only: function(O) {
      if (!tt(O))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return O;
    }
  };
  return dt.Activity = m, dt.Children = Bt, dt.Component = C, dt.Fragment = n, dt.Profiler = r, dt.PureComponent = B, dt.StrictMode = s, dt.Suspense = d, dt.ViewTransition = v, dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = j, dt.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(O) {
      return j.H.useMemoCache(O);
    }
  }, dt.addTransitionType = Dt, dt.cache = function(O) {
    return function() {
      return O.apply(null, arguments);
    };
  }, dt.cacheSignal = function() {
    return null;
  }, dt.cloneElement = function(O, Y, at) {
    if (O == null)
      throw Error(
        "The argument must be a React element, but you passed " + O + "."
      );
    var Z = _({}, O.props), Ot = O.key;
    if (Y != null)
      for (Nt in Y.key !== void 0 && (Ot = "" + Y.key), Y)
        !q.call(Y, Nt) || Nt === "key" || Nt === "__self" || Nt === "__source" || Nt === "ref" && Y.ref === void 0 || (Z[Nt] = Y[Nt]);
    var Nt = arguments.length - 2;
    if (Nt === 1) Z.children = at;
    else if (1 < Nt) {
      for (var Lt = Array(Nt), st = 0; st < Nt; st++)
        Lt[st] = arguments[st + 2];
      Z.children = Lt;
    }
    return $(O.type, Ot, Z);
  }, dt.createContext = function(O) {
    return O = {
      $$typeof: c,
      _currentValue: O,
      _currentValue2: O,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, O.Provider = O, O.Consumer = {
      $$typeof: l,
      _context: O
    }, O;
  }, dt.createElement = function(O, Y, at) {
    var Z, Ot = {}, Nt = null;
    if (Y != null)
      for (Z in Y.key !== void 0 && (Nt = "" + Y.key), Y)
        q.call(Y, Z) && Z !== "key" && Z !== "__self" && Z !== "__source" && (Ot[Z] = Y[Z]);
    var Lt = arguments.length - 2;
    if (Lt === 1) Ot.children = at;
    else if (1 < Lt) {
      for (var st = Array(Lt), ut = 0; ut < Lt; ut++)
        st[ut] = arguments[ut + 2];
      Ot.children = st;
    }
    if (O && O.defaultProps)
      for (Z in Lt = O.defaultProps, Lt)
        Ot[Z] === void 0 && (Ot[Z] = Lt[Z]);
    return $(O, Nt, Ot);
  }, dt.createRef = function() {
    return { current: null };
  }, dt.forwardRef = function(O) {
    return { $$typeof: u, render: O };
  }, dt.isValidElement = tt, dt.lazy = function(O) {
    return {
      $$typeof: g,
      _payload: { _status: -1, _result: O },
      _init: mt
    };
  }, dt.memo = function(O, Y) {
    return {
      $$typeof: p,
      type: O,
      compare: Y === void 0 ? null : Y
    };
  }, dt.startTransition = me, dt.unstable_useCacheRefresh = function() {
    return j.H.useCacheRefresh();
  }, dt.use = function(O) {
    return j.H.use(O);
  }, dt.useActionState = function(O, Y, at) {
    return j.H.useActionState(O, Y, at);
  }, dt.useCallback = function(O, Y) {
    return j.H.useCallback(O, Y);
  }, dt.useContext = function(O) {
    return j.H.useContext(O);
  }, dt.useDebugValue = function() {
  }, dt.useDeferredValue = function(O, Y) {
    return j.H.useDeferredValue(O, Y);
  }, dt.useEffect = function(O, Y) {
    return j.H.useEffect(O, Y);
  }, dt.useEffectEvent = function(O) {
    return j.H.useEffectEvent(O);
  }, dt.useId = function() {
    return j.H.useId();
  }, dt.useImperativeHandle = function(O, Y, at) {
    return j.H.useImperativeHandle(O, Y, at);
  }, dt.useInsertionEffect = function(O, Y) {
    return j.H.useInsertionEffect(O, Y);
  }, dt.useLayoutEffect = function(O, Y) {
    return j.H.useLayoutEffect(O, Y);
  }, dt.useMemo = function(O, Y) {
    return j.H.useMemo(O, Y);
  }, dt.useOptimistic = function(O, Y) {
    return j.H.useOptimistic(O, Y);
  }, dt.useReducer = function(O, Y, at) {
    return j.H.useReducer(O, Y, at);
  }, dt.useRef = function(O) {
    return j.H.useRef(O);
  }, dt.useState = function(O) {
    return j.H.useState(O);
  }, dt.useSyncExternalStore = function(O, Y, at) {
    return j.H.useSyncExternalStore(
      O,
      Y,
      at
    );
  }, dt.useTransition = function() {
    return j.H.useTransition();
  }, dt.version = "19.3.0", dt;
}
var hy;
function gd() {
  return hy || (hy = 1, Hh.exports = wA()), Hh.exports;
}
var Wn = gd();
const jt = /* @__PURE__ */ _A(Wn);
var Gh = { exports: {} }, Nr = {}, jh = { exports: {} }, Vh = {};
var dy;
function CA() {
  return dy || (dy = 1, (function(y) {
    function t(H, X) {
      var nt = H.length;
      H.push(X);
      t: for (; 0 < nt; ) {
        var mt = nt - 1 >>> 1, St = H[mt];
        if (0 < r(St, X))
          H[mt] = X, H[nt] = St, nt = mt;
        else break t;
      }
    }
    function n(H) {
      return H.length === 0 ? null : H[0];
    }
    function s(H) {
      if (H.length === 0) return null;
      var X = H[0], nt = H.pop();
      if (nt !== X) {
        H[0] = nt;
        t: for (var mt = 0, St = H.length, me = St >>> 1; mt < me; ) {
          var Dt = 2 * (mt + 1) - 1, Bt = H[Dt], O = Dt + 1, Y = H[O];
          if (0 > r(Bt, nt))
            O < St && 0 > r(Y, Bt) ? (H[mt] = Y, H[O] = nt, mt = O) : (H[mt] = Bt, H[Dt] = nt, mt = Dt);
          else if (O < St && 0 > r(Y, nt))
            H[mt] = Y, H[O] = nt, mt = O;
          else break t;
        }
      }
      return X;
    }
    function r(H, X) {
      var nt = H.sortIndex - X.sortIndex;
      return nt !== 0 ? nt : H.id - X.id;
    }
    if (y.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var l = performance;
      y.unstable_now = function() {
        return l.now();
      };
    } else {
      var c = Date, u = c.now();
      y.unstable_now = function() {
        return c.now() - u;
      };
    }
    var d = [], p = [], g = 1, m = null, v = 3, A = !1, S = !1, E = !1, _ = !1, w = typeof setTimeout == "function" ? setTimeout : null, C = typeof clearTimeout == "function" ? clearTimeout : null, M = typeof setImmediate < "u" ? setImmediate : null;
    function B(H) {
      for (var X = n(p); X !== null; ) {
        if (X.callback === null) s(p);
        else if (X.startTime <= H)
          s(p), X.sortIndex = X.expirationTime, t(d, X);
        else break;
        X = n(p);
      }
    }
    function N(H) {
      if (E = !1, B(H), !S)
        if (n(d) !== null)
          S = !0, P || (P = !0, tt());
        else {
          var X = n(p);
          X !== null && vt(N, X.startTime - H);
        }
    }
    var P = !1, U = -1, j = 5, q = -1;
    function $() {
      return _ ? !0 : !(y.unstable_now() - q < j);
    }
    function W() {
      if (_ = !1, P) {
        var H = y.unstable_now();
        q = H;
        var X = !0;
        try {
          t: {
            S = !1, E && (E = !1, C(U), U = -1), A = !0;
            var nt = v;
            try {
              e: {
                for (B(H), m = n(d); m !== null && !(m.expirationTime > H && $()); ) {
                  var mt = m.callback;
                  if (typeof mt == "function") {
                    m.callback = null, v = m.priorityLevel;
                    var St = mt(
                      m.expirationTime <= H
                    );
                    if (H = y.unstable_now(), typeof St == "function") {
                      m.callback = St, B(H), X = !0;
                      break e;
                    }
                    m === n(d) && s(d), B(H);
                  } else s(d);
                  m = n(d);
                }
                if (m !== null) X = !0;
                else {
                  var me = n(p);
                  me !== null && vt(
                    N,
                    me.startTime - H
                  ), X = !1;
                }
              }
              break t;
            } finally {
              m = null, v = nt, A = !1;
            }
            X = void 0;
          }
        } finally {
          X ? tt() : P = !1;
        }
      }
    }
    var tt;
    if (typeof M == "function")
      tt = function() {
        M(W);
      };
    else if (typeof MessageChannel < "u") {
      var ct = new MessageChannel(), gt = ct.port2;
      ct.port1.onmessage = W, tt = function() {
        gt.postMessage(null);
      };
    } else
      tt = function() {
        w(W, 0);
      };
    function vt(H, X) {
      U = w(function() {
        H(y.unstable_now());
      }, X);
    }
    y.unstable_IdlePriority = 5, y.unstable_ImmediatePriority = 1, y.unstable_LowPriority = 4, y.unstable_NormalPriority = 3, y.unstable_Profiling = null, y.unstable_UserBlockingPriority = 2, y.unstable_cancelCallback = function(H) {
      H.callback = null;
    }, y.unstable_forceFrameRate = function(H) {
      0 > H || 125 < H ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : j = 0 < H ? Math.floor(1e3 / H) : 5;
    }, y.unstable_getCurrentPriorityLevel = function() {
      return v;
    }, y.unstable_next = function(H) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var X = 3;
          break;
        default:
          X = v;
      }
      var nt = v;
      v = X;
      try {
        return H();
      } finally {
        v = nt;
      }
    }, y.unstable_requestPaint = function() {
      _ = !0;
    }, y.unstable_runWithPriority = function(H, X) {
      switch (H) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          H = 3;
      }
      var nt = v;
      v = H;
      try {
        return X();
      } finally {
        v = nt;
      }
    }, y.unstable_scheduleCallback = function(H, X, nt) {
      var mt = y.unstable_now();
      switch (typeof nt == "object" && nt !== null ? (nt = nt.delay, nt = typeof nt == "number" && 0 < nt ? mt + nt : mt) : nt = mt, H) {
        case 1:
          var St = -1;
          break;
        case 2:
          St = 250;
          break;
        case 5:
          St = 1073741823;
          break;
        case 4:
          St = 1e4;
          break;
        default:
          St = 5e3;
      }
      return St = nt + St, H = {
        id: g++,
        callback: X,
        priorityLevel: H,
        startTime: nt,
        expirationTime: St,
        sortIndex: -1
      }, nt > mt ? (H.sortIndex = nt, t(p, H), n(d) === null && H === n(p) && (E ? (C(U), U = -1) : E = !0, vt(N, nt - mt))) : (H.sortIndex = St, t(d, H), S || A || (S = !0, P || (P = !0, tt()))), H;
    }, y.unstable_shouldYield = $, y.unstable_wrapCallback = function(H) {
      var X = v;
      return function() {
        var nt = v;
        v = X;
        try {
          return H.apply(this, arguments);
        } finally {
          v = nt;
        }
      };
    };
  })(Vh)), Vh;
}
var fy;
function xA() {
  return fy || (fy = 1, jh.exports = CA()), jh.exports;
}
var Yh = { exports: {} }, De = {};
var py;
function MA() {
  if (py) return De;
  py = 1;
  var y = gd();
  function t(g) {
    var m = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        m += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return "Minified React error #" + g + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function n() {
  }
  var s = {
    d: {
      f: n,
      r: function() {
        throw Error(t(522));
      },
      D: n,
      C: n,
      L: n,
      m: n,
      X: n,
      S: n,
      M: n
    },
    p: 0,
    findDOMNode: null
  }, r = /* @__PURE__ */ Symbol.for("react.portal"), l = /* @__PURE__ */ Symbol.for("react.recoverable"), c = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function u(g, m, v) {
    var A = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: r,
      key: A == null ? null : A === c ? c : "" + A,
      children: g,
      containerInfo: m,
      implementation: v
    };
  }
  var d = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(g, m) {
    if (g === "font") return "";
    if (typeof m == "string")
      return m === "use-credentials" ? m : "";
  }
  return De.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, De.browser = function(g) {
    return { $$typeof: l, _reason: g };
  }, De.createPortal = function(g, m) {
    var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
      throw Error(t(299));
    return u(g, m, null, v);
  }, De.flushSync = function(g) {
    var m = d.T, v = s.p;
    try {
      if (d.T = null, s.p = 2, g) return g();
    } finally {
      d.T = m, s.p = v, s.d.f();
    }
  }, De.preconnect = function(g, m) {
    typeof g == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, s.d.C(g, m));
  }, De.prefetchDNS = function(g) {
    typeof g == "string" && s.d.D(g);
  }, De.preinit = function(g, m) {
    if (typeof g == "string" && m && typeof m.as == "string") {
      var v = m.as, A = p(v, m.crossOrigin), S = typeof m.integrity == "string" ? m.integrity : void 0, E = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      v === "style" ? s.d.S(
        g,
        typeof m.precedence == "string" ? m.precedence : void 0,
        {
          crossOrigin: A,
          integrity: S,
          fetchPriority: E
        }
      ) : v === "script" && s.d.X(g, {
        crossOrigin: A,
        integrity: S,
        fetchPriority: E,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0
      });
    }
  }, De.preinitModule = function(g, m) {
    if (typeof g == "string")
      if (typeof m == "object" && m !== null) {
        if (m.as == null || m.as === "script") {
          var v = p(
            m.as,
            m.crossOrigin
          );
          s.d.M(g, {
            crossOrigin: v,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0
          });
        }
      } else m == null && s.d.M(g);
  }, De.preload = function(g, m) {
    if (typeof g == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
      var v = m.as, A = p(v, m.crossOrigin);
      s.d.L(g, v, {
        crossOrigin: A,
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
  }, De.preloadModule = function(g, m) {
    if (typeof g == "string")
      if (m) {
        var v = p(m.as, m.crossOrigin);
        s.d.m(g, {
          as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
          crossOrigin: v,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0
        });
      } else s.d.m(g);
  }, De.requestFormReset = function(g) {
    s.d.r(g);
  }, De.unstable_batchedUpdates = function(g, m) {
    return g(m);
  }, De.useFormState = function(g, m, v) {
    return d.H.useFormState(g, m, v);
  }, De.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, De.version = "19.3.0", De;
}
var gy;
function DA() {
  if (gy) return Yh.exports;
  gy = 1;
  function y() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y);
      } catch (t) {
        console.error(t);
      }
  }
  return y(), Yh.exports = MA(), Yh.exports;
}
var my;
function OA() {
  if (my) return Nr;
  my = 1;
  var y = xA(), t = gd(), n = DA();
  function s(e) {
    var i = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      i += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        i += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + i + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function l(e) {
    for (var i = e, a = i; a && !a.alternate; )
      i = a, (i.flags & 4098) !== 0 && (e = i.return), a = i.return;
    for (; i.return; ) i = i.return;
    return i.tag === 3 ? e : null;
  }
  function c(e) {
    if (e.tag === 13) {
      var i = e.memoizedState;
      if (i === null && (e = e.alternate, e !== null && (i = e.memoizedState)), i !== null) return i.dehydrated;
    }
    return null;
  }
  function u(e) {
    if (e.tag === 31) {
      var i = e.memoizedState;
      if (i === null && (e = e.alternate, e !== null && (i = e.memoizedState)), i !== null) return i.dehydrated;
    }
    return null;
  }
  function d(e) {
    if (l(e) !== e)
      throw Error(s(188));
  }
  function p(e) {
    var i = e.alternate;
    if (!i) {
      if (i = l(e), i === null) throw Error(s(188));
      return i !== e ? null : e;
    }
    for (var a = e, o = i; ; ) {
      var h = a.return;
      if (h === null) break;
      var f = h.alternate;
      if (f === null) {
        if (o = h.return, o !== null) {
          a = o;
          continue;
        }
        break;
      }
      if (h.child === f.child) {
        for (f = h.child; f; ) {
          if (f === a) return d(h), e;
          if (f === o) return d(h), i;
          f = f.sibling;
        }
        throw Error(s(188));
      }
      if (a.return !== o.return) a = h, o = f;
      else {
        for (var b = !1, T = h.child; T; ) {
          if (T === a) {
            b = !0, a = h, o = f;
            break;
          }
          if (T === o) {
            b = !0, o = h, a = f;
            break;
          }
          T = T.sibling;
        }
        if (!b) {
          for (T = f.child; T; ) {
            if (T === a) {
              b = !0, a = f, o = h;
              break;
            }
            if (T === o) {
              b = !0, o = f, a = h;
              break;
            }
            T = T.sibling;
          }
          if (!b) throw Error(s(189));
        }
      }
      if (a.alternate !== o) throw Error(s(190));
    }
    if (a.tag !== 3) throw Error(s(188));
    return a.stateNode.current === a ? e : i;
  }
  function g(e) {
    var i = e.tag;
    if (i === 5 || i === 26 || i === 27 || i === 6) return e;
    for (e = e.child; e !== null; ) {
      if (i = g(e), i !== null) return i;
      e = e.sibling;
    }
    return null;
  }
  function m(e, i, a, o, h, f) {
    for (; e !== null; ) {
      if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && a(e, o, h, f) || (e.tag !== 22 || e.memoizedState === null) && (i || e.tag !== 5 && e.tag !== 27) && m(
        e.child,
        i,
        a,
        o,
        h,
        f
      ))
        return !0;
      e = e.sibling;
    }
    return !1;
  }
  function v(e) {
    for (e = e.return; e !== null; ) {
      if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
      e = e.return;
    }
    return null;
  }
  function A(e) {
    var i = !1;
    for (e = e.return; e !== null && (e.tag === 4 && (i = !0), !(e.tag === 3 || e.tag === 5 || e.tag === 27)); )
      e = e.return;
    return i;
  }
  function S(e) {
    var i = [null, null], a = v(e);
    return a === null || E(
      i,
      e,
      a.child,
      { foundSelf: !1 }
    ), i;
  }
  function E(e, i, a, o) {
    for (; a !== null; ) {
      if (a === i) o.foundSelf = !0;
      else if (a.tag === 5 || a.tag === 27 || a.tag === 6) {
        if (o.foundSelf) return e[1] = a, !0;
        e[0] = a;
      } else if ((a.tag !== 22 || a.memoizedState === null) && E(
        e,
        i,
        a.child,
        o
      ))
        return !0;
      a = a.sibling;
    }
    return !1;
  }
  function _(e) {
    switch (e.tag) {
      case 5:
      case 27:
      case 6:
        return e.stateNode;
      case 3:
        return e.stateNode.containerInfo;
      default:
        throw Error(s(559));
    }
  }
  var w = null, C = null;
  function M(e, i, a) {
    return e === a ? !0 : e === i ? (w = e, !0) : !1;
  }
  function B(e, i, a) {
    return e === a ? (C = e, !1) : e === i ? (C !== null && (w = e), !0) : !1;
  }
  function N(e) {
    if (e === null) return null;
    do
      e = e === null ? null : e.return;
    while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
    return e || null;
  }
  function P(e, i, a) {
    for (var o = 0, h = e; h; h = a(h)) o++;
    h = 0;
    for (var f = i; f; f = a(f)) h++;
    for (; 0 < o - h; ) e = a(e), o--;
    for (; 0 < h - o; ) i = a(i), h--;
    for (; o--; ) {
      if (e === i || i !== null && e === i.alternate)
        return e;
      e = a(e), i = a(i);
    }
    return null;
  }
  var U = Object.assign, j = /* @__PURE__ */ Symbol.for("react.element"), q = /* @__PURE__ */ Symbol.for("react.transitional.element"), $ = /* @__PURE__ */ Symbol.for("react.portal"), W = /* @__PURE__ */ Symbol.for("react.fragment"), tt = /* @__PURE__ */ Symbol.for("react.strict_mode"), ct = /* @__PURE__ */ Symbol.for("react.profiler"), gt = /* @__PURE__ */ Symbol.for("react.consumer"), vt = /* @__PURE__ */ Symbol.for("react.context"), H = /* @__PURE__ */ Symbol.for("react.forward_ref"), X = /* @__PURE__ */ Symbol.for("react.suspense"), nt = /* @__PURE__ */ Symbol.for("react.suspense_list"), mt = /* @__PURE__ */ Symbol.for("react.memo"), St = /* @__PURE__ */ Symbol.for("react.lazy"), me = /* @__PURE__ */ Symbol.for("react.activity"), Dt = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), Bt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), O = /* @__PURE__ */ Symbol.for("react.view_transition"), Y = /* @__PURE__ */ Symbol.for("react.recoverable"), at = Symbol.iterator;
  function Z(e) {
    return e === null || typeof e != "object" ? null : (e = at && e[at] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ot = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Nt(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ot ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case W:
        return "Fragment";
      case ct:
        return "Profiler";
      case tt:
        return "StrictMode";
      case X:
        return "Suspense";
      case nt:
        return "SuspenseList";
      case me:
        return "Activity";
      case O:
        return "ViewTransition";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case $:
          return "Portal";
        case vt:
          return e.displayName || "Context";
        case gt:
          return (e._context.displayName || "Context") + ".Consumer";
        case H:
          var i = e.render;
          return e = e.displayName, e || (e = i.displayName || i.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case mt:
          return i = e.displayName || null, i !== null ? i : Nt(e.type) || "Memo";
        case St:
          i = e._payload, e = e._init;
          try {
            return Nt(e(i));
          } catch {
          }
      }
    return null;
  }
  var Lt = Array.isArray, st = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ut = n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, un = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Pa = [], ks = -1;
  function kn(e) {
    return { current: e };
  }
  function Ee(e) {
    0 > ks || (e.current = Pa[ks], Pa[ks] = null, ks--);
  }
  function qt(e, i) {
    ks++, Pa[ks] = e.current, e.current = i;
  }
  var Bn = kn(null), Ia = kn(null), bi = kn(null), Qr = kn(null);
  function Zr(e, i) {
    switch (qt(bi, i), qt(Ia, e), qt(Bn, null), i.nodeType) {
      case 9:
      case 11:
        e = (e = i.documentElement) && (e = e.namespaceURI) ? ym(e) : 0;
        break;
      default:
        if (e = i.tagName, i = i.namespaceURI)
          i = ym(i), e = vm(i, e);
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
    Ee(Bn), qt(Bn, e);
  }
  function Bs() {
    Ee(Bn), Ee(Ia), Ee(bi);
  }
  function rc(e) {
    var i = e.memoizedState;
    i !== null && (Ea._currentValue = i.memoizedState, qt(Qr, e)), i = Bn.current;
    var a = vm(i, e.type);
    i !== a && (qt(Ia, e), qt(Bn, a));
  }
  function $r(e) {
    Ia.current === e && (Ee(Bn), Ee(Ia)), Qr.current === e && (Ee(Qr), Ea._currentValue = un);
  }
  var oc, Id;
  function Ai(e) {
    if (oc === void 0)
      try {
        throw Error();
      } catch (a) {
        var i = a.stack.trim().match(/\n( *(at )?)/);
        oc = i && i[1] || "", Id = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + oc + e + Id;
  }
  var lc = !1;
  function cc(e, i) {
    if (!e || lc) return "";
    lc = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function() {
          try {
            if (i) {
              var V = function() {
                throw Error();
              };
              if (Object.defineProperty(V.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(V, []);
                } catch (Q) {
                  var R = Q;
                }
                Reflect.construct(e, [], V);
              } else {
                try {
                  V.call();
                } catch (Q) {
                  R = Q;
                }
                V = !1;
                try {
                  var F = Object.getOwnPropertyDescriptor(
                    e.prototype,
                    "props"
                  );
                  Object.defineProperty(e.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), V = !0, new e();
                } finally {
                  V && (F !== void 0 ? Object.defineProperty(e.prototype, "props", F) : delete e.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (Q) {
                R = Q;
              }
              (V = e()) && typeof V.catch == "function" && V.catch(function() {
              });
            }
          } catch (Q) {
            if (Q && R && typeof Q.stack == "string")
              return [Q.stack, R.stack];
          }
          return [null, null];
        }
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var h = Object.getOwnPropertyDescriptor(
        o.DetermineComponentFrameRoot,
        "name"
      );
      h && h.configurable && Object.defineProperty(
        o.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var f = o.DetermineComponentFrameRoot(), b = f[0], T = f[1];
      if (b && T) {
        var x = b.split(`
`), k = T.split(`
`);
        for (h = o = 0; o < x.length && !x[o].includes("DetermineComponentFrameRoot"); )
          o++;
        for (; h < k.length && !k[h].includes(
          "DetermineComponentFrameRoot"
        ); )
          h++;
        if (o === x.length || h === k.length)
          for (o = x.length - 1, h = k.length - 1; 1 <= o && 0 <= h && x[o] !== k[h]; )
            h--;
        for (; 1 <= o && 0 <= h; o--, h--)
          if (x[o] !== k[h]) {
            if (o !== 1 || h !== 1)
              do
                if (o--, h--, 0 > h || x[o] !== k[h]) {
                  var z = `
` + x[o].replace(" at new ", " at ");
                  return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), z;
                }
              while (1 <= o && 0 <= h);
            break;
          }
      }
    } finally {
      lc = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Ai(a) : "";
  }
  function M0(e, i) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ai(e.type);
      case 16:
        return Ai("Lazy");
      case 13:
        return e.child !== i && i !== null ? Ai("Suspense Fallback") : Ai("Suspense");
      case 19:
        return Ai("SuspenseList");
      case 0:
      case 15:
        return cc(e.type, !1);
      case 11:
        return cc(e.type.render, !1);
      case 1:
        return cc(e.type, !0);
      case 31:
        return Ai("Activity");
      case 30:
        return Ai("ViewTransition");
      default:
        return "";
    }
  }
  function Fd(e) {
    try {
      var i = "", a = null;
      do
        i += M0(e, a), a = e, e = e.return;
      while (e);
      return i;
    } catch (o) {
      return `
Error generating stack: ` + o.message + `
` + o.stack;
    }
  }
  var uc = Object.prototype.hasOwnProperty, hc = y.unstable_scheduleCallback, dc = y.unstable_cancelCallback, D0 = y.unstable_shouldYield, O0 = y.unstable_requestPaint, qe = y.unstable_now, N0 = y.unstable_getCurrentPriorityLevel, zd = y.unstable_ImmediatePriority, Ud = y.unstable_UserBlockingPriority, Wr = y.unstable_NormalPriority, R0 = y.unstable_LowPriority, Hd = y.unstable_IdlePriority, L0 = y.log, k0 = y.unstable_setDisableYieldValue, Fa = null, Ke = null;
  function Si(e) {
    if (typeof L0 == "function" && k0(e), Ke && typeof Ke.setStrictMode == "function")
      try {
        Ke.setStrictMode(Fa, e);
      } catch {
      }
  }
  var Qe = Math.clz32 ? Math.clz32 : I0, B0 = Math.log, P0 = Math.LN2;
  function I0(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (B0(e) / P0 | 0) | 0;
  }
  var Jr = 256, to = 262144, eo = 4194304;
  function Wi(e) {
    var i = e & 42;
    if (i !== 0) return i;
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
  function no(e, i, a) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var h = 0, f = e.suspendedLanes, b = e.pingedLanes;
    e = e.warmLanes;
    var T = o & 134217727;
    return T !== 0 ? (o = T & ~f, o !== 0 ? h = Wi(o) : (b &= T, b !== 0 ? h = Wi(b) : a || (a = T & ~e, a !== 0 && (h = Wi(a))))) : (T = o & ~f, T !== 0 ? h = Wi(T) : b !== 0 ? h = Wi(b) : a || (a = o & ~e, a !== 0 && (h = Wi(a)))), h === 0 ? 0 : i !== 0 && i !== h && (i & f) === 0 && (f = h & -h, a = i & -i, f >= a || f === 32 && (a & 4194048) !== 0) ? i : h;
  }
  function za(e, i) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & i) === 0;
  }
  function Gd(e, i) {
    (i & 8) !== 0 && (i |= i & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= i; 0 < a; ) {
        var o = 31 - Qe(a), h = 1 << o;
        i |= e[o], a &= ~h;
      }
    return i;
  }
  function F0(e, i) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return i + 250;
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
        return i + 5e3;
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
  function jd() {
    var e = eo;
    return eo <<= 1, (eo & 62914560) === 0 && (eo = 4194304), e;
  }
  function fc(e) {
    for (var i = [], a = 0; 31 > a; a++) i.push(e);
    return i;
  }
  function Ua(e, i) {
    e.pendingLanes |= i, i !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function z0(e, i, a, o, h, f) {
    var b = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var T = e.entanglements, x = e.expirationTimes, k = e.hiddenUpdates;
    for (a = b & ~a; 0 < a; ) {
      var z = 31 - Qe(a), V = 1 << z;
      T[z] = 0, x[z] = -1;
      var R = k[z];
      if (R !== null)
        for (k[z] = null, z = 0; z < R.length; z++) {
          var F = R[z];
          F !== null && (F.lane &= -536870913);
        }
      a &= ~V;
    }
    o !== 0 && Vd(e, o, 0), f !== 0 && h === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(b & ~i));
  }
  function Vd(e, i, a) {
    e.pendingLanes |= i, e.suspendedLanes &= ~i;
    var o = 31 - Qe(i);
    e.entangledLanes |= i, e.entanglements[o] = e.entanglements[o] | 1073741824 | a & 261930;
  }
  function Yd(e, i) {
    var a = e.entangledLanes |= i;
    for (e = e.entanglements; a; ) {
      var o = 31 - Qe(a), h = 1 << o;
      h & i | e[o] & i && (e[o] |= i), a &= ~h;
    }
  }
  function Xd(e, i) {
    var a = i & -i;
    return a = (a & 42) !== 0 ? 1 : pc(a), (a & (e.suspendedLanes | i)) !== 0 ? 0 : a;
  }
  function pc(e) {
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
  function gc(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function qd() {
    var e = ut.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : ey(e.type));
  }
  function Kd(e, i) {
    var a = ut.p;
    try {
      return ut.p = e, i();
    } finally {
      ut.p = a;
    }
  }
  var ei = Math.random().toString(36).slice(2), Te = "__reactFiber$" + ei, Fe = "__reactProps$" + ei, Ps = "__reactContainer$" + ei, Qd = "__reactEvents$" + ei, U0 = "__reactListeners$" + ei, H0 = "__reactHandles$" + ei, Zd = "__reactResources$" + ei, Ha = "__reactMarker$" + ei, io = "__reactLoad$" + ei;
  function so(e) {
    delete e[Te], delete e[Fe], delete e[U0], delete e[H0];
  }
  function Ji(e) {
    var i;
    if (i = e[Te]) return i;
    for (var a = e.parentNode; a; ) {
      if (i = a[Ps] || a[Te]) {
        if (a = i.alternate, i.child !== null || a !== null && a.child !== null)
          for (e = Bm(e); e !== null; ) {
            if (a = e[Te]) return a;
            e = Bm(e);
          }
        return i;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function Is(e) {
    if (e = e[Te] || e[Ps]) {
      var i = e.tag;
      if (i === 5 || i === 6 || i === 13 || i === 31 || i === 26 || i === 27 || i === 3)
        return e;
    }
    return null;
  }
  function Ga(e) {
    var i = e.tag;
    if (i === 5 || i === 26 || i === 27 || i === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Fs(e) {
    var i = e[Zd];
    return i || (i = e[Zd] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), i;
  }
  function ye(e) {
    e[Ha] = !0;
  }
  function $d(e) {
    e[io] = void 0;
  }
  var Wd = /* @__PURE__ */ new Set(), Jd = {};
  function ts(e, i) {
    zs(e, i), zs(e + "Capture", i);
  }
  function zs(e, i) {
    for (Jd[e] = i, e = 0; e < i.length; e++)
      Wd.add(i[e]);
  }
  var G0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), tf = {}, ef = {};
  function j0(e) {
    return uc.call(ef, e) ? !0 : uc.call(tf, e) ? !1 : G0.test(e) ? ef[e] = !0 : (tf[e] = !0, !1);
  }
  var Pt = !1;
  function nf() {
    var e = Pt;
    return Pt = !1, e;
  }
  function ao(e, i, a) {
    if (j0(i))
      if (a === null) e.removeAttribute(i);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(i);
            return;
          case "boolean":
            var o = i.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              e.removeAttribute(i);
              return;
            }
        }
        e.setAttribute(i, a);
      }
  }
  function ro(e, i, a) {
    if (a === null) e.removeAttribute(i);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(i);
          return;
      }
      e.setAttribute(i, a);
    }
  }
  function ni(e, i, a, o) {
    if (o === null) e.removeAttribute(a);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(i, a, o);
    }
  }
  function Ze(e) {
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
  function sf(e) {
    var i = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (i === "checkbox" || i === "radio");
  }
  function V0(e, i, a) {
    var o = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      i
    );
    if (!e.hasOwnProperty(i) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var h = o.get, f = o.set;
      return Object.defineProperty(e, i, {
        configurable: !0,
        get: function() {
          return h.call(this);
        },
        set: function(b) {
          a = "" + b, f.call(this, b);
        }
      }), Object.defineProperty(e, i, {
        enumerable: o.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(b) {
          a = "" + b;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[i];
        }
      };
    }
  }
  function mc(e) {
    if (!e._valueTracker) {
      var i = sf(e) ? "checked" : "value";
      e._valueTracker = V0(
        e,
        i,
        "" + e[i]
      );
    }
  }
  function af(e) {
    if (!e) return !1;
    var i = e._valueTracker;
    if (!i) return !0;
    var a = i.getValue(), o = "";
    return e && (o = sf(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== a ? (i.setValue(e), !0) : !1;
  }
  var Y0 = /[\n"\\]/g;
  function hn(e) {
    return e.replace(
      Y0,
      function(i) {
        return "\\" + i.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function yc(e, i, a, o, h, f, b, T) {
    e.name = "", b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? e.type = b : e.removeAttribute("type"), i != null ? b === "number" ? (i === 0 && e.value === "" || e.value != i) && (e.value = "" + Ze(i)) : e.value !== "" + Ze(i) && (e.value = "" + Ze(i)) : b !== "submit" && b !== "reset" || e.removeAttribute("value"), i != null ? b === "number" && e.value == i ? vc(e, Ze(e.value)) : vc(e, Ze(i)) : a != null ? vc(e, Ze(a)) : o != null && e.removeAttribute("value"), h == null && f != null && (e.defaultChecked = !!f), h != null && (e.checked = h && typeof h != "function" && typeof h != "symbol"), T != null && typeof T != "function" && typeof T != "symbol" && typeof T != "boolean" ? e.name = "" + Ze(T) : e.removeAttribute("name");
  }
  function rf(e, i, a, o, h, f, b, T) {
    if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.type = f), i != null || a != null) {
      if (!(f !== "submit" && f !== "reset" || i != null)) {
        mc(e);
        return;
      }
      a = a != null ? "" + Ze(a) : "", i = i != null ? "" + Ze(i) : a, T || i === e.value || (e.value = i), e.defaultValue = i;
    }
    o = o ?? h, o = typeof o != "function" && typeof o != "symbol" && !!o, e.checked = T ? e.checked : !!o, e.defaultChecked = !!o, b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" && (e.name = b), mc(e);
  }
  function vc(e, i) {
    e.defaultValue !== "" + i && (e.defaultValue = "" + i);
  }
  function Us(e, i, a, o) {
    if (e = e.options, i) {
      i = {};
      for (var h = 0; h < a.length; h++)
        i["$" + a[h]] = !0;
      for (a = 0; a < e.length; a++)
        h = i.hasOwnProperty("$" + e[a].value), e[a].selected !== h && (e[a].selected = h), h && o && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + Ze(a), i = null, h = 0; h < e.length; h++) {
        if (e[h].value === a) {
          e[h].selected = !0, o && (e[h].defaultSelected = !0);
          return;
        }
        i !== null || e[h].disabled || (i = e[h]);
      }
      i !== null && (i.selected = !0);
    }
  }
  function of(e, i, a) {
    if (i != null && (i = "" + Ze(i), i !== e.value && (e.value = i), a == null)) {
      e.defaultValue !== i && (e.defaultValue = i);
      return;
    }
    e.defaultValue = a != null ? "" + Ze(a) : "";
  }
  function lf(e, i, a, o) {
    if (i == null) {
      if (o != null) {
        if (a != null) throw Error(s(92));
        if (Lt(o)) {
          if (1 < o.length) throw Error(s(93));
          o = o[0];
        }
        a = o;
      }
      a == null && (a = ""), i = a;
    }
    a = Ze(i), e.defaultValue = a, o = e.textContent, o === a && o !== "" && o !== null && (e.value = o), mc(e);
  }
  function Hs(e, i) {
    if (i) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = i;
        return;
      }
    }
    e.textContent = i;
  }
  var X0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function cf(e, i, a) {
    var o = i.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? o ? e.setProperty(i, "") : i === "float" ? e.cssFloat = "" : e[i] = "" : o ? e.setProperty(i, a) : typeof a != "number" || a === 0 || X0.has(i) ? i === "float" ? e.cssFloat = a : e[i] = ("" + a).trim() : e[i] = a + "px";
  }
  function uf(e, i, a) {
    if (i != null && typeof i != "object")
      throw Error(s(62));
    if (e = e.style, a != null) {
      for (var o in a)
        !a.hasOwnProperty(o) || i != null && i.hasOwnProperty(o) || (o.indexOf("--") === 0 ? e.setProperty(o, "") : o === "float" ? e.cssFloat = "" : e[o] = "", Pt = !0);
      for (var h in i)
        o = i[h], i.hasOwnProperty(h) && a[h] !== o && (cf(e, h, o), Pt = !0);
    } else
      for (var f in i)
        i.hasOwnProperty(f) && cf(e, f, i[f]);
  }
  function bc(e) {
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
  var q0 = /* @__PURE__ */ new Map([
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
  ]), K0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function oo(e) {
    return K0.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Pn() {
  }
  var Ac = null;
  function Sc(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Gs = null, js = null;
  function hf(e) {
    var i = Is(e);
    if (i && (e = i.stateNode)) {
      var a = e[Fe] || null;
      t: switch (e = i.stateNode, i.type) {
        case "input":
          if (yc(
            e,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), i = a.name, a.type === "radio" && i != null) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + hn(
                "" + i
              ) + '"][type="radio"]'
            ), i = 0; i < a.length; i++) {
              var o = a[i];
              if (o !== e && o.form === e.form) {
                var h = o[Fe] || null;
                if (!h) throw Error(s(90));
                yc(
                  o,
                  h.value,
                  h.defaultValue,
                  h.defaultValue,
                  h.checked,
                  h.defaultChecked,
                  h.type,
                  h.name
                );
              }
            }
            for (i = 0; i < a.length; i++)
              o = a[i], o.form === e.form && af(o);
          }
          break t;
        case "textarea":
          of(e, a.value, a.defaultValue);
          break t;
        case "select":
          i = a.value, i != null && Us(e, !!a.multiple, i, !1);
      }
    }
  }
  var Ec = !1;
  function df(e, i, a) {
    if (Ec) return e(i, a);
    Ec = !0;
    try {
      var o = e(i);
      return o;
    } finally {
      if (Ec = !1, (Gs !== null || js !== null) && (ll(), Gs && (i = Gs, e = js, js = Gs = null, hf(i), e)))
        for (i = 0; i < e.length; i++) hf(e[i]);
    }
  }
  function ja(e, i) {
    var a = e.stateNode;
    if (a === null) return null;
    var o = a[Fe] || null;
    if (o === null) return null;
    a = o[i];
    t: switch (i) {
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
        (o = !o.disabled) || (e = e.type, o = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !o;
        break t;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function")
      throw Error(
        s(231, i, typeof a)
      );
    return a;
  }
  var ii = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Tc = !1;
  if (ii)
    try {
      var Va = {};
      Object.defineProperty(Va, "passive", {
        get: function() {
          Tc = !0;
        }
      }), window.addEventListener("test", Va, Va), window.removeEventListener("test", Va, Va);
    } catch {
      Tc = !1;
    }
  var Ei = null, _c = null, lo = null;
  function ff() {
    if (lo) return lo;
    var e, i = _c, a = i.length, o, h = "value" in Ei ? Ei.value : Ei.textContent, f = h.length;
    for (e = 0; e < a && i[e] === h[e]; e++) ;
    var b = a - e;
    for (o = 1; o <= b && i[a - o] === h[f - o]; o++) ;
    return lo = h.slice(e, 1 < o ? 1 - o : void 0);
  }
  function co(e) {
    var i = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && i === 13 && (e = 13)) : e = i, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function uo() {
    return !0;
  }
  function pf() {
    return !1;
  }
  function Re(e) {
    function i(a, o, h, f, b) {
      this._reactName = a, this._targetInst = h, this.type = o, this.nativeEvent = f, this.target = b, this.currentTarget = null;
      for (var T in e)
        e.hasOwnProperty(T) && (a = e[T], this[T] = a ? a(f) : f[T]);
      return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? uo : pf, this.isPropagationStopped = pf, this;
    }
    return U(i.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = uo);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = uo);
      },
      persist: function() {
      },
      isPersistent: uo
    }), i;
  }
  var Ti = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ho = Re(Ti), Ya = U({}, Ti, { view: 0, detail: 0 }), Q0 = Re(Ya), wc, Cc, Xa, fo = U({}, Ya, {
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
    getModifierState: Mc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Xa && (Xa && e.type === "mousemove" ? (wc = e.screenX - Xa.screenX, Cc = e.screenY - Xa.screenY) : Cc = wc = 0, Xa = e), wc);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Cc;
    }
  }), gf = Re(fo), Z0 = U({}, fo, { dataTransfer: 0 }), $0 = Re(Z0), W0 = U({}, Ya, { relatedTarget: 0 }), xc = Re(W0), J0 = U({}, Ti, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), tv = Re(J0), ev = U({}, Ti, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), nv = Re(ev), iv = U({}, Ti, { data: 0 }), mf = Re(iv), sv = {
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
  }, av = {
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
  }, rv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function ov(e) {
    var i = this.nativeEvent;
    return i.getModifierState ? i.getModifierState(e) : (e = rv[e]) ? !!i[e] : !1;
  }
  function Mc() {
    return ov;
  }
  var lv = U({}, Ya, {
    key: function(e) {
      if (e.key) {
        var i = sv[e.key] || e.key;
        if (i !== "Unidentified") return i;
      }
      return e.type === "keypress" ? (e = co(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? av[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Mc,
    charCode: function(e) {
      return e.type === "keypress" ? co(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? co(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), cv = Re(lv), uv = U({}, fo, {
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
  }), yf = Re(uv), hv = U({}, Ti, { submitter: 0 }), dv = Re(hv), fv = U({}, Ya, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Mc
  }), pv = Re(fv), gv = U({}, Ti, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), mv = Re(gv), yv = U({}, fo, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), vv = Re(yv), bv = U({}, Ti, {
    newState: 0,
    oldState: 0,
    source: 0
  }), Av = Re(bv), Sv = [9, 13, 27, 32], Dc = ii && "CompositionEvent" in window, qa = null;
  ii && "documentMode" in document && (qa = document.documentMode);
  var Ev = ii && "TextEvent" in window && !qa, vf = ii && (!Dc || qa && 8 < qa && 11 >= qa), bf = " ", Af = !1;
  function Sf(e, i) {
    switch (e) {
      case "keyup":
        return Sv.indexOf(i.keyCode) !== -1;
      case "keydown":
        return i.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ef(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Vs = !1;
  function Tv(e, i) {
    switch (e) {
      case "compositionend":
        return Ef(i);
      case "keypress":
        return i.which !== 32 ? null : (Af = !0, bf);
      case "textInput":
        return e = i.data, e === bf && Af ? null : e;
      default:
        return null;
    }
  }
  function _v(e, i) {
    if (Vs)
      return e === "compositionend" || !Dc && Sf(e, i) ? (e = ff(), lo = _c = Ei = null, Vs = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(i.ctrlKey || i.altKey || i.metaKey) || i.ctrlKey && i.altKey) {
          if (i.char && 1 < i.char.length)
            return i.char;
          if (i.which) return String.fromCharCode(i.which);
        }
        return null;
      case "compositionend":
        return vf && i.locale !== "ko" ? null : i.data;
      default:
        return null;
    }
  }
  var wv = {
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
  function Tf(e) {
    var i = e && e.nodeName && e.nodeName.toLowerCase();
    return i === "input" ? !!wv[e.type] : i === "textarea";
  }
  function _f(e, i, a, o) {
    Gs ? js ? js.push(o) : js = [o] : Gs = o, i = pl(i, "onChange"), 0 < i.length && (a = new ho(
      "onChange",
      "change",
      null,
      a,
      o
    ), e.push({ event: a, listeners: i }));
  }
  var Ka = null, Qa = null;
  function Cv(e) {
    hm(e, 0);
  }
  function po(e) {
    var i = Ga(e);
    if (af(i)) return e;
  }
  function wf(e, i) {
    if (e === "change") return i;
  }
  var Cf = !1;
  if (ii) {
    var Oc;
    if (ii) {
      var Nc = "oninput" in document;
      if (!Nc) {
        var xf = document.createElement("div");
        xf.setAttribute("oninput", "return;"), Nc = typeof xf.oninput == "function";
      }
      Oc = Nc;
    } else Oc = !1;
    Cf = Oc && (!document.documentMode || 9 < document.documentMode);
  }
  function Mf() {
    Ka && (Ka.detachEvent("onpropertychange", Df), Qa = Ka = null);
  }
  function Df(e) {
    if (e.propertyName === "value" && po(Qa)) {
      var i = [];
      _f(
        i,
        Qa,
        e,
        Sc(e)
      ), df(Cv, i);
    }
  }
  function xv(e, i, a) {
    e === "focusin" ? (Mf(), Ka = i, Qa = a, Ka.attachEvent("onpropertychange", Df)) : e === "focusout" && Mf();
  }
  function Mv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return po(Qa);
  }
  function Dv(e, i) {
    if (e === "click") return po(i);
  }
  function Ov(e, i) {
    if (e === "input" || e === "change")
      return po(i);
  }
  function Nv(e, i) {
    return e === i && (e !== 0 || 1 / e === 1 / i) || e !== e && i !== i;
  }
  var $e = typeof Object.is == "function" ? Object.is : Nv;
  function Za(e, i) {
    if ($e(e, i)) return !0;
    if (typeof e != "object" || e === null || typeof i != "object" || i === null)
      return !1;
    var a = Object.keys(e), o = Object.keys(i);
    if (a.length !== o.length) return !1;
    for (o = 0; o < a.length; o++) {
      var h = a[o];
      if (!uc.call(i, h) || !$e(e[h], i[h]))
        return !1;
    }
    return !0;
  }
  function Rc(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Of(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Nf(e, i) {
    var a = Of(e);
    e = 0;
    for (var o; a; ) {
      if (a.nodeType === 3) {
        if (o = e + a.textContent.length, e <= i && o >= i)
          return { node: a, offset: i - e };
        e = o;
      }
      t: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break t;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Of(a);
    }
  }
  function Rf(e, i) {
    return e && i ? e === i ? !0 : e && e.nodeType === 3 ? !1 : i && i.nodeType === 3 ? Rf(e, i.parentNode) : "contains" in e ? e.contains(i) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(i) & 16) : !1 : !1;
  }
  function Lf(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var i = Rc(e.document); i instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof i.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = i.contentWindow;
      else break;
      i = Rc(e.document);
    }
    return i;
  }
  function Lc(e) {
    var i = e && e.nodeName && e.nodeName.toLowerCase();
    return i && (i === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || i === "textarea" || e.contentEditable === "true");
  }
  var Rv = ii && "documentMode" in document && 11 >= document.documentMode, Ys = null, kc = null, $a = null, Bc = !1;
  function kf(e, i, a) {
    var o = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Bc || Ys == null || Ys !== Rc(o) || (o = Ys, "selectionStart" in o && Lc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
      anchorNode: o.anchorNode,
      anchorOffset: o.anchorOffset,
      focusNode: o.focusNode,
      focusOffset: o.focusOffset
    }), $a && Za($a, o) || ($a = o, o = pl(kc, "onSelect"), 0 < o.length && (i = new ho(
      "onSelect",
      "select",
      null,
      i,
      a
    ), e.push({ event: i, listeners: o }), i.target = Ys)));
  }
  function es(e, i) {
    var a = {};
    return a[e.toLowerCase()] = i.toLowerCase(), a["Webkit" + e] = "webkit" + i, a["Moz" + e] = "moz" + i, a;
  }
  var Xs = {
    animationend: es("Animation", "AnimationEnd"),
    animationiteration: es("Animation", "AnimationIteration"),
    animationstart: es("Animation", "AnimationStart"),
    transitionrun: es("Transition", "TransitionRun"),
    transitionstart: es("Transition", "TransitionStart"),
    transitioncancel: es("Transition", "TransitionCancel"),
    transitionend: es("Transition", "TransitionEnd")
  }, Pc = {}, Bf = {};
  ii && (Bf = document.createElement("div").style, "AnimationEvent" in window || (delete Xs.animationend.animation, delete Xs.animationiteration.animation, delete Xs.animationstart.animation), "TransitionEvent" in window || delete Xs.transitionend.transition);
  function ns(e) {
    if (Pc[e]) return Pc[e];
    if (!Xs[e]) return e;
    var i = Xs[e], a;
    for (a in i)
      if (i.hasOwnProperty(a) && a in Bf)
        return Pc[e] = i[a];
    return e;
  }
  var Pf = ns("animationend"), If = ns("animationiteration"), Ff = ns("animationstart"), Lv = ns("transitionrun"), kv = ns("transitionstart"), Bv = ns("transitioncancel"), zf = ns("transitionend"), Uf = /* @__PURE__ */ new Map(), Ic = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Ic.push("scrollEnd");
  function Tn(e, i) {
    Uf.set(e, i), ts(i, [e]);
  }
  var Pv = 0;
  function si(e, i) {
    if (e.name != null && e.name !== "auto") return e.name;
    if (i.autoName !== null) return i.autoName;
    e = xn.identifierPrefix;
    var a = Pv++;
    return e = "_" + e + "t_" + a.toString(32) + "_", i.autoName = e;
  }
  function Hf(e) {
    if (e == null || typeof e == "string")
      return e;
    var i = null, a = da;
    if (a !== null)
      for (var o = 0; o < a.length; o++) {
        var h = e[a[o]];
        if (h != null) {
          if (h === "none") return "none";
          i = i == null ? h : i + (" " + h);
        }
      }
    return i ?? e.default;
  }
  function ai(e, i) {
    return e = Hf(e), i = Hf(i), i == null ? e === "auto" ? null : e : i === "auto" ? null : i;
  }
  var go = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var i = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(i)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, dn = [], qs = 0, Fc = 0;
  function mo() {
    for (var e = qs, i = Fc = qs = 0; i < e; ) {
      var a = dn[i];
      dn[i++] = null;
      var o = dn[i];
      dn[i++] = null;
      var h = dn[i];
      dn[i++] = null;
      var f = dn[i];
      if (dn[i++] = null, o !== null && h !== null) {
        var b = o.pending;
        b === null ? h.next = h : (h.next = b.next, b.next = h), o.pending = h;
      }
      f !== 0 && Gf(a, h, f);
    }
  }
  function yo(e, i, a, o) {
    dn[qs++] = e, dn[qs++] = i, dn[qs++] = a, dn[qs++] = o, Fc |= o, e.lanes |= o, e = e.alternate, e !== null && (e.lanes |= o);
  }
  function zc(e, i, a, o) {
    return yo(e, i, a, o), vo(e);
  }
  function is(e, i) {
    return yo(e, null, null, i), vo(e);
  }
  function Gf(e, i, a) {
    e.lanes |= a;
    var o = e.alternate;
    o !== null && (o.lanes |= a);
    for (var h = !1, f = e.return; f !== null; )
      f.childLanes |= a, o = f.alternate, o !== null && (o.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & 1 || (h = !0)), e = f, f = f.return;
    return e.tag === 3 ? (f = e.stateNode, h && i !== null && (h = 31 - Qe(a), e = f.hiddenUpdates, o = e[h], o === null ? e[h] = [i] : o.push(i), i.lane = a | 536870912), f) : null;
  }
  function vo(e) {
    if (50 < br)
      throw br = 0, ol = null, Error(s(185));
    for (var i = e.return; i !== null; )
      e = i, i = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ks = {};
  function Iv(e, i, a, o) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = i, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ze(e, i, a, o) {
    return new Iv(e, i, a, o);
  }
  function Uc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ri(e, i) {
    var a = e.alternate;
    return a === null ? (a = ze(
      e.tag,
      i,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = i, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 1206910976, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, i = e.dependencies, a.dependencies = i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function jf(e, i) {
    e.flags &= 1206910978;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = i, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, i = a.dependencies, e.dependencies = i === null ? null : {
      lanes: i.lanes,
      firstContext: i.firstContext
    }), e;
  }
  function bo(e, i, a, o, h, f) {
    var b = 0;
    if (o = e, typeof o == "function") Uc(o) && (b = 1);
    else if (typeof o == "string")
      b = hA(
        e,
        a,
        Bn.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      t: switch (o) {
        case me:
          return e = ze(31, a, i, h), e.elementType = me, e.lanes = f, e;
        case W:
          return ss(a.children, h, f, i);
        case tt:
          b = 8, h |= 24;
          break;
        case ct:
          return e = ze(12, a, i, h | 2), e.elementType = ct, e.lanes = f, e;
        case X:
          return e = ze(13, a, i, h), e.elementType = X, e.lanes = f, e;
        case nt:
          return e = ze(19, a, i, h), e.elementType = nt, e.lanes = f, e;
        case Dt:
        case O:
          return e = h | 32, e = ze(30, a, i, e), e.elementType = O, e.lanes = f, e.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, e;
        default:
          if (typeof o == "object" && o !== null)
            switch (o.$$typeof) {
              case vt:
                b = 10;
                break t;
              case gt:
                b = 9;
                break t;
              case H:
                b = 11;
                break t;
              case mt:
                b = 14;
                break t;
              case St:
                b = 16, o = null;
                break t;
            }
          b = 29, a = Error(
            s(130, e === null ? "null" : typeof e, "")
          ), o = null;
      }
    return i = ze(b, a, i, h), i.elementType = e, i.type = o, i.lanes = f, i;
  }
  function ss(e, i, a, o) {
    return e = ze(7, e, o, i), e.lanes = a, e;
  }
  function Hc(e, i, a) {
    return e = ze(6, e, null, i), e.lanes = a, e;
  }
  function Vf(e) {
    var i = ze(18, null, null, 0);
    return i.stateNode = e, i;
  }
  function Gc(e, i, a) {
    return i = ze(
      4,
      e.children !== null ? e.children : [],
      e.key,
      i
    ), i.lanes = a, i.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, i;
  }
  var Yf = /* @__PURE__ */ new WeakMap();
  function fn(e, i) {
    if (typeof e == "object" && e !== null) {
      var a = Yf.get(e);
      return a !== void 0 ? a : (i = {
        value: e,
        source: i,
        stack: Fd(i)
      }, Yf.set(e, i), i);
    }
    return {
      value: e,
      source: i,
      stack: Fd(i)
    };
  }
  var Qs = [], Zs = 0, Ao = null, Wa = 0, pn = [], gn = 0, _i = null, In = 1, Fn = "";
  function oi(e, i) {
    Qs[Zs++] = Wa, Qs[Zs++] = Ao, Ao = e, Wa = i;
  }
  function Xf(e, i, a) {
    pn[gn++] = In, pn[gn++] = Fn, pn[gn++] = _i, _i = e;
    var o = In;
    e = Fn;
    var h = 32 - Qe(o) - 1;
    o &= ~(1 << h), a += 1;
    var f = 32 - Qe(i) + h;
    if (30 < f) {
      var b = h - h % 5;
      f = (o & (1 << b) - 1).toString(32), o >>= b, h -= b, In = 1 << 32 - Qe(i) + h | a << h | o, Fn = f + e;
    } else
      In = 1 << f | a << h | o, Fn = e;
  }
  function So(e) {
    e.return !== null && (oi(e, 1), Xf(e, 1, 0));
  }
  function jc(e) {
    for (; e === Ao; )
      Ao = Qs[--Zs], Qs[Zs] = null, Wa = Qs[--Zs], Qs[Zs] = null;
    for (; e === _i; )
      _i = pn[--gn], pn[gn] = null, Fn = pn[--gn], pn[gn] = null, In = pn[--gn], pn[gn] = null;
  }
  function qf(e, i) {
    pn[gn++] = In, pn[gn++] = Fn, pn[gn++] = _i, In = i.id, Fn = i.overflow, _i = e;
  }
  var ve = null, Kt = null, Et = !1, wi = null, mn = !1, Vc = Error(s(519));
  function Ci(e) {
    var i = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ja(fn(i, e)), Vc;
  }
  function Kf(e) {
    var i = e.stateNode, a = e.type, o = e.memoizedProps;
    switch (i[Te] = e, i[Fe] = o, a) {
      case "dialog":
        _t("cancel", i), _t("close", i);
        break;
      case "iframe":
      case "object":
      case "embed":
        _t("load", i);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Sr.length; a++)
          _t(Sr[a], i);
        break;
      case "source":
        _t("error", i);
        break;
      case "img":
      case "image":
      case "link":
        _t("error", i), _t("load", i);
        break;
      case "details":
        _t("toggle", i);
        break;
      case "input":
        _t("invalid", i), rf(
          i,
          o.value,
          o.defaultValue,
          o.checked,
          o.defaultChecked,
          o.type,
          o.name,
          !0
        );
        break;
      case "select":
        _t("invalid", i);
        break;
      case "textarea":
        _t("invalid", i), lf(i, o.value, o.defaultValue, o.children);
    }
    a = o.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || i.textContent === "" + a || o.suppressHydrationWarning === !0 || gm(i.textContent, a) ? (o.popover != null && (_t("beforetoggle", i), _t("toggle", i)), o.onScroll != null && _t("scroll", i), o.onScrollEnd != null && _t("scrollend", i), o.onClick != null && (i.onclick = Pn), i = !0) : i = !1, i || Ci(e, !0);
  }
  function Eo(e) {
    for (ve = e.return; ve; )
      switch (ve.tag) {
        case 5:
        case 31:
        case 13:
          mn = !1;
          return;
        case 27:
        case 3:
          mn = !0;
          return;
        default:
          ve = ve.return;
      }
  }
  function $s(e) {
    if (e !== ve) return !1;
    if (!Et) return Eo(e), Et = !0, !1;
    var i = e.tag, a;
    if ((a = i !== 3 && i !== 27) && ((a = i === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Ah(e.type, e.memoizedProps)), a = !a), a && Kt && Ci(e), Eo(e), i === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      Kt = km(e);
    } else if (i === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      Kt = km(e);
    } else
      i === 27 ? (i = Kt, Gi(e.type) ? (e = Dh, Dh = null, Kt = e) : Kt = i) : Kt = ve ? vn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function as() {
    Kt = ve = null, Et = !1;
  }
  function Yc() {
    var e = wi;
    return e !== null && (Ge === null ? Ge = e : Ge.push.apply(
      Ge,
      e
    ), wi = null), e;
  }
  function Ja(e) {
    wi === null ? wi = [e] : wi.push(e);
  }
  var Xc = kn(null), rs = null, li = null;
  function xi(e, i, a) {
    qt(Xc, i._currentValue), i._currentValue = a;
  }
  function ci(e) {
    e._currentValue = Xc.current, Ee(Xc);
  }
  function To(e, i, a) {
    for (; e !== null; ) {
      var o = e.alternate;
      if ((e.childLanes & i) !== i ? (e.childLanes |= i, o !== null && (o.childLanes |= i)) : o !== null && (o.childLanes & i) !== i && (o.childLanes |= i), e === a) break;
      e = e.return;
    }
  }
  function qc(e, i, a, o) {
    var h = e.child;
    for (h !== null && (h.return = e); h !== null; ) {
      var f = h.dependencies;
      if (f !== null) {
        var b = h.child;
        f = f.firstContext;
        t: for (; f !== null; ) {
          var T = f;
          f = h;
          for (var x = 0; x < i.length; x++)
            if (T.context === i[x]) {
              f.lanes |= a, T = f.alternate, T !== null && (T.lanes |= a), To(
                f.return,
                a,
                e
              ), o || (b = null);
              break t;
            }
          f = T.next;
        }
      } else if (h.tag === 18) {
        if (b = h.return, b === null) throw Error(s(341));
        b.lanes |= a, f = b.alternate, f !== null && (f.lanes |= a), To(b, a, e), b = null;
      } else
        h.tag === 13 && h.memoizedState !== null && h.memoizedState.dehydrated === null ? (h.lanes |= a, b = h.alternate, b !== null && (b.lanes |= a), To(
          h.return,
          a,
          e
        ), b = h.child, b = b !== null ? b.sibling : null) : b = h.child;
      if (b !== null) b.return = h;
      else
        for (b = h; b !== null; ) {
          if (b === e) {
            b = null;
            break;
          }
          if (h = b.sibling, h !== null) {
            h.return = b.return, b = h;
            break;
          }
          b = b.return;
        }
      h = b;
    }
  }
  function os(e, i, a, o) {
    e = null;
    for (var h = i, f = !1; h !== null; ) {
      if (!f) {
        if ((h.flags & 524288) !== 0) f = !0;
        else if ((h.flags & 262144) !== 0) break;
      }
      if (h.tag === 10) {
        var b = h.alternate;
        if (b === null) throw Error(s(387));
        if (b = b.memoizedProps, b !== null) {
          var T = h.type;
          $e(h.pendingProps.value, b.value) || (e !== null ? e.push(T) : e = [T]);
        }
      } else if (h === Qr.current) {
        if (b = h.alternate, b === null) throw Error(s(387));
        b.memoizedState.memoizedState !== h.memoizedState.memoizedState && (e !== null ? e.push(Ea) : e = [Ea]);
      }
      h = h.return;
    }
    return e !== null && qc(
      i,
      e,
      a,
      o
    ), i.flags |= 262144, e !== null;
  }
  function _o(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!$e(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function ls(e) {
    rs = e, li = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function _e(e) {
    return Qf(rs, e);
  }
  function wo(e, i) {
    return rs === null && ls(e), Qf(e, i);
  }
  function Qf(e, i) {
    var a = i._currentValue;
    if (i = { context: i, memoizedValue: a, next: null }, li === null) {
      if (e === null) throw Error(s(308));
      li = i, e.dependencies = { lanes: 0, firstContext: i }, e.flags |= 524288;
    } else li = li.next = i;
    return a;
  }
  var Fv = typeof AbortController < "u" ? AbortController : function() {
    var e = [], i = this.signal = {
      aborted: !1,
      addEventListener: function(a, o) {
        e.push(o);
      }
    };
    this.abort = function() {
      i.aborted = !0, e.forEach(function(a) {
        return a();
      });
    };
  }, zv = y.unstable_scheduleCallback, Uv = y.unstable_NormalPriority, le = {
    $$typeof: vt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Kc() {
    return {
      controller: new Fv(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function tr(e) {
    e.refCount--, e.refCount === 0 && zv(Uv, function() {
      e.controller.abort();
    });
  }
  function Zf(e, i) {
    if ((e.pendingLanes & 4194048) !== 0) {
      var a = e.transitionTypes;
      for (a === null && (a = e.transitionTypes = []), e = 0; e < i.length; e++) {
        var o = i[e];
        a.indexOf(o) === -1 && a.push(o);
      }
    }
  }
  var er = null;
  function Hv(e) {
    var i = e.transitionTypes;
    return e.transitionTypes = null, i;
  }
  var nr = null, Qc = 0, cs = 0, Ws = null;
  function Gv(e, i) {
    if (nr === null) {
      var a = nr = [];
      Qc = 0, cs = hh(), Ws = {
        status: "pending",
        value: void 0,
        then: function(o) {
          a.push(o);
        }
      };
    }
    return Qc++, i.then($f, $f), i;
  }
  function $f() {
    if (--Qc === 0 && (er = null, nr !== null)) {
      Ws !== null && (Ws.status = "fulfilled");
      var e = nr;
      nr = null, cs = 0, Ws = null;
      for (var i = 0; i < e.length; i++) (0, e[i])();
    }
  }
  function jv(e, i) {
    var a = [], o = {
      status: "pending",
      value: null,
      reason: null,
      then: function(h) {
        a.push(h);
      }
    };
    return e.then(
      function() {
        o.status = "fulfilled", o.value = i;
        for (var h = 0; h < a.length; h++) (0, a[h])(i);
      },
      function(h) {
        for (o.status = "rejected", o.reason = h, h = 0; h < a.length; h++)
          (0, a[h])(void 0);
      }
    ), o;
  }
  var Wf = st.S;
  st.S = function(e, i) {
    if (Vg = qe(), typeof i == "object" && i !== null && typeof i.then == "function" && Gv(e, i), er !== null)
      for (var a = ma; a !== null; )
        Zf(a, er), a = a.next;
    if (a = e.types, a !== null) {
      for (var o = ma; o !== null; )
        Zf(o, a), o = o.next;
      if (cs !== 0) {
        o = er, o === null && (o = er = []);
        for (var h = 0; h < a.length; h++) {
          var f = a[h];
          o.indexOf(f) === -1 && o.push(f);
        }
      }
    }
    Wf !== null && Wf(e, i);
  };
  var us = kn(null);
  function Zc() {
    var e = us.current;
    return e !== null ? e : Xt.pooledCache;
  }
  function Co(e, i) {
    i === null ? qt(us, us.current) : qt(us, i.pool);
  }
  function Jf() {
    var e = Zc();
    return e === null ? null : { parent: le._currentValue, pool: e };
  }
  var Js = Error(s(460)), $c = Error(s(474)), xo = Error(s(542)), Mo = { then: function() {
  } };
  function tp(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function ep(e, i, a) {
    switch (a = e[a], a === void 0 ? e.push(i) : a !== i && (i.then(Pn, Pn), i = a), i.status) {
      case "fulfilled":
        return i.value;
      case "rejected":
        throw e = i.reason, ip(e), e === void 0 && !("reason" in i) ? Error(s(600)) : e;
      default:
        if (typeof i.status == "string") i.then(Pn, Pn);
        else {
          if (e = Xt, e !== null && 100 < e.shellSuspendCounter)
            throw Error(s(482));
          e = i, e.status = "pending", e.then(
            function(o) {
              if (i.status === "pending") {
                var h = i;
                h.status = "fulfilled", h.value = o;
              }
            },
            function(o) {
              if (i.status === "pending") {
                var h = i;
                h.status = "rejected", h.reason = o;
              }
            }
          );
        }
        switch (i.status) {
          case "fulfilled":
            return i.value;
          case "rejected":
            throw e = i.reason, ip(e), e;
        }
        throw ds = i, Js;
    }
  }
  function hs(e) {
    try {
      var i = e._init;
      return i(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (ds = a, Js) : a;
    }
  }
  var ds = null;
  function np() {
    if (ds === null) throw Error(s(459));
    var e = ds;
    return ds = null, e;
  }
  function ip(e) {
    if (e === Js || e === xo)
      throw Error(s(483));
  }
  var ta = null, ir = 0;
  function Do(e) {
    var i = ir;
    return ir += 1, ta === null && (ta = []), ep(ta, e, i);
  }
  function Mi(e, i) {
    i = i.props.ref, e.ref = i !== void 0 ? i : null;
  }
  function Oo(e, i) {
    throw i.$$typeof === j ? Error(s(525)) : (e = Object.prototype.toString.call(i), Error(
      s(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : e
      )
    ));
  }
  function sp(e) {
    function i(L, D) {
      if (e) {
        var I = L.deletions;
        I === null ? (L.deletions = [D], L.flags |= 16) : I.push(D);
      }
    }
    function a(L, D) {
      if (!e) return null;
      for (; D !== null; )
        i(L, D), D = D.sibling;
      return null;
    }
    function o(L) {
      for (var D = /* @__PURE__ */ new Map(); L !== null; )
        L.key === null ? D.set(L.index, L) : D.set(L.key, L), L = L.sibling;
      return D;
    }
    function h(L, D) {
      return L = ri(L, D), L.index = 0, L.sibling = null, L;
    }
    function f(L, D, I) {
      return L.index = I, e ? (I = L.alternate, I !== null ? (I = I.index, I < D ? (L.flags |= 2, D) : I) : (L.flags |= 134217730, D)) : (L.flags |= 1048576, D);
    }
    function b(L) {
      return e && L.alternate === null && (L.flags |= 134217730), L;
    }
    function T(L, D, I, G) {
      return D === null || D.tag !== 6 ? (D = Hc(I, L.mode, G), D.return = L, D) : (D = h(D, I), D.return = L, D);
    }
    function x(L, D, I, G) {
      var et = I.type;
      return et === W ? (L = z(
        L,
        D,
        I.props.children,
        G,
        I.key
      ), Mi(L, I), L) : D !== null && (D.elementType === et || typeof et == "object" && et !== null && et.$$typeof === St && hs(et) === D.type) ? (D = h(D, I.props), Mi(D, I), D.return = L, D) : (D = bo(
        I.type,
        I.key,
        I.props,
        null,
        L.mode,
        G
      ), Mi(D, I), D.return = L, D);
    }
    function k(L, D, I, G) {
      return D === null || D.tag !== 4 || D.stateNode.containerInfo !== I.containerInfo || D.stateNode.implementation !== I.implementation ? (D = Gc(I, L.mode, G), D.return = L, D) : (D = h(D, I.children || []), D.return = L, D);
    }
    function z(L, D, I, G, et) {
      return D === null || D.tag !== 7 ? (D = ss(
        I,
        L.mode,
        G,
        et
      ), D.return = L, D) : (D = h(D, I), D.return = L, D);
    }
    function V(L, D, I) {
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return D = Hc(
          "" + D,
          L.mode,
          I
        ), D.return = L, D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case q:
            return I = bo(
              D.type,
              D.key,
              D.props,
              null,
              L.mode,
              I
            ), Mi(I, D), I.return = L, I;
          case $:
            return D = Gc(
              D,
              L.mode,
              I
            ), D.return = L, D;
          case St:
            return D = hs(D), V(L, D, I);
        }
        if (Lt(D) || Z(D))
          return D = ss(
            D,
            L.mode,
            I,
            null
          ), D.return = L, D;
        if (typeof D.then == "function")
          return V(L, Do(D), I);
        if (D.$$typeof === vt)
          return V(
            L,
            wo(L, D),
            I
          );
        Oo(L, D);
      }
      return null;
    }
    function R(L, D, I, G) {
      var et = D !== null ? D.key : null;
      if (typeof I == "string" && I !== "" || typeof I == "number" || typeof I == "bigint")
        return et !== null ? null : T(L, D, "" + I, G);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case q:
            return I.key === et ? x(L, D, I, G) : null;
          case $:
            return I.key === et ? k(L, D, I, G) : null;
          case St:
            return I = hs(I), R(L, D, I, G);
        }
        if (Lt(I) || Z(I))
          return et !== null ? null : z(L, D, I, G, null);
        if (typeof I.then == "function")
          return R(
            L,
            D,
            Do(I),
            G
          );
        if (I.$$typeof === vt)
          return R(
            L,
            D,
            wo(L, I),
            G
          );
        Oo(L, I);
      }
      return null;
    }
    function F(L, D, I, G, et) {
      if (typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint")
        return L = L.get(I) || null, T(D, L, "" + G, et);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case q:
            return L = L.get(
              G.key === null ? I : G.key
            ) || null, x(D, L, G, et);
          case $:
            return L = L.get(
              G.key === null ? I : G.key
            ) || null, k(D, L, G, et);
          case St:
            return G = hs(G), F(
              L,
              D,
              I,
              G,
              et
            );
        }
        if (Lt(G) || Z(G))
          return L = L.get(I) || null, z(D, L, G, et, null);
        if (typeof G.then == "function")
          return F(
            L,
            D,
            I,
            Do(G),
            et
          );
        if (G.$$typeof === vt)
          return F(
            L,
            D,
            I,
            wo(D, G),
            et
          );
        Oo(D, G);
      }
      return null;
    }
    function Q(L, D, I, G) {
      for (var et = null, xt = null, ot = D, ht = D = 0, he = null; ot !== null && ht < I.length; ht++) {
        ot.index > ht ? (he = ot, ot = null) : he = ot.sibling;
        var Rt = R(
          L,
          ot,
          I[ht],
          G
        );
        if (Rt === null) {
          ot === null && (ot = he);
          break;
        }
        e && ot && Rt.alternate === null && i(L, ot), D = f(Rt, D, ht), xt === null ? et = Rt : xt.sibling = Rt, xt = Rt, ot = he;
      }
      if (ht === I.length)
        return a(L, ot), Et && oi(L, ht), et;
      if (ot === null) {
        for (; ht < I.length; ht++)
          ot = V(L, I[ht], G), ot !== null && (D = f(
            ot,
            D,
            ht
          ), xt === null ? et = ot : xt.sibling = ot, xt = ot);
        return Et && oi(L, ht), et;
      }
      for (ot = o(ot); ht < I.length; ht++)
        he = F(
          ot,
          L,
          ht,
          I[ht],
          G
        ), he !== null && (e && (Rt = he.alternate, Rt !== null && ot.delete(Rt.key === null ? ht : Rt.key)), D = f(
          he,
          D,
          ht
        ), xt === null ? et = he : xt.sibling = he, xt = he);
      return e && ot.forEach(function(qi) {
        return i(L, qi);
      }), Et && oi(L, ht), et;
    }
    function it(L, D, I, G) {
      if (I == null) throw Error(s(151));
      for (var et = null, xt = null, ot = D, ht = D = 0, he = null, Rt = I.next(); ot !== null && !Rt.done; ht++, Rt = I.next()) {
        ot.index > ht ? (he = ot, ot = null) : he = ot.sibling;
        var qi = R(L, ot, Rt.value, G);
        if (qi === null) {
          ot === null && (ot = he);
          break;
        }
        e && ot && qi.alternate === null && i(L, ot), D = f(qi, D, ht), xt === null ? et = qi : xt.sibling = qi, xt = qi, ot = he;
      }
      if (Rt.done)
        return a(L, ot), Et && oi(L, ht), et;
      if (ot === null) {
        for (; !Rt.done; ht++, Rt = I.next())
          Rt = V(L, Rt.value, G), Rt !== null && (D = f(Rt, D, ht), xt === null ? et = Rt : xt.sibling = Rt, xt = Rt);
        return Et && oi(L, ht), et;
      }
      for (ot = o(ot); !Rt.done; ht++, Rt = I.next())
        Rt = F(ot, L, ht, Rt.value, G), Rt !== null && (e && (he = Rt.alternate, he !== null && ot.delete(
          he.key === null ? ht : he.key
        )), D = f(Rt, D, ht), xt === null ? et = Rt : xt.sibling = Rt, xt = Rt);
      return e && ot.forEach(function(TA) {
        return i(L, TA);
      }), Et && oi(L, ht), et;
    }
    function At(L, D, I, G) {
      if (typeof I == "object" && I !== null && I.type === W && I.key === null && I.props.ref === void 0 && (I = I.props.children), typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case q:
            t: {
              for (var et = I.key; D !== null; ) {
                if (D.key === et) {
                  if (et = I.type, et === W) {
                    if (D.tag === 7) {
                      a(
                        L,
                        D.sibling
                      ), G = h(
                        D,
                        I.props.children
                      ), Mi(G, I), G.return = L, L = G;
                      break t;
                    }
                  } else if (D.elementType === et || typeof et == "object" && et !== null && et.$$typeof === St && hs(et) === D.type) {
                    a(
                      L,
                      D.sibling
                    ), G = h(D, I.props), Mi(G, I), G.return = L, L = G;
                    break t;
                  }
                  a(L, D);
                  break;
                } else i(L, D);
                D = D.sibling;
              }
              I.type === W ? (G = ss(
                I.props.children,
                L.mode,
                G,
                I.key
              ), Mi(G, I), G.return = L, L = G) : (G = bo(
                I.type,
                I.key,
                I.props,
                null,
                L.mode,
                G
              ), Mi(G, I), G.return = L, L = G);
            }
            return b(L);
          case $:
            t: {
              for (et = I.key; D !== null; ) {
                if (D.key === et)
                  if (D.tag === 4 && D.stateNode.containerInfo === I.containerInfo && D.stateNode.implementation === I.implementation) {
                    a(
                      L,
                      D.sibling
                    ), G = h(D, I.children || []), G.return = L, L = G;
                    break t;
                  } else {
                    a(L, D);
                    break;
                  }
                else i(L, D);
                D = D.sibling;
              }
              G = Gc(I, L.mode, G), G.return = L, L = G;
            }
            return b(L);
          case St:
            return I = hs(I), At(
              L,
              D,
              I,
              G
            );
        }
        if (Lt(I))
          return Q(
            L,
            D,
            I,
            G
          );
        if (Z(I)) {
          if (et = Z(I), typeof et != "function") throw Error(s(150));
          return I = et.call(I), it(
            L,
            D,
            I,
            G
          );
        }
        if (typeof I.then == "function")
          return At(
            L,
            D,
            Do(I),
            G
          );
        if (I.$$typeof === vt)
          return At(
            L,
            D,
            wo(L, I),
            G
          );
        Oo(L, I);
      }
      return typeof I == "string" && I !== "" || typeof I == "number" || typeof I == "bigint" ? (I = "" + I, D !== null && D.tag === 6 ? (a(L, D.sibling), G = h(D, I), G.return = L, L = G) : (a(L, D), G = Hc(I, L.mode, G), G.return = L, L = G), b(L)) : a(L, D);
    }
    return function(L, D, I, G) {
      try {
        ir = 0;
        var et = At(
          L,
          D,
          I,
          G
        );
        return ta = null, et;
      } catch (ot) {
        if (ot === Js || ot === xo) throw ot;
        var xt = ze(29, ot, null, L.mode);
        return xt.lanes = G, xt.return = L, xt;
      }
    };
  }
  var fs = sp(!0), ap = sp(!1), Di = !1;
  function Wc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Jc(e, i) {
    e = e.updateQueue, i.updateQueue === e && (i.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Oi(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Ni(e, i, a) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (It & 2) !== 0) {
      var h = o.pending;
      return h === null ? i.next = i : (i.next = h.next, h.next = i), o.pending = i, i = vo(e), Gf(e, null, a), i;
    }
    return yo(e, o, i, a), vo(e);
  }
  function sr(e, i, a) {
    if (i = i.updateQueue, i !== null && (i = i.shared, (a & 4194048) !== 0)) {
      var o = i.lanes;
      o &= e.pendingLanes, a |= o, i.lanes = a, Yd(e, a);
    }
  }
  function tu(e, i) {
    var a = e.updateQueue, o = e.alternate;
    if (o !== null && (o = o.updateQueue, a === o)) {
      var h = null, f = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var b = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          f === null ? h = f = b : f = f.next = b, a = a.next;
        } while (a !== null);
        f === null ? h = f = i : f = f.next = i;
      } else h = f = i;
      a = {
        baseState: o.baseState,
        firstBaseUpdate: h,
        lastBaseUpdate: f,
        shared: o.shared,
        callbacks: o.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = i : e.next = i, a.lastBaseUpdate = i;
  }
  var eu = !1;
  function ar() {
    if (eu) {
      var e = Ws;
      if (e !== null) throw e;
    }
  }
  function rr(e, i, a, o) {
    eu = !1;
    var h = e.updateQueue;
    Di = !1;
    var f = h.firstBaseUpdate, b = h.lastBaseUpdate, T = h.shared.pending;
    if (T !== null) {
      h.shared.pending = null;
      var x = T, k = x.next;
      x.next = null, b === null ? f = k : b.next = k, b = x;
      var z = e.alternate;
      z !== null && (z = z.updateQueue, T = z.lastBaseUpdate, T !== b && (T === null ? z.firstBaseUpdate = k : T.next = k, z.lastBaseUpdate = x));
    }
    if (f !== null) {
      var V = h.baseState;
      b = 0, z = k = x = null, T = f;
      do {
        var R = T.lane & -536870913, F = R !== T.lane;
        if (F ? (Ct & R) === R : (o & R) === R) {
          R !== 0 && R === cs && (eu = !0), z !== null && (z = z.next = {
            lane: 0,
            tag: T.tag,
            payload: T.payload,
            callback: null,
            next: null
          });
          t: {
            var Q = e, it = T;
            R = i;
            var At = a;
            switch (it.tag) {
              case 1:
                if (Q = it.payload, typeof Q == "function") {
                  V = Q.call(At, V, R);
                  break t;
                }
                V = Q;
                break t;
              case 3:
                Q.flags = Q.flags & -65537 | 128;
              case 0:
                if (Q = it.payload, R = typeof Q == "function" ? Q.call(At, V, R) : Q, R == null) break t;
                V = U({}, V, R);
                break t;
              case 2:
                Di = !0;
            }
          }
          R = T.callback, R !== null && (e.flags |= 64, F && (e.flags |= 8192), F = h.callbacks, F === null ? h.callbacks = [R] : F.push(R));
        } else
          F = {
            lane: R,
            tag: T.tag,
            payload: T.payload,
            callback: T.callback,
            next: null
          }, z === null ? (k = z = F, x = V) : z = z.next = F, b |= R;
        if (T = T.next, T === null) {
          if (T = h.shared.pending, T === null)
            break;
          F = T, T = F.next, F.next = null, h.lastBaseUpdate = F, h.shared.pending = null;
        }
      } while (!0);
      z === null && (x = V), h.baseState = x, h.firstBaseUpdate = k, h.lastBaseUpdate = z, f === null && (h.shared.lanes = 0), Fi |= b, e.lanes = b, e.memoizedState = V;
    }
  }
  function rp(e, i) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(i);
  }
  function op(e, i) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        rp(a[e], i);
  }
  var Ri = kn(null), No = kn(0);
  function lp(e, i) {
    e = pi, qt(No, e), qt(Ri, i), pi = e | i.baseLanes;
  }
  function nu() {
    qt(No, pi), qt(Ri, Ri.current);
  }
  function iu() {
    pi = No.current, Ee(Ri), Ee(No);
  }
  var we = kn(null), Ne = null;
  function Li(e) {
    var i = e.alternate;
    qt(Ce, Ce.current & 1), qt(we, e), Ne === null && (i === null || Ri.current !== null || i.memoizedState !== null) && (Ne = e);
  }
  function su(e) {
    qt(Ce, Ce.current), qt(we, e), Ne === null && (Ne = e);
  }
  function cp(e) {
    e.tag === 22 ? (qt(Ce, Ce.current), qt(we, e), Ne === null && (Ne = e)) : ki();
  }
  function ki() {
    qt(Ce, Ce.current), qt(we, we.current);
  }
  function We(e) {
    Ee(we), Ne === e && (Ne = null), Ee(Ce);
  }
  var Ce = kn(0);
  function or(e, i) {
    qt(we, we.current), qt(Ce, i);
  }
  function au(e) {
    Ee(Ce), Ee(we), Ne === e && (Ne = null);
  }
  function Ro(e) {
    for (var i = e; i !== null; ) {
      if (i.tag === 13) {
        var a = i.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || xh(a) || Mh(a)))
          return i;
      } else if (i.tag === 19 && i.memoizedProps.revealOrder !== "independent") {
        if ((i.flags & 128) !== 0) return i;
      } else if (i.child !== null) {
        i.child.return = i, i = i.child;
        continue;
      }
      if (i === e) break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === e) return null;
        i = i.return;
      }
      i.sibling.return = i.return, i = i.sibling;
    }
    return null;
  }
  var ui = 0, bt = null, Vt = null, ce = null, Lo = !1, ea = !1, ps = !1, ko = 0, lr = 0, na = null, Vv = 0;
  function se() {
    throw Error(s(321));
  }
  function ru(e, i) {
    if (i === null) return !1;
    for (var a = 0; a < i.length && a < e.length; a++)
      if (!$e(e[a], i[a])) return !1;
    return !0;
  }
  function ou(e, i, a, o, h, f) {
    return ui = f, bt = i, i.memoizedState = null, i.updateQueue = null, i.lanes = 0, st.H = e === null || e.memoizedState === null ? Xp : qp, ps = !1, f = a(o, h), ps = !1, ea && (f = hp(
      i,
      a,
      o,
      h
    )), up(e), f;
  }
  function up(e) {
    st.H = Ho;
    var i = Vt !== null && Vt.next !== null;
    if (ui = 0, ce = Vt = bt = null, Lo = !1, lr = 0, na = null, i) throw Error(s(300));
    e === null || ue || (e = e.dependencies, e !== null && _o(e) && (ue = !0));
  }
  function hp(e, i, a, o) {
    bt = e;
    var h = 0;
    do {
      if (ea && (na = null), lr = 0, ea = !1, 25 <= h) throw Error(s(301));
      if (h += 1, ce = Vt = null, e.updateQueue != null) {
        var f = e.updateQueue;
        f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
      }
      st.H = Wv, f = i(a, o);
    } while (ea);
    return f;
  }
  function Yv() {
    var e = st.H, i = e.useState()[0];
    return i = typeof i.then == "function" ? cr(i) : i, e = e.useState()[0], (Vt !== null ? Vt.memoizedState : null) !== e && (bt.flags |= 1024), i;
  }
  function lu() {
    var e = ko !== 0;
    return ko = 0, e;
  }
  function cu(e, i, a) {
    i.updateQueue = e.updateQueue, i.flags &= -2053, e.lanes &= ~a;
  }
  function uu(e) {
    if (Lo) {
      for (e = e.memoizedState; e !== null; ) {
        var i = e.queue;
        i !== null && (i.pending = null), e = e.next;
      }
      Lo = !1;
    }
    ui = 0, ce = Vt = bt = null, ea = !1, lr = ko = 0, na = null;
  }
  function Le() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ce === null ? bt.memoizedState = ce = e : ce = ce.next = e, ce;
  }
  function oe() {
    if (Vt === null) {
      var e = bt.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Vt.next;
    var i = ce === null ? bt.memoizedState : ce.next;
    if (i !== null)
      ce = i, Vt = e;
    else {
      if (e === null)
        throw bt.alternate === null ? Error(s(467)) : Error(s(310));
      Vt = e, e = {
        memoizedState: Vt.memoizedState,
        baseState: Vt.baseState,
        baseQueue: Vt.baseQueue,
        queue: Vt.queue,
        next: null
      }, ce === null ? bt.memoizedState = ce = e : ce = ce.next = e;
    }
    return ce;
  }
  function Bo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function cr(e) {
    var i = lr;
    return lr += 1, na === null && (na = []), e = ep(na, e, i), i = bt, (ce === null ? i.memoizedState : ce.next) === null && (i = i.alternate, st.H = i === null || i.memoizedState === null ? Xp : qp), e;
  }
  function Po(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return cr(e);
      if (e.$$typeof === Y) return;
      if (e.$$typeof === vt) return _e(e);
    }
    throw Error(s(438, String(e)));
  }
  function hu(e) {
    var i = null, a = bt.updateQueue;
    if (a !== null && (i = a.memoCache), i == null) {
      var o = bt.alternate;
      o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (i = {
        data: o.data.map(function(h) {
          return h.slice();
        }),
        index: 0
      })));
    }
    if (i == null && (i = { data: [], index: 0 }), a === null && (a = Bo(), bt.updateQueue = a), a.memoCache = i, a = i.data[i.index], a === void 0)
      for (a = i.data[i.index] = Array(e), o = 0; o < e; o++)
        a[o] = Bt;
    return i.index++, a;
  }
  function hi(e, i) {
    return typeof i == "function" ? i(e) : i;
  }
  function Io(e) {
    var i = oe();
    return du(i, Vt, e);
  }
  function du(e, i, a) {
    var o = e.queue;
    if (o === null) throw Error(s(311));
    o.lastRenderedReducer = a;
    var h = e.baseQueue, f = o.pending;
    if (f !== null) {
      if (h !== null) {
        var b = h.next;
        h.next = f.next, f.next = b;
      }
      i.baseQueue = h = f, o.pending = null;
    }
    if (f = e.baseState, h === null) e.memoizedState = f;
    else {
      i = h.next;
      var T = b = null, x = null, k = i, z = !1;
      do {
        var V = k.lane & -536870913;
        if (V !== k.lane ? (Ct & V) === V : (ui & V) === V) {
          var R = k.revertLane;
          if (R === 0)
            x !== null && (x = x.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: k.action,
              hasEagerState: k.hasEagerState,
              eagerState: k.eagerState,
              next: null
            }), V === cs && (z = !0);
          else if ((ui & R) === R) {
            k = k.next, R === cs && (z = !0);
            continue;
          } else
            V = {
              lane: 0,
              revertLane: k.revertLane,
              gesture: null,
              action: k.action,
              hasEagerState: k.hasEagerState,
              eagerState: k.eagerState,
              next: null
            }, x === null ? (T = x = V, b = f) : x = x.next = V, bt.lanes |= R, Fi |= R;
          V = k.action, ps && a(f, V), f = k.hasEagerState ? k.eagerState : a(f, V);
        } else
          R = {
            lane: V,
            revertLane: k.revertLane,
            gesture: k.gesture,
            action: k.action,
            hasEagerState: k.hasEagerState,
            eagerState: k.eagerState,
            next: null
          }, x === null ? (T = x = R, b = f) : x = x.next = R, bt.lanes |= V, Fi |= V;
        k = k.next;
      } while (k !== null && k !== i);
      if (x === null ? b = f : x.next = T, !$e(f, e.memoizedState) && (ue = !0, z && (a = Ws, a !== null)))
        throw a;
      e.memoizedState = f, e.baseState = b, e.baseQueue = x, o.lastRenderedState = f;
    }
    return h === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function fu(e) {
    var i = oe(), a = i.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = e;
    var o = a.dispatch, h = a.pending, f = i.memoizedState;
    if (h !== null) {
      a.pending = null;
      var b = h = h.next;
      do
        f = e(f, b.action), b = b.next;
      while (b !== h);
      $e(f, i.memoizedState) || (ue = !0), i.memoizedState = f, i.baseQueue === null && (i.baseState = f), a.lastRenderedState = f;
    }
    return [f, o];
  }
  function dp(e, i, a) {
    var o = bt, h = oe(), f = Et;
    if (f) {
      if (a === void 0) throw Error(s(407));
      a = a();
    } else a = i();
    var b = !$e(
      (Vt || h).memoizedState,
      a
    );
    if (b && (h.memoizedState = a, ue = !0), h = h.queue, mu(gp.bind(null, o, h, e), [
      e
    ]), e = h.getSnapshot !== i || b || ce !== null && (ce.memoizedState.tag & 1) !== 0, ia(
      e ? 9 : 8,
      { destroy: void 0 },
      pp.bind(null, o, h, a, i),
      null
    ), e) {
      if (o.flags |= 2048, Xt === null) throw Error(s(349));
      f || (ui & 127) !== 0 || fp(o, i, a);
    }
    return a;
  }
  function fp(e, i, a) {
    e.flags |= 16384, e = { getSnapshot: i, value: a }, i = bt.updateQueue, i === null ? (i = Bo(), bt.updateQueue = i, i.stores = [e]) : (a = i.stores, a === null ? i.stores = [e] : a.push(e));
  }
  function pp(e, i, a, o) {
    i.value = a, i.getSnapshot = o, mp(i) && yp(e);
  }
  function gp(e, i, a) {
    return a(function() {
      mp(i) && yp(e);
    });
  }
  function mp(e) {
    var i = e.getSnapshot;
    e = e.value;
    try {
      var a = i();
      return !$e(e, a);
    } catch {
      return !0;
    }
  }
  function yp(e) {
    var i = is(e, 2);
    i !== null && je(i, e, 2);
  }
  function pu(e) {
    var i = Le();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), ps) {
        Si(!0);
        try {
          a();
        } finally {
          Si(!1);
        }
      }
    }
    return i.memoizedState = i.baseState = e, i.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: hi,
      lastRenderedState: e
    }, i;
  }
  function vp(e, i, a, o) {
    return e.baseState = a, du(
      e,
      Vt,
      typeof o == "function" ? o : hi
    );
  }
  function Xv(e, i, a, o, h) {
    if (Uo(e)) throw Error(s(485));
    if (e = i.action, e !== null) {
      var f = {
        payload: h,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(b) {
          f.listeners.push(b);
        }
      };
      st.T !== null ? a(!0) : f.isTransition = !1, o(f), a = i.pending, a === null ? (f.next = i.pending = f, bp(i, f)) : (f.next = a.next, i.pending = a.next = f);
    }
  }
  function bp(e, i) {
    var a = i.action, o = i.payload, h = e.state;
    if (i.isTransition) {
      var f = st.T, b = {};
      b.types = f !== null ? f.types : null, st.T = b;
      try {
        var T = a(h, o), x = st.S;
        x !== null && x(b, T), Ap(e, i, T);
      } catch (k) {
        gu(e, i, k);
      } finally {
        f !== null && b.types !== null && (f.types = b.types), st.T = f;
      }
    } else
      try {
        f = a(h, o), Ap(e, i, f);
      } catch (k) {
        gu(e, i, k);
      }
  }
  function Ap(e, i, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(o) {
        Sp(e, i, o);
      },
      function(o) {
        return gu(e, i, o);
      }
    ) : Sp(e, i, a);
  }
  function Sp(e, i, a) {
    i.status = "fulfilled", i.value = a, Ep(i), e.state = a, i = e.pending, i !== null && (a = i.next, a === i ? e.pending = null : (a = a.next, i.next = a, bp(e, a)));
  }
  function gu(e, i, a) {
    var o = e.pending;
    if (e.pending = null, o !== null) {
      o = o.next;
      do
        i.status = "rejected", i.reason = a, Ep(i), i = i.next;
      while (i !== o);
    }
    e.action = null;
  }
  function Ep(e) {
    e = e.listeners;
    for (var i = 0; i < e.length; i++) (0, e[i])();
  }
  function Tp(e, i) {
    return i;
  }
  function _p(e, i) {
    if (Et) {
      var a = Xt.formState;
      if (a !== null) {
        t: {
          var o = bt;
          if (Et) {
            if (Kt) {
              e: {
                for (var h = Kt, f = mn; h.nodeType !== 8; ) {
                  if (!f) {
                    h = null;
                    break e;
                  }
                  if (h = vn(
                    h.nextSibling
                  ), h === null) {
                    h = null;
                    break e;
                  }
                }
                f = h.data, h = f === "F!" || f === "F" ? h : null;
              }
              if (h) {
                Kt = vn(
                  h.nextSibling
                ), o = h.data === "F!";
                break t;
              }
            }
            Ci(o);
          }
          o = !1;
        }
        o && (i = a[0]);
      }
    }
    return a = Le(), a.memoizedState = a.baseState = i, o = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Tp,
      lastRenderedState: i
    }, a.queue = o, a = jp.bind(
      null,
      bt,
      o
    ), o.dispatch = a, o = pu(!1), f = Su.bind(
      null,
      bt,
      !1,
      o.queue
    ), o = Le(), h = {
      state: i,
      dispatch: null,
      action: e,
      pending: null
    }, o.queue = h, a = Xv.bind(
      null,
      bt,
      h,
      f,
      a
    ), h.dispatch = a, o.memoizedState = e, [i, a, !1];
  }
  function wp(e) {
    var i = oe();
    return Cp(i, Vt, e);
  }
  function Cp(e, i, a) {
    if (i = du(
      e,
      i,
      Tp
    )[0], e = Io(hi)[0], typeof i == "object" && i !== null && typeof i.then == "function")
      try {
        var o = cr(i);
      } catch (b) {
        throw b === Js ? xo : b;
      }
    else o = i;
    i = oe();
    var h = i.queue, f = h.dispatch;
    return a !== i.memoizedState && (bt.flags |= 2048, ia(
      9,
      { destroy: void 0 },
      qv.bind(null, h, a),
      null
    )), [o, f, e];
  }
  function qv(e, i) {
    e.action = i;
  }
  function xp(e) {
    var i = oe(), a = Vt;
    if (a !== null)
      return Cp(i, a, e);
    oe(), i = i.memoizedState, a = oe();
    var o = a.queue.dispatch;
    return a.memoizedState = e, [i, o, !1];
  }
  function ia(e, i, a, o) {
    return e = { tag: e, create: a, deps: o, inst: i, next: null }, i = bt.updateQueue, i === null && (i = Bo(), bt.updateQueue = i), a = i.lastEffect, a === null ? i.lastEffect = e.next = e : (o = a.next, a.next = e, e.next = o, i.lastEffect = e), e;
  }
  function Mp() {
    return oe().memoizedState;
  }
  function Fo(e, i, a, o) {
    var h = Le();
    bt.flags |= e, h.memoizedState = ia(
      1 | i,
      { destroy: void 0 },
      a,
      o === void 0 ? null : o
    );
  }
  function zo(e, i, a, o) {
    var h = oe();
    o = o === void 0 ? null : o;
    var f = h.memoizedState.inst;
    Vt !== null && o !== null && ru(o, Vt.memoizedState.deps) ? h.memoizedState = ia(i, f, a, o) : (bt.flags |= e, h.memoizedState = ia(
      1 | i,
      f,
      a,
      o
    ));
  }
  function Dp(e, i) {
    Fo(8390656, 8, e, i);
  }
  function mu(e, i) {
    zo(2048, 8, e, i);
  }
  function Kv(e) {
    bt.flags |= 4;
    var i = bt.updateQueue;
    if (i === null)
      i = Bo(), bt.updateQueue = i, i.events = [e];
    else {
      var a = i.events;
      a === null ? i.events = [e] : a.push(e);
    }
  }
  function Op(e) {
    var i = oe().memoizedState;
    return Kv({ ref: i, nextImpl: e }), function() {
      if ((It & 2) !== 0) throw Error(s(440));
      return i.impl.apply(void 0, arguments);
    };
  }
  function Np(e, i) {
    return zo(4, 2, e, i);
  }
  function Rp(e, i) {
    return zo(4, 4, e, i);
  }
  function Lp(e, i) {
    if (typeof i == "function") {
      e = e();
      var a = i(e);
      return function() {
        typeof a == "function" ? a() : i(null);
      };
    }
    if (i != null)
      return e = e(), i.current = e, function() {
        i.current = null;
      };
  }
  function kp(e, i, a) {
    a = a != null ? a.concat([e]) : null, zo(4, 4, Lp.bind(null, i, e), a);
  }
  function yu() {
  }
  function Bp(e, i) {
    var a = oe();
    i = i === void 0 ? null : i;
    var o = a.memoizedState;
    return i !== null && ru(i, o[1]) ? o[0] : (a.memoizedState = [e, i], e);
  }
  function Pp(e, i) {
    var a = oe();
    i = i === void 0 ? null : i;
    var o = a.memoizedState;
    if (i !== null && ru(i, o[1]))
      return o[0];
    if (o = e(), ps) {
      Si(!0);
      try {
        e();
      } finally {
        Si(!1);
      }
    }
    return a.memoizedState = [o, i], o;
  }
  function vu(e, i, a) {
    return a === void 0 || (ui & 1073741824) !== 0 && (Ct & 261930) === 0 ? e.memoizedState = i : (e.memoizedState = a, e = Xg(), bt.lanes |= e, Fi |= e, a);
  }
  function Ip(e, i, a, o) {
    return $e(a, i) ? a : Ri.current !== null ? (e = vu(e, a, o), $e(e, i) || (ue = !0), e) : (ui & 106) === 0 || (ui & 1073741824) !== 0 && (Ct & 261930) === 0 ? (ue = !0, e.memoizedState = a) : (e = Xg(), bt.lanes |= e, Fi |= e, i);
  }
  function Fp(e, i, a, o, h) {
    var f = ut.p;
    ut.p = f !== 0 && 8 > f ? f : 8;
    var b = st.T, T = {};
    T.types = b !== null ? b.types : null, st.T = T, Su(e, !1, i, a);
    try {
      var x = h(), k = st.S;
      if (k !== null && k(T, x), x !== null && typeof x == "object" && typeof x.then == "function") {
        var z = jv(
          x,
          o
        );
        ur(
          e,
          i,
          z,
          nn(e)
        );
      } else
        ur(
          e,
          i,
          o,
          nn(e)
        );
    } catch (V) {
      ur(
        e,
        i,
        { then: function() {
        }, status: "rejected", reason: V },
        nn()
      );
    } finally {
      ut.p = f, b !== null && T.types !== null && (b.types = T.types), st.T = b;
    }
  }
  function Qv() {
  }
  function bu(e, i, a, o) {
    if (e.tag !== 5) throw Error(s(476));
    var h = zp(e).queue;
    Fp(
      e,
      h,
      i,
      un,
      a === null ? Qv : function() {
        return Up(e), a(o);
      }
    );
  }
  function zp(e) {
    var i = e.memoizedState;
    if (i !== null) return i;
    i = {
      memoizedState: un,
      baseState: un,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: hi,
        lastRenderedState: un
      },
      next: null
    };
    var a = {};
    return i.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: hi,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = i, e = e.alternate, e !== null && (e.memoizedState = i), i;
  }
  function Up(e) {
    var i = zp(e);
    i.next === null && (i = e.alternate.memoizedState), ur(
      e,
      i.next.queue,
      {},
      nn()
    );
  }
  function Au() {
    return _e(Ea);
  }
  function Hp() {
    return oe().memoizedState;
  }
  function Gp() {
    return oe().memoizedState;
  }
  function Zv(e) {
    for (var i = e.return; i !== null; ) {
      switch (i.tag) {
        case 24:
        case 3:
          var a = nn();
          e = Oi(a);
          var o = Ni(i, e, a);
          o !== null && (je(o, i, a), sr(o, i, a)), i = { cache: Kc() }, e.payload = i;
          return;
      }
      i = i.return;
    }
  }
  function $v(e, i, a) {
    var o = nn();
    a = {
      lane: o,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Uo(e) ? Vp(i, a) : (a = zc(e, i, a, o), a !== null && (je(a, e, o), Yp(a, i, o)));
  }
  function jp(e, i, a) {
    var o = nn();
    ur(e, i, a, o);
  }
  function ur(e, i, a, o) {
    var h = {
      lane: o,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Uo(e)) Vp(i, h);
    else {
      var f = e.alternate;
      if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = i.lastRenderedReducer, f !== null))
        try {
          var b = i.lastRenderedState, T = f(b, a);
          if (h.hasEagerState = !0, h.eagerState = T, $e(T, b))
            return yo(e, i, h, 0), Xt === null && mo(), !1;
        } catch {
        }
      if (a = zc(e, i, h, o), a !== null)
        return je(a, e, o), Yp(a, i, o), !0;
    }
    return !1;
  }
  function Su(e, i, a, o) {
    if (o = {
      lane: 2,
      revertLane: hh(),
      gesture: null,
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Uo(e)) {
      if (i) throw Error(s(479));
    } else
      i = zc(
        e,
        a,
        o,
        2
      ), i !== null && je(i, e, 2);
  }
  function Uo(e) {
    var i = e.alternate;
    return e === bt || i !== null && i === bt;
  }
  function Vp(e, i) {
    ea = Lo = !0;
    var a = e.pending;
    a === null ? i.next = i : (i.next = a.next, a.next = i), e.pending = i;
  }
  function Yp(e, i, a) {
    if ((a & 4194048) !== 0) {
      var o = i.lanes;
      o &= e.pendingLanes, a |= o, i.lanes = a, Yd(e, a);
    }
  }
  var Ho = {
    readContext: _e,
    use: Po,
    useCallback: se,
    useContext: se,
    useEffect: se,
    useImperativeHandle: se,
    useLayoutEffect: se,
    useInsertionEffect: se,
    useMemo: se,
    useReducer: se,
    useRef: se,
    useState: se,
    useDebugValue: se,
    useDeferredValue: se,
    useTransition: se,
    useSyncExternalStore: se,
    useId: se,
    useHostTransitionStatus: se,
    useFormState: se,
    useActionState: se,
    useOptimistic: se,
    useMemoCache: se,
    useCacheRefresh: se,
    useEffectEvent: se
  }, Xp = {
    readContext: _e,
    use: Po,
    useCallback: function(e, i) {
      return Le().memoizedState = [
        e,
        i === void 0 ? null : i
      ], e;
    },
    useContext: _e,
    useEffect: Dp,
    useImperativeHandle: function(e, i, a) {
      a = a != null ? a.concat([e]) : null, Fo(
        4194308,
        4,
        Lp.bind(null, i, e),
        a
      );
    },
    useLayoutEffect: function(e, i) {
      return Fo(4194308, 4, e, i);
    },
    useInsertionEffect: function(e, i) {
      Fo(4, 2, e, i);
    },
    useMemo: function(e, i) {
      var a = Le();
      i = i === void 0 ? null : i;
      var o = e();
      if (ps) {
        Si(!0);
        try {
          e();
        } finally {
          Si(!1);
        }
      }
      return a.memoizedState = [o, i], o;
    },
    useReducer: function(e, i, a) {
      var o = Le();
      if (a !== void 0) {
        var h = a(i);
        if (ps) {
          Si(!0);
          try {
            a(i);
          } finally {
            Si(!1);
          }
        }
      } else h = i;
      return o.memoizedState = o.baseState = h, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: h
      }, o.queue = e, e = e.dispatch = $v.bind(
        null,
        bt,
        e
      ), [o.memoizedState, e];
    },
    useRef: function(e) {
      var i = Le();
      return e = { current: e }, i.memoizedState = e;
    },
    useState: function(e) {
      e = pu(e);
      var i = e.queue, a = jp.bind(null, bt, i);
      return i.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: yu,
    useDeferredValue: function(e, i) {
      var a = Le();
      return vu(a, e, i);
    },
    useTransition: function() {
      var e = pu(!1);
      return e = Fp.bind(
        null,
        bt,
        e.queue,
        !0,
        !1
      ), Le().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, i, a) {
      var o = bt, h = Le();
      if (Et) {
        if (a === void 0)
          throw Error(s(407));
        a = a();
      } else {
        if (a = i(), Xt === null)
          throw Error(s(349));
        (Ct & 127) !== 0 || fp(o, i, a);
      }
      h.memoizedState = a;
      var f = { value: a, getSnapshot: i };
      return h.queue = f, Dp(gp.bind(null, o, f, e), [
        e
      ]), o.flags |= 2048, ia(
        9,
        { destroy: void 0 },
        pp.bind(
          null,
          o,
          f,
          a,
          i
        ),
        null
      ), a;
    },
    useId: function() {
      var e = Le(), i = Xt.identifierPrefix;
      if (Et) {
        var a = Fn, o = In;
        a = (o & ~(1 << 32 - Qe(o) - 1)).toString(32) + a, i = "_" + i + "R_" + a, a = ko++, 0 < a && (i += "H" + a.toString(32)), i += "_";
      } else
        a = Vv++, i = "_" + i + "r_" + a.toString(32) + "_";
      return e.memoizedState = i;
    },
    useHostTransitionStatus: Au,
    useFormState: _p,
    useActionState: _p,
    useOptimistic: function(e) {
      var i = Le();
      i.memoizedState = i.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return i.queue = a, i = Su.bind(
        null,
        bt,
        !0,
        a
      ), a.dispatch = i, [e, i];
    },
    useMemoCache: hu,
    useCacheRefresh: function() {
      return Le().memoizedState = Zv.bind(
        null,
        bt
      );
    },
    useEffectEvent: function(e) {
      var i = Le(), a = { impl: e };
      return i.memoizedState = a, function() {
        if ((It & 2) !== 0)
          throw Error(s(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, qp = {
    readContext: _e,
    use: Po,
    useCallback: Bp,
    useContext: _e,
    useEffect: mu,
    useImperativeHandle: kp,
    useInsertionEffect: Np,
    useLayoutEffect: Rp,
    useMemo: Pp,
    useReducer: Io,
    useRef: Mp,
    useState: function() {
      return Io(hi);
    },
    useDebugValue: yu,
    useDeferredValue: function(e, i) {
      var a = oe();
      return Ip(
        a,
        Vt.memoizedState,
        e,
        i
      );
    },
    useTransition: function() {
      var e = Io(hi)[0], i = oe().memoizedState;
      return [
        typeof e == "boolean" ? e : cr(e),
        i
      ];
    },
    useSyncExternalStore: dp,
    useId: Hp,
    useHostTransitionStatus: Au,
    useFormState: wp,
    useActionState: wp,
    useOptimistic: function(e, i) {
      var a = oe();
      return vp(a, Vt, e, i);
    },
    useMemoCache: hu,
    useCacheRefresh: Gp,
    useEffectEvent: Op
  }, Wv = {
    readContext: _e,
    use: Po,
    useCallback: Bp,
    useContext: _e,
    useEffect: mu,
    useImperativeHandle: kp,
    useInsertionEffect: Np,
    useLayoutEffect: Rp,
    useMemo: Pp,
    useReducer: fu,
    useRef: Mp,
    useState: function() {
      return fu(hi);
    },
    useDebugValue: yu,
    useDeferredValue: function(e, i) {
      var a = oe();
      return Vt === null ? vu(a, e, i) : Ip(
        a,
        Vt.memoizedState,
        e,
        i
      );
    },
    useTransition: function() {
      var e = fu(hi)[0], i = oe().memoizedState;
      return [
        typeof e == "boolean" ? e : cr(e),
        i
      ];
    },
    useSyncExternalStore: dp,
    useId: Hp,
    useHostTransitionStatus: Au,
    useFormState: xp,
    useActionState: xp,
    useOptimistic: function(e, i) {
      var a = oe();
      return Vt !== null ? vp(a, Vt, e, i) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: hu,
    useCacheRefresh: Gp,
    useEffectEvent: Op
  };
  function Eu(e, i, a, o) {
    i = e.memoizedState, a = a(o, i), a = a == null ? i : U({}, i, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var Tu = {
    enqueueSetState: function(e, i, a) {
      e = e._reactInternals;
      var o = nn(), h = Oi(o);
      h.payload = i, a != null && (h.callback = a), i = Ni(e, h, o), i !== null && (je(i, e, o), sr(i, e, o));
    },
    enqueueReplaceState: function(e, i, a) {
      e = e._reactInternals;
      var o = nn(), h = Oi(o);
      h.tag = 1, h.payload = i, a != null && (h.callback = a), i = Ni(e, h, o), i !== null && (je(i, e, o), sr(i, e, o));
    },
    enqueueForceUpdate: function(e, i) {
      e = e._reactInternals;
      var a = nn(), o = Oi(a);
      o.tag = 2, i != null && (o.callback = i), i = Ni(e, o, a), i !== null && (je(i, e, a), sr(i, e, a));
    }
  };
  function Kp(e, i, a, o, h, f, b) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, f, b) : i.prototype && i.prototype.isPureReactComponent ? !Za(a, o) || !Za(h, f) : !0;
  }
  function Qp(e, i, a, o) {
    e = i.state, typeof i.componentWillReceiveProps == "function" && i.componentWillReceiveProps(a, o), typeof i.UNSAFE_componentWillReceiveProps == "function" && i.UNSAFE_componentWillReceiveProps(a, o), i.state !== e && Tu.enqueueReplaceState(i, i.state, null);
  }
  function gs(e, i) {
    var a = i;
    if ("ref" in i) {
      a = {};
      for (var o in i)
        o !== "ref" && (a[o] = i[o]);
    }
    if (e = e.defaultProps) {
      a === i && (a = U({}, a));
      for (var h in e)
        a[h] === void 0 && (a[h] = e[h]);
    }
    return a;
  }
  function Zp(e) {
    go(e);
  }
  function $p(e) {
    console.error(e);
  }
  function Wp(e) {
    go(e);
  }
  function Go(e, i) {
    try {
      var a = e.onUncaughtError;
      a(i.value, { componentStack: i.stack });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function Jp(e, i, a) {
    try {
      var o = e.onCaughtError;
      o(a.value, {
        componentStack: a.stack,
        errorBoundary: i.tag === 1 ? i.stateNode : null
      });
    } catch (h) {
      setTimeout(function() {
        throw h;
      });
    }
  }
  function _u(e, i, a) {
    return a = Oi(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Go(e, i);
    }, a;
  }
  function tg(e) {
    return e = Oi(e), e.tag = 3, e;
  }
  function eg(e, i, a, o) {
    var h = a.type.getDerivedStateFromError;
    if (typeof h == "function") {
      var f = o.value;
      e.payload = function() {
        return h(f);
      }, e.callback = function() {
        Jp(i, a, o);
      };
    }
    var b = a.stateNode;
    b !== null && typeof b.componentDidCatch == "function" && (e.callback = function() {
      Jp(i, a, o), typeof h != "function" && (zi === null ? zi = /* @__PURE__ */ new Set([this]) : zi.add(this));
      var T = o.stack;
      this.componentDidCatch(o.value, {
        componentStack: T !== null ? T : ""
      });
    });
  }
  function Jv(e, i, a, o, h) {
    if (a.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
      if (i = a.alternate, i !== null && os(
        i,
        a,
        h,
        !0
      ), a = we.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
          case 19:
            return Ne === null ? cl() : a.alternate === null && ae === 0 && (ae = 3), a.flags &= -257, a.flags |= 65536, a.lanes = h, o === Mo ? a.flags |= 16384 : (i = a.updateQueue, i === null ? a.updateQueue = /* @__PURE__ */ new Set([o]) : i.add(o), lh(e, o, h)), !1;
          case 22:
            return a.flags |= 65536, o === Mo ? a.flags |= 16384 : (i = a.updateQueue, i === null ? (i = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([o])
            }, a.updateQueue = i) : (a = i.retryQueue, a === null ? i.retryQueue = /* @__PURE__ */ new Set([o]) : a.add(o)), lh(e, o, h)), !1;
        }
        throw Error(s(435, a.tag));
      }
      return lh(e, o, h), cl(), !1;
    }
    if (Et)
      return i = we.current, i !== null ? ((i.flags & 65536) === 0 && (i.flags |= 256), i.flags |= 65536, i.lanes = h, o !== Vc && (e = Error(s(422), { cause: o }), Ja(fn(e, a)))) : (o !== Vc && (i = Error(s(423), {
        cause: o
      }), Ja(
        fn(i, a)
      )), e = e.current.alternate, e.flags |= 65536, h &= -h, e.lanes |= h, o = fn(o, a), h = _u(
        e.stateNode,
        o,
        h
      ), tu(e, h), ae !== 4 && (ae = 2)), !1;
    var f = Error(s(520), { cause: o });
    if (f = fn(f, a), vr === null ? vr = [f] : vr.push(f), ae !== 4 && (ae = 2), i === null) return !0;
    o = fn(o, a), a = i;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = h & -h, a.lanes |= e, e = _u(a.stateNode, o, e), tu(a, e), !1;
        case 1:
          if (i = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof i.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (zi === null || !zi.has(f))))
            return a.flags |= 65536, h &= -h, a.lanes |= h, h = tg(h), eg(
              h,
              e,
              a,
              o
            ), tu(a, h), !1;
          break;
        case 22:
          if (a.memoizedState !== null)
            return a.flags |= 65536, !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var wu = Error(s(461)), ue = !1;
  function fe(e, i, a, o) {
    i.child = e === null ? ap(i, null, a, o) : fs(
      i,
      e.child,
      a,
      o
    );
  }
  function ng(e, i, a, o, h) {
    a = a.render;
    var f = i.ref;
    if ("ref" in o) {
      var b = {};
      for (var T in o)
        T !== "ref" && (b[T] = o[T]);
    } else b = o;
    return ls(i), o = ou(
      e,
      i,
      a,
      b,
      f,
      h
    ), T = lu(), e !== null && !ue ? (cu(e, i, h), di(e, i, h)) : (Et && T && So(i), i.flags |= 1, fe(e, i, o, h), i.child);
  }
  function ig(e, i, a, o, h) {
    if (e === null) {
      var f = a.type;
      return typeof f == "function" && !Uc(f) && f.defaultProps === void 0 && a.compare === null ? (i.tag = 15, i.type = f, sg(
        e,
        i,
        f,
        o,
        h
      )) : (e = bo(
        a.type,
        null,
        o,
        i,
        i.mode,
        h
      ), e.ref = i.ref, e.return = i, i.child = e);
    }
    if (f = e.child, !Lu(e, h)) {
      var b = f.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Za, a(b, o) && e.ref === i.ref)
        return di(e, i, h);
    }
    return i.flags |= 1, e = ri(f, o), e.ref = i.ref, e.return = i, i.child = e;
  }
  function sg(e, i, a, o, h) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (Za(f, o) && e.ref === i.ref)
        if (ue = !1, i.pendingProps = o = f, Lu(e, h))
          (e.flags & 131072) !== 0 && (ue = !0);
        else
          return i.lanes = e.lanes, di(e, i, h);
    }
    return Cu(
      e,
      i,
      a,
      o,
      h
    );
  }
  function ag(e, i, a, o) {
    var h = o.children, f = e !== null ? e.memoizedState : null;
    if (e === null && i.stateNode === null && (i.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), o.mode === "hidden") {
      if ((i.flags & 128) !== 0) {
        if (f = f !== null ? f.baseLanes | a : a, e !== null) {
          for (o = i.child = e.child, h = 0; o !== null; )
            h = h | o.lanes | o.childLanes, o = o.sibling;
          o = h & ~f;
        } else o = 0, i.child = null;
        return rg(
          e,
          i,
          f,
          a,
          o
        );
      }
      if ((a & 536870912) !== 0)
        i.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Co(
          i,
          f !== null ? f.cachePool : null
        ), f !== null ? lp(i, f) : nu(), cp(i);
      else
        return o = i.lanes = 536870912, rg(
          e,
          i,
          f !== null ? f.baseLanes | a : a,
          a,
          o
        );
    } else
      f !== null ? (Co(i, f.cachePool), lp(i, f), ki(), i.memoizedState = null) : (e !== null && Co(i, null), nu(), ki());
    return fe(e, i, h, a), i.child;
  }
  function hr(e, i) {
    return e !== null && e.tag === 22 || i.stateNode !== null || (i.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), i.sibling;
  }
  function rg(e, i, a, o, h) {
    var f = Zc();
    return f = f === null ? null : { parent: le._currentValue, pool: f }, i.memoizedState = {
      baseLanes: a,
      cachePool: f
    }, e !== null && Co(i, null), nu(), cp(i), e !== null && os(e, i, o, !0), i.childLanes = h, null;
  }
  function jo(e, i) {
    return i = Vo(
      { mode: i.mode, children: i.children },
      e.mode
    ), i.ref = e.ref, e.child = i, i.return = e, i;
  }
  function og(e, i, a) {
    return fs(i, e.child, null, a), e = jo(i, i.pendingProps), e.flags |= 2, We(i), i.memoizedState = null, e;
  }
  function tb(e, i, a) {
    var o = i.pendingProps, h = (i.flags & 128) !== 0;
    if (i.flags &= -129, e === null) {
      if (Et) {
        if (o.mode === "hidden")
          return e = jo(i, o), i.lanes = 536870912, e.memoizedState = { baseLanes: 0, cachePool: null }, hr(null, e);
        if (su(i), (e = Kt) ? (e = Lm(
          e,
          mn
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (i.memoizedState = {
          dehydrated: e,
          treeContext: _i !== null ? { id: In, overflow: Fn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Vf(e), a.return = i, i.child = a, ve = i, Kt = null)) : e = null, e === null) throw Ci(i);
        return i.lanes = 536870912, null;
      }
      return jo(i, o);
    }
    var f = e.memoizedState;
    if (f !== null) {
      var b = f.dehydrated;
      if (su(i), h)
        if (i.flags & 256)
          i.flags &= -257, i = og(
            e,
            i,
            a
          );
        else if (i.memoizedState !== null)
          i.child = e.child, i.flags |= 128, i = null;
        else throw Error(s(558));
      else if (ue || os(e, i, a, !1), h = (a & e.childLanes) !== 0, ue || h) {
        if (Ri.current === null) {
          if (o = Xt, o !== null && (b = Xd(o, a), b !== 0 && b !== f.retryLane))
            throw f.retryLane = b, is(e, b), je(o, e, b), wu;
          cl();
        }
        i = og(
          e,
          i,
          a
        );
      } else
        e = f.treeContext, Kt = vn(b.nextSibling), ve = i, Et = !0, wi = null, mn = !1, e !== null && qf(i, e), i = jo(i, o), i.flags |= 134221824;
      return i;
    }
    return e = ri(e.child, {
      mode: o.mode,
      children: o.children
    }), e.ref = i.ref, i.child = e, e.return = i, e;
  }
  function sa(e, i) {
    var a = i.ref;
    if (a === null)
      e !== null && e.ref !== null && (i.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(s(284));
      (e === null || e.ref !== a) && (i.flags |= 4194816);
    }
  }
  function Cu(e, i, a, o, h) {
    return ls(i), a = ou(
      e,
      i,
      a,
      o,
      void 0,
      h
    ), o = lu(), e !== null && !ue ? (cu(e, i, h), di(e, i, h)) : (Et && o && So(i), i.flags |= 1, fe(e, i, a, h), i.child);
  }
  function lg(e, i, a, o, h, f) {
    return ls(i), i.updateQueue = null, a = hp(
      i,
      o,
      a,
      h
    ), up(e), o = lu(), e !== null && !ue ? (cu(e, i, f), di(e, i, f)) : (Et && o && So(i), i.flags |= 1, fe(e, i, a, f), i.child);
  }
  function cg(e, i, a, o, h) {
    if (ls(i), i.stateNode === null) {
      var f = Ks, b = a.contextType;
      typeof b == "object" && b !== null && (f = _e(b)), f = new a(o, f), i.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = Tu, i.stateNode = f, f._reactInternals = i, f = i.stateNode, f.props = o, f.state = i.memoizedState, f.refs = {}, Wc(i), b = a.contextType, f.context = typeof b == "object" && b !== null ? _e(b) : Ks, f.state = i.memoizedState, b = a.getDerivedStateFromProps, typeof b == "function" && (Eu(
        i,
        a,
        b,
        o
      ), f.state = i.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (b = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), b !== f.state && Tu.enqueueReplaceState(f, f.state, null), rr(i, o, f, h), ar(), f.state = i.memoizedState), typeof f.componentDidMount == "function" && (i.flags |= 4194308), o = !0;
    } else if (e === null) {
      f = i.stateNode;
      var T = i.memoizedProps, x = gs(a, T);
      f.props = x;
      var k = f.context, z = a.contextType;
      b = Ks, typeof z == "object" && z !== null && (b = _e(z));
      var V = a.getDerivedStateFromProps;
      z = typeof V == "function" || typeof f.getSnapshotBeforeUpdate == "function", T = i.pendingProps !== T, z || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (T || k !== b) && Qp(
        i,
        f,
        o,
        b
      ), Di = !1;
      var R = i.memoizedState;
      f.state = R, rr(i, o, f, h), ar(), k = i.memoizedState, T || R !== k || Di ? (typeof V == "function" && (Eu(
        i,
        a,
        V,
        o
      ), k = i.memoizedState), (x = Di || Kp(
        i,
        a,
        x,
        o,
        R,
        k,
        b
      )) ? (z || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (i.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (i.flags |= 4194308), i.memoizedProps = o, i.memoizedState = k), f.props = o, f.state = k, f.context = b, o = x) : (typeof f.componentDidMount == "function" && (i.flags |= 4194308), o = !1);
    } else {
      f = i.stateNode, Jc(e, i), b = i.memoizedProps, z = gs(a, b), f.props = z, V = i.pendingProps, R = f.context, k = a.contextType, x = Ks, typeof k == "object" && k !== null && (x = _e(k)), T = a.getDerivedStateFromProps, (k = typeof T == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (b !== V || R !== x) && Qp(
        i,
        f,
        o,
        x
      ), Di = !1, R = i.memoizedState, f.state = R, rr(i, o, f, h), ar();
      var F = i.memoizedState;
      b !== V || R !== F || Di || e !== null && e.dependencies !== null && _o(e.dependencies) ? (typeof T == "function" && (Eu(
        i,
        a,
        T,
        o
      ), F = i.memoizedState), (z = Di || Kp(
        i,
        a,
        z,
        o,
        R,
        F,
        x
      ) || e !== null && e.dependencies !== null && _o(e.dependencies)) ? (k || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(o, F, x), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
        o,
        F,
        x
      )), typeof f.componentDidUpdate == "function" && (i.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (i.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || b === e.memoizedProps && R === e.memoizedState || (i.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || b === e.memoizedProps && R === e.memoizedState || (i.flags |= 1024), i.memoizedProps = o, i.memoizedState = F), f.props = o, f.state = F, f.context = x, o = z) : (typeof f.componentDidUpdate != "function" || b === e.memoizedProps && R === e.memoizedState || (i.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || b === e.memoizedProps && R === e.memoizedState || (i.flags |= 1024), o = !1);
    }
    return f = o, sa(e, i), o = (i.flags & 128) !== 0, f || o ? (f = i.stateNode, a = o && typeof a.getDerivedStateFromError != "function" ? null : f.render(), i.flags |= 1, e !== null && o ? (i.child = fs(
      i,
      e.child,
      null,
      h
    ), i.child = fs(
      i,
      null,
      a,
      h
    )) : fe(e, i, a, h), i.memoizedState = f.state, e = i.child) : e = di(
      e,
      i,
      h
    ), e;
  }
  function ug(e, i, a, o) {
    return as(), i.flags |= 256, fe(e, i, a, o), i.child;
  }
  var xu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Mu(e) {
    return { baseLanes: e, cachePool: Jf() };
  }
  function Du(e, i, a) {
    return e = e !== null ? e.childLanes & ~a : 0, i && (e |= en), e;
  }
  function hg(e, i, a) {
    var o = i.pendingProps, h = !1, f = (i.flags & 128) !== 0, b;
    if ((b = f) || (b = e !== null && e.memoizedState === null ? !1 : (Ce.current & 2) !== 0), b && (h = !0, i.flags &= -129), b = (i.flags & 32) !== 0, i.flags &= -33, e === null) {
      if (Et) {
        if (h ? Li(i) : ki(), (e = Kt) ? (e = Lm(
          e,
          mn
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (i.memoizedState = {
          dehydrated: e,
          treeContext: _i !== null ? { id: In, overflow: Fn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Vf(e), a.return = i, i.child = a, ve = i, Kt = null)) : e = null, e === null) throw Ci(i);
        return Mh(e) ? i.lanes = 32 : i.lanes = 536870912, null;
      }
      return f = o.children, o = o.fallback, h ? (ki(), h = i.mode, f = Vo(
        { mode: "hidden", children: f },
        h
      ), o = ss(
        o,
        h,
        a,
        null
      ), f.return = i, o.return = i, f.sibling = o, i.child = f, o = i.child, o.memoizedState = Mu(a), o.childLanes = Du(
        e,
        b,
        a
      ), i.memoizedState = xu, hr(null, o)) : (Li(i), Ou(i, f));
    }
    var T = e.memoizedState;
    if (T !== null) {
      var x = T.dehydrated;
      if (x !== null)
        return eb(
          e,
          i,
          f,
          b,
          o,
          x,
          T,
          a
        );
    }
    return h ? (ki(), h = o.fallback, f = i.mode, T = e.child, x = T.sibling, o = ri(T, {
      mode: "hidden",
      children: o.children
    }), o.subtreeFlags = T.subtreeFlags & 1206910976, x !== null ? h = ri(x, h) : (h = ss(
      h,
      f,
      a,
      null
    ), h.flags |= 2), h.return = i, o.return = i, o.sibling = h, i.child = o, hr(null, o), o = i.child, h = e.child.memoizedState, h === null ? h = Mu(a) : (f = h.cachePool, f !== null ? (T = le._currentValue, f = f.parent !== T ? { parent: T, pool: T } : f) : f = Jf(), h = {
      baseLanes: h.baseLanes | a,
      cachePool: f
    }), o.memoizedState = h, o.childLanes = Du(
      e,
      b,
      a
    ), i.memoizedState = xu, hr(e.child, o)) : (Li(i), a = e.child, e = a.sibling, a = ri(a, {
      mode: "visible",
      children: o.children
    }), a.return = i, a.sibling = null, e !== null && (b = i.deletions, b === null ? (i.deletions = [e], i.flags |= 16) : b.push(e)), i.child = a, i.memoizedState = null, a);
  }
  function Ou(e, i) {
    return i = Vo(
      { mode: "visible", children: i },
      e.mode
    ), i.return = e, e.child = i;
  }
  function Vo(e, i) {
    return e = ze(22, e, null, i), e.lanes = 0, e;
  }
  function Yo(e, i, a) {
    return fs(i, e.child, null, a), e = Ou(
      i,
      i.pendingProps.children
    ), e.flags |= 2, i.memoizedState = null, e;
  }
  function eb(e, i, a, o, h, f, b, T) {
    if (a)
      return i.flags & 256 ? (Li(i), i.flags &= -257, Yo(
        e,
        i,
        T
      )) : i.memoizedState !== null ? (ki(), i.child = e.child, i.flags |= 128, null) : (ki(), f = h.fallback, b = i.mode, h = Vo(
        { mode: "visible", children: h.children },
        b
      ), f = ss(
        f,
        b,
        T,
        null
      ), f.flags |= 2, h.return = i, f.return = i, h.sibling = f, i.child = h, fs(i, e.child, null, T), h = i.child, h.memoizedState = Mu(T), h.childLanes = Du(
        e,
        o,
        T
      ), i.memoizedState = xu, hr(null, h));
    if (Li(i), Mh(f)) {
      if (o = f.nextSibling && f.nextSibling.dataset, o) var x = o.dgst;
      return o = x, o !== "" && (h = Error(s(419)), h.stack = "", h.digest = o, Ja({ value: h, source: null, stack: null })), Yo(
        e,
        i,
        T
      );
    }
    if (ue || os(e, i, T, !1), o = (T & e.childLanes) !== 0, ue || o) {
      if (Ri.current !== null)
        return Yo(
          e,
          i,
          T
        );
      if (o = Xt, o !== null && (h = Xd(
        o,
        T
      ), h !== 0 && h !== b.retryLane))
        throw b.retryLane = h, is(e, h), je(o, e, h), wu;
      return xh(f) || cl(), Yo(
        e,
        i,
        T
      );
    }
    return xh(f) ? (i.flags |= 192, i.child = e.child, null) : (e = b.treeContext, Kt = vn(f.nextSibling), ve = i, Et = !0, wi = null, mn = !1, e !== null && qf(i, e), i = Ou(
      i,
      h.children
    ), i.flags |= 134221824, i);
  }
  function dg(e, i, a) {
    e.lanes |= i;
    var o = e.alternate;
    o !== null && (o.lanes |= i), To(e.return, i, a);
  }
  function fg(e) {
    for (var i = null; e !== null; ) {
      var a = e.alternate;
      a !== null && Ro(a) === null && (i = e), e = e.sibling;
    }
    return i;
  }
  function Xo(e, i, a, o, h, f) {
    var b = e.memoizedState;
    b === null ? e.memoizedState = {
      isBackwards: i,
      rendering: null,
      renderingStartTime: 0,
      last: o,
      tail: a,
      tailMode: h,
      treeForkCount: f
    } : (b.isBackwards = i, b.rendering = null, b.renderingStartTime = 0, b.last = o, b.tail = a, b.tailMode = h, b.treeForkCount = f);
  }
  function Nu(e) {
    var i = e.child;
    for (e.child = null; i !== null; ) {
      var a = i.sibling;
      i.sibling = e.child, e.child = i, i = a;
    }
  }
  function Ru(e, i, a) {
    var o = i.pendingProps, h = o.revealOrder, f = o.tail;
    o = o.children;
    var b = Ce.current;
    if (i.flags & 128)
      return or(i, b), null;
    var T = (b & 2) !== 0;
    if (T ? (b = b & 1 | 2, i.flags |= 128) : b &= 1, or(i, b), h === "backwards" && e !== null ? (Nu(e), fe(e, i, o, a), Nu(e)) : fe(e, i, o, a), o = Et ? Wa : 0, !T && e !== null && (e.flags & 128) !== 0)
      t: for (e = i.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && dg(e, a, i);
        else if (e.tag === 19)
          dg(e, a, i);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === i) break t;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === i)
            break t;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (h) {
      case "backwards":
        a = fg(i.child), a === null ? (h = i.child, i.child = null) : (h = a.sibling, a.sibling = null, Nu(i)), Xo(
          i,
          !0,
          h,
          null,
          f,
          o
        );
        break;
      case "unstable_legacy-backwards":
        for (a = null, h = i.child, i.child = null; h !== null; ) {
          if (e = h.alternate, e !== null && Ro(e) === null) {
            i.child = h;
            break;
          }
          e = h.sibling, h.sibling = a, a = h, h = e;
        }
        Xo(
          i,
          !0,
          a,
          null,
          f,
          o
        );
        break;
      case "together":
        Xo(
          i,
          !1,
          null,
          null,
          void 0,
          o
        );
        break;
      case "independent":
        i.memoizedState = null;
        break;
      default:
        a = fg(i.child), a === null ? (h = i.child, i.child = null) : (h = a.sibling, a.sibling = null), Xo(
          i,
          !1,
          h,
          a,
          f,
          o
        );
    }
    return i.child;
  }
  function pg(e, i, a) {
    var o = i.pendingProps;
    return xi(i, i.type, o.value), fe(e, i, o.children, a), i.child;
  }
  function di(e, i, a) {
    if (e !== null && (i.dependencies = e.dependencies), Fi |= i.lanes, (a & i.childLanes) === 0)
      if (e !== null) {
        if (os(
          e,
          i,
          a,
          !1
        ), (a & i.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && i.child !== e.child)
      throw Error(s(153));
    if (i.child !== null) {
      for (e = i.child, a = ri(e, e.pendingProps), i.child = a, a.return = i; e.sibling !== null; )
        e = e.sibling, a = a.sibling = ri(e, e.pendingProps), a.return = i;
      a.sibling = null;
    }
    return i.child;
  }
  function Lu(e, i) {
    return (e.lanes & i) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && _o(e)));
  }
  function nb(e, i, a) {
    switch (i.tag) {
      case 3:
        Zr(i, i.stateNode.containerInfo), xi(i, le, e.memoizedState.cache), as();
        break;
      case 27:
      case 5:
        rc(i);
        break;
      case 4:
        Zr(i, i.stateNode.containerInfo);
        break;
      case 10:
        xi(
          i,
          i.type,
          i.memoizedProps.value
        );
        break;
      case 31:
        if (i.memoizedState !== null)
          return i.flags |= 128, su(i), null;
        break;
      case 13:
        var o = i.memoizedState;
        if (o !== null) {
          if (o.dehydrated !== null)
            return Li(i), i.flags |= 128, null;
          o = os(
            e,
            i,
            a,
            !1
          );
          var h = i.child.childLanes;
          return o || (a & h) !== 0 ? hg(e, i, a) : (Li(i), e = di(
            e,
            i,
            a
          ), e !== null ? e.sibling : null);
        }
        Li(i);
        break;
      case 19:
        if (i.flags & 128)
          return Ru(
            e,
            i,
            a
          );
        if (h = (e.flags & 128) !== 0, o = (a & i.childLanes) !== 0, o || (os(
          e,
          i,
          a,
          !1
        ), o = (a & i.childLanes) !== 0), h) {
          if (o)
            return Ru(
              e,
              i,
              a
            );
          i.flags |= 128;
        }
        if (h = i.memoizedState, h !== null && (h.rendering = null, h.tail = null, h.lastEffect = null), or(i, Ce.current), o) break;
        return null;
      case 22:
        return i.lanes = 0, ag(
          e,
          i,
          a,
          i.pendingProps
        );
      case 24:
        xi(i, le, e.memoizedState.cache);
    }
    return di(e, i, a);
  }
  function gg(e, i, a) {
    if (e !== null)
      if (e.memoizedProps !== i.pendingProps)
        ue = !0;
      else {
        if (!Lu(e, a) && (i.flags & 128) === 0)
          return ue = !1, nb(
            e,
            i,
            a
          );
        ue = (e.flags & 131072) !== 0;
      }
    else
      ue = !1, Et && (i.flags & 1048576) !== 0 && Xf(i, Wa, i.index);
    switch (i.lanes = 0, i.tag) {
      case 16:
        t: {
          var o = i.pendingProps;
          if (e = hs(i.elementType), i.type = e, typeof e == "function")
            Uc(e) ? (o = gs(e, o), i.tag = 1, i = cg(
              null,
              i,
              e,
              o,
              a
            )) : (i.tag = 0, i = Cu(
              null,
              i,
              e,
              o,
              a
            ));
          else {
            if (e != null) {
              var h = e.$$typeof;
              if (h === H) {
                i.tag = 11, i = ng(
                  null,
                  i,
                  e,
                  o,
                  a
                );
                break t;
              } else if (h === mt) {
                i.tag = 14, i = ig(
                  null,
                  i,
                  e,
                  o,
                  a
                );
                break t;
              } else if (h === vt) {
                i.tag = 10, i.type = e, i = pg(
                  null,
                  i,
                  a
                );
                break t;
              }
            }
            throw i = Nt(e) || e, Error(s(306, i, ""));
          }
        }
        return i;
      case 0:
        return Cu(
          e,
          i,
          i.type,
          i.pendingProps,
          a
        );
      case 1:
        return o = i.type, h = gs(
          o,
          i.pendingProps
        ), cg(
          e,
          i,
          o,
          h,
          a
        );
      case 3:
        t: {
          if (Zr(
            i,
            i.stateNode.containerInfo
          ), e === null) throw Error(s(387));
          o = i.pendingProps;
          var f = i.memoizedState;
          h = f.element, Jc(e, i), rr(i, o, null, a);
          var b = i.memoizedState;
          if (o = b.cache, xi(i, le, o), o !== f.cache && qc(
            i,
            [le],
            a,
            !0
          ), ar(), o = b.element, f.isDehydrated)
            if (f = {
              element: o,
              isDehydrated: !1,
              cache: b.cache
            }, i.updateQueue.baseState = f, i.memoizedState = f, i.flags & 256) {
              i = ug(
                e,
                i,
                o,
                a
              );
              break t;
            } else if (o !== h) {
              h = fn(
                Error(s(424)),
                i
              ), Ja(h), i = ug(
                e,
                i,
                o,
                a
              );
              break t;
            } else
              for (e = i.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Kt = vn(e.firstChild), ve = i, Et = !0, wi = null, mn = !0, a = ap(
                i,
                null,
                o,
                a
              ), i.child = a; a; )
                a.flags = a.flags & -3 | 134221824, a = a.sibling;
          else {
            if (as(), o === h) {
              i = di(
                e,
                i,
                a
              );
              break t;
            }
            fe(e, i, o, a);
          }
          i = i.child;
        }
        return i;
      case 26:
        return sa(e, i), e === null ? (a = Um(
          i.type,
          null,
          i.pendingProps,
          null
        )) ? i.memoizedState = a : Et || (i.stateNode = bm(
          i.type,
          i.pendingProps,
          bi.current,
          i
        )) : i.memoizedState = Um(
          i.type,
          e.memoizedProps,
          i.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return rc(i), e === null && Et && (o = i.stateNode = Pm(
          i.type,
          i.pendingProps,
          bi.current
        ), ve = i, mn = !0, h = Kt, Gi(i.type) ? (Dh = h, Kt = vn(o.firstChild)) : Kt = h), fe(
          e,
          i,
          i.pendingProps.children,
          a
        ), sa(e, i), e === null && (i.flags |= 4194304), i.child;
      case 5:
        return e === null && Et && ((h = o = Kt) && (o = Zb(
          o,
          i.type,
          i.pendingProps,
          mn
        ), o !== null ? (i.stateNode = o, ve = i, Kt = vn(o.firstChild), mn = !1, h = !0) : h = !1), h || Ci(i)), rc(i), h = i.type, f = i.pendingProps, b = e !== null ? e.memoizedProps : null, o = f.children, Ah(h, f) ? o = null : b !== null && Ah(h, b) && (i.flags |= 32), i.memoizedState !== null && (h = ou(
          e,
          i,
          Yv,
          null,
          null,
          a
        ), Ea._currentValue = h), sa(e, i), fe(e, i, o, a), i.child;
      case 6:
        return e === null && Et && ((e = a = Kt) && (a = $b(
          a,
          i.pendingProps,
          mn
        ), a !== null ? (i.stateNode = a, ve = i, Kt = null, e = !0) : e = !1), e || Ci(i)), null;
      case 13:
        return hg(e, i, a);
      case 4:
        return Zr(
          i,
          i.stateNode.containerInfo
        ), o = i.pendingProps, e === null ? i.child = fs(
          i,
          null,
          o,
          a
        ) : fe(e, i, o, a), i.child;
      case 11:
        return ng(
          e,
          i,
          i.type,
          i.pendingProps,
          a
        );
      case 7:
        return o = i.pendingProps, sa(e, i), fe(e, i, o, a), i.child;
      case 8:
        return fe(
          e,
          i,
          i.pendingProps.children,
          a
        ), i.child;
      case 12:
        return fe(
          e,
          i,
          i.pendingProps.children,
          a
        ), i.child;
      case 10:
        return pg(e, i, a);
      case 9:
        return h = i.type._context, o = i.pendingProps.children, ls(i), h = _e(h), o = o(h), i.flags |= 1, fe(e, i, o, a), i.child;
      case 14:
        return ig(
          e,
          i,
          i.type,
          i.pendingProps,
          a
        );
      case 15:
        return sg(
          e,
          i,
          i.type,
          i.pendingProps,
          a
        );
      case 19:
        return Ru(e, i, a);
      case 31:
        return tb(e, i, a);
      case 22:
        return ag(
          e,
          i,
          a,
          i.pendingProps
        );
      case 24:
        return ls(i), o = _e(le), e === null ? (h = Zc(), h === null && (h = Xt, f = Kc(), h.pooledCache = f, f.refCount++, f !== null && (h.pooledCacheLanes |= a), h = f), i.memoizedState = { parent: o, cache: h }, Wc(i), xi(i, le, h)) : ((e.lanes & a) !== 0 && (Jc(e, i), rr(i, null, null, a), ar()), h = e.memoizedState, f = i.memoizedState, h.parent !== o ? (h = { parent: o, cache: o }, i.memoizedState = h, i.lanes === 0 && (i.memoizedState = i.updateQueue.baseState = h), xi(i, le, o)) : (o = f.cache, xi(i, le, o), o !== h.cache && qc(
          i,
          [le],
          a,
          !0
        ))), fe(
          e,
          i,
          i.pendingProps.children,
          a
        ), i.child;
      case 30:
        return i.stateNode === null && (i.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), o = i.pendingProps, o.name != null && o.name !== "auto" ? i.flags |= e === null ? 18882560 : 18874368 : Et && So(i), e !== null && e.memoizedProps.name !== o.name ? i.flags |= 4194816 : sa(e, i), fe(e, i, o.children, a), i.child;
      case 29:
        throw i.pendingProps;
    }
    throw Error(s(156, i.tag));
  }
  function fi(e) {
    e.flags |= 4;
  }
  function ku(e, i, a, o, h) {
    var f;
    if ((f = (e.mode & 32) !== 0) && (f = a === null ? Vm(i, o) : Vm(i, o) && (o.src !== a.src || o.srcSet !== a.srcSet)), f) {
      if (e.flags |= 16777216, (h & 335544128) === h)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Zg()) e.flags |= 8192;
        else
          throw ds = Mo, $c;
    } else e.flags &= -16777217;
  }
  function mg(e, i) {
    if (i.type !== "stylesheet" || (i.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Ym(i))
      if (Zg()) e.flags |= 8192;
      else
        throw ds = Mo, $c;
  }
  function qo(e, i) {
    i !== null && (e.flags |= 4), e.flags & 16384 && (i = e.tag !== 22 ? jd() : 536870912, e.lanes |= i, ca |= i);
  }
  function dr(e, i) {
    if (!Et)
      switch (e.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var a = e.tail, o = null; a !== null; )
            a.alternate !== null && (o = a), a = a.sibling;
          o === null ? i || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null;
          break;
        default:
          for (i = e.tail, a = null; i !== null; )
            i.alternate !== null && (a = i), i = i.sibling;
          a === null ? e.tail = null : a.sibling = null;
      }
  }
  function Qt(e) {
    var i = e.alternate !== null && e.alternate.child === e.child, a = 0, o = 0;
    if (i)
      for (var h = e.child; h !== null; )
        a |= h.lanes | h.childLanes, o |= h.subtreeFlags & 1206910976, o |= h.flags & 1206910976, h.return = e, h = h.sibling;
    else
      for (h = e.child; h !== null; )
        a |= h.lanes | h.childLanes, o |= h.subtreeFlags, o |= h.flags, h.return = e, h = h.sibling;
    return e.subtreeFlags |= o, e.childLanes = a, i;
  }
  function ib(e, i, a) {
    var o = i.pendingProps;
    switch (jc(i), i.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Qt(i), null;
      case 1:
        return Qt(i), null;
      case 3:
        return a = i.stateNode, o = null, e !== null && (o = e.memoizedState.cache), i.memoizedState.cache !== o && (i.flags |= 2048), ci(le), Bs(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && ($s(i) ? fi(i) : e === null || e.memoizedState.isDehydrated && (i.flags & 256) === 0 || (i.flags |= 1024, Yc())), Qt(i), null;
      case 26:
        var h = i.type, f = i.memoizedState;
        return e === null ? (fi(i), f !== null ? (Qt(i), mg(i, f)) : (Qt(i), ku(
          i,
          h,
          null,
          o,
          a
        ))) : f ? f !== e.memoizedState ? (fi(i), Qt(i), mg(i, f)) : (Qt(i), i.flags &= -16777217) : (e = e.memoizedProps, e !== o && fi(i), Qt(i), ku(
          i,
          h,
          e,
          o,
          a
        )), null;
      case 27:
        if ($r(i), a = bi.current, h = i.type, e !== null && i.stateNode != null)
          e.memoizedProps !== o && fi(i);
        else {
          if (!o) {
            if (i.stateNode === null)
              throw Error(s(166));
            return Qt(i), i.subtreeFlags &= -33554433, null;
          }
          e = Bn.current, $s(i) ? Kf(i) : (e = Pm(h, o, a), i.stateNode = e, fi(i));
        }
        return Qt(i), i.subtreeFlags &= -33554433, null;
      case 5:
        if ($r(i), h = i.type, e !== null && i.stateNode != null)
          e.memoizedProps !== o && fi(i);
        else {
          if (!o) {
            if (i.stateNode === null)
              throw Error(s(166));
            return Qt(i), i.subtreeFlags &= -33554433, null;
          }
          if (f = Bn.current, $s(i))
            Kf(i);
          else {
            var b = Tr(
              bi.current
            );
            switch (f) {
              case 1:
                f = b.createElementNS(
                  "http://www.w3.org/2000/svg",
                  h
                );
                break;
              case 2:
                f = b.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  h
                );
                break;
              default:
                switch (h) {
                  case "svg":
                    f = b.createElementNS(
                      "http://www.w3.org/2000/svg",
                      h
                    );
                    break;
                  case "math":
                    f = b.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      h
                    );
                    break;
                  case "script":
                    f = b.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(
                      f.firstChild
                    );
                    break;
                  case "select":
                    f = typeof o.is == "string" ? b.createElement("select", {
                      is: o.is
                    }) : b.createElement("select"), o.multiple ? f.multiple = !0 : o.size && (f.size = o.size);
                    break;
                  default:
                    f = typeof o.is == "string" ? b.createElement(h, { is: o.is }) : b.createElement(h);
                }
            }
            f[Te] = i, f[Fe] = o;
            t: for (b = i.child; b !== null; ) {
              if (b.tag === 5 || b.tag === 6)
                f.appendChild(b.stateNode);
              else if (b.tag !== 4 && b.tag !== 27 && b.child !== null) {
                b.child.return = b, b = b.child;
                continue;
              }
              if (b === i) break t;
              for (; b.sibling === null; ) {
                if (b.return === null || b.return === i)
                  break t;
                b = b.return;
              }
              b.sibling.return = b.return, b = b.sibling;
            }
            i.stateNode = f;
            t: switch (Me(f, h, o), h) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                o = !!o.autoFocus;
                break t;
              case "img":
                o = !0;
                break t;
              default:
                o = !1;
            }
            o && fi(i);
          }
        }
        return Qt(i), i.subtreeFlags &= -33554433, ku(
          i,
          i.type,
          e === null ? null : e.memoizedProps,
          i.pendingProps,
          a
        ), null;
      case 6:
        if (e && i.stateNode != null)
          e.memoizedProps !== o && fi(i);
        else {
          if (typeof o != "string" && i.stateNode === null)
            throw Error(s(166));
          if (e = bi.current, $s(i)) {
            if (e = i.stateNode, a = i.memoizedProps, o = null, h = ve, h !== null)
              switch (h.tag) {
                case 27:
                case 5:
                  o = h.memoizedProps;
              }
            e[Te] = i, e = !!(e.nodeValue === a || o !== null && o.suppressHydrationWarning === !0 || gm(e.nodeValue, a)), e || Ci(i, !0);
          } else
            e = Tr(e).createTextNode(
              o
            ), e[Te] = i, i.stateNode = e;
        }
        return Qt(i), null;
      case 31:
        if (a = i.memoizedState, e === null || e.memoizedState !== null) {
          if (o = $s(i), a !== null) {
            if (e === null) {
              if (!o) throw Error(s(318));
              if (e = i.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(557));
              e[Te] = i;
            } else
              as(), (i.flags & 128) === 0 && (i.memoizedState = null), i.flags |= 4;
            Qt(i), e = !1;
          } else
            a = Yc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
          if (!e)
            return i.flags & 256 ? (We(i), i) : (We(i), null);
          if ((i.flags & 128) !== 0)
            throw Error(s(558));
        }
        return Qt(i), null;
      case 13:
        if (o = i.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (h = $s(i), o !== null && o.dehydrated !== null) {
            if (e === null) {
              if (!h) throw Error(s(318));
              if (h = i.memoizedState, h = h !== null ? h.dehydrated : null, !h) throw Error(s(317));
              h[Te] = i;
            } else
              as(), (i.flags & 128) === 0 && (i.memoizedState = null), i.flags |= 4;
            Qt(i), h = !1;
          } else
            h = Yc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = h), h = !0;
          if (!h)
            return i.flags & 256 ? (We(i), i) : (We(i), null);
        }
        return We(i), (i.flags & 128) !== 0 ? (i.lanes = a, i) : (a = o !== null, e = e !== null && e.memoizedState !== null, a && (o = i.child, h = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (h = o.alternate.memoizedState.cachePool.pool), f = null, o.memoizedState !== null && o.memoizedState.cachePool !== null && (f = o.memoizedState.cachePool.pool), f !== h && (o.flags |= 2048)), a !== e && a && (i.child.flags |= 8192), qo(i, i.updateQueue), Qt(i), null);
      case 4:
        return Bs(), e === null && gh(i.stateNode.containerInfo), i.flags |= 67108864, Qt(i), null;
      case 10:
        return ci(i.type), Qt(i), null;
      case 19:
        if (au(i), o = i.memoizedState, o === null) return Qt(i), null;
        if (h = (i.flags & 128) !== 0, f = o.rendering, f === null)
          if (h) dr(o, !1);
          else {
            if (ae !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = i.child; e !== null; ) {
                if (f = Ro(e), f !== null) {
                  for (i.flags |= 128, dr(o, !1), e = f.updateQueue, i.updateQueue = e, qo(i, e), i.subtreeFlags = 0, e = a, a = i.child; a !== null; )
                    jf(a, e), a = a.sibling;
                  return or(
                    i,
                    Ce.current & 1 | 2
                  ), Et && oi(i, o.treeForkCount), i.child;
                }
                e = e.sibling;
              }
            o.tail !== null && qe() > al && (i.flags |= 128, h = !0, dr(o, !1), i.lanes = 4194304);
          }
        else {
          if (!h)
            if (e = Ro(f), e !== null) {
              if (i.flags |= 128, h = !0, e = e.updateQueue, i.updateQueue = e, qo(i, e), dr(o, !0), o.tail === null && o.tailMode !== "collapsed" && o.tailMode !== "visible" && !f.alternate && !Et)
                return Qt(i), null;
            } else
              2 * qe() - o.renderingStartTime > al && a !== 536870912 && (i.flags |= 128, h = !0, dr(o, !1), i.lanes = 4194304);
          o.isBackwards ? (f.sibling = i.child, i.child = f) : (e = o.last, e !== null ? e.sibling = f : i.child = f, o.last = f);
        }
        if (o.tail !== null) {
          e = o.tail;
          t: {
            for (a = e; a !== null; ) {
              if (a.alternate !== null) {
                a = !1;
                break t;
              }
              a = a.sibling;
            }
            a = !0;
          }
          return o.rendering = e, o.tail = e.sibling, o.renderingStartTime = qe(), e.sibling = null, f = Ce.current, f = h ? f & 1 | 2 : f & 1, o.tailMode === "visible" || o.tailMode === "collapsed" || !a || Et ? or(i, f) : (a = f, qt(we, i), qt(Ce, a), Ne === null && (Ne = i)), Et && oi(i, o.treeForkCount), e;
        }
        return Qt(i), null;
      case 22:
      case 23:
        return We(i), iu(), o = i.memoizedState !== null, e !== null ? e.memoizedState !== null !== o && (i.flags |= 8192) : o && (i.flags |= 8192), o ? (a & 536870912) !== 0 && (i.flags & 128) === 0 && (Qt(i), i.subtreeFlags & 6 && (i.flags |= 8192)) : Qt(i), a = i.updateQueue, a !== null && qo(i, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), o = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (o = i.memoizedState.cachePool.pool), o !== a && (i.flags |= 2048), e !== null && Ee(us), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), i.memoizedState.cache !== a && (i.flags |= 2048), ci(le), Qt(i), null;
      case 25:
        return null;
      case 30:
        return i.flags |= 33554432, Qt(i), null;
    }
    throw Error(s(156, i.tag));
  }
  function sb(e, i) {
    switch (jc(i), i.tag) {
      case 1:
        return e = i.flags, e & 65536 ? (i.flags = e & -65537 | 128, i) : null;
      case 3:
        return ci(le), Bs(), e = i.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (i.flags = e & -65537 | 128, i) : null;
      case 26:
      case 27:
      case 5:
        return $r(i), null;
      case 31:
        if (i.memoizedState !== null) {
          if (We(i), i.alternate === null)
            throw Error(s(340));
          as();
        }
        return e = i.flags, e & 65536 ? (i.flags = e & -65537 | 128, i) : null;
      case 13:
        if (We(i), e = i.memoizedState, e !== null && e.dehydrated !== null) {
          if (i.alternate === null)
            throw Error(s(340));
          as();
        }
        return e = i.flags, e & 65536 ? (i.flags = e & -65537 | 128, i) : null;
      case 19:
        return au(i), e = i.flags, e & 65536 ? (i.flags = e & -65537 | 128, e = i.memoizedState, e !== null && (e.rendering = null, e.tail = null), i.flags |= 4, i) : null;
      case 4:
        return Bs(), null;
      case 10:
        return ci(i.type), null;
      case 22:
      case 23:
        return We(i), iu(), e !== null && Ee(us), e = i.flags, e & 65536 ? (i.flags = e & -65537 | 128, i) : null;
      case 24:
        return ci(le), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function yg(e, i) {
    switch (jc(i), i.tag) {
      case 3:
        ci(le), Bs();
        break;
      case 26:
      case 27:
      case 5:
        $r(i);
        break;
      case 4:
        Bs();
        break;
      case 31:
        i.memoizedState !== null && We(i);
        break;
      case 13:
        We(i);
        break;
      case 19:
        au(i);
        break;
      case 10:
        ci(i.type);
        break;
      case 22:
      case 23:
        We(i), iu(), e !== null && Ee(us);
        break;
      case 24:
        ci(le);
    }
  }
  function fr(e, i) {
    try {
      var a = i.updateQueue, o = a !== null ? a.lastEffect : null;
      if (o !== null) {
        var h = o.next;
        a = h;
        do {
          if ((a.tag & e) === e) {
            o = void 0;
            var f = a.create, b = a.inst;
            o = f(), b.destroy = o;
          }
          a = a.next;
        } while (a !== h);
      }
    } catch (T) {
      Ht(i, i.return, T);
    }
  }
  function Bi(e, i, a) {
    try {
      var o = i.updateQueue, h = o !== null ? o.lastEffect : null;
      if (h !== null) {
        var f = h.next;
        o = f;
        do {
          if ((o.tag & e) === e) {
            var b = o.inst, T = b.destroy;
            if (T !== void 0) {
              b.destroy = void 0, h = i;
              var x = a, k = T;
              try {
                k();
              } catch (z) {
                Ht(
                  h,
                  x,
                  z
                );
              }
            }
          }
          o = o.next;
        } while (o !== f);
      }
    } catch (z) {
      Ht(i, i.return, z);
    }
  }
  function vg(e) {
    var i = e.updateQueue;
    if (i !== null) {
      var a = e.stateNode;
      try {
        op(i, a);
      } catch (o) {
        Ht(e, e.return, o);
      }
    }
  }
  function bg(e, i, a) {
    a.props = gs(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (o) {
      Ht(e, i, o);
    }
  }
  function zn(e, i) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var o = e.stateNode;
            break;
          case 30:
            var h = e.stateNode, f = si(e.memoizedProps, h);
            (h.ref === null || h.ref.name !== f) && (h.ref = Cm(f)), o = h.ref;
            break;
          case 7:
            if (e.stateNode === null) {
              var b = new sn(e);
              m(
                e.child,
                !1,
                Kb,
                b,
                void 0,
                void 0
              ), e.stateNode = b;
            }
            o = e.stateNode;
            break;
          default:
            o = e.stateNode;
        }
        typeof a == "function" ? e.refCleanup = a(o) : a.current = o;
      }
    } catch (T) {
      Ht(e, i, T);
    }
  }
  function xe(e, i) {
    var a = e.ref, o = e.refCleanup;
    if (a !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (h) {
          Ht(e, i, h);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (h) {
          Ht(e, i, h);
        }
      else a.current = null;
  }
  function Ko(e, i) {
    if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && i !== null)
      for (var a = 0; a < i.length; a++)
        Rm(
          e.stateNode,
          i[a]
        );
  }
  function Ag(e) {
    for (var i = e.return; i !== null && (Pu(i) && Rm(e.stateNode, i.stateNode), !Bu(i)); )
      i = i.return;
  }
  function pr(e) {
    for (var i = e.return; i !== null && (Pu(i) && Qb(e.stateNode, i.stateNode), !Bu(i)); )
      i = i.return;
  }
  function Bu(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 27;
  }
  function Pu(e) {
    return e && e.tag === 7 && e.stateNode !== null;
  }
  function Iu(e) {
    var i = e.type, a = e.memoizedProps, o = e.stateNode;
    try {
      t: switch (i) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && o.focus();
          break t;
        case "img":
          a.src ? o.src = a.src : a.srcSet && (o.srcset = a.srcSet);
      }
    } catch (h) {
      Ht(e, e.return, h);
    }
  }
  function Fu(e, i, a) {
    try {
      var o = e.stateNode;
      Ob(o, e.type, a, i), o[Fe] = i;
    } catch (h) {
      Ht(e, e.return, h);
    }
  }
  function Sg(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Gi(e.type) || e.tag === 4;
  }
  function zu(e) {
    t: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Sg(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Gi(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue t;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Uu(e, i, a, o) {
    var h = e.tag;
    if (h === 5 || h === 6)
      h = e.stateNode, i ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(h, i) : (i = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, i.appendChild(h), a = a._reactRootContainer, a != null || i.onclick !== null || (i.onclick = Pn)), Ko(e, o), Pt = !0;
    else if (h !== 4 && (h === 27 && (Ko(e, o), o = null, Gi(e.type) && (a = e.stateNode, i = null)), e = e.child, e !== null))
      for (Uu(
        e,
        i,
        a,
        o
      ), e = e.sibling; e !== null; )
        Uu(
          e,
          i,
          a,
          o
        ), e = e.sibling;
  }
  function Qo(e, i, a, o) {
    var h = e.tag;
    if (h === 5 || h === 6)
      h = e.stateNode, i ? a.insertBefore(h, i) : a.appendChild(h), Ko(e, o), Pt = !0;
    else if (h !== 4 && (h === 27 && (Ko(e, o), o = null, Gi(e.type) && (a = e.stateNode)), e = e.child, e !== null))
      for (Qo(
        e,
        i,
        a,
        o
      ), e = e.sibling; e !== null; )
        Qo(
          e,
          i,
          a,
          o
        ), e = e.sibling;
  }
  function Eg(e) {
    var i = e.stateNode, a = e.memoizedProps;
    try {
      for (var o = e.type, h = i.attributes; h.length; )
        i.removeAttributeNode(h[0]);
      Me(i, o, a), i[Te] = e, i[Fe] = a;
    } catch (f) {
      Ht(e, e.return, f);
    }
  }
  var Zo = !1, Je = null;
  function Tg(e) {
    (e.tag === 30 || (e.subtreeFlags & 33554432) !== 0) && (Zo = !0);
  }
  var Un = null;
  function _g() {
    var e = Un;
    return Un = null, e;
  }
  var Ue = 0;
  function aa(e, i, a, o, h) {
    return Ue = 0, wg(
      e.child,
      i,
      a,
      o,
      h
    );
  }
  function wg(e, i, a, o, h) {
    for (var f = !1; e !== null; ) {
      if (e.tag === 5) {
        var b = e.stateNode;
        if (o !== null) {
          var T = Th(b);
          o.push(T), T.view && (f = !0);
        } else
          f || Th(b).view && (f = !0);
        Zo = !0, _m(
          b,
          Ue === 0 ? i : i + "_" + Ue,
          a
        ), Ue++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && h || wg(
        e.child,
        i,
        a,
        o,
        h
      ) && (f = !0));
      e = e.sibling;
    }
    return f;
  }
  function Hn(e, i) {
    for (; e !== null; )
      e.tag === 5 ? wm(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && i || Hn(
        e.child,
        i
      )), e = e.sibling;
  }
  function $o(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if ((e.tag !== 22 || e.memoizedState === null) && ($o(e), e.tag === 30 && (e.flags & 18874368) !== 0 && e.stateNode.paired)) {
          var i = e.memoizedProps;
          if (i.name == null || i.name === "auto")
            throw Error(s(544));
          var a = i.name;
          i = ai(i.default, i.share), i !== "none" && (aa(
            e,
            a,
            i,
            null,
            !1
          ) || Hn(e.child, !1));
        }
        e = e.sibling;
      }
  }
  function Hu(e, i) {
    if (e.tag === 30) {
      var a = e.stateNode, o = e.memoizedProps, h = si(o, a), f = ai(
        o.default,
        a.paired ? o.share : o.enter
      );
      f !== "none" ? aa(e, h, f, null, !1) ? ($o(e), a.paired || i || fa(e, o.onEnter)) : Hn(e.child, !1) : $o(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        Hu(e, i), e = e.sibling;
    else $o(e);
  }
  function Gu(e) {
    if (Je !== null && Je.size !== 0) {
      var i = Je;
      if ((e.subtreeFlags & 18874368) !== 0)
        for (e = e.child; e !== null; ) {
          if (e.tag !== 22 || e.memoizedState === null) {
            if (e.tag === 30 && (e.flags & 18874368) !== 0) {
              var a = e.memoizedProps, o = a.name;
              if (o != null && o !== "auto") {
                var h = i.get(o);
                if (h !== void 0) {
                  var f = ai(
                    a.default,
                    a.share
                  );
                  if (f !== "none" && (aa(
                    e,
                    o,
                    f,
                    null,
                    !1
                  ) ? (f = e.stateNode, h.paired = f, f.paired = h, fa(e, a.onShare)) : Hn(e.child, !1)), i.delete(o), i.size === 0) break;
                }
              }
            }
            Gu(e);
          }
          e = e.sibling;
        }
    }
  }
  function ju(e) {
    if (e.tag === 30) {
      var i = e.memoizedProps, a = si(i, e.stateNode), o = Je !== null ? Je.get(a) : void 0, h = ai(
        i.default,
        o !== void 0 ? i.share : i.exit
      );
      h !== "none" && (aa(e, a, h, null, !1) ? o !== void 0 ? (h = e.stateNode, o.paired = h, h.paired = o, Je.delete(a), fa(e, i.onShare)) : fa(e, i.onExit) : Hn(e.child, !1)), Je !== null && Gu(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        ju(e), e = e.sibling;
    else
      Je !== null && Gu(e);
  }
  function Cg(e) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var i = e.memoizedProps, a = si(i, e.stateNode);
        i = ai(i.default, i.update), e.flags &= -5, i !== "none" && aa(
          e,
          a,
          i,
          e.memoizedState = [],
          !1
        );
      } else
        (e.subtreeFlags & 33554432) !== 0 && Cg(e);
      e = e.sibling;
    }
  }
  function Vu(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if (e.tag !== 22 || e.memoizedState === null) {
          if (e.tag === 30 && (e.flags & 18874368) !== 0) {
            var i = e.stateNode;
            i.paired !== null && (i.paired = null, Hn(e.child, !1));
          }
          Vu(e);
        }
        e = e.sibling;
      }
  }
  function Wo(e) {
    if (e.tag === 30)
      e.stateNode.paired = null, Hn(e.child, !1), Vu(e);
    else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        Wo(e), e = e.sibling;
    else Vu(e);
  }
  function xg(e) {
    for (e = e.child; e !== null; )
      e.tag === 30 ? Hn(e.child, !1) : (e.subtreeFlags & 33554432) !== 0 && xg(e), e = e.sibling;
  }
  function Yu(e, i, a, o, h, f, b) {
    for (var T = !1; i !== null; ) {
      if (i.tag === 5) {
        var x = i.stateNode;
        if (f !== null && Ue < f.length) {
          var k = f[Ue], z = Th(x);
          (k.view || z.view) && (T = !0);
          var V;
          if (V = (e.flags & 4) === 0)
            if (z.clip) V = !0;
            else {
              V = k.rect;
              var R = z.rect;
              V = V.y !== R.y || V.x !== R.x || V.height !== R.height || V.width !== R.width;
            }
          V && (e.flags |= 4), z.abs ? z = !k.abs : (k = k.rect, z = z.rect, z = k.height !== z.height || k.width !== z.width), z && (e.flags |= 32);
        } else e.flags |= 32;
        (e.flags & 4) !== 0 && _m(
          x,
          Ue === 0 ? a : a + "_" + Ue,
          h
        ), T && (e.flags & 4) !== 0 || (Un === null && (Un = []), Un.push(
          x,
          Ue === 0 ? o : o + "_" + Ue,
          i.memoizedProps
        )), Ue++;
      } else (i.tag !== 22 || i.memoizedState === null) && (i.tag === 30 && b ? e.flags |= i.flags & 32 : Yu(
        e,
        i.child,
        a,
        o,
        h,
        f,
        b
      ) && (T = !0));
      i = i.sibling;
    }
    return T;
  }
  function Mg(e, i) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var a = e.memoizedProps, o = e.stateNode, h = si(a, o), f = ai(a.default, a.update), b;
        b = e.memoizedState, e.memoizedState = null, o = e;
        var T = e.child;
        Ue = 0, h = Yu(
          o,
          T,
          h,
          h,
          f,
          b,
          !1
        ), (e.flags & 4) !== 0 && h && fa(e, a.onUpdate);
      } else
        (e.subtreeFlags & 33554432) !== 0 && Mg(e);
      e = e.sibling;
    }
  }
  var be = !1, zt = !1, Gn = !1, Xu = !1, Dg = typeof WeakSet == "function" ? WeakSet : Set, Ae = null, jn = !1, gr = !1, Jo = !1, qu = !1;
  function ab(e, i, a) {
    if (e = e.containerInfo, vh = Ta, e = Lf(e), Lc(e)) {
      if ("selectionStart" in e)
        var o = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        t: {
          o = (o = e.ownerDocument) && o.defaultView || window;
          var h = o.getSelection && o.getSelection();
          if (h && h.rangeCount !== 0) {
            o = h.anchorNode;
            var f = h.anchorOffset, b = h.focusNode;
            h = h.focusOffset;
            try {
              o.nodeType, b.nodeType;
            } catch {
              o = null;
              break t;
            }
            var T = 0, x = -1, k = -1, z = 0, V = 0, R = e, F = null;
            e: for (; ; ) {
              for (var Q; R !== o || f !== 0 && R.nodeType !== 3 || (x = T + f), R !== b || h !== 0 && R.nodeType !== 3 || (k = T + h), R.nodeType === 3 && (T += R.nodeValue.length), (Q = R.firstChild) !== null; )
                F = R, R = Q;
              for (; ; ) {
                if (R === e) break e;
                if (F === o && ++z === f && (x = T), F === b && ++V === h && (k = T), (Q = R.nextSibling) !== null) break;
                R = F, F = R.parentNode;
              }
              R = Q;
            }
            o = x === -1 || k === -1 ? null : { start: x, end: k };
          } else o = null;
        }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (bh = { focusedElem: e, selectionRange: o }, Ta = !1, a = (a & 335544064) === a, Ae = i, i = a ? 9270 : 1024; Ae !== null; ) {
      if (e = Ae, a && (o = e.deletions, o !== null))
        for (f = 0; f < o.length; f++)
          a && ju(o[f]);
      if (e.alternate === null && (e.flags & 2) !== 0)
        a && Tg(e), tl(a);
      else {
        if (e.tag === 22) {
          if (o = e.alternate, e.memoizedState !== null) {
            o !== null && o.memoizedState === null && a && ju(o), tl(a);
            continue;
          } else if (o !== null && o.memoizedState !== null) {
            a && Tg(e), tl(a);
            continue;
          }
        }
        o = e.child, (e.subtreeFlags & i) !== 0 && o !== null ? (o.return = e, Ae = o) : (a && Cg(e), tl(a));
      }
    }
    Je = null;
  }
  function tl(e) {
    for (; Ae !== null; ) {
      var i = Ae, a = e, o = i.alternate, h = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((h & 1024) !== 0 && o !== null) {
            a = void 0, h = o.memoizedProps, o = o.memoizedState;
            var f = i.stateNode;
            try {
              var b = gs(
                i.type,
                h
              );
              a = f.getSnapshotBeforeUpdate(
                b,
                o
              ), f.__reactInternalSnapshotBeforeUpdate = a;
            } catch (T) {
              Ht(i, i.return, T);
            }
          }
          break;
        case 3:
          if ((h & 1024) !== 0) {
            if (o = i.stateNode.containerInfo, a = o.nodeType, a === 9)
              Ch(o);
            else if (a === 1)
              switch (o.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Ch(o);
                  break;
                default:
                  o.textContent = "";
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
          a && o !== null && (a = si(
            o.memoizedProps,
            o.stateNode
          ), h = i.memoizedProps, h = ai(h.default, h.update), h !== "none" && aa(
            o,
            a,
            h,
            o.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((h & 1024) !== 0) throw Error(s(163));
      }
      if (o = i.sibling, o !== null) {
        o.return = i.return, Ae = o;
        break;
      }
      Ae = i.return;
    }
  }
  function Og(e, i, a) {
    var o = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Vn(e, a), o & 4 && fr(5, a);
        break;
      case 1:
        if (Vn(e, a), o & 4)
          if (e = a.stateNode, i === null)
            try {
              e.componentDidMount();
            } catch (b) {
              Ht(a, a.return, b);
            }
          else {
            var h = gs(
              a.type,
              i.memoizedProps
            );
            i = i.memoizedState;
            try {
              e.componentDidUpdate(
                h,
                i,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (b) {
              Ht(
                a,
                a.return,
                b
              );
            }
          }
        o & 64 && vg(a), o & 512 && zn(a, a.return);
        break;
      case 3:
        if (Vn(e, a), o & 64 && (e = a.updateQueue, e !== null)) {
          if (i = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                i = a.child.stateNode;
                break;
              case 1:
                i = a.child.stateNode;
            }
          try {
            op(e, i);
          } catch (b) {
            Ht(a, a.return, b);
          }
        }
        break;
      case 27:
        i === null && o & 4 && Eg(a);
      case 26:
      case 5:
        Vn(e, a), i === null && o & 4 && Iu(a), o & 512 && zn(a, a.return);
        break;
      case 12:
        Vn(e, a);
        break;
      case 31:
        Vn(e, a), o & 4 && kg(e, a);
        break;
      case 13:
        Vn(e, a), o & 4 && Bg(e, a), o & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = yb.bind(
          null,
          a
        ), Wb(e, a))));
        break;
      case 22:
        if (o = a.memoizedState !== null || be, !o) {
          var f = i !== null && i.memoizedState !== null || zt;
          i = be, h = zt, be = o, (zt = f) && !h ? (o = 2, (a.subtreeFlags & 8772) !== 0 && (o |= 1), Cn(
            e,
            a,
            o
          )) : Vn(e, a), be = i, zt = h;
        }
        break;
      case 30:
        Vn(e, a), o & 512 && zn(a, a.return);
        break;
      case 7:
        o & 512 && zn(a, a.return);
      default:
        Vn(e, a);
    }
  }
  function Ku(e, i) {
    for (e = e.child; e !== null; )
      Ng(e, i), e = e.sibling;
  }
  function Ng(e, i) {
    switch (e.tag) {
      case 5:
      case 26:
        try {
          var a = e.stateNode;
          if (i) {
            var o = a.style;
            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none";
          } else {
            var h = e.stateNode, f = e.memoizedProps.style, b = f != null && f.hasOwnProperty("display") ? f.display : null;
            h.style.display = b == null || typeof b == "boolean" ? "" : ("" + b).trim();
          }
        } catch (x) {
          Ht(e, e.return, x);
        }
        Qu(e, i);
        break;
      case 6:
        try {
          e.stateNode.nodeValue = i ? "" : e.memoizedProps, Pt = !0;
        } catch (x) {
          Ht(e, e.return, x);
        }
        break;
      case 18:
        try {
          var T = e.stateNode;
          i ? Tm(T, !0) : Tm(e.stateNode, !1);
        } catch (x) {
          Ht(e, e.return, x);
        }
        break;
      case 22:
      case 23:
        e.memoizedState === null && Ku(e, i);
        break;
      default:
        Ku(e, i);
    }
  }
  function Qu(e, i) {
    if (e.subtreeFlags & 67108864)
      for (e = e.child; e !== null; ) {
        t: {
          var a = e, o = i;
          switch (a.tag) {
            case 4:
              Ng(a, o);
              break t;
            case 22:
              a.memoizedState === null && Qu(a, o);
              break t;
            default:
              Qu(a, o);
          }
        }
        e = e.sibling;
      }
  }
  function Rg(e) {
    var i = e.alternate;
    i !== null && (e.alternate = null, Rg(i)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (i = e.stateNode, i !== null && so(i)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Wt = null, He = !1;
  function _n(e, i, a) {
    for (a = a.child; a !== null; )
      Lg(e, i, a), a = a.sibling;
  }
  function Lg(e, i, a) {
    if (Ke && typeof Ke.onCommitFiberUnmount == "function")
      try {
        Ke.onCommitFiberUnmount(Fa, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        zt || xe(a, i), _n(
          e,
          i,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && !zt && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        zt || xe(a, i), pr(a);
        var o = Wt, h = He;
        Gi(a.type) && (Wt = a.stateNode, He = !1), _n(
          e,
          i,
          a
        ), Im(
          a.stateNode,
          a.type,
          a.memoizedProps
        ), Wt = o, He = h;
        break;
      case 5:
        zt || xe(a, i), pr(a);
      case 6:
        if (a.tag === 6 && pr(a), o = Wt, h = He, Wt = null, _n(
          e,
          i,
          a
        ), Wt = o, He = h, Wt !== null)
          if (He)
            try {
              (Wt.nodeType === 9 ? Wt.body : Wt.nodeName === "HTML" ? Wt.ownerDocument.body : Wt).removeChild(a.stateNode), Pt = !0;
            } catch (f) {
              Ht(
                a,
                i,
                f
              );
            }
          else
            try {
              Wt.removeChild(a.stateNode), Pt = !0;
            } catch (f) {
              Ht(
                a,
                i,
                f
              );
            }
        break;
      case 18:
        Wt !== null && (He ? (e = Wt, Em(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), _a(e)) : Em(Wt, a.stateNode));
        break;
      case 4:
        o = Wt, h = He, Wt = a.stateNode.containerInfo, He = !0, _n(
          e,
          i,
          a
        ), Wt = o, He = h;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Bi(2, a, i), zt || Bi(4, a, i), _n(
          e,
          i,
          a
        );
        break;
      case 1:
        zt || (xe(a, i), o = a.stateNode, typeof o.componentWillUnmount == "function" && bg(
          a,
          i,
          o
        )), _n(
          e,
          i,
          a
        );
        break;
      case 21:
        _n(
          e,
          i,
          a
        );
        break;
      case 22:
        zt = (o = zt) || a.memoizedState !== null, _n(
          e,
          i,
          a
        ), zt = o;
        break;
      case 30:
        xe(a, i), _n(
          e,
          i,
          a
        );
        break;
      case 7:
        zt || xe(a, i), _n(
          e,
          i,
          a
        );
        break;
      default:
        _n(
          e,
          i,
          a
        );
    }
  }
  function kg(e, i) {
    if (i.memoizedState === null && (e = i.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        _a(e);
      } catch (a) {
        Ht(i, i.return, a);
      }
    }
  }
  function Bg(e, i) {
    if (i.memoizedState === null && (e = i.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        _a(e);
      } catch (a) {
        Ht(i, i.return, a);
      }
  }
  function rb(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var i = e.stateNode;
        return i === null && (i = e.stateNode = new Dg()), i;
      case 22:
        return e = e.stateNode, i = e._retryCache, i === null && (i = e._retryCache = new Dg()), i;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function el(e, i) {
    var a = rb(e);
    i.forEach(function(o) {
      if (!a.has(o)) {
        a.add(o);
        var h = vb.bind(null, e, o);
        o.then(h, h);
      }
    });
  }
  function ke(e, i, a) {
    var o = i.deletions;
    if (o !== null)
      for (var h = 0; h < o.length; h++) {
        var f = o[h], b = e, T = i, x = T;
        t: for (; x !== null; ) {
          switch (x.tag) {
            case 27:
              if (Gi(x.type)) {
                Wt = x.stateNode, He = !1;
                break t;
              }
              break;
            case 5:
              Wt = x.stateNode, He = !1;
              break t;
            case 3:
            case 4:
              Wt = x.stateNode.containerInfo, He = !0;
              break t;
          }
          x = x.return;
        }
        if (Wt === null) throw Error(s(160));
        Lg(b, T, f), Wt = null, He = !1, b = f.alternate, b !== null && (b.return = null), f.return = null;
      }
    if (i.subtreeFlags & 13886)
      for (i = i.child; i !== null; )
        Pg(i, e, a), i = i.sibling;
  }
  var wn = null;
  function Pg(e, i, a) {
    var o = e.alternate, h = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (h & 4 && (o = e.updateQueue, o = o !== null ? o.events : null, o !== null))
          for (var f = 0; f < o.length; f++) {
            var b = o[f];
            b.ref.impl = b.nextImpl;
          }
        ke(i, e, a), Be(e), h & 4 && (Bi(3, e, e.return), fr(3, e), Bi(5, e, e.return));
        break;
      case 1:
        ke(i, e, a), Be(e), h & 512 && (zt || o === null || xe(o, o.return)), h & 64 && be && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? i : a.concat(i))));
        break;
      case 26:
        if (f = wn, ke(i, e, a), Be(e), h & 512 && (zt || o === null || xe(o, o.return)), h & 4)
          if (h = o !== null ? o.memoizedState : null, a = e.memoizedState, o === null)
            if (a === null)
              if (e.stateNode === null)
                if (be)
                  e.stateNode = bm(
                    e.type,
                    e.memoizedProps,
                    i.containerInfo,
                    e
                  );
                else {
                  t: {
                    i = e.type, a = e.memoizedProps, h = f.ownerDocument || f;
                    e: switch (i) {
                      case "title":
                        o = h.getElementsByTagName("title")[0], (!o || o[Ha] || o[Te] || o.namespaceURI === "http://www.w3.org/2000/svg" || o.hasAttribute("itemprop")) && (o = h.createElement(i), h.head.insertBefore(
                          o,
                          h.querySelector("head > title")
                        )), Me(o, i, a), o[Te] = e, ye(o), i = o;
                        break t;
                      case "link":
                        if (f = jm(
                          "link",
                          "href",
                          h
                        ).get(i + (a.href || ""))) {
                          for (b = 0; b < f.length; b++)
                            if (o = f[b], o.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && o.getAttribute("rel") === (a.rel == null ? null : a.rel) && o.getAttribute("title") === (a.title == null ? null : a.title) && o.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                              f.splice(b, 1);
                              break e;
                            }
                        }
                        o = h.createElement(i), Me(o, i, a), h.head.appendChild(o);
                        break;
                      case "meta":
                        if (f = jm(
                          "meta",
                          "content",
                          h
                        ).get(i + (a.content || ""))) {
                          for (b = 0; b < f.length; b++)
                            if (o = f[b], o.getAttribute("content") === (a.content == null ? null : "" + a.content) && o.getAttribute("name") === (a.name == null ? null : a.name) && o.getAttribute("property") === (a.property == null ? null : a.property) && o.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && o.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                              f.splice(b, 1);
                              break e;
                            }
                        }
                        o = h.createElement(i), Me(o, i, a), h.head.appendChild(o);
                        break;
                      default:
                        throw Error(s(468, i));
                    }
                    o[Te] = e, ye(o), i = o;
                  }
                  e.stateNode = i;
                }
              else
                be || Lh(f, e.type, e.stateNode);
            else
              e.stateNode = Gm(
                f,
                a,
                e.memoizedProps
              );
          else
            h !== a ? (h === null ? (i = o.stateNode, i === null || zt || i.parentNode.removeChild(i)) : h.count--, a === null ? be || Lh(f, e.type, e.stateNode) : Gm(f, a, e.memoizedProps)) : a === null && e.stateNode !== null && Fu(
              e,
              e.memoizedProps,
              o.memoizedProps
            );
        break;
      case 27:
        ke(i, e, a), Be(e), h & 512 && (zt || o === null || xe(o, o.return)), o !== null && h & 4 && Fu(
          e,
          e.memoizedProps,
          o.memoizedProps
        );
        break;
      case 5:
        if (f = Gn, Gn = !1, ke(i, e, a), Gn = f, Be(e), h & 512 && (zt || o === null || xe(o, o.return)), e.flags & 32) {
          i = e.stateNode;
          try {
            Hs(i, ""), Pt = !0;
          } catch (z) {
            Ht(e, e.return, z);
          }
        }
        h & 4 && e.stateNode != null && (i = e.memoizedProps, Fu(
          e,
          i,
          o !== null ? o.memoizedProps : i
        )), h & 1024 && (Xu = !0);
        break;
      case 6:
        if (ke(i, e, a), Be(e), h & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          i = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = i, Pt = !0;
          } catch (z) {
            Ht(e, e.return, z);
          }
        }
        break;
      case 3:
        if (Pt = !1, ml = null, f = wn, wn = _r(i.containerInfo), ke(i, e, a), wn = f, Be(e), h & 4 && o !== null && o.memoizedState.isDehydrated)
          try {
            _a(i.containerInfo);
          } catch (z) {
            Ht(e, e.return, z);
          }
        Xu && (Xu = !1, Ig(e)), Pt = !1;
        break;
      case 4:
        h = Gn, Gn = be, o = nf(), f = wn, wn = _r(
          e.stateNode.containerInfo
        ), ke(i, e, a), Be(e), wn = f, Pt && gr && (Jo = !0), Pt = o, Gn = h;
        break;
      case 12:
        ke(i, e, a), Be(e);
        break;
      case 31:
        ke(i, e, a), Be(e), h & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, el(e, i)));
        break;
      case 13:
        ke(i, e, a), Be(e), e.child.flags & 8192 && e.memoizedState !== null != (o !== null && o.memoizedState !== null) && (sl = qe()), h & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, el(e, i)));
        break;
      case 22:
        f = e.memoizedState !== null, b = o !== null && o.memoizedState !== null;
        var T = be, x = zt, k = Gn;
        be = T || f, Gn = k || f, zt = x || b, ke(i, e, a), zt = x, Gn = k, be = T, Be(e), h & 8192 && (i = e.stateNode, i._visibility = f ? i._visibility & -2 : i._visibility | 1, !f || o === null || b || be || zt || (i = b || zt, a = be, o = zt, be = f || be, zt = i, Pi(e, 2), be = a, zt = o), !f && Gn || Ku(e, f)), h & 4 && (i = e.updateQueue, i !== null && (a = i.retryQueue, a !== null && (i.retryQueue = null, el(e, a))));
        break;
      case 19:
        ke(i, e, a), Be(e), h & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, el(e, i)));
        break;
      case 30:
        h & 512 && (zt || o === null || xe(o, o.return)), h = nf(), f = gr, b = (a & 335544064) === a, T = e.memoizedProps, gr = b && ai(
          T.default,
          T.update
        ) !== "none", ke(i, e, a), Be(e), b && o !== null && Pt && (e.flags |= 4), gr = f, Pt = h;
        break;
      case 21:
        break;
      case 7:
        h & 512 && (zt || o === null || xe(o, o.return)), o && o.stateNode !== null && (o.stateNode._fragmentFiber = e);
      default:
        ke(i, e, a), Be(e);
    }
  }
  function Be(e) {
    var i = e.flags;
    if (i & 2) {
      try {
        for (var a, o = e.return; o !== null; ) {
          if (Sg(o)) {
            a = o;
            break;
          }
          o = o.return;
        }
        o = null;
        for (var h = e.return; h !== null; ) {
          if (Pu(h)) {
            var f = h.stateNode;
            o === null ? o = [f] : o.push(f);
          }
          if (Bu(h)) break;
          h = h.return;
        }
        var b = o;
        if (a == null) throw Error(s(160));
        switch (a.tag) {
          case 27:
            var T = a.stateNode, x = zu(e);
            Qo(
              e,
              x,
              T,
              b
            );
            break;
          case 5:
            var k = a.stateNode;
            a.flags & 32 && (Hs(k, ""), a.flags &= -33);
            var z = zu(e);
            Qo(
              e,
              z,
              k,
              b
            );
            break;
          case 3:
          case 4:
            var V = a.stateNode.containerInfo, R = zu(e);
            Uu(
              e,
              R,
              V,
              b
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (F) {
        Ht(e, e.return, F);
      }
      e.flags &= -3;
    }
    i & 4096 && (e.flags &= -4097);
  }
  function Ig(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var i = e;
        Ig(i), i.tag === 5 && i.flags & 1024 && (i = i.stateNode, Ta = !0, i.reset(), Ta = !1), e = e.sibling;
      }
  }
  function ra(e, i) {
    if (i.subtreeFlags & 9270)
      for (i = i.child; i !== null; )
        Fg(i, e), i = i.sibling;
    else Mg(i);
  }
  function Fg(e, i) {
    var a = e.alternate;
    if (a === null) Hu(e, !1);
    else
      switch (e.tag) {
        case 3:
          if (qu = jn = !1, _g(), ra(i, e), !jn && !Jo) {
            if (e = Un, e !== null)
              for (var o = 0; o < e.length; o += 3) {
                a = e[o];
                var h = e[o + 1];
                wm(a, e[o + 2]), a = a.ownerDocument.documentElement, a !== null && a.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + h + ")"
                  }
                );
              }
            e = i.containerInfo, e = e.nodeType === 9 ? e.documentElement : e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "" && (e.style.viewTransitionName = "none", e.animate(
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
            )), qu = !0;
          }
          Un = null;
          break;
        case 5:
          ra(i, e);
          break;
        case 4:
          o = jn, jn = !1, ra(i, e), jn && (Jo = !0), jn = o;
          break;
        case 22:
          e.memoizedState === null && (a.memoizedState !== null ? Hu(e, !1) : ra(i, e));
          break;
        case 30:
          o = jn, h = _g(), jn = !1, ra(i, e), jn && (e.flags |= 4);
          var f = e.memoizedProps, b = e.stateNode;
          i = si(f, b), b = si(a.memoizedProps, b);
          var T = ai(f.default, f.update);
          T === "none" ? i = !1 : (f = a.memoizedState, a.memoizedState = null, a = e.child, Ue = 0, i = Yu(
            e,
            a,
            i,
            b,
            T,
            f,
            !0
          ), Ue !== (f === null ? 0 : f.length) && (e.flags |= 32)), (e.flags & 4) !== 0 && i ? (fa(
            e,
            e.memoizedProps.onUpdate
          ), Un = h) : h !== null && (h.push.apply(h, Un), Un = h), jn = (e.flags & 32) !== 0 ? !0 : o;
          break;
        default:
          ra(i, e);
      }
  }
  function Vn(e, i) {
    if (i.subtreeFlags & 8772)
      for (i = i.child; i !== null; )
        Og(e, i.alternate, i), i = i.sibling;
  }
  function Pi(e, i) {
    for (e = e.child; e !== null; ) {
      var a = e, o = i;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Bi(4, a, a.return), Pi(
            a,
            o
          );
          break;
        case 1:
          xe(a, a.return);
          var h = a.stateNode;
          typeof h.componentWillUnmount == "function" && bg(
            a,
            a.return,
            h
          ), Pi(
            a,
            o
          );
          break;
        case 27:
          (o & 2) !== 0 && Im(
            a.stateNode,
            a.type,
            a.memoizedProps
          );
        case 5:
          xe(a, a.return), a.tag !== 5 && a.tag !== 27 || pr(a), Pi(
            a,
            o
          );
          break;
        case 6:
          pr(a);
          break;
        case 26:
          xe(a, a.return), h = a.stateNode, a.memoizedState !== null || h === null || zt || h.parentNode.removeChild(h), Pi(
            a,
            o
          );
          break;
        case 22:
          a.memoizedState === null && Pi(
            a,
            o
          );
          break;
        case 30:
          xe(a, a.return), Pi(
            a,
            o
          );
          break;
        case 7:
          xe(a, a.return);
        default:
          Pi(
            a,
            o
          );
      }
      e = e.sibling;
    }
  }
  function Cn(e, i, a) {
    for (a = (i.subtreeFlags & 8772) !== 0 ? a : a & -2, i = i.child; i !== null; ) {
      var o = i.alternate, h = e, f = i, b = f.flags, T = (a & 1) !== 0;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Cn(
            h,
            f,
            a
          ), fr(4, f);
          break;
        case 1:
          if (Cn(
            h,
            f,
            a
          ), o = f, h = o.stateNode, typeof h.componentDidMount == "function")
            try {
              h.componentDidMount();
            } catch (z) {
              Ht(o, o.return, z);
            }
          if (o = f, h = o.updateQueue, h !== null) {
            var x = o.stateNode;
            try {
              var k = h.shared.hiddenCallbacks;
              if (k !== null)
                for (h.shared.hiddenCallbacks = null, h = 0; h < k.length; h++)
                  rp(k[h], x);
            } catch (z) {
              Ht(o, o.return, z);
            }
          }
          T && b & 64 && vg(f), zn(f, f.return);
          break;
        case 27:
          (a & 2) !== 0 && Eg(f);
        case 5:
          f.tag !== 5 && f.tag !== 27 || Ag(f), Cn(
            h,
            f,
            a
          ), T && o === null && b & 4 && Iu(f), zn(f, f.return);
          break;
        case 6:
          Ag(f);
          break;
        case 26:
          x = f.stateNode, f.memoizedState !== null || x === null || be || Lh(
            _r(x.ownerDocument),
            f.type,
            x
          ), Cn(
            h,
            f,
            a
          ), T && o === null && b & 4 && Iu(f), zn(f, f.return);
          break;
        case 12:
          Cn(
            h,
            f,
            a
          );
          break;
        case 31:
          Cn(
            h,
            f,
            a
          ), T && b & 4 && kg(h, f);
          break;
        case 13:
          Cn(
            h,
            f,
            a
          ), T && b & 4 && Bg(h, f);
          break;
        case 22:
          f.memoizedState === null && Cn(
            h,
            f,
            a
          ), zn(f, f.return);
          break;
        case 30:
          Cn(
            h,
            f,
            a
          ), zn(f, f.return);
          break;
        case 7:
          zn(f, f.return);
        default:
          Cn(
            h,
            f,
            a
          );
      }
      i = i.sibling;
    }
  }
  function Zu(e, i) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (e = i.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && tr(a));
  }
  function $u(e, i) {
    e = null, i.alternate !== null && (e = i.alternate.memoizedState.cache), i = i.memoizedState.cache, i !== e && (i.refCount++, e != null && tr(e));
  }
  function yn(e, i, a, o) {
    var h = (a & 335544064) === a;
    if (i.subtreeFlags & (h ? 10262 : 10256))
      for (i = i.child; i !== null; )
        zg(
          e,
          i,
          a,
          o
        ), i = i.sibling;
    else h && xg(i);
  }
  function zg(e, i, a, o) {
    var h = (a & 335544064) === a;
    h && i.alternate === null && i.return !== null && i.return.alternate !== null && Wo(i);
    var f = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        yn(
          e,
          i,
          a,
          o
        ), f & 2048 && fr(9, i);
        break;
      case 1:
        yn(
          e,
          i,
          a,
          o
        );
        break;
      case 3:
        yn(
          e,
          i,
          a,
          o
        ), h && qu && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), f & 2048 && (f = null, i.alternate !== null && (f = i.alternate.memoizedState.cache), i = i.memoizedState.cache, i !== f && (i.refCount++, f != null && tr(f)));
        break;
      case 12:
        if (f & 2048) {
          yn(
            e,
            i,
            a,
            o
          ), f = i.stateNode;
          try {
            var b = i.memoizedProps, T = b.id, x = b.onPostCommit;
            typeof x == "function" && x(
              T,
              i.alternate === null ? "mount" : "update",
              f.passiveEffectDuration,
              -0
            );
          } catch (k) {
            Ht(i, i.return, k);
          }
        } else
          yn(
            e,
            i,
            a,
            o
          );
        break;
      case 31:
        yn(
          e,
          i,
          a,
          o
        );
        break;
      case 13:
        yn(
          e,
          i,
          a,
          o
        );
        break;
      case 23:
        break;
      case 22:
        b = i.stateNode, T = i.alternate, i.memoizedState !== null ? (h && T !== null && T.memoizedState === null && Wo(T), b._visibility & 2 ? yn(
          e,
          i,
          a,
          o
        ) : mr(
          e,
          i
        )) : (h && T !== null && T.memoizedState !== null && Wo(i), b._visibility & 2 ? yn(
          e,
          i,
          a,
          o
        ) : (b._visibility |= 2, oa(
          e,
          i,
          a,
          o,
          (i.subtreeFlags & 10256) !== 0 || !1
        ))), f & 2048 && Zu(T, i);
        break;
      case 24:
        yn(
          e,
          i,
          a,
          o
        ), f & 2048 && $u(i.alternate, i);
        break;
      case 30:
        h && (f = i.alternate, f !== null && (Hn(f.child, !0), Hn(i.child, !0))), yn(
          e,
          i,
          a,
          o
        );
        break;
      default:
        yn(
          e,
          i,
          a,
          o
        );
    }
  }
  function oa(e, i, a, o, h) {
    for (h = h && ((i.subtreeFlags & 10256) !== 0 || !1), i = i.child; i !== null; ) {
      var f = e, b = i, T = a, x = o, k = b.flags;
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          oa(
            f,
            b,
            T,
            x,
            h
          ), fr(8, b);
          break;
        case 23:
          break;
        case 22:
          var z = b.stateNode;
          b.memoizedState !== null ? z._visibility & 2 ? oa(
            f,
            b,
            T,
            x,
            h
          ) : mr(
            f,
            b
          ) : (z._visibility |= 2, oa(
            f,
            b,
            T,
            x,
            h
          )), h && k & 2048 && Zu(
            b.alternate,
            b
          );
          break;
        case 24:
          oa(
            f,
            b,
            T,
            x,
            h
          ), h && k & 2048 && $u(b.alternate, b);
          break;
        default:
          oa(
            f,
            b,
            T,
            x,
            h
          );
      }
      i = i.sibling;
    }
  }
  function mr(e, i) {
    if (i.subtreeFlags & 10256)
      for (i = i.child; i !== null; ) {
        var a = e, o = i, h = o.flags;
        switch (o.tag) {
          case 22:
            mr(a, o), h & 2048 && Zu(
              o.alternate,
              o
            );
            break;
          case 24:
            mr(a, o), h & 2048 && $u(o.alternate, o);
            break;
          default:
            mr(a, o);
        }
        i = i.sibling;
      }
  }
  var ms = 8192;
  function ys(e, i, a) {
    if (e.subtreeFlags & ms)
      for (e = e.child; e !== null; )
        Ug(
          e,
          i,
          a
        ), e = e.sibling;
  }
  function Ug(e, i, a) {
    switch (e.tag) {
      case 26:
        ys(
          e,
          i,
          a
        ), e.flags & ms && (e.memoizedState !== null ? dA(
          a,
          wn,
          e.memoizedState,
          e.memoizedProps
        ) : (e = e.stateNode, (i & 335544128) === i && qm(a, e)));
        break;
      case 5:
        ys(
          e,
          i,
          a
        ), e.flags & ms && (e = e.stateNode, (i & 335544128) === i && qm(a, e));
        break;
      case 3:
      case 4:
        var o = wn;
        wn = _r(e.stateNode.containerInfo), ys(
          e,
          i,
          a
        ), wn = o;
        break;
      case 22:
        e.memoizedState === null && (o = e.alternate, o !== null && o.memoizedState !== null ? (o = ms, ms = 16777216, ys(
          e,
          i,
          a
        ), ms = o) : ys(
          e,
          i,
          a
        ));
        break;
      case 30:
        if ((e.flags & ms) !== 0 && (o = e.memoizedProps.name, o != null && o !== "auto")) {
          var h = e.stateNode;
          h.paired = null, Je === null && (Je = /* @__PURE__ */ new Map()), Je.set(o, h);
        }
        ys(
          e,
          i,
          a
        );
        break;
      default:
        ys(
          e,
          i,
          a
        );
    }
  }
  function Hg(e) {
    var i = e.alternate;
    if (i !== null && (e = i.child, e !== null)) {
      i.child = null;
      do
        i = e.sibling, e.sibling = null, e = i;
      while (e !== null);
    }
  }
  function yr(e) {
    var i = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (i !== null)
        for (var a = 0; a < i.length; a++) {
          var o = i[a];
          Ae = o, jg(
            o,
            e
          );
        }
      Hg(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Gg(e), e = e.sibling;
  }
  function Gg(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        yr(e), e.flags & 2048 && Bi(9, e, e.return);
        break;
      case 3:
        yr(e);
        break;
      case 12:
        yr(e);
        break;
      case 22:
        var i = e.stateNode;
        e.memoizedState !== null && i._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (i._visibility &= -3, nl(e)) : yr(e);
        break;
      default:
        yr(e);
    }
  }
  function nl(e) {
    var i = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (i !== null)
        for (var a = 0; a < i.length; a++) {
          var o = i[a];
          Ae = o, jg(
            o,
            e
          );
        }
      Hg(e);
    }
    for (e = e.child; e !== null; ) {
      switch (i = e, i.tag) {
        case 0:
        case 11:
        case 15:
          Bi(8, i, i.return), nl(i);
          break;
        case 22:
          a = i.stateNode, a._visibility & 2 && (a._visibility &= -3, nl(i));
          break;
        default:
          nl(i);
      }
      e = e.sibling;
    }
  }
  function jg(e, i) {
    for (; Ae !== null; ) {
      var a = Ae;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Bi(8, a, i);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var o = a.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          tr(a.memoizedState.cache);
      }
      if (o = a.child, o !== null) o.return = a, Ae = o;
      else
        t: for (a = e; Ae !== null; ) {
          o = Ae;
          var h = o.sibling, f = o.return;
          if (Rg(o), o === a) {
            Ae = null;
            break t;
          }
          if (h !== null) {
            h.return = f, Ae = h;
            break t;
          }
          Ae = f;
        }
    }
  }
  var ob = {
    getCacheForType: function(e) {
      var i = _e(le), a = i.data.get(e);
      return a === void 0 && (a = e(), i.data.set(e, a)), a;
    },
    cacheSignal: function() {
      return _e(le).controller.signal;
    }
  }, lb = typeof WeakMap == "function" ? WeakMap : Map, It = 0, Xt = null, Tt = null, Ct = 0, Ut = 0, tn = null, Ii = !1, la = !1, Wu = !1, pi = 0, ae = 0, Fi = 0, vs = 0, il = 0, en = 0, ca = 0, vr = null, Ge = null, Ju = !1, sl = 0, Vg = 0, al = 1 / 0, rl = null, zi = null, ee = 0, xn = null, bs = null, Yn = 0, th = 0, eh = null, Yg = null, ua = null, ha = null, da = null, br = 0, ol = null;
  function nn() {
    return (It & 2) !== 0 && Ct !== 0 ? Ct & -Ct : st.T !== null ? hh() : qd();
  }
  function Xg() {
    if (en === 0)
      if ((Ct & 536870912) === 0 || Et) {
        var e = to;
        to <<= 1, (to & 3932160) === 0 && (to = 262144), en = e;
      } else en = 536870912;
    return e = we.current, e !== null && (e.flags |= 32), en;
  }
  function fa(e, i) {
    if (i != null) {
      var a = e.stateNode, o = a.ref;
      o === null && (o = a.ref = Cm(
        si(e.memoizedProps, a)
      )), ha === null && (ha = []), ha.push(i.bind(null, o));
    }
  }
  function je(e, i, a) {
    (e === Xt && (Ut === 2 || Ut === 9) || e.cancelPendingCommit !== null) && (pa(e, 0), Ui(
      e,
      Ct,
      en,
      !1
    )), Ua(e, a), ((It & 2) === 0 || e !== Xt) && (e === Xt && ((It & 2) === 0 && (vs |= a), ae === 4 && Ui(
      e,
      Ct,
      en,
      !1
    )), Xn(e));
  }
  function qg(e, i, a) {
    if ((It & 6) !== 0) throw Error(s(327));
    var o = !a && (i & 127) === 0 && (i & e.expiredLanes) === 0 || za(e, i), h = o ? hb(e, i) : ih(e, i, !0), f = o;
    do {
      if (h === 0) {
        la && !o && Ui(e, i, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, f && !cb(a)) {
          h = ih(e, i, !1), f = !1;
          continue;
        }
        if (h === 2) {
          if (f = i, e.errorRecoveryDisabledLanes & f)
            var b = 0;
          else
            b = e.pendingLanes & -536870913, b = b !== 0 ? b : b & 536870912 ? 536870912 : 0;
          if (b !== 0) {
            i = b;
            t: {
              var T = e;
              h = vr;
              var x = T.current.memoizedState.isDehydrated;
              if (x && (pa(T, b).flags |= 256), b = ih(
                T,
                b,
                !1
              ), b !== 2 && b !== 6) {
                if (Wu && !x) {
                  T.errorRecoveryDisabledLanes |= f, vs |= f, h = 4;
                  break t;
                }
                f = Ge, Ge = h, f !== null && (Ge === null ? Ge = f : Ge.push.apply(
                  Ge,
                  f
                ));
              }
              h = b;
            }
            if (f = !1, h !== 2) continue;
          }
        }
        if (h === 1) {
          pa(e, 0), Ui(e, i, 0, !0);
          break;
        }
        t: {
          switch (o = e, f = h, f) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((i & 4194048) !== i && (i & 62914560) !== i)
                break;
            case 6:
              Ui(
                o,
                i,
                en,
                !Ii
              );
              break t;
            case 2:
              Ge = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((i & 62914560) === i && (h = sl + 300 - qe(), 10 < h)) {
            if (Ui(
              o,
              i,
              en,
              !Ii
            ), no(o, 0, !0) !== 0) break t;
            Yn = i, o.timeoutHandle = Eh(
              Kg.bind(
                null,
                o,
                a,
                Ge,
                rl,
                Ju,
                i,
                en,
                vs,
                ca,
                Ii,
                f,
                "Throttled",
                -0,
                0
              ),
              h
            );
            break t;
          }
          Kg(
            o,
            a,
            Ge,
            rl,
            Ju,
            i,
            en,
            vs,
            ca,
            Ii,
            f,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Xn(e);
  }
  function Kg(e, i, a, o, h, f, b, T, x, k, z, V, R, F) {
    e.timeoutHandle = -1;
    var Q = i.subtreeFlags, it = (f & 335544064) === f;
    if (V = null, (it || Q & 8192 || (Q & 16785408) === 16785408) && (V = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Pn
    }, Je = null, Ug(
      i,
      f,
      V
    ), it && (Q = V, it = e.containerInfo, it = (it.nodeType === 9 ? it : it.ownerDocument).__reactViewTransition, it != null && (Q.count++, Q.waitingForViewTransition = !0, Q = xr.bind(Q), it.finished.then(Q, Q))), Q = (f & 62914560) === f ? sl - qe() : (f & 4194048) === f ? Vg - qe() : 0, Q = fA(
      V,
      Q
    ), Q !== null)) {
      Yn = f, e.cancelPendingCommit = Q(
        nm.bind(
          null,
          e,
          i,
          f,
          a,
          o,
          h,
          b,
          T,
          x,
          k,
          z,
          V,
          null,
          R,
          F
        )
      ), Ui(e, f, b, !k);
      return;
    }
    nm(
      e,
      i,
      f,
      a,
      o,
      h,
      b,
      T,
      x,
      k,
      z,
      V
    );
  }
  function cb(e) {
    for (var i = e; ; ) {
      var a = i.tag;
      if ((a === 0 || a === 11 || a === 15) && i.flags & 16384 && (a = i.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var o = 0; o < a.length; o++) {
          var h = a[o], f = h.getSnapshot;
          h = h.value;
          try {
            if (!$e(f(), h)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = i.child, i.subtreeFlags & 16384 && a !== null)
        a.return = i, i = a;
      else {
        if (i === e) break;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e) return !0;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    return !0;
  }
  function Ui(e, i, a, o) {
    i = Gd(e, i), i &= ~il, i &= ~vs, e.suspendedLanes |= i, e.pingedLanes &= ~i, o && (e.warmLanes |= i), o = e.expirationTimes;
    for (var h = i; 0 < h; ) {
      var f = 31 - Qe(h), b = 1 << f;
      o[f] = -1, h &= ~b;
    }
    a !== 0 && Vd(e, a, i);
  }
  function ll() {
    return (It & 6) === 0 ? (Ar(0), !1) : !0;
  }
  function nh() {
    if (Tt !== null) {
      if (Ut === 0)
        var e = Tt.return;
      else
        e = Tt, li = rs = null, uu(e), ta = null, ir = 0, e = Tt;
      for (; e !== null; )
        yg(e.alternate, e), e = e.return;
      Tt = null;
    }
  }
  function pa(e, i) {
    var a = e.timeoutHandle;
    return a !== -1 && (e.timeoutHandle = -1, Lb(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Yn = 0, nh(), Xt = e, Tt = a = ri(e.current, null), Ct = i, Ut = 0, tn = null, Ii = !1, la = za(e, i), Wu = !1, ca = en = il = vs = Fi = ae = 0, Ge = vr = null, Ju = !1, pi = Gd(e, i), mo(), a;
  }
  function Qg(e, i) {
    bt = null, st.H = Ho, i === Js || i === xo ? (i = np(), Ut = 3) : i === $c ? (i = np(), Ut = 4) : Ut = i === wu ? 8 : i !== null && typeof i == "object" && typeof i.then == "function" ? 6 : 1, tn = i, Tt === null && (ae = 1, Go(
      e,
      fn(i, e.current)
    ));
  }
  function Zg() {
    var e = we.current;
    return e === null ? !0 : (Ct & 4194048) === Ct ? Ne === null : (Ct & 62914560) === Ct || (Ct & 536870912) !== 0 ? e === Ne : !1;
  }
  function $g() {
    var e = st.H;
    return st.H = Ho, e === null ? Ho : e;
  }
  function Wg() {
    var e = st.A;
    return st.A = ob, e;
  }
  function cl() {
    ae = 4, Ii || (Ct & 4194048) !== Ct && we.current !== null || (la = !0), (Fi & 134217727) === 0 && (vs & 134217727) === 0 || Xt === null || Ui(
      Xt,
      Ct,
      en,
      !1
    );
  }
  function ih(e, i, a) {
    var o = It;
    It |= 2;
    var h = $g(), f = Wg();
    (Xt !== e || Ct !== i) && (rl = null, pa(e, i)), i = !1;
    var b = ae;
    t: do
      try {
        if (Ut !== 0 && Tt !== null) {
          var T = Tt, x = tn;
          switch (Ut) {
            case 8:
              nh(), b = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              we.current === null && (i = !0);
              var k = Ut;
              if (Ut = 0, tn = null, ga(e, T, x, k), a && la) {
                b = 0;
                break t;
              }
              break;
            default:
              k = Ut, Ut = 0, tn = null, ga(e, T, x, k);
          }
        }
        ub(), b = ae;
        break;
      } catch (z) {
        Qg(e, z);
      }
    while (!0);
    return i && e.shellSuspendCounter++, li = rs = null, It = o, st.H = h, st.A = f, Tt === null && (Xt = null, Ct = 0, mo()), b;
  }
  function ub() {
    for (; Tt !== null; ) Jg(Tt);
  }
  function hb(e, i) {
    var a = It;
    It |= 2;
    var o = $g(), h = Wg();
    Xt !== e || Ct !== i ? (rl = null, al = qe() + 500, pa(e, i)) : la = za(
      e,
      i
    );
    t: do
      try {
        if (Ut !== 0 && Tt !== null) {
          i = Tt;
          var f = tn;
          e: switch (Ut) {
            case 1:
              Ut = 0, tn = null, ga(e, i, f, 1);
              break;
            case 2:
            case 9:
              if (tp(f)) {
                Ut = 0, tn = null, tm(i);
                break;
              }
              i = function() {
                Ut !== 2 && Ut !== 9 || Xt !== e || (Ut = 7), Xn(e);
              }, f.then(i, i);
              break t;
            case 3:
              Ut = 7;
              break t;
            case 4:
              Ut = 5;
              break t;
            case 7:
              tp(f) ? (Ut = 0, tn = null, tm(i)) : (Ut = 0, tn = null, ga(e, i, f, 7));
              break;
            case 5:
              var b = null;
              switch (Tt.tag) {
                case 26:
                  b = Tt.memoizedState;
                case 5:
                case 27:
                  var T = Tt;
                  if (b ? Ym(b) : T.stateNode.complete) {
                    Ut = 0, tn = null;
                    var x = T.sibling;
                    if (x !== null) Tt = x;
                    else {
                      var k = T.return;
                      k !== null ? (Tt = k, ul(k)) : Tt = null;
                    }
                    break e;
                  }
              }
              Ut = 0, tn = null, ga(e, i, f, 5);
              break;
            case 6:
              Ut = 0, tn = null, ga(e, i, f, 6);
              break;
            case 8:
              nh(), ae = 6;
              break t;
            default:
              throw Error(s(462));
          }
        }
        db();
        break;
      } catch (z) {
        Qg(e, z);
      }
    while (!0);
    return li = rs = null, st.H = o, st.A = h, It = a, Tt !== null ? 0 : (Xt = null, Ct = 0, mo(), ae);
  }
  function db() {
    for (; Tt !== null && !D0(); )
      Jg(Tt);
  }
  function Jg(e) {
    var i = gg(e.alternate, e, pi);
    e.memoizedProps = e.pendingProps, i === null ? ul(e) : Tt = i;
  }
  function tm(e) {
    var i = e, a = i.alternate;
    switch (i.tag) {
      case 15:
      case 0:
        i = lg(
          a,
          i,
          i.pendingProps,
          i.type,
          void 0,
          Ct
        );
        break;
      case 11:
        i = lg(
          a,
          i,
          i.pendingProps,
          i.type.render,
          i.ref,
          Ct
        );
        break;
      case 5:
        uu(i);
        var o = i;
        o === ve && (Et ? (Eo(o), o.tag === 5 && o.stateNode != null && (Kt = o.stateNode)) : (Eo(o), Et = !0));
      default:
        yg(a, i), i = Tt = jf(i, pi), i = gg(a, i, pi);
    }
    e.memoizedProps = e.pendingProps, i === null ? ul(e) : Tt = i;
  }
  function ga(e, i, a, o) {
    li = rs = null, uu(i), ta = null, ir = 0;
    var h = i.return;
    try {
      if (Jv(
        e,
        h,
        i,
        a,
        Ct
      )) {
        ae = 1, Go(
          e,
          fn(a, e.current)
        ), Tt = null;
        return;
      }
    } catch (f) {
      if (h !== null) throw Tt = h, f;
      ae = 1, Go(
        e,
        fn(a, e.current)
      ), Tt = null;
      return;
    }
    i.flags & 32768 ? (Et || o === 1 ? e = !0 : la || (Ct & 536870912) !== 0 ? e = !1 : (Ii = e = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = we.current, o !== null && o.tag === 13 && (o.flags |= 16384))), em(i, e)) : ul(i);
  }
  function ul(e) {
    var i = e;
    do {
      if ((i.flags & 32768) !== 0) {
        em(
          i,
          Ii
        );
        return;
      }
      e = i.return;
      var a = ib(
        i.alternate,
        i,
        pi
      );
      if (a !== null) {
        Tt = a;
        return;
      }
      if (i = i.sibling, i !== null) {
        Tt = i;
        return;
      }
      Tt = i = e;
    } while (i !== null);
    ae === 0 && (ae = 5);
  }
  function em(e, i) {
    do {
      var a = sb(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, Tt = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !i && (e = e.sibling, e !== null)) {
        Tt = e;
        return;
      }
      Tt = e = a;
    } while (e !== null);
    ae = 6, Tt = null;
  }
  function nm(e, i, a, o, h, f, b, T, x, k, z, V) {
    e.cancelPendingCommit = null;
    do
      hl();
    while (ee !== 0);
    if ((It & 6) !== 0) throw Error(s(327));
    if (i !== null) {
      if (i === e.current) throw Error(s(177));
      e === Xt && (Tt = Xt = null, Ct = 0), bs = i, xn = e, Yn = a, eh = h, Yg = o, fb(
        e,
        i,
        a,
        b,
        T,
        x,
        V
      );
    }
  }
  function fb(e, i, a, o, h, f, b) {
    var T = i.lanes | i.childLanes;
    if (th = T, T |= Fc, z0(
      e,
      a,
      T,
      o,
      h,
      f
    ), ha = null, (a & 335544064) === a ? (da = Hv(e), o = 10262) : (da = null, o = 10256), (i.subtreeFlags & o) !== 0 || (i.flags & o) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, bb(Wr, function() {
      return oh(), null;
    })) : (e.callbackNode = null, e.callbackPriority = 0), Zo = !1, o = (i.flags & 13878) !== 0, (i.subtreeFlags & 13878) !== 0 || o) {
      o = st.T, st.T = null, h = ut.p, ut.p = 2, f = It, It |= 4;
      try {
        ab(e, i, a);
      } finally {
        It = f, ut.p = h, st.T = o;
      }
    }
    ee = 1, Zo ? ua = zb(
      b,
      e.containerInfo,
      da,
      sh,
      ah,
      gb,
      rh,
      oh,
      pb
    ) : (sh(), ah(), rh());
  }
  function pb(e) {
    if (ee !== 0) {
      var i = xn.onRecoverableError;
      i(e, { componentStack: null });
    }
  }
  function gb() {
    ee === 3 && (ee = 0, Fg(bs, xn), ee = 4);
  }
  function sh() {
    if (ee === 1) {
      ee = 0;
      var e = xn, i = bs, a = Yn, o = (i.flags & 13878) !== 0;
      if ((i.subtreeFlags & 13878) !== 0 || o) {
        o = st.T, st.T = null;
        var h = ut.p;
        ut.p = 2;
        var f = It;
        It |= 4;
        try {
          gr = Jo = !1, Pg(i, e, a), a = bh;
          var b = Lf(e.containerInfo), T = a.focusedElem, x = a.selectionRange;
          if (b !== T && T && T.ownerDocument && Rf(
            T.ownerDocument.documentElement,
            T
          )) {
            if (x !== null && Lc(T)) {
              var k = x.start, z = x.end;
              if (z === void 0 && (z = k), "selectionStart" in T)
                T.selectionStart = k, T.selectionEnd = Math.min(
                  z,
                  T.value.length
                );
              else {
                var V = T.ownerDocument || document, R = V && V.defaultView || window;
                if (R.getSelection) {
                  var F = R.getSelection(), Q = T.textContent.length, it = Math.min(x.start, Q), At = x.end === void 0 ? it : Math.min(x.end, Q);
                  !F.extend && it > At && (b = At, At = it, it = b);
                  var L = Nf(
                    T,
                    it
                  ), D = Nf(
                    T,
                    At
                  );
                  if (L && D && (F.rangeCount !== 1 || F.anchorNode !== L.node || F.anchorOffset !== L.offset || F.focusNode !== D.node || F.focusOffset !== D.offset)) {
                    var I = V.createRange();
                    I.setStart(L.node, L.offset), F.removeAllRanges(), it > At ? (F.addRange(I), F.extend(D.node, D.offset)) : (I.setEnd(D.node, D.offset), F.addRange(I));
                  }
                }
              }
            }
            for (V = [], F = T; F = F.parentNode; )
              F.nodeType === 1 && V.push({
                element: F,
                left: F.scrollLeft,
                top: F.scrollTop
              });
            for (typeof T.focus == "function" && T.focus(), T = 0; T < V.length; T++) {
              var G = V[T];
              G.element.scrollLeft = G.left, G.element.scrollTop = G.top;
            }
          }
          Ta = !!vh, bh = vh = null;
        } finally {
          It = f, ut.p = h, st.T = o;
        }
      }
      e.current = i, ee = 2;
    }
  }
  function ah() {
    if (ee === 2) {
      ee = 0;
      var e = xn, i = bs, a = (i.flags & 8772) !== 0;
      if ((i.subtreeFlags & 8772) !== 0 || a) {
        a = st.T, st.T = null;
        var o = ut.p;
        ut.p = 2;
        var h = It;
        It |= 4;
        try {
          Og(e, i.alternate, i);
        } finally {
          It = h, ut.p = o, st.T = a;
        }
      }
      ee = 3;
    }
  }
  function rh() {
    if (ee === 4 || ee === 3) {
      ee = 0;
      var e = ua;
      ua = null, O0();
      var i = xn, a = bs, o = Yn, h = Yg, f = (o & 335544064) === o ? 10262 : 10256;
      if ((a.subtreeFlags & f) !== 0 || (a.flags & f) !== 0 ? ee = 5 : (ee = 0, bs = xn = null, im(i, i.pendingLanes)), f = i.pendingLanes, f === 0 && (zi = null), gc(o), a = a.stateNode, Ke && typeof Ke.onCommitFiberRoot == "function")
        try {
          Ke.onCommitFiberRoot(
            Fa,
            a,
            void 0,
            (a.current.flags & 128) === 128
          );
        } catch {
        }
      if (h !== null) {
        a = st.T, f = ut.p, ut.p = 2, st.T = null;
        try {
          for (var b = i.onRecoverableError, T = 0; T < h.length; T++) {
            var x = h[T];
            b(x.value, {
              componentStack: x.stack
            });
          }
        } finally {
          st.T = a, ut.p = f;
        }
      }
      if (h = ha, b = da, da = null, h !== null && (ha = null, b === null && (b = []), e !== null))
        for (x = 0; x < h.length; x++)
          a = (0, h[x])(
            b
          ), a !== void 0 && e.finished.finally(a);
      (Yn & 3) !== 0 && hl(), Xn(i), f = i.pendingLanes, (o & 261930) !== 0 && (f & 42) !== 0 ? i === ol ? br++ : (br = 0, ol = i) : (br = 0, ol = null), Ar(0);
    }
  }
  function im(e, i) {
    (e.pooledCacheLanes &= i) === 0 && (i = e.pooledCache, i != null && (e.pooledCache = null, tr(i)));
  }
  function hl() {
    return ua !== null && (ua.skipTransition(), ua = null), sh(), ah(), rh(), oh();
  }
  function oh() {
    if (ee !== 5) return !1;
    var e = xn, i = th;
    th = 0;
    var a = gc(Yn), o = st.T, h = ut.p;
    try {
      ut.p = 32 > a ? 32 : a, st.T = null, a = eh, eh = null;
      var f = xn, b = Yn;
      if (ee = 0, bs = xn = null, Yn = 0, (It & 6) !== 0) throw Error(s(331));
      var T = It;
      if (It |= 4, Gg(f.current), zg(
        f,
        f.current,
        b,
        a
      ), It = T, Ar(0, !1), Ke && typeof Ke.onPostCommitFiberRoot == "function")
        try {
          Ke.onPostCommitFiberRoot(Fa, f);
        } catch {
        }
      return !0;
    } finally {
      ut.p = h, st.T = o, im(e, i);
    }
  }
  function sm(e, i, a) {
    i = fn(a, i), i = _u(e.stateNode, i, 2), e = Ni(e, i, 2), e !== null && (Ua(e, 2), Xn(e));
  }
  function Ht(e, i, a) {
    if (e.tag === 3)
      sm(e, e, a);
    else
      for (; i !== null; ) {
        if (i.tag === 3) {
          sm(
            i,
            e,
            a
          );
          break;
        } else if (i.tag === 1) {
          var o = i.stateNode;
          if (typeof i.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (zi === null || !zi.has(o))) {
            e = fn(a, e), a = tg(2), o = Ni(i, a, 2), o !== null && (eg(
              a,
              o,
              i,
              e
            ), Ua(o, 2), Xn(o));
            break;
          }
        }
        i = i.return;
      }
  }
  function lh(e, i, a) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new lb();
      var h = /* @__PURE__ */ new Set();
      o.set(i, h);
    } else
      h = o.get(i), h === void 0 && (h = /* @__PURE__ */ new Set(), o.set(i, h));
    h.has(a) || (Wu = !0, h.add(a), e = mb.bind(null, e, i, a), i.then(e, e));
  }
  function mb(e, i, a) {
    var o = e.pingCache;
    o !== null && o.delete(i), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Xt === e && (Ct & a) === a && ((ae === 4 || ae === 3 && (Ct & 62914560) === Ct && 300 > qe() - sl) && (It & 2) === 0 ? pa(e, 0) : il |= a, ca === Ct && (ca = 0)), Xn(e);
  }
  function am(e, i) {
    i === 0 && (i = jd()), e = is(e, i), e !== null && (Ua(e, i), Xn(e));
  }
  function yb(e) {
    var i = e.memoizedState, a = 0;
    i !== null && (a = i.retryLane), am(e, a);
  }
  function vb(e, i) {
    var a = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var o = e.stateNode, h = e.memoizedState;
        h !== null && (a = h.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      case 22:
        o = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    o !== null && o.delete(i), am(e, a);
  }
  function bb(e, i) {
    return hc(e, i);
  }
  var ma = null, ya = null, ch = !1, dl = !1, uh = !1, Hi = 0;
  function Xn(e) {
    e !== ya && e.next === null && (ya === null ? ma = ya = e : ya = ya.next = e), dl = !0, ch || (ch = !0, Sb());
  }
  function Ar(e, i) {
    if (!uh && dl) {
      uh = !0;
      do
        for (var a = !1, o = ma; o !== null; ) {
          if (e !== 0) {
            var h = o.pendingLanes;
            if (h === 0) var f = 0;
            else {
              var b = o.suspendedLanes, T = o.pingedLanes;
              f = (1 << 31 - Qe(42 | e) + 1) - 1, f &= h & ~(b & ~T), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
            }
            f !== 0 && (a = !0, cm(o, f));
          } else
            f = Ct, f = no(
              o,
              o === Xt ? f : 0,
              o.cancelPendingCommit !== null || o.timeoutHandle !== -1
            ), (f & 3) === 0 || za(o, f) || (a = !0, cm(o, f));
          o = o.next;
        }
      while (a);
      uh = !1;
    }
  }
  function Ab() {
    rm();
  }
  function rm() {
    dl = ch = !1;
    var e = 0;
    Hi !== 0 && Rb() && (e = Hi);
    for (var i = qe(), a = null, o = ma; o !== null; ) {
      var h = o.next, f = om(o, i);
      f === 0 ? (o.next = null, a === null ? ma = h : a.next = h, h === null && (ya = a)) : (a = o, (e !== 0 || (f & 3) !== 0) && (dl = !0)), o = h;
    }
    ee !== 0 && ee !== 5 || Ar(e), Hi !== 0 && (Hi = 0);
  }
  function om(e, i) {
    for (var a = e.suspendedLanes, o = e.pingedLanes, h = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
      var b = 31 - Qe(f), T = 1 << b, x = h[b];
      x === -1 ? ((T & a) === 0 || (T & o) !== 0) && (h[b] = F0(T, i)) : x <= i && (e.expiredLanes |= T), f &= ~T;
    }
    if (i = Xt, a = Ct, a = no(
      e,
      e === i ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o = e.callbackNode, a === 0 || e === i && (Ut === 2 || Ut === 9) || e.cancelPendingCommit !== null)
      return o !== null && o !== null && dc(o), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || za(e, a)) {
      if (i = a & -a, i === e.callbackPriority) return i;
      switch (o !== null && dc(o), gc(a)) {
        case 2:
        case 8:
          a = Ud;
          break;
        case 32:
          a = Wr;
          break;
        case 268435456:
          a = Hd;
          break;
        default:
          a = Wr;
      }
      return o = lm.bind(null, e), a = hc(a, o), e.callbackPriority = i, e.callbackNode = a, i;
    }
    return o !== null && o !== null && dc(o), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function lm(e, i) {
    if (ee !== 0 && ee !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (hl() && e.callbackNode !== a)
      return null;
    var o = Ct;
    return o = no(
      e,
      e === Xt ? o : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o === 0 ? null : (qg(e, o, i), om(e, qe()), e.callbackNode != null && e.callbackNode === a ? lm.bind(null, e) : null);
  }
  function cm(e, i) {
    if (hl()) return null;
    qg(e, i, !0);
  }
  function Sb() {
    kb(function() {
      (It & 6) !== 0 ? hc(
        zd,
        Ab
      ) : rm();
    });
  }
  function hh() {
    if (Hi === 0) {
      var e = cs;
      e === 0 && (e = Jr, Jr <<= 1, (Jr & 261888) === 0 && (Jr = 256)), Hi = e;
    }
    return Hi;
  }
  function um(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : oo(e);
  }
  function Eb(e, i, a, o, h) {
    if (i === "submit" && a && a.stateNode === h) {
      var f = um(
        (h[Fe] || null).action
      ), b = o.submitter;
      b && (i = (i = b[Fe] || null) ? um(i.formAction) : b.getAttribute("formAction"), i !== null && (f = i, b = null));
      var T = new ho(
        "action",
        "action",
        null,
        o,
        h
      );
      e.push({
        event: T,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (o.defaultPrevented) {
                if (Hi !== 0) {
                  var x = new FormData(h, b);
                  bu(
                    a,
                    {
                      pending: !0,
                      data: x,
                      method: h.method,
                      action: f
                    },
                    null,
                    x
                  );
                }
              } else
                typeof f == "function" && (T.preventDefault(), x = new FormData(h, b), bu(
                  a,
                  {
                    pending: !0,
                    data: x,
                    method: h.method,
                    action: f
                  },
                  f,
                  x
                ));
            },
            currentTarget: h
          }
        ]
      });
    }
  }
  for (var dh = 0; dh < Ic.length; dh++) {
    var fh = Ic[dh], Tb = fh.toLowerCase(), _b = fh[0].toUpperCase() + fh.slice(1);
    Tn(
      Tb,
      "on" + _b
    );
  }
  Tn(Pf, "onAnimationEnd"), Tn(If, "onAnimationIteration"), Tn(Ff, "onAnimationStart"), Tn("dblclick", "onDoubleClick"), Tn("focusin", "onFocus"), Tn("focusout", "onBlur"), Tn(Lv, "onTransitionRun"), Tn(kv, "onTransitionStart"), Tn(Bv, "onTransitionCancel"), Tn(zf, "onTransitionEnd"), zs("onMouseEnter", ["mouseout", "mouseover"]), zs("onMouseLeave", ["mouseout", "mouseover"]), zs("onPointerEnter", ["pointerout", "pointerover"]), zs("onPointerLeave", ["pointerout", "pointerover"]), ts(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ts(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ts("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ts(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ts(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ts(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Sr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), wb = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Sr)
  );
  function hm(e, i) {
    i = (i & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var o = e[a], h = o.event;
      o = o.listeners;
      t: {
        var f = void 0;
        if (i)
          for (var b = o.length - 1; 0 <= b; b--) {
            var T = o[b], x = T.instance, k = T.currentTarget;
            if (T = T.listener, x !== f && h.isPropagationStopped())
              break t;
            f = T, h.currentTarget = k;
            try {
              f(h);
            } catch (z) {
              go(z);
            }
            h.currentTarget = null, f = x;
          }
        else
          for (b = 0; b < o.length; b++) {
            if (T = o[b], x = T.instance, k = T.currentTarget, T = T.listener, x !== f && h.isPropagationStopped())
              break t;
            f = T, h.currentTarget = k;
            try {
              f(h);
            } catch (z) {
              go(z);
            }
            h.currentTarget = null, f = x;
          }
      }
    }
  }
  function _t(e, i) {
    var a = i[Qd];
    a === void 0 && (a = i[Qd] = /* @__PURE__ */ new Set());
    var o = e + "__bubble";
    a.has(o) || (dm(i, e, 2, !1), a.add(o));
  }
  function ph(e, i, a) {
    var o = 0;
    i && (o |= 4), dm(
      a,
      e,
      o,
      i
    );
  }
  var fl = "_reactListening" + Math.random().toString(36).slice(2);
  function gh(e) {
    if (!e[fl]) {
      e[fl] = !0, Wd.forEach(function(a) {
        a !== "selectionchange" && (wb.has(a) || ph(a, !1, e), ph(a, !0, e));
      });
      var i = e.nodeType === 9 ? e : e.ownerDocument;
      i === null || i[fl] || (i[fl] = !0, ph("selectionchange", !1, i));
    }
  }
  function dm(e, i, a, o) {
    switch (ey(i)) {
      case 2:
        var h = yA;
        break;
      case 8:
        h = vA;
        break;
      default:
        h = Bh;
    }
    a = h.bind(
      null,
      i,
      a,
      e
    ), h = void 0, !Tc || i !== "touchstart" && i !== "touchmove" && i !== "wheel" || (h = !0), o ? h !== void 0 ? e.addEventListener(i, a, {
      capture: !0,
      passive: h
    }) : e.addEventListener(i, a, !0) : h !== void 0 ? e.addEventListener(i, a, {
      passive: h
    }) : e.addEventListener(i, a, !1);
  }
  function mh(e, i, a, o, h) {
    var f = o;
    if ((i & 1) === 0 && (i & 2) === 0 && o !== null)
      t: for (; ; ) {
        if (o === null) return;
        var b = o.tag;
        if (b === 3 || b === 4) {
          var T = o.stateNode.containerInfo;
          if (T === h) break;
          if (b === 4)
            for (b = o.return; b !== null; ) {
              var x = b.tag;
              if ((x === 3 || x === 4) && b.stateNode.containerInfo === h)
                return;
              b = b.return;
            }
          for (; T !== null; ) {
            if (b = Ji(T), b === null) return;
            if (x = b.tag, x === 5 || x === 6 || x === 26 || x === 27) {
              o = f = b;
              continue t;
            }
            T = T.parentNode;
          }
        }
        o = o.return;
      }
    df(function() {
      var k = f, z = Sc(a), V = [];
      t: {
        var R = Uf.get(e);
        if (R !== void 0) {
          var F = ho, Q = e;
          switch (e) {
            case "keypress":
              if (co(a) === 0) break t;
            case "keydown":
            case "keyup":
              F = cv;
              break;
            case "focusin":
              Q = "focus", F = xc;
              break;
            case "focusout":
              Q = "blur", F = xc;
              break;
            case "beforeblur":
            case "afterblur":
              F = xc;
              break;
            case "click":
              if (a.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              F = gf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              F = $0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              F = pv;
              break;
            case Pf:
            case If:
            case Ff:
              F = tv;
              break;
            case zf:
              F = mv;
              break;
            case "scroll":
            case "scrollend":
              F = Q0;
              break;
            case "wheel":
              F = vv;
              break;
            case "copy":
            case "cut":
            case "paste":
              F = nv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              F = yf;
              break;
            case "submit":
              F = dv;
              break;
            case "toggle":
            case "beforetoggle":
              F = Av;
          }
          var it = (i & 4) !== 0, At = !it && (e === "scroll" || e === "scrollend"), L = it ? R !== null ? R + "Capture" : null : R;
          it = [];
          for (var D = k, I; D !== null; ) {
            var G = D;
            if (I = G.stateNode, G = G.tag, G !== 5 && G !== 26 && G !== 27 || I === null || L === null || (G = ja(D, L), G != null && it.push(
              Er(D, G, I)
            )), At) break;
            D = D.return;
          }
          0 < it.length && (R = new F(
            R,
            Q,
            null,
            a,
            z
          ), V.push({ event: R, listeners: it }));
        }
      }
      if ((i & 7) === 0) {
        t: {
          if (F = e === "mouseover" || e === "pointerover", R = e === "mouseout" || e === "pointerout", F && a !== Ac && (Q = a.relatedTarget || a.fromElement) && (Ji(Q) || Q[Ps]))
            break t;
          (R || F) && (Q = z.window === z ? z : (F = z.ownerDocument) ? F.defaultView || F.parentWindow : window, R ? (F = a.relatedTarget || a.toElement, R = k, F = F ? Ji(F) : null, F !== null && (At = l(F), it = F.tag, F !== At || it !== 5 && it !== 27 && it !== 6) && (F = null)) : (R = null, F = k), R !== F && (it = gf, G = "onMouseLeave", L = "onMouseEnter", D = "mouse", (e === "pointerout" || e === "pointerover") && (it = yf, G = "onPointerLeave", L = "onPointerEnter", D = "pointer"), At = R == null ? Q : Ga(R), I = F == null ? Q : Ga(F), Q = new it(
            G,
            D + "leave",
            R,
            a,
            z
          ), Q.target = At, Q.relatedTarget = I, G = null, Ji(z) === k && (it = new it(
            L,
            D + "enter",
            F,
            a,
            z
          ), it.target = I, it.relatedTarget = At, G = it), At = G, it = R && F ? P(
            R,
            F,
            Cb
          ) : null, R !== null && fm(
            V,
            Q,
            R,
            it,
            !1
          ), F !== null && At !== null && fm(
            V,
            At,
            F,
            it,
            !0
          )));
        }
        t: {
          if (R = k ? Ga(k) : window, F = R.nodeName && R.nodeName.toLowerCase(), F === "select" || F === "input" && R.type === "file")
            var et = wf;
          else if (Tf(R))
            if (Cf)
              et = Ov;
            else {
              et = Mv;
              var xt = xv;
            }
          else
            F = R.nodeName, !F || F.toLowerCase() !== "input" || R.type !== "checkbox" && R.type !== "radio" ? k && bc(k.elementType) && (et = wf) : et = Dv;
          if (et && (et = et(e, k))) {
            _f(
              V,
              et,
              a,
              z
            );
            break t;
          }
          xt && xt(e, R, k);
        }
        switch (xt = k ? Ga(k) : window, e) {
          case "focusin":
            (Tf(xt) || xt.contentEditable === "true") && (Ys = xt, kc = k, $a = null);
            break;
          case "focusout":
            $a = kc = Ys = null;
            break;
          case "mousedown":
            Bc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Bc = !1, kf(V, a, z);
            break;
          case "selectionchange":
            if (Rv) break;
          case "keydown":
          case "keyup":
            kf(V, a, z);
        }
        var ot;
        if (Dc)
          t: {
            switch (e) {
              case "compositionstart":
                var ht = "onCompositionStart";
                break t;
              case "compositionend":
                ht = "onCompositionEnd";
                break t;
              case "compositionupdate":
                ht = "onCompositionUpdate";
                break t;
            }
            ht = void 0;
          }
        else
          Vs ? Sf(e, a) && (ht = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (ht = "onCompositionStart");
        ht && (vf && a.locale !== "ko" && (Vs || ht !== "onCompositionStart" ? ht === "onCompositionEnd" && Vs && (ot = ff()) : (Ei = z, _c = "value" in Ei ? Ei.value : Ei.textContent, Vs = !0)), xt = pl(k, ht), 0 < xt.length && (ht = new mf(
          ht,
          e,
          null,
          a,
          z
        ), V.push({ event: ht, listeners: xt }), ot ? ht.data = ot : (ot = Ef(a), ot !== null && (ht.data = ot)))), (ot = Ev ? Tv(e, a) : _v(e, a)) && (ht = pl(k, "onBeforeInput"), 0 < ht.length && (xt = new mf(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          z
        ), V.push({
          event: xt,
          listeners: ht
        }), xt.data = ot)), Eb(
          V,
          e,
          k,
          a,
          z
        );
      }
      hm(V, i);
    });
  }
  function Er(e, i, a) {
    return {
      instance: e,
      listener: i,
      currentTarget: a
    };
  }
  function pl(e, i) {
    for (var a = i + "Capture", o = []; e !== null; ) {
      var h = e, f = h.stateNode;
      if (h = h.tag, h !== 5 && h !== 26 && h !== 27 || f === null || (h = ja(e, a), h != null && o.unshift(
        Er(e, h, f)
      ), h = ja(e, i), h != null && o.push(
        Er(e, h, f)
      )), e.tag === 3) return o;
      e = e.return;
    }
    return [];
  }
  function Cb(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function fm(e, i, a, o, h) {
    for (var f = i._reactName, b = []; a !== null && a !== o; ) {
      var T = a, x = T.alternate, k = T.stateNode;
      if (T = T.tag, x !== null && x === o) break;
      T !== 5 && T !== 26 && T !== 27 || k === null || (x = k, h ? (k = ja(a, f), k != null && b.unshift(
        Er(a, k, x)
      )) : h || (k = ja(a, f), k != null && b.push(
        Er(a, k, x)
      ))), a = a.return;
    }
    b.length !== 0 && e.push({ event: i, listeners: b });
  }
  var xb = /\r\n?/g, Mb = /\u0000|\uFFFD/g;
  function pm(e) {
    return (typeof e == "string" ? e : "" + e).replace(xb, `
`).replace(Mb, "");
  }
  function gm(e, i) {
    return i = pm(i), pm(e) === i;
  }
  function Gt(e, i, a, o, h, f) {
    switch (a) {
      case "children":
        if (typeof o == "string")
          i === "body" || i === "textarea" && o === "" || Hs(e, o);
        else if (typeof o == "number" || typeof o == "bigint")
          i !== "body" && Hs(e, "" + o);
        else return;
        break;
      case "className":
        ro(e, "class", o);
        break;
      case "tabIndex":
        ro(e, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ro(e, a, o);
        break;
      case "style":
        uf(e, o, f);
        return;
      case "data":
        if (i !== "object") {
          ro(e, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (i !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (o == null || typeof o == "function" || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(a);
          break;
        }
        o = oo(o), e.setAttribute(a, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof f == "function" && (a === "formAction" ? (i !== "input" && Gt(e, i, "name", h.name, h, null), Gt(
            e,
            i,
            "formEncType",
            h.formEncType,
            h,
            null
          ), Gt(
            e,
            i,
            "formMethod",
            h.formMethod,
            h,
            null
          ), Gt(
            e,
            i,
            "formTarget",
            h.formTarget,
            h,
            null
          )) : (Gt(e, i, "encType", h.encType, h, null), Gt(e, i, "method", h.method, h, null), Gt(e, i, "target", h.target, h, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(a);
          break;
        }
        o = oo(o), e.setAttribute(a, o);
        break;
      case "onClick":
        o != null && (e.onclick = Pn);
        return;
      case "onScroll":
        o != null && _t("scroll", e);
        return;
      case "onScrollEnd":
        o != null && _t("scrollend", e);
        return;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(s(61));
          if (a = o.__html, a != null) {
            if (h.children != null) throw Error(s(60));
            f?.__html !== a && (e.innerHTML = a);
          }
        }
        break;
      case "multiple":
        e.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        e.muted = o && typeof o != "function" && typeof o != "symbol";
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
        if (o == null || typeof o == "function" || typeof o == "boolean" || typeof o == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        a = oo(o), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
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
        o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(a, o) : e.removeAttribute(a);
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
        o && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        o === !0 ? e.setAttribute(a, "") : o !== !1 && o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(a, o) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null && typeof o != "function" && typeof o != "symbol" && !isNaN(o) && 1 <= o ? e.setAttribute(a, o) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o) ? e.removeAttribute(a) : e.setAttribute(a, o);
        break;
      case "popover":
        _t("beforetoggle", e), _t("toggle", e), ao(e, "popover", o);
        break;
      case "xlinkActuate":
        ni(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          o
        );
        break;
      case "xlinkArcrole":
        ni(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          o
        );
        break;
      case "xlinkRole":
        ni(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          o
        );
        break;
      case "xlinkShow":
        ni(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          o
        );
        break;
      case "xlinkTitle":
        ni(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          o
        );
        break;
      case "xlinkType":
        ni(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          o
        );
        break;
      case "xmlBase":
        ni(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          o
        );
        break;
      case "xmlLang":
        ni(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          o
        );
        break;
      case "xmlSpace":
        ni(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          o
        );
        break;
      case "is":
        ao(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N")
          a = q0.get(a) || a, ao(e, a, o);
        else return;
    }
    Pt = !0;
  }
  function yh(e, i, a, o, h, f) {
    switch (a) {
      case "style":
        uf(e, o, f);
        return;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(s(61));
          if (a = o.__html, a != null) {
            if (h.children != null) throw Error(s(60));
            f?.__html !== a && (e.innerHTML = a);
          }
        }
        break;
      case "children":
        if (typeof o == "string") Hs(e, o);
        else if (typeof o == "number" || typeof o == "bigint")
          Hs(e, "" + o);
        else return;
        break;
      case "onScroll":
        o != null && _t("scroll", e);
        return;
      case "onScrollEnd":
        o != null && _t("scrollend", e);
        return;
      case "onClick":
        o != null && (e.onclick = Pn);
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
        if (!Jd.hasOwnProperty(a))
          t: {
            if (a[0] === "o" && a[1] === "n" && (h = a.endsWith("Capture"), f = a.slice(2, h ? a.length - 7 : void 0), i = e[Fe] || null, i = i != null ? i[a] : null, typeof i == "function" && e.removeEventListener(f, i, h), typeof o == "function")) {
              typeof i != "function" && i !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(f, o, h);
              break t;
            }
            Pt = !0, a in e ? e[a] = o : o === !0 ? e.setAttribute(a, "") : ao(e, a, o);
          }
        return;
    }
    Pt = !0;
  }
  function Me(e, i, a) {
    switch (i) {
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
        _t("error", e), _t("load", e);
        var o = !1, h = !1, f;
        for (f in a)
          if (a.hasOwnProperty(f)) {
            var b = a[f];
            if (b != null)
              switch (f) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  h = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, i));
                default:
                  Gt(e, i, f, b, a, null);
              }
          }
        h && Gt(e, i, "srcSet", a.srcSet, a, null), o && Gt(e, i, "src", a.src, a, null);
        return;
      case "input":
        _t("invalid", e);
        var T = f = b = h = null, x = null, k = null;
        for (o in a)
          if (a.hasOwnProperty(o)) {
            var z = a[o];
            if (z != null)
              switch (o) {
                case "name":
                  h = z;
                  break;
                case "type":
                  b = z;
                  break;
                case "checked":
                  x = z;
                  break;
                case "defaultChecked":
                  k = z;
                  break;
                case "value":
                  f = z;
                  break;
                case "defaultValue":
                  T = z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (z != null)
                    throw Error(s(137, i));
                  break;
                default:
                  Gt(e, i, o, z, a, null);
              }
          }
        rf(
          e,
          f,
          T,
          x,
          k,
          b,
          h,
          !1
        );
        return;
      case "select":
        _t("invalid", e), o = b = f = null;
        for (h in a)
          if (a.hasOwnProperty(h) && (T = a[h], T != null))
            switch (h) {
              case "value":
                f = T;
                break;
              case "defaultValue":
                b = T;
                break;
              case "multiple":
                o = T;
              default:
                Gt(e, i, h, T, a, null);
            }
        i = f, a = b, e.multiple = !!o, i != null ? Us(e, !!o, i, !1) : a != null && Us(e, !!o, a, !0);
        return;
      case "textarea":
        _t("invalid", e), f = h = o = null;
        for (b in a)
          if (a.hasOwnProperty(b) && (T = a[b], T != null))
            switch (b) {
              case "value":
                o = T;
                break;
              case "defaultValue":
                h = T;
                break;
              case "children":
                f = T;
                break;
              case "dangerouslySetInnerHTML":
                if (T != null) throw Error(s(91));
                break;
              default:
                Gt(e, i, b, T, a, null);
            }
        lf(e, o, h, f);
        return;
      case "option":
        for (x in a)
          a.hasOwnProperty(x) && (o = a[x], o != null) && (x === "selected" ? e.selected = o && typeof o != "function" && typeof o != "symbol" : Gt(e, i, x, o, a, null));
        return;
      case "dialog":
        _t("beforetoggle", e), _t("toggle", e), _t("cancel", e), _t("close", e);
        break;
      case "iframe":
      case "object":
        _t("load", e);
        break;
      case "video":
      case "audio":
        for (o = 0; o < Sr.length; o++)
          _t(Sr[o], e);
        break;
      case "image":
        _t("error", e), _t("load", e);
        break;
      case "details":
        _t("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        _t("error", e), _t("load", e);
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
        for (k in a)
          if (a.hasOwnProperty(k) && (o = a[k], o != null))
            switch (k) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, i));
              default:
                Gt(e, i, k, o, a, null);
            }
        return;
      default:
        if (bc(i)) {
          for (z in a)
            a.hasOwnProperty(z) && (o = a[z], o !== void 0 && yh(
              e,
              i,
              z,
              o,
              a,
              void 0
            ));
          return;
        }
    }
    for (T in a)
      a.hasOwnProperty(T) && (o = a[T], o != null && Gt(e, i, T, o, a, null));
  }
  var Db = {};
  function Ob(e, i, a, o) {
    switch (i) {
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
        var h = null, f = null, b = null, T = null, x = null, k = null, z = null;
        for (F in a) {
          var V = a[F];
          if (a.hasOwnProperty(F) && V != null)
            switch (F) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                x = V;
              default:
                o.hasOwnProperty(F) || Gt(e, i, F, null, o, V);
            }
        }
        for (var R in o) {
          var F = o[R];
          if (V = a[R], o.hasOwnProperty(R) && (F != null || V != null))
            switch (R) {
              case "type":
                F !== V && (Pt = !0), f = F;
                break;
              case "name":
                F !== V && (Pt = !0), h = F;
                break;
              case "checked":
                F !== V && (Pt = !0), k = F;
                break;
              case "defaultChecked":
                F !== V && (Pt = !0), z = F;
                break;
              case "value":
                F !== V && (Pt = !0), b = F;
                break;
              case "defaultValue":
                F !== V && (Pt = !0), T = F;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (F != null)
                  throw Error(s(137, i));
                break;
              default:
                F !== V && Gt(
                  e,
                  i,
                  R,
                  F,
                  o,
                  V
                );
            }
        }
        yc(
          e,
          b,
          T,
          x,
          k,
          z,
          f,
          h
        );
        return;
      case "select":
        F = b = T = R = null;
        for (f in a)
          if (x = a[f], a.hasOwnProperty(f) && x != null)
            switch (f) {
              case "value":
                break;
              case "multiple":
                F = x;
              default:
                o.hasOwnProperty(f) || Gt(
                  e,
                  i,
                  f,
                  null,
                  o,
                  x
                );
            }
        for (h in o)
          if (f = o[h], x = a[h], o.hasOwnProperty(h) && (f != null || x != null))
            switch (h) {
              case "value":
                f !== x && (Pt = !0), R = f;
                break;
              case "defaultValue":
                f !== x && (Pt = !0), T = f;
                break;
              case "multiple":
                f !== x && (Pt = !0), b = f;
              default:
                f !== x && Gt(
                  e,
                  i,
                  h,
                  f,
                  o,
                  x
                );
            }
        i = T, a = b, o = F, R != null ? Us(e, !!a, R, !1) : !!o != !!a && (i != null ? Us(e, !!a, i, !0) : Us(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        F = R = null;
        for (T in a)
          if (h = a[T], a.hasOwnProperty(T) && h != null && !o.hasOwnProperty(T))
            switch (T) {
              case "value":
                break;
              case "children":
                break;
              default:
                Gt(e, i, T, null, o, h);
            }
        for (b in o)
          if (h = o[b], f = a[b], o.hasOwnProperty(b) && (h != null || f != null))
            switch (b) {
              case "value":
                h !== f && (Pt = !0), R = h;
                break;
              case "defaultValue":
                h !== f && (Pt = !0), F = h;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (h != null) throw Error(s(91));
                break;
              default:
                h !== f && Gt(e, i, b, h, o, f);
            }
        of(e, R, F);
        return;
      case "option":
        for (var Q in a)
          R = a[Q], a.hasOwnProperty(Q) && R != null && !o.hasOwnProperty(Q) && (Q === "selected" ? e.selected = !1 : Gt(
            e,
            i,
            Q,
            null,
            o,
            R
          ));
        for (x in o)
          R = o[x], F = a[x], o.hasOwnProperty(x) && R !== F && (R != null || F != null) && (x === "selected" ? (R !== F && (Pt = !0), e.selected = R && typeof R != "function" && typeof R != "symbol") : Gt(
            e,
            i,
            x,
            R,
            o,
            F
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
        for (var it in a)
          R = a[it], a.hasOwnProperty(it) && R != null && !o.hasOwnProperty(it) && Gt(e, i, it, null, o, R);
        for (k in o)
          if (R = o[k], F = a[k], o.hasOwnProperty(k) && R !== F && (R != null || F != null))
            switch (k) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (R != null)
                  throw Error(s(137, i));
                break;
              default:
                Gt(
                  e,
                  i,
                  k,
                  R,
                  o,
                  F
                );
            }
        return;
      default:
        if (bc(i)) {
          for (var At in a)
            R = a[At], a.hasOwnProperty(At) && R !== void 0 && !o.hasOwnProperty(At) && yh(
              e,
              i,
              At,
              void 0,
              o,
              R
            );
          for (z in o)
            R = o[z], F = a[z], !o.hasOwnProperty(z) || R === F || R === void 0 && F === void 0 || yh(
              e,
              i,
              z,
              R,
              o,
              F
            );
          return;
        }
    }
    for (var L in a)
      R = a[L], a.hasOwnProperty(L) && R != null && !o.hasOwnProperty(L) && Gt(e, i, L, null, o, R);
    for (V in o)
      R = o[V], F = a[V], !o.hasOwnProperty(V) || R === F || R == null && F == null || Gt(e, i, V, R, o, F);
  }
  function mm(e) {
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
  function Nb() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, i = 0, a = performance.getEntriesByType("resource"), o = 0; o < a.length; o++) {
        var h = a[o], f = h.transferSize, b = h.initiatorType, T = h.duration;
        if (f && T && mm(b)) {
          for (b = 0, T = h.responseEnd, o += 1; o < a.length; o++) {
            var x = a[o], k = x.startTime;
            if (k > T) break;
            var z = x.transferSize, V = x.initiatorType;
            z && mm(V) && (x = x.responseEnd, b += z * (x < T ? 1 : (T - k) / (x - k)));
          }
          if (--o, i += 8 * (f + b) / (h.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return i / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var vh = null, bh = null;
  function Tr(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function ym(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function vm(e, i) {
    if (e === 0)
      switch (i) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && i === "foreignObject" ? 0 : e;
  }
  function bm(e, i, a, o) {
    return a = Tr(
      a
    ).createElement(e), a[Te] = o, a[Fe] = i, Me(a, e, i), ye(a), a;
  }
  function Ah(e, i) {
    return e === "textarea" || e === "noscript" || typeof i.children == "string" || typeof i.children == "number" || typeof i.children == "bigint" || typeof i.dangerouslySetInnerHTML == "object" && i.dangerouslySetInnerHTML !== null && i.dangerouslySetInnerHTML.__html != null;
  }
  var Sh = null;
  function Rb() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Sh ? !1 : (Sh = e, !0) : (Sh = null, !1);
  }
  var Eh = typeof setTimeout == "function" ? setTimeout : void 0, Lb = typeof clearTimeout == "function" ? clearTimeout : void 0, Am = typeof Promise == "function" ? Promise : void 0, Sm = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Eh, kb = typeof queueMicrotask == "function" ? queueMicrotask : typeof Am < "u" ? function(e) {
    return Am.resolve(null).then(e).catch(Bb);
  } : Eh;
  function Bb(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Gi(e) {
    return e === "head";
  }
  function Em(e, i) {
    var a = i, o = 0;
    do {
      var h = a.nextSibling;
      if (e.removeChild(a), h && h.nodeType === 8)
        if (a = h.data, a === "/$" || a === "/&") {
          if (o === 0) {
            e.removeChild(h), _a(i);
            return;
          }
          o--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          o++;
        else if (a === "html")
          Oh(
            e.ownerDocument.documentElement
          );
        else if (a === "head") {
          a = e.ownerDocument.head, Oh(a);
          for (var f = a.firstChild; f; ) {
            var b = f.nextSibling, T = f.nodeName;
            f[Ha] || T === "SCRIPT" || T === "STYLE" || T === "LINK" && f.rel.toLowerCase() === "stylesheet" || a.removeChild(f), f = b;
          }
        } else
          a === "body" && Oh(e.ownerDocument.body);
      a = h;
    } while (a);
    _a(i);
  }
  function Tm(e, i) {
    var a = e;
    e = 0;
    do {
      var o = a.nextSibling;
      if (a.nodeType === 1 ? i ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (i ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), o && o.nodeType === 8)
        if (a = o.data, a === "/$") {
          if (e === 0) break;
          e--;
        } else
          a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || e++;
      a = o;
    } while (a);
  }
  function _m(e, i, a) {
    if (i = CSS.escape(i) !== i ? "r-" + btoa(i).replace(/=/g, "") : i, e.style.viewTransitionName = i, a != null && (e.style.viewTransitionClass = a), a = getComputedStyle(e), a.display === "inline") {
      if (i = e.getClientRects(), i.length === 1) var o = 1;
      else
        for (var h = o = 0; h < i.length; h++) {
          var f = i[h];
          0 < f.width && 0 < f.height && o++;
        }
      o === 1 && (e = e.style, e.display = i.length === 1 ? "inline-block" : "block", e.marginTop = "-" + a.paddingTop, e.marginBottom = "-" + a.paddingBottom);
    }
  }
  function wm(e, i) {
    e = e.style, i = i.style;
    var a = i != null ? i.hasOwnProperty("viewTransitionName") ? i.viewTransitionName : i.hasOwnProperty("view-transition-name") ? i["view-transition-name"] : null : null;
    e.viewTransitionName = a == null || typeof a == "boolean" ? "" : ("" + a).trim(), a = i != null ? i.hasOwnProperty("viewTransitionClass") ? i.viewTransitionClass : i.hasOwnProperty("view-transition-class") ? i["view-transition-class"] : null : null, e.viewTransitionClass = a == null || typeof a == "boolean" ? "" : ("" + a).trim(), e.display === "inline-block" && (i == null ? e.display = e.margin = "" : (a = i.display, e.display = a == null || typeof a == "boolean" ? "" : a, a = i.margin, a != null ? e.margin = a : (a = i.hasOwnProperty("marginTop") ? i.marginTop : i["margin-top"], e.marginTop = a == null || typeof a == "boolean" ? "" : a, i = i.hasOwnProperty("marginBottom") ? i.marginBottom : i["margin-bottom"], e.marginBottom = i == null || typeof i == "boolean" ? "" : i)));
  }
  function Pb(e, i, a) {
    return a = a.ownerDocument.defaultView, {
      rect: e,
      abs: i.position === "absolute" || i.position === "fixed",
      clip: i.clipPath !== "none" || i.overflow !== "visible" || i.filter !== "none" || i.mask !== "none" || i.mask !== "none" || i.borderRadius !== "0px",
      view: 0 <= e.bottom && 0 <= e.right && e.top <= a.innerHeight && e.left <= a.innerWidth
    };
  }
  function Th(e) {
    var i = e.getBoundingClientRect(), a = getComputedStyle(e);
    return Pb(i, a, e);
  }
  function Ib(e) {
    return e.documentElement.clientHeight;
  }
  function Fb(e) {
    this.addEventListener("load", e), this.addEventListener("error", e);
  }
  function zb(e, i, a, o, h, f, b, T, x) {
    var k = i.nodeType === 9 ? i : i.ownerDocument;
    try {
      var z = k.startViewTransition({
        update: function() {
          var R = k.defaultView, F = R.navigation && R.navigation.transition, Q = k.fonts.status;
          o();
          var it = [];
          if (Q === "loaded" && (Ib(k), k.fonts.status === "loading" && it.push(k.fonts.ready)), Q = it.length, e !== null)
            for (var At = e.suspenseyImages, L = 0, D = 0; D < At.length; D++) {
              var I = At[D];
              if (!I.complete) {
                var G = I.getBoundingClientRect();
                if (0 < G.bottom && 0 < G.right && G.top < R.innerHeight && G.left < R.innerWidth) {
                  if (L += Xm(I), L > yl) {
                    it.length = Q;
                    break;
                  }
                  I = new Promise(
                    Fb.bind(I)
                  ), it.push(I);
                }
              }
            }
          if (0 < it.length)
            return R = Promise.race([
              Promise.all(it),
              new Promise(function(et) {
                return setTimeout(et, 500);
              })
            ]).then(h, h), (F ? Promise.allSettled([F.finished, R]) : R).then(f, f);
          if (h(), F)
            return F.finished.then(
              f,
              f
            );
          f();
        },
        types: a
      });
      k.__reactViewTransition = z;
      var V = [];
      return z.ready.then(
        function() {
          for (var R = k.documentElement.getAnimations({
            subtree: !0
          }), F = 0; F < R.length; F++) {
            var Q = R[F], it = Q.effect, At = it.pseudoElement;
            if (At != null && At.startsWith("::view-transition")) {
              V.push(Q), Q = it.getKeyframes();
              for (var L = At = void 0, D = !0, I = 0; I < Q.length; I++) {
                var G = Q[I], et = G.width;
                if (At === void 0) At = et;
                else if (At !== et) {
                  D = !1;
                  break;
                }
                if (et = G.height, L === void 0) L = et;
                else if (L !== et) {
                  D = !1;
                  break;
                }
                delete G.width, delete G.height, G.transform === "none" && delete G.transform;
              }
              D && At !== void 0 && L !== void 0 && (it.setKeyframes(Q), D = getComputedStyle(
                it.target,
                it.pseudoElement
              ), D.width !== At || D.height !== L) && (D = Q[0], D.width = At, D.height = L, D = Q[Q.length - 1], D.width = At, D.height = L, it.setKeyframes(Q));
            }
          }
          b();
        },
        function(R) {
          k.__reactViewTransition === z && (k.__reactViewTransition = null);
          try {
            typeof R == "object" && R !== null && R.name === "InvalidStateError" && (R.message === "View transition was skipped because document visibility state is hidden." || R.message === "Skipping view transition because document visibility state has become hidden." || R.message === "Skipping view transition because viewport size changed." || R.message === "Transition was aborted because of invalid state") && (R = null), R !== null && x(R);
          } finally {
            o(), h(), b();
          }
        }
      ), z.finished.finally(function() {
        for (var R = 0; R < V.length; R++)
          V[R].cancel();
        k.__reactViewTransition === z && (k.__reactViewTransition = null), T();
      }), z;
    } catch {
      return o(), h(), b(), null;
    }
  }
  function As(e, i) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + i + ")";
  }
  As.prototype.animate = function(e, i) {
    return i = typeof i == "number" ? { duration: i } : U({}, i), i.pseudoElement = this._selector, this._scope.animate(e, i);
  }, As.prototype.getAnimations = function() {
    for (var e = this._scope, i = this._selector, a = e.getAnimations({ subtree: !0 }), o = [], h = 0; h < a.length; h++) {
      var f = a[h].effect;
      f !== null && f.target === e && f.pseudoElement === i && o.push(a[h]);
    }
    return o;
  }, As.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Cm(e) {
    return {
      name: e,
      group: new As("group", e),
      imagePair: new As("image-pair", e),
      old: new As("old", e),
      new: new As("new", e)
    };
  }
  function sn(e) {
    this._fragmentFiber = e, this._observers = this._eventListeners = null;
  }
  sn.prototype.addEventListener = function(e, i, a) {
    var o = null, h = null;
    if (!(a != null && typeof a != "boolean" && (o = a.signal || null, o !== null && o.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var f = this._eventListeners;
      if (Mm(f, e, i, a) === -1) {
        var b = this, T = i;
        a != null && typeof a != "boolean" && a.once === !0 && (T = function(x) {
          b.removeEventListener(
            e,
            i,
            a
          ), typeof i == "function" ? i.call(this, x) : i.handleEvent(x);
        }), o !== null && (h = b.removeEventListener.bind(
          b,
          e,
          i,
          a
        ), o.addEventListener("abort", h, { once: !0 }), h = o.removeEventListener.bind(o, "abort", h)), o = va(a), f.push({
          type: e,
          listener: i,
          optionsOrUseCapture: a,
          attachedListener: T,
          cleanup: h
        }), m(
          this._fragmentFiber.child,
          !1,
          Ub,
          e,
          T,
          o
        );
      }
      this._eventListeners = f;
    }
  };
  function Ub(e, i, a, o) {
    return _(e).addEventListener(
      i,
      a,
      o
    ), !1;
  }
  sn.prototype.removeEventListener = function(e, i, a) {
    var o = this._eventListeners;
    if (o !== null && (i = Mm(
      o,
      e,
      i,
      a
    ), i !== -1)) {
      var h = o[i];
      a = h.attachedListener;
      var f = h.cleanup;
      h = va(h.optionsOrUseCapture), m(
        this._fragmentFiber.child,
        !1,
        Hb,
        e,
        a,
        h
      ), o.splice(i, 1), f !== null && f();
    }
  };
  function Hb(e, i, a, o) {
    return _(e).removeEventListener(
      i,
      a,
      o
    ), !1;
  }
  function va(e) {
    return e != null && typeof e != "boolean" && (e.once === !0 || e.signal instanceof AbortSignal) ? { capture: e.capture, passive: e.passive } : e;
  }
  function xm(e) {
    return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
  }
  function Mm(e, i, a, o) {
    if (e.length === 0) return -1;
    o = xm(o);
    for (var h = 0; h < e.length; h++) {
      var f = e[h];
      if (f.type === i && f.listener === a && xm(f.optionsOrUseCapture) === o)
        return h;
    }
    return -1;
  }
  sn.prototype.dispatchEvent = function(e) {
    var i = v(
      this._fragmentFiber
    );
    if (i === null) return !0;
    i = _(i);
    var a = this._eventListeners;
    if (a !== null && 0 < a.length || !e.bubbles) {
      var o = i.nodeType === 9 ? i.createComment("") : document.createTextNode("");
      if (a)
        for (var h = 0; h < a.length; h++) {
          var f = a[h];
          o.addEventListener(
            f.type,
            f.attachedListener,
            va(f.optionsOrUseCapture)
          );
        }
      if (i.appendChild(o), e = o.dispatchEvent(e), a)
        for (h = 0; h < a.length; h++)
          f = a[h], o.removeEventListener(
            f.type,
            f.attachedListener,
            va(f.optionsOrUseCapture)
          );
      return i.removeChild(o), e;
    }
    return i.dispatchEvent(e);
  }, sn.prototype.focus = function(e) {
    m(
      this._fragmentFiber.child,
      !0,
      Dm,
      e,
      void 0,
      void 0
    );
  };
  function Dm(e, i) {
    return e.tag === 6 ? !1 : (e = _(e), Jb(e, i));
  }
  sn.prototype.focusLast = function(e) {
    var i = [];
    m(
      this._fragmentFiber.child,
      !0,
      _h,
      i,
      void 0,
      void 0
    );
    for (var a = i.length - 1; 0 <= a && !Dm(i[a], e); a--) ;
  };
  function _h(e, i) {
    return i.push(e), !1;
  }
  sn.prototype.blur = function() {
    var e = v(
      this._fragmentFiber
    );
    e !== null && (e = _(e), e = Tr(e).activeElement, e !== null && m(
      this._fragmentFiber.child,
      !1,
      Gb,
      e,
      void 0,
      void 0
    ));
  };
  function Gb(e, i) {
    return e.tag === 6 ? !1 : (e = _(e), e === i || e.contains(i) ? (i.blur(), !0) : !1);
  }
  sn.prototype.observeUsing = function(e) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), m(
      this._fragmentFiber.child,
      !1,
      jb,
      e,
      void 0,
      void 0
    );
  };
  function jb(e, i) {
    return e.tag === 6 || (e = _(e), i.observe(e)), !1;
  }
  sn.prototype.unobserveUsing = function(e) {
    var i = this._observers;
    if (i !== null && i.has(e)) {
      i.delete(e), m(
        this._fragmentFiber.child,
        !1,
        Vb,
        e,
        void 0,
        void 0
      );
      for (var a = i = 0; a < Mn.length; a++) {
        var o = Mn[a];
        o.fragmentInstance === this && o.observer === e ? e.unobserve(o.instance) : Mn[i++] = o;
      }
      Mn.length = i;
    }
  };
  function Vb(e, i) {
    return e.tag === 6 || (e = _(e), i.unobserve(e)), !1;
  }
  var Mn = [], wh = !1;
  function Yb(e, i, a) {
    Mn.push({
      fragmentInstance: e,
      observer: i,
      instance: a
    }), wh || (wh = !0, tA(function() {
      wh = !1;
      var o = Mn;
      Mn = [];
      for (var h = 0; h < o.length; h++) {
        var f = o[h];
        f.observer.unobserve(f.instance);
      }
    }));
  }
  sn.prototype.getClientRects = function() {
    var e = [];
    return m(
      this._fragmentFiber.child,
      !1,
      Xb,
      e,
      void 0,
      void 0
    ), e;
  };
  function Xb(e, i) {
    if (e.tag === 6) {
      e = e.stateNode;
      var a = e.ownerDocument.createRange();
      a.selectNodeContents(e), i.push.apply(i, a.getClientRects());
    } else
      e = _(e), i.push.apply(i, e.getClientRects());
    return !1;
  }
  sn.prototype.getRootNode = function(e) {
    var i = v(
      this._fragmentFiber
    );
    return i === null ? this : _(i).getRootNode(e);
  }, sn.prototype.compareDocumentPosition = function(e) {
    var i = v(
      this._fragmentFiber
    );
    if (i === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var a = [];
    m(
      this._fragmentFiber.child,
      !1,
      _h,
      a,
      void 0,
      void 0
    );
    var o = _(i);
    if (a.length === 0) {
      if (a = o, A(this._fragmentFiber)) {
        t: {
          for (i = this._fragmentFiber.return; i !== null; ) {
            if (i.tag === 4) {
              i = i.stateNode.containerInfo;
              break t;
            }
            if (i.tag === 3 || i.tag === 5 || i.tag === 27)
              break;
            i = i.return;
          }
          i = null;
        }
        i != null && (a = i);
      }
      i = this._fragmentFiber;
      var h = o = a.compareDocumentPosition(e);
      return a === e ? h = Node.DOCUMENT_POSITION_CONTAINS : o & Node.DOCUMENT_POSITION_CONTAINED_BY && (a = S(i)[1], a === null ? h = Node.DOCUMENT_POSITION_PRECEDING : (e = _(a).compareDocumentPosition(
        e
      ), h = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), h |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    i = _(a[0]), h = _(a[a.length - 1]);
    var f = A(this._fragmentFiber) ? i.parentElement : o;
    if (f == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    o = f.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY, f = f.compareDocumentPosition(h) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var b = i.compareDocumentPosition(e), T = h.compareDocumentPosition(e), x = b & Node.DOCUMENT_POSITION_CONTAINED_BY || T & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return T = o && f && b & Node.DOCUMENT_POSITION_FOLLOWING && T & Node.DOCUMENT_POSITION_PRECEDING, i = o && i === e || f && h === e || x || T ? Node.DOCUMENT_POSITION_CONTAINED_BY : !o && i === e || !f && h === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : b, i & Node.DOCUMENT_POSITION_DISCONNECTED || i & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || qb(
      i,
      this._fragmentFiber,
      a[0],
      a[a.length - 1],
      e
    ) ? i : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function qb(e, i, a, o, h) {
    var f = Ji(h);
    if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (a = !!f)
        t: {
          for (; f !== null; ) {
            if (f.tag === 7 && (f === i || f.alternate === i)) {
              a = !0;
              break t;
            }
            f = f.return;
          }
          a = !1;
        }
      return a;
    }
    if (e & Node.DOCUMENT_POSITION_CONTAINS) {
      if (f === null)
        return f = h.ownerDocument, h === f || h === f.documentElement || h === f.body;
      t: {
        for (f = i, i = v(i); f !== null; ) {
          if (!(f.tag !== 5 && f.tag !== 3 && f.tag !== 27 || f !== i && f.alternate !== i)) {
            f = !0;
            break t;
          }
          f = f.return;
        }
        f = !1;
      }
      return f;
    }
    return e & Node.DOCUMENT_POSITION_PRECEDING ? ((i = !!f) && !(i = f === a) && (i = P(
      a,
      f,
      N
    ), i === null ? i = !1 : (m(
      i,
      !0,
      M,
      f,
      a
    ), f = w, w = null, i = f !== null)), i) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((i = !!f) && !(i = f === o) && (i = P(
      o,
      f,
      N
    ), i === null ? i = !1 : (m(
      i,
      !0,
      B,
      f,
      o
    ), f = w, C = w = null, i = f !== null)), i) : !1;
  }
  function Om(e, i) {
    var a = e.ownerDocument.createRange();
    a.selectNodeContents(e), e = a.getBoundingClientRect(), window.scrollTo(
      window.scrollX + e.left,
      i ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight
    );
  }
  sn.prototype.scrollIntoView = function(e) {
    if (typeof e == "object") throw Error(s(566));
    var i = [];
    m(
      this._fragmentFiber.child,
      !1,
      _h,
      i,
      void 0,
      void 0
    );
    var a = e !== !1;
    if (i.length === 0) {
      var o = S(
        this._fragmentFiber
      );
      if (o = a ? o[1] || o[0] || v(this._fragmentFiber) : o[0] || o[1], o === null) return;
      if (o.tag === 6) {
        e = _(o), Om(e, a);
        return;
      }
      if (o = _(o), o.nodeType !== 9) {
        if (o.nodeType === 11) {
          a = "host" in o ? o.host : null, a !== null && a.scrollIntoView(e);
          return;
        }
        o.scrollIntoView(e);
      }
    }
    for (o = a ? i.length - 1 : 0; o !== (a ? -1 : i.length); ) {
      var h = i[o];
      h.tag === 6 ? (h = _(h), Om(h, a)) : _(h).scrollIntoView(e), o += a ? -1 : 1;
    }
  };
  function Kb(e, i) {
    return e = _(e), Nm(e, i), !1;
  }
  function Nm(e, i) {
    e.reactFragments == null && (e.reactFragments = /* @__PURE__ */ new Set()), e.reactFragments.add(i);
  }
  function Rm(e, i) {
    var a = i._eventListeners;
    if (a !== null)
      for (var o = 0; o < a.length; o++) {
        var h = a[o];
        e.addEventListener(
          h.type,
          h.attachedListener,
          va(h.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 && (a = i._observers, a !== null && a.forEach(function(f) {
      for (var b = 0, T = 0; T < Mn.length; T++) {
        var x = Mn[T];
        (x.fragmentInstance !== i || x.observer !== f || x.instance !== e) && (Mn[b++] = x);
      }
      Mn.length = b, f.observe(e);
    }), Nm(e, i));
  }
  function Qb(e, i) {
    var a = i._eventListeners;
    if (a !== null)
      for (var o = 0; o < a.length; o++) {
        var h = a[o];
        e.removeEventListener(
          h.type,
          h.attachedListener,
          va(h.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 && (a = i._observers, a !== null && a.forEach(function(f) {
      typeof f.rootMargin == "string" ? Yb(
        i,
        f,
        e
      ) : f.unobserve(e);
    }), e.reactFragments != null && e.reactFragments.delete(i));
  }
  function Ch(e) {
    var i = e.firstChild;
    for (i && i.nodeType === 10 && (i = i.nextSibling); i; ) {
      var a = i;
      switch (i = i.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ch(a), so(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function Zb(e, i, a, o) {
    for (; e.nodeType === 1; ) {
      var h = a;
      if (e.nodeName.toLowerCase() !== i.toLowerCase()) {
        if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (o) {
        if (!e[Ha])
          switch (i) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (f !== h.rel || e.getAttribute("href") !== (h.href == null || h.href === "" ? null : h.href) || e.getAttribute("crossorigin") !== (h.crossOrigin == null ? null : h.crossOrigin) || e.getAttribute("title") !== (h.title == null ? null : h.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (f = e.getAttribute("src"), (f !== (h.src == null ? null : h.src) || e.getAttribute("type") !== (h.type == null ? null : h.type) || e.getAttribute("crossorigin") !== (h.crossOrigin == null ? null : h.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (i === "input" && e.type === "hidden") {
        var f = h.name == null ? null : "" + h.name;
        if (h.type === "hidden" && e.getAttribute("name") === f)
          return e;
      } else return e;
      if (e = vn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function $b(e, i, a) {
    if (i === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = vn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Lm(e, i) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !i || (e = vn(e.nextSibling), e === null)) return null;
    return e;
  }
  function xh(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Mh(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Wb(e, i) {
    var a = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = i;
    else if (e.data !== "$?" || a.readyState !== "loading")
      i();
    else {
      var o = function() {
        i(), a.removeEventListener("DOMContentLoaded", o);
      };
      a.addEventListener("DOMContentLoaded", o), e._reactRetry = o;
    }
  }
  function vn(e) {
    for (; e != null; e = e.nextSibling) {
      var i = e.nodeType;
      if (i === 1 || i === 3) break;
      if (i === 8) {
        if (i = e.data, i === "$" || i === "$!" || i === "$?" || i === "$~" || i === "&" || i === "F!" || i === "F")
          break;
        if (i === "/$" || i === "/&") return null;
      }
    }
    return e;
  }
  var Dh = null;
  function km(e) {
    e = e.nextSibling;
    for (var i = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "/$" || a === "/&") {
          if (i === 0)
            return vn(e.nextSibling);
          i--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || i++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Bm(e) {
    e = e.previousSibling;
    for (var i = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (i === 0) return e;
          i--;
        } else a !== "/$" && a !== "/&" || i++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Jb(e, i) {
    function a() {
      o = !0;
    }
    if (e.ownerDocument.activeElement === e) return !0;
    var o = !1;
    try {
      e.ownerDocument.addEventListener("focus", a, !0), (e.focus || HTMLElement.prototype.focus).call(e, i);
    } finally {
      e.ownerDocument.removeEventListener("focus", a, !0);
    }
    return o;
  }
  function tA(e) {
    Sm(function() {
      Sm(function(i) {
        return e(i);
      });
    });
  }
  function Pm(e, i, a) {
    switch (i = Tr(a), e) {
      case "html":
        if (e = i.documentElement, !e) throw Error(s(452));
        return e;
      case "head":
        if (e = i.head, !e) throw Error(s(453));
        return e;
      case "body":
        if (e = i.body, !e) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  function Im(e, i, a) {
    for (var o in a) {
      var h = a[o];
      a.hasOwnProperty(o) && h != null && Gt(e, i, o, null, Db, h);
    }
    a.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === Pn && (e.onclick = null), so(e);
  }
  function Oh(e) {
    for (var i = e.attributes; i.length; )
      e.removeAttributeNode(i[0]);
    so(e);
  }
  var bn = /* @__PURE__ */ new Map(), Fm = /* @__PURE__ */ new Set();
  function _r(e) {
    if (typeof e.getRootNode == "function") {
      var i = e.getRootNode();
      if (i.nodeType === 9 || i.nodeType === 11) return i;
    }
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  var gi = ut.d;
  ut.d = {
    f: eA,
    r: nA,
    D: iA,
    C: sA,
    L: aA,
    m: rA,
    X: lA,
    S: oA,
    M: cA
  };
  function eA() {
    var e = gi.f(), i = ll();
    return e || i;
  }
  function nA(e) {
    var i = Is(e);
    i !== null && i.tag === 5 && i.type === "form" ? Up(i) : gi.r(e);
  }
  var ba = typeof document > "u" ? null : document;
  function zm(e, i, a) {
    var o = ba;
    if (o && typeof i == "string" && i) {
      var h = hn(i);
      h = 'link[rel="' + e + '"][href="' + h + '"]', typeof a == "string" && (h += '[crossorigin="' + a + '"]'), Fm.has(h) || (Fm.add(h), e = { rel: e, crossOrigin: a, href: i }, o.querySelector(h) === null && (i = o.createElement("link"), Me(i, "link", e), ye(i), o.head.appendChild(i)));
    }
  }
  function iA(e) {
    gi.D(e), zm("dns-prefetch", e, null);
  }
  function sA(e, i) {
    gi.C(e, i), zm("preconnect", e, i);
  }
  function aA(e, i, a) {
    gi.L(e, i, a);
    var o = ba;
    if (o && e && i) {
      var h = 'link[rel="preload"][as="' + hn(i) + '"]';
      i === "image" && a && a.imageSrcSet ? (h += '[imagesrcset="' + hn(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (h += '[imagesizes="' + hn(
        a.imageSizes
      ) + '"]')) : h += '[href="' + hn(e) + '"]';
      var f = h;
      switch (i) {
        case "style":
          f = Aa(e);
          break;
        case "script":
          f = Sa(e);
      }
      if (!(bn.has(f) || (e = U(
        {
          rel: "preload",
          href: i === "image" && a && a.imageSrcSet ? void 0 : e,
          as: i
        },
        a
      ), bn.set(f, e), o.querySelector(h) !== null || i === "style" && o.querySelector(wr(f)) || i === "script" && o.querySelector(Cr(f))))) {
        var b = o.createElement("link");
        Me(b, "link", e), i === "style" && (b[io] = !0, b.onload = b.onerror = function() {
          $d(b);
        }), ye(b), o.head.appendChild(b);
      }
    }
  }
  function rA(e, i) {
    gi.m(e, i);
    var a = ba;
    if (a && e) {
      var o = i && typeof i.as == "string" ? i.as : "script", h = 'link[rel="modulepreload"][as="' + hn(o) + '"][href="' + hn(e) + '"]', f = h;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = Sa(e);
      }
      if (!bn.has(f) && (e = U({ rel: "modulepreload", href: e }, i), bn.set(f, e), a.querySelector(h) === null)) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Cr(f)))
              return;
        }
        o = a.createElement("link"), Me(o, "link", e), ye(o), a.head.appendChild(o);
      }
    }
  }
  function oA(e, i, a) {
    gi.S(e, i, a);
    var o = ba;
    if (o && e) {
      var h = Fs(o).hoistableStyles, f = Aa(e);
      i = i || "default";
      var b = h.get(f);
      if (!b) {
        var T = { loading: 0, preload: null };
        if (b = o.querySelector(
          wr(f)
        ))
          T.loading = 5;
        else {
          e = U(
            { rel: "stylesheet", href: e, "data-precedence": i },
            a
          ), (a = bn.get(f)) && Nh(e, a);
          var x = b = o.createElement("link");
          ye(x), Me(x, "link", e), x._p = new Promise(function(k, z) {
            x.onload = k, x.onerror = z;
          }), x.addEventListener("load", function() {
            T.loading |= 1;
          }), x.addEventListener("error", function() {
            T.loading |= 2;
          }), T.loading |= 4, gl(b, i, o);
        }
        b = {
          type: "stylesheet",
          instance: b,
          count: 1,
          state: T
        }, h.set(f, b);
      }
    }
  }
  function lA(e, i) {
    gi.X(e, i);
    var a = ba;
    if (a && e) {
      var o = Fs(a).hoistableScripts, h = Sa(e), f = o.get(h);
      f || (f = a.querySelector(Cr(h)), f || (e = U({ src: e, async: !0 }, i), (i = bn.get(h)) && Rh(e, i), f = a.createElement("script"), ye(f), Me(f, "link", e), a.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, o.set(h, f));
    }
  }
  function cA(e, i) {
    gi.M(e, i);
    var a = ba;
    if (a && e) {
      var o = Fs(a).hoistableScripts, h = Sa(e), f = o.get(h);
      f || (f = a.querySelector(Cr(h)), f || (e = U({ src: e, async: !0, type: "module" }, i), (i = bn.get(h)) && Rh(e, i), f = a.createElement("script"), ye(f), Me(f, "link", e), a.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, o.set(h, f));
    }
  }
  function Um(e, i, a, o) {
    var h = (h = bi.current) ? _r(h) : null;
    if (!h) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (a = Aa(a.href), i = Fs(
          h
        ).hoistableStyles, o = i.get(a), o || (o = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, i.set(a, o)), o) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = Aa(a.href);
          var f = Fs(
            h
          ).hoistableStyles, b = f.get(e);
          if (b || (h = h.ownerDocument || h, b = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, f.set(e, b), (f = h.querySelector(
            wr(e)
          )) ? f._p || (b.instance = f, b.state.loading = 5) : (f = bn.get(e), f || (f = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, bn.set(e, f)), uA(
            h,
            e,
            f,
            b.state
          ))), i && o === null)
            throw Error(s(528, ""));
          return b;
        }
        if (i && o !== null)
          throw Error(s(529, ""));
        return null;
      case "script":
        return i = a.async, a = a.src, typeof a == "string" && i && typeof i != "function" && typeof i != "symbol" ? (a = Sa(a), i = Fs(
          h
        ).hoistableScripts, o = i.get(a), o || (o = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, i.set(a, o)), o) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, e));
    }
  }
  function Aa(e) {
    return 'href="' + hn(e) + '"';
  }
  function wr(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Hm(e) {
    return U({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function uA(e, i, a, o) {
    if (i = e.querySelector(
      'link[rel="preload"][as="style"][' + i + "]"
    )) {
      if (i[io] !== !0) {
        o.loading = 1;
        return;
      }
    } else
      i = e.createElement("link"), i[io] = !0, i.onload = i.onerror = $d.bind(null, i), Me(i, "link", a), ye(i), e.head.appendChild(i);
    o.preload = i, i.addEventListener("load", function() {
      return o.loading |= 1;
    }), i.addEventListener("error", function() {
      return o.loading |= 2;
    });
  }
  function Sa(e) {
    return '[src="' + hn(e) + '"]';
  }
  function Cr(e) {
    return "script[async]" + e;
  }
  function Gm(e, i, a) {
    if (i.count++, i.instance === null)
      switch (i.type) {
        case "style":
          var o = e.querySelector(
            'style[data-href~="' + hn(a.href) + '"]'
          );
          if (o)
            return i.instance = o, ye(o), o;
          var h = U({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return o = (e.ownerDocument || e).createElement(
            "style"
          ), ye(o), Me(o, "style", h), gl(o, a.precedence, e), i.instance = o;
        case "stylesheet":
          h = Aa(a.href);
          var f = e.querySelector(
            wr(h)
          );
          if (f)
            return i.state.loading |= 4, i.instance = f, ye(f), f;
          o = Hm(a), (h = bn.get(h)) && Nh(o, h), f = (e.ownerDocument || e).createElement("link"), ye(f);
          var b = f;
          return b._p = new Promise(function(T, x) {
            b.onload = T, b.onerror = x;
          }), Me(f, "link", o), i.state.loading |= 4, gl(f, a.precedence, e), i.instance = f;
        case "script":
          return f = Sa(a.src), (h = e.querySelector(
            Cr(f)
          )) ? (i.instance = h, ye(h), h) : (o = a, (h = bn.get(f)) && (o = U({}, a), Rh(o, h)), e = e.ownerDocument || e, h = e.createElement("script"), ye(h), Me(h, "link", o), e.head.appendChild(h), i.instance = h);
        case "void":
          return null;
        default:
          throw Error(s(443, i.type));
      }
    else
      i.type === "stylesheet" && (i.state.loading & 4) === 0 && (o = i.instance, i.state.loading |= 4, gl(o, a.precedence, e));
    return i.instance;
  }
  function gl(e, i, a) {
    for (var o = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), h = o.length ? o[o.length - 1] : null, f = h, b = 0; b < o.length; b++) {
      var T = o[b];
      if (T.dataset.precedence === i) f = T;
      else if (f !== h) break;
    }
    f ? f.parentNode.insertBefore(e, f.nextSibling) : (i = a.nodeType === 9 ? a.head : a, i.insertBefore(e, i.firstChild));
  }
  function Nh(e, i) {
    e.crossOrigin == null && (e.crossOrigin = i.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = i.referrerPolicy), e.title == null && (e.title = i.title);
  }
  function Rh(e, i) {
    e.crossOrigin == null && (e.crossOrigin = i.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = i.referrerPolicy), e.integrity == null && (e.integrity = i.integrity);
  }
  var ml = null;
  function jm(e, i, a) {
    if (ml === null) {
      var o = /* @__PURE__ */ new Map(), h = ml = /* @__PURE__ */ new Map();
      h.set(a, o);
    } else
      h = ml, o = h.get(a), o || (o = /* @__PURE__ */ new Map(), h.set(a, o));
    if (o.has(e)) return o;
    for (o.set(e, null), a = a.getElementsByTagName(e), h = 0; h < a.length; h++) {
      var f = a[h];
      if (!(f[Ha] || f[Te] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") {
        var b = f.getAttribute(i) || "";
        b = e + b;
        var T = o.get(b);
        T ? T.push(f) : o.set(b, [f]);
      }
    }
    return o;
  }
  function Lh(e, i, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      i === "title" ? e.querySelector("head > title") : null
    );
  }
  function hA(e, i, a) {
    if (a === 1 || i.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof i.precedence != "string" || typeof i.href != "string" || i.href === "")
          break;
        return !0;
      case "link":
        if (typeof i.rel != "string" || typeof i.href != "string" || i.href === "" || i.onLoad || i.onError)
          break;
        return i.rel === "stylesheet" ? (e = i.disabled, typeof i.precedence == "string" && e == null) : !0;
      case "script":
        if (i.async && typeof i.async != "function" && typeof i.async != "symbol" && !i.onLoad && !i.onError && i.src && typeof i.src == "string")
          return !0;
    }
    return !1;
  }
  function Vm(e, i) {
    return e === "img" && i.src != null && i.src !== "" && i.onLoad == null && i.loading !== "lazy";
  }
  function Ym(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Xm(e) {
    return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function qm(e, i) {
    typeof i.decode == "function" && (e.imgCount++, i.complete || (e.imgBytes += Xm(i), e.suspenseyImages.push(i)), e = pA.bind(e), i.decode().then(e, e));
  }
  function dA(e, i, a, o) {
    if (a.type === "stylesheet" && (typeof o.media != "string" || matchMedia(o.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var h = Aa(o.href), f = i.querySelector(
          wr(h)
        );
        if (f) {
          i = f._p, i !== null && typeof i == "object" && typeof i.then == "function" && (e.count++, e = xr.bind(e), i.then(e, e)), a.state.loading |= 4, a.instance = f, ye(f);
          return;
        }
        f = i.ownerDocument || i, o = Hm(o), (h = bn.get(h)) && Nh(o, h), f = f.createElement("link"), ye(f);
        var b = f;
        b._p = new Promise(function(T, x) {
          b.onload = T, b.onerror = x;
        }), Me(f, "link", o), a.instance = f;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, i), (i = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = xr.bind(e), i.addEventListener("load", a), i.addEventListener("error", a));
    }
  }
  var yl = 0;
  function fA(e, i) {
    return e.stylesheets && e.count === 0 && bl(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
      var o = setTimeout(function() {
        if (e.stylesheets && bl(e, e.stylesheets), e.unsuspend) {
          var f = e.unsuspend;
          e.unsuspend = null, f();
        }
      }, 6e4 + i);
      0 < e.imgBytes && yl === 0 && (yl = 62500 * Nb());
      var h = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && bl(e, e.stylesheets), e.unsuspend)) {
            var f = e.unsuspend;
            e.unsuspend = null, f();
          }
        },
        (e.imgBytes > yl ? 50 : 800) + i
      );
      return e.unsuspend = a, function() {
        e.unsuspend = null, clearTimeout(o), clearTimeout(h);
      };
    } : null;
  }
  function Km(e) {
    if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
      if (e.stylesheets) bl(e, e.stylesheets);
      else if (e.unsuspend) {
        var i = e.unsuspend;
        e.unsuspend = null, i();
      }
    }
  }
  function xr() {
    this.count--, Km(this);
  }
  function pA() {
    this.imgCount--, Km(this);
  }
  var vl = null;
  function bl(e, i) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, vl = /* @__PURE__ */ new Map(), i.forEach(gA, e), vl = null, xr.call(e));
  }
  function gA(e, i) {
    if (!(i.state.loading & 4)) {
      var a = vl.get(e);
      if (a) var o = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), vl.set(e, a);
        for (var h = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), f = 0; f < h.length; f++) {
          var b = h[f];
          (b.nodeName === "LINK" || b.getAttribute("media") !== "not all") && (a.set(b.dataset.precedence, b), o = b);
        }
        o && a.set(null, o);
      }
      h = i.instance, b = h.getAttribute("data-precedence"), f = a.get(b) || o, f === o && a.set(null, h), a.set(b, h), this.count++, o = xr.bind(this), h.addEventListener("load", o), h.addEventListener("error", o), f ? f.parentNode.insertBefore(h, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(h, e.firstChild)), i.state.loading |= 4;
    }
  }
  var Ea = {
    $$typeof: vt,
    Provider: null,
    Consumer: null,
    _currentValue: un,
    _currentValue2: un,
    _threadCount: 0
  };
  function mA(e, i, a, o, h, f, b, T, x) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = fc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = fc(0), this.hiddenUpdates = fc(null), this.identifierPrefix = o, this.onUncaughtError = h, this.onCaughtError = f, this.onRecoverableError = b, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = x, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Qm(e, i, a, o, h, f, b, T, x, k, z, V) {
    return e = new mA(
      e,
      i,
      a,
      b,
      x,
      k,
      z,
      V,
      T
    ), i = 1, f === !0 && (i |= 24), f = ze(3, null, null, i), e.current = f, f.stateNode = e, i = Kc(), i.refCount++, e.pooledCache = i, i.refCount++, f.memoizedState = {
      element: o,
      isDehydrated: a,
      cache: i
    }, Wc(f), e;
  }
  function Zm(e) {
    return e ? (e = Ks, e) : Ks;
  }
  function $m(e, i, a, o, h, f) {
    h = Zm(h), o.context === null ? o.context = h : o.pendingContext = h, o = Oi(i), o.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (o.callback = f), a = Ni(e, o, i), a !== null && (je(a, e, i), sr(a, e, i));
  }
  function Wm(e, i) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < i ? a : i;
    }
  }
  function kh(e, i) {
    Wm(e, i), (e = e.alternate) && Wm(e, i);
  }
  function Jm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var i = is(e, 67108864);
      i !== null && je(i, e, 67108864), kh(e, 67108864);
    }
  }
  function ty(e) {
    if (e.tag === 13 || e.tag === 31) {
      var i = nn();
      i = pc(i);
      var a = is(e, i);
      a !== null && je(a, e, i), kh(e, i);
    }
  }
  var Ta = !0;
  function yA(e, i, a, o) {
    var h = st.T;
    st.T = null;
    var f = ut.p;
    try {
      ut.p = 2, Bh(e, i, a, o);
    } finally {
      ut.p = f, st.T = h;
    }
  }
  function vA(e, i, a, o) {
    var h = st.T;
    st.T = null;
    var f = ut.p;
    try {
      ut.p = 8, Bh(e, i, a, o);
    } finally {
      ut.p = f, st.T = h;
    }
  }
  function Bh(e, i, a, o) {
    if (Ta) {
      var h = Ph(o);
      if (h === null)
        mh(
          e,
          i,
          o,
          Al,
          a
        ), ny(e, o);
      else if (AA(
        h,
        e,
        i,
        a,
        o
      ))
        o.stopPropagation();
      else if (ny(e, o), i & 4 && -1 < bA.indexOf(e)) {
        for (; h !== null; ) {
          var f = Is(h);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                  var b = Wi(f.pendingLanes);
                  if (b !== 0) {
                    var T = f;
                    for (T.pendingLanes |= 2, T.entangledLanes |= 2; b; ) {
                      var x = 1 << 31 - Qe(b);
                      T.entanglements[1] |= x, b &= ~x;
                    }
                    Xn(f), (It & 6) === 0 && (al = qe() + 500, Ar(0));
                  }
                }
                break;
              case 31:
              case 13:
                T = is(f, 2), T !== null && je(T, f, 2), ll(), kh(f, 2);
            }
          if (f = Ph(o), f === null && mh(
            e,
            i,
            o,
            Al,
            a
          ), f === h) break;
          h = f;
        }
        h !== null && o.stopPropagation();
      } else
        mh(
          e,
          i,
          o,
          null,
          a
        );
    }
  }
  function Ph(e) {
    return e = Sc(e), Ih(e);
  }
  var Al = null;
  function Ih(e) {
    if (Al = null, e = Ji(e), e !== null) {
      var i = l(e);
      if (i === null) e = null;
      else {
        var a = i.tag;
        if (a === 13) {
          if (e = c(i), e !== null) return e;
          e = null;
        } else if (a === 31) {
          if (e = u(i), e !== null) return e;
          e = null;
        } else if (a === 3) {
          if (i.stateNode.current.memoizedState.isDehydrated)
            return i.tag === 3 ? i.stateNode.containerInfo : null;
          e = null;
        } else i !== e && (e = null);
      }
    }
    return Al = e, null;
  }
  function ey(e) {
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
        switch (N0()) {
          case zd:
            return 2;
          case Ud:
            return 8;
          case Wr:
          case R0:
            return 32;
          case Hd:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Fh = !1, ji = null, Vi = null, Yi = null, Mr = /* @__PURE__ */ new Map(), Dr = /* @__PURE__ */ new Map(), Xi = [], bA = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function ny(e, i) {
    switch (e) {
      case "focusin":
      case "focusout":
        ji = null;
        break;
      case "dragenter":
      case "dragleave":
        Vi = null;
        break;
      case "mouseover":
      case "mouseout":
        Yi = null;
        break;
      case "pointerover":
      case "pointerout":
        Mr.delete(i.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Dr.delete(i.pointerId);
    }
  }
  function Or(e, i, a, o, h, f) {
    return e === null || e.nativeEvent !== f ? (e = {
      blockedOn: i,
      domEventName: a,
      eventSystemFlags: o,
      nativeEvent: f,
      targetContainers: [h]
    }, i !== null && (i = Is(i), i !== null && Jm(i)), e) : (e.eventSystemFlags |= o, i = e.targetContainers, h !== null && i.indexOf(h) === -1 && i.push(h), e);
  }
  function AA(e, i, a, o, h) {
    switch (i) {
      case "focusin":
        return ji = Or(
          ji,
          e,
          i,
          a,
          o,
          h
        ), !0;
      case "dragenter":
        return Vi = Or(
          Vi,
          e,
          i,
          a,
          o,
          h
        ), !0;
      case "mouseover":
        return Yi = Or(
          Yi,
          e,
          i,
          a,
          o,
          h
        ), !0;
      case "pointerover":
        var f = h.pointerId;
        return Mr.set(
          f,
          Or(
            Mr.get(f) || null,
            e,
            i,
            a,
            o,
            h
          )
        ), !0;
      case "gotpointercapture":
        return f = h.pointerId, Dr.set(
          f,
          Or(
            Dr.get(f) || null,
            e,
            i,
            a,
            o,
            h
          )
        ), !0;
    }
    return !1;
  }
  function iy(e) {
    var i = Ji(e.target);
    if (i !== null) {
      var a = l(i);
      if (a !== null) {
        if (i = a.tag, i === 13) {
          if (i = c(a), i !== null) {
            e.blockedOn = i, Kd(e.priority, function() {
              ty(a);
            });
            return;
          }
        } else if (i === 31) {
          if (i = u(a), i !== null) {
            e.blockedOn = i, Kd(e.priority, function() {
              ty(a);
            });
            return;
          }
        } else if (i === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Sl(e) {
    if (e.blockedOn !== null) return !1;
    for (var i = e.targetContainers; 0 < i.length; ) {
      var a = Ph(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var o = new a.constructor(
          a.type,
          a
        );
        Ac = o, a.target.dispatchEvent(o), Ac = null;
      } else
        return i = Is(a), i !== null && Jm(i), e.blockedOn = a, !1;
      i.shift();
    }
    return !0;
  }
  function sy(e, i, a) {
    Sl(e) && a.delete(i);
  }
  function SA() {
    Fh = !1, ji !== null && Sl(ji) && (ji = null), Vi !== null && Sl(Vi) && (Vi = null), Yi !== null && Sl(Yi) && (Yi = null), Mr.forEach(sy), Dr.forEach(sy);
  }
  function El(e, i) {
    e.blockedOn === i && (e.blockedOn = null, Fh || (Fh = !0, y.unstable_scheduleCallback(
      y.unstable_NormalPriority,
      SA
    )));
  }
  var Tl = null;
  function ay(e) {
    Tl !== e && (Tl = e, y.unstable_scheduleCallback(
      y.unstable_NormalPriority,
      function() {
        Tl === e && (Tl = null);
        for (var i = 0; i < e.length; i += 3) {
          var a = e[i], o = e[i + 1], h = e[i + 2];
          if (typeof o != "function") {
            if (Ih(o || a) === null)
              continue;
            break;
          }
          var f = Is(a);
          f !== null && (e.splice(i, 3), i -= 3, bu(
            f,
            {
              pending: !0,
              data: h,
              method: a.method,
              action: o
            },
            o,
            h
          ));
        }
      }
    ));
  }
  function _a(e) {
    function i(x) {
      return El(x, e);
    }
    ji !== null && El(ji, e), Vi !== null && El(Vi, e), Yi !== null && El(Yi, e), Mr.forEach(i), Dr.forEach(i);
    for (var a = 0; a < Xi.length; a++) {
      var o = Xi[a];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < Xi.length && (a = Xi[0], a.blockedOn === null); )
      iy(a), a.blockedOn === null && Xi.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (o = 0; o < a.length; o += 3) {
        var h = a[o], f = a[o + 1], b = h[Fe] || null;
        if (typeof f == "function")
          b || ay(a);
        else if (b) {
          var T = null;
          if (f && f.hasAttribute("formAction")) {
            if (h = f, b = f[Fe] || null)
              T = b.formAction;
            else if (Ih(h) !== null) continue;
          } else T = b.action;
          typeof T == "function" ? a[o + 1] = T : (a.splice(o, 3), o -= 3), ay(a);
        }
      }
  }
  function ry() {
    function e(f) {
      f.canIntercept && f.info === "react-transition" && f.intercept({
        handler: function() {
          return new Promise(function(b) {
            return h = b;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function i() {
      h !== null && (h(), h = null), o || setTimeout(a, 20);
    }
    function a() {
      if (!o && !navigation.transition) {
        var f = navigation.currentEntry;
        f && f.url != null && navigation.navigate(f.url, {
          state: f.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var o = !1, h = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", i), navigation.addEventListener("navigateerror", i), setTimeout(a, 100), function() {
        o = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", i), navigation.removeEventListener("navigateerror", i), h !== null && (h(), h = null);
      };
    }
  }
  function zh(e) {
    this._internalRoot = e;
  }
  _l.prototype.render = zh.prototype.render = function(e) {
    var i = this._internalRoot;
    if (i === null) throw Error(s(409));
    var a = i.current, o = nn();
    $m(a, o, e, i, null, null);
  }, _l.prototype.unmount = zh.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var i = e.containerInfo;
      $m(e.current, 2, null, e, null, null), ll(), i[Ps] = null;
    }
  };
  function _l(e) {
    this._internalRoot = e;
  }
  _l.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var i = qd();
      e = { blockedOn: null, target: e, priority: i };
      for (var a = 0; a < Xi.length && i !== 0 && i < Xi[a].priority; a++) ;
      Xi.splice(a, 0, e), a === 0 && iy(e);
    }
  };
  var oy = t.version;
  if (oy !== "19.3.0")
    throw Error(
      s(
        527,
        oy,
        "19.3.0"
      )
    );
  ut.findDOMNode = function(e) {
    var i = e._reactInternals;
    if (i === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = p(i), e = e !== null ? g(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var EA = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: st,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!wl.isDisabled && wl.supportsFiber)
      try {
        Fa = wl.inject(
          EA
        ), Ke = wl;
      } catch {
      }
  }
  return Nr.createRoot = function(e, i) {
    if (!r(e)) throw Error(s(299));
    var a = !1, o = "", h = Zp, f = $p, b = Wp;
    return i != null && (i.unstable_strictMode === !0 && (a = !0), i.identifierPrefix !== void 0 && (o = i.identifierPrefix), i.onUncaughtError !== void 0 && (h = i.onUncaughtError), i.onCaughtError !== void 0 && (f = i.onCaughtError), i.onRecoverableError !== void 0 && (b = i.onRecoverableError)), i = Qm(
      e,
      1,
      !1,
      null,
      null,
      a,
      o,
      null,
      h,
      f,
      b,
      ry
    ), e[Ps] = i.current, gh(e), new zh(i);
  }, Nr.hydrateRoot = function(e, i, a) {
    if (!r(e)) throw Error(s(299));
    var o = !1, h = "", f = Zp, b = $p, T = Wp, x = null;
    return a != null && (a.unstable_strictMode === !0 && (o = !0), a.identifierPrefix !== void 0 && (h = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (b = a.onCaughtError), a.onRecoverableError !== void 0 && (T = a.onRecoverableError), a.formState !== void 0 && (x = a.formState)), i = Qm(
      e,
      1,
      !0,
      i,
      a ?? null,
      o,
      h,
      x,
      f,
      b,
      T,
      ry
    ), i.context = Zm(null), a = i.current, o = nn(), o = pc(o), h = Oi(o), h.callback = null, Ni(a, h, o), a = o, i.current.lanes = a, Ua(i, a), Xn(i), e[Ps] = i.current, gh(e), new _l(i);
  }, Nr.version = "19.3.0", Nr;
}
var yy;
function NA() {
  if (yy) return Gh.exports;
  yy = 1;
  function y() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y);
      } catch (t) {
        console.error(t);
      }
  }
  return y(), Gh.exports = OA(), Gh.exports;
}
var X1 = NA();
const on = typeof process == "object" && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser"), vi = [1 / 0, 1 / 0, -1 / 0, -1 / 0], _s = new Float32Array(vi), Jh = [1e-3, 0, 0, 1e-3, 0, 0], Pe = "http://www.w3.org/2000/svg", an = {
  ANY: 1,
  DISPLAY: 2,
  PRINT: 4,
  ANNOTATIONS_FORMS: 16,
  ANNOTATIONS_STORAGE: 32,
  ANNOTATIONS_DISABLE: 64,
  IS_EDITING: 128,
  OPLIST: 256
}, Ki = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
}, Da = "pdfjs_internal_id_", La = "pdfjs_internal_editor_", pt = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15,
  POPUP: 16,
  SIGNATURE: 101,
  COMMENT: 102
}, Mt = {
  RESIZE: 1,
  CREATE: 2,
  FREETEXT_SIZE: 11,
  FREETEXT_COLOR: 12,
  FREETEXT_OPACITY: 13,
  INK_COLOR: 21,
  INK_THICKNESS: 22,
  INK_OPACITY: 23,
  INK_COLOR_AND_OPACITY: 24,
  HIGHLIGHT_COLOR: 31,
  HIGHLIGHT_THICKNESS: 32,
  HIGHLIGHT_FREE: 33,
  HIGHLIGHT_SHOW_ALL: 34,
  DRAW_STEP: 41
}, RA = {
  PRINT: 4,
  MODIFY_CONTENTS: 8,
  COPY: 16,
  MODIFY_ANNOTATIONS: 32,
  FILL_INTERACTIVE_FORMS: 256,
  COPY_FOR_ACCESSIBILITY: 512,
  ASSEMBLE: 1024,
  PRINT_HIGH_QUALITY: 2048
}, pe = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
}, Pl = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
}, ne = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26,
  RICHMEDIA: 27
}, Ca = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
}, Xl = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
}, Jn = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91,
  setStrokeTransparent: 92,
  setFillTransparent: 93,
  rawFillPath: 94
}, Rr = {
  moveTo: 0,
  lineTo: 1,
  curveTo: 2,
  quadraticCurveTo: 3,
  closePath: 4
}, LA = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
let ql = Xl.WARNINGS;
function kA(y) {
  Number.isInteger(y) && (ql = y);
}
function BA() {
  return ql;
}
function Kl(y) {
  ql >= Xl.INFOS && console.info(`Info: ${y}`);
}
function yt(y) {
  ql >= Xl.WARNINGS && console.warn(`Warning: ${y}`);
}
function kt(y) {
  throw new Error(y);
}
function ie(y, t) {
  y || kt(t);
}
function PA(y) {
  switch (y?.protocol) {
    case "http:":
    case "https:":
    case "ftp:":
    case "mailto:":
    case "tel:":
      return !0;
    default:
      return !1;
  }
}
function Qy(y, t = null, n = null) {
  if (!y)
    return null;
  if (n && typeof y == "string" && (n.addDefaultProtocol && y.startsWith("www.") && y.match(/\./g)?.length >= 2 && (y = `http://${y}`), n.tryConvertEncoding))
    try {
      y = zA(y);
    } catch {
    }
  const s = t ? URL.parse(y, t) : URL.parse(y);
  return PA(s) ? s : null;
}
function Zy(y, t, n = !1) {
  const s = URL.parse(y);
  return s ? (s.hash = t, s.href) : n && Qy(y, "http://example.com") ? y.split("#", 1)[0] + `${t ? `#${t}` : ""}` : "";
}
function td(y) {
  return y.substring(y.lastIndexOf("/") + 1);
}
function lt(y, t, n, s = !1) {
  return Object.defineProperty(y, t, {
    value: n,
    enumerable: !s,
    configurable: !0,
    writable: !1
  }), n;
}
const Rs = (function() {
  function t(n, s) {
    this.message = n, this.name = s;
  }
  return t.prototype = new Error(), t.constructor = t, t;
})();
class ed extends Rs {
  constructor(t, n) {
    super(t, "PasswordException"), this.code = n;
  }
}
class Xh extends Rs {
  constructor(t, n) {
    super(t, "UnknownErrorException"), this.details = n;
  }
}
class nd extends Rs {
  constructor(t) {
    super(t, "InvalidPDFException");
  }
}
class Ul extends Rs {
  constructor(t, n, s) {
    super(t, "ResponseException"), this.status = n, this.missing = s;
  }
}
class IA extends Rs {
  constructor(t) {
    super(t, "FormatError");
  }
}
class Zi extends Rs {
  constructor(t) {
    super(t, "AbortException");
  }
}
function FA(y) {
  (typeof y != "object" || y?.length === void 0) && kt("Invalid argument for bytesToString");
  const t = y.length, n = 8192;
  if (t < n)
    return String.fromCharCode.apply(null, y);
  const s = [];
  for (let r = 0; r < t; r += n) {
    const l = Math.min(r + n, t), c = y.subarray(r, l);
    s.push(String.fromCharCode.apply(null, c));
  }
  return s.join("");
}
function Ql(y) {
  typeof y != "string" && kt("Invalid argument for stringToBytes");
  const t = y.length, n = new Uint8Array(t);
  for (let s = 0; s < t; ++s)
    n[s] = y.charCodeAt(s) & 255;
  return n;
}
class Yt {
  static get isLittleEndian() {
    const t = new Uint8Array(4);
    t[0] = 1;
    const n = new Uint32Array(t.buffer, 0, 1);
    return lt(this, "isLittleEndian", n[0] === 1);
  }
  static get isOffscreenCanvasSupported() {
    return lt(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
  }
  static get isImageDecoderSupported() {
    return lt(this, "isImageDecoderSupported", typeof ImageDecoder < "u");
  }
  static get isFloat16ArraySupported() {
    return lt(this, "isFloat16ArraySupported", typeof Float16Array < "u");
  }
  static get isSanitizerSupported() {
    return lt(this, "isSanitizerSupported", typeof Sanitizer < "u");
  }
  static get platform() {
    const {
      platform: t,
      userAgent: n
    } = navigator;
    return lt(this, "platform", {
      isAndroid: n.includes("Android"),
      isLinux: t.includes("Linux"),
      isMac: t.includes("Mac"),
      isWindows: t.includes("Win"),
      isFirefox: n.includes("Firefox")
    });
  }
  static get isCanvasFilterSupported() {
    let t;
    return this.isOffscreenCanvasSupported ? t = new OffscreenCanvas(1, 1).getContext("2d") : typeof document < "u" && (t = document.createElement("canvas").getContext("2d")), lt(this, "isCanvasFilterSupported", t?.filter !== void 0);
  }
  static get isAlphaColorInputSupported() {
    if (typeof document > "u")
      return lt(this, "isAlphaColorInputSupported", !1);
    const t = document.createElement("input");
    return t.type = "color", t.setAttribute("alpha", ""), t.value = "#ff000080", lt(this, "isAlphaColorInputSupported", t.value !== "#ff0000");
  }
  static get isBackdropFilterSupported() {
    return lt(this, "isBackdropFilterSupported", typeof CSS < "u" && CSS.supports("backdrop-filter", "blur(1px)"));
  }
}
class K {
  static get hexNums() {
    return lt(this, "hexNums", Array.from({
      length: 256
    }, (t, n) => n.toString(16).padStart(2, "0")));
  }
  static makeHexColor(t, n, s) {
    return `#${this.hexNums[t]}${this.hexNums[n]}${this.hexNums[s]}`;
  }
  static transform(t, n) {
    return [t[0] * n[0] + t[2] * n[1], t[1] * n[0] + t[3] * n[1], t[0] * n[2] + t[2] * n[3], t[1] * n[2] + t[3] * n[3], t[0] * n[4] + t[2] * n[5] + t[4], t[1] * n[4] + t[3] * n[5] + t[5]];
  }
  static multiplyByDOMMatrix(t, n) {
    return [t[0] * n.a + t[2] * n.b, t[1] * n.a + t[3] * n.b, t[0] * n.c + t[2] * n.d, t[1] * n.c + t[3] * n.d, t[0] * n.e + t[2] * n.f + t[4], t[1] * n.e + t[3] * n.f + t[5]];
  }
  static applyTransform(t, n, s = 0) {
    const r = t[s], l = t[s + 1];
    t[s] = r * n[0] + l * n[2] + n[4], t[s + 1] = r * n[1] + l * n[3] + n[5];
  }
  static applyTransformToBezier(t, n, s = 0) {
    const r = n[0], l = n[1], c = n[2], u = n[3], d = n[4], p = n[5];
    for (let g = 0; g < 6; g += 2) {
      const m = t[s + g], v = t[s + g + 1];
      t[s + g] = m * r + v * c + d, t[s + g + 1] = m * l + v * u + p;
    }
  }
  static applyInverseTransform(t, n) {
    const s = t[0], r = t[1], l = n[0] * n[3] - n[1] * n[2];
    t[0] = (s * n[3] - r * n[2] + n[2] * n[5] - n[4] * n[3]) / l, t[1] = (-s * n[1] + r * n[0] + n[4] * n[1] - n[5] * n[0]) / l;
  }
  static axialAlignedBoundingBox(t, n, s) {
    const r = n[0], l = n[1], c = n[2], u = n[3], d = n[4], p = n[5], g = t[0], m = t[1], v = t[2], A = t[3];
    let S = r * g + d, E = S, _ = r * v + d, w = _, C = u * m + p, M = C, B = u * A + p, N = B;
    if (l !== 0 || c !== 0) {
      const P = l * g, U = l * v, j = c * m, q = c * A;
      S += j, w += j, _ += q, E += q, C += P, N += P, B += U, M += U;
    }
    s[0] = Math.min(s[0], S, _, E, w), s[1] = Math.min(s[1], C, B, M, N), s[2] = Math.max(s[2], S, _, E, w), s[3] = Math.max(s[3], C, B, M, N);
  }
  static inverseTransform(t) {
    const n = t[0] * t[3] - t[1] * t[2];
    return [t[3] / n, -t[1] / n, -t[2] / n, t[0] / n, (t[2] * t[5] - t[4] * t[3]) / n, (t[4] * t[1] - t[5] * t[0]) / n];
  }
  static singularValueDecompose2dScale(t, n) {
    const s = t[0], r = t[1], l = t[2], c = t[3], u = s ** 2 + r ** 2, d = s * l + r * c, p = l ** 2 + c ** 2, g = (u + p) / 2, m = Math.sqrt(g ** 2 - (u * p - d ** 2));
    n[0] = Math.sqrt(g + m || 1), n[1] = Math.sqrt(g - m || 1);
  }
  static normalizeRect(t) {
    const n = t.slice(0);
    return t[0] > t[2] && (n[0] = t[2], n[2] = t[0]), t[1] > t[3] && (n[1] = t[3], n[3] = t[1]), n;
  }
  static intersect(t, n) {
    const s = Math.max(Math.min(t[0], t[2]), Math.min(n[0], n[2])), r = Math.min(Math.max(t[0], t[2]), Math.max(n[0], n[2]));
    if (s > r)
      return null;
    const l = Math.max(Math.min(t[1], t[3]), Math.min(n[1], n[3])), c = Math.min(Math.max(t[1], t[3]), Math.max(n[1], n[3]));
    return l > c ? null : [s, l, r, c];
  }
  static pointBoundingBox(t, n, s) {
    s[0] = Math.min(s[0], t), s[1] = Math.min(s[1], n), s[2] = Math.max(s[2], t), s[3] = Math.max(s[3], n);
  }
  static rectBoundingBox(t, n, s, r, l) {
    l[0] = Math.min(l[0], t, s), l[1] = Math.min(l[1], n, r), l[2] = Math.max(l[2], t, s), l[3] = Math.max(l[3], n, r);
  }
  static #t(t, n, s, r, l, c, u, d, p, g) {
    if (p <= 0 || p >= 1)
      return;
    const m = 1 - p, v = p * p, A = v * p, S = m * (m * (m * t + 3 * p * n) + 3 * v * s) + A * r, E = m * (m * (m * l + 3 * p * c) + 3 * v * u) + A * d;
    g[0] = Math.min(g[0], S), g[1] = Math.min(g[1], E), g[2] = Math.max(g[2], S), g[3] = Math.max(g[3], E);
  }
  static #e(t, n, s, r, l, c, u, d, p, g, m, v) {
    if (Math.abs(p) < 1e-12) {
      Math.abs(g) >= 1e-12 && this.#t(t, n, s, r, l, c, u, d, -m / g, v);
      return;
    }
    const A = g ** 2 - 4 * m * p;
    if (A < 0)
      return;
    const S = Math.sqrt(A), E = 2 * p;
    this.#t(t, n, s, r, l, c, u, d, (-g + S) / E, v), this.#t(t, n, s, r, l, c, u, d, (-g - S) / E, v);
  }
  static bezierBoundingBox(t, n, s, r, l, c, u, d, p) {
    p[0] = Math.min(p[0], t, u), p[1] = Math.min(p[1], n, d), p[2] = Math.max(p[2], t, u), p[3] = Math.max(p[3], n, d), this.#e(t, s, l, u, n, r, c, d, 3 * (-t + 3 * (s - l) + u), 6 * (t - 2 * s + l), 3 * (s - t), p), this.#e(t, s, l, u, n, r, c, d, 3 * (-n + 3 * (r - c) + d), 6 * (n - 2 * r + c), 3 * (r - n), p);
  }
}
function zA(y) {
  return decodeURIComponent(escape(y));
}
let qh = null, vy = null;
function UA(y) {
  return qh || (qh = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, vy = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), y.replaceAll(qh, (t, n, s) => n ? n.normalize("NFKC") : vy.get(s));
}
function $y() {
  if (typeof crypto.randomUUID == "function")
    return crypto.randomUUID();
  const y = new Uint8Array(32);
  return crypto.getRandomValues(y), FA(y);
}
function HA(y, t, n) {
  if (!Array.isArray(n) || n.length < 2)
    return !1;
  const [s, r, ...l] = n;
  if (!y(s) && !Number.isInteger(s) || !t(r))
    return !1;
  const c = l.length;
  let u = !0;
  switch (r.name) {
    case "XYZ":
      if (c < 2 || c > 3)
        return !1;
      break;
    case "Fit":
    case "FitB":
      return c === 0;
    case "FitH":
    case "FitBH":
    case "FitV":
    case "FitBV":
      if (c > 1)
        return !1;
      break;
    case "FitR":
      if (c !== 4)
        return !1;
      u = !1;
      break;
    default:
      return !1;
  }
  for (const d of l)
    if (!(typeof d == "number" || u && d === null))
      return !1;
  return !0;
}
const Ba = () => [], md = () => /* @__PURE__ */ new Map(), id = () => /* @__PURE__ */ Object.create(null), GA = () => /* @__PURE__ */ new Set();
typeof Iterator.prototype.join != "function" && (Iterator.prototype.join = function(y) {
  return [...this].join(y);
});
function $t(y, t, n) {
  return Math.min(Math.max(y, t), n);
}
class Yr {
  constructor({
    viewBox: t,
    userUnit: n,
    scale: s,
    rotation: r,
    offsetX: l = 0,
    offsetY: c = 0,
    dontFlip: u = !1
  }) {
    this.viewBox = t, this.userUnit = n, this.scale = s, this.rotation = r, this.offsetX = l, this.offsetY = c, s *= n;
    const d = (t[2] + t[0]) / 2, p = (t[3] + t[1]) / 2;
    let g, m, v, A;
    switch (r %= 360, r < 0 && (r += 360), r) {
      case 180:
        g = -1, m = 0, v = 0, A = 1;
        break;
      case 90:
        g = 0, m = 1, v = 1, A = 0;
        break;
      case 270:
        g = 0, m = -1, v = -1, A = 0;
        break;
      case 0:
        g = 1, m = 0, v = 0, A = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    u && (v = -v, A = -A);
    let S, E, _, w;
    g === 0 ? (S = Math.abs(p - t[1]) * s + l, E = Math.abs(d - t[0]) * s + c, _ = (t[3] - t[1]) * s, w = (t[2] - t[0]) * s) : (S = Math.abs(d - t[0]) * s + l, E = Math.abs(p - t[1]) * s + c, _ = (t[2] - t[0]) * s, w = (t[3] - t[1]) * s), this.transform = [g * s, m * s, v * s, A * s, S - g * s * d - v * s * p, E - m * s * d - A * s * p], this.width = _, this.height = w;
  }
  get rawDims() {
    const t = this.viewBox;
    return lt(this, "rawDims", {
      pageWidth: t[2] - t[0],
      pageHeight: t[3] - t[1],
      pageX: t[0],
      pageY: t[1]
    });
  }
  clone({
    scale: t = this.scale,
    rotation: n = this.rotation,
    offsetX: s = this.offsetX,
    offsetY: r = this.offsetY,
    dontFlip: l = !1
  } = {}) {
    return new Yr({
      viewBox: this.viewBox.slice(),
      userUnit: this.userUnit,
      scale: t,
      rotation: n,
      offsetX: s,
      offsetY: r,
      dontFlip: l
    });
  }
  convertToViewportPoint(t, n) {
    const s = [t, n];
    return K.applyTransform(s, this.transform), s;
  }
  convertToPdfPoint(t, n) {
    const s = [t, n];
    return K.applyInverseTransform(s, this.transform), s;
  }
}
class Ur {
  static textContent(t) {
    const n = [], s = {
      items: n,
      styles: /* @__PURE__ */ Object.create(null)
    };
    function r(l) {
      if (!l)
        return;
      let c = null;
      const u = l.name;
      if (u === "#text")
        c = l.value;
      else if (Ur.shouldBuildText(u))
        l?.attributes?.textContent ? c = l.attributes.textContent : l.value && (c = l.value);
      else return;
      if (c !== null && n.push({
        str: c
      }), !!l.children)
        for (const d of l.children)
          r(d);
    }
    return r(t), s;
  }
  static shouldBuildText(t) {
    return !(t === "textarea" || t === "input" || t === "option" || t === "select");
  }
}
const jA = /url\(|image-set\(/i, VA = /^on/i;
class Wy {
  static get _allowedHtmlElements() {
    return lt(this, "_allowedHtmlElements", /* @__PURE__ */ new Set(["a", "b", "br", "button", "div", "i", "img", "input", "label", "li", "ol", "option", "p", "select", "span", "sub", "sup", "textarea", "ul"]));
  }
  static get _allowedSvgElements() {
    return lt(this, "_allowedSvgElements", /* @__PURE__ */ new Set(["ellipse", "line", "path", "rect", "svg"]));
  }
  static get _allowedRichTextElements() {
    return lt(this, "_allowedRichTextElements", /* @__PURE__ */ new Set(["a", "b", "br", "div", "i", "li", "ol", "p", "span", "sub", "sup", "ul"]));
  }
  static get _allowedRichTextAttributes() {
    return lt(this, "_allowedRichTextAttributes", /* @__PURE__ */ new Set(["class", "dir", "style"]));
  }
  static get _allowedRichTextStyles() {
    return lt(this, "_allowedRichTextStyles", /* @__PURE__ */ new Set(["color", "font", "fontFamily", "fontSize", "fontStretch", "fontStyle", "fontWeight", "kerningMode", "letterSpacing", "lineHeight", "margin", "marginBottom", "marginLeft", "marginRight", "marginTop", "orphans", "paddingLeft", "paddingRight", "breakAfter", "breakBefore", "breakInside", "tabInterval", "tabStop", "textAlign", "textDecoration", "textIndent", "transform", "verticalAlign", "widows"]));
  }
  static setupStorage(t, n, s, r, l) {
    const c = r.getValue(n, {
      value: null
    });
    switch (s.name) {
      case "textarea":
        if (c.value !== null && (t.textContent = c.value), l === "print")
          break;
        t.addEventListener("input", (u) => {
          r.setValue(n, {
            value: u.target.value
          });
        });
        break;
      case "input":
        if (s.attributes.type === "radio" || s.attributes.type === "checkbox") {
          if (c.value === s.attributes.xfaOn ? t.setAttribute("checked", !0) : c.value === s.attributes.xfaOff && t.removeAttribute("checked"), l === "print")
            break;
          t.addEventListener("change", (u) => {
            r.setValue(n, {
              value: u.target.checked ? u.target.getAttribute("xfaOn") : u.target.getAttribute("xfaOff")
            });
          });
        } else {
          if (c.value !== null && t.setAttribute("value", c.value), l === "print")
            break;
          t.addEventListener("input", (u) => {
            r.setValue(n, {
              value: u.target.value
            });
          });
        }
        break;
      case "select":
        if (c.value !== null) {
          t.setAttribute("value", c.value);
          for (const u of s.children)
            u.attributes.value === c.value ? u.attributes.selected = !0 : Object.hasOwn(u.attributes, "selected") && delete u.attributes.selected;
        }
        t.addEventListener("input", (u) => {
          const d = u.target.options, p = d.selectedIndex === -1 ? "" : d[d.selectedIndex].value;
          r.setValue(n, {
            value: p
          });
        });
        break;
    }
  }
  static setAttributes({
    html: t,
    element: n,
    storage: s = null,
    intent: r,
    linkService: l
  }) {
    const {
      attributes: c
    } = n, u = t instanceof HTMLAnchorElement;
    c.type === "radio" && (c.name = `${c.name}-${r}`);
    for (const [d, p] of Object.entries(c))
      if (p != null && !VA.test(d) && !(r === "richText" && !this._allowedRichTextAttributes.has(d)))
        switch (d) {
          case "class":
            p.length && t.setAttribute(d, p.join(" "));
            break;
          case "dataId":
            break;
          case "id":
            t.setAttribute("data-element-id", p);
            break;
          case "style":
            if (r === "richText") {
              const g = this._allowedRichTextStyles;
              for (const [m, v] of Object.entries(p))
                g.has(m) && !jA.test(v) && (t.style[m] = v);
            } else
              Object.assign(t.style, p);
            break;
          case "textContent":
            t.textContent = p;
            break;
          default:
            (!u || d !== "href" && d !== "newWindow") && t.setAttribute(d, p);
        }
    u && l?.addLinkAttributes(t, c.href, c.newWindow), s && c.dataId && this.setupStorage(t, c.dataId, n, s);
  }
  static #t(t, n, s) {
    return s === "richText" ? !n && this._allowedRichTextElements.has(t) ? document.createElement(t) : null : n ? n === Pe && this._allowedSvgElements.has(t) ? document.createElementNS(Pe, t) : null : this._allowedHtmlElements.has(t) ? document.createElement(t) : null;
  }
  static render(t) {
    const n = t.annotationStorage, s = t.linkService, r = t.xfaHtml, l = t.intent || "display", c = this.#t(r.name, r.attributes?.xmlns, l) ?? document.createElement("div");
    r.attributes && this.setAttributes({
      html: c,
      element: r,
      intent: l,
      linkService: s
    });
    const u = l !== "richText", d = t.div;
    if (d.append(c), t.viewport) {
      const m = `matrix(${t.viewport.transform.join(",")})`;
      d.style.transform = m;
    }
    u && d.setAttribute("class", "xfaLayer xfaFont");
    const p = [];
    if (r.children.length === 0) {
      if (r.value) {
        const m = document.createTextNode(r.value);
        c.append(m), u && Ur.shouldBuildText(r.name) && p.push(m);
      }
      return {
        textDivs: p
      };
    }
    const g = [[r, -1, c]];
    for (; g.length > 0; ) {
      const [m, v, A] = g.at(-1);
      if (v + 1 === m.children.length) {
        g.pop();
        continue;
      }
      const S = m.children[++g.at(-1)[1]];
      if (S === null)
        continue;
      const {
        name: E
      } = S;
      if (E === "#text") {
        const w = document.createTextNode(S.value);
        p.push(w), A.append(w);
        continue;
      }
      const _ = this.#t(E, S.attributes?.xmlns, l);
      if (_) {
        if (A.append(_), S.attributes && this.setAttributes({
          html: _,
          element: S,
          storage: n,
          intent: l,
          linkService: s
        }), S.children?.length > 0)
          g.push([S, -1, _]);
        else if (S.value) {
          const w = document.createTextNode(S.value);
          u && Ur.shouldBuildText(E) && p.push(w), _.append(w);
        }
      }
    }
    for (const m of d.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
      m.setAttribute("readOnly", !0);
    return {
      textDivs: p
    };
  }
  static update(t) {
    const n = `matrix(${t.viewport.transform.join(",")})`;
    t.div.style.transform = n, t.div.hidden = !1;
  }
  static getPageViewport(t, {
    scale: n = 1,
    rotation: s = 0
  }) {
    const {
      width: r,
      height: l
    } = t.attributes.style;
    return new Yr({
      viewBox: [0, 0, parseInt(r, 10), parseInt(l, 10)],
      userUnit: 1,
      scale: n,
      rotation: s
    });
  }
}
class ka {
  static CSS = 96;
  static PDF = 72;
  static PDF_TO_CSS_UNITS = this.CSS / this.PDF;
}
async function yd(y, t = "text") {
  if (Ir(y, document.baseURI)) {
    const n = await fetch(y);
    if (!n.ok)
      throw new Error(n.statusText);
    switch (t) {
      case "blob":
        return n.blob();
      case "bytes":
        return n.bytes();
      case "json":
        return n.json();
    }
    return n.text();
  }
  return new Promise((n, s) => {
    const r = new XMLHttpRequest();
    r.open("GET", y, !0), r.responseType = t === "bytes" ? "arraybuffer" : t, r.onreadystatechange = () => {
      if (r.readyState === XMLHttpRequest.DONE) {
        if (r.status === 200 || r.status === 0) {
          switch (t) {
            case "bytes":
              n(new Uint8Array(r.response));
              return;
            case "blob":
            case "json":
              n(r.response);
              return;
          }
          n(r.responseText);
          return;
        }
        s(new Error(r.statusText));
      }
    }, r.send(null);
  });
}
class vd extends Rs {
  constructor(t, n = 0) {
    super(t, "RenderingCancelledException"), this.extraDelay = n;
  }
}
function Zl(y) {
  const t = y.length;
  let n = 0;
  for (; n < t && y[n].trim() === ""; )
    n++;
  return y.substring(n, n + 5).toLowerCase() === "data:";
}
function bd(y) {
  return typeof y == "string" && /\.pdf$/i.test(y);
}
function YA(y) {
  return [y] = y.split(/[#?]/, 1), td(y);
}
function XA(y, t = "document.pdf") {
  if (typeof y != "string")
    return t;
  if (Zl(y))
    return yt('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), t;
  const s = ((u) => {
    try {
      return new URL(u);
    } catch {
    }
    try {
      return new URL(decodeURIComponent(u));
    } catch {
    }
    try {
      return new URL(u, "https://foo.bar");
    } catch {
    }
    try {
      return new URL(decodeURIComponent(u), "https://foo.bar");
    } catch {
    }
    return null;
  })(y);
  if (!s)
    return t;
  const r = (u) => {
    try {
      let d = decodeURIComponent(u);
      return d.includes("/") && (d = td(d), d.length === 4 && l.test(d)) ? u : d;
    } catch {
      return u;
    }
  }, l = /\.pdf$/i, c = td(s.pathname);
  if (l.test(c))
    return r(c);
  if (s.searchParams.size > 0) {
    const u = (p) => [...p].findLast((g) => l.test(g)), d = u(s.searchParams.values()) ?? u(s.searchParams.keys());
    if (d)
      return r(d);
  }
  if (s.hash) {
    const {
      hash: u
    } = s;
    let d = -1;
    for (const {
      index: p
    } of u.matchAll(/\.pdf\b/gi))
      d = p;
    if (d > 0) {
      let p = d;
      for (; p > 0 && !"/?#=".includes(u[p - 1]); )
        p--;
      if (p < d)
        return r(u.slice(p, d + 4));
    }
  }
  return t;
}
class by {
  #t = /* @__PURE__ */ new Map();
  times = [];
  time(t) {
    this.#t.has(t) && yt(`Timer is already running for ${t}`), this.#t.set(t, Date.now());
  }
  timeEnd(t) {
    this.#t.has(t) || yt(`Timer has not been started for ${t}`), this.times.push({
      name: t,
      start: this.#t.get(t),
      end: Date.now()
    }), this.#t.delete(t);
  }
  toString() {
    const t = Math.max(...this.times.map((n) => n.name.length));
    return this.times.map((n) => `${n.name.padEnd(t)} ${n.end - n.start}ms
`).join("");
  }
}
function Ir(y, t) {
  const n = t ? URL.parse(y, t) : URL.parse(y);
  return /https?:/.test(n?.protocol ?? "");
}
function Rn(y) {
  y.preventDefault();
}
function ge(y) {
  y.preventDefault(), y.stopPropagation();
}
class sd {
  static #t;
  static toDateObject(t) {
    if (t instanceof Date)
      return t;
    if (!t || typeof t != "string")
      return null;
    this.#t ||= new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+\\-])?(\\d{2})?'?(\\d{2})?'?");
    const n = this.#t.exec(t);
    if (!n)
      return null;
    const s = parseInt(n[1], 10);
    let r = parseInt(n[2], 10);
    r = r >= 1 && r <= 12 ? r - 1 : 0;
    let l = parseInt(n[3], 10);
    l = l >= 1 && l <= 31 ? l : 1;
    let c = parseInt(n[4], 10);
    c = c >= 0 && c <= 23 ? c : 0;
    let u = parseInt(n[5], 10);
    u = u >= 0 && u <= 59 ? u : 0;
    let d = parseInt(n[6], 10);
    d = d >= 0 && d <= 59 ? d : 0;
    const p = n[7] || "Z";
    let g = parseInt(n[8], 10);
    g = g >= 0 && g <= 23 ? g : 0;
    let m = parseInt(n[9], 10) || 0;
    return m = m >= 0 && m <= 59 ? m : 0, p === "-" ? (c += g, u += m) : p === "+" && (c -= g, u -= m), new Date(Date.UTC(s, r, l, c, u, d));
  }
}
function Xr(y) {
  if (y.startsWith("#")) {
    const n = y.slice(1);
    return [parseInt(n.slice(0, 2), 16), parseInt(n.slice(2, 4), 16), parseInt(n.slice(4, 6), 16), n.length >= 8 ? parseInt(n.slice(6, 8), 16) / 255 : 1];
  }
  if (y.startsWith("rgb(")) {
    const [n, s, r] = y.slice(4, -1).split(",").map((l) => parseInt(l, 10));
    return [n, s, r, 1];
  }
  if (y.startsWith("rgba(")) {
    const n = y.slice(5, -1).split(",");
    return [parseInt(n[0], 10), parseInt(n[1], 10), parseInt(n[2], 10), parseFloat(n[3])];
  }
  const t = y.match(/^color\(srgb\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+|none))?\)$/);
  return t ? [Math.round(parseFloat(t[1]) * 255), Math.round(parseFloat(t[2]) * 255), Math.round(parseFloat(t[3]) * 255), t[4] !== void 0 && t[4] !== "none" ? parseFloat(t[4]) : 1] : null;
}
function qr(y) {
  const t = Xr(y);
  return t ? t.slice(0, 3) : (yt(`Not a valid color format: "${y}"`), [0, 0, 0]);
}
function qA(y) {
  const t = document.createElement("span");
  t.style.visibility = "hidden", t.style.colorScheme = "only light", document.body.append(t);
  for (const n of y.keys()) {
    t.style.color = n;
    const s = window.getComputedStyle(t).color;
    y.set(n, qr(s));
  }
  t.remove();
}
function Zt(y) {
  const {
    a: t,
    b: n,
    c: s,
    d: r,
    e: l,
    f: c
  } = y.getTransform();
  return [t, n, s, r, l, c];
}
function Qn(y) {
  const {
    a: t,
    b: n,
    c: s,
    d: r,
    e: l,
    f: c
  } = y.getTransform().invertSelf();
  return [t, n, s, r, l, c];
}
function Os(y, t, n = !1, s = !0) {
  if (t instanceof Yr) {
    const {
      pageWidth: r,
      pageHeight: l
    } = t.rawDims, {
      style: c
    } = y, u = `round(down, var(--total-scale-factor) * ${r}px, var(--scale-round-x))`, d = `round(down, var(--total-scale-factor) * ${l}px, var(--scale-round-y))`;
    !n || t.rotation % 180 === 0 ? (c.width = u, c.height = d) : (c.width = d, c.height = u);
  }
  s && y.setAttribute("data-main-rotation", t.rotation);
}
class Ln {
  constructor() {
    const {
      pixelRatio: t
    } = Ln;
    this.sx = t, this.sy = t;
  }
  get scaled() {
    return this.sx !== 1 || this.sy !== 1;
  }
  get symmetric() {
    return this.sx === this.sy;
  }
  limitCanvas(t, n, s, r, l = -1) {
    let c = 1 / 0, u = 1 / 0, d = 1 / 0;
    s = Ln.capPixels(s, l), s > 0 && (c = Math.sqrt(s / (t * n))), r !== -1 && (u = r / t, d = r / n);
    const p = Math.min(c, u, d);
    return this.sx > p || this.sy > p ? (this.sx = p, this.sy = p, !0) : !1;
  }
  static get pixelRatio() {
    return globalThis.devicePixelRatio || 1;
  }
  static capPixels(t, n) {
    if (n >= 0) {
      const s = Math.ceil(window.screen.availWidth * window.screen.availHeight * this.pixelRatio ** 2 * (1 + n / 100));
      return t > 0 ? Math.min(t, s) : s;
    }
    return t;
  }
}
const ad = ["image/apng", "image/avif", "image/bmp", "image/gif", "image/jpeg", "image/png", "image/svg+xml", "image/webp", "image/x-icon"];
class KA {
  static get isDarkMode() {
    return lt(this, "isDarkMode", !!window?.matchMedia?.("(prefers-color-scheme: dark)").matches);
  }
}
class QA {
  static get commentForegroundColor() {
    const t = document.createElement("span");
    t.classList.add("comment", "sidebar");
    const {
      style: n
    } = t;
    n.width = n.height = "0", n.display = "none", n.color = "var(--comment-fg-color)", document.body.append(t);
    const {
      color: s
    } = window.getComputedStyle(t);
    return t.remove(), lt(this, "commentForegroundColor", qr(s));
  }
}
function ZA(y, t) {
  t = $t(t ?? 1, 0, 1);
  const n = 255 * (1 - t);
  return y.map((s) => Math.round(s * t + n));
}
function Ay(y, t) {
  const n = y[0] / 255, s = y[1] / 255, r = y[2] / 255, l = Math.max(n, s, r), c = Math.min(n, s, r), u = (l + c) / 2;
  if (l === c)
    t[0] = t[1] = 0;
  else {
    const d = l - c;
    switch (t[1] = u < 0.5 ? d / (l + c) : d / (2 - l - c), l) {
      case n:
        t[0] = ((s - r) / d + (s < r ? 6 : 0)) * 60;
        break;
      case s:
        t[0] = ((r - n) / d + 2) * 60;
        break;
      case r:
        t[0] = ((n - s) / d + 4) * 60;
        break;
    }
  }
  t[2] = u;
}
function rd(y, t) {
  const n = y[0], s = y[1], r = y[2], l = (1 - Math.abs(2 * r - 1)) * s, c = l * (1 - Math.abs(n / 60 % 2 - 1)), u = r - l / 2;
  switch (Math.floor(n / 60)) {
    case 0:
      t[0] = l + u, t[1] = c + u, t[2] = u;
      break;
    case 1:
      t[0] = c + u, t[1] = l + u, t[2] = u;
      break;
    case 2:
      t[0] = u, t[1] = l + u, t[2] = c + u;
      break;
    case 3:
      t[0] = u, t[1] = c + u, t[2] = l + u;
      break;
    case 4:
      t[0] = c + u, t[1] = u, t[2] = l + u;
      break;
    case 5:
    case 6:
      t[0] = l + u, t[1] = u, t[2] = c + u;
      break;
  }
}
function od(y) {
  return y <= 0.03928 ? y / 12.92 : ((y + 0.055) / 1.055) ** 2.4;
}
function Sy(y, t, n) {
  rd(y, n), n.map(od);
  const s = 0.2126 * n[0] + 0.7152 * n[1] + 0.0722 * n[2];
  rd(t, n), n.map(od);
  const r = 0.2126 * n[0] + 0.7152 * n[1] + 0.0722 * n[2];
  return s > r ? (s + 0.05) / (r + 0.05) : (r + 0.05) / (s + 0.05);
}
const Ey = /* @__PURE__ */ new Map();
function $A(y, t) {
  const n = y[0] + y[1] * 256 + y[2] * 65536 + t[0] * 16777216 + t[1] * 4294967296 + t[2] * 1099511627776;
  let s = Ey.get(n);
  if (s)
    return s;
  const r = new Float32Array(9), l = r.subarray(0, 3), c = r.subarray(3, 6);
  Ay(y, c);
  const u = r.subarray(6, 9);
  Ay(t, u);
  const d = u[2] < 0.5, p = d ? 12 : 4.5;
  if (c[2] = d ? Math.sqrt(c[2]) : 1 - Math.sqrt(1 - c[2]), Sy(c, u, l) < p) {
    let g, m;
    d ? (g = c[2], m = 1) : (g = 0, m = c[2]);
    const v = 5e-3;
    for (; m - g > v; ) {
      const A = c[2] = (g + m) / 2;
      d === Sy(c, u, l) < p ? g = A : m = A;
    }
    c[2] = d ? m : g;
  }
  return rd(c, l), s = K.makeHexColor(Math.round(l[0] * 255), Math.round(l[1] * 255), Math.round(l[2] * 255)), Ey.set(n, s), s;
}
function Jy({
  html: y,
  dir: t,
  className: n
}, s) {
  const r = document.createDocumentFragment();
  if (typeof y == "string") {
    const l = document.createElement("p");
    l.dir = t || "auto";
    const c = y.split(/\r\n?|\n/);
    for (let u = 0, d = c.length; u < d; ++u) {
      const p = c[u];
      l.append(document.createTextNode(p)), u < d - 1 && l.append(document.createElement("br"));
    }
    r.append(l);
  } else
    Wy.render({
      xfaHtml: y,
      div: r,
      intent: "richText"
    });
  r.firstElementChild.classList.add("richText", n), s.append(r);
}
function t0(y) {
  const t = new Path2D();
  if (!y)
    return t;
  for (let n = 0, s = y.length; n < s; )
    switch (y[n++]) {
      case Rr.moveTo:
        t.moveTo(y[n++], y[n++]);
        break;
      case Rr.lineTo:
        t.lineTo(y[n++], y[n++]);
        break;
      case Rr.curveTo:
        t.bezierCurveTo(y[n++], y[n++], y[n++], y[n++], y[n++], y[n++]);
        break;
      case Rr.quadraticCurveTo:
        t.quadraticCurveTo(y[n++], y[n++], y[n++], y[n++]);
        break;
      case Rr.closePath:
        t.closePath();
        break;
      default:
        yt(`Unrecognized drawing path operator: ${y[n - 1]}`);
        break;
    }
  return t;
}
class Fr {
  #t = null;
  #e = null;
  #n;
  #i = null;
  #s = null;
  #r = null;
  #a = null;
  #o = null;
  static #l = null;
  constructor(t) {
    this.#n = t, Fr.#l ||= Object.freeze({
      freetext: "pdfjs-editor-remove-freetext-button",
      highlight: "pdfjs-editor-remove-highlight-button",
      ink: "pdfjs-editor-remove-ink-button",
      stamp: "pdfjs-editor-remove-stamp-button",
      signature: "pdfjs-editor-remove-signature-button"
    });
  }
  render() {
    const t = this.#t = document.createElement("div");
    t.classList.add("editToolbar", "hidden"), t.setAttribute("role", "toolbar");
    const n = this.#n._uiManager._signal;
    n instanceof AbortSignal && !n.aborted && (t.addEventListener("contextmenu", Rn, {
      signal: n
    }), t.addEventListener("pointerdown", Fr.#c, {
      signal: n
    }));
    const s = this.#i = document.createElement("div");
    s.className = "buttons", t.append(s);
    const r = this.#n.toolbarPosition;
    if (r) {
      const {
        style: l
      } = t, c = this.#n._uiManager.direction === "ltr" ? 1 - r[0] : r[0];
      l.insetInlineEnd = `${100 * c}%`, l.top = `calc(${100 * r[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return t;
  }
  get div() {
    return this.#t;
  }
  static #c(t) {
    t.stopPropagation();
  }
  #d(t) {
    this.#n._focusEventsAllowed = !1, ge(t);
  }
  #h(t) {
    this.#n._focusEventsAllowed = !0, ge(t);
  }
  #f(t) {
    const n = this.#n._uiManager._signal;
    return !(n instanceof AbortSignal) || n.aborted ? !1 : (t.addEventListener("focusin", this.#d.bind(this), {
      capture: !0,
      signal: n
    }), t.addEventListener("focusout", this.#h.bind(this), {
      capture: !0,
      signal: n
    }), t.addEventListener("contextmenu", Rn, {
      signal: n
    }), !0);
  }
  hide() {
    this.#t.classList.add("hidden"), this.#e?.hideDropdown();
  }
  show() {
    this.#t.classList.remove("hidden"), this.#s?.shown(), this.#r?.shown();
  }
  addDeleteButton() {
    const {
      editorType: t,
      _uiManager: n
    } = this.#n, s = document.createElement("button");
    s.classList.add("basic", "deleteButton"), s.tabIndex = 0, s.setAttribute("data-l10n-id", Fr.#l[t]), this.#f(s) && s.addEventListener("click", (r) => {
      n.delete();
    }, {
      signal: n._signal
    }), this.#i.append(s);
  }
  get #g() {
    const t = document.createElement("div");
    return t.className = "divider", t;
  }
  async addAltText(t) {
    const n = await t.render();
    this.#f(n), this.#i.append(n, this.#g), this.#s = t;
  }
  addComment(t, n = null) {
    if (this.#r)
      return;
    const s = t.renderForToolbar();
    if (!s)
      return;
    this.#f(s);
    const r = this.#a = this.#g;
    n ? (this.#i.insertBefore(s, n), this.#i.insertBefore(r, n)) : this.#i.append(s, r), this.#r = t, t.toolbar = this;
  }
  addColorPicker(t) {
    if (this.#e)
      return;
    this.#e = t;
    const n = t.renderButton();
    this.#f(n), this.#i.append(n, this.#g);
  }
  async addEditSignatureButton(t) {
    const n = this.#o = await t.renderEditButton(this.#n);
    this.#f(n), this.#i.append(n, this.#g);
  }
  removeButton(t) {
    t === "comment" && (this.#r?.removeToolbarCommentButton(), this.#r = null, this.#a?.remove(), this.#a = null);
  }
  async addButton(t, n) {
    switch (t) {
      case "colorPicker":
        n && this.addColorPicker(n);
        break;
      case "altText":
        n && await this.addAltText(n);
        break;
      case "editSignature":
        n && await this.addEditSignatureButton(n);
        break;
      case "delete":
        this.addDeleteButton();
        break;
      case "comment":
        n && this.addComment(n);
        break;
    }
  }
  async addButtonBefore(t, n, s) {
    if (!n && t === "comment")
      return;
    const r = this.#i.querySelector(s);
    r && t === "comment" && this.addComment(n, r);
  }
  updateEditSignatureButton(t) {
    this.#o && (this.#o.title = t);
  }
  remove() {
    this.#t.remove(), this.#e?.destroy(), this.#e = null;
  }
}
class WA {
  #t = null;
  #e = null;
  #n;
  constructor(t) {
    this.#n = t;
  }
  #i() {
    const t = this.#e = document.createElement("div");
    t.className = "editToolbar", t.setAttribute("role", "toolbar"), t.dir = this.#n.direction;
    const n = this.#n._signal;
    n instanceof AbortSignal && !n.aborted && t.addEventListener("contextmenu", Rn, {
      signal: n
    });
    const s = this.#t = document.createElement("div");
    return s.className = "buttons", t.append(s), this.#n.hasCommentManager() && this.#r("commentButton", "pdfjs-comment-floating-button", "pdfjs-comment-floating-button-label", () => {
      this.#n.commentSelection("floating_button");
    }), this.#r("highlightButton", "pdfjs-highlight-floating-button1", "pdfjs-highlight-floating-button-label", () => {
      this.#n.highlightSelection("floating_button");
    }), t;
  }
  #s(t, n) {
    let s = 0, r = 0;
    for (const l of t) {
      const c = l.y + l.height;
      if (c < s)
        continue;
      const u = l.x + (n ? l.width : 0);
      if (c > s) {
        r = u, s = c;
        continue;
      }
      n ? u > r && (r = u) : u < r && (r = u);
    }
    return [n ? 1 - r : r, s];
  }
  show(t, n, s) {
    const [r, l] = this.#s(n, s), {
      style: c
    } = this.#e ||= this.#i();
    t.append(this.#e), c.insetInlineEnd = `${100 * r}%`, c.top = `calc(${100 * l}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    this.#e.remove();
  }
  #r(t, n, s, r) {
    const l = document.createElement("button");
    l.classList.add("basic", t), l.tabIndex = 0, l.setAttribute("data-l10n-id", n);
    const c = document.createElement("span");
    l.append(c), c.className = "visuallyHidden", c.setAttribute("data-l10n-id", s);
    const u = this.#n._signal;
    u instanceof AbortSignal && !u.aborted && (l.addEventListener("contextmenu", Rn, {
      signal: u
    }), l.addEventListener("click", r, {
      signal: u
    })), this.#t.append(l);
  }
}
const JA = "59968104-cc61-4cf9-b570-014b35b3709c", Kh = Object.freeze({
  internal: JA
});
function e0(y, t, n) {
  for (const s of n)
    t.addEventListener(s, y[s].bind(y));
}
class Ft {
  static #t = NaN;
  static #e = null;
  static #n = NaN;
  static #i = null;
  static initializeAndAddPointerId(t) {
    (Ft.#e ||= /* @__PURE__ */ new Set()).add(t);
  }
  static setPointer(t, n) {
    Ft.#t ||= n, Ft.#i ??= t;
  }
  static setTimeStamp(t) {
    Ft.#n = t;
  }
  static isSamePointerId(t) {
    return Ft.#t === t;
  }
  static isSamePointerIdOrRemove(t) {
    return Ft.#t === t ? !0 : (Ft.#e?.delete(t), !1);
  }
  static isSamePointerType(t) {
    return Ft.#i === t;
  }
  static isInitializedAndDifferentPointerType(t) {
    return Ft.#i !== null && !Ft.isSamePointerType(t);
  }
  static isSameTimeStamp(t) {
    return Ft.#n === t;
  }
  static isUsingMultiplePointers() {
    return Ft.#e?.size >= 1;
  }
  static clearPointerType() {
    Ft.#i = null;
  }
  static clearPointerIds() {
    Ft.#t = NaN, Ft.#e = null;
  }
  static clearTimeStamp() {
    Ft.#n = NaN;
  }
}
class tS {
  #t = 0;
  get id() {
    return `${La}${this.#t++}`;
  }
}
class Ad {
  #t = $y();
  #e = 0;
  #n = null;
  static get _isSVGFittingCanvas() {
    const t = `data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="${Pe}"><rect width="1" height="1" style="fill:red;"/></svg>`, s = new OffscreenCanvas(1, 3).getContext("2d", {
      willReadFrequently: !0
    }), r = new Image();
    r.src = t;
    const l = r.decode().then(() => (s.drawImage(r, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(s.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
    return lt(this, "_isSVGFittingCanvas", l);
  }
  async #i(t, n) {
    this.#n ||= /* @__PURE__ */ new Map();
    let s = this.#n.get(t);
    if (s === null)
      return null;
    if (s?.bitmap)
      return s.refCounter += 1, s;
    try {
      s ||= {
        bitmap: null,
        id: `image_${this.#t}_${this.#e++}`,
        refCounter: 0,
        isSvg: !1
      };
      let r;
      if (typeof n == "string" ? (s.url = n, r = await yd(n, "blob")) : n instanceof File ? r = s.file = n : n instanceof Blob && (r = n), r.type === "image/svg+xml") {
        const l = Ad._isSVGFittingCanvas, c = new FileReader(), u = new Image(), d = new Promise((p, g) => {
          u.onload = () => {
            s.bitmap = u, s.isSvg = !0, p();
          }, c.onload = async () => {
            const m = s.svgUrl = c.result;
            u.src = await l ? `${m}#svgView(preserveAspectRatio(none))` : m;
          }, u.onerror = c.onerror = g;
        });
        c.readAsDataURL(r), await d;
      } else
        s.bitmap = await createImageBitmap(r);
      s.refCounter = 1;
    } catch (r) {
      yt(r), s = null;
    }
    return this.#n.set(t, s), s && this.#n.set(s.id, s), s;
  }
  async getFromFile(t) {
    const {
      lastModified: n,
      name: s,
      size: r,
      type: l
    } = t;
    return this.#i(`${n}_${s}_${r}_${l}`, t);
  }
  async getFromUrl(t) {
    return this.#i(t, t);
  }
  async getFromBlob(t, n) {
    const s = await n;
    return this.#i(t, s);
  }
  async getFromId(t) {
    this.#n ||= /* @__PURE__ */ new Map();
    const n = this.#n.get(t);
    if (!n)
      return null;
    if (n.bitmap)
      return n.refCounter += 1, n;
    if (n.file)
      return this.getFromFile(n.file);
    if (n.blobPromise) {
      const {
        blobPromise: s
      } = n;
      return delete n.blobPromise, this.getFromBlob(n.id, s);
    }
    return this.getFromUrl(n.url);
  }
  getFromCanvas(t, n) {
    this.#n ||= /* @__PURE__ */ new Map();
    let s = this.#n.get(t);
    if (s?.bitmap)
      return s.refCounter += 1, s;
    const r = new OffscreenCanvas(n.width, n.height);
    return r.getContext("2d").drawImage(n, 0, 0), s = {
      bitmap: r.transferToImageBitmap(),
      id: `image_${this.#t}_${this.#e++}`,
      refCounter: 1,
      isSvg: !1
    }, this.#n.set(t, s), this.#n.set(s.id, s), s;
  }
  getSvgUrl(t) {
    const n = this.#n.get(t);
    return n?.isSvg ? n.svgUrl : null;
  }
  deleteId(t) {
    this.#n ||= /* @__PURE__ */ new Map();
    const n = this.#n.get(t);
    if (!n || (n.refCounter -= 1, n.refCounter !== 0))
      return;
    const {
      bitmap: s
    } = n;
    if (!n.url && !n.file) {
      const r = new OffscreenCanvas(s.width, s.height);
      r.getContext("bitmaprenderer").transferFromImageBitmap(s), n.blobPromise = r.convertToBlob();
    }
    s.close?.(), n.bitmap = null;
  }
  isValidId(t) {
    return t.startsWith(`image_${this.#t}_`);
  }
}
class eS {
  #t = [];
  #e = !1;
  #n;
  #i = -1;
  constructor(t = 128) {
    this.#n = t;
  }
  add({
    cmd: t,
    undo: n,
    post: s,
    mustExec: r,
    type: l = NaN,
    overwriteIfSameType: c = !1,
    keepUndo: u = !1
  }) {
    if (r && t(), this.#e)
      return;
    const d = {
      cmd: t,
      undo: n,
      post: s,
      type: l
    };
    if (this.#i === -1) {
      this.#t.length > 0 && (this.#t.length = 0), this.#i = 0, this.#t.push(d);
      return;
    }
    if (c && this.#t[this.#i].type === l) {
      u && (d.undo = this.#t[this.#i].undo), this.#t[this.#i] = d;
      return;
    }
    const p = this.#i + 1;
    p === this.#n ? this.#t.splice(0, 1) : (this.#i = p, p < this.#t.length && this.#t.splice(p)), this.#t.push(d);
  }
  undo() {
    if (this.#i === -1)
      return;
    this.#e = !0;
    const {
      undo: t,
      post: n
    } = this.#t[this.#i];
    t(), n?.(), this.#e = !1, this.#i -= 1;
  }
  redo() {
    if (this.#i < this.#t.length - 1) {
      this.#i += 1, this.#e = !0;
      const {
        cmd: t,
        post: n
      } = this.#t[this.#i];
      t(), n?.(), this.#e = !1;
    }
  }
  hasSomethingToUndo() {
    return this.#i !== -1;
  }
  hasSomethingToRedo() {
    return this.#i < this.#t.length - 1;
  }
  cleanType(t) {
    if (this.#i !== -1) {
      for (let n = this.#i; n >= 0; n--)
        if (this.#t[n].type !== t) {
          this.#t.splice(n + 1, this.#i - n), this.#i = n;
          return;
        }
      this.#t.length = 0, this.#i = -1;
    }
  }
  destroy() {
    this.#t = null;
  }
}
class ln {
  static ALT = 1;
  static CTRL = 2;
  static META = 4;
  static SHIFT = 8;
  constructor(t) {
    this.callbacks = /* @__PURE__ */ new Map();
    const {
      isMac: n
    } = Yt.platform;
    for (const [s, r, l = {}] of t) {
      const c = s.some((u) => u.startsWith("mac+"));
      for (const u of s) {
        let d = u;
        if (c) {
          const m = u.startsWith("mac+");
          if (n !== m)
            continue;
          m && (d = u.slice(4));
        }
        const [p, g] = ln.#t(d);
        p !== null && this.callbacks.getOrInsertComputed(p, Ba).push({
          callback: r,
          options: l,
          modifiers: g
        });
      }
    }
  }
  static #t(t) {
    let n = null, s = 0;
    for (let r of t.split("+")) {
      if (r = r.trim(), !r)
        continue;
      const l = r.toUpperCase(), c = ln[l];
      if (c) {
        s |= c;
        continue;
      }
      if (n !== null) {
        yt(`KeyboardManager: multiple keys in shortcut "${t}"`);
        break;
      }
      n = l === "SPACE" ? " " : r;
    }
    return n === null && yt(`KeyboardManager: no key found in shortcut "${t}"`), [n, s];
  }
  static #e(t) {
    const n = /^(?:Key([A-Z])|(?:Digit|Numpad)(\d))$/.exec(t);
    return n ? n[1]?.toLowerCase() ?? n[2] : null;
  }
  exec(t, n) {
    let s = this.callbacks.get(n.key);
    if (!s) {
      if (/^[a-z]$/i.test(n.key))
        return;
      const g = ln.#e(n.code);
      if (g === null || g === n.key || (s = this.callbacks.get(g), !s))
        return;
    }
    const r = (n.altKey ? ln.ALT : 0) | (n.ctrlKey ? ln.CTRL : 0) | (n.metaKey ? ln.META : 0) | (n.shiftKey ? ln.SHIFT : 0), l = s.find((g) => g.modifiers === r);
    if (!l)
      return;
    const {
      callback: c,
      options: {
        bubbles: u = !1,
        args: d = [],
        checker: p = null
      }
    } = l;
    p && !p(t, n) || (c.bind(t, ...d, n)(), u || ge(n));
  }
}
class Sd {
  static _colorsMapping = /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]);
  get _colors() {
    const t = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
    return qA(t), lt(this, "_colors", t);
  }
  convert(t) {
    const n = qr(t);
    if (!window.matchMedia("(forced-colors: active)").matches)
      return n;
    for (const [s, r] of this._colors)
      if (r.every((l, c) => l === n[c]))
        return Sd._colorsMapping.get(s);
    return n;
  }
  getHexCode(t) {
    const n = this._colors.get(t);
    return n ? K.makeHexColor(...n) : t;
  }
}
class $i {
  #t = new AbortController();
  #e = null;
  #n = null;
  #i = /* @__PURE__ */ new Map();
  #s = /* @__PURE__ */ new Map();
  #r = null;
  #a = null;
  #o = null;
  #l = null;
  #c = null;
  #d = new eS();
  #h = null;
  #f = null;
  #g = null;
  #m = 0;
  #u = /* @__PURE__ */ new Set();
  #p = null;
  #y = null;
  #v = /* @__PURE__ */ new Set();
  _editorUndoBar = null;
  #b = !1;
  #A = !1;
  #T = !1;
  #E = null;
  #_ = null;
  #w = null;
  #O = null;
  #M = !1;
  #x = null;
  #R = new tS();
  #N = !1;
  #L = !1;
  #U = !1;
  #k = null;
  #P = null;
  #V = null;
  #I = null;
  #H = null;
  #C = pt.NONE;
  #S = /* @__PURE__ */ new Set();
  #F = null;
  #G = null;
  #Y = null;
  #Z = null;
  #K = null;
  #Q = {
    isEditing: !1,
    isEmpty: !0,
    hasSomethingToUndo: !1,
    hasSomethingToRedo: !1,
    hasSelectedEditor: !1,
    hasSelectedText: !1
  };
  #B = [0, 0];
  #X = null;
  #q = null;
  #tt = null;
  #et = null;
  #z = null;
  static TRANSLATE_SMALL = 1;
  static TRANSLATE_BIG = 10;
  static get _keyboardManager() {
    const t = $i.prototype, n = (c) => c.#q.contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && c.hasSomethingToControl(), s = (c, {
      target: u
    }) => {
      if (u instanceof HTMLInputElement) {
        const {
          type: d
        } = u;
        return d !== "text" && d !== "number";
      }
      return !0;
    }, r = this.TRANSLATE_SMALL, l = this.TRANSLATE_BIG;
    return lt(this, "_keyboardManager", new ln([[["ctrl+a", "mac+meta+a"], t.selectAll, {
      checker: s
    }], [["ctrl+z", "mac+meta+z"], t.undo, {
      checker: s
    }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], t.redo, {
      checker: s
    }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], t.delete, {
      checker: s
    }], [["Enter"], t.addNewEditorFromKeyboard, {
      checker: (c, {
        target: u
      }) => !(u instanceof HTMLButtonElement) && c.#q.contains(u) && !c.isEnterHandled
    }], [["Space"], t.addNewEditorFromKeyboard, {
      checker: (c, {
        target: u
      }) => !(u instanceof HTMLButtonElement) && c.#q.contains(document.activeElement)
    }], [["Escape"], t.unselectAll], [["ArrowLeft"], t.translateSelectedEditors, {
      args: [-r, 0],
      checker: n
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t.translateSelectedEditors, {
      args: [-l, 0],
      checker: n
    }], [["ArrowRight"], t.translateSelectedEditors, {
      args: [r, 0],
      checker: n
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t.translateSelectedEditors, {
      args: [l, 0],
      checker: n
    }], [["ArrowUp"], t.translateSelectedEditors, {
      args: [0, -r],
      checker: n
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t.translateSelectedEditors, {
      args: [0, -l],
      checker: n
    }], [["ArrowDown"], t.translateSelectedEditors, {
      args: [0, r],
      checker: n
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t.translateSelectedEditors, {
      args: [0, l],
      checker: n
    }]]));
  }
  constructor(t, n, s, r, l, c, u, d, p, g, m, v, A, S, E, _) {
    const w = this._signal = this.#t.signal;
    this.#q = t, this.#tt = n, this.#et = s, this.#o = r, this.#h = l, this.#G = c, this.#K = d, this._eventBus = u;
    const C = {
      signal: w,
      ...Kh
    };
    u.on("editingaction", this.onEditingAction.bind(this), C), u.on("pagechanging", this.onPageChanging.bind(this), C), u.on("scalechanging", this.onScaleChanging.bind(this), C), u.on("rotationchanging", this.onRotationChanging.bind(this), C), u.on("setpreference", this.onSetPreference.bind(this), C), u.on("switchannotationeditorparams", (M) => this.updateParams(M.type, M.value), C), window.addEventListener("pointerdown", () => {
      this.#L = !0;
    }, {
      capture: !0,
      signal: w
    }), window.addEventListener("pointerup", () => {
      this.#L = !1;
    }, {
      capture: !0,
      signal: w
    }), window.addEventListener("beforeunload", this.endCurrentEditing.bind(this), {
      capture: !0,
      signal: w
    }), this.#lt(), this.#pt(), this.#it(), this.#l = d.annotationStorage, this.#E = d.filterFactory, this.#Y = p, this.#O = g || null, this.#b = m, this.#A = v, this.#T = A, this.#H = S || null, this.viewParameters = {
      realScale: ka.PDF_TO_CSS_UNITS,
      rotation: 0
    }, this.isShiftKeyDown = !1, this._editorUndoBar = E || null, this._supportsPinchToZoom = _ !== !1, l?.setSidebarUiManager(this);
  }
  destroy() {
    this.#z?.resolve(), this.#z = null, this.#t?.abort(), this.#t = null, this._signal = null;
    for (const t of this.#s.values())
      t.destroy();
    this.#s.clear(), this.#i.clear(), this.#v.clear(), this.#I?.clear(), this.#e = null, this.#S.clear(), this.#d.destroy(), this.#o?.destroy(), this.#h?.destroy(), this.#G?.destroy(), this.#x?.hide(), this.#x = null, this.#V?.destroy(), this.#V = null, this.#n = null, this.#_ && (clearTimeout(this.#_), this.#_ = null), this.#X && (clearTimeout(this.#X), this.#X = null), this._editorUndoBar?.destroy(), this.#K = null;
  }
  combinedSignal(t) {
    return AbortSignal.any([this._signal, t.signal]);
  }
  get mlManager() {
    return this.#H;
  }
  get useNewAltTextFlow() {
    return this.#A;
  }
  get useNewAltTextWhenAddingImage() {
    return this.#T;
  }
  get hcmFilter() {
    return lt(this, "hcmFilter", this.#Y ? this.#E.addHCMFilter(this.#Y.foreground, this.#Y.background) : "none");
  }
  get direction() {
    return lt(this, "direction", getComputedStyle(this.#q).direction);
  }
  get _highlightColors() {
    return lt(this, "_highlightColors", this.#O ? new Map(this.#O.split(",").map((t) => (t = t.split("=").map((n) => n.trim()), t[1] = t[1].toUpperCase(), t))) : null);
  }
  get highlightColors() {
    const {
      _highlightColors: t
    } = this;
    if (!t)
      return lt(this, "highlightColors", null);
    const n = /* @__PURE__ */ new Map(), s = !!this.#Y;
    for (const [r, l] of t) {
      const c = r.endsWith("_HCM");
      if (s && c) {
        n.set(r.replace("_HCM", ""), l);
        continue;
      }
      !s && !c && n.set(r, l);
    }
    return lt(this, "highlightColors", n);
  }
  get highlightColorNames() {
    return lt(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (t) => t.reverse())) : null);
  }
  getNonHCMColor(t) {
    if (!this._highlightColors)
      return t;
    const n = this.highlightColorNames.get(t);
    return this._highlightColors.get(n) || t;
  }
  getNonHCMColorName(t) {
    return this.highlightColorNames.get(t) || t;
  }
  setCurrentDrawingSession(t) {
    t ? (this.unselectAll(), this.disableUserSelect(!0)) : this.disableUserSelect(!1), this.#g = t;
  }
  setMainHighlightColorPicker(t) {
    this.#V = t;
  }
  editAltText(t, n = !1) {
    this.#o?.editAltText(this, t, n);
  }
  hasCommentManager() {
    return !!this.#h;
  }
  editComment(t, n, s, r) {
    this.#h?.showDialog(this, t, n, s, r);
  }
  selectComment(t, n) {
    this.#s.get(t)?.getEditorByUID(n)?.toggleComment(!0, !0);
  }
  updateComment(t) {
    this.#h?.updateComment(t.getData());
  }
  updatePopupColor(t) {
    this.#h?.updatePopupColor(t);
  }
  removeComment(t) {
    this.#h?.removeComments([t.uid]);
  }
  deleteComment(t, n) {
    const s = () => {
      t.comment = n;
    }, r = () => {
      this._editorUndoBar?.show(s, "comment"), this.toggleComment(null), t.comment = null;
    };
    this.addCommands({
      cmd: r,
      undo: s,
      mustExec: !0
    });
  }
  toggleComment(t, n, s = void 0) {
    this.#h?.toggleCommentPopup(t, n, s);
  }
  makeCommentColor(t, n) {
    return t && this.#h?.makeCommentColor(t, n) || null;
  }
  getCommentDialogElement() {
    return this.#h?.dialogElement || null;
  }
  async waitForEditorsRendered(t) {
    if (this.#s.has(t - 1))
      return;
    const {
      resolve: n,
      promise: s
    } = Promise.withResolvers(), r = (l) => {
      l.pageNumber === t && (this._eventBus.off("editorsrendered", r), n());
    };
    this._eventBus.on("editorsrendered", r, Kh), await s;
  }
  getSignature(t) {
    this.#G?.getSignature({
      uiManager: this,
      editor: t
    });
  }
  get signatureManager() {
    return this.#G;
  }
  switchToMode(t, n) {
    this._eventBus.on("annotationeditormodechanged", n, {
      once: !0,
      signal: this._signal,
      ...Kh
    }), this._eventBus.dispatch("showannotationeditorui", {
      source: this,
      mode: t
    });
  }
  setPreference(t, n) {
    this._eventBus.dispatch("setpreference", {
      source: this,
      name: t,
      value: n
    });
  }
  onSetPreference({
    name: t,
    value: n
  }) {
    t === "enableNewAltTextWhenAddingImage" && (this.#T = n);
  }
  onPageChanging({
    pageNumber: t
  }) {
    this.#m = t - 1;
  }
  deletePage(t) {
    for (const n of this.getEditors(t))
      n.remove();
    this.#s.delete(t), this.#m === t && (this.#m = 0);
  }
  focusMainContainer() {
    this.#q.focus();
  }
  findParent(t, n) {
    for (const s of this.#s.values()) {
      const {
        x: r,
        y: l,
        width: c,
        height: u
      } = s.div.getBoundingClientRect();
      if (t >= r && t <= r + c && n >= l && n <= l + u)
        return s;
    }
    return null;
  }
  disableUserSelect(t = !1) {
    this.#tt.classList.toggle("noUserSelect", t);
  }
  addShouldRescale(t) {
    this.#v.add(t);
  }
  removeShouldRescale(t) {
    this.#v.delete(t);
  }
  onScaleChanging({
    scale: t
  }) {
    this.commitOrRemove(), this.viewParameters.realScale = t * ka.PDF_TO_CSS_UNITS;
    for (const n of this.#v)
      n.onScaleChanging();
    this.#g?.onScaleChanging();
  }
  onRotationChanging({
    pagesRotation: t
  }) {
    this.commitOrRemove(), this.viewParameters.rotation = t;
  }
  #J({
    anchorNode: t
  }) {
    return t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
  }
  #nt(t) {
    const {
      currentLayer: n
    } = this;
    if (n.hasTextLayer(t))
      return n;
    for (const s of this.#s.values())
      if (s.hasTextLayer(t))
        return s;
    return null;
  }
  highlightSelection(t = "", n = !1) {
    const s = document.getSelection();
    if (!s || s.isCollapsed)
      return;
    const {
      anchorNode: r,
      anchorOffset: l,
      focusNode: c,
      focusOffset: u
    } = s, d = s.toString(), g = this.#J(s).closest(".textLayer"), m = this.getSelectionBoxes(g);
    if (!m)
      return;
    s.empty();
    const v = this.#nt(g), A = this.#C === pt.NONE, S = () => {
      const E = v?.createAndAddNewEditor({
        x: 0,
        y: 0
      }, !1, {
        methodOfCreation: t,
        boxes: m,
        anchorNode: r,
        anchorOffset: l,
        focusNode: c,
        focusOffset: u,
        text: d
      });
      A && this.showAllEditors("highlight", !0, !0), n && E?.editComment();
    };
    if (A) {
      this.switchToMode(pt.HIGHLIGHT, S);
      return;
    }
    S();
  }
  commentSelection(t = "") {
    this.highlightSelection(t, !0);
  }
  endCurrentEditing() {
    this.commitOrRemove(), this.currentLayer?.endDrawingSession(!1);
  }
  #rt() {
    const t = document.getSelection();
    if (!t || t.isCollapsed)
      return;
    const s = this.#J(t).closest(".textLayer"), r = this.getSelectionBoxes(s);
    r && (this.#x ||= new WA(this), this.#x.show(s, r, this.direction === "ltr"));
  }
  getAndRemoveDataFromAnnotationStorage(t) {
    if (!this.#l)
      return null;
    const n = `${La}${t}`, s = this.#l.getRawValue(n);
    return s && this.#l.remove(n), s;
  }
  addToAnnotationStorage(t) {
    !t.isEmpty() && this.#l && !this.#l.has(t.id) && this.#l.setValue(t.id, t);
  }
  a11yAlert(t, n = null) {
    const s = this.#et;
    s && (s.setAttribute("data-l10n-id", t), n ? s.setAttribute("data-l10n-args", JSON.stringify(n)) : s.removeAttribute("data-l10n-args"));
  }
  #ot() {
    const t = document.getSelection();
    if (!t || t.isCollapsed) {
      this.#F && (this.#x?.hide(), this.#F = null, this.#D({
        hasSelectedText: !1
      }));
      return;
    }
    const {
      anchorNode: n
    } = t;
    if (n === this.#F)
      return;
    const r = this.#J(t).closest(".textLayer");
    if (!r) {
      this.#F && (this.#x?.hide(), this.#F = null, this.#D({
        hasSelectedText: !1
      }));
      return;
    }
    if (this.#x?.hide(), this.#F = n, this.#D({
      hasSelectedText: !0
    }), !(this.#C !== pt.HIGHLIGHT && this.#C !== pt.NONE) && (this.#C === pt.HIGHLIGHT && this.showAllEditors("highlight", !0, !0), this.#M = this.isShiftKeyDown, !this.isShiftKeyDown)) {
      const l = this.#C === pt.HIGHLIGHT ? this.#nt(r) : null;
      if (l?.toggleDrawing(), this.#L) {
        const c = new AbortController(), u = this.combinedSignal(c), d = (p) => {
          p.type === "pointerup" && p.button !== 0 || (c.abort(), l?.toggleDrawing(!0), p.type === "pointerup" && this.#$("main_toolbar"));
        };
        window.addEventListener("pointerup", d, {
          signal: u
        }), window.addEventListener("blur", d, {
          signal: u
        });
      } else
        l?.toggleDrawing(!0), this.#$("main_toolbar");
    }
  }
  #$(t = "") {
    this.#C === pt.HIGHLIGHT ? this.highlightSelection(t) : this.#b && this.#rt();
  }
  #lt() {
    document.addEventListener("selectionchange", this.#ot.bind(this), {
      signal: this._signal
    });
  }
  #ct() {
    if (this.#w)
      return;
    this.#w = new AbortController();
    const t = this.combinedSignal(this.#w);
    window.addEventListener("focus", this.focus.bind(this), {
      signal: t
    }), window.addEventListener("blur", this.blur.bind(this), {
      signal: t
    });
  }
  #ut() {
    this.#w?.abort(), this.#w = null;
  }
  blur() {
    if (this.isShiftKeyDown = !1, this.#M && (this.#M = !1, this.#$("main_toolbar")), !this.hasSelection)
      return;
    const {
      activeElement: t
    } = document;
    for (const n of this.#S)
      if (n.div.contains(t)) {
        this.#P = [n, t], n._focusEventsAllowed = !1;
        break;
      }
  }
  focus() {
    if (!this.#P)
      return;
    const [t, n] = this.#P;
    this.#P = null, n.addEventListener("focusin", () => {
      t._focusEventsAllowed = !0;
    }, {
      once: !0,
      signal: this._signal
    }), n.focus();
  }
  #it() {
    if (this.#k)
      return;
    this.#k = new AbortController();
    const t = this.combinedSignal(this.#k);
    window.addEventListener("keydown", this.keydown.bind(this), {
      signal: t
    }), window.addEventListener("keyup", this.keyup.bind(this), {
      signal: t
    });
  }
  #ht() {
    this.#k?.abort(), this.#k = null;
  }
  #dt() {
    if (this.#f)
      return;
    this.#f = new AbortController();
    const t = this.combinedSignal(this.#f);
    document.addEventListener("copy", this.copy.bind(this), {
      signal: t
    }), document.addEventListener("cut", this.cut.bind(this), {
      signal: t
    }), document.addEventListener("paste", this.paste.bind(this), {
      signal: t
    });
  }
  #ft() {
    this.#f?.abort(), this.#f = null;
  }
  #pt() {
    const t = this._signal;
    document.addEventListener("dragover", this.dragOver.bind(this), {
      signal: t
    }), document.addEventListener("drop", this.drop.bind(this), {
      signal: t
    });
  }
  addEditListeners() {
    this.#it(), this.setEditingState(!0);
  }
  removeEditListeners() {
    this.#ht(), this.setEditingState(!1);
  }
  dragOver(t) {
    for (const {
      type: n
    } of t.dataTransfer.items)
      for (const s of this.#y)
        if (s.isHandlingMimeForPasting(n)) {
          t.dataTransfer.dropEffect = "copy", t.preventDefault();
          return;
        }
  }
  drop(t) {
    for (const n of t.dataTransfer.items)
      for (const s of this.#y)
        if (s.isHandlingMimeForPasting(n.type)) {
          s.paste(n, this.currentLayer), t.preventDefault();
          return;
        }
  }
  copy(t) {
    if (t.preventDefault(), this.#e?.commitOrRemove(), !this.hasSelection)
      return;
    const n = [];
    for (const s of this.#S) {
      const r = s.serialize(!0);
      r && n.push(r);
    }
    n.length !== 0 && t.clipboardData.setData("application/pdfjs", JSON.stringify(n));
  }
  cut(t) {
    this.copy(t), this.delete();
  }
  async paste(t) {
    t.preventDefault();
    const {
      clipboardData: n
    } = t;
    for (const l of n.items)
      for (const c of this.#y)
        if (c.isHandlingMimeForPasting(l.type)) {
          c.paste(l, this.currentLayer);
          return;
        }
    let s = n.getData("application/pdfjs");
    if (!s)
      return;
    try {
      s = JSON.parse(s);
    } catch (l) {
      yt(`paste: "${l.message}".`);
      return;
    }
    if (!Array.isArray(s))
      return;
    this.unselectAll();
    const r = this.currentLayer;
    try {
      const l = [];
      for (const d of s) {
        const p = await r.deserialize(d);
        if (!p)
          return;
        l.push(p);
      }
      const c = () => {
        for (const d of l)
          this.#st(d);
        this.#at(l);
      }, u = () => {
        for (const d of l)
          d.remove();
      };
      this.addCommands({
        cmd: c,
        undo: u,
        mustExec: !0
      });
    } catch (l) {
      yt(`paste: "${l.message}".`);
    }
  }
  keydown(t) {
    !this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !0), this.#C !== pt.NONE && !this.isEditorHandlingKeyboard && $i._keyboardManager.exec(this, t);
  }
  keyup(t) {
    this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !1, this.#M && (this.#M = !1, this.#$("main_toolbar")));
  }
  onEditingAction({
    name: t
  }) {
    switch (t) {
      case "undo":
      case "redo":
      case "delete":
      case "selectAll":
        this[t]();
        break;
      case "highlightSelection":
        this.highlightSelection("context_menu");
        break;
      case "commentSelection":
        this.commentSelection("context_menu");
        break;
    }
  }
  updatePageIndex(t, n) {
    for (const r of this.#a.get(t) || [])
      r.pageIndex = n;
    const s = this.#r.get(t);
    s && (s.pageIndex = n, this.#s.set(n, s), this.#N ? s.enable() : s.disable());
  }
  startUpdatePages() {
    this.#r = new Map(this.#s), this.#s.clear();
    const t = this.#a = /* @__PURE__ */ new Map(), n = (s) => {
      t.getOrInsertComputed(s.pageIndex, Ba).push(s);
    };
    for (const s of this.#i.values())
      n(s);
    for (const [s, r] of this.#l)
      s.startsWith(La) && !this.#i.has(s) && Number.isInteger(r?.pageIndex) && n(r);
  }
  endUpdatePages() {
    this.#r = null, this.#a = null;
  }
  clonePage(t, n) {
    for (const s of this.getEditors(t)) {
      const r = s.serialize(s.mode !== pt.HIGHLIGHT);
      r && (r.pageIndex = n, r.id = this.getId(), r.isClone = !0, delete r.popupRef, this.#l.setValue(r.id, r));
    }
  }
  findClonesForPage(t) {
    const n = [], {
      pageIndex: s
    } = t;
    for (const [r, l] of this.#l)
      l.pageIndex === s && l.isClone && (this.#l.remove(r), n.push(t.deserialize(l).then((c) => {
        c && (c.isClone = !0, t.addOrRebuild(c));
      })));
    return Promise.all(n);
  }
  #D(t) {
    Object.entries(t).some(([s, r]) => this.#Q[s] !== r) && (this._eventBus.dispatch("editingstateschanged", {
      source: this,
      details: Object.assign(this.#Q, t)
    }), this.#C === pt.HIGHLIGHT && t.hasSelectedEditor === !1 && this.#j([[Mt.HIGHLIGHT_FREE, !0]]));
  }
  #j(t) {
    this._eventBus.dispatch("annotationeditorparamschanged", {
      source: this,
      details: t
    });
  }
  setEditingState(t) {
    t ? (this.#ct(), this.#dt(), this.#D({
      isEditing: this.#C !== pt.NONE,
      isEmpty: this.#W(),
      hasSomethingToUndo: this.#d.hasSomethingToUndo(),
      hasSomethingToRedo: this.#d.hasSomethingToRedo(),
      hasSelectedEditor: !1
    })) : (this.#ut(), this.#ft(), this.#D({
      isEditing: !1
    }), this.disableUserSelect(!1));
  }
  registerEditorTypes(t) {
    if (!this.#y) {
      this.#y = t;
      for (const n of this.#y)
        this.#j(n.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return this.#R.id;
  }
  get currentLayer() {
    return this.#s.get(this.#m);
  }
  getLayer(t) {
    return this.#s.get(t);
  }
  get currentPageIndex() {
    return this.#m;
  }
  addLayer(t) {
    this.#s.set(t.pageIndex, t), this.#N ? t.enable() : t.disable();
  }
  removeLayer(t) {
    this.#s.delete(t.pageIndex);
  }
  async updateMode(t, n = null, s = !1, r = !1, l = !1, c = !1) {
    if (this.#C !== t && !(this.#z && (await this.#z.promise, !this.#z))) {
      if (this.#z = Promise.withResolvers(), this.#g?.commitOrRemove(), this.#C === pt.POPUP && this.#h?.hideSidebar(), this.#h?.destroyPopup(), this.#C = t, t === pt.NONE) {
        this.setEditingState(!1), this.#mt();
        for (const u of this.#i.values())
          u.hideStandaloneCommentButton();
        this._editorUndoBar?.hide(), this.toggleComment(null), this.#z.resolve();
        return;
      }
      for (const u of this.#i.values())
        u.addStandaloneCommentButton();
      t === pt.SIGNATURE && await this.#G?.loadSignatures(), s && Ft.clearPointerType(), this.setEditingState(!0), await this.#gt(), this.unselectAll();
      for (const u of this.#s.values())
        u.updateMode(t);
      if (t === pt.POPUP) {
        this.#n ||= await this.#K.getAnnotationsByType(new Set(this.#y.map((p) => p._editorType)));
        const u = /* @__PURE__ */ new Set(), d = [];
        for (const p of this.#i.values()) {
          const {
            annotationElementId: g,
            hasComment: m,
            deleted: v
          } = p;
          g && u.add(g), m && !v && d.push(p.getData());
        }
        for (const p of this.#n) {
          const {
            id: g,
            popupRef: m,
            contentsObj: v
          } = p;
          m && v?.str && !u.has(g) && !this.#u.has(g) && d.push(p);
        }
        this.#h?.showSidebar(d);
      }
      if (!n) {
        r && this.addNewEditorFromKeyboard(), this.#z.resolve();
        return;
      }
      for (const u of this.#i.values())
        u.uid === n ? (this.setSelected(u), c ? u.editComment() : l ? u.enterInEditMode() : u.focus()) : u.unselect();
      this.#z.resolve();
    }
  }
  addNewEditorFromKeyboard() {
    this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
  }
  updateToolbar(t) {
    t.mode !== this.#C && this._eventBus.dispatch("switchannotationeditormode", {
      source: this,
      ...t
    });
  }
  updateParams(t, n) {
    if (this.#y) {
      switch (t) {
        case Mt.CREATE:
          this.currentLayer.addNewEditor(n);
          return;
        case Mt.HIGHLIGHT_SHOW_ALL:
          this._eventBus.dispatch("reporttelemetry", {
            source: this,
            details: {
              type: "editing",
              data: {
                type: "highlight",
                action: "toggle_visibility"
              }
            }
          }), (this.#Z ||= /* @__PURE__ */ new Map()).set(t, n), this.showAllEditors("highlight", n);
          break;
      }
      if (this.hasSelection)
        for (const s of this.#S)
          s.updateParams(t, n);
      else
        for (const s of this.#y)
          s.updateDefaultParams(t, n);
    }
  }
  showAllEditors(t, n, s = !1) {
    for (const l of this.#i.values())
      l.editorType === t && l.show(n);
    (this.#Z?.get(Mt.HIGHLIGHT_SHOW_ALL) ?? !0) !== n && this.#j([[Mt.HIGHLIGHT_SHOW_ALL, n]]);
  }
  enableWaiting(t = !1) {
    if (this.#U !== t) {
      this.#U = t;
      for (const n of this.#s.values())
        t ? n.disableClick() : n.enableClick(), n.div.classList.toggle("waiting", t);
    }
  }
  async #gt() {
    if (!this.#N) {
      this.#N = !0;
      const t = [];
      for (const n of this.#s.values())
        t.push(n.enable());
      await Promise.all(t);
      for (const n of this.#i.values())
        n.enable();
    }
  }
  #mt() {
    if (this.unselectAll(), this.#N) {
      this.#N = !1;
      for (const t of this.#s.values())
        t.disable();
      for (const t of this.#i.values())
        t.disable();
    }
  }
  *getEditors(t) {
    for (const n of this.#i.values())
      n.pageIndex === t && (yield n);
  }
  getEditor(t) {
    return this.#i.get(t);
  }
  addEditor(t) {
    this.#i.set(t.id, t);
  }
  removeEditor(t) {
    t.div.contains(document.activeElement) && (this.#_ && clearTimeout(this.#_), this.#_ = setTimeout(() => {
      this.focusMainContainer(), this.#_ = null;
    }, 0)), this.#i.delete(t.id), t.annotationElementId && this.#I?.delete(t.annotationElementId), this.unselect(t), (!t.annotationElementId || !this.#u.has(t.annotationElementId)) && this.#l?.remove(t.id);
  }
  addDeletedAnnotationElement(t) {
    this.#u.add(t.annotationElementId), this.addChangedExistingAnnotation(t), t.deleted = !0;
  }
  isDeletedAnnotationElement(t) {
    return this.#u.has(t);
  }
  removeDeletedAnnotationElement(t) {
    this.#u.delete(t.annotationElementId), this.removeChangedExistingAnnotation(t), t.deleted = !1;
  }
  #st(t) {
    const n = this.#s.get(t.pageIndex);
    n ? n.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t));
  }
  setActiveEditor(t) {
    this.#e !== t && (this.#e = t, t && this.#j(t.propertiesToUpdate));
  }
  get #yt() {
    let t = null;
    for (t of this.#S)
      ;
    return t;
  }
  updateUI(t) {
    this.#yt === t && this.#j(t.propertiesToUpdate);
  }
  updateUIForDefaultProperties(t) {
    this.#j(t.defaultPropertiesToUpdate);
  }
  toggleSelected(t) {
    if (this.#S.has(t)) {
      this.#S.delete(t), t.unselect(), this.#D({
        hasSelectedEditor: this.hasSelection
      });
      return;
    }
    this.#S.add(t), t.select(), this.#j(t.propertiesToUpdate), this.#D({
      hasSelectedEditor: !0
    });
  }
  setSelected(t) {
    this.updateToolbar({
      mode: t.mode,
      editId: t.uid
    }), this.#g?.commitOrRemove();
    for (const n of this.#S)
      n !== t && n.unselect();
    this.#h?.destroyPopup(), this.#S.clear(), this.#S.add(t), t.select(), this.#j(t.propertiesToUpdate), this.#D({
      hasSelectedEditor: !0
    });
  }
  get firstSelectedEditor() {
    return this.#S.values().next().value;
  }
  unselect(t) {
    t.unselect(), this.#S.delete(t), this.#D({
      hasSelectedEditor: this.hasSelection
    });
  }
  get hasSelection() {
    return this.#S.size !== 0;
  }
  get isEnterHandled() {
    return this.#S.size === 1 && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    this.#d.undo(), this.#D({
      hasSomethingToUndo: this.#d.hasSomethingToUndo(),
      hasSomethingToRedo: !0,
      isEmpty: this.#W()
    }), this._editorUndoBar?.hide();
  }
  redo() {
    this.#d.redo(), this.#D({
      hasSomethingToUndo: !0,
      hasSomethingToRedo: this.#d.hasSomethingToRedo(),
      isEmpty: this.#W()
    });
  }
  addCommands(t) {
    this.#d.add(t), this.#D({
      hasSomethingToUndo: !0,
      hasSomethingToRedo: !1,
      isEmpty: this.#W()
    });
  }
  cleanUndoStack(t) {
    this.#d.cleanType(t);
  }
  #W() {
    if (this.#i.size === 0)
      return !0;
    if (this.#i.size === 1)
      for (const t of this.#i.values())
        return t.isEmpty();
    return !1;
  }
  delete() {
    this.commitOrRemove();
    const t = this.currentLayer?.endDrawingSession(!0);
    if (!this.hasSelection && !t)
      return;
    const n = t ? [t] : [...this.#S], s = () => {
      this._editorUndoBar?.show(r, n.length === 1 ? n[0].editorType : n.length);
      for (const l of n)
        l.remove();
    }, r = () => {
      for (const l of n)
        this.#st(l);
    };
    this.addCommands({
      cmd: s,
      undo: r,
      mustExec: !0
    });
  }
  commitOrRemove() {
    this.#e?.commitOrRemove();
  }
  hasSomethingToControl() {
    return this.#e || this.hasSelection;
  }
  #at(t) {
    for (const n of this.#S)
      n.unselect();
    this.#S.clear();
    for (const n of t)
      n.isEmpty() || (this.#S.add(n), n.select());
    this.#D({
      hasSelectedEditor: this.hasSelection
    });
  }
  selectAll() {
    for (const t of this.#S)
      t.commit();
    this.#at(this.#i.values());
  }
  unselectAll() {
    if (!(this.#e && (this.#e.commitOrRemove(), this.#C !== pt.NONE)) && !this.#g?.commitOrRemove() && (this.#h?.destroyPopup(), !!this.hasSelection)) {
      for (const t of this.#S)
        t.unselect();
      this.#S.clear(), this.#D({
        hasSelectedEditor: !1
      });
    }
  }
  translateSelectedEditors(t, n, s = !1) {
    if (s || this.commitOrRemove(), !this.hasSelection)
      return;
    this.#B[0] += t, this.#B[1] += n;
    const [r, l] = this.#B, c = [...this.#S], u = 1e3;
    this.#X && clearTimeout(this.#X), this.#X = setTimeout(() => {
      this.#X = null, this.#B[0] = this.#B[1] = 0, this.addCommands({
        cmd: () => {
          for (const d of c)
            this.#i.has(d.id) && (d.translateInPage(r, l), d.translationDone());
        },
        undo: () => {
          for (const d of c)
            this.#i.has(d.id) && (d.translateInPage(-r, -l), d.translationDone());
        },
        mustExec: !1
      });
    }, u);
    for (const d of c)
      d.translateInPage(t, n), d.translationDone();
  }
  setUpDragSession() {
    if (this.hasSelection) {
      this.disableUserSelect(!0), this.#p = /* @__PURE__ */ new Map();
      for (const t of this.#S)
        this.#p.set(t, {
          savedX: t.x,
          savedY: t.y,
          savedPageIndex: t.pageIndex,
          newX: 0,
          newY: 0,
          newPageIndex: -1
        });
    }
  }
  endDragSession() {
    if (!this.#p)
      return !1;
    this.disableUserSelect(!1);
    const t = this.#p;
    this.#p = null;
    let n = !1;
    for (const [{
      x: r,
      y: l,
      pageIndex: c
    }, u] of t)
      u.newX = r, u.newY = l, u.newPageIndex = c, n ||= r !== u.savedX || l !== u.savedY || c !== u.savedPageIndex;
    if (!n)
      return !1;
    const s = (r, l, c, u) => {
      if (this.#i.has(r.id)) {
        const d = this.#s.get(u);
        d ? r._setParentAndPosition(d, l, c) : (r.pageIndex = u, r.x = l, r.y = c);
      }
    };
    return this.addCommands({
      cmd: () => {
        for (const [r, {
          newX: l,
          newY: c,
          newPageIndex: u
        }] of t)
          s(r, l, c, u);
      },
      undo: () => {
        for (const [r, {
          savedX: l,
          savedY: c,
          savedPageIndex: u
        }] of t)
          s(r, l, c, u);
      },
      mustExec: !0
    }), !0;
  }
  dragSelectedEditors(t, n) {
    if (this.#p)
      for (const s of this.#p.keys())
        s.drag(t, n);
  }
  rebuild(t) {
    if (t.parent === null) {
      const n = this.getLayer(t.pageIndex);
      n ? (n.changeParent(t), n.addOrRebuild(t)) : (this.addEditor(t), this.addToAnnotationStorage(t), t.rebuild());
    } else
      t.parent.addOrRebuild(t);
  }
  get isEditorHandlingKeyboard() {
    return this.getActive()?.shouldGetKeyboardEvents() || this.#S.size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }
  isActive(t) {
    return this.#e === t;
  }
  getActive() {
    return this.#e;
  }
  getMode() {
    return this.#C;
  }
  isEditingMode() {
    return this.#C !== pt.NONE;
  }
  get imageManager() {
    return lt(this, "imageManager", new Ad());
  }
  getSelectionBoxes(t) {
    if (!t)
      return null;
    const n = document.getSelection();
    for (let p = 0, g = n.rangeCount; p < g; p++)
      if (!t.contains(n.getRangeAt(p).commonAncestorContainer))
        return null;
    const {
      x: s,
      y: r,
      width: l,
      height: c
    } = t.getBoundingClientRect();
    let u;
    switch (t.getAttribute("data-main-rotation")) {
      case "90":
        u = (p, g, m, v) => ({
          x: (g - r) / c,
          y: 1 - (p + m - s) / l,
          width: v / c,
          height: m / l
        });
        break;
      case "180":
        u = (p, g, m, v) => ({
          x: 1 - (p + m - s) / l,
          y: 1 - (g + v - r) / c,
          width: m / l,
          height: v / c
        });
        break;
      case "270":
        u = (p, g, m, v) => ({
          x: 1 - (g + v - r) / c,
          y: (p - s) / l,
          width: v / c,
          height: m / l
        });
        break;
      default:
        u = (p, g, m, v) => ({
          x: (p - s) / l,
          y: (g - r) / c,
          width: m / l,
          height: v / c
        });
        break;
    }
    const d = [];
    for (let p = 0, g = n.rangeCount; p < g; p++) {
      const m = n.getRangeAt(p);
      if (!m.collapsed)
        for (const {
          x: v,
          y: A,
          width: S,
          height: E
        } of m.getClientRects())
          S === 0 || E === 0 || d.push(u(v, A, S, E));
    }
    return d.length === 0 ? null : d;
  }
  addChangedExistingAnnotation({
    annotationElementId: t,
    id: n
  }) {
    (this.#c ||= /* @__PURE__ */ new Map()).set(t, n);
  }
  removeChangedExistingAnnotation({
    annotationElementId: t
  }) {
    this.#c?.delete(t);
  }
  renderAnnotationElement(t) {
    const n = this.#c?.get(t.data.id);
    if (!n)
      return;
    const s = this.#l.getRawValue(n);
    s && (this.#C === pt.NONE && !s.hasBeenModified || s.renderAnnotationElement(t));
  }
  setMissingCanvas(t, n, s) {
    const r = this.#I?.get(t);
    r && (r.setCanvas(n, s), this.#I.delete(t));
  }
  addMissingCanvas(t, n) {
    (this.#I ||= /* @__PURE__ */ new Map()).set(t, n);
  }
}
class ti {
  #t = null;
  #e = !1;
  #n = null;
  #i = null;
  #s = null;
  #r = null;
  #a = !1;
  #o = null;
  #l = null;
  #c = null;
  #d = null;
  #h = !1;
  static #f = null;
  static _l10n = null;
  constructor(t) {
    this.#l = t, this.#h = t._uiManager.useNewAltTextFlow, ti.#f ||= Object.freeze({
      added: "pdfjs-editor-new-alt-text-added-button",
      "added-label": "pdfjs-editor-new-alt-text-added-button-label",
      missing: "pdfjs-editor-new-alt-text-missing-button",
      "missing-label": "pdfjs-editor-new-alt-text-missing-button-label",
      review: "pdfjs-editor-new-alt-text-to-review-button",
      "review-label": "pdfjs-editor-new-alt-text-to-review-button-label"
    });
  }
  static initialize(t) {
    ti._l10n ??= t;
  }
  async render() {
    const t = this.#n = document.createElement("button");
    t.className = "altText", t.tabIndex = "0";
    const n = this.#i = document.createElement("span");
    t.append(n), this.#h ? (t.classList.add("new"), t.setAttribute("data-l10n-id", ti.#f.missing), n.setAttribute("data-l10n-id", ti.#f["missing-label"])) : (t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button"), n.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label"));
    const s = this.#l._uiManager._signal;
    t.addEventListener("contextmenu", Rn, {
      signal: s
    }), t.addEventListener("pointerdown", (l) => l.stopPropagation(), {
      signal: s
    });
    const r = (l) => {
      l.preventDefault(), this.#l._uiManager.editAltText(this.#l), this.#h && this.#l._reportTelemetry({
        action: "pdfjs.image.alt_text.image_status_label_clicked",
        data: {
          label: this.#g
        }
      });
    };
    return t.addEventListener("click", r, {
      capture: !0,
      signal: s
    }), t.addEventListener("keydown", (l) => {
      l.target === t && l.key === "Enter" && (this.#a = !0, r(l));
    }, {
      signal: s
    }), await this.#m(), t;
  }
  get #g() {
    return this.#t && "added" || this.#t === null && this.guessedText && "review" || "missing";
  }
  finish() {
    this.#n && (this.#n.focus({
      focusVisible: this.#a
    }), this.#a = !1);
  }
  isEmpty() {
    return this.#h ? this.#t === null : !this.#t && !this.#e;
  }
  hasData() {
    return this.#h ? this.#t !== null || !!this.#c : this.isEmpty();
  }
  get guessedText() {
    return this.#c;
  }
  async setGuessedText(t) {
    this.#t === null && (this.#c = t, this.#d = await ti._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", {
      generatedAltText: t
    }), this.#m());
  }
  toggleAltTextBadge(t = !1) {
    if (!this.#h || this.#t) {
      this.#o?.remove(), this.#o = null;
      return;
    }
    if (!this.#o) {
      const n = this.#o = document.createElement("div");
      n.className = "noAltTextBadge", this.#l.div.append(n);
    }
    this.#o.classList.toggle("hidden", !t);
  }
  serialize(t) {
    let n = this.#t;
    return !t && this.#c === n && (n = this.#d), {
      altText: n,
      decorative: this.#e,
      guessedText: this.#c,
      textWithDisclaimer: this.#d
    };
  }
  get data() {
    return {
      altText: this.#t,
      decorative: this.#e
    };
  }
  set data({
    altText: t,
    decorative: n,
    guessedText: s,
    textWithDisclaimer: r,
    cancel: l = !1
  }) {
    s && (this.#c = s, this.#d = r), !(this.#t === t && this.#e === n) && (l || (this.#t = t, this.#e = n), this.#m());
  }
  toggle(t = !1) {
    this.#n && (!t && this.#r && (clearTimeout(this.#r), this.#r = null), this.#n.disabled = !t);
  }
  shown() {
    this.#l._reportTelemetry({
      action: "pdfjs.image.alt_text.image_status_label_displayed",
      data: {
        label: this.#g
      }
    });
  }
  destroy() {
    this.#n?.remove(), this.#n = null, this.#i = null, this.#s = null, this.#o?.remove(), this.#o = null;
  }
  async #m() {
    const t = this.#n;
    if (!t)
      return;
    if (this.#h) {
      if (t.classList.toggle("done", !!this.#t), t.setAttribute("data-l10n-id", ti.#f[this.#g]), this.#i?.setAttribute("data-l10n-id", ti.#f[`${this.#g}-label`]), !this.#t) {
        this.#s?.remove();
        return;
      }
    } else {
      if (!this.#t && !this.#e) {
        t.classList.remove("done"), this.#s?.remove();
        return;
      }
      t.classList.add("done"), t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
    }
    let n = this.#s;
    if (!n) {
      this.#s = n = document.createElement("span"), n.className = "tooltip", n.setAttribute("role", "tooltip"), n.id = `alt-text-tooltip-${this.#l.id}`;
      const r = 100, l = this.#l._uiManager._signal;
      l.addEventListener("abort", () => {
        clearTimeout(this.#r), this.#r = null;
      }, {
        once: !0
      }), t.addEventListener("mouseenter", () => {
        this.#r = setTimeout(() => {
          this.#r = null, this.#s.classList.add("show"), this.#l._reportTelemetry({
            action: "alt_text_tooltip"
          });
        }, r);
      }, {
        signal: l
      }), t.addEventListener("mouseleave", () => {
        this.#r && (clearTimeout(this.#r), this.#r = null), this.#s?.classList.remove("show");
      }, {
        signal: l
      });
    }
    this.#e ? n.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip") : (n.removeAttribute("data-l10n-id"), n.textContent = this.#t), n.parentNode || t.append(n), this.#l.getElementForAltText()?.setAttribute("aria-describedby", n.id);
  }
}
class Cl {
  #t = null;
  #e = null;
  #n = !1;
  #i = null;
  #s = null;
  #r = null;
  #a = null;
  #o = null;
  #l = !1;
  #c = null;
  constructor(t) {
    this.#i = t;
  }
  renderForToolbar() {
    const t = this.#e = document.createElement("button");
    return t.className = "comment", this.#d(t, !1);
  }
  renderForStandalone() {
    const t = this.#t = document.createElement("button");
    t.className = "annotationCommentButton";
    const n = this.#i.commentButtonPosition;
    if (n) {
      const {
        style: s
      } = t;
      s.insetInlineEnd = `calc(${100 * (this.#i._uiManager.direction === "ltr" ? 1 - n[0] : n[0])}% - var(--comment-button-dim))`, s.top = `calc(${100 * n[1]}% - var(--comment-button-dim))`;
      const r = this.#i.commentButtonColor;
      r && (s.backgroundColor = r);
    }
    return this.#d(t, !0);
  }
  focusButton() {
    setTimeout(() => {
      (this.#t ?? this.#e)?.focus();
    }, 0);
  }
  onUpdatedColor() {
    if (!this.#t)
      return;
    const t = this.#i.commentButtonColor;
    t && (this.#t.style.backgroundColor = t), this.#i._uiManager.updatePopupColor(this.#i);
  }
  get commentButtonWidth() {
    return (this.#t?.getBoundingClientRect().width ?? 0) / this.#i.parent.boundingClientRect.width;
  }
  get commentPopupPositionInLayer() {
    if (this.#c)
      return this.#c;
    if (!this.#t)
      return null;
    const {
      x: t,
      y: n,
      height: s
    } = this.#t.getBoundingClientRect(), {
      x: r,
      y: l,
      width: c,
      height: u
    } = this.#i.parent.boundingClientRect;
    return [(t - r) / c, (n + s - l) / u];
  }
  set commentPopupPositionInLayer(t) {
    this.#c = t;
  }
  hasDefaultPopupPosition() {
    return this.#c === null;
  }
  removeStandaloneCommentButton() {
    this.#t?.remove(), this.#t = null;
  }
  removeToolbarCommentButton() {
    this.#e?.remove(), this.#e = null;
  }
  setCommentButtonStates({
    selected: t,
    hasPopup: n
  }) {
    this.#t && (this.#t.classList.toggle("selected", t), this.#t.ariaExpanded = n);
  }
  #d(t, n) {
    if (!this.#i._uiManager.hasCommentManager())
      return null;
    t.tabIndex = "0", t.ariaHasPopup = "dialog", n ? (t.ariaControls = "commentPopup", t.setAttribute("data-l10n-id", "pdfjs-show-comment-button")) : (t.ariaControlsElements = [this.#i._uiManager.getCommentDialogElement()], t.setAttribute("data-l10n-id", "pdfjs-editor-add-comment-button"));
    const s = this.#i._uiManager._signal;
    if (!(s instanceof AbortSignal) || s.aborted)
      return t;
    t.addEventListener("contextmenu", Rn, {
      signal: s
    }), n && (t.addEventListener("focusin", (l) => {
      this.#i._focusEventsAllowed = !1, ge(l);
    }, {
      capture: !0,
      signal: s
    }), t.addEventListener("focusout", (l) => {
      this.#i._focusEventsAllowed = !0, ge(l);
    }, {
      capture: !0,
      signal: s
    })), t.addEventListener("pointerdown", (l) => l.stopPropagation(), {
      signal: s
    });
    const r = (l) => {
      l.preventDefault(), t === this.#e ? this.edit() : this.#i.toggleComment(!0);
    };
    return t.addEventListener("click", r, {
      capture: !0,
      signal: s
    }), t.addEventListener("keydown", (l) => {
      l.target === t && l.key === "Enter" && (this.#n = !0, r(l));
    }, {
      signal: s
    }), t.addEventListener("pointerenter", () => {
      this.#i.toggleComment(!1, !0);
    }, {
      signal: s
    }), t.addEventListener("pointerleave", () => {
      this.#i.toggleComment(!1, !1);
    }, {
      signal: s
    }), t;
  }
  edit(t) {
    const n = this.commentPopupPositionInLayer;
    let s, r;
    if (n)
      [s, r] = n;
    else {
      [s, r] = this.#i.commentButtonPosition;
      const {
        width: g,
        height: m,
        x: v,
        y: A
      } = this.#i;
      s = v + s * g, r = A + r * m;
    }
    const l = this.#i.parent.boundingClientRect, {
      x: c,
      y: u,
      width: d,
      height: p
    } = l;
    this.#i._uiManager.editComment(this.#i, c + s * d, u + r * p, {
      ...t,
      parentDimensions: l
    });
  }
  finish() {
    this.#e && (this.#e.focus({
      focusVisible: this.#n
    }), this.#n = !1);
  }
  isDeleted() {
    return this.#l || this.#a === "";
  }
  isEmpty() {
    return this.#a === null;
  }
  hasBeenEdited() {
    return this.isDeleted() || this.#a !== this.#s;
  }
  serialize() {
    return this.data;
  }
  get data() {
    return {
      text: this.#a,
      richText: this.#r,
      date: this.#o,
      deleted: this.isDeleted()
    };
  }
  set data(t) {
    if (t !== this.#a && (this.#r = null), t === null) {
      this.#a = "", this.#l = !0;
      return;
    }
    this.#a = t, this.#o = /* @__PURE__ */ new Date(), this.#l = !1;
  }
  restoreData({
    text: t,
    richText: n,
    date: s
  }) {
    this.#a = t, this.#r = n, this.#o = s, this.#l = !1;
  }
  setInitialText(t, n = null) {
    this.#s = t, this.data = t, this.#o = null, this.#r = n;
  }
  shown() {
  }
  destroy() {
    this.#e?.remove(), this.#e = null, this.#t?.remove(), this.#t = null, this.#a = "", this.#r = null, this.#o = null, this.#i = null, this.#n = !1, this.#l = !1;
  }
}
function Ty(y) {
  y.preventDefault();
}
const _y = 1e-4;
function Qh(y) {
  return y.cancelable ? (ge(y), !0) : (y.stopPropagation(), !1);
}
class n0 {
  #t;
  #e = !1;
  #n = null;
  #i;
  #s;
  #r;
  #a;
  #o;
  #l = !1;
  #c = null;
  #d;
  #h = /* @__PURE__ */ new Set();
  #f = null;
  #g;
  #m = null;
  #u = 0;
  constructor({
    container: t,
    isPinchingDisabled: n = null,
    isPinchingStopped: s = null,
    onPinchStart: r = null,
    onPinching: l = null,
    onPinchEnd: c = null,
    onPanning: u = null,
    signal: d
  }) {
    this.#t = t, this.#n = s, this.#i = n, this.#s = r, this.#r = l, this.#a = c, this.#o = u, this.#g = new AbortController(), this.#d = AbortSignal.any([d, this.#g.signal]), t.addEventListener("touchstart", this.#p.bind(this), {
      passive: !1,
      signal: this.#d
    });
  }
  get MIN_TOUCH_DISTANCE_TO_PINCH() {
    return 35 / Ln.pixelRatio;
  }
  get MIN_TOUCH_DISTANCE_TO_SCALE() {
    return 4 / Ln.pixelRatio;
  }
  #p(t) {
    if (this.#i?.())
      return;
    this.#v(t);
    const n = this.#h;
    for (const {
      identifier: s
    } of t.changedTouches)
      n.add(s);
    if (n.size === 1) {
      this.#y();
      return;
    }
    if (!this.#m) {
      this.#m = new AbortController();
      const s = AbortSignal.any([this.#d, this.#m.signal]), r = this.#t, l = {
        signal: s,
        capture: !1,
        passive: !1
      };
      r.addEventListener("touchmove", this.#T.bind(this), l);
      const c = this.#E.bind(this);
      r.addEventListener("touchend", c, l), r.addEventListener("touchcancel", c, l), l.capture = !0, r.addEventListener("pointerdown", ge, l), r.addEventListener("pointermove", ge, l), r.addEventListener("pointercancel", Ty, l), r.addEventListener("pointerup", Ty, l), this.#s?.();
    }
    this.#l = Qh(t), this.#A(t);
  }
  #y() {
    if (this.#c)
      return;
    const t = this.#c = new AbortController(), n = AbortSignal.any([this.#d, t.signal]), s = this.#t, r = {
      capture: !0,
      signal: n,
      passive: !1
    }, l = (c) => {
      c.pointerType === "touch" && (this.#c?.abort(), this.#c = null);
    };
    s.addEventListener("pointerdown", (c) => {
      c.pointerType === "touch" && (ge(c), l(c));
    }, r), s.addEventListener("pointerup", l, r), s.addEventListener("pointercancel", l, r);
  }
  #v(t) {
    const n = this.#h;
    if (n.size === 0)
      return;
    const s = this.#h = /* @__PURE__ */ new Set();
    for (const {
      identifier: r
    } of t.touches)
      n.has(r) && s.add(r);
  }
  #b(t) {
    const n = this.#h, s = [];
    for (const r of t.touches)
      n.has(r.identifier) && s.push(r);
    return s;
  }
  #A(t) {
    const n = this.#b(t);
    if (n.length !== 2 || this.#n?.()) {
      this.#f = null;
      return;
    }
    const [s, r] = n;
    this.#f = {
      touch0X: s.screenX,
      touch0Y: s.screenY,
      touch1X: r.screenX,
      touch1Y: r.screenY,
      panX: (s.clientX + r.clientX) / 2,
      panY: (s.clientY + r.clientY) / 2,
      screenPanX: (s.screenX + r.screenX) / 2,
      screenPanY: (s.screenY + r.screenY) / 2
    };
  }
  #T(t) {
    if (!this.#f)
      return;
    const n = this.#b(t);
    if (n.length !== 2)
      return;
    const s = this.#l;
    if (this.#l = Qh(t), !this.#l)
      return;
    if (!s) {
      this.#A(t);
      return;
    }
    const [r, l] = n, {
      screenX: c,
      screenY: u
    } = r, {
      screenX: d,
      screenY: p
    } = l, g = this.#f, {
      touch0X: m,
      touch0Y: v,
      touch1X: A,
      touch1Y: S,
      panX: E,
      panY: _
    } = g, w = A - m, C = S - v, M = d - c, B = p - u, N = (r.clientX + l.clientX) / 2, P = (r.clientY + l.clientY) / 2;
    g.panX = N, g.panY = P;
    const U = N - E, j = P - _, q = (c + d) / 2, $ = (u + p) / 2, W = Math.hypot(q - g.screenPanX, $ - g.screenPanY);
    g.screenPanX = q, g.screenPanY = $;
    const tt = Math.hypot(M, B), ct = Math.hypot(w, C), gt = this.#e ? this.MIN_TOUCH_DISTANCE_TO_SCALE : this.MIN_TOUCH_DISTANCE_TO_PINCH + 2 * W;
    if (tt < _y || ct < _y || Math.abs(ct - tt) <= gt) {
      (U || j) && this.#o?.(U, j);
      return;
    }
    g.touch0X = c, g.touch0Y = u, g.touch1X = d, g.touch1Y = p;
    const vt = Math.sign(tt - ct);
    if (!this.#e) {
      this.#e = !0, this.#u = vt, (U || j) && this.#o?.(U, j);
      return;
    }
    if (this.#u) {
      const H = this.#u;
      if (this.#u = 0, vt !== H && Math.abs(tt - ct) <= 2 * W) {
        this.#e = !1, (U || j) && this.#o?.(U, j);
        return;
      }
    }
    this.#r?.([E, _], ct, tt, U, j);
  }
  #E(t) {
    if (this.#v(t), this.#h.size >= 2) {
      this.#A(t);
      return;
    }
    const n = !!this.#f;
    this.#_(), this.#h.size === 1 && this.#y(), n && Qh(t);
  }
  #_() {
    this.#f = null, this.#e = !1, this.#u = 0, this.#l = !1, this.#m && (this.#m.abort(), this.#m = null, this.#a?.());
  }
  destroy() {
    this.#_(), this.#h.clear(), this.#g?.abort(), this.#g = null, this.#c?.abort(), this.#c = null;
  }
}
class rt {
  #t = null;
  #e = null;
  #n = null;
  #i = null;
  #s = null;
  #r = !1;
  #a = null;
  #o = "";
  #l = null;
  #c = null;
  #d = null;
  #h = null;
  #f = null;
  #g = "";
  #m = !1;
  #u = null;
  #p = !1;
  #y = !1;
  #v = !1;
  #b = null;
  #A = 0;
  #T = 0;
  #E = null;
  #_ = null;
  isSelected = !1;
  _isCopy = !1;
  _editToolbar = null;
  _initialOptions = /* @__PURE__ */ Object.create(null);
  _initialData = null;
  _isVisible = !0;
  _uiManager = null;
  _focusEventsAllowed = !0;
  static _l10n = null;
  static _l10nAlert = null;
  static _l10nResizer = null;
  #w = !1;
  #O = rt._zIndex++;
  static _borderLineWidth = -1;
  static _colorManager = new Sd();
  static _zIndex = 1;
  static _telemetryTimeout = 1e3;
  static get _resizerKeyboardManager() {
    const t = rt.prototype._resizeWithKeyboard, n = $i.TRANSLATE_SMALL, s = $i.TRANSLATE_BIG;
    return lt(this, "_resizerKeyboardManager", new ln([[["ArrowLeft"], t, {
      args: [-n, 0]
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t, {
      args: [-s, 0]
    }], [["ArrowRight"], t, {
      args: [n, 0]
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t, {
      args: [s, 0]
    }], [["ArrowUp"], t, {
      args: [0, -n]
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t, {
      args: [0, -s]
    }], [["ArrowDown"], t, {
      args: [0, n]
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t, {
      args: [0, s]
    }], [["Escape"], rt.prototype._stopResizingWithKeyboard]]));
  }
  constructor(t) {
    this.parent = t.parent, this.id = t.id, this.width = this.height = null, this.pageIndex = t.parent.pageIndex, this.name = t.name, this.div = null, this._uiManager = t.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = t.isCentered, this._structTreeParentId = null, this.annotationElementId = t.annotationElementId || null, this.creationDate = t.creationDate || /* @__PURE__ */ new Date(), this.modificationDate = t.modificationDate || null, this.canAddComment = !0;
    const {
      rotation: n,
      rawDims: {
        pageWidth: s,
        pageHeight: r,
        pageX: l,
        pageY: c
      }
    } = this.parent.viewport;
    this.rotation = n, this.pageRotation = (360 + n - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [s, r], this.pageTranslation = [l, c];
    const [u, d] = this.parentDimensions;
    this.x = t.x / u, this.y = t.y / d, this.isAttachedToDOM = !1, this.deleted = !1;
  }
  updatePageIndex(t) {
    this.pageIndex = t;
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  get mode() {
    return Object.getPrototypeOf(this).constructor._editorType;
  }
  static get isDrawer() {
    return !1;
  }
  static get _defaultLineColor() {
    return lt(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(t) {
    const n = new nS({
      id: t._uiManager.getId(),
      parent: t.parent,
      uiManager: t._uiManager
    });
    n.annotationElementId = t.annotationElementId, n.deleted = !0, n._uiManager.addToAnnotationStorage(n);
  }
  static initialize(t, n) {
    if (rt._l10n ??= t, rt._l10nAlert ??= Object.freeze({
      highlight: "pdfjs-editor-highlight-added-alert",
      freetext: "pdfjs-editor-freetext-added-alert",
      ink: "pdfjs-editor-ink-added-alert",
      stamp: "pdfjs-editor-stamp-added-alert",
      signature: "pdfjs-editor-signature-added-alert"
    }), rt._l10nResizer ??= Object.freeze({
      topLeft: "pdfjs-editor-resizer-top-left",
      topMiddle: "pdfjs-editor-resizer-top-middle",
      topRight: "pdfjs-editor-resizer-top-right",
      middleRight: "pdfjs-editor-resizer-middle-right",
      bottomRight: "pdfjs-editor-resizer-bottom-right",
      bottomMiddle: "pdfjs-editor-resizer-bottom-middle",
      bottomLeft: "pdfjs-editor-resizer-bottom-left",
      middleLeft: "pdfjs-editor-resizer-middle-left"
    }), rt._borderLineWidth !== -1)
      return;
    const s = getComputedStyle(document.documentElement);
    rt._borderLineWidth = parseFloat(s.getPropertyValue("--outline-width")) || 0;
  }
  static updateDefaultParams(t, n) {
  }
  static get defaultPropertiesToUpdate() {
    return [];
  }
  static isHandlingMimeForPasting(t) {
    return !1;
  }
  static paste(t, n) {
    kt("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return this.#w;
  }
  set _isDraggable(t) {
    this.#w = t, this.div?.classList.toggle("draggable", t);
  }
  get uid() {
    return this.annotationElementId || this.id;
  }
  get isEnterHandled() {
    return !0;
  }
  center() {
    const [t, n] = this.pageDimensions;
    switch (this.parentRotation) {
      case 90:
        this.x -= this.height * n / (t * 2), this.y += this.width * t / (n * 2);
        break;
      case 180:
        this.x += this.width / 2, this.y += this.height / 2;
        break;
      case 270:
        this.x += this.height * n / (t * 2), this.y -= this.width * t / (n * 2);
        break;
      default:
        this.x -= this.width / 2, this.y -= this.height / 2;
        break;
    }
    this.fixAndSetPosition();
  }
  addCommands(t) {
    this._uiManager.addCommands(t);
  }
  get currentLayer() {
    return this._uiManager.currentLayer;
  }
  setInBackground() {
    this.div.style.zIndex = 0;
  }
  setInForeground() {
    this.div.style.zIndex = this.#O;
  }
  setParent(t) {
    t !== null ? (this.pageIndex = t.pageIndex, this.pageDimensions = t.pageDimensions) : (this.#B(), this.#h?.remove(), this.#h = null), this.parent = t;
  }
  focusin(t) {
    this._focusEventsAllowed && (this.#m ? this.#m = !1 : this.parent.setSelected(this));
  }
  focusout(t) {
    !this._focusEventsAllowed || !this.isAttachedToDOM || t.relatedTarget?.closest(`#${this.id}`) || (t.preventDefault(), this.parent?.isMultipleSelection || this.commitOrRemove());
  }
  commitOrRemove() {
    this.isEmpty() ? this.remove() : this.commit();
  }
  commit() {
    this.isInEditMode() && this.addToAnnotationStorage();
  }
  addToAnnotationStorage() {
    this._uiManager.addToAnnotationStorage(this);
  }
  setAt(t, n, s, r) {
    const [l, c] = this.parentDimensions;
    [s, r] = this.screenToPageTranslation(s, r), this.x = (t + s) / l, this.y = (n + r) / c, this.fixAndSetPosition();
  }
  _moveAfterPaste(t, n) {
    if (this.isClone) {
      delete this.isClone;
      return;
    }
    const [s, r] = this.parentDimensions;
    this.setAt(t * s, n * r, this.width * s, this.height * r), this._onTranslated();
  }
  #M([t, n], s, r) {
    [s, r] = this.screenToPageTranslation(s, r), this.x += s / t, this.y += r / n, this._onTranslating(this.x, this.y), this.fixAndSetPosition();
  }
  translate(t, n) {
    this.#M(this.parentDimensions, t, n);
  }
  translateInPage(t, n) {
    this.#u ||= [this.x, this.y, this.width, this.height], this.#M(this.pageDimensions, t, n), this.div.scrollIntoView({
      block: "nearest"
    });
  }
  translationDone() {
    this._onTranslated(this.x, this.y);
  }
  drag(t, n) {
    this.#u ||= [this.x, this.y, this.width, this.height];
    const {
      div: s,
      parentDimensions: [r, l]
    } = this;
    if (this.x += t / r, this.y += n / l, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
      const {
        x: m,
        y: v
      } = this.div.getBoundingClientRect();
      this.parent.findNewParent(this, m, v) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
    }
    let {
      x: c,
      y: u
    } = this;
    const [d, p] = this.getBaseTranslation();
    c += d, u += p;
    const {
      style: g
    } = s;
    g.left = `${(100 * c).toFixed(2)}%`, g.top = `${(100 * u).toFixed(2)}%`, this._onTranslating(c, u);
  }
  _onTranslating(t, n) {
  }
  _onTranslated(t, n) {
  }
  get _hasBeenMoved() {
    return !!this.#u && (this.#u[0] !== this.x || this.#u[1] !== this.y);
  }
  get _hasBeenResized() {
    return !!this.#u && (this.#u[2] !== this.width || this.#u[3] !== this.height);
  }
  getBaseTranslation() {
    const [t, n] = this.parentDimensions, {
      _borderLineWidth: s
    } = rt, r = s / t, l = s / n;
    switch (this.rotation) {
      case 90:
        return [-r, l];
      case 180:
        return [r, l];
      case 270:
        return [r, -l];
      default:
        return [-r, -l];
    }
  }
  get _mustFixPosition() {
    return !0;
  }
  fixAndSetPosition(t = this.rotation) {
    const {
      div: {
        style: n
      },
      pageDimensions: [s, r]
    } = this;
    let {
      x: l,
      y: c,
      width: u,
      height: d
    } = this;
    if (u *= s, d *= r, l *= s, c *= r, this._mustFixPosition)
      switch (t) {
        case 0:
          l = $t(l, 0, s - u), c = $t(c, 0, r - d);
          break;
        case 90:
          l = $t(l, 0, s - d), c = $t(c, u, r);
          break;
        case 180:
          l = $t(l, u, s), c = $t(c, d, r);
          break;
        case 270:
          l = $t(l, d, s), c = $t(c, 0, r - u);
          break;
      }
    this.x = l /= s, this.y = c /= r;
    const [p, g] = this.getBaseTranslation();
    l += p, c += g, n.left = `${(100 * l).toFixed(2)}%`, n.top = `${(100 * c).toFixed(2)}%`, this.moveInDOM();
  }
  static #x(t, n, s) {
    switch (s) {
      case 90:
        return [n, -t];
      case 180:
        return [-t, -n];
      case 270:
        return [-n, t];
      default:
        return [t, n];
    }
  }
  screenToPageTranslation(t, n) {
    return rt.#x(t, n, this.parentRotation);
  }
  pageTranslationToScreen(t, n) {
    return rt.#x(t, n, 360 - this.parentRotation);
  }
  #R(t) {
    switch (t) {
      case 90: {
        const [n, s] = this.pageDimensions;
        return [0, -n / s, s / n, 0];
      }
      case 180:
        return [-1, 0, 0, -1];
      case 270: {
        const [n, s] = this.pageDimensions;
        return [0, n / s, -s / n, 0];
      }
      default:
        return [1, 0, 0, 1];
    }
  }
  get parentScale() {
    return this._uiManager.viewParameters.realScale;
  }
  get parentRotation() {
    return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
  }
  get parentDimensions() {
    const {
      parentScale: t,
      pageDimensions: [n, s]
    } = this;
    return [n * t, s * t];
  }
  setDims() {
    const {
      div: {
        style: t
      },
      width: n,
      height: s
    } = this;
    t.width = `${(100 * n).toFixed(2)}%`, t.height = `${(100 * s).toFixed(2)}%`;
  }
  getInitialTranslation() {
    return [0, 0];
  }
  #N() {
    if (this.#l)
      return;
    this.#l = document.createElement("div"), this.#l.classList.add("resizers");
    const t = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"], n = this._uiManager._signal;
    for (const s of t) {
      const r = document.createElement("div");
      this.#l.append(r), r.classList.add("resizer", s), r.setAttribute("data-resizer-name", s), r.addEventListener("pointerdown", this.#L.bind(this, s), {
        signal: n
      }), r.addEventListener("contextmenu", Rn, {
        signal: n
      }), r.tabIndex = -1;
    }
    this.div.prepend(this.#l);
  }
  #L(t, n) {
    n.preventDefault();
    const {
      isMac: s
    } = Yt.platform;
    if (n.button !== 0 || n.ctrlKey && s)
      return;
    this.#n?.toggle(!1);
    const r = this._isDraggable;
    this._isDraggable = !1, this.#c = [n.screenX, n.screenY];
    const l = new AbortController(), c = this._uiManager.combinedSignal(l);
    this.parent.togglePointerEvents(!1), window.addEventListener("pointermove", this.#P.bind(this, t), {
      passive: !0,
      capture: !0,
      signal: c
    }), window.addEventListener("touchmove", ge, {
      passive: !1,
      signal: c
    }), window.addEventListener("contextmenu", Rn, {
      signal: c
    }), this.#d = {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    };
    const u = this.parent.div.style.cursor, d = this.div.style.cursor;
    this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(n.target).cursor;
    const p = () => {
      l.abort(), this.parent.togglePointerEvents(!0), this.#n?.toggle(!0), this._isDraggable = r, this.parent.div.style.cursor = u, this.div.style.cursor = d, this.#k();
    };
    window.addEventListener("pointerup", p, {
      signal: c
    }), window.addEventListener("blur", p, {
      signal: c
    });
  }
  #U(t, n, s, r) {
    this.width = s, this.height = r, this.x = t, this.y = n, this.setDims(), this.fixAndSetPosition(), this._onResized();
  }
  _onResized() {
  }
  #k() {
    if (!this.#d)
      return;
    const {
      savedX: t,
      savedY: n,
      savedWidth: s,
      savedHeight: r
    } = this.#d;
    this.#d = null;
    const l = this.x, c = this.y, u = this.width, d = this.height;
    l === t && c === n && u === s && d === r || this.addCommands({
      cmd: this.#U.bind(this, l, c, u, d),
      undo: this.#U.bind(this, t, n, s, r),
      mustExec: !0
    });
  }
  static _round(t) {
    return Math.round(t * 1e4) / 1e4;
  }
  #P(t, n) {
    const [s, r] = this.parentDimensions, l = this.x, c = this.y, u = this.width, d = this.height, p = rt.MIN_SIZE / s, g = rt.MIN_SIZE / r, m = this.#R(this.rotation), v = (H, X) => [m[0] * H + m[2] * X, m[1] * H + m[3] * X], A = this.#R(360 - this.rotation), S = (H, X) => [A[0] * H + A[2] * X, A[1] * H + A[3] * X];
    let E, _, w = !1, C = !1;
    switch (t) {
      case "topLeft":
        w = !0, E = (H, X) => [0, 0], _ = (H, X) => [H, X];
        break;
      case "topMiddle":
        E = (H, X) => [H / 2, 0], _ = (H, X) => [H / 2, X];
        break;
      case "topRight":
        w = !0, E = (H, X) => [H, 0], _ = (H, X) => [0, X];
        break;
      case "middleRight":
        C = !0, E = (H, X) => [H, X / 2], _ = (H, X) => [0, X / 2];
        break;
      case "bottomRight":
        w = !0, E = (H, X) => [H, X], _ = (H, X) => [0, 0];
        break;
      case "bottomMiddle":
        E = (H, X) => [H / 2, X], _ = (H, X) => [H / 2, 0];
        break;
      case "bottomLeft":
        w = !0, E = (H, X) => [0, X], _ = (H, X) => [H, 0];
        break;
      case "middleLeft":
        C = !0, E = (H, X) => [0, X / 2], _ = (H, X) => [H, X / 2];
        break;
    }
    const M = E(u, d), B = _(u, d);
    let N = v(...B);
    const P = rt._round(l + N[0]), U = rt._round(c + N[1]);
    let j = 1, q = 1, $, W;
    if (n.fromKeyboard)
      ({
        deltaX: $,
        deltaY: W
      } = n);
    else {
      const {
        screenX: H,
        screenY: X
      } = n, [nt, mt] = this.#c;
      [$, W] = this.screenToPageTranslation(H - nt, X - mt), this.#c[0] = H, this.#c[1] = X;
    }
    if ([$, W] = S($ / s, W / r), w) {
      const H = Math.hypot(u, d);
      j = q = Math.max(Math.min(Math.hypot(B[0] - M[0] - $, B[1] - M[1] - W) / H, 1 / u, 1 / d), p / u, g / d);
    } else C ? j = $t(Math.abs(B[0] - M[0] - $), p, 1) / u : q = $t(Math.abs(B[1] - M[1] - W), g, 1) / d;
    const tt = rt._round(u * j), ct = rt._round(d * q);
    N = v(..._(tt, ct));
    const gt = P - N[0], vt = U - N[1];
    this.#u ||= [this.x, this.y, this.width, this.height], this.width = tt, this.height = ct, this.x = gt, this.y = vt, this.setDims(), this.fixAndSetPosition(), this._onResizing();
  }
  _onResizing() {
  }
  altTextFinish() {
    this.#n?.finish();
  }
  get toolbarButtons() {
    return null;
  }
  async addEditToolbar() {
    if (this._editToolbar || this.#y)
      return this._editToolbar;
    this._editToolbar = new Fr(this), this.div.append(this._editToolbar.render());
    const {
      toolbarButtons: t
    } = this;
    if (t)
      for (const [n, s] of t)
        await this._editToolbar.addButton(n, s);
    return this.hasComment || this._editToolbar.addButton("comment", this.addCommentButton()), this._editToolbar.addButton("delete"), this._editToolbar;
  }
  addCommentButtonInToolbar() {
    this._editToolbar?.addButtonBefore("comment", this.addCommentButton(), ".deleteButton");
  }
  removeCommentButtonFromToolbar() {
    this._editToolbar?.removeButton("comment");
  }
  removeEditToolbar() {
    this._editToolbar?.remove(), this._editToolbar = null, this.#n?.destroy();
  }
  addContainer(t) {
    const n = this._editToolbar?.div;
    n ? n.before(t) : this.div.append(t);
  }
  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }
  createAltText() {
    return this.#n || (ti.initialize(rt._l10n), this.#n = new ti(this), this.#t && (this.#n.data = this.#t, this.#t = null)), this.#n;
  }
  get altTextData() {
    return this.#n?.data;
  }
  set altTextData(t) {
    this.#n && (this.#n.data = t);
  }
  get guessedAltText() {
    return this.#n?.guessedText;
  }
  async setGuessedAltText(t) {
    await this.#n?.setGuessedText(t);
  }
  serializeAltText(t) {
    return this.#n?.serialize(t);
  }
  hasAltText() {
    return !!this.#n && !this.#n.isEmpty();
  }
  hasAltTextData() {
    return this.#n?.hasData() ?? !1;
  }
  focusCommentButton() {
    this.#i?.focusButton();
  }
  addCommentButton() {
    return this.canAddComment ? this.#i ||= new Cl(this) : null;
  }
  addStandaloneCommentButton() {
    if (this._uiManager.hasCommentManager()) {
      if (this.#s) {
        this._uiManager.isEditingMode() && this.#s.classList.remove("hidden");
        return;
      }
      this.hasComment && (this.#s = this.#i.renderForStandalone(), this.div.append(this.#s));
    }
  }
  removeStandaloneCommentButton() {
    this.#i.removeStandaloneCommentButton(), this.#s = null;
  }
  hideStandaloneCommentButton() {
    this.#s?.classList.add("hidden");
  }
  get comment() {
    if (!this.#i)
      return null;
    const {
      data: {
        richText: t,
        text: n,
        date: s,
        deleted: r
      }
    } = this.#i;
    return {
      text: n,
      richText: t,
      date: s,
      deleted: r,
      color: this.getNonHCMColor(),
      opacity: this.opacity ?? 1
    };
  }
  set comment(t) {
    this.#i ||= new Cl(this), typeof t == "object" && t !== null ? this.#i.restoreData(t) : this.#i.data = t, this.hasComment ? (this.removeCommentButtonFromToolbar(), this.addStandaloneCommentButton(), this._uiManager.updateComment(this)) : (this.addCommentButtonInToolbar(), this.removeStandaloneCommentButton(), this._uiManager.removeComment(this));
  }
  setCommentData({
    comment: t,
    popupRef: n,
    richText: s
  }) {
    if (!n || (this.#i ||= new Cl(this), this.#i.setInitialText(t, s), !this.annotationElementId))
      return;
    const r = this._uiManager.getAndRemoveDataFromAnnotationStorage(this.annotationElementId);
    r && this.updateFromAnnotationLayer(r);
  }
  get hasEditedComment() {
    return this.#i?.hasBeenEdited();
  }
  get hasDeletedComment() {
    return this.#i?.isDeleted();
  }
  get hasComment() {
    return !!this.#i && !this.#i.isEmpty() && !this.#i.isDeleted();
  }
  async editComment(t) {
    this.#i ||= new Cl(this), this.#i.edit(t);
  }
  toggleComment(t, n = void 0) {
    this.hasComment && this._uiManager.toggleComment(this, t, n);
  }
  setSelectedCommentButton(t) {
    this.#i.setSelectedButton(t);
  }
  addComment(t) {
    if (this.hasEditedComment) {
      const [, , , r] = t.rect, [l] = this.pageDimensions, [c] = this.pageTranslation, u = c + l + 1, d = r - 100, p = u + 180;
      t.popup = {
        contents: this.comment.text,
        deleted: this.comment.deleted,
        rect: [u, d, p, r]
      };
    }
  }
  updateFromAnnotationLayer({
    popup: {
      contents: t,
      deleted: n
    }
  }) {
    this.#i.data = n ? null : t;
  }
  get parentBoundingClientRect() {
    return this.parent.boundingClientRect;
  }
  render() {
    const t = this.div = document.createElement("div");
    t.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), t.className = this.name, t.setAttribute("id", this.id), t.tabIndex = this.#r ? -1 : 0, t.setAttribute("role", "application"), this.defaultL10nId && t.setAttribute("data-l10n-id", this.defaultL10nId), this._isVisible || t.classList.add("hidden"), this.setInForeground(), this.#F();
    const [n, s] = this.parentDimensions;
    this.parentRotation % 180 !== 0 && (t.style.maxWidth = `${(100 * s / n).toFixed(2)}%`, t.style.maxHeight = `${(100 * n / s).toFixed(2)}%`);
    const [r, l] = this.getInitialTranslation();
    return this.translate(r, l), e0(this, t, ["keydown", "pointerdown", "dblclick"]), this.#G(), this.addStandaloneCommentButton(), this._uiManager._editorUndoBar?.hide(), t;
  }
  #V() {
    this.#d = {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    }, this.#n?.toggle(!1), this.parent.togglePointerEvents(!1);
  }
  #I(t, n, s) {
    let l = 0.7 * (s / n) + 1 - 0.7;
    if (l === 1)
      return;
    const c = this.#R(this.rotation), u = (P, U) => [c[0] * P + c[2] * U, c[1] * P + c[3] * U], [d, p] = this.parentDimensions, g = this.x, m = this.y, v = this.width, A = this.height, S = rt.MIN_SIZE / d, E = rt.MIN_SIZE / p;
    l = Math.max(Math.min(l, 1 / v, 1 / A), S / v, E / A);
    const _ = rt._round(v * l), w = rt._round(A * l);
    if (_ === v && w === A)
      return;
    this.#u ||= [g, m, v, A];
    const C = u(v / 2, A / 2), M = rt._round(g + C[0]), B = rt._round(m + C[1]), N = u(_ / 2, w / 2);
    this.x = M - N[0], this.y = B - N[1], this.width = _, this.height = w, this.setDims(), this.fixAndSetPosition(), this._onResizing();
  }
  #H() {
    this.#n?.toggle(!0), this.parent.togglePointerEvents(!0), this.#k();
  }
  pointerdown(t) {
    const {
      isMac: n
    } = Yt.platform;
    if (t.button !== 0 || t.ctrlKey && n) {
      t.preventDefault();
      return;
    }
    if (this.#m = !0, this._isDraggable) {
      this.#S(t);
      return;
    }
    this.#C(t);
  }
  #C(t) {
    const {
      isMac: n
    } = Yt.platform;
    t.ctrlKey && !n || t.shiftKey || t.metaKey && n ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
  }
  #S(t) {
    const {
      isSelected: n
    } = this;
    this._uiManager.setUpDragSession();
    let s = !1;
    const r = new AbortController(), l = this._uiManager.combinedSignal(r), c = {
      capture: !0,
      passive: !1,
      signal: l
    }, u = (p) => {
      r.abort(), this.#a = null, this.#m = !1, this._uiManager.endDragSession() || this.#C(p), s && this._onStopDragging();
    };
    n && (this.#A = t.clientX, this.#T = t.clientY, this.#a = t.pointerId, this.#o = t.pointerType, window.addEventListener("pointermove", (p) => {
      s || (s = !0, this._uiManager.toggleComment(this, !0, !1), this._onStartDragging());
      const {
        clientX: g,
        clientY: m,
        pointerId: v
      } = p;
      if (v !== this.#a) {
        ge(p);
        return;
      }
      const [A, S] = this.screenToPageTranslation(g - this.#A, m - this.#T);
      this.#A = g, this.#T = m, this._uiManager.dragSelectedEditors(A, S), this.div.scrollIntoView({
        block: "nearest"
      });
    }, c), window.addEventListener("touchmove", ge, c), window.addEventListener("pointerdown", (p) => {
      p.pointerType === this.#o && (this.#_ || p.isPrimary) && u(p), ge(p);
    }, c));
    const d = (p) => {
      if (!this.#a || this.#a === p.pointerId) {
        u(p);
        return;
      }
      ge(p);
    };
    window.addEventListener("pointerup", d, {
      signal: l
    }), window.addEventListener("blur", d, {
      signal: l
    });
  }
  _onStartDragging() {
  }
  _onStopDragging() {
  }
  moveInDOM() {
    this.#b && clearTimeout(this.#b), this.#b = setTimeout(() => {
      this.#b = null, this.parent?.moveEditorInDOM(this);
    }, 0);
  }
  _setParentAndPosition(t, n, s) {
    t.changeParent(this), this.x = n, this.y = s, this.fixAndSetPosition(), this._onTranslated();
  }
  getRect(t, n, s = this.rotation) {
    const r = this.parentScale, [l, c] = this.pageDimensions, [u, d] = this.pageTranslation, p = t / r, g = n / r, m = this.x * l, v = this.y * c, A = this.width * l, S = this.height * c;
    switch (s) {
      case 0:
        return [m + p + u, c - v - g - S + d, m + p + A + u, c - v - g + d];
      case 90:
        return [m + g + u, c - v + p + d, m + g + S + u, c - v + p + A + d];
      case 180:
        return [m - p - A + u, c - v + g + d, m - p + u, c - v + g + S + d];
      case 270:
        return [m - g - S + u, c - v - p - A + d, m - g + u, c - v - p + d];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getRectInCurrentCoords(t, n) {
    const [s, r, l, c] = t, u = l - s, d = c - r;
    switch (this.rotation) {
      case 0:
        return [s, n - c, u, d];
      case 90:
        return [s, n - r, d, u];
      case 180:
        return [l, n - r, u, d];
      case 270:
        return [l, n - c, d, u];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getPDFRect() {
    return this.getRect(0, 0);
  }
  getNonHCMColor() {
    return this.color && rt._colorManager.convert(this._uiManager.getNonHCMColor(this.color));
  }
  onUpdatedColor() {
    this.#i?.onUpdatedColor();
  }
  getData() {
    const {
      comment: {
        text: t,
        color: n,
        date: s,
        opacity: r,
        deleted: l,
        richText: c
      },
      uid: u,
      pageIndex: d,
      creationDate: p,
      modificationDate: g
    } = this;
    return {
      id: u,
      pageIndex: d,
      rect: this.getPDFRect(),
      richText: c,
      contentsObj: {
        str: t
      },
      creationDate: p,
      modificationDate: s || g,
      popupRef: !l,
      color: n,
      opacity: r
    };
  }
  onceAdded(t) {
  }
  isEmpty() {
    return !1;
  }
  enableEditMode() {
    return this.isInEditMode() ? !1 : (this.parent.setEditingState(!1), this.#y = !0, !0);
  }
  disableEditMode() {
    return this.isInEditMode() ? (this.parent.setEditingState(!0), this.#y = !1, !0) : !1;
  }
  isInEditMode() {
    return this.#y;
  }
  shouldGetKeyboardEvents() {
    return this.#v;
  }
  needsToBeRebuilt() {
    return this.div && !this.isAttachedToDOM;
  }
  get isOnScreen() {
    const {
      top: t,
      left: n,
      bottom: s,
      right: r
    } = this.getClientDimensions(), {
      innerHeight: l,
      innerWidth: c
    } = window;
    return n < c && r > 0 && t < l && s > 0;
  }
  #F() {
    if (this.#f || !this.div)
      return;
    this.#f = new AbortController();
    const t = this._uiManager.combinedSignal(this.#f);
    this.div.addEventListener("focusin", this.focusin.bind(this), {
      signal: t
    }), this.div.addEventListener("focusout", this.focusout.bind(this), {
      signal: t
    });
  }
  #G() {
    this.#_ || !this.div || !this.isResizable || !this._uiManager._supportsPinchToZoom || (this.#_ = new n0({
      container: this.div,
      isPinchingDisabled: () => !this.isSelected,
      onPinchStart: this.#V.bind(this),
      onPinching: this.#I.bind(this),
      onPinchEnd: this.#H.bind(this),
      signal: this._uiManager._signal
    }));
  }
  rebuild() {
    this.#F(), this.#G();
  }
  rotate(t) {
  }
  resize() {
  }
  serializeDeleted() {
    return {
      id: this.annotationElementId,
      deleted: !0,
      pageIndex: this.pageIndex,
      popupRef: this._initialData?.popupRef || ""
    };
  }
  serialize(t = !1, n = null) {
    return {
      annotationType: this.mode,
      pageIndex: this.pageIndex,
      rect: this.getPDFRect(),
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId,
      popupRef: this._initialData?.popupRef || ""
    };
  }
  static async deserialize(t, n, s) {
    const r = new this.prototype.constructor({
      parent: n,
      id: s.getId(),
      uiManager: s,
      annotationElementId: t.annotationElementId,
      creationDate: t.creationDate,
      modificationDate: t.modificationDate
    });
    r.rotation = t.rotation, r.#t = t.accessibilityData, r._isCopy = t.isCopy || !1;
    const [l, c] = r.pageDimensions, [u, d, p, g] = r.getRectInCurrentCoords(t.rect, c);
    return r.x = u / l, r.y = d / c, r.width = p / l, r.height = g / c, r;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    if (this.#f?.abort(), this.#f = null, this.isEmpty() || this.commit(), this.#_?.destroy(), this.#_ = null, this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), this.hideCommentPopup(), this.#b && (clearTimeout(this.#b), this.#b = null), this.#B(), this.removeEditToolbar(), this.#E) {
      for (const t of this.#E.values())
        clearTimeout(t);
      this.#E = null;
    }
    this.parent = null, this.#h?.remove(), this.#h = null;
  }
  get isResizable() {
    return !1;
  }
  makeResizable() {
    this.isResizable && (this.#N(), this.#l.classList.remove("hidden"));
  }
  get toolbarPosition() {
    return null;
  }
  get commentButtonPosition() {
    return this._uiManager.direction === "ltr" ? [1, 0] : [0, 0];
  }
  get commentButtonPositionInPage() {
    const {
      commentButtonPosition: [t, n]
    } = this, [s, r, l, c] = this.getPDFRect();
    return [rt._round(s + (l - s) * t), rt._round(r + (c - r) * (1 - n))];
  }
  get commentButtonColor() {
    return this._uiManager.makeCommentColor(this.getNonHCMColor(), this.opacity);
  }
  get commentPopupPosition() {
    return this.#i.commentPopupPositionInLayer;
  }
  set commentPopupPosition(t) {
    this.#i.commentPopupPositionInLayer = t;
  }
  hasDefaultPopupPosition() {
    return this.#i.hasDefaultPopupPosition();
  }
  get commentButtonWidth() {
    return this.#i.commentButtonWidth;
  }
  get elementBeforePopup() {
    return this.div;
  }
  setCommentButtonStates(t) {
    this.#i?.setCommentButtonStates(t);
  }
  keydown(t) {
    if (!this.isResizable || t.target !== this.div || t.key !== "Enter")
      return;
    this._uiManager.setSelected(this), this.#d = {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    };
    const n = this.#l.children;
    if (!this.#e) {
      this.#e = Array.from(n);
      const c = this.#Y.bind(this), u = this.#Z.bind(this), d = this._uiManager._signal;
      for (const p of this.#e) {
        const g = p.getAttribute("data-resizer-name");
        p.setAttribute("role", "spinbutton"), p.addEventListener("keydown", c, {
          signal: d
        }), p.addEventListener("blur", u, {
          signal: d
        }), p.addEventListener("focus", this.#K.bind(this, g), {
          signal: d
        }), p.setAttribute("data-l10n-id", rt._l10nResizer[g]);
      }
    }
    const s = this.#e[0];
    let r = 0;
    for (const c of n) {
      if (c === s)
        break;
      r++;
    }
    const l = (360 - this.rotation + this.parentRotation) % 360 / 90 * (this.#e.length / 4);
    if (l !== r) {
      if (l < r)
        for (let u = 0; u < r - l; u++)
          this.#l.append(this.#l.firstElementChild);
      else if (l > r)
        for (let u = 0; u < l - r; u++)
          this.#l.firstElementChild.before(this.#l.lastElementChild);
      let c = 0;
      for (const u of n) {
        const p = this.#e[c++].getAttribute("data-resizer-name");
        u.setAttribute("data-l10n-id", rt._l10nResizer[p]);
      }
    }
    this.#Q(0), this.#v = !0, this.#l.firstElementChild.focus({
      focusVisible: !0
    }), t.preventDefault(), t.stopImmediatePropagation();
  }
  #Y(t) {
    rt._resizerKeyboardManager.exec(this, t);
  }
  #Z(t) {
    this.#v && t.relatedTarget?.parentNode !== this.#l && this.#B();
  }
  #K(t) {
    this.#g = this.#v ? t : "";
  }
  #Q(t) {
    if (this.#e)
      for (const n of this.#e)
        n.tabIndex = t;
  }
  _resizeWithKeyboard(t, n) {
    this.#v && this.#P(this.#g, {
      deltaX: t,
      deltaY: n,
      fromKeyboard: !0
    });
  }
  #B() {
    this.#v = !1, this.#Q(-1), this.#k();
  }
  _stopResizingWithKeyboard() {
    this.#B(), this.div.focus();
  }
  select() {
    if (this.isSelected && this._editToolbar) {
      this._editToolbar.show();
      return;
    }
    if (this.isSelected = !0, this.makeResizable(), this.div?.classList.add("selectedEditor"), !this._editToolbar) {
      this.addEditToolbar().then(() => {
        this.div?.classList.contains("selectedEditor") && this._editToolbar?.show();
      });
      return;
    }
    this._editToolbar?.show(), this.#n?.toggleAltTextBadge(!1);
  }
  focus() {
    this.div && !this.div.contains(document.activeElement) && setTimeout(() => this.div?.focus({
      preventScroll: !0
    }), 0);
  }
  unselect() {
    this.isSelected && (this.isSelected = !1, this.#l?.classList.add("hidden"), this.div?.classList.remove("selectedEditor"), this.div?.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
      preventScroll: !0
    }), this._editToolbar?.hide(), this.#n?.toggleAltTextBadge(!0), this.hideCommentPopup());
  }
  hideCommentPopup() {
    this.hasComment && this._uiManager.toggleComment(null);
  }
  updateParams(t, n) {
  }
  disableEditing() {
  }
  enableEditing() {
  }
  get canChangeContent() {
    return !1;
  }
  enterInEditMode() {
    this.canChangeContent && (this.enableEditMode(), this.div.focus());
  }
  dblclick(t) {
    t.target.nodeName !== "BUTTON" && (this.enterInEditMode(), this.parent.updateToolbar({
      mode: this.constructor._editorType,
      editId: this.uid
    }));
  }
  getElementForAltText() {
    return this.div;
  }
  get contentDiv() {
    return this.div;
  }
  get isEditing() {
    return this.#p;
  }
  set isEditing(t) {
    this.#p = t, this.parent && (t ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
  }
  static get MIN_SIZE() {
    return 16;
  }
  static canCreateNewEmptyEditor() {
    return !0;
  }
  get telemetryInitialData() {
    return {
      action: "added"
    };
  }
  get telemetryFinalData() {
    return null;
  }
  _reportTelemetry(t, n = !1) {
    if (n) {
      this.#E ||= /* @__PURE__ */ new Map();
      const {
        action: s
      } = t;
      let r = this.#E.get(s);
      r && clearTimeout(r), r = setTimeout(() => {
        this._reportTelemetry(t), this.#E.delete(s), this.#E.size === 0 && (this.#E = null);
      }, rt._telemetryTimeout), this.#E.set(s, r);
      return;
    }
    t.type ||= this.editorType, this._uiManager._eventBus.dispatch("reporttelemetry", {
      source: this,
      details: {
        type: "editing",
        data: t
      }
    });
  }
  show(t = this._isVisible) {
    this.div.classList.toggle("hidden", !t), this._isVisible = t;
  }
  enable() {
    this.div && (this.div.tabIndex = 0), this.#r = !1;
  }
  disable() {
    this.div && (this.div.tabIndex = -1), this.#r = !0;
  }
  updateFakeAnnotationElement(t) {
    if (!this.#h && !this.deleted) {
      this.#h = t.addFakeAnnotation(this);
      return;
    }
    if (this.deleted) {
      this.#h.remove(), this.#h = null;
      return;
    }
    (this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized) && this.#h.updateEdited({
      rect: this.getPDFRect(),
      popup: this.comment
    });
  }
  renderAnnotationElement(t) {
    if (this.deleted)
      return t.hide(), null;
    let n = t.container.querySelector(".annotationContent");
    if (!n)
      n = document.createElement("div"), n.classList.add("annotationContent", this.editorType), t.container.prepend(n);
    else if (n.nodeName === "CANVAS") {
      const s = n;
      n = document.createElement("div"), n.classList.add("annotationContent", this.editorType), s.before(n);
    }
    return n;
  }
  resetAnnotationElement(t) {
    const {
      firstElementChild: n
    } = t.container;
    n?.nodeName === "DIV" && n.classList.contains("annotationContent") && n.remove();
  }
}
class nS extends rt {
  constructor(t) {
    super(t), this.annotationElementId = t.annotationElementId, this.deleted = !0;
  }
  serialize() {
    return this.serializeDeleted();
  }
}
const wy = 3285377520, An = 4294901760, Zn = 65535;
class ld {
  constructor(t) {
    this.h1 = t ? t & 4294967295 : wy, this.h2 = t ? t & 4294967295 : wy;
  }
  update(t) {
    let n, s;
    if (typeof t == "string") {
      n = new Uint8Array(t.length * 2), s = 0;
      for (let E = 0, _ = t.length; E < _; E++) {
        const w = t.charCodeAt(E);
        w <= 255 ? n[s++] = w : (n[s++] = w >>> 8, n[s++] = w & 255);
      }
    } else if (ArrayBuffer.isView(t))
      n = t.slice(), s = n.byteLength;
    else
      throw new Error("Invalid data format, must be a string or TypedArray.");
    const r = s >> 2, l = s - r * 4, c = new Uint32Array(n.buffer, 0, r);
    let u = 0, d = 0, p = this.h1, g = this.h2;
    const m = 3432918353, v = 461845907, A = m & Zn, S = v & Zn;
    for (let E = 0; E < r; E++)
      E & 1 ? (u = c[E], u = u * m & An | u * A & Zn, u = u << 15 | u >>> 17, u = u * v & An | u * S & Zn, p ^= u, p = p << 13 | p >>> 19, p = p * 5 + 3864292196) : (d = c[E], d = d * m & An | d * A & Zn, d = d << 15 | d >>> 17, d = d * v & An | d * S & Zn, g ^= d, g = g << 13 | g >>> 19, g = g * 5 + 3864292196);
    switch (u = 0, l) {
      case 3:
        u ^= n[r * 4 + 2] << 16;
      case 2:
        u ^= n[r * 4 + 1] << 8;
      case 1:
        u ^= n[r * 4], u = u * m & An | u * A & Zn, u = u << 15 | u >>> 17, u = u * v & An | u * S & Zn, r & 1 ? p ^= u : g ^= u;
    }
    this.h1 = p, this.h2 = g;
  }
  hexdigest() {
    let t = this.h1, n = this.h2;
    return t ^= n >>> 1, t = t * 3981806797 & An | t * 36045 & Zn, n = n * 4283543511 & An | ((n << 16 | t >>> 16) * 2950163797 & An) >>> 16, t ^= n >>> 1, t = t * 444984403 & An | t * 60499 & Zn, n = n * 3301882366 & An | ((n << 16 | t >>> 16) * 3120437893 & An) >>> 16, t ^= n >>> 1, (t >>> 0).toString(16).padStart(8, "0") + (n >>> 0).toString(16).padStart(8, "0");
  }
}
const Hr = Object.freeze({
  map: null,
  hash: "",
  transfer: void 0
});
class Ed {
  #t = !1;
  #e = null;
  #n = null;
  #i = /* @__PURE__ */ new Map();
  onSetModified = null;
  onResetModified = null;
  onAnnotationEditor = null;
  getValue(t, n) {
    const s = this.#i.get(t);
    return s === void 0 ? n : Object.assign(n, s);
  }
  getRawValue(t) {
    return this.#i.get(t);
  }
  remove(t) {
    const n = this.#i.get(t);
    n !== void 0 && (n instanceof rt && this.#n.delete(n.annotationElementId), this.#i.delete(t), this.#i.size === 0 && this.resetModified(), !this.#i.values().some((s) => s instanceof rt) && this.onAnnotationEditor?.(null));
  }
  setValue(t, n) {
    const s = this.#i.get(t);
    let r = !1;
    if (s !== void 0)
      for (const [l, c] of Object.entries(n))
        s[l] !== c && (r = !0, s[l] = c);
    else
      r = !0, this.#i.set(t, n);
    r && this.#s(), n instanceof rt && ((this.#n ||= /* @__PURE__ */ new Map()).set(n.annotationElementId, n), this.onAnnotationEditor?.(n.constructor._type));
  }
  has(t) {
    return this.#i.has(t);
  }
  get size() {
    return this.#i.size;
  }
  #s() {
    this.#t || (this.#t = !0, this.onSetModified?.());
  }
  resetModified() {
    this.#t && (this.#t = !1, this.onResetModified?.());
  }
  get print() {
    return new i0(this);
  }
  get serializable() {
    if (this.#i.size === 0)
      return Hr;
    const t = /* @__PURE__ */ new Map(), n = new ld(), s = [], r = /* @__PURE__ */ Object.create(null);
    let l = !1;
    for (const [c, u] of this.#i) {
      const d = u instanceof rt ? u.serialize(!1, r) : u;
      u.page && (u.pageIndex = u.page._pageIndex, delete u.page), d && (t.set(c, d), n.update(`${c}:${JSON.stringify(d)}`), l ||= !!d.bitmap);
    }
    if (l)
      for (const c of t.values())
        c.bitmap && s.push(c.bitmap);
    return t.size > 0 ? {
      map: t,
      hash: n.hexdigest(),
      transfer: s
    } : Hr;
  }
  get editorStats() {
    let t = null;
    const n = /* @__PURE__ */ new Map();
    let s = 0, r = 0;
    for (const l of this.#i.values()) {
      if (!(l instanceof rt)) {
        l.popup && (l.popup.deleted ? r += 1 : s += 1);
        continue;
      }
      l.isCommentDeleted ? r += 1 : l.hasEditedComment && (s += 1);
      const c = l.telemetryFinalData;
      if (!c)
        continue;
      const {
        type: u
      } = c;
      n.getOrInsertComputed(u, () => Object.getPrototypeOf(l).constructor), t ||= /* @__PURE__ */ Object.create(null);
      const d = t[u] ||= /* @__PURE__ */ new Map();
      for (const [p, g] of Object.entries(c)) {
        if (p === "type")
          continue;
        const m = d.getOrInsertComputed(p, md);
        m.set(g, (m.get(g) ?? 0) + 1);
      }
    }
    if ((r > 0 || s > 0) && (t ||= /* @__PURE__ */ Object.create(null), t.comments = {
      deleted: r,
      edited: s
    }), !t)
      return null;
    for (const [l, c] of n)
      t[l] = c.computeTelemetryFinalData(t[l]);
    return t;
  }
  resetModifiedIds() {
    this.#e = null;
  }
  updateEditor(t, n) {
    const s = this.#n?.get(t);
    return s ? (s.updateFromAnnotationLayer(n), !0) : !1;
  }
  getEditor(t) {
    return this.#n?.get(t) || null;
  }
  get modifiedIds() {
    if (this.#e)
      return this.#e;
    const t = [];
    if (this.#n)
      for (const s of this.#n.values())
        s.serialize() && t.push(s.annotationElementId);
    let n = "";
    if (t.length) {
      const s = new ld();
      s.update(t.join(",")), n = s.hexdigest();
    }
    return this.#e = {
      ids: new Set(t),
      hash: n
    };
  }
  [Symbol.iterator]() {
    return this.#i.entries();
  }
}
class i0 extends Ed {
  #t = Hr;
  constructor(t) {
    super();
    const {
      serializable: n
    } = t;
    if (n === Hr)
      return;
    const {
      map: s,
      hash: r,
      transfer: l
    } = n, c = structuredClone(s, l ? {
      transfer: l
    } : null);
    this.#t = {
      map: c,
      hash: r,
      transfer: []
    };
  }
  get print() {
    kt("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return this.#t;
  }
  get modifiedIds() {
    return lt(this, "modifiedIds", {
      ids: /* @__PURE__ */ new Set(),
      hash: ""
    });
  }
}
const wa = "__forcedDependency", {
  floor: Cy,
  ceil: xy
} = Math;
function My(y, t, n, s, r, l) {
  y[t * 4 + 0] = Math.min(y[t * 4 + 0], n), y[t * 4 + 1] = Math.min(y[t * 4 + 1], s), y[t * 4 + 2] = Math.max(y[t * 4 + 2], r), y[t * 4 + 3] = Math.max(y[t * 4 + 3], l);
}
function iS(y, t, n, s, r) {
  let l;
  y ? (y < 0 && (l = r[0], r[0] = r[2], r[2] = l), r[0] *= y, r[2] *= y, t < 0 && (l = r[1], r[1] = r[3], r[3] = l), r[1] *= t, r[3] *= t) : r.fill(0), r[0] += n, r[1] += s, r[2] += n, r[3] += s;
}
const cd = new Uint32Array(new Uint8Array([255, 255, 0, 0]).buffer)[0];
class sS {
  #t;
  #e;
  constructor(t, n) {
    this.#t = t, this.#e = n;
  }
  get length() {
    return this.#t.length;
  }
  isEmpty(t) {
    return this.#t[t] === cd;
  }
  minX(t) {
    return this.#e[t * 4 + 0] / 256;
  }
  minY(t) {
    return this.#e[t * 4 + 1] / 256;
  }
  maxX(t) {
    return (this.#e[t * 4 + 2] + 1) / 256;
  }
  maxY(t) {
    return (this.#e[t * 4 + 3] + 1) / 256;
  }
}
const Dy = (y, t) => y?.getOrInsertComputed(t, () => ({
  dependencies: /* @__PURE__ */ new Set(),
  isRenderingOperation: !1
}));
class aS {
  #t = [[1, 0, 0, 1, 0, 0]];
  #e = [-1 / 0, -1 / 0, 1 / 0, 1 / 0];
  #n = new Float64Array(vi);
  _pendingBBoxIdx = -1;
  #i;
  #s;
  #r;
  #a;
  _savesStack = [];
  _markedContentStack = [];
  constructor(t, n) {
    this.#i = t.width, this.#s = t.height, this.#o(n);
  }
  growOperationsCount(t) {
    t >= this.#a.length && this.#o(t, this.#a);
  }
  #o(t, n) {
    const s = new ArrayBuffer(t * 4);
    this.#r = new Uint8ClampedArray(s), this.#a = new Uint32Array(s), n && n.length > 0 ? (this.#a.set(n), this.#a.fill(cd, n.length)) : this.#a.fill(cd);
  }
  get clipBox() {
    return this.#e;
  }
  save(t) {
    return this.#e = {
      __proto__: this.#e
    }, this._savesStack.push(t), this;
  }
  restore(t, n) {
    const s = Object.getPrototypeOf(this.#e);
    if (s === null)
      return this;
    this.#e = s;
    const r = this._savesStack.pop();
    return r !== void 0 && (n?.(r, t), this.#a[t] = this.#a[r]), this;
  }
  recordOpenMarker(t) {
    return this._savesStack.push(t), this;
  }
  getOpenMarker() {
    return this._savesStack.length === 0 ? null : this._savesStack.at(-1);
  }
  recordCloseMarker(t, n) {
    const s = this._savesStack.pop();
    return s !== void 0 && (n?.(s, t), this.#a[t] = this.#a[s]), this;
  }
  beginMarkedContent(t) {
    return this._markedContentStack.push(t), this;
  }
  endMarkedContent(t, n) {
    const s = this._markedContentStack.pop();
    return s !== void 0 && (n?.(s, t), this.#a[t] = this.#a[s]), this;
  }
  pushBaseTransform(t) {
    return this.#t.push(K.multiplyByDOMMatrix(this.#t.at(-1), t.getTransform())), this;
  }
  popBaseTransform() {
    return this.#t.length > 1 && this.#t.pop(), this;
  }
  resetBBox(t) {
    return this._pendingBBoxIdx !== t && (this._pendingBBoxIdx = t, this.#n.set(vi, 0)), this;
  }
  recordClipBox(t, n, s, r, l, c) {
    const u = K.multiplyByDOMMatrix(this.#t.at(-1), n.getTransform()), d = vi.slice();
    K.axialAlignedBoundingBox([s, l, r, c], u, d);
    const p = K.intersect(this.#e, d);
    return p ? (this.#e[0] = p[0], this.#e[1] = p[1], this.#e[2] = p[2], this.#e[3] = p[3]) : (this.#e[0] = this.#e[1] = 1 / 0, this.#e[2] = this.#e[3] = -1 / 0), this;
  }
  recordBBox(t, n, s, r, l, c) {
    const u = this.#e;
    if (u[0] === 1 / 0)
      return this;
    const d = K.multiplyByDOMMatrix(this.#t.at(-1), n.getTransform());
    if (u[0] === -1 / 0)
      return K.axialAlignedBoundingBox([s, l, r, c], d, this.#n), this;
    const p = vi.slice();
    return K.axialAlignedBoundingBox([s, l, r, c], d, p), this.#n[0] = $t(p[0], u[0], this.#n[0]), this.#n[1] = $t(p[1], u[1], this.#n[1]), this.#n[2] = $t(p[2], this.#n[2], u[2]), this.#n[3] = $t(p[3], this.#n[3], u[3]), this;
  }
  recordFullPageBBox(t) {
    return this.#n[0] = Math.max(0, this.#e[0]), this.#n[1] = Math.max(0, this.#e[1]), this.#n[2] = Math.min(this.#i, this.#e[2]), this.#n[3] = Math.min(this.#s, this.#e[3]), this;
  }
  recordOperation(t, n = !1, s) {
    if (this._pendingBBoxIdx !== t)
      return this;
    const r = Cy(this.#n[0] * 256 / this.#i), l = Cy(this.#n[1] * 256 / this.#s), c = xy(this.#n[2] * 256 / this.#i), u = xy(this.#n[3] * 256 / this.#s);
    if (My(this.#r, t, r, l, c, u), s)
      for (const d of s)
        for (const p of d)
          p !== t && My(this.#r, p, r, l, c, u);
    return n || (this._pendingBBoxIdx = -1), this;
  }
  bboxToClipBoxDropOperation(t) {
    return this._pendingBBoxIdx === t && (this._pendingBBoxIdx = -1, this.#e[0] = Math.max(this.#e[0], this.#n[0]), this.#e[1] = Math.max(this.#e[1], this.#n[1]), this.#e[2] = Math.min(this.#e[2], this.#n[2]), this.#e[3] = Math.min(this.#e[3], this.#n[3])), this;
  }
  take() {
    return new sS(this.#a, this.#r);
  }
  takeDebugMetadata() {
    throw new Error("Unreachable");
  }
  recordSimpleData(t, n) {
    return this;
  }
  recordIncrementalData(t, n) {
    return this;
  }
  resetIncrementalData(t, n) {
    return this;
  }
  recordNamedData(t, n) {
    return this;
  }
  recordSimpleDataFromNamed(t, n, s) {
    return this;
  }
  recordFutureForcedDependency(t, n) {
    return this;
  }
  inheritSimpleDataAsFutureForcedDependencies(t) {
    return this;
  }
  inheritPendingDependenciesAsFutureForcedDependencies() {
    return this;
  }
  recordCharacterBBox(t, n, s, r = 1, l = 0, c = 0, u) {
    return this;
  }
  getSimpleIndex(t) {
  }
  recordDependencies(t, n) {
    return this;
  }
  recordNamedDependency(t, n) {
    return this;
  }
  recordShowTextOperation(t, n = !1) {
    return this;
  }
}
class rS {
  #t = {
    __proto__: null
  };
  #e = {
    __proto__: null,
    transform: [],
    moveText: [],
    sameLineText: [],
    [wa]: []
  };
  #n = /* @__PURE__ */ new Map();
  #i = /* @__PURE__ */ new Set();
  #s = /* @__PURE__ */ new Map();
  #r;
  #a;
  #o;
  constructor(t, n = !1) {
    this.#o = t, n && (this.#r = /* @__PURE__ */ new Map(), this.#a = (s, r) => {
      Dy(this.#r, r).dependencies.add(s);
    });
  }
  get clipBox() {
    return this.#o.clipBox;
  }
  growOperationsCount(t) {
    this.#o.growOperationsCount(t);
  }
  save(t) {
    return this.#t = {
      __proto__: this.#t
    }, this.#e = {
      __proto__: this.#e,
      transform: {
        __proto__: this.#e.transform
      },
      moveText: {
        __proto__: this.#e.moveText
      },
      sameLineText: {
        __proto__: this.#e.sameLineText
      },
      [wa]: {
        __proto__: this.#e[wa]
      }
    }, this.#o.save(t), this;
  }
  restore(t) {
    this.#o.restore(t, this.#a);
    const n = Object.getPrototypeOf(this.#t);
    return n === null ? this : (this.#t = n, this.#e = Object.getPrototypeOf(this.#e), this);
  }
  recordOpenMarker(t) {
    return this.#o.recordOpenMarker(t, this.#a), this;
  }
  getOpenMarker() {
    return this.#o.getOpenMarker();
  }
  recordCloseMarker(t) {
    return this.#o.recordCloseMarker(t, this.#a), this;
  }
  beginMarkedContent(t) {
    return this.#o.beginMarkedContent(t), this;
  }
  endMarkedContent(t) {
    return this.#o.endMarkedContent(t, this.#a), this;
  }
  pushBaseTransform(t) {
    return this.#o.pushBaseTransform(t), this;
  }
  popBaseTransform() {
    return this.#o.popBaseTransform(), this;
  }
  recordSimpleData(t, n) {
    return this.#t[t] = n, this;
  }
  recordIncrementalData(t, n) {
    return this.#e[t].push(n), this;
  }
  resetIncrementalData(t, n) {
    return this.#e[t].length = 0, this;
  }
  recordNamedData(t, n) {
    return this.#n.set(t, n), this;
  }
  recordSimpleDataFromNamed(t, n, s) {
    this.#t[t] = this.#n.get(n) ?? s;
  }
  recordFutureForcedDependency(t, n) {
    return this.recordIncrementalData(wa, n), this;
  }
  inheritSimpleDataAsFutureForcedDependencies(t) {
    for (const n of t)
      n in this.#t && this.recordFutureForcedDependency(n, this.#t[n]);
    return this;
  }
  inheritPendingDependenciesAsFutureForcedDependencies() {
    for (const t of this.#i)
      this.recordFutureForcedDependency(wa, t);
    return this;
  }
  resetBBox(t) {
    return this.#o.resetBBox(t), this;
  }
  recordClipBox(t, n, s, r, l, c) {
    return this.#o.recordClipBox(t, n, s, r, l, c), this;
  }
  recordBBox(t, n, s, r, l, c) {
    return this.#o.recordBBox(t, n, s, r, l, c), this;
  }
  recordCharacterBBox(t, n, s, r = 1, l = 0, c = 0, u) {
    const d = s.bbox;
    let p, g;
    if (d && (p = d[2] !== d[0] && d[3] !== d[1] && this.#s.get(s), p !== !1 && (g = [0, 0, 0, 0], K.axialAlignedBoundingBox(d, s.fontMatrix, g), (r !== 1 || l !== 0 || c !== 0) && iS(r, -r, l, c, g), p)))
      return this.recordBBox(t, n, g[0], g[2], g[1], g[3]);
    if (!u)
      return this.recordFullPageBBox(t);
    const m = u();
    return d && g && p === void 0 && (p = g[0] <= l - m.actualBoundingBoxLeft && g[2] >= l + m.actualBoundingBoxRight && g[1] <= c - m.actualBoundingBoxAscent && g[3] >= c + m.actualBoundingBoxDescent, this.#s.set(s, p), p) ? this.recordBBox(t, n, g[0], g[2], g[1], g[3]) : this.recordBBox(t, n, l - m.actualBoundingBoxLeft, l + m.actualBoundingBoxRight, c - m.actualBoundingBoxAscent, c + m.actualBoundingBoxDescent);
  }
  recordFullPageBBox(t) {
    return this.#o.recordFullPageBBox(t), this;
  }
  getSimpleIndex(t) {
    return this.#t[t];
  }
  recordDependencies(t, n) {
    const s = this.#i, r = this.#t, l = this.#e;
    for (const c of n)
      c in this.#t ? s.add(r[c]) : c in l && l[c].forEach(s.add, s);
    return this;
  }
  recordNamedDependency(t, n) {
    return this.#n.has(n) && this.#i.add(this.#n.get(n)), this;
  }
  recordOperation(t, n = !1) {
    if (this.recordDependencies(t, [wa]), this.#r) {
      const r = Dy(this.#r, t), {
        dependencies: l
      } = r;
      this.#i.forEach(l.add, l), this.#o._savesStack.forEach(l.add, l), this.#o._markedContentStack.forEach(l.add, l), l.delete(t), r.isRenderingOperation = !0;
    }
    const s = !n && t === this.#o._pendingBBoxIdx;
    return this.#o.recordOperation(t, n, [this.#i, this.#o._savesStack, this.#o._markedContentStack]), s && this.#i.clear(), this;
  }
  recordShowTextOperation(t, n = !1) {
    const s = Array.from(this.#i);
    this.recordOperation(t, n), this.recordIncrementalData("sameLineText", t);
    for (const r of s)
      this.recordIncrementalData("sameLineText", r);
    return this;
  }
  bboxToClipBoxDropOperation(t, n = !1) {
    const s = !n && t === this.#o._pendingBBoxIdx;
    return this.#o.bboxToClipBoxDropOperation(t), s && this.#i.clear(), this;
  }
  take() {
    return this.#s.clear(), this.#o.take();
  }
  takeDebugMetadata() {
    return this.#r;
  }
}
class Gr {
  #t;
  #e;
  #n;
  #i = 0;
  #s = 0;
  constructor(t, n, s) {
    if (t instanceof Gr && t.#n === !!s)
      return t;
    this.#t = t, this.#e = n, this.#n = !!s;
  }
  get clipBox() {
    return this.#t.clipBox;
  }
  growOperationsCount() {
    throw new Error("Unreachable");
  }
  save(t) {
    return this.#s++, this.#t.save(this.#e), this;
  }
  restore(t) {
    return this.#s > 0 && (this.#t.restore(this.#e), this.#s--), this;
  }
  recordOpenMarker(t) {
    return this.#i++, this;
  }
  getOpenMarker() {
    return this.#i > 0 ? this.#e : this.#t.getOpenMarker();
  }
  recordCloseMarker(t) {
    return this.#i--, this;
  }
  beginMarkedContent(t) {
    return this;
  }
  endMarkedContent(t) {
    return this;
  }
  pushBaseTransform(t) {
    return this.#t.pushBaseTransform(t), this;
  }
  popBaseTransform() {
    return this.#t.popBaseTransform(), this;
  }
  recordSimpleData(t, n) {
    return this.#t.recordSimpleData(t, this.#e), this;
  }
  recordIncrementalData(t, n) {
    return this.#t.recordIncrementalData(t, this.#e), this;
  }
  resetIncrementalData(t, n) {
    return this.#t.resetIncrementalData(t, this.#e), this;
  }
  recordNamedData(t, n) {
    return this;
  }
  recordSimpleDataFromNamed(t, n, s) {
    return this.#t.recordSimpleDataFromNamed(t, n, this.#e), this;
  }
  recordFutureForcedDependency(t, n) {
    return this.#t.recordFutureForcedDependency(t, this.#e), this;
  }
  inheritSimpleDataAsFutureForcedDependencies(t) {
    return this.#t.inheritSimpleDataAsFutureForcedDependencies(t), this;
  }
  inheritPendingDependenciesAsFutureForcedDependencies() {
    return this.#t.inheritPendingDependenciesAsFutureForcedDependencies(), this;
  }
  resetBBox(t) {
    return this.#n || this.#t.resetBBox(this.#e), this;
  }
  recordClipBox(t, n, s, r, l, c) {
    return this.#n || this.#t.recordClipBox(this.#e, n, s, r, l, c), this;
  }
  recordBBox(t, n, s, r, l, c) {
    return this.#n || this.#t.recordBBox(this.#e, n, s, r, l, c), this;
  }
  recordCharacterBBox(t, n, s, r, l, c, u) {
    return this.#n || this.#t.recordCharacterBBox(this.#e, n, s, r, l, c, u), this;
  }
  recordFullPageBBox(t) {
    return this.#n || this.#t.recordFullPageBBox(this.#e), this;
  }
  getSimpleIndex(t) {
    return this.#t.getSimpleIndex(t);
  }
  recordDependencies(t, n) {
    return this.#t.recordDependencies(this.#e, n), this;
  }
  recordNamedDependency(t, n) {
    return this.#t.recordNamedDependency(this.#e, n), this;
  }
  recordOperation(t) {
    return this.#t.recordOperation(this.#e, !0), this;
  }
  recordShowTextOperation(t) {
    return this.#t.recordShowTextOperation(this.#e, !0), this;
  }
  bboxToClipBoxDropOperation(t) {
    return this.#n || this.#t.bboxToClipBoxDropOperation(this.#e, !0), this;
  }
  take() {
    throw new Error("Unreachable");
  }
  takeDebugMetadata() {
    throw new Error("Unreachable");
  }
}
const Sn = {
  stroke: ["path", "transform", "filter", "strokeColor", "strokeAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "dash"],
  fill: ["path", "transform", "filter", "fillColor", "fillAlpha", "globalCompositeOperation", "SMask"],
  imageXObject: ["transform", "SMask", "filter", "fillAlpha", "strokeAlpha", "globalCompositeOperation"],
  rawFillPath: ["filter", "fillColor", "fillAlpha"],
  showText: ["transform", "leading", "charSpacing", "wordSpacing", "hScale", "textRise", "moveText", "textMatrix", "font", "fontObj", "filter", "fillColor", "textRenderingMode", "SMask", "fillAlpha", "strokeAlpha", "globalCompositeOperation", "sameLineText"],
  transform: ["transform"],
  transformAndFill: ["transform", "fillColor"]
};
class Hl {
  #t;
  #e;
  #n = 4;
  #i = 0;
  #s = new Hl.#r(this.#n * 6);
  static #r = Yt.isFloat16ArraySupported ? Float16Array : Float32Array;
  constructor(t) {
    this.#t = t.width, this.#e = t.height;
  }
  record(t, n, s, r) {
    if (this.#i === this.#n) {
      this.#n *= 2;
      const u = new Hl.#r(this.#n * 6);
      u.set(this.#s), this.#s = u;
    }
    const l = Zt(t);
    let c;
    if (r[0] !== 1 / 0) {
      const u = vi.slice();
      K.axialAlignedBoundingBox([0, -s, n, 0], l, u);
      const d = K.intersect(r, u);
      if (!d)
        return;
      const [p, g, m, v] = d;
      if (p !== u[0] || g !== u[1] || m !== u[2] || v !== u[3]) {
        const A = Math.atan2(l[1], l[0]), S = Math.abs(Math.sin(A)), E = Math.abs(Math.cos(A));
        if (S < 1e-6 || E < 1e-6 || Math.abs(S - E) < 1e-6)
          c = [p, g, p, v, m, g];
        else {
          const _ = m - p, w = v - g, C = S * S, M = E * E, B = E * S, N = M - C, P = (w * M - _ * B) / N, U = (w * B - _ * C) / N;
          c = [p + U, g, p, g + P, m, v - P];
        }
      }
    }
    c || (c = [0, -s, 0, 0, n, -s], K.applyTransform(c, l, 0), K.applyTransform(c, l, 2), K.applyTransform(c, l, 4)), c[0] /= this.#t, c[1] /= this.#e, c[2] /= this.#t, c[3] /= this.#e, c[4] /= this.#t, c[5] /= this.#e, this.#s.set(c, this.#i * 6), this.#i++;
  }
  take() {
    return this.#s.subarray(0, this.#i * 6);
  }
}
const Oy = new RegExp("\\p{Cc}", "u");
function oS(y) {
  const t = y[0];
  if (y.length < 2 || t !== '"' && t !== "'" || y.at(-1) !== t)
    return !1;
  const n = y.length - 1;
  for (let s = 1; s < n; s++) {
    const r = y[s];
    if (r === t || Oy.test(r) || r === "\\" && (++s >= n || Oy.test(y[s])))
      return !1;
  }
  return !0;
}
function Ny(y) {
  return oS(y) ? y : `"${y.replaceAll(/["\\\p{Cc}]/gu, (n) => n === '"' || n === "\\" ? `\\${n}` : `\\${n.codePointAt(0).toString(16)} `)}"`;
}
class lS {
  #t = /* @__PURE__ */ new Set();
  #e = null;
  constructor({
    ownerDocument: t = globalThis.document,
    styleElement: n = null
  }) {
    this._document = t, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
  }
  addNativeFontFace(t) {
    this.nativeFontFaces.add(t), this._document.fonts.add(t);
  }
  removeNativeFontFace(t) {
    this.nativeFontFaces.delete(t), this._document.fonts.delete(t);
  }
  insertRule(t) {
    const n = this.#n();
    n.insertRule(t, n.cssRules.length);
  }
  #n() {
    if (this.#e)
      return this.#e;
    const t = this._document.defaultView?.CSSStyleSheet || globalThis.CSSStyleSheet;
    if (!this.styleElement && t) {
      const {
        adoptedStyleSheets: n
      } = this._document;
      if (n) {
        const s = new t();
        return n.push(s), this.#e = s;
      }
    }
    return this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement)), this.#e = this.styleElement.sheet;
  }
  clear() {
    for (const t of this.nativeFontFaces)
      this._document.fonts.delete(t);
    if (this.nativeFontFaces.clear(), this.#t.clear(), this.#e) {
      const {
        adoptedStyleSheets: t
      } = this._document;
      t?.includes(this.#e) && (this._document.adoptedStyleSheets = t.filter((n) => n !== this.#e)), this.#e = null;
    }
    this.styleElement && (this.styleElement.remove(), this.styleElement = null);
  }
  async loadSystemFont({
    systemFontInfo: t,
    disableFontFace: n,
    _inspectFont: s
  }) {
    if (!(!t || this.#t.has(t.loadedName))) {
      if (ie(!n, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
        const {
          loadedName: r,
          src: l,
          style: c
        } = t, u = new FontFace(r, l, c);
        this.addNativeFontFace(u);
        try {
          await u.load(), this.#t.add(r), s?.(t);
        } catch {
          yt(`Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(u);
        }
        return;
      }
      kt("Not implemented: loadSystemFont without the Font Loading API.");
    }
  }
  async bind(t) {
    if (t.attached || t.missingFile && !t.systemFontInfo)
      return;
    if (t.attached = !0, t.systemFontInfo) {
      await this.loadSystemFont(t);
      return;
    }
    if (this.isFontLoadingAPISupported) {
      const s = t.createNativeFontFace();
      if (s) {
        this.addNativeFontFace(s);
        try {
          await s.loaded;
        } catch (r) {
          throw yt(`Failed to load font '${s.family}': '${r}'.`), t.disableFontFace = !0, r;
        }
      }
      return;
    }
    const n = t.createFontFaceRule();
    if (n) {
      if (this.insertRule(n), this.isSyncFontLoadingSupported)
        return;
      await new Promise((s) => {
        const r = this._queueLoadingCallback(s);
        this._prepareFontLoadEvent(t, r);
      });
    }
  }
  get isFontLoadingAPISupported() {
    const t = !!this._document?.fonts;
    return lt(this, "isFontLoadingAPISupported", t);
  }
  get isSyncFontLoadingSupported() {
    return lt(this, "isSyncFontLoadingSupported", on || Yt.platform.isFirefox);
  }
  _queueLoadingCallback(t) {
    function n() {
      for (ie(!r.done, "completeRequest() cannot be called twice."), r.done = !0; s.length > 0 && s[0].done; ) {
        const l = s.shift();
        setTimeout(l.callback, 0);
      }
    }
    const {
      loadingRequests: s
    } = this, r = {
      done: !1,
      complete: n,
      callback: t
    };
    return s.push(r), r;
  }
  get _loadTestFont() {
    const t = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
    return lt(this, "_loadTestFont", t);
  }
  _prepareFontLoadEvent(t, n) {
    function s(N, P) {
      return N.charCodeAt(P) << 24 | N.charCodeAt(P + 1) << 16 | N.charCodeAt(P + 2) << 8 | N.charCodeAt(P + 3) & 255;
    }
    function r(N) {
      return String.fromCharCode(N >> 24 & 255, N >> 16 & 255, N >> 8 & 255, N & 255);
    }
    function l(N, P, U, j) {
      const q = N.substring(0, P), $ = N.substring(P + U);
      return q + j + $;
    }
    let c, u;
    const d = this._document.createElement("canvas");
    d.width = 1, d.height = 1;
    const p = d.getContext("2d");
    let g = 0;
    function m(N, P) {
      if (++g > 30) {
        yt("Load test font never loaded."), P();
        return;
      }
      if (p.font = "30px " + N, p.fillText(".", 0, 20), p.getImageData(0, 0, 1, 1).data[3] > 0) {
        P();
        return;
      }
      setTimeout(m.bind(null, N, P));
    }
    const v = `lt${Date.now()}${this.loadTestFontId++}`;
    let A = this._loadTestFont;
    A = l(A, 976, v.length, v);
    const E = 16, _ = 1482184792;
    let w = s(A, E);
    for (c = 0, u = v.length - 3; c < u; c += 4)
      w = w - _ + s(v, c) | 0;
    c < v.length && (w = w - _ + s(v + "XXX", c) | 0), A = l(A, E, 4, r(w));
    const C = `url(data:font/opentype;base64,${btoa(A)});`, M = `@font-face {font-family:"${v}";src:${C}}`;
    this.insertRule(M);
    const B = this._document.createElement("div");
    B.style.visibility = "hidden", B.style.width = B.style.height = "10px", B.style.position = "absolute", B.style.top = B.style.left = "0px";
    for (const N of [t.loadedName, v]) {
      const P = this._document.createElement("span");
      P.textContent = "Hi", P.style.fontFamily = N, B.append(P);
    }
    this._document.body.append(B), m(v, () => {
      B.remove(), n.complete();
    });
  }
}
class cS {
  compiledGlyphs = /* @__PURE__ */ Object.create(null);
  #t;
  constructor(t, n = null, s, r) {
    this.#t = t, this._inspectFont = n, s && (this.charProcOperatorList = s), r && Object.assign(this, r);
  }
  createNativeFontFace() {
    if (!this.data || this.disableFontFace)
      return null;
    let t;
    if (!this.cssFontInfo)
      t = new FontFace(this.loadedName, this.data, {});
    else {
      const n = {
        weight: this.cssFontInfo.fontWeight
      };
      this.cssFontInfo.italicAngle && (n.style = `oblique ${this.cssFontInfo.italicAngle}deg`), t = new FontFace(Ny(this.cssFontInfo.fontFamily), this.data, n);
    }
    return this._inspectFont?.(this), t;
  }
  createFontFaceRule() {
    if (!this.data || this.disableFontFace)
      return null;
    const t = `url(data:${this.mimetype};base64,${this.data.toBase64()});`;
    let n;
    if (!this.cssFontInfo)
      n = `@font-face {font-family:"${this.loadedName}";src:${t}}`;
    else {
      let s = `font-weight: ${this.cssFontInfo.fontWeight};`;
      this.cssFontInfo.italicAngle && (s += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), n = `@font-face {font-family:${Ny(this.cssFontInfo.fontFamily)};${s}src:${t}}`;
    }
    return this._inspectFont?.(this, t), n;
  }
  getPathGenerator(t, n) {
    if (this.compiledGlyphs[n] !== void 0)
      return this.compiledGlyphs[n];
    const s = this.loadedName + "_path_" + n;
    let r;
    try {
      r = t.get(s);
    } catch (c) {
      yt(`getPathGenerator - ignoring character: "${c}".`);
    }
    const l = t0(r?.path);
    return this.fontExtraProperties || t.delete(s), this.compiledGlyphs[n] = l;
  }
  get black() {
    return this.#t.black;
  }
  get bold() {
    return this.#t.bold;
  }
  get disableFontFace() {
    return this.#t.disableFontFace;
  }
  set disableFontFace(t) {
    lt(this, "disableFontFace", !!t);
  }
  get fontExtraProperties() {
    return this.#t.fontExtraProperties;
  }
  get isInvalidPDFjsFont() {
    return this.#t.isInvalidPDFjsFont;
  }
  get isType3Font() {
    return this.#t.isType3Font;
  }
  get italic() {
    return this.#t.italic;
  }
  get missingFile() {
    return this.#t.missingFile;
  }
  get remeasure() {
    return this.#t.remeasure;
  }
  get vertical() {
    return this.#t.vertical;
  }
  get ascent() {
    return this.#t.ascent;
  }
  get defaultWidth() {
    return this.#t.defaultWidth;
  }
  get descent() {
    return this.#t.descent;
  }
  get bbox() {
    return this.#t.bbox;
  }
  get fontMatrix() {
    return this.#t.fontMatrix;
  }
  get fallbackName() {
    return this.#t.fallbackName;
  }
  get loadedName() {
    return this.#t.loadedName;
  }
  get mimetype() {
    return this.#t.mimetype;
  }
  get name() {
    return this.#t.name;
  }
  get data() {
    return this.#t.data;
  }
  clearData() {
    this.#t.clearData();
  }
  get cssFontInfo() {
    return this.#t.cssFontInfo;
  }
  get systemFontInfo() {
    return this.#t.systemFontInfo;
  }
  get defaultVMetrics() {
    return this.#t.defaultVMetrics;
  }
}
class uS {
  static strings = ["fontFamily", "fontWeight", "italicAngle"];
}
class hS {
  static strings = ["css", "loadedName", "baseFontName", "src"];
}
class Dn {
  static bools = ["black", "bold", "disableFontFace", "fontExtraProperties", "isInvalidPDFjsFont", "isType3Font", "italic", "missingFile", "remeasure", "vertical"];
  static numbers = ["ascent", "defaultWidth", "descent"];
  static strings = ["fallbackName", "loadedName", "mimetype", "name"];
  static OFFSET_NUMBERS = Math.ceil(this.bools.length * 2 / 8);
  static OFFSET_BBOX = this.OFFSET_NUMBERS + this.numbers.length * 8;
  static OFFSET_FONT_MATRIX = this.OFFSET_BBOX + 1 + 8;
  static OFFSET_DEFAULT_VMETRICS = this.OFFSET_FONT_MATRIX + 1 + 48;
  static OFFSET_STRINGS = this.OFFSET_DEFAULT_VMETRICS + 1 + 6;
}
class Ss {
  static KIND = 0;
  static HAS_BBOX = 1;
  static HAS_BACKGROUND = 2;
  static SHADING_TYPE = 3;
  static N_COORD = 4;
  static N_COLOR = 8;
  static N_STOP = 12;
  static N_FIGURES = 16;
}
class Gl {
  static get decoder() {
    return lt(this, "decoder", new TextDecoder());
  }
  static get encoder() {
    return lt(this, "encoder", new TextEncoder());
  }
}
class dS {
  #t;
  #e;
  constructor(t) {
    this.#t = t, this.#e = new DataView(t);
  }
  #n(t) {
    ie(t < uS.strings.length, "Invalid string index");
    const {
      decoder: n
    } = Gl;
    let s = 0;
    for (let l = 0; l < t; l++)
      s += this.#e.getUint32(s) + 4;
    const r = this.#e.getUint32(s);
    return n.decode(new Uint8Array(this.#t, s + 4, r));
  }
  get fontFamily() {
    return this.#n(0);
  }
  get fontWeight() {
    return this.#n(1);
  }
  get italicAngle() {
    return this.#n(2);
  }
}
class fS {
  #t;
  #e;
  constructor(t) {
    this.#t = t, this.#e = new DataView(t);
  }
  get guessFallback() {
    return this.#e.getUint8(0) !== 0;
  }
  #n(t) {
    ie(t < hS.strings.length, "Invalid string index");
    const {
      decoder: n
    } = Gl;
    let s = 5;
    for (let l = 0; l < t; l++)
      s += this.#e.getUint32(s) + 4;
    const r = this.#e.getUint32(s);
    return n.decode(new Uint8Array(this.#t, s + 4, r));
  }
  get css() {
    return this.#n(0);
  }
  get loadedName() {
    return this.#n(1);
  }
  get baseFontName() {
    return this.#n(2);
  }
  get src() {
    return this.#n(3);
  }
  get style() {
    const {
      decoder: t
    } = Gl;
    let n = 1;
    n += 4 + this.#e.getUint32(n);
    const s = this.#e.getUint32(n), r = t.decode(new Uint8Array(this.#t, n + 4, s));
    n += 4 + s;
    const l = this.#e.getUint32(n), c = t.decode(new Uint8Array(this.#t, n + 4, l));
    return {
      style: r,
      weight: c
    };
  }
}
class pS {
  #t;
  #e;
  constructor({
    buffer: t,
    extra: n
  }) {
    this.#t = t, this.#e = new DataView(t), n && Object.assign(this, n);
  }
  #n(t) {
    ie(t < Dn.bools.length, "Invalid boolean index");
    const n = Math.floor(t / 4), s = t * 2 % 8, r = this.#e.getUint8(n) >> s & 3;
    return r === 0 ? void 0 : r === 2;
  }
  get black() {
    return this.#n(0);
  }
  get bold() {
    return this.#n(1);
  }
  get disableFontFace() {
    return this.#n(2);
  }
  get fontExtraProperties() {
    return this.#n(3);
  }
  get isInvalidPDFjsFont() {
    return this.#n(4);
  }
  get isType3Font() {
    return this.#n(5);
  }
  get italic() {
    return this.#n(6);
  }
  get missingFile() {
    return this.#n(7);
  }
  get remeasure() {
    return this.#n(8);
  }
  get vertical() {
    return this.#n(9);
  }
  #i(t) {
    return ie(t < Dn.numbers.length, "Invalid number index"), this.#e.getFloat64(Dn.OFFSET_NUMBERS + t * 8);
  }
  get ascent() {
    return this.#i(0);
  }
  get defaultWidth() {
    return this.#i(1);
  }
  get descent() {
    return this.#i(2);
  }
  #s(t, n, s, r) {
    const l = this.#e.getUint8(t);
    if (l === 0)
      return;
    ie(l === n, "Invalid array length."), t += 1;
    const c = new Array(l);
    for (let u = 0; u < l; u++)
      c[u] = this.#e[s](t, !0), t += r;
    return c;
  }
  get bbox() {
    return this.#s(Dn.OFFSET_BBOX, 4, "getInt16", 2);
  }
  get fontMatrix() {
    return this.#s(Dn.OFFSET_FONT_MATRIX, 6, "getFloat64", 8);
  }
  get defaultVMetrics() {
    return this.#s(Dn.OFFSET_DEFAULT_VMETRICS, 3, "getInt16", 2);
  }
  #r(t) {
    ie(t < Dn.strings.length, "Invalid string index");
    const {
      decoder: n
    } = Gl;
    let s = Dn.OFFSET_STRINGS + 4;
    for (let l = 0; l < t; l++)
      s += this.#e.getUint32(s) + 4;
    const r = this.#e.getUint32(s);
    return n.decode(new Uint8Array(this.#t, s + 4, r));
  }
  get fallbackName() {
    return this.#r(0);
  }
  get loadedName() {
    return this.#r(1);
  }
  get mimetype() {
    return this.#r(2);
  }
  get name() {
    return this.#r(3);
  }
  #a() {
    let t = Dn.OFFSET_STRINGS;
    const n = this.#e.getUint32(t);
    t += 4 + n;
    const s = this.#e.getUint32(t);
    t += 4 + s;
    const r = this.#e.getUint32(t);
    t += 4 + r;
    const l = this.#e.getUint32(t);
    return {
      offset: t,
      length: l
    };
  }
  get data() {
    const {
      offset: t,
      length: n
    } = this.#a();
    return n === 0 ? void 0 : new Uint8Array(this.#t, t + 4, n);
  }
  clearData() {
    const {
      offset: t,
      length: n
    } = this.#a();
    n !== 0 && (this.#e.setUint32(t, 0), this.#t = new Uint8Array(this.#t, 0, t + 4).slice().buffer, this.#e = new DataView(this.#t));
  }
  get cssFontInfo() {
    let t = Dn.OFFSET_STRINGS;
    const n = this.#e.getUint32(t);
    t += 4 + n;
    const s = this.#e.getUint32(t);
    t += 4 + s;
    const r = this.#e.getUint32(t);
    if (r === 0)
      return null;
    const l = new Uint8Array(r);
    return l.set(new Uint8Array(this.#t, t + 4, r)), new dS(l.buffer);
  }
  get systemFontInfo() {
    let t = Dn.OFFSET_STRINGS;
    const n = this.#e.getUint32(t);
    t += 4 + n;
    const s = this.#e.getUint32(t);
    if (s === 0)
      return null;
    const r = new Uint8Array(s);
    return r.set(new Uint8Array(this.#t, t + 4, s)), new fS(r.buffer);
  }
}
class gS {
  constructor(t) {
    this.buffer = t, this.view = new DataView(t), this.data = new Uint8Array(t);
  }
  getIR() {
    const t = this.view, n = this.data[Ss.KIND], s = !!this.data[Ss.HAS_BBOX], r = !!this.data[Ss.HAS_BACKGROUND], l = t.getUint32(Ss.N_COORD, !0), c = t.getUint32(Ss.N_COLOR, !0), u = t.getUint32(Ss.N_STOP, !0);
    let d = 20;
    const p = new Float32Array(this.buffer, d, l * 2);
    d += l * 8;
    const g = new Uint8Array(this.buffer, d, c * 4);
    d += c * 4;
    const m = [];
    for (let S = 0; S < u; ++S) {
      const E = t.getFloat32(d, !0);
      d += 4;
      const _ = t.getUint32(d, !0);
      d += 4, m.push([E, `#${_.toString(16).padStart(6, "0")}`]);
    }
    let v = null;
    if (s) {
      v = [];
      for (let S = 0; S < 4; ++S)
        v.push(t.getFloat32(d, !0)), d += 4;
    }
    let A = null;
    if (r && (A = new Uint8Array(this.buffer, d, 3), d += 3), n === 1)
      return ["RadialAxial", "axial", v, m, Array.from(p.slice(0, 2)), Array.from(p.slice(2, 4)), null, null];
    if (n === 2)
      return ["RadialAxial", "radial", v, m, [p[0], p[1]], [p[3], p[4]], p[2], p[5]];
    if (n === 3) {
      const S = this.data[Ss.SHADING_TYPE];
      let E = null;
      if (p.length > 0) {
        E = vi.slice();
        for (let _ = 0, w = p.length; _ < w; _ += 2)
          K.pointBoundingBox(p[_], p[_ + 1], E);
      }
      return ["Mesh", S, p, g, l, E, v, A];
    }
    throw new Error(`Unsupported pattern kind: ${n}`);
  }
}
class mS {
  #t;
  constructor(t) {
    this.#t = t;
  }
  get path() {
    return Yt.isFloat16ArraySupported ? new Float16Array(this.#t) : new Float32Array(this.#t);
  }
}
function yS(y) {
  if (y instanceof URL)
    return y;
  if (typeof y == "string") {
    if (on) {
      if (/^[a-z][a-z0-9\-+.]+:/i.test(y))
        return new URL(y);
      const n = process.getBuiltinModule("url");
      return new URL(n.pathToFileURL(y));
    }
    const t = URL.parse(y, window.location);
    if (t)
      return t;
  }
  throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
}
function vS(y) {
  if (on && typeof Buffer < "u" && y instanceof Buffer)
    throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
  if (y instanceof Uint8Array && y.byteLength === y.buffer.byteLength)
    return y;
  if (typeof y == "string")
    return Ql(y);
  if (y instanceof ArrayBuffer || ArrayBuffer.isView(y) || typeof y == "object" && !isNaN(y?.length))
    return new Uint8Array(y);
  throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
}
function xl(y) {
  if (typeof y != "string")
    return null;
  if (y.endsWith("/"))
    return y;
  throw new Error(`Invalid factory url: "${y}" must include trailing slash.`);
}
const ud = (y) => typeof y == "object" && Number.isInteger(y?.num) && y.num >= 0 && Number.isInteger(y?.gen) && y.gen >= 0, bS = (y) => typeof y == "object" && typeof y?.name == "string", AS = HA.bind(null, ud, bS);
class SS {
  #t = /* @__PURE__ */ new Map();
  #e = Promise.resolve();
  postMessage(t, n) {
    const s = {
      data: structuredClone(t, n ? {
        transfer: n
      } : null)
    };
    this.#e.then(() => {
      for (const [r] of this.#t)
        r.call(this, s);
    });
  }
  addEventListener(t, n, s = null) {
    let r = null;
    if (s?.signal instanceof AbortSignal) {
      const {
        signal: l
      } = s;
      if (l.aborted) {
        yt("LoopbackPort - cannot use an `aborted` signal.");
        return;
      }
      const c = () => this.removeEventListener(t, n);
      r = () => l.removeEventListener("abort", c), l.addEventListener("abort", c);
    }
    this.#t.set(n, r);
  }
  removeEventListener(t, n) {
    this.#t.get(n)?.(), this.#t.delete(n);
  }
  terminate() {
    for (const [, t] of this.#t)
      t?.();
    this.#t.clear();
  }
}
const Ml = {
  DATA: 1,
  ERROR: 2
}, de = {
  CANCEL: 1,
  CANCEL_COMPLETE: 2,
  CLOSE: 3,
  ENQUEUE: 4,
  ERROR: 5,
  PULL: 6,
  PULL_COMPLETE: 7,
  START_COMPLETE: 8
};
function Ry() {
}
function Ye(y) {
  if (y instanceof Zi || y instanceof nd || y instanceof ed || y instanceof Ul || y instanceof Xh)
    return y;
  switch (y instanceof Error || typeof y == "object" && y !== null || kt('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), y.name) {
    case "AbortException":
      return new Zi(y.message);
    case "InvalidPDFException":
      return new nd(y.message);
    case "PasswordException":
      return new ed(y.message, y.code);
    case "ResponseException":
      return new Ul(y.message, y.status, y.missing);
    case "UnknownErrorException":
      return new Xh(y.message, y.details);
  }
  return new Xh(y.message, y.toString());
}
class Br {
  #t = new AbortController();
  constructor(t, n, s) {
    this.sourceName = t, this.targetName = n, this.comObj = s, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), s.addEventListener("message", this.#e.bind(this), {
      signal: this.#t.signal
    });
  }
  #e({
    data: t
  }) {
    if (t.targetName !== this.sourceName)
      return;
    if (t.stream) {
      this.#i(t);
      return;
    }
    if (t.callback) {
      const s = t.callbackId, r = this.callbackCapabilities[s];
      if (!r)
        throw new Error(`Cannot resolve callback ${s}`);
      if (delete this.callbackCapabilities[s], t.callback === Ml.DATA)
        r.resolve(t.data);
      else if (t.callback === Ml.ERROR)
        r.reject(Ye(t.reason));
      else
        throw new Error("Unexpected callback case");
      return;
    }
    const n = this.actionHandler[t.action];
    if (!n)
      throw new Error(`Unknown action from worker: ${t.action}`);
    if (t.callbackId) {
      const s = this.sourceName, r = t.sourceName, l = this.comObj;
      Promise.try(n, t.data).then(function(c) {
        l.postMessage({
          sourceName: s,
          targetName: r,
          callback: Ml.DATA,
          callbackId: t.callbackId,
          data: c
        });
      }, function(c) {
        l.postMessage({
          sourceName: s,
          targetName: r,
          callback: Ml.ERROR,
          callbackId: t.callbackId,
          reason: Ye(c)
        });
      });
      return;
    }
    if (t.streamId) {
      this.#n(t);
      return;
    }
    n(t.data);
  }
  on(t, n) {
    const s = this.actionHandler;
    if (s[t])
      throw new Error(`There is already an actionName called "${t}"`);
    s[t] = n;
  }
  send(t, n, s) {
    this.comObj.postMessage({
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: t,
      data: n
    }, s);
  }
  sendWithPromise(t, n, s) {
    const r = this.callbackId++, l = Promise.withResolvers();
    this.callbackCapabilities[r] = l;
    try {
      this.comObj.postMessage({
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: t,
        callbackId: r,
        data: n
      }, s);
    } catch (c) {
      l.reject(c);
    }
    return l.promise;
  }
  sendWithStream(t, n, s, r) {
    const l = this.streamId++, c = this.sourceName, u = this.targetName, d = this.comObj;
    return new ReadableStream({
      start: (p) => {
        const g = Promise.withResolvers();
        return this.streamControllers[l] = {
          controller: p,
          startCall: g,
          pullCall: null,
          cancelCall: null,
          isClosed: !1
        }, d.postMessage({
          sourceName: c,
          targetName: u,
          action: t,
          streamId: l,
          data: n,
          desiredSize: p.desiredSize
        }, r), g.promise;
      },
      pull: (p) => {
        const g = Promise.withResolvers();
        return this.streamControllers[l].pullCall = g, d.postMessage({
          sourceName: c,
          targetName: u,
          stream: de.PULL,
          streamId: l,
          desiredSize: p.desiredSize
        }), g.promise;
      },
      cancel: (p) => {
        ie(p instanceof Error, "cancel must have a valid reason");
        const g = Promise.withResolvers();
        return this.streamControllers[l].cancelCall = g, this.streamControllers[l].isClosed = !0, d.postMessage({
          sourceName: c,
          targetName: u,
          stream: de.CANCEL,
          streamId: l,
          reason: Ye(p)
        }), g.promise;
      }
    }, s);
  }
  #n(t) {
    const n = t.streamId, s = this.sourceName, r = t.sourceName, l = this.comObj, c = this, u = this.actionHandler[t.action], d = {
      enqueue(p, g = 1, m) {
        if (this.isCancelled)
          return;
        const v = this.desiredSize;
        this.desiredSize -= g, v > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), l.postMessage({
          sourceName: s,
          targetName: r,
          stream: de.ENQUEUE,
          streamId: n,
          chunk: p
        }, m);
      },
      close() {
        this.isCancelled || (this.isCancelled = !0, l.postMessage({
          sourceName: s,
          targetName: r,
          stream: de.CLOSE,
          streamId: n
        }), delete c.streamSinks[n]);
      },
      error(p) {
        ie(p instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = !0, l.postMessage({
          sourceName: s,
          targetName: r,
          stream: de.ERROR,
          streamId: n,
          reason: Ye(p)
        }));
      },
      sinkCapability: Promise.withResolvers(),
      onPull: null,
      onCancel: null,
      isCancelled: !1,
      desiredSize: t.desiredSize,
      ready: null
    };
    d.sinkCapability.resolve(), d.ready = d.sinkCapability.promise, this.streamSinks[n] = d, Promise.try(u, t.data, d).then(function() {
      l.postMessage({
        sourceName: s,
        targetName: r,
        stream: de.START_COMPLETE,
        streamId: n,
        success: !0
      });
    }, function(p) {
      l.postMessage({
        sourceName: s,
        targetName: r,
        stream: de.START_COMPLETE,
        streamId: n,
        reason: Ye(p)
      });
    });
  }
  #i(t) {
    const n = t.streamId, s = this.sourceName, r = t.sourceName, l = this.comObj, c = this.streamControllers[n], u = this.streamSinks[n];
    switch (t.stream) {
      case de.START_COMPLETE:
        t.success ? c.startCall.resolve() : c.startCall.reject(Ye(t.reason));
        break;
      case de.PULL_COMPLETE:
        t.success ? c.pullCall.resolve() : c.pullCall.reject(Ye(t.reason));
        break;
      case de.PULL:
        if (!u) {
          l.postMessage({
            sourceName: s,
            targetName: r,
            stream: de.PULL_COMPLETE,
            streamId: n,
            success: !0
          });
          break;
        }
        u.desiredSize <= 0 && t.desiredSize > 0 && u.sinkCapability.resolve(), u.desiredSize = t.desiredSize, Promise.try(u.onPull || Ry).then(function() {
          l.postMessage({
            sourceName: s,
            targetName: r,
            stream: de.PULL_COMPLETE,
            streamId: n,
            success: !0
          });
        }, function(p) {
          l.postMessage({
            sourceName: s,
            targetName: r,
            stream: de.PULL_COMPLETE,
            streamId: n,
            reason: Ye(p)
          });
        });
        break;
      case de.ENQUEUE:
        if (ie(c, "enqueue should have stream controller"), c.isClosed)
          break;
        c.controller.enqueue(t.chunk);
        break;
      case de.CLOSE:
        if (ie(c, "close should have stream controller"), c.isClosed)
          break;
        c.isClosed = !0, c.controller.close(), this.#s(c, n);
        break;
      case de.ERROR:
        ie(c, "error should have stream controller"), c.controller.error(Ye(t.reason)), this.#s(c, n);
        break;
      case de.CANCEL_COMPLETE:
        t.success ? c.cancelCall.resolve() : c.cancelCall.reject(Ye(t.reason)), this.#s(c, n);
        break;
      case de.CANCEL:
        if (!u)
          break;
        const d = Ye(t.reason);
        Promise.try(u.onCancel || Ry, d).then(function() {
          l.postMessage({
            sourceName: s,
            targetName: r,
            stream: de.CANCEL_COMPLETE,
            streamId: n,
            success: !0
          });
        }, function(p) {
          l.postMessage({
            sourceName: s,
            targetName: r,
            stream: de.CANCEL_COMPLETE,
            streamId: n,
            reason: Ye(p)
          });
        }), u.sinkCapability.reject(d), u.isCancelled = !0, delete this.streamSinks[n];
        break;
      default:
        throw new Error("Unexpected stream case");
    }
  }
  async #s(t, n) {
    await Promise.allSettled([t.startCall?.promise, t.pullCall?.promise, t.cancelCall?.promise]), delete this.streamControllers[n];
  }
  destroy() {
    this.#t?.abort(), this.#t = null;
  }
}
class s0 {
  #t = Object.freeze({
    cMapUrl: "CMap",
    standardFontDataUrl: "font",
    wasmUrl: "wasm"
  });
  constructor({
    cMapUrl: t = null,
    standardFontDataUrl: n = null,
    wasmUrl: s = null
  }) {
    this.cMapUrl = t, this.standardFontDataUrl = n, this.wasmUrl = s;
  }
  async fetch({
    kind: t,
    filename: n
  }) {
    switch (t) {
      case "cMapUrl":
      case "standardFontDataUrl":
      case "wasmUrl":
        break;
      default:
        kt(`Not implemented: ${t}`);
    }
    const s = this[t];
    if (!s)
      throw new Error(`Ensure that the \`${t}\` API parameter is provided.`);
    const r = `${s}${n}`;
    return this._fetch(r, t).catch((l) => {
      throw new Error(`Unable to load ${this.#t[t]} data at: ${r}`);
    });
  }
  async _fetch(t, n) {
    kt("Abstract method `_fetch` called.");
  }
}
class Ly extends s0 {
  async _fetch(t, n) {
    const s = n === "cMapUrl" && !t.endsWith(".bcmap") ? "text" : "bytes", r = await yd(t, s);
    return r instanceof Uint8Array ? r : Ql(r);
  }
}
class a0 {
  #t = !1;
  constructor({
    enableHWA: t = !1
  }) {
    this.#t = t;
  }
  create(t, n) {
    if (t <= 0 || n <= 0)
      throw new Error("Invalid canvas size");
    const s = this._createCanvas(t, n);
    return {
      canvas: s,
      context: s.getContext("2d", {
        willReadFrequently: !this.#t
      })
    };
  }
  reset({
    canvas: t
  }, n, s) {
    if (!t)
      throw new Error("Canvas is not specified");
    if (n <= 0 || s <= 0)
      throw new Error("Invalid canvas size");
    t.width = n, t.height = s;
  }
  destroy(t) {
    const {
      canvas: n
    } = t;
    if (!n)
      throw new Error("Canvas is not specified");
    n.width = n.height = 0, t.canvas = null, t.context = null;
  }
  _createCanvas(t, n) {
    kt("Abstract method `_createCanvas` called.");
  }
}
class ES extends a0 {
  constructor({
    ownerDocument: t = globalThis.document,
    enableHWA: n = !1
  }) {
    super({
      enableHWA: n
    }), this._document = t;
  }
  _createCanvas(t, n) {
    const s = this._document.createElement("canvas");
    return s.width = t, s.height = n, s;
  }
}
class r0 {
  addFilter(t) {
    return "none";
  }
  addHCMFilter(t, n) {
    return "none";
  }
  addAlphaFilter(t) {
    return "none";
  }
  addLuminosityFilter(t) {
    return "none";
  }
  addKnockoutFilter(t = 0) {
    return "none";
  }
  addHighlightHCMFilter(t, n, s, r, l) {
    return "none";
  }
  addSelectionHCMFilter(t, n) {
    return "none";
  }
  addSelectionFilter() {
    return "none";
  }
  createSelectionStyle(t = null) {
    return null;
  }
  destroy(t = !1) {
  }
}
class TS extends r0 {
  #t;
  #e;
  #n;
  #i;
  #s;
  #r;
  #a = 0;
  constructor({
    docId: t,
    ownerDocument: n = globalThis.document
  }) {
    super(), this.#i = t, this.#s = n;
  }
  get #o() {
    return this.#e ||= /* @__PURE__ */ new Map();
  }
  get #l() {
    return this.#r ||= /* @__PURE__ */ new Map();
  }
  get #c() {
    if (!this.#n) {
      const t = this.#s.createElement("div"), {
        style: n
      } = t;
      n.colorScheme = "only light", n.visibility = "hidden", n.contain = "strict", n.width = n.height = 0, n.position = "absolute", n.top = n.left = 0, n.zIndex = -1;
      const s = this.#s.createElementNS(Pe, "svg");
      s.setAttribute("width", 0), s.setAttribute("height", 0), this.#n = this.#s.createElementNS(Pe, "defs"), t.append(s), s.append(this.#n), this.#s.body.append(t);
    }
    return this.#n;
  }
  #d(t) {
    if (t.length === 1) {
      const d = t[0], p = new Array(256);
      for (let m = 0; m < 256; m++)
        p[m] = d[m] / 255;
      const g = p.join(",");
      return [g, g, g];
    }
    const [n, s, r] = t, l = new Array(256), c = new Array(256), u = new Array(256);
    for (let d = 0; d < 256; d++)
      l[d] = n[d] / 255, c[d] = s[d] / 255, u[d] = r[d] / 255;
    return [l.join(","), c.join(","), u.join(",")];
  }
  #h(t) {
    if (this.#t === void 0) {
      this.#t = "";
      const n = this.#s.URL;
      n !== this.#s.baseURI && (Zl(n) ? yt('#createUrl: ignore "data:"-URL for performance reasons.') : this.#t = Zy(n, ""));
    }
    return `url(${this.#t}#${t})`;
  }
  addFilter(t) {
    if (!t)
      return "none";
    let n = this.#o.get(t);
    if (n)
      return n;
    const [s, r, l] = this.#d(t), c = t.length === 1 ? s : `${s}${r}${l}`;
    if (n = this.#o.get(c), n)
      return this.#o.set(t, n), n;
    const u = `g_${this.#i}_transfer_map_${this.#a++}`, d = this.#h(u);
    this.#o.set(t, d), this.#o.set(c, d);
    const p = this.#m(u);
    return this.#p(s, r, l, p), d;
  }
  addHCMFilter(t, n) {
    const s = `${t}-${n}`, r = "base";
    let l = this.#l.get(r);
    if (l?.key === s || (l ? (l.filter?.remove(), l.key = s, l.url = "none", l.filter = null) : (l = {
      key: s,
      url: "none",
      filter: null
    }, this.#l.set(r, l)), !t || !n))
      return l.url;
    const c = this.#v(t);
    t = K.makeHexColor(...c);
    const u = this.#v(n);
    if (n = K.makeHexColor(...u), this.#A(), t === "#000000" && n === "#ffffff" || t === n)
      return l.url;
    const p = Array.from({
      length: 256
    }, (A, S) => od(S / 255)).join(","), g = `g_${this.#i}_hcm_filter`, m = l.filter = this.#m(g);
    this.#p(p, p, p, m), this.#g(m);
    const v = (A, S) => {
      const E = c[A] / 255, _ = u[A] / 255, w = new Array(S + 1);
      for (let C = 0; C <= S; C++)
        w[C] = E + C / S * (_ - E);
      return w.join(",");
    };
    return this.#p(v(0, 5), v(1, 5), v(2, 5), m), l.url = this.#h(g), l.url;
  }
  addSelectionHCMFilter(t, n) {
    return this.addHighlightHCMFilter("selection", t, n, "HighlightText", "Highlight");
  }
  addSelectionFilter() {
    return this.addHighlightHCMFilter("selection_default", "black", "white", "HighlightText", "Highlight");
  }
  createSelectionStyle(t = null) {
    const n = t ? this.addSelectionHCMFilter(t.foreground, t.background) : this.addSelectionFilter();
    return n === "none" || !Yt.platform.isFirefox ? null : {
      "backdrop-filter": n,
      "background-color": "transparent"
    };
  }
  addAlphaFilter(t) {
    let n = this.#o.get(t);
    if (n)
      return n;
    const [s] = this.#d([t]), r = `alpha_${s}`;
    if (n = this.#o.get(r), n)
      return this.#o.set(t, n), n;
    const l = `g_${this.#i}_alpha_map_${this.#a++}`, c = this.#h(l);
    this.#o.set(t, c), this.#o.set(r, c);
    const u = this.#m(l);
    return this.#y(s, u), c;
  }
  addLuminosityFilter(t) {
    let n = this.#o.get(t || "luminosity");
    if (n)
      return n;
    let s, r;
    if (t ? ([s] = this.#d([t]), r = `luminosity_${s}`) : r = "luminosity", n = this.#o.get(r), n)
      return this.#o.set(t, n), n;
    const l = `g_${this.#i}_luminosity_map_${this.#a++}`, c = this.#h(l);
    this.#o.set(t, c), this.#o.set(r, c);
    const u = this.#m(l);
    return this.#f(u), t && this.#y(s, u), c;
  }
  addKnockoutFilter(t = 0) {
    const n = t > 0 ? Math.min(1 / t, 1e6) : 1e6, s = `knockout_${n}`, r = this.#o.get(s);
    if (r)
      return r;
    const l = `g_${this.#i}_knockout_filter_${this.#a++}`, c = this.#h(l);
    this.#o.set(s, c);
    const u = this.#m(l), d = this.#s.createElementNS(Pe, "feComponentTransfer");
    u.append(d);
    const p = this.#s.createElementNS(Pe, "feFuncA");
    return p.setAttribute("type", "linear"), p.setAttribute("slope", `${n}`), p.setAttribute("intercept", "0"), d.append(p), c;
  }
  addHighlightHCMFilter(t, n, s, r, l) {
    const c = `${n}-${s}-${r}-${l}`;
    let u = this.#l.get(t);
    if (u?.key === c || (u ? (u.filter?.remove(), u.key = c, u.url = "none", u.filter = null) : (u = {
      key: c,
      url: "none",
      filter: null
    }, this.#l.set(t, u)), !n || !s))
      return u.url;
    const [d, p] = [n, s].map(this.#v.bind(this));
    let g = Math.round(0.2126 * d[0] + 0.7152 * d[1] + 0.0722 * d[2]), m = Math.round(0.2126 * p[0] + 0.7152 * p[1] + 0.0722 * p[2]), [v, A] = [r, l].map(this.#T.bind(this));
    m < g && ([g, m, v, A] = [m, g, A, v]), this.#A();
    const S = (w, C, M) => {
      const B = new Array(256), N = (m - g) / M, P = w / 255, U = (C - w) / (255 * M);
      let j = 0;
      for (let q = 0; q <= M; q++) {
        const $ = Math.round(g + q * N), W = P + q * U;
        for (let tt = j; tt <= $; tt++)
          B[tt] = W;
        j = $ + 1;
      }
      for (let q = j; q < 256; q++)
        B[q] = B[j - 1];
      return B.join(",");
    }, E = `g_${this.#i}_hcm_${t}_filter`, _ = u.filter = this.#m(E);
    return this.#g(_), this.#p(S(v[0], A[0], 5), S(v[1], A[1], 5), S(v[2], A[2], 5), _), u.url = this.#h(E), u.url;
  }
  destroy(t = !1) {
    t && this.#r?.size || (this.#n?.parentNode.parentNode.remove(), this.#n = null, this.#e?.clear(), this.#e = null, this.#r?.clear(), this.#r = null, this.#a = 0);
  }
  #f(t) {
    const n = this.#s.createElementNS(Pe, "feColorMatrix");
    n.setAttribute("type", "matrix"), n.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), t.append(n);
  }
  #g(t) {
    const n = this.#s.createElementNS(Pe, "feColorMatrix");
    n.setAttribute("type", "matrix"), n.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), t.append(n);
  }
  #m(t) {
    const n = this.#s.createElementNS(Pe, "filter");
    return n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("id", t), this.#c.append(n), n;
  }
  #u(t, n, s) {
    const r = this.#s.createElementNS(Pe, n);
    r.setAttribute("type", "discrete"), r.setAttribute("tableValues", s), t.append(r);
  }
  #p(t, n, s, r) {
    const l = this.#s.createElementNS(Pe, "feComponentTransfer");
    r.append(l), this.#u(l, "feFuncR", t), this.#u(l, "feFuncG", n), this.#u(l, "feFuncB", s);
  }
  #y(t, n) {
    const s = this.#s.createElementNS(Pe, "feComponentTransfer");
    n.append(s), this.#u(s, "feFuncA", t);
  }
  #v(t) {
    return this.#c.style.color = "CanvasText", this.#c.style.backgroundColor = t, qr(getComputedStyle(this.#c).getPropertyValue("background-color"));
  }
  #b(t) {
    return this.#c.style.color = "CanvasText", this.#c.style.backgroundColor = t, Xr(getComputedStyle(this.#c).getPropertyValue("background-color"));
  }
  #A() {
    this.#c.style.color = "", this.#c.style.backgroundColor = "";
  }
  #T(t) {
    const [n, s, r, l] = this.#b(t);
    if (l === 1)
      return [n, s, r];
    const [c, u, d] = this.#v("Canvas");
    return [Zh(n, c, l), Zh(s, u, l), Zh(r, d, l)];
  }
}
function Zh(y, t, n) {
  return Math.round(n * y + (1 - n) * t);
}
on && yt("Please use the `legacy` build in Node.js environments.");
async function _S(y) {
  const n = await process.getBuiltinModule("fs/promises").readFile(y);
  return new Uint8Array(n);
}
class wS extends r0 {
}
class CS extends a0 {
  _createCanvas(t, n) {
    return process.getBuiltinModule("module").createRequire(import.meta.url)("@napi-rs/canvas").createCanvas(t, n);
  }
}
class xS extends s0 {
  async _fetch(t, n) {
    return _S(t);
  }
}
function o0({
  src: y,
  srcPos: t = 0,
  dest: n,
  width: s,
  height: r,
  nonBlackColor: l = 4294967295,
  inverseDecode: c = !1
}) {
  const u = Yt.isLittleEndian ? 4278190080 : 255, [d, p] = c ? [l, u] : [u, l], g = s >> 3, m = s & 7, v = d ^ p, A = y.length;
  n = new Uint32Array(n.buffer);
  let S = 0;
  for (let E = 0; E < r; ++E) {
    for (const w = t + g; t < w; ++t, S += 8) {
      const C = y[t];
      n[S] = d ^ -(C >> 7 & 1) & v, n[S + 1] = d ^ -(C >> 6 & 1) & v, n[S + 2] = d ^ -(C >> 5 & 1) & v, n[S + 3] = d ^ -(C >> 4 & 1) & v, n[S + 4] = d ^ -(C >> 3 & 1) & v, n[S + 5] = d ^ -(C >> 2 & 1) & v, n[S + 6] = d ^ -(C >> 1 & 1) & v, n[S + 7] = d ^ -(C & 1) & v;
    }
    if (m === 0)
      continue;
    const _ = t < A ? y[t++] : 255;
    for (let w = 0; w < m; ++w, ++S)
      n[S] = d ^ -(_ >> 7 - w & 1) & v;
  }
  return {
    srcPos: t,
    destPos: S
  };
}
function MS({
  src: y,
  srcPos: t = 0,
  dest: n,
  destPos: s = 0,
  width: r,
  height: l
}) {
  let c = 0;
  const u = r * l * 3, d = u >> 2, p = new Uint32Array(y.buffer, t, d), g = Yt.isLittleEndian ? 4278190080 : 255;
  if (Yt.isLittleEndian) {
    for (; c < d - 2; c += 3, s += 4) {
      const m = p[c], v = p[c + 1], A = p[c + 2];
      n[s] = m | g, n[s + 1] = m >>> 24 | v << 8 | g, n[s + 2] = v >>> 16 | A << 16 | g, n[s + 3] = A >>> 8 | g;
    }
    for (let m = c * 4, v = t + u; m < v; m += 3)
      n[s++] = y[m] | y[m + 1] << 8 | y[m + 2] << 16 | g;
  } else {
    for (; c < d - 2; c += 3, s += 4) {
      const m = p[c], v = p[c + 1], A = p[c + 2];
      n[s] = m | g, n[s + 1] = m << 24 | v >>> 8 | g, n[s + 2] = v << 16 | A >>> 16 | g, n[s + 3] = A << 8 | g;
    }
    for (let m = c * 4, v = t + u; m < v; m += 3)
      n[s++] = y[m] << 24 | y[m + 1] << 16 | y[m + 2] << 8 | g;
  }
  return {
    srcPos: t + u,
    destPos: s
  };
}
const DS = `
struct Uniforms {
  offsetX      : f32,
  offsetY      : f32,
  scaleX       : f32,
  scaleY       : f32,
  paddedWidth  : f32,
  paddedHeight : f32,
  borderSize   : f32,
  _pad         : f32,
};

@group(0) @binding(0) var<uniform> u : Uniforms;

struct VertexInput {
  @location(0) position : vec2<f32>,
  @location(1) color    : vec4<f32>,
};

struct VertexOutput {
  @builtin(position) position : vec4<f32>,
  @location(0)       color    : vec3<f32>,
};

@vertex
fn vs_main(in : VertexInput) -> VertexOutput {
  var out : VertexOutput;
  let cx = (in.position.x + u.offsetX) * u.scaleX;
  let cy = (in.position.y + u.offsetY) * u.scaleY;
  out.position = vec4<f32>(
    ((cx + u.borderSize) / u.paddedWidth) * 2.0 - 1.0,
    1.0 - ((cy + u.borderSize) / u.paddedHeight) * 2.0,
    0.0,
    1.0
  );
  out.color = in.color.rgb;
  return out;
}

@fragment
fn fs_main(in : VertexOutput) -> @location(0) vec4<f32> {
  return vec4<f32>(in.color, 1.0);
}
`;
class OS {
  #t = null;
  #e = null;
  #n = null;
  #i = null;
  async #s() {
    if (!globalThis.navigator?.gpu)
      return !1;
    try {
      const t = await navigator.gpu.requestAdapter();
      return t ? (this.#i = navigator.gpu.getPreferredCanvasFormat(), this.#e = await t.requestDevice(), !0) : !1;
    } catch {
      return !1;
    }
  }
  init() {
    return this.#t ||= this.#s();
  }
  get isReady() {
    return this.#e !== null;
  }
  loadMeshShader() {
    if (!this.#e || this.#n)
      return;
    const t = this.#e.createShaderModule({
      code: DS
    });
    this.#n = this.#e.createRenderPipeline({
      layout: "auto",
      vertex: {
        module: t,
        entryPoint: "vs_main",
        buffers: [{
          arrayStride: 8,
          attributes: [{
            shaderLocation: 0,
            offset: 0,
            format: "float32x2"
          }]
        }, {
          arrayStride: 4,
          attributes: [{
            shaderLocation: 1,
            offset: 0,
            format: "unorm8x4"
          }]
        }]
      },
      fragment: {
        module: t,
        entryPoint: "fs_main",
        targets: [{
          format: this.#i
        }]
      },
      primitive: {
        topology: "triangle-list"
      }
    });
  }
  draw(t, n, s, r, l, c, u, d) {
    this.loadMeshShader();
    const p = this.#e, {
      offsetX: g,
      offsetY: m,
      scaleX: v,
      scaleY: A
    } = r, S = p.createBuffer({
      size: Math.max(t.byteLength, 4),
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
    });
    t.byteLength > 0 && p.queue.writeBuffer(S, 0, t);
    const E = p.createBuffer({
      size: Math.max(n.byteLength, 4),
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
    });
    n.byteLength > 0 && p.queue.writeBuffer(E, 0, n);
    const _ = p.createBuffer({
      size: 32,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
    });
    p.queue.writeBuffer(_, 0, new Float32Array([g, m, v, A, c, u, d, 0]));
    const w = p.createBindGroup({
      layout: this.#n.getBindGroupLayout(0),
      entries: [{
        binding: 0,
        resource: {
          buffer: _
        }
      }]
    }), C = new OffscreenCanvas(c, u), M = C.getContext("webgpu");
    M.configure({
      device: p,
      format: this.#i,
      alphaMode: l ? "opaque" : "premultiplied"
    });
    const B = l ? {
      r: l[0] / 255,
      g: l[1] / 255,
      b: l[2] / 255,
      a: 1
    } : {
      r: 0,
      g: 0,
      b: 0,
      a: 0
    }, N = p.createCommandEncoder(), P = N.beginRenderPass({
      colorAttachments: [{
        view: M.getCurrentTexture().createView(),
        clearValue: B,
        loadOp: "clear",
        storeOp: "store"
      }]
    });
    return s > 0 && (P.setPipeline(this.#n), P.setBindGroup(0, w), P.setVertexBuffer(0, S), P.setVertexBuffer(1, E), P.draw(s)), P.end(), p.queue.submit([N.finish()]), S.destroy(), E.destroy(), _.destroy(), C.transferToImageBitmap();
  }
}
const $l = new OS();
function NS() {
  return $l.init();
}
function RS() {
  return $l.isReady;
}
function LS() {
  $l.loadMeshShader();
}
function kS(y, t, n, s, r, l, c, u) {
  return $l.draw(y, t, n, s, r, l, c, u);
}
const Oe = {
  FILL: "Fill",
  STROKE: "Stroke",
  SHADING: "Shading"
};
function Il(y, t) {
  if (!t)
    return;
  const n = t[2] - t[0], s = t[3] - t[1], r = new Path2D();
  r.rect(t[0], t[1], n, s), y.clip(r);
}
class Td {
  matrix = null;
  isModifyingCurrentTransform() {
    return !1;
  }
  getPattern() {
    kt("Abstract method `getPattern` called.");
  }
}
class BS extends Td {
  constructor(t) {
    super(), this._type = t[1], this._bbox = t[2], this._colorStops = t[3], this._p0 = t[4], this._p1 = t[5], this._r0 = t[6], this._r1 = t[7];
  }
  isOriginBased() {
    return this._p0[0] === 0 && this._p0[1] === 0 && (!this.isRadial() || this._p1[0] === 0 && this._p1[1] === 0);
  }
  isRadial() {
    return this._type === "radial";
  }
  areConic() {
    if (!this.isRadial())
      return !1;
    const t = Math.hypot(this._p0[0] - this._p1[0], this._p0[1] - this._p1[1]);
    return t + this._r1 > this._r0 && t + this._r0 > this._r1;
  }
  _createGradient(t, n = null) {
    let s, r = this._p0, l = this._p1;
    if (n && (r = r.slice(), l = l.slice(), K.applyTransform(r, n), K.applyTransform(l, n)), this._type === "axial")
      s = t.createLinearGradient(r[0], r[1], l[0], l[1]);
    else if (this._type === "radial") {
      let c = this._r0, u = this._r1;
      if (n) {
        const d = new Float32Array(2);
        K.singularValueDecompose2dScale(n, d), c *= d[0], u *= d[0];
      }
      s = t.createRadialGradient(r[0], r[1], c, l[0], l[1], u);
    }
    for (const c of this._colorStops)
      s.addColorStop(c[0], c[1]);
    return s;
  }
  _createReversedGradient(t, n = null) {
    let s = this._p1, r = this._p0;
    n && (s = s.slice(), r = r.slice(), K.applyTransform(s, n), K.applyTransform(r, n));
    let l = this._r1, c = this._r0;
    if (n) {
      const p = new Float32Array(2);
      K.singularValueDecompose2dScale(n, p), l *= p[0], c *= p[0];
    }
    const u = t.createRadialGradient(s[0], s[1], l, r[0], r[1], c), d = this._colorStops.map(([p, g]) => [1 - p, g]).reverse();
    for (const [p, g] of d)
      u.addColorStop(p, g);
    return u;
  }
  getPattern(t, n, s, r) {
    let l;
    if (r === Oe.STROKE || r === Oe.FILL) {
      if (this.isOriginBased()) {
        let v = K.transform(s, n.baseTransform);
        this.matrix && (v = K.transform(v, this.matrix));
        const A = 1e-3, S = Math.hypot(v[0], v[1]), E = Math.hypot(v[2], v[3]), _ = (v[0] * v[2] + v[1] * v[3]) / (S * E);
        if (Math.abs(_) < A)
          if (this.isRadial()) {
            if (Math.abs(S - E) < A)
              return this._createGradient(t, v);
          } else
            return this._createGradient(t, v);
      }
      const c = n.current.getClippedPathBoundingBox(r, Zt(t)) || [0, 0, 0, 0], u = Math.ceil(c[2] - c[0]) || 1, d = Math.ceil(c[3] - c[1]) || 1, p = n.canvasFactory.create(u, d), g = p.context;
      g.clearRect(0, 0, g.canvas.width, g.canvas.height), g.beginPath(), g.rect(0, 0, g.canvas.width, g.canvas.height), g.translate(-c[0], -c[1]), s = K.transform(s, [1, 0, 0, 1, c[0], c[1]]), g.transform(...n.baseTransform), this.matrix && g.transform(...this.matrix), Il(g, this._bbox), this.areConic() && (g.fillStyle = this._createReversedGradient(g), g.fill()), g.fillStyle = this._createGradient(g), g.fill(), l = t.createPattern(p.canvas, "no-repeat"), n.canvasFactory.destroy(p);
      const m = new DOMMatrix(s);
      l.setTransform(m);
    } else
      this.areConic() && (t.save(), Il(t, this._bbox), t.fillStyle = this._createReversedGradient(t), t.fillRect(-1e10, -1e10, 2e10, 2e10), t.restore()), Il(t, this._bbox), l = this._createGradient(t);
    return l;
  }
}
function PS(y, t, n, s, r, l, c, u) {
  const d = t.coords, p = t.colors, g = y.data, m = y.width * 4;
  let v;
  d[n * 2 + 1] > d[s * 2 + 1] && (v = n, n = s, s = v, v = l, l = c, c = v), d[s * 2 + 1] > d[r * 2 + 1] && (v = s, s = r, r = v, v = c, c = u, u = v), d[n * 2 + 1] > d[s * 2 + 1] && (v = n, n = s, s = v, v = l, l = c, c = v);
  const A = (d[n * 2] + t.offsetX) * t.scaleX, S = (d[n * 2 + 1] + t.offsetY) * t.scaleY, E = (d[s * 2] + t.offsetX) * t.scaleX, _ = (d[s * 2 + 1] + t.offsetY) * t.scaleY, w = (d[r * 2] + t.offsetX) * t.scaleX, C = (d[r * 2 + 1] + t.offsetY) * t.scaleY;
  if (S >= C)
    return;
  const M = p[l * 4], B = p[l * 4 + 1], N = p[l * 4 + 2], P = p[c * 4], U = p[c * 4 + 1], j = p[c * 4 + 2], q = p[u * 4], $ = p[u * 4 + 1], W = p[u * 4 + 2], tt = Math.round(S), ct = Math.round(C);
  let gt, vt, H, X, nt, mt, St, me;
  for (let Dt = tt; Dt <= ct; Dt++) {
    if (Dt < _) {
      const Z = Dt < S ? 0 : (S - Dt) / (S - _);
      gt = A - (A - E) * Z, vt = M - (M - P) * Z, H = B - (B - U) * Z, X = N - (N - j) * Z;
    } else {
      let Z;
      Dt > C ? Z = 1 : _ === C ? Z = 0 : Z = (_ - Dt) / (_ - C), gt = E - (E - w) * Z, vt = P - (P - q) * Z, H = U - (U - $) * Z, X = j - (j - W) * Z;
    }
    let Bt;
    Dt < S ? Bt = 0 : Dt > C ? Bt = 1 : Bt = (S - Dt) / (S - C), nt = A - (A - w) * Bt, mt = M - (M - q) * Bt, St = B - (B - $) * Bt, me = N - (N - W) * Bt;
    const O = Math.round(Math.min(gt, nt)), Y = Math.round(Math.max(gt, nt));
    let at = m * Dt + O * 4;
    for (let Z = O; Z <= Y; Z++)
      Bt = (gt - Z) / (gt - nt), Bt < 0 ? Bt = 0 : Bt > 1 && (Bt = 1), g[at++] = vt - (vt - mt) * Bt | 0, g[at++] = H - (H - St) * Bt | 0, g[at++] = X - (X - me) * Bt | 0, g[at++] = 255;
  }
}
class IS extends Td {
  constructor(t) {
    super(), this._posData = t[2], this._colData = t[3], this._vertexCount = t[4], this._bounds = t[5], this._bbox = t[6], this._background = t[7], LS();
  }
  _createMeshCanvas(t, n, s) {
    const u = Math.floor(this._bounds[0]), d = Math.floor(this._bounds[1]), p = Math.ceil(this._bounds[2]) - u, g = Math.ceil(this._bounds[3]) - d, m = Math.min(Math.ceil(Math.abs(p * t[0] * 1.1)), 3e3) || 1, v = Math.min(Math.ceil(Math.abs(g * t[1] * 1.1)), 3e3) || 1, A = p ? p / m : 1, S = g ? g / v : 1, E = {
      coords: this._posData,
      colors: this._colData,
      offsetX: -u,
      offsetY: -d,
      scaleX: 1 / A,
      scaleY: 1 / S
    }, _ = m + 4, w = v + 4, C = s.create(_, w);
    if (RS() && this._vertexCount > 48)
      C.context.drawImage(kS(this._posData, this._colData, this._vertexCount, E, n, _, w, 2), 0, 0);
    else {
      const M = C.context.createImageData(m, v);
      if (n) {
        const B = M.data;
        for (let N = 0, P = B.length; N < P; N += 4)
          B[N] = n[0], B[N + 1] = n[1], B[N + 2] = n[2], B[N + 3] = 255;
      }
      for (let B = 0, N = this._vertexCount; B < N; B += 3)
        PS(M, E, B, B + 1, B + 2, B, B + 1, B + 2);
      C.context.putImageData(M, 2, 2);
    }
    return {
      canvas: C.canvas,
      offsetX: u - 2 * A,
      offsetY: d - 2 * S,
      scaleX: A,
      scaleY: S
    };
  }
  isModifyingCurrentTransform() {
    return !0;
  }
  getPattern(t, n, s, r) {
    Il(t, this._bbox);
    const l = new Float32Array(2);
    if (r === Oe.SHADING)
      K.singularValueDecompose2dScale(Zt(t), l);
    else if (this.matrix) {
      K.singularValueDecompose2dScale(this.matrix, l);
      const [d, p] = l;
      K.singularValueDecompose2dScale(n.baseTransform, l), l[0] *= d, l[1] *= p;
    } else
      K.singularValueDecompose2dScale(n.baseTransform, l);
    const c = this._createMeshCanvas(l, r === Oe.SHADING ? null : this._background, n.canvasFactory);
    r !== Oe.SHADING && (t.setTransform(...n.baseTransform), this.matrix && t.transform(...this.matrix)), t.translate(c.offsetX, c.offsetY), t.scale(c.scaleX, c.scaleY);
    const u = t.createPattern(c.canvas, "no-repeat");
    return n.canvasFactory.destroy(c), u;
  }
}
class FS extends Td {
  getPattern() {
    return "hotpink";
  }
}
function zS(y) {
  switch (y[0]) {
    case "RadialAxial":
      return new BS(y);
    case "Mesh":
      return new IS(y);
    case "Dummy":
      return new FS();
  }
  throw new Error(`Unknown IR type: ${y[0]}`);
}
const ky = {
  COLORED: 1,
  UNCOLORED: 2
};
class zr {
  static MAX_PATTERN_SIZE = 3e3;
  constructor(t, n, s, r) {
    this.color = t[1], this.operatorList = t[2], this.matrix = t[3], this.bbox = t[4], this.xstep = t[5], this.ystep = t[6], this.paintType = t[7], this.tilingType = t[8], this.needsIsolation = t[9] ?? !0, this.ctx = n, this.canvasGraphicsFactory = s, this.baseTransform = r, this.patternBaseMatrix = this.matrix ? K.transform(r, this.matrix) : r;
  }
  canSkipPatternCanvas([t, n, s, r]) {
    const [l, c, u, d] = this.bbox, p = Math.abs(this.xstep), g = Math.abs(this.ystep);
    if (t > p + 1e-6 || n > g + 1e-6)
      return null;
    const m = Math.floor((s - u) / p) + 1, v = Math.ceil((s + t - l) / p) - 1, A = Math.floor((r - d) / g) + 1, S = Math.ceil((r + n - c) / g) - 1;
    return v <= m && S <= A ? [m, A] : null;
  }
  updatePatternDims(t, n) {
    const s = K.inverseTransform(this.patternBaseMatrix), r = [t[0], t[1]], l = [t[2], t[3]];
    K.applyTransform(r, s), K.applyTransform(l, s), n[0] = Math.abs(l[0] - r[0]), n[1] = Math.abs(l[1] - r[1]), n[2] = Math.min(r[0], l[0]), n[3] = Math.min(r[1], l[1]);
  }
  _renderTileCanvas(t, n, s, r) {
    const [l, c, u, d] = this.bbox, p = t.canvasFactory.create(s.size, r.size), g = p.context, m = this.canvasGraphicsFactory.createCanvasGraphics(g, n);
    return m.groupLevel = t.groupLevel, this.setFillAndStrokeStyleToContext(m, this.paintType, this.color), g.translate(-s.scale * l, -r.scale * c), m.transform(0, s.scale, 0, 0, r.scale, 0, 0), g.save(), m.dependencyTracker?.save(), this.clipBbox(m, l, c, u, d), m.baseTransform = Zt(m.ctx), m.executeOperatorList(this.operatorList), m.endDrawing(), m.dependencyTracker?.restore(), g.restore(), p;
  }
  _getCombinedScales() {
    const t = new Float32Array(2);
    K.singularValueDecompose2dScale(this.matrix, t);
    const [n, s] = t;
    return K.singularValueDecompose2dScale(this.baseTransform, t), [n * t[0], s * t[1]];
  }
  drawPattern(t, n, s = !1, [r, l], c) {
    const [u, d, p, g] = this.bbox, m = t.dependencyTracker;
    if (m && (t.dependencyTracker = new Gr(m, c)), t.save(), s ? t.ctx.clip(n, "evenodd") : t.ctx.clip(n), t.ctx.setTransform(...this.patternBaseMatrix), t.ctx.translate(r * this.xstep, l * this.ystep), this.needsIsolation || t.ctx.globalAlpha !== 1 || t.ctx.globalCompositeOperation !== "source-over" || t.inSMaskMode) {
      const v = p - u, A = g - d, [S, E] = this._getCombinedScales(), _ = this.getSizeAndScale(v, this.ctx.canvas.width, S), w = this.getSizeAndScale(A, this.ctx.canvas.height, E), C = this._renderTileCanvas(t, c, _, w);
      t.ctx.drawImage(C.canvas, u, d, v, A), t.canvasFactory.destroy(C);
    } else
      this.setFillAndStrokeStyleToContext(t, this.paintType, this.color), this.clipBbox(t, u, d, p, g), t.baseTransformStack.push(t.baseTransform), t.baseTransform = Zt(t.ctx), t.executeOperatorList(this.operatorList), t.baseTransform = t.baseTransformStack.pop();
    t.restore(), m && (t.dependencyTracker = m);
  }
  createPatternCanvas(t, n) {
    const [s, r, l, c] = this.bbox, u = l - s, d = c - r;
    let {
      xstep: p,
      ystep: g
    } = this;
    p = Math.abs(p), g = Math.abs(g), Kl("TilingType: " + this.tilingType);
    const [m, v] = this._getCombinedScales();
    let A = u, S = d, E = !1, _ = !1;
    Math.ceil(p * m) >= Math.ceil(u * m) ? A = p : E = !0, Math.ceil(g * v) >= Math.ceil(d * v) ? S = g : _ = !0;
    const w = this.getSizeAndScale(A, this.ctx.canvas.width, m), C = this.getSizeAndScale(S, this.ctx.canvas.height, v), M = this._renderTileCanvas(t, n, w, C);
    if (E || _) {
      const B = M.canvas;
      E && (A = p), _ && (S = g);
      const N = this.getSizeAndScale(A, this.ctx.canvas.width, m), P = this.getSizeAndScale(S, this.ctx.canvas.height, v), U = N.size, j = P.size, q = t.canvasFactory.create(U, j), $ = q.context, W = E ? Math.floor(u / p) : 0, tt = _ ? Math.floor(d / g) : 0;
      for (let ct = 0; ct <= W; ct++)
        for (let gt = 0; gt <= tt; gt++)
          $.drawImage(B, U * ct, j * gt, U, j, 0, 0, U, j);
      return t.canvasFactory.destroy(M), {
        canvas: q.canvas,
        canvasEntry: q,
        scaleX: N.scale,
        scaleY: P.scale,
        offsetX: s,
        offsetY: r
      };
    }
    return {
      canvas: M.canvas,
      canvasEntry: M,
      scaleX: w.scale,
      scaleY: C.scale,
      offsetX: s,
      offsetY: r
    };
  }
  getSizeAndScale(t, n, s) {
    const r = Math.max(zr.MAX_PATTERN_SIZE, n);
    let l = Math.ceil(t * s);
    return l >= r ? l = r : s = l / t, {
      scale: s,
      size: l
    };
  }
  clipBbox(t, n, s, r, l) {
    const c = r - n, u = l - s, d = new Path2D();
    d.rect(n, s, c, u), K.axialAlignedBoundingBox([n, s, r, l], Zt(t.ctx), t.current.minMax), t.ctx.clip(d), t.current.updateClipFromPath();
  }
  setFillAndStrokeStyleToContext(t, n, s) {
    const r = t.ctx, l = t.current;
    switch (l.patternFill = l.patternStroke = !1, n) {
      case ky.COLORED:
        const {
          fillStyle: c,
          strokeStyle: u
        } = this.ctx;
        r.fillStyle = l.fillColor = c, r.strokeStyle = l.strokeColor = u;
        break;
      case ky.UNCOLORED:
        r.fillStyle = r.strokeStyle = s, l.fillColor = l.strokeColor = s;
        break;
      default:
        throw new IA(`Unsupported paint type: ${n}`);
    }
  }
  isModifyingCurrentTransform() {
    return !1;
  }
  getPattern(t, n, s, r, l) {
    const c = r !== Oe.SHADING ? K.transform(s, this.patternBaseMatrix) : s, u = this.createPatternCanvas(n, l);
    let d = new DOMMatrix(c);
    d = d.translate(u.offsetX, u.offsetY), d = d.scale(1 / u.scaleX, 1 / u.scaleY);
    const p = t.createPattern(u.canvas, "repeat");
    return n.canvasFactory.destroy(u.canvasEntry), p.setTransform(d), p;
  }
}
const US = 16, HS = 100, GS = 15, By = 10, Xe = 16, cn = new Float32Array(2);
function Py(y, t) {
  if (y._removeMirroring)
    throw new Error("Context is already forwarding operations.");
  const n = /* @__PURE__ */ new Map();
  for (const s of ["save", "restore", "rotate", "scale", "translate", "transform", "setTransform", "resetTransform", "clip", "moveTo", "lineTo", "bezierCurveTo", "quadraticCurveTo", "arc", "arcTo", "ellipse", "rect", "roundRect", "closePath", "beginPath"]) {
    const r = y[s];
    typeof r != "function" || typeof t[s] != "function" || (n.set(s, r), y[s] = function(...l) {
      return t[s](...l), r.apply(this, l);
    });
  }
  y._removeMirroring = () => {
    for (const [s, r] of n)
      y[s] = r;
    delete y._removeMirroring;
  };
}
function Dl(y, t, n, s, r, l, c, u, d, p) {
  const [g, m, v, A, S, E] = Zt(y);
  if (m === 0 && v === 0) {
    const C = c * g + S, M = Math.round(C), B = u * A + E, N = Math.round(B), P = (c + d) * g + S, U = Math.abs(Math.round(P) - M) || 1, j = (u + p) * A + E, q = Math.abs(Math.round(j) - N) || 1;
    return y.setTransform(Math.sign(g), 0, 0, Math.sign(A), M, N), y.drawImage(t, n, s, r, l, 0, 0, U, q), y.setTransform(g, m, v, A, S, E), [U, q];
  }
  if (g === 0 && A === 0) {
    const C = u * v + S, M = Math.round(C), B = c * m + E, N = Math.round(B), P = (u + p) * v + S, U = Math.abs(Math.round(P) - M) || 1, j = (c + d) * m + E, q = Math.abs(Math.round(j) - N) || 1;
    return y.setTransform(0, Math.sign(m), Math.sign(v), 0, M, N), y.drawImage(t, n, s, r, l, 0, 0, q, U), y.setTransform(g, m, v, A, S, E), [q, U];
  }
  y.drawImage(t, n, s, r, l, c, u, d, p);
  const _ = Math.hypot(g, m), w = Math.hypot(v, A);
  return [_ * d, w * p];
}
class Iy {
  alphaIsShape = !1;
  fontSize = 0;
  fontSizeScale = 1;
  textMatrix = null;
  textMatrixScale = 1;
  fontMatrix = Jh;
  leading = 0;
  x = 0;
  y = 0;
  lineX = 0;
  lineY = 0;
  charSpacing = 0;
  wordSpacing = 0;
  textHScale = 1;
  textRenderingMode = pe.FILL;
  textRise = 0;
  fillColor = "#000000";
  strokeColor = "#000000";
  tilingPatternDims = null;
  patternFill = !1;
  patternStroke = !1;
  fillAlpha = 1;
  strokeAlpha = 1;
  lineWidth = 1;
  activeSMask = null;
  transferMaps = "none";
  minMax = _s.slice();
  constructor(t, n) {
    this.clipBox = new Float32Array([0, 0, t, n]);
  }
  clone() {
    const t = Object.create(this);
    return t.clipBox = this.clipBox.slice(), t.minMax = this.minMax.slice(), t.tilingPatternDims = this.tilingPatternDims?.slice(), t;
  }
  getPathBoundingBox(t = Oe.FILL, n = null) {
    const s = this.minMax.slice();
    if (t === Oe.STROKE) {
      n || kt("Stroke bounding box must include transform."), K.singularValueDecompose2dScale(n, cn);
      const r = cn[0] * this.lineWidth / 2, l = cn[1] * this.lineWidth / 2;
      s[0] -= r, s[1] -= l, s[2] += r, s[3] += l;
    }
    return s;
  }
  updateClipFromPath() {
    const t = K.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(t || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minMax[0] === 1 / 0;
  }
  startNewPathAndClipBox(t) {
    this.clipBox.set(t, 0), this.minMax.set(_s, 0);
  }
  getClippedPathBoundingBox(t = Oe.FILL, n = null) {
    return K.intersect(this.clipBox, this.getPathBoundingBox(t, n));
  }
}
function Fy(y, t) {
  const {
    width: n,
    height: s,
    kind: r
  } = t, l = s % Xe, c = (s - l) / Xe, u = l === 0 ? c : c + 1, d = y.createImageData(n, Xe);
  let p = 0;
  const g = t.data, m = d.data;
  let v;
  if (r === Pl.GRAYSCALE_1BPP)
    for (v = 0; v < u; v++)
      ({
        srcPos: p
      } = o0({
        src: g,
        srcPos: p,
        dest: m,
        width: n,
        height: v < c ? Xe : l
      })), y.putImageData(d, 0, v * Xe);
  else if (r === Pl.RGBA_32BPP) {
    let A = 0, S = n * Xe * 4;
    for (v = 0; v < c; v++)
      m.set(g.subarray(p, p + S)), p += S, y.putImageData(d, 0, A), A += Xe;
    v < u && (S = n * l * 4, m.set(g.subarray(p, p + S)), y.putImageData(d, 0, A));
  } else if (r === Pl.RGB_24BPP)
    for (v = 0; v < u; v++)
      ({
        srcPos: p
      } = MS({
        src: g,
        srcPos: p,
        dest: new Uint32Array(m.buffer),
        width: n,
        height: v < c ? Xe : l
      })), y.putImageData(d, 0, v * Xe);
  else
    throw new Error(`bad image kind: ${r}`);
}
function zy(y, t) {
  if (t.bitmap) {
    y.drawImage(t.bitmap, 0, 0);
    return;
  }
  const {
    width: n,
    height: s
  } = t, r = s % Xe, l = (s - r) / Xe, c = r === 0 ? l : l + 1, u = y.createImageData(n, Xe);
  let d = 0;
  const p = t.data, g = u.data;
  for (let m = 0; m < c; m++)
    ({
      srcPos: d
    } = o0({
      src: p,
      srcPos: d,
      dest: g,
      width: n,
      height: m < l ? Xe : r,
      nonBlackColor: 0
    })), y.putImageData(u, 0, m * Xe);
}
function Es(y, t) {
  const n = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const s of n)
    y[s] !== void 0 && (t[s] = y[s]);
  y.setLineDash !== void 0 && (t.setLineDash(y.getLineDash()), t.lineDashOffset = y.lineDashOffset);
}
function Ol(y) {
  y.strokeStyle = y.fillStyle = "#000000", y.fillRule = "nonzero", y.globalAlpha = 1, y.lineWidth = 1, y.lineCap = "butt", y.lineJoin = "miter", y.miterLimit = 10, y.globalCompositeOperation = "source-over", y.font = "10px sans-serif", y.setLineDash !== void 0 && (y.setLineDash([]), y.lineDashOffset = 0);
  const {
    filter: t
  } = y;
  t !== "none" && t !== "" && (y.filter = "none");
}
function Uy(y, t) {
  if (t)
    return !0;
  K.singularValueDecompose2dScale(y, cn);
  const n = Math.fround(Ln.pixelRatio * ka.PDF_TO_CSS_UNITS);
  return cn[0] <= n && cn[1] <= n;
}
const jS = ["butt", "round", "square"], VS = ["miter", "round", "bevel"], YS = {}, Hy = {};
class Ds {
  static #t = null;
  #e = 0;
  #n = 0;
  #i = null;
  #s = null;
  #r = null;
  #a = null;
  #o = 1;
  #l;
  #c = null;
  #d = [];
  constructor(t, n, s, r, l, {
    optionalContentConfig: c,
    markedContentStack: u = null
  }, d, p, g, m) {
    this.ctx = t, this.current = new Iy(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.commonObjs = n, this.objs = s, this.canvasFactory = r, this.filterFactory = l, this.groupStack = [], this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.tempSMask = null, this.smaskGroupCanvases = [], this.smaskPreparedEntry = null, this.smaskPreparedFor = null, this.smaskPreparedOffsetX = 0, this.smaskPreparedOffsetY = 0, this.smaskPreparedOOBAlpha = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = u || [], this.optionalContentConfig = c, this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = d, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = p, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map(), this.dependencyTracker = g ?? null, this.imagesTracker = m ?? null;
  }
  getObject(t, n, s = null) {
    return typeof n == "string" ? (this.dependencyTracker?.recordNamedDependency(t, n), n.startsWith("g_") ? this.commonObjs.get(n) : this.objs.get(n)) : s;
  }
  beginDrawing({
    transform: t,
    viewport: n,
    transparency: s = !1,
    background: r = null
  }) {
    const l = this.ctx.canvas.width, c = this.ctx.canvas.height, u = this.ctx.fillStyle;
    if (this.ctx.fillStyle = r || "#ffffff", this.ctx.fillRect(0, 0, l, c), this.ctx.fillStyle = u, s) {
      const d = this.transparentCanvasEntry = this.canvasFactory.create(l, c);
      this.compositeCtx = this.ctx, {
        canvas: this.transparentCanvas,
        context: this.ctx
      } = d, this.ctx.save(), this.ctx.transform(...Zt(this.compositeCtx));
    }
    this.ctx.save(), Ol(this.ctx), t && (this.ctx.transform(...t), this.outputScaleX = t[0], this.outputScaleY = t[3]), this.ctx.transform(...n.transform), this.viewportScale = n.scale, this.baseTransform = Zt(this.ctx);
  }
  executeOperatorList(t, n, s, r, l) {
    const c = t.argsArray, u = t.fnArray;
    let d = n || 0;
    const p = c.length;
    if (p === d)
      return d;
    const g = p - d > By && typeof s == "function", m = g ? Date.now() + GS : 0;
    let v = 0;
    const A = this.commonObjs, S = this.objs;
    let E, _;
    for (; ; ) {
      if (r !== void 0) {
        if (d === r.nextBreakPoint)
          return r.breakIt(d, s), d;
        if (r.shouldSkip(d)) {
          if (++d === p)
            return d;
          continue;
        }
      }
      if (!l || l(d))
        if (E = u[d], _ = c[d] ?? null, E !== Jn.dependency)
          _ === null ? this[E](d) : this[E](d, ..._);
        else
          for (const w of _) {
            this.dependencyTracker?.recordNamedData(w, d);
            const C = w.startsWith("g_") ? A : S;
            if (!C.has(w))
              return C.get(w, s), d;
          }
      if (d++, d === p)
        return d;
      if (g && ++v > By) {
        if (Date.now() > m)
          return s(), d;
        v = 0;
      }
    }
  }
  #h() {
    for (; this.stateStack.length || this.inSMaskMode; )
      this.restore();
    this.current.activeSMask = null, this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.canvasFactory.destroy(this.transparentCanvasEntry), this.transparentCanvas = null, this.transparentCanvasEntry = null);
  }
  endDrawing() {
    this.#h();
    for (const t of this.smaskGroupCanvases)
      this.canvasFactory.destroy(t);
    this.smaskGroupCanvases.length = 0, this._clearPreparedSMask(), this.tempSMask = null, this.smaskStack.length = 0;
    for (const t of this.#d)
      this.#A(t);
    this.#d.length = 0, this.#i = null, this.#s = null, this.#r = null, this.#a = null, this.#o = 1, this.#c = null, this.#n = 0, this.#e = 0, this.cachedPatterns.clear();
    for (const t of this._cachedBitmapsMap.values()) {
      for (const n of t.values())
        typeof HTMLCanvasElement < "u" && n instanceof HTMLCanvasElement && (n.width = n.height = 0);
      t.clear();
    }
    this._cachedBitmapsMap.clear(), this.#f();
  }
  #f() {
    if (this.pageColors) {
      const t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
      if (t !== "none") {
        const n = this.ctx.filter;
        this.ctx.filter = t, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = n;
      }
    }
  }
  _scaleImage(t, n) {
    const s = t.width ?? t.displayWidth, r = t.height ?? t.displayHeight, l = Math.max(Math.hypot(n[0], n[1]), 1), c = Math.max(Math.hypot(n[2], n[3]), 1), u = [];
    let d = l, p = c, g = s, m = r;
    for (; d > 2 && g > 1 || p > 2 && m > 1; ) {
      let w = g, C = m;
      d > 2 && g > 1 && (w = Math.ceil(g / 2), d /= g / w), p > 2 && m > 1 && (C = Math.ceil(m / 2), p /= m / C), u.push({
        newWidth: w,
        newHeight: C
      }), g = w, m = C;
    }
    if (u.length === 0)
      return {
        img: t,
        paintWidth: s,
        paintHeight: r,
        tmpCanvas: null
      };
    if (u.length === 1) {
      const {
        newWidth: w,
        newHeight: C
      } = u[0], M = this.canvasFactory.create(w, C);
      return M.context.drawImage(t, 0, 0, s, r, 0, 0, w, C), {
        img: M.canvas,
        paintWidth: w,
        paintHeight: C,
        tmpCanvas: M
      };
    }
    let v = this.canvasFactory.create(1, 1), A = this.canvasFactory.create(1, 1), S = s, E = r, _ = t;
    for (const {
      newWidth: w,
      newHeight: C
    } of u)
      this.canvasFactory.reset(A, w, C), A.context.drawImage(_, 0, 0, S, E, 0, 0, w, C), [v, A] = [A, v], _ = v.canvas, S = w, E = C;
    return this.canvasFactory.destroy(A), {
      img: v.canvas,
      paintWidth: S,
      paintHeight: E,
      tmpCanvas: v
    };
  }
  _createMaskCanvas(t, n) {
    const s = this.ctx, {
      width: r,
      height: l
    } = n, c = this.current.fillColor, u = this.current.patternFill, d = Zt(s);
    let p, g, m, v;
    if ((n.bitmap || n.data) && n.count > 1) {
      const W = n.bitmap || n.data.buffer;
      g = JSON.stringify(u ? d : [d.slice(0, 4), c]), p = this._cachedBitmapsMap.getOrInsertComputed(W, md);
      const tt = p.get(g);
      if (tt && !u) {
        const ct = Math.round(Math.min(d[0], d[2]) + d[4]), gt = Math.round(Math.min(d[1], d[3]) + d[5]);
        return this.dependencyTracker?.recordDependencies(t, Sn.transformAndFill), {
          canvas: tt,
          offsetX: ct,
          offsetY: gt
        };
      }
      m = tt;
    }
    m || (v = this.canvasFactory.create(r, l), zy(v.context, n));
    let A = K.transform(d, [1 / r, 0, 0, -1 / l, 0, 0]);
    A = K.transform(A, [1, 0, 0, 1, 0, -l]);
    const S = _s.slice();
    K.axialAlignedBoundingBox([0, 0, r, l], A, S);
    const [E, _, w, C] = S, M = Math.round(w - E) || 1, B = Math.round(C - _) || 1, N = this.canvasFactory.create(M, B), P = N.context, U = E, j = _;
    P.translate(-U, -j), P.transform(...A);
    let q = null;
    if (!m) {
      const W = this._scaleImage(v.canvas, Qn(P));
      m = W.img, q = W.tmpCanvas, m !== v.canvas && (this.canvasFactory.destroy(v), v = null), p && u && (p.set(g, m), q = null, v = null);
    }
    P.imageSmoothingEnabled = Uy(Zt(P), n.interpolate), Dl(P, m, 0, 0, m.width, m.height, 0, 0, r, l), q && this.canvasFactory.destroy(q), v && this.canvasFactory.destroy(v), P.globalCompositeOperation = "source-in";
    const $ = K.transform(Qn(P), [1, 0, 0, 1, -U, -j]);
    return P.fillStyle = u ? c.getPattern(s, this, $, Oe.FILL, t) : c, P.fillRect(0, 0, r, l), p && !u && p.set(g, N.canvas), this.dependencyTracker?.recordDependencies(t, Sn.transformAndFill), {
      canvas: N.canvas,
      canvasEntry: p && !u ? null : N,
      offsetX: Math.round(U),
      offsetY: Math.round(j)
    };
  }
  setLineWidth(t, n) {
    this.dependencyTracker?.recordSimpleData("lineWidth", t), n !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = n, this.ctx.lineWidth = n;
  }
  setLineCap(t, n) {
    this.dependencyTracker?.recordSimpleData("lineCap", t), this.ctx.lineCap = jS[n];
  }
  setLineJoin(t, n) {
    this.dependencyTracker?.recordSimpleData("lineJoin", t), this.ctx.lineJoin = VS[n];
  }
  setMiterLimit(t, n) {
    this.dependencyTracker?.recordSimpleData("miterLimit", t), this.ctx.miterLimit = n;
  }
  setDash(t, n, s) {
    this.dependencyTracker?.recordSimpleData("dash", t);
    const r = this.ctx;
    r.setLineDash !== void 0 && (r.setLineDash(n), r.lineDashOffset = s);
  }
  setRenderingIntent(t, n) {
  }
  setFlatness(t, n) {
  }
  setGState(t, n) {
    for (const [s, r] of n)
      switch (s) {
        case "LW":
          this.setLineWidth(t, r);
          break;
        case "LC":
          this.setLineCap(t, r);
          break;
        case "LJ":
          this.setLineJoin(t, r);
          break;
        case "ML":
          this.setMiterLimit(t, r);
          break;
        case "D":
          this.setDash(t, r[0], r[1]);
          break;
        case "RI":
          this.setRenderingIntent(t, r);
          break;
        case "FL":
          this.setFlatness(t, r);
          break;
        case "Font":
          this.setFont(t, r[0], r[1]);
          break;
        case "CA":
          this.dependencyTracker?.recordSimpleData("strokeAlpha", t), this.current.strokeAlpha = r;
          break;
        case "ca":
          this.dependencyTracker?.recordSimpleData("fillAlpha", t), this.ctx.globalAlpha = this.current.fillAlpha = r;
          break;
        case "BM":
          this.dependencyTracker?.recordSimpleData("globalCompositeOperation", t), this.ctx.globalCompositeOperation = r;
          break;
        case "SMask":
          this.dependencyTracker?.recordSimpleData("SMask", t), this.current.activeSMask = r ? this.tempSMask : null, this.current.activeSMask && (this.current.activeSMask.blendMode = this.ctx.globalCompositeOperation), this.tempSMask = null, this.checkSMaskState(t);
          break;
        case "TR":
          this.dependencyTracker?.recordSimpleData("filter", t), this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(r);
          break;
      }
  }
  get inSMaskMode() {
    return !!this.suspendedCtx;
  }
  _clearPreparedSMask() {
    this.smaskPreparedEntry && (this.canvasFactory.destroy(this.smaskPreparedEntry), this.smaskPreparedEntry = null), this.smaskPreparedFor = null, this.smaskPreparedOffsetX = 0, this.smaskPreparedOffsetY = 0, this.smaskPreparedOOBAlpha = null;
  }
  _ensurePreparedSMask(t) {
    t !== this.smaskPreparedFor && (this._clearPreparedSMask(), this._prepareSMaskCanvas(t));
  }
  checkSMaskState(t) {
    const n = this.inSMaskMode;
    this.current.activeSMask && !n ? this.beginSMaskMode(t) : !this.current.activeSMask && n ? this.endSMaskMode() : this.current.activeSMask && n && this._ensurePreparedSMask(this.current.activeSMask);
  }
  _prepareSMaskCanvas(t) {
    const {
      canvas: n,
      subtype: s,
      backdrop: r,
      transferMap: l
    } = t, c = s === "Luminosity" || s === "Alpha" && l;
    if (!c && !(s === "Luminosity" && r)) {
      this.smaskPreparedFor = t;
      return;
    }
    let u;
    if (s === "Luminosity" && r) {
      const [C, M, B] = Xr(r), N = Math.round(0.3 * C + 0.59 * M + 0.11 * B);
      u = l?.[N] ?? N;
    } else
      u = l?.[0] ?? 0;
    const d = 4, {
      width: p,
      height: g
    } = this.ctx.canvas, m = n.width * n.height, v = p * g < d * m, A = c ? {
      url: s === "Alpha" ? this.filterFactory.addAlphaFilter(l) : this.filterFactory.addLuminosityFilter(l),
      subtype: s,
      transferMap: l
    } : null, S = s === "Luminosity" ? r : null;
    let E, _, w;
    v ? (E = this._bakeSMaskCanvas(n, t.offsetX, t.offsetY, p, g, S, A), _ = 0, w = 0) : (E = this._bakeSMaskCanvas(n, 0, 0, n.width, n.height, S, A), _ = t.offsetX, w = t.offsetY), this.smaskPreparedEntry = E, this.smaskPreparedFor = t, this.smaskPreparedOffsetX = _, this.smaskPreparedOffsetY = w, this.smaskPreparedOOBAlpha = !v && u !== 0 ? u : null;
  }
  _bakeSMaskCanvas(t, n, s, r, l, c, u) {
    !c && !u && kt("_bakeSMaskCanvas with neither backdrop nor filter");
    const d = this.canvasFactory.create(r, l), p = d.context;
    if (p.drawImage(t, n, s), c && (p.globalCompositeOperation = "destination-atop", p.fillStyle = c, p.fillRect(0, 0, r, l)), !u)
      return d;
    const g = this.canvasFactory.create(r, l), m = g.context;
    m.filter = u.url;
    const v = Yt.isCanvasFilterSupported && m.filter !== "none" && m.filter !== "";
    if (m.drawImage(d.canvas, 0, 0), Yt.isCanvasFilterSupported && (m.filter = "none"), !v) {
      const A = m.getImageData(0, 0, r, l), {
        data: S
      } = A, {
        transferMap: E
      } = u;
      if (u.subtype === "Luminosity")
        for (let _ = 0, w = S.length; _ < w; _ += 4) {
          const C = 0.3 * S[_] + 0.59 * S[_ + 1] + 0.11 * S[_ + 2] + 0.5 | 0;
          S[_] = S[_ + 1] = S[_ + 2] = 0, S[_ + 3] = E?.[C] ?? C;
        }
      else
        for (let _ = 3, w = S.length; _ < w; _ += 4)
          S[_] = E[S[_]];
      m.putImageData(A, 0, 0);
    }
    return this.canvasFactory.destroy(d), g;
  }
  beginSMaskMode(t) {
    if (this.inSMaskMode)
      throw new Error("beginSMaskMode called while already in smask mode");
    const {
      width: n,
      height: s
    } = this.ctx.canvas, r = this.canvasFactory.create(n, s);
    this.smaskScratchCanvas = r, this.suspendedCtx = this.ctx;
    const l = this.ctx = r.context;
    l.setTransform(this.suspendedCtx.getTransform()), Es(this.suspendedCtx, l), Py(l, this.suspendedCtx), this._ensurePreparedSMask(this.current.activeSMask), this.setGState(t, [["BM", "source-over"]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode)
      throw new Error("endSMaskMode called while not in smask mode");
    this.ctx._removeMirroring(), Es(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null, this.canvasFactory.destroy(this.smaskScratchCanvas), this.smaskScratchCanvas = null, this._clearPreparedSMask();
  }
  #g(t, n = null, s = 1) {
    const {
      width: r,
      height: l
    } = t, c = n ?? this.canvasFactory.create(r, l), u = c.context;
    s = Math.round(s * 255) / 255;
    const d = s < 1;
    d && this.#l === void 0 && (this.#l = Yt.isCanvasFilterSupported ? /* @__PURE__ */ new Map() : "none");
    let p = "none";
    if (d && this.#l instanceof Map && (p = this.#l.getOrInsertComputed(s, () => this.filterFactory.addKnockoutFilter(s))), !d || p !== "none")
      return n && (u.save(), u.setTransform(1, 0, 0, 1, 0, 0), u.clearRect(0, 0, r, l), u.restore()), u.filter = p, u.drawImage(t, 0, 0), u.filter = "none", c;
    const g = t.getContext("2d", {
      willReadFrequently: !0
    }).getImageData(0, 0, r, l), m = u.createImageData(r, l), v = g.data, A = m.data, S = s > 0 ? 1 / s : 1e6;
    for (let E = 3, _ = v.length; E < _; E += 4)
      A[E] = Math.min(Math.round(v[E] * S), 255);
    return u.putImageData(m, 0, 0), c;
  }
  #m(t, n, s, r) {
    let l = t?.[n] ?? null;
    if (l && (l.canvas.width !== s || l.canvas.height !== r) && (this.canvasFactory.destroy(l), l = null), !l)
      return l = this.canvasFactory.create(s, r), t && (t[n] = l), l;
    const c = l.context;
    return c.save(), c.setTransform(1, 0, 0, 1, 0, 0), c.clearRect(0, 0, s, r), c.restore(), l;
  }
  #u(t, n, s = {}) {
    const {
      backdropCanvas: r = null,
      destTransform: l = [1, 0, 0, 1, 0, 0],
      backdropOffset: c = [0, 0],
      reuseMaskEntry: u = null,
      poolMeta: d = null,
      sourceAlpha: p = 1,
      sourceFilter: g = "none",
      knockoutAlpha: m = 1
    } = s, {
      width: v,
      height: A
    } = n, S = this.#g(n, u, m), E = t.globalCompositeOperation;
    if (t.save(), t.setTransform(...l), t.globalAlpha = 1, Yt.isCanvasFilterSupported && (t.filter = "none"), t.globalCompositeOperation = "destination-out", t.drawImage(S.canvas, 0, 0), r) {
      const [_, w] = c, C = this.#m(d, "knockoutBackdropEntry", v, A), M = C.context;
      M.drawImage(r, _, w, v, A, 0, 0, v, A), M.globalCompositeOperation = "destination-in", M.drawImage(S.canvas, 0, 0), M.globalCompositeOperation = "source-over", t.globalCompositeOperation = "destination-over", t.drawImage(C.canvas, 0, 0), d || this.canvasFactory.destroy(C);
    }
    t.globalCompositeOperation = E, t.globalAlpha = p, Yt.isCanvasFilterSupported && (t.filter = g ?? "none"), t.drawImage(n, 0, 0), t.restore(), u || this.canvasFactory.destroy(S);
  }
  #p(t = 1) {
    if (this.#e === 0 || this.#n > 0 || !this.contentVisible)
      return !1;
    this.#n++, this.#o = t;
    const n = this.#d.at(-1), {
      canvas: s
    } = this.ctx, r = this.#m(n, "knockoutTempEntry", s.width, s.height);
    this.#i = r;
    const l = r.context;
    return l.save(), l.setTransform(this.ctx.getTransform()), Es(this.ctx, l), this.#a = l.globalCompositeOperation, l.globalCompositeOperation = "source-over", Py(l, this.ctx), this.#c = n, this.#s = this.ctx, this.#r = this.suspendedCtx, this.ctx = l, this.inSMaskMode && (this.suspendedCtx = l), !0;
  }
  #y(t) {
    if (!t)
      return;
    const n = this.#i, s = this.#s, r = this.#r, l = n.context;
    this.#i = null, this.#s = null, this.#r = null, this.inSMaskMode && this.suspendedCtx === l && this.ctx !== l && this.endSMaskMode(), this.inSMaskMode && (this.suspendedCtx = r), this.ctx._removeMirroring(), this.ctx.globalCompositeOperation = this.#a, this.#a = null, Es(this.ctx, s), this.ctx = s;
    const c = this.#c;
    this.#c = null;
    const u = this.#o;
    this.#o = 1;
    try {
      this.#u(r ?? s, n.canvas, {
        backdropCanvas: c?.backdropCtx?.canvas ?? null,
        backdropOffset: c?.backdropCtx ? [c.offsetX, c.offsetY] : [0, 0],
        reuseMaskEntry: c?.knockoutMaskEntry ?? null,
        poolMeta: c,
        knockoutAlpha: u
      });
    } finally {
      l.restore(), this.#n--, c || this.canvasFactory.destroy(n);
    }
  }
  compose(t) {
    if (!this.current.activeSMask)
      return;
    t = t ? [Math.floor(t[0]), Math.floor(t[1]), Math.ceil(t[2]), Math.ceil(t[3])] : [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
    const n = this.current.activeSMask, s = this.suspendedCtx, r = this.#n > 0 && s === this.ctx;
    this.composeSMask(r ? null : s, n, this.ctx, t), !r && (this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore());
  }
  composeSMask(t, n, s, r) {
    const l = r[0], c = r[1], u = r[2] - l, d = r[3] - c;
    if (u === 0 || d === 0)
      return;
    const p = this.smaskPreparedEntry;
    if (p) {
      let g = l, m = c, v = u, A = d;
      const S = this.smaskPreparedOOBAlpha, E = S !== null;
      if (E) {
        g = Math.max(l, n.offsetX), m = Math.max(c, n.offsetY);
        const _ = Math.min(l + u, n.offsetX + n.canvas.width), w = Math.min(c + d, n.offsetY + n.canvas.height);
        v = _ - g, A = w - m;
      }
      if (v > 0 && A > 0) {
        const _ = g - this.smaskPreparedOffsetX, w = m - this.smaskPreparedOffsetY;
        s.save(), s.globalAlpha = 1, s.setTransform(1, 0, 0, 1, 0, 0);
        const C = new Path2D();
        C.rect(g, m, v, A), s.clip(C), s.globalCompositeOperation = "destination-in", s.drawImage(p.canvas, _, w, v, A, g, m, v, A), s.restore();
      }
      E && S < 255 && this._applySMaskOOBAlpha(s, l, c, u, d, g, m, g + v, m + A, S);
    } else
      this.genericComposeSMask(n, s, u, d, l, c);
    t && (t.save(), t.globalAlpha = 1, t.globalCompositeOperation = n.blendMode || "source-over", t.setTransform(1, 0, 0, 1, 0, 0), t.drawImage(s.canvas, l, c, u, d, l, c, u, d), t.restore());
  }
  _applySMaskOOBAlpha(t, n, s, r, l, c, u, d, p, g) {
    const m = c < d && u < p;
    if (m && c === n && u === s && d === n + r && p === s + l)
      return;
    const v = new Path2D();
    v.rect(n, s, r, l), m && v.rect(c, u, d - c, p - u), t.save(), t.globalAlpha = g / 255, t.setTransform(1, 0, 0, 1, 0, 0), t.clip(v, "evenodd"), t.globalCompositeOperation = "destination-in", t.fillStyle = "#000000", t.fillRect(n, s, r, l), t.restore();
  }
  genericComposeSMask(t, n, s, r, l, c) {
    const {
      context: u,
      offsetX: d,
      offsetY: p
    } = t;
    n.save(), n.globalAlpha = 1, n.setTransform(1, 0, 0, 1, 0, 0);
    const g = new Path2D();
    g.rect(l, c, s, r), n.clip(g), n.globalCompositeOperation = "destination-in", n.drawImage(u.canvas, l - d, c - p, s, r, l, c, s, r), n.restore();
  }
  save(t) {
    this.inSMaskMode && Es(this.ctx, this.suspendedCtx), this.ctx.save();
    const n = this.current;
    this.stateStack.push(n), this.current = n.clone(), this.dependencyTracker?.save(t);
  }
  restore(t) {
    if (this.dependencyTracker?.restore(t), this.stateStack.length === 0) {
      this.inSMaskMode && this.endSMaskMode();
      return;
    }
    this.current = this.stateStack.pop(), this.ctx.restore(), this.inSMaskMode && (Es(this.suspendedCtx, this.ctx), this.ctx.setTransform(this.suspendedCtx.getTransform())), this.checkSMaskState(t), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }
  transform(t, n, s, r, l, c, u) {
    this.dependencyTracker?.recordIncrementalData("transform", t), this.ctx.transform(n, s, r, l, c, u), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }
  constructPath(t, n, s, r) {
    let [l] = s;
    if (!r) {
      l ||= s[0] = new Path2D(), n !== Jn.stroke && n !== Jn.closeStroke && (this.current.tilingPatternDims = null), this[n](t, l);
      return;
    }
    if (this.dependencyTracker !== null) {
      const u = n === Jn.stroke ? this.current.lineWidth / 2 : 0;
      this.dependencyTracker.resetBBox(t).recordBBox(t, this.ctx, r[0] - u, r[2] + u, r[1] - u, r[3] + u).recordDependencies(t, ["transform"]);
    }
    l instanceof Path2D || (l = s[0] = t0(l)), K.axialAlignedBoundingBox(r, Zt(this.ctx), this.current.minMax);
    const c = this.current.tilingPatternDims;
    if (c && n !== Jn.stroke && n !== Jn.closeStroke && this.current.fillColor instanceof zr) {
      const u = K.intersect(this.current.clipBox, this.current.minMax);
      u ? this.current.fillColor.updatePatternDims(u, c) : this.current.tilingPatternDims = null;
    }
    this[n](t, l), this._pathStartIdx = t;
  }
  closePath(t) {
    this.ctx.closePath();
  }
  stroke(t, n, s = !0) {
    const r = s && this.#p(this.current.strokeAlpha), l = this.ctx, c = this.current.strokeColor;
    if (l.globalAlpha = this.current.strokeAlpha, this.contentVisible)
      if (typeof c == "object" && c?.getPattern) {
        const u = c.isModifyingCurrentTransform() ? l.getTransform() : null;
        if (l.save(), l.strokeStyle = c.getPattern(l, this, Qn(l), Oe.STROKE, t), u) {
          const d = new Path2D();
          d.addPath(n, l.getTransform().invertSelf().multiplySelf(u)), n = d;
        }
        this.rescaleAndStroke(n, !1), l.restore();
      } else
        this.rescaleAndStroke(n, !0);
    this.dependencyTracker?.recordDependencies(t, Sn.stroke), s && this.consumePath(t, n, this.current.getClippedPathBoundingBox(Oe.STROKE, Zt(this.ctx))), l.globalAlpha = this.current.fillAlpha, this.#y(r);
  }
  closeStroke(t, n) {
    this.stroke(t, n);
  }
  fill(t, n, s = !0) {
    const r = s && this.#p(this.current.fillAlpha), l = this.ctx, c = this.current.fillColor, u = this.current.patternFill;
    let d = !1;
    const p = this.current.getClippedPathBoundingBox();
    if (this.dependencyTracker?.recordDependencies(t, Sn.fill), u) {
      const g = this.current.tilingPatternDims, m = g && c.canSkipPatternCanvas(g);
      if (m) {
        c.drawPattern(this, n, this.pendingEOFill, m, t), this.pendingEOFill = !1, s && this.consumePath(t, n, p), this.current.tilingPatternDims = null, this.#y(r);
        return;
      }
      const v = c.isModifyingCurrentTransform() ? l.getTransform() : null;
      if (this.dependencyTracker?.save(t), l.save(), l.fillStyle = c.getPattern(l, this, Qn(l), Oe.FILL, t), v) {
        const A = new Path2D();
        A.addPath(n, l.getTransform().invertSelf().multiplySelf(v)), n = A;
      }
      d = !0;
    }
    this.contentVisible && p !== null && (this.pendingEOFill ? (l.fill(n, "evenodd"), this.pendingEOFill = !1) : l.fill(n)), d && (l.restore(), this.dependencyTracker?.restore(t)), s && this.consumePath(t, n, p), this.#y(r);
  }
  eoFill(t, n) {
    this.pendingEOFill = !0, this.fill(t, n);
  }
  fillStroke(t, n) {
    const s = this.#p(Math.min(this.current.fillAlpha, this.current.strokeAlpha));
    this.fill(t, n, !1), this.stroke(t, n, !1), this.consumePath(t, n), this.#y(s);
  }
  eoFillStroke(t, n) {
    this.pendingEOFill = !0, this.fillStroke(t, n);
  }
  closeFillStroke(t, n) {
    this.fillStroke(t, n);
  }
  closeEOFillStroke(t, n) {
    this.pendingEOFill = !0, this.fillStroke(t, n);
  }
  endPath(t, n) {
    this.consumePath(t, n);
  }
  rawFillPath(t, n) {
    const s = this.#p(this.current.fillAlpha);
    this.ctx.fill(n), this.dependencyTracker?.recordDependencies(t, Sn.rawFillPath).recordOperation(t), this.#y(s);
  }
  clip(t) {
    this.dependencyTracker?.recordFutureForcedDependency("clipMode", t), this.pendingClip = YS;
  }
  eoClip(t) {
    this.dependencyTracker?.recordFutureForcedDependency("clipMode", t), this.pendingClip = Hy;
  }
  beginText(t) {
    this.current.textMatrix = null, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0, this.dependencyTracker?.recordOpenMarker(t).resetIncrementalData("sameLineText").resetIncrementalData("moveText", t);
  }
  endText(t) {
    const n = this.pendingTextPaths, s = this.ctx;
    if (this.dependencyTracker) {
      const {
        dependencyTracker: r
      } = this;
      n !== void 0 && r.recordFutureForcedDependency("textClip", r.getOpenMarker()).recordFutureForcedDependency("textClip", t), r.recordCloseMarker(t);
    }
    if (n !== void 0) {
      const r = new Path2D(), l = s.getTransform().invertSelf();
      for (const {
        transform: c,
        x: u,
        y: d,
        fontSize: p,
        path: g
      } of n)
        g && r.addPath(g, new DOMMatrix(c).preMultiplySelf(l).translate(u, d).scale(p, -p));
      s.clip(r);
    }
    delete this.pendingTextPaths;
  }
  setCharSpacing(t, n) {
    this.dependencyTracker?.recordSimpleData("charSpacing", t), this.current.charSpacing = n;
  }
  setWordSpacing(t, n) {
    this.dependencyTracker?.recordSimpleData("wordSpacing", t), this.current.wordSpacing = n;
  }
  setHScale(t, n) {
    this.dependencyTracker?.recordSimpleData("hScale", t), this.current.textHScale = n / 100;
  }
  setLeading(t, n) {
    this.dependencyTracker?.recordSimpleData("leading", t), this.current.leading = -n;
  }
  setFont(t, n, s) {
    this.dependencyTracker?.recordSimpleData("font", t).recordSimpleDataFromNamed("fontObj", n, t);
    const r = this.commonObjs.get(n), l = this.current;
    if (!r)
      throw new Error(`Can't find font for ${n}`);
    if (l.fontMatrix = r.fontMatrix || Jh, (l.fontMatrix[0] === 0 || l.fontMatrix[3] === 0) && yt("Invalid font matrix for font " + n), s < 0 ? (s = -s, l.fontDirection = -1) : l.fontDirection = 1, this.current.font = r, this.current.fontSize = s, r.isType3Font)
      return;
    const c = r.loadedName || "sans-serif", u = r.systemFontInfo?.css || `"${c}", ${r.fallbackName}`;
    let d = "normal";
    r.black ? d = "900" : r.bold && (d = "bold");
    const p = r.italic ? "italic" : "normal", g = $t(s, US, HS);
    this.current.fontSizeScale = s / g, this.ctx.font = `${p} ${d} ${g}px ${u}`;
  }
  setTextRenderingMode(t, n) {
    this.dependencyTracker?.recordSimpleData("textRenderingMode", t), this.current.textRenderingMode = n;
  }
  setTextRise(t, n) {
    this.dependencyTracker?.recordSimpleData("textRise", t), this.current.textRise = n;
  }
  moveText(t, n, s) {
    this.dependencyTracker?.resetIncrementalData("sameLineText").recordIncrementalData("moveText", t), this.current.x = this.current.lineX += n, this.current.y = this.current.lineY += s;
  }
  setLeadingMoveText(t, n, s) {
    this.setLeading(t, -s), this.moveText(t, n, s);
  }
  setTextMatrix(t, n) {
    this.dependencyTracker?.resetIncrementalData("sameLineText").recordSimpleData("textMatrix", t);
    const {
      current: s
    } = this;
    s.textMatrix = n, s.textMatrixScale = Math.hypot(n[0], n[1]), s.x = s.lineX = 0, s.y = s.lineY = 0;
  }
  nextLine(t) {
    this.moveText(t, 0, this.current.leading), this.dependencyTracker?.recordIncrementalData("moveText", this.dependencyTracker.getSimpleIndex("leading") ?? t);
  }
  #v(t, n, s) {
    const r = new Path2D();
    return r.addPath(t, new DOMMatrix(s).invertSelf().multiplySelf(n)), r;
  }
  paintChar(t, n, s, r, l, c) {
    const u = this.ctx, d = this.current, p = d.font, g = d.textRenderingMode, m = d.fontSize / d.fontSizeScale, v = g & pe.FILL_STROKE_MASK, A = !!(g & pe.ADD_TO_PATH_FLAG), S = d.patternFill && !p.missingFile, E = d.patternStroke && !p.missingFile;
    let _;
    if ((p.disableFontFace || A || S || E) && !p.missingFile && (_ = p.getPathGenerator(this.commonObjs, n)), _ && (p.disableFontFace || S || E)) {
      u.save(), u.translate(s, r), u.scale(m, -m), this.dependencyTracker?.recordCharacterBBox(t, u, p);
      let w;
      if (v === pe.FILL || v === pe.FILL_STROKE)
        if (l) {
          w = u.getTransform(), u.setTransform(...l);
          const C = this.#v(_, w, l);
          u.fill(C);
        } else
          u.fill(_);
      if (v === pe.STROKE || v === pe.FILL_STROKE)
        if (c) {
          w ||= u.getTransform(), u.setTransform(...c);
          const {
            a: C,
            b: M,
            c: B,
            d: N
          } = w, P = K.inverseTransform(c), U = K.transform([C, M, B, N, 0, 0], P);
          K.singularValueDecompose2dScale(U, cn), u.lineWidth *= Math.max(cn[0], cn[1]) / m, u.stroke(this.#v(_, w, c));
        } else
          u.lineWidth /= m, u.stroke(_);
      u.restore();
    } else
      (v === pe.FILL || v === pe.FILL_STROKE) && (u.fillText(n, s, r), this.dependencyTracker?.recordCharacterBBox(t, u, p, m, s, r, () => u.measureText(n))), (v === pe.STROKE || v === pe.FILL_STROKE) && (this.dependencyTracker && this.dependencyTracker?.recordCharacterBBox(t, u, p, m, s, r, () => u.measureText(n)).recordDependencies(t, Sn.stroke), u.strokeText(n, s, r));
    A && ((this.pendingTextPaths ||= []).push({
      transform: Zt(u),
      x: s,
      y: r,
      fontSize: m,
      path: _
    }), this.dependencyTracker?.recordCharacterBBox(t, u, p, m, s, r));
  }
  get isFontSubpixelAAEnabled() {
    const t = this.canvasFactory.create(10, 10), n = t.context;
    n.scale(1.5, 1), n.fillText("I", 0, 10);
    const s = n.getImageData(0, 0, 10, 10).data;
    this.canvasFactory.destroy(t);
    let r = !1;
    for (let l = 3; l < s.length; l += 4)
      if (s[l] > 0 && s[l] < 255) {
        r = !0;
        break;
      }
    return lt(this, "isFontSubpixelAAEnabled", r);
  }
  showText(t, n) {
    this.dependencyTracker && (this.dependencyTracker.recordDependencies(t, Sn.showText).resetBBox(t), this.current.textRenderingMode & pe.ADD_TO_PATH_FLAG && this.dependencyTracker.recordFutureForcedDependency("textClip", t).inheritPendingDependenciesAsFutureForcedDependencies());
    const s = this.current, r = s.font;
    if (r.isType3Font) {
      const tt = this.#p(s.fillAlpha);
      this.showType3Text(t, n), this.dependencyTracker?.recordShowTextOperation(t), this.#y(tt);
      return;
    }
    const l = s.fontSize;
    if (l === 0) {
      this.dependencyTracker?.recordOperation(t);
      return;
    }
    const c = this.#p(s.fillAlpha), u = this.ctx, d = s.fontSizeScale, p = s.charSpacing, g = s.wordSpacing, m = s.fontDirection, v = s.textHScale * m, A = n.length, S = r.vertical, E = S ? 1 : -1, _ = r.defaultVMetrics, w = l * s.fontMatrix[0], C = s.textRenderingMode === pe.FILL && !r.disableFontFace && !s.patternFill;
    u.save(), s.textMatrix && u.transform(...s.textMatrix), u.translate(s.x, s.y + s.textRise), m > 0 ? u.scale(v, -1) : u.scale(v, 1);
    let M, B;
    const N = s.textRenderingMode & pe.FILL_STROKE_MASK, P = N === pe.FILL || N === pe.FILL_STROKE, U = N === pe.STROKE || N === pe.FILL_STROKE;
    let j = s.lineWidth;
    const q = s.textMatrixScale;
    if (q === 0 || j === 0 ? U && (j = this.getSinglePixelWidth()) : j /= q, d !== 1 && (u.scale(d, d), j /= d), u.lineWidth = j, P && s.patternFill) {
      u.save();
      const tt = s.fillColor.getPattern(u, this, Qn(u), Oe.FILL, t);
      M = Zt(u), u.restore(), u.fillStyle = tt;
    }
    if (U && s.patternStroke) {
      u.save();
      const tt = s.strokeColor.getPattern(u, this, Qn(u), Oe.STROKE, t);
      B = Zt(u), u.restore(), u.strokeStyle = tt;
    }
    if (r.isInvalidPDFjsFont) {
      const tt = [];
      let ct = 0;
      for (const vt of n)
        tt.push(vt.unicode), ct += vt.width;
      const gt = tt.join("");
      if (u.fillText(gt, 0, 0), this.dependencyTracker !== null) {
        const vt = u.measureText(gt);
        this.dependencyTracker.recordBBox(t, this.ctx, -vt.actualBoundingBoxLeft, vt.actualBoundingBoxRight, -vt.actualBoundingBoxAscent, vt.actualBoundingBoxDescent).recordShowTextOperation(t);
      }
      s.x += ct * w * v, u.restore(), this.compose(), this.#y(c);
      return;
    }
    let $ = 0, W;
    for (W = 0; W < A; ++W) {
      const tt = n[W];
      if (typeof tt == "number") {
        $ += E * tt * l / 1e3;
        continue;
      }
      let ct = !1;
      const gt = (tt.isSpace ? g : 0) + p, vt = tt.fontChar, H = tt.accent;
      let X, nt, mt = tt.width;
      if (S) {
        const Dt = tt.vmetric || _, Bt = -(tt.vmetric ? Dt[1] : mt * 0.5) * w, O = Dt[2] * w;
        mt = Dt ? -Dt[0] : mt, X = Bt / d, nt = ($ + O) / d;
      } else
        X = $ / d, nt = 0;
      let St;
      if (r.remeasure && mt > 0) {
        St = u.measureText(vt);
        const Dt = St.width * 1e3 / l * d;
        if (mt < Dt && this.isFontSubpixelAAEnabled) {
          const Bt = mt / Dt;
          ct = !0, u.save(), u.scale(Bt, 1), X /= Bt;
        } else mt !== Dt && (X += (mt - Dt) / 2e3 * l / d);
      }
      if (this.contentVisible && (tt.isInFont || r.missingFile)) {
        if (C && !H)
          u.fillText(vt, X, nt), this.dependencyTracker?.recordCharacterBBox(t, u, St ? {
            bbox: null
          } : r, l / d, X, nt, () => St ?? u.measureText(vt));
        else if (this.paintChar(t, vt, X, nt, M, B), H) {
          const Dt = X + l * H.offset.x / d, Bt = nt - l * H.offset.y / d;
          this.paintChar(t, H.fontChar, Dt, Bt, M, B);
        }
      }
      const me = S ? mt * w - gt * m : mt * w + gt * m;
      $ += me, ct && u.restore();
    }
    S ? s.y -= $ : s.x += $ * v, u.restore(), this.compose(), this.dependencyTracker?.recordShowTextOperation(t), this.#y(c);
  }
  showType3Text(t, n) {
    const s = this.ctx, r = this.current, l = r.font, c = r.fontSize, u = r.fontDirection, d = l.vertical ? 1 : -1, p = r.charSpacing, g = r.wordSpacing, m = r.textHScale * u, v = r.fontMatrix || Jh, A = n.length, S = r.textRenderingMode === pe.INVISIBLE;
    let E, _, w, C;
    if (S || c === 0)
      return;
    this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, s.save(), r.textMatrix && s.transform(...r.textMatrix), s.translate(r.x, r.y + r.textRise), s.scale(m, u);
    const M = this.dependencyTracker;
    for (this.dependencyTracker = M ? new Gr(M, t) : null, E = 0; E < A; ++E) {
      if (_ = n[E], typeof _ == "number") {
        C = d * _ * c / 1e3, this.ctx.translate(C, 0), r.x += C * m;
        continue;
      }
      const B = (_.isSpace ? g : 0) + p, N = l.charProcOperatorList.get(_.operatorListId);
      N ? this.contentVisible && (this.save(), N.fnArray[0] === Jn.setCharWidth && (r.fillAlpha = r.strokeAlpha = 1, s.globalAlpha = 1), s.scale(c, c), s.transform(...v), this.executeOperatorList(N), this.restore()) : yt(`Type3 character "${_.operatorListId}" is not available.`);
      const P = [_.width, 0];
      K.applyTransform(P, v), w = P[0] * c + B, s.translate(w, 0), r.x += w * m;
    }
    s.restore(), M && (this.dependencyTracker = M);
  }
  setCharWidth(t, n, s) {
  }
  setCharWidthAndBounds(t, n, s, r, l, c, u) {
    const d = new Path2D();
    d.rect(r, l, c - r, u - l), this.ctx.clip(d), this.dependencyTracker?.recordBBox(t, this.ctx, r, c, l, u).recordClipBox(t, this.ctx, r, c, l, u), this.endPath(t);
  }
  getColorN_Pattern(t, n) {
    let s;
    if (n[0] === "TilingPattern") {
      const r = this.baseTransform || Zt(this.ctx), l = {
        createCanvasGraphics: (c, u) => new Ds(c, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
          optionalContentConfig: this.optionalContentConfig,
          markedContentStack: this.markedContentStack
        }, void 0, void 0, this.dependencyTracker ? new Gr(this.dependencyTracker, u, !0) : null)
      };
      s = new zr(n, this.ctx, l, r);
    } else
      s = this._getPattern(t, n[1], n[2]);
    return s;
  }
  setStrokeColorN(t, ...n) {
    this.dependencyTracker?.recordSimpleData("strokeColor", t), this.current.strokeColor = this.getColorN_Pattern(t, n), this.current.patternStroke = !0;
  }
  setFillColorN(t, ...n) {
    this.dependencyTracker?.recordSimpleData("fillColor", t);
    const s = this.current.fillColor = this.getColorN_Pattern(t, n);
    this.current.patternFill = !0, this.current.tilingPatternDims = s instanceof zr ? [0, 0, 0, 0] : null;
  }
  setStrokeRGBColor(t, n) {
    this.dependencyTracker?.recordSimpleData("strokeColor", t), this.ctx.strokeStyle = this.current.strokeColor = n, this.current.patternStroke = !1;
  }
  setStrokeTransparent(t) {
    this.dependencyTracker?.recordSimpleData("strokeColor", t), this.ctx.strokeStyle = this.current.strokeColor = "transparent", this.current.patternStroke = !1;
  }
  setFillRGBColor(t, n) {
    this.dependencyTracker?.recordSimpleData("fillColor", t), this.ctx.fillStyle = this.current.fillColor = n, this.current.patternFill = !1, this.current.tilingPatternDims = null;
  }
  setFillTransparent(t) {
    this.dependencyTracker?.recordSimpleData("fillColor", t), this.ctx.fillStyle = this.current.fillColor = "transparent", this.current.patternFill = !1, this.current.tilingPatternDims = null;
  }
  _getPattern(t, n, s = null) {
    const r = this.cachedPatterns.getOrInsertComputed(n, () => zS(this.getObject(t, n)));
    return s && (r.matrix = s), r;
  }
  shadingFill(t, n) {
    if (!this.contentVisible)
      return;
    const s = this.#p(this.current.fillAlpha), r = this.ctx;
    this.save(t);
    const l = this._getPattern(t, n);
    r.fillStyle = l.getPattern(r, this, Qn(r), Oe.SHADING, t);
    const c = Qn(r);
    if (c) {
      const {
        width: u,
        height: d
      } = r.canvas, p = _s.slice();
      K.axialAlignedBoundingBox([0, 0, u, d], c, p);
      const [g, m, v, A] = p;
      this.ctx.fillRect(g, m, v - g, A - m);
    } else
      this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    this.dependencyTracker?.resetBBox(t).recordFullPageBBox(t).recordDependencies(t, Sn.transform).recordDependencies(t, Sn.fill).recordOperation(t), this.compose(this.current.getClippedPathBoundingBox()), this.restore(t), this.#y(s);
  }
  beginInlineImage() {
    kt("Should not call beginInlineImage");
  }
  beginImageData() {
    kt("Should not call beginImageData");
  }
  paintFormXObjectBegin(t, n, s) {
    if (this.contentVisible && (this.save(t), this.baseTransformStack.push(this.baseTransform), n && this.transform(t, ...n), this.baseTransform = Zt(this.ctx), s)) {
      K.axialAlignedBoundingBox(s, this.baseTransform, this.current.minMax);
      const [r, l, c, u] = s, d = new Path2D();
      d.rect(r, l, c - r, u - l), this.ctx.clip(d), this.dependencyTracker?.recordClipBox(t, this.ctx, r, c, l, u), this.endPath(t);
    }
  }
  paintFormXObjectEnd(t) {
    this.contentVisible && (this.restore(t), this.baseTransform = this.baseTransformStack.pop());
  }
  beginGroup(t, n) {
    if (!this.contentVisible)
      return;
    this.save(t);
    const {
      inSMaskMode: s
    } = this;
    s && (this.endSMaskMode(), this.current.activeSMask = null);
    const r = this.ctx;
    if ((!n.needsIsolation || !n.isolated && !n.hasSoftMask) && !n.knockout && !n.isGray && this.#e === 0 && r.globalAlpha === 1 && r.globalCompositeOperation === "source-over" && !s) {
      if (n.bbox) {
        let B = new Path2D();
        const [N, P, U, j] = n.bbox;
        if (B.rect(N, P, U - N, j - P), n.matrix) {
          const q = new Path2D();
          q.addPath(B, new DOMMatrix(n.matrix)), B = q;
        }
        r.clip(B);
      }
      this.groupStack.push(null), this.#d.push(null), this.groupLevel++;
      return;
    }
    !n.isolated && !n.knockout && this.#e === 0 && Kl("TODO: Fully support non-isolated non-knockout groups.");
    const l = Zt(r);
    n.matrix && r.transform(...n.matrix);
    const c = [0, 0, r.canvas.width, r.canvas.height];
    let u;
    n.bbox ? (u = _s.slice(), K.axialAlignedBoundingBox(n.bbox, Zt(r), u), u = K.intersect(u, c) || [0, 0, 0, 0]) : u = c;
    const d = Math.floor(u[0]), p = Math.floor(u[1]), g = Math.max(Math.ceil(u[2]) - d, 1), m = Math.max(Math.ceil(u[3]) - p, 1);
    this.current.startNewPathAndClipBox([0, 0, g, m]);
    const v = this.canvasFactory.create(g, m);
    n.smask && this.smaskGroupCanvases.push(v);
    const A = v.context, S = n.knockout && !n.isolated ? r : null, E = !n.isolated && !n.knockout && !n.smask && n.needsIsolation && this.#e > 0, _ = n.knockout ? this.canvasFactory.create(g, m) : null, w = this.#e;
    n.knockout ? this.#e++ : this.#e = 0, A.translate(-d, -p), A.transform(...l);
    const C = !n.isolated && !n.smask && n.needsIsolation, M = C && !s && w === 0 && !n.knockout && !n.isGray && n.hasSoftMask && r.globalAlpha === 1 && r.globalCompositeOperation === "source-over" && this.current.transferMaps === "none";
    if (C && (s || M) && (A.save(), A.setTransform(1, 0, 0, 1, 0, 0), A.drawImage(r.canvas, -d, -p), A.restore()), n.bbox) {
      let B = new Path2D();
      const [N, P, U, j] = n.bbox;
      if (B.rect(N, P, U - N, j - P), n.matrix) {
        const q = new Path2D();
        q.addPath(B, new DOMMatrix(n.matrix)), B = q;
      }
      A.clip(B);
    }
    n.smask && this.smaskStack.push({
      canvas: v.canvas,
      context: A,
      offsetX: d,
      offsetY: p,
      subtype: n.smask.subtype,
      backdrop: n.smask.backdrop,
      transferMap: n.smask.transferMap || null
    }), (!n.smask || this.dependencyTracker) && (r.setTransform(1, 0, 0, 1, 0, 0), r.translate(d, p), r.save()), Es(r, A), this.ctx = A, this.dependencyTracker?.inheritSimpleDataAsFutureForcedDependencies(["fillAlpha", "strokeAlpha", "globalCompositeOperation"]).pushBaseTransform(r), this.setGState(t, [["BM", "source-over"], ["ca", 1], ["CA", 1], ["TR", null]]), this.groupStack.push(r), this.#d.push({
      backdropCtx: S,
      savedKnockoutLevel: w,
      offsetX: d,
      offsetY: p,
      hasInnerBackdrop: E,
      replaceBackdrop: M,
      knockoutMaskEntry: _,
      knockoutTempEntry: null,
      knockoutBackdropEntry: null
    }), this.groupLevel++;
  }
  endGroup(t, n) {
    if (!this.contentVisible)
      return;
    this.groupLevel--;
    const s = this.ctx, r = this.groupStack.pop(), l = this.#d.pop();
    if (l && (this.#e = l.savedKnockoutLevel), r === null) {
      this.restore(t);
      return;
    }
    if (n.isGray && this.#b(s), this.ctx = r, this.ctx.imageSmoothingEnabled = !1, this.dependencyTracker?.popBaseTransform(), n.smask)
      this.tempSMask = this.smaskStack.pop(), this.restore(t), this.dependencyTracker && (this.ctx.restore(), this.inSMaskMode && this.ctx.setTransform(this.suspendedCtx.getTransform())), this.#A(l);
    else {
      this.ctx.restore();
      const c = Zt(this.ctx);
      this.restore(t), this.ctx.save(), this.ctx.setTransform(...c);
      const u = _s.slice();
      K.axialAlignedBoundingBox([0, 0, s.canvas.width, s.canvas.height], c, u);
      const d = this.#d.at(-1);
      if (this.#e > 0)
        if (l.hasInnerBackdrop) {
          const {
            width: p,
            height: g
          } = s.canvas, m = this.canvasFactory.create(p, g), v = m.context;
          v.drawImage(r.canvas, l.offsetX, l.offsetY, p, g, 0, 0, p, g), v.globalCompositeOperation = "source-over", v.drawImage(s.canvas, 0, 0);
          const A = this.#g(s.canvas);
          v.globalCompositeOperation = "destination-in", v.drawImage(A.canvas, 0, 0);
          const S = this.ctx.globalCompositeOperation, E = this.ctx.globalAlpha, _ = this.ctx.filter;
          this.ctx.save(), this.ctx.setTransform(...c), this.ctx.globalAlpha = 1, Yt.isCanvasFilterSupported && (this.ctx.filter = "none"), this.ctx.globalCompositeOperation = "destination-out", this.ctx.drawImage(A.canvas, 0, 0), this.ctx.globalCompositeOperation = S, this.ctx.globalAlpha = E, Yt.isCanvasFilterSupported && (this.ctx.filter = _ ?? "none"), this.ctx.drawImage(m.canvas, 0, 0), this.ctx.restore(), this.canvasFactory.destroy(A), this.canvasFactory.destroy(m);
        } else {
          const p = d?.backdropCtx ?? null;
          this.#u(this.ctx, s.canvas, {
            backdropCanvas: p?.canvas ?? null,
            destTransform: c,
            backdropOffset: p ? [d.offsetX + l.offsetX, d.offsetY + l.offsetY] : [0, 0],
            sourceAlpha: this.ctx.globalAlpha,
            sourceFilter: this.ctx.filter
          });
        }
      else {
        if (l.replaceBackdrop) {
          const p = new Path2D();
          p.rect(0, 0, s.canvas.width, s.canvas.height), this.ctx.clip(p), this.ctx.globalCompositeOperation = "copy";
        }
        this.ctx.drawImage(s.canvas, 0, 0);
      }
      this.ctx.restore(), this.canvasFactory.destroy({
        canvas: s.canvas,
        context: s
      }), this.#A(l), this.compose(u);
    }
  }
  #b(t) {
    const {
      canvas: n
    } = t, {
      width: s,
      height: r
    } = n;
    if (Yt.isCanvasFilterSupported) {
      t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.filter = "grayscale(1)", t.globalAlpha = 1, t.globalCompositeOperation = "copy", t.drawImage(n, 0, 0), t.restore();
      return;
    }
    const l = t.getImageData(0, 0, s, r), {
      data: c
    } = l;
    for (let u = 0, d = c.length; u < d; u += 4) {
      const p = c[u] * 0.2126 + c[u + 1] * 0.7152 + c[u + 2] * 0.0722 + 0.5 | 0;
      c[u] = c[u + 1] = c[u + 2] = p;
    }
    t.putImageData(l, 0, 0);
  }
  #A(t) {
    t && (t.knockoutMaskEntry && (this.canvasFactory.destroy(t.knockoutMaskEntry), t.knockoutMaskEntry = null), t.knockoutTempEntry && (this.canvasFactory.destroy(t.knockoutTempEntry), t.knockoutTempEntry = null), t.knockoutBackdropEntry && (this.canvasFactory.destroy(t.knockoutBackdropEntry), t.knockoutBackdropEntry = null));
  }
  beginAnnotation(t, n, s, r, l, c, u) {
    if (this.#h(), Ol(this.ctx), this.ctx.save(), this.save(t), this.baseTransform && this.ctx.setTransform(...this.baseTransform), s) {
      const d = s[2] - s[0], p = s[3] - s[1];
      if (c && this.annotationCanvasMap) {
        r = r.slice(), r[4] -= s[0], r[5] -= s[1], K.singularValueDecompose2dScale(Zt(this.ctx), cn);
        const {
          viewportScale: g
        } = this, m = Math.ceil(d * this.outputScaleX * g), v = Math.ceil(p * this.outputScaleY * g);
        this.annotationCanvas = this.canvasFactory.create(m, v);
        const {
          canvas: A,
          context: S
        } = this.annotationCanvas;
        if (u) {
          const E = this.annotationCanvasMap.getOrInsertComputed(n, Ba);
          A.setAttribute("data-canvas-name", u);
          const _ = E.findIndex((w) => w.getAttribute("data-canvas-name") === u);
          _ === -1 ? E.push(A) : E[_] = A;
        } else
          this.annotationCanvasMap.set(n, A);
        this.annotationCanvas.savedCtx = this.ctx, this.ctx = S, this.ctx.save(), this.ctx.setTransform(cn[0], 0, 0, -cn[1], 0, p * cn[1]), Ol(this.ctx);
      } else {
        Ol(this.ctx), this.endPath(t);
        const g = new Path2D();
        g.rect(s[0], s[1], d, p), this.ctx.clip(g);
      }
    }
    this.current = new Iy(this.ctx.canvas.width, this.ctx.canvas.height), this.baseTransformStack.push(this.baseTransform), this.transform(t, ...r), this.transform(t, ...l), this.baseTransform = Zt(this.ctx);
  }
  endAnnotation(t) {
    this.annotationCanvas && (this.ctx.restore(), this.#f(), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas), this.baseTransform = this.baseTransformStack.pop();
  }
  paintImageMaskXObject(t, n) {
    if (!this.contentVisible)
      return;
    const s = n.count;
    n = this.getObject(t, n.data, n), n.count = s;
    const r = this.#p(this.current.fillAlpha), l = this.ctx, c = this._createMaskCanvas(t, n), u = c.canvas;
    l.save(), l.setTransform(1, 0, 0, 1, 0, 0), l.drawImage(u, c.offsetX, c.offsetY), this.dependencyTracker?.resetBBox(t).recordBBox(t, this.ctx, c.offsetX, c.offsetX + u.width, c.offsetY, c.offsetY + u.height).recordOperation(t), l.restore(), c.canvasEntry && this.canvasFactory.destroy(c.canvasEntry), this.compose(), this.#y(r);
  }
  paintImageMaskXObjectRepeat(t, n, s, r = 0, l = 0, c, u) {
    if (!this.contentVisible)
      return;
    n = this.getObject(t, n.data, n);
    const d = this.#p(this.current.fillAlpha), p = this.ctx;
    p.save();
    const g = Zt(p);
    p.transform(s, r, l, c, 0, 0);
    const m = this._createMaskCanvas(t, n);
    p.setTransform(1, 0, 0, 1, m.offsetX - g[4], m.offsetY - g[5]), this.dependencyTracker?.resetBBox(t);
    for (let v = 0, A = u.length; v < A; v += 2) {
      const S = K.transform(g, [s, r, l, c, u[v], u[v + 1]]);
      p.drawImage(m.canvas, S[4], S[5]), this.dependencyTracker?.recordBBox(t, this.ctx, S[4], S[4] + m.canvas.width, S[5], S[5] + m.canvas.height);
    }
    p.restore(), m.canvasEntry && this.canvasFactory.destroy(m.canvasEntry), this.compose(), this.dependencyTracker?.recordOperation(t), this.#y(d);
  }
  paintImageMaskXObjectGroup(t, n) {
    if (!this.contentVisible)
      return;
    const s = this.#p(this.current.fillAlpha), r = this.ctx, l = this.current.fillColor, c = this.current.patternFill;
    this.dependencyTracker?.resetBBox(t).recordDependencies(t, Sn.transformAndFill);
    for (const u of n) {
      const {
        data: d,
        width: p,
        height: g,
        transform: m
      } = u, v = this.canvasFactory.create(p, g), A = v.context;
      A.save();
      const S = this.getObject(t, d, u);
      zy(A, S), A.globalCompositeOperation = "source-in", A.fillStyle = c ? l.getPattern(A, this, Qn(r), Oe.FILL, t) : l, A.fillRect(0, 0, p, g), A.restore(), r.save(), r.transform(...m), r.scale(1, -1), Dl(r, v.canvas, 0, 0, p, g, 0, -1, 1, 1), this.canvasFactory.destroy(v), this.dependencyTracker?.recordBBox(t, r, 0, p, 0, g), r.restore();
    }
    this.compose(), this.dependencyTracker?.recordOperation(t), this.#y(s);
  }
  paintImageXObject(t, n) {
    if (!this.contentVisible)
      return;
    const s = this.getObject(t, n);
    if (!s) {
      yt("Dependent image isn't ready yet");
      return;
    }
    this.paintInlineImageXObject(t, s);
  }
  paintImageXObjectRepeat(t, n, s, r, l) {
    if (!this.contentVisible)
      return;
    const c = this.getObject(t, n);
    if (!c) {
      yt("Dependent image isn't ready yet");
      return;
    }
    const u = c.width, d = c.height, p = [];
    for (let g = 0, m = l.length; g < m; g += 2)
      p.push({
        transform: [s, 0, 0, r, l[g], l[g + 1]],
        x: 0,
        y: 0,
        w: u,
        h: d
      });
    this.paintInlineImageXObjectGroup(t, c, p);
  }
  applyTransferMapsToCanvas(t) {
    return this.current.transferMaps !== "none" && (t.filter = this.current.transferMaps, t.drawImage(t.canvas, 0, 0), t.filter = "none"), t.canvas;
  }
  applyTransferMapsToBitmap(t) {
    if (this.current.transferMaps === "none")
      return {
        img: t.bitmap,
        canvasEntry: null
      };
    const {
      bitmap: n,
      width: s,
      height: r
    } = t, l = this.canvasFactory.create(s, r), c = l.context;
    return c.filter = this.current.transferMaps, c.drawImage(n, 0, 0), c.filter = "none", {
      img: l.canvas,
      canvasEntry: l
    };
  }
  paintInlineImageXObject(t, n) {
    if (!this.contentVisible)
      return;
    const s = n.width, r = n.height, l = this.#p(this.current.fillAlpha), c = this.ctx;
    this.save(t);
    const {
      filter: u
    } = c;
    u !== "none" && u !== "" && (c.filter = "none"), c.scale(1 / s, -1 / r);
    let d, p = null;
    if (n.bitmap) {
      const m = this.applyTransferMapsToBitmap(n);
      d = m.img, p = m.canvasEntry;
    } else {
      const m = this.canvasFactory.create(s, r);
      Fy(m.context, n), d = this.applyTransferMapsToCanvas(m.context), p = m;
    }
    const g = this._scaleImage(d, Qn(c));
    c.imageSmoothingEnabled = Uy(Zt(c), n.interpolate), this.dependencyTracker && (this.dependencyTracker.resetBBox(t).recordBBox(t, c, 0, s, -r, 0).recordDependencies(t, Sn.imageXObject).recordOperation(t), this.imagesTracker?.record(c, s, r, this.dependencyTracker.clipBox)), Dl(c, g.img, 0, 0, g.paintWidth, g.paintHeight, 0, -r, s, r), g.tmpCanvas && this.canvasFactory.destroy(g.tmpCanvas), p && this.canvasFactory.destroy(p), this.compose(), this.restore(t), this.#y(l);
  }
  paintInlineImageXObjectGroup(t, n, s) {
    if (!this.contentVisible)
      return;
    const r = this.#p(this.current.fillAlpha), l = this.ctx;
    let c, u = null;
    if (n.bitmap)
      c = n.bitmap;
    else {
      const d = n.width, p = n.height, g = this.canvasFactory.create(d, p);
      Fy(g.context, n), c = this.applyTransferMapsToCanvas(g.context), u = g;
    }
    this.dependencyTracker?.resetBBox(t);
    for (const d of s)
      l.save(), l.transform(...d.transform), l.scale(1, -1), Dl(l, c, d.x, d.y, d.w, d.h, 0, -1, 1, 1), this.dependencyTracker?.recordBBox(t, l, 0, 1, -1, 0), l.restore();
    u && this.canvasFactory.destroy(u), this.dependencyTracker?.recordOperation(t), this.compose(), this.#y(r);
  }
  paintSolidColorImageMask(t) {
    if (!this.contentVisible)
      return;
    const n = this.#p(this.current.fillAlpha);
    this.dependencyTracker?.resetBBox(t).recordBBox(t, this.ctx, 0, 1, 0, 1).recordDependencies(t, Sn.fill).recordOperation(t), this.ctx.fillRect(0, 0, 1, 1), this.compose(), this.#y(n);
  }
  markPoint(t, n) {
  }
  markPointProps(t, n, s) {
  }
  beginMarkedContent(t, n) {
    this.dependencyTracker?.beginMarkedContent(t), this.markedContentStack.push({
      visible: !0
    });
  }
  beginMarkedContentProps(t, n, s) {
    this.dependencyTracker?.beginMarkedContent(t), n === "OC" ? this.markedContentStack.push({
      visible: this.optionalContentConfig.isVisible(s)
    }) : this.markedContentStack.push({
      visible: !0
    }), this.contentVisible = this.isContentVisible();
  }
  endMarkedContent(t) {
    this.dependencyTracker?.endMarkedContent(t), this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
  }
  beginCompat(t) {
  }
  endCompat(t) {
  }
  consumePath(t, n, s) {
    const r = this.current.isEmptyClip();
    this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(s);
    const l = this.ctx;
    this.pendingClip ? (r || (this.pendingClip === Hy ? l.clip(n, "evenodd") : l.clip(n)), this.pendingClip = null, this.dependencyTracker?.bboxToClipBoxDropOperation(t).recordFutureForcedDependency("clipPath", t)) : this.dependencyTracker?.recordOperation(t), this.current.startNewPathAndClipBox(this.current.clipBox);
  }
  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const t = Zt(this.ctx);
      if (t[1] === 0 && t[2] === 0)
        this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
      else {
        const n = Math.abs(t[0] * t[3] - t[2] * t[1]), s = Math.hypot(t[0], t[2]), r = Math.hypot(t[1], t[3]);
        this._cachedGetSinglePixelWidth = Math.max(s, r) / n;
      }
    }
    return this._cachedGetSinglePixelWidth;
  }
  getScaleForStroking() {
    if (this._cachedScaleForStroking[0] === -1) {
      const {
        lineWidth: t
      } = this.current, {
        a: n,
        b: s,
        c: r,
        d: l
      } = this.ctx.getTransform();
      let c, u;
      if (s === 0 && r === 0) {
        const d = Math.abs(n), p = Math.abs(l);
        if (d === p)
          if (t === 0)
            c = u = 1 / d;
          else {
            const g = d * t;
            c = u = g < 1 ? 1 / g : 1;
          }
        else if (t === 0)
          c = 1 / d, u = 1 / p;
        else {
          const g = d * t, m = p * t;
          c = g < 1 ? 1 / g : 1, u = m < 1 ? 1 / m : 1;
        }
      } else {
        const d = Math.abs(n * l - s * r), p = Math.hypot(n, s), g = Math.hypot(r, l);
        if (t === 0)
          c = g / d, u = p / d;
        else {
          const m = t * d;
          c = g > m ? g / m : 1, u = p > m ? p / m : 1;
        }
      }
      this._cachedScaleForStroking[0] = c, this._cachedScaleForStroking[1] = u;
    }
    return this._cachedScaleForStroking;
  }
  rescaleAndStroke(t, n) {
    const {
      ctx: s,
      current: {
        lineWidth: r
      }
    } = this, [l, c] = this.getScaleForStroking();
    if (l === c) {
      s.lineWidth = (r || 1) * l, s.stroke(t);
      return;
    }
    const u = Ds.#t ??= new DOMMatrix(), d = s.getLineDash();
    n && s.save(), s.scale(l, c), u.a = 1 / l, u.d = 1 / c;
    const p = new Path2D();
    if (p.addPath(t, u), d.length > 0) {
      const g = Math.max(l, c);
      s.setLineDash(d.map((m) => m / g)), s.lineDashOffset /= g;
    }
    s.lineWidth = r || 1, s.stroke(p), n && s.restore();
  }
  isContentVisible() {
    for (let t = this.markedContentStack.length - 1; t >= 0; t--)
      if (!this.markedContentStack[t].visible)
        return !1;
    return !0;
  }
}
for (const y in Jn)
  Ds.prototype[y] !== void 0 && (Ds.prototype[Jn[y]] = Ds.prototype[y]);
class Wl {
  #t = null;
  #e = null;
  _fullReader = null;
  _rangeReaders = /* @__PURE__ */ new Set();
  _source = null;
  constructor(t, n, s) {
    this._source = t, this.#t = n, this.#e = s;
  }
  get _progressiveDataLength() {
    return this._fullReader?._loaded ?? 0;
  }
  getFullReader() {
    return ie(!this._fullReader, "BasePDFStream.getFullReader can only be called once."), this._fullReader = new this.#t(this);
  }
  getRangeReader(t, n) {
    if (n <= this._progressiveDataLength)
      return null;
    const s = new this.#e(this, t, n);
    return this._rangeReaders.add(s), s;
  }
  cancelAllRequests(t) {
    this._fullReader?.cancel(t);
    for (const n of new Set(this._rangeReaders))
      n.cancel(t);
  }
}
class Jl {
  onProgress = null;
  _contentLength = 0;
  _filename = null;
  _headersCapability = Promise.withResolvers();
  _isRangeSupported = !1;
  _isStreamingSupported = !1;
  _loaded = 0;
  _stream = null;
  constructor(t) {
    this._stream = t;
  }
  _callOnProgress() {
    this.onProgress?.({
      loaded: this._loaded,
      total: this._contentLength
    });
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    kt("Abstract method `read` called");
  }
  cancel(t) {
    kt("Abstract method `cancel` called");
  }
}
class tc {
  _stream = null;
  constructor(t, n, s) {
    this._stream = t;
  }
  async read() {
    kt("Abstract method `read` called");
  }
  cancel(t) {
    kt("Abstract method `cancel` called");
  }
}
function XS(y) {
  let t = !0, n = s("filename\\*", "i").exec(y);
  if (n) {
    n = n[1];
    let g = u(n);
    return g = unescape(g), g = d(g), g = p(g), l(g);
  }
  if (n = c(y), n) {
    const g = p(n);
    return l(g);
  }
  if (n = s("filename", "i").exec(y), n) {
    n = n[1];
    let g = u(n);
    return g = p(g), l(g);
  }
  function s(g, m) {
    return new RegExp("(?:^|;)\\s*" + g + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', m);
  }
  function r(g, m) {
    if (g) {
      if (!/^[\x00-\xFF]+$/.test(m))
        return m;
      try {
        const v = new TextDecoder(g, {
          fatal: !0
        }), A = Ql(m);
        m = v.decode(A), t = !1;
      } catch {
      }
    }
    return m;
  }
  function l(g) {
    return t && /[\x80-\xff]/.test(g) && (g = r("utf-8", g), t && (g = r("iso-8859-1", g))), g;
  }
  function c(g) {
    const m = [];
    let v;
    const A = s("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
    for (; (v = A.exec(g)) !== null; ) {
      let [, E, _, w] = v;
      if (E = parseInt(E, 10), E in m) {
        if (E === 0)
          break;
        continue;
      }
      m[E] = [_, w];
    }
    const S = [];
    for (let E = 0; E < m.length && E in m; ++E) {
      let [_, w] = m[E];
      w = u(w), _ && (w = unescape(w), E === 0 && (w = d(w))), S.push(w);
    }
    return S.join("");
  }
  function u(g) {
    if (g.startsWith('"')) {
      const m = g.slice(1).split('\\"');
      for (let v = 0; v < m.length; ++v) {
        const A = m[v].indexOf('"');
        A !== -1 && (m[v] = m[v].slice(0, A), m.length = v + 1), m[v] = m[v].replaceAll(/\\(.)/g, "$1");
      }
      g = m.join('"');
    }
    return g;
  }
  function d(g) {
    const m = g.indexOf("'");
    if (m === -1)
      return g;
    const v = g.slice(0, m), S = g.slice(m + 1).replace(/^[^']*'/, "");
    return r(v, S);
  }
  function p(g) {
    return !g.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(g) ? g : g.replaceAll(/=\?([\w-]*)\?([QB])\?((?:[^?]|\?(?!=))*)\?=/gi, function(m, v, A, S) {
      if (A === "q" || A === "Q")
        return S = S.replaceAll("_", " "), S = S.replaceAll(/=([0-9a-f]{2})/gi, function(E, _) {
          return String.fromCharCode(parseInt(_, 16));
        }), r(v, S);
      try {
        S = atob(S);
      } catch {
      }
      return r(v, S);
    });
  }
  return "";
}
function l0(y, t) {
  const n = new Headers();
  if (!y || !t || typeof t != "object")
    return n;
  for (const s in t) {
    const r = t[s];
    r !== void 0 && n.append(s, r);
  }
  return n;
}
function qS(y) {
  let t = y.length;
  for (; t > 0 && y[t - 1] !== " " && /\s/.test(y[t - 1]); )
    t--;
  return y.slice(0, t);
}
function ec(y) {
  return URL.parse(y)?.origin ?? null;
}
function c0({
  responseHeaders: y,
  isHttp: t,
  rangeChunkSize: n,
  disableRange: s
}) {
  const r = {
    contentLength: 0,
    isRangeSupported: !1
  }, l = parseInt(y.get("Content-Length"), 10);
  return !Number.isInteger(l) || (r.contentLength = l, l <= 2 * n) || s || !t || y.get("Accept-Ranges") !== "bytes" || (y.get("Content-Encoding") || "identity") === "identity" && (r.isRangeSupported = !0), r;
}
function u0(y) {
  const t = y.get("Content-Disposition");
  if (t) {
    let n = XS(t);
    if (n.includes("%"))
      try {
        n = decodeURIComponent(n);
      } catch {
      }
    if (bd(n))
      return n;
  }
  return null;
}
function nc(y, t) {
  return new Ul(`Unexpected server response (${y}) while retrieving PDF "${t.href}".`, y, y === 404 || y === 0 && t.protocol === "file:");
}
function h0(y, t) {
  if (y !== t)
    throw new Error(`Expected range response-origin "${y}" to match "${t}".`);
}
function d0(y, t, n, s) {
  return fetch(y, {
    method: "GET",
    headers: t,
    signal: s.signal,
    mode: "cors",
    credentials: n ? "include" : "same-origin",
    redirect: "follow"
  });
}
function f0(y, t) {
  if (y !== 200 && y !== 206)
    throw nc(y, t);
}
function ic(y) {
  if (y instanceof Uint8Array)
    return y.buffer;
  if (y instanceof ArrayBuffer)
    return y;
  throw new Error(`getArrayBuffer - unexpected data: ${y}`);
}
class KS extends Wl {
  _responseOrigin = null;
  constructor(t) {
    super(t, QS, ZS);
    const {
      httpHeaders: n,
      url: s
    } = t;
    ie(/https?:/.test(s.protocol), "PDFFetchStream only supports http(s):// URLs."), this.headers = l0(!0, n);
  }
}
class QS extends Jl {
  _abortController = new AbortController();
  _reader = null;
  constructor(t) {
    super(t);
    const {
      disableRange: n,
      disableStream: s,
      rangeChunkSize: r,
      url: l,
      withCredentials: c
    } = t._source;
    this._isStreamingSupported = !s;
    const u = new Headers(t.headers);
    d0(l, u, c, this._abortController).then((d) => {
      t._responseOrigin = ec(d.url), f0(d.status, l), this._reader = d.body.getReader();
      const p = d.headers, {
        contentLength: g,
        isRangeSupported: m
      } = c0({
        responseHeaders: p,
        isHttp: !0,
        rangeChunkSize: r,
        disableRange: n
      });
      this._contentLength = g, this._isRangeSupported = m, this._filename = u0(p), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new Zi("Streaming is disabled.")), this._headersCapability.resolve();
    }).catch(this._headersCapability.reject);
  }
  async read() {
    await this._headersCapability.promise;
    const {
      value: t,
      done: n
    } = await this._reader.read();
    return n ? {
      value: t,
      done: n
    } : (this._loaded += t.byteLength, this._callOnProgress(), {
      value: ic(t),
      done: !1
    });
  }
  cancel(t) {
    this._reader?.cancel(t), this._abortController.abort();
  }
}
class ZS extends tc {
  _abortController = new AbortController();
  _readCapability = Promise.withResolvers();
  _reader = null;
  constructor(t, n, s) {
    super(t, n, s);
    const {
      url: r,
      withCredentials: l
    } = t._source, c = new Headers(t.headers);
    c.append("Range", `bytes=${n}-${s - 1}`), d0(r, c, l, this._abortController).then((u) => {
      const d = ec(u.url);
      h0(d, t._responseOrigin), f0(u.status, r), this._reader = u.body.getReader(), this._readCapability.resolve();
    }).catch(this._readCapability.reject);
  }
  async read() {
    await this._readCapability.promise;
    const {
      value: t,
      done: n
    } = await this._reader.read();
    return n ? {
      value: t,
      done: n
    } : {
      value: ic(t),
      done: !1
    };
  }
  cancel(t) {
    this._reader?.cancel(t), this._abortController.abort();
  }
}
function Gy(y) {
  return y instanceof Uint8Array && y.byteLength === y.buffer.byteLength ? y.buffer : new Uint8Array(y).buffer;
}
function sc() {
  for (const y of this._requests)
    y.resolve({
      value: void 0,
      done: !0
    });
  this._requests.length = 0;
}
class $S extends Wl {
  _progressiveDone = !1;
  _queuedChunks = [];
  constructor(t) {
    super(t, WS, JS);
    const {
      pdfDataRangeTransport: n
    } = t, {
      initialData: s,
      progressiveDone: r
    } = n;
    if (s?.length > 0) {
      const c = Gy(s);
      this._queuedChunks.push(c);
    }
    this._progressiveDone = r;
    const l = (c) => {
      switch (c.type) {
        case "range":
        case "progressiveRead":
          this.#t(c.begin, c.chunk);
          break;
        case "progressiveDone":
          this._fullReader?.progressiveDone(), this._progressiveDone = !0;
          break;
      }
    };
    n.transportReady(l);
  }
  #t(t, n) {
    const s = Gy(n);
    if (t === void 0)
      this._fullReader ? this._fullReader._enqueue(s) : this._queuedChunks.push(s);
    else {
      const r = this._rangeReaders.keys().find((l) => l._begin === t);
      ie(r, "#onReceiveData - no `PDFDataTransportStreamRangeReader` instance found."), r._enqueue(s);
    }
  }
  getFullReader() {
    const t = super.getFullReader();
    return this._queuedChunks = null, t;
  }
  getRangeReader(t, n) {
    const s = super.getRangeReader(t, n);
    return s && (s.onDone = () => this._rangeReaders.delete(s), this._source.pdfDataRangeTransport.requestDataRange(t, n)), s;
  }
  cancelAllRequests(t) {
    super.cancelAllRequests(t), this._source.pdfDataRangeTransport.abort();
  }
}
class WS extends Jl {
  #t = sc.bind(this);
  _done = !1;
  _queuedChunks = null;
  _requests = [];
  constructor(t) {
    super(t);
    const {
      pdfDataRangeTransport: n,
      disableRange: s,
      disableStream: r
    } = t._source, {
      length: l,
      contentDispositionFilename: c
    } = n;
    this._queuedChunks = t._queuedChunks || [];
    for (const d of this._queuedChunks)
      this._loaded += d.byteLength;
    this._done = t._progressiveDone, this._contentLength = l, this._isStreamingSupported = !r, this._isRangeSupported = !s, bd(c) && (this._filename = c), this._headersCapability.resolve();
    const u = this._loaded;
    Promise.resolve().then(() => {
      u > 0 && this._loaded === u && this._callOnProgress();
    });
  }
  _enqueue(t) {
    this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
      value: t,
      done: !1
    }) : this._queuedChunks.push(t), this._loaded += t.byteLength, this._callOnProgress());
  }
  async read() {
    if (this._queuedChunks.length > 0)
      return {
        value: this._queuedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0, this.#t();
  }
  progressiveDone() {
    this._done ||= !0, this._queuedChunks.length === 0 && this.#t();
  }
}
class JS extends tc {
  #t = sc.bind(this);
  onDone = null;
  _begin = -1;
  _done = !1;
  _queuedChunk = null;
  _requests = [];
  constructor(t, n, s) {
    super(t, n, s), this._begin = n;
  }
  _enqueue(t) {
    this._done || (this._requests.length === 0 ? this._queuedChunk = t : (this._requests.shift().resolve({
      value: t,
      done: !1
    }), this.#t()), this._done = !0, this.onDone?.());
  }
  async read() {
    if (this._queuedChunk) {
      const n = this._queuedChunk;
      return this._queuedChunk = null, {
        value: n,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0, this.#t(), this.onDone?.();
  }
}
const $h = 200, jy = 206;
function t1(y) {
  return typeof y != "string" ? y : Ql(y).buffer;
}
class e1 extends Wl {
  #t = /* @__PURE__ */ new WeakMap();
  _responseOrigin = null;
  constructor(t) {
    super(t, n1, i1);
    const {
      httpHeaders: n,
      url: s
    } = t;
    this.url = s, this.isHttp = /https?:/.test(s.protocol), this.headers = l0(this.isHttp, n);
  }
  _request(t) {
    const n = new XMLHttpRequest(), s = {
      validateStatus: null,
      onHeadersReceived: t.onHeadersReceived,
      onDone: t.onDone,
      onError: t.onError,
      onProgress: t.onProgress
    };
    this.#t.set(n, s), n.open("GET", this.url), n.withCredentials = this._source.withCredentials;
    for (const [r, l] of this.headers)
      n.setRequestHeader(r, l);
    return this.isHttp && "begin" in t && "end" in t ? (n.setRequestHeader("Range", `bytes=${t.begin}-${t.end - 1}`), s.validateStatus = (r) => r === jy || r === $h) : s.validateStatus = (r) => r === $h, n.responseType = "arraybuffer", ie(t.onError, "Expected `onError` callback to be provided."), n.onerror = () => t.onError(n.status), n.onreadystatechange = this.#n.bind(this, n), n.onprogress = this.#e.bind(this, n), n.send(null), n;
  }
  #e(t, n) {
    this.#t.get(t)?.onProgress?.(n);
  }
  #n(t, n) {
    const s = this.#t.get(t);
    if (!s || (t.readyState >= 2 && s.onHeadersReceived && (s.onHeadersReceived(), delete s.onHeadersReceived), t.readyState !== 4) || !this.#t.has(t))
      return;
    if (this.#t.delete(t), t.status === 0 && this.isHttp) {
      s.onError(t.status);
      return;
    }
    const r = t.status || $h;
    if (!s.validateStatus(r)) {
      s.onError(t.status);
      return;
    }
    const l = t1(t.response);
    if (r === jy) {
      const c = t.getResponseHeader("Content-Range");
      /bytes \d+-\d+\/\d+/.test(c) ? s.onDone(l) : (yt('Missing or invalid "Content-Range" header.'), s.onError(0));
    } else l ? s.onDone(l) : s.onError(t.status);
  }
  _abortRequest(t) {
    this.#t.has(t) && (this.#t.delete(t), t.abort());
  }
  getRangeReader(t, n) {
    const s = super.getRangeReader(t, n);
    return s && (s.onClosed = () => this._rangeReaders.delete(s)), s;
  }
}
class n1 extends Jl {
  #t = sc.bind(this);
  _cachedChunks = [];
  _done = !1;
  _requests = [];
  _storedError = null;
  constructor(t) {
    super(t), this._fullRequestXhr = t._request({
      onHeadersReceived: this.#e.bind(this),
      onDone: this.#n.bind(this),
      onError: this.#i.bind(this),
      onProgress: this.#s.bind(this)
    });
  }
  #e() {
    const t = this._stream, {
      disableRange: n,
      rangeChunkSize: s
    } = t._source, r = this._fullRequestXhr;
    t._responseOrigin = ec(r.responseURL);
    const l = r.getAllResponseHeaders(), c = new Headers(l ? qS(l.trimStart()).split(/[\r\n]+/).map((p) => {
      const [g, ...m] = p.split(": ");
      return [g, m.join(": ")];
    }) : []), {
      contentLength: u,
      isRangeSupported: d
    } = c0({
      responseHeaders: c,
      isHttp: t.isHttp,
      rangeChunkSize: s,
      disableRange: n
    });
    this._contentLength = u, this._isRangeSupported = d, this._filename = u0(c), this._isRangeSupported && t._abortRequest(r), this._headersCapability.resolve();
  }
  #n(t) {
    this._requests.length > 0 ? this._requests.shift().resolve({
      value: t,
      done: !1
    }) : this._cachedChunks.push(t), this._done = !0, this._cachedChunks.length === 0 && this.#t();
  }
  #i(t) {
    this._storedError = nc(t, this._stream.url), this._headersCapability.reject(this._storedError);
    for (const n of this._requests)
      n.reject(this._storedError);
    this._requests.length = 0, this._cachedChunks.length = 0;
  }
  #s(t) {
    this.onProgress?.({
      loaded: t.loaded,
      total: t.lengthComputable ? t.total : this._contentLength
    });
  }
  async read() {
    if (await this._headersCapability.promise, this._storedError)
      throw this._storedError;
    if (this._cachedChunks.length > 0)
      return {
        value: this._cachedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0, this._headersCapability.reject(t), this.#t(), this._stream._abortRequest(this._fullRequestXhr), this._fullRequestXhr = null;
  }
}
class i1 extends tc {
  #t = sc.bind(this);
  onClosed = null;
  _done = !1;
  _queuedChunk = null;
  _requests = [];
  _storedError = null;
  constructor(t, n, s) {
    super(t, n, s), this._requestXhr = t._request({
      begin: n,
      end: s,
      onHeadersReceived: this.#e.bind(this),
      onDone: this.#n.bind(this),
      onError: this.#i.bind(this),
      onProgress: null
    });
  }
  #e() {
    const t = ec(this._requestXhr?.responseURL);
    try {
      h0(t, this._stream._responseOrigin);
    } catch (n) {
      this._storedError = n, this.#i(0);
    }
  }
  #n(t) {
    this._requests.length > 0 ? this._requests.shift().resolve({
      value: t,
      done: !1
    }) : this._queuedChunk = t, this._done = !0, this.#t(), this.onClosed?.();
  }
  #i(t) {
    this._storedError ??= nc(t, this._stream.url);
    for (const n of this._requests)
      n.reject(this._storedError);
    this._requests.length = 0, this._queuedChunk = null;
  }
  async read() {
    if (this._storedError)
      throw this._storedError;
    if (this._queuedChunk !== null) {
      const n = this._queuedChunk;
      return this._queuedChunk = null, {
        value: n,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0, this.#t(), this._stream._abortRequest(this._requestXhr), this.onClosed?.();
  }
}
function p0(y, t = null) {
  const n = process.getBuiltinModule("fs"), {
    Readable: s
  } = process.getBuiltinModule("stream"), r = n.createReadStream(y, t);
  return s.toWeb(r);
}
class s1 extends Wl {
  constructor(t) {
    super(t, a1, r1);
    const {
      url: n
    } = t;
    ie(n.protocol === "file:", "PDFNodeStream only supports file:// URLs.");
  }
}
class a1 extends Jl {
  _reader = null;
  constructor(t) {
    super(t);
    const {
      disableRange: n,
      disableStream: s,
      rangeChunkSize: r,
      url: l
    } = t._source;
    this._isStreamingSupported = !s, process.getBuiltinModule("fs/promises").lstat(l).then((u) => {
      const d = p0(l);
      this._reader = d.getReader();
      const {
        size: p
      } = u;
      this._contentLength = p, this._isRangeSupported = !n && p > 2 * r, !this._isStreamingSupported && this._isRangeSupported && this.cancel(new Zi("Streaming is disabled.")), this._headersCapability.resolve();
    }).catch((u) => {
      u.code === "ENOENT" && (u = nc(0, l)), this._headersCapability.reject(u);
    });
  }
  async read() {
    await this._headersCapability.promise;
    const {
      value: t,
      done: n
    } = await this._reader.read();
    return n ? {
      value: t,
      done: n
    } : (this._loaded += t.byteLength, this._callOnProgress(), {
      value: ic(t),
      done: !1
    });
  }
  cancel(t) {
    this._reader?.cancel(t);
  }
}
class r1 extends tc {
  _readCapability = Promise.withResolvers();
  _reader = null;
  constructor(t, n, s) {
    super(t, n, s);
    const {
      url: r
    } = t._source;
    try {
      const l = p0(r, {
        start: n,
        end: s - 1
      });
      this._reader = l.getReader(), this._readCapability.resolve();
    } catch (l) {
      this._readCapability.reject(l);
    }
  }
  async read() {
    await this._readCapability.promise;
    const {
      value: t,
      done: n
    } = await this._reader.read();
    return n ? {
      value: t,
      done: n
    } : {
      value: ic(t),
      done: !1
    };
  }
  cancel(t) {
    this._reader?.cancel(t);
  }
}
function o1(y) {
  return Ir(y) ? KS : on ? s1 : e1;
}
class Na {
  static #t = null;
  static #e = "";
  static get workerPort() {
    return this.#t;
  }
  static set workerPort(t) {
    if (!(typeof Worker < "u" && t instanceof Worker) && t !== null)
      throw new Error("Invalid `workerPort` type.");
    this.#t = t;
  }
  static get workerSrc() {
    return this.#e;
  }
  static set workerSrc(t) {
    if (typeof t != "string")
      throw new Error("Invalid `workerSrc` type.");
    this.#e = t;
  }
}
class l1 {
  #t;
  #e;
  constructor({
    parsedData: t,
    rawData: n
  }) {
    this.#t = t, this.#e = n;
  }
  getRaw() {
    return this.#e;
  }
  get(t) {
    return this.#t.get(t) ?? null;
  }
  [Symbol.iterator]() {
    return this.#t.entries();
  }
}
const Ts = /* @__PURE__ */ Symbol("INTERNAL");
class c1 {
  #t = !1;
  #e = !1;
  #n = !1;
  #i = !0;
  constructor(t, {
    name: n,
    intent: s,
    usage: r,
    rbGroups: l
  }) {
    this.#t = !!(t & an.DISPLAY), this.#e = !!(t & an.PRINT), this.name = n, this.intent = s, this.usage = r, this.rbGroups = l;
  }
  get visible() {
    if (this.#n)
      return this.#i;
    if (!this.#i)
      return !1;
    const {
      print: t,
      view: n
    } = this.usage;
    return this.#t ? n?.viewState !== "OFF" : this.#e ? t?.printState !== "OFF" : !0;
  }
  _setVisible(t, n, s = !1) {
    t !== Ts && kt("Internal method `_setVisible` called."), this.#n = s, this.#i = n;
  }
  get serializable() {
    return {
      userSet: this.#n,
      visible: this.#i
    };
  }
}
class _d {
  #t = null;
  #e = /* @__PURE__ */ new Map();
  #n = null;
  #i = null;
  #s;
  creator = null;
  name = null;
  constructor(t, n = an.DISPLAY, s = null) {
    if (this.#s = t, this.renderingIntent = n, t !== null) {
      this.name = t.name, this.creator = t.creator, this.#i = t.order;
      for (const r of t.groups)
        this.#e.set(r.id, new c1(n, r));
      if (s) {
        s.size !== this.#e.size && kt("Incorrect serialized groupState.");
        for (const [r, l] of s)
          this.#e.get(r)._setVisible(Ts, l.visible, l.userSet);
      } else {
        if (t.baseState === "OFF")
          for (const r of this.#e.values())
            r._setVisible(Ts, !1);
        for (const r of t.on)
          this.#e.get(r)._setVisible(Ts, !0);
        for (const r of t.off)
          this.#e.get(r)._setVisible(Ts, !1);
      }
      this.#n = this.getHash();
    }
  }
  #r(t) {
    const n = t.length;
    if (n < 2)
      return !0;
    const s = t[0];
    for (let r = 1; r < n; r++) {
      const l = t[r];
      let c;
      if (Array.isArray(l))
        c = this.#r(l);
      else if (this.#e.has(l))
        c = this.#e.get(l).visible;
      else
        return yt(`Optional content group not found: ${l}`), !0;
      switch (s) {
        case "And":
          if (!c)
            return !1;
          break;
        case "Or":
          if (c)
            return !0;
          break;
        case "Not":
          return !c;
        default:
          return !0;
      }
    }
    return s === "And";
  }
  isVisible(t) {
    if (this.#e.size === 0)
      return !0;
    if (!t)
      return Kl("Optional content group not defined."), !0;
    if (t.type === "OCG")
      return this.#e.has(t.id) ? this.#e.get(t.id).visible : (yt(`Optional content group not found: ${t.id}`), !0);
    if (t.type === "OCMD") {
      if (t.expression)
        return this.#r(t.expression);
      if (!t.policy || t.policy === "AnyOn") {
        for (const n of t.ids) {
          if (!this.#e.has(n))
            return yt(`Optional content group not found: ${n}`), !0;
          if (this.#e.get(n).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOn") {
        for (const n of t.ids) {
          if (!this.#e.has(n))
            return yt(`Optional content group not found: ${n}`), !0;
          if (!this.#e.get(n).visible)
            return !1;
        }
        return !0;
      } else if (t.policy === "AnyOff") {
        for (const n of t.ids) {
          if (!this.#e.has(n))
            return yt(`Optional content group not found: ${n}`), !0;
          if (!this.#e.get(n).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOff") {
        for (const n of t.ids) {
          if (!this.#e.has(n))
            return yt(`Optional content group not found: ${n}`), !0;
          if (this.#e.get(n).visible)
            return !1;
        }
        return !0;
      }
      return yt(`Unknown optional content policy ${t.policy}.`), !0;
    }
    return yt(`Unknown group type ${t.type}.`), !0;
  }
  setVisibility(t, n = !0, s = !0) {
    const r = this.#e.get(t);
    if (!r) {
      yt(`Optional content group not found: ${t}`);
      return;
    }
    if (s && n && r.rbGroups.length)
      for (const l of r.rbGroups)
        for (const c of l)
          c !== t && this.#e.get(c)?._setVisible(Ts, !1, !0);
    r._setVisible(Ts, !!n, !0), this.#t = null;
  }
  setOCGState({
    state: t,
    preserveRB: n
  }) {
    let s;
    for (const r of t) {
      switch (r) {
        case "ON":
        case "OFF":
        case "Toggle":
          s = r;
          continue;
      }
      const l = this.#e.get(r);
      if (l)
        switch (s) {
          case "ON":
            this.setVisibility(r, !0, n);
            break;
          case "OFF":
            this.setVisibility(r, !1, n);
            break;
          case "Toggle":
            this.setVisibility(r, !l.visible, n);
            break;
        }
    }
    this.#t = null;
  }
  get hasInitialVisibility() {
    return this.#n === null || this.getHash() === this.#n;
  }
  getOrder() {
    return this.#e.size ? this.#i ? this.#i.slice() : [...this.#e.keys()] : null;
  }
  getGroup(t) {
    return this.#e.get(t) || null;
  }
  getHash() {
    if (this.#t !== null)
      return this.#t;
    const t = new ld();
    for (const [n, s] of this.#e)
      t.update(`${n}:${s.visible}`);
    return this.#t = t.hexdigest();
  }
  [Symbol.iterator]() {
    return this.#e.entries();
  }
  get serializable() {
    const t = /* @__PURE__ */ new Map();
    for (const [n, s] of this.#e)
      t.set(n, s.serializable);
    return {
      data: this.#s,
      renderingIntent: this.renderingIntent,
      groupState: t
    };
  }
  static fromSerializable({
    data: t,
    renderingIntent: n,
    groupState: s
  }) {
    return new _d(t, n, s);
  }
}
class u1 {
  #t = null;
  #e = null;
  #n = 0;
  #i = null;
  #s = null;
  get pagesNumber() {
    return this.#n;
  }
  set pagesNumber(t) {
    this.#n !== t && (this.#n = t, this.#t = null, this.#e = null);
  }
  #r() {
    if (this.#t)
      return;
    const t = this.#n, n = this.#t = new Uint32Array(t);
    for (let s = 0; s < t; s++)
      n[s] = s + 1;
    this.#e = new Int32Array(n);
  }
  #a() {
    const t = /* @__PURE__ */ new Map(), n = this.#t;
    for (let s = 0, r = this.#n; s < r; s++) {
      const l = n[s], c = t.get(l);
      c ? c.push(s + 1) : t.set(l, [s + 1]);
    }
    return t;
  }
  movePages(t, n, s) {
    this.#r();
    const r = this.#t, l = n.length, c = new Uint32Array(l);
    let u = 0;
    for (let v = 0; v < l; v++) {
      const A = n[v] - 1;
      c[v] = r[A], A < s && u++;
    }
    const d = this.#n, p = d - l, g = new Int32Array(d), m = $t(s - u, 0, p);
    for (let v = 0, A = 0; v < d; v++)
      t.has(v + 1) || (r[A] = r[v], g[A++] = v + 1);
    r.copyWithin(m + l, m, p), r.set(c, m), g.copyWithin(m + l, m, p), g.set(n, m), this.#e = g, r.every((v, A) => v === A + 1) && (this.#t = null);
  }
  deletePages(t) {
    this.#r();
    const n = this.#t, s = this.#a();
    this.#s = {
      pageNumberToId: n.slice(),
      pagesNumber: this.#n,
      prevPageNumbers: this.#e.slice()
    };
    const r = this.#n - t.length;
    this.#n = r;
    const l = this.#t = new Uint32Array(r);
    this.#e = new Int32Array(r);
    let c = 0, u = 0;
    for (const d of t) {
      const p = d - 1;
      p !== c && (l.set(n.subarray(c, p), u), u += p - c), c = p + 1;
    }
    c < n.length && l.set(n.subarray(c), u), this.#o(s, new Set(t));
  }
  cancelDelete() {
    this.#s && (this.#t = this.#s.pageNumberToId, this.#n = this.#s.pagesNumber, this.#e = this.#s.prevPageNumbers, this.#s = null);
  }
  cleanSavedData() {
    this.#s = null;
  }
  copyPages(t) {
    this.#r(), this.#i = {
      pageNumbers: t,
      pageIds: t.map((n) => this.#t[n - 1])
    };
  }
  cancelCopy() {
    this.#i = null;
  }
  pastePages(t) {
    this.#r();
    const n = this.#t, s = this.#a(), {
      pageNumbers: r,
      pageIds: l
    } = this.#i, c = this.#n + r.length;
    this.#n = c;
    const u = this.#t = new Uint32Array(c);
    this.#e = new Int32Array(c), u.set(n.subarray(0, t), 0), u.set(l, t), u.set(n.subarray(t), t + r.length), this.#o(s, null, t, r), this.#i = null;
  }
  #o(t, n = null, s = -1, r = null) {
    const l = this.#e, c = this.#t, u = s + (r?.length ?? 0), d = /* @__PURE__ */ new Map();
    for (let p = 0, g = this.#n; p < g; p++) {
      if (p >= s && p < u) {
        l[p] = -r[p - s];
        continue;
      }
      const m = c[p], v = t.get(m);
      let A = d.get(m) || 0;
      if (n && v)
        for (; A < v.length && n.has(v[A]); )
          A++;
      l[p] = v?.[A], d.set(m, A + 1);
    }
  }
  hasBeenAltered() {
    return this.#t !== null;
  }
  #l(t = null) {
    if (!this.#t)
      return null;
    const n = new Int32Array(this.#n).fill(-1), s = /* @__PURE__ */ new Map();
    if (t)
      for (const r of t) {
        const l = this.getPageId(r), c = s.get(l) ?? 0;
        s.set(l, c + 1), n[r - 1] = c;
      }
    else
      for (let r = 0, l = this.#n; r < l; r++) {
        const c = this.#t[r], u = s.get(c) ?? 0;
        s.set(c, u + 1), n[r] = u;
      }
    return n;
  }
  getPageMappingForSaving(t = null, n = this.#l()) {
    t ??= this.#a();
    let s = 0;
    for (const l of t.values())
      s = Math.max(s, l.length);
    const r = new Array(s);
    for (let l = 0; l < s; l++)
      r[l] = {
        document: null,
        pageIndices: [],
        includePages: []
      };
    for (const [l, c] of t)
      for (let u = 0, d = c.length; u < d; u++)
        r[u].includePages.push([l - 1, c[u] - 1]);
    for (const {
      includePages: l,
      pageIndices: c
    } of r) {
      l.sort((u, d) => u[0] - d[0]);
      for (let u = 0, d = l.length; u < d; u++)
        c.push(l[u][1]), l[u] = l[u][0];
    }
    return {
      pageInfos: r,
      copyLevels: n
    };
  }
  extractPages(t) {
    t = Array.from(t).sort((s, r) => s - r);
    const n = /* @__PURE__ */ new Map();
    for (let s = 0, r = t.length; s < r; s++) {
      const l = this.getPageId(t[s]);
      n.getOrInsertComputed(l, Ba).push(s + 1);
    }
    return this.getPageMappingForSaving(n, this.#l(t));
  }
  getPrevPageNumber(t) {
    return this.#e?.[t - 1] ?? 0;
  }
  getPageNumber(t) {
    if (!this.#t)
      return t;
    const n = this.#t;
    for (let s = 0, r = this.#n; s < r; s++)
      if (n[s] === t)
        return s + 1;
    return 0;
  }
  getPageId(t) {
    return this.#t?.[t - 1] ?? t;
  }
  getMapping() {
    return this.#t?.subarray(0, this.pagesNumber);
  }
}
const xa = /* @__PURE__ */ Symbol("INITIAL_DATA"), Vy = () => ({
  ...Promise.withResolvers(),
  data: xa
});
class g0 {
  #t = /* @__PURE__ */ new Map();
  get(t, n = null) {
    if (n) {
      const r = this.#t.getOrInsertComputed(t, Vy);
      return r.promise.then(() => n(r.data)), null;
    }
    const s = this.#t.get(t);
    if (!s || s.data === xa)
      throw new Error(`Requesting object that isn't resolved yet ${t}.`);
    return s.data;
  }
  has(t) {
    const n = this.#t.get(t);
    return !!n && n.data !== xa;
  }
  delete(t) {
    const n = this.#t.get(t);
    return !n || n.data === xa ? !1 : (this.#t.delete(t), !0);
  }
  resolve(t, n = null) {
    const s = this.#t.getOrInsertComputed(t, Vy);
    if (s.data !== xa)
      throw new Error(`Object already resolved ${t}.`);
    s.data = n, s.resolve();
  }
  clear() {
    for (const {
      data: t
    } of this.#t.values())
      t?.bitmap?.close();
    this.#t.clear();
  }
  *[Symbol.iterator]() {
    for (const [t, {
      data: n
    }] of this.#t)
      n !== xa && (yield [t, n]);
  }
}
const h1 = 1e5, Yy = 30;
class rn {
  #t = Promise.withResolvers();
  #e = null;
  #n = !1;
  #i = !!globalThis.FontInspector?.enabled;
  #s = null;
  #r = null;
  #a = null;
  #o = 0;
  #l = 0;
  #c = null;
  #d = null;
  #h = 0;
  #f = 0;
  #g = /* @__PURE__ */ Object.create(null);
  #m = [];
  #u = null;
  #p = [];
  #y = /* @__PURE__ */ new WeakMap();
  #v = null;
  static #b = /* @__PURE__ */ new Map();
  static #A = /* @__PURE__ */ new Map();
  static #T = /* @__PURE__ */ new WeakMap();
  static #E = null;
  static #_ = /* @__PURE__ */ new Set();
  constructor({
    textContentSource: t,
    images: n,
    container: s,
    viewport: r
  }) {
    if (t instanceof ReadableStream)
      this.#u = t;
    else if (typeof t == "object")
      this.#u = new ReadableStream({
        start(p) {
          p.enqueue(t), p.close();
        }
      });
    else
      throw new Error('No "textContentSource" parameter specified.');
    this.#e = this.#d = s, this.#s = n, this.#f = r.scale * Ln.pixelRatio, this.#h = r.rotation, this.#a = {
      div: null,
      properties: null,
      ctx: null
    };
    const {
      pageWidth: l,
      pageHeight: c,
      pageX: u,
      pageY: d
    } = r.rawDims;
    this.#v = [1, 0, 0, -1, -u, d + c], this.#l = l, this.#o = c, rn.#N(), s.style.setProperty("--min-font-size", rn.#E), Os(s, r), this.#t.promise.finally(() => {
      rn.#_.delete(this), this.#a = null, this.#g = null;
    }).catch(() => {
    });
  }
  static get fontFamilyMap() {
    const {
      isWindows: t,
      isFirefox: n
    } = Yt.platform;
    return lt(this, "fontFamilyMap", /* @__PURE__ */ new Map([["sans-serif", `${t && n ? "Calibri, " : ""}sans-serif`], ["monospace", `${t && n ? "Lucida Console, " : ""}monospace`]]));
  }
  render() {
    this.#s && this.#e.append(this.#s.render());
    const t = () => {
      this.#c.read().then(({
        value: n,
        done: s
      }) => {
        if (s) {
          this.#t.resolve();
          return;
        }
        this.#r ??= n.lang, Object.assign(this.#g, n.styles), this.#w(n.items), t();
      }, this.#t.reject);
    };
    return this.#c = this.#u.getReader(), rn.#_.add(this), t(), this.#t.promise;
  }
  update({
    viewport: t,
    onBefore: n = null
  }) {
    const s = t.scale * Ln.pixelRatio, r = t.rotation;
    if (r !== this.#h && (n?.(), this.#h = r, Os(this.#d, {
      rotation: r
    })), s !== this.#f) {
      n?.(), this.#f = s;
      const l = {
        div: null,
        properties: null,
        ctx: rn.#x(this.#r)
      };
      for (const c of this.#p)
        l.properties = this.#y.get(c), l.div = c, this.#M(l);
    }
  }
  cancel() {
    const t = new Zi("TextLayer task cancelled.");
    this.#c?.cancel(t).catch(() => {
    }), this.#c = null, this.#t.reject(t);
  }
  get textDivs() {
    return this.#p;
  }
  get textContentItemsStr() {
    return this.#m;
  }
  #w(t) {
    if (this.#n)
      return;
    this.#a.ctx ??= rn.#x(this.#r);
    const n = this.#p, s = this.#m;
    for (const r of t) {
      if (n.length > h1) {
        yt("Ignoring additional textDivs for performance reasons."), this.#n = !0;
        return;
      }
      if (r.str === void 0) {
        if (r.type === "beginMarkedContentProps" || r.type === "beginMarkedContent") {
          const l = this.#e;
          this.#e = document.createElement("span"), this.#e.classList.add("markedContent"), r.id && this.#e.setAttribute("id", r.id), r.tag === "Artifact" && (this.#e.ariaHidden = !0), l.append(this.#e);
        } else r.type === "endMarkedContent" && (this.#e = this.#e.parentNode);
        continue;
      }
      s.push(r.str), this.#O(r);
    }
  }
  #O(t) {
    const n = document.createElement("span"), s = {
      angle: 0,
      canvasWidth: 0,
      hasText: t.str !== "",
      hasEOL: t.hasEOL,
      fontSize: 0
    };
    this.#p.push(n);
    const r = K.transform(this.#v, t.transform);
    let l = Math.atan2(r[1], r[0]);
    const c = this.#g[t.fontName];
    c.vertical && (l += Math.PI / 2);
    let u = this.#i && c.fontSubstitution || c.fontFamily;
    u = rn.fontFamilyMap.get(u) || u;
    const d = Math.hypot(r[2], r[3]), p = d * rn.#L(u, c, this.#r);
    let g, m;
    l === 0 ? (g = r[4], m = r[5] - p) : (g = r[4] + p * Math.sin(l), m = r[5] - p * Math.cos(l));
    const v = n.style;
    v.left = `${(100 * g / this.#l).toFixed(2)}%`, v.top = `${(100 * m / this.#o).toFixed(2)}%`, v.setProperty("--font-height", `${d.toFixed(2)}px`), v.fontFamily = u, s.fontSize = d, n.setAttribute("role", "presentation"), n.textContent = t.str, n.dir = t.dir, this.#i && (n.dataset.fontName = c.fontSubstitutionLoadedName || t.fontName), l !== 0 && (s.angle = l * (180 / Math.PI));
    let A = !1;
    if (t.str.length > 1)
      A = !0;
    else if (t.str !== " " && t.transform[0] !== t.transform[3]) {
      const S = Math.abs(t.transform[0]), E = Math.abs(t.transform[3]);
      S !== E && Math.max(S, E) / Math.min(S, E) > 1.5 && (A = !0);
    }
    if (A && (s.canvasWidth = c.vertical ? t.height : t.width), this.#y.set(n, s), this.#a.div = n, this.#a.properties = s, this.#M(this.#a), s.hasText && this.#e.append(n), s.hasEOL) {
      const S = document.createElement("br");
      S.setAttribute("role", "presentation"), this.#e.append(S);
    }
  }
  #M(t) {
    const {
      div: n,
      properties: s,
      ctx: r
    } = t, {
      style: l
    } = n;
    if (s.canvasWidth !== 0 && s.hasText) {
      const {
        fontFamily: c
      } = l, {
        canvasWidth: u,
        fontSize: d
      } = s;
      rn.#R(r, d * this.#f, c);
      const {
        width: p
      } = r.measureText(n.textContent);
      p > 0 && l.setProperty("--scale-x", u * this.#f / p);
    }
    s.angle !== 0 && l.setProperty("--rotate", `${s.angle}deg`);
  }
  static cleanup() {
    if (!(this.#_.size > 0)) {
      this.#b.clear();
      for (const {
        canvas: t
      } of this.#A.values())
        t.remove();
      this.#A.clear();
    }
  }
  static #x(t = null) {
    let n = this.#A.get(t ||= "");
    if (!n) {
      const s = document.createElement("canvas");
      s.style.cssText = "position:absolute;top:0;left:0;width:0;height:0;display:none;letter-spacing:normal;word-spacing:normal", s.lang = t, document.body.append(s), n = s.getContext("2d", {
        alpha: !1,
        willReadFrequently: !0
      }), this.#A.set(t, n), this.#T.set(n, {
        size: 0,
        family: ""
      });
    }
    return n;
  }
  static #R(t, n, s) {
    const r = this.#T.get(t);
    n === r.size && s === r.family || (t.font = `${n}px ${s}`, r.size = n, r.family = s);
  }
  static #N() {
    if (this.#E !== null)
      return;
    const t = document.createElement("div");
    t.style.opacity = 0, t.style.lineHeight = 1, t.style.fontSize = "1px", t.style.position = "absolute", t.textContent = "X", document.body.append(t), this.#E = t.getBoundingClientRect().height, t.remove();
  }
  static #L(t, n, s) {
    const r = this.#b.get(t);
    if (r)
      return r;
    const l = this.#x(s);
    l.canvas.width = l.canvas.height = Yy, this.#R(l, Yy, t);
    const c = l.measureText(""), u = c.fontBoundingBoxAscent, d = Math.abs(c.fontBoundingBoxDescent);
    l.canvas.width = l.canvas.height = 0;
    let p = 0.8;
    return u ? p = u / (u + d) : (Yt.platform.isFirefox && yt("Enable the `dom.textMetrics.fontBoundingBox.enabled` preference in `about:config` to improve TextLayer rendering."), n.ascent ? p = n.ascent : n.descent && (p = 1 + n.descent)), this.#b.set(t, p), p;
  }
}
const d1 = 100;
function m0(y = {}) {
  const t = new wd(), {
    docId: n
  } = t, s = y.url ? yS(y.url) : null, r = y.data ? vS(y.data) : null, l = y.httpHeaders || null, c = y.withCredentials === !0, u = y.password ?? null, d = y.range instanceof y0 ? y.range : null, p = Number.isInteger(y.rangeChunkSize) && y.rangeChunkSize > 0 ? y.rangeChunkSize : 2 ** 16;
  let g = y.worker instanceof jr ? y.worker : null;
  const m = y.verbosity, v = typeof y.docBaseUrl == "string" && !Zl(y.docBaseUrl) ? y.docBaseUrl : null, A = xl(y.cMapUrl), S = y.cMapPacked !== !1, E = xl(y.iccUrl), _ = xl(y.standardFontDataUrl), w = xl(y.wasmUrl), C = y.stopAtErrors !== !0, M = Number.isInteger(y.maxImageSize) && y.maxImageSize > -1 ? y.maxImageSize : -1, B = typeof y.isOffscreenCanvasSupported == "boolean" ? y.isOffscreenCanvasSupported : !on, N = typeof y.isImageDecoderSupported == "boolean" ? y.isImageDecoderSupported : !on, P = Number.isInteger(y.canvasMaxAreaInBytes) ? y.canvasMaxAreaInBytes : -1, U = typeof y.disableFontFace == "boolean" ? y.disableFontFace : on, j = y.fontExtraProperties === !0, q = y.enableXfa === !0, $ = y.ownerDocument || globalThis.document, W = y.disableRange === !0, tt = y.disableStream === !0, ct = y.disableAutoFetch === !0, gt = y.pdfBug === !0, vt = y.CanvasFactory || (on ? CS : ES), H = y.FilterFactory || (on ? wS : TS), X = y.BinaryDataFactory || (on ? xS : Ly), nt = y.enableHWA === !0, St = y.enableWebGPU === !0 ? NS() : Promise.resolve(!1), me = y.useWasm !== !1, Dt = y.pagesMapper || new u1(), Bt = typeof y.useSystemFonts == "boolean" ? y.useSystemFonts : !on && !U, O = typeof y.useWorkerFetch == "boolean" ? y.useWorkerFetch : !!(X === Ly && A && S && _ && w && Ir(A, document.baseURI) && Ir(_, document.baseURI) && Ir(w, document.baseURI)), Y = null;
  kA(m);
  const at = {
    canvasFactory: new vt({
      ownerDocument: $,
      enableHWA: nt
    }),
    filterFactory: new H({
      docId: n,
      ownerDocument: $
    }),
    binaryDataFactory: O ? null : new X({
      cMapUrl: A,
      standardFontDataUrl: _,
      wasmUrl: w
    })
  };
  g || (g = jr.create({
    verbosity: m,
    port: Na.workerPort
  }), t._worker = g);
  const Z = {
    docId: n,
    apiVersion: "6.3.289",
    data: r,
    password: u,
    disableAutoFetch: ct,
    rangeChunkSize: p,
    docBaseUrl: v,
    enableXfa: q,
    evaluatorOptions: {
      maxImageSize: M,
      disableFontFace: U,
      ignoreErrors: C,
      isOffscreenCanvasSupported: B,
      isImageDecoderSupported: N,
      canvasMaxAreaInBytes: P,
      fontExtraProperties: j,
      useSystemFonts: Bt,
      useWasm: me,
      useWorkerFetch: O,
      cMapUrl: A,
      cMapPacked: S,
      iccUrl: E,
      standardFontDataUrl: _,
      wasmUrl: w,
      hasGPU: !1
    }
  }, Ot = {
    ownerDocument: $,
    pdfBug: gt,
    styleElement: Y,
    enableHWA: nt,
    loadingParams: {
      disableAutoFetch: ct,
      enableXfa: q
    }
  };
  return Promise.all([g.promise, St]).then(function([, Nt]) {
    if (g.destroyed)
      throw new Error("Worker was destroyed");
    Z.evaluatorOptions.hasGPU = Nt;
    const Lt = g.messageHandler.sendWithPromise("GetDocRequest", Z, r ? [r.buffer] : null);
    let st;
    if (!r) if (d)
      st = new $S({
        pdfDataRangeTransport: d,
        disableRange: W,
        disableStream: tt
      });
    else if (s) {
      const ut = o1(s);
      st = new ut({
        url: s,
        httpHeaders: l,
        withCredentials: c,
        rangeChunkSize: p,
        disableRange: W,
        disableStream: tt
      });
    } else
      throw new Error("getDocument - expected either `data`, `range`, or `url` parameter.");
    return Lt.then((ut) => {
      if (g.destroyed)
        throw new Error("Worker was destroyed");
      const un = new Br(n, ut, g.port), Pa = new p1(un, t, st, Ot, at, Dt);
      if (t._transport = Pa, t.destroyed)
        throw new Error("Loading aborted");
      un.send("Ready", null);
    });
  }).catch(t._capability.reject).finally(t._setupCapability.resolve), t;
}
class wd {
  static #t = 0;
  _capability = Promise.withResolvers();
  _setupCapability = Promise.withResolvers();
  _transport = null;
  _worker = null;
  docId = `d${wd.#t++}`;
  destroyed = !1;
  onPassword = null;
  onProgress = null;
  get promise() {
    return this._capability.promise;
  }
  async destroy() {
    this.destroyed = !0, this._capability.promise.catch(() => {
    });
    try {
      this._worker?.port && (this._worker._pendingDestroy = !0), await this._setupCapability.promise, await this._transport?.destroy();
    } catch (t) {
      throw this._worker?.port && delete this._worker._pendingDestroy, t;
    }
    this._transport = null, this._worker?.destroy(), this._worker = null;
  }
  async getData() {
    return this._transport.getData();
  }
}
class y0 {
  #t = Promise.withResolvers();
  #e = null;
  constructor(t, n, s = !1, r = null) {
    this.length = t, this.initialData = n, this.progressiveDone = s, this.contentDispositionFilename = r;
  }
  onDataRange(t, n) {
    this.#e({
      type: "range",
      begin: t,
      chunk: n
    });
  }
  onDataProgressiveRead(t) {
    this.#t.promise.then(() => {
      this.#e({
        type: "progressiveRead",
        chunk: t
      });
    });
  }
  onDataProgressiveDone() {
    this.#t.promise.then(() => {
      this.#e({
        type: "progressiveDone"
      });
    });
  }
  transportReady(t) {
    this.#e = t, this.#t.resolve();
  }
  requestDataRange(t, n) {
    kt("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {
  }
}
class f1 {
  constructor(t, n) {
    this._pdfInfo = t, this._transport = n;
  }
  get pagesMapper() {
    return this._transport.pagesMapper;
  }
  get annotationStorage() {
    return this._transport.annotationStorage;
  }
  get canvasFactory() {
    return this._transport.canvasFactory;
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get numPages() {
    return this._pdfInfo.numPages;
  }
  get fingerprints() {
    return this._pdfInfo.fingerprints;
  }
  get isPureXfa() {
    return lt(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  get allXfaHtml() {
    return this._transport._htmlForXfa;
  }
  getPage(t) {
    return this._transport.getPage(t);
  }
  getPageIndex(t) {
    return this._transport.getPageIndex(t);
  }
  getDestinations() {
    return this._transport.getDestinations();
  }
  getDestination(t) {
    return this._transport.getDestination(t);
  }
  getPageLabels() {
    return this._transport.getPageLabels();
  }
  getPageLayout() {
    return this._transport.getPageLayout();
  }
  getPageMode() {
    return this._transport.getPageMode();
  }
  getViewerPreferences() {
    return this._transport.getViewerPreferences();
  }
  getOpenAction() {
    return this._transport.getOpenAction();
  }
  getAttachments() {
    return this._transport.getAttachments();
  }
  getAttachmentContent(t) {
    return this._transport.getAttachmentContent(t);
  }
  getAnnotationsByType(t, n) {
    return this._transport.getAnnotationsByType(t, n);
  }
  getJSActions() {
    return this._transport.getDocJSActions();
  }
  getOutline() {
    return this._transport.getOutline();
  }
  getOptionalContentConfig({
    intent: t = "display"
  } = {}) {
    const {
      renderingIntent: n
    } = this._transport.getRenderingIntent(t);
    return this._transport.getOptionalContentConfig(n);
  }
  getPermissions() {
    return this._transport.getPermissions();
  }
  getMetadata() {
    return this._transport.getMetadata();
  }
  getMarkInfo() {
    return this._transport.getMarkInfo();
  }
  getData() {
    return this._transport.getData();
  }
  saveDocument() {
    return this._transport.saveDocument();
  }
  extractPages(t, n = null) {
    return this._transport.extractPages(t, n);
  }
  getDownloadInfo() {
    return this._transport.downloadInfoCapability.promise;
  }
  cleanup(t = !1) {
    return this._transport.startCleanup(t || this.isPureXfa);
  }
  cachedPageNumber(t) {
    return this._transport.cachedPageNumber(t);
  }
  get loadingParams() {
    return this._transport.loadingParams;
  }
  get loadingTask() {
    return this._transport.loadingTask;
  }
  getFieldObjects() {
    return this._transport.getFieldObjects();
  }
  getSignatures() {
    return this._transport.getSignatures();
  }
  getSignatureData(t) {
    return this._transport.getSignatureData(t);
  }
  hasJSActions() {
    return this._transport.hasJSActions();
  }
  getCalculationOrderIds() {
    return this._transport.getCalculationOrderIds();
  }
}
class Cd {
  #t = !1;
  #e = null;
  constructor(t, n, s, r, l = !1) {
    this._pageIndex = t, this._pageInfo = n, this._transport = s, this._stats = l ? new by() : null, this._pdfBug = l, this.commonObjs = s.commonObjs, this.objs = new g0(), this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1, this.recordedBBoxes = null, this.#e = r, this.imageCoordinates = null;
  }
  clone(t) {
    const n = new Cd(t, this._pageInfo, this._transport, this.#e, this._pdfBug);
    return n.clonedFromIndex = this.clonedFromIndex ?? this._pageIndex, this._transport.updatePage(n), n;
  }
  get pageNumber() {
    return this._pageIndex + 1;
  }
  set pageNumber(t) {
    this._pageIndex = t - 1, this._transport.updatePage(this);
  }
  get rotate() {
    return this._pageInfo.rotate;
  }
  get ref() {
    return this._pageInfo.ref;
  }
  get userUnit() {
    return this._pageInfo.userUnit;
  }
  get view() {
    return this._pageInfo.view;
  }
  getViewport({
    scale: t,
    rotation: n = this.rotate,
    offsetX: s = 0,
    offsetY: r = 0,
    dontFlip: l = !1
  } = {}) {
    return new Yr({
      viewBox: this.view,
      userUnit: this.userUnit,
      scale: t,
      rotation: n,
      offsetX: s,
      offsetY: r,
      dontFlip: l
    });
  }
  getAnnotations({
    intent: t = "display"
  } = {}) {
    const {
      renderingIntent: n
    } = this._transport.getRenderingIntent(t);
    return this._transport.getAnnotations(this._pageIndex, n);
  }
  getJSActions() {
    return this._transport.getPageJSActions(this._pageIndex);
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get isPureXfa() {
    return lt(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  async getXfa() {
    return this._transport._htmlForXfa?.children[this._pageIndex] || null;
  }
  render({
    canvasContext: t,
    canvas: n = t.canvas,
    viewport: s,
    intent: r = "display",
    annotationMode: l = Ki.ENABLE,
    transform: c = null,
    background: u = null,
    optionalContentConfigPromise: d = null,
    annotationCanvasMap: p = null,
    pageColors: g = null,
    printAnnotationStorage: m = null,
    isEditing: v = !1,
    recordImages: A = !1,
    recordOperations: S = !1,
    operationsFilter: E = null
  }) {
    this._stats?.time("Overall");
    const _ = this._transport.getRenderingIntent(r, l, m, v), {
      renderingIntent: w,
      cacheKey: C
    } = _;
    this.#t = !1, d ||= this._transport.getOptionalContentConfig(w);
    const M = this._intentStates.getOrInsertComputed(C, id);
    M.streamReaderCancelTimeout && (clearTimeout(M.streamReaderCancelTimeout), M.streamReaderCancelTimeout = null);
    const B = !!(w & an.PRINT);
    M.displayReadyCapability || (M.displayReadyCapability = Promise.withResolvers(), M.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, this._stats?.time("Page Request"), this._pumpOperatorList(_));
    const N = !!(this._pdfBug && globalThis.StepperManager?.enabled), P = !!n && !this.recordedBBoxes && (S || N), U = !!n && !this.imageCoordinates && A, j = (ct) => {
      if (M.renderTasks.delete(W), P) {
        const gt = W.gfx?.dependencyTracker.take();
        gt && (W.stepper?.setOperatorBBoxes(gt, W.gfx.dependencyTracker.takeDebugMetadata()), S && (this.recordedBBoxes = gt));
      }
      U && !ct && (this.imageCoordinates = W.gfx?.imagesTracker.take()), B && (this.#t = !0), this.#n(), ct ? (W.capability.reject(ct), this._abortOperatorList({
        intentState: M,
        reason: ct instanceof Error ? ct : new Error(ct)
      })) : W.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), globalThis.Stats?.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
    };
    let q = null, $ = null;
    (P || U) && ($ = new aS(n, M.operatorList.length)), P && (q = new rS($, N));
    const W = new Oa({
      callback: j,
      params: {
        canvas: n,
        canvasContext: t,
        dependencyTracker: q ?? $,
        imagesTracker: U ? new Hl(n) : null,
        viewport: s,
        transform: c,
        background: u
      },
      objs: this.objs,
      commonObjs: this.commonObjs,
      annotationCanvasMap: p,
      operatorList: M.operatorList,
      pageIndex: this._pageIndex,
      canvasFactory: this._transport.canvasFactory,
      filterFactory: this._transport.filterFactory,
      useRequestAnimationFrame: !B,
      pdfBug: this._pdfBug,
      pageColors: g,
      enableHWA: this._transport.enableHWA,
      operationsFilter: E
    });
    (M.renderTasks ||= /* @__PURE__ */ new Set()).add(W);
    const tt = W.task;
    return Promise.all([M.displayReadyCapability.promise, d]).then(([ct, gt]) => {
      if (this.destroyed) {
        j();
        return;
      }
      if (this._stats?.time("Rendering"), !(gt.renderingIntent & w))
        throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
      W.initializeGraphics({
        transparency: ct,
        optionalContentConfig: gt
      }), W.operatorListChanged();
    }).catch(j), tt;
  }
  getOperatorList({
    intent: t = "display",
    annotationMode: n = Ki.ENABLE,
    printAnnotationStorage: s = null,
    isEditing: r = !1
  } = {}) {
    function l() {
      u.operatorList.lastChunk && (u.opListReadCapability.resolve(u.operatorList), u.renderTasks.delete(d));
    }
    const c = this._transport.getRenderingIntent(t, n, s, r, !0), u = this._intentStates.getOrInsertComputed(c.cacheKey, id);
    let d;
    return u.opListReadCapability || (d = /* @__PURE__ */ Object.create(null), d.operatorListChanged = l, u.opListReadCapability = Promise.withResolvers(), (u.renderTasks ||= /* @__PURE__ */ new Set()).add(d), u.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, this._stats?.time("Page Request"), this._pumpOperatorList(c)), u.opListReadCapability.promise;
  }
  streamTextContent({
    includeMarkedContent: t = !1,
    disableNormalization: n = !1
  } = {}) {
    return this._transport.messageHandler.sendWithStream("GetTextContent", {
      pageId: this.#e.getPageId(this._pageIndex + 1) - 1,
      pageIndex: this._pageIndex,
      includeMarkedContent: t === !0,
      disableNormalization: n === !0
    }, {
      highWaterMark: 100,
      size(r) {
        return r.items.length;
      }
    });
  }
  async getTextContent(t = {}) {
    if (this._transport._htmlForXfa)
      return this.getXfa().then((r) => Ur.textContent(r));
    const n = this.streamTextContent(t), s = {
      items: [],
      styles: /* @__PURE__ */ Object.create(null),
      lang: null
    };
    for await (const r of n)
      s.lang ??= r.lang, Object.assign(s.styles, r.styles), s.items.push(...r.items);
    return s;
  }
  getStructTree() {
    return this._transport.getStructTree(this._pageIndex);
  }
  _destroy() {
    this.destroyed = !0;
    const t = [];
    for (const n of this._intentStates.values())
      if (this._abortOperatorList({
        intentState: n,
        reason: new Error("Page was destroyed."),
        force: !0
      }), !n.opListReadCapability)
        for (const s of n.renderTasks)
          t.push(s.completed), s.cancel();
    return this.objs.clear(), this.#t = !1, Promise.all(t);
  }
  cleanup(t = !1) {
    this.#t = !0;
    const n = this.#n();
    return t && n && (this._stats &&= new by()), n;
  }
  #n() {
    if (!this.#t || this.destroyed)
      return !1;
    for (const {
      renderTasks: t,
      operatorList: n
    } of this._intentStates.values())
      if (t.size > 0 || !n.lastChunk)
        return !1;
    return this._intentStates.clear(), this.objs.clear(), this.#t = !1, !0;
  }
  _startRenderPage(t, n) {
    const s = this._intentStates.get(n);
    s && (this._stats?.timeEnd("Page Request"), s.displayReadyCapability?.resolve(t));
  }
  _renderPageChunk(t, n) {
    for (let s = 0, r = t.length; s < r; s++)
      n.operatorList.fnArray.push(t.fnArray[s]), n.operatorList.argsArray.push(t.argsArray[s]);
    n.operatorList.lastChunk = t.lastChunk, n.operatorList.separateAnnots = t.separateAnnots;
    for (const s of n.renderTasks)
      s.operatorListChanged();
    t.lastChunk && this.#n();
  }
  _pumpOperatorList({
    renderingIntent: t,
    cacheKey: n,
    annotationStorageSerializable: s,
    modifiedIds: r
  }) {
    const {
      map: l,
      transfer: c
    } = s, d = this._transport.messageHandler.sendWithStream("GetOperatorList", {
      pageId: this.#e.getPageId(this._pageIndex + 1) - 1,
      pageIndex: this._pageIndex,
      intent: t,
      cacheKey: n,
      annotationStorage: l,
      modifiedIds: r
    }, void 0, c).getReader(), p = this._intentStates.get(n);
    p.streamReader = d;
    const g = () => {
      d.read().then(({
        value: m,
        done: v
      }) => {
        if (v) {
          p.streamReader = null;
          return;
        }
        this._transport.destroyed || (this._renderPageChunk(m, p), g());
      }, (m) => {
        if (p.streamReader = null, !this._transport.destroyed) {
          if (p.operatorList) {
            p.operatorList.lastChunk = !0;
            for (const v of p.renderTasks)
              v.operatorListChanged();
            this.#n();
          }
          if (p.displayReadyCapability)
            p.displayReadyCapability.reject(m);
          else if (p.opListReadCapability)
            p.opListReadCapability.reject(m);
          else
            throw m;
        }
      });
    };
    g();
  }
  _abortOperatorList({
    intentState: t,
    reason: n,
    force: s = !1
  }) {
    if (t.streamReader) {
      if (t.streamReaderCancelTimeout && (clearTimeout(t.streamReaderCancelTimeout), t.streamReaderCancelTimeout = null), !s) {
        if (t.renderTasks.size > 0)
          return;
        if (n instanceof vd) {
          let r = d1;
          n.extraDelay > 0 && n.extraDelay < 1e3 && (r += n.extraDelay), t.streamReaderCancelTimeout = setTimeout(() => {
            t.streamReaderCancelTimeout = null, this._abortOperatorList({
              intentState: t,
              reason: n,
              force: !0
            });
          }, r);
          return;
        }
      }
      if (t.streamReader.cancel(new Zi(n.message)).catch(() => {
      }), t.streamReader = null, !this._transport.destroyed) {
        for (const [r, l] of this._intentStates)
          if (l === t) {
            this._intentStates.delete(r);
            break;
          }
        this.cleanup();
      }
    }
  }
  get stats() {
    return this._stats;
  }
}
var Qi, Nn, yi, Cs, Yl, xs, Ms, Ie, Fl, v0, b0, Pr, Ra, zl;
const re = class re {
  constructor({
    name: t = null,
    port: n = null,
    verbosity: s = BA()
  } = {}) {
    qn(this, Ie);
    qn(this, Qi, Promise.withResolvers());
    qn(this, Nn, null);
    qn(this, yi, null);
    qn(this, Cs, null);
    if (this.name = t, this.destroyed = !1, this.verbosity = s, n) {
      if (Jt(re, Ms).has(n))
        throw new Error("Cannot use more than one PDFWorker per port.");
      Jt(re, Ms).set(n, this), Kn(this, Ie, v0).call(this, n);
    } else
      Kn(this, Ie, b0).call(this);
  }
  get promise() {
    return Jt(this, Qi).promise;
  }
  get port() {
    return Jt(this, yi);
  }
  get messageHandler() {
    return Jt(this, Nn);
  }
  destroy() {
    this.destroyed = !0, Jt(this, Cs)?.terminate(), Ve(this, Cs, null), Jt(re, Ms).delete(Jt(this, yi)), Ve(this, yi, null), Jt(this, Nn)?.destroy(), Ve(this, Nn, null);
  }
  static create(t) {
    const n = Jt(this, Ms).get(t?.port);
    if (n) {
      if (n._pendingDestroy)
        throw new Error("PDFWorker.create - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      return n;
    }
    return new re(t);
  }
  static get workerSrc() {
    if (Na.workerSrc)
      return Na.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get _setupFakeWorkerGlobal() {
    return lt(this, "_setupFakeWorkerGlobal", (async () => Jt(this, Ra, zl) ? Jt(this, Ra, zl) : (await import(
      /*webpackIgnore: true*/
      /*@vite-ignore*/
      this.workerSrc
    )).WorkerMessageHandler)());
  }
};
Qi = new WeakMap(), Nn = new WeakMap(), yi = new WeakMap(), Cs = new WeakMap(), Yl = new WeakMap(), xs = new WeakMap(), Ms = new WeakMap(), Ie = new WeakSet(), Fl = function() {
  Jt(this, Qi).resolve(), Jt(this, Nn).send("configure", {
    verbosity: this.verbosity
  });
}, v0 = function(t) {
  Ve(this, yi, t), Ve(this, Nn, new Br("main", "worker", t)), Jt(this, Nn).on("ready", () => {
  }), Kn(this, Ie, Fl).call(this);
}, b0 = function() {
  if (Jt(re, xs) || Jt(re, Ra, zl)) {
    Kn(this, Ie, Pr).call(this);
    return;
  }
  let {
    workerSrc: t
  } = re;
  try {
    re._isSameOrigin(window.location, t) || (t = re._createCDNWrapper(new URL(t, window.location).href));
    const n = new Worker(t, {
      type: "module"
    }), s = new Br("main", "worker", n), r = () => {
      l.abort(), s.destroy(), n.terminate(), this.destroyed ? Jt(this, Qi).reject(new Error("Worker was destroyed")) : Kn(this, Ie, Pr).call(this);
    }, l = new AbortController();
    n.addEventListener("error", () => {
      Jt(this, Cs) || r();
    }, {
      signal: l.signal
    }), s.on("test", (u) => {
      if (l.abort(), this.destroyed || !u) {
        r();
        return;
      }
      Ve(this, Nn, s), Ve(this, yi, n), Ve(this, Cs, n), Kn(this, Ie, Fl).call(this);
    }), s.on("ready", (u) => {
      if (l.abort(), this.destroyed) {
        r();
        return;
      }
      try {
        c();
      } catch {
        Kn(this, Ie, Pr).call(this);
      }
    });
    const c = () => {
      const u = new Uint8Array();
      s.send("test", u, [u.buffer]);
    };
    c();
    return;
  } catch {
    Kl("The worker has been disabled.");
  }
  Kn(this, Ie, Pr).call(this);
}, Pr = function() {
  Jt(re, xs) || (yt("Setting up fake worker."), Ve(re, xs, !0)), re._setupFakeWorkerGlobal.then((t) => {
    if (this.destroyed) {
      Jt(this, Qi).reject(new Error("Worker was destroyed"));
      return;
    }
    const n = new SS();
    Ve(this, yi, n);
    const s = `fake${cy(re, Yl)._++}`, r = new Br(s + "_worker", s, n);
    t.setup(r, n), Ve(this, Nn, new Br(s, s + "_worker", n)), Kn(this, Ie, Fl).call(this);
  }).catch((t) => {
    Jt(this, Qi).reject(new Error(`Setting up fake worker failed: "${t.message}".`));
  });
}, Ra = new WeakSet(), zl = function() {
  try {
    return globalThis.pdfjsWorker?.WorkerMessageHandler || null;
  } catch {
    return null;
  }
}, qn(re, Ra), qn(re, Yl, 0), qn(re, xs, !1), qn(re, Ms, /* @__PURE__ */ new WeakMap()), on && (Ve(re, xs, !0), Na.workerSrc ||= "./pdf.worker.mjs"), re._isSameOrigin = (t, n) => {
  const s = URL.parse(t);
  if (!s?.origin || s.origin === "null")
    return !1;
  const r = new URL(n, s);
  return s.origin === r.origin;
}, re._createCDNWrapper = (t) => {
  const n = `await import("${t}");`;
  return URL.createObjectURL(new Blob([n], {
    type: "text/javascript"
  }));
};
let jr = re;
class p1 {
  downloadInfoCapability = Promise.withResolvers();
  #t = null;
  #e = /* @__PURE__ */ new Map();
  #n = null;
  #i = /* @__PURE__ */ new Map();
  #s = /* @__PURE__ */ new Map();
  #r = /* @__PURE__ */ new Map();
  #a = null;
  constructor(t, n, s, r, l, c) {
    this.messageHandler = t, this.loadingTask = n, this.#n = s, this.commonObjs = new g0(), this.fontLoader = new lS({
      ownerDocument: r.ownerDocument,
      styleElement: r.styleElement
    }), this.enableHWA = r.enableHWA, this.loadingParams = r.loadingParams, this._params = r, this.canvasFactory = l.canvasFactory, this.filterFactory = l.filterFactory, this.binaryDataFactory = l.binaryDataFactory, this.pagesMapper = c, this.destroyed = !1, this.destroyCapability = null, this.setupMessageHandler();
  }
  updatePage(t) {
    const {
      _pageIndex: n
    } = t;
    this.#i.set(n, t), this.#s.set(n, Promise.resolve(t));
  }
  #o(t, n = null) {
    return this.#e.getOrInsertComputed(t, () => this.messageHandler.sendWithPromise(t, n));
  }
  #l({
    loaded: t,
    total: n
  }) {
    this.loadingTask.onProgress?.({
      loaded: t,
      total: n,
      percent: n ? $t(Math.round(t / n * 100), 0, 100) : NaN
    });
  }
  get annotationStorage() {
    return lt(this, "annotationStorage", new Ed());
  }
  getRenderingIntent(t, n = Ki.ENABLE, s = null, r = !1, l = !1) {
    let c = an.DISPLAY, u = Hr;
    switch (t) {
      case "any":
        c = an.ANY;
        break;
      case "display":
        break;
      case "print":
        c = an.PRINT;
        break;
      default:
        yt(`getRenderingIntent - invalid intent: ${t}`);
    }
    const d = c & an.PRINT && s instanceof i0 ? s : this.annotationStorage;
    switch (n) {
      case Ki.DISABLE:
        c += an.ANNOTATIONS_DISABLE;
        break;
      case Ki.ENABLE:
        break;
      case Ki.ENABLE_FORMS:
        c += an.ANNOTATIONS_FORMS;
        break;
      case Ki.ENABLE_STORAGE:
        c += an.ANNOTATIONS_STORAGE, u = d.serializable;
        break;
      default:
        yt(`getRenderingIntent - invalid annotationMode: ${n}`);
    }
    r && (c += an.IS_EDITING), l && (c += an.OPLIST);
    const {
      ids: p,
      hash: g
    } = d.modifiedIds, m = [c, u.hash, g];
    return {
      renderingIntent: c,
      cacheKey: m.join("_"),
      annotationStorageSerializable: u,
      modifiedIds: p
    };
  }
  destroy() {
    if (this.destroyCapability)
      return this.destroyCapability.promise;
    this.destroyed = !0, this.destroyCapability = Promise.withResolvers(), this.#a?.reject(new Error("Worker was destroyed during onPassword callback"));
    const t = [];
    for (const s of this.#i.values())
      t.push(s._destroy());
    this.#i.clear(), this.#s.clear(), this.#r.clear(), Object.hasOwn(this, "annotationStorage") && this.annotationStorage.resetModified();
    const n = this.messageHandler.sendWithPromise("Terminate", null);
    return t.push(n), Promise.all(t).then(() => {
      this.commonObjs.clear(), this.fontLoader.clear(), this.#e.clear(), this.filterFactory.destroy(), rn.cleanup(), this.#n?.cancelAllRequests(new Zi("Worker was terminated.")), this.messageHandler?.destroy(), this.messageHandler = null, this.destroyCapability.resolve();
    }, this.destroyCapability.reject), this.destroyCapability.promise;
  }
  setupMessageHandler() {
    const {
      messageHandler: t,
      loadingTask: n
    } = this;
    t.on("GetReader", (s, r) => {
      ie(this.#n, "GetReader - no `BasePDFStream` instance available."), this.#t = this.#n.getFullReader(), this.#t.onProgress = (l) => this.#l(l), r.onPull = () => {
        this.#t.read().then(function({
          value: l,
          done: c
        }) {
          if (c) {
            r.close();
            return;
          }
          ie(l instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), r.enqueue(new Uint8Array(l), 1, [l]);
        }).catch((l) => {
          r.error(l);
        });
      }, r.onCancel = (l) => {
        this.#t.cancel(l), r.ready.catch((c) => {
          if (!this.destroyed)
            throw c;
        });
      };
    }), t.on("ReaderHeadersReady", async (s) => {
      await this.#t.headersReady;
      const {
        isStreamingSupported: r,
        isRangeSupported: l,
        contentLength: c
      } = this.#t;
      return r && l && (this.#t.onProgress = null), {
        isStreamingSupported: r,
        isRangeSupported: l,
        contentLength: c
      };
    }), t.on("GetRangeReader", (s, r) => {
      ie(this.#n, "GetRangeReader - no `BasePDFStream` instance available.");
      const l = this.#n.getRangeReader(s.begin, s.end);
      if (!l) {
        r.close();
        return;
      }
      r.onPull = () => {
        l.read().then(function({
          value: c,
          done: u
        }) {
          if (u) {
            r.close();
            return;
          }
          ie(c instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), r.enqueue(new Uint8Array(c), 1, [c]);
        }).catch((c) => {
          r.error(c);
        });
      }, r.onCancel = (c) => {
        l.cancel(c), r.ready.catch((u) => {
          if (!this.destroyed)
            throw u;
        });
      };
    }), t.on("GetDoc", ({
      pdfInfo: s
    }) => {
      this.pagesMapper.pagesNumber = s.numPages, this._numPages = s.numPages, this._htmlForXfa = s.htmlForXfa, delete s.htmlForXfa, n._capability.resolve(new f1(s, this));
    }), t.on("DocException", (s) => {
      n._capability.reject(Ye(s));
    }), t.on("PasswordRequest", (s) => {
      this.#a = Promise.withResolvers();
      try {
        if (!n.onPassword)
          throw Ye(s);
        const r = (l) => {
          l instanceof Error ? this.#a.reject(l) : this.#a.resolve({
            password: l
          });
        };
        n.onPassword(r, s.code);
      } catch (r) {
        this.#a.reject(r);
      }
      return this.#a.promise;
    }), t.on("DataLoaded", (s) => {
      this.#l({
        loaded: s.length,
        total: s.length
      }), this.downloadInfoCapability.resolve(s);
    }), t.on("StartRenderPage", (s) => {
      if (this.destroyed)
        return;
      this.#i.get(s.pageIndex)._startRenderPage(s.transparency, s.cacheKey);
    }), t.on("commonobj", ([s, r, l]) => {
      if (this.destroyed || this.commonObjs.has(s))
        return null;
      switch (r) {
        case "Font":
          if ("error" in l) {
            const m = l.error;
            yt(`Error during font loading: ${m}`), this.commonObjs.resolve(s, m);
            break;
          }
          const c = new pS(l), u = this._params.pdfBug && globalThis.FontInspector?.enabled ? (m, v) => globalThis.FontInspector.fontAdded(m, v) : null, d = new cS(c, u, l.charProcOperatorList, l.extra);
          this.fontLoader.bind(d).catch(() => t.sendWithPromise("FontFallback", {
            id: s
          })).finally(() => {
            d.fontExtraProperties || d.clearData(), this.commonObjs.resolve(s, d);
          });
          break;
        case "CopyLocalImage":
          const {
            imageRef: p
          } = l;
          ie(p, "The imageRef must be defined.");
          for (const m of this.#i.values())
            for (const [, v] of m.objs) {
              if (v?.ref !== p)
                continue;
              if (!v.dataLen)
                return null;
              const A = structuredClone(v);
              return this.commonObjs.resolve(s, A), v.dataLen;
            }
          break;
        case "FontPath":
          this.commonObjs.resolve(s, new mS(l));
          break;
        case "Image":
          this.commonObjs.resolve(s, l);
          break;
        case "Pattern":
          const g = new gS(l);
          this.commonObjs.resolve(s, g.getIR());
          break;
        default:
          throw new Error(`Got unknown common object type ${r}`);
      }
      return null;
    }), t.on("obj", ([s, r, l, c]) => {
      if (this.destroyed)
        return;
      const u = this.#i.get(r);
      if (!u.objs.has(s)) {
        if (u._intentStates.size === 0) {
          c?.bitmap?.close();
          return;
        }
        switch (l) {
          case "Image":
          case "Pattern":
            u.objs.resolve(s, c);
            break;
          default:
            throw new Error(`Got unknown object type ${l}`);
        }
      }
    }), t.on("DocProgress", (s) => {
      this.destroyed || this.#l(s);
    }), t.on("FetchBinaryData", async (s) => {
      if (this.destroyed)
        throw new Error("Worker was destroyed.");
      if (!this.binaryDataFactory)
        throw new Error("`BinaryDataFactory` not initialized, see the `useWorkerFetch` parameter.");
      return this.binaryDataFactory.fetch(s);
    });
  }
  getData() {
    return this.messageHandler.sendWithPromise("GetData", null);
  }
  saveDocument() {
    this.annotationStorage.size <= 0 && yt("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
    const {
      map: t,
      transfer: n
    } = this.annotationStorage.serializable;
    return this.messageHandler.sendWithPromise("SaveDocument", {
      isPureXfa: !!this._htmlForXfa,
      numPages: this._numPages,
      annotationStorage: t,
      filename: this.#t?.filename ?? null
    }, n).finally(() => {
      this.annotationStorage.resetModified();
    });
  }
  extractPages(t, n = null) {
    const s = {
      pageInfos: t
    };
    let r;
    const l = globalThis.ImageBitmap;
    if (typeof l == "function") {
      const c = Array.isArray(t) ? t : [t];
      for (const u of c)
        u?.image instanceof l && (r ||= []).push(u.image);
    }
    if (this.annotationStorage.size > 0) {
      const c = this.annotationStorage.serializable;
      let {
        map: u
      } = c;
      c.transfer?.length && (r ? r.push(...c.transfer) : r = c.transfer);
      const d = this.pagesMapper.getMapping();
      if (d) {
        const p = /* @__PURE__ */ new Map();
        for (const [g, m] of u) {
          if (m?.pageIndex !== void 0 && m.pageIndex >= 0 && m.pageIndex < d.length) {
            const v = n?.[m.pageIndex] ?? 0, A = d[m.pageIndex] - 1;
            if (A !== m.pageIndex || v !== 0) {
              p.set(g, {
                ...m,
                pageIndex: A,
                copyLevel: v
              });
              continue;
            }
          }
          p.set(g, m);
        }
        u = p;
      }
      s.annotationStorage = u;
    }
    return this.messageHandler.sendWithPromise("ExtractPages", s, r).finally(() => {
      this.annotationStorage.resetModified();
    });
  }
  getPage(t) {
    if (!Number.isInteger(t) || t <= 0 || t > this.pagesMapper.pagesNumber)
      return Promise.reject(new Error("Invalid page request."));
    const n = t - 1, s = this.pagesMapper.getPageId(t) - 1, r = this.#s.get(n);
    if (r)
      return r;
    const l = this.messageHandler.sendWithPromise("GetPage", {
      pageIndex: s
    }).then((c) => {
      if (this.destroyed)
        throw new Error("Transport destroyed");
      c.refStr && this.#r.set(c.refStr, s);
      const u = new Cd(n, c, this, this.pagesMapper, this._params.pdfBug);
      return this.#i.set(n, u), u;
    });
    return this.#s.set(n, l), l;
  }
  async getPageIndex(t) {
    if (!ud(t))
      throw new Error("Invalid pageIndex request.");
    const n = await this.messageHandler.sendWithPromise("GetPageIndex", {
      num: t.num,
      gen: t.gen
    }), s = this.pagesMapper.getPageNumber(n + 1);
    if (s === 0)
      throw new Error("GetPageIndex: page has been removed.");
    return s - 1;
  }
  getAnnotations(t, n) {
    return this.messageHandler.sendWithPromise("GetAnnotations", {
      pageIndex: this.pagesMapper.getPageId(t + 1) - 1,
      intent: n
    });
  }
  getFieldObjects() {
    return this.#o("GetFieldObjects");
  }
  getSignatures() {
    return this.#o("GetSignatures");
  }
  getSignatureData(t) {
    return this.messageHandler.sendWithPromise("GetSignatureData", t);
  }
  hasJSActions() {
    return this.#o("HasJSActions");
  }
  getCalculationOrderIds() {
    return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
  }
  getDestinations() {
    return this.messageHandler.sendWithPromise("GetDestinations", null);
  }
  getDestination(t) {
    return typeof t != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
      id: t
    });
  }
  getPageLabels() {
    return this.messageHandler.sendWithPromise("GetPageLabels", null);
  }
  getPageLayout() {
    return this.messageHandler.sendWithPromise("GetPageLayout", null);
  }
  getPageMode() {
    return this.messageHandler.sendWithPromise("GetPageMode", null);
  }
  getViewerPreferences() {
    return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
  }
  getOpenAction() {
    return this.messageHandler.sendWithPromise("GetOpenAction", null);
  }
  getAttachments() {
    return this.messageHandler.sendWithPromise("GetAttachments", null);
  }
  getAttachmentContent(t) {
    return this.messageHandler.sendWithPromise("GetAttachmentContent", t);
  }
  getAnnotationsByType(t, n) {
    return this.messageHandler.sendWithPromise("GetAnnotationsByType", {
      types: t,
      pageIndexesToSkip: n
    });
  }
  getDocJSActions() {
    return this.#o("GetDocJSActions");
  }
  getPageJSActions(t) {
    return this.messageHandler.sendWithPromise("GetPageJSActions", {
      pageIndex: this.pagesMapper.getPageId(t + 1) - 1
    });
  }
  getStructTree(t) {
    return this.messageHandler.sendWithPromise("GetStructTree", {
      pageIndex: this.pagesMapper.getPageId(t + 1) - 1
    });
  }
  getOutline() {
    return this.messageHandler.sendWithPromise("GetOutline", null);
  }
  getOptionalContentConfig(t) {
    return this.#o("GetOptionalContentConfig").then((n) => new _d(n, t));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const t = "GetMetadata";
    return this.#e.getOrInsertComputed(t, () => this.messageHandler.sendWithPromise(t, null).then((n) => ({
      info: n[0],
      metadata: n[1] ? new l1(n[1]) : null,
      contentDispositionFilename: this.#t?.filename ?? null,
      contentLength: this.#t?.contentLength ?? null,
      hasStructTree: n[2]
    })));
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(t = !1) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise("Cleanup", null);
      for (const n of this.#i.values())
        if (!n.cleanup())
          throw new Error(`startCleanup: Page ${n.pageNumber} is currently rendering.`);
      this.commonObjs.clear(), t || this.fontLoader.clear(), this.#e.clear(), this.filterFactory.destroy(!0), rn.cleanup();
    }
  }
  cachedPageNumber(t) {
    if (!ud(t))
      return null;
    const n = t.gen === 0 ? `${t.num}R` : `${t.num}R${t.gen}`, s = this.#r.get(n);
    if (s >= 0) {
      const r = this.pagesMapper.getPageNumber(s + 1);
      if (r !== 0)
        return r;
    }
    return null;
  }
}
class g1 {
  _internalRenderTask = null;
  onContinue = null;
  onError = null;
  constructor(t) {
    this._internalRenderTask = t;
  }
  get promise() {
    return this._internalRenderTask.capability.promise;
  }
  cancel(t = 0) {
    this._internalRenderTask.cancel(null, t);
  }
  get separateAnnots() {
    const {
      separateAnnots: t
    } = this._internalRenderTask.operatorList;
    if (!t)
      return !1;
    const {
      annotationCanvasMap: n
    } = this._internalRenderTask;
    return t.form || t.canvas && n?.size > 0;
  }
  get imageCoordinates() {
    return this._internalRenderTask.imageCoordinates || null;
  }
}
class Oa {
  #t = null;
  static #e = /* @__PURE__ */ new WeakSet();
  constructor({
    callback: t,
    params: n,
    objs: s,
    commonObjs: r,
    annotationCanvasMap: l,
    operatorList: c,
    pageIndex: u,
    canvasFactory: d,
    filterFactory: p,
    useRequestAnimationFrame: g = !1,
    pdfBug: m = !1,
    pageColors: v = null,
    enableHWA: A = !1,
    operationsFilter: S = null
  }) {
    this.callback = t, this.params = n, this.objs = s, this.commonObjs = r, this.annotationCanvasMap = l, this.operatorListIdx = null, this.operatorList = c, this._pageIndex = u, this.canvasFactory = d, this.filterFactory = p, this._pdfBug = m, this.pageColors = v, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = g === !0 && typeof window < "u", this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new g1(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = n.canvas, this._canvasContext = n.canvas ? null : n.canvasContext, this._enableHWA = A, this._dependencyTracker = n.dependencyTracker, this._imagesTracker = n.imagesTracker, this._operationsFilter = S;
  }
  get completed() {
    return this.capability.promise.catch(function() {
    });
  }
  initializeGraphics({
    transparency: t = !1,
    optionalContentConfig: n
  }) {
    if (this.cancelled)
      return;
    if (this._canvas) {
      if (Oa.#e.has(this._canvas))
        throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
      Oa.#e.add(this._canvas);
    }
    this._pdfBug && globalThis.StepperManager?.enabled && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
    const {
      viewport: s,
      transform: r,
      background: l,
      dependencyTracker: c,
      imagesTracker: u
    } = this.params, d = this._canvasContext || this._canvas.getContext("2d", {
      alpha: !1,
      willReadFrequently: !this._enableHWA
    });
    this.gfx = new Ds(d, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
      optionalContentConfig: n
    }, this.annotationCanvasMap, this.pageColors, c, u), this.gfx.beginDrawing({
      transform: r,
      viewport: s,
      transparency: t,
      background: l
    }), this.operatorListIdx = 0, this.graphicsReady = !0, this.graphicsReadyCallback?.();
  }
  cancel(t = null, n = 0) {
    this.running = !1, this.cancelled = !0, this.gfx?.endDrawing(), this.#t && (window.cancelAnimationFrame(this.#t), this.#t = null), Oa.#e.delete(this._canvas), t ||= new vd(`Rendering cancelled, page ${this._pageIndex + 1}`, n), this.callback(t), this.task.onError?.(t);
  }
  operatorListChanged() {
    if (!this.graphicsReady) {
      this.graphicsReadyCallback ||= this._continueBound;
      return;
    }
    this.gfx.dependencyTracker?.growOperationsCount(this.operatorList.fnArray.length), this.stepper?.updateOperatorList(this.operatorList), !this.running && this._continue();
  }
  _continue() {
    this.running = !0, !this.cancelled && (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
  }
  _scheduleNext() {
    this._useRequestAnimationFrame ? this.#t = window.requestAnimationFrame(() => {
      this.#t = null, this._nextBound().catch(this._cancelBound);
    }) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
  }
  async _next() {
    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper, this._operationsFilter), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), Oa.#e.delete(this._canvas), this.callback())));
  }
}
const m1 = "6.3.289", y1 = "1c8020a7d";
class En {
  #t = null;
  #e = null;
  #n;
  #i = null;
  #s = !1;
  #r = !1;
  #a = null;
  #o;
  #l = null;
  #c = null;
  static #d = null;
  static get _keyboardManager() {
    return lt(this, "_keyboardManager", new ln([[["Escape"], En.prototype._hideDropdownFromKeyboard], [["Space"], En.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight"], En.prototype._moveToNext], [["ArrowUp", "ArrowLeft"], En.prototype._moveToPrevious], [["Home"], En.prototype._moveToBeginning], [["End"], En.prototype._moveToEnd]]));
  }
  constructor({
    editor: t = null,
    uiManager: n = null
  }) {
    t ? (this.#r = !1, this.#a = t) : this.#r = !0, this.#c = t?._uiManager || n, this.#o = this.#c._eventBus, this.#n = t?.color?.toUpperCase() || this.#c?.highlightColors.values().next().value || "#FFFF98", En.#d ||= Object.freeze({
      blue: "pdfjs-editor-colorpicker-blue",
      green: "pdfjs-editor-colorpicker-green",
      pink: "pdfjs-editor-colorpicker-pink",
      red: "pdfjs-editor-colorpicker-red",
      yellow: "pdfjs-editor-colorpicker-yellow"
    });
  }
  renderButton() {
    const t = this.#t = document.createElement("button");
    t.className = "colorPicker", t.tabIndex = "0", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), t.ariaHasPopup = "true", this.#a && (t.ariaControls = `${this.#a.id}_colorpicker_dropdown`);
    const n = this.#c._signal;
    t.addEventListener("click", this.#m.bind(this), {
      signal: n
    }), t.addEventListener("keydown", this.#g.bind(this), {
      signal: n
    });
    const s = this.#e = document.createElement("span");
    return s.className = "swatch", s.ariaHidden = "true", s.style.backgroundColor = this.#n, t.append(s), t;
  }
  renderMainDropdown() {
    const t = this.#i = this.#h();
    return t.ariaOrientation = "horizontal", t.ariaLabelledBy = "highlightColorPickerLabel", t;
  }
  #h() {
    const t = document.createElement("div"), n = this.#c._signal;
    t.addEventListener("contextmenu", Rn, {
      signal: n
    }), t.className = "dropdown", t.role = "listbox", t.ariaMultiSelectable = "false", t.ariaOrientation = "vertical", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown"), this.#a && (t.id = `${this.#a.id}_colorpicker_dropdown`);
    for (const [s, r] of this.#c.highlightColors) {
      const l = document.createElement("button");
      l.tabIndex = "0", l.role = "option", l.setAttribute("data-color", r), l.title = s, l.setAttribute("data-l10n-id", En.#d[s]);
      const c = document.createElement("span");
      l.append(c), c.className = "swatch", c.style.backgroundColor = r, l.ariaSelected = r === this.#n, l.addEventListener("click", this.#f.bind(this, r), {
        signal: n
      }), t.append(l);
    }
    return t.addEventListener("keydown", this.#g.bind(this), {
      signal: n
    }), t;
  }
  #f(t, n) {
    n.stopPropagation(), this.#o.dispatch("switchannotationeditorparams", {
      source: this,
      type: Mt.HIGHLIGHT_COLOR,
      value: t
    }), this.update(t);
  }
  _colorSelectFromKeyboard(t) {
    if (t.target === this.#t) {
      this.#m(t);
      return;
    }
    const n = t.target.getAttribute("data-color");
    n && this.#f(n, t);
  }
  _moveToNext(t) {
    if (!this.#p) {
      this.#m(t);
      return;
    }
    if (t.target === this.#t) {
      this.#i.firstElementChild?.focus();
      return;
    }
    t.target.nextSibling?.focus();
  }
  _moveToPrevious(t) {
    if (t.target === this.#i?.firstElementChild || t.target === this.#t) {
      this.#p && this._hideDropdownFromKeyboard();
      return;
    }
    this.#p || this.#m(t), t.target.previousSibling?.focus();
  }
  _moveToBeginning(t) {
    if (!this.#p) {
      this.#m(t);
      return;
    }
    this.#i.firstElementChild?.focus();
  }
  _moveToEnd(t) {
    if (!this.#p) {
      this.#m(t);
      return;
    }
    this.#i.lastElementChild?.focus();
  }
  #g(t) {
    En._keyboardManager.exec(this, t);
  }
  #m(t) {
    if (this.#p) {
      this.hideDropdown();
      return;
    }
    if (this.#s = t.detail === 0, this.#l || (this.#l = new AbortController(), window.addEventListener("pointerdown", this.#u.bind(this), {
      signal: this.#c.combinedSignal(this.#l)
    })), this.#t.ariaExpanded = "true", this.#i) {
      this.#i.classList.remove("hidden");
      return;
    }
    const n = this.#i = this.#h();
    this.#t.append(n);
  }
  #u(t) {
    this.#i?.contains(t.target) || this.hideDropdown();
  }
  hideDropdown() {
    this.#i?.classList.add("hidden"), this.#t.ariaExpanded = "false", this.#l?.abort(), this.#l = null;
  }
  get #p() {
    return this.#i && !this.#i.classList.contains("hidden");
  }
  _hideDropdownFromKeyboard() {
    if (!this.#r) {
      if (!this.#p) {
        this.#a?.unselect();
        return;
      }
      this.hideDropdown(), this.#t.focus({
        preventScroll: !0,
        focusVisible: this.#s
      });
    }
  }
  update(t) {
    if (this.#e && (this.#e.style.backgroundColor = t), !this.#i)
      return;
    const n = this.#c.highlightColors.values();
    for (const s of this.#i.children)
      s.ariaSelected = n.next().value === t.toUpperCase();
  }
  destroy() {
    this.#t?.remove(), this.#t = null, this.#e = null, this.#i?.remove(), this.#i = null;
  }
}
class Vr {
  #t = null;
  #e = !1;
  #n = null;
  #i = null;
  static #s = null;
  constructor(t) {
    this.#n = t, this.#i = t._uiManager, Vr.#s ||= Object.freeze({
      freetext: "pdfjs-editor-color-picker-free-text-input",
      ink: "pdfjs-editor-color-picker-ink-input"
    });
  }
  renderButton() {
    if (this.#t)
      return this.#t;
    const {
      editorType: t,
      colorType: n,
      colorAndOpacityType: s,
      opacityType: r,
      color: l,
      opacity: c
    } = this.#n, u = this.#e = Yt.isAlphaColorInputSupported && r !== void 0, d = this.#t = document.createElement("input");
    if (d.type = "color", u) {
      d.setAttribute("alpha", "");
      const p = K.hexNums[Math.round((c ?? 1) * 255)];
      d.value = (l || "#000000") + p;
    } else
      d.value = l || "#000000";
    return d.className = "basicColorPicker", d.tabIndex = 0, d.setAttribute("data-l10n-id", Vr.#s[t]), d.addEventListener("input", () => {
      if (u) {
        const p = Xr(d.value);
        if (!p)
          return;
        const [g, m, v, A] = p, S = K.makeHexColor(g, m, v);
        s !== void 0 ? this.#i.updateParams(s, {
          color: S,
          opacity: A
        }) : (this.#i.updateParams(n, S), this.#i.updateParams(r, A));
      } else
        this.#i.updateParams(n, d.value);
    }, {
      signal: this.#i._signal
    }), d;
  }
  update(t) {
    if (this.#t)
      if (this.#e) {
        const n = K.hexNums[Math.round(this.#n.opacity * 255)];
        this.#t.value = t + n;
      } else
        this.#t.value = t;
  }
  updateOpacity(t) {
    if (!this.#t || !this.#e)
      return;
    const n = K.hexNums[Math.round(t * 255)];
    this.#t.value = this.#n.color + n;
  }
  destroy() {
    this.#t?.remove(), this.#t = null;
  }
  hideDropdown() {
  }
}
function Xy(y) {
  return Math.floor($t(y, 0, 1) * 255).toString(16).padStart(2, "0");
}
function Lr(y) {
  return $t(y, 0, 1) * 255;
}
class qy {
  static CMYK_G([t, n, s, r]) {
    return ["G", 1 - Math.min(1, 0.3 * t + 0.59 * s + 0.11 * n + r)];
  }
  static G_CMYK([t]) {
    return ["CMYK", 0, 0, 0, 1 - t];
  }
  static G_RGB([t]) {
    return ["RGB", t, t, t];
  }
  static G_rgb([t]) {
    return t = Lr(t), [t, t, t];
  }
  static G_HTML([t]) {
    const n = Xy(t);
    return `#${n}${n}${n}`;
  }
  static RGB_G([t, n, s]) {
    return ["G", 0.3 * t + 0.59 * n + 0.11 * s];
  }
  static RGB_rgb(t) {
    return t.map(Lr);
  }
  static RGB_HTML(t) {
    return `#${t.map(Xy).join("")}`;
  }
  static T_HTML() {
    return "#00000000";
  }
  static T_rgb() {
    return [null];
  }
  static CMYK_RGB([t, n, s, r]) {
    return ["RGB", 1 - Math.min(1, t + r), 1 - Math.min(1, s + r), 1 - Math.min(1, n + r)];
  }
  static CMYK_rgb([t, n, s, r]) {
    return [Lr(1 - Math.min(1, t + r)), Lr(1 - Math.min(1, s + r)), Lr(1 - Math.min(1, n + r))];
  }
  static CMYK_HTML(t) {
    const n = this.CMYK_RGB(t).slice(1);
    return this.RGB_HTML(n);
  }
  static RGB_CMYK([t, n, s]) {
    const r = 1 - t, l = 1 - n, c = 1 - s, u = Math.min(r, l, c);
    return ["CMYK", r, l, c, u];
  }
}
class v1 {
  create(t, n, s = !1) {
    if (t <= 0 || n <= 0)
      throw new Error("Invalid SVG dimensions");
    const r = this._createSVG("svg:svg");
    return r.setAttribute("version", "1.1"), s || (r.setAttribute("width", `${t}px`), r.setAttribute("height", `${n}px`)), r.setAttribute("preserveAspectRatio", "none"), r.setAttribute("viewBox", `0 0 ${t} ${n}`), r;
  }
  createElement(t) {
    if (typeof t != "string")
      throw new Error("Invalid SVG element type");
    return this._createSVG(t);
  }
  _createSVG(t) {
    kt("Abstract method `_createSVG` called.");
  }
}
class jl extends v1 {
  _createSVG(t) {
    return document.createElementNS(Pe, t);
  }
}
const b1 = 9, Ns = /* @__PURE__ */ new WeakSet(), A1 = (/* @__PURE__ */ new Date()).getTimezoneOffset() * 60 * 1e3;
class Wh {
  static create(t) {
    switch (t.data.annotationType) {
      case ne.LINK:
        return new xd(t);
      case ne.TEXT:
        return new E1(t);
      case ne.WIDGET:
        switch (t.data.fieldType) {
          case "Tx":
            return new T1(t);
          case "Btn":
            return t.data.radioButton ? new C1(t) : t.data.checkBox ? new w1(t) : new x1(t);
          case "Ch":
            return new M1(t);
          case "Sig":
            return new _1(t);
        }
        return new Ls(t);
      case ne.POPUP:
        return new hd(t);
      case ne.FREETEXT:
        return new A0(t);
      case ne.LINE:
        return new O1(t);
      case ne.SQUARE:
        return new N1(t);
      case ne.CIRCLE:
        return new R1(t);
      case ne.POLYLINE:
        return new S0(t);
      case ne.CARET:
        return new k1(t);
      case ne.INK:
        return new Md(t);
      case ne.POLYGON:
        return new L1(t);
      case ne.HIGHLIGHT:
        return new E0(t);
      case ne.UNDERLINE:
        return new B1(t);
      case ne.SQUIGGLY:
        return new P1(t);
      case ne.STRIKEOUT:
        return new I1(t);
      case ne.STAMP:
        return new T0(t);
      case ne.FILEATTACHMENT:
        return new F1(t);
      case ne.RICHMEDIA:
      case ne.SCREEN:
      case ne.SOUND:
        return new _0(t);
      default:
        return new te(t);
    }
  }
}
class te {
  #t = null;
  #e = !1;
  #n = null;
  constructor(t, {
    isRenderable: n = !1,
    ignoreBorder: s = !1,
    createQuadrilaterals: r = !1
  } = {}) {
    this.isRenderable = n, this.data = t.data, this.layer = t.layer, this.linkService = t.linkService, this.downloadManager = t.downloadManager, this.imageResourcesPath = t.imageResourcesPath, this.renderForms = t.renderForms, this.svgFactory = t.svgFactory, this.annotationStorage = t.annotationStorage, this.enableComment = t.enableComment, this.enableScripting = t.enableScripting, this.hasJSActions = t.hasJSActions, this._fieldObjects = t.fieldObjects, this.parent = t.parent, this.hasOwnCommentButton = !1, n && (this.contentElement = this.container = this._createContainer(s)), r && this._createQuadrilaterals();
  }
  static _hasPopupData({
    contentsObj: t,
    richText: n
  }) {
    return !!(t?.str || n?.str);
  }
  get _isEditable() {
    return this.data.isEditable;
  }
  get hasPopupData() {
    return te._hasPopupData(this.data) || this.enableComment && !!this.commentText;
  }
  get commentData() {
    const {
      data: t
    } = this, n = this.annotationStorage?.getEditor(t.id);
    return n ? n.getData() : t;
  }
  get hasCommentButton() {
    return this.enableComment && this.hasPopupElement;
  }
  get commentButtonPosition() {
    const t = this.annotationStorage?.getEditor(this.data.id);
    if (t)
      return t.commentButtonPositionInPage;
    const {
      quadPoints: n,
      inkLists: s,
      rect: r
    } = this.data;
    let l = -1 / 0, c = -1 / 0;
    if (n?.length >= 8) {
      for (let u = 0; u < n.length; u += 8)
        n[u + 1] > c ? (c = n[u + 1], l = n[u + 2]) : n[u + 1] === c && (l = Math.max(l, n[u + 2]));
      return [l, c];
    }
    if (s?.length >= 1) {
      for (const u of s)
        for (let d = 0, p = u.length; d < p; d += 2)
          u[d + 1] > c ? (c = u[d + 1], l = u[d]) : u[d + 1] === c && (l = Math.max(l, u[d]));
      if (l !== 1 / 0)
        return [l, c];
    }
    return r ? [r[2], r[3]] : null;
  }
  _normalizePoint(t) {
    const {
      page: {
        view: n
      },
      viewport: {
        rawDims: {
          pageWidth: s,
          pageHeight: r,
          pageX: l,
          pageY: c
        }
      }
    } = this.parent;
    return t[1] = n[3] - t[1] + n[1], t[0] = 100 * (t[0] - l) / s, t[1] = 100 * (t[1] - c) / r, t;
  }
  get commentText() {
    const {
      data: t
    } = this;
    return this.annotationStorage.getRawValue(`${La}${t.id}`)?.popup?.contents || t.contentsObj?.str || "";
  }
  set commentText(t) {
    const {
      data: n
    } = this, s = {
      deleted: !t,
      contents: t || ""
    };
    this.annotationStorage.updateEditor(n.id, {
      popup: s
    }) || this.annotationStorage.setValue(`${La}${n.id}`, {
      id: n.id,
      annotationType: n.annotationType,
      page: this.parent.page,
      popup: s,
      popupRef: n.popupRef,
      modificationDate: /* @__PURE__ */ new Date()
    }), t || this.removePopup();
  }
  removePopup() {
    (this.#n?.popup || this.popup)?.remove(), this.#n = this.popup = null;
  }
  updateEdited(t) {
    if (!this.container)
      return;
    t.rect && (this.#t ||= {
      rect: this.data.rect.slice(0)
    });
    const {
      rect: n,
      popup: s
    } = t;
    n && this.#i(n);
    let r = this.#n?.popup || this.popup;
    !r && s?.text && (this._createPopup(s), r = this.#n.popup), r && (r.updateEdited(t), s?.deleted && (r.remove(), this.#n = null, this.popup = null));
  }
  resetEdited() {
    this.#t && (this.#i(this.#t.rect), this.#n?.popup.resetEdited(), this.#t = null);
  }
  #i(t) {
    const {
      container: {
        style: n
      },
      data: {
        rect: s,
        rotation: r
      },
      parent: {
        viewport: {
          rawDims: {
            pageWidth: l,
            pageHeight: c,
            pageX: u,
            pageY: d
          }
        }
      }
    } = this;
    s?.splice(0, 4, ...t), n.left = `${100 * (t[0] - u) / l}%`, n.top = `${100 * (c - t[3] + d) / c}%`, r === 0 ? (n.width = `${100 * (t[2] - t[0]) / l}%`, n.height = `${100 * (t[3] - t[1]) / c}%`) : this.setRotation(r);
  }
  _createContainer(t) {
    const {
      data: n,
      parent: {
        page: s,
        viewport: r
      }
    } = this, l = document.createElement("section");
    l.setAttribute("data-annotation-id", n.id), !(this instanceof Ls) && !(this instanceof xd) && !(this instanceof _0) && (l.tabIndex = 0);
    const {
      style: c
    } = l;
    if (c.zIndex = this.parent.zIndex, this.parent.zIndex += 2, n.alternativeText && (l.title = n.alternativeText), n.noRotate && l.classList.add("norotate"), !n.rect || this instanceof hd) {
      const {
        rotation: E
      } = n;
      return !n.hasOwnCanvas && E !== 0 && this.setRotation(E, l), l;
    }
    const {
      width: u,
      height: d
    } = this;
    if (!t && n.borderStyle.width > 0) {
      c.borderWidth = `${n.borderStyle.width}px`;
      const E = n.borderStyle.horizontalCornerRadius, _ = n.borderStyle.verticalCornerRadius;
      if (E > 0 || _ > 0) {
        const C = `calc(${E}px * var(--total-scale-factor)) / calc(${_}px * var(--total-scale-factor))`;
        c.borderRadius = C;
      }
      switch (n.borderStyle.style) {
        case Ca.SOLID:
          c.borderStyle = "solid";
          break;
        case Ca.DASHED:
          c.borderStyle = "dashed";
          break;
        case Ca.BEVELED:
          yt("Unimplemented border style: beveled");
          break;
        case Ca.INSET:
          yt("Unimplemented border style: inset");
          break;
        case Ca.UNDERLINE:
          c.borderBottomStyle = "solid";
          break;
      }
      const w = n.borderColor || null;
      w ? (this.#e = !0, c.borderColor = K.makeHexColor(...w)) : c.borderWidth = 0;
    }
    const p = K.normalizeRect([n.rect[0], s.view[3] - n.rect[1] + s.view[1], n.rect[2], s.view[3] - n.rect[3] + s.view[1]]), {
      pageWidth: g,
      pageHeight: m,
      pageX: v,
      pageY: A
    } = r.rawDims;
    c.left = `${100 * (p[0] - v) / g}%`, c.top = `${100 * (p[1] - A) / m}%`;
    const {
      rotation: S
    } = n;
    return n.hasOwnCanvas || S === 0 ? (c.width = `${100 * u / g}%`, c.height = `${100 * d / m}%`) : this.setRotation(S, l), l;
  }
  setRotation(t, n = this.container) {
    if (!this.data.rect)
      return;
    const {
      pageWidth: s,
      pageHeight: r
    } = this.parent.viewport.rawDims;
    let {
      width: l,
      height: c
    } = this;
    t % 180 !== 0 && ([l, c] = [c, l]), n.style.width = `${100 * l / s}%`, n.style.height = `${100 * c / r}%`, n.setAttribute("data-main-rotation", (360 - t) % 360);
  }
  get _commonActions() {
    const t = (n, s, r) => {
      const l = r.detail[n], c = l[0], u = l.slice(1);
      r.target.style[s] = qy[`${c}_HTML`](u), this.annotationStorage.setValue(this.data.id, {
        [s]: qy[`${c}_rgb`](u)
      });
    };
    return lt(this, "_commonActions", {
      display: (n) => {
        const {
          display: s
        } = n.detail, r = s % 2 === 1;
        this.container.style.visibility = r ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noView: r,
          noPrint: s === 1 || s === 2
        });
      },
      print: (n) => {
        this.annotationStorage.setValue(this.data.id, {
          noPrint: !n.detail.print
        });
      },
      hidden: (n) => {
        const {
          hidden: s
        } = n.detail;
        this.container.style.visibility = s ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noPrint: s,
          noView: s
        });
      },
      focus: (n) => {
        setTimeout(() => n.target.focus({
          preventScroll: !1
        }), 0);
      },
      userName: (n) => {
        n.target.title = n.detail.userName;
      },
      readonly: (n) => {
        n.target.disabled = n.detail.readonly;
      },
      required: (n) => {
        this._setRequired(n.target, n.detail.required);
      },
      bgColor: (n) => {
        t("bgColor", "backgroundColor", n);
      },
      fillColor: (n) => {
        t("fillColor", "backgroundColor", n);
      },
      fgColor: (n) => {
        t("fgColor", "color", n);
      },
      textColor: (n) => {
        t("textColor", "color", n);
      },
      borderColor: (n) => {
        t("borderColor", "borderColor", n);
      },
      strokeColor: (n) => {
        t("strokeColor", "borderColor", n);
      },
      rotation: (n) => {
        const s = n.detail.rotation;
        this.setRotation(s), this.annotationStorage.setValue(this.data.id, {
          rotation: s
        });
      }
    });
  }
  _dispatchEventFromSandbox(t, n) {
    const s = this._commonActions;
    for (const r of Object.keys(n.detail))
      (t[r] || s[r])?.(n);
  }
  _setDefaultPropertiesFromJS(t) {
    if (!this.enableScripting)
      return;
    const n = this.annotationStorage.getRawValue(this.data.id);
    if (!n)
      return;
    const s = this._commonActions;
    for (const [r, l] of Object.entries(n)) {
      const c = s[r];
      if (c) {
        const u = {
          detail: {
            [r]: l
          },
          target: t
        };
        c(u), delete n[r];
      }
    }
  }
  _createQuadrilaterals() {
    if (!this.container)
      return;
    const {
      quadPoints: t
    } = this.data;
    if (!t)
      return;
    const [n, s, r, l] = this.data.rect.map(Math.fround);
    if (t.length === 8) {
      const [E, _, w, C] = t.subarray(2, 6);
      if (r === E && l === _ && n === w && s === C)
        return;
    }
    const {
      style: c
    } = this.container;
    let u;
    if (this.#e) {
      const {
        borderColor: E,
        borderWidth: _
      } = c;
      c.borderWidth = 0, u = ["url('data:image/svg+xml;utf8,", `<svg xmlns="${Pe}" preserveAspectRatio="none" viewBox="0 0 1 1">`, `<g fill="transparent" stroke="${E}" stroke-width="${_}">`], this.container.classList.add("hasBorder");
    }
    const d = r - n, p = l - s, {
      svgFactory: g
    } = this, m = g.createElement("svg");
    m.classList.add("quadrilateralsContainer"), m.setAttribute("width", 0), m.setAttribute("height", 0), m.role = "none";
    const v = g.createElement("defs");
    m.append(v);
    const A = g.createElement("clipPath"), S = `clippath_${this.data.id}`;
    A.setAttribute("id", S), A.setAttribute("clipPathUnits", "objectBoundingBox"), v.append(A);
    for (let E = 2, _ = t.length; E < _; E += 8) {
      const w = t[E], C = t[E + 1], M = t[E + 2], B = t[E + 3], N = g.createElement("rect"), P = (M - n) / d, U = (l - C) / p, j = (w - M) / d, q = (C - B) / p;
      N.setAttribute("x", P), N.setAttribute("y", U), N.setAttribute("width", j), N.setAttribute("height", q), A.append(N), u?.push(`<rect vector-effect="non-scaling-stroke" x="${P}" y="${U}" width="${j}" height="${q}"/>`);
    }
    this.#e && (u.push("</g></svg>')"), c.backgroundImage = u.join("")), this.container.append(m), this.container.style.clipPath = `url(#${S})`;
  }
  _createPopup(t = null) {
    const {
      data: n
    } = this;
    let s, r;
    t ? (s = {
      str: t.text
    }, r = t.date) : (s = n.contentsObj, r = n.modificationDate), this.#n = new hd({
      data: {
        color: n.color,
        titleObj: n.titleObj,
        modificationDate: r,
        contentsObj: s,
        richText: n.richText,
        parentRect: n.rect,
        borderStyle: 0,
        id: `popup_${n.id}`,
        rotation: n.rotation,
        noRotate: !0
      },
      linkService: this.linkService,
      parent: this.parent,
      elements: [this]
    });
  }
  get hasPopupElement() {
    return !!(this.#n || this.popup || this.data.popupRef);
  }
  get extraPopupElement() {
    return this.#n;
  }
  render() {
    kt("Abstract method `AnnotationElement.render` called");
  }
  _getElementsByName(t, n = null) {
    const s = [];
    if (this._fieldObjects) {
      const r = this._fieldObjects.get(t) || [];
      for (const {
        page: l,
        id: c,
        exportValues: u
      } of r) {
        if (l === -1 || c === n)
          continue;
        const d = typeof u == "string" ? u : null, p = document.querySelector(`[data-element-id="${c}"]`);
        if (p && !Ns.has(p)) {
          yt(`_getElementsByName - element not allowed: ${c}`);
          continue;
        }
        s.push({
          id: c,
          exportValue: d,
          domElement: p
        });
      }
      return s;
    }
    for (const r of document.getElementsByName(t)) {
      const {
        exportValue: l
      } = r, c = r.getAttribute("data-element-id");
      c !== n && Ns.has(r) && s.push({
        id: c,
        exportValue: l,
        domElement: r
      });
    }
    return s;
  }
  show() {
    this.container && (this.container.hidden = !1), this.popup?.maybeShow();
  }
  hide() {
    this.container && (this.container.hidden = !0), this.popup?.forceHide();
  }
  getElementsToTriggerPopup() {
    return this.container;
  }
  addHighlightArea() {
    const t = this.getElementsToTriggerPopup();
    if (Array.isArray(t))
      for (const n of t)
        n.classList.add("highlightArea");
    else
      t.classList.add("highlightArea");
  }
  _editOnDoubleClick() {
    if (!this._isEditable)
      return;
    const {
      annotationEditorType: t,
      data: {
        id: n
      }
    } = this;
    this.container.addEventListener("dblclick", () => {
      this.linkService.eventBus?.dispatch("switchannotationeditormode", {
        source: this,
        mode: t,
        editId: n,
        mustEnterInEditMode: !0
      });
    });
  }
  updateOC(t) {
    if (!this.data.oc || !t)
      return;
    t.isVisible(this.data.oc) ? this.show() : this.hide();
  }
  get width() {
    return this.data.rect[2] - this.data.rect[0];
  }
  get height() {
    return this.data.rect[3] - this.data.rect[1];
  }
  _setBackgroundColor(t) {
    const n = this.data.backgroundColor || null;
    t.style.backgroundColor = n === null ? "transparent" : K.makeHexColor(...n);
  }
}
class S1 extends te {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.editor = t.editor;
  }
  render() {
    return this.container.className = "editorAnnotation", this.container;
  }
  createOrUpdatePopup() {
    const {
      editor: t
    } = this;
    t.hasComment && this._createPopup(t.comment);
  }
  get hasCommentButton() {
    return this.enableComment && this.editor.hasComment;
  }
  get commentButtonPosition() {
    return this.editor.commentButtonPositionInPage;
  }
  get commentText() {
    return this.editor.comment.text;
  }
  set commentText(t) {
    this.editor.comment = t, t || this.removePopup();
  }
  get commentData() {
    return this.editor.getData();
  }
  remove() {
    this.parent.removeAnnotation(this.data.id), this.container.remove(), this.container = null, this.removePopup();
  }
}
class xd extends te {
  constructor(t, n = null) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !!n?.ignoreBorder,
      createQuadrilaterals: !0
    }), this.isTooltipOnly = t.data.isTooltipOnly;
  }
  render() {
    const {
      data: t,
      linkService: n
    } = this, s = document.createElement("a");
    s.setAttribute("data-element-id", t.id);
    let r = !1;
    return t.url ? (n.addLinkAttributes(s, t.url, t.newWindow), r = !0) : t.action ? (this._bindNamedAction(s, t.action, t.overlaidText), r = !0) : t.attachment ? (this.#e(s, t.attachmentId, t.attachment, t.overlaidText, t.attachmentDest), r = !0) : t.setOCGState ? (this.#n(s, t.setOCGState, t.overlaidText), r = !0) : t.dest ? (this._bindLink(s, t.dest, t.overlaidText), r = !0) : (t.actions && (t.actions.has("Action") || t.actions.has("Mouse Up") || t.actions.has("Mouse Down")) && this.enableScripting && this.hasJSActions && (this._bindJSAction(s, t), r = !0), t.resetForm ? (this._bindResetFormAction(s, t.resetForm), r = !0) : this.isTooltipOnly && !r && (this._bindLink(s, ""), r = !0)), this.container.classList.add("linkAnnotation"), r && (this.contentElement = s, this.container.append(s)), this.container;
  }
  #t() {
    this.container.setAttribute("data-internal-link", "");
  }
  _bindLink(t, n, s = "") {
    t.href = this.linkService.getDestinationHash(n), t.onclick = () => (n && this.linkService.goToDestination(n), !1), (n || n === "") && this.#t(), s && (t.title = s);
  }
  _bindNamedAction(t, n, s = "") {
    t.href = this.linkService.getAnchorUrl(""), t.onclick = () => (this.linkService.executeNamedAction(n), !1), s && (t.title = s), this.#t();
  }
  #e(t, n, s, r = "", l = null) {
    t.href = this.linkService.getAnchorUrl(""), s.description ? t.title = s.description : r && (t.title = r);
    const c = async () => {
      const u = await this.linkService.getAttachmentContent(n);
      u && this.downloadManager?.openOrDownloadData(u, s.filename, l);
    };
    t.onclick = () => (c(), !1), this.#t();
  }
  #n(t, n, s = "") {
    t.href = this.linkService.getAnchorUrl(""), t.onclick = () => (this.linkService.executeSetOCGState(n), !1), s && (t.title = s), this.#t();
  }
  _bindJSAction(t, {
    actions: n,
    id: s,
    overlaidText: r
  }) {
    t.href = this.linkService.getAnchorUrl("");
    const l = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
    for (const c of n.keys()) {
      const u = l.get(c);
      u && (t[u] = () => (this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: s,
          name: c
        }
      }), !1));
    }
    r && (t.title = r), t.onclick ||= () => !1, this.#t();
  }
  _bindResetFormAction(t, n) {
    const s = t.onclick;
    if (s || (t.href = this.linkService.getAnchorUrl("")), this.#t(), !this._fieldObjects) {
      yt('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), s || (t.onclick = () => !1);
      return;
    }
    t.onclick = () => {
      s?.();
      const {
        fields: r,
        refs: l,
        include: c
      } = n, u = [];
      if (r.length !== 0 || l.length !== 0) {
        const g = new Set(l);
        for (const m of r) {
          const v = this._fieldObjects.get(m) || [];
          for (const {
            id: A
          } of v)
            g.add(A);
        }
        for (const m of this._fieldObjects.values())
          for (const v of m)
            g.has(v.id) === c && u.push(v);
      } else
        for (const g of this._fieldObjects.values())
          u.push(...g);
      const d = this.annotationStorage, p = [];
      for (const g of u) {
        const {
          id: m
        } = g;
        switch (p.push(m), g.type) {
          case "text": {
            const A = g.defaultValue || "";
            d.setValue(m, {
              value: A
            });
            break;
          }
          case "checkbox":
          case "radiobutton": {
            const A = g.defaultValue === g.exportValues;
            d.setValue(m, {
              value: A
            });
            break;
          }
          case "combobox":
          case "listbox": {
            const A = g.defaultValue || "";
            d.setValue(m, {
              value: A
            });
            break;
          }
          default:
            continue;
        }
        const v = document.querySelector(`[data-element-id="${m}"]`);
        if (v) {
          if (!Ns.has(v)) {
            yt(`_bindResetFormAction - element not allowed: ${m}`);
            continue;
          }
        } else continue;
        v.dispatchEvent(new Event("resetform"));
      }
      return this.enableScripting && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: "app",
          ids: p,
          name: "ResetForm"
        }
      }), !1;
    };
  }
}
class E1 extends te {
  constructor(t) {
    super(t, {
      isRenderable: !0
    });
  }
  render() {
    this.container.classList.add("textAnnotation");
    const t = document.createElement("img");
    return t.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", t.setAttribute("data-l10n-id", "pdfjs-text-annotation-type"), t.setAttribute("data-l10n-args", JSON.stringify({
      type: this.data.name
    })), !this.data.popupRef && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container.append(t), this.container;
  }
}
class Ls extends te {
  render() {
    return this.container;
  }
  _getKeyModifier(t) {
    return Yt.platform.isMac ? t.metaKey : t.ctrlKey;
  }
  _setEventListener(t, n, s, r, l) {
    s.includes("mouse") ? t.addEventListener(s, (c) => {
      this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: r,
          value: l(c),
          shift: c.shiftKey,
          modifier: this._getKeyModifier(c)
        }
      });
    }) : t.addEventListener(s, (c) => {
      if (s === "blur") {
        if (!n.focused || !c.relatedTarget)
          return;
        n.focused = !1;
      } else if (s === "focus") {
        if (n.focused)
          return;
        n.focused = !0;
      }
      l && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: r,
          value: l(c)
        }
      });
    });
  }
  _setEventListeners(t, n, s, r) {
    const {
      actions: l
    } = this.data;
    for (const [c, u] of s)
      (u === "Action" || l?.has(u)) && ((u === "Focus" || u === "Blur") && (n ||= {
        focused: !1
      }), this._setEventListener(t, n, c, u, r), u === "Focus" && !l?.has("Blur") ? this._setEventListener(t, n, "blur", "Blur", null) : u === "Blur" && !l?.has("Focus") && this._setEventListener(t, n, "focus", "Focus", null));
  }
  _setTextStyle(t) {
    const n = ["left", "center", "right"], {
      fontColor: s
    } = this.data.defaultAppearanceData, r = this.data.defaultAppearanceData.fontSize || b1, l = t.style;
    let c;
    const u = 2, d = (p) => Math.round(10 * p) / 10;
    if (this.data.multiLine) {
      const p = Math.abs(this.data.rect[3] - this.data.rect[1] - u), g = Math.round(p / /* inlined export .LINE_FACTOR */
      (1.35 * r)) || 1, m = p / g;
      c = Math.min(r, d(m / /* inlined export .LINE_FACTOR */
      1.35));
    } else {
      const p = Math.abs(this.data.rect[3] - this.data.rect[1] - u);
      c = Math.min(r, d(p / /* inlined export .LINE_FACTOR */
      1.35));
    }
    l.fontSize = `calc(${c}px * var(--total-scale-factor))`, l.color = K.makeHexColor(...s), this.data.textAlignment !== null && !this.data.comb && (l.textAlign = n[this.data.textAlignment]);
  }
  _setRequired(t, n) {
    n ? t.setAttribute("required", !0) : t.removeAttribute("required"), t.setAttribute("aria-required", n);
  }
}
class T1 extends Ls {
  constructor(t) {
    const n = t.renderForms || t.data.hasOwnCanvas || !t.data.hasAppearance && !!t.data.fieldValue;
    super(t, {
      isRenderable: n
    });
  }
  setPropertyOnSiblings(t, n, s, r) {
    const l = this.annotationStorage;
    for (const c of this._getElementsByName(t.name, t.id))
      c.domElement && (c.domElement[n] = s), l.setValue(c.id, {
        [r]: s
      });
  }
  render() {
    const t = this.annotationStorage, n = this.data.id;
    this.container.classList.add("textWidgetAnnotation");
    let s = null;
    if (this.renderForms) {
      const r = t.getValue(n, {
        value: this.data.fieldValue
      });
      let l = r.value || "";
      const c = t.getValue(n, {
        charLimit: this.data.maxLen
      }).charLimit;
      c && l.length > c && (l = l.slice(0, c));
      let u = r.formattedValue || this.data.textContent?.join(`
`) || null;
      u && this.data.comb && (u = u.replaceAll(/\s+/g, ""));
      const d = {
        userValue: l,
        formattedValue: u,
        lastCommittedValue: null,
        commitKey: 1,
        focused: !1
      };
      this.data.multiLine ? (s = document.createElement("textarea"), s.textContent = u ?? l, this.data.doNotScroll && (s.style.overflowY = "hidden")) : (s = document.createElement("input"), s.type = this.data.password ? "password" : "text", s.setAttribute("value", u ?? l), this.data.doNotScroll && (s.style.overflowX = "hidden")), this.data.hasOwnCanvas && (this.container.classList.add("hasOwnCanvas"), t.has(n) && this.container.classList.add("sandboxModified")), Ns.add(s), this.contentElement = s, s.setAttribute("data-element-id", n), s.disabled = this.data.readOnly, s.name = this.data.fieldName, s.tabIndex = 0;
      const {
        datetimeFormat: p,
        datetimeType: g,
        timeStep: m
      } = this.data, v = !!g && this.enableScripting;
      p && (s.title = p), this._setRequired(s, this.data.required), c && (s.maxLength = c), s.addEventListener("input", (S) => {
        t.setValue(n, {
          value: S.target.value
        }), this.setPropertyOnSiblings(s, "value", S.target.value, "value"), d.formattedValue = null;
      }), s.addEventListener("resetform", (S) => {
        const E = this.data.defaultFieldValue ?? "";
        s.value = d.userValue = E, d.formattedValue = null;
      });
      let A = (S) => {
        const {
          formattedValue: E
        } = d;
        E != null && (S.target.value = E), S.target.scrollLeft = 0;
      };
      if (this.enableScripting && this.hasJSActions) {
        s.addEventListener("focus", (E) => {
          if (d.focused)
            return;
          const {
            target: _
          } = E;
          if (v && (_.type = g, m && (_.step = m)), d.userValue) {
            const w = d.userValue;
            if (v)
              if (g === "time") {
                const C = new Date(w), M = [C.getHours(), C.getMinutes(), C.getSeconds()];
                _.value = M.map((B) => B.toString().padStart(2, "0")).join(":");
              } else
                _.value = new Date(w - A1).toISOString().split(g === "date" ? "T" : ".", 1)[0];
            else
              _.value = w;
          }
          d.lastCommittedValue = _.value, d.commitKey = 1, this.data.actions?.has("Focus") || (d.focused = !0);
        }), s.addEventListener("updatefromsandbox", (E) => {
          this.container.classList.add("sandboxModified");
          const _ = {
            value(w) {
              d.userValue = w.detail.value ?? "", v || t.setValue(n, {
                value: d.userValue.toString()
              }), w.target.value = d.userValue;
            },
            formattedValue(w) {
              const {
                formattedValue: C
              } = w.detail;
              d.formattedValue = C, C != null && w.target !== document.activeElement && (w.target.value = C);
              const M = {
                formattedValue: C
              };
              v && (M.value = C), t.setValue(n, M);
            },
            selRange(w) {
              w.target.setSelectionRange(...w.detail.selRange);
            },
            charLimit: (w) => {
              const {
                charLimit: C
              } = w.detail, {
                target: M
              } = w;
              if (C === 0) {
                M.removeAttribute("maxLength");
                return;
              }
              M.setAttribute("maxLength", C);
              let B = d.userValue;
              !B || B.length <= C || (B = B.slice(0, C), M.value = d.userValue = B, t.setValue(n, {
                value: B
              }), this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: n,
                  name: "Keystroke",
                  value: B,
                  willCommit: !0,
                  commitKey: 1,
                  selStart: M.selectionStart,
                  selEnd: M.selectionEnd
                }
              }));
            }
          };
          this._dispatchEventFromSandbox(_, E);
        }), s.addEventListener("keydown", (E) => {
          d.commitKey = 1;
          let _ = -1;
          if (E.key === "Escape" ? _ = 0 : E.key === "Enter" && !this.data.multiLine ? _ = 2 : E.key === "Tab" && (d.commitKey = 3), _ === -1)
            return;
          const {
            value: w
          } = E.target;
          d.lastCommittedValue !== w && (d.lastCommittedValue = w, d.userValue = w, this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: n,
              name: "Keystroke",
              value: w,
              willCommit: !0,
              commitKey: _,
              selStart: E.target.selectionStart,
              selEnd: E.target.selectionEnd
            }
          }));
        });
        const S = A;
        A = null, s.addEventListener("blur", (E) => {
          if (!d.focused || !E.relatedTarget)
            return;
          this.data.actions?.has("Blur") || (d.focused = !1);
          const {
            target: _
          } = E;
          let {
            value: w
          } = _;
          if (v) {
            if (w && g === "time") {
              const C = w.split(":").map((M) => parseInt(M, 10));
              w = new Date(2e3, 0, 1, C[0], C[1], C[2] || 0).valueOf(), _.step = "";
            } else
              w.includes("T") || (w = `${w}T00:00`), w = new Date(w).valueOf();
            _.type = "text";
          }
          d.userValue = w, d.lastCommittedValue !== w && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: n,
              name: "Keystroke",
              value: w,
              willCommit: !0,
              commitKey: d.commitKey,
              selStart: E.target.selectionStart,
              selEnd: E.target.selectionEnd
            }
          }), S(E);
        }), this.data.actions?.has("Keystroke") && s.addEventListener("beforeinput", (E) => {
          d.lastCommittedValue = null;
          const {
            data: _,
            target: w
          } = E, {
            value: C,
            selectionStart: M,
            selectionEnd: B
          } = w;
          let N = M, P = B;
          switch (E.inputType) {
            case "deleteWordBackward": {
              const U = /\w/;
              for (; N > 0 && !U.test(C[N - 1]); )
                N--;
              for (; N > 0 && U.test(C[N - 1]); )
                N--;
              break;
            }
            case "deleteWordForward": {
              const U = C.substring(M).match(/^\W*\w*/);
              U && (P += U[0].length);
              break;
            }
            case "deleteContentBackward":
              M === B && (N -= 1);
              break;
            case "deleteContentForward":
              M === B && (P += 1);
              break;
          }
          E.preventDefault(), this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: n,
              name: "Keystroke",
              value: C,
              change: _ || "",
              willCommit: !1,
              selStart: N,
              selEnd: P
            }
          });
        }), this._setEventListeners(s, d, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (E) => E.target.value);
      }
      if (A && s.addEventListener("blur", A), this.data.comb) {
        const E = (this.data.rect[2] - this.data.rect[0]) / c;
        s.classList.add("comb"), s.style.setProperty("--comb-width", `calc(${E}px * var(--total-scale-factor))`);
        const _ = this.data.textAlignment;
        if (_ === 1 || _ === 2) {
          const w = () => {
            const C = c - s.value.length;
            s.style.setProperty("--comb-offset", `${_ === 1 ? C >> 1 : C}`);
          };
          w();
          for (const C of ["input", "blur", "resetform", "updatefromsandbox"])
            s.addEventListener(C, w);
        }
      }
    } else
      s = document.createElement("div"), s.textContent = this.data.fieldValue, s.style.verticalAlign = "middle", s.style.display = "table-cell", this.data.hasOwnCanvas && (s.hidden = !0);
    return this._setTextStyle(s), this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container;
  }
}
class _1 extends Ls {
  constructor(t) {
    super(t, {
      isRenderable: !!t.data.hasOwnCanvas
    });
  }
}
class w1 extends Ls {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    const t = this.annotationStorage, n = this.data, s = n.id;
    let r = t.getValue(s, {
      value: n.exportValue === n.fieldValue
    }).value;
    typeof r == "string" && (r = r !== "Off", t.setValue(s, {
      value: r
    })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
    const l = document.createElement("input");
    return Ns.add(l), l.setAttribute("data-element-id", s), l.disabled = n.readOnly, this._setRequired(l, this.data.required), l.type = "checkbox", l.name = n.fieldName, r && l.setAttribute("checked", !0), l.setAttribute("exportValue", n.exportValue), l.tabIndex = 0, l.addEventListener("change", (c) => {
      const {
        name: u,
        checked: d
      } = c.target;
      for (const p of this._getElementsByName(u, s)) {
        const g = d && p.exportValue === n.exportValue;
        p.domElement && (p.domElement.checked = g), t.setValue(p.id, {
          value: g
        });
      }
      t.setValue(s, {
        value: d
      });
    }), l.addEventListener("resetform", (c) => {
      const u = n.defaultFieldValue || "Off";
      c.target.checked = u === n.exportValue;
    }), this.enableScripting && this.hasJSActions && (l.addEventListener("updatefromsandbox", (c) => {
      const u = {
        value(d) {
          d.target.checked = d.detail.value !== "Off", t.setValue(s, {
            value: d.target.checked
          });
        }
      };
      this._dispatchEventFromSandbox(u, c);
    }), this._setEventListeners(l, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (c) => c.target.checked)), this._setDefaultPropertiesFromJS(l), this.container.append(l), this.container;
  }
}
class C1 extends Ls {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    this.container.classList.add("buttonWidgetAnnotation", "radioButton");
    const t = this.annotationStorage, n = this.data, s = n.id;
    let r = t.getValue(s, {
      value: n.buttonValue !== null && n.fieldValue === n.buttonValue
    }).value;
    if (typeof r == "string" && (r = r !== n.buttonValue, t.setValue(s, {
      value: r
    })), r)
      for (const c of this._getElementsByName(n.fieldName, s))
        t.setValue(c.id, {
          value: !1
        });
    const l = document.createElement("input");
    if (Ns.add(l), l.setAttribute("data-element-id", s), l.disabled = n.readOnly, this._setRequired(l, this.data.required), l.type = "radio", l.name = n.fieldName, r && l.setAttribute("checked", !0), l.tabIndex = 0, l.addEventListener("change", (c) => {
      const {
        name: u,
        checked: d
      } = c.target;
      for (const p of this._getElementsByName(u, s))
        t.setValue(p.id, {
          value: !1
        });
      t.setValue(s, {
        value: d
      });
    }), l.addEventListener("resetform", (c) => {
      const u = n.defaultFieldValue;
      c.target.checked = u != null && u === n.buttonValue;
    }), this.enableScripting && this.hasJSActions) {
      const c = n.buttonValue;
      l.addEventListener("updatefromsandbox", (u) => {
        const d = {
          value: (p) => {
            const g = c === p.detail.value;
            for (const m of this._getElementsByName(p.target.name)) {
              const v = g && m.id === s;
              m.domElement && (m.domElement.checked = v), t.setValue(m.id, {
                value: v
              });
            }
          }
        };
        this._dispatchEventFromSandbox(d, u);
      }), this._setEventListeners(l, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (u) => u.target.checked);
    }
    return this._setDefaultPropertiesFromJS(l), this.container.append(l), this.container;
  }
}
class x1 extends xd {
  constructor(t) {
    super(t, {
      ignoreBorder: t.data.hasAppearance
    });
  }
  render() {
    const t = super.render();
    t.classList.add("buttonWidgetAnnotation", "pushButton");
    const n = t.lastChild;
    return this.enableScripting && this.hasJSActions && n && (this._setDefaultPropertiesFromJS(n), n.addEventListener("updatefromsandbox", (s) => {
      this._dispatchEventFromSandbox({}, s);
    })), t;
  }
}
class M1 extends Ls {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    this.container.classList.add("choiceWidgetAnnotation");
    const t = this.annotationStorage, n = this.data.id, s = t.getValue(n, {
      value: this.data.fieldValue
    }), r = document.createElement("select");
    Ns.add(r), r.setAttribute("data-element-id", n), r.disabled = this.data.readOnly, this._setRequired(r, this.data.required), r.name = this.data.fieldName, r.tabIndex = 0;
    let l = this.data.combo && this.data.options.length > 0;
    this.data.combo || (r.size = this.data.options.length, this.data.multiSelect && (r.multiple = !0)), r.addEventListener("resetform", (m) => {
      const v = this.data.defaultFieldValue;
      for (const A of r.options)
        A.selected = A.value === v;
    });
    const c = (m, v) => {
      const A = v.replaceAll(" ", " ");
      m.textContent = A, A !== v && m.setAttribute("display-value", v);
    };
    for (const m of this.data.options) {
      const v = document.createElement("option");
      c(v, m.displayValue), v.value = m.exportValue, s.value.includes(m.exportValue) && (v.setAttribute("selected", !0), l = !1), r.append(v);
    }
    let u = null;
    if (l) {
      const m = document.createElement("option");
      m.value = " ", m.setAttribute("hidden", !0), m.setAttribute("selected", !0), r.prepend(m), u = () => {
        m.remove(), r.removeEventListener("input", u), u = null;
      }, r.addEventListener("input", u);
    }
    const d = (m) => {
      const v = m ? "value" : "textContent", {
        options: A,
        multiple: S
      } = r;
      return S ? Array.prototype.filter.call(A, (E) => E.selected).map((E) => E[v]) : A.selectedIndex === -1 ? null : A[A.selectedIndex][v];
    };
    let p = d(!1);
    const g = (m) => {
      const v = m.target.options;
      return Array.prototype.map.call(v, (A) => ({
        displayValue: A.getAttribute("display-value") || A.textContent,
        exportValue: A.value
      }));
    };
    return this.enableScripting && this.hasJSActions ? (r.addEventListener("updatefromsandbox", (m) => {
      const v = {
        value(A) {
          u?.();
          const S = A.detail.value, E = new Set(Array.isArray(S) ? S : [S]);
          for (const _ of r.options)
            _.selected = E.has(_.value);
          t.setValue(n, {
            value: d(!0)
          }), p = d(!1);
        },
        multipleSelection(A) {
          r.multiple = !0;
        },
        remove(A) {
          const S = r.options, E = A.detail.remove;
          S[E].selected = !1, r.remove(E), S.length > 0 && Array.prototype.findIndex.call(S, (w) => w.selected) === -1 && (S[0].selected = !0), t.setValue(n, {
            value: d(!0),
            items: g(A)
          }), p = d(!1);
        },
        clear(A) {
          for (; r.length !== 0; )
            r.remove(0);
          t.setValue(n, {
            value: null,
            items: []
          }), p = d(!1);
        },
        insert(A) {
          const {
            index: S,
            displayValue: E,
            exportValue: _
          } = A.detail.insert, w = r.children[S], C = document.createElement("option");
          c(C, E), C.value = _, w ? w.before(C) : r.append(C), t.setValue(n, {
            value: d(!0),
            items: g(A)
          }), p = d(!1);
        },
        items(A) {
          const {
            items: S
          } = A.detail;
          for (; r.length !== 0; )
            r.remove(0);
          for (const E of S) {
            const {
              displayValue: _,
              exportValue: w
            } = E, C = document.createElement("option");
            c(C, _), C.value = w, r.append(C);
          }
          r.options.length > 0 && (r.options[0].selected = !0), t.setValue(n, {
            value: d(!0),
            items: g(A)
          }), p = d(!1);
        },
        indices(A) {
          const S = new Set(A.detail.indices);
          for (const E of A.target.options)
            E.selected = S.has(E.index);
          t.setValue(n, {
            value: d(!0)
          }), p = d(!1);
        },
        editable(A) {
          A.target.disabled = !A.detail.editable;
        }
      };
      this._dispatchEventFromSandbox(v, m);
    }), r.addEventListener("input", (m) => {
      const v = d(!0), A = d(!1);
      t.setValue(n, {
        value: v
      }), m.preventDefault(), this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: n,
          name: "Keystroke",
          value: p,
          change: A,
          changeEx: v,
          willCommit: !1,
          commitKey: 1,
          keyDown: !1
        }
      });
    }), this._setEventListeners(r, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (m) => m.target.value)) : r.addEventListener("input", function(m) {
      t.setValue(n, {
        value: d(!0)
      });
    }), this.data.combo && this._setTextStyle(r), this._setBackgroundColor(r), this._setDefaultPropertiesFromJS(r), this.container.append(r), this.container;
  }
}
class hd extends te {
  constructor(t) {
    const {
      data: n,
      elements: s,
      parent: r
    } = t, l = !!r._commentManager;
    if (super(t, {
      isRenderable: !l && te._hasPopupData(n)
    }), this.elements = s, l && te._hasPopupData(n)) {
      const c = this.popup = this.#t();
      for (const u of s)
        u.popup = c;
    } else
      this.popup = null;
  }
  #t() {
    return new D1({
      container: this.container,
      color: this.data.color,
      titleObj: this.data.titleObj,
      modificationDate: this.data.modificationDate || this.data.creationDate,
      contentsObj: this.data.contentsObj,
      richText: this.data.richText,
      rect: this.data.rect,
      parentRect: this.data.parentRect || null,
      parent: this.parent,
      elements: this.elements,
      open: this.data.open,
      commentManager: this.parent._commentManager
    });
  }
  render() {
    const {
      container: t
    } = this;
    t.classList.add("popupAnnotation"), t.role = "comment";
    const n = this.popup = this.#t(), s = [];
    for (const r of this.elements)
      r.popup = n, r.container.ariaHasPopup = "dialog", s.push(r.data.id), r.addHighlightArea();
    return this.container.setAttribute("aria-controls", s.map((r) => `${Da}${r}`).join(",")), this.container;
  }
}
class D1 {
  #t = null;
  #e = this.#V.bind(this);
  #n = this.#S.bind(this);
  #i = this.#C.bind(this);
  #s = this.#H.bind(this);
  #r = null;
  #a = null;
  #o = null;
  #l = null;
  #c = null;
  #d = null;
  #h = null;
  #f = !1;
  #g = null;
  #m = null;
  #u = null;
  #p = null;
  #y = null;
  #v = null;
  #b = null;
  #A = null;
  #T = null;
  #E = null;
  #_ = !1;
  #w = null;
  #O = null;
  constructor({
    container: t,
    color: n,
    elements: s,
    titleObj: r,
    modificationDate: l,
    contentsObj: c,
    richText: u,
    parent: d,
    rect: p,
    parentRect: g,
    open: m,
    commentManager: v = null
  }) {
    this.#a = t, this.#T = r, this.#o = c, this.#A = u, this.#d = d, this.#r = n, this.#b = p, this.#h = g, this.#c = s, this.#t = v, this.#w = s[0], this.#l = sd.toDateObject(l), this.trigger = s.flatMap((A) => A.getElementsToTriggerPopup()), v || (this.#M(), this.#a.hidden = !0, m && this.#H());
  }
  #M() {
    if (this.#m)
      return;
    this.#m = new AbortController();
    const {
      signal: t
    } = this.#m;
    for (const n of this.trigger)
      n.addEventListener("click", this.#s, {
        signal: t
      }), n.addEventListener("pointerenter", this.#i, {
        signal: t
      }), n.addEventListener("pointerleave", this.#n, {
        signal: t
      }), n.classList.add("popupTriggerArea");
    for (const n of this.#c)
      n.container?.addEventListener("keydown", this.#e, {
        signal: t
      });
  }
  #x() {
    const t = this.#c.find((n) => n.hasCommentButton);
    t && (this.#y = t._normalizePoint(t.commentButtonPosition));
  }
  renderCommentButton() {
    if (this.#p) {
      this.#p.parentNode || this.#w.container.after(this.#p);
      return;
    }
    if (this.#y || this.#x(), !this.#y)
      return;
    const {
      signal: t
    } = this.#m = new AbortController(), n = this.#w.hasOwnCommentButton, s = () => {
      this.#t.toggleCommentPopup(this, !0, void 0, !n);
    }, r = () => {
      this.#t.toggleCommentPopup(this, !1, !0, !n);
    }, l = () => {
      this.#t.toggleCommentPopup(this, !1, !1);
    };
    if (n) {
      this.#p = this.#w.container;
      for (const c of this.trigger)
        c.ariaHasPopup = "dialog", c.ariaControls = "commentPopup", c.addEventListener("keydown", this.#e, {
          signal: t
        }), c.addEventListener("click", s, {
          signal: t
        }), c.addEventListener("pointerenter", r, {
          signal: t
        }), c.addEventListener("pointerleave", l, {
          signal: t
        }), c.classList.add("popupTriggerArea");
    } else {
      const c = this.#p = document.createElement("button");
      c.className = "annotationCommentButton";
      const u = this.#w.container;
      c.style.zIndex = parseInt(u.style.zIndex, 10) + 1, c.tabIndex = 0, c.ariaHasPopup = "dialog", c.ariaControls = "commentPopup", c.setAttribute("data-l10n-id", "pdfjs-show-comment-button"), this.#N(), this.#R(), c.addEventListener("keydown", this.#e, {
        signal: t
      }), c.addEventListener("click", s, {
        signal: t
      }), c.addEventListener("pointerenter", r, {
        signal: t
      }), c.addEventListener("pointerleave", l, {
        signal: t
      }), u.after(c);
    }
  }
  #R() {
    if (this.#w.extraPopupElement && !this.#w.editor)
      return;
    this.#p || this.renderCommentButton();
    const [t, n] = this.#y, {
      style: s
    } = this.#p;
    s.left = `calc(${t}%)`, s.top = `calc(${n}% - var(--comment-button-dim))`;
  }
  #N() {
    this.#w.extraPopupElement || (this.#p || this.renderCommentButton(), this.#p.style.backgroundColor = this.commentButtonColor || "");
  }
  get commentButtonColor() {
    const {
      color: t,
      opacity: n
    } = this.#w.commentData;
    return t ? this.#d._commentManager.makeCommentColor(t, n) : null;
  }
  focusCommentButton() {
    setTimeout(() => {
      this.#p?.focus();
    }, 0);
  }
  getData() {
    const {
      richText: t,
      color: n,
      opacity: s,
      creationDate: r,
      modificationDate: l
    } = this.#w.commentData;
    return {
      contentsObj: {
        str: this.comment
      },
      richText: t,
      color: n,
      opacity: s,
      creationDate: r,
      modificationDate: l
    };
  }
  get elementBeforePopup() {
    return this.#p;
  }
  get comment() {
    return this.#O ||= this.#w.commentText, this.#O;
  }
  set comment(t) {
    t !== this.comment && (this.#w.commentText = this.#O = t);
  }
  focus() {
    this.#w.container?.focus();
  }
  get parentBoundingClientRect() {
    return this.#w.layer.getBoundingClientRect();
  }
  setCommentButtonStates({
    selected: t,
    hasPopup: n
  }) {
    this.#p && (this.#p.classList.toggle("selected", t), this.#p.ariaExpanded = n);
  }
  setSelectedCommentButton(t) {
    this.#p.classList.toggle("selected", t);
  }
  get commentPopupPosition() {
    if (this.#v)
      return this.#v;
    const {
      x: t,
      y: n,
      height: s
    } = this.#p.getBoundingClientRect(), {
      x: r,
      y: l,
      width: c,
      height: u
    } = this.#w.layer.getBoundingClientRect();
    return [(t - r) / c, (n + s - l) / u];
  }
  set commentPopupPosition(t) {
    this.#v = t;
  }
  hasDefaultPopupPosition() {
    return this.#v === null;
  }
  get commentButtonPosition() {
    return this.#y;
  }
  get commentButtonWidth() {
    return this.#p.getBoundingClientRect().width / this.parentBoundingClientRect.width;
  }
  editComment(t) {
    const [n, s] = this.#v || this.commentButtonPosition.map((p) => p / 100), r = this.parentBoundingClientRect, {
      x: l,
      y: c,
      width: u,
      height: d
    } = r;
    this.#t.showDialog(null, this, l + n * u, c + s * d, {
      ...t,
      parentDimensions: r
    });
  }
  render() {
    if (this.#g)
      return;
    const t = this.#g = document.createElement("div");
    if (t.className = "popup", this.#r) {
      const s = t.style.outlineColor = K.makeHexColor(...this.#r);
      t.style.backgroundColor = `color-mix(in srgb, ${s} 30%, white)`;
    }
    const n = document.createElement("span");
    if (n.className = "header", this.#T?.str) {
      const s = document.createElement("span");
      s.className = "title", n.append(s), {
        dir: s.dir,
        str: s.textContent
      } = this.#T;
    }
    if (t.append(n), this.#l) {
      const s = document.createElement("time");
      s.className = "popupDate", s.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string"), s.setAttribute("data-l10n-args", JSON.stringify({
        dateObj: this.#l.valueOf()
      })), s.dateTime = this.#l.toISOString(), n.append(s);
    }
    Jy({
      html: this.#L || this.#o.str,
      dir: this.#o?.dir,
      className: "popupContent"
    }, t), this.#a.append(t);
  }
  get #L() {
    const t = this.#A, n = this.#o;
    return t?.str && (!n?.str || n.str === t.str) && this.#A.html || null;
  }
  get #U() {
    return this.#L?.attributes?.style?.fontSize || 0;
  }
  get #k() {
    return this.#L?.attributes?.style?.color || null;
  }
  #P(t) {
    const n = [], s = {
      str: t,
      html: {
        name: "div",
        attributes: {
          dir: "auto"
        },
        children: [{
          name: "p",
          children: n
        }]
      }
    }, r = {
      style: {
        color: this.#k,
        fontSize: this.#U ? `calc(${this.#U}px * var(--total-scale-factor))` : ""
      }
    };
    for (const l of t.split(`
`))
      n.push({
        name: "span",
        value: l,
        attributes: r
      });
    return s;
  }
  #V(t) {
    t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || (t.key === "Enter" || t.key === "Escape" && this.#f) && this.#H();
  }
  updateEdited({
    rect: t,
    popup: n,
    deleted: s
  }) {
    if (this.#t) {
      s ? (this.remove(), this.#O = null) : n && (n.deleted ? this.remove() : (this.#N(), this.#O = n.text)), t && (this.#y = null, this.#x(), this.#R());
      return;
    }
    if (s || n?.deleted) {
      this.remove();
      return;
    }
    this.#M(), this.#E ||= {
      contentsObj: this.#o,
      richText: this.#A
    }, t && (this.#u = null), n && n.text && (this.#A = this.#P(n.text), this.#l = sd.toDateObject(n.date), this.#o = null), this.#g?.remove(), this.#g = null;
  }
  resetEdited() {
    this.#E && ({
      contentsObj: this.#o,
      richText: this.#A
    } = this.#E, this.#E = null, this.#g?.remove(), this.#g = null, this.#u = null);
  }
  remove() {
    if (this.#m?.abort(), this.#m = null, this.#g?.remove(), this.#g = null, this.#_ = !1, this.#f = !1, this.#p?.remove(), this.#p = null, this.trigger)
      for (const t of this.trigger)
        t.classList.remove("popupTriggerArea");
  }
  #I() {
    if (this.#u !== null)
      return;
    const {
      page: {
        view: t
      },
      viewport: {
        rawDims: {
          pageWidth: n,
          pageHeight: s,
          pageX: r,
          pageY: l
        }
      }
    } = this.#d;
    let c = !!this.#h, u = c ? this.#h : this.#b;
    for (const S of this.#c)
      if (!u || K.intersect(S.data.rect, u) !== null) {
        u = S.data.rect, c = !0;
        break;
      }
    const d = K.normalizeRect([u[0], t[3] - u[1] + t[1], u[2], t[3] - u[3] + t[1]]), g = c ? u[2] - u[0] + 5 : 0, m = d[0] + g, v = d[1];
    this.#u = [100 * (m - r) / n, 100 * (v - l) / s];
    const {
      style: A
    } = this.#a;
    A.left = `${this.#u[0]}%`, A.top = `${this.#u[1]}%`;
  }
  #H() {
    if (this.#t) {
      this.#t.toggleCommentPopup(this, !1);
      return;
    }
    this.#f = !this.#f, this.#f ? (this.#C(), this.#a.addEventListener("click", this.#s), this.#a.addEventListener("keydown", this.#e)) : (this.#S(), this.#a.removeEventListener("click", this.#s), this.#a.removeEventListener("keydown", this.#e));
  }
  #C() {
    this.#g || this.render(), this.isVisible ? this.#f && this.#a.classList.add("focused") : (this.#I(), this.#a.hidden = !1, this.#a.style.zIndex = parseInt(this.#a.style.zIndex, 10) + 1e3);
  }
  #S() {
    this.#a.classList.remove("focused"), !(this.#f || !this.isVisible) && (this.#a.hidden = !0, this.#a.style.zIndex = parseInt(this.#a.style.zIndex, 10) - 1e3);
  }
  forceHide() {
    this.#_ = this.isVisible, this.#_ && (this.#a.hidden = !0);
  }
  maybeShow() {
    this.#t || (this.#M(), this.#_ && (this.#g || this.#C(), this.#_ = !1, this.#a.hidden = !1));
  }
  get isVisible() {
    return !this.#t && this.#a.hidden === !1;
  }
}
class A0 extends te {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.textContent = t.data.textContent, this.textPosition = t.data.textPosition, this.annotationEditorType = pt.FREETEXT;
  }
  render() {
    if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
      const t = this.contentElement = document.createElement("div");
      t.classList.add("annotationTextContent"), t.setAttribute("role", "comment");
      for (const n of this.textContent) {
        const s = document.createElement("span");
        s.textContent = n, t.append(s);
      }
      this.container.append(t);
    }
    return !this.data.popupRef && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this._editOnDoubleClick(), this.container;
  }
}
class O1 extends te {
  #t = null;
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    });
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const {
      data: t,
      width: n,
      height: s
    } = this, r = this.svgFactory.create(n, s, !0), l = this.#t = this.svgFactory.createElement("svg:line");
    return l.setAttribute("x1", t.rect[2] - t.lineCoordinates[0]), l.setAttribute("y1", t.rect[3] - t.lineCoordinates[1]), l.setAttribute("x2", t.rect[2] - t.lineCoordinates[2]), l.setAttribute("y2", t.rect[3] - t.lineCoordinates[3]), l.setAttribute("stroke-width", t.borderStyle.width || 1), l.setAttribute("stroke", "transparent"), l.setAttribute("fill", "transparent"), r.append(l), this.container.append(r), !t.popupRef && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container;
  }
  getElementsToTriggerPopup() {
    return this.#t;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
class N1 extends te {
  #t = null;
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    });
  }
  render() {
    this.container.classList.add("squareAnnotation");
    const {
      data: t,
      width: n,
      height: s
    } = this, r = this.svgFactory.create(n, s, !0), l = t.borderStyle.width, c = this.#t = this.svgFactory.createElement("svg:rect");
    return c.setAttribute("x", l / 2), c.setAttribute("y", l / 2), c.setAttribute("width", n - l), c.setAttribute("height", s - l), c.setAttribute("stroke-width", l || 1), c.setAttribute("stroke", "transparent"), c.setAttribute("fill", "transparent"), r.append(c), this.container.append(r), !t.popupRef && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container;
  }
  getElementsToTriggerPopup() {
    return this.#t;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
class R1 extends te {
  #t = null;
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    });
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const {
      data: t,
      width: n,
      height: s
    } = this, r = this.svgFactory.create(n, s, !0), l = t.borderStyle.width, c = this.#t = this.svgFactory.createElement("svg:ellipse");
    return c.setAttribute("cx", n / 2), c.setAttribute("cy", s / 2), c.setAttribute("rx", n / 2 - l / 2), c.setAttribute("ry", s / 2 - l / 2), c.setAttribute("stroke-width", l || 1), c.setAttribute("stroke", "transparent"), c.setAttribute("fill", "transparent"), r.append(c), this.container.append(r), !t.popupRef && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container;
  }
  getElementsToTriggerPopup() {
    return this.#t;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
class S0 extends te {
  #t = null;
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: t,
        vertices: n,
        borderStyle: s,
        popupRef: r
      },
      width: l,
      height: c
    } = this;
    if (!n)
      return this.container;
    const u = this.svgFactory.create(l, c, !0);
    let d = [];
    for (let g = 0, m = n.length; g < m; g += 2) {
      const v = n[g] - t[0], A = t[3] - n[g + 1];
      d.push(`${v},${A}`);
    }
    d = d.join(" ");
    const p = this.#t = this.svgFactory.createElement(this.svgElementName);
    return p.setAttribute("points", d), p.setAttribute("stroke-width", s.width || 1), p.setAttribute("stroke", "transparent"), p.setAttribute("fill", "transparent"), u.append(p), this.container.append(u), !r && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container;
  }
  getElementsToTriggerPopup() {
    return this.#t;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
class L1 extends S0 {
  constructor(t) {
    super(t), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
  }
}
class k1 extends te {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    });
  }
  render() {
    return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container;
  }
}
class Md extends te {
  #t = null;
  #e = [];
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = this.data.it === "InkHighlight" ? pt.HIGHLIGHT : pt.INK;
  }
  #n(t, n) {
    switch (t) {
      case 90:
        return {
          transform: `rotate(90) translate(${-n[0]},${n[1]}) scale(1,-1)`,
          width: n[3] - n[1],
          height: n[2] - n[0]
        };
      case 180:
        return {
          transform: `rotate(180) translate(${-n[2]},${n[1]}) scale(1,-1)`,
          width: n[2] - n[0],
          height: n[3] - n[1]
        };
      case 270:
        return {
          transform: `rotate(270) translate(${-n[2]},${n[3]}) scale(1,-1)`,
          width: n[3] - n[1],
          height: n[2] - n[0]
        };
      default:
        return {
          transform: `translate(${-n[0]},${n[3]}) scale(1,-1)`,
          width: n[2] - n[0],
          height: n[3] - n[1]
        };
    }
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: t,
        rotation: n,
        inkLists: s,
        borderStyle: r,
        popupRef: l
      }
    } = this, {
      transform: c,
      width: u,
      height: d
    } = this.#n(n, t), p = this.svgFactory.create(u, d, !0), g = this.#t = this.svgFactory.createElement("svg:g");
    p.append(g), g.setAttribute("stroke-width", r.width || 1), g.setAttribute("stroke-linecap", "round"), g.setAttribute("stroke-linejoin", "round"), g.setAttribute("stroke-miterlimit", 10), g.setAttribute("stroke", "transparent"), g.setAttribute("fill", "transparent"), g.setAttribute("transform", c);
    for (const m of s) {
      const v = this.svgFactory.createElement(this.svgElementName);
      this.#e.push(v), v.setAttribute("points", m.join(",")), g.append(v);
    }
    return !l && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container.append(p), this._editOnDoubleClick(), this.container;
  }
  updateEdited(t) {
    super.updateEdited(t);
    const {
      thickness: n,
      points: s,
      rect: r
    } = t, l = this.#t;
    if (n >= 0 && l.setAttribute("stroke-width", n || 1), s)
      for (let c = 0, u = this.#e.length; c < u; c++)
        this.#e[c].setAttribute("points", s[c].join(","));
    if (r) {
      const {
        transform: c,
        width: u,
        height: d
      } = this.#n(this.data.rotation, r);
      l.parentElement.setAttribute("viewBox", `0 0 ${u} ${d}`), l.setAttribute("transform", c);
    }
  }
  getElementsToTriggerPopup() {
    return this.#e;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
class E0 extends te {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    }), this.annotationEditorType = pt.HIGHLIGHT;
  }
  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: n
      }
    } = this;
    if (!n && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container.classList.add("highlightAnnotation"), this._editOnDoubleClick(), t) {
      const s = document.createElement("mark");
      s.classList.add("overlaidText"), s.textContent = t, this.container.append(s);
    }
    return this.container;
  }
}
class B1 extends te {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: n
      }
    } = this;
    if (!n && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container.classList.add("underlineAnnotation"), t) {
      const s = document.createElement("u");
      s.classList.add("overlaidText"), s.textContent = t, this.container.append(s);
    }
    return this.container;
  }
}
class P1 extends te {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: n
      }
    } = this;
    if (!n && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container.classList.add("squigglyAnnotation"), t) {
      const s = document.createElement("u");
      s.classList.add("overlaidText"), s.textContent = t, this.container.append(s);
    }
    return this.container;
  }
}
class I1 extends te {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: n
      }
    } = this;
    if (!n && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container.classList.add("strikeoutAnnotation"), t) {
      const s = document.createElement("s");
      s.classList.add("overlaidText"), s.textContent = t, this.container.append(s);
    }
    return this.container;
  }
}
class T0 extends te {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.annotationEditorType = pt.STAMP;
  }
  render() {
    return this.container.classList.add("stampAnnotation"), this.container.setAttribute("role", "img"), !this.data.popupRef && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this._editOnDoubleClick(), this.container;
  }
}
class F1 extends te {
  #t = null;
  constructor(t) {
    super(t, {
      isRenderable: !0
    });
    const {
      fileId: n,
      file: s
    } = this.data;
    this.filename = s.filename, this.content = s.content, this.fileId = n, this.linkService.eventBus?.dispatch("fileattachmentannotation", {
      source: this,
      attachmentId: this.fileId,
      ...s
    });
  }
  render() {
    this.container.classList.add("fileAttachmentAnnotation");
    const {
      container: t,
      data: n
    } = this;
    let s;
    n.hasAppearance || n.fillAlpha === 0 ? s = document.createElement("div") : (s = document.createElement("img"), s.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(n.name) ? "paperclip" : "pushpin"}.svg`, n.fillAlpha && n.fillAlpha < 1 && (s.style = `filter: opacity(${Math.round(n.fillAlpha * 100)}%);`)), s.addEventListener("dblclick", this.#e.bind(this)), this.#t = s;
    const {
      isMac: r
    } = Yt.platform;
    return t.addEventListener("keydown", (l) => {
      l.key === "Enter" && (r ? l.metaKey : l.ctrlKey) && this.#e();
    }), !n.popupRef && this.hasPopupData ? (this.hasOwnCommentButton = !0, this._createPopup()) : s.classList.add("popupTriggerArea"), t.append(s), t;
  }
  getElementsToTriggerPopup() {
    return this.#t;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
  async #e() {
    const {
      fileId: t,
      filename: n,
      content: s
    } = this, r = await this.linkService.getAttachmentContent(t) || s;
    r && this.downloadManager?.openOrDownloadData(r, n);
  }
}
class _0 extends te {
  #t = new AbortController();
  #e = null;
  #n = null;
  constructor(t) {
    super(t, {
      isRenderable: !!t.data.richMedia
    });
  }
  render() {
    this.container.classList.add("mediaAnnotation");
    const {
      filename: t
    } = this.data.richMedia, n = document.createElement("button");
    return n.className = "mediaPlayButton", n.type = "button", n.title = n.ariaLabel = t, n.addEventListener("click", () => this.#i(n), {
      signal: this.#t.signal
    }), this.container.append(n), this.container;
  }
  async #i(t) {
    const {
      fileId: n,
      filename: s,
      contentType: r
    } = this.data.richMedia;
    t.disabled = !0;
    let l;
    try {
      l = await this.linkService.getAttachmentContent(n);
    } catch {
      return;
    } finally {
      t.disabled = !1;
    }
    if (!l || !t.isConnected)
      return;
    const {
      signal: c
    } = this.#t, u = URL.createObjectURL(new Blob([l], {
      type: r
    }));
    this.#e = u;
    const d = r.startsWith("audio/"), p = document.createElement(d ? "audio" : "video");
    if (this.#n = p, p.className = "mediaContent", this._setBackgroundColor(p), p.src = u, p.title = s, p.controls = !0, p.autoplay = !0, p.tabIndex = 0, d) {
      let g = !1, m = !1;
      const v = () => {
        p.controls = g || m;
      };
      this.container.addEventListener("pointerenter", () => {
        g = !0, v();
      }, {
        signal: c
      }), this.container.addEventListener("pointerleave", () => {
        g = !1, v();
      }, {
        signal: c
      }), this.container.addEventListener("focusin", () => {
        m = !0, v();
      }, {
        signal: c
      }), this.container.addEventListener("focusout", () => {
        m = !1, v();
      }, {
        signal: c
      });
    }
    p.addEventListener("emptied", () => this.#s(u), {
      once: !0,
      signal: c
    }), t.replaceWith(p), p.play().catch(() => {
    });
  }
  #s(t = this.#e) {
    t && t === this.#e && (URL.revokeObjectURL(t), this.#e = null);
  }
  destroy() {
    this.#t.abort(), this.#n && (this.#n.pause(), this.#n.removeAttribute("src"), this.#n.load(), this.#n = null), this.#s();
  }
}
class Dd {
  #t = null;
  #e = null;
  #n = null;
  #i = /* @__PURE__ */ new Map();
  #s = null;
  #r = null;
  #a = [];
  #o = !1;
  zIndex = 0;
  constructor({
    div: t,
    accessibilityManager: n,
    annotationCanvasMap: s,
    annotationEditorUIManager: r,
    page: l,
    viewport: c,
    structTreeLayer: u,
    commentManager: d,
    linkService: p,
    annotationStorage: g
  }) {
    this.div = t, this.#t = n, this.#e = s, this.#s = u || null, this.#r = p || null, this.#n = g || new Ed(), this.page = l, this.viewport = c, this._annotationEditorUIManager = r, this._commentManager = d || null;
  }
  hasEditableAnnotations() {
    return this.#i.size > 0;
  }
  async render(t) {
    const {
      annotations: n,
      optionalContentConfig: s
    } = t, r = this.div;
    Os(r, this.viewport);
    const l = /* @__PURE__ */ new Map(), c = [], u = {
      data: null,
      layer: r,
      linkService: this.#r,
      downloadManager: t.downloadManager,
      imageResourcesPath: t.imageResourcesPath || "",
      renderForms: t.renderForms !== !1,
      svgFactory: new jl(),
      annotationStorage: this.#n,
      enableComment: t.enableComment === !0,
      enableScripting: t.enableScripting === !0,
      hasJSActions: t.hasJSActions,
      fieldObjects: t.fieldObjects,
      parent: this,
      elements: null
    };
    for (const d of n) {
      if (d.noHTML)
        continue;
      const p = d.annotationType === ne.POPUP;
      if (p) {
        const v = l.get(d.id);
        if (!v)
          continue;
        if (!this._commentManager) {
          c.push(d);
          continue;
        }
        u.elements = v;
      } else if (d.rect[2] === d.rect[0] || d.rect[3] === d.rect[1])
        continue;
      u.data = d;
      const g = Wh.create(u);
      if (!g.isRenderable)
        continue;
      p || (this.#a.push(g), d.popupRef && l.getOrInsertComputed(d.popupRef, Ba).push(g));
      const m = g.render();
      d.hidden && (m.style.visibility = "hidden"), g.updateOC(s), g._isEditable && (this.#i.set(g.data.id, g), this._annotationEditorUIManager?.renderAnnotationElement(g));
    }
    await this.#l();
    for (const d of c) {
      const p = u.elements = l.get(d.id);
      u.data = d;
      const g = Wh.create(u);
      if (!g.isRenderable)
        continue;
      const m = g.render();
      g.contentElement.id = `${Da}${d.id}`, d.hidden && (m.style.visibility = "hidden"), p.at(-1).container.after(m);
    }
    this.#c();
  }
  async #l() {
    if (this.#a.length === 0)
      return;
    this.div.replaceChildren();
    const t = [];
    if (!this.#o) {
      this.#o = !0;
      for (const {
        contentElement: s,
        data: {
          hidden: r,
          id: l,
          oc: c
        }
      } of this.#a) {
        const u = s.id = `${Da}${l}`, d = s.localName === "a" && !r && !c;
        t.push(this.#s?.getAriaAttributes(u, {
          enableLinkOwnership: d
        }).then((p) => {
          if (p)
            for (const [g, m] of p)
              s.setAttribute(g, m);
        }));
      }
    }
    this.#a.sort(({
      data: {
        rect: [s, r, l, c]
      }
    }, {
      data: {
        rect: [u, d, p, g]
      }
    }) => {
      if (s === l && r === c)
        return 1;
      if (u === p && d === g)
        return -1;
      const m = c, v = r, A = (r + c) / 2, S = g, E = d, _ = (d + g) / 2;
      if (A >= S && _ <= v)
        return -1;
      if (_ >= m && A <= E)
        return 1;
      const w = (s + l) / 2, C = (u + p) / 2;
      return w - C;
    });
    const n = document.createDocumentFragment();
    for (const s of this.#a)
      n.append(s.container), this._commentManager ? (s.extraPopupElement?.popup || s.popup)?.renderCommentButton() : s.extraPopupElement && n.append(s.extraPopupElement.render());
    if (this.div.append(n), await Promise.all(t), this.#t) {
      const s = await this.#s?.getAnnotationIds();
      for (const {
        contentElement: r
      } of this.#a)
        s?.has(r.id) || this.#t.addPointerInTextLayer(r, !1);
    }
  }
  async addLinkAnnotations(t) {
    const n = {
      data: null,
      layer: this.div,
      linkService: this.#r,
      svgFactory: new jl(),
      parent: this
    };
    for (const s of t) {
      s.borderStyle ||= Dd._defaultBorderStyle, n.data = s;
      const r = Wh.create(n);
      r.isRenderable && (r.render(), r.contentElement.id = `${Da}${s.id}`, this.#a.push(r));
    }
    await this.#l();
  }
  update({
    viewport: t,
    optionalContentConfig: n
  }) {
    const s = this.div;
    this.viewport = t, Os(s, {
      rotation: t.rotation
    });
    for (const r of this.#a)
      r.updateOC(n);
    this.#c(), s.hidden = !1;
  }
  destroy() {
    for (const t of this.#a)
      t.destroy?.(), this.#t?.removePointerInTextLayer(t.contentElement);
    this.#a.length = 0, this.#i.clear(), this.div.replaceChildren();
  }
  #c() {
    if (!this.#e)
      return;
    const t = this.div;
    for (const [n, s] of this.#e) {
      const r = t.querySelector(`[data-annotation-id="${n}"]`);
      if (!r)
        continue;
      if (Array.isArray(s))
        for (const p of s)
          p.className = "annotationContent", p.ariaHidden = !0;
      else
        s.className = "annotationContent", s.ariaHidden = !0;
      const l = [];
      for (const p of r.children)
        p.nodeName === "CANVAS" && l.push(p);
      for (const p of l)
        p.remove();
      const c = Array.isArray(s) ? s[0] : s, {
        firstChild: u
      } = r;
      if (u ? u.classList.contains("annotationContent") ? u.after(c) : u.before(c) : r.append(c), Array.isArray(s)) {
        let p = c;
        for (let g = 1, m = s.length; g < m; g++)
          p.after(s[g]), p = s[g];
      }
      this.#e.delete(n);
      const d = this.#i.get(n);
      d && (d._hasNoCanvas ? (this._annotationEditorUIManager?.setMissingCanvas(n, r.id, s), d._hasNoCanvas = !1) : d.canvas = s);
    }
  }
  refreshCanvases() {
    this.#c();
  }
  getEditableAnnotations() {
    return this.#i.values();
  }
  getEditableAnnotation(t) {
    return this.#i.get(t);
  }
  addFakeAnnotation(t) {
    const {
      div: n
    } = this, {
      id: s,
      rotation: r
    } = t, l = new S1({
      data: {
        id: s,
        rect: t.getPDFRect(),
        rotation: r
      },
      editor: t,
      layer: n,
      parent: this,
      enableComment: !!this._commentManager,
      linkService: this.#r,
      annotationStorage: this.#n
    });
    return l.render(), l.contentElement.id = `${Da}${s}`, l.createOrUpdatePopup(), this.#a.push(l), l;
  }
  removeAnnotation(t) {
    const n = this.#a.findIndex((r) => r.data.id === t);
    if (n < 0)
      return;
    const [s] = this.#a.splice(n, 1);
    this.#t?.removePointerInTextLayer(s.contentElement);
  }
  updateFakeAnnotations(t) {
    if (t.length !== 0) {
      for (const n of t)
        n.updateFakeAnnotationElement(this);
      this.#l();
    }
  }
  togglePointerEvents(t = !1) {
    this.div.classList.toggle("disabled", !t);
  }
  static get _defaultBorderStyle() {
    return lt(this, "_defaultBorderStyle", Object.freeze({
      width: 1,
      rawWidth: 1,
      style: Ca.SOLID,
      dashArray: [3],
      horizontalCornerRadius: 0,
      verticalCornerRadius: 0
    }));
  }
}
const Nl = /\r\n?|\n/g;
class Se extends rt {
  #t = "";
  #e = `${this.id}-editor`;
  #n = null;
  #i;
  _colorPicker = null;
  static _freeTextDefaultContent = "";
  static _internalPadding = 0;
  static _defaultColor = null;
  static _defaultFontSize = 10;
  static get _keyboardManager() {
    const t = Se.prototype, n = (l) => l.isEmpty(), s = $i.TRANSLATE_SMALL, r = $i.TRANSLATE_BIG;
    return lt(this, "_keyboardManager", new ln([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], t.commitOrRemove, {
      bubbles: !0
    }], [["ctrl+Enter", "mac+meta+Enter"], t.commitOrRemove], [["Escape"], t.commitOrRemove], [["ArrowLeft"], t._translateEmpty, {
      args: [-s, 0],
      checker: n
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t._translateEmpty, {
      args: [-r, 0],
      checker: n
    }], [["ArrowRight"], t._translateEmpty, {
      args: [s, 0],
      checker: n
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t._translateEmpty, {
      args: [r, 0],
      checker: n
    }], [["ArrowUp"], t._translateEmpty, {
      args: [0, -s],
      checker: n
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t._translateEmpty, {
      args: [0, -r],
      checker: n
    }], [["ArrowDown"], t._translateEmpty, {
      args: [0, s],
      checker: n
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t._translateEmpty, {
      args: [0, r],
      checker: n
    }]]));
  }
  static _type = "freetext";
  static _editorType = pt.FREETEXT;
  constructor(t) {
    super({
      ...t,
      name: "freeTextEditor"
    }), this.color = t.color || Se._defaultColor || rt._defaultLineColor, this.#i = t.fontSize || Se._defaultFontSize, this.annotationElementId || this._uiManager.a11yAlert(rt._l10nAlert.freetext), this.canAddComment = !1;
  }
  static initialize(t, n) {
    rt.initialize(t, n);
    const s = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(s.getPropertyValue("--freetext-padding"));
  }
  static updateDefaultParams(t, n) {
    switch (t) {
      case Mt.FREETEXT_SIZE:
        Se._defaultFontSize = n;
        break;
      case Mt.FREETEXT_COLOR:
        Se._defaultColor = n;
        break;
    }
  }
  updateParams(t, n) {
    switch (t) {
      case Mt.FREETEXT_SIZE:
        this.#s(n);
        break;
      case Mt.FREETEXT_COLOR:
        this.#r(n);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[Mt.FREETEXT_SIZE, Se._defaultFontSize], [Mt.FREETEXT_COLOR, Se._defaultColor || rt._defaultLineColor]];
  }
  get propertiesToUpdate() {
    return [[Mt.FREETEXT_SIZE, this.#i], [Mt.FREETEXT_COLOR, this.color]];
  }
  get toolbarButtons() {
    return this._colorPicker ||= new Vr(this), [["colorPicker", this._colorPicker]];
  }
  get colorType() {
    return Mt.FREETEXT_COLOR;
  }
  #s(t) {
    const n = (r) => {
      this.editorDiv.style.fontSize = `calc(${r}px * var(--total-scale-factor))`, this.translate(0, -(r - this.#i) * this.parentScale), this.#i = r, this.#o();
    }, s = this.#i;
    this.addCommands({
      cmd: n.bind(this, t),
      undo: n.bind(this, s),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: !0,
      type: Mt.FREETEXT_SIZE,
      overwriteIfSameType: !0,
      keepUndo: !0
    });
  }
  onUpdatedColor() {
    this.editorDiv.style.color = this.color, this._colorPicker?.update(this.color), super.onUpdatedColor();
  }
  #r(t) {
    const n = (r) => {
      this.color = r, this.onUpdatedColor();
    }, s = this.color;
    this.addCommands({
      cmd: n.bind(this, t),
      undo: n.bind(this, s),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: !0,
      type: Mt.FREETEXT_COLOR,
      overwriteIfSameType: !0,
      keepUndo: !0
    });
  }
  _translateEmpty(t, n) {
    this._uiManager.translateSelectedEditors(t, n, !0);
  }
  getInitialTranslation() {
    const t = this.parentScale;
    return [-Se._internalPadding * t, -(Se._internalPadding + this.#i) * t];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
  }
  enableEditMode() {
    if (!super.enableEditMode())
      return !1;
    this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant"), this.#n = new AbortController();
    const t = this._uiManager.combinedSignal(this.#n);
    return this.editorDiv.addEventListener("keydown", this.editorDivKeydown.bind(this), {
      signal: t
    }), this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), {
      signal: t
    }), this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), {
      signal: t
    }), this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), {
      signal: t
    }), this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), {
      signal: t
    }), !0;
  }
  disableEditMode() {
    return super.disableEditMode() ? (this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", this.#e), this._isDraggable = !0, this.#n?.abort(), this.#n = null, this.div.focus({
      preventScroll: !0
    }), this.isEditing = !1, this.parent.div.classList.add("freetextEditing"), !0) : !1;
  }
  focusin(t) {
    this._focusEventsAllowed && (super.focusin(t), t.target !== this.editorDiv && this.editorDiv.focus());
  }
  onceAdded(t) {
    this.width || (this.enableEditMode(), t && this.editorDiv.focus(), this._initialOptions?.isCentered && this.center(), this._initialOptions = null);
  }
  isEmpty() {
    return !this.editorDiv || this.editorDiv.innerText.trim() === "";
  }
  remove() {
    this.isEditing = !1, this.parent && (this.parent.setEditingState(!0), this.parent.div.classList.add("freetextEditing")), super.remove();
  }
  #a() {
    const t = [];
    this.editorDiv.normalize();
    let n = null;
    for (const s of this.editorDiv.childNodes)
      n?.nodeType === Node.TEXT_NODE && s.nodeName === "BR" || (t.push(Se.#l(s)), n = s);
    return t.join(`
`);
  }
  #o() {
    const [t, n] = this.parentDimensions;
    let s;
    if (this.isAttachedToDOM)
      s = this.div.getBoundingClientRect();
    else {
      const {
        currentLayer: r,
        div: l
      } = this, c = l.style.display, u = l.classList.contains("hidden");
      l.classList.remove("hidden"), l.style.display = "hidden", r.div.append(this.div), s = l.getBoundingClientRect(), l.remove(), l.style.display = c, l.classList.toggle("hidden", u);
    }
    this.rotation % 180 === this.parentRotation % 180 ? (this.width = s.width / t, this.height = s.height / n) : (this.width = s.height / t, this.height = s.width / n), this.fixAndSetPosition();
  }
  commit() {
    if (!this.isInEditMode())
      return;
    super.commit(), this.disableEditMode();
    const t = this.#t, n = this.#t = this.#a().trimEnd();
    if (t === n)
      return;
    const s = (r) => {
      if (this.#t = r, !r) {
        this.remove();
        return;
      }
      this.#c(), this._uiManager.rebuild(this), this.#o();
    };
    this.addCommands({
      cmd: () => {
        s(n);
      },
      undo: () => {
        s(t);
      },
      mustExec: !1
    }), this.#o();
  }
  shouldGetKeyboardEvents() {
    return this.isInEditMode();
  }
  enterInEditMode() {
    this.enableEditMode(), this.editorDiv.focus();
  }
  keydown(t) {
    t.target === this.div && t.key === "Enter" && (this.enterInEditMode(), t.preventDefault());
  }
  editorDivKeydown(t) {
    Se._keyboardManager.exec(this, t);
  }
  editorDivFocus(t) {
    this.isEditing = !0;
  }
  editorDivBlur(t) {
    this.isEditing = !1;
  }
  editorDivInput(t) {
    this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
  }
  disableEditing() {
    this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
  }
  enableEditing() {
    this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", !0);
  }
  get canChangeContent() {
    return !0;
  }
  render() {
    if (this.div)
      return this.div;
    let t, n;
    (this._isCopy || this.annotationElementId) && (t = this.x, n = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", this.#e), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2"), this.editorDiv.setAttribute("data-l10n-attrs", "default-content"), this.enableEditing(), this.editorDiv.contentEditable = !0;
    const {
      style: s
    } = this.editorDiv;
    if (s.fontSize = `calc(${this.#i}px * var(--total-scale-factor))`, s.color = this.color, this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), this._isCopy || this.annotationElementId) {
      const [r, l] = this.parentDimensions;
      if (this.annotationElementId) {
        const {
          position: c
        } = this._initialData;
        let [u, d] = this.getInitialTranslation();
        [u, d] = this.pageTranslationToScreen(u, d);
        const [p, g] = this.pageDimensions, [m, v] = this.pageTranslation;
        let A, S;
        switch (this.rotation) {
          case 0:
            A = t + (c[0] - m) / p, S = n + this.height - (c[1] - v) / g;
            break;
          case 90:
            A = t + (c[0] - m) / p, S = n - (c[1] - v) / g, [u, d] = [d, -u];
            break;
          case 180:
            A = t - this.width + (c[0] - m) / p, S = n - (c[1] - v) / g, [u, d] = [-u, -d];
            break;
          case 270:
            A = t + (c[0] - m - this.height * g) / p, S = n + (c[1] - v - this.width * p) / g, [u, d] = [-d, u];
            break;
        }
        this.setAt(A * r, S * l, u, d);
      } else
        this._moveAfterPaste(t, n);
      this.#c(), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
    } else
      this._isDraggable = !1, this.editorDiv.contentEditable = !0;
    return this.div;
  }
  static #l(t) {
    return (t.nodeType === Node.TEXT_NODE ? t.nodeValue : t.innerText).replaceAll(Nl, "");
  }
  editorDivPaste(t) {
    const n = t.clipboardData || window.clipboardData, {
      types: s
    } = n;
    if (s.length === 1 && s[0] === "text/plain")
      return;
    t.preventDefault();
    const r = Se.#h(n.getData("text") || "").replaceAll(Nl, `
`);
    if (!r)
      return;
    const l = window.getSelection();
    if (!l.rangeCount)
      return;
    this.editorDiv.normalize(), l.deleteFromDocument();
    const c = l.getRangeAt(0);
    if (!r.includes(`
`)) {
      c.insertNode(document.createTextNode(r)), this.editorDiv.normalize(), l.collapseToStart();
      return;
    }
    const {
      startContainer: u,
      startOffset: d
    } = c, p = [], g = [];
    if (u.nodeType === Node.TEXT_NODE) {
      const A = u.parentElement;
      if (g.push(u.nodeValue.slice(d).replaceAll(Nl, "")), A !== this.editorDiv) {
        let S = p;
        for (const E of this.editorDiv.childNodes) {
          if (E === A) {
            S = g;
            continue;
          }
          S.push(Se.#l(E));
        }
      }
      p.push(u.nodeValue.slice(0, d).replaceAll(Nl, ""));
    } else if (u === this.editorDiv) {
      let A = p, S = 0;
      for (const E of this.editorDiv.childNodes)
        S++ === d && (A = g), A.push(Se.#l(E));
    }
    this.#t = `${p.join(`
`)}${r}${g.join(`
`)}`, this.#c();
    const m = new Range();
    let v = Math.sumPrecise(p.map((A) => A.length));
    for (const {
      firstChild: A
    } of this.editorDiv.childNodes)
      if (A.nodeType === Node.TEXT_NODE) {
        const S = A.nodeValue.length;
        if (v <= S) {
          m.setStart(A, v), m.setEnd(A, v);
          break;
        }
        v -= S;
      }
    l.removeAllRanges(), l.addRange(m);
  }
  #c() {
    if (this.editorDiv.replaceChildren(), !!this.#t)
      for (const t of this.#t.split(`
`)) {
        const n = document.createElement("div");
        n.append(t ? document.createTextNode(t) : document.createElement("br")), this.editorDiv.append(n);
      }
  }
  #d() {
    return this.#t.replaceAll(" ", " ");
  }
  static #h(t) {
    return t.replaceAll(" ", " ");
  }
  get contentDiv() {
    return this.editorDiv;
  }
  getPDFRect() {
    const t = Se._internalPadding * this.parentScale;
    return this.getRect(t, t);
  }
  static async deserialize(t, n, s) {
    let r = null;
    if (t instanceof A0) {
      const {
        data: {
          defaultAppearanceData: {
            fontSize: c,
            fontColor: u
          },
          rect: d,
          rotation: p,
          id: g,
          popupRef: m,
          richText: v,
          contentsObj: A,
          creationDate: S,
          modificationDate: E
        },
        textContent: _,
        textPosition: w,
        parent: {
          page: {
            pageNumber: C
          }
        }
      } = t;
      if (!_?.length)
        return null;
      r = t = {
        annotationType: pt.FREETEXT,
        color: Array.from(u),
        fontSize: c,
        value: _.join(`
`),
        position: w,
        pageIndex: C - 1,
        rect: d.slice(0),
        rotation: p,
        annotationElementId: g,
        id: g,
        deleted: !1,
        popupRef: m,
        comment: A?.str || null,
        richText: v,
        creationDate: S,
        modificationDate: E
      };
    }
    const l = await super.deserialize(t, n, s);
    return l.#i = t.fontSize, l.color = K.makeHexColor(...t.color), l.#t = Se.#h(t.value), l._initialData = r, t.comment && l.setCommentData(t), l;
  }
  serialize(t = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const n = rt._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : this.color), s = Object.assign(super.serialize(t), {
      color: n,
      fontSize: this.#i,
      value: this.#d()
    });
    return this.addComment(s), t ? (s.isCopy = !0, s) : this.annotationElementId && !this.#f(s) ? null : (s.id = this.annotationElementId, s);
  }
  #f(t) {
    const {
      value: n,
      fontSize: s,
      color: r,
      pageIndex: l
    } = this._initialData;
    return this.hasEditedComment || this._hasBeenMoved || t.value !== n || t.fontSize !== s || t.color.some((c, u) => c !== r[u]) || t.pageIndex !== l;
  }
  renderAnnotationElement(t) {
    const n = super.renderAnnotationElement(t);
    if (!n)
      return null;
    const {
      style: s
    } = n;
    s.fontSize = `calc(${this.#i}px * var(--total-scale-factor))`, s.color = this.color, n.replaceChildren();
    for (const r of this.#t.split(`
`)) {
      const l = document.createElement("div");
      l.append(r ? document.createTextNode(r) : document.createElement("br")), n.append(l);
    }
    return t.updateEdited({
      rect: this.getPDFRect(),
      popup: this._uiManager.hasCommentManager() || this.hasEditedComment ? this.comment : {
        text: this.#t
      }
    }), n;
  }
  resetAnnotationElement(t) {
    super.resetAnnotationElement(t), t.resetEdited();
  }
}
class Od {
  #t = /* @__PURE__ */ Object.create(null);
  updateProperty(t, n) {
    this[t] = n, this.updateSVGProperty(t, n);
  }
  updateProperties(t) {
    if (t)
      for (const [n, s] of Object.entries(t))
        n.startsWith("_") || this.updateProperty(n, s);
  }
  updateSVGProperty(t, n) {
    this.#t[t] = n;
  }
  toSVGProperties() {
    const t = this.#t;
    return this.#t = /* @__PURE__ */ Object.create(null), {
      root: t
    };
  }
  reset() {
    this.#t = /* @__PURE__ */ Object.create(null);
  }
  updateAll(t = this) {
    this.updateProperties(t);
  }
  clone() {
    kt("Not implemented");
  }
}
class wt extends rt {
  #t = null;
  #e;
  _clipPathId = null;
  _colorPicker = null;
  _drawId = null;
  _drawOutlines = null;
  _focusDrawId = null;
  static _currentDrawId = -1;
  static _currentParent = null;
  static #n = null;
  static #i = null;
  static #s = null;
  static #r = null;
  static _INNER_MARGIN = 3;
  constructor(t) {
    super(t), this.#e = t.mustBeCommitted || !1, this._addOutlines(t);
  }
  onUpdatedColor() {
    this._colorPicker?.update(this.color), super.onUpdatedColor();
  }
  onUpdatedOpacity() {
    this._colorPicker?.updateOpacity?.(this.opacity);
  }
  _addOutlines(t) {
    t.drawOutlines && (this.#a(t), this.#m());
  }
  #a({
    drawOutlines: t,
    drawId: n,
    drawingOptions: s,
    clipPathId: r
  }) {
    this._drawOutlines = t, this._drawingOptions ||= s, this.annotationElementId || this._uiManager.a11yAlert(rt._l10nAlert[this.editorType]), n >= 0 ? (this._drawId = n, this._clipPathId = r ?? null, this.parent.drawLayer.finalizeDraw(n, t.defaultProperties), this.#l(this.parent)) : this._drawId = this.#o(t, this.parent), this.#y(t.box);
  }
  #o(t, n) {
    const {
      id: s,
      clipPathId: r
    } = n.drawLayer.draw(wt._mergeSVGProperties(this._drawingOptions.toSVGProperties(), t.defaultSVGProperties), !1, this.constructor._hasClipPath);
    return this.constructor._hasClipPath && (this._clipPathId = r), this.#l(n), s;
  }
  #l(t) {
    const n = this._drawOutlines.getFocusSVGProperties(this.#f);
    n && (this._focusDrawId = t.drawLayer.drawOutline(n, this._drawOutlines.focusMustRemoveSelfIntersections));
  }
  #c(t = this.#f) {
    this._focusDrawId !== null && this.parent?.drawLayer.updateProperties(this._focusDrawId, this._drawOutlines.getFocusSVGProperties(t));
  }
  #d(t) {
    this._focusDrawId !== null && this.parent?.drawLayer.updateProperties(this._focusDrawId, {
      rootClass: t
    });
  }
  #h() {
    const {
      parent: t,
      _drawId: n,
      _focusDrawId: s,
      _isVisible: r
    } = this;
    if (!t || n === null)
      return;
    const l = {
      hidden: !r
    };
    t.drawLayer.updateProperties(n, {
      rootClass: l
    }), s !== null && t.drawLayer.updateProperties(s, {
      rootClass: l
    });
  }
  static _mergeSVGProperties(t, n) {
    const s = new Set(Object.keys(t));
    for (const [r, l] of Object.entries(n))
      s.has(r) ? Object.assign(t[r], l) : t[r] = l;
    return t;
  }
  static getDefaultDrawingOptions(t) {
    kt("Not implemented");
  }
  static get typesMap() {
    kt("Not implemented");
  }
  static get isDrawer() {
    return !0;
  }
  static get _hasClipPath() {
    return !1;
  }
  static get _hasDrawClass() {
    return !0;
  }
  static get supportMultipleDrawings() {
    return !1;
  }
  get _drawRotation() {
    return this.rotation;
  }
  get _opacityName() {
    return this.constructor.typesMap.get(this.opacityType);
  }
  get #f() {
    return (this.parentRotation - this._drawRotation + 360) % 360;
  }
  static updateDefaultParams(t, n) {
    const s = this.typesMap.get(t);
    s && this._defaultDrawingOptions.updateProperty(s, n), this._currentParent && (wt.#n.updateProperty(s, n), this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
  }
  updateParams(t, n) {
    const s = this.constructor.typesMap.get(t);
    s && this._updateProperty(t, s, n);
  }
  static get defaultPropertiesToUpdate() {
    const t = [], n = this._defaultDrawingOptions;
    for (const [s, r] of this.typesMap)
      t.push([s, n[r]]);
    return t;
  }
  get propertiesToUpdate() {
    const t = [], {
      _drawingOptions: n
    } = this;
    for (const [s, r] of this.constructor.typesMap)
      t.push([s, n[r]]);
    return t;
  }
  _updateProperty(t, n, s) {
    const r = this._drawingOptions, l = r[n], c = (u) => {
      r.updateProperty(n, u);
      const d = this._drawOutlines.updateProperty(n, u);
      d && this.#y(d), this.parent?.drawLayer.updateProperties(this._drawId, r.toSVGProperties()), t === this.colorType ? this.onUpdatedColor() : t === this.opacityType && this.onUpdatedOpacity();
    };
    this.addCommands({
      cmd: c.bind(this, s),
      undo: c.bind(this, l),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: !0,
      type: t,
      overwriteIfSameType: !0,
      keepUndo: !0
    });
  }
  _updateColorAndOpacity(t, n, s = this.colorAndOpacityType) {
    const r = this.constructor.typesMap.get(this.colorType), l = this._opacityName, c = this._drawingOptions, u = c[r], d = c[l], p = (g, m) => {
      c.updateProperty(r, g), c.updateProperty(l, m), this._drawOutlines.updateProperty(r, g), this._drawOutlines.updateProperty(l, m), this.parent?.drawLayer.updateProperties(this._drawId, c.toSVGProperties()), this.onUpdatedColor(), this.onUpdatedOpacity();
    };
    this.addCommands({
      cmd: p.bind(this, t, n),
      undo: p.bind(this, u, d),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: !0,
      type: s,
      overwriteIfSameType: !0,
      keepUndo: !0
    });
  }
  _onResizing() {
    this.parent?.drawLayer.updateProperties(this._drawId, wt._mergeSVGProperties(this._drawOutlines.getPathResizingSVGProperties(this.#p()), {
      bbox: this.#v()
    }));
  }
  _onResized() {
    this.parent?.drawLayer.updateProperties(this._drawId, wt._mergeSVGProperties(this._drawOutlines.getPathResizedSVGProperties(this.#p()), {
      bbox: this.#v()
    })), this.#c();
  }
  _onTranslating(t, n) {
    this.parent?.drawLayer.updateProperties(this._drawId, {
      bbox: this.#v()
    });
  }
  _onTranslated() {
    this.parent?.drawLayer.updateProperties(this._drawId, wt._mergeSVGProperties(this._drawOutlines.getPathTranslatedSVGProperties(this.#p(), this.parentDimensions), {
      bbox: this.#v()
    }));
  }
  _onStartDragging() {
    this.parent?.drawLayer.updateProperties(this._drawId, {
      rootClass: {
        moving: !0
      }
    });
  }
  _onStopDragging() {
    this.parent?.drawLayer.updateProperties(this._drawId, {
      rootClass: {
        moving: !1
      }
    });
  }
  get _mustBeDisabledOnCommit() {
    return !0;
  }
  commit() {
    super.commit(), this._mustBeDisabledOnCommit && (this.disableEditMode(), this.disableEditing());
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", !0);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", !1);
  }
  getBaseTranslation() {
    return [0, 0];
  }
  get isResizable() {
    return !0;
  }
  onceAdded(t) {
    this.annotationElementId || this.parent.addUndoableEditor(this), this._isDraggable = !0, this.#e && (this.#e = !1, this.commit(), this.parent.setSelected(this), t && this.isOnScreen && this.div.focus());
  }
  remove() {
    this._uiManager.removeShouldRescale(this), this.#g(), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.#m(), this.#y(this._drawOutlines.box), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(t) {
    let n = !1;
    this.parent && !t ? (this._uiManager.removeShouldRescale(this), this.#g()) : t && (this._uiManager.addShouldRescale(this), this.#m(t), n = !this.parent && this.div?.classList.contains("selectedEditor")), super.setParent(t), this.#h(), n && this.select();
  }
  #g() {
    if (this._drawId === null || !this.parent)
      return;
    const {
      drawLayer: t
    } = this.parent;
    t.remove(this._drawId), this._drawId = null, this._focusDrawId !== null && (t.remove(this._focusDrawId), this._focusDrawId = null), this._drawingOptions.reset();
  }
  #m(t = this.parent) {
    if (!(this._drawId !== null && this.parent === t)) {
      if (this._drawId !== null) {
        const {
          drawLayer: n
        } = this.parent;
        n.updateParent(this._drawId, t.drawLayer), this._focusDrawId !== null && n.updateParent(this._focusDrawId, t.drawLayer);
        return;
      }
      this._drawingOptions.updateAll(), this._drawId = this.#o(this._drawOutlines, t), this._clipPathId && this.#t && (this.#t.style.clipPath = this._clipPathId);
    }
  }
  #u([t, n, s, r]) {
    const {
      parentDimensions: [l, c],
      _drawRotation: u
    } = this;
    switch (u) {
      case 90:
        return [n, 1 - t, s * (c / l), r * (l / c)];
      case 180:
        return [1 - t, 1 - n, s, r];
      case 270:
        return [1 - n, t, s * (c / l), r * (l / c)];
      default:
        return [t, n, s, r];
    }
  }
  #p() {
    const {
      x: t,
      y: n,
      width: s,
      height: r,
      parentDimensions: [l, c],
      _drawRotation: u
    } = this;
    switch (u) {
      case 90:
        return [1 - n, t, s * (l / c), r * (c / l)];
      case 180:
        return [1 - t, 1 - n, s, r];
      case 270:
        return [n, 1 - t, s * (l / c), r * (c / l)];
      default:
        return [t, n, s, r];
    }
  }
  #y(t) {
    [this.x, this.y, this.width, this.height] = this.#u(t), this.div && (this.fixAndSetPosition(), this.setDims()), this._onResized();
  }
  #v(t = this.parentRotation) {
    const {
      x: n,
      y: s,
      width: r,
      height: l,
      _drawRotation: c,
      parentDimensions: [u, d]
    } = this;
    switch ((c * 4 + t) / 90) {
      case 1:
        return [1 - s - l, n, l, r];
      case 2:
        return [1 - n - r, 1 - s - l, r, l];
      case 3:
        return [s, 1 - n - r, l, r];
      case 4:
        return [n, s - r * (u / d), l * (d / u), r * (u / d)];
      case 5:
        return [1 - s, n, r * (u / d), l * (d / u)];
      case 6:
        return [1 - n - l * (d / u), 1 - s, l * (d / u), r * (u / d)];
      case 7:
        return [s - r * (u / d), 1 - n - l * (d / u), r * (u / d), l * (d / u)];
      case 8:
        return [n - r, s - l, r, l];
      case 9:
        return [1 - s, n - r, l, r];
      case 10:
        return [1 - n, 1 - s, r, l];
      case 11:
        return [s - l, 1 - n, l, r];
      case 12:
        return [n - l * (d / u), s, l * (d / u), r * (u / d)];
      case 13:
        return [1 - s - r * (u / d), n - l * (d / u), r * (u / d), l * (d / u)];
      case 14:
        return [1 - n, 1 - s - r * (u / d), l * (d / u), r * (u / d)];
      case 15:
        return [s, 1 - n, r * (u / d), l * (d / u)];
      default:
        return [n, s, r, l];
    }
  }
  rotate(t = this.parentRotation) {
    if (!this.parent || this._drawId === null)
      return;
    const n = (t - this._drawRotation + 360) % 360;
    this.parent.drawLayer.updateProperties(this._drawId, wt._mergeSVGProperties({
      bbox: this.#v(t)
    }, this._drawOutlines.updateRotation(n))), this.#c(n);
  }
  show(t = this._isVisible) {
    super.show(t), this.#h();
  }
  select() {
    super.select(), this.#d({
      hovered: !1,
      selected: !0
    });
  }
  unselect() {
    super.unselect(), this.#d({
      selected: !1
    });
  }
  pointerover() {
    this.isSelected || this.#d({
      hovered: !0
    });
  }
  pointerleave() {
    this.isSelected || this.#d({
      hovered: !1
    });
  }
  onScaleChanging() {
    if (!this.parent)
      return;
    const t = this._drawOutlines.updateParentDimensions(this.parentDimensions, this.parent.scale);
    t && this.#y(t);
  }
  static onScaleChangingWhenDrawing() {
  }
  render() {
    if (this.div)
      return this.div;
    let t, n;
    this._isCopy && (t = this.x, n = this.y);
    const s = super.render();
    this.constructor._hasDrawClass && s.classList.add("draw");
    const r = this.#t = document.createElement("div");
    return s.append(r), r.setAttribute("aria-hidden", "true"), r.className = "internal", this._clipPathId && (r.style.clipPath = this._clipPathId), e0(this, r, ["pointerover", "pointerleave"]), this.setDims(), this._uiManager.addShouldRescale(this), this.disableEditing(), this._isCopy && this._moveAfterPaste(t, n), s;
  }
  static createDrawerInstance(t) {
    kt("Not implemented");
  }
  static _getDrawingTarget(t, {
    target: n
  }) {
    return n;
  }
  static _getPointerCoords({
    offsetX: t,
    offsetY: n,
    clientX: s,
    clientY: r
  }, l = null) {
    if (!l)
      return [t, n];
    let c = s - l.clientX, u = r - l.clientY;
    switch (this._currentParent.viewport.rotation) {
      case 90:
        [c, u] = [u, -c];
        break;
      case 180:
        [c, u] = [-c, -u];
        break;
      case 270:
        [c, u] = [-u, c];
        break;
    }
    return [l.offsetX + c, l.offsetY + u];
  }
  static _addDrawingListeners(t, n) {
  }
  static _endDrawingSession(t = !1) {
    return this._currentParent.endDrawingSession(t);
  }
  static startDrawing(t, n, s, r) {
    const {
      pointerId: l,
      pointerType: c
    } = r;
    if (Ft.isInitializedAndDifferentPointerType(c))
      return;
    const u = this._getDrawingTarget(t, r), [d, p] = this._getPointerCoords(r), {
      viewport: {
        rotation: g
      }
    } = t, {
      x: m,
      y: v,
      width: A,
      height: S
    } = u.getBoundingClientRect(), E = wt.#i = new AbortController(), _ = t.combinedSignal(E);
    if (Ft.setPointer(c, l), window.addEventListener("pointerup", (M) => {
      Ft.isSamePointerIdOrRemove(M.pointerId) && this._endDraw(M);
    }, {
      signal: _
    }), window.addEventListener("pointercancel", (M) => {
      Ft.isSamePointerIdOrRemove(M.pointerId) && this._endDrawingSession();
    }, {
      signal: _
    }), window.addEventListener("pointerdown", (M) => {
      Ft.isSamePointerType(M.pointerType) && (Ft.initializeAndAddPointerId(M.pointerId), wt.#n.isCancellable() && (wt.#n.removeLastElement(), wt.#n.isEmpty() ? this._endDrawingSession(!0) : this._endDraw(null)));
    }, {
      capture: !0,
      passive: !1,
      signal: _
    }), window.addEventListener("contextmenu", Rn, {
      signal: _
    }), u.addEventListener("pointermove", this._drawMove.bind(this), {
      signal: _
    }), u.addEventListener("touchmove", (M) => {
      Ft.isSameTimeStamp(M.timeStamp) && ge(M);
    }, {
      signal: _
    }), this._addDrawingListeners(u, _), t.toggleDrawing(), n._editorUndoBar?.hide(), wt.#n) {
      t.drawLayer.updateProperties(this._currentDrawId, wt.#n.startNew(d, p, A, S, g));
      return;
    }
    n.updateUIForDefaultProperties(this), wt.#n = this.createDrawerInstance({
      x: d,
      y: p,
      box: [m, v, A, S],
      rotation: g,
      parent: t,
      isLTR: s
    }), wt.#s = this.getDefaultDrawingOptions(), this._currentParent = t;
    const {
      id: w,
      clipPathId: C
    } = t.drawLayer.draw(this._mergeSVGProperties(wt.#s.toSVGProperties(), wt.#n.defaultSVGProperties), !0, this._hasClipPath);
    this._currentDrawId = w, wt.#r = this._hasClipPath ? C : null;
  }
  static _drawMove(t) {
    if (Ft.isSameTimeStamp(t.timeStamp), !wt.#n || !Ft.isSamePointerId(t.pointerId))
      return;
    if (Ft.isUsingMultiplePointers()) {
      this._endDraw(t);
      return;
    }
    let n;
    const s = t.getCoalescedEvents?.();
    if (s?.length) {
      const r = [];
      for (const l of s)
        r.push(...this._getPointerCoords(l, t));
      n = wt.#n.addPoints(r);
    } else
      n = wt.#n.add(...this._getPointerCoords(t));
    this._currentParent.drawLayer.updateProperties(this._currentDrawId, n), Ft.setTimeStamp(t.timeStamp), ge(t);
  }
  static _cleanup(t) {
    t && (this._currentDrawId = -1, this._currentParent = null, wt.#n = null, wt.#s = null, wt.#r = null, Ft.clearTimeStamp()), wt.#i && (wt.#i.abort(), wt.#i = null, Ft.clearPointerIds());
  }
  static _endDraw(t) {
    const n = this._currentParent;
    if (n) {
      if (n.toggleDrawing(!0), this._cleanup(!1), n.drawLayer.updateProperties(this._currentDrawId, t?.target === n.div ? wt.#n.end(...this._getPointerCoords(t)) : wt.#n.end()), this.supportMultipleDrawings) {
        const s = wt.#n, r = this._currentDrawId, l = s.getLastElement();
        n.addCommands({
          cmd: () => {
            n.drawLayer.updateProperties(r, s.setLastElement(l));
          },
          undo: () => {
            n.drawLayer.updateProperties(r, s.removeLastElement());
          },
          mustExec: !1,
          type: Mt.DRAW_STEP
        });
        return;
      }
      this.endDrawing(!1);
    }
  }
  static endDrawing(t) {
    const n = this._currentParent;
    if (!n)
      return null;
    if (n.toggleDrawing(!0), n.cleanUndoStack(Mt.DRAW_STEP), !wt.#n.isEmpty()) {
      const {
        pageDimensions: [s, r],
        scale: l
      } = n, c = n.createAndAddNewEditor({
        offsetX: 0,
        offsetY: 0
      }, !1, {
        drawId: this._currentDrawId,
        clipPathId: wt.#r,
        drawOutlines: wt.#n.getOutlines(s * l, r * l, l, this._INNER_MARGIN),
        drawingOptions: wt.#s,
        mustBeCommitted: !t
      });
      return this._cleanup(!0), c;
    }
    return n.drawLayer.remove(this._currentDrawId), this._cleanup(!0), null;
  }
  createDrawingOptions(t) {
  }
  static deserializeDraw(t, n, s, r, l, c, u) {
    kt("Not implemented");
  }
  static async deserialize(t, n, s) {
    const {
      rawDims: {
        pageWidth: r,
        pageHeight: l,
        pageX: c,
        pageY: u
      }
    } = n.viewport, d = this.deserializeDraw(c, u, r, l, this._INNER_MARGIN, t, s), p = await super.deserialize(t, n, s);
    return p.createDrawingOptions(t), p.#a({
      drawOutlines: d
    }), p.#m(), p.onScaleChanging(), p.rotate(), p;
  }
  serializeDraw(t) {
    const [n, s] = this.pageTranslation, [r, l] = this.pageDimensions;
    return this._drawOutlines.serialize([n, s, r, l], t);
  }
  renderAnnotationElement(t) {
    return t.updateEdited({
      rect: this.getPDFRect()
    }), null;
  }
  static canCreateNewEmptyEditor() {
    return !1;
  }
}
class J {
  static PRECISION = 1e-4;
  focusOutline = null;
  toSVGPath() {
    kt("Abstract method `toSVGPath` must be implemented.");
  }
  get box() {
    kt("Abstract getter `box` must be implemented.");
  }
  serialize(t, n) {
    kt("Abstract method `serialize` must be implemented.");
  }
  get defaultSVGProperties() {
    kt("Abstract getter `defaultSVGProperties` must be implemented.");
  }
  get defaultProperties() {
    return this.defaultSVGProperties;
  }
  getFocusSVGProperties(t) {
    return null;
  }
  get focusMustRemoveSelfIntersections() {
    return !1;
  }
  updateProperty(t, n) {
    return null;
  }
  updateParentDimensions(t, n) {
    return null;
  }
  serializeQuadPoints(t, n) {
    return null;
  }
  updateRotation(t) {
    return {};
  }
  getPathResizingSVGProperties(t) {
    return {};
  }
  getPathResizedSVGProperties(t) {
    return {};
  }
  getPathTranslatedSVGProperties(t, n) {
    return {};
  }
  static _rotateBox([t, n, s, r], l) {
    switch (l) {
      case 90:
        return [1 - n - r, t, r, s];
      case 180:
        return [1 - t - s, 1 - n - r, s, r];
      case 270:
        return [n, 1 - t - s, r, s];
    }
    return [t, n, s, r];
  }
  static _rescale(t, n, s, r, l, c) {
    c ||= new Float32Array(t.length);
    for (let u = 0, d = t.length; u < d; u += 2)
      c[u] = n + t[u] * r, c[u + 1] = s + t[u + 1] * l;
    return c;
  }
  static _rescaleAndSwap(t, n, s, r, l, c) {
    c ||= new Float32Array(t.length);
    for (let u = 0, d = t.length; u < d; u += 2)
      c[u] = n + t[u + 1] * r, c[u + 1] = s + t[u] * l;
    return c;
  }
  static _translate(t, n, s, r) {
    r ||= new Float32Array(t.length);
    for (let l = 0, c = t.length; l < c; l += 2)
      r[l] = n + t[l], r[l + 1] = s + t[l + 1];
    return r;
  }
  static svgRound(t) {
    return Math.round(t * 1e4);
  }
  static _normalizePoint(t, n, s, r, l) {
    switch (l) {
      case 90:
        return [1 - n / s, t / r];
      case 180:
        return [1 - t / s, 1 - n / r];
      case 270:
        return [n / s, 1 - t / r];
      default:
        return [t / s, n / r];
    }
  }
  static createBezierPoints(t, n, s, r, l, c) {
    return [(t + 5 * s) / 6, (n + 5 * r) / 6, (5 * s + l) / 6, (5 * r + c) / 6, (s + l) / 2, (r + c) / 2];
  }
}
class ws {
  #t;
  #e = [];
  #n;
  #i;
  #s = [];
  #r = new Float32Array(18);
  #a;
  #o;
  #l;
  #c;
  #d;
  #h;
  #f = [];
  static #g = 8;
  static #m = 2;
  static #u = ws.#g + ws.#m;
  constructor(t, n, s, r, l, c, u = 0) {
    this.#t = s, this.#h = l * r, this.#i = c, this.#r.set([NaN, NaN, NaN, NaN, t, n], 6), this.#n = u, this.#c = ws.#g * r, this.#l = ws.#u * r, this.#d = r, this.#f.push(t, n);
  }
  isEmpty() {
    return isNaN(this.#r[8]);
  }
  isCancellable() {
    return this.#f.length <= 10;
  }
  removeLastElement() {
    return this.#r.fill(NaN), this.#s.length = this.#e.length = this.#f.length = 0, {
      path: {
        d: ""
      }
    };
  }
  #p() {
    const t = this.#r.subarray(4, 6), n = this.#r.subarray(16, 18), [s, r, l, c] = this.#t;
    return [(this.#a + (t[0] - n[0]) / 2 - s) / l, (this.#o + (t[1] - n[1]) / 2 - r) / c, (this.#a + (n[0] - t[0]) / 2 - s) / l, (this.#o + (n[1] - t[1]) / 2 - r) / c];
  }
  add(t, n) {
    this.#a = t, this.#o = n;
    const [s, r, l, c] = this.#t;
    let [u, d, p, g] = this.#r.subarray(8, 12);
    const m = t - p, v = n - g, A = Math.hypot(m, v);
    if (A < this.#l)
      return !1;
    const S = A - this.#c, E = S / A, _ = E * m, w = E * v;
    let C = u, M = d;
    u = p, d = g, p += _, g += w, this.#f?.push(t, n);
    const B = -w / S, N = _ / S, P = B * this.#h, U = N * this.#h;
    return this.#r.set(this.#r.subarray(2, 8), 0), this.#r.set([p + P, g + U], 4), this.#r.set(this.#r.subarray(14, 18), 12), this.#r.set([p - P, g - U], 16), isNaN(this.#r[6]) ? (this.#s.length === 0 && (this.#r.set([u + P, d + U], 2), this.#s.push(NaN, NaN, NaN, NaN, (u + P - s) / l, (d + U - r) / c), this.#r.set([u - P, d - U], 14), this.#e.push(NaN, NaN, NaN, NaN, (u - P - s) / l, (d - U - r) / c)), this.#r.set([C, M, u, d, p, g], 6), !this.isEmpty()) : (this.#r.set([C, M, u, d, p, g], 6), Math.abs(Math.atan2(M - d, C - u) - Math.atan2(w, _)) < Math.PI / 2 ? ([u, d, p, g] = this.#r.subarray(2, 6), this.#s.push(NaN, NaN, NaN, NaN, ((u + p) / 2 - s) / l, ((d + g) / 2 - r) / c), [u, d, C, M] = this.#r.subarray(14, 18), this.#e.push(NaN, NaN, NaN, NaN, ((C + u) / 2 - s) / l, ((M + d) / 2 - r) / c), !0) : ([C, M, u, d, p, g] = this.#r.subarray(0, 6), this.#s.push(((C + 5 * u) / 6 - s) / l, ((M + 5 * d) / 6 - r) / c, ((5 * u + p) / 6 - s) / l, ((5 * d + g) / 6 - r) / c, ((u + p) / 2 - s) / l, ((d + g) / 2 - r) / c), [p, g, u, d, C, M] = this.#r.subarray(12, 18), this.#e.push(((C + 5 * u) / 6 - s) / l, ((M + 5 * d) / 6 - r) / c, ((5 * u + p) / 6 - s) / l, ((5 * d + g) / 6 - r) / c, ((u + p) / 2 - s) / l, ((d + g) / 2 - r) / c), !0));
  }
  toSVGPath() {
    if (this.isEmpty())
      return "";
    const t = this.#s, n = this.#e;
    if (isNaN(this.#r[6]) && !this.isEmpty())
      return this.#y();
    const s = [];
    s.push(`M${t[4]} ${t[5]}`);
    for (let r = 6; r < t.length; r += 6)
      isNaN(t[r]) ? s.push(`L${t[r + 4]} ${t[r + 5]}`) : s.push(`C${t[r]} ${t[r + 1]} ${t[r + 2]} ${t[r + 3]} ${t[r + 4]} ${t[r + 5]}`);
    this.#b(s);
    for (let r = n.length - 6; r >= 6; r -= 6)
      isNaN(n[r]) ? s.push(`L${n[r + 4]} ${n[r + 5]}`) : s.push(`C${n[r]} ${n[r + 1]} ${n[r + 2]} ${n[r + 3]} ${n[r + 4]} ${n[r + 5]}`);
    return this.#v(s), s.join(" ");
  }
  #y() {
    const [t, n, s, r] = this.#t, [l, c, u, d] = this.#p();
    return `M${(this.#r[2] - t) / s} ${(this.#r[3] - n) / r} L${(this.#r[4] - t) / s} ${(this.#r[5] - n) / r} L${l} ${c} L${u} ${d} L${(this.#r[16] - t) / s} ${(this.#r[17] - n) / r} L${(this.#r[14] - t) / s} ${(this.#r[15] - n) / r} Z`;
  }
  #v(t) {
    const n = this.#e;
    t.push(`L${n[4]} ${n[5]} Z`);
  }
  #b(t) {
    const [n, s, r, l] = this.#t, c = this.#r.subarray(4, 6), u = this.#r.subarray(16, 18), [d, p, g, m] = this.#p();
    t.push(`L${(c[0] - n) / r} ${(c[1] - s) / l} L${d} ${p} L${g} ${m} L${(u[0] - n) / r} ${(u[1] - s) / l}`);
  }
  newFreeDrawOutline(t, n, s, r, l, c) {
    return new w0(t, n, s, r, l, c);
  }
  getOutlines() {
    const t = this.#s, n = this.#e, s = this.#r, [r, l, c, u] = this.#t, d = new Float32Array((this.#f?.length ?? 0) + 2);
    for (let m = 0, v = d.length - 2; m < v; m += 2)
      d[m] = (this.#f[m] - r) / c, d[m + 1] = (this.#f[m + 1] - l) / u;
    if (d[d.length - 2] = (this.#a - r) / c, d[d.length - 1] = (this.#o - l) / u, isNaN(s[6]) && !this.isEmpty())
      return this.#A(d);
    const p = new Float32Array(this.#s.length + 24 + this.#e.length);
    let g = t.length;
    for (let m = 0; m < g; m += 2) {
      if (isNaN(t[m])) {
        p[m] = p[m + 1] = NaN;
        continue;
      }
      p[m] = t[m], p[m + 1] = t[m + 1];
    }
    g = this.#E(p, g);
    for (let m = n.length - 6; m >= 6; m -= 6)
      for (let v = 0; v < 6; v += 2) {
        if (isNaN(n[m + v])) {
          p[g] = p[g + 1] = NaN, g += 2;
          continue;
        }
        p[g] = n[m + v], p[g + 1] = n[m + v + 1], g += 2;
      }
    return this.#T(p, g), this.newFreeDrawOutline(p, d, this.#t, this.#d, this.#n, this.#i);
  }
  #A(t) {
    const n = this.#r, [s, r, l, c] = this.#t, [u, d, p, g] = this.#p(), m = new Float32Array(36);
    return m.set([NaN, NaN, NaN, NaN, (n[2] - s) / l, (n[3] - r) / c, NaN, NaN, NaN, NaN, (n[4] - s) / l, (n[5] - r) / c, NaN, NaN, NaN, NaN, u, d, NaN, NaN, NaN, NaN, p, g, NaN, NaN, NaN, NaN, (n[16] - s) / l, (n[17] - r) / c, NaN, NaN, NaN, NaN, (n[14] - s) / l, (n[15] - r) / c], 0), this.newFreeDrawOutline(m, t, this.#t, this.#d, this.#n, this.#i);
  }
  #T(t, n) {
    const s = this.#e;
    return t.set([NaN, NaN, NaN, NaN, s[4], s[5]], n), n += 6;
  }
  #E(t, n) {
    const s = this.#r.subarray(4, 6), r = this.#r.subarray(16, 18), [l, c, u, d] = this.#t, [p, g, m, v] = this.#p();
    return t.set([NaN, NaN, NaN, NaN, (s[0] - l) / u, (s[1] - c) / d, NaN, NaN, NaN, NaN, p, g, NaN, NaN, NaN, NaN, m, v, NaN, NaN, NaN, NaN, (r[0] - l) / u, (r[1] - c) / d], n), n += 24;
  }
}
class w0 extends J {
  #t;
  #e = new Float32Array(4);
  #n;
  #i;
  #s;
  #r;
  #a;
  constructor(t, n, s, r, l, c) {
    super(), this.#a = t, this.#s = n, this.#t = s, this.#r = r, this.#n = l, this.#i = c, this.firstPoint = [NaN, NaN], this.lastPoint = [NaN, NaN], this.#o(c);
    const [u, d, p, g] = this.#e;
    for (let m = 0, v = t.length; m < v; m += 2)
      t[m] = (t[m] - u) / p, t[m + 1] = (t[m + 1] - d) / g;
    for (let m = 0, v = n.length; m < v; m += 2)
      n[m] = (n[m] - u) / p, n[m + 1] = (n[m + 1] - d) / g;
  }
  toSVGPath() {
    const t = [`M${this.#a[4]} ${this.#a[5]}`];
    for (let n = 6, s = this.#a.length; n < s; n += 6) {
      if (isNaN(this.#a[n])) {
        t.push(`L${this.#a[n + 4]} ${this.#a[n + 5]}`);
        continue;
      }
      t.push(`C${this.#a[n]} ${this.#a[n + 1]} ${this.#a[n + 2]} ${this.#a[n + 3]} ${this.#a[n + 4]} ${this.#a[n + 5]}`);
    }
    return t.push("Z"), t.join(" ");
  }
  serialize([t, n, s, r], l) {
    const c = s - t, u = r - n;
    let d, p;
    switch (l) {
      case 0:
        d = J._rescale(this.#a, t, r, c, -u), p = J._rescale(this.#s, t, r, c, -u);
        break;
      case 90:
        d = J._rescaleAndSwap(this.#a, t, n, c, u), p = J._rescaleAndSwap(this.#s, t, n, c, u);
        break;
      case 180:
        d = J._rescale(this.#a, s, n, -c, u), p = J._rescale(this.#s, s, n, -c, u);
        break;
      case 270:
        d = J._rescaleAndSwap(this.#a, s, r, -c, -u), p = J._rescaleAndSwap(this.#s, s, r, -c, -u);
        break;
    }
    return {
      outline: Array.from(d),
      points: [Array.from(p)]
    };
  }
  #o(t) {
    const n = this.#a;
    let s = n[4], r = n[5];
    const l = [s, r, s, r];
    let c = s, u = r, d = s, p = r;
    const g = t ? Math.max : Math.min, m = new Float32Array(4);
    for (let A = 6, S = n.length; A < S; A += 6) {
      const E = n[A + 4], _ = n[A + 5];
      isNaN(n[A]) ? (K.pointBoundingBox(E, _, l), u > _ ? (c = E, u = _) : u === _ && (c = g(c, E)), p < _ ? (d = E, p = _) : p === _ && (d = g(d, E))) : (m.set(vi, 0), K.bezierBoundingBox(s, r, ...n.slice(A, A + 6), m), K.rectBoundingBox(...m, l), u > m[1] ? (c = m[0], u = m[1]) : u === m[1] && (c = g(c, m[0])), p < m[3] ? (d = m[2], p = m[3]) : p === m[3] && (d = g(d, m[2]))), s = E, r = _;
    }
    const v = this.#e;
    v[0] = l[0] - this.#n, v[1] = l[1] - this.#n, v[2] = l[2] - l[0] + 2 * this.#n, v[3] = l[3] - l[1] + 2 * this.#n, this.firstPoint = [c, u], this.lastPoint = [d, p];
  }
  get box() {
    return this.#e;
  }
  newOutliner(t, n, s, r, l, c, u = 0) {
    return new ws(t, n, s, r, l, c, u);
  }
  updateThickness(t) {
    const n = this.getNewOutline(t);
    return this.#a = n.#a, this.#s = n.#s, this.#e.set(n.#e), this.firstPoint = n.firstPoint, this.lastPoint = n.lastPoint, this.#e;
  }
  getNewOutline(t, n) {
    const [s, r, l, c] = this.#e, [u, d, p, g] = this.#t, m = l * p, v = c * g, A = s * p + u, S = r * g + d, E = this.#s, _ = this.newOutliner(E[0] * m + A, E[1] * v + S, this.#t, this.#r, t, this.#i, n ?? this.#n);
    for (let w = 2, C = E.length; w < C; w += 2)
      _.add(E[w] * m + A, E[w + 1] * v + S);
    return _.getOutlines();
  }
}
function C0(y) {
  return {
    bbox: y.box,
    root: {
      viewBox: "0 0 1 1"
    },
    rootClass: {
      highlight: !0,
      free: y.isFree
    },
    path: {
      d: y.toSVGPath()
    }
  };
}
function x0(y, t) {
  const {
    focusOutline: n
  } = y;
  return {
    bbox: J._rotateBox(n.box, t),
    root: {
      "data-main-rotation": t
    },
    rootClass: {
      highlightOutline: !0,
      free: y.isFree
    },
    path: {
      d: n.toSVGPath()
    }
  };
}
class dd {
  #t;
  #e;
  #n;
  #i = [];
  #s = [];
  constructor(t, n = 0, s = 0, r = !0) {
    const l = vi.slice(), c = 10 ** -4;
    for (const {
      x: E,
      y: _,
      width: w,
      height: C
    } of t) {
      const M = Math.floor((E - n) / c) * c, B = Math.ceil((E + w + n) / c) * c, N = Math.floor((_ - n) / c) * c, P = Math.ceil((_ + C + n) / c) * c, U = [M, N, P, !0], j = [B, N, P, !1];
      this.#i.push(U, j), K.rectBoundingBox(M, N, B, P, l);
    }
    const u = l[2] - l[0] + 2 * s, d = l[3] - l[1] + 2 * s, p = l[0] - s, g = l[1] - s;
    let m = r ? -1 / 0 : 1 / 0, v = 1 / 0;
    const A = this.#i.at(r ? -1 : -2), S = [A[0], A[2]];
    for (const E of this.#i) {
      const [_, w, C, M] = E;
      !M && r ? w < v ? (v = w, m = _) : w === v && (m = Math.max(m, _)) : M && !r && (w < v ? (v = w, m = _) : w === v && (m = Math.min(m, _))), E[0] = (_ - p) / u, E[1] = (w - g) / d, E[2] = (C - g) / d;
    }
    this.#t = new Float32Array([p, g, u, d]), this.#e = [m, v], this.#n = S;
  }
  getOutlines() {
    this.#i.sort((n, s) => n[0] - s[0] || n[1] - s[1] || n[2] - s[2]);
    const t = [];
    for (const n of this.#i)
      n[3] ? (t.push(...this.#c(n)), this.#o(n)) : (this.#l(n), t.push(...this.#c(n)));
    return this.#r(t);
  }
  #r(t) {
    const n = [], s = /* @__PURE__ */ new Set();
    for (const c of t) {
      const [u, d, p] = c;
      n.push([u, d, c], [u, p, c]);
    }
    n.sort((c, u) => c[1] - u[1] || c[0] - u[0]);
    for (let c = 0, u = n.length; c < u; c += 2) {
      const d = n[c][2], p = n[c + 1][2];
      d.push(p), p.push(d), s.add(d), s.add(p);
    }
    const r = [];
    let l;
    for (; s.size > 0; ) {
      const c = s.values().next().value;
      let [u, d, p, g, m] = c;
      s.delete(c);
      let v = u, A = d;
      for (l = [u, p], r.push(l); ; ) {
        let S;
        if (s.has(g))
          S = g;
        else if (s.has(m))
          S = m;
        else
          break;
        s.delete(S), [u, d, p, g, m] = S, v !== u && (l.push(v, A, u, A === d ? d : p), v = u), A = A === d ? p : d;
      }
      l.push(v, A);
    }
    return new fd(r, this.#t, this.#e, this.#n);
  }
  #a(t) {
    const n = this.#s;
    let s = 0, r = n.length - 1;
    for (; s <= r; ) {
      const l = s + r >> 1, c = n[l][0];
      if (c === t)
        return l;
      c < t ? s = l + 1 : r = l - 1;
    }
    return r + 1;
  }
  #o([, t, n]) {
    const s = this.#a(t);
    this.#s.splice(s, 0, [t, n]);
  }
  #l([, t, n]) {
    const s = this.#a(t);
    for (let r = s; r < this.#s.length; r++) {
      const [l, c] = this.#s[r];
      if (l !== t)
        break;
      if (l === t && c === n) {
        this.#s.splice(r, 1);
        return;
      }
    }
    for (let r = s - 1; r >= 0; r--) {
      const [l, c] = this.#s[r];
      if (l !== t)
        break;
      if (l === t && c === n) {
        this.#s.splice(r, 1);
        return;
      }
    }
  }
  #c(t) {
    const [n, s, r] = t, l = [[n, s, r]], c = this.#a(r);
    for (let u = 0; u < c; u++) {
      const [d, p] = this.#s[u];
      for (let g = 0, m = l.length; g < m; g++) {
        const [, v, A] = l[g];
        if (!(p <= v || A <= d)) {
          if (v >= d) {
            if (A > p)
              l[g][1] = p;
            else {
              if (m === 1)
                return [];
              l.splice(g, 1), g--, m--;
            }
            continue;
          }
          l[g][2] = d, A > p && l.push([n, p, A]);
        }
      }
    }
    return l;
  }
}
class fd extends J {
  #t;
  #e = null;
  #n;
  constructor(t, n, s, r) {
    super(), this.#n = t, this.#t = n, this.firstPoint = s, this.lastPoint = r;
  }
  static build(t, n) {
    const s = new dd(t, 1e-3).getOutlines();
    return s.#e = t, s.focusOutline = new dd(t, 25e-4, 1e-3, n).getOutlines(), s;
  }
  get isFree() {
    return !1;
  }
  get defaultSVGProperties() {
    return C0(this);
  }
  getFocusSVGProperties(t) {
    return x0(this, t);
  }
  updateRotation(t) {
    return {
      root: {
        "data-main-rotation": t
      }
    };
  }
  serializeQuadPoints([t, n], [s, r]) {
    const l = this.#e, c = new Float32Array(l.length * 8);
    let u = 0;
    for (const {
      x: d,
      y: p,
      width: g,
      height: m
    } of l) {
      const v = d * s + t, A = (1 - p) * r + n;
      c[u] = c[u + 4] = v, c[u + 1] = c[u + 3] = A, c[u + 2] = c[u + 6] = v + g * s, c[u + 5] = c[u + 7] = A - m * r, u += 8;
    }
    return c;
  }
  toSVGPath() {
    const t = [];
    for (const n of this.#n) {
      let [s, r] = n;
      t.push(`M${s} ${r}`);
      for (let l = 2; l < n.length; l += 2) {
        const c = n[l], u = n[l + 1];
        c === s ? (t.push(`V${u}`), r = u) : u === r && (t.push(`H${c}`), s = c);
      }
      t.push("Z");
    }
    return t.join(" ");
  }
  serialize([t, n, s, r], l) {
    const c = [], u = s - t, d = r - n;
    for (const p of this.#n) {
      const g = new Array(p.length);
      for (let m = 0; m < p.length; m += 2)
        g[m] = t + p[m] * u, g[m + 1] = r - p[m + 1] * d;
      c.push(g);
    }
    return c;
  }
  get box() {
    return this.#t;
  }
}
class Nd extends ws {
  newFreeDrawOutline(t, n, s, r, l, c) {
    return new Rd(t, n, s, r, l, c);
  }
}
class z1 {
  #t;
  #e;
  constructor(t, n, s, r, l, c, u) {
    this.#t = new Nd(t, n, s, r, l, c, u), this.#e = l;
  }
  add(t, n) {
    return this.#t.add(t, n) ? {
      path: {
        d: this.#t.toSVGPath()
      }
    } : null;
  }
  addPoints(t) {
    let n = !1;
    for (let s = 0, r = t.length; s < r; s += 2)
      n = this.#t.add(t[s], t[s + 1]) || n;
    return n ? {
      path: {
        d: this.#t.toSVGPath()
      }
    } : null;
  }
  end(t, n) {
    return t === void 0 ? null : this.add(t, n);
  }
  isEmpty() {
    return this.#t.isEmpty();
  }
  isCancellable() {
    return this.#t.isCancellable();
  }
  removeLastElement() {
    return this.#t.removeLastElement();
  }
  updateProperty(t, n) {
    return null;
  }
  getOutlines() {
    const t = this.#t.getOutlines();
    return t.buildFocusOutline(2 * this.#e), t;
  }
  get defaultSVGProperties() {
    return {
      bbox: [0, 0, 1, 1],
      root: {
        viewBox: "0 0 1 1"
      },
      rootClass: {
        highlight: !0,
        free: !0
      },
      path: {
        d: this.#t.toSVGPath()
      }
    };
  }
}
class Rd extends w0 {
  static #t = 1.5;
  newOutliner(t, n, s, r, l, c, u = 0) {
    return new Nd(t, n, s, r, l, c, u);
  }
  get isFree() {
    return !0;
  }
  buildFocusOutline(t) {
    this.focusOutline = this.getNewOutline(t / 2 + Rd.#t, 25e-4);
  }
  get defaultSVGProperties() {
    return C0(this);
  }
  getFocusSVGProperties(t) {
    return x0(this, t);
  }
  get focusMustRemoveSelfIntersections() {
    return !0;
  }
  updateRotation(t) {
    return {
      root: {
        "data-main-rotation": t
      }
    };
  }
  updateProperty(t, n) {
    if (t !== "thickness")
      return null;
    const s = this.updateThickness(n / 2);
    return this.buildFocusOutline(n), s;
  }
  getPathResizedSVGProperties() {
    return {
      path: {
        d: this.toSVGPath()
      }
    };
  }
}
class Ld extends Od {
  constructor(t = null) {
    super(), super.updateProperties(t);
  }
  updateSVGProperty(t, n) {
    t !== "thickness" && super.updateSVGProperty(t, n);
  }
  clone() {
    const t = new Ld();
    return t.updateAll(this), t;
  }
}
class On extends wt {
  #t = null;
  #e = 0;
  #n = null;
  #i = 0;
  #s = "";
  #r = "";
  static _DEFAULT_OPACITY = 1;
  static _DEFAULT_THICKNESS = 12;
  static _defaultDrawingOptions = null;
  static _type = "highlight";
  static _editorType = pt.HIGHLIGHT;
  static get _keyboardManager() {
    const t = On.prototype;
    return lt(this, "_keyboardManager", new ln([[["ArrowLeft"], t._moveCaret, {
      args: [0]
    }], [["ArrowRight"], t._moveCaret, {
      args: [1]
    }], [["ArrowUp"], t._moveCaret, {
      args: [2]
    }], [["ArrowDown"], t._moveCaret, {
      args: [3]
    }]]));
  }
  constructor(t) {
    super({
      ...t,
      name: "highlightEditor"
    }), this.#t = t.anchorNode || null, this.#e = t.anchorOffset || 0, this.#n = t.focusNode || null, this.#i = t.focusOffset || 0, this.#s = t.methodOfCreation || (this._drawOutlines?.isFree ? "main_toolbar" : ""), this.#r = t.text || "", this._isDraggable = !1, this.defaultL10nId = "pdfjs-editor-highlight-editor", this.rotate();
  }
  static initialize(t, n) {
    rt.initialize(t, n), this._defaultDrawingOptions ||= new Ld({
      fill: n.highlightColors?.values().next().value || "#fff066",
      "fill-opacity": On._DEFAULT_OPACITY,
      thickness: On._DEFAULT_THICKNESS
    });
  }
  static getDefaultDrawingOptions(t) {
    const n = this._defaultDrawingOptions.clone();
    return n.updateProperties(t), n;
  }
  static get typesMap() {
    return lt(this, "typesMap", /* @__PURE__ */ new Map([[Mt.HIGHLIGHT_COLOR, "fill"], [Mt.HIGHLIGHT_THICKNESS, "thickness"]]));
  }
  static get isDrawer() {
    return !1;
  }
  static get _hasClipPath() {
    return !0;
  }
  static get _hasDrawClass() {
    return !1;
  }
  _addOutlines(t) {
    const {
      boxes: n,
      drawOutlines: s
    } = t;
    !n && !s || (this._drawingOptions ||= t.drawingOptions || On.getDefaultDrawingOptions(), n && (t = {
      ...t,
      drawOutlines: fd.build(n, this._uiManager.direction === "ltr")
    }), super._addOutlines(t));
  }
  get colorType() {
    return Mt.HIGHLIGHT_COLOR;
  }
  get color() {
    return this._drawingOptions.fill;
  }
  get opacity() {
    return this._drawingOptions["fill-opacity"];
  }
  get _opacityName() {
    return "fill-opacity";
  }
  get _drawRotation() {
    return this._drawOutlines?.isFree ? this.rotation : 0;
  }
  get isResizable() {
    return !1;
  }
  get _mustBeDisabledOnCommit() {
    return !1;
  }
  get _mustFixPosition() {
    return !this._drawOutlines?.isFree;
  }
  get telemetryInitialData() {
    return {
      action: "added",
      type: this._drawOutlines.isFree ? "free_highlight" : "highlight",
      color: this._uiManager.getNonHCMColorName(this.color),
      thickness: this._drawingOptions.thickness,
      methodOfCreation: this.#s
    };
  }
  get telemetryFinalData() {
    return {
      type: "highlight",
      color: this._uiManager.getNonHCMColorName(this.color)
    };
  }
  static computeTelemetryFinalData(t) {
    return {
      numberOfColors: t.get("color").size
    };
  }
  translateInPage(t, n) {
  }
  get toolbarPosition() {
    return this.#a(this._drawOutlines.focusOutline.lastPoint);
  }
  get commentButtonPosition() {
    return this.#a(this._drawOutlines.firstPoint);
  }
  #a([t, n]) {
    const [s, r, l, c] = this._drawOutlines.box;
    return [(t - s) / l, (n - r) / c];
  }
  updateParams(t, n) {
    switch (t) {
      case Mt.HIGHLIGHT_COLOR:
        this._updateColorAndOpacity(n, On._DEFAULT_OPACITY, t), this._reportTelemetry({
          action: "color_changed",
          color: this._uiManager.getNonHCMColorName(n)
        }, !0);
        break;
      case Mt.HIGHLIGHT_THICKNESS:
        super.updateParams(t, n), this._reportTelemetry({
          action: "thickness_changed",
          thickness: n
        }, !0);
        break;
    }
  }
  get propertiesToUpdate() {
    const t = super.propertiesToUpdate;
    return t.push([Mt.HIGHLIGHT_FREE, this._drawOutlines.isFree]), t;
  }
  get toolbarButtons() {
    return this._uiManager.highlightColors ? (this._colorPicker = new En({
      editor: this
    }), [["colorPicker", this._colorPicker]]) : super.toolbarButtons;
  }
  fixAndSetPosition() {
    return super.fixAndSetPosition(this._drawRotation);
  }
  getRect(t, n) {
    return super.getRect(t, n, this._drawRotation);
  }
  onceAdded(t) {
    this.annotationElementId || this.parent.addUndoableEditor(this), t && this.div.focus();
  }
  remove() {
    this._reportTelemetry({
      action: "deleted"
    }), super.remove();
  }
  render() {
    if (this.div)
      return this.div;
    const t = super.render();
    return this.#r && (t.setAttribute("aria-label", this.#r), t.setAttribute("role", "mark")), this._drawOutlines.isFree ? t.classList.add("free") : t.addEventListener("keydown", this.#o.bind(this), {
      signal: this._uiManager._signal
    }), this.enableEditing(), t;
  }
  #o(t) {
    On._keyboardManager.exec(this, t);
  }
  _moveCaret(t) {
    switch (this.parent.unselect(this), t) {
      case 0:
      case 2:
        this.#l(!0);
        break;
      case 1:
      case 3:
        this.#l(!1);
        break;
    }
  }
  #l(t) {
    if (!this.#t)
      return;
    const n = window.getSelection();
    t ? n.setPosition(this.#t, this.#e) : n.setPosition(this.#n, this.#i);
  }
  unselect() {
    super.unselect(), this._drawOutlines.isFree || this.#l(!1);
  }
  static createDrawerInstance({
    x: t,
    y: n,
    box: s,
    parent: r,
    isLTR: l
  }) {
    return new z1(t, n, s, r.scale, this._defaultDrawingOptions.thickness / 2, l, 1e-3);
  }
  static _getDrawingTarget(t, {
    target: n
  }) {
    return n.closest(".textLayer");
  }
  static _getPointerCoords({
    x: t,
    y: n
  }) {
    return [t, n];
  }
  static _addDrawingListeners(t, n) {
    t.classList.add("free"), n.addEventListener("abort", () => t.classList.remove("free"), {
      once: !0
    }), window.addEventListener("blur", () => this._endDraw(null), {
      signal: n
    }), window.addEventListener("pointerdown", ge, {
      capture: !0,
      passive: !1,
      signal: n
    });
  }
  static _endDrawingSession(t = !1) {
    return this.endDrawing(t);
  }
  createDrawingOptions({
    color: t,
    opacity: n,
    thickness: s
  }) {
    const {
      _defaultDrawingOptions: r,
      _DEFAULT_OPACITY: l
    } = On;
    this._drawingOptions = On.getDefaultDrawingOptions({
      fill: K.makeHexColor(...t),
      "fill-opacity": n || l,
      thickness: s || r.thickness
    });
  }
  static deserializeDraw(t, n, s, r, l, c, u) {
    const {
      quadPoints: d
    } = c;
    if (d) {
      const A = [];
      for (let S = 0, E = d.length; S < E; S += 8)
        A.push({
          x: (d[S] - t) / s,
          y: 1 - (d[S + 1] - n) / r,
          width: (d[S + 2] - d[S]) / s,
          height: (d[S + 1] - d[S + 5]) / r
        });
      return fd.build(A, u.direction === "ltr");
    }
    const p = c.thickness || this._defaultDrawingOptions.thickness, g = (c.inkLists || c.outlines.points)[0], m = new Nd(g[0] - t, r - (g[1] - n), [0, 0, s, r], 1, p / 2, !0, 1e-3);
    for (let A = 0, S = g.length; A < S; A += 2)
      m.add(g[A] - t, r - (g[A + 1] - n));
    const v = m.getOutlines();
    return v.buildFocusOutline(p), v;
  }
  static async deserialize(t, n, s) {
    let r = null;
    if (t instanceof E0) {
      const {
        data: {
          quadPoints: c,
          rect: u,
          rotation: d,
          id: p,
          color: g,
          opacity: m,
          popupRef: v,
          richText: A,
          contentsObj: S,
          creationDate: E,
          modificationDate: _
        },
        parent: {
          page: {
            pageNumber: w
          }
        }
      } = t;
      r = t = {
        annotationType: pt.HIGHLIGHT,
        color: Array.from(g),
        opacity: m,
        quadPoints: c,
        pageIndex: w - 1,
        rect: u.slice(0),
        rotation: d,
        annotationElementId: p,
        id: p,
        deleted: !1,
        popupRef: v,
        richText: A,
        comment: S?.str || null,
        creationDate: E,
        modificationDate: _
      };
    } else if (t instanceof Md) {
      const {
        data: {
          inkLists: c,
          rect: u,
          rotation: d,
          id: p,
          color: g,
          borderStyle: {
            rawWidth: m
          },
          popupRef: v,
          richText: A,
          contentsObj: S,
          creationDate: E,
          modificationDate: _
        },
        parent: {
          page: {
            pageNumber: w
          }
        }
      } = t;
      r = t = {
        annotationType: pt.HIGHLIGHT,
        color: Array.from(g),
        thickness: m,
        inkLists: c,
        pageIndex: w - 1,
        rect: u.slice(0),
        rotation: d,
        annotationElementId: p,
        id: p,
        deleted: !1,
        popupRef: v,
        richText: A,
        comment: S?.str || null,
        creationDate: E,
        modificationDate: _
      };
    }
    const l = await super.deserialize(t, n, s);
    return l._initialData = r, t.comment && l.setCommentData(t), l;
  }
  serialize(t = !1) {
    if (this.isEmpty() || t)
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const n = super.serialize(t);
    return Object.assign(n, {
      color: rt._colorManager.convert(this._uiManager.getNonHCMColor(this.color)),
      opacity: this.opacity,
      thickness: this._drawingOptions.thickness,
      quadPoints: this._drawOutlines.serializeQuadPoints(this.pageTranslation, this.pageDimensions),
      outlines: this._drawOutlines.serialize(n.rect, this._drawRotation)
    }), this.addComment(n), this.annotationElementId && !this.#c(n) ? null : (n.id = this.annotationElementId, n);
  }
  #c(t) {
    const {
      color: n
    } = this._initialData;
    return this.hasEditedComment || t.color.some((s, r) => s !== n[r]);
  }
  renderAnnotationElement(t) {
    return this.deleted ? (t.hide(), null) : (t.updateEdited({
      rect: this.getPDFRect(),
      popup: this.comment
    }), null);
  }
}
class U1 {
  #t = new Float64Array(6);
  #e = new Float64Array(2);
  #n;
  #i;
  #s;
  #r;
  #a;
  #o = "";
  #l = 0;
  #c = new Kr();
  #d;
  #h;
  constructor(t, n, s, r, l, c) {
    this.#d = s, this.#h = r, this.#s = l, this.#r = c, [t, n] = this.#f(t, n);
    const u = this.#n = [NaN, NaN, NaN, NaN, t, n];
    this.#a = [t, n], this.#i = [{
      line: u,
      points: this.#a
    }], this.#t.set(u, 0), this.#e.set([t, n], 0);
  }
  updateProperty(t, n) {
    t === "stroke-width" && (this.#r = n);
  }
  #f(t, n) {
    return J._normalizePoint(t, n, this.#d, this.#h, this.#s);
  }
  isEmpty() {
    return !this.#i?.length;
  }
  isCancellable() {
    return this.#a.length <= 10;
  }
  add(t, n) {
    return this.#g(t, n) && this.toSVGPath(), {
      path: {
        d: this.#m()
      }
    };
  }
  addPoints(t) {
    let n = !1;
    for (let s = 0, r = t.length; s < r; s += 2)
      this.#g(t[s], t[s + 1]) && (n = !0, this.#a.length <= 6 && (this.toSVGPath(), n = !1));
    return n && this.toSVGPath(), {
      path: {
        d: this.#m()
      }
    };
  }
  #g(t, n) {
    [t, n] = this.#f(t, n), this.#e.set([t, n], 0);
    const [s, r, l, c] = this.#t.subarray(2, 6), u = t - l, d = n - c;
    return Math.hypot(this.#d * u, this.#h * d) <= 2 ? !1 : (this.#a.push(t, n), isNaN(s) ? (this.#t.set([l, c, t, n], 2), this.#n.push(NaN, NaN, NaN, NaN, t, n), !0) : (isNaN(this.#t[0]) && this.#n.splice(6, 6), this.#t.set([s, r, l, c, t, n], 0), this.#n.push(...J.createBezierPoints(s, r, l, c, t, n)), !0));
  }
  end(t, n) {
    return t !== void 0 && this.#g(t, n) ? {
      path: {
        d: this.toSVGPath()
      }
    } : this.#a.length === 2 ? {
      path: {
        d: this.toSVGPath()
      }
    } : {
      path: {
        d: this.#o
      }
    };
  }
  startNew(t, n, s, r, l) {
    this.#d = s, this.#h = r, this.#s = l, [t, n] = this.#f(t, n);
    const c = this.#n = [NaN, NaN, NaN, NaN, t, n];
    this.#a = [t, n], this.#e.set([t, n], 0);
    const u = this.#i.at(-1);
    return u && (u.line = new Float32Array(u.line), u.points = new Float32Array(u.points)), this.#i.push({
      line: c,
      points: this.#a
    }), this.#t.set(c, 0), this.#l = 0, this.toSVGPath(), null;
  }
  getLastElement() {
    return this.#i.at(-1);
  }
  setLastElement(t) {
    return this.#i ? (this.#i.push(t), this.#n = t.line, this.#a = t.points, this.#l = 0, {
      path: {
        d: this.toSVGPath()
      }
    }) : this.#c.setLastElement(t);
  }
  removeLastElement() {
    if (!this.#i)
      return this.#c.removeLastElement();
    this.#i.pop(), this.#o = "";
    for (let t = 0, n = this.#i.length; t < n; t++) {
      const {
        line: s,
        points: r
      } = this.#i[t];
      this.#n = s, this.#a = r, this.#l = 0, this.toSVGPath();
    }
    return {
      path: {
        d: this.#o
      }
    };
  }
  #m() {
    const t = J.svgRound(this.#e[0]), n = J.svgRound(this.#e[1]);
    if (this.#a.length === 2) {
      const s = J.svgRound(this.#n[4]), r = J.svgRound(this.#n[5]);
      return `${this.#o} M ${s} ${r} L ${t} ${n}`;
    }
    return `${this.#o} L ${t} ${n}`;
  }
  toSVGPath() {
    const t = J.svgRound(this.#n[4]), n = J.svgRound(this.#n[5]);
    if (this.#a.length === 2)
      return this.#o = `${this.#o} M ${t} ${n} Z`, this.#o;
    if (this.#a.length <= 6) {
      const r = this.#o.lastIndexOf("M");
      this.#o = `${this.#o.slice(0, r)} M ${t} ${n}`, this.#l = 6;
    }
    if (this.#a.length === 4) {
      const r = J.svgRound(this.#n[10]), l = J.svgRound(this.#n[11]);
      return this.#o = `${this.#o} L ${r} ${l}`, this.#l = 12, this.#o;
    }
    const s = [];
    this.#l === 0 && (s.push(`M ${t} ${n}`), this.#l = 6);
    for (let r = this.#l, l = this.#n.length; r < l; r += 6) {
      const [c, u, d, p, g, m] = this.#n.slice(r, r + 6).map(J.svgRound);
      s.push(`C${c} ${u} ${d} ${p} ${g} ${m}`);
    }
    return this.#o += s.join(" "), this.#l = this.#n.length, this.#o;
  }
  getOutlines(t, n, s, r) {
    const l = this.#i.at(-1);
    return l.line = new Float32Array(l.line), l.points = new Float32Array(l.points), this.#c.build(this.#i, t, n, s, this.#s, this.#r, r), this.#t = null, this.#n = null, this.#i = null, this.#o = null, this.#c;
  }
  get defaultSVGProperties() {
    return {
      root: {
        viewBox: "0 0 10000 10000"
      },
      rootClass: {
        draw: !0
      },
      bbox: [0, 0, 1, 1]
    };
  }
}
class Kr extends J {
  #t;
  #e = 0;
  #n;
  #i;
  #s;
  #r;
  #a;
  #o;
  #l;
  build(t, n, s, r, l, c, u) {
    this.#s = n, this.#r = s, this.#a = r, this.#o = l, this.#l = c, this.#n = u ?? 0, this.#i = t, this.#h();
  }
  get thickness() {
    return this.#l;
  }
  setLastElement(t) {
    return this.#i.push(t), {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  removeLastElement() {
    return this.#i.pop(), {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  toSVGPath() {
    const t = [];
    for (const {
      line: n
    } of this.#i) {
      if (t.push(`M${J.svgRound(n[4])} ${J.svgRound(n[5])}`), n.length === 6) {
        t.push("Z");
        continue;
      }
      if (n.length === 12 && isNaN(n[6])) {
        t.push(`L${J.svgRound(n[10])} ${J.svgRound(n[11])}`);
        continue;
      }
      for (let s = 6, r = n.length; s < r; s += 6) {
        const [l, c, u, d, p, g] = n.subarray(s, s + 6).map(J.svgRound);
        t.push(`C${l} ${c} ${u} ${d} ${p} ${g}`);
      }
    }
    return t.join("");
  }
  serialize([t, n, s, r], l) {
    const c = [], u = [], [d, p, g, m] = this.#d();
    let v, A, S, E, _, w, C, M, B;
    switch (this.#o) {
      case 0:
        B = J._rescale, v = t, A = n + r, S = s, E = -r, _ = t + d * s, w = n + (1 - p - m) * r, C = t + (d + g) * s, M = n + (1 - p) * r;
        break;
      case 90:
        B = J._rescaleAndSwap, v = t, A = n, S = s, E = r, _ = t + p * s, w = n + d * r, C = t + (p + m) * s, M = n + (d + g) * r;
        break;
      case 180:
        B = J._rescale, v = t + s, A = n, S = -s, E = r, _ = t + (1 - d - g) * s, w = n + p * r, C = t + (1 - d) * s, M = n + (p + m) * r;
        break;
      case 270:
        B = J._rescaleAndSwap, v = t + s, A = n + r, S = -s, E = -r, _ = t + (1 - p - m) * s, w = n + (1 - d - g) * r, C = t + (1 - p) * s, M = n + (1 - d) * r;
        break;
    }
    for (const {
      line: N,
      points: P
    } of this.#i)
      c.push(B(N, v, A, S, E, l ? new Array(N.length) : null)), u.push(B(P, v, A, S, E, l ? new Array(P.length) : null));
    return {
      lines: c,
      points: u,
      rect: [_, w, C, M]
    };
  }
  static deserialize(t, n, s, r, l, {
    paths: {
      lines: c,
      points: u
    },
    rotation: d,
    thickness: p
  }) {
    const g = [];
    let m, v, A, S, E;
    switch (d) {
      case 0:
        E = J._rescale, m = -t / s, v = n / r + 1, A = 1 / s, S = -1 / r;
        break;
      case 90:
        E = J._rescaleAndSwap, m = -n / r, v = -t / s, A = 1 / r, S = 1 / s;
        break;
      case 180:
        E = J._rescale, m = t / s + 1, v = -n / r, A = -1 / s, S = 1 / r;
        break;
      case 270:
        E = J._rescaleAndSwap, m = n / r + 1, v = t / s + 1, A = -1 / r, S = -1 / s;
        break;
    }
    if (!c) {
      c = [];
      for (const w of u) {
        const C = w.length;
        if (C === 2) {
          c.push(new Float32Array([NaN, NaN, NaN, NaN, w[0], w[1]]));
          continue;
        }
        if (C === 4) {
          c.push(new Float32Array([NaN, NaN, NaN, NaN, w[0], w[1], NaN, NaN, NaN, NaN, w[2], w[3]]));
          continue;
        }
        const M = new Float32Array(3 * (C - 2));
        c.push(M);
        let [B, N, P, U] = w.subarray(0, 4);
        M.set([NaN, NaN, NaN, NaN, B, N], 0);
        for (let j = 4; j < C; j += 2) {
          const q = w[j], $ = w[j + 1];
          M.set(J.createBezierPoints(B, N, P, U, q, $), (j - 2) * 3), [B, N, P, U] = [P, U, q, $];
        }
      }
    }
    for (let w = 0, C = c.length; w < C; w++)
      g.push({
        line: E(c[w].map((M) => M ?? NaN), m, v, A, S),
        points: E(u[w].map((M) => M ?? NaN), m, v, A, S)
      });
    const _ = new this.prototype.constructor();
    return _.build(g, s, r, 1, d, p, l), _;
  }
  #c(t = this.#l) {
    const n = this.#n + t / 2 * this.#a;
    return this.#o % 180 === 0 ? [n / this.#s, n / this.#r] : [n / this.#r, n / this.#s];
  }
  #d() {
    const [t, n, s, r] = this.#t, [l, c] = this.#c(0);
    return [t + l, n + c, s - 2 * l, r - 2 * c];
  }
  #h() {
    const t = this.#t = _s.slice();
    for (const {
      line: r
    } of this.#i) {
      if (r.length <= 12) {
        for (let u = 4, d = r.length; u < d; u += 6)
          K.pointBoundingBox(r[u], r[u + 1], t);
        continue;
      }
      let l = r[4], c = r[5];
      for (let u = 6, d = r.length; u < d; u += 6) {
        const [p, g, m, v, A, S] = r.subarray(u, u + 6);
        K.bezierBoundingBox(l, c, p, g, m, v, A, S, t), l = A, c = S;
      }
    }
    const [n, s] = this.#c();
    t[0] = $t(t[0] - n, 0, 1), t[1] = $t(t[1] - s, 0, 1), t[2] = $t(t[2] + n, 0, 1), t[3] = $t(t[3] + s, 0, 1), t[2] -= t[0], t[3] -= t[1];
  }
  get box() {
    return this.#t;
  }
  updateProperty(t, n) {
    return t === "stroke-width" ? this.#f(n) : null;
  }
  #f(t) {
    const [n, s] = this.#c();
    this.#l = t;
    const [r, l] = this.#c(), [c, u] = [r - n, l - s], d = this.#t;
    return d[0] -= c, d[1] -= u, d[2] += 2 * c, d[3] += 2 * u, d;
  }
  updateParentDimensions([t, n], s) {
    const [r, l] = this.#c();
    this.#s = t, this.#r = n, this.#a = s;
    const [c, u] = this.#c(), d = c - r, p = u - l, g = this.#t;
    return g[0] -= d, g[1] -= p, g[2] += 2 * d, g[3] += 2 * p, g;
  }
  updateRotation(t) {
    return this.#e = t, {
      path: {
        transform: this.rotationTransform
      }
    };
  }
  get viewBox() {
    return this.#t.map(J.svgRound).join(" ");
  }
  get defaultProperties() {
    const [t, n] = this.#t;
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${J.svgRound(t)} ${J.svgRound(n)}`
      }
    };
  }
  get rotationTransform() {
    const [, , t, n] = this.#t;
    let s = 0, r = 0, l = 0, c = 0, u = 0, d = 0;
    switch (this.#e) {
      case 90:
        r = n / t, l = -t / n, u = t;
        break;
      case 180:
        s = -1, c = -1, u = t, d = n;
        break;
      case 270:
        r = -n / t, l = t / n, d = n;
        break;
      default:
        return "";
    }
    return `matrix(${s} ${r} ${l} ${c} ${J.svgRound(u)} ${J.svgRound(d)})`;
  }
  getPathResizingSVGProperties([t, n, s, r]) {
    const [l, c] = this.#c(), [u, d, p, g] = this.#t;
    if (Math.abs(p - l) <= J.PRECISION || Math.abs(g - c) <= J.PRECISION) {
      const E = t + s / 2 - (u + p / 2), _ = n + r / 2 - (d + g / 2);
      return {
        path: {
          "transform-origin": `${J.svgRound(t)} ${J.svgRound(n)}`,
          transform: `${this.rotationTransform} translate(${E} ${_})`
        }
      };
    }
    const m = (s - 2 * l) / (p - 2 * l), v = (r - 2 * c) / (g - 2 * c), A = p / s, S = g / r;
    return {
      path: {
        "transform-origin": `${J.svgRound(u)} ${J.svgRound(d)}`,
        transform: `${this.rotationTransform} scale(${A} ${S}) translate(${J.svgRound(l)} ${J.svgRound(c)}) scale(${m} ${v}) translate(${J.svgRound(-l)} ${J.svgRound(-c)})`
      }
    };
  }
  getPathResizedSVGProperties([t, n, s, r]) {
    const [l, c] = this.#c(), u = this.#t, [d, p, g, m] = u;
    if (u[0] = t, u[1] = n, u[2] = s, u[3] = r, Math.abs(g - l) <= J.PRECISION || Math.abs(m - c) <= J.PRECISION) {
      const _ = t + s / 2 - (d + g / 2), w = n + r / 2 - (p + m / 2);
      for (const {
        line: C,
        points: M
      } of this.#i)
        J._translate(C, _, w, C), J._translate(M, _, w, M);
      return {
        root: {
          viewBox: this.viewBox
        },
        path: {
          "transform-origin": `${J.svgRound(t)} ${J.svgRound(n)}`,
          transform: this.rotationTransform || null,
          d: this.toSVGPath()
        }
      };
    }
    const v = (s - 2 * l) / (g - 2 * l), A = (r - 2 * c) / (m - 2 * c), S = -v * (d + l) + t + l, E = -A * (p + c) + n + c;
    if (v !== 1 || A !== 1 || S !== 0 || E !== 0)
      for (const {
        line: _,
        points: w
      } of this.#i)
        J._rescale(_, S, E, v, A, _), J._rescale(w, S, E, v, A, w);
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${J.svgRound(t)} ${J.svgRound(n)}`,
        transform: this.rotationTransform || null,
        d: this.toSVGPath()
      }
    };
  }
  getPathTranslatedSVGProperties([t, n], s) {
    const [r, l] = s, c = this.#t, u = t - c[0], d = n - c[1];
    if (this.#s === r && this.#r === l)
      for (const {
        line: p,
        points: g
      } of this.#i)
        J._translate(p, u, d, p), J._translate(g, u, d, g);
    else {
      const p = this.#s / r, g = this.#r / l;
      this.#s = r, this.#r = l;
      for (const {
        line: m,
        points: v
      } of this.#i)
        J._rescale(m, u, d, p, g, m), J._rescale(v, u, d, p, g, v);
      c[2] *= p, c[3] *= g;
    }
    return c[0] = t, c[1] = n, {
      root: {
        viewBox: this.viewBox
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${J.svgRound(t)} ${J.svgRound(n)}`
      }
    };
  }
  get defaultSVGProperties() {
    const t = this.#t;
    return {
      root: {
        viewBox: this.viewBox
      },
      rootClass: {
        draw: !0
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${J.svgRound(t[0])} ${J.svgRound(t[1])}`,
        transform: this.rotationTransform || null
      },
      bbox: t
    };
  }
}
class ac extends Od {
  constructor(t) {
    super(), this._viewParameters = t, super.updateProperties({
      fill: "none",
      stroke: rt._defaultLineColor,
      "stroke-opacity": 1,
      "stroke-width": 1,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-miterlimit": 10
    });
  }
  updateSVGProperty(t, n) {
    t === "stroke-width" && (n ??= this["stroke-width"], n *= this._viewParameters.realScale), super.updateSVGProperty(t, n);
  }
  clone() {
    const t = new ac(this._viewParameters);
    return t.updateAll(this), t;
  }
}
class kd extends wt {
  static _type = "ink";
  static _editorType = pt.INK;
  static _defaultDrawingOptions = null;
  constructor(t) {
    super({
      ...t,
      name: "inkEditor"
    }), this._willKeepAspectRatio = !0, this.defaultL10nId = "pdfjs-editor-ink-editor";
  }
  static initialize(t, n) {
    rt.initialize(t, n), this._defaultDrawingOptions = new ac(n.viewParameters);
  }
  static getDefaultDrawingOptions(t) {
    const n = this._defaultDrawingOptions.clone();
    return n.updateProperties(t), n;
  }
  static get supportMultipleDrawings() {
    return !0;
  }
  static get typesMap() {
    return lt(this, "typesMap", /* @__PURE__ */ new Map([[Mt.INK_THICKNESS, "stroke-width"], [Mt.INK_COLOR, "stroke"], [Mt.INK_OPACITY, "stroke-opacity"]]));
  }
  static createDrawerInstance({
    x: t,
    y: n,
    box: [, , s, r],
    rotation: l
  }) {
    return new U1(t, n, s, r, l, this._defaultDrawingOptions["stroke-width"]);
  }
  static deserializeDraw(t, n, s, r, l, c) {
    return Kr.deserialize(t, n, s, r, l, c);
  }
  static async deserialize(t, n, s) {
    let r = null;
    if (t instanceof Md) {
      const {
        data: {
          inkLists: c,
          rect: u,
          rotation: d,
          id: p,
          color: g,
          opacity: m,
          borderStyle: {
            rawWidth: v
          },
          popupRef: A,
          richText: S,
          contentsObj: E,
          creationDate: _,
          modificationDate: w
        },
        parent: {
          page: {
            pageNumber: C
          }
        }
      } = t;
      r = t = {
        annotationType: pt.INK,
        color: Array.from(g),
        thickness: v,
        opacity: m,
        paths: {
          points: c
        },
        boxes: null,
        pageIndex: C - 1,
        rect: u.slice(0),
        rotation: d,
        annotationElementId: p,
        id: p,
        deleted: !1,
        popupRef: A,
        richText: S,
        comment: E?.str || null,
        creationDate: _,
        modificationDate: w
      };
    }
    const l = await super.deserialize(t, n, s);
    return l._initialData = r, t.comment && l.setCommentData(t), l;
  }
  get toolbarButtons() {
    return this._colorPicker ||= new Vr(this), [["colorPicker", this._colorPicker]];
  }
  get colorType() {
    return Mt.INK_COLOR;
  }
  get colorAndOpacityType() {
    return Mt.INK_COLOR_AND_OPACITY;
  }
  get opacityType() {
    return Mt.INK_OPACITY;
  }
  updateParams(t, n) {
    if (t === Mt.INK_COLOR_AND_OPACITY) {
      this._updateColorAndOpacity(n.color, n.opacity);
      return;
    }
    super.updateParams(t, n);
  }
  static updateDefaultParams(t, n) {
    if (t === Mt.INK_COLOR_AND_OPACITY) {
      super.updateDefaultParams(Mt.INK_COLOR, n.color), super.updateDefaultParams(Mt.INK_OPACITY, n.opacity);
      return;
    }
    super.updateDefaultParams(t, n);
  }
  get color() {
    return this._drawingOptions.stroke;
  }
  get opacity() {
    return this._drawingOptions["stroke-opacity"];
  }
  onScaleChanging() {
    if (!this.parent)
      return;
    super.onScaleChanging();
    const {
      _drawId: t,
      _drawingOptions: n,
      parent: s
    } = this;
    n.updateSVGProperty("stroke-width"), s.drawLayer.updateProperties(t, n.toSVGProperties());
  }
  static onScaleChangingWhenDrawing() {
    const t = this._currentParent;
    t && (super.onScaleChangingWhenDrawing(), this._defaultDrawingOptions.updateSVGProperty("stroke-width"), t.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
  }
  createDrawingOptions({
    color: t,
    thickness: n,
    opacity: s
  }) {
    this._drawingOptions = kd.getDefaultDrawingOptions({
      stroke: K.makeHexColor(...t),
      "stroke-width": n,
      "stroke-opacity": s
    });
  }
  serialize(t = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const {
      lines: n,
      points: s
    } = this.serializeDraw(t), {
      _drawingOptions: {
        stroke: r,
        "stroke-opacity": l,
        "stroke-width": c
      }
    } = this, u = Object.assign(super.serialize(t), {
      color: rt._colorManager.convert(r),
      opacity: l,
      thickness: c,
      paths: {
        lines: n,
        points: s
      }
    });
    return this.addComment(u), t ? (u.isCopy = !0, u) : this.annotationElementId && !this.#t(u) ? null : (u.id = this.annotationElementId, u);
  }
  #t(t) {
    const {
      color: n,
      thickness: s,
      opacity: r,
      pageIndex: l
    } = this._initialData;
    return this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized || t.color.some((c, u) => c !== n[u]) || t.thickness !== s || t.opacity !== r || t.pageIndex !== l;
  }
  renderAnnotationElement(t) {
    if (this.deleted)
      return t.hide(), null;
    const {
      points: n,
      rect: s
    } = this.serializeDraw(!1);
    return t.updateEdited({
      rect: s,
      thickness: this._drawingOptions["stroke-width"],
      points: n,
      popup: this.comment
    }), null;
  }
}
class pd extends Kr {
  toSVGPath() {
    let t = super.toSVGPath();
    return t.endsWith("Z") || (t += "Z"), t;
  }
}
const Rl = 8, kr = 3;
class Ma {
  static #t = {
    maxDim: 512,
    sigmaSFactor: 0.02,
    sigmaR: 25,
    kernelSize: 16
  };
  static #e(t, n, s, r) {
    return s -= t, r -= n, s === 0 ? r > 0 ? 0 : 4 : s === 1 ? r + 6 : 2 - r;
  }
  static #n = new Int32Array([0, 1, -1, 1, -1, 0, -1, -1, 0, -1, 1, -1, 1, 0, 1, 1]);
  static #i(t, n, s, r, l, c, u) {
    const d = this.#e(s, r, l, c);
    for (let p = 0; p < 8; p++) {
      const g = (-p + d - u + 16) % 8, m = this.#n[2 * g], v = this.#n[2 * g + 1];
      if (t[(s + m) * n + (r + v)] !== 0)
        return g;
    }
    return -1;
  }
  static #s(t, n, s, r, l, c, u) {
    const d = this.#e(s, r, l, c);
    for (let p = 0; p < 8; p++) {
      const g = (p + d + u + 16) % 8, m = this.#n[2 * g], v = this.#n[2 * g + 1];
      if (t[(s + m) * n + (r + v)] !== 0)
        return g;
    }
    return -1;
  }
  static #r(t, n, s, r) {
    const l = t.length, c = new Int32Array(l);
    for (let g = 0; g < l; g++)
      c[g] = t[g] <= r ? 1 : 0;
    for (let g = 1; g < s - 1; g++)
      c[g * n] = c[g * n + n - 1] = 0;
    for (let g = 0; g < n; g++)
      c[g] = c[n * s - 1 - g] = 0;
    let u = 1, d;
    const p = [];
    for (let g = 1; g < s - 1; g++) {
      d = 1;
      for (let m = 1; m < n - 1; m++) {
        const v = g * n + m, A = c[v];
        if (A === 0)
          continue;
        let S = g, E = m;
        if (A === 1 && c[v - 1] === 0)
          u += 1, E -= 1;
        else if (A >= 1 && c[v + 1] === 0)
          u += 1, E += 1, A > 1 && (d = A);
        else {
          A !== 1 && (d = Math.abs(A));
          continue;
        }
        const _ = [m, g], w = E === m + 1, C = {
          isHole: w,
          points: _,
          id: u,
          parent: 0
        };
        p.push(C);
        let M;
        for (const W of p)
          if (W.id === d) {
            M = W;
            break;
          }
        M ? M.isHole ? C.parent = w ? M.parent : d : C.parent = w ? d : M.parent : C.parent = w ? d : 0;
        const B = this.#i(c, n, g, m, S, E, 0);
        if (B === -1) {
          c[v] = -u, c[v] !== 1 && (d = Math.abs(c[v]));
          continue;
        }
        let N = this.#n[2 * B], P = this.#n[2 * B + 1];
        const U = g + N, j = m + P;
        S = U, E = j;
        let q = g, $ = m;
        for (; ; ) {
          const W = this.#s(c, n, q, $, S, E, 1);
          N = this.#n[2 * W], P = this.#n[2 * W + 1];
          const tt = q + N, ct = $ + P;
          _.push(ct, tt);
          const gt = q * n + $;
          if (c[gt + 1] === 0 ? c[gt] = -u : c[gt] === 1 && (c[gt] = u), tt === g && ct === m && q === U && $ === j) {
            c[v] !== 1 && (d = Math.abs(c[v]));
            break;
          } else
            S = q, E = $, q = tt, $ = ct;
        }
      }
    }
    return p;
  }
  static #a(t, n, s, r) {
    if (s - n <= 4) {
      for (let U = n; U < s - 2; U += 2)
        r.push(t[U], t[U + 1]);
      return;
    }
    const l = t[n], c = t[n + 1], u = t[s - 4] - l, d = t[s - 3] - c, p = Math.hypot(u, d), g = u / p, m = d / p, v = g * c - m * l, A = d / u, S = 1 / p, E = Math.atan(A), _ = Math.cos(E), w = Math.sin(E), C = S * (Math.abs(_) + Math.abs(w)), M = S * (1 - C + C ** 2), B = Math.max(Math.atan(Math.abs(w + _) * M), Math.atan(Math.abs(w - _) * M));
    let N = 0, P = n;
    for (let U = n + 2; U < s - 2; U += 2) {
      const j = Math.abs(v - g * t[U + 1] + m * t[U]);
      j > N && (P = U, N = j);
    }
    N > (p * B) ** 2 ? (this.#a(t, n, P + 2, r), this.#a(t, P, s, r)) : r.push(l, c);
  }
  static #o(t) {
    const n = [], s = t.length;
    return this.#a(t, 0, s, n), n.push(t[s - 2], t[s - 1]), n.length <= 4 ? null : n;
  }
  static #l(t, n, s, r, l, c) {
    const u = new Float32Array(c ** 2), d = -2 * r ** 2, p = c >> 1;
    for (let E = 0; E < c; E++) {
      const _ = (E - p) ** 2;
      for (let w = 0; w < c; w++)
        u[E * c + w] = Math.exp((_ + (w - p) ** 2) / d);
    }
    const g = new Float32Array(256), m = -2 * l ** 2;
    for (let E = 0; E < 256; E++)
      g[E] = Math.exp(E ** 2 / m);
    const v = t.length, A = new Uint8Array(v), S = new Uint32Array(256);
    for (let E = 0; E < s; E++)
      for (let _ = 0; _ < n; _++) {
        const w = E * n + _, C = t[w];
        let M = 0, B = 0;
        for (let P = 0; P < c; P++) {
          const U = E + P - p;
          if (!(U < 0 || U >= s))
            for (let j = 0; j < c; j++) {
              const q = _ + j - p;
              if (q < 0 || q >= n)
                continue;
              const $ = t[U * n + q], W = u[P * c + j] * g[Math.abs($ - C)];
              M += $ * W, B += W;
            }
        }
        const N = A[w] = Math.round(M / B);
        S[N]++;
      }
    return [A, S];
  }
  static #c(t) {
    const n = new Uint32Array(256);
    for (const s of t)
      n[s]++;
    return n;
  }
  static #d(t) {
    const n = t.length, s = new Uint8ClampedArray(n >> 2);
    let r = -1 / 0, l = 1 / 0;
    for (let u = 0, d = s.length; u < d; u++) {
      const p = s[u] = t[u << 2];
      r = Math.max(r, p), l = Math.min(l, p);
    }
    const c = 255 / (r - l);
    for (let u = 0, d = s.length; u < d; u++)
      s[u] = (s[u] - l) * c;
    return s;
  }
  static #h(t) {
    let n, s = -1 / 0, r = -1 / 0;
    const l = t.findIndex((d) => d !== 0);
    let c = l, u = l;
    for (n = l; n < 256; n++) {
      const d = t[n];
      d > s && (n - c > r && (r = n - c, u = n - 1), s = d, c = n);
    }
    for (n = u - 1; n >= 0 && !(t[n] > t[n + 1]); n--)
      ;
    return n;
  }
  static #f(t) {
    const n = t, {
      width: s,
      height: r
    } = t, {
      maxDim: l
    } = this.#t;
    let c = s, u = r;
    if (s > l || r > l) {
      let v = s, A = r, S = Math.log2(Math.max(s, r) / l);
      const E = Math.floor(S);
      S = S === E ? E - 1 : E;
      for (let w = 0; w < S; w++) {
        c = Math.ceil(v / 2), u = Math.ceil(A / 2);
        const C = new OffscreenCanvas(c, u);
        C.getContext("2d").drawImage(t, 0, 0, v, A, 0, 0, c, u), v = c, A = u, t !== n && t.close(), t = C.transferToImageBitmap();
      }
      const _ = Math.min(l / c, l / u);
      c = Math.round(c * _), u = Math.round(u * _);
    }
    const p = new OffscreenCanvas(c, u).getContext("2d", {
      willReadFrequently: !0
    });
    p.fillStyle = "white", p.fillRect(0, 0, c, u), p.filter = "grayscale(1)", p.drawImage(t, 0, 0, t.width, t.height, 0, 0, c, u);
    const g = p.getImageData(0, 0, c, u).data;
    return [this.#d(g), c, u];
  }
  static extractContoursFromText(t, {
    fontFamily: n,
    fontStyle: s,
    fontWeight: r
  }, l, c, u, d) {
    let p = new OffscreenCanvas(1, 1), g = p.getContext("2d", {
      alpha: !1
    });
    const m = 200, v = g.font = `${s} ${r} ${m}px ${n}`, {
      actualBoundingBoxLeft: A,
      actualBoundingBoxRight: S,
      actualBoundingBoxAscent: E,
      actualBoundingBoxDescent: _,
      fontBoundingBoxAscent: w,
      fontBoundingBoxDescent: C,
      width: M
    } = g.measureText(t), B = 1.5, N = Math.ceil(Math.max(Math.abs(A) + Math.abs(S) || 0, M) * B), P = Math.ceil(Math.max(Math.abs(E) + Math.abs(_) || m, Math.abs(w) + Math.abs(C) || m) * B);
    p = new OffscreenCanvas(N, P), g = p.getContext("2d", {
      alpha: !0,
      willReadFrequently: !0
    }), g.font = v, g.filter = "grayscale(1)", g.fillStyle = "white", g.fillRect(0, 0, N, P), g.fillStyle = "black", g.fillText(t, N * (B - 1) / 2, P * (3 - B) / 2);
    const U = this.#d(g.getImageData(0, 0, N, P).data), j = this.#c(U), q = this.#h(j), $ = this.#r(U, N, P, q);
    return this.processDrawnLines({
      lines: {
        curves: $,
        width: N,
        height: P
      },
      pageWidth: l,
      pageHeight: c,
      rotation: u,
      innerMargin: d,
      mustSmooth: !0,
      areContours: !0
    });
  }
  static process(t, n, s, r, l) {
    const [c, u, d] = this.#f(t), [p, g] = this.#l(c, u, d, Math.hypot(u, d) * this.#t.sigmaSFactor, this.#t.sigmaR, this.#t.kernelSize), m = this.#h(g), v = this.#r(p, u, d, m);
    return this.processDrawnLines({
      lines: {
        curves: v,
        width: u,
        height: d
      },
      pageWidth: n,
      pageHeight: s,
      rotation: r,
      innerMargin: l,
      mustSmooth: !0,
      areContours: !0
    });
  }
  static processDrawnLines({
    lines: t,
    pageWidth: n,
    pageHeight: s,
    rotation: r,
    innerMargin: l,
    mustSmooth: c,
    areContours: u
  }) {
    r % 180 !== 0 && ([n, s] = [s, n]);
    const {
      curves: d,
      width: p,
      height: g
    } = t, m = t.thickness ?? 0, v = [], A = Math.min(n / p, s / g), S = A / n, E = A / s, _ = [];
    for (const {
      points: C
    } of d) {
      const M = c ? this.#o(C) : C;
      if (!M)
        continue;
      _.push(M);
      const B = M.length, N = new Float32Array(B), P = new Float32Array(3 * (B === 2 ? 2 : B - 2));
      if (v.push({
        line: P,
        points: N
      }), B === 2) {
        N[0] = M[0] * S, N[1] = M[1] * E, P.set([NaN, NaN, NaN, NaN, N[0], N[1]], 0);
        continue;
      }
      let [U, j, q, $] = M;
      U *= S, j *= E, q *= S, $ *= E, N.set([U, j, q, $], 0), P.set([NaN, NaN, NaN, NaN, U, j], 0);
      for (let W = 4; W < B; W += 2) {
        const tt = N[W] = M[W] * S, ct = N[W + 1] = M[W + 1] * E;
        P.set(J.createBezierPoints(U, j, q, $, tt, ct), (W - 2) * 3), [U, j, q, $] = [q, $, tt, ct];
      }
    }
    if (v.length === 0)
      return null;
    const w = u ? new pd() : new Kr();
    return w.build(v, n, s, 1, r, u ? 0 : m, l), {
      outline: w,
      newCurves: _,
      areContours: u,
      thickness: m,
      width: p,
      height: g
    };
  }
  static async compressSignature({
    outlines: t,
    areContours: n,
    thickness: s,
    width: r,
    height: l
  }) {
    let c = 1 / 0, u = -1 / 0, d = 0;
    for (const C of t) {
      d += C.length;
      for (let M = 2, B = C.length; M < B; M++) {
        const N = C[M] - C[M - 2];
        c = Math.min(c, N), u = Math.max(u, N);
      }
    }
    let p;
    c >= -128 && u <= 127 ? p = Int8Array : c >= -32768 && u <= 32767 ? p = Int16Array : p = Int32Array;
    const g = t.length, m = Rl + kr * g, v = new Uint32Array(m);
    let A = 0;
    v[A++] = m * Uint32Array.BYTES_PER_ELEMENT + (d - 2 * g) * p.BYTES_PER_ELEMENT, v[A++] = 0, v[A++] = r, v[A++] = l, v[A++] = n ? 0 : 1, v[A++] = Math.max(0, Math.floor(s ?? 0)), v[A++] = g, v[A++] = p.BYTES_PER_ELEMENT;
    for (const C of t)
      v[A++] = C.length - 2, v[A++] = C[0], v[A++] = C[1];
    const S = new CompressionStream("deflate-raw"), E = S.writable.getWriter();
    await E.ready, E.write(v);
    const _ = p.prototype.constructor;
    for (const C of t) {
      const M = new _(C.length - 2);
      for (let B = 2, N = C.length; B < N; B++)
        M[B - 2] = C[B] - C[B - 2];
      E.write(M);
    }
    return E.close(), (await new Response(S.readable).bytes()).toBase64();
  }
  static async decompressSignature(t) {
    try {
      const n = Uint8Array.fromBase64(t), {
        readable: s,
        writable: r
      } = new DecompressionStream("deflate-raw"), l = r.getWriter();
      await l.ready, l.write(n).then(async () => {
        await l.ready, await l.close();
      }).catch(() => {
      });
      let c = null, u = 0;
      for await (const M of s)
        c ||= new Uint8Array(new Uint32Array(M.buffer, 0, 4)[0]), c.set(M, u), u += M.length;
      const d = new Uint32Array(c.buffer, 0, c.length >> 2), p = d[1];
      if (p !== 0)
        throw new Error(`Invalid version: ${p}`);
      const g = d[2], m = d[3], v = d[4] === 0, A = d[5], S = d[6], E = d[7], _ = [], w = (Rl + kr * S) * Uint32Array.BYTES_PER_ELEMENT;
      let C;
      switch (E) {
        case Int8Array.BYTES_PER_ELEMENT:
          C = new Int8Array(c.buffer, w);
          break;
        case Int16Array.BYTES_PER_ELEMENT:
          C = new Int16Array(c.buffer, w);
          break;
        case Int32Array.BYTES_PER_ELEMENT:
          C = new Int32Array(c.buffer, w);
          break;
      }
      u = 0;
      for (let M = 0; M < S; M++) {
        const B = d[kr * M + Rl], N = new Float32Array(B + 2);
        _.push(N);
        for (let P = 0; P < kr - 1; P++)
          N[P] = d[kr * M + Rl + P + 1];
        for (let P = 0; P < B; P++)
          N[P + 2] = N[P] + C[u++];
      }
      return {
        areContours: v,
        thickness: A,
        outlines: _,
        width: g,
        height: m
      };
    } catch (n) {
      return yt(`decompressSignature: ${n}`), null;
    }
  }
}
class Bd extends Od {
  constructor() {
    super(), super.updateProperties({
      fill: rt._defaultLineColor,
      "stroke-width": 0
    });
  }
  clone() {
    const t = new Bd();
    return t.updateAll(this), t;
  }
}
class Pd extends ac {
  constructor(t) {
    super(t), super.updateProperties({
      stroke: rt._defaultLineColor,
      "stroke-width": 1
    });
  }
  clone() {
    const t = new Pd(this._viewParameters);
    return t.updateAll(this), t;
  }
}
class $n extends wt {
  #t = !1;
  #e = null;
  #n = null;
  #i = null;
  static _type = "signature";
  static _editorType = pt.SIGNATURE;
  static _defaultDrawingOptions = null;
  constructor(t) {
    super({
      ...t,
      mustBeCommitted: !0,
      name: "signatureEditor"
    }), this._willKeepAspectRatio = !0, this.#n = t.signatureData || null, this.#e = null, this.defaultL10nId = "pdfjs-editor-signature-editor1";
  }
  static initialize(t, n) {
    rt.initialize(t, n), this._defaultDrawingOptions = new Bd(), this._defaultDrawnSignatureOptions = new Pd(n.viewParameters);
  }
  static getDefaultDrawingOptions(t) {
    const n = this._defaultDrawingOptions.clone();
    return n.updateProperties(t), n;
  }
  static get supportMultipleDrawings() {
    return !1;
  }
  static get typesMap() {
    return lt(this, "typesMap", /* @__PURE__ */ new Map());
  }
  static get isDrawer() {
    return !1;
  }
  get telemetryFinalData() {
    return {
      type: "signature",
      hasDescription: !!this.#e
    };
  }
  static computeTelemetryFinalData(t) {
    const n = t.get("hasDescription");
    return {
      hasAltText: n.get(!0) ?? 0,
      hasNoAltText: n.get(!1) ?? 0
    };
  }
  get isResizable() {
    return !0;
  }
  onScaleChanging() {
    this._drawId !== null && super.onScaleChanging();
  }
  render() {
    if (this.div)
      return this.div;
    let t, n;
    const {
      _isCopy: s
    } = this;
    if (s && (this._isCopy = !1, t = this.x, n = this.y), super.render(), this._drawId === null)
      if (this.#n) {
        const {
          lines: r,
          mustSmooth: l,
          areContours: c,
          description: u,
          uuid: d,
          heightInPage: p
        } = this.#n, {
          rawDims: {
            pageWidth: g,
            pageHeight: m
          },
          rotation: v
        } = this.parent.viewport, A = Ma.processDrawnLines({
          lines: r,
          pageWidth: g,
          pageHeight: m,
          rotation: v,
          innerMargin: $n._INNER_MARGIN,
          mustSmooth: l,
          areContours: c
        });
        this.addSignature(A, p, u, d);
      } else
        this.div.setAttribute("data-l10n-args", JSON.stringify({
          description: ""
        })), this.div.hidden = !0, this._uiManager.getSignature(this);
    else
      this.div.setAttribute("data-l10n-args", JSON.stringify({
        description: this.#e || ""
      }));
    return s && (this._isCopy = !0, this._moveAfterPaste(t, n)), this.div;
  }
  setUuid(t) {
    this.#i = t, this.addEditToolbar();
  }
  getUuid() {
    return this.#i;
  }
  get description() {
    return this.#e;
  }
  set description(t) {
    this.#e = t, this.div && (this.div.setAttribute("data-l10n-args", JSON.stringify({
      description: t
    })), super.addEditToolbar().then((n) => {
      n?.updateEditSignatureButton(t);
    }));
  }
  getSignaturePreview() {
    const {
      newCurves: t,
      areContours: n,
      thickness: s,
      width: r,
      height: l
    } = this.#n, c = Math.max(r, l), u = Ma.processDrawnLines({
      lines: {
        curves: t.map((d) => ({
          points: d
        })),
        thickness: s,
        width: r,
        height: l
      },
      pageWidth: c,
      pageHeight: c,
      rotation: 0,
      innerMargin: 0,
      mustSmooth: !1,
      areContours: n
    });
    return {
      areContours: n,
      outline: u.outline
    };
  }
  get toolbarButtons() {
    return this._uiManager.signatureManager ? [["editSignature", this._uiManager.signatureManager]] : super.toolbarButtons;
  }
  addSignature(t, n, s, r) {
    const {
      x: l,
      y: c
    } = this, {
      outline: u
    } = this.#n = t;
    this.#t = u instanceof pd, this.description = s;
    let d;
    this.#t ? d = $n.getDefaultDrawingOptions() : (d = $n._defaultDrawnSignatureOptions.clone(), d.updateProperties({
      "stroke-width": u.thickness
    })), this._addOutlines({
      drawOutlines: u,
      drawingOptions: d
    });
    const [, p] = this.pageDimensions;
    let g = n / p;
    g = g >= 1 ? 0.5 : g, this.width *= g / this.height, this.width >= 1 && (g *= 0.9 / this.width, this.width = 0.9), this.height = g, this.setDims(), this.x = l, this.y = c, this.center(), this._onResized(), this.onScaleChanging(), this.rotate(), this._uiManager.addToAnnotationStorage(this), this.setUuid(r), this._reportTelemetry({
      action: "pdfjs.signature.inserted",
      data: {
        hasBeenSaved: !!r,
        hasDescription: !!s
      }
    }), this.div.hidden = !1;
  }
  getFromImage(t) {
    const {
      rawDims: {
        pageWidth: n,
        pageHeight: s
      },
      rotation: r
    } = this.parent.viewport;
    return Ma.process(t, n, s, r, $n._INNER_MARGIN);
  }
  getFromText(t, n) {
    const {
      rawDims: {
        pageWidth: s,
        pageHeight: r
      },
      rotation: l
    } = this.parent.viewport;
    return Ma.extractContoursFromText(t, n, s, r, l, $n._INNER_MARGIN);
  }
  getDrawnSignature(t) {
    const {
      rawDims: {
        pageWidth: n,
        pageHeight: s
      },
      rotation: r
    } = this.parent.viewport;
    return Ma.processDrawnLines({
      lines: t,
      pageWidth: n,
      pageHeight: s,
      rotation: r,
      innerMargin: $n._INNER_MARGIN,
      mustSmooth: !1,
      areContours: !1
    });
  }
  createDrawingOptions({
    areContours: t,
    thickness: n
  }) {
    t ? this._drawingOptions = $n.getDefaultDrawingOptions() : (this._drawingOptions = $n._defaultDrawnSignatureOptions.clone(), this._drawingOptions.updateProperties({
      "stroke-width": n
    }));
  }
  serialize(t = !1) {
    if (this.isEmpty())
      return null;
    const {
      lines: n,
      points: s
    } = this.serializeDraw(t), {
      _drawingOptions: {
        "stroke-width": r
      }
    } = this, l = Object.assign(super.serialize(t), {
      isSignature: !0,
      areContours: this.#t,
      color: [0, 0, 0],
      thickness: this.#t ? 0 : r
    });
    return this.addComment(l), t ? (l.paths = {
      lines: n,
      points: s
    }, l.uuid = this.#i, l.isCopy = !0) : l.lines = n, this.#e && (l.accessibilityData = {
      type: "Figure",
      alt: this.#e
    }), l;
  }
  static deserializeDraw(t, n, s, r, l, c) {
    return c.areContours ? pd.deserialize(t, n, s, r, l, c) : Kr.deserialize(t, n, s, r, l, c);
  }
  static async deserialize(t, n, s) {
    const r = await super.deserialize(t, n, s);
    return r.#t = t.areContours, r.description = t.accessibilityData?.alt || "", r.#i = t.uuid, r;
  }
}
class H1 extends rt {
  #t = null;
  #e = null;
  #n = null;
  #i = null;
  #s = null;
  #r = "";
  #a = null;
  #o = !1;
  #l = null;
  #c = !1;
  #d = !1;
  static _type = "stamp";
  static _editorType = pt.STAMP;
  constructor(t) {
    super({
      ...t,
      name: "stampEditor"
    }), this.#i = t.bitmapUrl, this.#s = t.bitmapFile, this.defaultL10nId = "pdfjs-editor-stamp-editor";
  }
  static initialize(t, n) {
    rt.initialize(t, n);
  }
  static isHandlingMimeForPasting(t) {
    return ad.includes(t);
  }
  static paste(t, n) {
    n.pasteEditor({
      mode: pt.STAMP
    }, {
      bitmapFile: t.getAsFile()
    });
  }
  altTextFinish() {
    this._uiManager.useNewAltTextFlow && (this.div.hidden = !1), super.altTextFinish();
  }
  get telemetryFinalData() {
    return {
      type: "stamp",
      hasAltText: !!this.altTextData?.altText
    };
  }
  static computeTelemetryFinalData(t) {
    const n = t.get("hasAltText");
    return {
      hasAltText: n.get(!0) ?? 0,
      hasNoAltText: n.get(!1) ?? 0
    };
  }
  #h(t, n = !1) {
    if (!t) {
      this.remove();
      return;
    }
    this.#t = t.bitmap, n || (this.#e = t.id, this.#c = t.isSvg), t.file && (this.#r = t.file.name), this.#m();
  }
  #f() {
    if (this.#n = null, this._uiManager.enableWaiting(!1), !!this.#a) {
      if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && this.#t) {
        this.addEditToolbar().then(() => {
          this._editToolbar.hide(), this._uiManager.editAltText(this, !0);
        });
        return;
      }
      if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && this.#t) {
        this._reportTelemetry({
          action: "pdfjs.image.image_added",
          data: {
            alt_text_modal: !1,
            alt_text_type: "empty"
          }
        });
        try {
          this.mlGuessAltText();
        } catch {
        }
      }
      this.div.focus();
    }
  }
  async mlGuessAltText(t = null, n = !0) {
    if (this.hasAltTextData())
      return null;
    const {
      mlManager: s
    } = this._uiManager;
    if (!s)
      throw new Error("No ML.");
    if (!await s.isEnabledFor("altText"))
      throw new Error("ML isn't enabled for alt text.");
    const {
      data: r,
      width: l,
      height: c
    } = t || this.copyCanvas(null, null, !0).imageData, u = await s.guess({
      name: "altText",
      request: {
        data: r,
        width: l,
        height: c,
        channels: r.length / (l * c)
      }
    });
    if (!u)
      throw new Error("No response from the AI service.");
    if (u.error)
      throw new Error("Error from the AI service.");
    if (u.cancel)
      return null;
    if (!u.output)
      throw new Error("No valid response from the AI service.");
    const d = u.output;
    return await this.setGuessedAltText(d), n && !this.hasAltTextData() && (this.altTextData = {
      alt: d,
      decorative: !1
    }), d;
  }
  #g() {
    if (this.#e) {
      this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(this.#e).then((s) => this.#h(s, !0)).finally(() => this.#f());
      return;
    }
    if (this.#i) {
      const s = this.#i;
      this.#i = null, this._uiManager.enableWaiting(!0), this.#n = this._uiManager.imageManager.getFromUrl(s).then((r) => this.#h(r)).finally(() => this.#f());
      return;
    }
    if (this.#s) {
      const s = this.#s;
      this.#s = null, this._uiManager.enableWaiting(!0), this.#n = this._uiManager.imageManager.getFromFile(s).then((r) => this.#h(r)).finally(() => this.#f());
      return;
    }
    const t = document.createElement("input");
    t.type = "file", t.accept = ad.join(",");
    const n = this._uiManager._signal;
    this.#n = new Promise((s) => {
      t.addEventListener("change", async () => {
        if (!t.files || t.files.length === 0)
          this.remove();
        else {
          this._uiManager.enableWaiting(!0);
          const r = await this._uiManager.imageManager.getFromFile(t.files[0]);
          this._reportTelemetry({
            action: "pdfjs.image.image_selected",
            data: {
              alt_text_modal: this._uiManager.useNewAltTextFlow
            }
          }), this.#h(r);
        }
        s();
      }, {
        signal: n
      }), t.addEventListener("cancel", () => {
        this.remove(), s();
      }, {
        signal: n
      });
    }).finally(() => this.#f()), t.click();
  }
  remove() {
    this.#e && (this.#t = null, this._uiManager.imageManager.deleteId(this.#e), this.#a?.remove(), this.#a = null, this.#l && (clearTimeout(this.#l), this.#l = null)), super.remove();
  }
  rebuild() {
    if (!this.parent) {
      this.#e && this.#g();
      return;
    }
    super.rebuild(), this.div !== null && (this.#e && this.#a === null && this.#g(), this.isAttachedToDOM || this.parent.add(this));
  }
  onceAdded(t) {
    this._isDraggable = !0, t && this.div.focus();
  }
  isEmpty() {
    return !(this.#n || this.#t || this.#i || this.#s || this.#e || this.#o);
  }
  get toolbarButtons() {
    return [["altText", this.createAltText()]];
  }
  get isResizable() {
    return !0;
  }
  render() {
    if (this.div)
      return this.div;
    let t, n;
    return this._isCopy && (t = this.x, n = this.y), super.render(), this.div.hidden = !0, this.createAltText(), this.#o || (this.#t ? this.#m() : this.#g()), this._isCopy && this._moveAfterPaste(t, n), this._uiManager.addShouldRescale(this), this.div;
  }
  setCanvas(t, n) {
    const {
      id: s,
      bitmap: r
    } = this._uiManager.imageManager.getFromCanvas(t, n);
    n.remove(), s && this._uiManager.imageManager.isValidId(s) && (this.#e = s, r && (this.#t = r), this.#o = !1, this.#m());
  }
  _onResized() {
    this.onScaleChanging();
  }
  onScaleChanging() {
    if (!this.parent)
      return;
    this.#l !== null && clearTimeout(this.#l);
    const t = 200;
    this.#l = setTimeout(() => {
      this.#l = null, this.#p();
    }, t);
  }
  #m() {
    const {
      div: t
    } = this;
    let {
      width: n,
      height: s
    } = this.#t;
    const [r, l] = this.pageDimensions, c = 0.75;
    if (this.width)
      n = this.width * r, s = this.height * l;
    else if (n > c * r || s > c * l) {
      const d = Math.min(c * r / n, c * l / s);
      n *= d, s *= d;
    }
    this._uiManager.enableWaiting(!1);
    const u = this.#a = document.createElement("canvas");
    u.setAttribute("role", "img"), this.addContainer(u), this.width = n / r, this.height = s / l, this.setDims(), this._initialOptions?.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, (!this._uiManager.useNewAltTextWhenAddingImage || !this._uiManager.useNewAltTextFlow || this.annotationElementId) && (t.hidden = !1), this.#p(), this.#d || (this.parent.addUndoableEditor(this), this.#d = !0), this._reportTelemetry({
      action: "inserted_image"
    }), this.#r && this.div.setAttribute("aria-description", this.#r), this.annotationElementId || this._uiManager.a11yAlert(rt._l10nAlert.stamp);
  }
  copyCanvas(t, n, s = !1) {
    t ||= 224;
    const {
      width: r,
      height: l
    } = this.#t, c = new Ln();
    let u = this.#t, d = r, p = l, g = null;
    if (n) {
      if (r > n || l > n) {
        const P = Math.min(n / r, n / l);
        d = Math.floor(r * P), p = Math.floor(l * P);
      }
      g = document.createElement("canvas");
      const v = g.width = Math.ceil(d * c.sx), A = g.height = Math.ceil(p * c.sy);
      this.#c || (u = this.#u(v, A));
      const S = g.getContext("2d");
      S.filter = this._uiManager.hcmFilter;
      let E = "white", _ = "#cfcfd8";
      this._uiManager.hcmFilter !== "none" ? _ = "black" : KA.isDarkMode && (E = "#8f8f9d", _ = "#42414d");
      const w = 15, C = w * c.sx, M = w * c.sy, B = new OffscreenCanvas(C * 2, M * 2), N = B.getContext("2d");
      N.fillStyle = E, N.fillRect(0, 0, C * 2, M * 2), N.fillStyle = _, N.fillRect(0, 0, C, M), N.fillRect(C, M, C, M), S.fillStyle = S.createPattern(B, "repeat"), S.fillRect(0, 0, v, A), S.drawImage(u, 0, 0, u.width, u.height, 0, 0, v, A);
    }
    let m = null;
    if (s) {
      let v, A;
      if (c.symmetric && u.width < t && u.height < t)
        v = u.width, A = u.height;
      else if (u = this.#t, r > t || l > t) {
        const _ = Math.min(t / r, t / l);
        v = Math.floor(r * _), A = Math.floor(l * _), this.#c || (u = this.#u(v, A));
      }
      const E = new OffscreenCanvas(v, A).getContext("2d", {
        willReadFrequently: !0
      });
      E.drawImage(u, 0, 0, u.width, u.height, 0, 0, v, A), m = {
        width: v,
        height: A,
        data: E.getImageData(0, 0, v, A).data
      };
    }
    return {
      canvas: g,
      width: d,
      height: p,
      imageData: m
    };
  }
  #u(t, n) {
    const {
      width: s,
      height: r
    } = this.#t;
    let l = s, c = r, u = this.#t;
    for (; l > 2 * t || c > 2 * n; ) {
      const d = l, p = c;
      l > 2 * t && (l = Math.ceil(l / 2)), c > 2 * n && (c = Math.ceil(c / 2));
      const g = new OffscreenCanvas(l, c);
      g.getContext("2d").drawImage(u, 0, 0, d, p, 0, 0, l, c), u = g.transferToImageBitmap();
    }
    return u;
  }
  #p() {
    const [t, n] = this.parentDimensions, {
      width: s,
      height: r
    } = this, l = new Ln(), c = Math.ceil(s * t * l.sx), u = Math.ceil(r * n * l.sy), d = this.#a;
    if (!d || d.width === c && d.height === u)
      return;
    d.width = c, d.height = u;
    const p = this.#c ? this.#t : this.#u(c, u), g = d.getContext("2d");
    g.filter = this._uiManager.hcmFilter, g.drawImage(p, 0, 0, p.width, p.height, 0, 0, c, u);
  }
  #y(t) {
    if (t) {
      if (this.#c) {
        const r = this._uiManager.imageManager.getSvgUrl(this.#e);
        if (r)
          return r;
      }
      const n = document.createElement("canvas");
      return {
        width: n.width,
        height: n.height
      } = this.#t, n.getContext("2d").drawImage(this.#t, 0, 0), n.toDataURL();
    }
    if (this.#c) {
      const [n, s] = this.pageDimensions, r = Math.round(this.width * n * ka.PDF_TO_CSS_UNITS), l = Math.round(this.height * s * ka.PDF_TO_CSS_UNITS), c = new OffscreenCanvas(r, l);
      return c.getContext("2d").drawImage(this.#t, 0, 0, this.#t.width, this.#t.height, 0, 0, r, l), c.transferToImageBitmap();
    }
    return structuredClone(this.#t);
  }
  static async deserialize(t, n, s) {
    let r = null, l = !1;
    if (t instanceof T0) {
      const {
        data: {
          rect: E,
          rotation: _,
          id: w,
          structParent: C,
          popupRef: M,
          richText: B,
          contentsObj: N,
          creationDate: P,
          modificationDate: U
        },
        container: j,
        parent: {
          page: {
            pageNumber: q
          }
        },
        canvas: $
      } = t;
      let W, tt;
      $ ? (delete t.canvas, {
        id: W,
        bitmap: tt
      } = s.imageManager.getFromCanvas(j.id, $), $.remove()) : (l = !0, t._hasNoCanvas = !0);
      const ct = (await n._structTree.getAriaAttributes(`${Da}${w}`))?.get("aria-label") || "";
      r = t = {
        annotationType: pt.STAMP,
        bitmapId: W,
        bitmap: tt,
        pageIndex: q - 1,
        rect: E.slice(0),
        rotation: _,
        annotationElementId: w,
        id: w,
        deleted: !1,
        accessibilityData: {
          decorative: !1,
          altText: ct
        },
        isSvg: !1,
        structParent: C,
        popupRef: M,
        richText: B,
        comment: N?.str || null,
        creationDate: P,
        modificationDate: U
      };
    }
    const c = await super.deserialize(t, n, s), {
      rect: u,
      bitmap: d,
      bitmapUrl: p,
      bitmapId: g,
      isSvg: m,
      accessibilityData: v
    } = t;
    l ? (s.addMissingCanvas(t.id, c), c.#o = !0) : g && s.imageManager.isValidId(g) ? (c.#e = g, d && (c.#t = d)) : c.#i = p, c.#c = m;
    const [A, S] = c.pageDimensions;
    return c.width = (u[2] - u[0]) / A, c.height = (u[3] - u[1]) / S, v && (c.altTextData = v), c._initialData = r, t.comment && c.setCommentData(t), c.#d = !!r, c;
  }
  serialize(t = !1, n = null) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const s = Object.assign(super.serialize(t), {
      bitmapId: this.#e,
      isSvg: this.#c
    });
    if (this.addComment(s), t)
      return s.bitmapUrl = this.#y(!0), s.accessibilityData = this.serializeAltText(!0), s.isCopy = !0, s;
    const {
      decorative: r,
      altText: l
    } = this.serializeAltText(!1);
    if (!r && l && (s.accessibilityData = {
      type: "Figure",
      alt: l
    }), this.annotationElementId) {
      const u = this.#v(s);
      return u.isSame ? null : (u.isSameAltText ? delete s.accessibilityData : s.accessibilityData.structParent = this._initialData.structParent ?? -1, s.id = this.annotationElementId, delete s.bitmapId, s);
    }
    if (n === null)
      return s;
    n.stamps ||= /* @__PURE__ */ new Map();
    const c = this.#c ? (s.rect[2] - s.rect[0]) * (s.rect[3] - s.rect[1]) : null;
    if (!n.stamps.has(this.#e))
      n.stamps.set(this.#e, {
        area: c,
        serialized: s
      }), s.bitmap = this.#y(!1);
    else if (this.#c) {
      const u = n.stamps.get(this.#e);
      c > u.area && (u.area = c, u.serialized.bitmap.close(), u.serialized.bitmap = this.#y(!1));
    }
    return s;
  }
  #v(t) {
    const {
      pageIndex: n,
      accessibilityData: {
        altText: s
      }
    } = this._initialData, r = t.pageIndex === n, l = (t.accessibilityData?.alt || "") === s;
    return {
      isSame: !this.hasEditedComment && !this._hasBeenMoved && !this._hasBeenResized && r && l,
      isSameAltText: l
    };
  }
  renderAnnotationElement(t) {
    return this.deleted ? (t.hide(), null) : (t.updateEdited({
      rect: this.getPDFRect(),
      popup: this.comment
    }), null);
  }
}
class mi {
  #t;
  #e = !1;
  #n = null;
  #i = null;
  #s = null;
  #r = /* @__PURE__ */ new Map();
  #a = !1;
  #o = !1;
  #l = !1;
  #c = null;
  #d = null;
  #h = null;
  #f = null;
  #g = null;
  #m = -1;
  #u;
  static _initialized = !1;
  static #p = new Map([Se, kd, H1, On, $n].map((t) => [t._editorType, t]));
  constructor({
    uiManager: t,
    pageIndex: n,
    div: s,
    structTreeLayer: r,
    accessibilityManager: l,
    annotationLayer: c,
    drawLayer: u,
    textLayer: d,
    viewport: p,
    l10n: g
  }) {
    const m = [...mi.#p.values()];
    if (!mi._initialized) {
      mi._initialized = !0;
      for (const v of m)
        v.initialize(g, t);
    }
    t.registerEditorTypes(m), this.#u = t, this.pageIndex = n, this.div = s, this.#t = l, this.#n = c, this.viewport = p, this.#h = d, this.drawLayer = u, this._structTree = r, this.#u.addLayer(this);
  }
  get isEmpty() {
    return this.#r.size === 0;
  }
  get isInvisible() {
    return this.isEmpty && this.#u.getMode() === pt.NONE;
  }
  updateToolbar(t) {
    this.#u.updateToolbar(t);
  }
  updateMode(t = this.#u.getMode()) {
    switch (this.#E(), t) {
      case pt.NONE:
        this.div.classList.toggle("nonEditing", !0), this.disableTextSelection(), this.togglePointerEvents(!1), this.toggleAnnotationLayerPointerEvents(!0), this.disableClick();
        return;
      case pt.INK:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
        break;
      case pt.HIGHLIGHT:
        this.enableTextSelection(), this.togglePointerEvents(!1), this.disableClick();
        break;
      default:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
    }
    this.toggleAnnotationLayerPointerEvents(!1);
    const {
      classList: n
    } = this.div;
    if (n.toggle("nonEditing", !1), t === pt.POPUP)
      n.toggle("commentEditing", !0);
    else {
      n.toggle("commentEditing", !1);
      for (const s of mi.#p.values())
        n.toggle(`${s._type}Editing`, t === s._editorType);
    }
    this.div.hidden = !1;
  }
  hasTextLayer(t) {
    return t === this.#h?.div;
  }
  setEditingState(t) {
    this.#u.setEditingState(t);
  }
  addCommands(t) {
    this.#u.addCommands(t);
  }
  cleanUndoStack(t) {
    this.#u.cleanUndoStack(t);
  }
  toggleDrawing(t = !1) {
    this.div.classList.toggle("drawing", !t);
  }
  togglePointerEvents(t = !1) {
    this.div.classList.toggle("disabled", !t);
  }
  toggleAnnotationLayerPointerEvents(t = !1) {
    this.#n?.togglePointerEvents(t);
  }
  get #y() {
    return this.#r.size !== 0 ? this.#r.values() : this.#u.getEditors(this.pageIndex);
  }
  async enable() {
    this.#l = !0, this.div.tabIndex = 0, this.togglePointerEvents(!0), this.div.classList.toggle("nonEditing", !1), this.#g?.abort(), this.#g = null;
    const t = /* @__PURE__ */ new Set();
    for (const s of this.#y)
      s.enableEditing(), s.show(!0), s.annotationElementId && (this.#u.removeChangedExistingAnnotation(s), t.add(s.annotationElementId));
    const n = this.#n;
    if (n)
      for (const s of n.getEditableAnnotations()) {
        if (s.hide(), this.#u.isDeletedAnnotationElement(s.data.id) || t.has(s.data.id))
          continue;
        const r = await this.deserialize(s);
        r && (this.addOrRebuild(r), r.enableEditing());
      }
    this.#l = !1, this.#u._eventBus.dispatch("editorsrendered", {
      source: this,
      pageNumber: this.pageIndex + 1
    });
  }
  disable() {
    if (this.#o = !0, this.div.tabIndex = -1, this.togglePointerEvents(!1), this.div.classList.toggle("nonEditing", !0), this.#h && !this.#g) {
      this.#g = new AbortController();
      const r = this.#u.combinedSignal(this.#g);
      this.#h.div.addEventListener("pointerdown", (l) => {
        const {
          clientX: u,
          clientY: d,
          timeStamp: p
        } = l, g = this.#m;
        if (p - g > 500) {
          this.#m = p;
          return;
        }
        this.#m = -1;
        const {
          classList: m
        } = this.div;
        m.toggle("getElements", !0);
        const v = document.elementsFromPoint(u, d);
        if (m.toggle("getElements", !1), !this.div.contains(v[0]))
          return;
        let A;
        const S = new RegExp(`^${La}[0-9]+$`);
        for (const _ of v)
          if (S.test(_.id)) {
            A = _.id;
            break;
          }
        if (!A)
          return;
        const E = this.#r.get(A);
        E?.annotationElementId === null && (ge(l), E.dblclick(l));
      }, {
        signal: r,
        capture: !0
      });
    }
    const t = this.#n, n = [];
    if (t) {
      const r = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
      for (const c of this.#y) {
        if (c.disableEditing(), !c.annotationElementId) {
          n.push(c);
          continue;
        }
        if (c.serialize() !== null) {
          r.set(c.annotationElementId, c);
          continue;
        } else
          l.set(c.annotationElementId, c);
        this.getEditableAnnotation(c.annotationElementId)?.show(), c.remove();
      }
      for (const c of t.getEditableAnnotations()) {
        const {
          id: u
        } = c.data;
        if (this.#u.isDeletedAnnotationElement(u)) {
          c.updateEdited({
            deleted: !0
          });
          continue;
        }
        let d = l.get(u);
        if (d) {
          d.resetAnnotationElement(c), d.show(!1), c.show();
          continue;
        }
        d = r.get(u), d && (this.#u.addChangedExistingAnnotation(d), d.renderAnnotationElement(c) && d.show(!1)), c.show();
      }
    }
    this.#E(), this.isEmpty && (this.div.hidden = !0);
    const {
      classList: s
    } = this.div;
    for (const r of mi.#p.values())
      s.remove(`${r._type}Editing`);
    this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), t?.updateFakeAnnotations(n), this.#o = !1;
  }
  getEditableAnnotation(t) {
    return this.#n?.getEditableAnnotation(t) || null;
  }
  setActiveEditor(t) {
    this.#u.getActive() !== t && this.#u.setActiveEditor(t);
  }
  enableTextSelection() {
    if (this.div.tabIndex = -1, this.#h?.div && !this.#f) {
      this.#f = new AbortController();
      const t = this.#u.combinedSignal(this.#f);
      this.#h.div.addEventListener("pointerdown", this.#v.bind(this), {
        signal: t
      }), this.#h.div.classList.add("highlighting");
    }
  }
  disableTextSelection() {
    this.div.tabIndex = 0, this.#h?.div && this.#f && (this.#f.abort(), this.#f = null, this.#h.div.classList.remove("highlighting"));
  }
  #v(t) {
    this.#u.unselectAll();
    const {
      target: n
    } = t;
    if (n === this.#h.div || (n.getAttribute("role") === "img" || n.classList.contains("endOfContent") || n.classList.contains("textLayerImages") || n.classList.contains("textLayerImagePlaceholder")) && this.#h.div.contains(n)) {
      const {
        isMac: s
      } = Yt.platform;
      if (t.button !== 0 || t.ctrlKey && s)
        return;
      this.#u.showAllEditors("highlight", !0, !0), On.startDrawing(this, this.#u, this.#u.direction === "ltr", t), t.preventDefault();
    }
  }
  enableClick() {
    if (this.#i)
      return;
    this.#i = new AbortController();
    const t = this.#u.combinedSignal(this.#i);
    this.div.addEventListener("pointerdown", this.pointerdown.bind(this), {
      signal: t
    });
    const n = this.pointerup.bind(this);
    this.div.addEventListener("pointerup", n, {
      signal: t
    }), this.div.addEventListener("pointercancel", n, {
      signal: t
    });
  }
  disableClick() {
    this.#i?.abort(), this.#i = null;
  }
  attach(t) {
    this.#r.set(t.id, t);
    const {
      annotationElementId: n
    } = t;
    n && this.#u.isDeletedAnnotationElement(n) && this.#u.removeDeletedAnnotationElement(t);
  }
  detach(t) {
    this.#r.delete(t.id), this.#t?.removePointerInTextLayer(t.contentDiv), !this.#o && t.annotationElementId && this.#u.addDeletedAnnotationElement(t);
  }
  remove(t) {
    this.detach(t), this.#u.removeEditor(t), t.div.remove(), t.isAttachedToDOM = !1;
  }
  changeParent(t) {
    t.parent !== this && (t.parent && t.annotationElementId && (this.#u.addDeletedAnnotationElement(t), rt.deleteAnnotationElement(t), t.annotationElementId = null), this.attach(t), t.parent?.detach(t), t.setParent(this), t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)));
  }
  add(t) {
    if (!(t.parent === this && t.isAttachedToDOM)) {
      if (this.changeParent(t), this.#u.addEditor(t), this.attach(t), !t.isAttachedToDOM) {
        const n = t.render();
        this.div.append(n), t.isAttachedToDOM = !0;
      }
      t.fixAndSetPosition(), t.onceAdded(!this.#l), this.#u.addToAnnotationStorage(t), t._reportTelemetry(t.telemetryInitialData);
    }
  }
  moveEditorInDOM(t) {
    if (!t.isAttachedToDOM)
      return;
    const {
      activeElement: n
    } = document;
    t.div.contains(n) && !this.#s && (t._focusEventsAllowed = !1, this.#s = setTimeout(() => {
      this.#s = null, t.div.contains(document.activeElement) ? t._focusEventsAllowed = !0 : (t.div.addEventListener("focusin", () => {
        t._focusEventsAllowed = !0;
      }, {
        once: !0,
        signal: this.#u._signal
      }), n.focus());
    }, 0)), t._structTreeParentId = this.#t?.moveElementInDOM(this.div, t.div, t.contentDiv, !0);
  }
  addOrRebuild(t) {
    t.needsToBeRebuilt() ? (t.parent ||= this, t.rebuild(), t.show()) : this.add(t);
  }
  addUndoableEditor(t) {
    const n = () => t._uiManager.rebuild(t), s = () => {
      t.remove();
    };
    this.addCommands({
      cmd: n,
      undo: s,
      mustExec: !1
    });
  }
  getEditorByUID(t) {
    for (const n of this.#r.values())
      if (n.uid === t)
        return n;
    return null;
  }
  get #b() {
    return mi.#p.get(this.#u.getMode());
  }
  combinedSignal(t) {
    return this.#u.combinedSignal(t);
  }
  #A(t) {
    const n = this.#b;
    return n ? new n.prototype.constructor(t) : null;
  }
  canCreateNewEmptyEditor() {
    return this.#b?.canCreateNewEmptyEditor();
  }
  async pasteEditor(t, n) {
    this.updateToolbar(t), await this.#u.updateMode(t.mode);
    const {
      offsetX: s,
      offsetY: r
    } = this.#T(), l = this.#u.getId(), c = this.#A({
      parent: this,
      id: l,
      x: s,
      y: r,
      uiManager: this.#u,
      isCentered: !0,
      ...n
    });
    c && this.add(c);
  }
  async deserialize(t) {
    return await mi.#p.get(t.annotationType ?? t.annotationEditorType)?.deserialize(t, this, this.#u) || null;
  }
  createAndAddNewEditor(t, n, s = {}) {
    const r = this.#u.getId(), l = this.#A({
      parent: this,
      id: r,
      x: t.offsetX,
      y: t.offsetY,
      uiManager: this.#u,
      isCentered: n,
      ...s
    });
    return l && this.add(l), l;
  }
  get boundingClientRect() {
    return this.div.getBoundingClientRect();
  }
  #T() {
    const {
      x: t,
      y: n,
      width: s,
      height: r
    } = this.boundingClientRect, l = Math.max(0, t), c = Math.max(0, n), u = Math.min(window.innerWidth, t + s), d = Math.min(window.innerHeight, n + r), p = (l + u) / 2 - t, g = (c + d) / 2 - n, [m, v] = this.viewport.rotation % 180 === 0 ? [p, g] : [g, p];
    return {
      offsetX: m,
      offsetY: v
    };
  }
  addNewEditor(t = {}) {
    this.createAndAddNewEditor(this.#T(), !0, t);
  }
  setSelected(t) {
    this.#u.setSelected(t);
  }
  toggleSelected(t) {
    this.#u.toggleSelected(t);
  }
  unselect(t) {
    this.#u.unselect(t);
  }
  pointerup(t) {
    const {
      isMac: n
    } = Yt.platform;
    if (t.button !== 0 || t.ctrlKey && n || t.target !== this.div || !this.#a || (this.#a = !1, this.#b?.isDrawer && this.#b.supportMultipleDrawings))
      return;
    if (!this.#e) {
      this.#e = !0;
      return;
    }
    const s = this.#u.getMode();
    if (s === pt.STAMP || s === pt.POPUP || s === pt.SIGNATURE) {
      this.#u.unselectAll();
      return;
    }
    this.createAndAddNewEditor(t, !1);
  }
  pointerdown(t) {
    if (this.#u.getMode() === pt.HIGHLIGHT && this.enableTextSelection(), this.#a) {
      this.#a = !1;
      return;
    }
    const {
      isMac: n
    } = Yt.platform;
    if (t.button !== 0 || t.ctrlKey && n || t.target !== this.div)
      return;
    if (this.#a = !0, this.#b?.isDrawer) {
      this.startDrawingSession(t);
      return;
    }
    const s = this.#u.getActive();
    this.#e = !s || s.isEmpty();
  }
  startDrawingSession(t) {
    if (this.div.focus({
      preventScroll: !0
    }), this.#c) {
      this.#b.startDrawing(this, this.#u, !1, t);
      return;
    }
    this.#u.setCurrentDrawingSession(this), this.#c = new AbortController();
    const n = this.#u.combinedSignal(this.#c);
    this.div.addEventListener("blur", ({
      relatedTarget: s
    }) => {
      s && !this.div.contains(s) && (this.#d = null, this.commitOrRemove());
    }, {
      signal: n
    }), this.#b.startDrawing(this, this.#u, !1, t);
  }
  pause(t) {
    if (t) {
      const {
        activeElement: n
      } = document;
      this.div.contains(n) && (this.#d = n);
      return;
    }
    this.#d && setTimeout(() => {
      this.#d?.focus(), this.#d = null;
    }, 0);
  }
  endDrawingSession(t = !1) {
    return this.#c ? (this.#u.setCurrentDrawingSession(null), this.#c.abort(), this.#c = null, this.#d = null, this.#b.endDrawing(t)) : null;
  }
  findNewParent(t, n, s) {
    const r = this.#u.findParent(n, s);
    return r === null || r === this ? !1 : (r.changeParent(t), !0);
  }
  commitOrRemove() {
    return this.#c ? (this.endDrawingSession(), !0) : !1;
  }
  onScaleChanging() {
    this.#c && this.#b.onScaleChangingWhenDrawing(this);
  }
  destroy() {
    this.commitOrRemove(), this.#u.getActive()?.parent === this && (this.#u.commitOrRemove(), this.#u.setActiveEditor(null)), this.#s && (clearTimeout(this.#s), this.#s = null);
    for (const t of this.#r.values())
      this.#t?.removePointerInTextLayer(t.contentDiv), t.setParent(null), t.isAttachedToDOM = !1, t.div.remove();
    this.div = null, this.#r.clear(), this.#u.removeLayer(this);
  }
  #E() {
    for (const t of this.#r.values())
      t.isEmpty() && t.remove();
  }
  async render({
    viewport: t
  }) {
    this.viewport = t, Os(this.div, t);
    for (const n of this.#u.getEditors(this.pageIndex))
      this.add(n), n.rebuild();
    await this.#u.findClonesForPage(this), this.div.hidden = this.isEmpty, this.updateMode();
  }
  update({
    viewport: t
  }) {
    this.#u.commitOrRemove(), this.#E();
    const n = this.viewport.rotation, s = t.rotation;
    if (this.viewport = t, Os(this.div, {
      rotation: s
    }), n !== s)
      for (const r of this.#r.values())
        r.rotate(s);
  }
  get pageDimensions() {
    const {
      pageWidth: t,
      pageHeight: n
    } = this.viewport.rawDims;
    return [t, n];
  }
  get scale() {
    return this.#u.viewParameters.realScale;
  }
}
function G1(y, t) {
  return y === t ? 0 : y.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
}
function Ll(y) {
  return y ? y.nodeType === Node.ELEMENT_NODE ? y.closest(".textLayer") : y.parentElement?.closest(".textLayer") || null : null;
}
function j1(y, t, n, s) {
  if (y === n)
    return t <= s;
  const r = y.compareDocumentPosition(n);
  return r & Node.DOCUMENT_POSITION_FOLLOWING ? !0 : r & Node.DOCUMENT_POSITION_PRECEDING ? !1 : null;
}
function Ky(y, t, n) {
  if (y.nodeType !== Node.ELEMENT_NODE || !y.classList.contains("textLayer") || t !== y.childNodes.length)
    return {
      container: y,
      offset: t
    };
  let s = y.lastChild;
  return s?.nodeType === Node.ELEMENT_NODE && s.classList.contains("endOfContent") && (s = s.previousSibling), !s || !n.contains(s) ? null : s.nodeType === Node.TEXT_NODE ? {
    container: s,
    offset: s.textContent.length
  } : {
    container: s,
    offset: s.childNodes.length
  };
}
class ft {
  #t = null;
  #e = /* @__PURE__ */ new Map();
  #n = null;
  #i = null;
  #s = null;
  #r = null;
  #a = /* @__PURE__ */ new Map();
  static #o = 0;
  static #l = 0;
  static #c = null;
  static #d = /* @__PURE__ */ new Set();
  static #h = !1;
  static #f = /* @__PURE__ */ new Set();
  static #g = /* @__PURE__ */ new WeakMap();
  constructor({
    filterFactory: t = null,
    pageColors: n = null,
    pageIndex: s,
    textLayer: r = null
  }) {
    if (this.pageIndex = s, this.#i = t, this.#s = n, r) {
      const l = ft.#g.get(r);
      if (l?.selectionDiv && (l.selectionDiv.remove(), ft.#d.delete(l.selectionDiv)), ft.#g.set(r, {
        drawLayer: this
      }), ft.#f.add(r), this.#n = r, this.#r = new MutationObserver((c) => {
        if (!(!this.#t || !this.#n?.isConnected || !ft.#u())) {
          for (const {
            addedNodes: u
          } of c)
            for (const d of u)
              if (d.nodeType === Node.ELEMENT_NODE && d.classList.contains("endOfContent")) {
                ft.#y();
                return;
              }
        }
      }), this.#r.observe(r, {
        childList: !0
      }), ft.#c === null) {
        ft.#c = new AbortController();
        const {
          signal: c
        } = ft.#c;
        document.addEventListener("selectionchange", ft.#y.bind(ft), {
          signal: c
        }), document.addEventListener("pointerdown", () => {
          ft.#h = !0;
        }, {
          signal: c
        }), document.addEventListener("pointerup", () => {
          ft.#h = !1;
        }, {
          signal: c
        }), window.addEventListener("blur", () => {
          ft.#h = !1;
        }, {
          signal: c
        });
      }
    }
  }
  setParent(t) {
    if (!this.#t) {
      this.#t = t, this.#n?.isConnected && ft.#u() && ft.#y();
      return;
    }
    if (this.#t !== t) {
      if (this.#e.size > 0)
        for (const n of this.#e.values())
          n.remove(), t.append(n);
      this.#t = t;
    }
  }
  static #m(t) {
    const n = this.#g.get(t);
    n?.selectionDiv && (n.selectionDiv.remove(), this.#d.delete(n.selectionDiv), n.selectionDiv = null, n.path = null);
  }
  static #u() {
    const t = document.getSelection();
    return !!t && !t.isCollapsed;
  }
  static #p() {
    return this.#f.keys().filter((t) => t.isConnected).toArray().sort(G1);
  }
  static #y() {
    const t = document.getSelection();
    if (!t || t.isCollapsed) {
      for (const c of this.#d)
        c.remove();
      this.#d.clear();
      return;
    }
    const n = /* @__PURE__ */ new WeakMap(), s = this.#p(), r = [];
    for (let c = 0, u = t.rangeCount; c < u; c++) {
      const d = t.getRangeAt(c);
      if (d.collapsed)
        continue;
      let {
        startContainer: p,
        startOffset: g,
        endContainer: m,
        endOffset: v
      } = d, A = Ll(p), S = Ll(m);
      const E = A === null, _ = S === null;
      if (this.#h && E !== _)
        return;
      if (t.rangeCount === 1) {
        const {
          anchorNode: M,
          anchorOffset: B,
          focusNode: N,
          focusOffset: P
        } = t, U = Ll(M), j = Ll(N), q = j1(M, B, N, P);
        U && j && q !== null && (q ? (p = M, g = B, A = U, m = N, v = P, S = j) : (p = N, g = P, A = j, m = M, v = B, S = U));
      }
      const w = s.filter((M) => d.intersectsNode(M));
      if (w.length === 0)
        continue;
      let C = !1;
      if (A || (A = w[0], p = A, g = 0, C = !0), S || (S = w.at(-1), m = S, v = S.childNodes.length, C = !0), m.nodeType === Node.ELEMENT_NODE) {
        if (m.classList.contains("endOfContent")) {
          const M = m.previousSibling;
          if (!M)
            continue;
          m = M, v = M.nodeType === Node.TEXT_NODE ? M.textContent.length : M.childNodes.length;
        } else if (m.classList.contains("textLayer") && m.childNodes.length === v) {
          const M = Ky(m, v, S);
          if (!M)
            continue;
          m = M.container, v = M.offset;
        }
      }
      if (p.nodeType === Node.ELEMENT_NODE) {
        const M = Ky(p, g, A);
        if (!M)
          continue;
        p = M.container, g = M.offset;
      }
      if (A === S && !C && w.includes(A)) {
        r.push([d, A]);
        continue;
      }
      for (const M of w) {
        const B = M.firstChild;
        if (!B)
          continue;
        const N = document.createRange();
        if (M === A ? N.setStart(p, g) : N.setStartBefore(B), M === S)
          N.setEnd(m, v);
        else {
          const P = M.lastChild;
          if (!P)
            continue;
          if (P.nodeType === Node.ELEMENT_NODE && P.classList.contains("endOfContent")) {
            const U = P.previousSibling;
            if (!U)
              continue;
            N.setEndAfter(U);
          } else
            N.setEndAfter(P);
        }
        N.collapsed || r.push([N, M]);
      }
    }
    const l = new Set(r.map((c) => c[1]));
    for (const c of this.#f)
      l.has(c) || this.#m(c);
    for (const [c, u] of r) {
      const d = ft.#g.get(u);
      if (!d)
        continue;
      let p = n.get(u);
      if (!p) {
        const S = u.getBoundingClientRect();
        p = (E, _, w, C) => ({
          x: (E - S.x) / S.width,
          y: (_ - S.y) / S.height,
          width: w / S.width,
          height: C / S.height
        }), n.set(u, p);
      }
      const g = [];
      for (let {
        x: S,
        y: E,
        width: _,
        height: w
      } of c.getClientRects())
        _ === 0 || w === 0 || ({
          x: S,
          y: E,
          width: _,
          height: w
        } = p(S, E, _, w), !(_ === 1 && w === 1) && g.push(`M${S} ${E} h${_} v${w} h-${_} Z`));
      if (g.length === 0)
        continue;
      const m = d.drawLayer;
      let v = d.selectionDiv, A = d.path;
      if (!v) {
        const S = `clip_selection_${ft.#l++}`;
        v = document.createElement("div"), v.className = "selection", v.style.clipPath = `url(#${S})`;
        const E = m.#i?.createSelectionStyle(m.#s);
        if (E)
          for (const [C, M] of Object.entries(E))
            v.style.setProperty(C, M);
        const _ = ft._svgFactory.create(1, 1, !0);
        _.setAttribute("aria-hidden", "true"), _.setAttribute("width", "100%"), _.setAttribute("height", "100%");
        const w = ft._svgFactory.createElement("clipPath");
        w.setAttribute("id", S), w.setAttribute("clipPathUnits", "objectBoundingBox"), A = ft._svgFactory.createElement("path"), w.append(A), _.append(w), v.append(_), d.path = A, d.selectionDiv = v;
      }
      m.#t && v.parentNode !== m.#t && (m.#t.append(v), this.#d.add(v)), A.setAttribute("d", g.join(" "));
    }
  }
  static get _svgFactory() {
    return lt(this, "_svgFactory", new jl());
  }
  static #v(t, [n, s, r, l]) {
    const {
      style: c
    } = t;
    c.top = `${100 * s}%`, c.left = `${100 * n}%`, c.width = `${100 * r}%`, c.height = `${100 * l}%`;
  }
  #b() {
    const t = ft._svgFactory.create(1, 1, !0);
    return this.#t.append(t), t.setAttribute("aria-hidden", "true"), t;
  }
  #A(t, n) {
    const s = ft._svgFactory.createElement("clipPath");
    t.append(s);
    const r = `clip_${n}`;
    s.setAttribute("id", r), s.setAttribute("clipPathUnits", "objectBoundingBox");
    const l = ft._svgFactory.createElement("use");
    return s.append(l), l.setAttribute("href", `#${n}`), l.classList.add("clip"), r;
  }
  #T(t, n) {
    for (const [s, r] of Object.entries(n))
      r === null ? t.removeAttribute(s) : t.setAttribute(s, r);
  }
  draw(t, n = !1, s = !1) {
    const r = ft.#o++, l = this.#b(), c = ft._svgFactory.createElement("defs");
    l.append(c);
    const u = ft._svgFactory.createElement("path");
    c.append(u);
    const d = `path_${r}`;
    u.setAttribute("id", d), u.setAttribute("vector-effect", "non-scaling-stroke"), n && this.#a.set(r, u);
    const p = s ? this.#A(c, d) : null, g = ft._svgFactory.createElement("use");
    return l.append(g), g.setAttribute("href", `#${d}`), this.updateProperties(l, t), this.#e.set(r, l), {
      id: r,
      clipPathId: `url(#${p})`
    };
  }
  drawOutline(t, n) {
    const s = ft.#o++, r = this.#b(), l = ft._svgFactory.createElement("defs");
    r.append(l);
    const c = ft._svgFactory.createElement("path");
    l.append(c);
    const u = `path_${s}`;
    c.setAttribute("id", u), c.setAttribute("vector-effect", "non-scaling-stroke");
    let d;
    if (n) {
      const m = ft._svgFactory.createElement("mask");
      l.append(m), d = `mask_${s}`, m.setAttribute("id", d), m.setAttribute("maskUnits", "objectBoundingBox");
      const v = ft._svgFactory.createElement("rect");
      m.append(v), v.setAttribute("width", "1"), v.setAttribute("height", "1"), v.setAttribute("fill", "white");
      const A = ft._svgFactory.createElement("use");
      m.append(A), A.setAttribute("href", `#${u}`), A.setAttribute("stroke", "none"), A.setAttribute("fill", "black"), A.setAttribute("fill-rule", "nonzero"), A.classList.add("mask");
    }
    const p = ft._svgFactory.createElement("use");
    r.append(p), p.setAttribute("href", `#${u}`), d && p.setAttribute("mask", `url(#${d})`);
    const g = p.cloneNode();
    return r.append(g), p.classList.add("mainOutline"), g.classList.add("secondaryOutline"), this.updateProperties(r, t), this.#e.set(s, r), s;
  }
  finalizeDraw(t, n) {
    this.#a.delete(t), this.updateProperties(t, n);
  }
  updateProperties(t, n) {
    if (!n)
      return;
    const {
      root: s,
      bbox: r,
      rootClass: l,
      path: c
    } = n, u = typeof t == "number" ? this.#e.get(t) : t;
    if (u) {
      if (s && this.#T(u, s), r && ft.#v(u, r), l) {
        const {
          classList: d
        } = u;
        for (const [p, g] of Object.entries(l))
          d.toggle(p, g);
      }
      if (c) {
        const p = u.firstElementChild.firstElementChild;
        this.#T(p, c);
      }
    }
  }
  updateParent(t, n) {
    if (n === this)
      return;
    const s = this.#e.get(t);
    s && (n.#t.append(s), this.#e.delete(t), n.#e.set(t, s));
  }
  remove(t) {
    this.#a.delete(t), this.#t !== null && (this.#e.get(t).remove(), this.#e.delete(t));
  }
  destroy() {
    this.#t = null;
    for (const t of this.#e.values())
      t.remove();
    this.#e.clear(), this.#a.clear(), this.#r?.disconnect(), this.#r = null, this.#n && (ft.#g.get(this.#n)?.drawLayer === this && (ft.#m(this.#n), ft.#g.delete(this.#n), ft.#f.delete(this.#n), ft.#f.size === 0 && (ft.#c?.abort(), ft.#c = null, ft.#h = !1)), this.#n = null);
  }
}
function kl(y) {
  return `${(y * 100).toFixed(2)}%`;
}
class Vl {
  #t = [];
  #e = /* @__PURE__ */ new Map();
  #n = null;
  #i = 0;
  #s = 0;
  #r = 0;
  static #a = null;
  constructor(t, n, s, r) {
    this.#i = t, this.#t = n, this.#s = s.rawDims.pageWidth, this.#r = s.rawDims.pageHeight, this.#n = r;
  }
  render() {
    const t = document.createElement("div");
    t.className = "textLayerImages";
    for (let n = 0; n < this.#t.length; n += 6) {
      const s = this.#o(this.#t.subarray(n, n + 6));
      s && t.append(s);
    }
    return t.addEventListener("contextmenu", (n) => {
      if (!(n.target instanceof HTMLCanvasElement))
        return;
      const s = n.target, r = this.#e.get(s);
      if (!r)
        return;
      const l = Vl.#a?.deref();
      if (l === s)
        return;
      l && (l.width = 0, l.height = 0), Vl.#a = new WeakRef(s);
      const {
        inverseTransform: c,
        x1: u,
        y1: d,
        width: p,
        height: g
      } = r, m = this.#n(), v = Math.ceil(u * m.width), A = Math.ceil(d * m.height), S = Math.floor((u + p / this.#s) * m.width), E = Math.floor((d + g / this.#r) * m.height);
      s.width = S - v, s.height = E - A;
      const _ = s.getContext("2d");
      _.setTransform(...c), _.translate(-v, -A), _.drawImage(m, 0, 0);
    }), t;
  }
  #o([t, n, s, r, l, c]) {
    const u = Math.hypot((l - t) * this.#s, (c - n) * this.#r), d = Math.hypot((s - t) * this.#s, (r - n) * this.#r);
    if (u < this.#i || d < this.#i)
      return null;
    const p = [(l - t) * this.#s / u, (c - n) * this.#r / u, (s - t) * this.#s / d, (r - n) * this.#r / d, 0, 0], g = K.inverseTransform(p), m = document.createElement("canvas");
    return m.className = "textLayerImagePlaceholder", m.width = 0, m.height = 0, Object.assign(m.style, {
      opacity: 0,
      position: "absolute",
      left: kl(t),
      top: kl(n),
      width: kl(u / this.#s),
      height: kl(d / this.#r),
      transformOrigin: "0% 0%",
      transform: `matrix(${p.join(",")})`
    }), this.#e.set(m, {
      inverseTransform: g,
      width: u,
      height: d,
      x1: t,
      y1: n
    }), m;
  }
}
globalThis._pdfjsTestingUtils = {
  HighlightOutliner: dd
};
globalThis.pdfjsLib = {
  AbortException: Zi,
  AnnotationEditorLayer: mi,
  AnnotationEditorParamsType: Mt,
  AnnotationEditorType: pt,
  AnnotationEditorUIManager: $i,
  AnnotationLayer: Dd,
  AnnotationMode: Ki,
  AnnotationType: ne,
  applyOpacity: ZA,
  build: y1,
  ColorPicker: En,
  createValidAbsoluteUrl: Qy,
  CSSConstants: QA,
  DOMSVGFactory: jl,
  DrawLayer: ft,
  FeatureTest: Yt,
  fetchData: yd,
  findContrastColor: $A,
  getDocument: m0,
  getFilenameFromUrl: YA,
  getPdfFilenameFromUrl: XA,
  getRGB: qr,
  getRGBA: Xr,
  getUuid: $y,
  GlobalWorkerOptions: Na,
  ImageKind: Pl,
  InvalidPDFException: nd,
  isDataScheme: Zl,
  isPdfFile: bd,
  isValidExplicitDest: AS,
  makeArr: Ba,
  makeMap: md,
  makeObj: id,
  makeSet: GA,
  MathClamp: $t,
  noContextMenu: Rn,
  normalizeUnicode: UA,
  OPS: Jn,
  OutputScale: Ln,
  PasswordException: ed,
  PasswordResponses: LA,
  PDFDataRangeTransport: y0,
  PDFDateString: sd,
  PDFWorker: jr,
  PermissionFlag: RA,
  PixelsPerInch: ka,
  RenderingCancelledException: vd,
  renderRichText: Jy,
  ResponseException: Ul,
  setLayerDimensions: Os,
  shadow: lt,
  SignatureExtractor: Ma,
  stopEvent: ge,
  SupportedImageMimeTypes: ad,
  TextLayer: rn,
  TextLayerImages: Vl,
  TouchManager: n0,
  updateUrlHash: Zy,
  Util: K,
  VerbosityLevel: Xl,
  version: m1,
  XfaLayer: Wy
};
const Bl = /* @__PURE__ */ JSON.parse(`[{"number":1,"content":["EduQuest","TEAM DIAMOND\\n\\nPROJECT ORIGINAL AUTHOR: LUKE MORKEN","PROFESSOR SUMAYA SANOBER\\n\\nCS 410 - PROFESSIONAL WORKFORCE DEVELOPMENT I\\n\\nOLD DOMINION UNIVERSITY"]},{"number":2,"content":["Tennya Boone\\nWeb Master","Sincere Sanders\\nBack-End Developer","Justin Carmona\\nDatabase Specialist","Luke Morken\\nTeam Lead & Project Author","MEET THE EDUQUEST TEAM"]},{"number":3,"content":["Ethan Lemerande\\nSoftware Developer","Priyaja Surendra\\nFront-End Developer","Jessica Melton\\nDocumentation Specialist","MEET THE EDUQUEST TEAM"]},{"number":4,"content":["As is stand, we cannot enforce OS-level enforcement for the EduQuest. In order to do so we would need to submit an application to Apple and Android and have them review EduQuest for it get permission. We do not have the time or resources to do that. For this product we will make it without the OS-level enforcement with the idea of expanding upon EduQuest’s capabilities. Without the OS-level enforcement, we cannot prevent children from uninstalling EduQuest. Nor can prevent kids from using devices with a set limit. EduQuest will operate as a standalone app that the children will have to interact with willingly and to do questions on their own. This presentation is made based on the idea that we DO have permission and the capability to use OS-level enforcement.","Prototype Disclaimer","Slide Credit: Luke Morken"]},{"number":5,"content":["ELEVATOR PITCH","Slide Credit: Sincere Sanders","The Problem","Children spend a lot of time using entertainment screens, displacing time that could be used to reinforce academic skills.","Fixed Screen Time → Questions Mode → Answer Questions → Earn More Screen Time","How It Works","The Solution","EduQuest turns recreational screen time into an opportunity for learning by requiring children to answer short educational questions before entertainment apps unlock.","“Earn Your Screen Time,","One Question at a Time”"]},{"number":6,"content":["01 — Societal Problem\\nProblem Statement • Problem Characteristics • Current Process Flow \\n02 — Solution\\nSolution Statement • Solution Process Flow • What It Will Do • What It Will Not Do \\n03 — Competition Matrix\\n04 — Development Tools\\n05 — Major Functional Components\\nFunctional Components Diagram \\n06 — Risks\\n07 — References \\n08 — Appendix","TABLE OF CONTENTS","Slide Credit: Priyaja Surendra"]},{"number":7,"content":["Reading and math scores among 9-year-old students have dropped to their lowest levels in decades . \\nAt the same time, children ages 8 to 12 average approximately 5.5 hours of recreational screen time each day, it displaces valuable time that could be otherwise be used to reinforce foundation skills","Slide Credit: Justin Carmona","PROBLEM STATEMENT","1 National Center for Education Statistics (See References A) 2 Rideout, Victoria, et al. (See References A)"]},{"number":8,"content":["Slide Credit: Tennya Boone","PROBLEM CHARACTERISTICS","The challenge is not simply how much screen time children have, but how that time is being used.","Entertainment Dominates","> 4 hours daily video/gaming vs. 9 minutes e-reading.¹","Parents Struggle","47% of parents struggle to manage screen time for their children.²","Inconsistent  Enforcement","Only 19% of parents consistently follow their children's screen time rules.²","¹ Rideout et al. (See Reference A) | ² Pew Research. (See Reference G)"]},{"number":9,"content":["Parent Notices Excess Screen Time","Parent Sets Screen Time Limits With Existing Tools","Child Uses Entertainment App(s)","Time Limit Is Reached","Apps Are Blocked Or Restricted","Child Waits Or Ask For More Time","Slide Credit: Sincere Sanders","CURRENT PROCESS FLOW","THE EDUCATIONAL GAP","The current process simply restricts time usage, resulting in a missed opportunity for learning and zero educational reinforcement."]},{"number":10,"content":["EduQuest is a mobile application controlled by parents that combines screen time management with educational practice. \\nThe application allows parents to set screen-time limits and requires children to complete age appropriate questions to earn additional screen time. Parents are also able to monitor learning progress over time.","SOLUTION STATEMENT","Slide Credit: Jessica Melton","EduQuest","Yes! A new EduQuest!"]},{"number":11,"content":["Parent Notices Excess Screen Time","Child Uses Entertainment App(s)","Time Limit Is Reached","Slide Credit: Jessica Melton","SOLUTION PROCESS FLOW","Parent Sets Screen Time Limits With Existing Tools","Parent Sets Screen Time Limit in EduQuest","Parent Sets Screen Time Limits With Existing Tools","EduQuest Intervenes & Launches Questions","Parent Sets Screen Time Limits With Existing Tools","Child Successfully Completes EduQuest Questions","Child Unsuccessfully Completes EduQuest Questions","EduQuest Keeps Entertainment Apps Restricted","EduQuest Awards Additional Screen Time","PROCESS KEY\\n\\n⬛ Existing / Unchanged Process\\n🟩 EduQuest-Introduced Step\\n🟨 Child Response / Outcome\\n🟥 Entertainment Access Remains Restricted"]},{"number":12,"content":["Slide Credit: Priyaja Surendra","Set","Learn","Earn","Track","Parents set recreational screen-time limits.","Children answer age-appropriate reading and math questions.","Completed questions earn additional recreational screen time.","Parents monitor question performance, screen-time activity, and learning progress.","WHAT EDUQUEST WILL DO"]},{"number":13,"content":["Slide Credit: Priyaja Surendra","WHAT EDUQUEST WILL NOT DO","Replace Education","Eliminate Screen Time","Replace Parental Control","Guarantee Results","EduQuest supports practice and reinforcement, but it will not replace teachers, schools, or formal instruction.","EduQuest will not completely block recreational screen use. It is designed to encourage a balance between learning and entertainment.","Parents will still decide appropriate screen-time limits and manage their child’s settings.","EduQuest can encourage educational practice, but it cannot guarantee academic improvement."]},{"number":14,"content":["COMPETITION MATRIX","Slide Credit: Ethan Lemerande","Features\\n\\nEduQuest\\n\\nQustodio (Direct)\\n\\nBark (Direct)\\n\\nApple Screen Time (Direct)\\n\\nKhan Academy Kids (Indirect)\\n\\nEarning Screen Time Through Academic Activity\\n\\n✔\\n\\n\\n\\n\\n\\n\\n\\n\\n\\nAcademic Content\\n\\n✔\\n\\n\\n\\n\\n\\n\\n\\n✔\\n\\nDirect Parental Control\\n\\n✔\\n\\n✔\\n\\n✔\\n\\n✔\\n\\n\\n\\nParent Dashboard Monitoring\\n\\n✔\\n\\n\\n\\n\\n\\n\\n\\n✱\\n\\nContent Filtering\\n\\n\\n\\n✔\\n\\n✔\\n\\n✔\\n\\n\\n\\nCross-platform\\n\\n✔\\n\\n✔\\n\\n✔\\n\\n✱\\n\\n✔\\n\\nScreen-Locking\\n\\n✔","Sources: Qustodio; Bark Technologies; Apple; Khan Academy. (References C)","Legend:  ✔ Feature Supported  ✱ Partially supported             Not supported"]},{"number":15,"content":["Slide Credit: Priyaja Surendra","DEVELOPMENT TOOLS","IDE","CI/CD","Version Control","Additional Tools","Visual Studio Code\\nUsed to write, edit, and manage code.","Git & GitHub\\nUsed to manage source code, track changes, and collaborate as a team.","GitHub Actions & Workflows\\nUsed to automate project builds, testing, and development workflows.","To Be Determined\\nBackend, frontend, testing, and documentation tools will be selected later."]},{"number":16,"content":["OS: Linux for server’s operating system wrapped in Docker\\nServer framework: FastAPI or Django\\nDatabase: PostgreSQL","MAJOR FUNCTIONAL COMPONENTS","Slide Credit: Luke Morken","Language: Python\\nPush notifications: Firebase Cloud Messaging\\nMobile frontend: React Native or Flutter"]},{"number":17,"content":["Slide Credit: Luke Morken","MAJOR FUNCTIONAL COMPONENTS DIAGRAM","React Native or Flutter\\nShared UI: child app, parent dashboard","iOS enforcement\\nScreen Time API (Swift)","Android enforcement\\nDevice Admin API (Kotlin)","Backend services (shared)","FastAPI/Django\\nPython API server","PostgreSQL\\nRelational database","Docker + Linux\\nContainerized deployment","Firebase Messaging\\nPush & tamper alerts"]},{"number":18,"content":["Slide Credit: Tennya Boone","RISKS","Risk\\n\\nProbability and Impact\\n\\nMitigation\\n\\nAfter Mitigation\\n\\nCustomer & End User: Children may become frustrated with the parental controls and stop engaging with the app altogether. Parents could get frustrated with all of the parental control options.\\n\\nP: 4/5\\n\\nI: 4/5\\n\\nRewards for engaging and completing the required sections, adaptive learning methods for less frustration, screen-time limits, and instructions for how to navigate the parental controls and what each control does specified in detail.\\n\\nP: 2/5\\n\\nI: 2/5\\n\\n\\nTechnical: Children may attempt to uninstall the app or bypass the parental controls.\\n\\n\\nP: 4/5\\n\\nI: 5/5\\n\\n\\nRegularly test bypass methods, push notifications for deletion requests, and authentication for the app being uninstalled.\\n\\nP: 1/5\\n\\nI: 2/5"]},{"number":19,"content":["Slide Credit: Tennya Boone","RISKS","Risk\\n\\nProbability and Impact\\n\\nMitigation\\n\\nAfter Mitigation\\n\\nSecurity: Unauthorized access could expose sensitive account information, learning results and progress, and screen-time settings.\\n\\nP: 3/5\\n\\nI: 5/5\\n\\nSecure authorization methods, encryption, limited data access, and regular security testing and updates.\\n\\nP: 1/5\\n\\nI: 3/5\\n\\n\\nLegal: This platform caters to school-aged children, so privacy and compliance concerns arise because of data handling and collection (Federal Trade Commission).\\n\\n\\nP: 2/5\\n\\nI: 5/5\\n\\n\\nParental authorization, minimal data collection, clear privacy practices and policies, and parental controls over every child account (Children’s Online Privacy Protection Rule).\\n\\nP: 1/5\\n\\nI: 3/5"]},{"number":20,"content":["References A: Societal Problem\\nAcademic Performance\\nNational Center for Education Statistics. “NAEP Long-Term Trend Assessment Results: Reading and Mathematics.” The Nation’s Report Card, U.S. Department of Education, 2022, www.nationsreportcard.gov/highlights/ltt/2022\\nRecreational Screen Time\\nRideout, Victoria, et al. The Common Sense Census: Media Use by Tweens and Teens, 2021. Common Sense Media, 2022, www.commonsensemedia.org/research/the-common-sense-census-media-use-by-tweens-and-teens-2021\\nReferences B: Educational Approach\\nEducational Practice / Retrieval Practice\\nAgarwal, Pooja K., Ludmila D. Nunes, and Janell R. Blunt. “Retrieval Practice Consistently Benefits Student Learning: A Systematic Review of Applied Research in Schools and Classrooms.” Educational Psychology Review, vol. 33, 2021, pp. 1409–1453, doi.org/10.1007/s10648-021-09595-9","www.nationsreportcard.gov/highlights/ltt/2022","www.commonsensemedia.org/research/the-common-sense-census-media-use-by-tweens-and-teens-2021","doi.org/10.1007/s10648-021-09595-9","Slide Credit: Jessica Melton","REFERENCES","References C: Competition Matrix \\nQustodio\\nQustodio. “Features.” Qustodio, www.qustodio.com/en/features/. Accessed 14 Sept. 2026\\nBark\\nBark Technologies. “Screen Time and Filtering.” Bark Support, support.bark.us/en/collections/18061953-screen-time-and-filterin. Accessed 14 sept. 2026.\\nApple Screen Time\\nApple. “Use Screen Time to Manage Your Child’s iPhone or iPad.” Apple Support, 4 May 2026, support.apple.com/en-us/108806. Accessed 14 Sept. 2026.\\nKhan Academy Kids\\nKhan Academy. “Khan Academy Kids.” Khan Academy, www.khanacademy.org/kids. Accessed 14 Sept. 2026","www.qustodio.com/en/features/","support.bark.us/en/collections/18061953-screen-time-and-filterin","support.apple.com/en-us/108806","www.khanacademy.org/kids"]},{"number":21,"content":["References D: Development Tools & Technical Components\\nVisual Studio Code  Microsoft. “Why Did We Build Visual Studio Code?” Visual Studio Code, Microsoft, code.visualstudio.com/docs/editor/whyvscode\\nReact Native  Meta Platforms. “React Native.” React Native, Meta Platforms, reactnative.dev/\\nFlutter  Google. “Build for and Integrate with Multiple Platforms.” Flutter Documentation, Google, docs.flutter.dev/platform-integration\\nPostgreSQL  PostgreSQL Global Development Group. “About PostgreSQL.” PostgreSQL, www.postgresql.org/about/ \\nDocker / Containers  Docker. “What Is a Container?” Docker Docs, Docker, docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/ \\nFirebase Cloud Messaging  Google. “Firebase Cloud Messaging.” Firebase, Google, firebase.google.com/docs/cloud-messaging","code.visualstudio.com/docs/editor/whyvscode","reactnative.dev/","docs.flutter.dev/platform-integration","www.postgresql.org/about/","docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/","firebase.google.com/docs/cloud-messaging","Slide Credit: Jessica Melton","REFERENCES","References E: Device Control & APIs\\nApple Screen Time API  Apple. “Configuring Family Controls.” Apple Developer Documentation, Apple, developer.apple.com/documentation/xcode/configuring-family-controls \\nAndroid Device Administration API  Google. “Device Administration Overview.” Android Developers, Google, developer.android.com/work/device-admin","developer.apple.com/documentation/xcode/configuring-family-controls","developer.android.com/work/device-admin"]},{"number":22,"content":["References F: Privacy, Security & Legal\\nChildren’s Online Privacy Protection Act (COPPA)  Federal Trade Commission. “Children’s Online Privacy Protection Rule (‘COPPA’).” Federal Trade Commission, www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa \\nParental Consent & Children’s Data  Federal Trade Commission. “Children’s Online Privacy Protection Rule: Not Just for Kids’ Sites.” Federal Trade Commission, www.ftc.gov/business-guidance/resources/childrens-online-privacy-protection-rule-not-just-kids-sites \\nUpdated Children’s Privacy Requirements  Federal Trade Commission. “FTC Finalizes Changes to Children’s Privacy Rule Limiting Companies’ Ability to Monetize Kids’ Data.” Federal Trade Commission, 16 Jan. 2025, www.ftc.gov/news-events/news/press-releases/2025/01/ftc-finalizes-changes-childrens-privacy-rule-limiting-companies-ability-monetize-kids-data","www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa","www.ftc.gov/business-guidance/resources/childrens-online-privacy-protection-rule-not-just-kids-sites","www.ftc.gov/news-events/news/press-releases/2025/01/ftc-finalizes-changes-childrens-privacy-rule-limiting-companies-ability-monetize-kids-data","Slide Credit: Jessica Melton","REFERENCES","References G: Screen Time & Parent Management\\nScreen Time Management\\nMcClain, Colleen, et al. “How Parents Manage Screen Time for Kids.” Pew Research Center, 8 Oct. 2025. pewresearch.org\\nGamification & Student Engagement\\nRamírez Ruiz, Judy Julieth, et al. “Impact of Gamification on School Engagement: A Systematic Review.” Frontiers in Education, 6 Dec. 2024. frontiersin.org","pewresearch.org","frontiersin.org"]},{"number":23,"content":["Appendix A: Key Terms & Concepts\\nRecreational Screen Time  Time spent using a device for fun, such as playing games, watching videos, or using social media.\\nScreen-Time Management  Tools used to track or limit how much time someone spends on a device or app.\\nParent Dashboard  A screen where parents can view and manage their child's activity and learning progress.\\nAdaptive Learning  A learning method that changes based on how well a student is doing.\\nContent Filtering  Tools that block or limit access to certain apps, websites, or other digital content.\\nCross-Platform  Software that can work on more than one type of device or operating system.\\nEcosystem-Locked  Software that only works within one company's devices or services.","Slide Credit: Jessica Melton","Appendix B: Basic Technical Terms\\nFrontend  The part of an app that users see and interact with.\\nBackend  The part of an app that works behind the scenes to process information and make features work.\\nRelational Database  A database that stores information in tables that can be connected to each other.\\nServer Framework  A set of tools developers use to build the part of an app that runs on a server.\\nAPI (Application Programming Interface)  A tool that allows different programs or parts of an app to communicate with each other.\\nScreen Time API  Apple tools that allow an app to work with screen-time controls on Apple devices.\\nDevice Administration API  Android tools that allow an app to manage certain settings and controls on a device.","APPENDIX"]},{"number":24,"content":["Appendix C: Development Technologies \\nLinux  An operating system often used to run servers and online services.\\nPython  A programming language that can be used to build the behind-the-scenes parts of an app.\\nSwift  A programming language used to build software for Apple devices.\\nKotlin  A programming language commonly used to build Android apps.\\nPostgreSQL  A database system used to store and organize information.\\nFastAPI  A Python tool used to build the backend of an application.\\nDjango  A Python tool used to build websites and the backend of applications.","Slide Credit: Jessica Melton","React Native  A tool that lets developers build mobile apps for both iOS and Android.\\nFlutter  A tool that lets developers build apps for different types of devices using the same code.\\nDocker  A tool that packages an application with the things it needs to run.\\nContainer  A package that holds an application and the files and tools it needs to run.\\nContainerized Deployment  Running an application using containers so it works the same way in different environments.\\nFirebase Cloud Messaging  A service used to send notifications and messages to mobile devices.","APPENDIX"]},{"number":25,"content":["Appendix D: Development Process\\nIDE (Integrated Development Environment)  A program developers use to write, edit, and work with computer code.\\nVersion Control  A system that keeps track of changes made to computer code over time.\\nGit  A version-control tool used to track changes made to code.\\nGitHub  An online service where teams can store code and work on it together.\\nCI/CD (Continuous Integration/Continuous Delivery)  A process that helps teams automatically test, build, and prepare new code for release.\\nGitHub Actions  A GitHub tool that can automatically run tasks such as testing or building code.\\nWorkflow  A set of steps or tasks that are completed in a certain order.","Slide Credit: Jessica Melton","Appendix E: Security & Data Terms \\nAuthentication  Checking that someone really is who they say they are.\\nAuthorization  Deciding what a user is allowed to see or do after they sign in.\\nEncryption  Protecting information by changing it into a form that unauthorized people cannot easily read.\\nData Access  The ability to view, use, or change stored information.\\nData Collection  Gathering and storing information from or about users.\\nParental Authorization  Permission from a parent or guardian for a child's account or use of certain features.","APPENDIX"]}]`);
Na.workerSrc = new URL("./pdf.worker.min.mjs", import.meta.url).href;
function q1({ src: y }) {
  const t = Wn.useRef(null), [n, s] = Wn.useState(null), [r, l] = Wn.useState(1), [c, u] = Wn.useState("Loading outline…"), [d, p] = Wn.useState("");
  return Wn.useEffect(() => {
    const g = m0({ url: y });
    let m = !1;
    return g.promise.then((v) => {
      m || s(v);
    }).catch((v) => {
      m || (console.error("Outline load failed:", v), u("The outline could not load. Please use the Open or Download link above."));
    }), () => {
      m = !0, g.destroy();
    };
  }, [y]), Wn.useEffect(() => {
    if (!n) return;
    let g = !1, m;
    return u("Rendering page…"), p(""), n.getPage(r).then(async (v) => {
      if (g) return;
      const A = v.getViewport({ scale: 1.7 }), S = t.current;
      S.width = A.width, S.height = A.height, m = v.render({ canvasContext: S.getContext("2d"), viewport: A }), await m.promise;
      const E = await v.getTextContent();
      g || (p(E.items.map((_) => _.str).join(" ")), u(""));
    }).catch((v) => {
      !g && v.name !== "RenderingCancelledException" && u("This page could not render. Please open the original PDF above.");
    }), () => {
      g = !0, m?.cancel();
    };
  }, [n, r]), /* @__PURE__ */ jt.createElement("div", { className: "document-viewer" }, /* @__PURE__ */ jt.createElement("div", { className: "page-controls" }, /* @__PURE__ */ jt.createElement("button", { disabled: !n || r === 1, onClick: () => l(r - 1) }, "Previous page"), /* @__PURE__ */ jt.createElement("span", { "aria-live": "polite" }, "Page ", r, " of ", n?.numPages || "…"), /* @__PURE__ */ jt.createElement("button", { disabled: !n || r === n.numPages, onClick: () => l(r + 1) }, "Next page")), /* @__PURE__ */ jt.createElement("p", { role: "status" }, c), /* @__PURE__ */ jt.createElement("canvas", { ref: t, role: "img", "aria-label": `Lab 1 outline, page ${r}. Read the page text below for an accessible version.`, hidden: !n }), d && /* @__PURE__ */ jt.createElement("details", null, /* @__PURE__ */ jt.createElement("summary", null, "Read page text"), /* @__PURE__ */ jt.createElement("p", null, d)));
}
function K1() {
  const [y, t] = Wn.useState(0), [n, s] = Wn.useState(!1);
  return /* @__PURE__ */ jt.createElement("div", { className: "slide-viewer" }, /* @__PURE__ */ jt.createElement("div", { className: "page-controls" }, /* @__PURE__ */ jt.createElement("button", { "aria-pressed": n, onClick: () => s(!n) }, n ? "Show original slides" : "Read slide text instead")), n ? /* @__PURE__ */ jt.createElement(jt.Fragment, null, /* @__PURE__ */ jt.createElement("p", null, "This text view contains a saved copy of the published slide content. Choose “Show original slides” for the current presentation with its layout, images, and diagrams."), /* @__PURE__ */ jt.createElement("div", { className: "page-controls" }, /* @__PURE__ */ jt.createElement("button", { disabled: y === 0, onClick: () => t(y - 1) }, "Previous slide"), /* @__PURE__ */ jt.createElement("label", null, "Slide ", /* @__PURE__ */ jt.createElement("select", { "aria-label": "Choose slide", value: y, onChange: (r) => t(Number(r.target.value)) }, Bl.map((r, l) => /* @__PURE__ */ jt.createElement("option", { key: r.number, value: l }, r.number, " of ", Bl.length)))), /* @__PURE__ */ jt.createElement("button", { disabled: y === Bl.length - 1, onClick: () => t(y + 1) }, "Next slide")), /* @__PURE__ */ jt.createElement("article", { className: "slide-content", "aria-live": "polite", "aria-label": `Slide ${y + 1} text` }, /* @__PURE__ */ jt.createElement("h3", null, "Slide ", y + 1), Bl[y].content.map((r, l) => /* @__PURE__ */ jt.createElement("p", { key: l }, r)))) : /* @__PURE__ */ jt.createElement(jt.Fragment, null, /* @__PURE__ */ jt.createElement("p", null, "If this browser cannot display Google Slides, use “Read slide text instead” or open the original presentation in your regular browser."), /* @__PURE__ */ jt.createElement("iframe", { className: "presentation-embed", title: "EduQuest Feasibility Presentation", src: "https://docs.google.com/presentation/d/e/2PACX-1vQm5DKoJH_vblQYT1AjOu8_5Nqu8VBlWj9GwnFZgpxsR71kFOLTM8Dh3VjlXVjNHAxSg9hOQqaCi98V/pubembed?start=false&loop=false&delayms=10000", allowFullScreen: !0 })));
}
export {
  q1 as P,
  jt as R,
  K1 as a,
  Y1 as b,
  X1 as c,
  _A as g,
  Wn as r
};
