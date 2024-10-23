// import axios from 'axios';

export interface IncomingEmail {
  id: string;
  subject: string;
  sender: string;
  receivedDate: string;
  content: string;
  taskId?: string;
  isRead: boolean;
  category: 'purchased_tasks' | 'listed_tasks';
}

export const incomingEmailsService = {
  // Get purchased tasks emails
  getPurchasedTasksEmails: async (): Promise<IncomingEmail[]> => {
    /* 
    try {
      const response = await axios.get('/api/emails/purchased-tasks');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch purchased tasks emails');
    }
    */

    return [
      {
        id: '1',
        subject: 'Task Purchase Confirmation',
        sender: 'system@taskplatform.com',
        receivedDate: '2024-01-20T10:00:00Z',
        content: 'Your task purchase has been confirmed',
        taskId: 'task_123',
        isRead: false,
        category: 'purchased_tasks'
      },
      {
        id: '2',
        subject: 'Task Update Available',
        sender: 'seller@example.com',
        receivedDate: '2024-01-19T15:30:00Z',
        content: 'New update for your purchased task',
        taskId: 'task_124',
        isRead: true,
        category: 'purchased_tasks'
      }
    ];
  },

  // Get listed tasks emails
  getListedTasksEmails: async (): Promise<IncomingEmail[]> => {
    /* 
    try {
      const response = await axios.get('/api/emails/listed-tasks');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch listed tasks emails');
    }
    */

    return [
      {
        id: '3',
        subject: 'New Inquiry About Your Task',
        sender: 'buyer@example.com',
        receivedDate: '2024-01-20T09:00:00Z',
        content: 'I have a question about your listed task',
        taskId: 'task_789',
        isRead: false,
        category: 'listed_tasks'
      },
      {
        id: '4',
        subject: 'Task Listing Approved',
        sender: 'admin@taskplatform.com',
        receivedDate: '2024-01-18T14:20:00Z',
        content: 'Your task listing has been approved',
        taskId: 'task_790',
        isRead: true,
        category: 'listed_tasks'
      }
    ];
  },

  // View email
  viewEmail: async (emailId: string): Promise<IncomingEmail> => {
    /* 
    try {
      const response = await axios.get(`/api/emails/${emailId}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch email details');
    }
    */

    return {
      id: emailId,
      subject: 'Task Related Communication',
      sender: 'user@example.com',
      receivedDate: '2024-01-20T10:00:00Z',
      content: 'Detailed email content here',
      taskId: 'task_123',
      isRead: true,
      category: 'purchased_tasks'
    };
  },

  // Delete email
  deleteEmail: async (emailId: string): Promise<boolean> => {
    /* 
    try {
      await axios.delete(`/api/emails/${emailId}`);
      return true;
    } catch (error) {
      throw new Error('Failed to delete email');
    }
    */

    return true;
  }
};
