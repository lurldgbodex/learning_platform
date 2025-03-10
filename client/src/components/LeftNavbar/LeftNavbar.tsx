import { useLocation } from "react-router-dom";
import { LuLayoutDashboard, LuLogOut } from "react-icons/lu";
import { MdOutlineFaceUnlock } from "react-icons/md";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";
import logo from '../../assets/logo.jpeg';
import course from '../../assets/course.svg';
import prototypeIcon from '../../assets/prototype.svg';
import liveIcon from '../../assets/nav-live.svg';
import discussionIcon from '../../assets/discussion.svg';
import styles from './LeftNavbar.module.css';

const LeftNavbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    }

    return (
        <nav className={styles["navbar"]}>
            <div className={`${styles["nav-links"]} ${styles.dashboard}`}>
                <img src={logo} alt="Logo" />
                <a href='/dashboard' className={`${styles['nav-items']} ${styles.dashboard} ${location.pathname === "/dashboard" ? styles["active"] : ""}`}>
                    <LuLayoutDashboard />
                </a>
                <div className={ `${styles["nav-links"]} ${styles.iconContainer} `}>
                  <a href='/courses' className={`${styles['nav-items']} ${location.pathname === "/courses" ? styles["active"] : ""}`}>
                    <img src={course} className={styles.navIcon} alt="course icon" />
                  </a>
                  <a href='/prototypes' className={`${styles['nav-items']} ${location.pathname === "/prototypes" ? styles["active"] : ""}`}>
                    <img src={prototypeIcon} className={styles.navIcon} alt="prototyp icon" />
                  </a>
                  <a href='/discussions' className={`${styles['nav-items']} ${location.pathname === "/discussions" ? styles["active"] : ""}`}>
                  <img src={discussionIcon} className={styles.navIcon} alt="live Icon" />
                  </a>
                  <a href='/live-lessions' className={`${styles['nav-items']} ${location.pathname === "/live-lessons" ? styles["active"] : ""}`}>
                    <img src={liveIcon} className={styles.navIcon} alt="live Icon" />
                  </a>
                </div>
            </div>
            <div className={styles.profileCard} onClick={toggleMenu}>
                <MdOutlineFaceUnlock />
                {isMenuOpen && (
                    <ul className={styles["dropdown-menu"]}>
                        <li className={styles["nav-margin"]}><LuLogOut />Logout</li>
                        <li className={styles["nav-margin"]}><CgProfile />Profile</li>
                        <div className={styles["nav-prof-container"]}>
                            <li className={styles["nav-prof-icon"]}><MdOutlineFaceUnlock color="black" /></li>
                            <li>Segun Gbodi <RiArrowDropDownLine /></li>
                        </div>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default LeftNavbar;