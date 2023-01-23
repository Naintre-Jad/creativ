import React from "react";
import FrameNinetyTwo from "pages/FrameNinetyTwo";
import PageFive from "pages/PageFive";
import PageTwo from "pages/PageTwo";
import SinscrireetapeTwo from "pages/SinscrireetapeTwo";
import Seconnecterousinscrire from "pages/Seconnecterousinscrire";
import SeconnecteretapeTwo from "pages/SeconnecteretapeTwo";
import LandingPageOne from "pages/LandingPageOne";
import DesktopTwo from "pages/DesktopTwo";
import PageThree from "pages/PageThree";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageThree />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/desktoptwo" element={<DesktopTwo />} />
        <Route path="/landingpageone" element={<LandingPageOne />} />
        <Route path="/seconnecteretapetwo" element={<SeconnecteretapeTwo />} />
        <Route
          path="/seconnecterousinscrire"
          element={<Seconnecterousinscrire />}
        />
        <Route path="/sinscrireetapetwo" element={<SinscrireetapeTwo />} />
        <Route path="/pagetwo" element={<PageTwo />} />
        <Route path="/pagefive" element={<PageFive />} />
        <Route path="/frameninetytwo" element={<FrameNinetyTwo />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
