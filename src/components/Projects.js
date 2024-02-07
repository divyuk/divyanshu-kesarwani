import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import onenews from "../assets/img/onenews.png";
import onecinema from "../assets/img/onecinema.png";
import k2n from "../assets/img/k2n.png";
import notebook from "../assets/img/notebook.png";
import sensor from "../assets/img/sensor.png";
import pizzaApp from "../assets/img/pizzaApp.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "One News",
      description: "Full Stack Application",
      imgUrl: onenews,
      type: "Full Stack",
      live: "https://one-news.vercel.app/",
      github: "https://github.com/divyuk/news-aggregator-client",
    },
    {
      title: "One Cinema",
      description: "Frontend Development",
      imgUrl: onecinema,
      type: "React",
      live: "https://onecinema.vercel.app/",
      github: "https://github.com/divyuk/one-cinema",
    },

    {
      title: "Kindle to Notion",
      description: "Python Development",
      imgUrl: k2n,
      type: "Python",
      // live: "https://onecinema.vercel.app/",
      github: "https://github.com/divyuk/one-cinema",
    },
    {
      title: "OnIpynb Renderer",
      description: "Python Development",
      imgUrl: notebook,
      type: "Python",
      // live: "https://onecinema.vercel.app/",
      github: "https://github.com/divyuk/onipynbrenderer",
    },
    {
      title: "Sensor Fault Detection",
      description: "Data Science",
      imgUrl: sensor,
      type: "Machine Learning",
      // live: "https://onecinema.vercel.app/",
      github: "https://github.com/divyuk/sensor-fault-detection",
    },
    // Add more projects with different types
    {
      title: "The Pizza App",
      description: "Frontend Development",
      imgUrl: pizzaApp,
      type: "React",
      live: "https://the-pizza-app.vercel.app/",
      github: "https://github.com/divyuk/pizza-app",
    },
  ];

  const projectTypes = [
    "All",
    "React",
    "Full Stack",
    "Python",
    "Machine Learning",
  ]; //, "HTML & CSS"
  const [activeType, setActiveType] = useState("All");

  const filteredProjects =
    activeType === "All"
      ? projects
      : projects.filter((project) => project.type === activeType);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Behold, a glimpse of my creative endeavors – a gallery of
                    projects I've passionately crafted and brought to life.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="All">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      {projectTypes.map((type) => (
                        <Nav.Item key={type}>
                          <Nav.Link
                            eventKey={type}
                            onClick={() => setActiveType(type)}
                          >
                            {type}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      {projectTypes.map((type) => (
                        <Tab.Pane key={type} eventKey={type}>
                          <Row>
                            {filteredProjects.map((project, index) => (
                              <ProjectCard key={index} {...project} />
                            ))}
                          </Row>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
};
