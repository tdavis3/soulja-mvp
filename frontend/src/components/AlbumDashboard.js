import React, {useState} from "react";
import {Box, Flex, Image} from "rebass";
import {Heading, SmallHeading, Text, SmallBoldText, BoldText} from './Text'
import {BuyButton, RedeemButton, SellButton} from "./Button";
import {Modal} from "./Modal"


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
/>;

const DataField = ({title, data, url}) => {
    return (<>
        <SmallBoldText>{title}</SmallBoldText>
        <BoldText sx={{fontWeight: 700}}>{data} {url && "linkicon"}</BoldText>
    </>)
}


const AlbumDashboard = () => {
    const [showBuyModal, setShowBuyModal] = useState(false);
    const [showSellModal, setShowSellModal] = useState(false);
    const [showRedeemModal, setShowRedeemModal] = useState(false);
    return (
        <Flex marginBottom={120}>
            <Box
                p={3}
                width={1 / 2}
                color='#6F6F6F'
                bg='primary'
                paddingRight={76}>
                <Heading>
                    Soulja World
                </Heading>
                <SmallHeading>
                    <span style={{display: "flex", alignItems: "center"}}>By {souljaBoyProfilePicture} Soulja Boy</span>
                </SmallHeading>
                <Text marginBottom={20}>
                    Soulja Boy’s first digital album drop. Buy $CRANK tokens, sell $CRANK tokens. When you’re ready to
                    join the club of winners, redeem for a signed digital album. You can request Soulja Boy sign your
                    digital album.
                </Text>
                <Flex
                  marginBottom={48}>
                    <Box
                        width={1 / 3}
                        color="black"
                        bg="primary"
                        paddingTop={28}
                        paddingLeft={0}>
                        <DataField title="Last Traded Price" data="420.69"/>
                    </Box>
                    <Box
                        width={1 / 3}
                        color="black"
                        bg="primary"
                        paddingTop={28}>
                        <DataField title="Available" data="77/420"/>
                    </Box>
                    <Box
                        width={1 / 3}
                        color="black"
                        bg="primary"
                        paddingTop={28}
                        paddingRight={0}>
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
                        paddingBottom={28}
                        paddingTop={0}>
                        <BuyButton onClick={() => setShowBuyModal(true)}>
                            BUY
                        </BuyButton>
                    </Box>
                    <Box
                        p={3}
                        width={1 / 2}
                        color='#6F6F6F'
                        bg='secondary'
                        paddingRight={0}
                        paddingBottom={28}
                        paddingTop={0}>
                        <SellButton onClick={() => setShowSellModal(true)}>
                            SELL
                        </SellButton>
                    </Box>
                </Flex>
                <RedeemButton onClick={() => setShowRedeemModal(true)}>
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
            <Modal isOpen={showBuyModal} onDismiss={() => setShowBuyModal(false)}>
              <button className="close-button" onClick={() => setShowBuyModal(false)}>
                {/*<VisuallyHidden>Close</VisuallyHidden>*/}
                <span aria-hidden>×</span>
              </button>
              <p>Hello there. I am a dialog</p>
              <BuyButton>BUY</BuyButton>
            </Modal>
        </Flex>
    );
}

export default AlbumDashboard;
