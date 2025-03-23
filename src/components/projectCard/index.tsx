import styles from "./ProjectCard.module.css";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    imgPath: string;
    modalText?: string;
    modalTarget?: string;
    linkText?: string;
    linkUrl?: string;
}

export function ProjectCard({
    title,
    description,
    imgPath,
    modalText,
    modalTarget,
    linkText,
    linkUrl,
}: ProjectCardProps) {
    return (
        <div className={`card ${styles.projectCard} col col-9 col-md-8 col-lg-3 px-0 border-0 rounded-5`} >
            <div className={`d-flex justify-content-center ${styles.backgroundProjects} rounded-4 py-5`}>
                <Image
                src={imgPath} 
                className={`card-img-top ${styles.imgCardResize}`} 
                alt={title}
                width={100}
                height={100}
                />
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
                            <Link href={linkUrl} target="_blank" className={`btn ${styles.btnCheckout}`}>
                                {linkText}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}