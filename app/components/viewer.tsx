import React, { useEffect, useState } from "react";
import Image from "next/image";

function Viewer(props: { overlayText: string }) {
  const { overlayText } = props;
  const [imageSrc, setImageSrc] = useState("");
  const [audioSrc, setAudioSrc] = useState("");

  useEffect(() => {
    // Replace 'api-endpoint' with your actual API endpoint
    fetch('api-endpoint')
      .then(response => response.json())
      .then(data => {
        setImageSrc(`data:image/jpeg;base64,${data.image}`);
        setAudioSrc(data.audio);
      });
  }, []);

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
      <audio controls src={audioSrc} />
    </div>
  );
}

export default Viewer;
