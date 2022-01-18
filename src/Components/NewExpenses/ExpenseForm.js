import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [getTitle, setTitle] = useState('');
    const [getAmount, setAmount] = useState('');
    const [getDate, setDate] = useState('');

    // alterntive
    // const [userInput, setuserInput] = useState({
    //     getTitle: '',
    //     getAmount: '',
    //     getDate: ''
    // })

    function titleChangeHandler (events) {
        // console.log(events.target.value)
        setTitle(events.target.value);

        // setuserInput({
        //     ...userInput,
        //     getTitle: events.target.value
        // })
        // Using the above approach may lead to depending on an outdated or incorrect state snapshot

        // setuserInput((prevState) => {
        //     return {...prevState, getTitle: events.target.value};
        // })
    }

    function amountChangeHandler (events) {
        // console.log(events.target.value)
        setAmount(events.target.value);

        // setuserInput({
        //     ...userInput,
        //     getAmount: events.target.value
        // })
        // Using the above approach may lead to depending on an outdated or incorrect state snapshot
    }

    function dateChangeHandler (events) {
        // console.log(events.target.value)
        setDate(events.target.value);

        // setuserInput({
        //     ...userInput,
        //     getDate: events.target.value
        // })
        // Using the above approach may lead to depending on an outdated or incorrect state snapshot

    }

    function submitHandler(events) {
        events.preventDefault()

        const expensedata = {
            title: getTitle,
            amount: +getAmount,
            date: new Date(getDate)
        }

        // console.log(expensedata)
        props.onSaveExpenseData(expensedata)
        setTitle('')
        setAmount('')
        setDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={getTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={getAmount} onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' value={getDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;