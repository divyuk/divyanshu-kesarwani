import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, live, github }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img
          src={imgUrl}
          alt="project"
          style={{ width: "416px%", height: "231px" }}
        />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <section className="custom-section">
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="custom-link-style"
              >
                Live Demo
              </a>
            )}
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="custom-link-style"
            >
              GitHub
            </a>
          </section>
        </div>
      </div>
    </Col>
  );
};
