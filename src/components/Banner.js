import { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = useMemo(
    () => ["Fullstack Developer", "Software Engineer", "UI/UX Designer"],
    []
  );
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prev) => prev / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  }, [loopNum, isDeleting, text, toRotate, period]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [delta, tick]);

  const handleConnectClick = () => {
    const connectSection = document.getElementById("connect");
    if (connectSection) {
      connectSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`I'm Sarah, `}{" "}
              <span
                className="txt-rotate"
                dataperiod={1000}
                data-rotate='[ "Fullstack Developer", "Software Engineer", "UI/UX Designer" ]'
              >
                <span className="wrap">{text}</span>
              </span>
            </h1>
            <p>
              After graduating from Petronas University of Technology, I made
              the leap from earth science to computer science. My journey since
              has been about endless learning and discovery. <br />
              <br />
              This translates into my pursuit of new tech and writing code that
              doesn't just work, but works brilliantly.
            </p>
            <button onClick={handleConnectClick}>
              Get in touch <ArrowRightCircle size={25} />
            </button>
          </Col>

          <Col
            xs={{ span: 7, offset: 6 }}
            md={{ span: 6, offset: 0 }}
            lg={{ span: 5, offset: 0 }}
            xl={{ span: 5, offset: 0 }}
          >
            <img src={headerImg} alt="header" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
