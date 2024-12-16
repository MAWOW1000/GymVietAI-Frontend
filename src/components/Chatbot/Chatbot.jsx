// Chatbot.jsx
import React, { useState, useRef, useEffect } from "react";
import { BsChatDots } from "react-icons/bs";
import { AiOutlineClose, AiOutlineSend } from "react-icons/ai";
import "./Chatbot.scss";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userMessage, setUserMessage] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi there! How can I help you today?", sender: "bot" },
    ]);

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    // Tooltip interval management
    useEffect(() => {
        let tooltipInterval;
        
        if (!isOpen) {
            // Initial delay of 5 seconds before starting the loop
            const initialDelay = setTimeout(() => {
                // Show tooltip for 2 seconds every 5 seconds
                const showTooltip = () => {
                    setShowTooltip(true);
                    setTimeout(() => setShowTooltip(false), 2000);
                };

                // Initial show
                showTooltip();
                
                // Set up the interval for the loop
                tooltipInterval = setInterval(showTooltip, 5000);
            }, 5000);

            return () => {
                clearTimeout(initialDelay);
                if (tooltipInterval) {
                    clearInterval(tooltipInterval);
                }
                setShowTooltip(false);
            };
        }

        return () => {
            if (tooltipInterval) {
                clearInterval(tooltipInterval);
            }
            setShowTooltip(false);
        };
    }, [isOpen]);

    useEffect(() => {
        // Hide tooltip after 5 seconds
        const timer = setTimeout(() => {
            setShowTooltip(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const handleInputChange = (e) => {
        setUserMessage(e.target.value);
    };

    const handleSendMessage = () => {
        if (userMessage.trim() === "") return;

        const newMessages = [...messages, { text: userMessage, sender: "user" }];
        setMessages(newMessages);
        setUserMessage(""); // Clear input field
        setIsTyping(true);

        // Placeholder for bot response logic (replace with your actual logic)
        setTimeout(() => {
            const botResponse = getBotResponse(userMessage);
            setMessages([...newMessages, { text: botResponse, sender: "bot" }]);
            setIsTyping(false);
        }, 1500); // Simulate a small delay
    };

    const getBotResponse = (message) => {
        const lowerCaseMessage = message.toLowerCase();

        if (lowerCaseMessage.includes("hours")) {
            return "Our gym is open 24/7!"; // Or your specific hours
        } else if (lowerCaseMessage.includes("class")) {
            return "We offer various classes like Yoga, Zumba and Spin. Check our website's class schedule for details!";
        } else if (
            lowerCaseMessage.includes("price") ||
            lowerCaseMessage.includes("cost") ||
            lowerCaseMessage.includes("membership")
        ) {
            return "Please visit our membership page for detailed pricing and options.";
        } else if (
            lowerCaseMessage.includes("personal training") ||
            lowerCaseMessage.includes("pt")
        ) {
            return "We have certified personal trainers. To find out more or book a consultation, contact us at [your contact info]";
        } else if (
            lowerCaseMessage.includes("location") ||
            lowerCaseMessage.includes("address")
        ) {
            return "Our address is [your gym address]";
        } else if (
            lowerCaseMessage.includes("hello") ||
            lowerCaseMessage.includes("hi") ||
            lowerCaseMessage.includes("hey")
        ) {
            return "Hi there! What can I do for you?";
        } else {
            return "I'm still learning!  Please contact us directly for more complex inquiries. ";
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
                        {showTooltip && !isOpen && (
                            <div className="chat-tooltip">
                                Ask free to know more
                            </div>
                        )}
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
                                <div className="message-content">
                                    {message.text}
                                </div>
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
                            placeholder="Message..."
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        />
                        <button onClick={handleSendMessage}>
                            <AiOutlineSend />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
