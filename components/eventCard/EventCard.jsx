import Link from "next/link";

import style from "./EventCard.module.css";

function EventCard({event}) {
  const {title, image, date, location, id} = event;

  return (
    <li className={style.card}>
      <img src={`/${image}`} alt={title} />
      <div className={style.content}>
        <div className={style.summary}>
          <h2>{title}</h2>
          <div className={style.date}>
            <time>{date}</time>
          </div>
          <div className={style.address}>
            <address>{location}</address>
          </div>
          <div>
            <button>
              <Link href={`/events/${id}`}>Event Details</Link>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default EventCard;
