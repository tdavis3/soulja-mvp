import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3Modal from 'web3modal';
import {CONNECT_SIGNER_AND_PROVIDER, SET_CONTRACT_LOADING, INITIALIZE_CONTRACT, RESET_DAPP, INITIALIZE_WEBTHREE_MODAL} from "./types";
import {ethers} from "ethers";

// import contractAddress from "../../contracts/contract-address.json";
// import CArtifact from "../../contracts/CArtifact.json";
let contractAddress, CArtifact = null;  // Placeholder for now

const clearWeb3ModalCache = (web3Modal) => {
  web3Modal.clearCachedProvider();
  localStorage.removeItem('walletconnect');
}

const fetchPrettyName = async (currentUserAddress, provider) => {
  return currentUserAddress
  ? await provider.lookupAddress(currentUserAddress) || currentUserAddress
  : '0x0'
}

export const connectWallet = (web3Modal) => async dispatch => {
    try {
        web3Modal.connect();

        web3Modal.on('connect', async (web3Provider) => {
          //const userAddress = (await web3.eth.getAccounts())[0];
          const provider = new ethers.providers.Web3Provider(web3Provider);
          const signer = provider.getSigner(0);
          const userAddress = await signer.getAddress();
          const prettyUserAddress = await fetchPrettyName(userAddress, provider)
          dispatch({
              type: CONNECT_SIGNER_AND_PROVIDER,
              payload: {
                  provider,
                  signer,
                  userAddress,
                  prettyUserAddress
              }
          });

          web3Provider.on('disconnect', async (error) => {
            clearWeb3ModalCache(web3Modal)
            dispatch({type: RESET_DAPP});
          });
          // TODO We reset the dapp state if the network is changed
          //dispatch({type: RESET_DAPP});
          web3Provider.on('accountsChanged', async (accounts) => {
            const newAddress = accounts[0];
            console.log("Account change", newAddress);
            // `accountsChanged` event can be triggered with an undefined newAddress.
            // This happens when the user removes the Dapp from the "Connected
            // list of sites allowed access to your addresses" (Metamask > Settings > Connections)
            // To avoid errors, we reset the dapp state
            if (newAddress === undefined) {
                return resetDapp();
            }
            const newPrettyUserAddress = await fetchPrettyName(userAddress, provider)
            dispatch({
                type: CONNECT_SIGNER_AND_PROVIDER,
                payload: {
                    provider,
                    signer,
                    userAddress: newAddress,
                    prettyUserAddress: newPrettyUserAddress
                }
            });
          });
        });
    } catch (error) {
        console.log(error);
    }
};

export const initializeContract = (signer) => async dispatch => {
    try {
        dispatch({
            type: SET_CONTRACT_LOADING,
            payload: {
                loading: true
            }
        });
        const contract = new ethers.Contract(
            contractAddress.CONTRACTNAMEHERE,  // TODO: Change
            CArtifact.abi,
            signer
        );
        dispatch({
            type: INITIALIZE_CONTRACT,
            payload: {
                contract: contract
            }
        });
    } catch (error) {
        console.log(error);
    }
};

export const initializeWeb3Modal = () => async dispatch => {
  try {
      const web3Modal = new Web3Modal({
        network: 'mainnet',
        cacheProvider: true,
        providerOptions: {
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              //infuraId: '52a383e497764cdc8b6ebad66e8d8c34',
              rpc: {1: "http://localhost:7545", 4: "https://eth-rinkeby.alchemyapi.io/v2/Ull-HRoY0D3yB_pSBBiigDHA4shl7DJr"},
            },
          },
        },
      });
      dispatch({
          type: INITIALIZE_WEBTHREE_MODAL,
          payload: {
              web3Modal: web3Modal
          }
      });
  } catch (error) {
      console.log(error);
  }
}

export const resetDapp = () => async dispatch => {
    try {
        dispatch({type: RESET_DAPP});
    } catch (error) {
        console.log(error);
    }
};
