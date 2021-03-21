import React, {useEffect} from 'react';
// import './Landing.css';
import AlbumDashboard from "./AlbumDashboard";
import SignInfo from "./SignInfo";
import {connect} from 'react-redux';
import {initializeContract} from "../redux/actions/metaData";


const Landing = ({initializeContract, metaData}) => {

    useEffect(() => {
        if (!metaData.initialized) {
            initializeContract();
        }
    }, [metaData]);

    return (
        <div>
            <AlbumDashboard/>
            <hr/>
            <SignInfo/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        metaData: state.metaData
    }
}

export default connect(mapStateToProps, {initializeContract})(Landing);
