const inmuebles = require("./inmuebles");

module.exports = (sequelize, DataTypes) => {
    const Salones = sequelize.define('salones',{
        id_salon: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre_salon: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        no_domicilio_salon: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        calle_salon: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        colonia_salon: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ciudad_salon: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        codigo_postal_salon: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        estado_salon: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{ timestamps: false },);

    return Salones;
};