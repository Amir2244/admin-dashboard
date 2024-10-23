// import axios from 'axios';

export interface Bill {
  id: string;
  billNumber: string;
  clientName: string;
  amount: number;
  currency: string;
  issueDate: string;
  dueDate: string;
  status: 'paid' | 'pending' | 'overdue';
  items: BillItem[];
}

interface BillItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export const billsService = {
  // Export bill as PDF
  exportAsPDF: async (billId: string): Promise<{ url: string }> => {
    /* 
    try {
      const response = await axios.get(`/api/bills/${billId}/export-pdf`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to export bill as PDF');
    }
    */

    return {
      url: `https://example.com/bills/${billId}.pdf`
    };
  },

  // Delete bill
  deleteBill: async (billId: string): Promise<boolean> => {
    /* 
    try {
      await axios.delete(`/api/bills/${billId}`);
      return true;
    } catch (error) {
      throw new Error('Failed to delete bill');
    }
    */

    return true;
  },

  // Edit bill
  editBill: async (billId: string, updates: Partial<Bill>): Promise<Bill> => {
    /* 
    try {
      const response = await axios.put(`/api/bills/${billId}`, updates);
      return response.data;
    } catch (error) {
      throw new Error('Failed to update bill');
    }
    */

    return {
      id: billId,
      billNumber: 'BILL-2024-001',
      clientName: updates.clientName || 'Updated Client',
      amount: updates.amount || 1500,
      currency: 'USD',
      issueDate: '2024-01-20',
      dueDate: '2024-02-20',
      status: 'pending',
      items: [
        {
          id: '1',
          description: 'Development Services',
          quantity: 1,
          unitPrice: 1500,
          total: 1500
        }
      ]
    };
  },

  // Send bill
  sendBill: async (billId: string, recipientEmail: string): Promise<{ success: boolean, sentDate: string }> => {
    /* 
    try {
      const response = await axios.post(`/api/bills/${billId}/send`, { recipientEmail });
      return response.data;
    } catch (error) {
      throw new Error('Failed to send bill');
    }
    */

    return {
      success: true,
      sentDate: new Date().toISOString()
    };
  },

  // Create new bill
  createBill: async (billData: Omit<Bill, 'id'>): Promise<Bill> => {
    /* 
    try {
      const response = await axios.post('/api/bills', billData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to create bill');
    }
    */

    return {
      id: `bill_${Date.now()}`,
      billNumber: `BILL-2024-${Math.floor(Math.random() * 1000)}`,
      clientName: billData.clientName,
      amount: billData.amount,
      currency: billData.currency,
      issueDate: new Date().toISOString(),
      dueDate: billData.dueDate,
      status: 'pending',
      items: billData.items
    };
  }
};
