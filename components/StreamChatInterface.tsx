import { UserProfile } from "@/app/profile/page";
import { createOrGetChannel, createVideoCall, getStreamUserToken } from "@/lib/actions/stream";
import { useRouter } from "next/navigation";
import { RefObject, useEffect, useImperativeHandle, useRef, useState } from "react";
import { Channel, Event, StreamChat } from "stream-chat-react";
import { text} from "stream/consumers";
import VideoCall from "./VideoCall";

interface Message {
    id: string;
    text: string;
    sender: "me" | "other";
    timestamp: Date;
    user_id: string;
}

export default function StreamChatInterface({
    otherUser,
    ref,

}: {
    otherUser: UserProfile;
    ref: RefObject<{handleVideoCall : () => void} | null>;
}) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentUserId, setCurrentUserId] = useState<string>("");
    const [message, setMessage] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState<string>("");
    const [isTyping, setIsTyping] = useState<boolean>(false);

    const [client, setClient] = useState<StreamChat | null>(null);
    const [channel, setChannel] = useState<Channel | null>(null);

    const [showScrollButton, setShowScrollButton] = useState<boolean>(false);

    const [vidoeCallId, setVideoCallId] = useState<string>("");
    const [showVideoCall, setShowVideoCall] = useState<string>("");
    const [isCallInititor, setIsCallInitiator] = useState(false);

    const [incomingCallId, setIncomingCallId] = useState<string>("");
    const [callerName, setCallerName] = useState<string>("");
    const [showIncomingCall, setIncomingCall] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const messagesContainerRef = useRef<HTMLDivElement>(null);

    const router = useRouter();

    function scrollToBottom() {
        messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
        setShowScrollButton(false);
    }

    function handleScroll() {
        if (messagesContainerRef.current) {
            const { scrollTop, scrollHeight, clientHeight} = messagesContainerRef.current;
            const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
            setShowScrollButton(!isNearBottom);
        }
    }

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        const container = messagesContainerRef.current;

        if (container) {
            container.addEventListener("scroll", handleScroll);
            return () => container.removeEventListener("scroll", handleScroll);
        }
    }, [handleScroll]);

    useEffect(() => {
        setShowVideoCall(false);
        setVideoCallId("");
        setIncomingCall(false);
        setIncomingCallId("");
        setCallerName("");
        setIsCallInitiator(false);


        async function initializeChat(){
            try {
                setError(null);

                const { token, userId, userName, userImage} =
                await getStreamUserToken();
                setCurrentUserId(userId!);

                const chatClient = StreamChat.getInstance(
                    process.env.NEXT_PUBLIC_STREAM_API_KEY!
                );

                await chatClient.connectUser(
                    {
                        id: userId!,
                        name: userName,
                        image: userImage,
                    }, token
                );



                const { channelType, channelId} = await createOrGetChannel(
                    otherUser.id
                );

                // ------- Get the channel --------
                const chatChannel = chatClient.channel(channelType!, channelId);
                await chatChannel.watch();

                // ----- Load existing messages -------
                const state = await chatChannel.query({message: {limit: 250}});


                // ----- Convert stream messages to our format
                const convertedMessages:Message[] = state.messages.map((msg) => ({
                    id: msg.id,
                    text: msg.text || "",
                    sender: msg.user?.id === userId ? "me" : "other",
                    timestamp: new Date(msg.created_at || new Date()),
                    user_id: msg.user?.id || "",
                }));


                setMessages(convertedMessages);

                chatChannel.on("message.new", (event: Event) => {
                    if (event.message) {
                        if (event.message.text?.includes(`📹 Video call invitation.`)) {
                            const customData = event.message as any;

                            if ( customData.caller_id !== userId) {
                                setIncomingCallId(customData.call_id);
                                setCallerName(customData.caller_name || "Unknown");
                                setIncomingCall(true);
                            }
                            return ;
                        }


                        if ( event.message.user?.id !== userId) {
                            const newMsg: Message = {
                                id:
                                text:
                                sender:
                                timestamp:
                                user_id:
                            };


                            setMessages((prev))
                        }
                    }
                })
            } 
        }
    })

}