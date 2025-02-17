import OverviewCards from "../../components/OverviewCards/OverviewCards";
import ProgressCircles from "../../components/ProgressCircles/ProgressCircles";
import StudyStatistics from "../../components/StudyStatistics/StudyStatistics";
import TopHeader from "../../components/TopHeader/TopHeader";
import styles from "../Dashboard/Dashboard.module.css";

const dashboard = () => {
    return (
        <div className={styles.mainLayout}>
            {/* <LeftNavbar /> */}
            <div className={styles.mainContent}>
                <TopHeader title='Dashboard' />
                <div className={styles.contents}>
                    <OverviewCards />
                    <div className={styles.statistics}>
                        <StudyStatistics />
                        <ProgressCircles />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default dashboard;