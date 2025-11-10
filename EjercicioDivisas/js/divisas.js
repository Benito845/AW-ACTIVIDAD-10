// Clase que realiza la conversión de divisas
class Convertidor {
    constructor(cantidad, moneda) {
        this.cantidad = cantidad;
        this.moneda = moneda;
    }

    cambioMoneda() {
        let resultado = 0; let simbolo = ""; let bandera = "";

        // Tasas de cambio
        if (this.moneda == "usd") {
            resultado = this.cantidad * 0.054;
            simbolo = "$";
            bandera = "🇺🇸";
        } else if (this.moneda == "eur") {
            resultado = this.cantidad * 0.047;
            simbolo = "€";
            bandera = "🇪🇺";
        } else if (this.moneda == "gbp") {
            resultado = this.cantidad * 0.041;
            simbolo = "£";
            bandera = "🇬🇧";
        } else if (this.moneda == "jpy") {
            resultado = this.cantidad * 8.31;
            simbolo = "¥";
            bandera = "🇯🇵";
        }

        return simbolo + resultado.toFixed(2) + " " + bandera; // Devuelve el resultado formateado con toFixed para limitar la visualización a 2 decimales
    }
}

// Escuchador del formulario
document.getElementById("formDivisas").addEventListener("submit", function (e) { // Escuchar el evento submit
    e.preventDefault();// Evitar el envío del formulario

    // Obtener datos del formulario
    let cantidad = parseFloat(document.getElementById("cantidad").value);
    // Obtener la moneda seleccionada
    let moneda = document.getElementById("moneda").value;

    // llamo al metodo y muestro el resultado
    document.getElementById("resultado").innerHTML = "Resultado: " + new Convertidor(cantidad, moneda).cambioMoneda();
});
