export default function (elementId, eventName) {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }

  var element = document.getElementById(elementId);
  element.addEventListener("click", () => {
    console.log(`event ${eventName} fired`);
    gtag("event", eventName, {});
  });
}
