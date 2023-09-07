const{crearArchivo}= require('./helpers/multiplicar');
const argv = require('./config/yargs');
var colors = require('colors');

console.clear();

//const [,,arg3='base=5']=process.argv;
//const [,base=5]=arg3.split('=');


crearArchivo(argv.b,argv.l,argv.h)
    .then(nombreArchivo => console.log(colors.cyan(nombreArchivo),'creado'.cyan))
   .catch(err => console.log(err));