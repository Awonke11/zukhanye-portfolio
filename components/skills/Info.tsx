import styles from "@/styles/components/skills/Info.module.css";

export default function Info({title, text} : {
    title: string,
    text: string
}) {
    return (
        <div className={styles.info}>
            <h3 className={styles.infoTitle}>{title}</h3>
            <p className={styles.infoText}>{text}</p>
        </div>
    )
}