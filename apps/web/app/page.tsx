'use client'
import { useSocket } from '../context/SocketProvider';
 import classes from './page.module.css';
 import React, { useState } from 'react';

export default function Page() {
  const { sendMessage } = useSocket();
  const [message, setMessage] = useState("");


  return (
    <div>
      <div>
        <h1>Welcome to the Chat App</h1>
        <p>This is a simple chat application.</p>
      </div>
      <div>
        <input
          onChange={(e) => setMessage(e.target.value)}
          className={classes["chat-input"]} placeholder="Message.." />
        <button
        onClick={(e) => sendMessage(message)}
          className={classes["button"]}>Send</button>
      </div>
    </div>
  )
}