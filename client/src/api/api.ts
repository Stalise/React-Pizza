import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';

import { Urls } from "constants/api";
import { fetchResponses } from "constants/api";
import { defaultToast } from "constants/toast";
import { IPizza } from "types/typesPizza";
import { IUserData } from "types/api";

const instance = axios.create({
   baseURL: Urls.base_url,
   withCredentials: true,
});

export const products = {
   // создаем асинхронный thunk на получение пицц для Redux productSlice
   getProducts: createAsyncThunk(
      'products/requestProducts',
      async (_, { rejectWithValue }) => {
         try {
            const request = await instance.get<IPizza[]>(Urls.product);
            return request.data;

         } catch (error) {
            return rejectWithValue(error);
         }
      },
   ),
};

export const user = {
   checkAuth: async () => {
      try {
         const response = await instance.get(Urls.user);

         if (response.status >= 200 && response.status < 300) {
            return response.data.message;
         }
      } catch (error: any) {
         if (error.response.status === 401) {
            return error.response.data.message;
         }

         return fetchResponses.unexpected;
      }
   },

   authUser: async (data: IUserData) => {
      try {
         const response = await instance.post(Urls.userAuth, { ...data }, {
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
         });

         if (response.status >= 200 && response.status < 300) {
            return response.data.message;
         } else if (response.status === 500) {
            toast.warn(response.data.message, defaultToast);
            return response.data.message;
         }
      } catch (error: any) {
         if (error.response.status === 401) {
            toast.warn(error.response.data.message, defaultToast);
            return error.response.data.message;
         }

         return fetchResponses.unexpected;
      }
   },

   createUser: async (data: IUserData) => {
      try {
         const response = await instance.post(Urls.userReg, { ...data }, {
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
         });

         if (response.status >= 200 && response.status < 300) {
            return response.data.message;
         } else if (response.status === 500) {
            toast.warn(response.data.message, defaultToast);
            return response.data.message;
         }
      } catch (error: any) {
         if (error.response.status === 401) {
            toast.warn(error.response.data.message, defaultToast);
            return error.response.data.message;
         }

         return fetchResponses.unexpected;
      }
   },

   logoutUser: async () => {
      try {
         const response = await instance.get(Urls.userLogout);

         if (response.status >= 200 && response.status < 300) {
            return response.data.message;
         }
      } catch (error: any) {
         return fetchResponses.unexpected;
      }
   },
};