const deadpoll = {
  nombre: "wade",
  apellido: "winston",
  poder: "Regeneracion",
  //  edad: 50,
  getNombre() {
    return `${this.nombre} ${this.apellido} ${this.poder}`;
  },
};

function imprimeHeroe({ nombre, apellido, poder, edad = 0 }) {

  console.log(nombre, apellido, poder, edad);
}
//imprimeHeroe(deadpoll);

const heroes = ["deadpool", "superman", "batman"];

//const h1 = heroes[0];
//const h2 = heroes[1];
//const h3 = heroes[2];

const [h1, h2 ,h3] = heroes;

console.log(h1, h2, h3);

//const {nombre, apellido, poder, edad = 0} = deadpoll;

//console.log(nombre, apellido, poder, edad);
//console.log(deadpoll.getNombre());

