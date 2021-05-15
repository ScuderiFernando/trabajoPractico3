const tareas = require("./tareas")
const process = require("process")


let accion = process.argv[2]

if (!accion){console.log("Debes escribir una accion disponible: agregar / listar / deshacer / filtrar ")}


switch (accion) {
    case 'crear':
        let titulo = process.argv[3];
        if(!titulo){
            console.log('Debes escribir un título');
            break
        }
        let estado = process.argv[4];
        if(!estado){
            console.log("No agregaste estado, automaticamente quedará pendiente")
            tareas.agregarTarea(titulo,estado="pendiente")
            break
        }
        
        tareas.agregarTarea(titulo,estado)
        break;

    case 'listar':
        tareas.listarTareas()
        break;

    case 'deshacer' :
        tareas.deshacer()
        break

        case "filtrar" :
            let filtro = process.argv[3];
            if(!filtro){console.log("Debes indicar un filtro (terminado / pendiente)")}
            else{
            tareas.filtrarPorEstado(filtro)}
            break
            
    default: if(accion){console.log("Acción desconocida, las acciones disponibles son: crear / listar / deshacer / filtrar")}
        break;
    }