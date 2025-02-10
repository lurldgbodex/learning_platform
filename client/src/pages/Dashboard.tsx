import LeftNavbar from "../components/LeftNavbar/LeftNavbar";
import OverviewCards from "../components/OverviewCards/OverviewCards";
import ProgressCircles from "../components/ProgressCircles/ProgressCircles";
import DashboardEvent from "../components/Events/DashboardEvent";
import StudyStatistics from "../components/StudyStatistics/StudyStatistics";
import TopHeader from "../components/TopHeader/TopHeader";
import "../styles/pages/Dashboard.css";

const dashboard = () => {
    return (
        <div className="main-layout">
            <LeftNavbar />
            <div className="main-content">
                <TopHeader title="Dashboard" />
                <div className="content">
                    <div className='left-side'>
                        <OverviewCards />
                        <div className="statistics">
                            <StudyStatistics />
                            <ProgressCircles />
                        </div>
                    </div>
                    <div className="">
                        <DashboardEvent />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default dashboard;