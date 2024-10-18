import React, {forwardRef } from 'react'
import './ExperienceComp.css'
import projects from '../data/history.json';

const ExperienceComp = forwardRef((props, ref) => {
    return (
        <div className='experience-div' ref={ref}>
            <h2 className='exp-heading'>Experience</h2>
            <div className='company-div'>
                <div style={{ display: 'flex', flex: 'row' }}>
                    <div style={{margin:'20px'}}>
                        {projects.map((project,id) => {
                            return (
                                <div key={id} className="company-container">
                                    <div >
                                    <h2 className='role-org'>{project.role}, {project.organisation}</h2>
                                    <div style={{ display: 'flex', flex: 'row', justifyContent: 'space-between' }}>
                                        <div className='duration-div'>{project.startDate} - {project.endDate}</div>
                                        <div className='duration-div'>{project.location}</div>
                                    </div>
                                    </div>
                                    
                                    <img src={project.imageSrc} className='company-img'/>
                                
                                </div>
                            )
                        })}

                    </div>
                </div>

            </div>
        </div>
    )
});

export default ExperienceComp