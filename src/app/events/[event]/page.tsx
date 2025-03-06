import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, MapPin, Clock, Users, ExternalLink } from "lucide-react";
import { getEvents } from "@/lib/hygraph";

// Mock function to get event data - replace with actual data fetching
async function getEventData(slug: string) {
  // This is a placeholder - you'll want to fetch from your API or database
  try {
    const { data, errors } = await getEvents();

    if (errors?.length) {
      console.log("Error fetching events:", errors);
      return null;
    }

    // Find the event with matching id from the returned data
    if (data && data.eventData) {
      const event = data.eventData.find((event: any) => event.id === slug);

      if (event) {
        return {
          id: event.id,
          title: event.title,
          description: event.eventDescription,
          longDescription: event.eventDescription, // You might want a separate field for this
          date: event.eventDate,
          time: event.eventTimeRange,
          location: event.eventLocation,
          // image: event.image || null,
          // Add default values for other fields your UI expects
          // capacity: event.capacity || null,
          // registrationUrl: event.registrationUrl || null,
          // organizerContact: event.organizerContact || null,
          // speakers: event.speakers || []
        };
      }
    }

    // If no matching event found or data structure doesn't match expectations
    return null;
  } catch (error) {
    console.error("Failed to get event data:", error);
    return null;
  }
}

export default async function EventPage({ params }: { params: { event: string } }) {
  const slug = params.event;
  const eventData = await getEventData(slug);

  if (!eventData) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Event Header with Image */}
        <div className="relative h-64 md:h-96">
          {/* {eventData.image ? (
            <Image
              src={eventData.image}
              alt={eventData.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600" />
          )} */}
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