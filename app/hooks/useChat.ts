import React, { useEffect, useRef, useState } from "react";
import { Message } from "../types/types";
import axios from "axios";

const INTIAL_MESSAGES: Message[] = [];
const INTIAL_INPUT: string = "";

const testEndPoint = "https://dog-api.kinduff.com/api/facts?number=5";

export default function useChat() {
  const [messages, setMessages] = useState(INTIAL_MESSAGES);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    sendUserInput();
    // postCompletion();
    clearInput();
  }

  function sendUserInput() {
    setMessages([
      ...messages,
      { content: inputRef.current!.value, role: "user" },
    ]);
  }

  function clearInput() {
    inputRef.current!.value = "";
  }
  async function postCompletion() {
    console.log("postCompletion");
    const { data } = await axios.get(testEndPoint);
    console.log(data);
    console.log("messages: ", messages);
    setMessages([...messages, { content: data.facts[0], role: "assistant" }]);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    inputRef.current!.value = e.target.value;
  }

  useEffect(() => {
    // if (messages.length > 0) postCompletion();
  }, []);

  return {
    messages,
    postCompletion,
    inputRef,
    handleInputChange,
    handleFormSubmit,
  };
}
