require('dotenv').config()
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }

  if (interaction.commandName === "pokemon"){
    const pokemonName = interaction.options.get('pokemon-name')
    const pokemon = async () =>{
        let data = await fetch(`https://pokeapi.co/api/v2/pokemon/blaziken`)
        let response = await data.json()
        let result = response.sprites.front_default
        await interaction.reply(result)
        }
        
        pokemon()
        
  }
});

client.login(process.env.TOKEN);