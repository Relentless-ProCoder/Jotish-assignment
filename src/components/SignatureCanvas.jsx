import React, { useEffect, useRef } from 'react';

function SignatureCanvas({ width, height }) {
  const canvasRef = useRef(null);
  const drawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const startDraw = (e) => {
      drawing.current = true;
      ctx.beginPath();
      ctx.moveTo(e.offsetX, e.offsetY);
    };

    const draw = (e) => {
      if (!drawing.current) return;

      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
    };

    const stopDraw = () => {
      drawing.current = false;
    };

    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDraw);

    return () => {
      canvas.removeEventListener('mousedown', startDraw);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDraw);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        border: '1px solid red',
      }}
    />
  );
}

export default SignatureCanvas;