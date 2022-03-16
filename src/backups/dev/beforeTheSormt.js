// <!-- [Attributes by Finsweet] CMS Filter -->
// <script async src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js"></script>

// <!-- [Attributes by Finsweet] CMS Load -->
// <script async src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsload@1/cmsload.js"></script>

// <!-- [Attributes by Finsweet] CMS Nest -->
// <script async src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsnest@1/cmsnest.js"></script>

// <!-- [Attributes by Finsweet] Mirror input values -->
// <script defer src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-mirrorinput@1/mirrorinput.js"></script>

{
  /* <iframe
  id="{{wf {&quot;path&quot;:&quot;table-id&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}-all"
  src=""
  frameborder="0"
  style="min-width: 100%"
>
</iframe>
<script>
window.onload = function() {
    		let src = "";
        let language = document.getElementById("w-dropdown-toggle-0").getAttribute('lang');
        if(!language || language == '') {
        language = 'nl';
        }
        let yearInput = document.getElementById('select').value;
        if(!yearInput || yearInput == '') {
        yearInput = '2022';
        }
       console.log('on load ran and the language is: ', language, document.getElementById("w-dropdown-toggle-0").getAttribute('lang'))
        src = `https://aeco-tables-6kjum8uwt-aeco.vercel.app/fiscusOnWeb/${yearInput}/${language}/{{wf {&quot;path&quot;:&quot;table-id&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}`;
        document.getElementById("{{wf {&quot;path&quot;:&quot;table-id&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}-all").src = src;
  }
  //listen to category changes
  document.getElementById("category-select").addEventListener("change", () => {
  			let src = "";
        let language = document.getElementById("w-dropdown-toggle-0").getAttribute('lang');
        if(!language || language == '') {
        language = 'nl';
        }
        let yearInput = document.getElementById('select').value;
        if(!yearInput || yearInput == '') {
        yearInput = '2022';
        }
       console.log('on load ran and the language is: ', language, document.getElementById("w-dropdown-toggle-0").getAttribute('lang'))
        src = `https://aeco-tables-6kjum8uwt-aeco.vercel.app/fiscusOnWeb/${yearInput}/${language}/{{wf {&quot;path&quot;:&quot;table-id&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}`;
        setTimeout(() => {
        document.getElementById("{{wf {&quot;path&quot;:&quot;table-id&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}-all").src = src;
        }, 200)
        
  })

document.getElementById('language-switch').addEventListener('click', () => {
				let src = "";
        let language = document.getElementById("language-switch").getAttribute('lang');
        if(!language || language == '') {
        language = 'nl';
        }
        var yearInput = document.getElementById('select').value;
        
        if (yearInput) {
          src = `https://aeco-tables-6kjum8uwt-aeco.vercel.app/fiscusOnWeb/${yearInput}/${language}/{{wf {&quot;path&quot;:&quot;table-id&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}`;
        } else if (!yearInput || yearInput === '') {
          src = `https://aeco-tables-6kjum8uwt-aeco.vercel.app/fiscusOnWeb/2022/${language}/{{wf {&quot;path&quot;:&quot;table-id&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}`;
        }
        if(document.getElementById('{{wf {&quot;path&quot;:&quot;table-id&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}-all')) {
        document.getElementById("{{wf {&quot;path&quot;:&quot;table-id&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}-all").src = src;
        }
})

document.getElementById("select").addEventListener("change", (event) => {
				let src = "";
        let language = document.getElementById("w-dropdown-toggle-0").getAttribute('lang');
        if(!language || language == '') {
        language = 'nl';
        }
        var yearInput = event.target.value;
        
        if (yearInput) {
          src = `https://aeco-tables-6kjum8uwt-aeco.vercel.app/fiscusOnWeb/${yearInput}/${language}/{{wf {&quot;path&quot;:&quot;table-id&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}`;
        } else if (!yearInput || yearInput === '') {
          src = `https://aeco-tables-6kjum8uwt-aeco.vercel.app/fiscusOnWeb/2022/${language}/{{wf {&quot;path&quot;:&quot;table-id&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}`;
        }
        if(document.getElementById('{{wf {&quot;path&quot;:&quot;table-id&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}-all')) {
        document.getElementById("{{wf {&quot;path&quot;:&quot;table-id&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}-all").src = src;
        }
})
</script>
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.1/iframeResizer.js"
  integrity="sha512-w1y1jDdN4SNiO4CYUKPmv1WixY4UrOMaFjeTfi/VzhYzbc/mA9+lJyVJ+yHlVruEmSX8f3/R3tSukwhUDUCBuw=="
  crossorigin="anonymous"
></script>
<script>iFrameResize({ log: false }, "#{{wf {&quot;path&quot;:&quot;table-id&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}-all")</script> */
}

window.addEventListener("load", (event) => {
  //check if iframe is in viewport
  function isInViewport(element) {
    if (element) {
      var bounding = element.getBoundingClientRect();

      if (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <=
          (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      ) {
        console.log(element.getAttribute("id"), " is in the viewport!");
        return true;
      } else {
        console.log(element.getAttribute("id"), " is NOT in the viewport!");
        return false;
      }
    }
  }

  function shouldRenderIframe() {
    setTimeout(() => {
      let iframe = document.getElementById(
        "{{wf {&quot;path&quot;:&quot;table-id&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}-all"
      );
      let src;
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
      src = `https://aeco-tables-6kjum8uwt-aeco.vercel.app/fiscusOnWeb/${yearInput}/${language}/table-id-all`;
      if (!iframe.getAttribute("src") || iframe.getAttribute("src") === "") {
        if (iframe.offsetHeight > 0 && isInViewport(iframe)) {
          document.getElementById("table-id-all").src = src;
          iFrameResize({ log: false }, "#table-id-all");
        }
      }
    }, 500);
  }
  shouldRenderIframe();

  document.addEventListener("scroll", () => {
    shouldRenderIframe();
  });
  document.getElementById("submit-button").addEventListener("click", () => {
    shouldRenderIframe();
  });
});

function shouldRenderIframe() {
  let iframe = document.getElementById(
    "{{wf {&quot;path&quot;:&quot;table-id&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}-all"
  );
  let src;
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
  src = `https://aeco-tables-6kjum8uwt-aeco.vercel.app/fiscusOnWeb/${yearInput}/${language}/{{wf {&quot;path&quot;:&quot;table-id&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}`;
  setTimeout(() => {
    if (iframe.offsetHeight > 0 && isInViewport(iframe)) {
      document
        .getElementById(
          "{{wf {&quot;path&quot;:&quot;table-id&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}-all"
        )
        .setAttribute("src", src);
      iFrameResize(
        { log: false },
        "#{{wf {&quot;path&quot;:&quot;table-id&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}-all"
      );
    }
  }, 1000);
}

function isInViewport(element) {
  if (element) {
    var bounding = element.getBoundingClientRect();
    if (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth) &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    ) {
      console.log(element.getAttribute("id"), " is in the viewport!");
      return true;
    } else {
      console.log(element.getAttribute("id"), " is NOT in the viewport!");
      return false;
    }
  }
}
