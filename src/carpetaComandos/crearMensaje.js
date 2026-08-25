const {
  SlashCommandBuilder,
  ContainerBuilder,
  TextDisplayBuilder,
  SeparatorBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  ButtonBuilder,
  ButtonStyle
} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('crear-mensaje')
  .setDescription('Crea un mensaje usando Components V2'),

  async execute(interaction) {
    const contenedor = new ContainerBuilder()
    .setAccentColor(8237567)
    .addTextDisplayComponents(
      new TextDisplayBuilder()
      .setContent(
        '## 🛠️ Constructor de mensaje\n' +
        '> **Empieza añadiendo componentes a tu mensaje.'
        )
      )
    .addSeparatorComponents(
      new SeparatorBuilder()
      .setDivider(true)
      );
    const menu = new StringSelectMenuBuilder()
    .setCustomId('constructor_añadir')
    .setPlaceholder('Añadir un componente...')
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel('Texto')
      .setDescription('Añadir un bloque de texto')
      .setEmoji('📝')
      .setValue('texto'),

      new StringSelectMenuOptionBuilder()
      .setLabel('Separador')
      .setDescription('Añadir un separador')
      .setEmoji('➖')
      .setValue('separador')
      );

  const filaMenu = new ActionRowBuilder()
    .addComponents(menu);

  const botones = new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
      .setCustomId('constructor_vista_previa')
      .setLabel('Vista previa')
      .setEmoji('👁️')
      .setStyle(ButtonStyle.Primary),

      new ButtonBuilder()
      .setCustomId('constructor_json')
      .setLabel('JSON')
      .setEmoji('📄')
      .setStyle(ButtonStyle.Secondary),

      new ButtonBuilder()
      .setCustomId('constructor_cancelar')
      .setLabel('Cancelar')
      .setEmoji('❌')
      .setStyle(ButtonStyle.Danger)
      );

  await interaction.reply({
    flags: 32768,
    components: [
    contenedor,
    filaMenu,
    botones
    ]
  });
  }
};
