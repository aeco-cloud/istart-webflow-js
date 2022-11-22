# Webflow Dev Setup

This is a basic setup for developing JavaScript and TypeScript inside of Webflow. It allows to run javascript from a local server and connect it to a deployed webflow website (if you open the deployed webflow website on the same system as where the local server is running). Once you are happy with your scripts you can copy and paste them inside the webflow project so that they are available to everyone

# Development

1. Install packages ```npm install```
2. Place this script tag in your Webflow Site. ```<script src="http://localhost:8080/bundle.js" type="text/javascript" crossorigin="anonymous"></script>``` 
3. Run the webpack dev server ```npm run serve```

# Production

Build the production JavaScript ```npm run build``` and paste bundle.js script inside of the webflow custom code
