import React, { useEffect, useState } from "react";
import picture1 from "../../assets/science-fair.jpg";
import picture2 from "../../assets/art-exhibition.jpg";
import picture3 from "../../assets/sports-day.jpg";
import picture4 from "../../assets/tech-conference.jpg";
import "./EventComponent.css";

const EventComponent = () => {
  const [event, setEvent] = useState(null);
  const [count, setCount] = useState(0);

  const events = [
    {
      Name: "Science Fair",
      Desc: "A showcase of the latest scientific discoveries and projects by students.",
      Image: picture1,
    },
    {
      Name: "Tech Conference 2024",
      Desc: "An annual tech conference with the latest in technology and innovation.",
      Image: picture2,
    },
    {
      Name: "Sports Day",
      Desc: "An exciting day of sports activities and competitions.",
      Image: picture3,
    },
    {
      Name: "Music Fest",
      Desc: "A weekend filled with music from top bands and artists.",
      Image: picture4,
    },
  ];

  useEffect(() => {
    for (let i = 0; i < events.length; i++) {
      setTimeout(() => {
        setEvent(events[i]);
        setTimeout(() => {
          if (i === events.length - 1) {
            setCount((prev) => prev + 1);
          }
        }, 2000);
      }, i * 5000);
    }
  }, count);

  return (
    <div className="event">
      <div className="events">
        <h1>Events</h1>
      </div>
      <div>
        {event && (
          <div className="border">
            <div className="img-container">
              <img src={event.Image} height="100px" width="100px" />
            </div>
            <div className="img-content">
              <h2>{event.Name}</h2>
              <p>{event.Desc}</p>
            </div>
          </div>
        )}
        <div className="item0">
          <h3>© 2024 Saveetha Engineering College. All rights reserved.</h3>
        </div>
      </div>
    </div>
  );
};
export default EventComponent;
