import React, { useState, useEffect } from "react";
import config from "../config/config";
import axios from "axios";
import Image from "next/image";
import defaultBG from "../public/default-bg.png";

const { getImageEndPoint } = config;

const imageEndPoint = getImageEndPoint();

// const imageUrls = [
//   "/image1.png",
//   "/image2.png",
//   "/image3.png",
//   // add more image paths here
// ];

function Viewer() {
  const [currentImage, setCurrentImage] = useState<string>();

  useEffect(() => {
    axios
      .get(imageEndPoint)
      .then((response) => {
        if (response) {
          setCurrentImage(response.data);
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImage((prevImage) => {
  //       const currentIndex = imageUrls.indexOf(prevImage);
  //       if (currentIndex === imageUrls.length - 1) {
  //         // if it was the last image, return the first one
  //         return imageUrls[0];
  //       } else {
  //         // otherwise, return the next one
  //         return imageUrls[currentIndex + 1];
  //       }
  //     });
  //   }, 10000); // change image every 10 seconds

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="w-full relative bg-cover overflow-hidden">
      <Image
        src={currentImage || defaultBG}
        fill
        style={{ objectFit: "cover" }}
        quality={100} // you can adjust this for better image quality
        alt="[viewer picture]"
      />
    </div>
  );
}

export default Viewer;
