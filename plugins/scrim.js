const handler = async (m, {conn}) => {
  m.reply(global.scrim);
};
handler.command = /^(scrim|scrims)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.scrim = ` 
╭──────⚔──────╮
ㅤ𝐒𝐂𝐑𝐈𝐌𝐒 𝐂𝐎𝐌𝐏𝐄𝐓𝐈𝐓𝐈𝐕𝐎
╰──────⚔──────╯
╭──────────────╮
│ㅤ⏱ 𝐇𝐎𝐑𝐀𝐑𝐈𝐎 
│ㅤ🇲🇽 𝐌𝐄𝐗 : 
│ㅤ🇨🇴 𝐂𝐎𝐋 : 
│➥ 𝐓𝐎𝐓𝐀𝐋 𝐒𝐀𝐋𝐀𝐒:
│➥ 𝐂𝐀𝐒𝐈𝐋𝐋𝐀:
│➥ 𝐉𝐔𝐆𝐀𝐃𝐎𝐑𝐄𝐒:
│
│     𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 
│
│👑 ➤ 
│🥷🏻 ➤  
│🥷🏻 ➤ 
│🥷🏻 ➤ 
│
│ㅤʚ 𝐒𝐔𝐏𝐋𝐄𝐍𝐓𝐄:
│🥷🏻 ➤  
│🥷🏻 ➤
╰─────────────╯
`;
