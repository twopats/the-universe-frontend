import Image from "next/image";
import React, { FunctionComponent } from "react";
import Tux from "../public/tux.svg";
const AIChatMessage = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-end py-4">
      <p className="mr-0 w-full">AI: {text}</p>
      {/* <Image src={Tux} width={30} height={30} alt={"user"}></Image> */}
    </div>
  );
};

export default AIChatMessage;
