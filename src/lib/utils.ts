import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Event } from "@/types/hygraph"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const filterEvents = (events: Event[]) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return {
    upcomingEvents: events.filter(event => new Date(event.date) >= today)
  };
}

