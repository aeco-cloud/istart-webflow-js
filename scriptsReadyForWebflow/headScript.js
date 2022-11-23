console.log("I am in the head!")

// this code enables the gtag to be accessible globally
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}