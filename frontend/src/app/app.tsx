import { Routes, Route } from "react-router-dom"
import { Homepage } from "@pages/home-page"

import "./main.scss"
import { DefaultLayout } from "./layouts/default-layou/ui/default-layout"

export function App() {
    return (
        <div className='light text-foreground'>
            <DefaultLayout>
                <Routes>
                    <Route path={"/"} element={<Homepage />} />
                </Routes>
            </DefaultLayout>
        </div>
    )
}
