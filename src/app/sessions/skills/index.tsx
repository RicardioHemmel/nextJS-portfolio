import styles from "./Skills.module.css"
import { Skill } from "@/components/skill"

export function SkillsSession() {
    return (
        <section className={`bg-dark-blue ${styles.abilitiesSection}`} id="abilities-section">

         {/* Título da sessão Habilidades */}
        <div className="container d-flex justify-content-center align-items-center flex-column pt-3">
            <h2 className="yellow-text">Habilidades</h2>
            <div className="horizontal-line-for-tittles"></div>
        </div>

        <div className={`container ${styles.abilitiesContentContainer}`}>
            <div className="row d-flex justify-content-between align-items-center">

                {/* Texto de competências Técnicas */}
                <div className={`col col-12 col-lg-5 ${styles.technicalSkillsText}`}>
                    <h3>Competências Técnicas</h3>
                    <p>Resultado do tempo aplicado à minha formação acadêmica, participação em cursos
                        online, estudos independentes e experiência profissional, desenvolvi um conjunto sólido de
                        habilidades. Este repertório, construído ao longo do tempo reflete na aplicação prática desses
                        conhecimentos em contextos diversos. A
                        seguir, apresento algumas das competências que adquiri ao longo dessa jornada.
                    </p>
                </div>

                {/* Quadro de competências tecnicas rankeadas */}
                <div className={`col col-12 col-lg-6 d-flex justify-content-around ${styles.technicalSkillsBox}`}>

                    {/* (1) Primeira linha vertical com 4 competências */}
                    <div>
                        <Skill skillName="HTML" rating={5} />
                        <Skill skillName="PHP" rating={4} />
                        <Skill skillName="Github" rating={3} />
                        <Skill skillName="Excel" rating={5} />
                    </div>

                    {/* (2) Segunda linha vertical com 4 competências */}
                    <div>
                        <Skill skillName="CSS" rating={4} />
                        <Skill skillName="Laravel" rating={5} />
                        <Skill skillName="Wordpress" rating={5} />
                        <Skill skillName="Power BI" rating={4} />
                    </div>

                    {/* (3) Terceira linha vertical com 4 competências */}
                    <div>
                        <Skill skillName="JavaScript" rating={4} />
                        <Skill skillName="SQL" rating={4} />
                        <Skill skillName="Python" rating={3} />
                        <Skill skillName="Windows" rating={5} />
                    </div>

               </div>  {/* fecha quadro de competências rankeadas */}
            </div> {/* fecha orientação horizontal Texto e Quadro */}
        </div>

        <hr className={styles.divisoryLine}/>

        <div className="container">
            <div className="row d-flex justify-content-between align-items-center">

                {/* Qualificações Profissionais */}
                <div className={`col col-12 col-lg-5 ${styles.professionalQualifications}`}>
                    <h3>Qualificações Profissionais</h3>
                    <p>Aqui estão algumas das fontes de estudo que fundamentam as habilidades previamente destacadas:
                    </p>
                </div>

                {/* Lista de competências comportamentais */}
                <div className={`col col-12 col-lg-5 ${styles.behavioralSkillsList}`}>
                    <ul className="fs-4">
                        <li>Sistemas para Internet - Cursando</li>
                        <li>Ciência da Computação - 1 ano</li>
                        <li>Curso de JS/TS do básico ao avançado - Udemy</li>
                        <li>Curso Power BI para Iniciantes - Hashtag treinamentos</li>
                        <li>Curso de Inglês do básico ao avançado - Instituto Nossa Senhora de Fátima</li>
                        <li>Git e Github para iniciantes - Udemy</li>
                        <li>Curso de Cloud AWS - Udemy</li>
                    </ul>
                </div>

            </div>
        </div>

        <div className="first-wave"></div> {/* Efeito de onda */}

    </section>

    )
}