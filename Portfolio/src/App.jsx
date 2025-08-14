import { createBrowserRouter , RouterProvider } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <NotFoundPage/>,
    children: [
      { index: true , element: <HomePage /> },
      { path: "projects" , element: <ProjectsPage /> },
      { path: "about" , element: <AboutPage /> },
      { path: "contacts" , element: <ContactPage /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} /> ;
}

export default App;
