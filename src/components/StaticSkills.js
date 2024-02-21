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
import docker from "../assets/img/docker.png";
import tailwind from "../assets/img/tailwind.svg";

// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import colorSharp from "../assets/img/color-sharp.png";
import IndiviualSkill from "./IndiviualSkill";

export const StaticSkills = () => {
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
              <div className="skillset">
                <IndiviualSkill skillName={"C++"} skillImage={cpp} />
                <IndiviualSkill skillName={"Javascript"} skillImage={js} />
                <IndiviualSkill skillName={"Python"} skillImage={python} />
                <IndiviualSkill skillName={"TypeScript"} skillImage={ts} />
                <IndiviualSkill skillName={"React"} skillImage={react} />
                <IndiviualSkill skillName={"Node"} skillImage={node} />
                <IndiviualSkill
                  skillName={"Express Framework"}
                  skillImage={express}
                />
                <IndiviualSkill skillName={"SQL"} skillImage={db} />
                <IndiviualSkill skillName={"MongoDB"} skillImage={mongo} />
                <IndiviualSkill skillName={"Google Cloud"} skillImage={gcp} />
                <IndiviualSkill skillName={"Docker"} skillImage={docker} />
                <IndiviualSkill
                  skillName={"TailwindCss"}
                  skillImage={tailwind}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Bg color" />
    </section>
  );
};
