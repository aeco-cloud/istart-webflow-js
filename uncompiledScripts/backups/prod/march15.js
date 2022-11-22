(() => {
  var e = document.getElementById("select"),
    t = document.querySelector("#toc"),
    n = document.querySelectorAll(".search_field"),
    o = document.getElementById("category-select"),
    l = document.querySelector("[search-tool='reset']"),
    c = document.querySelector("#submit-button"),
    s = document.getElementById("filter-initial"),
    a = document.getElementById("toc-container"),
    r = document.getElementById("filter-empty"),
    i = document.getElementById("toc-wrapper");
  const d = (() => {
    let e = null;
    return (t, n) => {
      e && clearTimeout(e), (e = setTimeout(t, n));
    };
  })();
  function u() {
    var e = document.querySelectorAll("#toc > .faq-nav-link"),
      t = document.querySelectorAll(".dynamic-table"),
      n = "";
    let o = "";
    t.length > 0 &&
      t.forEach((t) => {
        const l = t.offsetTop,
          c = t.getBoundingClientRect().top,
          s = t.offsetHeight;
        scrollY - 600 >= l + c &&
          scrollY - 650 <= l + s &&
          ((n = t.getAttribute("id")), (o = `#${n}`)),
          e.length > 0 &&
            o &&
            e.forEach((e) => {
              e.getAttribute("href") === o
                ? e.classList.contains("w--current") ||
                  (e.classList.add("w--current"),
                  d(() => {
                    i.scrollTop = e.offsetTop - i.offsetTop;
                  }, 100))
                : e.getAttribute("href") !== o &&
                  e.classList.contains("w--current") &&
                  e.classList.remove("w--current");
            });
      });
  }
  function m() {
    "none" === window.getComputedStyle(s).display &&
    "none" === window.getComputedStyle(r).display
      ? a.classList.contains("show-sidebar") || a.classList.add("show-sidebar")
      : ("block" !== window.getComputedStyle(s).display &&
          "block" !== window.getComputedStyle(r).display) ||
        (a.classList.contains("show-sidebar") &&
          a.classList.remove("show-sidebar")),
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
          window.addEventListener("scroll", u);
      }, 200),
      (function (e) {
        let t = document.getElementById("searchbar");
        d(() => {
          t.focus();
        }, 500);
      })();
  }
  e.addEventListener("change", (e) => {
    var t = new URL(window.location);
    t.searchParams.has("year")
      ? t.searchParams.set("year", e.target.value)
      : t.searchParams.append("year", e.target.value),
      (t.search = t.searchParams),
      (t = t.toString()),
      history.pushState({}, null, t);
  }),
    n.forEach((e) => {
      e.addEventListener("keyup", (e) => {
        13 === e.keyCode &&
          (e.preventDefault(),
          d(() => {
            m();
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
        (function () {
          var e = window.location.toString();
          if (e.indexOf("#") > 0) {
            var t = e.substring(0, e.indexOf("#"));
            window.history.replaceState({}, document.title, t);
          }
        })(),
        d(() => {
          m();
        }, 500);
    }),
    window.addEventListener("load", () => {
      m(),
        o.addEventListener("change", () => {
          c.click(),
            d(() => {
              m();
            }, 500);
        });
    });
})();
