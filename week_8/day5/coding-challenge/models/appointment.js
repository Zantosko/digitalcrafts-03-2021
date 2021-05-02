'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Appointment.belongsTo(models.Doctor, {
        foreignKey: "DoctorId",
        onDelete: "CASCADE"
      });

      Appointment.belongsTo(models.Patient, {
        foreignKey: "PatientId",
        onDelete: "CASCADE"
      });
    }
  };
  Appointment.init({
    Date: DataTypes.DATE,
    DoctorId: DataTypes.INTEGER,
    PatientId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};