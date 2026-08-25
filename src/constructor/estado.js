const constructores = new Map();

function crearConstructor(userId) {
  const estado = {
    flags: 32768,
    components: []
  };

constructores.set(userId, estado);

return estado;
}

function obtenerConstructor(userId) {
  return constructores.get(userId);
}

function eliminarConstructor(userId) {
  constructores.delete(userId);

module.exports = {
  crearConstructor,
  obtenerConstructor,
  eliminarConstructor
};
