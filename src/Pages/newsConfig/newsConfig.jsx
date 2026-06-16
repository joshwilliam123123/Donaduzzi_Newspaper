import styles from './newsFeed.module.css'
import Logocolegio from '../../Imagens/Logocolegio.png'

const NewsConfig = () => {
    return (
        <main className={styles.main}>

            {/* Sidebar */}
            
            <aside className={`${styles.sidebar} d-flex flex-column position-fixed top-0 start-0`}>

                <img className={`${styles.logoSuperior} w-100`} src={Logocolegio} alt="Logo Colégio" />

                <div className={`${styles.buttonsSidebar} d-flex flex-column px-3 flex-grow-1`}>

                    <input
                        className={`${styles.BarraDePesquisa} form-control mb-3 mt-2`}
                        type="text"
                        placeholder="Search"
                    />

                    <button className={`${styles.homedojornal} d-flex align-items-center gap-3 btn border-0 w-100 text-start mb-1`}>
                        <svg className={`${styles.svghome} flex-shrink-0`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
                            <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z" />
                        </svg>
                        <span className={styles.hometxtbutton}>Noticias</span>
                    </button>

                    <button className={`${styles.Profilebutton} d-flex align-items-center gap-3 btn border-0 w-100 text-start mb-1`}>
                        <svg className={`${styles.profileiconbutton} flex-shrink-0`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                        </svg>
                        <span className={styles.profilebuttontxt}>Perfil</span>
                    </button>

                    <hr className={styles.linhaconfig} />

                    <button className={`${styles.configbutton} d-flex align-items-center gap-3 btn border-0 w-100 text-start`}>
                        <svg className={`${styles.configicon} flex-shrink-0`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
                        </svg>
                        <span className={styles.configtxt}>Configurações</span>
                    </button>
                </div>

                {/* Lower Profile */}
                <div className={`${styles.profilediv} d-flex flex-row align-items-center px-2 py-2`}>
                    <svg className={styles.profileicon} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                    </svg>
                    <div className="ms-2 overflow-hidden">
                        <p className={`${styles.profilename} mb-0`}>Name</p>
                        <p className={`${styles.emailsidebar} mb-0`}>email.example@gmail.com</p>
                    </div>
                </div>

                {/* Toggle sidebar button */}
                <button className={`${styles.onclosebutton} btn border-0 align-self-end me-1 mb-2`}>
                    <svg className={styles.svgarrow} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4z" />
                    </svg>
                </button>
            </aside>

            {/* Main content area */}
            <section className={styles.Backgroundmain}>

                <div className={`${styles.topdiv} d-flex justify-content-center align-items-center`}>
                    <h2 className={styles.Minititle}>Donaduzzi News</h2>
                </div>

                <nav className={`${styles.tagsbar} d-flex flex-row align-items-center`}>
                    <div className={styles.olimpiadas}><p className="mb-0">Olimpiadas</p></div>
                    <div className={styles.esportes}><p className="mb-0">Esportes</p></div>
                    <div className={styles.tecnologias}><p className="mb-0">Tecnologias</p></div>
                    <div className={styles.descobertas}><p className="mb-0">Descobertas</p></div>
                    <div className={styles.outros}><p className="mb-0">Outros</p></div>
                </nav>

                <section className={styles.newsspace}></section>
            </section>
        </main>
    )
}

export default NewsConfig
