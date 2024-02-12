import _ from 'underscore';


/**
 * Esta función crea una nueva baraja
 * 
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} Retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    
    if ( !tiposDeCarta || !tiposDeCarta.length === 0 )
        throw new Error('tiposDeCarta es obligatorio como un arreglo de string');
    if ( !tiposEspeciales || !tiposEspeciales.length === 0 )
        throw new Error('tiposEspeciales es obligatorio como un arreglo de string');


    let deck = [];
    
    // Crear cartas numéricas
    for ( let i = 2; i <= 10; i++) {
        for ( let tipo of tiposDeCarta ) {
            deck.push( i + tipo );
        }
    }

    // Crear Ases y cartas especiales
    for ( let tipo of tiposDeCarta ) {
        for ( let especial of tiposEspeciales ) {
            deck.push ( especial + tipo );
        }
    }

    return _.shuffle( deck );

}

// export const miNombre = 'Ignacio';
// export default crearDeck;