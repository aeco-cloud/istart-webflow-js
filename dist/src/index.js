// /* --- START - Global variables - DOM elements --- */
// var yearUrl = document.getElementById("select");
// var contentAll = document.querySelector("#content-all");
// var contentAllList = document.querySelector("#tabs-container");
// var tableOfContent = document.querySelector("#toc");
// var categoryTabs = document.querySelector("#category-tabs");
// var categoryDropdownPlaceholder = document.querySelector("#category-replace");
// var yearDropdownPlaceholder = document.getElementById("year-replace");
// var searchBarInputField = document.querySelectorAll(".search_field");
// var categorySelectOption = document.querySelectorAll(".tab_links");
// var subcategoryCheckboxWrapper = document.querySelectorAll(
//   ".subcategory-wrapper"
// );
// var subcategoryCheckbox = document.querySelectorAll(".subcategory-checkbox");
// /* --- END - Global variables - DOM elements --- */
// /* --- START - Function declarations --- */
// // wait ms (milliseconds) after user stops typing to execute func
// const delayKeyUp = (() => {
//   let timer = null;
//   const delay = (func, ms) => {
//     timer ? clearTimeout(timer) : null;
//     timer = setTimeout(func, ms);
//   };
//   return delay;
// })();
// //remove anchor link hash from URL
// function removeHashFromUrl() {
//   var uri = window.location.toString();
//   if (uri.indexOf("#") > 0) {
//     var clean_uri = uri.substring(0, uri.indexOf("#"));
//     window.history.replaceState({}, document.title, clean_uri);
//   }
// }
// //check if there are subcategories for the different categories
// //if the subcategory wrapper is empty, hide it
// function hideSubcategoryWrapperIfEmpty() {
//   subcategoryCheckboxWrapper.forEach((subWrapper) => {
//     if (subWrapper.querySelector(".empty-state .subcategory")) {
//       subWrapper.classList.add("hidden");
//     }
//   });
// }
// //add active item class to ToC item
// function addActiveTocClass() {
//   var anchorLinks = document.querySelectorAll("#toc > .faq-nav-link");
//   var sections = document.querySelectorAll(".dynamic-table");
//   var currentSection = "";
//   let currentHref = "";
//   if (sections.length > 0) {
//     sections.forEach((section) => {
//       const sectionTop = section.offsetTop;
//       const clientRectTop = section.getBoundingClientRect().top;
//       const offSetHeight = section.offsetHeight;
//       if (
//         scrollY - 700 >= sectionTop + clientRectTop &&
//         scrollY - 700 <= sectionTop + offSetHeight
//       ) {
//         currentSection = section.getAttribute("id");
//         currentHref = `#${currentSection}`;
//       }
//       if (anchorLinks.length > 0 && currentHref) {
//         anchorLinks.forEach((link) => {
//           // link.classList.remove("w--current");
//           if (link.getAttribute("href") === currentHref) {
//             if (!link.classList.contains("w--current")) {
//               link.classList.add("w--current");
//             }
//             // console.log(link.getAttribute("href"));
//           } else if (link.getAttribute("href") !== currentHref) {
//             if (link.classList.contains("w--current")) {
//               link.classList.remove("w--current");
//             }
//           }
//         });
//       }
//     });
//   }
// }
// //Remove all links from table of content sidemenu
// function removeAllChildren(parent) {
//   while (parent.lastChild) {
//     parent.removeChild(parent.lastChild);
//   }
//   console.log("removed all children");
// }
// //render all anchor links based on collection item table names
// //append anchor links to table of content
// function renderAnchorLinks(contentList) {
//   document
//     .getElementById(contentList)
//     .querySelectorAll(".table-title")
//     .forEach(function (heading, i) {
//       // console.log(heading.id);
//       heading
//         .closest(".dynamic-table")
//         .setAttribute("id", `${heading.id}-section`);
//       const item = document.createElement("a"); // creates an anchor element called "item" for each h2
//       item.innerHTML = heading.innerHTML; // gives each item the text of the corresponding heading
//       item.classList.add("faq-nav-link"); // gives each item the correct class
//       item.setAttribute("href", `#${heading.id}-section`); // gives each item the correct anchor link
//       heading.classList.add("class", "hidden"); //hides all headings from view
//       tableOfContent.appendChild(item); // places each item inside the Table of Contents div
//     });
// }
// //Render correct anchor links for table of content based on category tab selected
// //add scroll eventlistener to these links which creates the 'active table of content link' effect
// function getActiveCategoryTab() {
//   removeAllChildren(tableOfContent);
//   removeHashFromUrl();
//   let activeTab = document.querySelector("#category-tabs > .w--current");
//   console.log("*------* active tab: ", activeTab.innerText);
//   switch (activeTab.innerText) {
//     case "Alles":
//       categoryDropdownPlaceholder.innerText = "Alle categorieën";
//       renderAnchorLinks("content-all-list");
//       window.addEventListener("scroll", addActiveTocClass);
//       break;
//     case "Personenbelasting":
//       categoryDropdownPlaceholder.innerText = activeTab.innerText;
//       renderAnchorLinks("content-one-list");
//       window.addEventListener("scroll", addActiveTocClass);
//       console.log("*-----------* case Personen");
//       break;
//     case "Vennootschapsbelasting":
//       categoryDropdownPlaceholder.innerText = activeTab.innerText;
//       renderAnchorLinks("content-two-list");
//       window.addEventListener("scroll", addActiveTocClass);
//       break;
//     case "Btw":
//       categoryDropdownPlaceholder.innerText = activeTab.innerText;
//       renderAnchorLinks("content-three-list");
//       window.addEventListener("scroll", addActiveTocClass);
//       break;
//     case "Registratierechten":
//       categoryDropdownPlaceholder.innerText = activeTab.innerText;
//       renderAnchorLinks("content-four-list");
//       window.addEventListener("scroll", addActiveTocClass);
//       break;
//     case "Schenkbelasting / Schenkingsrechten":
//       categoryDropdownPlaceholder.innerText = activeTab.innerText;
//       renderAnchorLinks("content-five-list");
//       window.addEventListener("scroll", addActiveTocClass);
//       break;
//     case "Erfbelasting / Successierechten":
//       categoryDropdownPlaceholder.innerText = activeTab.innerText;
//       renderAnchorLinks("content-six-list");
//       window.addEventListener("scroll", addActiveTocClass);
//       break;
//     case "Sociale data":
//       categoryDropdownPlaceholder.innerText = activeTab.innerText;
//       renderAnchorLinks("content-seven-list");
//       window.addEventListener("scroll", addActiveTocClass);
//       break;
//     case "Jaarrekeningenrecht":
//       categoryDropdownPlaceholder.innerText = activeTab.innerText;
//       renderAnchorLinks("content-eight-list");
//       window.addEventListener("scroll", addActiveTocClass);
//       break;
//     default:
//       categoryDropdownPlaceholder.innerText = "Alle categorieën";
//       renderAnchorLinks("content-all-list");
//       window.addEventListener("scroll", addActiveTocClass);
//       break;
//   }
// }
// /* --- END - Function declarations --- */
// /* --- START - DOM EventListeners --- */
// //Listen for changes in the YEAR dropdown
// //attach year to URL
// yearUrl.addEventListener("change", (event) => {
//   var url = new URL(window.location);
//   if (yearUrl.value !== "all") {
//     yearDropdownPlaceholder.innerText = event.target.value;
//   } else if (yearUrl.value === "all") {
//     yearDropdownPlaceholder.innerText = "Alle jaren";
//   }
//   url.searchParams.has("year")
//     ? url.searchParams.set("year", event.target.value)
//     : url.searchParams.append("year", event.target.value);
//   url.search = url.searchParams;
//   url = url.toString();
//   // append into URL without reloading the page
//   history.pushState({}, null, url);
// });
// //listen to category dropdown and if an item is clicked, run getActiveCategoryTab()
// //The timeout is essential for this to work, because the dom takes a fraction of a second to update
// categorySelectOption.forEach((tabLink) => {
//   tabLink.addEventListener("click", () => {
//     setTimeout(() => {
//       console.log("*------- Category selection option trigger --------*");
//       getActiveCategoryTab();
//     }, 50); //in ms
//   });
// });
// //listen to changes in the searchbar and updates table of content
// //The timeout is essential for this to work, because the dom takes a fraction of a second to update
// searchBarInputField.forEach((searchbar) => {
//   searchbar.addEventListener("keyup", () => {
//     console.log(
//       "*-------------* Searchbar input has changed to: ",
//       searchbar.value
//     );
//     delayKeyUp(() => {
//       getActiveCategoryTab();
//     }, 400);
//   });
// });
// //listen to subcategory checkbox clicks and re-render table of content anchor links
// subcategoryCheckbox.forEach((checkbox) => {
//   checkbox.addEventListener("click", () => {
//     console.log("*-------------* subcategory was clicked: ");
//     delayKeyUp(() => {
//       getActiveCategoryTab();
//     }, 400);
//   });
// });
// //Check for active category tab on load, render correct table of content links
// //hide subcategory wrappers if they are empty
// window.addEventListener("load", () => {
//   getActiveCategoryTab();
//   hideSubcategoryWrapperIfEmpty();
//   console.log("Dom loaded");
// });
// /* --- END - DOM EventListeners --- */
//# sourceMappingURL=index.js.map