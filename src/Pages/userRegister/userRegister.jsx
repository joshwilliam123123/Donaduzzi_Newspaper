import Form from '../../Components/form/form';
import { useState } from 'react';
import api from '../../utils/api'
import { useNavigate } from 'react-router-dom';

const UserRegister = ({ Field }) => {
    const [error, setError] = useState()
    const navigate = useNavigate();
    const Confirm = async e => {
        e.preventDefault()
        setError()
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const axiosInstance = api();
            const roleRes = await axiosInstance.get('/perms')
            let userrole

            (roleRes.data.admin.includes(data.email))? roleRes=="Administrador" : 
            (roleRes.data.jornalista.includes(data.email))? roleRes=="Jornalista" :
            roleRes == "Usuário"
            
            const res = await axiosInstance.post('user/register', {
                email: data.email,
                password: data.password,
                name: data.name,
                role: userrole
            })
            const jsonres = JSON.stringify(res.data)
            const resError = res.data['error']
            if (resError) {
                setError(resError)
            }else {
                navigate('/login')
            }
        } catch {
            setError("erro ao conectar")
        }
    }
    return (
        <article className={'mainpanel maincontainer items-center'}>
            <Form
                title={"REGISTRO"}
                button={"CRIAR CONTA"}
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
                    {
                        svg: "/hash.svg",
                        type: "text",
                        placeholder: "Usuário",
                        id: "name"
                    },
                ]}
                extra={false}
                confirm={Confirm}

                error={error}
            />
        </article>
    )
}

export default UserRegister