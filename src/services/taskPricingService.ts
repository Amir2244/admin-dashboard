// import axios from 'axios';

export interface TaskPrice {
  id: string;
  taskType: string;
  basePrice: number;
  salePrice: number;
  purchasePrice: number;
  currency: string;
  lastUpdated: string;
}

export const taskPricingService = {
  // Get all task type prices
  getTaskPrices: async (): Promise<TaskPrice[]> => {
    /* 
    try {
      const response = await axios.get('/api/tasks/pricing');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch task prices');
    }
    */

    return [
      {
        id: '1',
        taskType: 'Development',
        basePrice: 1000,
        salePrice: 950,
        purchasePrice: 1100,
        currency: 'USD',
        lastUpdated: '2024-01-20'
      },
      {
        id: '2',
        taskType: 'Design',
        basePrice: 500,
        salePrice: 475,
        purchasePrice: 550,
        currency: 'USD',
        lastUpdated: '2024-01-21'
      }
    ];
  },

  // Set task type price on sale
  setTaskSalePrice: async (taskTypeId: string, price: number): Promise<TaskPrice> => {
    /* 
    try {
      const response = await axios.put(`/api/tasks/pricing/${taskTypeId}/sale`, { price });
      return response.data;
    } catch (error) {
      throw new Error('Failed to update sale price');
    }
    */

    return {
      id: taskTypeId,
      taskType: 'Development',
      basePrice: 1000,
      salePrice: price,
      purchasePrice: 1100,
      currency: 'USD',
      lastUpdated: new Date().toISOString()
    };
  },

  // Set task type price on purchase
  setTaskPurchasePrice: async (taskTypeId: string, price: number): Promise<TaskPrice> => {
    /* 
    try {
      const response = await axios.put(`/api/tasks/pricing/${taskTypeId}/purchase`, { price });
      return response.data;
    } catch (error) {
      throw new Error('Failed to update purchase price');
    }
    */

    return {
      id: taskTypeId,
      taskType: 'Development',
      basePrice: 1000,
      salePrice: 950,
      purchasePrice: price,
      currency: 'USD',
      lastUpdated: new Date().toISOString()
    };
  }
};
