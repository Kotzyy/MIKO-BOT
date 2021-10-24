let nhentai = require('nhentai-node-api')

module.exports = {

name: "nhlatest",
command: ["nhlatest"],
type: ["nsfw"],
useLimit: true,
description: "Nhentai get latest",
utilisation: userbot.prefix + "nhlatest",

async execute(m) {
  
let { conn } = data
	let latest = await nhentai.getLatest()
    let txt = latest.map(({ title, id, language }) => {
	return `*${title}*\n• ID: ${id}\n• Language: ${language}\n• Link: https://cin.pw/v/${id}`}).join('\n' + '='.repeat(25) + '\n')
	await conn.sendFile(from, latest[0].thumbnail, '', '*NHentai Latest*\n\n' + txt, m)
  }
}