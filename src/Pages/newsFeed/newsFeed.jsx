
import Logocolegio from '../../Imagens/Logocolegio.png'
import HeaderComp from '../../Components/header/header'
import Colegio from '../../Imagens/ColegioImagemsuperior.jpg'
import Tab from '../../Components/header/tab.jsx'
import { useEffect, useState } from 'react'

const NewsFeed = () => {
    const [tags, setTags] = useState([])

    const addTag = (tag) => setTags(prev => [...prev, tag])
    const removeTag = (tag) => setTags(prev => prev.filter(item => item !== tag))

    const tabsData = [
        { color: '#1E3A8A', title: 'Colégio' },
        { color: '#FBBF24', title: 'Olimpiadas' },
        { color: '#16A34A', title: 'Academia' },
        { color: '#60A5FA', title: 'Projetos' },
        { color: '#D97706', title: 'Descobertas' }
    ]

    const tagManagers = {
        add: addTag,
        remove: removeTag
    }

    useEffect(() => {
        console.log(tags)
    }, [tags])

    return (
        <main className="w-full h-full">
            <nav className='w-[full] flex h-[4em] bg-white shadow-[0px_3px_2px_rgba(128,128,128,1)] justify-center '>
                <section className='flex flex-row w-[60%] justify-center '>
                    {
                        tabsData.map((data, i) => (
                            <Tab manager={tagManagers} color={data.color} title={data.title} key={i} />
                        ))
                    }
                </section>
            </nav>
            <section className=' h-full w-full flex'>
                <div className='flex flex-row w-full h-full mt-50 bg-white'>
                    <section className='w-full h-full'></section>
                    <section className='h-full w-75 flex flex-col border-l bg-amber-200 border-l-gray-500'></section>
                </div>

            </section>
        </main>
    )
}

export default NewsFeed
