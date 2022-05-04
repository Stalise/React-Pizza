import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { user } from '../../api/api';

interface IUserSlice {
   autho: boolean,
   status: string
}

const initialState: IUserSlice = {
   autho: false,
   status: 'pending'
}

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      changeAutho(state: IUserSlice, action: PayloadAction<boolean>) {
         state.autho = action.payload
         state.status = 'ready'
      },
   },
   extraReducers: {
      [String(user.createUser.pending)]: (state: IUserSlice) => {
         state.status = 'pending'
      },
      [String(user.createUser.fulfilled)]: (state: IUserSlice, action: PayloadAction<any>) => {
         state.status = action.payload
         state.status = 'ready'
      },
      [String(user.createUser.rejected)]: (state: IUserSlice, action) => {
         alert(action.payload.message)
         state.status = 'ready'
      },
   }
})

export default userSlice.reducer;