import axios from "axios";
import { toast } from 'react-toastify';
const BASE_URL = "http://localhost:8080";

const axiosWithOutToken = {
  "Content-Type": "application/json",
};

const handleResponse = (response) => {
  return {
    status : "success",
    response
  };
};

const handleRequestError = (response) => {
  const { status, data } = response?.response || {};
  const errorMap = {
    400: {
      message: data?.response || "Bad request",
      type: "error"
    },
    409: {
      message: "Duplicate Entry",
      type: "error"
    },
    500: {
      message: "Internal server error",
      type: "error"
    },

    502: {
      message: "Internal server error",
      type: "error"
    },
    504: {
      message: "Oops! Something went wrong",
      type: "error"
    },
    default: {
      message: "An error occurred",
      type: "error"
    }
  };

  const error = errorMap[status] || errorMap.default;
  toast("error")
  console.log(error.message, error.type);

  return { response, status: "error" };
};


const apiInstanceWithoutToken = axios.create({
  baseURL: BASE_URL,
  headers: axiosWithOutToken,
  withCredentials: true,
});

apiInstanceWithoutToken.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    if (error.response && error.response.data && error.response) {
      return error.response;
    }
    return Promise.reject(error);
  }
);

apiInstanceWithoutToken.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.data && error.response) {
      return error.response;
    }
    return Promise.reject(error);
  }
);

const getWithoutToken = async (url, params) => {
  try {
    const response = await apiInstanceWithoutToken.get(url,  {params} );
    return handleResponse(response);
  } catch (error) {
    handleRequestError(error);
  }
};

const postWithoutToken = async (url, data, params = {}, extraHeaders = {}) => {
  try {
    const response = await apiInstanceWithoutToken.post(url, data, {
      params,
      headers: extraHeaders,
    });
    return handleResponse(response);
  } catch (error) {
    console.log(error);
    return handleRequestError(error);
  }
};

const patchWithoutToken = async (url, data, params) => {
  try {
    const response = await apiInstanceWithoutToken.patch(url, data, { params });
    return handleResponse(response);
  } catch (error) {
    return handleRequestError(error);
  }
};

const remove = async (url, params) => {
  try {
    const response = await apiInstanceWithoutToken.delete(url, { params });
    return handleResponse(response);
  } catch (error) {
    return handleRequestError(error);
  }
};

export { remove, postWithoutToken, getWithoutToken, patchWithoutToken };
