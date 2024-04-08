

const Expense =require('../models/expense');

const storeExpense = async (req,res)=>{

    try{
        const {exp,amount,description} = req.body;
        const booking  = await Expense.create({exp,amount,description});
        res.status(booking);
    }catch(error){
        console.log(error);
    }

}

const readExpense = async (req,res)=>{
    try{
        const expense = await Expense.findAll();
        res.json({success:true,expense});
    }catch(error){
        console.error(error);
    }
}

const deleteExpense = async (req, res) => {
    try {
        const { id } = req.params;
        const expense = await Expense.findByPk(id);
        if (!expense) {
            return res.status(404).json({ success: false, error: 'expense not found' });
        }
        await expense.destroy();
        res.json({ success: true });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, error: 'Server error' });
    }
}




module.exports={
    storeExpense,
    readExpense,
    deleteExpense
}