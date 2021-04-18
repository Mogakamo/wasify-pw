import React, { useEffect, useState } from "react";
import { useChannel } from "./AblyReactEffect";

const ChatComponent = () => {
  let inputBox = null;
  let messageEnd = null;

  const [messageText, setMessageText] = useState("");
  const [receivedMessages, setMessages] = useState();
  const messageTextIsEmpty = messageText.trim().length === 0;

  const [channel, ably] = useChannel("chat-demo", (message) => {
    const history = receivedMessages.slice(-199);
    setMessages([...history, message]);


  })

  const sendChatMessage = (messageText) => {
    channel.publish({ name: 'chat-message',
                      data: messageText});
    setMessageText("");
    inputBox.focus();

  }

  const handleFormSubmission = (event) => {
    event.preventDefault();
    sendChatMessage(messageText);
  }

  const handleKeyPress = (event) => {}
};
