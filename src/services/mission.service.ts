import { Mission } from '../types/mission.types';

export class MissionService {
  private static dummyData: Mission[] = [
    {
      id: '550e8400-e29b-41d4-a716-446655440000',
      type: 'Delivery',
      missionResponsible: 'John Doe',
      missionResponsibleNumber: '+1234567890',
      fromAddress: '123 Start Street',
      toAddress: '456 End Avenue',
      city: 'New York',
      price: 150.00,
      executeDateTime: '2024-01-20T10:00:00',
      state: 'Pending',
      description: 'Urgent package delivery',
      sellerId: '661e8400-e29b-41d4-a716-446655440001',
      buyerId: '772e8400-e29b-41d4-a716-446655440002'
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440003',
      type: 'Pickup',
      missionResponsible: 'Jane Smith',
      missionResponsibleNumber: '+1987654321',
      fromAddress: '789 Origin Road',
      toAddress: '321 Destination Blvd',
      city: 'Los Angeles',
      price: 200.00,
      executeDateTime: '2024-01-21T14:30:00',
      state: 'In Progress',
      description: 'Fragile items pickup',
      sellerId: '661e8400-e29b-41d4-a716-446655440004',
      buyerId: '772e8400-e29b-41d4-a716-446655440005'
    }
  ];

  static async getAllMissions(): Promise<Mission[]> {
    // Simulate API call delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.dummyData);
      }, 1000);
    });
  }

  static async getMissionById(id: string): Promise<Mission | undefined> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const mission = this.dummyData.find(m => m.id === id);
        resolve(mission);
      }, 1000);
    });
  }

  static async createMission(mission: Omit<Mission, 'id'>): Promise<Mission> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newMission = {
          ...mission,
          id: crypto.randomUUID()
        };
        this.dummyData.push(newMission);
        resolve(newMission);
      }, 1000);
    });
  }

  static async updateMission(id: string, mission: Partial<Mission>): Promise<Mission | undefined> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = this.dummyData.findIndex(m => m.id === id);
        if (index !== -1) {
          this.dummyData[index] = { ...this.dummyData[index], ...mission };
          resolve(this.dummyData[index]);
        }
        resolve(undefined);
      }, 1000);
    });
  }

  static async deleteMission(id: string): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = this.dummyData.findIndex(m => m.id === id);
        if (index !== -1) {
          this.dummyData.splice(index, 1);
          resolve(true);
        }
        resolve(false);
      }, 1000);
    });
  }
}
