{
  /* <iframe
  id="{{wf {&quot;path&quot;:&quot;table-id&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}-all"
  src=""
  frameborder="0"
  style="min-width: 100%"
>
</iframe>
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.1/iframeResizer.js"
  integrity="sha512-w1y1jDdN4SNiO4CYUKPmv1WixY4UrOMaFjeTfi/VzhYzbc/mA9+lJyVJ+yHlVruEmSX8f3/R3tSukwhUDUCBuw=="
  crossorigin="anonymous"
></script>
<script>
window.addEventListener('load', (event) => {
var iframe = document.getElementById("{{wf {&quot;path&quot;:&quot;table-id&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}-all")
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
      //console.log(element.getAttribute("id"), " is in the viewport!");
      return true;
    } else {
     // console.log(element.getAttribute("id"), " is NOT in the viewport!");
      return false;
    }
  }
}

function shouldRenderIframe() {
		 setTimeout(() => {
				let src;
        let language = document.getElementById("w-dropdown-toggle-0").getAttribute('lang');
        if(!language || language == '') {
        language = 'nl';
        }
        let yearInput = document.getElementById('select').value;
        if(!yearInput || yearInput == '') {
        yearInput = '2022';
        }
      	src = `https://aeco-tables-6kjum8uwt-aeco.vercel.app/fiscusOnWeb/${yearInput}/${language}/{{wf {&quot;path&quot;:&quot;table-id&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}`;
       if(iframe) {
       if(iframe.getAttribute('src') !== src) {
        if(iframe.offsetHeight > 0 && isInViewport(iframe)) {
         	iframe.setAttribute('src', src);
        	iFrameResize({ log: false }, "#{{wf {&quot;path&quot;:&quot;table-id&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}-all")
       	 }
        }
       }
      }, 500)
		}
    
shouldRenderIframe();    
	
window.addEventListener('scroll', () => {
    shouldRenderIframe()
  })
document.getElementById('submit-button').addEventListener('click', () => {
console.log('primary submit ran')
		setTimeout(() => {
    shouldRenderIframe()
    }, 500)
	})
  
document.getElementById('reset-search').addEventListener('click', () => {
if(iframe) {
	iframe.setAttribute('src', '')
	}
})
  
  function createObserver() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList()
  };

  observer = new IntersectionObserver(shouldRenderIframe, options);
  observer.observe(iframe);
}
})
  
</script> */
}
