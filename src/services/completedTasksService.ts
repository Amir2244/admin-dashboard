// import axios from 'axios';

export interface CompletedTask {
  id: string;
  title: string;
  description: string;
  completedBy: string;
  completionDate: string;
  price: number;
  rating?: number;
  feedback?: string;
}

export const completedTasksService = {
  // Get all completed tasks
  getCompletedTasks: async (): Promise<CompletedTask[]> => {
    /* 
    try {
      const response = await axios.get('/api/tasks/completed');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch completed tasks');
    }
    */

    return [
      {
        id: '1',
        title: 'E-commerce Platform Development',
        description: 'Full-stack e-commerce solution with payment integration',
        completedBy: 'Tech Team A',
        completionDate: '2024-01-15',
        price: 5000,
        rating: 5,
        feedback: 'Excellent work and on-time delivery'
      },
      {
        id: '2',
        title: 'SEO Optimization',
        description: 'Website optimization and SEO implementation',
        completedBy: 'Digital Marketing Team',
        completionDate: '2024-01-18',
        price: 1500,
        rating: 4,
        feedback: 'Great results in search rankings'
      }
    ];
  },

  // Start chat about completed task
  initiateChat: async (taskId: string): Promise<{ chatId: string }> => {
    /* 
    try {
      const response = await axios.post(`/api/tasks/completed/${taskId}/chat`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to initiate chat');
    }
    */

    return {
      chatId: `chat_${taskId}_${Date.now()}`
    };
  },

  // Cancel task completion
  cancelCompletion: async (taskId: string): Promise<CompletedTask> => {
    /* 
    try {
      const response = await axios.post(`/api/tasks/completed/${taskId}/cancel`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to cancel completion');
    }
    */

    return {
      id: taskId,
      title: 'Reverted Task',
      description: 'Task completion status reverted',
      completedBy: 'Tech Team A',
      completionDate: new Date().toISOString(),
      price: 3000,
      rating: 0,
      feedback: ''
    };
  },
  // Delete completed task
  deleteCompletedTask: async (taskId: string): Promise<boolean> => {
    /* 
    try {
      await axios.delete(`/api/tasks/completed/${taskId}`);
      return true;
    } catch (error) {
      throw new Error('Failed to delete completed task');
    }
    */

    return true;
  }
};
