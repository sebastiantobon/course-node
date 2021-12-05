const fs = require("fs");
const archivo = "./db/data.json";

const saveDb = (data) => {
  //guardando las tareas en un archivo file .json utilizando este fs indicandole que vamos a crear un archiv de escritura
  // de primer parametro se le envia la ruta y luego se envia la data pero antes tenemos que enviarla como un string con 
  // JSON.stringify(data)
  fs.writeFileSync(archivo, JSON.stringify(data));
}; 

const leerDb = ( ) => {
  // si no existe el archivo no enviamos nada 
  if(!fs.existsSync(archivo)){
    return null;
  }

  const info =  fs.readFileSync(archivo, {encoding: "utf-8"});
  const data = JSON.parse(info);
  // console.log(data);

  return data;
}




module.exports = {
    saveDb,
    leerDb
}
