import React, { useState, useEffect } from 'react';
import Team from "./Team/Team.jsx";
import Navbar from './Home/Navbar/Navbar';
import Home from './Home/Home.jsx';
import Events from './Events/Events.jsx';
import Gallery from './Gallery/Gallery.jsx';
import About from './About/About.jsx';
import Footer from './Home/Footer.jsx';
import Loading from './Small Components/Loading.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: "/Gallery",
      element: (
        <>
          <Navbar />
          <Gallery />
          <Footer />
        </>
      ),
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/About",
      element: (
        <>
          <Navbar />
          <About />
          <Footer />
        </>
      ),
    },
    {
      path: "/Events",
      element: (
        <>
          <Navbar />
          <Events />
          <Footer />
        </>
      ),
    },
    {
      path: "/Team",
      element: (
        <>
          <Navbar />
          <Team />
          <Footer />
        </>
      ),
    },
  ]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      setLoading(false); // Set loading to false once the page is loaded
    };

    const timeout = setTimeout(() => setLoading(false), 3000); // Fallback to stop loading after 3 seconds

    // Add event listener for DOM content load
    window.addEventListener("DOMContentLoaded", handlePageLoad);

    // Clean up the event listener and timeout
    return () => {
      window.removeEventListener("DOMContentLoaded", handlePageLoad);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        // Render the router once loading is complete
        <RouterProvider router={router} />
      )}
    </div>
  );
}

export default App;
