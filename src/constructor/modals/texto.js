const {
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ActionRowBuilder
} = require('discord.js');

function crearModalTexto(indice, indiceTexto = null, contenidoActual = '') {

  const editar = indiceTexto !== null;
    
  const modal = new ModalBuilder()
    .setCustomId(
      editar
      ? `constructor_texto_editar_${indice}_${indiceTexto}`
      : `constructor_texto_${indice}`
  )
    .setTitle(
      editar
      ? '✏️ Editar texto'
      : '📝 Añadir texto'
      );
  
  const texto= new TextInputBuilder()
  .setCustomId('contenido')
  .setLabel('Contenido')
  .setPlaceholder('Escribe sin hacer ruido para no despertar al Spinosaurus...')
  .setStyle(TextInputStyle.Paragraph)
  .setRequired(true)
  .setValue(contenidoActual);
  
  const fila = new ActionRowBuilder()
  .addComponents(texto);
  modal.addComponents(fila);
  return modal;
}

module.exports = {
  crearModalTexto
};
