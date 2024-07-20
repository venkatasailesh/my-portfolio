import "./skills.css"
const Skills = ()=>{
    return(
    <>
    <div className="skills">
     <div className="skills-container">
         <h2>MY Skills</h2> 
      <div className="skills-list">
      <div className="skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" alt="java"/>
          <h3>JAVA</h3>
          <div className="skill-progress">
            <div className="skill-progress-bar java"></div>
          </div>
        </div>
        <div className="skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="c" />
          <h3>C</h3>
          <div className="skill-progress">
            <div className="skill-progress-bar c"></div>
          </div>
        </div>
        <div className="skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" alt="python" />
          <h3>PYTHON</h3>
          <div className="skill-progress">
            <div className="skill-progress-bar python"></div>
          </div>
        </div>
        <div className="skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="js"/>
          <h3>JAVASCRIPT</h3>
          <div className="skill-progress">
            <div className="skill-progress-bar javascript"></div>
          </div>
        </div>
        
        <div className="skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="react" />
          <h3>REACT JS</h3>
          <div className="skill-progress">
            <div className="skill-progress-bar react"></div>
          </div>
        </div>
        <div className="skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg" alt="springboot"/>
          <h3>Spring Boot</h3>
          <div className="skill-progress">
            <div className="skill-progress-bar springboot"></div>
          </div>
        </div>
        <div className="skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg" alt="docker"/>
          <h3>Docker</h3>
          <div className="skill-progress">
            <div className="skill-progress-bar docker"></div>
          </div>
        </div>
        <div className="skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" alt="jenkins"/>
          <h3>Jenkins</h3>
          <div className="skill-progress">
            <div className="skill-progress-bar jenkins"></div>
          </div>
        </div>
        <div className="skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="sql" />
          <h3>MY SQL</h3>
          <div className="skill-progress">
            <div className="skill-progress-bar sql"></div>
          </div>
        </div>
        <div className="skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" alt="html"/>
          <h3>HTML</h3>
          <div className="skill-progress">
            <div className="skill-progress-bar html"></div>
          </div>
        </div>
        <div className="skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"  alt="css"/>
          <h3>CSS</h3>
          <div className="skill-progress">
            <div className="skill-progress-bar css"></div>
          </div>
        </div>
        
      </div>
    </div></div>
     </>
    );
}

export default Skills;