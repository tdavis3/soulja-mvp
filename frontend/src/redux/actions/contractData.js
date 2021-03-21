import {GET_DATA, SET_DATA_LOADING} from "./types";


export const loadContractData = (data) => async dispatch => {
    try {
        dispatch({
            type: SET_DATA_LOADING,
            payload: {
                loading: true
            }
        });
        dispatch({
            type: GET_DATA,
            payload: {
                data: data
            }
        });
    } catch (error) {
        console.log(error);
    }
};

export const sendBid = (data) => async dispatch => {
    try {
        dispatch({
            type: SET_DATA_LOADING,
            payload: {
                loading: true
            }
        });
        dispatch({
            type: GET_DATA,
            payload: {
                data: data
            }
        });
    } catch (error) {
        console.log(error);
    }
};
