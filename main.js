import './style.css'
import _ from 'underscore';


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
      deck = crearDeck();

      // Inicializar puntos
      puntosJugadores = [];
      for ( let i = 0; i < numJugadores; i++ ) {
          puntosJugadores.push(0);
          // puntosHTML[i].innerText = 0;
          // divCartasJugadores[i].innerHTML = "";
      }

      // Inicialzar DOM
      puntosHTML.forEach( elem => elem.innerText = 0);
      divCartasJugadores.forEach( elem => elem.innerHTML = '' );

      // Habilitar botones
      deshabilitarBotones(false);

      // console.clear();
  }



  // Esta función crea una nueva baraja
  const crearDeck = () => {
      
      deck = [];
      
      // Crear cartas numéricas
      for ( let i = 2; i <= 10; i++) {
          for ( let tipo of tipos ) {
              deck.push( i + tipo );
          }
      }

      // Crear Ases y cartas especiales
      for ( let tipo of tipos ) {
          for ( let especial of especiales ) {
              deck.push ( especial + tipo );
          }
      }

      return _.shuffle( deck );

  }



  // Esta función me permite tomar una carta
  const pedirCarta = () => {
      
      if (deck.length === 0) {
          throw 'No hay cartas en el deck';
      }

      return deck.pop();

  }



  // Esta función asigna el valor de la carta robada
  const valorCarta = ( carta ) => {

      const valor = carta.substring(0, carta.length - 1);
      
      // let puntos = 0;
      // if ( isNaN( valor ) ) {
      //     puntos = ( valor === 'A' ) ? 11 : 10;
      // } else {
      //     puntos = Number(valor); // valor * 1
      // }
      // return puntos;

      return ( !isNaN(valor)) ? valor * 1 : ( (valor === 'A') ? 11 : 10 ); 

  }



  // Acumular puntos
  // Turno: 0 es primer jugador, y último es la computadora
  const acumularPuntos = ( jugador, carta ) => {

      puntosJugadores[jugador] = puntosJugadores[jugador] + valorCarta(carta);

      puntosHTML[jugador].innerText = puntosJugadores[jugador];

      return puntosJugadores[jugador];
  }



  // Crear carta
  const crearCarta = ( jugador, carta ) => {

      const imgCarta = document.createElement('img');
      imgCarta.src = `assets/cartas/${ carta }.png`;
      imgCarta.classList.add('carta');

      divCartasJugadores[jugador].append( imgCarta );

  }



  // Deshabilitar botones
  const deshabilitarBotones = ( bool ) => {
      btnPedir.disabled   = bool;
      btnDetener.disabled = bool;
  }



  // Determinar ganador
  const determinarGanador = () => {

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



  // Turno de la computadora
  const turnoComputadora = ( puntos ) => {

      let puntosComputadora = 0;

      do {
          const carta = pedirCarta();
          puntosComputadora = acumularPuntos( puntosJugadores.length - 1 , carta );

          crearCarta( puntosJugadores.length - 1, carta );

      } while ( ( puntosComputadora < puntos ) && ( puntos <= 21 ) );

      determinarGanador();

  }



  // Eventos

  // Botón "Pedir carta"
  btnPedir.addEventListener('click', () => {

      let puntosJugador = 0;

      const carta = pedirCarta();
      puntosJugador = acumularPuntos( 0 , carta );

      crearCarta( 0, carta )

      if ( puntosJugador >= 21 ) {
          deshabilitarBotones(true);
          turnoComputadora( puntosJugador );
      }

  });


  // Botón "Detener"
  btnDetener.addEventListener('click', () => {

      deshabilitarBotones(true);
      turnoComputadora( puntosJugadores[0] );

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


