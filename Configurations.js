require("dotenv").config();

let gg = process.env.MODS;
if (!gg) {
  gg = "917440516519";   // You can replace this number with yours //
}


global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "mongodb+srv://ayuplaymusic:ayuplaymusic@ayuplay.rlqhduq.mongodb.net/?retryWrites=true&w=majority";
global.sessionId = process.env.SESSION_ID || "lawdabot9792731";
global.prefa = process.env.PREFIX || ".";
global.tenorApiKey = process.env.TENOR_API_KEY || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c";
global.packname = process.env.PACKNAME || `For All`;
global.author = process.env.AUTHOR || "by: Noone";
global.port = process.env.PORT || "10000";
global.openAiAPI = process.env.OPENAI_API || "Put your openai API key here";
global.owner = gg.split(",");

module.exports = {
  mongodb: global.mongodb,
};
