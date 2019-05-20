const {curso1,curso2,curso3} = require('./cursos.js')
const fs= require('fs')

const opciones={
    inscribir:{
        alias:'i'
    },
    ver:{
        alias:'v'

    }
}
const argv = require('yargs').argv
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

let crearArchivo=()=>{
    fs.writeFile('preMatricula.txt',texto,(err)=>{
        if(err) throw (err);
        console.log('se ha creado el archivo')
    })
}



presentar()

