// Importamos dotenv, no es necesario pero queria aprender a hacerlo
require('dotenv').config();
// Importamos la clase principal de Sequelize
const { Sequelize } = require('sequelize');

// Creamos la instancia de conexión con los datos de nuestra BD
// Argumentos: (nombre_bd, usuario, contraseña, opciones)
const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER,
  process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,   // servidor donde corre PostgreSQL
  dialect: 'postgres', // le decimos que usaremos PostgreSQL
  port: process.env.DB_PORT // puerto por defecto de PostgreSQL
});

// Función para probar que la conexión funciona
const conectar = async () => {
  try {
    await sequelize.authenticate(); // ejecuta un SELECT 1+1 internamente
    console.log('Conexión exitosa a la base de datos');
  } catch (error) {
    console.error('Error al conectar:', error);
  }
};

conectar();

// Exportamos la instancia para usarla en otros archivos
module.exports = sequelize;