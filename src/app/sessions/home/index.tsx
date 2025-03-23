import styles from "./Home.module.css";

export function HomeSession() {
    return (
        <section className={`${styles.welcomeBanner} d-flex justify-content-center align-items-center flex-column`}>
            <h1>Olá, eu sou o <span className={`yellow-text`}>Ricardo Hemmel</span></h1>
            <p className={`fs-5`}>Estudante de Sistemas para Internet </p>
            <p className={`fs-5`}>Full stack developer</p>
            <div className={`first-wave`}></div>  {/* Efeito de onda */}
        </section>
    )
}