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
                if (interaction.customId === 'constructor_añadir') {
                    const opcion = interaction.values[0];

                    if (opcion === 'contenedor');
                    if (opcion === 'botones');
                    await interaction.reply({
                        content: `Seleccionaste ${opcion}`,
                        ephemeral: true
                    });
                    return;
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
