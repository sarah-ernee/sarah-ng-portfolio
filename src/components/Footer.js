import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col className="text-center">
            <p>© 2024 Copyright Sarah Ng Ern Ee | All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
