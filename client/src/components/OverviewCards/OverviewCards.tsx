import { LuGraduationCap } from 'react-icons/lu';
import styles from './OverviewCards.module.css';
import { FaRegClock } from 'react-icons/fa6';
import { MdOutlineFlag } from 'react-icons/md';
import { PiLightbulbFilament } from 'react-icons/pi';

const OverviewCards = () => {
    return (
        <>
        <h2>Overview</h2>
        <div className={styles.overviewCards}>
            <div className={styles.card}>
                <h3><LuGraduationCap className={styles.icon} />Courses In Progress</h3>
                <p>3</p>
            </div>
            <div className={styles.card}>
                <h3><PiLightbulbFilament className={styles.icon} />Active Prototypes</h3>
                <p>7</p>
            </div>
            <div className={styles.card}>
                <h3><FaRegClock className={styles.icon} />Hours Learning</h3>
                <p>3h 15m</p>
            </div>
            <div className={styles.card}>
                <h3><MdOutlineFlag className={styles.icon}  />Coommunity Score</h3>
                <p>240</p>
            </div>
        </div>
        </>
    )
}

export default OverviewCards;