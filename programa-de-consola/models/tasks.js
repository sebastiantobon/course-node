const Task = require("./task");

class Tasks {
  _listado = {};

  get listadoArr() {
    const listado = [];
    //js tiene un metodo en su objecto Object punto keys en el cual puedo extraer cada una de las llaves
    //que se encuentrar en cada uno de los objectos, en este caso el this._listado
    // esto me va a regresar un un arreglo de todas las llaves

    // tambien tenemos metodos como el forEach, para indentificar cuales son las tareas que tengo en este _listado[]

    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });

    return listado;
  }

  constructor() {
    this._listado = {};
  }

  deleteTask(id = ""){
    if(this._listado[id]){
        delete this._listado[id]
    }
  }

  // Esta funcion es para cargar la info que se guarda en el archivo .json
  // cuando se le pasa la data desde el app.js y utilizamos el forEach para barrer e identificar todos los objetos
  // que se encuantrar en ._listado con el id
  updateTasksFromArray(tareas = []) {
    tareas.forEach((task) => {
      this._listado[task.id] = task;
    });
  }

  createTask(desc = "") {
    const task = new Task(desc);
    this._listado[task.id] = task;
  }

  listadoCompleto() {
    console.log();
    this.listadoArr.forEach((tarea, index) => {
      const idx = `${index + 1}`.green;
      const { desc, completadoEn } = tarea;

      const estado = completadoEn ? "Completado".green : "Pendiente".red;

      console.log(`${idx} ${desc} :: ${estado}`);
    });
  }

  listarPendientes(completadas = true) {
    console.log();
    let contador = 0;
    this.listadoArr.forEach((tarea) => {
      const { desc, completadoEn } = tarea;
      const estado = completadoEn ? "Completado".green : "Pendiente".red;

      if (completadas) {
        // Mostrar completadas
        if (completadoEn) {
          contador += 1;
          console.log(`${(contador + ".").green} ${desc} :: ${estado}`);
        }
      } else {
        if (!completadoEn) {
          contador += 1; 
          console.log(`${(contador + ".").green} ${desc} :: ${estado}`);
        }
      }
    });
  }
}

module.exports = Tasks;
