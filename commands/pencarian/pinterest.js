const fs = Ft.fs
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
data = await axios.get(`https://api.anesmlbb.studio/api/search/pinterest?query=${text}&apikey=KotzKey`)
const pekok = ['1','2','3','4','5','6','7','8','9','10','11','12','13']
const pin = pekok[Math.floor(Math.random() * (pekok.length))]
buttons = [
  {
    buttonId: `pinterest ${text}`,
    buttonText:{
      displayText: `Next✨`
    },
    type:1}]
Ft.fs.writeFileSync(`./${m.sender}.jpeg`, await (await Ft.fetch(data.data.result[`${pin}`])).buffer())
imageMsg = ( await conn.prepareMessage(from, Ft.fs.readFileSync(`./${m.sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'Regards By Kotz', imageMessage: imageMsg,
contentText:`*Hasil Pencarian Dari : ${text}*`,buttons,headerType:4}
prep = await conn.prepareMessageFromContent(from,{buttonsMessage},{})
conn.relayWAMessage(prep)
Ft.fs.unlinkSync(`./${m.sender}.jpeg`)
}
}