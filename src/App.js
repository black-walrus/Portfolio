import './App.css';
import profileImage from './assets/profile.jpg';
import etbxImage from './assets/etbx.png';
import gogoImage from './assets/gogo.png';
import battleshipImage from './assets/battleship.png';

import { ReactComponent as PythonIcon } from './assets/icons/python.svg';
import { ReactComponent as JavascriptIcon } from './assets/icons/javascript.svg';
import { ReactComponent as PhpIcon } from './assets/icons/php.svg';
import { ReactComponent as NodejsIcon } from './assets/icons/nodedotjs.svg';
import { ReactComponent as ReactIcon } from './assets/icons/react.svg';
import { ReactComponent as GitIcon } from './assets/icons/git.svg';

import { IconContext } from "react-icons";

import { SiCsharp } from 'react-icons/si';
import { SiGmail } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { DiDotnet } from 'react-icons/di';

function App() {
  return (
    <div className="App">

      <header className="app-header">
        <div className="app-header-inner">
          <p className="name">&lt;saul<span style={{color: 'red'}}>jacobson</span>/&gt;</p>

          <nav className="navigation-bar">
            <ul className="navigation-list">
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
          
            </ul>
          </nav>
        </div>
      </header>
      

      <section id="about" className="section">
        <h1 id="about-header" className="section-name"> About </h1> 

        <div className="profile-img-container"> 
          <img className="profile-img" src={profileImage}></img>
        </div>

        <div className="profile-wrapper">
          <div>
          <h1>
            Hi, I'm <span style={{color: 'red'}}>Seth Gruspe</span>. A computer science student and an
            aspiring software engineer.
          </h1>
          </div>
        
         
        </div>
        <div className="profile-description-wrapper">
          <p>
            I love delving into multiple programming languages, especially niche ones. <br></br>
            Recently, I've been exploring .NET technologies and I'm currently learning C# and ASP.NET. <br></br>
            Outside of coding, I enjoy playing video games and studying foreign languages. <br></br> 
          </p>
        </div>

        <hr className="red-line" />

        <div className="socials-container"> 
          {/* <FaGithub className="github-icon" style={{ fill: color, width: "50px", height: "50px"}} 
            onMouseEnter={() => setColor('red')} onMouseLeave={() => setColor('white')}/> */}
          <IconContext.Provider value={{ color: 'white', size: "35px", className:"github-icon" }}>
            <a href="https://github.com/sauljacobson" target="_blank"> <FaGithub /> </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: 'white', size: "35px", className:"gmail-icon" }}>
            <a href="mailto:gruspeseth@gmail.com" target="_blank"><SiGmail /> </a>
          </IconContext.Provider>

        </div>

      </section>

      <section id="projects" className="section">
        <h1 className="section-name"> Projects </h1> 

        <div className="project-cards-container">

          <div className="project-card"> 
            <div className="project-img">
              <img id="etbx" src={etbxImage}></img>
            </div>

            <div className="project-description">
              <h1> Express Tuberculosis Buster </h1>

              <p> An automated screening software that uses machine learning
                  to detect Tuberculosis in chest X-ray images developed in a collaborative effort. 
              </p>
            </div>

            <div className="project-tools">
              <h5> Python </h5>
            </div>
          </div>

      

          <div className="project-card"> 
            <div className="project-img">
              <img src={gogoImage}></img>
            </div>

            <div className="project-description">
              <h1> Games of the General Online </h1>

              <p>
                A single-player Lichess-inspired web application of the popular Filipino board game. Work in Progress.
              </p>
            </div>

            <div className="project-tools"> 
              <h5> HTML </h5>
              <h5> CSS </h5>
              <h5> Javascript </h5>
              <h5> PHP </h5>
            </div>
          </div>

          <div className="project-card"> 

            <div className="project-img">
              <img src={battleshipImage}></img>
            </div>

            <div className="project-description">
              <h1> Battleship CLI </h1>

              <p>
                A Command Line Interface (CLI) version of the classic board game Battleship, featuring 
                Sea Mines for enhanced gameplay.
              </p>
            </div>

            <div className="project-tools">
              <h5> Java </h5>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <h1 id="skills-header" className="section-name"> Skills & Tools </h1> 

        <div className="skills-container">
          <div id="python-card" className="tool-card"> 
            <PythonIcon style={{ fill: '#3776AB', width: "50px", height: "50px"}} />
            <h3> Python </h3>
          </div>
          <div id="java-card" className="tool-card"> 
            <FaJava style={{ fill: '#E76F00', width: "50px", height: "50px"}} />
            <h3> Java </h3>
          </div>
          <div id="javascript-card" className="tool-card"> 
            <JavascriptIcon style={{ fill: '#F7DF1E', width: "50px", height: "50px"}} />
            <h3> Javascript </h3> 
          </div>
          <div id="csharp-card" className="tool-card"> 
            <SiCsharp style={{ fill: '#9B4F96', width: "50px", height: "50px"}} />
            <h3> C# </h3> 
          </div>
          <div id="php-card" className="tool-card">
            <PhpIcon style={{ fill: '#8892BF', width: "50px", height: "50px"}} />
             <h3> PHP </h3>
          </div>
          <div id="react-card" className="tool-card"> 
            <ReactIcon style={{ fill: '#61DAFB', width: "50px", height: "50px"}} />
            <h3> React </h3> 
          </div>
          <div id="nodejs-card" className="tool-card"> 
            <NodejsIcon style={{ fill: '#339933', width: "50px", height: "50px"}} />
            <h3> Node.js </h3> 
          </div>
          <div id="dotnet-card" className="tool-card"> 
            <DiDotnet style={{ fill: '#512BD4', width: "50px", height: "50px"}} />
            <h3> .NET </h3> 
            </div>
          <div id="git-card" className="tool-card">
            <GitIcon style={{ fill: '#F05032', width: "50px", height: "50px"}} />
             <h3> Git </h3> 
          </div>
        
        </div>
      </section>

  
    </div>
  );
}

export default App;
