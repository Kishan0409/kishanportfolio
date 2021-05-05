import "./style.css";

const About = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="content">
        <div>
          <strong>Languages:</strong>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
        </div>
        <div>
          <strong>Libraries:</strong>
          <li>Bootstrap</li>
          <li>Material-ui</li>
          <li>React.js</li>
        </div>
        <div>
          <strong>Tools:</strong>
          <li>React-router-Dom</li>
          <li>Webpack</li>
          <li>Git & Github</li>
        </div>
      </div>
    </div>
  );
};

export default About;