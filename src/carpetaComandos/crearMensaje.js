const {
  SlashCommandBuilder,
  ContainerBuilder,
  TextDisplayBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  ButtonBuilder,
  ButtonStyle
} = require('discord.js');

const {
  crearConstructor
} = require('../constructor/estado');
  
module.exports = {
  data: new SlashCommandBuilder()
  .setName('crear-mensaje')
  .setDescription('Crea un mensaje usando Components V2'),

  async execute(interaction) {

    crearConstructor(interaction.user.id);

    const contenedor = new ContainerBuilder()
    .setAccentColor(8237567)
    .addTextDisplayComponents(
      new TextDisplayBuilder()
      .setContent(
        '## 🛠️ Constructor\n' +
        '> **Empieza añadiendo componentes a tu mensaje**'
        )
      );

    const menu = new StringSelectMenuBuilder()
    .setCustomId('constructor_añadir')
    .setPlaceholder('Añadir componente')
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel('Contenedor')
      .setValue('contenedor')
      .setEmoji('📦'),
      new
    
    await interaction.reply({
      content: '🛠️ Constructor abierto',
      ephemeral: true
    });
  }
};
