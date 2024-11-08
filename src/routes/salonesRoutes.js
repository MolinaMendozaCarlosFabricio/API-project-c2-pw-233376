const express = require('express');
const router = express.Router();
const salonesController = require('../controllers/salonesController');

router.post('/create', salonesController.createSalones);

router.get('/get', salonesController.getAllSalones);

router.get('/get_by_id/:id', salonesController.getSalonById);

router.put('/edit/:id', salonesController.editSalon);

router.patch('/down_salon/:id', salonesController.downSalon);

module.exports = router;