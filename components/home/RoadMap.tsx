import styles from "@/styles/components/home/RoadMap.module.css";
import Road from "@/svg/Road";

export default function RoadMap() {
    return (
        <section className={styles.roadMap}>
            <div className={styles.roadMapSvg}>
                <Road />
            </div>
            <section className={styles.roadMapContent}>
                <p>In progress...</p>
            </section>
        </section>
    )
}