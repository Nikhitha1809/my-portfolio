import React, {forwardRef} from 'react';
import './Projects.css';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { All, Recent, Popular } from '../data/project.json';
import ProjectModal from '../ProjectModal/ProjectModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCode, faInfoCircle } from '@fortawesome/free-solid-svg-icons';


const truncateDescription = (description, limit = 100) => {
    if (description.length > limit) {
        return description.substring(0, limit) + '...'; // Truncate and add ellipsis
    }
    return description;
};


const Projects = forwardRef((props, ref) => {
    const [value, setValue] = React.useState('1');
    const [modalShow, setModalShow] = React.useState(false);
    const [selectedProject, setSelectedProject] = React.useState(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleShowDetails = (project) => {
        setSelectedProject(project); // Set the selected project
        setModalShow(true); // Open the modal
    };

    return (
        <div className='projects-div' ref={ref}>
            <h1 className='projects-heading'>My Projects</h1>
            {/* <Box sx={{ width: '100%', typography: 'body1' }}> */}
            <Box sx={{ borderBottom: 1, borderColor: 'divider', overflowX: 'auto', typography: 'body1'}}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example" variant="scrollable"  scrollButtons="auto" allowScrollButtonsMobile 
        sx={{
            "& .MuiTab-root": {
                color: "white", // Style for the tabs text
            }
        }}
>
                            <Tab style={{ color: "white" }} label="All" value="1" />
                            <Tab style={{ color: "white" }} label="Recent" value="2" />
                            <Tab style={{ color: "white" }} label="Popular" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1" className='projects-container' style={{padding: 0}}>
                 
                            {All.map((project, id) => (
                                <div className='single-project-div' key={id}>
                                    <div style={{width:"100%", height:"200px"}}>
                                    <img alt={project['project-name']} src={project['project-image']} className='project-img' />
                                    </div>
                                    <div style={{margin:"10px"}}>
                                    <h4>{project['project-name']}</h4>
                                    <p className='project-desc'>{truncateDescription(project.description)}</p>
                                    </div>
                                    <div className='button-container'>
                                        <button className='project-button'>
                                            <a style={{ textDecoration: "none", color: "white" }} href={project['github-link']} target="_blank">Code</a>
                                            <FontAwesomeIcon icon={faCode} color='white'/>
                                        </button>
                                        <button className='project-button'>
                                            <a style={{ textDecoration: "none", color: "white" }} href={project['deploy-link']} target="_blank">View</a>
                                            <FontAwesomeIcon icon={faEye} color='white'/>
                                        </button>
                                        <button className='details-btn' onClick={() => handleShowDetails(project)}>Details <FontAwesomeIcon icon={faInfoCircle} /></button>
                                    </div>
                                </div>
                            ))}
                        {/* </div> */}
                    </TabPanel>
                    <TabPanel value="2" className='projects-container' style={{padding: 0}}>
                            {Recent.map((project, id) => (
                                <div className='single-project-div' key={id}>
                                    <div style={{width:"100%", height:"200px"}}>
                                    <img alt={project['project-name']} src={project['project-image']} style={{objectFit: "fill", width:"100%", height:"100%"}} />
                                    </div>
                                    <div style={{margin:"10px"}}>
                                    <h4>{project['project-name']}</h4>
                                    <p className='project-desc'>{truncateDescription(project.description)}</p>
                                    </div>
                                    <div className='button-container'>
                                        <button className='project-button'>
                                            <a style={{ textDecoration: "none", color: "white" }} href={project['github-link']} target="_blank">Code</a>
                                            <FontAwesomeIcon icon={faCode} color='white'/>
                                        </button>
                                        <button className='project-button'>
                                            <a style={{ textDecoration: "none", color: "white" }} href={project['deploy-link']} target="_blank">View</a>
                                            <FontAwesomeIcon icon={faEye} color='white'/>
                                        </button>
                                        <button className='details-btn' onClick={() => handleShowDetails(project)}>Details <FontAwesomeIcon icon={faInfoCircle} /></button>
                                    </div>
                                </div>
                            ))}
                        {/* </div> */}
                    </TabPanel>
                    <TabPanel value="3" className='projects-container' style={{padding: 0}}>
                        {/* <div className='projects-container' style={{padding: 0}}> */}
                            {Popular.map((project, id) => (
                                <div className='single-project-div' key={id}>
                                    <div style={{width:"100%", height:"200px"}}>
                                    <img alt={project['project-name']} src={project['project-image']} style={{objectFit: "fill", width:"100%", height:"100%"}} />
                                    </div>
                                    <div style={{margin:"10px"}}>
                                    <h4>{project['project-name']}</h4>
                                    <p className='project-desc'>{truncateDescription(project.description)}</p>
                                    </div>
                                    <div className='button-container'>
                                        <button className='project-button'>
                                            <a style={{ textDecoration: "none", color: "white" }} href={project['github-link']} target="_blank">Code</a>
                                            <FontAwesomeIcon icon={faCode} color='white'/>
                                        </button>
                                        <button className='project-button'>
                                            <a style={{ textDecoration: "none", color: "white" }} href={project['deploy-link']} target="_blank">View</a>
                                            <FontAwesomeIcon icon={faEye} color='white'/>
                                        </button>
                                        <button className='details-btn' onClick={() => handleShowDetails(project)}>Details <FontAwesomeIcon icon={faInfoCircle} /></button>
                                    </div>
                                </div>
                            ))}
                        {/* </div> */}
                    </TabPanel>
                </TabContext>
            </Box>

            {/* Modal at the root level of Projects component */}
            {selectedProject && (
                <ProjectModal 
                    modalShow={modalShow} 
                    onClose={() => setModalShow(false)} 
                    project={selectedProject}
                />
            )}
        </div>
    );
});

export default Projects;
