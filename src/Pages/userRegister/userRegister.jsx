
import { useState } from 'react'
import Form from '../../Components/form/form';
import api from '../../utils/api'

const UserRegister = ({ Field }) => {
    const Confirm = cred => {
        console.log(cred)
    }
    const Submit 
    return (
        <article className={'mainpanel maincontainer items-center'}>
           <Form 
                title={"REGISTRO"}
                button={"CRIAR CONTA"}
                inputs={[
                    {
                        svg: "/email.svg",
                        type: "email",
                        name: "Email",
                        id: "email"
                    },
                    {
                        svg: "/lockclosed.svg",
                        type: "password",
                        name: "Senha",
                        id: "password"
                    },
                    {
                        svg: "/hash.svg",
                        type: "text",
                        name: "Usuário",
                        id: "name"
                    },
                ]}
                extra={false}
                confirm={Confirm}
                submit={}
           />
        </article>
    )
}

export default UserRegister