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

const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;

    empleado ? resolve(empleado) : reject(`no existe empleado con id: #${id} `);
  });
};

const getSalario = (id) => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find((e) => e.id === id)?.salario;

    salario ? resolve(salario) : reject(`no existe salario con id: #${id} `);
  });
};

const getInfoUser = async (id) => {
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);

    return `${empleado} ${salario}`;
  } catch (error) {
    throw error;
  }
};

const id = 3;

getInfoUser(id)
  .then((msg) => {
    console.log("TODO BIEN");
    console.log(msg);
  })
  .catch((err) => {
    console.log("TODO MAL");
    console.log(err);
  });
