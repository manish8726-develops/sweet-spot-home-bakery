import React from 'react'
import SectionHeader from '../_components/Repeating_components/SectionHeader'
export const metadata = {
  title: 'Offers',
  description: 'Delicious handcrafted cookie dough treats and more!',
};
const page = () => {
  return (
    <div>
        
       <SectionHeader title = {"Current Offers at Different Locations"}
  bgImage = {"/hero.png"}/>
    </div>
  )
}

export default page
