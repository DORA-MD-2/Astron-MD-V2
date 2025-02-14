const { cmd, commands } = require("../command");
const config = require('../config');

cmd(
  {
    pattern: "menu",
    alias: ["getmenu","list"],
    react: "🤡",
    desc: "get cmd list",
    category: "main",
    filename: __filename,
  },
  async (
    robin,
    mek,
    m,
    {
      from,
      quoted,
      body,
      isCmd,
      command,
      args,
      q,
      isGroup,
      sender,
      senderNumber,
      botNumber2,
      botNumber,
      pushname,
      isMe,
      isOwner,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      reply,
    }
  ) => {
    try {
      let menu = {
        main: "",
        download: "",
        group: "",
        owner: "",
        convert: "",
        search: "",
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[
            commands[i].category
          ] += `${config.PREFIX}${commands[i].pattern}\n`;
        }
      }

      let madeMenu = `👋🤡 *Hellow  ${pushname}*


| *MAIN COMMANDS* |
    ▫️ .alive
    ▫️ .menu
    ▫️ .ai
    ▫️ .system
    ▫️ .owner
| *DOWNLOAD COMMANDS* |
    ▫️ .song
    ▫️ .video
    ▫️ .fb
| *GROUP COMMANDS* |
${menu.group}
| *OWNER COMMANDS* |
    ▫️ .restart
    ▫️ .update
| *CONVERT COMMANDS* |
    ▫️ .sticker <reply img>
    ▫️ .img <reply sticker>
    ▫️ .tts <text>
| *SEARCH COMMANDS* |
${menu.search}

*watsapp channel link* - https://whatsapp.com/channel/0029Vb0bsRuFnSz4XAQ2yT0r

*Made by Nimsara 🤡*

> Astron MENU MSG
`;

 await robin.sendPresenceUpdate('recording', from); 
     await robin.sendMessage(from, { audio: { url: "https://github.com/nethmintha/example_da/raw/refs/heads/main/auto_voice/Astron%20phonk.MP3" }, mimetype: 'audio/mpeg', ptt: true }, { quoted: mek });


      await robin.sendMessage(
        from,
        {
          image: {
            url: "https://files.catbox.moe/m8xtvw.jpeg",
          },
          caption: madeMenu,
        },
        { quoted: mek }
      );
    } catch (e) {
      console.log(e);
      reply(`${e}`);
    }
  }
);
