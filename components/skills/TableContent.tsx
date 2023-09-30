import {MdLink} from "react-icons/md";
import styles from "@/styles/components/skills/TableContent.module.css";

const tableData: Array<{name: string, link: string}> = [
    {
        name: "Degree outcomes",
        link: "outcomes"
    },
    {
        name: "Graduate Attributes",
        link: "attributes"
    },
    {
        name: "Practical training",
        link: "training"
    },
    {
        name: "Work Experience",
        link: "experience"
    },
]

export default function TableContent() {
    return (
        <section className={styles.tableContent}>
            <h2 className={styles.tableContentTitle}>Table of Content</h2>
            <section className={styles.tableContentList}>
                {tableData.map((data, index) => {
                    return (
                        <a 
                            href={`#${data.link}`} 
                            key={index}
                            className={styles.tableContentLink}
                        >
                            <MdLink className={styles.tableContentLinkIcon} />
                            <span className={styles.tableContentLinkText}>{data.name}</span>
                        </a>
                    )
                })}
            </section>
        </section>
    )
}