const { SlashCommandBuilder } = require('discord.js');

const ID_PERSONA_REGALO = 'PON_AQUI_EL_ID';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('regalo')
        .setDescription('Hay una pequeña sorpresa para ti...'),

    async execute(interaction) {

        if (interaction.user.id !== ID_PERSONA_REGALO) {
            await interaction.reply({
                content: 'Este regalo no es para ti 👀',
                ephemeral: true
            });
            return;
        }

        await interaction.reply({
            content: '🌿 **Día 1 de 7**\n\nHay una pequeña sorpresa para ti...',
            ephemeral: true
        });
    }
};
