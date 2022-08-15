/*eslint-disable */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Newsletter from "../components/Newsletter/Newsletter";
import Reason from "../components/Reason/Reason";
import Start from "../components/Start/Start";
import Work from "../components/Work/Work";
import Plan from "../components/Plan/Plan";
import Marquees from "../components/marquees/Marquees";
import Certificate from "../components/certificates/Certificate";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    }
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/62eb871a54f06e12d88cdd53/default";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Marquees />
      <About />
      <Certificate />
      <Start />
      <Work />
      <Reason />
      <Plan />
      <Newsletter />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
