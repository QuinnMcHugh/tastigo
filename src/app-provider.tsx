import React from 'react';import { DayOfWeek } from './interfaces';

export interface IAppContext {
  // Open day accordions in the weekly deals view. Helps preserve when using back navigation
  openDays: DayOfWeek[];
  setOpenDays: React.Dispatch<React.SetStateAction<DayOfWeek[]>>;
}

export const AppContext = React.createContext<IAppContext>({
  openDays: [],
  setOpenDays: () => null,
});

export const useAppContext = () => {
  return React.useContext(AppContext);
};
