import React, {useState} from 'react';
import {Box, Flex, Image} from "rebass";
import {
    Label,
    Input,
    Select,
    Textarea
} from '@rebass/forms'
import {FormButton} from "../Button";
import {connect} from "react-redux";
import {connectWallet} from "../../redux/actions/metaData";
import {BoldText, SmallHeading} from '../Text'

const crankThatPicture = <Image
    src={process.env.PUBLIC_URL + "/crankthat.jpg"}
    sx={{
        width: '100%',
        borderRadius: 16,
    }}
/>;

const RequestForm = ({connectWallet, metaData}) => {
    return (
        <Box
            as='form'
            onSubmit={e => e.preventDefault()}
            py={3}>
            <SmallHeading marginBottom={20}>Request Signature</SmallHeading>
            <Flex mx={-2} mb={3}>
                <Box width={1 / 3} px={2}>
                    {crankThatPicture}
                </Box>
                <Box width={2 / 3} px={2}>
                        <Label htmlFor='amount'><BoldText>Personal Message</BoldText></Label>
                        <Textarea
                            id='amount'
                            name='amount'
                            value=''
                            width={"100%"}
                            height={80}
                            marginTop={20}
                            type="number" //if we do number then user cant enter decimals :(
                        />
                </Box>
            </Flex>
            <Flex mx={-2} mb={3}>
                <Box width={1} px={2}>

                </Box>
            </Flex>
            <FormButton onClick={!metaData.userAddress && (() => {
                connectWallet(metaData.web3Modal)
            })}>
                {metaData.userAddress ? "REQUEST" : "CONNECT WALLET"}
            </FormButton>
        </Box>
    )
}

const mapStateToProps = (state) => {
    return {
        metaData: state.metaData
    }
}

export default connect(mapStateToProps, {connectWallet})(RequestForm);
