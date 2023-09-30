import {GoDotFill} from "react-icons/go";
import styles from "@/styles/components/skills/ShowList.module.css";

export default function ShowList({description, list} : {
    description: string,
    list: Array<string>
}) {
    return (
        <section className={styles.showList}>
            <p className={styles.showListText}>{description}:</p>
            <section className={styles.showListContent}>
                {list.map((item, index) => {
                    return (
                        <div key={index} className={styles.showListItem}>
                            <div>
                                <GoDotFill className={styles.showListItemIcon} />
                            </div>
                            <p className={styles.showListItemText}>{item}</p>
                        </div>
                    )
                })}
            </section>
        </section>
    )
}