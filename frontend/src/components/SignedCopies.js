import React, { useState } from "react";
import {Box, Flex} from "rebass";
import {Link} from "react-router-dom";

import {Heading, SmallHeading} from './Text'

const Row = ({leftText, rightText}) => (
  <Flex style={{marginTop: 20}}>
    <Box
        width={7 / 16}
        color='#6F6F6F'
        bg='primary'
    >
        {leftText}
    </Box>
    <Box
        width={9 / 16}
        color='#6F6F6F'
        bg='primary'
    >
        {rightText}
    </Box>
  </Flex>
)
const SignedCopies = () => {
    return (
        <div>
          <Heading>Signed Copies</Heading>
          <Row leftText={<SmallHeading>Owner</SmallHeading>} rightText={<SmallHeading>Message</SmallHeading>} />
          <Row leftText={<Link to={{pathname: "/signed-copy"}}>katz The Man</Link>} rightText="To my parents who died in an acrobatics accident..." />
          <Row leftText='evan The God' rightText="To my parents who died in an acrobatics accident..." />
          <Row leftText='td3 The Boss' rightText="To my parents who died in an acrobatics accident..." />
        </div>
    );
}

export default SignedCopies;
