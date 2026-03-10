# E5-M7 — CRUD de Productos con Sequelize

Ejercicio práctico que implementa un CRUD completo usando Sequelize como ORM conectado a una base de datos PostgreSQL.

## Tecnologías
- Node.js
- Sequelize
- PostgreSQL

## Estructura del proyecto
```
E5-M7/
├── src/
│   ├── config/
│   │   └── database.js
│   ├── models/
│   │   └── Producto.js
│   └── app.js
├── .env.example
├── .gitignore
└── package.json
```

## Instalación
1. Clona el repositorio
2. Instala las dependencias
```bash
npm install
```
3. Crea un archivo `.env` basándote en `.env.example` y completa tus credenciales
4. Crea la base de datos en PostgreSQL
```sql
CREATE DATABASE tienda_db;
```
5. Ejecuta el proyecto
```bash
node src/app.js
```

## Operaciones CRUD
| Operación   | Método Sequelize| SQL equivalente |
|-------------|-----------------|-----------------|
| Crear       | `create()`      | `INSERT INTO`   |
| Leer todos  | `findAll()`     | `SELECT`        |
| Leer por ID | `findByPk()`    | `SELECT WHERE`  |
| Actualizar  | `update()`      | `UPDATE`        |
| Eliminar    | `destroy()`     | `DELETE`        |