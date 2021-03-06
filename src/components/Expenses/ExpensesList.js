import ExpensesItem from "./ExpensesItem";
import './ExpensesList.css';

const ExpensesList = (props) => {

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback"> No Expenses Found !! </h2>
    }

    return (
        <ul className='expenses-list'>
            {
                props.items.map((element) => {return (
                    <ExpensesItem 
                        key={element.id} 
                        title={element.title} 
                        amount={element.amount} 
                        date={element.date} />);
                    })
            }
        </ul>
    )
}

export default ExpensesList;