import { authslice } from "./features/auth/authslice"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'



const persistConfig = {
    key: "root",
    version: 1,
    storage
}
const reducer = combineReducers({
    auth: authslice.reducer
})
const persistedReducer = persistReducer(persistConfig, reducer)
export default configureStore({
    reducer: persistedReducer
})