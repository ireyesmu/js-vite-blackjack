import {valorCarta} from './valor-carta'
/**
 * Acumular puntos
 * 0 es primer jugador, y último es la computadora
 * 
 * @param {Array<Number>} puntosJugadores Arreglo numérico con los puntos de los jugadores
 * @param {Number} jugador Número ID del jugador (0: jugador, útimo: computadora)
 * @param {String} carta Carta (string)
 * @param {Array<String>} puntosHTML Arreglo con identificador del DOM de los puntos de cada jugador
 * @returns {Number}
 */
export const acumularPuntos = ( puntosJugadores, jugador, carta, puntosHTML ) => {

    puntosJugadores[jugador] = puntosJugadores[jugador] + valorCarta(carta);

    puntosHTML[jugador].innerText = puntosJugadores[jugador];

    return puntosJugadores[jugador];
}