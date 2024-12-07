import { Main } from "@widgets/main"
import { FormulaEditor } from "@widgets/formulaEditor";


export function Homepage() {
    return (
        <>
            <div className='w-dvw h-dvh bg-slate-950 absolute -z-50' />
            <div className='h-full main text-white flex items-center justify-center'>
                <Main>Hello world!</Main>
                <FormulaEditor/>
            </div>
        </>
    )
}
