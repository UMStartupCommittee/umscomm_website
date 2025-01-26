export const GET_EVENTS = `
query GetEvents {
  upcomingEventsBanners {
    title
    eventDate
    eventDescription
    eventLocation
    eventTimeRange
    id
  }
}
`;

// Add other queries as needed