import Avatar from "../Avatar/Avatar";
import styles from "./DiscussionCard.module.css";

const DiscussionCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.avatar}><Avatar /></div>
            <div className={styles.cardContent}>
                <div className={styles.contentHeading}>
                    <p>Atif Aslam <span>has replied on</span> </p>
                    <p>Lormen Ipsum codor la hala</p>
                </div>
                <p className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo...</p>
            </div>
        </div>
    );
}

export default DiscussionCard;