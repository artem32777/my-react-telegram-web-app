import TelegramBot from 'node-telegram-bot-api';

export default function () {
  const token = '7102956395:AAFTBe9pJZ8p0aLwFPmQLspqVeZuZeaSwHQ';

  const bot = new TelegramBot(token, {polling: true});


  bot.onText(/\/echo (.+)/, (msg, match) => {

    const chatId = msg.chat.id;
    const resp = match && match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    if (resp != null) {
      bot.sendMessage(chatId, resp);
    }
  });

  bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Received your message');
  });
}

