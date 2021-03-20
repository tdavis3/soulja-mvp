import React from "react";
import {Button} from 'rebass';
// import Loading from "../Loading";
// import NetworkErrorMessage from "../errors/NetworkErrorMessage";
import './ConnectWallet.css';
import {connect} from "react-redux";
import {connectWallet} from "../../redux/actions/metaData";


const ConnectWallet = ({connectWallet, metaData}) => {
    return (
        <div className="ConnectWallet">
            <div className="connect-wallet">
                {/*<p>Please connect your wallet to the Rinkeby Test network.</p>*/}
                {/*<Button*/}
                {/*    style={{margin: '1.5vmin'}}*/}
                {/*    onClick={connectWallet}*/}
                {/*>*/}
                {/*    Connect*/}
                {/*</Button>*/}
                <Button className="button-connect" onClick={connectWallet} disabled="true">
                    {metaData.userAddress ? "Connected: " + metaData.userAddress : "Connect Wallet"}
                </Button>
            </div>
            {/* Metamask network should be set to Localhost:8545. */}
            {/*{networkError && (*/}
            {/*    <NetworkErrorMessage*/}
            {/*        message={networkError}*/}
            {/*        dismiss={dismiss}*/}
            {/*    />*/}
            {/*)}*/}
            {/*{loading && (<Loading/>)}*/}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        metaData: state.metaData
    }
}

export default connect(mapStateToProps, {connectWallet})(ConnectWallet);
