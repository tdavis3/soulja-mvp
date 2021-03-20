import {GET_DATA, SET_DATA_LOADING} from "../actions/types";


const initialState = {
    loading: false,
    data: undefined
};


export default function (state = initialState, action) {
    switch (action.type) {
        case SET_DATA_LOADING: {
            const {loading} = action.payload;
            return {
                ...state,
                loading: loading
            };
        }
        case GET_DATA: {
            const {data} = action.payload;
            return {
                ...state,
                data: data,
                loading: false
            };
        }
        default:
            return state;
    }
}
