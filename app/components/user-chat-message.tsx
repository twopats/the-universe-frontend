import React, { FunctionComponent } from "react";
import Tux from "../public/tux.svg";
import Image from "next/image";

const UserChatMessage = ({ text }: { text: string }) => {
  return (
    <div className="flex min-h-36 align-middle py-4">
      {/* <Image src={Tux} width={30} height={30} alt={"user"}></Image> */}
      <p>USER: {text}</p>
    </div>
  );
};

export default UserChatMessage;
