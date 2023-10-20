const express = require('express');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const port = 3999;

app.use(bodyParser.json());

const botToken = '';
const bot = new TelegramBot(botToken, { polling: true });

app.post('/send-message', (req, res) => {
  const { bot, canal, info } = req.body;

  const message = `Sending !!!`;
  bot.sendMessage(canal, message)
    .then(() => {
      res.status(200).send('Message envoyé avec succès');
    })
    .catch(error => {
      console.error('Erreur lors de l\'envoi du message Telegram:', error);
      res.status(500).send('Erreur lors de l\'envoi du message Telegram');
    });
});

app.listen(port, () => {
  console.log(`API écoutant sur le port ${port}`);
});
