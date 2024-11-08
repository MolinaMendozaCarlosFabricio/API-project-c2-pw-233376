const express = require('express');
const router = express.Router();
const eventosController = require('../controllers/eventosController');

router.post('/create', eventosController.createEventos);

router.get('/get', eventosController.getAllEventos);

router.get('/get_by_id/:id', eventosController.getEventoById);

router.put('/edit/:id', eventosController.editEvento);

router.patch('/cancel/:id', eventosController.cancelEvento);

router.patch('/finish/:id', eventosController.finishEvento);

module.exports = router;