const { SlashCommandBuilder } = require('discord.js');
const {
  crearConstructor
} = require('../constructor/estado');
  
module.exports = {
  data: new SlashCommandBuilder()
  .setName('crear-mensaje')
  .setDescription('Crea un mensaje usando Components V2'),

  async execute(interaction) {

    crearConstructor(interaction.user.id);
    
    await interaction.reply({
      content: '🛠️ Constructor abierto',
      ephemeral: true
    });
  }
};
