import styles from "./Projects.module.css"
import { ProjectCard } from "@/components/projectCard"
import Link from "next/link"

export function ProjectsSession() {
    return (
        <section id="projects-section" className={`bg-mountains-dark ${styles.projectsSection}`}>

            {/* Título da sessão Projetos */}
            <div className="container d-flex justify-content-center align-items-center flex-column pt-3">
                <h2 className="yellow-text">Projetos</h2>
                <div className="horizontal-line-for-tittles"></div>
            </div>

            {/* Container Cards de Projetos */}
            <div className={`container ${styles.projectCardsContainer}`}>
                <div className="row d-flex justify-content-around">

                    {/* Projeto 1 */}
                    <ProjectCard
                        title="Alpha - Hardware Store"
                        description="Um aplicativo de e-commerce para peças de hardware, desenvolvido no Android Studio."
                        imgPath="imgs/arts/alphaLogo.png"
                        modalText="Não Hospedado"
                        modalTarget="alphaModal"
                        linkText="Github"
                        linkUrl="https://github.com/Alpha-Computers-TSI/Alpha"
                    />

                    {/* Modal Projeto 1 */}
                    <div className="modal fade" id="alphaModal" tabIndex={-1} aria-labelledby="alphaModal" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className={`modal-content ${styles.modalContent}`}>
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="alphaModal">Alpha - Hardware Store</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    Esse aplicativo precisa da ferramenta de desenvolvimento Android Studio para compilar
                                    todos os arquivos e gerar um
                                    executável no smartphone para testar. Segue link para vídeo do projeto: <a
                                        href="https://drive.google.com/file/d/1EIX22uwRGhjSQ7T1Wrc5lGBfrgBUD5q-/view?usp=sharing"
                                        target="_blank">Vídeo
                                        do Projeto</a>
                                </div>
                                <div className="modal-footer">
                                    <a href="https://github.com/Alpha-Computers-TSI/Alpha" target="_blank" type="button"
                                        className="btn btn-primary">Github</a>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Projeto 2 */}
                    <ProjectCard
                        title="Charlie Streetwear"
                        description="Um CRUD de administrador de uma loja de roupas. Projeto desenvolvido com linguagem de servidor PHP e Bootstrap."
                        imgPath="imgs/arts/charlie.png"
                        modalText="Não Hospedado"
                        modalTarget="charlieModal"
                        linkText="Github"
                        linkUrl="https://github.com/CRUD-Tokyo-Streetwear/commercialWebStore"
                    />

                    {/* Modal Projeto 2 */}
                    <div className="modal fade" id="charlieModal" tabIndex={-1} aria-labelledby="charlieModal" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className={`modal-content ${styles.modalContent}`}>
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="charlieModal">Charlie Streetwear</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    Esse site é uma aplicação onde é necessário o uso de um servidor local como XAMPP para
                                    seu uso. Caso queria testar acesse o meu github para ter acesso aos arquivos.
                                    <br />
                                    Obs: Não deixe de ler o read.me
                                </div>
                                <div className="modal-footer">
                                    <a href="https://github.com/CRUD-Tokyo-Streetwear/commercialWebStore" target="_blank" type="button"
                                        className="btn btn-primary">Github</a>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Projeto 3 */}
                    <ProjectCard
                        title="Fox - Loja de Brinquedos"
                        description="Um site em formato de ecommerce desenvolvido com Bootstrap, Laravel, Ajax, JS e PHP."
                        imgPath="imgs/arts/fox.svg"
                        modalText="Não Hospedado"
                        modalTarget="foxModal"
                        linkText="Github"
                        linkUrl="https://github.com/Fox-Loja-de-Brinquedos/Fox"
                    />

                    {/* Modal Projeto 3 */}
                    <div className="modal fade" id="foxModal" tabIndex={-1} aria-labelledby="foxModal" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className={`modal-content ${styles.modalContent}`}>
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="foxModal">Fox - Loja de Brinquedos</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    Esse site foi desenvolvido utilizando o framework de PHP Laravel impossibilitando uma
                                    hospedagem simples no github.
                                    Segue link para vídeo do projeto:
                                    <a href="https://drive.google.com/file/d/1RqzTzKRH7rrpwMuO9kXK_OsR2KeBS7ke/view?usp=sharing" target="_blank"> Vídeo
                                        do Projeto</a>
                                </div>
                                <div className="modal-footer">
                                    <a href="https://github.com/Fox-Loja-de-Brinquedos/Fox" target="_blank" type="button"
                                        className="btn btn-primary">Github</a>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Container Cards de Projetos */}
            <div className={`container ${styles.projectCardsContainer}`}>
                <div className="row d-flex justify-content-around">

                    {/* Projeto 1 */}
                    <ProjectCard
                        title="Facilita Sites"
                        description="Meu site profissional é especializado na captação de leads para a venda de páginas web desenvolvidas em WordPress."
                        imgPath="imgs/arts/facilitaSites.png"
                        linkText="Visitar Página"
                        linkUrl="https://facilitasites.online/"
                    />

                    {/* Projeto 2 */}
                    <ProjectCard
                        title="Subprefeitura - CS"
                        description="Gerenciador de funcionários desenvolvido com Laravel para armezar dados eventualmente utilizados em dashboards BI e alimentação de planilhas excel."
                        imgPath="imgs/arts/prefeituraBrasao.png"
                        linkText="Linkedin"
                        linkUrl="https://www.linkedin.com/posts/ricardo-hemmel-a6b97626b_laravel-bancodedados-gestaetopaeqblica-activity-7258146049670701056-2ifH/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEIsQXMB8DWi25tJE5Zmfd4N_5CF_MhPoDs"
                    />

                    {/* Projeto 3 */}
                    <ProjectCard
                        title="Power BI - Dashboard"
                        description="Dashboard gerado através dos dados gerados do sistema em laravel que detalha todo o funcionamento da subprefeitura como cargos, idades, unidades, entre outros."
                        imgPath="imgs/arts/powerBiLogo.png"
                        linkText="Linkedin"
                        linkUrl="https://www.linkedin.com/posts/ricardo-hemmel-a6b97626b_transformando-dados-em-ferramentas-estrat%C3%A9gicas-activity-7278029008695382016-IsdF/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEIsQXMB8DWi25tJE5Zmfd4N_5CF_MhPoDs"
                    />

                </div>
            </div>


            {/* Container Cards de Projetos */}
            <div className={`container ${styles.projectCardsContainer}`}>
                <div className="row d-flex justify-content-around">

                    {/* Projeto 1 */}
                    <ProjectCard
                        title="Diana Imóveis"
                        description="Site desenvolvido com Wordpress e o plugin construtor Elementor com mecânicas programadas de hierarquia de imóveis, favoritos, e exibições dinâmicas."
                        imgPath="imgs/arts/Diana.png"
                        linkText="Visitar Página"
                        linkUrl="https://dianaimoveis.com/"
                    />

                    {/* Projeto 2 */}
                    <ProjectCard
                        title="Automação Web Python"
                        description="Automação web para lançamento de chamados repetitivos agregando valor ao tempo de serviço e evitando esforços que podem ser poupados com atribuição do trabalho à tecnologia."
                        imgPath="imgs/arts/pythonLogo.png"
                        linkText="Linkedin"
                        linkUrl="https://www.linkedin.com/posts/ricardo-hemmel-a6b97626b_automa%C3%A7%C3%A3o-web-desenvolvi-uma-aplica%C3%A7%C3%A3o-em-activity-7293646673765924865-rXGJ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEIsQXMB8DWi25tJE5Zmfd4N_5CF_MhPoDs"
                    />

                    {/* Projeto 3 */}
                    <ProjectCard
                        title="Design Figma"
                        description="Utilização do Figma para a criação de projetos web, além de usá-lo para expor ideias e produtos, como em posts e outras apresentações visuais."
                        imgPath="imgs/arts/figmaLogo.png"
                        modalText="Exemplo"
                        modalTarget="alphaModal" />

                    {/* Modal Site não Hospedado */}

                </div>
            </div>

            {/* Container Cards de Projetos */}
            <div className={`container ${styles.projectCardsContainer}`}>
                <div className="row d-flex justify-content-around">

                    {/* Projeto 1 */}
                    <ProjectCard
                        title="Em breve"
                        description="Sigo desenvolvendo mais aplicações e aprendendo mais tecnologias para me tornar um funcionário de valor."
                        imgPath="imgs/arts/workingOnIt.jpg"
                    />

                </div>
            </div>

        </section>

    )
}