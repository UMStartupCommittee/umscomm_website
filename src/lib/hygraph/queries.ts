export const GET_EVENTS = `
query GetEvents {
  upcomingEventsBanners(first: 50) {
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