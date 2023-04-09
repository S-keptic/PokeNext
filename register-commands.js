require('dotenv').config();
const { REST, Routes, Options, Application, ApplicationCommandOptionType } = require('discord.js');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },

  {
    name: "pokemon",
    description: "details of Pokemon",
    options: [
        {
            name:"pokemon-name",
            description: "Search Pokemon with name",
            type: ApplicationCommandOptionType.String,
            required: true,
        }
    ]
  }
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();