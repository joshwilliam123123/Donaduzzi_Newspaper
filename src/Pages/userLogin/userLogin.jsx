
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Form from '../../Components/form/form';

const UserLogin = ({ Field }) => {
    return (
        <article className={'mainpanel maincontainer items-center'}>
           <Form 
                title={"LOGIN"}
                button={"ENTRAR"}
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
                ]}
                Extra={true}
           />
        </article>
    )
}

export default UserLogin