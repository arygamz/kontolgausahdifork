/* Development: ZaenarZaky */
/* Instagram: @zaenar2.0 */
/* Buy Sc Update: +6283188229366 */
/* ────────────────────────── */
const fs = require('fs')
const chalk = require('chalk')

global.apilol = 'haikalgans' // LOLHUMAN
global.rose = 'Rk-momohirai'
global.keyai = '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' // https://platform.openai.com/account/api-keys

//—————「 RegMail Settings 」—————//
global.gmail = 'zaenarmultidevice@gmail.com' //EMAIL YANG SERING KAMU PAKAI
global.pass = 'ptpeqpeevtyuvlsu' //AMBIL PASSWORD DI GMAIL
global.subject = 'arybotz Verifikasi' //SUBJECT EMAIL

//—————「 Nofitication Settings 」—————//
global.id = `Id Grup Kamu`

//—————「 Set Nama Bot & Own 」—————//
global.namabot = '*arybotz* (zr5.1)'
global.wm = 'sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ary'
global.namaowner = 'owner suka ngocok'
global.wagc = "https://chat.whatsapp.com/I9iKYtVUWvt4dRbe11oezj"

//—————「 Setting Owner 」—————//
global.owner = ['6285762008398']
global.nomerowner = '6285762008398'
global.premium = ['6285762008398','6285763050960','6281536838797','6285830308340']

//owmner v card
global.ownernomer = "6285762008398" //ur owner number2
global.ownername = "owner suka ngocok" //ur owner name
global.ytname = "Ary07" //ur yt chanel name
global.socialm = "Instagram: aryjuandatarigan" //ur github or insta name
global.location = "Indonesia, Sibolangit, Sumut" //ur location

//—————「 Set Wm 」—————//
global.packname = 'Created By ARY-BOTZ'
global.author = 'Bot: +6285762008398\nYouTube: Ary07'
global.prefa = ['', '.', '!', '?', '/', '*', '$', '&', '_', '-', '#', '@', ':', ';']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    success: '🚩 Permintaan Berhasil/Sukses',
    admin: '🚩 Fitur Khusus Admin Grup',
    botAdmin: '🚩 Bot Bukan Admin.',
    owner: '🚩 Fitur Ini Khusus Owner Bot',
    group: '🚩 Fitur Ini Hanya Bisa Di Pakai Di Group/Gc',
    private: '🚩 Fitur Ini Khusus Private Chat',
    bot: '🚩 Kamu Harus Daftar Terlebih Dahulu',
    wait: '🚩 Tunggu Sebentar...',
    endLimit: '🚩 Limit Kamu Habis, Limit Akan Di Reset Pada Jam 00.00',
    error: '🚩 Terjadi Error Pada Fitur Yang Kamu Input, Report Owner *.report*',
    prem: '🚩 Fitur Khusus Premium User, Vip User, Untuk Menggunakan Fitur Ini Kamu Harus Membeli Premium Terlebih Dahulu *.owner*',
    joinrpg: '🚩 Kamu Sudah Join Rpg Sebelumnya, User Yang Masuk Ke Database Rpg Tidak Bisa Dihapus',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 8000,
    monayawal: 1000
}
global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.multiplier = 69
//Keburuntungan

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/file/7b3869b3e1f5c647ff321.jpg'
global.thurl = 'https://telegra.ph/file/ce0a6a513298df093e658.jpg'
global.link = 'https://youtube.com/@Aryjuanda?si=jtfe2kf8AFP9VYrm'
global.thumb = fs.readFileSync('./media/zr.jpg')
global.logo = fs.readFileSync('./media/logo.jpg')
global.sig = 'https://instagram.com/aryjuandatarigan'
//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})