import React from 'react'
import SectionHeader from '../_components/Repeating_components/SectionHeader'
import FounderNotes from '../_components/_HomeComponents/FounderNotes'
import Divider from '../_components/Divider'
import HeroSection from '../_components/_HomeComponents/HeroSection'

const page = () => {
  return (
    <div>
      <SectionHeader title = {"Founder Notes"}
  bgImage = {"/hero.png"}/>
      <Divider>
        <FounderNotes/>
        <div className="bg-[#504536] text-white p-6 rounded-[0_2.5rem_2.5rem_0] shadow-lg w-[94%] mx-auto">
            <h2 className='text-[28px] poppin'>Culinary Philosophy</h2>
          <p className="text-[18px] leading-relaxed text-justify mb-6 font-[400]">
            At The Cookie Dough under Shubh’s Wonder Kitchen, Shubhi blends health and taste by using handpicked, homemade ingredients. Her philosophy is that delicious food can also be healthy, which is reflected in every dish.
          </p>
            <h2 className='text-[28px] poppin'>Culinary Philosophy</h2>
          <p className="text-[18px] leading-relaxed text-justify mb-6 font-[400]">
            The cafe regularly hosts events and workshops, including summer camp baking classes for children, fostering a sense of community and learning.
          </p>
            <h2 className='text-[28px] poppin'>Sustainability Practices</h2>
          <p className="text-[18px] leading-relaxed text-justify mb-6 font-[400]">
         We prioritize sustainability by sourcing ingredients responsibly and minimizing waste through eco-friendly practices.
          </p>

       
        </div>
        <HeroSection/>
      </Divider>
    </div>
  )
}

export default page
