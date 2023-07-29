"use client";
import { useChat } from "ai/react";
import Viewer from "./components/viewer";
import UserChatMessage from "./components/user-chat-message";
import AIChatMessage from "./components/ai-chat-message";
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex  h-screen">
      <div className=" w-full p-4   max-w-xl flex flex-col stretch   overflow-y-auto divide-y-2 divide-dashed divide-slate-700">
        {messages.length > 0
          ? messages.map((m) => {
              if (m.role === "user") {
                return (
                  <UserChatMessage
                    key={m.id}
                    text={m.content}
                  ></UserChatMessage>
                );
              } else {
                return (
                  <AIChatMessage key={m.id} text={m.content}></AIChatMessage>
                );
              }
            })
          : null}

        <form onSubmit={handleSubmit}>
          <input
            className="fixed w-full max-w-md bottom-0 border bg-transparent border-gray-300 rounded mb-8 shadow-xl p-2"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
        </form>
      </div>
      <Viewer />
    </div>
  );
}
