
/**
 * Crea la carta
 * 
 * @param {Array<Number>} divCartaJugador Arreglo que selecciona el DOM a modificar según el jugador
 * @param {String} carta Carta a mostrar
 */
  export const crearCarta = ( divCartaJugador, carta ) => {
    if ( !carta ) throw Error('La carta es un argumento obligatorio');
    
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');

    divCartaJugador.append( imgCarta );

}
