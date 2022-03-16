
const { rejects } = require('assert')
const fs = require('fs')
const { argv } = require('process')

const crearArchivo = async( base = 5, listar = false, hasta = 10) => {

    //console.clear()
    try {
        let salida = ''
        let consola =''
        let header = ''
        let encabezado = ''

        for (let i=1; i<=hasta; i++){
            salida  += (`${base} ${'x'.yellow} ${i} = ${base * i}\n`)
            consola += (`${base} x ${i} = ${base * i}\n`)
        }
        
        header = `=================== \n`.green
        header = header + `    Tabla del ${base} \n`.blue
        header = header + `${'==================='.green}\n`
        //header = `${header}\n`

        encabezado = `=================== \n`
        encabezado = encabezado + `    Tabla del ${base} \n`
        encabezado = encabezado + '==================='
        encabezado = `${encabezado}\n\n`


        if (listar){
            console.log(header)                 
            console.log(salida)
        }



        fs.writeFileSync(`./salida/tabla${base}.txt`, encabezado + consola)
        
        return `tabla${base}.txt`

    } catch (err) {
        throw  err
    }

}

module.exports = {
    crearArchivo
}