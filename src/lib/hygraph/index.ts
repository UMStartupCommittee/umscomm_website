import { hygraphClient } from './client';
import { GET_EVENTS, GET_SINGLE_EVENT } from './queries';
import { EventsResponse, SingleEventResponse } from '@/types/hygraph';
import { Event } from '@/types/hygraph';

// export async function getEvents(): Promise<HygraphResponse<EventResponse>> {
//   try {
//     const data = await hygraphClient.request<EventResponse>(GET_EVENTS);
//     return { data, errors: [] };
//   } catch (error) {
//     return {
//       data: { events: [] },
//       errors: [(error as Error).message]
//     };
//   }
// }

export async function getEvents() {
  try {
    const data = await hygraphClient.request<EventsResponse>(
      GET_EVENTS,
      {},
      // {
      //   Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`,
      // }
    );

    if (!data) {
      throw new Error('No data received from Hygraph');
    }

    console.log(data)

    // Map the response data to match your Event type
    const eventData = data.upcomingEventsBanners.map((event: Event) => ({
      title: event.title,
      eventDescription: event.eventDescription,
      eventDate: event.eventDate,
      eventLocation: event.eventLocation,
      eventTimeRange: event.eventTimeRange,
      id: event.id
    }));

    // console.log('Hygraph data:', data);
    return {
      data: { eventData },
      errors: []
    };
  } catch (error) {
    console.error('Hygraph fetch error:', error);
    return {
      data: { eventData: [] },
      errors: [(error as Error).message]
    };
  }
}

export async function getEventById(id: string) {
  try {
    const data = await hygraphClient.request<SingleEventResponse>(GET_SINGLE_EVENT, { id });

    if (!data || !data.upcomingEventsBanner) {
      throw new Error('No data received from Hygraph');
    }

    console.log("Hygrpah data", data)

    // Map the response data to match your Event type
    const event = {
      title: data.upcomingEventsBanner.title,
      eventDescription: data.upcomingEventsBanner.eventDescription,
      eventDate: data.upcomingEventsBanner.eventDate,
      eventLocation: data.upcomingEventsBanner.eventLocation,
      eventTimeRange: data.upcomingEventsBanner.eventTimeRange,
      id: data.upcomingEventsBanner.id
    };

    // console.log('Hygraph data:', data);
    return {
      data: { event },
      errors: []
    };
  } catch (error) {
    console.error('Hygraph fetch error:', error);
    return {
      data: { event: null },
      errors: [(error as Error).message]
    };
  }
}