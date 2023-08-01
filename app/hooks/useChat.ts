import React, { useEffect, useRef, useState } from "react";
import { Message } from "../types/types";
import axios from "axios";

const INTIAL_MESSAGES: Message[] = [];
const INTIAL_INPUT: string = "";

//const testEndPoint = "http://localhost:8080/chat";

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
  const message = "this is a test of thingy"
  async function postCompletion() {
    try{
        console.log("postCompletion");
        const { data } = await axios.get(`https://2dbf-2001-569-7e44-1200-30ac-638a-ca29-1c6e.ngrok-free.app/chat?content=${message}&role=user`);
        setMessages((prevState) => {
          return [...prevState, { content: data, role: "assistant" }];
        });
      }catch(error){
      console.log(error);
    }
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