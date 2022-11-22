(() => {
  var e = {
      131: (e, o, t) => {
        "use strict";
        function r() {
          console.log("/dashboard/home code executing"),
            (async () => {
              const e = await new Promise((e) => {
                  gtag("get", "G-18ZZXF30B4", "session_id", e);
                }),
                o = `https://app.istart.be?glideSessionId=${
                  Date.now() * Math.floor(100 * Math.random())
                }&gaSessionId=${e}`;
              console.log("src for iframe: ", o),
                top.document.getElementById("myiframe").setAttribute("src", o);
            })();
        }
        t.r(o), t.d(o, { default: () => r });
      },
      72: (e, o, t) => {
        "use strict";
        function r() {
          console.log("hello from JS on the istart homepage");
        }
        t.r(o), t.d(o, { default: () => r });
      },
    },
    o = {};
  function t(r) {
    var a = o[r];
    if (void 0 !== a) return a.exports;
    var n = (o[r] = { exports: {} });
    return e[r](n, n.exports, t), n.exports;
  }
  (t.d = (e, o) => {
    for (var r in o)
      t.o(o, r) &&
        !t.o(e, r) &&
        Object.defineProperty(e, r, { enumerable: !0, get: o[r] });
  }),
    (t.o = (e, o) => Object.prototype.hasOwnProperty.call(e, o)),
    (t.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      const { default: e } = t(72),
        { default: o } = t(131);
      console.log("local webflow server connected!");
      const r = window.location.pathname;
      (window.dataLayer = window.dataLayer || []),
        "/" === r && e(),
        "/dashboard/home" === r && o();
    })();
})();
//# sourceMappingURL=bundle.js.map
