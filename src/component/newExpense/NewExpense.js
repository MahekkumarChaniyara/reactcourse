import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
function NewExpense(props){
    const[isEditing,setIsEditting]=useState()
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString(),
        };
        //console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditting(false);
    }
    const startEditingHandler=()=>{
        setIsEditting(true);
    }
    const stopEditingHandler=()=>{
        setIsEditting(false);
    }
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler}/>}
        </div>
    )
}

export default NewExpense; 