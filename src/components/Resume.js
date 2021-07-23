import r1 from '../images/resume1.JPG';
import r2 from '../images/resume2.JPG';

function Resume() {
    return (
      <div id="resume">
        <h1>Resume</h1>
        <p>Download link coming soon</p>
        <img src={r1} alt="resume pg1"/>
        <img src={r2} alt="resume pg2"/>
      </div>
    );
  }
  
  export default Resume;