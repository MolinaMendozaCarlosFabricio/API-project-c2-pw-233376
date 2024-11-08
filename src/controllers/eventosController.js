const { eventos } = require('../models');

const createEventos = async (req, res) => {
    try{
        const evento = await eventos.create(req.body);
        res.status(201).json(evento);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

const getAllEventos = async (req, res) => {
    try{
        const alleventos = await eventos.findAll();
        res.status(200).json(alleventos);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

const getEventoById = async (req, res) => {
    const id = req.params.id;

    try{
        const evento = await eventos.findByPk(id);

        if(!evento)
            res.status(404).json({message: "Evento no encontrado"})

        res.status(200).json(evento)
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

const editEvento = async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    try{
        const editThisEvento = await eventos.findByPk(id);

        if(!editThisEvento)
            res.status(404).json({ message: "No se encontró el evento"});

        await editThisEvento.update(data);

        res.status(200).json(editThisEvento);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

const cancelEvento = async (req, res) => {
    const id = req.params.id;
    const estado_evento = "Cancelado";

    try{
        const editThisEvento = await eventos.findByPk(id);

        if(!editThisEvento)
            res.status(404).json({message: "No se encontró el evento"});

        await editThisEvento.update({estado_evento});

        res.status(200).json({message: "Evento cancelado"});
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

const finishEvento = async (req, res) => {
    const id = req.params.id;
    const estado_evento = "Finalizado";

    try{
        const editThisEvento = await eventos.findByPk(id);

        if(!editThisEvento)
            res.status(404).json({message: "No se encontró el evento"});

        await editThisEvento.update({estado_evento});

        res.status(200).json({message: "Evento finalizado"});
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createEventos,
    getAllEventos,
    getEventoById,
    editEvento,
    cancelEvento,
    finishEvento
}