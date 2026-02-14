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
    const 
}