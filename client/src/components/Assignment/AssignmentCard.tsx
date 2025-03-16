import styles from './AssignmentCard.module.css';
import courseIcon from '../../assets/course.svg';

const AssignmentCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.row}>
                <div className={styles.courseIcon}>
                    <img src={courseIcon} alt='course icon' />
                </div>
                <div>
                    <p className={styles.dateTitle}>Due Date</p>
                    <p className={styles.dueDate}>Oct 02, 2022</p>
                </div>
            </div>
            <div>
                <p className={styles.assNo}>Assignment 04</p>
                <p className={styles.title}>Overview of available development boards</p>
            </div>
        </div>
    );
}

export default AssignmentCard;