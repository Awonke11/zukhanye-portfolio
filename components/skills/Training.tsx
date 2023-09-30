import Info from "./Info";
import styles from "@/styles/components/skills/Training.module.css";
import SourceLink from "./SourceLink";

export default function Training() {
    return (
        <section id="training" className={styles.training}>
            <h2 className={styles.trainingTitle}>Practical Training</h2>
            <section className={styles.trainingContent}>
                <Info 
                    title="Aim"
                    text="To supplement theoretical learning with practical exposure to work situations in the built
environment."
                />
                <Info 
                    title="Outcome"
                    text="After completing this module the student should be able to demonstrate new skills acquired in the workplace."
                />
                <Info 
                    title="Assessment"
                    text="Students are required to submit a written report in accordance with the guidelines set out by the Department, which is endorsed by their employer/s, on the nature and duration of the experience obtained in the workplace."
                />
                <SourceLink 
                    link=""
                    text="CEM Departmental Handbooks: CON1007X, CON2013X, CON3023X"
                />
            </section>
        </section>
    )
}