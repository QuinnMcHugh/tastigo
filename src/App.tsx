import React from "react";
import { createBrowserRouter, RouterProvider, useParams } from "react-router-dom";
import WeeklyDeals from './weekly-deals';
import DealPage from "./deal-page";
import { NotFoundPage } from "./not-found-page";
import { AppContext, IAppContext } from "./app-provider";
import { DayOfWeek } from "./interfaces";

const router = createBrowserRouter([
  {
    path: "/",
    Component: () => {
      return <WeeklyDeals />;
    },
  },
  {
    path: "/deals/:id",
    Component: () => {
      const { id: strId } = useParams();
      const id = parseInt(strId || '');

      return <DealPage id={id} />;
    },
  },
  {
    path: "*",
    Component: () => <NotFoundPage />,
  }
]);

function App() {
  const [openDays, setOpenDays] = React.useState<DayOfWeek[]>([]);

  const appContext: IAppContext = {
    openDays,
    setOpenDays,
  };

  return (
    <AppContext.Provider value={appContext}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;
