import Discussion from "../../components/Discussion/Discussion";
import LiveEvent from "../../components/Events/LiveEvent";
import LeftNavbar from "../../components/LeftNavbar/LeftNavbar";
import MyCourses from "../../components/MyCourses/MyCourses";
import OverviewCards from "../../components/OverviewCards/OverviewCards";
import ProgressCircles from "../../components/ProgressCircles/ProgressCircles";
import StudyStatistics from "../../components/StudyStatistics/StudyStatistics";
import TopHeader from "../../components/TopHeader/TopHeader";

const dashboard = () => {
    return (
        <div className='page-layout'>
            <div className='navbar'>
                <LeftNavbar />
            </div>
            <div className='content-container'>
                <TopHeader title='Dashboard' />
                <div className='contents'>
                    <div className='left-container'>
                        <OverviewCards />
                        <div className='statistics'>
                            <StudyStatistics />
                            <ProgressCircles />
                        </div>
                        <MyCourses />
                    </div>
                    <div className='right-container'>
                        <Discussion />
                        <LiveEvent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default dashboard;