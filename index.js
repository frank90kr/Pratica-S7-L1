//creo la classe

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  static confrontoEta(user1, user2) {
    if (user1.age < user2.age) {
      console.log(`${user1.firstName} è più giovane di ${user2.firstName}.`);
    } else if (user1.age > user2.age) {
      console.log(`${user1.firstName} è più anziano di ${user2.firstName}.`);
    } else {
      console.log(`${user1.firstName} ha la stessa età di ${user2.firstName}.`);
    }
  }
}

const user1 = new User("luca", "rossi", 19, "Grecia");
const user2 = new User("bruno", "contorsi", 22, "Nuova Zelanda");

User.confrontoEta(user1, user2);
/////////////////////////////////////

const formNode = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const species = document.getElementById("species");
const breed = document.getElementById("breed");

const div = document.getElementsByClassName("animali")[0]; //selezioniamo il div animali

function crea(variabile) {
  const p = document.createElement("p");
  div.appendChild(p);
  p.textContent = variabile;
}

class Animal {
  constructor(nome, proprietario, specie, razza) {
    this.nome = nome;
    this.proprietario = proprietario;
    this.specie = specie;
    this.razza = razza;
  }
  static stessopadrone(animale1, animale2) {
    if (animale1 && animale2) {
      if (animale1.proprietario === animale2.proprietario) {
        console.log("gli animali hanno lo stesso padrone");
      }
    }
  }
}

const animali = [];

formNode.onsubmit = function (e) {
  // previene il comportamento di default del form
  e.preventDefault();

  const animale = new Animal(fname.value, lname.value, species.value, breed.value);

  animali.push(animale);
  fname.value = "";
  lname.value = "";
  species.value = "";
  breed.value = "";

  crea(
    " nome " +
      animale.nome +
      " proprietario " +
      animale.proprietario +
      " specie " +
      animale.specie +
      " razza " +
      animale.razza
  );

  Animal.stessopadrone(animali[0], animali[1]);
  console.log(animali);
};
