import {useRouter} from "next/router";

import {getComingEvents} from "@/utils";
import EventList from "@/components/eventList/EventList";

export default function Home() {
  const comingEvents = getComingEvents();

  return (
    <>
      <EventList events={comingEvents} />
    </>
  );
}
