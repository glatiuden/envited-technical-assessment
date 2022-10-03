import React from "react";
import moment from "moment";
import { ImCalendar, ImLocation2 } from "react-icons/im";

import "../Event.css";

const defaultIconSize = 26;
const defaultIconColor = "#8456EC";
const dateFormat = "DD MMMM YYYY hh:MMA";

const EventCard = (props: any) => {
  let {
    title,
    subtitle,
    type = "timing",
    iconSize = defaultIconSize,
    iconColor = defaultIconColor,
    isDefault = false,
  }: {
    title: string;
    subtitle: string;
    type: "timing" | "location";
    iconSize?: number;
    iconColor?: string;
    isDefault?: boolean;
  } = props;

  let icon = <ImLocation2 />;
  if (type === "timing") {
    icon = <ImCalendar />;
    if (!isDefault) {
      title = moment(title).format(dateFormat);
      subtitle = `to <b>${moment(subtitle).format(dateFormat)}</b>`;
    }
  } else {
    const subtitleHasFullAddress = subtitle && subtitle.includes(",");
    if (!isDefault && subtitleHasFullAddress) {
      const fullAddress = subtitle.split(",");
      title = fullAddress[0];
      subtitle = fullAddress[1];
    }
  }

  return (
    <div className="d-flex align-items-center mb-4">
      <span className="bg-white p-3 rounded-4 shadow-sm">
        {React.cloneElement(icon, {
          size: iconSize,
          color: iconColor,
        })}
      </span>
      <div className="ms-3">
        <p className="text-primary fw-bold">{title || "Street name"}</p>
        <p dangerouslySetInnerHTML={{ __html: subtitle }}></p>
      </div>
      <div className="ms-auto">&gt;</div>
    </div>
  );
};

export default EventCard;
