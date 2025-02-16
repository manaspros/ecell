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
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => setOpen(!open)}
                    className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110"
                >
                    <IconMessageCircle className="w-8 h-8" />
                </button>
            </div>
            {/* Chat window */}
            {open && (
                <div className="fixed bottom-24 right-6 z-50 w-96 bg-white border border-gray-200 rounded-2xl shadow-xl">
                    <div className="flex justify-between items-center px-6 py-4 border-b">
                        <h3 className="text-xl font-bold text-gray-800">SentimentFinder.ai</h3>
                        <button
                            onClick={() => setOpen(false)}
                            className="text-gray-500 hover:text-gray-700 text-2xl"
                        >
                            &times;
                        </button>
                    </div>
                    <div className="h-[60vh] overflow-y-auto p-6 space-y-4">
                        {chatMessages.length > 0 ? (
                            chatMessages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[80%] rounded-2xl px-4 py-2 ${msg.role === "user"
                                            ? "bg-blue-500 text-white"
                                            : "bg-gray-100 text-gray-800"
                                            }`}
                                    >
                                        {msg.role === "model" ? (
                                            <span dangerouslySetInnerHTML={{ __html: convertMarkdown(msg.text) }} />
                                        ) : (
                                            msg.text
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 text-center">Ask your question about this video...</p>
                        )}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-gray-100 rounded-2xl px-4 py-2">
                                    <div className="flex space-x-2">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="p-4 border-t">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Type your question..."
                                className="flex-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                onClick={sendQuestion}
                                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition-colors"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default GeminiChat;
