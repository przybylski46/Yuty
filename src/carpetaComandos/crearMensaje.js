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
    .setCustomId('constructor_add')
    .setPlaceholder('Añadir componente')
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel('Contenedor')
      .setValue('contenedor')
      .setEmoji('📦'),
      new StringSelectMenuOptionBuilder()
      .setLabel('Botones')
      .setValue('botones')
      .setEmoji('🖱️')
      );

    const filaMenu = new ActionRowBuilder()
    .addComponents(menu);
    const filaBotones = new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
      .setCustomId('constructor_vista_previa')
      .setEmoji('👁️')
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId('Editar')
      .setEmoji('✏️')
      .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
      .setCustomId('constructor_exportar')
      .setEmoji('📄')
      .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
      .setCustomId('constructor_cancelar')
      .setEmoji('🚽')
      .setStyle(ButtonStyle.Danger)
      );
    
    await interaction.reply({
      flags: 32768,
      components: [
        contenedor,
        filaMenu,
        filaBotones
        ]
    });
  }
};
