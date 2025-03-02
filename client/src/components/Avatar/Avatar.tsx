import styles from './Avatar.module.css';
import avatar from '../../assets/avatar.png';

const Avatar = () => {
    return (
        <div className={styles.avatar}>
            <img src={avatar} alt='avatar image' />
        </div>
    )
}

export default Avatar;