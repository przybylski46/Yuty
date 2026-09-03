const { SlashCommandBuilder } = require('discord.js');
const { crearRegalo } = require('../regalo/estado');
const { crearInterfazRegalo } = require('../regalo/interfaz');

const ID_PERSONA_REGALO = 'PON_AQUI_EL_ID_DE_LA_PERSONA';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('regalo')
        .setDescription('💕'),

    guildOnly: true,

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
