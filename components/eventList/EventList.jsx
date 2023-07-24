import EventCard from "../eventCard/EventCard";
import style from "./EventList.module.css";

function EventList({events}) {
  return (
    <>
      <ul className={style.list}>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </ul>
    </>
  );
}

export default EventList;
