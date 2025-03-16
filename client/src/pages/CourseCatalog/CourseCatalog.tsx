import { CiSearch } from 'react-icons/ci';
import TopHeader from '../../components/TopHeader/TopHeader';
import styles from './CourseCatalog.module.css';
import CourseCategory from '../../components/CourseCategory/CourseCategory';
import LeftNavbar from '../../components/LeftNavbar/LeftNavbar';
import FeaturedCourseCard from '../../components/FeaturedCourse/FeatureCourseCard';
import Section from '../../components/Section/Section';

const categories = [
    {'id': 1, name: 'Lorem Ipsum'},
    {'id': 2, name: 'Lorem'},
    {'id': 3, name: 'Internet'},
    {'id': 4, name: 'Arabic'},
    {'id': 5, name: 'English'},
]

const CourseCatalog = () => {
    return (
        <div className='page-layout'>
            <div className="navbar">
                <LeftNavbar />
            </div>
            <div className='content-container'>
                <TopHeader title='Course Catalog' />
                <div className={styles.contents}>
                    <div className={styles.searchFilter}>
                        <div className={styles.searchBox}>
                            <CiSearch className={`${styles.searchIcon}`} />
                            <input type="text" placeholder="search courses" />
                        </div>
                        <div className={styles.filter}>
                            <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.1202 12.8435V8.43534H8.76305V9.90473H15.3345V11.3741H8.76305V12.8435H7.1202ZM0.548767 11.3741V9.90473H5.47734V11.3741H0.548767ZM3.83448 8.43534V6.96596H0.548767V5.49657H3.83448V4.02718H5.47734V8.43534H3.83448ZM7.1202 6.96596V5.49657H15.3345V6.96596H7.1202ZM10.4059 4.02718V-0.380981H12.0488V1.08841H15.3345V2.55779H12.0488V4.02718H10.4059ZM0.548767 2.55779V1.08841H8.76305V2.55779H0.548767Z" fill="#1C1B1F"/>
                            </svg>
                        </div>
                    </div>
                    <div className={styles.category}>
                        <CourseCategory categories={categories} />
                    </div>
                    <div className={styles.featured}>
                        <FeaturedCourseCard
                            lessons='5 lessons'
                            quizzes='4 quizzes'
                            title='Lorem ipsum codor'
                            description='Overview of Lorem Ipsum oder del ha amda'
                        />
                         <FeaturedCourseCard
                            lessons='5 lessons'
                            quizzes='4 quizzes'
                            title='Lorem ipsum codor'
                            description='Overview of Lorem Ipsum oder del ha amda'
                        />
                    </div>
                    <div className={styles.allCourse}>
                        <Section title='All Courses' />
                      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseCatalog;