const {
    ContainerBuilder,
    TextDisplayBuilder,
    ButtonBuilder,
    ButtonStyle,
    ActionRowBuilder
} = require('discord.js');

function crearDia1() {

    const container = new ContainerBuilder()
        .addTextDisplayComponents(
            new TextDisplayBuilder().setContent(
                '# 🌿 Una pequeña sorpresa\n\n' +
                'Hay lugares que empiezan estando completamente vacíos...\n\n' +
                'hasta que llega alguien y les da una razón para existir.\n\n' +
                '**Día 1 de 7**'
            )
        )
        .addActionRowComponents(
            new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setCustomId('regalo_dia1_abrir')
                    .setLabel('🌱 Abrir')
                    .setStyle(ButtonStyle.Success)
            )
        );

    return container;
}

module.exports = {
    crearDia1
};
