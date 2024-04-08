const express = require('express');
const router = express.Router();
const Expense =require('../models/expense');
const postExpense = require('../controllers/expense');
const getExpense = require('../controllers/expense');
const deleteExpense = require('../controllers/expense');


router.post('/',postExpense.storeExpense);

router.get('/',getExpense.readExpense);

router.delete('/:id',deleteExpense.deleteExpense);




module.exports = router;