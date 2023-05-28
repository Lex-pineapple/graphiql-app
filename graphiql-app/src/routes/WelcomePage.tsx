import '../styles/welcomePage.scss';
import AboutCourse from '../components/WelcomePage/AbourCourse';
import Team from '../components/WelcomePage/Team';
import AboutProject from '../components/WelcomePage/AboutProject';
import HeadSection from '../components/WelcomePage/HeadSection';

function WelcomePage() {
  return (
    <>
      <HeadSection />
      <AboutProject />
      <AboutCourse />
      <Team />
    </>
  );
}

export default WelcomePage;
