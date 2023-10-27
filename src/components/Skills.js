import cpp from "../assets/img/cpp.svg";
import js from "../assets/img/js.svg";
import python from "../assets/img/python.svg";
import ts from "../assets/img/ts.svg";
import react from "../assets/img/react.svg";
import node from "../assets/img/node.svg";
import express from "../assets/img/express.svg";
import db from "../assets/img/db.svg";
import mongo from "../assets/img/mongo.svg";
import gcp from "../assets/img/gcp.svg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>

              <p>With these skills I craft the Digital Magic 🧪</p>
              {/* 
                <p>
                  Navigating through the infinite cosmos, I pilot the spaceship
                  of code, boldly venturing where no bug has gone before. With
                  the precision of a laser beam, I steer through the vast
                  reaches of data, avoiding the gravitational pull of errors
                  like a black hole in the digital universe.
                </p> */}

              {/* <p>
                  With these skills, I pilot the digital spaceship through the
                  endless cosmos of code, avoiding the treacherous gravitational
                  pull of bugs and glitches, much like navigating the event
                  horizon of a digital black hole. Together, we'll journey
                  through the universe of programming, crafting solutions that
                  defy the laws of ordinary technology, and conjure digital
                  magic. 🚀🌌🧪
                </p> */}

              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true} // Enable auto-play
                autoPlaySpeed={1000}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={cpp} alt="cpp" />
                  <h5>C++</h5>
                </div>

                <div className="item">
                  <img src={js} alt="JS" />
                  <h5>Javascript</h5>
                </div>

                <div className="item">
                  <img src={python} alt="Python" />
                  <h5>Python</h5>
                </div>

                <div className="item">
                  <img src={ts} alt="TS" />
                  <h5>TypeScript</h5>
                </div>

                <div className="item">
                  <img src={react} alt="React" />
                  <h5>React</h5>
                </div>

                <div className="item">
                  <img src={node} alt="node" />
                  <h5>Node</h5>
                </div>

                <div className="item">
                  <img src={express} alt="Express" />
                  <h5>Express Framework</h5>
                </div>

                <div className="item">
                  <img src={db} alt="SQL" />
                  <h5>SQL</h5>
                </div>

                <div className="item">
                  <img src={mongo} alt="MongoDB" />
                  <h5>MongoDB</h5>
                </div>

                <div className="item">
                  <img src={gcp} alt="GCP" />
                  <h5>Google Cloud</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Bg color" />
    </section>
  );
};
