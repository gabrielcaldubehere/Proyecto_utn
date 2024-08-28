var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModels');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('admin/login', //carpeta views/admin/login.hbs
        {
            layout: 'admin/layout' //carpeta views/admin/layout.hbs
        });
});

/*Destruye sesion */
router.get('/logout', function (req, res, next) {
    req.session.destroy(); //destruye sesion
    res.render('admin/login', //carpeta views/admin/login.hbs
        {
            layout: 'admin/layout' //carpeta views/admin/layout.hbs
        });
});



router.post('/', async (req, res, next) => {
    try {
        var usuario = req.body.usuario; /*capturando el usuario*/
        var password = req.body.password;

        var data = await usuariosModel.getUserAndPass(usuario, password);


        if (data != undefined) {

            req.session.id_usuario = data.id;
            req.session.nombre = data.usuario;

            res.redirect('/admin/administrador');
        } else {
            res.render('admin/login', {
                layout: 'admin/layout',
                error: true
            })
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;
