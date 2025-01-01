//Simple free AI chatbot using google's generative AI 
//Made by https://discord.gg/developers-support
//Please Do not remove our Copyrights

const {Client} = require ('discord.js');
const client = new Client({intents: 53608447});
const {token,api,channel} = require('./config.json');
client.login(token)

client.on('ready', () => {
    console.log(`connected ${client.user.username}| Alrights to Developers Support`);
});


const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(api);

async function run(msg , message) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
    const result = await model.generateContent([msg]);
    message.reply(result.response.text());
  }


client.on('messageCreate', async (message) => {
    if (message.channel.id !== channel) return;
    if (!message.author.bot) {
        const msg = message.content;
        run(msg, message)
    }
    
});

























