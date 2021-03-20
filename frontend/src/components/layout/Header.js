import React from 'react';
import './Header.css';
import ConnectWallet from "./ConnectWallet";

const Header = () => {
    return (
        <div className="Header">
            <a href="/">
                <img src={process.env.PUBLIC_URL+"/sodmglogo.png"} />
            </a>
            <div style={{flexGrow: 1}}/>
            <ConnectWallet/>
        </div>
    );
};

export default Header;
