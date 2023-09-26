import Image from "next/image";
import { AiOutlineFileText } from "react-icons/ai";
import {CiCalendarDate} from "react-icons/ci";
import zuks from "../../images/zuks.png";
import styles from "@/styles/components/resume/Info.module.css";

export default function Info() {
    return (
        <section className={styles.info}>
            <Image 
                src={zuks}
                alt="Image of a smiling QS"
                className={styles.infoImage}
            />
            <section className={styles.infoContent}>
                <h2 className={styles.infoContentTitle}>
                    <span>Edu</span>
                    <span className={styles.infoContentTitleColor}>ca</span>
                    <span>tion</span>
                </h2>
                <section className={styles.infoContentList}>
                    <School 
                        title="Clarendon Primary and High School for Girls"
                        text="Grade 1 - 12"
                        date="2009-2020"
                    />
                    <School 
                        title="University of Cape Town"
                        text="BSC in Construction studies "
                        date="2021-2023"
                    />
                </section>
            </section>
            <section className={styles.infoContent}>
                <h2 className={styles.infoContentTitle}>
                    <span>S</span>
                    <span className={styles.infoContentTitleColor}>ki</span>
                    <span>lls</span>
                </h2>
            </section>
        </section>
    )
}

const School = ({title, text, date} : {
    title: string;
    text: string;
    date: string
}) => {
    return (
        <section className={styles.school}>
            <h2 className={styles.schoolTitle}>{title}</h2>
            <section className={styles.schoolContent}>
                <div className={styles.schoolContentInfo}>
                    <CiCalendarDate className={styles.schoolContentInfoIcon} />
                    <span className={styles.schoolContentInfoText}>{date}</span>
                </div>
                <div className={styles.schoolContentInfo}>
                    <AiOutlineFileText className={styles.schoolContentInfoIcon} />
                    <span className={styles.schoolContentInfoText}>{text}</span>
                </div>
            </section>
        </section>
    )
}

