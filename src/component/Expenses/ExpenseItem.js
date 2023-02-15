import ExpenseDate from './ExpenseDate';
//import {useState} from "react";
import Card from '../UI/Card';
import './ExpenseItem.css';
const ExpenseItem=(props)=>{

    // const [title,setTitle]=useState(props.title)
    // const clickHandler=()=>{
    //     setTitle("Clicked!")
    // }

    //onClick={clickHandler}
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}/>
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                    {/* <button >Click Me</button> */}
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;