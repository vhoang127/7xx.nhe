module.exports.config = {
    name: "showdudiem",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "VanHung & Dựa trên demo của NTKhang",
    description: "triệu hồi bạn nữ show dú",
    commandCategory: "group",
    usages: "showdudiem",
    cooldowns: 9,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("triệu hồi thánh mõm show dú", event.threadID);
    let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Triệu hồi bạn nữ show dú!");
setTimeout(() => {a({body: "show dú đi em" + " " + name, mentions: arraytag})} , 3000);
setTimeout(() => {a({body: "show dú đi em" + " " + name, mentions: arraytag})} , 4000);
setTimeout(() => {a({body: "show dú đi em" + " " + name, mentions: arraytag})} , 5000);
setTimeout(() => {a({body: "show dú đi em" + " " + name, mentions: arraytag})} , 6000);
setTimeout(() => {a({body: "show dú đi em" + " " + name, mentions: arraytag})} , 6500);
setTimeout(() => {a({body: "show dú đi em" + " " + name, mentions: arraytag})} , 7000);
setTimeout(() => {a({body: "show dú đi em" + " " + name, mentions: arraytag})} , 7500);
setTimeout(() => {a({body: "show dú đi em" + " " + name, mentions: arraytag})} , 8000);
setTimeout(() => {a({body: "show dú đi em" + " " + name, mentions: arraytag})} , 8500);
setTimeout(() => {a({body: "show dú đi em" + " " + name, mentions: arraytag})} , 9000);
setTimeout(() => {a({body: "show dú đi em" + " " + name, mentions: arraytag})} , 9500);
setTimeout(() => {a({body: "show dú đi em" + " " + name, mentions: arraytag})} , 10000);
 }