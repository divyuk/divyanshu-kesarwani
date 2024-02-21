function Timeline() {
  return (
    <section className="project" id="courses">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="course-bx wow zoomIn">
              <h2>What I have done?</h2>
              <p>
                Check out the work I have done with some of the top clients 💻👨‍⚖️
              </p>
              <div className="parent-timeline">
                <div className="timeline">
                  <ul>
                    <li>
                      <span>British Telecommunication</span>
                      <div className="content">
                        <h3>June 2023 - Present</h3>
                        <p>
                          Single-handed migrated and developed an OBIEE
                          application into React which is used by more than 500+
                          developers across the world
                        </p>
                      </div>
                    </li>
                    <li>
                      <span>Apple</span>
                      <div className="content">
                        <h3>5 September 2021 - 4 April 2023</h3>

                        <p>
                          Developed a Frontend Web App with seamless integration
                          to a Named Entity Recognition (NER) backend system,
                          enabling users to input text and obtain real-time
                          identification and display of named entities within
                          text.{" "}
                        </p>
                        <p>
                          Integrated Apple’s issue detection system with Slack
                          to receive real-time notifications of job failures,
                          enabling prompt corrective action to be taken.
                        </p>
                        <p>
                          Designed and implemented 35 custom regular expressions
                          for various Apple products and conducted a comparative
                          analysis with the existing Named Entity Recognition
                          (NER) solution. Thoroughly analyzed the results and
                          presented comprehensive reports to customers.
                        </p>
                        <p>
                          Developed a Python SDK, ensuring data response,
                          efficient error handling, and the integration of a
                          circuit breaker feature to address endpoint timeout
                          issues. Deployed it as a package on the Apple PyPI
                          repository.
                        </p>
                        <p>
                          Developed and executed comprehensive unit and
                          integration test suites utilizing pytest and Python
                          mocking.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
