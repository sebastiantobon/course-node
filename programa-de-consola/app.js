const { inquirerMenu, stop, leerInput,  } = require("./inquierer");
const Tasks = require("./models/tasks");

require("colors");

console.clear();

const main = async () => {
  let opt = "";

  const tareas = new Tasks()

  do {
    opt = await inquirerMenu();
    console.log({opt});

    switch (opt) {
      case '1':
        // Crear Opcion
        const desc = await leerInput("Description: ");
        tareas.createTask( desc )
        break;

        case '2':
          // 
          console.log(tareas._listado);
          break;
    }
    

    await stop();
  } while (opt !== "0");
};

main();
