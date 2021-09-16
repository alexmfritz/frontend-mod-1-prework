/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.time = timeStamp;
    this.number = numberOfLikes;
    this.comment = comments;
  }
  incrementLikes() {
    var x = Math.floor(Math.random()*25)*12+5;
    this.number+=x;
  }
  addComments() {
    var newComments = ["heck no, techno", "#notMyPolitician🤢", "i LOVE this idea😍", "can't wait to see these changes implemented!!!!!!!",
    "why can't we all just get along?", "not a fan", "one emoji:🥰", "one emoji:😤", "my body, my choice!", "#maskUp #goVote",
    "how did you even get voted into office?", "recount!!!", "you can't make me wear a mask", "they won't", "#myPolitician!", "#kanyeForPrez", "this is why i don't vote"];
    var randomComment = newComments[Math.floor(Math.random() * newComments.length)];
    this.comment.push(randomComment);
  }
};

var taxTweet = new Tweet("@POTUS", "tax cuts", "2:35PM SEP 15, 2021", 11500,
["tax cuts for the middle class!", "🤑tax the rich!🤑", "you tell them @POTUS", "how about student loans?🙄", "🙌🏻forgive student loans!"]);
console.log(taxTweet);
taxTweet.incrementLikes();
taxTweet.addComments();
console.log(taxTweet);
var reliefTweet = new Tweet("@truthout RETWEET: @AOC", "extend unemployment relief", "2:35PM SEP 15, 2021", 2434,
["No", "OMG AOC QUEEN", "Nah they can go back to work", "Isn't there a labor shortage?", "Oh yes please😫😭"]);
console.log(reliefTweet);
reliefTweet.incrementLikes();
reliefTweet.addComments();
console.log(reliefTweet);
var cleanEnergyTweet = new Tweet("@GovInslee", "clean energy", "12:38PM SEP 10, 2021", 299,
["When will we have thermal to electrical from all the volcanoes in the state?", "How about clean air?", "Do something to solve the homeless epidemic!"]);
console.log(cleanEnergyTweet);
cleanEnergyTweet.incrementLikes();
cleanEnergyTweet.addComments();
console.log(cleanEnergyTweet);
var freedomVoteTweet = new Tweet("@BarackObama", "The Freedom to Vote Act", "1:37PM SEP 14, 2021", 52100,
["ok", "yes", "Bait!", "we miss you!", "well said!", "Hello Obama", "yes please", "true", "yes to democracy!"]);
console.log(freedomVoteTweet);
freedomVoteTweet.incrementLikes();
freedomVoteTweet.addComments();
console.log(freedomVoteTweet);
