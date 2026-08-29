const {
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ActionRowBuilder
} = require('discord.js');

function crearModalTexto(indice) {
  
  const modal = new ModalBuilder()
  .setCustomId(`constructor_texto_${indice}`)
  .setTitle('📝 Añadir texto');
  
  const texto= new TextInputBuilder()
  .setCustomId('contenido')
  .setLabel('Contenido')
  .setPlaceholder('Escribe sin hacer ruido para no despertar al Spinosaurus...')
  .setStyle(TextInputStyle.Paragraph)
  .setRequired(true);
  
  const fila = new ActionRowBuilder()
  .addComponents(texto);
  modal.addComponents(fila);
  return modal;
}

module.exports = {
  crearModalTexto
};
