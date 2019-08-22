import React from "react";
import HeroSection from "./home/HeroSection";
import BannerSection from "./home/BannerSection";
import FeatureSection from "./home/FeatureSection";
import BuySection from "./home/BuySection";
import ProfitSection from "./home/ProfitSection";
import TestimonialSection from "./home/TestimonialSection";
import CallToActionSection from "./home/CallToActionSection";

const CONTACT_PHONENUMBER = "628121156941";

function HomePage() {
  return (
    <div>
      <BannerSection />
      <HeroSection />
      <FeatureSection />
      <BuySection
        price="Rp 16.000"
        onButtonClick={() => {
          window.open(
            "https://api.whatsapp.com/send?phone=" +
              CONTACT_PHONENUMBER +
              "&text=Halo%20kak%2C%20saya%20mau%20beli%20tempe%20tempurnya%20doong%21",
            "_blank"
          );
        }}
      />
      <ProfitSection />
      <TestimonialSection />
      <CallToActionSection
        onButtonClick={() => {
          window.open(
            "https://api.whatsapp.com/send?phone=" +
              CONTACT_PHONENUMBER +
              "&text=Halo%20kak%2C%20saya%20minat%20jadi%20reseller.%20Mau%20dong%20beli%20paket%20resellernya.",
            "_blank"
          );
        }}
      />
    </div>
  );
}

export default HomePage;
