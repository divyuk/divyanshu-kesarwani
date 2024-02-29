import ip from "../assets/img/IP.jpg";
import ss from "../assets/img/ss.jpg";
import stl from "../assets/img/stl.png";
import user from "../assets/img/user.svg";
import videouploaded from "../assets/img/videouploaded.svg";
import colorSharp from "../assets/img/color-sharp.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel";

export const Courses = () => {
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };

  return (
    <section className="skill" id="courses">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="course-bx wow zoomIn">
              <h2>Courses On YouTube</h2>
              <p>
                Unlock the power of knowledge - Explore my YouTube course today!
              </p>
              <div className="course-container">
                <Carousel
                  showArrows={false}
                  showStatus={false}
                  showThumbs={false}
                  showIndicators={false}
                  infiniteLoop={true} // Enable infinite loop
                  autoPlay={true} // Enable autoplay
                  interval={1000} // Set the autoplay interval (in milliseconds)
                >
                  <div className="carousel-slide">
                    <a
                      href="https://www.youtube.com/watch?v=nCmFM3gwMek&list=PLBrSeU9AeANZNTKWCKWZ6Upz7Ow9ilizp&pp=iAQB"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={ip} alt=" 3" className="centered-image" />

                      <div className="text-container">
                        <h3 className="course-text">
                          Introductory Problems - CSES
                        </h3>
                      </div>
                    </a>
                  </div>

                  <div className="carousel-slide myimage">
                    <a
                      href="https://www.youtube.com/watch?v=_V9Hc-3JnDY&list=PLBrSeU9AeANbIEzG9Kk-lcyL_yiByfJa8&pp=iAQB"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={ss} alt=" 3" className="centered-image" />
                      <div className="text-container">
                        <h3 className="course-text">
                          Sorting and Searching - CSES
                        </h3>
                      </div>
                    </a>
                  </div>

                  <div className="carousel-slide myimage">
                    <a
                      href="https://www.youtube.com/watch?v=DoO8wGMo14U&list=PLBrSeU9AeANZ8KnsR3NJAECGOA-o-Lxk-&pp=iAQB"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={stl} alt=" 3" className="centered-image" />
                      <div className="text-container">
                        <h3 className="course-text">C++ STL</h3>
                      </div>
                    </a>
                  </div>
                </Carousel>
              </div>

              <section className="videoinfo">
                <p className="videopara">
                  <img
                    src={videouploaded}
                    alt="Video"
                    className="videoupload"
                  />
                  45+ Videos Uploaded
                </p>
                <p className="subspara">
                  <img src={user} alt="user" className="subscribeduser" />
                  170+ Subscriber joined
                </p>
              </section>

              <section className="channelinfo">
                <h2 className="channelname">Code Disk</h2>
                <p className="channelpara">
                  Ready to dive into exciting content? Check out the channel,
                  explore, and if you like what you see, don't forget to hit
                  Subscribe!
                </p>
              </section>
              <a
                href="https://www.youtube.com/@codedisk"
                target="_blank"
                rel="noreferrer"
              >
                <button className="subscribebutton">Subscribe</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <img
        className="background-image-left"
        src={colorSharp}
        alt="background"
      />
    </section>
  );
};
