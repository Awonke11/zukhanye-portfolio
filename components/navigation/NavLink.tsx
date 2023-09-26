import Link from 'next/link';
import styles from "@/styles/components/navigation/NavLink.module.css";

export default function NavLink({link, text, url} : {link: string, text: string, url: string}) {
    return (
        <Link 
            href={link} 
            className={(text === url) ? styles.navLinkActive : styles.navLink}
        >
            <p>{text}</p>
        </Link>
    )
}