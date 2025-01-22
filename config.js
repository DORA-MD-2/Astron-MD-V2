const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "vMFWzAJT#SUL477kcgy4h3BJtKepQA75oCp9ombC3hdNfZZNlN-w",
  MONGODB: process.env.MONGODB || "mongodb://mongo:JADsENOSrlcxKcUfxZuwoIQuoPEQrsXj@roundhouse.proxy.rlwy.net:48219",
  OWNER_NUM: process.env.OWNER_NUM || "94784280074",
};
