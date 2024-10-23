// import axios from 'axios';

export interface IndividualTask {
  id: string;
  title: string;
  description: string;
  assignee: string;
  status: 'active' | 'completed' | 'archived';
  createdDate: string;
  deadline: string;
  priority: 'low' | 'medium' | 'high';
  budget: number;
  category: string;
}

export const individualTasksService = {
  // View individual task
  viewIndividualTask: async (taskId: string): Promise<IndividualTask> => {
    /* 
    try {
      const response = await axios.get(`/api/individual-tasks/${taskId}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch individual task');
    }
    */

    return {
      id: taskId,
      title: 'Custom Website Development',
      description: 'Build a responsive website for a local business',
      assignee: 'John Developer',
      status: 'active',
      createdDate: '2024-01-15T10:00:00Z',
      deadline: '2024-02-15T23:59:59Z',
      priority: 'high',
      budget: 3000,
      category: 'Development'
    };
  },

  // Convert to normal task
  convertToNormalTask: async (taskId: string): Promise<{ success: boolean, newTaskId: string }> => {
    /* 
    try {
      const response = await axios.post(`/api/individual-tasks/${taskId}/convert`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to convert task');
    }
    */

    return {
      success: true,
      newTaskId: `normal_task_${Date.now()}`
    };
  },

  // Delete to archive
  deleteToArchive: async (taskId: string): Promise<{ success: boolean, archiveId: string }> => {
    /* 
    try {
      const response = await axios.post(`/api/individual-tasks/${taskId}/archive`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to archive task');
    }
    */

    return {
      success: true,
      archiveId: `archive_${taskId}_${Date.now()}`
    };
  },

  // Get all individual tasks
  getAllIndividualTasks: async (): Promise<IndividualTask[]> => {
    /* 
    try {
      const response = await axios.get('/api/individual-tasks');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch individual tasks');
    }
    */

    return [
      {
        id: '1',
        title: 'Mobile App UI Design',
        description: 'Design user interface for iOS application',
        assignee: 'Sarah Designer',
        status: 'active',
        createdDate: '2024-01-10T09:00:00Z',
        deadline: '2024-02-10T23:59:59Z',
        priority: 'medium',
        budget: 2500,
        category: 'Design'
      },
      {
        id: '2',
        title: 'Database Optimization',
        description: 'Optimize database queries for better performance',
        assignee: 'Mike Engineer',
        status: 'completed',
        createdDate: '2024-01-05T08:00:00Z',
        deadline: '2024-01-20T23:59:59Z',
        priority: 'high',
        budget: 1800,
        category: 'Backend'
      }
    ];
  }
};
