import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import image from "../../assets/images/birthday-cake.png";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import EventDetails from "./Components/EventDetails";

import "./Event.css";

const defaultEventDetails = {
  eventName: "Birthday Bash",
  eventHost: "Elysia",
  eventStartDate: "18 August 6:00PM",
  eventEndDate: `to <b>19 August 1:00PM</b> UTC +10`,
  eventLocation: "Suburb, State, Postcode",
  eventPhoto: image,
  isDefault: true,
};

const Event = () => {
  const { state: eventFromProps } = useLocation();
  const { width } = useWindowDimensions();
  const isMobile = width <= 768;

  const [eventDetails, setEventDetails] = useState(defaultEventDetails);
  const [containerClassName, setContainerClassName] = useState("");

  useEffect(() => {
    if (eventFromProps) {
      setEventDetails(eventFromProps);
    } else {
      setEventDetails(defaultEventDetails);
    }
  }, [eventFromProps]);

  useEffect(() => {
    if (!isMobile) {
      setContainerClassName("d-flex align-items-center container py-5 px-5");
    } else {
      setContainerClassName("");
    }
  }, [isMobile]);

  return (
    <div className={containerClassName}>
      <div className="row justify-content-around">
        <div className="col-12 col-lg-4 order-first order-lg-last">
          <img
            src={eventDetails.eventPhoto}
            alt="birthday cake"
            className={isMobile ? "img-fluid" : "mx-auto d-block mt-5 mt-lg-0"}
            height={isMobile ? 375 : 530}
          />
        </div>
        <div className="col-12 col-lg-6 order-last order-lg-first">
          <EventDetails eventDetails={eventDetails} />
        </div>
      </div>
    </div>
  );
};

export default Event;
