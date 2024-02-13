
  /**
   * Deshabilitar botones
   * 
   * @param {Boolean} bool Para definir si se deben deshabilitar o habilitar los botones. True deshabilita.
   */
  export const deshabilitarBotones = ( bool ) => {
    btnPedir.disabled   = bool;
    btnDetener.disabled = bool;
}