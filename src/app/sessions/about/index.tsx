import styles from "./About.module.css"

export function AboutSession() {
    return (
        <section className={`bg-mountains-dark ${styles.aboutMeSection}`} id="about-me-section">
            {/* Título da sessão Sobre Mim */}
            <div className="container d-flex justify-content-center align-items-center flex-column pt-3">
                <h2 className="yellow-text">Sobre mim</h2>
                <div className="horizontal-line-for-tittles"></div>
            </div>
    
          {/* Conteúdo da sessão Sobre Mim */}
            <div className={`container-fluid container-xl ${styles.aboutMeContentContainer}`}>
                <div className="row d-flex justify-content-evenly align-items-center">
    
                    <div className="col col-12 col-md-5 d-flex align-items-center flex-column gap-4">
                        {/* Foto do Ricardo e Download de CV */}
                        <img src="imgs/arts/personalPhoto.jpeg" alt="Foto de Ricardo Hemmel" className={`${styles.myPicture}`}/>
                        <a href="cv/RICARDO_HEMMEL_HELFSTEIN_CONCEICAO.pdf" download
                                className={`fs-5 fw-semibold px-4 py-1 ${styles.btnDownloadCv}`} role="button">Download CV</a>
    
                    </div>
    
                    {/* Meu nome, Minha ocupação atual e texto sobre mim */}
                    <div className={`col col-12 col-md-5 ${styles.containerAboutMeText}`}>
                        <h3>Ricardo Hemmel Helfstein Conceição</h3>
                        <h4 className="yellow-text">Estudante</h4>
                        <p className="fs-5">Meu nome é Ricardo Hemmel, tenho 21 anos e sou estudante de Sistemas para Internet
                            no Centro Universitário SENAC. Iniciei minha trajetória acadêmica em Ciência da Computação logo
                            após concluir o ensino médio, mas, após um ano, decidi migrar para o curso atual, buscando
                            especialização no desenvolvimento de soluções para web. Além da formação acadêmica, possuo
                            experiência prática em escritórios e suporte de TI na Subprefeitura da Capela do Socorro, onde
                            desenvolvi habilidades como resolução de problemas técnicos, gestão de
                            processos administrativos e inovação em soluções práticas.
                        </p>
    
                        {/* Dados básicos sobre mim */}
                        <div className={`fs-5 d-flex justify-content-between ${styles.basicDataAboutMe}`}>
                            <div>
                                <p className="m-0">Nascimento</p>
                                <p className="m-0">Telefone</p>
                                <p className="m-0">Região</p>
                                <p className="m-0">Email</p>
                                <p className="m-0">Línguas</p>
                                <p className="m-0">Trabalho</p>
                            </div>
                            <div className="d-flex flex-column">
                                <span>:</span>
                                <span>:</span>
                                <span>:</span>
                                <span>:</span>
                                <span>:</span>
                                <span>:</span>
                            </div>
                            <div className={`${styles.dataAboutMe}`}>
                                <p className="m-0">21/12/2003</p>
                                <p className="m-0">11 94488-0786</p>
                                <p className="m-0">Zona Sul, Parelheiros</p>
                                <p className="m-0">ricardo.helfstein@hotmail.com</p>
                                <p className="m-0">Português, Inglês</p>
                                <p className="m-0">Disponível</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="second-wave"></div> {/* Efeito de onda */}
    
        </section>
    )
}