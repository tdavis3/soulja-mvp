import React, {useRef, useState, useEffect} from "react";
import CanvasDraw from "react-canvas-draw";
import { Label, Checkbox, Textarea } from '@rebass/forms'
import { Box } from 'rebass'
import { FormButton } from './Button';

const AutographDraw = (props) => {
    const {imgSrc = ""} = props;
    const canvasRef = useRef(null);
    // Keeps track of how many lines are in image
    const [numLines, setNumLines] = useState(0);
    // Whether album is shown on signature canvas background
    const [showAlbum, setShowAlbum] = useState(true);
    // Message value
    const [message, setMessage] = useState('');

    const onChange = () => {
        if (!canvasRef.current) return;
        const saveData = JSON.parse(canvasRef.current.getSaveData());
        setNumLines(saveData.lines.length);
    };

    useEffect(() => {
        if (!canvasRef.current) return;
        if (numLines < 1) return;
        // Compress recently-added line
        const saveData = JSON.parse(canvasRef.current.getSaveData());
        saveData.lines[saveData.lines.length - 1] = reducePrecisionOfLine(
            saveData.lines[saveData.lines.length - 1]
        );
        setNumLines(saveData.lines.length);
        canvasRef.current.loadSaveData(JSON.stringify(saveData), true);
        console.log(parseLines());
    }, [numLines]);

    const parseLines = () => {
        const outputArr = [];
        const saveData = JSON.parse(canvasRef.current.getSaveData());
        console.log(saveData);
        const lines = saveData.lines;
        if (lines) {
            lines.forEach((line) => {
                line.points.forEach((point) => {
                    outputArr.push(point.x);
                    outputArr.push(point.y);
                });
                // (-1,-1) separates lines
                outputArr.push(-1);
                outputArr.push(-1);
            });
        }
        console.log(outputArr);
        return outputArr;
    };

    // Returns line but with reduced precision
    const reducePrecisionOfLine = (line) => {
        const newPoints = [];
        for (let i = 0; i < line.points.length; i += 5) {
            newPoints.push(line.points[i]);
        }
        // Always include last point
        newPoints.push(line.points[line.points.length - 1]);
        return {
            ...line,
            points: newPoints, // replace points with newPoints
        };
    };

    // Reduces precision of savedata
    const reducePrecision = (saveData) => {
        const newLines = [];
        const lines = saveData.lines;
        lines.forEach((line) => {
            const newLine = reducePrecisionOfLine(line);
            newLines.push(newLine);
        });

        return {
            ...saveData,
            lines: newLines, // replace lines with newLines
        };
    };

    const compress = () => {
        const saveData = JSON.parse(canvasRef.current.getSaveData());
        const reducedPrecisionSaveData = JSON.stringify(reducePrecision(saveData));
        canvasRef.current.loadSaveData(reducedPrecisionSaveData, true); // 2nd argument = "load immediately, don't do redraw animation"
    };

    const uploadAutograph = async () => {
      const autograph = parseLines();
      const res = await fetch('https://souljamvp.netlify.app/.netlify/functions/upload-autograph', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({ floatsStr: JSON.stringify(autograph), message })
      });
      console.log(res)
      if(res.status === 200) {
        alert('Successfully added autograph!')
        const json = await res.json();
        const id = json.id;
        // TODO: do something with this ID in eth!
      } else {
        alert('Failed :(')
      }
    };

    return (
        <div style={{ margin: 'auto', textAlign: 'center' }}>
            <CanvasDraw
                brushRadius={4}
                lazyRadius={2}
                ref={canvasRef}
                onChange={onChange}
                imgSrc={showAlbum ? process.env.PUBLIC_URL + "/crankthat.jpg" : ""}
                style={{ margin: 'auto', padding: '30px 80px 30px 80px', backgroundColor: '#F1F2F6', borderRadius: '10px' }}
                brushColor="#FFF"
            />
            {/* Doesn't work :( stretch goal (TODO) <div style={{ display: 'inherit', margin: '20px auto 20px auto', width: '450px', }}>
              <FormButton onClick={() => setShowAlbum(!showAlbum)}>
                {showAlbum ? "Hide album background" : "Show album background"}
              </FormButton>
            </div> */}
            <Box style={{ width: '560px', margin: '30px auto 30px auto' }}>
              <Label htmlFor='comment'>Message</Label>
              <Textarea
                id='comment'
                name='comment'
                value={message}
                onChange={event => setMessage(event.target.value)}
              />
            </Box>
            <div style={{ display: 'inherit', margin: '20px auto 20px auto', width: '450px', }}>
              <FormButton onClick={uploadAutograph}>
                Add Autograph!
              </FormButton>
            </div>
        </div>
    );
};

export default AutographDraw;
