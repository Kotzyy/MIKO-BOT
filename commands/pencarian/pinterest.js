let fs = require('fs')
let axios = require('axios')
let fetch = require('node-fetch')

module.exports = {
name: ["pinterest"],
type: ["searching"],
description: "search image from pinterest",
utilisation: userbot.prefix+"pinterest",

async execute(m){
let { conn, text } = data
if (!text) return m.reply('where text?')
datane = [];
axios.get(`https://api.anesmlbb.studio/api/search/pinterest?query=${text}&apikey=KotzKey`).then((fear) =>{
datane += fear.data.result
})
console.log(datane)
pekok = ['1','2','3','4','5','6','7','8','9','10','11','12','13']
pin = pekok[Math.floor(Math.random() * (pekok.length))]
fs.writeFileSync(`./kotz.jpeg`, await (await fetch(datane[`${pin}`])).buffer())
buttons = [
  {
    buttonId: `pinterest ${text}`,
    buttonText:{
      displayText: `Next✨`
    },
    type:1}]
imageMsg = ( await conn.prepareMessage(from, fs.readFileSync(`./kotz.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'Regards By Kotz', imageMessage: imageMsg,
contentText:`*Hasil Pencarian Dari : ${text}*`,buttons,headerType:4}
prep = await conn.prepareMessageFromContent(from,{buttonsMessage},{})
conn.relayWAMessage(prep)
fs.unlinkSync(`./kotz.jpeg`)
}
}