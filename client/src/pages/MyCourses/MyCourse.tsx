import LeftNavbar from '../../components/LeftNavbar/LeftNavbar';
import TopHeader from '../../components/TopHeader/TopHeader';
import courseMap from '../../assets/course_map.svg';
import AssignmentCard from '../../components/Assignment/AssignmentCard';
import Section from '../../components/Section/Section';
import courseIcon from '../../assets/course.svg';
import CourseCard from '../../components/CourseCard/CourseCard';

const MyCourse = () => {
    return (
        <div className='page-layout'>
            <div className='navbar'>
                <LeftNavbar />
            </div>
            <div className='content-container'>
                <TopHeader title='My Courses' />
                <div className='contents'>
                    <div className='left-container img-container'>
                        <img src={courseMap} alt="course map" className='course-map' />
                    </div>
                    <div className='right-container assignment'>
                        <Section title='Assignments'/>
                        <AssignmentCard />
                    </div>
                    <div className='left-container my-course'>
                        <Section 
                            title='My Courses'
                            subTitle='Course Catalog'
                            route="/catalog"
                            icon={courseIcon}
                        />
                        <CourseCard 
                            title={'Frontend Web Development'} 
                            lessons={'7 lessons'}
                            percent={69}                       
                        />
                        <CourseCard 
                            title={'Basic data-structure and algorithm'} 
                            lessons={'7 lessons'}  
                            percent={25}                      
                        />
                        <CourseCard 
                            title={'Design Concept UI/UX'} 
                            lessons={'7/7 lessons'}
                            quiz='5/5 quiz'
                            percent={100}                        
                        />
                    </div>
                    <div className='left-container'>
                        <Section
                            title='Courses you may like'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyCourse;