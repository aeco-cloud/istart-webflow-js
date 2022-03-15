<iframe id=" -all" src="" frameborder="0" style="min-width: 100%"></iframe>;
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
document.getElementById("select").addEventListener("change", (event) => {
  let src = "2022";
  var yearInput = event.target.value;

  if (yearInput) {
    src = `https://tables.aeco.cloud/fiscusOnWeb/${yearInput}/${language}/ `;
  } else if (!yearInput || yearInput === "") {
    src = "https://tables.aeco.cloud/fiscusOnWeb/2022/ ";
  }
  if (document.getElementById("all")) {
    document.getElementById(" -all").setAttribute("src", src);
  }
});
document.querySelectorAll(".filter_reset_all").forEach((item) => {
  item.addEventListener("click", (event) => {
    let src = "https://tables.aeco.cloud/fiscusOnWeb/2022/ ";
    if (document.getElementById(" -all")) {
      document.getElementById(" -all").setAttribute("src", src);
    }
  });
});
src =
  "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.1/iframeResizer.js";
integrity =
  "sha512-w1y1jDdN4SNiO4CYUKPmv1WixY4UrOMaFjeTfi/VzhYzbc/mA9+lJyVJ+yHlVruEmSX8f3/R3tSukwhUDUCBuw==";
crossorigin = "anonymous";
iFrameResize({ log: false }, "# -all");

document.querySelector("#submit-button").addEventListener("click", () => {
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
});
document.querySelectorAll(".filter_reset_all").forEach((item) => {
  item.addEventListener("click", (event) => {
    let src =
      "https://tables.aeco.cloud/fiscusOnWeb/2022/{{wf {&quot;path&quot;:&quot;table-id&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}";
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
});
