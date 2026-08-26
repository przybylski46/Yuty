const {
    obtenerConstructor
} = require('../constructor/estado');

module.exports = {
    nombre: 'interactionCreate',
    unaVez: false,

    async ejecutar(interaction) {
        
        try {
            ////// Comandos Slash //////
            if (interaction.isChatInputCommand()) {
                const comando = interaction.client.comandos.get(interaction.commandName);
                if (!comando) return;
                await comando.execute(interaction);
                return;
            }
            ////// Botones //////
            if (interaction.isButton()) {
                return;
            }
            ////// Menú //////
            if (interaction.isStringSelectMenu()) {
                if (interaction.customId === 'constructor_add') {
                    const opcion = interaction.values[0];
                    const estado = obtenerConstructor(interaction.user.id);

                    if (!estado) {
                        await interaction.reply({
                            content: 'No tienes un constructor activo',
                            ephemeral: true
                        });
                        return;
                    }

                    if (opcion === 'contenedor') {
                        estado.components.push({
                            type: 17,
                            components: [],
                            accent_color: 8237567
                        });
                        await interaction.reply({
                            content: '📦 Contenedor creado',
                            ephemeral: true
                        });
                        return;
                    }
                    
                    if (opcion === 'botones') {
                        await interaction.reply({
                            content: 'Aún no',
                            ephemeral: true
                        });
                        return;
                    }
                }
            }
        } catch (error) {
            console.error(error);
            
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({
                    content: 'Error al ejecutar',
                    ephemeral: true
                });
            } else {
                await interaction.reply({
                    content: 'Error al ejecutar',
                    ephemeral: true
                });
            }
        }
    }
};
