import LeftNavbar from '../../components/LeftNavbar/LeftNavbar';
import TopHeader from '../../components/TopHeader/TopHeader';

const MyCourse = () => {
    return (
        <div className='page-layout'>
            <div className='navbar'>
                <LeftNavbar />
            </div>
            <div className='content-container'>
                <TopHeader title='My Courses' />
                <div className='contents'>
                    <div className='left-container'>
                    </div>
                    <div className='right-container'>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyCourse;