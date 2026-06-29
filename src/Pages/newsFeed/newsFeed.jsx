
import Tab from '../../Components/header/tab.jsx'
import {useState } from 'react'

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

    return (
        <main className='flex flex-col w-screen h-screen'>
            <nav className='w-full flex h-[10%] min-h-[5%] bg-white shadow-[0px_3px_2px_rgba(128,128,128,1)] justify-center'>
                <section className='flex flex-row w-[60%] justify-center '>
                    {
                        tabsData.map((data, i) => (
                            <Tab manager={tagManagers} color={data.color} title={data.title} key={i} />
                        ))
                    }
                </section>
            </nav>
            <section className='grid grid-cols-12 justify-center w-full h-full'>
                <div className=' grid-cols-12 col-start-2 col-end-12 bg-amber-500'>
                    <h1 className=' text-6xl'>Main news</h1>
                </div>
            </section>
        </main>
    )
}

export default NewsFeed
