import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk' 
import { fileURLToPath } from 'url' 

global.owner = [
  ['595972157130', '👑Ivan👑', true],
  ['593939005387'],
  ['51982110760']]

global.mods = ['595972157130'] 
global.prems = ['595972157130', '']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'm2XBbNvz' //-- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = 'Goku-Black-Bot-MD' 
global.author = 'Ivan' 

//--info FG
global.botName = 'GokuBlack'
global.fgig = '' 
global.fgsc = '' 
global.fgyt = ''
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = '' 

//--- Grupos WA
global.id_canal = '120363276986902836@newsletter' //-ID de canal de WhatsApp
global.fgcanal = 'https://whatsapp.com/channel/0029VaYh3Zm4dTnQKQ3VLT0h'
global.bgp = 'https://chat.whatsapp.com/Igsky5kNI7cDMsBJU6gcKB'
global.bgp2 = 'https://chat.whatsapp.com/Igsky5kNI7cDMsBJU6gcKB'
global.bgp3 = 'https://chat.whatsapp.com/Igsky5kNI7cDMsBJU6gcKB' 

global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
