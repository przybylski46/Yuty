const { crearDia1 } = require('./dias/dia1');

function crearInterfazRegalo(estado) {

    if (estado.dia === 1) {
        return [crearDia1()];
    }

    return [];
}

module.exports = {
    crearInterfazRegalo
};
