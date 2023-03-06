import { createAsyncThunk } from "@reduxjs/toolkit";

import { user } from 'api/api';
import { apiResponsesMessage } from "constants/api";
import { IUserData } from "types/api";

export const checkAuthThunk = createAsyncThunk(
   'user/checkAuthThunk',
   async () => {
      const response: string = await user.checkAuth();

      if (response === apiResponsesMessage.success) {
         return true;
      } else {
         return false;
      }
   },
);

export const authUserThunk = createAsyncThunk(
   'user/authUserThunk',
   async (data: IUserData) => {
      const response: string = await user.authUser(data);

      if (response === apiResponsesMessage.success) {
         return true;
      } else {
         return false;
      }
   },
);

export const createUserThunk = createAsyncThunk(
   'user/createUserThunk',
   async (data: IUserData) => {
      const response: string = await user.createUser(data);

      if (response === apiResponsesMessage.success) {
         return true;
      } else {
         return false;
      }
   },
);

export const logoutUserThunk = createAsyncThunk(
   'user/logoutUserThunk',
   async () => {
      const response: string = await user.logoutUser();

      if (response === apiResponsesMessage.success) {
         return false;
      } else {
         return false;
      }
   },
);