import { createBrowserRouter } from "react-router-dom";
import Main from "./views/Main";
import Root from "./views/Root";
import Timetable from "./views/Timetable";

export default createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Main />
      },
      {
        path: 'timetable',
        element: <Timetable />
      }
    ]
  }
])