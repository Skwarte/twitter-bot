console.log("App is starting");
var Twit = require("twit");
var config = require("./config");

var T = new Twit(config);
var params = { q: "Purdue", count: 10 };

T.get("search/tweets", params, gotData);

function gotData(err, data, response) {
  console.log(data);
}
