import React, { useReducer } from 'react';
import axios from 'axios';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = (props) => {
    const initialState = null;
    const [state, dispatch] = useReducer(AlertReducer, initialState);
    return (
        <alertContext.Provider
            value={{
                alert: state,
                setAlert,
            }}
        >
            {props.children}
        </alertContext.Provider>
    );
};

export default AlertState;
