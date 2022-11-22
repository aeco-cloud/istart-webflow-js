import bootIntercom from "../helpers/bootIntercom";
import checkForPartenaCookieAndShowLogo from "../helpers/checkForPartenaCookieAndShowLogo";
import getEnvironment from "../helpers/getEnvironment";

// this code will run on all pages
export default function all() {
  // initiate gtag in order to make it accessible
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }

  bootIntercom(getEnvironment());

  checkForPartenaCookieAndShowLogo();
}
