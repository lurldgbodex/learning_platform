import { useLocation } from "react-router-dom";
import { LuGraduationCap, LuLayoutDashboard, LuLogOut } from "react-icons/lu";
import { MdOutlineFaceUnlock, MdOutlineMessage } from "react-icons/md";
import { CiStreamOn } from "react-icons/ci";
import logo from '../assets/logo.jpeg';
import '../styles/components/LeftNavbar.css';
import { HiOutlineLightBulb } from "react-icons/hi2";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";

const LeftNavbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    }

    return (
        <nav className="navbar">
            <div className="nav-links dashboard">
                <img src={logo} alt="Logo" />
                <a href='/dashboard' className={`nav-items ${location.pathname === "/dashboard" ? "active" : ""}`}><LuLayoutDashboard /></a>
                <div className="nav-links">
                  <a href='/courses' className={`nav-items ${location.pathname === "/courses" ? "active" : ""}`}><LuGraduationCap /></a>
                  <a href='/prototypes' className={`nav-items ${location.pathname === "/prototypes" ? "active" : ""}`}><HiOutlineLightBulb style={{ strokeWidth: "2" }} /></a>
                  <a href='/discussions' className={`nav-items ${location.pathname === "/discussions" ? "active" : ""}`}><MdOutlineMessage /></a>
                  <a href='/live-lessions' className={`nav-items ${location.pathname === "/live-lessons" ? "active" : ""}`}><CiStreamOn style={{ strokeWidth: "1.5" }} /></a>
                </div>
            </div>
            <div className="nav-profile" onClick={toggleMenu}>
                <MdOutlineFaceUnlock />
                {isMenuOpen && (
                    <ul className="dropdown-menu">
                        <li className="nav-margin"><LuLogOut />Logout</li>
                        <li className="nav-margin"><CgProfile />Profile</li>
                        <div className="nav-prof-container">
                            <li className="nav-prof-icon"><MdOutlineFaceUnlock color="black" /></li>
                            <li>Segun Gbodi <RiArrowDropDownLine /></li>
                        </div>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default LeftNavbar;