export default function () {
  let myScript = document.createElement("script");
  myScript.setAttribute(
    "src",
    "https://www.googletagmanager.com/gtag/js?id=G-18ZZXF30B4"
  );
  document.body.appendChild(myScript);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-18ZZXF30B4");
}
