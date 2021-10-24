const fs = Ft.fs
let yts = require('yt-search')
let fetch = require('node-fetch')

module.exports = {

name: ["getmusic"],

type: ["download"],
useLimit: true,
description: "Download and searching music dri YouTube",
utilisation: userbot.prefix + "getmusic <link>",

async execute(m) {

 let { conn, text } = data

if (!text) return m.reply('where text?')
let results = await yts(text)
let result = results.all
if (!result) throw 'Pencarian Anda Tidak di Temukan'
let berhitung = 1

			  let xixixi = `*「 YOUTUBE MUSIC 」*\n\n*Hasil Pencarian : ${text} *\n\n─────────────────\n\nKetik ${userbot.prefix}getmusik [ Angka ] untuk mengambil ID, Contoh : ${userbot.prefix}getmusik 2\n`

                for (let i = 0; i < result.length; i++) {
                    xixixi += `\n─────────────────\n\n*Urutan* : ${berhitung+i}\n*Title* : ${result[i].title}\n*Channel* : ${result[i].author.name}\n*Durasi* : ${result[i].timestamp}\n*Perintah download* : \n*${prefix}getmusik ${result[i].videoId}*\n`
                    }
conn.sendMessage(m.chat,await (await Ft.fetch(result[0].thumbnail)).buffer(),"imageMessage",{quoted:m, thumbnail:Buffer.alloc(0)})
}
