import styles from "@/styles/components/utils/PageTitle.module.css";
import {LiaTruckMonsterSolid} from "react-icons/lia";

export default function PageTitle({title} : {title: string}) {
    return (
        <section className={styles.pageTitle}>
            <section className={styles.pageTitleContent}>
                <div className={styles.pageTitleContentLogo}>
                    <LiaTruckMonsterSolid className={styles.pageTitleContentLogoIcon} />
                </div>
                <h2 className={styles.pageTitleContentTitle}>{title}</h2>
            </section>
        </section>
    )
} 