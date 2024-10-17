import React, {forwardRef } from 'react'
import './ExperienceComp.css'
import projects from '../data/history.json';
import italent from '../assets/italent.jpg';

const ExperienceComp = forwardRef((props, ref) => {
    return (
        <div className='experience-div' ref={ref}>
            <h2 className='exp-heading'>Experience</h2>
            <div className='company-div'>
                <div style={{ display: 'flex', flex: 'row' }}>
                    <div style={{margin:'10px'}}>
                        {projects.map((project,id) => {
                            return (
                                <div key={id}>
                                    <h2>{project.role}, {project.organisation}</h2>
                                    <div style={{ display: 'flex', flex: 'row', justifyContent: 'space-between' }}>
                                        <div className='duration-div'>{project.startDate} - {project.endDate}</div>
                                        <div className='duration-div'>{project.location}</div>
                                    </div>
                                </div>
                            )
                        })}
                        {/* <h2>Software Developer, Italent Digital</h2>
                        <div style={{ display: 'flex', flex: 'row', justifyContent: 'space-between' }}>
                            <div className='duration-div'>Apr2023 - Present</div>
                            <div className='duration-div'>Hyderabad</div>
                        </div> */}
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        {projects.map((project,id)=>{
                            return(
                                <div key={id}>
                                    <img src={project.imageSrc} width='150px'/>
                                </div>
                            )
                        })}
                        {/* <img src={italent} width='150px' /> */}
                    </div>
                </div>

            </div>
        </div>
    )
});

export default ExperienceComp