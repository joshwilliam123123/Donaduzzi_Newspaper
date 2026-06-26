
import Form from '../../Components/form/form';

const UserRegister = () => {
    const Confirm = cred => {
        console.log(cred)
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
           />
        </article>
    )
}

export default UserRegister