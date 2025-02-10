import { CiSearch, CiSettings } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa6";
import styles from './TopHeader.module.css';

const TopHeader = ({ title }: { title: string }) => {
    return (
        <header className={styles["top-header"]}>
            <div className={styles["header-left"]}>
                <h1>{title}</h1>
            </div>
            <div className={styles["header-right"]}>
                <div className={styles["search-box"]}>
                    <input type="text" placeholder="Search" />
                    <CiSearch className={styles["search-icon"]} />
                </div>
                <div className={styles["icons"]}>
                    <FaRegBell className={styles["icon" ]}/>
                    <CiSettings size={26} strokeWidth={0.5} className={styles["icon"]} />
                </div>
            </div>
        </header>
    );
}

export default TopHeader;