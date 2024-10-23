// import axios from 'axios';

export interface SoldTask {
  id: string;
  title: string;
  price: number;
  buyer: string;
  seller: string;
  status: string;
  completionDate: string;
}

export const soldTasksService = {
  // Get all sold tasks
  getSoldTasks: async (): Promise<SoldTask[]> => {
    // Actual API call (commented out until backend is ready)
    /* 
    try {
      const response = await axios.get('/api/tasks/sold');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch sold tasks');
    }
    */

    // Fake data return
    return [
      {
        id: '1',
        title: 'Website Development',
        price: 1500,
        buyer: 'John Doe',
        seller: 'Jane Smith',
        status: 'completed',
        completionDate: '2024-01-15'
      },
      {
        id: '2',
        title: 'Logo Design',
        price: 500,
        buyer: 'Mike Johnson',
        seller: 'Sarah Wilson',
        status: 'in_progress',
        completionDate: '2024-02-01'
      }
    ];
  },

  // Edit sold task
  editSoldTask: async (taskId: string, updates: Partial<SoldTask>): Promise<SoldTask> => {
    /* 
    try {
      const response = await axios.put(`/api/tasks/sold/${taskId}`, updates);
      return response.data;
    } catch (error) {
      throw new Error('Failed to update sold task');
    }
    */

    return {
      id: taskId,
      title: updates.title || 'Updated Task',
      price: updates.price || 2000,
      buyer: 'John Doe',
      seller: 'Jane Smith',
      status: updates.status || 'modified',
      completionDate: '2024-01-20'
    };
  },

  // Delete sold task
  deleteSoldTask: async (taskId: string): Promise<boolean> => {
    /* 
    try {
      await axios.delete(`/api/tasks/sold/${taskId}`);
      return true;
    } catch (error) {
      throw new Error('Failed to delete sold task');
    }
    */

    return true;
  },

  // Cancel sale
  cancelSale: async (taskId: string): Promise<SoldTask> => {
    /* 
    try {
      const response = await axios.post(`/api/tasks/sold/${taskId}/cancel`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to cancel sale');
    }
    */

    return {
      id: taskId,
      title: 'Cancelled Task',
      price: 1000,
      buyer: 'None',
      seller: 'Jane Smith',
      status: 'cancelled',
      completionDate: ''
    };
  },

  // Complete task
  completeTask: async (taskId: string): Promise<SoldTask> => {
    /* 
    try {
      const response = await axios.post(`/api/tasks/sold/${taskId}/complete`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to complete task');
    }
    */

    return {
      id: taskId,
      title: 'Completed Task',
      price: 1500,
      buyer: 'John Doe',
      seller: 'Jane Smith',
      status: 'completed',
      completionDate: new Date().toISOString()
    };
  },

  // Freeze task
  freezeTask: async (taskId: string): Promise<SoldTask> => {
    /* 
    try {
      const response = await axios.post(`/api/tasks/sold/${taskId}/freeze`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to freeze task');
    }
    */

    return {
      id: taskId,
      title: 'Frozen Task',
      price: 1500,
      buyer: 'John Doe',
      seller: 'Jane Smith',
      status: 'frozen',
      completionDate: '2024-01-15'
    };
  }
};
