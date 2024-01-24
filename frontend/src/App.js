import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import { useEffect } from "react";

import Events from './components/Events';
import AllHackathonRegistrations from "./pages/AllHackathonRegistrations";
import AllUsers from "./pages/AllUsers";
import AllWorkshopsRegistrations from "./pages/AllWorkshopsRegistrations";
import Developers from "./pages/Developers";
import Error from './pages/Error';
import HackathonForm from './pages/HackathonForm';
import HackathonPage from './pages/HackathonPage';
import MainHome from './pages/MainHome';
import RegisterForm from './pages/RegisterForm';


function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainHome />,
      // errorElement: <ErrorPage />,
    },
    {
      path: "/events",
      // element: <Workshops />,
      element: <Events/>,
      // errorElement: <ErrorPage />,
    },
    // {
    //   path: "/login",
    //   element: <Login />,
    //   // errorElement: <ErrorPage />,
    // },
    {
      path: "/registration-form",
      element: <RegisterForm />,
      // errorElement: <ErrorPage />,
    },
    {
      path: "/hackathon-form",
      element: <HackathonForm/>,
      // errorElement: <ErrorPage />,
    },
    {
      path: "/hackathon",
      element: <HackathonPage/>,
      // errorElement: <ErrorPage />,
    },
    {
      path: "/developers",
      element: <Developers />
    },
    {
      path: "/users",
      element: <AllUsers/>,
      // errorElement: <ErrorPage />,
    },
    {
      path: "/hackathon-registrations",
      element: <AllHackathonRegistrations/>,
      // errorElement: <ErrorPage />,
    },
    {
      path: "/workshops-registrations",
      element: <AllWorkshopsRegistrations/>,
      // errorElement: <ErrorPage />,
    },
    {
      path: "/*",
      element: <Error/>,
      // errorElement: <ErrorPage />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
