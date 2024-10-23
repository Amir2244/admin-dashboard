// import axios from 'axios';

export interface Chat {
  id: string;
  participants: string[];
  messages: ChatMessage[];
  createdAt: string;
  lastActivity: string;
  status: 'active' | 'suspended' | 'archived';
}

interface ChatMessage {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  isRead: boolean;
}

export const chatsService = {
  // View chat conversation
  viewChat: async (chatId: string): Promise<Chat> => {
    /* 
    try {
      const response = await axios.get(`/api/chats/${chatId}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch chat');
    }
    */

    return {
      id: chatId,
      participants: ['user1', 'user2'],
      messages: [
        {
          id: '1',
          senderId: 'user1',
          content: 'Hello, how can I help you?',
          timestamp: '2024-01-20T10:00:00Z',
          isRead: true
        },
        {
          id: '2',
          senderId: 'user2',
          content: 'I have a question about the task',
          timestamp: '2024-01-20T10:01:00Z',
          isRead: true
        }
      ],
      createdAt: '2024-01-20T10:00:00Z',
      lastActivity: '2024-01-20T10:01:00Z',
      status: 'active'
    };
  },

  // Delete chat
  deleteChat: async (chatId: string): Promise<boolean> => {
    /* 
    try {
      await axios.delete(`/api/chats/${chatId}`);
      return true;
    } catch (error) {
      throw new Error('Failed to delete chat');
    }
    */

    return true;
  },

  // Temporarily suspend chat
  suspendChat: async (chatId: string): Promise<Chat> => {
    /* 
    try {
      const response = await axios.post(`/api/chats/${chatId}/suspend`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to suspend chat');
    }
    */

    return {
      id: chatId,
      participants: ['user1', 'user2'],
      messages: [],
      createdAt: '2024-01-20T10:00:00Z',
      lastActivity: '2024-01-20T10:01:00Z',
      status: 'suspended'
    };
  },

  // Send group message
  sendGroupMessage: async (userIds: string[], message: string): Promise<{ success: boolean, chatId: string }> => {
    /* 
    try {
      const response = await axios.post('/api/chats/group-message', { userIds, message });
      return response.data;
    } catch (error) {
      throw new Error('Failed to send group message');
    }
    */

    return {
      success: true,
      chatId: `group_${Date.now()}`
    };
  }
};
