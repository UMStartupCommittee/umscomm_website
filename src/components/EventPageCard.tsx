import React from 'react';
import { Button } from './ui/button';

export interface EventPageCardProps {
  title: string;
  eventDescription: string;
  eventDate: string;
  eventLocation: string;
  eventTimeRange: string;
  id: string;
  showButton?: boolean;
  eventRegistrationLink?: string;
}

const EventPageCard: React.FC<EventPageCardProps> = ({ title, eventDescription, eventDate, eventLocation, eventTimeRange, showButton = true, eventRegistrationLink }) => {
  return (
    <div className="bg-background rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-brand-primary/20">
      <h3 className="text-xl lg:text-2xl font-bold mb-4">{title}</h3>
      <p className="text-base lg:text-lg text-foreground/80 mb-6">{eventDescription}</p>
      <div className="text-sm lg:text-base text-foreground/60 space-y-2 mb-6">
        <p className="flex items-center gap-2">
          <strong>Date:</strong> {eventDate}
        </p>
        <p className="flex items-center gap-2">
          <strong>Time:</strong> {eventTimeRange}
        </p>
        <p className="flex items-center gap-2">
          <strong>Venue:</strong> {eventLocation}
        </p>
      </div>
      {showButton && eventRegistrationLink && (
        <Button
          asChild
          className="text-brand-primary hover:bg-brand-secondary/70"
        >
          <a
            href={eventRegistrationLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Register now
          </a>
        </Button>
      )}
      {showButton && !eventRegistrationLink && (
        <Button
          className="text-brand-primary hover:bg-brand-secondary/70"
          disabled
        >
          Registration coming soon
        </Button>
      )}
    </div>
  );
};

export default EventPageCard;