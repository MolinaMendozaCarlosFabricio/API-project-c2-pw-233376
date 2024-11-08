const express = require('express');
const router = express.Router();
const personalController = require('../controllers/personalController');

router.post('/create', personalController.createPersonal);

router.get('/get', personalController.getAllPersonal);

router.get('/get_by_id/:id', personalController.getPersonalById);

router.put('/edit/:id', personalController.editPersonal);

router.patch('/down_personal/:id', personalController.downPersonal);

router.patch('/occupy/:id', personalController.occupyPersonal);

router.patch('/desoccupy/:id', personalController.desoccupyPersonal);

module.exports = router;