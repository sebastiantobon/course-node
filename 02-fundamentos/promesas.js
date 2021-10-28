const empleados = [
    {
      id: 1,
      nombre: "Fernando",
    },
    {
      id: 2,
      nombre: "linda",
    },
    {
      id: 3,
      nombre: "karen",
    },
  ];
  
  const salarios = [
    {
      id: 1,
      salario: 1000,
    },
    {
      id: 2,
      salario: 1500,
    },
  ];
  
  const getEmpleado = (id ) => {
      return new Promise((resolve, reject) => {
          
          const empleado = empleados.find((e) => e.id === id)?.nombre;
          
    (empleado )  
       ? resolve(empleado)
     : reject(`no existe empleado con id: #${id} `);
    
 });

}

const getSalario = (id ) => {
    return new Promise((resolve, reject) => {
        
        const salario = salarios.find((e) => e.id === id)?.salario;
        
  (salario )  
     ? resolve(salario)
   : reject(`no existe salario con id: #${id} `);
  
});

}

const id = 3;


//MANERA NO ADECUADA DE TRABAJAR CON PROMESAS EN CADENA
 // getEmpleado(id)
  //.then(empleado => {

    //getSalario(id)
    //.then(salario => {
      //   console.log(`el empleado ${empleado} tiene un salario de ${salario}`)
    //})
    //.catch(err => console.log(err));

  //})
 // .catch(err => console.log(err));

let nombre;

 getEmpleado(id)
 .then( empleado => {
     nombre = empleado;
     return getSalario( id)})
 .then( salario => console.log(`El empleado ${nombre} tiene un salario de ${salario}`))
    .catch((err) => console.log(err))