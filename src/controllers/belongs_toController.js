const {belongs_to} = require('../models');

const createRelation = async (req, res) => {
    try{
        const relation = await belongs_to.create(req.body);
        res.status(201).json(relation);
    }catch(error){
        res.status(500).json({error : error.message});
    }
}

const deleteRelation = async (req, res) => {
    const id = req.params.id;

    try{
        await belongs_to.destroy({where : {id_belong : id}});
    }catch(error){
        res.status(500).json({error : error.message});
    }
}