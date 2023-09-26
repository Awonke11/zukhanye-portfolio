"use client";

import {BsInstagram, BsArrowDownLeft, BsArrowUpRight, BsArrowDown} from "react-icons/bs";
import {BiLogoLinkedin} from "react-icons/bi";
import styles from "@/styles/components/home/MobileHero.module.css";
import {useState, useEffect} from "react";
import {motion, useAnimation} from "framer-motion";
import {AiOutlineClose} from "react-icons/ai";
import LogoMobile from "@/svg/LogoMobile";

export default function MobileHero() {
    const [textTransform, setTextTransform] = useState(false)
    const textAnimation = useAnimation();
    const hideTextAnimation = useAnimation();
    const stiff = 20;
    const damp = 10

    const [showDescription, setShowDescription] = useState(false)
    const titlesAnimation = useAnimation();
    const descriptionAnimation = useAnimation();

    useEffect(() => {
        if (textTransform) {
            textAnimation.start({
                opacity: 1,
                transition: {type: "spring", stiffness: stiff, damping: damp},
                width: "auto"
            })
            hideTextAnimation.start({
                opacity: 0,
                transition: {type: "spring", stiffness: stiff, damping: damp},
                width: 0,
                display: "none"
            })
        } else {
            textAnimation.start({
                opacity: 0,
                transition: {type: "spring", stiffness: stiff, damping: damp},
                width: 0,
                display: "none"
            })
            hideTextAnimation.start({
                opacity: 1,
                transition: {type: "spring", stiffness: stiff, damping: damp},
                width: "auto"
            })
        }
    }, [hideTextAnimation, textAnimation, textTransform])

    useEffect(() => {
        if (showDescription) {
            descriptionAnimation.start({
                opacity: 1,
                transition: {type: "spring", stiffness: stiff, damping: damp},
                height: "auto",
                width: "auto",
                y: 0
            })
            titlesAnimation.start({
                opacity: 0,
                transition: {type: "spring", stiffness: stiff, damping: damp},
                height: 0,
                y: -10
            })
        } else {
            descriptionAnimation.start({
                opacity: 0,
                transition: {type: "spring", stiffness: stiff, damping: damp},
                height: 0,
                width: "auto",
                y: -10
            })
            titlesAnimation.start({
                opacity: 1,
                transition: {type: "spring", stiffness: stiff, damping: damp},
                height: "auto",
                y: 0
            })
        }
    }, [descriptionAnimation, showDescription, titlesAnimation])

    return (
        <section className={styles.mobileHero}>
            <section className={styles.mobileHeroContent}>
                <motion.section animate={titlesAnimation} className={styles.mobileHeroContentTitles}>
                    <div className={styles.mobileHeroContentTitle}>
                        <motion.div style={{
                            display: textTransform ? "none" : "flex"
                        }} animate={hideTextAnimation} className={styles.mobileHeroContentTitleCont}>
                            <span className={styles.mobileHeroContentTitleContext1}>Asp</span>
                            <span className={styles.mobileHeroContentTitleColor1}>iri</span>
                            <span className={styles.mobileHeroContentTitleContext1}>ng</span>
                            <span className={styles.mobileHeroContentTitleContext1}>~</span>
                            <span className={styles.mobileHeroContentTitleContext1}>QS</span>
                        </motion.div>
                        <motion.div style={{
                            display: !textTransform ? "none" : "flex"
                        }} animate={textAnimation} className={styles.mobileHeroContentTitleCont}>
                            <span className={styles.mobileHeroContentTitleContext}>Qu</span>
                            <span className={styles.mobileHeroContentTitleColor}>ant</span>
                            <span className={styles.mobileHeroContentTitleContext}>ity</span>
                            <span className={styles.mobileHeroContentTitleContext}>~</span>
                            <span className={styles.mobileHeroContentTitleContext}>Su</span>
                            <span className={styles.mobileHeroContentTitleColor}>rve</span>
                            <span className={styles.mobileHeroContentTitleContext}>yor</span>
                        </motion.div> 
                        <div className={styles.mobileHeroContentTitleFloat} onClick={() => setTextTransform(!textTransform)}>
                            {
                                textTransform ?
                                <BsArrowDownLeft className={styles.mobileHeroContentTitleFloatIcon} /> :
                                <BsArrowUpRight className={styles.mobileHeroContentTitleFloatIcon} />
                            }
                        </div>
                    </div>
                    <span className={styles.mobileHeroContentTitlesText}>&UCT Student</span>
                </motion.section>
                <motion.p animate={descriptionAnimation} className={styles.mobileHeroText}>
                    {showDescription ? <span>Hi there, my name is <span className={styles.mobileHeroTextColor}>Zukanke Makapela</span>. I am currently doing my last year (3rd year) student doing a BSc in <span className={styles.mobileHeroTextColor}>Construction Studies</span> at UCT.</span> : <span></span>}
                </motion.p>
                <section className={styles.mobileHeroContentLoc}>
                    <span className={styles.mobileHeroContentLocText}>based in Cape Town.</span>
                    <div className={styles.mobileHeroContentLocIcons}>
                        <a 
                            href="" 
                            target="_blank"
                            className={styles.mobileHeroContentLocIconsIG}
                        ><BsInstagram /></a>
                        <a 
                            href="" 
                            target="_blank"
                            className={styles.mobileHeroContentLocIconsLink}
                        ><BiLogoLinkedin /></a>
                    </div>
                </section>
            </section>
            <section className={styles.mobileHeroButtons}>
                <span className={styles.mobileHeroButtonsToggle} onClick={() => setShowDescription(!showDescription)}>
                    <span className={styles.mobileHeroButtonsToggleText}>More about me</span>
                    {
                        showDescription ?
                        <AiOutlineClose className={styles.mobileHeroButtonsToggleIcon} /> :
                        <BsArrowUpRight className={styles.mobileHeroButtonsToggleIcon} />
                    }
                </span>
                <a href="" className={styles.mobileHeroButtonsRoad}>
                    <span className={styles.mobileHeroButtonsRoadText}>See road map</span>
                    <BsArrowDown className={styles.mobileHeroButtonsRoadIcon} />
                </a>
            </section>
            <motion.section 
                className={styles.mobileHeroSVGMobile}
                initial={{y: 100, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{type: "spring", stiffness: stiff, damping: damp}}
            >
                <LogoMobile />
            </motion.section>
        </section>
    )
}