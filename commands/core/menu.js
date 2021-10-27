const fetch = require('node-fetch')
      speed = global.Ft['speed']
      os = global.Ft['os']
      fs = Ft.fs,
      moment = require('moment-timezone')

module.exports = {
name: ["menu"],
type: ["default"],
useLimit: true,
description: "list menu button",
utilisation: userbot.prefix + "menu",

async execute(m) {
let { conn, text } = data

let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let name = conn.getName(m.sender)
    let groups = conn.chats.array.filter(v => v.jid.endsWith('g.us'))
    let privat = conn.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
    let ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
    uptime = process.uptime();
    timestamp = speed();
    totalChat = await conn.chats.all()
    latensi = speed() - timestamp
    let total = Math.floor(`${groups.length}*${privat.length}`)

    let me = conn.user.name
let capt = `*${me}*

Hello ${name} ${ucapan()}

*メ ──❒「 INFO MIKO 」 ❒*
❒ *Nama:* Miko Chan
❒ *Runtime:* ${count(uptime)}
❒ *Speed:* ${latensi.toFixed(4)} ms
❒ *Host:* ${os.hostname()}
❒ *Total Feature:* ${Object.keys(Events).length}
❒ *Group Chats:* ${groups.length}
❒ *Private Chats :* ${privat.length}
❒ *Ram:* ${ram2}
❒ *Device:* ${os.platform()}
❒ *Battery:* ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 Ｃｈａｒｇｉｎｇ' : '⚡ Discharging' }` : 'Not detected'}

*メ ──❒「 INFO TIME 」 ❒*
❒ *clock:* ${time}
❒ *Islam Calender:* ${dateIslamic}
❒ *calender:* ${week} ${weton} ${date}

            *Found Bug?*
❒ ${userbot.prefix}report text

メ ──❒「 INFO 」 ❒
❏ Info : 
Harap Kasih Jeda Setiap
Menggunakan Bot Selama
5 detik atau tidak
Miko Block/Ban Selama 5 Minutes Dan Perintah
Miko Tidak Menggunakan tanda
[]
Terima kasih
メ ──❒「 END INFO 」 ❒`
buttons = [
  {
    buttonId: `menu`,
    buttonText:{
      displayText: '☘️MENU'
  },
  type:1
  },
  {
    buttonId: `creator`,
    buttonText:{
      displayText: '👥CREATOR'
  },
  type:1
  }
  ]
  imageMsg = (await conn.prepareMessageMedia((await (await Ft.fetch("https://telegra.ph/file/68ad13ca9fc043053cbb0.jpg")).buffer()), 'imageMessage', {thumbnail: Buffer.alloc(0)})).imageMessage
  buttonsMessage = { contentText: `Regards By Kotz`, footerText: 'Regards Kotz', imageMessage: imageMsg, buttons: buttons, headerType: 4 }
  prep = await conn.prepareMessageFromContent(m.chat,{buttonsMessage},{quoted: m, contextInfo: { externalAdReply: { title: 'My Name Kotz', body: 'My Waifu Emilia', mediaType: 2, thumbnailUrl: "https://telegra.ph/file/68ad13ca9fc043053cbb0.jpg", mediaUrl: "https://youtu.be/aDJpFh2c_qg" }}})
  conn.relayWAMessage(prep)
}
}

function random(ext) {
return ext[Math.floor(Math.random () * ext.length)]
}

function count(seconds){

if (typeof seconds !== "number") throw "connError: Unexpected Param " + typeof seconds

let hours = Math.floor(seconds / (60*60));
let minutes = Math.floor(seconds % (60*60) / 60);
let second = Math.floor(seconds % 60);
return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(second)} Detik`
}
function pad(s) {
return (s < 10 ? '0' : '') + s;
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat dinihari"
  if (time >= 4) {
    res = "Good Morning🌄"
  }
  if (time > 10) {
    res = "good afternoon"
  }
  if (time >= 15) {
    res = "good afternoon"
  }
  if (time >= 18) {
    res = "good evening"
  }
  return res
}
