const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("paciente", {
        nombre: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        apellido: {
            type: DataTypes.STRING,
        },
        domicilio: {
            type: DataTypes.STRING,
        },
        fechanac: {
            type: DataTypes.DATE,
        },
        dni: {
            type: DataTypes.INTEGER
        },
        obrasocial: {
            type: DataTypes.STRING,
        }
    }, { timestamps: false });
};