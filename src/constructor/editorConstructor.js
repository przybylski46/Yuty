const {
  ContainerBuilder,
  TextDisplayBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  ButtonBuilder,
  ButtonStyle
} = require('discord.js');

function crearEditorContenedor(indice, contenedor) {
  const componentes = [];

  ////// Encabezado //////
  const encabezado = new ContainerBuilder()
  .setAccentColor(contenedor.accent_color)
