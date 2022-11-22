# Webflow Dev Setup

This is a basic setup for developing JavaScript and TypeScript inside of Webflow. It allows to run javascript from a local server and connect it to a deployed webflow website (if you open the deployed webflow website on the same system as where the local server is running). Once you are happy with your scripts you can copy and paste them inside the webflow project so that they are available to everyone

# Development

1. Install packages ```npm install```
2. Place this script tag in your Webflow Site. ```<script src="http://localhost:8080/bundle.js" type="text/javascript" crossorigin="anonymous"></script>``` -> see the webflow custom code section to see how this is implemented
3. Run the webpack dev server ```npm run serve```

# Production

Build the production bodyScript by running ```npm run build``` and push the code on the main branch. The code is linked with the webflow website through the publicly hosted githubpages url `https://aeco-cloud.github.io/istart-webflow-js/webflow/bodyScript.js`
