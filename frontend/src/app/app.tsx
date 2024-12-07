import { Routes, Route } from "react-router-dom"
import { Homepage } from "@pages/home-page"

import "./main.scss"
import { DefaultLayout } from "./layouts/default-layou/ui/default-layout"
import { Provider } from "react-redux"
import { store } from "./store/store"

export function App() {
    return (
        <div className='light text-foreground'>
            <Provider store={store}>
                <DefaultLayout>
                    <Routes>
                        <Route path={"/"} element={<Homepage />} />
                    </Routes>
                </DefaultLayout>
            </Provider>
        </div>
    )
}
