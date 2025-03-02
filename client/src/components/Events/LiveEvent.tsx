import styles from './LiveEvent.module.css';
import eventImage from '../../assets/logo.jpeg';
import authorAvatar from '../../assets/author-avatar.svg';
import liveIcon from '../../assets/live-icon.svg';

const LiveEvent = () => {
    return (
        <div className={styles.event}>
            <h3>Live Event</h3>
            <div className={styles.eventCard}>
                <div className={styles.image}>
                    <img src={eventImage} className={styles.eventImage} alt='Event Image' />
                </div>
                <div className={styles.eventDetails}>
                    <p className={styles.title}>How lorem ipsum making impact in web development?</p>
                    <div className={styles.author}>
                        <img src={authorAvatar} alt="Avator or event author" />
                        <p>Shams Tabrez</p>
                    </div>
                </div>
                <div className={styles.liveIcon}>
                    <img src={liveIcon} alt='Live Icon' />
                    <p>Live</p>
                </div>
            </div>
        </div>
    );
}

export default LiveEvent;