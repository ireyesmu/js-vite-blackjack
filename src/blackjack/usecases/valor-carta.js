
/**
 * Esta función asigna el valor de la carta robada
 * 
 * @param {String} carta 
 * @returns {Number} Retorna el valor de la carta: el número si es un número, 11 si corresponde a un As, 10 para las demás figuras
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);

    return ( isNaN(valor)) ? ( (valor === 'A') ? 11 : 10 ) : valor * 1 ; 

}