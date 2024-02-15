require('dotenv').config();


const {checkoutKenosDesignRepo, createSkinFile} = require('./utils/functions');
const {environment} = require('./utils/environment');

checkoutKenosDesignRepo();

createSkinFile();

console.log(` `);
console.log(`Paso 2 - Completado:`);
console.log(`Skin: ${environment.FILE_NAME} se ha generado con éxito`);