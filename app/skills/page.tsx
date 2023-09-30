import Attributes from "@/components/skills/Attributes";
import Experiences from "@/components/skills/Experiences";
import Outcomes from "@/components/skills/Outcomes";
import TableContent from "@/components/skills/TableContent";
import Training from "@/components/skills/Training";
import PageTitle from "@/components/utils/PageTitle";
import styles from "@/styles/pages/Skills.module.css";

export default function Skills() {
    return (
        <section className={styles.skills}>
            <PageTitle title="Skills" />
            <section className={styles.skillsContent}>
                <TableContent />
                <section className={styles.skillsContentMain}>
                    <Outcomes />
                    <Attributes />
                    <Training />
                    <Experiences />
                </section>
            </section>
        </section>
    )
}