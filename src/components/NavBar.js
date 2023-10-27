import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import logo2 from "../assets/img/logo2.svg";
import logo3 from "../assets/img/logo3.svg";
import dk1 from "../assets/img/dk1.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import gitsvg from "../assets/img/gitsvg.svg";
import youtube from "../assets/img/youtube.svg";

import leetcode from "../assets/img/leetcode.svg";
import lc from "../assets/img/lc.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

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
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={dk1} alt="Logo" />
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
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#courses"
                className={
                  activeLink === "courses"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("courses")}
              >
                Courses
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
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
              <HashLink to="#connect">
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
