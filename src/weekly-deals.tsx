import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { DayOfWeek, IDeal, WeeklyRecurrence } from './interfaces';
import { Link } from 'react-router-dom';
import { dealsRepo } from './deals-repo';
import { Header } from './header';
import { useAppContext } from './app-provider';

const daysOfWeek: DayOfWeek[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

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
          <img src={props.imageUrl} alt={props.title} className="w-full h-24 sm:h-32 object-cover" />
        </div>
      </button>
    </Link>
  );
};

interface IDayCardAccordionProps {
  day: DayOfWeek;
  deals: IDeal[];
}

const dealIsValidForDay = (deal: IDeal, day: DayOfWeek): boolean => {
  const recurrenceType = deal.occurrence.recurrence;

  if (recurrenceType.pattern === 'weekly') {
    const weeklyRecurrence = recurrenceType as WeeklyRecurrence;
    return weeklyRecurrence.patternSpecifics.days.includes(day);
  } else if (recurrenceType.pattern === 'whenOpen') {
    // Can't determine if the establishment is open on the given day
    return false;
  }

  return false;
};

const DayAccordion = ({ day, deals }: IDayCardAccordionProps) => {
  const { openDays, setOpenDays } = useAppContext();

  const daysDeals = React.useMemo(() => deals.filter((deal) => {
    if (dealIsValidForDay(deal, day)) {
      return true;
    }
  }), [day, deals]);

  const capitalizedDayName = day.charAt(0).toUpperCase() + day.slice(1);

  const isOpen = React.useMemo(() => openDays.includes(day), [day, openDays]);
  const setIsOpen = React.useMemo(() => (isOpen: boolean) => {
    if (isOpen) {
      setOpenDays((openDays) => [...openDays, day]);
    } else {
      setOpenDays((openDays) => openDays.filter((openDay) => openDay !== day));
    }
  }, [setOpenDays, day]);

  return (
    <div className="mb-4">
      <button
        className="w-full flex justify-between items-center bg-white p-4 rounded-lg shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">{capitalizedDayName}</h3>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {isOpen && (
        <div className="mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {daysDeals.map((deal) => (
            <DealCard key={deal.id} {...deal} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function WeeklyDeals() {
  const deals = React.useMemo(() => dealsRepo.getAllDeals(), []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {daysOfWeek.map((day) => (
          <DayAccordion key={day} day={day} deals={deals} />
        ))}
      </main>
    </div>
  );
}
