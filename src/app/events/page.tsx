'use client'
import EventPageCard from "@/components/EventPageCard";
import { getEvents } from "@/lib/hygraph/index";
import { useEffect, useState } from "react";
import { Event } from "@/types/hygraph";

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEvents() {
      const { data, errors } = await getEvents();
      if (errors?.length) {
        console.log("Error", errors);
        setError(errors[0]);
      } else {
        console.log("Fetched events:", data);
        setEvents(data.eventData);
      }
    }
    fetchEvents();
  }, []);

  const { upcomingEvents, pastEvents } = filterEvents(events);

  return (
    <div className="bg-white">
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          {/* Upcoming Events Section */}
          <section className="py-16 px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <EventPageCard
                  key={event.id}
                  {...event}
                  showButton={true}
                />
              ))}
              {upcomingEvents.length === 0 && (
                <p className="text-foreground/60 col-span-full text-center py-8">
                  No upcoming events at the moment.
                </p>
              )}
            </div>
          </section>

          {/* Past Events Section */}
          <section className="bg-gray-100 py-16 px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Past Events</h2>
            <div className="grid grid-cols-1 gap-6">
              {pastEvents.map((event) => (
                <EventPageCard
                  key={event.id}
                  {...event}
                  showButton={false}
                />
              ))}
              {pastEvents.length === 0 && (
                <p className="text-foreground/60 col-span-full text-center py-8">
                  No past events to show.
                </p>
              )}
            </div>
          </section>
        </>
      )}
    </div>
  );
}

const filterEvents = (events: Event[]) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return {
    upcomingEvents: events.filter(event => new Date(event.eventDate) >= today),
    pastEvents: events.filter(event => new Date(event.eventDate) <= today)
  };
}