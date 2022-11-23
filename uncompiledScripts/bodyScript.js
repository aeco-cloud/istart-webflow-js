const { default: index } = require("./pages/home");
const { default: all } = require("./pages/all");
const { default: dashboardHome } = require("./pages/dashboard");
const { default: getEnvironment } = require("./helpers/getEnvironment");

// indication to see if the webflow server is connected
console.log("istart-webflow-js script connected!");

// get the current path. Based on this path we execute different functions
const currentPath = window.location.pathname;

// code to run on all pages
all();

if (currentPath === "/") {
  index();
}

if (currentPath === "/dashboard/home") {
  dashboardHome();
}
