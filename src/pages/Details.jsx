import React, { useRef, useState } from 'react';
import useCamera from '../hooks/useCamera';
import SignatureCanvas from '../components/SignatureCanvas';
import { mergePhotoAndSignature } from '../utils/mergeCanvas';

function Details() {
  const { videoRef, startCamera, capturePhoto } = useCamera();
  const [photo, setPhoto] = useState(null);
  const [mergedImage, setMergedImage] = useState(null);

  const signatureWrapperRef = useRef(null);

  const handleCapture = () => {
    const captured = capturePhoto();
    setPhoto(captured);
  };

  const handleMerge = async () => {
    const signatureCanvas =
      signatureWrapperRef.current.querySelector('canvas');

    const finalImage = await mergePhotoAndSignature(photo, signatureCanvas);

    setMergedImage(finalImage);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Details Page</h2>

      {!photo && (
        <>
          <video
            ref={videoRef}
            autoPlay
            width="400"
            height="300"
          />

          <br /><br />

          <button onClick={startCamera}>Start Camera</button>
          <button onClick={handleCapture}>Capture</button>
        </>
      )}

      {photo && (
        <>
          <div
            ref={signatureWrapperRef}
            style={{
              position: 'relative',
              width: '400px',
              height: '300px',
            }}
          >
            <img
              src={photo}
              alt="Captured"
              width="400"
              height="300"
              style={{ position: 'absolute' }}
            />

            <SignatureCanvas width={400} height={300} />
          </div>

          <br />

          <button onClick={handleMerge}>Merge Image</button>
        </>
      )}

      {mergedImage && (
        <>
          <h3>Final Audit Image</h3>
          <img src={mergedImage} alt="Merged" width="400" />
        </>
      )}
    </div>
  );
}

export default Details;