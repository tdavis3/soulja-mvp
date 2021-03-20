import {CONNECT_WALLET, SET_CONTRACT_LOADING, INITIALIZE_CONTRACT, RESET_DAPP} from "../actions/types";


const initialState = {
    loading: false,
    initialized: false,
    provider: undefined,
    contract: undefined,
    userAddress: undefined
};


export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CONTRACT_LOADING: {
            const {loading} = action.payload;
            return {
                ...state,
                loading: loading
            };
        }
        case CONNECT_WALLET: {
            const {userAddress} = action.payload;
            return {
                ...state,
                userAddress: userAddress
            };
        }
        case INITIALIZE_CONTRACT: {
            const {provider, contract} = action.payload;
            return {
                ...state,
                initialized: true,
                provider: provider,
                contract: contract,
                loading: false
            };
        }
        case RESET_DAPP: {
            return initialState;
        }
        default:
            return state;
    }
}
