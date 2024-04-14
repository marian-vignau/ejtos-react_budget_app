import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = (props) => {
    const { dispatch, currency } = useContext(AppContext);
    let currencyText = [];
    currencyText['$'] = "$ (Dollar)";
    currencyText['€'] = "€ (Euro)";
    currencyText['£'] = "£ (Pound)";
    currencyText['¥'] = "¥ (Yuan)";

    const onSelect = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    };

    return(
        <div className='alert alert-success'>
            <span>Currency: </span>
            <select value={currency} onChange={onSelect}>
                <option className='alert alert-success' value="$">{currencyText['$']}</option>
                <option className='alert alert-success' value="€">{currencyText['€']}</option>
                <option className='alert alert-success' value="£">{currencyText['£']}</option>
                <option className='alert alert-success' value="¥">{currencyText['¥']}</option>
            </select>
        </div>
    );
};

export default CurrencySelector;
