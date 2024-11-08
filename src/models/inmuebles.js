const salones = require("./salones");

module.exports = (sequelize, DataTypes) => {
    const Inmuebles = sequelize.define('inmuebles', {
        id_inmueble:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre_inmueble:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        estado_inmueble:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        id_salon_asignado: {
            type: DataTypes.INTEGER
        }
    },{ timestamps: false },);

    return Inmuebles;
};