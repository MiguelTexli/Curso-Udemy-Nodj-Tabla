const { creaArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');


console.clear();

console.log( argv );

  creaArchivo( argv.b, argv.l, argv.h )
      .then( nombreArchivo => console.log( nombreArchivo.blue.underline, 'creado') )
      .catch( err => console.log( err ) );




