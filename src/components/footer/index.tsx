import Link from "next/link";
import styles from "./Footer.module.css"

export function Footer() {
    return (

        <section className={`bg-dark-blue ${styles.footerSection}`} id="footer-section">
            <footer>

                {/* Container métodos de contato e imagem */}
                <div className={`container-fluid container-lg d-flex justify-content-between align-items-center pt-5 ${styles.footerContainer}`}>

                    <div id="title-and-text-box">
                        <h3 className="yellow-text fs-2">Contate-me</h3>

                        {/* Caixa com métodos de contato */}
                        <div className={styles.contactMethodBox}>
                            {/* Outlook */}
                            <a href="mailto:ricardo.helfstein@hotmail.com" target="_blank"
                                className="d-flex align-items-center nav-link">
                                <img className={styles.footerIconsResize} src="imgs/icons/outlookIcon.png"
                                    alt="Ícone do Outlook"></img>
                                <p className="m-0 fs-5 ms-4">ricardo.helfstein@hotmail.com</p>
                            </a>

                            {/* Linkedin */}
                            <a href="https://www.linkedin.com/in/ricardo-hemmel-a6b97626b/" target="_blank"
                                className="d-flex align-items-center nav-link">
                                <img className={styles.footerIconsResize} src="imgs/icons/linkedinIcon.png"
                                    alt="Ícone do Linkedin"></img>
                                <p className="m-0 fs-5 ms-4">Ricardo H. H. Conceição</p>
                            </a>

                            {/* Github */}
                            <a href="https://github.com/RicardioHemmel" target="_blank"
                                className="d-flex align-items-center nav-link">
                                <img className={styles.footerIconsResize} src="imgs/icons/githubIcon.png"
                                    alt="Ícone do Github"></img>
                                <p className="m-0 fs-5 ms-4">RicardioHemmel</p>
                            </a>

                            {/* WhatsApp */}
                            <a href="https://api.whatsapp.com/send?phone=5511944880786" target="_blank"
                                className="d-flex align-items-center nav-link">
                                <img className={styles.footerIconsResize} src="imgs/icons/whatsappIcon.png"
                                    alt="Ícone do WhatsApp"></img>
                                <p className="m-0 fs-5 ms-4">11 94488-0786</p>
                            </a>

                        </div>
                    </div>

                    {/* Caixa com imagem rodapé */}
                    <div>
                        <img className={styles.contactFooterImg} src="imgs/arts/boyArt.png" alt="Arte no rodapé para contato" />
                    </div>

                </div>

            </footer>
        </section>

    )
}