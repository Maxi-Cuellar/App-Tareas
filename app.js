const fs = require("fs");
const dataDeTareasJSON = fs.readFileSync("./app-tareas/tareas.json", "utf-8")
const dataTareasJSONParseado = JSON.parse(dataDeTareasJSON)
const comando = process.argv[2]


switch (comando) {
    case "listar":
        for (let i = 0; i < dataTareasJSONParseado.length ; i++) {
        console.log(dataTareasJSONParseado[i])
        }
        break;
    case undefined:
        console.log("Atención - Tienes que pasar una acción. Las acciones disponibles son: listar");
        break
    default:
        console.log("No entiendo qué quieres hacer. Las acciones disponibles son: listar");
        break;
}