const { SlashCommandBuilder,
       ContainerBuilder, 
       TextDisplayBuilder, 
       ButtonBuilder, 
       ButtonStyle, 
       ActionRowBuilder } = require('discord.js');

const ID_PERSONA_REGALO = 'PON_AQUI_EL_ID';

module.exports = {
  data: new SlashCommandBuilder()
    .setName('regalo')
    .setDescription('Hay una pequeña sorpresa para ti...'),
  
  async execute(interaction) {
      
      if (interaction.user.id !== ID_PERSONA_REGALO) {
        return interaction.reply({
          content: 'Este regalo no es para ti 👀',
          ephemeral: true
        });
      }
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

        await interaction.reply({
            flags: 32768,
            components: [container]
        });
    }
};
