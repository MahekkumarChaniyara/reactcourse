import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";
const Expenses=(props)=>{
    const [filteredYear,setFilteredYear]=useState('2020');
    const filterChangeHandler=(selectYear)=>{
        setFilteredYear(selectYear);
        console.log(selectYear)
    }
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpenseItem title={props.text[0].title} amount={props.text[0].amount} date={props.text[0].date}/>
            <ExpenseItem title={props.text[1].title} amount={props.text[1].amount} date={props.text[1].date}/>
            <ExpenseItem title={props.text[2].title} amount={props.text[2].amount} date={props.text[2].date}/>
            <ExpenseItem title={props.text[3].title} amount={props.text[3].amount} date={props.text[3].date}/>
        </Card>
    );
}

export default  Expenses;