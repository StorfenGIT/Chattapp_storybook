import Chat from './Chat';
import chatData from "./chat.json";

export default {
    title: 'Chat application/Chat',
    component: Chat,
}

export const Default = {
    args: {
        title: 'Chat',
        currentUserId: 1431,
        messages: chatData,
    }
}