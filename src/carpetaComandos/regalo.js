const { SlashCommandBuilder } = require('discord.js');
const { crearRegalo } = require('../regalo/estado');
const { crearInterfazRegalo } = require('../regalo/interfaz');

const ID_PERSONA_REGALO = '880352642700812308';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('regalo')
        .setDescription('Hay una pequeña sorpresa para ti...'),

    async execute(interaction) {

        if (interaction.user.id !== ID_PERSONA_REGALO) {
            return interaction.reply({
                content: '❌',
                ephemeral: true
            });
        }

        const estado = crearRegalo();

        await interaction.reply({
            flags: 32768,
            components: crearInterfazRegalo(estado)
        });
    }
};
