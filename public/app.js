document.addEventListener('DOMContentLoaded',()=>{
    const form = document.getElementById('expenseForm');
    const expenseList = document.getElementById('expenseList');

    form.addEventListener('submit',async (event)=>{
        event.preventDefault();

        const formData = new FormData(form);
        const exp = formData.get('exp');
        const amount = formData.get('amt');
        const description = formData.get('desc');

        displayExpense({exp,amount,description});

        try{
            
            await axios.post('/expenses',{exp,amount,description});

        }catch(error){
            console.log(error);
        }
    })

    async function fetchExpense(){
        try{
            const response = await axios.get('/expenses');
            const expenses = response.data.expense;

            
            if (expenses && expenses.length > 0) {
                expenses.forEach(expense => displayExpense(expense));
            } else {
                console.log("No Expense found");
            }    

        }catch(error){
            console.log(error);
        }
    }





    
    function displayExpense(expense){
        const expenseItem = document.createElement('div');
        expenseItem.textContent=`${expense.exp},${expense.amount},${expense.description}`;
        expenseList.appendChild(expenseItem);
        expenseItem.style.border='2px solid black';
        expenseItem.style.padding='20px'
        expenseItem.style.margin='20px'


        const deleteBtn=document.createElement('button');
        deleteBtn.setAttribute('data-id', expense.id);
        
        deleteBtn.appendChild(document.createTextNode('Delete'));
        expenseItem.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', async () => {
            try {
                const response = await axios.delete(`/expenses/${expense.id}`);
                if (response.data.success) {                  
                    expenseItem.remove();
                    deleteBtn.remove();
                }
            } catch (error) {
                console.error('Error:', error.message);
            }
        });


        const editBtn = document.createElement('button');
        editBtn.setAttribute('data-id', expense.id);
        
        editBtn.appendChild(document.createTextNode('Edit'));
        expenseItem.appendChild(editBtn);
        editBtn.addEventListener('click',async () => {
            try {
                const response = await axios.delete(`/expenses/${expense.id}`);
                if (response.data.success) {                  
                    expenseItem.remove();
                    deleteBtn.remove();
                }
            } catch (error) {
                console.error('Error:', error.message);
            }

            document.getElementById('exp').value = expense.exp;
            document.getElementById('amt').value = expense.amount;
            document.getElementById('desc').value = expense.description;
        });
    }

    fetchExpense();
})