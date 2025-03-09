import { Suspense } from 'react';
import EventDetail from "./EventDetail";

// This is now a Server Component
/* @next-codemod-ignore */
export default async function EventPage({ params }: { params: Promise<{ event: string }> }) {

  return (
    <Suspense fallback={<div>Loading</div>}>
      <EventDetail eventId={(await params).event} />
    </Suspense>
  )
}