import React from "react";
import "./footer.css";
import { Container, Col, Row } from "reactstrap";
import fb from "../../../Assests/icons/footer/fb.png";
import insta from "../../../Assests/icons/footer/insta.png";
import wordpress from "../../../Assests/icons/footer/word.png";
import google from "../../../Assests/icons/footer/google.png";
import linkedin from "../../../Assests/icons/footer/linkedin.png";
import tweet from "../../../Assests/icons/footer/tweet.png";
import heart from "../../../Assests/icons/footer/heart.png";
const footer = () => {
  return (
    <footer id="footer" className="footer">
      <Container>
        <Row>
          <Col>
            <div className="storage">
              <a href="/">About Us</a>
              <a href="/">Blog</a>
              <a href="/">Pages</a>
              <a href="/">Map</a>
            </div>
          </Col>
          <Col>
            <div className="storage2">
              <a href="https://instagram.com/vishalmishra_28/">
                <img src={insta} alt="Icon" />
              </a>
              <a href="https://www.facebook.com/vishalmishra2810/">
                <img src={fb} alt="Icon" />
              </a>
              {/* <a href="/">
                <img src={wordpress} alt="Icon" />
              </a> */}
              <a href="https://twitter.com/vishalmishra_28/">
                <img src={tweet} alt="Icon" />
              </a>
              <a href="mailto:mishravishal2810@gmail.com">
                <img src={google} alt="Icon" />
              </a>
              <a href="https://www.linkedin.com/in/vishalmishra2810/">
                <img src={linkedin} alt="Icon" />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="footer-text">
              Contact: +91-9773686553
              <br />
              Order: +91-9773686553, +91-9773686553, +91-9773686553 <br />
              &copy; COPYRIGHT 2021 reserved by Foodie Ghar
              <br />
              {/* <br /> */}
              Made with{" "}
              <img
                src={heart}
                alt="Heart"
                style={{ height: "22px", padding: "0 3px", float: "none" }}
              />{" "}
              from{" "}
              <a
                style={{ display: "inline", float: "none" }}
                href="https://www.linkedin.com/in/vishalmishra2810/"
              >
                Vishal Mishra
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default footer;
