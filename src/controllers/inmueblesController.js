const {inmuebles} = require('../models');

const createInmuebles = async (req, res) => {
    try{
        const inmueble = await inmuebles.create(req.body);
        res.status(201).json(inmueble);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

const getAllInmuebles = async (req, res) => {
    try{
        const allInmuebles = await inmuebles.findAll();
        res.status(200).json(allInmuebles);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

const getInmuebleById = async (req, res) => {
    const id = req.params.id;

    try{
        const inmueble = await inmuebles.findByPk(id);

        if(!inmueble)
            res.status(404).json({message: "Inmueble no encontrado"})

        res.status(200).json(inmueble)
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

const editInmueble = async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    try{
        const editThisInmueble = await inmuebles.findByPk(id);

        if(!editThisInmueble)
            res.status(404).json({ message: "No se encontró el inmueble"});

        await editThisInmueble.update(data);

        res.status(200).json(editThisInmueble);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

const downInmueble = async (req, res) => {
    const id = req.params.id;
    const estado_inmueble = "Dado de baja";

    try{
        const editThisInmueble = await inmuebles.findByPk(id);

        if(!editThisInmueble)
            res.status(404).json({message: "No se encontró el inmueble"});

        await editThisInmueble.update({estado_inmueble});

        res.status(200).json({message: "Inmueble editado"});
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

const occupyInmueble = async (req, res) => {
    const id = req.body.id;
    const estado_inmueble = "Ocupado"

    try{
        const inmueble = await inmuebles.findByPk(id);

        if(!inmueble)
            res.status(404).json({message:"No se encontró el inmueble"});

        await inmueble.update({estado_inmueble});

        res.status(200).json({message : "Inmueble ocupado"})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

const desoccupyInmueble = async (req, res) => {
    const id = req.body.id;
    const estado_inmueble = "Activo"

    try{
        const inmueble = await inmuebles.findByPk(id);

        if(!inmueble)
            res.status(404).json({message:"No se encontró el inmueble"});

        await inmueble.update({estado_inmueble});

        res.status(200).json({message : "Inmueble desocupado"})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    createInmuebles,
    getAllInmuebles,
    getInmuebleById,
    editInmueble,
    downInmueble,
    occupyInmueble,
    desoccupyInmueble
}