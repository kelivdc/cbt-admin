import type { AuthBindings } from "@refinedev/core";
import { AuthHelper } from "@refinedev/strapi-v4";
import axios from "axios";
import * as cookie from "cookie";
import Cookies from "js-cookie";

import { API_URL, TOKEN_KEY } from "~/constants";

export const axiosInstance = axios.create();
const strapiAuthHelper = AuthHelper(API_URL + "/api");

axiosInstance.interceptors.request.use((request) => {
  const token = Cookies.get(TOKEN_KEY);
  if (token) {
    request.headers = {
      Authorization: `Bearer ${token}`,
    };
  }
  return request;
});

export const authProvider: AuthBindings = {
  login: async ({ email, password }) => {
    // const { data, status } = await strapiAuthHelper.login(email, password);
    try {
      const { data, status } = await strapiAuthHelper.login(email, password);
      const rolenya = await strapiAuthHelper.me(data.jwt, { meta: { populate: "role" } });
      if (rolenya.data.role.name !== "Authenticated") return { error: { name: "Login Error", message: "Invalid credentials" } };
      Cookies.set(TOKEN_KEY, data.jwt);
      // set header axios instance
      axiosInstance.defaults.headers.common = {
        Authorization: `Bearer ${data.jwt}`,
      };

      return {
        success: true,
        redirectTo: "/",
      };
    } catch (error) {
      return {
        success: false,
        error: {
          name: "Login Error",
          message: "Invalid credentials"
        },
      };
    }
    return null;    
  },
  logout: async () => {
    Cookies.remove(TOKEN_KEY);
    return {
      success: true,
      redirectTo: "/login",
    };
  },
  onError: async (error) => {
    console.log('--- onError ---');
    return { error };
  },
  check: async (request) => {
    let token = undefined;
    if (request) {
      const hasCookie = request.headers.get("Cookie");
      if (hasCookie) {
        const parsedCookie = cookie.parse(request.headers.get("Cookie"));
        token = parsedCookie[TOKEN_KEY];
      }
    } else {
      const parsedCookie = Cookies.get(TOKEN_KEY);
      token = parsedCookie ? JSON.parse(parsedCookie) : undefined;
    }

    if (token) {
      axiosInstance.defaults.headers.common = {
        Authorization: `Bearer ${token}`,
      };
      return {
        authenticated: true,
      };
    }

    const { pathname } = new URL(request.url);

    return {
      authenticated: false,
      error: {
        message: "Check failed",
        name: "Unauthenticated",
      },
      logout: true,
      redirectTo: `/login?to=${pathname}`,
    };
  },
  getPermissions: async () => null,
  getIdentity: async () => {
    const token = Cookies.get(TOKEN_KEY);
    if (!token) return null;
    const { data, status } = await strapiAuthHelper.me(token);
    if (status === 200) {
      const { id, username, email } = data;

      return {
        id,
        name: username,
        email,
      };
    }
    return null;
  },
};
