var language = "nl";
if (Weglot.initialized) {
  language = Weglot.getCurrentLang();
  Weglot.on("languageChanged", function (newLang, prevLang) {
    console.log("The language on the page just changed to (code): " + newLang);
    if (newLang !== language) {
      language = newLang;
    }
  });
}
//render correct iframe src
function renderIframe() {
  let src =
    "https://tables.aeco.cloud/fiscusOnWeb/2022/nl/{{wf {&quot;path&quot;:&quot;table-id&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}";
  var yearInput = document.getElementById("select").value;

  if (yearInput) {
    src = `https://tables.aeco.cloud/fiscusOnWeb/${yearInput}/${language}/{{wf {&quot;path&quot;:&quot;table-id&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}`;
  } else if (!yearInput || yearInput === "") {
    src =
      "https://tables.aeco.cloud/fiscusOnWeb/2022/nl/{{wf {&quot;path&quot;:&quot;table-id&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}";
  }
  if (
    document.getElementById(
      "{{wf {&quot;path&quot;:&quot;table-id&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}-all"
    )
  ) {
    document
      .getElementById(
        "{{wf {&quot;path&quot;:&quot;table-id&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}-all"
      )
      .setAttribute("src", src);
  }
}

document.querySelector("#submit-button").addEventListener("click", () => {
  renderIframe();
});
document.getElementById("select").addEventListener("change", () => {
  renderIframe();
});
document.querySelectorAll(".filter_reset_all").forEach((item) => {
  item.addEventListener("click", (event) => {
    let src = "";
    if (
      document.getElementById(
        "{{wf {&quot;path&quot;:&quot;table-id&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}-all"
      )
    ) {
      document
        .getElementById(
          "{{wf {&quot;path&quot;:&quot;table-id&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}-all"
        )
        .setAttribute("src", src);
    }
  });
  //document.getElementById("select").addEventListener("change", (event) => {
});

var element = document.querySelector("#test");
setTimeout(function () {
  element.setAttribute("data-text", "whatever");
}, 5000);

var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.type === "attributes") {
      renderIframe();
    }
  });
});

observer.observe(document.getElementById("w-dropdown-toggle-0"), {
  attributes: true, //configure it to listen to attribute changes
});

let src = "";
setTimeout(() => {
  let language = document
    .getElementById("w-dropdown-toggle-0")
    .getAttribute("lang");
  if (!language || language == "") {
    language = "nl";
  }
  let yearInput = document.getElementById("select").value;
  if (!yearInput || yearInput == "") {
    yearInput = "2022";
  }
  console.log(
    "on load ran and the language is: ",
    language !==
      document.getElementById("w-dropdown-toggle-0").getAttribute("lang")
  );
  src = `https://aeco-tables-6kjum8uwt-aeco.vercel.app/fiscusOnWeb/${yearInput}/${language}/{{wf {&quot;path&quot;:&quot;table-id&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}`;
  document
    .getElementById(
      "{{wf {&quot;path&quot;:&quot;table-id&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}-all"
    )
    .setAttribute("src", src);
}, 400);
