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
