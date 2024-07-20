import "./home.css"
const Home = () =>{

    return (
      <>
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Hello, my name is</div>
            <div className="text-2">V VENKATA SAILESH</div>
            <div className="social-icons">
              <div className="social-icon">
              <a href="https://github.com/venkatasailesh" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="GitHub"  />
              </a>
              <a href="https://www.linkedin.com/in/venkata-sailesh-27b0b11bb" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt="LinkedIn"  />
              </a></div>
            </div>
          </div>
        </div>
      </section>
    </>
    );

   
   }




export default Home;
