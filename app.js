require('dotenv').config();
const express = require('express');
const cors = require('cors');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
app.use(cors());

app.use(express.json());

app.post('/sendMessage', (req, res) => {
  let token;
  let chatId;

  if (req.body.config == 'portfolio-yoan') {
    token = process.env['PORTFOLIO_YOAN_BOT'];
    chatId =process.env['PORTFOLIO_YOAN_CANAL'];
  } else {
    token = req.body.bot;
    chatId = req.body.canal;
  }
  const bot = new TelegramBot(token, {polling: false});
  const messageInfo = req.body.info;
  const message = `${messageInfo.name}: ${messageInfo.text}`;

  bot.sendMessage(chatId, message)
    .then(() => {
      res.status(200).send('Message envoyé avec succès');
    })
    .catch((error) => {
      res.status(500).send('Erreur lors de l\'envoi du message : ' + error);
    });
});

const port = 3999;
app.listen(port, () => {
  console.log(`Telegram bot sender running on ${port}`);
});
