import type {
  LoginRequest,
  LoginResponse,
  RegisterResponse,
  RegisterRequest,
  RefreshTokenResponse,
  User,
} from "../types/auth.type";

export class AuthSerice {
  static BASE_URL = "http://localhost:3001/api";

  static getAccessToken() {
    return localStorage.getItem("accessToken");
  }

  // ---- AUTH UTILS ----
  static getUser(): User | null {
    const userStr = localStorage.getItem("user");

    return userStr ? JSON.parse(userStr) : null;
  }

  static isAuthenticated(): boolean {
    return !!this.getUser() && !!localStorage.getItem("accessToken");
  }

  static clearTokens() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
  }
  // ---- AUTH API CALLS ---
  static async login(data: LoginRequest) {
    try {
      const response = await fetch(`${this.BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const authResponse: LoginResponse = await response.json();

      // TODO: Move this lines in smaller function
      localStorage.setItem("accessToken", authResponse.accessToken);
      localStorage.setItem("refreshToken", authResponse.refreshToken);
      localStorage.setItem("user", JSON.stringify(authResponse.user));

      return authResponse;
    } catch (error) {
      console.error("Login error", error);
      throw error;
    }
  }

  static async register(data: RegisterRequest) {
    try {
      const response = await fetch(`${this.BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const registerResponse: RegisterResponse = await response.json();

      return registerResponse;
    } catch (error) {
      console.error("Register failed", error); // TODO: Show toaster if error happened
      throw error;
    }
  }

  static async refreshToken() {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) {
        throw new Error("No refresh token available.");
      }

      const response = await fetch(`${this.BASE_URL}/auth/refresh`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken }),
      });

      const result: RefreshTokenResponse = await response.json();

      localStorage.setItem("accessToken", result.accessToken);

      return result;
    } catch (error) {
      console.error("Token refresh error", error);
      throw error;
    }
  }

  static async logout() {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) {
        throw new Error("No refresh token available.");
      }

      await fetch(`${this.BASE_URL}/auth/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken }),
      });
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      this.clearTokens();
    }
  }
}
