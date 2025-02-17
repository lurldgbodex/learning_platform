import { CiSearch, CiSettings } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa6";
import styles from './TopHeader.module.css';
import { IoMdMenu } from "react-icons/io";

const TopHeader = ({ title }: { title: string }) => {
    return (
        <header className={styles.topHeader}>
            <div className={styles.headerLeft}>
                <IoMdMenu className={styles.menuIcon} />
                <h1>{title}</h1>
            </div>
            <div className={styles.headerRight}>
                <div className={`${styles.searchBox} ${styles.disable}`}>
                    <input type="text" placeholder="Search" />
                    <CiSearch className={`${styles.searchIcon}`} />
                </div>
                <div className={styles.icons}>
                    <FaRegBell className={styles.icon}/>
                    <CiSettings size={26} strokeWidth={0.5} className={`${styles.icon} ${styles.disable}`} />
                </div>
            </div>
        </header>
    );
}

export default TopHeader;