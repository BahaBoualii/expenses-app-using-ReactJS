import {useState} from 'react';

const ExpenseForm = (props) => {
    
    const [enterdTitle, setEnteredTitle] = useState('');
    const [enterdAmount, setEnteredAmount] = useState('');
    const [enterdDate, setEnteredDate] = useState('');

    
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        console.log(enterdTitle);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        console.log(enterdAmount)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        console.log(enterdDate)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enterdTitle,
            amount: +enterdAmount,
            date: new Date(enterdDate)
        }

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label> &nbsp;
                    <input type="text" value={enterdTitle} onChange={titleChangeHandler}/>
                </div>
                <br />
                <div className="new-expense__control">
                    <label>Amount</label> &nbsp;
                    <input type="number" min="0.01" step="0.01" value={enterdAmount} onChange={amountChangeHandler}/>
                </div>
                <br />
                <div className="new-expense__control">
                    <label>Date</label> &nbsp;
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enterdDate} onChange={dateChangeHandler}/>
                </div>
                <br /> 
            </div>
            <div class="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;