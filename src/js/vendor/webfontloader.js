!(function () {
  function t(t, n, i) {
    return t.call.apply(t.bind, arguments);
  }
  function n(t, n, i) {
    if (!t) throw Error();
    if (2 < arguments.length) {
      var e = Array.prototype.slice.call(arguments, 2);
      return function () {
        var i = Array.prototype.slice.call(arguments);
        return Array.prototype.unshift.apply(i, e), t.apply(n, i);
      };
    }
    return function () {
      return t.apply(n, arguments);
    };
  }
  function i(e, o, s) {
    return (
      (i =
        Function.prototype.bind &&
        -1 != Function.prototype.bind.toString().indexOf("native code")
          ? t
          : n),
      i.apply(null, arguments)
    );
  }
  function e(t, n) {
    (this.a = t), (this.m = n || t), (this.c = this.m.document);
  }
  function o(t, n, i, e) {
    if (((n = t.c.createElement(n)), i))
      for (var o in i)
        i.hasOwnProperty(o) &&
          ("style" == o ? (n.style.cssText = i[o]) : n.setAttribute(o, i[o]));
    return e && n.appendChild(t.c.createTextNode(e)), n;
  }
  function s(t, n, i) {
    (t = t.c.getElementsByTagName(n)[0]),
      t || (t = document.documentElement),
      t.insertBefore(i, t.lastChild);
  }
  function a(t) {
    t.parentNode && t.parentNode.removeChild(t);
  }
  function r(t, n, i) {
    (n = n || []), (i = i || []);
    for (var e = t.className.split(/\s+/), o = 0; o < n.length; o += 1) {
      for (var s = !1, a = 0; a < e.length; a += 1)
        if (n[o] === e[a]) {
          s = !0;
          break;
        }
      s || e.push(n[o]);
    }
    for (n = [], o = 0; o < e.length; o += 1) {
      for (s = !1, a = 0; a < i.length; a += 1)
        if (e[o] === i[a]) {
          s = !0;
          break;
        }
      s || n.push(e[o]);
    }
    t.className = n
      .join(" ")
      .replace(/\s+/g, " ")
      .replace(/^\s+|\s+$/, "");
  }
  function c(t, n) {
    for (var i = t.className.split(/\s+/), e = 0, o = i.length; o > e; e++)
      if (i[e] == n) return !0;
    return !1;
  }
  function f(t) {
    if ("string" == typeof t.f) return t.f;
    var n = t.m.location.protocol;
    return (
      "about:" == n && (n = t.a.location.protocol),
      "https:" == n ? "https:" : "http:"
    );
  }
  function h(t) {
    return t.m.location.hostname || t.a.location.hostname;
  }
  function l(t, n, i) {
    function e() {
      f && a && r && (f(c), (f = null));
    }
    n = o(t, "link", { rel: "stylesheet", href: n, media: "all" });
    var a = !1,
      r = !0,
      c = null,
      f = i || null;
    et
      ? ((n.onload = function () {
          (a = !0), e();
        }),
        (n.onerror = function () {
          (a = !0), (c = Error("Stylesheet failed to load")), e();
        }))
      : setTimeout(function () {
          (a = !0), e();
        }, 0),
      s(t, "head", n);
  }
  function u(t, n, i, e) {
    var s = t.c.getElementsByTagName("head")[0];
    if (s) {
      var a = o(t, "script", { src: n }),
        r = !1;
      return (
        (a.onload = a.onreadystatechange =
          function () {
            r ||
              (this.readyState &&
                "loaded" != this.readyState &&
                "complete" != this.readyState) ||
              ((r = !0),
              i && i(null),
              (a.onload = a.onreadystatechange = null),
              "HEAD" == a.parentNode.tagName && s.removeChild(a));
          }),
        s.appendChild(a),
        setTimeout(function () {
          r || ((r = !0), i && i(Error("Script load timeout")));
        }, e || 5e3),
        a
      );
    }
    return null;
  }
  function p() {
    (this.a = 0), (this.c = null);
  }
  function d(t) {
    return (
      t.a++,
      function () {
        t.a--, v(t);
      }
    );
  }
  function g(t, n) {
    (t.c = n), v(t);
  }
  function v(t) {
    0 == t.a && t.c && (t.c(), (t.c = null));
  }
  function m(t) {
    this.a = t || "-";
  }
  function w(t, n) {
    (this.c = t), (this.f = 4), (this.a = "n");
    var i = (n || "n4").match(/^([nio])([1-9])$/i);
    i && ((this.a = i[1]), (this.f = parseInt(i[2], 10)));
  }
  function y(t) {
    return x(t) + " " + (t.f + "00") + " 300px " + b(t.c);
  }
  function b(t) {
    var n = [];
    t = t.split(/,\s*/);
    for (var i = 0; i < t.length; i++) {
      var e = t[i].replace(/['"]/g, "");
      -1 != e.indexOf(" ") || /^\d/.test(e) ? n.push("'" + e + "'") : n.push(e);
    }
    return n.join(",");
  }
  function j(t) {
    return t.a + t.f;
  }
  function x(t) {
    var n = "normal";
    return "o" === t.a ? (n = "oblique") : "i" === t.a && (n = "italic"), n;
  }
  function k(t) {
    var n = 4,
      i = "n",
      e = null;
    return (
      t &&
        ((e = t.match(/(normal|oblique|italic)/i)) &&
          e[1] &&
          (i = e[1].substr(0, 1).toLowerCase()),
        (e = t.match(/([1-9]00|normal|bold)/i)) &&
          e[1] &&
          (/bold/i.test(e[1])
            ? (n = 7)
            : /[1-9]00/.test(e[1]) && (n = parseInt(e[1].substr(0, 1), 10)))),
      i + n
    );
  }
  function _(t, n) {
    (this.c = t),
      (this.f = t.m.document.documentElement),
      (this.h = n),
      (this.a = new m("-")),
      (this.j = !1 !== n.events),
      (this.g = !1 !== n.classes);
  }
  function T(t) {
    t.g && r(t.f, [t.a.c("wf", "loading")]), C(t, "loading");
  }
  function S(t) {
    if (t.g) {
      var n = c(t.f, t.a.c("wf", "active")),
        i = [],
        e = [t.a.c("wf", "loading")];
      n || i.push(t.a.c("wf", "inactive")), r(t.f, i, e);
    }
    C(t, "inactive");
  }
  function C(t, n, i) {
    t.j && t.h[n] && (i ? t.h[n](i.c, j(i)) : t.h[n]());
  }
  function N() {
    this.c = {};
  }
  function A(t, n, i) {
    var e,
      o = [];
    for (e in n)
      if (n.hasOwnProperty(e)) {
        var s = t.c[e];
        s && o.push(s(n[e], i));
      }
    return o;
  }
  function E(t, n) {
    (this.c = t),
      (this.f = n),
      (this.a = o(this.c, "span", { "aria-hidden": "true" }, this.f));
  }
  function W(t) {
    s(t.c, "body", t.a);
  }
  function F(t) {
    return (
      "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" +
      b(t.c) +
      ";" +
      ("font-style:" + x(t) + ";font-weight:" + (t.f + "00") + ";")
    );
  }
  function I(t, n, i, e, o, s) {
    (this.g = t),
      (this.j = n),
      (this.a = e),
      (this.c = i),
      (this.f = o || 3e3),
      (this.h = s || void 0);
  }
  function P(t, n, i, e, o, s, a) {
    (this.v = t),
      (this.B = n),
      (this.c = i),
      (this.a = e),
      (this.s = a || "BESbswy"),
      (this.f = {}),
      (this.w = o || 3e3),
      (this.u = s || null),
      (this.o = this.j = this.h = this.g = null),
      (this.g = new E(this.c, this.s)),
      (this.h = new E(this.c, this.s)),
      (this.j = new E(this.c, this.s)),
      (this.o = new E(this.c, this.s)),
      (t = new w(this.a.c + ",serif", j(this.a))),
      (t = F(t)),
      (this.g.a.style.cssText = t),
      (t = new w(this.a.c + ",sans-serif", j(this.a))),
      (t = F(t)),
      (this.h.a.style.cssText = t),
      (t = new w("serif", j(this.a))),
      (t = F(t)),
      (this.j.a.style.cssText = t),
      (t = new w("sans-serif", j(this.a))),
      (t = F(t)),
      (this.o.a.style.cssText = t),
      W(this.g),
      W(this.h),
      W(this.j),
      W(this.o);
  }
  function B() {
    if (null === st) {
      var t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
        window.navigator.userAgent
      );
      st =
        !!t &&
        (536 > parseInt(t[1], 10) ||
          (536 === parseInt(t[1], 10) && 11 >= parseInt(t[2], 10)));
    }
    return st;
  }
  function O(t, n, i) {
    for (var e in ot)
      if (ot.hasOwnProperty(e) && n === t.f[ot[e]] && i === t.f[ot[e]])
        return !0;
    return !1;
  }
  function L(t) {
    var n,
      i = t.g.a.offsetWidth,
      e = t.h.a.offsetWidth;
    (n = i === t.f.serif && e === t.f["sans-serif"]) || (n = B() && O(t, i, e)),
      n
        ? it() - t.A >= t.w
          ? B() && O(t, i, e) && (null === t.u || t.u.hasOwnProperty(t.a.c))
            ? $(t, t.v)
            : $(t, t.B)
          : D(t)
        : $(t, t.v);
  }
  function D(t) {
    setTimeout(
      i(function () {
        L(this);
      }, t),
      50
    );
  }
  function $(t, n) {
    setTimeout(
      i(function () {
        a(this.g.a), a(this.h.a), a(this.j.a), a(this.o.a), n(this.a);
      }, t),
      0
    );
  }
  function q(t, n, i) {
    (this.c = t),
      (this.a = n),
      (this.f = 0),
      (this.o = this.j = !1),
      (this.s = i);
  }
  function H(t) {
    0 == --t.f &&
      t.j &&
      (t.o
        ? ((t = t.a),
          t.g &&
            r(
              t.f,
              [t.a.c("wf", "active")],
              [t.a.c("wf", "loading"), t.a.c("wf", "inactive")]
            ),
          C(t, "active"))
        : S(t.a));
  }
  function z(t) {
    (this.j = t), (this.a = new N()), (this.h = 0), (this.f = this.g = !0);
  }
  function G(t, n, e, o, s) {
    var a = 0 == --t.h;
    (t.f || t.g) &&
      setTimeout(function () {
        var t = s || null,
          c = o || null || {};
        if (0 === e.length && a) S(n.a);
        else {
          (n.f += e.length), a && (n.j = a);
          var f,
            h = [];
          for (f = 0; f < e.length; f++) {
            var l = e[f],
              u = c[l.c],
              p = n.a,
              d = l;
            p.g && r(p.f, [p.a.c("wf", d.c, j(d).toString(), "loading")]),
              C(p, "fontloading", d),
              (p = null),
              null === at &&
                (at = window.FontFace
                  ? (d = /Gecko.*Firefox\/(\d+)/.exec(
                      window.navigator.userAgent
                    ))
                    ? 42 < parseInt(d[1], 10)
                    : !0
                  : !1),
              (p = at
                ? new I(i(n.g, n), i(n.h, n), n.c, l, n.s, u)
                : new P(i(n.g, n), i(n.h, n), n.c, l, n.s, t, u)),
              h.push(p);
          }
          for (f = 0; f < h.length; f++) h[f].start();
        }
      }, 0);
  }
  function K(t, n, i) {
    var e = [],
      o = i.timeout;
    T(n);
    var e = A(t.a, i, t.c),
      s = new q(t.c, n, o);
    for (t.h = e.length, n = 0, i = e.length; i > n; n++)
      e[n].load(function (n, i, e) {
        G(t, s, n, i, e);
      });
  }
  function M(t, n) {
    (this.c = t), (this.a = n);
  }
  function R(t, n, i) {
    var e = f(t.c);
    return (
      (t = (t.a.api || "fast.fonts.net/jsapi").replace(
        /^.*http(s?):(\/\/)?/,
        ""
      )),
      e + "//" + t + "/" + n + ".js" + (i ? "?v=" + i : "")
    );
  }
  function U(t, n) {
    (this.c = t), (this.a = n);
  }
  function J(t, n, i) {
    t ? (this.c = t) : (this.c = n + rt),
      (this.a = []),
      (this.f = []),
      (this.g = i || "");
  }
  function Q(t, n) {
    for (var i = n.length, e = 0; i > e; e++) {
      var o = n[e].split(":");
      3 == o.length && t.f.push(o.pop());
      var s = "";
      2 == o.length && "" != o[1] && (s = ":"), t.a.push(o.join(s));
    }
  }
  function V(t) {
    if (0 == t.a.length) throw Error("No fonts to load!");
    if (-1 != t.c.indexOf("kit=")) return t.c;
    for (var n = t.a.length, i = [], e = 0; n > e; e++)
      i.push(t.a[e].replace(/ /g, "+"));
    return (
      (n = t.c + "?family=" + i.join("%7C")),
      0 < t.f.length && (n += "&subset=" + t.f.join(",")),
      0 < t.g.length && (n += "&text=" + encodeURIComponent(t.g)),
      n
    );
  }
  function X(t) {
    (this.f = t), (this.a = []), (this.c = {});
  }
  function Y(t) {
    for (var n = t.f.length, i = 0; n > i; i++) {
      var e = t.f[i].split(":"),
        o = e[0].replace(/\+/g, " "),
        s = ["n4"];
      if (2 <= e.length) {
        var a,
          r = e[1];
        if (((a = []), r))
          for (var r = r.split(","), c = r.length, f = 0; c > f; f++) {
            var h;
            if (((h = r[f]), h.match(/^[\w-]+$/))) {
              var l = lt.exec(h.toLowerCase());
              if (null == l) h = "";
              else {
                if (
                  ((h = l[2]),
                  (h = null == h || "" == h ? "n" : ht[h]),
                  (l = l[1]),
                  null == l || "" == l)
                )
                  l = "4";
                else
                  var u = ft[l],
                    l = u ? u : isNaN(l) ? "4" : l.substr(0, 1);
                h = [h, l].join("");
              }
            } else h = "";
            h && a.push(h);
          }
        0 < a.length && (s = a),
          3 == e.length &&
            ((e = e[2]),
            (a = []),
            (e = e ? e.split(",") : a),
            0 < e.length && (e = ct[e[0]]) && (t.c[o] = e));
      }
      for (t.c[o] || ((e = ct[o]) && (t.c[o] = e)), e = 0; e < s.length; e += 1)
        t.a.push(new w(o, s[e]));
    }
  }
  function Z(t, n) {
    (this.c = t), (this.a = n);
  }
  function tt(t, n) {
    (this.c = t), (this.a = n);
  }
  function nt(t, n) {
    (this.c = t), (this.f = n), (this.a = []);
  }
  var it =
      Date.now ||
      function () {
        return +new Date();
      },
    et = !!window.FontFace;
  (m.prototype.c = function (t) {
    for (var n = [], i = 0; i < arguments.length; i++)
      n.push(arguments[i].replace(/[\W_]+/g, "").toLowerCase());
    return n.join(this.a);
  }),
    (I.prototype.start = function () {
      var t = this.c.m.document,
        n = this,
        i = it(),
        e = new Promise(function (e, o) {
          function s() {
            it() - i >= n.f
              ? o()
              : t.fonts.load(y(n.a), n.h).then(
                  function (t) {
                    1 <= t.length ? e() : setTimeout(s, 25);
                  },
                  function () {
                    o();
                  }
                );
          }
          s();
        }),
        o = new Promise(function (t, i) {
          setTimeout(i, n.f);
        });
      Promise.race([o, e]).then(
        function () {
          n.g(n.a);
        },
        function () {
          n.j(n.a);
        }
      );
    });
  var ot = { D: "serif", C: "sans-serif" },
    st = null;
  P.prototype.start = function () {
    (this.f.serif = this.j.a.offsetWidth),
      (this.f["sans-serif"] = this.o.a.offsetWidth),
      (this.A = it()),
      L(this);
  };
  var at = null;
  (q.prototype.g = function (t) {
    var n = this.a;
    n.g &&
      r(
        n.f,
        [n.a.c("wf", t.c, j(t).toString(), "active")],
        [
          n.a.c("wf", t.c, j(t).toString(), "loading"),
          n.a.c("wf", t.c, j(t).toString(), "inactive"),
        ]
      ),
      C(n, "fontactive", t),
      (this.o = !0),
      H(this);
  }),
    (q.prototype.h = function (t) {
      var n = this.a;
      if (n.g) {
        var i = c(n.f, n.a.c("wf", t.c, j(t).toString(), "active")),
          e = [],
          o = [n.a.c("wf", t.c, j(t).toString(), "loading")];
        i || e.push(n.a.c("wf", t.c, j(t).toString(), "inactive")),
          r(n.f, e, o);
      }
      C(n, "fontinactive", t), H(this);
    }),
    (z.prototype.load = function (t) {
      (this.c = new e(this.j, t.context || this.j)),
        (this.g = !1 !== t.events),
        (this.f = !1 !== t.classes),
        K(this, new _(this.c, t), t);
    }),
    (M.prototype.load = function (t) {
      function n() {
        if (o["__mti_fntLst" + i]) {
          var e,
            s = o["__mti_fntLst" + i](),
            a = [];
          if (s)
            for (var r = 0; r < s.length; r++) {
              var c = s[r].fontfamily;
              void 0 != s[r].fontStyle && void 0 != s[r].fontWeight
                ? ((e = s[r].fontStyle + s[r].fontWeight), a.push(new w(c, e)))
                : a.push(new w(c));
            }
          t(a);
        } else
          setTimeout(function () {
            n();
          }, 50);
      }
      var i = this.a.projectId,
        e = this.a.version;
      if (i) {
        var o = this.c.m;
        u(this.c, R(this, i, e), function (i) {
          i ? t([]) : n();
        }).id = "__MonotypeAPIScript__" + i;
      } else t([]);
    }),
    (U.prototype.load = function (t) {
      var n,
        i,
        e = this.a.urls || [],
        o = this.a.families || [],
        s = this.a.testStrings || {},
        a = new p();
      for (n = 0, i = e.length; i > n; n++) l(this.c, e[n], d(a));
      var r = [];
      for (n = 0, i = o.length; i > n; n++)
        if (((e = o[n].split(":")), e[1]))
          for (var c = e[1].split(","), f = 0; f < c.length; f += 1)
            r.push(new w(e[0], c[f]));
        else r.push(new w(e[0]));
      g(a, function () {
        t(r, s);
      });
    });
  var rt = "//fonts.googleapis.com/css",
    ct = {
      latin: "BESbswy",
      cyrillic: "йяЖ",
      greek: "αβΣ",
      khmer: "កខគ",
      Hanuman: "កខគ",
    },
    ft = {
      thin: "1",
      extralight: "2",
      "extra-light": "2",
      ultralight: "2",
      "ultra-light": "2",
      light: "3",
      regular: "4",
      book: "4",
      medium: "5",
      "semi-bold": "6",
      semibold: "6",
      "demi-bold": "6",
      demibold: "6",
      bold: "7",
      "extra-bold": "8",
      extrabold: "8",
      "ultra-bold": "8",
      ultrabold: "8",
      black: "9",
      heavy: "9",
      l: "3",
      r: "4",
      b: "7",
    },
    ht = { i: "i", italic: "i", n: "n", normal: "n" },
    lt =
      /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/,
    ut = { Arimo: !0, Cousine: !0, Tinos: !0 };
  (Z.prototype.load = function (t) {
    var n = new p(),
      i = this.c,
      e = new J(this.a.api, f(i), this.a.text),
      o = this.a.families;
    Q(e, o);
    var s = new X(o);
    Y(s),
      l(i, V(e), d(n)),
      g(n, function () {
        t(s.a, s.c, ut);
      });
  }),
    (tt.prototype.load = function (t) {
      var n = this.a.id,
        i = this.c.m;
      n
        ? u(
            this.c,
            (this.a.api || "https://use.typekit.net") + "/" + n + ".js",
            function (n) {
              if (n) t([]);
              else if (i.Typekit && i.Typekit.config && i.Typekit.config.fn) {
                n = i.Typekit.config.fn;
                for (var e = [], o = 0; o < n.length; o += 2)
                  for (var s = n[o], a = n[o + 1], r = 0; r < a.length; r++)
                    e.push(new w(s, a[r]));
                try {
                  i.Typekit.load({ events: !1, classes: !1, async: !0 });
                } catch (c) {}
                t(e);
              }
            },
            2e3
          )
        : t([]);
    }),
    (nt.prototype.load = function (t) {
      var n = this.f.id,
        i = this.c.m,
        e = this;
      n
        ? (i.__webfontfontdeckmodule__ || (i.__webfontfontdeckmodule__ = {}),
          (i.__webfontfontdeckmodule__[n] = function (n, i) {
            for (var o = 0, s = i.fonts.length; s > o; ++o) {
              var a = i.fonts[o];
              e.a.push(
                new w(
                  a.name,
                  k("font-weight:" + a.weight + ";font-style:" + a.style)
                )
              );
            }
            t(e.a);
          }),
          u(
            this.c,
            f(this.c) +
              (this.f.api || "//f.fontdeck.com/s/css/js/") +
              h(this.c) +
              "/" +
              n +
              ".js",
            function (n) {
              n && t([]);
            }
          ))
        : t([]);
    });
  var pt = new z(window);
  (pt.a.c.custom = function (t, n) {
    return new U(n, t);
  }),
    (pt.a.c.fontdeck = function (t, n) {
      return new nt(n, t);
    }),
    (pt.a.c.monotype = function (t, n) {
      return new M(n, t);
    }),
    (pt.a.c.typekit = function (t, n) {
      return new tt(n, t);
    }),
    (pt.a.c.google = function (t, n) {
      return new Z(n, t);
    });
  var dt = { load: i(pt.load, pt) };
  "function" == typeof define && define.amd
    ? define(function () {
        return dt;
      })
    : "undefined" != typeof module && module.exports
    ? (module.exports = dt)
    : ((window.WebFont = dt),
      window.WebFontConfig && pt.load(window.WebFontConfig));
})();
