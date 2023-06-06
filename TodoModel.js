const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Todo extends Model {}

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
  completed: {
    type: DataTypes.DATEONLY
    // allowNull defaults to true
  },
},
{
    sequelize
}
);



module.exports = Todo ;


Todo.sync()