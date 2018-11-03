console.log("App is starting");
var Twit = require("twit");
var config = require("./config");

var T = new Twit(config);
var tweet = { status: "My first tweet from my app!" };
T.post("statuses/update", tweet, tweeted);

function tweeted(err, data, response) {
  if (err) {
    console.log("an error occured");
  } else {
    console.log("Tweet Sent");
  }
}
/** 
var params = { q: "Purdue", count: 10 };

T.get("search/tweets", params, gotData);

function gotData(err, data, response) {
  console.log(data);
}
*/
