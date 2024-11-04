import React from 'react';
import { ArrowUp, ArrowDown, MapPin, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { IDeal, WeeklyRecurrence } from './interfaces';
import { dealsRepo } from './deals-repo';
import { Header } from './header';
import { NotFoundPage } from './not-found-page';

interface IDealPageProps {
  id: number;
}

const getOccurrenceText = (deal: IDeal): string => {
  const recurrence = deal.occurrence.recurrence;
  if (recurrence.pattern === 'weekly') {
    const daysPortion = (recurrence as WeeklyRecurrence).description;

    if (deal.occurrence.startTime && deal.occurrence.endTime) {
      const timePortion = `${deal.occurrence.startTime} to ${deal.occurrence.endTime}`;
      return `${timePortion} | ${daysPortion}`;  
    } else {
      return daysPortion;
    }
  }

  return '';
};

export default function DealPage({ id }: IDealPageProps) {
  const [deal, setDeal] = React.useState<IDeal>();
  const [isDealNotFound, setIsDealNotFound] = React.useState(false);

  React.useEffect(() => {
    const deal = dealsRepo.getDeal(id);
    setDeal(deal);

    if (deal == null) {
      setIsDealNotFound(true);
    }
  }, [id]);

  if (isDealNotFound) {
    return <NotFoundPage />;
  } else if (deal == null) {
    return null;
  }

  return (
    <>
      <Header />
      <div className="flex justify-center">
        <Card className="mx-8 my-6 max-w-2xl ">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <CardTitle className="text-3xl font-bold tracking-normal">{deal.title} at {deal.establishmentName}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2 text-muted-foreground mb-4">
              <Clock className="w-4 h-4 min-w-4 mt-1 mb-1" />
              <span>{getOccurrenceText(deal)}</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground mb-4">
              <MapPin className="w-4 h-4" />
              <a href={deal.location} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">{deal.establishmentName}</a>
            </div>
            <img className="aspect-video rounded-lg mb-4" src={deal.imageUrl} />
            <p className="text-muted-foreground">{deal.longDescription}</p>
          </CardContent>

          <CardFooter className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon">
                <ArrowUp className="h-4 w-4" />
              </Button>
              <span className="font-bold">12</span>
              <Button variant="outline" size="icon">
                <ArrowDown className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
