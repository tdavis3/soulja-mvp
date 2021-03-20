import React from "react";
import {Flex, Box, Image} from "rebass";

import {LargeHeading, Text, MediumSmallHeading} from './Text'

const musk = <Image
    src={process.env.PUBLIC_URL + "/em_sig.jpg"}
    sx={{
        width: ['80%', '60%'],
        borderRadius: 8,
        transform: 'rotate(-14deg)'
    }}
/>;


const SignInfo = () => {
    return (
        <div style={{marginTop:160}}>
            <Flex>
                <Box
                    p={3}
                    width={1 / 2}
                    color='#6F6F6F'
                    bg='primary'
                    paddingLeft={0}>
                    <LargeHeading>Get Your<br />Album Signed</LargeHeading>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip
                        ex ea commodo consequat.
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
        </div>
    );
}

export default SignInfo;
