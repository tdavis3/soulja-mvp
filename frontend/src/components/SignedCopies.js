import React from "react";
import {Flex} from "rebass";

import {Heading} from './Text'

const SignedCopies = () => {
    return (
        <div>
            <Heading>Signed Copies</Heading>
            <Flex>
                <div>
                    <p>Owner</p>
                    <ul>
                        <li>evan The God</li>
                        <li>katz The Man</li>
                        <li>td3 The Boss</li>
                    </ul>
                </div>
                <div>
                    <p>Message</p>
                    <ul>
                        <li>To my parents who died in an acrobatics accident...</li>
                        <li>To my parents who died in an acrobatics accident...</li>
                        <li>To my parents who died in an acrobatics accident...</li>
                    </ul>
                </div>
            </Flex>
        </div>
    );
}

export default SignedCopies;
