require("colors");
const inquirer = require("inquirer");

const menuOpts = [
  {

    type: "list",
    name: "opcion",
    message: "Que deseas hacer?",
    choices: [
      {
        value: '1',
        name: `${'1'.green}. Create task`,
      },
      {
        value: '2',
        name: `${'2'.green}. List tasks`,
      },
      {
        value: '3',
        name: `${'3'.green}. List completed tasks`,
      },
      {
        value: '4',
        name: `${'4'.green}. List pending tasks`,
      },
      {
        value: '5',
        name: `${'5'.green}. Complete homework`,
      },
      {
        value: '6',
        name: `${'6'.green}. Delete Task`,
      },
      {
        value: '0',
        name: `${'0'.green}. GET OUT`,
      },
    ],
  },
];

const inquirerMenu = async() => {
  console.clear();

  console.log("=======================".green);
  console.log("   Select an option   ".bgBlue.america);
  console.log("=======================\n".green);

  const  { opcion } = await inquirer.prompt(menuOpts);

  return opcion;
};

const stop = async() => {
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

const leerInput = async(message) => {
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

module.exports = { inquirerMenu, stop, leerInput };
