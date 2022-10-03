import EventCard from "./EventCard";
import Event from "../../../models/Event";

import "../Event.css";

const EventDetails = ({
  eventDetails,
}: {
  eventDetails: Event & { isDefault?: boolean };
}) => {
  return (
    <div className="container px-4 px-md-5 py-3">
      <h1 className="event-title text-primary">{eventDetails.eventName}</h1>
      <p className="event-subtitle">
        Hosted by{" "}
        <span className="event-subtitle-bold">{eventDetails.eventHost}</span>
      </p>
      <div className="mt-5">
        <EventCard
          type="timing"
          title={eventDetails.eventStartDate}
          subtitle={eventDetails.eventEndDate}
          isDefault={eventDetails.isDefault}
        />
        <EventCard
          type="location"
          subtitle={eventDetails.eventLocation}
          isDefault={eventDetails.isDefault}
        />
      </div>
    </div>
  );
};

export default EventDetails;
