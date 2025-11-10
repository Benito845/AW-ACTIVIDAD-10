class IMC {
    constructor(peso, altura) {
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        let imc = this.peso / (this.altura * this.altura);
        let mensaje = ""; // variable para el mensaje de la categoría
        let imagen = ""; // variable para la imagen correspondiente

        // Determinar la categoría del IMC
        if (imc < 18.5) { // entra al ciclo y empieza la comparacion dependiendo el peso
            mensaje = "Bajo peso";
            imagen = "images/bajo_peso.png"; 
        } else if (imc >= 18.5 && imc < 24.9) {
            mensaje = "Peso normal";
            imagen = "images/peso_normal.png";
        } else if (imc >= 25.0 && imc < 29.9) {
            mensaje = "Sobrepeso";
            imagen = "images/sobre_peso.png";
         } else if (imc >= 30.0 && imc <= 34.9) {
            mensaje = "Obesidad grado I";
            imagen = "images/obesidad1.png";
         } else if (imc >= 35.0 && imc <= 39.9) {
            mensaje = "Obesidad grado II";
            imagen = "images/obesidad2.png";
        } else {
            mensaje = "Obesidad grado  III (≥ 40.0)";
            imagen = "images/obesidad.png";
        }

        return `Tu IMC es: ${imc.toFixed(2)}<br>
            Categoría: ${mensaje}<br>
            <img src="${imagen}" width="150">
        `;
    }
}
// Escuchador del formulario
document.getElementById("formIMC").addEventListener("submit", function (e) {
    e.preventDefault();

    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    document.getElementById("resultado").innerHTML = new IMC(peso, altura).calcularIMC();
});
