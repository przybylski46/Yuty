const {
  ContainerBuilder,
  TextDisplayBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  ButtonBuilder,
  ButtonStyle
} = require('discord.js');

function crearInterfaz(estado) {
  const componentes= [];
  
  ////// Container constructor //////
  const encabezado = new ContainerBuilder()
  .setAccentColor(8237567)
  .addTextDisplayComponents(
    new TextDisplayBuilder()
    .setContent(
      '## 🛠️ Constructor\n' +
      '**Empieza añadiendo componentes a tu mensaje**'
      )
    );

componentes.push(encabezado);

////// Componentes abiertos //////
for (let i = 0; i < estado.components.length; i++) {
  const componente = estado.components[i];
  if (componente.type === 17) {
    const contenedor = new ContainerBuilder()
    .setAccentColor(componente.accent_color)
    .addTextDisplayComponents(
      new TextDisplayBuilder()
      .setContent(
        `### 📦 Contenedor #${i + 1}\n` +
        '> Contenedor vacío'
        )
      );
    componentes.push(contenedor);
  }
}

////// Menú añadir componentes //////
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

componentes.push(
  new ActionRowBuilder()
  .addComponents(menu)
  );
  
  ////// Botones de control //////
  const botones = new ActionRowBuilder()
  .addComponents(
    new ButtonBuilder()
    .setCustomId('constructor_vista_previa')
    .setEmoji('👁️')
    .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
    .setCustomId('constructor_editar')
    .setEmoji('✏️')
    .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
    .setCustomId('constructor_exportar')
    .setEmoji('💾')
    .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
    .setCustomId('constructor_cancelar')
    .setEmoji('🚽')
    .setStyle(ButtonStyle.Danger)
    );
  
  componentes.push(botones);
  
  return componentes;
}

module.exports = { crearInterfaz };
