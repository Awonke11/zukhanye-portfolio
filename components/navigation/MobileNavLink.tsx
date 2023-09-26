import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import styles from "@/styles/components/navigation/MobileNavLink.module.css";

export default function MobileNavLink({link, title, text, url, setShowNav} : {
    link: string,
    title: string;
    text: string;
    url: string;
    setShowNav: (showNav: boolean) => void
}) {
    return (
        <Link href={link} className={styles.mobileNavLink} onClick={() => setShowNav(false)}>
            <div className={(url === link) ? styles.mobileNavLinkHeaderActive : styles.mobileNavLinkHeader}>
                <h3 className={styles.mobileNavLinkHeaderTitle}>{title}</h3>
                <BsArrowUpRight className={styles.mobileNavLinkHeaderText} />
            </div>
            <p className={styles.mobileNavLinkText}>{text}</p>
        </Link>
    )
}