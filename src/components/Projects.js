import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";
// import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";

export const Projects = () => {
  const projects = [
    {
      title: "Dice Game",
      description: "A roll-the-dice game built using React",
      imgUrl: projImg4,
      projUrl: "https://six-faces.vercel.app/",
    },
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: projImg2,
      projUrl: "/",
    },
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: projImg3,
      projUrl: "/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>A selection of projects I have built for fun and upskilling.</p>

            <Row
              xl={2}
              lg={2}
              md={1}
              className="align-items-center justify-content-evenly"
            >
              {projects.map((project, index) => {
                return <ProjectCard key={index} {...project} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>

      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
