import './ExpensesItem.css';
import Expensedate from './ExpenseDate';
import Card from '../UI/Card';

function ExpensesItem(props) {

    return (
    <Card className='expense-item'>
        <Expensedate date={props.date} />
        <div className='expense-item__description'>
            <h2>
                {props.title}
            </h2>
            <div className='expense-item__price'>
                {props.amount}
            </div>
        </div>
    </Card> ); 
}

export default ExpensesItem;