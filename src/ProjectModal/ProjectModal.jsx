import React from 'react'
import './ProjectModal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

function ProjectModal({ modalShow, onClose, project }) {
  if (!modalShow) {
    return null;
  }
  return (
    
    <div className='model' onClick={onClose}>
      <div className="model-content" onClick={e => e.stopPropagation()}>

        <div className='model-header'>
          <h3>{project['project-name']}</h3>
          <FontAwesomeIcon icon={faX} onClick={onClose} cursor="pointer"/>
        </div>
        <div className='model-body'>
          <p>{project['details-desc']}</p>
          {project.features.map((feature, id) => {
            return (
              <div key={id}>
                <li>{feature}</li>
              </div>
            )
          })}
          <div className='lang-div'>
            <p style={{ color: "black", fontWeight: "Bold" }}>Skills Used:</p>

            {project.languages.map((lang, id) => {
              return (
                <div key={id} >
                  <div><p className='language'>{lang}</p></div>
                </div>
              )
            })}
          </div>
        </div>
        <div className='model-footer'>
          <button onClick={onClose} className='close-btn'>Close</button>
        </div>

      </div>
    </div>
  )
}

export default ProjectModal