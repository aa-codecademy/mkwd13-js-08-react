import type { Trip } from "../types/trip.type";

export class TripService {
  static BASE_URL = "http://localhost:3001/api";

  static async getAllTrips(): Promise<Trip[]> {
    try {
      const response = await fetch(`${this.BASE_URL}/trips`);
      return await response.json();
    } catch (error) {
      console.error(`API request failed. Error: ${error}`);
      throw error;
    }
  }

  //   async regularMethod() {
  //     this.BASE_URL;
  //   }
}

// TripService.getAllTrips();

// const tripService = new TripService();

// tripService.getAllTrips();
