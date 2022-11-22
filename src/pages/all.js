// this code will run on all pages
export default function all() {
  // initiate gtag in order to make it accessible
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }

  //Checking for utm_sociaal_secretariaat = partena
  //if it exists, show logo (standard), else add class hidden to logo
  var partenaLogo = document.getElementById("partena-logo");

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function checkCookie() {
    let url = new URL(window.location);
    let sociaalSecretariaatCookie = getCookie("utm_sociaal_secretariaat");
    if (
      url.searchParams.get("utm_source") === "partena" ||
      sociaalSecretariaatCookie === "partena"
    ) {
      console.log("Success! cookie: " + sociaalSecretariaatCookie);
      partenaLogo.classList.remove("hidden");
    } else {
      console.log("No partena");
    }
  }
  document.addEventListener("DOMContentLoaded", (event) => {
    console.log("Dom loaded");
    checkCookie();
  });
}
