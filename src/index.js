const { default: index } = require("./pages");
const { default: all } = require("./pages/all");
const { default: dashboardHome } = require("./pages/dashboard/home");

// indication to see if the webflow server is connected
console.log("local webflow server connected!");

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

