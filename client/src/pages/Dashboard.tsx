import LeftNavbar from "../components/LeftNavbar";
import TopHeader from "../components/TopHeader";
import "../styles/pages/Dashboard.css";

const dashboard = () => {
    return (
        <div className="main-layout">
            <LeftNavbar />
            <div className="main-content">
                <TopHeader title="Dashboard" />
                <div className="content">
                    <h2>Overview</h2>
                </div>
            </div>
        </div>
    )
}

export default dashboard;