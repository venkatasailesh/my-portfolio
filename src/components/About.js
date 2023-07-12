const About = () =>{
    return(
        <>
        <section className="about" id="about">
        <div className="max-width">
            <h2 className="title">About me</h2>
            <div className="about-content">
                <div className="column left">
                <img src={require("../images/mypic.png")} alt="Logo" />
                    </div>
                <div className="column right">
                    <div className="text">I'm venkata sailesh and I'm a <span class="typing-2"></span></div>
                    <h4>
                    fourth-year student studying at Sri Venkateswara Engineering College, I am currently at an exciting stage in my academic journey. Throughout my time at the college</h4>

<h4>As a computer science student, my passion for technology and problem-solving serves as a driving force that motivates me to continually learn and explore new concepts in the field.</h4>

<h4>During my studies, I have built a strong foundation in programming languages such as Java, Python, and JavaScript. I find great satisfaction in working on diverse projects, ranging from the development of web applications using frameworks like React to the creation of efficient algorithms and data structures for problem-solving purposes.</h4>

                </div>
            </div>
        </div>
    </section>
        
    </>
    );
}

export default About;