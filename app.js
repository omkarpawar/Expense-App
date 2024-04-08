const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expenseRoute = require('./router/expenses');
const sequelize = require('./models/expense');


app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/expenses',expenseRoute);


sequelize.sync().then(()=>{
    app.listen(3000);
}).catch(err=>console.log(err));

