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


const NFT = ({num, date}) => (
  <Box
      width={'285px'}
      color='#6F6F6F'
      bg='#F1F2F6'
      sx={{
          borderRadius: 8,
          display: "flex",
          flexDirection: 'column',
          alignItems: "center",
          justifyContent: "center",
          marginLeft:20,
          marginRight:20
      }}>
      <Image
          src={process.env.PUBLIC_URL + "/crankthatsideways.png"}
          sx={{
              //width: ['100%', '50%'],
              width: 200,
              borderRadius: 8,
              marginTop:89
          }}
      />
      <span style={{textAlign: "center", marginTop: 40, marginBottom: 52}}>
        <BoldText sx={{fontWeight: 700}}>Soulja World #{num}</BoldText>
        <span sx={{textAlign: "center"}}>{date || "Unsigned"}</span>
      </span>
  </Box>
)
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

            <Flex marginTop={40}>
              <NFT num={1} date="Signed 12/04/2021" />
              <NFT num={2} />
              <NFT num={3} />
            </Flex>
            <RedeemButton style={{marginTop: 56}} onClick={() => setShowRequestModal(true)}>
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
