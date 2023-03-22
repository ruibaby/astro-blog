import {
  ApiConsoleHaloRunV1alpha1PostApi,
  ApiConsoleHaloRunV1alpha1SinglePageApi,
  ApiConsoleHaloRunV1alpha1ThemeApi,
  ApiConsoleHaloRunV1alpha1UserApi,
  ContentHaloRunV1alpha1CategoryApi,
  ContentHaloRunV1alpha1PostApi,
  ContentHaloRunV1alpha1TagApi,
  ContentHaloRunV1alpha1SinglePageApi,
  ThemeHaloRunV1alpha1ThemeApi,
} from "@halo-dev/api-client";
import type { AxiosError, AxiosInstance } from "axios";
import axios from "axios";

const baseURL = import.meta.env.VITE_URL;

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
  auth: {
    username: import.meta.env.VITE_USERNAME,
    password: import.meta.env.VITE_PASSWORD,
  },
});

export interface ProblemDetail {
  detail: string;
  instance: string;
  status: number;
  title: string;
  type?: string;
}

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError<ProblemDetail>) => {
    if (/Network Error/.test(error.message)) {
      return Promise.reject(error);
    }

    const errorResponse = error.response;

    if (!errorResponse) {
      return Promise.reject(error);
    }

    const { status } = errorResponse;

    const { title } = errorResponse.data;

    if (status === 400) {
    } else if (status === 401) {
    } else if (status === 403) {
    } else if (status === 404) {
    } else if (status === 500) {
    } else {
    }

    return Promise.reject(error);
  }
);

axiosInstance.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

const apiClient = setupApiClient(axiosInstance);

function setupApiClient(axios: AxiosInstance) {
  return {
    extension: {
      theme: new ThemeHaloRunV1alpha1ThemeApi(undefined, baseURL, axios),
      post: new ContentHaloRunV1alpha1PostApi(undefined, baseURL, axios),
      singlePage: new ContentHaloRunV1alpha1SinglePageApi(
        undefined,
        baseURL,
        axios
      ),
      category: new ContentHaloRunV1alpha1CategoryApi(
        undefined,
        baseURL,
        axios
      ),
      tag: new ContentHaloRunV1alpha1TagApi(undefined, baseURL, axios),
    },
    user: new ApiConsoleHaloRunV1alpha1UserApi(undefined, baseURL, axios),
    theme: new ApiConsoleHaloRunV1alpha1ThemeApi(undefined, baseURL, axios),
    post: new ApiConsoleHaloRunV1alpha1PostApi(undefined, baseURL, axios),
    singlePage: new ApiConsoleHaloRunV1alpha1SinglePageApi(
      undefined,
      baseURL,
      axios
    ),
  };
}

export { apiClient };
