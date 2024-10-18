import { useRef } from 'react'
import AboutComp from './AboutComp/AboutComp'
import './App.css'
import SkillsComp from './SkillsComp/SkillsComp'
import NavbarComp from './NavbarComp/NavbarComp'
import ExperienceComp from './ExperienceComp/ExperienceComp';
import Projects from './Projects/Projects';
import GetInTouch from './GetInTouch/GetInTouch';


function App() {
    const targetRef = useRef(null); 
    const handleScroll = () => {
        targetRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target component
    };
    const experienceRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);
    const scrollToExperience = () => {
      experienceRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSkills = () => {
      skillsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    
    <>
    <div className='portfolio-bg' >
      <NavbarComp onScrollToExperience={scrollToExperience} 
                    onScrollToSkills={scrollToSkills} 
                    onScrollToProjects={scrollToProjects} 
                    onScrollToContact={scrollToContact} />
      <AboutComp onScrollToTarget={scrollToContact}/>
      <ExperienceComp ref={experienceRef}/>
     <SkillsComp ref={skillsRef}/>
      <Projects ref={projectsRef}/>
      <GetInTouch targetRef={targetRef} ref={contactRef} />
    </div>
      
    </>
  )
}

export default App
