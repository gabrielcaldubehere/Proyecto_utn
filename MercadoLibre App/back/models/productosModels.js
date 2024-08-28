var pool = require('./bd');

//Seleccionar todos los productos de la tabla
async function getProductos() {
    var query = 'select * from productos';
    var rows = await pool.query(query);
    return rows;
}

// Agregar Producto
async function insertarProducto(obj) {
    try {
        var query = 'insert into productos set ?';
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }

}

//Eliminar Producto
async function eliminarProducto(id) {
    var query = 'delete from productos where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

//Selecciona por ID la Modificacion del Producto
async function seleccionarProductoid(id) {
    var query = "select * from productos where id=?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

//Modificar Producto

async function modificarProducto(obj, id) {
    try {
        var query = "update productos set ? where id=?";
        var rows = await pool.query(query, [obj, id]);
        return rows;

    } catch (error) {
        throw error;
    }

}

module.exports = { getProductos, insertarProducto, eliminarProducto, seleccionarProductoid, modificarProducto }