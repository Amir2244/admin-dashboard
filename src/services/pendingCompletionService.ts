// import axios from 'axios';

export interface PendingCompletionTask {
  id: string;
  title: string;
  description: string;
  submittedBy: string;
  submissionDate: string;
  status: 'pending' | 'approved' | 'rejected';
  evidence?: string;
}

export const pendingCompletionService = {
  // Get all pending completion tasks
  getPendingTasks: async (): Promise<PendingCompletionTask[]> => {
    /* 
    try {
      const response = await axios.get('/api/tasks/pending-completion');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch pending completion tasks');
    }
    */

    return [
      {
        id: '1',
        title: 'Mobile App Development',
        description: 'React Native app with authentication',
        submittedBy: 'Developer A',
        submissionDate: '2024-01-20',
        status: 'pending',
        evidence: 'github.com/repo-link'
      },
      {
        id: '2',
        title: 'Database Migration',
        description: 'PostgreSQL migration completed',
        submittedBy: 'Developer B',
        submissionDate: '2024-01-21',
        status: 'pending'
      }
    ];
  },

  // Confirm task completion
  confirmCompletion: async (taskId: string): Promise<PendingCompletionTask> => {
    /* 
    try {
      const response = await axios.post(`/api/tasks/pending-completion/${taskId}/confirm`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to confirm task completion');
    }
    */

    return {
      id: taskId,
      title: 'Confirmed Task',
      description: 'Task completion confirmed',
      submittedBy: 'Developer A',
      submissionDate: '2024-01-20',
      status: 'approved'
    };
  },

  // Reject completion request
  rejectCompletion: async (taskId: string, reason: string): Promise<PendingCompletionTask> => {
    /* 
    try {
      const response = await axios.post(`/api/tasks/pending-completion/${taskId}/reject`, { reason });
      return response.data;
    } catch (error) {
      throw new Error('Failed to reject completion request');
    }
    */

    return {
      id: taskId,
      title: 'Rejected Task',
      description: 'Task completion rejected',
      submittedBy: 'Developer A',
      submissionDate: '2024-01-20',
      status: 'rejected'
    };
  },

  // Edit pending task
  editPendingTask: async (taskId: string, updates: Partial<PendingCompletionTask>): Promise<PendingCompletionTask> => {
    /* 
    try {
      const response = await axios.put(`/api/tasks/pending-completion/${taskId}`, updates);
      return response.data;
    } catch (error) {
      throw new Error('Failed to update pending task');
    }
    */

    return {
      id: taskId,
      title: updates.title || 'Updated Task',
      description: updates.description || 'Updated description',
      submittedBy: 'Developer A',
      submissionDate: '2024-01-20',
      status: 'pending'
    };
  },

  // Delete pending task
  deletePendingTask: async (taskId: string): Promise<boolean> => {
    /* 
    try {
      await axios.delete(`/api/tasks/pending-completion/${taskId}`);
      return true;
    } catch (error) {
      throw new Error('Failed to delete pending task');
    }
    */

    return true;
  }
};
