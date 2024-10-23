// import axios from 'axios';

export interface UrgentTask {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'critical',
  deadline: string;
  budget: number;
  status: string;
  publishedDate: string;
  notificationsSent: number;
}

export const urgentTasksService = {
  // Get all urgent tasks
  getUrgentTasks: async (): Promise<UrgentTask[]> => {
    /* 
    try {
      const response = await axios.get('/api/tasks/urgent');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch urgent tasks');
    }
    */

    return [
      {
        id: '1',
        title: 'Critical Server Maintenance',
        description: 'Immediate server maintenance required for production environment',
        priority: 'critical',
        deadline: '2024-01-23',
        budget: 2000,
        status: 'active',
        publishedDate: '2024-01-22',
        notificationsSent: 50
      },
      {
        id: '2',
        title: 'Security Patch Implementation',
        description: 'Urgent security update needed across all systems',
        priority: 'high',
        deadline: '2024-01-24',
        budget: 1500,
        status: 'pending',
        publishedDate: '2024-01-22',
        notificationsSent: 25
      }
    ];
  },

  // Send publication notice to all users
  sendPublicationNotice: async (taskId: string): Promise<{ success: boolean, notificationsSent: number }> => {
    /* 
    try {
      const response = await axios.post(`/api/tasks/urgent/${taskId}/notify-all`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to send publication notice');
    }
    */

    return {
      success: true,
      notificationsSent: 100
    };
  },

  // Start chat for urgent task
  initiateUrgentChat: async (taskId: string): Promise<{ chatId: string }> => {
    /* 
    try {
      const response = await axios.post(`/api/tasks/urgent/${taskId}/chat`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to initiate urgent chat');
    }
    */

    return {
      chatId: `urgent_chat_${taskId}_${Date.now()}`
    };
  },

  // Edit urgent task
  editUrgentTask: async (taskId: string, updates: Partial<UrgentTask>): Promise<UrgentTask> => {
    /* 
    try {
      const response = await axios.put(`/api/tasks/urgent/${taskId}`, updates);
      return response.data;
    } catch (error) {
      throw new Error('Failed to update urgent task');
    }
    */

    return {
      id: taskId,
      title: updates.title || 'Updated Urgent Task',
      description: updates.description || 'Updated description',
      priority: updates.priority || 'critical',
      deadline: updates.deadline || '2024-01-25',
      budget: updates.budget || 2500,
      status: 'updated',
      publishedDate: '2024-01-22',
      notificationsSent: 75
    };
  },

  // Delete urgent task
  deleteUrgentTask: async (taskId: string): Promise<boolean> => {
    /* 
    try {
      await axios.delete(`/api/tasks/urgent/${taskId}`);
      return true;
    } catch (error) {
      throw new Error('Failed to delete urgent task');
    }
    */

    return true;
  }
};
