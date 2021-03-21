import React from "react";
import {Box, Flex, Image} from "rebass";

import {Heading, SmallHeading, MediumSmallHeading, Text} from './Text';


const crankThatPicture = <Image
    src={process.env.PUBLIC_URL + "/crankthat.jpg"}
    sx={{
        width: ['100%', '50%'],
        borderRadius: 8,
    }}
/>;

const souljaBoyProfilePicture = <Image
    src={process.env.PUBLIC_URL + "/souljaboy.jpg"}
    sx={{
        width: 32,
        height: 32,
        borderRadius: 9999,
        marginLeft: 24,
        marginRight: 10,
    }}
/>;

const SingleCopy = () => {
    return (
        <Flex marginBottom={120}>
            <Box
                p={3}
                width={1 / 2}
                color='#6F6F6F'
                bg='primary'
                paddingRight={76}>
                <Heading>
                    Soulja World #1
                </Heading>
                <SmallHeading>
                    <span style={{display: "flex", alignItems: "center"}}>Owned by {souljaBoyProfilePicture} katz The Man</span>
                </SmallHeading>
                <Text marginBottom={20}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore
                    et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip
                    ex ea commodo consequat.
                </Text>
                <Flex>
                    <MediumSmallHeading>Signature</MediumSmallHeading>
                    {/*TODO: shadowed signature box*/}
                </Flex>
            </Box>
            <Box
                p={3}
                width={1 / 2}
                color='#6F6F6F'
                bg='#F1F2F6'
                sx={{
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                {crankThatPicture}
            </Box>
        </Flex>
    );
}

export default SingleCopy;
