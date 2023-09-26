import styles from "@/styles/components/navigation/DesktopNav.module.css";
import { AiOutlineMail, AiOutlineHome } from "react-icons/ai";
import NavLink from "@/components/navigation/NavLink";

export default function DesktopNav() {
    return (
        <section className={styles.desktopNav}>
            <section className={styles.desktopNavLogo}>
                <span className={styles.desktopNavLogoTitle}>He</span>
                <span className={styles.desktopNavLogoColor}>ll</span>
                <span className={styles.desktopNavLogoTitle}>o.</span>
            </section>
            <section className={styles.desktopNavContainer}>
                <section className={styles.desktopNavContainerLinks}>
                    <NavLink 
                        link="/"
                        text="Home"
                        url=""
                    />
                    <NavLink 
                        link="/resume"
                        text="Resume/CV"
                        url=""
                    />
                    <NavLink 
                        link="/skills"
                        text="Skills"
                        url=""
                    />
                    <NavLink 
                        link="/gallery"
                        text="Gallery"
                        url=""
                    />
                </section>
                <a href="mailto:ajmnotoza@gmail.com" className={styles.desktopNavContainerMail}>
                    <AiOutlineMail className={styles.desktopNavContainerMailIcon} />
                    <span className={styles.desktopNavContainerMailText}>Let us talk</span>
                </a>
            </section>
        </section>
    )
}