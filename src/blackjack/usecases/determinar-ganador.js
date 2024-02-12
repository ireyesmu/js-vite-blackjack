
/**
 * Determinar ganador
 * 
 * @param {Array<Number>} puntosJugadores Arreglo numérico con los puntos de los jugadores
 */
export const determinarGanador = ( puntosJugadores ) => {

    const [ puntosJugador, puntosComputadora ] = puntosJugadores;

    setTimeout( () => {
        if ( ( ( puntosComputadora > puntosJugador ) && ( puntosComputadora <= 21 ) ) || puntosJugador > 21 ) {
            alert('Computadora gana');
        } else if ( puntosComputadora === puntosJugador ) {
            alert('Nadie gana');
        } else {
            alert('Jugador gana');
        }
    }, 100 );
    
}