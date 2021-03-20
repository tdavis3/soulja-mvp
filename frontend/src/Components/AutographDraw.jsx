import React, { useRef, useState, useEffect } from "react";
import CanvasDraw from "react-canvas-draw";

const AutographDraw = (props) => {
  const { imgSrc = "" } = props;
  const canvasRef = useRef(null);
  // Keeps track of how many lines are in image
  const [numLines, setNumLines] = useState(0);

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
      });
    }
    console.log(outputArr);
  };

  // Returns line but with reduced precision
  const reducePrecisionOfLine = (line) => {
    const newPoints = [];
    for (let i = 0; i < line.points.length; i += 8) {
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

  return (
    <div>
      <CanvasDraw
        brushRadius={4}
        lazyRadius={2}
        ref={canvasRef}
        onChange={onChange}
        imgSrc={imgSrc}
      />
    </div>
  );
};

export default AutographDraw;
