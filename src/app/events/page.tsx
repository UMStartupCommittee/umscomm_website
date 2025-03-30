'use client'
import EventPageCard from "@/components/EventPageCard";
import { getEvents, getUpcomingEventsPaginated, getPastEventsPaginated } from "@/lib/hygraph/index";
import { useEffect, useState } from "react";
import { Event } from "@/types/hygraph";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function EventsPage() {
  // State for upcoming events pagination
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [upcomingPage, setUpcomingPage] = useState(1);
  const [hasMoreUpcoming, setHasMoreUpcoming] = useState(true);
  const UPCOMING_PER_PAGE = 3;

  // State for past events with "load more" approach
  const [pastEvents, setPastEvents] = useState<Event[]>([]);
  const [pastEventsPage, setPastEventsPage] = useState(1);
  const [hasMorePast, setHasMorePast] = useState(true);
  const [loadingPast, setLoadingPast] = useState(false);
  const PAST_PER_PAGE = 3;

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Initial data fetching
  useEffect(() => {
    fetchUpcomingEvents();
    fetchPastEvents();
  }, []);

  // Function to fetch upcoming events with pagination
  async function fetchUpcomingEvents(page = 1) {
    setLoading(true);
    try {
      const { data, errors } = await getUpcomingEventsPaginated(page, UPCOMING_PER_PAGE);
      if (errors?.length) {
        console.log("Error", errors);
        setError(errors[0]);
      } else {
        setUpcomingEvents(data.events);
        const totalPages = Math.ceil(data.totalCount / UPCOMING_PER_PAGE);
        setHasMoreUpcoming(page < totalPages);
      }
    } catch (err) {
      setError("Failed to fetch upcoming events");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  // Function to fetch past events with "load more" approach
  async function fetchPastEvents(page = 1, append = false) {
    if (page === 1) setLoadingPast(true);
    try {
      const { data, errors } = await getPastEventsPaginated(page, PAST_PER_PAGE);
      if (errors?.length) {
        console.log("Error", errors);
        setError(errors[0]);
      } else {
        if (append) {
          setPastEvents(prev => [...prev, ...data.events]);
        } else {
          setPastEvents(data.events);
        }
        setHasMorePast(data.events.length === PAST_PER_PAGE);
      }
    } catch (err) {
      setError("Failed to fetch past events");
      console.error(err);
    } finally {
      setLoadingPast(false);
    }
  }

  // Handle pagination for upcoming events
  const handleUpcomingPageChange = (newPage: number) => {
    setUpcomingPage(newPage);
    fetchUpcomingEvents(newPage);
  };

  // Handle "load more" for past events
  const handleLoadMorePast = () => {
    const nextPage = pastEventsPage + 1;
    setPastEventsPage(nextPage);
    fetchPastEvents(nextPage, true);
  };

  return (
    <div className="bg-white">
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          {/* Upcoming Events Section */}
          <section className="py-16 px-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold mb-8">Upcoming Events</h2>

            {loading ? (
              <div className="text-center py-8">Loading events...</div>
            ) : (
              <>
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

          {/* Past Events Section */}
          <section className="bg-gray-100 py-16 px-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold mb-8">Past Events</h2>
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
                  onClick={handleLoadMorePast}
                  disabled={loadingPast}
                >
                  {loadingPast ? "Loading..." : "Load More Past Events"}
                </Button>
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
}