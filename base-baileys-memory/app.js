const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const Principalflue = addKeyword("hola").addAnswer("Bienvenido en que te puedo ayudar")
const Secondflue = addKeyword("gracias").addAnswer("Un placer ayudarte :)")

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([Principalflue,Secondflue])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
