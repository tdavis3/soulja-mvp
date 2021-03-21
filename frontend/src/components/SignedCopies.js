import React from "react";
import {Box, Flex} from "rebass";

import {Heading, SmallHeading} from './Text'

const SignedCopies = () => {
    return (
        <div>
            <Heading>Signed Copies</Heading>
            <Flex>
                <Box
                    p={3}
                    width={1 / 2}
                    color='#6F6F6F'
                    bg='primary'
                >
                    <SmallHeading>Owner</SmallHeading>
                    <ul>
                        <li style={{marginBottom: 20}}>evan The God</li>
                        <li>katz The Man</li>
                        <li>td3 The Boss</li>
                    </ul>
                </Box>
                <Box
                    p={3}
                    width={1 / 2}
                    color='#6F6F6F'
                    bg='primary'
                >
                    <SmallHeading>Message</SmallHeading>
                    <ul>
                        <li style={{marginBottom: 20}}>To my parents who died in an acrobatics accident...</li>
                        <li>To my parents who died in an acrobatics accident...</li>
                        <li>To my parents who died in an acrobatics accident...</li>
                    </ul>
                </Box>
            </Flex>
        </div>
    );
}

export default SignedCopies;
