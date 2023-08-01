import React from "react";
import Image from "next/image";

function Viewer(props: { imageString: string; overlayText: string }) {
  const { imageString, overlayText } = props;

  // Decode the image string
  const imageSrc = `data:image/jpeg;base64,${imageString}`;

  return (
    <div className="w-full relative bg-cover overflow-hidden">
      <Image
        src={imageSrc}
        fill={true}
        style={{ objectFit: "cover", opacity: 0.8 }}
        alt="[viewer picture]"
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <p className="text-white text-2xl">{overlayText}</p>
      </div>
    </div>
  );
}

export default Viewer;
