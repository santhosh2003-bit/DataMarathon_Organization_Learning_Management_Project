'use client'
import react from "react"
import store from "@/lib/store/store"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/es/integration/react"
import persistStore from "redux-persist/es/persistStore"

const persistor = persistStore(store)
const StoreProvider = ({ children }) => {
    return <PersistGate persistor={persistor}>
        <Provider store={store}>{children}</Provider>
    </PersistGate>
}

export default StoreProvider