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
    postCompletion();
    clearInput();
  }

  function sendUserInput() {
    if (!inputRef.current) return;
    setMessages([
      ...messages,
      { content: inputRef.current.value, role: "user" },
    ]);
  }

  function clearInput() {
    if (!inputRef.current) return;
    inputRef.current.value = "";
  }
  async function postCompletion() {
    console.log("postCompletion");
    const { data } = await axios.get(testEndPoint);
    setMessages((prevState) => {
      return [...prevState, { content: data.facts[0], role: "assistant" }];
    });
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!inputRef.current) return;
    inputRef.current.value = e.target.value;
  }

  return {
    messages,
    postCompletion,
    inputRef,
    handleInputChange,
    handleFormSubmit,
  };
}
