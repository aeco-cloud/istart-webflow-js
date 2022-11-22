export default function bootIntercom(environment) {
  const intercomDevSrc = "sfzn80ow";
  const intercomProdSrc = "noazre9b";

  let app_id = "";
  if (environment === "develop" || environment === "local") {
    console.log("using develop intercom");
    app_id = intercomDevSrc;
  } else {
    console.log("using production intercom");
    app_id = intercomProdSrc;
  }
  window.intercomSettings = {
    app_id: app_id,
  };

  var startIntercom = function () {
    var w = window;
    var ic = w.Intercom;
    if (typeof ic === "function") {
      ic("reattach_activator");
      ic("update", w.intercomSettings);
    } else {
      var d = document;
      var i = function () {
        i.c(arguments);
      };
      i.q = [];
      i.c = function (args) {
        i.q.push(args);
      };
      w.Intercom = i;
      var l = function () {
        var s = d.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://widget.intercom.io/widget/" + app_id;
        var x = d.getElementsByTagName("script")[0];
        x.parentNode.insertBefore(s, x);
      };
      if (document.readyState === "complete") {
        l();
      } else if (w.attachEvent) {
        w.attachEvent("onload", l);
      } else {
        w.addEventListener("load", l, false);
      }
    }
  };

  setTimeout(startIntercom, 4 * 1000);
}
