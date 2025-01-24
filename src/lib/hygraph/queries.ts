export const GET_EVENTS = `
query GetEvents {
  upcomingEventsBanners(first: 4) {
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