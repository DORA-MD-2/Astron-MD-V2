const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "vMFWzAJT#SUL477kcgy4h3BJtKepQA75oCp9ombC3hdNfZZNlN-w",
  OWNER_NUM: process.env.OWNER_NUM || "94784280074",
  PREFIX: process.env.PREFIX || ".",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/m8xtvw.jpeg",
  ALIVE_MSG: process.env.ALIVE_MSG || "Hello , I am alive now!!\n\n*🤡 Made by Nimsara 🤡*\n\n*watsapp channel link* - https://whatsapp.com/channel/0029Vb0bsRuFnSz4XAQ2yT0r",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
  MODE: process.env.MODE || "public",
  AUTO_VOICE: process.env.AUTO_VOICE || "true",
  AUTO_STICKER: process.env.AUTO_STICKER || "true",
  AUTO_REPLY: process.env.AUTO_REPLY || "true",
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || "AIzaSyC2EwdrJSw9K9P8856eZCXIKgRgHH2yxrA",
};
