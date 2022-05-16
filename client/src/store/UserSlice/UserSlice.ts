import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { checkAuthThunk, authUserThunk, createUserThunk, logoutUserThunk } from './actions';
import { IState, IChangeAuthPayload } from './types';

const initialState: IState = {
   autho: false,
   status: 'ready',
}

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      changeAutho(state, action: PayloadAction<IChangeAuthPayload>) {
         state.autho = action.payload.isAuth
         state.status = action.payload.status
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(checkAuthThunk.pending, (state) => {
            state.status = 'pending'
         })
         .addCase(checkAuthThunk.fulfilled, (state, { payload }) => {
            if (typeof (payload) === "boolean") {
               state.autho = payload
            }
            state.status = 'ready'
         })
         /***********************************************************/
         .addCase(authUserThunk.pending, (state) => {
            state.status = 'auth'
         })
         .addCase(authUserThunk.fulfilled, (state, { payload }) => {
            if (typeof (payload) === "boolean") {
               state.autho = payload
            }
            state.status = 'ready'
         })
         /***********************************************************/
         .addCase(createUserThunk.pending, (state) => {
            state.status = 'reg'
         })
         .addCase(createUserThunk.fulfilled, (state, { payload }) => {
            if (typeof (payload) === "boolean") {
               state.autho = payload
            }
            state.status = 'ready'
         })
         /***********************************************************/
         .addCase(logoutUserThunk.pending, (state) => {
            state.status = 'pending'
         })
         .addCase(logoutUserThunk.fulfilled, (state, { payload }) => {
            if (typeof (payload) === "boolean") {
               state.autho = payload
            }
            state.status = 'ready'
         })
   },
})

export default userSlice.reducer;