
/**
 * Esta función me permite tomar una carta
 * 
 * @param {Array<String>} deck Es un arreglo de String
 * @returns {String} Retorna la carta retirada del deck (pop)
 */

export const pedirCarta = ( deck ) => {
      
    if ( !deck || deck.length === 0) 
        throw new Error('No hay cartas en el deck');

    return deck.pop();

}