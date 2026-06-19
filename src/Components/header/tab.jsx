import { useState } from "react"

const Tab = ({ manager, color, title }) => {

    const [active, setActive] = useState(false)

    const Toggle = () => {
        const newState = !active;
        setActive(newState)
        newState ? manager.add(title) : manager.remove(title)
    }

    return (
        <button
            onClick={() => Toggle()}
            style={{
                '--main-color': color
            }}
            className={`@container group flex items-center h-full w-[20%] border-l border-r border-b-4 border-l-gray-400 border-r-gray-400 border-b-(--main-color) hover:bg-(--main-color) hover:h-[5em] transition-color duration-200 cursor-pointer`}>
            <a className='group-hover:text-white text-[min(14cqw,2rem)] transition-colors flex w-full justify-center items-center text-center no-underline! text-black select-none'>{title}

            </a>
        </button>
    )
}

export default Tab