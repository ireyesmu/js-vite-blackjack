import { pedirCarta, acumularPuntos, crearCarta, determinarGanador } from './index'


/**
 * Turno de la computadora
 * 
 * @param {Array<Number>} puntosJugadores Arreglo con los puntos de los jugadores
 * @param {Array<String>} deck Arreglo de strings con las cartas del mazo
 * @param {Array<String>} puntosHTML Arreglo con identificador del DOM de los puntos de cada jugador
 * @param {Array<String>} divCartasJugadores  Arreglo con identificador del DOM de los div de cartas de cada jugador
 */
 export const turnoComputadora = ( puntosJugadores, deck, puntosHTML, divCartasJugadores ) => {

    // let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );
        puntosJugadores[puntosJugadores.length - 1] = acumularPuntos( puntosJugadores, puntosJugadores.length - 1 , carta, puntosHTML );

        crearCarta( divCartasJugadores[puntosJugadores.length - 1], carta );

    } while ( ( puntosJugadores[puntosJugadores.length - 1] < puntosJugadores[0] ) && ( puntosJugadores[0] <= 21 ) );

    determinarGanador( puntosJugadores );

}