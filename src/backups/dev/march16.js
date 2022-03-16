/* --- START - Global variables - DOM elements --- */
const STANDARD_YEAR_VALUE = "2022";
var languageSwitch = document.getElementById("language-switch");
var tableOfContent = document.querySelector("#toc");
var searchBarInputField = document.querySelectorAll(".search_field");
var categoryDropdownValue = document.getElementById("category-select");
var resetSearch = document.querySelector("[search-tool='reset']");
var submitButton = document.querySelector("#submit-button");
var filterInitialState = document.getElementById("filter-initial");
var tableOfContentWrapper = document.getElementById("toc-container");
var filterEmpty = document.getElementById("filter-empty");
var tocOverflowWrapper = document.getElementById("toc-wrapper");
/* --- END - Global variables - DOM elements --- */

/* --- START - Functions --- */

//If initial state div or empty search result - hide sidebar
function isInitialStateActive() {
  if (
    window.getComputedStyle(filterInitialState).display === "none" &&
    window.getComputedStyle(filterEmpty).display === "none"
  ) {
    if (!tableOfContentWrapper.classList.contains("show-sidebar")) {
      tableOfContentWrapper.classList.add("show-sidebar");
    }
    // console.log("there is a search");
  } else if (
    window.getComputedStyle(filterInitialState).display === "block" ||
    window.getComputedStyle(filterEmpty).display === "block"
  ) {
    if (tableOfContentWrapper.classList.contains("show-sidebar")) {
      tableOfContentWrapper.classList.remove("show-sidebar");
    }
    // console.log("empty search");
  }
}

// wait ms (milliseconds) after user stops typing to execute func
const setDelay = (() => {
  let timer = null;
  const delay = (func, ms) => {
    timer ? clearTimeout(timer) : null;
    timer = setTimeout(func, ms);
  };
  return delay;
})();

//remove anchor link hash from URL and resets year searchParams to standard 2022
function removeHashFromUrl() {
  var uri = window.location.toString();

  if (uri.indexOf("#") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("#"));

    window.history.replaceState({}, document.title, clean_uri);
  }
}

//add active item class to ToC item and scroll ToC item into view with scrolling
function addActiveTocClass() {
  var anchorLinks = document.querySelectorAll("#toc > .faq-nav-link");
  var sections = document.querySelectorAll(".dynamic-table");
  var currentSection = "";
  let currentHref = "";
  if (sections.length > 0) {
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const clientRectTop = section.getBoundingClientRect().top;
      const offSetHeight = section.offsetHeight;
      if (
        scrollY - 600 >= sectionTop + clientRectTop &&
        scrollY - 650 <= sectionTop + offSetHeight
      ) {
        currentSection = section.getAttribute("id");
        currentHref = `#${currentSection}`;
      }
      if (anchorLinks.length > 0 && currentHref) {
        anchorLinks.forEach((link) => {
          // link.classList.remove("w--current");
          if (link.getAttribute("href") === currentHref) {
            if (!link.classList.contains("w--current")) {
              link.classList.add("w--current");
              setDelay(() => {
                tocOverflowWrapper.scrollTop =
                  link.offsetTop - tocOverflowWrapper.offsetTop;
              }, 100);
            }
          } else if (link.getAttribute("href") !== currentHref) {
            if (link.classList.contains("w--current")) {
              link.classList.remove("w--current");
            }
          }
        });
      }
    });
  }
}

//Remove all links from table of content sidemenu
function removeAllChildren() {
  // if (tableOfContent.length) {
  while (tableOfContent.lastChild) {
    tableOfContent.removeChild(tableOfContent.lastChild);
  }
  // console.log("removed all children");
  // }
}

//Set focus on searchbar for user to start typing right away
function setFocusSearchBar(searchbar) {
  let pageSearchbar = document.getElementById(searchbar);
  //console.log(pageSearchbar.innerHTML);
  setDelay(() => {
    pageSearchbar.focus();
  }, 500);
}

//render all anchor links based on collection item table names
//append anchor links to table of content
function renderAnchorLinks() {
  document
    .getElementById("content-all-list")
    .querySelectorAll(".table-title")
    .forEach(function (heading, i) {
      // console.log(heading.id);
      heading
        .closest(".dynamic-table")
        .setAttribute("id", `${heading.id}-section`);
      const item = document.createElement("a"); // creates an anchor element called "item" for each h2
      item.innerHTML = heading.innerHTML; // gives each item the text of the corresponding heading
      item.classList.add("faq-nav-link"); // gives each item the correct class
      item.setAttribute("href", `#${heading.id}-section`); // gives each item the correct anchor link
      heading.classList.add("class", "hidden"); //hides all headings from view
      tableOfContent.appendChild(item); // places each item inside the Table of Contents div
    });
  // console.log("anchor links rendered");
}

//invoke functions in the correct order
function renderTocAnchorLinksAndAddActiveClass() {
  isInitialStateActive();
  removeAllChildren();

  setTimeout(() => {
    renderAnchorLinks();
    window.addEventListener("scroll", addActiveTocClass);
    // console.log("added event listener for anchor links");
  }, 200);
  setFocusSearchBar("searchbar");
  // searchForInitialQueryParameters();
}

//listen to changes in the searchbar and updates table of content
//The timeout is essential for this to work, because the dom takes a fraction of a second to update
searchBarInputField.forEach((searchbar) => {
  searchbar.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      setDelay(() => {
        renderTocAnchorLinksAndAddActiveClass();
      }, 500);
    }
  });
});

//resets all filter inputs, scroll to page top and re-render the search results
resetSearch.addEventListener("click", () => {
  let resetAll = document.querySelectorAll("[fs-cmsfilter-element='reset']");
  resetAll.forEach((reset) => {
    reset.click();
  });
  searchBarInputField.forEach((searchbar) => {
    if (searchbar.value !== "") {
      searchbar.value = "";
    }
  });
  removeHashFromUrl();
  setDelay(() => {
    renderTocAnchorLinksAndAddActiveClass();
  }, 500);
});

languageSwitch.addEventListener("click", () => {
  setDelay(() => {
    renderTocAnchorLinksAndAddActiveClass();
  }, 100);
});

//Check for active category tab on load, render correct table of content links
//hide subcategory wrappers if they are empty
window.addEventListener("load", () => {
  renderTocAnchorLinksAndAddActiveClass();
  categoryDropdownValue.addEventListener("change", () => {
    removeHashFromUrl();
    submitButton.click();
    setDelay(() => {
      renderTocAnchorLinksAndAddActiveClass();
    }, 500);
  });
  // searchForInitialQueryParameters();
});
/* --- END - DOM EventListeners --- */
