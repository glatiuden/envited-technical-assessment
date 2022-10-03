import image from "../../assets/images/landing-image.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GradientButton from "../../components/GradientButton";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import "./Create.css";

const Create = () => {
  const navigate = useNavigate();
  const { width } = useWindowDimensions();
  const isMobile = width <= 768;

  const [formValues, setFormValues] = useState({
    eventName: "",
    eventHost: "",
    eventStartDate: "",
    eventEndDate: "",
    eventLocation: "",
    eventPhoto: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { id: fieldName, value: fieldValue },
    } = e;

    let _fieldValue: any = fieldValue;
    if (fieldName === "eventPhoto") {
      _fieldValue = e.target.files && URL.createObjectURL(e.target.files[0]);
    }

    setFormValues({ ...formValues, [fieldName]: _fieldValue });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const isValid = Object.values(formValues).every((value) => {
      if (!value) {
        return false;
      }
      return true;
    });

    if (isValid) {
      navigate("/event", { state: formValues });
    }
  };

  return (
    <div className="container py-5 px-5">
      <div className="row flex-even justify-content-between pb-5">
        <div className="col-12 text-center text-md-start">
          <h1 className="fw-bold text-primary">Create a new event!</h1>
          <p>Please fill up the necessary details</p>
        </div>
        <div className="col-12 col-lg-6">
          <form onSubmit={handleSubmit} className="mt-5 mb-5 event-form">
            <div className="mb-3">
              <label htmlFor="eventName" className="form-label fw-bold">
                What's your event name? 🎉
              </label>
              <input
                id="eventName"
                type="text"
                className="form-control"
                value={formValues.eventName}
                onChange={handleChange}
                placeholder="Movie Night"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="eventHost" className="form-label fw-bold">
                Who is the host? 🥳
              </label>
              <input
                type="text"
                className="form-control"
                id="eventHost"
                value={formValues.eventHost}
                onChange={handleChange}
                placeholder="Elysia"
              />
            </div>

            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label
                    htmlFor="eventStartDate"
                    className="form-label fw-bold"
                  >
                    Start Date 🗓
                  </label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="eventStartDate"
                    value={formValues.eventStartDate}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="eventEndDate" className="form-label fw-bold">
                    End Date 🏁
                  </label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="eventEndDate"
                    value={formValues.eventEndDate}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="eventLocation" className="form-label fw-bold">
                Where is it happening at? 📍
              </label>
              <input
                type="text"
                className="form-control"
                id="eventLocation"
                value={formValues.eventLocation}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="eventPhoto" className="form-label fw-bold">
                Upload an Photo 📸
              </label>
              <input
                id="eventPhoto"
                accept="image/png, image/gif, image/jpeg"
                type="file"
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="d-flex justify-content-center">
              <GradientButton className="mt-3">
                🚀 Create Your Event!
              </GradientButton>
            </div>
          </form>
        </div>
        <div className="col-12 col-lg-4 d-none d-lg-flex justify-content-center align-self-center">
          <img
            src={image}
            alt="event"
            className="rounded-4 img-fluid shadow"
            height={1000}
            width={isMobile ? 190 : 300}
          />
        </div>
      </div>
    </div>
  );
};

export default Create;
