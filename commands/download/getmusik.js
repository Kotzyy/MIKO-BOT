const fs = Ft.fs
const { servers, yta, ytv } = require("../../Lib/y2mate.js")
let yts = require('yt-search')
let fetch = require('node-fetch')

module.exports = {

name: ["getmusic"],

type: ["download"],
useLimit: true,
description: "Download and searching music dri YouTube",
utilisation: userbot.prefix + "getmusic <query>",

async execute(m) {

 let { conn, args, caption } = data

if (!m.quoted.caption) return m.reply ('tolong reply hasil data yang di kirim oleh bot')
if (!args[0]) return m.reply("id or angka?")
let fear = args[1]
let hasilSplit = m.quoted.caption.split("(#)")[`${fear}`]
console.log(hasilSplit)
let hasil = ("https://youtu.be/" + hasilSplit)
let server = (hasil || servers[0]).toLowerCase()

  let { dl_link, thumb, title, filesize, filesizeF } = await yta(args[0], servers.includes(server) ? server : servers[0])

  let isLimit = (limit) * 1024 < filesize  
  m.reply(isLimit ? `Ukuran File: ${filesizeF}\nUkuran file diatas ${limit} MB, download sendiri: ${dl_link}` : 'compressing...')
  conn.sendButtonLoc(m.chat, await (await fetch (thumb)).buffer(), `
  *ＹＴＭＰ3 ＹＯＵＴＵＢＥ*
  *Title:* ${title}
  *Size:* ${filesizeF}`, userbot.packname, 'Menu', 'menu', m)
  if (!isLimit) conn.sendFile(m.chat, dl_link, title + ".mp3", null, m)
}
}
