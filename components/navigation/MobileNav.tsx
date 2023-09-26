"use client";

import styles from "@/styles/components/navigation/MobileNav.module.css";
import {GiHamburgerMenu} from "react-icons/gi";
import {GrClose} from "react-icons/gr";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function MobileNav() {
    const [showNav, setShowNav] = useState(false)
    const navAnimate = useAnimation();

    useEffect(() => {
        if (showNav) {
            navAnimate.start({
                opacity: 1,
                height: "auto",
                y: 0,
                transition: {type: "spring", stiffness: 20, damping: 10}
            })
        } else {
            navAnimate.start({
                opacity: 0,
                height: 0,
                y: 100,
                transition: {type: "spring", stiffness: 20, damping: 10}
            })
        }
    }, [navAnimate, showNav])

    return (
        <section className={styles.mobileNav}>
            <section className={styles.mobileNavHeader}>
                <section className={styles.mobileNavHeaderLogo}> 
                    <span className={styles.mobileNavHeaderLogoTitle}>He</span>
                    <span className={styles.mobileNavHeaderLogoColor}>ll</span>
                    <span className={styles.mobileNavHeaderLogoTitle}>o.</span>
                </section>
                <GiHamburgerMenu onClick={() => setShowNav(true)} className={styles.mobileNavHeaderIcon} />
            </section>
            <motion.section animate={navAnimate} className={styles.mobileNavContent}>
                <GrClose className={styles.mobileNavContentIcon} onClick={() => setShowNav(false)} />
            </motion.section>
        </section>
    )
}