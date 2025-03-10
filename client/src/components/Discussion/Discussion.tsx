import styles from './Discussion.module.css';
import DiscussionCard from './DiscussionCard';

const Discussion = () => {
    return (
        <div className={styles.discussion}>
            <div className={styles.heading}>
                <h3>Discussion</h3>
                <p>see all</p>
            </div>
            <DiscussionCard />
        </div>
    );
}

export default Discussion;