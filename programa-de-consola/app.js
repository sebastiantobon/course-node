const { leerDb, saveDb } = require("./db/SaveDb");
const {
  inquirerMenu,
  stop,
  leerInput,
  listTasksDelete,
  confirmDelete,
} = require("./inquierer");
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
    // console.log({ opt });

    switch (opt) {
      case "1":
        // Crear Opcion
        const desc = await leerInput("Description: ");
        tareas.createTask(desc);
        console.log("Task created successfully");
        break;

      case "2":
        //
        // console.log(tareas.listadoArr);
        tareas.listadoCompleto();
        break;

      case "3": //  Listar tareas completadas
        tareas.listarPendientes(true);
        break;
      case "4": // Listar Tareas pendientes
        tareas.listarPendientes(false);
        break;
      case "6": // Listar Tareas para borrar
        const id = await listTasksDelete(tareas.listadoArr);
        if (id !== "0") {
          const ok = await confirmDelete("Estas seguro ");
          if (ok) {
            tareas.deleteTask(id);
            console.log("Task Delete successfully");
          }
        }
        break;
    }

    saveDb(tareas.listadoArr);
    await stop();
  } while (opt !== "0");
};

main();
