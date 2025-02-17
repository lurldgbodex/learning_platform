import styles from './DashboardEvent.module.css';

const DashboardEvent = () => {
  return (
    <div className={styles.dashboardEvents}>
      <div className={styles.liveEvents}>
        <h2>Live Events</h2>
        <div className={styles.event}>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elits!</p>
        </div>
      </div>
      <div className="activity">
        <h2>Activity</h2>
      </div>
    </div>
  );
};

export default DashboardEvent;