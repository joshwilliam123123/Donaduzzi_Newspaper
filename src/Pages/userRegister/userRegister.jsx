
import { useState } from 'react'
import json from './userRegister.json'
import emailicon from '/envelope.svg'
import passwordicon from '/lockclosed.svg'
import usernameicon from '/hashtag.svg'

const UserRegister = ({ Field }) => {
    return (
        <article className={`${styles.contents} mainpanel`}>
            <img src='/backgroundblob.svg' />
            <div>
                <div>
                    <section>
                        <h1>{json.maintext}</h1>
                        <h3>{json.desc}</h3>

                    </section>
                    <section>
                        <Field
                            title="insira seu email"
                            type="text"
                            placeholder="email"
                            icon={emailicon}
                        />
                        <Field
                            title="insira sua senha"
                            type="text"
                            placeholder="senha"
                            icon={passwordicon}
                        />
                        <Field
                            title="insira sua nome"
                            type="text"
                            placeholder="nome de usuário"
                            icon={usernameicon}
                        />
                        <section>
                            <button>CRIAR MINHA CONTA</button>
                        </section>
                    </section>
                </div>
            </div>
        </article>
    )
}

export default UserRegister