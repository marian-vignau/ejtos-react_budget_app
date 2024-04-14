import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { IoIosAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = (name) => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><IoIosAddCircle size='2.2em' color="green" onClick={event=> increaseAllocation(props.name)}></IoIosAddCircle></td>     
        <td><IoIosRemoveCircle size='2.2em' color="red" onClick={event=> decreaseAllocation(props.name)}></IoIosRemoveCircle></td>        
        <td><IoIosCloseCircle size='1.5em' color="black" onClick={event => handleDeleteExpense(props.name)}></IoIosCloseCircle></td>   
        </tr>
    );
};

export default ExpenseItem;
