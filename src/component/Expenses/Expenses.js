import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
const Expenses=(props)=>{
    const [filteredYear,setFilteredYear]=useState('2020');
    const filterChangeHandler=(selectYear)=>{
        setFilteredYear(selectYear);
    }
    const filteredExpenses=props.text.filter(expense=>{
        return expense.date.getFullYear().toString()===filteredYear;
    })
   
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {/* 2 case {filteredExpenses.length===0&&<p>No expense found</p>}
            {filteredExpenses.length>0&& filteredExpenses.map(expense=><ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)} */}
            
            {/*1 case {props.text.map(expense=><ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)} */}
            <ExpensesList items={filteredExpenses} />
            {/* //you can use above method to render multiple items */}
            {/* <ExpenseItem title={props.text[0].title} amount={props.text[0].amount} date={props.text[0].date}/>
            <ExpenseItem title={props.text[1].title} amount={props.text[1].amount} date={props.text[1].date}/>
            <ExpenseItem title={props.text[2].title} amount={props.text[2].amount} date={props.text[2].date}/>
            <ExpenseItem title={props.text[3].title} amount={props.text[3].amount} date={props.text[3].date}/> */}
        </Card>
    );
}

export default  Expenses;