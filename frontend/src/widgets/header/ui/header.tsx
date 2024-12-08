import { User } from "@nextui-org/react"
import classes from "./header.module.scss"

export function Header() {
    return (
        <header className={classes.header}>
            <img
                className='class-for-img'
                src='/'
                alt='logo'
                width='65'
                height='80'
                loading='lazy'
            />
            <User
                name=''
                avatarProps={{
                    src: "https://avatars.githubusercontent.com/u/30373425?v=4",
                }}
            />
        </header>
    )
}
