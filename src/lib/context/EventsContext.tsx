'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react'
import { Event } from '@/types/hygraph'

interface EventsContextType {
  events: Event[]
  setEvents: (events: Event[]) => void
  getEventById: (id: string) => Event | undefined
  isLoaded: boolean
  setIsLoaded: (loaded: boolean) => void
}

const EventsContext = createContext<EventsContextType | undefined>(undefined)

export function EventsProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<Event[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  const getEventById = (id: string) => {
    return events.find(event => event.id === id)
  }

  return (
    <EventsContext.Provider value={{ events, setEvents, getEventById, isLoaded, setIsLoaded }}>
      {children}
    </EventsContext.Provider>
  )
}

export function useEvents() {
  const context = useContext(EventsContext)
  if (context === undefined) {
    throw new Error('useEvents must be used within an EventsProvider')
  }
  return context
}