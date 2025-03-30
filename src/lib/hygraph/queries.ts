export const GET_EVENTS = `
query GetEvents {
  upcomingEventsBanners(first: 50) {
    title
    eventDate
    eventDescription
    eventLocation
    eventTimeRange
    id
    eventRegistrationLink
  }
}
`;

export const GET_SINGLE_EVENT = `
query GetSingleEvent($id: ID!) {
  upcomingEventsBanner(where: {id: $id}) {
    title
    eventDate
    eventDescription
    eventLocation
    eventTimeRange
    id
    eventRegistrationLink
  }
}
`;

export const GET_UPCOMING_EVENTS = `
query UpcomingEventsQuery($today: Date!) {
  upcomingEventsBanners(
    where: {date_gte : $today} 
    orderBy: date_ASC
  ){
    id
    title
    eventDate
    eventDescription
    eventLocation
    eventTimeRange
    eventRegistrationLink
    date
  }
}`;

export const GET_UPCOMING_EVENTS_PAGINATED = `
  query UpcomingEventsQuery($today: Date!, $skip: Int!, $first: Int!) {
    upcomingEventsBanners(
      where: {date_gte: $today}
      orderBy: date_ASC
      skip: $skip
      first: $first
    ) {
      id
      title
      eventDate
      eventDescription
      eventLocation
      eventTimeRange
      eventRegistrationLink
      date
    }
      upcomingEventsBannersConnection(where: {date_gte: $today}) {
        aggregate {
          count
        }
      }
  }
`;

export const GET_PAST_EVENTS_PAGINATED = `
  query PastEventsQuery($today: Date!, $skip: Int!, $first: Int!) {
    upcomingEventsBanners(
      where: {date_lt: $today}
      orderBy: date_DESC
      skip: $skip
      first: $first
    ) {
      id
      title
      eventDate
      eventDescription
      eventLocation
      eventTimeRange
      eventRegistrationLink
      date
    }
  }
`;