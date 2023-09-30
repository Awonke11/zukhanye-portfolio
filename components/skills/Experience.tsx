import {AiOutlineFilePdf} from "react-icons/ai";
import styles from "@/styles/components/skills/Experience.module.css";

export default function Experience({title, text} : {
    title: string,
    text: string
}) {
    return (
        <section className={styles.experience}>
            <h3 className={styles.experienceTitle}>{title}</h3>
            <p className={styles.experienceText}>{text}</p>
            <h3 className={styles.experienceFileTitle}>Download files:</h3>
            <section className={styles.experienceFiles}>
                <File 
                    name="Some pdf file here"
                    file=""
                />
                <File 
                    name="Some pdf file with link"
                    file=""
                />
                <File 
                    name="Some pdf file here and with link"
                    file=""
                />
            </section>
        </section>
    )
}

const File = ({name, file} : {
    name: string,
    file: any
}) => {
    return (
        <div className={styles.file}>
            <div>
                <AiOutlineFilePdf className={styles.fileIcon} />
            </div>
            <a href={file} className={styles.fileText} download>{name}</a>
        </div>
    )
}