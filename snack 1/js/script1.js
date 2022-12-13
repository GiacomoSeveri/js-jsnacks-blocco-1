const amount = document.getElementById("sum");

let summation = 0;

  for (let i = 0; i < 10; i++){
     let n = parseInt(prompt("inserisci un numero"));
     
     summation += n;
  }

amount.innerHTML = `La somma totale è ${summation}`