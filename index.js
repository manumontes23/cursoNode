const cursos = require('./cursos.js')
const fs= require('fs')

const opciones={
    cedula:{
        demand:true,
        alias:'c'
    },
    nombre:{
        demand:true,
        alias:'n'
    },
    idCurso:{
        default:0,
        alias:'i'
    },
    opcion:{
        default:'v',
        alias:'o'
    }
}

let {curso1,curso2,curso3}=cursos

const argv = require('yargs')
    .command('prematricula','ver cursos',opciones)
    .argv
/**
 * funcion que le presenta al estudiante 
 */

async function presentar(){    
    console.log('id: '+curso1.id+'\n nombre: '+curso1.nombre+'\n Duracion: '+curso1.duracion+' horas \n valor: '+curso1.valor)
    await temporizador(2)
    console.log('id: '+curso2.id+'\n nombre: '+curso2.nombre+'\n Duracion: '+curso2.duracion+' horas \n valor: '+curso2.valor)
    await temporizador(2)
    console.log('id: '+curso3.id+'\n nombre: '+curso3.nombre+'\n Duracion: '+curso3.duracion+' horas \n valor: '+curso3.valor)

}
/**
 * funcion encargada de hacer esperar 
 * @param {*} segundos  
 */
function temporizador(segundos){
    return new Promise(resolve => setTimeout(resolve,segundos*1000))

}

let crearArchivo=(curso)=>{
    let texto='Curso: \n id: '+curso.id+'\n nombre: '+curso.nombre+'\n Duracion: '+curso.duracion+' horas \n valor: '+curso.valor+" \n estudiante: \ncedula:"+argv.c+" \nnombre: "+argv.n
    fs.writeFile('preMatricula.txt',texto,(err)=>{
        if(err) throw (err);
        console.log("el estudiante "+argv.c+" "+argv.n+' ha sido Prematriculado en el curso de '+curso.nombre)
    })
}

let principal=()=>{
    if(argv.o=='inscribir'){
        if(argv.i==1||argv.i==2||argv.i==3){
            if(argv.i==1){
                crearArchivo(curso1)
                console.log('id: '+curso1.id+'\n nombre: '+curso1.nombre+'\n Duracion: '+curso1.duracion+' horas \n valor: '+curso1.valor)
            }else if(argv.id==2){
                crearArchivo(curso2)
                console.log('id: '+curso2.id+'\n nombre: '+curso2.nombre+'\n Duracion: '+curso2.duracion+' horas \n valor: '+curso2.valor)
            }else{
                crearArchivo(curso3)
                console.log('id: '+curso3.id+'\n nombre: '+curso3.nombre+'\n Duracion: '+curso3.duracion+' horas \n valor: '+curso3.valor)
            }

        }else{
            console.log('id no valida, grupo no encontrado')
        }
    }else{
        presentar()
    }
}

principal()

