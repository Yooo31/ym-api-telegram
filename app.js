const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

const app = express();

app.use(express.json());

app.post('/sendMessage', (req, res) => {
  const token = req.body.bot;
  const bot = new TelegramBot(token, {polling: false});
  const chatId = req.body.canal;
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
  console.log(`Serveur Express écoutant sur le port ${port}`);
});
