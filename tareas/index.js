const fs = require("fs") 
const tareas = JSON.parse(fs.readFileSync('./db/tareas.json','utf-8'));

module.exports = { 
    cartel : function(mensaje){ 
        console.log('___________________');
        console.log(mensaje);
        console.log('___________________');
    },
    guardarJson : function(tareas){ 
        fs.writeFileSync('./db/tareas.json',JSON.stringify(tareas),'utf-8')
    },
    agregarTarea : function(titulo,estado) { 
        let nuevaTarea = { 
            titulo,
            estado
        }
        tareas.push(nuevaTarea); 
        this.guardarJson(tareas); 
        this.cartel('NUEVA TAREA AGREGADA')
        this.listarTareas();
    },
    listarTareas : function(){ 
        tareas.forEach(tarea => {
                console.log(tarea);
        });
    },
    deshacer : function(){ 
        tareas.pop() 
        this.guardarJson(tareas)
        this.cartel('ULTIMA TAREA ELIMINADA')
        this.listarTareas()
    },
    filtrarPorEstado : function(filtro){
        this.cartel("Estos son los estados filtrados")
        let tareasFiltradas = tareas.filter(tarea => tarea.estado === filtro);
        return console.log(tareasFiltradas)
  },
}