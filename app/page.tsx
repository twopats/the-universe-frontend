"use client";
import Viewer from "./components/viewer";
import UserChatMessage from "./components/user-chat-message";
import AIChatMessage from "./components/ai-chat-message";
import useCustomChat from "./hooks/useChat";

export default function Chat() {
    const {
        messages,
        postCompletion,
        inputRef,
        handleInputChange,
        handleFormSubmit,
    } = useCustomChat();

    return (
        <div className="flex  h-screen">
            <div className=" w-full p-4   max-w-xl flex flex-col stretch   overflow-y-auto divide-y-2 divide-dashed divide-slate-700">
                {messages.length > 0
                    ? messages.map((m) => {
                        if (m.role === "user") {
                            return <UserChatMessage text={m.content}></UserChatMessage>;
                        } else {
                            return <AIChatMessage text={m.content}></AIChatMessage>;
                        }
                    })
                    : null}

                <form onSubmit={handleFormSubmit}>
                    <input
                        className="fixed w-full max-w-md bottom-0 border bg-white border-gray-300 rounded mb-8 shadow-xl p-2"
                        ref={inputRef}
                        type="text"
                        placeholder="Say something..."
                    // onChange={handleInputChange}
                    />
                </form>
            </div>
            <Viewer />
        </div>
    );
}