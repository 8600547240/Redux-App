import {configureStore} from '@reduxjs/toolkit'
import { appReducer } from './reducer'
import logger from 'redux-logger'
export const store = configureStore({
    reducer: {
        appReducer/*shorthand syntax, here key and value both are appReducer 
        and any no of reducer can registered*/
    },
    middleware: [logger]
})