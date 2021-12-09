import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.scss";

//components
import { Navbar, Button } from "./component";

//containers
import { Section } from "./containers";

const App = () => {
  return (
    <div className="app">
      <nav>
        <Navbar />
      </nav>

      <main className="main">
        <section className="section__subscription">
          <Section
            shortDescription="spotify premium"
            heading="Get 3 months of Premium for free"
            about="Enjoy ad-free music listening, offline playback, and more. Cancel anytime."
            buttons={
              <Button
                textContent="Get 3 months free"
                background="var(--color-blue)"
                color="var(--color-light-blue)"
              />
            }
            longDescription="Individual plan only. ₦ 900/month after. Terms and conditions apply. Open only to users who haven't already tried Premium. Offer ends 31 December 2021."
            background="var(--color-light-blue)"
            backgroundImage="url('https://i.scdn.co/image/ab671c3d0000f430143da573d752a8cc11ca120e')"
          />
        </section>

        <section className="section__wrapped">
          <Section
            shortDescription="#spotifywrapped"
            heading="2021 Wrapped is ready."
            about="But it’s only available in the Spotify app. Download it now to discover more."
            buttons="space for button"
            longDescription="Listen to 2021 highlights here"
            background="var(--color-dark-pink) url('https://www-growth.scdn.co/static/home/wrapped-homepage-banner-graphic-desktop.svg')  "
          />
        </section>

        <section className="section__listening">
          <Section
            style={{ color: "green" }}
            shortDescription="Spotify Free"
            heading="Listening is everything"
            about="Millions of songs and podcasts. No credit card needed."
            buttons={
              <Button
                textContent="Get spotify free"
                background="var(--color-green)"
                color="var(--color-section-blue)"
              />
            }
            background="var(--color-section-blue) url('https://content-tooling.spotifycdn.com/images/b236bf87-bfd5-4bcb-b51a-77881073039c_lie_circles.svg')"
            color="var(--color-green)"
          />
        </section>
      </main>
    </div>
  );
};

export default App;
