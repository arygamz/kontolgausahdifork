
require('./config')
const useCODE = process.argv.includes("--code")
const useQR = !useCODE

const { default: makeWASocket, makeWALegacySocket, BufferJSON, Browsers, initInMemoryStore, extractMessageContent, makeInMemoryStore, proto, delay, DisconnectReason, useMultiFileAuthState, fetchLatestBaileysVersion, jidDecode, areJidsSameUser, PHONENUMBER_MCC, WA_DEFAULT_EPHEMERAL, relayMessage, getContentType, generateWAMessage, generateWAMessageContent, generateForwardMessageContent, generateWAMessageFromContent, downloadContentFromMessage } = require ("@whiskeysockets/baileys")
const pino = require('pino')
const lolcatjs = require('lolcatjs')
const { Boom } = require('@hapi/boom')
const { parsePhoneNumber } = require("libphonenumber-js")
const fs = require('fs')
const cfonts = require('cfonts');
const yargs = require('yargs/yargs')
const readline = require("readline")
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const NodeCache = require("node-cache")
const _ = require('lodash')
const axios = require('axios')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, reSize } = require('./lib/myfunc')
let versi = '5.1'
        
var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`src/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    group: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    donate: {},
    others: {},
    sticker: {},
    anonymous: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()

// save database every 30seconds
if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 30 * 1000)

async function startZaenar() {
cfonts.say('ZaenarMD', {
    font: 'tiny',              // define the font face
	align: 'center',              // define text alignment
	colors: ['system'],         // define all colors
	background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
	letterSpacing: 1,           // define letter spacing
	lineHeight: 1,              // define the line height
	space: true,                // define if the output text should have empty lines on top and on the bottom
	maxLength: '0',             // define how many character can be on one line
	gradient: false,            // define your two gradient colors
	independentGradient: false, // define if you want to recalculate the gradient for each new line
	transitionGradient: false,  // define if this is a transition between colors directly
	env: 'node'                 // define the environment cfonts is being executed in
});
cfonts.say('Script Made By Zaenar|Buy Script Update Chat 62831-8822-9366', { font: 'console', align: 'center' })
    process.on("unhandledRejection", error => console.error(error))
    const { state, saveCreds } = await useMultiFileAuthState("./session")
    const { version, isLatest } = await fetchLatestBaileysVersion()
    const nodeCache = new NodeCache()
    const connectionUpdate = {
        version,
        keepAliveInternalMs: 30000,
        printQRInTerminal: useQR && !useCODE,
        generateHighQualityLinkPreview: true,
        msgRetryCounterCache: nodeCache,
        markOnlineOnConnect: true,
        defaultQueryTimeoutMs: undefined,
        logger: pino({ level: "fatal" }),
        auth: state,
        browser: ["Chrome (Linux)", "", ""]
    }
    const conn = makeWASocket(connectionUpdate)
    
    store.bind(conn.ev)
    
    setInterval(() => {
        store.writeToFile("./store.json")
    }, 10000)
    
    // Jangan Di Apa Apain Nanti Error
if (useCODE && !conn.user && !conn.authState.creds.registered) {
  async function StartPairing() {
    const _0x15759c = readline.createInterface({
      'input': process.stdin,
      'output': process.stdout
    });
    const _0x5b5480 = _0x2b223c => new Promise(_0x567fc3 => _0x15759c.question(_0x2b223c, _0x567fc3));
    const _0x15f107 = await _0x5b5480("\nPlease type your WhatsApp number : ");
    numbSetanb = _0x15f107.replace(/[^0-9]/g, '');
    numSetan = parsePhoneNumber('+' + numbSetanb);
    if (!numSetan.isValid()) {
      console.log(chalk.bgBlack(chalk.redBright("Start With your country's WhatsApp code, Example : 628xxx")));
      _0x15759c.close();
      return StartPairing();
    }
    const _0x490e72 = PHONENUMBER_MCC[numSetan.countryCallingCode];
    if (!_0x490e72) {
      console.log(chalk.bgBlack(chalk.redBright("Start With your country's WhatsApp code, Example : 628xxx")));
      _0x15759c.close();
      return StartPairing();
    }
    const _0x45859a = await conn.requestPairingCode(numbSetanb);
    code = _0x45859a?.['match'](/.{1,4}/g)?.["join"]('-') || _0x45859a;
    console.log(chalk.bgBlack(chalk.bgGreen("Your pairing code : ")), chalk.black(chalk.bgWhite(code)));
    _0x15759c.close();
  }
  await StartPairing();
}
    
    conn.ev.on("connection.update", ({ connection }) => {
      if (connection === "open") {
      let con1 = `
╭──────── •
| 🚩  Connection Open
╰──────── •`
        console.log(chalk.cyan(con1))
      }
      if (connection === "close") {
        startZaenar()
      }
      if (connection === "connecting") {
        if (conn.user) {
        let con = `
╭──────── •
| 🚩  Connection Restarted
╰──────── •`
          console.log(chalk.cyan(con))
        } else if (!useQR && !useCODE) {
          let con2 = `
╭──────── •
| 🚩  Autentikasi Dibutuhkan!
╰──────── •`
console.log(chalk.cyan(con2))
        }
      }
    })
    

    conn.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (!conn.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        if (mek.key.id.startsWith('Zaenar - AuthByZaenar')) return
        m = smsg(conn, mek, store)
        require("./zr")(conn, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })
    
	// detect group update
	conn.ev.on("groups.update", async (json) => {
			console.log(json)
			const res = json[0];
			    try {
                    ppgroup = await conn.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://tinyurl.com/yx93l6da'
                }
			if (res.announce == true) {
				await sleep(2000)
				let a = `*Group Ditutup Oleh Admin Group*`
				conn.sendMessage(res.id, {
                    text: a, 
                    contextInfo: {
                        externalAdReply: {
                            title: `${namabot}`,
                            body: `${namaowner}`,
                            thumbnailUrl: ppgroup,
                            sourceUrl: sig,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }
            );
			} else if (res.announce == false) {
				await sleep(2000)
				let a = `*Group Telah Dibuka Oleh Admin Group*`
				conn.sendMessage(res.id, {
                    text: a, 
                    contextInfo: {
                        externalAdReply: {
                            title: `${namabot}`,
                            body: `${namaowner}`,
                            thumbnailUrl: ppgroup,
                            sourceUrl: sig,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }
            );
			} else if (res.restrict == true) {
				await sleep(2000)
				let a = `*Sekarang Hanya Admin Yang Dapat Mengubah Info Group*`
				conn.sendMessage(res.id, {
                    text: a, 
                    contextInfo: {
                        externalAdReply: {
                            title: `${namabot}`,
                            body: `${namaowner}`,
                            thumbnailUrl: ppgroup,
                            sourceUrl: sig,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }
            );
			} else if (res.restrict == false) {
				await sleep(2000)
				let anu = `*Sekarang Semua Member Group Dapat Mengubah Info Group*`
				conn.sendMessage(res.id, {
                    text: a, 
                    contextInfo: {
                        externalAdReply: {
                            title: `${namabot}`,
                            body: `${namaowner}`,
                            thumbnailUrl: ppgroup,
                            sourceUrl: sig,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }
            );
			} else if(!res.desc == ''){
				await sleep(2000)
				let a = `*Deskripsi Group Di Ubah Menjadi ${res.desc}*`
				conn.sendMessage(res.id, {
                    text: a, 
                    contextInfo: {
                        externalAdReply: {
                            title: `${namabot}`,
                            body: `${namaowner}`,
                            thumbnailUrl: ppgroup,
                            sourceUrl: sig,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }
            );
            } else {
				await sleep(2000)
				let a = `*Subject Group Di Ubah Menjadi ${res.subject}*`
				conn.sendMessage(res.id, {
                    text: a, 
                    contextInfo: {
                        externalAdReply: {
                            title: `${namabot}`,
                            body: `${namaowner}`,
                            thumbnailUrl: ppgroup,
                            sourceUrl: sig,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                });
			}
        });
	 
        conn.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        try {
            let metadata = await conn.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                // Get Profile Picture User
                try {
                    ppuser = await conn.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://tinyurl.com/yx93l6da'
                }

                // Get Profile Picture Group
                try {
                    ppgroup = await conn.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://tinyurl.com/yx93l6da'
                }
               if (anu.action == 'add') {
                 let a = `👋 Halo *@${num.split("@")[0]}*, Selamat Datang Di *${metadata.subject}*`
                    conn.sendMessage(anu.id, {
						  text: a,
						  contextInfo: {
							mentionedJid: [num],
							externalAdReply: {
							  title: `ZaenarMultiDevice`,
						   // body: action === 'add' ? "💬 WELCOME" : "💬 GOODBYE",
							  thumbnailUrl: ppgroup,
							  sourceUrl: sig,
							  mediaType: 1,
							  renderLargerThumbnail: true
							}
						  }
						});
                } else if (anu.action == 'remove') {
                    let a = `👋 Selamat Tinggal *@${num.split("@")[0]}*, Terimakasih Telah Join Kami Harap Anda Kembali`
      conn.sendMessage(anu.id, {
						  text: a,
						  contextInfo: {
							mentionedJid: [num],
							externalAdReply: {
							  title: `ZaenarMultiDevice`,
						   // body: action === 'add' ? "💬 WELCOME" : "💬 GOODBYE",
							  thumbnailUrl: ppgroup,
							  sourceUrl: sig,
							  mediaType: 1,
							  renderLargerThumbnail: true
							}
						  }
						});
                } else if (anu.action == 'promote') {
                    let a = `*Selamat @${num.split("@")[0]}*, Kamu Menjadi Admin Group`
                    conn.sendMessage(anu.id, {
						  text: a,
						  contextInfo: {
							mentionedJid: [num],
							externalAdReply: {
							  title: `ZaenarMultiDevice`,
						   // body: action === 'add' ? "💬 WELCOME" : "💬 GOODBYE",
							  thumbnailUrl: ppgroup,
							  sourceUrl: sig,
							  mediaType: 1,
							  renderLargerThumbnail: true
							}
						  }
						});
                } else if (anu.action == 'demote') {
                    let a = `Kamu @${num.split("@")[0]} Di Demote, Tidak Apa Apa Sabar 😄`
                    conn.sendMessage(anu.id, {
						  text: a,
						  contextInfo: {
							mentionedJid: [num],
							externalAdReply: {
							  title: `ZaenarMultiDevice`,
						   // body: action === 'add' ? "💬 WELCOME" : "💬 GOODBYE",
							  thumbnailUrl: ppgroup,
							  sourceUrl: sig,
							  mediaType: 1,
							  renderLargerThumbnail: true
							}
						  }
						});
              }
            }
        } catch (err) {
            console.log("Terjadi Kesalahan "+err)
        }
    })
	
    // Setting
    conn.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    conn.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = conn.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    conn.getName = (jid, withoutContact  = false) => {
        id = conn.decodeJid(jid)
        withoutContact = conn.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = conn.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === conn.decodeJid(conn.user.id) ?
            conn.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    conn.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await conn.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${namaowner}\nFN:${namaowner}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:arygamz16@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://youtube.com/@Aryjuanda?si=Aus1EJeVsb0Sv2FU\nitem3.X-ABLabel:Panel\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	conn.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
    }
    
    conn.public = true

    conn.serializeM = (m) => smsg(conn, m, store)

    conn.ev.on('connection.update', async (update) => {
	const {
		connection,
		lastDisconnect
	} = update
try{
		if (connection === 'close') {
			let reason = new Boom(lastDisconnect?.error)?.output.statusCode
			if (reason === DisconnectReason.badSession) {
				startZaenar()
			} else if (reason === DisconnectReason.connectionClosed) {
				startZaenar();
			} else if (reason === DisconnectReason.connectionLost) {
				startZaenar();
			} else if (reason === DisconnectReason.connectionReplaced) {
				startZaenar()
			} else if (reason === DisconnectReason.loggedOut) {
				startZaenar();
			} else if (reason === DisconnectReason.restartRequired) {
				console.log("Restart.");
				startZaenar();
			} else if (reason === DisconnectReason.timedOut) {
				startZaenar();
			} else conn.end(`Sambungan Tidak Dikenal Terputus: ${reason}|${connection}`)
		} else if (connection === "open") { conn.sendMessage("6283188229366@s.whatsapp.net", { text: `Sukses Terhubung Ke Server` }); }
		if (update.connection == "connecting; " || update.receivedPendingNotifications == "false") {
		}
		if (update.connection == "open" || update.receivedPendingNotifications == "true") {
let rl = `
🔥  Koneksi Tersambung`
			console.log(chalk.green(rl))
		}
	
} catch (err) {
	  console.log('Koneksi Error : '+err)
	  startZaenar();
	}
	
})

    conn.ev.on('creds.update', saveCreds)

    // Add Other
    
      /**
      *
      * @param {*} jid
      * @param {*} url
      * @param {*} caption
      * @param {*} quoted
      * @param {*} options
      */
     conn.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
      let mime = '';
      let res = await axios.head(url)
      mime = res.headers['content-type']
      if (mime.split("/")[1] === "gif") {
     return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
      }
      let type = mime.split("/")[0]+"Message"
      if(mime === "application/pdf"){
     return conn.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "image"){
     return conn.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
      }
      if(mime.split("/")[0] === "video"){
     return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "audio"){
     return conn.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
      }
      }

    /** Send List Messaage
      *
      *@param {*} jid
      *@param {*} text
      *@param {*} footer
      *@param {*} title
      *@param {*} butText
      *@param [*] sections
      *@param {*} quoted
      */
        conn.sendListMsg = (jid, text = '', footer = '', title = '' , butText = '', sects = [], quoted) => {
        let sections = sects
        var listMes = {
        text: text,
        footer: footer,
        title: title,
        buttonText: butText,
        sections
        }
        conn.sendMessage(jid, listMes, { quoted: quoted })
        }

    /** Send Button 5 Message
     * 
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} button
     * @returns 
     */
        conn.send5ButMsg = (jid, text = '' , footer = '', but = []) =>{
        let templateButtons = but
        var templateMessage = {
        text: text,
        footer: footer,
        templateButtons: templateButtons
        }
        conn.sendMessage(jid, templateMessage)
        }

    /** Send Button 5 Image
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
    conn.send5ButImg = async (jid , text = '' , footer = '', img, but = [], buff, options = {}) =>{
    conn.sendMessage(jid, { image: img, caption: text, footer: footer, templateButtons: but, ...options })
    }

      /** Send Button 5 Location
       *
       * @param {*} jid
       * @param {*} text
       * @param {*} footer
       * @param {*} location
       * @param [*] button
       * @param {*} options
       */
      conn.send5ButLoc = async (jid , text = '' , footer = '', lok, but = [], options = {}) =>{
      let bb = await conn.reSize(lok, 300, 150)
      conn.sendMessage(jid, { location: { jpegThumbnail: bb }, caption: text, footer: footer, templateButtons: but, ...options })
      }

    /** Send Button 5 Video
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} Video
     * @param [*] button
     * @param {*} options
     * @returns
     */
    conn.send5ButVid = async (jid , text = '' , footer = '', vid, but = [], buff, options = {}) =>{
    let lol = await conn.reSize(buf, 300, 150)
    conn.sendMessage(jid, { video: vid, jpegThumbnail: lol, caption: text, footer: footer, templateButtons: but, ...options })
    }

    /** Send Button 5 Gif
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} Gif
     * @param [*] button
     * @param {*} options
     * @returns
     */
    conn.send5ButGif = async (jid , text = '' , footer = '', gif, but = [], buff, options = {}) =>{
    let ahh = await conn.reSize(buf, 300, 150)
    let a = [1,2]
    let b = a[Math.floor(Math.random() * a.length)]
    conn.sendMessage(jid, { video: gif, gifPlayback: true, gifAttribution: b, caption: text, footer: footer, jpegThumbnail: ahh, templateButtons: but, ...options })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} buttons 
     * @param {*} caption 
     * @param {*} footer 
     * @param {*} quoted 
     * @param {*} options 
     */
    conn.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        conn.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    conn.sendText = (jid, text, quoted = '', options) => conn.sendMessage(jid, { text: text, ...options }, { quoted, ...options })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    conn.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await conn.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    conn.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await conn.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} mime 
     * @param {*} options 
     * @returns 
     */
    conn.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await conn.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    conn.sendTextWithMentions = async (jid, text, quoted, options = {}) => conn.sendMessage(jid, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'), ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    conn.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    conn.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	
    /**
     * 
     * @param {*} message 
     * @param {*} filename 
     * @param {*} attachExtension 
     * @returns 
     */
    conn.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    conn.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
    
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} filename
     * @param {*} caption
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    conn.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await conn.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await conn.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }

    /**
     * 
     * @param {*} jid 
     * @param {*} message 
     * @param {*} forceForward 
     * @param {*} options 
     * @returns 
     */
    conn.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await conn.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

    conn.cMod = (jid, copy, text = '', sender = conn.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === conn.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }


    /**
     * 
     * @param {*} path 
     * @returns 
     */
    conn.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }

conn.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
        let type = await conn.getFile(path, true)
        let { res, data: file, filename: pathFile } = type
        if (res && res.status !== 200 || file.length <= 65536) {
            try { throw { json: JSON.parse(file.toString()) } }
            catch (e) { if (e.json) throw e.json }
        }
        let opt = { filename }
        if (quoted) opt.quoted = quoted
        if (!type) if (options.asDocument) options.asDocument = true
        let mtype = '', mimetype = type.mime
        if (/webp/.test(type.mime)) mtype = 'sticker'
        else if (/image/.test(type.mime)) mtype = 'image'
        else if (/video/.test(type.mime)) mtype = 'video'
        else if (/audio/.test(type.mime)) (
            convert = await (ptt ? toPTT : toAudio)(file, type.ext),
            file = convert.data,
            pathFile = convert.filename,
            mtype = 'audio',
            mimetype = 'audio/ogg; codecs=opus'
        )
        else mtype = 'document'
        return await conn.sendMessage(jid, {
            ...options,
            caption,
            ptt,
            [mtype]: { url: pathFile },
            mimetype
        }, {
            ...opt,
            ...options
        })
    }
              

    return conn
}

startZaenar()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})