const Sequelize = require('sequelize');
const config = require('../config/config.json');
const sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {
        host: config.development.host,
        dialect: config.development.dialect
    }
);

const db = {};
db.ORM = Sequelize;
db.connection = sequelize;

db.salones = require('./salones')(sequelize, Sequelize);
db.inmuebles = require('./inmuebles')(sequelize, Sequelize);
db.personal = require('./personal')(sequelize, Sequelize);
db.eventos = require('./eventos')(sequelize, Sequelize);
db.agendas = require('./agendas')(sequelize, Sequelize);

db.works_in = require('./works_in')(sequelize, Sequelize);
db.belongs_to = require('./belongs_to')(sequelize, Sequelize);

db.salones.hasMany(db.inmuebles, {
    foreignKey: "id_salon_asignado",
    as: "inmuebles_that_had"
});
db.inmuebles.belongsTo(db.salones, {
    foreignKey: "id_salon_asignado",
    as: "Salon_where_is"
});

db.salones.hasMany(db.personal, {
    foreignKey: "id_salon_pertenece",
    as: "Personal_that_had"
});
db.personal.belongsTo(db.salones,{
    foreignKey: "id_salon_pertenece",
    as: "Salon_where_works"
});

db.salones.hasMany(db.agendas, {
    foreignKey: "id_salon",
    as: "Agenda_where_is_reserved"
})
db.agendas.belongsTo(db.salones, {
    foreignKey: "id_salon",
    as: "Salon_where_it_will_be"
})

db.eventos.hasOne(db.agendas, {
    foreignKey: "id_evento",
    as: "Agenda_where_it_is"
})
db.agendas.belongsTo(db.eventos, {
    foreignKey: "Evento_asigned",
    as: "Evento_that_has"
})

db.agendas.hasMany(db.works_in, {
    foreignKey: "id_agenda_works",
    as: "relation_whit_empleados_agendas",
})
db.works_in.belongsTo(db.agendas, {
    foreignKey: "id_agenda_works",
    as: "link_to_agendas_empleados",
})

db.personal.hasMany(db.works_in, {
    foreignKey: "id_empleado_work",
    as: "relation_whit_agendas_empleados",
})
db.works_in.belongsTo(db.personal, {
    foreignKey: "id_empleado_work",
    as: "link_to_empleados_agendas",
})

db.agendas.hasMany(db.belongs_to, {
    foreignKey: "id_agenda_belong",
    as: "relation_whit_inmuebles_agendas",
})
db.belongs_to.belongsTo(db.agendas, {
    foreignKey: "id_agenda_belong",
    as: "link_to_agendas_inmuebles",
})

db.inmuebles.hasMany(db.belongs_to, {
    foreignKey: "id_inmueble_belong",
    as: "relation_whit_agendas_inmuebles"
})
db.belongs_to.belongsTo(db.inmuebles, {
    foreignKey: "id_inmueble_belong",
    as: "link_to_inmuebles_agendas"
})

module.exports = db;