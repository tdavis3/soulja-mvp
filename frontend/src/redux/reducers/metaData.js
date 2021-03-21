import {CONNECT_SIGNER_AND_PROVIDER, SET_CONTRACT_LOADING, INITIALIZE_CONTRACT, RESET_DAPP, INITIALIZE_WEBTHREE_MODAL} from "../actions/types";


const initialState = {
    loading: false,
    initialized: false,
    provider: undefined,
    signer: null,
    web3Modal: undefined,
    crankContract: undefined,
    registrarContract: undefined,
    nftContract: undefined,
    userAddress: undefined,
    prettyUserAddress: "0x0"
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
        case CONNECT_SIGNER_AND_PROVIDER: {
            const {provider, userAddress, prettyUserAddress, signer} = action.payload;
            return {
                ...state,
                userAddress,
                prettyUserAddress,
                provider,
                signer
            };
        }
        case INITIALIZE_CONTRACT: {
            const {crankContract, nftContract, registrarContract} = action.payload;
            return {
                ...state,
                initialized: true,
                crankContract: crankContract,
                nftContract: nftContract,
                registrarContract: registrarContract,
                loading: false
            };
        }
        case INITIALIZE_WEBTHREE_MODAL: {
            const {web3Modal} = action.payload;
            return {
              ...state,
              web3Modal
            }
        }
        case RESET_DAPP: {
            return initialState;
        }
        default:
            return state;
    }
}
