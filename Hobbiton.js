require('dotenv').config();
//
const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');

const cliente = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ]
});

const comandos = new Map();
cliente.comandos = comandos;

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
            cliente.once(evento.nombre, (...argumentos) => evento.ejecutar(...argumentos));
        } else {
            cliente.on(evento.nombre, (...argumentos) => evento.ejecutar(...argumentos));
        }
    }

cliente.login(process.env.DISCORD_TOKEN);
