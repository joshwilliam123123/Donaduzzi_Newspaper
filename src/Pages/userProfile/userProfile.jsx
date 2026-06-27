import Banner from '../../Imagens/Colegioimagemsuperior.jpg'

const UserProfile = () => {
    return (

        <article className="mainpanel maincontainer justify-start">
            <section className='w-full h-65 bg-black'>
                <img/>
            </section>
            <section className=' w-full h-full'>
                <div className=' absolute rounded-full bg-[#dfdfdf] w-40 h-40 top-35 ml-10 shadow-[0px_3px_2px_rgba(128,128,128,1)] '></div>
                <nav className='bg-[#d8d8d8] w-full h-30 flex flex-col shadow-[0px_3px_2px_rgba(128,128,128,1)]'>
                    <p className='text-2xl ml-55 mt-4'>Nome da pessoa ae</p>
                    <p className=' ml-55 mt-2 text-[#454444]'>Descrição</p>
                    <div className='absolute right-10 top-63'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"  class="fill-red-900 hover:fill-red-600 duration-30  0 transition-all " viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
                        <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                    </svg>
                    </div>
                </nav>
            </section>
        </article>

    )
}

export default UserProfile