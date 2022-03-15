(() => {
  var e = document.getElementById("language-switch"),
    t = document.querySelector("#toc"),
    n = document.querySelectorAll(".search_field"),
    o = document.getElementById("category-select"),
    l = document.querySelector("[search-tool='reset']"),
    c = document.querySelector("#submit-button"),
    i = document.getElementById("filter-initial"),
    s = document.getElementById("toc-container"),
    d = document.getElementById("filter-empty"),
    r = document.getElementById("toc-wrapper");
  const a = (() => {
    let e = null;
    return (t, n) => {
      e && clearTimeout(e), (e = setTimeout(t, n));
    };
  })();
  function u() {
    var e = window.location.toString();
    if (e.indexOf("#") > 0) {
      var t = e.substring(0, e.indexOf("#"));
      window.history.replaceState({}, document.title, t);
    }
  }
  function m() {
    var e = document.querySelectorAll("#toc > .faq-nav-link"),
      t = document.querySelectorAll(".dynamic-table"),
      n = "";
    let o = "";
    t.length > 0 &&
      t.forEach((t) => {
        const l = t.offsetTop,
          c = t.getBoundingClientRect().top,
          i = t.offsetHeight;
        scrollY - 600 >= l + c &&
          scrollY - 650 <= l + i &&
          ((n = t.getAttribute("id")), (o = `#${n}`)),
          e.length > 0 &&
            o &&
            e.forEach((e) => {
              e.getAttribute("href") === o
                ? e.classList.contains("w--current") ||
                  (e.classList.add("w--current"),
                  a(() => {
                    r.scrollTop = e.offsetTop - r.offsetTop;
                  }, 100))
                : e.getAttribute("href") !== o &&
                  e.classList.contains("w--current") &&
                  e.classList.remove("w--current");
            });
      });
  }
  function f() {
    "none" === window.getComputedStyle(i).display &&
    "none" === window.getComputedStyle(d).display
      ? s.classList.contains("show-sidebar") || s.classList.add("show-sidebar")
      : ("block" !== window.getComputedStyle(i).display &&
          "block" !== window.getComputedStyle(d).display) ||
        (s.classList.contains("show-sidebar") &&
          s.classList.remove("show-sidebar")),
      (function () {
        for (; t.lastChild; ) t.removeChild(t.lastChild);
      })(),
      setTimeout(() => {
        document
          .getElementById("content-all-list")
          .querySelectorAll(".table-title")
          .forEach(function (e, n) {
            e.closest(".dynamic-table").setAttribute("id", `${e.id}-section`);
            const o = document.createElement("a");
            (o.innerHTML = e.innerHTML),
              o.classList.add("faq-nav-link"),
              o.setAttribute("href", `#${e.id}-section`),
              e.classList.add("class", "hidden"),
              t.appendChild(o);
          }),
          window.addEventListener("scroll", m);
      }, 200),
      (function (e) {
        let t = document.getElementById("searchbar");
        a(() => {
          t.focus();
        }, 500);
      })();
  }
  n.forEach((e) => {
    e.addEventListener("keyup", (e) => {
      13 === e.keyCode &&
        (e.preventDefault(),
        a(() => {
          f();
        }, 500));
    });
  }),
    l.addEventListener("click", () => {
      document
        .querySelectorAll("[fs-cmsfilter-element='reset']")
        .forEach((e) => {
          e.click();
        }),
        n.forEach((e) => {
          "" !== e.value && (e.value = "");
        }),
        u(),
        a(() => {
          f();
        }, 500);
    }),
    e.addEventListener("click", () => {
      a(() => {
        f();
      }, 100);
    }),
    window.addEventListener("load", () => {
      f(),
        o.addEventListener("change", () => {
          u(),
            c.click(),
            a(() => {
              f();
            }, 500);
        });
    });
})();
//# sourceMappingURL=bundle.js.map
