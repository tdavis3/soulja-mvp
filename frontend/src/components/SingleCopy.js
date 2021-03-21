import React, { useState, useRef, useEffect } from "react";
import {Box, Flex, Image} from "rebass";

import {Heading, SmallHeading, MediumSmallHeading, Text} from './Text';
import CanvasDraw from "react-canvas-draw";


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

    const [signatureId, setSignatureId] = useState(161890784);
    const [message, setMessage] = useState('');

    const canvasRef = useRef(null);
    const canvasRef2 = useRef(null);

    useEffect(() => {
      async function get() {
        if (!canvasRef.current) return;
        const res = await fetch('https://souljamvp.netlify.app/.netlify/functions/get-autograph', {
          method: 'POST',
          mode: 'cors',
          body: JSON.stringify({ id: signatureId })
        });
        const json = await res.json();
        const autograph = json.autograph;
        canvasRef.current.loadSaveData(JSON.stringify(autograph));
        canvasRef2.current.loadSaveData(JSON.stringify(autograph).replaceAll('#FFF', '#444'));
        setMessage(json.message)
      }
      get();
    }, [signatureId, canvasRef]);

    return (
        <Flex>
            <Box
                p={3}
                width={1 / 2}
                color='#6F6F6F'
                bg='primary'>
                <Heading>
                    Soulja World #1
                </Heading>
                <SmallHeading>
                    <span style={{display: "flex", alignItems: "center"}}>Owned by {souljaBoyProfilePicture} katz The Man</span>
                </SmallHeading>
                {message &&<Text marginBottom={20}>
                    "{message}" - Soulja
                </Text> }
                <div>
                    <MediumSmallHeading>Signature</MediumSmallHeading>
                    <CanvasDraw
                      disabled
                      brushRadius={4}
                      lazyRadius={2}
                      ref={canvasRef2}
                      style={{ margin: '20px auto 20px auto', padding: '5px', backgroundColor: '#F1F2F6', borderRadius: '10px' }}
                    />
                    <div>

                    </div>
                </div>
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
                }}
            >
                <CanvasDraw
                  disabled
                  brushRadius={4}
                  lazyRadius={2}
                  ref={canvasRef}
                  imgSrc={process.env.PUBLIC_URL + "/crankthat.jpg"}
                  style={{ margin: 'auto', padding: '30px 80px 30px 80px', backgroundColor: '#F1F2F6', borderRadius: '10px' }}
                  brushColor="#FFF"
                />
            </Box>
        </Flex>
    );
}

export default SingleCopy;
