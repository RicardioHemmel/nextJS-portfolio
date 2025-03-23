import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
    title: string;
    description: string;
    imgPath: string;
    modalText?: string;
    modalTarget?: string;
    linkText?: string;
    linkUrl?: string;
    style?: React.CSSProperties;
}

export function ProjectCard({
    title,
    description,
    imgPath,
    modalText,
    modalTarget,
    linkText,
    linkUrl,
    style = {},
}: ProjectCardProps) {
    return (
        <div className={`card ${styles.projectCard} col col-9 col-md-8 col-lg-3 px-0 border-0 rounded-5`} style={style}>
            <div className={`d-flex justify-content-center ${styles.backgroundProjects} rounded-4 py-5`}>
                <img src={imgPath} className={`card-img-top ${styles.imgCardResize}`} alt={title} />
            </div>
            <div className="card-body">
                <h5 className={`${styles.cardTitle} jura yellow-text fs-4`}>{title}</h5>
                <div className={`d-flex flex-column justify-content-around ${styles.cardContentContainer}`}>
                    <p className={`${styles.cardText} fs-5`}>
                        {description}
                    </p>
                    <div className="d-flex justify-content-around">
                        {modalText && modalTarget && (
                            <button type="button" className={`btn ${styles.modalBtn}`} data-bs-toggle="modal" data-bs-target={`#${modalTarget}`}>
                                {modalText}
                            </button>
                        )}
                        {linkUrl && linkText && (
                            <a href={linkUrl} target="_blank" className={`btn ${styles.btnCheckout}`}>
                                {linkText}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}