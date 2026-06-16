import styles from './newsFeed.module.css'
import Logocolegio from '../../Imagens/Logocolegio.png'

const NewsFeed = () => {
    return (
        <main className="flex w-full h-full bg-[#e6e6e6]">
            <nav className='flex bg-[#1b2130] h-full w-1/8' >
                <div className='flex h-1/10'><img src={Logocolegio}/></div>
            </nav>
        </main>
    )
}

export default NewsFeed
