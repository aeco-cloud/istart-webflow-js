export default function dashboardHome() {
  console.log("/dashboard/home code executing");

  // in this section we populate the iframe with the glideSessionId and the gaSessionId
  (async () => {

    // get the gaSessionId
    const gaSessionId = await new Promise((resolve) => {
      gtag("get", "G-18ZZXF30B4", "session_id", resolve);
    });

    // create the glideSessionId
    const glideSessionId = Date.now() * Math.floor(Math.random() * 100);

    // create the src for the iframe and append it to the iframe
    const src = `https://app.istart.be?glideSessionId=${glideSessionId}&gaSessionId=${gaSessionId}`;
    console.log("src for iframe: ", src);
    top.document.getElementById("myiframe").setAttribute("src", src);
  })();
}
