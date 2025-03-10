import Discussion from "../../components/Discussion/Discussion";
import LiveEvent from "../../components/Events/LiveEvent";
import LeftNavbar from "../../components/LeftNavbar/LeftNavbar";
import MyCourses from "../../components/MyCourses/MyCourses";
import OverviewCards from "../../components/OverviewCards/OverviewCards";
import ProgressCircles from "../../components/ProgressCircles/ProgressCircles";
import StudyStatistics from "../../components/StudyStatistics/StudyStatistics";
import TopHeader from "../../components/TopHeader/TopHeader";
import styles from "../Dashboard/Dashboard.module.css";

const dashboard = () => {
    return (
        <div className={styles.mainLayout}>
            <div className={styles.navbar}>
                <LeftNavbar />
            </div>
            <div className={styles.mainContent}>
                <TopHeader title='Dashboard' />
                <div className={styles.contents}>
                    <div className={styles.leftContent}>
                        <OverviewCards />
                        <div className={styles.statistics}>
                            <StudyStatistics />
                            <ProgressCircles />
                        </div>
                        <MyCourses />
                    </div>
                    <div className={styles.rightContent}>
                        <Discussion />
                        <LiveEvent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default dashboard;