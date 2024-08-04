import React from 'react';
import { MdArrowOutward } from "react-icons/md";

const cardDetails = [
  {
    id: 1,
    headline: "Redefine In-Store Advertising",
    content: "Strategically place your brand's message across our extensive network of 400+ screens.",
    image: "/icons/img1.svg",
    color: "#EAE2DD"
  },
  {
    id: 2,
    headline: "Target Diverse Locations",
    content: "Reach your ideal audience in salons, cafes, and retail stores.",
    image: "/icons/img2.svg",
    color: "#FAC3C1"
  },
  {
    id: 3,
    headline: "Elevate Your Marketing Strategy",
    content: "Achieve unmatched precision in targeting and boost your brand's visibility.",
    image: "/icons/img3.svg",
    color: "#CBC2FF"
  }
];

const Whyus = () => {
  return (
    <section className="flex flex-col items-center font-roboto text-black mt-12" id='why'>
      <div className="text-center mb-8">
        <h1 className="text-5xl font-semibold">Boost your brand's visibility</h1>
        <p className="text-xl mt-2">Show ads directly to your customer at the right place</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 ">
        {cardDetails.map((item) => (
          <div key={item.id} className="p-6 rounded-lg shadow-lg max-w-96 h-80 relative" style={{ backgroundColor: item.color }}>
            <h2 className="text-2xl font-bold mb-[-8px]">{item.headline}</h2>
            <p className="mb-4 text-lg text-[#2D2E24]">{item.content}</p>
            <img src={item.image} alt={item.headline} className="w-92 mx-auto ml-24 absolute bottom-0 right-6" />
          </div>
        ))}
      </div>
      <div className='w-full mt-40'>
        <h1 className='text-5xl font-semibold max-w-6xl mx-auto'>Discover our services</h1>
        <div className='flex gap-4 mt-4 max-w-6xl mx-auto'>
            <div className='flex justify-between px-6 py-6 w-full mx-auto bg-[#F8F3F0] rounded-lg'>
                <p className='text-xl'>Boost your brand</p>
                <MdArrowOutward size={24}/>
            </div>
            <div className='flex justify-between px-6 py-6 w-full mx-auto bg-[#F8F3F0] rounded-lg'>
                <p className='text-xl'>Rent your space</p>
                <MdArrowOutward size={24}/>
            </div>
            <div className='flex justify-between px-6 py-6 w-full mx-auto bg-[#F8F3F0] rounded-lg'>
                <p className='text-xl'>Creative Help</p>
                <MdArrowOutward size={24}/>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;
