const {
  ContainerBuilder,
  TextDisplayBuilder,
  MediaGalleryBuilder,
  MediaGalleryItemBuilder,
  SectionBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder
} = require('discord.js');

function crearBotonDia(numero, diaDisponible) {
  const desbloqueado = numero <= diaDisponible;
  const boton = new ButtonBuilder()
    .setCustomId(`regalo_dia_${numero}`)
    .setStyle(
      desbloqueado
      ? ButtonStyle.Success
      : ButtonStyle.Secondary
        );
  if (numero === 1) {
    boton.setEmoji({
      id: '1545230789233610893',
      name: 'unknown',
      animated: true
    });
  } else {
    boton.setEmoji({
      id: '1545244263359578122',
      name: 'unknown',
      animated: false
    });
  }
  return new SectionBuilder()
    .addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        `#  ∘ 𝐃𝐢𝐚 ${numero}`
      )
    )
    .setButtonAccessory(boton);
}

function crearMenuSorpresas(diaDisponible = 1) {
  const container = new ContainerBuilder()
    .setAccentColor(6393874)
    .addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        '##  𝜗<a:Planta:1544940396151570432>𝜚 ⭑ 𝖀𝖓𝖆 𝖘𝖊𝖒𝖆𝖓𝖆 𝕯𝖊 𝖘𝖔𝖗𝖕𝖗𝖊𝖘𝖆𝖘'
      )
    )
    .addMediaGalleryComponents(
      new MediaGalleryBuilder().addItems(
        new MediaGalleryItemBuilder().setURL(
          'https://cdn.discordapp.com/attachments/1533909195609604277/1545242100566851624/image_41.png?ex=6a9b6e59&is=6a9a1cd9&hm=a0a6add04e699506702ce6901a891f51a5e4e01b2eb256d0b26ae37fa1908817&'
        )
      )
    )
    .addSectionComponents(
      crearBotonDia(1, diaDisponible)
    )
    .addSectionComponents(
      crearBotonDia(2, diaDisponible)
    )
    .addSectionComponents(
      crearBotonDia(3, diaDisponible)
    )
    .addSectionComponents(
      crearBotonDia(4, diaDisponible)
    )
    .addSectionComponents(
      crearBotonDia(5, diaDisponible)
    )
    .addSectionComponents(
      crearBotonDia(6, diaDisponible)
    )
    .addSectionComponents(
      crearBotonDia(7, diaDisponible)
    )
    .addMediaGalleryComponents(
      new MediaGalleryBuilder().addItems(
        new MediaGalleryItemBuilder().setURL(
          'https://cdn.discordapp.com/attachments/1533909195609604277/1545242100566851624/image_41.png?ex=6a9b6e59&is=6a9a1cd9&hm=a0a6add04e699506702ce6901a891f51a5e4e01b2eb256d0b26ae37fa1908817&'
        )
      )
    );
  const botonRegresar = new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
      .setCustomId('regalo_menu_principal')
      .setStyle(ButtonStyle.Secondary)
      .setEmoji({
        id: '1545271766853750876',
        name: 'Arrow_Left',
        animated: false
      })
    );
  return [
    container,
    botonRegresar
  ];
}
module.exports = {
  crearMenuSorpresas
};
