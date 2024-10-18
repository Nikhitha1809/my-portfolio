import './SkillsComp.css'
import skills from '../data/skillsData.json';
import { forwardRef } from 'react';

const SkillsComp= forwardRef((props,ref)=> {
  return (
    <div className='skills-div' ref={ref}>
        <h2 className='skills-heading'>skills</h2>
        <div className='img-div'>
          {skills.map((skill,id)=>{
            return(
              <div key={id} style={{margin:"5px"}}>
                <img src={skill.imageSrc} width='100px' height='100px' className='image'/>
                <p style={{marginLeft:"2rem", color:"white"}}>{skill.label}</p>
                </div>
            )
          })}

        </div>
    </div>
  )
});

export default SkillsComp