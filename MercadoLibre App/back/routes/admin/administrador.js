var express = require('express');
var router = express.Router();
var productosModel = require('../../models/productosModels');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

/* GET administrador. */
router.get('/', async function (req, res, next) {

    var productos = await productosModel.getProductos();

    productos = productos.map(productos => {
        if (productos.img_id) {
            const imagen = cloudinary.image(productos.img_id, {
                width: 75,
                height: 75,
                crop: 'fill'
            });
            return {
                ...productos,
                imagen
            }
        } else {
            return {
                ...productos,
                imagen: ''
            }
        }
    });

    res.render('admin/administrador',
        //carpeta views/admin/administrador.hbs
        {
            layout: 'admin/layout', //carpeta views/admin/layout.hbs
            nombre: req.session.nombre,
            productos
        });
});

// Boton Agregar Nuevos Productos

router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', //agregar.hbs
        {
            layout: 'admin/layout'
        })
})


//Guardar Nuevo Producto

router.post('/agregar', async (req, res, next) => {
    try {
        var img_id = '';
        if (req.files && Object.keys(req.files).length > 0) {
            imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
        }

        if (req.body.producto != "" && req.body.cantidad != "" && req.body.precio != "") {
            await productosModel.insertarProducto({
                ...req.body,
                img_id
            });
            res.redirect('/admin/administrador')
        } else {
            res.render('sadmin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: 'Todos los campos son requeridos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se han cargado los datos, intente mas tarde'

        })

    }
})

//Eliminar Producto
router.get('/eliminar/:id', async (req, res, next) => {

    var id = req.params.id;
    let productos = await productosModel.seleccionarProductoid(id);
    if (productos.img_id) {
        await (destroy(productos.img_id));
    }
    await productosModel.eliminarProducto(id);
    res.redirect('/admin/administrador');
})

//Llamar Modificar Producto hbs

router.get('/modificar/:id', async (req, res, next) => {

    var id = req.params.id;
    var modificar = await productosModel.seleccionarProductoid(id);

    res.render('admin/modificar', //modificar.hbs
        {
            layout: 'admin/layout',
            modificar
        })

})

//Realizar Modificacion del Producto

router.post('/modificar', async (req, res, next) => {
    try {
        var img_id = req.body.img_original;
        let borrar_img_vieja = false;

        if (req.body.img_delete === "1") {
            img_id = null;
            borrar_img_vieja = true;

        } else {
            if (req.files && Object.keys(req.files).length > 0) {
                imagen = req.files.imagen;
                img_id = (await uploader(imagen.tempFilePath)).public_id;
                borrar_img_vieja = true;
            }
        }
        if (borrar_img_vieja && req.body.img_original) {
            await (destroy(req.body.img_original));
        }

        var obj = {
            producto: req.body.producto,
            cantidad: req.body.cantidad,
            precio: req.body.precio,
            img_id
        }

        await productosModel.modificarProducto(obj, req.body.id);
        res.redirect('/admin/administrador');

    } catch (error) {
        console.log(error)
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se modifico el producto'

        })

    }
})




module.exports = router;