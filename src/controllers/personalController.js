const { personal } = require('../models');

const createPersonal = async (req, res) => {
    try{
        const empleado = await personal.create(req.body);
        res.status(201).json(empleado);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

const getAllPersonal = async (req, res) => {
    try{
        const allPersonal = await personal.findAll();
        res.status(200).json(allPersonal);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

const getPersonalById = async (req, res) => {
    const id = req.params.id;

    try{
        const empleado = await personal.findByPk(id);

        if(!empleado)
            res.status(404).json({message: "Empleado no encontrado"})

        res.status(200).json(empleado)
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

const editPersonal = async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    try{
        const editThisPersonal = await personal.findByPk(id);

        if(!editThisPersonal)
            res.status(404).json({ message: "No se encontró el personal"});

        await editThisPersonal.update(data);

        res.status(200).json(editThisPersonal);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

const downPersonal = async (req, res) => {
    const id = req.params.id;
    const estado_personal = "Dado de baja";

    try{
        const editThisPersonal = await personal.findByPk(id);

        if(!editThisPersonal)
            res.status(404).json({message: "No se encontró el personal"});

        await editThisPersonal.update({estado_personal});

        res.status(200).json({message: "Personal editado"});
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

const occupyPersonal = async (req, res) => {
    const id = req.params.id;
    const estado_personal = "Ocupado";

    try{
        const empleado = await personal.findByPk(id);

        if(!empleado)
            res.status(404).json({message: "No se encontró el empleado"});

        await empleado.update({estado_personal});

        res.status(200).json({message: "Empleado ocupado"})
    }catch(error){
        res.status(500).json({error : error.message})
    }
}

const desoccupyPersonal = async (req, res) => {
    const id = req.params.id;
    const estado_personal = "Activo";

    try{
        const empleado = await personal.findByPk(id);

        if(!empleado)
            res.status(404).json({message: "No se encontró el empleado"});

        await empleado.update({estado_personal});

        res.status(200).json({message: "Empleado desocupado"})
    }catch(error){
        res.status(500).json({error : error.message})
    }
}

module.exports = {
    createPersonal,
    getAllPersonal,
    getPersonalById,
    editPersonal,
    downPersonal,
    occupyPersonal,
    desoccupyPersonal
}