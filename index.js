import { createRequire } from "module";

const require = createRequire(import.meta.url);

var Twit = require("twit");

require("dotenv").config();

var T = new Twit({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token: process.env.access_token,
  access_token_secret: process.env.access_token_secret,
});

const checktweets = () => {
  T.get(
    "search/tweets",
    { q: "from:CricketTamizhan", count: 1 },
    function (err, data, response) {
      const tweetCricketTamizhan = data.statuses[0];
      const interval =
        (new Date() - new Date(tweetCricketTamizhan.created_at)) / (1000 * 60);
      console.log(interval);
      if (interval < 1) {
        console.log("pp1");

        console.log(tweetCricketTamizhan);
        const accountSid = process.env.ACCOUNT_SID;
        const authToken = process.env.AUTH_TOKEN;
        const client = require("twilio")(accountSid, authToken);

        client.messages
          .create({
            from: "whatsapp:+14155238886",
            body: `CricketTamizhan - ${tweetCricketTamizhan.text}`,
            to: "whatsapp:+917661016464",
          })
          .then((message) => console.log(""))
          .catch((err) => console.log(err));

        console.log(interval);
      }
    }
  );
  T.get(
    "search/tweets",
    { q: "from:lucky7777777a", count: 1 },
    function (err, data, response) {
      const tweetlucky7777777a = data.statuses[0];
      const interval =
        (new Date() - new Date(tweetlucky7777777a.created_at)) / (1000 * 60);

      if (interval < 1) {
        console.log(tweetlucky7777777a);
        const accountSid = "AC6bb57810d3168622b5818359678967cc";
        const authToken = "13aba2399d137b84e57264aef2817002";
        const client = require("twilio")(accountSid, authToken);

        client.messages
          .create({
            from: "whatsapp:+14155238886",
            body: `lucky7777777a - ${tweetlucky7777777a.text}`,
            to: "whatsapp:+917661016464",
          })
          .then((message) => console.log(""))
          .catch((err) => console.log(err));

        console.log(interval);
      }
    }
  );
};

// const checktweets = async () => {
//   const data = await twitterClient.accountsAndUsers.usersSearch({
//     q: "UrsSaichand",
//   });

//   const tweet = data[0].status;

//   const interval = (new Date() - new Date(tweet.created_at)) / (1000 * 60);

//   if (interval < 1) {
//     console.log("pppp");
//     const accountSid = "AC6bb57810d3168622b5818359678967cc";
//     const authToken = "13aba2399d137b84e57264aef2817002";
//     const client = require("twilio")(accountSid, authToken);

//     client.messages
//       .create({
//         from: "whatsapp:+14155238886",
//         body: tweet.text,
//         to: "whatsapp:+917661016464",
//       })
//       .then((message) => console.log(""))
//       .catch((err) => console.log(err));

//     console.log("p");
//   }
// };

setInterval(() => {
  checktweets();
}, 1000 * 20);
