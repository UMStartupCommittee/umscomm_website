import { getUpcomingEventsPaginated, getPastEventsPaginated } from "@/lib/hygraph/index";
import UpcomingEventsSection from "./UpcomingEventsSection";
import PastEventsSection from "./PastEventsSection";

export const revalidate = 300;

export default async function EventsPage() {
  // Server-side data fetching for initial render
  const upcomingResponse = await getUpcomingEventsPaginated(1, 3);
  const pastResponse = await getPastEventsPaginated(1, 3);

  // Handle errors at the server level if needed
  const errorMessage = upcomingResponse.errors?.[0] || pastResponse.errors?.[0];

  // If there's an error, we can still render the page with error state
  if (errorMessage) {
    console.error("Server-side data fetching error:", errorMessage);
  }

  return (
    <div className="bg-white">
      {errorMessage ? (
        <p className="text-red-500 text-center py-8">{errorMessage}</p>
      ) : (
        <>
          <UpcomingEventsSection
            initialEvents={upcomingResponse.data.events || []}
            initialPage={1}
            totalCount={upcomingResponse.data.totalCount || 0}
          />

          <PastEventsSection
            initialEvents={pastResponse.data.events || []}
          />
        </>
      )}
    </div>
  );
}