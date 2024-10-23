// import axios from 'axios';

export interface EmailSection {
  id: string;
  name: string;
  totalEmails: number;
  unreadCount: number;
  lastUpdated: string;
}

export interface TaskEmail {
  id: string;
  taskId: string;
  subject: string;
  content: string;
  sender: string;
  receivedDate: string;
  isRead: boolean;
  attachments: Attachment[];
}

export interface Attachment {
  id: string;
  fileName: string;
  fileSize: number;
  fileType: string;
  url: string;
}

export const emailSectionsService = {
  // Get My Purchased Tasks Section
  getPurchasedTasksSection: async (): Promise<{ section: EmailSection; emails: TaskEmail[] }> => {
    /* 
    try {
      const response = await axios.get('/api/email-sections/purchased-tasks');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch purchased tasks section');
    }
    */

    return {
      section: {
        id: 'purchased_tasks',
        name: 'My Purchased Tasks',
        totalEmails: 25,
        unreadCount: 3,
        lastUpdated: '2024-01-20T12:00:00Z'
      },
      emails: [
        {
          id: '1',
          taskId: 'task_123',
          subject: 'Task Delivery Confirmation',
          content: 'Your purchased task has been delivered',
          sender: 'seller@platform.com',
          receivedDate: '2024-01-20T10:00:00Z',
          isRead: false,
          attachments: [
            {
              id: 'att_1',
              fileName: 'deliverable.zip',
              fileSize: 1024000,
              fileType: 'application/zip',
              url: 'https://storage.example.com/files/deliverable.zip'
            }
          ]
        }
      ]
    };
  },

  // Get My Listed Tasks Section
  getListedTasksSection: async (): Promise<{ section: EmailSection; emails: TaskEmail[] }> => {
    /* 
    try {
      const response = await axios.get('/api/email-sections/listed-tasks');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch listed tasks section');
    }
    */

    return {
      section: {
        id: 'listed_tasks',
        name: 'My Listed Tasks',
        totalEmails: 15,
        unreadCount: 2,
        lastUpdated: '2024-01-20T11:30:00Z'
      },
      emails: [
        {
          id: '2',
          taskId: 'task_456',
          subject: 'New Task Inquiry',
          content: 'Someone is interested in your task',
          sender: 'buyer@platform.com',
          receivedDate: '2024-01-20T09:30:00Z',
          isRead: false,
          attachments: []
        }
      ]
    };
  },

  // Mark Section as Read
  markSectionAsRead: async (sectionId: string): Promise<boolean> => {
    /* 
    try {
      const response = await axios.put(`/api/email-sections/${sectionId}/mark-read`);
      return response.data.success;
    } catch (error) {
      throw new Error('Failed to mark section as read');
    }
    */

    return true;
  }
};
