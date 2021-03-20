import React, { useRef, useEffect } from "react";
import CanvasDraw from "react-canvas-draw";

const AutographDraw = () => {
  const canvasRef = useRef(null);

  const onChange = () => {
    if (!canvasRef.current) return;
    console.log(parseLines());
  };

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

  // Reduces precision of savedata
  const reducePrecision = (saveData) => {
    const newLines = [];
    const lines = saveData.lines;
    lines.forEach((line) => {
      const newPoints = [];
      for (let i = 0; i < line.points.length; i += 8) {
        newPoints.push(line.points[i]);
      }
      newPoints.push(line.points[line.points.length - 1]);
      newLines.push({
        ...line,
        points: newPoints, // replace points with newPoints
      });
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
      />
      <button onClick={compress}>Compress!</button>
    </div>
  );
};

export default AutographDraw;
