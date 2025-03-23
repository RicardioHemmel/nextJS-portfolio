import Link from "next/link";
import Image from "next/image";
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
                            <Link href="https://outlook.live.com/owa/?path=/mail/action/compose&to=ricardo.hemmel@hotmail.com&subject=Portf%C3%B3lio&body=Ol%C3%A1%20Ricardo%2C" target="_blank"
                                className="d-flex align-items-center nav-link">
                                <Image
                                    className={styles.footerIconsResize}
                                    src={`/imgs/icons/outlookIcon.png`}
                                    alt="Ícone do Outlook"
                                    width={100}
                                    height={100} />
                                <p className="m-0 fs-5 ms-4">ricardo.helfstein@hotmail.com</p>
                            </Link>

                            {/* Linkedin */}
                            <Link href="https://www.linkedin.com/in/ricardo-hemmel-a6b97626b/" target="_blank"
                                className="d-flex align-items-center nav-link">
                                <Image
                                    className={styles.footerIconsResize}
                                    src={`/imgs/icons/linkedinIcon.png`}
                                    alt="Ícone do Linkedin"
                                    width={100}
                                    height={100} />
                                <p className="m-0 fs-5 ms-4">Ricardo H. H. Conceição</p>
                            </Link>

                            {/* Github */}
                            <Link href="https://github.com/RicardioHemmel" target="_blank"
                                className="d-flex align-items-center nav-link">
                                <Image
                                    className={styles.footerIconsResize}
                                    src={`/imgs/icons/githubicon.png`}
                                    alt="Ícone do Github"
                                    width={100}
                                    height={100} />
                                <p className="m-0 fs-5 ms-4">RicardioHemmel</p>
                            </Link>

                            {/* WhatsApp */}
                            <Link href="https://api.whatsapp.com/send?phone=5511944880786" target="_blank"
                                className="d-flex align-items-center nav-link">
                                <Image
                                    className={styles.footerIconsResize}
                                    src={`/imgs/icons/whatsappIcon.png`}
                                    alt="Ícone do Github"
                                    width={100}
                                    height={100} />
                                <p className="m-0 fs-5 ms-4">11 94488-0786</p>
                            </Link>

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