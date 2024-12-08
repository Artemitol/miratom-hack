import { ReactNode } from "react"
import classes from "./default-layout.module.scss"
import { Header } from "@widgets/header"
import { Main } from "@widgets/main"
import { Footer } from "@widgets/footer"

type DefaultLayoutProps = {
    children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <div className={classes.layout}>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </div>
    )
}
