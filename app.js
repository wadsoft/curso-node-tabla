
const { crearArchivo } = require ('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();

//console.log(process.argv)
//const [ , , arg3 = 'base=5'] = process.argv
//const [ , base = 5] = arg3.split('=')
//console.log(base) 

//console.log(process.argv)

//----Procedimiento mostrar listado en consola------------------
//console.log(argv)
//console.log('base: yargs', argv.base)
//console.log(argv.listar)
//-----------------------


//const base = 3

//console.log('===================') reemplazado    
//console.log('    Tabla del ' + base) reemplazado
//console.log('===================') reemplazado

//let salida = ''
//salida = `=================== \n`
//salida = salida + `    Tabla del ${base} \n`
//salida = salida + '==================='
//salida = `${salida}\n \n`

//for (let i=1; i<=10; i++){
//    salida += (`${base} x ${i} = ${base * i}\n`)
//}

//console.log(salida)

//fs.writeFileSync(`tabla${base}.txt`, salida)

//    console.log(`Archivo tabla${base}.txt creado`)
//----------------------------

//fs.writeFile(`tabla${base}.txt`, salida, (err) => {
//    if (err) throw err
//    console.log(`Archivo tabla${base}.txtcreado`)
//})

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err => console.clear(err))