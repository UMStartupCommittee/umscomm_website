"use client"

import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import { Calendar, MapPin, Clock } from "lucide-react";
import { getEventById } from "@/lib/hygraph";
import { useEvents } from "@/lib/context/EventsContext";

interface EventDetailProps {
  eventId: string;
}
interface EventDisplayData {
  id?: string;
  title?: string;
  description?: string;
  longDescription?: string;
  date?: string;
  time?: string;
  location?: string;
}

export default function EventDetail({ eventId }: EventDetailProps) {
  const { getEventById: getEventFromContext, isLoaded } = useEvents();
  const [eventData, setEventData] = useState<EventDisplayData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadEventData() {
      try {
        // First, check if we have the event in our context
        if (isLoaded) {
          const contextEvent = getEventFromContext(eventId);
          if (contextEvent) {
            // Transform the event for display
            setEventData({
              id: contextEvent.id,
              title: contextEvent.title,
              description: contextEvent.eventDescription,
              longDescription: contextEvent.eventDescription,
              date: contextEvent.eventDate,
              time: contextEvent.eventTimeRange,
              location: contextEvent.eventLocation,
            });
            setIsLoading(false);
            return;
          }
        }

        // If not found in context or context not loaded yet, fetch from API
        const { data, errors } = await getEventById(eventId);

        if (errors?.length || !data?.event) {
          notFound();
        } else {
          const event = data.event;
          setEventData({
            id: event.id,
            title: event.title,
            description: event.eventDescription,
            longDescription: event.eventDescription,
            date: event.eventDate,
            time: event.eventTimeRange,
            location: event.eventLocation,
          });
        }
      } catch (error) {
        console.error("Failed to load event:", error);
        notFound();
      } finally {
        setIsLoading(false);
      }
    }

    loadEventData();
  }, [eventId, getEventFromContext, isLoaded]);;

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8">Loading event...</div>;
  }

  if (!eventData) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Event Header with Image */}
        <div className="relative h-64 md:h-96">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600" />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h1 className="text-3xl md:text-4xl font-bold">{eventData.title}</h1>
            <p className="mt-2 text-lg text-gray-200">{eventData.description}</p>
          </div>
        </div>

        {/* Event Details */}
        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-2">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold mb-4">About This Event</h2>
                <p>{eventData.longDescription}</p>

                {/* {eventData.speakers && eventData.speakers.length > 0 && (
                     <>
                       <h3 className="text-xl font-semibold mt-8 mb-4">Featured Speakers</h3>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         {eventData.speakers.map((speaker, index) => (
                           <div key={index} className="bg-gray-50 p-4 rounded-lg">
                             <h4 className="font-medium">{speaker.name}</h4>
                             <p className="text-sm text-gray-600">{speaker.title}</p>
                           </div>
                         ))}
                       </div>
                     </>
                   )} */}
              </div>
            </div>

            <div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-4">Event Details</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-blue-600 mt-0.5 mr-3" />
                    <div>
                      <div className="font-medium">Date</div>
                      <div className="text-gray-600">{eventData.date}</div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-blue-600 mt-0.5 mr-3" />
                    <div>
                      <div className="font-medium">Time</div>
                      <div className="text-gray-600">{eventData.time}</div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-600 mt-0.5 mr-3" />
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-gray-600">{eventData.location}</div>
                    </div>
                  </div>

                  {/* {eventData.capacity && (
                       <div className="flex items-start">
                         <Users className="w-5 h-5 text-blue-600 mt-0.5 mr-3" />
                         <div>
                           <div className="font-medium">Capacity</div>
                           <div className="text-gray-600">{eventData.capacity} attendees</div>
                         </div>
                       </div>
                     )} */}
                </div>

                {/* {eventData.registrationUrl && (
                     <div className="mt-6">
                       <a
                         href={eventData.registrationUrl}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md text-center transition duration-200"
                       >
                         Register Now
                       </a>
                     </div>
                   )} */}

                {/* {eventData.organizerContact && (
                     <div className="mt-4 text-sm text-gray-500 text-center">
                       Questions? Contact <a href={`mailto:${eventData.organizerContact}`} className="text-blue-600 hover:underline">{eventData.organizerContact}</a>
                     </div>
                   )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}