import React from "react";
import SectionHeader from "../_components/Repeating_components/SectionHeader";
import ContactCards from "../_components/ContactCards";
export const metadata = {
  title: 'Contact us',
  description: 'Delicious handcrafted cookie dough treats and more!',
};
const page = () => {
  return (
    <div className="">
      <SectionHeader title={"Contact Us"} bgImage={"/hero.png"} />
      <ContactCards/>
    </div>
  );
};

export default page;
