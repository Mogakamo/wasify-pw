import React from 'react'
import { StreamChat } from 'stream-chat'
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react'
import 'stream-chat-react/dist/css/index.css'

const chatClient = StreamChat.getInstance('ta76zvxu6w4b');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZGFyay1kYXJrbmVzcy0zIn0.HxpIAorFKLHcLhbAw2P2yGo8f99sMnMdogPieLGarnk';

chatClient.connectUser({
  id: "dark-darkness-3",
  name: "dark-darkness-3",
  image:
    "https://getstream.io/random_png/?id=dark-darkness-3&name=dark-darkness-3",
},
userToken,
);

const Channel = chatClient.channel("messaging", "dark-darkness-3", {
  //add custom fields as you'd like
  image: "https://www.drupal.org/files/project-images/react.png",
  name: "Talk about React",
  members: ["dark-darkness-3"],
});

const Chat = () => {
    return (
        <>
         <Chat client={chatClient} theme='messaging light'>
             <Channel channel="channel">
                <Window>
                    <ChannelHeader />
                    <Messa
                </Window>
             </Channel>
         </Chat>
        </>
    )
}