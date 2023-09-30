import Experience from "./Experience";
import styles from "@/styles/components/skills/ExperiencesList.module.css";

const listOfExperiences : Array<{title: string, text: string}> = [
    {
        title: "Concor",
        text: "Department, which is endorsed by their employer/s, on the nature and duration of the some texrt here to expansd whatever."
    },
    {
        title: "Concor",
        text: "Department, which is endorsed by their employer/s, on the nature and duration of the some texrt here to expansd whatever."
    },
]

export default function ExperiencesList() {
    return (
        <section className={styles.experiencesList}>
            {listOfExperiences.map((exp, index) => {
                return (
                    <Experience
                        key={index}
                        title={exp.title}
                        text={exp.text}
                    />
                )
            })}
        </section>
    )
}