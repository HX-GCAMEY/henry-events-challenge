import EventCard from "@/components/eventCard/EventCard";
import {getEventById} from "@/utils";
import {useRouter} from "next/router";

function EventDetail() {
  const router = useRouter();
  console.log(router);
  console.log(router.query);

  const eventId = router.query.eventId;

  const event = getEventById(eventId);
  console.log(event);

  if (!eventId) return <p>ingresa un id valido</p>;
  return (
    <div>
      <img
        src={`/${event.image}`}
        alt={event.title}
        style={{maxWidth: "300px", maxHeight: "300px"}}
      />
      <div>
        <div>
          <h2>{event.title}</h2>
          <div>
            <time>{event.date}</time>
          </div>
          <div>
            <address>{event.location}</address>
          </div>

          <div>
            <h2>{event.description}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetail;
