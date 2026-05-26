import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollProgress from "../components/ScrollProgress/ScrollProgress";
import BackToTop from "../components/BackToTop/BackToTop";

const MainLayout = () => {
  return (
    <div
      className="
      min-h-screen
      flex
      flex-col

      bg-[var(--background)]
      text-[var(--text)]
      "
    >
      {/* Scroll Indicator */}

      <ScrollProgress />

      {/* Back To Top Button */}

      <BackToTop />

      {/* Header */}

      <header>
        <Navbar />
      </header>

      {/* Main Content */}

      <main
        className="
        flex-1
        pt-[80px]
        overflow-hidden
        "
      >
        <Outlet />
      </main>

      {/* Footer */}

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;