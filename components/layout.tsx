import { useEffect, useState } from "react";
import classNames from "classnames";

import Navbar from "./elements/navbar";
import Footer from "./elements/footer";
import NotificationBanner from "./elements/notification-banner";
import GetInTouchForm from "./sections/get-in-touch-form";
import Section from "./sections/sections";

const Layout = ({
  Hero,
  children,
  global,
  className = "",
  displayPageBackground = false,
  displayFooterBackground = true,
}) => {
  const { navbar, footer, notificationBanner } = global;

  const [bannerIsShown, setBannerIsShown] = useState(true);

  return (
    <div
      className={classNames("flex flex-col justify-between min-h-screen", {
        "bg-default md:bg-cover bg-contain": displayPageBackground,
      })}
    >
      <Navbar navbar={navbar} />
      <div className="relative z-2 pt-40 bg-hero bg-cover min-h-screen">
        {notificationBanner && notificationBanner.enable && bannerIsShown && (
          <NotificationBanner
            data={notificationBanner}
            closeSelf={() => setBannerIsShown(false)}
          />
        )}
        <Hero />
      </div>
      <div className={classNames("container", className)}>{children}</div>
      <Footer footer={footer} displayBackground={displayFooterBackground}>
        {/* ***********
        ****************
        ****************
        ****************
        ****************
          Get in touch
        ****************
        ****************
        ****************
        ****************
        */}
        <Section
          id="contact"
          className="mt-20 lg:mt-80 items-center"
          smallTitle="Contact us"
          title="Get In Touch"
        >
          <div className="w-full" style={{ maxWidth: 540 }}>
            <GetInTouchForm />
          </div>
        </Section>
      </Footer>
    </div>
  );
};

export default Layout;