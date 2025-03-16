import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react"
import styles from './Progressbar.module.css';

type ProgressBarProps = {
    percentage: number;
    className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage, className }) => {
    return (
        <div className={`${styles.container} ${className}`}>
            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                    strokeLinecap: 'round',
                    pathColor: percentage == 100 
                        ? '#92e3a9' 
                        : '#2d9cdb',
                    textColor: '#000',
                    trailColor: '#d9d9d9',
                })}
            />
        </div>
    );
}

export default ProgressBar;