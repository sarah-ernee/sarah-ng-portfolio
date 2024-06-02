import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl, projUrl }) => {
  return (
    <Col>
      <Link
        to={projUrl}
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="proj-imgbx">
          <img src={imgUrl} alt="" />

          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Link>
    </Col>
  );
};
