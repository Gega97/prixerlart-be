const functions = require("firebase-functions");
const express = require("express");

const webApp = express();
// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
exports.webApp = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});
