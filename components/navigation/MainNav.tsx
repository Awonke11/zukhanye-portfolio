import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import styles from "@/styles/components/navigation/MainNav.module.css";

export default function MainNav() {
    return (
        <nav className={styles.mainNav}>
            <DesktopNav />
            <MobileNav />
        </nav>
    )
}