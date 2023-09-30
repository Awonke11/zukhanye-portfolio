import Hero from '@/components/home/Hero';
import PageTitle from '@/components/utils/PageTitle';
import styles from "@/styles/pages/page.module.css";

export default function Home() {
  return (
    <section className={styles.main}>
        <Hero />
        <PageTitle title={"PORTFOLIO ROADMAP"} />
        {/* <RoadMap /> */}
    </section>
  )
}
