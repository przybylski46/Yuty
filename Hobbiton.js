require('dotenv').config();
//
const { TeamMember } = require('discord.js');
const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');

const cliente = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ]
});

const comandos = new Map();

const rutaComandos = path.join(__dirname, 'src', 'carpetaComandos');
const archivosComandos = fs.readdirSync(rutaComandos).filter(archivo => archivo.endsWith('.js'));

for (const archivo of archivosComandos) {
    const rutaArchivo = path.join(rutaComandos, archivo);
    const comando = require(rutaArchivo);

    comandos.set(comando.data.name, comando);
}

const rutaEventos = path.join(__dirname, 'src', 'events');
const archivosEventos = fs.readdirSync(rutaEventos).filter(archivo => archivo.endsWith('.js'));

for(const archivo of archivosEventos)
    {
        const rutaArchivo = path.join(rutaEventos, archivo);
        const evento = require(rutaArchivo);

        if (evento.unaVez) {
            cliente.once(evento.nombre, ( . . .argumentos) => evento.ejecutar( . . .argumentos));
        } else {
            cliente.on(evento.nombre, ( . . .argumentos) => evento.ejecutar( . . .argumentos));
        }
    }

cliente.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const comando = comandos.get(interaction.commandName);

    if (!comando) return;

    try {
        await comando.execute(interaction);
    } catch (error) {
        console.error(error);

        if (interaction.replied || interaction.deferred) {
            await interaction.followUp( {
                content: 'Error al ejeutar comando',
                ephemeral: true
            });
        } else {
            await interaction.reply({
                content: 'Error al ejecutar comando',
                ephemeral: true
            });
        }
    }
});

cliente.login(process.env.DISCORD_TOKEN);
