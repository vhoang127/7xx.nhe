module.exports.config = {
  name: "tagadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot sแบฝ rep ng tag admin hoแบทc rep ng tagbot ",
  commandCategory: "Other",
  usages: "tagadmin",
  cooldowns: 1,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "none") {//id bot
    var aid = ["@Cรดng Thร nh","100048760441123"];//id admin(s)
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["๐ฎ๐ฬ","๐ป๐๐ ๐๐ฬ ๐ ๐ฅบ","๐ฏ๐ฬ","๐บ๐๐ ๐ฬ","๐ต๐๐๐ ๐๐ฬฃ๐","๐บ๐๐ ๐๐ฬ","๐ช๐ฬ ๐๐ฬ ๐๐๐๐","๐๐","๐ฎ๐ฬฃ๐ ๐๐๐ ๐ฬ","๐ต๐ฬ๐ ๐ ๐๐ฬ","๐๐ฬฃ ๐๐๐๐","๐ต๐ฬ๐ ๐","๐ช๐๐ฬฃ๐ ๐๐ฬ ๐ฬ","๐ป๐๐ ๐๐๐๐ ๐๐ฬ","๐ต๐ฬ๐ ๐ , ๐๐๐ ๐๐๐๐ ๐๐ฬ" ,"๐ป๐๐ ๐๐ฬ , ๐๐๐ ๐ฬ" , "๐ต๐๐๐ ๐๐ฬฃ๐ ๐ฬ๐","๐ป๐๐ ๐๐ฬ","๐ฎ๐ฬฃ๐ ๐๐ฬ ๐ฬ","๐ฎ๐ฬฃ๐ ๐๐ฬ ๐๐ฬ ๐๐๐๐"];//(cรกc) cรขu bot rep
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
  }