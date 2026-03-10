// DataTypes contiene los tipos de datos disponibles (STRING, FLOAT, INTEGER, etc.)
const { DataTypes } = require('sequelize');

// Importamos la conexión que configuramos en database.js
const sequelize = require('../config/database');

// Definimos el modelo "Producto" — representa la tabla en la BD
// Sequelize creará automáticamente: id, createdAt y updatedAt
const Producto = sequelize.define('Producto', {
  nombre: {
    type: DataTypes.STRING,  // equivale a VARCHAR en SQL
    allowNull: false          // equivale a NOT NULL en SQL
  },
  precio: {
    type: DataTypes.FLOAT,   // equivale a FLOAT en SQL
    allowNull: false
  }
});

// Exportamos el modelo para usarlo en app.js
module.exports = Producto;