const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('crear-mensaje')
  .setDescription('Crea un mensaje usando Components V2'),

  async execute(interaction) {
    const estado = {
      flags: 32768,
      components: []
    };
    await interaction.reply({
      content: '🛠️ Constructor abierto.',
      ephemeral: true
    });
  }
};
