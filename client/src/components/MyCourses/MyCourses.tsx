import styles from './MyCourses.module.css';
import graduatingCap from '../../assets/graduating-cap.svg';
import MyPieChart from '../charts/MyPieChart';

const MyCourses = () => {
    return (
        <div className={styles.courseContainer}>
            <div className={styles.header}>
                <h3>My Courses</h3>
                <p>see all</p>
            </div>
            <div className={styles.cardContainer}>
                <div className={styles.courseCard}>
                    <img src={graduatingCap} alt="Course Icon" className={styles.cardIcon} />
                    <p>Modern Web tools</p>
                    <div className={styles.chart}>
                        <MyPieChart />
                    </div>
                </div>
                <div className={styles.courseCard}>
                    <img src={graduatingCap} alt="Course Icon" className={styles.cardIcon} />
                    <p>Modern Web tools</p>
                    <div className={styles.chart}>
                        <MyPieChart />
                    </div>
                </div>
                <div className={styles.courseCard}>
                    <img src={graduatingCap} alt="Course Icon" className={styles.cardIcon} />
                    <p>Modern Web tools</p>
                    <div className={styles.chart}>
                        <MyPieChart />
                    </div>
                </div>
                <div className={styles.courseCard}>
                    <img src={graduatingCap} alt="Course Icon" className={styles.cardIcon} />
                    <p>Modern Web tools</p>
                    <div className={styles.chart}>
                        <MyPieChart />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyCourses;