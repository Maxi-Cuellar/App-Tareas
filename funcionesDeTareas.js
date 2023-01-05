const fs = require("fs")

let archivoTareas = {
    archivo : "tareas.json",
    leerArchivos : function () {
        let tareas = fs.readFileSync("./app-tareas/tareas.json", "utf-8");
        return JSON.parse(tareas)
    }
}

module.exports = archivoTareas;