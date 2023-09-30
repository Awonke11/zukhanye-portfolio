import styles from "@/styles/components/skills/Experiences.module.css";
import ExperiencesList from "./ExperiencesList"

export default function Experiences() {
    return (
        <section id="experience" className={styles.experiences}>
            <h2 className={styles.experiencesTitle}>Work Experience</h2>
            <section className={styles.experiencesContent}>
                <ExperiencesList />
            </section>
        </section>
    )
}