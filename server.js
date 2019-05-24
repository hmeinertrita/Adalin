const adalin = require('./adalin/module')
const wiki = require('./wiki/module')
const fs = require('fs')

async function start() {
  const options = JSON.parse(await fs.promises.readFile('options.json'))
  //const tokens = JSON.parse(await fs.promises.readFile('tokens.json'))
  //const credentials = JSON.parse(await fs.promises.readFile('credentials.json'))

  await wiki(options)
  //adalin(options, tokens.discordToken)
}

start()
