console.log("App is starting");
var Twit = require("twit");
var config = require("./config");

var T = new Twit(config);

var stream = T.stream("user");
/*
stream.on("follow", followed);

function followed(event) {
  var name = event.source.name;
  var screenName = event.source.screen_name;
  tweetIt("@" + screenName + "thank you for the follow.");
}
*/
//tweetIt();
//setInterval(tweetIt, 1000 * 20);

function tweetIt(t) {
  //  var r = Math.floor(Math.random() * 100);

  var tweet = { status: t };
  T.post("statuses/update", tweet, tweeted);

  function tweeted(err, data, response) {
    if (err) {
      console.log("an error occured");
    } else {
      console.log("Tweet Sent");
    }
  }
}

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
/*
var params = { q: "Purdue", count: 10 };

T.get("search/tweets", params, gotData);

function gotData(err, data, response) {
  console.log(data);
}

*/
