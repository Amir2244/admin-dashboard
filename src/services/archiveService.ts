// import axios from 'axios';

export interface ArchivedBill {
  id: string;
  billNumber: string;
  amount: number;
  clientName: string;
  archiveDate: string;
  originalDate: string;
}

export interface ArchivedTask {
  id: string;
  title: string;
  status: string;
  archiveDate: string;
  completionDate: string;
  value: number;
}

export interface ArchivedChat {
  id: string;
  participants: string[];
  lastMessageDate: string;
  archiveDate: string;
  messageCount: number;
}

export const archiveService = {
  // Get archived bills
  getArchivedBills: async (): Promise<ArchivedBill[]> => {
    /* 
    try {
      const response = await axios.get('/api/archive/bills');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch archived bills');
    }
    */

    return [
      {
        id: '1',
        billNumber: 'BILL-2023-001',
        amount: 1500,
        clientName: 'Tech Corp',
        archiveDate: '2024-01-15',
        originalDate: '2023-12-15'
      },
      {
        id: '2',
        billNumber: 'BILL-2023-002',
        amount: 2500,
        clientName: 'Design Studios',
        archiveDate: '2024-01-16',
        originalDate: '2023-12-16'
      }
    ];
  },

  // Get archived tasks
  getArchivedTasks: async (): Promise<ArchivedTask[]> => {
    /* 
    try {
      const response = await axios.get('/api/archive/tasks');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch archived tasks');
    }
    */

    return [
      {
        id: '1',
        title: 'Website Redesign',
        status: 'completed',
        archiveDate: '2024-01-10',
        completionDate: '2023-12-25',
        value: 3000
      },
      {
        id: '2',
        title: 'Mobile App Development',
        status: 'completed',
        archiveDate: '2024-01-12',
        completionDate: '2023-12-30',
        value: 5000
      }
    ];
  },

  // Get archived chats
  getArchivedChats: async (): Promise<ArchivedChat[]> => {
    /* 
    try {
      const response = await axios.get('/api/archive/chats');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch archived chats');
    }
    */

    return [
      {
        id: '1',
        participants: ['user1', 'user2'],
        lastMessageDate: '2023-12-20',
        archiveDate: '2024-01-05',
        messageCount: 150
      },
      {
        id: '2',
        participants: ['user3', 'user4'],
        lastMessageDate: '2023-12-25',
        archiveDate: '2024-01-10',
        messageCount: 200
      }
    ];
  }
};
