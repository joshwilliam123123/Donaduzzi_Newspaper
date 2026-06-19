
import { useState } from 'react'
import json from './userLogin.json'
import { Link } from 'react-router-dom';
import emailicon from '/envelope.svg'
import passwordicon from '/lockclosed.svg'

const UserLogin = ({ Field }) => {
    return (
        <article className={`${styles.contents} mainpanel`}>
            <img src='/backgroundblob.svg' />
            <div>
                <div >
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
                        <section>
                            <Link to={"/login/passwordreset"}>esqueceu sua senha?</Link>
                        </section>
                        <section>
                            <button>ENTRAR</button>
                            <section>
                                <p>não tem uma conta? <Link to="/register">registre</Link></p>
                            </section>
                        </section>
                    </section>
                </div>
            </div>
        </article>
    )
}

export default UserLogin