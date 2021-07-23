import r1 from '../images/resume1.JPG';
import r2 from '../images/resume2.JPG';
import './Resume.css'

function Resume() {
    return (
      <div id="resume" class="content">
        <h1>Resume</h1>
        <span>Download link coming soon</span>
        <img src={r1} alt="resume pg1"/>
        <img src={r2} alt="resume pg2"/>
      </div>
    );
  }
  
  export default Resume;