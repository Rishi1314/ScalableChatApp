'use client'

import React, { createContext, use, useCallback, useContext, useEffect, useState } from 'react';
import  { io } from 'socket.io-client';


interface SocketProviderProps {
    children?: React.ReactNode;
}

interface ISocketContext { 
    sendMessage: (message: string) => any;
}

const SocketContext = createContext<ISocketContext | null>(null);
export const useSocket = () => { 
    const state= useContext(SocketContext);
    if (!state) {
        throw new Error("State is undefined:useSocket must be used within a SocketProvider");
    }
    return state;
}
export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
    
    const sendMessage: ISocketContext['sendMessage'] = useCallback((message: string) => {
        console.log(`Sending message: ${message}`);
    },[])

    useEffect(() => { 
        const _socket = io('http://localhost:8000')

        return () => {
            _socket.disconnect();
        }
    }, []);

    return (

        <SocketContext.Provider value={null}>
            {children}
        </SocketContext.Provider>
    )
}