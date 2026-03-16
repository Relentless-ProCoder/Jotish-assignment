export function mergePhotoAndSignature(photoSrc, signatureCanvas) {
  return new Promise((resolve) => {
    const image = new Image();

    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;

      const ctx = canvas.getContext('2d');

      ctx.drawImage(image, 0, 0);
      ctx.drawImage(signatureCanvas, 0, 0);

      resolve(canvas.toDataURL('image/png'));
    };

    image.src = photoSrc;
  });
}