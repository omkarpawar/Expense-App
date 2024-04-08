const Sequelise = require('sequelize');
const DataTypes = require('sequelize');

const sequelize = require('../util/database');


const Expense = sequelize.define('expenses',{
    exp:{
        type: DataTypes.STRING,
        allowNull:false
    },
    amount:{
        type:DataTypes.STRING,
        allowNull:false,
        
    },
    description:{
        type: DataTypes.STRING,
        allowNull:false,
        
    }

});

module.exports=Expense;