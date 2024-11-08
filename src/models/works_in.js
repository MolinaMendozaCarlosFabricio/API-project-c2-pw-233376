module.exports = (sequelize, DataTypes) => {
    const Works_in = sequelize.define('works_in', {
        id_work: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        id_agenda_works: {
            type: DataTypes.INTEGER,
        },
        id_empleado_work: {
            type: DataTypes.INTEGER
        },
    },{ timestamps: false },)

    return Works_in;
}