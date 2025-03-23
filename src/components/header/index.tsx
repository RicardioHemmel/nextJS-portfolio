"use client"; // Define que o componente será renderizado no lado do cliente

import styles from "./Header.module.css";
import { useState, useEffect } from "react"; 

export function Header() {
    // Definição de Estados
    const [scrollY, setScrollY] = useState(0);
    const [scrollNavClass, setScrollNavClass] = useState("");
    const [colorNavClass, setColorNavClass] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Atualiza a posição do scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Adiciona efeito ao navbar quando o usuário rolar a página
    useEffect(() => {
        if (scrollY > 500) {
            setScrollNavClass(styles.navBarTransitionEffect);
            if (window.innerWidth > 991) {
                setColorNavClass(styles.navBarBackgroundColor);
            }
        } else {
            setScrollNavClass("");
            setColorNavClass("");
        }
    }, [scrollY]);

    // Função para alternar o menu hamburguer
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Fecha o menu ao clicar em qualquer link
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header>
            <nav className={`${styles.navbarComponent} ${scrollNavClass} ${colorNavClass} ${isMenuOpen ? styles.toggleNavBarBackground : ""} navbar navbar-expand-lg fixed-top fs-5`}>
                <div className={`container-fluid py-2 ${styles.navMainContainer}`}>
                    <a className={`${styles.navSpacing} ${styles.portfolioText} nav-link milonga-regular yellow-text d-flex justify-content-center ms-2`} href="#">
                        Portfólio
                    </a>
                    {/* Botão do menu hamburguer */}
                    <button 
                        className={`navbar-toggler`} 
                        type="button" 
                        onClick={toggleMenu} 
                        aria-expanded={isMenuOpen ? "true" : "false"}
                        aria-label="Toggle navigation"
                    >
                        <span className={`navbar-toggler-icon`}></span>
                    </button>
                    
                    {/* Menu que abre/fecha com base no estado */}
                    <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""} ${styles.navbarTogglerDemo02}`}>
                        <ul className={`navbar-nav mx-auto mb-lg-0 gap-3`}>
                            <li className={`nav-item`}>
                                <a className={`nav-link text-light`} href="#" onClick={closeMenu}>Início</a>
                            </li>
                            <li className={`nav-item`}>
                                <a className={`nav-link text-light`} href="#about-me-section" onClick={closeMenu}>Sobre</a>
                            </li>
                            <li className={`nav-item`}>
                                <a className={`nav-link text-light`} href="#abilities-section" onClick={closeMenu}>Habilidades</a>
                            </li>
                            <li className={`nav-item`}>
                                <a className={`nav-link text-light`} href="#projects-section" onClick={closeMenu}>Projetos</a>
                            </li>
                            <li className={`nav-item`}>
                                <a className={`nav-link text-light`} href="#footer-section" onClick={closeMenu}>Contato</a>
                            </li>
                        </ul>
                        <div className={`nav-spacing d-flex align-items-center me-4 ${styles.contactHeader}`}>
                            <img src="imgs/icons/telIcon.png" alt="ícone de telefone" className={`${styles.telIcon} me-3`} />
                            <a href="tel:+5511944880786" target="_blank"
                                className={`nav-link yellow-text text-nowrap`} onClick={closeMenu}>11 94488-0786</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
