import React from "react";
import Image from "next/image";
import defaultBG from "../public/default-bg.png";

function Viewer() {
  return (
    <div className="w-full  relative bg-cover overflow-hidden">
      <Image
        src={defaultBG}
        fill={true}
        style={{ objectFit: "cover", opacity: 0.8 }}
        alt="[default viewer picture]"
      />
    </div>
  );
}

export default Viewer;
