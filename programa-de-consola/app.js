const { leerDb, saveDb } = require("./db/SaveDb");
const { inquirerMenu, stop, leerInput } = require("./inquierer");
const Tasks = require("./models/tasks");

require("colors");

console.clear();

const main = async () => {
  let opt = "";

  const tareas = new Tasks();

  const tareasDb = leerDb();

  if (tareasDb) {
    //Cargar las tareas
    tareas.updateTasksFromArray(tareasDb);
  }

  do {
    opt = await inquirerMenu();
    console.log({ opt });

    switch (opt) {
      case "1":
        // Crear Opcion
        const desc = await leerInput("Description: ");
        tareas.createTask(desc);
        break;

      case "2":
        //
        console.log(tareas.listadoArr);
        break;
    }

    await stop();

    saveDb(tareas.listadoArr);
  } while (opt !== "0");
};

main();
