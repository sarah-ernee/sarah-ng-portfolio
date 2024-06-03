import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  const initialForm = {
    name: "",
    email: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(initialForm);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();

    if (result.code === 200) {
      setStatus({ success: true, message: "Message sent successfully" });
    } else {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later",
      });
    }

    // Clear the form
    setFormDetails(initialForm);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6} sm={5}>
            <img src={contactImg} alt="Contact Me" />
          </Col>

          <Col md={6} sm={7}>
            <h2>Get In Touch</h2>

            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={12} md={10} className="px-1">
                  <input
                    type="text"
                    value={formDetails.name}
                    placeholder="Name"
                    onChange={(e) => onFormUpdate("name", e.target.value)}
                  />
                </Col>

                <Col sm={12} md={10} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>

                <Col className="px-1" sm={12} md={10}>
                  <textarea
                    row="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>

                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
