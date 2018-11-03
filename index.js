console.log("App is starting");
var Twit = require("twit");
var config = require("./config");

var T = new Twit(config);

tweetIt();
setInterval(tweetIt, 1000 * 20);

function tweetIt() {
  var r = Math.floor(Math.random() * 100);

  var tweet = { status: r };
  T.post("statuses/update", tweet, tweeted);

  function tweeted(err, data, response) {
    if (err) {
      console.log("an error occured");
    } else {
      console.log("Tweet Sent");
    }
  }
}
/** 
var params = { q: "Purdue", count: 10 };

T.get("search/tweets", params, gotData);

function gotData(err, data, response) {
  console.log(data);
}
*/
