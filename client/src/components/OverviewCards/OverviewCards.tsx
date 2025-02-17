import { LuGraduationCap } from 'react-icons/lu';
import styles from './OverviewCards.module.css';
import { FaRegClock } from 'react-icons/fa6';
import { MdOutlineFlag } from 'react-icons/md';
import { PiLightbulbFilament } from 'react-icons/pi';

const OverviewCards = () => {
    return (
        <div className={styles.overviews}>
            <h2 className={styles.title}>Overview</h2>
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <div className={styles.cardTitleContainer}>
                        <LuGraduationCap className={styles.icon} />
                        <p className={styles.cardTitleFullScreen}>Courses In Progress</p>
                    </div>
                    <p className={styles.cardValue}>13</p>
                    <p className={styles.cardTitle}>Courses In Progress</p>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardTitleContainer}>
                        <PiLightbulbFilament className={styles.icon} />
                        <p className={styles.cardTitleFullScreen}>Active Prototypes</p>
                    </div>               
                    <p className={styles.cardValue}>07</p>
                    <p className={styles.cardTitle}>Active Prototypes</p>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardTitleContainer}>
                        <FaRegClock className={styles.icon} />
                        <p className={styles.cardTitleFullScreen}>Hours Learning</p>
                    </div>   
                    <p className={styles.cardValue}>12h 30m</p>
                    <p className={styles.cardTitle}>Hours Learning</p>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardTitleContainer}>
                        <MdOutlineFlag className={styles.icon}  />
                        <p className={styles.cardTitleFullScreen}>Coommunity Score</p>
                    </div>   
                    <p className={styles.cardValue}>420</p>
                    <p className={styles.cardTitle}>Coommunity Score</p>
                </div>
            </div>
        </div>
    )
}

export default OverviewCards;