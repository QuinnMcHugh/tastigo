import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

interface IDeal {
  id: number;
  title: string;
  description: string;
  image: string;
}

const mockDeals: IDeal[] = [
  { id: 1, title: 'Half-Price Sushi', description: 'Enjoy 50% off all sushi rolls', image: '/placeholder.svg?height=100&width=200' },
  { id: 2, title: '2-for-1 Movies', description: 'Buy one ticket, get one free', image: '/placeholder.svg?height=100&width=200' },
  { id: 3, title: 'Happy Hour Special', description: '$5 craft beers and appetizers', image: '/placeholder.svg?height=100&width=200' },
  { id: 4, title: 'Spa Day Discount', description: '30% off all spa treatments', image: '/placeholder.svg?height=100&width=200' },
];

type IDealCardProps = IDeal;

const DealCard = (props: IDealCardProps) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="p-3 sm:p-4">
      <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{props.title}</h3>
      <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-4">{props.description}</p>
    </div>
    <img src={props.image} alt={props.title} className="w-full h-24 sm:h-32 object-cover" />
  </div>
);

interface IDayCardAccordionProps {
  day: string;
  deals: IDeal[];
}

const DayAccordion = ({ day, deals }: IDayCardAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

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
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-md mr-2"></div>
            <h1 className="text-xl sm:text-2xl font-bold">Tastigo</h1>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-0 sm:mr-4">Seattle Deals</h2>
            <select 
              className="border rounded-md p-2 w-full sm:w-auto"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option>All Categories</option>
              <option>Restaurants</option>
              <option>Entertainment</option>
              <option>Shopping</option>
              <option>Wellness</option>
            </select>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {daysOfWeek.map((day) => (
          <DayAccordion key={day} day={day} deals={mockDeals} />
        ))}
      </main>
    </div>
  );
}
