const argv = require('yargs')
    .option('b',{
        alias:'base',
        type:'number',
        demandOption:true,
        describe:'Es la base de la tabla de multiplicar'
    })
    .check((argv,options)=>{
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un numero';
        }else if(argv.l!=true && argv.l!=false && isNaN(argv.l)){
            throw 'La lista tiene que ser un booleano'
        }
        return true;
    })
    .option('l',{
        alias:'listar',
        type:'boolean',
        default:false,
        describe:'Muestra la tabla en consola'
    })
    .option('h',{
        alias:'hasta',
        type:'number',
        default:10,
        describe:'Indica hasta que numero se multiplicara la base'
    })
    .argv;

module.exports = argv;