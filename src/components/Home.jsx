import React from 'react'

const Home = () => {
  return (
  <section className='' id='#home'>
    <div className="text-center pt-32 pb-16 items-center font-poppins">
      <h1 className="text-3xl md:text-[65px] font-bold">
        <span className="text-[#4d00ff]">Plexarow <span className='text-[#FF5252]'>:</span></span> Your Gateway to
      </h1>
      <h1 className="text-3xl md:text-[65px] font-bold mt-16">
        Targeted In-Store Advertising
      </h1>
      <p className="text-2xl mt-12">Target. Display. Engage.</p>
    </div>
    <div className='rounded-lg w-full flex justify-center'>
      <img src="https://static.wixstatic.com/media/nsplsh_022f345519c540178b455933a19e2d26~mv2.jpg/v1/fill/w_1212,h_527,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Brecht%20Corbeel.jpg" alt="" className='rounded-[50px]'/>
    </div>
  </section>
  )
}

export default Home