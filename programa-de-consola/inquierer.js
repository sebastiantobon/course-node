require("colors");
const inquirer = require("inquirer");

const menuOpts = [
  {
    type: "list",
    name: "opcion",
    message: "Que deseas hacer?",
    choices: [
      {
        value: "1",
        name: `${"1".green}. Create task`,
      },
      {
        value: "2",
        name: `${"2".green}. List tasks`,
      },
      {
        value: "3",
        name: `${"3".green}. List completed tasks`,
      },
      {
        value: "4",
        name: `${"4".green}. List pending tasks`,
      },
      {
        value: "5",
        name: `${"5".green}. Complete task(s)`,
      },
      {
        value: "6",
        name: `${"6".green}. Delete Task`,
      },
      {
        value: "0",
        name: `${"0".green}. GET OUT`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();

  console.log("=======================".green);
  console.log("   Select an option   ".bgBlue);
  console.log("=======================\n".green);

  const { opcion } = await inquirer.prompt(menuOpts);

  return opcion;
};

const stop = async () => {
  const questions = [
    {
      type: "input",
      name: "enter",
      message: `Select an option ${"ENTER".green} to continue\n`,
    },
  ];
  console.log("\n");
  await inquirer.prompt(questions);
};

const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Please ingrese un valor";
        }
        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
};

const listTasksDelete = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const idx = `${i + 1}`.green;

    return {
      value: tarea.id,
      name: `${idx} ${tarea.desc}`,
    };
  });

  choices.unshift({
    value: "0",
    name: "0.".green + "Cancelar",
  });

  const questions = [
    {
      type: "list",
      name: "id",
      message: "Delete",
      choices,
    },
  ];

  const { id } = await inquirer.prompt(questions);
  return id;
};

const confirmDelete = async (message) => {
  const question = [
    {
      type: "confirm",
      name: "ok",
      message,
    },
  ];

  const { ok } = await inquirer.prompt(question);
  return ok;
};

const showListCheck = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const idx = `${i + 1}`.green;

    return {
      value: tarea.id,
      name: `${idx} ${tarea.desc}`,
      checked: (tarea.completadoEn) ? true : false
    };
  });

  const questions = [
    {
      type: "checkbox",
      name: "ids",
      message: "selections",
      choices,
    },
  ];

  const { ids } = await inquirer.prompt(questions);
  return ids;
};

module.exports = {
  inquirerMenu,
  stop,
  leerInput,
  listTasksDelete,
  confirmDelete,
  showListCheck,
};
