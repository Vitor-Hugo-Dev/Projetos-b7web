// criando uma calculadora
var num1 = document.getElementById('numero1');
var num2 = document.getElementById('numero2');
var button = document.getElementById('calcular');
var res = document.getElementById('resultado');
var calcular = function (n1, n2) {
    return n1 + n2;
};
button.addEventListener('click', function () { return res.innerHTML = calcular(+num1.value, +num2.value).toString(); });
