import React, {useState} from "react";
import {Flex, Box, Image, Link} from "rebass";
import {Modal} from "./Modal"
import {useHistory} from 'react-router-dom';
import {X} from 'react-feather';
import {LargeHeading, Text, BoldText, MediumSmallHeading} from './Text'
import {RedeemButton} from "./Button";
import RequestForm from "./forms/RequestForm"
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const musk = <Image
    src={process.env.PUBLIC_URL + "/em_sig.jpg"}
    sx={{
        width: ['80%', '60%'],
        borderRadius: 8,
        transform: 'rotate(-14deg)'
    }}
/>;


const SignInfo = () => {
    const [showRequestModal, setShowRequestModal] = useState(false);
    let history = useHistory();

    return (
        <div style={{marginTop: 160}}>
            <Flex>
                <Box
                    p={3}
                    width={1 / 2}
                    color='#6F6F6F'
                    bg='primary'
                    paddingLeft={0}>
                    <LargeHeading>Get Your<br/>Album Signed</LargeHeading>
                    <Text>
                        Make your NFT album personal by requesting a signing from Soulja Boy. He'll write a special message of your request and manually scribble his signature on the coverart. This is the most personal digital music you've had in a long time.
                    </Text>
                </Box>
                <Box
                    p={3}
                    width={1 / 2}
                    sx={{
                        display: "flex",
                        justifyContent: "center"
                    }}
                    paddingRight={0}>
                    {musk}
                </Box>
                {/*TODO: ListView of copies*/}
            </Flex>
            <MediumSmallHeading marginTop={100}>Select an NFT to sign</MediumSmallHeading>
            <RedeemButton style={{marginTop: 25}} onClick={() => setShowRequestModal(true)}>
                Soulja Sign Me!
            </RedeemButton>
            <Modal isOpen={showRequestModal} onDismiss={() => setShowRequestModal(false)}>
                <StyledLink href="javascript:void(0);" onClick={() => setShowRequestModal(false)}><X/></StyledLink>
                <RequestForm/>
            </Modal>
            <BoldText style={{marginTop: 20, textAlign:"center"}}><StyledLink href="javascript:void(0);" onClick={() => history.push('/signed')}>See All Signed Copies</StyledLink></BoldText>
        </div>
    );
}

export default SignInfo;
