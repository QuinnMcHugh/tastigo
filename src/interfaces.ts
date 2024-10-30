export interface IDeal {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  establishmentName: string;
  occurrence: IDealOccurrence;
  location: string;
  createdDateTime: Date;
  dealProof: string;
  neighborhood: string;
}

export type DayOfWeek = 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday'

export interface WeeklyRecurrence {
  pattern: 'weekly';
  patternSpecifics: {
    days: Array<DayOfWeek>;
  };
  description: string;
}

export interface WhenOpenRecurrence {
  pattern: 'whenOpen';
}

type RecurrenceType = WeeklyRecurrence | WhenOpenRecurrence;

export interface IDealOccurrence {
  recurrence: RecurrenceType;
  allDay?: boolean;
  startTime?: string;
  endTime?: string;

  // Unused but would be useful for seasonal/limited run deals
  startDate?: Date;
  endDate?: Date;
}
