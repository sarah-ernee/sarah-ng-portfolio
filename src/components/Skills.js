import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";

import {
  DiPython,
  DiJavascript,
  DiHtml5,
  DiCss3,
  DiSass,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiFirebase,
  DiPostgresql,
  DiBitbucket,
  DiGit,
  DiGoogleCloudPlatform,
  DiDocker,
  DiAtlassian,
} from "react-icons/di";
import {
  BiLogoVuejs,
  BiLogoTypescript,
  BiLogoGoLang,
  BiLogoFigma,
  BiCodeCurly,
} from "react-icons/bi";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 12,
      slidesToSlide: 12,
    },
    desktop: {
      breakpoint: { max: 2999, min: 1280 },
      items: 8,
      slidesToSlide: 8,
    },
    tablet: {
      breakpoint: { max: 1279, min: 800 },
      items: 6,
      slidesToSlide: 6,
    },
    mobile: {
      breakpoint: { max: 799, min: 0 },
      items: 3,
      slidesToSlide: 3,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Here are some tools and technologies I've used to bring projects
                to life.
              </p>
              <Carousel
                responsive={responsive}
                draggable={true}
                infinite={true}
                className="skill-slider"
              >
                <div className="item" aria-label="Python Skill">
                  <DiPython color="white" size={80} />
                  <h5>Python</h5>
                </div>
                <div className="item" aria-label="Javascript Skill">
                  <DiJavascript color="white" size={80} />
                  <h5>Javascript</h5>
                </div>
                <div className="item" aria-label="Typescript Skill">
                  <BiLogoTypescript color="white" size={80} />
                  <h5>Typescript</h5>
                </div>
                <div className="item" aria-label="Golang Skill">
                  <BiLogoGoLang color="white" size={80} />
                  <h5>Golang</h5>
                </div>
                <div className="item" aria-label="HTML Skill">
                  <DiHtml5 color="white" size={80} />
                  <h5>HTML</h5>
                </div>
                <div className="item" aria-label="CSS Skill">
                  <DiCss3 color="white" size={80} />
                  <h5>CSS</h5>
                </div>
                <div className="item" aria-label="SCSS Skill">
                  <DiSass color="white" size={80} />
                  <h5>SCSS</h5>
                </div>
                <div className="item" aria-label="VueJS Skill">
                  <BiLogoVuejs color="white" size={80} />
                  <h5>VueJS</h5>
                </div>
                <div className="item" aria-label="ReactJS Skill">
                  <DiReact color="white" size={80} />
                  <h5>ReactJS</h5>
                </div>
                <div className="item" aria-label="NodeJS Skill">
                  <DiNodejsSmall color="white" size={80} />
                  <h5>NodeJS</h5>
                </div>
                <div className="item" aria-label="FastAPI Skill">
                  <BiCodeCurly color="white" size={80} />
                  <h5>FastAPI</h5>
                </div>
                <div className="item" aria-label="MongoDB Skill">
                  <DiMongodb color="white" size={80} />
                  <h5>MongoDB</h5>
                </div>
                <div className="item" aria-label="FirestoreDB Skill">
                  <DiFirebase color="white" size={80} />
                  <h5>FirestoreDB</h5>
                </div>
                <div className="item" aria-label="RDBMS Skill">
                  <DiPostgresql color="white" size={80} />
                  <h5>RDBMS</h5>
                </div>
                <div className="item" aria-label="Docker Skill">
                  <DiDocker color="white" size={80} />
                  <h5>Docker</h5>
                </div>
                <div className="item" aria-label="GCP Skill">
                  <DiGoogleCloudPlatform color="white" size={80} />
                  <h5>GCP</h5>
                </div>
                <div className="item" aria-label="Bitbucket Skill">
                  <DiBitbucket color="white" size={80} />
                  <h5>Bitbucket</h5>
                </div>
                <div className="item" aria-label="Git Skill">
                  <DiGit color="white" size={80} />
                  <h5>Git</h5>
                </div>
                <div className="item" aria-label="Figma Skill">
                  <BiLogoFigma color="white" size={80} />
                  <h5>Figma</h5>
                </div>
                <div className="item" aria-label="Agile Scrum Skill">
                  <DiAtlassian color="white" size={80} />
                  <h5>Agile Scrum</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src="/color-sharp.png"
        alt="gradient"
      />
    </section>
  );
};
