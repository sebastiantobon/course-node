const Task = require("./task");

class Tasks {
  _listado = {};

  constructor() {
    this._listado = {};
  }

  createTask(desc = "") {
    const task = new Tasks(desc);

    this._listado[Task.id] = task;
  }
}

module.exports = Tasks;
