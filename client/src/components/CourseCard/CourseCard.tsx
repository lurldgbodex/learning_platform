import styles from './CourseCard.module.css';
import icon from '../../assets/course-icon.svg';
import ProgressBar from '../ProgressBar/Progressbar';

type CourseCardProps = {
    title: string;
    lessons: string;
    percent: number;
    className?: string;
    quiz?: string;
}


const CourseCard: React.FC<CourseCardProps> = ({ title, lessons, percent, className, quiz }) => {
    return (
        <div className={styles.card}>
            <div className={styles.left}>
                <div className={styles.courseIcon}>
                    <img src={icon} alt="course icon" />
                </div>
                
                <div className={styles.content}>
                    <h3>{title}</h3>
                    <p>{lessons} {quiz && <span> * {quiz}</span>}</p>
                </div>
            </div>

            <div className={styles.metric}>
                <ProgressBar 
                    percentage={percent}
                    className={className}
                />
            </div>

        </div>
    )
}

export default CourseCard;