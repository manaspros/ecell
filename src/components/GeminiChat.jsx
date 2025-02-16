import React, { useState } from 'react';
import { IconMessageCircle } from '@tabler/icons-react';

const GeminiChat = ({ videoUrl }) => {
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [chatMessages, setChatMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false); // new state for typing indicator

    // Updated convertMarkdown to convert text wrapped in ** into <strong> tags and replace newlines with <br/>
    const convertMarkdown = (text) =>
        text
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
            .replace(/\n/g, "<br/>");

    const sendQuestion = async () => {
        if (!inputValue.trim()) return;
        const userMessage = { role: "user", text: inputValue };
        const historyToSend = chatMessages;
        setChatMessages([...chatMessages, userMessage]);
        setInputValue("");
        setIsTyping(true);

        try {
            const res = await fetch("https://sf-mvji.onrender.com/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    newInput: userMessage.text,
                    history: historyToSend.map(msg => ({
                        role: msg.role,
                        content: msg.text
                    })),
                    url: videoUrl
                }),
            });
            const data = await res.json();
            // Change role from "assistant" to "model"
            const modelMessage = { role: "model", text: data.content };
            setChatMessages((prev) => [...prev, modelMessage]);
        } catch (error) {
            const errorMessage = { role: "model", text: "Error fetching answer." };
            setChatMessages((prev) => [...prev, errorMessage]);
        }
        setIsTyping(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            sendQuestion();
        }
    };

    return (
        <>
            {/* Fixed chat icon */}
            <div className="fixed bottom-4 right-4 z-50">
                <button
                    onClick={() => setOpen(!open)}
                    className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg"
                >
                    <IconMessageCircle className="w-6 h-6" />
                </button>
            </div>
            {/* Chat window */}
            {open && (
                <div className="fixed bottom-20 right-4 z-50 w-80 p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-bold">Gemini Chat</h3>
                        <button onClick={() => setOpen(false)} className="text-gray-600">&times;</button>
                    </div>
                    <div className="h-40 overflow-y-auto border rounded p-2 mb-2 space-y-2">
                        {chatMessages.length > 0 ? (
                            chatMessages.map((msg, index) => (
                                <div key={index} className={`text-sm ${msg.role === "user" ? "text-blue-600" : "text-gray-800"}`}>
                                    <span className="font-semibold">{msg.role === "user" ? "You" : "Model"}: </span>
                                    {msg.role === "model" ? (
                                        <span dangerouslySetInnerHTML={{ __html: convertMarkdown(msg.text) }} />
                                    ) : (
                                        msg.text
                                    )}
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">Ask your question...</p>
                        )}
                        {isTyping && (
                            <div className="text-sm text-gray-800">
                                <span className="font-semibold">Model: </span>
                                <span>Typing...</span>
                            </div>
                        )}
                    </div>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Type your question..."
                            className="w-full border rounded p-2 focus:outline-none"
                        />
                        <button
                            onClick={sendQuestion}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default GeminiChat;
