'use client';

import { Event } from "@/types/hygraph";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import EventPageCard from "@/components/EventPageCard";
import { getUpcomingEventsPaginated } from "@/lib/hygraph/index";

export default function UpcomingEventsSection({
  initialEvents,
  initialPage,
  totalCount
}: {
  initialEvents: Event[],
  initialPage: number,
  totalCount: number
}) {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>(initialEvents);
  const [upcomingPage, setUpcomingPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const UPCOMING_PER_PAGE = 3;
  const totalPages = Math.ceil(totalCount / UPCOMING_PER_PAGE);
  const hasMoreUpcoming = upcomingPage < totalPages;

  // Function to fetch upcoming events with pagination
  async function fetchUpcomingEvents(page: number) {
    setLoading(true);
    try {
      const { data, errors } = await getUpcomingEventsPaginated(page, UPCOMING_PER_PAGE);
      if (errors?.length) {
        console.log("Error", errors);
        setError(errors[0]);
      } else {
        setUpcomingEvents(data.events);
      }
    } catch (err) {
      setError("Failed to fetch upcoming events");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  // Handle pagination for upcoming events
  const handleUpcomingPageChange = (newPage: number) => {
    setUpcomingPage(newPage);
    fetchUpcomingEvents(newPage);
  };

  return (
    <section className="py-16 px-8">
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold mb-8">Upcoming Events</h2>

      {loading ? (
        <div className="text-center py-8">Loading events...</div>
      ) : (
        <>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map((event) => (
                <EventPageCard
                  key={event.id}
                  {...event}
                  showButton={true}
                />
              ))
            ) : (
              <p className="text-foreground/60 col-span-full text-center py-8">
                No upcoming events at the moment.
              </p>
            )}
          </div>

          {/* Pagination controls for upcoming events */}
          {upcomingEvents.length > 0 && (
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                onClick={() => handleUpcomingPageChange(upcomingPage - 1)}
                disabled={upcomingPage === 1}
              >
                <ChevronLeft className="w-4 h-4 mr-2" /> Previous
              </Button>
              <span className="flex items-center">Page {upcomingPage}</span>
              <Button
                variant="outline"
                onClick={() => handleUpcomingPageChange(upcomingPage + 1)}
                disabled={!hasMoreUpcoming}
              >
                Next <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </>
      )}
    </section>
  );
}