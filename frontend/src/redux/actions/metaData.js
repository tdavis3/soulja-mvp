import {CONNECT_WALLET, SET_CONTRACT_LOADING, INITIALIZE_CONTRACT, RESET_DAPP} from "./types";
import {ethers} from "ethers";
// import contractAddress from "../../contracts/contract-address.json";
// import CArtifact from "../../contracts/CArtifact.json";
let contractAddress, CArtifact = null;  // Placeholder for now


export const connectWallet = () => async dispatch => {
    try {
        const [userAddress] = await window.ethereum.request({method: 'eth_requestAccounts'});

        // We reinitialize it whenever the user changes their account.
        window.ethereum.on("accountsChanged", ([newAddress]) => {
            console.log("Account change");
            // `accountsChanged` event can be triggered with an undefined newAddress.
            // This happens when the user removes the Dapp from the "Connected
            // list of sites allowed access to your addresses" (Metamask > Settings > Connections)
            // To avoid errors, we reset the dapp state
            if (newAddress === undefined) {
                return resetDapp();
            }
            connectWallet();
        });

        // We reset the dapp state if the network is changed
        window.ethereum.on("chainChanged", (_chainId) => {
            console.log("Network change");
            dispatch({type: RESET_DAPP});
        });

        dispatch({
            type: CONNECT_WALLET,
            payload: {
                userAddress: userAddress
            }
        });
    } catch (error) {
        console.log(error);
    }
};

export const initializeContract = () => async dispatch => {
    try {
        dispatch({
            type: SET_CONTRACT_LOADING,
            payload: {
                loading: true
            }
        });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(
            contractAddress.CONTRACTNAMEHERE,  // TODO: Change
            CArtifact.abi,
            provider.getSigner(0)
        );
        dispatch({
            type: INITIALIZE_CONTRACT,
            payload: {
                provider: provider,
                contract: contract
            }
        });
    } catch (error) {
        console.log(error);
    }
};

export const resetDapp = () => async dispatch => {
    try {
        dispatch({type: RESET_DAPP});
    } catch (error) {
        console.log(error);
    }
};
