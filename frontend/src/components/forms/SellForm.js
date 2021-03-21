import React, {useState} from 'react';
import {Box, Flex, Image} from "rebass";
import {
    Label,
    Input,
    Select,
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

const SellForm = ({connectWallet, metaData}) => {

    let unitPrice = 1000;

    const [amountToSell, setAmountToSell] = useState(0);

    const handleChange = e => {
        setAmountToSell(e.target.value);
    };

    return (
        <Box
            as='form'
            onSubmit={e => e.preventDefault()}
            py={3}>
            <SmallHeading marginBottom={20}>Sell</SmallHeading>
            <Flex mx={-2} mb={3}>
                <Box width={1 / 3} px={2}>

                    {crankThatPicture}
                </Box>
                <Box width={2 / 3} px={2}>
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Label htmlFor='amount'><BoldText>$CRANK</BoldText></Label>
                        <Input
                            id='amount'
                            name='amount'
                            value={amountToSell}
                            width={100}
                            type="number" //if we do number then user cant enter decimals :(
                            textAlign="right"
                            onChange={handleChange}
                        />
                    </Box>
                    {
                        0 > 1 && //TODO: only show this part if the user is buying > 1 $CRANK
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginTop: 20
                        }}>
                            <BoldText>Unit Price</BoldText>
                            {"$ " + unitPrice.toString()}
                        </Box>
                    }
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 20}}>
                        <BoldText>You'll Receive</BoldText>
                        {"$ " + (unitPrice * amountToSell).toString()}
                    </Box>
                </Box>
            </Flex>
            <Flex mx={-2} mb={3}>
                <Box width={1} px={2}>

                </Box>
            </Flex>
            <FormButton onClick={!metaData.userAddress && (() => {
                connectWallet(metaData.web3Modal)
            })}>
                {metaData.userAddress ? "SELL" : "CONNECT WALLET"}
            </FormButton>
        </Box>
    )
}

const mapStateToProps = (state) => {
    return {
        metaData: state.metaData
    }
}

export default connect(mapStateToProps, {connectWallet})(SellForm);
