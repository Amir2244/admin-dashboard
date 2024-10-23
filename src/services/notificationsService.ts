// import axios from 'axios';

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  timestamp: string;
  isRead: boolean;
  recipients: string[];
}

interface CustomNotification {
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  recipientIds: string[];
}

export const notificationsService = {
  // Get notification details
  getNotificationDetails: async (notificationId: string): Promise<Notification> => {
    /* 
    try {
      const response = await axios.get(`/api/notifications/${notificationId}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch notification details');
    }
    */

    return {
      id: notificationId,
      title: 'System Update',
      message: 'Important system maintenance scheduled for tonight',
      type: 'info',
      timestamp: '2024-01-20T10:00:00Z',
      isRead: false,
      recipients: ['user1', 'user2']
    };
  },

  // Create and send custom notification
  createCustomNotification: async (notification: CustomNotification): Promise<{ success: boolean, notificationIds: string[] }> => {
    /* 
    try {
      const response = await axios.post('/api/notifications/custom', notification);
      return response.data;
    } catch (error) {
      throw new Error('Failed to create and send custom notification');
    }
    */

    return {
      success: true,
      notificationIds: notification.recipientIds.map(id => `notif_${id}_${Date.now()}`)
    };
  },

  // Get all notifications
  getAllNotifications: async (): Promise<Notification[]> => {
    /* 
    try {
      const response = await axios.get('/api/notifications');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch notifications');
    }
    */

    return [
      {
        id: '1',
        title: 'New Task Available',
        message: 'A new high-priority task has been posted',
        type: 'info',
        timestamp: '2024-01-20T09:00:00Z',
        isRead: false,
        recipients: ['all']
      },
      {
        id: '2',
        title: 'System Maintenance',
        message: 'Scheduled maintenance in 2 hours',
        type: 'warning',
        timestamp: '2024-01-20T08:30:00Z',
        isRead: true,
        recipients: ['admin', 'user1']
      }
    ];
  }
};
