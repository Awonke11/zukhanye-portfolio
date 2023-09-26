import Details from "@/components/resume/Details";
import Info from "@/components/resume/Info";
import PageTitle from "@/components/utils/PageTitle";
import styles from "@/styles/pages/Resume.module.css";

export default function Resume() {
    return (
        <section className={styles.resume}>
            <PageTitle title="RESUME/CV" />
            <section className={styles.resumeContent}>
                <Info />
                <Details />
            </section>
        </section>
    )
}