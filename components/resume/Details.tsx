import { BsCalendar2Date } from "react-icons/bs";
import styles from "@/styles/components/resume/Details.module.css";

export default function Details() {
    return (
        <section className={styles.details}>
            <section className={styles.detailsContent}>
                <h2 className={styles.detailsContentTitle}>
                    <span>Work</span>
                    <span>~</span>
                    <span className={styles.detailsContentTitleColor}>Expe</span>
                    <span>rience</span>
                </h2>
                <section className={styles.detailsContentList}>
                    <Experience 
                        title="Concor Construction"
                        text="I worked with the civil engineers and  quantity surveyors in the conradie park project."
                        date="June-July 2022"
                    />
                    <Experience 
                        title="Igual Project Managers"
                        text="I worked with the construction managers in the V&A Helipad and Desalination. "
                        date="June-July 2023"
                    />
                </section>
            </section>
            <section className={styles.detailsContent}>
                <h2 className={styles.detailsContentTitle}>
                    <span>Volun</span>
                    <span className={styles.detailsContentTitleColor}>teer</span>
                    <span>~</span>
                    <span>Experience</span>
                </h2>
                <section className={styles.detailsContentList}>
                    <Experience 
                        title="UCT Jagger Library"
                        text="I worked with the construction managers in the V&A Helipad and Desalination."
                        date="June-July 2023"
                    />
                    <Experience 
                        title="Combuild"
                        text="I worked with the construction managers in the V&A Helipad and Desalination."
                        date="June-July 2023"
                    />
                    <Experience 
                        title="Blue Moon Projects"
                        text="I worked with the construction managers in the V&A Helipad and Desalination."
                        date="June-July 2023"
                    />
                </section>
            </section>
            <section className={styles.detailsContact}>
                <h2 className={styles.detailsContactTitle}>Contact Information</h2>
            </section>
        </section>
    )
}

const Experience = ({title, text, date} : {
    title: string;
    text: string;
    date: string
}) => {
    return (
        <section className={styles.experience}>
            <div className={styles.experienceHeader}>
                <h3 className={styles.experienceHeaderTitle}>{title}</h3>
                <div className={styles.experienceHeaderInfo}>
                    <BsCalendar2Date className={styles.experienceHeaderInfoIcon} />
                    <span className={styles.experienceHeaderInfoText}>{date}</span>
                </div>
            </div>
            <p className={styles.experienceText}>{text}</p>
        </section>
    )
}