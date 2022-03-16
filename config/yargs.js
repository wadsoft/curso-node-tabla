const { describe } = require('yargs')

const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la Base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Este el el número final de la multiplicación'
                })
                .check((argv, options) => {
                    if (isNaN(argv.b && argv.base)) {
                        throw 'La base tiene que ser un número'
                    //console.log(yargs.argv)
                    }
                    return true
                })
                .argv


module.exports = argv