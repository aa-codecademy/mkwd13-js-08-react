import type {
  Trip,
  TripCreationProps,
  UpdateTripProps,
} from "../types/trip.type";
import { AuthSerice } from "./auth.service";

export class TripService {
  static BASE_URL = "http://localhost:3001/api";

  private static getAuthHeaders() {
    const accessToken = localStorage.getItem("accessToken");
    console.log("auth headers", accessToken);

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    };

    return headers;
  }

  private static async makeAuthenticatedRequest(
    url: string,
    options: RequestInit = {}
  ) {
    const authHeaders = this.getAuthHeaders();

    let response = await fetch(url, {
      ...options,
      headers: {
        ...authHeaders,
        ...options.headers,
      },
    });

    if (response.status === 401 || response.status === 403) {
      try {
        await AuthSerice.refreshToken();
        const newHeaders = this.getAuthHeaders();
        response = await fetch(url, {
          ...options,
          headers: {
            ...newHeaders,
            ...options.headers,
          },
        });
      } catch (error) {
        AuthSerice.clearTokens();
        window.location.href = "/login";
        throw new Error("Authentication required");
      }
    }

    return response;
  }

  static async getAllTrips(): Promise<Trip[]> {
    try {
      const response = await this.makeAuthenticatedRequest(
        `${this.BASE_URL}/trips`
      );

      if (response.status === 401 || response.status === 403) {
        throw new Error(response.statusText);
        // console.error('Error: ', response.status, response.statusText)
      }

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
      const response = await this.makeAuthenticatedRequest(
        `${this.BASE_URL}/trips`,
        {
          method: "POST", // Default GET,
          body: JSON.stringify(tripCreationProps),
        }
      );

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
      const response = await this.makeAuthenticatedRequest(
        `${this.BASE_URL}/trips/${id}`,
        {
          method: "DELETE",
        }
      );
      return await response.json();
    } catch (error) {
      console.error(`API request failed. Error: ${error}`);
      throw error;
    }
  }

  static async getTripById(id: string) {
    try {
      const response = await this.makeAuthenticatedRequest(
        `${this.BASE_URL}/trips/${id}`
      );

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
      const response = await this.makeAuthenticatedRequest(
        `${this.BASE_URL}/trips/${id}`,
        {
          method: "PUT",
          body: JSON.stringify(updateTripProps),
        }
      );

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
