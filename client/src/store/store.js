import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { transactionReducer } from './transactionSlice'

export const store = configureStore({
    reducer:  {
        transactionReducer : transactionReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
    })
})