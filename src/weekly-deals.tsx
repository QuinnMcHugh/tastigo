import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { IDeal } from './interfaces';
import { Link } from 'react-router-dom';
import { dealsRepo } from './deals-repo';
import { Header } from './header';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

type IDealCardProps = IDeal;

const DealCard = (props: IDealCardProps) => {
  const handleClick = () => {
    console.log('woo hoo');
  };

  return (
    <Link to={`/deals/${props.id}`}>
      <button
        onClick={handleClick}
        className="bg-white rounded-lg shadow-md overflow-hidden text-left transition-transform duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-3 sm:p-4">
            <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{props.title}</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-4">{props.description}</p>
          </div>
          <img src={props.image} alt={props.title} className="w-full h-24 sm:h-32 object-cover" />
        </div>
      </button>
    </Link>
  );
};

interface IDayCardAccordionProps {
  day: string;
  deals: IDeal[];
}

const DayAccordion = ({ day, deals }: IDayCardAccordionProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="mb-4">
      <button
        className="w-full flex justify-between items-center bg-white p-4 rounded-lg shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">{day}</h3>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {isOpen && (
        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {deals.map((deal) => (
            <DealCard {...deal} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function WeeklyDeals() {
  const mockDeals = React.useMemo(() => dealsRepo.getAllDeals(), []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {daysOfWeek.map((day) => (
          <DayAccordion key={day} day={day} deals={mockDeals} />
        ))}
      </main>
    </div>
  );
}