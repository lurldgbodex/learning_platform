import { useLocation } from "react-router-dom";
import { LuGraduationCap, LuLayoutDashboard, LuLogOut } from "react-icons/lu";
import { MdOutlineFaceUnlock, MdOutlineMessage } from "react-icons/md";
import { CiStreamOn } from "react-icons/ci";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";
import logo from '../../assets/logo.jpeg';
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
                <a href='/dashboard' className={`${styles['nav-items']} ${location.pathname === "/dashboard" ? styles["active"] : ""}`}><LuLayoutDashboard /></a>
                <div className={styles["nav-links"]}>
                  <a href='/courses' className={`${styles['nav-items']} ${location.pathname === "/courses" ? styles["active"] : ""}`}><LuGraduationCap /></a>
                  <a href='/prototypes' className={`${styles['nav-items']} ${location.pathname === "/prototypes" ? styles["active"] : ""}`}><HiOutlineLightBulb style={{ strokeWidth: "2" }} /></a>
                  <a href='/discussions' className={`${styles['nav-items']} ${location.pathname === "/discussions" ? styles["active"] : ""}`}><MdOutlineMessage /></a>
                  <a href='/live-lessions' className={`${styles['nav-items']} ${location.pathname === "/live-lessons" ? styles["active"] : ""}`}><CiStreamOn style={{ strokeWidth: "1.5" }} /></a>
                </div>
            </div>
            <div className={styles["nav-profile"]} onClick={toggleMenu}>
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