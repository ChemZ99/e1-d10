/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

console.log("---------- esercizio 1");
const pets = ["dog", "cat", "hamster", "redfish"];
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

console.log("---------- esercizio 2");
pets.sort();
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log("---------- esercizio 3");
pets.reverse();
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

console.log("---------- esercizio 4");
pets.push(pets.shift());
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

console.log("---------- esercizio 5");

let plate1 = "CZ855RTG";
let plate2 = "JK769PLW";
let plate3 = "GH572NGF";

const addObj = function (stringFord, stringPeugeot, stringVolks) {
  for (let i = 0; i < cars.length; i++) {
    switch (cars[i].brand) {
      case "Ford":
        Object.defineProperty(cars[i], "licensePlate", { value: stringFord });
        break;
      case "Peugeot":
        Object.defineProperty(cars[i], "licensePlate", { value: stringPeugeot });
        break;
      case "Volkswagen":
        Object.defineProperty(cars[i], "licensePlate", { value: stringVolks });
        break;
    }
  }
};
addObj(plate1, plate2, plate3);
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

console.log("---------- esercizio 6");
let brandInput = "Lamborghini";
let modelInput = "Aventador";
let colorInput = "yellow";
let trimsInput = ["gt", "sport", "racing", "aero"];
let licPlateInput = "ZZ999XXX";

const addToCars = function (brandI, modelI, colorI, trimsI, licplateI) {
  cars.push({
    brand: brandI,
    model: modelI,
    color: colorI,
    trims: trimsI,
    licensePlate: licplateI,
  });
  return cars;
};
addToCars(brandInput, modelInput, colorInput, trimsInput, licPlateInput);
console.log(cars);

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

console.log("---------- esercizio 7");
const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims.slice(0, 1));
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

console.log("---------- esercizio 8");

for (let i = 0; i < cars.length; i++) {
  const discrim = cars[i].color.slice(0, 1);
  console.log("discrim check", discrim);
  if (discrim === "b") {
    console.log("fizz");
  } else {
    console.log("buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];

console.log("---------- esercizio 9");
let log1;
let counter = 0;
while (log1 !== 32) {
  log1 = numericArray[counter];
  console.log(log1);
  counter++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const newarray = [];

console.log("---------- esercizio 10");

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "g":
      newarray.push("7");
      break;
    case "n":
      newarray.push("12");
      break;
    case "u":
      newarray.push("19");
      break;
    case "z":
      newarray.push("21");
      break;
    case "d":
      newarray.push("4");
      break;
  }
}
console.log(charactersArray);
console.log(newarray);
