const fs = require('fs');
const colors = require('colors');
/**
     * Codigo Normal
     */

// const creaArchivo = ( base = 5 ) => {
    
    // console.log('======================');
    // // console.log(`     Tabla del ${ base }    `)
    // console.log('     Tabla del ',  base);
    // console.log('======================');

    // let salida = '';

    // for (let i = 1; i < 11; i++) {
    //     salida += ` ${ base } x ${ i } = ${ base * i }\n`;
    // }
    
    // console.log( salida );
    
    // fs.writeFileSync( `tabla-${ base }.txt`, salida );
    
    // console.log(`Archivo tabla-${ base }.txt creado de forma exitosa!`);
    
// }


/**
     * Codigo con Promise sin manejo de reject
     */
// const creaArchivo = ( base = 5 ) => {
    
//     return new Promise( (resolve, reject) => {
//         console.log('======================');
//         // console.log(`     Tabla del ${ base }    `)
//         console.log('     Tabla del ',  base);
//         console.log('======================');

//         let salida = '';

//         for (let i = 1; i < 11; i++) {
//             salida += ` ${ base } x ${ i } = ${ base * i }\n`;
//         }
        
//         console.log( salida );
        
//         fs.writeFileSync( `tabla-${ base }.txt`, salida );
        
//         resolve(`Archivo tabla-${ base }.txt`);
//     })

// }

const creaArchivo = async( base, listar = false, hasta = 10) => {
    
    try{

        let salida = ''; 
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida  += ` ${ base } x ${ i } = ${ base * i }\n`;
            consola += ` ${ base } ${ 'x'.red } ${ i } ${ '='.blue } ${ base * i }\n`;
        }

        if (listar ){
            console.log('======================'.green);
            // console.log(`     Tabla del ${ base }    `)
            console.log('     Tabla del '.green, colors.blue( base ) );
            console.log('======================'.green);
            
            console.log( consola );
        }
        
        
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );
        
        return `Archivo tabla-${ base }.txt`;
    } catch (err) {
        throw err
    }
    
 }


module.exports = {
    creaArchivo
}

