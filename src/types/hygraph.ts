export interface Event {
    title: string;
    eventDescription: string;
    eventDate: string;
    eventLocation: string;
    eventTimeRange: string;
    id: string;
    eventRegistrationLink?: string;
    date: Date;
}

export interface EventsResponse {
    upcomingEventsBanners: Event[];
}

export interface ExtendedEventsResponse extends EventsResponse {
    upcomingEventsBannersConnection: {
        aggregate: {
            count: number;
        }
    };
}

export interface SingleEventResponse {
    upcomingEventsBanner: {
        title: string;
        eventDescription: string;
        eventDate: string;
        eventLocation: string;
        eventTimeRange: string;
        id: string;
        eventRegistrationLink?: string
        date: Date;
    };
}

export interface HygraphResponse<T> {
    data: T;
    errors?: string[];
}