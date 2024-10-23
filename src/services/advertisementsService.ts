// advertisementService.ts

import axios, { AxiosResponse } from 'axios';
import { Advertisement } from '@/types/BackendModels';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseenter = Swal.resumeTimer;
  }
});
// Base URL for the API (set a placeholder)
const BASE_URL = 'https://api.example.com/advertisements'; 

export class AdvertisementService {
    // Get paginated advertisements
    public async getPaginated(page: number, pageSize: number): Promise<{ data: Advertisement[], total: number }> {
        // API call would be here, returning dummy data for now
        /*
        const response: AxiosResponse = await axios.get(`${BASE_URL}?page=${page}&pageSize=${pageSize}`);
        return response.data;
        */
        return {
            data: [
                {
                    Id: 'guid-123',
                    Title: 'Ad 1',
                    Description: 'Description of Ad 1',
                    ImageUrl: 'https://example.com/image1.jpg',
                    StartDate: new Date(),
                    EndDate: new Date(),
                    IsActive: true,
                },
                {
                    Id: 'guid-456',
                    Title: 'Ad 2',
                    Description: 'Description of Ad 2',
                    ImageUrl: 'https://example.com/image2.jpg',
                    StartDate: new Date(),
                    EndDate: new Date(),
                    IsActive: false,
                }
            ],
            total: 2
        };
    }

    // Add a new advertisement
    public async addAdvertisement(ad: Omit<Advertisement, 'Id'>): Promise<Advertisement> {
        // API call would be here
        /*
        const response: AxiosResponse = await axios.post(`${BASE_URL}`, ad);
        return response.data;
        */
        Toast.fire({
            icon: "success",
            title: "Advertisement added successfully"
        });
        return { 
            Id: 'dummy-id-789', 
            ...ad 
        };
    }

    // Delete an advertisement by ID
    public async deleteAdvertisement(id: string): Promise<boolean> {
        // API call would be here
        /*
        const response: AxiosResponse = await axios.delete(`${BASE_URL}/${id}`);
        return response.status === 200;
        */
        Toast.fire({
            icon: "success", 
            title: "Advertisement deleted successfully"
        });
        return true; // Returning true to indicate success for now
    }

    // Pause or resume the display of an advertisement
    public async pauseDisplay(id: string, isPaused: boolean): Promise<Advertisement> {
        // API call would be here
        /*
        const response: AxiosResponse = await axios.patch(`${BASE_URL}/${id}`, { isActive: !isPaused });
        return response.data;
        */
        Toast.fire({
            icon: "success",
            title: isPaused ? "Advertisement paused successfully" : "Advertisement resumed successfully"
        });
        return {
            Id: id,
            Title: 'Dummy Ad',
            Description: 'Paused or resumed ad',
            ImageUrl: 'https://example.com/dummy.jpg',
            StartDate: new Date(),
            EndDate: new Date(),
            IsActive: !isPaused
        };
    }

    // Change the ad's duration (StartDate and EndDate)
    public async changeAdDuration(id: string, startDate: Date, endDate: Date): Promise<Advertisement> {
        // API call would be here
        /*
        const response: AxiosResponse = await axios.patch(`${BASE_URL}/${id}`, { StartDate: startDate, EndDate: endDate });
        return response.data;
        */
        Toast.fire({
            icon: "success",
            title: "Advertisement duration updated successfully"
        });
        return {
            Id: id,
            Title: 'Dummy Ad',
            Description: 'Ad with updated duration',
            ImageUrl: 'https://example.com/dummy.jpg',
            StartDate: startDate,
            EndDate: endDate,
            IsActive: true
        };
    }
}

// Usage example
const adService = new AdvertisementService();

// You can now call methods like:
// adService.getPaginated(1, 10);
// adService.addAdvertisement({...});
// adService.deleteAdvertisement('id');
// adService.pauseDisplay('id', true);
// adService.changeAdDuration('id', new Date(), new Date());
