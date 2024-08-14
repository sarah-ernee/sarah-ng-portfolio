import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/dice-project.png";
import projImg2 from "../assets/img/gemini-project.png";

export const Projects = () => {
  const projects = [
    {
      title: "Dice Game",
      description: "A simple roll-the-dice game.",
      imgUrl: projImg1,
      projUrl: "https://six-faces.vercel.app/",
      tech: ["React", "Javascript", "Tailwind CSS"],
    },
    {
      title: "Gemini Clone",
      description: "A chatbot interface using Gemini API.",
      imgUrl: projImg2,
      projUrl: "https://virgo-chat.vercel.app/",
      tech: ["React", "Javascript", "CSS"],
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>A selection of projects I have built for fun and upskilling.</p>

            <Row
              style={{
                marginLeft: "20px",
                alignSelf: "center",
                justifyContent: "center",
              }}
            >
              {projects.map((project, index) => {
                return <ProjectCard key={index} {...project} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
