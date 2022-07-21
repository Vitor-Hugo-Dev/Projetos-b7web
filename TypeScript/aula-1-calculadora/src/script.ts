// criando uma calculadora

const num1 = document.getElementById('numero1') as HTMLInputElement;

const num2 = document.getElementById('numero2') as HTMLInputElement;

const button = document.getElementById('calcular');

const res = document.getElementById('resultado');

const calcular = (n1: number, n2: number) => {
  return n1 + n2;
}

button.addEventListener('click', () => res.innerHTML = calcular(+num1.value, +num2.value).toString())