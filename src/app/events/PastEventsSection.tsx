'use client';

import { Event } from "@/types/hygraph";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import EventPageCard from "@/components/EventPageCard";
import { getPastEventsPaginated } from "@/lib/hygraph/index";

export default function PastEventsSection({ initialEvents }: { initialEvents: Event[] }) {
  const [pastEvents, setPastEvents] = useState<Event[]>(initialEvents);
  const [pastEventsPage, setPastEventsPage] = useState(1);
  const [hasMorePast, setHasMorePast] = useState(true);
  const [loadingPast, setLoadingPast] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const PAST_PER_PAGE = 3;

  // Function to fetch past events with "load more" approach
  async function fetchMorePastEvents() {
    const nextPage = pastEventsPage + 1;
    setLoadingPast(true);
    try {
      const { data, errors } = await getPastEventsPaginated(nextPage, PAST_PER_PAGE);
      if (errors?.length) {
        console.log("Error", errors);
        setError(errors[0]);
      } else {
        setPastEvents(prev => [...prev, ...data.events]);
        setHasMorePast(data.events.length === PAST_PER_PAGE);
        setPastEventsPage(nextPage);
      }
    } catch (err) {
      setError("Failed to fetch past events");
      console.error(err);
    } finally {
      setLoadingPast(false);
    }
  }

  return (
    <section className="bg-gray-100 py-16 px-8">
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold mb-8">Past Events</h2>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <div className="grid grid-cols-1 gap-6">
        {pastEvents.map((event) => (
          <EventPageCard
            key={event.id}
            {...event}
            showButton={false}
          />
        ))}
        {pastEvents.length === 0 && !loadingPast && (
          <p className="text-foreground/60 col-span-full text-center py-8">
            No past events to show.
          </p>
        )}
      </div>

      {/* Load more button for past events */}
      {hasMorePast && (
        <div className="flex justify-center mt-8">
          <Button
            onClick={fetchMorePastEvents}
            disabled={loadingPast}
          >
            {loadingPast ? "Loading..." : "Load More Past Events"}
          </Button>
        </div>
      )}
    </section>
  );
}