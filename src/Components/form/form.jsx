import { Link } from 'react-router-dom';
import Input from './input/input.jsx';
import { useState } from 'react';

const Form = ({ title, inputs, extra , button , confirm , error}) => {
    const [info,setInfo] = useState({})
    const inputConfirm = (val,id) => {
        setInfo(prev=>{
            console.log(`${val} ${id}`)
            return {...prev,[id]:val}
        })
    }
    return (
        <form onSubmit={confirm} className='z-1 w-[16em] h-[20em] '>
            <div className="flex flex-col justify-start size-full bg-bg-sec rounded-md shadow-[0px_8px_4px_rgba(50,50,50,.7)] overflow-hidden">
                <div className="w-full h-[3em] bg-primary">
                    <h1 className="text-white size-full flex items-center justify-center text-2xl">{title}</h1>
                </div>
                <div className="size-full flex justify-center items-center p-6">
                    <div className="flex flex-col size-full ">
                        {inputs.map((item, i) => (
                            <Input
                                svg={item.svg}
                                type={item.type}
                                id={item.id}
                                key={item.id}
                                placeholder={item.placeholder}
                                callback={inputConfirm}
                                >
                            </Input>
                        ))}

                        {extra && (<Link className='text-sm text-blue-500 underline' to='/resetpassword'>Esqueceu a senha?</Link>)}
                        {error && (<p className='text-sm text-red-400 text-center'>{error}</p>)}
                        <div className='flex flex-col w-full h-full p-4 justify-center items-center '>
                            <button type="submit" className='m-2 w-full h-[2em] bg-primary text-white text-lg hover:bg-blue-500 transition-colors'>{button}</button>
                            {extra && (<p className='flex flex-row text-sm truncate gap-1'>não tem uma conta?
                                <Link className='text-sm text-blue-500 underline' to='/register'>registre</Link>
                            </p>)}
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form