import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollEnhancements from "./ScrollEnhancements";

const RootLayout = () => {
  return (
    <>
      <ScrollEnhancements />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
