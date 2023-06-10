const { Client, Collection, GatewayIntentBits, Events, ComponentType } =  require("discord.js");
const dotenv = require('dotenv');
dotenv.config();

const delay = (ms) => new Promise((res) => setTimeout(res, ms)); // delay time
const client = new Client({ intents: [GatewayIntentBits.Guilds] }); // discord.js handler

client.login(process.env.DISCORD_BOT_TOKEN);
client.on("ready", () => {
  console.log("Bot Ready!");
});