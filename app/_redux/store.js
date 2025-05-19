import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './cart/cartslice'
export const store = configureStore({
 reducer: {
counter:counterReducer
 },
})
