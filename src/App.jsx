
import MentorshipProgram from './pages/mentorshipProgram/MentorshipProgram';
import Courses from './pages/courses/mern/Mern';
import Footer from './pages/footer/Footer'
import Hire from './pages/hire/components/Hire'
import HireFromUs from './pages/hireFromUs/HireFromUs';
// import Skilled from './pages/hireFromUs/components/Skilled'
import OtherCourse from './pages/othersCourse/OtherCourse';
import Mentorship from './pages/mentorship/Mentorship';
// import RoadMap from './pages/mentorship/components/roadmap/RoadMap';
import Navbar from './pages/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>

      <Mentorship></Mentorship>

      <Courses></Courses>
      <MentorshipProgram></MentorshipProgram>
      <OtherCourse></OtherCourse>
      <Footer></Footer>
      <Hire></Hire>
      <HireFromUs></HireFromUs>
    </div>
  );
};

export default App;
