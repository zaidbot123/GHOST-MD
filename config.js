const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "sXtD1AjL#JN_DJeFlEnjPPb-DGB-ABf2RSwQBkgNNzqXMiai2BC8",
MONGODB: process.env.MONGODB || "mongodb+srv://Suhail:suhail@cluster0.rzhkoqf.mongodb.net/?retryWrites=true&w=majority",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/397000a07a1deb7fad9c2.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "🤖🔰 Hi GHOST-MD Is Online Now 💻\n*💻 Owner* - GHOST-MD\n\n*💻 Owner Number* -923357433862",
SUDO_NB: process.env.SUDO_NB || "923357433862",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true"
};
