module.exports = (sequelize, DataTypes) => {
    const Eventos = sequelize.define('eventos',{
        id_evento: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre_reservador: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        apellido_reservador: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        correo_reservador: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telefono_reservador: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        giro_evento: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        estado_evento: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cantidad_invitados_evento: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        costo_evento: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
    },{ timestamps: false },);

    return Eventos;
}