import { hygraphClient } from './client';
import { GET_EVENTS, GET_PAST_EVENTS_PAGINATED, GET_SINGLE_EVENT, GET_UPCOMING_EVENTS, GET_UPCOMING_EVENTS_PAGINATED } from './queries';
import { EventsResponse, ExtendedEventsResponse, SingleEventResponse } from '@/types/hygraph';

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

    // console.log(data)

    // Map the response data to match your Event type
    const eventData = data.upcomingEventsBanners;

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

    // console.log("Hygrpah data", data)

    // Map the response data to match your Event type
    const event = {
      title: data.upcomingEventsBanner.title,
      eventDescription: data.upcomingEventsBanner.eventDescription,
      eventDate: data.upcomingEventsBanner.eventDate,
      eventLocation: data.upcomingEventsBanner.eventLocation,
      eventTimeRange: data.upcomingEventsBanner.eventTimeRange,
      id: data.upcomingEventsBanner.id,
      eventRegistrationLink: data.upcomingEventsBanner.eventRegistrationLink
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

export async function getUpcomingEvents() {
  try {
    const today = new Date().toISOString();
    // console.log('Today:', today);
    const data = await hygraphClient.request<EventsResponse>(GET_UPCOMING_EVENTS, { today });

    if (!data || !data.upcomingEventsBanners) {
      throw new Error('No data received from Hygraph');
    }

    // const event = data.upcomingEventsBanners.map((event: Event) => ({
    //   title: event.title,
    //   eventDescription: event.eventDescription,
    //   eventDate: event.eventDate,
    //   eventLocation: event.eventLocation,
    //   eventTimeRange: event.eventTimeRange,
    //   id: event.id,
    //   eventRegistrationLink: event.eventRegistrationLink,
    //   date: event.date
    // }));
    const event = data.upcomingEventsBanners;

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

export async function getUpcomingEventsPaginated(page = 1, perPage = 3) {
  try {
    const today = new Date().toISOString();
    const skip = (page - 1) * perPage;

    const data = await hygraphClient.request<ExtendedEventsResponse>(GET_UPCOMING_EVENTS_PAGINATED, {
      today,
      skip,
      first: perPage
    });

    if (!data || !data.upcomingEventsBanners) {
      throw new Error('No data received from Hygraph');
    }

    const totalCount = data.upcomingEventsBannersConnection.aggregate.count;
    // const hasMore = skip + perPage < totalCount;

    return {
      data: {
        events: data.upcomingEventsBanners,
        totalCount
      },
      errors: []
    };
  } catch (error) {
    console.error('Hygraph fetch error:', error);
    return {
      data: { events: [], totalCount: 0 },
      errors: [(error as Error).message]
    };
  }
}

export async function getPastEventsPaginated(page = 1, perPage = 3) {
  try {
    const today = new Date().toISOString();
    const skip = (page - 1) * perPage;

    const data = await hygraphClient.request<EventsResponse>(GET_PAST_EVENTS_PAGINATED, {
      today,
      skip,
      first: perPage
    });

    if (!data || !data.upcomingEventsBanners) {
      throw new Error('No data received from Hygraph');
    }

    return {
      data: { events: data.upcomingEventsBanners },
      errors: []
    };
  } catch (error) {
    console.error('Hygraph fetch error:', error);
    return {
      data: { events: [] },
      errors: [(error as Error).message]
    };
  }
}