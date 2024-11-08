module.exports = (sequelize, DataTypes) => {
    const Agendas = sequelize.define('agendas', {
        id_agenda: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        fecha_hora_evento: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        duracion_horas_evento: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fecha_reserva: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        id_evento: {
            type: DataTypes.INTEGER
        },
        id_salon: {
            type: DataTypes.INTEGER
        }
    },{ timestamps: false },);

    return Agendas;
}