// import axios from 'axios';

export interface NotSoldTask {
  id: string;
  title: string;
  description: string;
  price: number;
  publisherId: string;
  createdAt: string;
  status: 'not_sold';
}

export const notSoldTasksService = {
  // Get all not sold tasks
  getNotSoldTasks: async (): Promise<NotSoldTask[]> => {
    // Actual API call (commented until backend is ready)
    /*
    const response = await axios.get('/api/tasks/not-sold');
    return response.data;
    */
    
    // Fake data for development
    return [
      {
        id: '1',
        title: 'Website Development',
        description: 'Create a responsive website using React',
        price: 500,
        publisherId: 'pub123',
        createdAt: '2024-01-15T10:00:00Z',
        status: 'not_sold'
      },
      {
        id: '2',
        title: 'Logo Design',
        description: 'Design modern logo for tech startup',
        price: 200,
        publisherId: 'pub124',
        createdAt: '2024-01-16T15:30:00Z',
        status: 'not_sold'
      }
    ];
  },

  // Buy a task
  buyTask: async (taskId: string): Promise<{ success: boolean; message: string }> => {
    /*
    const response = await axios.post(`/api/tasks/${taskId}/buy`);
    return response.data;
    */
    
    return {
      success: true,
      message: 'Task purchased successfully'
    };
  },

  // Delete a task
  deleteTask: async (taskId: string): Promise<{ success: boolean }> => {
    /*
    await axios.delete(`/api/tasks/${taskId}`);
    return { success: true };
    */
    
    return { success: true };
  },

  // Edit a task
  editTask: async (taskId: string, updates: Partial<NotSoldTask>): Promise<NotSoldTask> => {
    /*
    const response = await axios.put(`/api/tasks/${taskId}`, updates);
    return response.data;
    */
    
    return {
      id: taskId,
      title: updates.title || 'Updated Task',
      description: updates.description || 'Updated description',
      price: updates.price || 300,
      publisherId: 'pub123',
      createdAt: '2024-01-15T10:00:00Z',
      status: 'not_sold'
    };
  },

  // Start chat with publisher
  startChatWithPublisher: async (publisherId: string): Promise<{ chatId: string }> => {
    /*
    const response = await axios.post(`/api/chat/start`, { publisherId });
    return response.data;
    */
    
    return { chatId: `chat_${publisherId}_${Date.now()}` };
  }
};
