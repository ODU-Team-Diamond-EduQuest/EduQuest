import { g as fe, b as Dn, r as C, R, c as ho, P as bo, a as po } from "./resource-viewers-DSBCbKhV.js";
var go = (e) => e.disabled || Array.isArray(e.accessibilityStates) && e.accessibilityStates.indexOf("disabled") > -1, mo = {
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
}, Ln = (e) => {
  var r = e.accessibilityRole, a = e.role, t = a || r;
  if (t) {
    var n = mo[t];
    if (n !== null)
      return n || t;
  }
}, So = {
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
}, yo = {}, Ro = function(r) {
  r === void 0 && (r = yo);
  var a = r.role || r.accessibilityRole;
  if (a === "label")
    return "label";
  var t = Ln(r);
  if (t) {
    if (t === "heading") {
      var n = r.accessibilityLevel || r["aria-level"];
      return n != null ? "h" + n : "h1";
    }
    return So[t];
  }
}, In = {
  isDisabled: go,
  propsToAccessibilityComponent: Ro,
  propsToAriaRole: Ln
};
function Le(e) {
  "@babel/helpers - typeof";
  return Le = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Le(e);
}
function xo(e, r) {
  if (Le(e) != "object" || !e) return e;
  var a = e[Symbol.toPrimitive];
  if (a !== void 0) {
    var t = a.call(e, r);
    if (Le(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function Eo(e) {
  var r = xo(e, "string");
  return Le(r) == "symbol" ? r : r + "";
}
function wo(e, r, a) {
  return (r = Eo(r)) in e ? Object.defineProperty(e, r, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = a, e;
}
function Ma(e, r) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    r && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), a.push.apply(a, t);
  }
  return a;
}
function ce(e) {
  for (var r = 1; r < arguments.length; r++) {
    var a = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Ma(Object(a), !0).forEach(function(t) {
      wo(e, t, a[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Ma(Object(a)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
    });
  }
  return e;
}
function Se(e, r) {
  if (e == null) return {};
  var a = {};
  for (var t in e) if ({}.hasOwnProperty.call(e, t)) {
    if (r.indexOf(t) !== -1) continue;
    a[t] = e[t];
  }
  return a;
}
var er = {
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
}, Co = ["ms", "Moz", "O", "Webkit"], Po = (e, r) => e + r.charAt(0).toUpperCase() + r.substring(1);
Object.keys(er).forEach((e) => {
  Co.forEach((r) => {
    er[Po(r, e)] = er[e];
  });
});
var Oo = (e) => e === "currentcolor" || e === "currentColor" || e === "inherit" || e.indexOf("var(") === 0, vr, Da;
function To() {
  if (Da) return vr;
  Da = 1;
  function e(d) {
    if (typeof d == "number")
      return d >>> 0 === d && d >= 0 && d <= 4294967295 ? d : null;
    if (typeof d != "string")
      return null;
    const b = v();
    let c;
    if (c = b.hex6.exec(d))
      return parseInt(c[1] + "ff", 16) >>> 0;
    const x = y(d);
    return x ?? ((c = b.rgb.exec(d)) ? (f(c[1]) << 24 | // r
    f(c[2]) << 16 | // g
    f(c[3]) << 8 | // b
    255) >>> // a
    0 : (c = b.rgba.exec(d)) ? c[6] !== void 0 ? (f(c[6]) << 24 | // r
    f(c[7]) << 16 | // g
    f(c[8]) << 8 | // b
    g(c[9])) >>> // a
    0 : (f(c[2]) << 24 | // r
    f(c[3]) << 16 | // g
    f(c[4]) << 8 | // b
    g(c[5])) >>> // a
    0 : (c = b.hex3.exec(d)) ? parseInt(
      c[1] + c[1] + // r
      c[2] + c[2] + // g
      c[3] + c[3] + // b
      "ff",
      // a
      16
    ) >>> 0 : (c = b.hex8.exec(d)) ? parseInt(c[1], 16) >>> 0 : (c = b.hex4.exec(d)) ? parseInt(
      c[1] + c[1] + // r
      c[2] + c[2] + // g
      c[3] + c[3] + // b
      c[4] + c[4],
      // a
      16
    ) >>> 0 : (c = b.hsl.exec(d)) ? (a(
      h(c[1]),
      // h
      p(c[2]),
      // s
      p(c[3])
      // l
    ) | 255) >>> // a
    0 : (c = b.hsla.exec(d)) ? c[6] !== void 0 ? (a(
      h(c[6]),
      // h
      p(c[7]),
      // s
      p(c[8])
      // l
    ) | g(c[9])) >>> // a
    0 : (a(
      h(c[2]),
      // h
      p(c[3]),
      // s
      p(c[4])
      // l
    ) | g(c[5])) >>> // a
    0 : (c = b.hwb.exec(d)) ? (t(
      h(c[1]),
      // h
      p(c[2]),
      // w
      p(c[3])
      // b
    ) | 255) >>> // a
    0 : null);
  }
  function r(d, b, c) {
    return c < 0 && (c += 1), c > 1 && (c -= 1), c < 1 / 6 ? d + (b - d) * 6 * c : c < 1 / 2 ? b : c < 2 / 3 ? d + (b - d) * (2 / 3 - c) * 6 : d;
  }
  function a(d, b, c) {
    const x = c < 0.5 ? c * (1 + b) : c + b - c * b, w = 2 * c - x, S = r(w, x, d + 1 / 3), E = r(w, x, d), P = r(w, x, d - 1 / 3);
    return Math.round(S * 255) << 24 | Math.round(E * 255) << 16 | Math.round(P * 255) << 8;
  }
  function t(d, b, c) {
    if (b + c >= 1) {
      const E = Math.round(b * 255 / (b + c));
      return E << 24 | E << 16 | E << 8;
    }
    const x = r(0, 1, d + 1 / 3) * (1 - b - c) + b, w = r(0, 1, d) * (1 - b - c) + b, S = r(0, 1, d - 1 / 3) * (1 - b - c) + b;
    return Math.round(x * 255) << 24 | Math.round(w * 255) << 16 | Math.round(S * 255) << 8;
  }
  const n = "[-+]?\\d*\\.?\\d+", i = n + "%";
  function o(...d) {
    return "\\(\\s*(" + d.join(")\\s*,?\\s*(") + ")\\s*\\)";
  }
  function l(...d) {
    return "\\(\\s*(" + d.slice(0, d.length - 1).join(")\\s*,?\\s*(") + ")\\s*/\\s*(" + d[d.length - 1] + ")\\s*\\)";
  }
  function u(...d) {
    return "\\(\\s*(" + d.join(")\\s*,\\s*(") + ")\\s*\\)";
  }
  let s;
  function v() {
    return s === void 0 && (s = {
      rgb: new RegExp("rgb" + o(n, n, n)),
      rgba: new RegExp(
        "rgba(" + u(n, n, n, n) + "|" + l(n, n, n, n) + ")"
      ),
      hsl: new RegExp("hsl" + o(n, i, i)),
      hsla: new RegExp(
        "hsla(" + u(n, i, i, n) + "|" + l(n, i, i, n) + ")"
      ),
      hwb: new RegExp("hwb" + o(n, i, i)),
      hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex6: /^#([0-9a-fA-F]{6})$/,
      hex8: /^#([0-9a-fA-F]{8})$/
    }), s;
  }
  function f(d) {
    const b = parseInt(d, 10);
    return b < 0 ? 0 : b > 255 ? 255 : b;
  }
  function h(d) {
    return (parseFloat(d) % 360 + 360) % 360 / 360;
  }
  function g(d) {
    const b = parseFloat(d);
    return b < 0 ? 0 : b > 1 ? 255 : Math.round(b * 255);
  }
  function p(d) {
    const b = parseFloat(d);
    return b < 0 ? 0 : b > 100 ? 1 : b / 100;
  }
  function y(d) {
    switch (d) {
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
  return vr = e, vr;
}
var _o = To();
const ko = /* @__PURE__ */ fe(_o);
var Ao = (e) => {
  if (e == null)
    return e;
  var r = ko(e);
  if (r != null)
    return r = (r << 24 | r >>> 8) >>> 0, r;
}, it = function(r, a) {
  if (a === void 0 && (a = 1), r != null) {
    if (typeof r == "string" && Oo(r))
      return r;
    var t = Ao(r);
    if (t != null) {
      var n = t >> 16 & 255, i = t >> 8 & 255, o = t & 255, l = (t >> 24 & 255) / 255, u = (l * a).toFixed(2);
      return "rgba(" + n + "," + i + "," + o + "," + u + ")";
    }
  }
}, Mo = {
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
function W(e, r) {
  var a = e;
  return (r == null || !er[r]) && typeof e == "number" ? a = e + "px" : r != null && Mo[r] && (a = it(e)), a;
}
var ie = !!(typeof window < "u" && window.document && window.document.createElement), Do = {}, Lo = !ie || window.CSS != null && window.CSS.supports != null && (window.CSS.supports("text-decoration-line", "none") || window.CSS.supports("-webkit-text-decoration-line", "none")), Io = "monospace,monospace", La = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif', Bo = {
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
}, Bn = (e, r) => {
  if (!e)
    return Do;
  var a = {}, t = function() {
    var l = e[n];
    if (
      // Ignore everything with a null value
      l == null
    )
      return "continue";
    if (n === "backgroundClip")
      l === "text" && (a.backgroundClip = l, a.WebkitBackgroundClip = l);
    else if (n === "flex")
      l === -1 ? (a.flexGrow = 0, a.flexShrink = 1, a.flexBasis = "auto") : a.flex = l;
    else if (n === "font")
      a[n] = l.replace("System", La);
    else if (n === "fontFamily")
      if (l.indexOf("System") > -1) {
        var u = l.split(/,\s*/);
        u[u.indexOf("System")] = La, a[n] = u.join(",");
      } else l === "monospace" ? a[n] = Io : a[n] = l;
    else if (n === "textDecorationLine")
      Lo ? a.textDecorationLine = l : a.textDecoration = l;
    else if (n === "writingDirection")
      a.direction = l;
    else {
      var s = W(e[n], n), v = Bo[n];
      r && n === "inset" ? (e.insetInline == null && (a.left = s, a.right = s), e.insetBlock == null && (a.top = s, a.bottom = s)) : r && n === "margin" ? (e.marginInline == null && (a.marginLeft = s, a.marginRight = s), e.marginBlock == null && (a.marginTop = s, a.marginBottom = s)) : r && n === "padding" ? (e.paddingInline == null && (a.paddingLeft = s, a.paddingRight = s), e.paddingBlock == null && (a.paddingTop = s, a.paddingBottom = s)) : v ? v.forEach((f, h) => {
        e[f] == null && (a[f] = s);
      }) : a[n] = s;
    }
  };
  for (var n in e)
    var i = t();
  return a;
};
function No(e, r) {
  for (var a = e.length, t = r ^ a, n = 0, i; a >= 4; )
    i = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, i = (i & 65535) * 1540483477 + (((i >>> 16) * 1540483477 & 65535) << 16), i ^= i >>> 24, i = (i & 65535) * 1540483477 + (((i >>> 16) * 1540483477 & 65535) << 16), t = (t & 65535) * 1540483477 + (((t >>> 16) * 1540483477 & 65535) << 16) ^ i, a -= 4, ++n;
  switch (a) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = (t & 65535) * 1540483477 + (((t >>> 16) * 1540483477 & 65535) << 16);
  }
  return t ^= t >>> 13, t = (t & 65535) * 1540483477 + (((t >>> 16) * 1540483477 & 65535) << 16), t ^= t >>> 15, t >>> 0;
}
var Wo = (e) => No(e, 1).toString(36), zo = /[A-Z]/g, $o = /^ms-/, hr = {};
function qo(e) {
  return "-" + e.toLowerCase();
}
function jo(e) {
  if (e in hr)
    return hr[e];
  var r = e.replace(zo, qo);
  return hr[e] = $o.test(r) ? "-" + r : r;
}
var qe = {}, je = {}, He = {}, Ia;
function Nn() {
  if (Ia) return He;
  Ia = 1, Object.defineProperty(He, "__esModule", {
    value: !0
  }), He.default = e;
  function e(r) {
    return r.charAt(0).toUpperCase() + r.slice(1);
  }
  return He;
}
var Ba;
function Ho() {
  if (Ba) return je;
  Ba = 1, Object.defineProperty(je, "__esModule", {
    value: !0
  }), je.default = t;
  var e = Nn(), r = a(e);
  function a(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function t(n, i, o) {
    var l = n[i];
    if (l && o.hasOwnProperty(i))
      for (var u = (0, r.default)(i), s = 0; s < l.length; ++s) {
        var v = l[s] + u;
        o[v] || (o[v] = o[i]);
      }
    return o;
  }
  return je;
}
var Fe = {}, Na;
function Fo() {
  if (Na) return Fe;
  Na = 1, Object.defineProperty(Fe, "__esModule", {
    value: !0
  }), Fe.default = e;
  function e(r, a, t, n, i) {
    for (var o = 0, l = r.length; o < l; ++o) {
      var u = r[o](a, t, n, i);
      if (u)
        return u;
    }
  }
  return Fe;
}
var Ve = {}, Wa;
function Vo() {
  if (Wa) return Ve;
  Wa = 1, Object.defineProperty(Ve, "__esModule", {
    value: !0
  }), Ve.default = r;
  function e(a, t) {
    a.indexOf(t) === -1 && a.push(t);
  }
  function r(a, t) {
    if (Array.isArray(t))
      for (var n = 0, i = t.length; n < i; ++n)
        e(a, t[n]);
    else
      e(a, t);
  }
  return Ve;
}
var Ye = {}, za;
function Yo() {
  if (za) return Ye;
  za = 1, Object.defineProperty(Ye, "__esModule", {
    value: !0
  }), Ye.default = e;
  function e(r) {
    return r instanceof Object && !Array.isArray(r);
  }
  return Ye;
}
var $a;
function Go() {
  if ($a) return qe;
  $a = 1, Object.defineProperty(qe, "__esModule", {
    value: !0
  }), qe.default = s;
  var e = Ho(), r = u(e), a = Fo(), t = u(a), n = Vo(), i = u(n), o = Yo(), l = u(o);
  function u(v) {
    return v && v.__esModule ? v : { default: v };
  }
  function s(v) {
    var f = v.prefixMap, h = v.plugins;
    return function g(p) {
      for (var y in p) {
        var d = p[y];
        if ((0, l.default)(d))
          p[y] = g(d);
        else if (Array.isArray(d)) {
          for (var b = [], c = 0, x = d.length; c < x; ++c) {
            var w = (0, t.default)(h, y, d[c], p, f);
            (0, i.default)(b, w || d[c]);
          }
          b.length > 0 && (p[y] = b);
        } else {
          var S = (0, t.default)(h, y, d, p, f);
          S && (p[y] = S), p = (0, r.default)(f, y, p);
        }
      }
      return p;
    };
  }
  return qe;
}
var Xo = Go();
const Uo = /* @__PURE__ */ fe(Xo);
var Ge = {};
function rr(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? rr = function(a) {
    return typeof a;
  } : rr = function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, rr(e);
}
function Ko(e) {
  return el(e) || Qo(e) || Zo(e) || Jo();
}
function Jo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Zo(e, r) {
  if (e) {
    if (typeof e == "string") return Mr(e, r);
    var a = Object.prototype.toString.call(e).slice(8, -1);
    if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set") return Array.from(a);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return Mr(e, r);
  }
}
function Qo(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function el(e) {
  if (Array.isArray(e)) return Mr(e);
}
function Mr(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var a = 0, t = new Array(r); a < r; a++)
    t[a] = e[a];
  return t;
}
function qa(e) {
  return e.filter(function(r, a) {
    return e.lastIndexOf(r) === a;
  });
}
function Wn(e) {
  for (var r = 0, a = arguments.length <= 1 ? 0 : arguments.length - 1; r < a; ++r) {
    var t = r + 1 < 1 || arguments.length <= r + 1 ? void 0 : arguments[r + 1];
    for (var n in t) {
      var i = t[n], o = e[n];
      if (o && i) {
        if (Array.isArray(o)) {
          e[n] = qa(o.concat(i));
          continue;
        }
        if (Array.isArray(i)) {
          e[n] = qa([o].concat(Ko(i)));
          continue;
        }
        if (rr(i) === "object") {
          e[n] = Wn({}, o, i);
          continue;
        }
      }
      e[n] = i;
    }
  }
  return e;
}
var rl = /-([a-z])/g, tl = /^Ms/g, br = {};
function al(e) {
  return e[1].toUpperCase();
}
function zn(e) {
  if (br.hasOwnProperty(e))
    return br[e];
  var r = e.replace(rl, al).replace(tl, "ms");
  return br[e] = r, r;
}
var nl = /[A-Z]/g, il = /^ms-/, pr = {};
function ol(e) {
  return "-" + e.toLowerCase();
}
function $n(e) {
  if (pr.hasOwnProperty(e))
    return pr[e];
  var r = e.replace(nl, ol);
  return pr[e] = il.test(r) ? "-" + r : r;
}
const ll = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $n
}, Symbol.toStringTag, { value: "Module" }));
function ur(e) {
  return $n(e);
}
function qn(e, r) {
  return ur(e) + ":" + r;
}
function sl(e) {
  var r = "";
  for (var a in e) {
    var t = e[a];
    typeof t != "string" && typeof t != "number" || (r && (r += ";"), r += qn(a, t));
  }
  return r;
}
var ul = /^(Webkit|Moz|O|ms)/;
function cl(e) {
  return ul.test(e);
}
var fl = /-webkit-|-moz-|-ms-/;
function dl(e) {
  return typeof e == "string" && fl.test(e);
}
var Ie = {
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
}, ja = ["animationIterationCount", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "order"], Ha = ["Webkit", "ms", "Moz", "O"];
function vl(e, r) {
  return e + r.charAt(0).toUpperCase() + r.slice(1);
}
for (var gr = 0, hl = ja.length; gr < hl; ++gr) {
  var Fa = ja[gr];
  Ie[Fa] = !0;
  for (var mr = 0, bl = Ha.length; mr < bl; ++mr)
    Ie[vl(Ha[mr], Fa)] = !0;
}
for (var pl in Ie)
  Ie[ur(pl)] = !0;
function gl(e) {
  return Ie.hasOwnProperty(e);
}
var ml = /^(ms|Webkit|Moz|O)/;
function jn(e) {
  var r = e.replace(ml, "");
  return r.charAt(0).toLowerCase() + r.slice(1);
}
function Sl(e) {
  return jn(zn(e));
}
function yl(e, r) {
  return r.join(";" + ur(e) + ":");
}
var Rl = /(-ms-|-webkit-|-moz-|-o-)/g;
function xl(e) {
  return typeof e == "string" ? e.replace(Rl, "") : e;
}
const El = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  assignStyle: Wn,
  camelCaseProperty: zn,
  cssifyDeclaration: qn,
  cssifyObject: sl,
  hyphenateProperty: ur,
  isPrefixedProperty: cl,
  isPrefixedValue: dl,
  isUnitlessProperty: gl,
  normalizeProperty: Sl,
  resolveArrayValue: yl,
  unprefixProperty: jn,
  unprefixValue: xl
}, Symbol.toStringTag, { value: "Module" })), wl = /* @__PURE__ */ Dn(El);
var Va;
function Cl() {
  if (Va) return Ge;
  Va = 1, Object.defineProperty(Ge, "__esModule", {
    value: !0
  }), Ge.default = t;
  var e = wl, r = /cross-fade\(/g, a = ["-webkit-", ""];
  function t(n, i) {
    if (typeof i == "string" && !(0, e.isPrefixedValue)(i) && i.indexOf("cross-fade(") !== -1)
      return a.map(function(o) {
        return i.replace(r, o + "cross-fade(");
      });
  }
  return Ge;
}
var Pl = Cl();
const Ol = /* @__PURE__ */ fe(Pl);
var Xe = {}, Sr = {}, Ya;
function Hn() {
  return Ya || (Ya = 1, (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = a;
    var r = /-webkit-|-moz-|-ms-/;
    function a(t) {
      return typeof t == "string" && r.test(t);
    }
  })(Sr)), Sr;
}
var Ga;
function Tl() {
  if (Ga) return Xe;
  Ga = 1, Object.defineProperty(Xe, "__esModule", {
    value: !0
  }), Xe.default = n;
  var e = /* @__PURE__ */ Hn(), r = a(e);
  function a(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var t = ["-webkit-", ""];
  function n(i, o) {
    if (typeof o == "string" && !(0, r.default)(o) && o.indexOf("image-set(") > -1)
      return t.map(function(l) {
        return o.replace(/image-set\(/g, l + "image-set(");
      });
  }
  return Xe;
}
var _l = Tl();
const kl = /* @__PURE__ */ fe(_l);
var Ue = {}, Xa;
function Al() {
  if (Xa) return Ue;
  Xa = 1, Object.defineProperty(Ue, "__esModule", {
    value: !0
  }), Ue.default = r;
  var e = {
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
  function r(a, t, n) {
    if (Object.prototype.hasOwnProperty.call(e, a))
      for (var i = e[a], o = 0, l = i.length; o < l; ++o)
        n[i[o]] = t;
  }
  return Ue;
}
var Ml = Al();
const Dl = /* @__PURE__ */ fe(Ml);
var Ke = {}, Ua;
function Ll() {
  if (Ua) return Ke;
  Ua = 1, Object.defineProperty(Ke, "__esModule", {
    value: !0
  }), Ke.default = e;
  function e(r, a) {
    if (r === "position" && a === "sticky")
      return ["-webkit-sticky", "sticky"];
  }
  return Ke;
}
var Il = Ll();
const Bl = /* @__PURE__ */ fe(Il);
var Je = {}, Ka;
function Nl() {
  if (Ka) return Je;
  Ka = 1, Object.defineProperty(Je, "__esModule", {
    value: !0
  }), Je.default = t;
  var e = ["-webkit-", "-moz-", ""], r = {
    maxHeight: !0,
    maxWidth: !0,
    width: !0,
    height: !0,
    columnWidth: !0,
    minWidth: !0,
    minHeight: !0
  }, a = {
    "min-content": !0,
    "max-content": !0,
    "fill-available": !0,
    "fit-content": !0,
    "contain-floats": !0
  };
  function t(n, i) {
    if (r.hasOwnProperty(n) && a.hasOwnProperty(i))
      return e.map(function(o) {
        return o + i;
      });
  }
  return Je;
}
var Wl = Nl();
const zl = /* @__PURE__ */ fe(Wl);
var Ze = {}, yr = {};
const $l = /* @__PURE__ */ Dn(ll);
var Ja;
function ql() {
  return Ja || (Ja = 1, (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = n;
    var r = $l, a = t(r);
    function t(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function n(i) {
      return (0, a.default)(i);
    }
  })(yr)), yr;
}
var Za;
function jl() {
  if (Za) return Ze;
  Za = 1, Object.defineProperty(Ze, "__esModule", {
    value: !0
  }), Ze.default = v;
  var e = /* @__PURE__ */ ql(), r = o(e), a = /* @__PURE__ */ Hn(), t = o(a), n = Nn(), i = o(n);
  function o(f) {
    return f && f.__esModule ? f : { default: f };
  }
  var l = {
    transition: !0,
    transitionProperty: !0,
    WebkitTransition: !0,
    WebkitTransitionProperty: !0,
    MozTransition: !0,
    MozTransitionProperty: !0
  }, u = {
    Webkit: "-webkit-",
    Moz: "-moz-",
    ms: "-ms-"
  };
  function s(f, h) {
    if ((0, t.default)(f))
      return f;
    for (var g = f.split(/,(?![^()]*(?:\([^()]*\))?\))/g), p = 0, y = g.length; p < y; ++p) {
      var d = g[p], b = [d];
      for (var c in h) {
        var x = (0, r.default)(c);
        if (d.indexOf(x) > -1 && x !== "order")
          for (var w = h[c], S = 0, E = w.length; S < E; ++S)
            b.unshift(d.replace(x, u[w[S]] + x));
      }
      g[p] = b.join(",");
    }
    return g.join(",");
  }
  function v(f, h, g, p) {
    if (typeof h == "string" && l.hasOwnProperty(f)) {
      var y = s(h, p), d = y.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(c) {
        return !/-moz-|-ms-/.test(c);
      }).join(",");
      if (f.indexOf("Webkit") > -1)
        return d;
      var b = y.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(c) {
        return !/-webkit-|-ms-/.test(c);
      }).join(",");
      return f.indexOf("Moz") > -1 ? b : (g["Webkit" + (0, i.default)(f)] = d, g["Moz" + (0, i.default)(f)] = b, y);
    }
  }
  return Ze;
}
var Hl = jl();
const Fl = /* @__PURE__ */ fe(Hl);
var T = ["Webkit"], Vl = ["Moz"], Yl = ["Webkit", "Moz"], A = ["Webkit", "ms"], Gl = ["Webkit", "Moz", "ms"];
const Xl = {
  plugins: [Ol, kl, Dl, Bl, zl, Fl],
  prefixMap: {
    appearance: Gl,
    userSelect: Yl,
    textEmphasisPosition: A,
    textEmphasis: A,
    textEmphasisStyle: A,
    textEmphasisColor: A,
    boxDecorationBreak: A,
    clipPath: T,
    maskImage: A,
    maskMode: A,
    maskRepeat: A,
    maskPosition: A,
    maskClip: A,
    maskOrigin: A,
    maskSize: A,
    maskComposite: A,
    mask: A,
    maskBorderSource: A,
    maskBorderMode: A,
    maskBorderSlice: A,
    maskBorderWidth: A,
    maskBorderOutset: A,
    maskBorderRepeat: A,
    maskBorder: A,
    maskType: A,
    textDecorationStyle: T,
    textDecorationSkip: T,
    textDecorationLine: T,
    textDecorationColor: T,
    filter: T,
    breakAfter: T,
    breakBefore: T,
    breakInside: T,
    columnCount: T,
    columnFill: T,
    columnGap: T,
    columnRule: T,
    columnRuleColor: T,
    columnRuleStyle: T,
    columnRuleWidth: T,
    columns: T,
    columnSpan: T,
    columnWidth: T,
    backdropFilter: T,
    hyphens: T,
    flowInto: T,
    flowFrom: T,
    regionFragment: T,
    textOrientation: T,
    tabSize: Vl,
    fontKerning: T,
    textSizeAdjust: T
  }
};
var Ul = Uo(Xl), Kl = ["animationKeyframes"], Qa = /* @__PURE__ */ new Map(), Jl = {}, Zl = 1, Ql = 3, es = {
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
}, Dr = "borderTopLeftRadius", Lr = "borderTopRightRadius", Ir = "borderBottomLeftRadius", Br = "borderBottomRightRadius", Nr = "borderLeftColor", Wr = "borderLeftStyle", zr = "borderLeftWidth", $r = "borderRightColor", qr = "borderRightStyle", jr = "borderRightWidth", Hr = "right", Fr = "marginLeft", Vr = "marginRight", Yr = "paddingLeft", Gr = "paddingRight", Xr = "left", ir = {
  [Dr]: Lr,
  [Lr]: Dr,
  [Ir]: Br,
  [Br]: Ir,
  [Nr]: $r,
  [Wr]: qr,
  [zr]: jr,
  [$r]: Nr,
  [qr]: Wr,
  [jr]: zr,
  [Xr]: Hr,
  [Fr]: Vr,
  [Vr]: Fr,
  [Yr]: Gr,
  [Gr]: Yr,
  [Hr]: Xr
}, Ae = {
  borderStartStartRadius: Dr,
  borderStartEndRadius: Lr,
  borderEndStartRadius: Ir,
  borderEndEndRadius: Br,
  borderInlineStartColor: Nr,
  borderInlineStartStyle: Wr,
  borderInlineStartWidth: zr,
  borderInlineEndColor: $r,
  borderInlineEndStyle: qr,
  borderInlineEndWidth: jr,
  insetInlineEnd: Hr,
  insetInlineStart: Xr,
  marginInlineStart: Fr,
  marginInlineEnd: Vr,
  paddingInlineStart: Yr,
  paddingInlineEnd: Gr
}, Fn = ["clear", "float", "textAlign"];
function rs(e) {
  var r = {
    $$css: !0
  }, a = [];
  function t(n, i, o) {
    var l = ns(o, i), u = i + l, s = Qa.get(u), v;
    if (s != null)
      v = s[0], a.push(s[1]);
    else {
      var f = n !== i ? u : l;
      v = ot("r", n, f);
      var h = es[n] || Ql, g = is(v, i, o), p = [g, h];
      a.push(p), Qa.set(u, [v, p]);
    }
    return v;
  }
  return Object.keys(e).sort().forEach((n) => {
    var i = e[n];
    if (i != null) {
      var o;
      if (Fn.indexOf(n) > -1) {
        var l = t(n, n, "left"), u = t(n, n, "right");
        i === "start" ? o = [l, u] : i === "end" && (o = [u, l]);
      }
      var s = Ae[n];
      if (s != null) {
        var v = t(n, s, i), f = t(n, ir[s], i);
        o = [v, f];
      }
      if (n === "transitionProperty") {
        for (var h = Array.isArray(i) ? i : [i], g = [], p = 0; p < h.length; p++) {
          var y = h[p];
          typeof y == "string" && Ae[y] != null && g.push(p);
        }
        if (g.length > 0) {
          var d = [...h], b = [...h];
          g.forEach((c) => {
            var x = d[c];
            if (typeof x == "string") {
              var w = Ae[x], S = ir[w];
              d[c] = w, b[c] = S;
              var E = t(n, n, d), P = t(n, n, b);
              o = [E, P];
            }
          });
        }
      }
      o == null ? o = t(n, n, i) : r.$$css$localize = !0, r[n] = o;
    }
  }), [r, a];
}
function ts(e, r) {
  var a = {
    $$css: !0
  }, t = [], n = e.animationKeyframes, i = Se(e, Kl), o = ot("css", r, JSON.stringify(e)), l = "." + o, u;
  if (n != null) {
    var s = Vn(n), v = s[0], f = s[1];
    u = v.join(","), t.push(...f);
  }
  var h = Q(ce(ce({}, i), {}, {
    animationName: u
  }));
  return t.push("" + l + h), a[o] = o, [a, [[t, Zl]]];
}
function as(e, r) {
  var a = e || Jl, t = {}, n = {}, i = function() {
    var s = a[o], v = o, f = s;
    if (!Object.prototype.hasOwnProperty.call(a, o) || s == null)
      return "continue";
    Fn.indexOf(o) > -1 && (s === "start" ? f = r ? "right" : "left" : s === "end" && (f = r ? "left" : "right"));
    var h = Ae[o];
    if (h != null && (v = r ? ir[h] : h), o === "transitionProperty") {
      var g = Array.isArray(s) ? s : [s];
      g.forEach((p, y) => {
        if (typeof p == "string") {
          var d = Ae[p];
          d != null && (g[y] = r ? ir[d] : d, f = g.join(" "));
        }
      });
    }
    t[v] || (n[v] = f), v === o && (t[v] = !0);
  };
  for (var o in a)
    var l = i();
  return Bn(n, !0);
}
function ns(e, r) {
  var a = W(e, r);
  return typeof a != "string" ? JSON.stringify(a || "") : a;
}
function is(e, r, a) {
  var t = [], n = "." + e;
  switch (r) {
    case "animationKeyframes": {
      var i = Vn(a), o = i[0], l = i[1], u = Q({
        animationName: o.join(",")
      });
      t.push("" + n + u, ...l);
      break;
    }
    // Equivalent to using '::placeholder'
    case "placeholderTextColor": {
      var s = Q({
        color: a,
        opacity: 1
      });
      t.push(n + "::-webkit-input-placeholder" + s, n + "::-moz-placeholder" + s, n + ":-ms-input-placeholder" + s, n + "::placeholder" + s);
      break;
    }
    // Polyfill for additional 'pointer-events' values
    // See d13f78622b233a0afc0c7a200c0a0792c8ca9e58
    // See https://reactnative.dev/docs/view#pointerevents
    case "pointerEvents": {
      var v = a;
      if (a === "auto")
        v = "auto!important";
      else if (a === "none") {
        v = "none!important";
        var f = Q({
          pointerEvents: "none"
        });
        t.push(n + ">* " + f);
      } else if (a === "box-none") {
        v = "none!important";
        var h = Q({
          pointerEvents: "auto"
        });
        t.push(n + ">* " + h);
      } else if (a === "box-only") {
        v = "auto!important";
        var g = Q({
          pointerEvents: "none"
        });
        t.push(n + ">* " + g);
      }
      var p = Q({
        pointerEvents: v
      });
      t.push("" + n + p);
      break;
    }
    // Polyfill for draft spec
    // https://drafts.csswg.org/css-scrollbars-1/
    case "scrollbarWidth": {
      a === "none" && t.push(n + "::-webkit-scrollbar{display:none}");
      var y = Q({
        scrollbarWidth: a
      });
      t.push("" + n + y);
      break;
    }
    default: {
      var d = Q({
        [r]: a
      });
      t.push("" + n + d);
      break;
    }
  }
  return t;
}
function Q(e) {
  var r = Ul(Bn(e)), a = Object.keys(r).map((t) => {
    var n = r[t], i = jo(t);
    return Array.isArray(n) ? n.map((o) => i + ":" + o).join(";") : i + ":" + n;
  }).sort().join(";");
  return "{" + a + ";}";
}
function ot(e, r, a) {
  var t = Wo(r + a);
  return e + "-" + t;
}
function os(e) {
  var r = ["-webkit-", ""], a = ot("r", "animation", JSON.stringify(e)), t = "{" + Object.keys(e).map((i) => {
    var o = e[i], l = Q(o);
    return "" + i + l;
  }).join("") + "}", n = r.map((i) => "@" + i + "keyframes " + a + t);
  return [a, n];
}
function Vn(e) {
  if (typeof e == "number")
    throw new Error("Invalid CSS keyframes type: " + typeof e);
  var r = [], a = [], t = Array.isArray(e) ? e : [e];
  return t.forEach((n) => {
    if (typeof n == "string")
      r.push(n);
    else {
      var i = os(n), o = i[0], l = i[1];
      r.push(o), a.push(...l);
    }
  }), [r, a];
}
function Rr(e, r, a) {
  if (ie) {
    var t = r ?? document, n = t.getElementById(e);
    if (n == null)
      if (n = document.createElement("style"), n.setAttribute("id", e), typeof a == "string" && n.appendChild(document.createTextNode(a)), t instanceof ShadowRoot)
        t.insertBefore(n, t.firstChild);
      else {
        var i = t.head;
        i && i.insertBefore(n, i.firstChild);
      }
    return n.sheet;
  } else
    return null;
}
var ls = Array.prototype.slice;
function xr(e) {
  var r = {}, a = {};
  if (e != null) {
    var t;
    ls.call(e.cssRules).forEach((o, l) => {
      var u = o.cssText;
      if (u.indexOf("stylesheet-group") > -1)
        t = cs(o), r[t] = {
          start: l,
          rules: [u]
        };
      else {
        var s = rn(u);
        s != null && (a[s] = !0, r[t].rules.push(u));
      }
    });
  }
  function n(o, l, u) {
    var s = en(r), v = s.indexOf(l), f = v + 1, h = s[f], g = h != null && r[h].start != null ? r[h].start : o.cssRules.length, p = ds(o, u, g);
    if (p) {
      r[l].start == null && (r[l].start = g);
      for (var y = f; y < s.length; y += 1) {
        var d = s[y], b = r[d].start || 0;
        r[d].start = b + 1;
      }
    }
    return p;
  }
  var i = {
    /**
     * The textContent of the style sheet.
     */
    getTextContent() {
      return en(r).map((o) => {
        var l = r[o].rules, u = l.shift();
        return l.sort(), l.unshift(u), l.join(`
`);
      }).join(`
`);
    },
    /**
     * Insert a rule into the style sheet
     */
    insert(o, l) {
      var u = Number(l);
      if (r[u] == null) {
        var s = ss(u);
        r[u] = {
          start: null,
          rules: [s]
        }, e != null && n(e, u, s);
      }
      var v = rn(o);
      if (v != null && a[v] == null && (a[v] = !0, r[u].rules.push(o), e != null)) {
        var f = n(e, u, o);
        f || r[u].rules.pop();
      }
    }
  };
  return i;
}
function ss(e) {
  return '[stylesheet-group="' + e + '"]{}';
}
var us = /["']/g;
function cs(e) {
  return Number(e.selectorText.split(us)[1]);
}
function en(e) {
  return Object.keys(e).map(Number).sort((r, a) => r > a ? 1 : -1);
}
var fs = /\s*([,])\s*/g;
function rn(e) {
  var r = e.split("{")[0].trim();
  return r !== "" ? r.replace(fs, "$1") : null;
}
function ds(e, r, a) {
  try {
    return e.insertRule(r, a), !0;
  } catch {
    return !1;
  }
}
var vs = "react-native-stylesheet", Er = /* @__PURE__ */ new WeakMap(), V = [], tn = [
  // minimal top-level reset
  "html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}",
  "body{margin:0;}",
  // minimal form pseudo-element reset
  "button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}",
  "input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}"
];
function hs(e, r) {
  r === void 0 && (r = vs);
  var a;
  if (ie) {
    var t = document;
    if (V.length === 0)
      a = xr(Rr(r)), tn.forEach((l) => {
        a.insert(l, 0);
      }), Er.set(t, V.length), V.push(a);
    else {
      var n = Er.get(t);
      if (n == null) {
        var i = V[0], o = i != null ? i.getTextContent() : "";
        a = xr(Rr(r, t, o)), Er.set(t, V.length), V.push(a);
      } else
        a = V[n];
    }
  } else
    V.length === 0 ? (a = xr(Rr(r)), tn.forEach((l) => {
      a.insert(l, 0);
    }), V.push(a)) : a = V[0];
  return {
    getTextContent() {
      return a.getTextContent();
    },
    id: r,
    insert(l, u) {
      V.forEach((s) => {
        s.insert(l, u);
      });
    }
  };
}
var Qe = {}, an;
function bs() {
  if (an) return Qe;
  an = 1, Object.defineProperty(Qe, "__esModule", {
    value: !0
  }), Qe.localizeStyle = t;
  var e = /* @__PURE__ */ new WeakMap(), r = "$$css$localize";
  function a(n, i) {
    var o = {};
    for (var l in n)
      if (l !== r) {
        var u = n[l];
        Array.isArray(u) ? o[l] = i ? u[1] : u[0] : o[l] = u;
      }
    return o;
  }
  function t(n, i) {
    if (n[r] != null) {
      var o = i ? 1 : 0;
      if (e.has(n)) {
        var l = e.get(n), u = l[o];
        return u == null && (u = a(n, i), l[o] = u, e.set(n, l)), u;
      }
      var s = a(n, i), v = new Array(2);
      return v[o] = s, e.set(n, v), s;
    }
    return n;
  }
  return Qe;
}
var wr, nn;
function ps() {
  return nn || (nn = 1, wr = /* @__PURE__ */ bs()), wr;
}
var gs = /* @__PURE__ */ ps(), ms = {}, Yn = {
  height: 0,
  width: 0
}, Ss = (e) => {
  var r = e.shadowColor, a = e.shadowOffset, t = e.shadowOpacity, n = e.shadowRadius, i = a || Yn, o = i.height, l = i.width, u = W(l), s = W(o), v = W(n || 0), f = it(r || "black", t);
  if (f != null && u != null && s != null && v != null)
    return u + " " + s + " " + v + " " + f;
}, ys = (e) => {
  var r = e.textShadowColor, a = e.textShadowOffset, t = e.textShadowRadius, n = a || Yn, i = n.height, o = n.width, l = t || 0, u = W(o), s = W(i), v = W(l), f = W(r, "textShadowColor");
  if (f && (i !== 0 || o !== 0 || l !== 0) && u != null && s != null && v != null)
    return u + " " + s + " " + v + " " + f;
}, Rs = (e) => {
  if (typeof e == "string")
    return e;
  var r = W(e.offsetX) || 0, a = W(e.offsetY) || 0, t = W(e.blurRadius) || 0, n = W(e.spreadDistance) || 0, i = it(e.color) || "black", o = e.inset ? "inset " : "";
  return "" + o + r + " " + a + " " + t + " " + n + " " + i;
}, xs = (e) => e.map(Rs).join(", "), Es = (e) => {
  var r = Object.keys(e)[0], a = e[r];
  if (r === "matrix" || r === "matrix3d")
    return r + "(" + a.join(",") + ")";
  var t = W(a, r);
  return r + "(" + t + ")";
}, ws = (e) => e.map(Es).join(" "), Cs = (e) => e.map((r) => W(r)).join(" "), Ps = {
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
}, Os = {
  elevation: !0,
  overlayColor: !0,
  resizeMode: !0,
  tintColor: !0
}, Gn = function(r, a) {
  a === void 0 && (a = {});
  var t = r || ms, n = {};
  if (a.shadow, t.shadowColor != null || t.shadowOffset != null || t.shadowOpacity != null || t.shadowRadius != null) {
    var i = Ss(t);
    i != null && (n.boxShadow = i);
  }
  if (a.textShadow, t.textShadowColor != null || t.textShadowOffset != null || t.textShadowRadius != null) {
    var o = ys(t);
    if (o != null && n.textShadow == null) {
      var l = t.textShadow, u = l ? l + ", " + o : o;
      n.textShadow = u;
    }
  }
  for (var s in t)
    if (
      // Ignore some React Native styles
      !(Os[s] != null || s === "shadowColor" || s === "shadowOffset" || s === "shadowOpacity" || s === "shadowRadius" || s === "textShadowColor" || s === "textShadowOffset" || s === "textShadowRadius")
    ) {
      var v = t[s], f = Ps[s] || s, h = v;
      if (!(!Object.prototype.hasOwnProperty.call(t, s) || f !== s && t[f] != null))
        if (f === "aspectRatio" && typeof h == "number")
          n[f] = h.toString();
        else if (f === "boxShadow") {
          Array.isArray(h) && (h = xs(h));
          var g = n.boxShadow;
          n.boxShadow = g ? h + ", " + g : h;
        } else f === "fontVariant" ? (Array.isArray(h) && h.length > 0 && (h = h.join(" ")), n[f] = h) : f === "textAlignVertical" ? t.verticalAlign == null && (n.verticalAlign = h === "center" ? "middle" : h) : f === "transform" ? (Array.isArray(h) && (h = ws(h)), n.transform = h) : f === "transformOrigin" ? (Array.isArray(h) && (h = Cs(h)), n.transformOrigin = h) : n[f] = h;
    }
  return n;
}, we = {}, on;
function Ts() {
  if (on) return we;
  on = 1, Object.defineProperty(we, "__esModule", {
    value: !0
  }), we.styleq = void 0;
  var e = /* @__PURE__ */ new WeakMap(), r = "$$css";
  function a(n) {
    var i, o, l;
    return n != null && (i = n.disableCache === !0, o = n.disableMix === !0, l = n.transform), function() {
      for (var s = [], v = "", f = null, h = i ? null : e, g = new Array(arguments.length), p = 0; p < arguments.length; p++)
        g[p] = arguments[p];
      for (; g.length > 0; ) {
        var y = g.pop();
        if (!(y == null || y === !1)) {
          if (Array.isArray(y)) {
            for (var d = 0; d < y.length; d++)
              g.push(y[d]);
            continue;
          }
          var b = l != null ? l(y) : y;
          if (b.$$css) {
            var c = "";
            if (h != null && h.has(b)) {
              var x = h.get(b);
              x != null && (c = x[0], s.push.apply(s, x[1]), h = x[2]);
            } else {
              var w = [];
              for (var S in b) {
                var E = b[S];
                S !== r && (typeof E == "string" || E === null ? s.includes(S) || (s.push(S), h != null && w.push(S), typeof E == "string" && (c += c ? " " + E : E)) : console.error("styleq: ".concat(S, " typeof ").concat(String(E), ' is not "string" or "null".')));
              }
              if (h != null) {
                var P = /* @__PURE__ */ new WeakMap();
                h.set(b, [c, w, P]), h = P;
              }
            }
            c && (v = v ? c + " " + v : c);
          } else if (o)
            f == null && (f = {}), f = Object.assign({}, b, f);
          else {
            var O = null;
            for (var k in b) {
              var _ = b[k];
              _ !== void 0 && (s.includes(k) || (_ != null && (f == null && (f = {}), O == null && (O = {}), O[k] = _), s.push(k), h = null));
            }
            O != null && (f = Object.assign(O, f));
          }
        }
      }
      var B = [v, f];
      return B;
    };
  }
  var t = a();
  return we.styleq = t, t.factory = a, we;
}
var _s = /* @__PURE__ */ Ts(), ks = ["writingDirection"], Xn = /* @__PURE__ */ new WeakMap(), or = hs(), Un = {
  shadow: !0,
  textShadow: !0
};
function As(e, r) {
  r === void 0 && (r = {});
  var a = r, t = a.writingDirection, n = Se(a, ks), i = t === "rtl";
  return _s.styleq.factory({
    transform(o) {
      var l = Xn.get(o);
      return l != null ? gs.localizeStyle(l, i) : Gn(o, ce(ce({}, Un), n));
    }
  })(e);
}
function Kn(e) {
  e.forEach((r) => {
    var a = r[0], t = r[1];
    or != null && a.forEach((n) => {
      or.insert(n, t);
    });
  });
}
function Ms(e) {
  var r = rs(Gn(e, Un)), a = r[0], t = r[1];
  return Kn(t), a;
}
function Ds(e, r) {
  var a = ts(e, r), t = a[0], n = a[1];
  return Kn(n), t;
}
var Jn = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}, Ls = Zn({
  x: ce({}, Jn)
}).x;
function Zn(e) {
  return Object.keys(e).forEach((r) => {
    var a = e[r];
    if (a != null && a.$$css !== !0) {
      var t;
      r.indexOf("$raw") > -1 ? t = Ds(a, r.split("$raw")[0]) : t = Ms(a), Xn.set(a, t);
    }
  }), e;
}
function Is(e, r) {
  return [e, r];
}
function Bs() {
  for (var e = arguments.length, r = new Array(e), a = 0; a < e; a++)
    r[a] = arguments[a];
  for (var t = r.flat(1 / 0), n = {}, i = 0; i < t.length; i++) {
    var o = t[i];
    o != null && typeof o == "object" && Object.assign(n, o);
  }
  return n;
}
function Ns() {
  return {
    id: or.id,
    textContent: or.getTextContent()
  };
}
function oe(e, r) {
  r === void 0 && (r = {});
  var a = r.writingDirection === "rtl", t = As(e, r);
  return Array.isArray(t) && t[1] != null && (t[1] = as(t[1], a)), t;
}
oe.absoluteFill = Ls;
oe.absoluteFillObject = Jn;
oe.create = Zn;
oe.compose = Is;
oe.flatten = Bs;
oe.getSheet = Ns;
oe.hairlineWidth = 1;
ie && window.__REACT_DEVTOOLS_GLOBAL_HOOK__ && (window.__REACT_DEVTOOLS_GLOBAL_HOOK__.resolveRNStyle = oe.flatten);
var ye = oe, Ws = ["aria-activedescendant", "accessibilityActiveDescendant", "aria-atomic", "accessibilityAtomic", "aria-autocomplete", "accessibilityAutoComplete", "aria-busy", "accessibilityBusy", "aria-checked", "accessibilityChecked", "aria-colcount", "accessibilityColumnCount", "aria-colindex", "accessibilityColumnIndex", "aria-colspan", "accessibilityColumnSpan", "aria-controls", "accessibilityControls", "aria-current", "accessibilityCurrent", "aria-describedby", "accessibilityDescribedBy", "aria-details", "accessibilityDetails", "aria-disabled", "accessibilityDisabled", "aria-errormessage", "accessibilityErrorMessage", "aria-expanded", "accessibilityExpanded", "aria-flowto", "accessibilityFlowTo", "aria-haspopup", "accessibilityHasPopup", "aria-hidden", "accessibilityHidden", "aria-invalid", "accessibilityInvalid", "aria-keyshortcuts", "accessibilityKeyShortcuts", "aria-label", "accessibilityLabel", "aria-labelledby", "accessibilityLabelledBy", "aria-level", "accessibilityLevel", "aria-live", "accessibilityLiveRegion", "aria-modal", "accessibilityModal", "aria-multiline", "accessibilityMultiline", "aria-multiselectable", "accessibilityMultiSelectable", "aria-orientation", "accessibilityOrientation", "aria-owns", "accessibilityOwns", "aria-placeholder", "accessibilityPlaceholder", "aria-posinset", "accessibilityPosInSet", "aria-pressed", "accessibilityPressed", "aria-readonly", "accessibilityReadOnly", "aria-required", "accessibilityRequired", "role", "accessibilityRole", "aria-roledescription", "accessibilityRoleDescription", "aria-rowcount", "accessibilityRowCount", "aria-rowindex", "accessibilityRowIndex", "aria-rowspan", "accessibilityRowSpan", "aria-selected", "accessibilitySelected", "aria-setsize", "accessibilitySetSize", "aria-sort", "accessibilitySort", "aria-valuemax", "accessibilityValueMax", "aria-valuemin", "accessibilityValueMin", "aria-valuenow", "accessibilityValueNow", "aria-valuetext", "accessibilityValueText", "dataSet", "focusable", "id", "nativeID", "pointerEvents", "style", "tabIndex", "testID"], zs = {}, $s = Object.prototype.hasOwnProperty, qs = Array.isArray, js = /[A-Z]/g;
function Hs(e) {
  return "-" + e.toLowerCase();
}
function Fs(e) {
  return e.replace(js, Hs);
}
function ge(e) {
  return qs(e) ? e.join(" ") : e;
}
var Vs = ye.create({
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
}), Ys = (e, r, a) => {
  r || (r = zs);
  var t = r, n = t["aria-activedescendant"], i = t.accessibilityActiveDescendant, o = t["aria-atomic"], l = t.accessibilityAtomic, u = t["aria-autocomplete"], s = t.accessibilityAutoComplete, v = t["aria-busy"], f = t.accessibilityBusy, h = t["aria-checked"], g = t.accessibilityChecked, p = t["aria-colcount"], y = t.accessibilityColumnCount, d = t["aria-colindex"], b = t.accessibilityColumnIndex, c = t["aria-colspan"], x = t.accessibilityColumnSpan, w = t["aria-controls"], S = t.accessibilityControls, E = t["aria-current"], P = t.accessibilityCurrent, O = t["aria-describedby"], k = t.accessibilityDescribedBy, _ = t["aria-details"], B = t.accessibilityDetails, H = t["aria-disabled"], M = t.accessibilityDisabled, K = t["aria-errormessage"], te = t.accessibilityErrorMessage, D = t["aria-expanded"], de = t.accessibilityExpanded, L = t["aria-flowto"], le = t.accessibilityFlowTo, ae = t["aria-haspopup"], J = t.accessibilityHasPopup, ve = t["aria-hidden"], Re = t.accessibilityHidden, he = t["aria-invalid"], be = t.accessibilityInvalid, We = t["aria-keyshortcuts"], xe = t.accessibilityKeyShortcuts, z = t["aria-label"], zi = t.accessibilityLabel, ct = t["aria-labelledby"], $i = t.accessibilityLabelledBy, ft = t["aria-level"], qi = t.accessibilityLevel, dt = t["aria-live"], ji = t.accessibilityLiveRegion, vt = t["aria-modal"], Hi = t.accessibilityModal, ht = t["aria-multiline"], Fi = t.accessibilityMultiline, bt = t["aria-multiselectable"], Vi = t.accessibilityMultiSelectable, pt = t["aria-orientation"], Yi = t.accessibilityOrientation, gt = t["aria-owns"], Gi = t.accessibilityOwns, mt = t["aria-placeholder"], Xi = t.accessibilityPlaceholder, St = t["aria-posinset"], Ui = t.accessibilityPosInSet, yt = t["aria-pressed"], Ki = t.accessibilityPressed, Rt = t["aria-readonly"], Ji = t.accessibilityReadOnly, xt = t["aria-required"], Et = t.accessibilityRequired;
  t.role, t.accessibilityRole;
  var wt = t["aria-roledescription"], Zi = t.accessibilityRoleDescription, Ct = t["aria-rowcount"], Qi = t.accessibilityRowCount, Pt = t["aria-rowindex"], eo = t.accessibilityRowIndex, Ot = t["aria-rowspan"], ro = t.accessibilityRowSpan, Tt = t["aria-selected"], to = t.accessibilitySelected, _t = t["aria-setsize"], ao = t.accessibilitySetSize, kt = t["aria-sort"], no = t.accessibilitySort, At = t["aria-valuemax"], io = t.accessibilityValueMax, Mt = t["aria-valuemin"], oo = t.accessibilityValueMin, Dt = t["aria-valuenow"], lo = t.accessibilityValueNow, Lt = t["aria-valuetext"], so = t.accessibilityValueText, ze = t.dataSet, $e = t.focusable, It = t.id, uo = t.nativeID, Bt = t.pointerEvents, co = t.style, Ee = t.tabIndex, Nt = t.testID, m = Se(t, Ws), fo = H || M, ne = In.propsToAriaRole(r), Wt = n ?? i;
  Wt != null && (m["aria-activedescendant"] = Wt);
  var zt = o != null ? n : l;
  zt != null && (m["aria-atomic"] = zt);
  var $t = u ?? s;
  $t != null && (m["aria-autocomplete"] = $t);
  var qt = v ?? f;
  qt != null && (m["aria-busy"] = qt);
  var jt = h ?? g;
  jt != null && (m["aria-checked"] = jt);
  var Ht = p ?? y;
  Ht != null && (m["aria-colcount"] = Ht);
  var Ft = d ?? b;
  Ft != null && (m["aria-colindex"] = Ft);
  var Vt = c ?? x;
  Vt != null && (m["aria-colspan"] = Vt);
  var Yt = w ?? S;
  Yt != null && (m["aria-controls"] = ge(Yt));
  var Gt = E ?? P;
  Gt != null && (m["aria-current"] = Gt);
  var Xt = O ?? k;
  Xt != null && (m["aria-describedby"] = ge(Xt));
  var Ut = _ ?? B;
  Ut != null && (m["aria-details"] = Ut), fo === !0 && (m["aria-disabled"] = !0, (e === "button" || e === "form" || e === "input" || e === "select" || e === "textarea") && (m.disabled = !0));
  var Kt = K ?? te;
  Kt != null && (m["aria-errormessage"] = Kt);
  var Jt = D ?? de;
  Jt != null && (m["aria-expanded"] = Jt);
  var Zt = L ?? le;
  Zt != null && (m["aria-flowto"] = ge(Zt));
  var Qt = ae ?? J;
  Qt != null && (m["aria-haspopup"] = Qt);
  var ea = ve ?? Re;
  ea === !0 && (m["aria-hidden"] = ea);
  var ra = he ?? be;
  ra != null && (m["aria-invalid"] = ra);
  var ta = We ?? xe;
  ta != null && (m["aria-keyshortcuts"] = ge(ta));
  var aa = z ?? zi;
  aa != null && (m["aria-label"] = aa);
  var na = ct ?? $i;
  na != null && (m["aria-labelledby"] = ge(na));
  var ia = ft ?? qi;
  ia != null && (m["aria-level"] = ia);
  var fr = dt ?? ji;
  fr != null && (m["aria-live"] = fr === "none" ? "off" : fr);
  var oa = vt ?? Hi;
  oa != null && (m["aria-modal"] = oa);
  var la = ht ?? Fi;
  la != null && (m["aria-multiline"] = la);
  var sa = bt ?? Vi;
  sa != null && (m["aria-multiselectable"] = sa);
  var ua = pt ?? Yi;
  ua != null && (m["aria-orientation"] = ua);
  var ca = gt ?? Gi;
  ca != null && (m["aria-owns"] = ge(ca));
  var fa = mt ?? Xi;
  fa != null && (m["aria-placeholder"] = fa);
  var da = St ?? Ui;
  da != null && (m["aria-posinset"] = da);
  var va = yt ?? Ki;
  va != null && (m["aria-pressed"] = va);
  var ha = Rt ?? Ji;
  ha != null && (m["aria-readonly"] = ha, (e === "input" || e === "select" || e === "textarea") && (m.readOnly = !0));
  var ba = xt ?? Et;
  ba != null && (m["aria-required"] = ba, (e === "input" || e === "select" || e === "textarea") && (m.required = Et)), ne != null && (m.role = ne === "none" ? "presentation" : ne);
  var pa = wt ?? Zi;
  pa != null && (m["aria-roledescription"] = pa);
  var ga = Ct ?? Qi;
  ga != null && (m["aria-rowcount"] = ga);
  var ma = Pt ?? eo;
  ma != null && (m["aria-rowindex"] = ma);
  var Sa = Ot ?? ro;
  Sa != null && (m["aria-rowspan"] = Sa);
  var ya = Tt ?? to;
  ya != null && (m["aria-selected"] = ya);
  var Ra = _t ?? ao;
  Ra != null && (m["aria-setsize"] = Ra);
  var xa = kt ?? no;
  xa != null && (m["aria-sort"] = xa);
  var Ea = At ?? io;
  Ea != null && (m["aria-valuemax"] = Ea);
  var wa = Mt ?? oo;
  wa != null && (m["aria-valuemin"] = wa);
  var Ca = Dt ?? lo;
  Ca != null && (m["aria-valuenow"] = Ca);
  var Pa = Lt ?? so;
  if (Pa != null && (m["aria-valuetext"] = Pa), ze != null) {
    for (var dr in ze)
      if ($s.call(ze, dr)) {
        var vo = Fs(dr), Oa = ze[dr];
        Oa != null && (m["data-" + vo] = Oa);
      }
  }
  Ee === 0 || Ee === "0" || Ee === -1 || Ee === "-1" ? m.tabIndex = Ee : ($e === !1 && (m.tabIndex = "-1"), // These native elements are keyboard focusable by default
  e === "a" || e === "button" || e === "input" || e === "select" || e === "textarea" ? ($e === !1 || M === !0) && (m.tabIndex = "-1") : /* These roles are made keyboard focusable by default */ ne === "button" || ne === "checkbox" || ne === "link" || ne === "radio" || ne === "textbox" || ne === "switch" ? $e !== !1 && (m.tabIndex = "0") : $e === !0 && (m.tabIndex = "0"));
  var Ta = ye([co, Bt && Vs[Bt]], ce({
    writingDirection: "ltr"
  }, a)), _a = Ta[0], ka = Ta[1];
  _a && (m.className = _a), ka && (m.style = ka);
  var Aa = It ?? uo;
  return Aa != null && (m.id = Aa), Nt != null && (m["data-testid"] = Nt), m.type == null && e === "button" && (m.type = "button"), m;
}, Gs = /* @__PURE__ */ new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]), ln = /* @__PURE__ */ new Set([
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
]), sn = /* @__PURE__ */ new Map();
function Xs(e) {
  var r = sn.get(e);
  if (r)
    return r;
  var a = !1;
  if (Intl.Locale)
    try {
      var t = new Intl.Locale(e).maximize().script;
      a = Gs.has(t);
    } catch {
      var n = e.split("-")[0];
      a = ln.has(n);
    }
  else {
    var i = e.split("-")[0];
    a = ln.has(i);
  }
  return sn.set(e, a), a;
}
var Us = {
  direction: "ltr",
  locale: "en-US"
}, Qn = /* @__PURE__ */ C.createContext(Us);
function lt(e) {
  return Xs(e) ? "rtl" : "ltr";
}
function Ks(e) {
  var r = e.direction, a = e.locale, t = e.children, n = r || a;
  return n ? /* @__PURE__ */ R.createElement(Qn.Provider, {
    children: t,
    value: {
      direction: a ? lt(a) : r,
      locale: a
    }
  }) : t;
}
function ei() {
  return C.useContext(Qn);
}
var ri = (e, r, a) => {
  var t;
  e && e.constructor === String && (t = In.propsToAccessibilityComponent(r));
  var n = t || e, i = Ys(n, r, a), o = /* @__PURE__ */ R.createElement(n, i), l = i.dir ? /* @__PURE__ */ R.createElement(Ks, {
    children: o,
    direction: i.dir,
    locale: i.lang
  }) : o;
  return l;
}, Ur = (e) => {
  if (e != null) {
    var r = e.nodeType === 1;
    if (r && typeof e.getBoundingClientRect == "function")
      return e.getBoundingClientRect();
  }
}, Me = {
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
}, Js = ["ms", "Moz", "O", "Webkit"], Zs = (e, r) => e + r.charAt(0).toUpperCase() + r.substring(1);
Object.keys(Me).forEach((e) => {
  Js.forEach((r) => {
    Me[Zs(r, e)] = Me[e];
  });
});
function Qs(e, r, a) {
  var t = r == null || typeof r == "boolean" || r === "";
  return t ? "" : !a && typeof r == "number" && r !== 0 && !(Me.hasOwnProperty(e) && Me[e]) ? r + "px" : ("" + r).trim();
}
function eu(e, r) {
  var a = e.style;
  for (var t in r)
    if (r.hasOwnProperty(t)) {
      var n = t.indexOf("--") === 0, i = Qs(t, r[t], n);
      t === "float" && (t = "cssFloat"), n ? a.setProperty(t, i) : a[t] = i;
    }
}
var un = (e) => {
  var r = e.offsetHeight, a = e.offsetWidth, t = e.offsetLeft, n = e.offsetTop;
  for (e = e.offsetParent; e && e.nodeType === 1; )
    t += e.offsetLeft + e.clientLeft - e.scrollLeft, n += e.offsetTop + e.clientTop - e.scrollTop, e = e.offsetParent;
  return n -= window.scrollY, t -= window.scrollX, {
    width: a,
    height: r,
    top: n,
    left: t
  };
}, cn = (e, r, a) => {
  var t = r || e && e.parentNode;
  e && t && setTimeout(() => {
    if (e.isConnected && t.isConnected) {
      var n = un(t), i = un(e), o = i.height, l = i.left, u = i.top, s = i.width, v = l - n.left, f = u - n.top;
      a(v, f, s, o, l, u);
    }
  }, 0);
}, ru = {
  A: !0,
  BODY: !0,
  INPUT: !0,
  SELECT: !0,
  TEXTAREA: !0
}, tr = {
  blur(e) {
    try {
      e.blur();
    } catch {
    }
  },
  focus(e) {
    try {
      var r = e.nodeName;
      e.getAttribute("tabIndex") == null && e.isContentEditable !== !0 && ru[r] == null && e.setAttribute("tabIndex", "-1"), e.focus();
    } catch {
    }
  },
  measure(e, r) {
    cn(e, null, r);
  },
  measureInWindow(e, r) {
    e && setTimeout(() => {
      var a = Ur(e), t = a.height, n = a.left, i = a.top, o = a.width;
      r(n, i, o, t);
    }, 0);
  },
  measureLayout(e, r, a, t) {
    cn(e, r, t);
  },
  updateView(e, r) {
    for (var a in r)
      if (Object.prototype.hasOwnProperty.call(r, a)) {
        var t = r[a];
        switch (a) {
          case "style": {
            eu(e, t);
            break;
          }
          case "class":
          case "className": {
            e.setAttribute("class", t);
            break;
          }
          case "text":
          case "value":
            e.value = t;
            break;
          default:
            e.setAttribute(a, t);
        }
      }
  },
  configureNextLayoutAnimation(e, r) {
    r();
  },
  // mocks
  setLayoutAnimationEnabledExperimental() {
  }
};
function Kr() {
  return Kr = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var a = arguments[r];
      for (var t in a) ({}).hasOwnProperty.call(a, t) && (e[t] = a[t]);
    }
    return e;
  }, Kr.apply(null, arguments);
}
var ti = {
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
}, ai = {
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
}, ni = {
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
}, ii = {
  onBlur: !0,
  onFocus: !0
}, oi = {
  onKeyDown: !0,
  onKeyDownCapture: !0,
  onKeyUp: !0,
  onKeyUpCapture: !0
}, li = {
  onMouseDown: !0,
  onMouseEnter: !0,
  onMouseLeave: !0,
  onMouseMove: !0,
  onMouseOver: !0,
  onMouseOut: !0,
  onMouseUp: !0
}, si = {
  onTouchCancel: !0,
  onTouchCancelCapture: !0,
  onTouchEnd: !0,
  onTouchEndCapture: !0,
  onTouchMove: !0,
  onTouchMoveCapture: !0,
  onTouchStart: !0,
  onTouchStartCapture: !0
}, ui = {
  style: !0
};
function ci(e, r) {
  var a = {};
  for (var t in e)
    e.hasOwnProperty(t) && r[t] === !0 && (a[t] = e[t]);
  return a;
}
var lr = ie ? C.useLayoutEffect : C.useEffect, Jr = "__reactLayoutHandler", Cr = null;
function tu() {
  return ie && typeof window.ResizeObserver < "u" && Cr == null && (Cr = new window.ResizeObserver(function(e) {
    e.forEach((r) => {
      var a = r.target, t = a[Jr];
      typeof t == "function" && tr.measure(a, (n, i, o, l, u, s) => {
        var v = {
          // $FlowFixMe
          nativeEvent: {
            layout: {
              x: n,
              y: i,
              width: o,
              height: l,
              left: u,
              top: s
            }
          },
          timeStamp: Date.now()
        };
        Object.defineProperty(v.nativeEvent, "target", {
          enumerable: !0,
          get: () => r.target
        }), t(v);
      });
    });
  })), Cr;
}
function fi(e, r) {
  var a = tu();
  lr(() => {
    var t = e.current;
    t != null && (t[Jr] = r);
  }, [e, r]), lr(() => {
    var t = e.current;
    return t != null && a != null && (typeof t[Jr] == "function" ? a.observe(t) : a.unobserve(t)), () => {
      t != null && a != null && a.unobserve(t);
    };
  }, [e, a]);
}
function au() {
  for (var e = arguments.length, r = new Array(e), a = 0; a < e; a++)
    r[a] = arguments[a];
  return function(n) {
    r.forEach((i) => {
      if (i != null) {
        if (typeof i == "function") {
          i(n);
          return;
        }
        if (typeof i == "object") {
          i.current = n;
          return;
        }
        console.error("mergeRefs cannot handle Refs of type boolean, number or string, received ref " + String(i));
      }
    });
  };
}
function st() {
  for (var e = arguments.length, r = new Array(e), a = 0; a < e; a++)
    r[a] = arguments[a];
  return C.useMemo(
    () => au(...r),
    // eslint-disable-next-line
    [...r]
  );
}
var fn = typeof Symbol == "function" && typeof /* @__PURE__ */ Symbol() == "symbol" ? /* @__PURE__ */ Symbol() : Object.freeze({});
function Zr(e) {
  var r = C.useRef(fn);
  return r.current === fn && (r.current = e()), r.current;
}
function di(e) {
  e.pointerEvents, e.style;
  var r = Zr(() => (a) => {
    a != null && (a.measure = (t) => tr.measure(a, t), a.measureLayout = (t, n, i) => tr.measureLayout(a, t, i, n), a.measureInWindow = (t) => tr.measureInWindow(a, t));
  });
  return r;
}
var dn = () => {
}, nu = {}, iu = [];
function vn(e) {
  return e > 20 ? e % 20 : e;
}
function vi(e, r) {
  var a, t = !1, n, i, o = e.changedTouches, l = e.type, u = e.metaKey === !0, s = e.shiftKey === !0, v = o && o[0].force || 0, f = vn(o && o[0].identifier || 0), h = o && o[0].clientX || e.clientX, g = o && o[0].clientY || e.clientY, p = o && o[0].pageX || e.pageX, y = o && o[0].pageY || e.pageY, d = typeof e.preventDefault == "function" ? e.preventDefault.bind(e) : dn, b = e.timeStamp;
  function c(P) {
    return Array.prototype.slice.call(P).map((O) => ({
      force: O.force,
      identifier: vn(O.identifier),
      get locationX() {
        return S(O.clientX);
      },
      get locationY() {
        return E(O.clientY);
      },
      pageX: O.pageX,
      pageY: O.pageY,
      target: O.target,
      timestamp: b
    }));
  }
  if (o != null)
    n = c(o), i = c(e.touches);
  else {
    var x = [{
      force: v,
      identifier: f,
      get locationX() {
        return S(h);
      },
      get locationY() {
        return E(g);
      },
      pageX: p,
      pageY: y,
      target: e.target,
      timestamp: b
    }];
    n = x, i = l === "mouseup" || l === "dragstart" ? iu : x;
  }
  var w = {
    bubbles: !0,
    cancelable: !0,
    // `currentTarget` is set before dispatch
    currentTarget: null,
    defaultPrevented: e.defaultPrevented,
    dispatchConfig: nu,
    eventPhase: e.eventPhase,
    isDefaultPrevented() {
      return e.defaultPrevented;
    },
    isPropagationStopped() {
      return t;
    },
    isTrusted: e.isTrusted,
    nativeEvent: {
      altKey: !1,
      ctrlKey: !1,
      metaKey: u,
      shiftKey: s,
      changedTouches: n,
      force: v,
      identifier: f,
      get locationX() {
        return S(h);
      },
      get locationY() {
        return E(g);
      },
      pageX: p,
      pageY: y,
      target: e.target,
      timestamp: b,
      touches: i,
      type: l
    },
    persist: dn,
    preventDefault: d,
    stopPropagation() {
      t = !0;
    },
    target: e.target,
    timeStamp: b,
    touchHistory: r.touchHistory
  };
  function S(P) {
    if (a = a || Ur(w.currentTarget), a)
      return P - a.left;
  }
  function E(P) {
    if (a = a || Ur(w.currentTarget), a)
      return P - a.top;
  }
  return w;
}
var ou = "mousedown", lu = "mousemove", su = "mouseup", uu = "dragstart", cu = "touchstart", fu = "touchmove", du = "touchend", vu = "touchcancel", hu = "scroll", bu = "select", pu = "selectionchange";
function hi(e) {
  return e === cu || e === ou;
}
function bi(e) {
  return e === fu || e === lu;
}
function pi(e) {
  return e === du || e === su || gi(e);
}
function gi(e) {
  return e === vu || e === uu;
}
function gu(e) {
  return e === hu;
}
function mu(e) {
  return e === bu || e === pu;
}
function Su() {
  var e = window.getSelection(), r = e.toString(), a = e.anchorNode, t = e.focusNode, n = a && a.nodeType === window.Node.TEXT_NODE || t && t.nodeType === window.Node.TEXT_NODE;
  return r.length >= 1 && r !== `
` && n;
}
var mi = "__reactResponderId";
function yu(e) {
  if (e.type === "selectionchange") {
    var r = window.getSelection().anchorNode;
    return hn(r);
  } else {
    var a = e.composedPath != null ? e.composedPath() : hn(e.target);
    return a;
  }
}
function hn(e) {
  for (var r = []; e != null && e !== document.body; )
    r.push(e), e = e.parentNode;
  return r;
}
function Ru(e) {
  return e != null ? e[mi] : null;
}
function xu(e, r) {
  e != null && (e[mi] = r);
}
function Eu(e) {
  for (var r = [], a = [], t = yu(e), n = 0; n < t.length; n++) {
    var i = t[n], o = Ru(i);
    o != null && (r.push(o), a.push(i));
  }
  return {
    idPath: r,
    nodePath: a
  };
}
function wu(e, r) {
  var a = e.length, t = r.length;
  if (
    // If either path is empty
    a === 0 || t === 0 || // If the last elements aren't the same there can't be a common ancestor
    // that is connected to the responder system
    e[a - 1] !== r[t - 1]
  )
    return null;
  var n = e[0], i = 0, o = r[0], l = 0;
  a - t > 0 && (i = a - t, n = e[i], a = t), t - a > 0 && (l = t - a, o = r[l], t = a);
  for (var u = a; u--; ) {
    if (n === o)
      return n;
    n = e[i++], o = r[l++];
  }
  return null;
}
function Cu(e, r) {
  if (!r || r.length === 0)
    return !1;
  for (var a = 0; a < r.length; a++) {
    var t = r[a].target;
    if (t != null && e.contains(t))
      return !0;
  }
  return !1;
}
function Pu(e) {
  return e.type === "selectionchange" ? Su() : e.type === "select";
}
function Ou(e) {
  var r = e.altKey, a = e.button, t = e.buttons, n = e.ctrlKey, i = e.type, o = i === "touchstart" || i === "touchmove", l = i === "mousedown" && (a === 0 || t === 1), u = i === "mousemove" && t === 1, s = r === !1 && n === !1;
  return !!(o || l && s || u && s);
}
var bn = 20;
function F(e) {
  return e.timeStamp || e.timestamp;
}
function Tu(e) {
  return {
    touchActive: !0,
    startPageX: e.pageX,
    startPageY: e.pageY,
    startTimeStamp: F(e),
    currentPageX: e.pageX,
    currentPageY: e.pageY,
    currentTimeStamp: F(e),
    previousPageX: e.pageX,
    previousPageY: e.pageY,
    previousTimeStamp: F(e)
  };
}
function _u(e, r) {
  e.touchActive = !0, e.startPageX = r.pageX, e.startPageY = r.pageY, e.startTimeStamp = F(r), e.currentPageX = r.pageX, e.currentPageY = r.pageY, e.currentTimeStamp = F(r), e.previousPageX = r.pageX, e.previousPageY = r.pageY, e.previousTimeStamp = F(r);
}
function ut(e) {
  var r = e.identifier;
  return r == null && console.error("Touch object is missing identifier."), r;
}
function ku(e, r) {
  var a = ut(e), t = r.touchBank[a];
  t ? _u(t, e) : r.touchBank[a] = Tu(e), r.mostRecentTimeStamp = F(e);
}
function Au(e, r) {
  var a = r.touchBank[ut(e)];
  a ? (a.touchActive = !0, a.previousPageX = a.currentPageX, a.previousPageY = a.currentPageY, a.previousTimeStamp = a.currentTimeStamp, a.currentPageX = e.pageX, a.currentPageY = e.pageY, a.currentTimeStamp = F(e), r.mostRecentTimeStamp = F(e)) : console.warn(`Cannot record touch move without a touch start.
`, "Touch Move: " + Si(e) + `
`, "Touch Bank: " + yi(r));
}
function Mu(e, r) {
  var a = r.touchBank[ut(e)];
  a ? (a.touchActive = !1, a.previousPageX = a.currentPageX, a.previousPageY = a.currentPageY, a.previousTimeStamp = a.currentTimeStamp, a.currentPageX = e.pageX, a.currentPageY = e.pageY, a.currentTimeStamp = F(e), r.mostRecentTimeStamp = F(e)) : console.warn(`Cannot record touch end without a touch start.
`, "Touch End: " + Si(e) + `
`, "Touch Bank: " + yi(r));
}
function Si(e) {
  return JSON.stringify({
    identifier: e.identifier,
    pageX: e.pageX,
    pageY: e.pageY,
    timestamp: F(e)
  });
}
function yi(e) {
  var r = e.touchBank, a = JSON.stringify(r.slice(0, bn));
  return r.length > bn && (a += " (original size: " + r.length + ")"), a;
}
class Du {
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
  recordTouchTrack(r, a) {
    var t = this._touchHistory;
    if (bi(r))
      a.changedTouches.forEach((l) => Au(l, t));
    else if (hi(r))
      a.changedTouches.forEach((l) => ku(l, t)), t.numberActiveTouches = a.touches.length, t.numberActiveTouches === 1 && (t.indexOfSingleActiveTouch = a.touches[0].identifier);
    else if (pi(r) && (a.changedTouches.forEach((l) => Mu(l, t)), t.numberActiveTouches = a.touches.length, t.numberActiveTouches === 1))
      for (var n = t.touchBank, i = 0; i < n.length; i++) {
        var o = n[i];
        if (o != null && o.touchActive) {
          t.indexOfSingleActiveTouch = i;
          break;
        }
      }
  }
  get touchHistory() {
    return this._touchHistory;
  }
}
var Lu = {}, pn = ["onStartShouldSetResponderCapture", "onStartShouldSetResponder", {
  bubbles: !0
}], gn = ["onMoveShouldSetResponderCapture", "onMoveShouldSetResponder", {
  bubbles: !0
}], Iu = ["onScrollShouldSetResponderCapture", "onScrollShouldSetResponder", {
  bubbles: !1
}], Bu = {
  touchstart: pn,
  mousedown: pn,
  touchmove: gn,
  mousemove: gn,
  scroll: Iu
}, Qr = {
  id: null,
  idPath: null,
  node: null
}, sr = /* @__PURE__ */ new Map(), se = !1, Z = 0, ee = {
  id: null,
  node: null,
  idPath: null
}, et = new Du();
function Be(e) {
  ee = e;
}
function Ne(e) {
  var r = sr.get(e);
  return r ?? Lu;
}
function Pr(e) {
  var r = e.type, a = e.target;
  if (r === "touchstart" && (se = !0), (r === "touchmove" || Z > 1) && (se = !1), // Ignore browser emulated mouse events
  !(r === "mousedown" && se || r === "mousemove" && se || // Ignore mousemove if a mousedown didn't occur first
  r === "mousemove" && Z < 1)) {
    if (se && r === "mouseup") {
      Z === 0 && (se = !1);
      return;
    }
    var t = hi(r) && Ou(e), n = bi(r), i = pi(r), o = gu(r), l = mu(r), u = vi(e, et);
    (t || n || i) && (e.touches ? Z = e.touches.length : t ? Z = 1 : i && (Z = 0), et.recordTouchTrack(r, u.nativeEvent));
    var s = Eu(e), v = !1, f;
    if (t || n || o && Z > 0) {
      var h = ee.idPath, g = s.idPath;
      if (h != null && g != null) {
        var p = wu(h, g);
        if (p != null) {
          var y = g.indexOf(p), d = y + (p === ee.id ? 1 : 0);
          s = {
            idPath: g.slice(d),
            nodePath: s.nodePath.slice(d)
          };
        } else
          s = null;
      }
      s != null && (f = Nu(s, e, u), f != null && (Wu(u, f), v = !0));
    }
    if (ee.id != null && ee.node != null) {
      var b = ee, c = b.id, x = b.node, w = Ne(c), S = w.onResponderStart, E = w.onResponderMove, P = w.onResponderEnd, O = w.onResponderRelease, k = w.onResponderTerminate, _ = w.onResponderTerminationRequest;
      if (u.bubbles = !1, u.cancelable = !1, u.currentTarget = x, t)
        S != null && (u.dispatchConfig.registrationName = "onResponderStart", S(u));
      else if (n)
        E != null && (u.dispatchConfig.registrationName = "onResponderMove", E(u));
      else {
        var B = gi(r) || // native context menu
        r === "contextmenu" || // window blur
        r === "blur" && a === window || // responder (or ancestors) blur
        r === "blur" && a.contains(x) && e.relatedTarget !== x || // native scroll without using a pointer
        o && Z === 0 || // native scroll on node that is parent of the responder (allow siblings to scroll)
        o && a.contains(x) && a !== x || // native select/selectionchange on node
        l && Pu(e), H = i && !B && !Cu(x, e.touches);
        if (i && P != null && (u.dispatchConfig.registrationName = "onResponderEnd", P(u)), H && (O != null && (u.dispatchConfig.registrationName = "onResponderRelease", O(u)), Be(Qr)), B) {
          var M = !0;
          (r === "contextmenu" || r === "scroll" || r === "selectionchange") && (v ? M = !1 : _ != null && (u.dispatchConfig.registrationName = "onResponderTerminationRequest", _(u) === !1 && (M = !1))), M && (k != null && (u.dispatchConfig.registrationName = "onResponderTerminate", k(u)), Be(Qr), se = !1, Z = 0);
        }
      }
    }
  }
}
function Nu(e, r, a) {
  var t = Bu[r.type];
  if (t != null) {
    for (var n = e.idPath, i = e.nodePath, o = t[0], l = t[1], u = t[2].bubbles, s = function(E, P, O) {
      var k = Ne(E), _ = k[O];
      if (_ != null && (a.currentTarget = P, _(a) === !0)) {
        var B = n.slice(n.indexOf(E));
        return {
          id: E,
          node: P,
          idPath: B
        };
      }
    }, v = n.length - 1; v >= 0; v--) {
      var f = n[v], h = i[v], g = s(f, h, o);
      if (g != null)
        return g;
      if (a.isPropagationStopped() === !0)
        return;
    }
    if (u)
      for (var p = 0; p < n.length; p++) {
        var y = n[p], d = i[p], b = s(y, d, l);
        if (b != null)
          return b;
        if (a.isPropagationStopped() === !0)
          return;
      }
    else {
      var c = n[0], x = i[0], w = r.target;
      if (w === x)
        return s(c, x, l);
    }
  }
}
function Wu(e, r) {
  var a = ee, t = a.id, n = a.node, i = r.id, o = r.node, l = Ne(i), u = l.onResponderGrant, s = l.onResponderReject;
  if (e.bubbles = !1, e.cancelable = !1, e.currentTarget = o, t == null)
    u != null && (e.currentTarget = o, e.dispatchConfig.registrationName = "onResponderGrant", u(e)), Be(r);
  else {
    var v = Ne(t), f = v.onResponderTerminate, h = v.onResponderTerminationRequest, g = !0;
    h != null && (e.currentTarget = n, e.dispatchConfig.registrationName = "onResponderTerminationRequest", h(e) === !1 && (g = !1)), g ? (f != null && (e.currentTarget = n, e.dispatchConfig.registrationName = "onResponderTerminate", f(e)), u != null && (e.currentTarget = o, e.dispatchConfig.registrationName = "onResponderGrant", u(e)), Be(r)) : s != null && (e.currentTarget = o, e.dispatchConfig.registrationName = "onResponderReject", s(e));
  }
}
var zu = ["blur", "scroll"], $u = [
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
function qu() {
  ie && window.__reactResponderSystemActive == null && (window.addEventListener("blur", Pr), $u.forEach((e) => {
    document.addEventListener(e, Pr);
  }), zu.forEach((e) => {
    document.addEventListener(e, Pr, !0);
  }), window.__reactResponderSystemActive = !0);
}
function ju(e, r, a) {
  xu(r, e), sr.set(e, a);
}
function mn(e) {
  ee.id === e && Hu(), sr.has(e) && sr.delete(e);
}
function Hu() {
  var e = ee, r = e.id, a = e.node;
  if (r != null && a != null) {
    var t = Ne(r), n = t.onResponderTerminate;
    if (n != null) {
      var i = vi({}, et);
      i.currentTarget = a, n(i);
    }
    Be(Qr);
  }
  se = !1, Z = 0;
}
function Fu() {
  return ee.node;
}
var Vu = {}, Yu = 0;
function Gu(e) {
  var r = C.useRef(null);
  return r.current == null && (r.current = e()), r.current;
}
function Ri(e, r) {
  r === void 0 && (r = Vu);
  var a = Gu(() => Yu++), t = C.useRef(!1);
  C.useEffect(() => (qu(), () => {
    mn(a);
  }), [a]), C.useEffect(() => {
    var n = r, i = n.onMoveShouldSetResponder, o = n.onMoveShouldSetResponderCapture, l = n.onScrollShouldSetResponder, u = n.onScrollShouldSetResponderCapture, s = n.onSelectionChangeShouldSetResponder, v = n.onSelectionChangeShouldSetResponderCapture, f = n.onStartShouldSetResponder, h = n.onStartShouldSetResponderCapture, g = i != null || o != null || l != null || u != null || s != null || v != null || f != null || h != null, p = e.current;
    g ? (ju(a, p, r), t.current = !0) : t.current && (mn(a), t.current = !1);
  }, [r, e, a]), C.useDebugValue({
    isResponder: e.current === Fu()
  }), C.useDebugValue(r);
}
var rt = /* @__PURE__ */ C.createContext(!1), Xu = ["hrefAttrs", "onLayout", "onMoveShouldSetResponder", "onMoveShouldSetResponderCapture", "onResponderEnd", "onResponderGrant", "onResponderMove", "onResponderReject", "onResponderRelease", "onResponderStart", "onResponderTerminate", "onResponderTerminationRequest", "onScrollShouldSetResponder", "onScrollShouldSetResponderCapture", "onSelectionChangeShouldSetResponder", "onSelectionChangeShouldSetResponderCapture", "onStartShouldSetResponder", "onStartShouldSetResponderCapture"], Uu = Object.assign({}, ti, ai, ni, ii, oi, li, si, ui, {
  href: !0,
  lang: !0,
  onScroll: !0,
  onWheel: !0,
  pointerEvents: !0
}), Ku = (e) => ci(e, Uu), xi = /* @__PURE__ */ C.forwardRef((e, r) => {
  var a = e.hrefAttrs, t = e.onLayout, n = e.onMoveShouldSetResponder, i = e.onMoveShouldSetResponderCapture, o = e.onResponderEnd, l = e.onResponderGrant, u = e.onResponderMove, s = e.onResponderReject, v = e.onResponderRelease, f = e.onResponderStart, h = e.onResponderTerminate, g = e.onResponderTerminationRequest, p = e.onScrollShouldSetResponder, y = e.onScrollShouldSetResponderCapture, d = e.onSelectionChangeShouldSetResponder, b = e.onSelectionChangeShouldSetResponderCapture, c = e.onStartShouldSetResponder, x = e.onStartShouldSetResponderCapture, w = Se(e, Xu), S = C.useContext(rt), E = C.useRef(null), P = ei(), O = P.direction;
  fi(E, t), Ri(E, {
    onMoveShouldSetResponder: n,
    onMoveShouldSetResponderCapture: i,
    onResponderEnd: o,
    onResponderGrant: l,
    onResponderMove: u,
    onResponderReject: s,
    onResponderRelease: v,
    onResponderStart: f,
    onResponderTerminate: h,
    onResponderTerminationRequest: g,
    onScrollShouldSetResponder: p,
    onScrollShouldSetResponderCapture: y,
    onSelectionChangeShouldSetResponder: d,
    onSelectionChangeShouldSetResponderCapture: b,
    onStartShouldSetResponder: c,
    onStartShouldSetResponderCapture: x
  });
  var k = "div", _ = e.lang != null ? lt(e.lang) : null, B = e.dir || _, H = B || O, M = Ku(w);
  if (M.dir = B, M.style = [Sn.view$raw, S && Sn.inline, e.style], e.href != null && (k = "a", a != null)) {
    var K = a.download, te = a.rel, D = a.target;
    K != null && (M.download = K), te != null && (M.rel = te), typeof D == "string" && (M.target = D.charAt(0) !== "_" ? "_" + D : D);
  }
  var de = di(M), L = st(E, de, r);
  return M.ref = L, ri(k, M, {
    writingDirection: H
  });
});
xi.displayName = "View";
var Sn = ye.create({
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
}), Ju = ["hrefAttrs", "numberOfLines", "onClick", "onLayout", "onPress", "onMoveShouldSetResponder", "onMoveShouldSetResponderCapture", "onResponderEnd", "onResponderGrant", "onResponderMove", "onResponderReject", "onResponderRelease", "onResponderStart", "onResponderTerminate", "onResponderTerminationRequest", "onScrollShouldSetResponder", "onScrollShouldSetResponderCapture", "onSelectionChangeShouldSetResponder", "onSelectionChangeShouldSetResponderCapture", "onStartShouldSetResponder", "onStartShouldSetResponderCapture", "selectable"], Zu = Object.assign({}, ti, ai, ni, ii, oi, li, si, ui, {
  href: !0,
  lang: !0,
  pointerEvents: !0
}), Qu = (e) => ci(e, Zu), Ei = /* @__PURE__ */ C.forwardRef((e, r) => {
  var a = e.hrefAttrs, t = e.numberOfLines, n = e.onClick, i = e.onLayout, o = e.onPress, l = e.onMoveShouldSetResponder, u = e.onMoveShouldSetResponderCapture, s = e.onResponderEnd, v = e.onResponderGrant, f = e.onResponderMove, h = e.onResponderReject, g = e.onResponderRelease, p = e.onResponderStart, y = e.onResponderTerminate, d = e.onResponderTerminationRequest, b = e.onScrollShouldSetResponder, c = e.onScrollShouldSetResponderCapture, x = e.onSelectionChangeShouldSetResponder, w = e.onSelectionChangeShouldSetResponderCapture, S = e.onStartShouldSetResponder, E = e.onStartShouldSetResponderCapture, P = e.selectable, O = Se(e, Ju), k = C.useContext(rt), _ = C.useRef(null), B = ei(), H = B.direction;
  fi(_, i), Ri(_, {
    onMoveShouldSetResponder: l,
    onMoveShouldSetResponderCapture: u,
    onResponderEnd: s,
    onResponderGrant: v,
    onResponderMove: f,
    onResponderReject: h,
    onResponderRelease: g,
    onResponderStart: p,
    onResponderTerminate: y,
    onResponderTerminationRequest: d,
    onScrollShouldSetResponder: b,
    onScrollShouldSetResponderCapture: c,
    onSelectionChangeShouldSetResponder: x,
    onSelectionChangeShouldSetResponderCapture: w,
    onStartShouldSetResponder: S,
    onStartShouldSetResponderCapture: E
  });
  var M = C.useCallback((be) => {
    n != null ? n(be) : o != null && (be.stopPropagation(), o(be));
  }, [n, o]), K = k ? "span" : "div", te = e.lang != null ? lt(e.lang) : null, D = e.dir || te, de = D || H, L = Qu(O);
  if (L.dir = D, k || (L.dir = D ?? "auto"), (n || o) && (L.onClick = M), L.style = [t != null && t > 1 && {
    WebkitLineClamp: t
  }, k === !0 ? pe.textHasAncestor$raw : pe.text$raw, t === 1 && pe.textOneLine, t != null && t > 1 && pe.textMultiLine, e.style, P === !0 && pe.selectable, P === !1 && pe.notSelectable, o && pe.pressable], e.href != null && (K = "a", a != null)) {
    var le = a.download, ae = a.rel, J = a.target;
    le != null && (L.download = le), ae != null && (L.rel = ae), typeof J == "string" && (L.target = J.charAt(0) !== "_" ? "_" + J : J);
  }
  var ve = di(L), Re = st(_, ve, r);
  L.ref = Re;
  var he = ri(K, L, {
    writingDirection: de
  });
  return k ? he : /* @__PURE__ */ C.createElement(rt.Provider, {
    value: !0
  }, he);
});
Ei.displayName = "Text";
var yn = {
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
}, pe = ye.create({
  text$raw: yn,
  textHasAncestor$raw: ce(ce({}, yn), {}, {
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
}), Rn = "DELAY", G = "ERROR", xn = "LONG_PRESS_DETECTED", N = "NOT_RESPONDER", me = "RESPONDER_ACTIVE_LONG_PRESS_START", cr = "RESPONDER_ACTIVE_PRESS_START", tt = "RESPONDER_INACTIVE_PRESS_START", ec = "RESPONDER_GRANT", ar = "RESPONDER_RELEASE", wi = "RESPONDER_TERMINATED", En = Object.freeze({
  NOT_RESPONDER: {
    DELAY: G,
    RESPONDER_GRANT: tt,
    RESPONDER_RELEASE: G,
    RESPONDER_TERMINATED: G,
    LONG_PRESS_DETECTED: G
  },
  RESPONDER_INACTIVE_PRESS_START: {
    DELAY: cr,
    RESPONDER_GRANT: G,
    RESPONDER_RELEASE: N,
    RESPONDER_TERMINATED: N,
    LONG_PRESS_DETECTED: G
  },
  RESPONDER_ACTIVE_PRESS_START: {
    DELAY: G,
    RESPONDER_GRANT: G,
    RESPONDER_RELEASE: N,
    RESPONDER_TERMINATED: N,
    LONG_PRESS_DETECTED: me
  },
  RESPONDER_ACTIVE_LONG_PRESS_START: {
    DELAY: G,
    RESPONDER_GRANT: G,
    RESPONDER_RELEASE: N,
    RESPONDER_TERMINATED: N,
    LONG_PRESS_DETECTED: me
  },
  ERROR: {
    DELAY: N,
    RESPONDER_GRANT: tt,
    RESPONDER_RELEASE: N,
    RESPONDER_TERMINATED: N,
    LONG_PRESS_DETECTED: N
  }
}), Ci = (e) => e.getAttribute("role"), at = (e) => e.tagName.toLowerCase(), wn = (e) => e === cr || e === me, nr = (e) => Ci(e) === "button", Cn = (e) => e === tt || e === cr || e === me, rc = (e) => e === wi || e === ar, Pn = (e) => {
  var r = e.key, a = e.target, t = r === " " || r === "Spacebar", n = at(a) === "button" || nr(a);
  return r === "Enter" || t && n;
}, tc = 450, ac = 50;
class nc {
  constructor(r) {
    this._eventHandlers = null, this._isPointerTouch = !1, this._longPressDelayTimeout = null, this._longPressDispatched = !1, this._pressDelayTimeout = null, this._pressOutDelayTimeout = null, this._touchState = N, this._responderElement = null, this.configure(r);
  }
  configure(r) {
    this._config = r;
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
    var r = (n, i) => {
      n.persist(), this._cancelPressOutDelayTimeout(), this._longPressDispatched = !1, this._selectionTerminated = !1, this._touchState = N, this._isPointerTouch = n.nativeEvent.type === "touchstart", this._receiveSignal(ec, n);
      var o = Or(this._config.delayPressStart, 0, ac);
      i !== !1 && o > 0 ? this._pressDelayTimeout = setTimeout(() => {
        this._receiveSignal(Rn, n);
      }, o) : this._receiveSignal(Rn, n);
      var l = Or(this._config.delayLongPress, 10, tc);
      this._longPressDelayTimeout = setTimeout(() => {
        this._handleLongPress(n);
      }, l + o);
    }, a = (n) => {
      this._receiveSignal(ar, n);
    }, t = (n) => {
      var i = this._config.onPress, o = n.target;
      if (this._touchState !== N && Pn(n)) {
        a(n), document.removeEventListener("keyup", t);
        var l = o.getAttribute("role"), u = at(o), s = l === "link" || u === "a" || u === "button" || u === "input" || u === "select" || u === "textarea", v = this._responderElement === o;
        i != null && !s && v && i(n), this._responderElement = null;
      }
    };
    return {
      onStartShouldSetResponder: (n) => {
        var i = this._config.disabled;
        return i && nr(n.currentTarget) && n.stopPropagation(), i == null ? !0 : !i;
      },
      onKeyDown: (n) => {
        var i = this._config.disabled, o = n.key, l = n.target;
        if (!i && Pn(n)) {
          this._touchState === N && (r(n, !1), this._responderElement = l, document.addEventListener("keyup", t));
          var u = o === " " || o === "Spacebar", s = Ci(l), v = s === "button" || s === "menuitem";
          u && v && at(l) !== "button" && n.preventDefault(), n.stopPropagation();
        }
      },
      onResponderGrant: (n) => r(n),
      onResponderMove: (n) => {
        this._config.onPressMove != null && this._config.onPressMove(n);
        var i = On(n);
        if (this._touchActivatePosition != null) {
          var o = this._touchActivatePosition.pageX - i.pageX, l = this._touchActivatePosition.pageY - i.pageY;
          Math.hypot(o, l) > 10 && this._cancelLongPressDelayTimeout();
        }
      },
      onResponderRelease: (n) => a(n),
      onResponderTerminate: (n) => {
        n.nativeEvent.type === "selectionchange" && (this._selectionTerminated = !0), this._receiveSignal(wi, n);
      },
      onResponderTerminationRequest: (n) => {
        var i = this._config, o = i.cancelable, l = i.disabled, u = i.onLongPress;
        return !l && u != null && this._isPointerTouch && n.nativeEvent.type === "contextmenu" ? !1 : o ?? !0;
      },
      // NOTE: this diverges from react-native in 3 significant ways:
      // * The `onPress` callback is not connected to the responder system (the native
      //  `click` event must be used but is dispatched in many scenarios where no pointers
      //   are on the screen.) Therefore, it's possible for `onPress` to be called without
      //   `onPress{Start,End}` being called first.
      // * The `onPress` callback is only be called on the first ancestor of the native
      //   `click` target that is using the PressResponder.
      // * The event's `nativeEvent` is a `MouseEvent` not a `TouchEvent`.
      onClick: (n) => {
        var i = this._config, o = i.disabled, l = i.onPress;
        o ? nr(n.currentTarget) && n.stopPropagation() : (n.stopPropagation(), this._longPressDispatched || this._selectionTerminated ? n.preventDefault() : l != null && n.altKey === !1 && l(n));
      },
      // If `onLongPress` is provided and a touch pointer is being used, prevent the
      // default context menu from opening.
      onContextMenu: (n) => {
        var i = this._config, o = i.disabled, l = i.onLongPress;
        o ? nr(n.currentTarget) && n.stopPropagation() : l != null && this._isPointerTouch && !n.defaultPrevented && (n.preventDefault(), n.stopPropagation());
      }
    };
  }
  /**
   * Receives a state machine signal, performs side effects of the transition
   * and stores the new state. Validates the transition as well.
   */
  _receiveSignal(r, a) {
    var t = this._touchState, n = null;
    En[t] != null && (n = En[t][r]), !(this._touchState === N && r === ar) && (n == null || n === G ? console.error("PressResponder: Invalid signal " + r + " for state " + t + " on responder") : t !== n && (this._performTransitionSideEffects(t, n, r, a), this._touchState = n));
  }
  /**
   * Performs a transition between touchable states and identify any activations
   * or deactivations (and callback invocations).
   */
  _performTransitionSideEffects(r, a, t, n) {
    if (rc(t) && (setTimeout(() => {
      this._isPointerTouch = !1;
    }, 0), this._touchActivatePosition = null, this._cancelLongPressDelayTimeout()), Cn(r) && t === xn) {
      var i = this._config.onLongPress;
      i != null && n.nativeEvent.key == null && (i(n), this._longPressDispatched = !0);
    }
    var o = wn(r), l = wn(a);
    if (!o && l ? this._activate(n) : o && !l && this._deactivate(n), Cn(r) && t === ar) {
      var u = this._config, s = u.onLongPress, v = u.onPress;
      if (v != null) {
        var f = s != null && r === me;
        f || !l && !o && (this._activate(n), this._deactivate(n));
      }
    }
    this._cancelPressDelayTimeout();
  }
  _activate(r) {
    var a = this._config, t = a.onPressChange, n = a.onPressStart, i = On(r);
    this._touchActivatePosition = {
      pageX: i.pageX,
      pageY: i.pageY
    }, n?.(r), t?.(!0);
  }
  _deactivate(r) {
    var a = this._config, t = a.onPressChange, n = a.onPressEnd;
    function i() {
      n?.(r), t?.(!1);
    }
    var o = Or(this._config.delayPressEnd);
    o > 0 ? this._pressOutDelayTimeout = setTimeout(() => {
      i();
    }, o) : i();
  }
  _handleLongPress(r) {
    (this._touchState === cr || this._touchState === me) && this._receiveSignal(xn, r);
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
function Or(e, r, a) {
  return r === void 0 && (r = 0), a === void 0 && (a = 0), Math.max(r, e ?? a);
}
function On(e) {
  var r = e.nativeEvent, a = r.changedTouches, t = r.touches;
  return t != null && t.length > 0 ? t[0] : a != null && a.length > 0 ? a[0] : e.nativeEvent;
}
function ic(e, r) {
  var a = C.useRef(null);
  a.current == null && (a.current = new nc(r));
  var t = a.current;
  return C.useEffect(() => {
    t.configure(r);
  }, [r, t]), C.useEffect(() => () => {
    t.reset();
  }, [t]), C.useDebugValue(r), t.getEventHandlers();
}
var oc = () => {
};
function lc() {
  var e = !1;
  if (ie)
    try {
      var r = {};
      Object.defineProperty(r, "passive", {
        get() {
          return e = !0, !1;
        }
      }), window.addEventListener("test", null, r), window.removeEventListener("test", null, r);
    } catch {
    }
  return e;
}
var sc = lc();
function uc(e) {
  return e == null ? !1 : sc ? e : !!e.capture;
}
function cc() {
  return this.cancelBubble;
}
function fc() {
  return this.defaultPrevented;
}
function dc(e) {
  return e.nativeEvent = e, e.persist = oc, e.isDefaultPrevented = fc, e.isPropagationStopped = cc, e;
}
function I(e, r, a, t) {
  var n = uc(t), i = (o) => a(dc(o));
  return e.addEventListener(r, i, n), function() {
    e?.removeEventListener(r, i, n);
  };
}
var vc = () => typeof window < "u" && window.PointerEvent != null, U = "keyboard", q = "keyboard", Te, _e, ke = !1, hc = /* @__PURE__ */ new Set(), De = "keyboard", Ce = "mouse", Tr = "touch", bc = "blur", Pi = "contextmenu", pc = "focus", gc = "keydown", Oi = "mousedown", Ti = "mousemove", _i = "mouseup", ki = "pointerdown", Ai = "pointermove", Mi = "scroll", Di = "selectionchange", Li = "touchcancel", Ii = "touchmove", Bi = "touchstart", mc = "visibilitychange", Tn = {
  passive: !0
}, j = {
  capture: !0,
  passive: !0
};
function Ni() {
  (Te != null || _e != null) && (Te != null && (q = Te, Te = null), _e != null && (U = _e, _e = null), ue());
}
function Sc() {
  Te = q, _e = U, U = De, q = De, ue(), ke = !1;
}
function yc() {
  Ni();
}
function Rc(e) {
  e.metaKey || e.altKey || e.ctrlKey || q !== De && (q = De, U = De, ue());
}
function xc() {
  document.visibilityState !== "hidden" && Ni();
}
function Y(e) {
  var r = e.type;
  if (vc()) {
    if (r === ki) {
      U !== e.pointerType && (q = e.pointerType, U = e.pointerType, ue());
      return;
    }
    if (r === Ai) {
      q !== e.pointerType && (q = e.pointerType, ue());
      return;
    }
  } else {
    if (ke || (r === Oi && U !== Ce && (q = Ce, U = Ce, ue()), r === Ti && q !== Ce && (q = Ce, ue())), r === Bi) {
      ke = !0, e.touches && e.touches.length > 1 && (ke = !1), U !== Tr && (q = Tr, U = Tr, ue());
      return;
    }
    (r === Pi || r === _i || r === Di || r === Mi || r === Li || r === Ii) && (ke = !1);
  }
}
ie && (I(window, bc, Sc, Tn), I(window, pc, yc, Tn), I(document, gc, Rc, j), I(document, mc, xc, j), I(document, ki, Y, j), I(document, Ai, Y, j), I(document, Pi, Y, j), I(document, Oi, Y, j), I(document, Ti, Y, j), I(document, _i, Y, j), I(document, Li, Y, j), I(document, Ii, Y, j), I(document, Bi, Y, j), I(document, Di, Y, j), I(document, Mi, Y, j));
function ue() {
  var e = {
    activeModality: U,
    modality: q
  };
  hc.forEach((r) => {
    r(e);
  });
}
function Ec() {
  return q;
}
function Pe(e, r) {
  var a = Zr(() => /* @__PURE__ */ new Map()), t = Zr(() => (n, i) => {
    var o = a.get(n);
    o?.(), i == null && (a.delete(n), i = () => {
    });
    var l = I(n, e, i, r);
    return a.set(n, l), l;
  });
  return lr(() => () => {
    a.forEach((n) => {
      n();
    }), a.clear();
  }, [a]), t;
}
var wc = {}, Oe = {
  passive: !0
}, _n = "react-gui:hover:lock", kn = "react-gui:hover:unlock", Cc = () => typeof window < "u" && window.PointerEvent != null;
function An(e, r, a) {
  var t = document.createEvent("CustomEvent"), n = wc, i = n.bubbles, o = i === void 0 ? !0 : i, l = n.cancelable, u = l === void 0 ? !0 : l, s = n.detail;
  t.initCustomEvent(r, o, u, s), e.dispatchEvent(t);
}
function _r(e) {
  var r = e.pointerType;
  return r ?? Ec();
}
function Pc(e, r) {
  var a = r.contain, t = r.disabled, n = r.onHoverStart, i = r.onHoverChange, o = r.onHoverUpdate, l = r.onHoverEnd, u = Cc(), s = Pe(u ? "pointermove" : "mousemove", Oe), v = Pe(u ? "pointerenter" : "mouseenter", Oe), f = Pe(u ? "pointerleave" : "mouseleave", Oe), h = Pe(_n, Oe), g = Pe(kn, Oe);
  lr(() => {
    var p = e.current;
    if (p !== null) {
      var y = function(S) {
        l?.(S), i?.(!1), s(p, null), f(p, null);
      }, d = function(S) {
        var E = e.current;
        E != null && _r(S) !== "touch" && (a && An(E, kn), y(S));
      }, b = function(S) {
        _r(S) !== "touch" && o != null && (S.x == null && (S.x = S.clientX), S.y == null && (S.y = S.clientY), o(S));
      }, c = function(S) {
        n?.(S), i?.(!0), o != null && s(p, t ? null : b), f(p, t ? null : d);
      }, x = function(S) {
        var E = e.current;
        if (E != null && _r(S) !== "touch") {
          a && An(E, _n), c(S);
          var P = function(_) {
            _.target !== E && y(S);
          }, O = function(_) {
            _.target !== E && c(S);
          };
          h(E, t ? null : P), g(E, t ? null : O);
        }
      };
      v(p, t ? null : x);
    }
  }, [v, s, f, h, g, a, t, n, i, o, l, e]);
}
var Oc = ["children", "delayLongPress", "delayPressIn", "delayPressOut", "disabled", "onBlur", "onContextMenu", "onFocus", "onHoverIn", "onHoverOut", "onKeyDown", "onLongPress", "onPress", "onPressMove", "onPressIn", "onPressOut", "style", "tabIndex", "testOnly_hovered", "testOnly_pressed"];
function Tc(e, r) {
  var a = e.children, t = e.delayLongPress, n = e.delayPressIn, i = e.delayPressOut, o = e.disabled, l = e.onBlur, u = e.onContextMenu, s = e.onFocus, v = e.onHoverIn, f = e.onHoverOut, h = e.onKeyDown, g = e.onLongPress, p = e.onPress, y = e.onPressMove, d = e.onPressIn, b = e.onPressOut, c = e.style, x = e.tabIndex, w = e.testOnly_hovered, S = e.testOnly_pressed, E = Se(e, Oc), P = kr(w === !0), O = P[0], k = P[1], _ = kr(!1), B = _[0], H = _[1], M = kr(S === !0), K = M[0], te = M[1], D = C.useRef(null), de = st(r, D), L = C.useMemo(() => ({
    delayLongPress: t,
    delayPressStart: n,
    delayPressEnd: i,
    disabled: o,
    onLongPress: g,
    onPress: p,
    onPressChange: te,
    onPressStart: d,
    onPressMove: y,
    onPressEnd: b
  }), [t, n, i, o, g, p, d, y, b, te]), le = ic(D, L), ae = le.onContextMenu, J = le.onKeyDown;
  Pc(D, {
    contain: !0,
    disabled: o,
    onHoverChange: k,
    onHoverStart: v,
    onHoverEnd: f
  });
  var ve = {
    hovered: O,
    focused: B,
    pressed: K
  }, Re = C.useCallback((z) => {
    z.nativeEvent.target === D.current && (H(!1), l?.(z));
  }, [D, H, l]), he = C.useCallback((z) => {
    z.nativeEvent.target === D.current && (H(!0), s?.(z));
  }, [D, H, s]), be = C.useCallback((z) => {
    ae?.(z), u?.(z);
  }, [u, ae]), We = C.useCallback((z) => {
    J?.(z), h?.(z);
  }, [h, J]), xe;
  return x !== void 0 ? xe = x : xe = o ? -1 : 0, /* @__PURE__ */ C.createElement(xi, Kr({}, E, le, {
    "aria-disabled": o,
    onBlur: Re,
    onContextMenu: be,
    onFocus: he,
    onKeyDown: We,
    ref: de,
    style: [o ? Mn.disabled : Mn.active, typeof c == "function" ? c(ve) : c],
    tabIndex: xe
  }), typeof a == "function" ? a(ve) : a);
}
function kr(e) {
  var r = C.useState(!1), a = r[0], t = r[1];
  return [a || e, t];
}
var Mn = ye.create({
  active: {
    cursor: "pointer",
    touchAction: "manipulation"
  },
  disabled: {
    pointerEvents: "box-none"
  }
}), Wi = /* @__PURE__ */ C.memo(/* @__PURE__ */ C.forwardRef(Tc));
Wi.displayName = "Pressable";
const X = document.getElementById("website-root"), $ = (e) => e.textContent.trim().replace(/\s+/g, " "), re = {
  title: $(X.querySelector("h1")),
  hero: [...X.querySelectorAll("header p")].map($),
  navigation: [...X.querySelectorAll("nav a")].map((e) => ({ label: $(e), id: e.hash.slice(1) })),
  sections: ["home", "about"].map((e) => ({ id: e, title: $(X.querySelector(`#${e} h2`)), paragraphs: [...X.querySelectorAll(`#${e} p`)].map($) })),
  teamTitle: $(X.querySelector("#team h2")),
  teamIntro: $(X.querySelector("#team .section-intro")),
  members: [...X.querySelectorAll(".team-member")].map((e, r) => ({
    id: `member-${r}`,
    name: $(e.querySelector("h3")),
    role: $(e.querySelector("p")),
    bio: $(e.querySelector("p:last-child")),
    image: e.querySelector("img").getAttribute("src"),
    alt: e.querySelector("img").alt
  })),
  resources: ["documents", "presentation"].map((e) => {
    const r = X.querySelector(`#${e}`), a = r.querySelector("iframe");
    return {
      id: e,
      title: $(r.querySelector("h2")),
      help: $(r.querySelector("p:not(.resource-actions)")),
      links: [...r.querySelectorAll("a")].map((t) => ({ label: $(t), href: t.getAttribute("href"), download: t.hasAttribute("download") })),
      src: a.getAttribute("src"),
      frameTitle: a.title,
      frameClass: a.className
    };
  }),
  footer: $(X.querySelector("footer p"))
};
function nt({ children: e, onPress: r, ...a }) {
  return /* @__PURE__ */ R.createElement(
    Wi,
    {
      accessibilityRole: "button",
      onPress: r,
      ...a,
      style: ({ hovered: t }) => [Ar.button, t && Ar.hovered]
    },
    /* @__PURE__ */ R.createElement(Ei, { style: Ar.buttonText }, e)
  );
}
function _c() {
  return /* @__PURE__ */ R.createElement("header", null, /* @__PURE__ */ R.createElement("div", { className: "hero-content" }, /* @__PURE__ */ R.createElement("h1", null, re.title), re.hero.map((e) => /* @__PURE__ */ R.createElement("p", { key: e }, e)), /* @__PURE__ */ R.createElement("a", { href: "#about", className: "hero-button" }, "Learn More")));
}
function kc() {
  const [e, r] = C.useState(location.hash.slice(1) || "home");
  return C.useEffect(() => {
    const a = () => {
      const i = re.navigation.map(({ id: o }) => document.getElementById(o)).filter((o) => o.getBoundingClientRect().top <= innerHeight * 0.35);
      r(i.at(-1)?.id || "home");
    }, t = () => r(location.hash.slice(1) || "home");
    return window.addEventListener("scroll", a, { passive: !0 }), window.addEventListener("hashchange", t), () => {
      window.removeEventListener("scroll", a), window.removeEventListener("hashchange", t);
    };
  }, []), /* @__PURE__ */ R.createElement("nav", { "aria-label": "Main navigation" }, /* @__PURE__ */ R.createElement("div", { className: "nav-container" }, re.navigation.map(({ id: a, label: t }) => /* @__PURE__ */ R.createElement("a", { key: a, href: `#${a}`, "aria-current": e === a ? "location" : void 0, onClick: () => r(a) }, t))));
}
function Ac({ section: e }) {
  return /* @__PURE__ */ R.createElement("section", { id: e.id }, /* @__PURE__ */ R.createElement("h2", null, e.title), e.paragraphs.map((r) => /* @__PURE__ */ R.createElement("p", { key: r }, r)));
}
function Mc({ member: e }) {
  const [r, a] = C.useState(!1), t = `${e.bio.slice(0, 240).replace(/\s+\S*$/, "")}…`;
  return /* @__PURE__ */ R.createElement("article", { className: "team-member" }, /* @__PURE__ */ R.createElement("img", { src: e.image, alt: e.alt, loading: "lazy" }), /* @__PURE__ */ R.createElement("h3", null, e.name), /* @__PURE__ */ R.createElement("p", null, e.role), /* @__PURE__ */ R.createElement("p", { className: "team-bio", id: `${e.id}-bio` }, r ? e.bio : t), /* @__PURE__ */ R.createElement(nt, { "aria-expanded": r, "aria-controls": `${e.id}-bio`, accessibilityLabel: `${r ? "Show less" : "Read full biography"}: ${e.name}`, onPress: () => a(!r) }, r ? "Show less" : "Read full biography"));
}
function Dc() {
  return /* @__PURE__ */ R.createElement("section", { id: "team" }, /* @__PURE__ */ R.createElement("h2", null, re.teamTitle), /* @__PURE__ */ R.createElement("p", { className: "section-intro" }, re.teamIntro), /* @__PURE__ */ R.createElement("div", { className: "team-container" }, re.members.map((e) => /* @__PURE__ */ R.createElement(Mc, { key: e.id, member: e }))));
}
function Lc({ resource: e }) {
  const [r, a] = C.useState(!0), [t, n] = C.useState(0);
  return /* @__PURE__ */ R.createElement("section", { id: e.id }, /* @__PURE__ */ R.createElement("h2", null, e.title), /* @__PURE__ */ R.createElement("p", { className: "resource-actions" }, e.links.map((i) => /* @__PURE__ */ R.createElement("a", { key: i.href + i.download, className: i.download ? void 0 : "resource-link", href: i.href, download: i.download || void 0, target: i.download ? void 0 : "_blank", rel: i.download ? void 0 : "noopener" }, i.label))), /* @__PURE__ */ R.createElement("p", null, e.help), /* @__PURE__ */ R.createElement("div", { className: "resource-controls" }, /* @__PURE__ */ R.createElement(nt, { "aria-expanded": r, "aria-controls": `${e.id}-preview`, onPress: () => a(!r) }, r ? "Hide preview" : "Show preview"), r && /* @__PURE__ */ R.createElement(nt, { onPress: () => n(t + 1) }, "Reload preview")), /* @__PURE__ */ R.createElement("div", { id: `${e.id}-preview`, hidden: !r }, r && (e.id === "documents" ? /* @__PURE__ */ R.createElement(bo, { key: t, src: e.src }) : /* @__PURE__ */ R.createElement(po, { key: t }))));
}
function Ic() {
  return C.useEffect(() => {
    const e = location.hash.slice(1);
    e && document.getElementById(e)?.scrollIntoView();
  }, []), /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement("a", { className: "skip-link", href: "#main-content" }, "Skip to main content"), /* @__PURE__ */ R.createElement(_c, null), /* @__PURE__ */ R.createElement(kc, null), /* @__PURE__ */ R.createElement("main", { id: "main-content", tabIndex: "-1" }, re.sections.map((e) => /* @__PURE__ */ R.createElement(Ac, { key: e.id, section: e })), /* @__PURE__ */ R.createElement(Dc, null), re.resources.map((e) => /* @__PURE__ */ R.createElement(Lc, { key: e.id, resource: e }))), /* @__PURE__ */ R.createElement("footer", null, /* @__PURE__ */ R.createElement("p", null, re.footer)));
}
const Ar = ye.create({
  button: { paddingVertical: 12, paddingHorizontal: 16, borderWidth: 1, borderColor: "#1f3b5b", borderRadius: 6, backgroundColor: "#fff", alignItems: "center", minHeight: 44 },
  hovered: { backgroundColor: "#e3edf7" },
  buttonText: { color: "#1f3b5b", fontSize: 14, fontWeight: "700" }
});
ho.createRoot(X).render(/* @__PURE__ */ R.createElement(Ic, null));
