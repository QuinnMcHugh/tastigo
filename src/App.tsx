// import './App.css';
import { createBrowserRouter, RouterProvider, useParams } from "react-router-dom";
import WeeklyDeals from './weekly-deals';
import DealPage from "./deal-page";
import { NotFoundPage } from "./not-found-page";

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
  return (
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
  );
}

export default App;
