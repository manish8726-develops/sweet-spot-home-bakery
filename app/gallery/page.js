import React from 'react';
import SectionHeader from '../_components/Repeating_components/SectionHeader';
import Gallery from '../_components/Gallery';
import {gallery} from '../_services/index'
export const metadata = {
  title: 'Gallery',
  description: 'Delicious handcrafted cookie dough treats and more!',
};
export default async function Page() {
  const data = await gallery();
  return (
    <div>
      <SectionHeader title="Photo Gallery" bgImage="/hero.png" />
      <div>
        <h1 className="text-5xl text-center my-15 poppin">Photo Gallery</h1>
        <Gallery data={data} />
      </div>
    </div>
  );
}
