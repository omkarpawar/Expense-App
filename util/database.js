const Sequelise = require('sequelize');


const sequelize = new Sequelise('expenses','root','omkar',{
    dialect : 'mysql',
    host : 'localhost'

});

module.exports=sequelize;