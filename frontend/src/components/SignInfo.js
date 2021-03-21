import React from "react";
import {Flex, Box, Image} from "rebass";
import {useHistory} from 'react-router-dom';

import {LargeHeading, Text, MediumSmallHeading} from './Text'
import {RedeemButton} from "./Button";

const musk = <Image
    src={process.env.PUBLIC_URL + "/em_sig.jpg"}
    sx={{
        width: ['80%', '60%'],
        borderRadius: 8,
        transform: 'rotate(-14deg)'
    }}
/>;


const SignInfo = () => {

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
            <RedeemButton onClick={() => history.push('/signed')}>
                Soulja Sign Me!
            </RedeemButton>
        </div>
    );
}

export default SignInfo;
