// import axios from 'axios';

export interface JobRequest {
  id: string;
  title: string;
  description: string;
  requesterName: string;
  requesterEmail: string;
  status: 'pending' | 'viewed' | 'archived';
  submissionDate: string;
  budget: number;
  skills: string[];
  priority: 'low' | 'medium' | 'high';
}

export const jobRequestsService = {
  // View job request
  viewJobRequest: async (requestId: string): Promise<JobRequest> => {
    /* 
    try {
      const response = await axios.get(`/api/job-requests/${requestId}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch job request');
    }
    */

    return {
      id: requestId,
      title: 'Full Stack Developer Needed',
      description: 'Looking for an experienced developer for a 3-month project',
      requesterName: 'John Smith',
      requesterEmail: 'john@company.com',
      status: 'pending',
      submissionDate: '2024-01-20T10:00:00Z',
      budget: 5000,
      skills: ['React', 'Node.js', 'MongoDB'],
      priority: 'high'
    };
  },

  // Get all job requests
  getAllJobRequests: async (): Promise<JobRequest[]> => {
    /* 
    try {
      const response = await axios.get('/api/job-requests');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch job requests');
    }
    */

    return [
      {
        id: '1',
        title: 'UI/UX Designer Required',
        description: 'Need a designer for mobile app redesign',
        requesterName: 'Sarah Wilson',
        requesterEmail: 'sarah@design.com',
        status: 'pending',
        submissionDate: '2024-01-19T15:00:00Z',
        budget: 3000,
        skills: ['Figma', 'UI Design', 'Mobile Design'],
        priority: 'medium'
      },
      {
        id: '2',
        title: 'Backend Developer Wanted',
        description: 'API development project',
        requesterName: 'Mike Johnson',
        requesterEmail: 'mike@tech.com',
        status: 'viewed',
        submissionDate: '2024-01-18T09:00:00Z',
        budget: 4500,
        skills: ['Python', 'Django', 'PostgreSQL'],
        priority: 'high'
      }
    ];
  },

  // Delete job request
  deleteJobRequest: async (requestId: string): Promise<boolean> => {
    /* 
    try {
      await axios.delete(`/api/job-requests/${requestId}`);
      return true;
    } catch (error) {
      throw new Error('Failed to delete job request');
    }
    */

    return true;
  }
};
