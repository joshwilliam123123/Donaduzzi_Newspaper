import { useContext, useEffect, useState } from 'react';
import Banner from '../../Imagens/Colegioimagemsuperior.jpg'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';

const UserProfile = () => {
    const navigate = useNavigate();
    const [cookies] = useCookies(['token'])
    const user = useContext(UserContext)
   
    useEffect(() => {
        if (cookies.token) {
            
        } else {
            console.log('not logged in')
            navigate('/login')
        }
    }, [])

    return (
        <main className="w-full h-full relative border-none border-0 flex flex-col">
            <section className='w-full h-65 bg-gray-300'>
                <img />
            </section>
            <section className='flex relative h-56 w-full'>
                <nav className='w-full h-24 bg-white flex flex-col shadow-[0px_3px_2px_rgba(128,128,128,1)]'>
                    <article className='flex flex-row shrink-0 '>
                        <div className='absolute top-[-25%] ml-8 rounded-full bg-gray-400 shrink-0 border'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="white" className="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                            </svg>
                        </div>
                        <div className='w-full pl-44 mt-3'>
                            <h1 className='text-[28px]'>{user.name}</h1>
                        </div>
                        <div className='w-full flex flex-row-reverse'>
                            <section className='flex flex-col content-center items-center mt-5 mr-8'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="red" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                                    <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                                </svg>
                                <p className='text-[#d41a1a]'>Log out</p>
                            </section>
                        </div>
                    </article>
                    <div className='rounded-md w-auto'>
                        <p className=''>algo ai</p>
                    </div>

                </nav>
            </section>
        </main>

    )
}

export default UserProfile