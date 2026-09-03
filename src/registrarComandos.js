require('dotenv').config();

const { REST, Routes } = require('discord.js');

const fs = require('node:fs');

const path = require('node:path');

const ID_SERVIDOR_REGALO = '1541553721505357876';

const comandos = [];

const rutaComandos = path.join(__dirname, 'carpetaComandos');

const archivosComandos = fs.readdirSync(rutaComandos).filter(archivo => archivo.endsWith('.js'));

for (const archivo of archivosComandos) {
    const rutaArchivo = path.join(rutaComandos, archivo);
    const comando = require(rutaArchivo);

    comandos.push(comando.data.toJSON());
}

const rest = new REST().setToken(process.env.DISCORD_TOKEN);

(async () => {
    try {
        console.log(`Registrando ${comandos.length} comando(s)...`);

        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID),
            { body: comandos }
        );

        console.log('Comandos registrados correctamente.');
    } catch (error) {
        console.error(error);
    }
})();
