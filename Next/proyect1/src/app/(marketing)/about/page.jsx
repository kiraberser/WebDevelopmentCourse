'use client'

import Image from "next/image";

const About = () => {

  return (
    <div className="h-screen ">
      <h1>About</h1>
      <div className="rating mb-5 ">
        <input type="radio" name="rating-1" className="mask mask-star bg-yellow-400" aria-label="1 star" />
        <input type="radio" name="rating-1" className="mask mask-star bg-yellow-400" aria-label="2 star" defaultChecked />
        <input type="radio" name="rating-1" className="mask mask-star bg-yellow-400" aria-label="3 star" />
        <input type="radio" name="rating-1" className="mask mask-star bg-yellow-400" aria-label="4 star" />
        <input type="radio" name="rating-1" className="mask mask-star bg-yellow-400" aria-label="5 star" />
      </div>
      <Image
        src="/marco_aurelio.jpeg"
        width={500}
        height={500}
        alt="Emperador Romano Marco Aurelio"
      />
    </div>
  );
}

export default About