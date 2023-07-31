import React, { useRef, useState } from "react";
import { Message } from "../types/types";
import axios from "axios";

const INTIAL_MESSAGES: Message[] = [];

const testEndPoint = "http://localhost:8080/api";
const textEndPoint =
  "https://2dbf-2001-569-7e44-1200-30ac-638a-ca29-1c6e.ngrok-free.app/text";

export default function useChat() {
  const [messages, setMessages] = useState(INTIAL_MESSAGES);
  const inputRef = useRef<HTMLInputElement>(null);

  //add user input to messages array state
  function sendUserInput() {
    if (!inputRef.current) return;
    setMessages([
      ...messages,
      { content: inputRef.current.value, role: "user" },
    ]);
  }

  //clear chat input field
  function clearInput() {
    if (!inputRef.current) return;
    inputRef.current.value = "";
  }

  //send request to backend server
  async function postCompletion() {
    console.log("postCompletion");
    try {
      const res = await axios.get(testEndPoint);
      setMessages((prevState) => {
        return [...prevState, { content: res.data.message, role: "assistant" }];
      });
    } catch (error) {
      console.error(error);
    }
  }

  //event handler for chat input
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!inputRef.current) return;
    inputRef.current.value = e.target.value;
  }

  //event handler for input form
  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    sendUserInput();
    postCompletion();
    clearInput();
  }

  return {
    messages,
    postCompletion,
    inputRef,
    handleInputChange,
    handleFormSubmit,
  };
}
