import { useState } from "react"

import styles from './StudyStatistics.module.css';

const StudyStatistics = () => {
    const [view, setView] = useState<'week' | 'month'>('week');

    return (
        <div className={styles.studyStatistics}>
            <div className={styles.header}>
                <h2 className={styles.title}>Study Statistics</h2>
                <div className={styles.toggle}>
                    <button
                      className={view == 'week' ? styles.active : ''}
                      onClick={() => setView('week')}
                    > week
                    </button>
                    <button
                      className={view == 'month' ? styles.active : ''}
                      onClick={() => setView('month')}
                    > month
                    </button>
                </div>
            </div>
            <div className={styles.chart}>
                <div className={styles.barChartPlaceholder}>
                    {view === 'week' ? 'Week Bar Chart' : 'Month Bar Chart'}
                </div>
            </div>
        </div>
    )
}

export default StudyStatistics;