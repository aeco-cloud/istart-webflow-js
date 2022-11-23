const { default: home } = require("./pages/home");
const { default: all } = require("./pages/all");
const { default: dashboardHome } = require("./pages/dashboard");

// indication to see if the webflow server is connected
console.log("istart-webflow-js script connected!");

// get the current path. Based on this path we execute different functions
const currentPath = window.location.pathname;

// code to run on all pages
all();

if (currentPath === "/") {
  home();
}

if (currentPath === "/dashboard") {
  dashboardHome();
}
