let app = new Vue({
  el: '#app',
  data: {
    n1: Math.floor(Math.random() * 50),
    n2: Math.floor(Math.random() * 50),
    res: 0,
    acertou: 'acertou'.toUpperCase(),
    errou: 'errou'.toUpperCase(),
  },
});
