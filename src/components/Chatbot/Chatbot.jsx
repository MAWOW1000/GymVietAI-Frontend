// Chatbot.jsx
import React, { useState, useRef, useEffect } from "react";
import { BsChatDots } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { postChat } from "../../util/chatbotAxios/chatbotApi";
import "./Chatbot.scss";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userMessage, setUserMessage] = useState("");
    const [messages, setMessages] = useState([
        { text: "Hi there! How can I help you today?", sender: "bot" },
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleInputChange = (e) => {
        setUserMessage(e.target.value);
    };

    const handleSendMessage = async () => {
        if (userMessage.trim() === "" || isTyping) return;

        const newMessages = [...messages, { text: userMessage, sender: "user" }];
        setMessages(newMessages);
        setUserMessage("");
        setIsTyping(true);

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000);

            const response = await postChat(userMessage);
            console.log('Chatbot response:', response);
            clearTimeout(timeoutId);

            // Kiểm tra và xử lý response
            let botMessage = "Xin lỗi, hệ thống đang gặp trục trặc!";
            if (response && response.EC === -10) {
                botMessage = "Free users can only use chat up to 10 times, Please upgrade to premium to chat more";
            } else if (response && response.message) {
                botMessage = response.message;
            } else if (response && typeof response === 'string') {
                botMessage = response;
            }

            setMessages([...newMessages, { text: botMessage, sender: "bot" }]);
        } catch (error) {
            console.error('Error in chatbot:', error);
            const errorMessage = "Xin lỗi, hệ thống đang gặp trục trặc. Vui lòng thử lại sau!";
            setMessages([...newMessages, { text: errorMessage, sender: "bot" }]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className={`chatbot ${isOpen ? "open" : ""}`}>
            <div className="chatbot-header" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                    <AiOutlineClose className="rotate-icon" />
                ) : (
                    <>
                        <BsChatDots />
                        {!isOpen && <div className="chat-tooltip">Chat with us!</div>}
                    </>
                )}
            </div>
            {isOpen && (
                <div className="chatbot-body">
                    <div className="messages">
                        {messages.map((message, index) => (
                            <div key={index} className={`message ${message.sender}`}>
                                {message.sender === 'bot' && (
                                    <div className="bot-avatar">
                                        <BsChatDots />
                                    </div>
                                )}
                                <div className="message-content">{message.text}</div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="message bot">
                                <div className="bot-avatar">
                                    <BsChatDots />
                                </div>
                                <div className="message-content typing-indicator">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="input-area">
                        <input
                            type="text"
                            value={userMessage}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                            placeholder="Type your message..."
                            disabled={isTyping}
                        />
                        <button onClick={handleSendMessage} disabled={isTyping || !userMessage.trim()}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
