import { combineReducers } from '@reduxjs/toolkit'
import userReducer from '@entities/user/model/slice'
import baseApi from '@shared/api/baseApi'

export const rootReducer = combineReducers({
    user: userReducer,
    [baseApi.reducerPath]: baseApi.reducer
  })