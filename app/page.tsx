"use client";

import Hero from '@/components/home/Hero'
import MobileHero from '@/components/home/MobileHero'
import styles from '@/styles/pages/page.module.css'

export default function Home() {
  const isMobile = window.innerWidth < 480
  return (
    <section className={styles.main}>
        {
          isMobile ?
          <>
            <MobileHero />
            <Hero />
          </>:
          <>
            <Hero />
            <MobileHero />
          </>
        }
    </section>
  )
}
