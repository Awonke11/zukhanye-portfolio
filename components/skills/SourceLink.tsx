import styles from "@/styles/components/skills/SourceLink.module.css";

export default function SourceLink({link, text} : {
    link: string,
    text: string
}) {
    return (
        <div className={styles.sourceLink}>
            <span className={styles.sourceLinkText}>Source:</span>
            <a href={link} className={styles.sourceLinklink}>{text}</a>
        </div>
    )
}