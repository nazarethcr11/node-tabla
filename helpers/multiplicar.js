const fs = require('fs');

//const crearArchivo = (base = 5) => { 
//    console.log('=====================');
//    console.log('Tabla del', base);
//    console.log('=====================');
//    
//    let salida = '';
//
//    for (let index = 0; index < 10; index++) {
//        salida+=`${base} x ${index+1} = ${base * (index+1)}\n`;    
//    }
//    console.log(salida);
//    fs.writeFileSync(`tabla-${base}.txt`, salida);
//    console.log(`tabla-${base}.txt creado`);
//}
//OPCION 2
//const crearArchivo = (base = 5) => { 
//    return new Promise((resolve,reject)=>{  
//        console.log('=====================');
//        console.log('Tabla del', base);
//        console.log('=====================');
//        
//        let salida = '';
//    
//        for (let index = 0; index < 10; index++) {
//            salida+=`${base} x ${index+1} = ${base * (index+1)}\n`;    
//        }
//        console.log(salida);
//        fs.writeFileSync(`tabla-${base}.txt`, salida);
//        resolve(`tabla-${base}.txt`);
//    });
//}

var colors = require('colors');

const crearArchivo = async (base=5,listar=false,hasta=10)=>{
    try {
        let salida = '';
        let consola = '';

        for (let index = 0; index < hasta; index++) {
            salida+=`${base} x ${index+1} = ${base * (index+1)}\n`;   
            consola+=`${base} ${'x'.blue} ${index+1} ${'='.blue} ${base * (index+1)}\n`; 
        }
        if(listar){
            console.log('====================='.cyan);
            console.log('Tabla del'.blue, colors.green(base));
            console.log('====================='.cyan);
            console.log(colors.green(consola));
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;

    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}