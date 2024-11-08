const express = require('express');
const router = express.Router();
const inmueblesController = require('../controllers/inmueblesController');

router.post('/create', inmueblesController.createInmuebles);

router.get('/get', inmueblesController.getAllInmuebles);

router.get('/get_by_id/:id', inmueblesController.getInmuebleById);

router.put('/edit/:id', inmueblesController.editInmueble);

router.patch('/down_inmueble/:id', inmueblesController.downInmueble);

router.patch('/occupy/:id', inmueblesController.occupyInmueble);

router.patch('/desoccupy/:id', inmueblesController.desoccupyInmueble);

module.exports = router;