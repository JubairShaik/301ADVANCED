const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class User extends Model {}

Todo.init({
  // Model attributes are defined here
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dueDate: {
    type: DataTypes.DATEONLY
    // allowNull defaults to true
  },
  



// the defined model is the class itself
console.log(User === sequelize.models.User); // true


module.exports = Todo