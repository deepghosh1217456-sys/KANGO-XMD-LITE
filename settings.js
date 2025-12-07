//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : KANGO-XMD 
// @author : Hector 
// @telegram : http://t.me/official_kango
// @github : OfficialKango
// @whatsapp : +233509977126

//----------------------[ KANGO-XMD ]----------------------//

const fs = require('fs')
const { color } = require('./kango/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUxpNWFqNGkwWFNDRWwwajg2eFJ4S1BpVE5FN2ZhNUpSdzFvTGt2OU1taz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQjExU0ZubEo3VEowSDZaS1JqVE1TUE1LU0IyejM3Y0ppdHpudkhvNlpCND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXQWY2SnladWt4dC9qTkdaUVNUaExxQmZ0S0R3QUQ5TlFxRDJ1NXpHalhBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0Nmw2MUtWVXlpN3hYMHlEUWZ6ZGJac3E2dGFhN3A0NmF0Nm5sZ1BFWFd3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFKbTVHOG9PYlR6Nm9DYlBvd1NXc1hKbmswYUFOa0xkMDF1MlV4UVBLMjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1CVDY0RVdLOXZpR0JydXBxNS8va0ViSFFwZERydWR3UjZlN0JvMytoRms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0syaVBBdzJrbThDNkg3U3V0a2FmS1EyL1pkRUM1bnhMUUh6VVBNZzdGaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1dndjRxR3VrRVR6KytVYkFLTEdTTDJoTjJ4TWE3ejVlUC9zWHQ1VzBDTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaQjM2L3l0TXBWMzIvVlBXRzQ4VnU0Ym96OFljTFVsV05ZbzBlOVlFTWJPZ21ITmFXK2pIcEpmQkRPWTlmVFJmUlBlQ3VMdGRnQWJyaHVKaXd4SEJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTksImFkdlNlY3JldEtleSI6ImpRMmpqQXBKamh5RUpwRVFGaWNYbzFydThRUkJNU3QvU2pjcjk3dFhpaUk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTE2MjkwNjQwNzYwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBNTM1MzQ4NjVCMUMwRDI3MUVFQTMzRkU2Qjg3MEExOSIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY1MTEzNDc4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTYyOTA2NDA3NjBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkE1RDFCQ0MwQkJENjJFMzg4MkU5NTY0Q0M4OUUzNDlDIiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjUxMTM0Nzl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkxNjI5MDY0MDc2MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQTVFOTIyRjNEODZCN0M2OTA5NEQzQjZEOTBEM0Y5NjEiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NTExMzQ3OX1dLCJuZXh0UHJlS2V5SWQiOjgxMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxMywiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJDRzlaQUdSViIsIm1lIjp7ImlkIjoiOTE2MjkwNjQwNzYwOjIyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IsqZ4bSAypnhtIDJqiIsImxpZCI6IjcwNDI5NDYwOTU5NDQ0OjIyQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS3k1Z0VzUTkvelZ5UVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoia093NnhkeHVuWFFOUlU0Q1RmbllFUHVpWUw3dFpIc2RISGxJNmlMaEptdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoidXM5ZWN1MGMxRTE4WlorMGJDcXBoclJRNDc1Q1liK2RPYkcrZzQrTHZyRE15L3V5d3B4NnQ3SU1zUTRhME1IRWpzSjdveEpSVUNNZk5LS1BHME9nREE9PSIsImRldmljZVNpZ25hdHVyZSI6ImpBbFo2Q2tFcEtlQmFQOTZpbGFxaHV3aUxvbTBvSy95bk0xeGdwNFZ4UjMwTFBKZGk4ZVhwb2d5UzJiTTJ1NWdlalNBaXZsNDVQY3Faa3ZJL29sUkFRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNzA0Mjk0NjA5NTk0NDQ6MjJAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpEc09zWGNicDEwRFVWT0FrMzUyQkQ3b21DKzdXUjdIUng1U09vaTRTWnMifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lBZ2dTIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2NTExMzQ3NiwibGFzdFByb3BIYXNoIjoiNFpSUDZTIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJamYifQ==' 
//Enter your KANGO-XMD session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'KANGO-XMD' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '233509977126' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['233509977126', '233577860202'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Hector Manuel' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "KANGO-XMD" 

//--------------[ COUNTRY TIMEZONE ]------------//


global.timezones = 'Africa/Accra';  // Set this to you timezone



//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "Hector" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©KANGO-XMD"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©kango-xmd', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ KANGO-XMD ]----------------------//
