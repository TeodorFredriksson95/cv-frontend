import "./SkillSetContentSection.css";
import ReachOutButton from "../../ReachOutButton/ReachOutButton";
const SkillSetContentSection = () => {
  return (
    <div>
      <div className="entry-text-container">
        <p className="bread-text">
          Over the past 3 years I have worked on databases, mobile apps, web apps, design schemas and game development.
          <span className="skillset-entry-text-separator">
            {" "}
            The work has been done in various settings such as school, internships, freelance work and personal projects. Below you can see an overview of what tech stack I’m primarily working with.
          </span>
        </p>
      </div>
      <div className="tech-stack-container">
        <div className="flex-box-container">
          <div className="backend-container">
            <h2 className="tech-stack-text tech-title">Backend</h2>
            <div className="list-items flex-box">
              <ul>
                <li>.NET</li>
                <li>ASP.NET </li>
                <li>EF/EFC</li>
                <li>Postman</li>
                <li>Swagger</li>
                <li>GODOT</li>
                <li>Git</li>
              </ul>
              <ul>
                <li>SQL</li>
                <li>MySQL</li>
                <li>SQLite </li>
                <li>Azure</li>
                <li>Firebase</li>
                <li>Prisma</li>
              </ul>
              <ul>
                <li>NodeJS</li>
                <li>Express</li>
              </ul>
            </div>
          </div>
          <div className="frontend-container">
            <h2 className="tech-stack-text tech-title">Frontend</h2>
            <div className="list-items flex-box">
              <ul>
                <li>React</li>
                <li>Javascript </li>
                <li>Typescript</li>
                <li>Xamarin </li>
                <li>Mobile First</li>
              </ul>
              <ul>
                <li>CSS</li>
                <li>Figma</li>
                <li>Bootstrap </li>
                <li>GIMP</li>
              </ul>
              <ul>
                <li>HTML</li>
                <li>Inkscape</li>
                <li>Aseprite </li>
                <li>Expo Go</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-box-container second-container">
          <div className="communications-container">
            <h2 className="tech-stack-text tech-title">Coms.</h2>
            <div className="list-items flex-box">
              <ul>
                <li>Agile</li>
                <li>SCRUM</li>
                <li>Pair Prog.</li>
              </ul>
              <ul>
                <li>Miro</li>
                <li>Trello</li>
                <li>Mob Prog.</li>
              </ul>
              <ul>
                <li>Discord</li>
                <li>Slack</li>
              </ul>
            </div>
          </div>
          <div className="get-in-touch-container">
            <h2 className="tech-stack-text tech-title">Want to get in touch?</h2>
            <div className="reach-out-button-container">
              <ReachOutButton />
            </div>
          </div>
        </div>

        <div className="skills-follow-progress-container">
          <div className="skills-follow-progress-text">
            <h2 className="tech-stack-text tech-title">Follow my progress</h2>
          </div>
          <div className="skills-icons-container">
            <a className="linkedinlink" href="https://www.linkedin.com/in/teodor-fredriksson-919606b9/" target="_blank" rel="noopener noreferrer">
              <span className="devicon-plain--linkedin-wordmark"></span>
            </a>
            <a className="githublink" href="https://github.com/TeodorFredriksson95" target="_blank" rel="noopener noreferrer">
              <span className="logos--github"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSetContentSection;
