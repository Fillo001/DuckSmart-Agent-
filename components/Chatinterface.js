import React, { useState } from 'react';
import axios from 'axios';

function ChatInterface() {
    const [message, setMessage] = useState('');
    const [reply, setReply] = useState('');

    const sendMessage = async () => {
        const res = await axios.post('http://localhost:5000/api/query', { message });
        setReply(res.data.reply);
    };

    return (
        <div>
            <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Ask DuckSmart AI..." />
            <button onClick={sendMessage}>Send</button>
            <p>{reply}</p>
        </div>
    );
}

export default ChatInterface;
