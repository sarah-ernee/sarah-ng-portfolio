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
const skillsData = [
  { icon: DiPython, name: "Python" },
  { icon: DiJavascript, name: "Javascript" },
  { icon: BiLogoTypescript, name: "Typescript" },
  { icon: BiLogoGoLang, name: "Golang" },
  { icon: DiHtml5, name: "HTML" },
  { icon: DiCss3, name: "CSS" },
  { icon: DiSass, name: "SCSS" },
  { icon: BiLogoVuejs, name: "VueJS" },
  { icon: DiReact, name: "ReactJS" },
  { icon: DiNodejsSmall, name: "NodeJS" },
  { icon: BiCodeCurly, name: "FastAPI" },
  { icon: DiMongodb, name: "MongoDB" },
  { icon: DiFirebase, name: "FirestoreDB" },
  { icon: DiPostgresql, name: "Postgres" },
  { icon: DiDocker, name: "Docker" },
  { icon: DiGoogleCloudPlatform, name: "GCP" },
  { icon: DiBitbucket, name: "Bitbucket" },
  { icon: DiGit, name: "Git" },
  { icon: BiLogoFigma, name: "Figma" },
  { icon: DiAtlassian, name: "Agile Scrum" },
];

const SkillItem = ({ Icon, name }) => {
  return (
    <div className="item" aria-label={`${name} Skill`}>
      <Icon color="white" size={80} />
      <h6>{name}</h6>
    </div>
  );
};

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
                {skillsData.map((skill, index) => (
                  <SkillItem key={index} Icon={skill.icon} name={skill.name} />
                ))}
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

export default Skills;
