import type {
  Trip,
  TripCreationProps,
  UpdateTripProps,
} from "../types/trip.type";

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

  static async createTrip(
    tripCreationProps: TripCreationProps
  ): Promise<Trip | undefined> {
    try {
      const response = await fetch(`${this.BASE_URL}/trips`, {
        method: "POST", // Default GET,
        body: JSON.stringify(tripCreationProps),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("response", response);

      // With FETCH we won't enter the catch block if there is no NETWORK error.
      // Meaning if status code is 400 we gonna still remain in the try block.
      if (response.status === 403) {
        // user is not authenticated
        // do something
      }

      // With FETCH we won't enter the catch block if there is no NETWORK error.
      // Meaning if status code is 400 we gonna still remain in the try block.
      if (response.status === 400) {
        // do something else: BAD REQUEST
        // Todo: Create a better UX if there is BAD REQUEST
      }

      // Response is OK if status is between 200-299
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error(`API request failed. Error: ${error}`);
      throw error;
    }
  }

  static async deleteTrip(id: string) {
    try {
      const response = await fetch(`${this.BASE_URL}/trips/${id}`, {
        method: "DELETE",
      });
      return await response.json();
    } catch (error) {
      console.error(`API request failed. Error: ${error}`);
      throw error;
    }
  }

  static async getTripById(id: string) {
    try {
      const response = await fetch(`${this.BASE_URL}/trips/${id}`);

      return await response.json();
    } catch (error) {
      console.error(`API request failed. Error: ${error}`);
      throw error;
    }
  }

  static async updateTrip(
    id: string,
    updateTripProps: UpdateTripProps
  ): Promise<Trip | undefined> {
    try {
      const response = await fetch(`${this.BASE_URL}/trips/${id}`, {
        method: "PUT",
        body: JSON.stringify(updateTripProps),
        headers: {
          "Content-Type": "application/json",
        },
      });

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
