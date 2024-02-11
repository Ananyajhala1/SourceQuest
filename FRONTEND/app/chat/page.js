'use client';

import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
   const [socket,setSocket] = useState();

   useEffect(() => {
    const s = io('http://localhost:5000');
    setSocket(s);
    return () => {
        s.disconnect();
    }
   }, []);

    useEffect(() => {
        if(socket == null){
            return;
        }
        // Listen for conversation history from the server
        socket.on('conversation history', (history) => {
            console.log('conversation history');
            setMessages(history);
        });

        // Listen for new messages from the server
        socket.on('chat-message', (msg) => {
            console.log('new message');
            setMessages(prevMessages => [...prevMessages, msg]);
        });
        
    }, [socket]);

    const handleSendMessage = () => {
        if (input.trim() !== '') {
            socket.emit('chat-message', input);
            console.log('msg sent');
            setMessages(prevMessages => [...prevMessages, input]);
            setInput('');
        }
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <div className="max-w-lg w-full p-6 bg-white rounded-lg shadow-md text-black mb-auto overflow-y-auto max-h-full max-w-full">
                {messages.map((msg, index) => (
                    <div key={index} className={`mb-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        <div className="py-2 rounded-lg" style={{ width: `${msg.length * 10}px`, backgroundColor: index % 2 === 0 ? 'blue' : 'gray', color: index % 2 === 0 ? 'white' : 'black' }}>
                            {msg}
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full p-4 bg-white rounded-b-lg shadow-md">
                <div className="flex">
                    <input
                        className="flex-grow rounded-md border border-gray-300 p-2 mr-2 text-black"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        onClick={handleSendMessage}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
    
    
                }    

export default Chat;