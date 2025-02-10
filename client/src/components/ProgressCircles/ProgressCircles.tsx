import { CircularProgressbar } from 'react-circular-progressbar';
import styles from './progressCircles.module.css';

const ProgressCircles = () => {
    const courseProgress = 60;
    const prototypeProgress = 80;

    return (
        <div className={styles.progressCircles}>
            <h2>Progress</h2>
            <div className={styles.circularProgressContainer}>
                <div className={styles.prototypeProgress}>
                    <CircularProgressbar value={prototypeProgress} strokeWidth={5} />
                    <div className={styles.prototypeLabel}>{prototypeProgress}%</div>
                </div>

                <div className={styles.courseProgress}>
                    <CircularProgressbar value={courseProgress} strokeWidth={5} />
                    <div className={styles.courseLabel}>{courseProgress}%</div>
                </div>
            </div>
            <div className={styles.labels}>
                <div className={styles.label}>
                    <span className={styles.colorCourse}></span> Courses
                </div>
                <div className={styles.label}>
                    <span className={styles.colorPrototype}></span> Prototypes
                </div>
            </div>
        </div>
    )
}

export default ProgressCircles;