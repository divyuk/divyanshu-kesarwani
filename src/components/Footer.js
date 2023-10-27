import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import gitsvg from "../assets/img/gitsvg.svg";
import youtube from "../assets/img/youtube.svg";
import leetcode from "../assets/img/leetcode.svg";
import dk1 from "../assets/img/dk1.png";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={dk1} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/divyanshu-kesarwani-5035871a1/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="Linkedin" />
              </a>

              <a
                href="https://github.com/divyuk"
                target="_blank"
                rel="noreferrer"
              >
                <img src={gitsvg} alt="GIT" />
              </a>

              <a
                href="https://www.youtube.com/@codedisk"
                target="_blank"
                rel="noreferrer"
              >
                <img src={youtube} alt="YT" />
              </a>

              <a
                href="https://leetcode.com/divyuk/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={leetcode} alt="LC" />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
