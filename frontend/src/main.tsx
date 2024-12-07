import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { App } from "@app/app"
import "./main.scss"
import { PersistGate } from "redux-persist/integration/react"
import { store } from "./app/store"
import { Provider } from "react-redux"
import {persistor} from "./app/store"


ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>
)
