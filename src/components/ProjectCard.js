import { Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useCallback } from "react";

export const ProjectCard = ({ title, description, imgUrl, projUrl, tech }) => {
  const handleConnectClick = useCallback(() => {
    window.open(projUrl, "_blank", "noopener,noreferrer");
  }, [projUrl]);

  return (
    <Col size={12} sm={12} md={12} lg={6} xl={4}>
      <div className="proj-card">
        <img src={imgUrl} alt="" onClick={handleConnectClick} />
        <div className="proj-text">
          <button onClick={handleConnectClick}>
            {title} <ArrowRightCircle className="redirect" size={18} />
          </button>
          <span>{description}</span>

          <div className="tech-chips">
            {tech.map((t, index) => (
              <span key={index} className="chip">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Col>
  );
};
