const {salones} = require('../models');

const createSalones = async (req, res) => {
    try{
        const salon = await salones.create(req.body);
        res.status(201).json(salon);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

const getAllSalones = async (req, res) => {
    try{
        const allSalones = await salones.findAll();
        res.status(200).json(allSalones);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

const getSalonById = async (req, res) => {
    const id = req.params.id;

    try{
        const salon = await salones.findByPk(id);

        if(!salon)
            res.status(404).json({message: "Salón no encontrado"})

        res.status(200).json(salon)
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

const editSalon = async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    try{
        const editThisSalon = await salones.findByPk(id);

        if(!editThisSalon)
            res.status(404).json({ message: "No se encontró el salón"});

        await editThisSalon.update(data);

        res.status(200).json(editThisSalon);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

const downSalon = async (req, res) => {
    const id = req.params.id;
    const estado_salon = "Dado de baja";

    try{
        const editThisSalon = await salones.findByPk(id);

        if(!editThisSalon)
            res.status(404).json({message: "No se encontró el salón"});

        await editThisSalon.update({estado_salon});

        res.status(200).json({message: "Salón editado"});
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createSalones,
    getAllSalones,
    getSalonById,
    editSalon,
    downSalon
}