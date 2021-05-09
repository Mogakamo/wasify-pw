import React from 'react'
import { StreamChat } from 'stream-chat'
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react'
import 'stream-chat-react/dist/css/index.css'

const chatClient = StreamChat.getInstance('ta76zvxu6w4b');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZGFyay1kYXJrbmVzcy0zIn0.HxpIAorFKLHcLhbAw2P2yGo8f99sMnMdogPieLGarnk';

chatClient.co