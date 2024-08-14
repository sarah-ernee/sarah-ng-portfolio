import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Tooltip } from "react-tooltip";

import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand>
          <div
            className="d-flex"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img src={logo} alt="Logo" className="mr-10" />

            <h5 className="logo-text">SARAH NG</h5>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://drive.google.com/file/d/1xbsfjJgDnGFI_N__VlhT3Kjm14--OKYw/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                data-tooltip-id="resumeTooltip"
                data-tooltip-content="Resumé"
              >
                <img src={navIcon1} alt="cv" />
              </a>
              <a
                href="https://www.linkedin.com/in/sarah-ng-ern-ee-8b636823a/"
                target="_blank"
                rel="noreferrer"
                data-tooltip-id="linkedinTooltip"
                data-tooltip-content="LinkedIn"
              >
                <img src={navIcon2} alt="linkedin" />
              </a>
              <a
                href="https://github.com/sarah-ernee"
                target="_blank"
                rel="noreferrer"
                data-tooltip-id="githubTooltip"
                data-tooltip-content="GitHub"
              >
                <img src={navIcon3} alt="github" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
      <Tooltip
        id="resumeTooltip"
        place="top"
        effect="solid"
        backgroundColor="#333"
        className="tooltip"
      />
      <Tooltip
        id="linkedinTooltip"
        place="top"
        effect="solid"
        backgroundColor="#333"
        className="tooltip"
      />
      <Tooltip
        id="githubTooltip"
        place="top"
        effect="solid"
        backgroundColor="#333"
        className="tooltip"
      />
    </Navbar>
  );
};
