module.exports = (sequelize, DataTypes) => {
    const Personal = sequelize.define('personal', {
        id_personal:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre_personal:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        apellido_personal:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone_personal:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        sueldo_personal:{
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        estado_personal:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        id_salon_pertenece: {
            type: DataTypes.INTEGER
        },
    },{ timestamps: false },);

    return Personal;
}