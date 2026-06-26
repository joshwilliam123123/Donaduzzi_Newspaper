import { useEffect, useState } from 'react';
import Banner from '../../Imagens/Colegioimagemsuperior.jpg'
import { useCookies } from 'react-cookie';
import api from '../../utils/api';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const navigate = useNavigate();
    const [name,setName] = useState('undefined')
    const [cookies] = useCookies(['token'])
    useEffect(() => {
        const axiosInstance = api()
        const applyData = async (data) => {
            setName(data.name)
        }
        const fetch = async () => {
            const res = await axiosInstance.get('/user', {
                headers: {
                    Authorization: `Bearer ${cookies.token}`
                }
            })

            applyData(res.data)
        }
        if (cookies.token) {
            fetch()
        } else {
            console.log('not logged in')
            navigate('/login')
        }
    }, [])


    const [cookie] = useCookies(['token'])
    
    return (
        <main className="w-full h-full border-none border-0">
            <section className='w-full h-65 bg-black'>
                <img />
            </section>
            <h1>{name}</h1>
        </main>

    )
}

export default UserProfile