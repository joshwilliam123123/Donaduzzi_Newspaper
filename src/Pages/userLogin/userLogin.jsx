
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Form from '../../Components/form/form';
import api from '../../utils/api'

const UserLogin = ({ Field }) => {
    const [error, setError] = useState()
    const [cookies, setCookies, removeCookies] = useCookies(['token'])
    const navigate = useNavigate();
    const Confirm = async e => {
        e.preventDefault()
        setError()
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await api.post('login', {
                email: data.email,
                password: data.password,
            })
            const jsonres = JSON.stringify(res.data)
            const resError = res.data['error']
            if (resError) {
                console.log(resError)
                setError(resError)
            } else {
                const token = res.data['token']
                if (token) {
                    console.log(`token: ${token}`)
                    setCookies('token',token,{
                        path: '/',
                        maxAge: 10000,
                        secure: false,
                        sameSite: "lax"
                    })
                }

                navigate('/feed')
            }

        } catch {
            setError("erro ao conectar")
        }
    }
    return (
        <article className={'mainpanel maincontainer items-center'}>
            <Form
                title={"LOGIN"}
                button={"ENTRAR"}
                inputs={[
                    {
                        svg: "/email.svg",
                        type: "email",
                        placeholder: "Email",
                        id: "email"
                    },
                    {
                        svg: "/lockclosed.svg",
                        type: "password",
                        placeholder: "Senha",
                        id: "password"
                    },
                ]}
                extra={true}
                confirm={Confirm}
                error={error}
            />
        </article>
    )
}

export default UserLogin