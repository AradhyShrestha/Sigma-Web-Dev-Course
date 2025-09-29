"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import 'stream-chat-react/dist/css/v2/index.css';

const ChatForum = ({ Clerkuser, slug }) => {
    function toTitleCase(str) {
        return str
            .replace(/[-_]/g, " ") // replace - and _ with spaces
            .split(" ") // split into words
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // capitalize
            .join(" "); // join back
    }
    const apiKey = '8yuh34zvk8tf';
    const userId = Clerkuser.id;
    const userName = Clerkuser.name;
    const userToken = Clerkuser.token;

    const user = {
        id: userId,
        name: userName,
        image: `https://getstream.io/random_png/?name=${userName}`,
    };

    const [channel, setChannel] = useState();
    const client = useCreateChatClient({
        apiKey,
        tokenOrProvider: userToken,
        userData: user,
    });

    useEffect(() => {
        if (!client) return;

        const channel = client.channel('messaging', slug, {
            image: 'https://getstream.io/random_png/?name=react',
            name: toTitleCase(slug) + " Discussion",
            members: [userId],
        });

        setChannel(channel);
        // channel.addMembers([userId])

    }, [client]);

    if (!client) return <div>Setting up client & connection...</div>;

    return (
        <Chat client={client}>
            <Channel channel={channel}>
                <Window>
                    <ChannelHeader />
                    <MessageList />
                    <MessageInput />
                </Window>
                <Thread />
            </Channel>
        </Chat>
    );
};


export default ChatForum
