import image from "../../assets/images/landing-image.svg";
import GradientLinkButton from "../../components/GradientLinkButton";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import "./Landing.css";

const Landing = () => {
  const { width } = useWindowDimensions();
  const isMobile = width <= 768;
  const isDesktop = width >= 900; // Referencing MacBook Pro 14" Dimension
  const isiPad = !isMobile && width <= 844 && !isDesktop; // Referencing iPad Pro 11" Dimension
  const isSmallScreen = isMobile || isiPad;

  return (
    <div className="d-flex align-items-center container py-5 px-5">
      <div className="row flex-even justify-content-around">
        <div className="order-last order-lg-first col-12 col-lg-4 text-center mt-3 mt-lg-0">
          <div className="d-flex justify-content-center">
            <img
              src={image}
              alt="event"
              className="rounded-4 img-fluid shadow"
              height={1000}
              width={isMobile ? 190 : 300}
            />
          </div>

          {/* For Mobile and iPad */}
          {isSmallScreen && (
            <GradientLinkButton
              to="/create"
              className={`shadow mt-4 mt-md-5 ${isMobile ? "w-75" : "w-50"}`}
            >
              🎉 Create my event
            </GradientLinkButton>
          )}
        </div>

        <div className="order-first order-lg-last col-12 col-lg-5 text-center text-lg-end align-self-center">
          <h1 className="mt-3 mt-md-0 mb-md-3 fw-bold title text-primary">
            Imagine if
            <br />
            <span className="title-gradient">Snapchat</span>
            <br />
            had events.
          </h1>

          <p className={`mt-3 mt-0 mb-md-4 mb-lg-5 fw-light landing-subtitle`}>
            Easily host and share events with your friends across any social
            media.
          </p>

          {/* For Desktop */}
          {isDesktop && (
            <GradientLinkButton className={`shadow w-50`} to="/create">
              🎉 Create my event
            </GradientLinkButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default Landing;
