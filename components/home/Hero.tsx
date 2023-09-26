"use client";

import {BsInstagram, BsArrowDownLeft, BsArrowUpRight, BsArrowDown} from "react-icons/bs";
import {BiLogoLinkedin} from "react-icons/bi";
import styles from "@/styles/components/home/Hero.module.css";
import LogoSvg from "@/svg/LogoSvg";
import {useState, useEffect} from "react";
import {motion, useAnimation} from "framer-motion";
import {AiOutlineClose} from "react-icons/ai";
import LogoMobile from "@/svg/LogoMobile";

export default function Hero() {
    const [textTransform, setTextTransform] = useState(false)
    const textAnimation = useAnimation();
    const hideTextAnimation = useAnimation();
    const stiff = 20;
    const damp = 10;
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        if (window.innerWidth < 480) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }, [])

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
        <section className={styles.hero}>
            <section className={styles.heroContent}>
                <motion.section animate={titlesAnimation} className={styles.heroContentTitles}>
                    <div className={styles.heroContentTitle}>
                        <motion.div style={{
                            display: textTransform ? "none" : "flex"
                        }} animate={hideTextAnimation} className={styles.heroContentTitleCont}>
                            <span className={styles.heroContentTitleContext1}>Asp</span>
                            <span className={styles.heroContentTitleColor1}>iri</span>
                            <span className={styles.heroContentTitleContext1}>ng</span>
                            <span className={styles.heroContentTitleContext1}>~</span>
                            <span className={styles.heroContentTitleContext1}>QS</span>
                        </motion.div>
                        <motion.div style={{
                            display: !textTransform ? "none" : "flex"
                        }} animate={textAnimation} className={styles.heroContentTitleCont}>
                            <span className={styles.heroContentTitleContext}>Qu</span>
                            <span className={styles.heroContentTitleColor}>ant</span>
                            <span className={styles.heroContentTitleContext}>ity</span>
                            <span className={styles.heroContentTitleContext}>~</span>
                            <span className={styles.heroContentTitleContext}>Su</span>
                            <span className={styles.heroContentTitleColor}>rve</span>
                            <span className={styles.heroContentTitleContext}>yor</span>
                        </motion.div> 
                        <div className={styles.heroContentTitleFloat} onClick={() => setTextTransform(!textTransform)}>
                            {
                                textTransform ?
                                <BsArrowDownLeft className={styles.heroContentTitleFloatIcon} /> :
                                <BsArrowUpRight className={styles.heroContentTitleFloatIcon} />
                            }
                        </div>
                    </div>
                    <span className={styles.heroContentTitlesText}>&UCT Student</span>
                </motion.section>
                <motion.p animate={descriptionAnimation} className={styles.heroText}>
                    {showDescription ? <span>Hi there, my name is <span className={styles.heroTextColor}>Zukanke Makapela</span>. I am currently doing my last year (3rd year) student doing a BSc in <span className={styles.heroTextColor}>Construction Studies</span> at UCT.</span> : <span></span>}
                </motion.p>
                <section className={styles.heroContentLoc}>
                    <span className={styles.heroContentLocText}>based in Cape Town.</span>
                    <div className={styles.heroContentLocIcons}>
                        <a 
                            href="" 
                            target="_blank"
                            className={styles.heroContentLocIconsIG}
                        ><BsInstagram /></a>
                        <a 
                            href="" 
                            target="_blank"
                            className={styles.heroContentLocIconsLink}
                        ><BiLogoLinkedin /></a>
                    </div>
                </section>
            </section>
            <section className={styles.heroButtons}>
                <span className={styles.heroButtonsToggle} onClick={() => setShowDescription(!showDescription)}>
                    <span className={styles.heroButtonsToggleText}>More about me</span>
                    {
                        showDescription ?
                        <AiOutlineClose className={styles.heroButtonsToggleIcon} /> :
                        <BsArrowUpRight className={styles.heroButtonsToggleIcon} />
                    }
                </span>
                <a href="" className={styles.heroButtonsRoad}>
                    <span className={styles.heroButtonsRoadText}>See road map</span>
                    <BsArrowDown className={styles.heroButtonsRoadIcon} />
                </a>
            </section>
            {
                isMobile ?
                <>
                    <motion.section 
                        className={styles.heroSVGMobile}
                        initial={{y: 100, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{type: "spring", stiffness: stiff, damping: damp}}
                    >
                        <LogoMobile />
                    </motion.section>
                    <motion.section 
                        className={styles.heroSVG}
                        initial={{y: 100, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{type: "spring", stiffness: stiff, damping: damp}}
                    >
                        <LogoSvg />
                    </motion.section>
                </> :
                <>
                    <motion.section 
                        className={styles.heroSVG}
                        initial={{y: 100, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{type: "spring", stiffness: stiff, damping: damp}}
                    >
                        <LogoSvg />
                    </motion.section>
                    <motion.section 
                        className={styles.heroSVGMobile}
                        initial={{y: 100, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{type: "spring", stiffness: stiff, damping: damp}}
                    >
                        <LogoMobile />
                    </motion.section>
                </>
            }
        </section>
    )
}