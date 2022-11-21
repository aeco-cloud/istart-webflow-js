console.log("local webflow server connected!!!");

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}

// let gaSessionId = "";
(async () => {
  const gaSessionId = await new Promise((resolve) => {
    gtag("get", "G-18ZZXF30B4", "session_id", resolve);
  });
  const glideSessionId = Date.now() * Math.floor(Math.random() * 100);

  const src = `https://app.istart.be?glideSessionId=${glideSessionId}&gaSessionId=${gaSessionId}`;

  console.log("src for iframe: ", src);
  top.document.getElementById("myiframe").setAttribute("src", src);
})();
