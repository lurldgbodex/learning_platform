import styles from './Section.module.css';

type SectionProps = {
    title: string;
    subTitle?: string;
    icon?: string;
    route?: string;
};


const Section: React.FC<SectionProps> = ({ title, subTitle, icon, route }) => {
    return (
        <div className={`${styles.section} ${styles.className}`}>
            <h3>{title}</h3>
            {subTitle &&<div className={styles.sectionSub}>
                {icon && <img src={icon} alt={subTitle} />}
                <a href={route}>{subTitle}</a>
            </div>}
        </div>
    )
}

export default Section;