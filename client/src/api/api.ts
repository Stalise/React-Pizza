import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { IPizza } from "../types/typesPizza";

const instance = axios.create({
   baseURL: 'http://localhost:8000/api/',
   withCredentials: true,
});

export const products = {
   // создаем асинхронный thunk на получение пицц для Redux productSlice
   getProducts: createAsyncThunk(
      'products/requestProducts',
      async (_, { rejectWithValue }) => {
         try {
            const request = await instance.get<IPizza[]>('product')
            return request.data

         } catch (error) {
            return rejectWithValue(error)
         }
      }
   )
}

export const user = {

   checkAuthorize: async () => {
      try {
         const request = await instance.get('user', { withCredentials: true })
         return request.data
      } catch (error) {

      }
   },

   createUser: createAsyncThunk(
      'user/createUser',
      async (data: { email: string, password: string }, { rejectWithValue }) => {
         try {

            const request = await instance.post<boolean>('user/reg', { ...data }, {
               headers: { 'Content-Type': 'application/json;charset=utf-8' },
            })

            // передаем ответ от сервера, зарегистрирован ли пользователь (boolean), чтобы прокинуть в dispatch
            return request.data
         } catch (error: any) {
            console.log(error)
            return rejectWithValue(error.response?.data)
         }
      }
   )
}