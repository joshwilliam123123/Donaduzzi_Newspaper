import Colegio from '../../Imagens/Colegioimagemsuperior.jpg'
import Faculdade from '../../Imagens/Faculdade.jpg'
import Biopark from '../../Imagens/Biopark.jpg'
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
            <nav className='fixed mt-10 z-10 w-full flex h-[5%] md:h-[10%] min-h-[5%] bg-white shadow-[0px_3px_2px_rgba(128,128,128,1)] justify-center'>
                <section className='flex flex-row w-[60%] justify-center'>
                    {
                        tabsData.map((data, i) => (
                            <Tab manager={tagManagers} color={data.color} title={data.title} key={i} />
                        ))
                    }
                </section>
            </nav>
            <section className='mt-12 grid grid-cols-12 justify-center w-full h-full'>
                <div className=' grid grid-cols-12 grid-rows-12 col-start-2 col-end-12 mt-10 max-h-100'>
                    <h1 className='@container col-start-4 col-end-9 row-start-2 md:row-start-3 lg:row-start-2 row-end-3 md:row-end-6 lg:row-end-5 flex text-center justify-center items-center text-3xl md:text-8xl wrap-break-word'>Donaduzzi</h1>
                    <h1 className='@container col-start-8 col-end-10 row-start-2 md:row-start-3 lg:row-start-5 row-end-3 md:row-end-8 lg:row-end-8 flex text-center justify-center items-center text-3xl md:text-8xl wrap-break-word'>News</h1>
                    <section className='flex flex-row col-start-2 col-end-12 h-100 row-start-10'>
                        <div className='h-100 w-full flex'><img className='w-full border-4 border-white object-cover' src={Biopark}/></div>
                        <div className='h-full w-full flex flex-col'>
                            <img className='h-50 w-full border-4 border-white object-cover object-top' src={Faculdade}/>
                            <img className='h-50 w-full border-4 border-white object-cover object-center' src={Colegio}/>
                        </div>
                    </section>
                </div>
            </section>
        </main>
    )
}

export default NewsFeed
