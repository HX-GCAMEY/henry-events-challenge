import EventList from "@/components/eventList/EventList";
import {getFilteredEvents} from "@/utils";
import {useRouter} from "next/router";

function FilteredEvents() {
  const router = useRouter();

  const filters = router.query.slug;
  console.log(filters);

  if (!filters) {
    return <h3>Loading...</h3>;
  }

  const year = Number(filters[0]);
  const month = Number(filters[1]);

  const events = getFilteredEvents({year, month});

  if (!events || events.length === 0) {
    return <h3>No events on this date</h3>;
  }

  return (
    <div>
      <EventList events={events} />
    </div>
  );
}

export default FilteredEvents;
