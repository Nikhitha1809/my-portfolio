import './AboutComp.css';
import  heroImage  from "/assets/heroImage.png";
import cv from '/assets/Nikhitha_Updated_CV.pdf';

function AboutComp({ onScrollToTarget }){
    
    const downloadCv=(cv)=>{
        const fileName = cv.split('/').pop();
        const aTag = document.createElement("a");
        aTag.href=cv;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }
    return(
        <div className="About-div">
            <div>
            <h1 className='about-heading'>Hi, Iam Nikhitha Chilukuri</h1>
            <p>I’m a passionate front-end developer with experience in building dynamic and 
                responsive web applications using React, JavaScript, and modern web technologies.
            </p>
            <div>
                <button className='about-button' onClick={()=>{downloadCv(cv)}}>Download CV</button>
                <button className='about-button' onClick={onScrollToTarget}>Contact me</button>
            </div>
            </div>
            <div>
                <img className='hero-img' src={heroImage}/>
            </div>
        </div>
    )
}

export default AboutComp;