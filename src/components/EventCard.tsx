import React from 'react';
import Link from 'next/link';

export interface EventCardProps {
  title: string;
  eventDescription: string;
  eventDate: string;
  eventLocation: string;
  eventTimeRange: string;
  id: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, eventDescription, id }) => {
  return (
    <div className="bg-background rounded-lg pr-6 shadow-1 grid grid-cols-6">
      {/* <p classNa</div>me="text-brand-secondary font-medium mb-2">{date}</p> */}
      <div className='col-span-5'>
        <h3 className="text-lg lg:text-xl font-bold mb-2">{title}</h3>
        <p className="text-base lg:text-lg text-foreground/80 mb-4 text-gray-400">{eventDescription}</p>
      </div>
      <div className='col-span-1 flex justify-end items-start'>
        <Link href={id} >
          <div className="transform transition-all duration-200 hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 72 72" fill="none" className="hover:text-brand-primary">
              <path d="M54.0001 21.15C54.0001 20.3544 53.684 19.5913 53.1214 19.0287C52.5588 18.4661 51.7957 18.15 51.0001 18.15L27.0001 18C26.2044 18 25.4414 18.3161 24.8787 18.8787C24.3161 19.4413 24.0001 20.2044 24.0001 21C24.0001 21.7956 24.3161 22.5587 24.8787 23.1213C25.4414 23.6839 26.2044 24 27.0001 24H43.6801L18.8701 48.87C18.5889 49.1489 18.3657 49.4807 18.2134 49.8463C18.0611 50.2118 17.9827 50.604 17.9827 51C17.9827 51.396 18.0611 51.7882 18.2134 52.1537C18.3657 52.5193 18.5889 52.8511 18.8701 53.13C19.1489 53.4112 19.4808 53.6344 19.8463 53.7867C20.2119 53.939 20.604 54.0174 21.0001 54.0174C21.3961 54.0174 21.7882 53.939 22.1538 53.7867C22.5194 53.6344 22.8512 53.4112 23.1301 53.13L48.0001 28.26V45C48.0001 45.7956 48.3161 46.5587 48.8787 47.1213C49.4413 47.6839 50.2044 48 51.0001 48C51.7957 48 52.5588 47.6839 53.1214 47.1213C53.684 46.5587 54.0001 45.7956 54.0001 45V21.15Z" fill="#3D3D3D" />
            </svg>

          </div>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;