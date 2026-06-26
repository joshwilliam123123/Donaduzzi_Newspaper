import Banner from '../../Imagens/Colegioimagemsuperior.jpg'
import { useCookies } from 'react-cookie';

const UserProfile = () => {

    const [cookie] = useCookies(['token'])
    
    return (
        <main className="w-full h-full border-none border-0">
            <section className='w-full h-65 bg-black'>
                <img/>
            </section>
        </main>

    )
}

export default UserProfile