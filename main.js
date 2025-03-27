// Code Question 1

const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); // ?
console.log(secondBurger.name); // ?

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// Risposta: In console verranno stampati "Double Cheese Burger" e "Double Cheese Burger"

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// Risposta: 1 oggetto


// Code Question 2
const hamburger = {
  name: "Cheese Burger",
  weight: 250,
  ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = { ...hamburger };
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // ?
console.log(secondBurger.ingredients[0]); // ?

// P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento)!

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// Risposta: In console verranno stampati due "Salad"

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// Risposta: 2 oggetti 


// Code Question 3
const hamburger = {
  name: "Cheese Burger",
  weight: 250,
  maker: {
    name: "Anonymous Chef",
    restaurant: {
      name: "Hyur's Burgers",
      address: "Main Street, 123",
      isOpen: true,
    },
    age: 29
  }
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// Risposta: 9 oggetti tra oggeti e oggetti annidati.


// Code Question 4
const chef = {
  name: "Chef Hyur",
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },
}

const restaurant = {
  name: "Hyur's Burgers",
  address: {
    street: 'Main Street',
    number: 123,
  },
  openingDate: new Date(2025, 3, 11),
  isOpen: false,
};

// Qual è il metodo migliore per clonare l’oggetto chef, e perché?
// Risposta: Il metodo migliore per clonare l'oggetto chef è quello di utilizzare l'operatore spread {...chef} in quanto l'oggetto chef non contiene oggetti annidati, ma contiene una funzione e solo l'operatore spread può copiare le funzioni.

// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?
// Risposta: Il metodo migliore per clonare l'oggetto restaurant è quello di utilizzare il metodo structuredCloned(restaurant) in quanto l'oggetto restaurant contiene oggetti annidati (deep copy) e il metodo structuredClone() permette di copiarli. Con structuredClone() riesco inoltre a mantenere le caratteristiche dei tipi speciali come Date.


// Code Question 5 (Bonus)
const hamburger = {
  name: "Cheese Burger",
  weight: 250,
  maker: {
    name: "Anonymous Chef",
    restaurant: {
      name: "Hyur's Burgers",
      address: "Main Street, 123",
      isOpen: true,
    },
    age: 29
  }
};

// 3

const newRestaurant = { ...hamburger.maker.restaurant };
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
// 4 con restaurant

const secondBurger = { ...hamburger };
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";
// 5 con burger

console.log(hamburger.maker.name); // ?
console.log(secondBurger.maker.name); // ?
console.log(hamburger.maker.restaurant.name); // ?
console.log(secondBurger.maker.restaurant.name); // ?


// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// Risposta: Chef Hyur, Chef Hyur,  Hyur's II, Hyur's II

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// Risposta: 5 oggetti


// Code Question 6 (Bonus)
const chef = {
  name: "Chef Hyur",
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },
  restaurant: {
    name: "Hyur's Burgers",
    welcomeClient: () => {
      console.log("Benvenuto!");
    },
    address: {
      street: 'Main Street',
      number: 123,
      showAddress: () => {
        console.log("Main Street 123");
      }
    },
    isOpen: true,
  }
}
// Qual è il metodo migliore per clonare l’oggetto chef, e perché?
// Risposta: devo utilizzare lo spread operator per copiare le funzioni, ma allo stesso tempo ci sono delle funzioni annidate che non vengono copiate. Quindi devo utilizzare gli spread operator anche per le funzioni annidate.


// Snack  (Bonus)
// Crea una funzione che permette la copia profonda (deep copy) di un oggetto, che copia anche i suoi metodi (proprietà che contengono funzioni). Usa l’oggetto di Code Question 6 come test.
// Serve usare una funzione ricorsiva! (fai un po’ di ricerca).