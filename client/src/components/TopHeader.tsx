import '../styles/components/TopHeader.css';
import { CiSearch, CiSettings } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa6";

const TopHeader = ({ title }: { title: string }) => {
    return (
        <header className="top-header">
            <div className="header-left">
                <h1>{title}</h1>
            </div>
            <div className="header-right">
                <div className="search-box">
                    <input type="text" placeholder="Search" />
                    <CiSearch className="search-icon" />
                </div>
                <div className="icons">
                    <FaRegBell className="icon" />
                    <CiSettings size={26} strokeWidth={0.5} className="icon" />
                </div>
            </div>
        </header>
    );
}

export default TopHeader;