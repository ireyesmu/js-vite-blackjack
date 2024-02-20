import _ from 'underscore';
// import { crearDeck as crearNuevoDeck } from './usecases/crear-deck.js' // Ponerle apodo al import
// import crearDeck, { miNombre } from './usecases/crear-deck.js' // Cuando se declara el import default
import { crearDeck, pedirCarta, turnoComputadora, crearCarta, acumularPuntos, deshabilitarBotones } from './usecases';

const miModulo = (() => {
  'use strict'

  
  let deck            = [],
      puntosJugadores = [];

  const tipos         = ['C','D','H','S'],
        especiales    = ['A','J','Q','K'];


  // Referencias del HTML
  const btnNuevo           = document.querySelector('#btnNuevo'),
        btnPedir           = document.querySelector('#btnPedir'),
        btnDetener         = document.querySelector('#btnDetener'),
        divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosHTML         = document.querySelectorAll('small');
        


  // Esta función inicializa el juego
  const inicializarJuego = ( numJugadores = 2 ) => {

      // Inicializar mazo
      deck = crearDeck( tipos, especiales );

      // Inicializar puntos
      puntosJugadores = [];
      for ( let i = 0; i < numJugadores; i++ ) {
          puntosJugadores.push(0);
      }

      // Inicialzar DOM
      puntosHTML.forEach( elem => elem.innerText = 0);
      divCartasJugadores.forEach( elem => elem.innerHTML = '' );

      // Habilitar botones
      deshabilitarBotones(false);
      
  }


  // Eventos

  // Botón "Pedir carta"
  btnPedir.addEventListener('click', () => {

      const carta = pedirCarta( deck );
      puntosJugadores[0] = acumularPuntos( puntosJugadores, 0 , carta, puntosHTML );

      crearCarta( divCartasJugadores[0], carta )

      if ( puntosJugadores[0] >= 21 ) {
          deshabilitarBotones(true);
          turnoComputadora( puntosJugadores, deck, puntosHTML, divCartasJugadores );
      }

  });


  // Botón "Detener"
  btnDetener.addEventListener('click', () => {

      deshabilitarBotones(true);
      turnoComputadora( puntosJugadores, deck, puntosHTML, divCartasJugadores );

  });


  // Botón "Nuevo Juego"
  btnNuevo.addEventListener('click', () => {

      inicializarJuego();

  });


  // Retorno del módulo
  return {
      nuevoJuego: inicializarJuego
  };

})();


