import events from "@/data";

export function getComingEvents() {
  return events.filter((event) => event.notify);
}

export function getAllEvents() {
  return events;
}

export function getFilteredEvents(dateFilter) {
  const {year, month} = dateFilter;

  let filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return events.find((event) => event.id === Number(id));
}
