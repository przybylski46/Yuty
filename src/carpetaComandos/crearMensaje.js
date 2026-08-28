const { SlashCommandBuilder } = require('discord.js');
const { crearConstructor } = require('../constructor/estado');
const { crearInterfaz } = require('../constructor/interfaz');
  
module.exports = {
  data: new SlashCommandBuilder()
  .setName('crear-mensaje')
  .setDescription('Crea un mensaje usando Components V2'),

  async execute(interaction) {
    const estado = crearConstructor(interaction.user.id);
    await interaction.reply({
      flags: 32768,
      components: crearInterfaz(estado)
    });
  }
};
