import axios from "axios";
import { toast } from 'react-toastify';

import { Urls } from "constants/api";
import { apiResponsesMessage } from "constants/api";
import { defaultToast } from "constants/toast";
import { IUserData, IProductsResponse } from "types/api";

export const instance = axios.create({
   baseURL: Urls.base_url,
   withCredentials: true,
});

export const products = {
   getProducts: async () => {
      try {
         const response = await instance.get<IProductsResponse>(Urls.products);

         return response.data.products;
      } catch (error: any) {
         toast.warn(apiResponsesMessage.unexpected, defaultToast);
         return [];
      }
   },
};

export const user = {
   checkAuth: async () => {
      try {
         const response = await instance.get(Urls.user);

         return response.data.message;
      } catch (error: any) {
         if (error.response?.status === 401) {
            return error.response.data.message;
         }

         toast.warn(apiResponsesMessage.unexpected, defaultToast);
         return apiResponsesMessage.unexpected;
      }
   },

   authUser: async (data: IUserData) => {
      try {
         const response = await instance.post(Urls.userAuth, { ...data }, {
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
         });

         return response.data.message;
      } catch (error: any) {
         if (error.response?.status === 401) {
            toast.warn(error.response.data.message, defaultToast);
            return error.response.data.message;
         }

         toast.warn(apiResponsesMessage.unexpected, defaultToast);
         return apiResponsesMessage.unexpected;
      }
   },

   createUser: async (data: IUserData) => {
      try {
         const response = await instance.post(Urls.userReg, { ...data }, {
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
         });

         return response.data.message;
      } catch (error: any) {
         if (error.response?.status === 401) {
            toast.warn(error.response.data.message, defaultToast);
            return error.response.data.message;
         }

         toast.warn(apiResponsesMessage.unexpected, defaultToast);
         return apiResponsesMessage.unexpected;
      }
   },

   logoutUser: async () => {
      try {
         const response = await instance.get(Urls.userLogout);

         return response.data.message;
      } catch (error: any) {

         toast.warn(apiResponsesMessage.unexpected, defaultToast);
         return apiResponsesMessage.unexpected;
      }
   },
};