const {
  SlashCommandBuilder,
  ContainerBuilder,
  TextDisplayBuilder,
  SeparatorBuilder,
  MediaGalleryBuilder,
  MediaGalleryItemBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle
} = require('discord.js');

const descripciones = [
  'El rastro termina aquí... 🐾',
  'El Yutyrannus ha localizado a su presa 🦖',
  'Una criatura ha sido avistada 👀',
  'He olfateado el rastro hasta aquí 🦖',
  'Rawr! ¡Encontré a la criatura! 🦖',
  'Rawr... Mi instinto encontró este avatar 🦖',
  'Seguí las huellas hasta encontrar este avatar 🐾',
  'El Yutyrannus ha encontrado lo que buscabas 🦖',
  '¡Te tengo! 🦖',
  'Mira lo que encontré 🦖🤓'
  ];

module.exports = {
  data: new SlashCommandBuilder()
  .setName('avatar')
  .setDescription('Muestra el avatar de un usuario')
  .addUserOption(opcion =>
    opcion
    .setName('usuario')
    .setDescription('El usuario cuyo avatar quieres ver')
    .setRequired(false)
    )
  .addBooleanOption(opcion =>
    opcion
    .setName('ephemeral')
    .setDescription('Haz que el comando solo sea visible para tí')
    .setRequired(false)
    ),
  
  async execute(interaction) {
    const usuario = interaction.options.getUser('usuario') || interaction.user;
    const ephemeral = interaction.options.getBoolean('ephemeral') ?? false;
    const descripcion = descripciones[Math.floor(Math.random() * descripciones.length)];
    const avatar = usuario.displayAvatarURL({
      extension: 'webp',
      size: 1024
    });
    const png = usuario.displayAvatarURL({
      extension: 'png',
      size: 1024
    });
    const jpg = usuario.displayAvatarURL({
      extension: 'jpg',
      size: 1024
    });
    const webp = usuario.displayAvatarURL({
      extension: 'webp',
      size: 1024
    });
    const contenedor = new ContainerBuilder()
    .setAccentColor(8237567)
    .addTextDisplayComponents(
      new TextDisplayBuilder()
      .setContent('# Avatar de ${usuario.username}')
      )
    .addTextDisplayComponents(
      new TextDisplayBuilder()
      .setContent('> ${descripcion}')
      )
    .addSeparatorComponents(
      new SeparatorBuilder()
      .setDivider(false)
      )
    .addMediaGalleryComponents(
      new MediaGalleryBuilder()
      .addItems(
        new MediaGalleryItemBuilder()
        .setURL(avatar)
        )
      )
    .addActionRowComponents(
      new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
        .setLabel('PNG')
        .setStyle(ButtonStyle.Link)
        .setURL(png),
        new ButtonBuilder()
        .setLabel('JPG')
        .setStyle(ButtonStyle.Link)
        .setURL(jpg),
        new ButtonBuilder()
        .setLabel('WebP')
        .setStyle(ButtonStyle.Link)
        .setURL(webp)
        )
      );

    const ephemeral = interaction.options.getBoolean('ephemeral') ?? false;
    const flags = ephemeral
      ? 327668 | 64
      : 32768;
    
  await interaction.reply({
    flags,
    components: [contenedor]
  });
  }
};
