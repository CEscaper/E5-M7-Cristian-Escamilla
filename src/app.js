const sequelize = require('./config/database');
const Producto = require('./models/Producto');

// CREATE — inserta un nuevo registro en la tabla
const crearProducto = async () => {
  const producto1 = await Producto.create({ nombre: 'Teclado', precio: 120000.00 });
  const producto2 = await Producto.create({ nombre: 'Mouse', precio: 45000.00 });
  const producto3 = await Producto.create({ nombre: 'Monitor', precio: 350000.00 });
  console.log('Productos creados:');
  console.log(' -', producto1.toJSON());// Tanto la funcion .ToJSON como .dataValues en este caso dan el mismo output
  console.log(' -', producto2.dataValues);
  console.log(' -', producto3.dataValues);
};

// READ — obtiene todos los registros de la tabla
const leerProductos = async () => {
  const productos = await Producto.findAll();
  console.log('Todos los productos:');
  productos.forEach(p => console.log(' -', p.dataValues));
};

// READ — obtiene un registro por su clave primaria (id)
const leerProductoPorId = async (id) => {
  const producto = await Producto.findByPk(id); // findByPk = busca por Primary Key
  console.log('Producto encontrado:', producto.dataValues);
};

// UPDATE — modifica campos de un registro según su id
const actualizarProducto = async (id) => {
  await Producto.update({ precio: 100000.00 }, { where: { id } });
  console.log('Producto actualizado');
};

// DELETE — elimina un registro según su id
const eliminarProducto = async (id) => {
  await Producto.destroy({ where: { id } });
  console.log('Producto eliminado');
};

// Función principal que orquesta todo
const main = async () => {
  // sync() revisa si la tabla existe en la BD, si no, la crea automáticamente
  await sequelize.sync({ force: true });
  console.log('Tabla sincronizada\n');

  // Ejecutamos todas las operaciones CRUD en orden
  await crearProducto();           // creamos 3 productos
  await leerProductos();           // mostramos los 3
  await leerProductoPorId(2);      // buscamos el Mouse
  await actualizarProducto(1);     // actualizamos el Teclado
  await leerProductos();           // mostramos el cambio
  await eliminarProducto(3);       // eliminamos el Monitor
  await leerProductos();           // confirmamos que quedaron 2
};

main();