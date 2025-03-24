export interface Event {
    title: string;
    eventDescription: string;
    eventDate: string;
    eventLocation: string;
    eventTimeRange: string;
    id: string;
    eventRegistrationLink?: string;
}

export interface EventsResponse {
    upcomingEventsBanners: Event[];
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
    };
}

export interface HygraphResponse<T> {
    data: T;
    errors?: string[];
}