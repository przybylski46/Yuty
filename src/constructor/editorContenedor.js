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
  .addTextDisplayComponents(
    new TextDisplayBuilder()
    .setContent( `### -# Editando contenedor ${indice + 1}...` )
    );
  
  componentes.push(encabezado);

  ////// Menu añadir en contenedor //////
  const menu = new StringSelectMenuBuilder()
  .setCustomId(`constructor_contenedor_add_${indice}`)
  .setPlaceholder('Añadir dentro del contenedor')
  .addOptions(
    new StringSelectMenuOptionBuilder()
    .setLabel('Texto')
    .setValue('texto')
    .setEmoji('📝'),
    new StringSelectMenuOptionBuilder()
    .setLabel('Media')
    .setValue('media')
    .setEmoji('🖼️'),
    new StringSelectMenuOptionBuilder()
    .setLabel('Separador')
    .setValue('separador')
    .setEmoji('➖')
    );
  
  componentes.push(
    new ActionRowBuilder()
    .addComponents(menu)
    );
  
    ////// Botones Control //////
  const botones = new ActionRowBuilder()
  .addComponents(
    new ButtonBuilder()
    .setCustomId(`constructor_contenedor_color_${indice}`)
    .setEmoji('🎨')
    .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
    .setCustomId(`constructor_contenedor_eliminar_${indice}`)
    .setEmoji('🗑️')
    .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
    .setCustomId(`constructor_contenedor_volver_${indice}`)
    .setEmoji('↩️')
    .setStyle(ButtonStyle.Secondary)
    );
  componentes.push(botones);
  return componentes;
}

module.exports = { crearEditorContenedor };
