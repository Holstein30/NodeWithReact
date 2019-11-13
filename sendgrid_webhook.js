var localtunnel = require("localtunnel");

localtunnel(5000, { subdomain: "gibberish333" }, function(err, tunnel) {
  console.log("LT running");
});
