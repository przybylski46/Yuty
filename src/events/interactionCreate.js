const { obtenerConstructor } = require('../constructor/estado');
const { crearInterfaz } = require('../constructor/interfaz');
const { crearVistaPrevia } = require('../constructor/vistaPrevia');

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
                if (interaction.customId === 'constructor_vista_previa') {
                    const estado = obtenerConstructor(interaction.user.id);

                    if (!estado) {
                        await interaction.reply({
                            content: 'No tienes un constructor activo',
                            ephemeral: true
                        });
                        return;
                    }

                    await interaction.reply({
                        flags: 32768,
                        components: crearVistaPrevia(estado),
                        ephemeral: true
                    });
                    return;
                }
                if (interaction.customId.startsWith('constructor_editar_contenedor_')) {
                    const indice = Number(
                        interaction.customId.replace(
                            'constructor_editar_contenedor_',
                            ''
                            )
                        );
                    const estado = obtenerConstructor(interaction.user.id);
                    if (!estado) {
                        await interaction.reply({
                            content: 'No tienes un constructor activo',
                            ephemeral: true
                        });
                        return;
                    }
                    const contenedor = estado.components[indice];
                    if (!contenedor || contenedor.type !== 17) {
                        await interaction.reply({
                            content: 'Ese contenedor ya no existe',
                            ephemeral: true
                        });
                        return;
                    }
                    await interaction.reply({
                        content: `✏️ Editando contenedor #${indice + 1}`,
                        ephemeral: true
                    });
                    return;
                }
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
                        await interaction.update({
                            components: crearInterfaz(estado)
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
