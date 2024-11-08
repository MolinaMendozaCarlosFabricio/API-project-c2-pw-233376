module.exports = (sequelize, DataTypes) =>{
    const Belongs_to = sequelize.define('belongs_to', {
        id_belong: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        id_agenda_belong: {
            type: DataTypes.INTEGER,
        },
        id_inmueble_belong: {
            type: DataTypes.INTEGER,
        },
    },{ timestamps: false },)

    return Belongs_to;
}