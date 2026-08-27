const {
  ContainerBuilder,
  TextDisplayBuilder
} = require('discord.js');

function crearVistaPrevia(estado) {
  const componentes = [];
  for (const componente of estado.components) {
    
    ////// Contenedor //////
    if (componente.type === 17) {
      const contenedor = new ContainerBuilder()
      .setAccentColor(componente.accent_color);

      contenedor.addTextDisplayComponents(
          new TextDisplayBuilder()
          .setContent('### Contenedor vacío')
          );
        
        componentes.push(contenedor);
    }
  }
    return componentes;
}

module.exports = {
    crearVistaPrevia
};
