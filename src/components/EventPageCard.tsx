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
}

const EventPageCard: React.FC<EventPageCardProps> = ({ title, eventDescription, eventDate, eventLocation, eventTimeRange, id, showButton = true }) => {
  return (
    <div className="bg-background rounded-lg p-6 shadow-1">
      <h3 className="text-xl lg:text-2xl font-bold mb-4">{title}</h3>
      <p className="text-base lg:text-lg text-foreground/80 mb-4">{eventDescription}</p>
      <div className="text-sm lg:text-base text-foreground/60 mb-4">
        <p><strong>Date:</strong> {eventDate}</p>
        <p><strong>Time:</strong> {eventTimeRange}</p>
        <p><strong>Venue:</strong> {eventLocation}</p>
      </div>
      {showButton && (
        <Button className="text-brand-primary hover:text-brand-primary/80">
          Register now
        </Button>
      )}
    </div>
  );
};

export default EventPageCard;