import React from "react";
import {Box, Flex, Image} from "rebass";
import {Heading, SmallHeading, Text} from './Text'
import {BuyButton, RedeemButton, SellButton} from "./Button";


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

const crankThatPicture = <Image
    src={process.env.PUBLIC_URL + "/crankthat.jpg"}
    sx={{
        width: ['100%', '50%'],
        borderRadius: 8,
    }}
/>

const DataField = ({title, data, url}) => {
    return (<>
        {title}<br/>
        {data} {url && "linkicon"}
    </>)
}


const AlbumDashboard = () => {
    return (
        <Flex>
            <Box
                p={3}
                width={1 / 2}
                color='#6F6F6F'
                bg='primary'>
                <Heading
                    fontSize={[5, 6, 7]}
                    color='primary'>
                    Soulja World
                </Heading>
                <SmallHeading
                    fontSize={[3, 4, 5]}
                    fontWeight='bold'
                    color='primary'>
                    <span style={{display: "flex", alignItems: "center"}}>By {souljaBoyProfilePicture} Soulja Boy</span>
                </SmallHeading>
                <Text
                    fontSize={[1, 2, 3]}
                    fontWeight='bold'
                    color='primary'>
                    Soulja Boy’s first digital album drop. Buy $CRANK tokens, sell $CRANK tokens. When you’re ready to
                    join the club of winners, redeem for a signed digital album. You can request Soulja Boy sign your
                    digital album.
                </Text>
                <Flex>
                    <Box
                        p={3}
                        width={1 / 3}
                        color="black"
                        bg="primary">
                        <DataField title="Last Traded Price" data="420.69"/>
                    </Box>
                    <Box
                        p={3}
                        width={1 / 3}
                        color="black"
                        bg="primary">
                        <DataField title="Available" data="77/420"/>
                    </Box>
                    <Box
                        p={3}
                        width={1 / 3}
                        color="black"
                        bg="primary">
                        <DataField title="ERC20 Contract" data="0x00000" url="http://"/>
                    </Box>
                </Flex>
                <Flex>
                    <Box
                        p={3}
                        width={1 / 2}
                        color='#6F6F6F'
                        bg='primary'
                        paddingLeft={0}
                        paddingBottom={28}>
                        <BuyButton>
                            BUY
                        </BuyButton>
                    </Box>
                    <Box
                        p={3}
                        width={1 / 2}
                        color='#6F6F6F'
                        bg='secondary'
                        paddingRight={0}
                        paddingBottom={28}>
                        <SellButton>
                            SELL
                        </SellButton>
                    </Box>
                </Flex>
                <RedeemButton>
                    REDEEM
                </RedeemButton>
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

export default AlbumDashboard;
