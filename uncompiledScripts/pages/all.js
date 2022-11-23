import bootIntercom from "../helpers/bootIntercom";
import checkForPartenaCookieAndShowLogo from "../helpers/checkForPartenaCookieAndShowLogo";
import getEnvironment from "../helpers/getEnvironment";
import googleAnalyticsInit from "../helpers/googleAnalyticsInit";

// this code will run on all pages
export default function all() {
  googleAnalyticsInit()

  bootIntercom(getEnvironment());

  checkForPartenaCookieAndShowLogo();
}
