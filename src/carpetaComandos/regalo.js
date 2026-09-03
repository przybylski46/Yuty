const { SlashCommandBuilder } = require('discord.js');
const { crearRegalo } = require('../regalo/estado');
const { crearInterfazRegalo } = require('../regalo/interfaz');

const ID_LOVE = '880352642700812308';
const ID_SERVIDOR_REGALO = '1541553721505357876';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('regalo')
        .setDescription('💕'),

    guildOnly: true,

    async execute(interaction) {

        if (interaction.guildId !== ID_SERVIDOR_REGALO) {
    return interaction.reply({
        content: '❌',
        ephemeral: true
    });
        }

        if (interaction.user.id !== ID_LOVE) {
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
