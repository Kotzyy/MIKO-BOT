let nhentai = require('nhentai-node-api')

module.exports = {

name: "nhsearch",
command: ["nhsearch","nhs"],
type: ["nsfw"],
useLimit: true,
description: "Searching nhentai",
utilisation: userbot.prefix + "nhsearch <query>",

async execute(m) {
  
let { conn, text } = data
	if (!text) return m.reply('Cari apa?')
	let res = await nhentai.search(text)
	let txt = res.map(({ title, id, language }) => {
    return `*${title}*\n• ID: ${id}\n• Language: ${language}\n• Link: https://cin.pw/v/${id}`}).join('\n' + '='.repeat(25) + '\n')
	await conn.sendFile(from, res[0].thumbnail, '', '*NHentai Search*\n\n' + txt, m)
  }
}