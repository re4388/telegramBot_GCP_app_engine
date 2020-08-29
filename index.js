
/**
 * Locally webserver to handle request and send message to telegram
 */
require('dotenv').config();
const BOT_TOKEN = process.env.TELEGRAM_TOKEN
const getWeatherInfo = require('./getWeather')
const Slimbot = require('slimbot');
const slimbot = new Slimbot(BOT_TOKEN);
// Register listeners
slimbot.on('message', async message => {

  console.log(message.chat.id);  // 1048392852
  let info =  await getWeatherInfo()
  let msg = info
  slimbot.sendMessage(message.chat.id, msg)
  .then(msgObj => {
    console.log(msgObj);
  });
});
// Call API
slimbot.startPolling();