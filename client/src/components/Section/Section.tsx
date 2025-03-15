import styles from './Section.module.css';

type SectionProps = {
    title: string;
    subTitle?: string;
    icon?: string;
};

const Section: React.FC<SectionProps> = ({ title, subTitle, icon }) => {
    return (
        <div className={`${styles.section} ${styles.className}`}>
            <h3>{title}</h3>
            {subTitle &&<div className={styles.sectionSub}>
                {icon && <img src={icon} alt={subTitle} />}
                <p>{subTitle}</p>
            </div>}
        </div>
    )
}

export default Section;